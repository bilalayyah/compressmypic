// Korean (South Korean) URL map for CompressMyPic — English path -> Korean path (and reverse).
// Korean slugs are SEO-friendly, accent-free, and use natural vocabulary.
// Home: '/' -> '/ko/'. Alias '/ko/imiji-apchuk' redirects to '/ko/' (no duplicate content).
// Generated for the Japanese+Korean translation project (Phase 5, 2026-11-14). Keep in sync with
// src/data/tools.ts (same 48 tools) and public/sitemap.xml.

export const KO_PATH_BY_EN: Record<string, string> = {
  '/': '/ko/',
  // --- Tools (48) ---
  '/image-resizer': '/ko/imiji-keugi-jojeol',
  '/image-converter': '/ko/imiji-byeonhwan',
  '/rotate-flip-image': '/ko/imiji-hoejeon-dwijipgi',
  '/image-to-pdf': '/ko/imiji-pdf-byeonhwan',
  '/image-metadata-viewer': '/ko/imiji-metadeiteo-bogi',
  '/remove-image-metadata': '/ko/imiji-metadeiteo-jegeo',
  '/favicon-generator': '/ko/pabikon-saengseonggi',
  '/image-color-picker': '/ko/imiji-saeksang-chuchul',
  '/image-dimensions-checker': '/ko/imiji-chisu-hwagin',
  '/image-cropper': '/ko/imiji-jareugi',
  '/image-watermark': '/ko/imiji-woteomakeu-chuga',
  '/blur-pixelate-image': '/ko/imiji-beulleo-mich-pikselhwa',
  '/add-text-to-image': '/ko/imijie-tekseuteu-chuga',
  '/image-border-generator': '/ko/imiji-teduri-saengseonggi',
  '/round-image-corners': '/ko/imiji-moseori-dunggeulge',
  '/image-brightness-editor': '/ko/imiji-balggi-pyeonjipgi',
  '/image-contrast-editor': '/ko/imiji-daebi-eoditeo',
  '/image-saturation-editor': '/ko/imiji-chaedo-eoditeo',
  '/image-filters': '/ko/imiji-pilteo',
  '/add-background-to-image': '/ko/imiji-baegyeong-chuga',
  '/image-splitter': '/ko/imiji-bunhal',
  '/image-dpi-changer': '/ko/imiji-dpi-byeongyeong',
  '/image-to-base64': '/ko/imiji-base64-byeonhwan',
  '/base64-to-image': '/ko/base64-imiji-byeonhwan',
  '/image-color-palette-extractor': '/ko/imiji-saeksang-palleteu-chuchul',
  '/gif-maker': '/ko/gif-mandeulgi',
  '/image-collage-maker': '/ko/imiji-kollaju-mandeulgi',
  '/compress-image-to-50kb': '/ko/imiji-50kb-ro-apchuk',
  '/compress-image-to-100kb': '/ko/imiji-100kb-ro-apchuk',
  '/compress-image-to-200kb': '/ko/imiji-200kb-ro-apchuk',
  '/compress-image-to-500kb': '/ko/imiji-500kb-ro-apchuk',
  '/bulk-image-compressor': '/ko/daeryang-imiji-apchukgi',
  '/target-file-size-compressor': '/ko/mokpyo-pail-keugi-apchukgi',
  '/bulk-image-resizer': '/ko/daeryang-imiji-keugi-jojeong',
  '/bulk-image-converter': '/ko/daeryang-imiji-byeonhwan',
  '/web-image-optimizer': '/ko/web-imiji-choejeokhwa',
  '/gif-compressor': '/ko/gif-apchuk',
  '/heic-to-jpg': '/ko/heic-jpg-byeonhwan',
  '/jpg-to-png': '/ko/jpg-png-byeonhwan',
  '/png-to-jpg': '/ko/png-jpg-byeonhwan',
  '/jpg-to-webp': '/ko/jpg-webp-byeonhwan',
  '/webp-to-jpg': '/ko/webp-jpg-byeonhwan',
  '/png-to-webp': '/ko/png-webp-byeonhwan',
  '/webp-to-png': '/ko/webp-png-byeonhwan',
  '/svg-to-png': '/ko/svg-png-byeonhwan',
  '/avif-to-jpg': '/ko/avif-jpg-byeonhwan',
  '/bmp-to-jpg': '/ko/bmp-jpg-byeonhwan',
  '/remove-background': '/ko/baegyeong-jegeo',
  // --- Legal ---
  '/about': '/ko/hoesa-sogae',
  '/contact': '/ko/mun-ui',
  '/privacy': '/ko/gaein-jeongbo',
  '/terms': '/ko/iyong-yag-gwan',
  // --- Guides ---
  '/guides/compress-images-for-whatsapp': '/ko/gaideu/watsae-yong-imiji-apchuk',
  '/guides/jpg-vs-png-vs-webp': '/ko/gaideu/jpg-vs-png-vs-webp',
  '/guides/reduce-image-size-to-100kb': '/ko/gaideu/imiji-keugi-reul-100kb-ro-juligi',
};

export const EN_PATH_BY_KO: Record<string, string> = Object.fromEntries(
  Object.entries(KO_PATH_BY_EN).map(([en, ko]) => [ko, en])
);

// Korean home alias: /ko/imiji-apchuk renders the Korean home with canonical '/ko/'.
export const KO_HOME_ALIAS = '/ko/imiji-apchuk';

// Korean directory page (all tools, with search).
export const KO_ALL_TOOLS_PATH = '/ko/tools';

export function toKoreanPath(enPath: string): string {
  return KO_PATH_BY_EN[enPath] ?? enPath;
}

export function toEnglishPath(koPath: string): string {
  if (koPath === KO_HOME_ALIAS) return '/';
  return EN_PATH_BY_KO[koPath] ?? (koPath.replace(/^\/ko(?=\/|$)/, '') || '/');
}

export function getKoAlternates(enPath: string): { lang: string; href: string }[] {
  const base = 'https://compressmypic.online';
  const koPath = toKoreanPath(enPath);
  return [
    { lang: 'en', href: base + enPath },
    { lang: 'ko', href: base + koPath },
    { lang: 'x-default', href: base + enPath },
  ];
}
