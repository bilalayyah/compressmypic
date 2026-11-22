// Sitemap count/reciprocity checks (Batch 2 — the sitemap is hand-maintained
// and drifts otherwise; run after every sitemap edit and in the Batch 5 QA
// pass). Run: node scripts/check-sitemap.cjs
//
// Checks:
//  1. No duplicate <loc> values.
//  2. Every <loc> ends with '/' (trailing-slash canonicals).
//  3. All 14 blog homes present exactly once.
//  4. All 98 category hubs present exactly once (from BLOG_CATEGORY_SLUGS in
//     src/data/blogArticles.ts — the same source the generator uses).
//  5. Reciprocity: every blog home/hub entry's 15 hreflang alternates are
//     exactly the expected localized set, and every alternate href is itself
//     a <loc> in the sitemap.
//  6. Blog article URLs: exactly the published-article set from the registry
//     (BLOG_ARTICLES, status 'published') × published locales (EN + every
//     locale with a slugs.ts entry for that article), each once, alternates
//     exactly the published locales + x-default → EN, lastmod == publishedAt;
//     no other article URLs.
//  7. Total URL count == 626 + 99 + <article URLs across all published
//     locales> (869 after Batch 3 EN-only; 2,309 when Batch 4 is complete).
//     The counts are read from the registry + slugs.ts, so the expectation
//     follows each Batch 3 category and each Batch 4 language automatically.
// Exit 0 on pass, 1 on any failure (prints every failure, not just the first).

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..');
const SITEMAP_PATH = path.join(REPO_ROOT, 'public', 'sitemap.xml');
const REGISTRY_PATH = path.join(REPO_ROOT, 'src', 'data', 'blogArticles.ts');
const BASE = 'https://compressmypic.online';
const LANGS = ['en', 'es', 'pt', 'fr', 'de', 'it', 'id', 'ru', 'ja', 'ko', 'zh', 'hi', 'ar', 'tr', 'vi'];
const PRE_BLOG_BASELINE = 870; // <url> count before Batch 2 (b0afe1b) was 626; +22 legal pages (Disclaimer + Cookie Policy × 11 locales) + 1 EN /all-tools/ hub (audit fix 2026-11-18); -11 remove-background tool URLs (removal 2026-11-20); +58 Hindi non-blog URLs (i18n/hindi-cmp-2026-11-22); +58 Arabic non-blog URLs (47 tools + home + 4 legal + Disclaimer + Cookie Policy + 3 guides + all-tools hub, 2026-11-22); +58 Turkish non-blog URLs (2026-11-22); +58 Vietnamese non-blog URLs (i18n/vietnamese-cmp-2026-11-22)
// EXPECTED_BLOG_URLS is computed in main() from the registry:
// LANGS.length homes + 7*LANGS.length hubs + <published articles>.
// 12 homes + 84 hubs + <published articles>.

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

/** Published articles from the registry, in registry order (same parser as
 *  the generator — see generate-blog-sitemap.cjs for the details). */
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

function withSlash(p) {
  return p.endsWith('/') ? p : `${p}/`;
}

/** Localized article slugs per language, from each locale's slugs.ts
 *  (Batch 4 — same parser as the generator). */
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

function blogHomePath(lang) {
  return lang === 'en' ? '/blog/' : `/${lang}/blog/`;
}

function blogCategoryPath(categoryId, lang, slugs) {
  const slug = slugs[lang][categoryId];
  return lang === 'en' ? `/blog/category/${slug}/` : `/${lang}/blog/category/${slug}/`;
}

function main() {
  const slugs = parseCategorySlugs();
  const articles = parseArticles();
  const localeSlugs = parseLocaleArticleSlugs(articles);
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

  // 6. Blog article URLs: exactly the published-article set from the
  // registry × published locales — each once, alternates exactly the
  // published locales + x-default → EN, lastmod == publishedAt; no other
  // article URLs.
  const isArticlePath = (p) => {
    if (p.startsWith('/blog/') && !p.startsWith('/blog/category/') && p !== '/blog/') return true;
    for (const l of LANGS) {
      if (l === 'en') continue;
      if (p.startsWith(`/${l}/blog/`) && !p.startsWith(`/${l}/blog/category/`) && p !== `/${l}/blog/`) return true;
    }
    return false;
  };
  const articleLocs = locs.filter((loc) => loc && isArticlePath(loc.slice(BASE.length)));
  const expectedArticles = new Map(); // loc -> { alternates, lastmod }
  let articleUrlCount = 0;
  for (const a of articles) {
    const locales = publishedLocales(a, localeSlugs);
    const urlFor = (lang) =>
      lang === 'en' ? `/blog/${a.slug}/` : withSlash(localeSlugs[lang].get(a.slug));
    for (const lang of locales) {
      const loc = `${BASE}${urlFor(lang)}`;
      const alternates = {};
      for (const l of locales) alternates[l] = `${BASE}${urlFor(l)}`;
      alternates['x-default'] = `${BASE}${urlFor('en')}`;
      expectedArticles.set(loc, { alternates, lastmod: a.publishedAt });
      articleUrlCount++;
    }
  }
  for (const [loc, expected] of expectedArticles) {
    const count = locs.filter((x) => x === loc).length;
    if (count !== 1) fail(`blog article ${loc}: found ${count} time(s), expected 1`);
    checkAlternates(loc, expected.alternates);
    const block = urlBlocks.find((b) => b.includes(`<loc>${loc}</loc>`));
    if (block) {
      const lm = (block.match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1];
      if (lm !== expected.lastmod) {
        fail(`${loc}: lastmod is ${lm ?? '(missing)'}, expected ${expected.lastmod}`);
      }
    }
  }
  for (const loc of articleLocs) {
    if (!expectedArticles.has(loc)) {
      fail(`unexpected blog article URL in sitemap (not a published registry article): ${loc}`);
    }
  }

  // 7. Total count.
  const EXPECTED_BLOG_URLS = LANGS.length + 7 * LANGS.length + articleUrlCount; // 1 home + 7 category hubs per locale
  const expectedTotal = PRE_BLOG_BASELINE + EXPECTED_BLOG_URLS;
  if (urlBlocks.length !== expectedTotal) {
    fail(`total <url> count ${urlBlocks.length}, expected ${expectedTotal} (${PRE_BLOG_BASELINE} baseline + ${EXPECTED_BLOG_URLS} blog)`);
  }

  const blogCount = [...locs].filter((loc) => {
    const p = loc ? loc.slice(BASE.length) : '';
    return p === '/blog/' || p.startsWith('/blog/') ||
      LANGS.some((l) => p === `/${l}/blog/` || p.startsWith(`/${l}/blog/`));
  }).length;

  if (failures.length > 0) {
    console.log(`FAIL (${failures.length}):`);
    for (const f of failures) console.log(`  - ${f}`);
    process.exit(1);
  }
  console.log(
    `sitemap OK: ${urlBlocks.length} URLs total (${blogCount} blog: ${LANGS.length} homes + ${7 * LANGS.length} hubs + ${articles.length} articles / ${articleUrlCount} article URLs), no duplicates, all trailing-slash, hreflang reciprocal.`
  );
}

main();
