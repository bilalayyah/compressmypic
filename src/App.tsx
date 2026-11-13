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
import { EducationalContent } from './components/EducationalContent';
import { FaqSection } from './components/FaqSection';
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
import { AboutPageEs } from './pages/es/AboutPageEs';
import { ContactPageEs } from './pages/es/ContactPageEs';
import { PrivacyPageEs } from './pages/es/PrivacyPageEs';
import { TermsPageEs } from './pages/es/TermsPageEs';
import { AllToolsPageEs } from './pages/es/AllToolsPageEs';
import { GuideWhatsAppPageEs } from './pages/es/GuideWhatsAppPageEs';
import { GuideFormatsPageEs } from './pages/es/GuideFormatsPageEs';
import { Guide100kbPageEs } from './pages/es/Guide100kbPageEs';

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
  return KNOWN_ROUTES.includes(p) ? { path: p, lang: 'en' } : { path: '/', lang: 'en' };
}

/** English path → the equivalent path in `lang` (identity for 'en'). */
function toLocalizedPath(enPath: string, lang: SupportedLang): string {
  if (lang === 'en') return enPath;
  if (enPath === '/') return '/es/';
  if (enPath === ES_ALL_TOOLS_PATH) return ES_ALL_TOOLS_PATH; // already localized key
  return ES_PATH_BY_EN[enPath] ?? enPath;
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
  const [localeLoading, setLocaleLoading] = useState(false);

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
  }, [esLocale]);

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

  // Load the locale files when the language changes to Spanish.
  useEffect(() => {
    if (lang === 'es') {
      loadLocale('es');
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
    if (noBase === '/' && localStorage.getItem(LANG_STORAGE_KEY) === 'es') {
      window.history.replaceState(null, '', withBasePath('/es/'));
      setLang('es');
      setRoute({ path: '/', lang: 'es' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update document title, meta description, OpenGraph, and canonical tag based on active route
  useEffect(() => {
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const baseDomain = 'https://compressmypic.online';
    const toolMeta =
      (lang === 'es' && esLocale ? esLocale.tools[currentPath] : undefined) ??
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

    const nextTitle =
      toolMeta?.seoTitle ||
      (lang === 'es' ? staticTitlesEs[currentPath] : undefined) ||
      staticTitles[currentPath] ||
      'Free Image Compressor Online – Reduce Image Size to 100KB';
    const nextDesc =
      toolMeta?.seoDescription ||
      (lang === 'es' ? staticDescriptionsEs[currentPath] : undefined) ||
      staticDescriptions[currentPath] ||
      staticDescriptions['/'];
    const nextCanonical = `${baseDomain}${lang === 'es' ? toLocalizedPath(currentPath, 'es') : currentPath}`;

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
    const hasEsEquivalent =
      currentPath === '/' ||
      currentPath === ES_ALL_TOOLS_PATH ||
      Boolean(ES_PATH_BY_EN[currentPath]);
    const toolPageOwnedByLayout =
      isToolPage && lang === 'es' && Boolean(esLocale?.tools[currentPath]);
    if (toolPageOwnedByLayout) {
      // Translated tool page: ToolPageLayout writes the alternates.
    } else if (!isToolPage && hasEsEquivalent) {
      // The ES directory has no standalone English page — its English
      // equivalent is the home page (which hosts the tools directory section).
      const enEquivalent = currentPath === ES_ALL_TOOLS_PATH ? '/' : currentPath;
      setHreflangLinks([
        { lang: 'en', href: `${baseDomain}${enEquivalent}` },
        { lang: 'es', href: `${baseDomain}${toLocalizedPath(currentPath, 'es')}` },
        { lang: 'x-default', href: `${baseDomain}${enEquivalent}` },
      ]);
    } else if (isToolPage && hasEsEquivalent && lang === 'en') {
      // English tool page with a Spanish equivalent: ToolPageLayout only
      // writes alternates on the Spanish side (pages pass `alternates` only
      // when lang === 'es'), so App writes the reciprocal set here —
      // otherwise the English page carries no hreflang at all and Google
      // treats the Spanish page's annotations as non-reciprocal.
      setHreflangLinks([
        { lang: 'en', href: `${baseDomain}${currentPath}` },
        { lang: 'es', href: `${baseDomain}${toLocalizedPath(currentPath, 'es')}` },
        { lang: 'x-default', href: `${baseDomain}${currentPath}` },
      ]);
    } else {
      removeHreflangLinks();
    }
  }, [currentPath, lang, esLocale]);

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
    // The ES directory has no English route — switching to English lands on home.
    const target =
      next === 'en'
        ? route.path === ES_ALL_TOOLS_PATH
          ? '/'
          : route.path
        : toLocalizedPath(route.path, next);
    // If the current page has no Spanish equivalent (e.g. a guide — Batch 7),
    // fall back to that language's home instead of a broken page.
    const existsInEs =
      route.path === '/' ||
      route.path === ES_ALL_TOOLS_PATH ||
      Boolean(ES_PATH_BY_EN[route.path]);
    const finalTarget = next === 'es' && !existsInEs ? '/es/' : target;
    window.history.pushState(null, '', withBasePath(finalTarget));
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
          errorMessage: lang === 'es' && esLocale ? esLocale.ui.uploadZone.errorLoadFailed : 'Corrupted or unreadable image file.',
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
  // and the homepage: English order, with the Spanish entry substituted when
  // it exists (tools not yet translated keep their English entry).
  const toolsRegistry =
    lang === 'es' && esLocale
      ? TOOLS_REGISTRY.map((t) => esLocale.tools[t.slug] ?? t)
      : TOOLS_REGISTRY;
  const categoryLabels =
    lang === 'es' && esLocale ? esLocale.categories : TOOL_CATEGORIES;
  const esUi = lang === 'es' ? esLocale?.ui ?? null : null;
  const showEsLoading = lang === 'es' && localeLoading && !esLocale;

  // Languages that have a translation of the CURRENT page (the switcher guard).
  const pageHasEs =
    route.path === '/' ||
    route.path === ES_ALL_TOOLS_PATH ||
    ES_PATH_BY_EN[route.path] !== undefined ||
    route.path === '/about' ||
    route.path === '/contact' ||
    route.path === '/privacy' ||
    route.path === '/terms';
  const availableLanguages: SupportedLang[] = SUPPORTED_LANGS.filter(
    (l) => l === 'en' || (l === 'es' && pageHasEs)
  );

  // Homepage (compressor app). Extracted so the English and Spanish home
  // branches render the same DOM; `strings` is the Spanish bundle, or null
  // for English (components fall back to their English defaults).
  const renderHome = (strings: EsLocale['ui'] | null) => (
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
        strings={esUi ? esUi.header : undefined}
        toolsRegistry={toolsRegistry}
        categoryLabels={categoryLabels}
        availableLanguages={availableLanguages}
      />

      {/* Reserved AdSlot 1: Below Header (stays invisible until real AdSense IDs supplied) */}
      <div className="px-4">
        <AdSlot slotId="header-top-banner" format="horizontal" />
      </div>

      {/* 2. Page Router */}
      {showEsLoading ? (
        <main className="flex-1">
          <div className="max-w-5xl mx-auto px-4 py-20 text-center">
            <div
              className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600"
              aria-hidden="true"
            />
            <p className="mt-4 text-sm text-slate-500">Cargando…</p>
          </div>
        </main>
      ) : lang === 'es' && currentPath === '/' ? (
        renderHome(esUi)
      ) : currentPath === ES_ALL_TOOLS_PATH ? (
        <main className="flex-1">
          <AllToolsPageEs onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : lang === 'es' && currentPath === '/about' ? (
        <main className="flex-1">
          <AboutPageEs onNavigate={handleNavigate} />
        </main>
      ) : lang === 'es' && currentPath === '/contact' ? (
        <main className="flex-1">
          <ContactPageEs onNavigate={handleNavigate} />
        </main>
      ) : lang === 'es' && currentPath === '/privacy' ? (
        <main className="flex-1">
          <PrivacyPageEs onNavigate={handleNavigate} />
        </main>
      ) : lang === 'es' && currentPath === '/terms' ? (
        <main className="flex-1">
          <TermsPageEs onNavigate={handleNavigate} />
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
            ) : lang === 'es' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main className="flex-1">
                <GuideFormatsPageEs onNavigate={handleNavigate} />
              </main>
            ) : lang === 'es' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main className="flex-1">
                <Guide100kbPageEs onNavigate={handleNavigate} />
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
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-resizer'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-converter' ? (
        <main className="flex-1">
          <ImageConverterPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-converter'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/rotate-flip-image' ? (
        <main className="flex-1">
          <RotateFlipPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/rotate-flip-image'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-to-pdf' ? (
        <main className="flex-1">
          <ImageToPdfPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-to-pdf'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-metadata-viewer' ? (
        <main className="flex-1">
          <MetadataViewerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-metadata-viewer'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/remove-image-metadata' ? (
        <main className="flex-1">
          <RemoveMetadataPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/remove-image-metadata'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/favicon-generator' ? (
        <main className="flex-1">
          <FaviconGeneratorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/favicon-generator'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-color-picker' ? (
        <main className="flex-1">
          <ColorPickerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-color-picker'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-dimensions-checker' ? (
        <main className="flex-1">
          <DimensionsCheckerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-dimensions-checker'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-cropper' ? (
        <main className="flex-1">
          <ImageCropperPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-cropper'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-watermark' ? (
        <main className="flex-1">
          <ImageWatermarkPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-watermark'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/blur-pixelate-image' ? (
        <main className="flex-1">
          <BlurPixelatePage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/blur-pixelate-image'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/add-text-to-image' ? (
        <main className="flex-1">
          <AddTextPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/add-text-to-image'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-border-generator' ? (
        <main className="flex-1">
          <ImageBorderPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-border-generator'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/round-image-corners' ? (
        <main className="flex-1">
          <RoundCornersPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/round-image-corners'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-brightness-editor' ? (
        <main className="flex-1">
          <BrightnessEditorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-brightness-editor'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-contrast-editor' ? (
        <main className="flex-1">
          <ContrastEditorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-contrast-editor'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-saturation-editor' ? (
        <main className="flex-1">
          <SaturationEditorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-saturation-editor'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-filters' ? (
        <main className="flex-1">
          <ImageFiltersPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-filters'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/add-background-to-image' ? (
        <main className="flex-1">
          <AddBackgroundPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/add-background-to-image'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-splitter' ? (
        <main className="flex-1">
          <ImageSplitterPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-splitter'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-dpi-changer' ? (
        <main className="flex-1">
          <DpiChangerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-dpi-changer'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-to-base64' ? (
        <main className="flex-1">
          <ImageToBase64Page
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-to-base64'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/base64-to-image' ? (
        <main className="flex-1">
          <Base64ToImagePage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/base64-to-image'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-color-palette-extractor' ? (
        <main className="flex-1">
          <PaletteExtractorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-color-palette-extractor'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/gif-maker' ? (
        <main className="flex-1">
          <GifMakerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/gif-maker'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/image-collage-maker' ? (
        <main className="flex-1">
          <CollageMakerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/image-collage-maker'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/compress-image-to-50kb' ? (
        <main className="flex-1">
          <Compress50KbPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/compress-image-to-50kb'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/compress-image-to-100kb' ? (
        <main className="flex-1">
          <Compress100KbPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/compress-image-to-100kb'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/compress-image-to-200kb' ? (
        <main className="flex-1">
          <Compress200KbPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/compress-image-to-200kb'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/compress-image-to-500kb' ? (
        <main className="flex-1">
          <Compress500KbPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/compress-image-to-500kb'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/bulk-image-compressor' ? (
        <main className="flex-1">
          <BulkCompressorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/bulk-image-compressor'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/target-file-size-compressor' ? (
        <main className="flex-1">
          <TargetFileSizePage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/target-file-size-compressor'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/bulk-image-resizer' ? (
        <main className="flex-1">
          <BulkResizerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/bulk-image-resizer'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/bulk-image-converter' ? (
        <main className="flex-1">
          <BulkConverterPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/bulk-image-converter'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/web-image-optimizer' ? (
        <main className="flex-1">
          <WebOptimizerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/web-image-optimizer'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/gif-compressor' ? (
        <main className="flex-1">
          <GifCompressorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/gif-compressor'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/heic-to-jpg' ? (
        <main className="flex-1">
          <HeicToJpgPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/heic-to-jpg'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/jpg-to-png' ? (
        <main className="flex-1">
          <JpgToPngPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/jpg-to-png'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/png-to-jpg' ? (
        <main className="flex-1">
          <PngToJpgPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/png-to-jpg'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/jpg-to-webp' ? (
        <main className="flex-1">
          <JpgToWebpPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/jpg-to-webp'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/webp-to-jpg' ? (
        <main className="flex-1">
          <WebpToJpgPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/webp-to-jpg'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/png-to-webp' ? (
        <main className="flex-1">
          <PngToWebpPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/png-to-webp'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/webp-to-png' ? (
        <main className="flex-1">
          <WebpToPngPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/webp-to-png'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/svg-to-png' ? (
        <main className="flex-1">
          <SvgToPngPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/svg-to-png'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/avif-to-jpg' ? (
        <main className="flex-1">
          <AvifToJpgPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/avif-to-jpg'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          />
        </main>
      ) : currentPath === '/bmp-to-jpg' ? (
        <main className="flex-1">
          <BmpToJpgPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={lang === 'es' && esLocale ? esLocale.tools['/bmp-to-jpg'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
            tool={lang === 'es' && esLocale ? esLocale.tools['/remove-background'] : undefined}
            toolRegistry={lang === 'es' && esLocale ? esLocale.tools : undefined}
            categoryLabels={lang === 'es' && esLocale ? esLocale.categories : undefined}
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
          esUi
            ? {
                ...esUi.footer,
                toolsLinks: [...esUi.footer.toolsLinks],
                legalLinks: [...esUi.footer.legalLinks],
                guidesLinks: [...esUi.footer.guidesLinks],
                moreLinks: [...esUi.footer.moreLinks],
                directoryLinks: [...esUi.footer.directoryLinks],
              }
            : undefined
        }
        localizePath={esUi ? (slug) => toLocalizedPath(slug, lang) : undefined}
      />

      {/* Comparison Modal */}
      {comparisonTarget && (
        <ComparisonModal
          image={comparisonTarget}
          onClose={() => setComparisonTarget(null)}
          titlePrefix={esUi?.comparisonModal.titlePrefix}
          beforeLabel={esUi?.comparisonModal.beforeLabel}
          afterLabel={esUi?.comparisonModal.afterLabel}
          closeLabel={esUi?.comparisonModal.closeLabel}
          instruction={esUi?.comparisonModal.instruction}
          sliderLabel={esUi?.comparisonModal.sliderLabel}
          sideBySideLabel={esUi?.comparisonModal.sideBySideLabel}
          zoomInLabel={esUi?.comparisonModal.zoomInLabel}
          zoomOutLabel={esUi?.comparisonModal.zoomOutLabel}
          originalLabel={esUi?.comparisonModal.originalLabel}
          outputLabel={esUi?.comparisonModal.outputLabel}
          reductionLabel={esUi?.comparisonModal.reductionLabel}
          sizeChangeLabel={esUi?.comparisonModal.sizeChangeLabel}
          qualityLabel={esUi?.comparisonModal.qualityLabel}
          formatLabel={esUi?.comparisonModal.formatLabel}
          modalAriaLabel={esUi?.comparisonModal.modalAriaLabel}
          altCompressed={esUi?.comparisonModal.altCompressed}
          altOriginal={esUi?.comparisonModal.altOriginal}
          altProcessed={esUi?.comparisonModal.altProcessed}
        />
      )}
    </div>
  );
}
