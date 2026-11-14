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
import type { ToolDefinition } from '../data/tools';
import type { SupportedLang } from '../locales/config';
import type { ToolPageLayoutStrings } from '../components/ToolPageLayout';
import type { UploadZoneStrings } from '../components/UploadZone';
import type { ComparisonModalStrings } from '../components/ComparisonModal';
import { toSpanishPath } from '../locales/es/slugs';
import { toPortuguesePath } from '../locales/pt/slugs';
import { toFrenchPath } from '../locales/fr/slugs';
import { toGermanPath } from '../locales/de/slugs';
import { toItalianPath } from '../locales/it/slugs';
import { toIndonesianPath } from '../locales/id/slugs';
import { toRussianPath } from '../locales/ru/slugs';
import { toJapanesePath } from '../locales/ja/slugs';
import { toKoreanPath } from '../locales/ko/slugs';
import { toChinesePath } from '../locales/zh/slugs';
import { getAlternates } from '../locales/alternates';
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

export interface PageEsStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PagePtStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageFrStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}
export interface PageDeStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageItStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageIdStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageRuStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageJaStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}

export interface PageKoStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}
export interface PageZhStrings {
  layoutUi: ToolPageLayoutStrings;
  uploadZone: UploadZoneStrings;
  comparisonModal: ComparisonModalStrings;
  toolUi: Record<string, string>;
}



interface GifCompressorPageProps {
  onNavigate: (path: string) => void;
  lang?: SupportedLang;
  tool?: ToolDefinition;
  toolRegistry?: Record<string, ToolDefinition>;
  categoryLabels?: Array<{ id: string; label: string }>;
  esStrings?: PageEsStrings;
  ptStrings?: PagePtStrings;
  frStrings?: PageFrStrings;
  deStrings?: PageDeStrings;
  itStrings?: PageItStrings;
  idStrings?: PageIdStrings;
  ruStrings?: PageRuStrings;
  jaStrings?: PageJaStrings;
  koStrings?: PageKoStrings;
  zhStrings?: PageZhStrings;
}

export const GifCompressorPage: React.FC<GifCompressorPageProps> = ({
  onNavigate,
  lang,
  tool,
  toolRegistry,
  categoryLabels,
  esStrings,
  ptStrings,
  frStrings,
  deStrings,
  itStrings,
  idStrings,
  ruStrings,
  jaStrings,
  koStrings,
  zhStrings,
}) => {
  const activeTool = tool ?? TOOL_BY_SLUG['/gif-compressor'];
  const t = (key: string, fallback: string) =>
    lang === 'zh' && zhStrings?.toolUi
      ? ((zhStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'ja' && jaStrings?.toolUi
      ? ((jaStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'ko' && koStrings?.toolUi
      ? ((koStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'id' && idStrings?.toolUi
      ? ((idStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'ru' && ruStrings?.toolUi
      ? ((ruStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'de' && deStrings?.toolUi
      ? ((deStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'it' && itStrings?.toolUi
      ? ((itStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'pt' && ptStrings?.toolUi
      ? ((ptStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'fr' && frStrings?.toolUi
      ? ((frStrings.toolUi[key] as string | undefined) ?? fallback)
      : lang === 'es' && esStrings?.toolUi
      ? ((esStrings.toolUi[key] as string | undefined) ?? fallback)
      : fallback;

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
        lang,
        onProgress: (p) => setEncodeProgress(p),
      });
      setResult((prev) => {
        if (prev?.previewUrl) URL.revokeObjectURL(prev.previewUrl);
        return next;
      });
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : t('errorGifFailed', 'GIF compression failed.'));
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
      const decoded = decodeAnimatedGif(buffer, lang);
      setDecodedGif(decoded);
      setIsDecoding(false);
      await runCompression(file, decoded, maxColors, scalePercent, frameStep);
    } catch (err) {
      setDecodedGif(null);
      setIsDecoding(false);
      setErrorMessage(err instanceof Error ? err.message : t('errorDecodeFrames', 'Could not decode GIF frames.'));
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
    <ToolPageLayout
      tool={activeTool}
      onNavigate={onNavigate}
      lang={lang}
      ui={lang === 'zh' ? zhStrings?.layoutUi : lang === 'ja' ? jaStrings?.layoutUi : lang === 'ko' ? koStrings?.layoutUi : lang === 'id' ? idStrings?.layoutUi : lang === 'ru' ? ruStrings?.layoutUi : lang === 'de' ? deStrings?.layoutUi : lang === 'it' ? itStrings?.layoutUi : lang === 'pt' ? ptStrings?.layoutUi : lang === 'fr' ? frStrings?.layoutUi : esStrings?.layoutUi}
      canonicalPath={lang === 'zh' ? toChinesePath(activeTool.slug) : lang === 'ja' ? toJapanesePath(activeTool.slug) : lang === 'ko' ? toKoreanPath(activeTool.slug) : lang === 'id' ? toIndonesianPath(activeTool.slug) : lang === 'ru' ? toRussianPath(activeTool.slug) : lang === 'de' ? toGermanPath(activeTool.slug) : lang === 'it' ? toItalianPath(activeTool.slug) : lang === 'es' ? toSpanishPath(activeTool.slug) : lang === 'pt' ? toPortuguesePath(activeTool.slug) : lang === 'fr' ? toFrenchPath(activeTool.slug) : undefined}
      alternates={lang !== 'en' ? getAlternates(activeTool.slug) : undefined}
      toolRegistry={toolRegistry}
      categoryLabels={categoryLabels}
    >
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
          title={t('uploadTitle', 'Drop an animated GIF to compress')}
          strings={lang === 'zh' ? zhStrings?.uploadZone : lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
        />

        {errorMessage && (
          <div className="p-4 pastel-card-14 border rounded-2xl text-sm text-[#b91c1c] dark:text-[#fca5a5] flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {isDecoding && (
          <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-4 text-sm text-[var(--ink-2)] flex items-center gap-3 shadow-[var(--shadow)]">
            <RotateCcw className="w-4 h-4 animate-spin text-[#7c3aed] dark:text-[#a78bfa]" />
            <span>{t('decodingGif', 'Decoding animated GIF frames locally in your browser...')}</span>
          </div>
        )}

        {sourceFile && decodedGif && (
          <>
            {/* Compression Controls */}
            <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 sm:p-6 shadow-[var(--shadow)] space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--line)]">
                <div className="flex items-center gap-2.5">
                  <Film className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
                  <div>
                    <h2 className="font-sans text-sm font-bold text-[var(--ink-navy)]">{sourceFile.name}</h2>
                    <p className="text-xs text-[var(--ink-3)] font-mono">
                      {decodedGif.width}×{decodedGif.height}px · {decodedGif.frames.length}{' '}
                      {decodedGif.frames.length === 1 ? t('frameSingular', 'frame') : t('framePlural', 'frames')} ·{' '}
                      {formatBytes(sourceFile.size)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleApplyLevel('light')}
                    className="px-3.5 py-1.5 text-xs font-semibold bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#7c3aed] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] hover:bg-[#ede9fe] dark:hover:bg-[#7c3aed]/20 text-[var(--ink-2)] rounded-full cursor-pointer transition-colors"
                  >
                    {t('presetLight', 'Light')}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyLevel('balanced')}
                    className="px-3.5 py-1.5 text-xs font-semibold bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#7c3aed] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] hover:bg-[#ede9fe] dark:hover:bg-[#7c3aed]/20 text-[var(--ink-2)] rounded-full cursor-pointer transition-colors"
                  >
                    {t('presetBalanced', 'Balanced')}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyLevel('strong')}
                    className="px-3.5 py-1.5 text-xs font-semibold bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#7c3aed] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] hover:bg-[#ede9fe] dark:hover:bg-[#7c3aed]/20 text-[var(--ink-2)] rounded-full cursor-pointer transition-colors"
                  >
                    {t('presetMaxShrink', 'Max Shrink')}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Palette Colors */}
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="font-bold text-[var(--ink-2)]">{t('colorPaletteLimit', 'Color Palette Limit')}</span>
                    <span className="font-mono font-bold text-[#7c3aed] dark:text-[#a78bfa]">{t('colorsCount', '{count} colors').replace('{count}', String(maxColors))}</span>
                  </div>
                  <input
                    type="range"
                    min={16}
                    max={256}
                    step={8}
                    value={maxColors}
                    onChange={(e) => setMaxColors(parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-[var(--line)] rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex gap-1.5 mt-2">
                    {[256, 128, 64, 32].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setMaxColors(c)}
                        className={`px-2.5 py-1 text-[11px] font-semibold rounded-full cursor-pointer transition-colors ${
                          maxColors === c
                            ? 'bg-[#7c3aed] text-white'
                            : 'bg-[var(--surface-2)] border border-[var(--line)] text-[var(--ink-2)] hover:border-[var(--line-strong)]'
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
                    <span className="font-bold text-[var(--ink-2)]">{t('outputScale', 'Output Scale')}</span>
                    <span className="font-mono font-bold text-[#7c3aed] dark:text-[#a78bfa]">
                      {t('scaleWithDims', '{percent}% ({width}×{height})')
                        .replace('{percent}', String(scalePercent))
                        .replace('{width}', String(targetOutW))
                        .replace('{height}', String(targetOutH))}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[100, 85, 75, 50, 25].map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setScalePercent(pct)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-full cursor-pointer transition-colors ${
                          scalePercent === pct
                            ? 'bg-[#7c3aed] text-white'
                            : 'bg-[var(--surface-2)] border border-[var(--line)] text-[var(--ink-2)] hover:border-[var(--line-strong)]'
                        }`}
                      >
                        {pct}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Frame Drop */}
                <div>
                  <span className="text-xs font-bold text-[var(--ink-2)] block mb-2">
                    {t('frameRateOptimization', 'Frame Rate Optimization')}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {(
                      [
                        { step: 1, label: t('keepAllFrames', 'Keep All Frames') },
                        { step: 2, label: t('dropEvery2nd', 'Drop Every 2nd Frame (~50% smaller)') },
                        { step: 3, label: t('keep1of3', 'Keep 1 of Every 3 Frames') },
                      ] as const
                    ).map((opt) => (
                      <button
                        key={opt.step}
                        type="button"
                        onClick={() => setFrameStep(opt.step)}
                        disabled={decodedGif.frames.length <= 2 && opt.step > 1}
                        className={`text-left px-3 py-1.5 text-xs font-medium rounded-[10px] border cursor-pointer disabled:opacity-40 transition-colors ${
                          frameStep === opt.step
                            ? 'bg-[#ede9fe] dark:bg-[#7c3aed]/25 border-[#7c3aed] dark:border-[#8b5cf6] text-[#6d28d9] dark:text-[#ddd6fe] font-semibold'
                            : 'bg-[var(--surface-2)] border-[var(--line)] text-[var(--ink-2)] hover:border-[var(--line-strong)]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--line)] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() =>
                    void runCompression(sourceFile, decodedGif, maxColors, scalePercent, frameStep)
                  }
                  disabled={isCompressing}
                  className="inline-flex items-center gap-2 px-5 py-2.5 btn-purple-grad disabled:opacity-50 text-sm font-semibold shadow-xs cursor-pointer"
                >
                  {isCompressing ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>
                        {t('compressingGif', 'Compressing GIF ({progress}%)...').replace('{progress}', String(encodeProgress))}
                      </span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>{t('compressGif', 'Compress GIF')}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  disabled={isCompressing}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[var(--surface-2)] border border-[var(--line)] hover:border-[#fecaca] hover:bg-[#fee2e2] hover:text-[#dc2626] dark:hover:bg-[#ef4444]/15 dark:hover:text-[#fca5a5] text-[var(--ink-2)] text-sm font-medium rounded-[11px] cursor-pointer transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>{t('reset', 'Reset')}</span>
                </button>
              </div>
            </div>

            {/* Result & Animated Previews */}
            {result && (
              <div className="space-y-4">
                <div className="panel-pastel-blue border rounded-2xl p-5 shadow-[var(--shadow)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[var(--ink-3)] font-semibold block">
                        {t('originalGif', 'Original GIF')}
                      </span>
                      <span className="text-base font-bold font-mono text-[var(--ink-navy)]">
                        {t('sizeAndFrames', '{size} · {frames}f')
                          .replace('{size}', formatBytes(result.originalSize))
                          .replace('{frames}', String(result.originalFrames))}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[var(--ink-3)] font-semibold block">
                        {t('compressedGif', 'Compressed GIF')}
                      </span>
                      <span
                        className={`text-base font-bold font-mono ${
                          result.isSmaller ? 'text-[#15803d] dark:text-[#4ade80]' : 'text-[#ea580c] dark:text-[#fb923c]'
                        }`}
                      >
                        {t('sizeAndFrames', '{size} · {frames}f')
                          .replace('{size}', formatBytes(result.compressedSize))
                          .replace('{frames}', String(result.outputFrames))}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[var(--ink-3)] font-semibold block">
                        {t('sizeChange', 'Size Change')}
                      </span>
                      <span
                        className={`text-base font-extrabold font-mono ${
                          result.isSmaller ? 'text-[#15803d] dark:text-[#4ade80]' : 'text-[#ea580c] dark:text-[#fb923c]'
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
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 btn-purple-grad text-sm font-semibold cursor-pointer shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t('downloadCompressedGif', 'Download Compressed GIF')}</span>
                  </button>
                </div>

                {!result.isSmaller && (
                  <div className="p-3.5 pastel-card-10 border rounded-xl text-xs text-[var(--ink)] flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-[#ea580c] dark:text-[#fb923c] shrink-0 mt-0.5" />
                    {((lang === 'zh' && zhStrings) || (lang === 'ja' && jaStrings) || (lang === 'ko' && koStrings) || (lang === 'id' && idStrings) || (lang === 'ru' && ruStrings) || (lang === 'de' && deStrings) || (lang === 'it' && itStrings) || (lang === 'es' && esStrings) || (lang === 'pt' && ptStrings) || (lang === 'fr' && frStrings)) ? (
                      <p>
                        {t(
                          'notSmallerNotice',
                          'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
                        ).replace('{size}', formatBytes(result.originalSize))}
                      </p>
                    ) : (
                      <p>
                        This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below{' '}
                        <strong>{formatBytes(result.originalSize)}</strong>, reduce Color Palette to{' '}
                        <strong>32–64 colors</strong>, lower Output Scale to <strong>75% or 50%</strong>, or drop every 2nd frame.
                      </p>
                    )}
                  </div>
                )}

                {result.isSmaller && (
                  <div className="p-3.5 pastel-card-7 border rounded-xl text-xs text-[#15803d] dark:text-[#86efac] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80] shrink-0" />
                    {((lang === 'zh' && zhStrings) || (lang === 'ja' && jaStrings) || (lang === 'ko' && koStrings) || (lang === 'id' && idStrings) || (lang === 'ru' && ruStrings) || (lang === 'de' && deStrings) || (lang === 'it' && itStrings) || (lang === 'es' && esStrings) || (lang === 'pt' && ptStrings) || (lang === 'fr' && frStrings)) ? (
                      <span>
                        {t(
                          'compressedByNotice',
                          'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
                        )
                          .replace('{percent}', String(result.compressionPercent))
                          .replace('{saved}', formatBytes(result.originalSize - result.compressedSize))}
                      </span>
                    ) : (
                      <span>
                        Compressed by <strong>{result.compressionPercent}%</strong> ({formatBytes(result.originalSize - result.compressedSize)} saved) cleanly in your browser.
                      </span>
                    )}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-4 shadow-[var(--shadow)]">
                    <div className="flex justify-between text-xs font-semibold text-[var(--ink-2)] mb-3">
                      <span>
                        {t('originalLabel', 'Original ({width}×{height}px)')
                          .replace('{width}', String(result.originalWidth))
                          .replace('{height}', String(result.originalHeight))}
                      </span>
                      <span className="font-mono">{formatBytes(result.originalSize)}</span>
                    </div>
                    <div className="bg-[var(--surface-2)] border border-[var(--line)] rounded-[12px] overflow-hidden flex items-center justify-center min-h-[200px]">
                      {sourcePreviewUrl && (
                        <img
                          src={sourcePreviewUrl}
                          alt={t('altOriginalGif', 'Original GIF')}
                          className="max-h-80 object-contain"
                        />
                      )}
                    </div>
                  </div>

                  <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-4 shadow-[var(--shadow)]">
                    <div className="flex justify-between text-xs font-semibold text-[var(--ink-2)] mb-3">
                      <span>
                        {t('compressedLabel', 'Compressed ({width}×{height}px)')
                          .replace('{width}', String(result.outputWidth))
                          .replace('{height}', String(result.outputHeight))}
                      </span>
                      <span className="font-mono text-[#15803d] dark:text-[#4ade80] font-bold">{formatBytes(result.compressedSize)}</span>
                    </div>
                    <div className="bg-[var(--surface-2)] border border-[var(--line)] rounded-[12px] overflow-hidden flex items-center justify-center min-h-[200px]">
                      <img
                        src={result.previewUrl}
                        alt={t('altCompressedGif', 'Compressed GIF')}
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
