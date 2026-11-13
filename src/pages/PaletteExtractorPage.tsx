import React, { useState, useEffect, useRef } from 'react';
import {
  Palette,
  Copy,
  Check,
  Download,
  Trash2,
  AlertCircle,
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
import { getAlternates } from '../locales/alternates';
import { ToolPageLayout } from '../components/ToolPageLayout';
import { UploadZone } from '../components/UploadZone';
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  LoadedImageInfo,
  canvasToBlob,
  loadExtendedImageInfo,
} from '../utils/imageProcessing';
import { PaletteSwatch, extractDominantPalette } from '../utils/canvasEffects';
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

interface PaletteExtractorPageProps {
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
}

export const PaletteExtractorPage: React.FC<PaletteExtractorPageProps> = ({
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
}) => {
  const activeTool = tool ?? TOOL_BY_SLUG['/image-color-palette-extractor'];
  const t = (key: string, fallback: string) => {
    const table =
      lang === 'ja' ? jaStrings?.toolUi : lang === 'ko' ? koStrings?.toolUi : lang === 'id' ? idStrings?.toolUi : lang === 'ru' ? ruStrings?.toolUi : lang === 'de' ? deStrings?.toolUi : lang === 'it' ? itStrings?.toolUi : lang === 'pt' ? ptStrings?.toolUi : lang === 'fr' ? frStrings?.toolUi : lang === 'es' ? esStrings?.toolUi : undefined;
    return table ? (table[key] as string | undefined) ?? fallback : fallback;
  };
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [imageInfo, setImageInfo] = useState<LoadedImageInfo | null>(null);
  const imageInfoRef = useRef<LoadedImageInfo | null>(null);
  imageInfoRef.current = imageInfo;

  const [colorCount, setColorCount] = useState<number>(6);
  const [swatches, setSwatches] = useState<PaletteSwatch[]>([]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (imageInfoRef.current?.previewUrl) URL.revokeObjectURL(imageInfoRef.current.previewUrl);
    };
  }, []);

  useEffect(() => {
    if (!imageInfo) {
      setSwatches([]);
      return;
    }
    setSwatches(extractDominantPalette(imageInfo.img, colorCount));
  }, [imageInfo, colorCount]);

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;
    setError(null);
    try {
      const info = await loadExtendedImageInfo(file);
      if (imageInfoRef.current?.previewUrl) URL.revokeObjectURL(imageInfoRef.current.previewUrl);
      setSourceFile(file);
      setImageInfo(info);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorUnableToLoadImage', 'Unable to load image.'));
    }
  };

  const handleClear = () => {
    if (imageInfoRef.current?.previewUrl) URL.revokeObjectURL(imageInfoRef.current.previewUrl);
    setSourceFile(null);
    setImageInfo(null);
    setSwatches([]);
  };

  const copyText = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1600);
    } catch {
      setError(t('errorClipboardDenied', 'Clipboard permission denied.'));
    }
  };

  const handleExportPngCard = async () => {
    if (!imageInfo || !sourceFile || swatches.length === 0) return;
    const cardW = 1000;
    const imgMaxH = 440;
    const scale = Math.min((cardW - 80) / imageInfo.width, imgMaxH / imageInfo.height);
    const drawW = Math.round(imageInfo.width * scale);
    const drawH = Math.round(imageInfo.height * scale);
    const swatchStripH = 150;
    const cardH = drawH + swatchStripH + 90;

    const canvas = document.createElement('canvas');
    canvas.width = cardW;
    canvas.height = cardH;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, cardW, cardH);

    // Draw centered image
    ctx.drawImage(imageInfo.img, (cardW - drawW) / 2, 36, drawW, drawH);

    // Draw color swatches
    const padX = 40;
    const gap = 12;
    const totalW = cardW - padX * 2;
    const swW = (totalW - gap * (swatches.length - 1)) / swatches.length;
    const swY = drawH + 64;

    swatches.forEach((s, idx) => {
      const sx = padX + idx * (swW + gap);
      ctx.fillStyle = s.hex;
      ctx.fillRect(sx, swY, swW, 92);
      ctx.strokeStyle = '#e2e8f0';
      ctx.strokeRect(sx, swY, swW, 92);

      ctx.fillStyle = '#0f172a';
      ctx.font = '700 15px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(s.hex, sx + swW / 2, swY + 118);

      ctx.fillStyle = '#64748b';
      ctx.font = '500 12px sans-serif';
      ctx.fillText(`${s.percentage}%`, sx + swW / 2, swY + 136);
    });

    const blob = await canvasToBlob(canvas, 'image/png');
    const base = sanitizeFilename(getBaseFilename(sourceFile.name));
    triggerDownload(blob, `${base}_palette.png`);
  };

  const cssVarsText = `:root {\n${swatches
    .map((s, idx) => `  --palette-${idx + 1}: ${s.hex}; /* ${s.percentage}% */`)
    .join('\n')}\n}`;

  const jsonText = JSON.stringify(
    swatches.map((s) => ({ hex: s.hex, rgb: s.rgb, hsl: s.hsl, sharePercent: s.percentage })),
    null,
    2
  );

  return (
    <ToolPageLayout
      tool={activeTool}
      onNavigate={onNavigate}
      lang={lang}
      ui={lang === 'ja' ? jaStrings?.layoutUi : lang === 'ko' ? koStrings?.layoutUi : lang === 'id' ? idStrings?.layoutUi : lang === 'ru' ? ruStrings?.layoutUi : lang === 'de' ? deStrings?.layoutUi : lang === 'it' ? itStrings?.layoutUi : lang === 'pt' ? ptStrings?.layoutUi : lang === 'fr' ? frStrings?.layoutUi : esStrings?.layoutUi}
      canonicalPath={lang === 'ja' ? toJapanesePath(activeTool.slug) : lang === 'ko' ? toKoreanPath(activeTool.slug) : lang === 'id' ? toIndonesianPath(activeTool.slug) : lang === 'ru' ? toRussianPath(activeTool.slug) : lang === 'de' ? toGermanPath(activeTool.slug) : lang === 'it' ? toItalianPath(activeTool.slug) : lang === 'es' ? toSpanishPath(activeTool.slug) : lang === 'pt' ? toPortuguesePath(activeTool.slug) : lang === 'fr' ? toFrenchPath(activeTool.slug) : undefined}
      alternates={lang !== 'en' ? getAlternates(activeTool.slug) : undefined}
      toolRegistry={toolRegistry}
      categoryLabels={categoryLabels}
    >
      <div className="space-y-6">
        {!imageInfo ? (
          <UploadZone
            onFilesSelected={handleFilesSelected}
            maxFileSizeMB={20}
            multiple={false}
            accept={EXTENDED_IMAGE_ACCEPT}
            allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
            allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
            supportedFormatsLabel="JPG, PNG, WebP, HEIC, GIF, BMP, SVG"
            title={t('uploadTitle', 'Drop an image to extract its dominant color palette')}
            strings={lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
          />
        ) : (
          <div className="space-y-6">
            {/* Top Bar + Source Image + Controls */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-slate-100 p-3 flex items-center justify-center max-h-[280px]">
                <img
                  src={imageInfo.previewUrl}
                  alt={sourceFile?.name || t('sourceAlt', 'Source')}
                  className="max-w-full max-h-[250px] object-contain rounded-lg"
                />
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Palette className="w-4 h-4 text-blue-600" />
                      <span>{t('extractedPalette', 'Extracted Palette ({count} Colors)').replace('{count}', String(swatches.length))}</span>
                    </h2>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">
                      {sourceFile?.name} · {imageInfo.width}×{imageInfo.height}px ·{' '}
                      {sourceFile ? formatBytes(sourceFile.size) : ''}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-red-600 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{t('changeImage', 'Change')}</span>
                  </button>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-700">{t('numberOfColors', 'Number of Colors')}</span>
                    <span className="font-mono font-bold text-blue-600">{t('colorsCount', '{count} colors').replace('{count}', String(colorCount))}</span>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={12}
                    value={colorCount}
                    onChange={(e) => setColorCount(parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Proportional Color Strip */}
                {swatches.length > 0 && (
                  <div className="h-7 w-full rounded-xl overflow-hidden flex border border-slate-200">
                    {swatches.map((s) => (
                      <div
                        key={s.hex}
                        style={{ width: `${s.percentage}%`, backgroundColor: s.hex }}
                        title={`${s.hex} (${s.percentage}%)`}
                      />
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => copyText(cssVarsText, 'css')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    {copiedKey === 'css' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'css' ? t('copiedCss', 'Copied CSS!') : t('copyCssVariables', 'Copy CSS Variables')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => copyText(jsonText, 'json')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl cursor-pointer"
                  >
                    {copiedKey === 'json' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'json' ? t('copiedJson', 'Copied JSON!') : t('copyJson', 'Copy JSON')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleExportPngCard}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{t('downloadPalettePng', 'Download Palette PNG')}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Swatch Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {swatches.map((swatch, idx) => (
                <div
                  key={`${swatch.hex}-${idx}`}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col"
                >
                  <div
                    className="h-24 w-full relative flex items-end justify-between p-3"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    <span className="px-2 py-0.5 rounded-md bg-black/55 backdrop-blur-xs text-white text-[11px] font-mono font-bold">
                      {swatch.hex}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white/90 text-slate-800 text-[11px] font-mono font-bold">
                      {swatch.percentage}%
                    </span>
                  </div>
                  <div className="p-3.5 space-y-2 text-xs">
                    {[
                      { label: 'HEX', val: swatch.hex },
                      { label: 'RGB', val: swatch.rgb },
                      { label: 'HSL', val: swatch.hsl },
                    ].map((row) => {
                      const k = `${idx}-${row.label}`;
                      return (
                        <button
                          key={row.label}
                          type="button"
                          onClick={() => copyText(row.val, k)}
                          className="w-full flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-left transition-colors cursor-pointer"
                        >
                          <span className="text-slate-400 font-bold">{row.label}</span>
                          <span className="font-mono text-slate-800 truncate">{row.val}</span>
                          {copiedKey === k ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-start gap-2 p-3.5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};
