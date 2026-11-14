/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef, Suspense } from 'react';
import { MessageCircle, FileImage, Zap } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UploadZone } from './components/UploadZone';
import { CompressionControls } from './components/CompressionControls';
import { ResultsList } from './components/ResultsList';
import { ComparisonModal } from './components/ComparisonModal';
import { EducationalContent, HOW_IT_WORKS_STEPS } from './components/EducationalContent';
import { FaqSection, FAQ_DATA } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ShareSection } from './components/ShareSection';
import { AdSlot } from './components/AdSlot';
import { ToolsDirectorySection } from './components/ToolsDirectorySection';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { GuideWhatsAppPage } from './pages/GuideWhatsAppPage';
import { GuideFormatsPage } from './pages/GuideFormatsPage';
import { Guide100kbPage } from './pages/Guide100kbPage';
import { ImageResizerPage } from './pages/ImageResizerPage';
import { ImageConverterPage } from './pages/ImageConverterPage';
import { RotateFlipPage } from './pages/RotateFlipPage';
import { ImageToPdfPage } from './pages/ImageToPdfPage';
import { MetadataViewerPage } from './pages/MetadataViewerPage';
import { RemoveMetadataPage } from './pages/RemoveMetadataPage';
import { FaviconGeneratorPage } from './pages/FaviconGeneratorPage';
import { ColorPickerPage } from './pages/ColorPickerPage';
import { DimensionsCheckerPage } from './pages/DimensionsCheckerPage';
import { ImageCropperPage } from './pages/ImageCropperPage';
import { ImageWatermarkPage } from './pages/ImageWatermarkPage';
import { BlurPixelatePage } from './pages/BlurPixelatePage';
import { AddTextPage } from './pages/AddTextPage';
import { ImageBorderPage } from './pages/ImageBorderPage';
import { RoundCornersPage } from './pages/RoundCornersPage';
import { BrightnessEditorPage } from './pages/BrightnessEditorPage';
import { ContrastEditorPage } from './pages/ContrastEditorPage';
import { SaturationEditorPage } from './pages/SaturationEditorPage';
import { ImageFiltersPage } from './pages/ImageFiltersPage';
import { AddBackgroundPage } from './pages/AddBackgroundPage';
import { ImageSplitterPage } from './pages/ImageSplitterPage';
import { DpiChangerPage } from './pages/DpiChangerPage';
import { ImageToBase64Page } from './pages/ImageToBase64Page';
import { Base64ToImagePage } from './pages/Base64ToImagePage';
import { PaletteExtractorPage } from './pages/PaletteExtractorPage';
import { GifMakerPage } from './pages/GifMakerPage';
import { CollageMakerPage } from './pages/CollageMakerPage';
import { Compress50KbPage } from './pages/Compress50KbPage';
import { Compress100KbPage } from './pages/Compress100KbPage';
import { Compress200KbPage } from './pages/Compress200KbPage';
import { Compress500KbPage } from './pages/Compress500KbPage';
import { BulkCompressorPage } from './pages/BulkCompressorPage';
import { TargetFileSizePage } from './pages/TargetFileSizePage';
import { BulkResizerPage } from './pages/BulkResizerPage';
import { BulkConverterPage } from './pages/BulkConverterPage';
import { WebOptimizerPage } from './pages/WebOptimizerPage';
import { GifCompressorPage } from './pages/GifCompressorPage';
import { HeicToJpgPage } from './pages/HeicToJpgPage';
import { JpgToPngPage } from './pages/JpgToPngPage';
import { PngToJpgPage } from './pages/PngToJpgPage';
import { JpgToWebpPage } from './pages/JpgToWebpPage';
import { WebpToJpgPage } from './pages/WebpToJpgPage';
import { PngToWebpPage } from './pages/PngToWebpPage';
import { WebpToPngPage } from './pages/WebpToPngPage';
import { SvgToPngPage } from './pages/SvgToPngPage';
import { AvifToJpgPage } from './pages/AvifToJpgPage';
import { BmpToJpgPage } from './pages/BmpToJpgPage';
import { TOOL_BY_SLUG, TOOLS_REGISTRY, TOOL_CATEGORIES } from './data/tools';
import { SUPPORTED_LANGS, LANG_STORAGE_KEY, type SupportedLang } from './locales/config';
import { ES_PATH_BY_EN, EN_PATH_BY_ES, ES_HOME_ALIAS, ES_ALL_TOOLS_PATH } from './locales/es/slugs';
import { PT_PATH_BY_EN, EN_PATH_BY_PT, PT_HOME_ALIAS, PT_ALL_TOOLS_PATH } from './locales/pt/slugs';
import { FR_PATH_BY_EN, EN_PATH_BY_FR, FR_HOME_ALIAS, FR_ALL_TOOLS_PATH } from './locales/fr/slugs';
import { DE_PATH_BY_EN, EN_PATH_BY_DE, DE_HOME_ALIAS, DE_ALL_TOOLS_PATH } from './locales/de/slugs';
import { IT_PATH_BY_EN, EN_PATH_BY_IT, IT_HOME_ALIAS, IT_ALL_TOOLS_PATH } from './locales/it/slugs';
import { ID_PATH_BY_EN, EN_PATH_BY_ID, ID_HOME_ALIAS, ID_ALL_TOOLS_PATH } from './locales/id/slugs';
import { RU_PATH_BY_EN, EN_PATH_BY_RU, RU_HOME_ALIAS, RU_ALL_TOOLS_PATH } from './locales/ru/slugs';
import { JA_PATH_BY_EN, EN_PATH_BY_JA, JA_HOME_ALIAS, JA_ALL_TOOLS_PATH } from './locales/ja/slugs';
import { KO_PATH_BY_EN, EN_PATH_BY_KO, KO_HOME_ALIAS, KO_ALL_TOOLS_PATH } from './locales/ko/slugs';
import { ZH_PATH_BY_EN, EN_PATH_BY_ZH, ZH_HOME_ALIAS, ZH_ALL_TOOLS_PATH } from './locales/zh/slugs';
import { getAlternates, getOgLocale, getOgLocaleAlternates } from './locales/alternates';
import { AboutPageEs } from './pages/es/AboutPageEs';
import { ContactPageEs } from './pages/es/ContactPageEs';
import { PrivacyPageEs } from './pages/es/PrivacyPageEs';
import { TermsPageEs } from './pages/es/TermsPageEs';
import { AllToolsPageEs } from './pages/es/AllToolsPageEs';
import { GuideWhatsAppPageEs } from './pages/es/GuideWhatsAppPageEs';
import { GuideFormatsPageEs } from './pages/es/GuideFormatsPageEs';
import { Guide100kbPageEs } from './pages/es/Guide100kbPageEs';
import { AboutPagePt } from './pages/pt/AboutPagePt';
import { ContactPagePt } from './pages/pt/ContactPagePt';
import { PrivacyPagePt } from './pages/pt/PrivacyPagePt';
import { TermsPagePt } from './pages/pt/TermsPagePt';
import { AllToolsPagePt } from './pages/pt/AllToolsPagePt';
import { GuideWhatsAppPagePt } from './pages/pt/GuideWhatsAppPagePt';
import { GuideFormatsPagePt } from './pages/pt/GuideFormatsPagePt';
import { Guide100kbPagePt } from './pages/pt/Guide100kbPagePt';
import { AboutPageFr } from './pages/fr/AboutPageFr';
import { ContactPageFr } from './pages/fr/ContactPageFr';
import { PrivacyPageFr } from './pages/fr/PrivacyPageFr';
import { TermsPageFr } from './pages/fr/TermsPageFr';
import { AllToolsPageFr } from './pages/fr/AllToolsPageFr';
import { GuideWhatsAppPageFr } from './pages/fr/GuideWhatsAppPageFr';
import { GuideFormatsPageFr } from './pages/fr/GuideFormatsPageFr';
import { Guide100kbPageFr } from './pages/fr/Guide100kbPageFr';
import { AboutPageDe } from './pages/de/AboutPageDe';
import { ContactPageDe } from './pages/de/ContactPageDe';
import { PrivacyPageDe } from './pages/de/PrivacyPageDe';
import { TermsPageDe } from './pages/de/TermsPageDe';
import { AllToolsPageDe } from './pages/de/AllToolsPageDe';
import { GuideWhatsAppPageDe } from './pages/de/GuideWhatsAppPageDe';
import { GuideFormatsPageDe } from './pages/de/GuideFormatsPageDe';
import { Guide100kbPageDe } from './pages/de/Guide100kbPageDe';
import { AboutPageIt } from './pages/it/AboutPageIt';
import { ContactPageIt } from './pages/it/ContactPageIt';
import { PrivacyPageIt } from './pages/it/PrivacyPageIt';
import { TermsPageIt } from './pages/it/TermsPageIt';
import { AllToolsPageIt } from './pages/it/AllToolsPageIt';
import { GuideWhatsAppPageIt } from './pages/it/GuideWhatsAppPageIt';
import { GuideFormatsPageIt } from './pages/it/GuideFormatsPageIt';
import { Guide100kbPageIt } from './pages/it/Guide100kbPageIt';
import { AboutPageId } from './pages/id/AboutPageId';
import { ContactPageId } from './pages/id/ContactPageId';
import { PrivacyPageId } from './pages/id/PrivacyPageId';
import { TermsPageId } from './pages/id/TermsPageId';
import { AllToolsPageId } from './pages/id/AllToolsPageId';
import { GuideWhatsAppPageId } from './pages/id/GuideWhatsAppPageId';
import { GuideFormatsPageId } from './pages/id/GuideFormatsPageId';
import { Guide100kbPageId } from './pages/id/Guide100kbPageId';
import { AboutPageRu } from './pages/ru/AboutPageRu';
import { ContactPageRu } from './pages/ru/ContactPageRu';
import { PrivacyPageRu } from './pages/ru/PrivacyPageRu';
import { TermsPageRu } from './pages/ru/TermsPageRu';
import { AllToolsPageRu } from './pages/ru/AllToolsPageRu';
import { GuideWhatsAppPageRu } from './pages/ru/GuideWhatsAppPageRu';
import { GuideFormatsPageRu } from './pages/ru/GuideFormatsPageRu';
import { Guide100kbPageRu } from './pages/ru/Guide100kbPageRu';
import { AboutPageJa } from './pages/ja/AboutPageJa';
import { ContactPageJa } from './pages/ja/ContactPageJa';
import { PrivacyPageJa } from './pages/ja/PrivacyPageJa';
import { TermsPageJa } from './pages/ja/TermsPageJa';
import { AllToolsPageJa } from './pages/ja/AllToolsPageJa';
import { GuideWhatsAppPageJa } from './pages/ja/GuideWhatsAppPageJa';
import { GuideFormatsPageJa } from './pages/ja/GuideFormatsPageJa';
import { Guide100kbPageJa } from './pages/ja/Guide100kbPageJa';
import { AboutPageKo } from './pages/ko/AboutPageKo';
import { ContactPageKo } from './pages/ko/ContactPageKo';
import { PrivacyPageKo } from './pages/ko/PrivacyPageKo';
import { TermsPageKo } from './pages/ko/TermsPageKo';
import { AllToolsPageKo } from './pages/ko/AllToolsPageKo';
import { GuideWhatsAppPageKo } from './pages/ko/GuideWhatsAppPageKo';
import { GuideFormatsPageKo } from './pages/ko/GuideFormatsPageKo';
import { Guide100kbPageKo } from './pages/ko/Guide100kbPageKo';
import { AboutPageZh } from './pages/zh/AboutPageZh';
import { ContactPageZh } from './pages/zh/ContactPageZh';
import { PrivacyPageZh } from './pages/zh/PrivacyPageZh';
import { TermsPageZh } from './pages/zh/TermsPageZh';
import { AllToolsPageZh } from './pages/zh/AllToolsPageZh';
import { GuideWhatsAppPageZh } from './pages/zh/GuideWhatsAppPageZh';
import { GuideFormatsPageZh } from './pages/zh/GuideFormatsPageZh';
import { Guide100kbPageZh } from './pages/zh/Guide100kbPageZh';

const RemoveBackgroundPage = React.lazy(() =>
  import('./pages/RemoveBackgroundPage').then((m) => ({ default: m.RemoveBackgroundPage }))
);
import { CompressionSettings, ImageFormat, ImageItem } from './types';
import { compressSingleImage, detectTransparency, loadImageFromFile, toDecodableBlob } from './utils/compressor';
import { getFileExtension } from './utils/formatters';
import { createZipArchive, triggerDownload } from './utils/zip';

const KNOWN_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/guides/compress-images-for-whatsapp',
  '/guides/jpg-vs-png-vs-webp',
  '/guides/reduce-image-size-to-100kb',
  '/image-resizer',
  '/image-converter',
  '/rotate-flip-image',
  '/image-to-pdf',
  '/image-metadata-viewer',
  '/remove-image-metadata',
  '/favicon-generator',
  '/image-color-picker',
  '/image-dimensions-checker',
  '/image-cropper',
  '/image-watermark',
  '/blur-pixelate-image',
  '/add-text-to-image',
  '/image-border-generator',
  '/round-image-corners',
  '/image-brightness-editor',
  '/image-contrast-editor',
  '/image-saturation-editor',
  '/image-filters',
  '/add-background-to-image',
  '/image-splitter',
  '/image-dpi-changer',
  '/image-to-base64',
  '/base64-to-image',
  '/image-color-palette-extractor',
  '/gif-maker',
  '/image-collage-maker',
  '/compress-image-to-50kb',
  '/compress-image-to-100kb',
  '/compress-image-to-200kb',
  '/compress-image-to-500kb',
  '/bulk-image-compressor',
  '/target-file-size-compressor',
  '/bulk-image-resizer',
  '/bulk-image-converter',
  '/web-image-optimizer',
  '/gif-compressor',
  '/heic-to-jpg',
  '/jpg-to-png',
  '/png-to-jpg',
  '/jpg-to-webp',
  '/webp-to-jpg',
  '/png-to-webp',
  '/webp-to-png',
  '/svg-to-png',
  '/avif-to-jpg',
  '/bmp-to-jpg',
  '/remove-background',
];

interface ParsedPath { path: string; lang: SupportedLang; }

function parsePath(rawPathname: string): ParsedPath {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  let p = rawPathname.toLowerCase();
  if (base && base !== '/' && p.startsWith(base.toLowerCase())) {
    p = p.slice(base.length) || '/';
  }
  p = p.replace(/\/$/, '') || '/';

  // Spanish prefix: /es/<spanish-slug>
  if (p === '/es' || p.startsWith('/es/')) {
    const rest = p === '/es' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'es' };
    if (rest === ES_HOME_ALIAS.slice(3)) return { path: '/', lang: 'es' }; // /es/comprimir-imagenes → /es/
    if (rest === ES_ALL_TOOLS_PATH.slice(3)) return { path: ES_ALL_TOOLS_PATH, lang: 'es' };
    const enPath = EN_PATH_BY_ES[p]; // keys carry the '/es' prefix (see slug map)
    if (enPath && KNOWN_ROUTES.includes(enPath)) return { path: enPath, lang: 'es' };
    return { path: '/', lang: 'es' }; // unknown Spanish path → Spanish home
  }
  // Portuguese prefix: /pt/<portuguese-slug>
  if (p === '/pt' || p.startsWith('/pt/')) {
    const rest = p === '/pt' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'pt' };
    if (rest === PT_HOME_ALIAS.slice(3)) return { path: '/', lang: 'pt' }; // /pt/comprimir-imagens → /pt/
    if (rest === PT_ALL_TOOLS_PATH.slice(3)) return { path: PT_ALL_TOOLS_PATH, lang: 'pt' };
    const enPath = EN_PATH_BY_PT[p]; // keys carry the '/pt' prefix (see slug map)
    if (enPath && KNOWN_ROUTES.includes(enPath)) return { path: enPath, lang: 'pt' };
    return { path: '/', lang: 'pt' }; // unknown Portuguese path → Portuguese home
  }
  // French prefix: /fr/<french-slug>
  if (p === '/fr' || p.startsWith('/fr/')) {
    const rest = p === '/fr' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'fr' };
    if (rest === FR_HOME_ALIAS.slice(3)) return { path: '/', lang: 'fr' }; // /fr/compresser-images → /fr/
    if (rest === FR_ALL_TOOLS_PATH.slice(3)) return { path: FR_ALL_TOOLS_PATH, lang: 'fr' };
    const enPath = EN_PATH_BY_FR[p]; // keys carry the '/fr' prefix (see slug map)
    if (enPath && KNOWN_ROUTES.includes(enPath)) return { path: enPath, lang: 'fr' };
    return { path: '/', lang: 'fr' }; // unknown French path → French home
  }
  // German prefix: /de/<german-slug>
  if (p === '/de' || p.startsWith('/de/')) {
    const rest = p === '/de' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'de' };
    if (rest === DE_HOME_ALIAS.slice(3)) return { path: '/', lang: 'de' }; // /de/bilder-komprimieren → /de/
    if (rest === DE_ALL_TOOLS_PATH.slice(3)) return { path: DE_ALL_TOOLS_PATH, lang: 'de' };
    const enPath = EN_PATH_BY_DE[p]; // keys carry the '/de' prefix (see slug map)
    if (enPath && KNOWN_ROUTES.includes(enPath)) return { path: enPath, lang: 'de' };
    return { path: '/', lang: 'de' }; // unknown German path → German home
  }
  // Italian prefix: /it/<italian-slug>
  if (p === '/it' || p.startsWith('/it/')) {
    const rest = p === '/it' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'it' };
    if (rest === IT_HOME_ALIAS.slice(3)) return { path: '/', lang: 'it' }; // /it/comprimere-immagini → /it/
    if (rest === IT_ALL_TOOLS_PATH.slice(3)) return { path: IT_ALL_TOOLS_PATH, lang: 'it' };
    const enPath = EN_PATH_BY_IT[p]; // keys carry the '/it' prefix (see slug map)
    if (enPath && KNOWN_ROUTES.includes(enPath)) return { path: enPath, lang: 'it' };
    return { path: '/', lang: 'it' }; // unknown Italian path → Italian home
  }
  // Indonesian prefix: /id/<indonesian-slug>
  if (p === '/id' || p.startsWith('/id/')) {
    const rest = p === '/id' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'id' };
    if (rest === ID_HOME_ALIAS.slice(3)) return { path: '/', lang: 'id' }; // /id/kompres-gambar → /id/
    if (rest === ID_ALL_TOOLS_PATH.slice(3)) return { path: ID_ALL_TOOLS_PATH, lang: 'id' };
    const enPath = EN_PATH_BY_ID[p]; // keys carry the '/id' prefix (see slug map)
    if (enPath && KNOWN_ROUTES.includes(enPath)) return { path: enPath, lang: 'id' };
    return { path: '/', lang: 'id' }; // unknown Indonesian path → Indonesian home
  }
  // Russian prefix: /ru/<russian-slug>
  if (p === '/ru' || p.startsWith('/ru/')) {
    const rest = p === '/ru' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'ru' };
    if (rest === RU_HOME_ALIAS.slice(3)) return { path: '/', lang: 'ru' }; // /ru/szhat-izobrazhenie → /ru/
    if (rest === RU_ALL_TOOLS_PATH.slice(3)) return { path: RU_ALL_TOOLS_PATH, lang: 'ru' };
    const enPath = EN_PATH_BY_RU[p]; // keys carry the '/ru' prefix (see slug map)
    if (enPath && KNOWN_ROUTES.includes(enPath)) return { path: enPath, lang: 'ru' };
    return { path: '/', lang: 'ru' }; // unknown Russian path → Russian home
  }
  // Japanese prefix: /ja/<japanese-slug>
  if (p === '/ja' || p.startsWith('/ja/')) {
    const rest = p === '/ja' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'ja' };
    if (rest === JA_HOME_ALIAS.slice(3)) return { path: '/', lang: 'ja' }; // /ja/gazo-asshuku → /ja/
    if (rest === JA_ALL_TOOLS_PATH.slice(3)) return { path: JA_ALL_TOOLS_PATH, lang: 'ja' };
    const enPath = EN_PATH_BY_JA[p]; // keys carry the '/ja' prefix (see slug map)
    if (enPath && KNOWN_ROUTES.includes(enPath)) return { path: enPath, lang: 'ja' };
    return { path: '/', lang: 'ja' }; // unknown Japanese path → Japanese home
  }
  // Korean prefix: /ko/<korean-slug>
  if (p === '/ko' || p.startsWith('/ko/')) {
    const rest = p === '/ko' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'ko' };
    if (rest === KO_HOME_ALIAS.slice(3)) return { path: '/', lang: 'ko' }; // /ko/imiji-apchuk → /ko/
    if (rest === KO_ALL_TOOLS_PATH.slice(3)) return { path: KO_ALL_TOOLS_PATH, lang: 'ko' };
    const enPath = EN_PATH_BY_KO[p]; // keys carry the '/ko' prefix (see slug map)
    if (enPath && KNOWN_ROUTES.includes(enPath)) return { path: enPath, lang: 'ko' };
    return { path: '/', lang: 'ko' }; // unknown Korean path → Korean home
  }
  // Chinese prefix: /zh/<chinese-slug>
  if (p === '/zh' || p.startsWith('/zh/')) {
    const rest = p === '/zh' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'zh' };
    if (rest === ZH_HOME_ALIAS.slice(3)) return { path: '/', lang: 'zh' }; // /zh/yasuo-tupian → /zh/
    if (rest === ZH_ALL_TOOLS_PATH.slice(3)) return { path: ZH_ALL_TOOLS_PATH, lang: 'zh' };
    const enPath = EN_PATH_BY_ZH[p]; // keys carry the '/zh' prefix (see slug map)
    if (enPath && KNOWN_ROUTES.includes(enPath)) return { path: enPath, lang: 'zh' };
    return { path: '/', lang: 'zh' }; // unknown Chinese path → Chinese home
  }
  return KNOWN_ROUTES.includes(p) ? { path: p, lang: 'en' } : { path: '/', lang: 'en' };
}

/** English path → the equivalent path in `lang` (identity for 'en').
 * `enPath` may also be an already-localized tool-directory path (the router
 * stores the directory route under its localized key); directory paths map
 * across languages instead of falling through to the slug maps. */
function toLocalizedPath(enPath: string, lang: SupportedLang): string {
  if (lang === 'en') return enPath;
  if (enPath === '/') return `/${lang}/`;
  if (
    enPath === ES_ALL_TOOLS_PATH ||
    enPath === PT_ALL_TOOLS_PATH ||
    enPath === FR_ALL_TOOLS_PATH ||
    enPath === DE_ALL_TOOLS_PATH ||
    enPath === IT_ALL_TOOLS_PATH ||
    enPath === ID_ALL_TOOLS_PATH ||
    enPath === RU_ALL_TOOLS_PATH ||
    enPath === JA_ALL_TOOLS_PATH ||
    enPath === KO_ALL_TOOLS_PATH ||
    enPath === ZH_ALL_TOOLS_PATH
  ) {
    return lang === 'es'
      ? ES_ALL_TOOLS_PATH
      : lang === 'pt'
        ? PT_ALL_TOOLS_PATH
        : lang === 'fr'
          ? FR_ALL_TOOLS_PATH
          : lang === 'de'
            ? DE_ALL_TOOLS_PATH
            : lang === 'it'
              ? IT_ALL_TOOLS_PATH
              : lang === 'id'
                ? ID_ALL_TOOLS_PATH
                : lang === 'ja'
                  ? JA_ALL_TOOLS_PATH
                  : lang === 'ko'
                    ? KO_ALL_TOOLS_PATH
                    : lang === 'zh'
                      ? ZH_ALL_TOOLS_PATH
                      : RU_ALL_TOOLS_PATH;
  }
  if (lang === 'es') return ES_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'pt') return PT_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'fr') return FR_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'de') return DE_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'it') return IT_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'id') return ID_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'ru') return RU_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'ja') return JA_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'ko') return KO_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'zh') return ZH_PATH_BY_EN[enPath] ?? enPath;
  return enPath;
}

function withBasePath(routePath: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (!base || base === '/') return routePath;
  return `${base}${routePath === '/' ? '/' : routePath}`;
}

interface EsLocale {
  ui: typeof import('./locales/es/ui').ES;
  tools: typeof import('./locales/es/tools').TOOL_BY_SLUG_ES;
  categories: typeof import('./locales/es/tools').TOOL_CATEGORIES_ES;
  toolUi: typeof import('./locales/es/ui').TOOL_UI_ES;
}

interface PtLocale {
  ui: typeof import('./locales/pt/ui').PT;
  tools: typeof import('./locales/pt/tools').TOOL_BY_SLUG_PT;
  categories: typeof import('./locales/pt/tools').TOOL_CATEGORIES_PT;
  toolUi: typeof import('./locales/pt/ui').TOOL_UI_PT;
}

interface FrLocale {
  ui: typeof import('./locales/fr/ui').FR;
  tools: typeof import('./locales/fr/tools').TOOL_BY_SLUG_FR;
  categories: typeof import('./locales/fr/tools').TOOL_CATEGORIES_FR;
  toolUi: typeof import('./locales/fr/ui').TOOL_UI_FR;
}

interface DeLocale {
  ui: typeof import('./locales/de/ui').DE;
  tools: typeof import('./locales/de/tools').TOOL_BY_SLUG_DE;
  categories: typeof import('./locales/de/tools').TOOL_CATEGORIES_DE;
  toolUi: typeof import('./locales/de/ui').TOOL_UI_DE;
}

interface ItLocale {
  ui: typeof import('./locales/it/ui').IT;
  tools: typeof import('./locales/it/tools').TOOL_BY_SLUG_IT;
  categories: typeof import('./locales/it/tools').TOOL_CATEGORIES_IT;
  toolUi: typeof import('./locales/it/ui').TOOL_UI_IT;
}

interface IdLocale {
  ui: typeof import('./locales/id/ui').ID;
  tools: typeof import('./locales/id/tools').TOOL_BY_SLUG_ID;
  categories: typeof import('./locales/id/tools').TOOL_CATEGORIES_ID;
  toolUi: typeof import('./locales/id/ui').TOOL_UI_ID;
}

interface RuLocale {
  ui: typeof import('./locales/ru/ui').RU;
  tools: typeof import('./locales/ru/tools').TOOL_BY_SLUG_RU;
  categories: typeof import('./locales/ru/tools').TOOL_CATEGORIES_RU;
  toolUi: typeof import('./locales/ru/ui').TOOL_UI_RU;
}

interface JaLocale {
  ui: typeof import('./locales/ja/ui').JA;
  tools: typeof import('./locales/ja/tools').TOOL_BY_SLUG_JA;
  categories: typeof import('./locales/ja/tools').TOOL_CATEGORIES_JA;
  toolUi: typeof import('./locales/ja/ui').TOOL_UI_JA;
}

interface KoLocale {
  ui: typeof import('./locales/ko/ui').KO;
  tools: typeof import('./locales/ko/tools').TOOL_BY_SLUG_KO;
  categories: typeof import('./locales/ko/tools').TOOL_CATEGORIES_KO;
  toolUi: typeof import('./locales/ko/ui').TOOL_UI_KO;
}

interface ZhLocale {
  ui: typeof import('./locales/zh/ui').ZH;
  tools: typeof import('./locales/zh/tools').TOOL_BY_SLUG_ZH;
  categories: typeof import('./locales/zh/tools').TOOL_CATEGORIES_ZH;
  toolUi: typeof import('./locales/zh/ui').TOOL_UI_ZH;
}

type AnyLocale = EsLocale | PtLocale | FrLocale | DeLocale | ItLocale | IdLocale | RuLocale | JaLocale | KoLocale | ZhLocale;

export default function App() {
  const [route, setRoute] = useState<ParsedPath>(() => {
    if (typeof window !== 'undefined') {
      return parsePath(window.location.pathname);
    }
    return { path: '/', lang: 'en' };
  });
  const currentPath = route.path;

  const [lang, setLang] = useState<SupportedLang>(route.lang);
  const [esLocale, setEsLocale] = useState<EsLocale | null>(null);
  const [ptLocale, setPtLocale] = useState<PtLocale | null>(null);
  const [frLocale, setFrLocale] = useState<FrLocale | null>(null);
  const [deLocale, setDeLocale] = useState<DeLocale | null>(null);
  const [itLocale, setItLocale] = useState<ItLocale | null>(null);
  const [idLocale, setIdLocale] = useState<IdLocale | null>(null);
  const [ruLocale, setRuLocale] = useState<RuLocale | null>(null);
  const [jaLocale, setJaLocale] = useState<JaLocale | null>(null);
  const [koLocale, setKoLocale] = useState<KoLocale | null>(null);
  const [zhLocale, setZhLocale] = useState<ZhLocale | null>(null);
  const [localeLoading, setLocaleLoading] = useState(false);

  // The active non-English locale (null for English). Defined early so the
  // SEO effect below can read tool titles/descriptions from it.
  const activeLocale: AnyLocale | null =
    lang === 'es' ? esLocale : lang === 'pt' ? ptLocale : lang === 'fr' ? frLocale : lang === 'de' ? deLocale : lang === 'it' ? itLocale : lang === 'id' ? idLocale : lang === 'ru' ? ruLocale : lang === 'ja' ? jaLocale : lang === 'ko' ? koLocale : lang === 'zh' ? zhLocale : null;
  const activeUi = activeLocale?.ui ?? null;

  // Generic loader — later languages add one branch each; only the selected
  // language's files are ever downloaded (Vite code-splits each dynamic import).
  const loadLocale = useCallback(async (target: SupportedLang) => {
    if (target === 'en') return;
    if (target === 'es' && !esLocale) {
      setLocaleLoading(true);
      const [uiMod, toolsMod] = await Promise.all([
        import('./locales/es/ui'),
        import('./locales/es/tools'),
      ]);
      setEsLocale({ ui: uiMod.ES, tools: toolsMod.TOOL_BY_SLUG_ES, categories: toolsMod.TOOL_CATEGORIES_ES, toolUi: uiMod.TOOL_UI_ES });
      setLocaleLoading(false);
    }
    if (target === 'pt' && !ptLocale) {
      setLocaleLoading(true);
      const [uiMod, toolsMod] = await Promise.all([
        import('./locales/pt/ui'),
        import('./locales/pt/tools'),
      ]);
      setPtLocale({ ui: uiMod.PT, tools: toolsMod.TOOL_BY_SLUG_PT, categories: toolsMod.TOOL_CATEGORIES_PT, toolUi: uiMod.TOOL_UI_PT });
      setLocaleLoading(false);
    }
    if (target === 'fr' && !frLocale) {
      setLocaleLoading(true);
      const [uiMod, toolsMod] = await Promise.all([
        import('./locales/fr/ui'),
        import('./locales/fr/tools'),
      ]);
      setFrLocale({ ui: uiMod.FR, tools: toolsMod.TOOL_BY_SLUG_FR, categories: toolsMod.TOOL_CATEGORIES_FR, toolUi: uiMod.TOOL_UI_FR });
      setLocaleLoading(false);
    }
    if (target === 'de' && !deLocale) {
      setLocaleLoading(true);
      const [uiMod, toolsMod] = await Promise.all([
        import('./locales/de/ui'),
        import('./locales/de/tools'),
      ]);
      setDeLocale({ ui: uiMod.DE, tools: toolsMod.TOOL_BY_SLUG_DE, categories: toolsMod.TOOL_CATEGORIES_DE, toolUi: uiMod.TOOL_UI_DE });
      setLocaleLoading(false);
    }
    if (target === 'it' && !itLocale) {
      setLocaleLoading(true);
      const [uiMod, toolsMod] = await Promise.all([
        import('./locales/it/ui'),
        import('./locales/it/tools'),
      ]);
      setItLocale({ ui: uiMod.IT, tools: toolsMod.TOOL_BY_SLUG_IT, categories: toolsMod.TOOL_CATEGORIES_IT, toolUi: uiMod.TOOL_UI_IT });
      setLocaleLoading(false);
    }
    if (target === 'id' && !idLocale) {
      setLocaleLoading(true);
      const [uiMod, toolsMod] = await Promise.all([
        import('./locales/id/ui'),
        import('./locales/id/tools'),
      ]);
      setIdLocale({ ui: uiMod.ID, tools: toolsMod.TOOL_BY_SLUG_ID, categories: toolsMod.TOOL_CATEGORIES_ID, toolUi: uiMod.TOOL_UI_ID });
      setLocaleLoading(false);
    }
    if (target === 'ru' && !ruLocale) {
      setLocaleLoading(true);
      const [uiMod, toolsMod] = await Promise.all([
        import('./locales/ru/ui'),
        import('./locales/ru/tools'),
      ]);
      setRuLocale({ ui: uiMod.RU, tools: toolsMod.TOOL_BY_SLUG_RU, categories: toolsMod.TOOL_CATEGORIES_RU, toolUi: uiMod.TOOL_UI_RU });
      setLocaleLoading(false);
    }
    if (target === 'ja' && !jaLocale) {
      setLocaleLoading(true);
      const [uiMod, toolsMod] = await Promise.all([
        import('./locales/ja/ui'),
        import('./locales/ja/tools'),
      ]);
      setJaLocale({ ui: uiMod.JA, tools: toolsMod.TOOL_BY_SLUG_JA, categories: toolsMod.TOOL_CATEGORIES_JA, toolUi: uiMod.TOOL_UI_JA });
      setLocaleLoading(false);
    }
    if (target === 'ko' && !koLocale) {
      setLocaleLoading(true);
      const [uiMod, toolsMod] = await Promise.all([
        import('./locales/ko/ui'),
        import('./locales/ko/tools'),
      ]);
      setKoLocale({ ui: uiMod.KO, tools: toolsMod.TOOL_BY_SLUG_KO, categories: toolsMod.TOOL_CATEGORIES_KO, toolUi: uiMod.TOOL_UI_KO });
      setLocaleLoading(false);
    }
    if (target === 'zh' && !zhLocale) {
      setLocaleLoading(true);
      const [uiMod, toolsMod] = await Promise.all([
        import('./locales/zh/ui'),
        import('./locales/zh/tools'),
      ]);
      setZhLocale({ ui: uiMod.ZH, tools: toolsMod.TOOL_BY_SLUG_ZH, categories: toolsMod.TOOL_CATEGORIES_ZH, toolUi: uiMod.TOOL_UI_ZH });
      setLocaleLoading(false);
    }
  }, [esLocale, ptLocale, frLocale, deLocale, itLocale, idLocale, ruLocale, jaLocale, koLocale, zhLocale]);

  const [images, setImages] = useState<ImageItem[]>([]);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [zipProgress, setZipProgress] = useState<number>(0);

  // Settings state
  const [settings, setSettings] = useState<CompressionSettings>({
    preset: 'balanced',
    quality: 70,
    format: 'original',
    maxFileSizeMB: 20,
    fillTransparentBackground: true,
    backgroundColor: '#ffffff',
  });

  const [comparisonTarget, setComparisonTarget] = useState<ImageItem | null>(null);

  const toolRef = useRef<HTMLDivElement>(null);

  // Handle client-side routing and browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setRoute(parsePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keep the language state in sync when the route changes (e.g. browser
  // back/forward): the route is the source of truth for the URL's language.
  useEffect(() => {
    setLang(route.lang);
  }, [route.lang]);

  // Load the locale files when the language changes to a non-English one.
  useEffect(() => {
    if (lang !== 'en') {
      loadLocale(lang);
    }
  }, [lang, loadLocale]);

  // Keep <html lang> in sync with the active language.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Stored language preference (mount only): if the user landed on '/' with no
  // language prefix and previously chose Spanish, go to '/es/'. Never redirect
  // from a deep link, never use IP/location.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    const raw = window.location.pathname;
    const noBase =
      base && base !== '/' && raw.toLowerCase().startsWith(base.toLowerCase())
        ? raw.slice(base.length) || '/'
        : raw;
    // Only languages with shipped locale files redirect (es/pt/fr/de/it/id/ru/ja/ko/zh for now);
    // a stored code for a not-yet-built language must not send the user to a
    // URL prefix the router cannot resolve.
    const storedLang = localStorage.getItem(LANG_STORAGE_KEY);
    if (
      noBase === '/' &&
      (storedLang === 'es' || storedLang === 'pt' || storedLang === 'fr' || storedLang === 'de' || storedLang === 'it' || storedLang === 'id' || storedLang === 'ru' || storedLang === 'ja' || storedLang === 'ko' || storedLang === 'zh')
    ) {
      window.history.replaceState(null, '', withBasePath(`/${storedLang}/`));
      setLang(storedLang);
      setRoute({ path: '/', lang: storedLang });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update document title, meta description, OpenGraph, and canonical tag based on active route
  useEffect(() => {
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const baseDomain = 'https://compressmypic.online';
    const toolMeta =
      (activeLocale ? activeLocale.tools[currentPath] : undefined) ??
      TOOL_BY_SLUG[currentPath];

    const staticTitles: Record<string, string> = {
      '/about': 'About CompressMyPic – Free Online Image Compressor',
      '/contact': 'Contact CompressMyPic – Free Online Image Compressor',
      '/privacy': 'Privacy Policy – CompressMyPic Free Image Compressor',
      '/terms': 'Terms of Service – CompressMyPic Free Image Compressor',
      '/guides/compress-images-for-whatsapp': 'Compress Images for WhatsApp Without Losing Quality',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP: Which Format Should You Use?',
      '/guides/reduce-image-size-to-100kb': 'How to Reduce Image Size to 100KB for Web & Email',
    };

    const staticDescriptions: Record<string, string> = {
      '/': 'Compress image online free — reduce image size without losing quality. Compress JPG, PNG, WebP and HEIC with no signup and no watermark, right in your browser.',
      '/about': 'About CompressMyPic – a free online image compressor for JPG, PNG and WebP. Compress images online free, with no signup, no watermark and no server upload.',
      '/contact': 'Contact CompressMyPic – get help with the free online image compressor. Compress images online free and reduce image size without losing quality.',
      '/privacy': 'Privacy Policy for CompressMyPic – the free online image compressor. Your images are compressed in your browser and never uploaded to a server.',
      '/terms': 'Terms of Service for CompressMyPic – the free online image compressor. Compress images online free, no signup, no watermark.',
      '/guides/compress-images-for-whatsapp': 'Learn how to compress images for WhatsApp without losing quality. Free, private, no signup — shrink photos before sending so they stay sharp and send fast.',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP explained simply: file size, quality and transparency compared, so you can pick the right format for photos, logos and websites.',
      '/guides/reduce-image-size-to-100kb': 'Reduce image size to 100KB for websites and email with a free online compressor. Step-by-step guide — no signup, no watermark, images stay on your device.',
    };

    const staticTitlesEs: Record<string, string> = {
      '/': esLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'Nosotros – CompressMyPic, compresor de imágenes gratis online',
      '/contact': 'Contacto – CompressMyPic, compresor de imágenes gratis online',
      '/privacy': 'Política de privacidad – CompressMyPic',
      '/terms': 'Términos de servicio – CompressMyPic',
      [ES_ALL_TOOLS_PATH]: 'Todas las herramientas – CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'Comprimir imágenes para WhatsApp sin perder calidad',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP: ¿qué formato debería usar?',
      '/guides/reduce-image-size-to-100kb': 'Cómo reducir una imagen a 100 KB para web y correo',
    };

    const staticTitlesPt: Record<string, string> = {
      '/': ptLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'Sobre o CompressMyPic – Compressor de imagens online grátis',
      '/contact': 'Fale conosco - CompressMyPic',
      '/privacy': 'Política de Privacidade - CompressMyPic',
      '/terms': 'Termos de Serviço - CompressMyPic',
      [PT_ALL_TOOLS_PATH]: 'Todas as ferramentas – CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'Comprimir imagens para WhatsApp sem perder qualidade',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP: qual formato devo usar?',
      '/guides/reduce-image-size-to-100kb': 'Como reduzir uma imagem para 100 KB para web e e-mail',
    };

    const staticTitlesFr: Record<string, string> = {
      '/': frLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'À propos de CompressMyPic – Compresseur d’images online gratuit',
      '/contact': 'Contactez-nous - CompressMyPic',
      '/privacy': 'Politique de confidentialité - CompressMyPic',
      '/terms': 'Conditions d’utilisation - CompressMyPic',
      [FR_ALL_TOOLS_PATH]: 'Tous les outils – CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'Compresser des images pour WhatsApp sans perdre en qualité',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP : quel format utiliser ?',
      '/guides/reduce-image-size-to-100kb': 'Comment réduire une image à 100 Ko pour le web et l’e-mail',
    };

    const staticTitlesDe: Record<string, string> = {
      '/': deLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'Über CompressMyPic – Kostenloser Online-Bildkomprimierer',
      '/contact': 'Kontakt – CompressMyPic',
      '/privacy': 'Datenschutzerklärung – CompressMyPic',
      '/terms': 'Nutzungsbedingungen – CompressMyPic',
      [DE_ALL_TOOLS_PATH]: 'Alle Tools – CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'Bilder für WhatsApp komprimieren ohne Qualitätsverlust',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP: Welches Format sollten Sie verwenden?',
      '/guides/reduce-image-size-to-100kb': 'Bild auf 100 KB verkleinern für Web & E-Mail',
    };

    const staticTitlesIt: Record<string, string> = {
      '/': itLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'Chi siamo – CompressMyPic, compressore di immagini online gratuito',
      '/contact': 'Contattaci - CompressMyPic',
      '/privacy': 'Informativa sulla privacy - CompressMyPic',
      '/terms': 'Termini di servizio - CompressMyPic',
      [IT_ALL_TOOLS_PATH]: 'Tutti gli strumenti – CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'Comprimere immagini per WhatsApp senza perdere qualità',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP: quale formato dovresti usare?',
      '/guides/reduce-image-size-to-100kb': 'Come ridurre le dimensioni di un’immagine a 100 KB per siti web ed email',
    };
    const staticTitlesId: Record<string, string> = {
      '/': idLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'Tentang CompressMyPic – Kompresor Gambar Online Gratis',
      '/contact': 'Hubungi Kami - CompressMyPic',
      '/privacy': 'Kebijakan Privasi - CompressMyPic',
      '/terms': 'Syarat Layanan - CompressMyPic',
      [ID_ALL_TOOLS_PATH]: 'Semua Alat – CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'Mengompres Gambar untuk WhatsApp Tanpa Kehilangan Kualitas',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP: Format Mana yang Harus Anda Gunakan?',
      '/guides/reduce-image-size-to-100kb': 'Cara Mengurangi Ukuran Gambar menjadi 100KB untuk Web & Email',
    };
    const staticTitlesRu: Record<string, string> = {
      '/': ruLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'О CompressMyPic – бесплатный online-компрессор изображений',
      '/contact': 'Связаться с нами — CompressMyPic',
      '/privacy': 'Политика конфиденциальности — CompressMyPic',
      '/terms': 'Условия использования — CompressMyPic',
      [RU_ALL_TOOLS_PATH]: 'Все инструменты – CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'Как сжать изображения для WhatsApp без потери качества',
      '/guides/jpg-vs-png-vs-webp': 'JPG против PNG против WebP: какой формат выбрать?',
      '/guides/reduce-image-size-to-100kb': 'Как уменьшить размер изображения до 100 КБ для веба и электронной почты',
    };
    const staticTitlesJa: Record<string, string> = {
      '/': jaLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'CompressMyPicについて – 無料のオンライン画像圧縮ツール',
      '/contact': 'お問い合わせ - CompressMyPic',
      '/privacy': 'プライバシーポリシー - CompressMyPic',
      '/terms': '利用規約 - CompressMyPic',
      [JA_ALL_TOOLS_PATH]: 'すべてのツール – CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'WhatsApp用に画像を圧縮する方法｜画質を落とさず送る',
      '/guides/jpg-vs-png-vs-webp': 'JPG・PNG・WebPの違いと使い分け｜どれを選ぶべき？',
      '/guides/reduce-image-size-to-100kb': '画像サイズを100KBまで小さくする方法｜Web・メール用',
    };
    const staticTitlesKo: Record<string, string> = {
      '/': koLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'CompressMyPic 소개 – 무료 온라인 이미지 압축기',
      '/contact': '문의하기 - CompressMyPic',
      '/privacy': '개인정보처리방침 - CompressMyPic',
      '/terms': '이용약관 - CompressMyPic',
      [KO_ALL_TOOLS_PATH]: '모든 도구 – CompressMyPic',
      '/guides/compress-images-for-whatsapp': '화질 저하 없이 WhatsApp용 이미지를 압축하는 방법',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP: 어떤 형식을 사용해야 할까요?',
      '/guides/reduce-image-size-to-100kb': '웹과 이메일용 이미지 크기를 100KB로 줄이는 방법',
    };
    const staticTitlesZh: Record<string, string> = {
      '/': zhLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': '关于 CompressMyPic – 免费在线图片压缩器',
      '/contact': '联系我们 - CompressMyPic',
      '/privacy': '隐私政策 - CompressMyPic',
      '/terms': '使用条款 - CompressMyPic',
      [ZH_ALL_TOOLS_PATH]: '全部工具 – CompressMyPic',
      '/guides/compress-images-for-whatsapp': '如何在 WhatsApp 上压缩图片而不损失画质',
      '/guides/jpg-vs-png-vs-webp': 'JPG、PNG、WebP 对比：应该选择哪种格式？',
      '/guides/reduce-image-size-to-100kb': '如何把图片压缩到 100KB：网站与邮件指南',
    };

    const staticDescriptionsEs: Record<string, string> = {
      '/': esLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'Acerca de CompressMyPic: un compresor de imágenes online gratis para JPG, PNG y WebP, sin registro, sin marca de agua y sin subir nada a ningún servidor.',
      '/contact': '¿Tiene preguntas, comentarios o necesita ayuda? Escríbale a nuestro equipo con el formulario de abajo o contáctenos directamente por correo electrónico.',
      '/privacy': 'CompressMyPic procesa sus imágenes localmente en su navegador: nunca se suben a nuestros servidores y no recopilamos, almacenamos ni compartimos sus imágenes.',
      '/terms': 'Al usar CompressMyPic, acepta cumplir estos Términos del Servicio. Lea las condiciones de uso permitido, responsabilidades y limitaciones del servicio gratuito.',
      [ES_ALL_TOOLS_PATH]: 'Explore las 48 herramientas gratuitas de CompressMyPic para comprimir, convertir y editar imágenes online, directamente en su navegador y sin registro.',
      '/guides/compress-images-for-whatsapp': 'Aprenda a comprimir imágenes para WhatsApp sin perder calidad. Gratis y privado, sin registro: reduzca sus fotos antes de enviarlas para que lleguen nítidas.',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP explicado de forma sencilla: compare tamaño, calidad y transparencia para elegir el formato adecuado para sus fotos, logotipos y sitios web.',
      '/guides/reduce-image-size-to-100kb': 'Reduzca el tamaño de una imagen a 100 KB para sitios web y correo electrónico con un compresor online gratis. Guía paso a paso, sin registro ni marca de agua.',
    };

    const staticDescriptionsPt: Record<string, string> = {
      '/': ptLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'Sobre o CompressMyPic: um compressor de imagens online grátis para JPG, PNG e WebP, sem cadastro, sem marca d’água e sem enviar nada para nenhum servidor.',
      '/contact': 'Tem perguntas, comentários ou precisa de ajuda? Escreva para nossa equipe com o formulário abaixo ou fale conosco diretamente por e-mail.',
      '/privacy': 'O CompressMyPic processa suas imagens localmente no seu navegador: elas nunca são enviadas para os nossos servidores e não coletamos, armazenamos nem compartilhamos suas imagens.',
      '/terms': 'Ao usar o CompressMyPic, você concorda em cumprir estes Termos de Serviço. Leia as condições de uso permitido, responsabilidades e limitações do serviço gratuito.',
      [PT_ALL_TOOLS_PATH]: 'As 48 ferramentas grátis do CompressMyPic para comprimir, converter e editar imagens, diretamente no seu navegador, sem cadastro.',
      '/guides/compress-images-for-whatsapp': 'Aprenda a comprimir imagens para WhatsApp sem perder qualidade. Grátis e privado, sem cadastro: reduza suas fotos antes de enviar para que cheguem nítidas.',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP explicado de forma simples: compare tamanho, qualidade e transparência para escolher o formato certo para suas fotos, logotipos e sites.',
      '/guides/reduce-image-size-to-100kb': 'Reduza o tamanho de uma imagem para 100 KB para sites e e-mail com um compressor online grátis. Guia passo a passo, sem cadastro nem marca d’água.',
    };

    const staticDescriptionsFr: Record<string, string> = {
      '/': frLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'À propos de CompressMyPic : un compresseur d’images online gratuit pour JPG, PNG et WebP, sans inscription, sans filigrane et sans rien envoyer vers un serveur.',
      '/contact': 'Vous avez des questions, des commentaires ou besoin d’aide ? Écrivez à notre équipe avec le formulaire ci-dessous ou contactez-nous directement par e-mail.',
      '/privacy': 'CompressMyPic traite vos images localement dans votre navigateur : elles ne sont jamais envoyées vers nos serveurs et nous ne collectons, ne stockons ni ne partageons vos images.',
      '/terms': 'En utilisant CompressMyPic, vous acceptez de respecter ces Conditions d’utilisation. Lisez les conditions d’usage autorisé, les responsabilités et les limites du service gratuit.',
      [FR_ALL_TOOLS_PATH]: 'Les 48 outils gratuits de CompressMyPic pour compresser, convertir et éditer des images, directement dans votre navigateur, sans inscription.',
      '/guides/compress-images-for-whatsapp': 'Apprenez à compresser des images pour WhatsApp sans perdre en qualité. Gratuit et privé, sans inscription : réduisez vos photos avant de les envoyer pour qu’elles arrivent nettes.',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP expliqué simplement : comparez taille, qualité et transparence pour choisir le bon format pour vos photos, logos et sites web.',
      '/guides/reduce-image-size-to-100kb': 'Réduisez la taille d’une image à 100 Ko pour les sites web et l’e-mail avec un compresseur online gratuit. Guide pas à pas, sans inscription ni filigrane.',
    };

    const staticDescriptionsDe: Record<string, string> = {
      '/': deLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'Über CompressMyPic: ein kostenloser Online-Bildkomprimierer für JPG, PNG und WebP, ohne Anmeldung, ohne Wasserzeichen und ohne Upload auf einen Server.',
      '/contact': 'Haben Sie Fragen, Feedback oder brauchen Sie Hilfe? Wenden Sie sich über das Formular unten an unser Team oder kontaktieren Sie uns direkt per E-Mail.',
      '/privacy': 'CompressMyPic verarbeitet Ihre Bilder lokal in Ihrem Browser: Sie werden niemals auf unsere Server hochgeladen, und wir erfassen, speichern oder teilen Ihre Bilder nicht.',
      '/terms': 'Mit der Nutzung von CompressMyPic stimmen Sie diesen Nutzungsbedingungen zu. Lesen Sie die Bedingungen für erlaubte Nutzung, Verantwortlichkeiten und Einschränkungen des kostenlosen Dienstes.',
      [DE_ALL_TOOLS_PATH]: 'Entdecken Sie die 48 kostenlosen Tools von CompressMyPic zum Komprimieren, Konvertieren und Bearbeiten von Bildern online, direkt in Ihrem Browser und ohne Anmeldung.',
      '/guides/compress-images-for-whatsapp': 'Lernen Sie, Bilder für WhatsApp zu komprimieren, ohne Qualität zu verlieren. Kostenlos und privat, ohne Anmeldung: Verkleinern Sie Ihre Fotos vor dem Senden, damit sie scharf ankommen.',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP einfach erklärt: Vergleichen Sie Größe, Qualität und Transparenz, um das richtige Format für Ihre Fotos, Logos und Websites zu wählen.',
      '/guides/reduce-image-size-to-100kb': 'Verkleinern Sie ein Bild auf 100 KB für Websites und E-Mails mit einem kostenlosen Online-Komprimierer. Schritt-für-Schritt-Anleitung, ohne Anmeldung und ohne Wasserzeichen.',
    };

    const staticDescriptionsIt: Record<string, string> = {
      '/': itLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'Chi è CompressMyPic: un compressore di immagini online gratuito per JPG, PNG e WebP, senza registrazione, senza filigrana e senza caricare nulla su nessun server.',
      '/contact': 'Hai domande, commenti o hai bisogno di aiuto? Scrivi al nostro team con il modulo qui sotto, oppure contattaci direttamente via email.',
      '/privacy': 'CompressMyPic elabora le tue immagini localmente nel tuo browser: non vengono mai caricate sui nostri server e non raccogliamo, archiviamo né condividiamo le tue immagini.',
      '/terms': 'Accedendo a CompressMyPic e utilizzandolo, accetti di rispettare i presenti Termini di servizio. Leggi le condizioni d’uso consentito, le responsabilità e i limiti del servizio gratuito.',
      [IT_ALL_TOOLS_PATH]: 'Scopri i 48 strumenti gratuiti di CompressMyPic per comprimere, convertire e modificare immagini online, direttamente nel tuo browser e senza registrazione.',
      '/guides/compress-images-for-whatsapp': 'Impara a comprimere le immagini per WhatsApp senza perdere qualità. Gratis e privato, senza registrazione: riduci le tue foto prima di inviarle, così arrivano nitide.',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP spiegato in modo semplice: confronta dimensioni, qualità e trasparenza per scegliere il formato giusto per le tue foto, i tuoi loghi e i tuoi siti.',
      '/guides/reduce-image-size-to-100kb': 'Riduci le dimensioni di un’immagine a 100 KB per siti web ed email con un compressore online gratuito. Guida passo passo, senza registrazione né filigrana.',
    };
    const staticDescriptionsId: Record<string, string> = {
      '/': idLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'CompressMyPic adalah kompresor gambar gratis dan privat. Kompres gambar JPG, PNG, dan WebP langsung di browser Anda — cepat, aman, dan tanpa mengunggah file Anda ke mana pun.',
      '/contact': 'Punya pertanyaan, masukan, atau butuh bantuan? Hubungi tim kami melalui formulir di bawah ini, atau hubungi kami langsung lewat email.',
      '/privacy': 'CompressMyPic adalah kompresor gambar online gratis. Gambar diproses secara lokal di browser Anda menggunakan HTML5 Canvas — gambar tidak pernah diunggah ke server kami, dan kami tidak mengumpulkan, menyimpan, atau membagikan gambar Anda.',
      '/terms': 'Dengan mengakses dan menggunakan CompressMyPic, Anda setuju untuk mematuhi dan terikat oleh Syarat Layanan ini.',
      [ID_ALL_TOOLS_PATH]: '48 alat gratis CompressMyPic untuk mengompres, mengonversi, dan mengedit gambar — langsung di browser Anda.',
      '/guides/compress-images-for-whatsapp': 'WhatsApp memperkecil setiap foto yang Anda kirim — sering kali jauh lebih kecil dari yang seharusnya. Kompres foto Anda sendiri terlebih dahulu, lalu kirim dengan cara yang tepat, dan foto akan tiba dalam keadaan tajam, cepat terkirim, dan hemat kuota.',
      '/guides/jpg-vs-png-vs-webp': 'Memilih format yang salah dapat membuat gambar Anda sepuluh kali lebih besar dari yang seharusnya — atau merusak logo transparan. Berikut perbandingan yang sederhana dan jujur, serta cara beralih antar format dalam hitungan detik.',
      '/guides/reduce-image-size-to-100kb': 'Foto sebesar 4 MB memperlambat situs web Anda dan menyumbat email. Mengecilkannya menjadi sekitar 100KB membuat halaman dimuat dengan cepat dan email terkirim seketika.',
    };
    const staticDescriptionsRu: Record<string, string> = {
      '/': ruLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'CompressMyPic — это бесплатный и приватный компрессор изображений. Сжимайте изображения JPG, PNG и WebP прямо в браузере — быстро, безопасно и без загрузки файлов куда-либо.',
      '/contact': 'Есть вопросы, отзывы или нужна помощь? Обратитесь к нашей команде через форму ниже или свяжитесь с нами напрямую по электронной почте.',
      '/privacy': 'CompressMyPic — это бесплатный online-компрессор изображений. Изображения обрабатываются локально в вашем браузере с помощью HTML5 Canvas — они никогда не загружаются на наши серверы, и мы не собираем, не храним и не передаём ваши изображения.',
      '/terms': 'Получая доступ к CompressMyPic и используя его, вы соглашаетесь соблюдать настоящие Условия использования и обязуетесь их выполнять.',
      [RU_ALL_TOOLS_PATH]: 'Все 48 бесплатных инструментов CompressMyPic для сжатия, конвертации и редактирования изображений — прямо в вашем браузере.',
      '/guides/compress-images-for-whatsapp': 'WhatsApp уменьшает каждую фотографию, которую вы отправляете, — зачастую гораздо сильнее, чем нужно. Сожмите фотографии сами заранее, а затем отправьте их правильным способом, и они дойдут чёткими, отправятся быстро и израсходуют меньше мобильного трафика.',
      '/guides/jpg-vs-png-vs-webp': 'Неправильный формат может сделать ваше изображение в десять раз больше, чем нужно, или испортить прозрачный логотип. Вот простое и честное сравнение, а также то, как конвертировать между форматами за секунды.',
      '/guides/reduce-image-size-to-100kb': 'Фотография на 4 МБ замедляет ваш сайт и забивает электронную почту. Уменьшение её примерно до 100 КБ делает страницы быстрыми, а письма отправляются мгновенно.',
    };
    const staticDescriptionsJa: Record<string, string> = {
      '/': jaLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'CompressMyPicは、無料でプライバシーを守る画像圧縮ツールです。JPG、PNG、WebPの画像をブラウザー上で直接圧縮できます。速く、安全で、ファイルをどこにもアップロードしません。',
      '/contact': 'ご質問やご感想、サポートが必要な場合は、下のフォームからご連絡いただくか、メールで直接お問い合わせください。',
      '/privacy': 'CompressMyPicは、無料のオンライン画像圧縮ツールです。画像はHTML5 Canvasを使ってお使いのブラウザー上でローカルに処理されます。画像が当社のサーバーにアップロードされることは決してなく、当社は画像を収集、保存、共有しません。',
      '/terms': 'CompressMyPicにアクセスし、ご利用いただくことにより、お客様は本利用規約を遵守し、これに拘束されることに同意したものとみなされます。',
      [JA_ALL_TOOLS_PATH]: 'CompressMyPicの無料ツール48種類で、画像の圧縮・変換・編集をブラウザー上で直接行えます。',
      '/guides/compress-images-for-whatsapp': 'WhatsAppは送る写真をすべて縮小します。しかも、必要以上に小さくしてしまうことがよくあります。まず自分で写真を圧縮し、正しい方法で送れば、写真はくっきりしたまま届き、速く送れて、モバイルデータも少なく済みます。',
      '/guides/jpg-vs-png-vs-webp': '間違った形式を選ぶと、画像が必要以上に10倍も大きくなったり、透明なロゴが台無しになったりします。シンプルで正直な比較と、数秒で形式を変換する方法を紹介します。',
      '/guides/reduce-image-size-to-100kb': '4MBの写真はウェブサイトを遅くし、メールも詰まらせます。100KB程度まで小さくすれば、ページは速く読み込まれ、メールもすぐに送れます。正しく行えば、誰にも違いはわかりません。',
    };
    const staticDescriptionsKo: Record<string, string> = {
      '/': koLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'CompressMyPic은 무료이며 개인정보를 보호하는 이미지 압축기입니다. JPG, PNG, WebP 이미지를 브라우저에서 바로 압축하세요. 빠르고 안전하며, 파일을 어디에도 업로드하지 않습니다.',
      '/contact': '질문, 피드백이 있거나 도움이 필요하신가요? 아래 양식을 이용해 팀에 연락하거나 이메일로 직접 문의해 주세요.',
      '/privacy': 'CompressMyPic은 무료 온라인 이미지 압축기입니다. 이미지는 HTML5 Canvas를 이용해 사용자의 브라우저에서 로컬로 처리됩니다. 이미지는 절대 저희 서버에 업로드되지 않으며, 저희는 사용자의 이미지를 수집, 저장, 공유하지 않습니다.',
      '/terms': 'CompressMyPic에 접속하고 이용함으로써 사용자는 본 이용약관을 준수하고 그 구속을 받는 데 동의합니다.',
      [KO_ALL_TOOLS_PATH]: 'CompressMyPic의 무료 도구 48가지로 이미지를 압축, 변환, 편집하세요 — 브라우저에서 바로.',
      '/guides/compress-images-for-whatsapp': 'WhatsApp은 보내는 모든 사진을 축소합니다. 종종 필요한 것보다 훨씬 더 많이요. 사진을 먼저 직접 압축한 뒤 올바른 방법으로 보내면 사진이 선명하게 도착하고, 빠르게 전송되며, 모바일 데이터도 적게 사용합니다.',
      '/guides/jpg-vs-png-vs-webp': '잘못된 형식을 선택하면 이미지가 필요한 것보다 10배 커지거나 투명한 로고가 망가질 수 있습니다. 간단하고 정직한 비교와 몇 초 만에 형식을 변환하는 방법을 소개합니다.',
      '/guides/reduce-image-size-to-100kb': '4MB 사진은 웹사이트를 느리게 만들고 이메일을 막히게 합니다. 약 100KB로 줄이면 페이지가 빠르게 로드되고 이메일이 즉시 전송됩니다. 제대로 하면 아무도 차이를 알아차리지 못합니다.',
    };
    const staticDescriptionsZh: Record<string, string> = {
      '/': zhLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'CompressMyPic 是一款免费、私密的图片压缩器。直接在浏览器中压缩 JPG、PNG 与 WebP 图片——快速、安全，无需把文件上传到任何地方。',
      '/contact': '有问题、反馈或需要帮助？请使用下面的表格联系我们的团队，或直接通过邮箱联系我们。',
      '/privacy': 'CompressMyPic 是一款免费在线图片压缩器。图片使用 HTML5 Canvas 在您的浏览器本地处理——图片绝不会上传到我们的服务器，我们也不会收集、存储或分享您的图片。',
      '/terms': '访问和使用 CompressMyPic，即表示您同意遵守本使用条款并受其约束。',
      [ZH_ALL_TOOLS_PATH]: '用 CompressMyPic 的 48 款免费工具，在浏览器中直接压缩、转换和编辑图片。',
      '/guides/compress-images-for-whatsapp': 'WhatsApp 会缩小你发送的每一张照片——往往缩得比实际需要的多得多。先自己压缩照片，再用正确的方式发送，照片就会保持清晰、发送快速，还能节省流量。',
      '/guides/jpg-vs-png-vs-webp': '选错格式可能让你的图片比实际需要的大十倍——或者毁掉一个透明标志。下面是简单、诚实的对比，以及如何在几秒钟内转换格式。',
      '/guides/reduce-image-size-to-100kb': '一张 4 MB 的照片会拖慢你的网站，还会堵塞邮件。把它缩小到约 100KB，页面加载会变快，邮件也能即时发送——而且如果方法得当，没有人能看出差别。',
    };

    const langTitles =
      lang === 'es' ? staticTitlesEs : lang === 'pt' ? staticTitlesPt : lang === 'fr' ? staticTitlesFr : lang === 'de' ? staticTitlesDe : lang === 'it' ? staticTitlesIt : lang === 'id' ? staticTitlesId : lang === 'ru' ? staticTitlesRu : lang === 'ja' ? staticTitlesJa : lang === 'ko' ? staticTitlesKo : lang === 'zh' ? staticTitlesZh : undefined;
    const langDescriptions =
      lang === 'es' ? staticDescriptionsEs : lang === 'pt' ? staticDescriptionsPt : lang === 'fr' ? staticDescriptionsFr : lang === 'de' ? staticDescriptionsDe : lang === 'it' ? staticDescriptionsIt : lang === 'id' ? staticDescriptionsId : lang === 'ru' ? staticDescriptionsRu : lang === 'ja' ? staticDescriptionsJa : lang === 'ko' ? staticDescriptionsKo : lang === 'zh' ? staticDescriptionsZh : undefined;
    const nextTitle =
      toolMeta?.seoTitle ||
      langTitles?.[currentPath] ||
      staticTitles[currentPath] ||
      'Free Image Compressor Online – Reduce Image Size to 100KB';
    const nextDesc =
      toolMeta?.seoDescription ||
      langDescriptions?.[currentPath] ||
      staticDescriptions[currentPath] ||
      staticDescriptions['/'];
    const nextCanonical = `${baseDomain}${toLocalizedPath(currentPath, lang)}`;

    document.title = nextTitle;
    if (canonicalLink) canonicalLink.href = nextCanonical;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', nextDesc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', nextTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', nextDesc);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', nextCanonical);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', nextTitle);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', nextDesc);

    // Phase 7 (F1+F3): per-language og:locale (+10 alternates, UPDATE the
    // existing tag, never a second og:locale) and localized image alt text.
    // Same mapping as ToolPageLayout via getOgLocale()/getOgLocaleAlternates();
    // the image stays the single shared branded og-image.png and the alt is
    // the page's localized title, never an English fallback.
    const setOgLocaleTags = (locale: string, alternateLocales: string[]) => {
      let el = document.head.querySelector<HTMLMetaElement>('meta[property="og:locale"]');
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', 'og:locale');
        document.head.appendChild(el);
      }
      el.setAttribute('content', locale);
      document
        .head
        .querySelectorAll('meta[property="og:locale:alternate"]')
        .forEach((old) => old.remove());
      for (const alt of alternateLocales) {
        const altEl = document.createElement('meta');
        altEl.setAttribute('property', 'og:locale:alternate');
        altEl.setAttribute('content', alt);
        document.head.appendChild(altEl);
      }
    };
    setOgLocaleTags(getOgLocale(lang), getOgLocaleAlternates(lang));

    const setMetaContent = (
      selector: string,
      attrKey: 'name' | 'property',
      attrVal: string,
      content: string
    ) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrKey, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMetaContent('meta[property="og:image:alt"]', 'property', 'og:image:alt', nextTitle);
    setMetaContent('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', nextTitle);

    // hreflang: App owns home/legal/directory/guide pages; ToolPageLayout owns
    // tool pages, so App never writes (or removes) alternates for a translated
    // tool page — its layout writes them. For every other page without a
    // Spanish equivalent, stale alternates are removed.
    const setHreflangLinks = (items: Array<{ lang: string; href: string }>) => {
      for (const item of items) {
        let el = document.head.querySelector<HTMLLinkElement>(
          `link[rel="alternate"][hreflang="${item.lang}"]`
        );
        if (!el) {
          el = document.createElement('link');
          el.setAttribute('rel', 'alternate');
          el.setAttribute('hreflang', item.lang);
          el.setAttribute('href', item.href);
          document.head.appendChild(el);
        } else {
          el.setAttribute('href', item.href);
        }
      }
    };
    const removeHreflangLinks = () => {
      document.querySelectorAll('link[rel="alternate"]').forEach((el) => el.remove());
    };
    // '/' is the home entry in the registry, not a tool page — it must get
    // App-owned hreflang like any other non-tool page.
    const isToolPage = currentPath !== '/' && Boolean(TOOL_BY_SLUG[currentPath]);
    const isDirectoryPath =
      currentPath === ES_ALL_TOOLS_PATH ||
      currentPath === PT_ALL_TOOLS_PATH ||
      currentPath === FR_ALL_TOOLS_PATH ||
      currentPath === DE_ALL_TOOLS_PATH ||
      currentPath === IT_ALL_TOOLS_PATH ||
      currentPath === ID_ALL_TOOLS_PATH ||
      currentPath === RU_ALL_TOOLS_PATH ||
      currentPath === JA_ALL_TOOLS_PATH ||
      currentPath === KO_ALL_TOOLS_PATH ||
      currentPath === ZH_ALL_TOOLS_PATH;
    const hasLocalizedEquivalent =
      currentPath === '/' ||
      isDirectoryPath ||
      Boolean(
        ES_PATH_BY_EN[currentPath] ??
          PT_PATH_BY_EN[currentPath] ??
          FR_PATH_BY_EN[currentPath] ??
          DE_PATH_BY_EN[currentPath] ??
          IT_PATH_BY_EN[currentPath] ??
          ID_PATH_BY_EN[currentPath] ??
          RU_PATH_BY_EN[currentPath] ??
          JA_PATH_BY_EN[currentPath] ??
          KO_PATH_BY_EN[currentPath] ??
          ZH_PATH_BY_EN[currentPath]
      );
    const toolPageOwnedByLayout =
      isToolPage && lang !== 'en' && Boolean(activeLocale?.tools[currentPath]);
    if (toolPageOwnedByLayout) {
      // Translated tool page: ToolPageLayout writes the alternates.
    } else if (!isToolPage && hasLocalizedEquivalent) {
      // A localized directory has no standalone English page — its English
      // equivalent is the home page (which hosts the tools directory section).
      const enEquivalent = isDirectoryPath ? '/' : currentPath;
      setHreflangLinks([
        { lang: 'en', href: `${baseDomain}${enEquivalent}` },
        { lang: 'es', href: `${baseDomain}${toLocalizedPath(currentPath, 'es')}` },
        { lang: 'pt', href: `${baseDomain}${toLocalizedPath(currentPath, 'pt')}` },
        { lang: 'fr', href: `${baseDomain}${toLocalizedPath(currentPath, 'fr')}` },
        { lang: 'de', href: `${baseDomain}${toLocalizedPath(currentPath, 'de')}` },
        { lang: 'it', href: `${baseDomain}${toLocalizedPath(currentPath, 'it')}` },
        { lang: 'id', href: `${baseDomain}${toLocalizedPath(currentPath, 'id')}` },
        { lang: 'ru', href: `${baseDomain}${toLocalizedPath(currentPath, 'ru')}` },
        { lang: 'ja', href: `${baseDomain}${toLocalizedPath(currentPath, 'ja')}` },
        { lang: 'ko', href: `${baseDomain}${toLocalizedPath(currentPath, 'ko')}` },
        { lang: 'zh', href: `${baseDomain}${toLocalizedPath(currentPath, 'zh')}` },
        { lang: 'x-default', href: `${baseDomain}${enEquivalent}` },
      ]);
    } else if (isToolPage && hasLocalizedEquivalent && lang === 'en') {
      // English tool page with translated equivalents: ToolPageLayout only
      // writes alternates on the translated side (pages pass `alternates`
      // only when lang !== 'en'), so App writes the reciprocal set here —
      // otherwise the English page carries no hreflang at all and Google
      // treats the translated pages' annotations as non-reciprocal.
      setHreflangLinks(getAlternates(currentPath));
    } else if (!isToolPage) {
      // Phase 7 (F7): never strip hreflang from a tool page — ToolPageLayout
      // owns those links, and a future untranslated tool must keep whatever
      // hreflang it has rather than losing it here.
      removeHreflangLinks();
    }

    // Phase 7 (F2): home-page FAQPage + HowTo JSON-LD, injected per language
    // from the exact data the home page renders (EN: FAQ_DATA +
    // HOW_IT_WORKS_STEPS; localized: activeUi.faqSection.faqs +
    // activeUi.educational.sections[2] "How It Works" bullets, split on the
    // first ': ' exactly as EducationalContent renders them). This replaces
    // the static EN FAQPage/HowTo blocks removed from index.html, so the
    // home page carries exactly 1 localized FAQPage + 1 localized HowTo
    // (plus the static WebApplication) in every language. Tool and guide
    // pages inject their own blocks and never get this one.
    const splitBullet = (bullet: string): { title: string; description: string } => {
      const idx = bullet.indexOf(': ');
      if (idx === -1) return { title: bullet, description: '' };
      return { title: bullet.slice(0, idx), description: bullet.slice(idx + 2) };
    };
    const homeJsonLdId = 'home-jsonld';
    const existingHomeJsonLd = document.getElementById(homeJsonLdId);
    if (currentPath === '/') {
      const homeFaqs = activeUi ? activeUi.faqSection.faqs : FAQ_DATA;
      const howToSection = activeUi ? activeUi.educational.sections[2] : undefined;
      const howToBullets: string[] =
        howToSection && 'bullets' in howToSection && howToSection.bullets
          ? [...howToSection.bullets]
          : [];
      const graph: Record<string, unknown>[] = [];
      const howToSteps = activeUi
        ? howToBullets.map((bullet, i) => {
            const { title, description } = splitBullet(bullet);
            return {
              '@type': 'HowToStep',
              position: i + 1,
              name: title,
              text: description || bullet,
            };
          })
        : HOW_IT_WORKS_STEPS.map((s, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: s.title,
            text: s.description,
          }));
      if (howToSteps.length > 0) {
        graph.push({
          '@type': 'HowTo',
          name: activeUi
            ? howToSection?.heading
            : 'How to Compress Images Online with CompressMyPic',
          description: activeUi
            ? howToSection?.body ?? ''
            : 'Compress image online free in three steps: upload your images, adjust the quality, and download the compressed files.',
          url: nextCanonical,
          step: howToSteps,
        });
      }
      if (homeFaqs.length > 0) {
        graph.push({
          '@type': 'FAQPage',
          name: activeUi ? activeUi.faqSection.heading : 'Frequently Asked Questions',
          url: nextCanonical,
          mainEntity: homeFaqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        });
      }
      if (graph.length > 0) {
        const jsonLd = { '@context': 'https://schema.org', '@graph': graph };
        if (existingHomeJsonLd) {
          existingHomeJsonLd.textContent = JSON.stringify(jsonLd);
        } else {
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.id = homeJsonLdId;
          script.text = JSON.stringify(jsonLd);
          document.head.appendChild(script);
        }
      } else if (existingHomeJsonLd) {
        existingHomeJsonLd.remove();
      }
    } else if (existingHomeJsonLd) {
      existingHomeJsonLd.remove();
    }
  }, [currentPath, lang, esLocale, ptLocale, frLocale, deLocale, itLocale, idLocale, ruLocale, jaLocale, koLocale, zhLocale]);

  const handleNavigate = (path: string) => {
    if (path.includes('#')) {
      const [routePart, hash] = path.split('#');
      const localizedRoute = routePart ? toLocalizedPath(routePart, lang) : routePart;
      const finalPath = hash ? `${localizedRoute}#${hash}` : localizedRoute;
      if (routePart) {
        const targetPath = parsePath(localizedRoute).path;
        if (currentPath !== targetPath) {
          window.history.pushState(null, '', withBasePath(finalPath));
          setRoute(parsePath(localizedRoute));
        }
      }
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const localizedPath = toLocalizedPath(path, lang);
    window.history.pushState(null, '', withBasePath(localizedPath));
    setRoute(parsePath(localizedPath));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTool = () => {
    if (currentPath !== '/') {
      const homePath = toLocalizedPath('/', lang);
      window.history.pushState(null, '', withBasePath(homePath));
      setRoute(parsePath(homePath));
      setTimeout(() => {
        toolRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      toolRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (next: SupportedLang) => {
    localStorage.setItem(LANG_STORAGE_KEY, next);
    // A localized directory has no English route — switching to English lands on home.
    const isDirectoryPath =
      route.path === ES_ALL_TOOLS_PATH ||
      route.path === PT_ALL_TOOLS_PATH ||
      route.path === FR_ALL_TOOLS_PATH ||
      route.path === DE_ALL_TOOLS_PATH ||
      route.path === IT_ALL_TOOLS_PATH ||
      route.path === ID_ALL_TOOLS_PATH ||
      route.path === RU_ALL_TOOLS_PATH ||
      route.path === JA_ALL_TOOLS_PATH ||
      route.path === KO_ALL_TOOLS_PATH ||
      route.path === ZH_ALL_TOOLS_PATH;
    const target =
      next === 'en'
        ? isDirectoryPath
          ? '/'
          : route.path
        : toLocalizedPath(route.path, next);
    // If the current page has no equivalent in the target language, fall back
    // to that language's home instead of a broken page.
    const mapForNext =
      next === 'es' ? ES_PATH_BY_EN : next === 'pt' ? PT_PATH_BY_EN : next === 'fr' ? FR_PATH_BY_EN : next === 'de' ? DE_PATH_BY_EN : next === 'it' ? IT_PATH_BY_EN : next === 'id' ? ID_PATH_BY_EN : next === 'ru' ? RU_PATH_BY_EN : next === 'ja' ? JA_PATH_BY_EN : next === 'ko' ? KO_PATH_BY_EN : next === 'zh' ? ZH_PATH_BY_EN : undefined;
    const existsInNext =
      route.path === '/' ||
      isDirectoryPath ||
      (mapForNext !== undefined && Boolean(mapForNext[route.path]));
    const finalTarget = next !== 'en' && !existsInNext ? `/${next}/` : target;
    // Phase 7 (F4): keep the current query string and hash across a language
    // switch (e.g. ?test=1#faq) — previously pushState dropped both.
    const suffix = `${window.location.search}${window.location.hash}`;
    window.history.pushState(null, '', withBasePath(finalTarget) + suffix);
    setLang(next);
    setRoute(parsePath(finalTarget));
    window.scrollTo({ top: 0 });
  };

  // Revoke object URLs on unmount or removal
  useEffect(() => {
    return () => {
      images.forEach((img) => {
        if (img.originalPreviewUrl) URL.revokeObjectURL(img.originalPreviewUrl);
        if (img.compressedPreviewUrl) URL.revokeObjectURL(img.compressedPreviewUrl);
      });
    };
  }, []);

  const handleUpdateSettings = (newSettings: Partial<CompressionSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  /**
   * Process a single image with current settings
   */
  const processImage = useCallback(
    async (item: ImageItem, currentSettings: CompressionSettings): Promise<ImageItem> => {
      try {
        const result = await compressSingleImage(
          item,
          currentSettings.quality,
          currentSettings.format,
          currentSettings.backgroundColor
        );

        if (item.compressedPreviewUrl) {
          URL.revokeObjectURL(item.compressedPreviewUrl);
        }

        return {
          ...item,
          compressedBlob: result.blob,
          compressedPreviewUrl: result.previewUrl,
          compressedSize: result.size,
          compressedWidth: result.width,
          compressedHeight: result.height,
          outputType: result.outputType,
          outputExtension: result.outputExtension,
          outputFilename: result.outputFilename,
          spaceSaved: result.spaceSaved,
          compressionPercentage: result.compressionPercentage,
          quality: currentSettings.quality,
          keptOriginal: false,
          status: 'done',
          errorMessage: null,
        };
      } catch (err) {
        console.error('Compression failed for', item.name, err);
        return {
          ...item,
          status: 'error',
          errorMessage: err instanceof Error ? err.message : 'Unknown compression failure.',
        };
      }
    },
    []
  );

  /**
   * Handle newly selected files
   */
  const handleFilesSelected = async (newFiles: File[]) => {
    setIsCompressing(true);

    const initialItems: ImageItem[] = [];

    for (const file of newFiles) {
      const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      let previewUrl = URL.createObjectURL(file);

      try {
        // HEIC/HEIF photos cannot be displayed by the browser directly:
        // use the converted JPEG for the thumbnail preview.
        const decodable = await toDecodableBlob(file);
        if (decodable !== file) {
          URL.revokeObjectURL(previewUrl);
          previewUrl = URL.createObjectURL(decodable);
        }
        const img = await loadImageFromFile(file);
        const hasAlpha = await detectTransparency(img);

        initialItems.push({
          id,
          file,
          name: file.name,
          originalSize: file.size,
          originalWidth: img.naturalWidth,
          originalHeight: img.naturalHeight,
          originalType: file.type || 'image/jpeg',
          originalPreviewUrl: previewUrl,
          hasAlpha,
          compressedBlob: null,
          compressedPreviewUrl: null,
          compressedSize: null,
          compressedWidth: null,
          compressedHeight: null,
          outputType: 'image/jpeg',
          outputExtension: '.jpg',
          outputFilename: file.name,
          quality: settings.quality,
          status: 'compressing',
          errorMessage: null,
          spaceSaved: null,
          compressionPercentage: null,
        });
      } catch (err) {
        console.error('Failed to load file', file.name, err);
        initialItems.push({
          id,
          file,
          name: file.name,
          originalSize: file.size,
          originalWidth: 0,
          originalHeight: 0,
          originalType: file.type,
          originalPreviewUrl: previewUrl,
          hasAlpha: false,
          compressedBlob: null,
          compressedPreviewUrl: null,
          compressedSize: null,
          compressedWidth: null,
          compressedHeight: null,
          outputType: 'image/jpeg',
          outputExtension: '.jpg',
          outputFilename: file.name,
          quality: settings.quality,
          status: 'error',
          errorMessage: activeUi ? activeUi.uploadZone.errorLoadFailed : 'Corrupted or unreadable image file.',
          spaceSaved: null,
          compressionPercentage: null,
        });
      }
    }

    setImages((prev) => [...prev, ...initialItems]);

    // Compress each newly added item
    const processedItems: ImageItem[] = [];
    for (const item of initialItems) {
      if (item.status === 'error') {
        processedItems.push(item);
        continue;
      }
      const processed = await processImage(item, settings);
      processedItems.push(processed);
    }

    setImages((prev) =>
      prev.map((existing) => {
        const found = processedItems.find((p) => p.id === existing.id);
        return found || existing;
      })
    );

    setIsCompressing(false);
  };

  /**
   * Re-compress all loaded images with updated settings
   */
  const handleCompressAll = async () => {
    if (images.length === 0) return;
    setIsCompressing(true);

    setImages((prev) =>
      prev.map((img) => ({
        ...img,
        status: img.status === 'error' && !img.originalWidth ? 'error' : 'compressing',
      }))
    );

    const updatedList: ImageItem[] = [];
    for (const img of images) {
      if (img.status === 'error' && !img.originalWidth) {
        updatedList.push(img);
        continue;
      }
      const compressed = await processImage(img, settings);
      updatedList.push(compressed);
    }

    setImages(updatedList);
    setIsCompressing(false);
  };

  /**
   * Re-compress an individual image
   */
  const handleRecompressSingle = async (id: string) => {
    const target = images.find((img) => img.id === id);
    if (!target) return;

    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, status: 'compressing' } : img))
    );

    const updated = await processImage(target, settings);
    setImages((prev) => prev.map((img) => (img.id === id ? updated : img)));
  };

  const handleKeepOriginal = (id: string) => {
    setImages((prev) =>
      prev.map((img) => {
        if (img.id !== id) return img;
        if (img.compressedPreviewUrl && img.compressedPreviewUrl !== img.originalPreviewUrl) {
          URL.revokeObjectURL(img.compressedPreviewUrl);
        }
        return {
          ...img,
          compressedBlob: img.file,
          compressedPreviewUrl: URL.createObjectURL(img.file),
          compressedSize: img.originalSize,
          compressedWidth: img.originalWidth,
          compressedHeight: img.originalHeight,
          outputType: (img.originalType as ImageFormat) || 'image/png',
          outputExtension: getFileExtension(img.name) || '.png',
          outputFilename: img.name,
          spaceSaved: 0,
          compressionPercentage: 0,
          keptOriginal: true,
          status: 'done',
          errorMessage: null,
        };
      })
    );
  };

  /**
   * Remove an individual image
   */
  const handleRemoveImage = (id: string) => {
    setImages((prev) => {
      const target = prev.find((img) => img.id === id);
      if (target) {
        if (target.originalPreviewUrl) URL.revokeObjectURL(target.originalPreviewUrl);
        if (target.compressedPreviewUrl) URL.revokeObjectURL(target.compressedPreviewUrl);
      }
      return prev.filter((img) => img.id !== id);
    });
  };

  /**
   * Clear all images
   */
  const handleClearAll = () => {
    images.forEach((img) => {
      if (img.originalPreviewUrl) URL.revokeObjectURL(img.originalPreviewUrl);
      if (img.compressedPreviewUrl) URL.revokeObjectURL(img.compressedPreviewUrl);
    });
    setImages([]);
    setComparisonTarget(null);
  };

  /**
   * Download a single compressed image
   */
  const handleDownloadSingle = (image: ImageItem) => {
    if (!image.compressedBlob) return;
    triggerDownload(image.compressedBlob, image.outputFilename);
  };

  /**
   * Download all compressed images as a ZIP file
   */
  const handleDownloadAllZip = async () => {
    try {
      setIsZipping(true);
      setZipProgress(0);
      const zipBlob = await createZipArchive(images, (percent) => {
        setZipProgress(percent);
      });
      triggerDownload(zipBlob, 'compressed_images_compressmypic.zip');
    } catch (err) {
      console.error('ZIP creation failed:', err);
      alert('Failed to package ZIP archive. Please download images individually.');
    } finally {
      setIsZipping(false);
      setZipProgress(0);
    }
  };

  const hasTransparentImages = images.some((img) => img.hasAlpha);
  const hasPngImages = images.some(
    (img) => img.originalType === 'image/png' || /\.png$/i.test(img.name)
  );

  // Active-language registries for the header dropdown, the tools directory
  // and the homepage: English order, with the translated entry substituted
  // when it exists (tools not yet translated keep their English entry).
  const toolsRegistry = activeLocale
    ? TOOLS_REGISTRY.map((t) => activeLocale.tools[t.slug] ?? t)
    : TOOLS_REGISTRY;
  const categoryLabels = activeLocale ? activeLocale.categories : TOOL_CATEGORIES;
  const showLocaleLoading = lang !== 'en' && localeLoading && !activeLocale;
  const localeLoadingText =
    lang === 'zh' ? '加载中…' : lang === 'ja' ? '読み込み中…' : lang === 'ko' ? '로딩 중…' : lang === 'id' ? 'Memuat…' : lang === 'ru' ? 'Загрузка…' : lang === 'de' ? 'Wird geladen…' : lang === 'it' ? 'Caricamento…' : lang === 'pt' ? 'Carregando…' : lang === 'fr' ? 'Chargement…' : 'Cargando…';

  // Languages that have a translation of the CURRENT page (the switcher guard).
  // route.path is the English path for tools/legal/guides (parsePath maps the
  // localized URL back), or the localized directory key for directory pages.
  const pageHasLang = (l: SupportedLang): boolean => {
    if (l === 'en') return true;
    if (route.path === '/') return true;
    if (
      route.path === ES_ALL_TOOLS_PATH ||
      route.path === PT_ALL_TOOLS_PATH ||
      route.path === FR_ALL_TOOLS_PATH ||
      route.path === DE_ALL_TOOLS_PATH ||
      route.path === IT_ALL_TOOLS_PATH ||
      route.path === ID_ALL_TOOLS_PATH ||
      route.path === RU_ALL_TOOLS_PATH ||
      route.path === JA_ALL_TOOLS_PATH ||
      route.path === KO_ALL_TOOLS_PATH ||
      route.path === ZH_ALL_TOOLS_PATH
    ) {
      return true;
    }
    const map =
      l === 'es' ? ES_PATH_BY_EN : l === 'pt' ? PT_PATH_BY_EN : l === 'fr' ? FR_PATH_BY_EN : l === 'de' ? DE_PATH_BY_EN : l === 'it' ? IT_PATH_BY_EN : l === 'id' ? ID_PATH_BY_EN : l === 'ru' ? RU_PATH_BY_EN : l === 'ja' ? JA_PATH_BY_EN : l === 'ko' ? KO_PATH_BY_EN : l === 'zh' ? ZH_PATH_BY_EN : undefined;
    return map !== undefined && map[route.path] !== undefined;
  };
  const availableLanguages: SupportedLang[] = SUPPORTED_LANGS.filter((l) => pageHasLang(l));

  // Homepage (compressor app). Extracted so the English and Spanish home
  // branches render the same DOM; `strings` is the Spanish bundle, or null
  // for English (components fall back to their English defaults).
  const renderHome = (strings: EsLocale['ui'] | PtLocale['ui'] | FrLocale['ui'] | DeLocale['ui'] | ItLocale['ui'] | IdLocale['ui'] | RuLocale['ui'] | JaLocale['ui'] | KoLocale['ui'] | ZhLocale['ui'] | null) => (
    <>
          <Hero strings={strings?.hero} />

          <main ref={toolRef} className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 pb-16">
            <div className="space-y-6">
              {/* Upload Dropzone */}
              <UploadZone
                onFilesSelected={handleFilesSelected}
                maxFileSizeMB={settings.maxFileSizeMB}
                disabled={isCompressing}
                strings={strings?.uploadZone}
              />

              {/* Compression Settings & Controls */}
              {images.length > 0 && (
                <CompressionControls
                  settings={settings}
                  onUpdateSettings={handleUpdateSettings}
                  onCompressAll={handleCompressAll}
                  onClearAll={handleClearAll}
                  totalImagesCount={images.length}
                  hasTransparentImages={hasTransparentImages}
                  hasPngImages={hasPngImages}
                  isCompressing={isCompressing}
                  strings={strings?.compressionControls}
                />
              )}

              {/* Results List and Download Panel */}
              {images.length > 0 && (
                <ResultsList
                  images={images}
                  onDownloadSingle={handleDownloadSingle}
                  onDownloadAllZip={handleDownloadAllZip}
                  onRemoveImage={handleRemoveImage}
                  onOpenComparison={(img) => setComparisonTarget(img)}
                  onRecompressSingle={handleRecompressSingle}
                  onKeepOriginal={handleKeepOriginal}
                  isZipping={isZipping}
                  zipProgress={zipProgress}
                  strings={strings?.resultsList}
                />
              )}
            </div>
          </main>

          {/* Tools Directory Grid */}
          <ToolsDirectorySection
            onNavigate={handleNavigate}
            currentPath="/"
            toolsRegistry={toolsRegistry}
            categoryLabels={categoryLabels}
            strings={strings?.toolsDirectory}
          />

          {/* Share Section */}
                    <ShareSection strings={strings?.shareSection} />
          {/* Reserved AdSlot 2: Between Tool and Educational Content */}
          <div className="px-4">
            <AdSlot slotId="mid-content-banner" format="horizontal" />
          </div>

          {/* Educational Content Section */}
          <EducationalContent
            sections={
              strings
                ? strings.educational.sections.map((section) => ({
                    ...section,
                    bullets: 'bullets' in section && section.bullets ? [...section.bullets] : undefined,
                  }))
                : undefined
            }
          />

          {/* FAQ Section */}
          {/* Guides Section */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">{strings?.guidesSection.heading ?? 'Guides'}</h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{strings?.guidesSection.subheading ?? 'Step-by-step guides to get smaller files without losing visible quality.'}</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a href={toLocalizedPath('/guides/compress-images-for-whatsapp', lang)} onClick={(e) => { e.preventDefault(); handleNavigate('/guides/compress-images-for-whatsapp'); }} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-xs hover:shadow-md hover:border-blue-200 dark:hover:border-blue-500/50 transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3"><MessageCircle className="w-5 h-5" /></div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-50">{strings?.guidesSection.cards[0].title ?? 'How to compress images for WhatsApp without losing quality'}</h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-normal">{strings?.guidesSection.cards[0].desc ?? 'Shrink photos before sending so they stay sharp and send fast.'}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-blue-600 dark:text-blue-400">{strings?.guidesSection.cards[0].cta ?? 'Read guide →'}</span>
            </a>
            <a href={toLocalizedPath('/guides/jpg-vs-png-vs-webp', lang)} onClick={(e) => { e.preventDefault(); handleNavigate('/guides/jpg-vs-png-vs-webp'); }} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-xs hover:shadow-md hover:border-blue-200 dark:hover:border-blue-500/50 transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3"><FileImage className="w-5 h-5" /></div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-50">{strings?.guidesSection.cards[1].title ?? 'JPG vs PNG vs WebP: Which Format Should You Use?'}</h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-normal">{strings?.guidesSection.cards[1].desc ?? 'File size, quality and transparency compared, so you can pick the right format.'}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-blue-600 dark:text-blue-400">{strings?.guidesSection.cards[1].cta ?? 'Read guide →'}</span>
            </a>
            <a href={toLocalizedPath('/guides/reduce-image-size-to-100kb', lang)} onClick={(e) => { e.preventDefault(); handleNavigate('/guides/reduce-image-size-to-100kb'); }} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-xs hover:shadow-md hover:border-blue-200 dark:hover:border-blue-500/50 transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3"><Zap className="w-5 h-5" /></div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-50">{strings?.guidesSection.cards[2].title ?? 'How to Reduce Image Size to 100KB for Web &amp; Email'}</h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-normal">{strings?.guidesSection.cards[2].desc ?? 'Step-by-step: hit 100KB without losing visible quality.'}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-blue-600 dark:text-blue-400">{strings?.guidesSection.cards[2].cta ?? 'Read guide →'}</span>
            </a>
          </div>
        </div>
      </section>
      <FaqSection
        heading={strings?.faqSection.heading}
        subheading={strings?.faqSection.subheading}
        faqs={strings ? [...strings.faqSection.faqs] : undefined}
      />

          {/* Reserved AdSlot 3: Near Bottom of Page */}
          <div className="px-4 pb-6">
            <AdSlot slotId="footer-bottom-banner" format="horizontal" />
          </div>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      {/* 1. Header */}
      <Header
        onNavigate={handleNavigate}
        onScrollToTool={scrollToTool}
        lang={lang}
        onLanguageChange={handleLanguageChange}
        strings={activeUi ? activeUi.header : undefined}
        toolsRegistry={toolsRegistry}
        categoryLabels={categoryLabels}
        availableLanguages={availableLanguages}
      />

      {/* Reserved AdSlot 1: Below Header (stays invisible until real AdSense IDs supplied) */}
      <div className="px-4">
        <AdSlot slotId="header-top-banner" format="horizontal" />
      </div>

      {/* 2. Page Router */}
      {showLocaleLoading ? (
        <main className="flex-1">
          <div className="max-w-5xl mx-auto px-4 py-20 text-center">
            <div
              className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600"
              aria-hidden="true"
            />
            <p className="mt-4 text-sm text-slate-500">{localeLoadingText}</p>
          </div>
        </main>
      ) : lang !== 'en' && currentPath === '/' ? (
        renderHome(activeUi)
      ) : currentPath === ES_ALL_TOOLS_PATH ? (
        <main className="flex-1">
          <AllToolsPageEs onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === PT_ALL_TOOLS_PATH ? (
        <main className="flex-1">
          <AllToolsPagePt onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === FR_ALL_TOOLS_PATH ? (
        <main className="flex-1">
          <AllToolsPageFr onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === DE_ALL_TOOLS_PATH ? (
        <main className="flex-1">
          <AllToolsPageDe onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === IT_ALL_TOOLS_PATH ? (
        <main className="flex-1">
          <AllToolsPageIt onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === ID_ALL_TOOLS_PATH ? (
        <main className="flex-1">
          <AllToolsPageId onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === RU_ALL_TOOLS_PATH ? (
        <main className="flex-1">
          <AllToolsPageRu onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === JA_ALL_TOOLS_PATH ? (
        <main className="flex-1">
          <AllToolsPageJa onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === KO_ALL_TOOLS_PATH ? (
        <main className="flex-1">
          <AllToolsPageKo onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === ZH_ALL_TOOLS_PATH ? (
        <main className="flex-1">
          <AllToolsPageZh onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : lang === 'es' && currentPath === '/about' ? (
        <main className="flex-1">
          <AboutPageEs onNavigate={handleNavigate} />
        </main>
      ) : lang === 'pt' && currentPath === '/about' ? (
        <main className="flex-1">
          <AboutPagePt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'fr' && currentPath === '/about' ? (
        <main className="flex-1">
          <AboutPageFr onNavigate={handleNavigate} />
        </main>
      ) : lang === 'de' && currentPath === '/about' ? (
        <main className="flex-1">
          <AboutPageDe onNavigate={handleNavigate} />
        </main>
      ) : lang === 'it' && currentPath === '/about' ? (
        <main className="flex-1">
          <AboutPageIt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'id' && currentPath === '/about' ? (
        <main className="flex-1">
          <AboutPageId onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ru' && currentPath === '/about' ? (
        <main className="flex-1">
          <AboutPageRu onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ja' && currentPath === '/about' ? (
        <main className="flex-1">
          <AboutPageJa onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ko' && currentPath === '/about' ? (
        <main className="flex-1">
          <AboutPageKo onNavigate={handleNavigate} />
        </main>
      ) : lang === 'zh' && currentPath === '/about' ? (
        <main className="flex-1">
          <AboutPageZh onNavigate={handleNavigate} />
        </main>
      ) : lang === 'es' && currentPath === '/contact' ? (
        <main className="flex-1">
          <ContactPageEs onNavigate={handleNavigate} />
        </main>
      ) : lang === 'pt' && currentPath === '/contact' ? (
        <main className="flex-1">
          <ContactPagePt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'fr' && currentPath === '/contact' ? (
        <main className="flex-1">
          <ContactPageFr onNavigate={handleNavigate} />
        </main>
      ) : lang === 'de' && currentPath === '/contact' ? (
        <main className="flex-1">
          <ContactPageDe onNavigate={handleNavigate} />
        </main>
      ) : lang === 'it' && currentPath === '/contact' ? (
        <main className="flex-1">
          <ContactPageIt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'id' && currentPath === '/contact' ? (
        <main className="flex-1">
          <ContactPageId onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ru' && currentPath === '/contact' ? (
        <main className="flex-1">
          <ContactPageRu onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ja' && currentPath === '/contact' ? (
        <main className="flex-1">
          <ContactPageJa onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ko' && currentPath === '/contact' ? (
        <main className="flex-1">
          <ContactPageKo onNavigate={handleNavigate} />
        </main>
      ) : lang === 'zh' && currentPath === '/contact' ? (
        <main className="flex-1">
          <ContactPageZh onNavigate={handleNavigate} />
        </main>
      ) : lang === 'es' && currentPath === '/privacy' ? (
        <main className="flex-1">
          <PrivacyPageEs onNavigate={handleNavigate} />
        </main>
      ) : lang === 'pt' && currentPath === '/privacy' ? (
        <main className="flex-1">
          <PrivacyPagePt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'fr' && currentPath === '/privacy' ? (
        <main className="flex-1">
          <PrivacyPageFr onNavigate={handleNavigate} />
        </main>
      ) : lang === 'de' && currentPath === '/privacy' ? (
        <main className="flex-1">
          <PrivacyPageDe onNavigate={handleNavigate} />
        </main>
      ) : lang === 'it' && currentPath === '/privacy' ? (
        <main className="flex-1">
          <PrivacyPageIt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'id' && currentPath === '/privacy' ? (
        <main className="flex-1">
          <PrivacyPageId onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ru' && currentPath === '/privacy' ? (
        <main className="flex-1">
          <PrivacyPageRu onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ja' && currentPath === '/privacy' ? (
        <main className="flex-1">
          <PrivacyPageJa onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ko' && currentPath === '/privacy' ? (
        <main className="flex-1">
          <PrivacyPageKo onNavigate={handleNavigate} />
        </main>
      ) : lang === 'zh' && currentPath === '/privacy' ? (
        <main className="flex-1">
          <PrivacyPageZh onNavigate={handleNavigate} />
        </main>
      ) : lang === 'es' && currentPath === '/terms' ? (
        <main className="flex-1">
          <TermsPageEs onNavigate={handleNavigate} />
        </main>
      ) : lang === 'pt' && currentPath === '/terms' ? (
        <main className="flex-1">
          <TermsPagePt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'fr' && currentPath === '/terms' ? (
        <main className="flex-1">
          <TermsPageFr onNavigate={handleNavigate} />
        </main>
      ) : lang === 'de' && currentPath === '/terms' ? (
        <main className="flex-1">
          <TermsPageDe onNavigate={handleNavigate} />
        </main>
      ) : lang === 'it' && currentPath === '/terms' ? (
        <main className="flex-1">
          <TermsPageIt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'id' && currentPath === '/terms' ? (
        <main className="flex-1">
          <TermsPageId onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ru' && currentPath === '/terms' ? (
        <main className="flex-1">
          <TermsPageRu onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ja' && currentPath === '/terms' ? (
        <main className="flex-1">
          <TermsPageJa onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ko' && currentPath === '/terms' ? (
        <main className="flex-1">
          <TermsPageKo onNavigate={handleNavigate} />
        </main>
      ) : lang === 'zh' && currentPath === '/terms' ? (
        <main className="flex-1">
          <TermsPageZh onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/about' ? (
        <main className="flex-1">
          <AboutPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/contact' ? (
        <main className="flex-1">
          <ContactPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/privacy' ? (
        <main className="flex-1">
          <PrivacyPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/terms' ? (
        <main className="flex-1">
          <TermsPage onNavigate={handleNavigate} />
        </main>
            ) : lang === 'es' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main className="flex-1">
                <GuideWhatsAppPageEs onNavigate={handleNavigate} />
              </main>
            ) : lang === 'pt' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main className="flex-1">
                <GuideWhatsAppPagePt onNavigate={handleNavigate} />
              </main>
            ) : lang === 'fr' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main className="flex-1">
                <GuideWhatsAppPageFr onNavigate={handleNavigate} />
              </main>
            ) : lang === 'de' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main className="flex-1">
                <GuideWhatsAppPageDe onNavigate={handleNavigate} />
              </main>
            ) : lang === 'it' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main className="flex-1">
                <GuideWhatsAppPageIt onNavigate={handleNavigate} />
              </main>
            ) : lang === 'id' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main className="flex-1">
                <GuideWhatsAppPageId onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ru' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main className="flex-1">
                <GuideWhatsAppPageRu onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ja' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main className="flex-1">
                <GuideWhatsAppPageJa onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ko' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main className="flex-1">
                <GuideWhatsAppPageKo onNavigate={handleNavigate} />
              </main>
            ) : lang === 'zh' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main className="flex-1">
                <GuideWhatsAppPageZh onNavigate={handleNavigate} />
              </main>
            ) : lang === 'es' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main className="flex-1">
                <GuideFormatsPageEs onNavigate={handleNavigate} />
              </main>
            ) : lang === 'pt' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main className="flex-1">
                <GuideFormatsPagePt onNavigate={handleNavigate} />
              </main>
            ) : lang === 'fr' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main className="flex-1">
                <GuideFormatsPageFr onNavigate={handleNavigate} />
              </main>
            ) : lang === 'de' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main className="flex-1">
                <GuideFormatsPageDe onNavigate={handleNavigate} />
              </main>
            ) : lang === 'it' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main className="flex-1">
                <GuideFormatsPageIt onNavigate={handleNavigate} />
              </main>
            ) : lang === 'id' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main className="flex-1">
                <GuideFormatsPageId onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ru' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main className="flex-1">
                <GuideFormatsPageRu onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ja' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main className="flex-1">
                <GuideFormatsPageJa onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ko' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main className="flex-1">
                <GuideFormatsPageKo onNavigate={handleNavigate} />
              </main>
            ) : lang === 'zh' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main className="flex-1">
                <GuideFormatsPageZh onNavigate={handleNavigate} />
              </main>
            ) : lang === 'es' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main className="flex-1">
                <Guide100kbPageEs onNavigate={handleNavigate} />
              </main>
            ) : lang === 'pt' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main className="flex-1">
                <Guide100kbPagePt onNavigate={handleNavigate} />
              </main>
            ) : lang === 'fr' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main className="flex-1">
                <Guide100kbPageFr onNavigate={handleNavigate} />
              </main>
            ) : lang === 'de' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main className="flex-1">
                <Guide100kbPageDe onNavigate={handleNavigate} />
              </main>
            ) : lang === 'it' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main className="flex-1">
                <Guide100kbPageIt onNavigate={handleNavigate} />
              </main>
            ) : lang === 'id' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main className="flex-1">
                <Guide100kbPageId onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ru' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main className="flex-1">
                <Guide100kbPageRu onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ja' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main className="flex-1">
                <Guide100kbPageJa onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ko' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main className="flex-1">
                <Guide100kbPageKo onNavigate={handleNavigate} />
              </main>
            ) : lang === 'zh' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main className="flex-1">
                <Guide100kbPageZh onNavigate={handleNavigate} />
              </main>
            ) : currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main className="flex-1">
                        <GuideWhatsAppPage onNavigate={handleNavigate} />
              </main>
            ) : currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main className="flex-1">
                        <GuideFormatsPage onNavigate={handleNavigate} />
              </main>
            ) : currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main className="flex-1">
                        <Guide100kbPage onNavigate={handleNavigate} />
              </main>
      ) : currentPath === '/image-resizer' ? (
        <main className="flex-1">
          <ImageResizerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-resizer'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-resizer']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-resizer']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-resizer']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-resizer']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-resizer']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-resizer']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-resizer']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-resizer']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-resizer']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-resizer']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-converter' ? (
        <main className="flex-1">
          <ImageConverterPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-converter'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-converter']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-converter']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-converter']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-converter']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-converter']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-converter']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-converter']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-converter']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-converter']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-converter']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/rotate-flip-image' ? (
        <main className="flex-1">
          <RotateFlipPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/rotate-flip-image'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-to-pdf' ? (
        <main className="flex-1">
          <ImageToPdfPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-to-pdf'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-metadata-viewer' ? (
        <main className="flex-1">
          <MetadataViewerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-metadata-viewer'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/remove-image-metadata' ? (
        <main className="flex-1">
          <RemoveMetadataPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/remove-image-metadata'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/favicon-generator' ? (
        <main className="flex-1">
          <FaviconGeneratorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/favicon-generator'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/favicon-generator']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/favicon-generator']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/favicon-generator']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/favicon-generator']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/favicon-generator']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/favicon-generator']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/favicon-generator']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/favicon-generator']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/favicon-generator']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/favicon-generator']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-color-picker' ? (
        <main className="flex-1">
          <ColorPickerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-color-picker'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-color-picker']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-color-picker']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-color-picker']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-color-picker']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-color-picker']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-color-picker']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-color-picker']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-color-picker']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-color-picker']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-color-picker']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-dimensions-checker' ? (
        <main className="flex-1">
          <DimensionsCheckerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-dimensions-checker'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-cropper' ? (
        <main className="flex-1">
          <ImageCropperPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-cropper'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-cropper']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-cropper']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-cropper']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-cropper']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-cropper']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-cropper']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-cropper']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-cropper']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-cropper']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-cropper']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-watermark' ? (
        <main className="flex-1">
          <ImageWatermarkPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-watermark'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-watermark']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-watermark']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-watermark']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-watermark']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-watermark']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-watermark']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-watermark']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-watermark']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-watermark']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-watermark']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/blur-pixelate-image' ? (
        <main className="flex-1">
          <BlurPixelatePage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/blur-pixelate-image'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/add-text-to-image' ? (
        <main className="flex-1">
          <AddTextPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/add-text-to-image'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-border-generator' ? (
        <main className="flex-1">
          <ImageBorderPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-border-generator'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-border-generator']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-border-generator']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-border-generator']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-border-generator']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-border-generator']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-border-generator']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-border-generator']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-border-generator']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-border-generator']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-border-generator']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/round-image-corners' ? (
        <main className="flex-1">
          <RoundCornersPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/round-image-corners'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/round-image-corners']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/round-image-corners']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/round-image-corners']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/round-image-corners']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/round-image-corners']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/round-image-corners']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/round-image-corners']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/round-image-corners']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/round-image-corners']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/round-image-corners']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-brightness-editor' ? (
        <main className="flex-1">
          <BrightnessEditorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-brightness-editor'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-contrast-editor' ? (
        <main className="flex-1">
          <ContrastEditorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-contrast-editor'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-saturation-editor' ? (
        <main className="flex-1">
          <SaturationEditorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-saturation-editor'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-filters' ? (
        <main className="flex-1">
          <ImageFiltersPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-filters'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-filters']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-filters']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-filters']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-filters']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-filters']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-filters']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-filters']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-filters']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-filters']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-filters']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/add-background-to-image' ? (
        <main className="flex-1">
          <AddBackgroundPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/add-background-to-image'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-splitter' ? (
        <main className="flex-1">
          <ImageSplitterPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-splitter'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-splitter']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-splitter']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-splitter']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-splitter']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-splitter']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-splitter']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-splitter']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-splitter']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-splitter']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-splitter']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-dpi-changer' ? (
        <main className="flex-1">
          <DpiChangerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-dpi-changer'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-to-base64' ? (
        <main className="flex-1">
          <ImageToBase64Page
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-to-base64'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-to-base64']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-to-base64']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-to-base64']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-to-base64']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-to-base64']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-to-base64']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-to-base64']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-to-base64']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-to-base64']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-to-base64']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/base64-to-image' ? (
        <main className="flex-1">
          <Base64ToImagePage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/base64-to-image'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/base64-to-image']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/base64-to-image']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/base64-to-image']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/base64-to-image']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/base64-to-image']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/base64-to-image']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/base64-to-image']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/base64-to-image']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/base64-to-image']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/base64-to-image']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-color-palette-extractor' ? (
        <main className="flex-1">
          <PaletteExtractorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-color-palette-extractor'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/gif-maker' ? (
        <main className="flex-1">
          <GifMakerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/gif-maker'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/gif-maker']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/gif-maker']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/gif-maker']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/gif-maker']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/gif-maker']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/gif-maker']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/gif-maker']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/gif-maker']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/gif-maker']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/gif-maker']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-collage-maker' ? (
        <main className="flex-1">
          <CollageMakerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-collage-maker'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/compress-image-to-50kb' ? (
        <main className="flex-1">
          <Compress50KbPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/compress-image-to-50kb'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/compress-image-to-100kb' ? (
        <main className="flex-1">
          <Compress100KbPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/compress-image-to-100kb'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/compress-image-to-200kb' ? (
        <main className="flex-1">
          <Compress200KbPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/compress-image-to-200kb'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/compress-image-to-500kb' ? (
        <main className="flex-1">
          <Compress500KbPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/compress-image-to-500kb'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/bulk-image-compressor' ? (
        <main className="flex-1">
          <BulkCompressorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/bulk-image-compressor'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/bulk-image-compressor'],
                    compressionControls: esLocale.ui.compressionControls,
                    resultsList: esLocale.ui.resultsList,
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/bulk-image-compressor'],
                    compressionControls: ptLocale.ui.compressionControls,
                    resultsList: ptLocale.ui.resultsList,
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/bulk-image-compressor'],
                    compressionControls: frLocale.ui.compressionControls,
                    resultsList: frLocale.ui.resultsList,
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/bulk-image-compressor'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/bulk-image-compressor'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/bulk-image-compressor'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/bulk-image-compressor'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/bulk-image-compressor'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/bulk-image-compressor'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/bulk-image-compressor'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/target-file-size-compressor' ? (
        <main className="flex-1">
          <TargetFileSizePage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/target-file-size-compressor'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/bulk-image-resizer' ? (
        <main className="flex-1">
          <BulkResizerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/bulk-image-resizer'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/bulk-image-converter' ? (
        <main className="flex-1">
          <BulkConverterPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/bulk-image-converter'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/web-image-optimizer' ? (
        <main className="flex-1">
          <WebOptimizerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/web-image-optimizer'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/gif-compressor' ? (
        <main className="flex-1">
          <GifCompressorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/gif-compressor'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/gif-compressor']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/gif-compressor']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/gif-compressor']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/gif-compressor']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/gif-compressor']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/gif-compressor']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/gif-compressor']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/gif-compressor']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/gif-compressor']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/gif-compressor']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/heic-to-jpg' ? (
        <main className="flex-1">
          <HeicToJpgPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/heic-to-jpg'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/jpg-to-png' ? (
        <main className="flex-1">
          <JpgToPngPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/jpg-to-png'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/png-to-jpg' ? (
        <main className="flex-1">
          <PngToJpgPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/png-to-jpg'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/jpg-to-webp' ? (
        <main className="flex-1">
          <JpgToWebpPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/jpg-to-webp'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/webp-to-jpg' ? (
        <main className="flex-1">
          <WebpToJpgPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/webp-to-jpg'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/png-to-webp' ? (
        <main className="flex-1">
          <PngToWebpPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/png-to-webp'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/png-to-webp']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/png-to-webp']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/png-to-webp']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/png-to-webp']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/png-to-webp']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/png-to-webp']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/png-to-webp']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/png-to-webp']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/png-to-webp']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/png-to-webp']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/webp-to-png' ? (
        <main className="flex-1">
          <WebpToPngPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/webp-to-png'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/webp-to-png']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/webp-to-png']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/webp-to-png']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/webp-to-png']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/webp-to-png']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/webp-to-png']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/webp-to-png']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/webp-to-png']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/webp-to-png']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/webp-to-png']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/svg-to-png' ? (
        <main className="flex-1">
          <SvgToPngPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/svg-to-png'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/svg-to-png']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/svg-to-png']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/svg-to-png']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/svg-to-png']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/svg-to-png']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/svg-to-png']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/svg-to-png']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/svg-to-png']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/svg-to-png']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/svg-to-png']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/avif-to-jpg' ? (
        <main className="flex-1">
          <AvifToJpgPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/avif-to-jpg'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/bmp-to-jpg' ? (
        <main className="flex-1">
          <BmpToJpgPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/bmp-to-jpg'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/remove-background' ? (
        <main className="flex-1">
          <Suspense
            fallback={
              <div className="max-w-5xl mx-auto px-4 py-20 text-center text-sm text-slate-500">
                Loading Background Remover...
              </div>
            }
          >
            <RemoveBackgroundPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/remove-background'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/remove-background']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/remove-background'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/remove-background']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/remove-background'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/remove-background']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/remove-background'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/remove-background']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/remove-background'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/remove-background']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/remove-background'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/remove-background']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/remove-background'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/remove-background']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/remove-background'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/remove-background']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/remove-background'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/remove-background']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/remove-background'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/remove-background']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/remove-background'],
                  }
                : undefined
            }
          />
          </Suspense>
        </main>
      ) : (
        renderHome(null)
      )}

      {/* 3. Footer */}
      <Footer
        onNavigate={handleNavigate}
        strings={
          activeUi
            ? {
                ...activeUi.footer,
                toolsLinks: [...activeUi.footer.toolsLinks],
                legalLinks: [...activeUi.footer.legalLinks],
                guidesLinks: [...activeUi.footer.guidesLinks],
                moreLinks: [...activeUi.footer.moreLinks],
                directoryLinks: [...activeUi.footer.directoryLinks],
              }
            : undefined
        }
        localizePath={activeUi ? (slug) => toLocalizedPath(slug, lang) : undefined}
      />

      {/* Comparison Modal */}
      {comparisonTarget && (
        <ComparisonModal
          image={comparisonTarget}
          onClose={() => setComparisonTarget(null)}
          titlePrefix={activeUi?.comparisonModal.titlePrefix}
          beforeLabel={activeUi?.comparisonModal.beforeLabel}
          afterLabel={activeUi?.comparisonModal.afterLabel}
          closeLabel={activeUi?.comparisonModal.closeLabel}
          instruction={activeUi?.comparisonModal.instruction}
          sliderLabel={activeUi?.comparisonModal.sliderLabel}
          sideBySideLabel={activeUi?.comparisonModal.sideBySideLabel}
          zoomInLabel={activeUi?.comparisonModal.zoomInLabel}
          zoomOutLabel={activeUi?.comparisonModal.zoomOutLabel}
          originalLabel={activeUi?.comparisonModal.originalLabel}
          outputLabel={activeUi?.comparisonModal.outputLabel}
          reductionLabel={activeUi?.comparisonModal.reductionLabel}
          sizeChangeLabel={activeUi?.comparisonModal.sizeChangeLabel}
          qualityLabel={activeUi?.comparisonModal.qualityLabel}
          formatLabel={activeUi?.comparisonModal.formatLabel}
          modalAriaLabel={activeUi?.comparisonModal.modalAriaLabel}
          altCompressed={activeUi?.comparisonModal.altCompressed}
          altOriginal={activeUi?.comparisonModal.altOriginal}
          altProcessed={activeUi?.comparisonModal.altProcessed}
        />
      )}
    </div>
  );
}
