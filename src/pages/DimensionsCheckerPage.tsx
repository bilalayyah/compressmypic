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
}) => {
  const activeTool = tool ?? TOOL_BY_SLUG['/image-dimensions-checker'];
  const t = (key: string, fallback: string) => {
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
      ui={lang === 'id' ? idStrings?.layoutUi : lang === 'ru' ? ruStrings?.layoutUi : lang === 'de' ? deStrings?.layoutUi : lang === 'it' ? itStrings?.layoutUi : lang === 'pt' ? ptStrings?.layoutUi : lang === 'fr' ? frStrings?.layoutUi : esStrings?.layoutUi}
      canonicalPath={lang === 'id' ? toIndonesianPath(activeTool.slug) : lang === 'ru' ? toRussianPath(activeTool.slug) : lang === 'de' ? toGermanPath(activeTool.slug) : lang === 'it' ? toItalianPath(activeTool.slug) : lang === 'es' ? toSpanishPath(activeTool.slug) : lang === 'pt' ? toPortuguesePath(activeTool.slug) : lang === 'fr' ? toFrenchPath(activeTool.slug) : undefined}
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
          strings={lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
          title={t('uploadTitle', 'Drop images to inspect exact dimensions & ratios')}
        />

        {rows.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-wrap items-end gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">
                    {t('minWidthCheck', 'Min Width Check (px)')}
                  </label>
                  <input
                    type="number"
                    min={0}
                    placeholder={t('placeholderMinWidth', 'e.g. 1200')}
                    value={minWidth}
                    onChange={(e) => setMinWidth(e.target.value)}
                    className="w-32 px-3 py-2 text-xs font-mono border border-slate-300 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">
                    {t('minHeightCheck', 'Min Height Check (px)')}
                  </label>
                  <input
                    type="number"
                    min={0}
                    placeholder={t('placeholderMinHeight', 'e.g. 630')}
                    value={minHeight}
                    onChange={(e) => setMinHeight(e.target.value)}
                    className="w-32 px-3 py-2 text-xs font-mono border border-slate-300 rounded-xl"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleExportCsv}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t('exportCsv', 'Export CSV')}</span>
                </button>
                <button
                  type="button"
                  onClick={handleExportJson}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t('exportJson', 'Export JSON')}</span>
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 text-xs font-semibold rounded-xl cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{t('clear', 'Clear')}</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] uppercase tracking-wider text-slate-500">
                    <th className="py-3 px-4">{t('headerImage', 'Image')}</th>
                    <th className="py-3 px-4">{t('headerDimensions', 'Dimensions')}</th>
                    <th className="py-3 px-4">{t('headerAspectRatio', 'Aspect Ratio')}</th>
                    <th className="py-3 px-4">{t('headerOrientation', 'Orientation')}</th>
                    <th className="py-3 px-4">{t('headerSizeFormat', 'Size / Format')}</th>
                    <th className="py-3 px-4">{t('headerPrint300Dpi', 'Print @300 DPI')}</th>
                    {hasRule && <th className="py-3 px-4">{t('headerSpecCheck', 'Spec Check')}</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rows.map((r) => {
                    const passes =
                      (!minWNum || r.width >= minWNum) && (!minHNum || r.height >= minHNum);
                    return (
                      <tr key={r.id} className="hover:bg-slate-50/70">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3 min-w-[160px]">
                            <img
                              src={r.previewUrl}
                              alt={r.name}
                              className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
                            />
                            <span className="font-semibold text-slate-900 truncate max-w-[180px]">
                              {r.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-slate-900 whitespace-nowrap">
                          {r.width} × {r.height} px
                          <span className="block text-[11px] font-normal text-slate-500">
                            {r.megapixels} MP
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono text-slate-700 whitespace-nowrap">
                          {r.aspectCommon || r.aspectExact}
                          <span className="block text-[11px] text-slate-500">
                            ({r.aspectDecimal}:1)
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-700 whitespace-nowrap">
                          {r.orientation === 'Landscape'
                            ? t('orientationLandscape', 'Landscape')
                            : r.orientation === 'Portrait'
                              ? t('orientationPortrait', 'Portrait')
                              : t('orientationSquare', 'Square')}
                        </td>
                        <td className="py-3 px-4 text-slate-700 whitespace-nowrap font-mono">
                          {formatBytes(r.size)}
                          <span className="block text-[11px] text-slate-500">
                            {r.format}
                            {r.hasAlpha ? t('alphaTag', ' · Alpha') : ''}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono text-xs text-slate-600 whitespace-nowrap">
                          {r.print300Dpi}
                        </td>
                        {hasRule && (
                          <td className="py-3 px-4 whitespace-nowrap">
                            {passes ? (
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                {t('specPass', 'Pass')}
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
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
