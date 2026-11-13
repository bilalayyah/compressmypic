// Japanese (modern Japanese) URL map for CompressMyPic — English path -> Japanese path (and reverse).
// Japanese slugs are SEO-friendly, accent-free, and use natural vocabulary.
// Home: '/' -> '/ja/'. Alias '/ja/gazo-asshuku' redirects to '/ja/' (no duplicate content).
// Generated for the Japanese+Korean translation project (Phase 5, 2026-11-14). Keep in sync with
// src/data/tools.ts (same 48 tools) and public/sitemap.xml.

export const JA_PATH_BY_EN: Record<string, string> = {
  '/': '/ja/',
  // --- Tools (48) ---
  '/image-resizer': '/ja/gazou-saizu-henkou',
  '/image-converter': '/ja/gazou-henkan',
  '/rotate-flip-image': '/ja/gazou-kaiten-hanten',
  '/image-to-pdf': '/ja/gazou-pdf-henkan',
  '/image-metadata-viewer': '/ja/gazou-metadeta-kakunin',
  '/remove-image-metadata': '/ja/gazou-metadeta-sakujo',
  '/favicon-generator': '/ja/favicon-seisei',
  '/image-color-picker': '/ja/gazou-iro-picker',
  '/image-dimensions-checker': '/ja/gazou-sunpo-checker',
  '/image-cropper': '/ja/gazou-torimingu',
  '/image-watermark': '/ja/gazou-suimaku',
  '/blur-pixelate-image': '/ja/gazou-bokashi-mozaiku',
  '/add-text-to-image': '/ja/gazou-ni-tekisuto-tsuika',
  '/image-border-generator': '/ja/gazou-furemu-seisei',
  '/round-image-corners': '/ja/gazou-kado-maru',
  '/image-brightness-editor': '/ja/gazou-akari-chosei',
  '/image-contrast-editor': '/ja/kontrasuto-chosei',
  '/image-saturation-editor': '/ja/saido-chosei',
  '/image-filters': '/ja/gazo-firuta',
  '/add-background-to-image': '/ja/gazo-haikei-tsuika',
  '/image-splitter': '/ja/gazo-bunkatsu',
  '/image-dpi-changer': '/ja/gazo-dpi-henko',
  '/image-to-base64': '/ja/gazo-base64-henkan',
  '/base64-to-image': '/ja/base64-gazo-henkan',
  '/image-color-palette-extractor': '/ja/iro-paretto-chushutsu',
  '/gif-maker': '/ja/gif-sakusei',
  '/image-collage-maker': '/ja/foto-koraju-sakusei',
  '/compress-image-to-50kb': '/ja/gazou-wo-50kb-ni-asshuku',
  '/compress-image-to-100kb': '/ja/gazou-wo-100kb-ni-asshuku',
  '/compress-image-to-200kb': '/ja/gazou-wo-200kb-ni-asshuku',
  '/compress-image-to-500kb': '/ja/gazou-wo-500kb-ni-asshuku',
  '/bulk-image-compressor': '/ja/matome-gazou-asshuku',
  '/target-file-size-compressor': '/ja/target-file-size-asshuku',
  '/bulk-image-resizer': '/ja/ikkatsu-gazo-risaizu',
  '/bulk-image-converter': '/ja/ikkatsu-gazo-henkan',
  '/web-image-optimizer': '/ja/web-gazo-saitekika',
  '/gif-compressor': '/ja/gif-asshuku',
  '/heic-to-jpg': '/ja/heic-jpg-henkan',
  '/jpg-to-png': '/ja/jpg-png-henkan',
  '/png-to-jpg': '/ja/png-jpg-henkan',
  '/jpg-to-webp': '/ja/jpg-to-webp',
  '/webp-to-jpg': '/ja/webp-to-jpg',
  '/png-to-webp': '/ja/png-to-webp',
  '/webp-to-png': '/ja/webp-to-png',
  '/svg-to-png': '/ja/svg-to-png',
  '/avif-to-jpg': '/ja/avif-to-jpg',
  '/bmp-to-jpg': '/ja/bmp-to-jpg',
  '/remove-background': '/ja/haikei-jokyo',
  // --- Legal ---
  '/about': '/ja/nitsuite',
  '/contact': '/ja/otoiawase',
  '/privacy': '/ja/puraibashi',
  '/terms': '/ja/riyo-kiyaku',
  // --- Guides ---
  '/guides/compress-images-for-whatsapp': '/ja/gaido/whatsapp-yo-gazo-asshuku',
  '/guides/jpg-vs-png-vs-webp': '/ja/gaido/jpg-vs-png-vs-webp',
  '/guides/reduce-image-size-to-100kb': '/ja/gaido/gazo-saizu-o-100kb-ni-hedasu',
};

export const EN_PATH_BY_JA: Record<string, string> = Object.fromEntries(
  Object.entries(JA_PATH_BY_EN).map(([en, ja]) => [ja, en])
);

// Japanese home alias: /ja/gazo-asshuku renders the Japanese home with canonical '/ja/'.
export const JA_HOME_ALIAS = '/ja/gazo-asshuku';

// Japanese directory page (all tools, with search).
export const JA_ALL_TOOLS_PATH = '/ja/tools';

export function toJapanesePath(enPath: string): string {
  return JA_PATH_BY_EN[enPath] ?? enPath;
}

export function toEnglishPath(jaPath: string): string {
  if (jaPath === JA_HOME_ALIAS) return '/';
  return EN_PATH_BY_JA[jaPath] ?? (jaPath.replace(/^\/ja(?=\/|$)/, '') || '/');
}

export function getJaAlternates(enPath: string): { lang: string; href: string }[] {
  const base = 'https://compressmypic.online';
  const jaPath = toJapanesePath(enPath);
  return [
    { lang: 'en', href: base + enPath },
    { lang: 'ja', href: base + jaPath },
    { lang: 'x-default', href: base + enPath },
  ];
}
