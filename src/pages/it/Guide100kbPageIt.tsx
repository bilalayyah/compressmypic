import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, Mail, Globe, Target, CheckCircle2, Layers, Gauge } from 'lucide-react';

interface Guide100kbPageItProps {
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
    text: 'Vai su compressmypic.online nel tuo browser. Non c’è nulla da installare e nessun account da creare: lo strumento è gratuito, senza registrazione e senza filigrana.',
  },
  {
    title: 'Carica la tua immagine',
    text: 'Trascina l’immagine nella pagina, oppure tocca «Sfoglia file» per sceglierla dal tuo dispositivo. Sono supportati JPG, PNG e WebP, fino a 20 MB per immagine. Puoi caricare più immagini alla volta.',
  },
  {
    title: 'Inizia con il preset Bilanciata',
    text: 'Il preset Bilanciata imposta la qualità intorno al 70%. Per la maggior parte delle foto questo riduce già il file a una frazione delle sue dimensioni originali: controlla le dimensioni in tempo reale mostrate accanto alla tua immagine per vedere a che punto sei.',
  },
  {
    title: 'Abbassa il cursore della qualità passo dopo passo',
    text: 'Non c’è una casella in cui digiti «100 KB»: trascina invece il cursore della qualità verso il basso lentamente e osserva le dimensioni prima e dopo in tempo reale aggiornarsi a ogni modifica. Procedi a piccoli passi (per esempio dal 70% al 60% al 50%), così non esageri e non perdi più qualità del necessario.',
  },
  {
    title: 'Passa al WebP se sei ancora sopra i 100 KB',
    text: 'Se il file è ancora sopra i 100 KB a una qualità ragionevole, cambia il formato di output in WebP. Il WebP è in genere del 25-35% più piccolo del JPG alla stessa qualità visibile e spesso colma il divario fino a 100 KB senza abbassare ulteriormente la qualità.',
  },
  {
    title: 'Confronta il prima e il dopo',
    text: 'Apri il confronto del prima e del dopo e ingrandisci volti, testo e dettagli fini. Se la foto sembra ancora buona, hai finito. Se sembra a blocchi o sbiadita, alza un po’ la qualità e accetta un file leggermente sopra i 100 KB: una foto nitida da 120 KB è meglio di una sfocata da 100 KB.',
  },
  {
    title: 'Scarica la tua immagine',
    text: 'Tocca Scarica per salvare il file più piccolo, oppure usa «Scarica tutto (ZIP)» se hai ridotto più immagini alla volta. La tua immagine originale non viene mai modificata: ottieni sempre una nuova copia più piccola.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'kb-faq-1',
    question: 'Come porto la mia foto a circa 100 KB?',
    answer: 'Caricala su CompressMyPic, inizia con il preset Bilanciata, poi abbassa il cursore della qualità passo dopo passo mentre osservi le dimensioni prima e dopo in tempo reale. Fermati appena le dimensioni compresse sono vicine a 100 KB. Se sei ancora sopra, cambia il formato di output in WebP.',
  },
  {
    id: 'kb-faq-2',
    question: 'Perché non c’è una casella per inserire esattamente 100 KB?',
    answer: 'Perché ogni foto si comprime in modo diverso: un cielo sereno si riduce molto più di una scena affollata alla stessa qualità. Una casella fissa «100 KB» dovrebbe indovinare. Invece CompressMyPic ti mostra le dimensioni compresse in tempo reale a ogni modifica, così puoi portare tu stesso il file a 100 KB con il pieno controllo sulla qualità.',
  },
  {
    id: 'kb-faq-3',
    question: 'Quale impostazione di qualità mi dà circa 100 KB?',
    answer: 'Dipende dalla foto, ma per una tipica foto del telefono una qualità del 50-70% di solito porta vicino a 100 KB. Una foto semplice con colori piatti può raggiungere i 100 KB al 70%, mentre un paesaggio dettagliato può richiedere il 40-50%. Guarda le dimensioni in tempo reale: quel numero è la verità, non una percentuale fissa.',
  },
  {
    id: 'kb-faq-4',
    question: 'La mia foto è ancora sopra i 100 KB a bassa qualità: cosa faccio?',
    answer: 'Prima cambia il formato di output in WebP, che di solito è del 25-35% più piccolo del JPG. Se è ancora sopra, abbassa un po’ la qualità e controlla il confronto: un piccolo calo in più spesso è invisibile. Come ultima risorsa, una foto con dimensioni enormi può richiedere un’impostazione di qualità più bassa di quanto ti aspettassi, perché più pixel significano più dati.',
  },
  {
    id: 'kb-faq-5',
    question: 'Dovrei usare il WebP per arrivare a 100 KB?',
    answer: 'Sì, ogni volta che puoi. Il WebP è il modo più facile per raggiungere i 100 KB senza abbassare troppo la qualità, perché produce un file più piccolo alla stessa qualità visibile del JPG. Usa il WebP per le immagini dei siti web e ovunque si usino browser moderni; usa il JPG solo quando l’immagine deve aprirsi in software più vecchi o essere condivisa su WhatsApp.',
  },
  {
    id: 'kb-faq-6',
    question: 'Ridurre a 100 KB rende la foto sfocata?',
    answer: 'Non se lo fai con attenzione. A 100 KB una normale foto del telefono resta nitida sugli schermi, perché gli schermi mostrano molti meno pixel di quelli catturati dalla fotocamera. Sembra sfocata solo se spingi la qualità troppo in basso (sotto il 40% circa) o se la foto viene stampata in grande formato. Controlla sempre il confronto del prima e del dopo prima di scaricare.',
  },
  {
    id: 'kb-faq-7',
    question: 'Posso ridurre un PNG a 100 KB?',
    answer: 'Sì, ma le foto PNG sono grandi già all’inizio, quindi serve più lavoro. Carica il PNG, abbassa il cursore della qualità e cambia l’output in WebP o JPG: già questo spesso riduce le dimensioni di oltre la metà. Mantieni l’output PNG solo se l’immagine ha bisogno di trasparenza, e accetta che un PNG trasparente potrebbe non arrivare a 100 KB.',
  },
  {
    id: 'kb-faq-8',
    question: 'Come riduco le dimensioni di un’immagine a 200 KB?',
    answer: 'Usa lo stesso metodo: carica l’immagine, inizia con il preset Bilanciata e abbassa il cursore della qualità mentre osservi le dimensioni in tempo reale finché non sono vicine a 200 KB. La maggior parte delle foto raggiunge i 200 KB facilmente con una qualità del 70-80%, quindi di solito non devi scendere affatto in basso.',
  },
  {
    id: 'kb-faq-9',
    question: 'Come riduco le dimensioni di un’immagine a 50 KB?',
    answer: 'Carica l’immagine, cambia il formato di output in WebP e abbassa gradualmente il cursore della qualità finché le dimensioni in tempo reale non sono vicine a 50 KB, di solito intorno al 40-55% di qualità per una foto. Controlla attentamente il confronto, perché a 50 KB i dettagli fini iniziano a risentirne; va bene per miniature e chat, meno per le foto che vuoi conservare.',
  },
  {
    id: 'kb-faq-10',
    question: 'Come riduco le dimensioni di un’immagine a 20 KB?',
    answer: 'Usa l’output WebP e un’impostazione di qualità bassa, di solito 25-40%, e osserva le dimensioni in tempo reale. 20 KB è davvero piccolo, quindi aspettati una morbidezza visibile: va bene per icone, miniature e piccole anteprime, non per le foto con volti. Se l’immagine non arriva comunque a 20 KB, probabilmente ha troppi dettagli per un file così piccolo.',
  },
  {
    id: 'kb-faq-11',
    question: 'Qual è una buona dimensione di file per le immagini di un sito web?',
    answer: 'Punta a meno di 100 KB per immagine per le foto di contenuto normali e a meno di 200 KB per le grandi immagini hero. I file piccoli fanno caricare le pagine più in fretta, cosa che i visitatori notano e che Google premia. Usa il formato WebP e il preset Bilanciata come punto di partenza per le immagini dei siti web.',
  },
  {
    id: 'kb-faq-12',
    question: 'Qual è il limite di dimensione degli allegati email?',
    answer: 'La maggior parte dei provider email consente 20-25 MB per messaggio in totale, inclusi tutti gli allegati: Gmail consente 25 MB. Una singola foto ridotta a 100 KB non è mai un problema; anche dieci foto da 100 KB ciascuna sono solo 1 MB. Comprimere prima rende indolore l’invio di più foto via email.',
  },
  {
    id: 'kb-faq-13',
    question: 'Posso ridurre più immagini a 100 KB alla volta?',
    answer: 'Sì. Carica tutte le immagini insieme, applica lo stesso preset e la stessa qualità a tutte e controlla le dimensioni in tempo reale di ciascuna. Se un’immagine è ancora sopra i 100 KB, regolala singolarmente, poi scarica tutto insieme con il pulsante «Scarica tutto (ZIP)».',
  },
  {
    id: 'kb-faq-14',
    question: 'Lo strumento cambia le dimensioni della mia immagine?',
    answer: 'No. CompressMyPic mantiene le dimensioni della tua immagine esattamente uguali: viene ridotta solo la dimensione del file. La tua foto mantiene la stessa larghezza, altezza e proporzioni dell’originale, quindi una foto 4000×3000 resta 4000×3000, solo con un file molto più piccolo.',
  },
  {
    id: 'kb-faq-15',
    question: 'Come controllo le dimensioni della mia immagine compressa?',
    answer: 'CompressMyPic mostra le dimensioni originali e le dimensioni compresse di ogni immagine, in tempo reale, proprio sotto ogni foto, per esempio «4,2 MB → 98 KB». Puoi anche controllare il file scaricato sul tuo dispositivo: sul telefono, guarda i dettagli del file nella tua galleria o nel gestore file.',
  },
  {
    id: 'kb-faq-16',
    question: '100 KB sono sufficienti come qualità per un sito web?',
    answer: 'Sì, per quasi tutti gli usi web. Le foto dei siti web vengono mostrate a poche centinaia di pixel di larghezza, quindi un’immagine da 100 KB sembra nitida sullo schermo. Solo le immagini hero a schermo intero o le foto destinate alla stampa hanno bisogno di file più grandi. Comprimi a 100 KB, controlla il confronto e vedrai che la qualità regge.',
  },
  {
    id: 'kb-faq-17',
    question: 'Posso ridurre uno screenshot a 100 KB?',
    answer: 'Sì, e gli screenshot sono il caso più facile. Hanno ampie aree di colore piatto, quindi si comprimono benissimo: uno screenshot che parte da 1 MB scende spesso sotto i 100 KB con il preset Bilanciata. Prova l’output WebP per il risultato più piccolo.',
  },
  {
    id: 'kb-faq-18',
    question: 'Le mie immagini vengono caricate da qualche parte quando le comprimo?',
    answer: 'No. Tutta la compressione avviene all’interno del tuo browser, sul tuo dispositivo, quindi le tue immagini non vengono mai caricate su un server, archiviate o viste da nessun altro. Restano nella memoria del browser e vengono cancellate quando chiudi o aggiorni la scheda.',
  },
  {
    id: 'kb-faq-19',
    question: 'C’è un limite al numero di immagini che posso ridurre?',
    answer: 'No. Non c’è limite al numero di immagini che puoi comprimere e non serve nessun account o registrazione. L’unico limite è di 20 MB per immagine, che copre le foto ad alta risoluzione e gli screenshot di grandi dimensioni.',
  },
  {
    id: 'kb-faq-20',
    question: 'È gratis ridurre le immagini a 100 KB?',
    answer: 'Sì, completamente gratis. Non ci sono costi, piani a pagamento, crediti né filigrana sulle tue immagini compresse. Apri il sito, riduci le tue immagini a 100 KB e scaricale quante volte vuoi.',
  },
];

export const Guide100kbPageIt: React.FC<Guide100kbPageItProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['kb-faq-1', 'kb-faq-2']));

  useEffect(() => {
    document.title = 'Come ridurre le dimensioni di un’immagine a 100 KB per siti web ed email';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Riduci le dimensioni di un’immagine a 100 KB per siti web ed email con un compressore online gratuito. Guida passo dopo passo: nessuna registrazione, nessuna filigrana, le immagini restano sul tuo dispositivo.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/it/guide/ridurre-immagine-a-100-kb';
    const alternates = [
      { lang: 'en', href: 'https://compressmypic.online/guides/reduce-image-size-to-100kb' },
      { lang: 'it', href: 'https://compressmypic.online/it/guide/ridurre-immagine-a-100-kb' },
      { lang: 'x-default', href: 'https://compressmypic.online/guides/reduce-image-size-to-100kb' },
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
          name: 'Come ridurre le dimensioni di un’immagine a 100 KB per siti web ed email',
          description: 'Usa il cursore della qualità e l’output WebP in CompressMyPic per ridurre un’immagine a circa 100 KB.',
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
    script.id = 'guide-100kb-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-100kb-jsonld');
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
            Come ridurre le dimensioni di un’immagine a 100 KB per siti web ed email
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">
            Una foto da 4 MB rallenta il tuo sito web e intasa un’email. Ridurla a circa 100 KB fa caricare le pagine in fretta e inviare le email all’istante, e se lo fai bene nessuno noterà la differenza.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-slate-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              <span>Perché 100 KB è il numero magico</span>
            </h2>
            <p>
              100 KB è la dimensione a cui la maggior parte delle persone punta perché si trova nel punto ideale: abbastanza piccola da caricarsi all’istante su un sito web o da entrare in qualsiasi email, ma abbastanza grande da restare nitida sullo schermo. Una tipica foto del telefono parte da 3-5 MB, quindi arrivare a 100 KB significa eliminare circa il 97% del file, e la compressione moderna lo fa soprattutto rimuovendo dati che i tuoi occhi non possono vedere.
            </p>
            <p>
              Una nota onesta prima di iniziare: CompressMyPic non ha una casella in cui digiti «100 KB» e ottieni esattamente quella dimensione. Nessuno strumento onesto può promettere un numero esatto, perché ogni foto si comprime in modo diverso. Invece lo strumento ti mostra le dimensioni compresse in tempo reale a ogni modifica, e tu lo guidi verso i 100 KB con il cursore della qualità. Questa guida ti mostra esattamente come.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Gauge className="w-5 h-5 text-blue-600" />
              <span>Passo dopo passo: riduci un’immagine a 100 KB</span>
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
              src="/guides/reduce-image-size-to-100kb-1.png"
              alt="Screenshot del caricamento di una foto grande su CompressMyPic per ridurla a 100 KB"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Carica la tua foto: le dimensioni originali vengono mostrate subito, così sai quanto devi ridurre.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span>Obiettivi comuni a colpo d’occhio</span>
            </h2>
            <p>
              100 KB non è l’unico obiettivo di cui le persone hanno bisogno. Lo stesso metodo funziona per qualsiasi dimensione: ecco cosa aspettarti per ciascuna:
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 text-left">
                    <th className="px-4 py-3 font-bold">Obiettivo</th>
                    <th className="px-4 py-3 font-bold">Qualità tipica</th>
                    <th className="px-4 py-3 font-bold">Ideale per</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">200 KB</td>
                    <td className="px-4 py-3">70-80%</td>
                    <td className="px-4 py-3">Foto di blog, grandi immagini web</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">100 KB</td>
                    <td className="px-4 py-3">50-70%</td>
                    <td className="px-4 py-3">Foto di siti web, allegati email</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">50 KB</td>
                    <td className="px-4 py-3">40-55% + WebP</td>
                    <td className="px-4 py-3">Miniature, chat, pagine veloci</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-slate-900">20 KB</td>
                    <td className="px-4 py-3">25-40% + WebP</td>
                    <td className="px-4 py-3">Icone, piccole anteprime</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              Questi sono punti di partenza, non promesse. Una foto semplice raggiunge facilmente i 100 KB; una foto ricca di dettagli ha bisogno di un’impostazione di qualità più bassa. Fidati del numero delle dimensioni in tempo reale, non della percentuale.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>Consigli per siti web ed email</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Per i siti web, usa l’output WebP: è il modo più veloce per arrivare a 100 KB e ogni browser moderno lo supporta.</li>
              <li>Per le email, il JPG è il formato più sicuro perché ogni app email lo apre. Un JPG da 100 KB si allega all’istante e non viene mai rifiutato per le dimensioni.</li>
              <li>Comprimi insieme tutte le foto per una pagina o per un’email, poi scaricale tutte con il pulsante Scarica tutto (ZIP).</li>
              <li>Non inseguire esattamente 100 KB. Una foto nitida da 115 KB è meglio di una sfocata da esattamente 100 KB: la differenza nel tempo di caricamento è nulla.</li>
              <li>Controlla sempre il confronto del prima e del dopo a pieno ingrandimento prima di pubblicare o inviare la foto.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/reduce-image-size-to-100kb-2.png"
              alt="Screenshot delle dimensioni del file prima e dopo in tempo reale che mostrano un’immagine ridotta a circa 100 KB"
              className="w-full rounded-xl border border-slate-200 shadow-sm"
              loading="lazy"
            />
            <figcaption className="text-xs text-slate-500 text-center">
              Le dimensioni prima e dopo in tempo reale mostrano i tuoi progressi: abbassa il cursore finché le dimensioni compresse non sono vicine a 100 KB.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Quando 100 KB non sono possibili</span>
            </h2>
            <p>
              Alcune immagini semplicemente non possono arrivare a 100 KB senza sembrare brutte: una foto molto grande e molto dettagliata, o un PNG con trasparenza che deve restare PNG. In quel caso, non forzarlo. Una foto nitida da 180 KB batte una foto rovinata da 100 KB ogni volta: per un sito web si carica comunque in fretta e per un’email è comunque molto al di sotto di qualsiasi limite di allegato. L’obiettivo è un file piccolo che sembri comunque buono, non un numero magico.
            </p>
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
                onClick={() => onNavigate('/it/guide/comprimere-immagini-per-whatsapp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">Come comprimere le immagini per WhatsApp senza perdere qualità</div>
                <p className="text-xs text-slate-600 mt-1">Riduci prima le foto tu stesso, poi inviale come documenti, così WhatsApp non può sfocarle.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/it/guide/jpg-vs-png-vs-webp')}
                className="text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer"
              >
                <div className="font-bold text-slate-900 text-sm">JPG vs PNG vs WebP: quale formato dovresti usare?</div>
                <p className="text-xs text-slate-600 mt-1">Dimensioni del file, qualità e trasparenza a confronto, così scegli sempre il formato giusto.</p>
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
              onClick={() => onNavigate('/it/guide/jpg-vs-png-vs-webp')}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              JPG vs PNG vs WebP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
