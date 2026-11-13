import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Crop,
  Download,
  Trash2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
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

interface ImageCropperPageProps {
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

interface CropRect {
  x: number; // normalized 0..1
  y: number;
  w: number;
  h: number;
}

type HandleType = 'move' | 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w';

interface AspectPreset {
  id: string;
  label: string;
  ratio: number | null; // width / height in pixels
}

const ASPECT_PRESETS: AspectPreset[] = [
  { id: 'free', label: 'Free', ratio: null },
  { id: '1:1', label: '1:1', ratio: 1 },
  { id: '4:3', label: '4:3', ratio: 4 / 3 },
  { id: '16:9', label: '16:9', ratio: 16 / 9 },
  { id: '3:2', label: '3:2', ratio: 3 / 2 },
  { id: '4:5', label: '4:5', ratio: 4 / 5 },
  { id: '9:16', label: '9:16', ratio: 9 / 16 },
];

export const ImageCropperPage: React.FC<ImageCropperPageProps> = ({
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
  const activeTool = tool ?? TOOL_BY_SLUG['/image-cropper'];
  const t = (key: string, fallback: string) => {
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

  const [crop, setCrop] = useState<CropRect>({ x: 0.1, y: 0.1, w: 0.8, h: 0.8 });
  const [aspectId, setAspectId] = useState<string>('free');
  const [zoom, setZoom] = useState<number>(1);
  const [format, setFormat] = useState<OutputFormatChoice>('original');
  const [quality, setQuality] = useState<number>(92);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const stageRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef<{
    handle: HandleType;
    startX: number;
    startY: number;
    startCrop: CropRect;
    stageW: number;
    stageH: number;
  } | null>(null);

  useEffect(() => {
    return () => {
      if (imageInfoRef.current?.previewUrl) {
        URL.revokeObjectURL(imageInfoRef.current.previewUrl);
      }
    };
  }, []);

  const currentAspectRatio = ASPECT_PRESETS.find((p) => p.id === aspectId)?.ratio ?? null;

  const applyAspectPreset = useCallback(
    (preset: AspectPreset) => {
      setAspectId(preset.id);
      if (!preset.ratio || !imageInfo) return;

      const imgAspect = imageInfo.width / imageInfo.height;
      // Normalized width/height ratio = preset.ratio / imgAspect
      const normRatio = preset.ratio / imgAspect;
      let w = 0.8;
      let h = w / normRatio;
      if (h > 0.85) {
        h = 0.85;
        w = h * normRatio;
      }
      if (w > 0.85) {
        w = 0.85;
        h = w / normRatio;
      }
      setCrop({
        x: Math.max(0, (1 - w) / 2),
        y: Math.max(0, (1 - h) / 2),
        w,
        h,
      });
    },
    [imageInfo]
  );

  const startDrag = (handle: HandleType, e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    dragStateRef.current = {
      handle,
      startX: e.clientX,
      startY: e.clientY,
      startCrop: { ...crop },
      stageW: rect.width,
      stageH: rect.height,
    };
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const ds = dragStateRef.current;
      if (!ds || !imageInfo) return;

      const dx = (e.clientX - ds.startX) / ds.stageW;
      const dy = (e.clientY - ds.startY) / ds.stageH;
      const sc = ds.startCrop;
      const minSize = 0.04;

      if (ds.handle === 'move') {
        const nx = Math.max(0, Math.min(1 - sc.w, sc.x + dx));
        const ny = Math.max(0, Math.min(1 - sc.h, sc.y + dy));
        setCrop({ ...sc, x: nx, y: ny });
        return;
      }

      let left = sc.x;
      let top = sc.y;
      let right = sc.x + sc.w;
      let bottom = sc.y + sc.h;

      if (ds.handle.includes('w')) left = Math.min(right - minSize, Math.max(0, sc.x + dx));
      if (ds.handle.includes('e')) right = Math.max(left + minSize, Math.min(1, sc.x + sc.w + dx));
      if (ds.handle.includes('n')) top = Math.min(bottom - minSize, Math.max(0, sc.y + dy));
      if (ds.handle.includes('s')) bottom = Math.max(top + minSize, Math.min(1, sc.y + sc.h + dy));

      let w = right - left;
      let h = bottom - top;

      if (currentAspectRatio) {
        const imgAspect = imageInfo.width / imageInfo.height;
        const normRatio = currentAspectRatio / imgAspect;

        if (ds.handle === 'n' || ds.handle === 's') {
          w = h * normRatio;
          if (left + w > 1) {
            w = 1 - left;
            h = w / normRatio;
            if (ds.handle === 'n') top = bottom - h;
          }
        } else {
          h = w / normRatio;
          if (ds.handle.includes('n')) {
            top = bottom - h;
            if (top < 0) {
              top = 0;
              h = bottom;
              w = h * normRatio;
              if (ds.handle.includes('w')) left = right - w;
            }
          } else {
            if (top + h > 1) {
              h = 1 - top;
              w = h * normRatio;
              if (ds.handle.includes('w')) left = right - w;
            }
          }
        }
      }

      setCrop({
        x: Math.max(0, left),
        y: Math.max(0, top),
        w: Math.max(minSize, Math.min(1 - Math.max(0, left), w)),
        h: Math.max(minSize, Math.min(1 - Math.max(0, top), h)),
      });
    };

    const handlePointerUp = () => {
      dragStateRef.current = null;
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [currentAspectRatio, imageInfo]);

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
      setCrop({ x: 0.1, y: 0.1, w: 0.8, h: 0.8 });
      setAspectId('free');
      setZoom(1);
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
    setError(null);
  };

  const pixelCrop = imageInfo
    ? {
        x: Math.round(crop.x * imageInfo.width),
        y: Math.round(crop.y * imageInfo.height),
        w: Math.max(1, Math.round(crop.w * imageInfo.width)),
        h: Math.max(1, Math.round(crop.h * imageInfo.height)),
      }
    : { x: 0, y: 0, w: 0, h: 0 };

  const handleDownload = async () => {
    if (!sourceFile || !imageInfo) return;
    setIsExporting(true);
    setError(null);
    try {
      const { mimeType, extension } = resolveOutputFormat(format, imageInfo.detectedType);
      const canvas = document.createElement('canvas');
      canvas.width = pixelCrop.w;
      canvas.height = pixelCrop.h;
      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) throw new Error(t('errorCanvasContext', 'Unable to initialize canvas context.'));

      if (mimeType === 'image/jpeg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, pixelCrop.w, pixelCrop.h);
      }
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(
        imageInfo.img,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.w,
        pixelCrop.h,
        0,
        0,
        pixelCrop.w,
        pixelCrop.h
      );

      const blob = await canvasToBlob(canvas, mimeType, quality / 100);
      const base = sanitizeFilename(getBaseFilename(sourceFile.name));
      triggerDownload(blob, `${base}_${pixelCrop.w}x${pixelCrop.h}_cropped${extension}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorCropExportFailed', 'Crop export failed.'));
    } finally {
      setIsExporting(false);
    }
  };

  const handles: { id: HandleType; posClass: string; cursor: string }[] = [
    { id: 'nw', posClass: '-top-1.5 -left-1.5', cursor: 'cursor-nwse-resize' },
    { id: 'n', posClass: '-top-1.5 left-1/2 -translate-x-1/2', cursor: 'cursor-ns-resize' },
    { id: 'ne', posClass: '-top-1.5 -right-1.5', cursor: 'cursor-nesw-resize' },
    { id: 'e', posClass: 'top-1/2 -translate-y-1/2 -right-1.5', cursor: 'cursor-ew-resize' },
    { id: 'se', posClass: '-bottom-1.5 -right-1.5', cursor: 'cursor-nwse-resize' },
    { id: 's', posClass: '-bottom-1.5 left-1/2 -translate-x-1/2', cursor: 'cursor-ns-resize' },
    { id: 'sw', posClass: '-bottom-1.5 -left-1.5', cursor: 'cursor-nesw-resize' },
    { id: 'w', posClass: 'top-1/2 -translate-y-1/2 -left-1.5', cursor: 'cursor-ew-resize' },
  ];

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
        {!imageInfo ? (
          <UploadZone
            onFilesSelected={handleFilesSelected}
            maxFileSizeMB={20}
            multiple={false}
            accept={EXTENDED_IMAGE_ACCEPT}
            allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
            allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
            supportedFormatsLabel="JPG, PNG, WebP, HEIC, GIF, BMP, SVG"
            title={t('uploadTitle', 'Drop an image to crop interactively')}
            strings={lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Crop Viewport */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Crop className="w-4 h-4 text-blue-600" />
                  <span>
                    {t('selection', 'Selection:')}{' '}
                    <strong className="font-mono text-blue-600">
                      {pixelCrop.w} × {pixelCrop.h}px
                    </strong>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center bg-slate-100 rounded-lg p-0.5">
                    <button
                      type="button"
                      onClick={() => setZoom((z) => Math.max(1, Number((z - 0.25).toFixed(2))))}
                      className="p-1.5 text-slate-700 hover:bg-white rounded-md cursor-pointer"
                      aria-label={t('zoomOut', 'Zoom out')}
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="px-2 text-xs font-mono font-semibold text-slate-700">
                      {Math.round(zoom * 100)}%
                    </span>
                    <button
                      type="button"
                      onClick={() => setZoom((z) => Math.min(3, Number((z + 0.25).toFixed(2))))}
                      className="p-1.5 text-slate-700 hover:bg-white rounded-md cursor-pointer"
                      aria-label={t('zoomIn', 'Zoom in')}
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
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

              <div className="rounded-xl border border-slate-200 bg-slate-900/95 overflow-auto max-h-[540px] p-4 flex items-center justify-center">
                <div
                  ref={stageRef}
                  className="relative inline-block select-none touch-none overflow-hidden"
                  style={{
                    width: zoom > 1 ? `${Math.round(zoom * 100)}%` : 'auto',
                    maxWidth: zoom === 1 ? '100%' : 'none',
                  }}
                >
                  <img
                    src={imageInfo.previewUrl}
                    alt={t('cropSourceAlt', 'Crop source')}
                    draggable={false}
                    className="block max-h-[460px] w-auto h-auto pointer-events-none mx-auto"
                    style={zoom > 1 ? { maxHeight: `${460 * zoom}px` } : undefined}
                  />

                  {/* Crop Selection Overlay */}
                  <div
                    onPointerDown={(e) => startDrag('move', e)}
                    className="absolute border-2 border-white cursor-move touch-none"
                    style={{
                      left: `${crop.x * 100}%`,
                      top: `${crop.y * 100}%`,
                      width: `${crop.w * 100}%`,
                      height: `${crop.h * 100}%`,
                      boxShadow: '0 0 0 9999px rgba(15, 23, 42, 0.58)',
                    }}
                  >
                    {/* Rule of thirds grid */}
                    <div className="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3">
                      <div className="border-r border-b border-white/30" />
                      <div className="border-r border-b border-white/30" />
                      <div className="border-b border-white/30" />
                      <div className="border-r border-b border-white/30" />
                      <div className="border-r border-b border-white/30" />
                      <div className="border-b border-white/30" />
                      <div className="border-r border-white/30" />
                      <div className="border-r border-white/30" />
                      <div />
                    </div>

                    {/* 8 Resize Handles */}
                    {handles.map((h) => (
                      <div
                        key={h.id}
                        onPointerDown={(e) => startDrag(h.id, e)}
                        className={`absolute w-3.5 h-3.5 bg-blue-600 border-2 border-white rounded-xs shadow-sm touch-none ${h.posClass} ${h.cursor}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between text-xs text-slate-500 font-mono">
                <span className="truncate max-w-xs">{sourceFile?.name}</span>
                <span>
                  {t('originalLabel', 'Original:')} {imageInfo.width}×{imageInfo.height}px · {sourceFile ? formatBytes(sourceFile.size) : ''}
                </span>
              </div>
            </div>

            {/* Crop Controls */}
            <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-900">{t('cropOptions', 'Crop Options')}</h2>
                <button
                  type="button"
                  onClick={() => {
                    setAspectId('free');
                    setCrop({ x: 0, y: 0, w: 1, h: 1 });
                    setZoom(1);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t('selectFull', 'Select Full')}</span>
                </button>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {t('aspectRatioPreset', 'Aspect Ratio Preset')}
                </span>
                <div className="grid grid-cols-4 gap-1.5">
                  {ASPECT_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => applyAspectPreset(preset)}
                      className={`py-2 text-xs font-semibold rounded-lg border cursor-pointer ${
                        aspectId === preset.id
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {preset.id === 'free' ? t('aspectFree', preset.label) : preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">{t('cropWidth', 'Crop Width')}</span>
                  <span className="font-mono font-bold text-slate-900">{pixelCrop.w} px</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">{t('cropHeight', 'Crop Height')}</span>
                  <span className="font-mono font-bold text-slate-900">{pixelCrop.h} px</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    {t('outputFormat', 'Output Format')}
                  </span>
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
                        {fmt === 'original' ? t('formatOriginal', 'Original') : fmt === 'jpeg' ? t('formatJpg', 'JPG') : fmt.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {format !== 'png' && (
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-700">{t('quality', 'Quality')}</span>
                      <span className="font-mono font-bold text-slate-700">{quality}%</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={100}
                      value={quality}
                      onChange={(e) => setQuality(parseInt(e.target.value, 10))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
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
                  <span>{isExporting ? t('cropping', 'Cropping...') : t('cropAndDownload', 'Crop & Download')}</span>
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
