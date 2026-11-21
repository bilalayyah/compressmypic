import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageDeProps {
  onNavigate: (path: string) => void;
}

export const TermsPageDe: React.FC<TermsPageDeProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Nutzungsbedingungen – CompressMyPic';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Nutzungsbedingungen von CompressMyPic: zulässige Nutzung, Urheberrecht an Ihren Bildern, Gewährleistungsausschluss und Kontakt.');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/de/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zum Bildkomprimierer</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-[#dc2626] dark:text-[#f87171]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Nutzungsbedingungen
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Zuletzt aktualisiert: 14. Nov. 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Annahme der Bedingungen
            </h2>
            <p>
              Durch den Zugriff auf CompressMyPic und dessen Nutzung erklären Sie sich damit einverstanden, diese Nutzungsbedingungen einzuhalten und an sie gebunden zu sein. Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, stellen Sie bitte die Nutzung des Dienstes ein.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Zulässige Nutzung
            </h2>
            <p>
              Sie dürfen CompressMyPic sowohl für private als auch für kommerzielle Bildoptimierung nutzen. Sie verpflichten sich, den Dienst nicht für rechtswidrige Aktivitäten zu verwenden oder in einer Weise, die den Betrieb, die Sicherheit oder die Verfügbarkeit der Website beeinträchtigen könnte.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Geistige Eigentumsrechte
            </h2>
            <p>
              Sie behalten zu 100 % das volle Urheberrecht, das Eigentum und alle geistigen Eigentumsrechte an allen Bildern, Fotos und Grafiken, die Sie mit unserem Tool komprimieren. CompressMyPic beansprucht keinerlei Eigentum, Lizenz oder Rechte an Ihren kreativen Werken. Die gesamte Verarbeitung erfolgt lokal auf Ihrem Gerät.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Gewährleistungsausschluss
            </h2>
            <p>
              CompressMyPic wird „wie besehen“ und „wie verfügbar“ ohne Gewährleistungen jeglicher Art bereitgestellt, weder ausdrücklich noch stillschweigend. Obwohl wir uns um maximale Kompatibilität und Leistung in allen Browsern bemühen, gewährleisten wir nicht, dass der Dienst ununterbrochen, fehlerfrei oder für bestimmte technische Anforderungen geeignet ist.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Verfügbarkeit und Änderungen des Dienstes
            </h2>
            <p>
              CompressMyPic ist ein kostenloser Dienst, und wir garantieren nicht, dass er jederzeit verfügbar ist. Wir können jedes Tool, jede Funktion oder die gesamte Website jederzeit ändern, aussetzen oder einstellen, mit oder ohne Ankündigung – zum Beispiel, um einen Fehler zu beheben, eine Technologie zu ersetzen, die in modernen Browsern nicht mehr funktioniert, oder um den Dienst kostenlos zu halten. Wir können auch angemessene Grenzen festlegen, etwa eine maximale Dateigröße pro Bild (derzeit 20 MB für den Hauptkomprimierer und 25 MB für die Formatkonverter), und diese Grenzen ändern, wenn Browser und Geräte besser werden. Da die gesamte Verarbeitung in Ihrem Browser stattfindet, gefährdet eine Unterbrechung der Website Ihre Originalbilder niemals: Ihre Dateien bleiben auf Ihrem Gerät.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Zulässige Nutzung
            </h2>
            <p>
              Sie verpflichten sich, CompressMyPic nur für rechtmäßige Zwecke und so zu nutzen, dass der Dienst oder andere Personen nicht geschädigt werden. Insbesondere dürfen Sie nicht versuchen, die Website zu überlasten, zu beschädigen oder zurückzuentwickeln, sie auf Sicherheitslücken zu prüfen, automatisierte Skripte zu verwenden, um eine große Zahl von Anfragen zu senden, oder den Dienst zu nutzen, um Bilder zu verarbeiten, die das Urheberrecht eines anderen verletzen, illegales Material enthalten oder der Täuschung oder Belästigung dienen sollen. Sie sind dafür verantwortlich, sicherzustellen, dass Sie das Recht haben, jedes Bild zu verwenden, das Sie verarbeiten, und eine Sicherungskopie jedes Bildes aufzubewahren, das Ihnen wichtig ist, bevor Sie es komprimieren oder konvertieren.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Haftungsbeschränkung
            </h2>
            <p>
              Soweit gesetzlich zulässig, haften CompressMyPic und sein Eigentümer nicht für indirekte, zufällige oder Folgeschäden, die sich aus Ihrer Nutzung des Dienstes ergeben – einschließlich, aber nicht beschränkt auf, Datenverlust, entgangenen Gewinn oder die Kosten für die Neuerstellung eines Bildes. Da der Dienst kostenlos ist, ist unsere Gesamthaftung für Ansprüche im Zusammenhang mit dem Dienst auf den Betrag begrenzt, den Sie für die Nutzung gezahlt haben, also null. Dies schränkt keine Haftung ein, die gesetzlich nicht eingeschränkt werden kann, wie etwa die Haftung für Betrug oder für Tod oder Personenschäden, die durch Fahrlässigkeit verursacht wurden.
            </p>
            <p>
              Komprimierung ist von Natur aus ein verlustbehafteter Prozess: Die Verkleinerung einer Datei kann ihre Qualität mindern, und einige Formate wie JPEG können keine Transparenz bewahren. Sie sind dafür verantwortlich, das komprimierte Ergebnis zu prüfen, bevor Sie eine Originaldatei löschen oder überschreiben, und wir haften nicht für Qualitätsverluste, fehlende Transparenz oder andere Veränderungen, die die Komprimierung an einem Bild vornimmt, das Sie verarbeiten wollten.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Dienste Dritter
            </h2>
            <p>
              Die Website nutzt Dienste Dritter für ihren Betrieb, darunter Hosting und Content Delivery über Cloudflare und Nachrichtenübermittlung über FormSubmit. Diese Dienste haben eigene Bedingungen und Datenschutzerklärungen, und Ihre Nutzung dieser Dienste unterliegt sowohl diesen Dokumenten als auch diesen Bedingungen. Wir sind nicht verantwortlich für die Verfügbarkeit, den Inhalt oder die Praktiken von Websites oder Diensten Dritter, auf die CompressMyPic verlinkt.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Anwendbares Recht
            </h2>
            <p>
              Diese Bedingungen unterliegen den Gesetzen der Vereinigten Arabischen Emirate, von wo aus die Website betrieben wird, ohne Berücksichtigung ihrer Kollisionsnormen. Streitigkeiten, die sich aus diesen Bedingungen oder Ihrer Nutzung des Dienstes ergeben oder damit zusammenhängen, werden von den Gerichten der Vereinigten Arabischen Emirate entschieden. Sollte ein Teil dieser Bedingungen undurchsetzbar sein, bleiben die übrigen Teile in vollem Umfang anwendbar.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Änderungen dieser Bedingungen
            </h2>
            <p>
              Wir können diese Bedingungen aktualisieren, wenn sich der Dienst ändert – zum Beispiel, wenn wir neue Tools hinzufügen, Dateigrößenlimits ändern oder einen neuen Drittanbieterdienst nutzen. In diesem Fall aktualisieren wir das Datum „Zuletzt aktualisiert" oben auf dieser Seite. Wenn Sie CompressMyPic nach der Änderung der Bedingungen weiterhin nutzen, akzeptieren Sie die aktualisierten Bedingungen. Wenn Sie mit einer Änderung nicht einverstanden sind, stellen Sie bitte die Nutzung des Dienstes ein.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Kontakt
            </h2>
            <p>
              Wenn Sie Fragen zu diesen Bedingungen haben, wenden Sie sich bitte an uns unter{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
