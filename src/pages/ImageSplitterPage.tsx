import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Grid,
  Download,
  FileArchive,
  Trash2,
  Loader2,
  AlertCircle,
  Scissors,
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
import { getAlternates } from '../locales/alternates';

import { ToolPageLayout } from '../components/ToolPageLayout';
import { UploadZone } from '../components/UploadZone';
import { OutputFormatChoice } from '../types';
import {
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  LoadedImageInfo,
  canvasToBlob,
  loadExtendedImageInfo,
} from '../utils/imageProcessing';
import { resolveOutputFormat } from '../utils/compressor';
import { formatBytes, getBaseFilename, sanitizeFilename } from '../utils/formatters';
import { createFilesZipArchive, triggerDownload } from '../utils/zip';

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

interface ImageSplitterPageProps {
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
}

interface GeneratedTile {
  id: string;
  row: number;
  col: number;
  width: number;
  height: number;
  blob: Blob;
  previewUrl: string;
  filename: string;
}

type SplitMode = 'grid' | 'horizontal' | 'vertical';

export const ImageSplitterPage: React.FC<ImageSplitterPageProps> = ({
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
}) => {
  const activeTool = tool ?? TOOL_BY_SLUG['/image-splitter'];
  const t = (key: string, fallback: string) => {
    const table =
      lang === 'de' ? deStrings?.toolUi : lang === 'it' ? itStrings?.toolUi : lang === 'pt' ? ptStrings?.toolUi : lang === 'fr' ? frStrings?.toolUi : lang === 'es' ? esStrings?.toolUi : undefined;
    return table ? (table[key] as string | undefined) ?? fallback : fallback;
  };

  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [imageInfo, setImageInfo] = useState<LoadedImageInfo | null>(null);
  const imageInfoRef = useRef<LoadedImageInfo | null>(null);
  imageInfoRef.current = imageInfo;

  const [mode, setMode] = useState<SplitMode>('grid');
  const [rows, setRows] = useState<number>(3);
  const [cols, setCols] = useState<number>(3);
  const [format, setFormat] = useState<OutputFormatChoice>('original');
  const [quality, setQuality] = useState<number>(92);

  const [tiles, setTiles] = useState<GeneratedTile[]>([]);
  const tilesRef = useRef<GeneratedTile[]>([]);
  tilesRef.current = tiles;

  const [isSplitting, setIsSplitting] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const revokeTiles = (list: GeneratedTile[]) => {
    list.forEach((t) => URL.revokeObjectURL(t.previewUrl));
  };

  useEffect(() => {
    return () => {
      if (imageInfoRef.current?.previewUrl) URL.revokeObjectURL(imageInfoRef.current.previewUrl);
      revokeTiles(tilesRef.current);
    };
  }, []);

  const effectiveRows = mode === 'vertical' ? 1 : Math.max(1, Math.min(10, rows));
  const effectiveCols = mode === 'horizontal' ? 1 : Math.max(1, Math.min(10, cols));

  const generateSplitTiles = useCallback(
    async (
      file: File,
      info: LoadedImageInfo,
      rCount: number,
      cCount: number,
      outFmt: OutputFormatChoice,
      q: number
    ) => {
      setIsSplitting(true);
      setError(null);
      try {
        const { mimeType, extension } = resolveOutputFormat(outFmt, info.detectedType);
        const baseName = sanitizeFilename(getBaseFilename(file.name));
        const nextTiles: GeneratedTile[] = [];

        for (let r = 0; r < rCount; r++) {
          const sy = Math.round((r * info.height) / rCount);
          const ey = Math.round(((r + 1) * info.height) / rCount);
          const th = Math.max(1, ey - sy);

          for (let c = 0; c < cCount; c++) {
            const sx = Math.round((c * info.width) / cCount);
            const ex = Math.round(((c + 1) * info.width) / cCount);
            const tw = Math.max(1, ex - sx);

            const tileCanvas = document.createElement('canvas');
            tileCanvas.width = tw;
            tileCanvas.height = th;
            const ctx = tileCanvas.getContext('2d', { alpha: true });
            if (!ctx) throw new Error(t('errorCanvasContext', 'Unable to initialize canvas context.'));

            if (mimeType === 'image/jpeg') {
              ctx.fillStyle = '#ffffff';
              ctx.fillRect(0, 0, tw, th);
            }
            ctx.drawImage(info.img, sx, sy, tw, th, 0, 0, tw, th);
            const blob = await canvasToBlob(tileCanvas, mimeType, q / 100);
            nextTiles.push({
              id: `${r}-${c}`,
              row: r + 1,
              col: c + 1,
              width: tw,
              height: th,
              blob,
              previewUrl: URL.createObjectURL(blob),
              filename: `${baseName}_r${r + 1}_c${c + 1}${extension}`,
            });
          }
        }

        revokeTiles(tilesRef.current);
        setTiles(nextTiles);
      } catch (err) {
        setError(err instanceof Error ? err.message : t('errorSplitFailed', 'Failed to split image.'));
      } finally {
        setIsSplitting(false);
      }
    },
    []
  );

  const handleFilesSelected = async (files: File[]) => {
    const file = files[0];
    if (!file) return;
    setError(null);
    try {
      const info = await loadExtendedImageInfo(file);
      if (imageInfoRef.current?.previewUrl) URL.revokeObjectURL(imageInfoRef.current.previewUrl);
      setSourceFile(file);
      setImageInfo(info);
      await generateSplitTiles(file, info, effectiveRows, effectiveCols, format, quality);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorUnableToLoadImage', 'Unable to load image.'));
    }
  };

  const handleClear = () => {
    if (imageInfoRef.current?.previewUrl) URL.revokeObjectURL(imageInfoRef.current.previewUrl);
    revokeTiles(tilesRef.current);
    setSourceFile(null);
    setImageInfo(null);
    setTiles([]);
  };

  const handleDownloadAllZip = async () => {
    if (tiles.length === 0) return;
    setIsZipping(true);
    try {
      const zip = await createFilesZipArchive(
        tiles.map((t) => ({ filename: t.filename, blob: t.blob })),
        'split_tiles'
      );
      const base = sourceFile ? sanitizeFilename(getBaseFilename(sourceFile.name)) : 'image';
      triggerDownload(zip, `${base}_${effectiveRows}x${effectiveCols}_tiles.zip`);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <ToolPageLayout
      tool={activeTool}
      onNavigate={onNavigate}
      lang={lang}
      ui={lang === 'de' ? deStrings?.layoutUi : lang === 'it' ? itStrings?.layoutUi : lang === 'pt' ? ptStrings?.layoutUi : lang === 'fr' ? frStrings?.layoutUi : esStrings?.layoutUi}
      canonicalPath={lang === 'de' ? toGermanPath(activeTool.slug) : lang === 'it' ? toItalianPath(activeTool.slug) : lang === 'es' ? toSpanishPath(activeTool.slug) : lang === 'pt' ? toPortuguesePath(activeTool.slug) : lang === 'fr' ? toFrenchPath(activeTool.slug) : undefined}
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
            title={t('uploadTitle', 'Drop an image to split into grid tiles or strips')}
            strings={lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
          />
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Visual Cut-Line Overlay Preview */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Grid className="w-3.5 h-3.5 text-blue-600" />
                    {t('cutLinePreview', 'Cut-Line Preview ({rows} × {cols} = {tiles} tiles)').replace('{rows}', String(effectiveRows)).replace('{cols}', String(effectiveCols)).replace('{tiles}', String(effectiveRows * effectiveCols))}
                  </span>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-red-600 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{t('changeImage', 'Change Image')}</span>
                  </button>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 p-3 flex items-center justify-center">
                  <div className="relative inline-block max-w-full">
                    <img
                      src={imageInfo.previewUrl}
                      alt={t('splitGuideAlt', 'Split guide')}
                      className="max-h-[440px] w-auto h-auto object-contain block"
                    />
                    <div
                      className="absolute inset-0 grid pointer-events-none"
                      style={{
                        gridTemplateRows: `repeat(${effectiveRows}, 1fr)`,
                        gridTemplateColumns: `repeat(${effectiveCols}, 1fr)`,
                      }}
                    >
                      {Array.from({ length: effectiveRows * effectiveCols }).map((_, idx) => (
                        <div
                          key={idx}
                          className="border border-dashed border-white/90 shadow-[inset_0_0_0_1px_rgba(37,99,235,0.45)] flex items-center justify-center"
                        >
                          <span className="px-1.5 py-0.5 rounded bg-slate-900/65 text-white text-[10px] font-mono font-bold">
                            {idx + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between text-xs text-slate-500 font-mono">
                  <span className="truncate max-w-xs">{sourceFile?.name}</span>
                  <span>
                    {imageInfo.width}×{imageInfo.height}px · {sourceFile ? formatBytes(sourceFile.size) : ''}
                  </span>
                </div>
              </div>

              {/* Split Settings */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    {t('splitLayout', 'Split Layout')}
                  </span>
                  <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl">
                    {(
                      [
                        { id: 'grid', label: t('modeGrid', 'Grid (N×M)') },
                        { id: 'horizontal', label: t('modeHorizontalStrips', 'Horiz. Strips') },
                        { id: 'vertical', label: t('modeVerticalStrips', 'Vert. Strips') },
                      ] as { id: SplitMode; label: string }[]
                    ).map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setMode(m.id)}
                        className={`py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                          mode === m.id ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {mode !== 'vertical' && (
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        {t('rowsLabel', 'Rows (Horizontal Cuts)')}
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={rows}
                        onChange={(e) => setRows(Math.max(1, Math.min(10, parseInt(e.target.value, 10) || 1)))}
                        className="w-full px-3 py-2 text-sm font-mono border border-slate-300 rounded-xl"
                      />
                    </div>
                  )}
                  {mode !== 'horizontal' && (
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        {t('columnsLabel', 'Columns (Vertical Cuts)')}
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={cols}
                        onChange={(e) => setCols(Math.max(1, Math.min(10, parseInt(e.target.value, 10) || 1)))}
                        className="w-full px-3 py-2 text-sm font-mono border border-slate-300 rounded-xl"
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    { label: t('preset2x2', '2×2'), r: 2, c: 2, m: 'grid' as SplitMode },
                    { label: t('preset3x3Instagram', '3×3 Instagram'), r: 3, c: 3, m: 'grid' as SplitMode },
                    { label: t('preset1x3Carousel', '1×3 Carousel'), r: 1, c: 3, m: 'vertical' as SplitMode },
                    { label: t('preset4x1Strips', '4×1 Strips'), r: 4, c: 1, m: 'horizontal' as SplitMode },
                  ].map((p) => (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => {
                        setMode(p.m);
                        setRows(p.r);
                        setCols(p.c);
                      }}
                      className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 cursor-pointer"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-xl">
                    {(['original', 'jpeg', 'png', 'webp'] as OutputFormatChoice[]).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => setFormat(fmt)}
                        className={`py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                          format === fmt ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                        }`}
                      >
                        {fmt === 'original' ? t('formatOriginal', 'Orig') : fmt === 'jpeg' ? t('formatJpg', 'JPG') : fmt.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  {format !== 'png' && (
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700">{t('tileQuality', 'Tile Quality')}</span>
                        <span className="font-mono text-slate-700">{quality}%</span>
                      </div>
                      <input
                        type="range"
                        min={10}
                        max={100}
                        value={quality}
                        onChange={(e) => setQuality(parseInt(e.target.value, 10))}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      sourceFile &&
                      imageInfo &&
                      generateSplitTiles(sourceFile, imageInfo, effectiveRows, effectiveCols, format, quality)
                    }
                    disabled={isSplitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm cursor-pointer disabled:opacity-60"
                  >
                    {isSplitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Scissors className="w-4 h-4" />}
                    <span>
                      {isSplitting
                        ? t('splittingImage', 'Splitting Image...')
                        : t('splitIntoTiles', 'Split into {count} Tiles').replace('{count}', String(effectiveRows * effectiveCols))}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Generated Tiles Result */}
            {tiles.length > 0 && (
              <div className="space-y-4">
                <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                      {t('splitComplete', 'Split Complete')}
                    </span>
                    <p className="text-sm font-semibold mt-0.5">
                      {t('tilesGenerated', '{count} image tiles generated at full resolution').replace('{count}', String(tiles.length))}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleDownloadAllZip}
                    disabled={isZipping}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl cursor-pointer"
                  >
                    <FileArchive className="w-4 h-4" />
                    <span>{isZipping ? t('packagingZip', 'Packaging ZIP...') : t('downloadAllTilesZip', 'Download All Tiles (ZIP)')}</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {tiles.map((tile) => (
                    <div
                      key={tile.id}
                      className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col justify-between gap-2.5 shadow-xs"
                    >
                      <div className="aspect-square rounded-lg overflow-hidden bg-slate-100 border border-slate-100 flex items-center justify-center">
                        <img
                          src={tile.previewUrl}
                          alt={tile.filename}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="text-[11px] font-mono text-slate-600 flex justify-between">
                        <span>R{tile.row}·C{tile.col}</span>
                        <span>
                          {tile.width}×{tile.height}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => triggerDownload(tile.blob, tile.filename)}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{t('download', 'Download')}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
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
