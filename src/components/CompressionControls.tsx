import React from 'react';
import { Sliders, RotateCcw, Trash2, Play, Info, AlertTriangle, Layers } from 'lucide-react';
import { CompressionPreset, CompressionSettings, OutputFormatChoice } from '../types';

interface CompressionControlsProps {
  settings: CompressionSettings;
  onUpdateSettings: (newSettings: Partial<CompressionSettings>) => void;
  onCompressAll: () => void;
  onClearAll: () => void;
  totalImagesCount: number;
  hasTransparentImages: boolean;
  isCompressing: boolean;
}

export const CompressionControls: React.FC<CompressionControlsProps> = ({
  settings,
  onUpdateSettings,
  onCompressAll,
  onClearAll,
  totalImagesCount,
  hasTransparentImages,
  isCompressing,
}) => {
  const handlePresetSelect = (preset: CompressionPreset) => {
    let quality = settings.quality;
    if (preset === 'low') quality = 85;
    if (preset === 'balanced') quality = 70;
    if (preset === 'high') quality = 50;
    onUpdateSettings({ preset, quality });
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    onUpdateSettings({
      quality: val,
      preset: 'custom',
    });
  };

  const isConvertingTransparentToJpeg =
    hasTransparentImages &&
    (settings.format === 'jpeg' || (settings.format === 'original' && false));

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
        {/* Left: Compression Preset Tabs */}
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
            Compression Mode
          </label>
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            <button
              type="button"
              onClick={() => handlePresetSelect('low')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                settings.preset === 'low'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Low Compression (85%)
            </button>
            <button
              type="button"
              onClick={() => handlePresetSelect('balanced')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                settings.preset === 'balanced'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Balanced (70%)
            </button>
            <button
              type="button"
              onClick={() => handlePresetSelect('high')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                settings.preset === 'high'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              High Compression (50%)
            </button>
            <button
              type="button"
              onClick={() => onUpdateSettings({ preset: 'custom' })}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                settings.preset === 'custom'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              Custom
            </button>
          </div>
        </div>

        {/* Right: Output Format Selection */}
        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
            Output Format
          </label>
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            {(
              [
                { id: 'original', label: 'Original' },
                { id: 'jpeg', label: 'JPG' },
                { id: 'png', label: 'PNG' },
                { id: 'webp', label: 'WebP' },
              ] as { id: OutputFormatChoice; label: string }[]
            ).map((fmt) => (
              <button
                key={fmt.id}
                type="button"
                onClick={() => onUpdateSettings({ format: fmt.id })}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  settings.format === fmt.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {fmt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Slider Area */}
      <div className="pt-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1 max-w-xl">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-semibold text-slate-700 flex items-center gap-1.5">
              Quality Target:
              <span className="text-blue-600 font-bold font-mono text-sm tabular-nums">
                {settings.quality}%
              </span>
            </span>
            <span className="text-slate-500">
              {settings.quality >= 80 ? 'High Fidelity' : settings.quality >= 60 ? 'Optimal Web Balance' : 'Max Space Savings'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-mono">10%</span>
            <input
              type="range"
              min="10"
              max="100"
              step="1"
              value={settings.quality}
              onChange={handleSliderChange}
              disabled={isCompressing}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Quality slider from 10 to 100 percent"
            />
            <span className="text-xs text-slate-400 font-mono">100%</span>
          </div>
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center gap-2 pt-2 md:pt-0">
          <button
            type="button"
            onClick={onCompressAll}
            disabled={isCompressing || totalImagesCount === 0}
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            {isCompressing ? (
              <>
                <RotateCcw className="w-4 h-4 animate-spin" />
                <span>Compressing...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Re-compress All</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onClearAll}
            disabled={isCompressing || totalImagesCount === 0}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 text-sm font-medium rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0"
            title="Clear all images"
          >
            <Trash2 className="w-4 h-4" />
            <span className="hidden sm:inline">Clear All</span>
          </button>
        </div>
      </div>

      {/* Transparent PNG warning if JPG selected */}
      {isConvertingTransparentToJpeg && (
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 mt-0.5 text-amber-600 shrink-0" />
          <div className="space-y-1">
            <p className="font-semibold">Transparency Notice for JPEG Conversion</p>
            <p className="text-amber-700">
              JPEG format does not support transparency (alpha channels). Transparent backgrounds will be replaced with a solid matte background (default white). Select <strong>PNG</strong> or <strong>WebP</strong> if you wish to retain transparent backgrounds.
            </p>
          </div>
        </div>
      )}

      {/* Format Info Note */}
      {settings.format === 'png' && (
        <div className="mt-4 p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-blue-800 flex items-start gap-2">
          <Info className="w-4 h-4 mt-0.5 text-blue-600 shrink-0" />
          <p>
            PNG is a lossless format. While metadata is stripped to minimize file size, for 50-80% smaller file sizes with preserved alpha transparency, consider selecting <strong>WebP</strong> format.
          </p>
        </div>
      )}
    </div>
  );
};
