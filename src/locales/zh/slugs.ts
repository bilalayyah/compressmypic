// Chinese (Simplified Mandarin) URL map for CompressMyPic — English path -> Chinese path (and reverse).
// Chinese slugs are SEO-friendly, accent-free, and use natural vocabulary.
// Home: '/' -> '/zh/'. Alias '/zh/yasuo-tupian' redirects to '/zh/' (no duplicate content).
// Generated for the Simplified Chinese translation project (Phase 6, 2026-11-14). Keep in sync with
// src/data/tools.ts (same 48 tools) and public/sitemap.xml.

export const ZH_PATH_BY_EN: Record<string, string> = {
  '/': '/zh/',
  // --- Tools (48) ---
  '/image-resizer': '/zh/tiaozheng-tupian-chicun',
  '/image-converter': '/zh/zhuanhuan-tupian',
  '/rotate-flip-image': '/zh/xuanzhuan-fanzhuan-tupian',
  '/image-to-pdf': '/zh/tupian-zhuan-pdf',
  '/image-metadata-viewer': '/zh/chakan-tupian-yuanshuju',
  '/remove-image-metadata': '/zh/shanchu-tupian-yuanshuju',
  '/favicon-generator': '/zh/shengcheng-favicon',
  '/image-color-picker': '/zh/tupian-qu-se-qi',
  '/image-dimensions-checker': '/zh/jiancha-tupian-chicun',
  '/image-cropper': '/zh/caijian-tupian',
  '/image-watermark': '/zh/tianjia-shuiyin',
  '/blur-pixelate-image': '/zh/mohu-masaike',
  '/add-text-to-image': '/zh/tupian-tianjia-wenzi',
  '/image-border-generator': '/zh/tupian-biankuang-shengcheng',
  '/round-image-corners': '/zh/yuanjiao-tupian',
  '/image-brightness-editor': '/zh/tiaozheng-tupian-liangdu',
  '/image-contrast-editor': '/zh/tiaozheng-tupian-duibidu',
  '/image-saturation-editor': '/zh/tiaozheng-tupian-baohedu',
  '/image-filters': '/zh/tupian-lvjing',
  '/add-background-to-image': '/zh/tupian-tianjia-beijing',
  '/image-splitter': '/zh/fenge-tupian',
  '/image-dpi-changer': '/zh/xiugai-tupian-dpi',
  '/image-to-base64': '/zh/tupian-zhuan-base64',
  '/base64-to-image': '/zh/base64-zhuan-tupian',
  '/image-color-palette-extractor': '/zh/tiqu-tupian-seban',
  '/gif-maker': '/zh/zhizuo-gif',
  '/image-collage-maker': '/zh/tupian-pintu',
  '/compress-image-to-50kb': '/zh/tupian-yasuo-dao-50kb',
  '/compress-image-to-100kb': '/zh/tupian-yasuo-dao-100kb',
  '/compress-image-to-200kb': '/zh/tupian-yasuo-dao-200kb',
  '/compress-image-to-500kb': '/zh/tupian-yasuo-dao-500kb',
  '/bulk-image-compressor': '/zh/piliang-yasuo-tupian',
  '/target-file-size-compressor': '/zh/mubiao-wenjian-daxiao-yasuo',
  '/bulk-image-resizer': '/zh/piliang-tiaozheng-tupian-chicun',
  '/bulk-image-converter': '/zh/piliang-zhuanhuan-tupian',
  '/web-image-optimizer': '/zh/wangye-tupian-youhua',
  '/gif-compressor': '/zh/yasuo-gif',
  '/heic-to-jpg': '/zh/heic-zhuan-jpg',
  '/jpg-to-png': '/zh/jpg-zhuan-png',
  '/png-to-jpg': '/zh/png-zhuan-jpg',
  '/jpg-to-webp': '/zh/jpg-zhuan-webp',
  '/webp-to-jpg': '/zh/webp-zhuan-jpg',
  '/png-to-webp': '/zh/png-zhuan-webp',
  '/webp-to-png': '/zh/webp-zhuan-png',
  '/svg-to-png': '/zh/svg-zhuan-png',
  '/avif-to-jpg': '/zh/avif-zhuan-jpg',
  '/bmp-to-jpg': '/zh/bmp-zhuan-jpg',
  '/remove-background': '/zh/quchu-beijing',
  // --- Legal ---
  '/about': '/zh/guanyu-women',
  '/contact': '/zh/lianxi-women',
  '/privacy': '/zh/yinsi-zhengce',
  '/terms': '/zh/shiyong-tiaokuan',
  // --- Guides ---
  '/guides/compress-images-for-whatsapp': '/zh/zhinan/whatsapp-tupian-yasuo',
  '/guides/jpg-vs-png-vs-webp': '/zh/zhinan/jpg-vs-png-vs-webp',
  '/guides/reduce-image-size-to-100kb': '/zh/zhinan/jiang-tupian-yasuo-zhi-100kb',
};

export const EN_PATH_BY_ZH: Record<string, string> = Object.fromEntries(
  Object.entries(ZH_PATH_BY_EN).map(([en, zh]) => [zh, en])
);

// Chinese home alias: /zh/yasuo-tupian renders the Chinese home with canonical '/zh/'.
export const ZH_HOME_ALIAS = '/zh/yasuo-tupian';

// Chinese directory page (all tools, with search).
export const ZH_ALL_TOOLS_PATH = '/zh/all-tools';

export function toChinesePath(enPath: string): string {
  return ZH_PATH_BY_EN[enPath] ?? enPath;
}

export function toEnglishPath(zhPath: string): string {
  if (zhPath === ZH_HOME_ALIAS) return '/';
  return EN_PATH_BY_ZH[zhPath] ?? (zhPath.replace(/^\/zh(?=\/|$)/, '') || '/');
}

export function getZhAlternates(enPath: string): { lang: string; href: string }[] {
  const base = 'https://compressmypic.online';
  const zhPath = toChinesePath(enPath);
  return [
    { lang: 'en', href: base + enPath },
    { lang: 'zh', href: base + zhPath },
    { lang: 'x-default', href: base + enPath },
  ];
}
