// English blog UI strings (the default; each locale's ui.ts carries a
// `blog` group with the same keys). Placeholders: {count}, {minutes},
// {date}, {query}, {tool}, {category}, {lang} — keep them intact in every
// translation.
import type { BlogStrings } from '../../types/blog';

export const EN_BLOG_STRINGS: BlogStrings = {
  blog: 'Blog',
  homeHeading: 'Image Guides, Tutorials & Resources',
  homeSubheading:
    'Practical guides to compressing, resizing, converting and editing images — written for real tasks, not for search engines.',
  searchPlaceholder: 'Search guides…',
  searchNoResults: 'No guides found for “{query}”.',
  featuredHeading: 'Featured guides',
  latestHeading: 'Latest guides ({count})',
  categoriesHeading: 'Browse by category',
  emptyHeading: 'No guides yet',
  emptyText:
    'We are writing the first guides for this section. Check back soon — or try one of the free tools above.',
  readArticle: 'Read the guide →',
  minRead: '{minutes} min read',
  publishedOn: 'Published {date}',
  updatedOn: 'Updated {date}',
  bylineAuthor: 'CompressMyPic Editorial Team',
  tableOfContents: 'On this page',
  faqHeading: 'Frequently asked questions',
  relatedArticlesHeading: 'Related guides',
  relatedToolsHeading: 'Try the tool',
  tryToolCta: 'Try {tool} — free, no signup',
  prevArticle: '← Previous guide',
  nextArticle: 'Next guide →',
  backToBlog: '← Back to the blog',
  shareHeading: 'Share this guide',
  copyLink: 'Copy link',
  copied: 'Copied!',
  shareOnX: 'Share on X',
  shareOnFacebook: 'Share on Facebook',
  shareOnWhatsApp: 'Share on WhatsApp',
  notAvailableHeading: 'This guide is not available in your language yet',
  notAvailableText:
    'We are still translating this guide. You can read it in English, or browse the guides already available in your language.',
  viewBlogHome: 'Browse the blog',
  guidesHeading: 'Our step-by-step guides',
  categoryGuidesHeading: 'Guides: {category}',
  relatedArticlesForTool: 'Related guides: {tool}',
};
