import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Sun,
  Moon,
  Monitor,
  Check,
  Globe,
  Search,
  LayoutGrid,
} from 'lucide-react';
import { TOOLS_REGISTRY, TOOL_CATEGORIES } from '../data/tools';
import type { ToolDefinition } from '../data/tools';
import { SUPPORTED_LANGUAGES, type SupportedLang } from '../locales/config';
import { ThemePreference, useTheme } from '../utils/theme';

export interface HeaderStrings {
  home: string; tools: string; howItWorks: string; faq: string; about: string;
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
      Defaults to the English TOOLS_REGISTRY. */
  toolsRegistry?: ToolDefinition[];
  /** Active language's category list. Defaults to TOOL_CATEGORIES. */
  categoryLabels?: Array<{ id: string; label: string }>;
  /** Languages that have a translation of the CURRENT page (App computes this).
      Defaults to ['en']. */
  availableLanguages?: SupportedLang[];
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onScrollToTool,
  lang = 'en',
  onLanguageChange,
  strings: stringsProp,
  toolsRegistry = TOOLS_REGISTRY,
  categoryLabels = TOOL_CATEGORIES,
  availableLanguages = ['en'],
}) => {
  const strings: HeaderStrings = { ...DEFAULT_HEADER_STRINGS, ...stringsProp };

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
  const headerRef = useRef<HTMLElement>(null);

  const { preference, resolvedTheme, setPreference } = useTheme();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
        setThemeMenuOpen(false);
        setLangMenuOpen(false);
        setSearchOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setToolsOpen(false);
        setThemeMenuOpen(false);
        setLangMenuOpen(false);
        setSearchOpen(false);
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
      handleNav('/#tools-directory');
    }
  };

  const CurrentThemeIcon =
    preference === 'light'
      ? Sun
      : preference === 'dark'
      ? Moon
      : resolvedTheme === 'dark'
      ? Moon
      : Sun;

  const currentThemeLabel =
    THEME_OPTIONS.find((opt) => opt.id === preference)?.label || strings.themeSystem;

  const comingSoonTitle = lang === 'es' ? 'Próximamente' : 'Coming soon';

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 header-pastel-band border-b border-[var(--line)] shadow-xs"
    >
      <div className="max-w-[1220px] mx-auto px-3 sm:px-6 h-[68px] flex items-center justify-between gap-3 sm:gap-4 min-w-0">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNav('/');
          }}
          aria-label={strings.homeAriaLabel}
          className="flex items-center gap-2 sm:gap-2.5 whitespace-nowrap shrink-0 group py-1"
        >
          <span
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] btn-purple-grad grid place-items-center shadow-xs shrink-0"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
              <path d="M8 3H5a2 2 0 0 0-2 2v3" />
              <path d="M16 3h3a2 2 0 0 1 2 2v3" />
              <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
              <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
              <circle cx="12" cy="12" r="3.2" />
            </svg>
          </span>
          <span className="font-sans text-[1.08rem] sm:text-[1.22rem] font-extrabold text-[var(--ink-navy)] tracking-[-0.02em]">
            Compress<span className="text-[#7c3aed] dark:text-[#a78bfa]">My</span>Pic
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 text-[0.875rem] font-medium text-[var(--ink)] min-w-0">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/');
            }}
            className="px-2.5 py-1.5 rounded-lg hover:bg-white/70 dark:hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
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
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[0.875rem] font-medium text-[var(--ink)] hover:bg-white/70 dark:hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap"
              aria-expanded={toolsOpen}
              aria-haspopup="true"
            >
              <span>{strings.tools}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${toolsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {toolsOpen && (
              <div className="absolute left-0 top-full mt-2 w-[780px] max-w-[94vw] max-h-[78vh] overflow-y-auto rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[var(--shadow-lg)] grid grid-cols-3 gap-5 z-50">
                {activeCategories.map((cat) => {
                  const catTools = toolsRegistry.filter((t) => t.category === cat.id);
                  return (
                    <div key={cat.id} className="space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-3)] px-2">
                        {cat.label}
                      </p>
                      <div className="space-y-0.5">
                        {catTools.map((tool) => (
                          <a
                            key={tool.slug}
                            href={tool.slug}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNav(tool.slug);
                            }}
                            className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-[var(--ink-2)] hover:bg-[var(--accent-soft)] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] transition-colors"
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
            href="/#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/#how-it-works');
            }}
            className="px-2.5 py-1.5 rounded-lg hover:bg-white/70 dark:hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
          >
            {strings.howItWorks}
          </a>
          <a
            href="/#faq"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/#faq');
            }}
            className="px-2.5 py-1.5 rounded-lg hover:bg-white/70 dark:hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
          >
            {strings.faq}
          </a>
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/about');
            }}
            className="px-2.5 py-1.5 rounded-lg hover:bg-white/70 dark:hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
          >
            {strings.about}
          </a>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/contact');
            }}
            className="px-2.5 py-1.5 rounded-lg hover:bg-white/70 dark:hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
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
              className="flex items-center bg-[var(--surface)] border border-[var(--line)] rounded-full p-1 pl-3 shadow-xs w-[250px]"
            >
              <Search className="w-3.5 h-3.5 text-[var(--ink-3)] shrink-0 mr-1.5" />
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
                className="w-full text-xs text-[var(--ink)] bg-transparent! border-0! focus:outline-none! focus:ring-0! p-0! placeholder:text-[var(--ink-3)]"
              />
              <button
                type="submit"
                className="ml-1.5 px-3 py-1 text-[11px] font-semibold btn-purple-pill shrink-0 cursor-pointer"
              >
                Search
              </button>
            </form>

            {searchOpen && matchingTools.length > 0 && (
              <div className="absolute right-0 top-full mt-2 w-[300px] rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-2 shadow-[var(--shadow-lg)] z-50">
                {matchingTools.map((tool) => (
                  <button
                    key={tool.slug}
                    type="button"
                    onClick={() => {
                      handleNav(tool.slug);
                      setSearchQuery('');
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-[var(--accent-soft)] transition-colors cursor-pointer"
                  >
                    <div className="text-xs font-semibold text-[var(--ink)]">{tool.name}</div>
                    <div className="text-[11px] text-[var(--ink-3)] truncate">{tool.shortDescription}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Language Switcher Pill */}
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
              className="inline-flex items-center gap-1 sm:gap-1.5 h-9 px-2 sm:px-3 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-[#7c3aed]/50 transition-colors cursor-pointer text-xs font-semibold shadow-2xs"
            >
              <Globe className="w-3.5 h-3.5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span className="hidden xl:inline">{lang.toUpperCase()}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[var(--ink-3)] transition-transform ${
                  langMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {langMenuOpen && (
              <div
                role="menu"
                aria-label={strings.languageLabel}
                className="absolute right-0 top-full mt-2 w-48 rounded-2xl border border-[var(--line)] bg-[var(--surface)] py-1.5 shadow-[var(--shadow-lg)] z-50"
              >
                {SUPPORTED_LANGUAGES.map((language) => {
                  const isActive = language.code === lang;
                  const isAvailable = availableLanguages.includes(language.code);
                  return (
                    <button
                      key={language.code}
                      type="button"
                      role="menuitemradio"
                      aria-checked={isActive}
                      aria-disabled={!isAvailable}
                      disabled={!isAvailable}
                      title={isAvailable ? undefined : comingSoonTitle}
                      onClick={() => handleSelectLanguage(language.code)}
                      className={`w-full flex items-center justify-between gap-2 px-3.5 py-2 text-xs font-semibold transition-colors ${
                        !isAvailable
                          ? 'text-[var(--ink-3)] opacity-55 cursor-not-allowed'
                          : isActive
                          ? 'bg-[var(--accent-soft)] text-[#6d28d9] dark:text-[#ddd6fe] cursor-pointer'
                          : 'text-[var(--ink-2)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)] cursor-pointer'
                      }`}
                    >
                      <span>{language.nativeName}</span>
                      {isActive && <Check className="w-3.5 h-3.5 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Theme Switcher Pill */}
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
              className="inline-flex items-center gap-1 sm:gap-1.5 h-9 px-2 sm:px-3 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-[#7c3aed]/50 transition-colors cursor-pointer text-xs font-semibold shadow-2xs"
            >
              <CurrentThemeIcon className="w-3.5 h-3.5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <ChevronDown
                className={`w-3.5 h-3.5 text-[var(--ink-3)] transition-transform ${
                  themeMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {themeMenuOpen && (
              <div
                role="menu"
                aria-label={strings.themeHeading}
                className="absolute right-0 top-full mt-2 w-48 rounded-2xl border border-[var(--line)] bg-[var(--surface)] py-1.5 shadow-[var(--shadow-lg)] z-50"
              >
                {THEME_OPTIONS.map(({ id, label, Icon }) => {
                  const isActive = preference === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      role="menuitemradio"
                      aria-checked={isActive}
                      onClick={() => handleSelectTheme(id)}
                      className={`w-full flex items-center justify-between gap-2 px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[var(--accent-soft)] text-[#6d28d9] dark:text-[#ddd6fe]'
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
            onClick={() => handleNav('/#tools-directory')}
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-[0.82rem] font-semibold btn-purple-pill shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>All Tools</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setThemeMenuOpen(false);
              setLangMenuOpen(false);
            }}
            className="lg:hidden p-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-[#7c3aed]/50 cursor-pointer shrink-0"
            aria-label={strings.menuAriaLabel}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--line)] bg-[var(--surface)] px-4 pt-3 pb-6 space-y-2 max-h-[82vh] overflow-y-auto shadow-[var(--shadow-lg)]">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/');
            }}
            className="block px-3 py-2 text-base font-medium text-[var(--ink-2)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)] rounded-xl"
          >
            {strings.home}
          </a>

          {/* Mobile Quick Theme Selector */}
          <div className="py-2 border-t border-[var(--line)] px-1">
            <p className="px-2 text-[11px] font-semibold uppercase tracking-wide text-[var(--ink-3)] mb-2">
              {strings.themeHeading}
            </p>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-[var(--surface-2)] border border-[var(--line)] rounded-xl">
              {THEME_OPTIONS.map(({ id, shortLabel, Icon }) => {
                const isActive = preference === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleSelectTheme(id)}
                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[var(--surface)] text-[#7c3aed] dark:text-[#c4b5fd] shadow-xs'
                        : 'text-[var(--ink-2)] hover:text-[var(--ink)]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Language Selector */}
          <div className="py-2 border-t border-[var(--line)] px-1">
            <p className="px-2 text-[11px] font-semibold uppercase tracking-wide text-[var(--ink-3)] mb-2">
              {strings.languageLabel}
            </p>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-[var(--surface-2)] border border-[var(--line)] rounded-xl">
              {SUPPORTED_LANGUAGES.map((language) => {
                const isActive = language.code === lang;
                const isAvailable = availableLanguages.includes(language.code);
                return (
                  <button
                    key={language.code}
                    type="button"
                    aria-disabled={!isAvailable}
                    disabled={!isAvailable}
                    title={isAvailable ? undefined : comingSoonTitle}
                    onClick={() => handleSelectLanguage(language.code)}
                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-colors ${
                      !isAvailable
                        ? 'text-[var(--ink-3)] opacity-50 cursor-not-allowed'
                        : isActive
                        ? 'bg-[var(--surface)] text-[#7c3aed] dark:text-[#c4b5fd] shadow-xs cursor-pointer'
                        : 'text-[var(--ink-2)] hover:text-[var(--ink)] cursor-pointer'
                    }`}
                  >
                    <span>{language.code.toUpperCase()}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-2 border-t border-[var(--line)] space-y-3">
            {activeCategories.map((cat) => {
              const catTools = toolsRegistry.filter((t) => t.category === cat.id && t.slug !== '/');
              if (catTools.length === 0) return null;
              return (
                <div key={cat.id}>
                  <p className="px-3 text-[11px] font-semibold uppercase tracking-wide text-[var(--ink-3)]">
                    {cat.label}
                  </p>
                  <div className="mt-1 grid grid-cols-2 gap-1">
                    {catTools.map((tool) => (
                      <a
                        key={tool.slug}
                        href={tool.slug}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNav(tool.slug);
                        }}
                        className="block px-3 py-1.5 text-xs font-medium text-[var(--ink-2)] hover:bg-[var(--accent-soft)] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] rounded-lg truncate"
                      >
                        {tool.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[var(--line)] space-y-1">
            <a
              href="/#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/#how-it-works');
              }}
              className="block px-3 py-2 text-base font-medium text-[var(--ink-2)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)] rounded-xl"
            >
              {strings.howItWorks}
            </a>
            <a
              href="/#faq"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/#faq');
              }}
              className="block px-3 py-2 text-base font-medium text-[var(--ink-2)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)] rounded-xl"
            >
              {strings.faq}
            </a>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/about');
              }}
              className="block px-3 py-2 text-base font-medium text-[var(--ink-2)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)] rounded-xl"
            >
              {strings.aboutUs}
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/contact');
              }}
              className="block px-3 py-2 text-base font-medium text-[var(--ink-2)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)] rounded-xl"
            >
              {strings.contactUs}
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setToolsOpen(false);
                setThemeMenuOpen(false);
                setLangMenuOpen(false);
                onScrollToTool();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold btn-purple-pill shadow-xs cursor-pointer"
            >
              <span>{strings.compressImages}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
