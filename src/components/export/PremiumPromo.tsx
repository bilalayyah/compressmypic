/**
 * PremiumPromo — compact Lifetime Premium promo shown below successful
 * results, for free users only.
 *
 * There is no entitlement backend yet (Paddle Phase 4 comes after the
 * Paddle account verification completes), so today every visitor is a free
 * user and the promo always shows. Once server-verified entitlements exist,
 * this component must be hidden for verified premium users — render nothing
 * while the entitlement lookup is pending.
 *
 * NEVER a fake purchase button: checkout is not live, so the promo states
 * "Secure checkout is coming soon" and links to /pricing/ for details.
 */
import React from 'react';
import { Sparkles } from 'lucide-react';

export const PremiumPromo: React.FC = () => (
  <div
    data-testid="premium-promo"
    className="mt-5 rounded-2xl border border-[#fecaca] dark:border-[#7f1d1d] bg-[#fef2f2] dark:bg-[#450a0a]/40 p-5"
  >
    <div className="flex items-center gap-2">
      <Sparkles className="w-4 h-4 text-[#dc2626] dark:text-[#fca5a5]" />
      <span className="text-xs font-bold uppercase tracking-wider text-[#b91c1c] dark:text-[#fca5a5]">
        Lifetime access
      </span>
    </div>
    <h4 className="mt-2 text-base font-bold text-[var(--ink-navy)]">
      Ready for more? Unlock Lifetime Premium.
    </h4>
    <p className="mt-1 text-sm text-[var(--ink-2)]">
      One simple payment of <strong>$11.99</strong> — no monthly subscriptions, no recurring
      charges. Pay once, keep it forever.
    </p>
    <p className="mt-2 text-sm font-medium text-[var(--ink-2)]">
      Secure checkout is coming soon.
    </p>
    <a
      href="/pricing/"
      className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-semibold rounded-[11px] cursor-pointer transition-colors"
    >
      Explore Lifetime Premium
    </a>
  </div>
);
