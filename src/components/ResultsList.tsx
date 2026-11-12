import React from 'react';
import { Download, Trash2, SplitSquareVertical, RotateCcw, CheckCircle2, AlertCircle, FileArchive, ArrowDown } from 'lucide-react';
import { ImageItem } from '../types';
import { formatBytes, formatPercent } from '../utils/formatters';

interface ResultsListProps {
  images: ImageItem[];
  onDownloadSingle: (image: ImageItem) => void;
  onDownloadAllZip: () => void;
  onRemoveImage: (id: string) => void;
  onOpenComparison: (image: ImageItem) => void;
  onRecompressSingle: (id: string) => void;
  isZipping: boolean;
  zipProgress: number;
}

export const ResultsList: React.FC<ResultsListProps> = ({
  images,
  onDownloadSingle,
  onDownloadAllZip,
  onRemoveImage,
  onOpenComparison,
  onRecompressSingle,
  isZipping,
  zipProgress,
}) => {
  if (images.length === 0) return null;

  // Calculate totals
  const totalOriginalBytes = images.reduce((acc, img) => acc + img.originalSize, 0);
  const doneImages = images.filter((img) => img.status === 'done' && img.compressedSize !== null);
  const totalCompressedBytes = doneImages.reduce((acc, img) => acc + (img.compressedSize || 0), 0);
  const totalSpaceSaved = doneImages.reduce((acc, img) => acc + (img.spaceSaved || 0), 0);
  const stillProcessing = images.some((img) => img.status === 'compressing');
  const overallPercentage = totalOriginalBytes > 0 && doneImages.length === images.length
    ? Math.round(((totalOriginalBytes - totalCompressedBytes) / totalOriginalBytes) * 100)
    : null;

  return (
    <div className="space-y-6">
      {/* Total Overview & Bulk Download Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-1">
            <span>Compression Summary</span>
            <span aria-hidden="true">·</span>
            <span>{images.length} {images.length === 1 ? 'Image' : 'Images'}</span>
          </div>

          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mt-2">
            <div>
              <span className="text-xs text-slate-400 block">Total Original:</span>
              <span className="text-lg font-bold font-mono text-slate-200 tabular-nums">
                {formatBytes(totalOriginalBytes)}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Total Compressed:</span>
              <span className="text-lg font-bold font-mono text-white tabular-nums">
                {stillProcessing ? 'Processing...' : formatBytes(totalCompressedBytes)}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">Total Saved:</span>
              <span className="text-lg font-bold font-mono text-emerald-400 tabular-nums">
                {stillProcessing ? 'Processing...' : formatBytes(totalSpaceSaved)}
              </span>
            </div>
            {overallPercentage !== null && overallPercentage > 0 && (
              <div>
                <span className="text-xs text-slate-400 block">Reduction:</span>
                <span className="text-xl font-extrabold font-mono text-emerald-300 tabular-nums flex items-center">
                  <ArrowDown className="w-5 h-5 mr-0.5 inline" />
                  {overallPercentage}%
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Download All (ZIP) Action */}
        <div className="w-full md:w-auto shrink-0">
          <button
            type="button"
            onClick={onDownloadAllZip}
            disabled={isZipping || doneImages.length === 0}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 text-white text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            {isZipping ? (
              <>
                <RotateCcw className="w-4 h-4 animate-spin" />
                <span>Creating ZIP ({zipProgress}%)...</span>
              </>
            ) : (
              <>
                <FileArchive className="w-5 h-5" />
                <span>Download All (ZIP)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Individual Cards Grid / List */}
      <div className="space-y-4">
        {images.map((image) => {
          const isDone = image.status === 'done';
          const isCompressing = image.status === 'compressing';
          const isError = image.status === 'error';

          return (
            <div
              key={image.id}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs hover:border-slate-300 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              {/* Left Column: Thumbnail & Metadata */}
              <div className="flex items-center gap-4 min-w-0 w-full md:w-auto">
                {/* Thumbnail Preview with comparison indicator */}
                <div
                  onClick={() => isDone && onOpenComparison(image)}
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 ${
                    isDone ? 'cursor-pointer group' : ''
                  }`}
                  title={isDone ? 'Click to inspect visual quality comparison' : ''}
                >
                  <img
                    src={image.compressedPreviewUrl || image.originalPreviewUrl}
                    alt={image.name}
                    className="w-full h-full object-cover"
                  />
                  {isCompressing && (
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-xs flex items-center justify-center">
                      <RotateCcw className="w-6 h-6 text-blue-600 animate-spin" />
                    </div>
                  )}
                  {isDone && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[11px] font-semibold gap-1">
                      <SplitSquareVertical className="w-4 h-4" />
                      <span>Compare</span>
                    </div>
                  )}
                </div>

                {/* Info Text */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                      {image.name}
                    </h3>
                    {image.hasAlpha && (
                      <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                        Alpha
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 mt-0.5">
                    {image.originalWidth}×{image.originalHeight}px · Format: {image.outputExtension.toUpperCase().replace('.', '')}
                  </p>

                  {/* Status Indicator */}
                  <div className="mt-2 flex items-center gap-2">
                    {isDone && (
                      <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Compressed successfully
                      </span>
                    )}
                    {isCompressing && (
                      <span className="text-xs text-blue-600 font-medium animate-pulse">
                        Optimizing pixels...
                      </span>
                    )}
                    {isError && (
                      <span className="inline-flex items-center gap-1 text-xs text-red-600 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                        {image.errorMessage || 'Compression error'}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Middle Column: Quantitative Metrics */}
              {isDone && image.compressedSize !== null && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 px-3 sm:px-4 bg-slate-50 rounded-xl w-full md:w-auto text-center md:text-left">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Original</span>
                    <span className="text-xs sm:text-sm font-semibold font-mono text-slate-700 tabular-nums">
                      {formatBytes(image.originalSize)}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Compressed</span>
                    <span className="text-xs sm:text-sm font-bold font-mono text-slate-900 tabular-nums">
                      {formatBytes(image.compressedSize)}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Space Saved</span>
                    <span className="text-xs sm:text-sm font-semibold font-mono text-emerald-600 tabular-nums">
                      {formatBytes(image.spaceSaved || 0)}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Reduction</span>
                    <span className="text-xs sm:text-sm font-bold font-mono text-blue-600 tabular-nums">
                      {formatPercent(image.compressionPercentage)}
                    </span>
                  </div>
                </div>
              )}

              {/* Right Column: Actions */}
              <div className="flex items-center gap-2 w-full md:w-auto justify-end border-t border-slate-100 md:border-t-0 pt-3 md:pt-0">
                {isDone && (
                  <>
                    <button
                      type="button"
                      onClick={() => onOpenComparison(image)}
                      className="p-2 sm:px-3 sm:py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                      title="Compare visual before/after"
                    >
                      <SplitSquareVertical className="w-4 h-4 text-blue-600" />
                      <span className="hidden sm:inline">Compare</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onDownloadSingle(image)}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </>
                )}

                {isError && (
                  <button
                    type="button"
                    onClick={() => onRecompressSingle(image.id)}
                    className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Retry</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => onRemoveImage(image.id)}
                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                  title="Remove image"
                  aria-label={`Remove ${image.name}`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
