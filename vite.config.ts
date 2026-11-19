import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// Tier D (speed fix, 2026-11-19): load the app stylesheet asynchronously.
// The critical above-fold CSS is inlined in index.html (see
// scripts/extract-critical-css.cjs), so the full stylesheet must not block
// first paint. Same media=print trick the Google Fonts links already use
// (CSP allows the inline onload handler — script-src has 'unsafe-inline').
// The <noscript> fallback keeps the page styled when JavaScript is off.
// The prerender sanitizer resets the link to media="print" in snapshots
// (the onload flips it to 'all' while the page renders).
function asyncAppCss() {
  return {
    name: 'async-app-css',
    transformIndexHtml(html: string) {
      return html.replace(
        /<link rel="stylesheet"([^>]*href="\/assets\/[^"]+\.css"[^>]*)>/,
        (_m, attrs) =>
          `<link rel="stylesheet"${attrs} media="print" onload="this.media='all'"><noscript><link rel="stylesheet"${attrs}></noscript>`,
      );
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), asyncAppCss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
