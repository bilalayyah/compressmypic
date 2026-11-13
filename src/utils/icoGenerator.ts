import { loadExtendedImageInfo, canvasToBlob } from './imageProcessing';

export interface FaviconAsset {
  filename: string;
  size: number;
  label: string;
  blob: Blob;
  previewUrl: string;
}

export interface FaviconOptions {
  backgroundColor: string; // hex or 'transparent'
  paddingPercent: number; // 0..25
  borderRadiusPercent: number; // 0..50
}

export interface FaviconPackageResult {
  assets: FaviconAsset[];
  icoBlob: Blob;
  icoPreviewUrl: string;
  manifestBlob: Blob;
  htmlSnippet: string;
}

const TARGET_SIZES: { size: number; filename: string; label: string }[] = [
  { size: 16, filename: 'favicon-16x16.png', label: '16×16 Browser Tab' },
  { size: 32, filename: 'favicon-32x32.png', label: '32×32 Taskbar / Shortcut' },
  { size: 48, filename: 'favicon-48x48.png', label: '48×48 Desktop Icon' },
  { size: 180, filename: 'apple-touch-icon.png', label: '180×180 Apple Touch Icon' },
  { size: 192, filename: 'android-chrome-192x192.png', label: '192×192 Android Chrome' },
  { size: 512, filename: 'android-chrome-512x512.png', label: '512×512 PWA Splash Icon' },
];

function drawRoundedRectPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

/**
 * Encodes PNG buffers (16x16, 32x32, 48x48) into a standard multi-frame Windows .ico file.
 */
async function buildIcoFromPngFrames(frames: { size: number; blob: Blob }[]): Promise<Blob> {
  const count = frames.length;
  const headerSize = 6;
  const dirSize = count * 16;
  const pngBuffers = await Promise.all(frames.map(async (f) => new Uint8Array(await f.blob.arrayBuffer())));

  const totalSize = headerSize + dirSize + pngBuffers.reduce((acc, buf) => acc + buf.length, 0);
  const out = new Uint8Array(totalSize);
  const view = new DataView(out.buffer);

  // ICONDIR header
  view.setUint16(0, 0, true); // reserved
  view.setUint16(2, 1, true); // type = 1 (ICO)
  view.setUint16(4, count, true); // image count

  let dataOffset = headerSize + dirSize;
  for (let i = 0; i < count; i++) {
    const entryOffset = headerSize + i * 16;
    const size = frames[i].size;
    const png = pngBuffers[i];

    out[entryOffset] = size >= 256 ? 0 : size; // width
    out[entryOffset + 1] = size >= 256 ? 0 : size; // height
    out[entryOffset + 2] = 0; // color palette
    out[entryOffset + 3] = 0; // reserved
    view.setUint16(entryOffset + 4, 1, true); // color planes
    view.setUint16(entryOffset + 6, 32, true); // bits per pixel
    view.setUint32(entryOffset + 8, png.length, true); // bytes in image
    view.setUint32(entryOffset + 12, dataOffset, true); // offset of image data

    out.set(png, dataOffset);
    dataOffset += png.length;
  }

  return new Blob([out], { type: 'image/x-icon' });
}

export async function generateFaviconPackage(
  file: File,
  options: FaviconOptions
): Promise<FaviconPackageResult> {
  const info = await loadExtendedImageInfo(file);
  try {
    const assets: FaviconAsset[] = [];

    for (const target of TARGET_SIZES) {
      const s = target.size;
      const canvas = document.createElement('canvas');
      canvas.width = s;
      canvas.height = s;
      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) throw new Error('Unable to initialize 2D canvas context.');

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      const radiusPx = (options.borderRadiusPercent / 100) * s;
      if (radiusPx > 0) {
        drawRoundedRectPath(ctx, 0, 0, s, s, radiusPx);
        ctx.clip();
      }

      if (options.backgroundColor && options.backgroundColor !== 'transparent') {
        ctx.fillStyle = options.backgroundColor;
        ctx.fillRect(0, 0, s, s);
      }

      const pad = (options.paddingPercent / 100) * s;
      const avail = Math.max(1, s - pad * 2);
      const scale = Math.min(avail / info.width, avail / info.height);
      const drawW = info.width * scale;
      const drawH = info.height * scale;
      const dx = (s - drawW) / 2;
      const dy = (s - drawH) / 2;

      ctx.drawImage(info.img, dx, dy, drawW, drawH);

      const blob = await canvasToBlob(canvas, 'image/png');
      assets.push({
        filename: target.filename,
        size: s,
        label: target.label,
        blob,
        previewUrl: URL.createObjectURL(blob),
      });
    }

    const icoFrames = assets
      .filter((a) => a.size === 16 || a.size === 32 || a.size === 48)
      .map((a) => ({ size: a.size, blob: a.blob }));
    const icoBlob = await buildIcoFromPngFrames(icoFrames);
    const icoPreviewUrl = assets.find((a) => a.size === 32)?.previewUrl || assets[0].previewUrl;

    const manifestObj = {
      name: 'My Website',
      short_name: 'Website',
      icons: [
        { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      theme_color: options.backgroundColor === 'transparent' ? '#ffffff' : options.backgroundColor,
      background_color: options.backgroundColor === 'transparent' ? '#ffffff' : options.backgroundColor,
      display: 'standalone',
    };
    const manifestBlob = new Blob([JSON.stringify(manifestObj, null, 2)], {
      type: 'application/manifest+json',
    });

    const htmlSnippet = `<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />`;

    return {
      assets,
      icoBlob,
      icoPreviewUrl,
      manifestBlob,
      htmlSnippet,
    };
  } finally {
    URL.revokeObjectURL(info.previewUrl);
  }
}
