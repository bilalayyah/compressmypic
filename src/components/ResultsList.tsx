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

  const basisOriginalBytes = doneOriginalBytes;
  const totalSpaceSaved = basisOriginalBytes - totalCompressedBytes;
  const totalGrew = !stillProcessing && doneImages.length > 0 && totalSpaceSaved < 0;
  const overallPercentage =
    basisOriginalBytes > 0 && !stillProcessing && doneImages.length > 0
      ? Math.round(((basisOriginalBytes - totalCompressedBytes) / basisOriginalBytes) * 100)
      : null;

  return (
    <div className="space-y-6">
      {/* Total Overview & Bulk Download Header */}
      <div className="panel-pastel-blue border rounded-2xl p-5 sm:p-7 shadow-[var(--shadow)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#6d28d9] dark:text-[#c4b5fd] tracking-wider uppercase mb-1">
            <span>{strings?.summary ?? 'Compression Summary'}</span>
            <span aria-hidden="true">·</span>
            <span>{images.length} {images.length === 1 ? strings?.image ?? 'Image' : strings?.images ?? 'Images'}</span>
          </div>

          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mt-2">
            <div>
              <span className="text-xs text-[var(--ink-3)] block">{strings?.totalOriginal ?? 'Total Original:'}</span>
              <span className="text-lg font-bold font-mono text-[var(--ink-2)] tabular-nums">
                {formatBytes(stillProcessing ? totalOriginalBytes : basisOriginalBytes || totalOriginalBytes)}
              </span>
            </div>
            <div>
              <span className="text-xs text-[var(--ink-3)] block">{strings?.totalCompressed ?? 'Total Compressed:'}</span>
              <span className="text-lg font-bold font-mono text-[var(--ink-navy)] tabular-nums">
                {stillProcessing ? strings?.processing ?? 'Processing...' : formatBytes(totalCompressedBytes)}
              </span>
            </div>
            <div>
              <span className="text-xs text-[var(--ink-3)] block">{strings?.totalSaved ?? 'Total Saved:'}</span>
              {stillProcessing ? (
                <span className="text-lg font-bold font-mono text-[var(--ink-2)] tabular-nums">
                  {strings?.processing ?? 'Processing...'}
                </span>
              ) : totalGrew ? (
                <span className="text-lg font-bold font-mono text-[#ea580c] dark:text-[#fb923c] tabular-nums">
                  {formatBytes(totalSpaceSaved)}{' '}
                  {strings?.grewBy
                    ? strings.grewBy.replace('{bytes}', formatBytes(Math.abs(totalSpaceSaved)))
                    : `(grew by ${formatBytes(Math.abs(totalSpaceSaved))})`}
                </span>
              ) : (
                <span className="text-lg font-bold font-mono text-[#15803d] dark:text-[#4ade80] tabular-nums">
                  {formatBytes(totalSpaceSaved)}
                </span>
              )}
            </div>
            {overallPercentage !== null && overallPercentage !== 0 && (
              <div>
                <span className="text-xs text-[var(--ink-3)] block">
                  {overallPercentage > 0 ? strings?.reduction ?? 'Reduction:' : strings?.sizeChange ?? 'Size Change:'}
                </span>
                {overallPercentage > 0 ? (
                  <span className="text-xl font-extrabold font-mono text-[#15803d] dark:text-[#4ade80] tabular-nums flex items-center">
                    <ArrowDown className="w-5 h-5 mr-0.5 inline" />
                    {overallPercentage}%
                  </span>
                ) : (
                  <span className="text-xl font-extrabold font-mono text-[#ea580c] dark:text-[#fb923c] tabular-nums flex items-center">
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
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 btn-purple-grad disabled:opacity-45 text-sm font-semibold shadow-sm cursor-pointer whitespace-nowrap"
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
              className={`bg-[var(--surface)] border rounded-2xl p-4 sm:p-5 shadow-[var(--shadow)] transition-colors space-y-3 ${
                isLarger
                  ? 'border-[#fb923c]/60 hover:border-[#ea580c]'
                  : 'border-[var(--line)] hover:border-[var(--line-strong)]'
              }`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                {/* Left Column: Thumbnail & Metadata */}
                <div className="flex items-center gap-4 min-w-0 w-full md:w-auto">
                  {/* Thumbnail Preview with comparison indicator */}
                  <div
                    onClick={() => isDone && onOpenComparison(image)}
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[var(--surface-2)] border border-[var(--line)] shrink-0 ${
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
                      <div className="absolute inset-0 bg-[var(--surface)]/80 backdrop-blur-xs flex items-center justify-center">
                        <RotateCcw className="w-6 h-6 text-[#7c3aed] animate-spin" />
                      </div>
                    )}
                    {isDone && (
                      <div className="absolute inset-0 bg-slate-900/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[11px] font-semibold gap-1">
                        <SplitSquareVertical className="w-4 h-4" />
                        <span>{strings?.compare ?? 'Compare'}</span>
                      </div>
                    )}
                  </div>

                  {/* Info Text */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-[var(--ink-navy)] truncate">
                        {image.name}
                      </h3>
                      {image.hasAlpha && (
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 bg-[var(--accent-soft)] border border-[#ddd6fe] dark:border-[#8b5cf6]/35 text-[#6d28d9] dark:text-[#ddd6fe] rounded-full">
                          {strings?.alpha ?? 'Alpha'}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[var(--ink-3)] mt-0.5 font-mono">
                      {image.originalWidth}×{image.originalHeight}px · {strings?.formatLabel ?? 'Format:'}{' '}
                      {image.outputExtension.toUpperCase().replace('.', '')}
                    </p>

                    {/* Status Indicator */}
                    <div className="mt-2 flex items-center gap-2">
                      {isDone && keptOriginal && (
                        <span className="inline-flex items-center gap-1 text-xs text-[#6d28d9] dark:text-[#c4b5fd] font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#7c3aed] shrink-0" />
                          {strings?.keptOriginal ?? 'Kept original (re-encode was larger)'}
                        </span>
                      )}
                      {isDone && isLarger && (
                        <span className="inline-flex items-center gap-1 text-xs text-[#c2410c] dark:text-[#fdba74] font-semibold">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          {strings?.grewByStatus
                            ? strings.grewByStatus.replace('{bytes}', formatBytes(growthBytes))
                            : `Grew by ${formatBytes(growthBytes)} — re-encode is larger than the original`}
                        </span>
                      )}
                      {isDone && !keptOriginal && !isLarger && (
                        <span className="inline-flex items-center gap-1 text-xs text-[#15803d] dark:text-[#4ade80] font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          {strings?.compressedOk ?? 'Compressed successfully'}
                        </span>
                      )}
                      {isCompressing && (
                        <span className="text-xs text-[#7c3aed] dark:text-[#c4b5fd] font-medium animate-pulse">
                          {strings?.optimizing ?? 'Optimizing pixels...'}
                        </span>
                      )}
                      {isError && (
                        <span className="inline-flex items-center gap-1 text-xs text-[#dc2626] dark:text-[#f87171] font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {image.errorMessage || (strings?.compressionError ?? 'Compression error')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Middle Column: Quantitative Metrics */}
                {isDone && image.compressedSize !== null && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2.5 px-3 sm:px-4 bg-[var(--surface-2)] border border-[var(--line)] rounded-xl w-full md:w-auto text-center md:text-left">
                    <div>
                      <span className="text-[11px] text-[var(--ink-3)] block font-medium">{strings?.original ?? 'Original'}</span>
                      <span className="text-xs sm:text-sm font-semibold font-mono text-[var(--ink-2)] tabular-nums">
                        {formatBytes(image.originalSize)}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-[var(--ink-3)] block font-medium">
                        {keptOriginal ? strings?.output ?? 'Output' : strings?.compressed ?? 'Compressed'}
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-bold font-mono tabular-nums ${
                          isLarger ? 'text-[#ea580c] dark:text-[#fb923c]' : 'text-[var(--ink-navy)]'
                        }`}
                      >
                        {formatBytes(image.compressedSize)}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-[var(--ink-3)] block font-medium">{strings?.spaceSaved ?? 'Space Saved'}</span>
                      <span
                        className={`text-xs sm:text-sm font-semibold font-mono tabular-nums ${
                          realSpaceSaved < 0 ? 'text-[#ea580c] dark:text-[#fb923c]' : 'text-[#15803d] dark:text-[#4ade80]'
                        }`}
                      >
                        {formatBytes(realSpaceSaved)}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-[var(--ink-3)] block font-medium">
                        {isLarger ? strings?.sizeChange ?? 'Size Change' : strings?.reduction ?? 'Reduction'}
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-bold font-mono tabular-nums ${
                          isLarger ? 'text-[#ea580c] dark:text-[#fb923c]' : 'text-[#15803d] dark:text-[#4ade80]'
                        }`}
                      >
                        {formatPercent(image.compressionPercentage)}
                      </span>
                    </div>
                  </div>
                )}

                {/* Right Column: Actions */}
                <div className="flex items-center gap-2 w-full md:w-auto justify-end border-t border-[var(--line)] md:border-t-0 pt-3 md:pt-0">
                  {isDone && (
                    <>
                      <button
                        type="button"
                        onClick={() => onOpenComparison(image)}
                        className="px-3.5 py-2 bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#7c3aed]/50 text-[var(--ink)] text-xs font-semibold rounded-[11px] transition-colors cursor-pointer flex items-center gap-1.5"
                        title={strings?.compareActionTitle ?? 'Compare visual before/after'}
                      >
                        <SplitSquareVertical className="w-4 h-4 text-[#7c3aed] dark:text-[#c4b5fd]" />
                        <span className="hidden sm:inline">{strings?.compare ?? 'Compare'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onDownloadSingle(image)}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-[11px] shadow-xs transition-colors cursor-pointer whitespace-nowrap"
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
                      className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-semibold text-[#7c3aed] hover:bg-[var(--accent-soft)] rounded-[11px] transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>{strings?.retry ?? 'Retry'}</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => onRemoveImage(image.id)}
                    className="p-2 text-[var(--ink-3)] hover:text-[#dc2626] hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-colors cursor-pointer"
                    title={strings?.removeTitle ?? 'Remove image'}
                    aria-label={strings?.removeAriaLabel ? strings.removeAriaLabel.replace('{name}', image.name) : `Remove ${image.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Honest Inflation Guard Warning + Keep Original Option */}
              {isLarger && (
                <div className="rounded-xl border pastel-card-10 px-3.5 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[var(--ink)]">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#ea580c] dark:text-[#fb923c] shrink-0 mt-0.5" />
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
                      className="shrink-0 inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-[10px] bg-[var(--surface)] border border-[var(--line)] text-[var(--ink)] hover:border-[#7c3aed] font-bold text-xs cursor-pointer transition-colors"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-[#7c3aed]" />
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
