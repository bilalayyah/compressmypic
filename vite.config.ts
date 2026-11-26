import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// Phase 2 (master audit 2026-11-26, CLS 0.587): the app stylesheet is
// deliberately RENDER-BLOCKING again. The Tier D async-CSS trick
// (media="print" onload) let the browser paint before the CSS applied, so
// the unstyled skip link rendered as a 24px in-flow link and the whole
// page jumped up 24px when the CSS landed — desktop CLS 0.587 on
// /compress-image-to-100kb/. The inlined critical CSS in index.html still
// paints the above-fold content fast; the full stylesheet now applies
// before first paint, so nothing renders unstyled. Do NOT re-introduce
// the async pattern without re-measuring desktop CLS on that page.
export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
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
