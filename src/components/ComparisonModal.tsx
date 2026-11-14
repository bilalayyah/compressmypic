import React, { useState, useRef, useEffect, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, SplitSquareVertical, Columns } from 'lucide-react';
import { ImageItem } from '../types';
import { formatBytes, formatPercent } from '../utils/formatters';

export interface ComparisonModalStrings {
  titlePrefix?: string;
  beforeLabel?: string;
  afterLabel?: string;
  closeLabel?: string;
  instruction?: string;
  sliderLabel?: string;
  sideBySideLabel?: string;
  zoomInLabel?: string;
  zoomOutLabel?: string;
  originalLabel?: string;
  outputLabel?: string;
  reductionLabel?: string;
  sizeChangeLabel?: string;
  qualityLabel?: string;
  formatLabel?: string;
  modalAriaLabel?: string;
  altCompressed?: string; // contains {name}
  altOriginal?: string; // contains {name}
  altProcessed?: string; // contains {name}
}

interface ComparisonModalProps extends ComparisonModalStrings {
  image: ImageItem;
  onClose: () => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  image,
  onClose,
  titlePrefix = 'Visual Quality Comparison',
  beforeLabel = 'Original (Before)',
  afterLabel = 'Compressed (After)',
  closeLabel = 'Close comparison view',
  instruction = 'Drag the slider handle left or right to inspect pixel quality.',
  sliderLabel = 'Slider',
  sideBySideLabel = 'Side by Side',
  zoomInLabel = 'Zoom in',
  zoomOutLabel = 'Zoom out',
  originalLabel = 'Original:',
  outputLabel = 'Output:',
  reductionLabel = 'Reduction:',
  sizeChangeLabel = 'Size Change:',
  qualityLabel = 'Quality Setting:',
  formatLabel = 'Format:',
  modalAriaLabel = 'Image comparison modal',
  altCompressed = 'Compressed version of {name}',
  altOriginal = 'Original version of {name}',
  altProcessed = 'Processed version of {name}',
}) => {
  const altCompressedText = altCompressed.replace('{name}', image.name);
  const altOriginalText = altOriginal.replace('{name}', image.name);
  const altProcessedText = altProcessed.replace('{name}', image.name);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('slider');
  const [zoom, setZoom] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePointerMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handlePointerMove);
      window.addEventListener('mouseup', handlePointerUp);
      window.addEventListener('touchmove', handlePointerMove);
      window.addEventListener('touchend', handlePointerUp);
    }
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [isDragging, handlePointerMove, handlePointerUp]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xs p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={modalAriaLabel}
    >
      <div className="bg-[var(--surface)] rounded-2xl shadow-[var(--shadow-lg)] w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden border border-[var(--line)]">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-[var(--line)] flex items-center justify-between gap-4 header-pastel-band">
          <div className="min-w-0">
            <h2 className="font-sans text-lg font-bold text-[var(--ink-navy)] truncate">
              {titlePrefix}: {image.name}
            </h2>
            <div className="flex items-center gap-2 text-xs text-[var(--ink-2)] mt-0.5 flex-wrap">
              <span>{originalLabel} <strong className="font-mono text-[var(--ink)] tabular-nums">{formatBytes(image.originalSize)}</strong></span>
              <span aria-hidden="true">·</span>
              <span>
                {outputLabel}{' '}
                <strong
                  className={`font-mono tabular-nums ${
                    image.compressedSize && image.compressedSize > image.originalSize
                      ? 'text-[#ea580c] dark:text-[#fb923c]'
                      : 'text-[#15803d] dark:text-[#4ade80]'
                  }`}
                >
                  {image.compressedSize ? formatBytes(image.compressedSize) : 'N/A'}
                </strong>
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {image.compressedSize && image.compressedSize > image.originalSize ? sizeChangeLabel : reductionLabel}{' '}
                <strong className="font-mono tabular-nums text-[#7c3aed] dark:text-[#c4b5fd]">
                  {formatPercent(image.compressionPercentage)}
                </strong>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* View Mode Switcher */}
            <div className="hidden sm:flex items-center p-0.5 bg-[var(--surface)] border border-[var(--line)] rounded-xl">
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-[9px] transition-colors cursor-pointer flex items-center gap-1 ${
                  viewMode === 'slider' ? 'bg-[var(--accent-soft)] text-[#6d28d9] dark:text-[#ddd6fe] shadow-xs font-semibold' : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
                }`}
                title={sliderLabel}
              >
                <SplitSquareVertical className="w-3.5 h-3.5 text-[#7c3aed]" />
                <span>{sliderLabel}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('sideBySide')}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-[9px] transition-colors cursor-pointer flex items-center gap-1 ${
                  viewMode === 'sideBySide' ? 'bg-[var(--accent-soft)] text-[#6d28d9] dark:text-[#ddd6fe] shadow-xs font-semibold' : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
                }`}
                title={sideBySideLabel}
              >
                <Columns className="w-3.5 h-3.5 text-[#7c3aed]" />
                <span>{sideBySideLabel}</span>
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center p-0.5 bg-[var(--surface)] border border-[var(--line)] rounded-xl">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
                className="p-1.5 text-[var(--ink-2)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)] rounded-lg transition-colors cursor-pointer"
                title={zoomOutLabel}
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-mono font-medium text-[var(--ink)] tabular-nums">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(2.5, z + 0.25))}
                className="p-1.5 text-[var(--ink-2)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)] rounded-lg transition-colors cursor-pointer"
                title={zoomInLabel}
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[var(--ink-2)] hover:text-[var(--ink)] bg-[var(--surface)] border border-[var(--line)] rounded-full transition-colors cursor-pointer"
              aria-label={closeLabel}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Comparison Viewport */}
        <div className="flex-1 overflow-auto bg-[#0f172a] flex items-center justify-center p-4 select-none relative">
          {viewMode === 'slider' ? (
            <div
              ref={containerRef}
              className="relative max-h-full max-w-full overflow-hidden rounded-2xl shadow-lg cursor-ew-resize"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: 'center center',
                transition: 'transform 0.15s ease-out',
              }}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              {/* Background Image: Compressed (After) */}
              <img
                src={image.compressedPreviewUrl || image.originalPreviewUrl}
                alt={altCompressedText}
                className="max-h-[65vh] w-auto object-contain block pointer-events-none"
              />

              {/* Foreground Image: Original (Before) clipped by slider */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={image.originalPreviewUrl}
                  alt={altOriginalText}
                  className="max-h-[65vh] w-auto object-contain max-w-none block"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : 'auto',
                    height: containerRef.current ? `${containerRef.current.clientHeight}px` : 'auto',
                  }}
                />
              </div>

              {/* Vertical Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.25)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[42px] h-[42px] rounded-full bg-white text-[#0f172a] shadow-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="m9 8-4 4 4 4" />
                    <path d="m15 8 4 4-4 4" />
                  </svg>
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-slate-100 text-[11px] font-bold uppercase tracking-[0.06em] px-3 py-1 rounded-full pointer-events-none">
                {beforeLabel}
              </div>
              <div className="absolute top-3 right-3 bg-[#7c3aed]/90 backdrop-blur-xs text-white text-[11px] font-bold uppercase tracking-[0.06em] px-3 py-1 rounded-full pointer-events-none">
                {afterLabel}
              </div>
            </div>
          ) : (
            /* Side By Side View */
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-full max-h-full"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: 'center center',
              }}
            >
              <div className="flex flex-col items-center bg-[#1e293b] rounded-2xl p-3 border border-slate-700">
                <span className="text-xs font-semibold text-slate-300 mb-2">{beforeLabel}</span>
                <img
                  src={image.originalPreviewUrl}
                  alt={altOriginalText}
                  className="max-h-[55vh] object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center bg-[#1e293b] rounded-2xl p-3 border border-slate-700">
                <span className="text-xs font-semibold text-[#c4b5fd] mb-2">{afterLabel}</span>
                <img
                  src={image.compressedPreviewUrl || image.originalPreviewUrl}
                  alt={altProcessedText}
                  className="max-h-[55vh] object-contain rounded-lg"
                />
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / Instructions */}
        <div className="px-5 py-3 border-t border-[var(--line)] bg-[var(--surface)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--ink-2)] gap-2">
          <span>{instruction}</span>
          <div className="flex items-center gap-3">
            <span>{qualityLabel} <strong className="text-[var(--ink)]">{image.quality}%</strong></span>
            <span aria-hidden="true">·</span>
            <span>{formatLabel} <strong className="text-[var(--ink)]">{image.outputExtension.toUpperCase().replace('.', '')}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};
