import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageDeProps {
  onNavigate: (path: string) => void;
}

export const AboutPageDe: React.FC<AboutPageDeProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Über CompressMyPic – Kostenloser Online-Bildkomprimierer';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Über CompressMyPic – ein kostenloser Online-Bildkomprimierer für JPG, PNG und WebP. Bilder online kostenlos komprimieren, ohne Anmeldung, ohne Wasserzeichen und ohne Server-Upload.');
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zum Bildkomprimierer</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            Über CompressMyPic
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            CompressMyPic ist ein kostenloser, privater Bildkomprimierer. Komprimieren Sie JPG-, PNG- und WebP-Bilder direkt in Ihrem Browser – schnell, sicher und ohne dass Ihre Dateien irgendwo hochgeladen werden.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Was ist CompressMyPic?</span>
            </h2>
            <p>
              CompressMyPic ist ein kostenloser Online-Bildkomprimierer und Bildoptimierer, mit dem Sie die Bildgröße reduzieren können, ohne Qualität zu verlieren. Es ist ein Fotokomprimierer und Fotoverkleinerer für die Formate, die man täglich verwendet: JPG, PNG und WebP. Nutzen Sie ihn, um JPG auf 100 KB zu komprimieren, PNG kostenlos online zu komprimieren, WebP-Bilder zu komprimieren oder eine Fotodatei vor dem Teilen über WhatsApp, Instagram, Facebook oder E-Mail zu verkleinern.
            </p>
            <p>
              Herkömmliche Websites zur Bildkomprimierung laden Ihre sensiblen privaten Fotos oder Unternehmensgrafiken auf einen Server hoch, der jemand anderem gehört. Diese Praxis wirft berechtigte Bedenken auf – genau deshalb haben wir CompressMyPic genau umgekehrt aufgebaut: als ein Tool, das alles auf Ihrem eigenen Gerät erledigt.
            </p>
            <p>
              Wenn Sie ein Bild auswählen oder per Drag-and-Drop ablegen, reserviert Ihr Browser einen temporären Speicherpuffer, zeichnet das Bild auf ein HTML-Canvas-Element, wendet den Komprimierungsalgorithmus an und exportiert dann die neue Datei – alles in Ihrem eigenen Browser-Tab. An der Komprimierung Ihrer Bilder sind keine Netzwerkinfrastruktur, Datenbanken oder Cloud-Server beteiligt.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Unterstützte Formate: JPG, PNG und WebP</span>
            </h2>
            <p>
              Als JPG-Komprimierer lässt CompressMyPic Sie JPG kostenlos online komprimieren und die JPEG-Dateigröße reduzieren, während Ihre Fotos scharf bleiben – probieren Sie die Voreinstellung „Ausgewogen“ oder senken Sie den Qualitätsregler und beobachten Sie die Live-Anzeige der Vorher-Nachher-Größe, um Ziele wie 100 KB oder 200 KB zu erreichen. Als PNG-Komprimierer lässt er Sie PNG kostenlos online komprimieren und dabei die Transparenz für Logos und Grafiken erhalten. Und wenn Sie WebP-Bilder komprimieren, erhalten Sie die kleinsten Dateien von allen: WebP ist bei ähnlicher Qualität in der Regel 25–35 % kleiner als JPEG, was es zur besten Wahl macht, um Bilder für Webseiten zu optimieren.
            </p>
            <p>
              Sie können das ursprüngliche Format jedes Bildes beibehalten oder zwischen JPG, PNG und WebP konvertieren. Der Qualitätsregler (10 % bis 100 %), die Voreinstellungen „Niedrig“, „Ausgewogen“ und „Hoch“ sowie die Live-Anzeige der Vorher-Nachher-Größe geben Ihnen die volle Kontrolle über das Verhältnis zwischen Dateigröße und Bildqualität – ohne dass ein Eingabefeld für eine exakte Zielgröße in KB behauptet wird, das das Tool nicht besitzt.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Unsere Grundprinzipien</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Absolute Privatsphäre</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Keine Datei berührt jemals einen externen Server oder eine Datenbank. Ihre Fotos und sensiblen Grafiken bleiben strikt auf Ihrem lokalen Gerät. Da die Komprimierung clientseitig erfolgt, wird Ihre Arbeit von niemand anderem gesehen.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Einfach und kostenlos</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Keine Softwareinstallation, keine kostenpflichtigen Tarife, keine versteckten Gebühren, keine Kontoerstellung, keine E-Mail-Verifizierung und keine Testlimits. Bilder online kostenlos komprimieren – es ist wirklich kostenlos, ohne Anmeldung und ohne Wasserzeichen auf Ihren komprimierten Bildern.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Qualität, die Sie steuern</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Wir bieten eine fein abgestufte Steuerung: Ziehen Sie den Qualitätsregler in Echtzeit, wählen Sie eine der Voreinstellungen „Niedrig“, „Ausgewogen“ oder „Hoch“, wählen Sie das Ausgabe-Dateiformat und vergleichen Sie jedes Bild im direkten Vergleich, um Unterschiede sofort zu erkennen. Reduzieren Sie die Bildgröße, ohne Qualität zu verlieren – zu Ihren Bedingungen.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-9 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Stapel-Bildkomprimierer</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Komprimieren Sie mehrere Bilder gleichzeitig mit denselben Einstellungen und laden Sie sie alle zusammen mit der Schaltfläche „Alle herunterladen (ZIP)“ herunter – ein Stapel-Bildkomprimierer für Fotobibliotheken, Produktkataloge und Website-Bildordner.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-10 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Automatische Sicherheitsprüfungen</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Der Komprimierer erkennt Transparenz in Ihren Bildern. Wenn Sie JPEG als Ausgabe für ein transparentes PNG wählen, zeigen wir eine Warnung an, da JPEG keine Transparenz unterstützt – so verlieren Sie Ihren Alphakanal nie versehentlich.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-12 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Schnelle Leistung</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Da die gesamte Verarbeitung lokal auf Ihrem Gerät stattfindet, müssen Sie nicht warten, bis Dateien zu einem Server hoch- und wieder heruntergeladen werden. Sie können Fotos schnell komprimieren, selbst große Dateien bis zu 20 MB pro Bild, auf dem Desktop oder auf dem Handy.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Für wen ist CompressMyPic?</span>
            </h2>
            <p>
              CompressMyPic ist für alle, die kleinere Bilder brauchen: Blogger und Website-Betreiber, die Bilder für das Web optimieren und die Bildgröße für Webseiten reduzieren möchten; Fotografen, die die Fotodateigröße vor dem Teilen oder der Übergabe von Abzügen reduzieren müssen; Online-Händler, die ein Foto für eine Website oder ein Shop-Angebot komprimieren; Studierende und Büroangestellte, die Bilder für einen E-Mail-Anhang komprimieren; und alle, die ein Bild für WhatsApp, Instagram oder Facebook komprimieren möchten, damit es schneller gesendet wird und weniger mobile Daten verbraucht.
            </p>
            <p>
              Es funktioniert in Desktop- und mobilen Browsern, braucht keine Installation und verlangt nie eine Anmeldung – öffnen Sie einfach die Website, laden Sie Ihre Bilder hoch und laden Sie die kleineren Dateien herunter.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Datenschutz &amp; Sicherheit</span>
            </h2>
            <p>
              Bei CompressMyPic glauben wir, dass Privatsphäre ein grundlegendes Recht ist und keine optionale Funktion. Heutzutage sammeln viele Websites standardmäßig Daten, selbst ein Bildkomprimierer. Wir verfolgen einen Privacy-first-Ansatz und stützen uns auf moderne Browsertechnologie, um Ihre Medien lokal auf Ihrem Computer zu verarbeiten.
            </p>
            <p>
              Ihre Dateien bleiben im Speicher Ihres Browsers und werden sofort gelöscht, wenn Sie den Tab schließen oder die Seite neu laden. Da keine Bildverarbeitung auf externen Servern stattfindet, können wir keine Bilddaten sammeln, selbst wenn wir wollten. Das ist das Design und das Versprechen des Tools.
            </p>
            <p>
              Um genau zu erfahren, wie wir mit Datenschutz umgehen, besuchen Sie bitte unsere{' '}
              <button
                type="button"
                onClick={() => onNavigate('/de/datenschutz')}
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold cursor-pointer"
              >
                Datenschutzerklärung
              </button>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Unsere Mission</span>
            </h2>
            <p>
              Wir glauben, dass die besten Tools die einfachsten, schnellsten und transparentesten sind. Unsere Mission ist es, allen einen schnellen, zuverlässigen und völlig kostenlosen Bildkomprimierer bereitzustellen – ohne versteckte Kompromisse, ohne Werbung, die Sie verfolgt, ohne Server-Uploads und ohne Abstriche bei Ihrer Privatsphäre. Ob Sie ein einzelnes JPG oder einen ganzen Stapel WebP-Bilder komprimieren: Das Tool soll einfach funktionieren.
            </p>
            <p>
              Haben Sie eine Frage, eine Idee oder haben Sie etwas gefunden, das wir verbessern können? Wir freuen uns, von Ihnen zu hören. Sie können uns direkt über die Website erreichen.
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/de/')}
              className="flex-1 px-5 py-2.5 btn-purple-pill text-sm font-semibold shadow-sm cursor-pointer"
            >
              Jetzt Bilder komprimieren
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/de/kontakt')}
              className="flex-1 px-5 py-2.5 rounded-full bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:bg-[var(--surface-2)] transition-colors cursor-pointer"
            >
              Kontaktieren Sie uns
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
