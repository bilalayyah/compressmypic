import React, { useState, useEffect } from 'react';
import {
  AlertTriangle,
  Check,
  Copy,
  Download,
  MapPin,
  ShieldCheck,
  ShieldOff,
  Trash2,
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
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  loadExtendedImageInfo,
} from '../utils/imageProcessing';
import { ImageMetadataReport, extractImageMetadata } from '../utils/metadata';
import { triggerDownload } from '../utils/zip';

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

interface MetadataViewerPageProps {
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

export const MetadataViewerPage: React.FC<MetadataViewerPageProps> = ({
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
  // GPS warning: the translated sentence embeds the inline link text, so split
  // the sentence on the link text and render the link button between the parts.
  // ES has no gpsWarningLink key; 'Eliminar metadatos' is the exact substring
  // embedded in the ES gpsWarning table string (src/locales/es/ui.ts).
  const gpsWarningLinkText =
    lang === 'pt' || lang === 'fr' || lang === 'de' || lang === 'it' || lang === 'id' || lang === 'ru' || lang === 'ja' || lang === 'ko' || lang === 'zh'
      ? t('gpsWarningLink', 'Remove Image Metadata')
      : lang === 'es'
        ? 'Eliminar metadatos'
        : 'Remove Image Metadata';
  const gpsWarningParts = t(
    'gpsWarning',
    'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.'
  ).split(gpsWarningLinkText);
  const activeTool = tool ?? TOOL_BY_SLUG['/image-metadata-viewer'];
  const [report, setReport] = useState<ImageMetadataReport | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isInspecting, setIsInspecting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;

    setIsInspecting(true);
    setErrorMsg(null);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);

    try {
      const [meta, info] = await Promise.all([
        extractImageMetadata(file),
        loadExtendedImageInfo(file),
      ]);
      setReport(meta);
      setPreviewUrl(info.previewUrl);
    } catch (err) {
      setReport(null);
      setErrorMsg(err instanceof Error ? err.message : t('unableToParse', 'Unable to parse image metadata.'));
    } finally {
      setIsInspecting(false);
    }
  };

  const handleCopyJson = async () => {
    if (!report) return;
    const json = JSON.stringify(report, null, 2);
    await navigator.clipboard.writeText(json);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJson = () => {
    if (!report) return;
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    triggerDownload(blob, `${report.filename}_metadata.json`);
  };

  const handleClear = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setReport(null);
    setErrorMsg(null);
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
          multiple={false}
          disabled={isInspecting}
          accept={EXTENDED_IMAGE_ACCEPT}
          allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
          allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
          supportedFormatsLabel="JPG, PNG, WebP, HEIC, GIF, BMP, SVG"
          title={t('uploadTitle', 'Drop an image to inspect EXIF & metadata')}
          strings={lang === 'zh' ? zhStrings?.uploadZone : lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
        />

        {errorMsg && (
          <div className="p-4 pastel-card-14 border rounded-2xl text-sm text-[#b91c1c] dark:text-[#fca5a5]">
            {errorMsg}
          </div>
        )}

        {report && (
          <div className="space-y-6">
            {/* Summary Banner */}
            <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 sm:p-6 shadow-[var(--shadow)] flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
              <div className="flex items-center gap-4 min-w-0">
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt={report.filename}
                    className="w-20 h-20 rounded-xl object-cover border border-[var(--line)] shrink-0"
                  />
                )}
                <div className="min-w-0">
                  <h2 className="font-sans text-base sm:text-lg font-bold text-[var(--ink-navy)] truncate">
                    {report.filename}
                  </h2>
                  <p className="text-xs text-[var(--ink-3)] font-mono mt-0.5">
                    {report.containerFormat} · {report.width}×{report.height}px ·{' '}
                    {report.formattedSize}
                  </p>
                  <div className="mt-2">
                    {report.hasSensitiveMetadata ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#ffedd5] dark:bg-[#ea580c]/20 text-[#c2410c] dark:text-[#fdba74] border border-[#fed7aa] dark:border-[#ea580c]/35">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        {t('embeddedMetadataFound', 'Embedded metadata found ({count} tag types)').replace('{count}', String(report.sensitiveSummary.length))}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#dcfce7] dark:bg-[#16a34a]/20 text-[#15803d] dark:text-[#86efac] border border-[#bbf7d0] dark:border-[#16a34a]/35">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {t('noTagsDetected', 'No EXIF, GPS, or hidden camera tags detected')}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {report.hasSensitiveMetadata && (
                  <button
                    type="button"
                    onClick={() => onNavigate('/remove-image-metadata')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#ede9fe] dark:bg-[#7c3aed]/20 hover:bg-[#ddd6fe] dark:hover:bg-[#7c3aed]/30 text-[#6d28d9] dark:text-[#ddd6fe] border border-[#c4b5fd] dark:border-[#7c3aed]/40 text-xs font-semibold rounded-[11px] cursor-pointer transition-colors"
                  >
                    <ShieldOff className="w-4 h-4 text-[#7c3aed] dark:text-[#c4b5fd]" />
                    <span>{t('stripMetadata', 'Strip Metadata')}</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleCopyJson}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--surface-2)] hover:bg-[#ede9fe] dark:hover:bg-[#7c3aed]/20 hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] border border-[var(--line)] hover:border-[#7c3aed] text-[var(--ink-navy)] text-xs font-semibold rounded-[11px] cursor-pointer transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? t('copiedJson', 'Copied JSON') : t('copyJson', 'Copy JSON')}</span>
                </button>
                <button
                  type="button"
                  onClick={handleDownloadJson}
                  className="inline-flex items-center gap-1.5 px-4 py-2 btn-purple-grad text-xs font-semibold cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{t('exportJson', 'Export JSON')}</span>
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="p-2 text-[var(--ink-3)] hover:text-[#dc2626] hover:bg-[#fee2e2] dark:hover:bg-[#ef4444]/15 dark:hover:text-[#fca5a5] rounded-lg cursor-pointer transition-colors"
                  title={t('clear', 'Clear')}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* GPS Highlight if present */}
            {report.gpsCoords && (
              <div className="p-4 pastel-card-10 border rounded-2xl flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c2410c] dark:text-[#fdba74] shrink-0 mt-0.5" />
                <div className="text-sm text-[var(--ink-navy)]">
                  <p className="font-bold text-[#c2410c] dark:text-[#fdba74]">{t('gpsDetected', 'GPS Location Coordinates Detected')}</p>
                  <p className="text-xs font-mono mt-1">
                    {t('latitude', 'Latitude:')} {report.gpsCoords.latitude} · {t('longitude', 'Longitude:')} {report.gpsCoords.longitude}
                  </p>
                  <p className="text-xs text-[var(--ink-2)] mt-1">
                    {gpsWarningParts[0]}
                    <button
                      type="button"
                      onClick={() => onNavigate('/remove-image-metadata')}
                      className="underline font-semibold text-[#6d28d9] dark:text-[#c4b5fd] cursor-pointer"
                    >
                      {gpsWarningLinkText}
                    </button>
                    {gpsWarningParts[1]}
                  </p>
                </div>
              </div>
            )}

            {/* Metadata Table */}
            <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden shadow-[var(--shadow)]">
              <div className="px-5 py-3.5 bg-[var(--surface-2)] border-b border-[var(--line)] flex items-center justify-between">
                <h3 className="font-sans text-base font-bold text-[var(--ink-navy)]">
                  {t('extractedMetadata', 'Extracted Metadata ({count} properties)').replace('{count}', String(report.entries.length))}
                </h3>
              </div>
              <div className="divide-y divide-[var(--line)]">
                {report.entries.map((entry, idx) => (
                  <div
                    key={`${entry.group}-${entry.key}-${idx}`}
                    className="px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded-full bg-[var(--surface-2)] border border-[var(--line)] text-[var(--ink-2)]">
                        {entry.group}
                      </span>
                      <span className="font-semibold text-[var(--ink-navy)]">{entry.key}</span>
                      {entry.sensitive && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#ffedd5] dark:bg-[#ea580c]/20 text-[#c2410c] dark:text-[#fdba74] border border-[#fed7aa] dark:border-[#ea580c]/35">
                          {t('privacyTag', 'Privacy Tag')}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs sm:text-sm text-[var(--ink-2)] break-all sm:text-right">
                      {entry.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};
