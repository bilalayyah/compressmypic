import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

interface DisclaimerPageItProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPageIt: React.FC<DisclaimerPageItProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Disclaimer | CompressMyPic – Strumenti per immagini gratuiti';
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
            <span>Torna al compressore di immagini</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <ShieldAlert className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Disclaimer
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Ultimo aggiornamento: 18 novembre 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Informazioni generali
            </h2>
            <p>
              CompressMyPic è un servizio gratuito di compressione e modifica di immagini online. Gli strumenti, le guide e gli articoli di questo sito sono forniti solo per informazioni generali e uso pratico. Non sono consigli professionali di alcun tipo — né legali, medici, finanziari o tecnici — e non creano alcun rapporto professionale tra te e CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Nessuna garanzia
            </h2>
            <p>
              Il servizio è fornito "così com’è" e "come disponibile", senza garanzie di alcun tipo, esplicite o implicite. Non garantiamo che gli strumenti siano sempre disponibili, ininterrotti, privi di errori o di componenti dannosi, né che una determinata immagine venga compressa a una dimensione o qualità precisa. I risultati dipendono dall’immagine originale, dal suo formato e dal tuo browser, quindi conserva sempre una copia dei file originali prima di usare qualsiasi strumento.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Accuratezza dei contenuti
            </h2>
            <p>
              Lavoriamo per mantenere guide, articoli e descrizioni degli strumenti accurati e aggiornati, ma i formati delle immagini, i browser e gli standard web cambiano nel tempo. Le informazioni di questo sito possono diventare obsolete o contenere errori nonostante i nostri sforzi. Verifica sempre i dettagli importanti — come i limiti di dimensione di una piattaforma — nella documentazione ufficiale di quella piattaforma prima di farvi affidamento.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. I tuoi file sono tua responsabilità
            </h2>
            <p>
              Le immagini vengono elaborate localmente nel tuo browser e non vengono mai caricate sui nostri server. Questo significa anche che non possiamo recuperare un file per te: se sovrascrivi, elimini o perdi un’immagine originale mentre usi i nostri strumenti, non possiamo ripristinarla. Conserva copie di backup di ogni immagine importante ed elabora solo copie di file che possiedi o che hai il permesso di modificare.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Servizi e link di terze parti
            </h2>
            <p>
              Questo sito utilizza servizi di terze parti — Google AdSense per la pubblicità, Google Analytics 4 per le statistiche di utilizzo, FormSubmit per il modulo di contatto e un Cloudflare Worker per i commenti anonimi — e collega a siti web esterni. Non controlliamo questi servizi né questi siti e non siamo responsabili dei loro contenuti, disponibilità, pratiche sulla privacy o accuratezza. Quando li usi, si applicano i loro termini e le loro informative sulla privacy.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Pubblicità
            </h2>
            <p>
              Gli annunci mostrati su questo sito sono forniti da Google AdSense e dai suoi partner. Non approviamo, garantiamo né ci assumiamo responsabilità per alcun prodotto, servizio o affermazione presente in un annuncio. Qualsiasi acquisto o decisione basata su un annuncio è interamente a tuo rischio; valuta tu stesso gli inserzionisti prima di acquistare qualsiasi cosa.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Limitazione di responsabilità
            </h2>
            <p>
              Nella massima misura consentita dalla legge, CompressMyPic e il suo operatore non saranno responsabili di alcuna perdita o danno diretto, indiretto, incidentale o consequenziale derivante dall’uso — o dall’impossibilità di usare — questo sito web o i suoi strumenti, inclusi, a titolo esemplificativo, file, dati o profitti persi. Il tuo unico rimedio in caso di insoddisfazione per il servizio è smettere di usarlo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Commenti degli utenti
            </h2>
            <p>
              I commenti pubblicati sotto i nostri strumenti sono scritti dai visitatori e riflettono le loro opinioni, non le nostre. Modereriamo i commenti e possiamo rimuovere qualsiasi contenuto che sia spam, offensivo o fuori tema, ma non approviamo né ci assumiamo responsabilità per il contenuto dei commenti degli utenti. Non condividere mai password, dati di pagamento o informazioni personali sensibili in un commento.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Contatti
            </h2>
            <p>
              Se hai domande su questo disclaimer, contattaci all’indirizzo 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
