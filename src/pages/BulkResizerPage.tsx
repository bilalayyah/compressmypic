import React, { useState, useEffect, useRef } from 'react';
import {
  Download,
  FileArchive,
  Play,
  RotateCcw,
  SplitSquareVertical,
  Trash2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import { ToolPageLayout } from '../components/ToolPageLayout';
import { UploadZone } from '../components/UploadZone';
import { ComparisonModal } from '../components/ComparisonModal';
import { ImageItem, OutputFormatChoice } from '../types';
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  ResizeFitMode,
  loadExtendedImageInfo,
  resizeImageFile,
} from '../utils/imageProcessing';
import { formatBytes } from '../utils/formatters';
import { createFilesZipArchive, triggerDownload } from '../utils/zip';

interface BulkResizerPageProps {
  onNavigate: (path: string) => void;
}

type BulkResizeStrategy = 'bounding' | 'width' | 'exact' | 'percentage';

export const BulkResizerPage: React.FC<BulkResizerPageProps> = ({ onNavigate }) => {
  const tool = TOOL_BY_SLUG['/bulk-image-resizer'];
  const [items, setItems] = useState<ImageItem[]>([]);
  const itemsRef = useRef<ImageItem[]>([]);
  itemsRef.current = items;

  const [strategy, setStrategy] = useState<BulkResizeStrategy>('bounding');
  const [maxWidth, setMaxWidth] = useState<number>(1200);
  const [maxHeight, setMaxHeight] = useState<number>(1200);
  const [percentage, setPercentage] = useState<number>(50);
  const [fitMode, setFitMode] = useState<ResizeFitMode>('contain');
  const [preventUpscale, setPreventUpscale] = useState<boolean>(true);
  const [format, setFormat] = useState<OutputFormatChoice>('original');
  const [quality, setQuality] = useState<number>(85);
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processedCount, setProcessedCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [comparisonTarget, setComparisonTarget] = useState<ImageItem | null>(null);

  useEffect(() => {
    return () => {
      itemsRef.current.forEach((img) => {
        if (img.originalPreviewUrl) URL.revokeObjectURL(img.originalPreviewUrl);
        if (img.compressedPreviewUrl) URL.revokeObjectURL(img.compressedPreviewUrl);
      });
    };
  }, []);

  const computeBatchDimensions = (srcW: number, srcH: number): { w: number; h: number; fit: ResizeFitMode; mode: 'dimensions' | 'percentage' } => {
    if (strategy === 'percentage') {
      return { w: srcW, h: srcH, fit: 'exact', mode: 'percentage' };
    }

    if (strategy === 'width') {
      const targetW = preventUpscale ? Math.min(srcW, Math.max(1, maxWidth)) : Math.max(1, maxWidth);
      const targetH = Math.max(1, Math.round((targetW / srcW) * srcH));
      return { w: targetW, h: targetH, fit: 'exact', mode: 'dimensions' };
    }

    if (strategy === 'bounding') {
      const boundW = Math.max(1, maxWidth);
      const boundH = Math.max(1, maxHeight);
      const ratio = Math.min(boundW / srcW, boundH / srcH);
      const finalRatio = preventUpscale ? Math.min(1, ratio) : ratio;
      return {
        w: Math.max(1, Math.round(srcW * finalRatio)),
        h: Math.max(1, Math.round(srcH * finalRatio)),
        fit: 'exact',
        mode: 'dimensions',
      };
    }

    // exact W x H
    return {
      w: Math.max(1, maxWidth),
      h: Math.max(1, maxHeight),
      fit: fitMode,
      mode: 'dimensions',
    };
  };

  const processSingle = async (item: ImageItem): Promise<ImageItem> => {
    try {
      const dims = computeBatchDimensions(item.originalWidth, item.originalHeight);
      const res = await resizeImageFile(
        item.file,
        item.originalWidth,
        item.originalHeight,
        item.originalType,
        item.hasAlpha,
        {
          mode: dims.mode,
          width: dims.w,
          height: dims.h,
          percentage,
          lockAspectRatio: false,
          fit: dims.fit,
          format,
          quality,
          backgroundColor,
        }
      );

      if (item.compressedPreviewUrl) URL.revokeObjectURL(item.compressedPreviewUrl);
      const saved = item.originalSize - res.size;
      const pctSaved =
        item.originalSize > 0
          ? Math.round(((item.originalSize - res.size) / item.originalSize) * 100)
          : 0;

      return {
        ...item,
        compressedBlob: res.blob,
        compressedPreviewUrl: res.previewUrl,
        compressedSize: res.size,
        compressedWidth: res.width,
        compressedHeight: res.height,
        outputType: res.outputType,
        outputExtension: res.outputExtension,
        outputFilename: res.outputFilename,
        spaceSaved: saved,
        compressionPercentage: pctSaved,
        quality,
        status: 'done',
        errorMessage: null,
      };
    } catch (err) {
      return {
        ...item,
        status: 'error',
        errorMessage: err instanceof Error ? err.message : 'Batch resize failed.',
      };
    }
  };

  const handleFilesSelected = async (files: File[]) => {
    setIsProcessing(true);
    setProcessedCount(0);
    setTotalCount(files.length);

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
          outputType: 'image/jpeg',
          outputExtension: '.jpg',
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
          outputType: 'image/jpeg',
          outputExtension: '.jpg',
          outputFilename: file.name,
          quality,
          status: 'error',
          errorMessage: 'Corrupted or unreadable image file.',
          spaceSaved: null,
          compressionPercentage: null,
        });
      }
    }

    setItems((prev) => [...prev, ...loaded]);

    let count = 0;
    for (const item of loaded) {
      if (item.status === 'error') {
        count++;
        setProcessedCount(count);
        continue;
      }
      const processed = await processSingle(item);
      count++;
      setProcessedCount(count);
      setItems((prev) => prev.map((ex) => (ex.id === processed.id ? processed : ex)));
    }

    setIsProcessing(false);
  };

  const handleResizeAll = async () => {
    if (items.length === 0) return;
    setIsProcessing(true);
    setProcessedCount(0);
    setTotalCount(items.length);

    setItems((prev) =>
      prev.map((i) => ({ ...i, status: i.originalWidth ? 'compressing' : 'error' }))
    );

    let count = 0;
    const updated: ImageItem[] = [];
    for (const item of items) {
      if (!item.originalWidth) {
        updated.push(item);
        count++;
        setProcessedCount(count);
        continue;
      }
      const res = await processSingle(item);
      updated.push(res);
      count++;
      setProcessedCount(count);
    }
    setItems(updated);
    setIsProcessing(false);
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

  const handleDownloadAllZip = async () => {
    if (doneItems.length === 0) return;
    setIsZipping(true);
    try {
      const zipBlob = await createFilesZipArchive(
        doneItems.map((i) => ({ filename: i.outputFilename, blob: i.compressedBlob! })),
        'bulk_resized_images'
      );
      triggerDownload(zipBlob, 'bulk_resized_compressmypic.zip');
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
          supportedFormatsLabel="JPG, PNG, WebP, HEIC, GIF, BMP, SVG"
          title="Drop multiple images to bulk resize"
        />

        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Batch Resize Strategy
              </span>
              <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl">
                {(
                  [
                    { id: 'bounding', label: 'Fit Max W × H' },
                    { id: 'width', label: 'Uniform Width' },
                    { id: 'exact', label: 'Exact W × H' },
                    { id: 'percentage', label: 'Percentage (%)' },
                  ] as { id: BulkResizeStrategy; label: string }[]
                ).map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setStrategy(s.id)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer transition-all ${
                      strategy === s.id
                        ? 'bg-white text-blue-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Output Format
              </span>
              <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1">
                {(['original', 'jpeg', 'png', 'webp'] as OutputFormatChoice[]).map((fmt) => (
                  <button
                    key={fmt}
                    type="button"
                    onClick={() => setFormat(fmt)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer transition-all ${
                      format === fmt
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {fmt === 'original' ? 'Original' : fmt === 'jpeg' ? 'JPG' : fmt.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {strategy === 'percentage' ? (
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-slate-700">
                  Scale All Images:{' '}
                  <strong className="text-blue-600 font-mono text-sm">{percentage}%</strong>
                </span>
                <div className="flex gap-1.5">
                  {[25, 50, 75, 100, 150].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setPercentage(pct)}
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold cursor-pointer ${
                        percentage === pct
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>
              <input
                type="range"
                min={10}
                max={200}
                step={5}
                value={percentage}
                onChange={(e) => setPercentage(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {strategy === 'bounding'
                      ? 'Max Width (px)'
                      : strategy === 'width'
                      ? 'Target Width (px)'
                      : 'Exact Width (px)'}
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={12000}
                    value={maxWidth}
                    onChange={(e) => setMaxWidth(Math.max(1, parseInt(e.target.value || '1', 10) || 1))}
                    className="w-full px-3.5 py-2.5 text-sm font-mono border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {strategy !== 'width' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {strategy === 'bounding' ? 'Max Height (px)' : 'Exact Height (px)'}
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={12000}
                      value={maxHeight}
                      onChange={(e) =>
                        setMaxHeight(Math.max(1, parseInt(e.target.value || '1', 10) || 1))
                      }
                      className="w-full px-3.5 py-2.5 text-sm font-mono border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}

                {strategy !== 'exact' ? (
                  <label className="flex items-center gap-2 text-xs font-medium text-slate-700 py-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preventUpscale}
                      onChange={(e) => setPreventUpscale(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Do not enlarge smaller images</span>
                  </label>
                ) : (
                  <div>
                    <span className="block text-xs font-semibold text-slate-700 mb-1.5">Fit Mode</span>
                    <div className="flex gap-1.5">
                      {(
                        [
                          { id: 'contain', label: 'Contain' },
                          { id: 'cover', label: 'Cover' },
                          { id: 'exact', label: 'Stretch' },
                        ] as { id: ResizeFitMode; label: string }[]
                      ).map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setFitMode(m.id)}
                          className={`px-2.5 py-2 text-xs font-semibold rounded-lg border cursor-pointer ${
                            fitMode === m.id
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-slate-600 border-slate-200'
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Full HD 1920px', w: 1920, h: 1080 },
                  { label: 'Blog 1200px', w: 1200, h: 1200 },
                  { label: 'E-commerce 1000×1000', w: 1000, h: 1000 },
                  { label: 'Thumbnail 600px', w: 600, h: 600 },
                ].map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => {
                      setMaxWidth(p.w);
                      setMaxHeight(p.h);
                    }}
                    className="px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 rounded-lg cursor-pointer"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="pt-3 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1 max-w-md">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-700">
                  Quality: <strong className="text-blue-600 font-mono">{quality}%</strong>
                </span>
                {format === 'jpeg' && (
                  <label className="flex items-center gap-1.5 text-slate-600">
                    <span>Matte BG:</span>
                    <input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-5 h-5 rounded border border-slate-300 cursor-pointer"
                    />
                  </label>
                )}
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

            {items.length > 0 && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResizeAll}
                  disabled={isProcessing}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-semibold rounded-xl shadow-xs cursor-pointer"
                >
                  {isProcessing ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>
                        Resizing ({processedCount}/{totalCount})...
                      </span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Bulk Resize ({items.length})</span>
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

        {items.length > 0 && (
          <div className="space-y-4">
            {doneItems.length > 0 && (
              <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    Bulk Resize Complete
                  </span>
                  <p className="text-sm font-semibold mt-0.5">
                    {doneItems.length} {doneItems.length === 1 ? 'image' : 'images'} resized and ready
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleDownloadAllZip}
                  disabled={isZipping}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl cursor-pointer"
                >
                  <FileArchive className="w-4 h-4" />
                  <span>{isZipping ? 'Creating ZIP...' : 'Download All (ZIP)'}</span>
                </button>
              </div>
            )}

            {items.map((item) => {
              const isDone = item.status === 'done';
              const isBusy = item.status === 'compressing';
              const isErr = item.status === 'error';
              return (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 min-w-0 w-full md:w-auto">
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
                      <h3 className="text-sm font-bold text-slate-900 truncate">{item.name}</h3>
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">
                        {item.originalWidth}×{item.originalHeight}px
                        {isDone && item.compressedWidth
                          ? ` → ${item.compressedWidth}×${item.compressedHeight}px`
                          : ''}
                      </p>
                      <div className="mt-1.5">
                        {isDone && (
                          <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            {formatBytes(item.originalSize)} → {formatBytes(item.compressedSize || 0)}
                          </span>
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

                  <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                    {isDone && (
                      <>
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
          titlePrefix="Bulk Resize Comparison"
          afterLabel="Resized (After)"
        />
      )}
    </ToolPageLayout>
  );
};
