import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Type,
  Plus,
  Trash2,
  Download,
  Bold,
  Italic,
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

interface AddTextPageProps {
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

interface TextLayer {
  id: string;
  text: string;
  x: number; // normalized 0..1
  y: number; // normalized 0..1
  fontFamily: string;
  fontSizePct: number; // % of image width
  color: string;
  bold: boolean;
  italic: boolean;
  rotation: number;
  outline: boolean;
  outlineColor: string;
  outlineWidth: number;
  shadow: boolean;
}

const FONT_OPTIONS = [
  { label: 'Inter / Clean Sans', value: 'Inter, system-ui, sans-serif' },
  { label: 'Impact / Meme Display', value: 'Impact, "Arial Black", sans-serif' },
  { label: 'Georgia / Classic Serif', value: 'Georgia, "Times New Roman", serif' },
  { label: 'Courier / Monospace', value: '"Courier New", monospace' },
  { label: 'Trebuchet / Rounded Sans', value: '"Trebuchet MS", sans-serif' },
];

function createDefaultLayer(index: number, firstText: string, captionTemplate: string): TextLayer {
  return {
    id: `layer-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    text: index === 0 ? firstText : captionTemplate.replace('{index}', String(index + 1)),
    x: 0.5,
    y: index === 0 ? 0.5 : 0.78,
    fontFamily: FONT_OPTIONS[0].value,
    fontSizePct: 7,
    color: '#ffffff',
    bold: true,
    italic: false,
    rotation: 0,
    outline: true,
    outlineColor: '#0f172a',
    outlineWidth: 4,
    shadow: true,
  };
}

export const AddTextPage: React.FC<AddTextPageProps> = ({
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
  const activeTool = tool ?? TOOL_BY_SLUG['/add-text-to-image'];
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

  // Translated default layer texts (module-level createDefaultLayer takes
  // them as params so it stays a pure function).
  const newDefaultLayer = (index: number) =>
    createDefaultLayer(
      index,
      t('defaultLayerText', 'Double-tap or edit text'),
      t('defaultCaption', 'Caption {index}')
    );

  const [layers, setLayers] = useState<TextLayer[]>(() => [newDefaultLayer(0)]);
  const [activeLayerId, setActiveLayerId] = useState<string>('');
  const [format, setFormat] = useState<OutputFormatChoice>('original');
  const [quality, setQuality] = useState<number>(92);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const draggingLayerRef = useRef<string | null>(null);

  useEffect(() => {
    if (!activeLayerId && layers.length > 0) {
      setActiveLayerId(layers[0].id);
    }
  }, [activeLayerId, layers]);

  useEffect(() => {
    return () => {
      if (imageInfoRef.current?.previewUrl) URL.revokeObjectURL(imageInfoRef.current.previewUrl);
    };
  }, []);

  const fontLabelByValue: Record<string, string> = {
    'Inter, system-ui, sans-serif': t('fontInter', 'Inter / Clean Sans'),
    'Impact, "Arial Black", sans-serif': t('fontImpact', 'Impact / Meme Display'),
    'Georgia, "Times New Roman", serif': t('fontGeorgia', 'Georgia / Classic Serif'),
    '"Courier New", monospace': t('fontCourier', 'Courier / Monospace'),
    '"Trebuchet MS", sans-serif': t('fontTrebuchet', 'Trebuchet / Rounded Sans'),
  };

  const activeLayer = layers.find((l) => l.id === activeLayerId) || layers[0];

  const updateActiveLayer = (patch: Partial<TextLayer>) => {
    if (!activeLayer) return;
    setLayers((prev) =>
      prev.map((l) => (l.id === activeLayer.id ? { ...l, ...patch } : l))
    );
  };

  const renderTextImage = useCallback(
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

      for (const layer of layers) {
        if (!layer.text.trim()) continue;
        const fontPx = Math.max(12, Math.round((layer.fontSizePct / 100) * outW));
        const lines = layer.text.split('\n');
        const lineHeight = fontPx * 1.22;

        ctx.save();
        ctx.translate(layer.x * outW, layer.y * outH);
        ctx.rotate((layer.rotation * Math.PI) / 180);
        ctx.font = `${layer.italic ? 'italic ' : ''}${layer.bold ? '700 ' : '400 '}${fontPx}px ${
          layer.fontFamily
        }`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        if (layer.shadow) {
          ctx.shadowColor = 'rgba(0, 0, 0, 0.48)';
          ctx.shadowBlur = Math.max(3, Math.round(fontPx * 0.16));
          ctx.shadowOffsetY = Math.max(1, Math.round(fontPx * 0.06));
        }

        const startY = -((lines.length - 1) * lineHeight) / 2;
        lines.forEach((line, idx) => {
          const ly = startY + idx * lineHeight;
          if (layer.outline && layer.outlineWidth > 0) {
            ctx.lineJoin = 'round';
            ctx.strokeStyle = layer.outlineColor;
            ctx.lineWidth = Math.max(1, (layer.outlineWidth / 100) * fontPx * 4);
            ctx.strokeText(line, 0, ly);
          }
          ctx.fillStyle = layer.color;
          ctx.fillText(line, 0, ly);
        });
        ctx.restore();
      }
    },
    [imageInfo, layers]
  );

  useEffect(() => {
    if (!imageInfo || !previewCanvasRef.current) return;
    const scale = Math.min(1, 900 / Math.max(imageInfo.width, imageInfo.height));
    const pw = Math.max(1, Math.round(imageInfo.width * scale));
    const ph = Math.max(1, Math.round(imageInfo.height * scale));
    renderTextImage(previewCanvasRef.current, pw, ph);
  }, [imageInfo, renderTextImage]);

  const handleCanvasPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = previewCanvasRef.current;
    if (!canvas || layers.length === 0) return;
    const rect = canvas.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;

    // Select closest layer within click
    let closest = layers[0];
    let minDist = Infinity;
    for (const l of layers) {
      const d = Math.hypot(l.x - nx, l.y - ny);
      if (d < minDist) {
        minDist = d;
        closest = l;
      }
    }
    setActiveLayerId(closest.id);
    draggingLayerRef.current = closest.id;
  };

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const dragId = draggingLayerRef.current;
      const canvas = previewCanvasRef.current;
      if (!dragId || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const nx = Math.max(0.03, Math.min(0.97, (e.clientX - rect.left) / rect.width));
      const ny = Math.max(0.03, Math.min(0.97, (e.clientY - rect.top) / rect.height));
      setLayers((prev) => prev.map((l) => (l.id === dragId ? { ...l, x: nx, y: ny } : l)));
    };
    const onUp = () => {
      draggingLayerRef.current = null;
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
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorUnableToLoadImage', 'Unable to load image.'));
    }
  };

  const handleClear = () => {
    if (imageInfoRef.current?.previewUrl) URL.revokeObjectURL(imageInfoRef.current.previewUrl);
    setSourceFile(null);
    setImageInfo(null);
  };

  const handleAddLayer = () => {
    const next = newDefaultLayer(layers.length);
    setLayers((prev) => [...prev, next]);
    setActiveLayerId(next.id);
  };

  const handleDeleteLayer = (id: string) => {
    setLayers((prev) => {
      const filtered = prev.filter((l) => l.id !== id);
      if (filtered.length === 0) {
        const fresh = newDefaultLayer(0);
        setActiveLayerId(fresh.id);
        return [fresh];
      }
      if (activeLayerId === id) {
        setActiveLayerId(filtered[0].id);
      }
      return filtered;
    });
  };

  const handleDownload = async () => {
    if (!sourceFile || !imageInfo) return;
    setIsExporting(true);
    setError(null);
    try {
      const { mimeType, extension } = resolveOutputFormat(format, imageInfo.detectedType);
      const outCanvas = document.createElement('canvas');
      renderTextImage(outCanvas, imageInfo.width, imageInfo.height);
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
          triggerDownload(blob, `${base}_text${extension}`);
          return;
        }
      }
      const blob = await canvasToBlob(outCanvas, mimeType, quality / 100);
      const base = sanitizeFilename(getBaseFilename(sourceFile.name));
      triggerDownload(blob, `${base}_text${extension}`);
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
            title={t('uploadTitle', 'Drop an image to add custom text overlays')}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Type className="w-3.5 h-3.5 text-blue-600" />
                  {t('dragAnyText', 'Drag Any Text Directly on Image')}
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
                  onPointerDown={handleCanvasPointerDown}
                  className="max-w-full max-h-[490px] w-auto h-auto object-contain block cursor-move touch-none"
                />
              </div>

              <div className="flex justify-between text-xs text-slate-500 font-mono">
                <span className="truncate max-w-xs">{sourceFile?.name}</span>
                <span>
                  {imageInfo.width}×{imageInfo.height}px · {sourceFile ? formatBytes(sourceFile.size) : ''}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              {/* Layer Tabs */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {layers.map((layer, idx) => (
                    <button
                      key={layer.id}
                      type="button"
                      onClick={() => setActiveLayerId(layer.id)}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-lg border cursor-pointer ${
                        layer.id === activeLayer?.id
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      {t('textLayer', 'Text {index}').replace('{index}', String(idx + 1))}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleAddLayer}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{t('add', 'Add')}</span>
                  </button>
                  {layers.length > 1 && activeLayer && (
                    <button
                      type="button"
                      onClick={() => handleDeleteLayer(activeLayer.id)}
                      className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg cursor-pointer"
                      aria-label={t('deleteActiveTextLayer', 'Delete active text layer')}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {activeLayer && (
                <>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      {t('textContent', 'Text Content (multi-line supported)')}
                    </label>
                    <textarea
                      rows={2}
                      value={activeLayer.text}
                      onChange={(e) => updateActiveLayer({ text: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">{t('font', 'Font')}</label>
                      <select
                        value={activeLayer.fontFamily}
                        onChange={(e) => updateActiveLayer({ fontFamily: e.target.value })}
                        className="w-full px-2.5 py-2 text-xs border border-slate-300 rounded-xl bg-white"
                      >
                        {FONT_OPTIONS.map((f) => (
                          <option key={f.label} value={f.value}>
                            {fontLabelByValue[f.value] ?? f.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-end gap-2">
                      <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 border border-slate-200 rounded-xl px-2.5 py-1.5">
                        <input
                          type="color"
                          value={activeLayer.color}
                          onChange={(e) => updateActiveLayer({ color: e.target.value })}
                          className="w-6 h-6 rounded border-0 cursor-pointer p-0"
                        />
                        <span>{t('fill', 'Fill')}</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => updateActiveLayer({ bold: !activeLayer.bold })}
                        className={`p-2 rounded-xl border cursor-pointer ${
                          activeLayer.bold
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-slate-700 border-slate-200'
                        }`}
                        aria-label={t('toggleBold', 'Toggle Bold')}
                      >
                        <Bold className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => updateActiveLayer({ italic: !activeLayer.italic })}
                        className={`p-2 rounded-xl border cursor-pointer ${
                          activeLayer.italic
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-slate-700 border-slate-200'
                        }`}
                        aria-label={t('toggleItalic', 'Toggle Italic')}
                      >
                        <Italic className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700">{t('size', 'Size')}</span>
                        <span className="font-mono text-blue-600">{activeLayer.fontSizePct}%</span>
                      </div>
                      <input
                        type="range"
                        min={2}
                        max={22}
                        value={activeLayer.fontSizePct}
                        onChange={(e) => updateActiveLayer({ fontSizePct: parseInt(e.target.value, 10) })}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700">{t('rotation', 'Rotation')}</span>
                        <span className="font-mono text-blue-600">{activeLayer.rotation}°</span>
                      </div>
                      <input
                        type="range"
                        min={-180}
                        max={180}
                        value={activeLayer.rotation}
                        onChange={(e) => updateActiveLayer({ rotation: parseInt(e.target.value, 10) })}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={activeLayer.outline}
                          onChange={(e) => updateActiveLayer({ outline: e.target.checked })}
                          className="w-4 h-4 accent-blue-600 rounded"
                        />
                        <span>{t('textOutline', 'Text Outline')}</span>
                      </label>
                      {activeLayer.outline && (
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            value={activeLayer.outlineColor}
                            onChange={(e) => updateActiveLayer({ outlineColor: e.target.value })}
                            className="w-6 h-6 rounded border border-slate-300 cursor-pointer p-0"
                          />
                          <input
                            type="range"
                            min={1}
                            max={10}
                            value={activeLayer.outlineWidth}
                            onChange={(e) => updateActiveLayer({ outlineWidth: parseInt(e.target.value, 10) })}
                            className="w-20 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      )}
                    </div>

                    <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
                      <span className="text-xs font-semibold text-slate-700">{t('dropShadow', 'Drop Shadow')}</span>
                      <input
                        type="checkbox"
                        checked={activeLayer.shadow}
                        onChange={(e) => updateActiveLayer({ shadow: e.target.checked })}
                        className="w-4 h-4 accent-blue-600 rounded"
                      />
                    </label>
                  </div>
                </>
              )}

              <div className="pt-3 border-t border-slate-100 space-y-3">
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
                  <span>{isExporting ? t('exporting', 'Exporting...') : t('downloadImageWithText', 'Download Image with Text')}</span>
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
