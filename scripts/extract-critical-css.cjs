// Critical-CSS extractor — Tier D of the speed fix (2026-11-19).
//
// Usage: node scripts/extract-critical-css.cjs [--port 8901] [--preview-url http://127.0.0.1:8901] [--keep-preview]
//
// Flow: `vite build` -> start `vite preview` on a local port -> load the
// home, one tool and one article page at mobile (390x844) and desktop
// (1280x900) in headless Chromium (Playwright, via the relay proxy —
// same setup as scripts/prerender.cjs) -> collect the classes of every
// element intersecting the viewport (plus their ancestors) -> filter the
// built app CSS (postcss) down to the rules those classes need -> write
// the result as an inline <style> into index.html, replacing the
// <!-- CRITICAL-CSS --> placeholder (or the previous run's <style> —
// re-runs are idempotent).
//
// After running this, REBUILD so dist/index.html carries the new inline
// style (the CSS bundle hash is deterministic, so the rebuild changes
// nothing else — the script prints the bundle filename; verify it is the
// same after the rebuild).
//
// What is always kept: @layer theme + @layer base (theme variables and
// preflight — small and global), @property rules, @keyframes, and any
// rule whose selector is :root. Utilities-layer rules are kept only when
// at least one class in their selector was seen above the fold.
//
// Fallback (per the speed-fix plan): if the extracted CSS is absurdly
// large (>34 KiB) or the extraction fails, do NOT ship it — use the
// preload-only approach instead and report honestly.
// (Limit raised 30 -> 32 KiB on 2026-11-25: the self-hosted @font-face
// rules for Inter / JetBrains Mono / Great Vibes must live in the critical
// CSS for the first paint to use Inter, and they add ~1 KiB. The previous
// critical CSS was already 30,112 bytes, so the old 30 KiB cap would reject
// a correct extraction. Raised again 32 -> 34 KiB on 2026-11-26: the
// Phase 2 CLS fix adds the base-layer .sr-only rules plus the <360px
// header variants, ~2 KiB of above-fold rules. 34 KiB inline CSS is still
// small.)
'use strict';
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const http = require('node:http');
const { spawn } = require('node:child_process');
const { createRequire } = require('node:module');

const REPO_ROOT = path.resolve(__dirname, '..');
const INDEX_HTML = path.join(REPO_ROOT, 'index.html');
const DIST_DIR = path.join(REPO_ROOT, 'dist');
const PROXY_ARGS = ['--proxy-server=http://127.0.0.1:18080', '--ignore-certificate-errors'];

const ROUTES = ['/', '/image-resizer', '/blog/jpg-to-png-guide/'];
const VIEWPORTS = [
  { width: 390, height: 844, name: 'mobile' },
  { width: 1280, height: 900, name: 'desktop' },
];

// Same loading-text list as scripts/prerender.cjs (readiness check).
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

function startPreview(port) {
  const child = spawn(
    process.execPath,
    [path.join(REPO_ROOT, 'node_modules', 'vite', 'bin', 'vite.js'), 'preview', '--port', String(port), '--strictPort'],
    { cwd: REPO_ROOT, stdio: 'ignore' },
  );
  return child;
}

async function collectClasses(browser, baseUrl, route, viewport) {
  const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
  try {
    // Third-party + fonts cannot affect which classes are in the DOM; block
    // them so the run is fast and fires no real GA4 pageviews.
    await page.route('**/*', (routeReq) => {
      const u = routeReq.request().url();
      if (/googlesyndication\.com|doubleclick\.net|googleadservices\.com|googletagmanager\.com|google-analytics\.com|fonts\.googleapis\.com|fonts\.gstatic\.com/.test(u)) {
        return routeReq.abort();
      }
      return routeReq.continue();
    });
    await page.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    try {
      await page.waitForFunction(
        (loadingTexts) => {
          const root = document.getElementById('root');
          if (!root) return false;
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
      throw new Error(`readiness timeout on ${route} (${viewport.name})`);
    }
    await page.waitForTimeout(800);
    const classes = await page.evaluate(() => {
      const out = new Set();
      const add = (el) => {
        if (!el || el.className == null) return;
        const raw = typeof el.className === 'string' ? el.className : el.className.baseVal || '';
        raw.split(/\s+/).forEach((c) => {
          if (c) out.add(c);
        });
      };
      const vh = window.innerHeight;
      document.querySelectorAll('*').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        if (r.bottom <= 0 || r.top >= vh) return;
        let n = el;
        while (n && n !== document.documentElement) {
          add(n);
          n = n.parentElement;
        }
      });
      add(document.documentElement);
      add(document.body);
      return [...out];
    });
    console.log(`[critical-css] ${route} ${viewport.name}: ${classes.length} classes above the fold`);
    return classes;
  } finally {
    await page.close();
  }
}

// Extract the class names a selector refers to (unescaping CSS escapes so
// they compare equal to the DOM class attribute values).
function selectorClasses(selector) {
  const out = new Set();
  const re = /\.((?:\\.|[A-Za-z0-9_-])+)/g;
  let m;
  while ((m = re.exec(selector)) !== null) {
    out.add(m[1].replace(/\\(.)/g, '$1'));
  }
  return out;
}

function filterCss(css, keepClasses) {
  const postcss = require('postcss');
  const root = postcss.parse(css);
  let total = 0;
  let kept = 0;
  root.walkRules((rule) => {
    total++;
    // @keyframes steps are rules too — never drop them.
    let n = rule.parent;
    while (n) {
      if (n.type === 'atrule' && /^(-\w+-)?keyframes$/.test(n.name)) {
        kept++;
        return;
      }
      n = n.parent;
    }
    // Theme + base layers are small and global (variables, preflight).
    let layer = null;
    n = rule.parent;
    while (n) {
      if (n.type === 'atrule' && n.name === 'layer') {
        layer = n.params.trim();
        break;
      }
      n = n.parent;
    }
    if (layer === 'theme' || layer === 'base') {
      kept++;
      return;
    }
    if (rule.selector.includes(':root')) {
      kept++;
      return;
    }
    const classes = selectorClasses(rule.selector);
    if (classes.size === 0) {
      rule.remove();
      return;
    }
    for (const c of classes) {
      if (keepClasses.has(c)) {
        kept++;
        return;
      }
    }
    rule.remove();
  });
  // Drop empty container at-rules (repeat until stable — nested empties).
  // The layer-order declaration (`@layer theme, base, ...;`) has commas in
  // its params and is never removed.
  let removed;
  do {
    removed = false;
    root.walkAtRules((at) => {
      if (
        (at.name === 'media' || at.name === 'supports' || at.name === 'layer') &&
        !at.params.includes(',') &&
        (!at.nodes || at.nodes.length === 0)
      ) {
        at.remove();
        removed = true;
      }
    });
  } while (removed);
  return { css: root.toString(), total, kept };
}

async function main() {
  const opts = parseArgs(process.argv);
  const cssFiles = fs.readdirSync(path.join(DIST_DIR, 'assets')).filter((f) => f.endsWith('.css'));
  if (cssFiles.length !== 1) {
    throw new Error(`expected exactly 1 built CSS file in dist/assets, found ${cssFiles.length}: ${cssFiles.join(', ')}`);
  }
  const cssFile = cssFiles[0];
  const cssPath = path.join(DIST_DIR, 'assets', cssFile);
  const css = fs.readFileSync(cssPath, 'utf8');
  console.log(`[critical-css] built CSS: ${cssFile} (${css.length} bytes)`);

  const { chromium } = loadPlaywright();
  let previewChild = null;
  let baseUrl = opts.previewUrl;
  if (!baseUrl) {
    baseUrl = `http://127.0.0.1:${opts.port}`;
    previewChild = startPreview(opts.port);
    await waitForPreview(baseUrl);
  }
  const browser = await chromium.launch({ args: PROXY_ARGS });
  const allClasses = new Set();
  try {
    for (const route of ROUTES) {
      for (const viewport of VIEWPORTS) {
        const classes = await collectClasses(browser, baseUrl, route, viewport);
        classes.forEach((c) => allClasses.add(c));
      }
    }
  } finally {
    await browser.close();
    if (previewChild && !opts.keepPreview) previewChild.kill();
  }
  console.log(`[critical-css] ${allClasses.size} unique classes above the fold (all routes/viewports)`);

  // Phase 2 (master audit 2026-11-26, CLS 0.587): always keep the
  // skip-link utilities. The 1x1 sr-only link is easy for the
  // above-fold collector to miss (and the base-layer copy in
  // src/index.css is the primary guard), but a future re-extraction must
  // never drop these again — an unstyled skip link renders as a 24px
  // in-flow link and shifts the whole page.
  for (const c of ['sr-only', 'not-sr-only']) allClasses.add(c);

  const { css: critical, total, kept } = filterCss(css, allClasses);
  const bytes = Buffer.byteLength(critical, 'utf8');
  console.log(`[critical-css] kept ${kept}/${total} rules, ${bytes} bytes`);
  if (bytes > 34 * 1024) {
    console.error(
      `[critical-css] WARNING: critical CSS is ${bytes} bytes (>34 KiB) — the extractor kept too much. ` +
        'Do NOT ship this; fall back to the preload-only approach (see the script header).',
    );
    process.exit(3);
  }

  const styleTag = `<style data-critical-css>\n${critical}\n</style>`;
  const html = fs.readFileSync(INDEX_HTML, 'utf8');
  let next;
  if (html.includes('<!-- CRITICAL-CSS -->')) {
    next = html.replace('<!-- CRITICAL-CSS -->', styleTag);
  } else if (/<style data-critical-css>[\s\S]*?<\/style>/.test(html)) {
    next = html.replace(/<style data-critical-css>[\s\S]*?<\/style>/, styleTag);
  } else {
    throw new Error('index.html has neither the <!-- CRITICAL-CSS --> placeholder nor a previous <style data-critical-css> — refusing to guess where the style goes');
  }
  fs.writeFileSync(INDEX_HTML, next);
  console.log(`[critical-css] wrote ${bytes} bytes of critical CSS into index.html (bundle ${cssFile} — verify the hash is unchanged after the rebuild)`);
}

main().catch((e) => {
  console.error(`[critical-css] FAILED: ${e.message}`);
  process.exit(1);
});
