import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageDeProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageDe: React.FC<PrivacyPageDeProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Datenschutzerklärung – CompressMyPic';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Datenschutzerklärung von CompressMyPic: Bilder werden lokal in Ihrem Browser verarbeitet und niemals hochgeladen. Keine Konten, keine Bilderspeicherung – nur die wesentlichen Hinweise zu Werbung und Kontakt.');
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zum Bildkomprimierer</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-emerald-600" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Datenschutzerklärung
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Zuletzt aktualisiert: 12. Nov. 2026
          </p>
        </div>

        {/* Exakter Text der Datenschutzerklärung */}
        <div className="space-y-6 text-base text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              1. Clientseitige Bildverarbeitung
            </h2>
            <p>
              CompressMyPic ist ein kostenloser Online-Bildkomprimierer. Bilder werden lokal in Ihrem Browser mit HTML5 Canvas verarbeitet – sie werden niemals auf unsere Server hochgeladen, und wir erfassen, speichern oder teilen Ihre Bilder nicht. Wenn Sie Ihren Browser-Tab schließen oder neu laden, werden alle temporären Objekte im Arbeitsspeicher gelöscht.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              2. Keine Erhebung personenbezogener Daten
            </h2>
            <p>
              Wir verlangen kein Konto, kein Passwort, keine E-Mail-Adresse und keine Telefonnummer, um das Komprimierungstool zu nutzen. Kontaktinformationen, die Sie freiwillig über unser Kontaktformular übermitteln, werden ausschließlich verwendet, um auf Ihre konkrete Anfrage zu antworten.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              3. Werbung (Google AdSense)
            </h2>
            <p>
              Wir verwenden Google AdSense, um Werbung anzuzeigen, sobald es aktiviert ist. Drittanbieter, einschließlich Google, verwenden Cookies, um Anzeigen auf der Grundlage früherer Besuche eines Nutzers auf dieser Website oder auf anderen Websites zu schalten. Die Verwendung von Werbe-Cookies durch Google ermöglicht es Google und seinen Partnern, Ihnen Anzeigen auf der Grundlage Ihres Besuchs auf dieser Website und/oder auf anderen Websites im Internet zu zeigen. Sie können personalisierte Werbung deaktivieren, indem Sie die Google-Anzeigeneinstellungen (
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://adssettings.google.com
              </a>
              ) oder{' '}
              <a
                href="http://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                http://www.aboutads.info/choices/
              </a>
              {' '}besuchen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              4. Analyse
            </h2>
            <p>
              Wir verwenden derzeit keine Analyse-Cookies. Sollte sich das ändern, wird diese Erklärung aktualisiert.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              5. Links zu Drittanbietern
            </h2>
            <p>
              Unsere Website kann Links zu externen Websites enthalten. Wir sind nicht verantwortlich für die Datenschutzpraktiken oder Inhalte von Plattformen Dritter.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              6. Kontakt
            </h2>
            <p>
              Wenn Sie Fragen zu dieser Erklärung haben, kontaktieren Sie uns unter{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-blue-600 hover:underline font-semibold"
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
