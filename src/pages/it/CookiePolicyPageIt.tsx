import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageItProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPageIt: React.FC<CookiePolicyPageItProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Politica dei cookie | CompressMyPic – Come vengono usati i cookie';
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
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Politica dei cookie
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Ultimo aggiornamento: 18 novembre 2026
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Cosa sono i cookie?
            </h2>
            <p>
              I cookie sono piccoli file di testo che un sito web chiede al tuo browser di salvare sul tuo dispositivo. Possono ricordare informazioni sulla tua visita — ad esempio, se hai già visto un messaggio — in modo che il sito o un servizio possa riconoscere il tuo browser in una visita successiva. Questa informativa spiega quali cookie vengono usati su CompressMyPic, perché vengono usati e come puoi controllarli.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Cookie che non impostiamo
            </h2>
            <p>
              CompressMyPic non imposta alcun cookie. I nostri strumenti per immagini funzionano interamente nel tuo browser: la compressione non richiede account, accesso o cookie. Non impostiamo cookie per ricordarti, tracciarti o salvare le tue preferenze. Le tue immagini non lasciano mai il tuo browser e nulla che le riguarda viene salvato in un cookie.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Cookie pubblicitari
            </h2>
            <p>
              CompressMyPic al momento non mostra annunci e non installa cookie pubblicitari.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Cookie di Google Analytics 4
            </h2>
            <p>
              Utilizziamo Google Analytics 4 (GA4) per capire, in forma aggregata, come viene usato il sito — ad esempio, quali strumenti sono popolari e quali pagine ricevono visite. GA4 può impostare cookie sul tuo dispositivo, come _ga, per distinguere una visita dall’altra. I dati sono anonimizzati e usati solo in forma riassuntiva; non usiamo GA4 per identificarti personalmente. Puoi disattivare Google Analytics in qualsiasi momento installando il componente aggiuntivo per la disattivazione di Google Analytics (https://tools.google.com/dlpage/gaoptout) o disattivando i cookie nelle impostazioni del tuo browser.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Consenso (SEE, Regno Unito e Svizzera)
            </h2>
            <p>
              Poiché questo sito al momento non mostra annunci, non viene mostrato alcun messaggio di consenso per la pubblicità e non viene richiesto alcun consenso pubblicitario. Le statistiche di utilizzo vengono raccolte con Google Analytics; puoi bloccare i cookie di analisi dalle impostazioni del browser (vedi sezione 8).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Altri servizi di terze parti
            </h2>
            <p>
              Alcuni altri servizi di questo sito possono usare cookie propri o archiviazione simile. Google reCAPTCHA, che protegge il nostro modulo di contatto dallo spam, può impostare cookie per distinguere le persone dai bot; il suo utilizzo è regolato dalle 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Norme sulla privacy di Google</a>
               e dai 
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Termini di servizio di Google</a>
               di Google. Cloudflare, che ospita questo sito, può impostare un cookie di sicurezza per proteggere il sito da abusi. I commenti anonimi sotto i nostri strumenti chiedono solo un nome, che viene salvato dal servizio dei commenti — non in un cookie di questo sito.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Archiviazione del browser che non è un cookie
            </h2>
            <p>
              Il tuo browser conserva anche una piccola quantità di informazioni locali che non sono cookie. Se pubblichi un commento, il tuo browser può ricordare il nome digitato per non dovertelo digitare di nuovo, e se cambi la lingua del sito, il tuo browser può ricordare quella scelta per la tua prossima visita. Queste informazioni restano sul tuo dispositivo, non vengono mai inviate ai nostri server e puoi cancellarle in qualsiasi momento cancellando i dati del sito nel tuo browser.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Come controllare i cookie
            </h2>
            <p>
              Puoi eliminare i cookie già salvati sul tuo dispositivo e impedire che vengano impostati cookie in futuro dalle impostazioni del tuo browser — tutti i principali browser (Chrome, Firefox, Safari, Edge) offrono questa opzione nelle impostazioni di privacy o sicurezza. Bloccare tutti i cookie non comprometterà i nostri strumenti per immagini, che non dipendono dai cookie, ma potrebbe influire sulle funzioni di servizi di terze parti come statistiche. Puoi anche usare la modalità privata o in incognito del tuo browser, che elimina i cookie quando chiudi la finestra.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Modifiche a questa informativa
            </h2>
            <p>
              Potremmo aggiornare questa informativa quando il sito cambia — ad esempio, se aggiungiamo un nuovo partner pubblicitario o un nuovo servizio di analisi. In tal caso, cambieremo la data di "Ultimo aggiornamento" in cima a questa pagina. Continuare a usare il sito dopo una modifica significa accettare l’informativa aggiornata.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Contatti
            </h2>
            <p>
              Se hai domande su questa informativa, contattaci all’indirizzo 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
               o leggi la nostra 
              <a href="/it/privacy" onClick={(e) => { e.preventDefault(); onNavigate('/it/privacy'); }} className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">Informativa sulla privacy</a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
