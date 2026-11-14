import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageItProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageIt: React.FC<PrivacyPageItProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Informativa sulla privacy - CompressMyPic';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Informativa sulla privacy di CompressMyPic: le immagini vengono elaborate solo nel tuo browser, non raccogliamo dati personali e non carichiamo mai le tue immagini su un server.');
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Torna al compressore di immagini</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Informativa sulla privacy
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Ultimo aggiornamento: 12 novembre 2026
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Elaborazione delle immagini nel browser
            </h2>
            <p>
              CompressMyPic è un compressore di immagini online gratuito. Le immagini vengono elaborate localmente nel tuo browser con HTML5 Canvas: non vengono mai caricate sui nostri server e non raccogliamo, conserviamo né condividiamo le tue immagini. Quando chiudi o aggiorni la scheda del browser, tutti gli oggetti temporanei in memoria vengono cancellati.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Nessuna raccolta di dati personali
            </h2>
            <p>
              Non richiediamo un account, una password, un indirizzo email o un numero di telefono per usare lo strumento di compressione. Le informazioni di contatto che invii volontariamente tramite il nostro modulo di contatto vengono usate esclusivamente per rispondere alla tua richiesta specifica.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Pubblicità (Google AdSense)
            </h2>
            <p>
              Utilizziamo Google AdSense per mostrare annunci una volta attivato. Fornitori terzi, tra cui Google, utilizzano i cookie per pubblicare annunci in base alle visite precedenti dell’utente a questo sito web o ad altri siti web. L’utilizzo dei cookie pubblicitari da parte di Google consente a Google e ai suoi partner di pubblicare annunci per te in base alla tua visita a questo sito e/o ad altri siti su Internet. Puoi disattivare la pubblicità personalizzata visitando le Impostazioni annunci di Google (
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                https://adssettings.google.com
              </a>
              ) o{' '}
              <a
                href="http://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                http://www.aboutads.info/choices/
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Analisi
            </h2>
            <p>
              Al momento non utilizziamo cookie di analisi. Se la situazione dovesse cambiare, questa informativa verrà aggiornata.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Link di terze parti
            </h2>
            <p>
              Il nostro sito web può contenere link a siti esterni. Non siamo responsabili delle pratiche di privacy né dei contenuti delle piattaforme di terze parti.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Contatti
            </h2>
            <p>
              Se hai domande su questa informativa, contattaci all’indirizzo{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
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
