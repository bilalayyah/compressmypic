// Indonesian (Standard Bahasa Indonesia) URL map for CompressMyPic — English path -> Indonesian path (and reverse).
// Indonesian slugs are SEO-friendly, accent-free, and use natural vocabulary.
// Home: '/' -> '/id/'. Alias '/id/kompres-gambar' redirects to '/id/' (no duplicate content).
// Generated for the Indonesian+Russian translation project (Phase 4, 2026-11-14). Keep in sync with
// src/data/tools.ts (same 48 tools) and public/sitemap.xml.

export const ID_PATH_BY_EN: Record<string, string> = {
  '/': '/id/',
  // --- Tools (48) ---
  '/image-resizer': '/id/ubah-ukuran-gambar',
  '/image-converter': '/id/konversi-gambar',
  '/rotate-flip-image': '/id/putar-balik-gambar',
  '/image-to-pdf': '/id/gambar-ke-pdf',
  '/image-metadata-viewer': '/id/lihat-metadata-gambar',
  '/remove-image-metadata': '/id/hapus-metadata-gambar',
  '/favicon-generator': '/id/buat-favicon',
  '/image-color-picker': '/id/pemilih-warna-gambar',
  '/image-dimensions-checker': '/id/periksa-dimensi-gambar',
  '/image-cropper': '/id/potong-gambar',
  '/image-watermark': '/id/tambah-watermark-gambar',
  '/blur-pixelate-image': '/id/buram-dan-pixelasi-gambar',
  '/add-text-to-image': '/id/tambah-teks-ke-gambar',
  '/image-border-generator': '/id/generator-bingkai-gambar',
  '/round-image-corners': '/id/bulatkan-sudut-gambar',
  '/image-brightness-editor': '/id/editor-kecerahan-gambar',
  '/image-contrast-editor': '/id/sesuaikan-kontras-gambar',
  '/image-saturation-editor': '/id/sesuaikan-saturasi-gambar',
  '/image-filters': '/id/filter-gambar',
  '/add-background-to-image': '/id/tambah-latar-gambar',
  '/image-splitter': '/id/bagi-gambar',
  '/image-dpi-changer': '/id/ubah-dpi-gambar',
  '/image-to-base64': '/id/gambar-ke-base64',
  '/base64-to-image': '/id/base64-ke-gambar',
  '/image-color-palette-extractor': '/id/ekstrak-paleta-warna-gambar',
  '/gif-maker': '/id/buat-gif',
  '/image-collage-maker': '/id/buat-kolase-gambar',
  '/compress-image-to-50kb': '/id/kompres-gambar-menjadi-50-kb',
  '/compress-image-to-100kb': '/id/kompres-gambar-menjadi-100-kb',
  '/compress-image-to-200kb': '/id/kompres-gambar-menjadi-200-kb',
  '/compress-image-to-500kb': '/id/kompres-gambar-menjadi-500-kb',
  '/bulk-image-compressor': '/id/kompres-gambar-secara-massal',
  '/target-file-size-compressor': '/id/kompres-gambar-ke-ukuran-target',
  '/bulk-image-resizer': '/id/ubah-ukuran-gambar-massal',
  '/bulk-image-converter': '/id/konversi-gambar-massal',
  '/web-image-optimizer': '/id/optimalkan-gambar-untuk-web',
  '/gif-compressor': '/id/kompres-gif',
  '/heic-to-jpg': '/id/konversi-heic-ke-jpg',
  '/jpg-to-png': '/id/konversi-jpg-ke-png',
  '/png-to-jpg': '/id/konversi-png-ke-jpg',
  '/jpg-to-webp': '/id/jpg-ke-webp',
  '/webp-to-jpg': '/id/webp-ke-jpg',
  '/png-to-webp': '/id/png-ke-webp',
  '/webp-to-png': '/id/webp-ke-png',
  '/svg-to-png': '/id/svg-ke-png',
  '/avif-to-jpg': '/id/avif-ke-jpg',
  '/bmp-to-jpg': '/id/bmp-ke-jpg',
  '/remove-background': '/id/hapus-latar-belakang',
  // --- Legal ---
  '/about': '/id/tentang-kami',
  '/contact': '/id/kontak',
  '/privacy': '/id/privasi',
  '/terms': '/id/syarat-dan-ketentuan',
  // --- Guides ---
  '/guides/compress-images-for-whatsapp': '/id/panduan/mengompres-gambar-untuk-whatsapp',
  '/guides/jpg-vs-png-vs-webp': '/id/panduan/jpg-vs-png-vs-webp',
  '/guides/reduce-image-size-to-100kb': '/id/panduan/mengurangi-ukuran-gambar-menjadi-100-kb',
};

export const EN_PATH_BY_ID: Record<string, string> = Object.fromEntries(
  Object.entries(ID_PATH_BY_EN).map(([en, id]) => [id, en])
);

// Indonesian home alias: /id/kompres-gambar renders the Indonesian home with canonical '/id/'.
export const ID_HOME_ALIAS = '/id/kompres-gambar';

// Indonesian directory page (all tools, with search).
export const ID_ALL_TOOLS_PATH = '/id/semua-alat';

export function toIndonesianPath(enPath: string): string {
  return ID_PATH_BY_EN[enPath] ?? enPath;
}

export function toEnglishPath(idPath: string): string {
  if (idPath === ID_HOME_ALIAS) return '/';
  return EN_PATH_BY_ID[idPath] ?? (idPath.replace(/^\/id(?=\/|$)/, '') || '/');
}

export function getIdAlternates(enPath: string): { lang: string; href: string }[] {
  const base = 'https://compressmypic.online';
  const idPath = toIndonesianPath(enPath);
  return [
    { lang: 'en', href: base + enPath },
    { lang: 'id', href: base + idPath },
    { lang: 'x-default', href: base + enPath },
  ];
}
