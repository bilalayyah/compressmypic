/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
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
import { TOOL_BY_SLUG } from './data/tools';
import { CompressionSettings, ImageItem } from './types';
import { compressSingleImage, detectTransparency, loadImageFromFile, toDecodableBlob } from './utils/compressor';
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

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
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
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Guides</h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">Step-by-step guides to get smaller files without losing visible quality.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a href="/guides/compress-images-for-whatsapp" onClick={(e) => { e.preventDefault(); handleNavigate('/guides/compress-images-for-whatsapp'); }} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:shadow-md hover:border-blue-200 transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3"><MessageCircle className="w-5 h-5" /></div>
              <h3 className="text-base font-bold text-slate-900">How to compress images for WhatsApp without losing quality</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-normal">Shrink photos before sending so they stay sharp and send fast.</p>
              <span className="mt-3 inline-block text-sm font-semibold text-blue-600">Read guide →</span>
            </a>
            <a href="/guides/jpg-vs-png-vs-webp" onClick={(e) => { e.preventDefault(); handleNavigate('/guides/jpg-vs-png-vs-webp'); }} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:shadow-md hover:border-blue-200 transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3"><FileImage className="w-5 h-5" /></div>
              <h3 className="text-base font-bold text-slate-900">JPG vs PNG vs WebP: Which Format Should You Use?</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-normal">File size, quality and transparency compared, so you can pick the right format.</p>
              <span className="mt-3 inline-block text-sm font-semibold text-blue-600">Read guide →</span>
            </a>
            <a href="/guides/reduce-image-size-to-100kb" onClick={(e) => { e.preventDefault(); handleNavigate('/guides/reduce-image-size-to-100kb'); }} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:shadow-md hover:border-blue-200 transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3"><Zap className="w-5 h-5" /></div>
              <h3 className="text-base font-bold text-slate-900">How to Reduce Image Size to 100KB for Web &amp; Email</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-normal">Step-by-step: hit 100KB without losing visible quality.</p>
              <span className="mt-3 inline-block text-sm font-semibold text-blue-600">Read guide →</span>
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
