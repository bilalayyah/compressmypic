export const PASTEL_PALETTE_COUNT = 15;

export function getPastelCardClass(index: number): string {
  const idx = ((index % PASTEL_PALETTE_COUNT) + PASTEL_PALETTE_COUNT) % PASTEL_PALETTE_COUNT;
  return `pastel-card-${idx}`;
}

export function getPastelTileClass(index: number): string {
  const idx = ((index % PASTEL_PALETTE_COUNT) + PASTEL_PALETTE_COUNT) % PASTEL_PALETTE_COUNT;
  return `pastel-tile-${idx}`;
}
