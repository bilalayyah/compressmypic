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
import { TOOL_BY_SLUG } from './data/tools';

const RemoveBackgroundPage = React.lazy(() =>
  import('./pages/RemoveBackgroundPage').then((m) => ({ default: m.RemoveBackgroundPage }))
);
const ImageUpscalerPage = React.lazy(() =>
  import('./pages/ImageUpscalerPage').then((m) => ({ default: m.ImageUpscalerPage }))
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
  '/image-upscaler',
];

function getNormalizedPath(rawPathname: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  let p = rawPathname.toLowerCase();
  if (base && base !== '/' && p.startsWith(base.toLowerCase())) {
    p = p.slice(base.length) || '/';
  }
  p = p.replace(/\/$/, '') || '/';
  return KNOWN_ROUTES.includes(p) ? p : '/';
}

function withBasePath(routePath: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (!base || base === '/') return routePath;
  return `${base}${routePath === '/' ? '/' : routePath}`;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return getNormalizedPath(window.location.pathname);
    }
    return '/';
  });

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
      setCurrentPath(getNormalizedPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title, meta description, OpenGraph, and canonical tag based on active route
  useEffect(() => {
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const baseDomain = 'https://compressmypic.online';
    const toolMeta = TOOL_BY_SLUG[currentPath];

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

    const nextTitle =
      toolMeta?.seoTitle ||
      staticTitles[currentPath] ||
      'Free Image Compressor Online – Reduce Image Size to 100KB';
    const nextDesc =
      toolMeta?.seoDescription ||
      staticDescriptions[currentPath] ||
      staticDescriptions['/'];
    const nextCanonical = `${baseDomain}${currentPath === '/' ? '/' : currentPath}`;

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
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      const targetRoute = route || '/';
      if (currentPath !== targetRoute) {
        window.history.pushState(null, '', withBasePath(path));
        setCurrentPath(targetRoute);
      }
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    window.history.pushState(null, '', withBasePath(path));
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTool = () => {
    if (currentPath !== '/') {
      window.history.pushState(null, '', withBasePath('/'));
      setCurrentPath('/');
      setTimeout(() => {
        toolRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      toolRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
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
          errorMessage: 'Corrupted or unreadable image file.',
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

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      {/* 1. Header */}
      <Header
        onNavigate={handleNavigate}
        onScrollToTool={scrollToTool}
      />

      {/* Reserved AdSlot 1: Below Header (stays invisible until real AdSense IDs supplied) */}
      <div className="px-4">
        <AdSlot slotId="header-top-banner" format="horizontal" />
      </div>

      {/* 2. Page Router */}
      {currentPath === '/about' ? (
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
          <ImageResizerPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-converter' ? (
        <main className="flex-1">
          <ImageConverterPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/rotate-flip-image' ? (
        <main className="flex-1">
          <RotateFlipPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-to-pdf' ? (
        <main className="flex-1">
          <ImageToPdfPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-metadata-viewer' ? (
        <main className="flex-1">
          <MetadataViewerPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/remove-image-metadata' ? (
        <main className="flex-1">
          <RemoveMetadataPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/favicon-generator' ? (
        <main className="flex-1">
          <FaviconGeneratorPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-color-picker' ? (
        <main className="flex-1">
          <ColorPickerPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-dimensions-checker' ? (
        <main className="flex-1">
          <DimensionsCheckerPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-cropper' ? (
        <main className="flex-1">
          <ImageCropperPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-watermark' ? (
        <main className="flex-1">
          <ImageWatermarkPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/blur-pixelate-image' ? (
        <main className="flex-1">
          <BlurPixelatePage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/add-text-to-image' ? (
        <main className="flex-1">
          <AddTextPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-border-generator' ? (
        <main className="flex-1">
          <ImageBorderPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/round-image-corners' ? (
        <main className="flex-1">
          <RoundCornersPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-brightness-editor' ? (
        <main className="flex-1">
          <BrightnessEditorPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-contrast-editor' ? (
        <main className="flex-1">
          <ContrastEditorPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-saturation-editor' ? (
        <main className="flex-1">
          <SaturationEditorPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-filters' ? (
        <main className="flex-1">
          <ImageFiltersPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/add-background-to-image' ? (
        <main className="flex-1">
          <AddBackgroundPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-splitter' ? (
        <main className="flex-1">
          <ImageSplitterPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-dpi-changer' ? (
        <main className="flex-1">
          <DpiChangerPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-to-base64' ? (
        <main className="flex-1">
          <ImageToBase64Page onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/base64-to-image' ? (
        <main className="flex-1">
          <Base64ToImagePage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-color-palette-extractor' ? (
        <main className="flex-1">
          <PaletteExtractorPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/gif-maker' ? (
        <main className="flex-1">
          <GifMakerPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/image-collage-maker' ? (
        <main className="flex-1">
          <CollageMakerPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/compress-image-to-50kb' ? (
        <main className="flex-1">
          <Compress50KbPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/compress-image-to-100kb' ? (
        <main className="flex-1">
          <Compress100KbPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/compress-image-to-200kb' ? (
        <main className="flex-1">
          <Compress200KbPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/compress-image-to-500kb' ? (
        <main className="flex-1">
          <Compress500KbPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/bulk-image-compressor' ? (
        <main className="flex-1">
          <BulkCompressorPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/target-file-size-compressor' ? (
        <main className="flex-1">
          <TargetFileSizePage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/bulk-image-resizer' ? (
        <main className="flex-1">
          <BulkResizerPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/bulk-image-converter' ? (
        <main className="flex-1">
          <BulkConverterPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/web-image-optimizer' ? (
        <main className="flex-1">
          <WebOptimizerPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/gif-compressor' ? (
        <main className="flex-1">
          <GifCompressorPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/heic-to-jpg' ? (
        <main className="flex-1">
          <HeicToJpgPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/jpg-to-png' ? (
        <main className="flex-1">
          <JpgToPngPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/png-to-jpg' ? (
        <main className="flex-1">
          <PngToJpgPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/jpg-to-webp' ? (
        <main className="flex-1">
          <JpgToWebpPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/webp-to-jpg' ? (
        <main className="flex-1">
          <WebpToJpgPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/png-to-webp' ? (
        <main className="flex-1">
          <PngToWebpPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/webp-to-png' ? (
        <main className="flex-1">
          <WebpToPngPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/svg-to-png' ? (
        <main className="flex-1">
          <SvgToPngPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/avif-to-jpg' ? (
        <main className="flex-1">
          <AvifToJpgPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/bmp-to-jpg' ? (
        <main className="flex-1">
          <BmpToJpgPage onNavigate={handleNavigate} />
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
            <RemoveBackgroundPage onNavigate={handleNavigate} />
          </Suspense>
        </main>
      ) : currentPath === '/image-upscaler' ? (
        <main className="flex-1">
          <Suspense
            fallback={
              <div className="max-w-5xl mx-auto px-4 py-20 text-center text-sm text-slate-500">
                Loading AI Image Upscaler...
              </div>
            }
          >
            <ImageUpscalerPage onNavigate={handleNavigate} />
          </Suspense>
        </main>
      ) : (
        /* HOME / COMPRESSOR APPLICATION */
        <>
          <Hero />

          <main ref={toolRef} className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 pb-16">
            <div className="space-y-6">
              {/* Upload Dropzone */}
              <UploadZone
                onFilesSelected={handleFilesSelected}
                maxFileSizeMB={settings.maxFileSizeMB}
                disabled={isCompressing}
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
                />
              )}
            </div>
          </main>

          {/* Tools Directory Grid */}
          <ToolsDirectorySection onNavigate={handleNavigate} currentPath="/" />

          {/* Share Section */}
                    <ShareSection />
          {/* Reserved AdSlot 2: Between Tool and Educational Content */}
          <div className="px-4">
            <AdSlot slotId="mid-content-banner" format="horizontal" />
          </div>

          {/* Educational Content Section */}
          <EducationalContent />

          {/* FAQ Section */}
          {/* Guides Section */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">Guides</h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">Step-by-step guides to get smaller files without losing visible quality.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a href="/guides/compress-images-for-whatsapp" onClick={(e) => { e.preventDefault(); handleNavigate('/guides/compress-images-for-whatsapp'); }} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-xs hover:shadow-md hover:border-blue-200 dark:hover:border-blue-500/50 transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3"><MessageCircle className="w-5 h-5" /></div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-50">How to compress images for WhatsApp without losing quality</h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-normal">Shrink photos before sending so they stay sharp and send fast.</p>
              <span className="mt-3 inline-block text-sm font-semibold text-blue-600 dark:text-blue-400">Read guide →</span>
            </a>
            <a href="/guides/jpg-vs-png-vs-webp" onClick={(e) => { e.preventDefault(); handleNavigate('/guides/jpg-vs-png-vs-webp'); }} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-xs hover:shadow-md hover:border-blue-200 dark:hover:border-blue-500/50 transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3"><FileImage className="w-5 h-5" /></div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-50">JPG vs PNG vs WebP: Which Format Should You Use?</h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-normal">File size, quality and transparency compared, so you can pick the right format.</p>
              <span className="mt-3 inline-block text-sm font-semibold text-blue-600 dark:text-blue-400">Read guide →</span>
            </a>
            <a href="/guides/reduce-image-size-to-100kb" onClick={(e) => { e.preventDefault(); handleNavigate('/guides/reduce-image-size-to-100kb'); }} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 shadow-xs hover:shadow-md hover:border-blue-200 dark:hover:border-blue-500/50 transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3"><Zap className="w-5 h-5" /></div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-50">How to Reduce Image Size to 100KB for Web &amp; Email</h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-normal">Step-by-step: hit 100KB without losing visible quality.</p>
              <span className="mt-3 inline-block text-sm font-semibold text-blue-600 dark:text-blue-400">Read guide →</span>
            </a>
          </div>
        </div>
      </section>
      <FaqSection />

          {/* Reserved AdSlot 3: Near Bottom of Page */}
          <div className="px-4 pb-6">
            <AdSlot slotId="footer-bottom-banner" format="horizontal" />
          </div>
        </>
      )}

      {/* 3. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Comparison Modal */}
      {comparisonTarget && (
        <ComparisonModal
          image={comparisonTarget}
          onClose={() => setComparisonTarget(null)}
        />
      )}
    </div>
  );
}
