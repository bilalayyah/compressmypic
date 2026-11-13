import React, { useState, useEffect, useRef } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Download,
  FileArchive,
  Play,
  RotateCcw,
  ShieldCheck,
  SplitSquareVertical,
  Target,
  Trash2,
  AlertCircle,
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
import { getAlternates } from '../locales/alternates';
import { ToolPageLayout } from './ToolPageLayout';
import { UploadZone } from './UploadZone';
import { ComparisonModal } from './ComparisonModal';
import { ImageFormat, ImageItem, OutputFormatChoice } from '../types';
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  loadExtendedImageInfo,
} from '../utils/imageProcessing';
import { compressToTargetSize } from '../utils/targetCompression';
import { formatBytes, formatPercent, getFileExtension } from '../utils/formatters';
import { createFilesZipArchive, triggerDownload } from '../utils/zip';

interface TargetSizeMeta {
  achievedTarget: boolean;
  finalQuality: number;
  scaleFactor: number;
  statusNote: string;
  switchedFormatNote: string | null;
}

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

interface TargetSizeCompressorToolProps {
  slug: string;
  defaultTargetKb: number;
  allowCustomTarget?: boolean;
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
  ptStrings?: PagePtStrings;
  frStrings?: PageFrStrings;
}

export const TargetSizeCompressorTool: React.FC<TargetSizeCompressorToolProps> = ({
  slug,
  defaultTargetKb,
  allowCustomTarget = false,
  onNavigate,
  lang,
  tool,
  toolRegistry,
  categoryLabels,
  esStrings,
  ptStrings,
  frStrings,
}) => {
  const activeTool = tool ?? TOOL_BY_SLUG[slug];
  // Active language's page-strings bundle (es/pt/fr); English uses defaults.
  const pageStrings =
    lang === 'pt' ? ptStrings : lang === 'fr' ? frStrings : lang === 'es' ? esStrings : undefined;
  const activeToolUi = pageStrings?.toolUi;
  const t = (key: string, fallback: string) =>
    activeToolUi ? (activeToolUi[key] as string | undefined) ?? fallback : fallback;
  const [items, setItems] = useState<ImageItem[]>([]);
  const [metaById, setMetaById] = useState<Record<string, TargetSizeMeta>>({});
  const itemsRef = useRef<ImageItem[]>([]);
  itemsRef.current = items;

  const [targetValue, setTargetValue] = useState<number>(defaultTargetKb);
  const [unit, setUnit] = useState<'KB' | 'MB'>('KB');
  const [format, setFormat] = useState<OutputFormatChoice>('original');
  const [allowDownscale, setAllowDownscale] = useState<boolean>(true);
  const [autoSwitchPngToLossy, setAutoSwitchPngToLossy] = useState<boolean>(true);
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [comparisonTarget, setComparisonTarget] = useState<ImageItem | null>(null);

  useEffect(() => {
    setTargetValue(defaultTargetKb);
    setUnit('KB');
  }, [defaultTargetKb, slug]);

  useEffect(() => {
    return () => {
      itemsRef.current.forEach((img) => {
        if (img.originalPreviewUrl) URL.revokeObjectURL(img.originalPreviewUrl);
        if (img.compressedPreviewUrl) URL.revokeObjectURL(img.compressedPreviewUrl);
      });
    };
  }, []);

  const effectiveTargetBytes = Math.max(
    1024,
    Math.round((unit === 'MB' ? targetValue * 1024 : targetValue) * 1024)
  );
  const targetLabel = `${targetValue || 1} ${unit}`;

  const processSingleItem = async (item: ImageItem): Promise<ImageItem> => {
    try {
      const result = await compressToTargetSize(item, {
        targetBytes: effectiveTargetBytes,
        format,
        allowDownscale,
        autoSwitchPngToLossy,
        backgroundColor,
        lang,
        strings: activeToolUi,
      });

      if (item.compressedPreviewUrl) {
        URL.revokeObjectURL(item.compressedPreviewUrl);
      }

      setMetaById((prev) => ({
        ...prev,
        [item.id]: {
          achievedTarget: result.achievedTarget,
          finalQuality: result.finalQuality,
          scaleFactor: result.scaleFactor,
          statusNote: result.statusNote,
          switchedFormatNote: result.switchedFormatNote,
        },
      }));

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
        quality: result.finalQuality,
        keptOriginal: false,
        status: 'done',
        errorMessage: null,
      };
    } catch (err) {
      return {
        ...item,
        status: 'error',
        errorMessage: err instanceof Error ? err.message : t('errorTargetFailed', 'Target compression failed.'),
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
          quality: 80,
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
          quality: 80,
          status: 'error',
          errorMessage: t('errorCorruptedFile', 'Corrupted or unreadable image file.'),
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
        processed.push(await processSingleItem(item));
      }
    }

    setItems((prev) =>
      prev.map((existing) => processed.find((p) => p.id === existing.id) || existing)
    );
    setIsProcessing(false);
  };

  const handleCompressAll = async () => {
    if (items.length === 0) return;
    setIsProcessing(true);
    setItems((prev) =>
      prev.map((img) => ({
        ...img,
        status: img.originalWidth ? 'compressing' : 'error',
      }))
    );

    const out: ImageItem[] = [];
    for (const img of items) {
      if (!img.originalWidth) {
        out.push(img);
      } else {
        out.push(await processSingleItem(img));
      }
    }
    setItems(out);
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
    setMetaById({});
  };

  const handleKeepOriginal = (id: string) => {
    setItems((prev) =>
      prev.map((img) => {
        if (img.id !== id) return img;
        if (img.compressedPreviewUrl && img.compressedPreviewUrl !== img.originalPreviewUrl) {
          URL.revokeObjectURL(img.compressedPreviewUrl);
        }
        const origExt = getFileExtension(img.name) || '.png';
        return {
          ...img,
          compressedBlob: img.file,
          compressedPreviewUrl: URL.createObjectURL(img.file),
          compressedSize: img.originalSize,
          compressedWidth: img.originalWidth,
          compressedHeight: img.originalHeight,
          outputType: (img.originalType as ImageFormat) || 'image/png',
          outputExtension: origExt,
          outputFilename: img.name,
          spaceSaved: 0,
          compressionPercentage: 0,
          keptOriginal: true,
          status: 'done',
          errorMessage: null,
        };
      })
    );
    setMetaById((prev) => {
      const existing = prev[id];
      if (!existing) return prev;
      return {
        ...prev,
        [id]: {
          ...existing,
          achievedTarget: itemsRef.current.find((i) => i.id === id)?.originalSize
            ? (itemsRef.current.find((i) => i.id === id)!.originalSize <= effectiveTargetBytes)
            : existing.achievedTarget,
          statusNote: t('keptOriginalNote', 'Kept original file because re-encoding made it larger.'),
        },
      };
    });
  };

  const doneItems = items.filter((i) => i.status === 'done' && i.compressedBlob);
  const achievedCount = doneItems.filter((i) => metaById[i.id]?.achievedTarget).length;
  const missedCount = doneItems.length - achievedCount;
  const totalOrig = doneItems.reduce((sum, i) => sum + i.originalSize, 0);
  const totalOut = doneItems.reduce((sum, i) => sum + (i.compressedSize || 0), 0);
  const totalSaved = totalOrig - totalOut;

  // --- Localized display strings derived from live state ---
  // Batch 4 fixed targets use `uploadTitle`; the Batch 5 custom-target page
  // uses `uploadTitleTemplate` (live targetLabel). Both carry `{target}`.
  const uploadTitle = t(
    'uploadTitleTemplate',
    t('uploadTitle', 'Drop images to compress under {target}')
  ).replace('{target}', targetLabel);

  const summaryMetText = t('summaryMet', '{achieved} of {total} {images} met the {target} target')
    .replace('{achieved}', String(achievedCount))
    .replace('{total}', String(doneItems.length))
    .replace(
      '{images}',
      doneItems.length === 1 ? t('imageSingular', 'image') : t('imagePlural', 'images')
    )
    .replace('{target}', targetLabel);

  // `summaryMissed` may carry its own leading '·' (Batch 4 ' · …', Batch 5 '· …');
  // strip it and let the JSX supply the single separator.
  const missedSegment =
    missedCount > 0
      ? ` · ${t('summaryMissed', '{missed} could not honestly fit (details below)')
          .replace('{missed}', String(missedCount))
          .replace(/^\s*·\s*/, '')}`
      : '';

  // Batch 4 `totalSavedGrew` is one string; Batch 5 splits it into
  // `totalSaved` ({saved}) + `totalGrew` ({grew}).
  const fillSaved = (text: string) =>
    text
      .replace('{bytes}', formatBytes(totalSaved))
      .replace('{saved}', formatBytes(totalSaved))
      .replace('{grew}', formatBytes(Math.abs(totalSaved)));

  const totalSavedText =
    totalSaved < 0
      ? activeToolUi?.totalSavedGrew
        ? fillSaved(activeToolUi.totalSavedGrew)
        : `${fillSaved(t('totalSaved', 'Total Saved: {bytes}'))} ${fillSaved(
            t('totalGrew', '(grew by {grew})')
          )}`
      : fillSaved(t('totalSaved', 'Total Saved: {bytes}'));

  // Checkbox labels carry the live target at the end; the base already bolds
  // it in `allowDownscale`, so keep it bold in both languages.
  const withTarget = (text: string): React.ReactNode => {
    const [before, after] = text.split('{target}');
    return (
      <>
        {before}
        <strong>{targetLabel}</strong>
        {after ?? ''}
      </>
    );
  };
  const allowDownscaleLabel = withTarget(
    t(
      'allowDownscale',
      'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    )
  );
  // `autoSwitchPng` (Batch 5) / `autoConvertPng` (Batch 4); plain text in the
  // base (target not bold), so a plain substitution keeps English identical.
  const autoConvertLabel = t(
    'autoSwitchPng',
    t(
      'autoConvertPng',
      'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    )
  ).replace('{target}', targetLabel);
  const transparentMatteLabel = t(
    'transparentPngMatteColor',
    t('transparentPngMatte', 'Transparent PNG matte color:')
  );
  // PNG warning: Batch 5 `losslessPngTitle` / `losslessPngNote`, Batch 4
  // `losslessPngSelected` / `losslessPngWarning`. English keeps its <strong>
  // JPG/WebP markup (see JSX below); localized (non-English) strings render as plain text.
  const pngWarningTitle = t('losslessPngTitle', t('losslessPngSelected', 'Lossless PNG selected:'));
  const pngWarningBody = activeToolUi
    ? activeToolUi.losslessPngNote ?? activeToolUi.losslessPngWarning ?? null
    : null;

  const handleDownloadAllZip = async () => {
    if (doneItems.length === 0) return;
    setIsZipping(true);
    try {
      const zipBlob = await createFilesZipArchive(
        doneItems.map((i) => ({ filename: i.outputFilename, blob: i.compressedBlob! })),
        `compressed_under_${targetValue}${unit.toLowerCase()}`
      );
      triggerDownload(zipBlob, `compressmypic_${targetValue}${unit.toLowerCase()}.zip`);
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
        lang === 'pt'
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
          maxFileSizeMB={25}
          disabled={isProcessing}
          accept={EXTENDED_IMAGE_ACCEPT}
          allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
          allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
          supportedFormatsLabel="JPG, PNG, WebP, HEIC, GIF, BMP, SVG"
          title={uploadTitle}
          strings={pageStrings?.uploadZone}
        />

        {/* Target Controls Panel */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-5 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                {t('targetMaxFileSize', 'Target Maximum File Size')}
              </span>
              {allowCustomTarget ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={1}
                      max={unit === 'MB' ? 20 : 10240}
                      step={1}
                      value={targetValue}
                      onChange={(e) => {
                        const v = Math.max(1, parseInt(e.target.value || '1', 10) || 1);
                        setTargetValue(v);
                      }}
                      className="w-28 px-3.5 py-2 text-sm font-bold font-mono border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label={t('targetNumberAria', 'Target file size number')}
                    />
                    <div className="inline-flex p-1 bg-slate-100 rounded-xl">
                      {(['KB', 'MB'] as const).map((u) => (
                        <button
                          key={u}
                          type="button"
                          onClick={() => {
                            if (u === 'MB' && unit === 'KB') {
                              setTargetValue(Math.max(1, Math.round(targetValue / 1024) || 1));
                            } else if (u === 'KB' && unit === 'MB') {
                              setTargetValue(Math.min(10240, targetValue * 1024));
                            }
                            setUnit(u);
                          }}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                            unit === u
                              ? 'bg-white text-blue-700 shadow-xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {u}
                        </button>
                      ))}
                    </div>
                    <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                      {t('maxSuffix', '({size})').replace('{size}', formatBytes(effectiveTargetBytes))}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { label: t('preset20kb', '20 KB'), v: 20, u: 'KB' as const },
                      { label: t('preset50kb', '50 KB'), v: 50, u: 'KB' as const },
                      { label: t('preset100kb', '100 KB'), v: 100, u: 'KB' as const },
                      { label: t('preset200kb', '200 KB'), v: 200, u: 'KB' as const },
                      { label: t('preset500kb', '500 KB'), v: 500, u: 'KB' as const },
                      { label: t('preset1mb', '1 MB'), v: 1, u: 'MB' as const },
                    ].map((preset) => (
                      <button
                        key={preset.label}
                        type="button"
                        onClick={() => {
                          setTargetValue(preset.v);
                          setUnit(preset.u);
                        }}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-lg cursor-pointer transition-colors ${
                          targetValue === preset.v && unit === preset.u
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-800">
                    <Target className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-extrabold font-mono">{targetLabel}</span>
                    <span className="text-xs text-blue-600 font-medium">
                      {t('targetMaxSuffix', '({bytes} max)').replace(
                        '{bytes}',
                        formatBytes(effectiveTargetBytes)
                      )}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate('/target-file-size-compressor')}
                    className="text-xs font-semibold text-slate-600 hover:text-blue-600 underline underline-offset-2 cursor-pointer"
                  >
                    {t('needDifferentTarget', 'Need a different target KB?')}
                  </button>
                </div>
              )}
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                {t('outputFormat', 'Output Format')}
              </span>
              <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1">
                {(['original', 'jpeg', 'webp', 'png'] as OutputFormatChoice[]).map((fmt) => (
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
                    {fmt === 'original'
                      ? t('formatOriginal', 'Original')
                      : fmt === 'jpeg'
                      ? t('formatJpg', 'JPG')
                      : fmt === 'webp'
                      ? t('formatWebp', 'WEBP')
                      : t('formatPng', 'PNG')}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <label className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={allowDownscale}
                  onChange={(e) => setAllowDownscale(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span>{allowDownscaleLabel}</span>
              </label>

              {format === 'original' && (
                <label className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={autoSwitchPngToLossy}
                    onChange={(e) => setAutoSwitchPngToLossy(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>{autoConvertLabel}</span>
                </label>
              )}

              {format === 'jpeg' && (
                <div className="flex items-center gap-2 text-xs text-slate-600 pt-1">
                  <span>{transparentMatteLabel}</span>
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-6 h-6 rounded border border-slate-300 cursor-pointer"
                  />
                  <span className="font-mono">{backgroundColor}</span>
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleCompressAll}
                  disabled={isProcessing}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-semibold rounded-xl shadow-xs cursor-pointer"
                >
                  {isProcessing ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>{t('optimizing', 'Optimizing...')}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>{t('compressToTarget', 'Compress to {target}').replace('{target}', targetLabel)}</span>
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
            )}
          </div>

          {format === 'png' && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 mt-0.5 text-amber-600 shrink-0" />
              <p>
                <strong>{pngWarningTitle}</strong>{' '}
                {pngWarningBody ?? (
                  <>
                    PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel
                    dimensions. For large photos, choose <strong>JPG</strong> or <strong>WebP</strong>{' '}
                    to hit strict KB limits while staying sharp.
                  </>
                )}
              </p>
            </div>
          )}
        </div>

        {/* Results & Honest Target Verification */}
        {items.length > 0 && (
          <div className="space-y-4">
            {doneItems.length > 0 && (
              <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    {t('targetSummary', 'Target Compression Summary · Goal ≤ {target}').replace(
                      '{target}',
                      targetLabel
                    )}
                  </span>
                  <p className="text-sm font-semibold mt-1">
                    {summaryMetText}
                    {missedSegment}
                    {' · '}
                    <span className={totalSaved < 0 ? 'text-red-400' : 'text-emerald-400'}>
                      {totalSavedText}
                    </span>
                  </p>
                </div>
                {doneItems.length > 1 && (
                  <button
                    type="button"
                    onClick={handleDownloadAllZip}
                    disabled={isZipping}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl cursor-pointer shrink-0"
                  >
                    <FileArchive className="w-4 h-4" />
                    <span>{isZipping ? 'Creating ZIP...' : 'Download All (ZIP)'}</span>
                  </button>
                )}
              </div>
            )}

            {items.map((item) => {
              const isDone = item.status === 'done';
              const isBusy = item.status === 'compressing';
              const isErr = item.status === 'error';
              const meta = metaById[item.id];

              return (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
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
                            : ''}{' '}
                          · {item.outputExtension.replace('.', '').toUpperCase()}
                        </p>

                        <div className="mt-1.5 flex flex-wrap items-center gap-2">
                          {isDone && meta && (
                            <span
                              className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md ${
                                meta.achievedTarget
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : 'bg-amber-50 text-amber-800 border border-amber-200'
                              }`}
                            >
                              {meta.achievedTarget ? (
                                <>
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                  <span>
                                    {t('underTarget', 'Under {target} ({bytes})')
                                      .replace('{target}', targetLabel)
                                      .replace('{bytes}', formatBytes(item.compressedSize || 0))
                                      .replace('{size}', formatBytes(item.compressedSize || 0))}
                                  </span>
                                </>
                              ) : (
                                <>
                                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                                  <span>
                                    {t('targetMissed', 'Target missed — {bytes}')
                                      .replace('{bytes}', formatBytes(item.compressedSize || 0))
                                      .replace('{size}', formatBytes(item.compressedSize || 0))}
                                  </span>
                                </>
                              )}
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

                    {isDone && item.compressedSize !== null && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 px-3 sm:px-4 bg-slate-50 rounded-xl w-full md:w-auto text-center md:text-left">
                        <div>
                          <span className="text-[11px] text-slate-400 block font-medium">{t('columnOriginal', t('metricOriginal', 'Original'))}</span>
                          <span className="text-xs sm:text-sm font-semibold font-mono text-slate-700 tabular-nums">
                            {formatBytes(item.originalSize)}
                          </span>
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-400 block font-medium">{t('columnOutput', t('metricOutput', 'Output'))}</span>
                          <span
                            className={`text-xs sm:text-sm font-bold font-mono tabular-nums ${
                              item.compressedSize > item.originalSize && !item.keptOriginal
                                ? 'text-red-600'
                                : meta?.achievedTarget
                                ? 'text-emerald-700'
                                : 'text-amber-700'
                            }`}
                          >
                            {formatBytes(item.compressedSize)}
                          </span>
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-400 block font-medium">{t('columnSpaceSaved', t('metricSpaceSaved', 'Space Saved'))}</span>
                          <span
                            className={`text-xs sm:text-sm font-semibold font-mono tabular-nums ${
                              (item.spaceSaved ?? 0) < 0 ? 'text-red-600' : 'text-emerald-600'
                            }`}
                          >
                            {formatBytes(item.spaceSaved ?? (item.originalSize - item.compressedSize))}
                          </span>
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-400 block font-medium">
                            {(item.compressionPercentage ?? 0) < 0
                              ? t('columnSizeChange', t('metricSizeChange', 'Size Change'))
                              : t('columnReduction', t('metricReduction', 'Reduction'))}
                          </span>
                          <span
                            className={`text-xs sm:text-sm font-bold font-mono tabular-nums ${
                              (item.compressionPercentage ?? 0) < 0 ? 'text-red-600' : 'text-blue-600'
                            }`}
                          >
                            {formatPercent(item.compressionPercentage)}
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

                  {isDone && meta && (
                    <div
                      className={`text-xs rounded-xl px-3.5 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                        item.compressedSize !== null &&
                        item.compressedSize > item.originalSize &&
                        !item.keptOriginal
                          ? 'bg-red-50 text-red-900 dark:text-red-200 border border-red-200'
                          : meta.achievedTarget
                          ? 'bg-slate-50 text-slate-600 border border-slate-200'
                          : 'bg-amber-50 text-amber-900 border border-amber-200'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {item.compressedSize !== null &&
                        item.compressedSize > item.originalSize &&
                        !item.keptOriginal ? (
                          <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        ) : meta.achievedTarget ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        )}
                        <div className="space-y-0.5">
                          <p>
                            {item.compressedSize !== null &&
                            item.compressedSize > item.originalSize &&
                            !item.keptOriginal
                              ? `${t('grewBy', 'Grew by {bytes} — re-encode is larger than the original.')
                                  .replace('{bytes}', formatBytes(item.compressedSize - item.originalSize))
                                  .replace('{amount}', formatBytes(item.compressedSize - item.originalSize))}${
                                  item.outputType === 'image/png'
                                    ? ` ${t(
                                        'grewPngHint',
                                        t('grewPngNote', 'WebP or JPG is usually smaller for photo-like PNGs.')
                                      )}`
                                    : ''
                                }`
                              : meta.statusNote}
                          </p>
                          {meta.switchedFormatNote && (
                            <p className="text-blue-700 font-medium">{meta.switchedFormatNote}</p>
                          )}
                        </div>
                      </div>
                      {item.compressedSize !== null &&
                        item.compressedSize > item.originalSize &&
                        !item.keptOriginal && (
                          <button
                            type="button"
                            onClick={() => handleKeepOriginal(item.id)}
                            className="shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-red-300 dark:border-red-500/50 text-red-900 dark:text-red-200 hover:bg-red-100 dark:hover:bg-red-500/20 font-bold text-xs cursor-pointer"
                          >
                            <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                            <span>{t('keepOriginal', 'Keep original')}</span>
                          </button>
                        )}
                    </div>
                  )}
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
          titlePrefix={t('comparisonTitlePrefix', 'Target Compression ({target})').replace(
            '{target}',
            targetLabel
          )}
          beforeLabel={pageStrings?.comparisonModal.beforeLabel}
          afterLabel={t('comparisonAfterLabel', 'Compressed ({bytes})')
            .replace('{bytes}', formatBytes(comparisonTarget.compressedSize || 0))
            .replace('{size}', formatBytes(comparisonTarget.compressedSize || 0))}
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
