import React, { useState, useEffect, useRef } from 'react';
import {
  Check,
  CheckCircle2,
  Code2,
  Download,
  FileArchive,
  Globe,
  Play,
  RotateCcw,
  SplitSquareVertical,
  Trash2,
  AlertCircle,
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
  loadExtendedImageInfo,
  resizeImageFile,
} from '../utils/imageProcessing';
import { formatBytes, formatPercent } from '../utils/formatters';
import { createFilesZipArchive, triggerDownload } from '../utils/zip';

interface WebOptimizerPageProps {
  onNavigate: (path: string) => void;
}

interface WebPreset {
  id: string;
  label: string;
  description: string;
  maxEdge: number; // 0 = original
  format: 'webp' | 'jpeg' | 'png';
  quality: number;
}

const WEB_PRESETS: WebPreset[] = [
  {
    id: 'hero',
    label: 'Hero / Banner',
    description: 'Max 1600px · WebP 80%',
    maxEdge: 1600,
    format: 'webp',
    quality: 80,
  },
  {
    id: 'product',
    label: 'E-Commerce Product',
    description: 'Max 1200px · WebP 82%',
    maxEdge: 1200,
    format: 'webp',
    quality: 82,
  },
  {
    id: 'thumb',
    label: 'Card / Thumbnail',
    description: 'Max 640px · WebP 75%',
    maxEdge: 640,
    format: 'webp',
    quality: 75,
  },
  {
    id: 'og',
    label: 'Social OG / Email',
    description: 'Max 1200px · JPG 82%',
    maxEdge: 1200,
    format: 'jpeg',
    quality: 82,
  },
  {
    id: 'retina',
    label: 'Retina 2× Graphic',
    description: 'Max 1920px · WebP 88%',
    maxEdge: 1920,
    format: 'webp',
    quality: 88,
  },
];

export const WebOptimizerPage: React.FC<WebOptimizerPageProps> = ({ onNavigate }) => {
  const tool = TOOL_BY_SLUG['/web-image-optimizer'];
  const [items, setItems] = useState<ImageItem[]>([]);
  const itemsRef = useRef<ImageItem[]>([]);
  itemsRef.current = items;

  const [activePresetId, setActivePresetId] = useState<string>('product');
  const [maxEdge, setMaxEdge] = useState<number>(1200);
  const [format, setFormat] = useState<'webp' | 'jpeg' | 'png'>('webp');
  const [quality, setQuality] = useState<number>(82);
  const [preventUpscale, setPreventUpscale] = useState<boolean>(true);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [comparisonTarget, setComparisonTarget] = useState<ImageItem | null>(null);

  useEffect(() => {
    return () => {
      itemsRef.current.forEach((i) => {
        if (i.originalPreviewUrl) URL.revokeObjectURL(i.originalPreviewUrl);
        if (i.compressedPreviewUrl) URL.revokeObjectURL(i.compressedPreviewUrl);
      });
    };
  }, []);

  const optimizeItem = async (
    item: ImageItem,
    cfg?: { maxEdge: number; format: 'webp' | 'jpeg' | 'png'; quality: number }
  ): Promise<ImageItem> => {
    const activeMaxEdge = cfg ? cfg.maxEdge : maxEdge;
    const activeFmt = cfg ? cfg.format : format;
    const activeQ = cfg ? cfg.quality : quality;

    try {
      const srcW = item.originalWidth;
      const srcH = item.originalHeight;
      let targetW = srcW;
      let targetH = srcH;

      if (activeMaxEdge > 0 && Math.max(srcW, srcH) > activeMaxEdge) {
        const scale = activeMaxEdge / Math.max(srcW, srcH);
        targetW = Math.max(1, Math.round(srcW * scale));
        targetH = Math.max(1, Math.round(srcH * scale));
      } else if (activeMaxEdge > 0 && !preventUpscale) {
        const scale = activeMaxEdge / Math.max(srcW, srcH);
        targetW = Math.max(1, Math.round(srcW * scale));
        targetH = Math.max(1, Math.round(srcH * scale));
      }

      const res = await resizeImageFile(
        item.file,
        srcW,
        srcH,
        item.originalType,
        item.hasAlpha,
        {
          mode: 'dimensions',
          width: targetW,
          height: targetH,
          lockAspectRatio: false,
          fit: 'exact',
          format: activeFmt,
          quality: activeQ,
          backgroundColor: '#ffffff',
        }
      );

      if (item.compressedPreviewUrl) URL.revokeObjectURL(item.compressedPreviewUrl);

      const saved = item.originalSize - res.size;
      const pct =
        item.originalSize > 0
          ? Math.round(((item.originalSize - res.size) / item.originalSize) * 100)
          : 0;

      const cleanBase = res.outputFilename.replace(/_\d+x\d+(\.[^.]+)$/, '');
      const webFilename = `${cleanBase}-web${res.outputExtension}`;

      return {
        ...item,
        compressedBlob: res.blob,
        compressedPreviewUrl: res.previewUrl,
        compressedSize: res.size,
        compressedWidth: res.width,
        compressedHeight: res.height,
        outputType: res.outputType,
        outputExtension: res.outputExtension,
        outputFilename: webFilename,
        spaceSaved: saved,
        compressionPercentage: pct,
        quality: activeQ,
        status: 'done',
        errorMessage: null,
      };
    } catch (err) {
      return {
        ...item,
        status: 'error',
        errorMessage: err instanceof Error ? err.message : 'Web optimization failed.',
      };
    }
  };

  const handleFilesSelected = async (files: File[]) => {
    setIsProcessing(true);
    const loaded: ImageItem[] = [];

    for (const file of files) {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      try {
        const info = await loadExtendedImageInfo(file);
        loaded.push({
          id,
          file,
          name: file.name,
          originalSize: file.size,
          originalWidth: info.width,
          originalHeight: info.height,
          originalType: info.detectedType,
          originalPreviewUrl: info.previewUrl,
          hasAlpha: info.hasAlpha,
          compressedBlob: null,
          compressedPreviewUrl: null,
          compressedSize: null,
          compressedWidth: null,
          compressedHeight: null,
          outputType: 'image/webp',
          outputExtension: '.webp',
          outputFilename: file.name,
          quality,
          status: 'compressing',
          errorMessage: null,
          spaceSaved: null,
          compressionPercentage: null,
        });
      } catch {
        loaded.push({
          id,
          file,
          name: file.name,
          originalSize: file.size,
          originalWidth: 0,
          originalHeight: 0,
          originalType: file.type,
          originalPreviewUrl: URL.createObjectURL(file),
          hasAlpha: false,
          compressedBlob: null,
          compressedPreviewUrl: null,
          compressedSize: null,
          compressedWidth: null,
          compressedHeight: null,
          outputType: 'image/webp',
          outputExtension: '.webp',
          outputFilename: file.name,
          quality,
          status: 'error',
          errorMessage: 'Corrupted or unsupported image.',
          spaceSaved: null,
          compressionPercentage: null,
        });
      }
    }

    setItems((prev) => [...prev, ...loaded]);

    const processed: ImageItem[] = [];
    for (const item of loaded) {
      if (item.status === 'error') processed.push(item);
      else processed.push(await optimizeItem(item));
    }

    setItems((prev) =>
      prev.map((existing) => processed.find((p) => p.id === existing.id) || existing)
    );
    setIsProcessing(false);
  };

  const handleOptimizeAll = async (cfg?: { maxEdge: number; format: 'webp' | 'jpeg' | 'png'; quality: number }) => {
    if (items.length === 0) return;
    setIsProcessing(true);
    setItems((prev) =>
      prev.map((i) => ({ ...i, status: i.originalWidth ? 'compressing' : 'error' }))
    );

    const out: ImageItem[] = [];
    for (const item of items) {
      if (!item.originalWidth) out.push(item);
      else out.push(await optimizeItem(item, cfg));
    }
    setItems(out);
    setIsProcessing(false);
  };

  const handleSelectPreset = (preset: WebPreset) => {
    setActivePresetId(preset.id);
    setMaxEdge(preset.maxEdge);
    setFormat(preset.format);
    setQuality(preset.quality);
    if (items.length > 0) {
      void handleOptimizeAll({
        maxEdge: preset.maxEdge,
        format: preset.format,
        quality: preset.quality,
      });
    }
  };

  const handleCopyImgTag = async (item: ImageItem) => {
    const alt = item.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ');
    const tag = `<img src="/images/${item.outputFilename}" alt="${alt}" width="${
      item.compressedWidth || item.originalWidth
    }" height="${item.compressedHeight || item.originalHeight}" loading="lazy" decoding="async" />`;
    try {
      await navigator.clipboard.writeText(tag);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // Fallback ignored if clipboard denied
    }
  };

  const handleRemove = (id: string) => {
    setItems((prev) => {
      const t = prev.find((i) => i.id === id);
      if (t) {
        if (t.originalPreviewUrl) URL.revokeObjectURL(t.originalPreviewUrl);
        if (t.compressedPreviewUrl) URL.revokeObjectURL(t.compressedPreviewUrl);
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  const handleClearAll = () => {
    items.forEach((i) => {
      if (i.originalPreviewUrl) URL.revokeObjectURL(i.originalPreviewUrl);
      if (i.compressedPreviewUrl) URL.revokeObjectURL(i.compressedPreviewUrl);
    });
    setItems([]);
  };

  const doneItems = items.filter((i) => i.status === 'done' && i.compressedBlob);
  const totalOrig = doneItems.reduce((acc, i) => acc + i.originalSize, 0);
  const totalOut = doneItems.reduce((acc, i) => acc + (i.compressedSize || 0), 0);
  const totalSaved = totalOrig - totalOut;
  const totalPct = totalOrig > 0 ? Math.round((totalSaved / totalOrig) * 100) : 0;

  const handleDownloadZip = async () => {
    if (doneItems.length === 0) return;
    setIsZipping(true);
    try {
      const zip = await createFilesZipArchive(
        doneItems.map((i) => ({ filename: i.outputFilename, blob: i.compressedBlob! })),
        'web_optimized_images'
      );
      triggerDownload(zip, 'web_optimized_compressmypic.zip');
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <ToolPageLayout tool={tool} onNavigate={onNavigate}>
      <div className="space-y-6">
        <UploadZone
          onFilesSelected={handleFilesSelected}
          maxFileSizeMB={25}
          disabled={isProcessing}
          accept={EXTENDED_IMAGE_ACCEPT}
          allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
          allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
          supportedFormatsLabel="JPG, PNG, WebP, HEIC, SVG, BMP, GIF, AVIF"
          title="Drop website assets to optimize for Core Web Vitals"
        />

        {/* Web Optimization Presets & Controls */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2.5">
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>Web Performance Presets</span>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
              {WEB_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handleSelectPreset(preset)}
                  className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                    activePresetId === preset.id
                      ? 'bg-blue-50 border-blue-400 text-blue-900 shadow-xs'
                      : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:border-blue-300'
                  }`}
                >
                  <p className="text-xs font-bold">{preset.label}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{preset.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Web Format
              </span>
              <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1">
                {(['webp', 'jpeg', 'png'] as const).map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => {
                      setActivePresetId('custom');
                      setFormat(f);
                    }}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                      format === f ? 'bg-blue-600 text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {f === 'jpeg' ? 'JPG' : f.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Max Dimension (Long Edge)
              </span>
              <select
                value={maxEdge}
                onChange={(e) => {
                  setActivePresetId('custom');
                  setMaxEdge(parseInt(e.target.value, 10));
                }}
                className="w-full px-3 py-2 text-xs font-semibold border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={0}>Keep Original Dimensions</option>
                <option value={1920}>Max 1920px (Retina / Full HD)</option>
                <option value={1600}>Max 1600px (Hero / Banner)</option>
                <option value={1200}>Max 1200px (Blog / Product)</option>
                <option value={800}>Max 800px (In-Content)</option>
                <option value={640}>Max 640px (Thumbnails)</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="font-bold uppercase tracking-wider text-slate-500">
                  Quality: <strong className="text-blue-600 font-mono">{quality}%</strong>
                </span>
              </div>
              <input
                type="range"
                min={20}
                max={95}
                value={quality}
                disabled={format === 'png'}
                onChange={(e) => {
                  setActivePresetId('custom');
                  setQuality(parseInt(e.target.value, 10));
                }}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer disabled:opacity-40"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
              <input
                type="checkbox"
                checked={preventUpscale}
                onChange={(e) => setPreventUpscale(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Only downscale larger images (EXIF &amp; GPS metadata automatically stripped)</span>
            </label>

            {items.length > 0 && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => void handleOptimizeAll()}
                  disabled={isProcessing}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-semibold rounded-xl cursor-pointer"
                >
                  {isProcessing ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>Optimizing...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Optimize for Web ({items.length})</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleClearAll}
                  disabled={isProcessing}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 text-sm font-medium rounded-xl cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Clear</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        {items.length > 0 && (
          <div className="space-y-4">
            {doneItems.length > 0 && (
              <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    Web Performance Summary
                  </span>
                  <p className="text-sm font-semibold mt-0.5">
                    {formatBytes(totalOrig)} → {formatBytes(totalOut)}{' '}
                    <span className={totalSaved < 0 ? 'text-red-400' : 'text-emerald-400'}>
                      {totalSaved < 0
                        ? `(+${Math.abs(totalPct)}% · grew by ${formatBytes(Math.abs(totalSaved))})`
                        : `(${totalPct}% lighter · ${formatBytes(totalSaved)} page weight saved)`}
                    </span>
                  </p>
                </div>
                {doneItems.length > 1 && (
                  <button
                    type="button"
                    onClick={handleDownloadZip}
                    disabled={isZipping}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl cursor-pointer"
                  >
                    <FileArchive className="w-4 h-4" />
                    <span>{isZipping ? 'Creating ZIP...' : 'Download All (ZIP)'}</span>
                  </button>
                )}
              </div>
            )}

            {items.map((item) => {
              const isDone = item.status === 'done';
              const isBusy = item.status === 'compressing';
              const isErr = item.status === 'error';
              return (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 min-w-0 w-full lg:w-auto">
                    <div
                      onClick={() => isDone && setComparisonTarget(item)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 ${
                        isDone ? 'cursor-pointer' : ''
                      }`}
                    >
                      <img
                        src={item.compressedPreviewUrl || item.originalPreviewUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      {isBusy && (
                        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                          <RotateCcw className="w-5 h-5 text-blue-600 animate-spin" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-slate-900 truncate">
                        {isDone ? item.outputFilename : item.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">
                        {item.originalWidth}×{item.originalHeight}px · {formatBytes(item.originalSize)}
                        {isDone && item.compressedWidth
                          ? ` → ${item.compressedWidth}×${item.compressedHeight}px · ${formatBytes(
                              item.compressedSize || 0
                            )}`
                          : ''}
                      </p>
                      <div className="mt-1.5 flex flex-wrap items-center gap-2">
                        {isDone && (
                          (item.compressedSize || 0) > item.originalSize ? (
                            <span className="inline-flex items-center gap-1 text-xs text-red-600 font-semibold">
                              <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                              Grew by {formatBytes((item.compressedSize || 0) - item.originalSize)} ({formatPercent(item.compressionPercentage)})
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              Web-Ready ({formatPercent(item.compressionPercentage)})
                            </span>
                          )
                        )}
                        {isErr && (
                          <span className="inline-flex items-center gap-1 text-xs text-red-600 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {item.errorMessage}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-end">
                    {isDone && (
                      <>
                        <button
                          type="button"
                          onClick={() => void handleCopyImgTag(item)}
                          className="px-3 py-2 text-slate-700 hover:bg-slate-100 text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer border border-slate-200"
                          title="Copy responsive HTML img tag with explicit width and height"
                        >
                          {copiedId === item.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-700">Copied HTML</span>
                            </>
                          ) : (
                            <>
                              <Code2 className="w-3.5 h-3.5 text-slate-500" />
                              <span>Copy &lt;img&gt;</span>
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => setComparisonTarget(item)}
                          className="px-3 py-2 text-slate-700 hover:bg-slate-100 text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer"
                        >
                          <SplitSquareVertical className="w-4 h-4 text-blue-600" />
                          <span>Compare</span>
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            item.compressedBlob &&
                            triggerDownload(item.compressedBlob, item.outputFilename)
                          }
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg cursor-pointer"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                      </>
                    )}
                    <button
                      type="button"
                      onClick={() => handleRemove(item.id)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {comparisonTarget && (
        <ComparisonModal
          image={comparisonTarget}
          onClose={() => setComparisonTarget(null)}
          titlePrefix="Web Optimization Comparison"
          afterLabel="Web-Ready (After)"
        />
      )}
    </ToolPageLayout>
  );
};
