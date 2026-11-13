import React, { useState, useEffect, useRef } from 'react';
import {
  Download,
  FileArchive,
  Link2,
  Link2Off,
  Play,
  RotateCcw,
  SplitSquareVertical,
  Trash2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import type { ToolDefinition } from '../data/tools';
import type { SupportedLang } from '../locales/config';
import type { ToolPageLayoutStrings } from '../components/ToolPageLayout';
import type { UploadZoneStrings } from '../components/UploadZone';
import type { ComparisonModalStrings } from '../components/ComparisonModal';
import { toSpanishPath } from '../locales/es/slugs';
import { toPortuguesePath } from '../locales/pt/slugs';
import { toFrenchPath } from '../locales/fr/slugs';
import { getAlternates } from '../locales/alternates';
import { ToolPageLayout } from '../components/ToolPageLayout';
import { UploadZone } from '../components/UploadZone';
import { ComparisonModal } from '../components/ComparisonModal';
import { ImageItem, OutputFormatChoice } from '../types';
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  ResizeFitMode,
  loadExtendedImageInfo,
  resizeImageFile,
} from '../utils/imageProcessing';
import { formatBytes } from '../utils/formatters';
import { createFilesZipArchive, triggerDownload } from '../utils/zip';

export interface PageEsStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PagePtStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageFrStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

interface ImageResizerPageProps {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
  ptStrings?: PagePtStrings;
  frStrings?: PageFrStrings;
}

export const ImageResizerPage: React.FC<ImageResizerPageProps> = ({
  onNavigate,
  lang,
  tool,
  toolRegistry,
  categoryLabels,
  esStrings,
  ptStrings,
  frStrings,
}) => {
  const activeTool = tool ?? TOOL_BY_SLUG['/image-resizer'];
  const t = (key: string, fallback: string) => {
    if (lang === 'pt' && ptStrings?.toolUi) return (ptStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'fr' && frStrings?.toolUi) return (frStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'es' && esStrings?.toolUi) return (esStrings.toolUi[key] as string | undefined) ?? fallback;
    return fallback;
  };

  const SOCIAL_PRESETS = [
    { label: t('presetInstagramPost', 'Instagram Post (1080×1080)'), width: 1080, height: 1080 },
    { label: t('presetInstagramStory', 'Instagram Story (1080×1920)'), width: 1080, height: 1920 },
    { label: t('presetYouTubeThumb', 'YouTube Thumb (1280×720)'), width: 1280, height: 720 },
    { label: t('presetFacebookCover', 'Facebook Cover (851×315)'), width: 851, height: 315 },
    { label: t('presetXHeader', 'X Header (1500×500)'), width: 1500, height: 500 },
    { label: t('presetFullHd', 'Full HD (1920×1080)'), width: 1920, height: 1080 },
  ];
  const [items, setItems] = useState<ImageItem[]>([]);
  const itemsRef = useRef<ImageItem[]>([]);
  itemsRef.current = items;

  const [mode, setMode] = useState<'dimensions' | 'percentage'>('dimensions');
  const [targetWidth, setTargetWidth] = useState<number>(1200);
  const [targetHeight, setTargetHeight] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(50);
  const [lockAspectRatio, setLockAspectRatio] = useState<boolean>(true);
  const [fitMode, setFitMode] = useState<ResizeFitMode>('contain');
  const [format, setFormat] = useState<OutputFormatChoice>('original');
  const [quality, setQuality] = useState<number>(85);
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [comparisonTarget, setComparisonTarget] = useState<ImageItem | null>(null);

  useEffect(() => {
    return () => {
      itemsRef.current.forEach((img) => {
        if (img.originalPreviewUrl) URL.revokeObjectURL(img.originalPreviewUrl);
        if (img.compressedPreviewUrl) URL.revokeObjectURL(img.compressedPreviewUrl);
      });
    };
  }, []);

  const processSingle = async (
    item: ImageItem,
    overrides?: {
      mode?: 'dimensions' | 'percentage';
      w?: number;
      h?: number;
      pct?: number;
      lock?: boolean;
      fit?: ResizeFitMode;
      fmt?: OutputFormatChoice;
      q?: number;
    }
  ): Promise<ImageItem> => {
    try {
      const res = await resizeImageFile(
        item.file,
        item.originalWidth,
        item.originalHeight,
        item.originalType,
        item.hasAlpha,
        {
          mode: overrides?.mode ?? mode,
          width: overrides?.w ?? targetWidth,
          height: overrides?.h ?? targetHeight,
          percentage: overrides?.pct ?? percentage,
          lockAspectRatio: overrides?.lock ?? lockAspectRatio,
          fit: overrides?.fit ?? fitMode,
          format: overrides?.fmt ?? format,
          quality: overrides?.q ?? quality,
          backgroundColor,
        }
      );

      if (item.compressedPreviewUrl) URL.revokeObjectURL(item.compressedPreviewUrl);
      const saved = item.originalSize - res.size;
      const pctSaved =
        item.originalSize > 0
          ? Math.round(((item.originalSize - res.size) / item.originalSize) * 100)
          : 0;

      return {
        ...item,
        compressedBlob: res.blob,
        compressedPreviewUrl: res.previewUrl,
        compressedSize: res.size,
        compressedWidth: res.width,
        compressedHeight: res.height,
        outputType: res.outputType,
        outputExtension: res.outputExtension,
        outputFilename: res.outputFilename,
        spaceSaved: saved,
        compressionPercentage: pctSaved,
        quality: overrides?.q ?? quality,
        status: 'done',
        errorMessage: null,
      };
    } catch (err) {
      return {
        ...item,
        status: 'error',
        errorMessage: err instanceof Error ? err.message : t('errorResizeFailed', 'Resize failed.'),
      };
    }
  };

  const handleFilesSelected = async (files: File[]) => {
    setIsProcessing(true);
    const loaded: ImageItem[] = [];

    for (const file of files) {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      try {
        const info = await loadExtendedImageInfo(file);
        loaded.push({
          id,
          file,
          name: file.name,
          originalSize: file.size,
          originalWidth: info.width,
          originalHeight: info.height,
          originalType: info.detectedType,
          originalPreviewUrl: info.previewUrl,
          hasAlpha: info.hasAlpha,
          compressedBlob: null,
          compressedPreviewUrl: null,
          compressedSize: null,
          compressedWidth: null,
          compressedHeight: null,
          outputType: 'image/jpeg',
          outputExtension: '.jpg',
          outputFilename: file.name,
          quality,
          status: 'compressing',
          errorMessage: null,
          spaceSaved: null,
          compressionPercentage: null,
        });
      } catch {
        loaded.push({
          id,
          file,
          name: file.name,
          originalSize: file.size,
          originalWidth: 0,
          originalHeight: 0,
          originalType: file.type,
          originalPreviewUrl: URL.createObjectURL(file),
          hasAlpha: false,
          compressedBlob: null,
          compressedPreviewUrl: null,
          compressedSize: null,
          compressedWidth: null,
          compressedHeight: null,
          outputType: 'image/jpeg',
          outputExtension: '.jpg',
          outputFilename: file.name,
          quality,
          status: 'error',
          errorMessage: t('errorCorruptedFile', 'Corrupted or unreadable image file.'),
          spaceSaved: null,
          compressionPercentage: null,
        });
      }
    }

    // Seed width/height from the first loaded image if user hasn't set custom values
    let nextW = targetWidth;
    let nextH = targetHeight;
    if (items.length === 0 && loaded[0]?.originalWidth) {
      const first = loaded[0];
      nextW = Math.min(first.originalWidth, 1200);
      nextH = lockAspectRatio
        ? Math.max(1, Math.round((nextW / first.originalWidth) * first.originalHeight))
        : first.originalHeight;
      setTargetWidth(nextW);
      setTargetHeight(nextH);
    }

    setItems((prev) => [...prev, ...loaded]);

    const processed: ImageItem[] = [];
    for (const item of loaded) {
      if (item.status === 'error') {
        processed.push(item);
      } else {
        processed.push(await processSingle(item, { w: nextW, h: nextH }));
      }
    }

    setItems((prev) =>
      prev.map((existing) => processed.find((p) => p.id === existing.id) || existing)
    );
    setIsProcessing(false);
  };

  const handleWidthChange = (valStr: string) => {
    const val = Math.max(0, parseInt(valStr || '0', 10) || 0);
    setTargetWidth(val);
    if (lockAspectRatio && items[0]?.originalWidth && val > 0) {
      const ratio = items[0].originalHeight / items[0].originalWidth;
      setTargetHeight(Math.max(1, Math.round(val * ratio)));
    }
  };

  const handleHeightChange = (valStr: string) => {
    const val = Math.max(0, parseInt(valStr || '0', 10) || 0);
    setTargetHeight(val);
    if (lockAspectRatio && items[0]?.originalHeight && val > 0) {
      const ratio = items[0].originalWidth / items[0].originalHeight;
      setTargetWidth(Math.max(1, Math.round(val * ratio)));
    }
  };

  const handleApplyPreset = (w: number, h: number) => {
    setMode('dimensions');
    setLockAspectRatio(false);
    setTargetWidth(w);
    setTargetHeight(h);
  };

  const handleResizeAll = async () => {
    if (items.length === 0) return;
    setIsProcessing(true);
    setItems((prev) =>
      prev.map((i) => ({ ...i, status: i.originalWidth ? 'compressing' : 'error' }))
    );

    const out: ImageItem[] = [];
    for (const item of items) {
      if (!item.originalWidth) {
        out.push(item);
      } else {
        out.push(await processSingle(item));
      }
    }
    setItems(out);
    setIsProcessing(false);
  };

  const handleRemove = (id: string) => {
    setItems((prev) => {
      const t = prev.find((i) => i.id === id);
      if (t) {
        if (t.originalPreviewUrl) URL.revokeObjectURL(t.originalPreviewUrl);
        if (t.compressedPreviewUrl) URL.revokeObjectURL(t.compressedPreviewUrl);
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  const handleClearAll = () => {
    items.forEach((i) => {
      if (i.originalPreviewUrl) URL.revokeObjectURL(i.originalPreviewUrl);
      if (i.compressedPreviewUrl) URL.revokeObjectURL(i.compressedPreviewUrl);
    });
    setItems([]);
  };

  const doneItems = items.filter((i) => i.status === 'done' && i.compressedBlob);

  const handleDownloadAllZip = async () => {
    if (doneItems.length === 0) return;
    setIsZipping(true);
    try {
      const zipBlob = await createFilesZipArchive(
        doneItems.map((i) => ({ filename: i.outputFilename, blob: i.compressedBlob! })),
        'resized_images'
      );
      triggerDownload(zipBlob, 'resized_images_compressmypic.zip');
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <ToolPageLayout
      tool={activeTool}
      onNavigate={onNavigate}
      lang={lang}
      ui={lang === 'pt' ? ptStrings?.layoutUi : lang === 'fr' ? frStrings?.layoutUi : esStrings?.layoutUi}
      canonicalPath={lang === 'es' ? toSpanishPath(activeTool.slug) : lang === 'pt' ? toPortuguesePath(activeTool.slug) : lang === 'fr' ? toFrenchPath(activeTool.slug) : undefined}
      alternates={lang !== 'en' ? getAlternates(activeTool.slug) : undefined}
      toolRegistry={toolRegistry}
      categoryLabels={categoryLabels}
    >
      <div className="space-y-6">
        <UploadZone
          onFilesSelected={handleFilesSelected}
          maxFileSizeMB={20}
          disabled={isProcessing}
          accept={EXTENDED_IMAGE_ACCEPT}
          allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
          allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
          supportedFormatsLabel="JPG, PNG, WebP, HEIC, GIF, BMP, SVG"
          strings={lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
        />

        {items.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('resizeMode', 'Resize Mode')}
                </span>
                <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1">
                  <button
                    type="button"
                    onClick={() => setMode('dimensions')}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg cursor-pointer transition-all ${
                      mode === 'dimensions'
                        ? 'bg-white text-blue-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {t('modeByPixels', 'By Pixels (W × H)')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('percentage')}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg cursor-pointer transition-all ${
                      mode === 'percentage'
                        ? 'bg-white text-blue-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {t('modeByPercentage', 'By Percentage (%)')}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('outputFormat', 'Output Format')}
                </span>
                <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1">
                  {(['original', 'jpeg', 'png', 'webp'] as OutputFormatChoice[]).map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setFormat(fmt)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer transition-all ${
                        format === fmt
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {fmt === 'original' ? t('formatOriginal', 'Original') : fmt === 'jpeg' ? t('formatJpg', 'JPG') : fmt.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {mode === 'dimensions' ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t('widthLabel', 'Width (px)')}
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={12000}
                      value={targetWidth || ''}
                      onChange={(e) => handleWidthChange(e.target.value)}
                      placeholder={t('placeholderAuto', 'Auto')}
                      className="w-full px-3.5 py-2.5 text-sm font-mono border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t('heightLabel', 'Height (px)')}
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={12000}
                      value={targetHeight || ''}
                      onChange={(e) => handleHeightChange(e.target.value)}
                      placeholder={t('placeholderAuto', 'Auto')}
                      className="w-full px-3.5 py-2.5 text-sm font-mono border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setLockAspectRatio(!lockAspectRatio)}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                        lockAspectRatio
                          ? 'bg-blue-50 border-blue-200 text-blue-700'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      {lockAspectRatio ? (
                        <Link2 className="w-4 h-4" />
                      ) : (
                        <Link2Off className="w-4 h-4" />
                      )}
                      <span>{lockAspectRatio ? t('aspectRatioLocked', 'Aspect Ratio Locked') : t('aspectRatioUnlocked', 'Unlocked (Custom)')}</span>
                    </button>
                  </div>
                </div>

                {!lockAspectRatio && (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-600">{t('fitModeLabel', 'Fit Mode:')}</span>
                    {(
                      [
                        { id: 'contain', label: t('fitContain', 'Contain (No Crop)') },
                        { id: 'cover', label: t('fitCover', 'Cover (Center Crop)') },
                        { id: 'exact', label: t('fitStretchExact', 'Stretch Exact') },
                      ] as { id: ResizeFitMode; label: string }[]
                    ).map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setFitMode(m.id)}
                        className={`px-3 py-1 text-xs font-medium rounded-lg border cursor-pointer ${
                          fitMode === m.id
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                )}

                <div>
                  <span className="text-xs font-semibold text-slate-500 block mb-2">
                    {t('quickPresets', 'Quick Social & Web Presets')}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {SOCIAL_PRESETS.map((p) => (
                      <button
                        key={p.label}
                        type="button"
                        onClick={() => handleApplyPreset(p.width, p.height)}
                        className="px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 rounded-lg transition-colors cursor-pointer"
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-slate-700">
                    {t('scalePercentage', 'Scale Percentage:')}{' '}
                    <strong className="text-blue-600 font-mono text-sm">{percentage}%</strong>
                  </span>
                  <div className="flex gap-1.5">
                    {[25, 50, 75, 150, 200].map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setPercentage(pct)}
                        className={`px-2.5 py-1 rounded-md text-xs font-semibold cursor-pointer ${
                          percentage === pct
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {pct}%
                      </button>
                    ))}
                  </div>
                </div>
                <input
                  type="range"
                  min={10}
                  max={200}
                  step={5}
                  value={percentage}
                  onChange={(e) => setPercentage(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            )}

            <div className="pt-3 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1 max-w-md">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-semibold text-slate-700">
                    {t('outputQuality', 'Output Quality:')}{' '}<strong className="text-blue-600 font-mono">{quality}%</strong>
                  </span>
                  {format === 'jpeg' && (
                    <label className="flex items-center gap-1.5 text-slate-600">
                      <span>{t('matteBg', 'Matte BG:')}</span>
                      <input
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="w-5 h-5 rounded cursor-pointer border border-slate-300"
                      />
                    </label>
                  )}
                </div>
                <input
                  type="range"
                  min={10}
                  max={100}
                  value={quality}
                  onChange={(e) => setQuality(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResizeAll}
                  disabled={isProcessing}
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-semibold rounded-xl shadow-xs cursor-pointer"
                >
                  {isProcessing ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>{t('resizing', 'Resizing...')}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>{t('resizeAll', 'Resize All ({count})').replace('{count}', String(items.length))}</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleClearAll}
                  disabled={isProcessing}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 text-sm font-medium rounded-xl cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline">{t('clear', 'Clear')}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {items.length > 0 && (
          <div className="space-y-4">
            {doneItems.length > 1 && (
              <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    {t('batchReady', 'Batch Ready')}
                  </span>
                  <p className="text-sm font-semibold mt-0.5">
                    {doneItems.length === 1
                      ? t('batchReadySingular', '{count} resized image ready to download').replace('{count}', String(doneItems.length))
                      : t('batchReadyPlural', '{count} resized images ready to download').replace('{count}', String(doneItems.length))}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleDownloadAllZip}
                  disabled={isZipping}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl cursor-pointer"
                >
                  <FileArchive className="w-4 h-4" />
                  <span>{isZipping ? t('creatingZip', 'Creating ZIP...') : t('downloadAllZip', 'Download All (ZIP)')}</span>
                </button>
              </div>
            )}

            {items.map((item) => {
              const isDone = item.status === 'done';
              const isBusy = item.status === 'compressing';
              const isErr = item.status === 'error';
              return (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 min-w-0 w-full md:w-auto">
                    <div
                      onClick={() => isDone && setComparisonTarget(item)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 ${
                        isDone ? 'cursor-pointer group' : ''
                      }`}
                    >
                      <img
                        src={item.compressedPreviewUrl || item.originalPreviewUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      {isBusy && (
                        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                          <RotateCcw className="w-5 h-5 text-blue-600 animate-spin" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-slate-900 truncate">{item.name}</h3>
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">
                        {item.originalWidth}×{item.originalHeight}px
                        {isDone && item.compressedWidth
                          ? ` → ${item.compressedWidth}×${item.compressedHeight}px`
                          : ''}
                      </p>
                      <div className="mt-1.5">
                        {isDone && (
                          <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            {t('resizedStatus', 'Resized ({original} → {converted})')
                              .replace('{original}', formatBytes(item.originalSize))
                              .replace('{converted}', formatBytes(item.compressedSize || 0))}
                          </span>
                        )}
                        {isErr && (
                          <span className="inline-flex items-center gap-1 text-xs text-red-600 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {item.errorMessage}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                    {isDone && (
                      <>
                        <button
                          type="button"
                          onClick={() => setComparisonTarget(item)}
                          className="px-3 py-2 text-slate-700 hover:bg-slate-100 text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer"
                        >
                          <SplitSquareVertical className="w-4 h-4 text-blue-600" />
                          <span>{t('compare', 'Compare')}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            item.compressedBlob &&
                            triggerDownload(item.compressedBlob, item.outputFilename)
                          }
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg cursor-pointer"
                        >
                          <Download className="w-4 h-4" />
                          <span>{t('download', 'Download')}</span>
                        </button>
                      </>
                    )}
                    <button
                      type="button"
                      onClick={() => handleRemove(item.id)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer"
                      aria-label={t('removeImage', 'Remove {name}').replace('{name}', item.name)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {comparisonTarget && (
        <ComparisonModal
          image={comparisonTarget}
          onClose={() => setComparisonTarget(null)}
          titlePrefix={t('comparisonTitlePrefix', 'Resize Comparison')}
          beforeLabel={lang === 'pt' ? ptStrings?.comparisonModal.beforeLabel : lang === 'fr' ? frStrings?.comparisonModal.beforeLabel : esStrings?.comparisonModal.beforeLabel}
          afterLabel={t('comparisonAfterLabel', 'Resized (After)')}
          closeLabel={lang === 'pt' ? ptStrings?.comparisonModal.closeLabel : lang === 'fr' ? frStrings?.comparisonModal.closeLabel : esStrings?.comparisonModal.closeLabel}
          instruction={lang === 'pt' ? ptStrings?.comparisonModal.instruction : lang === 'fr' ? frStrings?.comparisonModal.instruction : esStrings?.comparisonModal.instruction}
          sliderLabel={lang === 'pt' ? ptStrings?.comparisonModal.sliderLabel : lang === 'fr' ? frStrings?.comparisonModal.sliderLabel : esStrings?.comparisonModal.sliderLabel}
          sideBySideLabel={lang === 'pt' ? ptStrings?.comparisonModal.sideBySideLabel : lang === 'fr' ? frStrings?.comparisonModal.sideBySideLabel : esStrings?.comparisonModal.sideBySideLabel}
          zoomInLabel={lang === 'pt' ? ptStrings?.comparisonModal.zoomInLabel : lang === 'fr' ? frStrings?.comparisonModal.zoomInLabel : esStrings?.comparisonModal.zoomInLabel}
          zoomOutLabel={lang === 'pt' ? ptStrings?.comparisonModal.zoomOutLabel : lang === 'fr' ? frStrings?.comparisonModal.zoomOutLabel : esStrings?.comparisonModal.zoomOutLabel}
          originalLabel={lang === 'pt' ? ptStrings?.comparisonModal.originalLabel : lang === 'fr' ? frStrings?.comparisonModal.originalLabel : esStrings?.comparisonModal.originalLabel}
          outputLabel={lang === 'pt' ? ptStrings?.comparisonModal.outputLabel : lang === 'fr' ? frStrings?.comparisonModal.outputLabel : esStrings?.comparisonModal.outputLabel}
          reductionLabel={lang === 'pt' ? ptStrings?.comparisonModal.reductionLabel : lang === 'fr' ? frStrings?.comparisonModal.reductionLabel : esStrings?.comparisonModal.reductionLabel}
          sizeChangeLabel={lang === 'pt' ? ptStrings?.comparisonModal.sizeChangeLabel : lang === 'fr' ? frStrings?.comparisonModal.sizeChangeLabel : esStrings?.comparisonModal.sizeChangeLabel}
          qualityLabel={lang === 'pt' ? ptStrings?.comparisonModal.qualityLabel : lang === 'fr' ? frStrings?.comparisonModal.qualityLabel : esStrings?.comparisonModal.qualityLabel}
          formatLabel={lang === 'pt' ? ptStrings?.comparisonModal.formatLabel : lang === 'fr' ? frStrings?.comparisonModal.formatLabel : esStrings?.comparisonModal.formatLabel}
          modalAriaLabel={lang === 'pt' ? ptStrings?.comparisonModal.modalAriaLabel : lang === 'fr' ? frStrings?.comparisonModal.modalAriaLabel : esStrings?.comparisonModal.modalAriaLabel}
          altCompressed={lang === 'pt' ? ptStrings?.comparisonModal.altCompressed : lang === 'fr' ? frStrings?.comparisonModal.altCompressed : esStrings?.comparisonModal.altCompressed}
          altOriginal={lang === 'pt' ? ptStrings?.comparisonModal.altOriginal : lang === 'fr' ? frStrings?.comparisonModal.altOriginal : esStrings?.comparisonModal.altOriginal}
          altProcessed={lang === 'pt' ? ptStrings?.comparisonModal.altProcessed : lang === 'fr' ? frStrings?.comparisonModal.altProcessed : esStrings?.comparisonModal.altProcessed}
        />
      )}
    </ToolPageLayout>
  );
};
