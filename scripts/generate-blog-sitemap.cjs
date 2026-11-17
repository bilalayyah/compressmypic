// Blog sitemap generator (Batch 2 + Batch 3) — inserts the blog home (11) +
// category hub (88) + published article URLs into public/sitemap.xml,
// idempotently.
//
// SOURCE OF TRUTH: BLOG_CATEGORY_SLUGS + BLOG_ARTICLES in
// src/data/blogArticles.ts (parsed with regexes — plain literals).
// Homes are the 11 /<lang>/blog/ paths. Articles are EN-only in Batch 3
// (one URL each, en + x-default alternates, per-article lastmod from
// publishedAt); Batch 4 adds localized article URLs.
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
const LANGS = ['en', 'es', 'pt', 'fr', 'de', 'it', 'id', 'ru', 'ja', 'ko', 'zh'];

const BLOCK_START = '  <!-- Blog (Batch 2): 11 homes + 88 category hubs. Regenerate with scripts/generate-blog-sitemap.cjs. -->';
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
  const bracket = src.indexOf('[', arrStart);
  if (bracket === -1) throw new Error('BLOG_ARTICLES array not found');
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

function buildBlogBlock(slugs, articles) {
  const parts = [BLOCK_START];
  // Homes (11), EN first.
  for (const lang of LANGS) {
    const alternates = {};
    for (const l of LANGS) alternates[l] = blogHomePath(l);
    parts.push(entryXml(blogHomePath(lang), alternates, '0.9'));
  }
  // Category hubs (88): TOOL_CATEGORIES order, EN first within each.
  const categoryIds = Object.keys(slugs.en);
  for (const categoryId of categoryIds) {
    for (const lang of LANGS) {
      const alternates = {};
      for (const l of LANGS) alternates[l] = blogCategoryPath(categoryId, l, slugs);
      parts.push(entryXml(blogCategoryPath(categoryId, lang, slugs), alternates, '0.8'));
    }
  }
  // Articles (Batch 3): registry order, EN only.
  for (const article of articles) {
    parts.push(articleEntryXml(article));
  }
  parts.push(BLOCK_END);
  return parts.join('\n');
}

function main() {
  const slugs = parseCategorySlugs();
  const articles = parseArticles();
  const categoryIds = Object.keys(slugs.en);
  const expectedBlogUrls = LANGS.length + categoryIds.length * LANGS.length + articles.length;
  const block = buildBlogBlock(slugs, articles);

  let sitemap = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const original = sitemap;
  // Strip any previous blog block (idempotency).
  const blockRe = new RegExp(
    `\\n?${BLOCK_START.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${BLOCK_END.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`,
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
  console.log(`sitemap updated: ${urlCount} URLs (${expectedBlogUrls} blog: 11 homes + 88 hubs + ${articles.length} articles).`);
}

main();
