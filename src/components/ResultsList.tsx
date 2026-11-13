import React from 'react';
import {
  Download,
  Trash2,
  SplitSquareVertical,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  FileArchive,
  ArrowDown,
  ArrowUp,
  ShieldCheck,
} from 'lucide-react';
import { ImageItem } from '../types';
import { formatBytes, formatPercent } from '../utils/formatters';

export interface ResultsListStrings {
  summary?: string;
  image?: string;
  images?: string;
  totalOriginal?: string;
  totalCompressed?: string;
  totalSaved?: string;
  processing?: string;
  grewBy?: string; // contains {bytes}
  reduction?: string;
  sizeChange?: string;
  downloadAll?: string;
  creatingZip?: string; // contains {progress}
  compare?: string;
  compareTitle?: string;
  compareActionTitle?: string;
  download?: string;
  retry?: string;
  removeTitle?: string;
  removeAriaLabel?: string; // contains {name}
  keptOriginal?: string;
  grewByStatus?: string; // contains {bytes}
  compressedOk?: string;
  optimizing?: string;
  compressionError?: string;
  original?: string;
  compressed?: string;
  output?: string;
  spaceSaved?: string;
  formatLabel?: string;
  alpha?: string;
  largerTitle?: string; // contains {bytes}
  largerPngNote?: string;
  largerNote?: string;
  keepOriginal?: string;
}

interface ResultsListProps {
  images: ImageItem[];
  onDownloadSingle: (image: ImageItem) => void;
  onDownloadAllZip: () => void;
  onRemoveImage: (id: string) => void;
  onOpenComparison: (image: ImageItem) => void;
  onRecompressSingle: (id: string) => void;
  onKeepOriginal?: (id: string) => void;
  isZipping: boolean;
  zipProgress: number;
  strings?: ResultsListStrings;
}

export const ResultsList: React.FC<ResultsListProps> = ({
  images,
  onDownloadSingle,
  onDownloadAllZip,
  onRemoveImage,
  onOpenComparison,
  onRecompressSingle,
  onKeepOriginal,
  isZipping,
  zipProgress,
  strings,
}) => {
  if (images.length === 0) return null;

  // Compute true aggregate totals (never summing only positive savings)
  const doneImages = images.filter((img) => img.status === 'done' && img.compressedSize !== null);
  const doneOriginalBytes = doneImages.reduce((acc, img) => acc + img.originalSize, 0);
  const totalOriginalBytes = images.reduce((acc, img) => acc + img.originalSize, 0);
  const totalCompressedBytes = doneImages.reduce((acc, img) => acc + (img.compressedSize || 0), 0);
  const stillProcessing = images.some((img) => img.status === 'compressing');

  const basisOriginalBytes = stillProcessing ? doneOriginalBytes : doneOriginalBytes;
  const totalSpaceSaved = basisOriginalBytes - totalCompressedBytes;
  const totalGrew = !stillProcessing && doneImages.length > 0 && totalSpaceSaved < 0;
  const overallPercentage =
    basisOriginalBytes > 0 && !stillProcessing && doneImages.length > 0
      ? Math.round(((basisOriginalBytes - totalCompressedBytes) / basisOriginalBytes) * 100)
      : null;

  return (
    <div className="space-y-6">
      {/* Total Overview & Bulk Download Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-1">
            <span>{strings?.summary ?? 'Compression Summary'}</span>
            <span aria-hidden="true">·</span>
            <span>{images.length} {images.length === 1 ? strings?.image ?? 'Image' : strings?.images ?? 'Images'}</span>
          </div>

          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mt-2">
            <div>
              <span className="text-xs text-slate-400 block">{strings?.totalOriginal ?? 'Total Original:'}</span>
              <span className="text-lg font-bold font-mono text-slate-200 tabular-nums">
                {formatBytes(stillProcessing ? totalOriginalBytes : basisOriginalBytes || totalOriginalBytes)}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">{strings?.totalCompressed ?? 'Total Compressed:'}</span>
              <span className="text-lg font-bold font-mono text-white tabular-nums">
                {stillProcessing ? strings?.processing ?? 'Processing...' : formatBytes(totalCompressedBytes)}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block">{strings?.totalSaved ?? 'Total Saved:'}</span>
              {stillProcessing ? (
                <span className="text-lg font-bold font-mono text-slate-300 tabular-nums">
                  {strings?.processing ?? 'Processing...'}
                </span>
              ) : totalGrew ? (
                <span className="text-lg font-bold font-mono text-red-400 tabular-nums">
                  {formatBytes(totalSpaceSaved)}{' '}
                  {strings?.grewBy
                    ? strings.grewBy.replace('{bytes}', formatBytes(Math.abs(totalSpaceSaved)))
                    : `(grew by ${formatBytes(Math.abs(totalSpaceSaved))})`}
                </span>
              ) : (
                <span className="text-lg font-bold font-mono text-emerald-400 tabular-nums">
                  {formatBytes(totalSpaceSaved)}
                </span>
              )}
            </div>
            {overallPercentage !== null && overallPercentage !== 0 && (
              <div>
                <span className="text-xs text-slate-400 block">
                  {overallPercentage > 0 ? strings?.reduction ?? 'Reduction:' : strings?.sizeChange ?? 'Size Change:'}
                </span>
                {overallPercentage > 0 ? (
                  <span className="text-xl font-extrabold font-mono text-emerald-300 tabular-nums flex items-center">
                    <ArrowDown className="w-5 h-5 mr-0.5 inline" />
                    {overallPercentage}%
                  </span>
                ) : (
                  <span className="text-xl font-extrabold font-mono text-red-400 tabular-nums flex items-center">
                    <ArrowUp className="w-5 h-5 mr-0.5 inline" />
                    +{Math.abs(overallPercentage)}%
                  </span>
                )}
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
                <span>
                  {strings?.creatingZip
                    ? strings.creatingZip.replace('{progress}', String(zipProgress))
                    : `Creating ZIP (${zipProgress}%)...`}
                </span>
              </>
            ) : (
              <>
                <FileArchive className="w-5 h-5" />
                <span>{strings?.downloadAll ?? 'Download All (ZIP)'}</span>
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
          const keptOriginal = isDone && Boolean(image.keptOriginal);
          const isLarger =
            isDone &&
            !keptOriginal &&
            image.compressedSize !== null &&
            image.compressedSize > image.originalSize;
          const growthBytes =
            isLarger && image.compressedSize !== null
              ? image.compressedSize - image.originalSize
              : 0;
          const realSpaceSaved =
            image.spaceSaved ??
            (image.compressedSize !== null ? image.originalSize - image.compressedSize : 0);
          const isPngOutput =
            image.outputType === 'image/png' || /\.png$/i.test(image.name);

          return (
            <div
              key={image.id}
              className={`bg-white border rounded-2xl p-4 sm:p-5 shadow-xs transition-colors space-y-3 ${
                isLarger
                  ? 'border-red-200 hover:border-red-300'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                {/* Left Column: Thumbnail & Metadata */}
                <div className="flex items-center gap-4 min-w-0 w-full md:w-auto">
                  {/* Thumbnail Preview with comparison indicator */}
                  <div
                    onClick={() => isDone && onOpenComparison(image)}
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 ${
                      isDone ? 'cursor-pointer group' : ''
                    }`}
                    title={isDone ? strings?.compareTitle ?? 'Click to inspect visual quality comparison' : ''}
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
                        <span>{strings?.compare ?? 'Compare'}</span>
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
                          {strings?.alpha ?? 'Alpha'}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 mt-0.5">
                      {image.originalWidth}×{image.originalHeight}px · {strings?.formatLabel ?? 'Format:'}{' '}
                      {image.outputExtension.toUpperCase().replace('.', '')}
                    </p>

                    {/* Status Indicator */}
                    <div className="mt-2 flex items-center gap-2">
                      {isDone && keptOriginal && (
                        <span className="inline-flex items-center gap-1 text-xs text-blue-700 font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          {strings?.keptOriginal ?? 'Kept original (re-encode was larger)'}
                        </span>
                      )}
                      {isDone && isLarger && (
                        <span className="inline-flex items-center gap-1 text-xs text-red-600 font-semibold">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          {strings?.grewByStatus
                            ? strings.grewByStatus.replace('{bytes}', formatBytes(growthBytes))
                            : `Grew by ${formatBytes(growthBytes)} — re-encode is larger than the original`}
                        </span>
                      )}
                      {isDone && !keptOriginal && !isLarger && (
                        <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          {strings?.compressedOk ?? 'Compressed successfully'}
                        </span>
                      )}
                      {isCompressing && (
                        <span className="text-xs text-blue-600 font-medium animate-pulse">
                          {strings?.optimizing ?? 'Optimizing pixels...'}
                        </span>
                      )}
                      {isError && (
                        <span className="inline-flex items-center gap-1 text-xs text-red-600 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          {image.errorMessage || (strings?.compressionError ?? 'Compression error')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Middle Column: Quantitative Metrics */}
                {isDone && image.compressedSize !== null && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 px-3 sm:px-4 bg-slate-50 rounded-xl w-full md:w-auto text-center md:text-left">
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">{strings?.original ?? 'Original'}</span>
                      <span className="text-xs sm:text-sm font-semibold font-mono text-slate-700 tabular-nums">
                        {formatBytes(image.originalSize)}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">
                        {keptOriginal ? strings?.output ?? 'Output' : strings?.compressed ?? 'Compressed'}
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-bold font-mono tabular-nums ${
                          isLarger ? 'text-red-600' : 'text-slate-900'
                        }`}
                      >
                        {formatBytes(image.compressedSize)}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">{strings?.spaceSaved ?? 'Space Saved'}</span>
                      <span
                        className={`text-xs sm:text-sm font-semibold font-mono tabular-nums ${
                          realSpaceSaved < 0 ? 'text-red-600' : 'text-emerald-600'
                        }`}
                      >
                        {formatBytes(realSpaceSaved)}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block font-medium">
                        {isLarger ? strings?.sizeChange ?? 'Size Change' : strings?.reduction ?? 'Reduction'}
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-bold font-mono tabular-nums ${
                          isLarger ? 'text-red-600' : 'text-blue-600'
                        }`}
                      >
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
                        title={strings?.compareActionTitle ?? 'Compare visual before/after'}
                      >
                        <SplitSquareVertical className="w-4 h-4 text-blue-600" />
                        <span className="hidden sm:inline">{strings?.compare ?? 'Compare'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onDownloadSingle(image)}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <Download className="w-4 h-4" />
                        <span>{strings?.download ?? 'Download'}</span>
                      </button>
                    </>
                  )}

                  {isError && (
                    <button
                      type="button"
                      onClick={() => onRecompressSingle(image.id)}
                      className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>{strings?.retry ?? 'Retry'}</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => onRemoveImage(image.id)}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                    title={strings?.removeTitle ?? 'Remove image'}
                    aria-label={strings?.removeAriaLabel ? strings.removeAriaLabel.replace('{name}', image.name) : `Remove ${image.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Honest Inflation Guard Warning + Keep Original Option */}
              {isLarger && (
                <div className="rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-900">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong>
                        {strings?.largerTitle
                          ? strings.largerTitle.replace('{bytes}', formatBytes(growthBytes))
                          : `Output is ${formatBytes(growthBytes)} larger than the original.`}
                      </strong>{' '}
                      {isPngOutput
                        ? strings?.largerPngNote ??
                          'Lossless PNG re-encoding ignores the quality slider; WebP or JPG is usually much smaller for photo-like PNGs.'
                        : strings?.largerNote ??
                          'This image was already tightly compressed for the selected quality.'}
                    </p>
                  </div>
                  {onKeepOriginal && (
                    <button
                      type="button"
                      onClick={() => onKeepOriginal(image.id)}
                      className="shrink-0 inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-500/50 text-amber-900 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-500/20 font-bold text-xs cursor-pointer transition-colors"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>{strings?.keepOriginal ?? 'Keep original'}</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
