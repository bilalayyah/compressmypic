import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';

interface GuideWhatsAppPageDeProps {
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
    text: 'Rufen Sie compressmypic.online im Browser Ihres Handys oder Computers auf. Es gibt nichts zu installieren und kein Konto zu erstellen – das Tool öffnet sich sofort.',
  },
  {
    title: 'Foto hochladen',
    text: 'Tippen Sie auf „Dateien durchsuchen“ und wählen Sie das Foto aus Ihrer Galerie aus, oder ziehen Sie es per Drag-and-Drop auf die Seite. Sie können mehrere Fotos gleichzeitig hochladen. Jedes Bild darf bis zu 20 MB groß sein.',
  },
  {
    title: 'Mit der Voreinstellung „Ausgewogen“ beginnen',
    text: 'Die Voreinstellung „Ausgewogen“ (etwa 70 % Qualität) ist ein guter Ausgangspunkt für WhatsApp-Fotos. Sie verkleinert die Datei deutlich, während das Bild auf einem Handybildschirm weiterhin scharf aussieht.',
  },
  {
    title: 'Live-Anzeige der Vorher-Nachher-Größe prüfen',
    text: 'Jedes Foto zeigt seine Originalgröße und seine neue komprimierte Größe nebeneinander. Wenn die Datei noch größer ist als gewünscht, ziehen Sie den Qualitätsregler etwas nach unten und beobachten Sie, wie sich die Größe sofort aktualisiert.',
  },
  {
    title: 'JPG für Fotos beibehalten',
    text: 'Behalten Sie bei normalen Fotos das Ausgabeformat JPG bei. Es ist das Format, mit dem WhatsApp am besten umgeht, und es liefert die kleinsten Dateien für Fotos. Verwenden Sie PNG nur, wenn Ihr Bild Transparenz braucht, etwa ein Logo.',
  },
  {
    title: 'Vorher und Nachher vergleichen',
    text: 'Öffnen Sie den Vorher-Nachher-Vergleich, um zu prüfen, ob das Bild weiterhin gut aussieht. Zoomen Sie in Gesichter und Text hinein – wenn Sie keinen echten Unterschied sehen, ist die Qualitätseinstellung richtig.',
  },
  {
    title: 'Das kleinere Foto herunterladen',
    text: 'Tippen Sie bei dem Foto auf „Herunterladen“ oder verwenden Sie „Alle herunterladen (ZIP)“, wenn Sie mehrere Fotos gleichzeitig komprimiert haben. Die kleinere Datei wird auf Ihrem Gerät gespeichert – Ihr Originalfoto wird niemals verändert.',
  },
  {
    title: 'Foto auf WhatsApp clever senden',
    text: 'Wenn Sie die bestmögliche Qualität möchten, senden Sie das komprimierte Foto als Dokument: Tippen Sie in WhatsApp auf „Anhängen“, dann auf „Dokument“ und wählen Sie die Datei aus. WhatsApp sendet Dokumente unverändert, sodass Ihr Foto genau so ankommt, wie Sie es komprimiert haben. Wenn Sie es stattdessen als Foto senden, komprimiert WhatsApp es ein zweites Mal.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: 'Warum reduziert WhatsApp die Fotoqualität?',
    answer: 'Wenn Sie ein Foto auf normalem Weg senden, komprimiert WhatsApp es erneut, um Daten und Speicherplatz zu sparen – oft wird es dabei auf eine deutlich kleinere Größe und geringere Qualität geschrumpft. Deshalb kann ein scharfes Kamerafoto nach dem Senden weich oder unscharf aussehen.',
  },
  {
    id: 'wa-faq-2',
    question: 'Komprimiert WhatsApp Bilder, die als Dokument gesendet werden?',
    answer: 'Nein. Wenn Sie ein Bild als Dokument senden („Anhängen“, dann „Dokument“), sendet WhatsApp die Datei genau so, wie sie ist, ohne zusätzliche Komprimierung. Das ist der beste Weg, ein Foto in voller Qualität zu teilen.',
  },
  {
    id: 'wa-faq-3',
    question: 'Wie groß darf ein Bild sein, das ich auf WhatsApp senden kann?',
    answer: 'WhatsApp erlaubt Dokumente bis zu 2 GB, sodass ein komprimiertes Foto von wenigen hundert KB niemals ein Problem ist. Fotos, die auf normalem Weg gesendet werden, komprimiert WhatsApp selbst erneut – in der Praxis ist also die Qualität das Entscheidende, nicht die Größe.',
  },
  {
    id: 'wa-faq-4',
    question: 'Wie sende ich ein Foto in voller Qualität auf WhatsApp?',
    answer: 'Komprimieren Sie das Foto zuerst selbst mit CompressMyPic, sodass es eine vernünftige Größe hat, und senden Sie es dann in WhatsApp als Dokument statt als Foto. Tippen Sie auf „Anhängen“, wählen Sie „Dokument“ und dann die Datei aus. Es kommt an, ohne dass WhatsApp es erneut komprimiert.',
  },
  {
    id: 'wa-faq-5',
    question: 'Soll ich vor dem Senden selbst komprimieren oder WhatsApp das überlassen?',
    answer: 'Komprimieren Sie es zuerst selbst. WhatsApp komprimiert aggressiv und Sie haben keine Kontrolle darüber. Wenn Sie zuerst mit CompressMyPic komprimieren, wählen Sie selbst die Qualität, prüfen das Ergebnis und senden die Datei dann als Dokument, damit WhatsApp sie nicht noch einmal anfasst.',
  },
  {
    id: 'wa-faq-6',
    question: 'Welche Qualitätseinstellung sollte ich für WhatsApp-Fotos verwenden?',
    answer: 'Beginnen Sie mit der Voreinstellung „Ausgewogen“ bei etwa 70 %. Für ein wichtiges Foto verwenden Sie 80–85 % und prüfen Sie den Vorher-Nachher-Vergleich. Für ein schnelles Alltagsfoto, bei dem es auf Geschwindigkeit ankommt, sehen 50–60 % auf einem Handybildschirm immer noch gut aus und ergeben eine deutlich kleinere Datei.',
  },
  {
    id: 'wa-faq-7',
    question: 'Macht zweimaliges Komprimieren Fotos schlechter?',
    answer: 'Ja. Jede Runde JPEG-Komprimierung wirft ein wenig mehr Details weg. Deshalb sollten Sie einmal mit CompressMyPic komprimieren und das Ergebnis dann als Dokument senden, statt WhatsApp ein bereits komprimiertes Foto ein zweites Mal komprimieren zu lassen.',
  },
  {
    id: 'wa-faq-8',
    question: 'Kann ich WhatsApp-Fotos auf meinem Handy komprimieren?',
    answer: 'Ja. CompressMyPic funktioniert im Browser auf Android und iPhone. Öffnen Sie die Website, wählen Sie das Foto aus Ihrer Galerie aus, komprimieren Sie es, laden Sie die kleinere Datei herunter und teilen Sie sie dann über WhatsApp. Keine App-Installation nötig.',
  },
  {
    id: 'wa-faq-9',
    question: 'Sehen komprimierte Fotos im WhatsApp-Status weiterhin gut aus?',
    answer: 'Ja, wenn Sie es nicht übertreiben. Der WhatsApp-Status zeigt Fotos in einer bescheidenen Auflösung an, sodass ein Foto, das mit der Voreinstellung „Ausgewogen“ (etwa 70 %) komprimiert wurde, auf einem Handybildschirm genauso aussieht wie das Original. Gehen Sie bei Statusfotos mit Gesichtern oder Text nicht unter 50 %.',
  },
  {
    id: 'wa-faq-10',
    question: 'WhatsApp sagt, mein Bild sei zu groß – was soll ich tun?',
    answer: 'Laden Sie das Bild bei CompressMyPic hoch und senken Sie den Qualitätsregler, bis die Datei nur noch wenige hundert KB groß ist, laden Sie sie dann herunter und senden Sie sie erneut. Wenn es sich als Foto weiterhin nicht senden lässt, senden Sie es stattdessen als Dokument – dort sind deutlich größere Dateien möglich.',
  },
  {
    id: 'wa-faq-11',
    question: 'Soll ich für WhatsApp JPG oder PNG verwenden?',
    answer: 'Verwenden Sie JPG für Fotos. JPG erzeugt für Kamerafotos deutlich kleinere Dateien und WhatsApp geht am besten damit um. Verwenden Sie PNG nur für Bilder, die Transparenz brauchen, etwa ein Logo, da PNG-Dateien viel größer sind.',
  },
  {
    id: 'wa-faq-12',
    question: 'Kann ich WebP-Bilder auf WhatsApp senden?',
    answer: 'WhatsApp kann WebP-Dateien empfangen, aber sie werden möglicherweise nicht als normales Foto in der Vorschau angezeigt, und manche Handys gehen seltsam damit um. Für Fotos, die andere direkt sehen sollen, ist JPG die sicherere Wahl. WebP eignet sich besser für Websites als für WhatsApp.',
  },
  {
    id: 'wa-faq-13',
    question: 'Wie komprimiere ich mehrere WhatsApp-Fotos gleichzeitig?',
    answer: 'Laden Sie alle Fotos auf einmal bei CompressMyPic hoch, wenden Sie dieselbe Voreinstellung auf alle an und laden Sie alles zusammen mit der Schaltfläche „Alle herunterladen (ZIP)“ herunter. Senden Sie die Dateien dann einzeln über WhatsApp oder als Dokumente.',
  },
  {
    id: 'wa-faq-14',
    question: 'Komprimiert WhatsApp Videos genauso?',
    answer: 'Ja, WhatsApp komprimiert auch Videos, die auf normalem Weg gesendet werden, und kann sie stark verkleinern. CompressMyPic funktioniert nur mit Bildern (JPG, PNG, WebP), nicht mit Videos. Senden Sie Videos als Dokumente, um die Originalqualität zu erhalten.',
  },
  {
    id: 'wa-faq-15',
    question: 'Löscht das Komprimieren eines Fotos das Original von meinem Handy?',
    answer: 'Nein. CompressMyPic erstellt eine neue, kleinere Kopie und lädt sie auf Ihr Gerät herunter. Ihr Originalfoto bleibt in Ihrer Galerie genau so, wie es ist, unverändert.',
  },
  {
    id: 'wa-faq-16',
    question: 'Werden meine Fotos beim Komprimieren auf einen Server hochgeladen?',
    answer: 'Nein. Die gesamte Komprimierung findet in Ihrem eigenen Browser auf Ihrem Gerät statt, sodass Ihre Fotos niemals hochgeladen, gespeichert oder von jemand anderem gesehen werden. Sie bleiben im Speicher Ihres Browsers und werden gelöscht, wenn Sie den Tab schließen oder neu laden.',
  },
  {
    id: 'wa-faq-17',
    question: 'Wie klein sollte ein Foto für WhatsApp sein?',
    answer: 'Für den alltäglichen Austausch sind 100–300 KB pro Foto ein gutes Ziel: Es wird schnell gesendet, verbraucht wenig mobile Daten und sieht auf einem Handy weiterhin scharf aus. Für ein Foto, das Sie ausdrucken oder behalten möchten, bleiben Sie eher bei 500 KB–1 MB mit einer höheren Qualitätseinstellung.',
  },
  {
    id: 'wa-faq-18',
    question: 'Warum sehen meine WhatsApp-Fotos nach dem Senden unscharf aus?',
    answer: 'Weil WhatsApp sie beim Senden als Fotos erneut komprimiert hat. Die Lösung: Komprimieren Sie das Foto zuerst selbst mit einer Qualität, die Sie steuern, und senden Sie es dann als Dokument, damit WhatsApp es nicht erneut komprimiert.',
  },
  {
    id: 'wa-faq-19',
    question: 'Kann ich einen Screenshot für WhatsApp komprimieren?',
    answer: 'Ja. Laden Sie den Screenshot bei CompressMyPic genauso hoch wie ein Foto. Screenshots lassen sich sehr gut komprimieren, da sie große Flächen mit einheitlicher Farbe haben – beginnen Sie mit der Voreinstellung „Ausgewogen“ und wechseln Sie zur WebP-Ausgabe, wenn Sie die kleinste Datei möchten.',
  },
  {
    id: 'wa-faq-20',
    question: 'Ist CompressMyPic für WhatsApp-Fotos kostenlos?',
    answer: 'Ja, völlig kostenlos. Es gibt keine Anmeldung, kein Wasserzeichen, kein Limit dafür, wie viele Fotos Sie komprimieren, und kein Konto ist nötig. Öffnen Sie einfach die Website, komprimieren Sie und laden Sie herunter.',
  },
];

export const GuideWhatsAppPageDe: React.FC<GuideWhatsAppPageDeProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = 'Bilder für WhatsApp komprimieren ohne Qualitätsverlust';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Erfahren Sie, wie Sie Bilder für WhatsApp komprimieren, ohne Qualität zu verlieren. Kostenlos, privat, ohne Anmeldung – verkleinern Sie Fotos vor dem Senden, damit sie scharf bleiben und schnell gesendet werden.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/de/anleitungen/bilder-fuer-whatsapp-komprimieren';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Bilder für WhatsApp komprimieren ohne Qualitätsverlust',
          description: 'Komprimieren Sie ein Foto mit CompressMyPic und senden Sie es auf WhatsApp als Dokument, damit es scharf bleibt.',
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
    script.id = 'guide-whatsapp-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-whatsapp-jsonld');
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
            Bilder für WhatsApp komprimieren ohne Qualitätsverlust
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            WhatsApp verkleinert jedes Foto, das Sie senden – oft viel stärker, als nötig wäre. Komprimieren Sie Ihre Fotos zuerst selbst und senden Sie sie dann auf dem richtigen Weg, dann kommen sie scharf an, werden schnell gesendet und verbrauchen weniger mobile Daten.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span>Warum WhatsApp Ihre Fotos unscharf macht</span>
            </h2>
            <p>
              Wenn Sie ein Foto auf WhatsApp auf normalem Weg senden, komprimiert WhatsApp es vor der Zustellung erneut. Aus einem 3-MB-Kamerafoto kann eine 100-KB-Datei mit weichen Details und blockigen Farben werden. WhatsApp macht das, um Daten und Speicherplatz zu sparen, aber Sie haben keinen Einfluss darauf, wie viel Qualität verloren geht.
            </p>
            <p>
              Es gibt einen zweiten Weg, ein Foto zu senden, den die meisten Menschen nie nutzen: das Senden als Dokument. Dokumente werden genau so zugestellt, wie sie sind, ganz ohne zusätzliche Komprimierung. Der Trick besteht darin, das Foto zuerst selbst zu verkleinern – mit einer Qualitätseinstellung, die Sie steuern – und es dann als Dokument zu senden. So erhalten Sie gleichzeitig eine kleine Datei und ein scharfes Foto.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Send className="w-5 h-5 text-blue-600" />
              <span>Schritt für Schritt: Foto für WhatsApp komprimieren</span>
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

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-1.png"
              alt="Screenshot: Foto bei CompressMyPic hochladen, bevor es auf WhatsApp gesendet wird"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Laden Sie Ihr Foto bei CompressMyPic hoch – per Drag-and-Drop oder aus Ihrer Galerie.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <span>Welche Qualitätseinstellung sollten Sie verwenden?</span>
            </h2>
            <p>
              Es gibt keine einzelne perfekte Zahl – es hängt vom Foto und seinem Zweck ab. Nutzen Sie dies als Ausgangspunkt und prüfen Sie jedes Mal den Vorher-Nachher-Vergleich:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Alltagsfotos: 70 %</div>
                <p className="text-xs text-slate-600">
                  Die Voreinstellung „Ausgewogen“. Große Platzeinsparung, und das Foto sieht auf jedem Handybildschirm weiterhin scharf aus. Die beste Standardeinstellung für WhatsApp.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Wichtige Fotos: 80–85 %</div>
                <p className="text-xs text-slate-600">
                  Familienbilder, Reisefotos, alles, was Sie behalten möchten. Die Datei ist größer, aber feine Details in Gesichtern und Landschaften bleiben erhalten.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Schnelles Teilen: 50–60 %</div>
                <p className="text-xs text-slate-600">
                  Memes, schnelle Updates, Fotos bei langsamen mobilen Daten. Deutlich kleinere Dateien, die in Handybildschirmgröße weiterhin gut aussehen.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Tipps für die besten Ergebnisse</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Komprimieren Sie einmal und nur einmal. Ein bereits komprimiertes Foto ein zweites Mal zu komprimieren, wirft Details weg und bringt fast keine zusätzliche Einsparung.</li>
              <li>Senden Sie die komprimierte Datei immer als Dokument, wenn Qualität wichtig ist – nur so verhindern Sie, dass WhatsApp sie erneut komprimiert.</li>
              <li>Komprimieren Sie mehrere Fotos gleichzeitig mit denselben Einstellungen und laden Sie sie alle mit der Schaltfläche „Alle herunterladen (ZIP)“ herunter.</li>
              <li>Probieren Sie bei Screenshots und Grafiken mit Text die WebP-Ausgabe – sie hält Kanten scharf und erzeugt eine kleinere Datei als JPG.</li>
              <li>Ihr Originalfoto wird niemals verändert. CompressMyPic speichert eine neue, kleinere Kopie, sodass Sie jederzeit zurückgehen und eine andere Qualität ausprobieren können.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.png"
              alt="Screenshot: Qualitätsregler und Live-Anzeige der Vorher-Nachher-Dateigröße in CompressMyPic"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Bewegen Sie den Qualitätsregler und beobachten Sie, wie sich die Vorher-Nachher-Größe live aktualisiert, bis die Datei die gewünschte Größe hat.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileWarning className="w-5 h-5 text-blue-600" />
              <span>Häufige Fehler, die Sie vermeiden sollten</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Das Foto nach dem Komprimieren als Foto zu senden – WhatsApp komprimiert es ein zweites Mal und macht Ihre Arbeit zunichte.</li>
              <li>Die Qualität bei Fotos mit Gesichtern unter 40 % zu senken – Haut und feine Details werden bei niedriger Qualität sehr schnell blockig.</li>
              <li>PNG für Kamerafotos zu verwenden – PNG-Dateien sind für Fotos viel größer als JPG und bringen Ihnen auf WhatsApp nichts.</li>
              <li>Das Ergebnis nicht zu prüfen – schauen Sie sich vor dem Senden immer den Vorher-Nachher-Vergleich an, besonders bei Fotos mit Text.</li>
            </ul>
          </section>

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
                onClick={() => onNavigate('/de/anleitungen/jpg-vs-png-vs-webp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">JPG vs PNG vs WebP – welches Format sollten Sie verwenden?</div>
                <p className="text-xs text-slate-600 mt-1">Dateigröße, Qualität und Transparenz im Vergleich, damit Sie jedes Mal das richtige Format wählen.</p>
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
              onClick={() => onNavigate('/de/anleitungen/bild-auf-100-kb-verkleinern')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Bild auf 100 KB verkleinern
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
