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
import { LegalModal } from './components/LegalModal';
import { ConfigSettingsModal } from './components/ConfigSettingsModal';
import { AdSlot } from './components/AdSlot';
import { CompressionSettings, ImageItem, ModalType } from './types';
import { compressSingleImage, detectTransparency, loadImageFromFile } from './utils/compressor';
import { createZipArchive, triggerDownload } from './utils/zip';

export default function App() {
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

  // Modal views
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [comparisonTarget, setComparisonTarget] = useState<ImageItem | null>(null);

  const toolRef = useRef<HTMLDivElement>(null);

  const scrollToTool = () => {
    setActiveModal(null);
    toolRef.current?.scrollIntoView({ behavior: 'smooth' });
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

        // Revoke old compressed preview if exists
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

    // Add to state and compress concurrently
    setImages((prev) => [...prev, ...initialItems]);

    // Compress each new item
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

    // Set all to compressing
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
        onOpenModal={(type) => setActiveModal(type)}
        onScrollToTool={scrollToTool}
      />

      {/* Reserved AdSlot 1: Below Header */}
      <div className="px-4">
        <AdSlot slotId="header-top-banner" format="horizontal" />
      </div>

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Main Image Compressor Application Workspace */}
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

      {/* 4. Educational Content Section */}
      <EducationalContent />

      {/* 5. FAQ Section */}
      <FaqSection />

      {/* Reserved AdSlot 3: Near Bottom of Page */}
      <div className="px-4 pb-6">
        <AdSlot slotId="footer-bottom-banner" format="horizontal" />
      </div>

      {/* 6. Footer */}
      <Footer
        onOpenModal={(type) => setActiveModal(type)}
        onOpenSettings={() => setActiveModal('settings')}
      />

      {/* Modals */}
      {comparisonTarget && (
        <ComparisonModal
          image={comparisonTarget}
          onClose={() => setComparisonTarget(null)}
        />
      )}

      {activeModal && activeModal !== 'settings' && activeModal !== 'comparison' && (
        <LegalModal
          type={activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'settings' && (
        <ConfigSettingsModal
          settings={settings}
          onUpdateSettings={handleUpdateSettings}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}
