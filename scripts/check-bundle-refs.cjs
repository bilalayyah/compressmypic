// Guard against P0-1 (audit 2026-11-18): no committed HTML may reference a
// JS/CSS bundle hash that is absent from dist/assets/.
//
// Root cause of P0-1: public/home/index.html (the live homepage, served via
// the / -> /home/ 200 rewrite in public/_redirects) still referenced
// assets/index-Cz5DrMrK.js after Batch 2/3/4 changed the bundle hash to
// index-hL8KEF_o.js. The old bundle was not in the deployment, so ~38% of
// homepage loads rendered a blank white page. The prerender script now
// regenerates public/home/index.html on every run, but this check is the
// backstop: run it after every build, before committing, and in final
// verification. It FAILS (exit 1) on any stale reference instead of
// silently shipping it.
//
// Usage: node scripts/check-bundle-refs.cjs
//   Requires a current dist/ (run `npm run build` first). Scans every
//   committed HTML file under public/ for /assets/* references (script
//   src, link href, modulepreload) and verifies each file exists in
//   dist/assets/. References to /assets/ that are NOT hashed bundles
//   (there are none today) would fail loudly rather than be skipped.
//
// Scope note: this checks references IN HTML. Dynamic imports inside JS
// bundles are Vite-resolved at build time and cannot go stale this way —
// only the HTML snapshots can, which is exactly what this guards.

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(REPO_ROOT, 'public');
const DIST_ASSETS_DIR = path.join(REPO_ROOT, 'dist', 'assets');

const failures = [];
const fail = (msg) => failures.push(msg);

function walkHtml(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, out);
    else if (entry.isFile() && entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

function main() {
  if (!fs.existsSync(DIST_ASSETS_DIR)) {
    console.log('FAIL: dist/assets/ does not exist — run `npm run build` first, then re-run this check.');
    process.exit(1);
  }
  const built = new Set(fs.readdirSync(DIST_ASSETS_DIR));

  const htmlFiles = walkHtml(PUBLIC_DIR, []);
  if (htmlFiles.length === 0) {
    console.log('FAIL: no HTML files found under public/.');
    process.exit(1);
  }

  let refCount = 0;
  for (const file of htmlFiles) {
    const rel = path.relative(REPO_ROOT, file);
    const html = fs.readFileSync(file, 'utf8');
    // src="/assets/..." and href="/assets/..." (script tags, stylesheets,
    // modulepreload links). Relative forms (assets/...) are matched too.
    const refs = new Set();
    for (const m of html.matchAll(/(?:src|href)=["']\/?(assets\/[^"'\s>]+)["']/g)) {
      refs.add(m[1]);
    }
    for (const ref of refs) {
      refCount += 1;
      const name = ref.slice('assets/'.length).split(/[?#]/)[0];
      if (!built.has(name)) {
        fail(`${rel}: references ${ref} — not present in dist/assets/ (stale bundle hash?)`);
      }
    }
  }

  // The homepage snapshot is the file P0-1 broke: assert explicitly that it
  // exists and carries at least one bundle reference (a 0-reference home
  // file would mean the prerender silently shipped an empty shell).
  const homeFile = path.join(PUBLIC_DIR, 'home', 'index.html');
  if (!fs.existsSync(homeFile)) {
    fail('public/home/index.html is missing — the live homepage has no snapshot (run scripts/prerender.cjs)');
  } else {
    const homeHtml = fs.readFileSync(homeFile, 'utf8');
    if (!/\/assets\/index-[^"']+\.js/.test(homeHtml)) {
      fail('public/home/index.html carries no /assets/index-*.js reference — it cannot mount the app');
    }
  }

  if (failures.length > 0) {
    console.log(`FAIL (${failures.length}):`);
    for (const f of failures) console.log(`  - ${f}`);
    process.exit(1);
  }
  console.log(`bundle-refs OK: ${htmlFiles.length} HTML files, ${refCount} /assets/ references, all present in dist/assets/.`);
}

main();
