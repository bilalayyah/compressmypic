import React, { useState, useEffect, useRef } from 'react';
import { Code2, Copy, Check, Download, Trash2, AlertCircle } from 'lucide-react';
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
import { formatBytes, getBaseFilename, sanitizeFilename } from '../utils/formatters';
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

interface ImageToBase64PageProps {
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

type OutputFormatTab = 'dataUrl' | 'raw' | 'html' | 'css';

const BASE64_ACCEPT =
  'image/jpeg,image/png,image/webp,image/gif,image/bmp,image/svg+xml,image/x-icon,image/vnd.microsoft.icon,image/avif,.jpg,.jpeg,.png,.webp,.gif,.bmp,.svg,.ico,.avif';
const BASE64_MIMES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/bmp',
  'image/x-ms-bmp',
  'image/svg+xml',
  'image/x-icon',
  'image/vnd.microsoft.icon',
  'image/avif',
];
const BASE64_REGEX = /\.(jpe?g|png|webp|gif|bmp|svg|ico|avif)$/i;

export const ImageToBase64Page: React.FC<ImageToBase64PageProps> = ({
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
  const activeTool = tool ?? TOOL_BY_SLUG['/image-to-base64'];
  const t = (key: string, fallback: string) => {
    const table =
      lang === 'zh' ? zhStrings?.toolUi : lang === 'ja' ? jaStrings?.toolUi : lang === 'ko' ? koStrings?.toolUi : lang === 'id' ? idStrings?.toolUi : lang === 'ru' ? ruStrings?.toolUi : lang === 'de' ? deStrings?.toolUi : lang === 'it' ? itStrings?.toolUi : lang === 'pt' ? ptStrings?.toolUi : lang === 'fr' ? frStrings?.toolUi : lang === 'es' ? esStrings?.toolUi : undefined;
    return table ? (table[key] as string | undefined) ?? fallback : fallback;
  };

  const [file, setFile] = useState<File | null>(null);
  const [dataUrl, setDataUrl] = useState<string>('');
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);
  const [tab, setTab] = useState<OutputFormatTab>('dataUrl');
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const previewUrlRef = useRef<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  useEffect(() => {
    return () => {
      if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    };
  }, []);

  const handleFilesSelected = (files: File[]) => {
    const f = files[0];
    if (!f) return;
    setError(null);
    setCopied(false);

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (!result) {
        setError(t('errorCouldNotEncode', 'Could not encode file.'));
        return;
      }
      if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
      const url = URL.createObjectURL(f);
      previewUrlRef.current = url;
      setPreviewUrl(url);
      setFile(f);
      setDataUrl(result);

      const img = new Image();
      img.onload = () => setDims({ w: img.naturalWidth, h: img.naturalHeight });
      img.onerror = () => setDims(null);
      img.src = url;
    };
    reader.onerror = () => setError(t('errorFailedToRead', 'Failed to read image file.'));
    reader.readAsDataURL(f);
  };

  const handleClear = () => {
    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    previewUrlRef.current = null;
    setFile(null);
    setDataUrl('');
    setPreviewUrl('');
    setDims(null);
    setError(null);
  };

  const rawBase64 = dataUrl.includes(',') ? dataUrl.split(',')[1] : dataUrl;
  const outputString = (() => {
    if (!dataUrl) return '';
    if (tab === 'raw') return rawBase64;
    if (tab === 'html') {
      const alt = file ? getBaseFilename(file.name) : 'image';
      const dimAttrs = dims && dims.w > 0 ? ` width="${dims.w}" height="${dims.h}"` : '';
      return `<img src="${dataUrl}" alt="${alt}"${dimAttrs} />`;
    }
    if (tab === 'css') {
      return `background-image: url("${dataUrl}");`;
    }
    return dataUrl;
  })();

  const handleCopy = async () => {
    if (!outputString) return;
    try {
      await navigator.clipboard.writeText(outputString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError(t('errorClipboardWriteFailed', 'Clipboard write failed — please select and copy from the text box.'));
    }
  };

  const handleDownloadTxt = () => {
    if (!outputString || !file) return;
    const blob = new Blob([outputString], { type: 'text/plain;charset=utf-8' });
    const base = sanitizeFilename(getBaseFilename(file.name));
    triggerDownload(blob, `${base}_${tab}.txt`);
  };

  const overheadPct =
    file && outputString
      ? Math.round(((outputString.length - file.size) / Math.max(1, file.size)) * 100)
      : 0;

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
        {!file ? (
          <UploadZone
            onFilesSelected={handleFilesSelected}
            maxFileSizeMB={15}
            multiple={false}
            accept={BASE64_ACCEPT}
            allowedMimeTypes={BASE64_MIMES}
            allowedExtensionsRegex={BASE64_REGEX}
            supportedFormatsLabel="JPG, PNG, WebP, SVG, GIF, BMP, ICO"
            title={t('uploadTitle', 'Drop an image to encode as Base64')}
            strings={lang === 'zh' ? zhStrings?.uploadZone : lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
          />
        ) : (
          <div className="space-y-5">
            {/* Summary Card */}
            <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-4 sm:p-5 shadow-[var(--shadow)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-16 h-16 rounded-xl border border-[var(--line)] bg-[var(--surface-2)] overflow-hidden shrink-0 flex items-center justify-center p-1">
                  <img src={previewUrl} alt={file.name} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-sans text-sm font-bold text-[var(--ink-navy)] truncate">{file.name}</h2>
                  <p className="text-xs text-[var(--ink-3)] font-mono mt-0.5">
                    {t('fileLabel', 'File:')} {formatBytes(file.size)}
                    {dims && dims.w > 0 ? ` · ${dims.w}×${dims.h}px` : ''} · {t('outputLabel', 'Output:')}{' '}
                    {outputString.length.toLocaleString()} {t('charsLabel', 'chars')} ({overheadPct >= 0 ? `+${overheadPct}%` : `${overheadPct}%`})
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleClear}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#fecaca] hover:bg-[#fee2e2] hover:text-[#dc2626] dark:hover:bg-[#ef4444]/15 dark:hover:text-[#fca5a5] text-[var(--ink-2)] text-xs font-semibold rounded-[11px] cursor-pointer transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>{t('encodeAnother', 'Encode Another')}</span>
              </button>
            </div>

            {/* Output Panel */}
            <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 sm:p-6 shadow-[var(--shadow)] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="inline-flex flex-wrap p-1 bg-[var(--surface-2)] border border-[var(--line)] rounded-[11px] gap-1">
                  {(
                    [
                      { id: 'dataUrl', label: t('tabDataUrl', 'Data URL') },
                      { id: 'raw', label: t('tabRawBase64', 'Raw Base64') },
                      { id: 'html', label: t('tabHtmlImg', 'HTML <img>') },
                      { id: 'css', label: t('tabCssUrl', 'CSS url()') },
                    ] as { id: OutputFormatTab; label: string }[]
                  ).map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTab(t.id)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-[8px] cursor-pointer transition-all ${
                        tab === t.id ? 'bg-[#7c3aed] text-white shadow-xs' : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-4 py-2 btn-purple-grad text-xs font-semibold shadow-xs cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#86efac]" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? t('copied', 'Copied!') : t('copyOutput', 'Copy Output')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadTxt}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#7c3aed] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] text-[var(--ink)] text-xs font-semibold rounded-[11px] cursor-pointer transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t('saveTxt', 'Save .TXT')}</span>
                  </button>
                </div>
              </div>

              <div className="relative">
                <Code2 className="w-4 h-4 text-[#94a3b8] absolute top-3.5 left-3.5 pointer-events-none" />
                <textarea
                  readOnly
                  value={outputString}
                  onFocus={(e) => e.target.select()}
                  rows={9}
                  className="w-full pl-9 pr-3 py-3 font-mono text-xs bg-[#0f172a] text-[#e2e8f0] rounded-xl border border-[#334155] focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                />
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-start gap-2 p-3.5 pastel-card-14 border text-[#b91c1c] dark:text-[#fca5a5] text-sm rounded-2xl">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};
