import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Stamp,
  Download,
  Trash2,
  Upload,
  Grid,
  Move,
  Loader2,
  AlertCircle,
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

interface ImageWatermarkPageProps {
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
}

const ANCHOR_POSITIONS: { label: string; x: number; y: number }[] = [
  { label: 'TL', x: 0.14, y: 0.12 },
  { label: 'TC', x: 0.5, y: 0.12 },
  { label: 'TR', x: 0.86, y: 0.12 },
  { label: 'ML', x: 0.14, y: 0.5 },
  { label: 'C', x: 0.5, y: 0.5 },
  { label: 'MR', x: 0.86, y: 0.5 },
  { label: 'BL', x: 0.14, y: 0.88 },
  { label: 'BC', x: 0.5, y: 0.88 },
  { label: 'BR', x: 0.86, y: 0.88 },
];

export const ImageWatermarkPage: React.FC<ImageWatermarkPageProps> = ({
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
}) => {
  const activeTool = tool ?? TOOL_BY_SLUG['/image-watermark'];
  const t = (key: string, fallback: string) => {
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

  const [watermarkMode, setWatermarkMode] = useState<'text' | 'image'>('text');
  const [text, setText] = useState<string>('© CompressMyPic.online');
  const [fontSizePct, setFontSizePct] = useState<number>(6); // % of image width
  const [textColor, setTextColor] = useState<string>('#ffffff');
  const [opacity, setOpacity] = useState<number>(55);
  const [rotation, setRotation] = useState<number>(-25);

  const [logoInfo, setLogoInfo] = useState<LoadedImageInfo | null>(null);
  const logoInfoRef = useRef<LoadedImageInfo | null>(null);
  logoInfoRef.current = logoInfo;
  const [logoScalePct, setLogoScalePct] = useState<number>(22); // % of image width

  const [posX, setPosX] = useState<number>(0.5);
  const [posY, setPosY] = useState<number>(0.5);
  const [tiled, setTiled] = useState<boolean>(false);
  const [tileSpacingPct, setTileSpacingPct] = useState<number>(28);

  const [format, setFormat] = useState<OutputFormatChoice>('original');
  const [quality, setQuality] = useState<number>(92);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const logoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (imageInfoRef.current?.previewUrl) URL.revokeObjectURL(imageInfoRef.current.previewUrl);
      if (logoInfoRef.current?.previewUrl) URL.revokeObjectURL(logoInfoRef.current.previewUrl);
    };
  }, []);

  const drawSingleMark = useCallback(
    (ctx: CanvasRenderingContext2D, cx: number, cy: number, canvasW: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0.05, Math.min(1, opacity / 100));

      if (watermarkMode === 'text') {
        const fontPx = Math.max(12, Math.round((fontSizePct / 100) * canvasW));
        ctx.font = `700 ${fontPx}px Inter, system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
        ctx.shadowBlur = Math.max(2, Math.round(fontPx * 0.14));
        ctx.fillStyle = textColor;
        ctx.fillText(text || t('fallbackWatermarkText', 'Watermark'), 0, 0);
      } else if (logoInfo) {
        const targetW = Math.max(16, (logoScalePct / 100) * canvasW);
        const targetH = (targetW / logoInfo.width) * logoInfo.height;
        ctx.drawImage(logoInfo.img, -targetW / 2, -targetH / 2, targetW, targetH);
      }
      ctx.restore();
    },
    [watermarkMode, text, fontSizePct, textColor, opacity, rotation, logoInfo, logoScalePct]
  );

  const renderWatermarked = useCallback(
    (canvas: HTMLCanvasElement, outW: number, outH: number) => {
      if (!imageInfo) return;
      canvas.width = outW;
      canvas.height = outH;
      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

      ctx.clearRect(0, 0, outW, outH);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(imageInfo.img, 0, 0, outW, outH);

      if (tiled) {
        const stepX = Math.max(40, (tileSpacingPct / 100) * outW);
        const stepY = Math.max(40, (tileSpacingPct / 100) * outH);
        let row = 0;
        for (let y = stepY * 0.35; y < outH + stepY; y += stepY) {
          const xOffset = row % 2 === 1 ? stepX * 0.5 : 0;
          for (let x = -xOffset + stepX * 0.35; x < outW + stepX; x += stepX) {
            drawSingleMark(ctx, x, y, outW);
          }
          row++;
        }
      } else {
        drawSingleMark(ctx, posX * outW, posY * outH, outW);
      }
    },
    [imageInfo, tiled, tileSpacingPct, posX, posY, drawSingleMark]
  );

  useEffect(() => {
    if (!imageInfo || !previewCanvasRef.current) return;
    const scale = Math.min(1, 900 / Math.max(imageInfo.width, imageInfo.height));
    const pw = Math.max(1, Math.round(imageInfo.width * scale));
    const ph = Math.max(1, Math.round(imageInfo.height * scale));
    renderWatermarked(previewCanvasRef.current, pw, ph);
  }, [imageInfo, renderWatermarked]);

  const updatePointerPos = (clientX: number, clientY: number) => {
    const canvas = previewCanvasRef.current;
    if (!canvas || tiled) return;
    const rect = canvas.getBoundingClientRect();
    const nx = Math.max(0.03, Math.min(0.97, (clientX - rect.left) / rect.width));
    const ny = Math.max(0.03, Math.min(0.97, (clientY - rect.top) / rect.height));
    setPosX(nx);
    setPosY(ny);
  };

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      updatePointerPos(e.clientX, e.clientY);
    };
    const onUp = () => {
      isDraggingRef.current = false;
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  });

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;
    setError(null);
    try {
      const info = await loadExtendedImageInfo(file);
      if (imageInfoRef.current?.previewUrl) URL.revokeObjectURL(imageInfoRef.current.previewUrl);
      setSourceFile(file);
      setImageInfo(info);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorUnableToLoadImage', 'Unable to load image.'));
    }
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    try {
      const info = await loadExtendedImageInfo(file);
      if (logoInfoRef.current?.previewUrl) URL.revokeObjectURL(logoInfoRef.current.previewUrl);
      setLogoInfo(info);
      setWatermarkMode('image');
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorUnableToLoadLogo', 'Unable to load logo image.'));
    }
  };

  const handleClear = () => {
    if (imageInfoRef.current?.previewUrl) URL.revokeObjectURL(imageInfoRef.current.previewUrl);
    setSourceFile(null);
    setImageInfo(null);
  };

  const handleDownload = async () => {
    if (!sourceFile || !imageInfo) return;
    setIsExporting(true);
    setError(null);
    try {
      const { mimeType, extension } = resolveOutputFormat(format, imageInfo.detectedType);
      const outCanvas = document.createElement('canvas');
      renderWatermarked(outCanvas, imageInfo.width, imageInfo.height);
      if (mimeType === 'image/jpeg') {
        const flat = document.createElement('canvas');
        flat.width = imageInfo.width;
        flat.height = imageInfo.height;
        const fCtx = flat.getContext('2d');
        if (fCtx) {
          fCtx.fillStyle = '#ffffff';
          fCtx.fillRect(0, 0, flat.width, flat.height);
          fCtx.drawImage(outCanvas, 0, 0);
          const blob = await canvasToBlob(flat, mimeType, quality / 100);
          const base = sanitizeFilename(getBaseFilename(sourceFile.name));
          triggerDownload(blob, `${base}_watermarked${extension}`);
          return;
        }
      }
      const blob = await canvasToBlob(outCanvas, mimeType, quality / 100);
      const base = sanitizeFilename(getBaseFilename(sourceFile.name));
      triggerDownload(blob, `${base}_watermarked${extension}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorWatermarkExportFailed', 'Watermark export failed.'));
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <ToolPageLayout
      tool={activeTool}
      onNavigate={onNavigate}
      lang={lang}
      ui={lang === 'ja' ? jaStrings?.layoutUi : lang === 'ko' ? koStrings?.layoutUi : lang === 'id' ? idStrings?.layoutUi : lang === 'ru' ? ruStrings?.layoutUi : lang === 'de' ? deStrings?.layoutUi : lang === 'it' ? itStrings?.layoutUi : lang === 'pt' ? ptStrings?.layoutUi : lang === 'fr' ? frStrings?.layoutUi : esStrings?.layoutUi}
      canonicalPath={lang === 'ja' ? toJapanesePath(activeTool.slug) : lang === 'ko' ? toKoreanPath(activeTool.slug) : lang === 'id' ? toIndonesianPath(activeTool.slug) : lang === 'ru' ? toRussianPath(activeTool.slug) : lang === 'de' ? toGermanPath(activeTool.slug) : lang === 'it' ? toItalianPath(activeTool.slug) : lang === 'es' ? toSpanishPath(activeTool.slug) : lang === 'pt' ? toPortuguesePath(activeTool.slug) : lang === 'fr' ? toFrenchPath(activeTool.slug) : undefined}
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
            title={t('uploadTitle', 'Drop an image to add a text or logo watermark')}
            strings={lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Stamp className="w-3.5 h-3.5 text-blue-600" />
                  {tiled ? t('tiledPreview', 'Tiled Preview') : t('dragToPosition', 'Drag on Image to Position')}
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

              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 p-3 flex items-center justify-center min-h-[300px] max-h-[540px]">
                <canvas
                  ref={previewCanvasRef}
                  onPointerDown={(e) => {
                    if (tiled) return;
                    isDraggingRef.current = true;
                    updatePointerPos(e.clientX, e.clientY);
                  }}
                  className={`max-w-full max-h-[490px] w-auto h-auto object-contain block touch-none ${
                    tiled ? 'cursor-default' : 'cursor-move'
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
                  {t('watermarkType', 'Watermark Type')}
                </span>
                <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setWatermarkMode('text')}
                    className={`py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                      watermarkMode === 'text' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    {t('modeText', 'Text Watermark')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setWatermarkMode('image')}
                    className={`py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                      watermarkMode === 'image' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    {t('modeLogo', 'Logo Image')}
                  </button>
                </div>
              </div>

              {watermarkMode === 'text' ? (
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      {t('watermarkTextLabel', 'Watermark Text')}
                    </label>
                    <input
                      type="text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder={t('placeholderBrand', '© Your Brand')}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <input
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="w-8 h-8 rounded-lg border border-slate-200 cursor-pointer p-0.5"
                      />
                      <span>{t('textColor', 'Text Color')}</span>
                    </label>
                    <div className="flex-1">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700">{t('size', 'Size')}</span>
                        <span className="font-mono text-blue-600">{fontSizePct}%</span>
                      </div>
                      <input
                        type="range"
                        min={2}
                        max={20}
                        value={fontSizePct}
                        onChange={(e) => setFontSizePct(parseInt(e.target.value, 10))}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <input
                    ref={logoInputRef}
                    type="file"
                    accept={EXTENDED_IMAGE_ACCEPT}
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => logoInputRef.current?.click()}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                    <span>{logoInfo ? t('changeLogo', 'Change Logo Image') : t('uploadLogo', 'Upload Logo (PNG / SVG)')}</span>
                  </button>
                  {logoInfo && (
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700">{t('logoWidth', 'Logo Width')}</span>
                        <span className="font-mono text-blue-600">{logoScalePct}%</span>
                      </div>
                      <input
                        type="range"
                        min={5}
                        max={60}
                        value={logoScalePct}
                        onChange={(e) => setLogoScalePct(parseInt(e.target.value, 10))}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-700">{t('opacity', 'Opacity')}</span>
                    <span className="font-mono text-blue-600">{opacity}%</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={100}
                    value={opacity}
                    onChange={(e) => setOpacity(parseInt(e.target.value, 10))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-700">{t('rotation', 'Rotation')}</span>
                    <span className="font-mono text-blue-600">{rotation}°</span>
                  </div>
                  <input
                    type="range"
                    min={-180}
                    max={180}
                    value={rotation}
                    onChange={(e) => setRotation(parseInt(e.target.value, 10))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <div className="space-y-2.5">
                <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
                  <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <Grid className="w-3.5 h-3.5 text-blue-600" />
                    <span>{t('tiledRepeatPattern', 'Tiled Repeat Pattern')}</span>
                  </span>
                  <input
                    type="checkbox"
                    checked={tiled}
                    onChange={(e) => setTiled(e.target.checked)}
                    className="w-4 h-4 accent-blue-600 rounded cursor-pointer"
                  />
                </label>

                {tiled ? (
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-700">{t('tileSpacing', 'Tile Spacing')}</span>
                      <span className="font-mono text-blue-600">{tileSpacingPct}%</span>
                    </div>
                    <input
                      type="range"
                      min={15}
                      max={60}
                      value={tileSpacingPct}
                      onChange={(e) => setTileSpacingPct(parseInt(e.target.value, 10))}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                ) : (
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1 mb-1.5">
                      <Move className="w-3 h-3" />
                      {t('anchorPresets', 'Anchor Presets (or drag on image)')}
                    </span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {ANCHOR_POSITIONS.map((a) => (
                        <button
                          key={a.label}
                          type="button"
                          onClick={() => {
                            setPosX(a.x);
                            setPosY(a.y);
                          }}
                          className={`py-1.5 text-[11px] font-semibold rounded-lg border cursor-pointer ${
                            Math.abs(posX - a.x) < 0.04 && Math.abs(posY - a.y) < 0.04
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {a.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

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
                  <span>{isExporting ? t('exporting', 'Exporting...') : t('downloadWatermarked', 'Download Watermarked Image')}</span>
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
