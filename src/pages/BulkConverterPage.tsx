import React, { useState, useEffect, useRef } from 'react';
import {
  Download,
  FileArchive,
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
import { toGermanPath } from '../locales/de/slugs';
import { toItalianPath } from '../locales/it/slugs';
import { toIndonesianPath } from '../locales/id/slugs';
import { toRussianPath } from '../locales/ru/slugs';
import { toJapanesePath } from '../locales/ja/slugs';
import { toKoreanPath } from '../locales/ko/slugs';
import { toChinesePath } from '../locales/zh/slugs';
import { getAlternates } from '../locales/alternates';
import { ToolPageLayout } from '../components/ToolPageLayout';
import { UploadZone } from '../components/UploadZone';
import { ComparisonModal } from '../components/ComparisonModal';
import { ImageItem } from '../types';
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  convertImageFile,
  loadExtendedImageInfo,
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



interface BulkConverterPageProps {
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

export const BulkConverterPage: React.FC<BulkConverterPageProps> = ({
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
  const activeTool = tool ?? TOOL_BY_SLUG['/bulk-image-converter'];
  const t = (key: string, fallback: string) =>
    lang === 'zh' && zhStrings?.toolUi
      ? ((zhStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'ja' && jaStrings?.toolUi
      ? ((jaStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'ko' && koStrings?.toolUi
      ? ((koStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'id' && idStrings?.toolUi
      ? ((idStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'ru' && ruStrings?.toolUi
      ? ((ruStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'de' && deStrings?.toolUi
      ? ((deStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'it' && itStrings?.toolUi
      ? ((itStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'pt' && ptStrings?.toolUi
      ? ((ptStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'fr' && frStrings?.toolUi
      ? ((frStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'es' && esStrings?.toolUi
      ? ((esStrings.toolUi[key] as string | undefined) ?? fallback)
      : fallback;
  const [items, setItems] = useState<ImageItem[]>([]);
  const itemsRef = useRef<ImageItem[]>([]);
  itemsRef.current = items;

  const [targetFormat, setTargetFormat] = useState<'webp' | 'jpeg' | 'png'>('webp');
  const [quality, setQuality] = useState<number>(85);
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [filenameSuffix, setFilenameSuffix] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processedCount, setProcessedCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
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

  // D1 REAL fix: re-convert already-converted items when the target format
  // changes. The Phase 8 fix landed in FormatConverterTool.tsx, which this
  // page does NOT use — this page has its own inline implementation, so the
  // effect belongs here. Without it, the stale previous-format blob stays
  // attached and Download silently saves the wrong format. If a conversion
  // is in flight when the format changes, the re-convert waits until it
  // finishes (isProcessing dep) instead of racing it.
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
    void handleConvertAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetFormat, isProcessing]);

  const convertItem = async (item: ImageItem): Promise<ImageItem> => {
    try {
      const res = await convertImageFile(item.file, targetFormat, quality, backgroundColor);
      if (item.compressedPreviewUrl) URL.revokeObjectURL(item.compressedPreviewUrl);

      const dotIdx = res.outputFilename.lastIndexOf('.');
      const finalName =
        filenameSuffix.trim() && dotIdx > -1
          ? `${res.outputFilename.slice(0, dotIdx)}${filenameSuffix.trim()}${res.outputFilename.slice(dotIdx)}`
          : res.outputFilename;

      const saved = item.originalSize - res.size;
      const pct =
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
        outputFilename: finalName,
        spaceSaved: saved,
        compressionPercentage: pct,
        quality,
        status: 'done',
        errorMessage: null,
      };
    } catch (err) {
      return {
        ...item,
        status: 'error',
        errorMessage: err instanceof Error ? err.message : t('errorConversionFailed', 'Batch conversion failed.'),
      };
    }
  };

  const handleFilesSelected = async (files: File[]) => {
    setIsProcessing(true);
    setProcessedCount(0);
    setTotalCount(files.length);

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
          outputType: 'image/webp',
          outputExtension: '.webp',
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
          outputType: 'image/webp',
          outputExtension: '.webp',
          outputFilename: file.name,
          quality,
          status: 'error',
          errorMessage: t('errorUnsupportedFile', 'Unsupported or corrupted image file.'),
          spaceSaved: null,
          compressionPercentage: null,
        });
      }
    }

    setItems((prev) => [...prev, ...loaded]);

    let done = 0;
    for (const item of loaded) {
      if (item.status === 'error') {
        done++;
        setProcessedCount(done);
        continue;
      }
      const converted = await convertItem(item);
      done++;
      setProcessedCount(done);
      setItems((prev) => prev.map((ex) => (ex.id === converted.id ? converted : ex)));
    }
    setIsProcessing(false);
  };

  const handleConvertAll = async () => {
    if (items.length === 0) return;
    setIsProcessing(true);
    setProcessedCount(0);
    setTotalCount(items.length);

    setItems((prev) =>
      prev.map((i) => ({ ...i, status: i.originalWidth ? 'compressing' : 'error' }))
    );

    let done = 0;
    const out: ImageItem[] = [];
    for (const item of items) {
      if (!item.originalWidth) {
        out.push(item);
        done++;
        setProcessedCount(done);
        continue;
      }
      const res = await convertItem(item);
      out.push(res);
      done++;
      setProcessedCount(done);
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
  const totalOrig = doneItems.reduce((acc, i) => acc + i.originalSize, 0);
  const totalOut = doneItems.reduce((acc, i) => acc + (i.compressedSize || 0), 0);

  const handleDownloadZip = async () => {
    if (doneItems.length === 0) return;
    setIsZipping(true);
    try {
      const zip = await createFilesZipArchive(
        doneItems.map((i) => ({ filename: i.outputFilename, blob: i.compressedBlob! })),
        `bulk_converted_${targetFormat === 'jpeg' ? 'jpg' : targetFormat}`
      );
      triggerDownload(zip, `bulk_converted_${targetFormat === 'jpeg' ? 'jpg' : targetFormat}.zip`);
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
          maxFileSizeMB={25}
          disabled={isProcessing}
          accept={EXTENDED_IMAGE_ACCEPT}
          allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
          allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
          supportedFormatsLabel="JPG, PNG, WebP, HEIC, SVG, BMP, GIF, AVIF"
          title={t('uploadTitle', 'Drop multiple images to bulk convert formats')}
          strings={lang === 'zh' ? zhStrings?.uploadZone : lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
        />

        <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 sm:p-6 shadow-[var(--shadow)] space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)] block mb-2">
                {t('convertBatchToFormat', 'Convert Batch To Format')}
              </span>
              <div className="inline-flex flex-wrap p-1 bg-[var(--surface-2)] border border-[var(--line)] rounded-[11px] gap-1">
                {(
                  [
                    { id: 'webp', label: t('formatWebp', 'WebP (Smallest Web)') },
                    { id: 'jpeg', label: t('formatJpg', 'JPG (Universal)') },
                    { id: 'png', label: t('formatPng', 'PNG (Lossless Alpha)') },
                  ] as const
                ).map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setTargetFormat(f.id)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-[8px] cursor-pointer transition-all ${
                      targetFormat === f.id
                        ? 'bg-[#7c3aed] text-white shadow-xs'
                        : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)] block mb-1.5">
                  {t('optionalFilenameSuffix', 'Optional Filename Suffix')}
                </span>
                <input
                  type="text"
                  value={filenameSuffix}
                  onChange={(e) => setFilenameSuffix(e.target.value)}
                  placeholder={t('placeholderSuffix', 'e.g. _web')}
                  className="w-36 px-3 py-2 text-xs font-mono bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                />
              </div>

              {targetFormat === 'jpeg' && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)] block mb-1.5">
                    {t('transparentFill', 'Transparent Fill')}
                  </span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-8 h-8 rounded-[8px] border border-[var(--line-strong)] cursor-pointer"
                    />
                    <span className="text-xs font-mono text-[var(--ink-2)]">{backgroundColor}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--line)] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1 max-w-md">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="font-semibold text-[var(--ink-2)]">
                  {targetFormat === 'png'
                    ? t('qualityLosslessPng', 'Quality (Lossless PNG)')
                    : t('qualityPercent', 'Quality ({quality}%)').replace('{quality}', String(quality))}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={100}
                value={quality}
                disabled={targetFormat === 'png'}
                onChange={(e) => setQuality(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-[var(--line)] rounded-lg appearance-none cursor-pointer disabled:opacity-40"
              />
            </div>

            {items.length > 0 && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleConvertAll}
                  disabled={isProcessing}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 btn-purple-grad disabled:opacity-50 text-sm font-semibold shadow-xs cursor-pointer"
                >
                  {isProcessing ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>
                        {t('convertingProgress', 'Converting ({processed}/{total})...')
                          .replace('{processed}', String(processedCount))
                          .replace('{total}', String(totalCount))}
                      </span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>{t('convertAll', 'Convert All ({count})').replace('{count}', String(items.length))}</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleClearAll}
                  disabled={isProcessing}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#fecaca] hover:text-[#dc2626] hover:bg-[#fee2e2] dark:hover:bg-[#ef4444]/15 dark:hover:text-[#fca5a5] text-[var(--ink-2)] text-sm font-medium rounded-[11px] cursor-pointer transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline">{t('clear', 'Clear')}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {items.length > 0 && (
          <div className="space-y-4">
            {doneItems.length > 0 && (
              <div className="panel-pastel-blue border rounded-2xl p-5 shadow-[var(--shadow)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6d28d9] dark:text-[#c4b5fd]">
                    {t('bulkConversionSummary', 'Bulk Conversion Summary')}
                  </span>
                  <p className="text-sm font-semibold text-[var(--ink-navy)] mt-0.5">
                    {t('filesConvertedSummary', '{count} files converted to {format} · {original} → {converted}')
                      .replace('{count}', String(doneItems.length))
                      .replace('{format}', targetFormat === 'jpeg' ? 'JPG' : targetFormat.toUpperCase())
                      .replace('{original}', formatBytes(totalOrig))
                      .replace('{converted}', formatBytes(totalOut))}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleDownloadZip}
                  disabled={isZipping}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 btn-purple-grad text-sm font-semibold cursor-pointer"
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
                  className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[var(--shadow)]"
                >
                  <div className="flex items-center gap-4 min-w-0 w-full md:w-auto">
                    <div
                      onClick={() => isDone && setComparisonTarget(item)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden bg-[var(--surface-2)] border border-[var(--line)] shrink-0 ${
                        isDone ? 'cursor-pointer' : ''
                      }`}
                    >
                      <img
                        src={item.compressedPreviewUrl || item.originalPreviewUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      {isBusy && (
                        <div className="absolute inset-0 bg-[var(--surface)]/80 flex items-center justify-center">
                          <RotateCcw className="w-5 h-5 text-[#7c3aed] animate-spin" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-sans text-sm font-bold text-[var(--ink-navy)] truncate">
                        {isDone ? item.outputFilename : item.name}
                      </h3>
                      <p className="text-xs text-[var(--ink-3)] mt-0.5 font-mono">
                        {item.originalWidth}×{item.originalHeight}px · {formatBytes(item.originalSize)}
                        {isDone && item.compressedSize !== null
                          ? ` → ${formatBytes(item.compressedSize)}`
                          : ''}
                      </p>
                      <div className="mt-1.5">
                        {isDone && (
                          <span className="inline-flex items-center gap-1 text-xs text-[#15803d] dark:text-[#4ade80] font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {t('convertedTo', 'Converted to {ext}').replace(
                              '{ext}',
                              item.outputExtension.replace('.', '').toUpperCase()
                            )}
                          </span>
                        )}
                        {isErr && (
                          <span className="inline-flex items-center gap-1 text-xs text-[#dc2626] dark:text-[#f87171] font-medium">
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
                          className="px-3.5 py-2 text-[var(--ink)] bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#7c3aed]/50 text-xs font-semibold rounded-[11px] flex items-center gap-1.5 cursor-pointer transition-colors"
                        >
                          <SplitSquareVertical className="w-4 h-4 text-[#7c3aed] dark:text-[#c4b5fd]" />
                          <span>{t('compare', 'Compare')}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            item.compressedBlob &&
                            triggerDownload(item.compressedBlob, item.outputFilename)
                          }
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-[11px] shadow-xs cursor-pointer transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          <span>{t('download', 'Download')}</span>
                        </button>
                      </>
                    )}
                    <button
                      type="button"
                      onClick={() => handleRemove(item.id)}
                      className="p-2 text-[var(--ink-3)] hover:text-[#dc2626] hover:bg-[#fee2e2] dark:hover:bg-[#ef4444]/15 dark:hover:text-[#fca5a5] rounded-lg cursor-pointer transition-colors"
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
          titlePrefix={t('comparisonTitlePrefix', 'Bulk Format Conversion')}
          beforeLabel={lang === 'zh' ? zhStrings?.comparisonModal.beforeLabel : lang === 'ja' ? jaStrings?.comparisonModal.beforeLabel : lang === 'ko' ? koStrings?.comparisonModal.beforeLabel : lang === 'id' ? idStrings?.comparisonModal.beforeLabel : lang === 'ru' ? ruStrings?.comparisonModal.beforeLabel : lang === 'de' ? deStrings?.comparisonModal.beforeLabel : lang === 'it' ? itStrings?.comparisonModal.beforeLabel : lang === 'pt' ? ptStrings?.comparisonModal.beforeLabel : lang === 'fr' ? frStrings?.comparisonModal.beforeLabel : esStrings?.comparisonModal.beforeLabel}
          afterLabel={t('comparisonAfterLabel', 'Converted (After)')}
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
