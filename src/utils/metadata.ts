import { loadExtendedImageInfo, canvasToBlob } from './imageProcessing';
import { formatBytes, getBaseFilename, sanitizeFilename } from './formatters';
import { resolveOutputFormat } from './compressor';
import { OutputFormatChoice } from '../types';

export interface MetadataEntry {
  group: 'File' | 'Image' | 'EXIF' | 'Camera' | 'GPS' | 'PNG' | 'WebP';
  key: string;
  value: string;
  sensitive?: boolean;
}

export interface ImageMetadataReport {
  filename: string;
  mimeType: string;
  fileSize: number;
  formattedSize: string;
  lastModified: string;
  width: number;
  height: number;
  hasAlpha: boolean;
  entries: MetadataEntry[];
  gpsCoords: { latitude: number; longitude: number } | null;
  hasSensitiveMetadata: boolean;
  sensitiveSummary: string[];
  containerFormat: 'JPEG' | 'PNG' | 'WebP' | 'HEIC' | 'GIF' | 'BMP' | 'SVG' | 'AVIF' | 'Unknown';
}

const IFD0_TAGS: Record<number, string> = {
  0x010e: 'ImageDescription',
  0x010f: 'Make',
  0x0110: 'Model',
  0x0112: 'Orientation',
  0x011a: 'XResolution',
  0x011b: 'YResolution',
  0x0128: 'ResolutionUnit',
  0x0131: 'Software',
  0x0132: 'DateTime',
  0x013b: 'Artist',
  0x0213: 'YCbCrPositioning',
  0x8298: 'Copyright',
  0x8769: 'ExifIFDPointer',
  0x8825: 'GPSInfoIFDPointer',
};

const EXIF_TAGS: Record<number, string> = {
  0x829a: 'ExposureTime',
  0x829d: 'FNumber',
  0x8822: 'ExposureProgram',
  0x8827: 'ISOSpeedRatings',
  0x9000: 'ExifVersion',
  0x9003: 'DateTimeOriginal',
  0x9004: 'DateTimeDigitized',
  0x9201: 'ShutterSpeedValue',
  0x9202: 'ApertureValue',
  0x9204: 'ExposureBiasValue',
  0x9207: 'MeteringMode',
  0x9209: 'Flash',
  0x920a: 'FocalLength',
  0xa001: 'ColorSpace',
  0xa002: 'PixelXDimension',
  0xa003: 'PixelYDimension',
  0xa402: 'ExposureMode',
  0xa403: 'WhiteBalance',
  0xa405: 'FocalLengthIn35mmFilm',
  0xa430: 'CameraOwnerName',
  0xa431: 'BodySerialNumber',
  0xa432: 'LensSpecification',
  0xa433: 'LensMake',
  0xa434: 'LensModel',
  0xa435: 'LensSerialNumber',
};

function readUint16(view: DataView, offset: number, littleEndian: boolean): number {
  return view.getUint16(offset, littleEndian);
}

function readUint32(view: DataView, offset: number, littleEndian: boolean): number {
  return view.getUint32(offset, littleEndian);
}

function readInt32(view: DataView, offset: number, littleEndian: boolean): number {
  return view.getInt32(offset, littleEndian);
}

function readAscii(bytes: Uint8Array, start: number, length: number): string {
  let out = '';
  const end = Math.min(bytes.length, start + length);
  for (let i = start; i < end; i++) {
    const c = bytes[i];
    if (c === 0) break;
    if (c >= 32 && c <= 126) out += String.fromCharCode(c);
  }
  return out.trim();
}

function readRational(view: DataView, offset: number, littleEndian: boolean, signed: boolean): number | null {
  if (offset + 8 > view.byteLength) return null;
  const num = signed ? readInt32(view, offset, littleEndian) : readUint32(view, offset, littleEndian);
  const den = signed ? readInt32(view, offset + 4, littleEndian) : readUint32(view, offset + 4, littleEndian);
  if (den === 0) return null;
  return num / den;
}

function readTagValue(
  view: DataView,
  bytes: Uint8Array,
  tiffStart: number,
  entryOffset: number,
  littleEndian: boolean
): string | number | number[] | null {
  if (entryOffset + 12 > view.byteLength) return null;
  const type = readUint16(view, entryOffset + 2, littleEndian);
  const count = readUint32(view, entryOffset + 4, littleEndian);
  if (count === 0 || count > 4096) return null;

  const typeSizes: Record<number, number> = {
    1: 1, // BYTE
    2: 1, // ASCII
    3: 2, // SHORT
    4: 4, // LONG
    5: 8, // RATIONAL
    7: 1, // UNDEFINED
    9: 4, // SLONG
    10: 8, // SRATIONAL
  };
  const unitSize = typeSizes[type];
  if (!unitSize) return null;

  const totalBytes = count * unitSize;
  const valueOffset =
    totalBytes <= 4
      ? entryOffset + 8
      : tiffStart + readUint32(view, entryOffset + 8, littleEndian);

  if (valueOffset < 0 || valueOffset + totalBytes > view.byteLength) return null;

  if (type === 2) {
    return readAscii(bytes, valueOffset, count);
  }
  if (type === 3) {
    if (count === 1) return readUint16(view, valueOffset, littleEndian);
    const arr: number[] = [];
    for (let i = 0; i < Math.min(count, 8); i++) {
      arr.push(readUint16(view, valueOffset + i * 2, littleEndian));
    }
    return arr;
  }
  if (type === 4) {
    if (count === 1) return readUint32(view, valueOffset, littleEndian);
    const arr: number[] = [];
    for (let i = 0; i < Math.min(count, 8); i++) {
      arr.push(readUint32(view, valueOffset + i * 4, littleEndian));
    }
    return arr;
  }
  if (type === 5 || type === 10) {
    const signed = type === 10;
    if (count === 1) {
      const r = readRational(view, valueOffset, littleEndian, signed);
      return r !== null ? Number(r.toFixed(4)) : null;
    }
    const arr: number[] = [];
    for (let i = 0; i < Math.min(count, 6); i++) {
      const r = readRational(view, valueOffset + i * 8, littleEndian, signed);
      if (r !== null) arr.push(r);
    }
    return arr;
  }
  if (type === 7) {
    return readAscii(bytes, valueOffset, Math.min(count, 64));
  }
  if (type === 1) {
    return bytes[valueOffset];
  }
  return null;
}

function parseIfd(
  view: DataView,
  bytes: Uint8Array,
  tiffStart: number,
  ifdOffset: number,
  littleEndian: boolean
): Map<number, string | number | number[]> {
  const result = new Map<number, string | number | number[]>();
  const absOffset = tiffStart + ifdOffset;
  if (absOffset + 2 > view.byteLength) return result;
  const numEntries = readUint16(view, absOffset, littleEndian);
  if (numEntries > 512) return result;

  for (let i = 0; i < numEntries; i++) {
    const entryOffset = absOffset + 2 + i * 12;
    if (entryOffset + 12 > view.byteLength) break;
    const tag = readUint16(view, entryOffset, littleEndian);
    const val = readTagValue(view, bytes, tiffStart, entryOffset, littleEndian);
    if (val !== null && val !== '') {
      result.set(tag, val);
    }
  }
  return result;
}

function parseTiffExif(
  bytes: Uint8Array,
  tiffStart: number,
  entries: MetadataEntry[],
  sensitiveSummary: Set<string>
): { latitude: number; longitude: number } | null {
  if (tiffStart + 8 > bytes.length) return null;
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);

  const endian0 = bytes[tiffStart];
  const endian1 = bytes[tiffStart + 1];
  let littleEndian = true;
  if (endian0 === 0x49 && endian1 === 0x49) {
    littleEndian = true;
  } else if (endian0 === 0x4d && endian1 === 0x4d) {
    littleEndian = false;
  } else {
    return null;
  }

  const magic = readUint16(view, tiffStart + 2, littleEndian);
  if (magic !== 42) return null;

  const firstIfdOffset = readUint32(view, tiffStart + 4, littleEndian);
  const ifd0 = parseIfd(view, bytes, tiffStart, firstIfdOffset, littleEndian);

  const cameraKeys = new Set(['Make', 'Model', 'Software', 'LensMake', 'LensModel', 'BodySerialNumber', 'CameraOwnerName']);
  const sensitiveKeys = new Set([
    'Make',
    'Model',
    'Software',
    'DateTime',
    'DateTimeOriginal',
    'DateTimeDigitized',
    'Artist',
    'Copyright',
    'BodySerialNumber',
    'CameraOwnerName',
    'LensSerialNumber',
  ]);

  ifd0.forEach((val, tag) => {
    if (tag === 0x8769 || tag === 0x8825) return;
    const name = IFD0_TAGS[tag] || `Tag 0x${tag.toString(16)}`;
    const strVal = Array.isArray(val) ? val.join(', ') : String(val);
    const isSensitive = sensitiveKeys.has(name);
    if (isSensitive) sensitiveSummary.add(name);
    entries.push({
      group: cameraKeys.has(name) ? 'Camera' : 'EXIF',
      key: name,
      value: tag === 0x0112 ? formatOrientation(Number(val)) : strVal,
      sensitive: isSensitive,
    });
  });

  // ExifIFD
  const exifPtr = ifd0.get(0x8769);
  if (typeof exifPtr === 'number') {
    const exifIfd = parseIfd(view, bytes, tiffStart, exifPtr, littleEndian);
    exifIfd.forEach((val, tag) => {
      const name = EXIF_TAGS[tag] || `Exif 0x${tag.toString(16)}`;
      let formatted = Array.isArray(val) ? val.join(', ') : String(val);
      if (tag === 0x829a && typeof val === 'number' && val > 0 && val < 1) {
        formatted = `1/${Math.round(1 / val)} s`;
      } else if (tag === 0x829d && typeof val === 'number') {
        formatted = `f/${val}`;
      } else if (tag === 0x920a && typeof val === 'number') {
        formatted = `${val} mm`;
      } else if (tag === 0xa403 && typeof val === 'number') {
        formatted = val === 0 ? 'Auto' : 'Manual';
      }
      const isSensitive = sensitiveKeys.has(name);
      if (isSensitive) sensitiveSummary.add(name);
      entries.push({
        group: cameraKeys.has(name) ? 'Camera' : 'EXIF',
        key: name,
        value: formatted,
        sensitive: isSensitive,
      });
    });
  }

  // GPSIFD
  let gpsCoords: { latitude: number; longitude: number } | null = null;
  const gpsPtr = ifd0.get(0x8825);
  if (typeof gpsPtr === 'number') {
    const gpsIfd = parseIfd(view, bytes, tiffStart, gpsPtr, littleEndian);
    const latRef = String(gpsIfd.get(1) || 'N');
    const latVals = gpsIfd.get(2);
    const lonRef = String(gpsIfd.get(3) || 'E');
    const lonVals = gpsIfd.get(4);
    const altVal = gpsIfd.get(6);

    if (Array.isArray(latVals) && latVals.length >= 3 && Array.isArray(lonVals) && lonVals.length >= 3) {
      let lat = latVals[0] + latVals[1] / 60 + latVals[2] / 3600;
      let lon = lonVals[0] + lonVals[1] / 60 + lonVals[2] / 3600;
      if (latRef.toUpperCase() === 'S') lat = -lat;
      if (lonRef.toUpperCase() === 'W') lon = -lon;
      if (!Number.isNaN(lat) && !Number.isNaN(lon)) {
        gpsCoords = {
          latitude: Number(lat.toFixed(6)),
          longitude: Number(lon.toFixed(6)),
        };
        sensitiveSummary.add('GPS Location');
        entries.push({
          group: 'GPS',
          key: 'GPSLatitude',
          value: `${gpsCoords.latitude}° (${latRef})`,
          sensitive: true,
        });
        entries.push({
          group: 'GPS',
          key: 'GPSLongitude',
          value: `${gpsCoords.longitude}° (${lonRef})`,
          sensitive: true,
        });
      }
    }

    if (typeof altVal === 'number') {
      sensitiveSummary.add('GPS Altitude');
      entries.push({
        group: 'GPS',
        key: 'GPSAltitude',
        value: `${altVal.toFixed(1)} m`,
        sensitive: true,
      });
    }
  }

  return gpsCoords;
}

function formatOrientation(val: number): string {
  const map: Record<number, string> = {
    1: '1 (Normal / Horizontal)',
    2: '2 (Mirrored Horizontal)',
    3: '3 (Rotated 180°)',
    4: '4 (Mirrored Vertical)',
    5: '5 (Mirrored Horizontal & Rotated 270°)',
    6: '6 (Rotated 90° CW)',
    7: '7 (Mirrored Horizontal & Rotated 90°)',
    8: '8 (Rotated 270° CW)',
  };
  return map[val] || String(val);
}

function parseJpegSegments(
  bytes: Uint8Array,
  entries: MetadataEntry[],
  sensitiveSummary: Set<string>
): { gpsCoords: { latitude: number; longitude: number } | null } {
  let offset = 2;
  let gpsCoords: { latitude: number; longitude: number } | null = null;

  while (offset + 4 <= bytes.length) {
    if (bytes[offset] !== 0xff) break;
    const marker = bytes[offset + 1];
    if (marker === 0xda || marker === 0xd9) break; // SOS or EOI
    if (marker === 0x00 || (marker >= 0xd0 && marker <= 0xd8)) {
      offset += 2;
      continue;
    }

    const segLength = (bytes[offset + 2] << 8) | bytes[offset + 3];
    if (segLength < 2 || offset + 2 + segLength > bytes.length) break;

    const segStart = offset + 4;
    const segDataLen = segLength - 2;

    // APP1: EXIF or XMP
    if (marker === 0xe1 && segDataLen >= 6) {
      const header = readAscii(bytes, segStart, 6);
      if (header === 'Exif') {
        const coords = parseTiffExif(bytes, segStart + 6, entries, sensitiveSummary);
        if (coords) gpsCoords = coords;
      } else {
        const xmpHeader = readAscii(bytes, segStart, 29);
        if (xmpHeader.includes('http://ns.adobe.com/xap')) {
          sensitiveSummary.add('XMP Metadata');
          entries.push({
            group: 'EXIF',
            key: 'XMP Packet',
            value: `Present (${segDataLen} bytes)`,
            sensitive: true,
          });
        }
      }
    }

    // APP13: Photoshop / IPTC
    if (marker === 0xed) {
      sensitiveSummary.add('IPTC / Photoshop Metadata');
      entries.push({
        group: 'EXIF',
        key: 'IPTC / APP13',
        value: `Present (${segDataLen} bytes)`,
        sensitive: true,
      });
    }

    // COM: Comment
    if (marker === 0xfe && segDataLen > 0) {
      const comment = readAscii(bytes, segStart, Math.min(segDataLen, 200));
      if (comment) {
        sensitiveSummary.add('JPEG Comment');
        entries.push({
          group: 'EXIF',
          key: 'JPEG Comment',
          value: comment,
          sensitive: true,
        });
      }
    }

    // SOF0 / SOF2
    if ((marker === 0xc0 || marker === 0xc2) && segDataLen >= 6) {
      const precision = bytes[segStart];
      const components = bytes[segStart + 5];
      entries.push({
        group: 'Image',
        key: 'JPEG Encoding',
        value: marker === 0xc2 ? 'Progressive DCT' : 'Baseline DCT',
      });
      entries.push({
        group: 'Image',
        key: 'Color Bit Depth',
        value: `${precision}-bit per channel (${components} components)`,
      });
    }

    offset += 2 + segLength;
  }

  return { gpsCoords };
}

function parsePngChunks(
  bytes: Uint8Array,
  entries: MetadataEntry[],
  sensitiveSummary: Set<string>
): { gpsCoords: { latitude: number; longitude: number } | null } {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let offset = 8;
  let gpsCoords: { latitude: number; longitude: number } | null = null;

  while (offset + 12 <= bytes.length) {
    const length = view.getUint32(offset, false);
    const type = String.fromCharCode(
      bytes[offset + 4],
      bytes[offset + 5],
      bytes[offset + 6],
      bytes[offset + 7]
    );
    const dataStart = offset + 8;
    if (dataStart + length + 4 > bytes.length) break;

    if (type === 'IHDR' && length >= 13) {
      const bitDepth = bytes[dataStart + 8];
      const colorType = bytes[dataStart + 9];
      const colorNames: Record<number, string> = {
        0: 'Grayscale',
        2: 'RGB',
        3: 'Indexed Palette',
        4: 'Grayscale + Alpha',
        6: 'RGBA',
      };
      entries.push({
        group: 'PNG',
        key: 'Color Mode',
        value: `${colorNames[colorType] || colorType} (${bitDepth}-bit)`,
      });
    } else if (type === 'pHYs' && length >= 9) {
      const ppuX = view.getUint32(dataStart, false);
      const ppuY = view.getUint32(dataStart + 4, false);
      const unit = bytes[dataStart + 8];
      if (unit === 1 && ppuX > 0) {
        const dpiX = Math.round(ppuX * 0.0254);
        const dpiY = Math.round(ppuY * 0.0254);
        entries.push({
          group: 'PNG',
          key: 'Physical DPI',
          value: `${dpiX} × ${dpiY} DPI`,
        });
      }
    } else if (type === 'tEXt' && length > 0) {
      const chunkBytes = bytes.slice(dataStart, dataStart + length);
      const nullIdx = chunkBytes.indexOf(0);
      if (nullIdx > 0) {
        const keyword = readAscii(chunkBytes, 0, nullIdx);
        const text = readAscii(chunkBytes, nullIdx + 1, chunkBytes.length - nullIdx - 1);
        sensitiveSummary.add(`PNG Text (${keyword})`);
        entries.push({
          group: 'PNG',
          key: `tEXt: ${keyword}`,
          value: text || '(empty)',
          sensitive: true,
        });
      }
    } else if (type === 'iTXt' || type === 'zTXt') {
      const keyword = readAscii(bytes, dataStart, Math.min(length, 40));
      sensitiveSummary.add(`PNG ${type} (${keyword})`);
      entries.push({
        group: 'PNG',
        key: `${type}: ${keyword || 'Metadata'}`,
        value: `Present (${length} bytes)`,
        sensitive: true,
      });
    } else if (type === 'eXIf' && length > 8) {
      const coords = parseTiffExif(bytes, dataStart, entries, sensitiveSummary);
      if (coords) gpsCoords = coords;
    } else if (type === 'tIME' && length >= 7) {
      const year = view.getUint16(dataStart, false);
      const month = String(bytes[dataStart + 2]).padStart(2, '0');
      const day = String(bytes[dataStart + 3]).padStart(2, '0');
      sensitiveSummary.add('PNG Timestamp');
      entries.push({
        group: 'PNG',
        key: 'tIME Last Modified',
        value: `${year}-${month}-${day}`,
        sensitive: true,
      });
    }

    if (type === 'IEND') break;
    offset += 12 + length;
  }

  return { gpsCoords };
}

function parseWebpChunks(
  bytes: Uint8Array,
  entries: MetadataEntry[],
  sensitiveSummary: Set<string>
): { gpsCoords: { latitude: number; longitude: number } | null } {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let offset = 12;
  let gpsCoords: { latitude: number; longitude: number } | null = null;

  while (offset + 8 <= bytes.length) {
    const fourcc = String.fromCharCode(
      bytes[offset],
      bytes[offset + 1],
      bytes[offset + 2],
      bytes[offset + 3]
    );
    const size = view.getUint32(offset + 4, true);
    const dataStart = offset + 8;

    if (fourcc === 'VP8X' && size >= 1) {
      const flags = bytes[dataStart];
      const hasIcc = Boolean(flags & 0x20);
      const hasAlpha = Boolean(flags & 0x10);
      const hasExif = Boolean(flags & 0x08);
      const hasXmp = Boolean(flags & 0x04);
      const hasAnim = Boolean(flags & 0x02);
      entries.push({
        group: 'WebP',
        key: 'WebP Features',
        value: [
          hasAlpha ? 'Alpha' : null,
          hasAnim ? 'Animated' : null,
          hasIcc ? 'ICC Profile' : null,
          hasExif ? 'EXIF' : null,
          hasXmp ? 'XMP' : null,
        ]
          .filter(Boolean)
          .join(', ') || 'Standard VP8X',
      });
    } else if (fourcc === 'EXIF' && size > 8) {
      sensitiveSummary.add('WebP EXIF');
      const start = readAscii(bytes, dataStart, 4) === 'Exif' ? dataStart + 6 : dataStart;
      const coords = parseTiffExif(bytes, start, entries, sensitiveSummary);
      if (coords) gpsCoords = coords;
    } else if (fourcc === 'XMP ') {
      sensitiveSummary.add('WebP XMP');
      entries.push({
        group: 'WebP',
        key: 'XMP Packet',
        value: `Present (${size} bytes)`,
        sensitive: true,
      });
    }

    offset += 8 + size + (size % 2);
  }

  return { gpsCoords };
}

function detectContainerFormat(bytes: Uint8Array, mime: string, name: string): ImageMetadataReport['containerFormat'] {
  if (bytes.length >= 2 && bytes[0] === 0xff && bytes[1] === 0xd8) return 'JPEG';
  if (bytes.length >= 8 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) return 'PNG';
  if (
    bytes.length >= 12 &&
    String.fromCharCode(bytes[0], bytes[1], bytes[2], bytes[3]) === 'RIFF' &&
    String.fromCharCode(bytes[8], bytes[9], bytes[10], bytes[11]) === 'WEBP'
  ) {
    return 'WebP';
  }
  if (bytes.length >= 3 && String.fromCharCode(bytes[0], bytes[1], bytes[2]) === 'GIF') return 'GIF';
  if (bytes.length >= 2 && String.fromCharCode(bytes[0], bytes[1]) === 'BM') return 'BMP';
  const lower = name.toLowerCase();
  if (mime.includes('heic') || mime.includes('heif') || /\.(heic|heif)$/i.test(lower)) return 'HEIC';
  if (mime.includes('svg') || lower.endsWith('.svg')) return 'SVG';
  if (mime.includes('avif') || lower.endsWith('.avif')) return 'AVIF';
  return 'Unknown';
}

export async function extractImageMetadata(file: File | Blob, displayName?: string): Promise<ImageMetadataReport> {
  const filename = displayName || (file as File).name || 'image';
  const lastModifiedMs = (file as File).lastModified || Date.now();
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);

  const f = file instanceof File ? file : new File([file], filename, { type: file.type });
  const info = await loadExtendedImageInfo(f);
  URL.revokeObjectURL(info.previewUrl);

  const containerFormat = detectContainerFormat(bytes, info.detectedType, filename);
  const sensitiveSummary = new Set<string>();
  const entries: MetadataEntry[] = [
    { group: 'File', key: 'File Name', value: filename },
    { group: 'File', key: 'File Size', value: `${formatBytes(file.size)} (${file.size.toLocaleString()} bytes)` },
    { group: 'File', key: 'Container Format', value: containerFormat },
    { group: 'File', key: 'MIME Type', value: info.detectedType || 'Unknown' },
    { group: 'File', key: 'Last Modified', value: new Date(lastModifiedMs).toLocaleString() },
    { group: 'Image', key: 'Dimensions', value: `${info.width} × ${info.height} px` },
    {
      group: 'Image',
      key: 'Megapixels',
      value: `${((info.width * info.height) / 1_000_000).toFixed(2)} MP`,
    },
    { group: 'Image', key: 'Transparency (Alpha)', value: info.hasAlpha ? 'Yes' : 'No' },
  ];

  let gpsCoords: { latitude: number; longitude: number } | null = null;

  if (containerFormat === 'JPEG') {
    gpsCoords = parseJpegSegments(bytes, entries, sensitiveSummary).gpsCoords;
  } else if (containerFormat === 'PNG') {
    gpsCoords = parsePngChunks(bytes, entries, sensitiveSummary).gpsCoords;
  } else if (containerFormat === 'WebP') {
    gpsCoords = parseWebpChunks(bytes, entries, sensitiveSummary).gpsCoords;
  }

  return {
    filename,
    mimeType: info.detectedType,
    fileSize: file.size,
    formattedSize: formatBytes(file.size),
    lastModified: new Date(lastModifiedMs).toLocaleString(),
    width: info.width,
    height: info.height,
    hasAlpha: info.hasAlpha,
    entries,
    gpsCoords,
    hasSensitiveMetadata: sensitiveSummary.size > 0,
    sensitiveSummary: Array.from(sensitiveSummary),
    containerFormat,
  };
}

/**
 * Losslessly strips metadata segments from a JPEG file without re-encoding pixels.
 * Removes APP1..APP15 (0xE1..0xEF, including EXIF, XMP, IPTC, ICC) and COM (0xFE).
 * Keeps APP0 (JFIF) and all image coding tables/scan data intact.
 */
function stripJpegMetadataLossless(bytes: Uint8Array<ArrayBuffer>): Blob {
  const chunks: Uint8Array<ArrayBuffer>[] = [bytes.slice(0, 2)]; // SOI 0xFF 0xD8
  let offset = 2;

  while (offset < bytes.length) {
    if (bytes[offset] !== 0xff) {
      // Unexpected byte; fall back by copying remainder
      chunks.push(bytes.slice(offset));
      break;
    }

    const marker = bytes[offset + 1];

    // SOS (Start of Scan) -> remainder of file is entropy-coded image + EOI
    if (marker === 0xda) {
      chunks.push(bytes.slice(offset));
      break;
    }

    // EOI or standalone markers
    if (marker === 0xd9 || marker === 0x00 || (marker >= 0xd0 && marker <= 0xd8)) {
      chunks.push(bytes.slice(offset, offset + 2));
      offset += 2;
      if (marker === 0xd9) break;
      continue;
    }

    if (offset + 4 > bytes.length) {
      chunks.push(bytes.slice(offset));
      break;
    }

    const segLength = (bytes[offset + 2] << 8) | bytes[offset + 3];
    const totalSegBytes = 2 + segLength;

    if (segLength < 2 || offset + totalSegBytes > bytes.length) {
      chunks.push(bytes.slice(offset));
      break;
    }

    // Strip APP1..APP15 (0xE1..0xEF) and COM (0xFE)
    const shouldStrip = (marker >= 0xe1 && marker <= 0xef) || marker === 0xfe;
    if (!shouldStrip) {
      chunks.push(bytes.slice(offset, offset + totalSegBytes));
    }

    offset += totalSegBytes;
  }

  return new Blob(chunks, { type: 'image/jpeg' });
}

/**
 * Losslessly strips PNG metadata chunks (tEXt, iTXt, zTXt, eXIf, tIME)
 * while preserving pixel data (IHDR, PLTE, tRNS, IDAT, IEND).
 */
function stripPngMetadataLossless(bytes: Uint8Array<ArrayBuffer>): Blob {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const chunks: Uint8Array<ArrayBuffer>[] = [bytes.slice(0, 8)];
  let offset = 8;
  const stripTypes = new Set(['tEXt', 'iTXt', 'zTXt', 'eXIf', 'tIME']);

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

    if (!stripTypes.has(type)) {
      chunks.push(bytes.slice(offset, offset + totalChunkSize));
    }

    offset += totalChunkSize;
    if (type === 'IEND') break;
  }

  return new Blob(chunks, { type: 'image/png' });
}

export interface CleanMetadataResult {
  blob: Blob;
  previewUrl: string;
  size: number;
  width: number;
  height: number;
  outputFilename: string;
  outputExtension: string;
  methodUsed: 'lossless-strip' | 'canvas-reencode';
  beforeTagsCount: number;
  afterTagsCount: number;
}

export async function removeImageMetadata(
  file: File,
  mode: 'lossless' | 'reencode',
  formatChoice: OutputFormatChoice,
  quality: number
): Promise<CleanMetadataResult> {
  const beforeReport = await extractImageMetadata(file);
  const beforeSensitiveCount = beforeReport.entries.filter((e) => e.sensitive).length;
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const container = detectContainerFormat(bytes, file.type, file.name);

  let cleanBlob: Blob;
  let methodUsed: 'lossless-strip' | 'canvas-reencode' = 'canvas-reencode';
  let outputExtension = '.jpg';

  if (mode === 'lossless' && formatChoice === 'original' && container === 'JPEG') {
    cleanBlob = stripJpegMetadataLossless(bytes);
    methodUsed = 'lossless-strip';
    outputExtension = '.jpg';
  } else if (mode === 'lossless' && formatChoice === 'original' && container === 'PNG') {
    cleanBlob = stripPngMetadataLossless(bytes);
    methodUsed = 'lossless-strip';
    outputExtension = '.png';
  } else {
    const info = await loadExtendedImageInfo(file);
    try {
      const { mimeType, extension } = resolveOutputFormat(formatChoice, info.detectedType);
      outputExtension = extension;
      const canvas = document.createElement('canvas');
      canvas.width = info.width;
      canvas.height = info.height;
      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) throw new Error('Unable to initialize 2D canvas context.');
      if (mimeType === 'image/jpeg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, info.width, info.height);
      }
      ctx.drawImage(info.img, 0, 0, info.width, info.height);
      cleanBlob = await canvasToBlob(canvas, mimeType, Math.max(0.1, Math.min(1, quality / 100)));
    } finally {
      URL.revokeObjectURL(info.previewUrl);
    }
  }

  const baseName = sanitizeFilename(getBaseFilename(file.name));
  const outputFilename = `${baseName}_clean${outputExtension}`;
  const afterReport = await extractImageMetadata(cleanBlob, outputFilename);
  const afterSensitiveCount = afterReport.entries.filter((e) => e.sensitive).length;

  return {
    blob: cleanBlob,
    previewUrl: URL.createObjectURL(cleanBlob),
    size: cleanBlob.size,
    width: beforeReport.width,
    height: beforeReport.height,
    outputFilename,
    outputExtension,
    methodUsed,
    beforeTagsCount: beforeSensitiveCount,
    afterTagsCount: afterSensitiveCount,
  };
}
