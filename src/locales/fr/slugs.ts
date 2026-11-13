// French URL map for CompressMyPic — English path -> French path (and reverse).
// French slugs are SEO-friendly, accent-free, and use natural international French vocabulary.
// Home: '/' -> '/fr/'. Alias '/fr/compresser-images' redirects to '/fr/' (no duplicate content).
// Generated for the French translation project (Phase 2, 2026-11-13). Keep in sync with
// src/data/tools.fr.ts (same 48 tools) and public/sitemap.xml.

export const FR_PATH_BY_EN: Record<string, string> = {
  '/': '/fr/',
  // --- Tools (48) ---
  '/image-resizer': '/fr/redimensionner-image',
  '/image-converter': '/fr/convertir-images',
  '/rotate-flip-image': '/fr/pivoter-et-retourner-image',
  '/image-to-pdf': '/fr/convertir-images-en-pdf',
  '/image-metadata-viewer': '/fr/voir-metadonnees-image',
  '/remove-image-metadata': '/fr/supprimer-metadonnees-image',
  '/favicon-generator': '/fr/generateur-de-favicon',
  '/image-color-picker': '/fr/selecteur-de-couleurs',
  '/image-dimensions-checker': '/fr/voir-dimensions-image',
  '/image-cropper': '/fr/recadrer-images',
  '/image-watermark': '/fr/ajouter-filigrane',
  '/blur-pixelate-image': '/fr/flouter-et-pixeliser-image',
  '/add-text-to-image': '/fr/ajouter-texte-a-image',
  '/image-border-generator': '/fr/ajouter-bordure-a-image',
  '/round-image-corners': '/fr/arrondir-coins-image',
  '/image-brightness-editor': '/fr/ajuster-luminosite-image',
  '/image-contrast-editor': '/fr/ajuster-contraste-image',
  '/image-saturation-editor': '/fr/ajuster-saturation-image',
  '/image-filters': '/fr/filtres-image',
  '/add-background-to-image': '/fr/ajouter-arriere-plan-image',
  '/image-splitter': '/fr/diviser-image',
  '/image-dpi-changer': '/fr/changer-dpi-image',
  '/image-to-base64': '/fr/convertir-image-en-base64',
  '/base64-to-image': '/fr/convertir-base64-en-image',
  '/image-color-palette-extractor': '/fr/extraire-palette-de-couleurs',
  '/gif-maker': '/fr/creer-gif',
  '/image-collage-maker': '/fr/creer-collage-images',
  '/compress-image-to-50kb': '/fr/compresser-image-a-50-ko',
  '/compress-image-to-100kb': '/fr/compresser-image-a-100-ko',
  '/compress-image-to-200kb': '/fr/compresser-image-a-200-ko',
  '/compress-image-to-500kb': '/fr/compresser-image-a-500-ko',
  '/bulk-image-compressor': '/fr/compresser-images-en-lot',
  '/target-file-size-compressor': '/fr/compresser-image-a-taille-cible',
  '/bulk-image-resizer': '/fr/redimensionner-images-en-lot',
  '/bulk-image-converter': '/fr/convertir-images-en-lot',
  '/web-image-optimizer': '/fr/optimiser-images-pour-le-web',
  '/gif-compressor': '/fr/compresser-gif',
  '/heic-to-jpg': '/fr/convertir-heic-en-jpg',
  '/jpg-to-png': '/fr/convertir-jpg-en-png',
  '/png-to-jpg': '/fr/convertir-png-en-jpg',
  '/jpg-to-webp': '/fr/convertir-jpg-en-webp',
  '/webp-to-jpg': '/fr/convertir-webp-en-jpg',
  '/png-to-webp': '/fr/convertir-png-en-webp',
  '/webp-to-png': '/fr/convertir-webp-en-png',
  '/svg-to-png': '/fr/convertir-svg-en-png',
  '/avif-to-jpg': '/fr/convertir-avif-en-jpg',
  '/bmp-to-jpg': '/fr/convertir-bmp-en-jpg',
  '/remove-background': '/fr/supprimer-arriere-plan-image',
  // --- Legal ---
  '/about': '/fr/a-propos',
  '/contact': '/fr/contact',
  '/privacy': '/fr/confidentialite',
  '/terms': '/fr/conditions-dutilisation',
  // --- Guides (Phase 2) ---
  '/guides/compress-images-for-whatsapp': '/fr/guides/compresser-images-pour-whatsapp',
  '/guides/jpg-vs-png-vs-webp': '/fr/guides/jpg-vs-png-vs-webp',
  '/guides/reduce-image-size-to-100kb': '/fr/guides/reduire-image-a-100-ko',
};

export const EN_PATH_BY_FR: Record<string, string> = Object.fromEntries(
  Object.entries(FR_PATH_BY_EN).map(([en, fr]) => [fr, en])
);

// French home alias: /fr/compresser-images renders the French home with canonical /fr/.
export const FR_HOME_ALIAS = '/fr/compresser-images';

// French directory page (all tools, with search).
export const FR_ALL_TOOLS_PATH = '/fr/tous-les-outils';

export function toFrenchPath(enPath: string): string {
  return FR_PATH_BY_EN[enPath] ?? enPath;
}

export function toEnglishPath(frPath: string): string {
  if (frPath === FR_HOME_ALIAS) return '/';
  return EN_PATH_BY_FR[frPath] ?? (frPath.replace(/^\/fr(?=\/|$)/, '') || '/');
}

export function getFrAlternates(enPath: string): { lang: string; href: string }[] {
  const base = 'https://compressmypic.online';
  const frPath = toFrenchPath(enPath);
  return [
    { lang: 'en', href: base + enPath },
    { lang: 'fr', href: base + frPath },
    { lang: 'x-default', href: base + enPath },
  ];
}
