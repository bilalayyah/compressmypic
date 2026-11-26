// Post-process for the font-flash fix (2026-11-25): refresh the <head> of every
// prerendered public/*/index.html AFTER scripts/prerender-ssr.cjs.
//
// Why: prerender-ssr carries the HEAD from existing Chromium snapshots, so a
// source edit to index.html (removed Google Fonts links, added preloads, new
// critical CSS with @font-face) does NOT reach the prerendered HTML. This
// script applies exactly those head changes to every prerendered file:
//
//   1. Replace the inline <style data-critical-css> block with the NEW one
//      from index.html (which contains the self-hosted @font-face rules).
//      There are 2 old variants in the wild (LTR + Urdu font stack); both
//      are replaced with the single new block.
//   2. Remove the Google Fonts css2 links for Inter / JetBrains Mono /
//      Great Vibes (both &amp; and & spellings, incl. any <noscript> copy).
//      Noto locale links + preconnects are KEPT.
//   4. (Phase 2, master audit 2026-11-26, CLS 0.587) Collapse the app
//      stylesheet to exactly one render-blocking link: the snapshot heads
//      carry it twice (async media="print" link + <noscript> fallback
//      serialised as a bare link). Belt-and-braces alongside the same
//      dedupe in scripts/prerender-ssr.cjs.
//   5. (Phase 2, issue #11) Ensure the home pages' #home-jsonld @graph
//      contains a WebSite block (mirrors the entry App.tsx injects at
//      runtime — effects do not run under renderToString, so the
//      prerendered home HTML would otherwise lack it). Home files only:
//      public/home/index.html + public/<lang>/index.html.
//
// Idempotent: a second run finds no Inter links, no stale critical CSS and
// preloads already present, and changes nothing.
//
// Usage: node scripts/refresh-prerender-heads.cjs
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const glob = require('node:fs');

const REPO_ROOT = path.resolve(__dirname, '..');
const INDEX_HTML = path.join(REPO_ROOT, 'index.html');
const PUBLIC_DIR = path.join(REPO_ROOT, 'public');

const indexHtml = fs.readFileSync(INDEX_HTML, 'utf8');
const critMatch = indexHtml.match(/<style data-critical-css>([\s\S]*?)<\/style>/);
if (!critMatch) throw new Error('index.html has no <style data-critical-css> block');
const newCritBlock = `<style data-critical-css>${critMatch[1]}</style>`;
const newCritHash = require('node:crypto').createHash('md5').update(critMatch[1]).digest('hex');

const preloadMatch = indexHtml.match(/<link rel="preload" href="\/fonts\/[^"]+" as="font"[^>]*>/g) || [];
if (preloadMatch.length === 0) throw new Error('index.html has no /fonts/ preload links');
const preloadBlock = preloadMatch.join('\n    ');

// A <link> (or <noscript><link>) whose href is a Google Fonts css2 for
// Inter / JetBrains Mono / Great Vibes (either & or &amp; spelling).
const GF_LINK_RE = /<noscript>\s*<link[^>]*href="https:\/\/fonts\.googleapis\.com\/css2\?family=(?:Inter|JetBrains(?:%20|\+)Mono|Great(?:%20|\+)Vibes)[^"]*"[^>]*>\s*<\/noscript>|<link[^>]*href="https:\/\/fonts\.googleapis\.com\/css2\?family=(?:Inter|JetBrains(?:%20|\+)Mono|Great(?:%20|\+)Vibes)[^"]*"[^>]*>/g;
const CRIT_RE = /<style data-critical-css[^>]*>[\s\S]*?<\/style>/;
// Snapshot heads serialize the preconnect as crossorigin="" (no self-close),
// while source index.html writes crossorigin /> — match both spellings.
const PRECONNECT_RE = /(<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com" crossorigin[^>]*>)/;

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

const files = walk(PUBLIC_DIR, []);
let replacedCrit = 0, removedLinks = 0, addedPreload = 0, unchanged = 0;
let dedupedCss = 0, websiteAdded = 0;
const problems = [];

// Phase 2 (issue #11): locale codes whose /<lang>/ index.html is a home
// page (EN home is public/home/index.html).
const HOME_LANGS = new Set([
  'es', 'pt', 'fr', 'de', 'it', 'id', 'ru', 'ja', 'ko', 'zh', 'hi', 'ar',
  'tr', 'vi', 'bn', 'ur',
]);

function isHomeFile(file) {
  const rel = path.relative(PUBLIC_DIR, file).split(path.sep);
  if (rel.length === 2 && rel[0] === 'home' && rel[1] === 'index.html') return 'en';
  if (rel.length === 2 && HOME_LANGS.has(rel[0]) && rel[1] === 'index.html') return rel[0];
  return null;
}

// Collapse duplicate app-stylesheet links to one render-blocking link
// (same dedupe as scripts/prerender-ssr.cjs refreshHead).
function dedupeAppStylesheet(html) {
  let out = html.replace(
    /<noscript>\s*<link[^>]*href="\/assets\/index-[^"]+\.css"[^>]*>\s*<\/noscript>/g,
    '',
  );
  const links = [
    ...out.matchAll(
      /<link[^>]*rel="stylesheet"[^>]*href="(\/assets\/index-[^"]+\.css)"[^>]*>/g,
    ),
  ];
  if (links.length === 0) return { html: out, changed: false };
  const href = links[0][1];
  let seen = false;
  let changed = links.length > 1;
  out = out.replace(
    /<link[^>]*rel="stylesheet"[^>]*href="\/assets\/index-[^"]+\.css"[^>]*>/g,
    () => {
      if (!seen) {
        seen = true;
        return `<link rel="stylesheet" crossorigin href="${href}">`;
      }
      return '';
    },
  );
  // A lone link may still carry the old async attributes — normalise it.
  if (links.length === 1 && links[0][0] !== `<link rel="stylesheet" crossorigin href="${href}">`) {
    changed = true;
  }
  return { html: out, changed };
}

for (const file of files) {
  let html = fs.readFileSync(file, 'utf8');
  const before = html;
  // 1. critical CSS
  const cm = html.match(CRIT_RE);
  if (!cm) { problems.push(`${file}: no critical-CSS block`); continue; }
  if (cm[0] !== newCritBlock) { html = html.replace(CRIT_RE, newCritBlock); replacedCrit++; }
  // 2. remove self-hosted families' Google Fonts links
  const links = html.match(GF_LINK_RE) || [];
  if (links.length > 0) { html = html.replace(GF_LINK_RE, ''); removedLinks += links.length; }
  // 3. preloads (insert once, after the gstatic preconnect)
  if (!html.includes('/fonts/inter.woff2" as="font"')) {
    if (!PRECONNECT_RE.test(html)) { problems.push(`${file}: no gstatic preconnect to anchor preloads`); }
    else { html = html.replace(PRECONNECT_RE, `$1\n    ${preloadBlock}`); addedPreload++; }
  }
  // 4. stylesheet dedupe (Phase 2 CLS fix)
  const deduped = dedupeAppStylesheet(html);
  if (deduped.changed) { html = deduped.html; dedupedCss++; }
  // 5. WebSite JSON-LD on home pages only (Phase 2 issue #11)
  const homeLang = isHomeFile(file);
  if (homeLang) {
    const jm = html.match(
      /<script[^>]*id="home-jsonld"[^>]*>([\s\S]*?)<\/script>/,
    );
    if (!jm) {
      problems.push(`${file}: home page without #home-jsonld script`);
    } else {
      let graph;
      try {
        graph = JSON.parse(jm[1]);
      } catch (e) {
        problems.push(`${file}: #home-jsonld is not valid JSON (${e.message})`);
        graph = null;
      }
      if (graph) {
        const entries = Array.isArray(graph['@graph']) ? graph['@graph'] : [];
        if (!entries.some((e) => e && e['@type'] === 'WebSite')) {
          const canon = html.match(/<link rel="canonical" href="([^"]+)"/);
          const url = canon ? canon[1] : 'https://compressmypic.online/';
          entries.unshift({
            '@type': 'WebSite',
            name: 'CompressMyPic',
            url,
            inLanguage: homeLang,
          });
          graph['@graph'] = entries;
          const replacement = `<script type="application/ld+json" id="home-jsonld">${JSON.stringify(graph)}</script>`;
          html = html.replace(jm[0], replacement);
          websiteAdded++;
        }
      }
    }
  }
  if (html !== before) fs.writeFileSync(file, html);
  else unchanged++;
}
console.log(`[refresh-heads] files=${files.length} criticalCssReplaced=${replacedCrit} googleFontsLinksRemoved=${removedLinks} preloadsAdded=${addedPreload} stylesheetDeduped=${dedupedCss} websiteJsonLdAdded=${websiteAdded} unchanged=${unchanged} newCritMd5=${newCritHash}`);
if (problems.length > 0) {
  console.error(`[refresh-heads] PROBLEMS (${problems.length}):`);
  problems.slice(0, 10).forEach((p) => console.error('  ' + p));
  process.exit(1);
}
console.log('[refresh-heads] OK');
