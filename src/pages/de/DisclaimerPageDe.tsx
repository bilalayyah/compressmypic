import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageDeProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPageDe: React.FC<DisclaimerPageDeProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Haftungsausschluss | CompressMyPic – Kostenlose Bild-Tools';
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
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Haftungsausschluss
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Zuletzt aktualisiert: 18. November 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Allgemeine Informationen
            </h2>
            <p>
              CompressMyPic ist ein kostenloser Online-Dienst zur Bildkomprimierung und Bildbearbeitung. Die Tools, Anleitungen und Artikel auf dieser Website dienen ausschließlich der allgemeinen Information und praktischen Nutzung. Sie stellen keine professionelle Beratung dar — weder rechtlich, medizinisch, finanziell noch technisch — und begründen keine professionelle Beziehung zwischen Ihnen und CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Keine Gewährleistung
            </h2>
            <p>
              Der Dienst wird „wie besehen“ und „wie verfügbar“ bereitgestellt, ohne Gewährleistungen jeglicher Art, weder ausdrücklich noch stillschweigend. Wir gewährleisten nicht, dass die Tools immer verfügbar, ununterbrochen, fehlerfrei oder frei von schädlichen Bestandteilen sind, oder dass ein bestimmtes Bild auf eine bestimmte Größe oder Qualität komprimiert wird. Die Ergebnisse hängen vom Originalbild, seinem Format und Ihrem Browser ab — bewahren Sie daher immer eine Kopie Ihrer Originaldateien auf, bevor Sie ein Tool verwenden.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Genauigkeit der Inhalte
            </h2>
            <p>
              Wir bemühen uns, unsere Anleitungen, Artikel und Tool-Beschreibungen korrekt und aktuell zu halten, aber Bildformate, Browser und Webstandards ändern sich im Laufe der Zeit. Informationen auf dieser Website können trotz unserer Bemühungen veraltet sein oder Fehler enthalten. Prüfen Sie wichtige Details — etwa Größenlimits einer Plattform — immer in der aktuellen Dokumentation der jeweiligen Plattform, bevor Sie sich darauf verlassen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Ihre Dateien liegen in Ihrer Verantwortung
            </h2>
            <p>
              Bilder werden lokal in Ihrem Browser verarbeitet und niemals auf unsere Server hochgeladen. Das bedeutet auch, dass wir keine Datei für Sie wiederherstellen können: Wenn Sie beim Verwenden unserer Tools ein Originalbild überschreiben, löschen oder verlieren, können wir es nicht zurückholen. Bewahren Sie Sicherungskopien aller wichtigen Bilder auf und verarbeiten Sie nur Kopien von Dateien, die Ihnen gehören oder die Sie bearbeiten dürfen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Drittanbieter-Dienste und Links
            </h2>
            <p>
              Diese Website nutzt Dienste von Drittanbietern — Google AdSense für Werbung, Google Analytics 4 für Nutzungsstatistiken, FormSubmit für das Kontaktformular und einen Cloudflare Worker für anonyme Kommentare — und verlinkt auf externe Websites. Wir kontrollieren diese Dienste und Websites nicht und sind nicht verantwortlich für deren Inhalte, Verfügbarkeit, Datenschutzpraktiken oder Genauigkeit. Bei deren Nutzung gelten deren eigene Bedingungen und Datenschutzerklärungen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Werbung
            </h2>
            <p>
              Die auf dieser Website angezeigten Anzeigen werden von Google AdSense und seinen Partnern ausgeliefert. Wir befürworten, garantieren oder verantworten kein Produkt, keinen Dienst und keine Aussage in einer Anzeige. Jeder Kauf oder jede Entscheidung auf Grundlage einer Anzeige erfolgt vollständig auf Ihr eigenes Risiko; prüfen Sie Werbetreibende selbst, bevor Sie etwas kaufen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Haftungsbeschränkung
            </h2>
            <p>
              Soweit gesetzlich zulässig, haften CompressMyPic und sein Betreiber nicht für direkte, indirekte, zufällige oder Folgeschäden, die aus Ihrer Nutzung — oder Ihrer Unfähigkeit zur Nutzung — dieser Website oder ihrer Tools entstehen, einschließlich, aber nicht beschränkt auf, verlorene Dateien, Daten oder Gewinne. Ihr einziges Rechtsmittel bei Unzufriedenheit mit dem Dienst besteht darin, ihn nicht mehr zu nutzen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Nutzerkommentare
            </h2>
            <p>
              Kommentare unter unseren Tools werden von Besuchern verfasst und geben deren eigene Meinung wieder, nicht unsere. Wir moderieren Kommentare und können Spam, beleidigende oder themenfremde Inhalte entfernen, befürworten aber den Inhalt von Nutzerkommentaren nicht und übernehmen dafür keine Verantwortung. Teilen Sie in einem Kommentar niemals Passwörter, Zahlungsdaten oder sensible persönliche Informationen.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Kontakt
            </h2>
            <p>
              Wenn Sie Fragen zu diesem Haftungsausschluss haben, kontaktieren Sie uns unter 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
