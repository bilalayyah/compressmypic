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

  const prevTargetFormatRef = useRef(targetFormat);
  const formatChangePendingRef = useRef(false);
  useEffect(() => {
    if (prevTargetFormatRef.current !== targetFormat) {
      prevTargetFormatRef.current = targetFormat;
      formatChangePendingRef.current = true;
    }
    if (!formatChangePendingRef.current || isProcessing) return;
    const done = itemsRef.current.filter((i) => i.status === 'done' && i.compressedBlob);
    formatChangePendingRef.current = false;
    if (done.length === 0) return;
    void handleReconvertAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetFormat, isProcessing]);

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
                ? 'pastel-card-10 text-[var(--ink)]'
                : 'pastel-card-2 text-[var(--ink-2)]'
            }`}
          >
            <Info
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                noticeTone === 'warning' ? 'text-[#ea580c] dark:text-[#fb923c]' : 'text-[#2563eb] dark:text-[#60a5fa]'
              }`}
            />
            <p className="leading-relaxed">{notice}</p>
          </div>
        )}

        {/* Conversion Controls Card */}
        <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 sm:p-6 shadow-[var(--shadow)] space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--line)]">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)]">
                {t('conversionPipeline', 'Conversion Pipeline:')}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--surface-2)] border border-[var(--line)] text-[var(--ink-navy)] text-xs font-bold">
                <span>{sourceLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#7c3aed] dark:text-[#a78bfa]" />
                <span className="text-[#7c3aed] dark:text-[#a78bfa]">{targetLabel}</span>
              </span>
              {targetFormat === 'png' && (
                <span className="text-xs font-medium text-[#15803d] dark:text-[#86efac] bg-[#dcfce7] dark:bg-[#16a34a]/20 border border-[#bbf7d0] dark:border-[#16a34a]/35 px-3 py-0.5 rounded-full">
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 btn-purple-grad disabled:opacity-50 text-xs sm:text-sm font-semibold shadow-sm cursor-pointer"
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
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[var(--surface-2)] border border-[var(--line)] hover:bg-[#fee2e2] hover:text-[#b91c1c] hover:border-[#fecaca] dark:hover:bg-[#ef4444]/15 dark:hover:text-[#fca5a5] text-[var(--ink-2)] text-xs sm:text-sm font-medium rounded-[11px] cursor-pointer transition-colors"
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
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)]">
                    {t('outputQualityLabel', t('outputQuality', `${targetLabel} Output Quality`))}
                  </span>
                  <span className="text-sm font-bold font-mono text-[#7c3aed] dark:text-[#a78bfa]">{quality}%</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={100}
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full h-2 bg-[var(--line)] rounded-lg appearance-none cursor-pointer"
                  aria-label={t('qualityAriaLabel', `${targetLabel} output quality`)}
                />
                <div className="flex justify-between text-[11px] text-[var(--ink-3)] mt-1">
                  <span>{t('smallerFile', 'Smaller file (20%)')}</span>
                  <span>{t('balanced', 'Balanced (85%)')}</span>
                  <span>{t('maxDetail', 'Max detail (100%)')}</span>
                </div>
              </div>
            ) : (
              <div className="bg-[var(--surface-2)] border border-[var(--line)] rounded-[11px] p-3.5 text-xs text-[var(--ink-2)]">
                <strong className="text-[var(--ink-navy)] block mb-0.5">
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
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)] block mb-2">
                  {t('rasterExportScale', 'Raster Export Scale')}
                </span>
                <div className="inline-flex p-1 bg-[var(--surface-2)] border border-[var(--line)] rounded-[11px] gap-1">
                  {SVG_SCALE_OPTIONS.map((factor) => (
                    <button
                      key={factor}
                      type="button"
                      onClick={() => setScale(factor)}
                      className={`px-3.5 py-1.5 text-xs font-bold rounded-[8px] cursor-pointer transition-colors ${
                        scale === factor
                          ? 'btn-purple-grad shadow-xs'
                          : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
                      }`}
                    >
                      {factor}×
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-[var(--ink-3)] mt-1.5">
                  {t(
                    'rasterExportScaleHint',
                    "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
                  )}
                </p>
              </div>
            )}

            {showBackgroundColor && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)] block mb-2">
                  {t('matteColorLabel', t('transparentMatteColor', 'Transparent Background Matte Color'))}
                </span>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-9 h-9 rounded-[8px] border border-[var(--line-strong)] cursor-pointer p-0.5 bg-[var(--surface)]"
                    aria-label={t('matteAriaLabel', 'Matte background color')}
                  />
                  {['#ffffff', '#000000', '#f8fafc'].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setBackgroundColor(preset)}
                      className={`px-3 py-1 text-xs font-mono rounded-full border cursor-pointer transition-colors ${
                        backgroundColor.toLowerCase() === preset
                          ? 'border-[#7c3aed] bg-[#ede9fe] text-[#6d28d9] dark:bg-[#7c3aed]/25 dark:text-[#ddd6fe] dark:border-[#8b5cf6] font-bold'
                          : 'border-[var(--line)] bg-[var(--surface-2)] text-[var(--ink-2)] hover:border-[var(--line-strong)]'
                      }`}
                    >
                      {preset === '#ffffff'
                        ? t('matteWhite', 'White')
                        : preset === '#000000'
                        ? t('matteBlack', 'Black')
                        : t('matteLightGray', 'Light Gray')}
                    </button>
                  ))}
                  <span className="text-xs font-mono text-[var(--ink-3)]">{backgroundColor}</span>
                </div>
                <p className="text-[11px] text-[var(--ink-3)] mt-1.5">
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
              <div className="panel-pastel-blue border rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[var(--shadow)]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6d28d9] dark:text-[#c4b5fd]">
                    {t('batchSummary', `${sourceLabel} → ${targetLabel} Batch Summary`)
                      .replace('{source}', sourceLabel)
                      .replace('{target}', targetLabel)}
                  </span>
                  <p className="text-sm font-semibold text-[var(--ink-navy)] mt-1">{batchConvertedText}</p>
                </div>
                {doneItems.length > 1 && (
                  <button
                    type="button"
                    onClick={handleDownloadAllZip}
                    disabled={isZipping}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 btn-purple-grad text-sm font-semibold cursor-pointer shrink-0 shadow-sm"
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
                  className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[var(--shadow)]"
                >
                  <div className="flex items-center gap-4 min-w-0 w-full md:w-auto">
                    <div
                      onClick={() => isDone && setComparisonTarget(item)}
                      className={`relative w-20 h-20 rounded-[11px] overflow-hidden bg-[var(--surface-2)] border border-[var(--line)] shrink-0 ${
                        isDone ? 'cursor-pointer' : ''
                      }`}
                    >
                      <img
                        src={item.compressedPreviewUrl || item.originalPreviewUrl}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                      {isBusy && (
                        <div className="absolute inset-0 bg-[var(--surface)]/85 flex items-center justify-center">
                          <RotateCcw className="w-5 h-5 text-[#7c3aed] animate-spin" />
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-sans font-bold text-[var(--ink-navy)] truncate">
                        {isDone ? item.outputFilename : item.name}
                      </h3>
                      <p className="text-xs text-[var(--ink-3)] mt-0.5 font-mono">
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
                        <span className="inline-flex items-center gap-1 text-xs text-[#dc2626] dark:text-[#fca5a5] font-medium mt-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{item.errorMessage}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {isDone && item.compressedSize !== null && (
                    <div className="grid grid-cols-3 gap-3 py-2 px-3 sm:px-4 bg-[var(--surface-2)] border border-[var(--line)] rounded-[11px] w-full md:w-auto text-center md:text-left">
                      <div>
                        <span className="text-[11px] text-[var(--ink-3)] block font-medium">
                          {sourceLabel}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold font-mono text-[var(--ink-2)] tabular-nums">
                          {formatBytes(item.originalSize)}
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] text-[var(--ink-3)] block font-medium">
                          {targetLabel}
                        </span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-[#7c3aed] dark:text-[#a78bfa] tabular-nums">
                          {formatBytes(item.compressedSize)}
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] text-[var(--ink-3)] block font-medium">
                          {t('changeLabel', t('columnChange', 'Change'))}
                        </span>
                        <span
                          className={`text-xs sm:text-sm font-bold font-mono tabular-nums ${
                            sizeShrank ? 'text-[#16a34a] dark:text-[#4ade80]' : 'text-[var(--ink-2)]'
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
                          className="px-3.5 py-2 text-[var(--ink-2)] bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#c4b5fd] hover:text-[#7c3aed] dark:hover:text-[#c4b5fd] text-xs font-semibold rounded-[11px] flex items-center gap-1.5 cursor-pointer transition-colors"
                        >
                          <SplitSquareVertical className="w-4 h-4 text-[#7c3aed] dark:text-[#a78bfa]" />
                          <span>{t('compare', 'Compare')}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            item.compressedBlob &&
                            triggerDownload(item.compressedBlob, item.outputFilename)
                          }
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-[11px] cursor-pointer transition-colors shadow-xs"
                        >
                          <Download className="w-4 h-4" />
                          <span>{t('downloadTarget', `Download ${targetLabel}`)}</span>
                        </button>
                      </>
                    )}
                    <button
                      type="button"
                      onClick={() => handleRemove(item.id)}
                      className="p-2 text-[var(--ink-3)] hover:text-[#dc2626] hover:bg-[#fee2e2] dark:hover:bg-[#ef4444]/15 dark:hover:text-[#fca5a5] rounded-[11px] cursor-pointer transition-colors"
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
