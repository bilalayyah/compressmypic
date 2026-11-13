import React, { useEffect, useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  Download,
  FileArchive,
  Info,
  Play,
  RotateCcw,
  SplitSquareVertical,
  Trash2,
} from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import type { ToolDefinition } from '../data/tools';
import type { SupportedLang } from '../locales/config';
import type { ToolPageLayoutStrings } from './ToolPageLayout';
import type { UploadZoneStrings } from './UploadZone';
import type { ComparisonModalStrings } from './ComparisonModal';
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
import { ToolPageLayout } from './ToolPageLayout';
import { UploadZone } from './UploadZone';
import { ComparisonModal } from './ComparisonModal';
import { ImageItem } from '../types';
import {
  convertImageFile,
  loadExtendedImageInfo,
} from '../utils/imageProcessing';
import { formatBytes, formatPercent } from '../utils/formatters';
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

export interface FormatConverterToolProps {
  slug: string;
  sourceLabel: string;
  targetFormat: 'jpeg' | 'png' | 'webp';
  accept: string;
  allowedMimeTypes: string[];
  allowedExtensionsRegex: RegExp;
  supportedFormatsLabel: string;
  uploadTitle?: string;
  defaultQuality?: number;
  showBackgroundColor?: boolean;
  allowSvgScale?: boolean;
  notice?: string;
  noticeTone?: 'info' | 'warning';
  decodeErrorHint?: string;
  maxFileSizeMB?: number;
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
  onNavigate: (path: string) => void;
}

const TARGET_LABEL: Record<'jpeg' | 'png' | 'webp', string> = {
  jpeg: 'JPG',
  png: 'PNG',
  webp: 'WebP',
};

const SVG_SCALE_OPTIONS = [1, 2, 3, 4] as const;

export const FormatConverterTool: React.FC<FormatConverterToolProps> = ({
  slug,
  sourceLabel,
  targetFormat,
  accept,
  allowedMimeTypes,
  allowedExtensionsRegex,
  supportedFormatsLabel,
  uploadTitle,
  defaultQuality = 88,
  showBackgroundColor = false,
  allowSvgScale = false,
  notice,
  noticeTone = 'info',
  decodeErrorHint,
  maxFileSizeMB = 25,
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
  onNavigate,
}) => {
  const activeTool = tool ?? TOOL_BY_SLUG[slug];
  // Active language's page-strings bundle (zh/ja/ko/id/ru/de/it/es/pt/fr); English uses defaults.
  const pageStrings =
    lang === 'zh' ? zhStrings : lang === 'ja' ? jaStrings : lang === 'ko' ? koStrings : lang === 'id' ? idStrings : lang === 'ru' ? ruStrings : lang === 'de' ? deStrings : lang === 'it' ? itStrings : lang === 'pt' ? ptStrings : lang === 'fr' ? frStrings : lang === 'es' ? esStrings : undefined;
  const activeToolUi = pageStrings?.toolUi;
  const t = (key: string, fallback: string) =>
    activeToolUi ? ((activeToolUi[key] as string | undefined) ?? fallback) : fallback;
  const [items, setItems] = useState<ImageItem[]>([]);
  const itemsRef = useRef<ImageItem[]>([]);
  itemsRef.current = items;

  const [quality, setQuality] = useState<number>(defaultQuality);
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [scale, setScale] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [comparisonTarget, setComparisonTarget] = useState<ImageItem | null>(null);

  useEffect(() => {
    setQuality(defaultQuality);
    setBackgroundColor('#ffffff');
    setScale(1);
    setItems((prev) => {
      prev.forEach((img) => {
        if (img.originalPreviewUrl) URL.revokeObjectURL(img.originalPreviewUrl);
        if (img.compressedPreviewUrl) URL.revokeObjectURL(img.compressedPreviewUrl);
      });
      return [];
    });
    setComparisonTarget(null);
  }, [slug, defaultQuality]);

  useEffect(() => {
    return () => {
      itemsRef.current.forEach((img) => {
        if (img.originalPreviewUrl) URL.revokeObjectURL(img.originalPreviewUrl);
        if (img.compressedPreviewUrl) URL.revokeObjectURL(img.compressedPreviewUrl);
      });
    };
  }, []);

  const targetLabel = TARGET_LABEL[targetFormat];

  const convertSingleItem = async (
    item: ImageItem,
    nextQuality: number,
    nextBg: string,
    nextScale: number
  ): Promise<ImageItem> => {
    try {
      const result = await convertImageFile(
        item.file,
        targetFormat,
        nextQuality,
        nextBg,
        allowSvgScale ? nextScale : 1
      );

      if (item.compressedPreviewUrl) {
        URL.revokeObjectURL(item.compressedPreviewUrl);
      }

      const spaceSaved = item.originalSize - result.size;
      const compressionPercentage =
        item.originalSize > 0
          ? Number((((item.originalSize - result.size) / item.originalSize) * 100).toFixed(1))
          : 0;

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
        spaceSaved,
        compressionPercentage,
        quality: nextQuality,
        status: 'done',
        errorMessage: null,
      };
    } catch (err) {
      return {
        ...item,
        status: 'error',
        errorMessage:
          err instanceof Error
            ? err.message
            : decodeErrorHint ||
              t('errorConvertFailed', `Failed to convert {name} to ${targetLabel}.`).replace(
                '{name}',
                item.name
              ),
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
          outputType:
            targetFormat === 'png'
              ? 'image/png'
              : targetFormat === 'webp'
              ? 'image/webp'
              : 'image/jpeg',
          outputExtension:
            targetFormat === 'png' ? '.png' : targetFormat === 'webp' ? '.webp' : '.jpg',
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
          outputType:
            targetFormat === 'png'
              ? 'image/png'
              : targetFormat === 'webp'
              ? 'image/webp'
              : 'image/jpeg',
          outputExtension:
            targetFormat === 'png' ? '.png' : targetFormat === 'webp' ? '.webp' : '.jpg',
          outputFilename: file.name,
          quality,
          status: 'error',
          errorMessage:
            decodeErrorHint ||
            t(
              'errorCouldNotDecode',
              t(
                'errorDecodeFile',
                `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
              )
            )
              .replace('{name}', file.name)
              .replace('{filename}', file.name),
          spaceSaved: null,
          compressionPercentage: null,
        });
      }
    }

    setItems((prev) => [...prev, ...loaded]);

    const processed: ImageItem[] = [];
    for (const item of loaded) {
      if (item.status === 'error') {
        processed.push(item);
      } else {
        processed.push(await convertSingleItem(item, quality, backgroundColor, scale));
      }
    }

    setItems((prev) =>
      prev.map((existing) => processed.find((p) => p.id === existing.id) || existing)
    );
    setIsProcessing(false);
  };

  const handleReconvertAll = async () => {
    if (items.length === 0) return;
    setIsProcessing(true);

    setItems((prev) =>
      prev.map((img) => ({
        ...img,
        status: img.originalWidth ? 'compressing' : 'error',
      }))
    );

    const updated: ImageItem[] = [];
    for (const item of items) {
      if (!item.originalWidth) {
        updated.push(item);
      } else {
        updated.push(await convertSingleItem(item, quality, backgroundColor, scale));
      }
    }

    setItems(updated);
    setIsProcessing(false);
  };

  const handleRemove = (id: string) => {
    setItems((prev) => {
      const target = prev.find((i) => i.id === id);
      if (target) {
        if (target.originalPreviewUrl) URL.revokeObjectURL(target.originalPreviewUrl);
        if (target.compressedPreviewUrl) URL.revokeObjectURL(target.compressedPreviewUrl);
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
    setComparisonTarget(null);
  };

  const doneItems = items.filter((i) => i.status === 'done' && i.compressedBlob);
  const totalOrig = doneItems.reduce((sum, i) => sum + i.originalSize, 0);
  const totalOut = doneItems.reduce((sum, i) => sum + (i.compressedSize || 0), 0);

  const batchCountWord = t(
    doneItems.length === 1 ? 'fileSingular' : 'filePlural',
    doneItems.length === 1 ? 'file' : 'files'
  );
  // Batch 5 tables carry the whole line as a template (filesConverted);
  // Batch 6 tables compose it from fileSingular/filePlural/filesConvertedSuffix.
  const batchConvertedText = (() => {
    const filesConvertedTemplate = activeToolUi?.['filesConverted'];
    if (filesConvertedTemplate) {
      return filesConvertedTemplate
        .replace('{count}', String(doneItems.length))
        .replace('{files}', batchCountWord)
        .replace('{original}', formatBytes(totalOrig))
        .replace('{converted}', formatBytes(totalOut));
    }
    return `${doneItems.length} ${batchCountWord} ${t(
      'filesConvertedSuffix',
      'converted'
    )} · ${formatBytes(totalOrig)} → ${formatBytes(totalOut)}`;
  })();

  const handleDownloadAllZip = async () => {
    if (doneItems.length === 0) return;
    setIsZipping(true);
    try {
      const zipBlob = await createFilesZipArchive(
        doneItems.map((i) => ({ filename: i.outputFilename, blob: i.compressedBlob! })),
        `${sourceLabel.toLowerCase()}_to_${targetLabel.toLowerCase()}`
      );
      triggerDownload(
        zipBlob,
        `compressmypic_${sourceLabel.toLowerCase()}_to_${targetLabel.toLowerCase()}.zip`
      );
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <ToolPageLayout
      tool={activeTool}
      onNavigate={onNavigate}
      lang={lang}
      ui={pageStrings?.layoutUi}
      canonicalPath={
        lang === 'zh'
          ? toChinesePath(activeTool.slug)
          : lang === 'ja'
          ? toJapanesePath(activeTool.slug)
          : lang === 'ko'
            ? toKoreanPath(activeTool.slug)
            : lang === 'id'
              ? toIndonesianPath(activeTool.slug)
              : lang === 'ru'
                ? toRussianPath(activeTool.slug)
                : lang === 'de'
                  ? toGermanPath(activeTool.slug)
          : lang === 'it'
            ? toItalianPath(activeTool.slug)
            : lang === 'pt'
              ? toPortuguesePath(activeTool.slug)
              : lang === 'fr'
                ? toFrenchPath(activeTool.slug)
                : lang === 'es'
                  ? toSpanishPath(activeTool.slug)
                  : undefined
      }
      alternates={lang !== 'en' ? getAlternates(activeTool.slug) : undefined}
      toolRegistry={toolRegistry}
      categoryLabels={categoryLabels}
    >
      <div className="space-y-6">
        <UploadZone
          onFilesSelected={handleFilesSelected}
          maxFileSizeMB={maxFileSizeMB}
          disabled={isProcessing}
          accept={accept}
          allowedMimeTypes={allowedMimeTypes}
          allowedExtensionsRegex={allowedExtensionsRegex}
          supportedFormatsLabel={supportedFormatsLabel}
          title={uploadTitle || `Drop ${sourceLabel} files to convert to ${targetLabel}`}
          strings={pageStrings?.uploadZone}
        />

        {notice && (
          <div
            className={`rounded-2xl border p-4 text-xs sm:text-sm flex items-start gap-3 ${
              noticeTone === 'warning'
                ? 'bg-amber-50 border-amber-200 text-amber-900'
                : 'bg-blue-50 border-blue-200 text-blue-900'
            }`}
          >
            <Info
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                noticeTone === 'warning' ? 'text-amber-600' : 'text-blue-600'
              }`}
            />
            <p className="leading-relaxed">{notice}</p>
          </div>
        )}

        {/* Conversion Controls Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {t('conversionPipeline', 'Conversion Pipeline:')}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold">
                <span>{sourceLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-blue-700">{targetLabel}</span>
              </span>
              {targetFormat === 'png' && (
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                  {t('losslessPngOutput', 'Lossless PNG Output')}
                </span>
              )}
            </div>

            {items.length > 0 && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleReconvertAll}
                  disabled={isProcessing}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs cursor-pointer"
                >
                  {isProcessing ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>{t('converting', 'Converting...')}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>{t('reconvertAll', 'Re-convert All')}</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleClearAll}
                  disabled={isProcessing}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 text-xs sm:text-sm font-medium rounded-xl cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline">{t('clear', 'Clear')}</span>
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {targetFormat !== 'png' ? (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t('outputQualityLabel', t('outputQuality', `${targetLabel} Output Quality`))}
                  </span>
                  <span className="text-sm font-bold font-mono text-blue-600">{quality}%</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={100}
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  aria-label={t('qualityAriaLabel', `${targetLabel} output quality`)}
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>{t('smallerFile', 'Smaller file (20%)')}</span>
                  <span>{t('balanced', 'Balanced (85%)')}</span>
                  <span>{t('maxDetail', 'Max detail (100%)')}</span>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-600">
                <strong className="text-slate-800 block mb-0.5">
                  {t('losslessPngEncodingTitle', t('losslessPngEncoding', 'Lossless PNG Encoding'))}
                </strong>
                {t(
                  'losslessPngEncodingDesc',
                  t(
                    'losslessPngNote',
                    'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
                  )
                )}
              </div>
            )}

            {allowSvgScale && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('rasterExportScale', 'Raster Export Scale')}
                </span>
                <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1">
                  {SVG_SCALE_OPTIONS.map((factor) => (
                    <button
                      key={factor}
                      type="button"
                      onClick={() => setScale(factor)}
                      className={`px-3.5 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
                        scale === factor
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {factor}×
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 mt-1.5">
                  {t(
                    'rasterExportScaleHint',
                    "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
                  )}
                </p>
              </div>
            )}

            {showBackgroundColor && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('matteColorLabel', t('transparentMatteColor', 'Transparent Background Matte Color'))}
                </span>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-9 h-9 rounded-lg border border-slate-300 cursor-pointer p-0.5 bg-white"
                    aria-label={t('matteAriaLabel', 'Matte background color')}
                  />
                  {['#ffffff', '#000000', '#f8fafc'].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setBackgroundColor(preset)}
                      className={`px-2.5 py-1 text-xs font-mono rounded-lg border cursor-pointer ${
                        backgroundColor.toLowerCase() === preset
                          ? 'border-blue-600 bg-blue-50 text-blue-700 font-bold'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {preset === '#ffffff'
                        ? t('matteWhite', 'White')
                        : preset === '#000000'
                        ? t('matteBlack', 'Black')
                        : t('matteLightGray', 'Light Gray')}
                    </button>
                  ))}
                  <span className="text-xs font-mono text-slate-500">{backgroundColor}</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1.5">
                  {t(
                    'matteHint',
                    t(
                      'matteNote',
                      'JPG does not support transparency; transparent areas fill cleanly with this color.'
                    )
                  )}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Summary & Batch Results */}
        {items.length > 0 && (
          <div className="space-y-4">
            {doneItems.length > 0 && (
              <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    {t('batchSummary', `${sourceLabel} → ${targetLabel} Batch Summary`)
                      .replace('{source}', sourceLabel)
                      .replace('{target}', targetLabel)}
                  </span>
                  <p className="text-sm font-semibold mt-1">{batchConvertedText}</p>
                </div>
                {doneItems.length > 1 && (
                  <button
                    type="button"
                    onClick={handleDownloadAllZip}
                    disabled={isZipping}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl cursor-pointer shrink-0"
                  >
                    <FileArchive className="w-4 h-4" />
                    <span>
                      {isZipping
                        ? t('creatingZip', 'Creating ZIP...')
                        : t('downloadAllZip', 'Download All (ZIP)')}
                    </span>
                  </button>
                )}
              </div>
            )}

            {items.map((item) => {
              const isDone = item.status === 'done';
              const isBusy = item.status === 'compressing';
              const isErr = item.status === 'error';
              const sizeShrank =
                item.compressedSize !== null && item.compressedSize <= item.originalSize;

              return (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs"
                >
                  <div className="flex items-center gap-4 min-w-0 w-full md:w-auto">
                    <div
                      onClick={() => isDone && setComparisonTarget(item)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 ${
                        isDone ? 'cursor-pointer' : ''
                      }`}
                    >
                      <img
                        src={item.compressedPreviewUrl || item.originalPreviewUrl}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                      {isBusy && (
                        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                          <RotateCcw className="w-5 h-5 text-blue-600 animate-spin" />
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-slate-900 truncate">
                        {isDone ? item.outputFilename : item.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">
                        {item.originalWidth > 0 ? `${item.originalWidth}×${item.originalHeight}px` : '—'}
                        {isDone &&
                        item.compressedWidth &&
                        (item.compressedWidth !== item.originalWidth ||
                          item.compressedHeight !== item.originalHeight)
                          ? ` → ${item.compressedWidth}×${item.compressedHeight}px`
                          : ''}{' '}
                        · {targetLabel}
                      </p>

                      {isErr && (
                        <span className="inline-flex items-center gap-1 text-xs text-red-600 font-medium mt-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{item.errorMessage}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {isDone && item.compressedSize !== null && (
                    <div className="grid grid-cols-3 gap-3 py-2 px-3 sm:px-4 bg-slate-50 rounded-xl w-full md:w-auto text-center md:text-left">
                      <div>
                        <span className="text-[11px] text-slate-400 block font-medium">
                          {sourceLabel}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold font-mono text-slate-700 tabular-nums">
                          {formatBytes(item.originalSize)}
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block font-medium">
                          {targetLabel}
                        </span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-blue-700 tabular-nums">
                          {formatBytes(item.compressedSize)}
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block font-medium">
                          {t('changeLabel', t('columnChange', 'Change'))}
                        </span>
                        <span
                          className={`text-xs sm:text-sm font-bold font-mono tabular-nums ${
                            sizeShrank ? 'text-emerald-600' : 'text-slate-600'
                          }`}
                        >
                          {sizeShrank
                            ? formatPercent(item.compressionPercentage)
                            : `+${Math.abs(item.compressionPercentage || 0).toFixed(1)}%`}
                        </span>
                      </div>
                    </div>
                  )}

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
                          <span>{t('downloadTarget', `Download ${targetLabel}`)}</span>
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
          titlePrefix={t('comparisonTitlePrefix', `${sourceLabel} → ${targetLabel}`)}
          beforeLabel={pageStrings?.comparisonModal.beforeLabel}
          afterLabel={t('comparisonAfterLabel', `${targetLabel} ({size})`).replace(
            '{size}',
            formatBytes(comparisonTarget.compressedSize || 0)
          )}
          closeLabel={pageStrings?.comparisonModal.closeLabel}
          instruction={pageStrings?.comparisonModal.instruction}
          sliderLabel={pageStrings?.comparisonModal.sliderLabel}
          sideBySideLabel={pageStrings?.comparisonModal.sideBySideLabel}
          zoomInLabel={pageStrings?.comparisonModal.zoomInLabel}
          zoomOutLabel={pageStrings?.comparisonModal.zoomOutLabel}
          originalLabel={pageStrings?.comparisonModal.originalLabel}
          outputLabel={pageStrings?.comparisonModal.outputLabel}
          reductionLabel={pageStrings?.comparisonModal.reductionLabel}
          sizeChangeLabel={pageStrings?.comparisonModal.sizeChangeLabel}
          qualityLabel={pageStrings?.comparisonModal.qualityLabel}
          formatLabel={pageStrings?.comparisonModal.formatLabel}
          modalAriaLabel={pageStrings?.comparisonModal.modalAriaLabel}
          altCompressed={pageStrings?.comparisonModal.altCompressed}
          altOriginal={pageStrings?.comparisonModal.altOriginal}
          altProcessed={pageStrings?.comparisonModal.altProcessed}
        />
      )}
    </ToolPageLayout>
  );
};
