import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cpu, Lock, CheckCircle2, Users, Layers } from 'lucide-react';

interface AboutPageItProps {
  onNavigate: (path: string) => void;
}

export const AboutPageIt: React.FC<AboutPageItProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Chi siamo – CompressMyPic, compressore di immagini online gratuito';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Chi è CompressMyPic: un compressore di immagini online gratuito per JPG, PNG e WebP. Comprimi immagini online gratis, senza registrazione, senza filigrana e senza caricare nulla su un server.');
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
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            Chi siamo – CompressMyPic
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            CompressMyPic è un compressore di immagini gratuito e privato. Comprimi immagini JPG, PNG e WebP direttamente nel tuo browser: veloce, sicuro e senza caricare i tuoi file da nessuna parte.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Cos’è CompressMyPic?</span>
            </h2>
            <p>
              CompressMyPic è un compressore di immagini online gratuito e un ottimizzatore di immagini che ti aiuta a ridurre le dimensioni dei file senza perdere qualità. È un compressore di foto e un riduttore di dimensioni per i formati che usi ogni giorno: JPG, PNG e WebP. Usalo per comprimere JPG a 100 KB, comprimere PNG online gratis, comprimere immagini WebP o ridurre le dimensioni di una foto prima di condividerla su WhatsApp, Instagram, Facebook o via email.
            </p>
            <p>
              I siti tradizionali di compressione immagini caricano le tue foto personali o la grafica della tua azienda su un server di qualcun altro. Questa pratica solleva preoccupazioni legittime, ed è proprio per questo che abbiamo creato CompressMyPic al contrario: come uno strumento che fa tutto sul tuo dispositivo.
            </p>
            <p>
              Quando selezioni un’immagine o la trascini nella pagina, il browser riserva un buffer temporaneo in memoria, disegna l’immagine su un elemento Canvas HTML, applica l’algoritmo di compressione e poi esporta il nuovo file, tutto all’interno della tua scheda del browser. Nel processo di compressione delle tue immagini non sono coinvolte infrastrutture di rete, database o server cloud.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>Formati supportati: JPG, PNG e WebP</span>
            </h2>
            <p>
              Come compressore JPG, CompressMyPic ti permette di comprimere JPG online gratis e ridurre le dimensioni dei file JPEG mantenendo le foto nitide: prova il preset Bilanciato o abbassa il cursore della qualità e osserva le dimensioni prima e dopo in tempo reale per raggiungere obiettivi come 100 KB o 200 KB. Come compressore PNG, ti permette di comprimere PNG online gratis mantenendo la trasparenza di loghi e grafiche. E quando comprimi immagini WebP, ottieni i file più piccoli di tutti: il WebP è in genere del 25-35% più piccolo del JPEG a qualità simile, il che lo rende la scelta migliore per ottimizzare le immagini delle pagine web.
            </p>
            <p>
              Puoi mantenere il formato originale di ogni immagine oppure convertire tra JPG, PNG e WebP. Il cursore della qualità (dal 10% al 100%), i preset Bassa, Bilanciata e Alta e la visualizzazione in tempo reale delle dimensioni prima e dopo ti danno il pieno controllo sull’equilibrio tra dimensione del file e qualità dell’immagine, senza mai promettere una casella per un obiettivo esatto in KB che lo strumento non ha.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>I nostri principi fondamentali</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Privacy assoluta</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Nessun file tocca mai un server esterno o un database. Le tue foto e la tua grafica sensibile restano rigorosamente sul tuo dispositivo. Poiché la compressione avviene nel browser, nessun altro vede mai il tuo lavoro.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Semplice e gratuito</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Nessuna installazione di software, nessun piano a pagamento, nessun costo nascosto, nessuna creazione di account, nessuna verifica via email e nessun limite di prova. Comprimi immagini online gratis: è davvero gratuito, senza registrazione e senza filigrana sulle tue immagini compresse.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">La qualità la controlli tu</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Hai un controllo preciso: trascina il cursore Qualità in tempo reale, scegli uno dei preset Bassa, Bilanciata o Alta, scegli il formato del file di output e confronta ogni immagine fianco a fianco per individuare subito le differenze. Riduci le dimensioni delle immagini senza perdere qualità, alle tue condizioni.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-9 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Compressore di immagini in blocco</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Comprimi più immagini alla volta con le stesse impostazioni e scaricale tutte insieme con il pulsante Scarica tutto (ZIP): un compressore di immagini in blocco per librerie di foto, cataloghi di prodotti e cartelle di immagini di siti web.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-10 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Controlli di sicurezza automatici</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Il compressore rileva la trasparenza delle tue immagini. Se selezioni l’output JPEG per un PNG trasparente, ti mostriamo un avviso perché il JPEG non supporta la trasparenza, così non perdi mai il canale alfa per sbaglio.
                </p>
              </div>
              <div className="p-4 rounded-2xl border pastel-card-12 shadow-[var(--shadow)]">
                <div className="font-bold text-[var(--ink-navy)] text-sm mb-1">Prestazioni veloci</div>
                <p className="text-xs text-[var(--ink-2)]">
                  Poiché tutta l’elaborazione avviene localmente sul tuo dispositivo, non devi aspettare che i file salgano e scendano da un server. Puoi comprimere le foto in fretta, anche file di grandi dimensioni fino a 20 MB per immagine, su desktop o su mobile.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#7c3aed] dark:text-[#a78bfa]" />
              <span>A chi è rivolto CompressMyPic?</span>
            </h2>
            <p>
              CompressMyPic è per chiunque abbia bisogno di immagini più piccole: blogger e proprietari di siti web che vogliono ottimizzare le immagini per il web e ridurre le dimensioni delle immagini delle loro pagine; fotografi che devono ridurre le dimensioni delle foto prima di condividerle o consegnare le bozze; venditori online che comprimono una foto per il sito web o per un annuncio; studenti e impiegati che comprimono immagini per un allegato email; e chiunque voglia comprimere un’immagine per WhatsApp, Instagram o Facebook in modo che venga inviata più in fretta e consumi meno dati mobili.
            </p>
            <p>
              Funziona sui browser desktop e mobili, non richiede installazione e non ti chiede mai di registrarti: basta aprire il sito, caricare le immagini e scaricare i file più piccoli.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>Privacy e sicurezza</span>
            </h2>
            <p>
              In CompressMyPic crediamo che la privacy sia un diritto fondamentale, non una funzione opzionale. Oggi molti siti web raccolgono dati per impostazione predefinita, persino uno strumento di compressione immagini. Noi adottiamo un approccio in cui la privacy viene prima e ci affidiamo alla moderna tecnologia del browser per elaborare i tuoi file localmente sul tuo computer.
            </p>
            <p>
              I tuoi file restano nella memoria del browser e vengono cancellati subito quando chiudi la scheda o aggiorni la pagina. Poiché nessuna elaborazione delle immagini avviene su server remoti, non possiamo raccogliere i dati delle tue immagini nemmeno se volessimo. Questa è la progettazione e la promessa dello strumento.
            </p>
            <p>
              Per sapere esattamente come trattiamo la privacy, visita la nostra{' '}
              <button
                type="button"
                onClick={() => onNavigate('/it/privacy')}
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold cursor-pointer"
              >
                Informativa sulla privacy
              </button>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#16a34a] dark:text-[#4ade80]" />
              <span>La nostra missione</span>
            </h2>
            <p>
              Crediamo che gli strumenti migliori siano quelli più semplici, più veloci e più trasparenti. La nostra missione è offrire a tutti un compressore di immagini veloce, affidabile e completamente gratuito, senza compromessi nascosti, senza annunci che ti tracciano, senza caricamenti su server e senza rinunce alla tua privacy. Che tu comprima un singolo JPG o un intero lotto di immagini WebP, lo strumento deve semplicemente funzionare.
            </p>
            <p>
              Hai una domanda, un’idea o hai trovato qualcosa che possiamo migliorare? Ci farebbe piacere sentirti. Puoi scriverci direttamente dal sito.
            </p>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/it/')}
              className="flex-1 px-5 py-2.5 btn-purple-pill text-sm font-semibold shadow-sm cursor-pointer"
            >
              Inizia a comprimere le immagini
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/it/contatti')}
              className="flex-1 px-5 py-2.5 rounded-full bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:bg-[var(--surface-2)] transition-colors cursor-pointer"
            >
              Contattaci
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
