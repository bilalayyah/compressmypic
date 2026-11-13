import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Layers, Zap } from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import type { ToolDefinition } from '../data/tools';
import type { SupportedLang } from '../locales/config';
import type { ToolPageLayoutStrings } from '../components/ToolPageLayout';
import type { UploadZoneStrings } from '../components/UploadZone';
import type { ComparisonModalStrings } from '../components/ComparisonModal';
import type { CompressionControlsStrings } from '../components/CompressionControls';
import type { ResultsListStrings } from '../components/ResultsList';
import { toSpanishPath, getEsAlternates } from '../locales/es/slugs';
import { ToolPageLayout } from '../components/ToolPageLayout';
import { UploadZone } from '../components/UploadZone';
import { CompressionControls } from '../components/CompressionControls';
import { ResultsList } from '../components/ResultsList';
import { ComparisonModal } from '../components/ComparisonModal';
import { CompressionSettings, ImageFormat, ImageItem } from '../types';
import {
  compressSingleImage,
  detectTransparency,
  loadImageFromFile,
  toDecodableBlob,
} from '../utils/compressor';
import { getFileExtension } from '../utils/formatters';
import { createZipArchive, triggerDownload } from '../utils/zip';

export interface PageEsStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
  // Passed through to the shared workspace components (Batch 1 dict sections).
  // App supplies these two fields from esLocale.ui on the bulk-compressor route.
  compressionControls?: CompressionControlsStrings;
  resultsList?: ResultsListStrings;
}

interface BulkCompressorPageProps {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
}

export const BulkCompressorPage: React.FC<BulkCompressorPageProps> = ({
  onNavigate,
  lang,
  tool,
  toolRegistry,
  categoryLabels,
  esStrings,
}) => {
  const activeTool = tool ?? TOOL_BY_SLUG['/bulk-image-compressor'];
  const t = (key: string, fallback: string) =>
    lang === 'es' && esStrings?.toolUi ? (esStrings.toolUi[key] as string | undefined) ?? fallback : fallback;
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
          keptOriginal: false,
          status: 'done',
          errorMessage: null,
        };
      } catch (err) {
        return {
          ...item,
          status: 'error',
          errorMessage: err instanceof Error ? err.message : t('errorCompressionFailed', 'Compression failed.'),
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
          errorMessage: t('errorCorruptedFile', 'Corrupted or unreadable image file.'),
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
  const hasPngImages = images.some(
    (img) => img.originalType === 'image/png' || /\.png$/i.test(img.name)
  );

  return (
    <ToolPageLayout
      tool={activeTool}
      onNavigate={onNavigate}
      lang={lang}
      ui={esStrings?.layoutUi}
      canonicalPath={lang === 'es' ? toSpanishPath(activeTool.slug) : undefined}
      alternates={lang === 'es' ? getEsAlternates(activeTool.slug) : undefined}
      toolRegistry={toolRegistry}
      categoryLabels={categoryLabels}
    >
      <div className="space-y-6">
        <UploadZone
          onFilesSelected={handleFilesSelected}
          maxFileSizeMB={settings.maxFileSizeMB}
          disabled={isCompressing}
          title={t('uploadTitle', 'Drop dozens of images for bulk compression')}
          strings={esStrings?.uploadZone}
        />

        {/* Quick Batch Profiles */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
            <Layers className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{t('quickBatchProfiles', 'Quick Batch Profiles:')}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => applyQuickBatchProfile(75, 'webp')}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 inline mr-1 text-blue-600" />
              {t('profileWebFast', 'Web Fast (WebP 75%)')}
            </button>
            <button
              type="button"
              onClick={() => applyQuickBatchProfile(65, 'jpeg')}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 cursor-pointer"
            >
              {t('profileEmailSharing', 'Email / Sharing (JPG 65%)')}
            </button>
            <button
              type="button"
              onClick={() => applyQuickBatchProfile(85, 'original')}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 cursor-pointer"
            >
              {t('profileHighFidelity', 'High Fidelity (85%)')}
            </button>
          </div>
        </div>

        {isCompressing && totalToProcess > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-xs font-semibold text-blue-800">
              <span>{t('compressingBatch', 'Compressing batch locally...')}</span>
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
            hasPngImages={hasPngImages}
            isCompressing={isCompressing}
            strings={esStrings?.compressionControls}
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
            onKeepOriginal={handleKeepOriginal}
            isZipping={isZipping}
            zipProgress={zipProgress}
            strings={esStrings?.resultsList}
          />
        )}
      </div>

      {comparisonTarget && (
        <ComparisonModal
          image={comparisonTarget}
          onClose={() => setComparisonTarget(null)}
          beforeLabel={esStrings?.comparisonModal.beforeLabel}
          closeLabel={esStrings?.comparisonModal.closeLabel}
          instruction={esStrings?.comparisonModal.instruction}
          sliderLabel={esStrings?.comparisonModal.sliderLabel}
          sideBySideLabel={esStrings?.comparisonModal.sideBySideLabel}
          zoomInLabel={esStrings?.comparisonModal.zoomInLabel}
          zoomOutLabel={esStrings?.comparisonModal.zoomOutLabel}
          originalLabel={esStrings?.comparisonModal.originalLabel}
          outputLabel={esStrings?.comparisonModal.outputLabel}
          reductionLabel={esStrings?.comparisonModal.reductionLabel}
          sizeChangeLabel={esStrings?.comparisonModal.sizeChangeLabel}
          qualityLabel={esStrings?.comparisonModal.qualityLabel}
          formatLabel={esStrings?.comparisonModal.formatLabel}
          modalAriaLabel={esStrings?.comparisonModal.modalAriaLabel}
          altCompressed={esStrings?.comparisonModal.altCompressed}
          altOriginal={esStrings?.comparisonModal.altOriginal}
          altProcessed={esStrings?.comparisonModal.altProcessed}
        />
      )}
    </ToolPageLayout>
  );
};
