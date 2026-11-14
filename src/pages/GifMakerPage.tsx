import React, { useState, useEffect, useRef } from 'react';
import {
  Film,
  Download,
  Trash2,
  ArrowUp,
  ArrowDown,
  Copy,
  Play,
  Pause,
  Plus,
  Loader2,
  AlertCircle,
  AlertTriangle,
  Lock,
  Unlock,
  GripVertical,
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
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  loadExtendedImageInfo,
} from '../utils/imageProcessing';
import {
  GifEncodeResult,
  GifFitMode,
  GifLoopMode,
  encodeAnimatedGif,
} from '../utils/gifMaker';
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

interface GifMakerPageProps {
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

interface FrameItem {
  id: string;
  file: File;
  name: string;
  img: HTMLImageElement;
  previewUrl: string;
  width: number;
  height: number;
  customDelayMs: number | null; // null = inherit global delay
}

export const GifMakerPage: React.FC<GifMakerPageProps> = ({
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
  const activeTool = tool ?? TOOL_BY_SLUG['/gif-maker'];
  const t = (key: string, fallback: string) => {
    const table =
      lang === 'zh' ? zhStrings?.toolUi : lang === 'ja' ? jaStrings?.toolUi : lang === 'ko' ? koStrings?.toolUi : lang === 'id' ? idStrings?.toolUi : lang === 'ru' ? ruStrings?.toolUi : lang === 'de' ? deStrings?.toolUi : lang === 'it' ? itStrings?.toolUi : lang === 'pt' ? ptStrings?.toolUi : lang === 'fr' ? frStrings?.toolUi : lang === 'es' ? esStrings?.toolUi : undefined;
    return table ? (table[key] as string | undefined) ?? fallback : fallback;
  };
  const SIZE_PRESETS = [
    { label: t('sizePreset480', '480px'), maxSide: 480 },
    { label: t('sizePreset640', '640px'), maxSide: 640 },
    { label: t('sizePreset800', '800px'), maxSide: 800 },
    { label: t('sizePresetOriginal', 'Original'), maxSide: 0 },
  ];

  const FPS_PRESETS = [
    { label: t('fpsPreset1', '1 FPS (1000ms)'), ms: 1000 },
    { label: t('fpsPreset2', '2 FPS (500ms)'), ms: 500 },
    { label: t('fpsPreset5', '5 FPS (200ms)'), ms: 200 },
    { label: t('fpsPreset10', '10 FPS (100ms)'), ms: 100 },
  ];

  const [frames, setFrames] = useState<FrameItem[]>([]);
  const framesRef = useRef<FrameItem[]>([]);
  framesRef.current = frames;

  const [globalDelayMs, setGlobalDelayMs] = useState<number>(500);
  const [loopMode, setLoopMode] = useState<GifLoopMode>('forever');
  const [totalPlays, setTotalPlays] = useState<number>(3);
  const [outWidth, setOutWidth] = useState<number>(640);
  const [outHeight, setOutHeight] = useState<number>(480);
  const [lockAspect, setLockAspect] = useState<boolean>(true);
  const [fitMode, setFitMode] = useState<GifFitMode>('contain');
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [quality, setQuality] = useState<number>(80);

  const [isPlayingPreview, setIsPlayingPreview] = useState<boolean>(true);
  const [activePreviewIdx, setActivePreviewIdx] = useState<number>(0);

  const [isEncoding, setIsEncoding] = useState<boolean>(false);
  const [encodeProgress, setEncodeProgress] = useState<number>(0);
  const [encodedGif, setEncodedGif] = useState<GifEncodeResult | null>(null);
  const encodedGifRef = useRef<GifEncodeResult | null>(null);
  encodedGifRef.current = encodedGif;

  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const addInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      framesRef.current.forEach((f) => URL.revokeObjectURL(f.previewUrl));
      if (encodedGifRef.current?.previewUrl) URL.revokeObjectURL(encodedGifRef.current.previewUrl);
    };
  }, []);

  const firstFrameAspect =
    frames.length > 0 && frames[0].height > 0 ? frames[0].width / frames[0].height : 4 / 3;

  // Live animation preview playback on canvas when encodedGif isn't active or user scrubs
  useEffect(() => {
    if (frames.length === 0 || !isPlayingPreview) return;
    const safeIdx = activePreviewIdx % frames.length;
    const delay = Math.max(40, frames[safeIdx]?.customDelayMs ?? globalDelayMs);
    const timer = window.setTimeout(() => {
      setActivePreviewIdx((prev) => (prev + 1) % frames.length);
    }, delay);
    return () => window.clearTimeout(timer);
  }, [frames, activePreviewIdx, isPlayingPreview, globalDelayMs]);

  useEffect(() => {
    if (frames.length === 0 || !previewCanvasRef.current || encodedGif) return;
    const canvas = previewCanvasRef.current;
    const safeIdx = activePreviewIdx % frames.length;
    const frame = frames[safeIdx];
    if (!frame) return;

    const previewScale = Math.min(1, 720 / Math.max(outWidth, outHeight));
    const pw = Math.max(16, Math.round(outWidth * previewScale));
    const ph = Math.max(16, Math.round(outHeight * previewScale));
    canvas.width = pw;
    canvas.height = ph;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = backgroundColor || '#ffffff';
    ctx.fillRect(0, 0, pw, ph);
    const scale =
      fitMode === 'cover'
        ? Math.max(pw / frame.width, ph / frame.height)
        : Math.min(pw / frame.width, ph / frame.height);
    const dw = frame.width * scale;
    const dh = frame.height * scale;
    ctx.drawImage(frame.img, (pw - dw) / 2, (ph - dh) / 2, dw, dh);
  }, [frames, activePreviewIdx, outWidth, outHeight, fitMode, backgroundColor, encodedGif]);

  const invalidateEncodedGif = () => {
    if (encodedGifRef.current?.previewUrl) {
      URL.revokeObjectURL(encodedGifRef.current.previewUrl);
    }
    setEncodedGif(null);
  };

  const handleFilesSelected = async (files: File[]) => {
    setError(null);
    invalidateEncodedGif();
    const added: FrameItem[] = [];

    for (const file of files) {
      try {
        const info = await loadExtendedImageInfo(file);
        added.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
          file,
          name: file.name,
          img: info.img,
          previewUrl: info.previewUrl,
          width: info.width,
          height: info.height,
          customDelayMs: null,
        });
      } catch (err) {
        setError(
          err instanceof Error
            ? t('skippedFile', 'Skipped "{name}": {error}')
                .replace('{name}', file.name)
                .replace('{error}', err.message)
            : t('skippedFileNoError', 'Skipped "{name}".').replace('{name}', file.name)
        );
      }
    }

    if (added.length === 0) return;

    setFrames((prev) => {
      const next = [...prev, ...added];
      if (prev.length === 0 && added[0]) {
        const w = added[0].width;
        const h = added[0].height;
        const scale = Math.min(1, 640 / Math.max(w, h));
        setOutWidth(Math.max(16, Math.round(w * scale)));
        setOutHeight(Math.max(16, Math.round(h * scale)));
      }
      return next;
    });
  };

  const moveFrame = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= frames.length || fromIndex === toIndex) return;
    invalidateEncodedGif();
    setFrames((prev) => {
      const copy = [...prev];
      const [moved] = copy.splice(fromIndex, 1);
      copy.splice(toIndex, 0, moved);
      return copy;
    });
  };

  const duplicateFrame = (index: number) => {
    const src = frames[index];
    if (!src) return;
    invalidateEncodedGif();
    const copyUrl = URL.createObjectURL(src.file);
    const clone: FrameItem = {
      ...src,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      previewUrl: copyUrl,
    };
    setFrames((prev) => {
      const next = [...prev];
      next.splice(index + 1, 0, clone);
      return next;
    });
  };

  const removeFrame = (id: string) => {
    invalidateEncodedGif();
    setFrames((prev) => {
      const target = prev.find((f) => f.id === id);
      if (target) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((f) => f.id !== id);
    });
  };

  const clearAll = () => {
    invalidateEncodedGif();
    frames.forEach((f) => URL.revokeObjectURL(f.previewUrl));
    setFrames([]);
    setActivePreviewIdx(0);
    setError(null);
  };

  const applySizePreset = (maxSide: number) => {
    invalidateEncodedGif();
    const refW = frames[0]?.width || 640;
    const refH = frames[0]?.height || 480;
    if (maxSide === 0) {
      setOutWidth(Math.min(2000, refW));
      setOutHeight(Math.min(2000, refH));
      return;
    }
    const scale = maxSide / Math.max(refW, refH);
    setOutWidth(Math.max(16, Math.round(refW * scale)));
    setOutHeight(Math.max(16, Math.round(refH * scale)));
  };

  const handleWidthChange = (val: number) => {
    invalidateEncodedGif();
    const cleanW = Math.max(16, Math.min(2000, val || 16));
    setOutWidth(cleanW);
    if (lockAspect && firstFrameAspect > 0) {
      setOutHeight(Math.max(16, Math.min(2000, Math.round(cleanW / firstFrameAspect))));
    }
  };

  const handleHeightChange = (val: number) => {
    invalidateEncodedGif();
    const cleanH = Math.max(16, Math.min(2000, val || 16));
    setOutHeight(cleanH);
    if (lockAspect && firstFrameAspect > 0) {
      setOutWidth(Math.max(16, Math.min(2000, Math.round(cleanH * firstFrameAspect))));
    }
  };

  const handleGenerateGif = async () => {
    if (frames.length === 0) return;
    setIsEncoding(true);
    setEncodeProgress(0);
    setError(null);
    invalidateEncodedGif();
    try {
      const result = await encodeAnimatedGif(
        frames.map((f) => ({
          img: f.img,
          delayMs: f.customDelayMs ?? globalDelayMs,
        })),
        {
          width: outWidth,
          height: outHeight,
          fitMode,
          backgroundColor,
          loopMode,
          totalPlays,
          quality,
          onProgress: setEncodeProgress,
        }
      );
      setEncodedGif(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorEncodeFailed', 'Failed to encode animated GIF.'));
    } finally {
      setIsEncoding(false);
    }
  };

  const sizeWarningLevel =
    encodedGif && encodedGif.size >= 15 * 1024 * 1024
      ? 'high'
      : encodedGif && encodedGif.size >= 5 * 1024 * 1024
      ? 'medium'
      : null;

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
        {frames.length === 0 ? (
          <UploadZone
            onFilesSelected={handleFilesSelected}
            maxFileSizeMB={20}
            multiple
            accept={EXTENDED_IMAGE_ACCEPT}
            allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
            allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
            supportedFormatsLabel="JPG, PNG, WebP, HEIC, GIF, BMP, SVG"
            title={t('uploadTitle', 'Drop 2 or more images to create an animated GIF')}
            strings={lang === 'zh' ? zhStrings?.uploadZone : lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
          />
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Preview Viewport */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5 text-blue-600" />
                    <span>
                      {encodedGif
                        ? t('generatedGif', 'Generated GIF ({width}×{height}px · {size})')
                            .replace('{width}', String(encodedGif.width))
                            .replace('{height}', String(encodedGif.height))
                            .replace('{size}', formatBytes(encodedGif.size))
                        : t('liveTimingPreview', 'Live Timing Preview · Frame {current}/{total}')
                            .replace('{current}', String((activePreviewIdx % frames.length) + 1))
                            .replace('{total}', String(frames.length))}
                    </span>
                  </span>

                  <div className="flex items-center gap-2">
                    {!encodedGif && frames.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setIsPlayingPreview((p) => !p)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg cursor-pointer"
                      >
                        {isPlayingPreview ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        <span>{isPlayingPreview ? t('pause', 'Pause') : t('play', 'Play')}</span>
                      </button>
                    )}
                    {encodedGif && (
                      <button
                        type="button"
                        onClick={invalidateEncodedGif}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg cursor-pointer"
                      >
                        {t('backToFrameEditor', 'Back to Frame Editor')}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={clearAll}
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer"
                      aria-label={t('clearAllFrames', 'Clear all frames')}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 p-4 flex items-center justify-center min-h-[280px] max-h-[480px]">
                  {encodedGif ? (
                    <img
                      src={encodedGif.previewUrl}
                      alt={t('generatedGifAlt', 'Generated animated GIF')}
                      className="max-w-full max-h-[430px] object-contain rounded shadow-xs"
                    />
                  ) : (
                    <canvas
                      ref={previewCanvasRef}
                      className="max-w-full max-h-[430px] w-auto h-auto object-contain rounded shadow-xs block"
                    />
                  )}
                </div>

                {/* Large GIF Size Warning */}
                {sizeWarningLevel && encodedGif && (
                  <div
                    className={`flex items-start gap-2.5 p-3.5 rounded-xl border text-xs sm:text-sm ${
                      sizeWarningLevel === 'high'
                        ? 'bg-red-50 border-red-200 text-red-800'
                        : 'bg-amber-50 border-amber-200 text-amber-800'
                    }`}
                  >
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">
                        {t('largeGifWarning', 'Large GIF Warning ({size})').replace(
                          '{size}',
                          formatBytes(encodedGif.size)
                        )}
                      </p>
                      <p className="mt-0.5 text-xs opacity-90">
                        {t('largeGifWarningBody', 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.')}
                      </p>
                    </div>
                  </div>
                )}

                {encodedGif && (
                  <button
                    type="button"
                    onClick={() => triggerDownload(encodedGif.blob, 'animated_compressmypic.gif')}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-xl shadow-sm transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t('downloadAnimatedGif', 'Download Animated GIF ({size})').replace('{size}', formatBytes(encodedGif.size))}</span>
                  </button>
                )}
              </div>

              {/* GIF Settings */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
                <h2 className="text-base font-bold text-slate-900">{t('animationSettings', 'Animation Settings')}</h2>

                {/* Global Frame Delay */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-700">{t('defaultFrameDuration', 'Default Frame Duration')}</span>
                    <span className="font-mono font-bold text-blue-600">
                      {t('frameDurationValue', '{ms} ms ({fps} FPS)')
                        .replace('{ms}', String(globalDelayMs))
                        .replace('{fps}', (1000 / Math.max(20, globalDelayMs)).toFixed(1))}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={3000}
                    step={25}
                    value={globalDelayMs}
                    onChange={(e) => {
                      invalidateEncodedGif();
                      setGlobalDelayMs(parseInt(e.target.value, 10));
                    }}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="mt-2 grid grid-cols-2 gap-1.5">
                    {FPS_PRESETS.map((p) => (
                      <button
                        key={p.ms}
                        type="button"
                        onClick={() => {
                          invalidateEncodedGif();
                          setGlobalDelayMs(p.ms);
                        }}
                        className={`py-1.5 text-[11px] font-semibold rounded-lg border cursor-pointer ${
                          globalDelayMs === p.ms
                            ? 'bg-blue-50 border-blue-500 text-blue-700'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Loop Count */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    {t('loopBehavior', 'Loop Behavior')}
                  </span>
                  <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl">
                    {(
                      [
                        { id: 'forever', label: t('loopForever', 'Forever') },
                        { id: 'count', label: t('loopSetLoops', 'Set Loops') },
                        { id: 'once', label: t('loopPlayOnce', 'Play Once') },
                      ] as { id: GifLoopMode; label: string }[]
                    ).map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => {
                          invalidateEncodedGif();
                          setLoopMode(m.id);
                        }}
                        className={`py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                          loopMode === m.id ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                  {loopMode === 'count' && (
                    <div className="mt-2.5 flex items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-semibold text-slate-700">{t('totalPlays', 'Total Plays')}</span>
                      <input
                        type="number"
                        min={2}
                        max={50}
                        value={totalPlays}
                        onChange={(e) => {
                          invalidateEncodedGif();
                          setTotalPlays(Math.max(2, Math.min(50, parseInt(e.target.value, 10) || 2)));
                        }}
                        className="w-20 px-2.5 py-1 text-xs font-mono border border-slate-300 rounded-lg bg-white"
                      />
                    </div>
                  )}
                </div>

                {/* Output Width & Height */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {t('outputDimensions', 'Output Dimensions (px)')}
                    </span>
                    <button
                      type="button"
                      onClick={() => setLockAspect((l) => !l)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 cursor-pointer"
                    >
                      {lockAspect ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                      <span>{lockAspect ? t('ratioLocked', 'Ratio Locked') : t('ratioUnlocked', 'Unlocked')}</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-500 block mb-1">{t('widthLabel', 'Width')}</label>
                      <input
                        type="number"
                        min={16}
                        max={2000}
                        value={outWidth}
                        onChange={(e) => handleWidthChange(parseInt(e.target.value, 10))}
                        className="w-full px-3 py-2 text-sm font-mono border border-slate-300 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-500 block mb-1">{t('heightLabel', 'Height')}</label>
                      <input
                        type="number"
                        min={16}
                        max={2000}
                        value={outHeight}
                        onChange={(e) => handleHeightChange(parseInt(e.target.value, 10))}
                        className="w-full px-3 py-2 text-sm font-mono border border-slate-300 rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {SIZE_PRESETS.map((p) => (
                      <button
                        key={p.label}
                        type="button"
                        onClick={() => applySizePreset(p.maxSide)}
                        className="py-1.5 text-[11px] font-semibold rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 cursor-pointer"
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fit & Quality */}
                <div className="grid grid-cols-2 gap-3 items-center">
                  <div>
                    <span className="text-xs font-semibold text-slate-700 block mb-1">{t('frameFit', 'Frame Fit')}</span>
                    <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-xl">
                      {(['contain', 'cover'] as GifFitMode[]).map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => {
                            invalidateEncodedGif();
                            setFitMode(m);
                          }}
                          className={`py-1 text-xs font-semibold rounded-lg capitalize cursor-pointer ${
                            fitMode === m ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                          }`}
                        >
                          {m === 'contain' ? t('fitContain', 'contain') : t('fitCover', 'cover')}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">{t('backgroundMatte', 'Background Matte')}</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => {
                          invalidateEncodedGif();
                          setBackgroundColor(e.target.value);
                        }}
                        className="w-8 h-8 rounded-lg border border-slate-200 cursor-pointer p-0.5"
                      />
                      <span className="text-xs font-mono text-slate-600">{backgroundColor.toUpperCase()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-700">{t('colorPaletteQuality', 'Color Palette Quality')}</span>
                    <span className="font-mono font-bold text-blue-600">{quality}%</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={100}
                    value={quality}
                    onChange={(e) => {
                      invalidateEncodedGif();
                      setQuality(parseInt(e.target.value, 10));
                    }}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleGenerateGif}
                  disabled={isEncoding || frames.length === 0}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm cursor-pointer disabled:opacity-60"
                >
                  {isEncoding ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t('encodingGif', 'Encoding GIF ({progress}%)...').replace('{progress}', String(encodeProgress))}</span>
                    </>
                  ) : (
                    <>
                      <Film className="w-4 h-4" />
                      <span>{encodedGif ? t('reEncodeAnimatedGif', 'Re-Encode Animated GIF') : t('generateAnimatedGif', 'Generate Animated GIF')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Frame Sequence & Per-Frame Delay Editor */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {t('framesHeading', 'Frames ({count}) — Drag or use arrows to reorder').replace(
                      '{count}',
                      String(frames.length)
                    )}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {t(
                      'perFrameDelayHint',
                      'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
                    ).replace('{ms}', String(globalDelayMs))}
                  </p>
                </div>
                <div>
                  <input
                    ref={addInputRef}
                    type="file"
                    multiple
                    accept={EXTENDED_IMAGE_ACCEPT}
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFilesSelected(Array.from(e.target.files));
                        e.target.value = '';
                      }
                    }}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => addInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-xl cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{t('addFrames', 'Add Frames')}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {frames.map((frame, index) => (
                  <div
                    key={frame.id}
                    draggable
                    onDragStart={() => setDraggedIdx(index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => {
                      if (draggedIdx !== null) moveFrame(draggedIdx, index);
                      setDraggedIdx(null);
                    }}
                    className={`border rounded-xl p-3 flex items-center gap-3 bg-slate-50/70 transition-all ${
                      draggedIdx === index ? 'border-blue-500 opacity-60' : 'border-slate-200'
                    }`}
                  >
                    <GripVertical className="w-4 h-4 text-slate-400 shrink-0 cursor-grab" />
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-white border border-slate-200 shrink-0 flex items-center justify-center">
                      <img
                        src={frame.previewUrl}
                        alt={frame.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1 space-y-1.5">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-bold text-slate-800 truncate">
                          #{index + 1} · {frame.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <label className="text-[11px] text-slate-500">{t('delayMsLabel', 'Delay (ms):')}</label>
                        <input
                          type="number"
                          min={20}
                          max={10000}
                          placeholder={String(globalDelayMs)}
                          value={frame.customDelayMs ?? ''}
                          onChange={(e) => {
                            invalidateEncodedGif();
                            const raw = e.target.value.trim();
                            const parsed = raw ? Math.max(20, Math.min(10000, parseInt(raw, 10) || globalDelayMs)) : null;
                            setFrames((prev) =>
                              prev.map((f) => (f.id === frame.id ? { ...f, customDelayMs: parsed } : f))
                            );
                          }}
                          className="w-20 px-2 py-0.5 text-xs font-mono border border-slate-300 rounded bg-white"
                        />
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          disabled={index === 0}
                          onClick={() => moveFrame(index, index - 1)}
                          className="p-1 text-slate-500 hover:text-blue-600 disabled:opacity-30 cursor-pointer"
                          title={t('moveEarlier', 'Move earlier')}
                          aria-label={t('moveFrameEarlierAria', 'Move frame {n} earlier').replace('{n}', String(index + 1))}
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          disabled={index === frames.length - 1}
                          onClick={() => moveFrame(index, index + 1)}
                          className="p-1 text-slate-500 hover:text-blue-600 disabled:opacity-30 cursor-pointer"
                          title={t('moveLater', 'Move later')}
                          aria-label={t('moveFrameLaterAria', 'Move frame {n} later').replace('{n}', String(index + 1))}
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => duplicateFrame(index)}
                          className="p-1 text-slate-500 hover:text-blue-600 cursor-pointer"
                          title={t('duplicateFrame', 'Duplicate frame')}
                          aria-label={t('duplicateFrameAria', 'Duplicate frame {n}').replace('{n}', String(index + 1))}
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeFrame(frame.id)}
                          className="p-1 text-slate-400 hover:text-red-600 ml-auto cursor-pointer"
                          title={t('removeFrame', 'Remove frame')}
                          aria-label={t('removeFrameAria', 'Remove frame {n}').replace('{n}', String(index + 1))}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
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
