import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Download,
  RotateCcw,
  SplitSquareVertical,
  Trash2,
  Sun,
  Contrast,
  Palette,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import type { ToolDefinition } from '../data/tools';
import type { SupportedLang } from '../locales/config';
import type { ToolPageLayoutStrings } from './ToolPageLayout';
import type { UploadZoneStrings } from './UploadZone';
import type { ComparisonModalStrings } from './ComparisonModal';
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
import { ToolPageLayout } from './ToolPageLayout';
import { UploadZone } from './UploadZone';
import { ComparisonModal } from './ComparisonModal';
import { OutputFormatChoice, ImageItem } from '../types';
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  LoadedImageInfo,
  canvasToBlob,
  loadExtendedImageInfo,
} from '../utils/imageProcessing';
import { resolveOutputFormat } from '../utils/compressor';
import { applyToneAdjustmentsToCanvas } from '../utils/canvasEffects';
import { formatBytes, getBaseFilename, sanitizeFilename } from '../utils/formatters';
import { triggerDownload } from '../utils/zip';

export type ToneMode = 'brightness' | 'contrast' | 'saturation';

interface TonePreset {
  label: string;
  value: number;
}

const MODE_CONFIG: Record<
  ToneMode,
  {
    label: string;
    Icon: React.ComponentType<{ className?: string }>;
    presets: TonePreset[];
    minLabel: string;
    maxLabel: string;
    suffix: string;
  }
> = {
  brightness: {
    label: 'Brightness',
    Icon: Sun,
    presets: [
      { label: 'Dark (-30%)', value: -30 },
      { label: 'Dim (-15%)', value: -15 },
      { label: 'Original (0%)', value: 0 },
      { label: 'Bright (+15%)', value: 15 },
      { label: 'Vibrant (+30%)', value: 30 },
      { label: 'High Key (+50%)', value: 50 },
    ],
    minLabel: '-100% Darker',
    maxLabel: '+100% Brighter',
    suffix: 'brightness',
  },
  contrast: {
    label: 'Contrast',
    Icon: Contrast,
    presets: [
      { label: 'Soft (-25%)', value: -25 },
      { label: 'Muted (-10%)', value: -10 },
      { label: 'Original (0%)', value: 0 },
      { label: 'Crisp (+20%)', value: 20 },
      { label: 'Punchy (+40%)', value: 40 },
      { label: 'Dramatic (+70%)', value: 70 },
    ],
    minLabel: '-100% Flat',
    maxLabel: '+100% High Contrast',
    suffix: 'contrast',
  },
  saturation: {
    label: 'Saturation',
    Icon: Palette,
    presets: [
      { label: 'Grayscale (-100%)', value: -100 },
      { label: 'Muted (-40%)', value: -40 },
      { label: 'Original (0%)', value: 0 },
      { label: 'Rich (+30%)', value: 30 },
      { label: 'Vivid (+60%)', value: 60 },
      { label: 'Hyper (+90%)', value: 90 },
    ],
    minLabel: '-100% Grayscale',
    maxLabel: '+100% Vivid',
    suffix: 'saturation',
  },
};

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

interface ToneEditorToolProps {
  tool?: ToolDefinition;
  mode: ToneMode;
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
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

// English slug per mode — only used for the English tool-registry fallback
// when no `tool` prop is passed. The localized strings table is NOT picked by
// mode: App passes the per-tool bundle (`zhStrings` / `jaStrings` / `koStrings` / `idStrings` / `ruStrings` / `deStrings` / `itStrings` / `esStrings` / `ptStrings` / `frStrings`) selected by slug.
const MODE_SLUG: Record<ToneMode, string> = {
  brightness: '/image-brightness-editor',
  contrast: '/image-contrast-editor',
  saturation: '/image-saturation-editor',
};

// Preset labels are matched by preset VALUE (not label text). Batch 2
// (brightness) and Batch 3 (contrast/saturation) tables use different key
// names for the same slots, so each value lists its candidate keys in order;
// the per-tool table passed via the active language's strings prop decides which one resolves.
const PRESET_KEYS_BY_VALUE: Record<number, string[]> = {
  [-100]: ['presetGrayscale'],
  [-40]: ['presetMuted'],
  [-30]: ['presetDark'],
  [-25]: ['presetSoft'],
  [-15]: ['presetDim'],
  [-10]: ['presetMuted'],
  [0]: ['presetOriginal'],
  [15]: ['presetBright'],
  [20]: ['presetCrisp'],
  [30]: ['presetVibrant', 'presetRich'],
  [40]: ['presetPunchy'],
  [50]: ['presetHighKey'],
  [60]: ['presetVivid'],
  [70]: ['presetDramatic'],
  [90]: ['presetHyper'],
};

export const ToneEditorTool: React.FC<ToneEditorToolProps> = ({
  tool,
  mode,
  onNavigate,
  lang,
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
  const activeTool = tool ?? TOOL_BY_SLUG[MODE_SLUG[mode]];
  const cfg = MODE_CONFIG[mode];
  const ModeIcon = cfg.Icon;
  // Active language's page-strings bundle (zh/ja/ko/id/ru/de/it/es/pt/fr); English uses defaults.
  const pageStrings =
    lang === 'zh' ? zhStrings : lang === 'ja' ? jaStrings : lang === 'ko' ? koStrings : lang === 'id' ? idStrings : lang === 'ru' ? ruStrings : lang === 'de' ? deStrings : lang === 'it' ? itStrings : lang === 'pt' ? ptStrings : lang === 'fr' ? frStrings : lang === 'es' ? esStrings : undefined;
  const activeToolUi = pageStrings?.toolUi;
  const t = (key: string, fallback: string) =>
    activeToolUi ? (activeToolUi[key] as string | undefined) ?? fallback : fallback;
  // Same-slot keys that differ between the Batch 2 (brightness) and Batch 3
  // (contrast/saturation) tables — try both; the passed table decides.
  const t2 = (keyA: string, keyB: string, fallback: string) =>
    activeToolUi
      ? (activeToolUi[keyA] as string | undefined) ??
        (activeToolUi[keyB] as string | undefined) ??
        fallback
      : fallback;
  const presetLabel = (preset: TonePreset) => {
    const keys = PRESET_KEYS_BY_VALUE[preset.value] ?? [];
    if (activeToolUi) {
      for (const key of keys) {
        const val = activeToolUi[key] as string | undefined;
        if (val) return val;
      }
    }
    return preset.label;
  };

  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [imageInfo, setImageInfo] = useState<LoadedImageInfo | null>(null);
  const imageInfoRef = useRef<LoadedImageInfo | null>(null);
  imageInfoRef.current = imageInfo;

  const [value, setValue] = useState<number>(mode === 'brightness' ? 15 : mode === 'contrast' ? 20 : 25);
  const [format, setFormat] = useState<OutputFormatChoice>('original');
  const [quality, setQuality] = useState<number>(90);
  const [viewCompare, setViewCompare] = useState<'after' | 'before' | 'split'>('after');
  const [splitPercent, setSplitPercent] = useState<number>(50);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalItem, setModalItem] = useState<ImageItem | null>(null);

  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return () => {
      if (imageInfoRef.current?.previewUrl) {
        URL.revokeObjectURL(imageInfoRef.current.previewUrl);
      }
    };
  }, []);

  useEffect(() => {
    if (!imageInfo || !previewCanvasRef.current) return;
    applyToneAdjustmentsToCanvas(imageInfo.img, previewCanvasRef.current, {
      brightness: mode === 'brightness' ? value : 0,
      contrast: mode === 'contrast' ? value : 0,
      saturation: mode === 'saturation' ? value : 0,
      maxPreviewDimension: 1000,
    });
  }, [imageInfo, mode, value]);

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
    setError(null);
  };

  const buildFullResBlob = useCallback(async () => {
    if (!sourceFile || !imageInfo) return null;
    const { mimeType, extension } = resolveOutputFormat(format, imageInfo.detectedType);
    const outCanvas = document.createElement('canvas');
    applyToneAdjustmentsToCanvas(imageInfo.img, outCanvas, {
      brightness: mode === 'brightness' ? value : 0,
      contrast: mode === 'contrast' ? value : 0,
      saturation: mode === 'saturation' ? value : 0,
    });

    if (mimeType === 'image/jpeg') {
      const jpgCanvas = document.createElement('canvas');
      jpgCanvas.width = outCanvas.width;
      jpgCanvas.height = outCanvas.height;
      const ctx = jpgCanvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, jpgCanvas.width, jpgCanvas.height);
        ctx.drawImage(outCanvas, 0, 0);
        const blob = await canvasToBlob(jpgCanvas, mimeType, quality / 100);
        return { blob, mimeType, extension };
      }
    }

    const blob = await canvasToBlob(outCanvas, mimeType, quality / 100);
    return { blob, mimeType, extension };
  }, [sourceFile, imageInfo, format, mode, value, quality]);

  const handleDownload = async () => {
    if (!sourceFile || !imageInfo) return;
    setIsExporting(true);
    setError(null);
    try {
      const result = await buildFullResBlob();
      if (!result) return;
      const base = sanitizeFilename(getBaseFilename(sourceFile.name));
      triggerDownload(result.blob, `${base}_${cfg.suffix}${result.extension}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorExportFailed', 'Failed to export adjusted image.'));
    } finally {
      setIsExporting(false);
    }
  };

  const handleOpenComparison = async () => {
    if (!sourceFile || !imageInfo) return;
    setIsExporting(true);
    try {
      const result = await buildFullResBlob();
      if (!result) return;
      const afterUrl = URL.createObjectURL(result.blob);
      const base = sanitizeFilename(getBaseFilename(sourceFile.name));
      setModalItem({
        id: 'tone-compare',
        file: sourceFile,
        name: sourceFile.name,
        originalSize: sourceFile.size,
        originalWidth: imageInfo.width,
        originalHeight: imageInfo.height,
        originalType: imageInfo.detectedType,
        originalPreviewUrl: imageInfo.previewUrl,
        hasAlpha: imageInfo.hasAlpha,
        compressedBlob: result.blob,
        compressedPreviewUrl: afterUrl,
        compressedSize: result.blob.size,
        compressedWidth: imageInfo.width,
        compressedHeight: imageInfo.height,
        outputType: result.mimeType,
        outputExtension: result.extension,
        outputFilename: `${base}_${cfg.suffix}${result.extension}`,
        quality,
        status: 'done',
        errorMessage: null,
        spaceSaved: Math.max(0, sourceFile.size - result.blob.size),
        compressionPercentage: 0,
      });
    } finally {
      setIsExporting(false);
    }
  };

  const closeComparisonModal = () => {
    if (modalItem?.compressedPreviewUrl) {
      URL.revokeObjectURL(modalItem.compressedPreviewUrl);
    }
    setModalItem(null);
  };

  return (
    <ToolPageLayout
      tool={activeTool}
      onNavigate={onNavigate}
      lang={lang}
      ui={pageStrings?.layoutUi}
      canonicalPath={
        lang === 'zh'
          ? toChinesePath(activeTool.slug)
          : lang === 'ja'
          ? toJapanesePath(activeTool.slug)
          : lang === 'ko'
            ? toKoreanPath(activeTool.slug)
            : lang === 'id'
              ? toIndonesianPath(activeTool.slug)
              : lang === 'ru'
                ? toRussianPath(activeTool.slug)
                : lang === 'de'
                  ? toGermanPath(activeTool.slug)
          : lang === 'it'
            ? toItalianPath(activeTool.slug)
            : lang === 'pt'
              ? toPortuguesePath(activeTool.slug)
              : lang === 'fr'
                ? toFrenchPath(activeTool.slug)
                : lang === 'es'
                  ? toSpanishPath(activeTool.slug)
                  : undefined
      }
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
            title={t('uploadTitle', `Drop an image to adjust ${cfg.label.toLowerCase()}`)}
            strings={pageStrings?.uploadZone}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Preview Panel */}
            <div className="lg:col-span-7 bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-4 sm:p-5 shadow-[var(--shadow)] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex p-1 bg-[var(--surface-2)] border border-[var(--line)] rounded-[11px] gap-1">
                  {(['after', 'before', 'split'] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setViewCompare(tab)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-[8px] capitalize cursor-pointer transition-colors ${
                        viewCompare === tab
                          ? 'btn-purple-grad shadow-xs'
                          : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
                      }`}
                    >
                      {tab === 'split'
                        ? t2('viewSplitCompare', 'tabSplitCompare', 'Split Compare')
                        : tab === 'after'
                          ? t2('viewAfter', 'tabAfter', 'after')
                          : t2('viewBefore', 'tabBefore', 'before')}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleOpenComparison}
                    disabled={isExporting}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[var(--ink-2)] bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#c4b5fd] hover:text-[#7c3aed] dark:hover:text-[#c4b5fd] rounded-[11px] cursor-pointer transition-colors"
                  >
                    <SplitSquareVertical className="w-3.5 h-3.5 text-[#7c3aed] dark:text-[#a78bfa]" />
                    <span>{t('fullscreenCompare', 'Fullscreen Compare')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="p-2 text-[var(--ink-3)] hover:text-[#dc2626] hover:bg-[#fee2e2] dark:hover:bg-[#ef4444]/15 dark:hover:text-[#fca5a5] rounded-[11px] cursor-pointer transition-colors"
                    title={t('removeImage', 'Remove image')}
                    aria-label={t('removeImage', 'Remove image')}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Image Viewport */}
              <div
                className="relative rounded-[11px] overflow-hidden border border-[var(--line)] bg-[var(--surface-2)] flex items-center justify-center min-h-[280px] max-h-[520px]"
                style={{
                  backgroundImage:
                    'linear-gradient(45deg, rgba(148,163,184,0.16) 25%, transparent 25%), linear-gradient(-45deg, rgba(148,163,184,0.16) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(148,163,184,0.16) 75%), linear-gradient(-45deg, transparent 75%, rgba(148,163,184,0.16) 75%)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                }}
              >
                <canvas
                  ref={previewCanvasRef}
                  className={`max-w-full max-h-[500px] w-auto h-auto object-contain block ${
                    viewCompare === 'before' ? 'hidden' : ''
                  }`}
                />
                {viewCompare === 'before' && (
                  <img
                    src={imageInfo.previewUrl}
                    alt={t('originalPreviewAlt', 'Original preview')}
                    className="max-w-full max-h-[500px] w-auto h-auto object-contain block"
                  />
                )}
                {viewCompare === 'split' && (
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - splitPercent}% 0 0)` }}
                  >
                    <img
                      src={imageInfo.previewUrl}
                      alt={t('originalComparisonAlt', 'Original comparison')}
                      className="max-w-full max-h-[500px] w-auto h-auto object-contain block"
                    />
                  </div>
                )}
                {viewCompare === 'split' && (
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md pointer-events-none"
                    style={{ left: `${splitPercent}%` }}
                  />
                )}
              </div>

              {viewCompare === 'split' && (
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-[var(--ink-3)]">{t2('beforeLabel', 'splitBeforeLabel', 'Before')}</span>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={splitPercent}
                    onChange={(e) => setSplitPercent(parseInt(e.target.value, 10))}
                    className="flex-1 h-2 bg-[var(--line)] rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-xs font-medium text-[#7c3aed] dark:text-[#a78bfa]">{t2('afterLabel', 'splitAfterLabel', 'After')}</span>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between text-xs text-[var(--ink-3)] font-mono">
                <span className="truncate max-w-xs">{sourceFile?.name}</span>
                <span>
                  {imageInfo.width}×{imageInfo.height}px · {sourceFile ? formatBytes(sourceFile.size) : ''}
                </span>
              </div>
            </div>

            {/* Controls Panel */}
            <div className="lg:col-span-5 bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 sm:p-6 shadow-[var(--shadow)] space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
                  <ModeIcon className="w-4 h-4 text-[#7c3aed] dark:text-[#a78bfa]" />
                  <span>{t2('brightnessControls', 'controlsHeading', `${cfg.label} Controls`)}</span>
                </h2>
                <button
                  type="button"
                  onClick={() => setValue(0)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:underline cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t('reset', 'Reset')}</span>
                </button>
              </div>

              {/* Slider */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-[var(--ink-2)]">{t2('brightnessLevel', 'levelLabel', `${cfg.label} Level`)}</span>
                  <span className="font-mono font-bold text-[#7c3aed] dark:text-[#a78bfa] tabular-nums">
                    {value > 0 ? `+${value}%` : `${value}%`}
                  </span>
                </div>
                <input
                  type="range"
                  min={-100}
                  max={100}
                  value={value}
                  onChange={(e) => setValue(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-[var(--line)] rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[var(--ink-3)] mt-1">
                  <span>{t('minLabel', cfg.minLabel)}</span>
                  <span>0%</span>
                  <span>{t('maxLabel', cfg.maxLabel)}</span>
                </div>
              </div>

              {/* Presets */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)] block mb-2">
                  {t('quickPresets', 'Quick Presets')}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {cfg.presets.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setValue(preset.value)}
                      className={`px-3 py-2 text-xs font-semibold rounded-[11px] border text-left transition-colors cursor-pointer ${
                        value === preset.value
                          ? 'bg-[#ede9fe] dark:bg-[#7c3aed]/25 border-[#7c3aed] dark:border-[#8b5cf6] text-[#6d28d9] dark:text-[#ddd6fe]'
                          : 'bg-[var(--surface-2)] border-[var(--line)] text-[var(--ink-2)] hover:border-[var(--line-strong)] hover:text-[var(--ink)]'
                      }`}
                    >
                      {presetLabel(preset)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Output Format & Quality */}
              <div className="pt-4 border-t border-[var(--line)] space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)] block mb-2">
                    {t('outputFormat', 'Output Format')}
                  </span>
                  <div className="grid grid-cols-4 gap-1 p-1 bg-[var(--surface-2)] border border-[var(--line)] rounded-[11px]">
                    {(['original', 'jpeg', 'png', 'webp'] as OutputFormatChoice[]).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => setFormat(fmt)}
                        className={`py-1.5 text-xs font-semibold rounded-[8px] cursor-pointer transition-colors ${
                          format === fmt
                            ? 'btn-purple-grad shadow-xs'
                            : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
                        }`}
                      >
                        {fmt === 'original' ? t('formatOriginal', 'Original') : fmt === 'jpeg' ? t('formatJpg', 'JPG') : fmt.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {format !== 'png' && (
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-semibold text-[var(--ink-2)]">{t('quality', 'Quality')}</span>
                      <span className="font-mono font-bold text-[#7c3aed] dark:text-[#a78bfa]">{quality}%</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={100}
                      value={quality}
                      onChange={(e) => setQuality(parseInt(e.target.value, 10))}
                      className="w-full h-2 bg-[var(--line)] rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={isExporting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 btn-purple-grad text-sm font-semibold shadow-sm cursor-pointer disabled:opacity-60"
                >
                  {isExporting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Download className="w-4 h-4" />
                  )}
                  <span>{isExporting ? t('exporting', 'Exporting...') : t('downloadEditedImage', 'Download Edited Image')}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-start gap-2 p-3.5 pastel-card-14 border text-[#b91c1c] dark:text-[#fca5a5] text-sm rounded-[11px]">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>

      {modalItem && (
        <ComparisonModal
          image={modalItem}
          onClose={closeComparisonModal}
          titlePrefix={t('comparisonTitlePrefix', `${cfg.label} Comparison`)}
          beforeLabel={pageStrings?.comparisonModal.beforeLabel}
          afterLabel={t('comparisonAfterLabel', 'Edited (After)')}
          closeLabel={pageStrings?.comparisonModal.closeLabel}
          instruction={pageStrings?.comparisonModal.instruction}
          sliderLabel={pageStrings?.comparisonModal.sliderLabel}
          sideBySideLabel={pageStrings?.comparisonModal.sideBySideLabel}
          zoomInLabel={pageStrings?.comparisonModal.zoomInLabel}
          zoomOutLabel={pageStrings?.comparisonModal.zoomOutLabel}
          originalLabel={pageStrings?.comparisonModal.originalLabel}
          outputLabel={pageStrings?.comparisonModal.outputLabel}
          reductionLabel={pageStrings?.comparisonModal.reductionLabel}
          sizeChangeLabel={pageStrings?.comparisonModal.sizeChangeLabel}
          qualityLabel={pageStrings?.comparisonModal.qualityLabel}
          formatLabel={pageStrings?.comparisonModal.formatLabel}
          modalAriaLabel={pageStrings?.comparisonModal.modalAriaLabel}
          altCompressed={pageStrings?.comparisonModal.altCompressed}
          altOriginal={pageStrings?.comparisonModal.altOriginal}
          altProcessed={pageStrings?.comparisonModal.altProcessed}
        />
      )}
    </ToolPageLayout>
  );
};
