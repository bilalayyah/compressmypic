export type GifLoopMode = 'forever' | 'count' | 'once';
export type GifFitMode = 'contain' | 'cover';

export interface GifFrameInput {
  img: HTMLImageElement;
  delayMs: number;
}

export interface GifEncodeOptions {
  width: number;
  height: number;
  fitMode: GifFitMode;
  backgroundColor: string;
  loopMode: GifLoopMode;
  totalPlays: number; // used when loopMode === 'count' (minimum 2)
  quality: number; // 10..100
  onProgress?: (percent: number) => void;
}

export interface GifEncodeResult {
  blob: Blob;
  previewUrl: string;
  size: number;
  width: number;
  height: number;
  frameCount: number;
}

/**
 * Generates an animated GIF completely client-side by lazy-loading `gifenc`.
 * Never uploads frames to any server.
 */
export async function encodeAnimatedGif(
  frames: GifFrameInput[],
  options: GifEncodeOptions
): Promise<GifEncodeResult> {
  if (frames.length === 0) {
    throw new Error('Add at least one image frame to create a GIF.');
  }

  // Lazy-load gifenc only when user actually creates a GIF
  const { GIFEncoder, quantize, applyPalette } = await import('gifenc');

  const outW = Math.max(16, Math.min(2000, Math.round(options.width)));
  const outH = Math.max(16, Math.min(2000, Math.round(options.height)));

  // Map 10..100 quality -> maxColors (32..256) and quantize format
  const qNorm = Math.max(0.1, Math.min(1, options.quality / 100));
  const maxColors = Math.max(32, Math.min(256, Math.round(32 + qNorm * 224)));
  const quantFormat = qNorm >= 0.45 ? 'rgb565' : 'rgb444';

  // GIF Netscape 2.0 repeat parameter: -1 = play once, 0 = loop forever, N = repeat N extra times
  const repeatValue =
    options.loopMode === 'forever'
      ? 0
      : options.loopMode === 'once'
      ? -1
      : Math.max(1, Math.round(options.totalPlays) - 1);

  const canvas = document.createElement('canvas');
  canvas.width = outW;
  canvas.height = outH;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    throw new Error('Unable to initialize 2D canvas context.');
  }

  const gif = GIFEncoder();

  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const srcW = frame.img.naturalWidth || outW;
    const srcH = frame.img.naturalHeight || outH;

    // Fill background color (clean matte for transparent PNG/WebP or contain letterboxing)
    ctx.fillStyle = options.backgroundColor || '#ffffff';
    ctx.fillRect(0, 0, outW, outH);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const scale =
      options.fitMode === 'cover'
        ? Math.max(outW / srcW, outH / srcH)
        : Math.min(outW / srcW, outH / srcH);
    const drawW = srcW * scale;
    const drawH = srcH * scale;
    const dx = (outW - drawW) / 2;
    const dy = (outH - drawH) / 2;

    ctx.drawImage(frame.img, dx, dy, drawW, drawH);

    const { data } = ctx.getImageData(0, 0, outW, outH);
    const palette = quantize(data, maxColors, { format: quantFormat });
    const indexed = applyPalette(data, palette, quantFormat);

    // gifenc takes delay in milliseconds and divides by 10 internally; clamp >= 20ms per browser GIF spec
    const safeDelay = Math.max(20, Math.round(frame.delayMs));

    gif.writeFrame(indexed, outW, outH, {
      palette,
      delay: safeDelay,
      repeat: i === 0 ? repeatValue : undefined,
      dispose: 2,
    });

    if (options.onProgress) {
      options.onProgress(Math.round(((i + 1) / frames.length) * 100));
    }

    // Yield back to UI thread so progress updates paint smoothly on long GIFs
    if (i < frames.length - 1) {
      await new Promise((r) => setTimeout(r, 0));
    }
  }

  gif.finish();
  const bytes = new Uint8Array(gif.bytesView()).slice();
  const blob = new Blob([bytes], { type: 'image/gif' });

  return {
    blob,
    previewUrl: URL.createObjectURL(blob),
    size: blob.size,
    width: outW,
    height: outH,
    frameCount: frames.length,
  };
}
