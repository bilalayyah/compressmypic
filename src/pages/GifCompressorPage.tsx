import React, { useState, useEffect, useRef } from 'react';
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Download,
  Film,
  Play,
  RotateCcw,
  Trash2,
} from 'lucide-react';
import { TOOL_BY_SLUG } from '../data/tools';
import { ToolPageLayout } from '../components/ToolPageLayout';
import { UploadZone } from '../components/UploadZone';
import {
  DecodedGif,
  GifCompressResult,
  compressAnimatedGif,
  decodeAnimatedGif,
} from '../utils/gifCompressor';
import { formatBytes, getBaseFilename, sanitizeFilename } from '../utils/formatters';
import { triggerDownload } from '../utils/zip';

interface GifCompressorPageProps {
  onNavigate: (path: string) => void;
}

export const GifCompressorPage: React.FC<GifCompressorPageProps> = ({ onNavigate }) => {
  const tool = TOOL_BY_SLUG['/gif-compressor'];

  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [sourcePreviewUrl, setSourcePreviewUrl] = useState<string | null>(null);
  const [decodedGif, setDecodedGif] = useState<DecodedGif | null>(null);
  const [result, setResult] = useState<GifCompressResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [maxColors, setMaxColors] = useState<number>(128);
  const [scalePercent, setScalePercent] = useState<number>(100);
  const [frameStep, setFrameStep] = useState<1 | 2 | 3>(1);

  const [isDecoding, setIsDecoding] = useState<boolean>(false);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [encodeProgress, setEncodeProgress] = useState<number>(0);

  const sourcePreviewRef = useRef<string | null>(null);
  const resultPreviewRef = useRef<string | null>(null);
  sourcePreviewRef.current = sourcePreviewUrl;
  resultPreviewRef.current = result?.previewUrl ?? null;

  useEffect(() => {
    return () => {
      if (sourcePreviewRef.current) URL.revokeObjectURL(sourcePreviewRef.current);
      if (resultPreviewRef.current) URL.revokeObjectURL(resultPreviewRef.current);
    };
  }, []);

  const runCompression = async (
    file: File,
    decoded: DecodedGif,
    colors: number,
    scale: number,
    step: 1 | 2 | 3
  ) => {
    setIsCompressing(true);
    setEncodeProgress(0);
    setErrorMessage(null);
    try {
      const next = await compressAnimatedGif(file, decoded, {
        maxColors: colors,
        scalePercent: scale,
        frameStep: step,
        onProgress: (p) => setEncodeProgress(p),
      });
      setResult((prev) => {
        if (prev?.previewUrl) URL.revokeObjectURL(prev.previewUrl);
        return next;
      });
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'GIF compression failed.');
    } finally {
      setIsCompressing(false);
    }
  };

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;

    setErrorMessage(null);
    setIsDecoding(true);

    if (sourcePreviewUrl) URL.revokeObjectURL(sourcePreviewUrl);
    if (result?.previewUrl) URL.revokeObjectURL(result.previewUrl);
    setResult(null);

    const preview = URL.createObjectURL(file);
    setSourceFile(file);
    setSourcePreviewUrl(preview);

    try {
      const buffer = await file.arrayBuffer();
      const decoded = decodeAnimatedGif(buffer);
      setDecodedGif(decoded);
      setIsDecoding(false);
      await runCompression(file, decoded, maxColors, scalePercent, frameStep);
    } catch (err) {
      setDecodedGif(null);
      setIsDecoding(false);
      setErrorMessage(err instanceof Error ? err.message : 'Could not decode GIF frames.');
    }
  };

  const handleReset = () => {
    if (sourcePreviewUrl) URL.revokeObjectURL(sourcePreviewUrl);
    if (result?.previewUrl) URL.revokeObjectURL(result.previewUrl);
    setSourceFile(null);
    setSourcePreviewUrl(null);
    setDecodedGif(null);
    setResult(null);
    setErrorMessage(null);
  };

  const handleApplyLevel = (level: 'light' | 'balanced' | 'strong') => {
    const cfg =
      level === 'light'
        ? { colors: 192, scale: 100, step: 1 as const }
        : level === 'balanced'
        ? { colors: 96, scale: 85, step: 1 as const }
        : { colors: 64, scale: 75, step: 2 as const };
    setMaxColors(cfg.colors);
    setScalePercent(cfg.scale);
    setFrameStep(cfg.step);
    if (sourceFile && decodedGif) {
      void runCompression(sourceFile, decodedGif, cfg.colors, cfg.scale, cfg.step);
    }
  };

  const targetOutW = decodedGif
    ? Math.max(16, Math.round(decodedGif.width * (scalePercent / 100)))
    : 0;
  const targetOutH = decodedGif
    ? Math.max(16, Math.round(decodedGif.height * (scalePercent / 100)))
    : 0;

  return (
    <ToolPageLayout tool={tool} onNavigate={onNavigate}>
      <div className="space-y-6">
        <UploadZone
          onFilesSelected={handleFilesSelected}
          maxFileSizeMB={30}
          multiple={false}
          disabled={isDecoding || isCompressing}
          accept="image/gif,.gif"
          allowedMimeTypes={['image/gif']}
          allowedExtensionsRegex={/\.gif$/i}
          supportedFormatsLabel="GIF (Animated or Static)"
          title="Drop an animated GIF to compress"
        />

        {errorMessage && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {isDecoding && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800 flex items-center gap-3">
            <RotateCcw className="w-4 h-4 animate-spin text-blue-600" />
            <span>Decoding animated GIF frames locally in your browser...</span>
          </div>
        )}

        {sourceFile && decodedGif && (
          <>
            {/* Compression Controls */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Film className="w-5 h-5 text-blue-600" />
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">{sourceFile.name}</h2>
                    <p className="text-xs text-slate-500 font-mono">
                      {decodedGif.width}×{decodedGif.height}px · {decodedGif.frames.length}{' '}
                      {decodedGif.frames.length === 1 ? 'frame' : 'frames'} ·{' '}
                      {formatBytes(sourceFile.size)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleApplyLevel('light')}
                    className="px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 rounded-lg cursor-pointer"
                  >
                    Light
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyLevel('balanced')}
                    className="px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 rounded-lg cursor-pointer"
                  >
                    Balanced
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyLevel('strong')}
                    className="px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 rounded-lg cursor-pointer"
                  >
                    Max Shrink
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Palette Colors */}
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="font-bold text-slate-700">Color Palette Limit</span>
                    <span className="font-mono font-bold text-blue-600">{maxColors} colors</span>
                  </div>
                  <input
                    type="range"
                    min={16}
                    max={256}
                    step={8}
                    value={maxColors}
                    onChange={(e) => setMaxColors(parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex gap-1.5 mt-2">
                    {[256, 128, 64, 32].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setMaxColors(c)}
                        className={`px-2 py-1 text-[11px] font-semibold rounded-md cursor-pointer ${
                          maxColors === c
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Resize Scale */}
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="font-bold text-slate-700">Output Scale</span>
                    <span className="font-mono font-bold text-blue-600">
                      {scalePercent}% ({targetOutW}×{targetOutH})
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[100, 85, 75, 50, 25].map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setScalePercent(pct)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                          scalePercent === pct
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {pct}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Frame Drop */}
                <div>
                  <span className="text-xs font-bold text-slate-700 block mb-2">
                    Frame Rate Optimization
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {(
                      [
                        { step: 1, label: 'Keep All Frames' },
                        { step: 2, label: 'Drop Every 2nd Frame (~50% smaller)' },
                        { step: 3, label: 'Keep 1 of Every 3 Frames' },
                      ] as const
                    ).map((opt) => (
                      <button
                        key={opt.step}
                        type="button"
                        onClick={() => setFrameStep(opt.step)}
                        disabled={decodedGif.frames.length <= 2 && opt.step > 1}
                        className={`text-left px-3 py-1.5 text-xs font-medium rounded-lg border cursor-pointer disabled:opacity-40 ${
                          frameStep === opt.step
                            ? 'bg-blue-50 border-blue-400 text-blue-800 font-semibold'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() =>
                    void runCompression(sourceFile, decodedGif, maxColors, scalePercent, frameStep)
                  }
                  disabled={isCompressing}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-semibold rounded-xl shadow-xs cursor-pointer"
                >
                  {isCompressing ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>Compressing GIF ({encodeProgress}%)...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Compress GIF</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  disabled={isCompressing}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 text-sm font-medium rounded-xl cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Result & Animated Previews */}
            {result && (
              <div className="space-y-4">
                <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                        Original GIF
                      </span>
                      <span className="text-base font-bold font-mono">
                        {formatBytes(result.originalSize)} · {result.originalFrames}f
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                        Compressed GIF
                      </span>
                      <span
                        className={`text-base font-bold font-mono ${
                          result.isSmaller ? 'text-emerald-400' : 'text-amber-300'
                        }`}
                      >
                        {formatBytes(result.compressedSize)} · {result.outputFrames}f
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                        Size Change
                      </span>
                      <span
                        className={`text-base font-extrabold font-mono ${
                          result.isSmaller ? 'text-emerald-300' : 'text-amber-300'
                        }`}
                      >
                        {result.isSmaller
                          ? `-${result.compressionPercent}%`
                          : `+${Math.abs(result.compressionPercent)}%`}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const clean = sanitizeFilename(getBaseFilename(sourceFile.name));
                      triggerDownload(result.blob, `${clean}_compressed.gif`);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl cursor-pointer shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Compressed GIF</span>
                  </button>
                </div>

                {!result.isSmaller && (
                  <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p>
                      This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below{' '}
                      <strong>{formatBytes(result.originalSize)}</strong>, reduce Color Palette to{' '}
                      <strong>32–64 colors</strong>, lower Output Scale to <strong>75% or 50%</strong>, or drop every 2nd frame.
                    </p>
                  </div>
                )}

                {result.isSmaller && (
                  <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Compressed by <strong>{result.compressionPercent}%</strong> ({formatBytes(result.originalSize - result.compressedSize)} saved) cleanly in your browser.
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4">
                    <div className="flex justify-between text-xs font-semibold text-slate-600 mb-3">
                      <span>Original ({result.originalWidth}×{result.originalHeight}px)</span>
                      <span className="font-mono">{formatBytes(result.originalSize)}</span>
                    </div>
                    <div className="bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center min-h-[200px]">
                      {sourcePreviewUrl && (
                        <img
                          src={sourcePreviewUrl}
                          alt="Original GIF"
                          className="max-h-80 object-contain"
                        />
                      )}
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-4">
                    <div className="flex justify-between text-xs font-semibold text-slate-600 mb-3">
                      <span>Compressed ({result.outputWidth}×{result.outputHeight}px)</span>
                      <span className="font-mono text-blue-600">{formatBytes(result.compressedSize)}</span>
                    </div>
                    <div className="bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center min-h-[200px]">
                      <img
                        src={result.previewUrl}
                        alt="Compressed GIF"
                        className="max-h-80 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </ToolPageLayout>
  );
};
