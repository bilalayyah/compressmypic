import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Layers, Zap } from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import { ToolPageLayout } from '../components/ToolPageLayout';
import { UploadZone } from '../components/UploadZone';
import { CompressionControls } from '../components/CompressionControls';
import { ResultsList } from '../components/ResultsList';
import { ComparisonModal } from '../components/ComparisonModal';
import { CompressionSettings, ImageItem } from '../types';
import {
  compressSingleImage,
  detectTransparency,
  loadImageFromFile,
  toDecodableBlob,
} from '../utils/compressor';
import { createZipArchive, triggerDownload } from '../utils/zip';

interface BulkCompressorPageProps {
  onNavigate: (path: string) => void;
}

export const BulkCompressorPage: React.FC<BulkCompressorPageProps> = ({ onNavigate }) => {
  const tool = TOOL_BY_SLUG['/bulk-image-compressor'];
  const [images, setImages] = useState<ImageItem[]>([]);
  const imagesRef = useRef<ImageItem[]>([]);
  imagesRef.current = images;

  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [processedCount, setProcessedCount] = useState<number>(0);
  const [totalToProcess, setTotalToProcess] = useState<number>(0);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [zipProgress, setZipProgress] = useState<number>(0);
  const [comparisonTarget, setComparisonTarget] = useState<ImageItem | null>(null);

  const [settings, setSettings] = useState<CompressionSettings>({
    preset: 'balanced',
    quality: 70,
    format: 'original',
    maxFileSizeMB: 25,
    fillTransparentBackground: true,
    backgroundColor: '#ffffff',
  });

  useEffect(() => {
    return () => {
      imagesRef.current.forEach((img) => {
        if (img.originalPreviewUrl) URL.revokeObjectURL(img.originalPreviewUrl);
        if (img.compressedPreviewUrl) URL.revokeObjectURL(img.compressedPreviewUrl);
      });
    };
  }, []);

  const handleUpdateSettings = (newSettings: Partial<CompressionSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

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
        return {
          ...item,
          status: 'error',
          errorMessage: err instanceof Error ? err.message : 'Compression failed.',
        };
      }
    },
    []
  );

  const handleFilesSelected = async (newFiles: File[]) => {
    setIsCompressing(true);
    setProcessedCount(0);
    setTotalToProcess(newFiles.length);

    const initialItems: ImageItem[] = [];
    for (const file of newFiles) {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      let previewUrl = URL.createObjectURL(file);

      try {
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
      } catch {
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

    let done = 0;
    for (const item of initialItems) {
      if (item.status === 'error') {
        done++;
        setProcessedCount(done);
        continue;
      }
      const processed = await processImage(item, settings);
      done++;
      setProcessedCount(done);
      setImages((prev) => prev.map((ex) => (ex.id === processed.id ? processed : ex)));
    }

    setIsCompressing(false);
  };

  const handleCompressAll = async (overrideSettings?: CompressionSettings) => {
    const activeSettings = overrideSettings || settings;
    if (images.length === 0) return;

    setIsCompressing(true);
    setProcessedCount(0);
    setTotalToProcess(images.length);

    setImages((prev) =>
      prev.map((img) => ({
        ...img,
        status: img.originalWidth ? 'compressing' : 'error',
      }))
    );

    let done = 0;
    const updatedList: ImageItem[] = [];
    for (const img of images) {
      if (!img.originalWidth) {
        updatedList.push(img);
        done++;
        setProcessedCount(done);
        continue;
      }
      const compressed = await processImage(img, activeSettings);
      updatedList.push(compressed);
      done++;
      setProcessedCount(done);
    }

    setImages(updatedList);
    setIsCompressing(false);
  };

  const handleRecompressSingle = async (id: string) => {
    const target = images.find((img) => img.id === id);
    if (!target) return;
    setImages((prev) => prev.map((img) => (img.id === id ? { ...img, status: 'compressing' } : img)));
    const updated = await processImage(target, settings);
    setImages((prev) => prev.map((img) => (img.id === id ? updated : img)));
  };

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

  const handleClearAll = () => {
    images.forEach((img) => {
      if (img.originalPreviewUrl) URL.revokeObjectURL(img.originalPreviewUrl);
      if (img.compressedPreviewUrl) URL.revokeObjectURL(img.compressedPreviewUrl);
    });
    setImages([]);
    setComparisonTarget(null);
  };

  const handleDownloadSingle = (image: ImageItem) => {
    if (!image.compressedBlob) return;
    triggerDownload(image.compressedBlob, image.outputFilename);
  };

  const handleDownloadAllZip = async () => {
    try {
      setIsZipping(true);
      setZipProgress(0);
      const zipBlob = await createZipArchive(images, (percent) => {
        setZipProgress(percent);
      });
      triggerDownload(zipBlob, 'bulk_compressed_compressmypic.zip');
    } finally {
      setIsZipping(false);
      setZipProgress(0);
    }
  };

  const applyQuickBatchProfile = (quality: number, format: CompressionSettings['format']) => {
    const next: CompressionSettings = {
      ...settings,
      preset: quality === 70 ? 'balanced' : quality === 85 ? 'low' : quality === 50 ? 'high' : 'custom',
      quality,
      format,
    };
    setSettings(next);
    if (images.length > 0) {
      void handleCompressAll(next);
    }
  };

  const hasTransparentImages = images.some((img) => img.hasAlpha);

  return (
    <ToolPageLayout tool={tool} onNavigate={onNavigate}>
      <div className="space-y-6">
        <UploadZone
          onFilesSelected={handleFilesSelected}
          maxFileSizeMB={settings.maxFileSizeMB}
          disabled={isCompressing}
          title="Drop dozens of images for bulk compression"
        />

        {/* Quick Batch Profiles */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
            <Layers className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Quick Batch Profiles:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => applyQuickBatchProfile(75, 'webp')}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 inline mr-1 text-blue-600" />
              Web Fast (WebP 75%)
            </button>
            <button
              type="button"
              onClick={() => applyQuickBatchProfile(65, 'jpeg')}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 cursor-pointer"
            >
              Email / Sharing (JPG 65%)
            </button>
            <button
              type="button"
              onClick={() => applyQuickBatchProfile(85, 'original')}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 cursor-pointer"
            >
              High Fidelity (85%)
            </button>
          </div>
        </div>

        {isCompressing && totalToProcess > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-xs font-semibold text-blue-800">
              <span>Compressing batch locally...</span>
              <span className="font-mono">
                {processedCount} / {totalToProcess}
              </span>
            </div>
            <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-200"
                style={{ width: `${Math.round((processedCount / totalToProcess) * 100)}%` }}
              />
            </div>
          </div>
        )}

        {images.length > 0 && (
          <CompressionControls
            settings={settings}
            onUpdateSettings={handleUpdateSettings}
            onCompressAll={() => void handleCompressAll()}
            onClearAll={handleClearAll}
            totalImagesCount={images.length}
            hasTransparentImages={hasTransparentImages}
            isCompressing={isCompressing}
          />
        )}

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

      {comparisonTarget && (
        <ComparisonModal
          image={comparisonTarget}
          onClose={() => setComparisonTarget(null)}
        />
      )}
    </ToolPageLayout>
  );
};
