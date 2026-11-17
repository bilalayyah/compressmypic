// Blog context — carries the active language's article overrides + UI
// strings to every blog component (pages and the tool/directory hooks)
// without prop-drilling through 48 tool pages. App provides it around the
// page router: overrides = activeLocale?.blog ?? {}, strings =
// activeUi?.blog ?? EN_BLOG_STRINGS. Default is English (empty overrides).
import React, { createContext, useContext } from 'react';
import type { BlogArticleLocaleOverride, BlogStrings } from '../../types/blog';
import { EN_BLOG_STRINGS } from './blogStrings';

export interface BlogContextValue {
  overrides: Record<string, BlogArticleLocaleOverride>;
  strings: BlogStrings;
}

export const BlogContext = createContext<BlogContextValue>({
  overrides: {},
  strings: EN_BLOG_STRINGS,
});

export function useBlog(): BlogContextValue {
  return useContext(BlogContext);
}
