import { ImageFormat, ImageItem, OutputFormatChoice } from '../types';
import { getBaseFilename, sanitizeFilename } from './formatters';

/**
 * Checks if an image contains transparent pixels
 */
export async function detectTransparency(img: HTMLImageElement): Promise<boolean> {
  try {
    const canvas = document.createElement('canvas');
    // Sample a reasonable size to quickly inspect alpha without high memory
    const sampleWidth = Math.min(img.naturalWidth, 120);
    const sampleHeight = Math.min(img.naturalHeight, 120);
    canvas.width = sampleWidth;
    canvas.height = sampleHeight;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return false;

    ctx.drawImage(img, 0, 0, sampleWidth, sampleHeight);
    const imgData = ctx.getImageData(0, 0, sampleWidth, sampleHeight);
    const data = imgData.data;

    // Check alpha channel of pixels (every 4th byte)
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 250) {
        return true;
      }
    }
    return false;
  } catch (err) {
    console.warn('Could not inspect transparency:', err);
    return false;
  }
}

/**
 * HEIC/HEIF brand identifiers found in the ftyp box of HEIC files
 * (iPhone photos and some Android phones save in this format).
 */
const HEIC_BRANDS = ['heic', 'heix', 'hevc', 'hevx', 'heim', 'heis', 'hevm', 'hevs', 'mif1', 'msf1'];

/**
 * Detects HEIC/HEIF files by MIME type, file extension, or the ftyp magic
 * bytes at the start of the file. The magic-bytes check catches files that
 * arrive with a generic MIME type or a misleading .jpg name.
 */
export async function isHeicFile(file: File | Blob): Promise<boolean> {
  const type = (file.type || '').toLowerCase();
  if (type === 'image/heic' || type === 'image/heif') return true;

  const name = (file as File).name || '';
  if (/\.(heic|heif)$/i.test(name)) return true;

  try {
    const header = new Uint8Array(await file.slice(0, 12).arrayBuffer());
    if (header.length < 12) return false;
    const box = String.fromCharCode(header[4], header[5], header[6], header[7]);
    const brand = String.fromCharCode(header[8], header[9], header[10], header[11]);
    return box === 'ftyp' && HEIC_BRANDS.includes(brand);
  } catch {
    return false;
  }
}

/**
 * Converts a HEIC/HEIF blob to JPEG using heic2any (client-side, the file
 * never leaves the device). The decoder library is loaded lazily, only when
 * a HEIC file is actually detected, so other users never download it.
 */
async function convertHeicToJpeg(blob: Blob): Promise<Blob> {
  const heic2any = (await import('heic2any')).default;
  const result = await heic2any({ blob, toType: 'image/jpeg', quality: 0.92 });
  const converted = Array.isArray(result) ? result[0] : result;
  if (!converted) {
    throw new Error('HEIC conversion produced no output.');
  }
  return converted;
}

// Cache HEIC conversions per source file so the same photo is converted
// only once even though it is loaded twice (preview + compression).
const heicConversionCache = new WeakMap<Blob, Promise<Blob>>();

/**
 * Returns a blob the browser can decode: the original file for JPG/PNG/WebP,
 * or a converted JPEG for HEIC/HEIF files.
 */
export async function toDecodableBlob(file: File | Blob): Promise<Blob> {
  if (!(await isHeicFile(file))) return file;
  let cached = heicConversionCache.get(file);
  if (!cached) {
    cached = convertHeicToJpeg(file);
    heicConversionCache.set(file, cached);
  }
  return cached;
}

/**
 * Loads a File into an HTMLImageElement. HEIC/HEIF files are converted to
 * JPEG first, because browsers cannot decode HEIC natively.
 */
export async function loadImageFromFile(file: File | Blob): Promise<HTMLImageElement> {
  let decodable: Blob;
  try {
    decodable = await toDecodableBlob(file);
  } catch (err) {
    console.error('Failed to convert HEIC image', err);
    throw new Error('Failed to convert HEIC image. The file may be corrupted or in an unsupported format.');
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(decodable);

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(img);
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('Failed to load image. The file may be corrupted or in an unsupported format.'));
    };

    img.src = objectUrl;
  });
}

/**
 * Determine actual output mime type and file extension based on user choice
 */
export function resolveOutputFormat(
  choice: OutputFormatChoice,
  originalType: string
): { mimeType: ImageFormat; extension: string } {
  if (choice === 'jpeg') {
    return { mimeType: 'image/jpeg', extension: '.jpg' };
  }
  if (choice === 'webp') {
    return { mimeType: 'image/webp', extension: '.webp' };
  }
  if (choice === 'png') {
    return { mimeType: 'image/png', extension: '.png' };
  }

  // Original format selected
  if (originalType === 'image/png') {
    return { mimeType: 'image/png', extension: '.png' };
  }
  if (originalType === 'image/webp') {
    return { mimeType: 'image/webp', extension: '.webp' };
  }
  return { mimeType: 'image/jpeg', extension: '.jpg' };
}

/**
 * Perform client-side image compression using HTML5 Canvas
 */
export async function compressSingleImage(
  imageItem: ImageItem,
  qualityValue: number, // 10 to 100
  formatChoice: OutputFormatChoice,
  backgroundColor: string = '#ffffff'
): Promise<{
  blob: Blob;
  previewUrl: string;
  size: number;
  width: number;
  height: number;
  outputType: ImageFormat;
  outputExtension: string;
  outputFilename: string;
  spaceSaved: number;
  compressionPercentage: number;
}> {
  const img = await loadImageFromFile(imageItem.file);

  const width = img.naturalWidth;
  const height = img.naturalHeight;

  if (width === 0 || height === 0) {
    throw new Error('Image has invalid dimensions (0x0).');
  }

  const { mimeType, extension } = resolveOutputFormat(formatChoice, imageItem.originalType);

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) {
    throw new Error('Unable to initialize HTML5 2D canvas context.');
  }

  // If converting transparent image to JPEG, fill background with matte color
  const willLoseTransparency = mimeType === 'image/jpeg' && imageItem.hasAlpha;
  if (mimeType === 'image/jpeg' || willLoseTransparency) {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
  }

  // Enable high-quality image smoothing
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // Draw image at exact original dimensions (preserves aspect ratio without stretching)
  ctx.drawImage(img, 0, 0, width, height);

  // Normalize quality float for canvas.toBlob: 0.1 to 1.0
  const qualityFactor = Math.max(0.1, Math.min(1.0, qualityValue / 100));

  // Convert canvas to compressed Blob
  const compressedBlob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Browser failed to encode canvas to image blob.'));
        }
      },
      mimeType,
      qualityFactor
    );
  });

  const compressedSize = compressedBlob.size;
  const originalSize = imageItem.originalSize;
  const spaceSaved = Math.max(0, originalSize - compressedSize);
  
  // Calculate reduction percentage
  let compressionPercentage = Math.round(((originalSize - compressedSize) / originalSize) * 100);
  if (compressionPercentage < 0) {
    // If output is slightly larger (e.g., highly compressed source with high quality setting), clamp to 0
    compressionPercentage = 0;
  }

  const baseName = sanitizeFilename(getBaseFilename(imageItem.name));
  const outputFilename = `${baseName}_compressed${extension}`;
  const previewUrl = URL.createObjectURL(compressedBlob);

  return {
    blob: compressedBlob,
    previewUrl,
    size: compressedSize,
    width,
    height,
    outputType: mimeType,
    outputExtension: extension,
    outputFilename,
    spaceSaved,
    compressionPercentage,
  };
}
