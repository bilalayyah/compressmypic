// Spanish URL map for CompressMyPic — English path -> Spanish path (and reverse).
// Spanish slugs are SEO-friendly, accent-free, and use neutral Latin American vocabulary.
// Home: '/' -> '/es/'. Alias '/es/comprimir-imagenes' redirects to '/es/' (no duplicate content).
// Generated for the Spanish translation project (Batch 1, 2026-11-13). Keep in sync with
// src/data/tools.es.ts (same 48 tools) and public/sitemap.xml.

export const ES_PATH_BY_EN: Record<string, string> = {
  '/': '/es/',
  // --- Tools (48) ---
  '/image-resizer': '/es/redimensionar-imagenes',
  '/image-converter': '/es/convertir-imagenes',
  '/rotate-flip-image': '/es/rotar-y-voltear-imagen',
  '/image-to-pdf': '/es/convertir-imagenes-a-pdf',
  '/image-metadata-viewer': '/es/ver-metadatos-imagen',
  '/remove-image-metadata': '/es/eliminar-metadatos-imagen',
  '/favicon-generator': '/es/generador-de-favicon',
  '/image-color-picker': '/es/selector-de-color',
  '/image-dimensions-checker': '/es/ver-dimensiones-de-imagen',
  '/image-cropper': '/es/recortar-imagenes',
  '/image-watermark': '/es/agregar-marca-de-agua',
  '/blur-pixelate-image': '/es/desenfocar-y-pixelar-imagen',
  '/add-text-to-image': '/es/agregar-texto-a-imagen',
  '/image-border-generator': '/es/agregar-borde-a-imagen',
  '/round-image-corners': '/es/redondear-esquinas-imagen',
  '/image-brightness-editor': '/es/ajustar-brillo-imagen',
  '/image-contrast-editor': '/es/ajustar-contraste-imagen',
  '/image-saturation-editor': '/es/ajustar-saturacion-imagen',
  '/image-filters': '/es/filtros-de-imagen',
  '/add-background-to-image': '/es/agregar-fondo-a-imagen',
  '/image-splitter': '/es/dividir-imagen',
  '/image-dpi-changer': '/es/cambiar-dpi-imagen',
  '/image-to-base64': '/es/convertir-imagen-a-base64',
  '/base64-to-image': '/es/convertir-base64-a-imagen',
  '/image-color-palette-extractor': '/es/extraer-paleta-de-colores',
  '/gif-maker': '/es/crear-gif',
  '/image-collage-maker': '/es/crear-collage-de-imagenes',
  '/compress-image-to-50kb': '/es/comprimir-imagen-a-50kb',
  '/compress-image-to-100kb': '/es/comprimir-imagen-a-100kb',
  '/compress-image-to-200kb': '/es/comprimir-imagen-a-200kb',
  '/compress-image-to-500kb': '/es/comprimir-imagen-a-500kb',
  '/bulk-image-compressor': '/es/comprimir-imagenes-en-lote',
  '/target-file-size-compressor': '/es/comprimir-imagen-a-tamano-deseado',
  '/bulk-image-resizer': '/es/redimensionar-imagenes-en-lote',
  '/bulk-image-converter': '/es/convertir-imagenes-en-lote',
  '/web-image-optimizer': '/es/optimizar-imagenes-para-web',
  '/gif-compressor': '/es/comprimir-gif',
  '/heic-to-jpg': '/es/convertir-heic-a-jpg',
  '/jpg-to-png': '/es/convertir-jpg-a-png',
  '/png-to-jpg': '/es/convertir-png-a-jpg',
  '/jpg-to-webp': '/es/convertir-jpg-a-webp',
  '/webp-to-jpg': '/es/convertir-webp-a-jpg',
  '/png-to-webp': '/es/convertir-png-a-webp',
  '/webp-to-png': '/es/convertir-webp-a-png',
  '/svg-to-png': '/es/convertir-svg-a-png',
  '/avif-to-jpg': '/es/convertir-avif-a-jpg',
  '/bmp-to-jpg': '/es/convertir-bmp-a-jpg',
  '/remove-background': '/es/eliminar-fondo-imagen',
  // --- Legal ---
  '/about': '/es/acerca-de',
  '/contact': '/es/contacto',
  '/privacy': '/es/privacidad',
  '/terms': '/es/terminos-de-servicio',
  // --- Guides (Batch 7) ---
  '/guides/compress-images-for-whatsapp': '/es/guias/comprimir-imagenes-para-whatsapp',
  '/guides/jpg-vs-png-vs-webp': '/es/guias/jpg-vs-png-vs-webp',
  '/guides/reduce-image-size-to-100kb': '/es/guias/reducir-imagen-a-100kb',
};

export const EN_PATH_BY_ES: Record<string, string> = Object.fromEntries(
  Object.entries(ES_PATH_BY_EN).map(([en, es]) => [es, en])
);

// Spanish home alias: /es/comprimir-imagenes renders the Spanish home with canonical /es/.
export const ES_HOME_ALIAS = '/es/comprimir-imagenes';

// Spanish directory page (all tools, with search).
export const ES_ALL_TOOLS_PATH = '/es/todas-las-herramientas';

export function toSpanishPath(enPath: string): string {
  return ES_PATH_BY_EN[enPath] ?? enPath;
}

export function toEnglishPath(esPath: string): string {
  if (esPath === ES_HOME_ALIAS) return '/';
  return EN_PATH_BY_ES[esPath] ?? (esPath.replace(/^\/es(?=\/|$)/, '') || '/');
}

/** hreflang alternates for a tool page: EN + ES + x-default (absolute URLs). */
export function getEsAlternates(enPath: string): Array<{ lang: string; href: string }> {
  const esPath = ES_PATH_BY_EN[enPath];
  if (!esPath) return [];
  const base = 'https://compressmypic.online';
  return [
    { lang: 'en', href: `${base}${enPath}` },
    { lang: 'es', href: `${base}${esPath}` },
    { lang: 'x-default', href: `${base}${enPath}` },
  ];
}
