// Portuguese (Brazilian pt-BR) URL map for CompressMyPic — English path -> Portuguese path (and reverse).
// Portuguese slugs are SEO-friendly, accent-free, and use Brazilian vocabulary.
// Home: '/' -> '/pt/'. Alias '/pt/comprimir-imagens' redirects to '/pt/' (no duplicate content).
// Generated for the Portuguese translation project (Phase 2, 2026-11-13). Keep in sync with
// src/data/tools.pt.ts (same 48 tools) and public/sitemap.xml.

export const PT_PATH_BY_EN: Record<string, string> = {
  '/': '/pt/',
  // --- Tools (48) ---
  '/image-resizer': '/pt/redimensionar-imagens',
  '/image-converter': '/pt/converter-imagens',
  '/rotate-flip-image': '/pt/girar-e-inverter-imagem',
  '/image-to-pdf': '/pt/converter-imagens-para-pdf',
  '/image-metadata-viewer': '/pt/ver-metadados-da-imagem',
  '/remove-image-metadata': '/pt/remover-metadados-da-imagem',
  '/favicon-generator': '/pt/gerador-de-favicon',
  '/image-color-picker': '/pt/seletor-de-cores',
  '/image-dimensions-checker': '/pt/ver-dimensoes-da-imagem',
  '/image-cropper': '/pt/cortar-imagens',
  '/image-watermark': '/pt/adicionar-marca-dagua',
  '/blur-pixelate-image': '/pt/desfocar-e-pixelar-imagem',
  '/add-text-to-image': '/pt/adicionar-texto-a-imagem',
  '/image-border-generator': '/pt/adicionar-borda-a-imagem',
  '/round-image-corners': '/pt/arredondar-cantos-da-imagem',
  '/image-brightness-editor': '/pt/ajustar-brilho-da-imagem',
  '/image-contrast-editor': '/pt/ajustar-contraste-da-imagem',
  '/image-saturation-editor': '/pt/ajustar-saturacao-da-imagem',
  '/image-filters': '/pt/filtros-de-imagem',
  '/add-background-to-image': '/pt/adicionar-fundo-a-imagem',
  '/image-splitter': '/pt/dividir-imagem',
  '/image-dpi-changer': '/pt/alterar-dpi-da-imagem',
  '/image-to-base64': '/pt/converter-imagem-para-base64',
  '/base64-to-image': '/pt/converter-base64-para-imagem',
  '/image-color-palette-extractor': '/pt/extrair-paleta-de-cores',
  '/gif-maker': '/pt/criar-gif',
  '/image-collage-maker': '/pt/criar-colagem-de-imagens',
  '/compress-image-to-50kb': '/pt/comprimir-imagem-para-50kb',
  '/compress-image-to-100kb': '/pt/comprimir-imagem-para-100kb',
  '/compress-image-to-200kb': '/pt/comprimir-imagem-para-200kb',
  '/compress-image-to-500kb': '/pt/comprimir-imagem-para-500kb',
  '/bulk-image-compressor': '/pt/comprimir-imagens-em-lote',
  '/target-file-size-compressor': '/pt/comprimir-imagem-para-tamanho-desejado',
  '/bulk-image-resizer': '/pt/redimensionar-imagens-em-lote',
  '/bulk-image-converter': '/pt/converter-imagens-em-lote',
  '/web-image-optimizer': '/pt/otimizar-imagens-para-web',
  '/gif-compressor': '/pt/comprimir-gif',
  '/heic-to-jpg': '/pt/converter-heic-para-jpg',
  '/jpg-to-png': '/pt/converter-jpg-para-png',
  '/png-to-jpg': '/pt/converter-png-para-jpg',
  '/jpg-to-webp': '/pt/converter-jpg-para-webp',
  '/webp-to-jpg': '/pt/converter-webp-para-jpg',
  '/png-to-webp': '/pt/converter-png-para-webp',
  '/webp-to-png': '/pt/converter-webp-para-png',
  '/svg-to-png': '/pt/converter-svg-para-png',
  '/avif-to-jpg': '/pt/converter-avif-para-jpg',
  '/bmp-to-jpg': '/pt/converter-bmp-para-jpg',
  '/remove-background': '/pt/remover-fundo-da-imagem',
  // --- Legal ---
  '/about': '/pt/sobre',
  '/contact': '/pt/contato',
  '/privacy': '/pt/privacidade',
  '/terms': '/pt/termos-de-servico',
  // --- Guides ---
  '/guides/compress-images-for-whatsapp': '/pt/guias/comprimir-imagens-para-whatsapp',
  '/guides/jpg-vs-png-vs-webp': '/pt/guias/jpg-vs-png-vs-webp',
  '/guides/reduce-image-size-to-100kb': '/pt/guias/reduzir-imagem-para-100kb',
};

export const EN_PATH_BY_PT: Record<string, string> = Object.fromEntries(
  Object.entries(PT_PATH_BY_EN).map(([en, pt]) => [pt, en])
);

// Portuguese home alias: /pt/comprimir-imagens renders the Portuguese home with canonical /pt/.
export const PT_HOME_ALIAS = '/pt/comprimir-imagens';

// Portuguese directory page (all tools, with search).
export const PT_ALL_TOOLS_PATH = '/pt/todas-as-ferramentas';

export function toPortuguesePath(enPath: string): string {
  return PT_PATH_BY_EN[enPath] ?? enPath;
}

export function toEnglishPath(ptPath: string): string {
  if (ptPath === PT_HOME_ALIAS) return '/';
  return EN_PATH_BY_PT[ptPath] ?? (ptPath.replace(/^\/pt(?=\/|$)/, '') || '/');
}

export function getPtAlternates(enPath: string): { lang: string; href: string }[] {
  const base = 'https://compressmypic.online';
  const ptPath = toPortuguesePath(enPath);
  return [
    { lang: 'en', href: base + enPath },
    { lang: 'pt', href: base + ptPath },
    { lang: 'x-default', href: base + enPath },
  ];
}
