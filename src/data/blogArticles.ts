// Blog article registry for the CompressMyPic multilingual SEO blog.
// METADATA ONLY (Tier B speed fix, 2026-11-19): each article's EN body +
// FAQs live in src/data/blog-bodies/<id>.ts and load on demand through
// src/data/blogBody.ts — do NOT move bodies back here, or the entry bundle
// grows by ~640 KiB gzip (they were statically imported by App.tsx).
//
// Mirrors TOOLS_REGISTRY: Batch 3 adds articles here without touching
// routing or SEO — the pages, head effect and sitemap all read this module.
//
// SOURCES OF TRUTH (do not duplicate):
// - EN slug: article.en.slug (here).
// - Localized slug: that locale's slugs.ts ('/blog/<en-slug>' ->
//   '/<lang>/blog/<slug>'). Routing, hreflang, toLocalizedPath and the
//   language switcher all resolve through the slug maps, so an article is
//   "published in a language" exactly when its slugs.ts entry exists.
// - Localized content: src/locales/<lang>/blog.ts overrides (loaded lazily
//   with the locale; never statically imported here, or the bodies would
//   bloat the main bundle). Overrides carry NO slug — see types/blog.ts.
// - Category hub slugs: BLOG_CATEGORY_SLUGS below (the site has no
//   per-category localized slug system, so the blog defines its own).

import { TOOL_CATEGORIES, type ToolCategoryId } from './tools';
import type { SupportedLang } from '../locales/config';
import {
  getAlternates,
  withTrailingSlash,
  type HreflangAlternate,
} from '../locales/alternates';
import { ES_PATH_BY_EN } from '../locales/es/slugs';
import { PT_PATH_BY_EN } from '../locales/pt/slugs';
import { FR_PATH_BY_EN } from '../locales/fr/slugs';
import { DE_PATH_BY_EN } from '../locales/de/slugs';
import { IT_PATH_BY_EN } from '../locales/it/slugs';
import { ID_PATH_BY_EN } from '../locales/id/slugs';
import { RU_PATH_BY_EN } from '../locales/ru/slugs';
import { JA_PATH_BY_EN } from '../locales/ja/slugs';
import { KO_PATH_BY_EN } from '../locales/ko/slugs';
import { ZH_PATH_BY_EN } from '../locales/zh/slugs';
import type {
  BlogArticleMeta,
  BlogArticleLocaleOverride,
  BlogArticleLocaleVersion,
  BlogRoute,
} from '../types/blog';
import type { BlogBodyData } from './blogBody';

/** EN path -> localized path maps, one per language (same maps the header
 *  and getAlternates() already use for tools). */
const PATH_BY_EN_BY_LANG: Record<string, Record<string, string>> = {
  es: ES_PATH_BY_EN,
  pt: PT_PATH_BY_EN,
  fr: FR_PATH_BY_EN,
  de: DE_PATH_BY_EN,
  it: IT_PATH_BY_EN,
  id: ID_PATH_BY_EN,
  ru: RU_PATH_BY_EN,
  ja: JA_PATH_BY_EN,
  ko: KO_PATH_BY_EN,
  zh: ZH_PATH_BY_EN,
};

/** Localized category-hub slugs. EN uses the category id itself. Slugs are
 *  romanized where the language has no Latin script (JA romaji, KO
 *  romanized, ZH pinyin), matching the site's existing localized slugs
 *  (e.g. '/ja/gazo-asshuku', '/ko/imiji-apchuk', '/zh/yasuo-tupian'). */
export const BLOG_CATEGORY_SLUGS: Record<SupportedLang, Record<ToolCategoryId, string>> = {
  en: {
    compress: 'compress',
    resize: 'resize',
    convert: 'convert',
    'crop-edit': 'crop-edit',
    create: 'create',
    privacy: 'privacy',
    developer: 'developer',
  },
  es: {
    compress: 'comprimir',
    resize: 'cambiar-tamano',
    convert: 'convertir',
    'crop-edit': 'recortar-y-editar',
    create: 'crear',
    privacy: 'privacidad',
    developer: 'desarrolladores',
  },
  pt: {
    compress: 'comprimir',
    resize: 'redimensionar',
    convert: 'converter',
    'crop-edit': 'recortar-e-editar',
    create: 'criar',
    privacy: 'privacidade',
    developer: 'desenvolvedores',
  },
  fr: {
    compress: 'compresser',
    resize: 'redimensionner',
    convert: 'convertir',
    'crop-edit': 'recadrer-et-modifier',
    create: 'creer',
    privacy: 'confidentialite',
    developer: 'developpeur',
  },
  de: {
    compress: 'komprimieren',
    resize: 'groesse-aendern',
    convert: 'konvertieren',
    'crop-edit': 'zuschneiden-und-bearbeiten',
    create: 'erstellen',
    privacy: 'datenschutz',
    developer: 'entwickler',
  },
  it: {
    compress: 'comprimere',
    resize: 'ridimensionare',
    convert: 'convertire',
    'crop-edit': 'ritagliare-e-modificare',
    create: 'creare',
    privacy: 'privacy',
    developer: 'sviluppatori',
  },
  id: {
    compress: 'kompres',
    resize: 'ubah-ukuran',
    convert: 'konversi',
    'crop-edit': 'potong-dan-edit',
    create: 'buat',
    privacy: 'privasi',
    developer: 'pengembang',
  },
  ru: {
    compress: 'szhatie',
    resize: 'izmenenie-razmera',
    convert: 'konvertatsiya',
    'crop-edit': 'obrezka-i-redaktirovanie',
    create: 'sozdanie',
    privacy: 'privatnost',
    developer: 'instrumenty-razrabotchika',
  },
  ja: {
    compress: 'asshuku',
    resize: 'saizu-henko',
    convert: 'henkan',
    'crop-edit': 'torimingu-to-henshu',
    create: 'sakusei',
    privacy: 'puraibashi',
    developer: 'kaihatsusha-tsuru',
  },
  ko: {
    compress: 'apchuk',
    resize: 'keugi-jojeong',
    convert: 'byeonhwan',
    'crop-edit': 'jareugi-pyeonjip',
    create: 'mandeulgi',
    privacy: 'gaeinjeongbo-dogu',
    developer: 'gaebalja-dogu',
  },
  zh: {
    compress: 'yasuo',
    resize: 'tiaozheng-chicun',
    convert: 'zhuanhuan',
    'crop-edit': 'caijian-bianji',
    create: 'chuangzuo',
    privacy: 'yinsi',
    developer: 'kaifazhe-gongju',
  },
};

/** Blog categories, in the same order as TOOL_CATEGORIES (8 hubs). */
export function getBlogCategories(): Array<{ id: ToolCategoryId; label: string }> {
  return TOOL_CATEGORIES;
}

/** Category label in the active language (pass the locale's categories). */
export function getBlogCategoryLabel(
  categoryId: ToolCategoryId,
  labels: Array<{ id: string; label: string }> = TOOL_CATEGORIES,
): string {
  return labels.find((c) => c.id === categoryId)?.label ?? categoryId;
}

// --- Registry (Batch 3: 144 English articles, one section per category,
// in write order. Each category subagent replaces its own marker line
// with its articles; every article object ends with a trailing comma.) ---
export const BLOG_ARTICLES: BlogArticleMeta[] = [
    {
      id: 'compress-image-to-50kb-guide',
      toolSlug: '/compress-image-to-50kb',
      categoryId: 'compress',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'compress-image-to-50kb-guide',
        title: 'Compress Image to 50KB: Complete Guide',
        description: 'Learn how to compress any image to 50KB without ruining it. Formats, quality, portals, and a free browser tool that hits the target.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/compress-image-to-100kb', '/compress-image-to-200kb', '/target-file-size-compressor'],
    },
    {
      id: 'how-to-compress-image-to-50kb',
      toolSlug: '/compress-image-to-50kb',
      categoryId: 'compress',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-compress-image-to-50kb',
        title: 'How to Compress an Image to 50KB',
        description: 'A practical step-by-step guide to shrinking any photo below 50KB: pick the right file, choose the format, and fix it when the target is missed.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/compress-image-to-100kb', '/compress-image-to-200kb', '/target-file-size-compressor'],
    },
    {
      id: 'image-size-50kb-vs-100kb-vs-200kb',
      toolSlug: '/compress-image-to-50kb',
      categoryId: 'compress',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-size-50kb-vs-100kb-vs-200kb',
        title: '50KB vs 100KB vs 200KB: Which Size?',
        description: 'Compare 50KB, 100KB and 200KB images: quality differences, best use cases, and a simple rule for picking the right size for any portal.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/compress-image-to-100kb', '/compress-image-to-200kb', '/target-file-size-compressor'],
    },
    {
      id: 'compress-image-to-100kb-guide',
      toolSlug: '/compress-image-to-100kb',
      categoryId: 'compress',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'compress-image-to-100kb-guide',
        title: 'Compress Image to 100KB: Complete Guide',
        description: 'Everything about compressing images to 100KB: why it is the sweet spot, how quality holds up, formats, and the free tool that does it.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/compress-image-to-50kb', '/compress-image-to-200kb', '/target-file-size-compressor', '/web-image-optimizer'],
    },
    {
      id: 'how-to-reduce-image-to-100kb',
      toolSlug: '/compress-image-to-100kb',
      categoryId: 'compress',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-reduce-image-to-100kb',
        title: 'How to Reduce an Image to 100KB',
        description: 'Step-by-step: reduce any photo to 100KB for resumes, portals, blogs, and email. Includes format choices, batch tips, and fixes.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/compress-image-to-50kb', '/compress-image-to-200kb', '/target-file-size-compressor', '/web-image-optimizer'],
    },
    {
      id: '100kb-image-quality-formats',
      toolSlug: '/compress-image-to-100kb',
      categoryId: 'compress',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: '100kb-image-quality-formats',
        title: '100KB Image Quality: JPG vs PNG vs WebP',
        description: 'Which format looks best at 100KB? A detailed JPG vs PNG vs WebP quality comparison with real guidance for photos, graphics, and text.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/compress-image-to-50kb', '/compress-image-to-200kb', '/target-file-size-compressor', '/web-image-optimizer'],
    },
    {
      id: 'compress-image-to-200kb-guide',
      toolSlug: '/compress-image-to-200kb',
      categoryId: 'compress',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'compress-image-to-200kb-guide',
        title: 'Compress Image to 200KB: Complete Guide',
        description: 'The complete guide to compressing images to 200KB: quality, formats, e-commerce use, blogs, and the free browser tool that hits the target.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/compress-image-to-100kb', '/compress-image-to-500kb', '/web-image-optimizer', '/bulk-image-compressor'],
    },
    {
      id: 'how-to-compress-image-to-200kb',
      toolSlug: '/compress-image-to-200kb',
      categoryId: 'compress',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-compress-image-to-200kb',
        title: 'How to Compress an Image to 200KB',
        description: 'Step-by-step: compress any photo to 200KB for blogs, shops, and portals. Format choices, batch tips, and fixes for missed targets.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/compress-image-to-100kb', '/compress-image-to-500kb', '/web-image-optimizer', '/bulk-image-compressor'],
    },
    {
      id: '200kb-image-job-portal-settings',
      toolSlug: '/compress-image-to-200kb',
      categoryId: 'compress',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: '200kb-image-job-portal-settings',
        title: '200KB Images for Job Portals and Forms',
        description: 'Prepare 200KB images for job portals, applications, and forms: photo rules, document scans, formats, and the settings that pass first time.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/compress-image-to-100kb', '/compress-image-to-500kb', '/web-image-optimizer', '/bulk-image-compressor'],
    },
    {
      id: 'compress-image-to-500kb-guide',
      toolSlug: '/compress-image-to-500kb',
      categoryId: 'compress',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'compress-image-to-500kb-guide',
        title: 'Compress Image to 500KB: Complete Guide',
        description: 'The complete guide to compressing images to 500KB: near-original quality, portfolios, presentations, and the free browser tool.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/compress-image-to-200kb', '/bulk-image-compressor', '/web-image-optimizer'],
    },
    {
      id: 'how-to-compress-image-to-500kb',
      toolSlug: '/compress-image-to-500kb',
      categoryId: 'compress',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-compress-image-to-500kb',
        title: 'How to Compress an Image to 500KB',
        description: 'Step-by-step: compress any photo to 500KB for portfolios, decks, and galleries. Format choices, batch tips, and fixes for missed targets.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/compress-image-to-200kb', '/bulk-image-compressor', '/web-image-optimizer'],
    },
    {
      id: '500kb-vs-1mb-image-quality',
      toolSlug: '/compress-image-to-500kb',
      categoryId: 'compress',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: '500kb-vs-1mb-image-quality',
        title: '500KB vs 1MB: Image Quality Compared',
        description: 'Compare 500KB and 1MB images: visible quality differences, loading speed, when each size wins, and how to choose for web and print.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/compress-image-to-200kb', '/bulk-image-compressor', '/web-image-optimizer'],
    },
    {
      id: 'bulk-image-compressor-guide',
      toolSlug: '/bulk-image-compressor',
      categoryId: 'compress',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'bulk-image-compressor-guide',
        title: 'Bulk Image Compressor: Complete Guide',
        description: 'The complete guide to bulk image compression: batch presets, ZIP export, quality settings, and how to compress dozens of images at once.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/target-file-size-compressor', '/web-image-optimizer', '/compress-image-to-100kb'],
    },
    {
      id: 'how-to-compress-multiple-images-at-once',
      toolSlug: '/bulk-image-compressor',
      categoryId: 'compress',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-compress-multiple-images-at-once',
        title: 'How to Compress Multiple Images at Once',
        description: 'Step-by-step: compress dozens of images at once with presets, a progress bar, and a single ZIP download. Works for blogs, shops, and albums.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/target-file-size-compressor', '/web-image-optimizer', '/compress-image-to-100kb'],
    },
    {
      id: 'batch-image-compression-best-practices',
      toolSlug: '/bulk-image-compressor',
      categoryId: 'compress',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'batch-image-compression-best-practices',
        title: 'Batch Compression: ZIP Workflow Tips',
        description: 'Best practices for batch image compression: presets, quality checks, ZIP organisation, naming, and workflows for blogs, shops, and teams.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/target-file-size-compressor', '/web-image-optimizer', '/compress-image-to-100kb'],
    },
    {
      id: 'target-file-size-compressor-guide',
      toolSlug: '/target-file-size-compressor',
      categoryId: 'compress',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'target-file-size-compressor-guide',
        title: 'Target File Size Compressor: Complete Guide',
        description: 'The complete guide to compressing images to an exact KB or MB size: custom targets, binary search, scaling, and when to use it.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/compress-image-to-50kb', '/compress-image-to-100kb', '/compress-image-to-200kb', '/compress-image-to-500kb'],
    },
    {
      id: 'how-to-compress-image-to-exact-kb',
      toolSlug: '/target-file-size-compressor',
      categoryId: 'compress',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-compress-image-to-exact-kb',
        title: 'How to Compress an Image to an Exact KB Size',
        description: 'Step-by-step: compress any image to an exact KB size for unusual portal caps. Type the number, run the search, and verify the result.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/compress-image-to-50kb', '/compress-image-to-100kb', '/compress-image-to-200kb', '/compress-image-to-500kb'],
    },
    {
      id: 'exact-kb-target-binary-quality-search',
      toolSlug: '/target-file-size-compressor',
      categoryId: 'compress',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'exact-kb-target-binary-quality-search',
        title: 'Exact KB Targets: Binary Quality Search',
        description: 'How the binary quality search finds the sharpest image at any exact KB size: the algorithm, the steps, scaling, and its limits.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/compress-image-to-50kb', '/compress-image-to-100kb', '/compress-image-to-200kb', '/compress-image-to-500kb'],
    },
    {
      id: 'web-image-optimizer-guide',
      toolSlug: '/web-image-optimizer',
      categoryId: 'compress',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'web-image-optimizer-guide',
        title: 'Web Image Optimizer: Complete Guide',
        description: 'The complete guide to the Web Image Optimizer: presets for hero, product, and card images, Core Web Vitals, and copy-paste HTML.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/bulk-image-compressor', '/compress-image-to-200kb', '/compress-image-to-100kb'],
    },
    {
      id: 'how-to-optimize-images-for-website-speed',
      toolSlug: '/web-image-optimizer',
      categoryId: 'compress',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-optimize-images-for-website-speed',
        title: 'How to Optimize Images for Website Speed',
        description: 'Step-by-step: optimize images for website speed with presets, correct dimensions, lazy loading, and copy-paste HTML tags.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/bulk-image-compressor', '/compress-image-to-200kb', '/compress-image-to-100kb'],
    },
    {
      id: 'image-optimization-core-web-vitals',
      toolSlug: '/web-image-optimizer',
      categoryId: 'compress',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-optimization-core-web-vitals',
        title: 'Image Optimization for Core Web Vitals',
        description: 'How image optimization improves Core Web Vitals: LCP, CLS, and INP explained, with practical fixes for slow pages — compression, resizing, and formats.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/bulk-image-compressor', '/compress-image-to-200kb', '/compress-image-to-100kb'],
    },
    {
      id: 'gif-compressor-guide',
      toolSlug: '/gif-compressor',
      categoryId: 'compress',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'gif-compressor-guide',
        title: 'GIF Compressor: Complete Guide',
        description: 'The complete guide to compressing animated GIFs: presets, palettes, frame rates, scaling, and how to shrink GIFs without ruining them.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/gif-maker', '/bulk-image-compressor', '/web-image-optimizer'],
    },
    {
      id: 'how-to-compress-gif',
      toolSlug: '/gif-compressor',
      categoryId: 'compress',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-compress-gif',
        title: 'How to Compress a GIF',
        description: 'Step-by-step: compress any animated GIF for Discord, Slack, websites, and chat. Presets, palette, scale, and fixes for stubborn files.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/gif-maker', '/bulk-image-compressor', '/web-image-optimizer'],
    },
    {
      id: 'gif-vs-webp-vs-mp4-animated',
      toolSlug: '/gif-compressor',
      categoryId: 'compress',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'gif-vs-webp-vs-mp4-animated',
        title: 'GIF vs WebP vs MP4: Animated Images Compared',
        description: 'Compare animated GIF, WebP, and MP4: file size, quality, compatibility, and when to use each format for animations on the web.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/gif-maker', '/bulk-image-compressor', '/web-image-optimizer'],
    },
    {
      id: 'image-converter-guide',
      toolSlug: '/image-converter',
      categoryId: 'convert',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-converter-guide',
        title: 'Image Converter: Complete Guide',
        description: 'Convert images between JPG, PNG, WebP, HEIC, SVG, BMP, GIF and AVIF in your browser. Formats, quality, transparency and batch tips explained.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-to-pdf', '/bulk-image-converter', '/jpg-to-webp'],
    },
    {
      id: 'how-to-convert-image-format',
      toolSlug: '/image-converter',
      categoryId: 'convert',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-convert-image-format',
        title: 'How to Convert an Image Format',
        description: 'Convert any image to JPG, PNG or WebP in six quick steps. Upload, pick a format, set quality, preview and download — all in your browser.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-to-pdf', '/bulk-image-converter', '/heic-to-jpg'],
    },
    {
      id: 'image-format-conversion-quality-loss',
      toolSlug: '/image-converter',
      categoryId: 'convert',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-format-conversion-quality-loss',
        title: 'Image Format Conversion: Quality Loss',
        description: 'Does converting an image lose quality? Lossy vs lossless formats, repeated conversions, and the settings that keep your photos sharp.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/jpg-to-webp', '/png-to-webp', '/image-converter'],
    },
    {
      id: 'image-to-pdf-guide',
      toolSlug: '/image-to-pdf',
      categoryId: 'convert',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-to-pdf-guide',
        title: 'Image to PDF: Complete Guide',
        description: 'Turn photos and scans into one PDF document in your browser. Page sizes, margins, orientation, quality and ordering — all explained.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/jpg-to-png', '/png-to-jpg'],
    },
    {
      id: 'how-to-convert-image-to-pdf',
      toolSlug: '/image-to-pdf',
      categoryId: 'convert',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-convert-image-to-pdf',
        title: 'How to Convert an Image to PDF',
        description: 'Turn one photo or a whole set into a PDF in minutes. Upload, order the pages, pick a size, and download your document — free, in your browser.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/heic-to-jpg', '/jpg-to-png'],
    },
    {
      id: 'jpg-to-pdf-vs-png-to-pdf',
      toolSlug: '/image-to-pdf',
      categoryId: 'convert',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'jpg-to-pdf-vs-png-to-pdf',
        title: 'JPG vs PNG to PDF: Best Document Settings',
        description: 'Should your PDF use JPG or PNG images? File size, text sharpness, transparency and the best settings for each document type.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/jpg-to-png', '/png-to-jpg'],
    },
    {
      id: 'bulk-image-converter-guide',
      toolSlug: '/bulk-image-converter',
      categoryId: 'convert',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'bulk-image-converter-guide',
        title: 'Bulk Image Converter: Complete Guide',
        description: 'Convert whole folders of images to one format at once. Mixed inputs, batch settings, ZIP export and naming — the complete guide.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/bulk-image-compressor', '/heic-to-jpg'],
    },
    {
      id: 'how-to-convert-multiple-images',
      toolSlug: '/bulk-image-converter',
      categoryId: 'convert',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-convert-multiple-images',
        title: 'How to Convert Multiple Images at Once',
        description: 'Convert a whole folder of images to JPG, PNG or WebP in one pass. Upload, pick a format, set quality, and download one ZIP.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/bulk-image-compressor', '/jpg-to-webp'],
    },
    {
      id: 'batch-image-conversion-workflow',
      toolSlug: '/bulk-image-converter',
      categoryId: 'convert',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'batch-image-conversion-workflow',
        title: 'Batch Conversion: Folder Workflow and Naming',
        description: 'A repeatable workflow for converting hundreds of images. Folder setup, naming rules, quality checks and archiving — for teams and websites.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/bulk-image-compressor', '/jpg-to-webp'],
    },
    {
      id: 'heic-to-jpg-guide',
      toolSlug: '/heic-to-jpg',
      categoryId: 'convert',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'heic-to-jpg-guide',
        title: 'HEIC to JPG: Complete Guide',
        description: 'Convert iPhone HEIC photos to JPG in your browser. Why HEIC exists, how decoding works, quality, and what to do with Live Photos.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/jpg-to-webp', '/jpg-to-png'],
    },
    {
      id: 'how-to-convert-heic-to-jpg',
      toolSlug: '/heic-to-jpg',
      categoryId: 'convert',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-convert-heic-to-jpg',
        title: 'How to Convert HEIC to JPG',
        description: 'Convert iPhone HEIC photos to JPG in a few taps. Upload, check the preview, and download — on any device, without installing anything.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/jpg-to-webp', '/compress-image-to-100kb'],
    },
    {
      id: 'heic-vs-jpg',
      toolSlug: '/heic-to-jpg',
      categoryId: 'convert',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'heic-vs-jpg',
        title: 'HEIC vs JPG: Compatibility and Quality',
        description: 'HEIC vs JPG compared honestly: file size, image quality, compatibility, and which format to use for photos, forms, and the web.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/jpg-to-webp', '/avif-to-jpg'],
    },
    {
      id: 'jpg-to-png-guide',
      toolSlug: '/jpg-to-png',
      categoryId: 'convert',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'jpg-to-png-guide',
        title: 'JPG to PNG for Lossless Editing',
        description: 'Convert JPG photos to PNG the right way. When it helps, why files get bigger, and how to use PNG for editing, text and graphics.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/png-to-jpg', '/jpg-to-webp', '/image-converter'],
    },
    {
      id: 'how-to-convert-jpg-to-png',
      toolSlug: '/jpg-to-png',
      categoryId: 'convert',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-convert-jpg-to-png',
        title: 'How to Convert JPG to PNG Losslessly',
        description: 'Convert JPG images to PNG in seconds, one file or a batch of twenty. Upload, convert, compare, and download — all in your browser.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/png-to-jpg', '/jpg-to-webp', '/image-converter'],
    },
    {
      id: 'jpg-vs-png-transparency',
      toolSlug: '/jpg-to-png',
      categoryId: 'convert',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'jpg-vs-png-transparency',
        title: 'JPG vs PNG: When Transparency Matters',
        description: 'JPG vs PNG compared: transparency, file size, text sharpness and photos. Learn when each format wins and why converting cannot add transparency.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/png-to-jpg', '/jpg-to-webp', '/image-converter'],
    },
    {
      id: 'png-to-jpg-guide',
      toolSlug: '/png-to-jpg',
      categoryId: 'convert',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'png-to-jpg-guide',
        title: 'PNG to JPG: Shrink Screenshots Fast',
        description: 'Convert PNG screenshots and photos to JPG and shrink them dramatically. Matte colours, quality settings, batches and best uses explained.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/jpg-to-png', '/png-to-webp', '/image-converter'],
    },
    {
      id: 'how-to-convert-png-to-jpg',
      toolSlug: '/png-to-jpg',
      categoryId: 'convert',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-convert-png-to-jpg',
        title: 'How to Convert PNG to JPG and Shrink It',
        description: 'Convert PNG screenshots and images to JPG in six steps. Pick a matte colour, set quality, preview, and download — one file or a batch.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/jpg-to-png', '/png-to-webp', '/image-converter'],
    },
    {
      id: 'png-to-jpg-file-size-quality',
      toolSlug: '/png-to-jpg',
      categoryId: 'convert',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'png-to-jpg-file-size-quality',
        title: 'PNG to JPG: File Size and Quality Trade-offs',
        description: 'How much smaller does PNG to JPG really get? Real savings by image type, quality settings that protect text, and when the trade is not worth it.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/png-to-webp', '/jpg-to-webp', '/image-converter'],
    },
    {
      id: 'jpg-to-webp-guide',
      toolSlug: '/jpg-to-webp',
      categoryId: 'convert',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'jpg-to-webp-guide',
        title: 'JPG to WebP for Faster Websites',
        description: 'Convert JPG photos to WebP for faster websites. How much smaller, which quality to use, browser support, and when to keep JPG instead.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/webp-to-jpg', '/png-to-webp', '/image-converter'],
    },
    {
      id: 'how-to-convert-jpg-to-webp',
      toolSlug: '/jpg-to-webp',
      categoryId: 'convert',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-convert-jpg-to-webp',
        title: 'How to Convert JPG to WebP for Faster Pages',
        description: 'Convert JPG photos to WebP in a few steps. Upload, set quality, preview the savings, and download — one photo or a whole folder.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/webp-to-jpg', '/png-to-webp', '/image-converter'],
    },
    {
      id: 'jpg-vs-webp',
      toolSlug: '/jpg-to-webp',
      categoryId: 'convert',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'jpg-vs-webp',
        title: 'JPG vs WebP: Size, Quality and Support',
        description: 'JPG vs WebP compared head to head: file size savings, image quality, transparency, browser support, and which format to use where.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/webp-to-jpg', '/png-to-webp', '/image-converter'],
    },
    {
      id: 'webp-to-jpg-guide',
      toolSlug: '/webp-to-jpg',
      categoryId: 'convert',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'webp-to-jpg-guide',
        title: 'WebP to JPG for Universal Compatibility',
        description: 'Convert WebP images back to JPG for compatibility. Matte colours, quality settings, batch conversion, and when JPG beats WebP for your use case.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/jpg-to-webp', '/webp-to-png', '/image-converter'],
    },
    {
      id: 'how-to-convert-webp-to-jpg',
      toolSlug: '/webp-to-jpg',
      categoryId: 'convert',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-convert-webp-to-jpg',
        title: 'How to Convert WebP to JPG for Any App',
        description: 'Convert WebP images to JPG in a few steps. Upload, pick a matte colour, set quality, and download — one file or a whole batch.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/jpg-to-webp', '/webp-to-png', '/image-converter'],
    },
    {
      id: 'webp-to-jpg-compatibility',
      toolSlug: '/webp-to-jpg',
      categoryId: 'convert',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'webp-to-jpg-compatibility',
        title: 'WebP to JPG: When Compatibility Wins',
        description: 'WebP is smaller, but JPG opens everywhere. When compatibility matters more than size — forms, printers, email, and old software.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/jpg-to-webp', '/webp-to-png', '/image-converter'],
    },
    {
      id: 'png-to-webp-guide',
      toolSlug: '/png-to-webp',
      categoryId: 'convert',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'png-to-webp-guide',
        title: 'PNG to WebP Without Losing Transparency',
        description: 'Convert PNG images to WebP for smaller files with transparency kept. Logos, icons, screenshots and hero images — settings and best uses.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/webp-to-png', '/png-to-jpg', '/jpg-to-webp'],
    },
    {
      id: 'how-to-convert-png-to-webp',
      toolSlug: '/png-to-webp',
      categoryId: 'convert',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-convert-png-to-webp',
        title: 'How to Convert PNG to WebP in Seconds',
        description: 'Convert PNG images to WebP in a few steps. Upload, set quality, check transparency, and download — one logo or a whole icon set.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/webp-to-png', '/png-to-jpg', '/jpg-to-webp'],
    },
    {
      id: 'png-vs-webp',
      toolSlug: '/png-to-webp',
      categoryId: 'convert',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'png-vs-webp',
        title: 'PNG vs WebP: Transparency and File Size',
        description: 'PNG vs WebP compared: transparency, file size, text sharpness, browser support, and which format to use for logos, screenshots, and photos.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/webp-to-png', '/jpg-to-webp', '/png-to-jpg'],
    },
    {
      id: 'webp-to-png-guide',
      toolSlug: '/webp-to-png',
      categoryId: 'convert',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'webp-to-png-guide',
        title: 'WebP to PNG for Editing and Printing',
        description: 'Convert WebP images to PNG without losing quality. Transparency, editing, compatibility, and when PNG is the right target.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/png-to-webp', '/webp-to-jpg', '/image-converter'],
    },
    {
      id: 'how-to-convert-webp-to-png',
      toolSlug: '/webp-to-png',
      categoryId: 'convert',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-convert-webp-to-png',
        title: 'How to Convert WebP to PNG Losslessly',
        description: 'Convert WebP images to PNG in a few steps. Upload, convert, check transparency, and download — one file or a whole batch.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/png-to-webp', '/webp-to-jpg', '/image-converter'],
    },
    {
      id: 'webp-to-png-editing-compatibility',
      toolSlug: '/webp-to-png',
      categoryId: 'convert',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'webp-to-png-editing-compatibility',
        title: 'WebP to PNG: Editing and Compatibility',
        description: 'Why designers convert WebP to PNG: editing workflows, transparency, and compatibility with Photoshop, Figma, Office and print.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/png-to-webp', '/webp-to-jpg', '/image-converter'],
    },
    {
      id: 'svg-to-png-guide',
      toolSlug: '/svg-to-png',
      categoryId: 'convert',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'svg-to-png-guide',
        title: 'SVG to PNG: Complete Guide',
        description: 'Convert SVG logos and icons to PNG at any size. Scale, transparency, fonts, gradients, and the limits — everything explained.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/png-to-webp', '/jpg-to-png'],
    },
    {
      id: 'how-to-convert-svg-to-png',
      toolSlug: '/svg-to-png',
      categoryId: 'convert',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-convert-svg-to-png',
        title: 'How to Convert SVG to PNG',
        description: 'Convert SVG logos and icons to PNG at the size you need. Upload, pick a scale, check the result, and download — one file or a whole pack.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/png-to-webp', '/jpg-to-png'],
    },
    {
      id: 'svg-vs-png-vector-raster',
      toolSlug: '/svg-to-png',
      categoryId: 'convert',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'svg-vs-png-vector-raster',
        title: 'SVG vs PNG: Vector vs Raster Explained',
        description: 'SVG vs PNG compared: vector vs raster, scaling, file size, transparency, browser support, and when to use each format — with examples for web and print.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/png-to-webp', '/jpg-to-png'],
    },
    {
      id: 'avif-to-jpg-guide',
      toolSlug: '/avif-to-jpg',
      categoryId: 'convert',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'avif-to-jpg-guide',
        title: 'AVIF to JPG: Complete Guide',
        description: 'Convert AVIF images from modern websites to JPG. What AVIF is, why apps reject it, quality settings, and transparency handling.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/webp-to-jpg', '/jpg-to-webp'],
    },
    {
      id: 'how-to-convert-avif-to-jpg',
      toolSlug: '/avif-to-jpg',
      categoryId: 'convert',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-convert-avif-to-jpg',
        title: 'How to Convert AVIF to JPG',
        description: 'Convert AVIF images to JPG in a few steps. Upload, set quality, handle transparency, and download — one file or a whole batch.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/webp-to-jpg', '/jpg-to-webp'],
    },
    {
      id: 'avif-vs-jpg',
      toolSlug: '/avif-to-jpg',
      categoryId: 'convert',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'avif-vs-jpg',
        title: 'AVIF vs JPG: Next-Gen vs Universal',
        description: 'AVIF vs JPG compared: file size, image quality, HDR, transparency, browser support, and which format to use for the web and beyond.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/webp-to-jpg', '/jpg-to-webp'],
    },
    {
      id: 'bmp-to-jpg-guide',
      toolSlug: '/bmp-to-jpg',
      categoryId: 'convert',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'bmp-to-jpg-guide',
        title: 'BMP to JPG: Complete Guide',
        description: 'Convert BMP bitmaps to JPG and shrink them by 90 percent or more. Why BMP files are huge, quality settings, scans, and batches.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/jpg-to-webp', '/png-to-jpg'],
    },
    {
      id: 'how-to-convert-bmp-to-jpg',
      toolSlug: '/bmp-to-jpg',
      categoryId: 'convert',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-convert-bmp-to-jpg',
        title: 'How to Convert BMP to JPG',
        description: 'Convert BMP bitmaps to JPG in a few steps. Upload, set quality, preview the savings, and download — one file or a whole folder of scans.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/jpg-to-webp', '/png-to-jpg'],
    },
    {
      id: 'bmp-vs-jpg-file-size',
      toolSlug: '/bmp-to-jpg',
      categoryId: 'convert',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'bmp-vs-jpg-file-size',
        title: 'BMP vs JPG: Why BMP Files Are So Large',
        description: 'BMP vs JPG compared: why BMP files are enormous, how much JPG saves, quality, colour depth, and when each format still makes sense.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-converter', '/jpg-to-webp', '/png-to-jpg'],
    },
    {
      id: 'rotate-flip-image-guide',
      toolSlug: '/rotate-flip-image',
      categoryId: 'crop-edit',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'rotate-flip-image-guide',
        title: 'Rotate and Flip Images: Complete Guide',
        description: 'Learn how to rotate and flip images online: 90 and 180 degree turns, custom angles, mirrored selfies, and EXIF orientation fixes, all in your browser.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-cropper', '/image-resizer', '/image-dimensions-checker'],
    },
    {
      id: 'how-to-rotate-flip-image',
      toolSlug: '/rotate-flip-image',
      categoryId: 'crop-edit',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-rotate-flip-image',
        title: 'How to Rotate or Flip an Image',
        description: 'Rotate or flip any image in seconds: upload, pick 90 or 180 degrees or a custom angle, flip horizontally or vertically, preview, and download.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-cropper', '/image-resizer', '/image-dimensions-checker'],
    },
    {
      id: 'image-orientation-exif-rotation',
      toolSlug: '/rotate-flip-image',
      categoryId: 'crop-edit',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-orientation-exif-rotation',
        title: 'Image Orientation: EXIF Rotation Problems',
        description: 'Why does the same photo look right on your phone and sideways everywhere else? EXIF orientation explained, plus how to fix it permanently.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-metadata-viewer', '/remove-image-metadata', '/image-cropper'],
    },
    {
      id: 'image-cropper-guide',
      toolSlug: '/image-cropper',
      categoryId: 'crop-edit',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-cropper-guide',
        title: 'Image Cropper: Complete Guide',
        description: 'Learn how to crop images online: aspect ratios, the rule of thirds, zoom, quality settings, and how to crop for profiles, banners, and print.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-resizer', '/rotate-flip-image', '/round-image-corners'],
    },
    {
      id: 'how-to-crop-image',
      toolSlug: '/image-cropper',
      categoryId: 'crop-edit',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-crop-image',
        title: 'How to Crop an Image',
        description: 'Crop any image online in seconds: upload, drag the selection box, pick an aspect ratio, check the dimensions, and download a clean crop.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-resizer', '/rotate-flip-image', '/round-image-corners'],
    },
    {
      id: 'image-crop-ratios-explained',
      toolSlug: '/image-cropper',
      categoryId: 'crop-edit',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-crop-ratios-explained',
        title: 'Crop Ratios Explained: 1:1, 4:3, 16:9',
        description: 'What do crop ratios mean, and which one should you pick? 1:1, 4:3, 3:2, 16:9, and custom ratios explained for profiles, print, and social media.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-resizer', '/image-dimensions-checker', '/round-image-corners'],
    },
    {
      id: 'image-watermark-guide',
      toolSlug: '/image-watermark',
      categoryId: 'crop-edit',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-watermark-guide',
        title: 'Image Watermark: Complete Guide',
        description: 'Learn how to watermark images online: text and logo watermarks, tiled patterns, opacity, placement, and how to protect photos without ruining them.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/add-text-to-image', '/image-border-generator', '/remove-image-metadata'],
    },
    {
      id: 'how-to-add-watermark-to-image',
      toolSlug: '/image-watermark',
      categoryId: 'crop-edit',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-add-watermark-to-image',
        title: 'How to Add a Watermark to an Image',
        description: 'Add a watermark to any image in minutes: text or logo, placement, opacity, size, and tiled patterns, with a clean export at the end.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/add-text-to-image', '/image-border-generator', '/remove-image-metadata'],
    },
    {
      id: 'watermark-best-practices',
      toolSlug: '/image-watermark',
      categoryId: 'crop-edit',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'watermark-best-practices',
        title: 'Watermark Best Practices: Placement, Opacity',
        description: 'How to watermark photos properly: placement rules, opacity ranges, sizing, colour, tiled patterns, and branding that protects without ruining the image.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/add-text-to-image', '/image-border-generator', '/remove-image-metadata'],
    },
    {
      id: 'blur-pixelate-image-guide',
      toolSlug: '/blur-pixelate-image',
      categoryId: 'crop-edit',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'blur-pixelate-image-guide',
        title: 'Blur and Pixelate Images: Complete Guide',
        description: 'Learn how to blur and pixelate images online: hide faces, text, and details with smooth blur or mosaic pixelation, brush or whole-image modes.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/remove-image-metadata', '/image-cropper', '/image-filters'],
    },
    {
      id: 'how-to-blur-pixelate-image',
      toolSlug: '/blur-pixelate-image',
      categoryId: 'crop-edit',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-blur-pixelate-image',
        title: 'How to Blur or Pixelate an Image',
        description: 'Blur or pixelate any image in minutes: paint over faces and text with a brush, or blur the whole image, then export a clean censored copy.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/remove-image-metadata', '/image-cropper', '/image-filters'],
    },
    {
      id: 'blur-vs-pixelate-image',
      toolSlug: '/blur-pixelate-image',
      categoryId: 'crop-edit',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'blur-vs-pixelate-image',
        title: 'Blur vs Pixelate: Hiding Faces and Text',
        description: 'Blur or pixelate? How each method hides faces, text, and numbers, which one is safer, and when to combine them for proper redaction.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/remove-image-metadata', '/image-cropper', '/image-filters'],
    },
    {
      id: 'add-text-to-image-guide',
      toolSlug: '/add-text-to-image',
      categoryId: 'crop-edit',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'add-text-to-image-guide',
        title: 'Add Text to Images: Complete Guide',
        description: 'Learn how to add text to images online: captions, titles, memes, quotes, and annotations with fonts, colours, outlines, and layered positioning.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-watermark', '/image-border-generator', '/image-filters'],
    },
    {
      id: 'how-to-add-text-to-image',
      toolSlug: '/add-text-to-image',
      categoryId: 'crop-edit',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-add-text-to-image',
        title: 'How to Add Text to an Image',
        description: 'Add text to any image in minutes: upload, type your caption, pick a font and size, set the colour and outline, position the layers, and download.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-watermark', '/image-border-generator', '/image-filters'],
    },
    {
      id: 'text-on-images-readability-tips',
      toolSlug: '/add-text-to-image',
      categoryId: 'crop-edit',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'text-on-images-readability-tips',
        title: 'Text on Images: Fonts and Readability',
        description: 'How to make text on images readable: font choices, size rules, contrast, outlines, shadows, background panels, and testing on small screens.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-watermark', '/image-border-generator', '/image-filters'],
    },
    {
      id: 'image-border-generator-guide',
      toolSlug: '/image-border-generator',
      categoryId: 'crop-edit',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-border-generator-guide',
        title: 'Image Borders: Complete Guide',
        description: 'Learn how to add borders to images online: solid, Polaroid, and gradient glow frames, border size, corner radius, shadows, and colours.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/round-image-corners', '/add-text-to-image', '/image-filters'],
    },
    {
      id: 'how-to-add-border-to-image',
      toolSlug: '/image-border-generator',
      categoryId: 'crop-edit',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-add-border-to-image',
        title: 'How to Add a Border to an Image',
        description: 'Add a border to any image in minutes: upload, pick a style, set the size and colour, add a shadow, preview, and download a framed photo.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/round-image-corners', '/add-text-to-image', '/image-filters'],
    },
    {
      id: 'image-frames-borders-styles',
      toolSlug: '/image-border-generator',
      categoryId: 'crop-edit',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-frames-borders-styles',
        title: 'Image Frames and Borders for Social',
        description: 'Which frame style suits your photo? Minimal, Polaroid, gallery, gradient glow, and retro frames compared for social media, print, and product photos.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/round-image-corners', '/add-text-to-image', '/image-filters'],
    },
    {
      id: 'round-image-corners-guide',
      toolSlug: '/round-image-corners',
      categoryId: 'crop-edit',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'round-image-corners-guide',
        title: 'Round Image Corners: Complete Guide',
        description: 'Learn how to round image corners online: corner radius, per-corner control, circle and pill shapes, transparent vs solid fills, and formats.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-border-generator', '/image-cropper', '/add-background-to-image'],
    },
    {
      id: 'how-to-round-image-corners',
      toolSlug: '/round-image-corners',
      categoryId: 'crop-edit',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-round-image-corners',
        title: 'How to Round Image Corners',
        description: 'Round image corners in minutes: upload, set the radius, use per-corner control or the circle shortcut, choose transparent or solid fill, and download.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-border-generator', '/image-cropper', '/add-background-to-image'],
    },
    {
      id: 'rounded-corners-vs-circle-crop',
      toolSlug: '/round-image-corners',
      categoryId: 'crop-edit',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'rounded-corners-vs-circle-crop',
        title: 'Rounded Corners vs Circle Crop',
        description: 'Rounded corners or a circle crop? How each shape works for avatars, cards, and social profiles, and when to use one, the other, or both.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-border-generator', '/image-cropper', '/add-background-to-image'],
    },
    {
      id: 'image-brightness-editor-guide',
      toolSlug: '/image-brightness-editor',
      categoryId: 'crop-edit',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-brightness-editor-guide',
        title: 'Image Brightness Editor: Complete Guide',
        description: 'Learn how to adjust image brightness online: the brightness slider, quick presets, compare modes, and how to fix dark photos without washing them out.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-contrast-editor', '/image-saturation-editor', '/image-filters'],
    },
    {
      id: 'how-to-adjust-image-brightness',
      toolSlug: '/image-brightness-editor',
      categoryId: 'crop-edit',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-adjust-image-brightness',
        title: 'How to Adjust Image Brightness',
        description: 'Adjust image brightness in minutes: upload, drag the slider, try a preset, compare before and after, and download a clean, well-lit photo.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-contrast-editor', '/image-saturation-editor', '/image-filters'],
    },
    {
      id: 'brightness-vs-exposure-vs-contrast',
      toolSlug: '/image-brightness-editor',
      categoryId: 'crop-edit',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'brightness-vs-exposure-vs-contrast',
        title: 'Brightness vs Exposure vs Contrast',
        description: 'Brightness, exposure, and contrast explained: what each one does to a photo, how they interact, and which control to reach for in each situation.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-contrast-editor', '/image-saturation-editor', '/image-filters'],
    },
    {
      id: 'image-contrast-editor-guide',
      toolSlug: '/image-contrast-editor',
      categoryId: 'crop-edit',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-contrast-editor-guide',
        title: 'Image Contrast Editor: Complete Guide',
        description: 'Learn how to adjust image contrast online: the contrast slider, quick presets, compare modes, and how to add punch without clipping highlights.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-brightness-editor', '/image-saturation-editor', '/image-filters'],
    },
    {
      id: 'how-to-adjust-image-contrast',
      toolSlug: '/image-contrast-editor',
      categoryId: 'crop-edit',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-adjust-image-contrast',
        title: 'How to Adjust Image Contrast',
        description: 'Adjust image contrast in minutes: upload, drag the slider, try a preset, check highlights and shadows, and download a punchy, well-balanced photo.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-brightness-editor', '/image-saturation-editor', '/image-filters'],
    },
    {
      id: 'contrast-readability-text-over-photos',
      toolSlug: '/image-contrast-editor',
      categoryId: 'crop-edit',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'contrast-readability-text-over-photos',
        title: 'Contrast for Readability: Text Over Photos',
        description: 'How to make text readable over photos: contrast between letters and background, darkening, overlays, panels, and testing on small screens.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/add-text-to-image', '/image-brightness-editor', '/image-filters'],
    },
    {
      id: 'image-saturation-editor-guide',
      toolSlug: '/image-saturation-editor',
      categoryId: 'crop-edit',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-saturation-editor-guide',
        title: 'Image Saturation Editor: Complete Guide',
        description: 'Learn how to adjust image saturation online: the saturation slider, presets, muted and grayscale looks, skin tones, and natural colour editing.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-filters', '/image-brightness-editor', '/image-contrast-editor'],
    },
    {
      id: 'how-to-adjust-image-saturation',
      toolSlug: '/image-saturation-editor',
      categoryId: 'crop-edit',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-adjust-image-saturation',
        title: 'How to Adjust Image Saturation',
        description: 'Adjust image saturation in minutes: upload, drag the slider, try a preset, check skin tones, and download a photo with natural, vivid colour.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-filters', '/image-brightness-editor', '/image-contrast-editor'],
    },
    {
      id: 'saturation-vs-vibrance',
      toolSlug: '/image-saturation-editor',
      categoryId: 'crop-edit',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'saturation-vs-vibrance',
        title: 'Saturation vs Vibrance: Natural Colour',
        description: 'Saturation or vibrance? How each control treats colour, which one protects skin tones, and how to get natural, vivid colour without neon grass.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-filters', '/image-brightness-editor', '/image-contrast-editor'],
    },
    {
      id: 'image-filters-guide',
      toolSlug: '/image-filters',
      categoryId: 'crop-edit',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-filters-guide',
        title: 'Image Filters: Complete Guide',
        description: 'Learn how to use photo filters online: Vintage, Sepia, B&W Noir, Warm, Cool, and 6 more styles, intensity control, and choosing a consistent look.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-saturation-editor', '/image-brightness-editor', '/image-contrast-editor'],
    },
    {
      id: 'how-to-apply-photo-filters',
      toolSlug: '/image-filters',
      categoryId: 'crop-edit',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-apply-photo-filters',
        title: 'How to Apply Photo Filters',
        description: 'Apply photo filters in minutes: upload, browse the 11 styles, set the intensity, compare with the original, and download a styled photo.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-saturation-editor', '/image-brightness-editor', '/image-contrast-editor'],
    },
    {
      id: 'photo-filters-compared',
      toolSlug: '/image-filters',
      categoryId: 'crop-edit',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'photo-filters-compared',
        title: 'Photo Filters Compared: A Consistent Look',
        description: 'All 11 photo filters compared: Vintage vs Sepia, Grayscale vs Noir, Warm vs Cool, and which style suits portraits, landscapes, food, and products.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-saturation-editor', '/image-brightness-editor', '/image-contrast-editor'],
    },
    {
      id: 'image-color-picker-guide',
      toolSlug: '/image-color-picker',
      categoryId: 'developer',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-color-picker-guide',
        title: 'Image Color Picker: Complete Guide',
        description: 'Pick any color from any image with an eyedropper. Learn HEX, RGB, HSL and CMYK codes, the magnifier loupe, swatches, and CSS export — free, in your browser.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-color-palette-extractor', '/image-dimensions-checker', '/favicon-generator'],
    },
    {
      id: 'how-to-pick-color-from-image',
      toolSlug: '/image-color-picker',
      categoryId: 'developer',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-pick-color-from-image',
        title: 'How to Pick a Color from an Image',
        description: 'Pick an exact color from any photo, logo, or screenshot in four steps. Use the magnifier loupe, build swatches, and export CSS — no install, no upload.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-color-palette-extractor', '/image-dimensions-checker', '/favicon-generator'],
    },
    {
      id: 'hex-vs-rgb-vs-hsl',
      toolSlug: '/image-color-picker',
      categoryId: 'developer',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'hex-vs-rgb-vs-hsl',
        title: 'HEX vs RGB vs HSL: Colour Codes Explained',
        description: 'HEX, RGB, HSL, and CMYK describe the same color in different ways. Learn what each format means, when to use it, and how to convert between them.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-color-palette-extractor', '/image-dimensions-checker', '/add-background-to-image'],
    },
    {
      id: 'image-dimensions-checker-guide',
      toolSlug: '/image-dimensions-checker',
      categoryId: 'developer',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-dimensions-checker-guide',
        title: 'Image Dimensions Checker: Complete Guide',
        description: 'Check image dimensions: width, height, aspect ratio, megapixels, print size, and transparency. Validate minimums and export CSV or JSON — free, in your browser.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-resizer', '/image-dpi-changer', '/image-metadata-viewer'],
    },
    {
      id: 'how-to-check-image-dimensions',
      toolSlug: '/image-dimensions-checker',
      categoryId: 'developer',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-check-image-dimensions',
        title: 'How to Check Image Dimensions',
        description: 'Check the width, height, aspect ratio, and print size of any image — one file or a whole batch. Five steps, with CSV and JSON export at the end.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-resizer', '/image-cropper', '/image-dpi-changer'],
    },
    {
      id: 'image-dimensions-vs-resolution-vs-file-size',
      toolSlug: '/image-dimensions-checker',
      categoryId: 'developer',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-dimensions-vs-resolution-vs-file-size',
        title: 'Dimensions vs Resolution vs File Size',
        description: 'Dimensions, resolution, and file size are three different numbers. Learn what each one means, how they relate, and which one matters for web, print, and social.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-dpi-changer', '/image-resizer', '/image-converter'],
    },
    {
      id: 'image-dpi-changer-guide',
      toolSlug: '/image-dpi-changer',
      categoryId: 'developer',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-dpi-changer-guide',
        title: 'Image DPI Changer: Complete Guide',
        description: 'Change image DPI without losing quality. Presets from 72 to 600 DPI, custom values up to 2400, batch ZIP export, and a Verified DPI badge.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-dimensions-checker', '/image-to-pdf', '/image-resizer'],
    },
    {
      id: 'how-to-change-image-dpi',
      toolSlug: '/image-dpi-changer',
      categoryId: 'developer',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-change-image-dpi',
        title: 'How to Change Image DPI',
        description: 'Change an image DPI to 72, 150, 300, or 600 in four steps — or any custom value up to 2400. Batch support, ZIP download, and a Verified DPI badge included.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-dimensions-checker', '/image-to-pdf', '/image-converter'],
    },
    {
      id: 'dpi-vs-ppi-print-web',
      toolSlug: '/image-dpi-changer',
      categoryId: 'developer',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'dpi-vs-ppi-print-web',
        title: 'DPI vs PPI: What Matters for Print and Web',
        description: 'DPI and PPI sound alike but measure different things. Learn which one matters for print, which one matters for screens, and why 72 vs 300 DPI confuses everyone.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-dimensions-checker', '/image-resizer', '/image-to-pdf'],
    },
    {
      id: 'image-to-base64-guide',
      toolSlug: '/image-to-base64',
      categoryId: 'developer',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-to-base64-guide',
        title: 'Image to Base64: Embed Images in Code',
        description: 'Convert any image to Base64: Data URLs, raw strings, HTML img snippets, and CSS url() output. Learn the 33% overhead, when to embed, and when to link instead.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/base64-to-image', '/favicon-generator', '/image-dimensions-checker'],
    },
    {
      id: 'how-to-convert-image-to-base64',
      toolSlug: '/image-to-base64',
      categoryId: 'developer',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-convert-image-to-base64',
        title: 'How to Convert an Image to Base64 for Code',
        description: 'Convert an image to Base64 in four steps: upload, pick Data URL, raw, HTML, or CSS output, then copy or download. Works for PNG, JPG, SVG, GIF, and ICO.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/base64-to-image', '/favicon-generator', '/image-converter'],
    },
    {
      id: 'base64-images-when-to-embed',
      toolSlug: '/image-to-base64',
      categoryId: 'developer',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'base64-images-when-to-embed',
        title: 'Base64 Images: When to Embed and When Not To',
        description: 'Embedding Base64 images saves requests but costs 33% more bytes and kills caching. Learn the size thresholds, the caching trade-off, and a decision checklist.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/base64-to-image', '/image-converter', '/favicon-generator'],
    },
    {
      id: 'base64-to-image-guide',
      toolSlug: '/base64-to-image',
      categoryId: 'developer',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'base64-to-image-guide',
        title: 'Base64 to Image: Decode a String to a File',
        description: 'Decode any Base64 string back into an image. Auto-decode on paste, URL-safe variants, transparency preview, and PNG, JPG, WebP, or original-format download.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-to-base64', '/image-converter', '/image-dimensions-checker'],
    },
    {
      id: 'how-to-convert-base64-to-image',
      toolSlug: '/base64-to-image',
      categoryId: 'developer',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-convert-base64-to-image',
        title: 'How to Convert Base64 to an Image File',
        description: 'Convert a Base64 string to an image in four steps: paste, preview, pick Original, PNG, JPG, or WebP, and download. Handles URL-safe strings and line breaks.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-to-base64', '/image-converter', '/favicon-generator'],
    },
    {
      id: 'base64-vs-image-files',
      toolSlug: '/base64-to-image',
      categoryId: 'developer',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'base64-vs-image-files',
        title: 'Base64 vs Image Files: Performance',
        description: 'Base64 strings and image files carry the same picture in different ways. Compare size, speed, caching, and editing, and learn when each one wins.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-to-base64', '/image-converter', '/image-resizer'],
    },
    {
      id: 'image-color-palette-extractor-guide',
      toolSlug: '/image-color-palette-extractor',
      categoryId: 'developer',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-color-palette-extractor-guide',
        title: 'Colour Palette Extractor: Complete Guide',
        description: 'Extract a colour palette from any photo: 3 to 12 swatches, ranked by coverage, with HEX, RGB, HSL, CSS export, JSON, and a palette card download.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-color-picker', '/favicon-generator', '/add-background-to-image'],
    },
    {
      id: 'how-to-extract-color-palette-from-image',
      toolSlug: '/image-color-palette-extractor',
      categoryId: 'developer',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-extract-color-palette-from-image',
        title: 'How to Extract a Colour Palette',
        description: 'Extract a colour palette from any photo in five steps: upload, pick 3–12 swatches, read the percentages, and copy CSS or JSON — free, in your browser.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-color-picker', '/favicon-generator', '/image-dimensions-checker'],
    },
    {
      id: 'color-palettes-from-photos-design',
      toolSlug: '/image-color-palette-extractor',
      categoryId: 'developer',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'color-palettes-from-photos-design',
        title: 'Colour Palettes from Photos: Design Tips',
        description: 'Turn photos into design palettes that actually work: the 60-30-10 rule, dominant vs accent, contrast, brand use, and the mistakes that make palettes muddy.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-color-picker', '/favicon-generator', '/add-background-to-image'],
    },
    {
      id: 'favicon-generator-guide',
      toolSlug: '/favicon-generator',
      categoryId: 'create',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'favicon-generator-guide',
        title: 'Favicon Generator: Complete Guide',
        description: 'Everything about favicons: what they are, which files a complete pack needs, how to build one from your logo, and how to install it on any website.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-color-palette-extractor', '/image-resizer', '/image-converter'],
    },
    {
      id: 'how-to-create-favicon',
      toolSlug: '/favicon-generator',
      categoryId: 'create',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-create-favicon',
        title: 'How to Create a Favicon',
        description: 'Make a favicon from your logo in minutes: prepare the source image, set padding and background, preview light and dark tabs, and install the pack on your site.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-cropper', '/image-resizer', '/image-color-palette-extractor'],
    },
    {
      id: 'favicon-sizes-explained',
      toolSlug: '/favicon-generator',
      categoryId: 'create',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'favicon-sizes-explained',
        title: 'Favicon Sizes Explained: 16×16 to 512×512',
        description: 'Every favicon size and what it is for: 16×16 tab icons, 32×32 retina, 180×180 Apple Touch, 192×192 and 512×512 Android, and how the ICO file ties them together.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-resizer', '/image-dimensions-checker', '/image-converter'],
    },
    {
      id: 'add-background-to-image-guide',
      toolSlug: '/add-background-to-image',
      categoryId: 'create',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'add-background-to-image-guide',
        title: 'Add Background to Images: Complete Guide',
        description: 'Put any photo or transparent cutout on a solid, gradient, or blurred background: how the tool works, which mode to choose, and framing for social and shops.',
        readingMinutes: 12,
      },
      relatedToolSlugs: ['/image-converter', '/image-cropper', '/add-text-to-image'],
    },
    {
      id: 'how-to-add-background-to-image',
      toolSlug: '/add-background-to-image',
      categoryId: 'create',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-add-background-to-image',
        title: 'How to Add a Background to an Image',
        description: 'Add a background to any photo or transparent cutout in minutes: pick a solid, gradient, or blurred backdrop, frame it for the right shape, and export.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-converter', '/image-cropper', '/add-text-to-image'],
    },
    {
      id: 'product-photo-backgrounds',
      toolSlug: '/add-background-to-image',
      categoryId: 'create',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'product-photo-backgrounds',
        title: 'Product Photo Backgrounds: Colours',
        description: 'Choose the right background for product photos: white, brand colours, marketplace rules, and the consistency that makes a shop look like a brand.',
        readingMinutes: 12,
      },
      relatedToolSlugs: ['/image-converter', '/image-cropper', '/bulk-image-compressor'],
    },
    {
      id: 'image-splitter-guide',
      toolSlug: '/image-splitter',
      categoryId: 'create',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-splitter-guide',
        title: 'Image Splitter: Complete Guide',
        description: 'Split any image into grid tiles or strips: how grid, horizontal, and vertical modes work, presets, full-resolution exports, and the best uses for each split.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-cropper', '/image-resizer', '/image-dimensions-checker'],
    },
    {
      id: 'how-to-split-image',
      toolSlug: '/image-splitter',
      categoryId: 'create',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-split-image',
        title: 'How to Split an Image',
        description: 'Split any image into grid tiles or strips in minutes: upload, pick a mode, set rows and columns, check the cut lines, and download the tiles or a ZIP.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-cropper', '/image-resizer', '/image-to-pdf'],
    },
    {
      id: 'split-images-instagram-grid',
      toolSlug: '/image-splitter',
      categoryId: 'create',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'split-images-instagram-grid',
        title: 'Split Images for Instagram Grids and Puzzles',
        description: 'Turn one photo into an Instagram grid puzzle: the 3×3 split, preparing a square source, posting order, puzzle styles, and keeping the grid looking good.',
        readingMinutes: 12,
      },
      relatedToolSlugs: ['/image-cropper', '/image-resizer', '/gif-maker'],
    },
    {
      id: 'gif-maker-guide',
      toolSlug: '/gif-maker',
      categoryId: 'create',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'gif-maker-guide',
        title: 'GIF Maker: Complete Guide',
        description: 'Make animated GIFs from your photos: how the GIF maker works, choosing frames, timing, loop options, frame fit, colour quality, and keeping file size in check.',
        readingMinutes: 12,
      },
      relatedToolSlugs: ['/gif-compressor', '/image-splitter', '/image-collage-maker'],
    },
    {
      id: 'how-to-make-gif-from-images',
      toolSlug: '/gif-maker',
      categoryId: 'create',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-make-gif-from-images',
        title: 'How to Make a GIF from Images',
        description: 'Turn your photos into an animated GIF in minutes: gather frames, upload, order and time them, set the loop, preview, and download a share-ready GIF.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/gif-compressor', '/image-collage-maker', '/image-splitter'],
    },
    {
      id: 'gif-frame-rate-file-size',
      toolSlug: '/gif-maker',
      categoryId: 'create',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'gif-frame-rate-file-size',
        title: 'GIF Frame Rate and File Size',
        description: 'The trade-off at the heart of every GIF: how frame rate, frame count, dimensions, and colour palette decide whether your animation is smooth, small, or both.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/gif-compressor', '/image-converter', '/image-resizer'],
    },
    {
      id: 'image-collage-maker-guide',
      toolSlug: '/image-collage-maker',
      categoryId: 'create',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-collage-maker-guide',
        title: 'Photo Collage Maker: Complete Guide',
        description: 'Build photo collages in minutes: grids and strips, drag-to-swap, adjustable splits, gaps, rounded corners, background colours, and JPG or PNG export.',
        readingMinutes: 12,
      },
      relatedToolSlugs: ['/image-cropper', '/add-background-to-image', '/gif-maker'],
    },
    {
      id: 'how-to-make-photo-collage',
      toolSlug: '/image-collage-maker',
      categoryId: 'create',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-make-photo-collage',
        title: 'How to Make a Photo Collage',
        description: 'Make a photo collage in minutes: pick your photos, choose a grid or strip layout, arrange them, set gaps and background, and export a share-ready image.',
        readingMinutes: 12,
      },
      relatedToolSlugs: ['/image-cropper', '/image-resizer', '/add-text-to-image'],
    },
    {
      id: 'collage-layouts-grids-mood-boards',
      toolSlug: '/image-collage-maker',
      categoryId: 'create',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'collage-layouts-grids-mood-boards',
        title: 'Collage Layouts: Grids and Mood Boards',
        description: 'Choose the right collage layout: 2×2 and 3×3 grids, vertical and horizontal strips, mood boards, story layouts, before-and-after, and borderless collages.',
        readingMinutes: 12,
      },
      relatedToolSlugs: ['/image-cropper', '/add-background-to-image', '/image-color-palette-extractor'],
    },
    {
      id: 'image-resizer-guide',
      toolSlug: '/image-resizer',
      categoryId: 'resize',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-resizer-guide',
        title: 'What Is an Image Resizer? Complete Guide',
        description: 'Learn what an image resizer does, how pixel and percentage resizing work, when to lock the aspect ratio, and how to pick the right size for web and social.',
        readingMinutes: 12,
      },
      relatedToolSlugs: ['/bulk-image-resizer', '/image-cropper', '/compress-image-to-100kb', '/image-dimensions-checker'],
    },
    {
      id: 'how-to-resize-image',
      toolSlug: '/image-resizer',
      categoryId: 'resize',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-resize-image',
        title: 'How to Resize an Image Online',
        description: 'Resize an image online in minutes: upload, pick pixels or percentage, lock the aspect ratio, choose a preset, set quality, and download.',
        readingMinutes: 12,
      },
      relatedToolSlugs: ['/bulk-image-resizer', '/image-cropper', '/image-converter'],
    },
    {
      id: 'resize-vs-compress-image',
      toolSlug: '/image-resizer',
      categoryId: 'resize',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'resize-vs-compress-image',
        title: 'Resize vs Compress: What Is the Difference?',
        description: 'Resize changes pixel dimensions; compress changes how pixels are stored. What each one does, when to use each, and why doing both gives the smallest file.',
        readingMinutes: 12,
      },
      relatedToolSlugs: ['/', '/bulk-image-compressor', '/web-image-optimizer'],
    },
    {
      id: 'bulk-image-resizer-guide',
      toolSlug: '/bulk-image-resizer',
      categoryId: 'resize',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'bulk-image-resizer-guide',
        title: 'Bulk Image Resizer: Complete Guide',
        description: 'Resize dozens of images at once: Fit Max, Uniform Width, Exact pixels, and Percentage modes, no-upscale protection, presets, and one-click ZIP download.',
        readingMinutes: 12,
      },
      relatedToolSlugs: ['/image-resizer', '/bulk-image-compressor', '/bulk-image-converter', '/web-image-optimizer'],
    },
    {
      id: 'how-to-resize-multiple-images',
      toolSlug: '/bulk-image-resizer',
      categoryId: 'resize',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-resize-multiple-images',
        title: 'How to Resize Multiple Images at Once',
        description: 'Resize multiple images at once: drop a batch in, pick Fit Max, Uniform Width, Exact, or Percentage, set a preset, check the results, and download one ZIP.',
        readingMinutes: 12,
      },
      relatedToolSlugs: ['/image-resizer', '/bulk-image-compressor', '/image-converter'],
    },
    {
      id: 'bulk-resize-presets-social-ecommerce-print',
      toolSlug: '/bulk-image-resizer',
      categoryId: 'resize',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'bulk-resize-presets-social-ecommerce-print',
        title: 'Bulk Resize Presets: Social and Print',
        description: 'Pick the right bulk resize preset for each destination: social sizes, e-commerce squares, thumbnails, Full HD, and print — plus when to use a custom size.',
        readingMinutes: 12,
      },
      relatedToolSlugs: ['/image-resizer', '/bulk-image-converter', '/web-image-optimizer', '/image-cropper'],
    },
    {
      id: 'image-metadata-viewer-guide',
      toolSlug: '/image-metadata-viewer',
      categoryId: 'privacy',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'image-metadata-viewer-guide',
        title: 'Image Metadata Viewer: Complete Guide',
        description: 'Learn what an image metadata viewer shows, from EXIF camera settings and GPS coordinates to PNG and WebP chunks, and how to inspect any photo privately.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/remove-image-metadata', '/image-dimensions-checker', '/image-to-base64', '/image-converter'],
    },
    {
      id: 'how-to-view-image-metadata',
      toolSlug: '/image-metadata-viewer',
      categoryId: 'privacy',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-view-image-metadata',
        title: 'How to View Image Metadata',
        description: 'Step-by-step guide to viewing image metadata: open a photo in the viewer, read EXIF and GPS fields, export a JSON report, and verify a cleaned file.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/remove-image-metadata', '/image-dimensions-checker', '/image-to-base64', '/image-converter'],
    },
    {
      id: 'exif-data-explained',
      toolSlug: '/image-metadata-viewer',
      categoryId: 'privacy',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'exif-data-explained',
        title: 'EXIF Data Explained: What Your Photos Reveal',
        description: 'A deep look at EXIF data: how cameras write it, which fields reveal your location and habits, how apps strip it, and how to read and remove it safely.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/remove-image-metadata', '/image-dimensions-checker', '/image-to-base64', '/image-converter'],
    },
    {
      id: 'remove-image-metadata-guide',
      toolSlug: '/remove-image-metadata',
      categoryId: 'privacy',
      type: 'guide',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'remove-image-metadata-guide',
        title: 'Remove Image Metadata: Complete Guide',
        description: 'Learn how to remove image metadata safely: what gets stripped, lossless vs canvas re-encode, batch cleaning, ZIP export, and how to verify a clean file.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-metadata-viewer', '/image-converter', '/image-to-pdf', '/image-cropper'],
    },
    {
      id: 'how-to-remove-metadata-from-image',
      toolSlug: '/remove-image-metadata',
      categoryId: 'privacy',
      type: 'howto',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'how-to-remove-metadata-from-image',
        title: 'How to Remove Metadata from an Image',
        description: 'Step-by-step guide to removing metadata from an image: upload, strip EXIF and GPS, choose the right method, download clean files, and verify the result.',
        readingMinutes: 10,
      },
      relatedToolSlugs: ['/image-metadata-viewer', '/image-converter', '/image-to-pdf', '/image-cropper'],
    },
    {
      id: 'photo-privacy-gps-exif-risks',
      toolSlug: '/remove-image-metadata',
      categoryId: 'privacy',
      type: 'advanced',
      status: 'published',
      publishedAt: '2026-11-17',
      en: {
        slug: 'photo-privacy-gps-exif-risks',
        title: 'Photo Privacy: GPS, EXIF and Metadata Risks',
        description: 'What GPS coordinates, EXIF data, and hidden metadata in your photos can reveal — and the steps that stop your pictures leaking your location and routine.',
        readingMinutes: 11,
      },
      relatedToolSlugs: ['/image-metadata-viewer', '/image-converter', '/image-cropper', '/image-to-base64'],
    },
];

// --- Route resolution (EN paths only; parsePath normalizes first) ---

/** Localized category slug -> category id (also accepts the EN id). */
export function resolveBlogCategorySlug(lang: SupportedLang, slug: string): ToolCategoryId | null {
  const map = BLOG_CATEGORY_SLUGS[lang] ?? BLOG_CATEGORY_SLUGS.en;
  for (const [id, localized] of Object.entries(map)) {
    if (localized === slug) return id as ToolCategoryId;
  }
  if (slug === 'compress' || slug === 'resize' || slug === 'convert' || slug === 'crop-edit' || slug === 'create' || slug === 'privacy' || slug === 'developer') {
    return slug as ToolCategoryId;
  }
  return null;
}

/** True for any EN blog path (home, category hub, article). */
export function isBlogEnPath(enPath: string): boolean {
  return enPath === '/blog' || enPath.startsWith('/blog/');
}

/**
 * Resolve an EN blog path to its route. Articles resolve ONLY when
 * published (drafts and unknown slugs return null -> 404). Category hubs
 * resolve only for the 8 known categories.
 */
export function resolveBlogRoute(enPath: string): BlogRoute | null {
  if (enPath === '/blog') return { kind: 'home' };
  if (enPath.startsWith('/blog/category/')) {
    const slug = enPath.slice('/blog/category/'.length);
    if (!slug || slug.includes('/')) return null;
    const categoryId = resolveBlogCategorySlug('en', slug);
    return categoryId ? { kind: 'category', categoryId } : null;
  }
  if (enPath.startsWith('/blog/')) {
    const slug = enPath.slice('/blog/'.length);
    if (!slug || slug.includes('/')) return null;
    const article = BLOG_ARTICLES.find(
      (a) => a.status === 'published' && a.en.slug === slug,
    );
    return article ? { kind: 'article', articleId: article.id } : null;
  }
  return null;
}

// --- URLs (trailing slash, same-language) ---

export function getBlogHomeUrl(lang: SupportedLang): string {
  return lang === 'en' ? '/blog/' : `/${lang}/blog/`;
}

export function getBlogCategoryUrl(categoryId: ToolCategoryId, lang: SupportedLang): string {
  const slug = BLOG_CATEGORY_SLUGS[lang]?.[categoryId] ?? categoryId;
  return lang === 'en' ? `/blog/category/${slug}/` : `/${lang}/blog/category/${slug}/`;
}

/** Localized article URL. Falls back to the EN URL when the article has no
 *  slugs.ts entry in that language (i.e. not published there yet) — callers
 *  must check isBlogArticlePublishedIn() first and link to the blog home
 *  instead when it returns false. */
export function getBlogArticleUrl(article: BlogArticleMeta, lang: SupportedLang): string {
  if (lang === 'en') return `/blog/${article.en.slug}/`;
  const localizedPath = PATH_BY_EN_BY_LANG[lang]?.[`/blog/${article.en.slug}`];
  return localizedPath ? withTrailingSlash(localizedPath) : `/blog/${article.en.slug}/`;
}

/** Published in this language = status published AND a slugs.ts entry
 *  exists for it (the slug map is the single source of truth). */
export function isBlogArticlePublishedIn(article: BlogArticleMeta, lang: SupportedLang): boolean {
  if (article.status !== 'published') return false;
  if (lang === 'en') return true;
  return Boolean(PATH_BY_EN_BY_LANG[lang]?.[`/blog/${article.en.slug}`]);
}

// --- Version resolution (EN + locale override) ---

/** Localized slug for an article (EN slug when no translation exists). */
export function getBlogArticleSlug(article: BlogArticleMeta, lang: SupportedLang): string {
  if (lang === 'en') return article.en.slug;
  const localizedPath = PATH_BY_EN_BY_LANG[lang]?.[`/blog/${article.en.slug}`];
  if (!localizedPath) return article.en.slug;
  const parts = localizedPath.split('/').filter(Boolean);
  return parts.length > 0 ? parts[parts.length - 1] : article.en.slug;
}

/** The version to render in `lang`: the locale override layered over EN
 *  (missing override -> EN content with the localized slug).
 *  Bodies + FAQs no longer live in the registry (Tier B speed fix): the EN
 *  body comes from `enBody` (src/data/blogBody.ts — preloaded by main.tsx
 *  on article routes, loaded on demand elsewhere), and the LOCALE body
 *  comes from `localeBody` (same module — preloaded the same way; perf
 *  split 2026-11-19). Callers that only need title/description/
 *  readingMinutes (cards, search, SEO titles) may omit both; they get an
 *  empty body, which they must not render. */
export function getBlogArticleVersion(
  article: BlogArticleMeta,
  lang: SupportedLang,
  overrides: Record<string, BlogArticleLocaleOverride> = {},
  enBody?: BlogBodyData,
  localeBody?: BlogBodyData,
): BlogArticleLocaleVersion {
  const base = article.en;
  const slug = getBlogArticleSlug(article, lang);
  if (lang === 'en') {
    return {
      slug,
      title: base.title,
      description: base.description,
      body: enBody?.body ?? '',
      faqs: enBody?.faqs ?? [],
      readingMinutes: base.readingMinutes,
    };
  }
  const o = overrides[article.id];
  if (!o) {
    return {
      slug,
      title: base.title,
      description: base.description,
      body: enBody?.body ?? '',
      faqs: enBody?.faqs ?? [],
      readingMinutes: base.readingMinutes,
    };
  }
  return {
    slug,
    title: o.title,
    description: o.description,
    body: localeBody?.body ?? enBody?.body ?? '',
    faqs: localeBody?.faqs ?? enBody?.faqs ?? [],
    readingMinutes: o.readingMinutes,
  };
}

// --- Queries ---

export function getAllBlogArticles(): BlogArticleMeta[] {
  return [...BLOG_ARTICLES];
}

export function getPublishedBlogArticles(lang: SupportedLang = 'en'): BlogArticleMeta[] {
  return BLOG_ARTICLES.filter((a) => isBlogArticlePublishedIn(a, lang));
}

export function getBlogArticleById(id: string): BlogArticleMeta | undefined {
  return BLOG_ARTICLES.find((a) => a.id === id);
}

export function getBlogArticleBySlug(enSlug: string): BlogArticleMeta | undefined {
  return BLOG_ARTICLES.find((a) => a.en.slug === enSlug);
}

const TYPE_ORDER: Record<BlogArticleMeta['type'], number> = { guide: 0, howto: 1, advanced: 2 };

/** A tool's articles in type order (guide -> how-to -> advanced). */
export function getBlogArticlesForTool(toolSlug: string, lang: SupportedLang = 'en'): BlogArticleMeta[] {
  return BLOG_ARTICLES.filter(
    (a) => a.toolSlug === toolSlug && isBlogArticlePublishedIn(a, lang),
  ).sort((a, b) => TYPE_ORDER[a.type] - TYPE_ORDER[b.type]);
}

/** A category's articles, newest first. */
export function getBlogArticlesForCategory(
  categoryId: ToolCategoryId,
  lang: SupportedLang = 'en',
): BlogArticleMeta[] {
  return BLOG_ARTICLES.filter(
    (a) => a.categoryId === categoryId && isBlogArticlePublishedIn(a, lang),
  ).sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

/** Related articles: same-tool siblings first, then same-category fallback. */
export function getRelatedBlogArticles(
  article: BlogArticleMeta,
  lang: SupportedLang = 'en',
  limit = 4,
): BlogArticleMeta[] {
  const siblings = getBlogArticlesForTool(article.toolSlug, lang).filter(
    (a) => a.id !== article.id,
  );
  const out: BlogArticleMeta[] = [...siblings];
  if (out.length < limit) {
    const sameCategory = getBlogArticlesForCategory(article.categoryId, lang).filter(
      (a) => a.id !== article.id && !out.some((o) => o.id === a.id),
    );
    out.push(...sameCategory);
  }
  return out.slice(0, limit);
}

/** Previous / next article within the same tool (type order), same language. */
export function getBlogArticlePrevNext(
  article: BlogArticleMeta,
  lang: SupportedLang = 'en',
): { prev: BlogArticleMeta | null; next: BlogArticleMeta | null } {
  const list = getBlogArticlesForTool(article.toolSlug, lang);
  const idx = list.findIndex((a) => a.id === article.id);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? list[idx - 1] : null,
    next: idx < list.length - 1 ? list[idx + 1] : null,
  };
}

/** Reading time at 200 wpm, minimum 1 minute. */
export function readingMinutesForBody(body: string): number {
  const text = body.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text ? text.split(' ').length : 0;
  return Math.max(1, Math.round(words / 200));
}

// --- Hreflang (published locales only, via the slug maps) ---

export function getBlogHomeAlternates(): HreflangAlternate[] {
  return getAlternates('/blog');
}

export function getBlogCategoryAlternates(categoryId: ToolCategoryId): HreflangAlternate[] {
  return getAlternates(`/blog/category/${categoryId}`);
}

export function getBlogArticleAlternates(article: BlogArticleMeta): HreflangAlternate[] {
  return getAlternates(`/blog/${article.en.slug}`);
}
