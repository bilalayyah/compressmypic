// Smoke-test the SSR renderer: render a few routes in Node and check the
// output has content + <!-- --> separators and no Suspense fallback text.
// Usage: SSR_SMOKE_OUT=/tmp/ssr-smoke node scripts/render-ssr-smoke.cjs [/ /image-resizer ...]
// The SSR bundle must already exist (vite build --ssr src/entry-server.tsx --outDir dist-server).
'use strict';
const path = require('node:path');
const fs = require('node:fs');

(async () => {
  const bundle = path.resolve(__dirname, '..', 'dist-server', 'entry-server.js');
  if (!fs.existsSync(bundle)) {
    console.error(`SSR bundle missing: ${bundle} — run the SSR build first.`);
    process.exit(1);
  }
  const { renderRoute } = await import(bundle);
  const routes = process.argv.slice(2);
  const list = routes.length ? routes : ['/', '/image-resizer', '/blog/jpg-to-png-guide/'];
  let failed = false;
  for (const route of list) {
    const t0 = Date.now();
    try {
      const html = await renderRoute(route);
      const ms = Date.now() - t0;
      const seps = (html.match(/<!-- -->/g) || []).length;
      const hasLoading = html.includes('Loading…');
      const hasH1 = /<h1[\s>]/.test(html);
      const rcScripts = (html.match(/\$RC/g) || []).length;
      const dollarMarkers = (html.match(/<!--\$/g) || []).length;
      console.log(
        `${route}: ${html.length} bytes in ${ms}ms, separators=${seps}, h1=${hasH1}, loadingFallback=${hasLoading}, $RC=${rcScripts}, <!--$=${dollarMarkers}`,
      );
      if (process.env.SSR_SMOKE_OUT) {
        fs.mkdirSync(process.env.SSR_SMOKE_OUT, { recursive: true });
        fs.writeFileSync(
          path.join(process.env.SSR_SMOKE_OUT, `${route.replace(/[^a-z0-9]+/gi, '_')}.html`),
          html,
        );
      }
      if (!hasH1 || hasLoading || seps === 0) {
        console.error(`SMOKE FAIL ${route}: h1=${hasH1} loading=${hasLoading} seps=${seps}`);
        failed = true;
      }
    } catch (e) {
      console.error(`SMOKE FAIL ${route}:`, String((e && e.message) || e).slice(0, 500));
      failed = true;
    }
  }
  if (failed) process.exitCode = 1;
})().catch((e) => {
  console.error('SMOKE FATAL', e);
  process.exit(1);
});
