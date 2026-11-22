// Shared locale loader — one implementation for main.tsx (boot preload,
// before first render) and App.tsx (client-side navigation). Both build
// the locale object from exactly the same module specifiers, so Vite
// serves the same chunks from its module cache and the first client
// render matches the prerendered HTML (hydration, Tier J).
//
// withBlog (Tier C): the locale blog chunk (~600–900 KiB gzip) loads only
// on blog routes. With withBlog: false the blog import is skipped and
// blog is {} — App tops it up later if the user navigates to a blog route
// in the same locale (see App.tsx loadLocale).
import type { SupportedLang } from './config';

export async function loadLocaleData<T>(
  lang: SupportedLang,
  opts?: { withBlog?: boolean },
): Promise<T> {
  const withBlog = opts?.withBlog ?? true;
  switch (lang) {
    case 'es': {
      const [uiMod, toolsMod, blogMod] = await Promise.all([
        import('./es/ui'),
        import('./es/tools'),
        withBlog ? import('./es/blog') : Promise.resolve(null),
      ]);
      return {
        ui: uiMod.ES,
        tools: toolsMod.TOOL_BY_SLUG_ES,
        categories: toolsMod.TOOL_CATEGORIES_ES,
        toolUi: uiMod.TOOL_UI_ES,
        blog: blogMod ? blogMod.ES_BLOG_OVERRIDES : {},
      } as T;
    }
    case 'pt': {
      const [uiMod, toolsMod, blogMod] = await Promise.all([
        import('./pt/ui'),
        import('./pt/tools'),
        withBlog ? import('./pt/blog') : Promise.resolve(null),
      ]);
      return {
        ui: uiMod.PT,
        tools: toolsMod.TOOL_BY_SLUG_PT,
        categories: toolsMod.TOOL_CATEGORIES_PT,
        toolUi: uiMod.TOOL_UI_PT,
        blog: blogMod ? blogMod.PT_BLOG_OVERRIDES : {},
      } as T;
    }
    case 'fr': {
      const [uiMod, toolsMod, blogMod] = await Promise.all([
        import('./fr/ui'),
        import('./fr/tools'),
        withBlog ? import('./fr/blog') : Promise.resolve(null),
      ]);
      return {
        ui: uiMod.FR,
        tools: toolsMod.TOOL_BY_SLUG_FR,
        categories: toolsMod.TOOL_CATEGORIES_FR,
        toolUi: uiMod.TOOL_UI_FR,
        blog: blogMod ? blogMod.FR_BLOG_OVERRIDES : {},
      } as T;
    }
    case 'de': {
      const [uiMod, toolsMod, blogMod] = await Promise.all([
        import('./de/ui'),
        import('./de/tools'),
        withBlog ? import('./de/blog') : Promise.resolve(null),
      ]);
      return {
        ui: uiMod.DE,
        tools: toolsMod.TOOL_BY_SLUG_DE,
        categories: toolsMod.TOOL_CATEGORIES_DE,
        toolUi: uiMod.TOOL_UI_DE,
        blog: blogMod ? blogMod.DE_BLOG_OVERRIDES : {},
      } as T;
    }
    case 'it': {
      const [uiMod, toolsMod, blogMod] = await Promise.all([
        import('./it/ui'),
        import('./it/tools'),
        withBlog ? import('./it/blog') : Promise.resolve(null),
      ]);
      return {
        ui: uiMod.IT,
        tools: toolsMod.TOOL_BY_SLUG_IT,
        categories: toolsMod.TOOL_CATEGORIES_IT,
        toolUi: uiMod.TOOL_UI_IT,
        blog: blogMod ? blogMod.IT_BLOG_OVERRIDES : {},
      } as T;
    }
    case 'id': {
      const [uiMod, toolsMod, blogMod] = await Promise.all([
        import('./id/ui'),
        import('./id/tools'),
        withBlog ? import('./id/blog') : Promise.resolve(null),
      ]);
      return {
        ui: uiMod.ID,
        tools: toolsMod.TOOL_BY_SLUG_ID,
        categories: toolsMod.TOOL_CATEGORIES_ID,
        toolUi: uiMod.TOOL_UI_ID,
        blog: blogMod ? blogMod.ID_BLOG_OVERRIDES : {},
      } as T;
    }
    case 'ru': {
      const [uiMod, toolsMod, blogMod] = await Promise.all([
        import('./ru/ui'),
        import('./ru/tools'),
        withBlog ? import('./ru/blog') : Promise.resolve(null),
      ]);
      return {
        ui: uiMod.RU,
        tools: toolsMod.TOOL_BY_SLUG_RU,
        categories: toolsMod.TOOL_CATEGORIES_RU,
        toolUi: uiMod.TOOL_UI_RU,
        blog: blogMod ? blogMod.RU_BLOG_OVERRIDES : {},
      } as T;
    }
    case 'ja': {
      const [uiMod, toolsMod, blogMod] = await Promise.all([
        import('./ja/ui'),
        import('./ja/tools'),
        withBlog ? import('./ja/blog') : Promise.resolve(null),
      ]);
      return {
        ui: uiMod.JA,
        tools: toolsMod.TOOL_BY_SLUG_JA,
        categories: toolsMod.TOOL_CATEGORIES_JA,
        toolUi: uiMod.TOOL_UI_JA,
        blog: blogMod ? blogMod.JA_BLOG_OVERRIDES : {},
      } as T;
    }
    case 'ko': {
      const [uiMod, toolsMod, blogMod] = await Promise.all([
        import('./ko/ui'),
        import('./ko/tools'),
        withBlog ? import('./ko/blog') : Promise.resolve(null),
      ]);
      return {
        ui: uiMod.KO,
        tools: toolsMod.TOOL_BY_SLUG_KO,
        categories: toolsMod.TOOL_CATEGORIES_KO,
        toolUi: uiMod.TOOL_UI_KO,
        blog: blogMod ? blogMod.KO_BLOG_OVERRIDES : {},
      } as T;
    }
    case 'zh': {
      const [uiMod, toolsMod, blogMod] = await Promise.all([
        import('./zh/ui'),
        import('./zh/tools'),
        withBlog ? import('./zh/blog') : Promise.resolve(null),
      ]);
      return {
        ui: uiMod.ZH,
        tools: toolsMod.TOOL_BY_SLUG_ZH,
        categories: toolsMod.TOOL_CATEGORIES_ZH,
        toolUi: uiMod.TOOL_UI_ZH,
        blog: blogMod ? blogMod.ZH_BLOG_OVERRIDES : {},
      } as T;
    }
    case 'hi': {
      const [uiMod, toolsMod, blogMod] = await Promise.all([
        import('./hi/ui'),
        import('./hi/tools'),
        withBlog ? import('./hi/blog') : Promise.resolve(null),
      ]);
      return {
        ui: uiMod.HI,
        tools: toolsMod.TOOL_BY_SLUG_HI,
        categories: toolsMod.TOOL_CATEGORIES_HI,
        toolUi: uiMod.TOOL_UI_HI,
        blog: blogMod ? blogMod.HI_BLOG_OVERRIDES : {},
      } as T;
    }
    case 'ar': {
      const [uiMod, toolsMod, blogMod] = await Promise.all([
        import('./ar/ui'),
        import('./ar/tools'),
        withBlog ? import('./ar/blog') : Promise.resolve(null),
      ]);
      return {
        ui: uiMod.AR,
        tools: toolsMod.TOOL_BY_SLUG_AR,
        categories: toolsMod.TOOL_CATEGORIES_AR,
        toolUi: uiMod.TOOL_UI_AR,
        blog: blogMod ? blogMod.AR_BLOG_OVERRIDES : {},
      } as T;
    }
    case 'tr': {
      const [uiMod, toolsMod, blogMod] = await Promise.all([
        import('./tr/ui'),
        import('./tr/tools'),
        withBlog ? import('./tr/blog') : Promise.resolve(null),
      ]);
      return {
        ui: uiMod.TR,
        tools: toolsMod.TOOL_BY_SLUG_TR,
        categories: toolsMod.TOOL_CATEGORIES_TR,
        toolUi: uiMod.TOOL_UI_TR,
        blog: blogMod ? blogMod.TR_BLOG_OVERRIDES : {},
      } as T;
    }
    case 'vi': {
      const [uiMod, toolsMod, blogMod] = await Promise.all([
        import('./vi/ui'),
        import('./vi/tools'),
        withBlog ? import('./vi/blog') : Promise.resolve(null),
      ]);
      return {
        ui: uiMod.VI,
        tools: toolsMod.TOOL_BY_SLUG_VI,
        categories: toolsMod.TOOL_CATEGORIES_VI,
        toolUi: uiMod.TOOL_UI_VI,
        blog: blogMod ? blogMod.VI_BLOG_OVERRIDES : {},
      } as T;
    }
    default:
      // 'en' has no locale data (English is the built-in default); App and
      // main.tsx both guard against calling this for 'en'.
      throw new Error(`loadLocaleData: no locale data for '${lang}'`);
  }
}
