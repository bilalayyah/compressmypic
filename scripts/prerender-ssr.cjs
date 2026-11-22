// SSR prerender (real SSR) — CompressMyPic speed fix, 2026-11-19.
//
// Renders every route in public/sitemap.xml (+ /admin/comments) with the
// SSR bundle (dist-server/entry-server.js, React renderToString) and writes
// the assembled document to public/<route>/index.html, replacing the
// Chromium-captured snapshots. No browser, no Chromium, no preview server —
// the render runs in Node, so the EPERM/Chromium wave cannot block it
// (only a hard wave that breaks file writes can, and then it stops cleanly).
//
// ASSEMBLY (hybrid — see header of src/entry-server.tsx for why the body is
// real SSR): the #root BODY comes from renderToString (with <!-- -->
// separators, so React 19 hydration matches). The HEAD comes from the
// route's EXISTING Chromium-captured snapshot: the SEO effect output
// (title, description, canonical, og/twitter, hreflang, JSON-LD, fonts,
// critical CSS, theme script, GA4 stub) is a pure function of (route, lang,
// content data), none of which changed in the SSR work, so the captured
// head is exactly what the effects would produce now. Only the
// bundle-dependent asset refs in the head are updated to the CURRENT build
// (entry script, modulepreloads, stylesheet — taken from dist/index.html).
// AdSense is already absent from the captured heads (they were rendered
// with the Phase 2 bundle, which removed AdSense); the strip list below is
// a belt-and-braces guard. GA4 stub is kept (GA4 is kept).
//
// RESUME: a route is skipped when its file already looks like a valid SSR
// snapshot on the CURRENT bundle hash (contains the new entry hash, the
// <!-- --> separators, an <h1>, no 'Loading…', no old entry hash). So a
// wave-interrupted run resumes by re-running the same command; nothing is
// ever half-written (each file is verified by read-back before counting).
//
// Usage:
//   node scripts/prerender-ssr.cjs [--routes /,/de/] [--limit N]
//     [--out public] [--concurrency 1]
// The SSR bundle must already exist (vite build --ssr src/entry-server.tsx
// --outDir dist-server) and dist/ must be current (vite build).
'use strict';
const fs = require('node:fs');
const path = require('node:path');

const REPO_ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(REPO_ROOT, 'public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const DIST_INDEX = path.join(REPO_ROOT, 'dist', 'index.html');
const SSR_BUNDLE = path.join(REPO_ROOT, 'dist-server', 'entry-server.js');
const SITE_ORIGIN = 'https://compressmypic.online';
const EXTRA_ROUTES = ['/admin/comments'];
const SUPPORTED_LANGS = new Set([
  'en', 'es', 'pt', 'fr', 'de', 'it', 'id', 'ru', 'ja', 'ko', 'zh', 'hi',
  'en', 'es', 'pt', 'fr', 'de', 'it', 'id', 'ru', 'ja', 'ko', 'zh', 'ar',
]);

// Script tags the runtime third-party loader used to inject and which must
// NEVER appear in a static snapshot head (they load deferred at runtime
// instead; AdSense is removed entirely). Belt-and-braces: the captured
// heads already lack them, but strip them if present.
const STRIP_SRC_PATTERNS = [
  /adsbygoogle/i,
  /fundingchoices/i,
  /googlesyndication/i,
  /pagead2/i,
  /googletagmanager\.com\/gtag\/js/i,
];

function parseArgs(argv) {
  const opts = { routes: null, limit: null };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--routes' && argv[i + 1]) {
      opts.routes = argv[i + 1]
        .split(',')
        .map((r) => r.trim())
        .filter(Boolean)
        .map((r) => {
          // Normalize the same way readRoutes does: leading slash, no
          // trailing slash (except the root).
          if (!r.startsWith('/')) r = `/${r}`;
          return r.length > 1 ? r.replace(/\/+$/, '') : r;
        });
      i += 1;
    } else if (argv[i] === '--limit' && argv[i + 1]) {
      opts.limit = parseInt(argv[i + 1], 10);
      i += 1;
    }
  }
  return opts;
}

function readRoutes() {
  const xml = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const paths = [];
  const seen = new Set();
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    let url = m[1].trim();
    if (!url.startsWith(SITE_ORIGIN)) continue;
    let p = url.slice(SITE_ORIGIN.length) || '/';
    p = p.split('#')[0].split('?')[0];
    if (!p.startsWith('/')) p = `/${p}`;
    if (p.length > 1) p = p.replace(/\/+$/, '');
    if (seen.has(p)) continue;
    seen.add(p);
    paths.push(p);
  }
  for (const extra of EXTRA_ROUTES) {
    if (!seen.has(extra)) {
      seen.add(extra);
      paths.push(extra);
    }
  }
  return paths;
}

function outPathFor(routePath) {
  const clean = routePath.replace(/\/+$/, '') || '/';
  if (clean === '/') return path.join(PUBLIC_DIR, 'home', 'index.html');
  return path.join(PUBLIC_DIR, ...clean.split('/').filter(Boolean), 'index.html');
}

function langFor(routePath) {
  const first = routePath.split('/').filter(Boolean)[0];
  return first && SUPPORTED_LANGS.has(first) ? first : 'en';
}

// Asset refs (entry script, modulepreloads, stylesheet) in dist/index.html,
// keyed by stem+extension (filename minus the -<hash> suffix) so the old
// snapshot's refs can be mapped to the current ones. The stem alone is not
// enough: index-*.js and index-*.css share the stem "index".
function currentAssetRefs() {
  const shell = fs.readFileSync(DIST_INDEX, 'utf8');
  const refs = new Map(); // stem+ext -> full /assets/... path
  for (const m of shell.matchAll(/\/assets\/([A-Za-z0-9._-]+)/g)) {
    const file = m[1];
    const ext = file.slice(file.lastIndexOf('.'));
    const stem = file.replace(/-[A-Za-z0-9_-]{8}(?=\.[^.]+$)/, '').replace(ext, '');
    refs.set(`${stem}${ext}`, `/assets/${file}`);
  }
  const entry = shell.match(/<script[^>]*src="(\/assets\/index-[^"]+\.js)"/);
  const css = shell.match(/<link[^>]*href="(\/assets\/index-[^"]+\.css)"/);
  return { refs, entry: entry ? entry[1] : null, css: css ? css[1] : null, shell };
}

function assetStem(file) {
  const ext = file.slice(file.lastIndexOf('.'));
  return `${file.replace(/-[A-Za-z0-9_-]{8}(?=\.[^.]+$)/, '').replace(ext, '')}${ext}`;
}

// Update the bundle-dependent asset refs in a captured head to the current
// build's refs, and strip any runtime-injected third-party script tags.
function refreshHead(head, current) {
  let out = head;
  // Replace each /assets/... ref whose stem matches a current-build asset.
  out = out.replace(/\/assets\/([A-Za-z0-9._-]+)/g, (whole, file) => {
    const stem = assetStem(file);
    return current.refs.get(stem) || whole;
  });
  // Strip runtime-injected third-party scripts (AdSense / external gtag).
  out = out.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, (tag) => {
    const src = tag.match(/src="([^"]+)"/);
    if (src && STRIP_SRC_PATTERNS.some((re) => re.test(src[1]))) return '';
    return tag;
  });
  return out;
}

// Static pages (the 33 guides, some legal pages, /admin/comments) have no
// dynamic text interpolations, so React emits ZERO <!-- --> separators for
// them — that is correct, not a failure. The regeneration proof for those
// pages is the bundle hash: the old snapshot carries the old entry hash,
// the new file must carry the new one and NOT the old one.
function verifyFile(filePath, newEntry, oldEntry) {
  const html = fs.readFileSync(filePath, 'utf8');
  if (html.length < 1000) return 'too small';
  if (newEntry && !html.includes(newEntry)) return 'missing new bundle hash';
  if (oldEntry && oldEntry !== newEntry && html.includes(oldEntry)) {
    return 'still contains old bundle hash';
  }
  if (!html.includes('<h1')) return 'no H1';
  if (html.includes('Loading…')) return 'contains Loading fallback';
  if (html.includes('<!--$?-->')) return 'contains pending Suspense marker';
  return null;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(SSR_BUNDLE)) {
    console.error(`SSR bundle missing: ${SSR_BUNDLE} — run the SSR build first.`);
    process.exit(1);
  }
  if (!fs.existsSync(DIST_INDEX)) {
    console.error(`dist/index.html missing: ${DIST_INDEX} — run the client build first.`);
    process.exit(1);
  }
  const current = currentAssetRefs();
  if (!current.entry) {
    console.error('Could not find the entry script in dist/index.html.');
    process.exit(1);
  }
  console.log(`[prerender-ssr] entry: ${current.entry} css: ${current.css || '(none)'}`);

  let routes = readRoutes();
  if (opts.routes) routes = routes.filter((r) => opts.routes.includes(r));
  if (opts.limit) routes = routes.slice(0, opts.limit);
  console.log(`[prerender-ssr] routes: ${routes.length}`);

  const { renderRoute, getArticleFaqPage, getToolPageHead } = await import(SSR_BUNDLE);
  let done = 0;
  let skipped = 0;
  const failed = [];
  const t0 = Date.now();

  for (const route of routes) {
    const outPath = outPathFor(route);
    // Resume: skip files that already look like valid SSR snapshots on the
    // current bundle.
    let oldEntry = null;
    if (fs.existsSync(outPath)) {
      try {
        const existing = fs.readFileSync(outPath, 'utf8');
        const m = existing.match(/\/assets\/index-[A-Za-z0-9_-]+\.js/);
        oldEntry = m ? m[0] : null;
        const err = verifyFile(outPath, current.entry, oldEntry);
        if (!err) {
          skipped += 1;
          continue;
        }
      } catch {
        // unreadable — re-render below.
      }
    }
    if (!fs.existsSync(outPath)) {
      failed.push(`${route}: no existing snapshot to carry the head from`);
      console.error(`[prerender-ssr] FAIL ${route}: no existing snapshot at ${outPath}`);
      continue;
    }
    const oldHtml = fs.readFileSync(outPath, 'utf8');
    const headMatch = oldHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/);
    if (!headMatch) {
      failed.push(`${route}: no <head> in existing snapshot`);
      console.error(`[prerender-ssr] FAIL ${route}: no <head> in existing snapshot`);
      continue;
    }
    const lang = langFor(route);
    let bodyHtml;
    try {
      bodyHtml = await Promise.race([
        renderRoute(route),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('render timeout 60s')), 60000),
        ),
      ]);
    } catch (e) {
      failed.push(`${route}: render failed: ${String((e && e.message) || e).slice(0, 200)}`);
      console.error(`[prerender-ssr] FAIL ${route}: render failed: ${String((e && e.message) || e).slice(0, 200)}`);
      continue;
    }
    const newHead = refreshHead(headMatch[1], current);
    // Assemble: old document shell, new head, SSR body in #root, lang set.
    // Arabic is the only RTL language: its snapshots carry dir="rtl" on <html>.
    let doc = oldHtml;
    doc = doc.replace(/<html[^>]*>/, lang === 'ar' ? `<html lang="ar" dir="rtl">` : `<html lang="${lang}">`);
    doc = doc.replace(/<head[^>]*>[\s\S]*?<\/head>/, `<head>${newHead}</head>`);
    const rootRe = /<div id="root">[\s\S]*<\/div>\s*<\/body>/;
    if (!rootRe.test(doc)) {
      failed.push(`${route}: no #root div in existing snapshot`);
      console.error(`[prerender-ssr] FAIL ${route}: no #root div`);
      continue;
    }
    doc = doc.replace(rootRe, `<div id="root">${bodyHtml}</div>\n  </body>`);
    // Write + verify by read-back (never trust the write call alone).
    const tmpPath = `${outPath}.ssr-tmp`;
    try {
      fs.writeFileSync(tmpPath, doc, 'utf8');
      const back = fs.readFileSync(tmpPath, 'utf8');
      if (back.length !== doc.length || back !== doc) {
        throw new Error('read-back mismatch after write');
      }
      fs.renameSync(tmpPath, outPath);
    } catch (e) {
      try { if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath); } catch {}
      failed.push(`${route}: write failed: ${String((e && e.message) || e).slice(0, 200)}`);
      console.error(`[prerender-ssr] FAIL ${route}: write failed: ${String((e && e.message) || e).slice(0, 200)}`);
      continue;
    }
    const verr = verifyFile(outPath, current.entry, oldEntry);
    if (verr) {
      failed.push(`${route}: verify failed after write: ${verr}`);
      console.error(`[prerender-ssr] FAIL ${route}: verify after write: ${verr}`);
      continue;
    }
    done += 1;
    if (done % 100 === 0 || done + skipped === routes.length) {
      console.log(
        `[prerender-ssr] ${done + skipped}/${routes.length} done=${done} skipped=${skipped} failed=${failed.length} elapsed=${Math.round((Date.now() - t0) / 1000)}s`,
      );
    }
  }

  // FAQPage repair pass — the page JSON-LD is emitted by a client-side
  // effect, so this script carries heads from old Chromium snapshots, and
  // EN article heads were captured without FAQPage (0/145: the effect ran
  // at mount before the body loaded and never re-ran for EN). Regenerate
  // the node from the real data and inject it into the carried head's
  // @graph when it is missing. Idempotent: heads that already carry
  // FAQPage (144/145 localized) are left byte-identical, and non-article
  // routes are never touched.
  let faqRepaired = 0;
  let faqNoNode = 0;
  for (const route of routes) {
    let faqNode = null;
    try {
      faqNode = await getArticleFaqPage(route);
    } catch (e) {
      console.error(
        `[prerender-ssr] FAQPage lookup failed for ${route}: ${String((e && e.message) || e).slice(0, 120)}`,
      );
      continue;
    }
    if (!faqNode) {
      faqNoNode += 1;
      continue;
    }
    const outPath = outPathFor(route);
    if (!fs.existsSync(outPath)) continue;
    let html;
    try {
      html = fs.readFileSync(outPath, 'utf8');
    } catch {
      continue;
    }
    const m = html.match(
      /<script type="application\/ld\+json" id="app-page-jsonld">([\s\S]*?)<\/script>/,
    );
    if (!m) continue;
    let doc;
    try {
      doc = JSON.parse(m[1]);
    } catch {
      continue;
    }
    const graph = doc && Array.isArray(doc['@graph']) ? doc['@graph'] : null;
    if (!graph || !graph.some((n) => n && n['@type'] === 'BlogPosting')) continue;
    if (graph.some((n) => n && n['@type'] === 'FAQPage')) continue;
    graph.push(faqNode);
    const updated = html.replace(
      m[0],
      `<script type="application/ld+json" id="app-page-jsonld">${JSON.stringify(doc)}</script>`,
    );
    if (updated === html) continue;
    try {
      fs.writeFileSync(outPath, updated, 'utf8');
      faqRepaired += 1;
    } catch (e) {
      console.error(
        `[prerender-ssr] FAQPage write failed for ${route}: ${String((e && e.message) || e).slice(0, 120)}`,
      );
    }
  }
  console.log(
    `[prerender-ssr] FAQPage repair: injected into ${faqRepaired} article heads (${faqNoNode} non-article/no-FAQ routes skipped)`,
  );

  // Tool-head refresh pass — the carried head is a Chromium-captured
  // snapshot, so when tool copy changes (seoTitle, seoDescription,
  // subtitle, howToSteps, FAQs) the head's <title>, meta/og/twitter
  // tags and the HowTo + FAQPage JSON-LD nodes go stale even though the
  // SSR body re-renders with the new copy. (This is what the GSC
  // duplicate-canonical differentiation hit: the 5 changed tool pages
  // re-rendered their bodies but kept old heads.) Regenerate those
  // fields from the real data (entry-server getToolPageHead, which
  // mirrors the ToolPageLayout client effects exactly) and replace them
  // in the carried head. Idempotent: a value is replaced only when it
  // differs from the fresh one, so unchanged pages stay byte-identical
  // apart from the bundle-hash refresh the render loop already does.
  const decodeEntities = (s) =>
    s
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;|&apos;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  const escapeHtmlAttr = (s) =>
    s
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  let toolHeadsRefreshed = 0;
  for (const route of routes) {
    let head = null;
    try {
      head = await getToolPageHead(route);
    } catch (e) {
      console.error(
        `[prerender-ssr] Tool-head lookup failed for ${route}: ${String((e && e.message) || e).slice(0, 120)}`,
      );
      continue;
    }
    if (!head) continue;
    const outPath = outPathFor(route);
    if (!fs.existsSync(outPath)) continue;
    let html;
    try {
      html = fs.readFileSync(outPath, 'utf8');
    } catch {
      continue;
    }
    let updated = html;
    // <title> — text content, escaped the way innerHTML serializes it.
    updated = updated.replace(/<title>([\s\S]*?)<\/title>/, (m, inner) =>
      decodeEntities(inner) === head.seoTitle
        ? m
        : `<title>${escapeHtmlAttr(head.seoTitle)}</title>`,
    );
    // Meta content tags (name/property first, content second — the
    // order the head effect creates them in).
    const metaTargets = [
      ['name', 'description', head.seoDescription],
      ['property', 'og:title', head.seoTitle],
      ['property', 'og:description', head.seoDescription],
      ['property', 'og:image:alt', head.seoTitle],
      ['name', 'twitter:title', head.seoTitle],
      ['name', 'twitter:description', head.seoDescription],
      ['name', 'twitter:image:alt', head.seoTitle],
    ];
    for (const [attr, key, fresh] of metaTargets) {
      const escKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(
        `<meta ${attr}="${escKey}" content="([^"]*)"\\s*/?>`,
      );
      updated = updated.replace(re, (m, content) =>
        decodeEntities(content) === fresh
          ? m
          : m.replace(content, escapeHtmlAttr(fresh)),
      );
    }
    // Tool JSON-LD: replace the HowTo + FAQPage nodes with fresh ones.
    // The script text is JSON.stringify output (see ToolPageLayout),
    // so parse + replace + stringify reproduces the original bytes
    // exactly when nothing changed.
    const scriptRe =
      /<script type="application\/ld\+json" id="tool-[^"]*">([\s\S]*?)<\/script>/;
    const sm = updated.match(scriptRe);
    if (sm) {
      try {
        const doc = JSON.parse(sm[1]);
        const graph =
          doc && Array.isArray(doc['@graph']) ? doc['@graph'] : null;
        if (graph) {
          let changed = false;
          for (const [type, fresh] of [
            ['HowTo', head.howToNode],
            ['FAQPage', head.faqNode],
          ]) {
            if (!fresh) continue;
            const idx = graph.findIndex((n) => n && n['@type'] === type);
            if (idx === -1) {
              graph.push(fresh);
              changed = true;
            } else if (JSON.stringify(graph[idx]) !== JSON.stringify(fresh)) {
              graph[idx] = fresh;
              changed = true;
            }
          }
          if (changed) {
            const scriptId = sm[0].match(/id="([^"]*)"/)[1];
            updated = updated.replace(
              sm[0],
              `<script type="application/ld+json" id="${scriptId}">${JSON.stringify(doc)}</script>`,
            );
          }
        }
      } catch {
        // Unparseable script — leave the head untouched.
      }
    }
    if (updated !== html) {
      try {
        fs.writeFileSync(outPath, updated, 'utf8');
        toolHeadsRefreshed += 1;
      } catch (e) {
        console.error(
          `[prerender-ssr] Tool-head write failed for ${route}: ${String((e && e.message) || e).slice(0, 120)}`,
        );
      }
    }
  }
  console.log(
    `[prerender-ssr] Tool-head refresh: ${toolHeadsRefreshed} heads updated`,
  );

  console.log(
    `[prerender-ssr] FINISHED routes=${routes.length} rendered=${done} skipped=${skipped} failed=${failed.length} elapsed=${Math.round((Date.now() - t0) / 1000)}s`,
  );
  if (failed.length > 0) {
    console.log('[prerender-ssr] failed routes:');
    for (const f of failed.slice(0, 50)) console.log(`  - ${f}`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error('[prerender-ssr] FATAL', e);
  process.exit(1);
});
