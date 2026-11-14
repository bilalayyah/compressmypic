import React, { useState, useEffect, useRef } from 'react';
import {
  RotateCcw,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Download,
  FileArchive,
  Trash2,
  RefreshCw,
  SplitSquareVertical,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import type { ToolDefinition } from '../data/tools';
import { ToolPageLayout } from '../components/ToolPageLayout';
import type { SupportedLang } from '../locales/config';
import type { ToolPageLayoutStrings } from '../components/ToolPageLayout';
import type { UploadZoneStrings } from '../components/UploadZone';
import type { ComparisonModalStrings } from '../components/ComparisonModal';
import { toSpanishPath } from '../locales/es/slugs';
import { toPortuguesePath } from '../locales/pt/slugs';
import { toFrenchPath } from '../locales/fr/slugs';
import { toGermanPath } from '../locales/de/slugs';
import { toItalianPath } from '../locales/it/slugs';
import { toIndonesianPath } from '../locales/id/slugs';
import { toRussianPath } from '../locales/ru/slugs';
import { toJapanesePath } from '../locales/ja/slugs';
import { toKoreanPath } from '../locales/ko/slugs';
import { toChinesePath } from '../locales/zh/slugs';
import { getAlternates } from '../locales/alternates';
import { UploadZone } from '../components/UploadZone';
import { ComparisonModal } from '../components/ComparisonModal';
import { ImageItem, OutputFormatChoice } from '../types';
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  loadExtendedImageInfo,
  rotateFlipImageFile,
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
export interface PageDeStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageItStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageIdStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageRuStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageJaStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageKoStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageZhStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

interface RotateFlipPageProps {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
  ptStrings?: PagePtStrings;
  frStrings?: PageFrStrings;
  deStrings?: PageDeStrings;
  itStrings?: PageItStrings;
  idStrings?: PageIdStrings;
  ruStrings?: PageRuStrings;
  jaStrings?: PageJaStrings;
  koStrings?: PageKoStrings;
  zhStrings?: PageZhStrings;
}

export const RotateFlipPage: React.FC<RotateFlipPageProps> = ({
  onNavigate,
  lang,
  tool,
  toolRegistry,
  categoryLabels,
  esStrings,
  ptStrings,
  frStrings,
  deStrings,
  itStrings,
  idStrings,
  ruStrings,
  jaStrings,
  koStrings,
  zhStrings,
}) => {
  const activeTool = tool ?? TOOL_BY_SLUG['/rotate-flip-image'];
  const t = (key: string, fallback: string) => {
    if (lang === 'zh' && zhStrings?.toolUi) return (zhStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'ja' && jaStrings?.toolUi) return (jaStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'ko' && koStrings?.toolUi) return (koStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'id' && idStrings?.toolUi) return (idStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'ru' && ruStrings?.toolUi) return (ruStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'de' && deStrings?.toolUi) return (deStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'it' && itStrings?.toolUi) return (itStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'pt' && ptStrings?.toolUi) return (ptStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'fr' && frStrings?.toolUi) return (frStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'es' && esStrings?.toolUi) return (esStrings.toolUi[key] as string | undefined) ?? fallback;
    return fallback;
  };
  const [items, setItems] = useState<ImageItem[]>([]);
  const itemsRef = useRef<ImageItem[]>([]);
  itemsRef.current = items;

  const [angle, setAngle] = useState<number>(90);
  const [flipH, setFlipH] = useState<boolean>(false);
  const [flipV, setFlipV] = useState<boolean>(false);
  const [format, setFormat] = useState<OutputFormatChoice>('original');
  const [quality, setQuality] = useState<number>(90);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [comparisonTarget, setComparisonTarget] = useState<ImageItem | null>(null);

  useEffect(() => {
    return () => {
      itemsRef.current.forEach((i) => {
        if (i.originalPreviewUrl) URL.revokeObjectURL(i.originalPreviewUrl);
        if (i.compressedPreviewUrl) URL.revokeObjectURL(i.compressedPreviewUrl);
      });
    };
  }, []);

  const transformItem = async (
    item: ImageItem,
    nextAngle: number = angle,
    nextFlipH: boolean = flipH,
    nextFlipV: boolean = flipV,
    nextFmt: OutputFormatChoice = format,
    nextQ: number = quality
  ): Promise<ImageItem> => {
    try {
      const res = await rotateFlipImageFile(item.file, item.originalType, {
        angleDegrees: nextAngle,
        flipHorizontal: nextFlipH,
        flipVertical: nextFlipV,
        format: nextFmt,
        quality: nextQ,
        backgroundColor: '#ffffff',
      });
      if (item.compressedPreviewUrl) URL.revokeObjectURL(item.compressedPreviewUrl);
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
        spaceSaved: Math.max(0, item.originalSize - res.size),
        compressionPercentage: 0,
        quality: nextQ,
        status: 'done',
        errorMessage: null,
      };
    } catch (err) {
      return {
        ...item,
        status: 'error',
        errorMessage: err instanceof Error ? err.message : t('transformFailed', 'Transform failed.'),
      };
    }
  };

  const applyAllWith = async (
    nextAngle: number,
    nextFlipH: boolean,
    nextFlipV: boolean,
    nextFmt: OutputFormatChoice = format,
    nextQ: number = quality
  ) => {
    if (itemsRef.current.length === 0) return;
    setIsProcessing(true);
    const out: ImageItem[] = [];
    for (const item of itemsRef.current) {
      if (!item.originalWidth) out.push(item);
      else out.push(await transformItem(item, nextAngle, nextFlipH, nextFlipV, nextFmt, nextQ));
    }
    setItems(out);
    setIsProcessing(false);
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
          errorMessage: t('corruptedImage', 'Corrupted or unreadable image.'),
          spaceSaved: null,
          compressionPercentage: null,
        });
      }
    }

    setItems((prev) => [...prev, ...loaded]);
    const processed: ImageItem[] = [];
    for (const item of loaded) {
      if (item.status === 'error') processed.push(item);
      else processed.push(await transformItem(item));
    }
    setItems((prev) => prev.map((e) => processed.find((p) => p.id === e.id) || e));
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

  const handleDownloadZip = async () => {
    if (doneItems.length === 0) return;
    setIsZipping(true);
    try {
      const zip = await createFilesZipArchive(
        doneItems.map((i) => ({ filename: i.outputFilename, blob: i.compressedBlob! })),
        'rotated_images'
      );
      triggerDownload(zip, 'rotated_images_compressmypic.zip');
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <ToolPageLayout
      tool={activeTool}
      onNavigate={onNavigate}
      lang={lang}
      ui={lang === 'zh' ? zhStrings?.layoutUi : lang === 'ja' ? jaStrings?.layoutUi : lang === 'ko' ? koStrings?.layoutUi : lang === 'id' ? idStrings?.layoutUi : lang === 'ru' ? ruStrings?.layoutUi : lang === 'de' ? deStrings?.layoutUi : lang === 'it' ? itStrings?.layoutUi : lang === 'pt' ? ptStrings?.layoutUi : lang === 'fr' ? frStrings?.layoutUi : esStrings?.layoutUi}
      canonicalPath={lang === 'zh' ? toChinesePath(activeTool.slug) : lang === 'ja' ? toJapanesePath(activeTool.slug) : lang === 'ko' ? toKoreanPath(activeTool.slug) : lang === 'id' ? toIndonesianPath(activeTool.slug) : lang === 'ru' ? toRussianPath(activeTool.slug) : lang === 'de' ? toGermanPath(activeTool.slug) : lang === 'it' ? toItalianPath(activeTool.slug) : lang === 'es' ? toSpanishPath(activeTool.slug) : lang === 'pt' ? toPortuguesePath(activeTool.slug) : lang === 'fr' ? toFrenchPath(activeTool.slug) : undefined}
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
          strings={lang === 'zh' ? zhStrings?.uploadZone : lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
        />

        {items.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('quickRotateFlip', 'Quick Rotate & Flip')}
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => {
                      const next = angle - 90;
                      setAngle(next);
                      applyAllWith(next, flipH, flipV);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-800 text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>{t('rotate90Left', 'Rotate 90° Left')}</span>
                  </button>
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => {
                      const next = angle + 90;
                      setAngle(next);
                      applyAllWith(next, flipH, flipV);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-800 text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    <RotateCw className="w-4 h-4" />
                    <span>{t('rotate90Right', 'Rotate 90° Right')}</span>
                  </button>
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => {
                      const next = angle + 180;
                      setAngle(next);
                      applyAllWith(next, flipH, flipV);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-800 text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>{t('rotate180', '180°')}</span>
                  </button>
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => {
                      const next = !flipH;
                      setFlipH(next);
                      applyAllWith(angle, next, flipV);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl border cursor-pointer ${
                      flipH
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <FlipHorizontal className="w-4 h-4" />
                    <span>{t('flipHorizontal', 'Flip Horizontal')}</span>
                  </button>
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => {
                      const next = !flipV;
                      setFlipV(next);
                      applyAllWith(angle, flipH, next);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl border cursor-pointer ${
                      flipV
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <FlipVertical className="w-4 h-4" />
                    <span>{t('flipVertical', 'Flip Vertical')}</span>
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
                      onClick={() => {
                        setFormat(fmt);
                        applyAllWith(angle, flipH, flipV, fmt, quality);
                      }}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                        format === fmt
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {fmt === 'original'
                        ? t('formatOriginal', 'Original')
                        : fmt === 'jpeg'
                          ? t('formatJpg', 'JPG')
                          : fmt.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1 max-w-md">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-semibold text-slate-700">
                    {t('rotationAngle', 'Rotation Angle:')}{' '}
                    <strong className="text-blue-600 font-mono">{((angle % 360) + 360) % 360}°</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setAngle(0);
                      setFlipH(false);
                      setFlipV(false);
                      applyAllWith(0, false, false);
                    }}
                    className="text-blue-600 hover:underline font-semibold cursor-pointer"
                  >
                    {t('resetTo0', 'Reset to 0°')}
                  </button>
                </div>
                <input
                  type="range"
                  min={-180}
                  max={180}
                  value={((angle + 180) % 360) - 180}
                  onChange={(e) => setAngle(parseInt(e.target.value, 10))}
                  onMouseUp={() => applyAllWith(angle, flipH, flipV)}
                  onTouchEnd={() => applyAllWith(angle, flipH, flipV)}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => applyAllWith(angle, flipH, flipV, format, quality)}
                  disabled={isProcessing}
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  {t('applyAngle', 'Apply Angle')}
                </button>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 text-xs font-semibold rounded-xl cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>{t('clear', 'Clear')}</span>
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
                    {t('transformedImagesReady', '{count} transformed images ready').replace(
                      '{count}',
                      String(doneItems.length)
                    )}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleDownloadZip}
                  disabled={isZipping}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl cursor-pointer"
                >
                  <FileArchive className="w-4 h-4" />
                  <span>
                    {isZipping ? t('creatingZip', 'Creating ZIP...') : t('downloadAllZip', 'Download All (ZIP)')}
                  </span>
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
                      className="relative w-24 h-24 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 cursor-pointer flex items-center justify-center"
                    >
                      <img
                        src={item.compressedPreviewUrl || item.originalPreviewUrl}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain"
                      />
                      {isBusy && (
                        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                          <RotateCw className="w-5 h-5 text-blue-600 animate-spin" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-slate-900 truncate">{item.name}</h3>
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">
                        {item.compressedWidth || item.originalWidth}×
                        {item.compressedHeight || item.originalHeight}px ·{' '}
                        {formatBytes(item.compressedSize ?? item.originalSize)}
                      </p>
                      <div className="mt-1.5">
                        {isDone && (
                          <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            {t('rotatedBadge', 'Rotated {angle}°').replace(
                              '{angle}',
                              String(((angle % 360) + 360) % 360)
                            )}
                            {flipH ? t('flippedH', ' · Flipped H') : ''}
                            {flipV ? t('flippedV', ' · Flipped V') : ''}
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
                      aria-label={t('removeItem', 'Remove {name}').replace('{name}', item.name)}
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
          titlePrefix={t('comparisonTitlePrefix', 'Rotate & Flip Comparison')}
          beforeLabel={lang === 'zh' ? zhStrings?.comparisonModal.beforeLabel : lang === 'ja' ? jaStrings?.comparisonModal.beforeLabel : lang === 'ko' ? koStrings?.comparisonModal.beforeLabel : lang === 'id' ? idStrings?.comparisonModal.beforeLabel : lang === 'ru' ? ruStrings?.comparisonModal.beforeLabel : lang === 'de' ? deStrings?.comparisonModal.beforeLabel : lang === 'it' ? itStrings?.comparisonModal.beforeLabel : lang === 'pt' ? ptStrings?.comparisonModal.beforeLabel : lang === 'fr' ? frStrings?.comparisonModal.beforeLabel : esStrings?.comparisonModal.beforeLabel}
          afterLabel={t('comparisonAfterLabel', 'Edited (After)')}
          closeLabel={lang === 'zh' ? zhStrings?.comparisonModal.closeLabel : lang === 'ja' ? jaStrings?.comparisonModal.closeLabel : lang === 'ko' ? koStrings?.comparisonModal.closeLabel : lang === 'id' ? idStrings?.comparisonModal.closeLabel : lang === 'ru' ? ruStrings?.comparisonModal.closeLabel : lang === 'de' ? deStrings?.comparisonModal.closeLabel : lang === 'it' ? itStrings?.comparisonModal.closeLabel : lang === 'pt' ? ptStrings?.comparisonModal.closeLabel : lang === 'fr' ? frStrings?.comparisonModal.closeLabel : esStrings?.comparisonModal.closeLabel}
          instruction={lang === 'zh' ? zhStrings?.comparisonModal.instruction : lang === 'ja' ? jaStrings?.comparisonModal.instruction : lang === 'ko' ? koStrings?.comparisonModal.instruction : lang === 'id' ? idStrings?.comparisonModal.instruction : lang === 'ru' ? ruStrings?.comparisonModal.instruction : lang === 'de' ? deStrings?.comparisonModal.instruction : lang === 'it' ? itStrings?.comparisonModal.instruction : lang === 'pt' ? ptStrings?.comparisonModal.instruction : lang === 'fr' ? frStrings?.comparisonModal.instruction : esStrings?.comparisonModal.instruction}
          sliderLabel={lang === 'zh' ? zhStrings?.comparisonModal.sliderLabel : lang === 'ja' ? jaStrings?.comparisonModal.sliderLabel : lang === 'ko' ? koStrings?.comparisonModal.sliderLabel : lang === 'id' ? idStrings?.comparisonModal.sliderLabel : lang === 'ru' ? ruStrings?.comparisonModal.sliderLabel : lang === 'de' ? deStrings?.comparisonModal.sliderLabel : lang === 'it' ? itStrings?.comparisonModal.sliderLabel : lang === 'pt' ? ptStrings?.comparisonModal.sliderLabel : lang === 'fr' ? frStrings?.comparisonModal.sliderLabel : esStrings?.comparisonModal.sliderLabel}
          sideBySideLabel={lang === 'zh' ? zhStrings?.comparisonModal.sideBySideLabel : lang === 'ja' ? jaStrings?.comparisonModal.sideBySideLabel : lang === 'ko' ? koStrings?.comparisonModal.sideBySideLabel : lang === 'id' ? idStrings?.comparisonModal.sideBySideLabel : lang === 'ru' ? ruStrings?.comparisonModal.sideBySideLabel : lang === 'de' ? deStrings?.comparisonModal.sideBySideLabel : lang === 'it' ? itStrings?.comparisonModal.sideBySideLabel : lang === 'pt' ? ptStrings?.comparisonModal.sideBySideLabel : lang === 'fr' ? frStrings?.comparisonModal.sideBySideLabel : esStrings?.comparisonModal.sideBySideLabel}
          zoomInLabel={lang === 'zh' ? zhStrings?.comparisonModal.zoomInLabel : lang === 'ja' ? jaStrings?.comparisonModal.zoomInLabel : lang === 'ko' ? koStrings?.comparisonModal.zoomInLabel : lang === 'id' ? idStrings?.comparisonModal.zoomInLabel : lang === 'ru' ? ruStrings?.comparisonModal.zoomInLabel : lang === 'de' ? deStrings?.comparisonModal.zoomInLabel : lang === 'it' ? itStrings?.comparisonModal.zoomInLabel : lang === 'pt' ? ptStrings?.comparisonModal.zoomInLabel : lang === 'fr' ? frStrings?.comparisonModal.zoomInLabel : esStrings?.comparisonModal.zoomInLabel}
          zoomOutLabel={lang === 'zh' ? zhStrings?.comparisonModal.zoomOutLabel : lang === 'ja' ? jaStrings?.comparisonModal.zoomOutLabel : lang === 'ko' ? koStrings?.comparisonModal.zoomOutLabel : lang === 'id' ? idStrings?.comparisonModal.zoomOutLabel : lang === 'ru' ? ruStrings?.comparisonModal.zoomOutLabel : lang === 'de' ? deStrings?.comparisonModal.zoomOutLabel : lang === 'it' ? itStrings?.comparisonModal.zoomOutLabel : lang === 'pt' ? ptStrings?.comparisonModal.zoomOutLabel : lang === 'fr' ? frStrings?.comparisonModal.zoomOutLabel : esStrings?.comparisonModal.zoomOutLabel}
          originalLabel={lang === 'zh' ? zhStrings?.comparisonModal.originalLabel : lang === 'ja' ? jaStrings?.comparisonModal.originalLabel : lang === 'ko' ? koStrings?.comparisonModal.originalLabel : lang === 'id' ? idStrings?.comparisonModal.originalLabel : lang === 'ru' ? ruStrings?.comparisonModal.originalLabel : lang === 'de' ? deStrings?.comparisonModal.originalLabel : lang === 'it' ? itStrings?.comparisonModal.originalLabel : lang === 'pt' ? ptStrings?.comparisonModal.originalLabel : lang === 'fr' ? frStrings?.comparisonModal.originalLabel : esStrings?.comparisonModal.originalLabel}
          outputLabel={lang === 'zh' ? zhStrings?.comparisonModal.outputLabel : lang === 'ja' ? jaStrings?.comparisonModal.outputLabel : lang === 'ko' ? koStrings?.comparisonModal.outputLabel : lang === 'id' ? idStrings?.comparisonModal.outputLabel : lang === 'ru' ? ruStrings?.comparisonModal.outputLabel : lang === 'de' ? deStrings?.comparisonModal.outputLabel : lang === 'it' ? itStrings?.comparisonModal.outputLabel : lang === 'pt' ? ptStrings?.comparisonModal.outputLabel : lang === 'fr' ? frStrings?.comparisonModal.outputLabel : esStrings?.comparisonModal.outputLabel}
          reductionLabel={lang === 'zh' ? zhStrings?.comparisonModal.reductionLabel : lang === 'ja' ? jaStrings?.comparisonModal.reductionLabel : lang === 'ko' ? koStrings?.comparisonModal.reductionLabel : lang === 'id' ? idStrings?.comparisonModal.reductionLabel : lang === 'ru' ? ruStrings?.comparisonModal.reductionLabel : lang === 'de' ? deStrings?.comparisonModal.reductionLabel : lang === 'it' ? itStrings?.comparisonModal.reductionLabel : lang === 'pt' ? ptStrings?.comparisonModal.reductionLabel : lang === 'fr' ? frStrings?.comparisonModal.reductionLabel : esStrings?.comparisonModal.reductionLabel}
          sizeChangeLabel={lang === 'zh' ? zhStrings?.comparisonModal.sizeChangeLabel : lang === 'ja' ? jaStrings?.comparisonModal.sizeChangeLabel : lang === 'ko' ? koStrings?.comparisonModal.sizeChangeLabel : lang === 'id' ? idStrings?.comparisonModal.sizeChangeLabel : lang === 'ru' ? ruStrings?.comparisonModal.sizeChangeLabel : lang === 'de' ? deStrings?.comparisonModal.sizeChangeLabel : lang === 'it' ? itStrings?.comparisonModal.sizeChangeLabel : lang === 'pt' ? ptStrings?.comparisonModal.sizeChangeLabel : lang === 'fr' ? frStrings?.comparisonModal.sizeChangeLabel : esStrings?.comparisonModal.sizeChangeLabel}
          qualityLabel={lang === 'zh' ? zhStrings?.comparisonModal.qualityLabel : lang === 'ja' ? jaStrings?.comparisonModal.qualityLabel : lang === 'ko' ? koStrings?.comparisonModal.qualityLabel : lang === 'id' ? idStrings?.comparisonModal.qualityLabel : lang === 'ru' ? ruStrings?.comparisonModal.qualityLabel : lang === 'de' ? deStrings?.comparisonModal.qualityLabel : lang === 'it' ? itStrings?.comparisonModal.qualityLabel : lang === 'pt' ? ptStrings?.comparisonModal.qualityLabel : lang === 'fr' ? frStrings?.comparisonModal.qualityLabel : esStrings?.comparisonModal.qualityLabel}
          formatLabel={lang === 'zh' ? zhStrings?.comparisonModal.formatLabel : lang === 'ja' ? jaStrings?.comparisonModal.formatLabel : lang === 'ko' ? koStrings?.comparisonModal.formatLabel : lang === 'id' ? idStrings?.comparisonModal.formatLabel : lang === 'ru' ? ruStrings?.comparisonModal.formatLabel : lang === 'de' ? deStrings?.comparisonModal.formatLabel : lang === 'it' ? itStrings?.comparisonModal.formatLabel : lang === 'pt' ? ptStrings?.comparisonModal.formatLabel : lang === 'fr' ? frStrings?.comparisonModal.formatLabel : esStrings?.comparisonModal.formatLabel}
          modalAriaLabel={lang === 'zh' ? zhStrings?.comparisonModal.modalAriaLabel : lang === 'ja' ? jaStrings?.comparisonModal.modalAriaLabel : lang === 'ko' ? koStrings?.comparisonModal.modalAriaLabel : lang === 'id' ? idStrings?.comparisonModal.modalAriaLabel : lang === 'ru' ? ruStrings?.comparisonModal.modalAriaLabel : lang === 'de' ? deStrings?.comparisonModal.modalAriaLabel : lang === 'it' ? itStrings?.comparisonModal.modalAriaLabel : lang === 'pt' ? ptStrings?.comparisonModal.modalAriaLabel : lang === 'fr' ? frStrings?.comparisonModal.modalAriaLabel : esStrings?.comparisonModal.modalAriaLabel}
          altCompressed={lang === 'zh' ? zhStrings?.comparisonModal.altCompressed : lang === 'ja' ? jaStrings?.comparisonModal.altCompressed : lang === 'ko' ? koStrings?.comparisonModal.altCompressed : lang === 'id' ? idStrings?.comparisonModal.altCompressed : lang === 'ru' ? ruStrings?.comparisonModal.altCompressed : lang === 'de' ? deStrings?.comparisonModal.altCompressed : lang === 'it' ? itStrings?.comparisonModal.altCompressed : lang === 'pt' ? ptStrings?.comparisonModal.altCompressed : lang === 'fr' ? frStrings?.comparisonModal.altCompressed : esStrings?.comparisonModal.altCompressed}
          altOriginal={lang === 'zh' ? zhStrings?.comparisonModal.altOriginal : lang === 'ja' ? jaStrings?.comparisonModal.altOriginal : lang === 'ko' ? koStrings?.comparisonModal.altOriginal : lang === 'id' ? idStrings?.comparisonModal.altOriginal : lang === 'ru' ? ruStrings?.comparisonModal.altOriginal : lang === 'de' ? deStrings?.comparisonModal.altOriginal : lang === 'it' ? itStrings?.comparisonModal.altOriginal : lang === 'pt' ? ptStrings?.comparisonModal.altOriginal : lang === 'fr' ? frStrings?.comparisonModal.altOriginal : esStrings?.comparisonModal.altOriginal}
          altProcessed={lang === 'zh' ? zhStrings?.comparisonModal.altProcessed : lang === 'ja' ? jaStrings?.comparisonModal.altProcessed : lang === 'ko' ? koStrings?.comparisonModal.altProcessed : lang === 'id' ? idStrings?.comparisonModal.altProcessed : lang === 'ru' ? ruStrings?.comparisonModal.altProcessed : lang === 'de' ? deStrings?.comparisonModal.altProcessed : lang === 'it' ? itStrings?.comparisonModal.altProcessed : lang === 'pt' ? ptStrings?.comparisonModal.altProcessed : lang === 'fr' ? frStrings?.comparisonModal.altProcessed : esStrings?.comparisonModal.altProcessed}
        />
      )}
    </ToolPageLayout>
  );
};
