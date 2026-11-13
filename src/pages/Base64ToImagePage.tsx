import React, { useState, useEffect, useRef } from 'react';
import {
  FileCode2,
  Download,
  Trash2,
  AlertCircle,
  CheckCircle2,
  Loader2,
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
import { getAlternates } from '../locales/alternates';

import { ToolPageLayout } from '../components/ToolPageLayout';
import { canvasToBlob } from '../utils/imageProcessing';
import { formatBytes } from '../utils/formatters';
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

interface Base64ToImagePageProps {
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

interface DecodedResult {
  blob: Blob;
  previewUrl: string;
  mimeType: string;
  ext: string;
  size: number;
  width: number;
  height: number;
}

function detectMimeFromBytes(bytes: Uint8Array): { mime: string; ext: string } {
  if (bytes.length >= 4 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) {
    return { mime: 'image/png', ext: '.png' };
  }
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return { mime: 'image/jpeg', ext: '.jpg' };
  }
  if (bytes.length >= 4 && bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x38) {
    return { mime: 'image/gif', ext: '.gif' };
  }
  if (
    bytes.length >= 12 &&
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return { mime: 'image/webp', ext: '.webp' };
  }
  if (bytes.length >= 2 && bytes[0] === 0x42 && bytes[1] === 0x4d) {
    return { mime: 'image/bmp', ext: '.bmp' };
  }
  if (bytes.length >= 4 && bytes[0] === 0x00 && bytes[1] === 0x00 && bytes[2] === 0x01 && bytes[3] === 0x00) {
    return { mime: 'image/x-icon', ext: '.ico' };
  }
  const head = new TextDecoder().decode(bytes.slice(0, 128)).trim().toLowerCase();
  if (head.includes('<svg') || head.startsWith('<?xml')) {
    return { mime: 'image/svg+xml', ext: '.svg' };
  }
  return { mime: 'image/png', ext: '.png' };
}

function extFromMime(mime: string): string {
  const m = mime.toLowerCase();
  if (m.includes('jpeg') || m.includes('jpg')) return '.jpg';
  if (m.includes('webp')) return '.webp';
  if (m.includes('gif')) return '.gif';
  if (m.includes('svg')) return '.svg';
  if (m.includes('bmp')) return '.bmp';
  if (m.includes('icon')) return '.ico';
  return '.png';
}

export const Base64ToImagePage: React.FC<Base64ToImagePageProps> = ({
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
  const activeTool = tool ?? TOOL_BY_SLUG['/base64-to-image'];
  const t = (key: string, fallback: string) => {
    const table =
      lang === 'id' ? idStrings?.toolUi : lang === 'ru' ? ruStrings?.toolUi : lang === 'de' ? deStrings?.toolUi : lang === 'it' ? itStrings?.toolUi : lang === 'pt' ? ptStrings?.toolUi : lang === 'fr' ? frStrings?.toolUi : lang === 'es' ? esStrings?.toolUi : undefined;
    return table ? (table[key] as string | undefined) ?? fallback : fallback;
  };

  const [input, setInput] = useState<string>('');
  const [decoded, setDecoded] = useState<DecodedResult | null>(null);
  const decodedRef = useRef<DecodedResult | null>(null);
  decodedRef.current = decoded;

  const [exportFmt, setExportFmt] = useState<'original' | 'png' | 'jpeg' | 'webp'>('original');
  const [isDecoding, setIsDecoding] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (decodedRef.current?.previewUrl) URL.revokeObjectURL(decodedRef.current.previewUrl);
    };
  }, []);

  const decodeString = async (rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) {
      if (decodedRef.current?.previewUrl) URL.revokeObjectURL(decodedRef.current.previewUrl);
      setDecoded(null);
      setError(null);
      return;
    }

    setIsDecoding(true);
    setError(null);
    try {
      let declaredMime: string | null = null;
      let b64Body = trimmed;

      const dataUrlMatch = trimmed.match(/^data:([^;]+);base64,([\s\S]+)$/i);
      if (dataUrlMatch) {
        declaredMime = dataUrlMatch[1].toLowerCase();
        b64Body = dataUrlMatch[2];
      } else if (trimmed.startsWith('data:')) {
        throw new Error(t('errorUnsupportedDataUri', 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'));
      }

      // Clean whitespace & URL-safe base64 characters if needed
      const cleanB64 = b64Body.replace(/\s+/g, '').replace(/-/g, '+').replace(/_/g, '/');
      if (!/^[A-Za-z0-9+/=]+$/.test(cleanB64)) {
        throw new Error(t('errorInvalidBase64', 'Input contains invalid Base64 characters.'));
      }

      const binaryStr = atob(cleanB64);
      const bytes = new Uint8Array(binaryStr.length);
      for (let i = 0; i < binaryStr.length; i++) {
        bytes[i] = binaryStr.charCodeAt(i);
      }

      const detected = detectMimeFromBytes(bytes);
      const mimeType = declaredMime || detected.mime;
      const ext = extFromMime(mimeType);
      const blob = new Blob([bytes], { type: mimeType });
      const url = URL.createObjectURL(blob);

      await new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          if (decodedRef.current?.previewUrl) URL.revokeObjectURL(decodedRef.current.previewUrl);
          setDecoded({
            blob,
            previewUrl: url,
            mimeType,
            ext,
            size: blob.size,
            width: img.naturalWidth,
            height: img.naturalHeight,
          });
          resolve();
        };
        img.onerror = () => {
          URL.revokeObjectURL(url);
          reject(new Error(t('errorNotValidImage', 'Decoded bytes do not form a valid browser-readable image.')));
        };
        img.src = url;
      });
    } catch (err) {
      if (decodedRef.current?.previewUrl) URL.revokeObjectURL(decodedRef.current.previewUrl);
      setDecoded(null);
      setError(err instanceof Error ? err.message : t('errorUnableToDecode', 'Unable to decode Base64 string.'));
    } finally {
      setIsDecoding(false);
    }
  };

  const handleDownload = async () => {
    if (!decoded) return;
    if (exportFmt === 'original') {
      triggerDownload(decoded.blob, `decoded_image${decoded.ext}`);
      return;
    }

    const img = new Image();
    img.src = decoded.previewUrl;
    await new Promise<void>((res) => {
      if (img.complete) res();
      else img.onload = () => res();
    });
    const w = decoded.width || 512;
    const h = decoded.height || 512;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    if (exportFmt === 'jpeg') {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);
    }
    ctx.drawImage(img, 0, 0, w, h);
    const targetMime = `image/${exportFmt}`;
    const ext = exportFmt === 'jpeg' ? '.jpg' : `.${exportFmt}`;
    const outBlob = await canvasToBlob(canvas, targetMime, 0.92);
    triggerDownload(outBlob, `decoded_image${ext}`);
  };

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
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between gap-3">
            <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-blue-600" />
              <span>{t('pasteLabel', 'Paste Base64 String or Data URL')}</span>
            </label>
            {input && (
              <button
                type="button"
                onClick={() => {
                  setInput('');
                  decodeString('');
                }}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-red-600 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{t('clear', 'Clear')}</span>
              </button>
            )}
          </div>

          <textarea
            rows={7}
            value={input}
            onChange={(e) => {
              const val = e.target.value;
              setInput(val);
              decodeString(val);
            }}
            placeholder={t('inputPlaceholder', 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here')}
            className="w-full p-3.5 font-mono text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{t('supportsNote', 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads')}</span>
            <button
              type="button"
              onClick={() => decodeString(input)}
              disabled={isDecoding || !input.trim()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl cursor-pointer disabled:opacity-50"
            >
              {isDecoding ? t('decoding', 'Decoding...') : t('decodeImage', 'Decode Image')}
            </button>
          </div>
        </div>

        {error && (
          <div className="flex items-start gap-2 p-3.5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {isDecoding && (
          <div className="flex items-center justify-center p-8 text-sm text-slate-600 gap-2">
            <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
            <span>{t('decodingBytes', 'Decoding Base64 bytes...')}</span>
          </div>
        )}

        {decoded && (
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div
              className="lg:col-span-7 rounded-xl border border-slate-200 p-4 flex items-center justify-center min-h-[240px] max-h-[440px]"
              style={{
                backgroundImage:
                  'linear-gradient(45deg, #e2e8f0 25%, transparent 25%), linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e2e8f0 75%), linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
              }}
            >
              <img
                src={decoded.previewUrl}
                alt={t('decodedPreviewAlt', 'Decoded Base64 preview')}
                className="max-w-full max-h-[390px] object-contain block"
              />
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t('validImageDecoded', 'Valid Image Decoded')}</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">{t('detectedFormat', 'Detected Format')}</span>
                  <span className="font-mono font-bold text-slate-900 uppercase">
                    {decoded.mimeType.replace('image/', '')}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">{t('binarySize', 'Binary Size')}</span>
                  <span className="font-mono font-bold text-slate-900">{formatBytes(decoded.size)}</span>
                </div>
                <div className="col-span-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">{t('dimensions', 'Dimensions')}</span>
                  <span className="font-mono font-bold text-slate-900">
                    {decoded.width} × {decoded.height} px
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('downloadFormat', 'Download Format')}
                </span>
                <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-xl">
                  {(['original', 'png', 'jpeg', 'webp'] as const).map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setExportFmt(fmt)}
                      className={`py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                        exportFmt === fmt ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      {fmt === 'original' ? t('formatOriginal', 'Original') : fmt === 'jpeg' ? t('formatJpg', 'JPG') : fmt.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleDownload}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{t('downloadImageFile', 'Download Image File')}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};
