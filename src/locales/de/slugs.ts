// German (Standard German) URL map for CompressMyPic — English path -> German path (and reverse).
// German slugs are SEO-friendly, accent-free, and use natural vocabulary.
// Home: '/' -> '/de/'. Alias '/de/bilder-komprimieren' redirects to '/de/' (no duplicate content).
// Generated for the German+Italian translation project (Phase 3, 2026-11-13). Keep in sync with
// src/data/tools.ts (same 48 tools) and public/sitemap.xml.

export const DE_PATH_BY_EN: Record<string, string> = {
  '/': '/de/',
  // --- Tools (48) ---
  '/image-resizer': '/de/bildgroesse-aendern',
  '/image-converter': '/de/bilder-konvertieren',
  '/rotate-flip-image': '/de/bild-drehen-spiegeln',
  '/image-to-pdf': '/de/bild-zu-pdf',
  '/image-metadata-viewer': '/de/bild-metadaten-anzeigen',
  '/remove-image-metadata': '/de/bild-metadaten-entfernen',
  '/favicon-generator': '/de/favicon-erstellen',
  '/image-color-picker': '/de/bild-farbwaehler',
  '/image-dimensions-checker': '/de/bilddimensionen-pruefen',
  '/image-cropper': '/de/bild-zuschneiden',
  '/image-watermark': '/de/bild-wasserzeichen-hinzufuegen',
  '/blur-pixelate-image': '/de/bild-weichzeichnen-pixelieren',
  '/add-text-to-image': '/de/text-zu-bild-hinzufuegen',
  '/image-border-generator': '/de/bildrahmen-generator',
  '/round-image-corners': '/de/bildecken-abrunden',
  '/image-brightness-editor': '/de/bildhelligkeit-anpassen',
  '/image-contrast-editor': '/de/bildkontrast-anpassen',
  '/image-saturation-editor': '/de/bildsaettigung-anpassen',
  '/image-filters': '/de/bildfilter',
  '/add-background-to-image': '/de/hintergrund-zu-bild-hinzufuegen',
  '/image-splitter': '/de/bild-zerteilen',
  '/image-dpi-changer': '/de/bild-dpi-aendern',
  '/image-to-base64': '/de/bild-in-base64-umwandeln',
  '/base64-to-image': '/de/base64-in-bild-umwandeln',
  '/image-color-palette-extractor': '/de/farbpalette-aus-bild-extrahieren',
  '/gif-maker': '/de/gif-erstellen',
  '/image-collage-maker': '/de/bildcollage-erstellen',
  '/compress-image-to-50kb': '/de/bild-auf-50-kb-komprimieren',
  '/compress-image-to-100kb': '/de/bild-auf-100-kb-komprimieren',
  '/compress-image-to-200kb': '/de/bild-auf-200-kb-komprimieren',
  '/compress-image-to-500kb': '/de/bild-auf-500-kb-komprimieren',
  '/bulk-image-compressor': '/de/bilder-stapelweise-komprimieren',
  '/target-file-size-compressor': '/de/bild-auf-zieldateigroesse-komprimieren',
  '/bulk-image-resizer': '/de/bilder-stapelweise-verkleinern',
  '/bulk-image-converter': '/de/bilder-stapelweise-konvertieren',
  '/web-image-optimizer': '/de/bilder-fuer-web-optimieren',
  '/gif-compressor': '/de/gif-komprimieren',
  '/heic-to-jpg': '/de/heic-in-jpg-umwandeln',
  '/jpg-to-png': '/de/jpg-in-png-umwandeln',
  '/png-to-jpg': '/de/png-in-jpg-umwandeln',
  '/jpg-to-webp': '/de/jpg-in-webp-umwandeln',
  '/webp-to-jpg': '/de/webp-in-jpg-umwandeln',
  '/png-to-webp': '/de/png-in-webp-umwandeln',
  '/webp-to-png': '/de/webp-in-png-umwandeln',
  '/svg-to-png': '/de/svg-in-png-umwandeln',
  '/avif-to-jpg': '/de/avif-in-jpg-umwandeln',
  '/bmp-to-jpg': '/de/bmp-in-jpg-umwandeln',
  '/remove-background': '/de/hintergrund-entfernen',
  // --- Legal ---
  '/about': '/de/ueber-uns',
  '/contact': '/de/kontakt',
  '/privacy': '/de/datenschutz',
  '/terms': '/de/nutzungsbedingungen',
  // --- Guides ---
  '/guides/compress-images-for-whatsapp': '/de/anleitungen/bilder-fuer-whatsapp-komprimieren',
  '/guides/jpg-vs-png-vs-webp': '/de/anleitungen/jpg-vs-png-vs-webp',
  '/guides/reduce-image-size-to-100kb': '/de/anleitungen/bild-auf-100-kb-verkleinern',
};

export const EN_PATH_BY_DE: Record<string, string> = Object.fromEntries(
  Object.entries(DE_PATH_BY_EN).map(([en, de]) => [de, en])
);

// German home alias: /de/bilder-komprimieren renders the German home with canonical '/de/'.
export const DE_HOME_ALIAS = '/de/bilder-komprimieren';

// German directory page (all tools, with search).
export const DE_ALL_TOOLS_PATH = '/de/alle-tools';

export function toGermanPath(enPath: string): string {
  return DE_PATH_BY_EN[enPath] ?? enPath;
}

export function toEnglishPath(dePath: string): string {
  if (dePath === DE_HOME_ALIAS) return '/';
  return EN_PATH_BY_DE[dePath] ?? (dePath.replace(/^\/de(?=\/|$)/, '') || '/');
}

export function getDeAlternates(enPath: string): { lang: string; href: string }[] {
  const base = 'https://compressmypic.online';
  const dePath = toGermanPath(enPath);
  return [
    { lang: 'en', href: base + enPath },
    { lang: 'de', href: base + dePath },
    { lang: 'x-default', href: base + enPath },
  ];
}
