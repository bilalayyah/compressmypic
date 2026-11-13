import React, { useState, useRef, useEffect, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2, SplitSquareVertical, Columns } from 'lucide-react';
import { ImageItem } from '../types';
import { formatBytes, formatPercent } from '../utils/formatters';

interface ComparisonModalProps {
  image: ImageItem;
  onClose: () => void;
  titlePrefix?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  image,
  onClose,
  titlePrefix = 'Visual Quality Comparison',
  beforeLabel = 'Original (Before)',
  afterLabel = 'Compressed (After)',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100%
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('slider');
  const [zoom, setZoom] = useState<number>(1); // 1 = 100%
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-xs p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image comparison modal"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between gap-4 bg-slate-50">
          <div className="min-w-0">
            <h2 className="text-base font-bold text-slate-900 truncate">
              {titlePrefix}: {image.name}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
              <span>Original: <strong className="font-mono text-slate-700 tabular-nums">{formatBytes(image.originalSize)}</strong></span>
              <span aria-hidden="true">·</span>
              <span>
                Output:{' '}
                <strong
                  className={`font-mono tabular-nums ${
                    image.compressedSize && image.compressedSize > image.originalSize
                      ? 'text-red-600'
                      : 'text-emerald-600'
                  }`}
                >
                  {image.compressedSize ? formatBytes(image.compressedSize) : 'N/A'}
                </strong>
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {image.compressedSize && image.compressedSize > image.originalSize ? 'Size Change:' : 'Reduction:'}{' '}
                <strong
                  className={`font-mono tabular-nums ${
                    image.compressedSize && image.compressedSize > image.originalSize
                      ? 'text-red-600'
                      : 'text-blue-600'
                  }`}
                >
                  {formatPercent(image.compressionPercentage)}
                </strong>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* View Mode Switcher */}
            <div className="hidden sm:flex items-center p-0.5 bg-slate-200/70 rounded-lg">
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`p-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
                  viewMode === 'slider' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Split slider view"
              >
                <SplitSquareVertical className="w-3.5 h-3.5" />
                <span>Slider</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('sideBySide')}
                className={`p-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
                  viewMode === 'sideBySide' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Side by side view"
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Side by Side</span>
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center p-0.5 bg-slate-200/70 rounded-lg">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
                className="p-1.5 text-slate-700 hover:text-slate-900 hover:bg-white rounded-md transition-colors cursor-pointer"
                title="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-mono font-medium text-slate-700 tabular-nums">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(2.5, z + 0.25))}
                className="p-1.5 text-slate-700 hover:text-slate-900 hover:bg-white rounded-md transition-colors cursor-pointer"
                title="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              aria-label="Close comparison view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Viewport */}
        <div className="flex-1 overflow-auto bg-slate-950/90 flex items-center justify-center p-4 select-none relative">
          {viewMode === 'slider' ? (
            <div
              ref={containerRef}
              className="relative max-h-full max-w-full overflow-hidden rounded-lg shadow-lg cursor-ew-resize"
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
                alt={`Compressed version of ${image.name}`}
                className="max-h-[65vh] w-auto object-contain block pointer-events-none"
              />

              {/* Foreground Image: Original (Before) clipped by slider */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={image.originalPreviewUrl}
                  alt={`Original version of ${image.name}`}
                  className="max-h-[65vh] w-auto object-contain max-w-none block"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : 'auto',
                    height: containerRef.current ? `${containerRef.current.clientHeight}px` : 'auto',
                  }}
                />
              </div>

              {/* Vertical Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-slate-800 shadow-md flex items-center justify-center text-xs font-bold border border-slate-200">
                  ↔
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded-md pointer-events-none">
                {beforeLabel}
              </div>
              <div className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded-md pointer-events-none">
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
              <div className="flex flex-col items-center bg-slate-900 rounded-lg p-2 border border-slate-800">
                <span className="text-xs font-semibold text-slate-300 mb-2">{beforeLabel}</span>
                <img
                  src={image.originalPreviewUrl}
                  alt={`Original ${image.name}`}
                  className="max-h-[55vh] object-contain rounded"
                />
              </div>
              <div className="flex flex-col items-center bg-slate-900 rounded-lg p-2 border border-slate-800">
                <span className="text-xs font-semibold text-blue-400 mb-2">{afterLabel}</span>
                <img
                  src={image.compressedPreviewUrl || image.originalPreviewUrl}
                  alt={`Processed ${image.name}`}
                  className="max-h-[55vh] object-contain rounded"
                />
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / Instructions */}
        <div className="px-5 py-3 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <span>Drag the slider handle left or right to inspect pixel quality.</span>
          <div className="flex items-center gap-3">
            <span>Quality Setting: <strong>{image.quality}%</strong></span>
            <span aria-hidden="true">·</span>
            <span>Format: <strong>{image.outputExtension.toUpperCase().replace('.', '')}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};
