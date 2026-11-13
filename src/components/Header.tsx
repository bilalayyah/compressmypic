import React, { useState, useRef, useEffect } from 'react';
import {
  Layers,
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Sun,
  Moon,
  Monitor,
  Check,
} from 'lucide-react';
import { TOOLS_REGISTRY, TOOL_CATEGORIES } from '../data/tools';
import { ThemePreference, useTheme } from '../utils/theme';

interface HeaderProps {
  onNavigate: (path: string) => void;
  onScrollToTool: () => void;
}

const THEME_OPTIONS: {
  id: ThemePreference;
  label: string;
  shortLabel: string;
  Icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: 'light', label: 'Light Mode', shortLabel: 'Light', Icon: Sun },
  { id: 'dark', label: 'Dark Mode', shortLabel: 'Dark', Icon: Moon },
  { id: 'system', label: 'System Default', shortLabel: 'System', Icon: Monitor },
];

export const Header: React.FC<HeaderProps> = ({ onNavigate, onScrollToTool }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const { preference, resolvedTheme, setPreference } = useTheme();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
        setThemeMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setToolsOpen(false);
        setThemeMenuOpen(false);
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
  };

  const handleSelectTheme = (next: ThemePreference) => {
    setPreference(next);
    setThemeMenuOpen(false);
  };

  const activeCategories = TOOL_CATEGORIES.filter((cat) =>
    TOOLS_REGISTRY.some((t) => t.category === cat.id)
  );

  const CurrentThemeIcon =
    preference === 'light'
      ? Sun
      : preference === 'dark'
      ? Moon
      : resolvedTheme === 'dark'
      ? Moon
      : Sun;

  const currentThemeLabel =
    THEME_OPTIONS.find((opt) => opt.id === preference)?.label || 'System Default';

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sm:gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNav('/');
          }}
          aria-label="CompressMyPic – Free online image compressor logo"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition-colors">
            <Layers className="w-5 h-5" />
          </div>
          <span>
            Compress<span className="text-blue-600 dark:text-blue-400">MyPic</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/');
            }}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            Home
          </a>

          {/* Tools Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setToolsOpen(!toolsOpen);
                setThemeMenuOpen(false);
              }}
              className="flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap"
              aria-expanded={toolsOpen}
              aria-haspopup="true"
            >
              <span>Tools</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${toolsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {toolsOpen && (
              <div className="absolute left-0 top-full mt-2 w-[780px] max-w-[94vw] max-h-[78vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow-xl grid grid-cols-3 gap-5">
                {activeCategories.map((cat) => {
                  const catTools = TOOLS_REGISTRY.filter((t) => t.category === cat.id);
                  return (
                    <div key={cat.id} className="space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 px-2">
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
                            className="block px-2 py-1 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-500/20 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
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
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            How It Works
          </a>
          <a
            href="/#faq"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/#faq');
            }}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/about');
            }}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/contact');
            }}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Theme Switcher + Primary Action / Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Theme Switcher Dropdown (Desktop, Tablet & Mobile) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setThemeMenuOpen(!themeMenuOpen);
                setToolsOpen(false);
              }}
              aria-label={`Change color theme (Current: ${currentThemeLabel})`}
              aria-expanded={themeMenuOpen}
              aria-haspopup="menu"
              data-testid="theme-toggle-button"
              title={`Theme: ${currentThemeLabel}`}
              className="inline-flex items-center gap-1.5 h-9 px-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer text-xs font-semibold"
            >
              <CurrentThemeIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="hidden lg:inline">
                {preference === 'system'
                  ? 'System'
                  : preference === 'dark'
                  ? 'Dark'
                  : 'Light'}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                  themeMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {themeMenuOpen && (
              <div
                role="menu"
                aria-label="Theme options"
                className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-1.5 shadow-xl z-50"
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
                          ? 'bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/70'
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
            onClick={onScrollToTool}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Compress Images</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setThemeMenuOpen(false);
            }}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-2 max-h-[82vh] overflow-y-auto">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/');
            }}
            className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
          >
            Home (Image Compressor)
          </a>

          {/* Mobile Quick Theme Selector */}
          <div className="py-2 border-t border-slate-100 dark:border-slate-800 px-1">
            <p className="px-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400 mb-2">
              Theme
            </p>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
              {THEME_OPTIONS.map(({ id, shortLabel, Icon }) => {
                const isActive = preference === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleSelectTheme(id)}
                    className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-3">
            {activeCategories.map((cat) => {
              const catTools = TOOLS_REGISTRY.filter((t) => t.category === cat.id && t.slug !== '/');
              if (catTools.length === 0) return null;
              return (
                <div key={cat.id}>
                  <p className="px-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
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
                        className="block px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-500/20 hover:text-blue-600 dark:hover:text-blue-300 rounded-md truncate"
                      >
                        {tool.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
            <a
              href="/#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/#how-it-works');
              }}
              className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
            >
              How It Works
            </a>
            <a
              href="/#faq"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/#faq');
              }}
              className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
            >
              FAQ
            </a>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/about');
              }}
              className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
            >
              About Us
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/contact');
              }}
              className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md"
            >
              Contact Us
            </a>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setToolsOpen(false);
                setThemeMenuOpen(false);
                onScrollToTool();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm"
            >
              <span>Compress Images</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
