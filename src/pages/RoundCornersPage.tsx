import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Download, Trash2, Loader2, AlertCircle, Circle } from 'lucide-react';
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

interface RoundCornersPageProps {
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
  const activeTool = tool ?? TOOL_BY_SLUG['/round-image-corners'];
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
      ui={lang === 'zh' ? zhStrings?.layoutUi : lang === 'ja' ? jaStrings?.layoutUi : lang === 'ko' ? koStrings?.layoutUi : lang === 'id' ? idStrings?.layoutUi : lang === 'ru' ? ruStrings?.layoutUi : lang === 'de' ? deStrings?.layoutUi : lang === 'it' ? itStrings?.layoutUi : lang === 'pt' ? ptStrings?.layoutUi : lang === 'fr' ? frStrings?.layoutUi : esStrings?.layoutUi}
      canonicalPath={lang === 'zh' ? toChinesePath(activeTool.slug) : lang === 'ja' ? toJapanesePath(activeTool.slug) : lang === 'ko' ? toKoreanPath(activeTool.slug) : lang === 'id' ? toIndonesianPath(activeTool.slug) : lang === 'ru' ? toRussianPath(activeTool.slug) : lang === 'de' ? toGermanPath(activeTool.slug) : lang === 'it' ? toItalianPath(activeTool.slug) : lang === 'es' ? toSpanishPath(activeTool.slug) : lang === 'pt' ? toPortuguesePath(activeTool.slug) : lang === 'fr' ? toFrenchPath(activeTool.slug) : undefined}
      alternates={lang !== 'en' ? getAlternates(activeTool.slug) : undefined}
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
            strings={lang === 'zh' ? zhStrings?.uploadZone : lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
            title={t('uploadTitle', 'Drop an image to round its corners')}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-4 sm:p-5 shadow-[var(--shadow)] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)]">
                  {t('liveCornerPreview', 'Live Corner Preview')}
                </span>
                <button
                  type="button"
                  onClick={handleClear}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--ink-3)] hover:text-[#dc2626] dark:hover:text-[#fca5a5] cursor-pointer transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{t('changeImage', 'Change Image')}</span>
                </button>
              </div>

              <div
                className="rounded-xl overflow-hidden border border-[var(--line)] bg-[var(--surface-2)] flex items-center justify-center p-4 min-h-[280px] max-h-[520px]"
                style={{
                  backgroundImage:
                    'linear-gradient(45deg, rgba(148, 163, 184, 0.16) 25%, transparent 25%), linear-gradient(-45deg, rgba(148, 163, 184, 0.16) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(148, 163, 184, 0.16) 75%), linear-gradient(-45deg, transparent 75%, rgba(148, 163, 184, 0.16) 75%)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                }}
              >
                <canvas
                  ref={previewCanvasRef}
                  className="max-w-full max-h-[470px] w-auto h-auto object-contain block"
                />
              </div>

              <div className="flex justify-between text-xs text-[var(--ink-3)] font-mono">
                <span className="truncate max-w-xs">{sourceFile?.name}</span>
                <span>
                  {imageInfo.width}×{imageInfo.height}px · {sourceFile ? formatBytes(sourceFile.size) : ''}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 sm:p-6 shadow-[var(--shadow)] space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="font-sans text-lg font-bold text-[var(--ink-navy)]">{t('cornerSettings', 'Corner Settings')}</h2>
                <button
                  type="button"
                  onClick={() => {
                    setPerCorner(false);
                    setUniformPercent(100);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#6d28d9] dark:text-[#c4b5fd] hover:underline cursor-pointer"
                >
                  <Circle className="w-3.5 h-3.5" />
                  <span>{t('fullCirclePill', 'Full Circle / Pill')}</span>
                </button>
              </div>

              <label className="flex items-center justify-between p-3 rounded-[11px] bg-[var(--surface-2)] border border-[var(--line)] cursor-pointer">
                <span className="text-xs font-semibold text-[var(--ink-2)]">
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
                  className="w-4 h-4 accent-[#7c3aed] rounded cursor-pointer"
                />
              </label>

              {!perCorner ? (
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-[var(--ink-2)]">{t('allCornersRadius', 'All Corners Radius')}</span>
                    <span className="font-mono font-bold text-[#7c3aed] dark:text-[#a78bfa]">
                      {Math.round((uniformPercent / 100) * (Math.min(imageInfo.width, imageInfo.height) / 2))}px ({uniformPercent}%)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={uniformPercent}
                    onChange={(e) => setUniformPercent(parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-[var(--line)] rounded-lg appearance-none cursor-pointer"
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
                    <div key={c.id} className="p-2.5 rounded-[11px] border border-[var(--line)] bg-[var(--surface-2)]">
                      <div className="flex justify-between text-[11px] font-semibold text-[var(--ink-2)] mb-1">
                        <span>{cornerLabelById[c.id] ?? c.label}</span>
                        <span className="font-mono text-[#7c3aed] dark:text-[#a78bfa]">{c.val}%</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={c.val}
                        onChange={(e) => c.set(parseInt(e.target.value, 10))}
                        className="w-full h-1.5 bg-[var(--line)] rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)] block mb-2">
                  {t('outerCornerFill', 'Outer Corner Fill')}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setBgMode('transparent');
                      if (outFormat === 'jpeg') setOutFormat('png');
                    }}
                    className={`py-2 text-xs font-semibold rounded-[11px] border cursor-pointer transition-colors ${
                      bgMode === 'transparent'
                        ? 'bg-[#ede9fe] dark:bg-[#7c3aed]/20 border-[#7c3aed] text-[#6d28d9] dark:text-[#ddd6fe]'
                        : 'bg-[var(--surface-2)] border-[var(--line)] text-[var(--ink-2)] hover:border-[#7c3aed]'
                    }`}
                  >
                    {t('transparentPngWebp', 'Transparent (PNG/WebP)')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setBgMode('solid')}
                    className={`py-2 text-xs font-semibold rounded-[11px] border cursor-pointer transition-colors ${
                      bgMode === 'solid'
                        ? 'bg-[#ede9fe] dark:bg-[#7c3aed]/20 border-[#7c3aed] text-[#6d28d9] dark:text-[#ddd6fe]'
                        : 'bg-[var(--surface-2)] border-[var(--line)] text-[var(--ink-2)] hover:border-[#7c3aed]'
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
                      className="w-9 h-9 rounded-[8px] border border-[var(--line-strong)] cursor-pointer p-0.5 bg-[var(--surface-2)]"
                    />
                    <span className="text-xs font-mono text-[var(--ink-2)]">{bgColor.toUpperCase()}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[var(--line)] space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)] block mb-2">
                    {t('outputFormat', 'Output Format')}
                  </span>
                  <div className="grid grid-cols-3 gap-1 p-1 bg-[var(--surface-2)] border border-[var(--line)] rounded-[11px]">
                    {(['png', 'webp', 'jpeg'] as const).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => setOutFormat(fmt)}
                        className={`py-1.5 text-xs font-semibold rounded-[8px] cursor-pointer transition-all ${
                          outFormat === fmt
                            ? 'bg-[#7c3aed] text-white shadow-xs'
                            : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
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
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 btn-purple-grad text-sm font-semibold shadow-xs cursor-pointer disabled:opacity-60"
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
          <div className="flex items-start gap-2 p-3.5 pastel-card-14 border text-[#b91c1c] dark:text-[#fca5a5] text-sm rounded-2xl">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};
