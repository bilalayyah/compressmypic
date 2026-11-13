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
}) => {
  const t = (key: string, fallback: string) => {
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
    lang === 'pt' || lang === 'fr' || lang === 'de' || lang === 'it'
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
      ui={lang === 'de' ? deStrings?.layoutUi : lang === 'it' ? itStrings?.layoutUi : lang === 'pt' ? ptStrings?.layoutUi : lang === 'fr' ? frStrings?.layoutUi : esStrings?.layoutUi}
      canonicalPath={lang === 'de' ? toGermanPath(activeTool.slug) : lang === 'it' ? toItalianPath(activeTool.slug) : lang === 'es' ? toSpanishPath(activeTool.slug) : lang === 'pt' ? toPortuguesePath(activeTool.slug) : lang === 'fr' ? toFrenchPath(activeTool.slug) : undefined}
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
          strings={lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
        />

        {errorMsg && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
            {errorMsg}
          </div>
        )}

        {report && (
          <div className="space-y-6">
            {/* Summary Banner */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row gap-5 items-start md:items-center justify-between">
              <div className="flex items-center gap-4 min-w-0">
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt={report.filename}
                    className="w-20 h-20 rounded-xl object-cover border border-slate-200 shrink-0"
                  />
                )}
                <div className="min-w-0">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                    {report.filename}
                  </h2>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    {report.containerFormat} · {report.width}×{report.height}px ·{' '}
                    {report.formattedSize}
                  </p>
                  <div className="mt-2">
                    {report.hasSensitiveMetadata ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        {t('embeddedMetadataFound', 'Embedded metadata found ({count} tag types)').replace('{count}', String(report.sensitiveSummary.length))}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
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
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    <ShieldOff className="w-4 h-4" />
                    <span>{t('stripMetadata', 'Strip Metadata')}</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleCopyJson}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? t('copiedJson', 'Copied JSON') : t('copyJson', 'Copy JSON')}</span>
                </button>
                <button
                  type="button"
                  onClick={handleDownloadJson}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{t('exportJson', 'Export JSON')}</span>
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl cursor-pointer"
                  title={t('clear', 'Clear')}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* GPS Highlight if present */}
            {report.gpsCoords && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-sm text-amber-900">
                  <p className="font-bold">{t('gpsDetected', 'GPS Location Coordinates Detected')}</p>
                  <p className="text-xs font-mono mt-1">
                    {t('latitude', 'Latitude:')} {report.gpsCoords.latitude} · {t('longitude', 'Longitude:')} {report.gpsCoords.longitude}
                  </p>
                  <p className="text-xs text-amber-700 mt-1">
                    {gpsWarningParts[0]}
                    <button
                      type="button"
                      onClick={() => onNavigate('/remove-image-metadata')}
                      className="underline font-semibold cursor-pointer"
                    >
                      {gpsWarningLinkText}
                    </button>
                    {gpsWarningParts[1]}
                  </p>
                </div>
              </div>
            )}

            {/* Metadata Table */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">
                  {t('extractedMetadata', 'Extracted Metadata ({count} properties)').replace('{count}', String(report.entries.length))}
                </h3>
              </div>
              <div className="divide-y divide-slate-100">
                {report.entries.map((entry, idx) => (
                  <div
                    key={`${entry.group}-${entry.key}-${idx}`}
                    className="px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {entry.group}
                      </span>
                      <span className="font-semibold text-slate-800">{entry.key}</span>
                      {entry.sensitive && (
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                          {t('privacyTag', 'Privacy Tag')}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs sm:text-sm text-slate-700 break-all sm:text-right">
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
