import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';

interface GuideFormatsPageDeProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'CompressMyPic öffnen',
    text: 'Rufen Sie compressmypic.online in Ihrem Browser auf. Es gibt nichts zu installieren, kein Konto zu erstellen, und keine Datei wird jemals auf einen Server hochgeladen.',
  },
  {
    title: 'Bild hochladen',
    text: 'Ziehen Sie Ihr Bild per Drag-and-Drop oder tippen Sie auf „Dateien durchsuchen“, um es auszuwählen. JPG-, PNG- und WebP-Dateien werden unterstützt, bis zu 20 MB pro Bild.',
  },
  {
    title: 'Entscheiden: Format behalten oder konvertieren',
    text: 'Wählen Sie „Original“, um das Format zu behalten, das Ihr Bild bereits hat, oder wählen Sie JPG, PNG oder WebP als Ausgabe. Nutzen Sie die Anleitung unten zur Entscheidung: JPG für Fotos, PNG, wenn Sie Transparenz brauchen, WebP, wenn Sie die kleinste Datei für eine Website möchten.',
  },
  {
    title: 'Qualitätsvoreinstellung wählen',
    text: 'Beginnen Sie mit der Voreinstellung „Ausgewogen“ (etwa 70 %). Für ein Foto, das perfekt aussehen soll, verwenden Sie die Voreinstellung „Hoch“ oder eine Qualität von 85–90 %. Für ein kleines Webbild ist eine niedrigere Einstellung in Ordnung.',
  },
  {
    title: 'Live-Größe prüfen und vergleichen',
    text: 'Jedes Bild zeigt seine Originalgröße und seine neue komprimierte Größe. Öffnen Sie den Vorher-Nachher-Vergleich und zoomen Sie hinein – wenn Sie keinen Unterschied sehen, ist die Einstellung richtig. Probieren Sie, das Ausgabeformat auf WebP umzustellen, und beobachten Sie, wie viel kleiner die Datei wird.',
  },
  {
    title: 'Bild herunterladen',
    text: 'Laden Sie das einzelne Bild herunter oder verwenden Sie „Alle herunterladen (ZIP)“, wenn Sie mehrere Bilder gleichzeitig konvertiert haben. Ihre Originaldatei wird niemals verändert – Sie erhalten eine neue, kleinere Kopie.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: 'Was ist der Unterschied zwischen JPG und PNG?',
    answer: 'JPG ist ein verlustbehaftetes Format für Fotos: Es wirft einige Details weg, um deutlich kleinere Dateien zu erzeugen, und kann keine Transparenz. PNG ist verlustfrei und unterstützt Transparenz, daher ist es perfekt für Logos und Grafiken – aber PNG-Fotos sind um ein Vielfaches größer als dasselbe Foto als JPG.',
  },
  {
    id: 'fmt-faq-2',
    question: 'Ist WebP besser als JPG?',
    answer: 'Bei der Dateigröße ja – WebP ist bei ähnlicher Qualität in der Regel 25–35 % kleiner als JPG und unterstützt ebenfalls Transparenz. Der einzige Grund, JPG statt WebP zu wählen, ist die Kompatibilität: Manche ältere Software und Apps gehen mit JPG weiterhin besser um, und WhatsApp zeigt JPG-Fotos zuverlässiger in der Vorschau an.',
  },
  {
    id: 'fmt-faq-3',
    question: 'Ist WebP besser als PNG?',
    answer: 'Meistens ja. WebP unterstützt Transparenz wie PNG, erzeugt aber viel kleinere Dateien, und kann zudem verlustbehaftet komprimieren wie JPG. PNG ist weiterhin die sicherere Wahl, wenn Sie perfekte, verlustfreie Qualität für ein Logo oder eine Grafik brauchen, die später erneut bearbeitet wird.',
  },
  {
    id: 'fmt-faq-4',
    question: 'Unterstützt PNG Transparenz und JPG nicht?',
    answer: 'Richtig. PNG unterstützt einen transparenten Hintergrund (einen Alphakanal), weshalb Logos und Symbole meist PNG sind. JPG hat überhaupt keine Transparenz – jeder transparente Bereich in einem JPG wird zu einer Volltonfarbe, meist Weiß. Speichern Sie also niemals ein Logo mit transparentem Hintergrund als JPG.',
  },
  {
    id: 'fmt-faq-5',
    question: 'Warum sind PNG-Dateien so viel größer als JPG?',
    answer: 'Weil PNG verlustfrei ist: Es behält jedes einzelne Pixel an Details exakt bei, während JPG Details wegwirft, die das Auge kaum bemerkt. Ein Kamerafoto, das als PNG gespeichert wird, kann 5–10 Mal größer sein als dasselbe Foto als JPG. Deshalb sollten Fotos fast nie PNG sein.',
  },
  {
    id: 'fmt-faq-6',
    question: 'Wann sollte ich JPG statt WebP verwenden?',
    answer: 'Verwenden Sie JPG, wenn das Bild in älterer Software geöffnet, über WhatsApp oder E-Mail gesendet werden soll, wo Sie eine garantierte Vorschau möchten, oder wenn es gedruckt wird. WebP ist besser für Websites, aber zum Teilen eines Fotos mit jemandem ist JPG weiterhin das universellste Format.',
  },
  {
    id: 'fmt-faq-7',
    question: 'Kann ich PNG in JPG konvertieren?',
    answer: 'Ja. Laden Sie das PNG bei CompressMyPic hoch, wählen Sie JPG als Ausgabeformat und laden Sie es herunter. Denken Sie nur daran, dass JPG keine Transparenz hat: Wenn Ihr PNG einen transparenten Hintergrund hat, wählen Sie zuerst eine Hintergrundfarbe, da der transparente Bereich sonst vollflächig weiß wird.',
  },
  {
    id: 'fmt-faq-8',
    question: 'Kann ich JPG in WebP konvertieren?',
    answer: 'Ja. Laden Sie das JPG hoch, wählen Sie WebP als Ausgabe und laden Sie es herunter – die Datei wird bei derselben sichtbaren Qualität in der Regel 25–35 % kleiner. Sie können mehrere JPGs gleichzeitig in WebP konvertieren und sie alle als ZIP herunterladen.',
  },
  {
    id: 'fmt-faq-9',
    question: 'Verbessert das Konvertieren von JPG in PNG die Qualität?',
    answer: 'Nein. Das Konvertieren eines JPG in PNG kann Details, die die JPG-Komprimierung bereits weggeworfen hat, nicht zurückbringen – es macht die Datei nur viel größer. Der einzige gute Grund, JPG in PNG zu konvertieren, ist, wenn Sie das Bild erneut bearbeiten möchten, ohne weitere Qualität zu verlieren.',
  },
  {
    id: 'fmt-faq-10',
    question: 'Welches Format sollte ich für eine Website verwenden?',
    answer: 'Zuerst WebP, JPG als Alternative. WebP liefert die kleinsten Dateien, wodurch Seiten schneller laden – und die Seitengeschwindigkeit ist sowohl für Besucher als auch für Google wichtig. Verwenden Sie PNG nur für Bilder, die Transparenz brauchen, etwa ein Logo, und JPG für Fotos, wenn Sie kein WebP verwenden können.',
  },
  {
    id: 'fmt-faq-11',
    question: 'Welches Format ist am besten für ein Logo?',
    answer: 'PNG, wenn das Logo einen transparenten Hintergrund braucht, da JPG keine Transparenz kann. WebP unterstützt ebenfalls Transparenz und erzeugt eine kleinere Datei, sodass es eine gute Wahl für ein Logo auf einer Website ist. Speichern Sie ein Logo niemals als JPG, wenn der Hintergrund transparent bleiben muss.',
  },
  {
    id: 'fmt-faq-12',
    question: 'Welches Format ist am besten für Screenshots?',
    answer: 'PNG oder WebP. Screenshots haben scharfe Kanten und einheitliche Farben, mit denen PNG und WebP gut umgehen. JPG verwischt scharfe Textkanten. Für die kleinste Screenshot-Datei probieren Sie die WebP-Ausgabe in CompressMyPic – sie ist in der Regel deutlich kleiner als PNG, ohne sichtbaren Unterschied.',
  },
  {
    id: 'fmt-faq-13',
    question: 'Unterstützen inzwischen alle Browser WebP?',
    answer: 'Ja, praktisch alle. Chrome, Edge, Firefox, Safari und alle modernen mobilen Browser unterstützen WebP seit Jahren. Nur sehr alte Browser und manche älteren Apps können WebP nicht öffnen – das ist der einzige Grund, warum JPG weiterhin nützlich ist.',
  },
  {
    id: 'fmt-faq-14',
    question: 'Akzeptieren WhatsApp oder Instagram WebP?',
    answer: 'WhatsApp kann WebP-Dateien empfangen, aber sie werden möglicherweise nicht als normales Foto in der Vorschau angezeigt, daher ist JPG zum Teilen von Fotos dort sicherer. Instagram akzeptiert JPG und PNG für Beiträge und konvertiert Uploads selbst. Für das Teilen in sozialen Medien bleiben Sie bei Fotos bei JPG.',
  },
  {
    id: 'fmt-faq-15',
    question: 'Verliere ich Qualität, wenn ich ein Foto in WebP konvertiere?',
    answer: 'Nur so viel, wie Sie selbst wählen. WebP nutzt dasselbe Prinzip wie JPG – eine Qualitätseinstellung, die ein wenig Details gegen eine kleinere Datei eintauscht. Bei 80–90 % Qualität sieht ein WebP-Foto genauso aus wie das ursprüngliche JPG, und die Datei ist etwa ein Drittel kleiner.',
  },
  {
    id: 'fmt-faq-16',
    question: 'Was ist der Unterschied zwischen JPG und JPEG?',
    answer: 'Es gibt keinen – JPG und JPEG sind dasselbe Format. JPEG ist der vollständige Name (Joint Photographic Experts Group) und JPG ist die kurze Dateierweiterung. Eine Datei namens foto.jpg und eine Datei namens foto.jpeg sind dieselbe Art von Bild.',
  },
  {
    id: 'fmt-faq-17',
    question: 'Soll ich das Originalformat behalten oder konvertieren?',
    answer: 'Behalten Sie das Original, wenn Sie mit der Größe zufrieden sind – das ist die einfachste Wahl und es geht nichts verloren. Konvertieren Sie, wenn Sie einen Grund haben: JPG in WebP, um ein Website-Foto zu verkleinern, PNG in JPG, um ein Foto zu verkleinern, das keine Transparenz braucht, oder PNG in WebP, um ein Logo zu verkleinern.',
  },
  {
    id: 'fmt-faq-18',
    question: 'Welches Format ergibt die kleinste Dateigröße?',
    answer: 'WebP, in fast jedem Fall. Bei Fotos ist WebP bei derselben sichtbaren Qualität in der Regel 25–35 % kleiner als JPG. Bei Grafiken mit Transparenz ist WebP meist deutlich kleiner als PNG. Deshalb ist WebP das beste Format für Websites.',
  },
  {
    id: 'fmt-faq-19',
    question: 'Kann CompressMyPic zwischen JPG, PNG und WebP konvertieren?',
    answer: 'Ja. Laden Sie ein JPG-, PNG- oder WebP-Bild hoch, wählen Sie das gewünschte Ausgabeformat – Original, JPG, PNG oder WebP – und laden Sie die konvertierte Datei herunter. Sie können mehrere Bilder gleichzeitig mit denselben Einstellungen konvertieren und sie alle als ZIP herunterladen.',
  },
  {
    id: 'fmt-faq-20',
    question: 'Was passiert mit der Transparenz, wenn ich PNG in JPG konvertiere?',
    answer: 'Sie geht verloren. JPG kann keine Transparenz speichern, sodass die transparenten Teile Ihres PNG zu einer Volltonfarbe werden. CompressMyPic lässt Sie eine Hintergrundfarbe wählen, um diese Bereiche zu füllen – wählen Sie also eine, die zu dem Ort passt, an dem das Bild verwendet wird; Weiß ist die übliche Wahl.',
  },
];

export const GuideFormatsPageDe: React.FC<GuideFormatsPageDeProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG vs PNG vs WebP: Welches Format sollten Sie verwenden?';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG vs PNG vs WebP einfach erklärt: Dateigröße, Qualität und Transparenz im Vergleich, damit Sie das richtige Format für Fotos, Logos und Websites wählen.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/de/anleitungen/jpg-vs-png-vs-webp';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Zwischen JPG, PNG und WebP wählen und Bilder konvertieren',
          description: 'Vergleichen Sie JPG, PNG und WebP und komprimieren oder konvertieren Sie dann Ihr Bild mit CompressMyPic.',
          step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text })),
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQ_DATA.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-formats-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-formats-jsonld');
      if (existing) existing.remove();
    };
  }, []);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/de/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zum Bildkomprimierer</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            JPG vs PNG vs WebP – Welches Format sollten Sie verwenden?
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            Die Wahl des falschen Formats kann Ihr Bild zehnmal größer machen als nötig – oder ein transparentes Logo ruinieren. Hier ist der einfache, ehrliche Vergleich und wie Sie in Sekunden zwischen Formaten konvertieren.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-600" />
              <span>Die Kurzantwort</span>
            </h2>
            <p>
              Wenn Sie sich nur eine Sache merken, dann diese: Verwenden Sie JPG für Fotos, PNG für Logos und alles, was Transparenz braucht, und WebP, wenn Sie die kleinste Datei möchten – besonders auf einer Website. Die Tabelle unten zeigt, warum.
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 text-left">
                    <th className="px-4 py-3 font-bold">Format</th>
                    <th className="px-4 py-3 font-bold">Dateigröße</th>
                    <th className="px-4 py-3 font-bold">Transparenz</th>
                    <th className="px-4 py-3 font-bold">Am besten für</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">JPG</td>
                    <td className="px-4 py-3">Klein</td>
                    <td className="px-4 py-3">Nein</td>
                    <td className="px-4 py-3">Fotos, Teilen, Drucken</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">PNG</td>
                    <td className="px-4 py-3">Groß</td>
                    <td className="px-4 py-3">Ja</td>
                    <td className="px-4 py-3">Logos, Symbole, Screenshots</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">WebP</td>
                    <td className="px-4 py-3">Am kleinsten</td>
                    <td className="px-4 py-3">Ja</td>
                    <td className="px-4 py-3">Websites, Webfotos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Camera className="w-5 h-5 text-blue-600" />
              <span>JPG: Am besten für Fotos</span>
            </h2>
            <p>
              JPG (auch JPEG geschrieben) ist das klassische Fotoformat. Es nutzt verlustbehaftete Komprimierung: Es wirft feine Details weg, die Ihr Auge kaum bemerkt, wodurch Dateien dramatisch kleiner werden. Aus einem 5-MB-Kamerafoto kann ein 500-KB-JPG werden, das weiterhin großartig aussieht. JPG kann keine Transparenz, daher ist es die falsche Wahl für Logos – aber für jedes normale Foto ist es die sichere, universelle Standardeinstellung, die jedes Gerät und jede App öffnen kann.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>PNG: Am besten für Logos und Transparenz</span>
            </h2>
            <p>
              PNG ist verlustfrei: Es behält jedes Pixel exakt bei und unterstützt transparente Hintergründe. Das macht es zum richtigen Format für Logos, Symbole und Grafiken mit Text. Der Preis ist die Dateigröße – ein Foto, das als PNG gespeichert wird, kann 5–10 Mal größer sein als dasselbe Foto als JPG. Speichern Sie ein Kamerafoto niemals als PNG, es sei denn, Sie haben einen konkreten Grund dafür.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span>WebP: Am besten für Websites</span>
            </h2>
            <p>
              WebP ist das moderne Format von Google. Es kann alles: verlustbehaftete Komprimierung wie JPG, Transparenz wie PNG und Dateien, die bei derselben sichtbaren Qualität in der Regel 25–35 % kleiner sind als JPG. Jeder moderne Browser unterstützt es, weshalb es das beste Format für Website-Bilder ist. Seine einzige Schwäche ist die Kompatibilität mit älterer Software – und WhatsApp-Vorschauen, bei denen JPG weiterhin sicherer ist.
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.png"
              alt="Screenshot: Vergleich desselben Fotos als JPG, PNG und WebP mit den jeweiligen Dateigrößen"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Dasselbe Foto in drei Formaten: WebP ist am kleinsten, PNG am größten, und JPG liegt dazwischen.
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileImage className="w-5 h-5 text-blue-600" />
              <span>Schritt für Schritt: Bild komprimieren oder konvertieren</span>
            </h2>
            <ol className="space-y-4">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Welches Format für welche Aufgabe?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Kamerafotos – JPG oder WebP</div>
                <p className="text-xs text-slate-600">
                  JPG zum Teilen und Drucken, WebP für Ihre Website. Beide halten Fotos bei einem Bruchteil der Originalgröße großartig aussehend.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Logos und Symbole – PNG oder WebP</div>
                <p className="text-xs text-slate-600">
                  Sie brauchen Transparenz, also scheidet JPG aus. PNG ist der sichere Klassiker; WebP ist kleiner und funktioniert überall, wo es modern ist.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Screenshots – WebP oder PNG</div>
                <p className="text-xs text-slate-600">
                  Scharfer Text und einheitliche Farben passen zu WebP und PNG. JPG verwischt Textkanten, also vermeiden Sie es bei Screenshots.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Website-Bilder – WebP</div>
                <p className="text-xs text-slate-600">
                  Kleinste Dateien bedeuten schnellere Seiten. Konvertieren Sie Ihre Website-Fotos in WebP und behalten Sie JPG als Alternative für sehr alte Browser.
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.png"
              alt="Screenshot: Auswahl des Ausgabeformats JPG, PNG oder WebP in CompressMyPic"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Wählen Sie Ihr Ausgabeformat in CompressMyPic – behalten Sie das Original oder konvertieren Sie in JPG, PNG oder WebP.
            </figcaption>
          </figure>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Häufig gestellte Fragen</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div key={item.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors ${isOpen ? 'bg-slate-50/50' : 'hover:bg-slate-50/50'}`}
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Related guides */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Verwandte Anleitungen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/de/anleitungen/bilder-fuer-whatsapp-komprimieren')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">Bilder für WhatsApp komprimieren ohne Qualitätsverlust</div>
                <p className="text-xs text-slate-600 mt-1">Verkleinern Sie Fotos zuerst selbst und senden Sie sie dann als Dokumente, damit WhatsApp sie nicht unscharf machen kann.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/de/anleitungen/bild-auf-100-kb-verkleinern')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">Bild auf 100 KB verkleinern für Websites und E-Mails</div>
                <p className="text-xs text-slate-600 mt-1">Schritt-für-Schritt-Anleitung, um 100 KB zu erreichen, ohne Ihr Foto zu ruinieren.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/de/')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Bilder kostenlos komprimieren
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/de/anleitungen/bilder-fuer-whatsapp-komprimieren')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Für WhatsApp komprimieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
