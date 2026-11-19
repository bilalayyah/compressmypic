// Tiny module-level cache for the active locale dictionaries (Tier J,
// hydration fix, 2026-11-19).
//
// React error #418 (hydration text mismatch) happened because App's first
// client render was English while the prerendered HTML was localized: the
// locale useState hooks started as null and the dictionaries arrived in a
// later commit. main.tsx already awaited the locale import before first
// render — but it only warmed Vite's module cache; App still rendered
// English first. Now main.tsx stores the assembled locale object here,
// and App's useState initializers read it synchronously, so the first
// render is already localized and hydrateRoot adopts the prerendered DOM
// instead of discarding it.
//
// The cache holds exactly the objects App's setters receive (same shape),
// so the generic cast at the read site is sound. Plain module state: a
// full navigation creates a fresh module scope, so nothing stale survives
// across page loads.
const cache = new Map<string, unknown>();

export function getCachedLocale<T>(lang: string): T | null {
  return (cache.get(lang) as T | undefined) ?? null;
}

export function setCachedLocale(lang: string, data: unknown): void {
  cache.set(lang, data);
}
