import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';

interface GuideWhatsAppPageItProps {
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
    text: 'Vai su compressmypic.online nel browser del tuo telefono o del tuo computer. Non c’è nulla da installare e nessun account da creare: lo strumento si apre subito.',
  },
  {
    title: 'Carica la tua foto',
    text: 'Tocca «Sfoglia file» e scegli la foto dalla tua galleria, oppure trascina la foto nella pagina. Puoi caricare più foto alla volta. Ogni immagine può pesare fino a 20 MB.',
  },
  {
    title: 'Inizia con il preset Bilanciata',
    text: 'Il preset Bilanciata (qualità intorno al 70%) è un buon punto di partenza per le foto di WhatsApp. Riduce molto le dimensioni del file e la foto resta nitida sullo schermo di un telefono.',
  },
  {
    title: 'Controlla le dimensioni prima e dopo in tempo reale',
    text: 'Ogni foto mostra le sue dimensioni originali e le nuove dimensioni compresse, una accanto all’altra. Se il file è ancora più grande di quanto vuoi, abbassa un po’ il cursore della qualità e guarda le dimensioni aggiornarsi subito.',
  },
  {
    title: 'Mantieni il JPG per le foto',
    text: 'Per le foto normali, mantieni il formato di output JPG. È il formato che WhatsApp gestisce meglio e quello che produce i file più piccoli per le foto. Usa il PNG solo se la tua immagine ha bisogno di trasparenza, come un logo.',
  },
  {
    title: 'Confronta il prima e il dopo',
    text: 'Apri il confronto del prima e del dopo per controllare che la foto sia ancora buona. Ingrandisci i volti e il testo: se non vedi nessuna differenza reale, l’impostazione della qualità è quella giusta.',
  },
  {
    title: 'Scarica la foto più piccola',
    text: 'Tocca Scarica sulla foto, oppure usa «Scarica tutto (ZIP)» se hai compresso più foto alla volta. Il file più piccolo viene salvato sul tuo dispositivo: la tua foto originale non viene mai modificata.',
  },
  {
    title: 'Inviala su WhatsApp nel modo giusto',
    text: 'Se vuoi la migliore qualità possibile, invia la foto compressa come documento: su WhatsApp tocca Allega, poi Documento, e scegli il file. WhatsApp invia i documenti senza toccarli, quindi la tua foto arriva esattamente come l’hai compressa. Se la invii come foto, WhatsApp la comprimerà una seconda volta.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: 'Perché WhatsApp riduce la qualità delle foto?',
    answer: 'Quando invii una foto nel modo normale, WhatsApp la ricomprime per risparmiare dati e spazio, spesso riducendola a dimensioni e qualità molto inferiori. Per questo una foto nitida scattata con la fotocamera può sembrare sfocata o poco definita dopo l’invio.',
  },
  {
    id: 'wa-faq-2',
    question: 'WhatsApp comprime le immagini inviate come documenti?',
    answer: 'No. Quando invii un’immagine come documento (Allega, poi Documento), WhatsApp invia il file così com’è, senza nessuna compressione aggiuntiva. È il modo migliore per condividere una foto a piena qualità.',
  },
  {
    id: 'wa-faq-3',
    question: 'Qual è la dimensione massima di un’immagine che posso inviare su WhatsApp?',
    answer: 'WhatsApp consente documenti fino a 2 GB, quindi una foto compressa di poche centinaia di KB non è mai un problema. Le foto inviate nel modo normale vengono ricompresse da WhatsApp stessa, quindi nella pratica ciò che conta è la qualità, non la dimensione.',
  },
  {
    id: 'wa-faq-4',
    question: 'Come invio una foto a piena qualità su WhatsApp?',
    answer: 'Prima comprimi la foto tu stesso con CompressMyPic, così avrà dimensioni ragionevoli, poi inviala su WhatsApp come documento anziché come foto. Tocca Allega, scegli Documento e seleziona il file. Arriverà senza che WhatsApp la comprima di nuovo.',
  },
  {
    id: 'wa-faq-5',
    question: 'Devo comprimere prima di inviare o lasciare che lo faccia WhatsApp?',
    answer: 'Comprimila prima tu. WhatsApp comprime in modo aggressivo e tu non hai alcun controllo su di esso. Quando comprimi prima con CompressMyPic, scegli tu la qualità, controlli il risultato e poi invii il file come documento, così WhatsApp non lo tocca di nuovo.',
  },
  {
    id: 'wa-faq-6',
    question: 'Quale impostazione di qualità devo usare per le foto di WhatsApp?',
    answer: 'Inizia con il preset Bilanciata intorno al 70%. Per una foto importante, usa l’80-85% e controlla il confronto del prima e del dopo. Per una foto quotidiana e veloce, quando conta la rapidità, il 50-60% resta comunque buono sullo schermo di un telefono e produce un file molto più piccolo.',
  },
  {
    id: 'wa-faq-7',
    question: 'Comprimere due volte peggiora le foto?',
    answer: 'Sì. Ogni passaggio di compressione JPEG elimina un po’ di dettagli in più. Per questo devi comprimere una sola volta con CompressMyPic e poi inviare il risultato come documento, invece di lasciare che WhatsApp comprima una seconda volta una foto già compressa.',
  },
  {
    id: 'wa-faq-8',
    question: 'Posso comprimere le foto di WhatsApp sul telefono?',
    answer: 'Sì. CompressMyPic funziona nel browser su Android e iPhone. Apri il sito, scegli la foto dal rullino, comprimila, scarica il file più piccolo e poi condividilo da WhatsApp. Nessuna app da installare.',
  },
  {
    id: 'wa-faq-9',
    question: 'Le foto compresse restano belle nello Stato di WhatsApp?',
    answer: 'Sì, se non esageri. Lo Stato di WhatsApp mostra le foto a una risoluzione modesta, quindi una foto compressa con il preset Bilanciata (intorno al 70%) sembra uguale all’originale sullo schermo di un telefono. Evita di scendere sotto il 50% per le foto di Stato con volti o testo.',
  },
  {
    id: 'wa-faq-10',
    question: 'WhatsApp dice che la mia immagine è troppo grande: cosa faccio?',
    answer: 'Carica l’immagine su CompressMyPic e abbassa il cursore della qualità finché il file non pesa poche centinaia di KB, poi scaricalo e invialo di nuovo. Se non viene inviata comunque come foto, inviala come documento, che accetta file molto più grandi.',
  },
  {
    id: 'wa-faq-11',
    question: 'Devo usare JPG o PNG per WhatsApp?',
    answer: 'Usa il JPG per le foto. Il JPG produce file molto più piccoli per le foto scattate con la fotocamera e WhatsApp lo gestisce meglio. Usa il PNG solo per le immagini che hanno bisogno di trasparenza, come un logo, perché i file PNG sono molto più grandi.',
  },
  {
    id: 'wa-faq-12',
    question: 'Posso inviare immagini WebP su WhatsApp?',
    answer: 'WhatsApp può ricevere file WebP, ma potrebbero non essere visualizzati come una foto normale e alcuni telefoni li gestiscono in modo strano. Per le foto che vuoi che le persone vedano direttamente in chat, il JPG è la scelta più sicura. Il WebP è più adatto ai siti web che a WhatsApp.',
  },
  {
    id: 'wa-faq-13',
    question: 'Come comprimo più foto di WhatsApp alla volta?',
    answer: 'Carica tutte le foto su CompressMyPic in una sola volta, applica lo stesso preset a tutte e scarica tutto insieme con il pulsante «Scarica tutto (ZIP)». Poi invia i file da WhatsApp uno per uno o come documenti.',
  },
  {
    id: 'wa-faq-14',
    question: 'WhatsApp comprime i video allo stesso modo?',
    answer: 'Sì, WhatsApp comprime anche i video inviati nel modo normale e può ridurli molto. CompressMyPic funziona solo con le immagini (JPG, PNG, WebP), non con i video. Per i video, inviali come documenti per mantenere la qualità originale.',
  },
  {
    id: 'wa-faq-15',
    question: 'Comprimere una foto cancella l’originale dal mio telefono?',
    answer: 'No. CompressMyPic crea una nuova copia più piccola e la scarica sul tuo dispositivo. La tua foto originale resta esattamente com’è nella tua galleria, senza modifiche.',
  },
  {
    id: 'wa-faq-16',
    question: 'Le mie foto vengono caricate su un server quando le comprimo?',
    answer: 'No. Tutta la compressione avviene all’interno del tuo browser, sul tuo dispositivo, quindi le tue foto non vengono mai caricate, archiviate o viste da nessun altro. Restano nella memoria del browser e vengono cancellate quando chiudi o aggiorni la scheda.',
  },
  {
    id: 'wa-faq-17',
    question: 'Quanto dovrebbe pesare una foto per WhatsApp?',
    answer: 'Per la condivisione quotidiana, 100-300 KB per foto è un buon obiettivo: viene inviata in fretta, consuma pochi dati mobili e resta nitida sul telefono. Per una foto che vuoi stampare o conservare, resta più vicino a 500 KB-1 MB con un’impostazione di qualità più alta.',
  },
  {
    id: 'wa-faq-18',
    question: 'Perché le mie foto di WhatsApp sembrano sfocate dopo l’invio?',
    answer: 'Perché WhatsApp le ha ricompresse quando le hai inviate come foto. La soluzione è comprimere prima la foto tu stesso con una qualità che controlli, e poi inviarla come documento, così WhatsApp non la comprime di nuovo.',
  },
  {
    id: 'wa-faq-19',
    question: 'Posso comprimere uno screenshot per WhatsApp?',
    answer: 'Sì. Carica lo screenshot su CompressMyPic come una foto. Gli screenshot si comprimono molto bene perché hanno ampie aree di colore piatto: prova prima il preset Bilanciata e passa all’output WebP se vuoi il file più piccolo.',
  },
  {
    id: 'wa-faq-20',
    question: 'CompressMyPic è gratuito per le foto di WhatsApp?',
    answer: 'Sì, completamente gratuito. Non c’è registrazione, non c’è filigrana, non c’è limite al numero di foto che comprimi e non serve nessun account. Basta aprire il sito, comprimere e scaricare.',
  },
];

export const GuideWhatsAppPageIt: React.FC<GuideWhatsAppPageItProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = 'Comprimere immagini per WhatsApp senza perdere qualità';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Scopri come comprimere le immagini per WhatsApp senza perdere qualità. Gratis e privato, senza registrazione: riduci le foto prima di inviarle, così restano nitide e si inviano in fretta.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/it/guide/comprimere-immagini-per-whatsapp';
    // hreflang: same DOM mechanism the English page uses for its canonical.
    const alternates = [
      { lang: 'en', href: 'https://compressmypic.online/guides/compress-images-for-whatsapp' },
      { lang: 'it', href: 'https://compressmypic.online/it/guide/comprimere-immagini-per-whatsapp' },
      { lang: 'x-default', href: 'https://compressmypic.online/guides/compress-images-for-whatsapp' },
    ];
    const createdLinks: HTMLLinkElement[] = [];
    alternates.forEach(({ lang, href }) => {
      let link = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
        createdLinks.push(link);
      }
      link.href = href;
    });
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'Come comprimere le immagini per WhatsApp senza perdere qualità',
          description: 'Comprimi una foto con CompressMyPic e inviala su WhatsApp come documento, così resta nitida.',
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
    script.id = 'guide-whatsapp-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-whatsapp-jsonld');
      if (existing) existing.remove();
      createdLinks.forEach((link) => link.remove());
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Come comprimere le immagini per WhatsApp senza perdere qualità
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            WhatsApp riduce ogni foto che invii, spesso molto più del necessario. Comprimi le tue foto prima tu stesso e inviale nel modo giusto: arriveranno nitide, si invieranno in fretta e consumeranno meno dati mobili.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span>Perché WhatsApp rende le tue foto sfocate</span>
            </h2>
            <p>
              Quando invii una foto su WhatsApp nel modo normale, WhatsApp la ricomprime prima della consegna. Una foto da 3 MB scattata con la fotocamera può arrivare come un file da 100 KB con dettagli poco definiti e colori a blocchi. WhatsApp lo fa per risparmiare dati e spazio, ma tu non puoi decidere quanta qualità viene persa.
            </p>
            <p>
              Esiste un secondo modo di inviare una foto che la maggior parte delle persone non usa mai: inviarla come documento. I documenti vengono consegnati esattamente come sono, senza nessuna compressione aggiuntiva. Il trucco è ridurre prima la foto tu stesso, con un’impostazione di qualità che controlli, e poi inviarla come documento. Ottieni un file piccolo e una foto nitida allo stesso tempo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Send className="w-5 h-5 text-blue-600" />
              <span>Passo dopo passo: comprimi una foto per WhatsApp</span>
            </h2>
            <ol className="space-y-4">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-1.png"
              alt="Screenshot del caricamento di una foto su CompressMyPic prima di inviarla su WhatsApp"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Carica la tua foto su CompressMyPic: trascinala nella pagina o sceglila dalla tua galleria.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <span>Quale impostazione di qualità dovresti usare?</span>
            </h2>
            <p>
              Non esiste un numero perfetto unico: dipende dalla foto e da ciò a cui serve. Usa questo come punto di partenza e controlla ogni volta il confronto del prima e del dopo:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Foto quotidiane: 70%</div>
                <p className="text-xs text-slate-600">
                  Il preset Bilanciata. Un grande risparmio di dimensioni e la foto resta nitida su qualsiasi schermo di telefono. L’impostazione predefinita migliore per WhatsApp.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Foto importanti: 80-85%</div>
                <p className="text-xs text-slate-600">
                  Foto di famiglia, foto di viaggio, tutto ciò che vuoi conservare. Il file è più grande, ma i dettagli dei volti e dei paesaggi si mantengono.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="font-bold text-slate-900 text-sm mb-1">Condivisioni veloci: 50-60%</div>
                <p className="text-xs text-slate-600">
                  Meme, aggiornamenti veloci, foto con dati mobili lenti. File molto più piccoli che restano comunque buoni alle dimensioni dello schermo di un telefono.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Consigli per i migliori risultati</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Comprimi una sola volta, e solo una volta. Comprimere una seconda volta una foto già compressa elimina dettagli quasi senza risparmiare altro spazio.</li>
              <li>Invia sempre il file compresso come documento se la qualità conta: è l’unico modo per impedire che WhatsApp lo comprima di nuovo.</li>
              <li>Comprimi più foto alla volta con le stesse impostazioni e scaricale tutte con il pulsante Scarica tutto (ZIP).</li>
              <li>Per screenshot e grafiche con testo, prova l’output WebP: mantiene i bordi nitidi e produce un file più piccolo del JPG.</li>
              <li>La tua foto originale non viene mai modificata. CompressMyPic salva una nuova copia più piccola, quindi puoi sempre tornare indietro e provare una qualità diversa.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.png"
              alt="Screenshot del cursore della qualità e delle dimensioni del file prima e dopo in tempo reale in CompressMyPic"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Sposta il cursore della qualità e guarda le dimensioni prima e dopo aggiornarsi in tempo reale finché il file non ha la dimensione che vuoi.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileWarning className="w-5 h-5 text-blue-600" />
              <span>Errori comuni da evitare</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Inviare la foto come foto dopo averla compressa: WhatsApp la comprimerà una seconda volta e annullerà il tuo lavoro.</li>
              <li>Scendere sotto il 40% di qualità per le foto con volti: la pelle e i dettagli fini diventano a blocchi molto in fretta a bassa qualità.</li>
              <li>Usare il PNG per le foto scattate con la fotocamera: i file PNG sono molto più grandi del JPG per le foto e non ti danno nulla in più su WhatsApp.</li>
              <li>Dimenticare di controllare il risultato: guarda sempre il confronto del prima e del dopo prima di inviare, soprattutto per le foto con testo.</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>Domande frequenti</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div key={item.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors ${isOpen ? 'bg-slate-50/50' : 'hover:bg-slate-50/50'}`}
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
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
            <h2 className="text-xl font-bold text-slate-900">Guide correlate</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/it/guide/jpg-vs-png-vs-webp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">JPG vs PNG vs WebP: quale formato dovresti usare?</div>
                <p className="text-xs text-slate-600 mt-1">Dimensioni del file, qualità e trasparenza a confronto, così scegli sempre il formato giusto.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/it/guide/ridurre-immagine-a-100-kb')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">Come ridurre le dimensioni di un’immagine a 100 KB per siti web ed email</div>
                <p className="text-xs text-slate-600 mt-1">Guida passo dopo passo per arrivare a 100 KB senza rovinare la tua foto.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/it/')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Comprimi immagini gratis
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/it/guide/ridurre-immagine-a-100-kb')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Riduci un’immagine a 100 KB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
