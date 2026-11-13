import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Download, Trash2, Loader2, AlertCircle, Frame } from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import type { ToolDefinition } from '../data/tools';
import type { SupportedLang } from '../locales/config';
import type { ToolPageLayoutStrings } from '../components/ToolPageLayout';
import type { UploadZoneStrings } from '../components/UploadZone';
import type { ComparisonModalStrings } from '../components/ComparisonModal';
import { toSpanishPath } from '../locales/es/slugs';
import { toPortuguesePath } from '../locales/pt/slugs';
import { toFrenchPath } from '../locales/fr/slugs';
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

interface ImageBorderPageProps {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
  ptStrings?: PagePtStrings;
  frStrings?: PageFrStrings;
}

type BorderType = 'solid' | 'gradient' | 'polaroid';
type ShadowLevel = 'none' | 'soft' | 'medium' | 'deep';

function roundedPath(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const radius = Math.min(Math.max(0, r), w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

export const ImageBorderPage: React.FC<ImageBorderPageProps> = ({
  onNavigate,
  lang,
  tool,
  toolRegistry,
  categoryLabels,
  esStrings,
  ptStrings,
  frStrings,
}) => {
  const activeTool = tool ?? TOOL_BY_SLUG['/image-border-generator'];
  const t = (key: string, fallback: string) => {
    if (lang === 'pt' && ptStrings?.toolUi) return (ptStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'fr' && frStrings?.toolUi) return (frStrings.toolUi[key] as string | undefined) ?? fallback;
    if (lang === 'es' && esStrings?.toolUi) return (esStrings.toolUi[key] as string | undefined) ?? fallback;
    return fallback;
  };

  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [imageInfo, setImageInfo] = useState<LoadedImageInfo | null>(null);
  const imageInfoRef = useRef<LoadedImageInfo | null>(null);
  imageInfoRef.current = imageInfo;

  const [borderType, setBorderType] = useState<BorderType>('solid');
  const [borderSizePct, setBorderSizePct] = useState<number>(8); // % of min(w,h)
  const [color1, setColor1] = useState<string>('#ffffff');
  const [color2, setColor2] = useState<string>('#3b82f6');
  const [gradientAngle, setGradientAngle] = useState<number>(135);
  const [outerRadiusPct, setOuterRadiusPct] = useState<number>(4);
  const [innerRadiusPct, setInnerRadiusPct] = useState<number>(2);
  const [shadow, setShadow] = useState<ShadowLevel>('soft');
  const [outFormat, setOutFormat] = useState<'png' | 'jpeg' | 'webp'>('png');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const presetLabelById: Record<string, string> = {
    gallery: t('presetClassicWhite', 'Classic White'),
    polaroid: t('presetPolaroidFrame', 'Polaroid Frame'),
    dark: t('presetDarkStudio', 'Dark Studio'),
    sunset: t('presetGradientGlow', 'Gradient Glow'),
  };

  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return () => {
      if (imageInfoRef.current?.previewUrl) {
        URL.revokeObjectURL(imageInfoRef.current.previewUrl);
      }
    };
  }, []);

  const applyFramePreset = (preset: 'gallery' | 'polaroid' | 'dark' | 'sunset') => {
    if (preset === 'gallery') {
      setBorderType('solid');
      setColor1('#ffffff');
      setBorderSizePct(10);
      setOuterRadiusPct(0);
      setInnerRadiusPct(0);
      setShadow('soft');
    } else if (preset === 'polaroid') {
      setBorderType('polaroid');
      setColor1('#ffffff');
      setBorderSizePct(7);
      setOuterRadiusPct(1);
      setInnerRadiusPct(0);
      setShadow('medium');
    } else if (preset === 'dark') {
      setBorderType('solid');
      setColor1('#0f172a');
      setBorderSizePct(9);
      setOuterRadiusPct(4);
      setInnerRadiusPct(2);
      setShadow('deep');
    } else {
      setBorderType('gradient');
      setColor1('#2563eb');
      setColor2('#10b981');
      setGradientAngle(135);
      setBorderSizePct(8);
      setOuterRadiusPct(6);
      setInnerRadiusPct(3);
      setShadow('medium');
    }
  };

  const renderFramed = useCallback(
    (canvas: HTMLCanvasElement, imgW: number, imgH: number) => {
      if (!imageInfo) return;
      const minDim = Math.min(imgW, imgH);
      const pad = Math.round((borderSizePct / 100) * minDim);
      const bottomPad = borderType === 'polaroid' ? Math.round(pad * 3.2) : pad;

      const shadowMap: Record<ShadowLevel, number> = {
        none: 0,
        soft: Math.round(minDim * 0.03),
        medium: Math.round(minDim * 0.055),
        deep: Math.round(minDim * 0.09),
      };
      const shadowPad = outFormat === 'jpeg' ? 0 : shadowMap[shadow];

      const frameW = imgW + pad * 2;
      const frameH = imgH + pad + bottomPad;
      const totalW = frameW + shadowPad * 2;
      const totalH = frameH + shadowPad * 2;

      canvas.width = totalW;
      canvas.height = totalH;
      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

      ctx.clearRect(0, 0, totalW, totalH);
      if (outFormat === 'jpeg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, totalW, totalH);
      }

      const outerR = (outerRadiusPct / 100) * (Math.min(frameW, frameH) / 2);
      const innerR = (innerRadiusPct / 100) * (minDim / 2);

      // Frame background + shadow
      ctx.save();
      if (shadowPad > 0) {
        ctx.shadowColor = 'rgba(15, 23, 42, 0.28)';
        ctx.shadowBlur = shadowPad * 0.9;
        ctx.shadowOffsetY = Math.round(shadowPad * 0.3);
      }
      roundedPath(ctx, shadowPad, shadowPad, frameW, frameH, outerR);

      if (borderType === 'gradient') {
        const rad = (gradientAngle * Math.PI) / 180;
        const cx = shadowPad + frameW / 2;
        const cy = shadowPad + frameH / 2;
        const r = Math.hypot(frameW, frameH) / 2;
        const grad = ctx.createLinearGradient(
          cx - Math.cos(rad) * r,
          cy - Math.sin(rad) * r,
          cx + Math.cos(rad) * r,
          cy + Math.sin(rad) * r
        );
        grad.addColorStop(0, color1);
        grad.addColorStop(1, color2);
        ctx.fillStyle = grad;
      } else {
        ctx.fillStyle = color1;
      }
      ctx.fill();
      ctx.restore();

      // Inner image clipped to innerR
      ctx.save();
      roundedPath(ctx, shadowPad + pad, shadowPad + pad, imgW, imgH, innerR);
      ctx.clip();
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(imageInfo.img, shadowPad + pad, shadowPad + pad, imgW, imgH);
      ctx.restore();
    },
    [imageInfo, borderType, borderSizePct, color1, color2, gradientAngle, outerRadiusPct, innerRadiusPct, shadow, outFormat]
  );

  useEffect(() => {
    if (!imageInfo || !previewCanvasRef.current) return;
    const scale = Math.min(1, 800 / Math.max(imageInfo.width, imageInfo.height));
    const pw = Math.max(1, Math.round(imageInfo.width * scale));
    const ph = Math.max(1, Math.round(imageInfo.height * scale));
    renderFramed(previewCanvasRef.current, pw, ph);
  }, [imageInfo, renderFramed]);

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
      renderFramed(outCanvas, imageInfo.width, imageInfo.height);
      const mime = `image/${outFormat}`;
      const ext = outFormat === 'jpeg' ? '.jpg' : `.${outFormat}`;
      const blob = await canvasToBlob(outCanvas, mime, 0.92);
      const base = sanitizeFilename(getBaseFilename(sourceFile.name));
      triggerDownload(blob, `${base}_framed${ext}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorExportFailed', 'Export failed.'));
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <ToolPageLayout
      tool={activeTool}
      onNavigate={onNavigate}
      lang={lang}
      ui={lang === 'pt' ? ptStrings?.layoutUi : lang === 'fr' ? frStrings?.layoutUi : esStrings?.layoutUi}
      canonicalPath={lang === 'es' ? toSpanishPath(activeTool.slug) : lang === 'pt' ? toPortuguesePath(activeTool.slug) : lang === 'fr' ? toFrenchPath(activeTool.slug) : undefined}
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
            strings={lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
            title={t('uploadTitle', 'Drop an image to add a custom border or frame')}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Frame className="w-3.5 h-3.5 text-blue-600" />
                  {t('framedPreview', 'Framed Preview')}
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
                className="rounded-xl overflow-hidden border border-slate-200 p-4 flex items-center justify-center min-h-[300px] max-h-[540px]"
                style={{
                  backgroundImage:
                    'linear-gradient(45deg, #e2e8f0 25%, transparent 25%), linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e2e8f0 75%), linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                }}
              >
                <canvas
                  ref={previewCanvasRef}
                  className="max-w-full max-h-[480px] w-auto h-auto object-contain block"
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
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('quickFramePresets', 'Quick Frame Presets')}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'gallery', label: 'Classic White' },
                    { id: 'polaroid', label: 'Polaroid Frame' },
                    { id: 'dark', label: 'Dark Studio' },
                    { id: 'sunset', label: 'Gradient Glow' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => applyFramePreset(p.id as 'gallery' | 'polaroid' | 'dark' | 'sunset')}
                      className="px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 text-slate-700 cursor-pointer"
                    >
                      {presetLabelById[p.id] ?? p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('borderStyle', 'Border Style')}
                </span>
                <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl">
                  {(['solid', 'gradient', 'polaroid'] as BorderType[]).map((bt) => (
                    <button
                      key={bt}
                      type="button"
                      onClick={() => setBorderType(bt)}
                      className={`py-1.5 text-xs font-semibold rounded-lg capitalize cursor-pointer ${
                        borderType === bt ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      {bt === 'solid'
                        ? t('borderStyleSolid', 'Solid')
                        : bt === 'gradient'
                          ? t('borderStyleGradient', 'Gradient')
                          : t('borderStylePolaroid', 'Polaroid')}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <input
                    type="color"
                    value={color1}
                    onChange={(e) => setColor1(e.target.value)}
                    className="w-8 h-8 rounded-lg border border-slate-200 cursor-pointer p-0.5"
                  />
                  <span>{borderType === 'gradient' ? t('startColor', 'Start Color') : t('borderColor', 'Border Color')}</span>
                </label>

                {borderType === 'gradient' && (
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <input
                      type="color"
                      value={color2}
                      onChange={(e) => setColor2(e.target.value)}
                      className="w-8 h-8 rounded-lg border border-slate-200 cursor-pointer p-0.5"
                    />
                    <span>{t('endColor', 'End Color')}</span>
                  </label>
                )}
              </div>

              {borderType === 'gradient' && (
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-700">{t('gradientAngle', 'Gradient Angle')}</span>
                    <span className="font-mono text-blue-600">{gradientAngle}°</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={360}
                    value={gradientAngle}
                    onChange={(e) => setGradientAngle(parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              )}

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-semibold text-slate-700">{t('borderSize', 'Border Size')}</span>
                  <span className="font-mono text-blue-600">{borderSizePct}%</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={25}
                  value={borderSizePct}
                  onChange={(e) => setBorderSizePct(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-700">{t('frameRadius', 'Frame Radius')}</span>
                    <span className="font-mono text-blue-600">{outerRadiusPct}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={30}
                    value={outerRadiusPct}
                    onChange={(e) => setOuterRadiusPct(parseInt(e.target.value, 10))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-700">{t('photoRadius', 'Photo Radius')}</span>
                    <span className="font-mono text-blue-600">{innerRadiusPct}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={30}
                    value={innerRadiusPct}
                    onChange={(e) => setInnerRadiusPct(parseInt(e.target.value, 10))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('dropShadow', 'Drop Shadow')}
                </span>
                <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-xl">
                  {(['none', 'soft', 'medium', 'deep'] as ShadowLevel[]).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setShadow(s)}
                      className={`py-1.5 text-xs font-semibold rounded-lg capitalize cursor-pointer ${
                        shadow === s ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      {s === 'none'
                        ? t('shadowNone', 'None')
                        : s === 'soft'
                          ? t('shadowSoft', 'Soft')
                          : s === 'medium'
                            ? t('shadowMedium', 'Medium')
                            : t('shadowDeep', 'Deep')}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl">
                  {(['png', 'jpeg', 'webp'] as const).map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setOutFormat(fmt)}
                      className={`py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                        outFormat === fmt ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      {fmt === 'jpeg' ? 'JPG' : fmt.toUpperCase()}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={isExporting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm cursor-pointer disabled:opacity-60"
                >
                  {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                  <span>{isExporting ? t('exporting', 'Exporting...') : t('downloadFramedImage', 'Download Framed Image')}</span>
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
