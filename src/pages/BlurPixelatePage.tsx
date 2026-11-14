import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Droplets,
  Download,
  Undo2,
  Trash2,
  Loader2,
  AlertCircle,
  Brush,
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
import { toJapanesePath } from '../locales/ja/slugs';
import { toKoreanPath } from '../locales/ko/slugs';
import { toChinesePath } from '../locales/zh/slugs';
import { getAlternates } from '../locales/alternates';
import { ToolPageLayout } from '../components/ToolPageLayout';
import { UploadZone } from '../components/UploadZone';
import { OutputFormatChoice } from '../types';
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  LoadedImageInfo,
  canvasToBlob,
  loadExtendedImageInfo,
} from '../utils/imageProcessing';
import { resolveOutputFormat } from '../utils/compressor';
import { createBlurredCanvas, createPixelatedCanvas } from '../utils/canvasEffects';
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

interface BlurPixelatePageProps {
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

interface BrushStroke {
  mode: 'blur' | 'pixelate';
  strength: number;
  radiusNorm: number; // fraction of canvas min dimension
  points: { x: number; y: number }[];
}

export const BlurPixelatePage: React.FC<BlurPixelatePageProps> = ({
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
  const activeTool = tool ?? TOOL_BY_SLUG['/blur-pixelate-image'];
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

  const [scope, setScope] = useState<'brush' | 'whole'>('brush');
  const [effectMode, setEffectMode] = useState<'pixelate' | 'blur'>('pixelate');
  const [blurRadius, setBlurRadius] = useState<number>(18);
  const [pixelSize, setPixelSize] = useState<number>(20);
  const [brushSizePct, setBrushSizePct] = useState<number>(7);
  const [strokes, setStrokes] = useState<BrushStroke[]>([]);

  const [format, setFormat] = useState<OutputFormatChoice>('original');
  const [quality, setQuality] = useState<number>(92);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const isPaintingRef = useRef<boolean>(false);

  useEffect(() => {
    return () => {
      if (imageInfoRef.current?.previewUrl) URL.revokeObjectURL(imageInfoRef.current.previewUrl);
    };
  }, []);

  const renderComposite = useCallback(
    (canvas: HTMLCanvasElement, w: number, h: number) => {
      if (!imageInfo) return;
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const scaleRatio = w / imageInfo.width;

      if (scope === 'whole') {
        const wholeCanvas =
          effectMode === 'blur'
            ? createBlurredCanvas(imageInfo.img, w, h, Math.max(1, blurRadius * scaleRatio))
            : createPixelatedCanvas(imageInfo.img, w, h, Math.max(2, pixelSize * scaleRatio));
        ctx.drawImage(wholeCanvas, 0, 0);
        return;
      }

      // Base image
      ctx.drawImage(imageInfo.img, 0, 0, w, h);
      if (strokes.length === 0) return;

      // Composite each stroke using an offscreen mask canvas
      const minDim = Math.min(w, h);
      for (const stroke of strokes) {
        if (stroke.points.length === 0) continue;
        const fxCanvas =
          stroke.mode === 'blur'
            ? createBlurredCanvas(imageInfo.img, w, h, Math.max(2, stroke.strength * scaleRatio))
            : createPixelatedCanvas(imageInfo.img, w, h, Math.max(2, stroke.strength * scaleRatio));

        const maskCanvas = document.createElement('canvas');
        maskCanvas.width = w;
        maskCanvas.height = h;
        const mCtx = maskCanvas.getContext('2d');
        if (!mCtx) continue;

        const rPx = Math.max(6, stroke.radiusNorm * minDim);
        mCtx.lineCap = 'round';
        mCtx.lineJoin = 'round';
        mCtx.lineWidth = rPx * 2;
        mCtx.strokeStyle = '#000';
        mCtx.fillStyle = '#000';

        if (stroke.points.length === 1) {
          mCtx.beginPath();
          mCtx.arc(stroke.points[0].x * w, stroke.points[0].y * h, rPx, 0, Math.PI * 2);
          mCtx.fill();
        } else {
          mCtx.beginPath();
          mCtx.moveTo(stroke.points[0].x * w, stroke.points[0].y * h);
          for (let i = 1; i < stroke.points.length; i++) {
            mCtx.lineTo(stroke.points[i].x * w, stroke.points[i].y * h);
          }
          mCtx.stroke();
        }

        const fxCtx = fxCanvas.getContext('2d');
        if (!fxCtx) continue;
        fxCtx.globalCompositeOperation = 'destination-in';
        fxCtx.drawImage(maskCanvas, 0, 0);

        ctx.drawImage(fxCanvas, 0, 0);
      }
    },
    [imageInfo, scope, effectMode, blurRadius, pixelSize, strokes]
  );

  useEffect(() => {
    if (!imageInfo || !previewCanvasRef.current) return;
    const scale = Math.min(1, 900 / Math.max(imageInfo.width, imageInfo.height));
    const pw = Math.max(1, Math.round(imageInfo.width * scale));
    const ph = Math.max(1, Math.round(imageInfo.height * scale));
    renderComposite(previewCanvasRef.current, pw, ph);
  }, [imageInfo, renderComposite]);

  const getNormCoords = (clientX: number, clientY: number) => {
    const canvas = previewCanvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    return {
      x: Math.max(0, Math.min(1, (clientX - rect.left) / rect.width)),
      y: Math.max(0, Math.min(1, (clientY - rect.top) / rect.height)),
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (scope !== 'brush') return;
    const pt = getNormCoords(e.clientX, e.clientY);
    if (!pt) return;
    isPaintingRef.current = true;
    const newStroke: BrushStroke = {
      mode: effectMode,
      strength: effectMode === 'blur' ? blurRadius : pixelSize,
      radiusNorm: brushSizePct / 100,
      points: [pt],
    };
    setStrokes((prev) => [...prev, newStroke]);
  };

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!isPaintingRef.current) return;
      const pt = getNormCoords(e.clientX, e.clientY);
      if (!pt) return;
      setStrokes((prev) => {
        if (prev.length === 0) return prev;
        const copy = [...prev];
        const last = copy[copy.length - 1];
        copy[copy.length - 1] = { ...last, points: [...last.points, pt] };
        return copy;
      });
    };
    const onUp = () => {
      isPaintingRef.current = false;
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;
    setError(null);
    try {
      const info = await loadExtendedImageInfo(file);
      if (imageInfoRef.current?.previewUrl) URL.revokeObjectURL(imageInfoRef.current.previewUrl);
      setSourceFile(file);
      setImageInfo(info);
      setStrokes([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorUnableToLoadImage', 'Unable to load image.'));
    }
  };

  const handleClear = () => {
    if (imageInfoRef.current?.previewUrl) URL.revokeObjectURL(imageInfoRef.current.previewUrl);
    setSourceFile(null);
    setImageInfo(null);
    setStrokes([]);
  };

  const handleDownload = async () => {
    if (!sourceFile || !imageInfo) return;
    setIsExporting(true);
    setError(null);
    try {
      const { mimeType, extension } = resolveOutputFormat(format, imageInfo.detectedType);
      const outCanvas = document.createElement('canvas');
      renderComposite(outCanvas, imageInfo.width, imageInfo.height);
      const blob = await canvasToBlob(outCanvas, mimeType, quality / 100);
      const base = sanitizeFilename(getBaseFilename(sourceFile.name));
      triggerDownload(blob, `${base}_${effectMode}${extension}`);
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
            title={t('uploadTitle', 'Drop an image to blur or pixelate areas')}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  {scope === 'brush' ? (
                    <>
                      <Brush className="w-3.5 h-3.5 text-blue-600" />
                      <span>{effectMode === 'blur' ? t('paintOverAreasBlur', 'Paint Over Areas to Blur') : t('paintOverAreasPixelate', 'Paint Over Areas to Pixelate')}</span>
                    </>
                  ) : (
                    <>
                      <Droplets className="w-3.5 h-3.5 text-blue-600" />
                      <span>{t('wholeImagePreview', 'Whole-Image Preview')}</span>
                    </>
                  )}
                </span>

                <div className="flex items-center gap-2">
                  {scope === 'brush' && strokes.length > 0 && (
                    <>
                      <button
                        type="button"
                        onClick={() => setStrokes((s) => s.slice(0, -1))}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                      >
                        <Undo2 className="w-3.5 h-3.5" />
                        <span>{t('undo', 'Undo')}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setStrokes([])}
                        className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                      >
                        {t('resetBrush', 'Reset Brush')}
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={handleClear}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer"
                    aria-label={t('removeImage', 'Remove image')}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 p-3 flex items-center justify-center min-h-[300px] max-h-[540px]">
                <canvas
                  ref={previewCanvasRef}
                  onPointerDown={handlePointerDown}
                  className={`max-w-full max-h-[490px] w-auto h-auto object-contain block touch-none ${
                    scope === 'brush' ? 'cursor-crosshair' : 'cursor-default'
                  }`}
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
                  {t('targetArea', 'Target Area')}
                </span>
                <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setScope('brush')}
                    className={`py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                      scope === 'brush' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    {t('brushArea', 'Brush Area')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setScope('whole')}
                    className={`py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                      scope === 'whole' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    {t('wholeImage', 'Whole Image')}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('effectStyle', 'Effect Style')}
                </span>
                <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setEffectMode('pixelate')}
                    className={`py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                      effectMode === 'pixelate' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    {t('pixelateMosaic', 'Pixelate Mosaic')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setEffectMode('blur')}
                    className={`py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                      effectMode === 'blur' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    {t('smoothBlur', 'Smooth Blur')}
                  </button>
                </div>
              </div>

              {effectMode === 'blur' ? (
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-700">{t('blurRadius', 'Blur Radius')}</span>
                    <span className="font-mono font-bold text-blue-600">{blurRadius}px</span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={50}
                    value={blurRadius}
                    onChange={(e) => setBlurRadius(parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              ) : (
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-700">{t('mosaicBlockSize', 'Mosaic Block Size')}</span>
                    <span className="font-mono font-bold text-blue-600">{pixelSize}px</span>
                  </div>
                  <input
                    type="range"
                    min={4}
                    max={60}
                    value={pixelSize}
                    onChange={(e) => setPixelSize(parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              )}

              {scope === 'brush' && (
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-700">{t('brushSize', 'Brush Size')}</span>
                    <span className="font-mono font-bold text-blue-600">{brushSizePct}%</span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={20}
                    value={brushSizePct}
                    onChange={(e) => setBrushSizePct(parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="mt-1.5 text-[11px] text-slate-500">
                    {t('brushHint', 'Click and drag directly on the photo to hide faces, text, or license plates.')}
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-xl">
                  {(['original', 'jpeg', 'png', 'webp'] as OutputFormatChoice[]).map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setFormat(fmt)}
                      className={`py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                        format === fmt ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      {fmt === 'original' ? t('formatOrig', 'Orig') : fmt === 'jpeg' ? t('formatJpg', 'JPG') : fmt.toUpperCase()}
                    </button>
                  ))}
                </div>
                {format !== 'png' && (
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-700">{t('quality', 'Quality')}</span>
                      <span className="font-mono text-slate-700">{quality}%</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={100}
                      value={quality}
                      onChange={(e) => setQuality(parseInt(e.target.value, 10))}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                )}
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
