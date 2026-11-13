import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Download,
  Trash2,
  Loader2,
  AlertCircle,
  CheckCircle2,
  SplitSquareVertical,
  ZoomIn,
  Play,
  XCircle,
} from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import { ToolPageLayout } from '../components/ToolPageLayout';
import { UploadZone } from '../components/UploadZone';
import { ComparisonModal } from '../components/ComparisonModal';
import { ImageItem } from '../types';
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

interface ImageUpscalerPageProps {
  onNavigate: (path: string) => void;
}

type UpscaleModelTier = 'slim' | 'medium';
type UpscaleFactor = 2 | 4;
type UpscaleOutputFormat = 'png' | 'jpeg' | 'webp';

type UpscalerInstance = InstanceType<typeof import('upscaler').default>;

async function loadEsrganModelDefinition(tier: UpscaleModelTier, factor: UpscaleFactor) {
  if (tier === 'slim' && factor === 2) {
    return (await import('@upscalerjs/esrgan-slim/2x')).default;
  }
  if (tier === 'slim' && factor === 4) {
    return (await import('@upscalerjs/esrgan-slim/4x')).default;
  }
  if (tier === 'medium' && factor === 2) {
    return (await import('@upscalerjs/esrgan-medium/2x')).default;
  }
  return (await import('@upscalerjs/esrgan-medium/4x')).default;
}

async function dataUrlToImageAndBlob(
  dataUrl: string,
  format: UpscaleOutputFormat
): Promise<{ blob: Blob; previewUrl: string; width: number; height: number }> {
  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const el = new Image();
    el.onload = () => resolve(el);
    el.onerror = () => reject(new Error('Failed to decode upscaled image output.'));
    el.src = dataUrl;
  });

  if (format === 'png') {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    const previewUrl = URL.createObjectURL(blob);
    return {
      blob,
      previewUrl,
      width: img.naturalWidth,
      height: img.naturalHeight,
    };
  }

  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context is unavailable.');
  if (format === 'jpeg') {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  ctx.drawImage(img, 0, 0);
  const mime = format === 'jpeg' ? 'image/jpeg' : 'image/webp';
  const blob = await canvasToBlob(canvas, mime, 0.94);
  const previewUrl = URL.createObjectURL(blob);
  return {
    blob,
    previewUrl,
    width: canvas.width,
    height: canvas.height,
  };
}

export const ImageUpscalerPage: React.FC<ImageUpscalerPageProps> = ({ onNavigate }) => {
  const tool = TOOL_BY_SLUG['/image-upscaler'];

  const [modelTier, setModelTier] = useState<UpscaleModelTier>('slim');
  const [scaleFactor, setScaleFactor] = useState<UpscaleFactor>(2);
  const [outputFormat, setOutputFormat] = useState<UpscaleOutputFormat>('png');

  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [imageInfo, setImageInfo] = useState<LoadedImageInfo | null>(null);

  const [upscaledBlob, setUpscaledBlob] = useState<Blob | null>(null);
  const [upscaledPreviewUrl, setUpscaledPreviewUrl] = useState<string | null>(null);
  const [upscaledDims, setUpscaledDims] = useState<{ w: number; h: number } | null>(null);

  const [isModelLoading, setIsModelLoading] = useState<boolean>(true);
  const [modelStageText, setModelStageText] = useState<string>('Loading UpscalerJS + ESRGAN Slim (2x) model...');
  const [isUpscaling, setIsUpscaling] = useState<boolean>(false);
  const [upscaleProgress, setUpscaleProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [showCompare, setShowCompare] = useState<boolean>(false);

  const urlsRef = useRef<{ orig: string | null; upscaled: string | null }>({
    orig: null,
    upscaled: null,
  });
  urlsRef.current = {
    orig: imageInfo?.previewUrl || null,
    upscaled: upscaledPreviewUrl,
  };

  const upscalerCacheRef = useRef<{
    key: string;
    instance: UpscalerInstance;
  } | null>(null);
  const loadingPromiseRef = useRef<{
    key: string;
    promise: Promise<UpscalerInstance>;
  } | null>(null);

  const ensureUpscalerReady = useCallback(
    async (tier: UpscaleModelTier, factor: UpscaleFactor): Promise<UpscalerInstance> => {
      const targetKey = `${tier}-${factor}`;
      if (upscalerCacheRef.current?.key === targetKey) {
        setIsModelLoading(false);
        return upscalerCacheRef.current.instance;
      }

      if (loadingPromiseRef.current?.key === targetKey) {
        return loadingPromiseRef.current.promise;
      }

      const promise = (async () => {
        setIsModelLoading(true);
        setModelStageText(
          `Downloading ESRGAN ${tier === 'slim' ? 'Slim (~2 MB)' : 'Medium (~8 MB)'} ${factor}x model...`
        );

        const [{ default: Upscaler }, tf, modelDef] = await Promise.all([
          import('upscaler'),
          import('@tensorflow/tfjs'),
          loadEsrganModelDefinition(tier, factor),
        ]);

        await tf.ready();

        if (upscalerCacheRef.current && upscalerCacheRef.current.key !== targetKey) {
          try {
            await upscalerCacheRef.current.instance.dispose();
          } catch {
            // ignore disposal error on previous model
          }
          upscalerCacheRef.current = null;
        }

        const instance = new Upscaler({ model: modelDef });
        await instance.ready;

        upscalerCacheRef.current = { key: targetKey, instance };
        setIsModelLoading(false);
        return instance;
      })().catch((err) => {
        if (loadingPromiseRef.current?.key === targetKey) {
          loadingPromiseRef.current = null;
        }
        setIsModelLoading(false);
        throw err;
      });

      loadingPromiseRef.current = { key: targetKey, promise };
      return promise;
    },
    []
  );

  // Strict lazy-load on page open (and reload when user switches Slim/Medium or 2x/4x)
  useEffect(() => {
    let active = true;
    ensureUpscalerReady(modelTier, scaleFactor).catch((err) => {
      if (!active) return;
      console.error('Upscaler model initialization failed:', err);
      setError(
        err instanceof Error
          ? `Could not load AI upscaler model: ${err.message}`
          : 'Could not initialize AI upscaler model in this browser.'
      );
    });
    return () => {
      active = false;
    };
  }, [modelTier, scaleFactor, ensureUpscalerReady]);

  // Dispose TensorFlow resources & object URLs on unmount
  useEffect(() => {
    return () => {
      if (urlsRef.current.orig) URL.revokeObjectURL(urlsRef.current.orig);
      if (urlsRef.current.upscaled) URL.revokeObjectURL(urlsRef.current.upscaled);
      if (upscalerCacheRef.current) {
        try {
          upscalerCacheRef.current.instance.abort();
          void upscalerCacheRef.current.instance.dispose();
        } catch {
          // ignore cleanup errors
        }
        upscalerCacheRef.current = null;
      }
    };
  }, []);

  const runUpscale = async (
    file: File,
    info: LoadedImageInfo,
    tier: UpscaleModelTier,
    factor: UpscaleFactor,
    fmt: UpscaleOutputFormat
  ) => {
    setError(null);
    setIsUpscaling(true);
    setUpscaleProgress(0);

    try {
      const upscaler = await ensureUpscalerReady(tier, factor);

      // Draw onto an opaque white-backed canvas so PNG alpha channels are flattened to proper 3-channel RGB
      const inputCanvas = document.createElement('canvas');
      inputCanvas.width = info.width;
      inputCanvas.height = info.height;
      const ctx = inputCanvas.getContext('2d', { alpha: false });
      if (!ctx) throw new Error('Browser Canvas 2D context is unavailable.');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, info.width, info.height);
      ctx.drawImage(info.img, 0, 0, info.width, info.height);

      const handleProgress = (amount: number) => {
        setUpscaleProgress(Math.min(100, Math.max(0, Math.round(amount * 100))));
      };

      let base64Result: string;
      try {
        base64Result = await upscaler.upscale(inputCanvas, {
          output: 'base64',
          patchSize: 128,
          padding: 8,
          awaitNextFrame: true,
          progress: handleProgress,
        });
      } catch (primaryErr) {
        const primaryMsg = primaryErr instanceof Error ? primaryErr.message : String(primaryErr);
        if (/abort/i.test(primaryMsg)) {
          throw primaryErr;
        }
        // Retry once with smaller patchSize (64, padding 4) on WebGL/texture errors
        setUpscaleProgress(0);
        base64Result = await upscaler.upscale(inputCanvas, {
          output: 'base64',
          patchSize: 64,
          padding: 4,
          awaitNextFrame: true,
          progress: handleProgress,
        });
      }

      const encoded = await dataUrlToImageAndBlob(base64Result, fmt);
      setUpscaledBlob(encoded.blob);
      setUpscaledDims({ w: encoded.width, h: encoded.height });
      setUpscaledPreviewUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return encoded.previewUrl;
      });
      setUpscaleProgress(100);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (/abort/i.test(msg)) {
        setError('Upscaling cancelled.');
      } else {
        console.error('Upscaling failed:', err);
        setError(
          msg ||
            'Upscaling failed in browser memory. Try a smaller image or switch from 4x to 2x.'
        );
      }
    } finally {
      setIsUpscaling(false);
    }
  };

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;
    setError(null);
    try {
      const info = await loadExtendedImageInfo(file);
      if (imageInfo?.previewUrl) URL.revokeObjectURL(imageInfo.previewUrl);
      if (upscaledPreviewUrl) URL.revokeObjectURL(upscaledPreviewUrl);

      setSourceFile(file);
      setImageInfo(info);
      setUpscaledBlob(null);
      setUpscaledPreviewUrl(null);
      setUpscaledDims(null);

      await runUpscale(file, info, modelTier, scaleFactor, outputFormat);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to read selected image.');
    }
  };

  const handleAbort = () => {
    try {
      upscalerCacheRef.current?.instance.abort();
    } catch {
      // ignore abort error
    }
  };

  const handleClear = () => {
    handleAbort();
    if (imageInfo?.previewUrl) URL.revokeObjectURL(imageInfo.previewUrl);
    if (upscaledPreviewUrl) URL.revokeObjectURL(upscaledPreviewUrl);
    setSourceFile(null);
    setImageInfo(null);
    setUpscaledBlob(null);
    setUpscaledPreviewUrl(null);
    setUpscaledDims(null);
    setUpscaleProgress(0);
    setError(null);
  };

  const handleDownload = () => {
    if (!upscaledBlob || !sourceFile) return;
    const base = sanitizeFilename(getBaseFilename(sourceFile.name));
    const ext = outputFormat === 'jpeg' ? '.jpg' : `.${outputFormat}`;
    triggerDownload(upscaledBlob, `${base}_upscaled_${scaleFactor}x${ext}`);
  };

  const predictedW = imageInfo ? imageInfo.width * scaleFactor : 0;
  const predictedH = imageInfo ? imageInfo.height * scaleFactor : 0;
  const isVeryLargeOutput = predictedW * predictedH > 4096 * 4096;

  const comparisonItem: ImageItem | null =
    sourceFile && imageInfo && upscaledBlob && upscaledPreviewUrl && upscaledDims
      ? {
          id: 'upscale-compare',
          file: sourceFile,
          name: sourceFile.name,
          originalSize: sourceFile.size,
          originalWidth: imageInfo.width,
          originalHeight: imageInfo.height,
          originalType: imageInfo.detectedType,
          originalPreviewUrl: imageInfo.previewUrl,
          hasAlpha: imageInfo.hasAlpha,
          compressedBlob: upscaledBlob,
          compressedPreviewUrl: upscaledPreviewUrl,
          compressedSize: upscaledBlob.size,
          compressedWidth: upscaledDims.w,
          compressedHeight: upscaledDims.h,
          outputType:
            outputFormat === 'jpeg'
              ? 'image/jpeg'
              : outputFormat === 'webp'
              ? 'image/webp'
              : 'image/png',
          outputExtension: outputFormat === 'jpeg' ? '.jpg' : `.${outputFormat}`,
          outputFilename: `${sanitizeFilename(getBaseFilename(sourceFile.name))}_upscaled_${scaleFactor}x.${outputFormat === 'jpeg' ? 'jpg' : outputFormat}`,
          quality: 100,
          status: 'done',
          errorMessage: null,
          spaceSaved: sourceFile.size - upscaledBlob.size,
          compressionPercentage:
            sourceFile.size > 0
              ? Math.round(((sourceFile.size - upscaledBlob.size) / sourceFile.size) * 100)
              : 0,
        }
      : null;

  return (
    <ToolPageLayout tool={tool} onNavigate={onNavigate}>
      <div className="space-y-6">
        {/* Settings Bar (available before & after upload) */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Scale Factor */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                Upscale Factor
              </span>
              <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1">
                {([2, 4] as UpscaleFactor[]).map((factor) => (
                  <button
                    key={factor}
                    type="button"
                    disabled={isUpscaling}
                    onClick={() => setScaleFactor(factor)}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-lg cursor-pointer transition-all disabled:opacity-50 ${
                      scaleFactor === factor
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {factor}x Resolution
                  </button>
                ))}
              </div>
            </div>

            {/* ESRGAN Model Tier */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                AI Model
              </span>
              <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1">
                <button
                  type="button"
                  disabled={isUpscaling}
                  onClick={() => setModelTier('slim')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer transition-all disabled:opacity-50 ${
                    modelTier === 'slim'
                      ? 'bg-white text-blue-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Slim (~2 MB, Fast)
                </button>
                <button
                  type="button"
                  disabled={isUpscaling}
                  onClick={() => setModelTier('medium')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer transition-all disabled:opacity-50 ${
                    modelTier === 'medium'
                      ? 'bg-white text-blue-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Medium (~8 MB, Detail)
                </button>
              </div>
            </div>

            {/* Output Format */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                Output Format
              </span>
              <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1">
                {(['png', 'jpeg', 'webp'] as UpscaleOutputFormat[]).map((fmt) => (
                  <button
                    key={fmt}
                    type="button"
                    disabled={isUpscaling}
                    onClick={() => setOutputFormat(fmt)}
                    className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg cursor-pointer transition-all disabled:opacity-50 ${
                      outputFormat === fmt
                        ? 'bg-white text-blue-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {fmt === 'jpeg' ? 'JPG' : fmt.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Model status indicator */}
          <div className="text-xs font-medium flex items-center gap-2 shrink-0">
            {isModelLoading ? (
              <span className="inline-flex items-center gap-1.5 text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-xl">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>{modelStageText}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>
                  ESRGAN {modelTier === 'slim' ? 'Slim' : 'Medium'} ({scaleFactor}x) Ready
                </span>
              </span>
            )}
          </div>
        </div>

        {!sourceFile || !imageInfo ? (
          <UploadZone
            onFilesSelected={handleFilesSelected}
            maxFileSizeMB={15}
            multiple={false}
            disabled={isUpscaling}
            accept={EXTENDED_IMAGE_ACCEPT}
            allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
            allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
            supportedFormatsLabel="JPG, PNG, WebP, HEIC, BMP, AVIF"
            title="Drop an image to upscale 2x or 4x in your browser"
          />
        ) : (
          <div className="space-y-4">
            {isVeryLargeOutput && (
              <div className="flex items-start gap-2.5 p-3.5 bg-amber-50 border border-amber-200 text-amber-800 text-xs rounded-xl">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  Target output is {predictedW}×{predictedH}px ({scaleFactor}x). Large images require
                  more browser WebGL memory and may take longer to process.
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Before / After Preview */}
              <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-blue-600" />
                    <span>Before &amp; After Upscale</span>
                  </span>
                  <div className="flex items-center gap-3">
                    {upscaledBlob && (
                      <button
                        type="button"
                        onClick={() => setShowCompare(true)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                      >
                        <SplitSquareVertical className="w-3.5 h-3.5" />
                        <span>Split Compare</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handleClear}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-red-600 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>New Image</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Original */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Original
                    </span>
                    <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center min-h-[220px] max-h-[360px] p-2">
                      <img
                        src={imageInfo.previewUrl}
                        alt={`Original ${sourceFile.name}`}
                        className="max-w-full max-h-[330px] object-contain rounded"
                      />
                    </div>
                    <p className="text-xs text-slate-600 font-mono">
                      {imageInfo.width} × {imageInfo.height} px · {formatBytes(sourceFile.size)}
                    </p>
                  </div>

                  {/* Upscaled */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
                      Upscaled ({scaleFactor}x {modelTier === 'slim' ? 'Slim' : 'Medium'})
                    </span>
                    <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center min-h-[220px] max-h-[360px] p-2 relative">
                      {isUpscaling ? (
                        <div className="flex flex-col items-center justify-center text-center px-4 py-8">
                          <Loader2 className="w-7 h-7 text-blue-600 animate-spin mb-2" />
                          <p className="text-xs font-bold text-slate-800">
                            {isModelLoading
                              ? modelStageText
                              : `Upscaling ${scaleFactor}x locally... ${upscaleProgress}%`}
                          </p>
                          <div className="w-44 h-2 bg-slate-200 rounded-full overflow-hidden mt-2.5">
                            <div
                              className="h-full bg-blue-600 transition-all duration-150"
                              style={{ width: `${upscaleProgress}%` }}
                            />
                          </div>
                        </div>
                      ) : upscaledPreviewUrl ? (
                        <img
                          src={upscaledPreviewUrl}
                          alt={`Upscaled ${sourceFile.name}`}
                          className="max-w-full max-h-[330px] object-contain rounded"
                        />
                      ) : (
                        <span className="text-xs text-slate-500">
                          Click &ldquo;Upscale Image&rdquo; to apply settings.
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 font-mono">
                      {upscaledDims && upscaledBlob
                        ? `${upscaledDims.w} × ${upscaledDims.h} px · ${formatBytes(upscaledBlob.size)}`
                        : `Target: ${predictedW} × ${predictedH} px`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metrics & Action Panel */}
              <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Image Details
                  </span>
                  <p className="text-sm font-bold text-slate-900 truncate">{sourceFile.name}</p>
                </div>

                <div className="rounded-xl bg-slate-50 border border-slate-200 p-3.5 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Original Dimensions</span>
                    <span className="font-mono font-semibold text-slate-800">
                      {imageInfo.width} × {imageInfo.height} px
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Upscaled Dimensions</span>
                    <span className="font-mono font-bold text-blue-600">
                      {upscaledDims
                        ? `${upscaledDims.w} × ${upscaledDims.h} px`
                        : `${predictedW} × ${predictedH} px`}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-2">
                    <span className="text-slate-500">Original Size</span>
                    <span className="font-mono font-semibold text-slate-800">
                      {formatBytes(sourceFile.size)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Upscaled Size</span>
                    <span className="font-mono font-semibold text-slate-800">
                      {upscaledBlob ? formatBytes(upscaledBlob.size) : '—'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  {isUpscaling ? (
                    <button
                      type="button"
                      onClick={handleAbort}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-xl shadow-sm cursor-pointer transition-colors"
                    >
                      <XCircle className="w-4 h-4" />
                      <span>Cancel Upscaling ({upscaleProgress}%)</span>
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={handleDownload}
                        disabled={!upscaledBlob}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-bold rounded-xl shadow-sm cursor-pointer transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>
                          Download {scaleFactor}x {outputFormat.toUpperCase()}
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          void runUpscale(
                            sourceFile,
                            imageInfo,
                            modelTier,
                            scaleFactor,
                            outputFormat
                          )
                        }
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl cursor-pointer transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-current text-blue-600" />
                        <span>
                          Run {scaleFactor}x ({modelTier === 'slim' ? 'Slim' : 'Medium'}) Upscale
                        </span>
                      </button>
                    </>
                  )}
                </div>
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
          titlePrefix="Upscale Comparison"
          afterLabel={`Upscaled (${scaleFactor}x)`}
        />
      )}
    </ToolPageLayout>
  );
};
