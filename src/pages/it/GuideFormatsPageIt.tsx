import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface GuideFormatsPageItProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'Apri CompressMyPic',
    text: 'Vai su compressmypic.online nel tuo browser. Non c’è nulla da installare, nessun account da creare e nessun file viene mai caricato su un server.',
  },
  {
    title: 'Carica la tua immagine',
    text: 'Trascina l’immagine nella pagina o tocca «Sfoglia file» per sceglierla. Sono supportati file JPG, PNG e WebP, fino a 20 MB per immagine.',
  },
  {
    title: 'Decidi: mantieni il formato o convertilo',
    text: 'Scegli «Originale» per mantenere il formato che l’immagine ha già, oppure scegli JPG, PNG o WebP come output. Usa la guida qui sotto per decidere: JPG per le foto, PNG quando ti serve la trasparenza, WebP quando vuoi il file più piccolo per un sito web.',
  },
  {
    title: 'Scegli un preset di qualità',
    text: 'Inizia con il preset Bilanciata (intorno al 70%). Per una foto che vuoi mantenere perfetta, usa il preset Alta o una qualità dell’85-90%. Per una piccola immagine web, va bene un’impostazione più bassa.',
  },
  {
    title: 'Controlla le dimensioni in tempo reale e confronta',
    text: 'Ogni immagine mostra le sue dimensioni originali e le nuove dimensioni compresse. Apri il confronto del prima e del dopo e ingrandisci: se non riesci a vedere alcuna differenza, l’impostazione è quella giusta. Prova a cambiare il formato di output in WebP e guarda quanto più piccolo diventa il file.',
  },
  {
    title: 'Scarica la tua immagine',
    text: 'Scarica la singola immagine, oppure usa «Scarica tutto (ZIP)» quando hai convertito più immagini alla volta. Il tuo file originale non viene mai modificato: ottieni una nuova copia più piccola.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: 'Qual è la differenza tra JPG e PNG?',
    answer: 'Il JPG è un formato con perdita pensato per le foto: elimina alcuni dettagli per creare file molto più piccoli e non può gestire la trasparenza. Il PNG è senza perdita e supporta la trasparenza, quindi è perfetto per loghi e grafiche, ma le foto in PNG sono molte volte più grandi della stessa foto salvata in JPG.',
  },
  {
    id: 'fmt-faq-2',
    question: 'Il WebP è meglio del JPG?',
    answer: 'Per le dimensioni del file, sì: il WebP è in genere del 25-35% più piccolo del JPG a qualità simile e supporta anche la trasparenza. L’unico motivo per scegliere il JPG al posto del WebP è la compatibilità: alcuni software e app più vecchi gestiscono ancora meglio il JPG e WhatsApp mostra in anteprima le foto JPG in modo più affidabile.',
  },
  {
    id: 'fmt-faq-3',
    question: 'Il WebP è meglio del PNG?',
    answer: 'Di solito, sì. Il WebP supporta la trasparenza come il PNG, ma crea file molto più piccoli, e può anche usare la compressione con perdita come il JPG. Il PNG resta la scelta più sicura quando ti serve una qualità perfetta e senza perdita per un logo o una grafica che verrà modificata di nuovo in seguito.',
  },
  {
    id: 'fmt-faq-4',
    question: 'Il PNG supporta la trasparenza e il JPG no?',
    answer: 'Esatto. Il PNG supporta uno sfondo trasparente (un canale alfa), ed è per questo che loghi e icone sono di solito PNG. Il JPG non ha affatto trasparenza: qualsiasi area trasparente in un JPG diventa un colore pieno, di solito bianco, quindi non salvare mai un logo con sfondo trasparente come JPG.',
  },
  {
    id: 'fmt-faq-5',
    question: 'Perché i file PNG sono molto più grandi dei JPG?',
    answer: 'Perché il PNG è senza perdita: mantiene ogni singolo pixel di dettaglio esattamente com’è, mentre il JPG elimina dettagli che l’occhio nota a malapena. Una foto scattata con la fotocamera salvata come PNG può essere 5-10 volte più grande della stessa foto come JPG. Per questo le foto non dovrebbero quasi mai essere PNG.',
  },
  {
    id: 'fmt-faq-6',
    question: 'Quando dovrei usare il JPG invece del WebP?',
    answer: 'Usa il JPG quando l’immagine verrà aperta in software più vecchi, inviata su WhatsApp o via email dove vuoi un’anteprima garantita, o stampata. Il WebP è meglio per i siti web, ma per condividere una foto con qualcuno il JPG è ancora il formato più universale.',
  },
  {
    id: 'fmt-faq-7',
    question: 'Posso convertire PNG in JPG?',
    answer: 'Sì. Carica il PNG su CompressMyPic, scegli JPG come formato di output e scaricalo. Ricorda solo che il JPG non ha trasparenza: se il tuo PNG ha uno sfondo trasparente, scegli prima un colore di sfondo, perché l’area trasparente diventerà altrimenti bianco pieno.',
  },
  {
    id: 'fmt-faq-8',
    question: 'Posso convertire JPG in WebP?',
    answer: 'Sì. Carica il JPG, scegli WebP come output e scaricalo: il file sarà di solito del 25-35% più piccolo alla stessa qualità visibile. Puoi convertire più JPG in WebP alla volta e scaricarli tutti come ZIP.',
  },
  {
    id: 'fmt-faq-9',
    question: 'Convertire JPG in PNG migliora la qualità?',
    answer: 'No. Convertire un JPG in PNG non può recuperare i dettagli che la compressione JPG ha già eliminato: rende solo il file molto più grande. L’unico buon motivo per convertire JPG in PNG è se devi modificare di nuovo l’immagine senza perdere ulteriore qualità.',
  },
  {
    id: 'fmt-faq-10',
    question: 'Quale formato dovrei usare per un sito web?',
    answer: 'Prima il WebP, il JPG come alternativa. Il WebP ti dà i file più piccoli, il che rende le pagine più veloci da caricare, e la velocità delle pagine conta sia per i visitatori sia per Google. Usa il PNG solo per le immagini che hanno bisogno di trasparenza, come un logo, e il JPG per le foto se non puoi usare il WebP.',
  },
  {
    id: 'fmt-faq-11',
    question: 'Qual è il formato migliore per un logo?',
    answer: 'Il PNG se il logo ha bisogno di uno sfondo trasparente, perché il JPG non può gestire la trasparenza. Anche il WebP supporta la trasparenza e crea un file più piccolo, quindi è una buona scelta per un logo su un sito web. Non salvare mai un logo come JPG se lo sfondo deve restare trasparente.',
  },
  {
    id: 'fmt-faq-12',
    question: 'Qual è il formato migliore per gli screenshot?',
    answer: 'PNG o WebP. Gli screenshot hanno bordi netti e colori piatti, che PNG e WebP gestiscono bene. Il JPG sfoca i bordi netti del testo. Per il file di screenshot più piccolo, prova l’output WebP in CompressMyPic: di solito è molto più piccolo del PNG senza alcuna differenza visibile.',
  },
  {
    id: 'fmt-faq-13',
    question: 'Tutti i browser supportano il WebP ormai?',
    answer: 'Sì, praticamente tutti. Chrome, Edge, Firefox, Safari e tutti i browser mobili moderni supportano il WebP da anni. Solo i browser molto vecchi e alcune app datate non possono aprire il WebP, ed è l’unico motivo per cui il JPG è ancora utile.',
  },
  {
    id: 'fmt-faq-14',
    question: 'WhatsApp o Instagram accettano il WebP?',
    answer: 'WhatsApp può ricevere file WebP, ma potrebbero non essere visualizzati come una foto normale, quindi il JPG è più sicuro per condividere foto lì. Instagram accetta JPG e PNG per i post e converte i caricamenti da solo. Per la condivisione sui social media, usa il JPG per le foto.',
  },
  {
    id: 'fmt-faq-15',
    question: 'Convertire una foto in WebP fa perdere qualità?',
    answer: 'Solo quanto scegli tu. Il WebP usa la stessa idea del JPG: un’impostazione di qualità che scambia un po’ di dettagli con un file più piccolo. Con una qualità dell’80-90%, una foto WebP sembra identica al JPG originale e il file è circa un terzo più piccolo.',
  },
  {
    id: 'fmt-faq-16',
    question: 'Qual è la differenza tra JPG e JPEG?',
    answer: 'Nessuna: JPG e JPEG sono lo stesso formato. JPEG è il nome completo (Joint Photographic Experts Group) e JPG è l’estensione breve del file. Un file chiamato foto.jpg e un file chiamato foto.jpeg sono lo stesso tipo di immagine.',
  },
  {
    id: 'fmt-faq-17',
    question: 'Devo mantenere il formato originale o convertire?',
    answer: 'Mantieni l’originale se sei soddisfatto delle dimensioni: è la scelta più semplice e non si perde nulla. Converti quando hai un motivo: da JPG a WebP per ridurre una foto di un sito web, da PNG a JPG per ridurre una foto che non ha bisogno di trasparenza, o da PNG a WebP per ridurre un logo.',
  },
  {
    id: 'fmt-faq-18',
    question: 'Quale formato produce il file più piccolo?',
    answer: 'Il WebP, in quasi tutti i casi. Per le foto, il WebP è in genere del 25-35% più piccolo del JPG alla stessa qualità visibile. Per la grafica con trasparenza, il WebP è di solito molto più piccolo del PNG. Per questo il WebP è il formato migliore per i siti web.',
  },
  {
    id: 'fmt-faq-19',
    question: 'CompressMyPic può convertire tra JPG, PNG e WebP?',
    answer: 'Sì. Carica un’immagine JPG, PNG o WebP, scegli il formato di output che vuoi — originale, JPG, PNG o WebP — e scarica il file convertito. Puoi convertire più immagini alla volta con le stesse impostazioni e scaricarle tutte come ZIP.',
  },
  {
    id: 'fmt-faq-20',
    question: 'Cosa succede alla trasparenza se converto PNG in JPG?',
    answer: 'Va persa. Il JPG non può memorizzare la trasparenza, quindi le parti trasparenti del tuo PNG diventano un colore pieno. CompressMyPic ti permette di scegliere un colore di sfondo per riempire quelle aree, quindi scegline uno che si abbini al punto in cui verrà usata l’immagine: il bianco è la scelta consueta.',
  },
];

export const GuideFormatsPageIt: React.FC<GuideFormatsPageItProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG vs PNG vs WebP: quale formato dovresti usare?';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG vs PNG vs WebP spiegati in modo semplice: dimensioni del file, qualità e trasparenza a confronto, così puoi scegliere il formato giusto per foto, loghi e siti web.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/it/guide/jpg-vs-png-vs-webp';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Come scegliere tra JPG, PNG e WebP e convertire le immagini',
          description: 'Confronta JPG, PNG e WebP, poi comprimi o converti la tua immagine con CompressMyPic.',
          step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text })),
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQ_DATA.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-formats-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-formats-jsonld');
      if (existing) existing.remove();
    };
  }, []);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="bg-[var(--bg)] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/it/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Torna al compressore di immagini</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            JPG vs PNG vs WebP: quale formato dovresti usare?
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            Scegliere il formato sbagliato può rendere la tua immagine dieci volte più grande del necessario, o rovinare un logo trasparente. Ecco il confronto semplice e onesto, e come convertire tra formati in pochi secondi.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Scale className="w-4 h-4" />
              </span>
              <span>La risposta breve</span>
            </h2>
            <p>
              Se devi ricordare una sola cosa, ricorda questa: usa il JPG per le foto, il PNG per i loghi e per tutto ciò che ha bisogno di trasparenza, e il WebP ogni volta che vuoi il file più piccolo, soprattutto su un sito web. La tabella qui sotto mostra il perché.
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">Formato</th>
                    <th className="px-4 py-3 font-semibold">Dimensioni del file</th>
                    <th className="px-4 py-3 font-semibold">Trasparenza</th>
                    <th className="px-4 py-3 font-semibold">Ideale per</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#7c3aed] dark:text-[#c4b5fd]">JPG</td>
                    <td className="px-4 py-3">Piccole</td>
                    <td className="px-4 py-3">No</td>
                    <td className="px-4 py-3">Foto, condivisione, stampa</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#7c3aed] dark:text-[#c4b5fd]">PNG</td>
                    <td className="px-4 py-3">Grandi</td>
                    <td className="px-4 py-3">Sì</td>
                    <td className="px-4 py-3">Loghi, icone, screenshot</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#7c3aed] dark:text-[#c4b5fd]">WebP</td>
                    <td className="px-4 py-3">Le più piccole</td>
                    <td className="px-4 py-3">Sì</td>
                    <td className="px-4 py-3">Siti web, foto web</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Camera className="w-4 h-4" />
              </span>
              <span>JPG: il migliore per le foto</span>
            </h2>
            <p className="text-sm sm:text-base">
              Il JPG (scritto anche JPEG) è il classico formato per le foto. Usa la compressione con perdita: elimina i dettagli fini che l’occhio nota a malapena, il che rende i file notevolmente più piccoli. Una foto da 5 MB scattata con la fotocamera può diventare 500 KB come JPG e restare comunque ottima. Il JPG non può gestire la trasparenza, quindi è la scelta sbagliata per i loghi, ma per qualsiasi foto normale è l’impostazione predefinita sicura e universale che ogni dispositivo e app può aprire.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-6">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>PNG: il migliore per loghi e trasparenza</span>
            </h2>
            <p className="text-sm sm:text-base">
              Il PNG è senza perdita: mantiene ogni pixel esattamente com’è e supporta gli sfondi trasparenti. Questo lo rende il formato giusto per loghi, icone e grafiche con testo. Il prezzo è la dimensione del file: una foto salvata come PNG può essere 5-10 volte più grande della stessa foto come JPG. Non salvare mai una foto scattata con la fotocamera come PNG se non hai un motivo specifico.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-0">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>WebP: il migliore per i siti web</span>
            </h2>
            <p className="text-sm sm:text-base">
              Il WebP è il formato moderno creato da Google. Fa tutto: compressione con perdita come il JPG, trasparenza come il PNG e file che sono in genere del 25-35% più piccoli del JPG alla stessa qualità visibile. Ogni browser moderno lo supporta, ed è per questo che è il formato migliore per le immagini dei siti web. Il suo unico punto debole è la compatibilità con i software più vecchi e con le anteprime di WhatsApp, dove il JPG è ancora più sicuro.
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.png"
              alt="Screenshot che confronta la stessa foto salvata come JPG, PNG e WebP con le relative dimensioni dei file"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              La stessa foto in tre formati: il WebP è il più piccolo, il PNG è il più grande e il JPG sta in mezzo.
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <FileImage className="w-4 h-4" />
              </span>
              <span>Passo dopo passo: comprimi o converti la tua immagine</span>
            </h2>
            <ol className="space-y-3">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className={`flex gap-3.5 p-4 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(i * 2)}`}
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg btn-purple-grad text-sm font-mono font-bold flex items-center justify-center mt-0.5 shadow-xs">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-sans font-bold text-[var(--ink-navy)] text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base text-[var(--ink-2)] mt-0.5">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>Quale formato per quale lavoro?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Foto della fotocamera: JPG o WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  JPG per la condivisione e la stampa, WebP per il tuo sito web. Entrambi mantengono le foto belle a una frazione delle dimensioni originali.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(3)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Loghi e icone: PNG o WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Ti serve la trasparenza, quindi il JPG è fuori. Il PNG è il classico sicuro; il WebP è più piccolo e funziona ovunque sia moderno.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(6)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Screenshot: WebP o PNG</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  Testo nitido e colori piatti si adattano a WebP e PNG. Il JPG sfoca i bordi del testo, quindi evitalo per gli screenshot.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(9)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">Immagini di siti web: WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  I file più piccoli significano pagine più veloci. Converti le foto del tuo sito web in WebP e mantieni il JPG come alternativa per i browser molto vecchi.
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.png"
              alt="Screenshot della scelta del formato di output JPG, PNG o WebP in CompressMyPic"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              Scegli il tuo formato di output in CompressMyPic: mantieni l’originale, oppure converti in JPG, PNG o WebP.
            </figcaption>
          </figure>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>Domande frequenti</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item, idx) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    className={`border rounded-2xl overflow-hidden shadow-[var(--shadow)] transition-shadow hover:shadow-[var(--shadow-lg)] ${getPastelCardClass(idx)}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors cursor-pointer hover:bg-white/30 dark:hover:bg-white/5"
                    >
                      <span className="text-sm sm:text-base font-bold text-[var(--ink-navy)]">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#7c3aed] dark:text-[#c4b5fd]' : 'text-[var(--ink-3)]'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-[var(--ink-2)] leading-relaxed border-t border-black/5 dark:border-white/10 bg-white/55 dark:bg-slate-900/35">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Related guides */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">Guide correlate</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/it/guide/comprimere-immagini-per-whatsapp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">Come comprimere le immagini per WhatsApp senza perdere qualità</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Riduci prima le foto tu stesso, poi inviale come documenti, così WhatsApp non può sfocarle.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/it/guide/ridurre-immagine-a-100-kb')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">Come ridurre le dimensioni di un’immagine a 100 KB per siti web ed email</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">Guida passo dopo passo per arrivare a 100 KB senza rovinare la tua foto.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/it/')}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              Comprimi immagini gratis
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/it/guide/comprimere-immagini-per-whatsapp')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#7c3aed]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              Comprimi per WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
