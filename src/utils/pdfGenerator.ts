import { loadExtendedImageInfo, canvasToBlob } from './imageProcessing';

export type PdfPageSize = 'a4' | 'letter' | 'fit';
export type PdfOrientation = 'auto' | 'portrait' | 'landscape';
export type PdfMargin = 'none' | 'small' | 'medium';
export type PdfImageFit = 'contain' | 'cover';

export interface PdfGenerationOptions {
  pageSize: PdfPageSize;
  orientation: PdfOrientation;
  margin: PdfMargin;
  fit: PdfImageFit;
  quality: number; // 50..100
}

interface EmbeddedPageImage {
  jpegBytes: Uint8Array<ArrayBuffer>;
  pixelWidth: number;
  pixelHeight: number;
  pageWidthPt: number;
  pageHeightPt: number;
  drawX: number;
  drawY: number;
  drawW: number;
  drawH: number;
  clipBox?: { x: number; y: number; w: number; h: number };
}

const PAGE_DIMENSIONS_PT: Record<'a4' | 'letter', [number, number]> = {
  a4: [595.28, 841.89],
  letter: [612, 792],
};

const MARGIN_PT: Record<PdfMargin, number> = {
  none: 0,
  small: 20,
  medium: 42,
};

/**
 * Generates a valid multi-page PDF 1.4 Blob locally in the browser using
 * DCTDecode JPEG streams (zero external dependencies).
 */
export async function generatePdfFromImages(
  files: File[],
  options: PdfGenerationOptions,
  onProgress?: (current: number, total: number) => void
): Promise<Blob> {
  if (files.length === 0) {
    throw new Error('Please add at least one image to generate a PDF.');
  }

  const encoder = new TextEncoder();
  const prepared: EmbeddedPageImage[] = [];

  for (let i = 0; i < files.length; i++) {
    if (onProgress) onProgress(i + 1, files.length);
    const file = files[i];
    const info = await loadExtendedImageInfo(file);
    try {
      const canvas = document.createElement('canvas');
      canvas.width = info.width;
      canvas.height = info.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Unable to initialize canvas context for PDF conversion.');

      // PDF DeviceRGB JPEG has no alpha channel; flatten transparency onto white
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, info.width, info.height);
      ctx.drawImage(info.img, 0, 0, info.width, info.height);

      const q = Math.max(0.4, Math.min(0.98, options.quality / 100));
      const jpegBlob = await canvasToBlob(canvas, 'image/jpeg', q);
      const jpegBytes = new Uint8Array(await jpegBlob.arrayBuffer());

      const margin = MARGIN_PT[options.margin];
      let pageW: number;
      let pageH: number;

      if (options.pageSize === 'fit') {
        // Use 72pt per 96px (0.75 pt/px) with reasonable clamp so huge photos stay standard PDF sizes
        const baseW = Math.max(144, info.width * 0.75);
        const baseH = Math.max(144, info.height * 0.75);
        pageW = baseW + margin * 2;
        pageH = baseH + margin * 2;
      } else {
        const [stdW, stdH] = PAGE_DIMENSIONS_PT[options.pageSize];
        const isImgLandscape = info.width > info.height;
        const useLandscape =
          options.orientation === 'landscape' ||
          (options.orientation === 'auto' && isImgLandscape);
        pageW = useLandscape ? stdH : stdW;
        pageH = useLandscape ? stdW : stdH;
      }

      const availW = Math.max(20, pageW - margin * 2);
      const availH = Math.max(20, pageH - margin * 2);
      const imgAspect = info.width / info.height;
      const boxAspect = availW / availH;

      let drawW: number;
      let drawH: number;
      let clipBox: { x: number; y: number; w: number; h: number } | undefined;

      if (options.fit === 'cover') {
        if (imgAspect > boxAspect) {
          drawH = availH;
          drawW = availH * imgAspect;
        } else {
          drawW = availW;
          drawH = availW / imgAspect;
        }
        clipBox = { x: margin, y: margin, w: availW, h: availH };
      } else {
        if (imgAspect > boxAspect) {
          drawW = availW;
          drawH = availW / imgAspect;
        } else {
          drawH = availH;
          drawW = availH * imgAspect;
        }
      }

      const drawX = margin + (availW - drawW) / 2;
      const drawY = margin + (availH - drawH) / 2;

      prepared.push({
        jpegBytes,
        pixelWidth: info.width,
        pixelHeight: info.height,
        pageWidthPt: Number(pageW.toFixed(2)),
        pageHeightPt: Number(pageH.toFixed(2)),
        drawX: Number(drawX.toFixed(2)),
        drawY: Number(drawY.toFixed(2)),
        drawW: Number(drawW.toFixed(2)),
        drawH: Number(drawH.toFixed(2)),
        clipBox,
      });
    } finally {
      URL.revokeObjectURL(info.previewUrl);
    }
  }

  // Assemble PDF binary objects
  // Object 1: Catalog
  // Object 2: Pages
  // For each page i (0..N-1):
  //   Page obj: 3 + i*3
  //   Contents obj: 4 + i*3
  //   Image XObject: 5 + i*3
  const chunks: Uint8Array<ArrayBuffer>[] = [];
  let byteLength = 0;
  const offsets: number[] = [0]; // index 0 unused (xref obj 0)

  const pushBytes = (arr: Uint8Array<ArrayBuffer>) => {
    chunks.push(arr);
    byteLength += arr.length;
  };
  const pushText = (str: string) => {
    pushBytes(encoder.encode(str));
  };

  pushText('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');

  // 1: Catalog
  offsets[1] = byteLength;
  pushText('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');

  // 2: Pages
  const kidsRefs = prepared.map((_, i) => `${3 + i * 3} 0 R`).join(' ');
  offsets[2] = byteLength;
  pushText(`2 0 obj\n<< /Type /Pages /Kids [ ${kidsRefs} ] /Count ${prepared.length} >>\nendobj\n`);

  for (let i = 0; i < prepared.length; i++) {
    const p = prepared[i];
    const pageObjId = 3 + i * 3;
    const contentObjId = 4 + i * 3;
    const imgObjId = 5 + i * 3;
    const imgName = `Im${i + 1}`;

    // Page Object
    offsets[pageObjId] = byteLength;
    pushText(
      `${pageObjId} 0 obj\n` +
        `<< /Type /Page /Parent 2 0 R ` +
        `/MediaBox [ 0 0 ${p.pageWidthPt} ${p.pageHeightPt} ] ` +
        `/Resources << /XObject << /${imgName} ${imgObjId} 0 R >> >> ` +
        `/Contents ${contentObjId} 0 R >>\nendobj\n`
    );

    // Content Stream
    const clipCmd = p.clipBox
      ? `${p.clipBox.x} ${p.clipBox.y} ${p.clipBox.w} ${p.clipBox.h} re W n\n`
      : '';
    const streamStr = `q\n${clipCmd}${p.drawW} 0 0 ${p.drawH} ${p.drawX} ${p.drawY} cm\n/${imgName} Do\nQ\n`;
    const streamBytes = encoder.encode(streamStr);

    offsets[contentObjId] = byteLength;
    pushText(`${contentObjId} 0 obj\n<< /Length ${streamBytes.length} >>\nstream\n`);
    pushBytes(streamBytes);
    pushText('endstream\nendobj\n');

    // Image XObject
    offsets[imgObjId] = byteLength;
    pushText(
      `${imgObjId} 0 obj\n` +
        `<< /Type /XObject /Subtype /Image ` +
        `/Width ${p.pixelWidth} /Height ${p.pixelHeight} ` +
        `/ColorSpace /DeviceRGB /BitsPerComponent 8 ` +
        `/Filter /DCTDecode /Length ${p.jpegBytes.length} >>\nstream\n`
    );
    pushBytes(p.jpegBytes);
    pushText('\nendstream\nendobj\n');
  }

  // Cross-reference table
  const xrefOffset = byteLength;
  const totalObjects = 2 + prepared.length * 3 + 1;
  pushText(`xref\n0 ${totalObjects}\n`);
  pushText('0000000000 65535 f \n');
  for (let id = 1; id < totalObjects; id++) {
    const off = String(offsets[id] || 0).padStart(10, '0');
    pushText(`${off} 00000 n \n`);
  }

  pushText(
    `trailer\n<< /Size ${totalObjects} /Root 1 0 R >>\n` +
      `startxref\n${xrefOffset}\n%%EOF\n`
  );

  return new Blob(chunks, { type: 'application/pdf' });
}
