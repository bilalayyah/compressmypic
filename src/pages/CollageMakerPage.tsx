import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  LayoutGrid,
  Download,
  Trash2,
  Plus,
  ArrowLeft,
  ArrowRight,
  Loader2,
  AlertCircle,
  RotateCcw,
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
  EXTENDED_ALLOWED_EXT_REGEX,
  EXTENDED_ALLOWED_MIME_TYPES,
  EXTENDED_IMAGE_ACCEPT,
  canvasToBlob,
  loadExtendedImageInfo,
} from '../utils/imageProcessing';
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

interface CollageMakerPageProps {
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

type CollageLayout = '2x2' | '3x3' | 'vertical' | 'horizontal';

interface CollageCellPhoto {
  id: string;
  file: File;
  name: string;
  img: HTMLImageElement;
  previewUrl: string;
  width: number;
  height: number;
}

interface CellBox {
  index: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const rad = Math.min(Math.max(0, r), w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rad, y);
  ctx.lineTo(x + w - rad, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rad);
  ctx.lineTo(x + w, y + h - rad);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rad, y + h);
  ctx.lineTo(x + rad, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rad);
  ctx.lineTo(x, y + rad);
  ctx.quadraticCurveTo(x, y, x + rad, y);
  ctx.closePath();
}

export const CollageMakerPage: React.FC<CollageMakerPageProps> = ({
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
  const activeTool = tool ?? TOOL_BY_SLUG['/image-collage-maker'];
  const t = (key: string, fallback: string) => {
    const table =
      lang === 'zh' ? zhStrings?.toolUi : lang === 'ja' ? jaStrings?.toolUi : lang === 'ko' ? koStrings?.toolUi : lang === 'id' ? idStrings?.toolUi : lang === 'ru' ? ruStrings?.toolUi : lang === 'de' ? deStrings?.toolUi : lang === 'it' ? itStrings?.toolUi : lang === 'pt' ? ptStrings?.toolUi : lang === 'fr' ? frStrings?.toolUi : lang === 'es' ? esStrings?.toolUi : undefined;
    return table ? (table[key] as string | undefined) ?? fallback : fallback;
  };
  // Canvas-drawn empty-cell label template (Batch 4 spec §3): resolved once so the
  // render callback only re-creates when the language/template changes.
  const slotLabelTemplate = t('slotLabel', 'Slot {n}');

  const [slots, setSlots] = useState<(CollageCellPhoto | null)[]>([]);
  const slotsRef = useRef<(CollageCellPhoto | null)[]>([]);
  slotsRef.current = slots;

  const [layout, setLayout] = useState<CollageLayout>('2x2');
  const [gapPx, setGapPx] = useState<number>(20);
  const [cornerRadius, setCornerRadius] = useState<number>(12);
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [fitMode, setFitMode] = useState<'cover' | 'contain'>('cover');

  // Cell size proportions (percentage sliders for column split / primary cell weight)
  const [colSplitPct, setColSplitPct] = useState<number>(50); // for 2x2 col1 vs col2; or 3x3 center emphasis
  const [rowSplitPct, setRowSplitPct] = useState<number>(50); // for 2x2 row1 vs row2
  const [firstStripPct, setFirstStripPct] = useState<number>(0); // 0 = Equal cells; >0 = First cell share

  const [outWidth, setOutWidth] = useState<number>(1200);
  const [outHeight, setOutHeight] = useState<number>(1200);
  const [outFormat, setOutFormat] = useState<'jpeg' | 'png'>('jpeg');
  const [quality, setQuality] = useState<number>(92);

  const [dragCellIdx, setDragCellIdx] = useState<number | null>(null);
  const [selectedSwapIdx, setSelectedSwapIdx] = useState<number | null>(null);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const slotFileInputRef = useRef<HTMLInputElement>(null);
  const targetSlotRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      slotsRef.current.forEach((s) => {
        if (s?.previewUrl) URL.revokeObjectURL(s.previewUrl);
      });
    };
  }, []);

  const targetSlotCount =
    layout === '2x2'
      ? 4
      : layout === '3x3'
      ? 9
      : Math.max(2, Math.min(9, slots.filter(Boolean).length || 3));

  const computeCellBoxes = useCallback(
    (w: number, h: number, gap: number): CellBox[] => {
      const boxes: CellBox[] = [];

      if (layout === '2x2') {
        const innerW = Math.max(10, w - gap * 3);
        const innerH = Math.max(10, h - gap * 3);
        const c1 = Math.max(0.15, Math.min(0.85, colSplitPct / 100));
        const r1 = Math.max(0.15, Math.min(0.85, rowSplitPct / 100));
        const colW = [Math.round(innerW * c1), Math.round(innerW * (1 - c1))];
        const rowH = [Math.round(innerH * r1), Math.round(innerH * (1 - r1))];

        let idx = 0;
        let cy = gap;
        for (let r = 0; r < 2; r++) {
          let cx = gap;
          for (let c = 0; c < 2; c++) {
            boxes.push({ index: idx++, x: cx, y: cy, w: colW[c], h: rowH[r] });
            cx += colW[c] + gap;
          }
          cy += rowH[r] + gap;
        }
        return boxes;
      }

      if (layout === '3x3') {
        const innerW = Math.max(10, w - gap * 4);
        const innerH = Math.max(10, h - gap * 4);
        // Center emphasis based on colSplitPct & rowSplitPct around 50
        const midWeightX = 1 + ((colSplitPct - 50) / 50) * 0.65;
        const midWeightY = 1 + ((rowSplitPct - 50) / 50) * 0.65;
        const weightsX = [1, Math.max(0.4, midWeightX), 1];
        const weightsY = [1, Math.max(0.4, midWeightY), 1];
        const sumX = weightsX[0] + weightsX[1] + weightsX[2];
        const sumY = weightsY[0] + weightsY[1] + weightsY[2];
        const colW = weightsX.map((wx) => Math.round((innerW * wx) / sumX));
        const rowH = weightsY.map((wy) => Math.round((innerH * wy) / sumY));

        let idx = 0;
        let cy = gap;
        for (let r = 0; r < 3; r++) {
          let cx = gap;
          for (let c = 0; c < 3; c++) {
            boxes.push({ index: idx++, x: cx, y: cy, w: colW[c], h: rowH[r] });
            cx += colW[c] + gap;
          }
          cy += rowH[r] + gap;
        }
        return boxes;
      }

      const count = targetSlotCount;
      const weights = Array.from({ length: count }, (_, idx) => {
        if (firstStripPct <= 0) return 1;
        return idx === 0 ? 1 + firstStripPct / 50 : 1;
      });
      const weightSum = weights.reduce((a, b) => a + b, 0);

      if (layout === 'vertical') {
        const innerW = Math.max(10, w - gap * 2);
        const innerH = Math.max(10, h - gap * (count + 1));
        let cy = gap;
        for (let i = 0; i < count; i++) {
          const ch = Math.max(10, Math.round((innerH * weights[i]) / weightSum));
          boxes.push({ index: i, x: gap, y: cy, w: innerW, h: ch });
          cy += ch + gap;
        }
        return boxes;
      }

      // Horizontal strip
      const innerW = Math.max(10, w - gap * (count + 1));
      const innerH = Math.max(10, h - gap * 2);
      let cx = gap;
      for (let i = 0; i < count; i++) {
        const cw = Math.max(10, Math.round((innerW * weights[i]) / weightSum));
        boxes.push({ index: i, x: cx, y: gap, w: cw, h: innerH });
        cx += cw + gap;
      }
      return boxes;
    },
    [layout, colSplitPct, rowSplitPct, firstStripPct, targetSlotCount]
  );

  const renderCollageToCanvas = useCallback(
    (canvas: HTMLCanvasElement, w: number, h: number) => {
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const scaleFactor = w / Math.max(1, outWidth);
      const scaledGap = Math.round(gapPx * scaleFactor);
      const scaledRad = Math.round(cornerRadius * scaleFactor);

      ctx.fillStyle = backgroundColor || '#ffffff';
      ctx.fillRect(0, 0, w, h);

      const boxes = computeCellBoxes(w, h, scaledGap);

      for (const box of boxes) {
        const photo = slots[box.index];
        ctx.save();
        roundedRect(ctx, box.x, box.y, box.w, box.h, scaledRad);
        ctx.clip();

        if (photo) {
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          const scale =
            fitMode === 'cover'
              ? Math.max(box.w / photo.width, box.h / photo.height)
              : Math.min(box.w / photo.width, box.h / photo.height);
          const dw = photo.width * scale;
          const dh = photo.height * scale;
          const dx = box.x + (box.w - dw) / 2;
          const dy = box.y + (box.h - dh) / 2;
          ctx.drawImage(photo.img, dx, dy, dw, dh);
        } else {
          ctx.fillStyle = '#e2e8f0';
          ctx.fillRect(box.x, box.y, box.w, box.h);
          ctx.fillStyle = '#64748b';
          ctx.font = `600 ${Math.max(12, Math.round(Math.min(box.w, box.h) * 0.14))}px sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(slotLabelTemplate.replace('{n}', String(box.index + 1)), box.x + box.w / 2, box.y + box.h / 2);
        }
        ctx.restore();
      }
    },
    [outWidth, gapPx, cornerRadius, backgroundColor, computeCellBoxes, slots, fitMode, slotLabelTemplate]
  );

  useEffect(() => {
    if (slots.length === 0 || !previewCanvasRef.current) return;
    const scale = Math.min(1, 840 / Math.max(outWidth, outHeight));
    const pw = Math.max(120, Math.round(outWidth * scale));
    const ph = Math.max(120, Math.round(outHeight * scale));
    renderCollageToCanvas(previewCanvasRef.current, pw, ph);
  }, [slots, outWidth, outHeight, renderCollageToCanvas]);

  const handleFilesSelected = async (files: File[]) => {
    setError(null);
    const loaded: CollageCellPhoto[] = [];
    for (const file of files) {
      try {
        const info = await loadExtendedImageInfo(file);
        loaded.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
          file,
          name: file.name,
          img: info.img,
          previewUrl: info.previewUrl,
          width: info.width,
          height: info.height,
        });
      } catch (err) {
        setError(
          err instanceof Error
            ? t('couldNotLoadFile', 'Could not load "{name}": {error}')
                .replace('{name}', file.name)
                .replace('{error}', err.message)
            : t('couldNotLoadFileNoError', 'Could not load "{name}".').replace('{name}', file.name)
        );
      }
    }

    if (loaded.length === 0) return;

    setSlots((prev) => {
      if (targetSlotRef.current !== null && loaded.length === 1) {
        const idx = targetSlotRef.current;
        targetSlotRef.current = null;
        const copy = [...prev];
        while (copy.length <= idx) copy.push(null);
        if (copy[idx]?.previewUrl) URL.revokeObjectURL(copy[idx]!.previewUrl);
        copy[idx] = loaded[0];
        return copy;
      }

      const next = [...prev];
      let li = 0;
      for (let i = 0; i < next.length && li < loaded.length; i++) {
        if (!next[i]) next[i] = loaded[li++];
      }
      while (li < loaded.length) next.push(loaded[li++]);

      // Smart initial layout when uploading fresh batch
      if (prev.length === 0) {
        if (loaded.length <= 4) setLayout('2x2');
        else setLayout('3x3');
      }
      return next;
    });
  };

  const swapCells = (idxA: number, idxB: number) => {
    if (idxA === idxB) return;
    setSlots((prev) => {
      const maxLen = Math.max(prev.length, idxA + 1, idxB + 1, targetSlotCount);
      const copy: (CollageCellPhoto | null)[] = Array.from(
        { length: maxLen },
        (_, i) => prev[i] || null
      );
      const temp = copy[idxA];
      copy[idxA] = copy[idxB];
      copy[idxB] = temp;
      return copy;
    });
    setSelectedSwapIdx(null);
  };

  const removeSlotPhoto = (idx: number) => {
    setSlots((prev) => {
      const copy = [...prev];
      if (copy[idx]?.previewUrl) URL.revokeObjectURL(copy[idx]!.previewUrl);
      copy[idx] = null;
      return copy;
    });
  };

  const clearAll = () => {
    slots.forEach((s) => {
      if (s?.previewUrl) URL.revokeObjectURL(s.previewUrl);
    });
    setSlots([]);
    setSelectedSwapIdx(null);
    setError(null);
  };

  const changeLayout = (nextLayout: CollageLayout) => {
    setLayout(nextLayout);
    if (nextLayout === 'vertical') {
      setOutWidth(1080);
      setOutHeight(1920);
    } else if (nextLayout === 'horizontal') {
      setOutWidth(1920);
      setOutHeight(720);
    } else {
      setOutWidth(1200);
      setOutHeight(1200);
    }
  };

  const handleDownload = async () => {
    if (slots.filter(Boolean).length === 0) return;
    setIsExporting(true);
    setError(null);
    try {
      const exportCanvas = document.createElement('canvas');
      renderCollageToCanvas(exportCanvas, outWidth, outHeight);
      const mime = outFormat === 'jpeg' ? 'image/jpeg' : 'image/png';
      const ext = outFormat === 'jpeg' ? '.jpg' : '.png';
      const blob = await canvasToBlob(exportCanvas, mime, quality / 100);
      triggerDownload(blob, `collage_${layout}_${outWidth}x${outHeight}${ext}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorExportFailed', 'Failed to export collage.'));
    } finally {
      setIsExporting(false);
    }
  };

  const cellIndices = Array.from({ length: targetSlotCount }, (_, i) => i);

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
        {slots.filter(Boolean).length === 0 ? (
          <UploadZone
            onFilesSelected={handleFilesSelected}
            maxFileSizeMB={20}
            multiple
            accept={EXTENDED_IMAGE_ACCEPT}
            allowedMimeTypes={EXTENDED_ALLOWED_MIME_TYPES}
            allowedExtensionsRegex={EXTENDED_ALLOWED_EXT_REGEX}
            supportedFormatsLabel="JPG, PNG, WebP, HEIC, GIF, BMP, SVG"
            title={t('uploadTitle', 'Drop 2 to 9 images to create a photo collage')}
            strings={lang === 'zh' ? zhStrings?.uploadZone : lang === 'ja' ? jaStrings?.uploadZone : lang === 'ko' ? koStrings?.uploadZone : lang === 'id' ? idStrings?.uploadZone : lang === 'ru' ? ruStrings?.uploadZone : lang === 'de' ? deStrings?.uploadZone : lang === 'it' ? itStrings?.uploadZone : lang === 'pt' ? ptStrings?.uploadZone : lang === 'fr' ? frStrings?.uploadZone : esStrings?.uploadZone}
          />
        ) : (
          <div className="space-y-6">
            <input
              ref={slotFileInputRef}
              type="file"
              multiple={targetSlotRef.current === null}
              accept={EXTENDED_IMAGE_ACCEPT}
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  handleFilesSelected(Array.from(e.target.files));
                  e.target.value = '';
                }
              }}
              className="hidden"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Live Collage Preview + Drag-to-Rearrange Slot Grid */}
              <div className="lg:col-span-7 space-y-5">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <LayoutGrid className="w-3.5 h-3.5 text-blue-600" />
                      <span>
                        {t('collagePreview', 'Collage Preview ({width}×{height}px)')
                          .replace('{width}', String(outWidth))
                          .replace('{height}', String(outHeight))}
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={clearAll}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-red-600 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>{t('clearAll', 'Clear All')}</span>
                    </button>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 p-4 flex items-center justify-center min-h-[280px] max-h-[500px]">
                    <canvas
                      ref={previewCanvasRef}
                      className="max-w-full max-h-[450px] w-auto h-auto object-contain block rounded shadow-xs"
                    />
                  </div>
                </div>

                {/* Interactive Drag & Swap Cell Arranger */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {t('rearrangeCells', 'Rearrange Cells (Drag or Tap Two Cells to Swap)')}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {t(
                          'rearrangeCellsHint',
                          'Drag any cell card onto another slot to reorder photos instantly.'
                        )}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        targetSlotRef.current = null;
                        slotFileInputRef.current?.click();
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-xl cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{t('addPhotos', 'Add Photos')}</span>
                    </button>
                  </div>

                  <div
                    className={`grid gap-2.5 ${
                      layout === '3x3'
                        ? 'grid-cols-3'
                        : layout === '2x2'
                        ? 'grid-cols-2'
                        : layout === 'horizontal'
                        ? 'grid-cols-2 sm:grid-cols-4'
                        : 'grid-cols-2 sm:grid-cols-3'
                    }`}
                  >
                    {cellIndices.map((idx) => {
                      const item = slots[idx] || null;
                      const isSwapSelected = selectedSwapIdx === idx;
                      return (
                        <div
                          key={idx}
                          draggable={Boolean(item)}
                          onDragStart={() => setDragCellIdx(idx)}
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={() => {
                            if (dragCellIdx !== null) swapCells(dragCellIdx, idx);
                            setDragCellIdx(null);
                          }}
                          onClick={() => {
                            if (selectedSwapIdx === null) {
                              if (item) setSelectedSwapIdx(idx);
                            } else {
                              swapCells(selectedSwapIdx, idx);
                            }
                          }}
                          className={`relative rounded-xl border p-2 flex flex-col gap-2 transition-all cursor-pointer ${
                            isSwapSelected
                              ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-500'
                              : dragCellIdx === idx
                              ? 'border-blue-400 opacity-50 bg-slate-50'
                              : 'border-slate-200 bg-slate-50/70 hover:border-blue-300'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                            <span>{t('cellLabel', 'Cell {n}').replace('{n}', String(idx + 1))}</span>
                            <div className="flex items-center gap-0.5">
                              {idx > 0 && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    swapCells(idx, idx - 1);
                                  }}
                                  className="p-0.5 hover:text-blue-600 cursor-pointer"
                                  aria-label={t('moveCellBackAria', 'Move cell {n} back').replace('{n}', String(idx + 1))}
                                >
                                  <ArrowLeft className="w-3 h-3" />
                                </button>
                              )}
                              {idx < targetSlotCount - 1 && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    swapCells(idx, idx + 1);
                                  }}
                                  className="p-0.5 hover:text-blue-600 cursor-pointer"
                                  aria-label={t('moveCellForwardAria', 'Move cell {n} forward').replace('{n}', String(idx + 1))}
                                >
                                  <ArrowRight className="w-3 h-3" />
                                </button>
                              )}
                              {item && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeSlotPhoto(idx);
                                  }}
                                  className="p-0.5 text-slate-400 hover:text-red-600 cursor-pointer"
                                  aria-label={t('clearCellAria', 'Clear cell {n}').replace('{n}', String(idx + 1))}
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                          </div>

                          {item ? (
                            <div className="h-20 rounded-lg overflow-hidden bg-white border border-slate-200 flex items-center justify-center">
                              <img
                                src={item.previewUrl}
                                alt={item.name}
                                className="w-full h-full object-cover pointer-events-none"
                              />
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                targetSlotRef.current = idx;
                                slotFileInputRef.current?.click();
                              }}
                              className="h-20 rounded-lg border-2 border-dashed border-slate-300 hover:border-blue-400 bg-white flex flex-col items-center justify-center text-slate-500 hover:text-blue-600 text-[11px] font-semibold cursor-pointer"
                            >
                              <Plus className="w-4 h-4 mb-0.5" />
                              <span>{t('addPhoto', 'Add Photo')}</span>
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Collage Controls Panel */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    {t('collageLayout', 'Collage Layout')}
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {(
                      [
                        { id: '2x2', label: t('layout2x2', '2×2 Grid') },
                        { id: '3x3', label: t('layout3x3', '3×3 Grid') },
                        { id: 'vertical', label: t('layoutVertical', 'Vertical Strip') },
                        { id: 'horizontal', label: t('layoutHorizontal', 'Horizontal Strip') },
                      ] as { id: CollageLayout; label: string }[]
                    ).map((l) => (
                      <button
                        key={l.id}
                        type="button"
                        onClick={() => changeLayout(l.id)}
                        className={`py-2 px-3 text-xs font-semibold rounded-xl border cursor-pointer transition-colors ${
                          layout === l.id
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cell Sizes / Proportions */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {t('cellProportionsSpacing', 'Cell Proportions & Spacing')}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setColSplitPct(50);
                        setRowSplitPct(50);
                        setFirstStripPct(0);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>{t('equalCells', 'Equal Cells')}</span>
                    </button>
                  </div>

                  {(layout === '2x2' || layout === '3x3') && (
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-semibold text-slate-700">
                            {layout === '2x2' ? t('colSplit', 'Col Split') : t('centerCol', 'Center Col')}
                          </span>
                          <span className="font-mono text-blue-600">{colSplitPct}%</span>
                        </div>
                        <input
                          type="range"
                          min={20}
                          max={80}
                          value={colSplitPct}
                          onChange={(e) => setColSplitPct(parseInt(e.target.value, 10))}
                          className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-semibold text-slate-700">
                            {layout === '2x2' ? t('rowSplit', 'Row Split') : t('centerRow', 'Center Row')}
                          </span>
                          <span className="font-mono text-blue-600">{rowSplitPct}%</span>
                        </div>
                        <input
                          type="range"
                          min={20}
                          max={80}
                          value={rowSplitPct}
                          onChange={(e) => setRowSplitPct(parseInt(e.target.value, 10))}
                          className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                    </div>
                  )}

                  {(layout === 'vertical' || layout === 'horizontal') && (
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700">{t('leadCellEmphasis', 'Lead Cell Emphasis')}</span>
                        <span className="font-mono text-blue-600">+{firstStripPct}%</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={firstStripPct}
                        onChange={(e) => setFirstStripPct(parseInt(e.target.value, 10))}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700">{t('gapSpacing', 'Gap Spacing')}</span>
                        <span className="font-mono text-blue-600">{gapPx}px</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={80}
                        value={gapPx}
                        onChange={(e) => setGapPx(parseInt(e.target.value, 10))}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700">{t('cellRadius', 'Cell Radius')}</span>
                        <span className="font-mono text-blue-600">{cornerRadius}px</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={60}
                        value={cornerRadius}
                        onChange={(e) => setCornerRadius(parseInt(e.target.value, 10))}
                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Background Color & Fit */}
                <div className="grid grid-cols-2 gap-3 items-end">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      {t('backgroundColor', 'Background Color')}
                    </label>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="w-8 h-8 rounded-lg border border-slate-200 cursor-pointer p-0.5"
                      />
                      {['#ffffff', '#0f172a', '#f1f5f9'].map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setBackgroundColor(c)}
                          className="w-6 h-6 rounded-md border border-slate-300 cursor-pointer"
                          style={{ backgroundColor: c }}
                          aria-label={t('backgroundSwatchAria', 'Background {color}').replace('{color}', c)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-slate-700 block mb-1.5">
                      {t('imageFit', 'Image Fit')}
                    </span>
                    <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-xl">
                      {(['cover', 'contain'] as const).map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setFitMode(m)}
                          className={`py-1 text-xs font-semibold rounded-lg capitalize cursor-pointer ${
                            fitMode === m ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                          }`}
                        >
                          {m === 'cover' ? t('fitCover', 'cover') : t('fitContain', 'contain')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Output Size */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    {t('outputSize', 'Output Size (px)')}
                  </span>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-500 block mb-1">{t('widthLabel', 'Width')}</label>
                      <input
                        type="number"
                        min={200}
                        max={4000}
                        value={outWidth}
                        onChange={(e) =>
                          setOutWidth(Math.max(200, Math.min(4000, parseInt(e.target.value, 10) || 200)))
                        }
                        className="w-full px-3 py-1.5 text-sm font-mono border border-slate-300 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-slate-500 block mb-1">{t('heightLabel', 'Height')}</label>
                      <input
                        type="number"
                        min={200}
                        max={4000}
                        value={outHeight}
                        onChange={(e) =>
                          setOutHeight(Math.max(200, Math.min(4000, parseInt(e.target.value, 10) || 200)))
                        }
                        className="w-full px-3 py-1.5 text-sm font-mono border border-slate-300 rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { label: '1200×1200', w: 1200, h: 1200 },
                      { label: '1920×1080', w: 1920, h: 1080 },
                      { label: '1080×1920', w: 1080, h: 1920 },
                    ].map((s) => (
                      <button
                        key={s.label}
                        type="button"
                        onClick={() => {
                          setOutWidth(s.w);
                          setOutHeight(s.h);
                        }}
                        className="py-1.5 text-[11px] font-semibold rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 cursor-pointer"
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Format & Download */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-xl">
                    {(['jpeg', 'png'] as const).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => setOutFormat(fmt)}
                        className={`py-1.5 text-xs font-semibold rounded-lg cursor-pointer ${
                          outFormat === fmt ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                        }`}
                      >
                        {fmt === 'jpeg' ? t('formatJpg', 'JPG') : t('formatPngLossless', 'PNG (Lossless)')}
                      </button>
                    ))}
                  </div>

                  {outFormat === 'jpeg' && (
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-700">{t('jpgQuality', 'JPG Quality')}</span>
                        <span className="font-mono font-bold text-slate-700">{quality}%</span>
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
                    onClick={handleDownload}
                    disabled={isExporting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm cursor-pointer disabled:opacity-60"
                  >
                    {isExporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                    <span>
                      {isExporting
                        ? t('exportingCollage', 'Exporting Collage...')
                        : t('downloadCollage', 'Download Collage ({format})').replace(
                            '{format}',
                            outFormat === 'jpeg' ? 'JPG' : 'PNG'
                          )}
                    </span>
                  </button>
                </div>
              </div>
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
