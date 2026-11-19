// CLS + console-error probe — verification for the hydration fix (Tier J).
//
// Independent of Lighthouse: measures real layout-shift entries via a
// PerformanceObserver installed before any page script runs (buffered),
// while the page loads and settles, and captures console errors +
// pageerrors. A hydration mismatch (React error #418) logs a console
// error and discards the prerendered DOM — this probe catches both the
// error and the shift it causes.
//
// Usage: node scripts/cls-probe.cjs [--preview-url http://127.0.0.1:8901] [--port 8901] [--keep-preview]
// Exits 0 if every page is CLS < 0.1 with no console/page errors, else 1.
//
// The pass bar is CLS < 0.1 per page (the pre-hide DE number was 0.7852
// with a ~7,400px footer jump). Single local runs are lab data — quote
// them as measured, never as a CWV pass.
'use strict';
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const http = require('node:http');
const { spawn } = require('node:child_process');
const { createRequire } = require('node:module');

const REPO_ROOT = path.resolve(__dirname, '..');
const PROXY_ARGS = ['--proxy-server=http://127.0.0.1:18080', '--ignore-certificate-errors'];

const PAGES = [
  // Serve-dist applies the Cloudflare _redirects rules: '/' serves the
  // prerendered home (200), '/home/' 301s to '/', slash-less tool routes
  // 308 to the trailing-slash form. So probe '/' (NOT /home/ — the client
  // router 404s there) and use trailing slashes on tool routes, otherwise
  // the probe measures a client render, not the SSR file.
  { route: '/', viewport: { width: 1280, height: 900 }, name: 'home desktop' },
  { route: '/', viewport: { width: 390, height: 844 }, name: 'home mobile' },
  { route: '/de/', viewport: { width: 390, height: 844 }, name: 'DE home mobile' },
  { route: '/ja/', viewport: { width: 390, height: 844 }, name: 'JA home mobile' },
  { route: '/blog/jpg-to-png-guide/', viewport: { width: 390, height: 844 }, name: 'EN article mobile' },
  { route: '/de/blog/bild-auf-50-kb-komprimieren-anleitung/', viewport: { width: 390, height: 844 }, name: 'DE article mobile' },
  { route: '/image-resizer/', viewport: { width: 390, height: 844 }, name: 'tool mobile' },
];

const LOADING_TEXTS = [
  'Loading…', 'Cargando…', 'Carregando…', 'Chargement…', 'Wird geladen…',
  'Caricamento…', 'Memuat…', 'Загрузка…', '読み込み中…', '로딩 중…', '加载中…',
];

function loadPlaywright() {
  try {
    return require('playwright');
  } catch {
    const relativePkg = path.resolve(
      __dirname, '..', '..', '..', '..', 'screenshot-tool', 'package.json',
    );
    try {
      return createRequire(relativePkg)('playwright');
    } catch {
      const homePkg = path.join(
        os.homedir(), 'workspace', 'compressmypic', 'screenshot-tool', 'package.json',
      );
      return createRequire(homePkg)('playwright');
    }
  }
}

function parseArgs(argv) {
  const opts = { port: 8901, previewUrl: null, keepPreview: false };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--port') opts.port = Number(argv[++i]);
    else if (a === '--preview-url') opts.previewUrl = argv[++i].replace(/\/+$/, '');
    else if (a === '--keep-preview') opts.keepPreview = true;
    else {
      console.error(`Unknown argument: ${a}`);
      process.exit(2);
    }
  }
  return opts;
}

function waitForPreview(baseUrl, timeoutMs = 30000) {
  const started = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      http
        .get(baseUrl, (res) => {
          res.resume();
          if (res.statusCode === 200) return resolve();
          if (Date.now() - started > timeoutMs) return reject(new Error(`preview server did not come up at ${baseUrl}`));
          setTimeout(tick, 250);
        })
        .on('error', () => {
          if (Date.now() - started > timeoutMs) return reject(new Error(`preview server did not come up at ${baseUrl}`));
          setTimeout(tick, 250);
        });
    };
    tick();
  });
}

async function probePage(browser, baseUrl, spec) {
  const page = await browser.newPage({ viewport: spec.viewport });
  const consoleErrors = [];
  const pageErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text().slice(0, 300));
  });
  page.on('pageerror', (e) => pageErrors.push(String(e).slice(0, 300)));
  // Third-party scripts cannot shift layout; block them so the run fires
  // no real GA4 pageviews. Fonts are NOT blocked — a font swap is a real
  // layout-shift contributor and must be measured honestly.
  // Fulfill (not abort): aborting makes the browser log "Failed to load
  // resource: net::ERR_FAILED", which this probe then counts as a console
  // error — the probe failing itself on every page. An empty 200 keeps the
  // gtag stub inert (events queue in dataLayer, nothing is sent) and the
  // console clean. Fixed 2026-11-19.
  await page.route('**/*', (r) => {
    const u = r.request().url();
    if (/googlesyndication\.com|doubleclick\.net|googleadservices\.com|googletagmanager\.com|google-analytics\.com/.test(u)) {
      return r.fulfill({ status: 200, contentType: 'text/javascript', body: '' });
    }
    return r.continue();
  });
  // Install the shift observer before any page script runs (buffered, so
  // shifts that happened before attach are still reported).
  await page.addInitScript(() => {
    window.__shifts = [];
    try {
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) window.__shifts.push(entry.value);
        }
      }).observe({ type: 'layout-shift', buffered: true });
    } catch {
      // PerformanceObserver unavailable — shifts stay empty, reported as such.
    }
  });
  try {
    await page.goto(`${baseUrl}${spec.route}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    try {
      await page.waitForFunction(
        (loadingTexts) => {
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
      throw new Error('readiness timeout');
    }
    // Settle: hydration + deferred scripts + font swap all land here.
    await page.waitForTimeout(5000);
    const shifts = await page.evaluate(() => window.__shifts || []);
    const cls = shifts.reduce((a, b) => a + b, 0);
    const max = shifts.length ? Math.max(...shifts) : 0;
    return { ...spec, cls, maxShift: max, shiftCount: shifts.length, consoleErrors, pageErrors };
  } finally {
    await page.close();
  }
}

async function main() {
  const opts = parseArgs(process.argv);
  const { chromium } = loadPlaywright();
  let previewChild = null;
  let baseUrl = opts.previewUrl;
  if (!baseUrl) {
    baseUrl = `http://127.0.0.1:${opts.port}`;
    previewChild = spawn(
      process.execPath,
      [path.join(REPO_ROOT, 'node_modules', 'vite', 'bin', 'vite.js'), 'preview', '--port', String(opts.port), '--strictPort'],
      { cwd: REPO_ROOT, stdio: 'ignore' },
    );
    await waitForPreview(baseUrl);
  }
  const browser = await chromium.launch({ args: PROXY_ARGS });
  const results = [];
  try {
    for (const spec of PAGES) {
      try {
        const r = await probePage(browser, baseUrl, spec);
        results.push(r);
        console.log(
          `[cls-probe] ${r.name}: CLS ${r.cls.toFixed(4)} (max ${r.maxShift.toFixed(4)}, ${r.shiftCount} shifts)` +
            (r.consoleErrors.length ? ` CONSOLE ERRORS: ${r.consoleErrors.length}` : '') +
            (r.pageErrors.length ? ` PAGE ERRORS: ${r.pageErrors.length}` : ''),
        );
        r.consoleErrors.forEach((e) => console.log(`  console: ${e}`));
        r.pageErrors.forEach((e) => console.log(`  pageerror: ${e}`));
      } catch (e) {
        console.log(`[cls-probe] ${spec.name}: FAILED — ${e.message}`);
        results.push({ ...spec, failed: true, error: e.message });
      }
    }
  } finally {
    await browser.close();
    if (previewChild && !opts.keepPreview) previewChild.kill();
  }
  const failed = results.filter((r) => r.failed || r.cls >= 0.1 || r.consoleErrors?.length || r.pageErrors?.length);
  if (failed.length) {
    console.log(`[cls-probe] FAIL: ${failed.length}/${results.length} pages over the bar (CLS >= 0.1, errors, or failed)`);
    process.exit(1);
  }
  console.log(`[cls-probe] PASS: ${results.length}/${results.length} pages CLS < 0.1, no console/page errors`);
}

main().catch((e) => {
  console.error(`[cls-probe] FAILED: ${e.message}`);
  process.exit(1);
});
