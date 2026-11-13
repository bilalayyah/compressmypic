// Russian (Standard Russian) URL map for CompressMyPic — English path -> Russian path (and reverse).
// Russian slugs are SEO-friendly, accent-free, and use natural vocabulary.
// Home: '/' -> '/ru/'. Alias '/ru/szhat-izobrazhenie' redirects to '/ru/' (no duplicate content).
// Generated for the Indonesian+Russian translation project (Phase 4, 2026-11-14). Keep in sync with
// src/data/tools.ts (same 48 tools) and public/sitemap.xml.

export const RU_PATH_BY_EN: Record<string, string> = {
  '/': '/ru/',
  // --- Tools (48) ---
  '/image-resizer': '/ru/izmenit-razmer-izobrazheniya',
  '/image-converter': '/ru/konvertirovat-izobrazhenie',
  '/rotate-flip-image': '/ru/povernut-otrazit-izobrazhenie',
  '/image-to-pdf': '/ru/izobrazhenie-v-pdf',
  '/image-metadata-viewer': '/ru/prosmotr-metadannykh-izobrazheniya',
  '/remove-image-metadata': '/ru/udalit-metadannye-izobrazheniya',
  '/favicon-generator': '/ru/generator-favicon',
  '/image-color-picker': '/ru/vybor-tsveta-izobrazheniya',
  '/image-dimensions-checker': '/ru/proverit-razmery-izobrazheniya',
  '/image-cropper': '/ru/obrezat-izobrazhenie',
  '/image-watermark': '/ru/dobavit-vodyanoy-znak',
  '/blur-pixelate-image': '/ru/razmyt-i-pikselizirovat-izobrazhenie',
  '/add-text-to-image': '/ru/dobavit-tekst-na-izobrazhenie',
  '/image-border-generator': '/ru/generator-ramki-dlya-izobrazheniya',
  '/round-image-corners': '/ru/skruglit-ugly-izobrazheniya',
  '/image-brightness-editor': '/ru/redaktor-yarkosti-izobrazheniya',
  '/image-contrast-editor': '/ru/izmenit-kontrast-izobrazheniya',
  '/image-saturation-editor': '/ru/izmenit-nasyshchennost-izobrazheniya',
  '/image-filters': '/ru/filtry-dlya-izobrazhenii',
  '/add-background-to-image': '/ru/dobavit-fon-k-izobrazheniyu',
  '/image-splitter': '/ru/razdelit-izobrazhenie',
  '/image-dpi-changer': '/ru/izmenit-dpi-izobrazheniya',
  '/image-to-base64': '/ru/izobrazhenie-v-base64',
  '/base64-to-image': '/ru/base64-v-izobrazhenie',
  '/image-color-palette-extractor': '/ru/ekstraktor-tsvetovoy-palitry',
  '/gif-maker': '/ru/sozdat-gif',
  '/image-collage-maker': '/ru/sozdat-fotokollazh',
  '/compress-image-to-50kb': '/ru/szhat-izobrazhenie-do-50-kb',
  '/compress-image-to-100kb': '/ru/szhat-izobrazhenie-do-100-kb',
  '/compress-image-to-200kb': '/ru/szhat-izobrazhenie-do-200-kb',
  '/compress-image-to-500kb': '/ru/szhat-izobrazhenie-do-500-kb',
  '/bulk-image-compressor': '/ru/paketnoe-szhatie-izobrazheniy',
  '/target-file-size-compressor': '/ru/szhat-izobrazhenie-do-tselego-razmera',
  '/bulk-image-resizer': '/ru/izmenit-razmer-izobrazhenij-paketno',
  '/bulk-image-converter': '/ru/konvertirovat-izobrazheniya-paketno',
  '/web-image-optimizer': '/ru/optimizirovat-izobrazheniya-dlya-sajta',
  '/gif-compressor': '/ru/szhat-gif',
  '/heic-to-jpg': '/ru/heic-v-jpg',
  '/jpg-to-png': '/ru/jpg-v-png',
  '/png-to-jpg': '/ru/png-v-jpg',
  '/jpg-to-webp': '/ru/jpg-v-webp',
  '/webp-to-jpg': '/ru/webp-v-jpg',
  '/png-to-webp': '/ru/png-v-webp',
  '/webp-to-png': '/ru/webp-v-png',
  '/svg-to-png': '/ru/svg-v-png',
  '/avif-to-jpg': '/ru/avif-v-jpg',
  '/bmp-to-jpg': '/ru/bmp-v-jpg',
  '/remove-background': '/ru/udalit-fon',
  // --- Legal ---
  '/about': '/ru/o-nas',
  '/contact': '/ru/kontakty',
  '/privacy': '/ru/konfidentsialnost',
  '/terms': '/ru/usloviya-ispolzovaniya',
  // --- Guides ---
  '/guides/compress-images-for-whatsapp': '/ru/rukovodstva/szhat-izobrazheniya-dlya-whatsapp',
  '/guides/jpg-vs-png-vs-webp': '/ru/rukovodstva/jpg-protiv-png-protiv-webp',
  '/guides/reduce-image-size-to-100kb': '/ru/rukovodstva/umenshit-razmer-izobrazheniya-do-100-kb',
};

export const EN_PATH_BY_RU: Record<string, string> = Object.fromEntries(
  Object.entries(RU_PATH_BY_EN).map(([en, ru]) => [ru, en])
);

// Russian home alias: /ru/szhat-izobrazhenie renders the Russian home with canonical '/ru/'.
export const RU_HOME_ALIAS = '/ru/szhat-izobrazhenie';

// Russian directory page (all tools, with search).
export const RU_ALL_TOOLS_PATH = '/ru/vse-instrumenty';

export function toRussianPath(enPath: string): string {
  return RU_PATH_BY_EN[enPath] ?? enPath;
}

export function toEnglishPath(ruPath: string): string {
  if (ruPath === RU_HOME_ALIAS) return '/';
  return EN_PATH_BY_RU[ruPath] ?? (ruPath.replace(/^\/ru(?=\/|$)/, '') || '/');
}

export function getRuAlternates(enPath: string): { lang: string; href: string }[] {
  const base = 'https://compressmypic.online';
  const ruPath = toRussianPath(enPath);
  return [
    { lang: 'en', href: base + enPath },
    { lang: 'ru', href: base + ruPath },
    { lang: 'x-default', href: base + enPath },
  ];
}
