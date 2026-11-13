// Central language configuration for CompressMyPic — all 11 languages.
// Target path in the repo: src/locales/config.ts
// Adding a language = one entry here + one src/locales/<lang>/ folder
// (tools.ts, ui.ts, slugs.ts). No router rewrite, no component duplication.

export type SupportedLang =
  | 'en'
  | 'es'
  | 'pt'
  | 'de'
  | 'fr'
  | 'ja'
  | 'id'
  | 'it'
  | 'ru'
  | 'ko'
  | 'zh';

export type LangStatus = 'live' | 'in-progress' | 'planned';

export interface LanguageMeta {
  /** BCP 47 code used in URLs, e.g. 'es'. 'en' has no URL prefix (default). */
  code: SupportedLang;
  /** URL prefix segment, '' for English (default). */
  prefix: string;
  /** Native name shown in the language switcher. */
  nativeName: string;
  /** English name of the language. */
  englishName: string;
  /** Text direction. All 11 languages on this site are LTR. */
  dir: 'ltr';
  /** Regional variant to translate into. */
  variant: string;
  /** Implementation phase (see PLAN.md). */
  phase: number;
  /** Whether the language is shippable yet. Never link to a language that is not 'live' or 'in-progress' with its pages translated. */
  status: LangStatus;
  /** Localized tool-directory page path ('' for English — the homepage section serves it). */
  directoryPath: string;
}

export const DEFAULT_LANG: SupportedLang = 'en';

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  { code: 'en', prefix: '', nativeName: 'English', englishName: 'English', dir: 'ltr', variant: 'Default', phase: 0, status: 'live', directoryPath: '' },
  { code: 'es', prefix: 'es', nativeName: 'Español', englishName: 'Spanish', dir: 'ltr', variant: 'Neutral Latin American', phase: 1, status: 'in-progress', directoryPath: '/es/todas-las-herramientas' },
  { code: 'pt', prefix: 'pt', nativeName: 'Português', englishName: 'Portuguese', dir: 'ltr', variant: 'Brazilian Portuguese (pt-BR)', phase: 2, status: 'planned', directoryPath: '/pt/todas-as-ferramentas' },
  { code: 'fr', prefix: 'fr', nativeName: 'Français', englishName: 'French', dir: 'ltr', variant: 'Natural international French', phase: 2, status: 'planned', directoryPath: '/fr/tous-les-outils' },
  { code: 'de', prefix: 'de', nativeName: 'Deutsch', englishName: 'German', dir: 'ltr', variant: 'Standard German', phase: 3, status: 'planned', directoryPath: '/de/alle-tools' },
  { code: 'it', prefix: 'it', nativeName: 'Italiano', englishName: 'Italian', dir: 'ltr', variant: 'Standard Italian', phase: 3, status: 'planned', directoryPath: '/it/tutti-gli-strumenti' },
  { code: 'id', prefix: 'id', nativeName: 'Bahasa Indonesia', englishName: 'Indonesian', dir: 'ltr', variant: 'Standard Bahasa Indonesia', phase: 4, status: 'planned', directoryPath: '/id/semua-alat' },
  { code: 'ru', prefix: 'ru', nativeName: 'Русский', englishName: 'Russian', dir: 'ltr', variant: 'Standard Russian', phase: 4, status: 'planned', directoryPath: '/ru/vse-instrumenty' },
  { code: 'ja', prefix: 'ja', nativeName: '日本語', englishName: 'Japanese', dir: 'ltr', variant: 'Natural modern Japanese', phase: 5, status: 'planned', directoryPath: '/ja/tools' },
  { code: 'ko', prefix: 'ko', nativeName: '한국어', englishName: 'Korean', dir: 'ltr', variant: 'Standard South Korean', phase: 5, status: 'planned', directoryPath: '/ko/tools' },
  { code: 'zh', prefix: 'zh', nativeName: '简体中文', englishName: 'Chinese (Simplified)', dir: 'ltr', variant: 'Simplified Mandarin Chinese', phase: 6, status: 'planned', directoryPath: '/zh/all-tools' },
];

export const SUPPORTED_LANGS: SupportedLang[] = SUPPORTED_LANGUAGES.map((l) => l.code);

/** Languages that have a URL prefix (all except English). */
export const PREFIXED_LANGS: SupportedLang[] = SUPPORTED_LANGUAGES.filter(
  (l) => l.prefix !== ''
).map((l) => l.code);

export const LANG_BY_CODE: Record<SupportedLang, LanguageMeta> = Object.fromEntries(
  SUPPORTED_LANGUAGES.map((l) => [l.code, l])
) as Record<SupportedLang, LanguageMeta>;

export const LANG_BY_PREFIX: Record<string, LanguageMeta> = Object.fromEntries(
  SUPPORTED_LANGUAGES.filter((l) => l.prefix !== '').map((l) => [l.prefix, l])
);

/** localStorage key for the remembered language preference. Never set from IP/location. */
export const LANG_STORAGE_KEY = 'compressmypic_lang';

export function isSupportedLang(code: string): code is SupportedLang {
  return (SUPPORTED_LANGS as string[]).includes(code);
}

/** Languages the switcher may offer for a given page: only ones where the page exists. */
export function availableLanguagesForPage(
  existsIn: (lang: SupportedLang) => boolean
): SupportedLang[] {
  return SUPPORTED_LANGS.filter((lang) => existsIn(lang));
}
