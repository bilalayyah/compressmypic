import React, { useState } from 'react';
import { Link2, Check } from 'lucide-react';
import { XIcon, FacebookIcon, WhatsAppIcon } from './ShareSection';

export interface ShareButtonLabels {
  heading: string;
  copyLink: string;
  copied: string;
  onX: string;
  onFacebook: string;
  /** Only used when 'whatsapp' is in networks. */
  onWhatsApp?: string;
}

export const EN_SHARE_LABELS: ShareButtonLabels = {
  heading: 'Share this tool',
  copyLink: 'Copy link',
  copied: 'Copied!',
  onX: 'Share on X',
  onFacebook: 'Share on Facebook',
  onWhatsApp: 'Share on WhatsApp',
};

export type ShareNetwork = 'copy' | 'x' | 'facebook' | 'whatsapp';

interface ShareButtonsProps {
  /** Page title, used as the share text. */
  title: string;
  /** Absolute canonical URL of the page. */
  url: string;
  labels?: ShareButtonLabels;
  networks?: ShareNetwork[];
  /** Extra classes on the outer section (e.g. spacing). Defaults to 'mt-12'. */
  className?: string;
}

/**
 * Red-theme share buttons (redesign 2026-11-21). Used on tool pages
 * (Copy link, X, Facebook, WhatsApp) and article pages (Copy link, X,
 * Facebook). Copy is a solid red pill; network buttons are outlined
 * pills with a brand icon and red hover.
 */
export const ShareButtons: React.FC<ShareButtonsProps> = ({
  title,
  url,
  labels = EN_SHARE_LABELS,
  networks = ['copy', 'x', 'facebook'],
  className = 'mt-12',
}) => {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (older browsers) — nothing to do.
    }
  };

  const shareText = encodeURIComponent(title);
  const shareUrl = encodeURIComponent(url);
  const whatsAppText = encodeURIComponent(`${title} ${url}`);

  const pill =
    'inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--line)] bg-[var(--surface)] text-sm font-semibold hover:border-[#dc2626]/40 hover:text-[#dc2626] transition-colors cursor-pointer';
  // Brand icons are baked at w-5 h-5 in ShareSection; shrink to w-4 for pills.
  const iconWrap = 'inline-flex [&>svg]:w-4 [&>svg]:h-4';

  return (
    <section aria-label={labels.heading} className={className}>
      <h2 className="text-lg font-bold mb-3">{labels.heading}</h2>
      <div className="flex flex-wrap gap-2">
        {networks.includes('copy') && (
          <button type="button" onClick={copyLink} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold btn-purple-pill shadow-xs cursor-pointer">
            {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
            {copied ? labels.copied : labels.copyLink}
          </button>
        )}
        {networks.includes('x') && (
          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className={pill}
          >
            <span className={iconWrap}>
              <XIcon />
            </span>
            {labels.onX}
          </a>
        )}
        {networks.includes('facebook') && (
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className={pill}
          >
            <span className={iconWrap}>
              <FacebookIcon />
            </span>
            {labels.onFacebook}
          </a>
        )}
        {networks.includes('whatsapp') && (
          <a
            href={`https://wa.me/?text=${whatsAppText}`}
            target="_blank"
            rel="noopener noreferrer"
            className={pill}
          >
            <span className={iconWrap}>
              <WhatsAppIcon />
            </span>
            {labels.onWhatsApp ?? 'Share on WhatsApp'}
          </a>
        )}
      </div>
    </section>
  );
};
