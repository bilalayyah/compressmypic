import React from 'react';
import { Sliders, RotateCcw, Trash2, Play, Info, AlertTriangle } from 'lucide-react';
import { CompressionPreset, CompressionSettings, OutputFormatChoice } from '../types';

export interface CompressionControlsStrings {
  modeLabel?: string;
  presetLow?: string;
  presetBalanced?: string;
  presetHigh?: string;
  presetCustom?: string;
  formatLabel?: string;
  formatOriginal?: string;
  qualityLabel?: string;
  qualityHigh?: string;
  qualityOptimal?: string;
  qualityMax?: string;
  qualityAriaLabel?: string;
  compressAll?: string;
  compressing?: string;
  clearAll?: string;
  clearAllTitle?: string;
  transparencyTitle?: string;
  transparencyBody?: string;
  pngTip?: string;
}

interface CompressionControlsProps {
  settings: CompressionSettings;
  onUpdateSettings: (newSettings: Partial<CompressionSettings>) => void;
  onCompressAll: () => void;
  onClearAll: () => void;
  totalImagesCount: number;
  hasTransparentImages: boolean;
  hasPngImages?: boolean;
  isCompressing: boolean;
  strings?: CompressionControlsStrings;
}

export const CompressionControls: React.FC<CompressionControlsProps> = ({
  settings,
  onUpdateSettings,
  onCompressAll,
  onClearAll,
  totalImagesCount,
  hasTransparentImages,
  hasPngImages = false,
  isCompressing,
  strings,
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
    hasTransparentImages && settings.format === 'jpeg';

  const showPngLosslessTip =
    settings.format === 'png' || (settings.format === 'original' && hasPngImages);

  return (
    <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 sm:p-6 shadow-[var(--shadow)]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[var(--line)]">
        {/* Left: Compression Preset Tabs */}
        <div>
          <label className="text-xs font-bold text-[var(--ink-3)] uppercase tracking-wider block mb-2">
            {strings?.modeLabel ?? 'Compression Mode'}
          </label>
          <div className="flex flex-wrap items-center gap-1 p-1 bg-[var(--surface-2)] border border-[var(--line)] rounded-xl">
            <button
              type="button"
              onClick={() => handlePresetSelect('low')}
              className={`px-3.5 py-1.5 text-xs rounded-[9px] transition-all cursor-pointer whitespace-nowrap ${
                settings.preset === 'low'
                  ? 'bg-[var(--surface)] text-[#6d28d9] dark:text-[#ddd6fe] font-semibold shadow-xs'
                  : 'text-[var(--ink-2)] font-medium hover:text-[var(--ink)]'
              }`}
            >
              {strings?.presetLow ?? 'Low Compression (85%)'}
            </button>
            <button
              type="button"
              onClick={() => handlePresetSelect('balanced')}
              className={`px-3.5 py-1.5 text-xs rounded-[9px] transition-all cursor-pointer whitespace-nowrap ${
                settings.preset === 'balanced'
                  ? 'bg-[var(--surface)] text-[#6d28d9] dark:text-[#ddd6fe] font-semibold shadow-xs'
                  : 'text-[var(--ink-2)] font-medium hover:text-[var(--ink)]'
              }`}
            >
              {strings?.presetBalanced ?? 'Balanced (70%)'}
            </button>
            <button
              type="button"
              onClick={() => handlePresetSelect('high')}
              className={`px-3.5 py-1.5 text-xs rounded-[9px] transition-all cursor-pointer whitespace-nowrap ${
                settings.preset === 'high'
                  ? 'bg-[var(--surface)] text-[#6d28d9] dark:text-[#ddd6fe] font-semibold shadow-xs'
                  : 'text-[var(--ink-2)] font-medium hover:text-[var(--ink)]'
              }`}
            >
              {strings?.presetHigh ?? 'High Compression (50%)'}
            </button>
            <button
              type="button"
              onClick={() => onUpdateSettings({ preset: 'custom' })}
              className={`px-3.5 py-1.5 text-xs rounded-[9px] transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                settings.preset === 'custom'
                  ? 'bg-[var(--surface)] text-[#6d28d9] dark:text-[#ddd6fe] font-semibold shadow-xs'
                  : 'text-[var(--ink-2)] font-medium hover:text-[var(--ink)]'
              }`}
            >
              <Sliders className="w-3.5 h-3.5 text-[#7c3aed] dark:text-[#c4b5fd]" />
              {strings?.presetCustom ?? 'Custom'}
            </button>
          </div>
        </div>

        {/* Right: Output Format Selection */}
        <div>
          <label className="text-xs font-bold text-[var(--ink-3)] uppercase tracking-wider block mb-2">
            {strings?.formatLabel ?? 'Output Format'}
          </label>
          <div className="flex items-center gap-1 p-1 bg-[var(--surface-2)] border border-[var(--line)] rounded-xl">
            {(
              [
                { id: 'original', label: strings?.formatOriginal ?? 'Original' },
                { id: 'jpeg', label: 'JPG' },
                { id: 'png', label: 'PNG' },
                { id: 'webp', label: 'WebP' },
              ] as { id: OutputFormatChoice; label: string }[]
            ).map((fmt) => (
              <button
                key={fmt.id}
                type="button"
                onClick={() => onUpdateSettings({ format: fmt.id })}
                className={`px-3 py-1.5 text-xs font-semibold rounded-[9px] transition-all cursor-pointer whitespace-nowrap ${
                  settings.format === fmt.id
                    ? 'btn-purple-grad shadow-xs'
                    : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
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
            <span className="font-semibold text-[var(--ink)] flex items-center gap-1.5">
              {strings?.qualityLabel ?? 'Quality Target:'}
              <span className="text-[#7c3aed] dark:text-[#c4b5fd] font-bold font-mono text-sm tabular-nums">
                {settings.quality}%
              </span>
            </span>
            <span className="text-[var(--ink-3)]">
              {settings.quality >= 80
                ? strings?.qualityHigh ?? 'High Fidelity'
                : settings.quality >= 60
                  ? strings?.qualityOptimal ?? 'Optimal Web Balance'
                  : strings?.qualityMax ?? 'Max Space Savings'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[var(--ink-3)] font-mono">10%</span>
            <input
              type="range"
              min="10"
              max="100"
              step="1"
              value={settings.quality}
              onChange={handleSliderChange}
              disabled={isCompressing}
              className="w-full h-2 bg-[var(--line)] rounded-lg appearance-none cursor-pointer"
              aria-label={strings?.qualityAriaLabel ?? 'Quality slider from 10 to 100 percent'}
            />
            <span className="text-xs text-[var(--ink-3)] font-mono">100%</span>
          </div>
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center gap-2.5 pt-2 md:pt-0">
          <button
            type="button"
            onClick={onCompressAll}
            disabled={isCompressing || totalImagesCount === 0}
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 btn-purple-grad disabled:opacity-45 text-sm font-semibold shadow-xs cursor-pointer whitespace-nowrap shrink-0"
          >
            {isCompressing ? (
              <>
                <RotateCcw className="w-4 h-4 animate-spin" />
                <span>{strings?.compressing ?? 'Compressing...'}</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>{strings?.compressAll ?? 'Re-compress All'}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onClearAll}
            disabled={isCompressing || totalImagesCount === 0}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[var(--surface)] border border-[var(--line)] hover:border-[#7c3aed]/40 hover:bg-[var(--accent-soft)] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] text-[var(--ink-2)] text-sm font-medium rounded-[11px] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            title={strings?.clearAllTitle ?? 'Clear all images'}
          >
            <Trash2 className="w-4 h-4" />
            <span className="hidden sm:inline">{strings?.clearAll ?? 'Clear All'}</span>
          </button>
        </div>
      </div>

      {/* Transparent PNG warning if JPG selected */}
      {isConvertingTransparentToJpeg && (
        <div className="mt-4 p-3.5 pastel-card-10 border rounded-xl text-xs text-[var(--ink)] flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 mt-0.5 text-[#ea580c] dark:text-[#fb923c] shrink-0" />
          <div className="space-y-1">
            <p className="font-semibold">{strings?.transparencyTitle ?? 'Transparency Notice for JPEG Conversion'}</p>
            {strings?.transparencyBody ? (
              <p className="text-[var(--ink-2)]">{strings.transparencyBody}</p>
            ) : (
              <p className="text-[var(--ink-2)]">
                JPEG format does not support transparency (alpha channels). Transparent backgrounds will be replaced with a solid matte background (default white). Select <strong>PNG</strong> or <strong>WebP</strong> if you wish to retain transparent backgrounds.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Format Info Note */}
      {showPngLosslessTip && (
        <div className="mt-4 p-3.5 pastel-card-2 border rounded-xl text-xs text-[var(--ink)] flex items-start gap-2.5">
          <Info className="w-4 h-4 mt-0.5 text-[#2563eb] dark:text-[#60a5fa] shrink-0" />
          {strings?.pngTip ? (
            <p className="text-[var(--ink-2)]">{strings.pngTip}</p>
          ) : (
            <p className="text-[var(--ink-2)]">
              PNG is a lossless format and ignores the quality slider, so re-encoding a PNG can sometimes match or exceed the original file size. For photo-like PNGs, selecting <strong>WebP</strong> or <strong>JPG</strong> usually produces 50–80% smaller files.
            </p>
          )}
        </div>
      )}
    </div>
  );
};
