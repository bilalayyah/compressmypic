import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Download, Trash2, AlertTriangle } from 'lucide-react';
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
  getSimplifiedAspectRatio,
  loadExtendedImageInfo,
} from '../utils/imageProcessing';
import { formatBytes } from '../utils/formatters';
import { triggerDownload } from '../utils/zip';

interface DimensionRow {
  id: string;
  name: string;
  previewUrl: string;
  width: number;
  height: number;
  size: number;
  format: string;
  hasAlpha: boolean;
  orientation: 'Landscape' | 'Portrait' | 'Square';
  aspectExact: string;
  aspectDecimal: string;
  aspectCommon: string | null;
  megapixels: string;
  print300Dpi: string;
  print72Dpi: string;
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

interface DimensionsCheckerPageProps {
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

export const DimensionsCheckerPage: React.FC<DimensionsCheckerPageProps> = ({
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
  const activeTool = tool ?? TOOL_BY_SLUG['/image-dimensions-checker'];
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

  const [rows, setRows] = useState<DimensionRow[]>([]);
  const rowsRef = useRef<DimensionRow[]>([]);
  rowsRef.current = rows;

  const [minWidth, setMinWidth] = useState<string>('');
  const [minHeight, setMinHeight] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      rowsRef.current.forEach((r) => URL.revokeObjectURL(r.previewUrl));
    };
  }, []);

  const handleFilesSelected = async (files: File[]) => {
    setIsLoading(true);
    const nextRows: DimensionRow[] = [];

    for (const file of files) {
      try {
        const info = await loadExtendedImageInfo(file);
        const ratio = getSimplifiedAspectRatio(info.width, info.height);
        const orientation =
          info.width > info.height
            ? 'Landscape'
            : info.height > info.width
            ? 'Portrait'
            : 'Square';
        const wIn300 = (info.width / 300).toFixed(1);
        const hIn300 = (info.height / 300).toFixed(1);
        const wIn72 = (info.width / 72).toFixed(1);
        const hIn72 = (info.height / 72).toFixed(1);

        nextRows.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
          name: file.name,
          previewUrl: info.previewUrl,
          width: info.width,
          height: info.height,
          size: file.size,
          format: info.detectedType.replace('image/', '').toUpperCase(),
          hasAlpha: info.hasAlpha,
          orientation,
          aspectExact: ratio.exact,
          aspectDecimal: ratio.decimal,
          aspectCommon: ratio.commonMatch,
          megapixels: ((info.width * info.height) / 1_000_000).toFixed(2),
          print300Dpi: `${wIn300}" × ${hIn300}"`,
          print72Dpi: `${wIn72}" × ${hIn72}"`,
        });
      } catch {
        // skip unreadable files silently or let UploadZone report
      }
    }

    setRows((prev) => [...prev, ...nextRows]);
    setIsLoading(false);
  };

  const handleExportCsv = () => {
    const header = [
      'Filename',
      'Width (px)',
      'Height (px)',
      'Orientation',
      'Aspect Ratio',
      'Megapixels',
      'File Size (Bytes)',
      'Format',
      'Transparency',
      'Print Size @300DPI',
    ];
    const lines = rows.map((r) => [
      `"${r.name.replace(/"/g, '""')}"`,
      r.width,
      r.height,
      r.orientation,
      r.aspectCommon || r.aspectExact,
      r.megapixels,
      r.size,
      r.format,
      r.hasAlpha ? t('csvYes', 'Yes') : t('csvNo', 'No'),
      `"${r.print300Dpi}"`,
    ]);
    const csv = [header.join(','), ...lines.map((l) => l.join(','))].join('\n');
    triggerDownload(new Blob([csv], { type: 'text/csv' }), 'image-dimensions-report.csv');
  };

  const handleExportJson = () => {
    const clean = rows.map(({ previewUrl: _p, id: _i, ...rest }) => rest);
    triggerDownload(
      new Blob([JSON.stringify(clean, null, 2)], { type: 'application/json' }),
      'image-dimensions-report.json'
    );
  };

  const handleClear = () => {
    rows.forEach((r) => URL.revokeObjectURL(r.previewUrl));
    setRows([]);
  };

  const minWNum = parseInt(minWidth, 10) || 0;
  const minHNum = parseInt(minHeight, 10) || 0;
  const hasRule = minWNum > 0 || minHNum > 0;

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
          disabled={isLoading}
          accept={EXTENDED_IMAGE_ACCEPT}
          allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
          allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
          supportedFormatsLabel="JPG, PNG, WebP, HEIC, SVG, BMP, GIF, AVIF"
          strings={lang === 'zh' ? zhStrings?.uploadZone : lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
          title={t('uploadTitle', 'Drop images to inspect exact dimensions & ratios')}
        />

        {rows.length > 0 && (
          <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 shadow-[var(--shadow)] space-y-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-wrap items-end gap-3">
                <div>
                  <label className="text-xs font-semibold text-[var(--ink-2)] block mb-1">
                    {t('minWidthCheck', 'Min Width Check (px)')}
                  </label>
                  <input
                    type="number"
                    min={0}
                    placeholder={t('placeholderMinWidth', 'e.g. 1200')}
                    value={minWidth}
                    onChange={(e) => setMinWidth(e.target.value)}
                    className="w-32 px-3 py-2 text-xs font-mono bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[var(--ink-2)] block mb-1">
                    {t('minHeightCheck', 'Min Height Check (px)')}
                  </label>
                  <input
                    type="number"
                    min={0}
                    placeholder={t('placeholderMinHeight', 'e.g. 630')}
                    value={minHeight}
                    onChange={(e) => setMinHeight(e.target.value)}
                    className="w-32 px-3 py-2 text-xs font-mono bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleExportCsv}
                  className="inline-flex items-center gap-1.5 px-4 py-2 btn-purple-grad text-xs font-semibold shadow-xs cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t('exportCsv', 'Export CSV')}</span>
                </button>
                <button
                  type="button"
                  onClick={handleExportJson}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--surface-2)] hover:border-[#c4b5fd] border border-[var(--line)] text-[var(--ink)] text-xs font-semibold rounded-[11px] cursor-pointer transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t('exportJson', 'Export JSON')}</span>
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#fecaca] hover:bg-[#fee2e2] hover:text-[#dc2626] dark:hover:bg-[#ef4444]/15 dark:hover:text-[#fca5a5] text-[var(--ink-2)] text-xs font-semibold rounded-[11px] cursor-pointer transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{t('clear', 'Clear')}</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto border border-[var(--line)] rounded-xl">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[var(--surface-2)] border-b border-[var(--line)] text-[11px] uppercase tracking-wider text-[var(--ink-3)]">
                    <th className="py-3 px-4">{t('headerImage', 'Image')}</th>
                    <th className="py-3 px-4">{t('headerDimensions', 'Dimensions')}</th>
                    <th className="py-3 px-4">{t('headerAspectRatio', 'Aspect Ratio')}</th>
                    <th className="py-3 px-4">{t('headerOrientation', 'Orientation')}</th>
                    <th className="py-3 px-4">{t('headerSizeFormat', 'Size / Format')}</th>
                    <th className="py-3 px-4">{t('headerPrint300Dpi', 'Print @300 DPI')}</th>
                    {hasRule && <th className="py-3 px-4">{t('headerSpecCheck', 'Spec Check')}</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  {rows.map((r) => {
                    const passes =
                      (!minWNum || r.width >= minWNum) && (!minHNum || r.height >= minHNum);
                    return (
                      <tr key={r.id} className="hover:bg-[var(--surface-2)]/60">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3 min-w-[160px]">
                            <img
                              src={r.previewUrl}
                              alt={r.name}
                              className="w-10 h-10 rounded-[8px] object-cover border border-[var(--line)] shrink-0"
                            />
                            <span className="font-semibold text-[var(--ink-navy)] truncate max-w-[180px]">
                              {r.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-[var(--ink-navy)] whitespace-nowrap">
                          {r.width} × {r.height} px
                          <span className="block text-[11px] font-normal text-[var(--ink-3)]">
                            {r.megapixels} MP
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono text-[var(--ink-2)] whitespace-nowrap">
                          {r.aspectCommon || r.aspectExact}
                          <span className="block text-[11px] text-[var(--ink-3)]">
                            ({r.aspectDecimal}:1)
                          </span>
                        </td>
                        <td className="py-3 px-4 text-[var(--ink-2)] whitespace-nowrap">
                          {r.orientation === 'Landscape'
                            ? t('orientationLandscape', 'Landscape')
                            : r.orientation === 'Portrait'
                              ? t('orientationPortrait', 'Portrait')
                              : t('orientationSquare', 'Square')}
                        </td>
                        <td className="py-3 px-4 text-[var(--ink-2)] whitespace-nowrap font-mono">
                          {formatBytes(r.size)}
                          <span className="block text-[11px] text-[var(--ink-3)]">
                            {r.format}
                            {r.hasAlpha ? t('alphaTag', ' · Alpha') : ''}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono text-xs text-[var(--ink-3)] whitespace-nowrap">
                          {r.print300Dpi}
                        </td>
                        {hasRule && (
                          <td className="py-3 px-4 whitespace-nowrap">
                            {passes ? (
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#15803d] dark:text-[#86efac] bg-[#dcfce7] dark:bg-[#16a34a]/20 border border-[#bbf7d0] dark:border-[#16a34a]/35 px-2.5 py-0.5 rounded-full">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                {t('specPass', 'Pass')}
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#b91c1c] dark:text-[#fca5a5] pastel-card-14 border px-2.5 py-0.5 rounded-full">
                                <AlertTriangle className="w-3.5 h-3.5" />
                                {t('specBelowMin', 'Below Min')}
                              </span>
                            )}
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};
