// Blog sitemap generator (Batch 2 + Batch 3 + Batch 4) — inserts the blog
// home (11) + category hub (77) + published article URLs into
// public/sitemap.xml, idempotently.
//
// SOURCE OF TRUTH: BLOG_CATEGORY_SLUGS + BLOG_ARTICLES in
// src/data/blogArticles.ts, and each locale's article slugs in
// src/locales/<lang>/slugs.ts (parsed with regexes — plain literals).
// Homes are the 11 /<lang>/blog/ paths. Articles get ONE URL per published
// locale (EN + every locale with a slugs.ts entry for that article),
// alternates = published locales + x-default → EN, per-article lastmod
// from publishedAt. Batch 3 was EN-only; Batch 4 adds localized URLs.
//
// Usage:
//   node scripts/generate-blog-sitemap.cjs          # insert/update the block
//   node scripts/generate-blog-sitemap.cjs --check  # exit 1 if stale
//
// Writes atomically (temp file + rename) and prints the new URL total.
// Verify with: node scripts/check-sitemap.cjs

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..');
const SITEMAP_PATH = path.join(REPO_ROOT, 'public', 'sitemap.xml');
const REGISTRY_PATH = path.join(REPO_ROOT, 'src', 'data', 'blogArticles.ts');
const BASE = 'https://compressmypic.online';
const LASTMOD = '2026-11-17'; // Batch 2 ship date; Batch 3 uses per-article lastmod
const LANGS = ['en', 'es', 'pt', 'fr', 'de', 'it', 'id', 'ru', 'ja', 'ko', 'zh', 'hi'];

const BLOCK_START = '  <!-- Blog (Batch 2): 11 homes + 77 category hubs. Regenerate with scripts/generate-blog-sitemap.cjs. -->';
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

  let sitemap = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const original = sitemap;
  // Strip any previous blog block (idempotency). The start marker is
  // matched with any hub count: the count changed 88 -> 77 when the
  // ai-tools category was removed (2026-11-20), and the strip must still
  // find blocks written with the old count.
  const START_RE = '  <!-- Blog \\(Batch 2\\): 11 homes \\+ \\d+ category hubs\\. Regenerate with scripts/generate-blog-sitemap\\.cjs\\. -->';
  const blockRe = new RegExp(
    `\\n?${START_RE}[\\s\\S]*?${BLOCK_END.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`,
    'g'
  );
  sitemap = sitemap.replace(blockRe, '');
  if (!sitemap.includes('</urlset>')) throw new Error('public/sitemap.xml has no </urlset>');
  const next = sitemap.replace('</urlset>', `${block}\n</urlset>`);
  const urlCount = (next.match(/<url>/g) || []).length;

  if (process.argv.includes('--check')) {
    if (next === original) {
      console.log(`sitemap OK: ${urlCount} URLs (${expectedBlogUrls} blog).`);
      process.exit(0);
    }
    console.log(`sitemap STALE: would change (now ${urlCount} URLs). Run without --check.`);
    process.exit(1);
  }

  const tmp = `${SITEMAP_PATH}.tmp`;
  fs.writeFileSync(tmp, next);
  fs.renameSync(tmp, SITEMAP_PATH);
  console.log(`sitemap updated: ${urlCount} URLs (${expectedBlogUrls} blog: 11 homes + 77 hubs + ${articleUrlCount} article URLs across ${articles.length} articles).`);
}

main();
