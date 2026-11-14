import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Zap, Lock, Search, ArrowRight, LayoutGrid } from 'lucide-react';
import { TOOLS_REGISTRY, type ToolDefinition } from '../data/tools';

export interface HeroStrings {
  pill: string;
  h1: string;
  sub: string;
  badge1: string;
  badge2: string;
  badge3: string;
}

const EN_STRINGS: HeroStrings = {
  pill: '100% Private Client-Side Compression · No Server Uploads',
  h1: 'Free Image Compressor – Compress Images Online & Reduce Size Without Losing Quality',
  sub: 'Reduce image file sizes without sacrificing noticeable quality. Compress image online free with our free image compressor and photo compressor — an online image optimizer for JPG, PNG, WebP and HEIC. Fast, secure, no signup, no watermark, and easy image compression directly in your browser.',
  badge1: 'Your images never leave your device',
  badge2: 'Instant browser processing',
  badge3: 'JPG, PNG, WebP & HEIC supported',
};

interface HeroProps {
  /** Localized hero strings for the active language. Defaults to English. */
  strings?: HeroStrings;
  onNavigate?: (path: string) => void;
  onScrollToTool?: () => void;
  toolsRegistry?: ToolDefinition[];
}

export const Hero: React.FC<HeroProps> = ({
  strings = EN_STRINGS,
  onNavigate,
  onScrollToTool,
  toolsRegistry = TOOLS_REGISTRY,
}) => {
  const [query, setQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setDropdownOpen(true);
      } else if (e.key === 'Escape') {
        setDropdownOpen(false);
        inputRef.current?.blur();
      }
    };
    const handleOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleOutside);
    };
  }, []);

  const q = query.trim().toLowerCase();
  const filteredTools = q
    ? toolsRegistry.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.shortDescription.toLowerCase().includes(q) ||
          t.slug.toLowerCase().includes(q)
      )
    : toolsRegistry.slice(0, 6);

  const toolCount = toolsRegistry.filter((t) => t.slug !== '/').length;

  const handlePickTool = (slug: string) => {
    setDropdownOpen(false);
    setQuery('');
    if (onNavigate) {
      onNavigate(slug);
    } else {
      window.location.href = slug;
    }
  };

  return (
    <section className="pt-10 pb-8 sm:pt-14 sm:pb-10 text-center px-4 max-w-5xl mx-auto">
      {/* Eyebrow Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ede9fe] dark:bg-[#7c3aed]/20 border border-[#ddd6fe] dark:border-[#8b5cf6]/35 text-[#6d28d9] dark:text-[#ddd6fe] text-xs sm:text-sm font-semibold mb-5">
        <Lock className="w-3.5 h-3.5 text-[#7c3aed] dark:text-[#c4b5fd]" />
        <span>{strings.pill}</span>
      </div>

      {/* Centered Huge Bold Near-Black Navy Sans H1 */}
      <h1 className="font-sans text-3xl sm:text-5xl lg:text-[3.2rem] font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] text-balance leading-[1.12] max-w-4xl mx-auto">
        {strings.h1}
      </h1>

      <p className="mt-5 text-base sm:text-lg text-[var(--ink-3)] max-w-2xl mx-auto leading-relaxed text-balance">
        {strings.sub}
      </p>

      {/* Big White Rounded Search Bar with ⌘K Badge */}
      <div ref={containerRef} className="mt-7 max-w-xl mx-auto relative">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (filteredTools.length > 0) {
              handlePickTool(filteredTools[0].slug);
            }
          }}
          className="flex items-center bg-[var(--surface)] border border-[var(--line)] focus-within:border-[#7c3aed] focus-within:ring-2 focus-within:ring-[#7c3aed]/20 rounded-full px-4 py-2.5 shadow-[var(--shadow)] transition-all"
        >
          <Search className="w-4 h-4 text-[var(--ink-3)] shrink-0 mr-2.5" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setDropdownOpen(true);
            }}
            onFocus={() => setDropdownOpen(true)}
            placeholder="Search 48 free image tools (compress, resize, convert)..."
            aria-label="Search free image tools"
            className="w-full text-sm text-[var(--ink)] bg-transparent! border-0! focus:outline-none! focus:ring-0! p-0! placeholder:text-[var(--ink-3)]"
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 ml-2 rounded-md bg-[var(--surface-2)] border border-[var(--line)] text-[11px] font-mono font-semibold text-[var(--ink-3)] shrink-0">
            ⌘K
          </kbd>
        </form>

        {dropdownOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-2 shadow-[var(--shadow-lg)] z-30 text-left max-h-[320px] overflow-y-auto">
            {filteredTools.length === 0 ? (
              <p className="px-3 py-4 text-xs text-center text-[var(--ink-3)]">
                No matching tools found.
              </p>
            ) : (
              filteredTools.slice(0, 8).map((tool) => (
                <button
                  key={tool.slug}
                  type="button"
                  onClick={() => handlePickTool(tool.slug)}
                  className="w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl hover:bg-[var(--accent-soft)] transition-colors cursor-pointer group"
                >
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-[var(--ink)] group-hover:text-[#6d28d9] dark:group-hover:text-[#ddd6fe] truncate">
                      {tool.name}
                    </div>
                    <div className="text-xs text-[var(--ink-3)] truncate">
                      {tool.shortDescription}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#7c3aed] shrink-0 opacity-70 group-hover:translate-x-0.5 group-hover:opacity-100 transition-all" />
                </button>
              ))
            )}
          </div>
        )}
      </div>

      {/* Primary Purple Gradient Pill & Secondary White Pill CTA */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => {
            if (onScrollToTool) {
              onScrollToTool();
            } else {
              document.getElementById('home-compressor-workspace')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold btn-purple-pill shadow-sm cursor-pointer"
        >
          <span>Compress Images Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => {
            if (onNavigate) {
              onNavigate('/#tools-directory');
            } else {
              document.getElementById('tools-directory')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full bg-[var(--surface)] border border-[var(--line)] hover:border-[#7c3aed]/50 text-[var(--ink)] shadow-2xs transition-colors cursor-pointer"
        >
          <LayoutGrid className="w-4 h-4 text-[#7c3aed] dark:text-[#c4b5fd]" />
          <span>Explore {toolCount} Tools</span>
        </button>
      </div>

      {/* Feature Badges */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs text-[var(--ink-3)] font-medium">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />
          <span>{strings.badge1}</span>
        </div>
        <span aria-hidden="true" className="text-[var(--line-strong)] hidden sm:inline">·</span>
        <div className="flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-[#7c3aed] dark:text-[#c4b5fd]" />
          <span>{strings.badge2}</span>
        </div>
        <span aria-hidden="true" className="text-[var(--line-strong)] hidden sm:inline">·</span>
        <div className="flex items-center gap-1.5">
          <span>{strings.badge3}</span>
        </div>
      </div>

      {/* Real App Stats Strip */}
      <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
        <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl px-4 py-3.5 shadow-[var(--shadow)]">
          <div className="text-xl sm:text-2xl font-extrabold font-mono text-[var(--ink-navy)]">
            {toolCount}
          </div>
          <div className="text-xs font-medium text-[var(--ink-3)] mt-0.5">Free Image Tools</div>
        </div>
        <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl px-4 py-3.5 shadow-[var(--shadow)]">
          <div className="text-xl sm:text-2xl font-extrabold font-mono text-[var(--ink-navy)]">
            11
          </div>
          <div className="text-xs font-medium text-[var(--ink-3)] mt-0.5">Languages Supported</div>
        </div>
        <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl px-4 py-3.5 shadow-[var(--shadow)]">
          <div className="text-xl sm:text-2xl font-extrabold font-mono text-[var(--ink-navy)]">
            0
          </div>
          <div className="text-xs font-medium text-[var(--ink-3)] mt-0.5">Uploads &amp; Watermarks</div>
        </div>
      </div>
    </section>
  );
};
