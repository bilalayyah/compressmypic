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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zum Bildkomprimierer</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-indigo-600" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Nutzungsbedingungen
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Zuletzt aktualisiert: 12. Nov. 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              1. Annahme der Bedingungen
            </h2>
            <p>
              Durch den Zugriff auf CompressMyPic und dessen Nutzung erklären Sie sich damit einverstanden, diese Nutzungsbedingungen einzuhalten und an sie gebunden zu sein. Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, stellen Sie bitte die Nutzung des Dienstes ein.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              2. Zulässige Nutzung
            </h2>
            <p>
              Sie dürfen CompressMyPic sowohl für private als auch für kommerzielle Bildoptimierung nutzen. Sie verpflichten sich, den Dienst nicht für rechtswidrige Aktivitäten zu verwenden oder in einer Weise, die den Betrieb, die Sicherheit oder die Verfügbarkeit der Website beeinträchtigen könnte.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              3. Geistige Eigentumsrechte
            </h2>
            <p>
              Sie behalten zu 100 % das volle Urheberrecht, das Eigentum und alle geistigen Eigentumsrechte an allen Bildern, Fotos und Grafiken, die Sie mit unserem Tool komprimieren. CompressMyPic beansprucht keinerlei Eigentum, Lizenz oder Rechte an Ihren kreativen Werken. Die gesamte Verarbeitung erfolgt lokal auf Ihrem Gerät.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              4. Gewährleistungsausschluss
            </h2>
            <p>
              CompressMyPic wird „wie besehen“ und „wie verfügbar“ ohne Gewährleistungen jeglicher Art bereitgestellt, weder ausdrücklich noch stillschweigend. Obwohl wir uns um maximale Kompatibilität und Leistung in allen Browsern bemühen, gewährleisten wir nicht, dass der Dienst ununterbrochen, fehlerfrei oder für bestimmte technische Anforderungen geeignet ist.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              5. Kontakt
            </h2>
            <p>
              Wenn Sie Fragen zu diesen Bedingungen haben, wenden Sie sich bitte an uns unter{' '}
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
