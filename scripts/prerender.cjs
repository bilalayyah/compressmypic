#!/usr/bin/env node
/**
 * Prerender CompressMyPic — SEO audit issue 2 (no SSR / prerendering).
 *
 * Generates one static HTML file per route under public/<route>/index.html
 * so every route's RAW HTML carries its own title, meta description,
 * canonical, hreflang links, H1 and JSON-LD (all injected by the app at
 * render time), instead of the same 7,612-byte homepage shell.
 *
 * WHY THIS DESIGN (read before changing it): Cloudflare Pages' build
 * environment has NO Chromium / Playwright, so prerendering CANNOT run at
 * Cloudflare build time. Instead this script renders LOCALLY with headless
 * Chromium over a local `vite preview` server and COMMITS the output as
 * static files under public/ (Vite copies public/ verbatim into dist/, and
 * Cloudflare serves the most specific static file for each route). The
 * Cloudflare build itself stays a plain `vite build` — no browser needed.
 * Re-run this script after any content/route change and commit the result.
 *
 * Flow: `vite build` -> start `vite preview` on a local port -> render
 * every route with headless Chromium (Playwright, via the relay proxy at
 * 127.0.0.1:18080) -> sanitize the captured HTML (drop the absolute
 * preview-origin <link rel="modulepreload"> tags Vite's runtime injects,
 * or every live page would request chunks from localhost) -> save
 * documentElement.outerHTML to public/<route>/index.html -> `vite build`
 * again so dist/ contains the prerendered files (skipped with --no-rebuild).
 *
 * Route list: public/sitemap.xml (626 URLs) + /admin/comments (a real route
 * that is deliberately NOT in the sitemap). The home route '/' is SKIPPED on
 * purpose: public/index.html would be copied to dist/index.html and could
 * conflict with Vite's own index.html output. Home needs no prerender —
 * Vite's index.html already carries the correct home title/meta.
 *
 * Playwright is NOT a dependency of this repo. It resolves from the shared
 * screenshot-tool checkout (~/workspace/compressmypic/screenshot-tool/) via
 * createRequire; a plain require('playwright') is tried first so the script
 * also works if playwright is ever installed in this repo.
 *
 * Usage (from the repo root):
 *   node scripts/prerender.cjs [--port 4180] [--concurrency 4]
 *     [--limit 5] [--routes /de/alle-tools,/image-resizer] [--no-rebuild]
 *     [--skip-existing] [--keep-preview] [--out-dir public]
 *
 * Exit code is non-zero if any route fails after its retry.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');
const { createRequire } = require('module');

const REPO_ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(REPO_ROOT, 'public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');
const SITE_ORIGIN = 'https://compressmypic.online';
const EXTRA_ROUTES = ['/admin/comments'];
const PROXY_ARGS = ['--proxy-server=http://127.0.0.1:18080', '--ignore-certificate-errors'];
// /dev/shm on this machine is only 794 MB; without this flag Chromium exhausts
// it with several heavy pages open and the whole browser dies mid-run.
const CHROMIUM_ARGS = [...PROXY_ARGS, '--disable-dev-shm-usage'];
const BATCH_SIZE = 100; // fresh browser per batch: bounds Chromium memory growth
// Texts of the two short-lived loading states (locale spinner + Suspense
// fallback). A rendered page's <main> is far longer than either, so readiness
// is: <main> exists, is long, and contains none of these.
const LOADING_TEXTS = [
  'Loading…',
  'Cargando…',
  'Carregando…',
  'Chargement…',
  'Wird geladen…',
  'Caricamento…',
  'Memuat…',
  'Загрузка…',
  '読み込み中…',
  '로딩 중…',
  '加载中…',
];

function parseArgs(argv) {
  const opts = { port: 4180, concurrency: 4, limit: 0, routes: null, rebuild: true, keepPreview: false, skipExisting: false, previewUrl: null };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--port') opts.port = Number(argv[++i]);
    else if (a === '--concurrency') opts.concurrency = Number(argv[++i]);
    else if (a === '--limit') opts.limit = Number(argv[++i]);
    else if (a === '--routes') opts.routes = argv[++i].split(',').map((s) => s.trim()).filter(Boolean);
    else if (a === '--preview-url') opts.previewUrl = argv[++i].replace(/\/+$/, '');
    else if (a === '--no-rebuild') opts.rebuild = false;
    else if (a === '--skip-existing') opts.skipExisting = true;
    else if (a === '--keep-preview') opts.keepPreview = true;
    else if (a === '--help' || a === '-h') {
      console.log('Usage: node scripts/prerender.cjs [--port 4180] [--concurrency 6] [--limit N] [--routes a,b] [--no-rebuild] [--keep-preview] [--preview-url http://127.0.0.1:8901]');
      process.exit(0);
    } else {
      console.error(`Unknown argument: ${a}`);
      process.exit(2);
    }
  }
  return opts;
}

function loadPlaywright() {
  try {
    return require('playwright');
  } catch {
    const screenshotToolPkg = path.resolve(
      __dirname, '..', '..', '..', '..', 'screenshot-tool', 'package.json',
    );
    return createRequire(screenshotToolPkg)('playwright');
  }
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
  // '/de/bildgroesse-aendern' -> public/de/bildgroesse-aendern/index.html
  // '/de/' (locale home)      -> public/de/index.html
  const clean = routePath.replace(/\/+$/, '') || '/';
  if (clean === '/') return null; // home: skipped on purpose, see header
  return path.join(PUBLIC_DIR, ...clean.split('/').filter(Boolean), 'index.html');
}

function viteBin() {
  return path.join(REPO_ROOT, 'node_modules', 'vite', 'bin', 'vite.js');
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Build via Vite directly (not `npm run build`): npm's own log-file writing
// intermittently fails with EPERM in this environment, while Vite itself
// builds fine. Same command the package.json "build" script runs.
// Retries: Vite's config load intermittently fails with EPERM writing its
// bundled-config temp file (node_modules/.vite-temp) when the machine is
// under load from parallel workers; the failure comes in waves and a retry
// a few seconds later succeeds, so retry before giving up.
function distIsCurrent() {
  // Best-effort freshness check: dist/ counts as current when Vite's own
  // index.html exists and the newest built asset is newer than main.tsx
  // (the only source file this script's runs change between builds).
  try {
    const distIndex = path.join(REPO_ROOT, 'dist', 'index.html');
    if (!fs.existsSync(distIndex)) return false;
    const srcMtime = fs.statSync(path.join(REPO_ROOT, 'src', 'main.tsx')).mtimeMs;
    const assetsDir = path.join(REPO_ROOT, 'dist', 'assets');
    let newest = 0;
    for (const f of fs.readdirSync(assetsDir)) {
      const m = fs.statSync(path.join(assetsDir, f)).mtimeMs;
      if (m > newest) newest = m;
    }
    return newest >= srcMtime;
  } catch {
    return false;
  }
}

function viteBuild() {
  let lastErr;
  for (let attempt = 1; attempt <= 6; attempt += 1) {
    try {
      execSync(`${process.execPath} ${viteBin()} build`, { cwd: REPO_ROOT, stdio: 'inherit' });
      return;
    } catch (e) {
      lastErr = e;
      console.warn(`[prerender] vite build attempt ${attempt} failed, retrying in 20s...`);
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 20000);
    }
  }
  throw lastErr;
}

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { cwd: REPO_ROOT, stdio: 'inherit', shell: false });
    child.on('error', reject);
    child.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} ${args.join(' ')} exited ${code}`))));
  });
}

async function waitForPreview(baseUrl, timeoutMs = 30000) {
  const started = Date.now();
  for (;;) {
    try {
      const res = await fetch(`${baseUrl}/`, { redirect: 'manual' });
      if (res.status === 200) return;
    } catch {
      // not up yet
    }
    if (Date.now() - started > timeoutMs) throw new Error(`preview server did not come up at ${baseUrl}`);
    await new Promise((r) => setTimeout(r, 300));
  }
}

function sanitizePrerenderedHtml(html, baseUrl) {
  // Vite's runtime preload helper injects <link rel="modulepreload"> tags
  // with ABSOLUTE urls of the render-time origin (this local preview
  // server, e.g. http://127.0.0.1:4180/assets/ImageResizerPage-*.js).
  // Shipping those would make every live page request chunks from a
  // localhost preview server (connection refused, console errors on every
  // page). Drop the injected preload links entirely — the app's relative
  // dynamic imports fetch the same chunks from the live origin anyway —
  // and rewrite any other preview-origin URL to a root-relative one.
  const escaped = baseUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let out = html.replace(new RegExp(`<link[^>]*href="${escaped}[^"]*"[^>]*>`, 'g'), '');
  out = out.split(baseUrl).join('');
  return out;
}

async function renderRoute(browser, baseUrl, routePath, attempt) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  try {
    // Block AdSense during prerender. The adsbygoogle script generates
    // aswift iframes whose ad-request URL embeds the render-time origin
    // URL-ENCODED (http%3A%2F%2F127.0.0.1%3A4182%2F...) — the sanitizer's
    // raw-origin check cannot see that form, so 181 files shipped live
    // iframes requesting ads for a localhost URL (found 2026-11-15).
    // Blocking here keeps the snapshot clean; the script still loads
    // normally on live pages (it is in index.html <head>).
    await page.route('**/*', (route) => {
      const u = route.request().url();
      // googletagmanager + google-analytics are aborted too (re-audit M6):
      // the loader injects gtag.js on every page, and without the abort the
      // prerender would fire real pageviews into GA4 for all 627 routes.
      if (/googlesyndication\.com|doubleclick\.net|googleadservices\.com|googletagmanager\.com|google-analytics\.com/.test(u)) return route.abort();
      return route.continue();
    });
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e).slice(0, 200)));
    await page.goto(`${baseUrl}${routePath}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    // Never wait for networkidle: /remove-background keeps the network busy
    // for 60s+ (audit note) and AdSense/fonts can hang behind the proxy.
    // Instead wait for the app to be actually rendered, then settle.
    try {
      await page.waitForFunction(
        (loadingTexts) => {
          const root = document.getElementById('root');
          if (!root) return false;
          // main.tsx hides #root until the app settles; never snapshot
          // while hidden, or the prerendered file would ship hidden.
          if (window.getComputedStyle(root).visibility === 'hidden') return false;
          const main = document.querySelector('#root main');
          if (!main) return false;
          const text = main.innerText || '';
          if (text.length < 80) return false;
          const head = text.slice(0, 300);
          return !loadingTexts.some((t) => head.includes(t));
        },
        LOADING_TEXTS,
        { timeout: 45000 },
      );
    } catch {
      // Fall through and snapshot anyway; the run summary flags thin pages.
    }
    await page.waitForTimeout(900);
    const rawHtml = await page.evaluate(() => document.documentElement.outerHTML);
    const html = sanitizePrerenderedHtml(rawHtml, baseUrl);
    if (html.includes(baseUrl)) {
      throw new Error(`prerendered HTML still contains the preview origin ${baseUrl}`);
    }
    // URL-encoded form of the origin (e.g. inside an AdSense request URL):
    // encodeURIComponent(baseUrl) must not survive either — the sanitizer
    // only strips the raw form, so check the encoded form explicitly.
    if (html.includes(encodeURIComponent(baseUrl))) {
      throw new Error(`prerendered HTML still contains the URL-encoded preview origin ${encodeURIComponent(baseUrl)}`);
    }
    const title = await page.evaluate(() => document.title);
    const h1 = await page.evaluate(() => {
      const el = document.querySelector('h1');
      return el ? el.textContent.trim().slice(0, 120) : '';
    });
    return { html, title, h1, errors, thin: !html.includes('<footer') || html.length < 8000 };
  } finally {
    await page.close();
  }
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const startedAt = Date.now();
  const { chromium } = loadPlaywright();

  let routes = readRoutes();
  if (opts.routes) {
    const wanted = new Set(opts.routes.map((r) => (r.length > 1 ? r.replace(/\/+$/, '') : r)));
    routes = routes.filter((r) => wanted.has(r));
    const missing = [...wanted].filter((r) => !routes.includes(r));
    if (missing.length) console.warn(`[prerender] WARNING routes not in sitemap+extras, skipped: ${missing.join(', ')}`);
  }
  const toRender = routes.filter((r) => outPathFor(r) !== null);
  let renderList = toRender;
  if (opts.skipExisting) {
    renderList = toRender.filter((r) => {
      const outFile = outPathFor(r);
      try {
        return fs.statSync(outFile).size < 8000;
      } catch {
        return true;
      }
    });
    console.log(`[prerender] --skip-existing: ${toRender.length - renderList.length} already rendered, ${renderList.length} remaining`);
  }
  // --limit applies after --skip-existing so it counts remaining work.
  if (opts.limit > 0) renderList = renderList.slice(0, opts.limit);
  const skippedHome = routes.length - toRender.length;
  console.log(`[prerender] ${renderList.length} routes to render (${skippedHome} home route skipped), concurrency ${opts.concurrency}`);
  if (renderList.length === 0) {
    console.log('[prerender] nothing to render — exiting without building.');
    process.exit(0);
  }

  // --preview-url: render against an already-running static server instead
  // of building + starting vite preview. Needed when Vite cannot load its
  // TS config (EPERM wave on node_modules/.vite-temp under VM load — both
  // `vite build` and `vite preview` fail there), but dist/ is already
  // built from the current sources: a plain static server serves the same
  // files, and the captured HTML is identical (the app re-renders in the
  // browser before the snapshot). Example:
  //   python3 -m http.server 8901 --directory dist
  //   node scripts/prerender.cjs --skip-existing --preview-url http://127.0.0.1:8901
  const baseUrl = opts.previewUrl || `http://127.0.0.1:${opts.port}`;
  let preview = null;
  if (opts.previewUrl) {
    console.log(`[prerender] using external server at ${baseUrl} (skipping build 1/2 + vite preview)`);
    if (!distIsCurrent()) {
      console.warn('[prerender] WARNING dist/ does not look current (newest asset older than src/main.tsx) — rendering against a stale build; run `npm run build` first when the EPERM wave passes');
    }
  } else {
    console.log('[prerender] build 1/2: vite build');
    try {
      viteBuild();
    } catch (e) {
      // Vite's config load intermittently fails with EPERM writing its
      // bundled-config temp file (node_modules/.vite-temp) when the shared VM
      // is under load from parallel workers. If dist/ is already built from
      // the current sources, the preview can serve it as-is — do not abort
      // a long render run for a redundant rebuild.
      if (distIsCurrent()) {
        console.warn('[prerender] WARNING build 1/2 failed (EPERM wave?) but dist/ is current — continuing with the existing dist/');
      } else {
        throw e;
      }
    }

    const previewBin = viteBin();
    preview = spawn(
      process.execPath,
      [previewBin, 'preview', '--port', String(opts.port), '--strictPort'],
      { cwd: REPO_ROOT, stdio: 'pipe' },
    );
    preview.stdout.on('data', () => {});
    preview.stderr.on('data', (d) => process.stderr.write(`[preview] ${d}`));
  }
  try {
    await waitForPreview(baseUrl);
    console.log(`[prerender] server up at ${baseUrl}`);

    // Batches of BATCH_SIZE routes per fresh browser: a single Chromium
    // instance accumulates memory over hundreds of heavy pages and dies
    // mid-run (observed at route ~300 with /dev/shm exhaustion). A dead
    // browser fails its whole batch fast; those routes are retried in the
    // next pass with a fresh browser instead of aborting the run.
    const results = [];
    let failures = [];
    let totalBytes = 0;
    let done = 0;
    const renderOne = async (browser, baseUrl, routePath) => {
      const outFile = outPathFor(routePath);
      const routeStarted = Date.now();
      for (let attempt = 1; attempt <= 2; attempt += 1) {
        try {
          const { html, title, h1, errors, thin } = await renderRoute(browser, baseUrl, routePath, attempt);
          if (!title) throw new Error('empty document.title after render');
          if (!h1) throw new Error('no <h1> after render');
          const doc = `<!doctype html>\n${html}\n`;
          fs.mkdirSync(path.dirname(outFile), { recursive: true });
          fs.writeFileSync(outFile, doc, 'utf8');
          // Verify the write: this VM's overlay filesystem intermittently
          // fails writes with EPERM or silently truncates files to 0 bytes
          // under load (observed 2026-11-14 ~16:44-17:05). A truncated file
          // must fail the route (and be retried) rather than ship empty.
          const written = fs.statSync(outFile).size;
          if (written !== Buffer.byteLength(doc)) {
            throw new Error(`write verification failed for ${outFile}: wrote ${written} of ${Buffer.byteLength(doc)} bytes`);
          }
          totalBytes += Buffer.byteLength(doc);
          if (thin) console.warn(`[prerender] WARNING thin HTML for ${routePath} (${doc.length} bytes)`);
          if (errors.length) console.warn(`[prerender] WARNING pageerrors on ${routePath}: ${errors.slice(0, 2).join(' | ')}`);
          const routeSecs = ((Date.now() - routeStarted) / 1000).toFixed(1);
          if (Number(routeSecs) > 15) console.log(`[prerender] slow route ${routePath}: ${routeSecs}s`);
          results.push({ routePath, title, h1, bytes: Buffer.byteLength(doc) });
          return null;
        } catch (e) {
          const msg = String((e && e.message) || e).slice(0, 300);
          if (attempt === 2) return { routePath, error: msg };
          console.warn(`[prerender] retry ${routePath} after: ${msg.slice(0, 160)}`);
        }
      }
      return null;
    };
    let remaining = [...renderList];
    // A browser launch can die under memory pressure (observed SIGTRAP at
    // the batch boundary with ~360 MB free on the shared VM) — retry the
    // launch instead of aborting the whole run; if all attempts fail, the
    // batch is recorded as failed and retried in the next pass.
    const launchBrowser = async () => {
      for (let a = 1; a <= 3; a += 1) {
        try {
          return await chromium.launch({ args: CHROMIUM_ARGS });
        } catch (e) {
          console.warn(`[prerender] browser launch attempt ${a}/3 failed: ${String((e && e.message) || e).slice(0, 140)}`);
          await sleep(10000);
        }
      }
      return null;
    };
    for (let pass = 1; pass <= 3 && remaining.length; pass += 1) {
      const passFailures = [];
      for (let i = 0; i < remaining.length; i += BATCH_SIZE) {
        const batch = remaining.slice(i, i + BATCH_SIZE);
        const browser = await launchBrowser();
        if (!browser) {
          for (const routePath of batch) passFailures.push({ routePath, error: 'browser launch failed after 3 attempts' });
          done += batch.length;
          console.log(`[prerender] ${done}/${renderList.length} done, ${failures.length + passFailures.length} failed (launch failed, batch queued for next pass)`);
          continue;
        }
        try {
          const queue = [...batch];
          const workers = Array.from({ length: Math.min(opts.concurrency, queue.length) }, async () => {
            while (queue.length) {
              const routePath = queue.shift();
              const failure = await renderOne(browser, baseUrl, routePath);
              if (failure) passFailures.push(failure);
              done += 1;
              if (done % 50 === 0 || done === renderList.length) {
                console.log(`[prerender] ${done}/${renderList.length} done, ${failures.length + passFailures.length} failed`);
              }
            }
          });
          await Promise.all(workers);
        } finally {
          await browser.close().catch(() => {});
        }
      }
      failures = passFailures;
      remaining = passFailures.map((f) => f.routePath);
      if (remaining.length) console.log(`[prerender] pass ${pass} done, retrying ${remaining.length} failed routes with fresh browsers`);
    }
    const elapsedMin = ((Date.now() - startedAt) / 60000).toFixed(2);
    console.log(`[prerender] DONE in ${elapsedMin} min: ${results.length} rendered, ${failures.length} failed, total ${totalBytes} bytes (${(totalBytes / 1048576).toFixed(1)} MB) across ${results.length} files`);
    if (failures.length) {
      for (const f of failures) console.error(`[prerender] FAILED ${f.routePath}: ${f.error}`);
    }
    if (failures.length) process.exitCode = 1;
    return { failures, results };
  } finally {
    if (preview) {
      if (!opts.keepPreview) {
        preview.kill('SIGTERM');
      } else {
        console.log(`[prerender] preview kept running on port ${opts.port} (pid ${preview.pid})`);
      }
    }
  }
}

main()
  .then(async ({ failures }) => {
    if (failures && failures.length) {
      console.error('[prerender] finished WITH FAILURES — not rebuilding; fix the failures and re-run.');
      // Set exitCode and return instead of process.exit(): process.exit()
      // truncates stdout buffered to a redirected file, losing the log.
      process.exitCode = 1;
      return;
    }
    const opts = parseArgs(process.argv.slice(2));
    if (opts.rebuild) {
      console.log('[prerender] build 2/2: vite build (copies prerendered files into dist/)');
      try {
        viteBuild();
      } catch (e) {
        // Same EPERM wave as build 1/2. Build 2/2 only copies public/
        // verbatim into dist/ (the JS bundles are already current from
        // build 1/2), so a plain recursive copy reaches the identical
        // end state without Vite.
        console.warn('[prerender] WARNING build 2/2 failed — copying public/ into dist/ directly instead');
        fs.cpSync(path.join(REPO_ROOT, 'public'), path.join(REPO_ROOT, 'dist'), { recursive: true });
        console.log('[prerender] public/ copied into dist/ (fallback for failed build 2/2)');
      }
      console.log('[prerender] all done. Verify with: python3 -m http.server --directory dist <port>  (plain static server, no SPA fallback)');
    } else {
      console.log('[prerender] --no-rebuild: run `npm run build` yourself so dist/ picks up the new files.');
    }
    // No process.exit(0) here — see the comment above about truncated
    // redirected stdout; the process exits naturally once the loop drains.
  })
  .catch((e) => {
    console.error('[prerender] FATAL', e);
    // exitCode, not process.exit(): see the comment above — process.exit()
    // truncates stdout buffered to a redirected file.
    process.exitCode = 1;
  });
