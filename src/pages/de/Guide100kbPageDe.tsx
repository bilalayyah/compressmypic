import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';

interface Guide100kbPageDeProps {
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
    text: 'Rufen Sie compressmypic.online in Ihrem Browser auf. Es gibt nichts zu installieren und kein Konto zu erstellen – das Tool ist kostenlos, ohne Anmeldung und ohne Wasserzeichen.',
  },
  {
    title: 'Bild hochladen',
    text: 'Ziehen Sie Ihr Bild per Drag-and-Drop auf die Seite oder tippen Sie auf „Dateien durchsuchen“, um es von Ihrem Gerät auszuwählen. JPG, PNG und WebP werden unterstützt, bis zu 20 MB pro Bild. Sie können mehrere Bilder gleichzeitig hochladen.',
  },
  {
    title: 'Mit der Voreinstellung „Ausgewogen“ beginnen',
    text: 'Die Voreinstellung „Ausgewogen“ stellt die Qualität auf etwa 70 % ein. Bei den meisten Fotos schrumpft die Datei dadurch bereits auf einen Bruchteil ihrer Originalgröße – prüfen Sie die Live-Größe neben Ihrem Bild, um zu sehen, wo Sie stehen.',
  },
  {
    title: 'Qualitätsregler Schritt für Schritt senken',
    text: 'Es gibt kein Feld, in das Sie „100 KB“ eintippen – ziehen Sie stattdessen den Qualitätsregler langsam nach unten und beobachten Sie, wie sich die Live-Anzeige der Vorher-Nachher-Größe nach jeder Änderung aktualisiert. Gehen Sie in kleinen Schritten vor (zum Beispiel 70 % auf 60 % auf 50 %), damit Sie nicht übers Ziel hinausschießen und mehr Qualität verlieren als nötig.',
  },
  {
    title: 'Zu WebP wechseln, wenn Sie noch über 100 KB liegen',
    text: 'Wenn die Datei bei einer vernünftigen Qualität noch über 100 KB liegt, ändern Sie das Ausgabeformat auf WebP. WebP ist bei derselben sichtbaren Qualität in der Regel 25–35 % kleiner als JPG und schließt die Lücke zu 100 KB oft, ohne die Qualität weiter zu senken.',
  },
  {
    title: 'Vorher und Nachher vergleichen',
    text: 'Öffnen Sie den Vorher-Nachher-Vergleich und zoomen Sie in Gesichter, Text und feine Details hinein. Wenn das Bild weiterhin gut aussieht, sind Sie fertig. Wenn es blockig oder verwaschen aussieht, erhöhen Sie die Qualität etwas und akzeptieren Sie eine Datei, die etwas über 100 KB liegt – ein scharfes 120-KB-Foto ist besser als ein unscharfes 100-KB-Foto.',
  },
  {
    title: 'Bild herunterladen',
    text: 'Tippen Sie auf „Herunterladen“, um die kleinere Datei zu speichern, oder verwenden Sie „Alle herunterladen (ZIP)“, wenn Sie mehrere Bilder gleichzeitig verkleinert haben. Ihr Originalbild wird niemals verändert – Sie erhalten immer eine neue, kleinere Kopie.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: 'Wie bekomme ich mein Foto auf etwa 100 KB herunter?',
    answer: 'Laden Sie es bei CompressMyPic hoch, beginnen Sie mit der Voreinstellung „Ausgewogen“ und senken Sie dann den Qualitätsregler Schritt für Schritt, während Sie die Live-Anzeige der Vorher-Nachher-Größe beobachten. Hören Sie auf, sobald die komprimierte Größe nahe bei 100 KB liegt. Wenn Sie noch darüber liegen, wechseln Sie das Ausgabeformat auf WebP.',
  },
  {
    id: 'kb-faq-2',
    question: 'Warum gibt es kein exaktes Eingabefeld für 100 KB?',
    answer: 'Weil sich jedes Foto anders komprimieren lässt – ein schlichter Himmel schrumpft bei derselben Qualität viel stärker als eine belebte Menschenmenge. Ein festes „100-KB“-Feld müsste raten. Stattdessen zeigt Ihnen CompressMyPic nach jeder Änderung die Live-Größe der komprimierten Datei, sodass Sie die Datei selbst mit voller Kontrolle über die Qualität auf 100 KB steuern können.',
  },
  {
    id: 'kb-faq-3',
    question: 'Welche Qualitätseinstellung ergibt etwa 100 KB?',
    answer: 'Das hängt vom Foto ab, aber bei einem typischen Handyfoto landen 50–70 % Qualität in der Regel nahe bei 100 KB. Ein einfaches Foto mit einheitlichen Farben kann 100 KB schon bei 70 % erreichen, während eine detailreiche Landschaft 40–50 % brauchen kann. Achten Sie auf die Live-Größe – diese Zahl ist die Wahrheit, nicht ein fester Prozentsatz.',
  },
  {
    id: 'kb-faq-4',
    question: 'Mein Foto liegt bei niedriger Qualität immer noch über 100 KB – was nun?',
    answer: 'Wechseln Sie zuerst das Ausgabeformat auf WebP, das in der Regel 25–35 % kleiner ist als JPG. Wenn es noch immer darüber liegt, senken Sie die Qualität etwas weiter und prüfen Sie den Vergleich – ein kleiner zusätzlicher Abstrich ist oft unsichtbar. Als letzten Ausweg braucht ein Foto mit sehr großen Abmessungen möglicherweise eine niedrigere Qualitätseinstellung als erwartet, weil mehr Pixel mehr Daten bedeuten.',
  },
  {
    id: 'kb-faq-5',
    question: 'Soll ich WebP verwenden, um 100 KB zu erreichen?',
    answer: 'Ja, wann immer Sie können. WebP ist der einfachste Weg, 100 KB zu erreichen, ohne die Qualität zu stark zu senken, da es bei derselben sichtbaren Qualität wie JPG eine kleinere Datei erzeugt. Verwenden Sie WebP für Website-Bilder und überall dort, wo moderne Browser genutzt werden; verwenden Sie JPG nur, wenn das Bild in älterer Software geöffnet oder über WhatsApp geteilt werden muss.',
  },
  {
    id: 'kb-faq-6',
    question: 'Macht das Verkleinern auf 100 KB das Foto unscharf?',
    answer: 'Nicht, wenn Sie es sorgfältig machen. Bei 100 KB sieht ein normales Handyfoto auf Bildschirmen weiterhin scharf aus, weil Bildschirme weit weniger Pixel zeigen, als die Kamera aufgenommen hat. Es sieht nur unscharf aus, wenn Sie die Qualität zu niedrig ansetzen (unter etwa 40 %) oder wenn das Foto groß ausgedruckt wird. Prüfen Sie vor dem Herunterladen immer den Vorher-Nachher-Vergleich.',
  },
  {
    id: 'kb-faq-7',
    question: 'Kann ich ein PNG auf 100 KB verkleinern?',
    answer: 'Ja, aber PNG-Fotos sind von Anfang an groß, sodass es mehr Arbeit braucht. Laden Sie das PNG hoch, senken Sie den Qualitätsregler und wechseln Sie die Ausgabe auf WebP oder JPG – allein das schneidet die Größe oft um mehr als die Hälfte. Behalten Sie die PNG-Ausgabe nur, wenn das Bild Transparenz braucht, und akzeptieren Sie, dass ein transparentes PNG 100 KB möglicherweise nicht erreicht.',
  },
  {
    id: 'kb-faq-8',
    question: 'Wie verkleinere ich die Bildgröße auf 200 KB?',
    answer: 'Verwenden Sie dieselbe Methode: Laden Sie das Bild hoch, beginnen Sie mit der Voreinstellung „Ausgewogen“ und senken Sie den Qualitätsregler, während Sie die Live-Größe beobachten, bis sie nahe bei 200 KB liegt. Die meisten Fotos erreichen 200 KB problemlos bei 70–80 % Qualität, sodass Sie in der Regel gar nicht niedrig gehen müssen.',
  },
  {
    id: 'kb-faq-9',
    question: 'Wie verkleinere ich die Bildgröße auf 50 KB?',
    answer: 'Laden Sie das Bild hoch, wechseln Sie das Ausgabeformat auf WebP und senken Sie den Qualitätsregler schrittweise, bis die Live-Größe nahe bei 50 KB liegt – bei einem Foto in der Regel etwa 40–55 % Qualität. Prüfen Sie den Vergleich genau, denn bei 50 KB beginnen feine Details zu leiden; es eignet sich für Vorschaubilder und Chats, weniger für Fotos, die Sie behalten möchten.',
  },
  {
    id: 'kb-faq-10',
    question: 'Wie verkleinere ich die Bildgröße auf 20 KB?',
    answer: 'Verwenden Sie die WebP-Ausgabe und eine niedrige Qualitätseinstellung, in der Regel 25–40 %, und beobachten Sie die Live-Größe. 20 KB ist sehr klein, also rechnen Sie mit sichtbarer Weichzeichnung – es eignet sich für Symbole, Vorschaubilder und winzige Vorschau-Bilder, nicht für Fotos mit Gesichtern. Wenn das Bild 20 KB weiterhin nicht erreicht, hat es wahrscheinlich zu viele Details für eine so winzige Datei.',
  },
  {
    id: 'kb-faq-11',
    question: 'Was ist eine gute Dateigröße für Website-Bilder?',
    answer: 'Streben Sie unter 100 KB pro Bild für normale Inhaltsfotos und unter 200 KB für große Hero-Bilder an. Kleine Dateien lassen Seiten schneller laden, was Besucher bemerken und Google belohnt. Verwenden Sie das WebP-Format und die Voreinstellung „Ausgewogen“ als Ausgangspunkt für Website-Bilder.',
  },
  {
    id: 'kb-faq-12',
    question: 'Wie hoch ist das Größenlimit für E-Mail-Anhänge?',
    answer: 'Die meisten E-Mail-Anbieter erlauben 20–25 MB pro Nachricht insgesamt, einschließlich aller Anhänge – Gmail erlaubt 25 MB. Ein einzelnes Foto, das auf 100 KB verkleinert wurde, ist niemals ein Problem; selbst zehn Fotos zu je 100 KB sind nur 1 MB. Erst das vorherige Komprimieren macht das Senden mehrerer Fotos per E-Mail mühelos.',
  },
  {
    id: 'kb-faq-13',
    question: 'Kann ich mehrere Bilder gleichzeitig auf 100 KB verkleinern?',
    answer: 'Ja. Laden Sie alle Bilder gemeinsam hoch, wenden Sie dieselbe Voreinstellung und Qualität auf alle an und prüfen Sie die Live-Größe jedes einzelnen. Wenn ein Bild noch über 100 KB liegt, passen Sie dieses einzeln an und laden Sie dann alles zusammen mit der Schaltfläche „Alle herunterladen (ZIP)“ herunter.',
  },
  {
    id: 'kb-faq-14',
    question: 'Verändert das Tool die Abmessungen meines Bildes?',
    answer: 'Nein. CompressMyPic behält die Abmessungen Ihres Bildes exakt bei – nur die Dateigröße wird reduziert. Ihr Foto behält dieselbe Breite, Höhe und dasselbe Seitenverhältnis wie das Original, sodass ein 4000×3000-Foto 4000×3000 bleibt, nur mit einer deutlich kleineren Datei.',
  },
  {
    id: 'kb-faq-15',
    question: 'Wie prüfe ich die Größe meines komprimierten Bildes?',
    answer: 'CompressMyPic zeigt für jedes Bild live die Originalgröße und die komprimierte Größe direkt unter jedem Foto an – zum Beispiel „4,2 MB → 98 KB“. Sie können die heruntergeladene Datei auch auf Ihrem Gerät prüfen: Schauen Sie sich auf einem Handy die Dateidetails in Ihrer Galerie oder Ihrem Dateimanager an.',
  },
  {
    id: 'kb-faq-16',
    question: 'Reichen 100 KB an Qualität für eine Website aus?',
    answer: 'Ja, für fast jeden Web-Einsatz. Website-Fotos werden nur wenige hundert Pixel breit angezeigt, sodass ein 100-KB-Bild auf dem Bildschirm scharf aussieht. Nur Vollbild-Hero-Bilder oder Fotos, die zum Drucken bestimmt sind, brauchen größere Dateien. Komprimieren Sie auf 100 KB, prüfen Sie den Vergleich, und Sie werden sehen, dass die Qualität hält.',
  },
  {
    id: 'kb-faq-17',
    question: 'Kann ich einen Screenshot auf 100 KB verkleinern?',
    answer: 'Ja, und Screenshots sind der einfachste Fall. Sie haben große Flächen mit einheitlicher Farbe, sodass sie sich extrem gut komprimieren lassen – ein Screenshot, der mit 1 MB beginnt, fällt mit der Voreinstellung „Ausgewogen“ oft unter 100 KB. Probieren Sie die WebP-Ausgabe für das kleinste Ergebnis.',
  },
  {
    id: 'kb-faq-18',
    question: 'Werden meine Bilder beim Komprimieren irgendwo hochgeladen?',
    answer: 'Nein. Die gesamte Komprimierung findet in Ihrem eigenen Browser auf Ihrem Gerät statt, sodass Ihre Bilder niemals auf einen Server hochgeladen, gespeichert oder von jemand anderem angesehen werden. Sie bleiben im Speicher Ihres Browsers und werden gelöscht, wenn Sie den Tab schließen oder neu laden.',
  },
  {
    id: 'kb-faq-19',
    question: 'Gibt es ein Limit dafür, wie viele Bilder ich verkleinern kann?',
    answer: 'Nein. Es gibt kein Limit für die Anzahl der Bilder, die Sie komprimieren können, und kein Konto oder keine Anmeldung ist nötig. Das einzige Limit ist 20 MB pro Bild, was hochauflösende Kamerafotos und große Screenshots abdeckt.',
  },
  {
    id: 'kb-faq-20',
    question: 'Ist es kostenlos, Bilder auf 100 KB zu verkleinern?',
    answer: 'Ja, völlig kostenlos. Es gibt keine Gebühren, keine kostenpflichtigen Tarife, keine Guthaben und kein Wasserzeichen auf Ihren komprimierten Bildern. Öffnen Sie die Website, verkleinern Sie Ihre Bilder auf 100 KB und laden Sie sie so oft herunter, wie Sie möchten.',
  },
];

export const Guide100kbPageDe: React.FC<Guide100kbPageDeProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = 'Bild auf 100 KB verkleinern für Web & E-Mail';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Bild auf 100 KB verkleinern für Websites und E-Mails mit einem kostenlosen Online-Komprimierer. Schritt-für-Schritt-Anleitung – ohne Anmeldung, ohne Wasserzeichen, Bilder bleiben auf Ihrem Gerät.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/de/anleitungen/bild-auf-100-kb-verkleinern';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Bild auf 100 KB verkleinern für Websites und E-Mails',
          description: 'Nutzen Sie den Qualitätsregler und die WebP-Ausgabe in CompressMyPic, um ein Bild auf etwa 100 KB zu verkleinern.',
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
    script.id = 'guide-100kb-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-100kb-jsonld');
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
            Bild auf 100 KB verkleinern für Websites und E-Mails
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            Ein 4-MB-Foto verlangsamt Ihre Website und verstopft eine E-Mail. Wenn Sie es auf etwa 100 KB verkleinern, laden Seiten schnell und E-Mails werden sofort gesendet – und wenn Sie es richtig machen, kann niemand den Unterschied erkennen.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              <span>Warum 100 KB die magische Zahl ist</span>
            </h2>
            <p>
              100 KB ist die Größe, die die meisten Menschen anstreben, weil sie genau im optimalen Bereich liegt: klein genug, um auf einer Website sofort zu laden oder in jede E-Mail zu passen, aber groß genug, um auf einem Bildschirm weiterhin scharf auszusehen. Ein typisches Handyfoto beginnt bei 3–5 MB, sodass das Erreichen von 100 KB bedeutet, etwa 97 % der Datei wegzuschneiden – und moderne Komprimierung tut das hauptsächlich, indem sie Daten entfernt, die Ihre Augen nicht sehen können.
            </p>
            <p>
              Ein ehrlicher Hinweis, bevor Sie beginnen: CompressMyPic hat kein Feld, in das Sie „100 KB“ eintippen und genau diese Größe erhalten. Kein ehrliches Tool kann eine exakte Zahl versprechen, da sich jedes Foto anders komprimieren lässt. Stattdessen zeigt Ihnen das Tool nach jeder Änderung die Live-Größe der komprimierten Datei, und Sie steuern sie selbst mit dem Qualitätsregler auf 100 KB. Diese Anleitung zeigt Ihnen genau, wie das geht.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Gauge className="w-5 h-5 text-blue-600" />
              <span>Schritt für Schritt: Bild auf 100 KB verkleinern</span>
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
              src="/guides/reduce-image-size-to-100kb-1.png"
              alt="Screenshot: Großes Foto bei CompressMyPic hochladen, um es auf 100 KB zu verkleinern"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Laden Sie Ihr Foto hoch – die Originalgröße wird sofort angezeigt, sodass Sie wissen, wie weit Sie gehen müssen.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span>Gängige Ziele auf einen Blick</span>
            </h2>
            <p>
              100 KB ist nicht das einzige Ziel, das Menschen brauchen. Dieselbe Methode funktioniert für jede Größe – hier sehen Sie, was Sie jeweils erwarten können:
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 text-left">
                    <th className="px-4 py-3 font-bold">Ziel</th>
                    <th className="px-4 py-3 font-bold">Typische Qualität</th>
                    <th className="px-4 py-3 font-bold">Gut für</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">200 KB</td>
                    <td className="px-4 py-3">70–80 %</td>
                    <td className="px-4 py-3">Blogfotos, große Webbilder</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">100 KB</td>
                    <td className="px-4 py-3">50–70 %</td>
                    <td className="px-4 py-3">Website-Fotos, E-Mail-Anhänge</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">50 KB</td>
                    <td className="px-4 py-3">40–55 % + WebP</td>
                    <td className="px-4 py-3">Vorschaubilder, Chat, schnelle Seiten</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">20 KB</td>
                    <td className="px-4 py-3">25–40 % + WebP</td>
                    <td className="px-4 py-3">Symbole, winzige Vorschauen</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              Dies sind Ausgangspunkte, keine Versprechen. Ein einfaches Foto erreicht 100 KB problemlos; ein belebtes, detailreiches Foto braucht eine niedrigere Qualitätseinstellung. Vertrauen Sie der Live-Größe, nicht dem Prozentsatz.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>Tipps für Websites und E-Mails</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Verwenden Sie für Websites die WebP-Ausgabe – das ist der schnellste Weg, 100 KB zu erreichen, und jeder moderne Browser unterstützt es.</li>
              <li>Verwenden Sie für E-Mails JPG, das sicherste Format, da jede E-Mail-App es öffnet. Ein 100-KB-JPG hängt sich sofort an und wird wegen der Größe niemals abgewiesen.</li>
              <li>Komprimieren Sie alle Fotos für eine Seite oder eine E-Mail gemeinsam und laden Sie sie dann alle mit der Schaltfläche „Alle herunterladen (ZIP)“ herunter.</li>
              <li>Jagen Sie nicht einem exakten Wert von 100 KB hinterher. Ein scharfes Foto mit 115 KB ist besser als ein unscharfes mit genau 100 KB – der Unterschied bei der Ladezeit ist vernachlässigbar.</li>
              <li>Prüfen Sie vor dem Veröffentlichen oder Senden des Fotos immer den Vorher-Nachher-Vergleich in voller Vergrößerung.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.png"
              alt="Screenshot: Live-Anzeige der Vorher-Nachher-Dateigröße, die zeigt, dass ein Bild auf etwa 100 KB verkleinert wurde"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Die Live-Anzeige der Vorher-Nachher-Größe zeigt Ihren Fortschritt – senken Sie den Regler, bis die komprimierte Größe nahe bei 100 KB liegt.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Wenn 100 KB nicht möglich sind</span>
            </h2>
            <p>
              Manche Bilder können 100 KB einfach nicht erreichen, ohne schlecht auszusehen: ein sehr großes, sehr detailreiches Foto oder ein PNG mit Transparenz, das PNG bleiben muss. In diesem Fall erzwingen Sie es nicht. Ein scharfes 180-KB-Foto ist jedes Mal besser als ein ruiniertes 100-KB-Foto – für eine Website lädt es weiterhin schnell, und für E-Mails liegt es weiterhin weit unter jedem Anhangslimit. Das Ziel ist eine kleine Datei, die weiterhin gut aussieht, nicht eine magische Zahl.
            </p>
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
                onClick={() => onNavigate('/de/anleitungen/bilder-fuer-whatsapp-komprimieren')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">Bilder für WhatsApp komprimieren ohne Qualitätsverlust</div>
                <p className="text-xs text-slate-600 mt-1">Verkleinern Sie Fotos zuerst selbst und senden Sie sie dann als Dokumente, damit WhatsApp sie nicht unscharf machen kann.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/de/anleitungen/jpg-vs-png-vs-webp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">JPG vs PNG vs WebP – welches Format sollten Sie verwenden?</div>
                <p className="text-xs text-slate-600 mt-1">Dateigröße, Qualität und Transparenz im Vergleich, damit Sie jedes Mal das richtige Format wählen.</p>
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
              onClick={() => onNavigate('/de/anleitungen/jpg-vs-png-vs-webp')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              JPG vs PNG vs WebP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
