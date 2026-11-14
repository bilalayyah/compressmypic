import React, { useState, useEffect, useRef } from 'react';
import {
  Printer,
  Download,
  FileArchive,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
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
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
} from '../utils/imageProcessing';
import { DpiChangeResult, changeImageDpi } from '../utils/dpi';
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

interface DpiChangerPageProps {
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

interface DpiItem {
  id: string;
  file: File;
  status: 'processing' | 'done' | 'error';
  result?: DpiChangeResult;
  error?: string;
}

const DPI_PRESETS = [
  { dpi: 72, label: '72 DPI (Screen)' },
  { dpi: 96, label: '96 DPI (Windows)' },
  { dpi: 150, label: '150 DPI (Draft Print)' },
  { dpi: 300, label: '300 DPI (High Print)' },
  { dpi: 600, label: '600 DPI (Archival)' },
];

export const DpiChangerPage: React.FC<DpiChangerPageProps> = ({
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
  const activeTool = tool ?? TOOL_BY_SLUG['/image-dpi-changer'];
  const t = (key: string, fallback: string) => {
    const table =
      lang === 'zh' ? zhStrings?.toolUi : lang === 'ja' ? jaStrings?.toolUi : lang === 'ko' ? koStrings?.toolUi : lang === 'id' ? idStrings?.toolUi : lang === 'ru' ? ruStrings?.toolUi : lang === 'de' ? deStrings?.toolUi : lang === 'it' ? itStrings?.toolUi : lang === 'pt' ? ptStrings?.toolUi : lang === 'fr' ? frStrings?.toolUi : lang === 'es' ? esStrings?.toolUi : undefined;
    return table ? (table[key] as string | undefined) ?? fallback : fallback;
  };

  const DPI_PRESET_LABEL_KEYS: Record<number, string> = {
    72: 'preset72Screen',
    96: 'preset96Windows',
    150: 'preset150DraftPrint',
    300: 'preset300HighPrint',
    600: 'preset600Archival',
  };

  const [items, setItems] = useState<DpiItem[]>([]);
  const itemsRef = useRef<DpiItem[]>([]);
  itemsRef.current = items;

  const [targetDpi, setTargetDpi] = useState<number>(300);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      itemsRef.current.forEach((item) => {
        if (item.result?.previewUrl) URL.revokeObjectURL(item.result.previewUrl);
      });
    };
  }, []);

  const processSingle = async (item: DpiItem, dpi: number): Promise<DpiItem> => {
    try {
      const safeDpi = Math.max(1, Math.min(2400, Math.round(dpi || 300)));
      const res = await changeImageDpi(item.file, safeDpi);
      if (item.result?.previewUrl) URL.revokeObjectURL(item.result.previewUrl);
      return { ...item, status: 'done', result: res, error: undefined };
    } catch (err) {
      return {
        ...item,
        status: 'error',
        error: err instanceof Error ? err.message : t('errorUpdateDpiFailed', 'Failed to update DPI.'),
      };
    }
  };

  const handleFilesSelected = async (files: File[]) => {
    setIsProcessing(true);
    const newItems: DpiItem[] = files.map((file) => ({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      file,
      status: 'processing',
    }));
    setItems((prev) => [...prev, ...newItems]);

    const processed: DpiItem[] = [];
    for (const item of newItems) {
      processed.push(await processSingle(item, targetDpi));
    }

    setItems((prev) =>
      prev.map((existing) => processed.find((p) => p.id === existing.id) || existing)
    );
    setIsProcessing(false);
  };

  const reprocessAll = async (nextDpi: number) => {
    if (itemsRef.current.length === 0) return;
    setIsProcessing(true);
    setItems((prev) => prev.map((i) => ({ ...i, status: 'processing' })));
    const out: DpiItem[] = [];
    for (const item of itemsRef.current) {
      out.push(await processSingle(item, nextDpi));
    }
    setItems(out);
    setIsProcessing(false);
  };

  const handleRemove = (id: string) => {
    setItems((prev) => {
      const t = prev.find((i) => i.id === id);
      if (t?.result?.previewUrl) URL.revokeObjectURL(t.result.previewUrl);
      return prev.filter((i) => i.id !== id);
    });
  };

  const handleClear = () => {
    items.forEach((i) => {
      if (i.result?.previewUrl) URL.revokeObjectURL(i.result.previewUrl);
    });
    setItems([]);
  };

  const doneItems = items.filter((i) => i.status === 'done' && i.result);

  const handleDownloadZip = async () => {
    if (doneItems.length === 0) return;
    setIsZipping(true);
    try {
      const zip = await createFilesZipArchive(
        doneItems.map((i) => ({
          filename: i.result!.outputFilename,
          blob: i.result!.blob,
        })),
        `images_${targetDpi}dpi`
      );
      triggerDownload(zip, `images_${targetDpi}dpi_compressmypic.zip`);
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
          supportedFormatsLabel="JPG, PNG (lossless) + WebP, HEIC, BMP"
          title={t('uploadTitle', 'Drop JPG or PNG images to update DPI metadata')}
          strings={lang === 'zh' ? zhStrings?.uploadZone : lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
        />

        {/* Controls */}
        <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 sm:p-6 shadow-[var(--shadow)] space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)] block">
                {t('targetDpiPresets', 'Target DPI Presets')}
              </span>
              <div className="flex flex-wrap gap-2">
                {DPI_PRESETS.map((p) => (
                  <button
                    key={p.dpi}
                    type="button"
                    disabled={isProcessing}
                    onClick={() => {
                      setTargetDpi(p.dpi);
                      reprocessAll(p.dpi);
                    }}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full border cursor-pointer transition-colors ${
                      targetDpi === p.dpi
                        ? 'bg-[#7c3aed] text-white border-[#7c3aed]'
                        : 'bg-[var(--surface-2)] text-[var(--ink-2)] border-[var(--line)] hover:border-[#7c3aed] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe]'
                    }`}
                  >
                    {t(DPI_PRESET_LABEL_KEYS[p.dpi] ?? 'preset300HighPrint', p.label)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-end gap-2.5">
              <div>
                <label className="text-xs font-semibold text-[var(--ink-2)] block mb-1">
                  {t('customDpi', 'Custom DPI')}
                </label>
                <input
                  type="number"
                  min={1}
                  max={2400}
                  value={targetDpi}
                  onChange={(e) => setTargetDpi(Math.max(1, Math.min(2400, parseInt(e.target.value, 10) || 1)))}
                  className="w-28 px-3 py-2 text-sm font-mono bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                />
              </div>
              {items.length > 0 && (
                <>
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => reprocessAll(targetDpi)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 btn-purple-grad text-xs font-semibold shadow-xs cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>{t('applyDpi', 'Apply {dpi} DPI').replace('{dpi}', String(targetDpi))}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#fecaca] hover:bg-[#fee2e2] hover:text-[#dc2626] dark:hover:bg-[#ef4444]/15 dark:hover:text-[#fca5a5] text-[var(--ink-2)] text-xs font-semibold rounded-[11px] cursor-pointer transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>{t('clear', 'Clear')}</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {doneItems.length > 1 && (
          <div className="panel-pastel-blue border rounded-2xl p-5 shadow-[var(--shadow)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6d28d9] dark:text-[#c4b5fd]">
                {t('batchReady', 'Batch Ready')}
              </span>
              <p className="text-sm font-semibold text-[var(--ink-navy)] mt-0.5">
                {t('filesUpdatedToDpi', '{count} files updated to {dpi} DPI').replace('{count}', String(doneItems.length)).replace('{dpi}', String(targetDpi))}
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

        {items.length > 0 && (
          <div className="space-y-3">
            {items.map((item) => {
              const res = item.result;
              const methodBadge =
                res?.method === 'lossless-jpeg'
                  ? t('methodLosslessJpeg', 'Lossless JPEG Header Update')
                  : res?.method === 'lossless-png'
                  ? t('methodLosslessPng', 'Lossless PNG pHYs Update')
                  : t('methodConvertedPng', 'Converted to PNG with pHYs DPI');

              return (
                <div
                  key={item.id}
                  className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-4 sm:p-5 shadow-[var(--shadow)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 min-w-0 w-full md:w-auto">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[var(--surface-2)] border border-[var(--line)] shrink-0 flex items-center justify-center">
                      {res?.previewUrl ? (
                        <img src={res.previewUrl} alt={item.file.name} className="max-w-full max-h-full object-contain" />
                      ) : (
                        <Loader2 className="w-5 h-5 text-[#7c3aed] animate-spin" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1 space-y-1">
                      <h3 className="font-sans text-sm font-bold text-[var(--ink-navy)] truncate">{item.file.name}</h3>
                      {res && (
                        <>
                          <p className="text-xs text-[var(--ink-3)] font-mono">
                            {res.width}×{res.height}px · {formatBytes(res.size)}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 text-xs">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[var(--surface-2)] border border-[var(--line)] text-[var(--ink-2)] font-mono">
                              {res.beforeDpi.dpiX ? t('beforeDpi', 'Before: {dpi} DPI').replace('{dpi}', String(res.beforeDpi.dpiX)) : t('beforeNotSet', 'Before: Not set')}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-[var(--ink-3)]" />
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#dcfce7] dark:bg-[#16a34a]/20 border border-[#bbf7d0] dark:border-[#16a34a]/35 text-[#15803d] dark:text-[#86efac] font-mono font-semibold">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              {t('verifiedDpi', 'Verified: {dpi} DPI').replace('{dpi}', String(res.afterDpi.dpiX ?? targetDpi))}
                            </span>
                            <span className="text-[11px] font-medium text-[#6d28d9] dark:text-[#ddd6fe] bg-[#ede9fe] dark:bg-[#7c3aed]/25 px-2.5 py-0.5 rounded-full">
                              {methodBadge}
                            </span>
                          </div>
                        </>
                      )}
                      {item.status === 'error' && (
                        <span className="inline-flex items-center gap-1 text-xs text-[#dc2626] dark:text-[#f87171] font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {item.error}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                    {res && (
                      <button
                        type="button"
                        onClick={() => triggerDownload(res.blob, res.outputFilename)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-[11px] shadow-xs cursor-pointer transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>{t('download', 'Download')}</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleRemove(item.id)}
                      className="p-2 text-[var(--ink-3)] hover:text-[#dc2626] hover:bg-[#fee2e2] dark:hover:bg-[#ef4444]/15 dark:hover:text-[#fca5a5] rounded-lg cursor-pointer transition-colors"
                      aria-label={t('removeImage', 'Remove {name}').replace('{name}', item.file.name)}
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
    </ToolPageLayout>
  );
};
