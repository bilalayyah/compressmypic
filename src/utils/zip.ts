import JSZip from 'jszip';
import { ImageItem } from '../types';

/**
 * Packs all successfully compressed images into a single ZIP archive
 */
export async function createZipArchive(
  images: ImageItem[],
  onProgress?: (percent: number) => void
): Promise<Blob> {
  const zip = new JSZip();
  const folder = zip.folder('compressed_images') || zip;

  const validImages = images.filter((img) => img.compressedBlob && img.status === 'done');
  if (validImages.length === 0) {
    throw new Error('No compressed images available to download.');
  }

  // Track filename uniqueness
  const usedNames = new Set<string>();

  for (const item of validImages) {
    if (!item.compressedBlob) continue;

    let filename = item.outputFilename;
    // Prevent filename collisions inside zip
    if (usedNames.has(filename)) {
      const dotIndex = filename.lastIndexOf('.');
      const name = dotIndex > -1 ? filename.slice(0, dotIndex) : filename;
      const ext = dotIndex > -1 ? filename.slice(dotIndex) : '';
      let counter = 1;
      while (usedNames.has(`${name}_${counter}${ext}`)) {
        counter++;
      }
      filename = `${name}_${counter}${ext}`;
    }
    usedNames.add(filename);

    folder.file(filename, item.compressedBlob);
  }

  const zipBlob = await zip.generateAsync(
    {
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 },
    },
    (metadata) => {
      if (onProgress) {
        onProgress(Math.round(metadata.percent));
      }
    }
  );

  return zipBlob;
}

/**
 * Packs arbitrary named blobs into a single ZIP archive
 */
export async function createFilesZipArchive(
  files: { filename: string; blob: Blob }[],
  folderName: string = 'compressmypic_files',
  onProgress?: (percent: number) => void
): Promise<Blob> {
  const zip = new JSZip();
  const folder = folderName ? zip.folder(folderName) || zip : zip;

  if (files.length === 0) {
    throw new Error('No files available to package into ZIP.');
  }

  const usedNames = new Set<string>();
  for (const item of files) {
    let filename = item.filename;
    if (usedNames.has(filename)) {
      const dotIndex = filename.lastIndexOf('.');
      const name = dotIndex > -1 ? filename.slice(0, dotIndex) : filename;
      const ext = dotIndex > -1 ? filename.slice(dotIndex) : '';
      let counter = 1;
      while (usedNames.has(`${name}_${counter}${ext}`)) {
        counter++;
      }
      filename = `${name}_${counter}${ext}`;
    }
    usedNames.add(filename);
    folder.file(filename, item.blob);
  }

  return zip.generateAsync(
    {
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 },
    },
    (metadata) => {
      if (onProgress) {
        onProgress(Math.round(metadata.percent));
      }
    }
  );
}

/**
 * Triggers a browser download for a Blob
 */
export function triggerDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);
}
