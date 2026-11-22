/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef, Suspense } from 'react';
import { MessageCircle, FileImage, Zap } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UploadZone } from './components/UploadZone';
import { CompressionControls } from './components/CompressionControls';
import { ResultsList } from './components/ResultsList';
const ComparisonModal = React.lazy(() =>
  import('./components/ComparisonModal').then((m) => ({ default: m.ComparisonModal }))
);
import { EducationalContent, HOW_IT_WORKS_STEPS } from './components/EducationalContent';
import { FaqSection, FAQ_DATA } from './components/FaqSection';
import { Footer } from './components/Footer';
// Route pages are lazy-loaded (code-split): each tool / legal / guide /
// localized page ships as its own chunk, fetched only when its route opens.
// The home compressor UI stays in the initial bundle. Shared components
// (Header, Hero, UploadZone, ...) stay static. Every lazy page renders
// inside the <Suspense> around the page router below.
const AboutPage = React.lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ContactPage = React.lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const PrivacyPage = React.lazy(() =>
  import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage }))
);
const TermsPage = React.lazy(() =>
  import('./pages/TermsPage').then((m) => ({ default: m.TermsPage }))
);
const DisclaimerPage = React.lazy(() =>
  import('./pages/DisclaimerPage').then((m) => ({ default: m.DisclaimerPage }))
);
const CookiePolicyPage = React.lazy(() =>
  import('./pages/CookiePolicyPage').then((m) => ({ default: m.CookiePolicyPage }))
);
const AllToolsPage = React.lazy(() =>
  import('./pages/AllToolsPage').then((m) => ({ default: m.AllToolsPage }))
);
const AdminCommentsPage = React.lazy(() =>
  import('./pages/AdminCommentsPage').then((m) => ({ default: m.AdminCommentsPage }))
);
const BlogHomePage = React.lazy(() =>
  import('./pages/BlogHomePage').then((m) => ({ default: m.BlogHomePage }))
);
const BlogCategoryPage = React.lazy(() =>
  import('./pages/BlogCategoryPage').then((m) => ({ default: m.BlogCategoryPage }))
);
const ArticlePage = React.lazy(() =>
  import('./pages/ArticlePage').then((m) => ({ default: m.ArticlePage }))
);
const GuideWhatsAppPage = React.lazy(() =>
  import('./pages/GuideWhatsAppPage').then((m) => ({ default: m.GuideWhatsAppPage }))
);
const GuideFormatsPage = React.lazy(() =>
  import('./pages/GuideFormatsPage').then((m) => ({ default: m.GuideFormatsPage }))
);
const Guide100kbPage = React.lazy(() =>
  import('./pages/Guide100kbPage').then((m) => ({ default: m.Guide100kbPage }))
);
const ImageResizerPage = React.lazy(() =>
  import('./pages/ImageResizerPage').then((m) => ({ default: m.ImageResizerPage }))
);
const ImageConverterPage = React.lazy(() =>
  import('./pages/ImageConverterPage').then((m) => ({ default: m.ImageConverterPage }))
);
const RotateFlipPage = React.lazy(() =>
  import('./pages/RotateFlipPage').then((m) => ({ default: m.RotateFlipPage }))
);
const ImageToPdfPage = React.lazy(() =>
  import('./pages/ImageToPdfPage').then((m) => ({ default: m.ImageToPdfPage }))
);
const MetadataViewerPage = React.lazy(() =>
  import('./pages/MetadataViewerPage').then((m) => ({ default: m.MetadataViewerPage }))
);
const RemoveMetadataPage = React.lazy(() =>
  import('./pages/RemoveMetadataPage').then((m) => ({ default: m.RemoveMetadataPage }))
);
const FaviconGeneratorPage = React.lazy(() =>
  import('./pages/FaviconGeneratorPage').then((m) => ({ default: m.FaviconGeneratorPage }))
);
const ColorPickerPage = React.lazy(() =>
  import('./pages/ColorPickerPage').then((m) => ({ default: m.ColorPickerPage }))
);
const DimensionsCheckerPage = React.lazy(() =>
  import('./pages/DimensionsCheckerPage').then((m) => ({ default: m.DimensionsCheckerPage }))
);
const ImageCropperPage = React.lazy(() =>
  import('./pages/ImageCropperPage').then((m) => ({ default: m.ImageCropperPage }))
);
const ImageWatermarkPage = React.lazy(() =>
  import('./pages/ImageWatermarkPage').then((m) => ({ default: m.ImageWatermarkPage }))
);
const BlurPixelatePage = React.lazy(() =>
  import('./pages/BlurPixelatePage').then((m) => ({ default: m.BlurPixelatePage }))
);
const AddTextPage = React.lazy(() =>
  import('./pages/AddTextPage').then((m) => ({ default: m.AddTextPage }))
);
const ImageBorderPage = React.lazy(() =>
  import('./pages/ImageBorderPage').then((m) => ({ default: m.ImageBorderPage }))
);
const RoundCornersPage = React.lazy(() =>
  import('./pages/RoundCornersPage').then((m) => ({ default: m.RoundCornersPage }))
);
const BrightnessEditorPage = React.lazy(() =>
  import('./pages/BrightnessEditorPage').then((m) => ({ default: m.BrightnessEditorPage }))
);
const ContrastEditorPage = React.lazy(() =>
  import('./pages/ContrastEditorPage').then((m) => ({ default: m.ContrastEditorPage }))
);
const SaturationEditorPage = React.lazy(() =>
  import('./pages/SaturationEditorPage').then((m) => ({ default: m.SaturationEditorPage }))
);
const ImageFiltersPage = React.lazy(() =>
  import('./pages/ImageFiltersPage').then((m) => ({ default: m.ImageFiltersPage }))
);
const AddBackgroundPage = React.lazy(() =>
  import('./pages/AddBackgroundPage').then((m) => ({ default: m.AddBackgroundPage }))
);
const ImageSplitterPage = React.lazy(() =>
  import('./pages/ImageSplitterPage').then((m) => ({ default: m.ImageSplitterPage }))
);
const DpiChangerPage = React.lazy(() =>
  import('./pages/DpiChangerPage').then((m) => ({ default: m.DpiChangerPage }))
);
const ImageToBase64Page = React.lazy(() =>
  import('./pages/ImageToBase64Page').then((m) => ({ default: m.ImageToBase64Page }))
);
const Base64ToImagePage = React.lazy(() =>
  import('./pages/Base64ToImagePage').then((m) => ({ default: m.Base64ToImagePage }))
);
const PaletteExtractorPage = React.lazy(() =>
  import('./pages/PaletteExtractorPage').then((m) => ({ default: m.PaletteExtractorPage }))
);
const GifMakerPage = React.lazy(() =>
  import('./pages/GifMakerPage').then((m) => ({ default: m.GifMakerPage }))
);
const CollageMakerPage = React.lazy(() =>
  import('./pages/CollageMakerPage').then((m) => ({ default: m.CollageMakerPage }))
);
const Compress50KbPage = React.lazy(() =>
  import('./pages/Compress50KbPage').then((m) => ({ default: m.Compress50KbPage }))
);
const Compress100KbPage = React.lazy(() =>
  import('./pages/Compress100KbPage').then((m) => ({ default: m.Compress100KbPage }))
);
const Compress200KbPage = React.lazy(() =>
  import('./pages/Compress200KbPage').then((m) => ({ default: m.Compress200KbPage }))
);
const Compress500KbPage = React.lazy(() =>
  import('./pages/Compress500KbPage').then((m) => ({ default: m.Compress500KbPage }))
);
const BulkCompressorPage = React.lazy(() =>
  import('./pages/BulkCompressorPage').then((m) => ({ default: m.BulkCompressorPage }))
);
const TargetFileSizePage = React.lazy(() =>
  import('./pages/TargetFileSizePage').then((m) => ({ default: m.TargetFileSizePage }))
);
const BulkResizerPage = React.lazy(() =>
  import('./pages/BulkResizerPage').then((m) => ({ default: m.BulkResizerPage }))
);
const BulkConverterPage = React.lazy(() =>
  import('./pages/BulkConverterPage').then((m) => ({ default: m.BulkConverterPage }))
);
const WebOptimizerPage = React.lazy(() =>
  import('./pages/WebOptimizerPage').then((m) => ({ default: m.WebOptimizerPage }))
);
const GifCompressorPage = React.lazy(() =>
  import('./pages/GifCompressorPage').then((m) => ({ default: m.GifCompressorPage }))
);
const HeicToJpgPage = React.lazy(() =>
  import('./pages/HeicToJpgPage').then((m) => ({ default: m.HeicToJpgPage }))
);
const JpgToPngPage = React.lazy(() =>
  import('./pages/JpgToPngPage').then((m) => ({ default: m.JpgToPngPage }))
);
const PngToJpgPage = React.lazy(() =>
  import('./pages/PngToJpgPage').then((m) => ({ default: m.PngToJpgPage }))
);
const JpgToWebpPage = React.lazy(() =>
  import('./pages/JpgToWebpPage').then((m) => ({ default: m.JpgToWebpPage }))
);
const WebpToJpgPage = React.lazy(() =>
  import('./pages/WebpToJpgPage').then((m) => ({ default: m.WebpToJpgPage }))
);
const PngToWebpPage = React.lazy(() =>
  import('./pages/PngToWebpPage').then((m) => ({ default: m.PngToWebpPage }))
);
const WebpToPngPage = React.lazy(() =>
  import('./pages/WebpToPngPage').then((m) => ({ default: m.WebpToPngPage }))
);
const SvgToPngPage = React.lazy(() =>
  import('./pages/SvgToPngPage').then((m) => ({ default: m.SvgToPngPage }))
);
const AvifToJpgPage = React.lazy(() =>
  import('./pages/AvifToJpgPage').then((m) => ({ default: m.AvifToJpgPage }))
);
const BmpToJpgPage = React.lazy(() =>
  import('./pages/BmpToJpgPage').then((m) => ({ default: m.BmpToJpgPage }))
);
import { TOOL_META_BY_SLUG, TOOLS_META, TOOL_CATEGORIES } from './data/toolsMeta';
import { SUPPORTED_LANGS, LANG_STORAGE_KEY, type SupportedLang } from './locales/config';
import { ES_PATH_BY_EN, EN_PATH_BY_ES, ES_HOME_ALIAS, ES_ALL_TOOLS_PATH } from './locales/es/slugs';
import { PT_PATH_BY_EN, EN_PATH_BY_PT, PT_HOME_ALIAS, PT_ALL_TOOLS_PATH } from './locales/pt/slugs';
import { FR_PATH_BY_EN, EN_PATH_BY_FR, FR_HOME_ALIAS, FR_ALL_TOOLS_PATH } from './locales/fr/slugs';
import { DE_PATH_BY_EN, EN_PATH_BY_DE, DE_HOME_ALIAS, DE_ALL_TOOLS_PATH } from './locales/de/slugs';
import { IT_PATH_BY_EN, EN_PATH_BY_IT, IT_HOME_ALIAS, IT_ALL_TOOLS_PATH } from './locales/it/slugs';
import { ID_PATH_BY_EN, EN_PATH_BY_ID, ID_HOME_ALIAS, ID_ALL_TOOLS_PATH } from './locales/id/slugs';
import { RU_PATH_BY_EN, EN_PATH_BY_RU, RU_HOME_ALIAS, RU_ALL_TOOLS_PATH } from './locales/ru/slugs';
import { JA_PATH_BY_EN, EN_PATH_BY_JA, JA_HOME_ALIAS, JA_ALL_TOOLS_PATH } from './locales/ja/slugs';
import { KO_PATH_BY_EN, EN_PATH_BY_KO, KO_HOME_ALIAS, KO_ALL_TOOLS_PATH } from './locales/ko/slugs';
import { ZH_PATH_BY_EN, EN_PATH_BY_ZH, ZH_HOME_ALIAS, ZH_ALL_TOOLS_PATH } from './locales/zh/slugs';
import { BN_PATH_BY_EN, EN_PATH_BY_BN, BN_HOME_ALIAS, BN_ALL_TOOLS_PATH } from './locales/bn/slugs';
import { getAlternates, getOgLocale, getOgLocaleAlternates, withTrailingSlash } from './locales/alternates';
import { BlogContext } from './components/blog/BlogContext';
import { EN_BLOG_STRINGS } from './components/blog/blogStrings';
import {
  getBlogArticleAlternates,
  getBlogArticleById,
  getBlogArticleUrl,
  getBlogArticleVersion,
  getBlogCategoryAlternates,
  getBlogCategoryLabel,
  getBlogCategoryUrl,
  getBlogHomeAlternates,
  getBlogHomeUrl,
  isBlogArticlePublishedIn,
  isBlogEnPath,
  resolveBlogRoute,
} from './data/blogArticles';
import type { BlogArticleMeta } from './types/blog';
import { getBlogBody, getBlogBodyLocale } from './data/blogBody';
import { getCachedLocale, setCachedLocale } from './locales/localeCache';
import { loadLocaleData } from './locales/loadLocaleData';
const AboutPageEs = React.lazy(() =>
  import('./pages/es/AboutPageEs').then((m) => ({ default: m.AboutPageEs }))
);
const ContactPageEs = React.lazy(() =>
  import('./pages/es/ContactPageEs').then((m) => ({ default: m.ContactPageEs }))
);
const PrivacyPageEs = React.lazy(() =>
  import('./pages/es/PrivacyPageEs').then((m) => ({ default: m.PrivacyPageEs }))
);
const TermsPageEs = React.lazy(() =>
  import('./pages/es/TermsPageEs').then((m) => ({ default: m.TermsPageEs }))
);
const DisclaimerPageEs = React.lazy(() =>
  import('./pages/es/DisclaimerPageEs').then((m) => ({ default: m.DisclaimerPageEs }))
);
const CookiePolicyPageEs = React.lazy(() =>
  import('./pages/es/CookiePolicyPageEs').then((m) => ({ default: m.CookiePolicyPageEs }))
);
const AllToolsPageEs = React.lazy(() =>
  import('./pages/es/AllToolsPageEs').then((m) => ({ default: m.AllToolsPageEs }))
);
const GuideWhatsAppPageEs = React.lazy(() =>
  import('./pages/es/GuideWhatsAppPageEs').then((m) => ({ default: m.GuideWhatsAppPageEs }))
);
const GuideFormatsPageEs = React.lazy(() =>
  import('./pages/es/GuideFormatsPageEs').then((m) => ({ default: m.GuideFormatsPageEs }))
);
const Guide100kbPageEs = React.lazy(() =>
  import('./pages/es/Guide100kbPageEs').then((m) => ({ default: m.Guide100kbPageEs }))
);
const AboutPagePt = React.lazy(() =>
  import('./pages/pt/AboutPagePt').then((m) => ({ default: m.AboutPagePt }))
);
const ContactPagePt = React.lazy(() =>
  import('./pages/pt/ContactPagePt').then((m) => ({ default: m.ContactPagePt }))
);
const PrivacyPagePt = React.lazy(() =>
  import('./pages/pt/PrivacyPagePt').then((m) => ({ default: m.PrivacyPagePt }))
);
const TermsPagePt = React.lazy(() =>
  import('./pages/pt/TermsPagePt').then((m) => ({ default: m.TermsPagePt }))
);
const DisclaimerPagePt = React.lazy(() =>
  import('./pages/pt/DisclaimerPagePt').then((m) => ({ default: m.DisclaimerPagePt }))
);
const CookiePolicyPagePt = React.lazy(() =>
  import('./pages/pt/CookiePolicyPagePt').then((m) => ({ default: m.CookiePolicyPagePt }))
);
const AllToolsPagePt = React.lazy(() =>
  import('./pages/pt/AllToolsPagePt').then((m) => ({ default: m.AllToolsPagePt }))
);
const GuideWhatsAppPagePt = React.lazy(() =>
  import('./pages/pt/GuideWhatsAppPagePt').then((m) => ({ default: m.GuideWhatsAppPagePt }))
);
const GuideFormatsPagePt = React.lazy(() =>
  import('./pages/pt/GuideFormatsPagePt').then((m) => ({ default: m.GuideFormatsPagePt }))
);
const Guide100kbPagePt = React.lazy(() =>
  import('./pages/pt/Guide100kbPagePt').then((m) => ({ default: m.Guide100kbPagePt }))
);
const AboutPageFr = React.lazy(() =>
  import('./pages/fr/AboutPageFr').then((m) => ({ default: m.AboutPageFr }))
);
const ContactPageFr = React.lazy(() =>
  import('./pages/fr/ContactPageFr').then((m) => ({ default: m.ContactPageFr }))
);
const PrivacyPageFr = React.lazy(() =>
  import('./pages/fr/PrivacyPageFr').then((m) => ({ default: m.PrivacyPageFr }))
);
const TermsPageFr = React.lazy(() =>
  import('./pages/fr/TermsPageFr').then((m) => ({ default: m.TermsPageFr }))
);
const DisclaimerPageFr = React.lazy(() =>
  import('./pages/fr/DisclaimerPageFr').then((m) => ({ default: m.DisclaimerPageFr }))
);
const CookiePolicyPageFr = React.lazy(() =>
  import('./pages/fr/CookiePolicyPageFr').then((m) => ({ default: m.CookiePolicyPageFr }))
);
const AllToolsPageFr = React.lazy(() =>
  import('./pages/fr/AllToolsPageFr').then((m) => ({ default: m.AllToolsPageFr }))
);
const GuideWhatsAppPageFr = React.lazy(() =>
  import('./pages/fr/GuideWhatsAppPageFr').then((m) => ({ default: m.GuideWhatsAppPageFr }))
);
const GuideFormatsPageFr = React.lazy(() =>
  import('./pages/fr/GuideFormatsPageFr').then((m) => ({ default: m.GuideFormatsPageFr }))
);
const Guide100kbPageFr = React.lazy(() =>
  import('./pages/fr/Guide100kbPageFr').then((m) => ({ default: m.Guide100kbPageFr }))
);
const AboutPageDe = React.lazy(() =>
  import('./pages/de/AboutPageDe').then((m) => ({ default: m.AboutPageDe }))
);
const ContactPageDe = React.lazy(() =>
  import('./pages/de/ContactPageDe').then((m) => ({ default: m.ContactPageDe }))
);
const PrivacyPageDe = React.lazy(() =>
  import('./pages/de/PrivacyPageDe').then((m) => ({ default: m.PrivacyPageDe }))
);
const TermsPageDe = React.lazy(() =>
  import('./pages/de/TermsPageDe').then((m) => ({ default: m.TermsPageDe }))
);
const DisclaimerPageDe = React.lazy(() =>
  import('./pages/de/DisclaimerPageDe').then((m) => ({ default: m.DisclaimerPageDe }))
);
const CookiePolicyPageDe = React.lazy(() =>
  import('./pages/de/CookiePolicyPageDe').then((m) => ({ default: m.CookiePolicyPageDe }))
);
const AllToolsPageDe = React.lazy(() =>
  import('./pages/de/AllToolsPageDe').then((m) => ({ default: m.AllToolsPageDe }))
);
const GuideWhatsAppPageDe = React.lazy(() =>
  import('./pages/de/GuideWhatsAppPageDe').then((m) => ({ default: m.GuideWhatsAppPageDe }))
);
const GuideFormatsPageDe = React.lazy(() =>
  import('./pages/de/GuideFormatsPageDe').then((m) => ({ default: m.GuideFormatsPageDe }))
);
const Guide100kbPageDe = React.lazy(() =>
  import('./pages/de/Guide100kbPageDe').then((m) => ({ default: m.Guide100kbPageDe }))
);
const AboutPageIt = React.lazy(() =>
  import('./pages/it/AboutPageIt').then((m) => ({ default: m.AboutPageIt }))
);
const ContactPageIt = React.lazy(() =>
  import('./pages/it/ContactPageIt').then((m) => ({ default: m.ContactPageIt }))
);
const PrivacyPageIt = React.lazy(() =>
  import('./pages/it/PrivacyPageIt').then((m) => ({ default: m.PrivacyPageIt }))
);
const TermsPageIt = React.lazy(() =>
  import('./pages/it/TermsPageIt').then((m) => ({ default: m.TermsPageIt }))
);
const DisclaimerPageIt = React.lazy(() =>
  import('./pages/it/DisclaimerPageIt').then((m) => ({ default: m.DisclaimerPageIt }))
);
const CookiePolicyPageIt = React.lazy(() =>
  import('./pages/it/CookiePolicyPageIt').then((m) => ({ default: m.CookiePolicyPageIt }))
);
const AllToolsPageIt = React.lazy(() =>
  import('./pages/it/AllToolsPageIt').then((m) => ({ default: m.AllToolsPageIt }))
);
const GuideWhatsAppPageIt = React.lazy(() =>
  import('./pages/it/GuideWhatsAppPageIt').then((m) => ({ default: m.GuideWhatsAppPageIt }))
);
const GuideFormatsPageIt = React.lazy(() =>
  import('./pages/it/GuideFormatsPageIt').then((m) => ({ default: m.GuideFormatsPageIt }))
);
const Guide100kbPageIt = React.lazy(() =>
  import('./pages/it/Guide100kbPageIt').then((m) => ({ default: m.Guide100kbPageIt }))
);
const AboutPageId = React.lazy(() =>
  import('./pages/id/AboutPageId').then((m) => ({ default: m.AboutPageId }))
);
const ContactPageId = React.lazy(() =>
  import('./pages/id/ContactPageId').then((m) => ({ default: m.ContactPageId }))
);
const PrivacyPageId = React.lazy(() =>
  import('./pages/id/PrivacyPageId').then((m) => ({ default: m.PrivacyPageId }))
);
const TermsPageId = React.lazy(() =>
  import('./pages/id/TermsPageId').then((m) => ({ default: m.TermsPageId }))
);
const DisclaimerPageId = React.lazy(() =>
  import('./pages/id/DisclaimerPageId').then((m) => ({ default: m.DisclaimerPageId }))
);
const CookiePolicyPageId = React.lazy(() =>
  import('./pages/id/CookiePolicyPageId').then((m) => ({ default: m.CookiePolicyPageId }))
);
const AllToolsPageId = React.lazy(() =>
  import('./pages/id/AllToolsPageId').then((m) => ({ default: m.AllToolsPageId }))
);
const GuideWhatsAppPageId = React.lazy(() =>
  import('./pages/id/GuideWhatsAppPageId').then((m) => ({ default: m.GuideWhatsAppPageId }))
);
const GuideFormatsPageId = React.lazy(() =>
  import('./pages/id/GuideFormatsPageId').then((m) => ({ default: m.GuideFormatsPageId }))
);
const Guide100kbPageId = React.lazy(() =>
  import('./pages/id/Guide100kbPageId').then((m) => ({ default: m.Guide100kbPageId }))
);
const AboutPageRu = React.lazy(() =>
  import('./pages/ru/AboutPageRu').then((m) => ({ default: m.AboutPageRu }))
);
const ContactPageRu = React.lazy(() =>
  import('./pages/ru/ContactPageRu').then((m) => ({ default: m.ContactPageRu }))
);
const PrivacyPageRu = React.lazy(() =>
  import('./pages/ru/PrivacyPageRu').then((m) => ({ default: m.PrivacyPageRu }))
);
const TermsPageRu = React.lazy(() =>
  import('./pages/ru/TermsPageRu').then((m) => ({ default: m.TermsPageRu }))
);
const DisclaimerPageRu = React.lazy(() =>
  import('./pages/ru/DisclaimerPageRu').then((m) => ({ default: m.DisclaimerPageRu }))
);
const CookiePolicyPageRu = React.lazy(() =>
  import('./pages/ru/CookiePolicyPageRu').then((m) => ({ default: m.CookiePolicyPageRu }))
);
const AllToolsPageRu = React.lazy(() =>
  import('./pages/ru/AllToolsPageRu').then((m) => ({ default: m.AllToolsPageRu }))
);
const GuideWhatsAppPageRu = React.lazy(() =>
  import('./pages/ru/GuideWhatsAppPageRu').then((m) => ({ default: m.GuideWhatsAppPageRu }))
);
const GuideFormatsPageRu = React.lazy(() =>
  import('./pages/ru/GuideFormatsPageRu').then((m) => ({ default: m.GuideFormatsPageRu }))
);
const Guide100kbPageRu = React.lazy(() =>
  import('./pages/ru/Guide100kbPageRu').then((m) => ({ default: m.Guide100kbPageRu }))
);
const AboutPageJa = React.lazy(() =>
  import('./pages/ja/AboutPageJa').then((m) => ({ default: m.AboutPageJa }))
);
const ContactPageJa = React.lazy(() =>
  import('./pages/ja/ContactPageJa').then((m) => ({ default: m.ContactPageJa }))
);
const PrivacyPageJa = React.lazy(() =>
  import('./pages/ja/PrivacyPageJa').then((m) => ({ default: m.PrivacyPageJa }))
);
const TermsPageJa = React.lazy(() =>
  import('./pages/ja/TermsPageJa').then((m) => ({ default: m.TermsPageJa }))
);
const DisclaimerPageJa = React.lazy(() =>
  import('./pages/ja/DisclaimerPageJa').then((m) => ({ default: m.DisclaimerPageJa }))
);
const CookiePolicyPageJa = React.lazy(() =>
  import('./pages/ja/CookiePolicyPageJa').then((m) => ({ default: m.CookiePolicyPageJa }))
);
const AllToolsPageJa = React.lazy(() =>
  import('./pages/ja/AllToolsPageJa').then((m) => ({ default: m.AllToolsPageJa }))
);
const GuideWhatsAppPageJa = React.lazy(() =>
  import('./pages/ja/GuideWhatsAppPageJa').then((m) => ({ default: m.GuideWhatsAppPageJa }))
);
const GuideFormatsPageJa = React.lazy(() =>
  import('./pages/ja/GuideFormatsPageJa').then((m) => ({ default: m.GuideFormatsPageJa }))
);
const Guide100kbPageJa = React.lazy(() =>
  import('./pages/ja/Guide100kbPageJa').then((m) => ({ default: m.Guide100kbPageJa }))
);
const AboutPageKo = React.lazy(() =>
  import('./pages/ko/AboutPageKo').then((m) => ({ default: m.AboutPageKo }))
);
const ContactPageKo = React.lazy(() =>
  import('./pages/ko/ContactPageKo').then((m) => ({ default: m.ContactPageKo }))
);
const PrivacyPageKo = React.lazy(() =>
  import('./pages/ko/PrivacyPageKo').then((m) => ({ default: m.PrivacyPageKo }))
);
const TermsPageKo = React.lazy(() =>
  import('./pages/ko/TermsPageKo').then((m) => ({ default: m.TermsPageKo }))
);
const DisclaimerPageKo = React.lazy(() =>
  import('./pages/ko/DisclaimerPageKo').then((m) => ({ default: m.DisclaimerPageKo }))
);
const CookiePolicyPageKo = React.lazy(() =>
  import('./pages/ko/CookiePolicyPageKo').then((m) => ({ default: m.CookiePolicyPageKo }))
);
const AllToolsPageKo = React.lazy(() =>
  import('./pages/ko/AllToolsPageKo').then((m) => ({ default: m.AllToolsPageKo }))
);
const GuideWhatsAppPageKo = React.lazy(() =>
  import('./pages/ko/GuideWhatsAppPageKo').then((m) => ({ default: m.GuideWhatsAppPageKo }))
);
const GuideFormatsPageKo = React.lazy(() =>
  import('./pages/ko/GuideFormatsPageKo').then((m) => ({ default: m.GuideFormatsPageKo }))
);
const Guide100kbPageKo = React.lazy(() =>
  import('./pages/ko/Guide100kbPageKo').then((m) => ({ default: m.Guide100kbPageKo }))
);
const AboutPageZh = React.lazy(() =>
  import('./pages/zh/AboutPageZh').then((m) => ({ default: m.AboutPageZh }))
);
const ContactPageZh = React.lazy(() =>
  import('./pages/zh/ContactPageZh').then((m) => ({ default: m.ContactPageZh }))
);
const PrivacyPageZh = React.lazy(() =>
  import('./pages/zh/PrivacyPageZh').then((m) => ({ default: m.PrivacyPageZh }))
);
const TermsPageZh = React.lazy(() =>
  import('./pages/zh/TermsPageZh').then((m) => ({ default: m.TermsPageZh }))
);
const DisclaimerPageZh = React.lazy(() =>
  import('./pages/zh/DisclaimerPageZh').then((m) => ({ default: m.DisclaimerPageZh }))
);
const CookiePolicyPageZh = React.lazy(() =>
  import('./pages/zh/CookiePolicyPageZh').then((m) => ({ default: m.CookiePolicyPageZh }))
);
const AllToolsPageZh = React.lazy(() =>
  import('./pages/zh/AllToolsPageZh').then((m) => ({ default: m.AllToolsPageZh }))
);
const GuideWhatsAppPageZh = React.lazy(() =>
  import('./pages/zh/GuideWhatsAppPageZh').then((m) => ({ default: m.GuideWhatsAppPageZh }))
);
const GuideFormatsPageZh = React.lazy(() =>
  import('./pages/zh/GuideFormatsPageZh').then((m) => ({ default: m.GuideFormatsPageZh }))
);
const Guide100kbPageZh = React.lazy(() =>
  import('./pages/zh/Guide100kbPageZh').then((m) => ({ default: m.Guide100kbPageZh }))
);
const AboutPageBn = React.lazy(() =>
  import('./pages/bn/AboutPageBn').then((m) => ({ default: m.AboutPageBn }))
);
const ContactPageBn = React.lazy(() =>
  import('./pages/bn/ContactPageBn').then((m) => ({ default: m.ContactPageBn }))
);
const PrivacyPageBn = React.lazy(() =>
  import('./pages/bn/PrivacyPageBn').then((m) => ({ default: m.PrivacyPageBn }))
);
const TermsPageBn = React.lazy(() =>
  import('./pages/bn/TermsPageBn').then((m) => ({ default: m.TermsPageBn }))
);
const DisclaimerPageBn = React.lazy(() =>
  import('./pages/bn/DisclaimerPageBn').then((m) => ({ default: m.DisclaimerPageBn }))
);
const CookiePolicyPageBn = React.lazy(() =>
  import('./pages/bn/CookiePolicyPageBn').then((m) => ({ default: m.CookiePolicyPageBn }))
);
const AllToolsPageBn = React.lazy(() =>
  import('./pages/bn/AllToolsPageBn').then((m) => ({ default: m.AllToolsPageBn }))
);
const GuideWhatsAppPageBn = React.lazy(() =>
  import('./pages/bn/GuideWhatsAppPageBn').then((m) => ({ default: m.GuideWhatsAppPageBn }))
);
const GuideFormatsPageBn = React.lazy(() =>
  import('./pages/bn/GuideFormatsPageBn').then((m) => ({ default: m.GuideFormatsPageBn }))
);
const Guide100kbPageBn = React.lazy(() =>
  import('./pages/bn/Guide100kbPageBn').then((m) => ({ default: m.Guide100kbPageBn }))
);

const NotFoundPage = React.lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);
import { CompressionSettings, ImageFormat, ImageItem } from './types';
import { compressSingleImage, detectTransparency, loadImageFromFile, toDecodableBlob } from './utils/compressor';
import { getFileExtension } from './utils/formatters';
import { buildFaqPageNode } from './utils/faqJsonLd';
import { trackPageView, trackFileCompressed, trackFileDownloaded } from './utils/analytics';

const KNOWN_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/disclaimer',
  '/cookie-policy',
  '/all-tools',
  '/admin/comments',
  '/guides/compress-images-for-whatsapp',
  '/guides/jpg-vs-png-vs-webp',
  '/guides/reduce-image-size-to-100kb',
  '/image-resizer',
  '/image-converter',
  '/rotate-flip-image',
  '/image-to-pdf',
  '/image-metadata-viewer',
  '/remove-image-metadata',
  '/favicon-generator',
  '/image-color-picker',
  '/image-dimensions-checker',
  '/image-cropper',
  '/image-watermark',
  '/blur-pixelate-image',
  '/add-text-to-image',
  '/image-border-generator',
  '/round-image-corners',
  '/image-brightness-editor',
  '/image-contrast-editor',
  '/image-saturation-editor',
  '/image-filters',
  '/add-background-to-image',
  '/image-splitter',
  '/image-dpi-changer',
  '/image-to-base64',
  '/base64-to-image',
  '/image-color-palette-extractor',
  '/gif-maker',
  '/image-collage-maker',
  '/compress-image-to-50kb',
  '/compress-image-to-100kb',
  '/compress-image-to-200kb',
  '/compress-image-to-500kb',
  '/bulk-image-compressor',
  '/target-file-size-compressor',
  '/bulk-image-resizer',
  '/bulk-image-converter',
  '/web-image-optimizer',
  '/gif-compressor',
  '/heic-to-jpg',
  '/jpg-to-png',
  '/png-to-jpg',
  '/jpg-to-webp',
  '/webp-to-jpg',
  '/png-to-webp',
  '/webp-to-png',
  '/svg-to-png',
  '/avif-to-jpg',
  '/bmp-to-jpg',
];

export interface ParsedPath { path: string; lang: SupportedLang; notFound?: boolean; }

export function parsePath(rawPathname: string): ParsedPath {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  let p = rawPathname.toLowerCase();
  if (base && base !== '/' && p.startsWith(base.toLowerCase())) {
    p = p.slice(base.length) || '/';
  }
  p = p.replace(/\/$/, '') || '/';

  // Spanish prefix: /es/<spanish-slug>
  if (p === '/es' || p.startsWith('/es/')) {
    const rest = p === '/es' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'es' };
    if (rest === ES_HOME_ALIAS.slice(3)) return { path: '/', lang: 'es' }; // /es/comprimir-imagenes → /es/
    if (rest === ES_ALL_TOOLS_PATH.slice(3)) return { path: ES_ALL_TOOLS_PATH, lang: 'es' };
    const enPath = EN_PATH_BY_ES[p]; // keys carry the '/es' prefix (see slug map)
    if (enPath && (KNOWN_ROUTES.includes(enPath) || resolveBlogRoute(enPath))) return { path: enPath, lang: 'es' };
    return { path: p, lang: 'es', notFound: true }; // unknown path in this language -> 404 page
  }
  // Portuguese prefix: /pt/<portuguese-slug>
  if (p === '/pt' || p.startsWith('/pt/')) {
    const rest = p === '/pt' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'pt' };
    if (rest === PT_HOME_ALIAS.slice(3)) return { path: '/', lang: 'pt' }; // /pt/comprimir-imagens → /pt/
    if (rest === PT_ALL_TOOLS_PATH.slice(3)) return { path: PT_ALL_TOOLS_PATH, lang: 'pt' };
    const enPath = EN_PATH_BY_PT[p]; // keys carry the '/pt' prefix (see slug map)
    if (enPath && (KNOWN_ROUTES.includes(enPath) || resolveBlogRoute(enPath))) return { path: enPath, lang: 'pt' };
    return { path: p, lang: 'pt', notFound: true }; // unknown path in this language -> 404 page
  }
  // French prefix: /fr/<french-slug>
  if (p === '/fr' || p.startsWith('/fr/')) {
    const rest = p === '/fr' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'fr' };
    if (rest === FR_HOME_ALIAS.slice(3)) return { path: '/', lang: 'fr' }; // /fr/compresser-images → /fr/
    if (rest === FR_ALL_TOOLS_PATH.slice(3)) return { path: FR_ALL_TOOLS_PATH, lang: 'fr' };
    const enPath = EN_PATH_BY_FR[p]; // keys carry the '/fr' prefix (see slug map)
    if (enPath && (KNOWN_ROUTES.includes(enPath) || resolveBlogRoute(enPath))) return { path: enPath, lang: 'fr' };
    return { path: p, lang: 'fr', notFound: true }; // unknown path in this language -> 404 page
  }
  // German prefix: /de/<german-slug>
  if (p === '/de' || p.startsWith('/de/')) {
    const rest = p === '/de' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'de' };
    if (rest === DE_HOME_ALIAS.slice(3)) return { path: '/', lang: 'de' }; // /de/bilder-komprimieren → /de/
    if (rest === DE_ALL_TOOLS_PATH.slice(3)) return { path: DE_ALL_TOOLS_PATH, lang: 'de' };
    const enPath = EN_PATH_BY_DE[p]; // keys carry the '/de' prefix (see slug map)
    if (enPath && (KNOWN_ROUTES.includes(enPath) || resolveBlogRoute(enPath))) return { path: enPath, lang: 'de' };
    return { path: p, lang: 'de', notFound: true }; // unknown path in this language -> 404 page
  }
  // Italian prefix: /it/<italian-slug>
  if (p === '/it' || p.startsWith('/it/')) {
    const rest = p === '/it' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'it' };
    if (rest === IT_HOME_ALIAS.slice(3)) return { path: '/', lang: 'it' }; // /it/comprimere-immagini → /it/
    if (rest === IT_ALL_TOOLS_PATH.slice(3)) return { path: IT_ALL_TOOLS_PATH, lang: 'it' };
    const enPath = EN_PATH_BY_IT[p]; // keys carry the '/it' prefix (see slug map)
    if (enPath && (KNOWN_ROUTES.includes(enPath) || resolveBlogRoute(enPath))) return { path: enPath, lang: 'it' };
    return { path: p, lang: 'it', notFound: true }; // unknown path in this language -> 404 page
  }
  // Indonesian prefix: /id/<indonesian-slug>
  if (p === '/id' || p.startsWith('/id/')) {
    const rest = p === '/id' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'id' };
    if (rest === ID_HOME_ALIAS.slice(3)) return { path: '/', lang: 'id' }; // /id/kompres-gambar → /id/
    if (rest === ID_ALL_TOOLS_PATH.slice(3)) return { path: ID_ALL_TOOLS_PATH, lang: 'id' };
    const enPath = EN_PATH_BY_ID[p]; // keys carry the '/id' prefix (see slug map)
    if (enPath && (KNOWN_ROUTES.includes(enPath) || resolveBlogRoute(enPath))) return { path: enPath, lang: 'id' };
    return { path: p, lang: 'id', notFound: true }; // unknown path in this language -> 404 page
  }
  // Russian prefix: /ru/<russian-slug>
  if (p === '/ru' || p.startsWith('/ru/')) {
    const rest = p === '/ru' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'ru' };
    if (rest === RU_HOME_ALIAS.slice(3)) return { path: '/', lang: 'ru' }; // /ru/szhat-izobrazhenie → /ru/
    if (rest === RU_ALL_TOOLS_PATH.slice(3)) return { path: RU_ALL_TOOLS_PATH, lang: 'ru' };
    const enPath = EN_PATH_BY_RU[p]; // keys carry the '/ru' prefix (see slug map)
    if (enPath && (KNOWN_ROUTES.includes(enPath) || resolveBlogRoute(enPath))) return { path: enPath, lang: 'ru' };
    return { path: p, lang: 'ru', notFound: true }; // unknown path in this language -> 404 page
  }
  // Japanese prefix: /ja/<japanese-slug>
  if (p === '/ja' || p.startsWith('/ja/')) {
    const rest = p === '/ja' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'ja' };
    if (rest === JA_HOME_ALIAS.slice(3)) return { path: '/', lang: 'ja' }; // /ja/gazo-asshuku → /ja/
    if (rest === JA_ALL_TOOLS_PATH.slice(3)) return { path: JA_ALL_TOOLS_PATH, lang: 'ja' };
    const enPath = EN_PATH_BY_JA[p]; // keys carry the '/ja' prefix (see slug map)
    if (enPath && (KNOWN_ROUTES.includes(enPath) || resolveBlogRoute(enPath))) return { path: enPath, lang: 'ja' };
    return { path: p, lang: 'ja', notFound: true }; // unknown path in this language -> 404 page
  }
  // Korean prefix: /ko/<korean-slug>
  if (p === '/ko' || p.startsWith('/ko/')) {
    const rest = p === '/ko' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'ko' };
    if (rest === KO_HOME_ALIAS.slice(3)) return { path: '/', lang: 'ko' }; // /ko/imiji-apchuk → /ko/
    if (rest === KO_ALL_TOOLS_PATH.slice(3)) return { path: KO_ALL_TOOLS_PATH, lang: 'ko' };
    const enPath = EN_PATH_BY_KO[p]; // keys carry the '/ko' prefix (see slug map)
    if (enPath && (KNOWN_ROUTES.includes(enPath) || resolveBlogRoute(enPath))) return { path: enPath, lang: 'ko' };
    return { path: p, lang: 'ko', notFound: true }; // unknown path in this language -> 404 page
  }
  // Chinese prefix: /zh/<chinese-slug>
  if (p === '/zh' || p.startsWith('/zh/')) {
    const rest = p === '/zh' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'zh' };
    if (rest === ZH_HOME_ALIAS.slice(3)) return { path: '/', lang: 'zh' }; // /zh/yasuo-tupian → /zh/
    if (rest === ZH_ALL_TOOLS_PATH.slice(3)) return { path: ZH_ALL_TOOLS_PATH, lang: 'zh' };
    const enPath = EN_PATH_BY_ZH[p]; // keys carry the '/zh' prefix (see slug map)
    if (enPath && (KNOWN_ROUTES.includes(enPath) || resolveBlogRoute(enPath))) return { path: enPath, lang: 'zh' };
    return { path: p, lang: 'zh', notFound: true }; // unknown path in this language -> 404 page
  }
  // Bengali prefix: /bn/<romanized-slug>
  if (p === '/bn' || p.startsWith('/bn/')) {
    const rest = p === '/bn' ? '/' : p.slice(3); // keep leading '/'
    if (rest === '/') return { path: '/', lang: 'bn' };
    if (rest === BN_HOME_ALIAS.slice(3)) return { path: '/', lang: 'bn' }; // /bn/chhobi-compress-korun → /bn/
    if (rest === BN_ALL_TOOLS_PATH.slice(3)) return { path: BN_ALL_TOOLS_PATH, lang: 'bn' };
    const enPath = EN_PATH_BY_BN[p]; // keys carry the '/bn' prefix (see slug map)
    if (enPath && (KNOWN_ROUTES.includes(enPath) || resolveBlogRoute(enPath))) return { path: enPath, lang: 'bn' };
    return { path: p, lang: 'bn', notFound: true }; // unknown path in this language -> 404 page
  }
  return KNOWN_ROUTES.includes(p) || resolveBlogRoute(p) ? { path: p, lang: 'en' } : { path: p, lang: 'en', notFound: true }; // unknown English path -> 404 page
}

/** English path → the equivalent path in `lang` (identity for 'en').
 * `enPath` may also be an already-localized tool-directory path (the router
 * stores the directory route under its localized key); directory paths map
 * across languages instead of falling through to the slug maps.
 * Exported for the SSR prerender (src/entry-server.tsx), which computes
 * the same canonical the head effect does. */
export function toLocalizedPath(enPath: string, lang: SupportedLang): string {
  if (lang === 'en') return enPath;
  if (enPath === '/') return `/${lang}/`;
  if (
    enPath === ES_ALL_TOOLS_PATH ||
    enPath === PT_ALL_TOOLS_PATH ||
    enPath === FR_ALL_TOOLS_PATH ||
    enPath === DE_ALL_TOOLS_PATH ||
    enPath === IT_ALL_TOOLS_PATH ||
    enPath === ID_ALL_TOOLS_PATH ||
    enPath === RU_ALL_TOOLS_PATH ||
    enPath === JA_ALL_TOOLS_PATH ||
    enPath === KO_ALL_TOOLS_PATH ||
    enPath === ZH_ALL_TOOLS_PATH ||
    enPath === BN_ALL_TOOLS_PATH
  ) {
    return lang === 'es'
      ? ES_ALL_TOOLS_PATH
      : lang === 'pt'
        ? PT_ALL_TOOLS_PATH
        : lang === 'fr'
          ? FR_ALL_TOOLS_PATH
          : lang === 'de'
            ? DE_ALL_TOOLS_PATH
            : lang === 'it'
              ? IT_ALL_TOOLS_PATH
              : lang === 'id'
                ? ID_ALL_TOOLS_PATH
                : lang === 'ja'
                  ? JA_ALL_TOOLS_PATH
                  : lang === 'ko'
                    ? KO_ALL_TOOLS_PATH
                    : lang === 'zh'
                      ? ZH_ALL_TOOLS_PATH
                      : lang === 'bn'
                        ? BN_ALL_TOOLS_PATH
                        : RU_ALL_TOOLS_PATH;
  }
  if (lang === 'es') return ES_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'pt') return PT_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'fr') return FR_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'de') return DE_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'it') return IT_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'id') return ID_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'ru') return RU_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'ja') return JA_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'ko') return KO_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'zh') return ZH_PATH_BY_EN[enPath] ?? enPath;
  if (lang === 'bn') return BN_PATH_BY_EN[enPath] ?? enPath;
  return enPath;
}

function withBasePath(routePath: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (!base || base === '/') return routePath;
  return `${base}${routePath === '/' ? '/' : routePath}`;
}

interface EsLocale {
  ui: typeof import('./locales/es/ui').ES;
  tools: typeof import('./locales/es/tools').TOOL_BY_SLUG_ES;
  categories: typeof import('./locales/es/tools').TOOL_CATEGORIES_ES;
  toolUi: typeof import('./locales/es/ui').TOOL_UI_ES;
  blog: typeof import('./locales/es/blog').ES_BLOG_OVERRIDES;
}

interface PtLocale {
  ui: typeof import('./locales/pt/ui').PT;
  tools: typeof import('./locales/pt/tools').TOOL_BY_SLUG_PT;
  categories: typeof import('./locales/pt/tools').TOOL_CATEGORIES_PT;
  toolUi: typeof import('./locales/pt/ui').TOOL_UI_PT;
  blog: typeof import('./locales/pt/blog').PT_BLOG_OVERRIDES;
}

interface FrLocale {
  ui: typeof import('./locales/fr/ui').FR;
  tools: typeof import('./locales/fr/tools').TOOL_BY_SLUG_FR;
  categories: typeof import('./locales/fr/tools').TOOL_CATEGORIES_FR;
  toolUi: typeof import('./locales/fr/ui').TOOL_UI_FR;
  blog: typeof import('./locales/fr/blog').FR_BLOG_OVERRIDES;
}

interface DeLocale {
  ui: typeof import('./locales/de/ui').DE;
  tools: typeof import('./locales/de/tools').TOOL_BY_SLUG_DE;
  categories: typeof import('./locales/de/tools').TOOL_CATEGORIES_DE;
  toolUi: typeof import('./locales/de/ui').TOOL_UI_DE;
  blog: typeof import('./locales/de/blog').DE_BLOG_OVERRIDES;
}

interface ItLocale {
  ui: typeof import('./locales/it/ui').IT;
  tools: typeof import('./locales/it/tools').TOOL_BY_SLUG_IT;
  categories: typeof import('./locales/it/tools').TOOL_CATEGORIES_IT;
  toolUi: typeof import('./locales/it/ui').TOOL_UI_IT;
  blog: typeof import('./locales/it/blog').IT_BLOG_OVERRIDES;
}

interface IdLocale {
  ui: typeof import('./locales/id/ui').ID;
  tools: typeof import('./locales/id/tools').TOOL_BY_SLUG_ID;
  categories: typeof import('./locales/id/tools').TOOL_CATEGORIES_ID;
  toolUi: typeof import('./locales/id/ui').TOOL_UI_ID;
  blog: typeof import('./locales/id/blog').ID_BLOG_OVERRIDES;
}

interface RuLocale {
  ui: typeof import('./locales/ru/ui').RU;
  tools: typeof import('./locales/ru/tools').TOOL_BY_SLUG_RU;
  categories: typeof import('./locales/ru/tools').TOOL_CATEGORIES_RU;
  toolUi: typeof import('./locales/ru/ui').TOOL_UI_RU;
  blog: typeof import('./locales/ru/blog').RU_BLOG_OVERRIDES;
}

interface JaLocale {
  ui: typeof import('./locales/ja/ui').JA;
  tools: typeof import('./locales/ja/tools').TOOL_BY_SLUG_JA;
  categories: typeof import('./locales/ja/tools').TOOL_CATEGORIES_JA;
  toolUi: typeof import('./locales/ja/ui').TOOL_UI_JA;
  blog: typeof import('./locales/ja/blog').JA_BLOG_OVERRIDES;
}

interface KoLocale {
  ui: typeof import('./locales/ko/ui').KO;
  tools: typeof import('./locales/ko/tools').TOOL_BY_SLUG_KO;
  categories: typeof import('./locales/ko/tools').TOOL_CATEGORIES_KO;
  toolUi: typeof import('./locales/ko/ui').TOOL_UI_KO;
  blog: typeof import('./locales/ko/blog').KO_BLOG_OVERRIDES;
}

interface ZhLocale {
  ui: typeof import('./locales/zh/ui').ZH;
  tools: typeof import('./locales/zh/tools').TOOL_BY_SLUG_ZH;
  categories: typeof import('./locales/zh/tools').TOOL_CATEGORIES_ZH;
  toolUi: typeof import('./locales/zh/ui').TOOL_UI_ZH;
  blog: typeof import('./locales/zh/blog').ZH_BLOG_OVERRIDES;
}

interface BnLocale {
  ui: typeof import('./locales/bn/ui').BN;
  tools: typeof import('./locales/bn/tools').TOOL_BY_SLUG_BN;
  categories: typeof import('./locales/bn/tools').TOOL_CATEGORIES_BN;
  toolUi: typeof import('./locales/bn/ui').TOOL_UI_BN;
  blog: typeof import('./locales/bn/blog').BN_BLOG_OVERRIDES;
}

type AnyLocale = EsLocale | PtLocale | FrLocale | DeLocale | ItLocale | IdLocale | RuLocale | JaLocale | KoLocale | ZhLocale | BnLocale;

export default function App({ initialPath }: { initialPath?: string } = {}) {
  const [route, setRoute] = useState<ParsedPath>(() => {
    // SSR: the server passes the request path explicitly (there is no
    // window in Node). Client: read it from the browser as before.
    if (initialPath) {
      return parsePath(initialPath);
    }
    if (typeof window !== 'undefined') {
      return parsePath(window.location.pathname);
    }
    return { path: '/', lang: 'en' };
  });
  const currentPath = route.path;
  // Unknown URL (no known route): the router renders <NotFoundPage/> instead of home.
  const isNotFound = route.notFound === true;

  const [lang, setLang] = useState<SupportedLang>(route.lang);
  // "All Tools" target for the 404 page: every language has a dedicated
  // directory page (EN: /all-tools).
  const allToolsPath =
    lang === 'es' ? ES_ALL_TOOLS_PATH : lang === 'pt' ? PT_ALL_TOOLS_PATH : lang === 'fr' ? FR_ALL_TOOLS_PATH : lang === 'de' ? DE_ALL_TOOLS_PATH : lang === 'it' ? IT_ALL_TOOLS_PATH : lang === 'id' ? ID_ALL_TOOLS_PATH : lang === 'ru' ? RU_ALL_TOOLS_PATH : lang === 'ja' ? JA_ALL_TOOLS_PATH : lang === 'ko' ? KO_ALL_TOOLS_PATH : lang === 'zh' ? ZH_ALL_TOOLS_PATH : lang === 'bn' ? BN_ALL_TOOLS_PATH : '/all-tools';
  const [esLocale, setEsLocale] = useState<EsLocale | null>(
    // Tier J: main.tsx stored the preloaded locale in the cache
    // before first render, so the first render is already
    // localized and hydrateRoot can adopt the prerendered DOM.
    () => getCachedLocale<EsLocale>('es'),
  );
  const [ptLocale, setPtLocale] = useState<PtLocale | null>(
    // Tier J: main.tsx stored the preloaded locale in the cache
    // before first render, so the first render is already
    // localized and hydrateRoot can adopt the prerendered DOM.
    () => getCachedLocale<PtLocale>('pt'),
  );
  const [frLocale, setFrLocale] = useState<FrLocale | null>(
    // Tier J: main.tsx stored the preloaded locale in the cache
    // before first render, so the first render is already
    // localized and hydrateRoot can adopt the prerendered DOM.
    () => getCachedLocale<FrLocale>('fr'),
  );
  const [deLocale, setDeLocale] = useState<DeLocale | null>(
    // Tier J: main.tsx stored the preloaded locale in the cache
    // before first render, so the first render is already
    // localized and hydrateRoot can adopt the prerendered DOM.
    () => getCachedLocale<DeLocale>('de'),
  );
  const [itLocale, setItLocale] = useState<ItLocale | null>(
    // Tier J: main.tsx stored the preloaded locale in the cache
    // before first render, so the first render is already
    // localized and hydrateRoot can adopt the prerendered DOM.
    () => getCachedLocale<ItLocale>('it'),
  );
  const [idLocale, setIdLocale] = useState<IdLocale | null>(
    // Tier J: main.tsx stored the preloaded locale in the cache
    // before first render, so the first render is already
    // localized and hydrateRoot can adopt the prerendered DOM.
    () => getCachedLocale<IdLocale>('id'),
  );
  const [ruLocale, setRuLocale] = useState<RuLocale | null>(
    // Tier J: main.tsx stored the preloaded locale in the cache
    // before first render, so the first render is already
    // localized and hydrateRoot can adopt the prerendered DOM.
    () => getCachedLocale<RuLocale>('ru'),
  );
  const [jaLocale, setJaLocale] = useState<JaLocale | null>(
    // Tier J: main.tsx stored the preloaded locale in the cache
    // before first render, so the first render is already
    // localized and hydrateRoot can adopt the prerendered DOM.
    () => getCachedLocale<JaLocale>('ja'),
  );
  const [koLocale, setKoLocale] = useState<KoLocale | null>(
    // Tier J: main.tsx stored the preloaded locale in the cache
    // before first render, so the first render is already
    // localized and hydrateRoot can adopt the prerendered DOM.
    () => getCachedLocale<KoLocale>('ko'),
  );
  const [zhLocale, setZhLocale] = useState<ZhLocale | null>(
    // Tier J: main.tsx stored the preloaded locale in the cache
    // before first render, so the first render is already
    // localized and hydrateRoot can adopt the prerendered DOM.
    () => getCachedLocale<ZhLocale>('zh'),
  );
  const [bnLocale, setBnLocale] = useState<BnLocale | null>(
    // Tier J: main.tsx stored the preloaded locale in the cache
    // before first render, so the first render is already
    // localized and hydrateRoot can adopt the prerendered DOM.
    () => getCachedLocale<BnLocale>('bn'),
  );
  const [localeLoading, setLocaleLoading] = useState(false);

  // The active non-English locale (null for English). Defined early so the
  // SEO effect below can read tool titles/descriptions from it.
  const activeLocale: AnyLocale | null =
    lang === 'es' ? esLocale : lang === 'pt' ? ptLocale : lang === 'fr' ? frLocale : lang === 'de' ? deLocale : lang === 'it' ? itLocale : lang === 'id' ? idLocale : lang === 'ru' ? ruLocale : lang === 'ja' ? jaLocale : lang === 'ko' ? koLocale : lang === 'zh' ? zhLocale : lang === 'bn' ? bnLocale : null;
  const activeUi = activeLocale?.ui ?? null;

  // Blog (Batch 2): the resolved blog route for the current EN path (null
  // off-blog), the article for article routes, the active language's blog
  // UI strings (EN fallback) and article overrides (empty for EN).
  const blogRoute = isBlogEnPath(currentPath) ? resolveBlogRoute(currentPath) : null;
  const blogArticle: BlogArticleMeta | undefined =
    blogRoute?.kind === 'article' ? getBlogArticleById(blogRoute.articleId) : undefined;
  const blogStrings = activeUi?.blog ?? EN_BLOG_STRINGS;
  const blogOverrides = activeLocale?.blog ?? {};

  // Generic loader — later languages add one branch each; only the selected
  // language's files are ever downloaded (Vite code-splits each dynamic import).
  //
  // Tier J: the actual loading lives in the shared loadLocaleData()
  // (src/locales/loadLocaleData.ts) — the same module specifiers main.tsx
  // uses for the boot preload — and the result is stored in the locale
  // cache so a remount never re-fetches. Tier C: withBlog=false skips the
  // locale blog chunk (only blog routes need it); when the user navigates
  // client-side onto a blog route, the lang effect re-runs with
  // withBlog=true and the second half of the guard tops the blog chunk up
  // into the already-loaded locale (the module cache makes the re-load
  // cheap — the ui/tools chunks resolve without a network fetch).
  const loadLocale = useCallback(async (target: SupportedLang, opts?: { withBlog?: boolean }) => {
    if (target === 'en') return;
    const withBlog = opts?.withBlog ?? true;
    if (target === 'es' && (!esLocale || (withBlog && Object.keys(esLocale.blog ?? {}).length === 0))) {
      setLocaleLoading(true);
      const data = await loadLocaleData<EsLocale>('es', { withBlog });
      setEsLocale(data);
      setCachedLocale('es', data);
      setLocaleLoading(false);
    }
    if (target === 'pt' && (!ptLocale || (withBlog && Object.keys(ptLocale.blog ?? {}).length === 0))) {
      setLocaleLoading(true);
      const data = await loadLocaleData<PtLocale>('pt', { withBlog });
      setPtLocale(data);
      setCachedLocale('pt', data);
      setLocaleLoading(false);
    }
    if (target === 'fr' && (!frLocale || (withBlog && Object.keys(frLocale.blog ?? {}).length === 0))) {
      setLocaleLoading(true);
      const data = await loadLocaleData<FrLocale>('fr', { withBlog });
      setFrLocale(data);
      setCachedLocale('fr', data);
      setLocaleLoading(false);
    }
    if (target === 'de' && (!deLocale || (withBlog && Object.keys(deLocale.blog ?? {}).length === 0))) {
      setLocaleLoading(true);
      const data = await loadLocaleData<DeLocale>('de', { withBlog });
      setDeLocale(data);
      setCachedLocale('de', data);
      setLocaleLoading(false);
    }
    if (target === 'it' && (!itLocale || (withBlog && Object.keys(itLocale.blog ?? {}).length === 0))) {
      setLocaleLoading(true);
      const data = await loadLocaleData<ItLocale>('it', { withBlog });
      setItLocale(data);
      setCachedLocale('it', data);
      setLocaleLoading(false);
    }
    if (target === 'id' && (!idLocale || (withBlog && Object.keys(idLocale.blog ?? {}).length === 0))) {
      setLocaleLoading(true);
      const data = await loadLocaleData<IdLocale>('id', { withBlog });
      setIdLocale(data);
      setCachedLocale('id', data);
      setLocaleLoading(false);
    }
    if (target === 'ru' && (!ruLocale || (withBlog && Object.keys(ruLocale.blog ?? {}).length === 0))) {
      setLocaleLoading(true);
      const data = await loadLocaleData<RuLocale>('ru', { withBlog });
      setRuLocale(data);
      setCachedLocale('ru', data);
      setLocaleLoading(false);
    }
    if (target === 'ja' && (!jaLocale || (withBlog && Object.keys(jaLocale.blog ?? {}).length === 0))) {
      setLocaleLoading(true);
      const data = await loadLocaleData<JaLocale>('ja', { withBlog });
      setJaLocale(data);
      setCachedLocale('ja', data);
      setLocaleLoading(false);
    }
    if (target === 'ko' && (!koLocale || (withBlog && Object.keys(koLocale.blog ?? {}).length === 0))) {
      setLocaleLoading(true);
      const data = await loadLocaleData<KoLocale>('ko', { withBlog });
      setKoLocale(data);
      setCachedLocale('ko', data);
      setLocaleLoading(false);
    }
    if (target === 'zh' && (!zhLocale || (withBlog && Object.keys(zhLocale.blog ?? {}).length === 0))) {
      setLocaleLoading(true);
      const data = await loadLocaleData<ZhLocale>('zh', { withBlog });
      setZhLocale(data);
      setCachedLocale('zh', data);
      setLocaleLoading(false);
    }
    if (target === 'bn' && (!bnLocale || (withBlog && Object.keys(bnLocale.blog ?? {}).length === 0))) {
      setLocaleLoading(true);
      const data = await loadLocaleData<BnLocale>('bn', { withBlog });
      setBnLocale(data);
      setCachedLocale('bn', data);
      setLocaleLoading(false);
    }
  }, [esLocale, ptLocale, frLocale, deLocale, itLocale, idLocale, ruLocale, jaLocale, koLocale, zhLocale, bnLocale]);

  const [images, setImages] = useState<ImageItem[]>([]);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);
  const [zipProgress, setZipProgress] = useState<number>(0);

  // Settings state
  const [settings, setSettings] = useState<CompressionSettings>({
    preset: 'balanced',
    quality: 70,
    format: 'original',
    maxFileSizeMB: 20,
    fillTransparentBackground: true,
    backgroundColor: '#ffffff',
  });

  const [comparisonTarget, setComparisonTarget] = useState<ImageItem | null>(null);

  const toolRef = useRef<HTMLDivElement>(null);

  // Handle client-side routing and browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setRoute(parsePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // GA4 pageviews (SEO audit issue 10): the gtag snippet in index.html uses
  // send_page_view: false, so this is the single source of pageviews — fired
  // on mount and on every client-side route change. Never call trackPageView
  // inside handleNavigate (it would double-fire).
  useEffect(() => {
    trackPageView(window.location.pathname + window.location.search, document.title);
  }, [route.path, route.lang]);

  // Keep the language state in sync when the route changes (e.g. browser
  // back/forward): the route is the source of truth for the URL's language.
  useEffect(() => {
    setLang(route.lang);
  }, [route.lang]);

  // Load the locale files when the language changes to a non-English one.
  // Tier C: the blog chunk loads only on blog routes — when the user
  // navigates client-side from a non-blog route to a blog route in the
  // same language, blogRoute changes and this re-runs, topping the blog
  // chunk up into the already-loaded locale (see loadLocale's guard).
  useEffect(() => {
    if (lang !== 'en') {
      loadLocale(lang, { withBlog: blogRoute !== null });
    }
  }, [lang, loadLocale, blogRoute]);

  // Keep <html lang> in sync with the active language.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Stored language preference (mount only): if the user landed on '/' with no
  // language prefix and previously chose Spanish, go to '/es/'. Never redirect
  // from a deep link, never use IP/location.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    const raw = window.location.pathname;
    const noBase =
      base && base !== '/' && raw.toLowerCase().startsWith(base.toLowerCase())
        ? raw.slice(base.length) || '/'
        : raw;
    // Only languages with shipped locale files redirect (es/pt/fr/de/it/id/ru/ja/ko/zh for now);
    // a stored code for a not-yet-built language must not send the user to a
    // URL prefix the router cannot resolve.
    const storedLang = localStorage.getItem(LANG_STORAGE_KEY);
    if (
      noBase === '/' &&
      (storedLang === 'es' || storedLang === 'pt' || storedLang === 'fr' || storedLang === 'de' || storedLang === 'it' || storedLang === 'id' || storedLang === 'ru' || storedLang === 'ja' || storedLang === 'ko' || storedLang === 'zh')
    ) {
      window.history.replaceState(null, '', withBasePath(`/${storedLang}/`));
      setLang(storedLang);
      setRoute({ path: '/', lang: storedLang });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update document title, meta description, OpenGraph, and canonical tag based on active route
  useEffect(() => {
    // Unknown URL: <NotFoundPage/> owns document.title + the robots meta
    // (noindex, nofollow) — do not overwrite them with home-page SEO tags.
    if (route.notFound) return;
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const baseDomain = 'https://compressmypic.online';
    const toolMeta =
      (activeLocale ? activeLocale.tools[currentPath] : undefined) ??
      TOOL_META_BY_SLUG[currentPath];

    const staticTitles: Record<string, string> = {
      '/about': 'About CompressMyPic – Free Online Image Compressor',
      '/contact': 'Contact CompressMyPic – Help, Feedback & Bug Reports',
      '/privacy': 'Privacy Policy | CompressMyPic – Your Images Stay Private',
      '/terms': 'Terms of Service | CompressMyPic – Free Image Tools Rules',
      '/disclaimer': 'Disclaimer | CompressMyPic – Free Image Tools',
      '/cookie-policy': 'Cookie Policy | CompressMyPic – How Cookies Are Used',
      '/all-tools': 'All Image Tools | CompressMyPic – Free Image Tools',
      '/admin/comments': 'Comments Admin | CompressMyPic (Private Page)',
      '/guides/compress-images-for-whatsapp': 'Compress Images for WhatsApp Without Losing Quality',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP: Which Image Format Is Best? (Guide)',
      '/guides/reduce-image-size-to-100kb': 'How to Reduce Image Size to 100KB: Step-by-Step Guide',
    };

    const staticDescriptions: Record<string, string> = {
      '/': 'Compress images online free and reduce JPG, PNG and WebP size without losing quality. No signup, no watermark — your photos never leave your own browser.',
      '/about': 'About CompressMyPic – a free online image compressor for JPG, PNG and WebP. Compress images online free, with no signup, no watermark and no server upload.',
      '/contact': 'Contact CompressMyPic for help, feedback or bug reports about our free image tools. We reply by email — please tell us the tool name and what went wrong.',
      '/privacy': 'Privacy Policy for CompressMyPic: your images are compressed in your browser and never uploaded. Read how cookies, ads and analytics work on this site.',
      '/terms': 'Terms of Service for CompressMyPic: fair use, your content, liability and service changes for our free online image tools. Plain rules, no legal jargon.',
      '/disclaimer': 'Disclaimer for CompressMyPic: our free image tools are provided as-is, without warranty. Read the limits of liability and accuracy of our guides.',
      '/cookie-policy': 'Cookie Policy for CompressMyPic: we set no cookies ourselves. Learn which cookies Google Analytics uses, and how to control them.',
      '/all-tools': 'All 47 free CompressMyPic image tools in one place — compress, convert, resize, crop and edit images in your browser. No signup, no watermark.',
      '/admin/comments': 'Private admin page for moderating CompressMyPic comments. This page is not for public use — please use the contact page for help, feedback or bug reports.',
      '/guides/compress-images-for-whatsapp': 'Learn how to compress images for WhatsApp without losing quality. Free, private, no signup — shrink photos before sending so they stay sharp and send fast.',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP compared: file size, quality, transparency and browser support — pick the right image format for photos, logos, websites and social media.',
      '/guides/reduce-image-size-to-100kb': 'Step-by-step guide: reduce any image to 100KB for websites and email — which format, quality and dimensions to use, plus the common mistakes to avoid.',
    };

    const staticTitlesEs: Record<string, string> = {
      '/': esLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'Nosotros – CompressMyPic, compresor de imágenes gratis online',
      '/contact': 'Contacto – CompressMyPic, compresor de imágenes gratis online',
      '/privacy': 'Política de privacidad – CompressMyPic',
      '/terms': 'Términos de servicio – CompressMyPic',
      '/disclaimer': 'Aviso legal | CompressMyPic – Herramientas de imagen gratuitas',
      '/cookie-policy': 'Política de cookies | CompressMyPic – Cómo se usan las cookies',
      [ES_ALL_TOOLS_PATH]: 'Todas las herramientas de imagen gratis | CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'Comprimir imágenes para WhatsApp sin perder calidad',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP: ¿qué formato debería usar?',
      '/guides/reduce-image-size-to-100kb': 'Cómo reducir una imagen a 100 KB para web y correo',
    };

    const staticTitlesPt: Record<string, string> = {
      '/': ptLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'Sobre o CompressMyPic – Compressor de imagens online grátis',
      '/contact': 'Fale conosco - CompressMyPic',
      '/privacy': 'Política de Privacidade - CompressMyPic',
      '/terms': 'Termos de Serviço - CompressMyPic',
      '/disclaimer': 'Aviso legal | CompressMyPic – Ferramentas de imagem gratuitas',
      '/cookie-policy': 'Política de cookies | CompressMyPic – Como os cookies são usados',
      [PT_ALL_TOOLS_PATH]: 'Todas as ferramentas de imagem grátis | CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'Comprimir imagens para WhatsApp sem perder qualidade',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP: qual formato devo usar?',
      '/guides/reduce-image-size-to-100kb': 'Como reduzir uma imagem para 100 KB para web e e-mail',
    };

    const staticTitlesFr: Record<string, string> = {
      '/': frLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'À propos de CompressMyPic – Compresseur d’images online gratuit',
      '/contact': 'Contactez-nous - CompressMyPic',
      '/privacy': 'Politique de confidentialité - CompressMyPic',
      '/terms': 'Conditions d’utilisation - CompressMyPic',
      '/disclaimer': 'Avertissement | CompressMyPic – Outils d’image gratuits',
      '/cookie-policy': 'Politique relative aux cookies | CompressMyPic – Comment les cookies sont utilisés',
      [FR_ALL_TOOLS_PATH]: 'Tous les outils image gratuits en ligne | CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'Compresser des images pour WhatsApp sans perdre en qualité',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP : quel format utiliser ?',
      '/guides/reduce-image-size-to-100kb': 'Comment réduire une image à 100 Ko pour le web et l’e-mail',
    };

    const staticTitlesDe: Record<string, string> = {
      '/': deLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'Über CompressMyPic – Kostenloser Online-Bildkomprimierer',
      '/contact': 'Kontakt – CompressMyPic',
      '/privacy': 'Datenschutzerklärung – CompressMyPic',
      '/terms': 'Nutzungsbedingungen – CompressMyPic',
      '/disclaimer': 'Haftungsausschluss | CompressMyPic – Kostenlose Bild-Tools',
      '/cookie-policy': 'Cookie-Richtlinie | CompressMyPic – Wie Cookies verwendet werden',
      [DE_ALL_TOOLS_PATH]: 'Alle kostenlosen Bildtools online | CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'Bilder für WhatsApp komprimieren ohne Qualitätsverlust',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP: Welches Format sollten Sie verwenden?',
      '/guides/reduce-image-size-to-100kb': 'Bild auf 100 KB verkleinern für Web & E-Mail',
    };

    const staticTitlesIt: Record<string, string> = {
      '/': itLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'Chi siamo – CompressMyPic, compressore di immagini online gratuito',
      '/contact': 'Contattaci - CompressMyPic',
      '/privacy': 'Informativa sulla privacy - CompressMyPic',
      '/terms': 'Termini di servizio - CompressMyPic',
      '/disclaimer': 'Disclaimer | CompressMyPic – Strumenti per immagini gratuiti',
      '/cookie-policy': 'Politica dei cookie | CompressMyPic – Come vengono usati i cookie',
      [IT_ALL_TOOLS_PATH]: 'Tutti gli strumenti immagine gratuiti | CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'Comprimere immagini per WhatsApp senza perdere qualità',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP: quale formato dovresti usare?',
      '/guides/reduce-image-size-to-100kb': 'Come ridurre le dimensioni di un’immagine a 100 KB per siti web ed email',
    };
    const staticTitlesId: Record<string, string> = {
      '/': idLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'Tentang CompressMyPic – Kompresor Gambar Online Gratis',
      '/contact': 'Hubungi Kami - CompressMyPic',
      '/privacy': 'Kebijakan Privasi - CompressMyPic',
      '/terms': 'Syarat Layanan - CompressMyPic',
      '/disclaimer': 'Penafian | CompressMyPic – Alat Gambar Gratis',
      '/cookie-policy': 'Kebijakan Cookie | CompressMyPic – Cara Cookie Digunakan',
      [ID_ALL_TOOLS_PATH]: 'Semua alat gambar online gratis | CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'Mengompres Gambar untuk WhatsApp Tanpa Kehilangan Kualitas',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP: Format Mana yang Harus Anda Gunakan?',
      '/guides/reduce-image-size-to-100kb': 'Cara Mengurangi Ukuran Gambar menjadi 100KB untuk Web & Email',
    };
    const staticTitlesRu: Record<string, string> = {
      '/': ruLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'О CompressMyPic – бесплатный online-компрессор изображений',
      '/contact': 'Связаться с нами — CompressMyPic',
      '/privacy': 'Политика конфиденциальности — CompressMyPic',
      '/terms': 'Условия использования — CompressMyPic',
      '/disclaimer': 'Отказ от ответственности | CompressMyPic – Бесплатные инструменты для изображений',
      '/cookie-policy': 'Политика использования файлов cookie | CompressMyPic – Как используются cookie',
      [RU_ALL_TOOLS_PATH]: 'Все бесплатные инструменты для изображений | CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'Как сжать изображения для WhatsApp без потери качества',
      '/guides/jpg-vs-png-vs-webp': 'JPG против PNG против WebP: какой формат выбрать?',
      '/guides/reduce-image-size-to-100kb': 'Как уменьшить размер изображения до 100 КБ для веба и электронной почты',
    };
    const staticTitlesJa: Record<string, string> = {
      '/': jaLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'CompressMyPicについて – 無料のオンライン画像圧縮ツール',
      '/contact': 'お問い合わせ - CompressMyPic',
      '/privacy': 'プライバシーポリシー - CompressMyPic',
      '/terms': '利用規約 - CompressMyPic',
      '/disclaimer': '免責事項 | CompressMyPic – 無料の画像ツール',
      '/cookie-policy': 'Cookieポリシー | CompressMyPic – Cookieの使い方',
      [JA_ALL_TOOLS_PATH]: 'すべての無料画像ツール | CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'WhatsApp用に画像を圧縮する方法｜画質を落とさず送る',
      '/guides/jpg-vs-png-vs-webp': 'JPG・PNG・WebPの違いと使い分け｜どれを選ぶべき？',
      '/guides/reduce-image-size-to-100kb': '画像サイズを100KBまで小さくする方法｜Web・メール用',
    };
    const staticTitlesKo: Record<string, string> = {
      '/': koLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'CompressMyPic 소개 – 무료 온라인 이미지 압축기',
      '/contact': '문의하기 - CompressMyPic',
      '/privacy': '개인정보처리방침 - CompressMyPic',
      '/terms': '이용약관 - CompressMyPic',
      '/disclaimer': '면책 조항 | CompressMyPic – 무료 이미지 도구',
      '/cookie-policy': '쿠키 정책 | CompressMyPic – 쿠키 사용 방법',
      [KO_ALL_TOOLS_PATH]: '모든 무료 이미지 도구 | CompressMyPic',
      '/guides/compress-images-for-whatsapp': '화질 저하 없이 WhatsApp용 이미지를 압축하는 방법',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP: 어떤 형식을 사용해야 할까요?',
      '/guides/reduce-image-size-to-100kb': '웹과 이메일용 이미지 크기를 100KB로 줄이는 방법',
    };
    const staticTitlesZh: Record<string, string> = {
      '/': zhLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': '关于 CompressMyPic – 免费在线图片压缩器',
      '/contact': '联系我们 - CompressMyPic',
      '/privacy': '隐私政策 - CompressMyPic',
      '/terms': '使用条款 - CompressMyPic',
      '/disclaimer': '免责声明 | CompressMyPic – 免费图片工具',
      '/cookie-policy': 'Cookie 政策 | CompressMyPic – Cookie 的使用方式',
      [ZH_ALL_TOOLS_PATH]: '全部免费图片工具 | CompressMyPic',
      '/guides/compress-images-for-whatsapp': '如何在 WhatsApp 上压缩图片而不损失画质',
      '/guides/jpg-vs-png-vs-webp': 'JPG、PNG、WebP 对比：应该选择哪种格式？',
      '/guides/reduce-image-size-to-100kb': '如何把图片压缩到 100KB：网站与邮件指南',
    };

    const staticDescriptionsEs: Record<string, string> = {
      '/disclaimer': 'Aviso legal de CompressMyPic: nuestras herramientas gratuitas se ofrecen tal cual, sin garantía. Lea los límites de responsabilidad y la exactitud de las guías.',
      '/cookie-policy': 'Política de cookies de CompressMyPic: nosotros no instalamos cookies. Descubra qué cookies usa Google Analytics y cómo controlarlas.',
      '/': esLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'Acerca de CompressMyPic: un compresor de imágenes online gratis para JPG, PNG y WebP, sin registro, sin marca de agua y sin subir nada a ningún servidor.',
      '/contact': '¿Tiene preguntas, comentarios o necesita ayuda? Escríbale a nuestro equipo con el formulario de abajo o contáctenos directamente por correo electrónico.',
      '/privacy': 'CompressMyPic procesa sus imágenes localmente en su navegador: nunca se suben a nuestros servidores y no recopilamos, almacenamos ni compartimos sus imágenes.',
      '/terms': 'Términos del servicio de CompressMyPic, el compresor de imágenes online gratis. Lea las reglas de uso de nuestras herramientas gratuitas: uso justo, su contenido y responsabilidad.',
      [ES_ALL_TOOLS_PATH]: 'Las 47 herramientas gratis de CompressMyPic para comprimir, convertir, recortar y editar imágenes online, directamente en tu navegador y sin registrarte.',
      '/guides/compress-images-for-whatsapp': 'Aprenda a comprimir imágenes para WhatsApp sin perder calidad. Gratis y privado, sin registro: reduzca sus fotos antes de enviarlas para que lleguen nítidas.',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP explicado de forma sencilla: compare tamaño, calidad y transparencia para elegir el formato adecuado para sus fotos, logotipos y sitios web.',
      '/guides/reduce-image-size-to-100kb': 'Reduzca el tamaño de una imagen a 100 KB para sitios web y correo electrónico con un compresor online gratis. Guía paso a paso, sin registro ni marca de agua.',
    };

    const staticDescriptionsPt: Record<string, string> = {
      '/disclaimer': 'Aviso legal do CompressMyPic: nossas ferramentas gratuitas são fornecidas como estão, sem garantia. Leia os limites de responsabilidade e a exatidão dos guias.',
      '/cookie-policy': 'Política de cookies do CompressMyPic: nós não definimos cookies. Saiba quais cookies o Google Analytics usa e como controlá-los.',
      '/': ptLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'Sobre o CompressMyPic: um compressor de imagens online grátis para JPG, PNG e WebP, sem cadastro, sem marca d’água e sem enviar nada para nenhum servidor.',
      '/contact': 'Tem perguntas, comentários ou precisa de ajuda? Escreva para nossa equipe com o formulário abaixo ou fale conosco diretamente por e-mail.',
      '/privacy': 'O CompressMyPic processa suas imagens localmente no seu navegador: elas nunca são enviadas para os nossos servidores e não coletamos, armazenamos nem compartilhamos suas imagens.',
      '/terms': 'Termos de Serviço do CompressMyPic, o compressor de imagens online grátis. Leia as regras de uso das nossas ferramentas gratuitas: uso justo, seu conteúdo e responsabilidade.',
      [PT_ALL_TOOLS_PATH]: 'As 47 ferramentas grátis do CompressMyPic para comprimir, converter, cortar e editar imagens JPG, PNG e WebP online, direto no seu navegador e sem cadastro.',
      '/guides/compress-images-for-whatsapp': 'Aprenda a comprimir imagens para WhatsApp sem perder qualidade. Grátis e privado, sem cadastro: reduza suas fotos antes de enviar para que cheguem nítidas.',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP explicado de forma simples: compare tamanho, qualidade e transparência para escolher o formato certo para suas fotos, logotipos e sites.',
      '/guides/reduce-image-size-to-100kb': 'Reduza o tamanho de uma imagem para 100 KB para sites e e-mail com um compressor online grátis. Guia passo a passo, sem cadastro nem marca d’água.',
    };

    const staticDescriptionsFr: Record<string, string> = {
      '/disclaimer': 'Avertissement de CompressMyPic : nos outils gratuits sont fournis tels quels, sans garantie. Lisez les limites de responsabilité et l’exactitude des guides.',
      '/cookie-policy': 'Politique relative aux cookies de CompressMyPic : nous ne définissons aucun cookie. Découvrez ceux de Google Analytics et comment les contrôler.',
      '/': frLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'À propos de CompressMyPic : un compresseur d’images online gratuit pour JPG, PNG et WebP, sans inscription, sans filigrane et sans rien envoyer vers un serveur.',
      '/contact': 'Vous avez des questions, des commentaires ou besoin d’aide ? Écrivez à notre équipe avec le formulaire ci-dessous ou contactez-nous directement par e-mail.',
      '/privacy': 'CompressMyPic traite vos images localement dans votre navigateur : elles ne sont jamais envoyées vers nos serveurs et nous ne collectons, ne stockons ni ne partageons vos images.',
      '/terms': 'Conditions d’utilisation de CompressMyPic, le compresseur d’images en ligne gratuit. Lisez les règles d’usage de nos outils gratuits : usage raisonnable, votre contenu et responsabilité.',
      [FR_ALL_TOOLS_PATH]: 'Les 47 outils gratuits de CompressMyPic pour compresser, convertir, recadrer et éditer des images en ligne, directement dans votre navigateur, sans inscription.',
      '/guides/compress-images-for-whatsapp': 'Apprenez à compresser des images pour WhatsApp sans perdre en qualité. Gratuit et privé, sans inscription : réduisez vos photos avant de les envoyer pour qu’elles arrivent nettes.',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP expliqué simplement : comparez taille, qualité et transparence pour choisir le bon format pour vos photos, logos et sites web.',
      '/guides/reduce-image-size-to-100kb': 'Réduisez la taille d’une image à 100 Ko pour les sites web et l’e-mail avec un compresseur online gratuit. Guide pas à pas, sans inscription ni filigrane.',
    };

    const staticDescriptionsDe: Record<string, string> = {
      '/disclaimer': 'Haftungsausschluss von CompressMyPic: Unsere kostenlosen Tools werden ohne Gewähr bereitgestellt. Lesen Sie die Haftungsgrenzen und Hinweise zur Genauigkeit.',
      '/cookie-policy': 'Cookie-Richtlinie von CompressMyPic: Wir setzen selbst keine Cookies. Erfahren Sie, welche Cookies Google Analytics verwendet und wie Sie sie steuern.',
      '/': deLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'Über CompressMyPic: ein kostenloser Online-Bildkomprimierer für JPG, PNG und WebP, ohne Anmeldung, ohne Wasserzeichen und ohne Upload auf einen Server.',
      '/contact': 'Haben Sie Fragen, Feedback oder brauchen Sie Hilfe? Wenden Sie sich über das Formular unten an unser Team oder kontaktieren Sie uns direkt per E-Mail.',
      '/privacy': 'CompressMyPic verarbeitet Ihre Bilder lokal in Ihrem Browser: Sie werden niemals auf unsere Server hochgeladen, und wir erfassen, speichern oder teilen Ihre Bilder nicht.',
      '/terms': 'Nutzungsbedingungen von CompressMyPic, dem kostenlosen Online-Bildkomprimierer. Lesen Sie die Regeln für unsere kostenlosen Tools: faire Nutzung, Ihre Inhalte und Haftung.',
      [DE_ALL_TOOLS_PATH]: 'Alle 47 kostenlosen Bildtools von CompressMyPic: Bilder online komprimieren, konvertieren, zuschneiden und bearbeiten – direkt im Browser, ohne Anmeldung.',
      '/guides/compress-images-for-whatsapp': 'Lernen Sie, Bilder für WhatsApp zu komprimieren, ohne Qualität zu verlieren. Kostenlos und privat, ohne Anmeldung: Verkleinern Sie Ihre Fotos vor dem Senden, damit sie scharf ankommen.',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP einfach erklärt: Vergleichen Sie Größe, Qualität und Transparenz, um das richtige Format für Ihre Fotos, Logos und Websites zu wählen.',
      '/guides/reduce-image-size-to-100kb': 'Verkleinern Sie ein Bild auf 100 KB für Websites und E-Mails mit einem kostenlosen Online-Komprimierer. Schritt-für-Schritt-Anleitung, ohne Anmeldung und ohne Wasserzeichen.',
    };

    const staticDescriptionsIt: Record<string, string> = {
      '/disclaimer': 'Disclaimer di CompressMyPic: i nostri strumenti gratuiti sono forniti così come sono, senza garanzia. Leggi i limiti di responsabilità e l’accuratezza delle guide.',
      '/cookie-policy': 'Politica dei cookie di CompressMyPic: noi non impostiamo cookie. Scopri quali cookie usa Google Analytics e come controllarli.',
      '/': itLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'Chi è CompressMyPic: un compressore di immagini online gratuito per JPG, PNG e WebP, senza registrazione, senza filigrana e senza caricare nulla su nessun server.',
      '/contact': 'Hai domande, commenti o hai bisogno di aiuto? Scrivi al nostro team con il modulo qui sotto, oppure contattaci direttamente via email.',
      '/privacy': 'CompressMyPic elabora le tue immagini localmente nel tuo browser: non vengono mai caricate sui nostri server e non raccogliamo, archiviamo né condividiamo le tue immagini.',
      '/terms': 'Termini di servizio di CompressMyPic, il compressore di immagini online gratuito. Leggi le regole per usare i nostri strumenti gratuiti: uso corretto, i tuoi contenuti e responsabilità.',
      [IT_ALL_TOOLS_PATH]: 'I 47 strumenti gratuiti di CompressMyPic per comprimere, convertire, ritagliare e modificare immagini online, direttamente nel browser e senza registrazione.',
      '/guides/compress-images-for-whatsapp': 'Impara a comprimere le immagini per WhatsApp senza perdere qualità. Gratis e privato, senza registrazione: riduci le tue foto prima di inviarle, così arrivano nitide.',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP spiegato in modo semplice: confronta dimensioni, qualità e trasparenza per scegliere il formato giusto per le tue foto, i tuoi loghi e i tuoi siti.',
      '/guides/reduce-image-size-to-100kb': 'Riduci le dimensioni di un’immagine a 100 KB per siti web ed email con un compressore online gratuito. Guida passo passo, senza registrazione né filigrana.',
    };
    const staticDescriptionsId: Record<string, string> = {
      '/disclaimer': 'Penafian CompressMyPic: alat gratis kami disediakan apa adanya, tanpa jaminan. Baca batasan tanggung jawab dan keakuratan panduan kami.',
      '/cookie-policy': 'Kebijakan Cookie CompressMyPic: kami tidak memasang cookie sendiri. Pelajari cookie yang digunakan Google Analytics serta cara mengendalikannya.',
      '/': idLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'CompressMyPic adalah kompresor gambar gratis dan privat. Kompres gambar JPG, PNG, dan WebP langsung di browser Anda — cepat, aman, dan tanpa mengunggah file Anda ke mana pun.',
      '/contact': 'Punya pertanyaan, masukan, atau butuh bantuan? Hubungi tim kami melalui formulir di bawah ini, atau hubungi kami langsung lewat email.',
      '/privacy': 'CompressMyPic adalah kompresor gambar online gratis. Gambar diproses secara lokal di browser Anda menggunakan HTML5 Canvas — gambar tidak pernah diunggah ke server kami, dan kami tidak mengumpulkan, menyimpan, atau membagikan gambar Anda.',
      '/terms': 'Syarat Layanan CompressMyPic, kompresor gambar online gratis. Baca aturan penggunaan alat gratis kami: penggunaan wajar, konten Anda, dan tanggung jawab.',
      [ID_ALL_TOOLS_PATH]: '47 alat gambar gratis CompressMyPic untuk mengompres, mengonversi, memotong, dan mengedit gambar online — langsung di browser Anda, tanpa perlu mendaftar.',
      '/guides/compress-images-for-whatsapp': 'WhatsApp memperkecil setiap foto yang Anda kirim — sering kali jauh lebih kecil dari yang seharusnya. Kompres foto Anda sendiri terlebih dahulu, lalu kirim dengan cara yang tepat, dan foto akan tiba dalam keadaan tajam, cepat terkirim, dan hemat kuota.',
      '/guides/jpg-vs-png-vs-webp': 'Memilih format yang salah dapat membuat gambar Anda sepuluh kali lebih besar dari yang seharusnya — atau merusak logo transparan. Berikut perbandingan yang sederhana dan jujur, serta cara beralih antar format dalam hitungan detik.',
      '/guides/reduce-image-size-to-100kb': 'Foto sebesar 4 MB memperlambat situs web Anda dan menyumbat email. Mengecilkannya menjadi sekitar 100KB membuat halaman dimuat dengan cepat dan email terkirim seketika.',
    };
    const staticDescriptionsRu: Record<string, string> = {
      '/disclaimer': 'Отказ от ответственности CompressMyPic: наши бесплатные инструменты предоставляются как есть, без гарантий. Прочтите об ограничениях ответственности.',
      '/cookie-policy': 'Политика использования файлов cookie CompressMyPic: мы сами не устанавливаем cookie. Узнайте, какие cookie использует Google Analytics и как ими управлять.',
      '/': ruLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'CompressMyPic — это бесплатный и приватный компрессор изображений. Сжимайте изображения JPG, PNG и WebP прямо в браузере — быстро, безопасно и без загрузки файлов куда-либо.',
      '/contact': 'Есть вопросы, отзывы или нужна помощь? Обратитесь к нашей команде через форму ниже или свяжитесь с нами напрямую по электронной почте.',
      '/privacy': 'CompressMyPic — это бесплатный online-компрессор изображений. Изображения обрабатываются локально в вашем браузере с помощью HTML5 Canvas — они никогда не загружаются на наши серверы, и мы не собираем, не храним и не передаём ваши изображения.',
      '/terms': 'Условия использования CompressMyPic — бесплатного онлайн-компрессора изображений. Прочитайте правила использования наших бесплатных инструментов: добросовестное использование, ваш контент и ответственность.',
      [RU_ALL_TOOLS_PATH]: 'Все 47 бесплатных инструментов CompressMyPic для сжатия, конвертации, обрезки и редактирования изображений онлайн — прямо в браузере, без регистрации.',
      '/guides/compress-images-for-whatsapp': 'WhatsApp уменьшает каждую фотографию, которую вы отправляете, — зачастую гораздо сильнее, чем нужно. Сожмите фотографии сами заранее, а затем отправьте их правильным способом, и они дойдут чёткими, отправятся быстро и израсходуют меньше мобильного трафика.',
      '/guides/jpg-vs-png-vs-webp': 'Неправильный формат может сделать ваше изображение в десять раз больше, чем нужно, или испортить прозрачный логотип. Вот простое и честное сравнение, а также то, как конвертировать между форматами за секунды.',
      '/guides/reduce-image-size-to-100kb': 'Фотография на 4 МБ замедляет ваш сайт и забивает электронную почту. Уменьшение её примерно до 100 КБ делает страницы быстрыми, а письма отправляются мгновенно.',
    };
    const staticDescriptionsJa: Record<string, string> = {
      '/disclaimer': 'CompressMyPicの免責事項：無料ツールは現状のまま提供され、保証はありません。責任の範囲とガイドの正確性についてお読みください。',
      '/cookie-policy': 'CompressMyPicのCookieポリシー：当サイト自体はCookieを設定しません。Googleアドセンスとアナリティクスが使用するCookieとその管理方法をご覧ください。',
      '/': jaLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'CompressMyPicは、無料でプライバシーを守る画像圧縮ツールです。JPG、PNG、WebPの画像をブラウザー上で直接圧縮できます。速く、安全で、ファイルをどこにもアップロードしません。',
      '/contact': 'ご質問やご感想、サポートが必要な場合は、下のフォームからご連絡いただくか、メールで直接お問い合わせください。',
      '/privacy': 'CompressMyPicは、無料のオンライン画像圧縮ツールです。画像はHTML5 Canvasを使ってお使いのブラウザー上でローカルに処理されます。画像が当社のサーバーにアップロードされることは決してなく、当社は画像を収集、保存、共有しません。',
      '/terms': 'CompressMyPic（無料オンライン画像圧縮ツール）の利用規約。無料ツールの利用ルール（公正な利用、コンテンツ、責任など）をご確認ください。',
      [JA_ALL_TOOLS_PATH]: 'CompressMyPicの無料画像ツール47種類：画像の圧縮、変換、切り抜き、編集、リサイズがブラウザー上で直接でき、登録不要。JPG、PNG、WebP、HEICに対応し、写真はアップロードされません。',
      '/guides/compress-images-for-whatsapp': 'WhatsAppは送る写真をすべて縮小します。しかも、必要以上に小さくしてしまうことがよくあります。まず自分で写真を圧縮し、正しい方法で送れば、写真はくっきりしたまま届き、速く送れて、モバイルデータも少なく済みます。',
      '/guides/jpg-vs-png-vs-webp': '間違った形式を選ぶと、画像が必要以上に10倍も大きくなったり、透明なロゴが台無しになったりします。シンプルで正直な比較と、数秒で形式を変換する方法を紹介します。',
      '/guides/reduce-image-size-to-100kb': '4MBの写真はウェブサイトを遅くし、メールも詰まらせます。100KB程度まで小さくすれば、ページは速く読み込まれ、メールもすぐに送れます。正しく行えば、誰にも違いはわかりません。',
    };
    const staticDescriptionsKo: Record<string, string> = {
      '/disclaimer': 'CompressMyPic 면책 조항: 무료 도구는 있는 그대로 제공되며 보증이 없습니다. 책임 범위와 가이드 정확성에 대해 읽어보세요.',
      '/cookie-policy': 'CompressMyPic 쿠키 정책: 저희는 직접 쿠키를 설정하지 않습니다. Google 애드센스와 애널리틱스가 사용하는 쿠키와 관리 방법을 알아보세요.',
      '/': koLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'CompressMyPic은 무료이며 개인정보를 보호하는 이미지 압축기입니다. JPG, PNG, WebP 이미지를 브라우저에서 바로 압축하세요. 빠르고 안전하며, 파일을 어디에도 업로드하지 않습니다.',
      '/contact': '질문, 피드백이 있거나 도움이 필요하신가요? 아래 양식을 이용해 팀에 연락하거나 이메일로 직접 문의해 주세요.',
      '/privacy': 'CompressMyPic은 무료 온라인 이미지 압축기입니다. 이미지는 HTML5 Canvas를 이용해 사용자의 브라우저에서 로컬로 처리됩니다. 이미지는 절대 저희 서버에 업로드되지 않으며, 저희는 사용자의 이미지를 수집, 저장, 공유하지 않습니다.',
      '/terms': '무료 온라인 이미지 압축기 CompressMyPic의 이용약관. 무료 도구 이용 규칙(공정한 이용, 콘텐츠, 책임 등)을 확인하세요.',
      [KO_ALL_TOOLS_PATH]: 'CompressMyPic의 무료 이미지 도구 47가지로 이미지를 압축, 변환, 자르고, 크기를 조정하세요. 브라우저에서 바로 사용 가능하며 가입이 필요 없고, JPG, PNG, WebP, HEIC를 지원합니다.',
      '/guides/compress-images-for-whatsapp': 'WhatsApp은 보내는 모든 사진을 축소합니다. 종종 필요한 것보다 훨씬 더 많이요. 사진을 먼저 직접 압축한 뒤 올바른 방법으로 보내면 사진이 선명하게 도착하고, 빠르게 전송되며, 모바일 데이터도 적게 사용합니다.',
      '/guides/jpg-vs-png-vs-webp': '잘못된 형식을 선택하면 이미지가 필요한 것보다 10배 커지거나 투명한 로고가 망가질 수 있습니다. 간단하고 정직한 비교와 몇 초 만에 형식을 변환하는 방법을 소개합니다.',
      '/guides/reduce-image-size-to-100kb': '4MB 사진은 웹사이트를 느리게 만들고 이메일을 막히게 합니다. 약 100KB로 줄이면 페이지가 빠르게 로드되고 이메일이 즉시 전송됩니다. 제대로 하면 아무도 차이를 알아차리지 못합니다.',
    };
    const staticDescriptionsZh: Record<string, string> = {
      '/disclaimer': 'CompressMyPic 免责声明：我们的免费图片工具按原样提供，不作任何保证。请阅读责任范围与指南准确性说明。',
      '/cookie-policy': 'CompressMyPic Cookie 政策：我们自己不设置 Cookie。了解 Google Analytics 使用的 Cookie 以及如何管理它们。',
      '/': zhLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'CompressMyPic 是一款免费、私密的图片压缩器。直接在浏览器中压缩 JPG、PNG 与 WebP 图片——快速、安全，无需把文件上传到任何地方。',
      '/contact': '有问题、反馈或需要帮助？请使用下面的表格联系我们的团队，或直接通过邮箱联系我们。',
      '/privacy': 'CompressMyPic 是一款免费在线图片压缩器。图片使用 HTML5 Canvas 在您的浏览器本地处理——图片绝不会上传到我们的服务器，我们也不会收集、存储或分享您的图片。',
      '/terms': 'CompressMyPic（免费在线图片压缩器）使用条款。请阅读免费工具的使用规则：合理使用、您的内容与责任等。',
      [ZH_ALL_TOOLS_PATH]: 'CompressMyPic 免费图片工具共 47 款：在线压缩、转换、裁剪、调整大小与编辑图片，直接在浏览器中使用，无需注册，支持 JPG、PNG、WebP 与 HEIC，图片不会上传。',
      '/guides/compress-images-for-whatsapp': 'WhatsApp 会缩小你发送的每一张照片——往往缩得比实际需要的多得多。先自己压缩照片，再用正确的方式发送，照片就会保持清晰、发送快速，还能节省流量。',
      '/guides/jpg-vs-png-vs-webp': '选错格式可能让你的图片比实际需要的大十倍——或者毁掉一个透明标志。下面是简单、诚实的对比，以及如何在几秒钟内转换格式。',
      '/guides/reduce-image-size-to-100kb': '一张 4 MB 的照片会拖慢你的网站，还会堵塞邮件。把它缩小到约 100KB，页面加载会变快，邮件也能即时发送——而且如果方法得当，没有人能看出差别。',
    };

    const staticTitlesBn: Record<string, string> = {
      '/': bnLocale?.ui.homeMeta.seoTitle ?? '',
      '/about': 'আমাদের সম্পর্কে – CompressMyPic, বিনামূল্যে অনলাইন ইমেজ কমপ্রেসর',
      '/contact': 'যোগাযোগ করুন – CompressMyPic',
      '/privacy': 'গোপনীয়তা নীতি – CompressMyPic',
      '/terms': 'পরিষেবার শর্তাবলি – CompressMyPic',
      '/disclaimer': 'দাবিত্যাগ | CompressMyPic – বিনামূল্যে ইমেজ টুলস',
      '/cookie-policy': 'কুকি নীতি | CompressMyPic – কুকি কীভাবে ব্যবহৃত হয়',
      [BN_ALL_TOOLS_PATH]: 'সব বিনামূল্যে ইমেজ টুলস | CompressMyPic',
      '/guides/compress-images-for-whatsapp': 'WhatsApp-এর জন্য ইমেজ কমপ্রেস কীভাবে করবেন – মান না হারিয়ে',
      '/guides/jpg-vs-png-vs-webp': 'JPG vs PNG vs WebP: কোন ফরম্যাট বেছে নেবেন?',
      '/guides/reduce-image-size-to-100kb': 'ওয়েব ও ইমেলের জন্য ইমেজ 100 KB-তে কীভাবে ছোট করবেন',
    };

    const staticDescriptionsBn: Record<string, string> = {
      '/disclaimer': 'CompressMyPic দাবিত্যাগ: আমাদের বিনামূল্যে ইমেজ টুলস যেমন আছে তেমনই দেওয়া হয়, কোনো ওয়ারেন্টি ছাড়া। দায়ের সীমা ও গাইডগুলোর নির্ভুলতা সম্পর্কে পড়ুন।',
      '/cookie-policy': 'CompressMyPic কুকি নীতি: আমরা নিজেরা কোনো কুকি সেট করি না। Google Analytics কোন কুকিগুলো ব্যবহার করে এবং সেগুলো কীভাবে নিয়ন্ত্রণ করবেন, জানুন।',
      '/': bnLocale?.ui.homeMeta.seoDescription ?? '',
      '/about': 'CompressMyPic একটি বিনামূল্যে, প্রাইভেট ইমেজ কমপ্রেসর। JPG, PNG ও WebP ইমেজ সরাসরি আপনার ব্রাউজারে কমপ্রেস করুন — দ্রুত, নিরাপদ, ফাইল কোথাও আপলোড না করেই।',
      '/contact': 'কোনো প্রশ্ন, মতামত বা সাহায্য দরকার? নিচের ফর্ম থেকে আমাদের দলের সঙ্গে যোগাযোগ করুন, অথবা সরাসরি ইমেল করুন।',
      '/privacy': 'CompressMyPic একটি বিনামূল্যে অনলাইন ইমেজ কমপ্রেসর। ইমেজ HTML5 Canvas দিয়ে আপনার ব্রাউজারেই লোকালভাবে প্রসেস হয় — সেগুলো কখনো আমাদের সার্ভারে আপলোড হয় না, এবং আমরা আপনার ইমেজ সংগ্রহ, সংরক্ষণ বা শেয়ার করি না।',
      '/terms': 'CompressMyPic (বিনামূল্যে অনলাইন ইমেজ কমপ্রেসর)-এর পরিষেবার শর্তাবলি। বিনামূল্যে টুলস ব্যবহারের নিয়ম পড়ুন: যথাযথ ব্যবহার, আপনার কনটেন্ট ও দায়িত্ব।',
      [BN_ALL_TOOLS_PATH]: 'CompressMyPic-এর 47টি বিনামূল্যে ইমেজ টুলস: আপনার ব্রাউজারেই ইমেজ কমপ্রেস, কনভার্ট, রিসাইজ, ক্রপ ও এডিট করুন। সাইনআপ ছাড়াই, JPG, PNG, WebP ও HEIC সাপোর্টসহ।',
      '/guides/compress-images-for-whatsapp': 'WhatsApp আপনার পাঠানো প্রতিটি ছবিকে ছোট করে দেয় — প্রায়ই প্রয়োজনের চেয়ে অনেক বেশি। আগে নিজে ইমেজ কমপ্রেস করুন, তারপর সঠিকভাবে পাঠান — ছবি পরিষ্কার থাকবে, দ্রুত যাবে আর মোবাইল ডেটাও বাঁচবে।',
      '/guides/jpg-vs-png-vs-webp': 'ভুল ফরম্যাট বাছলে আপনার ইমেজ প্রয়োজনের চেয়ে 10 গুণ বড় হতে পারে — অথবা স্বচ্ছ লোগো নষ্ট হতে পারে। এখানে সহজ, সৎ তুলনা আছে আর কয়েক সেকেন্ডে ফরম্যাট বদলানোর উপায়।',
      '/guides/reduce-image-size-to-100kb': '4 MB-এর ছবি আপনার ওয়েবসাইটকে ধীর করে দেয় আর ইমেল আটকে যায়। সেটিকে প্রায় 100KB-তে ছোট করুন — পেজ দ্রুত লোড হবে, ইমেল সঙ্গে সঙ্গে যাবে — আর সঠিকভাবে করলে কেউ পার্থক্য বুঝতে পারবে না।',
    };

    const langTitles =
      lang === 'es' ? staticTitlesEs : lang === 'pt' ? staticTitlesPt : lang === 'fr' ? staticTitlesFr : lang === 'de' ? staticTitlesDe : lang === 'it' ? staticTitlesIt : lang === 'id' ? staticTitlesId : lang === 'ru' ? staticTitlesRu : lang === 'ja' ? staticTitlesJa : lang === 'ko' ? staticTitlesKo : lang === 'zh' ? staticTitlesZh : lang === 'bn' ? staticTitlesBn : undefined;
    const langDescriptions =
      lang === 'es' ? staticDescriptionsEs : lang === 'pt' ? staticDescriptionsPt : lang === 'fr' ? staticDescriptionsFr : lang === 'de' ? staticDescriptionsDe : lang === 'it' ? staticDescriptionsIt : lang === 'id' ? staticDescriptionsId : lang === 'ru' ? staticDescriptionsRu : lang === 'ja' ? staticDescriptionsJa : lang === 'ko' ? staticDescriptionsKo : lang === 'zh' ? staticDescriptionsZh : lang === 'bn' ? staticDescriptionsBn : undefined;
    // --- Blog (Batch 2) ---
    // Title/description come from the registry + locale overrides, per
    // language. The blog home and category hubs use the blog UI strings;
    // articles use the localized article version. An article not yet
    // published in the active language gets the EN title/description, an EN
    // canonical and noindex (the page itself shows a notice, not a 404).
    const catLabelsForSeo = activeLocale?.categories ?? TOOL_CATEGORIES;
    let blogTitle: string | undefined;
    let blogDesc: string | undefined;
    let blogNoIndex = false;
    if (blogRoute) {
      if (blogRoute.kind === 'home') {
        blogTitle = `${blogStrings.homeHeading} | CompressMyPic`;
        blogDesc = blogStrings.homeSubheading;
      } else if (blogRoute.kind === 'category') {
        const catLabel = getBlogCategoryLabel(blogRoute.categoryId, catLabelsForSeo);
        blogTitle = `${blogStrings.categoryGuidesHeading.replace('{category}', catLabel)} | CompressMyPic`;
        blogDesc = blogStrings.homeSubheading;
      } else if (blogRoute.kind === 'article' && blogArticle) {
        const version = getBlogArticleVersion(blogArticle, lang, blogOverrides);
        blogTitle = `${version.title} | CompressMyPic`;
        blogDesc = version.description;
        if (!isBlogArticlePublishedIn(blogArticle, lang)) {
          blogNoIndex = true;
          blogTitle = `${blogArticle.en.title} | CompressMyPic`;
          blogDesc = blogArticle.en.description;
        }
      }
    }

    const nextTitle =
      blogTitle ||
      toolMeta?.seoTitle ||
      langTitles?.[currentPath] ||
      staticTitles[currentPath] ||
      'Free Image Compressor Online – Reduce Image Size to 100KB';
    const nextDesc =
      blogDesc ||
      toolMeta?.seoDescription ||
      langDescriptions?.[currentPath] ||
      staticDescriptions[currentPath] ||
      staticDescriptions['/'];
    // M1 (re-audit 2026-11-15): canonicals are trailing-slash URLs — pages
    // serve at /tool/ (the slash-less form 308-redirects). A not-yet-
    // translated article canonicalizes to its English version.
    const nextCanonical =
      blogNoIndex && blogArticle
        ? `${baseDomain}${withTrailingSlash(getBlogArticleUrl(blogArticle, 'en'))}`
        : `${baseDomain}${withTrailingSlash(toLocalizedPath(currentPath, lang))}`;

    // Blog notice pages (article not published in this language) are
    // noindex; every other route restores the default from index.html.
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', blogNoIndex ? 'noindex, nofollow' : 'index, follow');
    }

    document.title = nextTitle;
    if (canonicalLink) canonicalLink.href = nextCanonical;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', nextDesc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', nextTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', nextDesc);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', nextCanonical);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', nextTitle);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', nextDesc);

    // Phase 7 (F1+F3): per-language og:locale (+10 alternates, UPDATE the
    // existing tag, never a second og:locale) and localized image alt text.
    // Same mapping as ToolPageLayout via getOgLocale()/getOgLocaleAlternates();
    // the image stays the single shared branded og-image.png and the alt is
    // the page's localized title, never an English fallback.
    const setOgLocaleTags = (locale: string, alternateLocales: string[]) => {
      let el = document.head.querySelector<HTMLMetaElement>('meta[property="og:locale"]');
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', 'og:locale');
        document.head.appendChild(el);
      }
      el.setAttribute('content', locale);
      document
        .head
        .querySelectorAll('meta[property="og:locale:alternate"]')
        .forEach((old) => old.remove());
      for (const alt of alternateLocales) {
        const altEl = document.createElement('meta');
        altEl.setAttribute('property', 'og:locale:alternate');
        altEl.setAttribute('content', alt);
        document.head.appendChild(altEl);
      }
    };
    setOgLocaleTags(getOgLocale(lang), getOgLocaleAlternates(lang));

    const setMetaContent = (
      selector: string,
      attrKey: 'name' | 'property',
      attrVal: string,
      content: string
    ) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrKey, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMetaContent('meta[property="og:image:alt"]', 'property', 'og:image:alt', nextTitle);
    setMetaContent('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', nextTitle);

    // Quick wins (2026-11-16): guide pages are articles, everything else is
    // a website. Guide pages carry article:published_time matching the
    // datePublished in their JSON-LD (2026-11-14 for all 3 guides, all
    // locales). Non-guide routes explicitly reset og:type and drop the tag
    // so SPA navigation away from a guide never leaves a stale "article".
    // parsePath() normalizes every localized guide URL back to its EN
    // canonical currentPath (via the EN_PATH_BY_<LANG> slug maps), so one
    // '/guides/' prefix check covers all 11 locales.
    const isGuidePage = currentPath.startsWith('/guides/');
    // Blog articles are articles too (og:type article + published/modified
    // times from the registry); a not-yet-translated article is a notice
    // page, so it stays a website with no article times.
    const isBlogArticlePage =
      blogRoute?.kind === 'article' && blogArticle !== undefined && !blogNoIndex;
    setMetaContent(
      'meta[property="og:type"]',
      'property',
      'og:type',
      isGuidePage || isBlogArticlePage ? 'article' : 'website'
    );
    // Per-article OG image (article-images pilot): each article gets its own
    // branded 1200x630 card at /blog-images/<id>-<lang>.png (generated by
    // scripts/generate-blog-images.py). Tool routes are owned by
    // ToolPageLayout, so the generic reset below skips them; not-yet-
    // translated articles (blogNoIndex) keep the shared og-image.png.
    if (isBlogArticlePage && blogArticle) {
      const articleImageUrl = `${baseDomain}/blog-images/${blogArticle.id}-${lang}.png`;
      setMetaContent('meta[property="og:image"]', 'property', 'og:image', articleImageUrl);
      setMetaContent('meta[name="twitter:image"]', 'name', 'twitter:image', articleImageUrl);
    } else if (!toolMeta) {
      setMetaContent(
        'meta[property="og:image"]',
        'property',
        'og:image',
        `${baseDomain}/og-image.png?v=2`
      );
      setMetaContent(
        'meta[name="twitter:image"]',
        'name',
        'twitter:image',
        `${baseDomain}/og-image.png?v=2`
      );
    }
    if (isGuidePage) {
      setMetaContent(
        'meta[property="article:published_time"]',
        'property',
        'article:published_time',
        '2026-11-14T00:00:00+04:00'
      );
    } else if (isBlogArticlePage && blogArticle) {
      setMetaContent(
        'meta[property="article:published_time"]',
        'property',
        'article:published_time',
        new Date(blogArticle.publishedAt).toISOString()
      );
      if (blogArticle.updatedAt) {
        setMetaContent(
          'meta[property="article:modified_time"]',
          'property',
          'article:modified_time',
          new Date(blogArticle.updatedAt).toISOString()
        );
      } else {
        document.head.querySelector('meta[property="article:modified_time"]')?.remove();
      }
    } else {
      document.head.querySelector('meta[property="article:published_time"]')?.remove();
      document.head.querySelector('meta[property="article:modified_time"]')?.remove();
    }

    // hreflang: App owns home/legal/directory/guide pages; ToolPageLayout owns
    // tool pages, so App never writes (or removes) alternates for a translated
    // tool page — its layout writes them. For every other page without a
    // Spanish equivalent, stale alternates are removed.
    const setHreflangLinks = (items: Array<{ lang: string; href: string }>) => {
      for (const item of items) {
        let el = document.head.querySelector<HTMLLinkElement>(
          `link[rel="alternate"][hreflang="${item.lang}"]`
        );
        if (!el) {
          el = document.createElement('link');
          el.setAttribute('rel', 'alternate');
          el.setAttribute('hreflang', item.lang);
          el.setAttribute('href', item.href);
          document.head.appendChild(el);
        } else {
          el.setAttribute('href', item.href);
        }
      }
    };
    const removeHreflangLinks = () => {
      document.querySelectorAll('link[rel="alternate"]').forEach((el) => el.remove());
    };
    // '/' is the home entry in the registry, not a tool page — it must get
    // App-owned hreflang like any other non-tool page.
    const isToolPage = currentPath !== '/' && Boolean(TOOL_META_BY_SLUG[currentPath]);
    const isDirectoryPath =
      currentPath === ES_ALL_TOOLS_PATH ||
      currentPath === PT_ALL_TOOLS_PATH ||
      currentPath === FR_ALL_TOOLS_PATH ||
      currentPath === DE_ALL_TOOLS_PATH ||
      currentPath === IT_ALL_TOOLS_PATH ||
      currentPath === ID_ALL_TOOLS_PATH ||
      currentPath === RU_ALL_TOOLS_PATH ||
      currentPath === JA_ALL_TOOLS_PATH ||
      currentPath === KO_ALL_TOOLS_PATH ||
      currentPath === ZH_ALL_TOOLS_PATH ||
      currentPath === BN_ALL_TOOLS_PATH;
    const hasLocalizedEquivalent =
      currentPath === '/' ||
      isDirectoryPath ||
      Boolean(
        ES_PATH_BY_EN[currentPath] ??
          PT_PATH_BY_EN[currentPath] ??
          FR_PATH_BY_EN[currentPath] ??
          DE_PATH_BY_EN[currentPath] ??
          IT_PATH_BY_EN[currentPath] ??
          ID_PATH_BY_EN[currentPath] ??
          RU_PATH_BY_EN[currentPath] ??
          JA_PATH_BY_EN[currentPath] ??
          KO_PATH_BY_EN[currentPath] ??
          ZH_PATH_BY_EN[currentPath] ??
          BN_PATH_BY_EN[currentPath]
      );
    const toolPageOwnedByLayout =
      isToolPage && lang !== 'en' && Boolean(activeLocale?.tools[currentPath]);
    if (blogRoute) {
      // Blog pages: alternates ONLY for published locales (from the slug
      // maps, via the registry helpers) — never a draft locale. The generic
      // branch below would link all 12 languages, including untranslated
      // ones. A not-yet-translated article gets no hreflang at all — its EN
      // canonical is the only version.
      if (blogRoute.kind === 'article' && blogNoIndex) {
        removeHreflangLinks();
      } else if (blogRoute.kind === 'article' && blogArticle) {
        setHreflangLinks(getBlogArticleAlternates(blogArticle));
      } else if (blogRoute.kind === 'category') {
        setHreflangLinks(getBlogCategoryAlternates(blogRoute.categoryId));
      } else {
        setHreflangLinks(getBlogHomeAlternates());
      }
    } else if (toolPageOwnedByLayout) {
      // Translated tool page: ToolPageLayout writes the alternates.
    } else if (!isToolPage && hasLocalizedEquivalent) {
      // A localized directory has no standalone English page — its English
      // equivalent is the home page (which hosts the tools directory section).
      // M1 (re-audit 2026-11-15): hreflang hrefs are trailing-slash URLs.
      const enEquivalent = isDirectoryPath ? '/' : currentPath;
      const hreflangHref = (p: string) => `${baseDomain}${withTrailingSlash(p)}`;
      setHreflangLinks([
        { lang: 'en', href: hreflangHref(enEquivalent) },
        { lang: 'es', href: hreflangHref(toLocalizedPath(currentPath, 'es')) },
        { lang: 'pt', href: hreflangHref(toLocalizedPath(currentPath, 'pt')) },
        { lang: 'fr', href: hreflangHref(toLocalizedPath(currentPath, 'fr')) },
        { lang: 'de', href: hreflangHref(toLocalizedPath(currentPath, 'de')) },
        { lang: 'it', href: hreflangHref(toLocalizedPath(currentPath, 'it')) },
        { lang: 'id', href: hreflangHref(toLocalizedPath(currentPath, 'id')) },
        { lang: 'ru', href: hreflangHref(toLocalizedPath(currentPath, 'ru')) },
        { lang: 'ja', href: hreflangHref(toLocalizedPath(currentPath, 'ja')) },
        { lang: 'ko', href: hreflangHref(toLocalizedPath(currentPath, 'ko')) },
        { lang: 'zh', href: hreflangHref(toLocalizedPath(currentPath, 'zh')) },
        { lang: 'bn', href: hreflangHref(toLocalizedPath(currentPath, 'bn')) },
        { lang: 'x-default', href: hreflangHref(enEquivalent) },
      ]);
    } else if (isToolPage && hasLocalizedEquivalent && lang === 'en') {
      // English tool page with translated equivalents: ToolPageLayout only
      // writes alternates on the translated side (pages pass `alternates`
      // only when lang !== 'en'), so App writes the reciprocal set here —
      // otherwise the English page carries no hreflang at all and Google
      // treats the translated pages' annotations as non-reciprocal.
      setHreflangLinks(getAlternates(currentPath));
    } else if (!isToolPage) {
      // Phase 7 (F7): never strip hreflang from a tool page — ToolPageLayout
      // owns those links, and a future untranslated tool must keep whatever
      // hreflang it has rather than losing it here.
      removeHreflangLinks();
    }

    // Phase 7 (F2): home-page FAQPage + HowTo JSON-LD, injected per language
    // from the exact data the home page renders (EN: FAQ_DATA +
    // HOW_IT_WORKS_STEPS; localized: activeUi.faqSection.faqs +
    // activeUi.educational.sections[2] "How It Works" bullets, split on the
    // first ': ' exactly as EducationalContent renders them). This replaces
    // the static EN FAQPage/HowTo blocks removed from index.html, so the
    // home page carries exactly 1 localized FAQPage + 1 localized HowTo
    // (plus the static WebApplication) in every language. Tool and guide
    // pages inject their own blocks and never get this one.
    const splitBullet = (bullet: string): { title: string; description: string } => {
      const idx = bullet.indexOf(': ');
      if (idx === -1) return { title: bullet, description: '' };
      return { title: bullet.slice(0, idx), description: bullet.slice(idx + 2) };
    };
    const homeJsonLdId = 'home-jsonld';
    const existingHomeJsonLd = document.getElementById(homeJsonLdId);
    if (currentPath === '/') {
      const homeFaqs = activeUi ? activeUi.faqSection.faqs : FAQ_DATA;
      const howToSection = activeUi ? activeUi.educational.sections[2] : undefined;
      const howToBullets: string[] =
        howToSection && 'bullets' in howToSection && howToSection.bullets
          ? [...howToSection.bullets]
          : [];
      const graph: Record<string, unknown>[] = [];
      const howToSteps = activeUi
        ? howToBullets.map((bullet, i) => {
            const { title, description } = splitBullet(bullet);
            return {
              '@type': 'HowToStep',
              position: i + 1,
              name: title,
              text: description || bullet,
            };
          })
        : HOW_IT_WORKS_STEPS.map((s, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: s.title,
            text: s.description,
          }));
      if (howToSteps.length > 0) {
        graph.push({
          '@type': 'HowTo',
          name: activeUi
            ? howToSection?.heading
            : 'How to Compress Images Online with CompressMyPic',
          description: activeUi
            ? howToSection?.body ?? ''
            : 'Compress image online free in three steps: upload your images, adjust the quality, and download the compressed files.',
          url: nextCanonical,
          step: howToSteps,
        });
      }
      if (homeFaqs.length > 0) {
        graph.push({
          '@type': 'FAQPage',
          name: activeUi ? activeUi.faqSection.heading : 'Frequently Asked Questions',
          url: nextCanonical,
          mainEntity: homeFaqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        });
      }
      if (graph.length > 0) {
        const jsonLd = { '@context': 'https://schema.org', '@graph': graph };
        if (existingHomeJsonLd) {
          existingHomeJsonLd.textContent = JSON.stringify(jsonLd);
        } else {
          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.id = homeJsonLdId;
          script.text = JSON.stringify(jsonLd);
          document.head.appendChild(script);
        }
      } else if (existingHomeJsonLd) {
        existingHomeJsonLd.remove();
      }
    } else if (existingHomeJsonLd) {
      existingHomeJsonLd.remove();
    }

    // Per-page JSON-LD (SEO audit issue 19): a localized WebPage for the
    // info/legal pages and a localized WebApplication for the home page
    // (home has no ToolPageLayout, so it would otherwise get no per-page
    // WebApplication). Same stable-id pattern as ToolPageLayout: one script
    // tag, replaced on route change, removed when the route needs no block.
    // The static Organization block lives in index.html and is never
    // duplicated here. Tool/guide pages inject their own blocks and never
    // get this one.
    const pageJsonLdId = 'app-page-jsonld';
    const existingPageJsonLd = document.getElementById(pageJsonLdId);
    const upsertPageJsonLd = (jsonLd: Record<string, unknown>) => {
      if (existingPageJsonLd) {
        existingPageJsonLd.textContent = JSON.stringify(jsonLd);
      } else {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = pageJsonLdId;
        script.text = JSON.stringify(jsonLd);
        document.head.appendChild(script);
      }
    };
    const isInfoPage =
      currentPath === '/about' ||
      currentPath === '/contact' ||
      currentPath === '/privacy' ||
      currentPath === '/terms' ||
      currentPath === '/disclaimer' ||
      currentPath === '/cookie-policy';
    if (currentPath === '/') {
      upsertPageJsonLd({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'CompressMyPic',
        url: nextCanonical,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript. Requires HTML5 Canvas.',
        description: nextDesc,
        inLanguage: lang,
        isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      });
    } else if (isInfoPage) {
      upsertPageJsonLd({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: nextTitle,
        description: nextDesc,
        url: nextCanonical,
        inLanguage: lang,
      });
    } else if (blogRoute) {
      // Blog JSON-LD (Batch 2): Blog / CollectionPage / BlogPosting +
      // BreadcrumbList (every element carries `item` — the GSC fix pattern)
      // + FAQPage only when FAQs are visibly shown. A not-yet-translated
      // article gets no block (notice page).
      const homeCrumb = {
        '@type': 'ListItem',
        position: 1,
        name: 'CompressMyPic',
        item: `${baseDomain}${lang === 'en' ? '/' : `/${lang}/`}`,
      };
      const blogCrumb = {
        '@type': 'ListItem',
        position: 2,
        name: blogStrings.blog,
        item: `${baseDomain}${getBlogHomeUrl(lang)}`,
      };
      if (blogRoute.kind === 'home') {
        upsertPageJsonLd({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Blog',
              name: blogStrings.homeHeading,
              description: blogStrings.homeSubheading,
              url: nextCanonical,
              inLanguage: lang,
            },
            { '@type': 'BreadcrumbList', itemListElement: [homeCrumb, blogCrumb] },
          ],
        });
      } else if (blogRoute.kind === 'category') {
        const catLabel = getBlogCategoryLabel(blogRoute.categoryId, catLabelsForSeo);
        upsertPageJsonLd({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CollectionPage',
              name: blogStrings.categoryGuidesHeading.replace('{category}', catLabel),
              description: blogStrings.homeSubheading,
              url: nextCanonical,
              inLanguage: lang,
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                homeCrumb,
                blogCrumb,
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: catLabel,
                  item: `${baseDomain}${getBlogCategoryUrl(blogRoute.categoryId, lang)}`,
                },
              ],
            },
          ],
        });
      } else if (blogRoute.kind === 'article' && blogArticle && !blogNoIndex) {
        // Tier B: the body comes from the per-article body cache —
        // main.tsx preloads it before first render on article routes,
        // so the FAQPage JSON-LD keeps its FAQs. Perf split 2026-11-19:
        // the locale body comes from the per-article locale module.
        const version = getBlogArticleVersion(
          blogArticle,
          lang,
          blogOverrides,
          getBlogBody(blogArticle.id),
          lang === 'en' ? undefined : getBlogBodyLocale(lang, blogArticle.id),
        );
        const catLabel = getBlogCategoryLabel(blogArticle.categoryId, catLabelsForSeo);
        const graph: Record<string, unknown>[] = [
          {
            '@type': 'BlogPosting',
            headline: version.title,
            description: version.description,
            url: nextCanonical,
            image: `${baseDomain}/blog-images/${blogArticle.id}-${lang}.png`,
            datePublished: blogArticle.publishedAt,
            // dateModified = datePublished until an article is actually
            // updated (audit P2-1: BlogPosting had no dateModified at all).
            dateModified: blogArticle.updatedAt ?? blogArticle.publishedAt,
            author: { '@type': 'Organization', name: 'CompressMyPic', url: 'https://compressmypic.online' },
            publisher: { '@type': 'Organization', name: 'CompressMyPic', url: 'https://compressmypic.online' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': nextCanonical },
            inLanguage: lang,
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              homeCrumb,
              blogCrumb,
              {
                '@type': 'ListItem',
                position: 3,
                name: catLabel,
                item: `${baseDomain}${getBlogCategoryUrl(blogArticle.categoryId, lang)}`,
              },
              { '@type': 'ListItem', position: 4, name: version.title, item: nextCanonical },
            ],
          },
        ];
        if (version.faqs && version.faqs.length > 0) {
          graph.push(
            buildFaqPageNode({
              faqs: version.faqs,
              heading: blogStrings.faqHeading,
              url: nextCanonical,
            }),
          );
        }
        upsertPageJsonLd({ '@context': 'https://schema.org', '@graph': graph });
      } else if (existingPageJsonLd) {
        existingPageJsonLd.remove();
      }
    } else if (existingPageJsonLd) {
      existingPageJsonLd.remove();
    }
  }, [currentPath, lang, esLocale, ptLocale, frLocale, deLocale, itLocale, idLocale, ruLocale, jaLocale, koLocale, zhLocale]);

  const handleNavigate = (path: string) => {
    if (path.includes('#')) {
      const [routePart, hash] = path.split('#');
      const localizedRoute = routePart ? toLocalizedPath(routePart, lang) : routePart;
      const finalPath = hash ? `${localizedRoute}#${hash}` : localizedRoute;
      if (routePart) {
        const targetPath = parsePath(localizedRoute).path;
        if (currentPath !== targetPath) {
          window.history.pushState(null, '', withBasePath(finalPath));
          setRoute(parsePath(localizedRoute));
        }
      }
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const localizedPath = toLocalizedPath(path, lang);
    window.history.pushState(null, '', withBasePath(localizedPath));
    setRoute(parsePath(localizedPath));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTool = () => {
    if (currentPath !== '/') {
      const homePath = toLocalizedPath('/', lang);
      window.history.pushState(null, '', withBasePath(homePath));
      setRoute(parsePath(homePath));
      setTimeout(() => {
        toolRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      toolRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (next: SupportedLang) => {
    localStorage.setItem(LANG_STORAGE_KEY, next);
    // A localized directory has no English route — switching to English lands on home.
    const isDirectoryPath =
      route.path === ES_ALL_TOOLS_PATH ||
      route.path === PT_ALL_TOOLS_PATH ||
      route.path === FR_ALL_TOOLS_PATH ||
      route.path === DE_ALL_TOOLS_PATH ||
      route.path === IT_ALL_TOOLS_PATH ||
      route.path === ID_ALL_TOOLS_PATH ||
      route.path === RU_ALL_TOOLS_PATH ||
      route.path === JA_ALL_TOOLS_PATH ||
      route.path === KO_ALL_TOOLS_PATH ||
      route.path === ZH_ALL_TOOLS_PATH;
    const target =
      next === 'en'
        ? isDirectoryPath
          ? '/'
          : route.path
        : toLocalizedPath(route.path, next);
    // If the current page has no equivalent in the target language, fall back
    // to that language's home instead of a broken page.
    const mapForNext =
      next === 'es' ? ES_PATH_BY_EN : next === 'pt' ? PT_PATH_BY_EN : next === 'fr' ? FR_PATH_BY_EN : next === 'de' ? DE_PATH_BY_EN : next === 'it' ? IT_PATH_BY_EN : next === 'id' ? ID_PATH_BY_EN : next === 'ru' ? RU_PATH_BY_EN : next === 'ja' ? JA_PATH_BY_EN : next === 'ko' ? KO_PATH_BY_EN : next === 'zh' ? ZH_PATH_BY_EN : undefined;
    const existsInNext =
      route.path === '/' ||
      isDirectoryPath ||
      (mapForNext !== undefined && Boolean(mapForNext[route.path]));
    // Blog (Batch 2): a blog page with no equivalent in the target language
    // falls back to that language's blog home, not its site home.
    const finalTarget =
      next !== 'en' && !existsInNext
        ? isBlogEnPath(route.path)
          ? getBlogHomeUrl(next)
          : `/${next}/`
        : target;
    // Phase 7 (F4): keep the current query string and hash across a language
    // switch (e.g. ?test=1#faq) — previously pushState dropped both.
    const suffix = `${window.location.search}${window.location.hash}`;
    window.history.pushState(null, '', withBasePath(finalTarget) + suffix);
    setLang(next);
    setRoute(parsePath(finalTarget));
    window.scrollTo({ top: 0 });
  };

  // Revoke object URLs on unmount or removal
  useEffect(() => {
    return () => {
      images.forEach((img) => {
        if (img.originalPreviewUrl) URL.revokeObjectURL(img.originalPreviewUrl);
        if (img.compressedPreviewUrl) URL.revokeObjectURL(img.compressedPreviewUrl);
      });
    };
  }, []);

  const handleUpdateSettings = (newSettings: Partial<CompressionSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  /**
   * Process a single image with current settings
   */
  const processImage = useCallback(
    async (item: ImageItem, currentSettings: CompressionSettings): Promise<ImageItem> => {
      try {
        const result = await compressSingleImage(
          item,
          currentSettings.quality,
          currentSettings.format,
          currentSettings.backgroundColor
        );

        if (item.compressedPreviewUrl) {
          URL.revokeObjectURL(item.compressedPreviewUrl);
        }

        return {
          ...item,
          compressedBlob: result.blob,
          compressedPreviewUrl: result.previewUrl,
          compressedSize: result.size,
          compressedWidth: result.width,
          compressedHeight: result.height,
          outputType: result.outputType,
          outputExtension: result.outputExtension,
          outputFilename: result.outputFilename,
          spaceSaved: result.spaceSaved,
          compressionPercentage: result.compressionPercentage,
          quality: currentSettings.quality,
          keptOriginal: false,
          status: 'done',
          errorMessage: null,
        };
      } catch (err) {
        console.error('Compression failed for', item.name, err);
        return {
          ...item,
          status: 'error',
          errorMessage: err instanceof Error ? err.message : 'Unknown compression failure.',
        };
      }
    },
    []
  );

  /**
   * Handle newly selected files
   */
  const handleFilesSelected = async (newFiles: File[]) => {
    setIsCompressing(true);

    const initialItems: ImageItem[] = [];

    for (const file of newFiles) {
      const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      let previewUrl = URL.createObjectURL(file);

      try {
        // HEIC/HEIF photos cannot be displayed by the browser directly:
        // use the converted JPEG for the thumbnail preview.
        const decodable = await toDecodableBlob(file);
        if (decodable !== file) {
          URL.revokeObjectURL(previewUrl);
          previewUrl = URL.createObjectURL(decodable);
        }
        const img = await loadImageFromFile(file);
        const hasAlpha = await detectTransparency(img);

        initialItems.push({
          id,
          file,
          name: file.name,
          originalSize: file.size,
          originalWidth: img.naturalWidth,
          originalHeight: img.naturalHeight,
          originalType: file.type || 'image/jpeg',
          originalPreviewUrl: previewUrl,
          hasAlpha,
          compressedBlob: null,
          compressedPreviewUrl: null,
          compressedSize: null,
          compressedWidth: null,
          compressedHeight: null,
          outputType: 'image/jpeg',
          outputExtension: '.jpg',
          outputFilename: file.name,
          quality: settings.quality,
          status: 'compressing',
          errorMessage: null,
          spaceSaved: null,
          compressionPercentage: null,
        });
      } catch (err) {
        console.error('Failed to load file', file.name, err);
        initialItems.push({
          id,
          file,
          name: file.name,
          originalSize: file.size,
          originalWidth: 0,
          originalHeight: 0,
          originalType: file.type,
          originalPreviewUrl: previewUrl,
          hasAlpha: false,
          compressedBlob: null,
          compressedPreviewUrl: null,
          compressedSize: null,
          compressedWidth: null,
          compressedHeight: null,
          outputType: 'image/jpeg',
          outputExtension: '.jpg',
          outputFilename: file.name,
          quality: settings.quality,
          status: 'error',
          errorMessage: activeUi ? activeUi.uploadZone.errorLoadFailed : 'Corrupted or unreadable image file.',
          spaceSaved: null,
          compressionPercentage: null,
        });
      }
    }

    setImages((prev) => [...prev, ...initialItems]);

    // Compress each newly added item
    const processedItems: ImageItem[] = [];
    for (const item of initialItems) {
      if (item.status === 'error') {
        processedItems.push(item);
        continue;
      }
      const processed = await processImage(item, settings);
      processedItems.push(processed);
    }

    // GA4 (issue 40): one file_compressed event per run, done files only —
    // never for errored files.
    const doneSelected = processedItems.filter((item) => item.status === 'done');
    if (doneSelected.length > 0) {
      trackFileCompressed({
        tool_slug: '/',
        file_count: doneSelected.length,
        original_size_bytes: doneSelected.reduce((sum, item) => sum + item.originalSize, 0),
        compressed_size_bytes: doneSelected.reduce((sum, item) => sum + (item.compressedSize ?? 0), 0),
        output_format: settings.format === 'original' ? undefined : settings.format,
        quality: settings.quality,
      });
    }

    setImages((prev) =>
      prev.map((existing) => {
        const found = processedItems.find((p) => p.id === existing.id);
        return found || existing;
      })
    );

    setIsCompressing(false);
  };

  /**
   * Re-compress all loaded images with updated settings
   */
  const handleCompressAll = async () => {
    if (images.length === 0) return;
    setIsCompressing(true);

    setImages((prev) =>
      prev.map((img) => ({
        ...img,
        status: img.status === 'error' && !img.originalWidth ? 'error' : 'compressing',
      }))
    );

    const updatedList: ImageItem[] = [];
    for (const img of images) {
      if (img.status === 'error' && !img.originalWidth) {
        updatedList.push(img);
        continue;
      }
      const compressed = await processImage(img, settings);
      updatedList.push(compressed);
    }

    // GA4 (issue 40): one file_compressed event per run, done files only —
    // never for errored files.
    const doneRecompressed = updatedList.filter((img) => img.status === 'done');
    if (doneRecompressed.length > 0) {
      trackFileCompressed({
        tool_slug: '/',
        file_count: doneRecompressed.length,
        original_size_bytes: doneRecompressed.reduce((sum, img) => sum + img.originalSize, 0),
        compressed_size_bytes: doneRecompressed.reduce((sum, img) => sum + (img.compressedSize ?? 0), 0),
        output_format: settings.format === 'original' ? undefined : settings.format,
        quality: settings.quality,
      });
    }

    setImages(updatedList);
    setIsCompressing(false);
  };

  /**
   * Re-compress an individual image
   */
  const handleRecompressSingle = async (id: string) => {
    const target = images.find((img) => img.id === id);
    if (!target) return;

    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, status: 'compressing' } : img))
    );

    const updated = await processImage(target, settings);
    // GA4 (issue 40): one file_compressed event per run, only when the
    // re-compression actually finished — never for errored files.
    if (updated.status === 'done') {
      trackFileCompressed({
        tool_slug: '/',
        file_count: 1,
        original_size_bytes: updated.originalSize,
        compressed_size_bytes: updated.compressedSize ?? undefined,
        output_format: settings.format === 'original' ? undefined : settings.format,
        quality: settings.quality,
      });
    }
    setImages((prev) => prev.map((img) => (img.id === id ? updated : img)));
  };

  const handleKeepOriginal = (id: string) => {
    setImages((prev) =>
      prev.map((img) => {
        if (img.id !== id) return img;
        if (img.compressedPreviewUrl && img.compressedPreviewUrl !== img.originalPreviewUrl) {
          URL.revokeObjectURL(img.compressedPreviewUrl);
        }
        return {
          ...img,
          compressedBlob: img.file,
          compressedPreviewUrl: URL.createObjectURL(img.file),
          compressedSize: img.originalSize,
          compressedWidth: img.originalWidth,
          compressedHeight: img.originalHeight,
          outputType: (img.originalType as ImageFormat) || 'image/png',
          outputExtension: getFileExtension(img.name) || '.png',
          outputFilename: img.name,
          spaceSaved: 0,
          compressionPercentage: 0,
          keptOriginal: true,
          status: 'done',
          errorMessage: null,
        };
      })
    );
  };

  /**
   * Remove an individual image
   */
  const handleRemoveImage = (id: string) => {
    setImages((prev) => {
      const target = prev.find((img) => img.id === id);
      if (target) {
        if (target.originalPreviewUrl) URL.revokeObjectURL(target.originalPreviewUrl);
        if (target.compressedPreviewUrl) URL.revokeObjectURL(target.compressedPreviewUrl);
      }
      return prev.filter((img) => img.id !== id);
    });
  };

  /**
   * Clear all images
   */
  const handleClearAll = () => {
    images.forEach((img) => {
      if (img.originalPreviewUrl) URL.revokeObjectURL(img.originalPreviewUrl);
      if (img.compressedPreviewUrl) URL.revokeObjectURL(img.compressedPreviewUrl);
    });
    setImages([]);
    setComparisonTarget(null);
  };

  /**
   * Download a single compressed image
   */
  const handleDownloadSingle = (image: ImageItem) => {
    if (!image.compressedBlob) return;
    const blob = image.compressedBlob;
    // utils/zip (jszip) loads on demand so the ZIP library stays out of the
    // initial bundle — it is only needed when the user downloads a file.
    void import('./utils/zip').then(({ triggerDownload }) => {
      triggerDownload(blob, image.outputFilename);
      // GA4 (issue 40): conversion event, fired after the download starts.
      trackFileDownloaded({ tool_slug: '/', download_type: 'single', file_count: 1 });
    });
  };

  /**
   * Download all compressed images as a ZIP file
   */
  const handleDownloadAllZip = async () => {
    try {
      setIsZipping(true);
      setZipProgress(0);
      const { createZipArchive, triggerDownload } = await import('./utils/zip');
      const zipBlob = await createZipArchive(images, (percent) => {
        setZipProgress(percent);
      });
      triggerDownload(zipBlob, 'compressed_images_compressmypic.zip');
      // GA4 (issue 40): conversion event, fired after the download starts.
      trackFileDownloaded({
        tool_slug: '/',
        download_type: 'zip',
        file_count: images.filter((img) => img.status === 'done').length,
      });
    } catch (err) {
      console.error('ZIP creation failed:', err);
      alert('Failed to package ZIP archive. Please download images individually.');
    } finally {
      setIsZipping(false);
      setZipProgress(0);
    }
  };

  const hasTransparentImages = images.some((img) => img.hasAlpha);
  const hasPngImages = images.some(
    (img) => img.originalType === 'image/png' || /\.png$/i.test(img.name)
  );

  // Active-language registries for the header dropdown, the tools directory
  // and the homepage: English order, with the translated entry substituted
  // when it exists (tools not yet translated keep their English entry).
  const toolsRegistry = activeLocale
    ? TOOLS_META.map((t) => activeLocale.tools[t.slug] ?? t)
    : TOOLS_META;
  const categoryLabels = activeLocale ? activeLocale.categories : TOOL_CATEGORIES;
  const showLocaleLoading = lang !== 'en' && localeLoading && !activeLocale;
  const localeLoadingText =
    lang === 'zh' ? '加载中…' : lang === 'ja' ? '読み込み中…' : lang === 'ko' ? '로딩 중…' : lang === 'id' ? 'Memuat…' : lang === 'ru' ? 'Загрузка…' : lang === 'de' ? 'Wird geladen…' : lang === 'it' ? 'Caricamento…' : lang === 'pt' ? 'Carregando…' : lang === 'fr' ? 'Chargement…' : 'Cargando…';

  // Languages that have a translation of the CURRENT page (the switcher guard).
  // route.path is the English path for tools/legal/guides (parsePath maps the
  // localized URL back), or the localized directory key for directory pages.
  const pageHasLang = (l: SupportedLang): boolean => {
    if (l === 'en') return true;
    if (route.path === '/') return true;
    if (
      route.path === ES_ALL_TOOLS_PATH ||
      route.path === PT_ALL_TOOLS_PATH ||
      route.path === FR_ALL_TOOLS_PATH ||
      route.path === DE_ALL_TOOLS_PATH ||
      route.path === IT_ALL_TOOLS_PATH ||
      route.path === ID_ALL_TOOLS_PATH ||
      route.path === RU_ALL_TOOLS_PATH ||
      route.path === JA_ALL_TOOLS_PATH ||
      route.path === KO_ALL_TOOLS_PATH ||
      route.path === ZH_ALL_TOOLS_PATH
    ) {
      return true;
    }
    const map =
      l === 'es' ? ES_PATH_BY_EN : l === 'pt' ? PT_PATH_BY_EN : l === 'fr' ? FR_PATH_BY_EN : l === 'de' ? DE_PATH_BY_EN : l === 'it' ? IT_PATH_BY_EN : l === 'id' ? ID_PATH_BY_EN : l === 'ru' ? RU_PATH_BY_EN : l === 'ja' ? JA_PATH_BY_EN : l === 'ko' ? KO_PATH_BY_EN : l === 'zh' ? ZH_PATH_BY_EN : undefined;
    return map !== undefined && map[route.path] !== undefined;
  };
  const availableLanguages: SupportedLang[] = SUPPORTED_LANGS.filter((l) => pageHasLang(l));

  // Switcher anchor hrefs (Batch 2): on blog routes, the equivalent
  // translated page — or the localized blog home when the translation is
  // not published. Everywhere else, the language home (existing behaviour).
  const languageHrefFor = (target: SupportedLang): string => {
    const defaultHref = target === 'en' ? '/' : `/${target}/`;
    if (!isBlogEnPath(route.path)) return defaultHref;
    const r = resolveBlogRoute(route.path);
    if (!r) return defaultHref;
    if (r.kind === 'home') return getBlogHomeUrl(target);
    if (r.kind === 'category') return getBlogCategoryUrl(r.categoryId, target);
    const a = getBlogArticleById(r.articleId);
    if (!a) return getBlogHomeUrl(target);
    return isBlogArticlePublishedIn(a, target)
      ? getBlogArticleUrl(a, target)
      : getBlogHomeUrl(target);
  };

  // Homepage (compressor app). Extracted so the English and Spanish home
  // branches render the same DOM; `strings` is the Spanish bundle, or null
  // for English (components fall back to their English defaults).
  const renderHome = (strings: EsLocale['ui'] | PtLocale['ui'] | FrLocale['ui'] | DeLocale['ui'] | ItLocale['ui'] | IdLocale['ui'] | RuLocale['ui'] | JaLocale['ui'] | KoLocale['ui'] | ZhLocale['ui'] | BnLocale['ui'] | null) => (
    <>
          {/* Home <main> wraps the whole home page (SEO audit issue 23) so the
              skip link lands on one landmark containing Hero, the compressor,
              the directory, share, ads, educational content, guides and FAQ.
              It keeps id="main" + the tool ref, with className "flex-1" like
              every other router main; the compressor block keeps the old
              main's width/padding on its own inner wrapper, so nothing
              renders differently. */}
          <main id="main" ref={toolRef} className="flex-1">
          <Hero
            strings={strings?.hero}
            onNavigate={handleNavigate}
            onScrollToTool={scrollToTool}
            toolsRegistry={toolsRegistry}
          />

          {/* Named anchor kept for the Hero "start compressing" scroll target
              (Hero.tsx scrolls to #home-compressor-workspace); the main
              landmark itself is now #main for the skip link. */}
          <span id="home-compressor-workspace" aria-hidden="true" className="block" />
          <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 pb-16">
            <div className="space-y-6">
              {/* Upload Dropzone */}
              <UploadZone
                onFilesSelected={handleFilesSelected}
                maxFileSizeMB={settings.maxFileSizeMB}
                disabled={isCompressing}
                strings={strings?.uploadZone}
              />

              {/* Compression Settings & Controls */}
              {images.length > 0 && (
                <CompressionControls
                  settings={settings}
                  onUpdateSettings={handleUpdateSettings}
                  onCompressAll={handleCompressAll}
                  onClearAll={handleClearAll}
                  totalImagesCount={images.length}
                  hasTransparentImages={hasTransparentImages}
                  hasPngImages={hasPngImages}
                  isCompressing={isCompressing}
                  strings={strings?.compressionControls}
                />
              )}

              {/* Results List and Download Panel */}
              {images.length > 0 && (
                <ResultsList
                  images={images}
                  onDownloadSingle={handleDownloadSingle}
                  onDownloadAllZip={handleDownloadAllZip}
                  onRemoveImage={handleRemoveImage}
                  onOpenComparison={(img) => setComparisonTarget(img)}
                  onRecompressSingle={handleRecompressSingle}
                  onKeepOriginal={handleKeepOriginal}
                  isZipping={isZipping}
                  zipProgress={zipProgress}
                  strings={strings?.resultsList}
                />
              )}
            </div>
          </div>

          {/* Visible link to the tools directory (SEO audit issue 29): every
              language links to its dedicated directory page (/all-tools for
              EN; localized paths for the other languages). */}
          <p className="py-6 text-center">
            <a
              href={allToolsPath}
              onClick={(e) => { e.preventDefault(); handleNavigate(allToolsPath); }}
              className="text-base font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:underline"
            >
              {strings?.toolsDirectory.allTools ?? 'All Tools'}
            </a>
          </p>

          {/* Educational Content Section — Tier F: below the fold, so the
              browser may skip rendering it until it nears the viewport.
              The content stays in the DOM (SEO-safe); the intrinsic-size
              estimate reserves space so the footer does not jump. */}
          <div style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 1200px' }}>
          <EducationalContent
            sections={
              strings
                ? strings.educational.sections.map((section) => ({
                    ...section,
                    bullets: 'bullets' in section && section.bullets ? [...section.bullets] : undefined,
                  }))
                : undefined
            }
          />
          </div>

          {/* FAQ Section — Tier F: same content-visibility treatment as
              the educational content above (below the fold). */}
          {/* Guides Section */}
      <section className="py-16 sm:py-20 bg-[var(--bg-soft)] border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[var(--ink-navy)] tracking-tight">{strings?.guidesSection.heading ?? 'Guides'}</h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--ink-2)] leading-relaxed">{strings?.guidesSection.subheading ?? 'Step-by-step guides to get smaller files without losing visible quality.'}</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <a href={toLocalizedPath('/guides/compress-images-for-whatsapp', lang)} onClick={(e) => { e.preventDefault(); handleNavigate('/guides/compress-images-for-whatsapp'); }} className="group bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 shadow-[var(--shadow)] hover:-translate-y-[3px] hover:shadow-[var(--shadow-lg)] hover:border-[#fca5a5] dark:hover:border-[#ef4444] transition-[transform,box-shadow,border-color] duration-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg pastel-tile-6 flex items-center justify-center mb-3.5"><MessageCircle className="w-5 h-5" /></div>
                <h3 className="text-lg font-sans font-bold text-[var(--ink-navy)] group-hover:text-[#dc2626] dark:group-hover:text-[#fca5a5] transition-colors leading-snug">{strings?.guidesSection.cards[0].title ?? 'How to compress images for WhatsApp without losing quality'}</h3>
                <p className="mt-1.5 text-sm text-[var(--ink-3)] leading-relaxed">{strings?.guidesSection.cards[0].desc ?? 'Shrink photos before sending so they stay sharp and send fast.'}</p>
              </div>
              <span className="mt-4 inline-block text-[13px] font-semibold text-[#dc2626] dark:text-[#fca5a5]">{strings?.guidesSection.cards[0].cta ?? 'Read guide →'}</span>
            </a>
            <a href={toLocalizedPath('/guides/jpg-vs-png-vs-webp', lang)} onClick={(e) => { e.preventDefault(); handleNavigate('/guides/jpg-vs-png-vs-webp'); }} className="group bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 shadow-[var(--shadow)] hover:-translate-y-[3px] hover:shadow-[var(--shadow-lg)] hover:border-[#fca5a5] dark:hover:border-[#ef4444] transition-[transform,box-shadow,border-color] duration-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg pastel-tile-2 flex items-center justify-center mb-3.5"><FileImage className="w-5 h-5" /></div>
                <h3 className="text-lg font-sans font-bold text-[var(--ink-navy)] group-hover:text-[#dc2626] dark:group-hover:text-[#fca5a5] transition-colors leading-snug">{strings?.guidesSection.cards[1].title ?? 'JPG vs PNG vs WebP: Which Format Should You Use?'}</h3>
                <p className="mt-1.5 text-sm text-[var(--ink-3)] leading-relaxed">{strings?.guidesSection.cards[1].desc ?? 'File size, quality and transparency compared, so you can pick the right format.'}</p>
              </div>
              <span className="mt-4 inline-block text-[13px] font-semibold text-[#dc2626] dark:text-[#fca5a5]">{strings?.guidesSection.cards[1].cta ?? 'Read guide →'}</span>
            </a>
            <a href={toLocalizedPath('/guides/reduce-image-size-to-100kb', lang)} onClick={(e) => { e.preventDefault(); handleNavigate('/guides/reduce-image-size-to-100kb'); }} className="group bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 shadow-[var(--shadow)] hover:-translate-y-[3px] hover:shadow-[var(--shadow-lg)] hover:border-[#fca5a5] dark:hover:border-[#ef4444] transition-[transform,box-shadow,border-color] duration-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg pastel-tile-0 flex items-center justify-center mb-3.5"><Zap className="w-5 h-5" /></div>
                <h3 className="text-lg font-sans font-bold text-[var(--ink-navy)] group-hover:text-[#dc2626] dark:group-hover:text-[#fca5a5] transition-colors leading-snug">{strings?.guidesSection.cards[2].title ?? 'How to Reduce Image Size to 100KB for Web &amp; Email'}</h3>
                <p className="mt-1.5 text-sm text-[var(--ink-3)] leading-relaxed">{strings?.guidesSection.cards[2].desc ?? 'Step-by-step: hit 100KB without losing visible quality.'}</p>
              </div>
              <span className="mt-4 inline-block text-[13px] font-semibold text-[#dc2626] dark:text-[#fca5a5]">{strings?.guidesSection.cards[2].cta ?? 'Read guide →'}</span>
            </a>
          </div>
        </div>
      </section>
      <div style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 1000px' }}>
        <FaqSection
          heading={strings?.faqSection.heading}
          subheading={strings?.faqSection.subheading}
          faqs={strings ? [...strings.faqSection.faqs] : undefined}
        />
      </div>

          </main>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)]">
      {/* Skip link: first focusable element — jumps to the main content landmark (#main). */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus-visible:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#dc2626] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:underline"
      >
        Skip to main content
      </a>

      {/* 1. Header */}
      <Header
        onNavigate={handleNavigate}
        onScrollToTool={scrollToTool}
        lang={lang}
        onLanguageChange={handleLanguageChange}
        strings={activeUi ? activeUi.header : undefined}
        toolsRegistry={toolsRegistry}
        categoryLabels={categoryLabels}
        availableLanguages={availableLanguages}
        languageHrefFor={languageHrefFor}
      />

      {/* 2. Page Router */}
      {/* Suspense boundary for the lazy route pages above (incl. the 404 page). */}
      {/* BlogContext (Batch 2): active language's article overrides + blog
          UI strings for every blog page and hook below. */}
      <BlogContext.Provider value={{ overrides: blogOverrides, strings: blogStrings }}>
      <Suspense
        fallback={
          <main id="main" className="flex-1">
            <div className="max-w-5xl mx-auto px-4 py-20 text-center text-sm text-[var(--ink-3)]">
              Loading…
            </div>
          </main>
        }
      >
      {showLocaleLoading ? (
        <main id="main" className="flex-1">
          <div className="max-w-5xl mx-auto px-4 py-20 text-center">
            <div
              className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[var(--line-strong)] border-t-[#dc2626]"
              aria-hidden="true"
            />
            <p className="mt-4 text-sm text-[var(--ink-3)]">{localeLoadingText}</p>
          </div>
        </main>
      ) : lang !== 'en' && currentPath === '/' ? (
        renderHome(activeUi)
      ) : currentPath === '/admin/comments' ? (
        <main id="main" className="flex-1">
          <AdminCommentsPage onNavigate={handleNavigate} />
        </main>
      ) : blogRoute ? (
        <main id="main" className="flex-1">
          {blogRoute.kind === 'home' ? (
            <BlogHomePage
              lang={lang}
              onNavigate={handleNavigate}
              tools={toolsRegistry}
              categories={categoryLabels}
              guidesSection={activeUi?.guidesSection}
            />
          ) : blogRoute.kind === 'category' ? (
            <BlogCategoryPage
              lang={lang}
              categoryId={blogRoute.categoryId}
              onNavigate={handleNavigate}
              tools={toolsRegistry}
              categories={categoryLabels}
            />
          ) : blogArticle ? (
            <ArticlePage
              lang={lang}
              article={blogArticle}
              onNavigate={handleNavigate}
              tools={toolsRegistry}
              categories={categoryLabels}
            />
          ) : null}
        </main>
      ) : currentPath === '/all-tools' ? (
        <main id="main" className="flex-1">
          <AllToolsPage onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === ES_ALL_TOOLS_PATH ? (
        <main id="main" className="flex-1">
          <AllToolsPageEs onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === PT_ALL_TOOLS_PATH ? (
        <main id="main" className="flex-1">
          <AllToolsPagePt onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === FR_ALL_TOOLS_PATH ? (
        <main id="main" className="flex-1">
          <AllToolsPageFr onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === DE_ALL_TOOLS_PATH ? (
        <main id="main" className="flex-1">
          <AllToolsPageDe onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === IT_ALL_TOOLS_PATH ? (
        <main id="main" className="flex-1">
          <AllToolsPageIt onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === ID_ALL_TOOLS_PATH ? (
        <main id="main" className="flex-1">
          <AllToolsPageId onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === RU_ALL_TOOLS_PATH ? (
        <main id="main" className="flex-1">
          <AllToolsPageRu onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === JA_ALL_TOOLS_PATH ? (
        <main id="main" className="flex-1">
          <AllToolsPageJa onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === KO_ALL_TOOLS_PATH ? (
        <main id="main" className="flex-1">
          <AllToolsPageKo onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === ZH_ALL_TOOLS_PATH ? (
        <main id="main" className="flex-1">
          <AllToolsPageZh onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : currentPath === BN_ALL_TOOLS_PATH ? (
        <main id="main" className="flex-1">
          <AllToolsPageBn onNavigate={handleNavigate} tools={toolsRegistry} categories={categoryLabels} />
        </main>
      ) : lang === 'es' && currentPath === '/about' ? (
        <main id="main" className="flex-1">
          <AboutPageEs onNavigate={handleNavigate} />
        </main>
      ) : lang === 'pt' && currentPath === '/about' ? (
        <main id="main" className="flex-1">
          <AboutPagePt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'fr' && currentPath === '/about' ? (
        <main id="main" className="flex-1">
          <AboutPageFr onNavigate={handleNavigate} />
        </main>
      ) : lang === 'de' && currentPath === '/about' ? (
        <main id="main" className="flex-1">
          <AboutPageDe onNavigate={handleNavigate} />
        </main>
      ) : lang === 'it' && currentPath === '/about' ? (
        <main id="main" className="flex-1">
          <AboutPageIt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'id' && currentPath === '/about' ? (
        <main id="main" className="flex-1">
          <AboutPageId onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ru' && currentPath === '/about' ? (
        <main id="main" className="flex-1">
          <AboutPageRu onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ja' && currentPath === '/about' ? (
        <main id="main" className="flex-1">
          <AboutPageJa onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ko' && currentPath === '/about' ? (
        <main id="main" className="flex-1">
          <AboutPageKo onNavigate={handleNavigate} />
        </main>
      ) : lang === 'zh' && currentPath === '/about' ? (
        <main id="main" className="flex-1">
          <AboutPageZh onNavigate={handleNavigate} />
        </main>
      ) : lang === 'bn' && currentPath === '/about' ? (
        <main id="main" className="flex-1">
          <AboutPageBn onNavigate={handleNavigate} />
        </main>
      ) : lang === 'es' && currentPath === '/contact' ? (
        <main id="main" className="flex-1">
          <ContactPageEs onNavigate={handleNavigate} />
        </main>
      ) : lang === 'pt' && currentPath === '/contact' ? (
        <main id="main" className="flex-1">
          <ContactPagePt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'fr' && currentPath === '/contact' ? (
        <main id="main" className="flex-1">
          <ContactPageFr onNavigate={handleNavigate} />
        </main>
      ) : lang === 'de' && currentPath === '/contact' ? (
        <main id="main" className="flex-1">
          <ContactPageDe onNavigate={handleNavigate} />
        </main>
      ) : lang === 'it' && currentPath === '/contact' ? (
        <main id="main" className="flex-1">
          <ContactPageIt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'id' && currentPath === '/contact' ? (
        <main id="main" className="flex-1">
          <ContactPageId onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ru' && currentPath === '/contact' ? (
        <main id="main" className="flex-1">
          <ContactPageRu onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ja' && currentPath === '/contact' ? (
        <main id="main" className="flex-1">
          <ContactPageJa onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ko' && currentPath === '/contact' ? (
        <main id="main" className="flex-1">
          <ContactPageKo onNavigate={handleNavigate} />
        </main>
      ) : lang === 'zh' && currentPath === '/contact' ? (
        <main id="main" className="flex-1">
          <ContactPageZh onNavigate={handleNavigate} />
        </main>
      ) : lang === 'bn' && currentPath === '/contact' ? (
        <main id="main" className="flex-1">
          <ContactPageBn onNavigate={handleNavigate} />
        </main>
      ) : lang === 'es' && currentPath === '/privacy' ? (
        <main id="main" className="flex-1">
          <PrivacyPageEs onNavigate={handleNavigate} />
        </main>
      ) : lang === 'pt' && currentPath === '/privacy' ? (
        <main id="main" className="flex-1">
          <PrivacyPagePt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'fr' && currentPath === '/privacy' ? (
        <main id="main" className="flex-1">
          <PrivacyPageFr onNavigate={handleNavigate} />
        </main>
      ) : lang === 'de' && currentPath === '/privacy' ? (
        <main id="main" className="flex-1">
          <PrivacyPageDe onNavigate={handleNavigate} />
        </main>
      ) : lang === 'it' && currentPath === '/privacy' ? (
        <main id="main" className="flex-1">
          <PrivacyPageIt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'id' && currentPath === '/privacy' ? (
        <main id="main" className="flex-1">
          <PrivacyPageId onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ru' && currentPath === '/privacy' ? (
        <main id="main" className="flex-1">
          <PrivacyPageRu onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ja' && currentPath === '/privacy' ? (
        <main id="main" className="flex-1">
          <PrivacyPageJa onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ko' && currentPath === '/privacy' ? (
        <main id="main" className="flex-1">
          <PrivacyPageKo onNavigate={handleNavigate} />
        </main>
      ) : lang === 'zh' && currentPath === '/privacy' ? (
        <main id="main" className="flex-1">
          <PrivacyPageZh onNavigate={handleNavigate} />
        </main>
      ) : lang === 'bn' && currentPath === '/privacy' ? (
        <main id="main" className="flex-1">
          <PrivacyPageBn onNavigate={handleNavigate} />
        </main>
      ) : lang === 'es' && currentPath === '/terms' ? (
        <main id="main" className="flex-1">
          <TermsPageEs onNavigate={handleNavigate} />
        </main>
      ) : lang === 'es' && currentPath === '/disclaimer' ? (
        <main id="main" className="flex-1">
          <DisclaimerPageEs onNavigate={handleNavigate} />
        </main>
      ) : lang === 'es' && currentPath === '/cookie-policy' ? (
        <main id="main" className="flex-1">
          <CookiePolicyPageEs onNavigate={handleNavigate} />
        </main>
      ) : lang === 'pt' && currentPath === '/terms' ? (
        <main id="main" className="flex-1">
          <TermsPagePt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'pt' && currentPath === '/disclaimer' ? (
        <main id="main" className="flex-1">
          <DisclaimerPagePt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'pt' && currentPath === '/cookie-policy' ? (
        <main id="main" className="flex-1">
          <CookiePolicyPagePt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'fr' && currentPath === '/terms' ? (
        <main id="main" className="flex-1">
          <TermsPageFr onNavigate={handleNavigate} />
        </main>
      ) : lang === 'fr' && currentPath === '/disclaimer' ? (
        <main id="main" className="flex-1">
          <DisclaimerPageFr onNavigate={handleNavigate} />
        </main>
      ) : lang === 'fr' && currentPath === '/cookie-policy' ? (
        <main id="main" className="flex-1">
          <CookiePolicyPageFr onNavigate={handleNavigate} />
        </main>
      ) : lang === 'de' && currentPath === '/terms' ? (
        <main id="main" className="flex-1">
          <TermsPageDe onNavigate={handleNavigate} />
        </main>
      ) : lang === 'de' && currentPath === '/disclaimer' ? (
        <main id="main" className="flex-1">
          <DisclaimerPageDe onNavigate={handleNavigate} />
        </main>
      ) : lang === 'de' && currentPath === '/cookie-policy' ? (
        <main id="main" className="flex-1">
          <CookiePolicyPageDe onNavigate={handleNavigate} />
        </main>
      ) : lang === 'it' && currentPath === '/terms' ? (
        <main id="main" className="flex-1">
          <TermsPageIt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'it' && currentPath === '/disclaimer' ? (
        <main id="main" className="flex-1">
          <DisclaimerPageIt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'it' && currentPath === '/cookie-policy' ? (
        <main id="main" className="flex-1">
          <CookiePolicyPageIt onNavigate={handleNavigate} />
        </main>
      ) : lang === 'id' && currentPath === '/terms' ? (
        <main id="main" className="flex-1">
          <TermsPageId onNavigate={handleNavigate} />
        </main>
      ) : lang === 'id' && currentPath === '/disclaimer' ? (
        <main id="main" className="flex-1">
          <DisclaimerPageId onNavigate={handleNavigate} />
        </main>
      ) : lang === 'id' && currentPath === '/cookie-policy' ? (
        <main id="main" className="flex-1">
          <CookiePolicyPageId onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ru' && currentPath === '/terms' ? (
        <main id="main" className="flex-1">
          <TermsPageRu onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ru' && currentPath === '/disclaimer' ? (
        <main id="main" className="flex-1">
          <DisclaimerPageRu onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ru' && currentPath === '/cookie-policy' ? (
        <main id="main" className="flex-1">
          <CookiePolicyPageRu onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ja' && currentPath === '/terms' ? (
        <main id="main" className="flex-1">
          <TermsPageJa onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ja' && currentPath === '/disclaimer' ? (
        <main id="main" className="flex-1">
          <DisclaimerPageJa onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ja' && currentPath === '/cookie-policy' ? (
        <main id="main" className="flex-1">
          <CookiePolicyPageJa onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ko' && currentPath === '/terms' ? (
        <main id="main" className="flex-1">
          <TermsPageKo onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ko' && currentPath === '/disclaimer' ? (
        <main id="main" className="flex-1">
          <DisclaimerPageKo onNavigate={handleNavigate} />
        </main>
      ) : lang === 'ko' && currentPath === '/cookie-policy' ? (
        <main id="main" className="flex-1">
          <CookiePolicyPageKo onNavigate={handleNavigate} />
        </main>
      ) : lang === 'zh' && currentPath === '/terms' ? (
        <main id="main" className="flex-1">
          <TermsPageZh onNavigate={handleNavigate} />
        </main>
      ) : lang === 'bn' && currentPath === '/terms' ? (
        <main id="main" className="flex-1">
          <TermsPageBn onNavigate={handleNavigate} />
        </main>
      ) : lang === 'zh' && currentPath === '/disclaimer' ? (
        <main id="main" className="flex-1">
          <DisclaimerPageZh onNavigate={handleNavigate} />
        </main>
      ) : lang === 'bn' && currentPath === '/disclaimer' ? (
        <main id="main" className="flex-1">
          <DisclaimerPageBn onNavigate={handleNavigate} />
        </main>
      ) : lang === 'zh' && currentPath === '/cookie-policy' ? (
        <main id="main" className="flex-1">
          <CookiePolicyPageZh onNavigate={handleNavigate} />
        </main>
      ) : lang === 'bn' && currentPath === '/cookie-policy' ? (
        <main id="main" className="flex-1">
          <CookiePolicyPageBn onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/about' ? (
        <main id="main" className="flex-1">
          <AboutPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/contact' ? (
        <main id="main" className="flex-1">
          <ContactPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/privacy' ? (
        <main id="main" className="flex-1">
          <PrivacyPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/terms' ? (
        <main id="main" className="flex-1">
          <TermsPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/disclaimer' ? (
        <main id="main" className="flex-1">
          <DisclaimerPage onNavigate={handleNavigate} />
        </main>
      ) : currentPath === '/cookie-policy' ? (
        <main id="main" className="flex-1">
          <CookiePolicyPage onNavigate={handleNavigate} />
        </main>
            ) : lang === 'es' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main id="main" className="flex-1">
                <GuideWhatsAppPageEs onNavigate={handleNavigate} />
              </main>
            ) : lang === 'pt' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main id="main" className="flex-1">
                <GuideWhatsAppPagePt onNavigate={handleNavigate} />
              </main>
            ) : lang === 'fr' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main id="main" className="flex-1">
                <GuideWhatsAppPageFr onNavigate={handleNavigate} />
              </main>
            ) : lang === 'de' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main id="main" className="flex-1">
                <GuideWhatsAppPageDe onNavigate={handleNavigate} />
              </main>
            ) : lang === 'it' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main id="main" className="flex-1">
                <GuideWhatsAppPageIt onNavigate={handleNavigate} />
              </main>
            ) : lang === 'id' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main id="main" className="flex-1">
                <GuideWhatsAppPageId onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ru' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main id="main" className="flex-1">
                <GuideWhatsAppPageRu onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ja' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main id="main" className="flex-1">
                <GuideWhatsAppPageJa onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ko' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main id="main" className="flex-1">
                <GuideWhatsAppPageKo onNavigate={handleNavigate} />
              </main>
            ) : lang === 'zh' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main id="main" className="flex-1">
                <GuideWhatsAppPageZh onNavigate={handleNavigate} />
              </main>
            ) : lang === 'bn' && currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main id="main" className="flex-1">
                <GuideWhatsAppPageBn onNavigate={handleNavigate} />
              </main>
            ) : lang === 'es' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main id="main" className="flex-1">
                <GuideFormatsPageEs onNavigate={handleNavigate} />
              </main>
            ) : lang === 'pt' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main id="main" className="flex-1">
                <GuideFormatsPagePt onNavigate={handleNavigate} />
              </main>
            ) : lang === 'fr' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main id="main" className="flex-1">
                <GuideFormatsPageFr onNavigate={handleNavigate} />
              </main>
            ) : lang === 'de' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main id="main" className="flex-1">
                <GuideFormatsPageDe onNavigate={handleNavigate} />
              </main>
            ) : lang === 'it' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main id="main" className="flex-1">
                <GuideFormatsPageIt onNavigate={handleNavigate} />
              </main>
            ) : lang === 'id' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main id="main" className="flex-1">
                <GuideFormatsPageId onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ru' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main id="main" className="flex-1">
                <GuideFormatsPageRu onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ja' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main id="main" className="flex-1">
                <GuideFormatsPageJa onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ko' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main id="main" className="flex-1">
                <GuideFormatsPageKo onNavigate={handleNavigate} />
              </main>
            ) : lang === 'zh' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main id="main" className="flex-1">
                <GuideFormatsPageZh onNavigate={handleNavigate} />
              </main>
            ) : lang === 'bn' && currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main id="main" className="flex-1">
                <GuideFormatsPageBn onNavigate={handleNavigate} />
              </main>
            ) : lang === 'es' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main id="main" className="flex-1">
                <Guide100kbPageEs onNavigate={handleNavigate} />
              </main>
            ) : lang === 'pt' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main id="main" className="flex-1">
                <Guide100kbPagePt onNavigate={handleNavigate} />
              </main>
            ) : lang === 'fr' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main id="main" className="flex-1">
                <Guide100kbPageFr onNavigate={handleNavigate} />
              </main>
            ) : lang === 'de' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main id="main" className="flex-1">
                <Guide100kbPageDe onNavigate={handleNavigate} />
              </main>
            ) : lang === 'it' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main id="main" className="flex-1">
                <Guide100kbPageIt onNavigate={handleNavigate} />
              </main>
            ) : lang === 'id' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main id="main" className="flex-1">
                <Guide100kbPageId onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ru' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main id="main" className="flex-1">
                <Guide100kbPageRu onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ja' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main id="main" className="flex-1">
                <Guide100kbPageJa onNavigate={handleNavigate} />
              </main>
            ) : lang === 'ko' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main id="main" className="flex-1">
                <Guide100kbPageKo onNavigate={handleNavigate} />
              </main>
            ) : lang === 'zh' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main id="main" className="flex-1">
                <Guide100kbPageZh onNavigate={handleNavigate} />
              </main>
            ) : lang === 'bn' && currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main id="main" className="flex-1">
                <Guide100kbPageBn onNavigate={handleNavigate} />
              </main>
            ) : currentPath === '/guides/compress-images-for-whatsapp' ? (
              <main id="main" className="flex-1">
                        <GuideWhatsAppPage onNavigate={handleNavigate} />
              </main>
            ) : currentPath === '/guides/jpg-vs-png-vs-webp' ? (
              <main id="main" className="flex-1">
                        <GuideFormatsPage onNavigate={handleNavigate} />
              </main>
            ) : currentPath === '/guides/reduce-image-size-to-100kb' ? (
              <main id="main" className="flex-1">
                        <Guide100kbPage onNavigate={handleNavigate} />
              </main>
      ) : currentPath === '/image-resizer' ? (
        <main id="main" className="flex-1">
          <ImageResizerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-resizer'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-resizer']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-resizer']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-resizer']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-resizer']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-resizer']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-resizer']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-resizer']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-resizer']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-resizer']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-resizer']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-resizer']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-resizer'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-converter' ? (
        <main id="main" className="flex-1">
          <ImageConverterPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-converter'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-converter']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-converter']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-converter']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-converter']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-converter']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-converter']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-converter']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-converter']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-converter']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-converter']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-converter']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-converter'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/rotate-flip-image' ? (
        <main id="main" className="flex-1">
          <RotateFlipPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/rotate-flip-image'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/rotate-flip-image']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/rotate-flip-image'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-to-pdf' ? (
        <main id="main" className="flex-1">
          <ImageToPdfPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-to-pdf'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-to-pdf']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-to-pdf'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-metadata-viewer' ? (
        <main id="main" className="flex-1">
          <MetadataViewerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-metadata-viewer'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-metadata-viewer']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-metadata-viewer'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/remove-image-metadata' ? (
        <main id="main" className="flex-1">
          <RemoveMetadataPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/remove-image-metadata'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/remove-image-metadata']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/remove-image-metadata'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/favicon-generator' ? (
        <main id="main" className="flex-1">
          <FaviconGeneratorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/favicon-generator'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/favicon-generator']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/favicon-generator']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/favicon-generator']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/favicon-generator']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/favicon-generator']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/favicon-generator']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/favicon-generator']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/favicon-generator']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/favicon-generator']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/favicon-generator']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/favicon-generator']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/favicon-generator'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-color-picker' ? (
        <main id="main" className="flex-1">
          <ColorPickerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-color-picker'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-color-picker']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-color-picker']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-color-picker']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-color-picker']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-color-picker']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-color-picker']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-color-picker']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-color-picker']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-color-picker']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-color-picker']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-color-picker']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-color-picker'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-dimensions-checker' ? (
        <main id="main" className="flex-1">
          <DimensionsCheckerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-dimensions-checker'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-dimensions-checker']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-dimensions-checker'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-cropper' ? (
        <main id="main" className="flex-1">
          <ImageCropperPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-cropper'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-cropper']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-cropper']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-cropper']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-cropper']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-cropper']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-cropper']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-cropper']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-cropper']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-cropper']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-cropper']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-cropper']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-cropper'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-watermark' ? (
        <main id="main" className="flex-1">
          <ImageWatermarkPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-watermark'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-watermark']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-watermark']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-watermark']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-watermark']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-watermark']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-watermark']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-watermark']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-watermark']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-watermark']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-watermark']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-watermark']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-watermark'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/blur-pixelate-image' ? (
        <main id="main" className="flex-1">
          <BlurPixelatePage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/blur-pixelate-image'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/blur-pixelate-image']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/blur-pixelate-image'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/add-text-to-image' ? (
        <main id="main" className="flex-1">
          <AddTextPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/add-text-to-image'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/add-text-to-image']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/add-text-to-image'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-border-generator' ? (
        <main id="main" className="flex-1">
          <ImageBorderPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-border-generator'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-border-generator']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-border-generator']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-border-generator']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-border-generator']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-border-generator']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-border-generator']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-border-generator']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-border-generator']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-border-generator']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-border-generator']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-border-generator']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-border-generator'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/round-image-corners' ? (
        <main id="main" className="flex-1">
          <RoundCornersPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/round-image-corners'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/round-image-corners']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/round-image-corners']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/round-image-corners']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/round-image-corners']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/round-image-corners']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/round-image-corners']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/round-image-corners']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/round-image-corners']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/round-image-corners']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/round-image-corners']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/round-image-corners']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/round-image-corners'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-brightness-editor' ? (
        <main id="main" className="flex-1">
          <BrightnessEditorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-brightness-editor'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-brightness-editor']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-brightness-editor'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-contrast-editor' ? (
        <main id="main" className="flex-1">
          <ContrastEditorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-contrast-editor'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-contrast-editor']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-contrast-editor'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-saturation-editor' ? (
        <main id="main" className="flex-1">
          <SaturationEditorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-saturation-editor'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-saturation-editor']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-saturation-editor'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-filters' ? (
        <main id="main" className="flex-1">
          <ImageFiltersPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-filters'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-filters']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-filters']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-filters']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-filters']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-filters']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-filters']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-filters']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-filters']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-filters']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-filters']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-filters']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-filters'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/add-background-to-image' ? (
        <main id="main" className="flex-1">
          <AddBackgroundPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/add-background-to-image'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/add-background-to-image']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/add-background-to-image'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-splitter' ? (
        <main id="main" className="flex-1">
          <ImageSplitterPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-splitter'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-splitter']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-splitter']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-splitter']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-splitter']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-splitter']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-splitter']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-splitter']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-splitter']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-splitter']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-splitter']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-splitter']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-splitter'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-dpi-changer' ? (
        <main id="main" className="flex-1">
          <DpiChangerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-dpi-changer'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-dpi-changer']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-dpi-changer'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-to-base64' ? (
        <main id="main" className="flex-1">
          <ImageToBase64Page
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-to-base64'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-to-base64']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-to-base64']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-to-base64']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-to-base64']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-to-base64']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-to-base64']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-to-base64']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-to-base64']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-to-base64']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-to-base64']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-to-base64']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-to-base64'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/base64-to-image' ? (
        <main id="main" className="flex-1">
          <Base64ToImagePage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/base64-to-image'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/base64-to-image']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/base64-to-image']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/base64-to-image']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/base64-to-image']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/base64-to-image']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/base64-to-image']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/base64-to-image']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/base64-to-image']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/base64-to-image']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/base64-to-image']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/base64-to-image']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/base64-to-image'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-color-palette-extractor' ? (
        <main id="main" className="flex-1">
          <PaletteExtractorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-color-palette-extractor'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-color-palette-extractor']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-color-palette-extractor'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/gif-maker' ? (
        <main id="main" className="flex-1">
          <GifMakerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/gif-maker'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/gif-maker']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/gif-maker']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/gif-maker']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/gif-maker']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/gif-maker']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/gif-maker']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/gif-maker']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/gif-maker']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/gif-maker']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/gif-maker']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/gif-maker']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/gif-maker'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/image-collage-maker' ? (
        <main id="main" className="flex-1">
          <CollageMakerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/image-collage-maker'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/image-collage-maker']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/image-collage-maker'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/compress-image-to-50kb' ? (
        <main id="main" className="flex-1">
          <Compress50KbPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/compress-image-to-50kb'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/compress-image-to-50kb']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/compress-image-to-50kb'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/compress-image-to-100kb' ? (
        <main id="main" className="flex-1">
          <Compress100KbPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/compress-image-to-100kb'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/compress-image-to-100kb']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/compress-image-to-100kb'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/compress-image-to-200kb' ? (
        <main id="main" className="flex-1">
          <Compress200KbPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/compress-image-to-200kb'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/compress-image-to-200kb']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/compress-image-to-200kb'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/compress-image-to-500kb' ? (
        <main id="main" className="flex-1">
          <Compress500KbPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/compress-image-to-500kb'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/compress-image-to-500kb']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/compress-image-to-500kb'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/bulk-image-compressor' ? (
        <main id="main" className="flex-1">
          <BulkCompressorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/bulk-image-compressor'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/bulk-image-compressor'],
                    compressionControls: esLocale.ui.compressionControls,
                    resultsList: esLocale.ui.resultsList,
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/bulk-image-compressor'],
                    compressionControls: ptLocale.ui.compressionControls,
                    resultsList: ptLocale.ui.resultsList,
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/bulk-image-compressor'],
                    compressionControls: frLocale.ui.compressionControls,
                    resultsList: frLocale.ui.resultsList,
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/bulk-image-compressor'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/bulk-image-compressor'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/bulk-image-compressor'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/bulk-image-compressor'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/bulk-image-compressor'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/bulk-image-compressor'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/bulk-image-compressor'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/bulk-image-compressor']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/bulk-image-compressor'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/target-file-size-compressor' ? (
        <main id="main" className="flex-1">
          <TargetFileSizePage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/target-file-size-compressor'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/target-file-size-compressor']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/target-file-size-compressor'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/bulk-image-resizer' ? (
        <main id="main" className="flex-1">
          <BulkResizerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/bulk-image-resizer'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/bulk-image-resizer']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/bulk-image-resizer'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/bulk-image-converter' ? (
        <main id="main" className="flex-1">
          <BulkConverterPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/bulk-image-converter'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/bulk-image-converter']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/bulk-image-converter'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/web-image-optimizer' ? (
        <main id="main" className="flex-1">
          <WebOptimizerPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/web-image-optimizer'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/web-image-optimizer']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/web-image-optimizer'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/gif-compressor' ? (
        <main id="main" className="flex-1">
          <GifCompressorPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/gif-compressor'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/gif-compressor']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/gif-compressor']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/gif-compressor']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/gif-compressor']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/gif-compressor']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/gif-compressor']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/gif-compressor']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/gif-compressor']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/gif-compressor']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/gif-compressor']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/gif-compressor']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/gif-compressor'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/heic-to-jpg' ? (
        <main id="main" className="flex-1">
          <HeicToJpgPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/heic-to-jpg'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/heic-to-jpg']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/heic-to-jpg'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/jpg-to-png' ? (
        <main id="main" className="flex-1">
          <JpgToPngPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/jpg-to-png'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/jpg-to-png']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/jpg-to-png'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/png-to-jpg' ? (
        <main id="main" className="flex-1">
          <PngToJpgPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/png-to-jpg'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/png-to-jpg']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/png-to-jpg'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/jpg-to-webp' ? (
        <main id="main" className="flex-1">
          <JpgToWebpPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/jpg-to-webp'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/jpg-to-webp']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/jpg-to-webp'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/webp-to-jpg' ? (
        <main id="main" className="flex-1">
          <WebpToJpgPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/webp-to-jpg'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/webp-to-jpg']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/webp-to-jpg'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/png-to-webp' ? (
        <main id="main" className="flex-1">
          <PngToWebpPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/png-to-webp'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/png-to-webp']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/png-to-webp']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/png-to-webp']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/png-to-webp']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/png-to-webp']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/png-to-webp']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/png-to-webp']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/png-to-webp']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/png-to-webp']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/png-to-webp']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/png-to-webp']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/png-to-webp'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/webp-to-png' ? (
        <main id="main" className="flex-1">
          <WebpToPngPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/webp-to-png'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/webp-to-png']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/webp-to-png']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/webp-to-png']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/webp-to-png']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/webp-to-png']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/webp-to-png']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/webp-to-png']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/webp-to-png']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/webp-to-png']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/webp-to-png']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/webp-to-png']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/webp-to-png'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/svg-to-png' ? (
        <main id="main" className="flex-1">
          <SvgToPngPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/svg-to-png'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/svg-to-png']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/svg-to-png']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/svg-to-png']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/svg-to-png']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/svg-to-png']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/svg-to-png']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/svg-to-png']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/svg-to-png']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/svg-to-png']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/svg-to-png']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/svg-to-png']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/svg-to-png'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/avif-to-jpg' ? (
        <main id="main" className="flex-1">
          <AvifToJpgPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/avif-to-jpg'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/avif-to-jpg']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/avif-to-jpg'],
                  }
                : undefined
            }
          />
        </main>
      ) : currentPath === '/bmp-to-jpg' ? (
        <main id="main" className="flex-1">
          <BmpToJpgPage
            onNavigate={handleNavigate}
            lang={lang}
            tool={activeLocale ? activeLocale.tools['/bmp-to-jpg'] : undefined}
            toolRegistry={activeLocale?.tools}
            categoryLabels={activeLocale?.categories}
            esStrings={
              lang === 'es' && esLocale && esLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: esLocale.ui.toolPageLayout,
                    uploadZone: esLocale.ui.uploadZone,
                    comparisonModal: esLocale.ui.comparisonModal,
                    toolUi: esLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
ptStrings={
              lang === 'pt' && ptLocale && ptLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: ptLocale.ui.toolPageLayout,
                    uploadZone: ptLocale.ui.uploadZone,
                    comparisonModal: ptLocale.ui.comparisonModal,
                    toolUi: ptLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
frStrings={
              lang === 'fr' && frLocale && frLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: frLocale.ui.toolPageLayout,
                    uploadZone: frLocale.ui.uploadZone,
                    comparisonModal: frLocale.ui.comparisonModal,
                    toolUi: frLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
deStrings={
              lang === 'de' && deLocale && deLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: deLocale.ui.toolPageLayout,
                    uploadZone: deLocale.ui.uploadZone,
                    comparisonModal: deLocale.ui.comparisonModal,
                    toolUi: deLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
itStrings={
              lang === 'it' && itLocale && itLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: itLocale.ui.toolPageLayout,
                    uploadZone: itLocale.ui.uploadZone,
                    comparisonModal: itLocale.ui.comparisonModal,
                    toolUi: itLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
idStrings={
              lang === 'id' && idLocale && idLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: idLocale.ui.toolPageLayout,
                    uploadZone: idLocale.ui.uploadZone,
                    comparisonModal: idLocale.ui.comparisonModal,
                    toolUi: idLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
ruStrings={
              lang === 'ru' && ruLocale && ruLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: ruLocale.ui.toolPageLayout,
                    uploadZone: ruLocale.ui.uploadZone,
                    comparisonModal: ruLocale.ui.comparisonModal,
                    toolUi: ruLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
jaStrings={
              lang === 'ja' && jaLocale && jaLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: jaLocale.ui.toolPageLayout,
                    uploadZone: jaLocale.ui.uploadZone,
                    comparisonModal: jaLocale.ui.comparisonModal,
                    toolUi: jaLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
koStrings={
              lang === 'ko' && koLocale && koLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: koLocale.ui.toolPageLayout,
                    uploadZone: koLocale.ui.uploadZone,
                    comparisonModal: koLocale.ui.comparisonModal,
                    toolUi: koLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
zhStrings={
              lang === 'zh' && zhLocale && zhLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: zhLocale.ui.toolPageLayout,
                    uploadZone: zhLocale.ui.uploadZone,
                    comparisonModal: zhLocale.ui.comparisonModal,
                    toolUi: zhLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
bnStrings={
              lang === 'bn' && bnLocale && bnLocale.tools['/bmp-to-jpg']
                ? {
                    layoutUi: bnLocale.ui.toolPageLayout,
                    uploadZone: bnLocale.ui.uploadZone,
                    comparisonModal: bnLocale.ui.comparisonModal,
                    toolUi: bnLocale.toolUi['/bmp-to-jpg'],
                  }
                : undefined
            }
          />
        </main>
      ) : isNotFound ? (
        <main id="main" className="flex-1">
          <NotFoundPage onNavigate={handleNavigate} lang={lang} allToolsPath={allToolsPath} />
        </main>
      ) : (
        renderHome(null)
      )}
      </Suspense>
      </BlogContext.Provider>

      {/* 3. Footer */}
      <Footer
        onNavigate={handleNavigate}
        strings={
          activeUi
            ? {
                ...activeUi.footer,
                toolsLinks: [...activeUi.footer.toolsLinks],
                legalLinks: [...activeUi.footer.legalLinks],
                guidesLinks: [...activeUi.footer.guidesLinks],
                moreLinks: [...activeUi.footer.moreLinks],
                directoryLinks: [...activeUi.footer.directoryLinks],
              }
            : undefined
        }
        localizePath={activeUi ? (slug) => toLocalizedPath(slug, lang) : undefined}
        directoryLabel={activeUi?.toolsDirectory.allTools}
      />

      {/* Comparison Modal */}
      {comparisonTarget && (
        <Suspense fallback={null}>
        <ComparisonModal
          image={comparisonTarget}
          onClose={() => setComparisonTarget(null)}
          titlePrefix={activeUi?.comparisonModal.titlePrefix}
          beforeLabel={activeUi?.comparisonModal.beforeLabel}
          afterLabel={activeUi?.comparisonModal.afterLabel}
          closeLabel={activeUi?.comparisonModal.closeLabel}
          instruction={activeUi?.comparisonModal.instruction}
          sliderLabel={activeUi?.comparisonModal.sliderLabel}
          sideBySideLabel={activeUi?.comparisonModal.sideBySideLabel}
          zoomInLabel={activeUi?.comparisonModal.zoomInLabel}
          zoomOutLabel={activeUi?.comparisonModal.zoomOutLabel}
          originalLabel={activeUi?.comparisonModal.originalLabel}
          outputLabel={activeUi?.comparisonModal.outputLabel}
          reductionLabel={activeUi?.comparisonModal.reductionLabel}
          sizeChangeLabel={activeUi?.comparisonModal.sizeChangeLabel}
          qualityLabel={activeUi?.comparisonModal.qualityLabel}
          formatLabel={activeUi?.comparisonModal.formatLabel}
          modalAriaLabel={activeUi?.comparisonModal.modalAriaLabel}
          altCompressed={activeUi?.comparisonModal.altCompressed}
          altOriginal={activeUi?.comparisonModal.altOriginal}
          altProcessed={activeUi?.comparisonModal.altProcessed}
        />
        </Suspense>
      )}
    </div>
  );
}
