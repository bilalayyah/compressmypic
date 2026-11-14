import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCircle2,
  Download,
  FileArchive,
  Play,
  RotateCcw,
  ShieldCheck,
  Trash2,
  AlertCircle,
} from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import type { ToolDefinition } from '../data/tools';
import { ToolPageLayout } from '../components/ToolPageLayout';
import { UploadZone } from '../components/UploadZone';
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
import { OutputFormatChoice } from '../types';
import { removeImageMetadata } from '../utils/metadata';
import { formatBytes } from '../utils/formatters';
import { createFilesZipArchive, triggerDownload } from '../utils/zip';

interface CleanItem {
  id: string;
  file: File;
  name: string;
  originalSize: number;
  previewUrl: string;
  status: 'processing' | 'done' | 'error';
  errorMessage: string | null;
  blob: Blob | null;
  outputFilename: string;
  outputSize: number;
  width: number;
  height: number;
  methodUsed: 'lossless-strip' | 'canvas-reencode' | null;
  beforeTagsCount: number;
  afterTagsCount: number;
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

interface RemoveMetadataPageProps {
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

export const RemoveMetadataPage: React.FC<RemoveMetadataPageProps> = ({
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
  const activeTool = tool ?? TOOL_BY_SLUG['/remove-image-metadata'];
  const [items, setItems] = useState<CleanItem[]>([]);
  const itemsRef = useRef<CleanItem[]>([]);
  itemsRef.current = items;

  const [mode, setMode] = useState<'lossless' | 'reencode'>('lossless');
  const [format, setFormat] = useState<OutputFormatChoice>('original');
  const [quality, setQuality] = useState<number>(92);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      itemsRef.current.forEach((i) => URL.revokeObjectURL(i.previewUrl));
    };
  }, []);

  const cleanSingle = async (
    item: CleanItem,
    nextMode: 'lossless' | 'reencode' = mode,
    nextFmt: OutputFormatChoice = format,
    nextQ: number = quality
  ): Promise<CleanItem> => {
    try {
      const res = await removeImageMetadata(item.file, nextMode, nextFmt, nextQ);
      URL.revokeObjectURL(item.previewUrl);
      return {
        ...item,
        previewUrl: res.previewUrl,
        status: 'done',
        errorMessage: null,
        blob: res.blob,
        outputFilename: res.outputFilename,
        outputSize: res.size,
        width: res.width,
        height: res.height,
        methodUsed: res.methodUsed,
        beforeTagsCount: res.beforeTagsCount,
        afterTagsCount: res.afterTagsCount,
      };
    } catch (err) {
      return {
        ...item,
        status: 'error',
        errorMessage: err instanceof Error ? err.message : t('failedToStrip', 'Failed to strip metadata.'),
      };
    }
  };

  const handleFilesSelected = async (files: File[]) => {
    setIsProcessing(true);
    const pending: CleanItem[] = files.map((file) => ({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      file,
      name: file.name,
      originalSize: file.size,
      previewUrl: URL.createObjectURL(file),
      status: 'processing',
      errorMessage: null,
      blob: null,
      outputFilename: file.name,
      outputSize: 0,
      width: 0,
      height: 0,
      methodUsed: null,
      beforeTagsCount: 0,
      afterTagsCount: 0,
    }));

    setItems((prev) => [...prev, ...pending]);

    const completed: CleanItem[] = [];
    for (const item of pending) {
      completed.push(await cleanSingle(item));
    }
    setItems((prev) => prev.map((e) => completed.find((c) => c.id === e.id) || e));
    setIsProcessing(false);
  };

  const handleReprocessAll = async () => {
    if (items.length === 0) return;
    setIsProcessing(true);
    const out: CleanItem[] = [];
    for (const item of items) {
      out.push(await cleanSingle(item));
    }
    setItems(out);
    setIsProcessing(false);
  };

  const handleRemove = (id: string) => {
    setItems((prev) => {
      const t = prev.find((i) => i.id === id);
      if (t) URL.revokeObjectURL(t.previewUrl);
      return prev.filter((i) => i.id !== id);
    });
  };

  const handleClearAll = () => {
    items.forEach((i) => URL.revokeObjectURL(i.previewUrl));
    setItems([]);
  };

  const doneItems = items.filter((i) => i.status === 'done' && i.blob);

  const handleDownloadZip = async () => {
    if (doneItems.length === 0) return;
    setIsZipping(true);
    try {
      const zip = await createFilesZipArchive(
        doneItems.map((i) => ({ filename: i.outputFilename, blob: i.blob! })),
        'metadata_removed_images'
      );
      triggerDownload(zip, 'clean_images_no_metadata.zip');
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
          title={t('uploadTitle', 'Drop photos to strip EXIF, GPS & metadata')}
          strings={lang === 'zh' ? zhStrings?.uploadZone : lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
        />

        {items.length > 0 && (
          <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 sm:p-6 shadow-[var(--shadow)] space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)] block mb-2">
                  {t('strippingMethod', 'Stripping Method')}
                </span>
                <div className="inline-flex flex-wrap p-1 bg-[var(--surface-2)] border border-[var(--line)] rounded-[11px] gap-1">
                  <button
                    type="button"
                    onClick={() => setMode('lossless')}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-[8px] cursor-pointer transition-all ${
                      mode === 'lossless'
                        ? 'bg-[var(--surface)] text-[#6d28d9] dark:text-[#ddd6fe] shadow-xs'
                        : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {t('losslessStrip', 'Lossless Binary Strip (JPG/PNG)')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('reencode')}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-[8px] cursor-pointer transition-all ${
                      mode === 'reencode'
                        ? 'bg-[var(--surface)] text-[#6d28d9] dark:text-[#ddd6fe] shadow-xs'
                        : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {t('fullCanvasReencode', 'Full Canvas Re-encode')}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)] block mb-2">
                  {t('outputFormat', 'Output Format')}
                </span>
                <div className="inline-flex p-1 bg-[var(--surface-2)] border border-[var(--line)] rounded-[11px] gap-1">
                  {(['original', 'jpeg', 'png', 'webp'] as OutputFormatChoice[]).map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setFormat(fmt)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-[8px] cursor-pointer transition-all ${
                        format === fmt
                          ? 'bg-[#7c3aed] text-white shadow-xs'
                          : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
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

            <div className="pt-4 border-t border-[var(--line)] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1 max-w-md">
                <span className="text-xs font-semibold text-[var(--ink-2)] block mb-1.5">
                  {t('reencodeQuality', 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):')}{' '}
                  <strong className="text-[#7c3aed] dark:text-[#a78bfa] font-mono">{quality}%</strong>
                </span>
                <input
                  type="range"
                  min={50}
                  max={100}
                  value={quality}
                  onChange={(e) => setQuality(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-[var(--line)] rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleReprocessAll}
                  disabled={isProcessing}
                  className="inline-flex items-center gap-2 px-5 py-2.5 btn-purple-grad text-sm font-semibold cursor-pointer"
                >
                  {isProcessing ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>{t('cleaning', 'Cleaning...')}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>{t('recleanAll', 'Re-clean All')}</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#fecaca] hover:bg-[#fee2e2] hover:text-[#dc2626] dark:hover:bg-[#ef4444]/15 dark:hover:text-[#fca5a5] text-[var(--ink-2)] text-sm font-medium rounded-[11px] cursor-pointer transition-colors"
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
              <div className="panel-pastel-blue border rounded-2xl p-5 shadow-[var(--shadow)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6d28d9] dark:text-[#c4b5fd]">
                    {t('privacyVerified', 'Privacy Verified')}
                  </span>
                  <p className="text-sm font-semibold text-[var(--ink-navy)] mt-0.5">
                    {t('cleanImagesReady', '{count} clean images ready with metadata stripped').replace('{count}', String(doneItems.length))}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleDownloadZip}
                  disabled={isZipping}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 btn-purple-grad text-sm font-semibold cursor-pointer"
                >
                  <FileArchive className="w-4 h-4" />
                  <span>{isZipping ? t('creatingZip', 'Creating ZIP...') : t('downloadAllCleanZip', 'Download All Clean (ZIP)')}</span>
                </button>
              </div>
            )}

            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-4 sm:p-5 shadow-[var(--shadow)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 min-w-0 w-full md:w-auto">
                  <img
                    src={item.previewUrl}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover border border-[var(--line)] shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-sans text-sm font-bold text-[var(--ink-navy)] truncate">{item.outputFilename}</h3>
                    {item.status === 'done' && (
                      <>
                        <p className="text-xs text-[var(--ink-3)] font-mono mt-0.5">
                          {item.width}×{item.height}px · {formatBytes(item.originalSize)} →{' '}
                          {formatBytes(item.outputSize)}
                        </p>
                        <div className="mt-1.5 flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#15803d] dark:text-[#86efac] bg-[#dcfce7] dark:bg-[#16a34a]/20 border border-[#bbf7d0] dark:border-[#16a34a]/35 px-2.5 py-0.5 rounded-full">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            {item.beforeTagsCount > 0
                              ? t('strippedTags', 'Stripped {before} metadata tags → {after} remaining')
                                  .replace('{before}', String(item.beforeTagsCount))
                                  .replace('{after}', String(item.afterTagsCount))
                              : t('verifiedClean', 'Verified clean (0 EXIF/GPS tags)')}
                          </span>
                          <span className="text-[11px] font-medium text-[var(--ink-3)]">
                            {item.methodUsed === 'lossless-strip'
                              ? t('losslessBinaryStrip', 'Lossless binary strip')
                              : t('cleanCanvasExport', 'Clean Canvas export')}
                          </span>
                        </div>
                      </>
                    )}
                    {item.status === 'processing' && (
                      <span className="text-xs text-[#7c3aed] dark:text-[#a78bfa] font-medium animate-pulse">
                        {t('scrubbing', 'Scrubbing EXIF & GPS headers...')}
                      </span>
                    )}
                    {item.status === 'error' && (
                      <span className="inline-flex items-center gap-1 text-xs text-[#dc2626] dark:text-[#f87171] font-medium mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {item.errorMessage}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                  {item.status === 'done' && item.blob && (
                    <button
                      type="button"
                      onClick={() => triggerDownload(item.blob!, item.outputFilename)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-[11px] shadow-xs cursor-pointer transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>{t('downloadClean', 'Download Clean')}</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => handleRemove(item.id)}
                    className="p-2 text-[var(--ink-3)] hover:text-[#dc2626] hover:bg-[#fee2e2] dark:hover:bg-[#ef4444]/15 dark:hover:text-[#fca5a5] rounded-lg cursor-pointer transition-colors"
                    aria-label={t('removeItem', 'Remove {name}').replace('{name}', item.name)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};
