// SSR-only Vite config — extends the main config but disables the public/
// copy. The SSR bundle (dist-server/) is pure JS run in Node; it never
// serves files, so copying public/ (2,333 HTML + 1,584 images, ~100 MB)
// into dist-server/ on every SSR build is pure waste — and the mass copy
// trips the host EPERM wave (copyfile fails, 2026-11-19). The client build
// keeps the normal public/ copy. Use: vite build --ssr src/entry-server.tsx
// --outDir dist-server --config vite.ssr.config.ts
import base from './vite.config';

const resolved = typeof base === 'function' ? (base as () => Record<string, unknown>)() : base;

export default {
  ...resolved,
  publicDir: false,
};
