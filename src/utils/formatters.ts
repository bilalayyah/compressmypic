/**
 * Formatting utilities for file sizes, percentages, and dimensions
 */

export function formatBytes(bytes: number, decimals: number = 2): string {
  if (!Number.isFinite(bytes) || bytes === 0) return '0 Bytes';

  const sign = bytes < 0 ? '-' : '';
  const absBytes = Math.abs(bytes);
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];

  const i = Math.max(0, Math.min(Math.floor(Math.log(absBytes) / Math.log(k)), sizes.length - 1));

  return `${sign}${parseFloat((absBytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function formatPercent(reduction: number | null): string {
  if (reduction === null || !Number.isFinite(reduction) || reduction === 0) return '0%';
  if (reduction > 0) return `-${reduction}%`;
  return `+${Math.abs(reduction)}%`;
}

export function sanitizeFilename(filename: string): string {
  return filename.replace(/[^a-zA-Z0-9._-]/g, '_');
}

export function getFileExtension(filename: string): string {
  const parts = filename.split('.');
  return parts.length > 1 ? `.${parts.pop()?.toLowerCase()}` : '';
}

export function getBaseFilename(filename: string): string {
  const lastDot = filename.lastIndexOf('.');
  if (lastDot === -1) return filename;
  return filename.substring(0, lastDot);
}
