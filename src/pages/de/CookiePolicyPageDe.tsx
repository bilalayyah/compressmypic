import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageDeProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPageDe: React.FC<CookiePolicyPageDeProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Cookie-Richtlinie | CompressMyPic – Wie Cookies verwendet werden';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zum Bildkomprimierer</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Cookie-Richtlinie
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Zuletzt aktualisiert: 18. November 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Was sind Cookies?
            </h2>
            <p>
              Cookies sind kleine Textdateien, die eine Website Ihren Browser bittet, auf Ihrem Gerät zu speichern. Sie können Informationen über Ihren Besuch speichern — zum Beispiel, ob Sie eine Meldung schon einmal gesehen haben — damit die Website oder ein Dienst Ihren Browser bei einem späteren Besuch wiedererkennen kann. Diese Richtlinie erklärt, welche Cookies auf CompressMyPic verwendet werden, warum sie verwendet werden und wie Sie sie steuern können.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Cookies, die wir nicht setzen
            </h2>
            <p>
              CompressMyPic selbst setzt keine Cookies. Unsere Bild-Tools laufen vollständig in Ihrem Browser: Die Komprimierung benötigt kein Konto, keine Anmeldung und kein Cookie. Wir setzen kein Cookie, um Sie wiederzuerkennen, zu verfolgen oder Ihre Einstellungen zu speichern. Ihre Bilder verlassen Ihren Browser nie, und nichts über sie wird in einem Cookie gespeichert.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Werbe-Cookies
            </h2>
            <p>
              CompressMyPic zeigt derzeit keine Werbung und setzt keine Werbe-Cookies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Cookies von Google Analytics 4
            </h2>
            <p>
              Wir verwenden Google Analytics 4 (GA4), um in zusammengefasster Form zu verstehen, wie die Website genutzt wird — zum Beispiel, welche Tools beliebt sind und welche Seiten besucht werden. GA4 kann Cookies auf Ihrem Gerät setzen, etwa _ga, um einen Besuch vom anderen zu unterscheiden. Die Daten sind anonymisiert und werden nur in zusammengefasster Form verwendet; wir nutzen GA4 nicht, um Sie persönlich zu identifizieren. Sie können Google Analytics jederzeit ablehnen, indem Sie das Google Analytics Opt-out-Add-on installieren (https://tools.google.com/dlpage/gaoptout) oder Cookies in Ihren Browser-Einstellungen deaktivieren.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Einwilligung (EWR, Vereinigtes Königreich und Schweiz)
            </h2>
            <p>
              Da diese Website derzeit keine Werbung zeigt, wird keine Einwilligungsmeldung zur Werbung angezeigt und keine Einwilligung zur Werbung eingeholt. Nutzungsstatistiken werden mit Google Analytics erfasst; Analytics-Cookies können Sie über Ihre Browser-Einstellungen blockieren (siehe Abschnitt 8).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Andere Drittanbieter-Dienste
            </h2>
            <p>
              Einige andere Dienste auf dieser Website können eigene Cookies oder ähnliche Speicher verwenden. Google reCAPTCHA, das unser Kontaktformular vor Spam schützt, kann Cookies setzen, um Menschen von Bots zu unterscheiden; seine Nutzung unterliegt der 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Datenschutzerklärung von Google</a>
               und den 
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Nutzungsbedingungen von Google</a>
               von Google. Cloudflare, das diese Website hostet, kann ein Sicherheits-Cookie setzen, um die Website vor Missbrauch zu schützen. Die anonymen Kommentare unter unseren Tools fragen nur nach einem Namen, der vom Kommentardienst gespeichert wird — nicht in einem Cookie dieser Website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Browser-Speicher, der kein Cookie ist
            </h2>
            <p>
              Ihr Browser speichert außerdem eine kleine Menge lokaler Informationen, die kein Cookie sind. Wenn Sie einen Kommentar posten, kann Ihr Browser den eingegebenen Namen speichern, damit Sie ihn nicht erneut eingeben müssen, und wenn Sie die Sprache der Website wechseln, kann Ihr Browser diese Wahl für Ihren nächsten Besuch speichern. Diese Informationen bleiben auf Ihrem eigenen Gerät, werden niemals an unsere Server gesendet, und Sie können sie jederzeit löschen, indem Sie die Website-Daten in Ihrem Browser löschen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Wie Sie Cookies steuern
            </h2>
            <p>
              Sie können bereits auf Ihrem Gerät gespeicherte Cookies löschen und das Setzen von Cookies für die Zukunft in Ihren Browser-Einstellungen blockieren — alle großen Browser (Chrome, Firefox, Safari, Edge) bieten dies in ihren Datenschutz- oder Sicherheitseinstellungen an. Das Blockieren aller Cookies beeinträchtigt unsere Bild-Tools nicht, da sie nicht auf Cookies angewiesen sind, kann aber Funktionen von Drittanbieter-Diensten wie Analysen beeinträchtigen. Sie können auch den privaten oder Inkognito-Modus Ihres Browsers verwenden, der Cookies beim Schließen des Fensters löscht.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Änderungen dieser Richtlinie
            </h2>
            <p>
              Wir können diese Richtlinie aktualisieren, wenn sich die Website ändert — zum Beispiel, wenn wir einen neuen Werbepartner oder Analysedienst hinzufügen. In diesem Fall ändern wir das Datum „Zuletzt aktualisiert“ oben auf dieser Seite. Wenn Sie die Website nach einer Änderung weiter nutzen, akzeptieren Sie die aktualisierte Richtlinie.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Kontakt
            </h2>
            <p>
              Wenn Sie Fragen zu dieser Richtlinie haben, kontaktieren Sie uns unter 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
               oder lesen Sie unsere 
              <a href="/de/datenschutz" onClick={(e) => { e.preventDefault(); onNavigate('/de/datenschutz'); }} className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">Datenschutzerklärung</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
