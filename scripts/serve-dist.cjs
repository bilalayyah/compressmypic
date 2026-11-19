// Rewrite-aware static server for local verification — mimics the
// Cloudflare Pages _redirects rules that vite preview does NOT apply.
// Serves dist/ so the CLS probe (and diag scripts) test pages the way a
// real user loads them:
//
//   /            -> dist/home/index.html (200 rewrite, URL stays "/")
//   /home/ /home -> 301 to /
//   /<route>     -> 308 to /<route>/ (directory index, like Pages)
//   /<route>/    -> dist/<route>/index.html
//   /assets/*, /blog-images/*, /og-*.png, /favicon.svg, ... -> served directly
//   unknown      -> dist/404.html with HTTP 404
//
// Why this exists (2026-11-19): vite preview serves the SPA shell for
// slash-less routes and for "/", so the CLS probe's /home/ pages hydrated
// against the WRONG content — the client router parses /home/ as not-found
// (404 page) while the file holds the home page, a guaranteed React #418
// that has nothing to do with SSR quality. With this server, /home/
// 301-redirects to / (as live) and the browser hydrates the home page at
// the URL users actually load.
//
// Usage: node scripts/serve-dist.cjs [--port 4180] [--root dist]
// Then: node scripts/cls-probe.cjs --preview-url http://127.0.0.1:4180
'use strict';
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const REPO_ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
let port = 4180;
let root = path.join(REPO_ROOT, 'dist');
for (let i = 0; i < args.length; i += 1) {
  if (args[i] === '--port' && args[i + 1]) port = Number(args[i + 1]);
  if (args[i] === '--root' && args[i + 1]) root = path.resolve(args[i + 1]);
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.map': 'application/json; charset=utf-8',
};

function sendFile(res, filePath, status = 200) {
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(status, { 'content-type': MIME[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url, 'http://127.0.0.1');
    const p = url.pathname;
    // /home/ and /home 301 to / (Cloudflare _redirects rule 1a).
    if (p === '/home' || p === '/home/') {
      res.writeHead(301, { location: '/' });
      res.end();
      return;
    }
    // / serves the prerendered home (rule 1b: 200 rewrite, URL stays "/").
    if (p === '/') {
      const home = path.join(root, 'home', 'index.html');
      if (fs.existsSync(home)) return sendFile(res, home, 200);
      return sendFile(res, path.join(root, 'index.html'), 200);
    }
    // Exact file (assets, images, favicon, sitemap, ...).
    const direct = path.join(root, decodeURIComponent(p));
    if (fs.existsSync(direct) && fs.statSync(direct).isFile()) {
      return sendFile(res, direct, 200);
    }
    // Directory route: /<route>/ -> <route>/index.html; slash-less -> 308.
    const clean = p.replace(/\/+$/, '');
    if (clean && clean !== p) {
      // Had a trailing slash: serve the directory index.
      const idx = path.join(root, ...clean.split('/').filter(Boolean), 'index.html');
      if (fs.existsSync(idx)) return sendFile(res, idx, 200);
    } else if (clean) {
      // No trailing slash: redirect to the slash form (like Pages).
      const idx = path.join(root, ...clean.split('/').filter(Boolean), 'index.html');
      if (fs.existsSync(idx)) {
        res.writeHead(308, { location: `${clean}/` });
        res.end();
        return;
      }
    }
    // Unknown: real 404 from public/404.html.
    const notFound = path.join(root, '404.html');
    if (fs.existsSync(notFound)) return sendFile(res, notFound, 404);
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('Not found');
  } catch (e) {
    res.writeHead(500, { 'content-type': 'text/plain' });
    res.end(`server error: ${String((e && e.message) || e)}`);
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`[serve-dist] serving ${root} at http://127.0.0.1:${port} (Cloudflare _redirects applied)`);
});
