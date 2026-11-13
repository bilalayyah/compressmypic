import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Download, Trash2, Loader2, AlertCircle, Circle } from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import type { ToolDefinition } from '../data/tools';
import type { SupportedLang } from '../locales/config';
import type { ToolPageLayoutStrings } from '../components/ToolPageLayout';
import type { UploadZoneStrings } from '../components/UploadZone';
import type { ComparisonModalStrings } from '../components/ComparisonModal';
import { toSpanishPath, getEsAlternates } from '../locales/es/slugs';
import { ToolPageLayout } from '../components/ToolPageLayout';
import { UploadZone } from '../components/UploadZone';
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  LoadedImageInfo,
  canvasToBlob,
  loadExtendedImageInfo,
} from '../utils/imageProcessing';
import { formatBytes, getBaseFilename, sanitizeFilename } from '../utils/formatters';
import { triggerDownload } from '../utils/zip';

export interface PageEsStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

interface RoundCornersPageProps {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
}

function drawRoundedRectPath(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  tl: number,
  tr: number,
  br: number,
  bl: number
) {
  const maxR = Math.min(w, h) / 2;
  const rTL = Math.min(maxR, Math.max(0, tl));
  const rTR = Math.min(maxR, Math.max(0, tr));
  const rBR = Math.min(maxR, Math.max(0, br));
  const rBL = Math.min(maxR, Math.max(0, bl));

  ctx.beginPath();
  ctx.moveTo(rTL, 0);
  ctx.lineTo(w - rTR, 0);
  ctx.quadraticCurveTo(w, 0, w, rTR);
  ctx.lineTo(w, h - rBR);
  ctx.quadraticCurveTo(w, h, w - rBR, h);
  ctx.lineTo(rBL, h);
  ctx.quadraticCurveTo(0, h, 0, h - rBL);
  ctx.lineTo(0, rTL);
  ctx.quadraticCurveTo(0, 0, rTL, 0);
  ctx.closePath();
}

export const RoundCornersPage: React.FC<RoundCornersPageProps> = ({
  onNavigate,
  lang,
  tool,
  toolRegistry,
  categoryLabels,
  esStrings,
}) => {
  const activeTool = tool ?? TOOL_BY_SLUG['/round-image-corners'];
  const t = (key: string, fallback: string) =>
    lang === 'es' && esStrings?.toolUi ? (esStrings.toolUi[key] as string | undefined) ?? fallback : fallback;

  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [imageInfo, setImageInfo] = useState<LoadedImageInfo | null>(null);
  const imageInfoRef = useRef<LoadedImageInfo | null>(null);
  imageInfoRef.current = imageInfo;

  const [uniformPercent, setUniformPercent] = useState<number>(12); // % of min(w,h)/2 -> 100% = full circle/pill
  const [perCorner, setPerCorner] = useState<boolean>(false);
  const [tlPercent, setTlPercent] = useState<number>(12);
  const [trPercent, setTrPercent] = useState<number>(12);
  const [brPercent, setBrPercent] = useState<number>(12);
  const [blPercent, setBlPercent] = useState<number>(12);

  const [bgMode, setBgMode] = useState<'transparent' | 'solid'>('transparent');
  const [bgColor, setBgColor] = useState<string>('#ffffff');
  const [outFormat, setOutFormat] = useState<'png' | 'webp' | 'jpeg'>('png');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const cornerLabelById: Record<string, string> = {
    tl: t('cornerTopLeft', 'Top Left'),
    tr: t('cornerTopRight', 'Top Right'),
    bl: t('cornerBottomLeft', 'Bottom Left'),
    br: t('cornerBottomRight', 'Bottom Right'),
  };

  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return () => {
      if (imageInfoRef.current?.previewUrl) {
        URL.revokeObjectURL(imageInfoRef.current.previewUrl);
      }
    };
  }, []);

  const renderToCanvas = useCallback(
    (canvas: HTMLCanvasElement, targetW: number, targetH: number) => {
      if (!imageInfo) return;
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

      ctx.clearRect(0, 0, targetW, targetH);

      const effectiveBg = bgMode === 'solid' || outFormat === 'jpeg';
      if (effectiveBg) {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, targetW, targetH);
      }

      const maxRad = Math.min(targetW, targetH) / 2;
      const toPx = (pct: number) => (pct / 100) * maxRad;
      const rTL = toPx(perCorner ? tlPercent : uniformPercent);
      const rTR = toPx(perCorner ? trPercent : uniformPercent);
      const rBR = toPx(perCorner ? brPercent : uniformPercent);
      const rBL = toPx(perCorner ? blPercent : uniformPercent);

      ctx.save();
      drawRoundedRectPath(ctx, targetW, targetH, rTL, rTR, rBR, rBL);
      ctx.clip();
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(imageInfo.img, 0, 0, targetW, targetH);
      ctx.restore();
    },
    [imageInfo, uniformPercent, perCorner, tlPercent, trPercent, brPercent, blPercent, bgMode, bgColor, outFormat]
  );

  useEffect(() => {
    if (!imageInfo || !previewCanvasRef.current) return;
    const scale = Math.min(1, 900 / Math.max(imageInfo.width, imageInfo.height));
    const pw = Math.max(1, Math.round(imageInfo.width * scale));
    const ph = Math.max(1, Math.round(imageInfo.height * scale));
    renderToCanvas(previewCanvasRef.current, pw, ph);
  }, [imageInfo, renderToCanvas]);

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;
    setError(null);
    try {
      const info = await loadExtendedImageInfo(file);
      if (imageInfoRef.current?.previewUrl) {
        URL.revokeObjectURL(imageInfoRef.current.previewUrl);
      }
      setSourceFile(file);
      setImageInfo(info);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorUnableToLoadImage', 'Unable to load image.'));
    }
  };

  const handleClear = () => {
    if (imageInfoRef.current?.previewUrl) {
      URL.revokeObjectURL(imageInfoRef.current.previewUrl);
    }
    setSourceFile(null);
    setImageInfo(null);
  };

  const handleDownload = async () => {
    if (!sourceFile || !imageInfo) return;
    setIsExporting(true);
    setError(null);
    try {
      const outCanvas = document.createElement('canvas');
      renderToCanvas(outCanvas, imageInfo.width, imageInfo.height);
      const mime = `image/${outFormat}`;
      const ext = outFormat === 'jpeg' ? '.jpg' : `.${outFormat}`;
      const blob = await canvasToBlob(outCanvas, mime, 0.92);
      const base = sanitizeFilename(getBaseFilename(sourceFile.name));
      triggerDownload(blob, `${base}_rounded${ext}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorExportFailed', 'Failed to export rounded image.'));
    } finally {
      setIsExporting(false);
    }
  };

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
        {!imageInfo ? (
          <UploadZone
            onFilesSelected={handleFilesSelected}
            maxFileSizeMB={20}
            multiple={false}
            accept={EXTENDED_IMAGE_ACCEPT}
            allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
            allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
            supportedFormatsLabel="JPG, PNG, WebP, HEIC, GIF, BMP, SVG"
            strings={esStrings?.uploadZone}
            title={t('uploadTitle', 'Drop an image to round its corners')}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {t('liveCornerPreview', 'Live Corner Preview')}
                </span>
                <button
                  type="button"
                  onClick={handleClear}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-red-600 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{t('changeImage', 'Change Image')}</span>
                </button>
              </div>

              <div
                className="rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center p-4 min-h-[280px] max-h-[520px]"
                style={{
                  backgroundImage:
                    'linear-gradient(45deg, #e2e8f0 25%, transparent 25%), linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e2e8f0 75%), linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                }}
              >
                <canvas
                  ref={previewCanvasRef}
                  className="max-w-full max-h-[470px] w-auto h-auto object-contain block"
                />
              </div>

              <div className="flex justify-between text-xs text-slate-500 font-mono">
                <span className="truncate max-w-xs">{sourceFile?.name}</span>
                <span>
                  {imageInfo.width}×{imageInfo.height}px · {sourceFile ? formatBytes(sourceFile.size) : ''}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-900">{t('cornerSettings', 'Corner Settings')}</h2>
                <button
                  type="button"
                  onClick={() => {
                    setPerCorner(false);
                    setUniformPercent(100);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                >
                  <Circle className="w-3.5 h-3.5" />
                  <span>{t('fullCirclePill', 'Full Circle / Pill')}</span>
                </button>
              </div>

              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
                <span className="text-xs font-semibold text-slate-700">
                  {t('individualPerCorner', 'Individual Per-Corner Control')}
                </span>
                <input
                  type="checkbox"
                  checked={perCorner}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setPerCorner(checked);
                    if (checked) {
                      setTlPercent(uniformPercent);
                      setTrPercent(uniformPercent);
                      setBrPercent(uniformPercent);
                      setBlPercent(uniformPercent);
                    }
                  }}
                  className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
                />
              </label>

              {!perCorner ? (
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-700">{t('allCornersRadius', 'All Corners Radius')}</span>
                    <span className="font-mono font-bold text-blue-600">
                      {Math.round((uniformPercent / 100) * (Math.min(imageInfo.width, imageInfo.height) / 2))}px ({uniformPercent}%)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={uniformPercent}
                    onChange={(e) => setUniformPercent(parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'tl', label: 'Top Left', val: tlPercent, set: setTlPercent },
                    { id: 'tr', label: 'Top Right', val: trPercent, set: setTrPercent },
                    { id: 'bl', label: 'Bottom Left', val: blPercent, set: setBlPercent },
                    { id: 'br', label: 'Bottom Right', val: brPercent, set: setBrPercent },
                  ].map((c) => (
                    <div key={c.id} className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/70">
                      <div className="flex justify-between text-[11px] font-semibold text-slate-700 mb-1">
                        <span>{cornerLabelById[c.id] ?? c.label}</span>
                        <span className="font-mono text-blue-600">{c.val}%</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={c.val}
                        onChange={(e) => c.set(parseInt(e.target.value, 10))}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('outerCornerFill', 'Outer Corner Fill')}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setBgMode('transparent');
                      if (outFormat === 'jpeg') setOutFormat('png');
                    }}
                    className={`py-2 text-xs font-semibold rounded-xl border cursor-pointer ${
                      bgMode === 'transparent'
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    {t('transparentPngWebp', 'Transparent (PNG/WebP)')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setBgMode('solid')}
                    className={`py-2 text-xs font-semibold rounded-xl border cursor-pointer ${
                      bgMode === 'solid'
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    {t('solidColor', 'Solid Color')}
                  </button>
                </div>
                {bgMode === 'solid' && (
                  <div className="mt-2.5 flex items-center gap-2">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-9 h-9 rounded-lg border border-slate-200 cursor-pointer p-0.5"
                    />
                    <span className="text-xs font-mono text-slate-600">{bgColor.toUpperCase()}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    {t('outputFormat', 'Output Format')}
                  </span>
                  <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl">
                    {(['png', 'webp', 'jpeg'] as const).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => setOutFormat(fmt)}
                        className={`py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                          outFormat === fmt
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {fmt === 'jpeg' ? 'JPG' : fmt.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={isExporting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm cursor-pointer disabled:opacity-60"
                >
                  {isExporting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Download className="w-4 h-4" />
                  )}
                  <span>{isExporting ? t('exporting', 'Exporting...') : t('downloadRoundedImage', 'Download Rounded Image')}</span>
                </button>
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
