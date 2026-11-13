// German UI strings — assembled for src/locales/de/ui.ts
// = i18n-de.ts (export DE) + tool-ui-de.ts (export TOOL_UI_DE).
// Neither source has imports. HOME_ENTRY_DE from i18n-de.ts is NOT
// included here: it is already merged as TOOLS_REGISTRY_DE[0] in
// src/locales/de/tools.ts, mirroring the PT ui.ts (PT + TOOL_UI_PT only).

// German (de) UI strings for CompressMyPic — standard German, Sie form.
// Mirrors ~/workspace/compressmypic/pt-fr/i18n-pt.ts exactly: same 15
// sections, same keys within each section, same export shape.
// Source: English originals in /tmp/cmpic-deit (Hero, FaqSection,
// EducationalContent, ToolsDirectorySection, ShareSection, Header, Footer,
// ToolPageLayout, UploadZone, ComparisonModal, home entry, index.html,
// App.tsx guides section, tools.ts categories). PT file used as structural
// template only — no PT text copied.
// Brand name CompressMyPic is never translated. URLs, bilalayyah@gmail.com and format
// names (JPG/PNG/WebP/HEIC/JPEG/SVG/AVIF/BMP/GIF/PDF) stay as-is. "ZIP" is kept as a
// file-format term. "online" stays "online". Placeholders: {name} = tool/file name,
// {max} = max size in MB, {year} = current year, {count} = number of extra errors,
// {current} = current theme, {progress} = ZIP progress %, {bytes} = byte size,
// {formats} = supported format list.
// NOTE on footer links: like ES/PT, this dictionary keeps ENGLISH slugs in the
// footer (legal links /privacy, /terms, /about, /contact; directory links use
// English tool slugs); the app maps them to the current language via
// toLocalizedPath at render.
// NOTE on guidesSection cards: like ES/PT, cards carry NO `link` key — the guide
// hrefs live in App.tsx.
// NOTE on header: the 11 language-switcher native names (English, Español,
// Português, Deutsch, Français, 日本語, Bahasa Indonesia, Italiano, Русский,
// 한국어, 简体中文) live in the app's SUPPORTED_LANGUAGES config, not in this
// dictionary — same as ES/PT.

export const DE = {
  header: {
    home: 'Startseite',
    tools: 'Tools',
    howItWorks: 'So funktioniert es',
    faq: 'Häufige Fragen',
    about: 'Über uns',
    contact: 'Kontakt',
    compressImages: 'Bilder komprimieren',
    themeLight: 'Heller Modus',
    themeDark: 'Dunkler Modus',
    themeSystem: 'Systemstandard',
    languageLabel: 'Sprache',
    homeAriaLabel: 'CompressMyPic – Kostenloser Bildkompressor online',
    themeLightShort: 'Hell', // 'Light'
    themeDarkShort: 'Dunkel', // 'Dark'
    themeSystemShort: 'System', // 'System'
    themeHeading: 'Design', // 'Theme' (mobile drawer heading + theme menu aria-label)
    menuAriaLabel: 'Navigationsmenü ein- oder ausblenden', // 'Toggle navigation menu'
    themeAriaLabel: 'Farbdesign ändern (aktuell: {current})', // 'Change color theme (Current: {current})'
    themeTitle: 'Design: {current}', // 'Theme: {current}'
    aboutUs: 'Über uns', // 'About Us' (mobile drawer)
    contactUs: 'Kontakt', // 'Contact Us' (mobile drawer)
  },
  footer: {
    blurb:
      'Schnelle, sichere und private Bildkomprimierung direkt in Ihrem Browser. Optimieren Sie JPG-, PNG- und WebP-Bilder, ohne Ihre Daten an einen externen Server zu senden.',
    privacyNote: '100 % Datenschutz auf Ihrem Gerät',
    toolsHeading: 'Bild-Tools',
    legalHeading: 'Vertrauen & Rechtliches',
    guidesHeading: 'Anleitungen',
    moreHeading: 'Weitere Hilfsmittel',
    directoryHeading: 'Erweiterte Tools zum Komprimieren, Bearbeiten und Entwickeln',
    processedLocally: 'Lokal verarbeitet mit HTML5 Canvas',
    bottomRights:
      '© {year} CompressMyPic. Alle Rechte vorbehalten. Kostenloses Browser-Tool zur Bildkomprimierung.',
    contactLabel: 'Kontakt: bilalayyah@gmail.com',
    toolsLinks: [
      { slug: '/', label: 'Bilder komprimieren' },
      { slug: '/image-resizer', label: 'Bildgröße ändern' },
      { slug: '/image-converter', label: 'Bildkonverter' },
      { slug: '/rotate-flip-image', label: 'Bild drehen und spiegeln' },
      { slug: '/image-to-pdf', label: 'Bild zu PDF' },
      { slug: '/remove-image-metadata', label: 'Metadaten entfernen' },
      { slug: '/remove-background', label: 'Hintergrund entfernen' },
    ],
    legalLinks: [
      { slug: '/privacy', label: 'Datenschutzerklärung' },
      { slug: '/terms', label: 'Nutzungsbedingungen' },
      { slug: '/about', label: 'Über uns' },
      { slug: '/contact', label: 'Support kontaktieren' },
    ],
    guidesLinks: [
      {
        slug: '/guides/compress-images-for-whatsapp',
        label: 'Bilder für WhatsApp komprimieren ohne Qualitätsverlust',
      },
      {
        slug: '/guides/jpg-vs-png-vs-webp',
        label: 'JPG vs. PNG vs. WebP: Welches Format sollten Sie verwenden?',
      },
      {
        slug: '/guides/reduce-image-size-to-100kb',
        label: 'Bildgröße auf 100 KB reduzieren für Web und E-Mail',
      },
    ],
    moreLinks: [
      { slug: '/image-metadata-viewer', label: 'Metadaten- & EXIF-Viewer' },
      { slug: '/favicon-generator', label: 'Favicon-Generator' },
      { slug: '/image-color-picker', label: 'Bild-Farbwähler' },
      { slug: '/image-dimensions-checker', label: 'Bildgrößen-Prüfer' },
    ],
    directoryLinks: [
      { slug: '/compress-image-to-50kb', label: 'Auf 50 KB komprimieren' },
      { slug: '/compress-image-to-100kb', label: 'Auf 100 KB komprimieren' },
      { slug: '/compress-image-to-200kb', label: 'Auf 200 KB komprimieren' },
      { slug: '/compress-image-to-500kb', label: 'Auf 500 KB komprimieren' },
      { slug: '/target-file-size-compressor', label: 'Kompressor nach Dateigröße' },
      { slug: '/bulk-image-compressor', label: 'Stapel-Bildkompressor' },
      { slug: '/bulk-image-resizer', label: 'Stapel-Bildgrößenänderung' },
      { slug: '/bulk-image-converter', label: 'Stapel-Bildkonverter' },
      { slug: '/web-image-optimizer', label: 'Web-Bildoptimierer' },
      { slug: '/gif-compressor', label: 'GIF-Kompressor' },
      { slug: '/image-cropper', label: 'Bild-Zuschneider' },
      { slug: '/image-watermark', label: 'Bild-Wasserzeichen' },
      { slug: '/blur-pixelate-image', label: 'Bild weichzeichnen und verpixeln' },
      { slug: '/add-text-to-image', label: 'Text zu Bild hinzufügen' },
      { slug: '/image-border-generator', label: 'Bildrahmen-Generator' },
      { slug: '/round-image-corners', label: 'Bildecken abrunden' },
      { slug: '/image-brightness-editor', label: 'Bildhelligkeits-Editor' },
      { slug: '/image-contrast-editor', label: 'Bildkontrast-Editor' },
      { slug: '/image-saturation-editor', label: 'Bildsättigungs-Editor' },
      { slug: '/image-filters', label: 'Bildfilter' },
      { slug: '/add-background-to-image', label: 'Hintergrund zu Bild hinzufügen' },
      { slug: '/image-splitter', label: 'Bild-Teiler' },
      { slug: '/image-dpi-changer', label: 'DPI ändern' },
      { slug: '/image-to-base64', label: 'Bild zu Base64' },
      { slug: '/base64-to-image', label: 'Base64 zu Bild' },
      { slug: '/image-color-palette-extractor', label: 'Bild-Farbpaletten-Extraktor' },
      { slug: '/gif-maker', label: 'GIF-Maker' },
      { slug: '/image-collage-maker', label: 'Bildcollagen-Maker' },
      { slug: '/heic-to-jpg', label: 'HEIC zu JPG' },
      { slug: '/jpg-to-png', label: 'JPG zu PNG' },
      { slug: '/png-to-jpg', label: 'PNG zu JPG' },
      { slug: '/jpg-to-webp', label: 'JPG zu WebP' },
      { slug: '/webp-to-jpg', label: 'WebP zu JPG' },
      { slug: '/png-to-webp', label: 'PNG zu WebP' },
      { slug: '/webp-to-png', label: 'WebP zu PNG' },
      { slug: '/svg-to-png', label: 'SVG zu PNG' },
      { slug: '/avif-to-jpg', label: 'AVIF zu JPG' },
      { slug: '/bmp-to-jpg', label: 'BMP zu JPG' },
    ],
  },
  hero: {
    pill: '100 % private Komprimierung auf Ihrem Gerät · Kein Server-Upload',
    h1: 'Kostenloser Bildkompressor – Bilder online komprimieren und Größe reduzieren ohne Qualitätsverlust',
    sub: 'Reduzieren Sie die Dateigröße Ihrer Bilder ohne sichtbaren Qualitätsverlust. Komprimieren Sie Bilder online kostenlos mit unserem kostenlosen Bild- und Fotokompressor – einem Online-Bildoptimierer für JPG, PNG, WebP und HEIC. Schnell, sicher, ohne Anmeldung, ohne Wasserzeichen und mit einfacher Bildkomprimierung direkt in Ihrem Browser.',
    badge1: 'Ihre Bilder verlassen niemals Ihr Gerät',
    badge2: 'Sofortige Verarbeitung im Browser',
    badge3: 'JPG, PNG, WebP & HEIC unterstützt',
  },
  toolsDirectory: {
    heading: 'Weitere kostenlose Tools zur Bildverarbeitung',
    subheading:
      'Jedes Tool funktioniert zu 100 % in Ihrem Browser: kein Server-Upload, keine Anmeldung und kein Wasserzeichen.',
    eyebrow: 'Alle Tools direkt im Browser', // 'All Browser-Native Tools'
    allTools: 'Alle Tools', // 'All Tools'
    openTool: 'Tool öffnen', // 'Open tool'
  },
  educational: {
    sections: [
      {
        heading: 'Was ist Bildkomprimierung?',
        body: 'Bildkomprimierung ist der Prozess, die Dateigröße einer Grafik zu reduzieren, ohne die sichtbare Qualität des Bildes über ein akzeptables Maß hinaus zu beeinträchtigen. Wenn eine Kamera oder ein Smartphone ein Foto speichert, legt es eine riesige Datenmenge ab, und ein großer Teil dieser Informationen ist mit bloßem Auge nicht wahrnehmbar, wenn er entfernt oder vereinfacht wird. CompressMyPic ist ein kostenloser Online-Bildoptimierer und ein Tool zur Reduzierung der Bildgröße, das als Foto- und Bildkompressor für JPG-, PNG- und WebP-Dateien funktioniert.\n\nDurch die Analyse dieser Muster ordnen Bildkomprimierungsalgorithmen redundante Informationen neu an oder verwerfen sie gezielt. Die resultierende Datei benötigt deutlich weniger Speicherplatz und wird viel schneller über das Internet übertragen. Diese Anleitung zeigt, wie Sie ein Bild ohne Qualitätsverlust komprimieren – mit dem Qualitätsschieberegler, den Voreinstellungen und der Formatauswahl von CompressMyPic.',
      },
      {
        heading: 'Warum sollten Sie Ihre Bilder komprimieren?',
        body: 'Nicht optimierte Bilder sind eines der größten Hindernisse für die Leistung einer Website, den Speicherplatz und den mobilen Datenverbrauch. Das Komprimieren Ihrer Bilder bringt sofortige und konkrete Vorteile:',
        bullets: [
          'Schnelleres Laden der Website: Seiten mit komprimierten Bildern laden bis zu 70 % schneller, was Ihre Core Web Vitals (Largest Contentful Paint) und Ihr Ranking in Suchmaschinen verbessert. Wenn Sie die Bildgröße Ihrer Website reduzieren, bleiben Besucher länger und springen seltener ab.',
          'Weniger Speicherplatz: Senken Sie die Kosten für Cloud-Hosting, Serverfestplatten und Backups, indem Sie optimierte Bilddateien statt schwerer Originale speichern.',
          'Bilder lassen sich leichter teilen: Nie wieder stoßen Sie an die strengen Anhanglimits von E-Mails oder an die Sendelimits von Messengern. Komprimierte Fotos werden sofort angehängt und versendet, selbst bei langsamen mobilen Verbindungen oder begrenzten Datentarifen.',
          'Weniger Bandbreitenverbrauch: Sparen Sie Ihren Nutzern Geld bei mobilen Datentarifen und verhindern Sie, dass Besucher Ihre Website verlassen. Kleinere Dateien werden schneller heruntergeladen, vor allem bei langsamen mobilen Verbindungen.',
        ],
      },
      {
        heading: 'So funktioniert es',
        body: 'Das Komprimieren Ihrer Fotos dauert nur wenige Sekunden: kein Konto, keine Programme und keine Uploads. So komprimieren Sie ein Bild in drei einfachen Schritten ohne Qualitätsverlust.',
        bullets: [
          'Schritt 1 — Laden Sie Ihre Bilder hoch: Ziehen Sie Ihre JPG-, PNG-, WebP- oder HEIC-Bilder in den Upload-Bereich, klicken Sie auf „Dateien durchsuchen“, um sie auszuwählen, oder fügen Sie ein Bild mit Strg+V ein. Sie können mehrere Bilder auf einmal hochladen, bis zu 20 MB pro Bild.',
          'Schritt 2 — Passen Sie die Qualität an und wählen Sie das Format: Wählen Sie eine Voreinstellung – Niedrig, Ausgewogen oder Hoch – oder bewegen Sie den Qualitätsschieberegler von 10 % bis 100 %, und entscheiden Sie, ob Sie das Originalformat behalten oder in JPG, PNG oder WebP konvertieren. Sehen Sie die Größe vorher und nachher live für jedes Bild und nutzen Sie den interaktiven Vergleichsschieberegler, um das visuelle Ergebnis zu prüfen.',
          'Schritt 3 — Laden Sie Ihre komprimierten Bilder herunter: Laden Sie jedes komprimierte Bild einzeln herunter oder klicken Sie auf „Alle herunterladen (ZIP)“, um den gesamten Stapel in einer einzigen Datei herunterzuladen. Ihre Bilder werden direkt in Ihrem Browser komprimiert, also gibt es nichts zu warten und nichts hochzuladen.',
        ],
      },
      {
        heading: 'Warum diesen kostenlosen Bildkompressor verwenden?',
        body: 'CompressMyPic ist ein kostenloser Bildkompressor ohne Anmeldung und ohne Wasserzeichen, gemacht für Alltagsfotos, Website-Bilder und Beiträge in sozialen Netzwerken.',
        bullets: [
          'JPG, PNG, WebP und HEIC komprimieren: ein einziger Bildkompressor für die Formate, die Sie wirklich verwenden. Komprimieren Sie JPG- und JPEG-Fotos, komprimieren Sie PNG-Grafiken unter Erhalt der Transparenz und komprimieren Sie WebP-Bilder für die kleinsten Dateien.',
          'Bildgröße reduzieren ohne Qualitätsverlust: Die intelligente Komprimierung entfernt redundante Daten und Metadaten, und das Bild sieht praktisch genauso aus wie das Original. Die Voreinstellung „Ausgewogen“ ist der beste Ausgangspunkt, und der Vorher-Nachher-Vergleich lässt Sie die Qualität selbst prüfen.',
          'Stapel-Bildkompressor: Komprimieren Sie mehrere Bilder auf einmal: Mit diesem Stapel-Bildkompressor komprimieren Sie viele Bilder gleichzeitig mit denselben Einstellungen und laden sie alle zusammen über den Button „Alle herunterladen (ZIP)“ herunter, statt die Dateien einzeln zu speichern.',
          'Bilder für WhatsApp, Instagram und Facebook komprimieren: Reduzieren Sie die Größe Ihrer Fotos, damit sie schnell über WhatsApp versendet und problemlos auf Instagram und Facebook veröffentlicht werden. Kleinere Dateien verbrauchen weniger mobile Daten und werden deutlich seltener wegen zu großer Dateigröße abgelehnt.',
          'Bildgröße auf 20 KB, 50 KB, 100 KB oder 200 KB reduzieren: Bewegen Sie den Qualitätsschieberegler Schritt für Schritt nach unten und beobachten Sie die Live-Größe vorher und nachher, bis Sie Ihr Ziel erreichen: 200 KB, 100 KB, 50 KB oder sogar 20 KB. Der Wechsel des Ausgabeformats zu WebP hilft in der Regel, das Ziel mit weniger sichtbarem Qualitätsverlust zu erreichen.',
        ],
      },
      {
        heading: 'JPG, PNG und WebP komprimieren: Welches Format sollten Sie wählen?',
        body: 'JPG, PNG und WebP erfüllen unterschiedliche Aufgaben. Wenn Sie die Stärken jedes Formats kennen, wählen Sie die beste Option für Ihr Projekt.\n\nVergleichen Sie den sichtbaren Unterschied: Sie wissen nicht, wie viel Komprimierung akzeptabel ist? Nutzen Sie den Vorher-Nachher-Vergleich des Tools. Unser interaktiver Schieberegler zeigt Ihnen das Originalbild und die komprimierte Version nebeneinander, damit Sie sichtbare Artefakte oder Qualitätsverluste erkennen, bevor Sie herunterladen.',
        bullets: [
          'JPG-Kompressor — JPG online kostenlos komprimieren: ideal für Fotografien auf Ihrer Website, Ihrem Blog oder Ihrem Portfolio. Komprimieren Sie JPG online kostenlos und komprimieren Sie JPEG auf 100 KB, indem Sie den Qualitätsschieberegler nach unten bewegen und dabei die Live-Größe beobachten. Die JPEG-Komprimierung ist verlustbehaftet: Sie entfernt dauerhaft einige visuelle Daten, die das menschliche Auge kaum wahrnimmt. Deshalb können Sie ein Foto von Megabytes auf Kilobytes reduzieren, ohne sichtbaren Qualitätsverlust.',
          'PNG-Kompressor — PNG online kostenlos komprimieren: ideal für Grafiken, Screenshots, Logos und Bilder, die Transparenz benötigen, wie Logos, Icons oder Illustrationen. Komprimieren Sie PNG online kostenlos hier unter vollständigem Erhalt der Transparenz, für scharfe, pixelgenaue Grafiken. Die Konvertierung eines PNGs in WebP macht es oft deutlich kleiner.',
          'WebP-Bilder komprimieren — das moderne Format: ideal für die Web-Optimierung. WebP bietet eine hervorragende verlustbehaftete und verlustfreie Komprimierung, die in der Regel 25 % bis 35 % kleiner ist als JPEG oder PNG. Komprimieren Sie WebP-Bilddateien für die kleinste Größe bei vergleichbarer Qualität, und verwenden Sie WebP, wenn Sie Bilder für Webseiten optimieren möchten, ohne sichtbaren Qualitätsverlust. Es ist die beste Option für die meisten Websites.',
        ],
      },
      {
        heading: 'Wofür können Sie diesen Bildkompressor verwenden?',
        body: 'Ein einziger kostenloser Bildkompressor deckt die häufigsten Gründe ab, aus denen Menschen die Größe eines Bildes reduzieren müssen.',
        bullets: [
          'Bilder für das Web optimieren: Optimieren Sie die Bilder Ihrer Webseiten, damit sie schneller laden, Ihre Core Web Vitals verbessern und besser ranken. Kleinere Bilder bedeuten schnellere Seiten, zufriedenere Besucher und weniger Hosting-Bandbreite.',
          'Bilder für E-Mail-Anhänge komprimieren: Komprimieren Sie Bilder für E-Mail-Anhänge, indem Sie sie mit dem Qualitätsschieberegler verkleinern, bis jede Datei in das Anhanglimit Ihres E-Mail-Anbieters passt, und hängen Sie die heruntergeladenen Dateien an Ihre Nachricht an, statt der großen Originale.',
          'Ein Foto für Ihre Website komprimieren: Komprimieren Sie ein Foto für Ihre Website, Ihren Blog, Ihr Portfolio oder Ihren Online-Shop, bevor Sie es veröffentlichen. Produktfotos, Banner und Blogbilder bleiben scharf und belegen deutlich weniger Platz auf Ihrem Server.',
          'Dateigröße eines Fotos reduzieren: Reduzieren Sie die Dateigröße eines Fotos von Ihrem Smartphone oder Ihrer Kamera, bevor Sie es teilen, speichern oder drucken. Große Fotos werden schnell versendet, einfach gespeichert und problemlos verwaltet.',
        ],
      },
      {
        heading: 'Warum die Bildgröße wichtig ist',
        body: 'Große, hochauflösende Bilddateien sind das Ergebnis des rasanten Fortschritts der Kameratechnik: Bilder sind heute 2- bis 3-mal größer als noch vor wenigen Jahren. Wenn Sie die Bildgröße Ihrer Webseiten reduzieren und Bilder für das Web optimieren, lädt Ihre Website schneller, verbraucht weniger Bandbreite und rankt besser in den Suchergebnissen.\n\nAchten Sie bei der Suche nach einem guten Kompressor darauf, ob er: 1) die Qualität nicht opfert, 2) Ihre Daten privat hält (Verarbeitung auf Ihrem Gerät) und 3) Bilder schnell verarbeitet, ohne Ihre Dateien an einen entfernten Server zu senden. Genau dafür wurde CompressMyPic entwickelt.',
      },
      {
        heading: 'Optimierungstipps: Bildgröße reduzieren ohne Qualitätsverlust',
        body: '',
        bullets: [
          'Beginnen Sie mit der Voreinstellung „Ausgewogen“: Die Voreinstellung „Ausgewogen“ (70 % Qualität) bietet die beste Balance für die meisten Bilder: deutlich kleinere Dateien bei großer visueller Ähnlichkeit mit dem Original.',
          'Wählen Sie das richtige Format: Für Fotografien erzeugen JPG oder WebP immer kleinere Dateien als PNG. Für Logos und Liniengrafiken mit Transparenz verwenden Sie PNG.',
          'Zielen Sie auf eine Zielgröße: Für die Verwendung auf Websites streben Sie Bilder unter 200 KB an. Für E-Mails und Nachrichten bleiben Sie unter 1 MB, damit sie schnell zugestellt werden. Nutzen Sie den Qualitätsschieberegler und die Live-Größe, um Ihre Zielgröße zu erreichen.',
          'Finden Sie den idealen Punkt: Stellen Sie den Qualitätsschieberegler auf 85–90 % für Hauptbilder, bei denen die Qualität zählt; 70–80 % ist in der Regel die ideale Balance für die allgemeine Web-Nutzung; 50–60 % ist besser für Vorschaubilder oder wenn die Größe am wichtigsten ist.',
          'Testen Sie WebP für die kleinsten Dateien: Der Wechsel des Ausgabeformats zu WebP reduziert ein JPG oder PNG in der Regel um weitere 25 % bis 35 % bei vergleichbarer Qualität – eine einfache Möglichkeit, die Bildgröße zu reduzieren, ohne Qualitätsverlust.',
        ],
      },
    ],
  },
  faqSection: {
    heading: 'Häufige Fragen',
    subheading:
      'Alles, was Sie über das kostenlose Online-Komprimieren von Bildern mit CompressMyPic wissen müssen.',
    faqs: [
      {
        id: 'faq-1',
        question: 'Was ist CompressMyPic?',
        answer:
          'CompressMyPic ist ein kostenloser Online-Bildkompressor, der die Größe von JPG-, PNG-, WebP- und HEIC-Dateien direkt in Ihrem Browser reduziert. Sie müssen nichts installieren und kein Konto erstellen: Laden Sie einfach das Bild hoch, passen Sie die Qualität an und laden Sie das Ergebnis herunter.',
      },
      {
        id: 'faq-2',
        question: 'Wie komprimiere ich ein Bild online kostenlos?',
        answer:
          'Ziehen Sie Ihre Bilder in den Upload-Bereich oder klicken Sie auf „Dateien durchsuchen“, um sie auf Ihrem Computer oder Smartphone auszuwählen. Wählen Sie dann eine Voreinstellung – Niedrig, Ausgewogen oder Hoch – oder passen Sie die Qualitätssteuerung an, und laden Sie die komprimierten Bilder herunter. Alles kostenlos, ohne Anmeldung.',
      },
      {
        id: 'faq-3',
        question: 'Werden meine Bilder an einen Server gesendet?',
        answer:
          'Nein. Die gesamte Komprimierung findet in Ihrem Browser auf Ihrem eigenen Gerät statt. Ihre Bilder werden niemals gesendet, gespeichert oder von jemandem angesehen. Wenn Sie den Tab aktualisieren oder schließen, verschwinden die Dateien aus dem Speicher des Browsers.',
      },
      {
        id: 'faq-4',
        question: 'Muss ich ein Konto erstellen oder etwas bezahlen?',
        answer:
          'Nein. CompressMyPic ist zu 100 % kostenlos und verlangt keine Anmeldung, keine E-Mail-Adresse und kein Passwort. Es gibt kein Limit dafür, wie viele Bilder Sie komprimieren können, und keine versteckten kostenpflichtigen Tarife.',
      },
      {
        id: 'faq-5',
        question: 'Erhalten die komprimierten Bilder ein Wasserzeichen?',
        answer:
          'Nein. Die Bilder, die Sie herunterladen, sind sauber – ohne Logo, Text oder andere hinzugefügte Markierung. Was Sie herunterladen, ist nur Ihr Bild, kleiner und einsatzbereit.',
      },
      {
        id: 'faq-6',
        question: 'Welche Bildformate kann ich komprimieren?',
        answer:
          'Sie können JPG (JPEG), PNG, WebP und HEIC komprimieren – einschließlich iPhone-Fotos, die standardmäßig in HEIC gespeichert werden. Sie können außerdem das Originalformat behalten oder beim Herunterladen zwischen JPG, PNG und WebP konvertieren.',
      },
      {
        id: 'faq-7',
        question: 'Wie groß darf eine Datei maximal sein?',
        answer:
          'Das Limit beträgt 20 MB pro Bild, was hochauflösende Kamerafotos und große Screenshots abdeckt. Da alles auf Ihrem Gerät verarbeitet wird, werden selbst große Dateien schnell komprimiert.',
      },
      {
        id: 'faq-8',
        question: 'Kann ich mehrere Bilder gleichzeitig komprimieren?',
        answer:
          'Ja. Sie können mehrere Bilder auf einmal hochladen, dieselben Einstellungen auf alle anwenden und alles zusammen über den Button „Alle herunterladen (ZIP)“ herunterladen – oder jedes Bild einzeln, wenn Sie das bevorzugen.',
      },
      {
        id: 'faq-9',
        question: 'Wie bringe ich ein Bild auf 100 KB?',
        answer:
          'Laden Sie das Bild hoch und bewegen Sie den Qualitätsschieberegler Schritt für Schritt nach unten, während Sie die Größe vorher und nachher beobachten, die für jedes Bild angezeigt wird. Wenn die komprimierte Größe nahe bei 100 KB liegt, laden Sie sie einfach herunter. Der Wechsel des Ausgabeformats zu WebP hilft, das Ziel mit weniger Qualitätsverlust zu erreichen.',
      },
      {
        id: 'faq-10',
        question: 'Verändert das Komprimieren die Abmessungen des Bildes?',
        answer:
          'Nein. Die Komprimierung reduziert nur die Dateigröße; Breite, Höhe und Seitenverhältnis des Bildes bleiben exakt wie beim Original. Wenn Sie die Abmessungen ändern möchten, verwenden Sie das Tool „Bildgröße ändern“.',
      },
      {
        id: 'faq-11',
        question: 'Wie funktioniert der Qualitätsschieberegler?',
        answer:
          'Er legt die Komprimierungsqualität von 10 % bis 100 % fest. Hohe Werte erhalten mehr Details und erzeugen größere Dateien; niedrige Werte machen die Dateien deutlich kleiner. Die Voreinstellungen Niedrig, Ausgewogen und Hoch stellen den Regler für Sie ein, und die Live-Größe vorher und nachher zeigt das Ergebnis jeder Änderung.',
      },
      {
        id: 'faq-12',
        question: 'Welches Ausgabeformat sollte ich wählen: JPG, PNG oder WebP?',
        answer:
          'Für Fotos erzeugen JPG oder WebP die kleinsten Dateien; WebP ist in der Regel 25 % bis 35 % kleiner als JPEG bei vergleichbarer Qualität, also die beste Option für Websites. Verwenden Sie PNG, wenn Sie Transparenz benötigen, etwa bei Logos und Icons.',
      },
      {
        id: 'faq-13',
        question: 'Bleibt die Transparenz von PNG erhalten?',
        answer:
          'Ja. Wenn Sie ein PNG komprimieren und die Ausgabe als PNG oder WebP behalten, bleibt die Transparenz erhalten. Beachten Sie nur, dass das JPEG-Format keine Transparenz unterstützt: Wenn Sie in JPG konvertieren, werden transparente Bereiche zu einem einfarbigen Hintergrund, standardmäßig Weiß.',
      },
      {
        id: 'faq-14',
        question: 'Wie komprimiere ich ein Bild für WhatsApp?',
        answer:
          'Laden Sie das Foto hoch, wählen Sie eine niedrigere Qualitätsvoreinstellung oder die Ausgabe als WebP und laden Sie die kleinere Datei herunter, bevor Sie sie auf WhatsApp teilen. Kleinere Fotos werden schneller gesendet, verbrauchen weniger mobile Daten und werden kaum wegen zu großer Dateigröße abgelehnt.',
      },
      {
        id: 'faq-15',
        question: 'Kann ich Bilder für Instagram und Facebook komprimieren?',
        answer:
          'Ja. Komprimieren Sie das Foto mit der Voreinstellung „Ausgewogen“ und laden Sie die kleinere JPG- oder WebP-Datei herunter. Sie wird schneller veröffentlicht und behält genügend Qualität für Beiträge, Stories und Profilbilder.',
      },
      {
        id: 'faq-16',
        question: 'Kann ich es auf dem Smartphone verwenden?',
        answer:
          'Ja. CompressMyPic funktioniert in den Browsern von iOS- und Android-Smartphones. Sie können ein Foto aus der Galerie auswählen oder ein neues Foto aufnehmen und zum Komprimieren hochladen – alles auf dem Smartphone.',
      },
      {
        id: 'faq-17',
        question: 'Wie sehe ich den Qualitätsunterschied vor dem Herunterladen?',
        answer:
          'Nutzen Sie den Vorher-Nachher-Vergleich: Der interaktive Schieberegler zeigt das Originalbild und die komprimierte Version nebeneinander, damit Sie prüfen können, ob ein sichtbarer Qualitätsverlust vorliegt, bevor Sie herunterladen.',
      },
      {
        id: 'faq-18',
        question: 'Warum ist die komprimierte Datei manchmal größer als das Original?',
        answer:
          'Das kann bei PNGs passieren, weil die verlustfreie PNG-Neukodierung den Qualitätsschieberegler ignoriert, und bei Bildern, die bereits stark komprimiert waren. In diesen Fällen zeigt das Tool einen Hinweis an, und Sie können die Originaldatei behalten oder die Ausgabe zu WebP oder JPG wechseln, die in der Regel deutlich kleiner sind.',
      },
      {
        id: 'faq-19',
        question: 'Eignen sich die komprimierten Bilder für meine Website oder meinen Online-Shop?',
        answer:
          'Ja. Kleinere Bilder lassen Ihre Seiten schneller laden, verbessern die Core Web Vitals und das Ranking bei Google und sparen Hosting-Bandbreite. Für die Web-Nutzung sollten Sie versuchen, jedes Bild unter 200 KB zu halten.',
      },
      {
        id: 'faq-20',
        question: 'Was kann ich außer dem Komprimieren von Bildern noch tun?',
        answer:
          'Die Website bietet insgesamt 48 kostenlose Tools: Größe ändern, Formate konvertieren, zuschneiden, drehen, Wasserzeichen hinzufügen, Hintergrund und Metadaten entfernen, GIFs und Collagen erstellen, Favicons generieren und vieles mehr. Alle funktionieren im Browser, ohne Anmeldung und ohne Server-Upload.',
      },
    ],
  },
  guidesSection: {
    heading: 'Anleitungen',
    subheading:
      'Schritt-für-Schritt-Anleitungen für kleinere Dateien ohne sichtbaren Qualitätsverlust.',
    cards: [
      {
        title: 'Bilder für WhatsApp komprimieren ohne Qualitätsverlust',
        desc: 'Reduzieren Sie die Fotogröße vor dem Versenden, damit sie scharf bleiben und schnell gesendet werden.',
        cta: 'Anleitung lesen →',
      },
      {
        title: 'JPG vs. PNG vs. WebP: Welches Format sollten Sie verwenden?',
        desc: 'Dateigröße, Qualität und Transparenz im Vergleich, damit Sie das richtige Format wählen.',
        cta: 'Anleitung lesen →',
      },
      {
        title: 'Bildgröße auf 100 KB reduzieren für Web und E-Mail',
        desc: 'Schritt für Schritt: Erreichen Sie 100 KB ohne sichtbaren Qualitätsverlust.',
        cta: 'Anleitung lesen →',
      },
    ],
  },
  shareSection: {
    heading: 'Teilen Sie CompressMyPic mit Freunden',
    text: 'War dieses Tool nützlich für Sie? Helfen Sie einem Freund, seine Bilder ebenfalls zu komprimieren – mit nur einem Fingertipp.',
    shareText:
      'Bilder online kostenlos komprimieren – ohne Anmeldung, ohne Wasserzeichen. Probieren Sie CompressMyPic:',
    siteUrl: 'https://compressmypic.online/',
    shareOn: 'Auf {name} teilen',
    copyLink: 'Link kopieren',
    copied: 'Kopiert!',
    share: 'Teilen',
    emailSubject: 'Kostenloser Bildkompressor – CompressMyPic', // 'Free Image Compressor – CompressMyPic'
    nativeShareTitle: 'CompressMyPic – Kostenloser Bildkompressor', // 'CompressMyPic – Free Image Compressor'
  },
  toolPageLayout: {
    home: 'Startseite',
    privacyPill: '100 % private Verarbeitung im Browser · Dateien verlassen niemals Ihr Gerät',
    noUploads: 'Kein Server-Upload',
    freeNote: 'Kostenlos · Keine Anmeldung · Kein Wasserzeichen',
    howToTitle: 'So verwenden Sie {name}',
    howToIntro:
      'Folgen Sie diesen einfachen Schritten, um Ihre Aufgabe direkt in Ihrem Browser zu erledigen.',
    featuresTitle: 'Warum {name} von CompressMyPic verwenden?',
    faqTitle: '{name} – Häufige Fragen',
    relatedTitle: 'Verwandte kostenlose Bild-Tools',
  },
  uploadZone: {
    dropText: 'Ziehen Sie Ihre Bilder hierher',
    browseButton: 'Dateien durchsuchen',
    browsePrefix: 'oder',
    browseSuffix: 'von Ihrem Computer oder Smartphone',
    orPaste: 'Einfügen (Strg+V) unterstützt',
    hint: 'Max. {max} MB pro Bild',
    errorTooBig: '„{name}“ überschreitet das Maximum von {max} MB.',
    errorBadType: '„{name}“ hat kein unterstütztes Format ({formats}).',
    errorUnreadable: '„{name}“ ist eine leere Datei (0 Byte).',
    errorMore: '(+{count} weitere Fehler)',
    formatsLabel: 'JPG, PNG, WebP, HEIC',
    ariaLabel:
      'Bereich zum Hochladen von Bildern. Ziehen Sie Dateien hierher oder klicken Sie, um Dateien zu durchsuchen.', // 'Upload images area. Drag and drop or click to browse files.'
    errorLoadFailed: 'Beschädigte oder unlesbare Datei.', // App.tsx handleFilesSelected catch: 'Corrupted or unreadable image file.'
  },
  comparisonModal: {
    titlePrefix: 'Visueller Qualitätsvergleich',
    beforeLabel: 'Original (vorher)',
    afterLabel: 'Komprimiert (nachher)',
    closeLabel: 'Vergleichsansicht schließen',
    instruction: 'Ziehen Sie den Schieberegler nach links oder rechts, um die Qualität pixelgenau zu prüfen.',
    sliderLabel: 'Schieberegler',
    sideBySideLabel: 'Nebeneinander',
    zoomInLabel: 'Vergrößern',
    zoomOutLabel: 'Verkleinern',
    originalLabel: 'Original:',
    outputLabel: 'Ergebnis:',
    reductionLabel: 'Reduzierung:',
    sizeChangeLabel: 'Größenänderung:',
    qualityLabel: 'Qualitätseinstellung:',
    formatLabel: 'Format:',
    modalAriaLabel: 'Bildvergleichsfenster', // 'Image comparison modal'
    altCompressed: 'Komprimierte Version von {name}', // 'Compressed version of {name}'
    altOriginal: 'Originalversion von {name}', // 'Original version of {name}'
    altProcessed: 'Verarbeitete Version von {name}', // 'Processed version of {name}'
  },
  homeMeta: {
    seoTitle: 'Kostenloser Bildkompressor online – 100 KB',
    seoDescription:
      'Bilder online kostenlos komprimieren – Dateigröße reduzieren ohne Qualitätsverlust. JPG, PNG und WebP komprimieren ohne Anmeldung und ohne Wasserzeichen.',
    h1: 'Kostenloser Bildkompressor online',
    subtitle: 'Verkleinern Sie JPG-, PNG-, WebP- und HEIC-Dateien direkt in Ihrem Browser.',
  },
  categories: {
    compress: 'Komprimieren',
    resize: 'Größe ändern',
    convert: 'Konvertieren',
    'crop-edit': 'Zuschneiden & Bearbeiten',
    'ai-tools': 'KI-Tools',
    create: 'Erstellen',
    privacy: 'Datenschutz-Tools',
    developer: 'Entwickler-Tools',
  },
  compressionControls: {
    modeLabel: 'Komprimierungsmodus', // 'Compression Mode'
    presetLow: 'Niedrige Komprimierung (85 %)', // 'Low Compression (85%)'
    presetBalanced: 'Ausgewogen (70 %)', // 'Balanced (70%)'
    presetHigh: 'Hohe Komprimierung (50 %)', // 'High Compression (50%)'
    presetCustom: 'Benutzerdefiniert', // 'Custom'
    formatLabel: 'Ausgabeformat', // 'Output Format'
    formatOriginal: 'Original', // 'Original'
    qualityLabel: 'Gewünschte Qualität:', // 'Quality Target:'
    qualityHigh: 'Hohe Detailtreue', // 'High Fidelity' (quality >= 80)
    qualityOptimal: 'Optimale Web-Balance', // 'Optimal Web Balance' (60–79)
    qualityMax: 'Maximale Platzeinsparung', // 'Max Space Savings' (< 60)
    qualityAriaLabel: 'Qualitätsschieberegler von 10 bis 100 Prozent', // 'Quality slider from 10 to 100 percent'
    compressAll: 'Alle erneut komprimieren', // 'Re-compress All'
    compressing: 'Komprimieren …', // 'Compressing...'
    clearAll: 'Alle löschen', // 'Clear All'
    clearAllTitle: 'Alle Bilder löschen', // 'Clear all images'
    transparencyTitle: 'Transparenzhinweis für die JPEG-Konvertierung', // 'Transparency Notice for JPEG Conversion'
    transparencyBody:
      'Das JPEG-Format unterstützt keine Transparenz (Alpha-Kanäle). Transparente Hintergründe werden durch einen einfarbigen Hintergrund ersetzt (standardmäßig Weiß). Wählen Sie PNG oder WebP, wenn Sie transparente Hintergründe behalten möchten.',
    pngTip:
      'PNG ist ein verlustfreies Format und ignoriert den Qualitätsschieberegler, daher kann das erneute Kodieren eines PNGs manchmal die Originalgröße erreichen oder überschreiten. Für PNGs mit Fotocharakter erzeugen WebP oder JPG in der Regel 50–80 % kleinere Dateien.',
  },
  resultsList: {
    summary: 'Zusammenfassung der Komprimierung', // 'Compression Summary'
    image: 'Bild', // 'Image' (count === 1)
    images: 'Bilder', // 'Images' (count !== 1)
    totalOriginal: 'Original gesamt:', // 'Total Original:'
    totalCompressed: 'Komprimiert gesamt:', // 'Total Compressed:'
    totalSaved: 'Insgesamt gespart:', // 'Total Saved:'
    processing: 'Verarbeiten …', // 'Processing...'
    grewBy: '(um {bytes} gewachsen)', // '(grew by {bytes})'
    reduction: 'Reduzierung:', // 'Reduction:'
    sizeChange: 'Größenänderung:', // 'Size Change:'
    downloadAll: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP wird erstellt ({progress} %) …', // 'Creating ZIP ({progress}%)...'
    compare: 'Vergleichen', // 'Compare'
    compareTitle: 'Klicken, um den visuellen Qualitätsvergleich anzuzeigen', // 'Click to inspect visual quality comparison'
    compareActionTitle: 'Vorher und Nachher vergleichen', // 'Compare visual before/after'
    download: 'Herunterladen', // 'Download'
    retry: 'Erneut versuchen', // 'Retry'
    removeTitle: 'Bild entfernen', // 'Remove image'
    removeAriaLabel: '{name} entfernen', // 'Remove {name}'
    keptOriginal: 'Original behalten (Neukodierung war größer)', // 'Kept original (re-encode was larger)'
    grewByStatus: 'Um {bytes} gewachsen: Die Neukodierung ist größer als das Original', // 'Grew by {bytes} — re-encode is larger than the original'
    compressedOk: 'Erfolgreich komprimiert', // 'Compressed successfully'
    optimizing: 'Pixel werden optimiert …', // 'Optimizing pixels...'
    compressionError: 'Komprimierungsfehler', // 'Compression error'
    original: 'Original', // 'Original' (metric label)
    compressed: 'Komprimiert', // 'Compressed' (metric label)
    output: 'Ausgabe', // 'Output' (metric label when original kept)
    spaceSaved: 'Gesparter Speicherplatz', // 'Space Saved'
    formatLabel: 'Format:', // 'Format:' (in "{w}×{h}px · Format: {fmt}")
    alpha: 'Alpha', // 'Alpha' badge
    largerTitle: 'Die Ausgabe ist {bytes} größer als das Original.', // 'Output is {bytes} larger than the original.'
    largerPngNote:
      'Die verlustfreie PNG-Neukodierung ignoriert den Qualitätsschieberegler; WebP oder JPG ist in der Regel deutlich kleiner für PNGs mit Fotocharakter.',
    largerNote:
      'Dieses Bild war für die gewählte Qualität bereits stark komprimiert.',
    keepOriginal: 'Original behalten', // 'Keep original'
  },
} as const;

// ---------------------------------------------------------------------------
// HOME REGISTRY ENTRY — for the merge into src/locales/de/tools.ts
// (mirrors the ES home entry in spanish/tools-es.ts: TOOLS_REGISTRY_ES[0]).
// seoTitle + seoDescription are IDENTICAL to DE.homeMeta above. relatedSlugs
// stay in English, exactly as in the EN/ES registries. The merge should add
// the ToolDefinition type import and place this entry first in
// TOOLS_REGISTRY_DE. The DE home slug is '/de/' (slug-map-de.ts); the registry
// entry keeps slug '/' per the ES pattern (the app maps '/' -> '/de/').
// ---------------------------------------------------------------------------

// Per-tool workspace UI strings in German (Standard German) — COMPLETE (all 48 tools).
// Assembled from tool-ui-de-batch1.ts … tool-ui-de-batch6.ts (coordinator merge).
// Target: merged into src/locales/de/ui.ts as the TOOL_UI_DE export.
// German (Standard German), Sie forms. Keyed by English slug.
// English source is in a comment on each line. Placeholders in braces
// are filled at runtime and must be kept as-is.
// NOTE: the '/image-metadata-viewer' gpsWarning string is split across JSX
// lines in the page file with an inline link button; gpsWarningLink
// carries that link's text. The '/target-file-size-compressor' table
// carries qualityLosslessPng (looked up by targetCompression.ts for
// the qualityLabel of PNG outputs; PT lacks it) and uses the EN
// runtime placeholder names {bytes}/{qualityLabel}/{percent} — the
// only {size} left is maxSuffix, which the component replaces itself.

export const TOOL_UI_DE = {

  '/image-resizer': {
    comparisonTitlePrefix: 'Vergleich der Größenänderung', // 'Resize Comparison'
    comparisonAfterLabel: 'Skaliert (nachher)', // 'Resized (After)'
    presetInstagramPost: 'Instagram-Beitrag (1080×1080)', // 'Instagram Post (1080×1080)'
    presetInstagramStory: 'Instagram-Story (1080×1920)', // 'Instagram Story (1080×1920)'
    presetYouTubeThumb: 'YouTube-Vorschaubild (1280×720)', // 'YouTube Thumb (1280×720)'
    presetFacebookCover: 'Facebook-Titelbild (851×315)', // 'Facebook Cover (851×315)'
    presetXHeader: 'X-Kopfzeile (1500×500)', // 'X Header (1500×500)'
    presetFullHd: 'Full HD (1920×1080)', // 'Full HD (1920×1080)' — unchanged
    errorResizeFailed: 'Skalieren des Bildes fehlgeschlagen.', // 'Resize failed.'
    errorCorruptedFile: 'Beschädigte oder unlesbare Bilddatei.', // 'Corrupted or unreadable image file.'
    resizeMode: 'Skalierungsmodus', // 'Resize Mode'
    modeByPixels: 'Nach Pixeln (B × H)', // 'By Pixels (W × H)'
    modeByPercentage: 'Nach Prozent (%)', // 'By Percentage (%)'
    outputFormat: 'Ausgabeformat', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    widthLabel: 'Breite (px)', // 'Width (px)'
    heightLabel: 'Höhe (px)', // 'Height (px)'
    placeholderAuto: 'Automatisch', // placeholder 'Auto'
    aspectRatioLocked: 'Seitenverhältnis gesperrt', // 'Aspect Ratio Locked'
    aspectRatioUnlocked: 'Entsperrt (benutzerdefiniert)', // 'Unlocked (Custom)'
    fitModeLabel: 'Anpassungsmodus:', // 'Fit Mode:'
    fitContain: 'Einpassen (ohne Zuschnitt)', // 'Contain (No Crop)'
    fitCover: 'Ausfüllen (mittiger Zuschnitt)', // 'Cover (Center Crop)'
    fitStretchExact: 'Exakt strecken', // 'Stretch Exact'
    quickPresets: 'Schnellvorlagen für Social Media & Web', // 'Quick Social & Web Presets'
    scalePercentage: 'Skalierungsprozentsatz:', // 'Scale Percentage:'
    outputQuality: 'Ausgabequalität:', // 'Output Quality:'
    matteBg: 'Hintergrund:', // 'Matte BG:'
    resizing: 'Skalieren…', // 'Resizing...'
    resizeAll: 'Alle skalieren ({count})', // 'Resize All ({count})'
    clear: 'Leeren', // 'Clear'
    batchReady: 'Stapel bereit', // 'Batch Ready'
    batchReadySingular: '{count} skaliertes Bild bereit zum Herunterladen', // '{count} resized image ready to download'
    batchReadyPlural: '{count} skalierte Bilder bereit zum Herunterladen', // '{count} resized images ready to download'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    resizedStatus: 'Skaliert ({original} → {converted})', // 'Resized ({original} → {converted})'
    compare: 'Vergleichen', // 'Compare'
    download: 'Herunterladen', // 'Download'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
  },
  '/image-converter': {
    comparisonTitlePrefix: 'Vergleich der Formatkonvertierung', // 'Format Conversion Comparison'
    comparisonAfterLabel: 'Konvertiert (nachher)', // 'Converted (After)'
    errorConversionFailed: 'Konvertieren des Bildes fehlgeschlagen.', // 'Conversion failed.'
    errorUnsupportedFile: 'Nicht unterstützte oder beschädigte Bilddatei.', // 'Unsupported or corrupted image file.'
    convertToFormat: 'In Format konvertieren', // 'Convert To Format'
    formatWebp: 'WebP (kleinstes Webformat)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (universell)', // 'JPG (Universal)'
    formatPng: 'PNG (verlustfrei mit Transparenz)', // 'PNG (Lossless Alpha)'
    transparencyFillColor: 'Farbe für Transparenzfüllung', // 'Transparency Fill Color'
    quality: 'Qualität', // 'Quality'
    qualityLosslessPng: 'Verlustfreies PNG', // 'Lossless PNG'
    converting: 'Konvertieren…', // 'Converting...'
    convertAll: 'Alle konvertieren ({count})', // 'Convert All ({count})'
    clear: 'Leeren', // 'Clear'
    conversionComplete: 'Konvertierung abgeschlossen', // 'Conversion Complete'
    filesConverted: '{count} Dateien konvertiert nach {format}', // '{count} files converted to {format}'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    convertedStatus: 'Konvertiert nach {ext}', // 'Converted to {ext}'
    compare: 'Vergleichen', // 'Compare'
    download: 'Herunterladen', // 'Download'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
  },
  '/rotate-flip-image': {
    quickRotateFlip: 'Schnell drehen & spiegeln', // 'Quick Rotate & Flip'
    rotate90Left: '90° nach links drehen', // 'Rotate 90° Left'
    rotate90Right: '90° nach rechts drehen', // 'Rotate 90° Right'
    rotate180: '180°', // '180°'
    flipHorizontal: 'Horizontal spiegeln', // 'Flip Horizontal'
    flipVertical: 'Vertikal spiegeln', // 'Flip Vertical'
    outputFormat: 'Ausgabeformat', // 'Output Format'
    formatOriginal: 'Original', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    rotationAngle: 'Drehwinkel:', // 'Rotation Angle:'
    resetTo0: 'Auf 0° zurücksetzen', // 'Reset to 0°'
    applyAngle: 'Winkel anwenden', // 'Apply Angle'
    clear: 'Leeren', // 'Clear'
    batchReady: 'Stapel bereit', // 'Batch Ready'
    transformedImagesReady: '{count} transformierte Bilder bereit', // '{count} transformed images ready'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    rotatedBadge: 'Um {angle}° gedreht', // 'Rotated {angle}°'
    flippedH: ' · H gespiegelt', // ' · Flipped H'
    flippedV: ' · V gespiegelt', // ' · Flipped V'
    compare: 'Vergleichen', // 'Compare'
    download: 'Herunterladen', // 'Download'
    removeItem: '{name} entfernen', // 'Remove {name}' (aria-label)
    transformFailed: 'Transformieren des Bildes fehlgeschlagen.', // 'Transform failed.'
    corruptedImage: 'Beschädigtes oder unlesbares Bild.', // 'Corrupted or unreadable image.'
    comparisonTitlePrefix: 'Vergleich Drehen & Spiegeln', // 'Rotate & Flip Comparison'
    comparisonAfterLabel: 'Bearbeitet (nachher)', // 'Edited (After)'
  },
  '/image-to-pdf': {
    uploadTitle: 'Bilder ablegen, um sie zu einem PDF zusammenzuführen', // 'Drop images to combine into PDF'
    couldNotRead: '„{filename}“ konnte nicht gelesen werden. Bitte stellen Sie sicher, dass es ein gültiges Bild ist.', // 'Could not read "{filename}". Please ensure it is a valid image.'
    pdfGenerationFailed: 'Erzeugen des PDFs fehlgeschlagen.', // 'PDF generation failed.'
    encodingPage: 'Seite {current} von {total} wird codiert…', // 'Encoding page {current} of {total}...'
    generatingPdf: 'PDF wird erzeugt…', // 'Generating PDF...'
    pageSize: 'Seitengröße', // 'Page Size'
    pageSizeA4: 'A4 (210 × 297 mm)', // 'A4 (210 × 297 mm)'
    pageSizeLetter: 'US Letter (8,5 × 11 Zoll)', // 'US Letter (8.5 × 11 in)'
    pageSizeFit: 'An Bildgröße anpassen', // 'Fit to Image Size'
    orientation: 'Ausrichtung', // 'Orientation'
    orientationAuto: 'Automatisch (wie Foto)', // 'Auto (Match Photo)'
    orientationPortrait: 'Hochformat', // 'Portrait'
    orientationLandscape: 'Querformat', // 'Landscape'
    margin: 'Rand', // 'Margin'
    marginNone: 'Kein Rand (randlos)', // 'No Margin (Full Bleed)'
    marginSmall: 'Kleiner Rand', // 'Small Margin'
    marginMedium: 'Mittlerer Rand', // 'Medium Margin'
    imagePlacement: 'Bildposition', // 'Image Placement'
    placementContain: 'Einpassen (vollständiges Bild)', // 'Contain (Full Image)'
    placementCover: 'Ausfüllen (Seite füllen)', // 'Cover (Fill Page)'
    pdfFilename: 'PDF-Dateiname', // 'PDF Filename'
    pdfImageQuality: 'PDF-Bildqualität:', // 'PDF Image Quality:'
    createDownloadPdf: 'PDF erstellen & herunterladen ({count} S.)', // 'Create & Download PDF ({count}p)'
    clear: 'Leeren', // 'Clear'
    pdfReady: 'PDF bereit ({count} {pages} · {size})', // 'PDF ready ({count} {pages} · {size})'
    pageSingular: 'Seite', // 'page'
    pagePlural: 'Seiten', // 'pages'
    downloadPdfAgain: 'PDF erneut herunterladen', // 'Download PDF Again'
    pageOrder: 'Seitenreihenfolge ({count} {pages})', // 'Page Order ({count} {pages})'
    pageOrderSingular: 'Seite', // 'Page' (in Page Order heading)
    pageOrderPlural: 'Seiten', // 'Pages' (in Page Order heading)
    movePageUp: 'Seite nach oben verschieben', // 'Move page up' (title)
    movePageDown: 'Seite nach unten verschieben', // 'Move page down' (title)
    removePage: 'Seite entfernen', // 'Remove page' (title)
  },
  '/image-metadata-viewer': {
    uploadTitle: 'Bild ablegen, um EXIF & Metadaten zu prüfen', // 'Drop an image to inspect EXIF & metadata'
    unableToParse: 'Bildmetadaten konnten nicht analysiert werden.', // 'Unable to parse image metadata.'
    embeddedMetadataFound: 'Eingebettete Metadaten gefunden ({count} Tag-Typen)', // 'Embedded metadata found ({count} tag types)'
    noTagsDetected: 'Keine EXIF-, GPS- oder versteckten Kamera-Tags erkannt', // 'No EXIF, GPS, or hidden camera tags detected'
    stripMetadata: 'Metadaten entfernen', // 'Strip Metadata'
    copyJson: 'JSON kopieren', // 'Copy JSON'
    copiedJson: 'JSON kopiert', // 'Copied JSON'
    exportJson: 'JSON exportieren', // 'Export JSON'
    clear: 'Leeren', // 'Clear' (title)
    gpsDetected: 'GPS-Standortkoordinaten erkannt', // 'GPS Location Coordinates Detected'
    latitude: 'Breitengrad:', // 'Latitude:'
    longitude: 'Längengrad:', // 'Longitude:'
    gpsWarning:
      'Wenn Sie dieses Bild so teilen, kann sichtbar werden, wo das Foto aufgenommen wurde. Nutzen Sie Bild-Metadaten entfernen, bevor Sie es online posten.', // 'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.' — split across JSX lines in the page, with an inline link button
    gpsWarningLink: 'Bild-Metadaten entfernen', // inline link text inside the GPS warning: 'Remove Image Metadata' — extra key, not in the Spanish table
    extractedMetadata: 'Extrahierte Metadaten ({count} Eigenschaften)', // 'Extracted Metadata ({count} properties)'
    privacyTag: 'Datenschutz-Tag', // 'Privacy Tag'
  },
  '/remove-image-metadata': {
    uploadTitle: 'Fotos ablegen, um EXIF, GPS & Metadaten zu entfernen', // 'Drop photos to strip EXIF, GPS & metadata'
    failedToStrip: 'Entfernen der Metadaten fehlgeschlagen.', // 'Failed to strip metadata.'
    strippingMethod: 'Entfernungsmethode', // 'Stripping Method'
    losslessStrip: 'Verlustfreie binäre Entfernung (JPG/PNG)', // 'Lossless Binary Strip (JPG/PNG)'
    fullCanvasReencode: 'Vollständige Canvas-Neucodierung', // 'Full Canvas Re-encode'
    outputFormat: 'Ausgabeformat', // 'Output Format'
    formatOriginal: 'Original', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    reencodeQuality: 'Neucodierungsqualität (für WebP/HEIC oder vollständige Neucodierung):', // 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):'
    cleaning: 'Bereinigen…', // 'Cleaning...'
    recleanAll: 'Alle erneut bereinigen', // 'Re-clean All'
    clear: 'Leeren', // 'Clear'
    privacyVerified: 'Privatsphäre verifiziert', // 'Privacy Verified'
    cleanImagesReady: '{count} saubere Bilder bereit, Metadaten entfernt', // '{count} clean images ready with metadata stripped'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllCleanZip: 'Alle sauber herunterladen (ZIP)', // 'Download All Clean (ZIP)'
    strippedTags: '{before} Metadaten-Tags entfernt → {after} verbleibend', // 'Stripped {before} metadata tags → {after} remaining'
    verifiedClean: 'Sauber verifiziert (0 EXIF-/GPS-Tags)', // 'Verified clean (0 EXIF/GPS tags)'
    losslessBinaryStrip: 'Verlustfreie binäre Entfernung', // 'Lossless binary strip'
    cleanCanvasExport: 'Sauberer Canvas-Export', // 'Clean Canvas export'
    scrubbing: 'EXIF- & GPS-Header werden entfernt…', // 'Scrubbing EXIF & GPS headers...'
    downloadClean: 'Sauber herunterladen', // 'Download Clean'
    removeItem: '{name} entfernen', // 'Remove {name}' (aria-label)
  },
  '/favicon-generator': {
    uploadTitle: 'Logo oder Icon hier ablegen', // 'Drop your logo or icon here'
    uploadSubtitlePrefix: 'Quadratisches PNG oder SVG empfohlen · ', // 'Square PNG or SVG recommended · '
    uploadBrowseFile: 'Datei suchen', // 'browse file'
    errorGenerateFailed: 'Erzeugen des Favicon-Pakets fehlgeschlagen.', // 'Failed to generate favicon package.'
    backgroundFill: 'Hintergrundfüllung', // 'Background Fill'
    transparent: 'Transparent', // 'Transparent'
    padding: 'Abstand', // 'Padding'
    cornerRadius: 'Eckenradius', // 'Corner Radius'
    tabPreviewAlt: 'Tab-Vorschau', // alt 'Tab preview'
    myWebsite: 'Meine Website', // 'My Website'
    darkTabPreviewAlt: 'Vorschau dunkler Tab', // alt 'Dark tab preview'
    darkModeTab: 'Dunkler Modus-Tab', // 'Dark Mode Tab'
    packingZip: 'ZIP wird gepackt…', // 'Packing ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    clear: 'Leeren', // title 'Clear'
    downloadFaviconIco: 'favicon.ico herunterladen', // title 'Download favicon.ico'
    downloadFile: '{filename} herunterladen', // title `Download ${asset.filename}`
    htmlHeadSnippet: 'HTML-<head>-Snippet', // 'HTML <head> Snippet'
    copied: 'Kopiert!', // 'Copied!'
    copyHtml: 'HTML kopieren', // 'Copy HTML'
  },
  '/image-color-picker': {
    uploadTitle: 'Bild ablegen oder Screenshot einfügen (Strg+V)', // 'Drop an image or paste screenshot (Ctrl+V)'
    errorUnableToLoadImage: 'Bild konnte nicht geladen werden.', // 'Unable to load image.'
    clickAnywhereToPin: 'Klicken Sie auf eine beliebige Stelle, um eine Farbe zu fixieren', // 'Click anywhere to pin a color'
    newImage: 'Neues Bild', // 'New Image'
    pixelInspector: 'Pixel-Inspektor', // 'Pixel Inspector'
    copyLabel: '{label} kopieren', // title `Copy ${row.label}`
    pickedSwatches: 'Ausgewählte Farbfelder ({count})', // 'Picked Swatches ({count})'
    exportCss: 'CSS exportieren', // 'Export CSS'
    clickPixelsHint: 'Klicken Sie auf Bildpixel, um Farben in Ihrer Palette zu speichern.', // 'Click pixels on the image to save colors to your palette.'
    clickToSelectCopy: 'Klicken, um {hex} auszuwählen und zu kopieren', // title `Click to select & copy ${c.hex}`
  },
  '/image-dimensions-checker': {
    uploadTitle: 'Bilder ablegen, um exakte Dimensionen & Verhältnisse zu prüfen', // 'Drop images to inspect exact dimensions & ratios'
    minWidthCheck: 'Mindestbreite prüfen (px)', // 'Min Width Check (px)'
    minHeightCheck: 'Mindesthöhe prüfen (px)', // 'Min Height Check (px)'
    placeholderMinWidth: 'z. B. 1200', // placeholder 'e.g. 1200'
    placeholderMinHeight: 'z. B. 630', // placeholder 'e.g. 630'
    exportCsv: 'CSV exportieren', // 'Export CSV'
    exportJson: 'JSON exportieren', // 'Export JSON'
    clear: 'Leeren', // 'Clear'
    headerImage: 'Bild', // table header 'Image'
    headerDimensions: 'Dimensionen', // table header 'Dimensions'
    headerAspectRatio: 'Seitenverhältnis', // table header 'Aspect Ratio'
    headerOrientation: 'Ausrichtung', // table header 'Orientation'
    headerSizeFormat: 'Größe / Format', // table header 'Size / Format'
    headerPrint300Dpi: 'Druck bei 300 DPI', // table header 'Print @300 DPI'
    headerSpecCheck: 'Spezifikationsprüfung', // table header 'Spec Check'
    orientationLandscape: 'Querformat', // 'Landscape'
    orientationPortrait: 'Hochformat', // 'Portrait'
    orientationSquare: 'Quadratisch', // 'Square'
    alphaTag: ' · Alpha', // ' · Alpha'
    specPass: 'Bestanden', // 'Pass'
    specBelowMin: 'Unter Mindestmaß', // 'Below Min'
    csvYes: 'Ja', // CSV value 'Yes'
    csvNo: 'Nein', // CSV value 'No'
  },
  '/image-cropper': {
    uploadTitle: 'Bild ablegen, um es interaktiv zuzuschneiden', // 'Drop an image to crop interactively'
    errorUnableToLoadImage: 'Bild konnte nicht geladen werden.', // 'Unable to load image.'
    errorCanvasContext: 'Canvas-Kontext konnte nicht initialisiert werden.', // 'Unable to initialize canvas context.'
    errorCropExportFailed: 'Zuschnitt konnte nicht exportiert werden.', // 'Crop export failed.'
    aspectFree: 'Frei', // aspect preset 'Free'
    selection: 'Auswahl:', // 'Selection:'
    zoomOut: 'Zoom verkleinern', // aria-label 'Zoom out'
    zoomIn: 'Zoom vergrößern', // aria-label 'Zoom in'
    removeImage: 'Bild entfernen', // aria-label 'Remove image'
    cropSourceAlt: 'Quellbild zum Zuschneiden', // alt 'Crop source'
    originalLabel: 'Original:', // 'Original:'
    cropOptions: 'Zuschneideoptionen', // 'Crop Options'
    selectFull: 'Alles auswählen', // 'Select Full'
    aspectRatioPreset: 'Seitenverhältnis-Voreinstellung', // 'Aspect Ratio Preset'
    cropWidth: 'Zuschneidebreite', // 'Crop Width'
    cropHeight: 'Zuschneidehöhe', // 'Crop Height'
    outputFormat: 'Ausgabeformat', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualität', // 'Quality'
    cropping: 'Zuschneiden…', // 'Cropping...'
    cropAndDownload: 'Zuschneiden & Herunterladen', // 'Crop & Download'
  },
  '/image-watermark': {
    uploadTitle: 'Bild ablegen, um ein Text- oder Logo-Wasserzeichen hinzuzufügen', // 'Drop an image to add a text or logo watermark'
    errorUnableToLoadImage: 'Bild konnte nicht geladen werden.', // 'Unable to load image.'
    errorUnableToLoadLogo: 'Logo-Bild konnte nicht geladen werden.', // 'Unable to load logo image.'
    errorWatermarkExportFailed: 'Bild mit Wasserzeichen konnte nicht exportiert werden.', // 'Watermark export failed.'
    fallbackWatermarkText: 'Wasserzeichen', // canvas fallback text 'Watermark'
    tiledPreview: 'Gekachelte Vorschau', // 'Tiled Preview'
    dragToPosition: 'Auf dem Bild ziehen, um zu positionieren', // 'Drag on Image to Position'
    changeImage: 'Bild ändern', // 'Change Image'
    watermarkType: 'Wasserzeichen-Typ', // 'Watermark Type'
    modeText: 'Text-Wasserzeichen', // 'Text Watermark'
    modeLogo: 'Logo-Bild', // 'Logo Image'
    watermarkTextLabel: 'Wasserzeichentext', // 'Watermark Text'
    placeholderBrand: '© Ihre Marke', // placeholder '© Your Brand'
    textColor: 'Textfarbe', // 'Text Color'
    size: 'Größe', // 'Size'
    uploadLogo: 'Logo hochladen (PNG / SVG)', // 'Upload Logo (PNG / SVG)'
    changeLogo: 'Logo-Bild ändern', // 'Change Logo Image'
    logoWidth: 'Logobreite', // 'Logo Width'
    opacity: 'Deckkraft', // 'Opacity'
    rotation: 'Drehung', // 'Rotation'
    tiledRepeatPattern: 'Gekacheltes Wiederholungsmuster', // 'Tiled Repeat Pattern'
    tileSpacing: 'Kachel-Abstand', // 'Tile Spacing'
    anchorPresets: 'Anker-Voreinstellungen (oder auf dem Bild ziehen)', // 'Anchor Presets (or drag on image)'
    formatOrig: 'Orig', // 'Orig' — same abbreviation in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualität', // 'Quality'
    exporting: 'Exportieren…', // 'Exporting...'
    downloadWatermarked: 'Bild mit Wasserzeichen herunterladen', // 'Download Watermarked Image'
  },
  '/blur-pixelate-image': {
    uploadTitle: 'Bild ablegen, um Bereiche weichzuzeichnen oder zu pixelieren', // 'Drop an image to blur or pixelate areas'
    errorUnableToLoadImage: 'Bild konnte nicht geladen werden.', // 'Unable to load image.'
    errorExportFailed: 'Export fehlgeschlagen.', // 'Export failed.'
    paintOverAreasBlur: 'Bereiche zum Weichzeichnen übermalen', // 'Paint Over Areas to Blur'
    paintOverAreasPixelate: 'Bereiche zum Pixelieren übermalen', // 'Paint Over Areas to Pixelate'
    wholeImagePreview: 'Gesamtbild-Vorschau', // 'Whole-Image Preview'
    undo: 'Rückgängig', // 'Undo'
    resetBrush: 'Pinsel zurücksetzen', // 'Reset Brush'
    removeImage: 'Bild entfernen', // aria-label 'Remove image'
    targetArea: 'Zielbereich', // 'Target Area'
    brushArea: 'Pinselbereich', // 'Brush Area'
    wholeImage: 'Gesamtbild', // 'Whole Image'
    effectStyle: 'Effektstil', // 'Effect Style'
    pixelateMosaic: 'Pixel-Mosaik', // 'Pixelate Mosaic'
    smoothBlur: 'Weiches Weichzeichnen', // 'Smooth Blur'
    blurRadius: 'Weichzeichnungsradius', // 'Blur Radius'
    mosaicBlockSize: 'Mosaik-Blockgröße', // 'Mosaic Block Size'
    brushSize: 'Pinselgröße', // 'Brush Size'
    brushHint: 'Klicken und ziehen Sie direkt auf dem Foto, um Gesichter, Text oder Kennzeichen zu verbergen.', // 'Click and drag directly on the photo to hide faces, text, or license plates.'
    formatOrig: 'Orig', // 'Orig' — same abbreviation in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualität', // 'Quality'
    exporting: 'Exportieren…', // 'Exporting...'
    downloadImage: 'Bild herunterladen', // 'Download Image'
  },
  '/add-text-to-image': {
    uploadTitle: 'Bild ablegen, um individuelle Text-Overlays hinzuzufügen', // 'Drop an image to add custom text overlays'
    errorUnableToLoadImage: 'Bild konnte nicht geladen werden.', // 'Unable to load image.'
    errorExportFailed: 'Export fehlgeschlagen.', // 'Export failed.'
    dragAnyText: 'Beliebigen Text direkt auf dem Bild ziehen', // 'Drag Any Text Directly on Image'
    changeImage: 'Bild ändern', // 'Change Image'
    textLayer: 'Text {index}', // tab `Text ${idx + 1}`
    add: 'Hinzufügen', // 'Add'
    deleteActiveTextLayer: 'Aktive Textebene löschen', // aria-label 'Delete active text layer'
    textContent: 'Textinhalt (mehrzeilig möglich)', // 'Text Content (multi-line supported)'
    font: 'Schriftart', // 'Font'
    fontInter: 'Inter / Saubere Sans', // font option 'Inter / Clean Sans'
    fontImpact: 'Impact / Meme-Display', // font option 'Impact / Meme Display'
    fontGeorgia: 'Georgia / Klassische Serif', // font option 'Georgia / Classic Serif'
    fontCourier: 'Courier / Monospace', // font option 'Courier / Monospace'
    fontTrebuchet: 'Trebuchet / Abgerundete Sans', // font option 'Trebuchet / Rounded Sans'
    fill: 'Füllung', // 'Fill'
    toggleBold: 'Fett umschalten', // aria-label 'Toggle Bold'
    toggleItalic: 'Kursiv umschalten', // aria-label 'Toggle Italic'
    size: 'Größe', // 'Size'
    rotation: 'Drehung', // 'Rotation'
    textOutline: 'Textkontur', // 'Text Outline'
    dropShadow: 'Schlagschatten', // 'Drop Shadow'
    defaultLayerText: 'Doppeltippen oder Text bearbeiten', // default layer text 'Double-tap or edit text'
    defaultCaption: 'Beschriftung {index}', // default layer text `Caption ${index + 1}`
    formatOrig: 'Orig', // 'Orig' — same abbreviation in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualität', // 'Quality'
    exporting: 'Exportieren…', // 'Exporting...'
    downloadImageWithText: 'Bild mit Text herunterladen', // 'Download Image with Text'
  },
  '/image-border-generator': {
    uploadTitle: 'Bild ablegen, um einen individuellen Rahmen hinzuzufügen', // 'Drop an image to add a custom border or frame'
    errorUnableToLoadImage: 'Bild konnte nicht geladen werden.', // 'Unable to load image.'
    errorExportFailed: 'Export fehlgeschlagen.', // 'Export failed.'
    framedPreview: 'Gerahmte Vorschau', // 'Framed Preview'
    changeImage: 'Bild ändern', // 'Change Image'
    quickFramePresets: 'Schnellrahmen-Voreinstellungen', // 'Quick Frame Presets'
    presetClassicWhite: 'Klassisches Weiß', // preset 'Classic White'
    presetPolaroidFrame: 'Polaroid-Rahmen', // preset 'Polaroid Frame'
    presetDarkStudio: 'Dunkles Studio', // preset 'Dark Studio'
    presetGradientGlow: 'Verlaufsglanz', // preset 'Gradient Glow'
    borderStyle: 'Rahmenstil', // 'Border Style'
    borderStyleSolid: 'Einfarbig', // border type 'solid' (rendered capitalized)
    borderStyleGradient: 'Verlauf', // border type 'gradient' (rendered capitalized)
    borderStylePolaroid: 'Polaroid', // border type 'polaroid' (rendered capitalized)
    borderColor: 'Rahmenfarbe', // 'Border Color'
    startColor: 'Startfarbe', // 'Start Color'
    endColor: 'Endfarbe', // 'End Color'
    gradientAngle: 'Verlaufswinkel', // 'Gradient Angle'
    borderSize: 'Rahmengröße', // 'Border Size'
    frameRadius: 'Rahmenradius', // 'Frame Radius'
    photoRadius: 'Fotoradius', // 'Photo Radius'
    dropShadow: 'Schlagschatten', // 'Drop Shadow'
    shadowNone: 'keinen', // shadow level 'none' (rendered capitalized)
    shadowSoft: 'weich', // shadow level 'soft' (rendered capitalized)
    shadowMedium: 'mittel', // shadow level 'medium' (rendered capitalized)
    shadowDeep: 'tief', // shadow level 'deep' (rendered capitalized)
    exporting: 'Exportieren…', // 'Exporting...'
    downloadFramedImage: 'Gerahmtes Bild herunterladen', // 'Download Framed Image'
  },
  '/round-image-corners': {
    uploadTitle: 'Bild ablegen, um seine Ecken abzurunden', // 'Drop an image to round its corners'
    errorUnableToLoadImage: 'Bild konnte nicht geladen werden.', // 'Unable to load image.'
    errorExportFailed: 'Abgerundetes Bild konnte nicht exportiert werden.', // 'Failed to export rounded image.'
    liveCornerPreview: 'Live-Eckenvorschau', // 'Live Corner Preview'
    changeImage: 'Bild ändern', // 'Change Image'
    cornerSettings: 'Eckeneinstellungen', // 'Corner Settings'
    fullCirclePill: 'Vollkreis / Pille', // 'Full Circle / Pill'
    individualPerCorner: 'Individuelle Steuerung pro Ecke', // 'Individual Per-Corner Control'
    allCornersRadius: 'Alle Ecken Radius', // 'All Corners Radius'
    cornerTopLeft: 'Oben links', // per-corner label 'Top Left'
    cornerTopRight: 'Oben rechts', // per-corner label 'Top Right'
    cornerBottomLeft: 'Unten links', // per-corner label 'Bottom Left'
    cornerBottomRight: 'Unten rechts', // per-corner label 'Bottom Right'
    outerCornerFill: 'Außeneckenfüllung', // 'Outer Corner Fill'
    transparentPngWebp: 'Transparent (PNG/WebP)', // 'Transparent (PNG/WebP)'
    solidColor: 'Einfarbige Farbe', // 'Solid Color'
    outputFormat: 'Ausgabeformat', // 'Output Format'
    exporting: 'Exportieren…', // 'Exporting...'
    downloadRoundedImage: 'Abgerundetes Bild herunterladen', // 'Download Rounded Image'
  },
  '/image-brightness-editor': {
    uploadTitle: 'Bild ablegen, um die Helligkeit anzupassen', // ToneEditorTool title `Drop an image to adjust ${cfg.label.toLowerCase()}` (mode 'brightness')
    errorUnableToLoadImage: 'Bild konnte nicht geladen werden.', // 'Unable to load image.'
    errorExportFailed: 'Angepasstes Bild konnte nicht exportiert werden.', // 'Failed to export adjusted image.'
    viewAfter: 'Nachher', // view tab 'after' (rendered capitalized)
    viewBefore: 'Vorher', // view tab 'before' (rendered capitalized)
    viewSplitCompare: 'Split-Vergleich', // view tab 'Split Compare'
    fullscreenCompare: 'Vollbild-Vergleich', // 'Fullscreen Compare'
    removeImage: 'Bild entfernen', // title/aria-label 'Remove image'
    beforeLabel: 'Vorher', // split slider label 'Before'
    afterLabel: 'Nachher', // split slider label 'After'
    originalPreviewAlt: 'Originalvorschau', // alt 'Original preview'
    originalComparisonAlt: 'Originalvergleich', // alt 'Original comparison'
    brightnessControls: 'Helligkeitssteuerungen', // 'Brightness Controls'
    reset: 'Zurücksetzen', // 'Reset'
    brightnessLevel: 'Helligkeitsstufe', // 'Brightness Level'
    minLabel: '−100 % Dunkler', // min label '-100% Darker'
    maxLabel: '+100 % Heller', // max label '+100% Brighter'
    quickPresets: 'Schnellvoreinstellungen', // 'Quick Presets'
    presetDark: 'Dunkel (−30 %)', // preset 'Dark (-30%)'
    presetDim: 'Gedimmt (−15 %)', // preset 'Dim (-15%)'
    presetOriginal: 'Original (0 %)', // preset 'Original (0%)'
    presetBright: 'Hell (+15 %)', // preset 'Bright (+15%)'
    presetVibrant: 'Lebhaft (+30 %)', // preset 'Vibrant (+30%)'
    presetHighKey: 'High Key (+50 %)', // preset 'High Key (+50%)'
    outputFormat: 'Ausgabeformat', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualität', // 'Quality'
    exporting: 'Exportieren…', // 'Exporting...'
    downloadEditedImage: 'Bearbeitetes Bild herunterladen', // 'Download Edited Image'
    comparisonTitlePrefix: 'Helligkeitsvergleich', // ComparisonModal titlePrefix `Brightness Comparison`
    comparisonAfterLabel: 'Bearbeitet (nachher)', // ComparisonModal afterLabel 'Edited (After)'
  },
  '/image-contrast-editor': {
    uploadTitle: 'Bild ablegen, um den Kontrast anzupassen', // 'Drop an image to adjust contrast'
    comparisonTitlePrefix: 'Kontrastvergleich', // 'Contrast Comparison'
    comparisonAfterLabel: 'Bearbeitet (nachher)', // 'Edited (After)'
    errorUnableToLoadImage: 'Bild konnte nicht geladen werden.', // 'Unable to load image.'
    errorExportFailed: 'Export des angepassten Bildes fehlgeschlagen.', // 'Failed to export adjusted image.'
    tabAfter: 'Nachher', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Vorher', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'Splitscreen-Vergleich', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'Vollbildvergleich', // 'Fullscreen Compare'
    removeImage: 'Bild entfernen', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Originalvorschau', // alt 'Original preview'
    originalComparisonAlt: 'Originalvergleich', // alt 'Original comparison'
    splitBeforeLabel: 'Vorher', // split slider left label 'Before'
    splitAfterLabel: 'Nachher', // split slider right label 'After'
    controlsHeading: 'Kontraststeuerung', // '{label} Controls' (contrast mode)
    reset: 'Zurücksetzen', // 'Reset'
    levelLabel: 'Kontraststärke', // '{label} Level' (contrast mode)
    minLabel: '-100% Flach', // minLabel '-100% Flat'
    maxLabel: '+100% Hoher Kontrast', // maxLabel '+100% High Contrast'
    quickPresets: 'Schnellvoreinstellungen', // 'Quick Presets'
    presetSoft: 'Weich (-25%)', // 'Soft (-25%)'
    presetMuted: 'Gedämpft (-10%)', // 'Muted (-10%)'
    presetOriginal: 'Original (0%)', // 'Original (0%)'
    presetCrisp: 'Knackig (+20%)', // 'Crisp (+20%)'
    presetPunchy: 'Kräftig (+40%)', // 'Punchy (+40%)'
    presetDramatic: 'Dramatisch (+70%)', // 'Dramatic (+70%)'
    outputFormat: 'Ausgabeformat', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualität', // 'Quality'
    exporting: 'Exportieren…', // 'Exporting...'
    downloadEditedImage: 'Bearbeitetes Bild herunterladen', // 'Download Edited Image'
  },
  '/image-saturation-editor': {
    uploadTitle: 'Bild ablegen, um die Sättigung anzupassen', // 'Drop an image to adjust saturation'
    comparisonTitlePrefix: 'Sättigungsvergleich', // 'Saturation Comparison'
    comparisonAfterLabel: 'Bearbeitet (nachher)', // 'Edited (After)'
    errorUnableToLoadImage: 'Bild konnte nicht geladen werden.', // 'Unable to load image.'
    errorExportFailed: 'Export des angepassten Bildes fehlgeschlagen.', // 'Failed to export adjusted image.'
    tabAfter: 'Nachher', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Vorher', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'Splitscreen-Vergleich', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'Vollbildvergleich', // 'Fullscreen Compare'
    removeImage: 'Bild entfernen', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Originalvorschau', // alt 'Original preview'
    originalComparisonAlt: 'Originalvergleich', // alt 'Original comparison'
    splitBeforeLabel: 'Vorher', // split slider left label 'Before'
    splitAfterLabel: 'Nachher', // split slider right label 'After'
    controlsHeading: 'Sättigungssteuerung', // '{label} Controls' (saturation mode)
    reset: 'Zurücksetzen', // 'Reset'
    levelLabel: 'Sättigungsstärke', // '{label} Level' (saturation mode)
    minLabel: '-100% Graustufen', // minLabel '-100% Grayscale'
    maxLabel: '+100% Lebendig', // maxLabel '+100% Vivid'
    quickPresets: 'Schnellvoreinstellungen', // 'Quick Presets'
    presetGrayscale: 'Graustufen (-100%)', // 'Grayscale (-100%)'
    presetMuted: 'Gedämpft (-40%)', // 'Muted (-40%)'
    presetOriginal: 'Original (0%)', // 'Original (0%)'
    presetRich: 'Satt (+30%)', // 'Rich (+30%)'
    presetVivid: 'Lebendig (+60%)', // 'Vivid (+60%)'
    presetHyper: 'Hyper (+90%)', // 'Hyper (+90%)'
    outputFormat: 'Ausgabeformat', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualität', // 'Quality'
    exporting: 'Exportieren…', // 'Exporting...'
    downloadEditedImage: 'Bearbeitetes Bild herunterladen', // 'Download Edited Image'
  },
  '/image-filters': {
    uploadTitle: 'Bild ablegen, um Filter anzuwenden', // 'Drop an image to apply filters'
    comparisonTitlePrefix: 'Filtervergleich', // 'Filter Comparison'
    comparisonAfterLabel: 'Gefiltert', // 'Filtered'
    errorUnableToLoadImage: 'Bild konnte nicht geladen werden.', // 'Unable to load image.'
    errorExportFailed: 'Export fehlgeschlagen.', // 'Export failed.'
    filterPreview: 'Filtervorschau', // 'Filter Preview'
    holdToViewOriginal: 'Halten, um das Original zu sehen', // 'Hold to View Original'
    compare: 'Vergleichen', // 'Compare'
    removeImage: 'Bild entfernen', // aria-label 'Remove image'
    originalBadge: 'Original', // 'Original' badge — same in German
    filterPresets: 'Filtervoreinstellungen', // 'Filter Presets'
    reset: 'Zurücksetzen', // 'Reset'
    presetOriginal: 'Original', // preset 'Original' — same in German
    presetGrayscale: 'Graustufen', // preset 'Grayscale'
    presetSepia: 'Sepia', // preset 'Sepia'
    presetVintage: 'Vintage', // preset 'Vintage' — same in German
    presetWarm: 'Warm', // preset 'Warm'
    presetCool: 'Kalt', // preset 'Cool'
    presetHighContrast: 'Hoher Kontrast', // preset 'High Contrast'
    presetMatteFade: 'Matte Fade', // preset 'Matte Fade'
    presetDramatic: 'Dramatisch', // preset 'Dramatic'
    presetNoir: 'Schwarz-Weiß-Noir', // preset 'B&W Noir'
    presetGoldenHour: 'Golden Hour', // preset 'Golden Hour'
    presetInvert: 'Invertieren', // preset 'Invert'
    filterIntensity: 'Filterintensität', // 'Filter Intensity'
    outputFormat: 'Ausgabeformat', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualität', // 'Quality'
    rendering: 'Rendern…', // 'Rendering...'
    downloadFilteredImage: 'Gefiltertes Bild herunterladen', // 'Download Filtered Image'
  },
  '/add-background-to-image': {
    uploadTitle: 'Bild oder transparentes PNG ablegen, um einen Hintergrund hinzuzufügen', // 'Drop an image or transparent PNG to add a backdrop'
    errorUnableToLoadImage: 'Bild konnte nicht geladen werden.', // 'Unable to load image.'
    errorExportFailed: 'Export fehlgeschlagen.', // 'Export failed.'
    backgroundPreview: 'Hintergrundvorschau', // 'Background Preview'
    changeImage: 'Bild ändern', // 'Change Image'
    outputDimensionsPrefix: 'Ausgabe:', // 'Output:' (before '{w}×{h}px')
    backgroundType: 'Hintergrundtyp', // 'Background Type'
    modeSolidColor: 'Einfarbig', // 'Solid Color'
    modeGradient: 'Verlauf', // 'Gradient'
    modeBlurredPhoto: 'Weichzeichner-Foto', // 'Blurred Photo'
    selectColor: 'Farbe {color} auswählen', // aria-label `Select color ${c}`
    color1: 'Farbe 1', // 'Color 1'
    color2: 'Farbe 2', // 'Color 2'
    angle: 'Winkel', // 'Angle'
    backdropBlurRadius: 'Hintergrund-Weichzeichnerradius', // 'Backdrop Blur Radius'
    canvasAspectRatio: 'Seitenverhältnis des Canvas', // 'Canvas Aspect Ratio'
    aspectOriginal: 'Orig', // 'Orig' — same abbreviation in German
    imageScale: 'Bildskalierung', // 'Image Scale'
    roundness: 'Rundung', // 'Roundness'
    dropShadowBehindImage: 'Schlagschatten hinter dem Bild', // 'Drop Shadow Behind Image'
    formatPng: 'PNG', // 'PNG' — unchanged
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged
    exporting: 'Exportieren…', // 'Exporting...'
    downloadImage: 'Bild herunterladen', // 'Download Image'
  },
  '/image-splitter': {
    uploadTitle: 'Bild ablegen, um es in Rasterkacheln oder Streifen zu zerteilen', // 'Drop an image to split into grid tiles or strips'
    errorUnableToLoadImage: 'Bild konnte nicht geladen werden.', // 'Unable to load image.'
    errorSplitFailed: 'Zerteilen des Bildes fehlgeschlagen.', // 'Failed to split image.'
    errorCanvasContext: 'Canvas-Kontext konnte nicht initialisiert werden.', // 'Unable to initialize canvas context.'
    cutLinePreview: 'Schnittlinien-Vorschau ({rows} × {cols} = {tiles} Kacheln)', // 'Cut-Line Preview ({rows} × {cols} = {tiles} tiles)'
    changeImage: 'Bild ändern', // 'Change Image'
    splitGuideAlt: 'Zerteilungsanleitung', // alt 'Split guide'
    splitLayout: 'Zerteilungslayout', // 'Split Layout'
    modeGrid: 'Raster (N×M)', // 'Grid (N×M)'
    modeHorizontalStrips: 'Horiz. Streifen', // 'Horiz. Strips'
    modeVerticalStrips: 'Vert. Streifen', // 'Vert. Strips'
    rowsLabel: 'Zeilen (horizontale Schnitte)', // 'Rows (Horizontal Cuts)'
    columnsLabel: 'Spalten (vertikale Schnitte)', // 'Columns (Vertical Cuts)'
    preset2x2: '2×2', // preset '2×2' — unchanged
    preset3x3Instagram: '3×3 Instagram', // preset '3×3 Instagram' — unchanged
    preset1x3Carousel: '1×3 Karussell', // preset '1×3 Carousel'
    preset4x1Strips: '4×1 Streifen', // preset '4×1 Strips'
    formatOriginal: 'Orig', // 'Orig' — same abbreviation in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    tileQuality: 'Kachelqualität', // 'Tile Quality'
    splittingImage: 'Bild wird zerteilt…', // 'Splitting Image...'
    splitIntoTiles: 'In {count} Kacheln zerteilen', // `Split into ${n} Tiles`
    splitComplete: 'Zerteilung abgeschlossen', // 'Split Complete'
    tilesGenerated: '{count} Bildkacheln in voller Auflösung erzeugt', // '{n} image tiles generated at full resolution'
    packagingZip: 'ZIP wird verpackt…', // 'Packaging ZIP...'
    downloadAllTilesZip: 'Alle Kacheln herunterladen (ZIP)', // 'Download All Tiles (ZIP)'
    download: 'Herunterladen', // 'Download'
  },
  '/image-dpi-changer': {
    uploadTitle: 'JPG- oder PNG-Bilder ablegen, um DPI-Metadaten zu aktualisieren', // 'Drop JPG or PNG images to update DPI metadata'
    errorUpdateDpiFailed: 'Aktualisieren der DPI fehlgeschlagen.', // 'Failed to update DPI.'
    targetDpiPresets: 'Ziel-DPI-Voreinstellungen', // 'Target DPI Presets'
    preset72Screen: '72 DPI (Bildschirm)', // '72 DPI (Screen)'
    preset96Windows: '96 DPI (Windows)', // '96 DPI (Windows)' — unchanged
    preset150DraftPrint: '150 DPI (Entwurfsdruck)', // '150 DPI (Draft Print)'
    preset300HighPrint: '300 DPI (Hochwertiger Druck)', // '300 DPI (High Print)'
    preset600Archival: '600 DPI (Archiv)', // '600 DPI (Archival)'
    customDpi: 'Benutzerdefinierte DPI', // 'Custom DPI'
    applyDpi: '{dpi} DPI anwenden', // 'Apply {dpi} DPI'
    clear: 'Leeren', // 'Clear'
    batchReady: 'Stapel bereit', // 'Batch Ready'
    filesUpdatedToDpi: '{count} Dateien auf {dpi} DPI aktualisiert', // '{n} files updated to {dpi} DPI'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    beforeDpi: 'Vorher: {dpi} DPI', // 'Before: {dpi} DPI'
    beforeNotSet: 'Vorher: Nicht gesetzt', // 'Before: Not set'
    verifiedDpi: 'Verifiziert: {dpi} DPI', // 'Verified: {dpi} DPI'
    methodLosslessJpeg: 'Verlustfreies JPEG-Header-Update', // 'Lossless JPEG Header Update'
    methodLosslessPng: 'Verlustfreies PNG-pHYs-Update', // 'Lossless PNG pHYs Update'
    methodConvertedPng: 'In PNG mit pHYs-DPI umgewandelt', // 'Converted to PNG with pHYs DPI'
    download: 'Herunterladen', // 'Download'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.file.name}`
  },
  '/image-to-base64': {
    uploadTitle: 'Bild ablegen, um es als Base64 zu codieren', // 'Drop an image to encode as Base64'
    errorCouldNotEncode: 'Datei konnte nicht codiert werden.', // 'Could not encode file.'
    errorFailedToRead: 'Lesen der Bilddatei fehlgeschlagen.', // 'Failed to read image file.'
    errorClipboardWriteFailed: 'Schreiben in die Zwischenablage fehlgeschlagen – bitte aus dem Textfeld auswählen und kopieren.', // 'Clipboard write failed — please select and copy from the text box.'
    fileLabel: 'Datei:', // 'File:' (summary card)
    outputLabel: 'Ausgabe:', // 'Output:' (summary card)
    charsLabel: 'Zeichen', // 'chars' (summary card)
    encodeAnother: 'Weitere codieren', // 'Encode Another'
    tabDataUrl: 'Data-URL', // tab 'Data URL'
    tabRawBase64: 'Reines Base64', // tab 'Raw Base64'
    tabHtmlImg: 'HTML <img>', // tab 'HTML <img>' — unchanged
    tabCssUrl: 'CSS url()', // tab 'CSS url()' — unchanged
    copied: 'Kopiert!', // 'Copied!'
    copyOutput: 'Ausgabe kopieren', // 'Copy Output'
    saveTxt: 'Als .TXT speichern', // 'Save .TXT'
  },
  '/base64-to-image': {
    pasteLabel: 'Base64-String oder Data-URL einfügen', // 'Paste Base64 String or Data URL'
    clear: 'Leeren', // 'Clear'
    inputPlaceholder: 'data:image/png;base64,iVBORw0KGgo... oder reine Base64-Bytes hier einfügen', // placeholder 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here'
    supportsNote: 'Unterstützt Base64-Payloads von PNG, JPG, WebP, GIF, SVG, BMP und ICO', // 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads'
    decoding: 'Decodieren…', // 'Decoding...'
    decodeImage: 'Bild decodieren', // 'Decode Image'
    decodingBytes: 'Base64-Bytes werden decodiert…', // 'Decoding Base64 bytes...'
    errorUnsupportedDataUri: 'Nicht unterstützte Data-URI-Codierung. Base64-Payload (`;base64,`) erwartet.', // 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'
    errorInvalidBase64: 'Die Eingabe enthält ungültige Base64-Zeichen.', // 'Input contains invalid Base64 characters.'
    errorNotValidImage: 'Die decodierten Bytes bilden kein gültiges, vom Browser lesbares Bild.', // 'Decoded bytes do not form a valid browser-readable image.'
    errorUnableToDecode: 'Base64-String konnte nicht decodiert werden.', // 'Unable to decode Base64 string.'
    decodedPreviewAlt: 'Vorschau des decodierten Base64', // alt 'Decoded Base64 preview'
    validImageDecoded: 'Gültiges Bild decodiert', // 'Valid Image Decoded'
    detectedFormat: 'Erkanntes Format', // 'Detected Format'
    binarySize: 'Binärgröße', // 'Binary Size'
    dimensions: 'Maße', // 'Dimensions'
    downloadFormat: 'Downloadformat', // 'Download Format'
    formatOriginal: 'Original', // 'Original' — same in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    downloadImageFile: 'Bilddatei herunterladen', // 'Download Image File'
  },
  '/image-color-palette-extractor': {
    uploadTitle: 'Ziehen Sie ein Bild, um die dominante Farbpalette zu extrahieren', // 'Drop an image to extract its dominant color palette'
    errorUnableToLoadImage: 'Das Bild konnte nicht geladen werden.', // 'Unable to load image.'
    errorClipboardDenied: 'Zugriff auf die Zwischenablage verweigert.', // 'Clipboard permission denied.'
    extractedPalette: 'Extrahierte Palette ({count} Farben)', // 'Extracted Palette ({count} Colors)'
    sourceAlt: 'Quelle', // alt 'Source'
    changeImage: 'Ändern', // 'Change'
    numberOfColors: 'Anzahl der Farben', // 'Number of Colors'
    colorsCount: '{count} Farben', // '{count} colors'
    copyCssVariables: 'CSS-Variablen kopieren', // 'Copy CSS Variables'
    copiedCss: 'CSS kopiert!', // 'Copied CSS!'
    copyJson: 'JSON kopieren', // 'Copy JSON'
    copiedJson: 'JSON kopiert!', // 'Copied JSON!'
    downloadPalettePng: 'Paletten-PNG herunterladen', // 'Download Palette PNG'
  },
  '/gif-maker': {
    uploadTitle: 'Ziehen Sie 2 oder mehr Bilder, um ein animiertes GIF zu erstellen', // 'Drop 2 or more images to create an animated GIF'
    errorEncodeFailed: 'Das animierte GIF konnte nicht codiert werden.', // 'Failed to encode animated GIF.'
    skippedFile: '„{name}" übersprungen: {error}', // 'Skipped "{name}": {error}'
    skippedFileNoError: '„{name}" übersprungen.', // 'Skipped "{name}".'
    generatedGif: 'Erzeugtes GIF ({width}×{height} px · {size})', // 'Generated GIF ({width}×{height}px · {size})'
    liveTimingPreview: 'Live-Timing-Vorschau · Bild {current}/{total}', // 'Live Timing Preview · Frame {current}/{total}'
    generatedGifAlt: 'Erzeugtes animiertes GIF', // alt 'Generated animated GIF'
    pause: 'Pause', // 'Pause'
    play: 'Abspielen', // 'Play'
    backToFrameEditor: 'Zurück zum Bildeditor', // 'Back to Frame Editor'
    clearAllFrames: 'Alle Bilder löschen', // aria-label 'Clear all frames'
    largeGifWarning: 'Warnung: großes GIF ({size})', // 'Large GIF Warning ({size})'
    largeGifWarningBody:
      'GIFs über 5–15 MB lassen sich in Messenger-Apps nur langsam hochladen oder verstoßen gegen strikte Plattformlimits. Versuchen Sie, die Ausgabebreite/-höhe zu verringern (z. B. 480 px), die Qualität zu senken oder Bilder zu entfernen.', // 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.'
    downloadAnimatedGif: 'Animiertes GIF herunterladen ({size})', // 'Download Animated GIF ({size})'
    animationSettings: 'Animationseinstellungen', // 'Animation Settings'
    defaultFrameDuration: 'Standard-Bilddauer', // 'Default Frame Duration'
    frameDurationValue: '{ms} ms ({fps} FPS)', // '{ms} ms ({fps} FPS)'
    fpsPreset1: '1 FPS (1000 ms)', // '1 FPS (1000ms)'
    fpsPreset2: '2 FPS (500 ms)', // '2 FPS (500ms)'
    fpsPreset5: '5 FPS (200 ms)', // '5 FPS (200ms)'
    fpsPreset10: '10 FPS (100 ms)', // '10 FPS (100ms)'
    loopBehavior: 'Schleifenverhalten', // 'Loop Behavior'
    loopForever: 'Immer', // 'Forever'
    loopSetLoops: 'Schleifen festlegen', // 'Set Loops'
    loopPlayOnce: 'Einmal abspielen', // 'Play Once'
    totalPlays: 'Wiedergaben gesamt', // 'Total Plays'
    outputDimensions: 'Ausgabemaße (px)', // 'Output Dimensions (px)'
    ratioLocked: 'Seitenverhältnis gesperrt', // 'Ratio Locked'
    ratioUnlocked: 'Entsperrt', // 'Unlocked'
    widthLabel: 'Breite', // 'Width'
    heightLabel: 'Höhe', // 'Height'
    sizePreset480: '480 px', // '480px'
    sizePreset640: '640 px', // '640px'
    sizePreset800: '800 px', // '800px'
    sizePresetOriginal: 'Original', // 'Original' — same in German
    frameFit: 'Bildanpassung', // 'Frame Fit'
    fitContain: 'Enthalten', // 'contain'
    fitCover: 'Abdecken', // 'cover'
    backgroundMatte: 'Hintergrund-Mattefarbe', // 'Background Matte'
    colorPaletteQuality: 'Farbpaletten-Qualität', // 'Color Palette Quality'
    encodingGif: 'GIF wird codiert ({progress} %)…', // 'Encoding GIF ({progress}%)...'
    generateAnimatedGif: 'Animiertes GIF erzeugen', // 'Generate Animated GIF'
    reEncodeAnimatedGif: 'Animiertes GIF erneut codieren', // 'Re-Encode Animated GIF'
    framesHeading: 'Bilder ({count}) – Ziehen oder Pfeile zum Neuordnen nutzen', // 'Frames ({count}) — Drag or use arrows to reorder'
    perFrameDelayHint:
      'Lassen Sie die Dauer pro Bild leer, um die globale Bilddauer von {ms} ms zu übernehmen.', // 'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
    addFrames: 'Bilder hinzufügen', // 'Add Frames'
    delayMsLabel: 'Dauer (ms):', // 'Delay (ms):'
    moveEarlier: 'Nach vorne verschieben', // title 'Move earlier'
    moveLater: 'Nach hinten verschieben', // title 'Move later'
    duplicateFrame: 'Bild duplizieren', // title 'Duplicate frame'
    removeFrame: 'Bild entfernen', // title 'Remove frame'
    moveFrameEarlierAria: 'Bild {n} nach vorne verschieben', // aria-label `Move frame ${n} earlier`
    moveFrameLaterAria: 'Bild {n} nach hinten verschieben', // aria-label `Move frame ${n} later`
    duplicateFrameAria: 'Bild {n} duplizieren', // aria-label `Duplicate frame ${n}`
    removeFrameAria: 'Bild {n} entfernen', // aria-label `Remove frame ${n}`
  },
  '/image-collage-maker': {
    uploadTitle: 'Ziehen Sie 2 bis 9 Bilder, um eine Fotocollage zu erstellen', // 'Drop 2 to 9 images to create a photo collage'
    errorExportFailed: 'Die Collage konnte nicht exportiert werden.', // 'Failed to export collage.'
    couldNotLoadFile: '„{name}" konnte nicht geladen werden: {error}', // 'Could not load "{name}": {error}'
    couldNotLoadFileNoError: '„{name}" konnte nicht geladen werden.', // 'Could not load "{name}".'
    collagePreview: 'Collagen-Vorschau ({width}×{height} px)', // 'Collage Preview ({width}×{height}px)'
    clearAll: 'Alles löschen', // 'Clear All'
    rearrangeCells: 'Zellen neu anordnen (ziehen oder zwei Zellen zum Tauschen antippen)', // 'Rearrange Cells (Drag or Tap Two Cells to Swap)'
    rearrangeCellsHint:
      'Ziehen Sie eine beliebige Zellenkarte auf einen anderen Platz, um Fotos sofort neu anzuordnen.', // 'Drag any cell card onto another slot to reorder photos instantly.'
    addPhotos: 'Fotos hinzufügen', // 'Add Photos'
    cellLabel: 'Zelle {n}', // 'Cell {n}'
    slotLabel: 'Platz {n}', // canvas-drawn 'Slot {n}'
    moveCellBackAria: 'Zelle {n} nach hinten verschieben', // aria-label `Move cell ${n} back`
    moveCellForwardAria: 'Zelle {n} nach vorne verschieben', // aria-label `Move cell ${n} forward`
    clearCellAria: 'Zelle {n} leeren', // aria-label `Clear cell ${n}`
    addPhoto: 'Foto hinzufügen', // 'Add Photo'
    collageLayout: 'Collagen-Layout', // 'Collage Layout'
    layout2x2: '2×2-Raster', // '2×2 Grid'
    layout3x3: '3×3-Raster', // '3×3 Grid'
    layoutVertical: 'Vertikaler Streifen', // 'Vertical Strip'
    layoutHorizontal: 'Horizontaler Streifen', // 'Horizontal Strip'
    cellProportionsSpacing: 'Zellenproportionen und Abstände', // 'Cell Proportions & Spacing'
    equalCells: 'Gleiche Zellen', // 'Equal Cells'
    colSplit: 'Spaltenteilung', // 'Col Split'
    centerCol: 'Mittlere Spalte', // 'Center Col'
    rowSplit: 'Zeilenteilung', // 'Row Split'
    centerRow: 'Mittlere Zeile', // 'Center Row'
    leadCellEmphasis: 'Hervorhebung der Hauptzelle', // 'Lead Cell Emphasis'
    gapSpacing: 'Zellenabstand', // 'Gap Spacing'
    cellRadius: 'Zellenradius', // 'Cell Radius'
    backgroundColor: 'Hintergrundfarbe', // 'Background Color'
    backgroundSwatchAria: 'Hintergrund {color}', // aria-label `Background ${c}`
    imageFit: 'Bildanpassung', // 'Image Fit'
    fitCover: 'Abdecken', // 'cover'
    fitContain: 'Enthalten', // 'contain'
    outputSize: 'Ausgabegröße (px)', // 'Output Size (px)'
    widthLabel: 'Breite', // 'Width'
    heightLabel: 'Höhe', // 'Height'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatPngLossless: 'PNG (verlustfrei)', // 'PNG (Lossless)'
    jpgQuality: 'JPG-Qualität', // 'JPG Quality'
    exportingCollage: 'Collage wird exportiert…', // 'Exporting Collage...'
    downloadCollage: 'Collage herunterladen ({format})', // 'Download Collage ({format})'
  },
  '/compress-image-to-50kb': {
    uploadTitle: 'Ziehen Sie Bilder, um sie unter {target} zu komprimieren', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Ziehen Sie Bilder, um sie unter {target} zu komprimieren', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Kompression auf die Zielgröße fehlgeschlagen.', // 'Target compression failed.'
    errorCorruptedFile: 'Beschädigte oder unlesbare Bilddatei.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Maximale Dateigröße der Zielgröße', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} max.)', // '({bytes} max)'
    needDifferentTarget: 'Brauchen Sie eine andere Zielgröße in KB?', // 'Need a different target KB?'
    outputFormat: 'Ausgabeformat', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Intelligente Maßskalierung erlauben, wenn alleinige Qualitätsreduktion nicht unter {target} passt', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Große PNGs automatisch in WebP/JPG umwandeln, wenn verlustfreies PNG {target} nicht sauber erreichen kann', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'Große PNGs automatisch in WebP/JPG umwandeln, wenn verlustfreies PNG {target} nicht sauber erreichen kann', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Matte Farbe für transparentes PNG:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Matte Farbe für transparentes PNG:', // 'Transparent PNG matte color:'
    compressToTarget: 'Auf {target} komprimieren', // 'Compress to {target}'
    optimizing: 'Optimieren…', // 'Optimizing...'
    clear: 'Leeren', // 'Clear'
    losslessPngSelected: 'Verlustfreies PNG ausgewählt:', // 'Lossless PNG selected:'
    losslessPngTitle: 'Verlustfreies PNG ausgewählt:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG ignoriert Qualitätsregler, daher hängt die Größenreduktion strikt vom Verkleinern der Pixelmaße ab. Wählen Sie für große Fotos JPG oder WebP, um strikte KB-Limits bei hoher Schärfe zu erreichen.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG ignoriert Qualitätsregler, daher hängt die Größenreduktion strikt vom Verkleinern der Pixelmaße ab. Wählen Sie für große Fotos JPG oder WebP, um strikte KB-Limits bei hoher Schärfe zu erreichen.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Zusammenfassung der Zielkompression · Ziel ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} von {total} {images} haben das Ziel {target} erreicht', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'Bild', // 'image'
    imagePlural: 'Bilder', // 'images'
    summaryMissed: ' · {missed} konnten ehrlich nicht passen (Details unten)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Insgesamt gespart: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Insgesamt gespart: {bytes} (gewachsen um {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(gewachsen um {grew})', // '(grew by {grew})'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Ausgabe', // 'Output' (metric label)
    metricSpaceSaved: 'Eingesparter Platz', // 'Space Saved' (metric label)
    metricReduction: 'Reduktion', // 'Reduction' (metric label)
    metricSizeChange: 'Größenänderung', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (metric label)
    columnOutput: 'Ausgabe', // 'Output' (metric label)
    columnSpaceSaved: 'Eingesparter Platz', // 'Space Saved' (metric label)
    columnReduction: 'Reduktion', // 'Reduction' (metric label)
    columnSizeChange: 'Größenänderung', // 'Size Change' (metric label)
    underTarget: 'Unter {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Ziel verfehlt — {bytes}', // 'Target missed — {bytes}'
    compare: 'Vergleichen', // 'Compare'
    download: 'Herunterladen', // 'Download'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
    grewBy: 'Um {bytes} gewachsen: Die Neucodierung ist größer als das Original.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP oder JPG ist für fotorealistische PNGs meist kleiner.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP oder JPG ist für fotorealistische PNGs meist kleiner.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Original behalten', // 'Keep original'
    keptOriginalNote: 'Die Originaldatei wurde behalten, weil die Neucodierung sie vergrößert hat.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Verlustfreies PNG wurde automatisch in {format} umgewandelt, um höhere Auflösung unter {target} zu bewahren.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'Verlustfreies PNG wurde automatisch in {format} umgewandelt, um höhere Auflösung unter {target} zu bewahren.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (Transparenz erhalten)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Die Originaldatei lag bereits unter {target}, und die Neucodierung hat sie um {bytes} vergrößert. Nutzen Sie „Original behalten" oder wechseln Sie zu WebP/JPG für eine kleinere Ausgabe.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'Die Originaldatei lag bereits unter {target}; sie wurde sauber mit {quality} % Qualität exportiert.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      'Die Originaldatei lag bereits unter {target}; sie wurde sauber mit {quality} % Qualität exportiert.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Ziel bei voller Auflösung von {width}×{height} px erreicht ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Ziel durch Skalierung auf {width}×{height} px ({percent} %) mit {qualityLabel} erreicht.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'verlustfreies PNG', // 'lossless PNG'
    qualityPercent: '{quality} % Qualität', // '{quality}% quality'
    statusCannotPng:
      'Mit verlustfreiem PNG kann {target} nicht erreicht werden (kleinstmöglich: {bytes} bei {width}×{height} px). Wechseln Sie das Ausgabeformat zu JPG oder WebP, um kleinere Größen zu erreichen.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Mit vollen Maßen von {width}×{height} px kann {target} nicht erreicht werden (Mindestgröße bei Qualität: {bytes}). Aktivieren Sie „Maßskalierung erlauben", um Maße weiter zu verkleinern.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Das angeforderte Ziel {target} konnte nicht sauber erreicht werden. Die kleinste ehrliche codierte Ausgabe ist {bytes} ({width}×{height} px, {quality} % Qualität). Versuchen Sie eine größere Zielgröße.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      'Das angeforderte Ziel {target} konnte nicht sauber erreicht werden. Die kleinste ehrliche codierte Ausgabe ist {bytes} ({width}×{height} px, {quality} % Qualität). Versuchen Sie eine größere Zielgröße.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Zielkompression ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Komprimiert ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-100kb': {
    uploadTitle: 'Ziehen Sie Bilder, um sie unter {target} zu komprimieren', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Ziehen Sie Bilder, um sie unter {target} zu komprimieren', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Kompression auf die Zielgröße fehlgeschlagen.', // 'Target compression failed.'
    errorCorruptedFile: 'Beschädigte oder unlesbare Bilddatei.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Maximale Dateigröße der Zielgröße', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} max.)', // '({bytes} max)'
    needDifferentTarget: 'Brauchen Sie eine andere Zielgröße in KB?', // 'Need a different target KB?'
    outputFormat: 'Ausgabeformat', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Intelligente Maßskalierung erlauben, wenn alleinige Qualitätsreduktion nicht unter {target} passt', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Große PNGs automatisch in WebP/JPG umwandeln, wenn verlustfreies PNG {target} nicht sauber erreichen kann', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'Große PNGs automatisch in WebP/JPG umwandeln, wenn verlustfreies PNG {target} nicht sauber erreichen kann', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Matte Farbe für transparentes PNG:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Matte Farbe für transparentes PNG:', // 'Transparent PNG matte color:'
    compressToTarget: 'Auf {target} komprimieren', // 'Compress to {target}'
    optimizing: 'Optimieren…', // 'Optimizing...'
    clear: 'Leeren', // 'Clear'
    losslessPngSelected: 'Verlustfreies PNG ausgewählt:', // 'Lossless PNG selected:'
    losslessPngTitle: 'Verlustfreies PNG ausgewählt:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG ignoriert Qualitätsregler, daher hängt die Größenreduktion strikt vom Verkleinern der Pixelmaße ab. Wählen Sie für große Fotos JPG oder WebP, um strikte KB-Limits bei hoher Schärfe zu erreichen.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG ignoriert Qualitätsregler, daher hängt die Größenreduktion strikt vom Verkleinern der Pixelmaße ab. Wählen Sie für große Fotos JPG oder WebP, um strikte KB-Limits bei hoher Schärfe zu erreichen.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Zusammenfassung der Zielkompression · Ziel ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} von {total} {images} haben das Ziel {target} erreicht', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'Bild', // 'image'
    imagePlural: 'Bilder', // 'images'
    summaryMissed: ' · {missed} konnten ehrlich nicht passen (Details unten)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Insgesamt gespart: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Insgesamt gespart: {bytes} (gewachsen um {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(gewachsen um {grew})', // '(grew by {grew})'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Ausgabe', // 'Output' (metric label)
    metricSpaceSaved: 'Eingesparter Platz', // 'Space Saved' (metric label)
    metricReduction: 'Reduktion', // 'Reduction' (metric label)
    metricSizeChange: 'Größenänderung', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (metric label)
    columnOutput: 'Ausgabe', // 'Output' (metric label)
    columnSpaceSaved: 'Eingesparter Platz', // 'Space Saved' (metric label)
    columnReduction: 'Reduktion', // 'Reduction' (metric label)
    columnSizeChange: 'Größenänderung', // 'Size Change' (metric label)
    underTarget: 'Unter {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Ziel verfehlt — {bytes}', // 'Target missed — {bytes}'
    compare: 'Vergleichen', // 'Compare'
    download: 'Herunterladen', // 'Download'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
    grewBy: 'Um {bytes} gewachsen: Die Neucodierung ist größer als das Original.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP oder JPG ist für fotorealistische PNGs meist kleiner.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP oder JPG ist für fotorealistische PNGs meist kleiner.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Original behalten', // 'Keep original'
    keptOriginalNote: 'Die Originaldatei wurde behalten, weil die Neucodierung sie vergrößert hat.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Verlustfreies PNG wurde automatisch in {format} umgewandelt, um höhere Auflösung unter {target} zu bewahren.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'Verlustfreies PNG wurde automatisch in {format} umgewandelt, um höhere Auflösung unter {target} zu bewahren.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (Transparenz erhalten)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Die Originaldatei lag bereits unter {target}, und die Neucodierung hat sie um {bytes} vergrößert. Nutzen Sie „Original behalten" oder wechseln Sie zu WebP/JPG für eine kleinere Ausgabe.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'Die Originaldatei lag bereits unter {target}; sie wurde sauber mit {quality} % Qualität exportiert.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      'Die Originaldatei lag bereits unter {target}; sie wurde sauber mit {quality} % Qualität exportiert.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Ziel bei voller Auflösung von {width}×{height} px erreicht ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Ziel durch Skalierung auf {width}×{height} px ({percent} %) mit {qualityLabel} erreicht.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'verlustfreies PNG', // 'lossless PNG'
    qualityPercent: '{quality} % Qualität', // '{quality}% quality'
    statusCannotPng:
      'Mit verlustfreiem PNG kann {target} nicht erreicht werden (kleinstmöglich: {bytes} bei {width}×{height} px). Wechseln Sie das Ausgabeformat zu JPG oder WebP, um kleinere Größen zu erreichen.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Mit vollen Maßen von {width}×{height} px kann {target} nicht erreicht werden (Mindestgröße bei Qualität: {bytes}). Aktivieren Sie „Maßskalierung erlauben", um Maße weiter zu verkleinern.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Das angeforderte Ziel {target} konnte nicht sauber erreicht werden. Die kleinste ehrliche codierte Ausgabe ist {bytes} ({width}×{height} px, {quality} % Qualität). Versuchen Sie eine größere Zielgröße.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      'Das angeforderte Ziel {target} konnte nicht sauber erreicht werden. Die kleinste ehrliche codierte Ausgabe ist {bytes} ({width}×{height} px, {quality} % Qualität). Versuchen Sie eine größere Zielgröße.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Zielkompression ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Komprimiert ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-200kb': {
    uploadTitle: 'Ziehen Sie Bilder, um sie unter {target} zu komprimieren', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Ziehen Sie Bilder, um sie unter {target} zu komprimieren', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Kompression auf die Zielgröße fehlgeschlagen.', // 'Target compression failed.'
    errorCorruptedFile: 'Beschädigte oder unlesbare Bilddatei.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Maximale Dateigröße der Zielgröße', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} max.)', // '({bytes} max)'
    needDifferentTarget: 'Brauchen Sie eine andere Zielgröße in KB?', // 'Need a different target KB?'
    outputFormat: 'Ausgabeformat', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Intelligente Maßskalierung erlauben, wenn alleinige Qualitätsreduktion nicht unter {target} passt', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Große PNGs automatisch in WebP/JPG umwandeln, wenn verlustfreies PNG {target} nicht sauber erreichen kann', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'Große PNGs automatisch in WebP/JPG umwandeln, wenn verlustfreies PNG {target} nicht sauber erreichen kann', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Matte Farbe für transparentes PNG:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Matte Farbe für transparentes PNG:', // 'Transparent PNG matte color:'
    compressToTarget: 'Auf {target} komprimieren', // 'Compress to {target}'
    optimizing: 'Optimieren…', // 'Optimizing...'
    clear: 'Leeren', // 'Clear'
    losslessPngSelected: 'Verlustfreies PNG ausgewählt:', // 'Lossless PNG selected:'
    losslessPngTitle: 'Verlustfreies PNG ausgewählt:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG ignoriert Qualitätsregler, daher hängt die Größenreduktion strikt vom Verkleinern der Pixelmaße ab. Wählen Sie für große Fotos JPG oder WebP, um strikte KB-Limits bei hoher Schärfe zu erreichen.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG ignoriert Qualitätsregler, daher hängt die Größenreduktion strikt vom Verkleinern der Pixelmaße ab. Wählen Sie für große Fotos JPG oder WebP, um strikte KB-Limits bei hoher Schärfe zu erreichen.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Zusammenfassung der Zielkompression · Ziel ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} von {total} {images} haben das Ziel {target} erreicht', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'Bild', // 'image'
    imagePlural: 'Bilder', // 'images'
    summaryMissed: ' · {missed} konnten ehrlich nicht passen (Details unten)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Insgesamt gespart: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Insgesamt gespart: {bytes} (gewachsen um {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(gewachsen um {grew})', // '(grew by {grew})'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Ausgabe', // 'Output' (metric label)
    metricSpaceSaved: 'Eingesparter Platz', // 'Space Saved' (metric label)
    metricReduction: 'Reduktion', // 'Reduction' (metric label)
    metricSizeChange: 'Größenänderung', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (metric label)
    columnOutput: 'Ausgabe', // 'Output' (metric label)
    columnSpaceSaved: 'Eingesparter Platz', // 'Space Saved' (metric label)
    columnReduction: 'Reduktion', // 'Reduction' (metric label)
    columnSizeChange: 'Größenänderung', // 'Size Change' (metric label)
    underTarget: 'Unter {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Ziel verfehlt — {bytes}', // 'Target missed — {bytes}'
    compare: 'Vergleichen', // 'Compare'
    download: 'Herunterladen', // 'Download'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
    grewBy: 'Um {bytes} gewachsen: Die Neucodierung ist größer als das Original.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP oder JPG ist für fotorealistische PNGs meist kleiner.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP oder JPG ist für fotorealistische PNGs meist kleiner.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Original behalten', // 'Keep original'
    keptOriginalNote: 'Die Originaldatei wurde behalten, weil die Neucodierung sie vergrößert hat.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Verlustfreies PNG wurde automatisch in {format} umgewandelt, um höhere Auflösung unter {target} zu bewahren.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'Verlustfreies PNG wurde automatisch in {format} umgewandelt, um höhere Auflösung unter {target} zu bewahren.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (Transparenz erhalten)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Die Originaldatei lag bereits unter {target}, und die Neucodierung hat sie um {bytes} vergrößert. Nutzen Sie „Original behalten" oder wechseln Sie zu WebP/JPG für eine kleinere Ausgabe.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'Die Originaldatei lag bereits unter {target}; sie wurde sauber mit {quality} % Qualität exportiert.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      'Die Originaldatei lag bereits unter {target}; sie wurde sauber mit {quality} % Qualität exportiert.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Ziel bei voller Auflösung von {width}×{height} px erreicht ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Ziel durch Skalierung auf {width}×{height} px ({percent} %) mit {qualityLabel} erreicht.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'verlustfreies PNG', // 'lossless PNG'
    qualityPercent: '{quality} % Qualität', // '{quality}% quality'
    statusCannotPng:
      'Mit verlustfreiem PNG kann {target} nicht erreicht werden (kleinstmöglich: {bytes} bei {width}×{height} px). Wechseln Sie das Ausgabeformat zu JPG oder WebP, um kleinere Größen zu erreichen.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Mit vollen Maßen von {width}×{height} px kann {target} nicht erreicht werden (Mindestgröße bei Qualität: {bytes}). Aktivieren Sie „Maßskalierung erlauben", um Maße weiter zu verkleinern.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Das angeforderte Ziel {target} konnte nicht sauber erreicht werden. Die kleinste ehrliche codierte Ausgabe ist {bytes} ({width}×{height} px, {quality} % Qualität). Versuchen Sie eine größere Zielgröße.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      'Das angeforderte Ziel {target} konnte nicht sauber erreicht werden. Die kleinste ehrliche codierte Ausgabe ist {bytes} ({width}×{height} px, {quality} % Qualität). Versuchen Sie eine größere Zielgröße.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Zielkompression ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Komprimiert ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-500kb': {
    uploadTitle: 'Ziehen Sie Bilder, um sie unter {target} zu komprimieren', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Ziehen Sie Bilder, um sie unter {target} zu komprimieren', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Kompression auf die Zielgröße fehlgeschlagen.', // 'Target compression failed.'
    errorCorruptedFile: 'Beschädigte oder unlesbare Bilddatei.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Maximale Dateigröße der Zielgröße', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} max.)', // '({bytes} max)'
    needDifferentTarget: 'Brauchen Sie eine andere Zielgröße in KB?', // 'Need a different target KB?'
    outputFormat: 'Ausgabeformat', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Intelligente Maßskalierung erlauben, wenn alleinige Qualitätsreduktion nicht unter {target} passt', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Große PNGs automatisch in WebP/JPG umwandeln, wenn verlustfreies PNG {target} nicht sauber erreichen kann', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng:
      'Große PNGs automatisch in WebP/JPG umwandeln, wenn verlustfreies PNG {target} nicht sauber erreichen kann', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Matte Farbe für transparentes PNG:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Matte Farbe für transparentes PNG:', // 'Transparent PNG matte color:'
    compressToTarget: 'Auf {target} komprimieren', // 'Compress to {target}'
    optimizing: 'Optimieren…', // 'Optimizing...'
    clear: 'Leeren', // 'Clear'
    losslessPngSelected: 'Verlustfreies PNG ausgewählt:', // 'Lossless PNG selected:'
    losslessPngTitle: 'Verlustfreies PNG ausgewählt:', // 'Lossless PNG selected:'
    losslessPngWarning:
      'PNG ignoriert Qualitätsregler, daher hängt die Größenreduktion strikt vom Verkleinern der Pixelmaße ab. Wählen Sie für große Fotos JPG oder WebP, um strikte KB-Limits bei hoher Schärfe zu erreichen.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote:
      'PNG ignoriert Qualitätsregler, daher hängt die Größenreduktion strikt vom Verkleinern der Pixelmaße ab. Wählen Sie für große Fotos JPG oder WebP, um strikte KB-Limits bei hoher Schärfe zu erreichen.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Zusammenfassung der Zielkompression · Ziel ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} von {total} {images} haben das Ziel {target} erreicht', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'Bild', // 'image'
    imagePlural: 'Bilder', // 'images'
    summaryMissed: ' · {missed} konnten ehrlich nicht passen (Details unten)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Insgesamt gespart: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Insgesamt gespart: {bytes} (gewachsen um {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(gewachsen um {grew})', // '(grew by {grew})'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Ausgabe', // 'Output' (metric label)
    metricSpaceSaved: 'Eingesparter Platz', // 'Space Saved' (metric label)
    metricReduction: 'Reduktion', // 'Reduction' (metric label)
    metricSizeChange: 'Größenänderung', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (metric label)
    columnOutput: 'Ausgabe', // 'Output' (metric label)
    columnSpaceSaved: 'Eingesparter Platz', // 'Space Saved' (metric label)
    columnReduction: 'Reduktion', // 'Reduction' (metric label)
    columnSizeChange: 'Größenänderung', // 'Size Change' (metric label)
    underTarget: 'Unter {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Ziel verfehlt — {bytes}', // 'Target missed — {bytes}'
    compare: 'Vergleichen', // 'Compare'
    download: 'Herunterladen', // 'Download'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
    grewBy: 'Um {bytes} gewachsen: Die Neucodierung ist größer als das Original.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP oder JPG ist für fotorealistische PNGs meist kleiner.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP oder JPG ist für fotorealistische PNGs meist kleiner.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Original behalten', // 'Keep original'
    keptOriginalNote: 'Die Originaldatei wurde behalten, weil die Neucodierung sie vergrößert hat.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Verlustfreies PNG wurde automatisch in {format} umgewandelt, um höhere Auflösung unter {target} zu bewahren.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'Verlustfreies PNG wurde automatisch in {format} umgewandelt, um höhere Auflösung unter {target} zu bewahren.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (Transparenz erhalten)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Die Originaldatei lag bereits unter {target}, und die Neucodierung hat sie um {bytes} vergrößert. Nutzen Sie „Original behalten" oder wechseln Sie zu WebP/JPG für eine kleinere Ausgabe.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean:
      'Die Originaldatei lag bereits unter {target}; sie wurde sauber mit {quality} % Qualität exportiert.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder:
      'Die Originaldatei lag bereits unter {target}; sie wurde sauber mit {quality} % Qualität exportiert.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Ziel bei voller Auflösung von {width}×{height} px erreicht ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Ziel durch Skalierung auf {width}×{height} px ({percent} %) mit {qualityLabel} erreicht.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'verlustfreies PNG', // 'lossless PNG'
    qualityPercent: '{quality} % Qualität', // '{quality}% quality'
    statusCannotPng:
      'Mit verlustfreiem PNG kann {target} nicht erreicht werden (kleinstmöglich: {bytes} bei {width}×{height} px). Wechseln Sie das Ausgabeformat zu JPG oder WebP, um kleinere Größen zu erreichen.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Mit vollen Maßen von {width}×{height} px kann {target} nicht erreicht werden (Mindestgröße bei Qualität: {bytes}). Aktivieren Sie „Maßskalierung erlauben", um Maße weiter zu verkleinern.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean:
      'Das angeforderte Ziel {target} konnte nicht sauber erreicht werden. Die kleinste ehrliche codierte Ausgabe ist {bytes} ({width}×{height} px, {quality} % Qualität). Versuchen Sie eine größere Zielgröße.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly:
      'Das angeforderte Ziel {target} konnte nicht sauber erreicht werden. Die kleinste ehrliche codierte Ausgabe ist {bytes} ({width}×{height} px, {quality} % Qualität). Versuchen Sie eine größere Zielgröße.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Zielkompression ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Komprimiert ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/bulk-image-compressor': {
    uploadTitle: 'Ziehen Sie Dutzende Bilder für die Stapelkompression', // 'Drop dozens of images for bulk compression'
    errorCompressionFailed: 'Kompression fehlgeschlagen.', // 'Compression failed.'
    errorCorruptedFile: 'Beschädigte oder unlesbare Bilddatei.', // 'Corrupted or unreadable image file.'
    quickBatchProfiles: 'Schnell-Stapelprofile:', // 'Quick Batch Profiles:'
    profileWebFast: 'Web-Schnell (WebP 75 %)', // 'Web Fast (WebP 75%)'
    profileEmailSharing: 'E-Mail / Teilen (JPG 65 %)', // 'Email / Sharing (JPG 65%)'
    profileHighFidelity: 'Hohe Qualität (85 %)', // 'High Fidelity (85%)'
    compressingBatch: 'Stapel wird lokal komprimiert…', // 'Compressing batch locally...'
    // Strings, die von CompressionControls, ResultsList und ComparisonModal gerendert werden,
    // stammen aus den Abschnitten des gemeinsamen i18n-de.ts-Wörterbuchs (compressionControls,
    // resultsList, comparisonModal) — bereits in Batch 1 übersetzt.
  },
  '/target-file-size-compressor': {
    uploadTitleTemplate: 'Bilder ablegen, um sie unter {target} zu komprimieren', // `Drop images to compress under ${targetLabel}`
    uploadTitle: 'Bilder ablegen, um sie unter {target} zu komprimieren', // 'Drop images to compress under {target}' — fallback key in TargetSizeCompressorTool
    targetMaxFileSize: 'Maximale Zieldateigröße', // 'Target Maximum File Size'
    targetNumberAria: 'Nummer der Zieldateigröße', // aria-label 'Target file size number'
    maxSuffix: '({size} max.)', // '({formatBytes(effectiveTargetBytes)} max)'
    targetMaxSuffix: '({bytes} max.)', // '({bytes} max)' — fallback key in TargetSizeCompressorTool
    needDifferentTarget: 'Brauchen Sie ein anderes KB-Ziel?', // 'Need a different target KB?'
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    outputFormat: 'Ausgabeformat', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged (format name)
    formatPng: 'PNG', // 'PNG' — unchanged (format name)
    allowDownscale: 'Intelligente Größenanpassung zulassen, wenn alleinige Qualitätsreduzierung nicht unter {target} passt', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {targetLabel}'
    autoSwitchPng: 'Große PNGs automatisch zu WebP/JPG konvertieren, wenn verlustfreies PNG {target} nicht sauber erreicht', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {targetLabel} cleanly'
    transparentPngMatteColor: 'Mattfarbe für transparentes PNG:', // 'Transparent PNG matte color:'
    transparentPngMatte: 'Mattfarbe für transparentes PNG:', // 'Transparent PNG matte color:' — fallback key in TargetSizeCompressorTool
    losslessPngTitle: 'Verlustfreies PNG ausgewählt:', // 'Lossless PNG selected:'
    losslessPngSelected: 'Verlustfreies PNG ausgewählt:', // 'Lossless PNG selected:' — fallback key in TargetSizeCompressorTool
    losslessPngNote: 'PNG ignoriert Qualitätsregler, daher hängt die Größenreduzierung strikt von der Verkleinerung der Pixelabmessungen ab. Wählen Sie für große Fotos JPG oder WebP, um strenge KB-Grenzen bei scharfer Qualität zu erreichen.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    compressToTarget: 'Komprimieren auf {target}', // 'Compress to {targetLabel}'
    optimizing: 'Optimieren…', // 'Optimizing...'
    clear: 'Leeren', // 'Clear'
    targetSummary: 'Zusammenfassung der Zielkomprimierung · Ziel ≤ {target}', // 'Target Compression Summary · Goal ≤ {targetLabel}'
    summaryMet: '{achieved} von {total} {images} haben das Ziel von {target} erreicht', // '{achievedCount} of {doneItems.length} {image/images} met the {targetLabel} target'
    imageSingular: 'Bild', // 'image'
    imagePlural: 'Bilder', // 'images'
    summaryMissed: '· {missed} konnten ehrlich nicht hineinpassen (Details unten)', // '{missed} could not honestly fit (details below)'
    totalSaved: 'Insgesamt gespart: {bytes}', // 'Total Saved: {formatBytes(totalSaved)}'
    totalGrew: '(gewachsen um {grew})', // '(grew by {formatBytes(Math.abs(totalSaved))})'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    underTarget: 'Unter {target} ({bytes})', // 'Under {targetLabel} ({formatBytes(compressedSize)})'
    targetMissed: 'Ziel verfehlt — {bytes}', // 'Target missed — {formatBytes(compressedSize)}'
    columnOriginal: 'Original', // 'Original'
    columnOutput: 'Ausgabe', // 'Output'
    columnSpaceSaved: 'Gesparter Platz', // 'Space Saved'
    columnReduction: 'Reduzierung', // 'Reduction'
    columnSizeChange: 'Größenänderung', // 'Size Change'
    metricOriginal: 'Original', // 'Original' — fallback key in TargetSizeCompressorTool
    metricOutput: 'Ausgabe', // 'Output' — fallback key in TargetSizeCompressorTool
    metricSpaceSaved: 'Gesparter Platz', // 'Space Saved' — fallback key in TargetSizeCompressorTool
    metricReduction: 'Reduzierung', // 'Reduction' — fallback key in TargetSizeCompressorTool
    metricSizeChange: 'Größenänderung', // 'Size Change' — fallback key in TargetSizeCompressorTool
    grewBy: 'Gewachsen um {bytes} — die Neucodierung ist größer als das Original.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngHint: 'WebP oder JPG ist für fotografische PNGs meist kleiner.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngNote: 'WebP oder JPG ist für fotografische PNGs meist kleiner.', // 'WebP or JPG is usually smaller for photo-like PNGs.' — fallback key in TargetSizeCompressorTool
    keepOriginal: 'Original behalten', // 'Keep original'
    keptOriginalNote: 'Die Originaldatei wurde behalten, weil die Neucodierung sie größer gemacht hat.', // 'Kept original file because re-encoding made it larger.'
    qualityLosslessPng: 'verlustfreies PNG', // 'lossless PNG' — qualityLabel in src/utils/targetCompression.ts for PNG outputs (key PT lacks; prevents an English leak)
    statusAlreadyUnder: 'Die Originaldatei lag bereits unter {target}; sie wurde sauber mit {quality} % Qualität exportiert.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnderGrew: 'Die Originaldatei lag bereits unter {target}, und die Neucodierung hat sie um {bytes} vergrößert. Verwenden Sie „Original behalten“ oder wechseln Sie zu WebP/JPG für eine kleinere Ausgabe.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusMetFull: 'Ziel bei voller Auflösung von {width}×{height} px ({qualityLabel}) erreicht.', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled: 'Ziel durch Skalieren auf {width}×{height} px ({percent} %) mit {qualityLabel} erreicht.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    statusCannotPng: 'Mit verlustfreiem PNG lässt sich {target} nicht erreichen (kleinste erreichbare Größe: {bytes} bei {width}×{height} px). Wechseln Sie das Ausgabeformat zu JPG oder WebP, um kleinere Größen zu erreichen.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull: 'Mit den vollen Abmessungen von {width}×{height} px lässt sich {target} nicht erreichen (kleinste Qualitätsgröße ist {bytes}). Aktivieren Sie „Größenanpassung zulassen“, um die Abmessungen weiter zu verkleinern.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotCleanly: 'Das angeforderte Ziel von {target} konnte nicht sauber erreicht werden. Die kleinste ehrliche codierte Ausgabe ist {bytes} ({width}×{height} px, {quality} % Qualität). Versuchen Sie es mit einem größeren Zielwert.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    switchedFormatNote: 'Verlustfreies PNG wurde automatisch zu {format} konvertiert, um eine höhere Auflösung unter {target} zu erhalten.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    errorTargetFailed: 'Zielkomprimierung fehlgeschlagen.', // 'Target compression failed.'
    errorCorruptedFile: 'Beschädigte oder unlesbare Bilddatei.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'Zielkomprimierung ({target})', // `Target Compression (${targetLabel})`
    comparisonAfterLabel: 'Komprimiert ({bytes})', // `Compressed (${formatBytes(compressedSize)})`
    compare: 'Vergleichen', // 'Compare'
    download: 'Herunterladen', // 'Download'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-resizer': {
    uploadTitle: 'Mehrere Bilder ablegen, um sie stapelweise zu verkleinern', // 'Drop multiple images to bulk resize'
    batchResizeStrategy: 'Stapel-Verkleinerungsstrategie', // 'Batch Resize Strategy'
    strategyBounding: 'Maximale B×H', // 'Fit Max W × H'
    strategyWidth: 'Einheitliche Breite', // 'Uniform Width'
    strategyExact: 'Exakte B×H', // 'Exact W × H'
    strategyPercentage: 'Prozent (%)', // 'Percentage (%)'
    outputFormat: 'Ausgabeformat', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in German
    formatJpg: 'JPG', // 'JPG' — unchanged
    scaleAllImages: 'Alle Bilder skalieren:', // 'Scale All Images:'
    maxWidth: 'Max. Breite (px)', // 'Max Width (px)'
    targetWidth: 'Zielbreite (px)', // 'Target Width (px)'
    exactWidth: 'Exakte Breite (px)', // 'Exact Width (px)'
    maxHeight: 'Max. Höhe (px)', // 'Max Height (px)'
    exactHeight: 'Exakte Höhe (px)', // 'Exact Height (px)'
    doNotEnlarge: 'Kleinere Bilder nicht vergrößern', // 'Do not enlarge smaller images'
    fitMode: 'Anpassungsmodus', // 'Fit Mode'
    fitContain: 'Einpassen', // 'Contain'
    fitCover: 'Ausfüllen', // 'Cover'
    fitStretch: 'Strecken', // 'Stretch'
    presetFullHd: 'Full HD 1920px', // 'Full HD 1920px' — unchanged
    presetBlog: 'Blog 1200px', // 'Blog 1200px' — unchanged
    presetEcommerce: 'E-Commerce 1000×1000', // 'E-commerce 1000×1000'
    presetThumbnail: 'Miniatur 600px', // 'Thumbnail 600px'
    quality: 'Qualität:', // 'Quality:'
    matteBg: 'Matt-Hintergrund:', // 'Matte BG:'
    resizingProgress: 'Verkleinern ({processed}/{total})…', // 'Resizing ({processedCount}/{totalCount})...'
    bulkResize: 'Stapel verkleinern ({count})', // 'Bulk Resize ({items.length})'
    clear: 'Leeren', // 'Clear'
    bulkResizeComplete: 'Stapelverkleinerung abgeschlossen', // 'Bulk Resize Complete'
    imagesResizedReadySingular: '{count} Bild verkleinert und bereit', // '{count} image resized and ready'
    imagesResizedReadyPlural: '{count} Bilder verkleinert und bereit', // '{count} images resized and ready'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    errorResizeFailed: 'Stapelverkleinerung fehlgeschlagen.', // 'Batch resize failed.'
    errorCorruptedFile: 'Beschädigte oder unlesbare Bilddatei.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'Vergleich der Stapelverkleinerung', // 'Bulk Resize Comparison'
    comparisonAfterLabel: 'Verkleinert (nachher)', // 'Resized (After)'
    compare: 'Vergleichen', // 'Compare'
    download: 'Herunterladen', // 'Download'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-converter': {
    uploadTitle: 'Mehrere Bilder ablegen, um Formate stapelweise zu konvertieren', // 'Drop multiple images to bulk convert formats'
    convertBatchToFormat: 'Stapel konvertieren zu Format', // 'Convert Batch To Format'
    formatWebp: 'WebP (kleinstes Webformat)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (universell)', // 'JPG (Universal)'
    formatPng: 'PNG (verlustfrei mit Transparenz)', // 'PNG (Lossless Alpha)'
    optionalFilenameSuffix: 'Optionales Dateinamen-Suffix', // 'Optional Filename Suffix'
    placeholderSuffix: 'z. B. _web', // placeholder 'e.g. _web'
    transparentFill: 'Transparente Füllung', // 'Transparent Fill'
    qualityLosslessPng: 'Qualität (verlustfreies PNG)', // 'Quality (Lossless PNG)'
    qualityPercent: 'Qualität ({quality} %)', // 'Quality ({quality}%)'
    convertingProgress: 'Konvertieren ({processed}/{total})…', // 'Converting ({processedCount}/{totalCount})...'
    convertAll: 'Alle konvertieren ({count})', // 'Convert All ({items.length})'
    clear: 'Leeren', // 'Clear'
    bulkConversionSummary: 'Zusammenfassung der Stapelkonvertierung', // 'Bulk Conversion Summary'
    filesConvertedSummary: '{count} Dateien konvertiert zu {format} · {original} → {converted}', // '{count} files converted to {format} · {totalOrig} → {totalOut}'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    convertedTo: 'Konvertiert zu {ext}', // 'Converted to {ext}'
    errorConversionFailed: 'Stapelkonvertierung fehlgeschlagen.', // 'Batch conversion failed.'
    errorUnsupportedFile: 'Nicht unterstützte oder beschädigte Bilddatei.', // 'Unsupported or corrupted image file.'
    comparisonTitlePrefix: 'Stapel-Formatkonvertierung', // 'Bulk Format Conversion'
    comparisonAfterLabel: 'Konvertiert (nachher)', // 'Converted (After)'
    compare: 'Vergleichen', // 'Compare'
    download: 'Herunterladen', // 'Download'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
  },
  '/web-image-optimizer': {
    uploadTitle: 'Website-Assets ablegen, um sie für Core Web Vitals zu optimieren', // 'Drop website assets to optimize for Core Web Vitals'
    webPerformancePresets: 'Web-Leistungsvoreinstellungen', // 'Web Performance Presets'
    presetHero: 'Banner / Kopfbereich', // 'Hero / Banner'
    presetHeroDesc: 'Max. 1600 px · WebP 80 %', // 'Max 1600px · WebP 80%'
    presetProduct: 'E-Commerce-Produkt', // 'E-Commerce Product'
    presetProductDesc: 'Max. 1200 px · WebP 82 %', // 'Max 1200px · WebP 82%'
    presetThumb: 'Karte / Miniatur', // 'Card / Thumbnail'
    presetThumbDesc: 'Max. 640 px · WebP 75 %', // 'Max 640px · WebP 75%'
    presetOg: 'Social OG / E-Mail', // 'Social OG / Email'
    presetOgDesc: 'Max. 1200 px · JPG 82 %', // 'Max 1200px · JPG 82%'
    presetRetina: 'Retina-2×-Grafik', // 'Retina 2× Graphic'
    presetRetinaDesc: 'Max. 1920 px · WebP 88 %', // 'Max 1920px · WebP 88%'
    webFormat: 'Webformat', // 'Web Format'
    maxDimension: 'Maximalabmessung (lange Kante)', // 'Max Dimension (Long Edge)'
    keepOriginalDimensions: 'Originalabmessungen behalten', // 'Keep Original Dimensions'
    max1920: 'Max. 1920 px (Retina / Full HD)', // 'Max 1920px (Retina / Full HD)'
    max1600: 'Max. 1600 px (Banner / Kopfbereich)', // 'Max 1600px (Hero / Banner)'
    max1200: 'Max. 1200 px (Blog / Produkt)', // 'Max 1200px (Blog / Product)'
    max800: 'Max. 800 px (im Inhalt)', // 'Max 800px (In-Content)'
    max640: 'Max. 640 px (Miniaturen)', // 'Max 640px (Thumbnails)'
    quality: 'Qualität:', // 'Quality:'
    onlyDownscale: 'Nur größere Bilder verkleinern (EXIF- und GPS-Metadaten werden automatisch entfernt)', // 'Only downscale larger images (EXIF & GPS metadata automatically stripped)'
    optimizing: 'Optimieren…', // 'Optimizing...'
    optimizeForWeb: 'Für Web optimieren ({count})', // 'Optimize for Web ({items.length})'
    clear: 'Leeren', // 'Clear'
    webPerformanceSummary: 'Zusammenfassung der Web-Leistung', // 'Web Performance Summary'
    pageWeightSaved: '({percent} % leichter · {saved} Seitengewicht gespart)', // '({totalPct}% lighter · {formatBytes(totalSaved)} page weight saved)'
    pageWeightGrew: '(+{percent} % · gewachsen um {amount})', // '(+{totalPct}% · grew by {formatBytes})'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    webReady: 'Web-bereit ({percent})', // 'Web-Ready ({formatPercent})'
    grewBy: 'Gewachsen um {amount} ({percent})', // 'Grew by {amount} ({percent})'
    copyImg: '<img> kopieren', // 'Copy <img>'
    copiedHtml: 'HTML kopiert', // 'Copied HTML'
    copyImgTitle: 'Responsiven HTML-img-Tag mit expliziter Breite und Höhe kopieren', // title 'Copy responsive HTML img tag with explicit width and height'
    errorOptimizationFailed: 'Web-Optimierung fehlgeschlagen.', // 'Web optimization failed.'
    errorCorruptedFile: 'Beschädigtes oder nicht unterstütztes Bild.', // 'Corrupted or unsupported image.'
    comparisonTitlePrefix: 'Vergleich der Web-Optimierung', // 'Web Optimization Comparison'
    comparisonAfterLabel: 'Web-bereit (nachher)', // 'Web-Ready (After)'
    compare: 'Vergleichen', // 'Compare'
    download: 'Herunterladen', // 'Download'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
  },
  '/gif-compressor': {
    uploadTitle: 'Ein animiertes GIF ablegen, um es zu komprimieren', // 'Drop an animated GIF to compress'
    decodingGif: 'Animierte GIF-Bilder werden lokal in Ihrem Browser decodiert…', // 'Decoding animated GIF frames locally in your browser...'
    frameSingular: 'Bild', // 'frame'
    framePlural: 'Bilder', // 'frames'
    presetLight: 'Leicht', // 'Light'
    presetBalanced: 'Ausgewogen', // 'Balanced'
    presetMaxShrink: 'Maximale Verkleinerung', // 'Max Shrink'
    colorPaletteLimit: 'Palettenfarben-Limit', // 'Color Palette Limit'
    colorsCount: '{count} Farben', // '{maxColors} colors'
    outputScale: 'Ausgabeskalierung', // 'Output Scale'
    scaleWithDims: '{percent} % ({width}×{height})', // '{scalePercent}% ({targetOutW}×{targetOutH})'
    frameRateOptimization: 'Bildraten-Optimierung', // 'Frame Rate Optimization'
    keepAllFrames: 'Alle Bilder behalten', // 'Keep All Frames'
    dropEvery2nd: 'Jedes 2. Bild entfernen (ca. 50 % kleiner)', // 'Drop Every 2nd Frame (~50% smaller)'
    keep1of3: '1 von 3 Bildern behalten', // 'Keep 1 of Every 3 Frames'
    compressingGif: 'GIF komprimieren ({progress} %)…', // 'Compressing GIF ({encodeProgress}%)...'
    compressGif: 'GIF komprimieren', // 'Compress GIF'
    reset: 'Zurücksetzen', // 'Reset'
    originalGif: 'Original-GIF', // 'Original GIF'
    compressedGif: 'Komprimiertes GIF', // 'Compressed GIF'
    sizeChange: 'Größenänderung', // 'Size Change'
    sizeAndFrames: '{size} · {frames}B', // '{formatBytes(size)} · {frames}f'
    downloadCompressedGif: 'Komprimiertes GIF herunterladen', // 'Download Compressed GIF'
    notSmallerNotice: 'Dieses Quell-GIF war bereits stark optimiert oder nutzt eine Vollbild-Palette, die größer als die Eingabe ist. Um es unter {size} zu verkleinern, senken Sie die Palettenfarbe auf 32–64 Farben, senken Sie die Ausgabeskalierung auf 75 % oder 50 %, oder entfernen Sie jedes 2. Bild.', // 'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
    compressedByNotice: 'Um {percent} % komprimiert ({saved} gespart) – sauber in Ihrem Browser.', // 'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
    originalLabel: 'Original ({width}×{height} px)', // 'Original ({width}×{height}px)'
    compressedLabel: 'Komprimiert ({width}×{height} px)', // 'Compressed ({width}×{height}px)'
    altOriginalGif: 'Original-GIF', // alt 'Original GIF'
    altCompressedGif: 'Komprimiertes GIF', // alt 'Compressed GIF'
    errorGifFailed: 'GIF-Komprimierung fehlgeschlagen.', // 'GIF compression failed.'
    errorDecodeFrames: 'GIF-Bilder konnten nicht decodiert werden.', // 'Could not decode GIF frames.'
    errorTooSmall: 'Die Datei ist zu klein, um ein gültiges GIF zu sein.', // 'File is too small to be a valid GIF.'
    errorNotValidGif: 'Die ausgewählte Datei ist keine gültige GIF87a- oder GIF89a-Animation.', // 'Selected file is not a valid GIF87a or GIF89a animation.'
    errorInvalidDims: 'Das GIF hat ungültige 0×0-Leinwandabmessungen.', // 'GIF has invalid 0x0 canvas dimensions.'
    errorTruncatedColorTable: 'Abgeschnittene globale GIF-Farbtafel.', // 'Truncated GIF Global Color Table.'
    errorNoFrames: 'Aus dieser GIF-Datei konnten keine Bildrahmen decodiert werden.', // 'Could not decode any image frames from this GIF file.'
    errorCanvasContext: '2D-Canvas-Kontext konnte nicht initialisiert werden.', // 'Unable to initialize 2D canvas context.'
  },
  '/heic-to-jpg': {
    uploadTitle: 'iPhone-HEIC- oder HEIF-Fotos ablegen, um sie zu JPG zu konvertieren', // 'Drop iPhone HEIC or HEIF photos to convert to JPG'
    notice: 'Decodiert Apple-HEIC- und HEIF-Fotos lokal in Ihrem Browser mit clientseitigem WebAssembly (heic2any) – Ihre Fotos verlassen nie Ihr Gerät.', // 'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
    conversionPipeline: 'Konvertierungspipeline:', // 'Conversion Pipeline:'
    outputQuality: 'JPG-Ausgabequalität', // 'JPG Output Quality'
    outputQualityLabel: 'JPG-Ausgabequalität', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'JPG-Ausgabequalität', // `${targetLabel} output quality`
    smallerFile: 'Kleinere Datei (20 %)', // 'Smaller file (20%)'
    balanced: 'Ausgewogen (85 %)', // 'Balanced (85%)'
    maxDetail: 'Maximales Detail (100 %)', // 'Max detail (100%)'
    losslessPngOutput: 'Verlustfreie PNG-Ausgabe', // 'Lossless PNG Output'
    losslessPngEncoding: 'Verlustfreie PNG-Codierung', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: 'Verlustfreie PNG-Codierung', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'PNG erhält scharfe Kanten, Text und Alphatransparenz ohne verlustbehaftete Komprimierungsartefakte.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'PNG erhält scharfe Kanten, Text und Alphatransparenz ohne verlustbehaftete Komprimierungsartefakte.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: 'Mattfarbe für transparenten Hintergrund', // 'Transparent Background Matte Color'
    matteColorLabel: 'Mattfarbe für transparenten Hintergrund', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: 'Matt-Hintergrundfarbe', // 'Matte background color'
    matteWhite: 'Weiß', // 'White'
    matteBlack: 'Schwarz', // 'Black'
    matteLightGray: 'Hellgrau', // 'Light Gray'
    rasterExportScale: 'Raster-Exportskalierung', // 'Raster Export Scale'
    rasterExportScaleHint: 'Multiplikator, der auf die intrinsischen Abmessungen des SVG angewendet wird (begrenzt auf 8000 px). Klicken Sie nach dem Ändern der Skalierung auf „Alle erneut konvertieren“.', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: 'Alle erneut konvertieren', // 'Re-convert All'
    converting: 'Konvertieren…', // 'Converting...'
    clear: 'Leeren', // 'Clear'
    batchSummary: 'HEIC → JPG Stapelzusammenfassung', // 'HEIC → JPG Batch Summary'
    filesConverted: '{count} {files} konvertiert · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'Datei', // 'file'
    filePlural: 'Dateien', // 'files'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Änderung', // 'Change'
    changeLabel: 'Änderung', // 'Change' — primary key in FormatConverterTool
    compare: 'Vergleichen', // 'Compare'
    downloadTarget: 'JPG herunterladen', // 'Download JPG'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
    errorDecodeHint: 'Diese HEIC/HEIF-Datei konnte nicht decodiert werden. Stellen Sie sicher, dass es sich um ein gültiges iPhone-/Apple-HEIC-Foto handelt.', // 'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
    errorDecodeFile: '„{filename}“ konnte nicht decodiert werden. Prüfen Sie, ob es sich um ein gültiges HEIC-Bild handelt.', // 'Could not decode "{filename}". Verify it is a valid HEIC image.'
    errorConvertFailed: '{name} konnte nicht zu JPG konvertiert werden.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'HEIC → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-png': {
    uploadTitle: 'JPG- oder JPEG-Bilder ablegen, um sie zu verlustfreiem PNG zu konvertieren', // 'Drop JPG or JPEG images to convert to lossless PNG'
    conversionPipeline: 'Konvertierungspipeline:', // 'Conversion Pipeline:'
    outputQuality: 'PNG-Ausgabequalität', // 'PNG Output Quality'
    outputQualityLabel: 'PNG-Ausgabequalität', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'PNG-Ausgabequalität', // `${targetLabel} output quality`
    smallerFile: 'Kleinere Datei (20 %)', // 'Smaller file (20%)'
    balanced: 'Ausgewogen (85 %)', // 'Balanced (85%)'
    maxDetail: 'Maximales Detail (100 %)', // 'Max detail (100%)'
    losslessPngOutput: 'Verlustfreie PNG-Ausgabe', // 'Lossless PNG Output'
    losslessPngEncoding: 'Verlustfreie PNG-Codierung', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: 'Verlustfreie PNG-Codierung', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'PNG erhält scharfe Kanten, Text und Alphatransparenz ohne verlustbehaftete Komprimierungsartefakte.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'PNG erhält scharfe Kanten, Text und Alphatransparenz ohne verlustbehaftete Komprimierungsartefakte.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: 'Mattfarbe für transparenten Hintergrund', // 'Transparent Background Matte Color'
    matteColorLabel: 'Mattfarbe für transparenten Hintergrund', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: 'Matt-Hintergrundfarbe', // 'Matte background color'
    matteWhite: 'Weiß', // 'White'
    matteBlack: 'Schwarz', // 'Black'
    matteLightGray: 'Hellgrau', // 'Light Gray'
    rasterExportScale: 'Raster-Exportskalierung', // 'Raster Export Scale'
    rasterExportScaleHint: 'Multiplikator, der auf die intrinsischen Abmessungen des SVG angewendet wird (begrenzt auf 8000 px). Klicken Sie nach dem Ändern der Skalierung auf „Alle erneut konvertieren“.', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: 'Alle erneut konvertieren', // 'Re-convert All'
    converting: 'Konvertieren…', // 'Converting...'
    clear: 'Leeren', // 'Clear'
    batchSummary: 'JPG → PNG Stapelzusammenfassung', // 'JPG → PNG Batch Summary'
    filesConverted: '{count} {files} konvertiert · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'Datei', // 'file'
    filePlural: 'Dateien', // 'files'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Änderung', // 'Change'
    changeLabel: 'Änderung', // 'Change' — primary key in FormatConverterTool
    compare: 'Vergleichen', // 'Compare'
    downloadTarget: 'PNG herunterladen', // 'Download PNG'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
    errorDecodeFile: '„{filename}“ konnte nicht decodiert werden. Prüfen Sie, ob es sich um ein gültiges JPG-Bild handelt.', // 'Could not decode "{filename}". Verify it is a valid JPG image.'
    errorConvertFailed: '{name} konnte nicht zu PNG konvertiert werden.', // `Failed to convert ${item.name} to PNG.`
    comparisonTitlePrefix: 'JPG → PNG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/png-to-jpg': {
    uploadTitle: 'PNG-Dateien ablegen, um sie zu kleinerem JPG zu konvertieren', // 'Drop PNG files to convert to smaller JPG'
    conversionPipeline: 'Konvertierungspipeline:', // 'Conversion Pipeline:'
    outputQuality: 'JPG-Ausgabequalität', // 'JPG Output Quality'
    outputQualityLabel: 'JPG-Ausgabequalität', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'JPG-Ausgabequalität', // `${targetLabel} output quality`
    smallerFile: 'Kleinere Datei (20 %)', // 'Smaller file (20%)'
    balanced: 'Ausgewogen (85 %)', // 'Balanced (85%)'
    maxDetail: 'Maximales Detail (100 %)', // 'Max detail (100%)'
    losslessPngOutput: 'Verlustfreie PNG-Ausgabe', // 'Lossless PNG Output'
    losslessPngEncoding: 'Verlustfreie PNG-Codierung', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: 'Verlustfreie PNG-Codierung', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'PNG erhält scharfe Kanten, Text und Alphatransparenz ohne verlustbehaftete Komprimierungsartefakte.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'PNG erhält scharfe Kanten, Text und Alphatransparenz ohne verlustbehaftete Komprimierungsartefakte.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: 'Mattfarbe für transparenten Hintergrund', // 'Transparent Background Matte Color'
    matteColorLabel: 'Mattfarbe für transparenten Hintergrund', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: 'Matt-Hintergrundfarbe', // 'Matte background color'
    matteWhite: 'Weiß', // 'White'
    matteBlack: 'Schwarz', // 'Black'
    matteLightGray: 'Hellgrau', // 'Light Gray'
    matteNote: 'JPG unterstützt keine Transparenz; transparente Bereiche werden sauber mit dieser Farbe gefüllt.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    rasterExportScale: 'Raster-Exportskalierung', // 'Raster Export Scale'
    rasterExportScaleHint: 'Multiplikator, der auf die intrinsischen Abmessungen des SVG angewendet wird (begrenzt auf 8000 px). Klicken Sie nach dem Ändern der Skalierung auf „Alle erneut konvertieren“.', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: 'Alle erneut konvertieren', // 'Re-convert All'
    converting: 'Konvertieren…', // 'Converting...'
    clear: 'Leeren', // 'Clear'
    batchSummary: 'PNG → JPG Stapelzusammenfassung', // 'PNG → JPG Batch Summary'
    filesConverted: '{count} {files} konvertiert · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'Datei', // 'file'
    filePlural: 'Dateien', // 'files'
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Änderung', // 'Change'
    changeLabel: 'Änderung', // 'Change' — primary key in FormatConverterTool
    compare: 'Vergleichen', // 'Compare'
    downloadTarget: 'JPG herunterladen', // 'Download JPG'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
    errorDecodeFile: '„{filename}“ konnte nicht decodiert werden. Prüfen Sie, ob es sich um ein gültiges PNG-Bild handelt.', // 'Could not decode "{filename}". Verify it is a valid PNG image.'
    errorConvertFailed: '{name} konnte nicht zu JPG konvertiert werden.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'PNG → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-webp': {
    uploadTitle: 'JPG-Bilder ablegen, um sie in leichtes WebP umzuwandeln', // 'Drop JPG images to convert to lightweight WebP'
    conversionPipeline: 'Umwandlungsablauf:', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebP-Ausgabequalität', // 'WebP Output Quality'
    qualityAriaLabel: 'WebP-Ausgabequalität', // aria-label 'WebP output quality'
    smallerFile: 'Kleinere Datei (20 %)', // 'Smaller file (20%)'
    balanced: 'Ausgewogen (85 %)', // 'Balanced (85%)'
    maxDetail: 'Maximale Details (100 %)', // 'Max detail (100%)'
    batchSummary: 'Stapel-Zusammenfassung {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'Datei', // 'file'
    filePlural: 'Dateien', // 'files'
    filesConvertedSuffix: 'umgewandelt', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Änderung', // 'Change'
    compare: 'Vergleichen', // 'Compare'
    downloadTarget: 'WebP herunterladen', // 'Download WebP'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
    converting: 'Wird umgewandelt…', // 'Converting...'
    reconvertAll: 'Alle erneut umwandeln', // 'Re-convert All'
    clear: 'Leeren', // 'Clear'
    comparisonTitlePrefix: 'JPG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '„{name}“ konnte nicht in WebP umgewandelt werden.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '„{name}“ konnte nicht dekodiert werden. Bitte prüfen Sie, ob es sich um ein gültiges JPG-Bild handelt.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-jpg': {
    uploadTitle: 'WebP-Bilder ablegen, um sie in universelles JPG umzuwandeln', // 'Drop WebP images to convert to universal JPG'
    conversionPipeline: 'Umwandlungsablauf:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG-Ausgabequalität', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG-Ausgabequalität', // aria-label 'JPG output quality'
    smallerFile: 'Kleinere Datei (20 %)', // 'Smaller file (20%)'
    balanced: 'Ausgewogen (85 %)', // 'Balanced (85%)'
    maxDetail: 'Maximale Details (100 %)', // 'Max detail (100%)'
    matteColorLabel: 'Hintergrundfarbe für Transparenz', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Hintergrundfarbe', // aria-label 'Matte background color'
    matteWhite: 'Weiß', // 'White'
    matteBlack: 'Schwarz', // 'Black'
    matteLightGray: 'Hellgrau', // 'Light Gray'
    matteHint: 'JPG unterstützt keine Transparenz; transparente Bereiche werden sauber mit dieser Farbe gefüllt.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'Stapel-Zusammenfassung {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'Datei', // 'file'
    filePlural: 'Dateien', // 'files'
    filesConvertedSuffix: 'umgewandelt', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Änderung', // 'Change'
    compare: 'Vergleichen', // 'Compare'
    downloadTarget: 'JPG herunterladen', // 'Download JPG'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
    converting: 'Wird umgewandelt…', // 'Converting...'
    reconvertAll: 'Alle erneut umwandeln', // 'Re-convert All'
    clear: 'Leeren', // 'Clear'
    comparisonTitlePrefix: 'WebP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '„{name}“ konnte nicht in JPG umgewandelt werden.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '„{name}“ konnte nicht dekodiert werden. Bitte prüfen Sie, ob es sich um ein gültiges WebP-Bild handelt.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/png-to-webp': {
    uploadTitle: 'PNG-Dateien ablegen, um sie in transparentes WebP umzuwandeln', // 'Drop PNG files to convert to transparent WebP'
    conversionPipeline: 'Umwandlungsablauf:', // 'Conversion Pipeline:'
    outputQualityLabel: 'WebP-Ausgabequalität', // 'WebP Output Quality'
    qualityAriaLabel: 'WebP-Ausgabequalität', // aria-label 'WebP output quality'
    smallerFile: 'Kleinere Datei (20 %)', // 'Smaller file (20%)'
    balanced: 'Ausgewogen (85 %)', // 'Balanced (85%)'
    maxDetail: 'Maximale Details (100 %)', // 'Max detail (100%)'
    batchSummary: 'Stapel-Zusammenfassung {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'Datei', // 'file'
    filePlural: 'Dateien', // 'files'
    filesConvertedSuffix: 'umgewandelt', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Änderung', // 'Change'
    compare: 'Vergleichen', // 'Compare'
    downloadTarget: 'WebP herunterladen', // 'Download WebP'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
    converting: 'Wird umgewandelt…', // 'Converting...'
    reconvertAll: 'Alle erneut umwandeln', // 'Re-convert All'
    clear: 'Leeren', // 'Clear'
    comparisonTitlePrefix: 'PNG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '„{name}“ konnte nicht in WebP umgewandelt werden.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '„{name}“ konnte nicht dekodiert werden. Bitte prüfen Sie, ob es sich um ein gültiges PNG-Bild handelt.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-png': {
    uploadTitle: 'WebP-Dateien ablegen, um sie in verlustfreies PNG umzuwandeln', // 'Drop WebP files to convert to lossless PNG'
    conversionPipeline: 'Umwandlungsablauf:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Verlustfreie PNG-Ausgabe', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Verlustfreie PNG-Kodierung', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG erhält scharfe Kanten, Text und Alpha-Transparenz ohne Artefakte verlustbehafteter Komprimierung.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    batchSummary: 'Stapel-Zusammenfassung {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'Datei', // 'file'
    filePlural: 'Dateien', // 'files'
    filesConvertedSuffix: 'umgewandelt', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Änderung', // 'Change'
    compare: 'Vergleichen', // 'Compare'
    downloadTarget: 'PNG herunterladen', // 'Download PNG'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
    converting: 'Wird umgewandelt…', // 'Converting...'
    reconvertAll: 'Alle erneut umwandeln', // 'Re-convert All'
    clear: 'Leeren', // 'Clear'
    comparisonTitlePrefix: 'WebP → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '„{name}“ konnte nicht in PNG umgewandelt werden.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '„{name}“ konnte nicht dekodiert werden. Bitte prüfen Sie, ob es sich um ein gültiges WebP-Bild handelt.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/svg-to-png': {
    uploadTitle: 'SVG-Vektordateien ablegen, um sie in PNG zu rastern', // 'Drop SVG vector files to rasterize to PNG'
    notice:
      'Rastert eingebettete SVG-Grafiken lokal über HTML5 Canvas und erhält transparente Hintergründe. Einschränkung: Externe <image>-URLs, externe CSS-Stylesheets/Webfonts oder Skripte, die innerhalb einer SVG referenziert werden, werden im eigenständigen Canvas-Export möglicherweise nicht gerendert.', // 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.'
    conversionPipeline: 'Umwandlungsablauf:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Verlustfreie PNG-Ausgabe', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Verlustfreie PNG-Kodierung', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG erhält scharfe Kanten, Text und Alpha-Transparenz ohne Artefakte verlustbehafteter Komprimierung.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    rasterExportScale: 'Raster-Exportmaßstab', // 'Raster Export Scale'
    rasterExportScaleHint: 'Multiplikator für die intrinsischen Abmessungen der SVG (begrenzt auf 8000 px). Klicken Sie nach einer Änderung des Maßstabs auf „Alle erneut umwandeln“.', // 'Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale.'
    batchSummary: 'Stapel-Zusammenfassung {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'Datei', // 'file'
    filePlural: 'Dateien', // 'files'
    filesConvertedSuffix: 'umgewandelt', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Änderung', // 'Change'
    compare: 'Vergleichen', // 'Compare'
    downloadTarget: 'PNG herunterladen', // 'Download PNG'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
    converting: 'Wird umgewandelt…', // 'Converting...'
    reconvertAll: 'Alle erneut umwandeln', // 'Re-convert All'
    clear: 'Leeren', // 'Clear'
    comparisonTitlePrefix: 'SVG → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '„{name}“ konnte nicht in PNG umgewandelt werden.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Diese SVG konnte nicht gerastert werden. Bitte prüfen Sie, ob die Datei gültiges XML-SVG-Markup ohne Syntaxfehler ist.', // decodeErrorHint 'Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax.'
  },
  '/avif-to-jpg': {
    uploadTitle: 'AVIF-Bilder ablegen, um sie in universelles JPG umzuwandeln', // 'Drop AVIF images to convert to universal JPG'
    notice:
      'Dekodiert AVIF-Bilder lokal mit dem nativen AVIF-Decoder Ihres Browsers (unterstützt in modernen Chrome-, Edge-, Firefox- und Safari-Browsern) und exportiert Standard-JPG-Dateien.', // 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.'
    conversionPipeline: 'Umwandlungsablauf:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG-Ausgabequalität', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG-Ausgabequalität', // aria-label 'JPG output quality'
    smallerFile: 'Kleinere Datei (20 %)', // 'Smaller file (20%)'
    balanced: 'Ausgewogen (85 %)', // 'Balanced (85%)'
    maxDetail: 'Maximale Details (100 %)', // 'Max detail (100%)'
    matteColorLabel: 'Hintergrundfarbe für Transparenz', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Hintergrundfarbe', // aria-label 'Matte background color'
    matteWhite: 'Weiß', // 'White'
    matteBlack: 'Schwarz', // 'Black'
    matteLightGray: 'Hellgrau', // 'Light Gray'
    matteHint: 'JPG unterstützt keine Transparenz; transparente Bereiche werden sauber mit dieser Farbe gefüllt.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'Stapel-Zusammenfassung {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'Datei', // 'file'
    filePlural: 'Dateien', // 'files'
    filesConvertedSuffix: 'umgewandelt', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Änderung', // 'Change'
    compare: 'Vergleichen', // 'Compare'
    downloadTarget: 'JPG herunterladen', // 'Download JPG'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
    converting: 'Wird umgewandelt…', // 'Converting...'
    reconvertAll: 'Alle erneut umwandeln', // 'Re-convert All'
    clear: 'Leeren', // 'Clear'
    comparisonTitlePrefix: 'AVIF → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '„{name}“ konnte nicht in JPG umgewandelt werden.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Ihr Browser konnte dieses AVIF-Bild nicht dekodieren. Bitte prüfen Sie, ob die Datei ein gültiges .avif-Bild ist, und versuchen Sie es mit einem modernen Chrome-, Firefox-, Edge- oder Safari-Browser.', // decodeErrorHint 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.'
  },
  '/bmp-to-jpg': {
    uploadTitle: 'Unkomprimierte BMP-Bitmaps ablegen, um sie in kompaktes JPG umzuwandeln', // 'Drop uncompressed BMP bitmaps to convert to compact JPG'
    conversionPipeline: 'Umwandlungsablauf:', // 'Conversion Pipeline:'
    outputQualityLabel: 'JPG-Ausgabequalität', // 'JPG Output Quality'
    qualityAriaLabel: 'JPG-Ausgabequalität', // aria-label 'JPG output quality'
    smallerFile: 'Kleinere Datei (20 %)', // 'Smaller file (20%)'
    balanced: 'Ausgewogen (85 %)', // 'Balanced (85%)'
    maxDetail: 'Maximale Details (100 %)', // 'Max detail (100%)'
    batchSummary: 'Stapel-Zusammenfassung {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'Datei', // 'file'
    filePlural: 'Dateien', // 'files'
    filesConvertedSuffix: 'umgewandelt', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'ZIP wird erstellt…', // 'Creating ZIP...'
    downloadAllZip: 'Alle herunterladen (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Änderung', // 'Change'
    compare: 'Vergleichen', // 'Compare'
    downloadTarget: 'JPG herunterladen', // 'Download JPG'
    removeImage: '{name} entfernen', // aria-label `Remove ${item.name}`
    converting: 'Wird umgewandelt…', // 'Converting...'
    reconvertAll: 'Alle erneut umwandeln', // 'Re-convert All'
    clear: 'Leeren', // 'Clear'
    comparisonTitlePrefix: 'BMP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: '„{name}“ konnte nicht in JPG umgewandelt werden.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: '„{name}“ konnte nicht dekodiert werden. Bitte prüfen Sie, ob es sich um ein gültiges BMP-Bild handelt.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/remove-background': {
    uploadTitle: 'Foto ablegen, um den Hintergrund mit KI zu entfernen', // 'Drop a photo to remove its background with AI'
    modelLoadingTitle: 'KI-Modell im Browser wird geladen (isnet_quint8)', // 'Loading in-browser AI model (isnet_quint8)'
    modelCache: 'Modell-Cache', // 'Model Cache'
    progressWasm: 'WebAssembly-KI-Laufzeit wird geladen…', // 'Loading WebAssembly AI runtime...'
    progressModel: 'KI-Modell zur Hintergrundentfernung wird heruntergeladen (ca. 35 MB, für künftige Nutzung zwischengespeichert)…', // 'Downloading AI background removal model (~35 MB, cached for future use)...'
    progressCompute: 'Hintergrund wird lokal in Ihrem Browser entfernt…', // 'Removing background locally in your browser...'
    progressPreparing: 'KI-Modell im Browser wird vorbereitet…', // 'Preparing in-browser AI model...'
    progressInitLibrary: 'KI-Bibliothek zur Hintergrundentfernung wird geladen…', // 'Loading AI background removal library...'
    progressInitModule: 'KI-Modul zur Hintergrundentfernung wird initialisiert…', // 'Initializing AI background removal module...'
    errorModelInit: 'Das KI-Hintergrundmodell konnte nicht initialisiert werden: {message}', // `Could not initialize the AI background model: ${err.message}`
    errorModelInitGeneric: 'Das KI-Hintergrundmodell konnte in diesem Browser nicht initialisiert werden.', // 'Could not initialize the AI background model in this browser.'
    errorDecodeOutput: 'Die transparente PNG-Ausgabe konnte nicht dekodiert werden.', // 'Failed to decode transparent PNG output.'
    errorRemovalFailed: 'Die Hintergrundentfernung ist in diesem Browser fehlgeschlagen. Bitte versuchen Sie es mit einem anderen Bild oder laden Sie die Seite neu.', // 'Background removal failed in this browser. Try another image or reload.'
    beforeAfterPreview: 'Vorher-Nachher-Vorschau', // 'Before & After Preview'
    splitCompare: 'Geteilter Vergleich', // 'Split Compare'
    newImage: 'Neues Bild', // 'New Image'
    originalLabel: 'Original', // 'Original'
    transparentCutout: 'Transparenter Freisteller (PNG)', // 'Transparent Cutout (PNG)'
    solidBackgroundPreview: 'Vorschau mit einfarbigem Hintergrund', // 'Solid Background Preview'
    waitingForResult: 'Warten auf Ergebnis…', // 'Waiting for result...'
    processingLocally: 'Wird lokal verarbeitet…', // 'Processing locally...'
    cutoutStatus: 'Freisteller-Status', // 'Cutout Status'
    ready: 'Bereit', // 'Ready'
    backgroundFillOption: 'Option für Hintergrundfüllung', // 'Background Fill Option'
    bgTransparent: 'Transparent', // 'Transparent'
    bgWhite: 'Weiß', // 'White'
    bgBlack: 'Schwarz', // 'Black'
    bgCustom: 'Eigene Farbe', // 'Custom'
    customBackgroundColor: 'Eigene Hintergrundfarbe', // 'Custom Background Color'
    downloadTransparentPng: 'Transparentes PNG herunterladen', // 'Download Transparent PNG'
    downloadWithWhite: 'Mit weißem Hintergrund herunterladen', // 'Download with White Background'
    downloadWithBlack: 'Mit schwarzem Hintergrund herunterladen', // 'Download with Black Background'
    downloadWithCustom: 'Mit {color}-Hintergrund herunterladen', // 'Download with {color} Background'
    rerunRemoval: 'Entfernung erneut ausführen', // 'Re-run Removal'
    comparisonTitlePrefix: 'Vergleich der Hintergrundentfernung', // 'Background Removal Comparison'
    comparisonAfterTransparent: 'Freisteller (transparentes PNG)', // 'Cutout (Transparent PNG)'
    comparisonAfterSolid: 'Freisteller (einfarbiger Hintergrund)', // 'Cutout (Solid BG)'
    altOriginal: 'Original {name}', // alt `Original ${sourceFile.name}`
    altCutout: 'Hintergrund entfernt {name}', // alt `Background removed ${sourceFile.name}`
  },
};
