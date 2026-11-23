// Blog sitemap generator (Batch 2 + Batch 3 + Batch 4) — builds the blog
// home (17) + category hub (119) + published article URLs and writes the
// WHOLE sitemap as an index + parts (see scripts/sitemap-split.cjs).
//
// SPLIT (2026-11-22): public/sitemap.xml used to be one 44 MiB file, which
// Cloudflare Pages rejected (25 MiB/file limit, deploy 894605a1 failed).
// public/sitemap.xml is now a sitemap-index listing public/sitemap-1.xml
// ... sitemap-N.xml. The non-blog entries live in
// scripts/sitemap-nonblog.xml (hand-maintained); this script assembles them
// with the generated blog block and re-splits. Entries are deduped on
// write (Defect A, 2026-11-23 — buildFileMap drops duplicated hreflang
// lines); the blog entries are already unique by construction.
//
// SOURCE OF TRUTH: BLOG_CATEGORY_SLUGS + BLOG_ARTICLES in
// src/data/blogArticles.ts, and each locale's article slugs in
// src/locales/<lang>/slugs.ts (parsed with regexes — plain literals).
// Homes are the 17 /<lang>/blog/ paths. Articles get ONE URL per published
// locale (EN + every locale with a slugs.ts entry for that article),
// alternates = published locales + x-default → EN, per-article lastmod
// from publishedAt. Batch 3 was EN-only; Batch 4 adds localized URLs.
//
// Usage:
//   node scripts/generate-blog-sitemap.cjs          # regenerate index + parts
//   node scripts/generate-blog-sitemap.cjs --check  # exit 1 if stale
//
// Writes atomically (temp file + rename per file) and prints the new URL
// total. Verify with: node scripts/check-sitemap.cjs

const fs = require('fs');
const path = require('path');
const {
  extractUrlBlocks,
  buildFileMap,
  writeSitemapParts,
  partFileName,
} = require('./sitemap-split.cjs');

const REPO_ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(REPO_ROOT, 'public');
const NONBLOG_PATH = path.join(__dirname, 'sitemap-nonblog.xml');
const REGISTRY_PATH = path.join(REPO_ROOT, 'src', 'data', 'blogArticles.ts');
const BASE = 'https://compressmypic.online';
const LASTMOD = '2026-11-17'; // Batch 2 ship date; Batch 3 uses per-article lastmod
const LANGS = ['en', 'es', 'pt', 'fr', 'de', 'it', 'id', 'ru', 'ja', 'ko', 'zh', 'hi', 'ar', 'tr', 'vi', 'bn', 'ur'];

const BLOCK_START = '  <!-- Blog (Batch 2): 17 homes + 119 category hubs. Regenerate with scripts/generate-blog-sitemap.cjs. -->';
const BLOCK_END = '  <!-- /Blog (Batch 2) -->';

function parseCategorySlugs() {
  const src = fs.readFileSync(REGISTRY_PATH, 'utf8');
  const m = src.match(/export const BLOG_CATEGORY_SLUGS[^=]*=\s*\{([\s\S]*?)\n\};/);
  if (!m) throw new Error('BLOG_CATEGORY_SLUGS not found in src/data/blogArticles.ts');
  const out = {};
  for (const langMatch of m[1].matchAll(/(\w+):\s*\{([^}]*)\}/g)) {
    const lang = langMatch[1];
    const entries = {};
    for (const e of langMatch[2].matchAll(/'?([\w-]+)'?:\s*'([^']+)'/g)) {
      entries[e[1]] = e[2];
    }
    out[lang] = entries;
  }
  for (const lang of LANGS) {
    if (!out[lang] || Object.keys(out[lang]).length === 0) {
      throw new Error(`BLOG_CATEGORY_SLUGS missing language: ${lang}`);
    }
  }
  return out;
}

/**
 * Published articles from the registry, in registry order.
 * Parses the BLOG_ARTICLES array body only, splits it on `id: '...'` markers
 * (one per article object, field order id -> status -> publishedAt -> en),
 * and reads status / publishedAt / en.slug from each chunk. Throws on a
 * missing field or a duplicate id/slug — the sitemap must never silently
 * drop an article or emit a duplicate URL.
 */
function parseArticles() {
  const src = fs.readFileSync(REGISTRY_PATH, 'utf8');
  const arrStart = src.indexOf('export const BLOG_ARTICLES');
  if (arrStart === -1) throw new Error('BLOG_ARTICLES not found in src/data/blogArticles.ts');
  // NOTE (Batch 3 fix): the array literal's '[' is the one after '= [',
  // NOT the first '[' after the declaration — that one is the '[' in the
  // type annotation 'BlogArticle[]', which made the parser see an empty
  // registry (0 articles) as soon as Batch 3 added real articles.
  const eqBracket = src.indexOf('= [', arrStart);
  if (eqBracket === -1) throw new Error('BLOG_ARTICLES array not found');
  const bracket = eqBracket + 2;
  const rest = src.slice(bracket + 1);
  let body;
  if (/^\s*\]/.test(rest)) {
    body = ''; // empty registry (Batch 2 state)
  } else {
    const arrEnd = src.indexOf('\n];', bracket);
    if (arrEnd === -1) throw new Error('BLOG_ARTICLES array not found');
    body = src.slice(bracket, arrEnd);
  }
  const articles = [];
  const seenIds = new Set();
  const seenSlugs = new Set();
  const starts = [...body.matchAll(/id:\s*'([^']+)'/g)];
  for (let i = 0; i < starts.length; i++) {
    const start = starts[i].index;
    const end = i + 1 < starts.length ? starts[i + 1].index : body.length;
    const chunk = body.slice(start, end);
    const id = starts[i][1];
    const status = (chunk.match(/status:\s*'([^']+)'/) || [])[1];
    if (status !== 'published') continue;
    const publishedAt = (chunk.match(/publishedAt:\s*'([^']+)'/) || [])[1];
    const slug = (chunk.match(/en:\s*\{\s*slug:\s*'([^']+)'/) || [])[1];
    if (!publishedAt || !slug) {
      throw new Error(`article ${id}: missing publishedAt or en.slug`);
    }
    if (seenIds.has(id)) throw new Error(`duplicate article id: ${id}`);
    if (seenSlugs.has(slug)) throw new Error(`duplicate article slug: ${slug}`);
    seenIds.add(id);
    seenSlugs.add(slug);
    articles.push({ id, slug, publishedAt });
  }
  return articles;
}

function blogHomePath(lang) {
  return lang === 'en' ? '/blog/' : `/${lang}/blog/`;
}

function blogCategoryPath(categoryId, lang, slugs) {
  const slug = slugs[lang][categoryId];
  return lang === 'en' ? `/blog/category/${slug}/` : `/${lang}/blog/category/${slug}/`;
}

function entryXml(urlPath, alternates, priority) {
  const lines = ['  <url>', `    <loc>${BASE}${urlPath}</loc>`];
  for (const lang of LANGS) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="${lang}" href="${BASE}${alternates[lang]}" />`
    );
  }
  lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${alternates.en}" />`);
  lines.push(`    <lastmod>${LASTMOD}</lastmod>`);
  lines.push('    <changefreq>weekly</changefreq>');
  lines.push(`    <priority>${priority}</priority>`);
  lines.push('  </url>');
  return lines.join('\n');
}

/** Article entry (Batch 3: EN only — published locales only, so the
 *  alternates are just en + x-default, both pointing at the EN URL).
 *  lastmod comes from the article's own publishedAt. */
function articleEntryXml(article) {
  const urlPath = `/blog/${article.slug}/`;
  const lines = [
    '  <url>',
    `    <loc>${BASE}${urlPath}</loc>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${BASE}${urlPath}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${urlPath}" />`,
    `    <lastmod>${article.publishedAt}</lastmod>`,
    '    <changefreq>weekly</changefreq>',
    '    <priority>0.7</priority>',
    '  </url>',
  ];
  return lines.join('\n');
}

function withSlash(p) {
  return p.endsWith('/') ? p : `${p}/`;
}

/**
 * Localized article slugs per language, from each locale's slugs.ts
 * (Batch 4). Returns { lang: Map(enSlug -> localizedPath) }. An article is
 * published in a locale exactly when that locale's map has its EN slug.
 * Throws on an entry for an unknown EN slug, a path that doesn't start
 * with /<lang>/blog/, or a duplicate localized path — a bad slug entry
 * must fail loudly, never silently drop or duplicate a URL.
 */
function parseLocaleArticleSlugs(articles) {
  const known = new Set(articles.map((a) => a.slug));
  const out = {};
  for (const lang of LANGS) {
    if (lang === 'en') continue;
    const file = path.join(REPO_ROOT, 'src', 'locales', lang, 'slugs.ts');
    const src = fs.readFileSync(file, 'utf8');
    const map = new Map();
    for (const m of src.matchAll(/'(\/blog\/[^']+)':\s*'(\/[^']+)'/g)) {
      const enPath = m[1];
      const locPath = m[2];
      if (enPath === '/blog' || enPath.startsWith('/blog/category/')) continue;
      const enSlug = enPath.slice('/blog/'.length);
      if (!known.has(enSlug)) {
        throw new Error(`slugs.ts (${lang}): article entry for unknown EN slug: ${enSlug}`);
      }
      if (!locPath.startsWith(`/${lang}/blog/`)) {
        throw new Error(`slugs.ts (${lang}): bad localized path for ${enSlug}: ${locPath}`);
      }
      if ([...map.values()].includes(locPath)) {
        throw new Error(`slugs.ts (${lang}): duplicate localized path: ${locPath}`);
      }
      map.set(enSlug, locPath);
    }
    out[lang] = map;
  }
  return out;
}

/** Published locales for an article, EN first, then LANGS order. */
function publishedLocales(article, localeSlugs) {
  const locales = ['en'];
  for (const lang of LANGS) {
    if (lang !== 'en' && localeSlugs[lang].has(article.slug)) locales.push(lang);
  }
  return locales;
}

/** Article entries (Batch 4): one URL per published locale. Alternates are
 *  exactly the published locales + x-default → EN. lastmod = publishedAt. */
function articleEntriesXml(article, localeSlugs) {
  const locales = publishedLocales(article, localeSlugs);
  const urlFor = (lang) =>
    lang === 'en' ? `/blog/${article.slug}/` : withSlash(localeSlugs[lang].get(article.slug));
  return locales.map((lang) => {
    const urlPath = urlFor(lang);
    const lines = ['  <url>', `    <loc>${BASE}${urlPath}</loc>`];
    for (const l of locales) {
      lines.push(
        `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE}${urlFor(l)}" />`
      );
    }
    lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${urlFor('en')}" />`);
    lines.push(`    <lastmod>${article.publishedAt}</lastmod>`);
    lines.push('    <changefreq>weekly</changefreq>');
    lines.push('    <priority>0.7</priority>');
    lines.push('  </url>');
    return lines.join('\n');
  });
}

function buildBlogBlock(slugs, articles, localeSlugs) {
  const parts = [BLOCK_START];
  // Homes (11), EN first.
  for (const lang of LANGS) {
    const alternates = {};
    for (const l of LANGS) alternates[l] = blogHomePath(l);
    parts.push(entryXml(blogHomePath(lang), alternates, '0.9'));
  }
  // Category hubs (77): TOOL_CATEGORIES order, EN first within each.
  const categoryIds = Object.keys(slugs.en);
  for (const categoryId of categoryIds) {
    for (const lang of LANGS) {
      const alternates = {};
      for (const l of LANGS) alternates[l] = blogCategoryPath(categoryId, l, slugs);
      parts.push(entryXml(blogCategoryPath(categoryId, lang, slugs), alternates, '0.8'));
    }
  }
  // Articles (Batch 3 EN-only, Batch 4 localized): registry order, one
  // entry per published locale.
  for (const article of articles) {
    parts.push(...articleEntriesXml(article, localeSlugs));
  }
  parts.push(BLOCK_END);
  return parts.join('\n');
}

function main() {
  const slugs = parseCategorySlugs();
  const articles = parseArticles();
  const localeSlugs = parseLocaleArticleSlugs(articles);
  const categoryIds = Object.keys(slugs.en);
  const articleUrlCount = articles.reduce(
    (n, a) => n + publishedLocales(a, localeSlugs).length,
    0
  );
  const expectedBlogUrls = LANGS.length + categoryIds.length * LANGS.length + articleUrlCount;
  const block = buildBlogBlock(slugs, articles, localeSlugs);

  // Non-blog entries: the hand-maintained fragment. The old single-file
  // public/sitemap.xml held them inline; the split moved them here because
  // a ~40 MB fragment cannot live in public/ (Cloudflare rejects any file
  // over 25 MiB). Blog entries come from the generated block above; the
  // BLOCK_START/BLOCK_END marker comments are not <url> blocks, so the
  // extractor ignores them.
  const nonBlogXml = fs.readFileSync(NONBLOG_PATH, 'utf8');
  const nonBlogEntries = extractUrlBlocks(nonBlogXml);
  const blogEntries = extractUrlBlocks(block);
  const entries = [...nonBlogEntries, ...blogEntries];
  const urlCount = entries.length;

  const { map, parts } = buildFileMap(entries);
  const partSummary = parts
    .map((p) => `${p.name} (${p.urls} URLs, ${(p.bytes / 1048576).toFixed(1)} MiB)`)
    .join(', ');

  if (process.argv.includes('--check')) {
    const stale = [];
    for (const [name, contents] of Object.entries(map)) {
      const p = path.join(PUBLIC_DIR, name);
      if (!fs.existsSync(p) || fs.readFileSync(p, 'utf8') !== contents) stale.push(name);
    }
    // A leftover part file beyond the new count also makes it stale.
    let i = parts.length + 1;
    for (;;) {
      const stalePart = path.join(PUBLIC_DIR, partFileName(i));
      if (!fs.existsSync(stalePart)) break;
      stale.push(partFileName(i));
      i += 1;
    }
    if (stale.length === 0) {
      console.log(
        `sitemap OK: ${urlCount} URLs (${expectedBlogUrls} blog) in ${parts.length} parts: ${partSummary}.`
      );
      process.exit(0);
    }
    console.log(`sitemap STALE: would change: ${stale.join(', ')}. Run without --check.`);
    process.exit(1);
  }

  writeSitemapParts(entries, PUBLIC_DIR);
  console.log(
    `sitemap updated: ${urlCount} URLs (${expectedBlogUrls} blog: ${LANGS.length} homes + ${categoryIds.length * LANGS.length} hubs + ${articleUrlCount} article URLs across ${articles.length} articles) in ${parts.length} parts: ${partSummary}.`
  );
}

main();
