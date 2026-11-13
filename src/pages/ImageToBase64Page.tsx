import React, { useState, useEffect, useRef } from 'react';
import { Code2, Copy, Check, Download, Trash2, AlertCircle } from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import type { ToolDefinition } from '../data/tools';
import type { SupportedLang } from '../locales/config';
import type { ToolPageLayoutStrings } from '../components/ToolPageLayout';
import type { UploadZoneStrings } from '../components/UploadZone';
import type { ComparisonModalStrings } from '../components/ComparisonModal';
import { toSpanishPath, getEsAlternates } from '../locales/es/slugs';

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

interface ImageToBase64PageProps {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
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
}) => {
  const activeTool = tool ?? TOOL_BY_SLUG['/image-to-base64'];
  const t = (key: string, fallback: string) =>
    lang === 'es' && esStrings?.toolUi ? (esStrings.toolUi[key] as string | undefined) ?? fallback : fallback;

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
      ui={esStrings?.layoutUi}
      canonicalPath={lang === 'es' ? toSpanishPath(activeTool.slug) : undefined}
      alternates={lang === 'es' ? getEsAlternates(activeTool.slug) : undefined}
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
            strings={esStrings?.uploadZone}
          />
        ) : (
          <div className="space-y-5">
            {/* Summary Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-16 h-16 rounded-xl border border-slate-200 bg-slate-100 overflow-hidden shrink-0 flex items-center justify-center p-1">
                  <img src={previewUrl} alt={file.name} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-sm font-bold text-slate-900 truncate">{file.name}</h2>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    {t('fileLabel', 'File:')} {formatBytes(file.size)}
                    {dims && dims.w > 0 ? ` · ${dims.w}×${dims.h}px` : ''} · {t('outputLabel', 'Output:')}{' '}
                    {outputString.length.toLocaleString()} {t('charsLabel', 'chars')} ({overheadPct >= 0 ? `+${overheadPct}%` : `${overheadPct}%`})
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleClear}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-700 text-xs font-semibold rounded-xl cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                <span>{t('encodeAnother', 'Encode Another')}</span>
              </button>
            </div>

            {/* Output Panel */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="inline-flex flex-wrap p-1 bg-slate-100 rounded-xl gap-1">
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
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                        tab === t.id ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
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
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? t('copied', 'Copied!') : t('copyOutput', 'Copy Output')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadTxt}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t('saveTxt', 'Save .TXT')}</span>
                  </button>
                </div>
              </div>

              <div className="relative">
                <Code2 className="w-4 h-4 text-slate-400 absolute top-3 left-3 pointer-events-none" />
                <textarea
                  readOnly
                  value={outputString}
                  onFocus={(e) => e.target.select()}
                  rows={9}
                  className="w-full pl-9 pr-3 py-3 font-mono text-xs bg-slate-900 text-slate-100 rounded-xl border border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-start gap-2 p-3.5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};
