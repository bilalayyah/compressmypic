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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Torna al compressore di immagini</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-[#7c3aed] dark:text-[#a78bfa]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Termini di servizio
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Ultimo aggiornamento: 14 novembre 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Accettazione dei termini
            </h2>
            <p>
              Accedendo a CompressMyPic e utilizzandolo, accetti di rispettare i presenti Termini di servizio e di esserne vincolato. Se non sei d’accordo con una qualsiasi parte di questi termini, interrompi l’utilizzo del servizio.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Uso consentito
            </h2>
            <p>
              Puoi utilizzare CompressMyPic per l’ottimizzazione di immagini sia per scopi personali sia per scopi commerciali. Accetti di non utilizzare il servizio per attività illecite né in alcun modo che possa compromettere il funzionamento, la sicurezza o la disponibilità del sito web.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Diritti di proprietà intellettuale
            </h2>
            <p>
              Mantieni il 100% dei diritti d’autore, della proprietà e dei diritti di proprietà intellettuale su tutte le immagini, le foto e la grafica che comprimi con il nostro strumento. CompressMyPic non rivendica alcuna proprietà, licenza o diritto sulle tue opere creative. Tutta l’elaborazione avviene localmente sul tuo computer.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Esclusione di garanzie
            </h2>
            <p>
              CompressMyPic è fornito «così com’è» e «come disponibile», senza garanzie di alcun tipo, espresse o implicite. Pur impegnandoci per la massima compatibilità e le migliori prestazioni su tutti i browser, non garantiamo che il servizio sia ininterrotto, privo di errori o conforme a requisiti tecnici specifici.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Disponibilità e modifiche del servizio
            </h2>
            <p>
              CompressMyPic è un servizio gratuito e non garantiamo che sia sempre disponibile. Possiamo modificare, sospendere o interrompere qualsiasi strumento, funzione o l’intero sito web in qualsiasi momento, con o senza preavviso — ad esempio, per correggere un bug, sostituire una tecnologia che non funziona più nei browser moderni o mantenere il servizio gratuito. Possiamo anche stabilire limiti ragionevoli, come una dimensione massima di file per immagine (attualmente 20 MB per il compressore principale e 25 MB per i convertitori di formato), e possiamo modificare tali limiti man mano che browser e dispositivi migliorano. Poiché tutta l’elaborazione avviene nel vostro browser, un’interruzione del sito web non mette mai a rischio le vostre immagini originali: i vostri file restano sul vostro dispositivo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Uso accettabile
            </h2>
            <p>
              Accettate di utilizzare CompressMyPic solo per scopi leciti e in modo da non danneggiare il servizio o altre persone. In particolare, non dovete tentare di sovraccaricare, danneggiare o decodificare il sito web, sondarne le vulnerabilità di sicurezza, utilizzare script automatizzati per inviare un gran numero di richieste, né utilizzare il servizio per elaborare immagini che violano il copyright di altri, contengono materiale illegale o sono destinate a ingannare o molestare. Siete responsabili di assicurarvi di avere il diritto di utilizzare ogni immagine che elaborate e di conservare una copia di backup di qualsiasi immagine importante prima di comprimerla o convertirla.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Limitazione di responsabilità
            </h2>
            <p>
              Nella misura massima consentita dalla legge, CompressMyPic e il suo proprietario non saranno responsabili di alcuna perdita indiretta, incidentale o consequenziale derivante dal vostro utilizzo del servizio — inclusi, a titolo esemplificativo, perdita di dati, perdita di profitti o costi di ricreazione di un’immagine. Poiché il servizio è gratuito, la nostra responsabilità totale per qualsiasi reclamo relativo al servizio è limitata all’importo pagato per utilizzarlo, che è zero. Ciò non limita alcuna responsabilità che non può essere limitata per legge, come la responsabilità per frode o per morte o lesioni personali causate da negligenza.
            </p>
            <p>
              La compressione è per natura un processo con perdita: ridurre le dimensioni di un file può ridurne la qualità, e alcuni formati, come JPEG, non possono preservare la trasparenza. Siete responsabili di controllare il risultato compresso prima di eliminare o sovrascrivere un file originale, e non siamo responsabili di perdita di qualità, mancanza di trasparenza o qualsiasi altra modifica che la compressione apporta a un’immagine che avete scelto di elaborare.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Servizi di terze parti
            </h2>
            <p>
              Il sito utilizza servizi di terze parti per funzionare, tra cui hosting e distribuzione dei contenuti tramite Cloudflare, pubblicità tramite Google AdSense e invio di messaggi tramite FormSubmit. Questi servizi hanno i propri termini e informative sulla privacy, e il vostro utilizzo di essi è regolato da tali documenti oltre che da questi termini. Non siamo responsabili della disponibilità, del contenuto o delle pratiche di siti web o servizi di terze parti collegati da CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Legge applicabile
            </h2>
            <p>
              Questi termini sono regolati dalle leggi degli Emirati Arabi Uniti, da dove il sito è gestito, senza riguardo alle loro norme sul conflitto di leggi. Qualsiasi controversia derivante da o connessa a questi termini o al vostro utilizzo del servizio sarà risolta dai tribunali degli Emirati Arabi Uniti. Se una parte di questi termini risulta inapplicabile, le restanti parti continueranno ad applicarsi integralmente.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Modifiche a questi termini
            </h2>
            <p>
              Possiamo aggiornare questi termini quando il servizio cambia — ad esempio, quando aggiungiamo nuovi strumenti, modifichiamo i limiti di dimensione dei file o iniziamo a utilizzare un nuovo servizio di terze parti. In tal caso, aggiorneremo la data di «Ultimo aggiornamento» in cima a questa pagina. Se continuate a utilizzare CompressMyPic dopo la modifica dei termini, accettate i termini aggiornati. Se non siete d’accordo con una modifica, interrompete l’utilizzo del servizio.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Contatti
            </h2>
            <p>
              Se hai domande su questi termini, scrivici all’indirizzo{' '}
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
