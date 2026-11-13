import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Download,
  Trash2,
  Loader2,
  AlertCircle,
  CheckCircle2,
  SplitSquareVertical,
  Sparkles,
  RefreshCw,
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
import { ComparisonModal } from '../components/ComparisonModal';
import { ImageItem } from '../types';
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  canvasToBlob,
  loadExtendedImageInfo,
} from '../utils/imageProcessing';
import { toDecodableBlob } from '../utils/compressor';
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


interface RemoveBackgroundPageProps {
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

type BackgroundChoice = 'transparent' | 'white' | 'black' | 'custom';

function describeProgressKey(
  key: string,
  translate?: (key: string, fallback: string) => string
): string {
  const pick = (k: string, fallback: string) => (translate ? translate(k, fallback) : fallback);
  if (key.includes('wasm')) return pick('progressWasm', 'Loading WebAssembly AI runtime...');
  if (key.includes('model'))
    return pick(
      'progressModel',
      'Downloading AI background removal model (~35 MB, cached for future use)...'
    );
  if (key.includes('compute'))
    return pick('progressCompute', 'Removing background locally in your browser...');
  return pick('progressPreparing', 'Preparing in-browser AI model...');
}

export const RemoveBackgroundPage: React.FC<RemoveBackgroundPageProps> = ({
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
  const activeTool = tool ?? TOOL_BY_SLUG['/remove-background'];
  const t = (key: string, fallback: string) =>
    lang === 'ja' && jaStrings?.toolUi
      ? ((jaStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'ko' && koStrings?.toolUi
      ? ((koStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'id' && idStrings?.toolUi
      ? ((idStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'ru' && ruStrings?.toolUi
      ? ((ruStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'de' && deStrings?.toolUi
      ? ((deStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'it' && itStrings?.toolUi
      ? ((itStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'pt' && ptStrings?.toolUi
      ? ((ptStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'fr' && frStrings?.toolUi
      ? ((frStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'es' && esStrings?.toolUi
      ? ((esStrings.toolUi[key] as string | undefined) ?? fallback)
      : fallback;

  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [originalPreviewUrl, setOriginalPreviewUrl] = useState<string | null>(null);
  const [originalDims, setOriginalDims] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  // Transparent PNG cutout produced by @imgly/background-removal
  const [cutoutBlob, setCutoutBlob] = useState<Blob | null>(null);
  const [cutoutPreviewUrl, setCutoutPreviewUrl] = useState<string | null>(null);
  const [cutoutImg, setCutoutImg] = useState<HTMLImageElement | null>(null);

  // Optional solid-background composite
  const [bgChoice, setBgChoice] = useState<BackgroundChoice>('transparent');
  const [customColor, setCustomColor] = useState<string>('#2563eb');
  const [compositeBlob, setCompositeBlob] = useState<Blob | null>(null);
  const [compositePreviewUrl, setCompositePreviewUrl] = useState<string | null>(null);

  // Model preload & inference state
  const [modelReady, setModelReady] = useState<boolean>(false);
  const [isModelLoading, setIsModelLoading] = useState<boolean>(true);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [progressText, setProgressText] = useState<string>(
    t('progressInitModule', 'Initializing AI background removal module...')
  );
  const [progressPct, setProgressPct] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showCompare, setShowCompare] = useState<boolean>(false);

  // Refs to clean up object URLs safely on unmount and avoid duplicate model loads
  const urlsRef = useRef<{
    orig: string | null;
    cutout: string | null;
    composite: string | null;
  }>({ orig: null, cutout: null, composite: null });
  urlsRef.current = {
    orig: originalPreviewUrl,
    cutout: cutoutPreviewUrl,
    composite: compositePreviewUrl,
  };

  const bgLibRef = useRef<typeof import('@imgly/background-removal') | null>(null);
  const preloadPromiseRef = useRef<Promise<typeof import('@imgly/background-removal')> | null>(null);

  const ensureModelLoaded = useCallback(
    (onProgress?: (key: string, current: number, total: number) => void) => {
      if (bgLibRef.current && modelReady) {
        return Promise.resolve(bgLibRef.current);
      }
      if (!preloadPromiseRef.current) {
        preloadPromiseRef.current = (async () => {
          setIsModelLoading(true);
          setProgressText(t('progressInitLibrary', 'Loading AI background removal library...'));
          const mod = await import('@imgly/background-removal');
          bgLibRef.current = mod;
          await mod.preload({
            model: 'isnet_quint8',
            progress: (key, current, total) => {
              setProgressText(describeProgressKey(key, t));
              if (total > 0) {
                setProgressPct(Math.min(100, Math.round((current / total) * 100)));
              }
              onProgress?.(key, current, total);
            },
          });
          setModelReady(true);
          setIsModelLoading(false);
          setProgressPct(100);
          return mod;
        })().catch((err) => {
          preloadPromiseRef.current = null;
          setIsModelLoading(false);
          throw err;
        });
      }
      return preloadPromiseRef.current;
    },
    [modelReady]
  );

  // Lazy-load the library & quantized isnet_quint8 model only when this page opens
  useEffect(() => {
    let active = true;
    ensureModelLoaded().catch((err) => {
      if (!active) return;
      console.error('Background removal model preload failed:', err);
      setError(
        err instanceof Error
          ? t(
              'errorModelInit',
              'Could not initialize the AI background model: {message}'
            ).replace('{message}', err.message)
          : t(
              'errorModelInitGeneric',
              'Could not initialize the AI background model in this browser.'
            )
      );
    });

    return () => {
      active = false;
      if (urlsRef.current.orig) URL.revokeObjectURL(urlsRef.current.orig);
      if (urlsRef.current.cutout) URL.revokeObjectURL(urlsRef.current.cutout);
      if (urlsRef.current.composite) URL.revokeObjectURL(urlsRef.current.composite);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-render solid background composite whenever cutout or color selection changes
  useEffect(() => {
    if (!cutoutImg || bgChoice === 'transparent') {
      setCompositeBlob(null);
      setCompositePreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return null;
      });
      return;
    }

    let cancelled = false;
    const fillHex =
      bgChoice === 'white' ? '#ffffff' : bgChoice === 'black' ? '#000000' : customColor;

    const canvas = document.createElement('canvas');
    canvas.width = cutoutImg.naturalWidth || originalDims.w;
    canvas.height = cutoutImg.naturalHeight || originalDims.h;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = fillHex;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(cutoutImg, 0, 0, canvas.width, canvas.height);

    canvasToBlob(canvas, 'image/png', 1)
      .then((blob) => {
        if (cancelled) return;
        const url = URL.createObjectURL(blob);
        setCompositeBlob(blob);
        setCompositePreviewUrl((prev) => {
          if (prev) URL.revokeObjectURL(prev);
          return url;
        });
      })
      .catch((err) => {
        if (!cancelled) {
          console.error('Solid background composite failed:', err);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [cutoutImg, bgChoice, customColor, originalDims.w, originalDims.h]);

  const runBackgroundRemoval = async (file: File) => {
    setError(null);
    setIsProcessing(true);
    setProgressPct(null);

    try {
      const info = await loadExtendedImageInfo(file);
      setSourceFile(file);
      setOriginalDims({ w: info.width, h: info.height });
      setOriginalPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return info.previewUrl;
      });

      // Clear previous result while processing new file
      setCutoutBlob(null);
      setCutoutImg(null);
      setCutoutPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return null;
      });

      const mod = await ensureModelLoaded();
      setProgressText(t('progressCompute', 'Removing background locally in your browser...'));
      setProgressPct(null);

      // Convert HEIC/HEIF or exotic container if needed into a standard browser Blob
      const decodableBlob = await toDecodableBlob(file);

      const resultBlob = await mod.removeBackground(decodableBlob, {
        model: 'isnet_quint8',
        output: {
          format: 'image/png',
          quality: 1,
        },
        progress: (key, current, total) => {
          setProgressText(describeProgressKey(key, t));
          if (total > 0) {
            setProgressPct(Math.min(100, Math.round((current / total) * 100)));
          }
        },
      });

      const resultUrl = URL.createObjectURL(resultBlob);
      const loadedCutoutImg = await new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () =>
          reject(new Error(t('errorDecodeOutput', 'Failed to decode transparent PNG output.')));
        img.src = resultUrl;
      });

      setCutoutBlob(resultBlob);
      setCutoutImg(loadedCutoutImg);
      setCutoutPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return resultUrl;
      });
      setProgressPct(100);
    } catch (err) {
      console.error('Background removal error:', err);
      setError(
        err instanceof Error
          ? err.message
          : t(
              'errorRemovalFailed',
              'Background removal failed in this browser. Try another image or reload.'
            )
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFilesSelected = (files: File[]) => {
    const file = files[0];
    if (!file) return;
    void runBackgroundRemoval(file);
  };

  const handleClear = () => {
    if (originalPreviewUrl) URL.revokeObjectURL(originalPreviewUrl);
    if (cutoutPreviewUrl) URL.revokeObjectURL(cutoutPreviewUrl);
    if (compositePreviewUrl) URL.revokeObjectURL(compositePreviewUrl);
    setSourceFile(null);
    setOriginalPreviewUrl(null);
    setOriginalDims({ w: 0, h: 0 });
    setCutoutBlob(null);
    setCutoutPreviewUrl(null);
    setCutoutImg(null);
    setCompositeBlob(null);
    setCompositePreviewUrl(null);
    setBgChoice('transparent');
    setError(null);
  };

  const activeBlob = bgChoice === 'transparent' ? cutoutBlob : compositeBlob || cutoutBlob;
  const activePreviewUrl =
    bgChoice === 'transparent' ? cutoutPreviewUrl : compositePreviewUrl || cutoutPreviewUrl;

  const baseName = sourceFile ? sanitizeFilename(getBaseFilename(sourceFile.name)) : 'image';

  const handleDownloadTransparent = () => {
    if (!cutoutBlob) return;
    triggerDownload(cutoutBlob, `${baseName}_no_bg.png`);
  };

  const handleDownloadSolid = () => {
    if (!compositeBlob) return;
    const colorTag =
      bgChoice === 'white'
        ? 'white'
        : bgChoice === 'black'
        ? 'black'
        : customColor.replace('#', '');
    triggerDownload(compositeBlob, `${baseName}_bg_${colorTag}.png`);
  };

  const comparisonItem: ImageItem | null =
    sourceFile && originalPreviewUrl && activePreviewUrl && activeBlob
      ? {
          id: 'bg-remove-compare',
          file: sourceFile,
          name: sourceFile.name,
          originalSize: sourceFile.size,
          originalWidth: originalDims.w,
          originalHeight: originalDims.h,
          originalType: sourceFile.type || 'image/jpeg',
          originalPreviewUrl,
          hasAlpha: true,
          compressedBlob: activeBlob,
          compressedPreviewUrl: activePreviewUrl,
          compressedSize: activeBlob.size,
          compressedWidth: cutoutImg?.naturalWidth || originalDims.w,
          compressedHeight: cutoutImg?.naturalHeight || originalDims.h,
          outputType: 'image/png',
          outputExtension: '.png',
          outputFilename: `${baseName}_no_bg.png`,
          quality: 100,
          status: 'done',
          errorMessage: null,
          spaceSaved: sourceFile.size - activeBlob.size,
          compressionPercentage:
            sourceFile.size > 0
              ? Math.round(((sourceFile.size - activeBlob.size) / sourceFile.size) * 100)
              : 0,
        }
      : null;

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
        {/* First-time model download status banner */}
        {isModelLoading && !isProcessing && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <Loader2 className="w-5 h-5 text-blue-600 animate-spin shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-slate-900">
                  {t('modelLoadingTitle', 'Loading in-browser AI model (isnet_quint8)')}
                </p>
                <p className="text-xs text-slate-600 mt-0.5">{progressText}</p>
              </div>
            </div>
            {progressPct !== null && (
              <div className="w-full sm:w-44 shrink-0">
                <div className="flex justify-between text-[11px] font-mono text-blue-700 mb-1">
                  <span>{t('modelCache', 'Model Cache')}</span>
                  <span>{progressPct}%</span>
                </div>
                <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-200"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {!sourceFile ? (
          <UploadZone
            onFilesSelected={handleFilesSelected}
            maxFileSizeMB={20}
            multiple={false}
            disabled={isProcessing}
            accept={EXTENDED_IMAGE_ACCEPT}
            allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
            allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
            supportedFormatsLabel="JPG, PNG, WebP, HEIC, BMP, AVIF"
            title={t('uploadTitle', 'Drop a photo to remove its background with AI')}
            strings={lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Before / After Preview Area */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>{t('beforeAfterPreview', 'Before & After Preview')}</span>
                </span>
                <div className="flex items-center gap-3">
                  {cutoutBlob && (
                    <button
                      type="button"
                      onClick={() => setShowCompare(true)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                    >
                      <SplitSquareVertical className="w-3.5 h-3.5" />
                      <span>{t('splitCompare', 'Split Compare')}</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleClear}
                    disabled={isProcessing}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-red-600 cursor-pointer disabled:opacity-50"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{t('newImage', 'New Image')}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Original */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    {t('originalLabel', 'Original')}
                  </span>
                  <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center min-h-[220px] max-h-[340px] p-2">
                    {originalPreviewUrl && (
                      <img
                        src={originalPreviewUrl}
                        alt={t('altOriginal', 'Original {name}').replace('{name}', sourceFile.name)}
                        className="max-w-full max-h-[310px] object-contain rounded"
                      />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono truncate">
                    {originalDims.w}×{originalDims.h}px · {formatBytes(sourceFile.size)}
                  </p>
                </div>

                {/* Result Cutout */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
                    {bgChoice === 'transparent'
                      ? t('transparentCutout', 'Transparent Cutout (PNG)')
                      : t('solidBackgroundPreview', 'Solid Background Preview')}
                  </span>
                  <div
                    className="rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center min-h-[220px] max-h-[340px] p-2 relative"
                    style={
                      bgChoice === 'transparent'
                        ? {
                            backgroundImage:
                              'linear-gradient(45deg, #e2e8f0 25%, transparent 25%), linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e2e8f0 75%), linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)',
                            backgroundSize: '16px 16px',
                            backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
                            backgroundColor: '#ffffff',
                          }
                        : {
                            backgroundColor:
                              bgChoice === 'white'
                                ? '#ffffff'
                                : bgChoice === 'black'
                                ? '#000000'
                                : customColor,
                          }
                    }
                  >
                    {isProcessing ? (
                      <div className="flex flex-col items-center justify-center text-center px-4 py-8 bg-white/90 rounded-xl shadow-xs">
                        <Loader2 className="w-7 h-7 text-blue-600 animate-spin mb-2" />
                        <p className="text-xs font-bold text-slate-800">{progressText}</p>
                        {progressPct !== null && (
                          <div className="w-40 h-1.5 bg-slate-200 rounded-full overflow-hidden mt-2">
                            <div
                              className="h-full bg-blue-600 transition-all duration-200"
                              style={{ width: `${progressPct}%` }}
                            />
                          </div>
                        )}
                      </div>
                    ) : activePreviewUrl ? (
                      <img
                        src={activePreviewUrl}
                        alt={t('altCutout', 'Background removed {name}').replace('{name}', sourceFile.name)}
                        className="max-w-full max-h-[310px] object-contain"
                      />
                    ) : (
                      <span className="text-xs text-slate-500">
                        {t('waitingForResult', 'Waiting for result...')}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono">
                    {activeBlob
                      ? `${cutoutImg?.naturalWidth || originalDims.w}×${
                          cutoutImg?.naturalHeight || originalDims.h
                        }px · ${formatBytes(activeBlob.size)}`
                      : isProcessing
                      ? t('processingLocally', 'Processing locally...')
                      : '—'}
                  </p>
                </div>
              </div>
            </div>

            {/* Controls & Download Panel */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t('cutoutStatus', 'Cutout Status')}
                  </span>
                  {cutoutBlob && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {t('ready', 'Ready')}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 truncate font-medium">{sourceFile.name}</p>
              </div>

              {/* Solid Background Color Option */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  {t('backgroundFillOption', 'Background Fill Option')}
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-slate-100 rounded-xl">
                  {(
                    [
                      { id: 'transparent', label: t('bgTransparent', 'Transparent') },
                      { id: 'white', label: t('bgWhite', 'White') },
                      { id: 'black', label: t('bgBlack', 'Black') },
                      { id: 'custom', label: t('bgCustom', 'Custom') },
                    ] as { id: BackgroundChoice; label: string }[]
                  ).map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      disabled={!cutoutBlob || isProcessing}
                      onClick={() => setBgChoice(opt.id)}
                      className={`py-2 px-2 text-xs font-semibold rounded-lg cursor-pointer transition-all disabled:opacity-50 ${
                        bgChoice === opt.id
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                {bgChoice === 'custom' && (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <label className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 cursor-pointer">
                      <input
                        type="color"
                        value={customColor}
                        onChange={(e) => setCustomColor(e.target.value)}
                        className="w-8 h-8 rounded-lg border border-slate-300 cursor-pointer p-0.5"
                      />
                      <span>{t('customBackgroundColor', 'Custom Background Color')}</span>
                    </label>
                    <span className="text-xs font-mono text-slate-600 uppercase">{customColor}</span>
                  </div>
                )}
              </div>

              {/* Download Actions */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <button
                  type="button"
                  onClick={handleDownloadTransparent}
                  disabled={!cutoutBlob || isProcessing}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-bold rounded-xl shadow-sm cursor-pointer transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>
                    {t('downloadTransparentPng', 'Download Transparent PNG')}
                    {cutoutBlob ? ` (${formatBytes(cutoutBlob.size)})` : ''}
                  </span>
                </button>

                {bgChoice !== 'transparent' && (
                  <button
                    type="button"
                    onClick={handleDownloadSolid}
                    disabled={!compositeBlob || isProcessing}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white text-sm font-bold rounded-xl shadow-sm cursor-pointer transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>
                      {bgChoice === 'white'
                        ? t('downloadWithWhite', 'Download with White Background')
                        : bgChoice === 'black'
                        ? t('downloadWithBlack', 'Download with Black Background')
                        : t('downloadWithCustom', 'Download with {color} Background').replace(
                            '{color}',
                            customColor.toUpperCase()
                          )}
                      {compositeBlob ? ` (${formatBytes(compositeBlob.size)})` : ''}
                    </span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => sourceFile && void runBackgroundRemoval(sourceFile)}
                  disabled={isProcessing}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-xs font-semibold rounded-xl cursor-pointer transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{t('rerunRemoval', 'Re-run Removal')}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-start gap-2.5 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>

      {showCompare && comparisonItem && (
        <ComparisonModal
          image={comparisonItem}
          onClose={() => setShowCompare(false)}
          titlePrefix={t('comparisonTitlePrefix', 'Background Removal Comparison')}
          beforeLabel={lang === 'ja' ? jaStrings?.comparisonModal.beforeLabel : lang === 'ko' ? koStrings?.comparisonModal.beforeLabel : lang === 'id' ? idStrings?.comparisonModal.beforeLabel : lang === 'ru' ? ruStrings?.comparisonModal.beforeLabel : lang === 'de' ? deStrings?.comparisonModal.beforeLabel : lang === 'it' ? itStrings?.comparisonModal.beforeLabel : lang === 'pt' ? ptStrings?.comparisonModal.beforeLabel : lang === 'fr' ? frStrings?.comparisonModal.beforeLabel : esStrings?.comparisonModal.beforeLabel}
          afterLabel={
            bgChoice === 'transparent'
              ? t('comparisonAfterTransparent', 'Cutout (Transparent PNG)')
              : t('comparisonAfterSolid', 'Cutout (Solid BG)')
          }
          closeLabel={lang === 'ja' ? jaStrings?.comparisonModal.closeLabel : lang === 'ko' ? koStrings?.comparisonModal.closeLabel : lang === 'id' ? idStrings?.comparisonModal.closeLabel : lang === 'ru' ? ruStrings?.comparisonModal.closeLabel : lang === 'de' ? deStrings?.comparisonModal.closeLabel : lang === 'it' ? itStrings?.comparisonModal.closeLabel : lang === 'pt' ? ptStrings?.comparisonModal.closeLabel : lang === 'fr' ? frStrings?.comparisonModal.closeLabel : esStrings?.comparisonModal.closeLabel}
          instruction={lang === 'ja' ? jaStrings?.comparisonModal.instruction : lang === 'ko' ? koStrings?.comparisonModal.instruction : lang === 'id' ? idStrings?.comparisonModal.instruction : lang === 'ru' ? ruStrings?.comparisonModal.instruction : lang === 'de' ? deStrings?.comparisonModal.instruction : lang === 'it' ? itStrings?.comparisonModal.instruction : lang === 'pt' ? ptStrings?.comparisonModal.instruction : lang === 'fr' ? frStrings?.comparisonModal.instruction : esStrings?.comparisonModal.instruction}
          sliderLabel={lang === 'ja' ? jaStrings?.comparisonModal.sliderLabel : lang === 'ko' ? koStrings?.comparisonModal.sliderLabel : lang === 'id' ? idStrings?.comparisonModal.sliderLabel : lang === 'ru' ? ruStrings?.comparisonModal.sliderLabel : lang === 'de' ? deStrings?.comparisonModal.sliderLabel : lang === 'it' ? itStrings?.comparisonModal.sliderLabel : lang === 'pt' ? ptStrings?.comparisonModal.sliderLabel : lang === 'fr' ? frStrings?.comparisonModal.sliderLabel : esStrings?.comparisonModal.sliderLabel}
          sideBySideLabel={lang === 'ja' ? jaStrings?.comparisonModal.sideBySideLabel : lang === 'ko' ? koStrings?.comparisonModal.sideBySideLabel : lang === 'id' ? idStrings?.comparisonModal.sideBySideLabel : lang === 'ru' ? ruStrings?.comparisonModal.sideBySideLabel : lang === 'de' ? deStrings?.comparisonModal.sideBySideLabel : lang === 'it' ? itStrings?.comparisonModal.sideBySideLabel : lang === 'pt' ? ptStrings?.comparisonModal.sideBySideLabel : lang === 'fr' ? frStrings?.comparisonModal.sideBySideLabel : esStrings?.comparisonModal.sideBySideLabel}
          zoomInLabel={lang === 'ja' ? jaStrings?.comparisonModal.zoomInLabel : lang === 'ko' ? koStrings?.comparisonModal.zoomInLabel : lang === 'id' ? idStrings?.comparisonModal.zoomInLabel : lang === 'ru' ? ruStrings?.comparisonModal.zoomInLabel : lang === 'de' ? deStrings?.comparisonModal.zoomInLabel : lang === 'it' ? itStrings?.comparisonModal.zoomInLabel : lang === 'pt' ? ptStrings?.comparisonModal.zoomInLabel : lang === 'fr' ? frStrings?.comparisonModal.zoomInLabel : esStrings?.comparisonModal.zoomInLabel}
          zoomOutLabel={lang === 'ja' ? jaStrings?.comparisonModal.zoomOutLabel : lang === 'ko' ? koStrings?.comparisonModal.zoomOutLabel : lang === 'id' ? idStrings?.comparisonModal.zoomOutLabel : lang === 'ru' ? ruStrings?.comparisonModal.zoomOutLabel : lang === 'de' ? deStrings?.comparisonModal.zoomOutLabel : lang === 'it' ? itStrings?.comparisonModal.zoomOutLabel : lang === 'pt' ? ptStrings?.comparisonModal.zoomOutLabel : lang === 'fr' ? frStrings?.comparisonModal.zoomOutLabel : esStrings?.comparisonModal.zoomOutLabel}
          originalLabel={lang === 'ja' ? jaStrings?.comparisonModal.originalLabel : lang === 'ko' ? koStrings?.comparisonModal.originalLabel : lang === 'id' ? idStrings?.comparisonModal.originalLabel : lang === 'ru' ? ruStrings?.comparisonModal.originalLabel : lang === 'de' ? deStrings?.comparisonModal.originalLabel : lang === 'it' ? itStrings?.comparisonModal.originalLabel : lang === 'pt' ? ptStrings?.comparisonModal.originalLabel : lang === 'fr' ? frStrings?.comparisonModal.originalLabel : esStrings?.comparisonModal.originalLabel}
          outputLabel={lang === 'ja' ? jaStrings?.comparisonModal.outputLabel : lang === 'ko' ? koStrings?.comparisonModal.outputLabel : lang === 'id' ? idStrings?.comparisonModal.outputLabel : lang === 'ru' ? ruStrings?.comparisonModal.outputLabel : lang === 'de' ? deStrings?.comparisonModal.outputLabel : lang === 'it' ? itStrings?.comparisonModal.outputLabel : lang === 'pt' ? ptStrings?.comparisonModal.outputLabel : lang === 'fr' ? frStrings?.comparisonModal.outputLabel : esStrings?.comparisonModal.outputLabel}
          reductionLabel={lang === 'ja' ? jaStrings?.comparisonModal.reductionLabel : lang === 'ko' ? koStrings?.comparisonModal.reductionLabel : lang === 'id' ? idStrings?.comparisonModal.reductionLabel : lang === 'ru' ? ruStrings?.comparisonModal.reductionLabel : lang === 'de' ? deStrings?.comparisonModal.reductionLabel : lang === 'it' ? itStrings?.comparisonModal.reductionLabel : lang === 'pt' ? ptStrings?.comparisonModal.reductionLabel : lang === 'fr' ? frStrings?.comparisonModal.reductionLabel : esStrings?.comparisonModal.reductionLabel}
          sizeChangeLabel={lang === 'ja' ? jaStrings?.comparisonModal.sizeChangeLabel : lang === 'ko' ? koStrings?.comparisonModal.sizeChangeLabel : lang === 'id' ? idStrings?.comparisonModal.sizeChangeLabel : lang === 'ru' ? ruStrings?.comparisonModal.sizeChangeLabel : lang === 'de' ? deStrings?.comparisonModal.sizeChangeLabel : lang === 'it' ? itStrings?.comparisonModal.sizeChangeLabel : lang === 'pt' ? ptStrings?.comparisonModal.sizeChangeLabel : lang === 'fr' ? frStrings?.comparisonModal.sizeChangeLabel : esStrings?.comparisonModal.sizeChangeLabel}
          qualityLabel={lang === 'ja' ? jaStrings?.comparisonModal.qualityLabel : lang === 'ko' ? koStrings?.comparisonModal.qualityLabel : lang === 'id' ? idStrings?.comparisonModal.qualityLabel : lang === 'ru' ? ruStrings?.comparisonModal.qualityLabel : lang === 'de' ? deStrings?.comparisonModal.qualityLabel : lang === 'it' ? itStrings?.comparisonModal.qualityLabel : lang === 'pt' ? ptStrings?.comparisonModal.qualityLabel : lang === 'fr' ? frStrings?.comparisonModal.qualityLabel : esStrings?.comparisonModal.qualityLabel}
          formatLabel={lang === 'ja' ? jaStrings?.comparisonModal.formatLabel : lang === 'ko' ? koStrings?.comparisonModal.formatLabel : lang === 'id' ? idStrings?.comparisonModal.formatLabel : lang === 'ru' ? ruStrings?.comparisonModal.formatLabel : lang === 'de' ? deStrings?.comparisonModal.formatLabel : lang === 'it' ? itStrings?.comparisonModal.formatLabel : lang === 'pt' ? ptStrings?.comparisonModal.formatLabel : lang === 'fr' ? frStrings?.comparisonModal.formatLabel : esStrings?.comparisonModal.formatLabel}
          modalAriaLabel={lang === 'ja' ? jaStrings?.comparisonModal.modalAriaLabel : lang === 'ko' ? koStrings?.comparisonModal.modalAriaLabel : lang === 'id' ? idStrings?.comparisonModal.modalAriaLabel : lang === 'ru' ? ruStrings?.comparisonModal.modalAriaLabel : lang === 'de' ? deStrings?.comparisonModal.modalAriaLabel : lang === 'it' ? itStrings?.comparisonModal.modalAriaLabel : lang === 'pt' ? ptStrings?.comparisonModal.modalAriaLabel : lang === 'fr' ? frStrings?.comparisonModal.modalAriaLabel : esStrings?.comparisonModal.modalAriaLabel}
          altCompressed={lang === 'ja' ? jaStrings?.comparisonModal.altCompressed : lang === 'ko' ? koStrings?.comparisonModal.altCompressed : lang === 'id' ? idStrings?.comparisonModal.altCompressed : lang === 'ru' ? ruStrings?.comparisonModal.altCompressed : lang === 'de' ? deStrings?.comparisonModal.altCompressed : lang === 'it' ? itStrings?.comparisonModal.altCompressed : lang === 'pt' ? ptStrings?.comparisonModal.altCompressed : lang === 'fr' ? frStrings?.comparisonModal.altCompressed : esStrings?.comparisonModal.altCompressed}
          altOriginal={lang === 'ja' ? jaStrings?.comparisonModal.altOriginal : lang === 'ko' ? koStrings?.comparisonModal.altOriginal : lang === 'id' ? idStrings?.comparisonModal.altOriginal : lang === 'ru' ? ruStrings?.comparisonModal.altOriginal : lang === 'de' ? deStrings?.comparisonModal.altOriginal : lang === 'it' ? itStrings?.comparisonModal.altOriginal : lang === 'pt' ? ptStrings?.comparisonModal.altOriginal : lang === 'fr' ? frStrings?.comparisonModal.altOriginal : esStrings?.comparisonModal.altOriginal}
          altProcessed={lang === 'ja' ? jaStrings?.comparisonModal.altProcessed : lang === 'ko' ? koStrings?.comparisonModal.altProcessed : lang === 'id' ? idStrings?.comparisonModal.altProcessed : lang === 'ru' ? ruStrings?.comparisonModal.altProcessed : lang === 'de' ? deStrings?.comparisonModal.altProcessed : lang === 'it' ? itStrings?.comparisonModal.altProcessed : lang === 'pt' ? ptStrings?.comparisonModal.altProcessed : lang === 'fr' ? frStrings?.comparisonModal.altProcessed : esStrings?.comparisonModal.altProcessed}
        />
      )}
    </ToolPageLayout>
  );
};
