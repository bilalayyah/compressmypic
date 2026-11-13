import { loadExtendedImageInfo, canvasToBlob } from './imageProcessing';
import { getBaseFilename, sanitizeFilename } from './formatters';

export interface DpiReadResult {
  format: 'JPEG' | 'PNG' | 'Other';
  dpiX: number | null;
  dpiY: number | null;
  source: string;
}

export interface DpiChangeResult {
  blob: Blob;
  previewUrl: string;
  size: number;
  width: number;
  height: number;
  outputFilename: string;
  method: 'lossless-jpeg' | 'lossless-png' | 'converted-png';
  beforeDpi: DpiReadResult;
  afterDpi: DpiReadResult;
}

// Standard IEEE 802.3 CRC32 table for PNG chunks
const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(bytes: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function isJpeg(bytes: Uint8Array): boolean {
  return bytes.length >= 2 && bytes[0] === 0xff && bytes[1] === 0xd8;
}

function isPng(bytes: Uint8Array): boolean {
  return (
    bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47
  );
}

/**
 * Reads DPI metadata from JPEG (APP0 JFIF / EXIF IFD0) or PNG (pHYs chunk).
 */
export async function readImageDpi(blob: Blob): Promise<DpiReadResult> {
  const buffer = await blob.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const view = new DataView(buffer);

  if (isJpeg(bytes)) {
    let offset = 2;
    let jfifDpi: { x: number; y: number } | null = null;
    let exifDpi: { x: number; y: number } | null = null;

    while (offset + 4 <= bytes.length) {
      if (bytes[offset] !== 0xff) break;
      const marker = bytes[offset + 1];
      if (marker === 0xda || marker === 0xd9) break;
      if (marker === 0x00 || (marker >= 0xd0 && marker <= 0xd8)) {
        offset += 2;
        continue;
      }
      const segLen = view.getUint16(offset + 2, false);
      if (segLen < 2 || offset + 2 + segLen > bytes.length) break;
      const dataStart = offset + 4;

      // APP0 JFIF
      if (
        marker === 0xe0 &&
        segLen >= 16 &&
        bytes[dataStart] === 0x4a &&
        bytes[dataStart + 1] === 0x46 &&
        bytes[dataStart + 2] === 0x49 &&
        bytes[dataStart + 3] === 0x46 &&
        bytes[dataStart + 4] === 0x00
      ) {
        const units = bytes[dataStart + 7];
        const xDensity = view.getUint16(dataStart + 8, false);
        const yDensity = view.getUint16(dataStart + 10, false);
        if (units === 1 && xDensity > 0 && yDensity > 0) {
          jfifDpi = { x: xDensity, y: yDensity };
        } else if (units === 2 && xDensity > 0 && yDensity > 0) {
          // Dots per cm -> DPI
          jfifDpi = {
            x: Math.round(xDensity * 2.54),
            y: Math.round(yDensity * 2.54),
          };
        }
      }

      // APP1 EXIF Resolution
      if (
        marker === 0xe1 &&
        segLen >= 16 &&
        bytes[dataStart] === 0x45 &&
        bytes[dataStart + 1] === 0x78 &&
        bytes[dataStart + 2] === 0x69 &&
        bytes[dataStart + 3] === 0x66
      ) {
        const tiffStart = dataStart + 6;
        if (tiffStart + 8 <= bytes.length) {
          const le = bytes[tiffStart] === 0x49 && bytes[tiffStart + 1] === 0x49;
          const be = bytes[tiffStart] === 0x4d && bytes[tiffStart + 1] === 0x4d;
          if (le || be) {
            const firstIfd = view.getUint32(tiffStart + 4, le);
            const ifdOffset = tiffStart + firstIfd;
            if (ifdOffset + 2 <= bytes.length) {
              const count = view.getUint16(ifdOffset, le);
              let xRes: number | null = null;
              let yRes: number | null = null;
              let unit = 2; // EXIF default = inches
              for (let i = 0; i < Math.min(count, 100); i++) {
                const entry = ifdOffset + 2 + i * 12;
                if (entry + 12 > bytes.length) break;
                const tag = view.getUint16(entry, le);
                if (tag === 0x011a || tag === 0x011b) {
                  const valOff = tiffStart + view.getUint32(entry + 8, le);
                  if (valOff + 8 <= bytes.length) {
                    const num = view.getUint32(valOff, le);
                    const den = view.getUint32(valOff + 4, le);
                    if (den > 0) {
                      const v = Math.round(num / den);
                      if (tag === 0x011a) xRes = v;
                      else yRes = v;
                    }
                  }
                } else if (tag === 0x0128) {
                  unit = view.getUint16(entry + 8, le);
                }
              }
              if (xRes && yRes) {
                exifDpi =
                  unit === 3
                    ? { x: Math.round(xRes * 2.54), y: Math.round(yRes * 2.54) }
                    : { x: xRes, y: yRes };
              }
            }
          }
        }
      }

      offset += 2 + segLen;
    }

    if (jfifDpi) {
      return { format: 'JPEG', dpiX: jfifDpi.x, dpiY: jfifDpi.y, source: 'JFIF APP0 Header' };
    }
    if (exifDpi) {
      return { format: 'JPEG', dpiX: exifDpi.x, dpiY: exifDpi.y, source: 'EXIF IFD0' };
    }
    return { format: 'JPEG', dpiX: null, dpiY: null, source: 'Not specified (defaults to 72/96)' };
  }

  if (isPng(bytes)) {
    let offset = 8;
    while (offset + 12 <= bytes.length) {
      const length = view.getUint32(offset, false);
      const type = String.fromCharCode(
        bytes[offset + 4],
        bytes[offset + 5],
        bytes[offset + 6],
        bytes[offset + 7]
      );
      if (offset + 12 + length > bytes.length) break;
      if (type === 'pHYs' && length >= 9) {
        const ppuX = view.getUint32(offset + 8, false);
        const ppuY = view.getUint32(offset + 12, false);
        const unit = bytes[offset + 16];
        if (unit === 1 && ppuX > 0) {
          return {
            format: 'PNG',
            dpiX: Math.round(ppuX * 0.0254),
            dpiY: Math.round(ppuY * 0.0254),
            source: 'PNG pHYs Chunk',
          };
        }
      }
      if (type === 'IEND') break;
      offset += 12 + length;
    }
    return { format: 'PNG', dpiX: null, dpiY: null, source: 'No pHYs chunk (defaults to 72/96)' };
  }

  return { format: 'Other', dpiX: null, dpiY: null, source: 'Format has no DPI header' };
}

/**
 * Losslessly updates or inserts JFIF APP0 DPI (and EXIF XResolution/YResolution if present)
 * inside a JPEG binary without decoding or recompressing pixels.
 */
function writeJpegDpiLossless(bytes: Uint8Array<ArrayBuffer>, dpi: number): Blob {
  const safeDpi = Math.max(1, Math.min(65535, Math.round(dpi)));
  const outChunks: Uint8Array<ArrayBuffer>[] = [bytes.slice(0, 2)]; // SOI
  let offset = 2;
  let wroteJfif = false;

  // Build standard 18-byte JFIF APP0 segment
  const buildJfifSegment = (): Uint8Array<ArrayBuffer> => {
    const seg = new Uint8Array(18);
    const dv = new DataView(seg.buffer);
    seg[0] = 0xff;
    seg[1] = 0xe0;
    dv.setUint16(2, 16, false); // length
    seg[4] = 0x4a; // J
    seg[5] = 0x46; // F
    seg[6] = 0x49; // I
    seg[7] = 0x46; // F
    seg[8] = 0x00;
    seg[9] = 1; // major version
    seg[10] = 1; // minor version
    seg[11] = 1; // units = 1 (dots per inch)
    dv.setUint16(12, safeDpi, false); // Xdensity
    dv.setUint16(14, safeDpi, false); // Ydensity
    seg[16] = 0; // Xthumbnail
    seg[17] = 0; // Ythumbnail
    return seg;
  };

  while (offset < bytes.length) {
    if (bytes[offset] !== 0xff) {
      outChunks.push(bytes.slice(offset));
      break;
    }

    const marker = bytes[offset + 1];
    if (marker === 0xda) {
      if (!wroteJfif) {
        outChunks.splice(1, 0, buildJfifSegment());
        wroteJfif = true;
      }
      outChunks.push(bytes.slice(offset));
      break;
    }

    if (marker === 0xd9 || marker === 0x00 || (marker >= 0xd0 && marker <= 0xd8)) {
      outChunks.push(bytes.slice(offset, offset + 2));
      offset += 2;
      if (marker === 0xd9) break;
      continue;
    }

    if (offset + 4 > bytes.length) {
      outChunks.push(bytes.slice(offset));
      break;
    }

    const segLen = (bytes[offset + 2] << 8) | bytes[offset + 3];
    const totalLen = 2 + segLen;
    if (segLen < 2 || offset + totalLen > bytes.length) {
      outChunks.push(bytes.slice(offset));
      break;
    }

    const segCopy = bytes.slice(offset, offset + totalLen);

    // Update existing JFIF APP0 in place
    if (
      marker === 0xe0 &&
      segLen >= 16 &&
      segCopy[4] === 0x4a &&
      segCopy[5] === 0x46 &&
      segCopy[6] === 0x49 &&
      segCopy[7] === 0x46 &&
      segCopy[8] === 0x00
    ) {
      const dv = new DataView(segCopy.buffer);
      segCopy[11] = 1; // DPI
      dv.setUint16(12, safeDpi, false);
      dv.setUint16(14, safeDpi, false);
      wroteJfif = true;
    }

    // Update EXIF APP1 XResolution/YResolution/ResolutionUnit if present
    if (
      marker === 0xe1 &&
      segLen >= 16 &&
      segCopy[4] === 0x45 &&
      segCopy[5] === 0x78 &&
      segCopy[6] === 0x69 &&
      segCopy[7] === 0x66
    ) {
      const tiffStart = 10;
      const le = segCopy[tiffStart] === 0x49 && segCopy[tiffStart + 1] === 0x49;
      const be = segCopy[tiffStart] === 0x4d && segCopy[tiffStart + 1] === 0x4d;
      if (le || be) {
        const dv = new DataView(segCopy.buffer);
        const firstIfd = dv.getUint32(tiffStart + 4, le);
        const ifdOffset = tiffStart + firstIfd;
        if (ifdOffset + 2 <= segCopy.length) {
          const count = dv.getUint16(ifdOffset, le);
          for (let i = 0; i < Math.min(count, 100); i++) {
            const entry = ifdOffset + 2 + i * 12;
            if (entry + 12 > segCopy.length) break;
            const tag = dv.getUint16(entry, le);
            if (tag === 0x011a || tag === 0x011b) {
              const valOff = tiffStart + dv.getUint32(entry + 8, le);
              if (valOff + 8 <= segCopy.length) {
                dv.setUint32(valOff, safeDpi, le);
                dv.setUint32(valOff + 4, 1, le);
              }
            } else if (tag === 0x0128) {
              dv.setUint16(entry + 8, 2, le); // 2 = inches
            }
          }
        }
      }
    }

    outChunks.push(segCopy);
    offset += totalLen;
  }

  if (!wroteJfif) {
    outChunks.splice(1, 0, buildJfifSegment());
  }

  return new Blob(outChunks, { type: 'image/jpeg' });
}

/**
 * Losslessly writes or updates the PNG pHYs chunk with exact pixels-per-meter for target DPI.
 */
function writePngDpiLossless(bytes: Uint8Array<ArrayBuffer>, dpi: number): Blob {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const ppm = Math.max(1, Math.round(dpi / 0.0254));

  const buildPhysChunk = (): Uint8Array<ArrayBuffer> => {
    const chunk = new Uint8Array(21); // 4 len + 4 type + 9 data + 4 crc
    const dv = new DataView(chunk.buffer);
    dv.setUint32(0, 9, false);
    chunk[4] = 0x70; // p
    chunk[5] = 0x48; // H
    chunk[6] = 0x59; // Y
    chunk[7] = 0x73; // s
    dv.setUint32(8, ppm, false);
    dv.setUint32(12, ppm, false);
    chunk[16] = 1; // meter
    const crc = crc32(chunk.subarray(4, 17));
    dv.setUint32(17, crc, false);
    return chunk;
  };

  const outChunks: Uint8Array<ArrayBuffer>[] = [bytes.slice(0, 8)];
  let offset = 8;
  let insertedPhys = false;

  while (offset + 12 <= bytes.length) {
    const length = view.getUint32(offset, false);
    const type = String.fromCharCode(
      bytes[offset + 4],
      bytes[offset + 5],
      bytes[offset + 6],
      bytes[offset + 7]
    );
    const totalChunkSize = 12 + length;
    if (offset + totalChunkSize > bytes.length) break;

    if (type === 'pHYs') {
      // Replace existing pHYs
      if (!insertedPhys) {
        outChunks.push(buildPhysChunk());
        insertedPhys = true;
      }
    } else {
      if (type === 'IDAT' && !insertedPhys) {
        outChunks.push(buildPhysChunk());
        insertedPhys = true;
      }
      outChunks.push(bytes.slice(offset, offset + totalChunkSize));
    }

    offset += totalChunkSize;
    if (type === 'IEND') break;
  }

  return new Blob(outChunks, { type: 'image/png' });
}

export async function changeImageDpi(file: File, targetDpi: number): Promise<DpiChangeResult> {
  const beforeDpi = await readImageDpi(file);
  const info = await loadExtendedImageInfo(file);
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const baseName = sanitizeFilename(getBaseFilename(file.name));

  try {
    let outBlob: Blob;
    let method: DpiChangeResult['method'];
    let ext: string;

    if (isJpeg(bytes)) {
      outBlob = writeJpegDpiLossless(bytes, targetDpi);
      method = 'lossless-jpeg';
      ext = '.jpg';
    } else if (isPng(bytes)) {
      outBlob = writePngDpiLossless(bytes, targetDpi);
      method = 'lossless-png';
      ext = '.png';
    } else {
      // Convert to lossless PNG so pHYs DPI metadata can be embedded cleanly
      const canvas = document.createElement('canvas');
      canvas.width = info.width;
      canvas.height = info.height;
      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) throw new Error('Unable to initialize canvas context.');
      ctx.drawImage(info.img, 0, 0, info.width, info.height);
      const pngBlob = await canvasToBlob(canvas, 'image/png');
      const pngBuf = await pngBlob.arrayBuffer();
      outBlob = writePngDpiLossless(new Uint8Array(pngBuf), targetDpi);
      method = 'converted-png';
      ext = '.png';
    }

    const afterDpi = await readImageDpi(outBlob);
    return {
      blob: outBlob,
      previewUrl: URL.createObjectURL(outBlob),
      size: outBlob.size,
      width: info.width,
      height: info.height,
      outputFilename: `${baseName}_${targetDpi}dpi${ext}`,
      method,
      beforeDpi,
      afterDpi,
    };
  } finally {
    URL.revokeObjectURL(info.previewUrl);
  }
}
