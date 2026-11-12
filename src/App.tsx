/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UploadZone } from './components/UploadZone';
import { CompressionControls } from './components/CompressionControls';
import { ResultsList } from './components/ResultsList';
import { ComparisonModal } from './components/ComparisonModal';
import { EducationalContent } from './components/EducationalContent';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AdSlot } from './components/AdSlot';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { CompressionSettings, ImageItem } from './types';
import { compressSingleImage, detectTransparency, loadImageFromFile } from './utils/compressor';
import { createZipArchive, triggerDownload } from './utils/zip';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      if (['/about', '/contact', '/privacy', '/terms'].includes(path)) {
        return path;
      }
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
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title and canonical tag based on active route
  useEffect(() => {
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const baseDomain = 'https://compressmypic.online';

    if (currentPath === '/about') {
      document.title = 'About Us - CompressMyPic';
      if (canonicalLink) canonicalLink.href = `${baseDomain}/about`;
    } else if (currentPath === '/contact') {
      document.title = 'Contact Us - CompressMyPic';
      if (canonicalLink) canonicalLink.href = `${baseDomain}/contact`;
    } else if (currentPath === '/privacy') {
      document.title = 'Privacy Policy - CompressMyPic';
      if (canonicalLink) canonicalLink.href = `${baseDomain}/privacy`;
    } else if (currentPath === '/terms') {
      document.title = 'Terms of Service - CompressMyPic';
      if (canonicalLink) canonicalLink.href = `${baseDomain}/terms`;
    } else {
      document.title = 'Free Image Compressor Online - Compress JPG, PNG & WebP';
      if (canonicalLink) canonicalLink.href = `${baseDomain}/`;
    }
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      const targetRoute = route || '/';
      if (currentPath !== targetRoute) {
        window.history.pushState(null, '', path);
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

    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTool = () => {
    if (currentPath !== '/') {
      window.history.pushState(null, '', '/');
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
      const previewUrl = URL.createObjectURL(file);

      try {
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

          {/* Reserved AdSlot 2: Between Tool and Educational Content */}
          <div className="px-4">
            <AdSlot slotId="mid-content-banner" format="horizontal" />
          </div>

          {/* Educational Content Section */}
          <EducationalContent />

          {/* FAQ Section */}
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
