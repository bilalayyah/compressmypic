import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Download, Trash2, Loader2, AlertCircle, Layers } from 'lucide-react';
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
import { createBlurredCanvas } from '../utils/canvasEffects';
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

interface AddBackgroundPageProps {
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

type BackdropMode = 'solid' | 'gradient' | 'blur';
type AspectChoice = 'original' | '1:1' | '16:9' | '9:16' | '4:5';

function roundedPath(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const rad = Math.min(Math.max(0, r), w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rad, y);
  ctx.lineTo(x + w - rad, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rad);
  ctx.lineTo(x + w, y + h - rad);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rad, y + h);
  ctx.lineTo(x + rad, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rad);
  ctx.lineTo(x, y + rad);
  ctx.quadraticCurveTo(x, y, x + rad, y);
  ctx.closePath();
}

export const AddBackgroundPage: React.FC<AddBackgroundPageProps> = ({
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
  const activeTool = tool ?? TOOL_BY_SLUG['/add-background-to-image'];
  const t = (key: string, fallback: string) => {
    const table =
      lang === 'zh' ? zhStrings?.toolUi : lang === 'ja' ? jaStrings?.toolUi : lang === 'ko' ? koStrings?.toolUi : lang === 'id' ? idStrings?.toolUi : lang === 'ru' ? ruStrings?.toolUi : lang === 'de' ? deStrings?.toolUi : lang === 'it' ? itStrings?.toolUi : lang === 'pt' ? ptStrings?.toolUi : lang === 'fr' ? frStrings?.toolUi : lang === 'es' ? esStrings?.toolUi : undefined;
    return table ? (table[key] as string | undefined) ?? fallback : fallback;
  };

  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [imageInfo, setImageInfo] = useState<LoadedImageInfo | null>(null);
  const imageInfoRef = useRef<LoadedImageInfo | null>(null);
  imageInfoRef.current = imageInfo;

  const [bgMode, setBgMode] = useState<BackdropMode>('solid');
  const [solidColor, setSolidColor] = useState<string>('#f8fafc');
  const [gradColor1, setGradColor1] = useState<string>('#2563eb');
  const [gradColor2, setGradColor2] = useState<string>('#0ea5e9');
  const [gradAngle, setGradAngle] = useState<number>(135);
  const [blurRadius, setBlurRadius] = useState<number>(22);
  const [aspect, setAspect] = useState<AspectChoice>('original');
  const [fgScale, setFgScale] = useState<number>(85); // % inside canvas
  const [fgRadiusPct, setFgRadiusPct] = useState<number>(4);
  const [fgShadow, setFgShadow] = useState<boolean>(true);
  const [outFormat, setOutFormat] = useState<'png' | 'jpeg' | 'webp'>('png');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return () => {
      if (imageInfoRef.current?.previewUrl) {
        URL.revokeObjectURL(imageInfoRef.current.previewUrl);
      }
    };
  }, []);

  const getTargetDims = useCallback(
    (baseMax: number) => {
      if (!imageInfo) return { w: 800, h: 600 };
      const origW = imageInfo.width;
      const origH = imageInfo.height;
      const longSide = Math.min(baseMax, Math.max(origW, origH));

      if (aspect === 'original') {
        const s = longSide / Math.max(origW, origH);
        return {
          w: Math.max(1, Math.round(origW * s)),
          h: Math.max(1, Math.round(origH * s)),
        };
      }
      if (aspect === '1:1') return { w: longSide, h: longSide };
      if (aspect === '16:9') return { w: longSide, h: Math.max(1, Math.round((longSide * 9) / 16)) };
      if (aspect === '9:16') return { w: Math.max(1, Math.round((longSide * 9) / 16)), h: longSide };
      return { w: Math.max(1, Math.round((longSide * 4) / 5)), h: longSide }; // 4:5
    },
    [imageInfo, aspect]
  );

  const renderComposite = useCallback(
    (canvas: HTMLCanvasElement, outW: number, outH: number) => {
      if (!imageInfo) return;
      canvas.width = outW;
      canvas.height = outH;
      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

      // 1. Background
      if (bgMode === 'solid') {
        ctx.fillStyle = solidColor;
        ctx.fillRect(0, 0, outW, outH);
      } else if (bgMode === 'gradient') {
        const rad = (gradAngle * Math.PI) / 180;
        const cx = outW / 2;
        const cy = outH / 2;
        const r = Math.hypot(outW, outH) / 2;
        const grad = ctx.createLinearGradient(
          cx - Math.cos(rad) * r,
          cy - Math.sin(rad) * r,
          cx + Math.cos(rad) * r,
          cy + Math.sin(rad) * r
        );
        grad.addColorStop(0, gradColor1);
        grad.addColorStop(1, gradColor2);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, outW, outH);
      } else {
        // Blurred image cover background
        const coverScale = Math.max(outW / imageInfo.width, outH / imageInfo.height);
        const bw = Math.round(imageInfo.width * coverScale);
        const bh = Math.round(imageInfo.height * coverScale);
        const blurred = createBlurredCanvas(
          imageInfo.img,
          bw,
          bh,
          Math.max(2, Math.round((blurRadius * Math.max(outW, outH)) / 800))
        );
        ctx.drawImage(blurred, (outW - bw) / 2, (outH - bh) / 2, bw, bh);
        // Subtle dark tint for contrast
        ctx.fillStyle = 'rgba(15, 23, 42, 0.12)';
        ctx.fillRect(0, 0, outW, outH);
      }

      // 2. Foreground fitted inside fgScale%
      const availW = outW * (fgScale / 100);
      const availH = outH * (fgScale / 100);
      const scale = Math.min(availW / imageInfo.width, availH / imageInfo.height);
      const fgW = imageInfo.width * scale;
      const fgH = imageInfo.height * scale;
      const fgX = (outW - fgW) / 2;
      const fgY = (outH - fgH) / 2;
      const cornerR = (fgRadiusPct / 100) * (Math.min(fgW, fgH) / 2);

      if (fgShadow) {
        ctx.save();
        ctx.shadowColor = 'rgba(15, 23, 42, 0.3)';
        ctx.shadowBlur = Math.round(Math.min(outW, outH) * 0.045);
        ctx.shadowOffsetY = Math.round(Math.min(outW, outH) * 0.015);
        roundedPath(ctx, fgX, fgY, fgW, fgH, cornerR);
        ctx.fillStyle = imageInfo.hasAlpha ? 'rgba(0,0,0,0.01)' : '#ffffff';
        ctx.fill();
        ctx.restore();
      }

      ctx.save();
      if (cornerR > 0) {
        roundedPath(ctx, fgX, fgY, fgW, fgH, cornerR);
        ctx.clip();
      }
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(imageInfo.img, fgX, fgY, fgW, fgH);
      ctx.restore();
    },
    [imageInfo, bgMode, solidColor, gradColor1, gradColor2, gradAngle, blurRadius, fgScale, fgRadiusPct, fgShadow]
  );

  useEffect(() => {
    if (!imageInfo || !previewCanvasRef.current) return;
    const { w, h } = getTargetDims(820);
    renderComposite(previewCanvasRef.current, w, h);
  }, [imageInfo, getTargetDims, renderComposite]);

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
      const { w, h } = getTargetDims(Math.max(imageInfo.width, imageInfo.height, 1200));
      const outCanvas = document.createElement('canvas');
      renderComposite(outCanvas, w, h);
      const mime = `image/${outFormat}`;
      const ext = outFormat === 'jpeg' ? '.jpg' : `.${outFormat}`;
      const blob = await canvasToBlob(outCanvas, mime, 0.92);
      const base = sanitizeFilename(getBaseFilename(sourceFile.name));
      triggerDownload(blob, `${base}_background${ext}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorExportFailed', 'Export failed.'));
    } finally {
      setIsExporting(false);
    }
  };

  const fullDims = getTargetDims(Math.max(imageInfo?.width || 1200, imageInfo?.height || 1200, 1200));

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
            title={t('uploadTitle', 'Drop an image or transparent PNG to add a backdrop')}
            strings={lang === 'zh' ? zhStrings?.uploadZone : lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  {t('backgroundPreview', 'Background Preview')}
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

              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 p-4 flex items-center justify-center min-h-[300px] max-h-[540px]">
                <canvas
                  ref={previewCanvasRef}
                  className="max-w-full max-h-[480px] w-auto h-auto object-contain block rounded-lg shadow-xs"
                />
              </div>

              <div className="flex justify-between text-xs text-slate-500 font-mono">
                <span className="truncate max-w-xs">{sourceFile?.name}</span>
                <span>
                  {t('outputDimensionsPrefix', 'Output:')} {fullDims.w}×{fullDims.h}px · {sourceFile ? formatBytes(sourceFile.size) : ''}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('backgroundType', 'Background Type')}
                </span>
                <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl">
                  {(
                    [
                      { id: 'solid', label: t('modeSolidColor', 'Solid Color') },
                      { id: 'gradient', label: t('modeGradient', 'Gradient') },
                      { id: 'blur', label: t('modeBlurredPhoto', 'Blurred Photo') },
                    ] as { id: BackdropMode; label: string }[]
                  ).map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setBgMode(m.id)}
                      className={`py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                        bgMode === m.id ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {bgMode === 'solid' && (
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={solidColor}
                      onChange={(e) => setSolidColor(e.target.value)}
                      className="w-9 h-9 rounded-lg border border-slate-200 cursor-pointer p-0.5"
                    />
                    <div className="flex flex-wrap gap-1.5">
                      {['#ffffff', '#0f172a', '#2563eb', '#10b981', '#fef3c7', '#f1f5f9'].map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setSolidColor(c)}
                          className="w-7 h-7 rounded-lg border border-slate-300 cursor-pointer"
                          style={{ backgroundColor: c }}
                          aria-label={t('selectColor', 'Select color {color}').replace('{color}', c)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {bgMode === 'gradient' && (
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <input
                        type="color"
                        value={gradColor1}
                        onChange={(e) => setGradColor1(e.target.value)}
                        className="w-8 h-8 rounded-lg border border-slate-200 cursor-pointer p-0.5"
                      />
                      <span>{t('color1', 'Color 1')}</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <input
                        type="color"
                        value={gradColor2}
                        onChange={(e) => setGradColor2(e.target.value)}
                        className="w-8 h-8 rounded-lg border border-slate-200 cursor-pointer p-0.5"
                      />
                      <span>{t('color2', 'Color 2')}</span>
                    </label>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-700">{t('angle', 'Angle')}</span>
                      <span className="font-mono text-blue-600">{gradAngle}°</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={360}
                      value={gradAngle}
                      onChange={(e) => setGradAngle(parseInt(e.target.value, 10))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {bgMode === 'blur' && (
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-700">{t('backdropBlurRadius', 'Backdrop Blur Radius')}</span>
                    <span className="font-mono text-blue-600">{blurRadius}px</span>
                  </div>
                  <input
                    type="range"
                    min={4}
                    max={50}
                    value={blurRadius}
                    onChange={(e) => setBlurRadius(parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('canvasAspectRatio', 'Canvas Aspect Ratio')}
                </span>
                <div className="grid grid-cols-5 gap-1 p-1 bg-slate-100 rounded-xl">
                  {(['original', '1:1', '16:9', '9:16', '4:5'] as AspectChoice[]).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setAspect(r)}
                      className={`py-1.5 text-xs font-semibold rounded-lg capitalize cursor-pointer ${
                        aspect === r ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      {r === 'original' ? t('aspectOriginal', 'Orig') : r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-700">{t('imageScale', 'Image Scale')}</span>
                    <span className="font-mono text-blue-600">{fgScale}%</span>
                  </div>
                  <input
                    type="range"
                    min={40}
                    max={100}
                    value={fgScale}
                    onChange={(e) => setFgScale(parseInt(e.target.value, 10))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-700">{t('roundness', 'Roundness')}</span>
                    <span className="font-mono text-blue-600">{fgRadiusPct}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={30}
                    value={fgRadiusPct}
                    onChange={(e) => setFgRadiusPct(parseInt(e.target.value, 10))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
                <span className="text-xs font-semibold text-slate-700">{t('dropShadowBehindImage', 'Drop Shadow Behind Image')}</span>
                <input
                  type="checkbox"
                  checked={fgShadow}
                  onChange={(e) => setFgShadow(e.target.checked)}
                  className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
                />
              </label>

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
                      {fmt === 'jpeg' ? t('formatJpg', 'JPG') : fmt === 'png' ? t('formatPng', 'PNG') : t('formatWebp', 'WEBP')}
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
                  <span>{isExporting ? t('exporting', 'Exporting...') : t('downloadImage', 'Download Image')}</span>
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
