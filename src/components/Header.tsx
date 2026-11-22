import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Monitor,
  Check,
  Globe,
  Search,
  LayoutGrid,
} from 'lucide-react';
import { SiteLogo } from './Logo';
import { TOOLS_META, TOOL_CATEGORIES } from '../data/toolsMeta';
import type { ToolMeta } from '../data/toolsMeta';
import { SUPPORTED_LANGUAGES, type SupportedLang } from '../locales/config';
import { ES_PATH_BY_EN } from '../locales/es/slugs';
import { PT_PATH_BY_EN } from '../locales/pt/slugs';
import { FR_PATH_BY_EN } from '../locales/fr/slugs';
import { DE_PATH_BY_EN } from '../locales/de/slugs';
import { IT_PATH_BY_EN } from '../locales/it/slugs';
import { ID_PATH_BY_EN } from '../locales/id/slugs';
import { RU_PATH_BY_EN } from '../locales/ru/slugs';
import { JA_PATH_BY_EN } from '../locales/ja/slugs';
import { KO_PATH_BY_EN } from '../locales/ko/slugs';
import { ZH_PATH_BY_EN } from '../locales/zh/slugs';
import { HI_PATH_BY_EN } from '../locales/hi/slugs';
import { AR_PATH_BY_EN } from '../locales/ar/slugs';
import { TR_PATH_BY_EN } from '../locales/tr/slugs';
import { VI_PATH_BY_EN } from '../locales/vi/slugs';
import { BN_PATH_BY_EN } from '../locales/bn/slugs';
import { ThemePreference, useTheme, type ResolvedTheme } from '../utils/theme';

export interface HeaderStrings {
  home: string; tools: string; howItWorks: string; faq: string; about: string;
  blog: string;
  // Optional: locales that predate the UF-style mobile drawer omit these;
  // DEFAULT_HEADER_STRINGS fills them in (see the spread at `strings` below).
  categories?: string; appearance?: string; allTools?: string;
  contact: string; compressImages: string;
  themeLight: string; themeDark: string; themeSystem: string;
  themeLightShort: string; themeDarkShort: string; themeSystemShort: string;
  languageLabel: string; homeAriaLabel: string;
  themeHeading: string;
  menuAriaLabel: string;
  themeAriaLabel: string;
  themeTitle: string;
  aboutUs: string;
  contactUs: string;
}

const DEFAULT_HEADER_STRINGS: HeaderStrings = {
  home: 'Home',
  tools: 'Tools',
  howItWorks: 'How It Works',
  faq: 'FAQ',
  about: 'About',
  blog: 'Blog',
  categories: 'Categories',
  appearance: 'Appearance',
  allTools: 'All Tools',
  contact: 'Contact',
  compressImages: 'Compress Images',
  themeLight: 'Light Mode',
  themeDark: 'Dark Mode',
  themeSystem: 'System Default',
  themeLightShort: 'Light',
  themeDarkShort: 'Dark',
  themeSystemShort: 'System',
  languageLabel: 'Language',
  homeAriaLabel: 'CompressMyPic – Free online image compressor logo',
  themeHeading: 'Theme',
  menuAriaLabel: 'Toggle navigation menu',
  themeAriaLabel: 'Change color theme (Current: {current})',
  themeTitle: 'Theme: {current}',
  aboutUs: 'About Us',
  contactUs: 'Contact Us',
};

interface HeaderProps {
  onNavigate: (path: string) => void;
  onScrollToTool: () => void;
  /** Active language. Defaults to 'en'. */
  lang?: SupportedLang;
  /** Called when the user picks a language in the switcher. */
  onLanguageChange?: (lang: SupportedLang) => void;
  /** Localized header strings. Defaults to English. */
  strings?: HeaderStrings;
  /** Active language's tool registry (drives the Tools dropdown + mobile lists).
      Defaults to the English TOOLS_META. */
  toolsRegistry?: ToolMeta[];
  /** Active language's category list. Defaults to TOOL_CATEGORIES. */
  categoryLabels?: Array<{ id: string; label: string }>;
  /** Languages that have a translation of the CURRENT page (App computes this).
      Defaults to ['en']. */
  availableLanguages?: SupportedLang[];
  /** Per-language href for the switcher anchors. App passes a resolver that
      points at the equivalent translated page on blog routes (falling back
      to the localized blog home when the translation is not published).
      Defaults to the language home (`/` / `/<lang>/`). */
  languageHrefFor?: (lang: SupportedLang) => string;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  lang = 'en',
  onLanguageChange,
  strings: stringsProp,
  toolsRegistry = TOOLS_META,
  categoryLabels = TOOL_CATEGORIES,
  availableLanguages = ['en'],
  languageHrefFor,
}) => {
  const strings: HeaderStrings = { ...DEFAULT_HEADER_STRINGS, ...stringsProp };
  /** Switcher anchor href for a language: the equivalent translated page
   *  when App provides a resolver, else the language home. */
  const langHrefFor = (code: SupportedLang) =>
    languageHrefFor ? languageHrefFor(code) : code === 'en' ? '/' : `/${code}/`;

  const THEME_OPTIONS: {
    id: ThemePreference;
    label: string;
    shortLabel: string;
    Icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { id: 'light', label: strings.themeLight, shortLabel: strings.themeLightShort, Icon: Sun },
    { id: 'dark', label: strings.themeDark, shortLabel: strings.themeDarkShort, Icon: Moon },
    { id: 'system', label: strings.themeSystem, shortLabel: strings.themeSystemShort, Icon: Monitor },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Localized header nav URLs (SEO audit #31): logo + Home -> /<lang>/,
  // About / Contact -> the localized slugs for the active language.
  const PATH_BY_EN_BY_LANG: Partial<Record<SupportedLang, Record<string, string>>> = {
    es: ES_PATH_BY_EN,
    pt: PT_PATH_BY_EN,
    fr: FR_PATH_BY_EN,
    de: DE_PATH_BY_EN,
    it: IT_PATH_BY_EN,
    id: ID_PATH_BY_EN,
    ru: RU_PATH_BY_EN,
    ja: JA_PATH_BY_EN,
    ko: KO_PATH_BY_EN,
    zh: ZH_PATH_BY_EN,
    hi: HI_PATH_BY_EN,
    ar: AR_PATH_BY_EN,
    tr: TR_PATH_BY_EN,
    vi: VI_PATH_BY_EN,
    bn: BN_PATH_BY_EN,
  };
  const localizedMap = PATH_BY_EN_BY_LANG[lang];
  const homeUrl = lang === 'en' ? '/' : `/${lang}/`;
  const aboutUrl = localizedMap?.['/about'] ?? '/about';
  const blogUrl = localizedMap?.['/blog'] ?? '/blog';
  const contactUrl = localizedMap?.['/contact'] ?? '/contact';

  const { preference, resolvedTheme, setPreference } = useTheme();

  // SSR: useTheme() reads localStorage/matchMedia, which do not exist in
  // Node — the server always renders preference 'system' / resolved 'light'.
  // A client with a stored dark theme (or a dark system) would render a
  // different icon/label/check on first paint and break hydration (#418).
  // Render the server-identical theme UI until after mount, then switch to
  // the real values (post-hydration update, same-size button, no CLS).
  const [themeMounted, setThemeMounted] = useState(false);
  useEffect(() => {
    setThemeMounted(true);
  }, []);
  const renderPreference: ThemePreference = themeMounted ? preference : 'system';
  const renderResolvedTheme: ResolvedTheme = themeMounted ? resolvedTheme : 'light';

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
        setThemeMenuOpen(false);
        setLangMenuOpen(false);
        setSearchOpen(false);
        setMobileSearchOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setToolsOpen(false);
        setThemeMenuOpen(false);
        setLangMenuOpen(false);
        setSearchOpen(false);
        setMobileSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setToolsOpen(false);
    setThemeMenuOpen(false);
    setLangMenuOpen(false);
    setSearchOpen(false);
    setMobileSearchOpen(false);
  };

  const handleSelectTheme = (next: ThemePreference) => {
    setPreference(next);
    setThemeMenuOpen(false);
  };

  const handleSelectLanguage = (next: SupportedLang) => {
    onLanguageChange?.(next);
    setLangMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const activeCategories = categoryLabels.filter((cat) =>
    toolsRegistry.some((t) => t.category === cat.id)
  );

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const matchingTools = normalizedQuery
    ? toolsRegistry
        .filter(
          (t) =>
            t.name.toLowerCase().includes(normalizedQuery) ||
            t.shortDescription.toLowerCase().includes(normalizedQuery) ||
            t.slug.toLowerCase().includes(normalizedQuery)
        )
        .slice(0, 7)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (matchingTools.length > 0) {
      handleNav(matchingTools[0].slug);
      setSearchQuery('');
    } else {
      handleNav(localizedMap?.['/all-tools'] ?? '/all-tools');
    }
  };

  const CurrentThemeIcon =
    renderPreference === 'light'
      ? Sun
      : renderPreference === 'dark'
      ? Moon
      : renderResolvedTheme === 'dark'
      ? Moon
      : Sun;

  const currentThemeLabel =
    THEME_OPTIONS.find((opt) => opt.id === renderPreference)?.label || strings.themeSystem;

  const comingSoonTitle = lang === 'es' ? 'Próximamente' : 'Coming soon';

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 header-pastel-band border-b border-[var(--line)] shadow-xs"
    >
      <div className="max-w-[1220px] mx-auto px-2 sm:px-6 h-[68px] flex items-center justify-between gap-2 sm:gap-4 min-w-0">
        {/* Zone 1: Brand Wordmark */}
        <a
          href={homeUrl}
          onClick={(e) => {
            e.preventDefault();
            handleNav(homeUrl);
          }}
          aria-label={strings.homeAriaLabel}
          className="flex items-center gap-2 sm:gap-2.5 whitespace-nowrap shrink-0 group py-1"
        >
          <SiteLogo />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 text-[0.875rem] font-medium text-[var(--ink)] min-w-0">
          <a
            href={homeUrl}
            onClick={(e) => {
              e.preventDefault();
              handleNav(homeUrl);
            }}
            className="px-2 py-1.5 rounded-lg hover:bg-white/70 dark:hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
          >
            {strings.home}
          </a>

          {/* Tools Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setToolsOpen(!toolsOpen);
                setThemeMenuOpen(false);
                setLangMenuOpen(false);
                setSearchOpen(false);
              }}
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-[0.875rem] font-medium text-[var(--ink)] hover:bg-white/70 dark:hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap"
              aria-expanded={toolsOpen}
              aria-haspopup="true"
            >
              <span>{strings.tools}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${toolsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {toolsOpen && (
              <div className="absolute start-0 top-full mt-2 w-[780px] max-w-[94vw] max-h-[78vh] overflow-y-auto rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[var(--shadow-lg)] grid grid-cols-3 gap-5 z-50">
                {activeCategories.map((cat) => {
                  const catTools = toolsRegistry.filter((t) => t.category === cat.id);
                  return (
                    <div key={cat.id} className="space-y-1.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--ink-3)] px-2">
                        {cat.label}
                      </p>
                      <div className="space-y-0.5">
                        {catTools.map((tool) => (
                          <a
                            key={tool.slug}
                            href={localizedMap?.[tool.slug] ?? tool.slug}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNav(tool.slug);
                            }}
                            className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-[var(--ink-2)] hover:bg-[var(--accent-soft)] hover:text-[#b91c1c] dark:hover:text-[#fecaca] transition-colors"
                          >
                            {tool.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <a
            href={`${homeUrl}#how-it-works`}
            onClick={(e) => {
              e.preventDefault();
              handleNav('/#how-it-works');
            }}
            className="px-2 py-1.5 rounded-lg hover:bg-white/70 dark:hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
          >
            {strings.howItWorks}
          </a>
          <a
            href={`${homeUrl}#faq`}
            onClick={(e) => {
              e.preventDefault();
              handleNav('/#faq');
            }}
            className="px-2 py-1.5 rounded-lg hover:bg-white/70 dark:hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
          >
            {strings.faq}
          </a>
          <a
            href={aboutUrl}
            onClick={(e) => {
              e.preventDefault();
              handleNav(aboutUrl);
            }}
            className="px-2 py-1.5 rounded-lg hover:bg-white/70 dark:hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
          >
            {strings.about}
          </a>
          <a
            href={blogUrl}
            onClick={(e) => {
              e.preventDefault();
              handleNav('/blog');
            }}
            className="px-2 py-1.5 rounded-lg hover:bg-white/70 dark:hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
          >
            {strings.blog}
          </a>
          <a
            href={contactUrl}
            onClick={(e) => {
              e.preventDefault();
              handleNav(contactUrl);
            }}
            className="px-2 py-1.5 rounded-lg hover:bg-white/70 dark:hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
          >
            {strings.contact}
          </a>
        </nav>

        {/* Zone 3: Desktop Search + Language Pill + Theme Pill + All Tools Pill / Mobile Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Header Desktop Search Input + Purple Search Button */}
          <div className="hidden xl:block relative">
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center bg-[var(--surface)] border border-[var(--line)] rounded-lg p-1 ps-3 shadow-xs w-[200px]"
            >
              <Search className="w-3.5 h-3.5 text-[var(--ink-3)] shrink-0 me-1.5" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                placeholder="Search tools..."
                aria-label="Search tools"
                className="w-full text-xs text-[var(--ink)] bg-transparent! border-0! focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-[#dc2626] p-0! placeholder:text-[var(--ink-3)]"
              />
              <button
                type="submit"
                className="ms-1.5 px-3 py-1 text-xs font-semibold btn-purple-pill shrink-0 cursor-pointer"
              >
                Search
              </button>
            </form>

            {searchOpen && matchingTools.length > 0 && (
              <div className="absolute end-0 top-full mt-2 w-[300px] rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-2 shadow-[var(--shadow-lg)] z-50">
                {matchingTools.map((tool) => (
                  <button
                    key={tool.slug}
                    type="button"
                    onClick={() => {
                      handleNav(tool.slug);
                      setSearchQuery('');
                    }}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-[var(--accent-soft)] transition-colors cursor-pointer"
                  >
                    <div className="text-xs font-semibold text-[var(--ink)]">{tool.name}</div>
                    <div className="text-xs text-[var(--ink-3)] truncate">{tool.shortDescription}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language Switcher Button (UtilityFlow-style) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setLangMenuOpen(!langMenuOpen);
                setToolsOpen(false);
                setThemeMenuOpen(false);
                setSearchOpen(false);
              }}
              aria-label={strings.languageLabel}
              aria-expanded={langMenuOpen}
              aria-haspopup="menu"
              title={strings.languageLabel}
              className="inline-flex items-center gap-1.5 min-h-[40px] px-2.5 sm:px-3 py-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors cursor-pointer text-xs font-semibold shadow-2xs"
            >
              <Globe className="w-4 h-4 text-[var(--ink-3)]" />
              <span className="hidden sm:inline">{lang.toUpperCase()}</span>
              <ChevronDown
                className={`max-[411px]:hidden w-3.5 h-3.5 text-[var(--ink-3)] transition-transform ${
                  langMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {langMenuOpen && (
              <div
                role="menu"
                aria-label={strings.languageLabel}
                className="absolute end-0 top-full mt-2 w-48 rounded-2xl border border-[var(--line)] bg-[var(--surface)] py-1.5 shadow-[var(--shadow-lg)] z-50"
              >
                {SUPPORTED_LANGUAGES.map((language) => {
                  const isActive = language.code === lang;
                  const isAvailable = availableLanguages.includes(language.code);
                  // Language switcher items are real <a> anchors (SEO audit #30)
                  // so crawlers can reach every language home. Clicking still
                  // switches language via onLanguageChange (SPA navigation).
                  const langHref = langHrefFor(language.code);
                  const itemClassName = `w-full flex items-center justify-between gap-2 px-3.5 py-2 text-xs font-semibold transition-colors ${
                    !isAvailable
                      ? 'text-[var(--ink-3)] opacity-55 cursor-not-allowed'
                      : isActive
                      ? 'bg-[var(--accent-soft)] text-[#b91c1c] dark:text-[#fecaca] cursor-pointer'
                      : 'text-[var(--ink-2)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)] cursor-pointer'
                  }`;
                  if (!isAvailable) {
                    return (
                      <button
                        key={language.code}
                        type="button"
                        role="menuitemradio"
                        aria-checked={isActive}
                        aria-disabled
                        disabled
                        title={comingSoonTitle}
                        className={itemClassName}
                      >
                        <span>{language.nativeName}</span>
                        {isActive && <Check className="w-3.5 h-3.5 shrink-0" />}
                      </button>
                    );
                  }
                  return (
                    <a
                      key={language.code}
                      href={langHref}
                      role="menuitemradio"
                      aria-checked={isActive}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSelectLanguage(language.code);
                      }}
                      className={itemClassName}
                    >
                      <span>{language.nativeName}</span>
                      {isActive && <Check className="w-3.5 h-3.5 shrink-0" />}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Theme Switcher Button (UtilityFlow-style) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setThemeMenuOpen(!themeMenuOpen);
                setToolsOpen(false);
                setLangMenuOpen(false);
                setSearchOpen(false);
              }}
              aria-label={strings.themeAriaLabel.replace('{current}', currentThemeLabel)}
              aria-expanded={themeMenuOpen}
              aria-haspopup="menu"
              data-testid="theme-toggle-button"
              title={strings.themeTitle.replace('{current}', currentThemeLabel)}
              className="inline-flex items-center gap-1.5 min-h-[40px] px-2.5 sm:px-3 py-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:bg-[var(--surface-2)] transition-colors cursor-pointer text-xs font-semibold shadow-2xs"
            >
              <CurrentThemeIcon className="w-4 h-4 text-[#dc2626] dark:text-[#f87171]" />
              <ChevronDown
                className={`max-[411px]:hidden w-3.5 h-3.5 text-[var(--ink-3)] transition-transform ${
                  themeMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {themeMenuOpen && (
              <div
                role="menu"
                aria-label={strings.themeHeading}
                className="absolute end-0 top-full mt-2 w-48 rounded-2xl border border-[var(--line)] bg-[var(--surface)] py-1.5 shadow-[var(--shadow-lg)] z-50"
              >
                {THEME_OPTIONS.map(({ id, label, Icon }) => {
                  const isActive = renderPreference === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      role="menuitemradio"
                      aria-checked={isActive}
                      onClick={() => handleSelectTheme(id)}
                      className={`w-full flex items-center justify-between gap-2 px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[var(--accent-soft)] text-[#b91c1c] dark:text-[#fecaca]'
                          : 'text-[var(--ink-2)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4" />
                        <span>{label}</span>
                      </span>
                      {isActive && <Check className="w-3.5 h-3.5 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleNav(localizedMap?.['/all-tools'] ?? '/all-tools')}
            className="hidden lg:inline-flex items-center gap-1.5 px-4 h-11 text-[0.82rem] font-semibold btn-purple-pill shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>All Tools</span>
          </button>

          {/* Mobile Search Button (UtilityFlow-style): toggles the expandable
              search row under the header, so tool pages have a search
              affordance on mobile too. */}
          <button
            type="button"
            onClick={() => {
              setMobileSearchOpen(!mobileSearchOpen);
              setThemeMenuOpen(false);
              setLangMenuOpen(false);
            }}
            className="lg:hidden h-10 w-10 sm:h-11 sm:w-11 grid place-items-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:bg-[var(--surface-2)] cursor-pointer shrink-0"
            aria-label="Search tools"
            aria-expanded={mobileSearchOpen}
          >
            <Search className="w-5 h-5 text-[var(--ink-3)]" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setThemeMenuOpen(false);
              setLangMenuOpen(false);
            }}
            className="lg:hidden h-10 w-10 sm:h-11 sm:w-11 grid place-items-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:bg-[var(--surface-2)] cursor-pointer shrink-0"
            aria-label={strings.menuAriaLabel}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[var(--ink-3)]" /> : <Menu className="w-5 h-5 text-[var(--ink-3)]" />}
          </button>
        </div>
      </div>

      {/* Mobile search row (expandable, UtilityFlow-style) */}
      {mobileSearchOpen && (
        <div className="xl:hidden border-t border-[var(--line)] bg-[var(--surface)] px-4 py-3">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-[var(--surface-2)] border border-[var(--line)] rounded-full px-3 py-1"
          >
            <Search className="w-4 h-4 text-[var(--ink-3)] shrink-0 me-2" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
              placeholder="Search tools..."
              aria-label="Search tools"
              className="w-full text-sm text-[var(--ink)] bg-transparent! border-0! p-0! placeholder:text-[var(--ink-3)]"
            />
            <button
              type="submit"
              className="ms-2 px-3 h-11 text-xs font-semibold btn-purple-pill shrink-0 cursor-pointer"
            >
              Search
            </button>
          </form>
          {searchQuery.trim() !== '' && matchingTools.length > 0 && (
            <div className="mt-2 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-2">
              {matchingTools.map((tool) => (
                <a
                  key={tool.slug}
                  href={localizedMap?.[tool.slug] ?? tool.slug}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(tool.slug);
                    setSearchQuery('');
                  }}
                  className="block px-3 py-2 rounded-xl hover:bg-[var(--accent-soft)] transition-colors"
                >
                  <div className="text-sm font-semibold text-[var(--ink)]">{tool.name}</div>
                  <div className="text-xs text-[var(--ink-3)]">{tool.shortDescription}</div>
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Mobile Drawer (UtilityFlow-style: 5 nav links, Appearance
          segmented control, full-width All Tools pill) */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-[var(--line)] bg-[var(--surface)] px-4 py-4 space-y-2">
          <a
            href={localizedMap?.['/all-tools'] ?? '/all-tools'}
            onClick={(e) => {
              e.preventDefault();
              handleNav(localizedMap?.['/all-tools'] ?? '/all-tools');
            }}
            className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium min-h-[44px] text-[var(--ink-2)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]"
          >
            {strings.tools}
          </a>
          <a
            href={`${localizedMap?.['/all-tools'] ?? '/all-tools'}#categories`}
            onClick={(e) => {
              e.preventDefault();
              handleNav('/all-tools/#categories');
            }}
            className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium min-h-[44px] text-[var(--ink-2)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]"
          >
            {strings.categories}
          </a>
          <a
            href={localizedMap?.['/blog'] ?? '/blog'}
            onClick={(e) => {
              e.preventDefault();
              handleNav(localizedMap?.['/blog'] ?? '/blog');
            }}
            className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium min-h-[44px] text-[var(--ink-2)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]"
          >
            {strings.blog}
          </a>
          <a
            href={aboutUrl}
            onClick={(e) => {
              e.preventDefault();
              handleNav(aboutUrl);
            }}
            className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium min-h-[44px] text-[var(--ink-2)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]"
          >
            {strings.about}
          </a>
          <a
            href={contactUrl}
            onClick={(e) => {
              e.preventDefault();
              handleNav(contactUrl);
            }}
            className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium min-h-[44px] text-[var(--ink-2)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]"
          >
            {strings.contact}
          </a>

          <div className="pt-2 border-t border-[var(--line)]">
            <p className="px-1 text-xs font-semibold text-[var(--ink-3)]">
              {strings.appearance}
            </p>
            <div className="mt-1.5 grid grid-cols-3 gap-1 rounded-xl bg-[var(--surface-2)] p-1 border border-[var(--line)]">
              {THEME_OPTIONS.map(({ id, shortLabel, Icon }) => {
                const isActive = renderPreference === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleSelectTheme(id)}
                    className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold min-h-[40px] transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[var(--surface)] text-[#dc2626] dark:text-[#fca5a5] shadow-xs'
                        : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span>{shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => handleNav(localizedMap?.['/all-tools'] ?? '/all-tools')}
              className="w-full flex items-center justify-center rounded-full btn-purple-pill px-4 py-2.5 text-sm font-semibold min-h-[44px] cursor-pointer"
            >
              {strings.allTools}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
