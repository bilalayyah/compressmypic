// "Related guides" hook for tool pages — renders above the Related Tools
// section. Renders nothing until Batch 3 articles exist for this tool.
import React from 'react';
import type { SupportedLang } from '../../locales/config';
import { getBlogArticlesForTool } from '../../data/blogArticles';
import { localizePath } from '../../locales/alternates';
import { useBlog } from './BlogContext';
import { BlogCard } from './BlogCard';

// Internal-linking fix #2 (2026-11-21): the 3 guide pages link OUT to tools
// + articles (see GuideRelatedLinks); the link back IN lives here — the
// guide for one of these 3 tools is linked under its articles, so the
// guide <-> tool <-> article graph is two-way. Titles are the guides'
// own h1s, copied verbatim (already human-translated in every locale).
const TOOL_GUIDE: Record<string, { path: string; titles: Record<SupportedLang, string> }> = {
  '/compress-image-to-100kb': {
    path: '/guides/reduce-image-size-to-100kb',
    titles: {
      en: 'How to Reduce Image Size to 100KB for Websites and Email',
      de: 'Bild auf 100 KB verkleinern für Websites und E-Mails',
      es: 'Cómo reducir el tamaño de una imagen a 100 KB para sitios web y correo electrónico',
      fr: 'Comment réduire la taille d’une image à 100 Ko pour le web et l’e-mail',
      id: 'Cara Mengurangi Ukuran Gambar menjadi 100KB untuk Situs Web dan Email',
      it: 'Come ridurre le dimensioni di un’immagine a 100 KB per siti web ed email',
      ja: '画像サイズを100KBまで小さくする方法｜ウェブサイトとメール用',
      ko: '웹사이트와 이메일용 이미지 크기를 100KB로 줄이는 방법',
      pt: 'Como reduzir o tamanho de uma imagem para 100 KB para sites e e-mail',
      ru: 'Как уменьшить размер изображения до 100 КБ для сайтов и электронной почты',
      zh: '如何把图片压缩到 100KB，用于网站和邮件',
    },
  },
  '/image-converter': {
    path: '/guides/jpg-vs-png-vs-webp',
    titles: {
      en: 'JPG vs PNG vs WebP — Which Format Should You Use?',
      de: 'JPG vs PNG vs WebP – Welches Format sollten Sie verwenden?',
      es: 'JPG vs PNG vs WebP: ¿qué formato debería usar?',
      fr: 'JPG vs PNG vs WebP : quel format utiliser ?',
      id: 'JPG vs PNG vs WebP — Format Mana yang Harus Anda Gunakan?',
      it: 'JPG vs PNG vs WebP: quale formato dovresti usare?',
      ja: 'JPG・PNG・WebPの違いと使い分け｜どれを選ぶべき？',
      ko: 'JPG vs PNG vs WebP — 어떤 형식을 사용해야 할까요?',
      pt: 'JPG vs PNG vs WebP: qual formato devo usar?',
      ru: 'JPG против PNG против WebP — какой формат выбрать?',
      zh: 'JPG、PNG 与 WebP 对比——应该选择哪种格式？',
    },
  },
  '/image-resizer': {
    path: '/guides/compress-images-for-whatsapp',
    titles: {
      en: 'How to Compress Images for WhatsApp Without Losing Quality',
      de: 'Bilder für WhatsApp komprimieren ohne Qualitätsverlust',
      es: 'Cómo comprimir imágenes para WhatsApp sin perder calidad',
      fr: 'Comment compresser des images pour WhatsApp sans perdre en qualité',
      id: 'Cara Mengompres Gambar untuk WhatsApp Tanpa Kehilangan Kualitas',
      it: 'Come comprimere le immagini per WhatsApp senza perdere qualità',
      ja: 'WhatsApp用に画質を落とさず画像を圧縮する方法',
      ko: '화질 저하 없이 WhatsApp용 이미지를 압축하는 방법',
      pt: 'Como comprimir imagens para WhatsApp sem perder qualidade',
      ru: 'Как сжать изображения для WhatsApp без потери качества',
      zh: '如何在 WhatsApp 上压缩图片而不损失画质',
    },
  },
};

interface ToolRelatedArticlesProps {
  toolSlug: string;
  lang: SupportedLang;
  /** Localized tool name, for the section heading. */
  toolName: string;
  categories?: Array<{ id: string; label: string }>;
}

export function ToolRelatedArticles({ toolSlug, lang, toolName, categories }: ToolRelatedArticlesProps) {
  const { strings } = useBlog();
  // The blog registry keys toolSlug WITH a leading slash ('/compress-image-…');
  // normalize so a slash-less caller can never silently empty this block.
  const key = toolSlug.startsWith('/') ? toolSlug : `/${toolSlug}`;
  const articles = getBlogArticlesForTool(key, lang);
  if (articles.length === 0) return null;
  const guide = TOOL_GUIDE[key];

  return (
    <section aria-label={strings.relatedArticlesForTool.replace('{tool}', toolName)} className="mt-10">
      <h2 className="text-2xl font-bold mb-5">
        {strings.relatedArticlesForTool.replace('{tool}', toolName)}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <BlogCard key={a.id} article={a} lang={lang} categories={categories} />
        ))}
      </div>
      {guide ? (
        <p className="mt-5 text-sm">
          <span className="text-[var(--ink-2)]">{strings.guidesHeading}: </span>
          <a href={localizePath(guide.path, lang)} className="font-semibold text-[#dc2626] hover:underline">
            {guide.titles[lang]} →
          </a>
        </p>
      ) : null}
    </section>
  );
}
