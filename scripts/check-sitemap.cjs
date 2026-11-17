// Sitemap count/reciprocity checks (Batch 2 — the sitemap is hand-maintained
// and drifts otherwise; run after every sitemap edit and in the Batch 5 QA
// pass). Run: node scripts/check-sitemap.cjs
//
// Checks:
//  1. No duplicate <loc> values.
//  2. Every <loc> ends with '/' (trailing-slash canonicals).
//  3. All 11 blog homes present exactly once.
//  4. All 88 category hubs present exactly once (from BLOG_CATEGORY_SLUGS in
//     src/data/blogArticles.ts — the same source the generator uses).
//  5. Reciprocity: every blog home/hub entry's 12 hreflang alternates are
//     exactly the expected localized set, and every alternate href is itself
//     a <loc> in the sitemap.
//  6. Blog article URLs: none may exist in Batch 2 (registry empty). Batch 3
//     extends this to the published-article set (parse the registry +
//     slugs.ts) and per-article lastmod.
//  7. Total URL count == 725 (626 pre-blog baseline + 99 blog URLs).
// Exit 0 on pass, 1 on any failure (prints every failure, not just the first).

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..');
const SITEMAP_PATH = path.join(REPO_ROOT, 'public', 'sitemap.xml');
const REGISTRY_PATH = path.join(REPO_ROOT, 'src', 'data', 'blogArticles.ts');
const BASE = 'https://compressmypic.online';
const LANGS = ['en', 'es', 'pt', 'fr', 'de', 'it', 'id', 'ru', 'ja', 'ko', 'zh'];
const PRE_BLOG_BASELINE = 626; // <url> count before Batch 2 (b0afe1b)
const EXPECTED_BLOG_URLS = 11 + 88; // homes + category hubs (0 articles in Batch 2)

const failures = [];
const fail = (msg) => failures.push(msg);

function parseCategorySlugs() {
  const src = fs.readFileSync(REGISTRY_PATH, 'utf8');
  const m = src.match(/export const BLOG_CATEGORY_SLUGS[^=]*=\s*\{([\s\S]*?)\n\};/);
  if (!m) throw new Error('BLOG_CATEGORY_SLUGS not found in src/data/blogArticles.ts');
  const out = {};
  for (const langMatch of m[1].matchAll(/(\w+):\s*\{([^}]*)\}/g)) {
    const entries = {};
    for (const e of langMatch[2].matchAll(/'?([\w-]+)'?:\s*'([^']+)'/g)) {
      entries[e[1]] = e[2];
    }
    out[langMatch[1]] = entries;
  }
  return out;
}

function blogHomePath(lang) {
  return lang === 'en' ? '/blog/' : `/${lang}/blog/`;
}

function blogCategoryPath(categoryId, lang, slugs) {
  const slug = slugs[lang][categoryId];
  return lang === 'en' ? `/blog/category/${slug}/` : `/${lang}/blog/category/${slug}/`;
}

function main() {
  const slugs = parseCategorySlugs();
  const xml = fs.readFileSync(SITEMAP_PATH, 'utf8');

  const urlBlocks = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
  const locs = urlBlocks.map((b) => {
    const m = b.match(/<loc>([^<]+)<\/loc>/);
    return m ? m[1] : null;
  });
  const locSet = new Set(locs.filter(Boolean));

  // 1. Duplicates.
  const seen = new Set();
  for (const loc of locs) {
    if (!loc) {
      fail('a <url> block has no <loc>');
    } else if (seen.has(loc)) {
      fail(`duplicate <loc>: ${loc}`);
    } else {
      seen.add(loc);
    }
  }

  // 2. Trailing slashes.
  for (const loc of locs) {
    if (loc && !loc.endsWith('/')) fail(`<loc> without trailing slash: ${loc}`);
  }

  // Expected blog URL sets.
  const expectedHomes = new Set(LANGS.map((l) => `${BASE}${blogHomePath(l)}`));
  const expectedHubs = new Map(); // loc -> expected alternates {lang: href}
  for (const categoryId of Object.keys(slugs.en)) {
    for (const lang of LANGS) {
      const loc = `${BASE}${blogCategoryPath(categoryId, lang, slugs)}`;
      const alternates = {};
      for (const l of LANGS) alternates[l] = `${BASE}${blogCategoryPath(categoryId, l, slugs)}`;
      alternates['x-default'] = `${BASE}${blogCategoryPath(categoryId, 'en', slugs)}`;
      expectedHubs.set(loc, alternates);
    }
  }
  const expectedHomeAlternates = {};
  for (const l of LANGS) expectedHomeAlternates[l] = `${BASE}${blogHomePath(l)}`;
  expectedHomeAlternates['x-default'] = `${BASE}${blogHomePath('en')}`;

  // 3 + 4. Presence (exactly once).
  for (const loc of expectedHomes) {
    const count = locs.filter((x) => x === loc).length;
    if (count !== 1) fail(`blog home ${loc}: found ${count} time(s), expected 1`);
  }
  for (const loc of expectedHubs.keys()) {
    const count = locs.filter((x) => x === loc).length;
    if (count !== 1) fail(`category hub ${loc}: found ${count} time(s), expected 1`);
  }

  // 5. Reciprocity for every blog home/hub entry.
  const checkAlternates = (loc, expected) => {
    const block = urlBlocks.find((b) => b.includes(`<loc>${loc}</loc>`));
    if (!block) return; // presence failure already reported
    const found = {};
    for (const m of block.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)) {
      found[m[1]] = m[2];
    }
    for (const [lang, href] of Object.entries(expected)) {
      if (found[lang] !== href) {
        fail(`${loc}: hreflang ${lang} is ${found[lang] ?? '(missing)'}, expected ${href}`);
      }
      if (!locSet.has(href)) fail(`${loc}: hreflang ${lang} href ${href} is not a <loc> in the sitemap`);
    }
    for (const lang of Object.keys(found)) {
      if (!(lang in expected)) fail(`${loc}: unexpected hreflang ${lang}`);
    }
  };
  for (const loc of expectedHomes) checkAlternates(loc, expectedHomeAlternates);
  for (const [loc, expected] of expectedHubs) checkAlternates(loc, expected);

  // 6. No blog article URLs in Batch 2.
  const articleLocs = locs.filter((loc) => {
    if (!loc) return false;
    const p = loc.slice(BASE.length);
    return p.startsWith('/blog/') && !p.startsWith('/blog/category/') && p !== '/blog/' &&
      !LANGS.some((l) => p === `/${l}/blog/`);
  });
  if (articleLocs.length > 0) {
    fail(`unexpected blog article URLs in sitemap (Batch 2 has 0 articles): ${articleLocs.join(', ')}`);
  }

  // 7. Total count.
  const expectedTotal = PRE_BLOG_BASELINE + EXPECTED_BLOG_URLS;
  if (urlBlocks.length !== expectedTotal) {
    fail(`total <url> count ${urlBlocks.length}, expected ${expectedTotal} (${PRE_BLOG_BASELINE} baseline + ${EXPECTED_BLOG_URLS} blog)`);
  }

  const blogCount = [...locs].filter((loc) => {
    const p = loc ? loc.slice(BASE.length) : '';
    return p === '/blog/' || p.startsWith('/blog/category/') || LANGS.some((l) => p === `/${l}/blog/` || p.startsWith(`/${l}/blog/category/`));
  }).length;

  if (failures.length > 0) {
    console.log(`FAIL (${failures.length}):`);
    for (const f of failures) console.log(`  - ${f}`);
    process.exit(1);
  }
  console.log(
    `sitemap OK: ${urlBlocks.length} URLs total (${blogCount} blog: 11 homes + 88 hubs + 0 articles), no duplicates, all trailing-slash, hreflang reciprocal.`
  );
}

main();
