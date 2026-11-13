// Italian (Standard Italian) URL map for CompressMyPic — English path -> Italian path (and reverse).
// Italian slugs are SEO-friendly, accent-free, and use natural vocabulary.
// Home: '/' -> '/it/'. Alias '/it/comprimere-immagini' redirects to '/it/' (no duplicate content).
// Generated for the German+Italian translation project (Phase 3, 2026-11-13). Keep in sync with
// src/data/tools.ts (same 48 tools) and public/sitemap.xml.

export const IT_PATH_BY_EN: Record<string, string> = {
  '/': '/it/',
  // --- Tools (48) ---
  '/image-resizer': '/it/ridimensionare-immagini',
  '/image-converter': '/it/convertire-immagini',
  '/rotate-flip-image': '/it/ruotare-e-specchiare-immagine',
  '/image-to-pdf': '/it/convertire-immagini-in-pdf',
  '/image-metadata-viewer': '/it/visualizzare-metadati-immagine',
  '/remove-image-metadata': '/it/rimuovere-metadati-immagine',
  '/favicon-generator': '/it/generatore-di-favicon',
  '/image-color-picker': '/it/selettore-colori-immagine',
  '/image-dimensions-checker': '/it/verifica-dimensioni-immagine',
  '/image-cropper': '/it/ritaglia-immagini',
  '/image-watermark': '/it/aggiungi-filigrana-immagine',
  '/blur-pixelate-image': '/it/sfoca-e-pixelizza-immagine',
  '/add-text-to-image': '/it/aggiungi-testo-immagine',
  '/image-border-generator': '/it/aggiungi-bordo-immagine',
  '/round-image-corners': '/it/arrotonda-angoli-immagine',
  '/image-brightness-editor': '/it/regola-luminosita-immagine',
  '/image-contrast-editor': '/it/regola-contrasto-immagine',
  '/image-saturation-editor': '/it/regola-saturazione-immagine',
  '/image-filters': '/it/filtri-immagine',
  '/add-background-to-image': '/it/aggiungi-sfondo-immagine',
  '/image-splitter': '/it/dividi-immagine',
  '/image-dpi-changer': '/it/cambia-dpi-immagine',
  '/image-to-base64': '/it/converti-immagine-base64',
  '/base64-to-image': '/it/converti-base64-immagine',
  '/image-color-palette-extractor': '/it/estrai-palette-colori',
  '/gif-maker': '/it/crea-gif',
  '/image-collage-maker': '/it/crea-collage-di-immagini',
  '/compress-image-to-50kb': '/it/comprimi-immagine-a-50kb',
  '/compress-image-to-100kb': '/it/comprimi-immagine-a-100kb',
  '/compress-image-to-200kb': '/it/comprimi-immagine-a-200kb',
  '/compress-image-to-500kb': '/it/comprimi-immagine-a-500kb',
  '/bulk-image-compressor': '/it/comprimi-immagini-in-lote',
  '/target-file-size-compressor': '/it/comprimi-immagine-a-dimensione-desiderata',
  '/bulk-image-resizer': '/it/ridimensiona-immagini-in-lotto',
  '/bulk-image-converter': '/it/converti-immagini-in-lotto',
  '/web-image-optimizer': '/it/ottimizza-immagini-per-il-web',
  '/gif-compressor': '/it/comprimi-gif',
  '/heic-to-jpg': '/it/converti-heic-in-jpg',
  '/jpg-to-png': '/it/converti-jpg-in-png',
  '/png-to-jpg': '/it/converti-png-in-jpg',
  '/jpg-to-webp': '/it/convertire-jpg-in-webp',
  '/webp-to-jpg': '/it/convertire-webp-in-jpg',
  '/png-to-webp': '/it/convertire-png-in-webp',
  '/webp-to-png': '/it/convertire-webp-in-png',
  '/svg-to-png': '/it/convertire-svg-in-png',
  '/avif-to-jpg': '/it/convertire-avif-in-jpg',
  '/bmp-to-jpg': '/it/convertire-bmp-in-jpg',
  '/remove-background': '/it/rimuovere-sfondo-immagine',
  // --- Legal ---
  '/about': '/it/chi-siamo',
  '/contact': '/it/contatti',
  '/privacy': '/it/privacy',
  '/terms': '/it/termini-di-servizio',
  // --- Guides ---
  '/guides/compress-images-for-whatsapp': '/it/guide/comprimere-immagini-per-whatsapp',
  '/guides/jpg-vs-png-vs-webp': '/it/guide/jpg-vs-png-vs-webp',
  '/guides/reduce-image-size-to-100kb': '/it/guide/ridurre-immagine-a-100-kb',
};

export const EN_PATH_BY_IT: Record<string, string> = Object.fromEntries(
  Object.entries(IT_PATH_BY_EN).map(([en, it]) => [it, en])
);

// Italian home alias: /it/comprimere-immagini renders the Italian home with canonical '/it/'.
export const IT_HOME_ALIAS = '/it/comprimere-immagini';

// Italian directory page (all tools, with search).
export const IT_ALL_TOOLS_PATH = '/it/tutti-gli-strumenti';

export function toItalianPath(enPath: string): string {
  return IT_PATH_BY_EN[enPath] ?? enPath;
}

export function toEnglishPath(itPath: string): string {
  if (itPath === IT_HOME_ALIAS) return '/';
  return EN_PATH_BY_IT[itPath] ?? (itPath.replace(/^\/it(?=\/|$)/, '') || '/');
}

export function getItAlternates(enPath: string): { lang: string; href: string }[] {
  const base = 'https://compressmypic.online';
  const itPath = toItalianPath(enPath);
  return [
    { lang: 'en', href: base + enPath },
    { lang: 'it', href: base + itPath },
    { lang: 'x-default', href: base + enPath },
  ];
}
