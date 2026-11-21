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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
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
            Ultimo aggiornamento: 15 novembre 2026
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
              3. Pubblicità
            </h2>
            <p>
              CompressMyPic al momento non mostra annunci. Questo sito non installa cookie pubblicitari.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Analisi
            </h2>
            <p>
              Utilizziamo Google Analytics 4 (GA4) per capire, in forma aggregata, come viene usato il sito — ad esempio, quali strumenti sono popolari e quali pagine ricevono visite. GA4 raccoglie dati di utilizzo anonimi come le pagine visitate, il tempo trascorso e informazioni generali sul dispositivo e sul browser. GA4 può impostare cookie sul dispositivo (come _ga) per distinguere una visita dall'altra. Non utilizziamo GA4 per identificarvi personalmente. Potete rinunciare a Google Analytics in qualsiasi momento installando il componente aggiuntivo per la disattivazione di Google Analytics (https://tools.google.com/dlpage/gaoptout) o disattivando i cookie nelle impostazioni del browser.
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

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Cookie e consenso
            </h2>
            <p>
              CompressMyPic non installa alcun cookie per i suoi strumenti di immagini: la compressione avviene interamente nel vostro browser e non richiede cookie, account o preferenze salvate da parte nostra. I cookie di questo sito provengono da servizi di terze parti. Ad esempio, Google Analytics può installare cookie per le statistiche di utilizzo. Il vostro browser memorizza questi cookie sul vostro dispositivo e potete eliminarli in qualsiasi momento dalle impostazioni del browser.
            </p>
            <p>
              CompressMyPic al momento non mostra annunci, quindi non viene chiesto ai visitatori di nessuna regione il consenso per la pubblicità.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. I vostri diritti ai sensi del GDPR
            </h2>
            <p>
              Se vi trovate nello Spazio economico europeo o nel Regno Unito, il Regolamento generale sulla protezione dei dati (GDPR) vi attribuisce diritti sui vostri dati personali. Potete chiederci una copia dei dati personali che conserviamo su di voi, chiederci di correggerli se sono errati, di cancellarli, di limitarne l’uso e opporvi al loro trattamento. Quando il trattamento si basa sul vostro consenso, potete revocarlo in qualsiasi momento; la revoca non influisce su quanto abbiamo fatto legalmente in precedenza.
            </p>
            <p>
              Poiché i nostri strumenti elaborano le immagini localmente e non abbiamo account utente, gli unici dati personali che normalmente conserviamo sono il nome, l’indirizzo email e il messaggio che inviate tramite il modulo di contatto. Per esercitare uno di questi diritti, scriveteci a <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a> e risponderemo entro 30 giorni. Avete inoltre il diritto di presentare un reclamo all’autorità locale per la protezione dei dati se ritenete che abbiamo trattato i vostri dati in modo scorretto.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Conservazione dei dati
            </h2>
            <p>
              Conserviamo i dati personali solo per il tempo necessario allo scopo per cui sono stati raccolti. I messaggi del modulo di contatto vengono conservati solo fino a quando la vostra richiesta non ha ricevuto risposta e la conversazione non si è conclusa, e per un breve periodo successivo in caso di domande di follow-up; non vengono mai utilizzati per marketing e mai condivisi con terze parti. Le vostre immagini non vengono mai conservate: esistono solo nella memoria del vostro browser mentre utilizzate uno strumento e vengono cancellate nel momento in cui chiudete o aggiornate la scheda. I dati analitici aggregati non contengono informazioni personali e vengono conservati solo in forma riassuntiva.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Sicurezza e reCAPTCHA
            </h2>
            <p>
              Il sito è servito tramite HTTPS, quindi la connessione tra il vostro browser e il sito è crittografata. Il nostro modulo di contatto è fornito tramite FormSubmit, che inoltra il vostro messaggio al nostro indirizzo email, e il modulo è protetto da Google reCAPTCHA per bloccare spam e abusi automatizzati. Quando inviate il modulo, reCAPTCHA può raccogliere informazioni hardware e software, come i dettagli del vostro browser e dispositivo, per distinguere gli esseri umani dai bot; ciò è regolato dall’<a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                Informativa sulla privacy
              </a> e dai <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                Termini di servizio
              </a> di Google. Non vi chiediamo mai di inviare password, dati di pagamento o documenti personali sensibili tramite il modulo di contatto, e non dovreste mai includerli in un messaggio.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Privacy dei minori
            </h2>
            <p>
              CompressMyPic è uno strumento per il pubblico generale e non è rivolto a minori di 13 anni. Non raccogliamo consapevolmente informazioni personali da minori. Se siete genitori o tutori e ritenete che vostro figlio ci abbia inviato informazioni personali tramite il modulo di contatto, scriveteci via email e le cancelleremo tempestivamente.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Modifiche a questa informativa
            </h2>
            <p>
              Possiamo aggiornare questa informativa quando il sito cambia — ad esempio, se aggiungiamo un nuovo servizio di analisi, un nuovo partner pubblicitario o un nuovo modo per contattarci. In tal caso, modificheremo la data di «Ultimo aggiornamento» in cima a questa pagina e le modifiche significative saranno descritte qui in parole semplici. Continuare a utilizzare il sito dopo una modifica significa accettare l’informativa aggiornata.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. Contatti
            </h2>
            <p>
              Se hai domande su questa informativa, contattaci all’indirizzo{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
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
