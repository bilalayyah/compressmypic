import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageItProps {
  onNavigate: (path: string) => void;
}

export const TermsPageIt: React.FC<TermsPageItProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Termini di servizio - CompressMyPic';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Termini di servizio di CompressMyPic: uso consentito dello strumento gratuito di compressione immagini, diritti sulle tue immagini e limitazioni di responsabilità.');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/it/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Torna al compressore di immagini</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-indigo-600" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Termini di servizio
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            Ultimo aggiornamento: 12 novembre 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              1. Accettazione dei termini
            </h2>
            <p>
              Accedendo a CompressMyPic e utilizzandolo, accetti di rispettare i presenti Termini di servizio e di esserne vincolato. Se non sei d’accordo con una qualsiasi parte di questi termini, interrompi l’utilizzo del servizio.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              2. Uso consentito
            </h2>
            <p>
              Puoi utilizzare CompressMyPic per l’ottimizzazione di immagini sia per scopi personali sia per scopi commerciali. Accetti di non utilizzare il servizio per attività illecite né in alcun modo che possa compromettere il funzionamento, la sicurezza o la disponibilità del sito web.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              3. Diritti di proprietà intellettuale
            </h2>
            <p>
              Mantieni il 100% dei diritti d’autore, della proprietà e dei diritti di proprietà intellettuale su tutte le immagini, le foto e la grafica che comprimi con il nostro strumento. CompressMyPic non rivendica alcuna proprietà, licenza o diritto sulle tue opere creative. Tutta l’elaborazione avviene localmente sul tuo computer.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              4. Esclusione di garanzie
            </h2>
            <p>
              CompressMyPic è fornito «così com’è» e «come disponibile», senza garanzie di alcun tipo, espresse o implicite. Pur impegnandoci per la massima compatibilità e le migliori prestazioni su tutti i browser, non garantiamo che il servizio sia ininterrotto, privo di errori o conforme a requisiti tecnici specifici.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              5. Contatti
            </h2>
            <p>
              Se hai domande su questi termini, scrivici all’indirizzo{' '}
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
