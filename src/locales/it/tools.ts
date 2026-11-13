// Italian (Standard Italian) tool registry — COMPLETE (home + all 48 tools).
// Assembled from tools-it-batch1.ts … tools-it-batch6.ts (coordinator merge).
// Target path in the repo: src/locales/it/tools.ts
// Italian (Standard Italian), tu forms. Slugs, category ids and
// relatedSlugs are unchanged from the English registry (src/data/tools.ts).
// Batch 1: 8 tools; Batches 2–6: 8 tools each (40 tools); home entry from
// i18n-it.ts (HOME_ENTRY_IT). Translated from English — never from
// Spanish; Spanish files were used only as structural templates.

import type { ToolDefinition, ToolCategoryMeta } from '../../data/tools';

export const TOOL_CATEGORIES_IT: ToolCategoryMeta[] = [
  { id: 'compress', label: 'Comprimi', description: 'Riduci le dimensioni dei file immagine senza perdita visibile di qualità' },
  { id: 'resize', label: 'Ridimensiona', description: 'Modifica le dimensioni in pixel o scala le immagini in blocco' },
  { id: 'convert', label: 'Converti', description: 'Converti tra formati di immagine e genera PDF' },
  { id: 'crop-edit', label: 'Ritaglia e modifica', description: 'Ruota, specchia, ritaglia e regola le tue foto' },
  { id: 'ai-tools', label: 'Strumenti IA', description: 'Elaborazione intelligente delle immagini nel browser' },
  { id: 'create', label: 'Crea', description: 'Crea favicon, collage e risorse web' },
  { id: 'privacy', label: 'Strumenti privacy', description: 'Ispeziona e rimuovi metadati EXIF, GPS e nascosti' },
  { id: 'developer', label: 'Strumenti per sviluppatori', description: 'Scegli i colori, ispeziona le dimensioni e genera risorse web' },
];

export const TOOLS_REGISTRY_IT: ToolDefinition[] = [
  {
  slug: '/',
  name: 'Compressore di immagini',
  shortDescription: 'Comprimi immagini JPG, PNG, WebP e HEIC senza perdere qualità.',
  category: 'compress',
  seoTitle: 'Compressore immagini gratis online – Riduci a 100 KB',
  seoDescription:
    'Comprimi immagini gratis: riduci le dimensioni senza perdere qualità. Comprimi JPG, PNG e WebP senza registrazione né filigrana, direttamente nel browser.',
  h1: 'Compressore di immagini gratuito online',
  subtitle: 'Riduci le dimensioni dei file JPG, PNG, WebP e HEIC direttamente nel browser.',
  howToSteps: [],
  features: [],
  faqs: [],
  relatedSlugs: ['/image-resizer', '/image-converter', '/remove-image-metadata'],
},
  {
    slug: '/image-resizer',
    name: 'Ridimensionatore di immagini',
    shortDescription: 'Ridimensiona le immagini per pixel esatti, percentuale o modelli social.',
    category: 'resize',
    seoTitle: 'Ridimensiona immagini gratis online – Pixel o %',
    seoDescription:
      'Ridimensiona immagini gratis online per pixel esatti, percentuale o modelli social. Elabora lotti nel browser e scarica tutto in ZIP, senza caricare nulla.',
    h1: 'Ridimensionatore di immagini gratis online',
    subtitle:
      'Il nostro ridimensionatore di immagini nel browser permette a web designer, venditori online, blogger e utenti comuni di scalare le foto a dimensioni esatte in pixel o a rapporti percentuali in pochi secondi. Blocca il rapporto di aspetto per evitare distorsioni, applica modelli per i social con un clic o elabora un\'intera cartella localmente, senza caricare nulla su server.',
    howToSteps: [
      {
        title: 'Carica una o più immagini',
        description:
          'Trascina file JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB ciascuno nell\'area di caricamento, sfogliali dal tuo dispositivo o incollali direttamente con Ctrl+V.',
      },
      {
        title: 'Scegli la modalità Per pixel o Per percentuale',
        description:
          'Passa tra Per pixel (L × A) per inserire dimensioni esatte fino a 12.000 px, o Per percentuale (%) per scalare tra il 10% e il 200% con il cursore o i pulsanti rapidi.',
      },
      {
        title: 'Imposta blocco aspetto, modalità di adattamento o modelli',
        description:
          'Mantieni il Rapporto di aspetto bloccato per una scalatura proporzionale, o sbloccalo per scegliere Contieni, Copri o Allunga esatto — oppure clicca un modello come Post di Instagram, Miniatura di YouTube o Full HD.',
      },
      {
        title: 'Scegli formato di output e qualità',
        description:
          'Seleziona l\'output Originale, JPG, PNG o WebP, regola il cursore Qualità di output dal 10% al 100% e scegli un colore di Sfondo opaco se esporti in JPG.',
      },
      {
        title: 'Applica le impostazioni e confronta visivamente',
        description:
          'Clicca Ridimensiona tutto per elaborare il blocco, poi apri la vista Confronta su una scheda per controllare nitidezza e risparmio in byte prima/dopo, fianco a fianco.',
      },
      {
        title: 'Scarica singoli file o un archivio ZIP',
        description:
          'Salva ogni immagine ridimensionata con il suo pulsante Scarica, o clicca Scarica tutto (ZIP) quando ridimensioni due o più file insieme.',
      },
    ],
    features: [
      {
        title: 'Pixel esatti e scalatura percentuale',
        description:
          'Ridimensiona a larghezza e altezza esatte in pixel o scala pulito dal 10% al 200% preservando automaticamente il rapporto di aspetto quando è bloccato.',
      },
      {
        title: 'Modalità di adattamento intelligenti (Esatto, Contieni, Copri)',
        description:
          'Scegli come le immagini si adattano a dimensioni predefinite fisse: allunga alla dimensione esatta, adatta dentro senza ritagliare o ritaglia al centro per riempire.',
      },
      {
        title: 'Ridimensionamento in blocco e download ZIP',
        description:
          'Elabora decine di foto di prodotto o miniature di blog in un unico blocco e scaricale tutte in un solo file ZIP.',
      },
      {
        title: 'Elaborazione 100% locale nel browser',
        description:
          'Le tue foto vengono ridimensionate con HTML5 Canvas sul tuo dispositivo e non vengono mai caricate su server esterni.',
      },
    ],
    faqs: [
      {
        question: 'In che cosa differiscono le modalità Per pixel e Per percentuale nel Ridimensionatore di immagini?',
        answer:
          'Per pixel ti permette di inserire larghezza e altezza esatte in pixel (fino a 12.000 px) o di applicare direttamente i modelli per i social. Per percentuale scala ogni immagine caricata in proporzione tra il 10% e il 200% usando il cursore o i pulsanti rapidi 25%, 50%, 75%, 150% e 200%.',
      },
      {
        question: 'Cosa succede quando attivo o disattivo il blocco del rapporto di aspetto?',
        answer:
          'Con il rapporto di aspetto bloccato, digitando una nuova larghezza l\'altezza si aggiorna automaticamente in proporzione esatta alla prima foto caricata (e viceversa). Sbloccandolo puoi inserire valori indipendenti di larghezza e altezza e compaiono le opzioni di adattamento Contieni, Copri e Allunga esatto.',
      },
      {
        question: 'Quando devo scegliere Contieni, Copri o Allunga esatto?',
        answer:
          'Scegli Contieni (senza ritaglio) quando vuoi mantenere l\'intero soggetto dentro il riquadro senza tagliare i bordi. Scegli Copri (ritaglio centrale) per riempire dimensioni predefinite esatte ritagliando l\'eccesso, o Allunga esatto se rispettare i limiti in pixel conta più che preservare le proporzioni.',
      },
      {
        question: 'Quali modelli per i social e per lo schermo sono inclusi?',
        answer:
          'Hai modelli con un clic per Post di Instagram (1080×1080), Storia di Instagram (1080×1920), Miniatura di YouTube (1280×720), Copertina di Facebook (851×315), Intestazione di X (1500×500) e Full HD (1920×1080). Cliccando un modello si passa alla modalità Per pixel e le dimensioni esatte vengono compilate.',
      },
      {
        question: 'Posso ingrandire una piccola immagine oltre la sua risoluzione originale?',
        answer:
          'Sì, puoi inserire valori in pixel più grandi o scalare fino al 200% in modalità Per percentuale usando l\'interpolazione di HTML5 Canvas. Ricorda che ingrandire molto grafiche a bassa risoluzione rende i bordi più morbidi, perché Canvas allunga i pixel esistenti invece di inventare nuovi dettagli.',
      },
      {
        question: 'Quali sono la dimensione massima in pixel e il peso massimo consentiti per il ridimensionamento?',
        answer:
          'Ogni immagine caricata può pesare fino a 20 MB e i campi dei pixel accettano larghezze e altezze fino a 12.000 px. Tele molto grandi possono consumare molta RAM del browser sui dispositivi mobili, quindi restare tra 4.000 e 6.000 px mantiene l\'elaborazione veloce.',
      },
      {
        question: 'Quali formati di input accetta questo ridimensionatore di immagini?',
        answer:
          'Puoi caricare file JPG, PNG, WebP, HEIC/HEIF di iPhone, GIF, BMP e SVG. Le immagini HEIC vengono decodificate localmente nel tuo browser prima del ridimensionamento su Canvas e puoi esportare i risultati come Originale, JPG, PNG o WebP.',
      },
      {
        question: 'Il ridimensionamento preserva gli sfondi trasparenti di PNG e WebP?',
        answer:
          'Sì, la trasparenza resta intatta quando mantieni il formato Originale (per PNG/WebP) o scegli esplicitamente PNG o WebP come output. Se passi il formato di output a JPG, le aree trasparenti vengono riempite con il colore di sfondo opaco scelto (bianco per impostazione predefinita).',
      },
      {
        question: 'Come gestisce il ridimensionamento in blocco foto orizzontali e verticali miste?',
        answer:
          'Quando carichi un blocco in modalità Per pixel con il rapporto di aspetto bloccato, ogni foto conserva le sue proporzioni naturali usando il limite di larghezza, senza deformare i ritratti in cornici orizzontali. Se vuoi dimensioni fisse identiche per tutto il blocco, sblocca il rapporto e scegli Contieni o Copri.',
      },
      {
        question: 'Perché il primo caricamento compila automaticamente Larghezza e Altezza?',
        answer:
          'Quando trascini la prima foto in una coda vuota, il ridimensionatore imposta la larghezza fino a un massimo di 1.200 px e calcola l\'altezza corrispondente in proporzione. Puoi modificare subito questi numeri e cliccare Ridimensiona tutto per elaborare di nuovo tutte le immagini dell\'elenco.',
      },
      {
        question: 'Come controllo la nitidezza dopo aver rimpicciolito una foto?',
        answer:
          'Clicca Confronta su una scheda di risultato o clicca la sua miniatura per aprire la finestra di confronto prima/dopo. Mostra le dimensioni originali e ridimensionate, il risparmio in byte e un cursore diviso per controllare i dettagli prima di scaricare.',
      },
      {
        question: 'Posso cambiare formato di output e ridimensionare allo stesso tempo?',
        answer:
          'Sì, puoi scegliere JPG, PNG o WebP nel selettore del formato di output e regolare il cursore della qualità (dal 10% al 100%) prima di cliccare Ridimensiona tutto. Così riduci le dimensioni e converti in un formato web leggero in un unico passaggio.',
      },
      {
        question: 'Le GIF animate restano animate dopo il ridimensionamento?',
        answer:
          'No, HTML5 Canvas disegna il primo fotogramma della GIF quando la ridimensiona a dimensioni statiche ed esporta un\'immagine a fotogramma singolo. Se vuoi mantenere l\'animazione riducendo il peso del file, usa invece lo strumento dedicato Compressore GIF.',
      },
      {
        question: 'Le mie foto vengono caricate su un server esterno durante il ridimensionamento?',
        answer:
          'No, tutto il ridimensionamento avviene nella scheda del tuo browser usando la memoria locale di HTML5 Canvas e JavaScript. Le tue immagini originali e ridimensionate non viaggiano mai in rete né toccano archivi remoti.',
      },
      {
        question: 'Come scarico decine di immagini ridimensionate senza cliccare una per una?',
        answer:
          'Quando due o più immagini finiscono di essere ridimensionate, sopra l\'elenco compare una barra Lotto pronto con il pulsante Scarica tutto (ZIP). Cliccandolo, tutte le immagini ridimensionate vengono impacchettate in un unico download chiamato resized_images_compressmypic.zip.',
      },
      {
        question: 'Posso incollare uno screenshot dagli appunti per ridimensionarlo?',
        answer:
          'Sì, premi Ctrl+V (o Cmd+V su Mac) mentre sei sulla pagina per inserire uno screenshot copiato direttamente nella coda di caricamento. Carica subito le sue dimensioni e viene ridimensionato con le impostazioni correnti di larghezza, altezza o percentuale.',
      },
      {
        question: 'Perché il mio PNG ridimensionato è diventato più pesante in byte pur avendo meno pixel?',
        answer:
          'Se converti un JPG compresso in PNG senza perdita mentre ridimensioni, il PNG mantiene la codifica dei pixel senza perdita e può pesare più del JPEG originale. Passa il formato di output a WebP o JPG con qualità 80%–85% per file web molto più leggeri.',
      },
      {
        question: 'Quale qualità è migliore esportando JPG o WebP ridimensionati?',
        answer:
          'L\'impostazione predefinita dell\'85% bilancia bordi nitidi e gradienti puliti con file di piccole dimensioni per siti web, blog e marketplace. Abbassa la qualità verso il 65%–75% se ti serve un risparmio di kilobyte più rigoroso, o alzala al 95%–100% per preparare stampe.',
      },
      {
        question: 'Posso ridimensionare grafiche vettoriali SVG in PNG ad alta risoluzione?',
        answer:
          'Sì, caricando un SVG incorporato puoi inserire dimensioni di destinazione più grandi prima di rasterizzarlo su Canvas. Gli SVG autonomi con forme e gradienti incorporati scalano in modo nitido, anche se i collegamenti esterni a font o immagini dentro gli SVG sono bloccati dalla sicurezza del browser.',
      },
      {
        question: 'Questo ridimensionatore di immagini funziona offline o sui telefoni?',
        answer:
          'Sì, funziona bene su Safari per iOS, Chrome per Android e browser desktop, con cursori e modelli touch-friendly. Poiché i calcoli avvengono localmente nel tuo browser una volta caricata la pagina, nulla dipende dalla velocità di caricamento.',
      },
    ],
    relatedSlugs: ['/', '/image-converter', '/rotate-flip-image', '/image-dimensions-checker'],
  },
  {
    slug: '/image-converter',
    name: 'Convertitore di immagini',
    shortDescription: 'Converti JPG, PNG, WebP, HEIC, BMP, GIF e SVG nel tuo browser.',
    category: 'convert',
    seoTitle: 'Convertitore immagini gratis online – JPG, PNG, WebP',
    seoDescription:
      'Converti immagini gratis online tra JPG, PNG, WebP, HEIC, SVG, BMP, GIF e AVIF. Converti lotti sul tuo dispositivo, con qualità regolabile e download ZIP.',
    h1: 'Convertitore di immagini gratis online',
    subtitle:
      'Pensato per fotografi iPhone, sviluppatori web, marketer e team d\'ufficio, questo convertitore di immagini nel browser passa senza sforzo tra JPG, PNG, WebP, HEIC, SVG, BMP, GIF e AVIF. Regola la qualità di output, scegli un riempimento opaco per i ritagli trasparenti e converti interi lotti localmente senza caricare file.',
    howToSteps: [
      {
        title: 'Aggiungi uno o più file immagine',
        description:
          'Trascina immagini JPG, PNG, WebP, HEIC, SVG, BMP, GIF o AVIF (fino a 20 MB ciascuna) nella zona di caricamento, seleziona i file dal disco o incolla con Ctrl+V.',
      },
      {
        title: 'Scegli il formato di output',
        description:
          'Scegli WebP (il più leggero per il web), JPG (universale) o PNG (senza perdita e con trasparenza) in Converti nel formato.',
      },
      {
        title: 'Imposta il riempimento per l\'output JPG',
        description:
          'Quando converti grafiche PNG, WebP o SVG trasparenti in JPG, clicca il campione Colore di riempimento trasparenza per scegliere uno sfondo bianco, nero o qualsiasi colore esadecimale.',
      },
      {
        title: 'Regola il cursore qualità se serve',
        description:
          'Trascina il cursore Qualità tra il 10% e il 100% per output WebP o JPG (il cursore si disattiva automaticamente per il PNG senza perdita).',
      },
      {
        title: 'Converti e controlla i risultati',
        description:
          'Clicca Converti tutto per ricodificare la coda con le impostazioni aggiornate, poi clicca Confronta su un elemento per verificare fedeltà visiva e variazione in byte.',
      },
      {
        title: 'Scarica singoli file o ZIP',
        description:
          'Salva ogni file convertito con il suo pulsante Scarica, o clicca Scarica tutto (ZIP) per scaricare l\'intero blocco insieme.',
      },
    ],
    features: [
      {
        title: 'Ampio supporto ai formati di input',
        description:
          'Converte foto HEIC/HEIF di iPhone, grafiche vettoriali SVG, file BMP legacy, immagini WebP, PNG e JPEG direttamente nel tuo browser.',
      },
      {
        title: 'Conversione sicura con trasparenza',
        description:
          'Preserva la trasparenza alfa convertendo in PNG o WebP e ti permette di personalizzare il colore di sfondo opaco convertendo in JPG.',
      },
      {
        title: 'Conversione in blocco ed export ZIP',
        description:
          'Converti intere cartelle di immagini in una volta con impostazioni di qualità uniformi e scaricale tutte con un clic.',
      },
      {
        title: 'Motore privato lato client',
        description:
          'Anche la decodifica HEIC avviene localmente via WebAssembly nel tuo browser: zero caricamenti su server e zero filigrane.',
      },
    ],
    faqs: [
      {
        question: 'Quali formati di input e output supporta questo convertitore di immagini?',
        answer:
          'Puoi caricare file JPG, PNG, WebP, HEIC/HEIF di iPhone, SVG, BMP, GIF e AVIF decodificati dal browser, fino a 20 MB per immagine. Gli output vengono esportati puliti come WebP (il più leggero per il web), JPG (universale) o PNG (senza perdita e con trasparenza).',
      },
      {
        question: 'Come vengono convertite le foto HEIC e HEIF di iPhone senza un server?',
        answer:
          'Il nostro convertitore carica un decodificatore HEIC WebAssembly lato client direttamente nella scheda del tuo browser. Decodifica il contenitore HEIC localmente sulla tua CPU e disegna la foto su HTML5 Canvas per esportare file standard JPG, PNG o WebP.',
      },
      {
        question: 'Perché il cursore Qualità è disattivato quando è selezionato PNG?',
        answer:
          'Il PNG usa la compressione DEFLATE senza perdita, cioè codifica ogni pixel con esattezza senza scartare dettagli visivi in base a un livello di qualità percentuale. Il cursore si attiva appena passi a WebP o JPG.',
      },
      {
        question: 'Cosa succede alle aree trasparenti convertendo PNG o WebP in JPG?',
        answer:
          'Poiché il JPG non supporta un canale di trasparenza alfa, i pixel trasparenti vanno appiattiti su uno sfondo solido. Usa il selettore Colore di riempimento trasparenza (bianco per impostazione predefinita) per fondere pulito i bordi trasparenti su qualsiasi colore.',
      },
      {
        question: 'Posso convertire immagini AVIF salvate da siti moderni in JPG o PNG?',
        answer:
          'Sì, le versioni moderne di Chrome, Edge, Firefox e Safari decodificano i file AVIF nativamente nel tuo browser. Una volta decodificati, lo strumento li esporta in JPG, PNG o WebP universali senza alcun servizio cloud esterno.',
      },
      {
        question: 'I loghi vettoriali SVG si conservano bene convertendoli in PNG o WebP?',
        answer:
          'Sì, i file SVG autonomi con tracciati, riempimenti e gradienti incorporati rasterizzano puliti alle loro dimensioni intrinseche con gli sfondi trasparenti preservati. Nota che gli SVG che dipendono da font web esterni o URL di immagini remote sono limitati dalla sicurezza Canvas del browser.',
      },
      {
        question: 'Convertire un JPG con perdita in PNG ripristina i dettagli mancanti della foto?',
        answer:
          'No, risalvare un JPG già compresso come PNG non può recuperare i dettagli scartati durante la codifica JPEG originale e di solito aumenta molto il peso del file. Scegli PNG solo se ti serve archiviazione senza perdita prima di future modifiche in più fasi.',
      },
      {
        question: 'Posso mescolare formati diversi in un unico blocco di conversione?',
        answer:
          'Sì, puoi trascinare foto HEIC, screenshot BMP, loghi PNG e download AVIF insieme nella stessa coda. Ogni file valido si converte nel formato di destinazione scelto e si scarica pulito in un unico archivio ZIP.',
      },
      {
        question: 'Cosa succede caricando una GIF animata nel convertitore generale?',
        answer:
          'Canvas disegna il primo fotogramma della GIF e converte quel fotogramma in un file statico WebP, JPG o PNG. Se vuoi rimpicciolire una GIF animata mantenendo il movimento, passa al nostro strumento Compressore GIF.',
      },
      {
        question: 'Perché l\'output WebP ha ridotto così tanto il peso del mio screenshot PNG?',
        answer:
          'A differenza del PNG senza perdita, WebP all\'85% di qualità combina compressione predittiva moderna con supporto completo alla trasparenza alfa. Questo di solito rimpicciolisce molto screenshot di interfacce e ritagli di prodotto mantenendo leggibilità nitida e bordi morbidi.',
      },
      {
        question: 'Come controllo la qualità prima/dopo prima di salvare le immagini convertite?',
        answer:
          'Clicca Confronta su una scheda convertita (o clicca la sua miniatura) per aprire la finestra di confronto interattiva. Puoi confrontare i pesi in byte di originale e convertito e trascinare il cursore diviso su bordi e testo.',
      },
      {
        question: 'Le mie foto o screenshot sensibili vengono mai inviati su internet?',
        answer:
          'Mai: decodifica, appiattimento dei colori e ricodifica avvengono rigorosamente nella memoria locale del tuo browser. Nulla viene caricato, salvato su server o condiviso con terzi.',
      },
      {
        question: 'Quale qualità è consigliata convertendo foto in WebP o JPG?',
        answer:
          'L\'85% predefinito funziona bene sia per asset WebP sia per JPG universali, senza blocchi di compressione evidenti. Puoi alzarlo al 92%–95% per foto di portfolio o abbassarlo al 70%–75% per limiti di banda stretti.',
      },
      {
        question: 'Come vengono generati i nomi dei file di output dopo la conversione?',
        answer:
          'Ogni file convertito mantiene il nome base ripulito e cambia automaticamente l\'estensione in .webp, .jpg o .png. Puoi vedere il nome esatto di output e il peso convertito in byte su ogni scheda prima di scaricare.',
      },
      {
        question: 'Posso convertire bitmap BMP di vecchi software Windows in WebP o JPG?',
        answer:
          'Sì, i file .bmp non compressi si decodificano nativamente nel browser e si convertono subito in file JPG o WebP compatti. Eliminare le intestazioni bitmap non compresse taglia drasticamente il peso di archiviazione.',
      },
      {
        question: 'Cosa succede se un file del blocco è danneggiato o illeggibile?',
        answer:
          'Ogni immagine si elabora in modo indipendente, quindi un solo file danneggiato o non supportato mostra un badge di errore senza fermare il resto della coda. Tutte le immagini valide si convertono comunque e si impacchettano nel download ZIP.',
      },
      {
        question: 'La conversione via HTML5 Canvas rimuove i metadati EXIF nascosti della fotocamera?',
        answer:
          'Sì, disegnare un\'immagine su Canvas e codificare un nuovo JPG, PNG o WebP produce una bitmap pulita senza tag GPS EXIF né metadati di serie della fotocamera. Questo protegge la privacy quando condividi i file convertiti online.',
      },
      {
        question: 'Posso convertire immagini incollate direttamente dagli appunti?',
        answer:
          'Sì, copia un\'immagine o fai uno screenshot e premi Ctrl+V ovunque sulla pagina per aggiungerla direttamente alla coda del convertitore. Si codifica subito nel formato di destinazione attivo.',
      },
      {
        question: 'C\'è un limite giornaliero o di numero di file per le conversioni in blocco?',
        answer:
          'No, non ci sono account, filigrane o quote giornaliere di conversione. Sei limitato solo dal controllo di 20 MB per file e dalla RAM disponibile del browser del tuo dispositivo.',
      },
      {
        question: 'Quando usare Scarica tutto (ZIP) invece del download singolo?',
        answer:
          'Usa il pulsante Scarica di ogni scheda quando salvi rapidamente una sola foto convertita. Quando due o più immagini finiscono di convertirsi, clicca Scarica tutto (ZIP) nella barra di riepilogo del blocco per raggrupparle in converted_images_compressmypic.zip.',
      },
    ],
    relatedSlugs: ['/', '/image-resizer', '/image-to-pdf', '/favicon-generator'],
  },
  {
    slug: '/rotate-flip-image',
    name: 'Ruota e specchia immagine',
    shortDescription: 'Ruota di 90°, 180°, con angoli personalizzati e specchia le immagini in orizzontale o verticale.',
    category: 'crop-edit',
    seoTitle: 'Ruota immagine online gratis – 90°, specchia e raddrizza',
    seoDescription:
      'Ruota immagini di 90°, 180° o con qualsiasi angolo e specchia in orizzontale o verticale nel browser. Elabora foto in blocco e scarica tutto in ZIP, gratis.',
    h1: 'Ruota e specchia immagine online',
    subtitle:
      'Sistema scatti laterali, specchia selfie al contrario e raddrizza orizzonti storti ruotando le immagini direttamente nel browser. Ideale per fotografi, studenti che scansionano documenti e creator: tutto si trasforma localmente a piena risoluzione con export ZIP in blocco.',
    howToSteps: [
      {
        title: 'Carica una o più immagini',
        description:
          'Trascina file JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB ciascuno nella zona di caricamento, o incolla direttamente con Ctrl+V.',
      },
      {
        title: 'Usa le rotazioni rapide di 90° e 180°',
        description:
          'Clicca Ruota 90° a sinistra, Ruota 90° a destra o 180° in Rotazione rapida per girare subito ogni immagine della coda.',
      },
      {
        title: 'Specchia in orizzontale o verticale',
        description:
          'Attiva Specchia orizzontale per specchiare da sinistra a destra o Specchia verticale per invertire dall\'alto in basso — combinale con qualsiasi angolo di rotazione.',
      },
      {
        title: 'Regola angoli personalizzati (da -180° a +180°)',
        description:
          'Trascina il cursore Angolo di rotazione per raddrizzare scatti storti con gradi esatti, poi clicca Applica angolo (o Reimposta a 0° in qualsiasi momento).',
      },
      {
        title: 'Scegli il Formato di output',
        description:
          'Seleziona Originale, JPG, PNG o WebP per il flusso di lavoro di destinazione; le modifiche si applicano subito a tutte le immagini.',
      },
      {
        title: 'Confronta visivamente e scarica',
        description:
          'Clicca Confronta su una scheda per controllare l\'orientamento prima/dopo, poi clicca Scarica o Scarica tutto (ZIP) per i blocchi.',
      },
    ],
    features: [
      {
        title: 'Rotazione rapida di 90° e angolo personalizzato',
        description:
          'Ruota pulito a passi di 90° o imposta qualsiasi grado esatto con calcolo automatico dei limiti del canvas così gli angoli non vengono mai tagliati.',
      },
      {
        title: 'Specchio e inversione istantanei',
        description:
          'Specchia le immagini in orizzontale (selfie specchiato) o in verticale (riflesso capovolto) con un solo clic.',
      },
      {
        title: 'Trasformazione in blocco',
        description:
          'Applica la stessa rotazione o specchiatura a più foto caricate contemporaneamente ed esportale tutte in ZIP.',
      },
      {
        title: 'Output con perdita minima',
        description:
          'Scegli il formato Originale, PNG per la conservazione senza perdita, o WebP/JPG con qualità regolabile.',
      },
    ],
    faqs: [
      {
        question: 'Ruotare una foto con un angolo personalizzato come 15° taglia gli angoli?',
        answer:
          'No, lo strumento calcola automaticamente larghezza e altezza trigonometriche espanse per angoli diversi da 90°. Allarga Canvas quanto basta perché ogni pixel degli angoli originali resti dentro la cornice.',
      },
      {
        question: 'Cosa riempie gli angoli triangolari creati da un\'inclinazione personalizzata?',
        answer:
          'Se mantieni il formato Originale su PNG/WebP o scegli l\'output PNG/WebP, quegli angoli esterni extra restano completamente trasparenti. Se l\'output è JPG, che non supporta l\'alfa, gli angoli si riempiono di bianco solido pulito.',
      },
      {
        question: 'Posso ruotare di 90° e specchiare in orizzontale allo stesso tempo?',
        answer:
          'Sì, Specchia orizzontale e Specchia verticale sono interruttori indipendenti accanto a qualsiasi angolo di rotazione. Ogni scheda di risultato mostra lo stato combinato esatto, come Ruotata 90° · Specchiata O.',
      },
      {
        question: 'Perché ruotare di 90° o 270° scambia larghezza e altezza in pixel?',
        answer:
          'Ruotando un\'immagine orizzontale 1920×1080 di 90° si ruotano i suoi assi e diventa un\'immagine verticale 1080×1920. Mantenere i limiti esatti scambiati evita di stirare o ritagliare qualsiasi lato della foto.',
      },
      {
        question: 'Come sistemo un selfie al contrario con testo specchiato?',
        answer:
          'Carica la foto, clicca Reimposta a 0° se non vuoi una rotazione di 90° (lo strumento parte da 90° al caricamento) e attiva Specchia orizzontale. Il testo su magliette o cartelli torna subito nella direzione normale di lettura.',
      },
      {
        question: 'Perché le immagini ruotano di 90° automaticamente subito dopo il caricamento?',
        answer:
          'Lo stato predefinito di Rotazione rapida parte da 90° così le foto laterali comuni si raddrizzano subito al caricamento. Puoi regolare con Ruota 90° a sinistra, 180°, il cursore dell\'angolo o cliccare Reimposta a 0° quando vuoi solo specchiare.',
      },
      {
        question: 'Quali formati di immagine posso ruotare e specchiare qui?',
        answer:
          'Carica file JPG, PNG, WebP, HEIC/HEIF, GIF, BMP o SVG fino a 20 MB ciascuno. Le opzioni di export coprono Originale, JPG, PNG e WebP via rendering locale HTML5 Canvas.',
      },
      {
        question: 'Posso ruotare in blocco una cartella di foto laterali del telefono?',
        answer:
          'Sì, trascina tutte le foto che il browser gestisce bene, clicca una volta i pulsanti di rotazione o specchiatura desiderati e ogni elemento si aggiorna insieme. Quando più file finiscono, Scarica tutto (ZIP) esporta rotated_images_compressmypic.zip.',
      },
      {
        question: 'Ruotare un PNG trasparente mantiene lo sfondo trasparente?',
        answer:
          'Sì, le zone trasparenti restano trasparenti quando è selezionato l\'output Originale (da PNG/WebP), PNG o WebP. Funziona sia per rotazioni nette di 90° sia per raddrizzamenti con inclinazione arbitraria.',
      },
      {
        question: 'Come annullo più rotazioni senza ricaricare la pagina?',
        answer:
          'Clicca Reimposta a 0° proprio sopra il cursore Angolo di rotazione in qualsiasi momento. Azzera subito la rotazione a 0° e disattiva entrambi gli specchiamenti orizzontale e verticale in tutta la coda.',
      },
      {
        question: 'Perché il peso del file può cambiare leggermente dopo aver ruotato un JPEG?',
        answer:
          'Ruotare i pixel in HTML5 Canvas ricodifica il JPEG al 90% di qualità invece di modificare i blocchi DCT senza perdita. Scegliere l\'output PNG preserva i pixel senza perdita se vuoi zero artefatti di compressione.',
      },
      {
        question: 'C\'è un modo facile per ispezionare prima e dopo il raddrizzamento?',
        answer:
          'Clicca Confronta su una scheda (o clicca la sua miniatura) per aprire la finestra Confronto ruota e specchia. Puoi ispezionare i bordi allineati con il cursore interattivo prima/dopo prima di salvare.',
      },
      {
        question: 'Questo strumento rispetta correttamente l\'orientamento delle foto iPhone?',
        answer:
          'Sì, i browser moderni e il nostro caricatore HEIC normalizzano l\'orientamento EXIF decodificando in Canvas prima di applicare l\'angolo selezionato. Ciò che vedi nella miniatura della scheda corrisponde ai pixel dentro il file scaricato.',
      },
      {
        question: 'Posso raddrizzare una scansione storta con piccoli incrementi di 1°?',
        answer:
          'Sì, trascina il cursore Angolo di rotazione tra -180° e +180° (passo 1°) e rilascia per vedere il documento raddrizzato. Clicca Applica angolo se lo regoli con le frecce della tastiera per applicarlo a tutti i file in coda.',
      },
      {
        question: 'I miei documenti o foto personali vengono caricati su un server?',
        answer:
          'No, rotazione e specchiatura avvengono al 100% localmente nel tuo browser via trasformazioni Canvas 2D. Le tue immagini non lasciano mai il tuo computer o smartphone.',
      },
      {
        question: 'Cosa succede ruotando una GIF animata?',
        answer:
          'Ruotare una GIF estrae e trasforma il primo fotogramma in un\'immagine statica. La rotazione animata multi-fotogramma non è supportata direttamente in questo strumento.',
      },
      {
        question: 'Posso specchiare o ruotare screenshot incollati direttamente dagli appunti?',
        answer:
          'Sì, premi Ctrl+V (o Cmd+V) ovunque sulla pagina dopo aver copiato un\'immagine o uno screenshot. Entra nella coda del blocco e applica subito le impostazioni attive di rotazione e specchiatura.',
      },
      {
        question: 'C\'è un limite di peso o numero di rotazioni?',
        answer:
          'I singoli caricamenti possono arrivare a 20 MB per file così il browser resta reattivo. Entro questo limite puoi ruotare, specchiare, reimpostare e riesportare tutte le foto che vuoi, senza account, limiti giornalieri o filigrane.',
      },
      {
        question: 'Posso passare a WebP mentre ruoto un blocco di PNG?',
        answer:
          'Sì, cliccando WebP in Formato di output ritrasformi ed esporti subito il blocco come immagini WebP ruotate e leggere. Puoi cambiare formato avanti e indietro senza ricaricare.',
      },
      {
        question: 'Ruota e specchia funziona bene su telefoni e tablet touch?',
        answer:
          'Sì, tutti i pulsanti di rotazione, gli interruttori di specchiatura e il cursore dell\'angolo touch funzionano su Safari mobile e Chrome Android. Puoi anche scaricare singole foto direttamente nel rullino o nella cartella Download del dispositivo.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/', '/image-converter', '/remove-image-metadata'],
  },
  {
    slug: '/image-to-pdf',
    name: 'Immagine in PDF',
    shortDescription: 'Unisci immagini JPG, PNG, WebP e HEIC in un PDF multi-pagina.',
    category: 'convert',
    seoTitle: 'Immagine in PDF gratis – Unisci foto in PDF',
    seoDescription:
      'Trasforma più foto in un unico documento con il convertitore da immagine a PDF nel browser. Riordina le pagine, scegli A4 o Letter e salva offline, gratis.',
    h1: 'Convertitore da immagine a PDF',
    subtitle:
      'Ideale per studenti, freelance, commercialisti e chiunque invii documenti o ricevute, questo convertitore privato da immagine a PDF unisce più foto in un unico PDF nitido multi-pagina. Riordina le pagine liberamente, scegli A4, Letter USA o Adatta all\'immagine, regola margini e qualità e crea il documento localmente senza caricare nulla su server.',
    howToSteps: [
      {
        title: 'Trascina le immagini da includere nel PDF',
        description:
          'Carica una o più immagini JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB ciascuna (o incolla con Ctrl+V). Ogni immagine diventa una pagina.',
      },
      {
        title: 'Disponi l\'ordine delle pagine',
        description:
          'Controlla l\'elenco Ordine pagine sotto i controlli e usa i pulsanti Su, Giù o Rimuovi per mettere in sequenza ricevute, slide o scansioni con precisione.',
      },
      {
        title: 'Seleziona Dimensione pagina e Orientamento',
        description:
          'Scegli A4 (210 × 297 mm), Letter USA (8,5 × 11 pollici) o Adatta alla dimensione dell\'immagine, e scegli Auto (corrisponde alla foto), Verticale o Orizzontale.',
      },
      {
        title: 'Regola Margini e Posizionamento immagine',
        description:
          'Scegli Nessun margine (sanguinatura), Margine piccolo o Margine medio, e seleziona Contieni (immagine intera) o Copri (riempi pagina).',
      },
      {
        title: 'Imposta nome file e Qualità immagine PDF',
        description:
          'Personalizza il Nome file PDF (che termina in .pdf) e sposta il cursore Qualità immagine PDF tra 40% e 98% per bilanciare nitidezza e peso totale del documento.',
      },
      {
        title: 'Crea e scarica il tuo PDF',
        description:
          'Clicca Crea e scarica PDF per generare il file localmente; un banner verde di conferma ti permette anche di cliccare Scarica di nuovo il PDF.',
      },
    ],
    features: [
      {
        title: 'Ordinamento multi-pagina',
        description:
          'Riordina facilmente le immagini caricate prima di generare il PDF così ricevute, scansioni e slide compaiono nella sequenza esatta che vuoi.',
      },
      {
        title: 'Formati pagina flessibili e orientamento automatico',
        description:
          'Esporta in A4 o Letter USA standard con Verticale/Orizzontale automatico per pagina, o scegli Adatta all\'immagine per far corrispondere le proporzioni esatte di ogni foto.',
      },
      {
        title: 'Margini regolabili e qualità PDF',
        description:
          'Scegli margini Nessuno, Piccolo o Medio e controlla la qualità delle immagini incorporate per mantenere il PDF leggero per le email.',
      },
      {
        title: 'Zero caricamenti su server',
        description:
          'Documenti, contratti e scansioni sensibili non toccano mai un server esterno: il binario PDF viene costruito localmente nella memoria del browser.',
      },
    ],
    faqs: [
      {
        question: 'Questo convertitore da immagine a PDF è sicuro per passaporti, documenti e ricevute fiscali?',
        answer:
          'Sì, i tuoi documenti non vengono mai caricati su server remoti o code cloud. Il nostro builder PDF in JavaScript codifica ogni pagina nella RAM locale del tuo browser e scrive il .pdf finale direttamente sul tuo dispositivo.',
      },
      {
        question: 'Quali formati pagina sono supportati?',
        answer:
          'Puoi standardizzare ogni pagina su A4 (210 × 297 mm) o Letter USA (8,5 × 11 pollici) per stampa e archiviazione uniformi. In alternativa, scegli Adatta alla dimensione dell\'immagine così ogni pagina PDF corrisponde alle dimensioni e alle proporzioni native della foto.',
      },
      {
        question: 'Come funziona l\'orientamento automatico con foto orizzontali e verticali miste?',
        answer:
          'Quando l\'Orientamento è su Auto (corrisponde alla foto), le immagini orizzontali ricevono automaticamente pagine orizzontali mentre le verticali ricevono pagine verticali. Puoi bloccare tutte le pagine su Verticale o Orizzontale quando serve un layout di stampa uniforme.',
      },
      {
        question: 'Qual è la differenza tra Contieni e Copri?',
        answer:
          'Contieni (immagine intera) scala ogni foto in proporzione così l\'intera immagine entra nei margini scelti senza tagliare nulla. Copri (riempi pagina) ingrandisce la foto fino a riempire tutta l\'area stampabile da bordo a bordo, ritagliando l\'eccesso.',
      },
      {
        question: 'Perché il menu Orientamento è disattivato quando scelgo Adatta alla dimensione dell\'immagine?',
        answer:
          'Adatta alla dimensione dell\'immagine dimensiona ogni singola pagina PDF dinamicamente secondo le proporzioni esatte della sua foto, quindi l\'override verticale/orizzontale non si applica. Passa a A4 o Letter USA se vuoi il controllo manuale di Verticale/Orizzontale.',
      },
      {
        question: 'Posso riordinare le pagine dopo aver caricato più file in una volta?',
        answer:
          'Sì, scorri alla sezione Ordine pagine dove ogni pagina mostra un badge numerato, miniatura, dimensioni in pixel e peso del file. Usa i pulsanti freccia Su e Giù su una riga per riordinare le pagine prima di cliccare Crea e scarica PDF.',
      },
      {
        question: 'Come influisce il cursore Qualità immagine PDF sul peso del file?',
        answer:
          'Abbassare la Qualità immagine PDF verso il 60%–75% comprime i flussi JPEG incorporati nel PDF, mantenendo le scansioni multi-pagina compatte per limiti rigidi di email o portali. Alzare verso il 90%–98% preserva testo piccolo più nitido su documenti densi.',
      },
      {
        question: 'Quali formati di file immagine posso unire in un PDF?',
        answer:
          'Puoi mescolare immagini JPG, PNG, WebP, HEIC/HEIF di iPhone, GIF, BMP e SVG (fino a 20 MB per file) in un unico documento PDF. Vengono decodificate localmente nel browser e normalizzate sulle pagine PDF.',
      },
      {
        question: 'Cosa succede alle immagini PNG o WebP trasparenti dentro un PDF?',
        answer:
          'Poiché le pagine PDF standard hanno una tela di carta bianca, gli sfondi trasparenti si compongono puliti su bianco solido prima dell\'incorporazione. Questo evita artefatti scuri inattesi dietro loghi o firme scansionate.',
      },
      {
        question: 'Posso personalizzare il nome del file di output prima di salvare?',
        answer:
          'Sì, digita qualsiasi titolo di documento nel campo Nome file PDF (predefinito compressmypic-document.pdf). Se ometti il suffisso .pdf, l\'esportatore aggiunge .pdf automaticamente al download.',
      },
      {
        question: 'Quante pagine posso unire in un unico documento PDF?',
        answer:
          'Non c\'è un limite artificiale di pagine: puoi unire decine di foto o ricevute in un unico PDF multi-pagina. La capacità pratica dipende solo dalla memoria disponibile del browser del tuo dispositivo e dalla risoluzione in pixel di ogni immagine.',
      },
      {
        question: 'In che cosa differiscono Nessun margine, Margine piccolo e Margine medio?',
        answer:
          'Nessun margine (sanguinatura) estende il posizionamento fino ai bordi della carta, ideale per arte senza bordi o export Adatta all\'immagine. Margine piccolo e Margine medio aggiungono bordi bianchi puliti attorno a ogni pagina per stampa e lettura standard.',
      },
      {
        question: 'Posso aggiungere altre foto dopo aver controllato l\'elenco Ordine pagine?',
        answer:
          'Sì, trascina o sfoglia altri file nella casella di caricamento in alto e si aggiungono alla fine dell\'elenco Ordine pagine. Poi puoi riordinare o eliminare singole pagine prima di generare il PDF aggiornato.',
      },
      {
        question: 'Lo strumento aggiunge un logo a piè di pagina, un timbro o una filigrana al mio PDF?',
        answer:
          'No, CompressMyPic produce pagine PDF completamente pulite con solo le tue immagini nei margini selezionati. Nessun marchio, intestazione o filigrana viene mai aggiunto.',
      },
      {
        question: 'Perché compare il messaggio Codifica pagina X di Y?',
        answer:
          'I PDF multi-pagina codificano ogni immagine in sequenza nella memoria del browser per evitare di bloccare la scheda o saturare la RAM. Quando l\'ultima pagina è codificata, la barra verde di conferma mostra il numero totale di pagine e il peso esatto del PDF in byte.',
      },
      {
        question: 'Cosa fare se perdo o chiudo la finestra di download automatico del browser?',
        answer:
          'Tieni aperta la scheda: la scheda verde di conferma resta visibile con un pulsante Scarica di nuovo il PDF. Cliccandolo, risalvi subito il Blob generato esatto senza ricodificare.',
      },
      {
        question: 'Posso incollare screenshot direttamente nel builder PDF?',
        answer:
          'Sì, premi Ctrl+V (o Cmd+V su Mac) per aggiungere uno screenshot dagli appunti direttamente nella coda Ordine pagine. Raggruppare più screenshot di bug o ricevute chat in un unico PDF diventa veloce.',
      },
      {
        question: 'Generare un PDF carica metadati come tag GPS EXIF?',
        answer:
          'No, ogni immagine della pagina viene decodificata e disegnata su HTML5 Canvas prima di essere incorporata nel flusso di byte del PDF. Di conseguenza, le intestazioni EXIF originali della fotocamera e le coordinate GPS sono escluse automaticamente durante la conversione.',
      },
      {
        question: 'Posso convertire foto HEIC di iPhone direttamente in PDF senza convertirle prima in JPG?',
        answer:
          'Sì, trascina foto .heic o .heif direttamente nella zona di caricamento e il browser le decodifica localmente al volo. Compaiono subito nell\'elenco Ordine pagine pronte da unire in PDF A4 o Letter.',
      },
      {
        question: 'Lo strumento Immagine in PDF funziona su smartphone e Chromebook?',
        answer:
          'Sì, tutto gira in JavaScript standard del browser su iOS, Android, Windows, macOS e ChromeOS. Non ti servono Adobe Acrobat, estensioni del browser o software PDF desktop installati.',
      },
    ],
    relatedSlugs: ['/image-converter', '/', '/remove-image-metadata', '/image-resizer'],
  },
  {
    slug: '/image-metadata-viewer',
    name: 'Visualizzatore di metadati immagine',
    shortDescription: 'Ispeziona impostazioni EXIF della fotocamera, coordinate GPS e dati PNG/WebP.',
    category: 'privacy',
    seoTitle: 'Visualizza metadati immagine – EXIF e GPS gratis',
    seoDescription:
      'Ispeziona tag EXIF della fotocamera, coordinate GPS, date e blocchi PNG o WebP con il visualizzatore privato di metadati. Copia o esporta il JSON completo.',
    h1: 'Visualizzatore di metadati immagine e EXIF',
    subtitle:
      'Pensato per fotografi che controllano le impostazioni dell\'obiettivo, sviluppatori che debuggano intestazioni e chiunque controlli la privacy prima di pubblicare, il nostro visualizzatore di metadati immagine nel browser ispeziona i byte grezzi del file localmente. Rivela tag EXIF nascosti, coordinate GPS, date e blocchi PNG o WebP senza caricare un solo pixel.',
    howToSteps: [
      {
        title: 'Trascina o seleziona un\'immagine da ispezionare',
        description:
          'Carica un\'immagine JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB (o incolla con Ctrl+V). Le intestazioni binarie grezze vengono analizzate subito sul tuo dispositivo.',
      },
      {
        title: 'Controlla il banner Riepilogo e Rischio privacy',
        description:
          'Vedi il formato contenitore rilevato, le dimensioni, il peso del file e se sono stati trovati tipi di tag di metadati incorporati sensibili.',
      },
      {
        title: 'Controlla eventuali avvisi di Posizione GPS',
        description:
          'Se esistono tag GPSIFD, un riquadro di avviso evidenzia latitudine e longitudine decodificate esatte e offre un salto con un clic a Rimuovi metadati immagine.',
      },
      {
        title: 'Sfoglia la tabella Metadati estratti',
        description:
          'Scorri le voci raggruppate (Fotocamera, EXIF, GPS, blocchi PNG/WebP, Info file) con etichette ambra Tag privacy che marcano i campi sensibili.',
      },
      {
        title: 'Copia o esporta il JSON, o rimuovi i tag',
        description:
          'Clicca Copia JSON per copiare l\'intero report, Esporta JSON per salvare un file .json, o clicca Rimuovi metadati per ripulire i tag privati.',
      },
    ],
    features: [
      {
        title: 'Rilevamento approfondito EXIF e GPS',
        description:
          'Analizza le tabelle binarie TIFF IFD0, ExifIFD e GPSIFD in JPEG, eXIf PNG e blocchi EXIF WebP per scoprire tag nascosti di posizione e dispositivo.',
      },
      {
        title: 'Evidenziazione del rischio privacy',
        description:
          'Segnala automaticamente campi sensibili come latitudine/longitudine GPS, numeri di serie della fotocamera, nomi di artisti e date di scatto.',
      },
      {
        title: 'Ispezione blocchi PNG e WebP',
        description:
          'Legge profondità colore IHDR PNG, DPI fisico pHYs, blocchi tEXt/iTXt/tIME e flag alfa/animazione VP8X WebP.',
      },
      {
        title: 'Export report JSON',
        description:
          'Copia tutti i campi di metadati analizzati negli appunti o scarica un report JSON pulito con un clic.',
      },
    ],
    faqs: [
      {
        question: 'Che tipo di informazioni nascoste può rivelare questo visualizzatore di metadati immagine?',
        answer:
          'A seconda del formato contenitore, il nostro parser estrae localmente campi TIFF IFD0, ExifIFD e GPSIFD dalle intestazioni dell\'immagine. Rivela dettagli come marca e modello della fotocamera, specifiche dell\'obiettivo, tempo di otturazione, ISO, apertura, date, software di modifica, note di copyright e coordinate GPS decimali.',
      },
      {
        question: 'Ispeziona anche le intestazioni tecniche PNG e WebP oltre all\'EXIF JPEG?',
        answer:
          'Sì, oltre ai segmenti EXIF standard JPEG, il visualizzatore legge blocchi tecnici incorporati dentro file PNG e WebP. Puoi vedere profondità bit IHDR PNG, densità DPI fisica pHYs, blocchi di testo tEXt/iTXt/tIME, blocchi PNG eXIf e flag alfa o animazione VP8X WebP.',
      },
      {
        question: 'Perché una foto scaricata da WhatsApp o Instagram mostra zero tag EXIF?',
        answer:
          'Social network e app di messaggistica rimuovono automaticamente intestazioni EXIF, fotocamera e GPS quando carichi foto sui loro server. I file originali dal rullino del telefono o da una reflex conservano tutti i metadati.',
      },
      {
        question: 'Come rileva se una foto rivela la mia posizione?',
        answer:
          'Quando esistono tag razionali GPSIFD nell\'intestazione dell\'immagine, il visualizzatore converte automaticamente gradi, minuti e secondi in latitudine e longitudine decimali. Le coordinate rilevate attivano un banner ambra Coordinate di posizione GPS rilevate proprio sopra la tabella delle proprietà.',
      },
      {
        question: 'Cosa significano le etichette ambra Tag privacy nella tabella dei metadati?',
        answer:
          'Le voci marcate con un badge ambra Tag privacy contengono informazioni personali o identificative del dispositivo. Esempi tipici: coordinate GPS, date di scatto esatte, nomi di fotografo/artista, numeri di serie della fotocamera e stringhe di modello del dispositivo.',
      },
      {
        question: 'Posso rimuovere i metadati sensibili subito dopo aver ispezionato un\'immagine?',
        answer:
          'Sì, quando vengono rilevati tag sensibili compare un pulsante arancione Rimuovi metadati nella barra di riepilogo (più un collegamento dentro il riquadro di avviso GPS). Cliccandolo vai direttamente al nostro strumento Rimuovi metadati immagine.',
      },
      {
        question: 'Come funziona l\'export JSON per sviluppatori o documentazione?',
        answer:
          'Clicca Copia JSON nella barra di riepilogo per copiare subito il report strutturato ImageMetadataReport negli appunti. Se ti serve un file per audit o segnalazioni, clicca Esporta JSON per scaricare <nomefile>_metadata.json localmente.',
      },
      {
        question: 'Perché i blocchi EXIF binari completi non vengono estratti per alcuni file HEIC o GIF?',
        answer:
          'Il nostro parser binario approfondito punta nativamente a contenitori JPEG, PNG e WebP in JavaScript. Per file HEIC, GIF, BMP e SVG, il visualizzatore riporta comunque informazioni affidabili su contenitore, peso e dimensioni in pixel.',
      },
      {
        question: 'Le foto private con posizione GPS vengono mai caricate quando le ispeziono?',
        answer:
          'No, l\'ispezione binaria avviene al 100% localmente nel tuo browser con analisi dei byte via File ArrayBuffer. Inviare foto private non ripulite su internet vanificherebbe la privacy, quindi zero byte lasciano il tuo computer o telefono.',
      },
      {
        question: 'Visualizzare i metadati modifica, comprime o elimina qualcosa nel mio file?',
        answer:
          'No, il Visualizzatore di metadati immagine è strettamente di sola lettura. Legge le intestazioni dalla memoria del browser per mostrarti cosa c\'è dentro senza modificare il tuo file originale.',
      },
      {
        question: 'Posso ispezionare più file di fila senza aggiornare la pagina?',
        answer:
          'Sì, clicca l\'icona rossa del cestino (Pulisci) nella barra di riepilogo per tornare alla zona di caricamento in qualsiasi momento. Poi puoi trascinare o incollare l\'immagine successiva per generare un nuovo report.',
      },
      {
        question: 'Perché incollare uno screenshot con Ctrl+V di solito non mostra tag della fotocamera?',
        answer:
          'Gli appunti del sistema operativo passano bitmap raster grezze invece dei file JPEG originali della fotocamera. Poiché le immagini dagli appunti mancano di intestazioni della fotocamera, gli screenshot incollati mostrano dimensioni e informazioni sul formato senza blocchi EXIF o GPS.',
      },
      {
        question: 'Qual è il peso massimo supportato per l\'ispezione dei metadati?',
        answer:
          'Puoi ispezionare singole immagini fino a 20 MB direttamente nel tuo browser. Questo limite copre facilmente JPEG di reflex a piena risoluzione, export PNG dettagliati e file BMP non compressi.',
      },
      {
        question: 'Come verifico che un altro strumento abbia davvero rimosso tutti i tag EXIF da una foto?',
        answer:
          'Trascina il file ripulito di nuovo in questo visualizzatore di metadati immagine per ispezionarne i byte grezzi. Se la ripulitura è riuscita, il banner verde conferma Nessun tag EXIF, GPS o nascosto della fotocamera rilevato e non compare alcun avviso GPS.',
      },
      {
        question: 'Il visualizzatore rileva XMP Adobe o commenti di testo PNG?',
        answer:
          'Sì, i blocchi di testo chiave-valore PNG tEXt e iTXt — come Software, Autore, Commento o Ora di creazione — vengono estratti puliti nella tabella dei metadati. Anche eventuali blocchi PNG eXIf incorporati e blocchi EXIF WebP vengono decodificati insieme.',
      },
      {
        question: 'Cosa significa il blocco pHYs sugli screenshot PNG?',
        answer:
          'Il blocco PNG pHYs memorizza la densità fisica dei pixel (DPI / pixel per metro) pensata per stampa o ridimensionamento del layout. Il nostro visualizzatore legge e converte questi valori così puoi vedere se un\'immagine specifica 72 DPI, 96 DPI o 300 DPI.',
      },
      {
        question: 'Perché l\'estensione del nome file a volte differisce da containerFormat?',
        answer:
          'A volte un file PNG o WebP viene rinominato con estensione .jpg (o viceversa). Poiché il nostro visualizzatore ispeziona i veri byte magici binari invece di fidarsi del solo nome file, riporta il vero formato contenitore sottostante.',
      },
      {
        question: 'Posso controllare i metadati delle immagini su browser mobili iPhone o Android?',
        answer:
          'Sì, apri la pagina in Safari mobile o Chrome e scegli una foto direttamente dal rullino. Puoi controllare coordinate GPS nascoste e dettagli della fotocamera sul telefono prima di pubblicare foto online.',
      },
      {
        question: 'Perché la mia foto reflex mostra lunghezza focale e tempo di otturazione?',
        answer:
          'Le fotocamere digitali registrano la telemetria di esposizione nella directory binaria ExifIFD nel momento in cui premi l\'otturatore. Campi come ISO, Numero F, Tempo di esposizione, Lunghezza focale, Flash e Modalità di misurazione vengono decodificati localmente per te.',
      },
      {
        question: 'C\'è un costo o una registrazione per ispezionare foto illimitate?',
        answer:
          'No, ispezionare i metadati delle immagini ed esportare report JSON è completamente gratuito, senza account o paywall. Puoi controllare tutte le foto fino a 20 MB che vuoi, senza filigrane o limiti giornalieri.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-dimensions-checker', '/', '/image-converter'],
  },
  {
    slug: '/remove-image-metadata',
    name: 'Rimuovi metadati immagine',
    shortDescription: 'Rimuovi EXIF, posizione GPS, info della fotocamera e commenti in privato.',
    category: 'privacy',
    seoTitle: 'Rimuovi metadati immagine gratis – EXIF e GPS',
    seoDescription:
      'Rimuovi metadati immagine in sicurezza, inclusi dettagli EXIF e posizione GPS, direttamente nel browser. Rimozione binaria senza perdita per JPG e PNG.',
    h1: 'Rimuovi metadati immagine online',
    subtitle:
      'Pensato per venditori di marketplace, giornalisti, genitori e utenti attenti alla privacy, questo strumento ti permette di rimuovere i metadati immagine in modo permanente prima di condividere foto online. Rimuovi modelli di fotocamera EXIF, coordinate GPS, date di scatto e blocchi di testo nascosti localmente nel browser con rimozione binaria senza perdita o ricodifica pulita su Canvas.',
    howToSteps: [
      {
        title: 'Trascina le foto da ripulire',
        description:
          'Carica una o più immagini JPG, PNG, WebP o HEIC (fino a 20 MB ciascuna) nella casella di caricamento, o incolla con Ctrl+V.',
      },
      {
        title: 'Controlla rimozione automatica e badge di verifica',
        description:
          'I file si ripuliscono subito al caricamento e si riscansionano automaticamente, mostrando quanti tag di metadati sono stati rimossi (es. → 0 rimanenti).',
      },
      {
        title: 'Scegli il Metodo di rimozione se regoli le impostazioni',
        description:
          'Mantieni Rimozione binaria senza perdita (JPG/PNG) per zero ricodifica dei pixel su JPEG e PNG, o scegli Ricodifica completa su canvas per appiattire i pixel pulito.',
      },
      {
        title: 'Imposta Formato di output e Qualità se vuoi',
        description:
          'Seleziona l\'output Originale, JPG, PNG o WebP, regola la Qualità di ricodifica (50%–100%) per WebP/HEIC/ricodifica su canvas e clicca Ripulisci tutto di nuovo.',
      },
      {
        title: 'Scarica file puliti o un ZIP in blocco',
        description:
          'Clicca Scarica pulita sulle singole schede verificate o clicca Scarica tutte pulite (ZIP) per salvare clean_images_no_metadata.zip.',
      },
    ],
    features: [
      {
        title: 'Vera rimozione senza perdita per JPEG e PNG',
        description:
          'Rimuove EXIF, XMP, IPTC, commenti e blocchi PNG tEXt/eXIf a livello binario con zero ricodifica dei pixel.',
      },
      {
        title: 'Output pulito verificato',
        description:
          'Ogni file di output viene riscansionato automaticamente dal nostro parser di metadati per verificare che restino 0 tag sensibili EXIF/GPS.',
      },
      {
        title: 'Pulizia in blocco ed export ZIP',
        description:
          'Pulisci un intero blocco di foto prima di pubblicarle su marketplace, forum o annunci e scaricale insieme in ZIP.',
      },
      {
        title: 'Privacy 100% sul dispositivo',
        description:
          'Gli strumenti privacy devono essere privati: le tue foto originali con dati GPS non lasciano mai il tuo browser.',
      },
    ],
    faqs: [
      {
        question: 'Come funziona la Rimozione binaria senza perdita senza danneggiare la qualità della foto?',
        answer:
          'Su file JPEG e PNG nel formato originale, il nostro pulitore binario analizza direttamente la struttura del contenitore e rimuove i segmenti di metadati (JPEG APP1–APP15/COM e PNG eXIf/tEXt/iTXt/tIME) senza decodificare né ricomprimere un solo pixel.',
      },
      {
        question: 'Cosa succede caricando file WebP o HEIC per rimuovere i metadati?',
        answer:
          'La rimozione binaria dei segmenti senza perdita vale per input JPG e PNG. Per input HEIC o WebP — o quando cambi Formato di output o scegli Ricodifica completa su canvas — lo strumento disegna i pixel su un nuovo Canvas HTML5 per garantire che tutte le intestazioni di metadati vengano eliminate.',
      },
      {
        question: 'Come so con certezza che posizione GPS e tag EXIF sono stati rimossi?',
        answer:
          'Dopo la pulizia di ogni immagine, lo strumento esegue il parser di metadati una seconda volta sul Blob di output e mostra un badge verde (per esempio Rimossi X tag di metadati → 0 rimanenti o Pulito verificato). Nulla è indovinato.',
      },
      {
        question: 'Quali tipi di metadati vengono rimossi dalla pulizia delle foto?',
        answer:
          'Il pulitore rimuove marca, modello, dettagli obiettivo, numeri di serie, impostazioni otturatore e date di scatto EXIF. Rimuove anche tag GPS latitudine/longitudine/altitudine, pacchetti Adobe XMP, campi IPTC, commenti JPEG e blocchi di testo o ora PNG.',
      },
      {
        question: 'Quando scegliere Ricodifica completa su canvas invece di Rimozione binaria senza perdita?',
        answer:
          'Scegli Ricodifica completa su canvas quando vuoi una bitmap nuova di zecca compressa con zero segmenti binari ereditati. Viene usata anche automaticamente quando cambi Formato di output o carichi foto WebP e HEIC.',
      },
      {
        question: 'Quali formati di caricamento accetta Rimuovi metadati immagine?',
        answer:
          'La zona di caricamento accetta file JPG (JPEG), PNG, WebP e HEIC/HEIF di iPhone fino a 20 MB per file. Da lì puoi esportare file puliti in formato Originale, JPG, PNG o WebP.',
      },
      {
        question: 'Il cursore Qualità di ricodifica influisce sui file con Rimozione binaria senza perdita?',
        answer:
          'No, la Rimozione binaria senza perdita salta del tutto la ricodifica dei pixel, quindi i bit visivi JPEG/PNG restano intatti indipendentemente dal cursore. Il cursore Qualità di ricodifica (50%–100%) vale solo per input WebP/HEIC o export con Ricodifica completa su canvas.',
      },
      {
        question: 'Posso rimuovere i metadati da un\'intera cartella di foto per annunci in una volta?',
        answer:
          'Sì, trascina più foto insieme e attendi un attimo che i badge di verifica diventino verdi su tutte le schede. Poi clicca Scarica tutte pulite (ZIP) per scaricare clean_images_no_metadata.zip.',
      },
      {
        question: 'Le mie foto non pulite con coordinate GPS vengono caricate da qualche parte?',
        answer:
          'Mai: ripulire intestazioni GPS e del dispositivo sensibili protegge la privacy solo se avviene localmente. Taglio dei byte binari ed export Canvas avvengono dentro la memoria del tuo browser.',
      },
      {
        question: 'Perché una foto mostra Pulito verificato (0 tag EXIF/GPS) subito dopo il caricamento?',
        answer:
          'Significa che il file originale conteneva già zero blocchi di metadati EXIF, GPS o di testo (comune per screenshot o immagini scaricate da app di messaggistica). Il nostro pulitore verifica comunque l\'output.',
      },
      {
        question: 'Rimuovere i metadati riduce anche il peso del file?',
        answer:
          'Sì, le foto della fotocamera spesso contengono miniature di anteprima EXIF, blocchi XML Adobe XMP e segmenti di colore o commenti. Rimuoverli in modalità Rimozione binaria senza perdita spesso taglia decine di kilobyte senza cambiare la nitidezza dell\'immagine.',
      },
      {
        question: 'La Rimozione binaria senza perdita preserva gli sfondi PNG trasparenti?',
        answer:
          'Sì, i blocchi di dati immagine PNG (IDAT) e la trasparenza alfa restano intatti byte per byte. Vengono rimossi solo i blocchi ancillari di testo, EXIF e timestamp.',
      },
      {
        question: 'Cosa succede se una foto iPhone è stata ruotata via tag Orientamento EXIF?',
        answer:
          'Rimuovere il blocco APP1 grezzo senza perdita elimina il flag di orientamento, mentre Ricodifica completa su canvas o decodifica HEIC incorporano l\'orientamento verticale direttamente nei pixel del canvas esportato. Se un JPEG verticale appare laterale dopo la rimozione senza perdita, passa a Ricodifica completa su canvas e clicca Ripulisci tutto di nuovo.',
      },
      {
        question: 'Posso convertire un PNG pulito direttamente in WebP o JPG rimuovendo i metadati?',
        answer:
          'Sì, scegli JPG o WebP in Formato di output, imposta la Qualità di ricodifica e clicca Ripulisci tutto di nuovo. Ogni file si ricodifica pulito via Canvas con tutti i metadati rimossi e il formato scelto applicato.',
      },
      {
        question: 'I miei file originali sul disco vengono modificati o sovrascritti?',
        answer:
          'No, i browser web non possono sovrascrivere file direttamente nelle tue cartelle locali. Cliccando Scarica pulita salvi una copia separata ripulita lasciando intatti gli originali.',
      },
      {
        question: 'Posso ricontrollare l\'output pulito in un ispettore indipendente?',
        answer:
          'Sì, trascina qualsiasi file scaricato nel nostro Visualizzatore di metadati immagine subito dopo il salvataggio. Analizza le intestazioni binarie grezze in modo indipendente così puoi confermare che non restano coordinate GPS o tag della fotocamera.',
      },
      {
        question: 'Il pulitore funziona sui telefoni prima di pubblicare sui marketplace?',
        answer:
          'Sì, apri la pagina in Safari per iOS o Chrome Android e scegli le foto direttamente dal rullino del telefono. Quando compaiono i badge verdi di verifica, puoi scaricare copie pulite direttamente sul dispositivo.',
      },
      {
        question: 'Posso incollare un\'immagine dagli appunti in Rimuovi metadati immagine?',
        answer:
          'Sì, premi Ctrl+V (o Cmd+V su Mac) per inserire un\'immagine copiata o uno screenshot direttamente nella coda di caricamento. Ripulisce automaticamente eventuali blocchi residui e prepara il download pulito.',
      },
      {
        question: 'Perché esiste il pulsante Ripulisci tutto di nuovo se la pulizia parte in automatico?',
        answer:
          'I file si ripuliscono subito al caricamento con le impostazioni attive. Se poi cambi Metodo di rimozione, Formato di output o Qualità di ricodifica, cliccando Ripulisci tutto di nuovo applichi le opzioni aggiornate a tutto il blocco.',
      },
      {
        question: 'C\'è un limite di numero di file o un costo per rimuovere i dati EXIF?',
        answer:
          'Ogni file caricato può arrivare a 20 MB così la memoria del browser resta fluida. Oltre questo limite per file, puoi rimuovere i metadati immagine da foto illimitate senza filigrane, registrazioni o costi.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/', '/image-converter', '/image-to-pdf'],
  },
  {
    slug: '/favicon-generator',
    name: 'Generatore di favicon',
    shortDescription: 'Genera favicon.ico, Apple Touch, Android e file manifest.',
    category: 'create',
    seoTitle: 'Generatore favicon gratis – Crea favicon.ico e icone app',
    seoDescription:
      'Usa il generatore di favicon gratis per creare favicon.ico multi-formato, icone Apple Touch e Android, site.webmanifest e snippet HTML direttamente nel browser.',
    h1: 'Generatore di favicon gratis online',
    subtitle:
      'Pensato per sviluppatori web, fondatori di startup, blogger e maker indipendenti, questo generatore di favicon gratis trasforma qualsiasi logo o grafica in un pacchetto di icone pronto per browser e mobile. Guarda in anteprima la tua icona su schede chiare e scure, regola padding, raggio angoli e riempimento di sfondo e scarica tutto localmente senza caricare nulla su server.',
    howToSteps: [
      {
        title: 'Carica il tuo logo o grafica icona',
        description:
          'Trascina un\'immagine PNG, SVG, JPG, WebP o HEIC fino a 20 MB (PNG o SVG quadrati funzionano meglio) o incolla dagli appunti con Ctrl+V.',
      },
      {
        title: 'Scegli Riempimento di sfondo',
        description:
          'Mantieni attiva la casella Trasparente per icone ritagliate pulite, o deselezionala per scegliere un colore di sfondo solido esadecimale.',
      },
      {
        title: 'Regola Padding e Raggio angoli',
        description:
          'Sposta Padding tra 0% e 25% per dare respiro e trascina Raggio angoli da 0% a 50% per quadrati arrotondati o badge circolari.',
      },
      {
        title: 'Controlla le anteprime delle schede browser',
        description:
          'Controlla le anteprime live in scala 16×16 dentro la scheda chiara Il mio sito e il mockup Scheda in modalità scura.',
      },
      {
        title: 'Scarica singoli file o l\'intero ZIP',
        description:
          'Salva singole dimensioni di icone dalle schede generate o clicca Scarica tutto (ZIP) per scaricare favicon_package_compressmypic.zip.',
      },
      {
        title: 'Copia lo snippet HTML head',
        description:
          'Clicca Copia HTML nel pannello scuro Snippet HTML <head> e incolla i tag <link> direttamente nel template del tuo sito.',
      },
    ],
    features: [
      {
        title: 'Vero favicon.ico multi-formato',
        description:
          'Crea un vero file binario .ico con fotogrammi nitidi 16×16, 32×32 e 48×48 incorporati, non un PNG rinominato.',
      },
      {
        title: 'Set completo di icone web e mobile',
        description:
          'Genera icone 16×16, 32×32, 48×48, 180×180 (Apple Touch), 192×192 e 512×512 (Android/PWA) più site.webmanifest.',
      },
      {
        title: 'Anteprima live della scheda browser',
        description:
          'Guarda come appare la tua icona in scala reale di scheda browser su sfondi chiari e scuri prima di scaricare.',
      },
      {
        title: 'Snippet HTML pronto da incollare',
        description:
          'Copia i tag HTML <link> puliti direttamente nel tuo <head> con un clic.',
      },
    ],
    faqs: [
      {
        question: 'Quali dimensioni e file esatti contiene lo ZIP favicon?',
        answer:
          'Scaricando lo ZIP ottieni un favicon.ico multi-fotogramma (16×16, 32×32 e 48×48), file separati favicon-16x16.png, favicon-32x32.png e favicon-48x48.png, apple-touch-icon.png (180×180), android-chrome-192x192.png e android-chrome-512x512.png. Genera anche un file JSON site.webmanifest pronto da caricare.',
      },
      {
        question: 'favicon.ico è un vero binario ICO multi-fotogramma o un PNG rinominato?',
        answer:
          'Il nostro generatore di favicon scrive un vero contenitore binario Windows ICONDIR con voci di directory PNG RGBA a 32 bit separate per i fotogrammi 16×16, 32×32 e 48×48. Browser desktop datati e collegamenti Windows scelgono automaticamente il fotogramma più nitido senza artefatti.',
      },
      {
        question: 'Quali dimensioni e formato di origine funzionano meglio per icone nitide nelle schede?',
        answer:
          'Parti da un PNG quadrato pulito o un SVG autonomo di almeno 512×512 pixel così il ridimensionamento produce bordi nitidi sia a 16×16 sia a 512×512. Sorgenti minuscole a bassa risoluzione stirate fino a 512×512 per icone splash PWA possono apparire morbide.',
      },
      {
        question: 'Cosa succede caricando un logo rettangolare invece che quadrato?',
        answer:
          'Le grafiche rettangolari vengono centrate in proporzione dentro ogni canvas quadrato senza allungare o schiacciare il tuo marchio. Lo spazio vuoto sopra/sotto o ai lati si riempie con trasparenza o con il colore di sfondo scelto.',
      },
      {
        question: 'Perché il generatore mostra anteprime per schede chiare e scure?',
        answer:
          'Le icone scure possono sparire sulle schede in Modalità scura, mentre i loghi bianchi scompaiono sui temi chiari del browser. Vedere fianco a fianco la scheda chiara Il mio sito e la Scheda in modalità scura ti permette di aggiungere padding o uno sfondo solido prima della pubblicazione.',
      },
      {
        question: 'Come funzionano insieme Padding e Raggio angoli su un\'icona app?',
        answer:
          'Il padding (0%–25%) rimpicciolisce leggermente il logo verso l\'interno dal bordo quadrato così gli angoli arrotondati non tagliano i bordi della grafica. Alzare il Raggio angoli verso il 20% crea squircles stile iOS, mentre il 50% ritaglia l\'intera icona in un cerchio completo.',
      },
      {
        question: 'Le icone Apple Touch dovrebbero usare uno sfondo solido invece che trasparente?',
        answer:
          'Safari per iOS spesso compone le aree trasparenti di apple-touch-icon.png su nero quando gli utenti fissano un sito alla schermata Home. Se il tuo logo usa forme scure, deseleziona Trasparente in Riempimento di sfondo e scegli bianco o il colore del tuo marchio.',
      },
      {
        question: 'Cosa contiene il file site.webmanifest generato?',
        answer:
          'Il JSON del manifest dichiara i percorsi di /android-chrome-192x192.png e /android-chrome-512x512.png, imposta display su standalone e sincronizza theme_color e background_color con il Riempimento di sfondo scelto. Puoi aprirlo in qualsiasi editor di testo per personalizzare il nome del sito.',
      },
      {
        question: 'Dove devo caricare i file favicon generati sul mio sito?',
        answer:
          'Metti favicon.ico, tutte le icone PNG generate e site.webmanifest nella directory pubblica radice del sito così URL come /favicon.ico e /apple-touch-icon.png si risolvono puliti. Poi incolla lo Snippet HTML <head> copiato dentro la sezione <head> dell\'HTML principale.',
      },
      {
        question: 'Posso scaricare solo favicon.ico o apple-touch-icon.png senza lo ZIP?',
        answer:
          'Sì, ogni dimensione di icona appare come scheda di anteprima con dimensioni esatte e peso in byte e un pulsante Scarica dedicato. Puoi prendere singoli asset o cliccare Scarica tutto (ZIP) per il pacchetto completo.',
      },
      {
        question: 'Caricare un logo SVG crea icone 16×16 nitide?',
        answer:
          'Sì, i vettori SVG incorporati rasterizzano direttamente nel browser su ogni griglia di pixel da 16×16 a 512×512. Assicurati solo che l\'SVG usi forme e colori incorporati invece di immagini collegate esterne o font web remoti.',
      },
      {
        question: 'Posso convertire una foto HEIC iPhone o una grafica WebP in favicon?',
        answer:
          'Sì, la zona di caricamento accetta file PNG, SVG, JPG, WebP, GIF, BMP e HEIC/HEIF di iPhone fino a 20 MB. Le immagini HEIC si decodificano localmente nel tuo browser prima che il pacchetto icone venga creato.',
      },
      {
        question: 'Loghi di marca o icone non pubblicate vengono inviati a server esterni?',
        answer:
          'No, ridimensionamento Canvas, impacchettamento binario ICO, generazione del manifest e archiviazione ZIP avvengono rigorosamente nella scheda del tuo browser. I tuoi marchi non pubblicati non viaggiano mai in rete.',
      },
      {
        question: 'Perché la vecchia favicon appare ancora in Chrome dopo aver caricato i nuovi file?',
        answer:
          'I browser memorizzano le favicon in cache per giorni anche dopo aver sostituito i file sul server. Un aggiornamento forzato con Ctrl+Maiusc+R (o una finestra in incognito) costringe il browser a scaricare il nuovo favicon.ico e le nuove icone PNG.',
      },
      {
        question: 'Le modifiche a Padding, Raggio angoli o Riempimento di sfondo aggiornano tutte le dimensioni insieme?',
        answer:
          'Sì, spostare un cursore o attivare Riempimento di sfondo ricostruisce subito favicon.ico, tutte e sei le dimensioni PNG, le anteprime chiare/scure e site.webmanifest insieme. Non serve ricaricare il logo tra una modifica e l\'altra.',
      },
      {
        question: 'Lo Snippet HTML <head> funziona con React, Next.js o siti HTML semplici?',
        answer:
          'Sì, i tag standard <link rel="icon">, <link rel="apple-touch-icon"> e <link rel="manifest"> funzionano su siti HTML statici, intestazioni WordPress, index.html Vite/React e template server. Incollali in <head> e metti i file nella radice web.',
      },
      {
        question: 'Posso creare una favicon circolare da un avatar o badge quadrato?',
        answer:
          'Sì, mantieni Trasparente attivo in Riempimento di sfondo e trascina Raggio angoli fino al 50%. Tutte le icone PNG e i fotogrammi favicon.ico incorporati si ritagliano puliti in un cerchio anti-aliasing morbido.',
      },
      {
        question: 'Perché servono 192×192 e 512×512 oltre a favicon.ico?',
        answer:
          'Chrome Android moderno e i prompt di installazione delle Progressive Web App cercano icone home 192×192 e icone splash 512×512 dichiarate in site.webmanifest. Includerle entrambe garantisce scorciatoie mobili nitide accanto alle classiche schede desktop.',
      },
      {
        question: 'Posso incollare un logo dagli appunti direttamente nello strumento favicon?',
        answer:
          'Sì, copia un\'immagine o uno screenshot negli appunti e premi Ctrl+V (o Cmd+V su Mac) sulla pagina. Entra subito nel generatore e mostra l\'intero set di icone.',
      },
      {
        question: 'C\'è una filigrana, un account o un costo per generare pacchetti favicon?',
        answer:
          'No, il generatore di favicon è gratis al 100% per siti personali e commerciali, senza filigrane, account o limiti giornalieri di build. Vale solo un limite di 20 MB per il file sorgente così la memoria del browser resta veloce.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-converter', '/image-color-picker', '/'],
  },
  {
    slug: '/image-color-picker',
    name: 'Selettore di colori immagine',
    shortDescription: 'Scegli colori esatti dei pixel da qualsiasi immagine in HEX, RGB, HSL e CMYK.',
    category: 'developer',
    seoTitle: 'Selettore colori immagine – HEX, RGB e HSL gratis',
    seoDescription:
      'Campiona colori esatti dei pixel con il selettore colori immagine online. Ispeziona valori HEX, RGB, HSL e CMYK con lente live ed esporta variabili CSS.',
    h1: 'Selettore di colori immagine gratis online',
    subtitle:
      'Pensato per web designer, sviluppatori frontend, brand stylist e illustratori, il nostro selettore di colori immagine nel browser campiona pixel RGBA esatti da qualsiasi foto, logo o screenshot. Passa il mouse per ispezionare una lente ingrandita 11×11 con lettura HEX live, clicca i pixel per salvare campioni ed esporta proprietà personalizzate CSS senza caricare i tuoi file.',
    howToSteps: [
      {
        title: 'Carica un\'immagine o incolla uno screenshot',
        description:
          'Trascina un file JPG, PNG, WebP, HEIC, SVG, BMP o GIF fino a 20 MB, o premi Ctrl+V per incollare uno screenshot direttamente dagli appunti.',
      },
      {
        title: 'Passa il mouse con la lente live Ispettore di pixel',
        description:
          'Muovi il cursore sul canvas dell\'immagine per vedere coordinate esatte dei pixel (x, y) e una griglia ingrandita 11×11 con mirino che aggiorna il campione in tempo reale.',
      },
      {
        title: 'Clicca i pixel per fissare e creare campioni',
        description:
          'Clicca un punto qualsiasi del canvas per bloccare il suo colore nell\'Ispettore di pixel e aggiungerlo a Campioni scelti (fino a 24 colori unici).',
      },
      {
        title: 'Copia valori HEX, RGB, HSL o CMYK',
        description:
          'Clicca l\'icona di copia accanto a HEX, RGB, HSL o CMYK nell\'Ispettore di pixel — o clicca una pillola di campione salvata — per copiare subito il codice.',
      },
      {
        title: 'Esporta la tua palette come variabili CSS',
        description:
          'Clicca Esporta CSS nella scheda Campioni scelti per scaricare picked-colors.css con proprietà personalizzate :root pulite pronte per il tuo foglio di stile.',
      },
    ],
    features: [
      {
        title: 'Lente live ingrandita dei pixel',
        description:
          'La griglia ingrandita con mirino ti permette di puntare pixel esatti con precisione sia con mouse desktop sia su touchscreen mobili.',
      },
      {
        title: '4 formati di colore subito',
        description:
          'Mostra contemporaneamente le rappresentazioni HEX, RGB, HSL e CMYK per sviluppatori web e grafici.',
      },
      {
        title: 'Cronologia campioni salvati ed export',
        description:
          'Clicca più aree della tua immagine per creare un elenco di campioni personalizzato e copiarlo come proprietà personalizzate CSS o JSON.',
      },
      {
        title: 'Campionamento Canvas 100% locale',
        description:
          'I valori dei pixel vengono letti localmente via HTML5 Canvas getImageData: i tuoi design e screenshot restano completamente privati.',
      },
    ],
    faqs: [
      {
        question: 'Questo selettore di colori campiona dal file a piena risoluzione o da un\'anteprima ridotta?',
        answer:
          'Ogni passaggio del mouse e clic mappa le coordinate del puntatore in proporzione su un Canvas HTML5 fuori schermo a piena risoluzione con naturalWidth × naturalHeight veri dell\'immagine. Anche se una foto 4K si riduce visivamente per entrare nello schermo, getImageData legge il pixel sottostante esatto.',
      },
      {
        question: 'Come aiuta la lente ingrandita 11×11 a puntare linee sottili o piccole icone?',
        answer:
          'Muovendoti sul canvas, una lente ingrandita 88×88 con interpolazione nearest-neighbor mostra una griglia 11×11 attorno al cursore con un mirino a doppio contorno sul pixel attivo esatto. Evita di campionare per sbaglio pixel di bordo anti-aliasing accanto a bordi nitidi.',
      },
      {
        question: 'Quali formati di codice colore vengono calcolati automaticamente per ogni pixel scelto?',
        answer:
          'L\'Ispettore di pixel converte la tripletta RGB campionata contemporaneamente in HEX maiuscolo (#RRGGBB), CSS rgb(r, g, b), CSS hsl(h, s%, l%) e valori CMYK percentuali. Ogni riga ha il suo pulsante di copia con un clic.',
      },
      {
        question: 'Quanti colori posso raccogliere in Campioni scelti alla volta?',
        answer:
          'Cliccando parti diverse della tua foto memorizzi fino a 24 campioni HEX unici in ordine cronologico (saltando i duplicati automaticamente). Cliccando un campione salvato lo ripristini nell\'ispettore e copi il suo codice HEX direttamente negli appunti.',
      },
      {
        question: 'Cosa scarica il pulsante Esporta CSS?',
        answer:
          'Cliccando Esporta CSS generi un foglio di stile picked-colors.css con un blocco :root di proprietà personalizzate numerate (--color-1, --color-2, ecc.) e commenti RGB in linea per ogni colore in Campioni scelti. Se non hai ancora cliccato più pixel, esporta il pixel selezionato corrente.',
      },
      {
        question: 'Perché un colore è già mostrato appena l\'immagine si carica?',
        answer:
          'Al caricamento iniziale l\'ispettore campiona automaticamente il pixel centrale esatto dell\'immagine caricata così vedi subito letture live HEX, RGB, HSL e CMYK prima di muovere il mouse. Muoversi o cliccare ovunque aggiorna subito le letture.',
      },
      {
        question: 'Posso incollare uno screenshot con Ctrl+V per campionare colori UI?',
        answer:
          'Sì, copia un frammento di pagina web, UI di app o mockup di design negli appunti e premi Ctrl+V (o Cmd+V su Mac) mentre l\'area di caricamento è aperta. Si carica direttamente sul canvas di campionamento senza salvare prima un file temporaneo.',
      },
      {
        question: 'Quali tipi di file posso ispezionare con lo strumento contagocce?',
        answer:
          'Puoi caricare immagini JPG, PNG, WebP, HEIC/HEIF di iPhone, SVG, BMP e GIF fino a 20 MB ciascuna. Gli SVG vettoriali rasterizzano puliti su Canvas così puoi campionare i colori di riempimento resi esatti direttamente.',
      },
      {
        question: 'Quanto sono accurati i valori CMYK mostrati nell\'Ispettore di pixel?',
        answer:
          'Le percentuali CMYK vengono calcolate matematicamente dai valori dei pixel sRGB con formule standard di conversione RGB-CMYK. Per la stampa offset commerciale con profili ICC rigorosi, trattale come utili approssimazioni di partenza e non come prove di inchiostro calibrate.',
      },
      {
        question: 'Cosa succede campionando un\'area trasparente su un logo PNG?',
        answer:
          'HTML5 Canvas legge i canali rosso, verde e blu a quella coordinata: i pixel Canvas completamente trasparenti diventano per impostazione predefinita 0, 0, 0 (#000000) quando i canali RGB sono vuoti. Campiona direttamente su tratti o forme opache per ispezionare i veri colori dell\'opera.',
      },
      {
        question: 'Mockup UI privati o asset di marca vengono caricati su qualche server?',
        answer:
          'No, la lettura dei pixel via Canvas getImageData avviene rigorosamente nella memoria locale del tuo browser. Design non pubblicati, screenshot riservati e foto personali non lasciano mai il tuo computer o telefono.',
      },
      {
        question: 'Il selettore di colori funziona su Chrome, Safari e Firefox senza estensioni?',
        answer:
          'Sì, a differenza dell\'API sperimentale EyeDropper che funziona solo su Chromium desktop, il nostro campionatore Canvas HTML5 gira su Firefox, Safari, Edge e Chrome. Non servono estensioni del browser, permessi speciali o plugin.',
      },
      {
        question: 'Come passo a un\'altra foto dopo aver scelto campioni?',
        answer:
          'Clicca il pulsante Nuova immagine in alto a destra nell\'intestazione del canvas in qualsiasi momento. Cancella l\'immagine attiva, azzera pulito l\'elenco Campioni scelti e ti riporta alla zona di caricamento.',
      },
      {
        question: 'Posso ispezionare le coordinate esatte dei pixel insieme al valore del colore?',
        answer:
          'Sì, l\'intestazione dell\'Ispettore di pixel mostra coordinate x e y live (per esempio x:412, y:198) in monospace mentre passi il mouse sul canvas. Aiuta a far corrispondere pixel specifici in modo coerente su asset grandi.',
      },
      {
        question: 'Perché cliccare un colore in una foto JPEG varia leggermente tra pixel adiacenti?',
        answer:
          'La compressione JPEG usa sottocampionamento della crominanza e trasformate a blocchi che introducono lievi variazioni pixel per pixel su superfici piatte. Usare la lente 11×11 ti permette di scegliere un pixel rappresentativo pulito lontano dai bordi compressi.',
      },
      {
        question: 'Posso toccare i colori con precisione su iPad o smartphone touch?',
        answer:
          'Sì, toccando un\'area del canvas su mobile attivi il campionatore nel punto toccato, fissi il campione, aggiorni tutti e quattro i formati di colore e aggiungi il codice HEX a Campioni scelti. Puoi anche toccare un campione salvato per copiarlo.',
      },
      {
        question: 'Sostituisce i campioni salvati se clicco due volte lo stesso colore esadecimale?',
        answer:
          'No, Campioni scelti controlla automaticamente le stringhe HEX corrispondenti e ignora i duplicati. Mantiene la palette raccolta ordinata anche se campioni più volte lo stesso sfondo o colore di marca.',
      },
      {
        question: 'Perché usare HSL insieme a HEX e RGB nello stile dei siti?',
        answer:
          'HSL (Tonalità, Saturazione, Luminosità) rende facile per gli sviluppatori CSS derivare stati hover più chiari o bordi più scuri regolando solo la percentuale di luminosità mantenendo costante la tonalità. Avere HEX e HSL fianco a fianco evita conversioni manuali.',
      },
      {
        question: 'Qual è il peso massimo consentito nel selettore di colori?',
        answer:
          'Le singole immagini caricate possono arrivare a 20 MB. Questo limite gestisce facilmente foto di fotocamere ad alta risoluzione, grandi export PNG di Figma e screenshot a pagina intera.',
      },
      {
        question: 'C\'è un costo, un account o un limite su quanti colori posso campionare?',
        answer:
          'No, il selettore di colori immagine è completamente gratuito, senza account o paywall. Puoi caricare immagini illimitate ed esportare palette di colori CSS senza filigrane.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/image-dimensions-checker', '/image-resizer', '/'],
  },
  {
    slug: '/image-dimensions-checker',
    name: 'Controlla dimensioni immagine',
    shortDescription: 'Controlla larghezza, altezza, proporzioni, megapixel e dimensioni di stampa.',
    category: 'developer',
    seoTitle: 'Controlla dimensioni immagine – Pixel e proporzioni',
    seoDescription:
      'Ispeziona larghezza, altezza, proporzioni, megapixel, alfa e stampa a 300 DPI in blocco con questo strumento gratuito per le dimensioni delle immagini online.',
    h1: 'Controlla dimensioni immagine e proporzioni',
    subtitle:
      'Ideale per responsabili e-commerce, acquirenti di pubblicità, sviluppatori UI e grafici di stampa, il nostro strumento per controllare le dimensioni delle immagini legge larghezza e altezza in pixel, proporzioni, megapixel e dimensioni di stampa a 300 DPI in pochi secondi. Trascina interi blocchi di asset, verifica i requisiti minimi in pixel ed esporta report puliti in CSV o JSON in privato sul tuo dispositivo.',
    howToSteps: [
      {
        title: 'Trascina o seleziona una o più immagini',
        description:
          'Carica file JPG, PNG, WebP, HEIC, SVG, BMP, GIF o AVIF fino a 20 MB ciascuno nell\'area di caricamento, oppure incolla con Ctrl+V.',
      },
      {
        title: 'Ispeziona le dimensioni in pixel e le proporzioni',
        description:
          'Controlla larghezza × altezza esatte (px), megapixel, orientamento (Orizzontale, Verticale, Quadrata) e proporzioni semplificate e decimali nella tabella.',
      },
      {
        title: 'Verifica peso del file, formato e canale alfa',
        description:
          'Controlla i valori della colonna Dimensioni / Formato per individuare i veri tipi di contenitore rilevati, il numero di byte e se esistono pixel alfa trasparenti.',
      },
      {
        title: 'Controlla le dimensioni di stampa stimate a 300 DPI',
        description:
          'Guarda la colonna Stampa a 300 DPI per vedere le dimensioni fisiche massime nitide in pollici (L" × A") prima di caricare i file in tipografia.',
      },
      {
        title: 'Esegui controlli di specifiche minime ed esporta CSV o JSON',
        description:
          'Inserisci regole facoltative di Larghezza minima (px) e Altezza minima (px) per segnalare Superato o Sotto il minimo, poi clicca su Esporta CSV o Esporta JSON.',
      },
    ],
    features: [
      {
        title: 'Ispezione delle dimensioni in blocco',
        description:
          'Controlla decine di asset in una volta: ideale per verificare immagini di prodotto, contenuti pubblicitari o schermate di app.',
      },
      {
        title: 'Proporzioni esatte e comuni',
        description:
          'Calcola sia le proporzioni semplificate matematicamente sia i formati standard più comuni come 16:9, 4:3, 1:1 e 4:5.',
      },
      {
        title: 'Validatore personalizzato di minimo e massimo',
        description:
          'Imposta regole facoltative di larghezza e altezza minime o massime per evidenziare subito le immagini che superano o meno le tue specifiche.',
      },
      {
        title: 'Esportazione in CSV e JSON',
        description:
          'Scarica un foglio CSV pulito o un riepilogo JSON con tutte le dimensioni delle immagini ispezionate.',
      },
    ],
    faqs: [
      {
        question: 'Questo strumento per controllare le dimensioni delle immagini modifica o risalva le mie immagini?',
        answer:
          'No, lo strumento legge le dimensioni naturali in pixel, i byte del file e le proprietà del contenitore solo nella memoria del browser. Nulla viene compresso, ritagliato, sovrascritto o caricato su server esterni.',
      },
      {
        question: 'Quali formati di file immagine posso ispezionare in blocco?',
        answer:
          'Puoi trascinare immagini JPG, PNG, WebP, HEIC/HEIF di iPhone, SVG, BMP, GIF e AVIF supportato dal browser, fino a 20 MB per file. Puoi trascinare formati diversi insieme nella stessa tabella.',
      },
      {
        question: 'Come funziona il controllo della larghezza minima e dell\'altezza minima?',
        answer:
          'Digitando una soglia in pixel in Larghezza minima (px) o Altezza minima (px), nella tabella compare una colonna Controllo specifiche. Ogni riga mostra subito un badge verde Superato o un avviso ambra Sotto il minimo, così i contenuti troppo piccoli saltano subito all\'occhio.',
      },
      {
        question: 'Come vengono abbinate le proporzioni comuni come 16:9 o 4:5 rispetto a quelle esatte?',
        answer:
          'Prima la calcolatrice ricava il rapporto larghezza:altezza ridotto matematicamente tramite il massimo comune divisore e il rapporto decimale (per esempio 1,78:1). Quando un\'immagine corrisponde o si avvicina molto ai formati standard come 16:9, 4:3, 3:2, 1:1, 4:5 o 9:16, mostra direttamente quell\'etichetta riconoscibile.',
      },
      {
        question: 'Come viene calcolata la dimensione di stampa a 300 DPI a partire dai pixel?',
        answer:
          'La larghezza e l\'altezza di stampa in pollici si ottengono dividendo larghezza e altezza in pixel per 300 pixel per pollice (per esempio 3000 × 2400 px equivalgono a 10,0" × 8,0" a 300 DPI). Il JSON esportato conserva anche gli equivalenti di stampa a 72 DPI in scala schermo.',
      },
      {
        question: 'Quali colonne sono incluse quando clicco su Esporta CSV?',
        answer:
          'Cliccando su Esporta CSV scarichi image-dimensions-report.csv con dieci colonne strutturate: Nome file, Larghezza (px), Altezza (px), Orientamento, Proporzioni, Megapixel, Dimensioni file (byte), Formato, Trasparenza e Dimensioni di stampa a 300 DPI. I nomi di file con virgole o virgolette vengono protetti correttamente nel CSV.',
      },
      {
        question: 'Cosa salva Esporta JSON rispetto al CSV?',
        answer:
          'Esporta JSON scrive un file image-dimensions-report.json formattato con oggetti di metadati puliti per ogni riga ispezionata (omettendo gli URL interni di anteprima e gli ID temporanei di riga). Sviluppatori e script di controllo qualità possono leggerlo direttamente nei controlli automatici degli asset.',
      },
      {
        question: 'Come fa lo strumento a rilevare se un PNG o un WebP ha davvero trasparenza alfa?',
        answer:
          'Anziché indovinare dall\'estensione del file, il caricatore analizza i byte alfa dei pixel su Canvas per verificare se qualche pixel ha un\'opacità inferiore a 255. Le immagini con regioni davvero trasparenti mostrano un tag Alfa proprio sotto il formato.',
      },
      {
        question: 'Posso aggiungere altre cartelle o altri blocchi a una tabella di dimensioni esistente?',
        answer:
          'Sì, trascinando o cercando altre immagini aggiungi nuove righe in fondo alla tabella esistente senza cancellare le voci precedenti. Clicca su Cancella quando vuoi azzerare la tabella per un nuovo progetto.',
      },
      {
        question: 'Perché le foto di iPhone mostrano correttamente Orizzontale o Verticale qui?',
        answer:
          'I browser moderni normalizzano automaticamente la rotazione EXIF della fotocamera quando decodificano immagini JPEG e HEIC nelle dimensioni naturali. Così uno scatto verticale dello smartphone riporta correttamente l\'orientamento Verticale e i limiti in pixel alti.',
      },
      {
        question: 'Come vengono calcolati i megapixel (MP) delle mie immagini?',
        answer:
          'I megapixel equivalgono a (larghezza × altezza) diviso per 1.000.000, arrotondato a due decimali (per esempio 1920 × 1080 = 2,07 MP). Corrisponde allo standard dei sensori delle fotocamere e dei marketplace di stampa.',
      },
      {
        question: 'Cosa succede se carico un file con un\'estensione fuorviante, come un WebP chiamato .jpg?',
        answer:
          'Il nostro ispettore legge il tipo binario sottostante risolto durante la decodifica anziché fidarsi ciecamente del suffisso del nome file. Vedrai il vero formato rilevato insieme al peso esatto in byte nella colonna Dimensioni / Formato.',
      },
      {
        question: 'Posso controllare anche le dimensioni intrinseche dei grafici SVG?',
        answer:
          'Sì, i file SVG autonomi con attributi di larghezza e altezza o un viewBox vengono decodificati nativamente nel browser. La tabella delle dimensioni legge larghezza, altezza e proporzioni in pixel renderizzati in modo pulito.',
      },
      {
        question: 'I contenuti pubblicitari non ancora pubblicati o le foto di prodotto riservate vengono inviati online?',
        answer:
          'Mai: tutta la decodifica delle immagini, il rilevamento della trasparenza, il controllo delle specifiche e la generazione di CSV/JSON avvengono nella tua scheda del browser. Zero byte lasciano il tuo dispositivo.',
      },
      {
        question: 'Posso incollare un\'immagine dagli appunti per verificarne direttamente la risoluzione in pixel?',
        answer:
          'Sì, premi Ctrl+V (o Cmd+V su Mac) per aggiungere una schermata o un grafico copiato direttamente nella tabella delle dimensioni. Puoi leggerne subito le dimensioni esatte in pixel, i megapixel e le proporzioni.',
      },
      {
        question: 'Perché un\'immagine di prodotto Amazon, Etsy o Shopify potrebbe non superare il controllo della larghezza minima?',
        answer:
          'Molti marketplace richiedono almeno 1000 px o 1200 px sul lato più corto o più lungo per attivare le anteprime con zoom. Inserendo 1200 in Larghezza minima puoi controllare un intero catalogo di prodotti prima del caricamento.',
      },
      {
        question: 'Cosa succede se un file illeggibile finisce in un grande trascinamento in blocco?',
        answer:
          'Se un file supera il limite di 20 MB o non può essere decodificato dal browser, UploadZone segnala o salta quell\'elemento non valido senza problemi. Ogni immagine valida dello stesso trascinamento continua a popolare normalmente la tabella delle dimensioni.',
      },
      {
        question: 'Posso usare questo strumento per controllare le dimensioni su telefono o tablet?',
        answer:
          'Sì, apri lo strumento in Safari su iOS o Chrome su Android, scegli le foto dal rullino e ispeziona le dimensioni esatte in pixel e i megapixel in movimento. La tabella scorre orizzontalmente sugli schermi stretti, così nessuna colonna viene tagliata.',
      },
      {
        question: 'Come posso correggere un\'immagine che non supera il mio controllo delle specifiche minime o ha proporzioni sbagliate?',
        answer:
          'Clicca sulle schede collegate Ridimensiona immagine o Ritaglia immagine in Strumenti gratuiti correlati sotto la guida. Puoi ritagliare con proporzioni esatte 16:9, 4:5 o 1:1 oppure ridimensionare le dimensioni direttamente nel browser.',
      },
      {
        question: 'C\'è un limite giornaliero o un costo per i report di dimensioni in blocco?',
        answer:
          'No, ispezionare blocchi illimitati di immagini fino a 20 MB per file è completamente gratuito. Puoi scaricare report CSV e JSON tutte le volte che vuoi, senza account né filigrane.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/image-metadata-viewer', '/image-color-picker', '/'],
  },
  {
    slug: '/image-cropper',
    name: 'Ritaglia immagini',
    shortDescription: 'Ritaglia foto in modo interattivo con maniglie di trascinamento, proporzioni e zoom.',
    category: 'crop-edit',
    seoTitle: 'Ritaglia immagini online gratis – Foto e proporzioni',
    seoDescription:
      'Ritaglia immagini online gratis nel browser con maniglie di trascinamento, proporzioni 1:1–16:9 e zoom al 300%. JPG, PNG, WebP e HEIC in locale, senza upload.',
    h1: 'Ritaglia immagini online gratis',
    subtitle:
      'Pensato per creator social, designer, studenti e venditori e-commerce, il nostro strumento interattivo per ritagliare immagini ti permette di inquadrare e rifilare le foto con precisione direttamente nel browser. Blocca le proporzioni più usate da 1:1 a 16:9, ingrandisci fino al 300% per bordi perfetti ed esporta ritagli puliti in locale, senza caricamenti.',
    howToSteps: [
      {
        title: 'Carica un\'immagine da ritagliare',
        description:
          'Trascina un\'immagine JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB nell\'area di caricamento, cercala sul tuo dispositivo oppure incollala con Ctrl+V.',
      },
      {
        title: 'Seleziona una preimpostazione di proporzioni',
        description:
          'Mantieni Libera per rifilare senza vincoli oppure clicca su 1:1, 4:3, 16:9, 3:2, 4:5 o 9:16 in Preimpostazioni proporzioni per bloccare l\'inquadratura.',
      },
      {
        title: 'Trascina la cornice e le maniglie di ridimensionamento',
        description:
          'Sposta la casella di ritaglio sul soggetto usando la griglia dei terzi e trascina una delle 8 maniglie di bordo o d\'angolo mentre controlli in diretta Larghezza ritaglio e Altezza ritaglio.',
      },
      {
        title: 'Ingrandisci o reimposta l\'intero canvas',
        description:
          'Usa i pulsanti Zoom (dal 100% al 300% in passi del 25%) per allineare i bordi con precisione, oppure clicca su Seleziona tutto per tornare all\'intera immagine.',
      },
      {
        title: 'Scegli formato e qualità di output',
        description:
          'Scegli tra Originale, JPG, PNG o WebP e regola il cursore Qualità (dal 10% al 100%) quando salvi in formati con perdita.',
      },
      {
        title: 'Ritaglia e scarica il tuo file',
        description:
          'Clicca su Ritaglia e scarica per generare il rettangolo selezionato alla piena risoluzione originale e salvarlo con le dimensioni nel nome del file.',
      },
    ],
    features: [
      { title: 'Maniglie interattive di trascinamento e ridimensionamento', description: 'Maniglie fluide per mouse e touch ti permettono di ritagliare qualsiasi area fino al pixel esatto.' },
      { title: 'Preimpostazioni di proporzioni', description: 'Passa tra Libera, 1:1 Quadrata, 4:3, 16:9, 3:2, 4:5 Instagram e 9:16 Storie.' },
      { title: 'Zoom e lettura live delle dimensioni', description: 'Ingrandisci per inquadrare con precisione e vedi in tempo reale la larghezza × altezza esatte di output.' },
      { title: 'Elaborazione locale 100% privata', description: 'Le tue foto vengono ritagliate sul tuo dispositivo con Canvas HTML5, senza caricamenti su server.' },
    ],
    faqs: [
      {
        question: 'Ritagliare riduce la qualità dentro il rettangolo selezionato?',
        answer:
          'No, lo strumento per ritagliare immagini estrae le coordinate selezionate direttamente dalla piena risoluzione originale salvata nella memoria del browser, e non dalla casella di anteprima ridotta. Salvando come PNG senza perdita, i pixel dentro il ritaglio restano identici all\'originale.',
      },
      {
        question: 'Quali preimpostazioni di proporzioni sono incluse nelle opzioni di ritaglio?',
        answer:
          'Puoi passare tra Libera (qualsiasi rettangolo), 1:1 (avatar quadrati), 4:3, 16:9 (panoramico/YouTube), 3:2 (standard reflex), 4:5 (ritratto Instagram) e 9:16 (Storie/Reel). Cliccando una preimpostazione, una cornice corrispondente viene centrata automaticamente.',
      },
      {
        question: 'Come si comportano le 8 maniglie di ridimensionamento quando è attiva una preimpostazione di proporzioni?',
        answer:
          'Tutte e quattro le maniglie d\'angolo e quelle di bordo mantengono automaticamente la proporzione selezionata, restando ben dentro i bordi dell\'immagine. Per regolare di nuovo larghezza e altezza in modo indipendente, clicca semplicemente sulla preimpostazione Libera.',
      },
      {
        question: 'A cosa serve la griglia dei terzi dentro la casella di selezione?',
        answer:
          'La discreta griglia 3×3 divide la cornice di ritaglio in terzi, così puoi allineare orizzonti, occhi o centri di prodotto con precisione mentre trascini. È solo una guida visiva sullo schermo e non compare mai nell\'immagine esportata.',
      },
      {
        question: 'Quanto posso ingrandire per inquadrare nei dettagli?',
        answer:
          'Usa i pulsanti Zoom (+) e Zoom (-) nella barra dell\'area di lavoro per ingrandire in modo fluido dal 100% fino al 300%, in incrementi del 25%. Quando lo zoom supera il 100%, scorri dentro l\'area di anteprima per rifilare i bordi fini.',
      },
      {
        question: 'Cosa fa il pulsante Seleziona tutto in Opzioni di ritaglio?',
        answer:
          'Cliccando su Seleziona tutto, le Proporzioni tornano a Libera, la casella di ritaglio si espande per coprire il 100% di larghezza e altezza dell\'immagine e lo Zoom torna al 100%. Ottieni un punto di partenza pulito senza ricaricare l\'immagine.',
      },
      {
        question: 'Posso vedere le dimensioni esatte di output in pixel prima di scaricare?',
        answer:
          'Sì, sia la lettura Selezione sopra l\'area di lavoro sia le schede Larghezza ritaglio / Altezza ritaglio in Opzioni di ritaglio si aggiornano in diretta in pixel mentre trascini. Il nome del file esportato include anche quelle dimensioni esatte del ritaglio (per esempio foto_1080x1080_ritagliata.jpg).',
      },
      {
        question: 'Il ritaglio funziona con i gesti delle dita su telefoni e tablet?',
        answer:
          'Sì, la casella di ritaglio e le maniglie usano eventi Pointer sicuri per il touch, pensati sia per il mouse desktop sia per i touchscreen. Puoi trascinare la cornice e tirare le maniglie comodamente su iOS e Android.',
      },
      {
        question: 'Il ritaglio preserva gli sfondi trasparenti di PNG e WebP?',
        answer:
          'Sì, mantenendo il formato Originale (da PNG/WebP) o scegliendo PNG o WebP, la trasparenza alfa completa resta intatta dentro la regione ritagliata. Scegliendo JPG, i pixel trasparenti vengono appiattiti su bianco pieno.',
      },
      {
        question: 'Perché il cursore Qualità scompare quando è selezionato PNG?',
        answer:
          'Il PNG usa compressione senza perdita, quindi un\'impostazione di qualità in percentuale con perdita non si applica. Passa il Formato di output a Originale (per i JPEG), JPG o WebP per far comparire il cursore Qualità dal 10% al 100%.',
      },
      {
        question: 'Posso ritagliare più immagini diverse in una volta?',
        answer:
          'Questo strumento interattivo gestisce un\'immagine alla volta, così puoi ispezionare e inquadrare ogni soggetto singolarmente con maniglie di trascinamento e zoom. Una volta scaricata, clicca sull\'icona del cestino per caricare subito la foto successiva.',
      },
      {
        question: 'Quali formati di file si possono caricare nello strumento per ritagliare?',
        answer:
          'Puoi ritagliare immagini JPG, PNG, WebP, HEIC/HEIF di iPhone, GIF, BMP e SVG fino a 20 MB per file. Nota che i GIF animati ritagliano il fotogramma iniziale come output statico.',
      },
      {
        question: 'I ritratti privati o i documenti vengono caricati su un server quando vengono ritagliati?',
        answer:
          'No, l\'intero disegno su canvas e la codifica del blob avvengono in locale dentro il tuo browser. Nulla viene trasmesso in rete o salvato esternamente.',
      },
      {
        question: 'Posso incollare una schermata direttamente dagli appunti per rifilarla?',
        answer:
          'Sì, fai una schermata e premi Ctrl+V (o Cmd+V su Mac) nella pagina mentre nessuna immagine è caricata. Si apre direttamente nell\'area di ritaglio, pronta da inquadrare.',
      },
      {
        question: 'Come ritaglio una foto rettangolare in un avatar quadrato pulito per il profilo?',
        answer:
          'Clicca sul pulsante 1:1 in Preimpostazioni proporzioni, trascina il quadrato bianco sul volto o sul logo e regola le maniglie d\'angolo finché non sei soddisfatto. Poi clicca su Ritaglia e scarica per salvare un\'immagine quadrata esatta.',
      },
      {
        question: 'Qual è l\'impostazione di qualità predefinita quando esporto ritagli JPG o WebP?',
        answer:
          'La qualità predefinita è del 92%, così i JPEG e i WebP ritagliati mantengono una texture fotografica nitida senza un peso eccessivo. Scorri verso il 75%–85% se vuoi anche un file più leggero da caricare.',
      },
      {
        question: 'Ritagliare rimuove anche i dati di posizione GPS EXIF incorporati?',
        answer:
          'Sì, esportare la regione ritagliata tramite un nuovo Canvas HTML5 crea una bitmap pulita senza i tag EXIF o GPS del JPEG originale. Questo aiuta a proteggere la tua posizione e la privacy del dispositivo quando condividi scatti rifilati.',
      },
      {
        question: 'Perché l\'area di lavoro scurisce tutto ciò che è fuori dalla mia casella di selezione?',
        answer:
          'La sovrapposizione scura semitrasparente attenua le regioni che verranno rifilate. Quel contrasto visivo ti aiuta a valutare la composizione e l\'equilibrio della regola dei terzi in modo pulito prima di cliccare su Ritaglia e scarica.',
      },
      {
        question: 'Posso sostituire rapidamente la foto corrente dopo aver scaricato un ritaglio?',
        answer:
          'Sì, clicca sull\'icona rossa del cestino nell\'angolo in alto a destra dell\'intestazione dell\'area di ritaglio in qualsiasi momento. Questo cancella la foto attiva e torna pulito alla zona di caricamento per la tua prossima immagine.',
      },
      {
        question: 'C\'è un costo, una registrazione o una filigrana sui ritagli esportati?',
        answer:
          'No, lo strumento per ritagliare immagini è completamente gratuito, senza account né paywall. Ogni foto ritagliata viene esportata pulita, a piena risoluzione, senza filigrane aggiunte.',
      },
    ],
    relatedSlugs: ['/image-resizer', '/rotate-flip-image', '/round-image-corners', '/'],
  },
  {
    slug: '/image-watermark',
    name: 'Aggiungi filigrana a immagine',
    shortDescription: 'Aggiungi filigrane di testo o logo personalizzate, trascinale o ripetile a mosaico sulle foto.',
    category: 'crop-edit',
    seoTitle: 'Aggiungi filigrana a immagine gratis – Testo e logo',
    seoDescription:
      'Proteggi le foto con filigrana nel browser: testo personalizzato o loghi PNG/SVG trasparenti, da trascinare o ripetere in diagonale, ed esporta in sicurezza.',
    h1: 'Strumento gratuito per aggiungere filigrana a immagine online',
    subtitle:
      'Pensato per fotografi, illustratori, venditori Etsy e agenzie digitali, questo strumento privato nel browser aggiunge una filigrana nitida di testo o logo senza caricamenti su server. Trascina il tuo marchio liberamente sul canvas, fissalo a 9 preimpostazioni di ancoraggio oppure ripeti un motivo inclinato su tutta la foto.',
    howToSteps: [
      {
        title: 'Carica la tua foto di base',
        description:
          'Trascina un\'immagine JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB nell\'area di caricamento, cercala sul disco oppure incollala con Ctrl+V.',
      },
      {
        title: 'Scegli Filigrana di testo o Immagine logo',
        description:
          'Scegli Filigrana di testo per digitare un testo di marca personalizzato, scegliere il colore e regolare la Dimensione (2%–20%), oppure scegli Immagine logo per caricare un logo PNG o SVG trasparente (5%–60% di larghezza).',
      },
      {
        title: 'Regola Opacità e Rotazione',
        description:
          'Imposta l\'Opacità da un tenue 5% fino al 100% pieno e inclina la Rotazione da -180° a +180° in tempo reale.',
      },
      {
        title: 'Posiziona liberamente o attiva il Motivo ripetuto a mosaico',
        description:
          'Trascina la tua filigrana direttamente sull\'immagine di anteprima, clicca una Preimpostazione di ancoraggio a 9 punti (dall\'alto a sinistra in basso a destra) oppure attiva il Motivo ripetuto a mosaico e regola la Spaziatura mosaico (15%–60%).',
      },
      {
        title: 'Seleziona formato e qualità di output',
        description:
          'Scegli l\'output Orig, JPG, PNG o WebP e imposta la Qualità (10%–100%) quando salvi in formati con perdita.',
      },
      {
        title: 'Scarica la tua immagine con filigrana',
        description:
          'Clicca su Scarica immagine con filigrana per comporre la sovrapposizione alla piena risoluzione originale dell\'immagine e salvare <nome>_watermarked.',
      },
    ],
    features: [
      { title: 'Filigrane di testo e logo', description: 'Usa una tipografia personalizzata nitida oppure carica il logo del tuo marchio in PNG/SVG trasparente.' },
      { title: 'Trascina per posizionare + 9 preimpostazioni di ancoraggio', description: 'Metti il tuo marchio in qualsiasi angolo, al centro esatto, oppure trascinalo liberamente sul canvas.' },
      { title: 'Protezione diagonale a mosaico', description: 'Attiva la Filigrana a mosaico per ripetere il tuo testo o logo su tutta la foto con spaziatura regolabile.' },
      { title: 'Privacy lato client', description: 'Applica filigrane a bozze e foto di portfolio in locale, senza inviare gli originali a server esterni.' },
    ],
    faqs: [
      {
        question: 'Posso usare sia un testo personalizzato sia il mio logo trasparente come filigrana per le immagini?',
        answer:
          'Sì, passa tra Filigrana di testo e Immagine logo in cima al pannello dei controlli. La modalità testo supporta frasi personalizzate, colore esadecimale e scala delle dimensioni, mentre la modalità logo accetta file di logo PNG, SVG o di qualsiasi formato supportato trasparente.',
      },
      {
        question: 'In che modo il Motivo ripetuto a mosaico protegge le bozze per i clienti meglio di un singolo timbro d\'angolo?',
        answer:
          'I singoli timbri d\'angolo possono essere ritagliati facilmente, mentre attivando il Motivo ripetuto a mosaico il tuo testo o logo ruotato viene stampato in una griglia sfalsata su tutta l\'inquadratura. Usa il cursore Spaziatura mosaico (dal 15% al 60%) per controllare la densità della griglia.',
      },
      {
        question: 'Perché le Preimpostazioni di ancoraggio sono nascoste quando il Motivo ripetuto a mosaico è attivo?',
        answer:
          'Le Preimpostazioni di ancoraggio e il trascinamento per posizionare servono a collocare una singola filigrana in coordinate specifiche (AS, AC, AD, MS, C, MD, BS, BC, BD). Disattiva il Motivo ripetuto a mosaico quando vuoi trascinare o fissare un singolo timbro.',
      },
      {
        question: 'Come viene calcolata la dimensione del testo tra miniature piccole e foto enormi di fotocamera?',
        answer:
          'Dimensione carattere (2%–20%) e Larghezza logo (5%–60%) scalano in proporzione alla larghezza della tua immagine. Questo garantisce che la tua filigrana appaia coerente sia su una miniatura di prodotto da 800 px sia su una bozza ad alta risoluzione da 4000 px.',
      },
      {
        question: 'Il canvas di anteprima riduce la qualità dell\'output scaricato?',
        answer:
          'No, l\'anteprima interattiva si adatta fino a 900 px di larghezza solo per permetterti di trascinare comodamente sullo schermo. Quando clicchi su Scarica immagine con filigrana, l\'esportatore costruisce un canvas a piena risoluzione con le dimensioni esatte in pixel della tua foto originale.',
      },
      {
        question: 'Posso rendere leggibile il testo bianco della filigrana su sfondi chiari?',
        answer:
          'Sì, la Filigrana di testo disegna automaticamente una leggera ombra scura dietro le lettere. Questo mantiene le filigrane bianche o di colore chiaro nitide e leggibili su cieli luminosi, sfondi bianchi di prodotto e luci alte.',
      },
      {
        question: 'Quali intervalli di opacità e rotazione funzionano meglio per una protezione discreta delle bozze?',
        answer:
          'Per un marchio d\'angolo discreto, prova Opacità al 40%–65% con rotazione a 0° ancorata in Basso a destra (BD). Per una protezione forte delle bozze stock, usa il Motivo ripetuto a mosaico con Opacità al 25%–40% e un angolo diagonale di -25° o -35°.',
      },
      {
        question: 'Come trascino una singola filigrana in un punto personalizzato esatto?',
        answer:
          'Con il Motivo ripetuto a mosaico deselezionato, clicca o premi direttamente in qualsiasi punto del canvas di anteprima e trascina il puntatore. La filigrana segue fluidamente e resta leggermente dentro i bordi, così non viene mai tagliata.',
      },
      {
        question: 'Quali formati di immagine sono supportati per le foto di base e i loghi caricati?',
        answer:
          'Sia la foto principale sia il caricamento del logo supportano JPG, PNG, WebP, HEIC/HEIF di iPhone, GIF, BMP e SVG fino a 20 MB. Nota che i GIF animati vengono renderizzati come un singolo fotogramma statico con filigrana.',
      },
      {
        question: 'L\'esportazione preserva la trasparenza se la mia immagine di base è un PNG trasparente?',
        answer:
          'Sì, selezionando Orig (da PNG/WebP), PNG o WebP preservi la piena trasparenza alfa al di fuori della tua grafica mentre componi la filigrana sopra. Selezionando JPG, le aree trasparenti vengono riempite con bianco pieno.',
      },
      {
        question: 'Le bozze originali senza filigrana vengono mai caricate su server esterni?',
        answer:
          'No, mantenere private le bozze dei clienti senza filigrana è essenziale. Ogni composizione su canvas, passaggio a mosaico ed esportazione finale dell\'immagine avviene rigorosamente nella memoria locale del tuo browser, senza caricamenti in rete.',
      },
      {
        question: 'Posso caricare una nuova foto di base senza perdere testo, opacità o impostazioni di angolo?',
        answer:
          'Sì, clicca su Cambia immagine nell\'intestazione dell\'anteprima quando vuoi timbrare un\'altra foto. Il tuo testo della filigrana, il logo caricato, l\'opacità, l\'angolo di rotazione e il layout a mosaico restano configurati automaticamente.',
      },
      {
        question: 'Posso sostituire il logo del marchio caricato in seguito senza ricaricare lo strumento?',
        answer:
          'Sì, mentre è selezionata la modalità Immagine logo, clicca su Cambia immagine logo per scegliere un altro file PNG o SVG in qualsiasi momento. La tua foto di base attuale si aggiorna subito.',
      },
      {
        question: 'Perché la Qualità scompare quando è selezionato l\'output PNG?',
        answer:
          'Gli output PNG sono bitmap senza perdita, quindi la percentuale di qualità di compressione non si applica. Passa a Orig (per sorgenti JPEG), JPG o WebP per regolare il cursore Qualità tra il 10% e il 100%.',
      },
      {
        question: 'Posso incollare una foto direttamente dagli appunti per applicarle una filigrana?',
        answer:
          'Sì, copia un\'immagine o una schermata e premi Ctrl+V (o Cmd+V su Mac) quando la zona di caricamento è aperta. Viene caricata direttamente nell\'editor di filigrana.',
      },
      {
        question: 'La filigrana viene appiattita in modo permanente nel file scaricato?',
        answer:
          'Sì, la filigrana viene dipinta direttamente sulla bitmap di output e salvata come JPG, PNG o WebP appiattito (<nome>_watermarked). Non restano livelli modificabili dentro l\'immagine esportata.',
      },
      {
        question: 'Cosa succede se lascio vuoto il campo Testo della filigrana?',
        answer:
          'Se svuoti completamente il campo Testo della filigrana, il renderer mostra temporaneamente "Filigrana" sul canvas di anteprima. Questo evita una selezione vuota e invisibile mentre digiti una nuova etichetta.',
      },
      {
        question: 'Posso posizionare ed esportare foto con filigrana su smartphone o iPad?',
        answer:
          'Sì, il trascinamento sul canvas di anteprima usa eventi Pointer adatti al touch insieme a cursori reattivi. Puoi timbrare facilmente foto di portfolio o bozze direttamente in Safari o Chrome mobile.',
      },
      {
        question: 'Applicare una filigrana rimuove i tag GPS EXIF della fotocamera durante l\'esportazione?',
        answer:
          'Sì, il rendering su un nuovo Canvas HTML5 crea un file di output pulito senza copiare le intestazioni EXIF della fotocamera. La tua posizione GPS e i metadati del dispositivo restano esclusi dalla bozza scaricata.',
      },
      {
        question: 'CompressMyPic aggiunge un badge extra accanto alla mia filigrana?',
        answer:
          'No, sulla tua foto viene disegnato solo il testo o il logo esatto che hai configurato. Non aggiungiamo mai marchi esterni, badge d\'angolo o filigrane del sito alle tue esportazioni.',
      },
    ],
    relatedSlugs: ['/add-text-to-image', '/image-border-generator', '/remove-image-metadata', '/'],
  },
  {
    slug: '/blur-pixelate-image',
    name: 'Sfoca e pixelizza immagine',
    shortDescription: 'Sfoca o pixelizza l\'intera foto oppure solo le aree sensibili con il pennello.',
    category: 'crop-edit',
    seoTitle: 'Sfoca e pixelizza immagine gratis – Nascondi volti e testi',
    seoDescription:
      'Sfoca o pixelizza aree dell\'immagine con un pennello di censura o in modalità a quadro intero. Nascondi volti, targhe e testi privati nel browser, gratis.',
    h1: 'Sfoca e pixelizza immagine online',
    subtitle:
      'Pensato per giornalisti, insegnanti, venditori di marketplace e utenti attenti alla privacy, questo strumento nel browser ti permette di sfocare o pixelizzare i dettagli delle immagini in modo permanente prima di condividerle online. Dipingi in modo selettivo su volti, targhe o indirizzi con il pennello interattivo di censura, oppure applica sfocatura fluida e pixelizzazione su tutta l\'inquadratura in locale.',
    howToSteps: [
      {
        title: 'Carica una foto o una schermata',
        description:
          'Trascina qualsiasi immagine JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB nell\'area di caricamento, oppure incollala direttamente con Ctrl+V.',
      },
      {
        title: 'Scegli Area pennello o Immagine intera',
        description:
          'Mantieni Area pennello selezionata per censurare solo le regioni dipinte come volti e numeri, oppure passa a Immagine intera per sfocare o pixelizzare l\'intera inquadratura.',
      },
      {
        title: 'Scegli Mosaico pixelizzato o Sfocatura fluida',
        description:
          'Passa tra i tasselli a blocchi del Mosaico pixelizzato o la Sfocatura fluida a seconda dello stile che vuoi.',
      },
      {
        title: 'Imposta intensità e Dimensione pennello',
        description:
          'Regola la Dimensione blocco mosaico (4–60 px) o il Raggio di sfocatura (2–50 px) e calibra la Dimensione pennello (2%–20%) quando dipingi in modo selettivo.',
      },
      {
        title: 'Dipingi sui dettagli sensibili',
        description:
          'Clicca e trascina direttamente su volti, targhe o testi privati sul canvas di anteprima; clicca su Annulla o Reimposta pennello in qualsiasi momento.',
      },
      {
        title: 'Scegli il formato e scarica',
        description:
          'Scegli l\'output Orig, JPG, PNG o WebP, imposta la Qualità (10%–100%) per i formati con perdita e clicca su Scarica immagine per salvare in locale.',
      },
    ],
    features: [
      { title: 'Pennello interattivo di censura', description: 'Dipingi su volti, indirizzi o targhe con dimensione del pennello regolabile e annulla per tratto.' },
      { title: 'Sfocatura e mosaico su immagine intera', description: 'Sfoca rapidamente gli sfondi o crea effetti mosaico retrò pixel art su tutta l\'inquadratura.' },
      { title: 'Zero caricamenti su server', description: 'Poiché nascondi dettagli sensibili, nulla lascia mai il tuo dispositivo.' },
      { title: 'Esportazione a piena risoluzione', description: 'Le coordinate del pennello vengono mappate con precisione sui pixel originali completi dell\'immagine per esportazioni nitide.' },
    ],
    faqs: [
      {
        question: 'Le regioni sfocate o pixelizzate possono mai essere ripristinate o invertite dal file scaricato?',
        answer:
          'No, l\'esportazione appiattisce i tuoi tratti direttamente in un\'unica bitmap piatta (JPG, PNG o WebP) senza livelli nascosti né cronologia di annullamento dentro l\'immagine. Una volta scaricata, i pixel nitidi originali dietro la maschera censurata sono spariti per sempre.',
      },
      {
        question: 'Perché il Mosaico pixelizzato è spesso più sicuro di una leggera Sfocatura fluida per nascondere il testo?',
        answer:
          'Una Dimensione blocco mosaico aggressiva (da 20 px a 60 px) fonde i caratteri in grandi quadrati di colore pieno, distruggendo completamente i contorni sottili delle lettere. Raggi di sfocatura molto piccoli a volte possono lasciare le forme delle parole vagamente intuibili, quindi usare un Raggio di sfocatura maggiore o il Mosaico pixelizzato offre una censura più forte.',
      },
      {
        question: 'In che modo la modalità Area pennello mantiene nitide le aree fuori dai miei tratti?',
        answer:
          'In modalità Area pennello, la tua immagine di base viene disegnata a piena nitidezza, mentre ogni tratto dipinto agisce come una maschera alfa fuori schermo che compone sopra solo la regione sfocata o pixelizzata. Le parti non dipinte della foto restano completamente nitide.',
      },
      {
        question: 'Posso mescolare tratti pixelizzati e tratti sfocati sulla stessa immagine?',
        answer:
          'Sì, ogni tratto memorizza lo Stile effetto (Mosaico pixelizzato o Sfocatura fluida), l\'intensità e il raggio del pennello attivi quando lo hai dipinto. Puoi pixelizzare prima una targa, passare alla Sfocatura fluida e poi dipingere il volto sullo sfondo nella stessa foto.',
      },
      {
        question: 'Dipingere sull\'anteprima ridotta viene mappato con precisione su foto enormi di fotocamera?',
        answer:
          'Sì, tutte le coordinate del puntatore vengono salvate in rapporti normalizzati da 0 a 1 insieme alla scala proporzionale di pennello ed effetto. Quando clicchi su Scarica immagine, la composizione viene renderizzata su un canvas a piena risoluzione corrispondente alle dimensioni della tua sorgente.',
      },
      {
        question: 'Come posso correggere uno scivolamento mentre dipingo su un volto o un indirizzo?',
        answer:
          'Clicca sul pulsante Annulla sopra il canvas di anteprima per rimuovere solo il tuo tratto più recente senza cancellare le censure precedenti. Se vuoi ripartire da zero, clicca su Reimposta pennello per cancellare subito ogni tratto.',
      },
      {
        question: 'Cosa fa il passaggio di Area di destinazione a Immagine intera?',
        answer:
          'Immagine intera applica il tuo Raggio di sfocatura fluida o la Dimensione blocco del Mosaico pixelizzato attivi in modo uniforme su ogni pixel, da bordo a bordo. È utile per creare lastre di sfondo morbide, sfondi hero o texture retrò pixel art senza dipingere.',
      },
      {
        question: 'Le foto non censurate con volti, documenti o indirizzi privati vengono inviate a qualche server?',
        answer:
          'Mai: caricare immagini sensibili non censurate su un server remoto comprometterebbe la privacy prima ancora che tu nasconda qualcosa. Ogni maschera su canvas, passaggio di sfocatura e download finale avviene rigorosamente dentro il tuo browser.',
      },
      {
        question: 'Quanto devo impostare Dimensione pennello e Dimensione blocco mosaico per schermate piccole?',
        answer:
          'Per schermate di chat o acquisizioni da cellulare, una Dimensione pennello del 4%–8% punta singole righe di testo o nomi utente in modo pulito senza sbavare i messaggi vicini. Impostare la Dimensione blocco mosaico intorno a 12–24 px di solito oscura i testi piccoli in modo leggibile.',
      },
      {
        question: 'Quali formati di file immagine posso sfocare o pixelizzare qui?',
        answer:
          'Puoi caricare immagini JPG, PNG, WebP, HEIC/HEIF di iPhone, GIF, BMP e SVG fino a 20 MB per file. Nota che i GIF animati a più fotogrammi censurano ed esportano il fotogramma iniziale come file statico.',
      },
      {
        question: 'Posso censurare parti sensibili di una schermata incollata con Ctrl+V?',
        answer:
          'Sì, fai una schermata negli appunti e premi Ctrl+V (o Cmd+V su Mac) mentre la zona di caricamento è visibile. Si apre direttamente in modalità Area pennello, pronta da censurare e salvare.',
      },
      {
        question: 'L\'esportazione preserva gli sfondi trasparenti su grafiche PNG o WebP?',
        answer:
          'Sì, mantenendo Orig (per PNG/WebP) o scegliendo PNG o WebP, la trasparenza alfa resta intatta intorno ad adesivi non rettangolari o ritagli di interfaccia. Scegliendo JPG esporti un\'immagine JPEG opaca.',
      },
      {
        question: 'Perché i pulsanti Annulla e Reimposta pennello sono visibili solo in modalità Area pennello?',
        answer:
          'Quei pulsanti gestiscono i singoli tratti di pennello dipinti, quindi si nascondono automaticamente quando passi alla modalità Immagine intera. Tornando ad Area pennello, i tuoi tratti salvati vengono ripristinati esattamente dove li avevi lasciati.',
      },
      {
        question: 'Posso usare il dito o l\'Apple Pencil su telefono o tablet per dipingere tratti di censura?',
        answer:
          'Sì, il canvas usa eventi Pointer touch-none pensati appositamente per touchscreen e stilo. Puoi trascinare tratti di censura su volti o testi in modo fluido senza scorrere accidentalmente la pagina.',
      },
      {
        question: 'Censurare ed esportare rimuove anche i tag GPS EXIF della fotocamera?',
        answer:
          'Sì, il rendering della composizione censurata tramite un nuovo Canvas HTML5 omette automaticamente le intestazioni EXIF JPEG originali e le coordinate GPS. Questo protegge sia i dettagli visivi sia i metadati nascosti del file.',
      },
      {
        question: 'Perché la Qualità si nasconde quando scelgo l\'output PNG?',
        answer:
          'Il PNG usa compressione dei pixel senza perdita, quindi le percentuali di qualità con perdita non si applicano. Seleziona Orig (quando modifichi un JPEG), JPG o WebP se vuoi calibrare il cursore Qualità dal 10% al 100%.',
      },
      {
        question: 'Quale nome di file viene usato quando salvo la mia foto sfocata o pixelizzata?',
        answer:
          'Il downloader mantiene il nome base ripulito del tuo file e aggiunge _blur o _pixelate in base al tuo Stile effetto attivo. Questo ti permette di tenere le esportazioni censurate (come ricevuta_pixelate.png) ordinate accanto agli originali.',
      },
      {
        question: 'E se voglio sfocare l\'intero sfondo di un ritratto in modo pulito senza dipingere?',
        answer:
          'Usa la modalità Immagine intera quando vuoi un ammorbidimento uniforme dello sfondo dietro grafiche sovrapposte o schede di interfaccia. Per isolare un soggetto su uno sfondo pulito, abbinala al nostro strumento Rimuovi sfondo.',
      },
      {
        question: 'Quanto possono arrivare la Sfocatura fluida e il Mosaico pixelizzato?',
        answer:
          'Il Raggio di sfocatura va da un leggero ammorbidimento di 2 px fino a una forte sfocatura di 50 px in stile gaussiano. La Dimensione blocco mosaico va da tasselli fini di 4 px fino a blocchi grossi di 60 px, scalati in proporzione alla risoluzione della tua sorgente.',
      },
      {
        question: 'Ci sono filigrane, limiti giornalieri o registrazioni per censurare le foto?',
        answer:
          'No, puoi sfocare o pixelizzare foto fino a 20 MB per file senza filigrane né registrazioni. Tutta l\'elaborazione locale resta completamente gratuita con esportazioni illimitate.',
      },
    ],
    relatedSlugs: ['/remove-image-metadata', '/image-cropper', '/image-filters', '/'],
  },
  {
    slug: '/add-text-to-image',
    name: 'Aggiungi testo a immagine',
    shortDescription: 'Aggiungi testi trascinabili con stile, con caratteri, contorno e ombra.',
    category: 'crop-edit',
    seoTitle: 'Aggiungi testo a immagine gratis – Caratteri e contorni',
    seoDescription:
      'Aggiungi testo alle immagini gratis nel browser, con livelli trascinabili, 5 caratteri, grassetto/corsivo, contorni, ombre e rotazione, senza filigrana.',
    h1: 'Aggiungi testo a immagine online',
    subtitle:
      'Pensato per creator di contenuti, social media manager, insegnanti e creatori di meme, questo strumento privato rende facile aggiungere testo ai file immagine senza pesanti app di design. Sovrapponi più titoli o didascalie multilinea, personalizza caratteri, contorni, ombre e rotazione, ed esporta in modo pulito senza filigrane.',
    howToSteps: [
      {
        title: 'Carica un\'immagine o incollala dagli appunti',
        description:
          'Trascina una foto JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB nell\'area di caricamento, oppure incollala direttamente con Ctrl+V.',
      },
      {
        title: 'Scrivi testo multilinea e gestisci i livelli',
        description:
          'Modifica il tuo testo dentro Contenuto del testo (Invio aggiunge interruzioni di riga) e clicca su Aggiungi per impilare livelli extra come Testo 1, Testo 2, o eliminare quelli indesiderati.',
      },
      {
        title: 'Scegli carattere, colore di riempimento, Grassetto e Corsivo',
        description:
          'Scegli tra Inter, Impact, Georgia, Courier o Trebuchet, imposta il colore di Riempimento del testo e attiva lo stile Grassetto o Corsivo.',
      },
      {
        title: 'Regola Dimensione, Rotazione, Contorno e Ombra',
        description:
          'Scorri Dimensione (2%–22%) e Rotazione (-180° a +180°), poi personalizza colore e spessore del Contorno del testo (1–10) più l\'Ombra opzionale.',
      },
      {
        title: 'Trascina i livelli direttamente sull\'immagine',
        description:
          'Clicca e trascina qualsiasi blocco di testo direttamente sul canvas di anteprima per posizionare con precisione titoli, didascalie di meme o callout di schermate.',
      },
      {
        title: 'Scegli il formato di output e scarica',
        description:
          'Seleziona l\'output Orig, JPG, PNG o WebP, imposta la Qualità (10%–100%) per i file con perdita e clicca su Scarica immagine con testo.',
      },
    ],
    features: [
      { title: 'Più livelli di testo trascinabili', description: 'Aggiungi titoli, didascalie e callout e trascina ciascuno in modo indipendente sul canvas.' },
      { title: 'Ricchi controlli tipografici', description: 'Scegli caratteri, dimensioni, pesi grassetto/corsivo, colori, contorni e ombre.' },
      { title: 'Controllo di angolo e allineamento', description: 'Ruota qualsiasi livello di testo in modo fluido da -180° a +180°.' },
      { title: 'Esportazione pulita a piena risoluzione', description: 'Nessuna filigrana aggiunta: scarica direttamente in JPG, PNG o WebP.' },
    ],
    faqs: [
      {
        question: 'Posso aggiungere più titoli separati o didascalie di meme in alto e in basso?',
        answer:
          'Sì, clicca sul pulsante Aggiungi accanto alla scheda Testo 1 per creare Testo 2, Testo 3 e tutti i livelli di testo indipendenti che ti servono. Ogni livello mantiene il proprio carattere, colore, dimensione, rotazione, contorno e posizione di trascinamento sull\'immagine.',
      },
      {
        question: 'Quali caratteri sono integrati nell\'editor per aggiungere testo alle immagini?',
        answer:
          'Puoi passare subito tra cinque famiglie affidabili abbinate al sistema: Inter / Sans pulita, Impact / Display per meme, Georgia / Serif classico, Courier / Monospaziato e Trebuchet / Sans arrotondata. Tutti e cinque funzionano in modo affidabile offline senza attendere download di caratteri esterni.',
      },
      {
        question: 'Come creo il classico testo di meme bianco con un bordo scuro spesso?',
        answer:
          'Seleziona Impact / Display per meme, lascia attivo il Grassetto e il Riempimento su bianco (#ffffff), e mantieni il Contorno del testo attivo con un colore scuro come #0f172a o nero. Trascina il cursore di spessore del contorno verso 6–10 per un contrasto inconfondibile.',
      },
      {
        question: 'Premere Invio dentro Contenuto del testo crea didascalie multilinea?',
        answer:
          'Sì, Contenuto del testo supporta interruzioni di riga complete, centrate con un moltiplicatore di interlinea di 1,22. Questo rende facile impilare citazioni multilinea, callout di tutorial o didascalie lunghe senza creare livelli separati per riga.',
      },
      {
        question: 'Come seleziono e sposto un livello specifico quando ne ho diversi sulla foto?',
        answer:
          'Clicca su una scheda di livello (Testo 1, Testo 2, ecc.) nel pannello di destra per cambiare i controlli tipografici attivi. Puoi anche cliccare direttamente vicino a qualsiasi blocco di testo sul canvas: l\'editor afferra il livello più vicino al tuo puntatore.',
      },
      {
        question: 'Posso inclinare il testo in diagonale con angoli personalizzati?',
        answer:
          'Sì, trascina il cursore Rotazione in qualsiasi punto tra -180° e +180° per ogni livello di testo attivo. Ogni blocco ruota fluidamente attorno alle sue coordinate centrali per timbri inclinati, callout o didascalie giocose.',
      },
      {
        question: 'Come scala la Dimensione del testo (2%–22%) su foto piccole rispetto a foto 4K?',
        answer:
          'La dimensione del carattere scala come percentuale della larghezza dell\'immagine di output (con un minimo di 12 px). Questo mantiene le proporzioni coerenti tra l\'anteprima sullo schermo e i file esportati a piena risoluzione.',
      },
      {
        question: 'Le schermate o le foto di famiglia vengono caricate da qualche parte quando aggiungo didascalie?',
        answer:
          'No, la composizione su Canvas renderizza ogni glifo di carattere, tratto, ombra e rotazione in locale dentro la tua scheda del browser. Le tue immagini di base e le grafiche finite non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Cosa succede agli adesivi PNG trasparenti se esporto con il testo aggiunto?',
        answer:
          'Scegliendo Orig (da PNG/WebP), PNG o WebP, le aree trasparenti intorno alla tua grafica vengono preservate in modo pulito. Se scegli l\'output JPG, le regioni trasparenti vengono appiattite fluidamente su uno sfondo bianco pieno.',
      },
      {
        question: 'Come rimuovo un livello di testo extra senza cancellare l\'intera immagine?',
        answer:
          'Seleziona la scheda del livello che vuoi eliminare e clicca sull\'icona del cestino accanto al pulsante Aggiungi. Quando resta un solo livello, svuotare la sua casella di testo lo nasconde temporaneamente senza perdere l\'editor.',
      },
      {
        question: 'Posso cambiare la foto di sfondo senza perdere i miei livelli di testo con stile?',
        answer:
          'Clicca su Cambia immagine nell\'intestazione dell\'anteprima per tornare alla zona di caricamento e caricare un altro file. I tuoi livelli di testo e lo stile esistenti restano pronti, così puoi riutilizzare la stessa impostazione di didascalia su più foto.',
      },
      {
        question: 'Quali formati di file immagine posso aprire per aggiungere testo?',
        answer:
          'L\'editor apre file JPG, PNG, WebP, HEIC/HEIF di iPhone, GIF, BMP e SVG fino a 20 MB ciascuno. I GIF animati vengono esportati come un singolo fotogramma statico con didascalia.',
      },
      {
        question: 'Posso trascinare i livelli di testo usando il touchscreen di uno smartphone?',
        answer:
          'Sì, il trascinamento sul canvas si basa su eventi Pointer touch-none pensati per dita e stilo. Puoi riposizionare le didascalie in modo pulito in Safari su iOS e Chrome su Android senza scorrere la pagina.',
      },
      {
        question: 'In che modo l\'Ombra migliora la leggibilità insieme al Contorno del testo?',
        answer:
          'L\'Ombra proietta una morbida sfocatura scura scalata in proporzione alla dimensione del carattere sotto le lettere. Attivare l\'Ombra senza contorno crea sottotitoli editoriali puliti, mentre abbinare entrambi massimizza la leggibilità su texture affollate.',
      },
      {
        question: 'Posso incollare una schermata con Ctrl+V per annotarla rapidamente?',
        answer:
          'Sì, copia qualsiasi schermata o slide e premi Ctrl+V (o Cmd+V su Mac) nella pagina prima di caricare un file. Viene caricata direttamente nel canvas, pronta per callout di testo ed esportazione pulita.',
      },
      {
        question: 'Perché non vedo il cursore Qualità quando esporto in PNG?',
        answer:
          'Il PNG codifica le immagini senza perdita e non prevede un cursore per la percentuale di qualità. Scegli Orig (per i JPEG), JPG o WebP se vuoi regolare la Qualità di esportazione dal 10% al 100%.',
      },
      {
        question: 'L\'aggiunta di testo tramite Canvas rimuove i tag GPS EXIF nascosti della fotocamera?',
        answer:
          'Sì, disegnare su un nuovo Canvas HTML5 crea una bitmap nuova di zecca senza copiare le intestazioni EXIF. La tua posizione GPS e i metadati della fotocamera restano rimossi dall\'esportazione salvata.',
      },
      {
        question: 'Quale nome di file viene salvato quando scarico una foto annotata?',
        answer:
          'I file scaricati mantengono il tuo nome base ripulito e aggiungono _text più l\'estensione scelta (come meme_text.jpg). Questo evita di sovrascrivere la tua immagine originale non annotata.',
      },
      {
        question: 'In cosa è diverso dallo strumento Filigrana per immagini?',
        answer:
          'Filigrana per immagini si concentra su singoli timbri di marca o a mosaico diagonale e su loghi PNG/SVG caricati. Aggiungi testo a immagine offre invece più livelli di testo indipendenti trascinabili, 5 caratteri, controlli grassetto/corsivo e spessi tratti per meme.',
      },
      {
        question: 'CompressMyPic inserisce un logo o una filigrana sulle immagini esportate qui?',
        answer:
          'No, i tuoi file scaricati contengono solo la tua immagine e i livelli di testo esatti che hai creato. Tutto funziona gratis nel tuo browser, senza filigrane e senza registrazione.',
      },
    ],
    relatedSlugs: ['/image-watermark', '/image-border-generator', '/image-filters', '/'],
  },
  {
    slug: '/image-border-generator',
    name: 'Generatore di bordi per immagini',
    shortDescription: 'Aggiungi bordi solidi o sfumati, cornici, angoli arrotondati e ombre.',
    category: 'crop-edit',
    seoTitle: 'Generatore bordi immagine gratis – Solido, sfumato, Polaroid',
    seoDescription:
      'Inquadra le foto con il nostro generatore di bordi gratuito: cornici solide, sfumate lineari o Polaroid, angoli arrotondati e ombre, direttamente nel browser.',
    h1: 'Generatore gratuito di bordi per immagini',
    subtitle:
      'Pensato per fotografi, proprietari di negozi Etsy, designer di portfolio e creator social, il nostro generatore gratuito di bordi per immagini avvolge qualsiasi foto in eleganti passe-partout, sfumature a due colori o classiche cornici Polaroid. Regola con precisione spessore del bordo, raggi di angolo interni ed esterni e ombre di elevazione direttamente nel browser prima di esportare.',
    howToSteps: [
      {
        title: 'Trascina o seleziona un\'immagine da incorniciare',
        description:
          'Carica qualsiasi foto JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB, oppure incollala con Ctrl+V.',
      },
      {
        title: 'Scegli una Preimpostazione rapida di cornice o uno Stile di bordo',
        description:
          'Clicca su Bianco classico, Cornice Polaroid, Studio scuro o Bagliore sfumato, oppure passa manualmente tra gli stili Solido, Sfumato e Polaroid.',
      },
      {
        title: 'Personalizza i colori della cornice e l\'angolo della sfumatura',
        description:
          'Imposta il Colore bordo in modalità Solido/Polaroid, oppure scegli Colore iniziale, Colore finale e Angolo sfumatura (0°–360°) per le cornici a sfumatura lineare.',
      },
      {
        title: 'Regola Dimensione bordo e raggi di angolo',
        description:
          'Scorri Dimensione bordo (1%–25%) insieme ai cursori indipendenti Raggio cornice (0%–30%) e Raggio foto (0%–30%).',
      },
      {
        title: 'Scegli Ombra e anteprima del formato',
        description:
          'Seleziona Ombra tra nessuna, morbida, media o profonda e scegli l\'output PNG, JPG o WEBP controllando l\'anteprima a scacchiera.',
      },
      {
        title: 'Scarica la tua immagine incorniciata',
        description:
          'Clicca su Scarica immagine incorniciata per renderizzare bordo e ombra alla piena risoluzione originale e salvare <nome>_framed.',
      },
    ],
    features: [
      { title: 'Bordi solidi e sfumati', description: 'Crea eleganti passe-partout o vivaci cornici a sfumatura lineare a due colori.' },
      { title: 'Stili di cornice preimpostati', description: 'Applica subito i look Polaroid, Bianco galleria, Studio scuro o Sfumatura tramonto.' },
      { title: 'Raggio di angolo e ombra', description: 'Arrotonda gli angoli interni della foto o esterni della cornice e aggiungi ombre di elevazione realistiche.' },
      { title: 'Supporto PNG senza perdita', description: 'Esporta in PNG per preservare gli angoli esterni trasparenti intorno a ombre e cornici arrotondate.' },
    ],
    faqs: [
      {
        question: 'In che modo lo Stile bordo Polaroid differisce da un bordo standard Solido?',
        answer:
          'I bordi solidi avvolgono un\'imbottitura uniforme su tutti e quattro i lati della tua foto, mentre Polaroid aggiunge un\'altezza extra di cornice bianca di 3,2× lungo il bordo inferiore per replicare le classiche stampe istantanee. Cliccando sulla preimpostazione Cornice Polaroid configuri proporzioni pulite in un clic.',
      },
      {
        question: 'Perché le Ombre scompaiono quando passo il formato di output a JPG?',
        answer:
          'I file JPG non supportano un canale di trasparenza alfa per far sfumare in modo pulito le ombre di elevazione morbide e semitrasparenti sugli sfondi di pagina. Il nostro renderer preserva l\'imbottitura dell\'Ombra nelle esportazioni PNG e WebP trasparenti, mantenendo bordi nitidi sui JPG a bianco pieno.',
      },
      {
        question: 'Qual è la differenza tra Raggio cornice e Raggio foto?',
        answer:
          'Raggio cornice (0%–30%) curva gli angoli esterni del bordo colorato stesso, mentre Raggio foto (0%–30%) curva gli angoli interni della tua fotografia dentro quel passe-partout. Abbinare o contrastare entrambi ti permette di costruire eleganti schede UI o passe-partout da galleria nitidi.',
      },
      {
        question: 'Come calcola la cornice Bagliore sfumato angolo e colori?',
        answer:
          'Selezionando lo stile Sfumato compaiono Colore iniziale, Colore finale e un cursore Angolo sfumatura da 0° a 360° che disegna una sfumatura lineare completa diagonale o direzionale dietro la tua foto. Puoi cliccare su Bagliore sfumato in Preimpostazioni rapide di cornice per uno stile istantaneo da blu a smeraldo.',
      },
      {
        question: 'Aggiungere un bordo ritaglia qualche bordo della mia foto originale?',
        answer:
          'No, il generatore di bordi espande il canvas verso l\'esterno intorno alla larghezza e all\'altezza originali complete della tua immagine, anziché coprire i tuoi pixel. Solo impostando Raggio foto sopra lo 0% arrotondi delicatamente i quattro angoli interni dell\'immagine.',
      },
      {
        question: 'Come viene calcolata la Dimensione bordo (1%–25%) su foto alte rispetto a foto larghe?',
        answer:
          'Lo spessore del bordo viene calcolato come percentuale della dimensione più corta della tua immagine, min(larghezza, altezza). Questo mantiene i margini superiori, inferiori e laterali bilanciati in modo uniforme sia su banner 16:9 sia su ritratti 4:5.',
      },
      {
        question: 'Cosa configurano automaticamente le quattro Preimpostazioni rapide di cornice?',
        answer:
          'Bianco classico imposta un passe-partout bianco da galleria al 10% con ombra morbida, mentre Cornice Polaroid aggiunge un margine inferiore da stampa istantanea. Studio scuro applica una cornice ardesia e Bagliore sfumato crea un bordo a sfumatura blu-smeraldo a 135°.',
      },
      {
        question: 'Perché l\'anteprima mostra una scacchiera grigia e bianca intorno alla mia cornice?',
        answer:
          'Quella scacchiera visualizza i veri pixel trasparenti al di fuori degli angoli arrotondati della cornice e dentro le ombre morbide. Quando esporti come PNG o WebP, quelle regioni a scacchiera restano completamente trasparenti su qualsiasi sito web o slide di presentazione.',
      },
      {
        question: 'L\'incorniciatura avviene in locale senza caricare le mie fotografie?',
        answer:
          'Sì, la pittura della sfumatura, il ritaglio degli angoli, il rendering delle ombre e l\'esportazione del Blob avvengono rigorosamente dentro Canvas HTML5 sul tuo dispositivo. Nulla viene mai caricato su server esterni.',
      },
      {
        question: 'Quali formati di file immagine si possono caricare nel generatore di bordi?',
        answer:
          'Puoi trascinare immagini JPG, PNG, WebP, HEIC/HEIF di iPhone, GIF, BMP e SVG fino a 20 MB ciascuna. I GIF animati vengono esportati come primo fotogramma statico incorniciato.',
      },
      {
        question: 'Posso cambiare il colore della cornice di una Preimpostazione rapida dopo averla cliccata?',
        answer:
          'Sì, le preimpostazioni compilano semplicemente per te i controlli di Stile bordo, colore, raggio e ombra. Puoi regolare il Colore bordo, ridimensionare i margini o cambiare l\'Ombra subito dopo.',
      },
      {
        question: 'Come creo una cornice da galleria carbone scuro o pastello senza ombra?',
        answer:
          'Scegli lo stile Solido, clicca su Colore bordo per selezionare qualsiasi tonalità esadecimale personalizzata e trascina sia Raggio cornice sia Raggio foto allo 0%. Poi clicca su nessuna in Ombra per bordi piatti e nitidi.',
      },
      {
        question: 'La mia immagine incorniciata scaricata sarà a piena risoluzione?',
        answer:
          'Sì, l\'anteprima sullo schermo viene ridotta solo per adattarsi comodamente al tuo layout. Cliccando su Scarica immagine incorniciata costruisci un Canvas nuovo di zecca con la risoluzione esatta in pixel della tua foto originale più la cornice e l\'ombra scalate.',
      },
      {
        question: 'Devo esportare in PNG o WebP quando mantengo gli angoli arrotondati trasparenti della cornice?',
        answer:
          'Scegli PNG quando vuoi nitidezza senza perdita intorno a bordi sottili e asset di stampa. Scegli WebP per schede web veloci e leggere che preservano comunque angoli esterni trasparenti e ombre di elevazione.',
      },
      {
        question: 'Posso incollare una schermata direttamente dagli appunti per avvolgerla in una cornice?',
        answer:
          'Sì, premi Ctrl+V (o Cmd+V su Mac) nella zona di caricamento subito dopo aver fatto una schermata. Abbinare un bordo arrotondato, una cornice sfumata e un\'Ombra media trasforma schermate grezze in visual di presentazione curati.',
      },
      {
        question: 'Aggiungere un bordo rimuove i dati GPS EXIF nascosti della fotocamera?',
        answer:
          'Sì, la composizione su Canvas HTML5 crea una bitmap incorniciata pulita. Le intestazioni EXIF della fotocamera sorgente e le coordinate GPS vengono escluse automaticamente dal tuo PNG, JPG o WebP scaricato.',
      },
      {
        question: 'Come carico una seconda foto mentre provo le cornici?',
        answer:
          'Clicca su Cambia immagine nell\'angolo in alto a destra del pannello di anteprima per scegliere un\'altra foto. Tutti i tuoi colori di bordo, angoli di sfumatura, raggi di angolo e scelte di ombra attivi restano intatti.',
      },
      {
        question: 'Con quale nome di file viene salvata l\'immagine incorniciata?',
        answer:
          'Le esportazioni preservano il tuo nome file originale ripulito con _framed aggiunto prima di .png, .jpg o .webp. Per esempio, un file chiamato ritratto.jpg viene salvato pulito come ritratto_framed.png.',
      },
      {
        question: 'Il generatore di bordi funziona bene sui browser mobile?',
        answer:
          'Sì, ogni scheda di preimpostazione, cursore e selettore di colore funziona in modo pulito in Safari su iOS e Chrome su Android. Puoi incorniciare Polaroid o foto di prodotto direttamente dal rullino del tuo smartphone.',
      },
      {
        question: 'Ci sono filigrane, paywall o limiti di registrazione sulle foto incorniciate?',
        answer:
          'No, ogni foto incorniciata viene scaricata completamente senza filigrana e gratuitamente. Si applica solo il controllo standard di 20 MB per file per mantenere fluida la memoria locale del browser.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/add-background-to-image', '/image-filters', '/'],
  },
  {
    slug: '/round-image-corners',
    name: 'Arrotonda angoli immagine',
    shortDescription: 'Arrotonda gli angoli in modo uniforme o per singolo angolo, con output PNG trasparente.',
    category: 'crop-edit',
    seoTitle: 'Arrotonda angoli immagine gratis – PNG trasparente',
    seoDescription:
      'Arrotonda gli angoli delle immagini online gratis, con cursori uniformi o per singolo angolo, avatar circolare ed esportazione PNG o WebP trasparente.',
    h1: 'Arrotonda angoli immagine online',
    subtitle:
      'Pensato per designer UI, autori di newsletter, blogger e utenti social che creano schede o avatar eleganti, questo strumento nel browser ti permette di arrotondare gli angoli delle immagini in modo pulito a piena risoluzione. Curva tutti e quattro gli angoli in modo uniforme, attiva cursori individuali per singolo angolo oppure passa a un cerchio completo con output PNG/WebP trasparente.',
    howToSteps: [
      {
        title: 'Trascina o scegli la tua immagine',
        description:
          'Carica una foto JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB nell\'area di caricamento, oppure incollala con Ctrl+V.',
      },
      {
        title: 'Regola il Raggio di tutti gli angoli oppure clicca su Cerchio completo / Pillola',
        description:
          'Trascina il cursore Raggio di tutti gli angoli (0%–100%, con la curvatura esatta in pixel) oppure clicca su Cerchio completo / Pillola per passare al 100%.',
      },
      {
        title: 'Attiva facoltativamente il Controllo individuale per singolo angolo',
        description:
          'Attiva Controllo individuale per singolo angolo per modellare gli angoli In alto a sinistra, In alto a destra, In basso a sinistra e In basso a destra in modo indipendente.',
      },
      {
        title: 'Scegli Riempimento esterno Trasparente o a Colore pieno',
        description:
          'Mantieni Trasparente (PNG/WebP) attivo per angoli arrotondati trasparenti, oppure passa a Colore pieno e scegli qualsiasi sfondo esadecimale.',
      },
      {
        title: 'Seleziona il formato di output (PNG, WebP o JPG)',
        description:
          'Scegli PNG per bordi alfa senza perdita, WebP per asset web trasparenti più leggeri o JPG per sfondi opachi ad angoli pieni.',
      },
      {
        title: 'Scarica la tua immagine arrotondata',
        description:
          'Controlla l\'anteprima a scacchiera e clicca su Scarica immagine arrotondata per esportare <nome>_rounded alle dimensioni originali complete.',
      },
    ],
    features: [
      { title: 'Raggio uniforme e per singolo angolo', description: 'Arrotonda tutti gli angoli in modo uniforme fino a pillola/cerchio, oppure modella ogni angolo in modo indipendente.' },
      { title: 'Veri angoli trasparenti', description: 'Esporta PNG o WebP con trasparenza alfa antialias pulita al di fuori della maschera arrotondata.' },
      { title: 'Sfondo pieno facoltativo', description: 'Riempi gli angoli esterni con qualsiasi colore esadecimale personalizzato se esporti in JPG.' },
      { title: 'Output a piena risoluzione', description: 'Mantiene le tue dimensioni esatte in pixel originali mentre ritaglia gli angoli in modo pulito.' },
    ],
    faqs: [
      {
        question: 'Perché devo usare PNG o WebP per mantenere trasparenti gli angoli arrotondati?',
        answer:
          'Il formato JPEG non supporta un canale di trasparenza alfa, quindi gli angoli al di fuori di una maschera arrotondata diventerebbero sempre bianco pieno o opachi. PNG e WebP preservano una trasparenza antialias a 8 bit fluida, così la tua scheda o il tuo avatar arrotondato si fonde perfettamente su qualsiasi colore di pagina web o slide.',
      },
      {
        question: 'Come funziona la scorciatoia Cerchio completo / Pillola su foto quadrate rispetto a foto rettangolari?',
        answer:
          'Cliccando su Cerchio completo / Pillola imposti il Raggio di tutti gli angoli al 100% della metà del lato più corto, min(larghezza, altezza) / 2. Su un\'immagine quadrata 1:1, questo taglia un cerchio perfetto; su un banner più largo, forma una morbida forma a pillola da stadio.',
      },
      {
        question: 'Cosa succede se voglio arrotondare solo i due angoli superiori per una scheda di blog?',
        answer:
          'Seleziona Controllo individuale per singolo angolo per sbloccare quattro cursori separati per In alto a sinistra, In alto a destra, In basso a sinistra e In basso a destra (ciascuno 0%–100%). Imposta In basso a sinistra e In basso a destra allo 0% mentre arrotondi solo gli angoli superiori.',
      },
      {
        question: 'Come creo prima un ritratto quadrato se la mia foto è rettangolare?',
        answer:
          'Apri il nostro strumento Ritaglia immagini (collegato in Strumenti gratuiti correlati sotto), seleziona la preimpostazione di proporzioni 1:1 e scarica il tuo ritaglio quadrato. Poi trascina quel file quadrato qui e clicca su Cerchio completo / Pillola per un avatar circolare nitido.',
      },
      {
        question: 'Cosa significa la lettura live in pixel accanto a Raggio di tutti gli angoli?',
        answer:
          'Accanto al cursore 0%–100%, l\'etichetta calcola la curva esatta dell\'angolo in veri pixel di output (per esempio 120px (24%)) rispetto alle dimensioni originali della tua immagine. Questo rende semplice abbinare i valori CSS border-radius.',
      },
      {
        question: 'Quando dovrei scegliere Colore pieno in Riempimento angoli esterni invece di Trasparente?',
        answer:
          'Scegli Colore pieno quando prevedi di esportare un JPG leggero, abbinare uno specifico sfondo di scheda in modalità scura o caricare in un\'app che sostituisce l\'alfa PNG trasparente con nero. Puoi scegliere il bianco o qualsiasi codice esadecimale esatto con il selettore di colore.',
      },
      {
        question: 'Cosa succede automaticamente se clicco su Trasparente (PNG/WebP) mentre è selezionato JPG?',
        answer:
          'I file JPG non possono memorizzare la trasparenza alfa negli angoli esterni. Cliccando su Trasparente (PNG/WebP), il Formato di output passa quindi automaticamente a PNG, così i tuoi angoli arrotondati restano trasparenti.',
      },
      {
        question: 'Arrotondare gli angoli riduce la larghezza e l\'altezza della mia foto?',
        answer:
          'No, l\'immagine esportata mantiene la tua larghezza e altezza esatte in pixel. Solo le regioni degli angoli esterni vengono ritagliate in modo fluido usando curve quadratiche d\'angolo.',
      },
      {
        question: 'Perché i bordi curvi appaiono fluidi invece di pixel frastagliati?',
        answer:
          'Canvas HTML5 ritaglia lungo percorsi vettoriali quadratici di Bézier con smoothing di alta qualità attivo. Questo crea un morbido antialiasing sub-pixel lungo le curve che si fonde naturalmente con sfondi di pagina scuri o chiari.',
      },
      {
        question: 'Ritratti o avatar di profilo vengono caricati su qualche server durante il ritaglio degli angoli?',
        answer:
          'No, il ritaglio del percorso e la codifica PNG/WebP avvengono rigorosamente dentro la tua scheda del browser tramite Canvas HTML5. Foto personali e loghi di marca non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Quali formati di input si possono arrotondare in questo strumento?',
        answer:
          'Trascina file JPG, PNG, WebP, HEIC/HEIF di iPhone, GIF, BMP o SVG fino a 20 MB ciascuno. I GIF animati esportano un primo fotogramma statico arrotondato.',
      },
      {
        question: 'Posso incollare una schermata dagli appunti direttamente per arrotondarne gli angoli?',
        answer:
          'Sì, fai una schermata e premi Ctrl+V (o Cmd+V su Mac) quando la zona di caricamento è attiva. Si apre direttamente nell\'anteprima a scacchiera, pronta per l\'arrotondamento degli angoli.',
      },
      {
        question: 'Cosa succede ai miei valori Individuali per singolo angolo se deseleziono la modalità per singolo angolo?',
        answer:
          'Deselezionando Controllo individuale per singolo angolo, il canvas torna al singolo cursore Raggio di tutti gli angoli, così tutti e quattro gli angoli restano uniformi. Riselezionandolo, tutti e quattro i cursori d\'angolo vengono inizializzati in modo pulito dal tuo raggio uniforme attuale.',
      },
      {
        question: 'Arrotondare gli angoli rimuove anche i tag GPS EXIF incorporati?',
        answer:
          'Sì, il rendering dei pixel tramite un ritaglio Canvas pulito rimuove automaticamente le intestazioni EXIF JPEG originali e i GPS. Questo protegge la privacy quando condividi avatar arrotondati o miniature di prodotto online.',
      },
      {
        question: 'Come sostituisco l\'immagine corrente mantenendo la mia configurazione di raggio d\'angolo?',
        answer:
          'Clicca su Cambia immagine sopra l\'area di anteprima per caricare una nuova foto. Il tuo raggio uniforme, i valori per singolo angolo, la modalità di riempimento e il formato di output restano attivi per esportazioni ripetute veloci.',
      },
      {
        question: 'Quale nome di file viene assegnato alle immagini arrotondate scaricate?',
        answer:
          'Il downloader mantiene il tuo nome file originale ripulito e aggiunge _rounded prima di .png, .webp o .jpg. Per esempio, avatar.jpg viene scaricato pulito come avatar_rounded.png.',
      },
      {
        question: 'Devo scegliere PNG o WebP quando esporto grafiche web arrotondate?',
        answer:
          'Scegli PNG per la massima compatibilità con app più vecchie e nitidezza dei bordi senza perdita. Scegli WebP quando vuoi asset web sostanzialmente più piccoli che mantengono comunque la piena trasparenza alfa degli angoli.',
      },
      {
        question: 'Posso usare Arrotonda angoli immagine su browser mobile iOS o Android?',
        answer:
          'Sì, tutti i cursori, le caselle di controllo e i pulsanti di formato si adattano fluidamente agli schermi mobile in Safari e Chrome. Puoi arrotondare gli angoli dei ritratti direttamente dal rullino del tuo telefono.',
      },
      {
        question: 'In cosa è diverso questo strumento dal Generatore di bordi per immagini?',
        answer:
          'Arrotonda angoli immagine ritaglia la tua foto in modo pulito alle sue dimensioni originali senza aggiungere imbottitura esterna. Il Generatore di bordi per immagini avvolge invece passe-partout colorati, sfumature o cornici Polaroid intorno alla tua foto.',
      },
      {
        question: 'Ci sono filigrane, costi o limiti giornalieri sulle esportazioni arrotondate?',
        answer:
          'No, puoi arrotondare gli angoli di foto illimitate fino a 20 MB per file completamente gratis. Nessuna filigrana, account o paywall compare mai sui download.',
      },
    ],
    relatedSlugs: ['/image-border-generator', '/image-cropper', '/add-background-to-image', '/'],
  },
  {
    slug: '/image-brightness-editor',
    name: 'Editor luminosità immagine',
    shortDescription: 'Schiarisci o scurisci le foto con anteprima live prima/dopo.',
    category: 'crop-edit',
    seoTitle: 'Editor luminosità immagine gratis – Schiarisci foto',
    seoDescription:
      'Regola la luce delle foto con il nostro editor di luminosità gratuito: scorri da -100% a +100%, usa preimpostazioni rapide, confronta prima e dopo, in privato.',
    h1: 'Editor luminosità immagine online gratis',
    subtitle:
      'Pensato per fotografi che correggono scatti sottoesposti, agenti immobiliari che schiariscono stanze e venditori che rifiniscono foto di prodotto, il nostro editor di luminosità nel browser regola l\'illuminazione in modo fluido senza caricare gli originali. Regola il cursore da -100% a +100%, prova preimpostazioni di luce istantanee e ispeziona i risultati con il confronto live diviso.',
    howToSteps: [
      {
        title: 'Trascina o seleziona una foto da schiarire o scurire',
        description:
          'Carica qualsiasi immagine JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB nell\'area di caricamento, oppure incollala con Ctrl+V.',
      },
      {
        title: 'Regola il cursore Livello di luminosità o le Preimpostazioni rapide',
        description:
          'Sposta il Livello di luminosità da -100% Più scuro a +100% Più chiaro, oppure clicca su Scuro (-30%), Fioco (-15%), Originale (0%), Chiaro (+15%), Vivido (+30%) o Chiave alta (+50%).',
      },
      {
        title: 'Confronta le viste Dopo, Prima e Confronto diviso',
        description:
          'Passa tra le schede Dopo, Prima e Confronto diviso, oppure avvia Confronto a schermo intero, per verificare dettagli di ombre e luci.',
      },
      {
        title: 'Seleziona Formato di output e Qualità',
        description:
          'Scegli l\'output Originale, JPG, PNG o WEBP e regola il cursore Qualità (10%–100%) quando salvi in formati con perdita.',
      },
      {
        title: 'Scarica la tua immagine modificata',
        description:
          'Clicca su Scarica immagine modificata per elaborare la curva di luminosità alla piena risoluzione originale e salvare <nome>_brightness in locale.',
      },
    ],
    features: [
      { title: 'Regolazione pixel in tempo reale', description: 'Anteprima istantanea su browser desktop e mobile senza round-trip al server.' },
      { title: 'Preimpostazioni rapide di esposizione', description: 'Prova le preimpostazioni Scuro, Fioco, Chiaro, Vivido e Chiave alta in un clic.' },
      { title: 'Ispezione prima e dopo', description: 'Confronta la foto modificata affiancata o con il cursore interattivo di confronto.' },
      { title: 'Elaborazione privata lato client', description: 'Le tue foto personali restano rigorosamente dentro il tuo browser.' },
    ],
    faqs: [
      {
        question: 'In che modo il cursore Livello di luminosità cambia i pixel senza sbiadire subito i colori?',
        answer:
          'Spostare il Livello di luminosità tra -100% Più scuro e +100% Più chiaro regola la luminanza in modo fluido su tutta l\'inquadratura in tempo reale dentro Canvas HTML5. Controllando Confronto diviso o Confronto a schermo intero puoi schiarire le ombre scure senza tagliare i bianchi luminosi.',
      },
      {
        question: 'Perché la mia foto viene automaticamente anteprima a +15% subito dopo il caricamento?',
        answer:
          'L\'editor si avvia su Chiaro (+15%), così vedi subito un leggero aumento di esposizione al caricamento. Clicca su Originale (0%) o Reimposta in Controlli di luminosità in qualsiasi momento per confrontare dalla base neutra.',
      },
      {
        question: 'Quali Preimpostazioni rapide sono incluse per testare l\'esposizione in un clic?',
        answer:
          'Sei preimpostazioni coprono le regolazioni comuni: Scuro (-30%), Fioco (-15%), Originale (0%), Chiaro (+15%), Vivido (+30%) e Chiave alta (+50%). Cliccando una scheda il cursore scatta subito, lasciandoti comunque regolare con precisione in passi dell\'1%.',
      },
      {
        question: 'In cosa differiscono Dopo, Prima, Confronto diviso e Confronto a schermo intero?',
        answer:
          'Dopo mostra il tuo canvas modificato, Prima rivela l\'immagine originale intatta e Confronto diviso aggiunge un cursore interattivo Prima/Dopo direttamente dentro l\'area di visualizzazione. Cliccando su Confronto a schermo intero renderizzi un Blob a piena risoluzione e apri la modale di confronto dettagliata.',
      },
      {
        question: 'Schiarire una foto ne riduce la risoluzione o le dimensioni in pixel?',
        answer:
          'No, l\'anteprima live scala fino a 1000 px solo per una risposta fluida del cursore interattivo. Cliccando su Scarica immagine modificata renderizzi un Canvas a piena risoluzione che preserva larghezza e altezza originali esatte della tua immagine.',
      },
      {
        question: 'Quando dovrei scurire una foto usando valori negativi come -15% o -30%?',
        answer:
          'I valori negativi di luminosità attenuano in modo pulito scatti da telefono sovraesposti e abbagliamenti di finestre. Scurire una foto hero luminosa crea anche un contrasto migliore dietro titoli bianchi sovrapposti.',
      },
      {
        question: 'L\'editor di luminosità preserva gli sfondi trasparenti sui PNG?',
        answer:
          'Sì, mantenendo Originale (per PNG/WebP) o scegliendo PNG o WebP preservi le aree trasparenti in modo pulito contro l\'area di visualizzazione a scacchiera. Se scegli l\'output JPG, le regioni trasparenti vengono appiattite fluidamente su bianco pieno.',
      },
      {
        question: 'Foto di famiglia personali o bozze di clienti vengono caricate su server esterni?',
        answer:
          'No, le trasformazioni di luminosità dei pixel e la codifica del formato avvengono in locale nel tuo browser usando Canvas HTML5. Le tue immagini non lasciano mai il tuo computer o smartphone.',
      },
      {
        question: 'Quali formati di file immagine posso schiarire o scurire qui?',
        answer:
          'Puoi aprire file JPG, PNG, WebP, HEIC/HEIF di iPhone, GIF, BMP e SVG fino a 20 MB ciascuno. I GIF animati esportano il loro fotogramma iniziale schiarito come immagine statica.',
      },
      {
        question: 'Posso incollare una schermata scura direttamente dagli appunti per schiarirla?',
        answer:
          'Sì, premi Ctrl+V (o Cmd+V su Mac) nella zona di caricamento dopo aver copiato una schermata o una slide scura. Viene caricata direttamente nell\'area live, pronta da regolare ed esportare.',
      },
      {
        question: 'Cosa succede se spingo la luminosità fino a +100%?',
        answer:
          'Impostazioni positive estreme schiariscono fortemente i mezzi toni e spingono le luci verso il bianco puro, utile per grafiche high-key stilizzate ma può tagliare le texture delle luci nei ritratti. Punta a +10% a +35% per un recupero naturale dell\'esposizione.',
      },
      {
        question: 'Posso regolare contrasto o vividezza dei colori dopo aver schiarito un\'immagine?',
        answer:
          'Sì, scarica prima la tua foto schiarita, poi clicca su Editor contrasto immagine o Editor saturazione immagine in Strumenti gratuiti correlati sotto. Dividere le regolazioni tra strumenti dedicati ti permette di calibrare con precisione il contrasto o la ricchezza dei colori.',
      },
      {
        question: 'Perché la Qualità scompare quando seleziono PNG in Formato di output?',
        answer:
          'Il PNG usa compressione senza perdita senza un livello di qualità variabile in percentuale. Passa a Originale (per i JPEG), JPG o WebP per far comparire e regolare il cursore Qualità dal 10% al 100% (predefinito al 90%).',
      },
      {
        question: 'Come annullo rapidamente tutte le modifiche di luminosità?',
        answer:
          'Clicca sul pulsante blu Reimposta nell\'angolo in alto a destra di Controlli di luminosità in qualsiasi momento. Puoi anche cliccare sulla scheda preimpostata Originale (0%) per tornare direttamente a zero regolazioni.',
      },
      {
        question: 'Esportare una foto modificata rimuove i tag di posizione GPS EXIF della fotocamera?',
        answer:
          'Sì, disegnare su un nuovo Canvas HTML5 costruisce una bitmap di output pulita senza copiare i dati EXIF della fotocamera. Eventuali coordinate GPS o numeri di serie del dispositivo vengono rimossi automaticamente.',
      },
      {
        question: 'Posso caricare un\'altra foto subito dopo l\'esportazione senza aggiornare la pagina?',
        answer:
          'Sì, clicca sull\'icona rossa del cestino (Rimuovi immagine) nella barra degli strumenti di anteprima in qualsiasi momento. Questo cancella la foto attiva in modo pulito e ti riporta direttamente alla zona di caricamento.',
      },
      {
        question: 'Quale nome di file viene usato quando clicco su Scarica immagine modificata?',
        answer:
          'L\'esportatore mantiene il tuo nome file originale ripulito e aggiunge _brightness più l\'estensione del formato selezionato. Per esempio, cucina.jpg viene salvata pulita come cucina_brightness.jpg.',
      },
      {
        question: 'L\'editor funziona in modo affidabile su Safari iPhone e Chrome Android?',
        answer:
          'Sì, ogni scheda di preimpostazione, cursore e vista di confronto diviso funziona fluidamente sui touchscreen mobile. Puoi schiarire scatti scuri del rullino direttamente in Safari o Chrome sul tuo telefono.',
      },
      {
        question: 'Perché una JPEG scura e compressa può mostrare un leggero rumore a blocchi quando viene schiarita molto?',
        answer:
          'Le ombre dei JPEG fortemente compressi spesso nascondono artefatti di quantizzazione nell\'oscurità; aumentare la luminosità di +40% o più rende visibile il rumore d\'ombra esistente. Mantenere regolazioni moderate (+15% a +30%) preserva toni più puliti.',
      },
      {
        question: 'C\'è una filigrana, una registrazione account o un limite nello schiarire le foto?',
        answer:
          'No, l\'editor di luminosità è completamente gratuito, senza filigrane né registrazioni. Puoi schiarire o scurire foto illimitate fino a 20 MB per file.',
      },
    ],
    relatedSlugs: ['/image-contrast-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-contrast-editor',
    name: 'Editor di contrasto per immagini',
    shortDescription: 'Aumenta o attenua il contrasto delle immagini con confronto dal vivo prima/dopo.',
    category: 'crop-edit',
    seoTitle: 'Editor di contrasto immagini gratis online',
    seoDescription:
      'Regola il contrasto delle tue foto gratis online: da -100% a +100%, con 6 preimpostazioni, confronto prima/dopo e anteprima dal vivo, senza registrazione.',
    h1: 'Editor di contrasto per immagini gratis online',
    subtitle:
      'Pensato per fotografi, venditori online e designer che sistemano scatti nebbiosi o piatti, questo editor di contrasto nel browser ti permette di approfondire le ombre e accentuare la separazione tonale in pochi secondi. Scegli preimpostazioni con un clic, guarda le anteprime a schermo diviso ed esporta in locale senza caricamenti sul server.',
    howToSteps: [
      {
        title: 'Trascina o seleziona un\'immagine',
        description:
          'Carica una foto JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB nella zona di caricamento dell\'editor, cercala sul disco o incollala direttamente con Ctrl+V.',
      },
      {
        title: 'Guarda l\'anteprima dal vivo sul canvas',
        description:
          'La tua foto viene caricata in un\'anteprima canvas reattiva che parte da +20% di contrasto, così vedi subito come un tocco sottile influisce sulla separazione tonale.',
      },
      {
        title: 'Regola il cursore Livello di contrasto o le preimpostazioni',
        description:
          'Trascina il cursore Livello di contrasto da -100% Piatto a +100% Alto contrasto, oppure clicca Morbido (-25%), Attenuato (-10%), Originale (0%), Nitido (+20%), Deciso (+40%) o Drammatico (+70%).',
      },
      {
        title: 'Verifica i dettagli con gli strumenti di confronto',
        description:
          'Passa tra Dopo, Prima e Confronto diviso (con il cursore divisorio verticale), oppure clicca Confronto a schermo intero per ispezionare ombre e luci da vicino.',
      },
      {
        title: 'Scegli formato, qualità e scarica',
        description:
          'Seleziona Originale, JPG, PNG o WebP in Formato di uscita, regola la Qualità (10%–100%) per i formati con perdita e clicca Scarica immagine modificata.',
      },
    ],
    features: [
      {
        title: 'Curva di contrasto precisa',
        description: 'Espande o comprime con dolcezza la gamma tonale senza bruschi cambi di colore.',
      },
      {
        title: 'Preimpostazioni con un clic',
        description: 'Prova subito le preimpostazioni Morbido, Attenuato, Nitido, Deciso o Drammatico.',
      },
      {
        title: 'Modale interattivo prima/dopo',
        description: 'Ispeziona i dettagli fini di ombre e luci prima di scaricare.',
      },
      {
        title: '100% lato client',
        description: 'Elaborazione rapida nel browser, senza caricamenti né filigrane.',
      },
    ],
    faqs: [
      {
        question: 'Che effetto visivo produce spostare il cursore del livello di contrasto verso valori positivi o negativi?',
        answer:
          'Spostando il cursore sopra lo 0%, i toni scuri diventano più scuri e quelli chiari più chiari intorno al punto medio, così il soggetto si stacca dagli sfondi nebbiosi. Spostandolo sotto lo 0%, luci e ombre si comprimono verso un grigio medio neutro, per un\'estetica opaca più morbida.',
      },
      {
        question: 'Quali preimpostazioni rapide sono incluse nel pannello Controlli contrasto?',
        answer:
          'Ci sono sei preimpostazioni con un clic: Morbido (-25%), Attenuato (-10%), Originale (0%), Nitido (+20%), Deciso (+40%) e Drammatico (+70%). Cliccando una preimpostazione, il cursore del livello di contrasto si imposta subito e l\'anteprima dal vivo sul canvas si aggiorna.',
      },
      {
        question: 'Perché l\'editor di contrasto parte da +20% subito dopo aver caricato una foto?',
        answer:
          'L\'editor si avvia su Nitido (+20%) così vedi subito un miglioramento tonale attivo invece di un\'immagine invariata. Clicca Originale (0%) o Reimposta in cima ai Controlli contrasto quando vuoi per tornare a zero.',
      },
      {
        question: 'Come calcola l\'editor di contrasto le modifiche ai pixel?',
        answer:
          'Applica una curva di contrasto lineare standard pixel per pixel sui canali RGB con HTML5 Canvas, senza toccare il canale alfa. Calcolando direttamente in ImageData evita le differenze dei filtri CSS del browser su Safari per iOS e sui browser mobili.',
      },
      {
        question: 'Come controllo le ombre prima e dopo senza andare a tentativi?',
        answer:
          'Usa le schede Dopo, Prima e Confronto diviso proprio sopra l\'anteprima per trascinare una linea divisoria dal vivo dallo 0% al 100% sulla tua immagine. Per un\'ispezione più ravvicinata dei pixel, clicca Confronto a schermo intero per aprire il modale di confronto affiancato.',
      },
      {
        question: 'Aumentare il contrasto brucerà le nuvole luminose o schiaccerà le ombre nere?',
        answer:
          'Spingere il contrasto con decisione verso +70% o +100% porta le luci quasi bianche verso il 255 puro e le ombre profonde verso lo 0. Usa il Confronto diviso per tenere d\'occhio le texture sottili su camicie chiare o capelli scuri e torna a +15%–+40% se compare il clipping.',
      },
      {
        question: 'Quali tipi di file immagine posso aprire nell\'editor di contrasto?',
        answer:
          'Puoi caricare file JPG, PNG, WebP, HEIC/HEIF di iPhone, GIF, BMP e SVG fino a 20 MB per file. Le foto HEIC vengono decodificate nel tuo browser automaticamente prima di apparire sul canvas di modifica.',
      },
      {
        question: 'Posso salvare loghi PNG con sfondo trasparente dopo aver modificato il contrasto?',
        answer:
          'Sì, mantenendo il formato Originale su un PNG trasparente o selezionando PNG o WebP in uscita, la trasparenza alfa viene preservata completamente. Solo passando al formato JPG le aree trasparenti vengono riempite su uno sfondo bianco pieno.',
      },
      {
        question: 'L\'anteprima ridimensiona la risoluzione finale del download?',
        answer:
          'No, l\'anteprima a schermo limita la scala di visualizzazione a 1.000 px sul lato più lungo così il trascinamento del cursore resta istantaneo. Quando clicchi Scarica immagine modificata, la stessa formula di contrasto viene applicata al 100% delle dimensioni originali in pixel.',
      },
      {
        question: 'Posso incollare uno screenshot dagli appunti per sistemare catture schermo spente?',
        answer:
          'Sì, premi Ctrl+V (o Cmd+V su Mac) in qualsiasi punto della schermata di caricamento per caricare un\'immagine dagli appunti direttamente nell\'editor. Regolare il contrasto tra +20% e +35% è ottimo per rendere più nitide le linee deboli dei grafici o il testo grigio dell\'interfaccia.',
      },
      {
        question: 'Regolare il contrasto trasforma le foto a colori in bianco e nero?',
        answer:
          'No, il contrasto sposta la distanza di luminanza sui canali rosso, verde e blu in modo proporzionale senza rimuovere le informazioni di tonalità. Nota che un forte contrasto positivo aumenta naturalmente un po\' la vivacità percepita dei colori, mentre quello negativo li attenua.',
      },
      {
        question: 'Quale qualità scelgo esportando in JPG o WebP?',
        answer:
          'Il cursore della qualità parte dal 90%, che mantiene i gradienti tonali morbidi senza bande e i file di peso moderato. Abbassalo verso il 75%–80% per caricamenti web più leggeri, o passa a PNG per un\'uscita completamente senza perdita.',
      },
      {
        question: 'Come viene chiamato il file scaricato dopo la modifica del contrasto?',
        answer:
          'Il file salvato aggiunge _contrast al nome base originale ripulito, seguito dall\'estensione del formato scelto, per esempio portrait_contrast.jpg. Il file originale sul disco non viene mai modificato né sovrascritto.',
      },
      {
        question: 'Questo strumento può rendere nitide le foto sfocate o fuori fuoco?',
        answer:
          'Aumentare il contrasto amplia la separazione dei bordi tra aree chiare e scure, e questo può far sembrare le foto nebbiose o con foschia notevolmente più chiare. Tuttavia regola le curve tonali invece di applicare una nitidezza per convoluzione dei bordi, quindi una forte sfocatura da movimento non può essere rimessa a fuoco.',
      },
      {
        question: 'Le foto vengono caricate su server esterni per l\'elaborazione del contrasto?',
        answer:
          'No, ogni calcolo sui pixel avviene dentro la scheda del tuo browser locale con HTML5 Canvas e JavaScript. Ritratti personali, documenti scansionati e foto di prodotto non ancora pubblicate non lasciano mai il tuo computer o telefono.',
      },
      {
        question: 'Cosa succede se carico un GIF animato per regolare il contrasto?',
        answer:
          'HTML5 Canvas mostra e regola il primo fotogramma del GIF, esportando una singola immagine statica nel formato selezionato. La regolazione del contrasto su GIF animati con più fotogrammi non è supportata.',
      },
      {
        question: 'In che cosa la regolazione del contrasto differisce da quella della luminosità?',
        answer:
          'La luminosità sposta tutti i pixel insieme verso il più chiaro o il più scuro in modo uniforme, mentre il contrasto allarga o restringe il divario tra ombre scure e luci brillanti intorno al punto del grigio medio. Se una foto scura sembra slavata dopo averla schiarita, prosegui con il nostro strumento di contrasto.',
      },
      {
        question: 'Posso usare il contrasto negativo per ammorbidire le ombre dure del mezzogiorno sui ritratti?',
        answer:
          'Sì, scegliendo Morbido (-25%) o Attenuato (-10%) riduci le transizioni brusche tra la pelle illuminata dal sole e le ombre scure. Per bagliori estremi o un\'atmosfera editoriale piatta, trascina il cursore tra -30% e -50%.',
      },
      {
        question: 'Come carico una nuova foto senza ricaricare la scheda del browser?',
        answer:
          'Clicca l\'icona del cestino in alto a destra nel pannello Anteprima per eliminare l\'immagine corrente e tornare alla zona di caricamento. Così liberi la memoria temporanea del browser e prepari il canvas per il prossimo file.',
      },
      {
        question: 'L\'editor di contrasto funziona in modo affidabile su Safari per iOS e Chrome per Android?',
        answer:
          'Sì, la matematica tonale viene eseguita esplicitamente dentro array di pixel ImageData di JavaScript invece di affidarsi ai filtri CSS del canvas, che si comportano in modo incoerente sui browser mobili. Così anteprime di contrasto e download finali restano uniformi su iPhone, Android, macOS e Windows.',
      },
    ],
    relatedSlugs: ['/image-brightness-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-saturation-editor',
    name: 'Editor di saturazione per immagini',
    shortDescription: 'Aumenta la vivacità dei colori o desatura le foto in modo pulito nel browser.',
    category: 'crop-edit',
    seoTitle: 'Editor di saturazione immagini gratis online',
    seoDescription:
      'Aumenta i colori spenti o converti in bianco e nero con il nostro editor di saturazione gratis. Anteprima divisa dal vivo ed esportazione pulita nel browser.',
    h1: 'Editor di saturazione per immagini gratis online',
    subtitle:
      'Creato per fotografi, creatori social ed editor di e-commerce che bilanciano l\'intensità del colore, questo editor di saturazione nel browser regola la vivacità dei colori in base alla luminanza percepita. Passa con fluidità da un nitido -100% in scala di grigi a toni vividi +100%, con confronto diviso ed esportazione locale.',
    howToSteps: [
      {
        title: 'Carica una foto nell\'editor',
        description:
          'Trascina e rilascia qualsiasi immagine JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB, scegli un file dal tuo dispositivo o incolla con Ctrl+V.',
      },
      {
        title: 'Guarda l\'aumento iniziale del colore',
        description:
          'L\'editor si carica con il Livello di saturazione impostato a +25%, così vedi subito come un croma più ricco ravviva i colori spenti sull\'anteprima dal vivo.',
      },
      {
        title: 'Regola il Livello di saturazione o clicca una preimpostazione',
        description:
          'Trascina il cursore da -100% Scala di grigi a +100% Vivido, oppure scegli Scala di grigi (-100%), Attenuato (-40%), Originale (0%), Ricco (+30%), Vivido (+60%) o Iper (+90%).',
      },
      {
        title: 'Controlla i toni della pelle con il Confronto diviso',
        description:
          'Passa tra Dopo, Prima o Confronto diviso con il cursore a tendina, oppure clicca Confronto a schermo intero, per assicurarti che rossi e toni della pelle risultino equilibrati e non troppo saturi.',
      },
      {
        title: 'Scegli il formato di uscita e salva in locale',
        description:
          'Scegli Originale, JPG, PNG o WebP, regola la Qualità (10%–100%) se non è PNG e clicca Scarica immagine modificata.',
      },
    ],
    features: [
      {
        title: 'Saturazione che preserva la luminanza',
        description: 'Regola l\'intensità del colore in base alla luminosità percepita, così i toni restano naturali.',
      },
      {
        title: 'Da scala di grigi a iper-vivido',
        description: 'Scorri a -100% per un bianco e nero immediato o spingi in positivo per colori ricchi e vibranti.',
      },
      {
        title: 'Anteprima dal vivo prima/dopo',
        description: 'Passa da una vista all\'altra o trascina il confronto per non saturare troppo i toni della pelle.',
      },
      {
        title: 'Privato e gratis',
        description: 'Niente caricamenti, niente account e niente filigrane.',
      },
    ],
    faqs: [
      {
        question: 'Come preserva questo editor di saturazione la luminosità percepita?',
        answer:
          'Ogni pixel calcola la luminanza percepita con i pesi ITU-R BT.709 (0,2126 R + 0,7152 G + 0,0722 B) e interpola i canali RGB verso quel punto di grigio neutro o allontanandosi da esso. Così rossi e verdi vivaci non diventano innaturalmente luminosi o fangosi quando desaturi.',
      },
      {
        question: 'Quali preimpostazioni con un clic sono integrate nei Controlli saturazione?',
        answer:
          'Hai sei preimpostazioni: Scala di grigi (-100%), Attenuato (-40%), Originale (0%), Ricco (+30%), Vivido (+60%) e Iper (+90%). Cliccando un pulsante l\'anteprima si aggiorna subito e poi puoi rifinire con il cursore.',
      },
      {
        question: 'Posso trasformare un ritratto a colori in un bianco e nero pulito con un clic?',
        answer:
          'Sì, clicca la preimpostazione Scala di grigi (-100%) o trascina il Livello di saturazione tutto a sinistra fino a -100%. Poiché usa la ponderazione standard della luminanza, toni della pelle e verde si convertono in valori monocromatici dall\'aspetto naturale invece di medie piatte.',
      },
      {
        question: 'Perché il Livello di saturazione parte da +25% quando si carica un file?',
        answer:
          'Partire da +25% mostra subito un delicato aumento di vivacità appena compare la tua foto. Clicca Originale (0%) o il link Reimposta quando vuoi se preferisci regolare verso l\'alto o verso il basso dal punto neutro.',
      },
      {
        question: 'Come evito che i ritratti sembrino arancioni o neon quando aumento il colore?',
        answer:
          'Resta nella fascia +15% – +35% per le persone e passa alla scheda Confronto diviso per confrontare i toni della pelle originali con quelli del canvas potenziato. Il Confronto a schermo intero ti permette anche di ispezionare da vicino guance, labbra ed etichette di prodotto prima di esportare.',
      },
      {
        question: 'Cosa succede se aumento la saturazione di una foto già monocromatica o grigia?',
        answer:
          'I pixel in cui i valori di rosso, verde e blu sono uguali si trovano proprio sull\'asse della luminanza, quindi alzare la saturazione non può inventare un colore che non c\'è. Sulle immagini seppia o in bianco e nero con dominante calda, invece, la saturazione positiva accentua la dominante di colore sottostante.',
      },
      {
        question: 'L\'editor di saturazione supporta icone PNG trasparenti e adesivi WebP?',
        answer:
          'Sì, le regolazioni dei pixel modificano l\'intensità del colore RGB lasciando intatto il canale alfa di trasparenza. Mantieni il formato Originale o seleziona PNG o WebP in Formato di uscita per conservare gli sfondi trasparenti in modo pulito.',
      },
      {
        question: 'Cosa succede alla trasparenza se esporto un adesivo desaturato come JPG?',
        answer:
          'Poiché il JPG non supporta la trasparenza alfa, i pixel trasparenti vengono appiattiti automaticamente su un canvas bianco pieno (#FFFFFF) prima della codifica JPEG. Scegli PNG o WebP quando devi preservare la trasparenza.',
      },
      {
        question: 'Quali formati di caricamento e quale dimensione massima di file sono accettati?',
        answer:
          'Puoi rilasciare immagini JPG, PNG, WebP, HEIC/HEIF, GIF, BMP e SVG fino a 20 MB ciascuna. I GIF animati caricano il fotogramma iniziale sul canvas per la modifica e vengono esportati come immagine statica.',
      },
      {
        question: 'C\'è differenza tra la nitidezza dell\'anteprima e la risoluzione del file scaricato?',
        answer:
          'Il canvas interattivo mostra l\'anteprima fino a 1.000 px sulla dimensione più lunga, così le regolazioni del cursore risultano fluide e senza ritardi. L\'esportazione esegue un passaggio canvas a piena risoluzione con la larghezza e l\'altezza originali del tuo file.',
      },
      {
        question: 'Quando dovrei usare Attenuato (-40%) invece di Scala di grigi (-100%)?',
        answer:
          'Attenuato (-40%) calma insegne al neon troppo luminose, sfondi di stanze troppo carichi o luci dure sui prodotti, conservando sottili indizi di colore. Funziona bene per foto principali di blog tranquille o sfondi dietro al testo.',
      },
      {
        question: 'Posso incollare immagini direttamente dagli appunti nello strumento di saturazione?',
        answer:
          'Sì, copia un\'immagine o uno screenshot negli appunti e premi Ctrl+V (o Cmd+V) sul messaggio di caricamento. Si apre subito nell\'editor, pronta per regolare il colore.',
      },
      {
        question: 'Come distingue il nome del file esportato le foto modificate dagli originali?',
        answer:
          'Le esportazioni aggiungono automaticamente _saturation al nome di file originale ripulito (per esempio, sunset_saturation.jpg). L\'immagine sorgente resta intatta sul tuo dispositivo.',
      },
      {
        question: 'Quale impostazione di qualità si applica salvando come Originale, JPG o WebP?',
        answer:
          'Le esportazioni JPG e WebP partono da una qualità predefinita del 90%, che puoi regolare dal 10% al 100% prima di scaricare. Quando selezioni PNG, il cursore della qualità si nasconde perché il PNG esporta sempre senza perdita.',
      },
      {
        question: 'Le foto caricate vengono trasmesse a GPU cloud o server di terze parti?',
        answer:
          'Mai: ogni calcolo sui pixel viene eseguito dentro la scheda del tuo browser locale, sull\'hardware del tuo dispositivo. Nessun dato di immagine, preimpostazione o nome di file viene inviato in rete.',
      },
      {
        question: 'La modifica della saturazione qui rimuove i metadati EXIF GPS o della fotocamera?',
        answer:
          'Sì, disegnare su HTML5 Canvas e scrivere un nuovo blob di immagine omette le intestazioni EXIF originali come i numeri di serie della fotocamera e i tag di posizione GPS. Questo aiuta a mantenere le foto social condivise pulite dal punto di vista della privacy.',
      },
      {
        question: 'Come reimposto solo il cursore della saturazione senza ricaricare la foto?',
        answer:
          'Clicca il pulsante Reimposta in alto a destra nei Controlli saturazione per riportare subito il cursore allo 0%. Puoi anche cliccare il pulsante di preimpostazione rapida Originale (0%) proprio sotto il cursore, senza ricaricare il file.',
      },
      {
        question: 'Posso potenziare fogliame e cieli di paesaggi con Iper (+90%) in modo pulito?',
        answer:
          'Iper (+90%) raddoppia con dolcezza le differenze di croma fino ai limiti dei canali RGB (0–255), producendo poster di viaggio drammatici e prodotti che saltano all\'occhio. Controlla rossi e blu luminosi nel Confronto diviso per essere sicuro che le texture fini di petali o tessuti non vadano in clipping.',
      },
      {
        question: 'Posso convertire un grafico PNG colorato in un WebP più leggero attenuando i colori?',
        answer:
          'Sì, imposta il livello di saturazione desiderato, seleziona WEBP in Formato di uscita e regola la qualità all\'80%–90%. Cliccando Scarica immagine modificata ottieni in un solo passaggio un WebP compatto e con il colore bilanciato.',
      },
      {
        question: 'Lo strumento funziona offline una volta caricato e su touchscreen mobili?',
        answer:
          'Sì, cursori, pulsanti di preimpostazione e cursore di confronto a vista divisa rispondono con fluidità ai gesti touch su Safari per iOS e Chrome per Android. Poiché l\'elaborazione non richiede chiamate al server, le modifiche funzionano anche con connessioni mobili lente.',
      },
    ],
    relatedSlugs: ['/image-filters', '/image-brightness-editor', '/image-contrast-editor', '/'],
  },
  {
    slug: '/image-filters',
    name: 'Filtri per immagini',
    shortDescription: 'Applica filtri in scala di grigi, seppia, vintage, caldo, freddo e noir con intensità regolabile.',
    category: 'crop-edit',
    seoTitle: 'Filtri per immagini gratis online – Vintage e seppia',
    seoDescription:
      'Dai stile alle foto gratis con i filtri per immagini online: Vintage, Seppia, Noir B/N, Caldo, Freddo e Matte Fade. Regola l\'intensità del filtro nel browser.',
    h1: 'Filtri per immagini gratis online',
    subtitle:
      'Ideali per creatori, blogger e chiunque voglia dare alle foto di tutti i giorni un\'estetica coerente, questi filtri per immagini gratis online offrono 11 gradazioni di colore curate con miniature dal vivo. Sfuma qualsiasi filtro con fluidità usando il cursore Intensità filtro e salva copie a piena risoluzione direttamente nel tuo browser.',
    howToSteps: [
      {
        title: 'Trascina o scegli un\'immagine',
        description:
          'Carica qualsiasi foto JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB, scegli un file dal disco o incolla direttamente con Ctrl+V.',
      },
      {
        title: 'Sfoglia le miniature dei filtri dal vivo',
        description:
          'Guarda la griglia di 12 schede Preimpostazioni filtro con anteprime reali in miniatura di Originale più 11 gradazioni stilizzate generate dalla tua immagine caricata.',
      },
      {
        title: 'Seleziona uno stile preimpostato',
        description:
          'Clicca Scala di grigi, Seppia, Vintage, Caldo, Freddo, Alto contrasto, Matte Fade, Drammatico, Noir B/N, Golden Hour o Inverti per applicarlo al canvas principale.',
      },
      {
        title: 'Sfuma la forza con Intensità filtro',
        description:
          'Trascina il cursore Intensità filtro tra 0% e 100% per ammorbidire le gradazioni forti in delicate velature di colore (oppure clicca Reimposta per tornare a Originale).',
      },
      {
        title: 'Tieni premuto l\'originale o apri il modale Confronta',
        description:
          'Tieni premuto Tieni premuto per vedere l\'originale per controlli A/B istantanei, oppure clicca Confronta per aprire il modale interattivo di ispezione con cursore diviso.',
      },
      {
        title: 'Scegli il Formato di uscita e scarica',
        description:
          'Scegli Originale, JPG, PNG o WebP, regola la Qualità (10%–100%) se serve e clicca Scarica immagine filtrata.',
      },
    ],
    features: [
      {
        title: 'Oltre 11 preimpostazioni di filtri curate',
        description: 'Includono Scala di grigi, Seppia, Vintage, Caldo, Freddo, Alto contrasto, Matte Fade, Drammatico, Noir B/N, Golden Hour e Inverti.',
      },
      {
        title: 'Cursore di intensità fluido',
        description: 'Sfuma qualsiasi filtro con fluidità tra 0% e 100% invece di restare bloccato su valori predefiniti bruschi.',
      },
      {
        title: 'Striscia di miniature dal vivo',
        description: 'Guarda come appare ogni filtro sulla tua foto reale prima di sceglierne uno.',
      },
      {
        title: 'Canvas 100% lato client',
        description: 'Funziona nel tuo browser, pronto anche offline, senza caricamenti sul server.',
      },
    ],
    faqs: [
      {
        question: 'Quali 11 stili di filtro posso vedere in anteprima nella griglia dei filtri per immagini online?',
        answer:
          'Accanto a Originale, la griglia genera miniature dal vivo di Scala di grigi, Seppia, Vintage, Caldo, Freddo, Alto contrasto, Matte Fade, Drammatico, Noir B/N, Golden Hour e Inverti. Ogni miniatura viene renderizzata direttamente dalla tua foto caricata e non da icone di esempio generiche.',
      },
      {
        question: 'Come funziona il cursore Intensità filtro quando è impostato tra 0% e 100%?',
        answer:
          'Impostando l\'Intensità filtro sotto il 100%, i valori dei pixel RGB filtrati vengono miscelati linearmente verso i pixel originali. Per esempio, impostare Vintage o Golden Hour al 45% applica una delicata velatura da pellicola senza sopraffare i toni naturali della pelle.',
      },
      {
        question: 'Perché lo strumento seleziona Vintage al 100% appena rilascio una foto?',
        answer:
          'Parte da Vintage a piena intensità così vedi un effetto finito sul canvas principale subito dopo il caricamento. Basta cliccare un\'altra scheda nelle Preimpostazioni filtro o cliccare Reimposta per tornare a Originale.',
      },
      {
        question: 'Qual è la differenza tra i filtri Scala di grigi e Noir B/N?',
        answer:
          'Scala di grigi converte i colori in toni di bianco e nero equilibrati usando pesi naturali di luminanza senza alterare il contrasto. Noir B/N aggiunge un forte aumento di contrasto di 1,65× sopra la conversione in scala di grigi, per ombre scure decise e luci cinematografiche brillanti.',
      },
      {
        question: 'In che modo Seppia, Vintage, Matte Fade e Golden Hour differiscono visivamente?',
        answer:
          'Seppia sposta l\'intera immagine in classici toni marroni monocromatici, mentre Vintage fonde il seppia caldo nei colori originali con un calore sottile e sbiadito. Matte Fade solleva i neri scuri in morbidi grigi ardesia, e Golden Hour potenzia rossi e gialli caldi mentre raffredda i blu delle ombre.',
      },
      {
        question: 'Come velocizza la modifica il pulsante Tieni premuto per vedere l\'originale?',
        answer:
          'Tenendo premuto Tieni premuto per vedere l\'originale con il mouse o il dito, il canvas torna temporaneamente alla tua foto non modificata e mostra un badge Originale. Rilasciando, l\'anteprima filtrata viene ripristinata all\'istante, così puoi confrontare A/B in millisecondi.',
      },
      {
        question: 'Posso ispezionare anche divisioni affiancate prima di salvare?',
        answer:
          'Sì, clicca il pulsante Confronta accanto a Tieni premuto per vedere l\'originale per aprire il modale completo di Confronto filtri. Mostra le dimensioni in byte originali e filtrate e un cursore interattivo di confronto diviso.',
      },
      {
        question: 'Le immagini scaricate vengono elaborate alle stesse dimensioni ridotte delle miniature delle preimpostazioni?',
        answer:
          'No, la griglia delle preimpostazioni usa minuscole miniature da 120 px per anteprime istantanee e l\'area di lavoro principale è limitata a 1.000 px per la reattività. Cliccando Scarica immagine filtrata, la piena risoluzione originale in pixel viene elaborata su HTML5 Canvas.',
      },
      {
        question: 'Quali formati di file e quale dimensione massima funzionano con questi filtri fotografici?',
        answer:
          'Puoi rilasciare file JPG, PNG, WebP, HEIC/HEIF di iPhone, GIF, BMP e SVG fino a 20 MB per caricamento. I formati di uscita supportati sono Originale, JPG, PNG e WebP.',
      },
      {
        question: 'Cosa succede alle aree trasparenti dei loghi PNG applicando Caldo, Freddo o Inverti?',
        answer:
          'Tutta la matematica dei pixel dei filtri modifica solo i canali rosso, verde e blu lasciando intatta la trasparenza alfa. Mantieni l\'uscita Originale, PNG o WebP per preservare gli sfondi trasparenti; selezionando JPG le zone trasparenti vengono riempite di bianco pieno.',
      },
      {
        question: 'Per cosa è più utile il filtro Inverti?',
        answer:
          'Inverti sottrae ogni canale RGB da 255 per produrre un negativo esatto a colori della tua immagine. Gli sviluppatori lo usano per invertire diagrammi in modalità scura per documenti bianchi, e i fotografi per vedere in anteprima negativi di pellicola scansionati.',
      },
      {
        question: 'Gli effetti dei filtri sono coerenti su Chrome, Firefox e Safari per iPhone?',
        answer:
          'Sì, tutte le 11 preimpostazioni vengono calcolate direttamente in cicli di pixel ImageData di JavaScript invece di affidarsi alle stringhe CSS ctx.filter. Questo garantisce colori identici su Safari per iOS, Chrome per Android e browser desktop.',
      },
      {
        question: 'Posso sovrapporre due filtri come Freddo più Matte Fade sulla stessa immagine?',
        answer:
          'Ogni preimpostazione viene calcolata direttamente dalla tua immagine originale pulita in un unico passaggio, quindi cliccando una nuova scheda cambi preimpostazione in modo pulito senza degradare la qualità. Per combinare due gradazioni, scarica il primo PNG filtrato e rilascialo di nuovo per un secondo passaggio.',
      },
      {
        question: 'Come vengono etichettati i nomi dei file di uscita per ricordare quale filtro ho esportato?',
        answer:
          'L\'esportatore aggiunge l\'ID della preimpostazione al tuo nome base di file ripulito, come photo_golden-hour.jpg o photo_noir.webp. Così è facile distinguere due o tre look di prova esportati in una cartella.',
      },
      {
        question: 'Caricare una foto per applicare filtri la invia a un server esterno?',
        answer:
          'No, miniature, anteprime canvas dal vivo ed esportazioni finali vengono eseguite completamente dentro la memoria della scheda del tuo browser. Nessuna foto viene trasferita a server remoti né archiviata in log cloud.',
      },
      {
        question: 'Posso usare i filtri Freddo o Alto contrasto su screenshot incollati dagli appunti?',
        answer:
          'Sì, premi Ctrl+V (o Cmd+V) sulla zona di caricamento per caricare subito qualsiasi screenshot copiato. Alto contrasto e Noir B/N sono particolarmente efficaci per schiarire il testo debole sulle scansioni di documenti.',
      },
      {
        question: 'Cosa succede se carico un GIF animato nello strumento filtri per immagini?',
        answer:
          'HTML5 Canvas estrae il primo fotogramma del GIF per le miniature di anteprima ed esporta un\'immagine filtrata statica. Il filtraggio di GIF animati con più fotogrammi non viene eseguito da questo strumento.',
      },
      {
        question: 'Come devo impostare la Qualità esportando file WebP o JPG filtrati?',
        answer:
          'L\'impostazione predefinita del 90% preserva in modo pulito la grana sottile della pellicola e le ombre opache senza file di grandi dimensioni. Se ti serve una conservazione senza perdita per ulteriori modifiche, scegli PNG in Formato di uscita.',
      },
      {
        question: 'Applicare un filtro rimuove i tag EXIF e GPS sensibili della fotocamera?',
        answer:
          'Sì, disegnare i pixel filtrati su un nuovo HTML5 Canvas crea un nuovo file immagine pulito senza intestazioni EXIF. I tag del modello di fotocamera, i timestamp e le coordinate GPS incorporate vengono esclusi automaticamente al download.',
      },
      {
        question: 'Come passo rapidamente a un\'altra foto dopo aver scaricato uno scatto filtrato?',
        answer:
          'Clicca l\'icona del cestino in alto a destra nel pannello Anteprima filtro per eliminare l\'immagine corrente e tornare alla zona di rilascio. Tutta la memoria di anteprima viene liberata subito per la tua prossima foto.',
      },
    ],
    relatedSlugs: ['/image-saturation-editor', '/image-brightness-editor', '/image-border-generator', '/'],
  },
  {
    slug: '/add-background-to-image',
    name: 'Aggiungi sfondo a immagine',
    shortDescription: 'Metti immagini trasparenti o incorniciate su sfondi pieni, sfumati o sfocati.',
    category: 'create',
    seoTitle: 'Aggiungi sfondo a immagine gratis – Pieno e sfumato',
    seoDescription:
      'Aggiungi uno sfondo alle immagini o ai PNG trasparenti online con colori pieni, gradienti a due toni o sfondi sfocati. Esporta in 1:1, 16:9 o 4:5, gratis.',
    h1: 'Aggiungi sfondo a immagine online',
    subtitle:
      'Pensato per venditori di e-commerce, designer di loghi ed editor di social media, questo strumento rende facile aggiungere uno sfondo alle immagini caricate o ai ritagli PNG trasparenti. Scegli campioni di colore pieno, gradienti a due colori inclinati o sfondi fotografici sfocati dimensionati per post quadrati, storie o widescreen.',
    howToSteps: [
      {
        title: 'Carica una foto o un PNG trasparente',
        description:
          'Rilascia qualsiasi immagine JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB nella zona di caricamento, selezionala dal disco o incollala con Ctrl+V.',
      },
      {
        title: 'Scegli Colore pieno, Gradiente o Foto sfocata',
        description:
          'Scegli Colore pieno con il selettore di colore e 6 campioni rapidi, Gradiente con due colori e un cursore di angolo da 0° a 360°, oppure Foto sfocata con un raggio di sfocatura da 4 a 50 px.',
      },
      {
        title: 'Seleziona un Rapporto di aspetto del canvas',
        description:
          'Clicca Orig, quadrato 1:1, widescreen 16:9, storia verticale 9:16 o ritratto social 4:5 in Rapporto di aspetto del canvas.',
      },
      {
        title: 'Regola Scala immagine, Arrotondamento e Ombra',
        description:
          'Trascina Scala immagine (40%–100%) per controllare il margine intorno al soggetto, Arrotondamento (0%–30%) per angoli morbidi e attiva Ombra dietro l\'immagine.',
      },
      {
        title: 'Scegli il formato di uscita e scarica',
        description:
          'Controlla le dimensioni esatte in pixel di uscita sotto l\'anteprima, scegli PNG, JPG o WEBP e clicca Scarica immagine.',
      },
    ],
    features: [
      {
        title: '3 modalità di sfondo',
        description: 'Scegli Colore pieno, Gradiente a due colori o Sfondo foto sfocata per scatti verticali/orizzontali con bande.',
      },
      {
        title: 'Rapporti di aspetto social e web',
        description: 'Adatta qualsiasi foto a cornici Originale, Quadrato 1:1, Widescreen 16:9, Storia 9:16 o Ritratto 4:5.',
      },
      {
        title: 'Scala, raggio e ombra in primo piano',
        description: 'Aggiungi respiro, angoli arrotondati e morbide ombre intorno all\'immagine in primo piano.',
      },
      {
        title: 'Zero caricamenti',
        description: 'Viene renderizzato in locale con HTML5 Canvas e download istantaneo.',
      },
    ],
    faqs: [
      {
        question: 'Quando dovrei usare la modalità Foto sfocata con Aggiungi sfondo a immagine?',
        answer:
          'La modalità Foto sfocata riempie i margini vuoti del canvas intorno a uno scatto verticale da telefono con una copia ingrandita e sfocata della tua stessa foto più una leggera tinta ardesia al 12%. Ti permette di inserire foto verticali 9:16 dentro banner YouTube 16:9 o quadrati 1:1 senza brutte barre nere né ritagli.',
      },
      {
        question: 'Come aggiungo uno sfondo bianco pulito da studio dietro un ritaglio PNG trasparente?',
        answer:
          'Seleziona Colore pieno in Tipo di sfondo, clicca il campione bianco #ffffff (o inserisci qualsiasi colore esadecimale) e regola la Scala immagine se vuoi respiro intorno al prodotto. Esporta come JPG per caricamenti leggeri sui marketplace o PNG per bordi nitidi.',
      },
      {
        question: 'Posso personalizzare gradienti lineari multi-angolo dietro loghi o screenshot di app?',
        answer:
          'Sì, passa il Tipo di sfondo a Gradiente per scegliere Colore 1 e Colore 2 con gli input di colore, poi trascina il cursore Angolo da 0° a 360°. È ideale per trasformare semplici screenshot di software in eleganti schede hero per landing page.',
      },
      {
        question: 'Quali preimpostazioni di Rapporto di aspetto del canvas sono disponibili per i post social?',
        answer:
          'Puoi passare all\'istante tra Orig (corrisponde alle dimensioni della tua foto), 1:1 (post quadrati e schede prodotto) e 16:9 (miniature e banner YouTube). Sono integrate anche le preimpostazioni verticali per 9:16 (Storie e Reels) e 4:5 (ritratti del feed Instagram).',
      },
      {
        question: 'Come vengono determinate le dimensioni finali in pixel cambiando i rapporti di aspetto?',
        answer:
          'L\'esportatore imposta il lato più lungo del canvas di uscita sulla dimensione originale più lunga della tua foto o almeno a 1.200 px, poi calcola il lato più corto in modo pulito dal rapporto scelto. Per esempio, scegliendo 1:1 su un\'icona 800×600 ottieni una grafica nitida 1200×1200.',
      },
      {
        question: 'In che modo Scala immagine influisce sui margini intorno alla mia foto in primo piano?',
        answer:
          'Scala immagine (dal 40% al 100%, predefinita all\'85%) definisce la percentuale massima del riquadro dentro il canvas di sfondo che la tua foto in primo piano può occupare restando proporzionata. Impostare il 100% riempie da bordo a bordo con rapporti corrispondenti, mentre il 60%–80% mostra una generosa cornice di sfondo.',
      },
      {
        question: 'L\'Arrotondamento applica angoli morbidi ai PNG trasparenti o solo alle foto rettangolari?',
        answer:
          'Arrotondamento (0%–30%) ritaglia l\'area rettangolare di posizionamento in primo piano usando curve d\'angolo quadratiche, che arrotondano in modo pulito screenshot e foto rettangolari. Sui ritagli trasparenti il cui soggetto si trova ben dentro i bordi dell\'immagine, alzare l\'Arrotondamento lascia invariato il ritaglio interno mentre arrotonda il suo riquadro d\'ombra.',
      },
      {
        question: 'Come si comporta Ombra dietro l\'immagine con loghi trasparenti rispetto a foto piene?',
        answer:
          'Per foto o screenshot pieni, proietta una sottile ombra morbida di elevazione proporzionale alla dimensione del canvas dietro la scheda arrotondata in primo piano. Sulle immagini con trasparenza alfa, usa un debole riempimento di supporto all\'1% dentro il riquadro ritagliato così il primo piano si stacca in modo pulito da sfondi luminosi o gradienti.',
      },
      {
        question: 'Quali tipi di file immagine posso importare per aggiungere uno sfondo?',
        answer:
          'Puoi caricare immagini JPG, PNG, WebP, HEIC/HEIF di iPhone, GIF, BMP e SVG fino a 20 MB. I GIF animati disegnano il loro fotogramma iniziale come livello in primo piano.',
      },
      {
        question: 'Questo strumento rimuove automaticamente prima uno sfondo esistente della foto?',
        answer:
          'No, questo editor posiziona l\'immagine caricata (ritaglio trasparente, logo o foto intera) su un nuovo canvas di sfondo invece di eseguire la segmentazione di ritaglio con IA. Se hai una foto con una scena affollata da cancellare prima, passala nel nostro strumento Rimuovi sfondo e poi rilascia qui il PNG trasparente.',
      },
      {
        question: 'Quali formati di uscita sono supportati e con quale qualità di compressione?',
        answer:
          'Puoi esportare le composizioni finite come PNG, JPG o WEBP con una qualità di esportazione canvas del 92% (codifica senza perdita per PNG). Le dimensioni esatte in pixel di uscita compaiono proprio sotto il canvas di anteprima prima del download.',
      },
      {
        question: 'Quali campioni di colore rapidi sono integrati nella modalità Colore pieno?',
        answer:
          'Accanto al selettore di colore nativo completo, sei campioni cliccabili sono pronti da provare con un clic: bianco puro (#ffffff), ardesia scuro (#0f172a), blu brand (#2563eb), smeraldo (#10b981), crema calda (#fef3c7) e grigio morbido (#f1f5f9). Puoi toccare qualsiasi campione per vederlo subito e poi rifinirlo con l\'input di colore.',
      },
      {
        question: 'Quanto è fluido il controllo Raggio di sfocatura sfondo nella modalità Foto sfocata?',
        answer:
          'Puoi regolare il Raggio di sfocatura sfondo da 4 px (texture di sfondo leggermente ammorbidita) fino a 50 px (colore ambientale cremoso e sfocato). Il raggio di sfocatura scala dinamicamente per corrispondere alle tue dimensioni di esportazione a piena risoluzione.',
      },
      {
        question: 'Posso incollare screenshot direttamente dagli appunti per incorniciarli su un gradiente?',
        answer:
          'Sì, copia uno screenshot o una grafica e premi Ctrl+V (o Cmd+V) sulla zona di caricamento per caricarlo direttamente nel canvas di sfondo. Abbinare uno sfondo a gradiente con scala all\'85%, leggero arrotondamento e ombra fa risaltare gli screenshot di documentazione.',
      },
      {
        question: 'Loghi caricati, mockup UI non pubblicati o ritratti personali vengono inviati a un server?',
        answer:
          'No, generazione dello sfondo, filtro di sfocatura, ombre e codifica dei file vengono eseguiti in locale dentro il tuo browser con HTML5 Canvas. Nulla viene trasmesso su internet né conservato in remoto.',
      },
      {
        question: 'Come vengono chiamati i file di sfondo scaricati?',
        answer:
          'I file esportati mantengono il tuo nome base ripulito e aggiungono _background insieme all\'estensione del formato scelto, come product-cutout_background.png o banner_background.webp. L\'immagine sorgente originale sul disco resta intatta.',
      },
      {
        question: 'L\'esportazione con sfondo rimuove i metadati EXIF di posizione dagli scatti della fotocamera?',
        answer:
          'Sì, comporre i livelli su un nuovo HTML5 Canvas e codificare una nuova immagine esclude automaticamente le intestazioni EXIF originali. Coordinate GPS, numeri di serie della fotocamera e timestamp di scatto non vengono mai portati nel file scaricato.',
      },
      {
        question: 'Posso vedere in anteprima la modalità Foto sfocata su icone piccole o grafiche SVG?',
        answer:
          'Sì, loghi SVG autonomi inline o piccole grafiche PNG si adattano allo sfondo di copertura e ricevono una morbida sfocatura gaussiana o multi-passaggio dietro il primo piano vettoriale nitido. Scegli un raggio di sfocatura di 25–45 px quando vuoi ammorbidire bordi vettoriali netti in un morbido alone ambientale.',
      },
      {
        question: 'Perché la modalità Foto sfocata aggiunge una sottile tinta sullo sfondo sfocato?',
        answer:
          'Una delicata velatura ardesia scura al 12% di opacità viene dipinta direttamente sullo strato di sfondo sfocato prima di disegnare il soggetto in primo piano. Quella sottile velatura di contrasto aiuta bordi chiari, etichette bianche e ritagli trasparenti a restare leggibili su cieli luminosi o motivi affollati.',
      },
      {
        question: 'Come sostituisco la foto in primo piano senza perdere il mio flusso di lavoro preferito?',
        answer:
          'Clicca Cambia immagine in alto a destra nel pannello Anteprima sfondo per eliminare il canvas corrente e caricare un altro asset. Poiché lo strumento funziona nativamente su browser desktop e mobili, cambiare immagine richiede solo un attimo.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/image-border-generator', '/image-resizer', '/'],
  },
  {
    slug: '/image-splitter',
    name: 'Dividi immagine',
    shortDescription: 'Dividi le immagini in tessere di griglia N×M o strisce e scaricale come ZIP.',
    category: 'create',
    seoTitle: 'Dividi immagine gratis online – Griglia e ZIP',
    seoDescription:
      'Dividi le foto in tessere di griglia N×M, righe orizzontali o strisce verticali con il nostro divisore gratis. Guarda le linee di taglio e scarica un ZIP.',
    h1: 'Dividi immagine online',
    subtitle:
      'Pensato per chi pianifica griglie Instagram, designer UI e creatori di stampe, questo divisore di immagini nel browser divide panorami ampi o foto quadrate in un massimo di 10×10 tessere esatte o strisce. Ispeziona dal vivo le linee di taglio numerate e salva ogni fetta a piena risoluzione singolarmente o in un unico download ZIP.',
    howToSteps: [
      {
        title: 'Rilascia un\'immagine da tagliare',
        description:
          'Carica qualsiasi foto JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB (o incolla con Ctrl+V). Le tessere iniziali di divisione 3×3 vengono generate automaticamente al caricamento.',
      },
      {
        title: 'Ispeziona l\'Anteprima linee di taglio numerata',
        description:
          'Controlla la griglia sovrapposta tratteggiata sulla tua foto a sinistra che mostra i confini esatti delle tessere numerate (da 1 a N) prima di tagliare le esportazioni finali.',
      },
      {
        title: 'Scegli Layout di divisione o preimpostazioni rapide',
        description:
          'Seleziona Griglia (N×M), Strisce orizz., o Strisce vert., inserisci Righe e Colonne da 1 a 10, oppure clicca 2×2, 3×3 Instagram, 1×3 Carosello o 4×1 Strisce.',
      },
      {
        title: 'Scegli il formato di uscita e la Qualità tessera',
        description:
          'Seleziona Orig, JPG, PNG o WEBP e regola la Qualità tessera (10%–100%, predefinita 92%) per le uscite diverse da PNG.',
      },
      {
        title: 'Genera fette a piena risoluzione',
        description:
          'Clicca Dividi in N tessere ogni volta che aggiorni Righe, Colonne o le impostazioni di formato per ritagliare di nuovo tutte le tessere ai confini esatti in pixel a piena risoluzione.',
      },
      {
        title: 'Salva i singoli pezzi o l\'archivio ZIP',
        description:
          'Usa Scarica su qualsiasi scheda di tessera numerata R·C qui sotto, oppure clicca Scarica tutte le tessere (ZIP) per scaricare insieme l\'intera griglia numerata.',
      },
    ],
    features: [
      {
        title: 'Modalità griglia e strisce flessibili',
        description: 'Dividi in griglie personalizzate Righe × Colonne, righe orizzontali o fette verticali.',
      },
      {
        title: 'Anteprima linee di taglio dal vivo',
        description: 'Vedi i confini delle tessere numerate sovrapposti alla tua immagine prima di dividere.',
      },
      {
        title: 'Anteprime tessere istantanee e ZIP',
        description: 'Ispeziona ogni tessera generata e scarica tutti i pezzi con nomi puliti (riga_colonna) in un unico ZIP.',
      },
      {
        title: 'Taglio a piena risoluzione',
        description: 'Ogni tessera viene tagliata in modo pulito dal canvas originale a piena risoluzione.',
      },
    ],
    faqs: [
      {
        question: 'Come costruisce il divisore di immagini una griglia Instagram 3×3 pulita?',
        answer:
          'Clicca il pulsante di preimpostazione 3×3 Instagram (o imposta la modalità Griglia con 3 Righe e 3 Colonne) e clicca Dividi in 9 tessere. Ogni pezzo viene esportato numerato in sequenza dalla riga 1 colonna 1 in alto a sinistra fino alla riga 3 colonna 3 in basso a destra, così caricandole in ordine inverso costruisci un mosaico di profilo senza cuciture.',
      },
      {
        question: 'Qual è la dimensione massima della griglia che posso tagliare in una sola esecuzione?',
        answer:
          'Sia Righe (Tagli orizzontali) sia Colonne (Tagli verticali) accettano valori da 1 a 10, permettendo da 2 fette fino a una griglia 10×10 con un totale di 100 singole tessere. Poiché ogni fetta usa confini di pixel arrotondati sulla tua immagine originale, le tessere vicine si allineano bordo a bordo senza pixel mancanti.',
      },
      {
        question: 'In che modo Strisce orizz. e Strisce vert. differiscono dalla modalità Griglia (N×M)?',
        answer:
          'Strisce orizz. blocca le Colonne a 1 e taglia banner orizzontali a tutta larghezza impilati dall\'alto verso il basso, utile per screenshot lunghi di pagine web o sezioni di infografiche alte. Strisce vert. blocca le Righe a 1 e divide panorami ampi fianco a fianco in slide di carosello scorrevoli per Instagram o LinkedIn.',
      },
      {
        question: 'Quali preimpostazioni di divisione con un clic sono incluse?',
        answer:
          'Quattro pulsanti di preimpostazione si trovano direttamente sotto gli input numerici: 2×2 (4 quadranti), 3×3 Instagram (9 quadrati di griglia), 1×3 Carosello (3 strisce verticali scorrevoli) e 4×1 Strisce (4 bande orizzontali). Cliccando una preimpostazione, l\'Anteprima linee di taglio dal vivo si aggiorna subito.',
      },
      {
        question: 'Le tessere generate vengono ridimensionate o ritagliate alle dimensioni originali complete in pixel?',
        answer:
          'Ogni tessera viene tagliata direttamente dalla larghezza e altezza complete in pixel della tua immagine sorgente su HTML5 Canvas senza ridimensionarla. Per esempio, dividere un panorama 3000×1000 in strisce di carosello 1×3 produce tre tessere nitide 1000×1000.',
      },
      {
        question: 'Cosa succede se la larghezza o l\'altezza della mia immagine non è divisibile in modo uniforme per Righe o Colonne?',
        answer:
          'Le coordinate di taglio vengono calcolate proporzionalmente con Math.round su tutta la larghezza e altezza, così le fette vicine condividono confini esatti in pixel interi senza vuoti né sovrapposizioni. Alcune tessere possono differire di 1 pixel quando si dividono numeri dispari (come 1000 px in 3 colonne: 333, 334, 333).',
      },
      {
        question: 'Devo ricordare quale tessera va dove dopo aver scaricato lo ZIP?',
        answer:
          'No, ogni fetta mostra il suo badge di riga e colonna (come R1·C2) e le dimensioni esatte in pixel sotto la sua scheda di anteprima. Dentro l\'archivio ZIP, i nomi dei file seguono <base>_r<riga>_c<colonna>.<est> (per es. panorama_r1_c1.jpg, panorama_r1_c2.jpg) in ordine di lettura.',
      },
      {
        question: 'Le modifiche a Righe, Colonne o Formato aggiornano automaticamente le tessere generate?',
        answer:
          'Quando carichi un file per la prima volta, le tessere vengono generate automaticamente con le impostazioni di layout attive. Dopo aver modificato Righe, Colonne o Formato di uscita, l\'Anteprima linee di taglio si aggiorna subito e cliccando Dividi in N tessere rigeneri le schede delle tessere scaricabili e lo ZIP.',
      },
      {
        question: 'Quali formati di input funzionano nel divisore di immagini?',
        answer:
          'Carica immagini JPG, PNG, WebP, HEIC/HEIF di iPhone, GIF, BMP e SVG fino a 20 MB ciascuna. Selezionando Orig in Formato di uscita mantieni il formato sorgente (o converti HEIC/SVG/BMP in modo pulito in PNG/JPG standard).',
      },
      {
        question: 'Dividere un foglio sprite PNG trasparente preserva gli sfondi trasparenti?',
        answer:
          'Sì, tagliare asset PNG o WebP trasparenti mantiene intatta la piena trasparenza alfa quando il Formato di uscita è Orig, PNG o WEBP. Se passi esplicitamente il Formato di uscita a JPG, i canvas delle tessere riempiono la trasparenza su bianco pieno (#FFFFFF).',
      },
      {
        question: 'Posso incollare uno screenshot lungo dagli appunti e tagliarlo in sezioni stampabili?',
        answer:
          'Sì, premi Ctrl+V (o Cmd+V) sulla zona di caricamento per rilasciare uno screenshot dagli appunti direttamente nel divisore. Scegli Strisce orizz. e imposta 3–6 righe per suddividere lunghe chat o acquisizioni web in pagine gestibili.',
      },
      {
        question: 'Il cursore Qualità tessera compare per le tessere PNG?',
        answer:
          'No, le tessere PNG vengono sempre codificate senza perdita, quindi Qualità tessera (10%–100%, predefinita al 92%) viene mostrata automaticamente solo quando il formato risolto è JPG o WebP. Questo garantisce bordi nitidi su sprite, mockup UI e divisioni di testo.',
      },
      {
        question: 'Come viene chiamato il download ZIP in blocco?',
        answer:
          'Cliccando Scarica tutte le tessere (ZIP) impacchetti ogni tessera generata in un unico archivio chiamato <base>_<righe>x<colonne>_tiles.zip, come hero_3x3_tiles.zip. Puoi anche scaricare singole tessere con il pulsante Scarica su ogni scheda.',
      },
      {
        question: 'Le foto vengono caricate su server esterni durante il taglio della griglia?',
        answer:
          'No, calcoli di taglio, taglio su Canvas, anteprime delle tessere e compressione ZIP avvengono tutti dentro la memoria locale del browser. Le tue opere private, diagrammi e foto personali non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'La divisione rimuove i tag EXIF della fotocamera e i metadati di posizione GPS?',
        answer:
          'Sì, tagliare sotto-regioni rettangolari su nuove tessere HTML5 Canvas genera blob di immagine puliti senza intestazioni EXIF. Di conseguenza, dettagli della fotocamera e coordinate GPS della foto originale non vengono mai copiati nelle singole fette.',
      },
      {
        question: 'Cosa succede se carico un GIF animato da dividere in tessere di griglia?',
        answer:
          'HTML5 Canvas estrae e taglia il primo fotogramma del GIF in tessere statiche nel formato di uscita scelto. Dividere GIF animati con più fotogrammi mantenendo l\'animazione non è supportato.',
      },
      {
        question: 'Perché le mie tessere 3×3 possono differire leggermente nel rapporto di aspetto se la foto sorgente non è quadrata?',
        answer:
          'Il divisore divide la tua immagine sorgente proporzionalmente lungo la larghezza e l\'altezza esistenti senza distorcere né ritagliare i bordi. Se vuoi tessere quadrate 1:1 per una griglia Instagram, ritaglia prima l\'immagine a 1:1 nel nostro strumento Ritaglia immagini prima di dividere 3×3.',
      },
      {
        question: 'Come sostituisco l\'immagine dopo aver scaricato una griglia divisa?',
        answer:
          'Clicca Cambia immagine in alto a destra nella scheda Anteprima linee di taglio per liberare gli URL delle tessere esistenti dalla memoria e caricare una nuova immagine. Non serve ricaricare la pagina.',
      },
      {
        question: 'Gli sviluppatori di giochi possono usare questo strumento per tagliare fogli di icone o tileset?',
        answer:
          'Sì, i fogli sprite disposti su righe e colonne uniformi si tagliano con precisione quando imposti i conteggi corrispondenti di Righe × Colonne e mantieni l\'uscita PNG. Ogni icona viene salvata ordinatamente per coordinate di riga e colonna dentro lo ZIP.',
      },
      {
        question: 'Il Dividi immagine funziona in modo affidabile su iPhone, iPad e telefoni Android?',
        answer:
          'Sì, griglie reattive, input numerici di righe/colonne e impacchettamento ZIP lato client funzionano direttamente in Safari per iOS e Chrome per Android. Divisioni 10×10 più grandi su foto con moltissimi megapixel funzionano più velocemente su desktop o browser mobili moderni.',
      },
    ],
    relatedSlugs: ['/image-cropper', '/image-resizer', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-dpi-changer',
    name: 'Cambiatore DPI per immagini',
    shortDescription: 'Cambia i metadati DPI di JPEG/PNG (72/150/300/personalizzato) senza perdita.',
    category: 'developer',
    seoTitle: 'Cambiatore DPI immagini gratis – Converti a 300 DPI',
    seoDescription:
      'Aggiorna i tag di densità JFIF/EXIF di JPEG e pHYs di PNG con il nostro cambiatore DPI gratis. Imposta 72, 150, 300, 600 DPI o personalizzato senza perdita.',
    h1: 'Cambiatore DPI per immagini gratis',
    subtitle:
      'Creato per designer, tipografie, autori e studenti che preparano file per portali di stampa, questo cambiatore DPI senza perdita aggiorna le intestazioni di risoluzione di JPEG e PNG senza toccare i dati dei pixel. Passa a 72, 96, 150, 300, 600 DPI o personalizzato in batch con rilettura verificata.',
    howToSteps: [
      {
        title: 'Scegli o regola prima il tuo DPI di destinazione (o in qualsiasi momento)',
        description:
          'Clicca una preimpostazione: 72 DPI (Schermo), 96 DPI (Windows), 150 DPI (Bozza di stampa), 300 DPI (Stampa alta qualità) o 600 DPI (Archivio), oppure inserisci qualsiasi DPI personalizzato da 1 a 2.400.',
      },
      {
        title: 'Carica una o più immagini',
        description:
          'Rilascia file JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB ciascuno nell\'area di caricamento (o incolla con Ctrl+V). I file vengono elaborati subito al DPI scelto.',
      },
      {
        title: 'Controlla Prima, DPI verificato e metodo di elaborazione',
        description:
          'Ogni scheda mostra il DPI originale rispetto a quello verificato in uscita insieme a un badge che conferma Aggiornamento intestazione JPEG senza perdita, Aggiornamento pHYs PNG senza perdita o Convertito in PNG con DPI pHYs.',
      },
      {
        title: 'Cambia il DPI dinamicamente sui file in coda se serve',
        description:
          'Clicca un\'altra preimpostazione DPI o digita un nuovo DPI personalizzato e premi Applica [X] DPI per rielaborare automaticamente ogni file nella coda.',
      },
      {
        title: 'Scarica singoli file o uno ZIP in batch',
        description:
          'Clicca Scarica sulle singole schede di risultato (chiamate <base>_<dpi>dpi.<est>), oppure clicca Scarica tutto (ZIP) quando due o più file sono pronti.',
      },
    ],
    features: [
      {
        title: 'Modifica intestazione JPEG e PNG davvero senza perdita',
        description: 'Aggiorna la densità JFIF APP0/EXIF nei JPEG e i chunk pHYs (con CRC32 valido) nei PNG senza toccare i pixel dell\'immagine.',
      },
      {
        title: 'Rilettura verificata prima e dopo',
        description: 'Rilegge automaticamente il file di uscita così vedi il DPI verificato esatto memorizzato nel file.',
      },
      {
        title: 'Elaborazione DPI in batch',
        description: 'Aggiorna decine di grafiche pronte per la stampa in una volta ed esportale in un archivio ZIP.',
      },
      {
        title: 'Fallback WebP/HEIC',
        description: 'I formati senza DPI possono essere convertiti in modo pulito in PNG senza perdita con il chunk pHYs DPI esatto incorporato.',
      },
    ],
    faqs: [
      {
        question: 'Come modifica questo cambiatore DPI i file JPEG e PNG senza perdere qualità?',
        answer:
          'Invece di decodificare e ricomprimere i pixel su Canvas, applica direttamente una patch ai segmenti di metadati binari: aggiorna o inserisce i tag di risoluzione JFIF APP0 ed EXIF IFD0 nei JPEG e scrive un chunk pHYs con checksum CRC32 valido nei PNG. Ogni pixel visivo e blocco di compressione resta intatto al 100%.',
      },
      {
        question: 'Cambiare il DPI altera la larghezza e l\'altezza in pixel o la dimensione fisica di stampa?',
        answer:
          'Cambiare il DPI mantiene identiche le dimensioni in pixel: per esempio, una foto 3000×2400 resta 3000×2400 px. Ciò che cambia è l\'intestazione di densità di stampa che dice ad app di pubblicazione come Photoshop, InDesign o portali di stampa di interpretarla a 10×8 pollici a 300 DPI invece di 41,6×33,3 pollici a 72 DPI.',
      },
      {
        question: 'Perché le foto della fotocamera caricate o gli screenshot mostrano spesso Prima: Non impostato?',
        answer:
          'Molte esportazioni da smartphone, screenshot e ottimizzatori web rimuovono i campi di risoluzione JFIF/EXIF o omettono il chunk opzionale pHYs dei PNG, lasciando ai visualizzatori di assumere un fallback di 72 o 96 DPI. Il nostro strumento inietta un\'intestazione standard così i validatori di stampa rilevano 300 DPI in modo affidabile.',
      },
      {
        question: 'Come conferma il badge DPI verificato che l\'aggiornamento ha funzionato davvero?',
        answer:
          'Dopo aver costruito il Blob binario aggiornato, lo strumento esegue di nuovo da zero il suo parser di intestazione binaria sul file di uscita per leggere la densità X/Y appena incorporata. Questo garantisce che il file scaricato superi i controlli automatici dei portali di stampa e degli ispettori desktop.',
      },
      {
        question: 'Cosa succede quando carico file WebP, HEIC, BMP, GIF o SVG?',
        answer:
          'I formati privi di intestazioni DPI standard condivise tra software (come WebP o BMP) vengono decodificati in locale e convertiti in modo pulito in PNG senza perdita con il chunk pHYs DPI esatto incorporato. Vedrai un badge Convertito in PNG con DPI pHYs su quelle schede.',
      },
      {
        question: 'Quali preimpostazioni DPI sono disponibili e quale intervallo accetta il DPI personalizzato?',
        answer:
          'Cinque preimpostazioni rapide coprono gli standard comuni: 72 DPI (Schermo), 96 DPI (Windows), 150 DPI (Bozza di stampa), 300 DPI (Stampa alta qualità) e 600 DPI (Archivio). Il DPI personalizzato ti permette di digitare qualsiasi numero intero tra 1 e 2.400 DPI.',
      },
      {
        question: 'L\'aggiornamento del DPI JPEG preserva i tag EXIF esistenti della fotocamera o il profilo ICC?',
        answer:
          'Sì, il nostro copiatore di segmenti JPEG senza perdita lascia intatti profilo colore, tag della fotocamera e dati di scansione dell\'immagine mentre aggiorna la densità JFIF APP0 e XResolution/YResolution/ResolutionUnit EXIF se esiste un segmento EXIF APP1. Se non era presente un\'intestazione JFIF, inserisce un segmento JFIF APP0 pulito di 18 byte subito dopo SOI.',
      },
      {
        question: 'Perché il DPI PNG a volte viene riletto come 299 o 300 DPI dopo la conversione?',
        answer:
          'La specifica ufficiale PNG pHYs memorizza la risoluzione in pixel per metro invece che in punti per pollice, convertendo 300 DPI in 11.811 pixel per metro. Arrotondare i pixel per metro di nuovo in pollici produce un 300 DPI esatto e pulito per quasi ogni valore preimpostato.',
      },
      {
        question: 'Cambiare una miniatura web 400×400 a bassa risoluzione a 300 DPI la renderà nitida per la stampa?',
        answer:
          'No, aggiornare il DPI modifica solo le istruzioni dei metadati, non il numero di pixel: un file 400×400 pixel a 300 DPI stampa in modo nitido solo a 1,33×1,33 pollici. Per coprire formati cartacei più grandi in modo pulito a 300 DPI, ti servono dimensioni in pixel maggiori nell\'opera sorgente.',
      },
      {
        question: 'Posso aggiornare in batch più asset di stampa a 300 DPI ed esportare un unico ZIP?',
        answer:
          'Sì, rilascia un numero qualsiasi di file JPG o PNG fino a 20 MB ciascuno e tutti vengono elaborati al DPI scelto in sequenza. Quando due o più file sono completati, compare una barra Batch pronto con un pulsante Scarica tutto (ZIP) che produce images_<dpi>dpi_compressmypic.zip.',
      },
      {
        question: 'Posso cambiare idea e riapplicare 600 DPI dopo che i file sono già stati elaborati a 300 DPI?',
        answer:
          'Sì, cliccando un altro pulsante di preimpostazione DPI di destinazione aggiorni subito e rielabori ogni file nella coda a partire dai file originali caricati senza accumulare modifiche. Se digiti un numero in DPI personalizzato, clicca Applica DPI per aggiornare tutti gli elementi a quella densità personalizzata.',
      },
      {
        question: 'Impostare 300 DPI rende le dimensioni dei file JPEG o PNG significativamente più grandi?',
        answer:
          'No, aggiungere o applicare una patch a un\'intestazione JFIF APP0 (18 byte) o a un chunk pHYs PNG (21 byte) cambia il peso totale del file al massimo di poche decine di byte per JPEG e PNG nativi. Solo i formati senza DPI convertiti in PNG senza perdita cambiano dimensione.',
      },
      {
        question: 'Bozze riservate, copertine di libri o scansioni di documenti vengono inviate a un server esterno?',
        answer:
          'No, analisi dei byte binari, calcolo del checksum CRC32 e patch dell\'intestazione vengono eseguiti in locale negli ArrayBuffer del browser. I tuoi file non lasciano mai il tuo computer o telefono.',
      },
      {
        question: 'Perché le piattaforme di pubblicazione come Amazon KDP o le riviste accademiche rifiutano i file a 72 DPI?',
        answer:
          'Molti portali automatici di prestampa controllano il tag di risoluzione JFIF o pHYs PNG dell\'immagine e rifiutano le sottomissioni sotto 300 DPI anche quando le dimensioni in pixel sono ampie. Aggiornare il tag dell\'intestazione a 300 DPI soddisfa quei controlli di prestampa senza ricomprimere l\'opera.',
      },
      {
        question: 'Come vengono chiamati i file di uscita quando vengono salvati singolarmente o in ZIP?',
        answer:
          'Ogni file aggiornato mantiene il suo nome base ripulito e aggiunge _<target>dpi più la sua estensione, come poster_300dpi.jpg o diagram_600dpi.png. Questo evita di sovrascrivere i file originali sul disco.',
      },
      {
        question: 'Il cambiatore DPI funziona su JPEG che originariamente usavano punti per cm invece di punti per pollice?',
        answer:
          'Sì, il lettore riconosce sia unit=1 (punti per pollice) sia unit=2 (punti per cm, moltiplicati per 2,54) nei tag JFIF ed EXIF quando mostra il DPI Prima. Quando scrive le intestazioni di uscita, standardizza la densità in modo pulito in pollici (DPI) per compatibilità universale.',
      },
      {
        question: 'Posso rimuovere o eliminare i tag DPI invece di cambiarli?',
        answer:
          'Questo strumento incorpora o aggiorna sempre l\'intestazione DPI di destinazione scelta per corrispondere agli standard di stampa o visualizzazione. Se vuoi invece cancellare tutti i metadati JFIF, EXIF e chunk PNG per privacy, passa i tuoi file nel nostro strumento Rimuovi metadati immagine.',
      },
      {
        question: 'Cosa succede se carico un JPEG danneggiato o un formato non supportato?',
        answer:
          'Ogni file in coda viene eseguito in modo indipendente dentro il proprio gestore di errori, così una singola immagine illeggibile non ferma mai il resto del batch. Gli elementi non riusciti mostrano un chiaro avviso rosso in linea mentre i file validi finiscono e vengono impacchettati nel tuo download ZIP normalmente.',
      },
      {
        question: 'Posso incollare uno screenshot dagli appunti e timbrarlo subito a 300 DPI?',
        answer:
          'Sì, premi Ctrl+V (o Cmd+V) sulla zona di caricamento per passare uno screenshot PNG dagli appunti direttamente nel processore. Scrive un chunk pHYs 300 DPI valido senza perdita in pochi istanti.',
      },
      {
        question: 'Questo editor DPI senza perdita funziona su browser Windows, Mac, Linux e mobili?',
        answer:
          'Sì, le API standard del browser ArrayBuffer e DataView funzionano in modo pulito su Chrome, Firefox, Edge e Safari desktop e sui browser mobili. Non servono mai software desktop, plugin o caricamenti sul server.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/image-dimensions-checker', '/remove-image-metadata', '/'],
  },
  {
    slug: '/image-to-base64',
    name: 'Immagine in Base64',
    shortDescription: 'Codifica qualsiasi immagine in un Data URL Base64, img HTML o snippet CSS.',
    category: 'developer',
    seoTitle: 'Immagine in Base64 – Data URL, HTML e CSS gratis',
    seoDescription:
      'Codifica le immagini con il nostro convertitore immagine in Base64 gratis nel browser. Genera Data URL, stringhe Base64 pure, tag img HTML e snippet url() CSS.',
    h1: 'Convertitore immagine in Base64',
    subtitle:
      'Pensato per sviluppatori frontend, coder di template email e redattori tecnici, questo convertitore locale da immagine a Base64 trasforma asset di immagini binarie in stringhe di testo pronte da copiare in un solo passaggio. Passa all\'istante tra le schede Data URL, Base64 puro, HTML img e CSS url() senza caricare icone proprietarie.',
    howToSteps: [
      {
        title: 'Rilascia, seleziona o incolla un\'immagine',
        description:
          'Carica qualsiasi file JPG, PNG, WebP, SVG, GIF, BMP, ICO o AVIF fino a 15 MB nella zona di rilascio, oppure incolla un\'immagine dagli appunti con Ctrl+V.',
      },
      {
        title: 'Controlla dimensione del file e overhead di caratteri',
        description:
          'Guarda la scheda riepilogativa in alto con la miniatura dell\'immagine, la dimensione originale in byte, le dimensioni naturali (quando applicabile), il conteggio esatto dei caratteri di uscita e la percentuale di overhead Base64.',
      },
      {
        title: 'Passa tra le 4 schede di uscita per sviluppatori',
        description:
          'Clicca Data URL, Base64 puro, HTML <img> o CSS url() per formattare la stringa codificata per payload JSON, immagini inline HTML o fogli di stile.',
      },
      {
        title: 'Copia negli appunti o salva come file .txt',
        description:
          'Clicca Copia uscita (o clicca dentro il riquadro di codice per selezionare tutto) per copiare la stringa, oppure clicca Salva .TXT per scaricare <nomefile>_<scheda>.txt.',
      },
      {
        title: 'Clicca Codifica un\'altra per cambiare file',
        description:
          'Quando sei pronto a codificare la prossima icona o sprite, clicca Codifica un\'altra per cancellare l\'uscita e liberare la memoria locale degli oggetti.',
      },
    ],
    features: [
      {
        title: '4 formati di uscita per sviluppatori',
        description: 'Genera automaticamente snippet Data URL, Base64 puro, HTML <img> e CSS background-image.',
      },
      {
        title: 'Metriche esatte di byte e caratteri',
        description: 'Confronta subito la dimensione del file binario originale con la lunghezza della stringa codificata Base64.',
      },
      {
        title: 'Copia con un clic e download TXT',
        description: 'Copia in modo affidabile negli appunti stringhe Base64 enormi o salvale come semplice file di testo.',
      },
      {
        title: 'Codifica 100% locale con FileReader',
        description: 'Nessun caricamento: la codifica avviene nativamente dentro la scheda del tuo browser.',
      },
    ],
    faqs: [
      {
        question: 'Perché il convertitore immagine in Base64 aggiunge circa il 33% alla dimensione di uscita?',
        answer:
          'Base64 rappresenta ogni 3 byte binari (24 bit) usando 4 caratteri ASCII stampabili (6 bit ciascuno), più fino a due segni uguale di riempimento alla fine. Di conseguenza, un\'immagine da 30 KB viene sempre codificata in circa 40 KB di testo Base64, che la barra di riepilogo tiene traccia automaticamente.',
      },
      {
        question: 'Quali quattro formati di uscita posso generare dopo aver codificato un\'immagine?',
        answer:
          'Quattro schede si trovano proprio sopra il riquadro di codice: Data URL (URI completo data:image/...;base64,...), Base64 puro (payload ridotto senza prefisso), HTML <img> (tag pronto con alt ripulito e attributi width/height) e CSS url() (regola background-image: url("...");).',
      },
      {
        question: 'La codifica altera la qualità dell\'immagine, rimuove il codice SVG o appiattisce i GIF animati?',
        answer:
          'No, l\'encoder legge il file binario grezzo direttamente tramite FileReader.readAsDataURL del browser senza disegnare su Canvas. Ogni byte originale, elemento XML SVG vettoriale, fotogramma ICO e fotogramma di animazione GIF resta identico bit per bit al 100%.',
      },
      {
        question: 'Quali formati di file immagine e quale dimensione massima di caricamento sono supportati?',
        answer:
          'Puoi codificare immagini JPG, PNG, WebP, SVG, GIF, BMP, favicon ICO e AVIF fino a 15 MB per file. Mantenere gli input Base64 limitati a 15 MB evita che stringhe di testo di più megabyte blocchino gli appunti o il rendering della textarea.',
      },
      {
        question: 'Quando gli sviluppatori dovrebbero incorporare Data URL Base64 invece di fare riferimento a normali file immagine?',
        answer:
          'Incorporare piccole icone UI, spinner, favicon o badge di firma email sotto pochi kilobyte elimina viaggi HTTP extra e funziona in modo pulito in documenti HTML autonomi. Per grandi foto hero, i normali URL di immagini WebP o JPG restano più piccoli e beneficiano della cache HTTP del browser.',
      },
      {
        question: 'Perché la scheda HTML <img> include automaticamente gli attributi width e height?',
        answer:
          'Una volta che il browser carica l\'anteprima temporanea dell\'oggetto e legge naturalWidth e naturalHeight, quelle dimensioni in pixel popolano lo snippet HTML insieme a un tag alt derivato dal nome base del file. Includere le dimensioni aiuta a prevenire il Cumulative Layout Shift (CLS) sulle pagine web.',
      },
      {
        question: 'Posso scaricare l\'uscita Base64 lunga quando copiare stringhe grandi è scomodo?',
        answer:
          'Sì, clicca Salva .TXT accanto a Copia uscita per scaricare il testo esatto mostrato nella scheda attiva (Data URL, Base64 puro, HTML o CSS) come <base>_<scheda>.txt. Questo rende facile aprire payload molto lunghi in VS Code o script di terminale.',
      },
      {
        question: 'Cosa succede se il browser blocca i permessi degli appunti quando clicco Copia uscita?',
        answer:
          'Se navigator.clipboard.writeText viene bloccato dalle impostazioni di privacy del browser, una nota in linea ti invita a copiare direttamente dal riquadro di codice. Cliccando o spostandoti con Tab nella textarea monospace scura viene evidenziata automaticamente l\'intera stringa così Ctrl+C / Cmd+C copia tutto in modo pulito.',
      },
      {
        question: 'In che modo Base64 puro differisce da Data URL quando si inviano payload JSON API?',
        answer:
          'Data URL antepone data:<mime>;base64, così i browser possono renderizzarlo direttamente dentro attributi src o regole CSS url(). API, database mobili ed encoder server spesso si aspettano solo Base64 puro: passando alla scheda Base64 puro l\'intestazione viene rimossa automaticamente.',
      },
      {
        question: 'Icone UI proprietarie, diagrammi riservati o asset di clienti vengono caricati da qualche parte?',
        answer:
          'Mai: FileReader legge i byte rigorosamente dentro la memoria locale del browser lato client. Nessun file immagine o stringa Base64 viene mai trasmesso a server remoti.',
      },
      {
        question: 'Posso codificare un logo SVG o un file favicon.ico in modo pulito?',
        answer:
          'Sì, entrambe le estensioni .svg e .ico sono supportate esplicitamente nel filtro di caricamento e vengono codificate con il loro prefisso MIME appropriato data:image/svg+xml o image/x-icon. Puoi anche rilasciare i file nel convertitore e poi verificarli con il nostro decodificatore Base64 in immagine.',
      },
      {
        question: 'Perché la percentuale di overhead è leggermente più alta sulle schede HTML <img> e CSS url()?',
        answer:
          'Oltre all\'espansione del 33% della codifica Base64 e all\'intestazione MIME del Data URL, le schede HTML e CSS avvolgono caratteri di markup extra come <img src="..." alt="..." />. Il contatore di riepilogo ricalcola i caratteri dal vivo ogni volta che cambi scheda.',
      },
      {
        question: 'Posso incollare uno screenshot direttamente dagli appunti per prendere un rapido Data URL?',
        answer:
          'Sì, premi Ctrl+V (o Cmd+V su Mac) in qualsiasi punto della schermata di caricamento per catturare un\'immagine copiata dagli appunti direttamente. Lo strumento la codifica subito nei formati Data URL, Base64 puro, HTML e CSS pronti da copiare con un clic.',
      },
      {
        question: 'Base64 puro preserva i caratteri standard + e / con riempimento =?',
        answer:
          'Sì, FileReader del browser produce stringhe Base64 standard RFC 4648 usando +, / e caratteri = di riempimento finali invece di sostituzioni base64url sicure per URL. Questo garantisce compatibilità diretta con data URI HTML, payload email MIME e decodificatori backend standard.',
      },
      {
        question: 'Perché i client email a volte bloccano le immagini Base64 inline?',
        answer:
          'Alcuni provider di webmail e filtri antispam aziendali rimuovono gli URI data:image nelle newsletter HTML per motivi di sicurezza anche se i browser li mostrano bene. Base64 funziona meglio in app web, documenti HTML a file singolo, bundle React/CSS e template JSON/SVG.',
      },
      {
        question: 'Come preservo i metadati originali della fotocamera o li rimuovo prima della codifica Base64?',
        answer:
          'Poiché questo strumento codifica byte grezzi esatti, eventuali metadati EXIF esistenti dentro un JPEG restano codificati dentro la stringa Base64. Se vuoi stringhe Base64 più piccole e senza metadati, passa la tua foto nel nostro strumento Rimuovi metadati immagine prima di codificare.',
      },
      {
        question: 'Dovrei ridurre PNG o JPG grandi prima di convertirli in Base64?',
        answer:
          'Sì, poiché Base64 gonfia la dimensione di circa il 33%, comprimere prima un PNG da 300 KB a un WebP da 40 KB risparmia circa 350 KB di gonfiore di testo Base64 nel tuo foglio di stile o bundle. Usa prima il nostro Compressore immagini o Ottimizzatore immagini web per grandi risparmi.',
      },
      {
        question: 'Perché le dimensioni possono mancare su certi file ICO non comuni o malformati?',
        answer:
          'Se un browser non riesce a decodificare un ICO insolito multi-fotogramma o un\'intestazione esotica in un\'anteprima HTMLImageElement, le dimensioni vengono omesse in modo pulito dal riepilogo mentre la codifica Base64 grezza riesce comunque. PNG, JPG, WebP, GIF, SVG, BMP e AVIF standard mostrano conteggi esatti di pixel L×A.',
      },
      {
        question: 'Come codifico un\'altra immagine dopo aver copiato il primo snippet?',
        answer:
          'Clicca Codifica un\'altra in alto a destra nella scheda di riepilogo per reimpostare le schede di uscita e cancellare la textarea. Libera subito la memoria temporanea di anteprima e ripristina la zona di rilascio per il tuo prossimo asset.',
      },
      {
        question: 'L\'encoder Base64 funziona su browser mobili Safari e Chrome?',
        answer:
          'Sì, le API integrate HTML5 FileReader e Clipboard funzionano in modo affidabile su Safari per iOS, Chrome per Android, Windows, macOS e Linux. Poiché la codifica viene eseguita in locale nella memoria del browser, non ci sono ritardi del server nemmeno sui dati cellulari.',
      },
    ],
    relatedSlugs: ['/base64-to-image', '/favicon-generator', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/base64-to-image',
    name: 'Base64 in immagine',
    shortDescription: 'Decodifica un Data URL Base64 o una stringa Base64 pura di nuovo in un\'immagine.',
    category: 'developer',
    seoTitle: 'Base64 in immagine gratis – Anteprima e download',
    seoDescription:
      'Decodifica le stringhe Base64 in immagini con il nostro decodificatore gratis: rileva byte PNG, JPG, WebP, GIF o SVG e salva i file in locale, online.',
    h1: 'Decodificatore Base64 in immagine',
    subtitle:
      'Pensato per ingegneri web che debuggano payload API, marketer email che controllano icone inline e tester QA, questo decodificatore Base64 in immagine nel browser ricostruisce Data URL e stringhe Base64 pure in file scaricabili. Ispeziona il formato MIME rilevato, le dimensioni in pixel e la dimensione in byte in privato sul tuo dispositivo.',
    howToSteps: [
      {
        title: 'Incolla la tua stringa Base64 o Data URL',
        description:
          'Incolla una stringa completa data:image/...;base64,... o caratteri Base64 puri nel riquadro Incolla stringa Base64 o Data URL.',
      },
      {
        title: 'Attendi la decodifica automatica (o clicca Decodifica immagine)',
        description:
          'Il decodificatore analizza spazi bianchi, caratteri sicuri per URL e byte di intestazione magici subito all\'incollaggio (o quando clicchi Decodifica immagine) per convalidare l\'immagine.',
      },
      {
        title: 'Ispeziona anteprima, formato, dimensione e dimensioni',
        description:
          'Guarda la grafica decodificata su una scacchiera di trasparenza insieme al badge Immagine valida decodificata, Formato rilevato, Dimensione binaria e Larghezza × Altezza in pixel.',
      },
      {
        title: 'Seleziona il tuo Formato di download',
        description:
          'Scegli Originale per salvare il file binario decodificato esatto intatto, oppure scegli PNG, JPG o WEBP per convertire l\'immagine all\'esportazione.',
      },
      {
        title: 'Scarica il tuo file immagine decodificato',
        description:
          'Clicca Scarica file immagine per salvare decoded_image.<est> direttamente sul tuo dispositivo, oppure clicca Cancella sopra il riquadro di input per testare un altro payload.',
      },
    ],
    features: [
      {
        title: 'Rileva automaticamente il prefisso Data URL mancante',
        description: 'Identifica automaticamente le intestazioni magiche PNG, JPEG, GIF, WebP, BMP e SVG anche da Base64 puro.',
      },
      {
        title: 'Convalida istantanea e messaggi di errore',
        description: 'Rileva chiaramente caratteri Base64 non validi o intestazioni danneggiate.',
      },
      {
        title: 'Conversione di formato opzionale',
        description: 'Scarica il binario decodificato esatto o riesporta come PNG, JPG o WebP.',
      },
      {
        title: 'Decodifica privata nel browser',
        description: 'Sicuro per token interni, asset email e icone UI proprietarie.',
      },
    ],
    faqs: [
      {
        question: 'Questo decodificatore Base64 in immagine può leggere stringhe che omettono il prefisso data:image/?',
        answer:
          'Sì, se incolli Base64 puro senza un\'intestazione Data URL, il decodificatore ispeziona i byte di firma magica decodificati all\'inizio del flusso binario. Rileva automaticamente PNG, JPEG, GIF, WebP, BMP, ICO e markup XML/SVG inline.',
      },
      {
        question: 'Gestisce varianti Base64 sicure per URL e interruzioni di riga accidentali?',
        answer:
          'Sì, prima di chiamare atob(), il decodificatore rimuove automaticamente spazi bianchi, spazi e a capo e riconverte i caratteri sicuri per URL - e _ in + e / standard. Questo fa funzionare in modo pulito l\'incollaggio di stringhe avvolte da log JSON, output di terminale o payload JWT.',
      },
      {
        question: 'Cosa succede se incollo un payload Base64 danneggiato o non immagine?',
        answer:
          'I caratteri Base64 non validi attivano un messaggio di convalida immediato, mentre byte Base64 validi che non formano un\'immagine leggibile dal browser mostrano un errore esplicito che spiega che i byte non possono essere renderizzati. Nulla si rompe né si blocca nella pagina.',
      },
      {
        question: 'Quali opzioni di Formato di download vengono offerte una volta decodificata una stringa?',
        answer:
          'Puoi selezionare Originale, PNG, JPG o WEBP prima di salvare. Scegliendo Originale salvi i byte binari grezzi esatti intatti come decoded_image.<est>, mentre PNG, JPG o WEBP ridisegnano la grafica decodificata su HTML5 Canvas.',
      },
      {
        question: 'Cosa succede alle aree trasparenti se riesporto un PNG o SVG decodificato come JPG?',
        answer:
          'Selezionando JPG in Formato di download, il Canvas viene riempito automaticamente con uno sfondo bianco pieno e pulito (#FFFFFF) prima della codifica con qualità al 92%. Mantenendo Originale, PNG o WEBP preservi la piena trasparenza sull\'anteprima a scacchiera.',
      },
      {
        question: 'Il decodificatore preserva GIF animati e SVG vettoriali quando impostato su Originale?',
        answer:
          'Sì, scegliendo Originale scarichi il Blob esatto costruito direttamente dal tuo array di byte decodificati, mantenendo intatti i percorsi vettoriali SVG e le animazioni GIF multi-fotogramma. Nota che passando il Formato di download a PNG, JPG o WEBP rasterizzi gli SVG o il primo fotogramma dei GIF via Canvas.',
      },
      {
        question: 'Quali metriche compaiono accanto all\'anteprima dell\'immagine decodificata?',
        answer:
          'Una volta convalidato, il pannello di riepilogo a destra mostra un badge di stato verde Immagine valida decodificata insieme al Formato rilevato (come PNG, JPEG o SVG+XML). Direttamente sotto, puoi ispezionare la Dimensione binaria decodificata esatta in KB/MB e le Dimensioni naturali in pixel.',
      },
      {
        question: 'Perché una stringa data:image/svg+xml senza ;base64, mostra un errore di codifica?',
        answer:
          'I Data URI non Base64 (come le stringhe SVG codificate in percentuale tipo data:image/svg+xml,%3Csvg...) sono testo semplice invece di payload Base64. Questo strumento convalida esplicitamente payload Base64 standard o Data URL ;base64, così gli input non validi falliscono chiaramente.',
      },
      {
        question: 'C\'è qualche rischio nel decodificare qui risposte API interne, token QR o icone private?',
        answer:
          'No, tutta la pulizia delle stringhe, la decodifica dei byte atob(), l\'annusamento della firma MIME e il rendering dell\'immagine vengono eseguiti rigorosamente dentro la memoria della scheda del tuo browser. Le stringhe codificate non viaggiano mai in rete né toccano log remoti.',
      },
      {
        question: 'Come aiuta l\'anteprima a scacchiera a ispezionare le icone decodificate?',
        answer:
          'Un sottile motivo a scacchiera grigio chiaro viene renderizzato dietro il riquadro di anteprima così ritagli trasparenti, icone UI bianche e ombre morbide risaltano subito. Senza scacchiera, i loghi bianchi trasparenti si fonderebbero invisibilmente in un pannello bianco vuoto.',
      },
      {
        question: 'Perché la dimensione del file binario decodificato è più piccola del testo Base64 che ho incollato?',
        answer:
          'Il testo Base64 espande i dati binari di circa il 33% usando 6 bit per carattere ASCII. Riconvertirlo in byte di immagine grezzi ripristina la dimensione originale compatta del file binario.',
      },
      {
        question: 'Posso avvolgere virgolette HTML o CSS url("...") intorno alla mia stringa prima di incollarla?',
        answer:
          'Per una convalida pulita, incolla solo il Data URL (data:image/...;base64,...) o i caratteri Base64 stessi senza tag HTML circostanti o virgolette CSS. Rimuovere le virgolette circostanti garantisce che il validatore legga Base64 puro.',
      },
      {
        question: 'Come converto una vecchia stringa Base64 di favicon BMP o ICO decodificata in un WebP moderno?',
        answer:
          'Incolla il Base64 puro o Data URL, conferma che l\'anteprima viene renderizzata in modo pulito, clicca WEBP nel selettore Formato di download e premi Scarica file immagine. L\'esportatore Canvas produce subito un\'immagine WebP compressa.',
      },
      {
        question: 'Quanto è veloce la decodifica per stringhe Base64 di più megabyte?',
        answer:
          'La decodifica avviene in millisecondi in locale in JavaScript per piccole icone e tipiche foto web sotto diversi megabyte. Stringhe incollate molto grandi (decine di megabyte di testo) dipendono principalmente dalla velocità di incollaggio della textarea del tuo browser.',
      },
      {
        question: 'Posso decodificare stringhe Base64 SVG+XML in file PNG raster nitidi?',
        answer:
          'Sì, incolla un Data URL SVG codificato in Base64 o markup Base64 SVG puro, che il decodificatore identifica automaticamente tramite intestazioni <svg o <?xml. Poi passa il Formato di download da Originale a PNG per rasterizzare la grafica vettoriale su Canvas alla sua dimensione naturale.',
      },
      {
        question: 'Perché il file di uscita viene sempre scaricato come decoded_image.<est>?',
        answer:
          'Le stringhe Base64 standard e i Data URL codificano byte di immagine grezzi e tipi MIME senza portare un nome di file originale. Per mantenere i download prevedibili su tutti gli input, l\'esportatore chiama il file salvato decoded_image seguito dall\'estensione del formato rilevato o selezionato.',
      },
      {
        question: 'Qual è il modo più rapido per cancellare una stringa Base64 enorme e ispezionare la successiva?',
        answer:
          'Clicca Cancella in alto a destra nella scheda Incolla stringa Base64 per cancellare la textarea con un tocco. Così rimuovi subito il pannello di anteprima e revochi gli URL oggetto temporanei dalla memoria del browser.',
      },
      {
        question: 'Incollare una stringa Base64 decodifica automaticamente senza dover cliccare Decodifica immagine?',
        answer:
          'Sì, la decodifica si attiva automaticamente appena il testo entra o cambia dentro il riquadro di input, così i payload validi vengono visualizzati in anteprima entro millisecondi. Il pulsante Decodifica immagine resta pronto ogni volta che vuoi rieseguire la convalida manualmente.',
      },
      {
        question: 'Come posso codificare un\'immagine scaricata di nuovo in Data URL HTML o CSS in seguito?',
        answer:
          'Scorri fino alla sezione Strumenti correlati qui sotto e apri Immagine in Base64 per cambiare direzione in modo pulito. Trasforma qualsiasi immagine JPG, PNG, WebP, SVG, GIF, BMP o ICO di nuovo in snippet Data URL, Base64 puro, HTML <img> o CSS url().',
      },
      {
        question: 'Il decodificatore Base64 in immagine funziona offline o sugli smartphone?',
        answer:
          'Sì, ogni controllo di stringa, decodifica di byte e conversione di formato Canvas viene eseguito dentro le API integrate del browser senza chiamate di rete. Funziona con fluidità su Safari per iOS, Chrome per Android, Windows, macOS e Linux una volta caricata la pagina.',
      },
    ],
    relatedSlugs: ['/image-to-base64', '/image-converter', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-color-palette-extractor',
    name: 'Estrattore di palette di colori',
    shortDescription: 'Estrai i colori dominanti di qualsiasi foto con codici HEX, RGB, HSL ed esportazione.',
    category: 'developer',
    seoTitle: 'Estrattore palette colori gratis online',
    seoDescription:
      'Estrai i colori dominanti di una foto gratis online: da 3 a 12 campioni con codici HEX, RGB e HSL, variabili CSS, JSON e scheda PNG nel tuo browser, in locale.',
    h1: 'Estrattore di palette di colori gratis online',
    subtitle:
      'Scopri la combinazione di colori principale di qualsiasi fotografia, illustrazione o screenshot con il nostro estrattore di palette di colori nel browser, basato sulla quantizzazione Median-Cut. Pensato per designer di interfacce, strateghi di brand e sviluppatori front-end, genera da 3 a 12 campioni equilibrati con percentuali di presenza, copia con un clic dei codici HEX, RGB e HSL, proprietà personalizzate CSS, dati JSON e schede PNG di palette condivisibili, tutto in locale sul tuo dispositivo.',
    howToSteps: [
      {
        title: 'Carica l’immagine di origine',
        description:
          'Trascina o seleziona un file JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB nella zona di caricamento (oppure incollalo dagli appunti).',
      },
      {
        title: 'Imposta il numero di colori (3–12)',
        description:
          'Trascina il cursore Numero di colori da 3 toni di accento minimalisti a 12 campioni dettagliati per ricalcolare subito la palette.',
      },
      {
        title: 'Controlla la striscia proporzionale dei colori',
        description:
          'Osserva la striscia proporzionale orizzontale sopra le schede dei campioni per vedere quanto ogni tonalità domina l’immagine.',
      },
      {
        title: 'Copia i codici HEX, RGB o HSL dei campioni',
        description:
          'Clicca su qualsiasi pillola HEX, RGB o HSL dentro una scheda campione per copiare quel valore esatto di colore direttamente negli appunti.',
      },
      {
        title: 'Esporta variabili CSS o JSON',
        description:
          'Usa Copia variabili CSS per un blocco :root pronto da incollare, oppure Copia JSON per ottenere codici dei campioni, percentuali e dimensioni di origine in formato strutturato.',
      },
      {
        title: 'Scarica una scheda PNG della palette',
        description:
          'Clicca su Scarica palette PNG per salvare una scheda di presentazione bianca e pulita che abbina la tua foto di anteprima ai blocchi di colore estratti.',
      },
    ],
    features: [
      { title: 'Quantizzazione dei colori Median-Cut', description: 'Raggruppa milioni di pixel dell’immagine in campioni dominanti equilibrati e rappresentativi in pochi millisecondi.' },
      { title: 'HEX, RGB, HSL e % di presenza', description: 'Ogni campione mostra i codici esatti di colore e la parte di immagine che occupa.' },
      { title: 'Esportazioni per sviluppatori + scheda PNG', description: 'Esporta come proprietà personalizzate CSS, JSON, frammento Tailwind o scheda PNG di palette condivisibile.' },
      { title: '100% nel browser', description: 'Analizza i pixel in locale su HTML5 Canvas senza caricare le immagini.' },
    ],
    faqs: [
      {
        question: 'Come costruisce una palette dalla mia foto la quantizzazione Median-Cut?',
        answer:
          'Median-Cut raggruppa i pixel campionati in contenitori di colore RGB tridimensionali e divide ripetutamente il canale di colore più ampio alla sua mediana finché non resta il numero di contenitori richiesto. Ogni contenitore diventa un campione rappresentativo, ponderato in base a quanti pixel contiene, producendo colori dominanti armoniosi invece di pixel isolati rumorosi.',
      },
      {
        question: 'Quanti campioni di colore posso generare con questo estrattore di palette?',
        answer:
          'Puoi estrarre da 3 a 12 colori dominanti con il cursore Numero di colori. Scegliere da 3 a 5 va bene per temi di brand minimalisti, mentre da 8 a 12 rivela toni d’ombra sottili e tonalità di accento secondarie.',
      },
      {
        question: 'Cosa rappresenta la percentuale su ogni scheda di colore?',
        answer:
          'Ogni percentuale mostra la quota di pixel campionati non trasparenti assegnati a quel campione durante la quantizzazione. La striscia proporzionale dei colori dimensiona ogni segmento esattamente in base a quelle percentuali.',
      },
      {
        question: 'Posso copiare tutti i campioni estratti come variabili CSS in una volta sola?',
        answer:
          'Sì. Cliccando su Copia variabili CSS copi un blocco :root completo con --palette-1 fino a --palette-N e ogni colore esadecimale, pronto per il tuo foglio di stile. Puoi rinominare le variabili in seguito per farle corrispondere ai tuoi design token.',
      },
      {
        question: 'Quali dati sono inclusi quando clicco su Copia JSON?',
        answer:
          'Copia JSON scrive un elenco di oggetti con indice, esadecimale, rgb, hsl e percentuale di presenza di ogni campione. Gli sviluppatori possono inserire questi dati direttamente in file di configurazione del tema, documentazione di design o script di stile automatizzati.',
      },
      {
        question: 'Cosa genera Scarica palette PNG?',
        answer:
          'Scarica palette PNG crea una scheda di presentazione bianca e pulita larga 1000 pixel che mostra la tua immagine di origine centrata in alto, sopra blocchi di colore arrotondati con i codici esadecimali e le percentuali di presenza. Viene scaricata in locale come <nome>_palette.png, senza filigrana.',
      },
      {
        question: 'Perché l’estrattore di palette dà risultati diversi da un contagocce?',
        answer:
          'Un contagocce campiona un singolo pixel sotto il cursore, mentre l’estrazione della palette raggruppa l’intera immagine in famiglie di colori dominanti. Questo la rende più veloce per costruire combinazioni di colori coerenti che per abbinare un minuscolo punto.',
      },
      {
        question: 'Come vengono gestiti gli sfondi trasparenti quando estrai i colori da un PNG?',
        answer:
          'I pixel con trasparenza alfa inferiore al 50% vengono scartati prima che parta la quantizzazione. Questo evita che lo spazio vuoto della tela trasparente intorno a loghi o ritagli di prodotto distorca la palette verso il bianco o il nero.',
      },
      {
        question: 'L’estrattore analizza ogni singolo pixel di una foto gigante da 20 MB?',
        answer:
          'Per mantenere l’estrazione rapida dentro il browser, l’immagine viene temporaneamente ridotta su una tela fuori schermo fino a 140 pixel sul lato più lungo prima che parta Median-Cut. Poiché i rapporti tra i colori dominanti restano praticamente identici a quella scala, le palette vengono calcolate quasi all’istante senza bloccare la scheda.',
      },
      {
        question: 'Quali formati di file e dimensioni sono accettati?',
        answer:
          'Puoi caricare file JPG, PNG, WebP, HEIC/HEIF di iPhone, GIF, BMP e SVG fino a 20 MB per immagine. Le GIF animate con più fotogrammi estraggono i colori dal fotogramma iniziale senza problemi.',
      },
      {
        question: 'Perché nella mia palette a 12 colori sono comparse due tonalità simili?',
        answer:
          'Le foto con grandi sfumature — come tramonti, toni della pelle o fondali di studio — contengono milioni di pixel concentrati in una regione dello spazio dei colori. Con un numero alto di campioni, come 10 o 12, Median-Cut suddivide naturalmente quella regione densa in luci e mezzi toni vicini tra loro.',
      },
      {
        question: 'I concetti di brand, le moodboard dei clienti o gli screenshot vengono inviati a un server?',
        answer:
          'No. Il campionamento dei pixel, il raggruppamento dei colori, la formattazione del codice e la creazione della scheda PNG avvengono esclusivamente nella memoria locale di HTML5 Canvas. I tuoi materiali creativi restano rigorosamente sul tuo dispositivo.',
      },
      {
        question: 'Posso cambiare il numero di campioni dopo aver copiato il CSS senza ricaricare l’immagine?',
        answer:
          'Sì. Spostando il cursore Numero di colori, i dati dell’immagine memorizzati vengono raggruppati di nuovo all’istante in memoria, così puoi confrontare 4, 6 o 10 colori fianco a fianco prima di esportare.',
      },
      {
        question: 'Perché un piccolo accento neon non compare in una palette a 4 colori?',
        answer:
          'Poiché Median-Cut dà priorità alle regioni di colore con le aree di pixel più grandi, un piccolo pulsante di accento dell’1% dentro uno screenshot enorme e scuro può fondersi in un contenitore più ampio con pochi campioni. Alzando il numero di colori verso 10 o 12, di solito anche i colori di accento più piccoli diventano visibili.',
      },
      {
        question: 'Le etichette di testo dei campioni sono leggibili su colori molto scuri o molto chiari?',
        answer:
          'Sì. Sia sulle schede live della pagina sia sulla scheda PNG esportata, l’inchiostro bianco o scuro viene calcolato automaticamente dalla luminanza percepita di ogni colore, così i codici esadecimali restano leggibili.',
      },
      {
        question: 'Posso incollare uno screenshot direttamente dagli appunti nell’estrattore?',
        answer:
          'Sì. Premi Ctrl+V su Windows/Linux o Cmd+V su macOS in qualsiasi punto della pagina per caricare uno screenshot copiato o un mockup di design direttamente nell’analizzatore di colori.',
      },
      {
        question: 'Quanto sono precisi i valori HSL e RGB rispetto agli standard CSS?',
        answer:
          'Ogni campione restituisce la notazione standard valida in CSS rgb(r, g, b) e hsl(h, s%, l%) insieme a codici esadecimali #RRGGBB maiuscoli a sei cifre. Puoi incollare qualsiasi valore copiato direttamente in CSS, Figma o negli strumenti per sviluppatori del browser.',
      },
      {
        question: 'Posso estrarre una palette da un logo vettoriale SVG?',
        answer:
          'Sì. Quando trascini un file SVG fino a 20 MB, il browser lo rasterizza in modo pulito su Canvas prima di contare i colori, dandoti subito campioni e percentuali dall’opera vettoriale.',
      },
      {
        question: 'Caricando un’immagine nuova, i vecchi campioni vengono cancellati automaticamente?',
        answer:
          'Sì, trascinando un’immagine sostitutiva o cliccando su Cambia, lo stato precedente della palette viene cancellato e parte una nuova quantizzazione sulla nuova immagine. Non devi mai aggiornare la pagina tra una foto e l’altra.',
      },
      {
        question: 'Posso usare questo estrattore di palette su iOS, Android e browser desktop?',
        answer:
          'Sì. La griglia reattiva dei campioni, il cursore e i pulsanti di copia funzionano senza problemi in Safari mobile, Chrome per Android e browser desktop moderni, senza registrazioni né installazioni.',
      },
    ],
    relatedSlugs: ['/image-color-picker', '/favicon-generator', '/add-background-to-image', '/'],
  },
  {
    slug: '/gif-maker',
    name: 'Creatore di GIF',
    shortDescription: 'Crea GIF animate da JPG, PNG e WebP con durata dei fotogrammi e controllo delle ripetizioni.',
    category: 'create',
    seoTitle: 'Creatore di GIF animate gratis online',
    seoDescription:
      'Crea GIF animate gratis online nel tuo browser: unisci fotogrammi JPG, PNG, WebP e HEIC, imposta la durata di ogni fotogramma e scegli le ripetizioni.',
    h1: 'Creatore di GIF animate gratis',
    subtitle:
      'Trasforma foto, angolazioni di prodotto e fotogrammi di dimostrazioni di interfaccia in animazioni in loop con il nostro creatore di GIF animate gratis, che funziona direttamente nel tuo browser. Ideale per creator social, autori di tutorial e marketer: riordina, duplica e temporizza i fotogrammi singolarmente, scegli il numero di ripetizioni, personalizza adattamento e dimensioni dei fotogrammi e codifica file GIF89a senza filigrana e in privato.',
    howToSteps: [
      {
        title: 'Carica due o più immagini come fotogrammi',
        description:
          'Trascina file JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB ciascuno nella zona dei fotogrammi (oppure usa Aggiungi fotogrammi in seguito per aggiungerne altri).',
      },
      {
        title: 'Riordina, duplica o elimina i fotogrammi',
        description:
          'Trascina le schede dei fotogrammi dalle maniglie oppure usa i pulsanti freccia per impostare l’ordine della sequenza, duplicare i fotogrammi chiave o rimuovere le foto indesiderate.',
      },
      {
        title: 'Imposta la velocità globale e le durate per fotogramma',
        description:
          'Scegli il cursore Durata predefinita fotogramma (50–3000 ms) o un preset da 1–10 FPS, e inserisci durate personalizzate in ms sui singoli fotogrammi se serve.',
      },
      {
        title: 'Configura il comportamento di ripetizione e l’adattamento dei fotogrammi',
        description:
          'Seleziona Per sempre, Imposta ripetizioni (2–50 riproduzioni) o Riproduci una volta, poi scegli l’adattamento Contieni o Copri con un colore di sfondo opaco.',
      },
      {
        title: 'Regola dimensioni di output e qualità della palette',
        description:
          'Scegli un preset da 480 px, 640 px, 800 px o Originale (oppure digita larghezza e altezza da 16 a 2000 px) e imposta la qualità della palette di colori dal 10% al 100%.',
      },
      {
        title: 'Genera e scarica la tua GIF animata',
        description:
          'Clicca su Genera GIF animata per vedere l’anteprima live con i tempi impostati oppure codificare in locale e salvare animated_compressmypic.gif.',
      },
    ],
    features: [
      {
        title: 'Codifica GIF89a reale lato client',
        description:
          'Usa un quantizzatore di colori veloce nel browser e un codificatore GIF LZW (caricato su richiesta) — zero chiamate ad API esterne o caricamenti sul server.',
      },
      {
        title: 'Durate globali e per fotogramma',
        description:
          'Imposta una velocità uniforme dei fotogrammi in millisecondi o con preset FPS, e opzionalmente modifica i tempi sui singoli fotogrammi chiave.',
      },
      {
        title: 'Controlli flessibili di ripetizione e adattamento',
        description:
          'Scegli la ripetizione infinita, la riproduzione singola o un numero esatto di riproduzioni, oltre all’adattamento dei fotogrammi Contieni o Copri.',
      },
      {
        title: 'Avviso per GIF di grandi dimensioni',
        description:
          'Ti avvisa automaticamente quando una GIF codificata diventa pesante (oltre 5–15 MB), così puoi ottimizzare dimensioni o qualità per le app di chat.',
      },
    ],
    faqs: [
      {
        question: 'Come codifica il browser le mie foto in una GIF animata senza caricarle?',
        answer:
          'Quando clicchi su Genera GIF animata, la pagina carica su richiesta un codificatore GIF89a locale in JavaScript e un quantizzatore di colori direttamente nella scheda del browser. Ogni fotogramma viene disegnato su una tela fuori schermo alle dimensioni scelte e compresso con LZW in locale.',
      },
      {
        question: 'Qual è la differenza tra l’anteprima live e la GIF generata?',
        answer:
          'Prima della codifica, la tela di anteprima riproduce le immagini caricate in tempo reale usando le durate attuali in millisecondi e le impostazioni di adattamento, così puoi verificare subito il ritmo. Generando la GIF, quelle scelte vengono fissate in un vero file .gif a 256 colori quantizzati.',
      },
      {
        question: 'Posso fermarmi più a lungo su una slide di titolo o sul fotogramma finale della GIF?',
        answer:
          'Sì. Mentre la Durata predefinita fotogramma imposta la velocità di base (da 50 ms a 3000 ms) per l’intera sequenza, ogni scheda fotogramma ha un campo opzionale Durata (ms) che accetta da 20 ms a 10.000 ms per tenere ferme slide specifiche più a lungo.',
      },
      {
        question: 'A cosa corrispondono i preset rapidi da 1, 2, 5 e 10 FPS del creatore di GIF?',
        answer:
          'Quei pulsanti convertono i fotogrammi al secondo in intervalli esatti in millisecondi: 1000 ms per 1 FPS, 500 ms per 2 FPS, 200 ms per 5 FPS e 100 ms per 10 FPS. Puoi comunque regolare il cursore in incrementi di 25 ms dopo.',
      },
      {
        question: 'Quali opzioni di ripetizione offre la GIF finita?',
        answer:
          'In Comportamento di ripetizione puoi scegliere Per sempre per la riproduzione infinita, Imposta ripetizioni per specificare un numero esatto tra 2 e 50 riproduzioni, oppure Riproduci una volta così l’animazione si ferma sul fotogramma finale. I byte dell’estensione Netscape vengono scritti automaticamente in base alla tua scelta.',
      },
      {
        question: 'Come scelgo tra Contieni e Copri nell’adattamento dei fotogrammi della GIF?',
        answer:
          'Contieni ridimensiona ogni immagine per farla stare interamente dentro il fotogramma della GIF, riempiendo le barre vuote con il tuo colore di sfondo opaco. Copri ingrandisce leggermente ogni foto per riempire tutta la tela da bordo a bordo senza barre, ritagliando i bordi in eccesso.',
      },
      {
        question: 'Come gestisco immagini con proporzioni diverse in una stessa animazione GIF?',
        answer:
          'Scegli Contieni se non vuoi mai ritagliare loghi o foto verticali, e abbina il campione di sfondo opaco allo sfondo del tuo sito o della modalità scura. Scegli Copri quando combini foto casuali di forme diverse in una presentazione uniforme a tutto schermo.',
      },
      {
        question: 'Quali sono le dimensioni minime e massime in pixel di una GIF generata?',
        answer:
          'Larghezza e altezza di output accettano valori da 16 px a 2000 px, con pulsanti rapidi per 480 px, 640 px, 800 px e Originale. Tieni il rapporto bloccato quando ridimensioni una dimensione in proporzione.',
      },
      {
        question: 'Perché lo strumento mostra un avviso di GIF grande sopra i 5 MB o i 15 MB?',
        answer:
          'Poiché la GIF memorizza fotogrammi rasterizzati completi con un limite di 256 colori invece della compressione moderna tra fotogrammi dei video, le animazioni larghe ad alta risoluzione crescono in fretta. Passare la larghezza a 480 px o 640 px, o abbassare la qualità della palette di colori, riduce molto il peso del file per app di chat ed email.',
      },
      {
        question: 'Cosa controlla il cursore della qualità della palette di colori della GIF?',
        answer:
          'La qualità della palette di colori (dal 10% al 100%, con l’80% predefinito) regola con quanta precisione il quantizzatore campiona i pixel dei fotogrammi quando costruisce ogni palette a 256 colori. I valori alti preservano sfumature di colore più morbide, mentre quelli bassi velocizzano la codifica e spesso riducono i byte.',
      },
      {
        question: 'Quanti fotogrammi di origine dovrei unire in una GIF fatta nel browser?',
        answer:
          'La coda dei fotogrammi non ha un limite fisso di file, anche se unire da 2 a 40 fotogrammi larghi 480–800 px di solito funziona senza problemi nella memoria tipica di browser desktop e mobile. Pile più grandi di immagini 4K possono essere aggiunte in lotti fino a 20 MB per file di input.',
      },
      {
        question: 'Posso ripetere un fotogramma senza caricare lo stesso file due volte nel creatore di GIF?',
        answer:
          'Sì. Clicca sull’icona di duplicazione su qualsiasi scheda fotogramma per clonare quella slide con la sua durata personalizzata accanto all’originale, poi trascinala o spostala con le frecce in qualsiasi punto della timeline.',
      },
      {
        question: 'Devo caricare tutto in una volta o posso aggiungere altri fotogrammi dopo nel creatore di GIF?',
        answer:
          'Puoi aggiungere altre immagini in qualsiasi momento con il pulsante Aggiungi fotogrammi nell’intestazione dei fotogrammi. L’ordine attuale dei fotogrammi, le durate personalizzate e le dimensioni di output restano intatti quando si aggiungono nuovi fotogrammi.',
      },
      {
        question: 'Le esportazioni HEIC o le raffiche di Live Photo di iPhone funzionano in questo creatore di GIF?',
        answer:
          'Sì. Se selezioni più immagini .heic o .heif fino a 20 MB ciascuna, la pagina le decodifica in locale nel browser tramite WebAssembly prima di assemblare la tua animazione.',
      },
      {
        question: 'Cosa succede se cambio le impostazioni dopo aver già generato una GIF?',
        answer:
          'Clicca su Torna all’editor dei fotogrammi sotto l’anteprima della GIF finita per sbloccare timeline e controlli. Regola durate, ripetizioni, dimensioni o ordine dei fotogrammi liberamente e genera subito un nuovo file.',
      },
      {
        question: 'La GIF generata conserva gli sfondi trasparenti in modo pulito?',
        answer:
          'Prima che parta la quantizzazione LZW, ogni fotogramma viene composto sul colore di sfondo opaco selezionato (bianco per impostazione predefinita). Questo evita brutti bordi neri frastagliati intorno ai bordi smussati di PNG o SVG.',
      },
      {
        question: 'Posso estrarre un singolo fotogramma da una GIF esistente se carico un file .gif?',
        answer:
          'Quando trascini un’immagine .gif come fotogramma di origine, HTML5 Canvas carica il suo fotogramma iniziale nella sequenza come qualsiasi foto statica. Usa gli strumenti Divisore di immagini o Compressore di GIF se devi ricodificare GIF animate esistenti.',
      },
      {
        question: 'Vengono aggiunti filigrane o schede finali promozionali alla mia GIF scaricata?',
        answer:
          'Mai. Ogni GIF animata codificata contiene solo i fotogrammi e le impostazioni che hai scelto, senza branding, filigrane o limiti di utilizzo.',
      },
      {
        question: 'Perché le proporzioni sono rimaste fisse quando ho modificato la larghezza di output della GIF?',
        answer:
          'Rapporto bloccato è attivo per impostazione predefinita per evitare fotogrammi allungati o schiacciati in base alle dimensioni della tua prima slide. Clicca sull’interruttore del lucchetto per inserire larghezza e altezza personalizzate indipendenti se serve.',
      },
      {
        question: 'Il file animated_compressmypic.gif esportato funzionerà su Slack, Discord e siti web?',
        answer:
          'Sì. Il codificatore produce file binari standard GIF89a con estensioni di ripetizione Netscape, garantendo un’ampia compatibilità di riproduzione su browser, app di chat, blog e strumenti di presentazione.',
      },
    ],
    relatedSlugs: ['/image-collage-maker', '/image-splitter', '/image-resizer', '/'],
  },
  {
    slug: '/image-collage-maker',
    name: 'Creatore di collage di immagini',
    shortDescription: 'Disponi le foto in griglie 2×2, 3×3 o strisce con scambio per trascinamento ed esportazione.',
    category: 'create',
    seoTitle: 'Creatore di collage di foto gratis online',
    seoDescription:
      'Crea collage di foto gratis online nel tuo browser: griglie 2×2 e 3×3 o strisce, trascina le celle per scambiarle ed esporta in JPG o PNG fino a 4000 px.',
    h1: 'Creatore di collage di immagini gratis online',
    subtitle:
      'Assembla griglie di foto pulite, strisce prima/dopo e layout di storie social con il nostro creatore di collage di immagini gratis direttamente nel tuo browser. Pensato per creator di contenuti, venditori online e famiglie, supporta griglie 2×2 e 3×3 insieme a strisce verticali e orizzontali, con scambio di celle per trascinamento, divisioni regolabili, angoli arrotondati, spazi personalizzati ed esportazione JPG o PNG senza filigrana fino a 4000 px.',
    howToSteps: [
      {
        title: 'Carica le foto nello studio di collage',
        description:
          'Trascina immagini JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 20 MB ciascuna; con 5 o più foto viene scelta automaticamente la griglia 3×3, con 4 o meno la griglia 2×2.',
      },
      {
        title: 'Scegli un layout a griglia o a striscia',
        description:
          'Passa liberamente tra griglia 2×2 (4 celle), griglia 3×3 (9 celle), striscia verticale o striscia orizzontale nel pannello Layout del collage.',
      },
      {
        title: 'Riordina o riempi gli slot del collage',
        description:
          'Trascina una cella su un’altra per scambiare le posizioni, tocca due slot in sequenza sui touchscreen, usa le frecce sinistra/destra oppure clicca su Aggiungi foto per riempire gli slot aperti.',
      },
      {
        title: 'Regola proporzioni delle celle, spazi e angoli',
        description:
          'Regola Divisione colonne, Divisione righe o Enfasi cella principale (oppure clicca su Celle uguali), poi imposta Spaziatura (0–80 px) e Raggio cella (0–60 px).',
      },
      {
        title: 'Scegli colore di sfondo, Adattamento immagine e Dimensioni di output',
        description:
          'Scegli l’inquadratura Copri o Contieni, seleziona un campione di colore di sfondo o un codice esadecimale e inserisci dimensioni da 200 a 4000 px (oppure clicca sui preset 1200×1200, 1920×1080 o 1080×1920).',
      },
      {
        title: 'Esporta il tuo collage finito',
        description:
          'Scegli JPG (con cursore di qualità 10–100%) o PNG (senza perdita) e clicca su Scarica collage per salvare il layout a piena risoluzione in locale.',
      },
    ],
    features: [
      {
        title: '4 layout di collage puliti',
        description:
          'Crea quadrati equilibrati 2×2, griglie di foto 3×3, storie verticali per mobile o ampie strisce orizzontali di confronto.',
      },
      {
        title: 'Riordino delle celle per trascinamento',
        description:
          'Trascina una cella di foto su un altro slot per scambiare subito le posizioni, oppure tocca due celle sul telefono.',
      },
      {
        title: 'Proporzioni e spazi delle celle personalizzati',
        description:
          'Regola con precisione divisioni di colonne, divisioni di righe, enfasi della cella principale, spaziatura, arrotondamento degli angoli e colore di sfondo.',
      },
      {
        title: 'Esportazione JPG e PNG ad alta risoluzione',
        description:
          'Crea collage a piena risoluzione fino a 4000 px direttamente su HTML5 Canvas, senza filigrane.',
      },
    ],
    faqs: [
      {
        question: 'Quali layout include questo creatore di collage di immagini?',
        answer:
          'Puoi passare all’istante tra griglia 2×2 (4 celle), griglia 3×3 (9 celle), striscia verticale (colonna dall’alto in basso) e striscia orizzontale (riga affiancata). Selezionando una striscia verticale o orizzontale vengono impostate automaticamente dimensioni predefinite comode (1080×1920 o 1920×720), che puoi regolare liberamente dopo.',
      },
      {
        question: 'Come funziona lo scambio con tocco se creo un collage su telefono o tablet?',
        answer:
          'Sui touchscreen, dove trascinare è scomodo, tocca semplicemente la prima cella in Riordina celle per evidenziarla, poi tocca un secondo slot per scambiare subito le foto. Sotto ogni slot sono disponibili anche i pulsanti freccia sinistra e destra.',
      },
      {
        question: 'Cosa succede se carico meno foto del numero di celle di una griglia 3×3?',
        answer:
          'Le celle non riempite compaiono come segnaposto puliti tratteggiati «Slot N» dentro l’anteprima live, così puoi controllare il layout mentre aggiungi le immagini rimanenti. Puoi cliccare sul pulsante + direttamente su una cella vuota oppure passare a un layout 2×2 o a striscia per far corrispondere il numero esatto di immagini.',
      },
      {
        question: 'Posso rendere una foto in evidenza più grande delle altre in una griglia o in una striscia?',
        answer:
          'Sì. Nella griglia 2×2 puoi trascinare Divisione colonne e Divisione righe dal 20% all’80%, nella griglia 3×3 puoi ridimensionare colonna centrale e riga centrale, e nelle strisce verticali o orizzontali puoi aumentare l’enfasi della cella principale fino a +100%.',
      },
      {
        question: 'Come riporto i cursori delle celle disuguali a una griglia uniforme?',
        answer:
          'Clicca sul pulsante Celle uguali nella sezione Proporzioni e spaziatura delle celle. Ripristina divisione colonne, divisione righe ed enfasi principale a divisioni equilibrate e uguali con un clic.',
      },
      {
        question: 'Posso creare un collage senza bordi, con zero spazio tra le foto?',
        answer:
          'Sì. Trascina sia la spaziatura sia il raggio cella fino a 0 px, così le foto adiacenti si incontrano bordo a bordo, senza linee di giunzione visibili né angoli arrotondati.',
      },
      {
        question: 'Quando dovrei passare l’adattamento immagine da Copri a Contieni?',
        answer:
          'Copri riempie ogni cella rettangolare da bordo a bordo ritagliando i bordi sottili che escono dalle proporzioni della cella, ideale per griglie uniformi di lifestyle. Contieni riduce ogni immagine finché l’intero soggetto entra nella sua cella intatto, mostrando il colore di sfondo dietro gli eventuali margini aperti.',
      },
      {
        question: 'Posso regolare spaziatura delle celle e raggio degli angoli arrotondati separatamente?',
        answer:
          'Sì. La spaziatura regola margini esterni e larghezze delle fughe da 0 px a 80 px, mentre il raggio cella arrotonda dolcemente ogni angolo della casella foto da 0 px a 60 px.',
      },
      {
        question: 'Quali dimensioni rapide e proporzioni predefinite supporta il collage?',
        answer:
          'Puoi digitare qualsiasi dimensione di output personalizzata tra 200 px e 4000 px per lato per schede personalizzate da stampare o social. Sono integrati anche pulsanti rapidi per 1200×1200 Quadrato, 1920×1080 Orizzontale e 1080×1920 Storia.',
      },
      {
        question: 'Quali campioni di colore di sfondo compaiono per impostazione predefinita?',
        answer:
          'Hai campioni con un clic per bianco puro (#ffffff), blu ardesia profondo (#0f172a) e grigio neutro tenue (#f1f5f9). Accanto c’è un selettore di colori nativo completo ogni volta che ti serve un valore esadecimale esatto del brand.',
      },
      {
        question: 'Caricare un mix di foto HEIC di iPhone, PNG e JPG in un unico collage funziona?',
        answer:
          'Sì. Ogni file caricato — inclusi JPG, PNG, WebP, HEIC/HEIF, GIF, BMP e SVG fino a 20 MB — viene decodificato in privato nel tuo browser e disegnato su un unico HTML5 Canvas.',
      },
      {
        question: 'Se metto adesivi PNG trasparenti dentro le celle, cosa si vede dietro di loro?',
        answer:
          'Ogni cella viene renderizzata sul colore di sfondo selezionato prima di comporre l’immagine in primo piano. Questo mantiene loghi PNG trasparenti e ritagli puliti su bianco, blu ardesia scuro o tonalità personalizzate.',
      },
      {
        question: 'Dovrei salvare il mio collage finito come JPG o PNG (senza perdita)?',
        answer:
          'Scegli JPG con qualità 85%–95% per griglie di fotografie leggere destinate a Instagram, WhatsApp o email. Scegli PNG (senza perdita) quando combini screenshot nitidi di interfacce, diagrammi o grafiche con testo, dove gli aloni di compressione JPEG sarebbero fastidiosi.',
      },
      {
        question: 'Come indica il nome del file esportato quali impostazioni di collage ho usato?',
        answer:
          'Ogni esportazione scaricata incorpora automaticamente layout e dimensioni in pixel, producendo nomi come collage_2x2_1200x1200.jpg. Questo schema di nomi ti aiuta a ordinare più varianti di proporzioni senza rinominare i file a mano.',
      },
      {
        question: 'Le foto private di famiglia o le foto prima/dopo dei clienti vengono caricate da qualche parte?',
        answer:
          'No. Decodifica delle immagini, composizione del layout a griglia ed esportazione Canvas ad alta risoluzione avvengono rigorosamente dentro la scheda del browser, quindi nessuna foto lascia mai il tuo telefono o computer.',
      },
      {
        question: 'L’anteprima del collage corrisponde all’esportazione esatta in pixel a 4000 px?',
        answer:
          'Sì. Sia la scena live sia l’esportazione finale condividono esattamente la stessa matematica di proporzioni e angoli, scalando spaziatura e raggio cella in modo fluido rispetto alle dimensioni di output scelte, così le fughe esportate corrispondono a ciò che vedi.',
      },
      {
        question: 'Quante foto possono contenere una striscia verticale o orizzontale in una volta?',
        answer:
          'Le strisce verticali e orizzontali supportano da 2 a 6 slot dinamici a seconda di quante immagini carichi. Questo rende semplice creare confronti a due pannelli o strisce di storie con più fotogrammi.',
      },
      {
        question: 'Posso rimuovere una singola foto da un collage senza ricominciare da capo?',
        answer:
          'Sì. Clicca sul pulsante cestino su qualsiasi scheda slot in Riordina celle per rimuovere quella foto mantenendo intatte tutte le altre immagini caricate, le impostazioni di layout e le divisioni personalizzate.',
      },
      {
        question: 'Qual è la risoluzione massima con cui posso esportare per stampare un collage di foto?',
        answer:
          'Sia la larghezza sia l’altezza di output arrivano fino a 4000×4000 pixel, offrendo 16 megapixel di dettaglio nitido. Questa risoluzione gestisce bene stampe fotografiche da tavolo, lookbook e slide ad alta densità di pixel.',
      },
      {
        question: 'C’è un limite al numero di collage che posso creare o esportare?',
        answer:
          'No. Puoi cambiare layout, regolare i colori ed esportare collage illimitati gratis, senza account, filigrane o limiti giornalieri di esportazione.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/image-splitter', '/image-border-generator', '/'],
  },
  {
    slug: '/compress-image-to-50kb',
    name: 'Comprimi immagine a 50 KB',
    shortDescription: 'Riduci foto JPG, PNG e WebP rigorosamente sotto i 50 KB per i moduli.',
    category: 'compress',
    seoTitle: 'Comprimi immagine a 50 KB gratis online',
    seoDescription:
      'Comprimi un’immagine a 50 KB gratis online per portali passaporto, moduli di visto e avatar. Ricerca binaria della qualità e ridimensionamento intelligente.',
    h1: 'Comprimi immagine a 50 KB online',
    subtitle:
      'Prepara foto passaporto, scansioni di visto, firme manoscritte e avatar di profilo compatti per i limiti rigorosi dei portali quando devi comprimere un’immagine a 50 KB in modo affidabile. Funziona al 100% in locale nel tuo browser su file fino a 25 MB, abbinando la ricerca binaria della qualità a un ridimensionamento opzionale dei pixel, così i documenti sensibili non toccano mai server esterni.',
    howToSteps: [
      {
        title: 'Trascina la tua immagine o scansione di documento',
        description:
          'Carica uno o più file JPG, PNG, WebP o HEIC fino a 25 MB (oppure incolla le foto copiate con Ctrl+V).',
      },
      {
        title: 'Seleziona il formato di output (Originale, JPG, WebP o PNG)',
        description:
          'Scegli JPG o WebP per limiti rigorosi di foto a 50 KB, oppure mantieni Originale con conversione automatica PNG attiva per screenshot pesanti.',
      },
      {
        title: 'Controlla ridimensionamento e conversioni automatiche',
        description:
          'Tieni selezionato il ridimensionamento intelligente delle dimensioni per le foto ad alta risoluzione, oppure deselezionalo per conservare le dimensioni esatte in pixel quando lo richiede un portale.',
      },
      {
        title: 'Controlla i badge di byte verificati e la vista di confronto',
        description:
          'Controlla su ogni scheda il badge verde Sotto i 50 KB e apri il cursore Confronta per verificare che tratti del viso o linee della firma restino leggibili.',
      },
      {
        title: 'Scarica singoli file o Scarica tutto (ZIP)',
        description:
          'Salva ogni file <nome>_50kb singolarmente, usa Mantieni originale se il file era già più piccolo, oppure raggruppa i lotti in compressmypic_50kb.zip.',
      },
    ],
    features: [
      {
        title: 'Ricerca binaria della qualità + ridimensionamento dimensioni',
        description:
          'Trova prima la qualità visiva più alta sotto i 50 KB a pixel originali, poi riduce la risoluzione in modo fluido se serve.',
      },
      {
        title: 'Resoconto onesto dei risultati',
        description:
          'Non finge mai la dimensione di output: se un PNG senza perdita o una risoluzione bloccata non può stare sotto i 50 KB, lo spiega chiaramente.',
      },
      {
        title: 'Conversione intelligente da PNG a WebP/JPG',
        description:
          'Converte opzionalmente i PNG pesanti senza perdita in WebP o JPG così le foto restano nitide raggiungendo i 50 KB.',
      },
      {
        title: 'Elaborazione privata nel browser',
        description: 'Passaporti, foto d’identità e moduli personali non lasciano mai il tuo dispositivo.',
      },
    ],
    faqs: [
      {
        question: 'Quali portali comuni richiedono il caricamento di un’immagine rigorosamente sotto i 50 KB?',
        answer:
          'Domande di visto governative, rinnovi di passaporto, registrazioni a concorsi pubblici, moduli di ammissione universitaria e campi di scansione della firma impongono spesso limiti rigidi di caricamento da 20 KB a 50 KB. Tenere il file comodamente sotto i 50 KB evita timeout di invio del modulo ed errori di rifiuto del caricamento.',
      },
      {
        question: 'Perché foto passaporto e scansioni d’identità sono al sicuro qui quando le riduci a 50 KB?',
        answer:
          'Ogni operazione sui pixel — dalla decodifica HEIC alla ricerca binaria di compressione e alla creazione dello ZIP — viene eseguita in locale dentro la scheda del tuo browser. Foto d’identità sensibili, firme e documenti personali non vengono mai caricati su internet.',
      },
      {
        question: 'Perché ridurre a 50 KB una foto da 12 megapixel di solito richiede il ridimensionamento delle dimensioni?',
        answer:
          'Una foto completa da 4000×3000 pixel contiene 12 milioni di pixel, i cui dati Huffman JPEG di base superano in genere i 200 KB anche con una compressione forte. Con il ridimensionamento intelligente attivo, l’ottimizzatore riduce le dimensioni in modo fluido finché i dettagli nitidi del viso stanno comodamente sotto i 50 KB.',
      },
      {
        question: 'Dovrei scegliere JPG o WebP quando invio un’immagine sotto i 50 KB a un portale di esami o governativo?',
        answer:
          'Scegli sempre JPG per moduli governativi, passaporto, borse di studio o bancari tradizionali, perché molti script di convalida rifiutano i caricamenti .webp anche quando sono più piccoli. Scegli WebP per avatar web moderni o siti personali, dove conta la massima nitidezza a 50 KB.',
      },
      {
        question: 'Come ottimizza lo strumento firme manoscritte o documenti scansionati sotto i 50 KB?',
        answer:
          'Le scansioni di inchiostro nero su carta bianca luminosa si comprimono aggressivamente in JPG o WebP una volta tagliata la risoluzione in eccesso. Controllare il modale Confronta garantisce che i tratti d’inchiostro restino puliti senza blocchi di compressione sfocati intorno ai bordi del testo.',
      },
      {
        question: 'Perché è comparso un avviso rosso «Aumentato» quando il mio file era già di 32 KB?',
        answer:
          'Se un JPG o PNG già leggero viene ricodificato ad alta qualità su Canvas, il nuovo flusso di byte a volte può arrivare a 40 KB invece di ridursi ulteriormente. Clicca semplicemente su Mantieni originale su quella scheda per conservare il tuo file originale esatto da 32 KB.',
      },
      {
        question: 'Posso mantenere le dimensioni esatte di 600×600 pixel se il mio portale visti richiede sia pixel fissi sia un massimo di 50 KB?',
        answer:
          'Sì. Deseleziona «Consenti ridimensionamento intelligente delle dimensioni» così le dimensioni in pixel restano bloccate al 100%, lasciando che la ricerca binaria testi la qualità JPEG o WebP fino al 5% alle tue dimensioni esatte. Se un ritratto 600×600 è ragionevolmente pulito, sta facilmente sotto i 50 KB senza ridimensionamento.',
      },
      {
        question: 'Perché bloccare il formato di output su PNG attiva spesso un avviso di obiettivo mancato a 50 KB?',
        answer:
          'Poiché il PNG usa la compressione DEFLATE senza perdita, che ignora i cursori di qualità, solo icone piatte o minuscole miniature si comprimono sotto i 50 KB come PNG. Lascia il formato su Originale con conversione automatica attiva — oppure passa direttamente a JPG — così le immagini fotografiche raggiungono i 50 KB senza problemi.',
      },
      {
        question: 'Cosa succede se carico un PNG di firma trasparente e lo converto in JPG per stare sotto i 50 KB?',
        answer:
          'Selezionando JPG compare il campione di colore opaco per PNG trasparente (bianco puro #ffffff per impostazione predefinita). Tutte le regioni di sfondo trasparenti si riempiono di bianco solido prima della codifica JPEG, così l’inchiostro nero resta nitido invece di diventare nero pieno.',
      },
      {
        question: 'Posso trascinare direttamente un selfie HEIC da 15 MB di iPhone per ridurlo sotto i 50 KB?',
        answer:
          'Sì. Sono supportati file fino a 25 MB — incluse foto HEIC/HEIF di Apple — decodificati automaticamente nel browser tramite WebAssembly e compressi verso i 50 KB in un unico passaggio.',
      },
      {
        question: 'Quali passi di scala testa l’ottimizzatore quando le dimensioni al 100% superano i 50 KB?',
        answer:
          'Quando le dimensioni complete non riescono a stare sotto i 50 KB con una qualità accettabile, il motore testa fattori di riduzione progressivi a partire dall’82% scendendo verso il 10% (con un minimo di 16 px). A ogni passo esegue una nuova ricerca binaria della qualità e si ferma alle dimensioni leggibili più grandi sotto i 50 KB.',
      },
      {
        question: 'Comprimere un ritratto con sfondo scuro sotto i 50 KB causerà bande di colore visibili?',
        answer:
          'Le ombre scure e morbide con obiettivi aggressivi di 50 KB possono mostrare leggeri blocchi se le dimensioni restano enormi. Consentire il ridimensionamento permette allo strumento di codificare dimensioni leggermente più piccole con un fattore di qualità più alto, 70%–85%, producendo sfumature più morbide rispetto a dimensioni enormi al 10% di qualità.',
      },
      {
        question: 'Il compressore a 50 KB rimuove i tag GPS nascosti dalla mia foto d’identità?',
        answer:
          'Sì. Disegnare l’immagine su HTML5 Canvas rimuove i metadati EXIF come numeri di serie della fotocamera, miniature e coordinate GPS, proteggendo la privacy e liberando kilobyte extra per i dettagli visibili dell’immagine.',
      },
      {
        question: 'Come decide lo strumento se mostrare il badge «Sotto i 50 KB»?',
        answer:
          'Dopo aver codificato il Blob finale, verifica la dimensione esatta in byte rispetto a 51.200 byte (50 × 1024). Solo i file rigorosamente pari o inferiori a quel limite esatto in byte ricevono il badge verde di conferma «Sotto i 50 KB».',
      },
      {
        question: 'Posso elaborare insieme un ritratto e una scansione di firma sotto i 50 KB?',
        answer:
          'Sì. Trascina più immagini fino a 25 MB ciascuna nella coda, regola la tua preferenza di formato e scarica ogni file singolarmente oppure raggruppali in compressmypic_50kb.zip.',
      },
      {
        question: 'Cosa faccio se un portale richiede in realtà 20 KB o 30 KB invece di 50 KB?',
        answer:
          'Clicca sul link «Ti serve un obiettivo diverso in KB?» proprio dentro l’intestazione dell’obiettivo per passare direttamente al compressore di dimensione file personalizzata, dove puoi digitare qualsiasi limite personalizzato come 20 KB o 30 KB.',
      },
      {
        question: 'Qual è la dimensione massima di file che posso inserire nel compressore a 50 KB?',
        answer:
          'Sono supportati singoli file di input fino a 25 MB nei formati JPG, PNG, WebP, HEIC/HEIF, GIF, BMP e SVG. Gli input GIF animati esportano un fotogramma statico ottimizzato sotto i 50 KB.',
      },
      {
        question: 'Perché lo strumento punta appena sotto i 50 KB (intorno a 48–49,9 KB) invece di fermarsi a 25 KB?',
        answer:
          'La sua ricerca binaria ottimizza fino a 7 iterazioni per arrivare entro il 96%–100% del limite di 50 KB quando possibile. Questo massimizza la nitidezza visiva usando quasi ogni kilobyte disponibile sotto il limite.',
      },
      {
        question: 'I nomi dei file scaricati sono marcati chiaramente così non li confondo con i miei file originali ad alta risoluzione?',
        answer:
          'Sì. Ogni file di output aggiunge automaticamente _50kb prima dell’estensione — come portrait_50kb.jpg — lasciando il tuo file originale al sicuro e intatto sul dispositivo.',
      },
      {
        question: 'Posso controllare la nitidezza sullo smartphone prima di caricare su un portale di moduli?',
        answer:
          'Sì. L’interfaccia completa, incluso il visualizzatore interattivo Confronta, funziona senza problemi su Safari mobile e Chrome per Android, rendendo veloci e affidabili gli invii di moduli in movimento.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-100kb',
      '/compress-image-to-200kb',
      '/target-file-size-compressor',
      '/image-resizer',
    ],
  },
  {
    slug: '/compress-image-to-100kb',
    name: 'Comprimi immagine a 100 KB',
    shortDescription: 'Riduci le dimensioni dell’immagine sotto i 100 KB senza sfocatura visibile.',
    category: 'compress',
    seoTitle: 'Comprimi immagine a 100 KB gratis online',
    seoDescription:
      'Comprimi un’immagine a 100 KB gratis online nel tuo browser per portali di lavoro, curriculum e pagine web. Dettagli nitidi con ricerca qualità e ZIP in batch.',
    h1: 'Comprimi immagine a 100 KB online',
    subtitle:
      'Raggiungi il punto ideale comprovato per web e portali quando comprimi un’immagine a 100 KB senza sacrificare la nitidezza. Pensato per candidati che allegano foto di portfolio, blogger che preparano miniature veloci di articoli e portali HR con limiti di allegato ristretti, questo strumento locale testa impostazioni di qualità e ridimensionamento opzionale dentro il tuo browser su input fino a 25 MB.',
    howToSteps: [
      {
        title: 'Aggiungi la tua foto o grafica di articolo',
        description:
          'Trascina una o più immagini JPG, PNG, WebP o HEIC fino a 25 MB ciascuna nell’area di lavoro.',
      },
      {
        title: 'Conferma formato di output e comportamento di riserva',
        description:
          'Mantieni Originale (con riserva automatica WebP/JPG per PNG troppo grandi) oppure scegli esplicitamente JPG o WebP per un output coerente.',
      },
      {
        title: 'Scegli se è consentita la riduzione dei pixel',
        description:
          'Lascia selezionato il ridimensionamento intelligente delle dimensioni per risultati nitidi da 800 px a 1400 px, oppure deselezionalo per conservare il 100% di larghezza e altezza originali in pixel.',
      },
      {
        title: 'Confronta la nitidezza visiva con l’originale',
        description:
          'Controlla la percentuale risparmiata e il badge esatto di KB di output, poi apri Confronta su qualsiasi scheda per verificare la nitidezza dei bordi fianco a fianco.',
      },
      {
        title: 'Scarica singoli file o un ZIP in batch',
        description:
          'Salva subito singoli file <nome>_100kb oppure clicca su Scarica tutto (ZIP) per scaricare compressmypic_100kb.zip con un clic.',
      },
    ],
    features: [
      {
        title: 'Qualità massima sotto i 100 KB',
        description:
          'Invece di usare un cursore di qualità arbitrariamente basso, la ricerca binaria fissa la qualità più alta sotto i 100 KB.',
      },
      {
        title: 'Conserva la risoluzione quando possibile',
        description:
          'Mantiene il 100% di larghezza e altezza originali in pixel ogni volta che la sola regolazione della qualità raggiunge il limite di 100 KB.',
      },
      {
        title: 'Avvisi trasparenti sui limiti',
        description:
          'Ti avvisa chiaramente se un PNG bloccato o impostazioni 4K senza ridimensionamento impediscono di raggiungere i 100 KB.',
      },
      {
        title: 'Privacy 100% locale',
        description: 'Nessun caricamento, nessuna filigrana e nessuna registrazione richiesta.',
      },
    ],
    faqs: [
      {
        question: 'Perché 100 KB è considerato il punto ideale per curriculum, portali di lavoro e siti web?',
        answer:
          'Con circa 100 KB, una foto tipica da 1000 px a 1400 px si carica rapidamente anche su reti mobili 3G, mantenendo intatti dettagli fini del viso, tipografia nitida e profondità naturale dei colori. La maggior parte dei sistemi di recruiting e dei creatori di curriculum in PDF accetta comodamente risorse sotto i 100 KB senza ritagli o blocchi.',
      },
      {
        question: 'Un banner web Full HD 1920×1080 può mantenere le dimensioni complete ridotto a 100 KB?',
        answer:
          'Sì, in molti casi — soprattutto foto di prodotto pulite, illustrazioni di interfaccia o sfondi sfocati compressi in WebP o JPG. Se una scena di paesaggio affollata supera ancora i 100 KB al 35% di qualità, il ridimensionamento opzionale riduce la larghezza in modo fluido (come 82% o 68%) per proteggere la nitidezza.',
      },
      {
        question: 'Come mantiene la mia foto a 100 KB più nitida possibile la ricerca binaria automatica della qualità?',
        answer:
          'Invece di indovinare un basso livello di compressione statico come il 40%, il motore testa limiti di qualità superiore e inferiore in fino a 7 passi binari. Si ferma proprio dentro l’intervallo 96%–100% sotto i 102.400 byte, massimizzando la fedeltà dei pixel per il budget esatto di dimensione del file.',
      },
      {
        question: 'Quando dovrei deselezionare «Converti automaticamente i PNG grandi» puntando a 100 KB?',
        answer:
          'Se un’infografica piatta, un’icona di interfaccia o un diagramma a due colori deve restare rigorosamente PNG senza perdita e sta già comodamente sotto i 100 KB, lasciare Originale o scegliere PNG funziona benissimo. Per i PNG fotografici, invece, tenere attiva la conversione automatica passa le foto opache a JPG o quelle trasparenti a WebP, così mantieni pixel nitidi sotto i 100 KB.',
      },
      {
        question: 'I loghi PNG trasparenti perderanno la trasparenza se convertiti automaticamente sotto i 100 KB?',
        answer:
          'No. Prima di passare da un PNG troppo grande in modalità Originale, il compressore rileva la trasparenza alfa sul tuo file e sceglie automaticamente WebP (conservando la trasparenza completa) invece di JPG ogni volta che esistono pixel alfa.',
      },
      {
        question: 'Come influisce la compressione a 100 KB sui Core Web Vitals e sul peso della pagina?',
        answer:
          'Ridurre miniature hero da 2 MB o intestazioni di articoli da 800 KB a 95 KB taglia drasticamente il payload della pagina senza degradare visivamente le schede di layout. Immagini più leggere migliorano direttamente il Largest Contentful Paint (LCP) sia per i visitatori mobile sia desktop.',
      },
      {
        question: 'Posso ridurre la grafica di una newsletter email sotto i 100 KB per un rendering più veloce in posta?',
        answer:
          'Sì. Scegliere l’output JPG mantiene un ampio supporto dei client email in Outlook, Apple Mail e Gmail, garantendo che le newsletter con più immagini restino veloci e leggere sotto le soglie di peso dei filtri antispam.',
      },
      {
        question: 'Cosa succede quando un file che carico è già di 65 KB?',
        answer:
          'Il compressore nota che il file è già sotto i 100 KB e produce un’esportazione pulita a piena risoluzione. Se la ricodifica su HTML5 Canvas crea per caso un file leggermente più grande di 65 KB, un avviso rosso ti permette di cliccare subito su Mantieni originale.',
      },
      {
        question: 'Perché il modale Confronta aiuta quando si riducono le immagini a 100 KB?',
        answer:
          'Vedere una tendina prima/dopo divisa ti permette di verificare se capelli fini, trama dei tessuti o testo minuscolo di screenshot sono rimasti puliti dopo la compressione. Se compaiono artefatti a risoluzione bloccata, passare da JPG a WebP spesso li risolve entro lo stesso budget di 100 KB.',
      },
      {
        question: 'Questo riduttore a 100 KB elimina automaticamente i tag EXIF della fotocamera?',
        answer:
          'Sì. Disegnare su HTML5 Canvas rimuove miniature incorporate della fotocamera, blocchi XMP di Lightroom e coordinate GPS, che spesso da soli risparmiano 20–60 KB prima ancora che parta la compressione visiva.',
      },
      {
        question: 'Posso trascinare un’intera cartella di miniature di blog per comprimerle tutte a 100 KB?',
        answer:
          'Sì. Carica più file fino a 25 MB ciascuno in una coda, attendi qualche secondo mentre ogni immagine viene elaborata in sequenza nel browser e salva tutto dentro compressmypic_100kb.zip.',
      },
      {
        question: 'Cosa succede se un portale di curriculum accetta JPG fino a 100 KB ma rifiuta i file WebP?',
        answer:
          'Seleziona JPG in Formato di output invece di lasciarlo su Originale prima o dopo il caricamento. Il compressore rieseguirà ogni immagine rigorosamente come .jpg standard sotto i 100 KB e applicherà il colore opaco selezionato alle aree trasparenti.',
      },
      {
        question: 'Perché il mio screenshot PNG 3000×2000 si è ridotto pulito una volta scalato al 68% a 100 KB?',
        answer:
          'La dimensione di un file PNG senza perdita è strettamente legata al numero totale di pixel e all’entropia. Ridurre modestamente uno screenshot enorme e abbinarlo a WebP o JPG fa scendere il peso da diversi megabyte a sotto i 100 KB, mentre il testo resta comodamente leggibile.',
      },
      {
        question: 'Curriculum riservati, anteprime architettoniche o mockup sotto NDA vengono caricati da qualche parte?',
        answer:
          'Mai. Tutti i passi di compressione, le iterazioni binarie e la generazione dello ZIP avvengono rigorosamente in JavaScript e Canvas locali dentro la scheda del browser.',
      },
      {
        question: 'Quali tipi di file posso inserire nel compressore a 100 KB?',
        answer:
          'Puoi trascinare file JPG, PNG, WebP, HEIC/HEIF di iPhone, GIF, BMP e SVG fino a 25 MB per file. Nota che gli input GIF animati comprimono il loro fotogramma iniziale come output statico.',
      },
      {
        question: 'Posso scegliere un obiettivo personalizzato come 80 KB o 120 KB da questa pagina?',
        answer:
          'Sì: tocca il link «Ti serve un obiettivo diverso in KB?» nel pannello della dimensione obiettivo per passare direttamente al nostro flessibile compressore di dimensione file personalizzata con qualsiasi input di KB o MB.',
      },
      {
        question: 'Perché un obiettivo PNG bloccato può ancora fallire a 100 KB anche quando ridimensionato?',
        answer:
          'Quando il PNG è forzato esplicitamente e il ridimensionamento è disattivato, una fotografia rumorosa conserva milioni di colori unici che non possono stare in 100 KB senza perdita. Riattivare il ridimensionamento delle dimensioni o passare a WebP risolve subito il problema.',
      },
      {
        question: 'Cambiare le impostazioni dopo che il batch è finito ricomprime automaticamente i miei file?',
        answer:
          'Sì. Attivare o disattivare Formato di output, Ridimensionamento dimensioni, conversione automatica PNG o colore opaco JPG rielabora automaticamente gli elementi in coda verso i 100 KB, così puoi confrontare i risultati senza sforzo.',
      },
      {
        question: 'Windows, macOS e iOS apriranno nativamente i file scaricati _100kb.jpg e _100kb.webp?',
        answer:
          'Sì. Il JPEG standard si apre universalmente ovunque, e il WebP moderno si apre nativamente in tutti i browser desktop attuali, Anteprima di macOS, Foto di Windows, Android e iOS.',
      },
      {
        question: 'C’è una quota giornaliera o un limite di numero di file su questo strumento a 100 KB?',
        answer:
          'No. Comprimi quante immagini vuoi sotto i 100 KB in base alla memoria del browser, senza filigrane, richieste di account o paywall.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-50kb',
      '/compress-image-to-200kb',
      '/web-image-optimizer',
      '/target-file-size-compressor',
    ],
  },
  {
    slug: '/compress-image-to-200kb',
    name: 'Comprimi immagine a 200 KB',
    shortDescription: 'Ottimizza le foto sotto i 200 KB per blog, caricamenti CMS e portali.',
    category: 'compress',
    seoTitle: 'Comprimi immagine a 200 KB gratis online',
    seoDescription:
      'Comprimi un’immagine a 200 KB gratis online per WordPress, Shopify e banner di blog. Dettagli nitidi in locale con ricerca binaria della qualità e ZIP.',
    h1: 'Comprimi immagine a 200 KB online',
    subtitle:
      'Prepara fotografie di prodotto nitide per vetrine, intestazioni di blog e schede aziendali quando comprimi un’immagine a 200 KB senza appesantirla. Pensato per editor WordPress, commercianti Shopify e marketer digitali, dà priorità al 100% delle dimensioni originali e funziona completamente in locale su file fino a 25 MB, senza trasferimenti al server.',
    howToSteps: [
      {
        title: 'Carica immagini di negozio o blog',
        description:
          'Trascina singoli file o interi lotti di immagini JPG, PNG, WebP o HEIC fino a 25 MB ciascuna nell’area di lavoro.',
      },
      {
        title: 'Scegli output WebP, JPG, Originale o PNG',
        description:
          'Scegli WebP per la velocità dei CMS moderni, JPG per la compatibilità universale dei marketplace, oppure Originale per convertire automaticamente solo i PNG pesanti.',
      },
      {
        title: 'Attiva o disattiva ridimensionamento a dimensioni complete o di riserva',
        description:
          'Tieni attivo il ridimensionamento intelligente per foto da 24 MP, oppure deselezionalo quando i modelli di prodotto richiedono rigorosamente le dimensioni originali in pixel.',
      },
      {
        title: 'Controlla risparmi e dettagli fianco a fianco',
        description:
          'Verifica l’indicatore verde Sotto i 200 KB e trascina il cursore Confronta su etichette, trama dei tessuti o bordi fini di interfaccia.',
      },
      {
        title: 'Salva singole risorse o Scarica tutto (ZIP)',
        description:
          'Scarica direttamente singole immagini <nome>_200kb oppure raggruppa il catalogo della vetrina in compressmypic_200kb.zip.',
      },
    ],
    features: [
      {
        title: 'Pronto per CMS e marketplace',
        description: 'Ottimo per caricamenti su Shopify, WooCommerce, WordPress e Google Business.',
      },
      {
        title: 'Ridimensionamento intelligente di riserva',
        description:
          'Se una foto da 24 MP non può stare sotto i 200 KB a dimensione piena, il ridimensionamento delle dimensioni interviene in modo pulito.',
      },
      {
        title: 'Verifica esatta dei KB',
        description: 'Mostra i byte di output verificati insieme ai byte originali e alla % di riduzione.',
      },
      {
        title: 'Zero caricamenti sul server',
        description: 'Elaborazione veloce con HTML5 Canvas direttamente sul tuo computer o telefono.',
      },
    ],
    faqs: [
      {
        question: 'Perché agenzie WordPress e negozi Shopify standardizzano le foto di prodotto intorno ai 200 KB?',
        answer:
          'Un limite di 200 KB lascia abbastanza bitrate per cuciture nitide, lucentezza metallica ed etichette di prodotto leggibili, mantenendo veloci le griglie di collezione per gli acquirenti mobile. Restare sotto i 200 KB soddisfa anche limiti rigorosi di CMS e directory come il Profilo dell’attività su Google o le regole media di WooCommerce.',
      },
      {
        question: 'Una foto da 12 o 24 megapixel può arrivare a 200 KB in modo pulito?',
        answer:
          'Sì. Se le dimensioni complete 4000×3000 px superano i 200 KB anche al 35% di qualità, il ridimensionamento intelligente scende in proporzione, spesso fermandosi intorno a 2200 px o 1800 px di larghezza con una qualità nitida del 75%–85%.',
      },
      {
        question: 'Quando dovrei bloccare le dimensioni deselezionando «Consenti ridimensionamento intelligente» a 200 KB?',
        answer:
          'Deseleziona il ridimensionamento ogni volta che un marketplace o un portale di stampa impone larghezze esatte in pixel (come slot di prodotto quadrati 1600×1600 px). L’ottimizzatore abbasserà la qualità lossy fino al 5% a dimensioni complete e segnalerà onestamente se i 200 KB sono irraggiungibili senza ridimensionare.',
      },
      {
        question: 'Come si confrontano WebP e JPG con un obiettivo di 200 KB per le foto e-commerce?',
        answer:
          'Entro lo stesso budget di 200 KB, WebP offre in genere ombre di studio notevolmente più pulite e testo piccolo di packaging più nitido rispetto a JPG, in genere equivalente a un fattore di qualità superiore del 10%–15%. Scegli JPG solo se un backend di marketplace più vecchio rifiuta ancora i caricamenti .webp.',
      },
      {
        question: 'Cosa succede se carico un ritaglio di prodotto PNG da studio con sfondo trasparente?',
        answer:
          'Con il formato lasciato su Originale e la conversione automatica attiva, qualsiasi PNG trasparente troppo grande passa pulito a WebP trasparente quando il solo PNG non può raggiungere i 200 KB in modo ordinato. Se scegli esplicitamente JPG, le regioni trasparenti si fondono sul colore opaco per PNG trasparente che hai scelto.',
      },
      {
        question: 'Perché l’ottimizzatore preferisce mantenere la risoluzione al 100% prima di ridurre le dimensioni in pixel?',
        answer:
          'Ridurre le dimensioni scarta per sempre i dettagli della griglia di pixel, mentre una moderata regolazione della qualità lossy conserva bordi nitidi a larghezza piena. Testare prima la qualità 35%–94% a dimensioni complete garantisce che le grafiche hero desktop restino a dimensione piena quando possibile.',
      },
      {
        question: 'Posso ottimizzare in batch un intero catalogo stagionale sotto i 200 KB in una volta?',
        answer:
          'Sì. Trascina decine di foto di prodotto fino a 25 MB ciascuna nella coda, lascia che lo strumento ispezioni ogni immagine in locale e prendi ogni risorsa ottimizzata in compressmypic_200kb.zip.',
      },
      {
        question: 'Convertire gli sfondi trasparenti in JPG bianco opaco aiuta a rispettare i 200 KB per Amazon o Etsy?',
        answer:
          'Sì. Gli sfondi bianchi puri (#ffffff) si comprimono in modo estremamente efficiente in JPEG rispettando le linee guida dei marketplace per sfondi bianchi, liberando byte extra entro i 200 KB per il prodotto vero al centro.',
      },
      {
        question: 'Perché il mio caricamento WebP da 140 KB ha mostrato un avviso «Aumentato» dopo la rielaborazione?',
        answer:
          'Se un file già ben ottimizzato sotto i 200 KB viene ricodificato alla qualità alta predefinita di Canvas, può arrivare vicino a 165 KB invece di ridursi. Cliccando su Mantieni originale ripristini subito il file originale intatto da 140 KB.',
      },
      {
        question: 'Prototipi di prodotto non rilasciati o banner di campagne clienti vengono memorizzati su server esterni?',
        answer:
          'No. Ogni decodifica di pixel, passaggio di ridimensionamento e creazione di ZIP avviene in privato dentro la sessione locale del browser, rendendolo sicuro per lanci sotto embargo e lavori NDA con clienti.',
      },
      {
        question: 'Il compressore a 200 KB supporta le foto HEIC/HEIF di Apple scattate con iPhone più recenti?',
        answer:
          'Sì. WebAssembly lato client decodifica i file HEIC di iPhone direttamente nella scheda del browser, così non devi convertirli prima.',
      },
      {
        question: 'Perché 200 KB sono spesso meglio di 50 KB per infografiche dettagliate o lavagne di menu?',
        answer:
          'La tipografia piccola dentro menu di ristoranti, planimetrie immobiliari o acquisizioni di interfaccia software si sfoca in fretta se compressa sotto i 50 KB. Un obiettivo di 200 KB dà a WebP e JPG quattro volte lo spazio in byte, così le etichette fini restano nitide.',
      },
      {
        question: 'Quanto vicino ai 200 KB arriva in genere la ricerca binaria della qualità?',
        answer:
          'Una volta trovato un intervallo di qualità valido a una data scala, fino a 7 iterazioni di ricerca binaria puntano al 96%–100% di 204.800 byte. I file si fermano comunemente tra 192 KB e 199 KB, così ottieni la massima nitidezza entro il limite.',
      },
      {
        question: 'Profili colore DSLR incorporati e tag GPS della fotocamera vengono rimossi durante la compressione a 200 KB?',
        answer:
          'Sì. Scrivere le immagini tramite HTML5 Canvas rimuove i blocchi di metadati EXIF e le miniature di anteprima incorporate, migliorando la privacy ed eliminando kilobyte sprecati su WordPress e server CDN.',
      },
      {
        question: 'Cosa succede se un PNG senza perdita troppo grande si riduce solo al 35% per restare PNG sotto i 200 KB?',
        answer:
          'Con il formato impostato su Originale e la conversione automatica PNG attiva, qualsiasi PNG senza perdita forzato sotto la scala del 65% passa automaticamente a WebP o JPG. Questo ti permette di mantenere dimensioni in pixel molto più nitide superando comodamente il limite di 200 KB.',
      },
      {
        question: 'Posso visualizzare in anteprima dettagli fini di tessuto o gioielli prima di scaricare il file da 200 KB?',
        answer:
          'Sì. Cliccando su Confronta su qualsiasi scheda di risultato finita si apre un cursore interattivo a schermo diviso che confronta i pixel originali non compressi direttamente con l’output compresso.',
      },
      {
        question: 'Cosa succede se trascino un banner vettoriale SVG nel compressore a 200 KB?',
        answer:
          'Il browser rasterizza l’SVG su Canvas e lo ottimizza in un PNG, WebP o JPG sotto i 200 KB in base alla tua scelta di formato. È utile ogni volta che marketplace o portali CMS rifiutano i caricamenti .svg grezzi.',
      },
      {
        question: 'Qual è la dimensione massima di file di origine accettata per immagine qui?',
        answer:
          'Ogni JPG, PNG, WebP, HEIC, GIF, BMP o SVG caricato può arrivare fino a 25 MB. Questo margine gestisce esportazioni pesanti di fotocamere direttamente da Lightroom o da telefoni moderni senza pre-riduzione.',
      },
      {
        question: 'Come vengono nominati i file di output per restare separati dalla mia cartella principale dei prodotti?',
        answer:
          'Ogni copia salvata mantiene il nome base sanificato del file e aggiunge _200kb prima dell’estensione, producendo nomi chiari come sneaker_side_200kb.webp. Il tuo master originale ad alta risoluzione resta completamente intatto sul disco.',
      },
      {
        question: 'Posso passare a un’altra soglia esatta come 150 KB o 300 KB se un portale cambia le regole?',
        answer:
          'Sì. Usa il link «Ti serve un obiettivo diverso in KB?» in cima ai controlli per aprire il compressore di dimensione file personalizzata e inserire qualsiasi cifra esatta in KB o MB.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-100kb',
      '/compress-image-to-500kb',
      '/web-image-optimizer',
      '/bulk-image-compressor',
    ],
  },
  {
    slug: '/compress-image-to-500kb',
    name: 'Comprimi immagine a 500 KB',
    shortDescription: 'Riduci foto da più megabyte sotto i 500 KB con qualità altissima.',
    category: 'compress',
    seoTitle: 'Comprimi immagine a 500 KB gratis online',
    seoDescription:
      'Comprimi un’immagine a 500 KB gratis online senza perdere la chiarezza ad alta risoluzione. Trasforma i grandi file JPG, PNG, WebP e HEIC in risorse in locale.',
    h1: 'Comprimi immagine a 500 KB online',
    subtitle:
      'Trasforma ingombranti fotogrammi DSLR da 5 MB a 18 MB, esportazioni RAW di smartphone e screenshot ad alta risoluzione in risorse nitide quando comprimi un’immagine a 500 KB in locale nel tuo browser. Ideale per fotografi che consegnano prove ai clienti, fondatori che creano pitch deck leggeri e agenzie che inviano gallerie di portfolio, conserva le dimensioni originali in pixel ad alta risoluzione ovunque possibile, fino a 25 MB per file.',
    howToSteps: [
      {
        title: 'Trascina file di fotocamera o design a piena risoluzione',
        description:
          'Carica una o più immagini JPG, PNG, WebP o HEIC fino a 25 MB ciascuna senza ridimensionarle prima.',
      },
      {
        title: 'Scegli il formato di output per la consegna ad alta risoluzione',
        description:
          'Mantieni Originale per una gestione fluida, scegli JPG per deck clienti e prove di stampa, oppure seleziona WebP per gallerie di portfolio ultra-nitide.',
      },
      {
        title: 'Verifica preferenze di ridimensionamento e riserva PNG',
        description:
          'Lascia selezionato il ridimensionamento intelligente delle dimensioni per foto da 40 MP+, oppure deselezionalo per conservare rigorose dimensioni 4K+ con qualità ottimizzata.',
      },
      {
        title: 'Controlla i dettagli fianco a fianco in modalità Confronta',
        description:
          'Controlla ogni badge di conferma Sotto i 500 KB e ispeziona fogliame, texture della pelle o tipografia nel visualizzatore diviso prima/dopo.',
      },
      {
        title: 'Scarica singoli file o raggruppa uno ZIP',
        description:
          'Salva subito ogni output <nome>_500kb oppure esporta grandi set di foto in modo pulito in compressmypic_500kb.zip.',
      },
    ],
    features: [
      {
        title: 'Compressione a 500 KB quasi senza perdita',
        description:
          '500 KB danno ampio margine per mantenere immagini grandi da 1920 px a 4000 px visivamente indistinguibili dall’originale.',
      },
      {
        title: 'Decodifica HEIC automatica',
        description: 'Supporta le foto HEIC/HEIF di iPhone in locale tramite WebAssembly lato client.',
      },
      {
        title: 'Nessuna supposizione sulla qualità',
        description: 'Smetti di spostare le percentuali a mano: lascia che la ricerca binaria massimizzi la qualità sotto i 500 KB.',
      },
      {
        title: 'Privacy 100% nel browser',
        description: 'Nulla viene caricato su server remoti.',
      },
    ],
    faqs: [
      {
        question: 'Perché 500 KB preservano una qualità visiva quasi originale su foto 4K e da 12 MP?',
        answer:
          'Mezzo megabyte (512.000 byte) offre ampio spazio per micro-contrasto fine, grana sottile di pellicola e sfumature di cielo morbide su fotografie complete da 1920 px a 4000 px. La maggior parte delle immagini raggiunge i 500 KB in modo pulito con qualità alta 75%–92% senza ridurre affatto le dimensioni.',
      },
      {
        question: 'Quanto funziona bene per allegati di Pitch Deck, Keynote e PowerPoint?',
        answer:
          'Ridurre screenshot e mockup di studio da PNG da 6 MB a JPG o WebP sotto i 500 KB taglia drasticamente il peso complessivo della presentazione. Un deck di 30 slide resta veloce da inviare via email e sincronizzare sul cloud, restando nitidissimo sui proiettori delle conferenze.',
      },
      {
        question: 'Posso mantenere la risoluzione originale al 100% su una foto DSLR da 24 MP comprimendo a 500 KB?',
        answer:
          'Deseleziona «Consenti ridimensionamento intelligente delle dimensioni» per forzare il 100% delle dimensioni originali in pixel, consentendo alla ricerca binaria della qualità di scendere fino al 5% se serve. Per la maggior parte dei JPEG di fotocamera 6000×4000 px, una qualità JPG intorno al 40%–65% supera già i 500 KB senza ridurre un solo pixel.',
      },
      {
        question: 'Perché un ritratto HEIC da 15 MB di iPhone può restare a piena risoluzione sotto i 500 KB esportato come JPG o WebP?',
        answer:
          'Le foto HEIC dei telefoni moderni portano dati di colore profondi e un alto numero di megapixel, eppure si ricodificano in modo efficiente in JPG o WebP all’80%+ di qualità intorno a 450–495 KB. Bokeh del ritratto e sfumature sottili della pelle restano morbidi su tutta la tela dell’immagine.',
      },
      {
        question: 'Cosa succede se carico un mockup di dashboard software PNG da 10 MB senza perdita?',
        answer:
          'Un PNG retina a schermo intero raramente sta dentro i 500 KB senza perdita senza una forte riduzione dei pixel. Lasciando il formato su Originale con conversione automatica PNG attiva, passa automaticamente a WebP di alta qualità quasi senza perdita o a JPG nitido, così il testo dell’interfaccia resta leggibile a schermo intero.',
      },
      {
        question: 'Perché 500 KB sono popolari per invii di portfolio su Behance, Dribbble e agenzie?',
        answer:
          'Le piattaforme di portfolio e i portali RFP dei fornitori limitano spesso i media dei case study a 500 KB per immagine per mantenere veloci le pagine con più progetti. Comprimere appena sotto i 500 KB soddisfa i validatori di caricamento senza innescare una dura ricompressione lato server.',
      },
      {
        question: 'Come si comporta lo strumento se un file del mio batch è già di 320 KB?',
        answer:
          'Il compressore rileva che 320 KB soddisfano già il requisito di 500 KB ed elabora una copia pulita a piena risoluzione. Se la ricodifica produce un file leggermente più pesante, compare l’avviso «Aumentato» così puoi cliccare su Mantieni originale e conservare l’originale da 320 KB.',
      },
      {
        question: 'I fotografi perdono il controllo della proprietà intellettuale o espongono gli shooting dei clienti qui?',
        answer:
          'Mai. Che tu stia preparando anteprime di matrimonio, shooting commerciali di architettura o prototipi non rilasciati, ogni immagine viene decodificata e compressa dentro la scheda locale del browser, senza alcuna trasmissione al server.',
      },
      {
        question: 'Quale formato conserva la tipografia più nitida e le linee vettoriali sottili a 500 KB?',
        answer:
          'WebP supera JPG su tipografia nitida scura su bianco, grafici e schemi entro un limite di 500 KB. La sua codifica predittiva a blocchi riduce al minimo gli aloni rumorosi intorno a interfacce e diagrammi ad alto contrasto.',
      },
      {
        question: 'Posso appiattire un PNG di prodotto trasparente su carbone scuro invece che su bianco puntando a JPG a 500 KB?',
        answer:
          'Sì. Selezionando JPG compare il selettore di colore opaco per PNG trasparente, che ti permette di inserire bianco, blu ardesia scuro o qualsiasi colore esadecimale personalizzato del brand per una fusione fluida dei bordi trasparenti.',
      },
      {
        question: 'La compressione su Canvas conserva modello dell’obiettivo, velocità dell’otturatore e coordinate GPS della fotocamera?',
        answer:
          'No: HTML5 Canvas rimuove automaticamente i metadati EXIF, eliminando miniature incorporate della fotocamera e dati di posizione. Questo mantiene private le prove dei clienti e destina ogni kilobyte ai pixel visibili.',
      },
      {
        question: 'Quale limite esatto in byte attiva il badge di conferma «Sotto i 500 KB»?',
        answer:
          'Lo strumento confronta il file codificato finale con 512.000 byte (500 × 1024). I file rigorosamente pari o inferiori a 512.000 byte mostrano il badge verde di stato «Sotto i 500 KB» e lo spazio esatto risparmiato.',
      },
      {
        question: 'Posso ridurre in batch venti foto da 10 MB a 500 KB in un unico passaggio?',
        answer:
          'Sì. Trascina tutte e venti le immagini (fino a 25 MB per file) nella coda, lascia che il browser scorra ogni foto in sequenza ed esporta tutto insieme dentro compressmypic_500kb.zip.',
      },
      {
        question: 'Perché un PNG senza perdita forzato con ridimensionamento disattivato ha mostrato «Obiettivo mancato» a 500 KB?',
        answer:
          'La compressione PNG senza perdita ignora i cursori di qualità, il che significa che una scena complessa ad alta risoluzione con formato PNG e dimensioni complete bloccati non può scendere sotto il suo limite DEFLATE grezzo. Attiva il ridimensionamento delle dimensioni oppure scegli WebP/JPG per superare i 500 KB in modo pulito.',
      },
      {
        question: 'Posso ingrandire o confrontare originale e versione da 500 KB fianco a fianco prima di salvare?',
        answer:
          'Sì. Cliccando su Confronta su qualsiasi scheda completata si apre la tendina divisa prima/dopo a larghezza piena, così puoi ispezionare occhi, ciocche di capelli o piccole etichette direttamente rispetto al file originale.',
      },
      {
        question: 'Se un’immagine richiede un piccolo ridimensionamento per raggiungere i 500 KB, quanto è drastico?',
        answer:
          'Lo strumento inizia dall’82% delle dimensioni originali prima di provare passi più ripidi. Poiché 500 KB sono generosi, le esportazioni giganti da 50 MP di studio superano in genere l’obiettivo pulito già al passo 82% o 68%, mantenendo la nitidezza di stampa ad alta definizione.',
      },
      {
        question: 'Lo strumento supporta bitmap BMP legacy o diagrammi SVG fino a 25 MB?',
        answer:
          'Sì. Archivi BMP non compressi e illustrazioni vettoriali SVG fino a 25 MB si caricano direttamente su Canvas ed esportano in modo pulito sotto i 500 KB nel formato raster selezionato.',
      },
      {
        question: 'Come cambia il nome del file quando scarico copie compresse a 500 KB?',
        answer:
          'Ogni immagine elaborata aggiunge automaticamente _500kb prima dell’estensione, producendo nomi chiari come architectural_proof_500kb.jpg. Tenere il tag nel nome del file esportato garantisce che i tuoi deliverable compressi non sovrascrivano mai i master originali.',
      },
      {
        question: 'Cosa dovrei fare se un portale di marketplace imposta invece un limite di 1 MB o 250 KB?',
        answer:
          'Clicca sulla scorciatoia «Ti serve un obiettivo diverso in KB?» sopra i pulsanti di formato per aprire il compressore di dimensione file personalizzata e inserire qualsiasi soglia personalizzata in KB o MB.',
      },
      {
        question: 'Posso comprimere risorse da 500 KB direttamente da iPad o tablet Android?',
        answer:
          'Sì. Controlli di formato touch-friendly, cursore di confronto ed esportazione ZIP funzionano in modo pulito nei browser moderni di tablet e mobile, senza software desktop richiesto.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-200kb',
      '/target-file-size-compressor',
      '/bulk-image-compressor',
      '/',
    ],
  },
  {
    slug: '/bulk-image-compressor',
    name: 'Compressore di immagini in lote',
    shortDescription: 'Comprimi in batch decine di immagini in una volta ed esporta un unico ZIP.',
    category: 'compress',
    seoTitle: 'Compressore immagini in lote gratis online',
    seoDescription:
      'Riduci decine di file con il compressore di immagini in lote nel tuo browser. Applica i profili Web Veloce, Email o Alta Fedeltà e scarica in un unico ZIP.',
    h1: 'Compressore di immagini in lote gratis',
    subtitle:
      'Riduci intere cartelle di foto di prodotto, backup del rullino e risorse di siti web contemporaneamente con il nostro compressore di immagini in lote gratis direttamente nel tuo browser. Pensato per team e-commerce, fotografi e sviluppatori che gestiscono grandi lotti, abbina profili rapidi in un clic e cursori di qualità personalizzati a monitoraggio live dei progressi, confronti visivi per file e download istantanei di un unico ZIP.',
    howToSteps: [
      {
        title: 'Trascina l’intero batch di immagini',
        description:
          'Seleziona o trascina più immagini JPG, PNG, WebP o HEIC fino a 25 MB ciascuna nella zona di batch (altre possono essere aggiunte in qualsiasi momento).',
      },
      {
        title: 'Clicca un profilo rapido di batch o personalizza le impostazioni',
        description:
          'Scegli Web Veloce (WebP 75%), Email / Condivisione (JPG 65%) o Alta Fedeltà (85%), oppure regola cursore di qualità, formato di output e colore opaco.',
      },
      {
        title: 'Monitora i progressi live della compressione in batch',
        description:
          'Guarda la barra di avanzamento live file per file finire e controlla il banner di riepilogo con totale file, MB risparmiati e percentuale di riduzione complessiva.',
      },
      {
        title: 'Ispeziona singole schede e qualità prima/dopo',
        description:
          'Apri il modale Confronta su file campione, clicca su Mantieni originale se una risorsa già minuscola è cresciuta, oppure riesegui singoli file con impostazioni regolate.',
      },
      {
        title: 'Regola e ricomprimi tutto se serve',
        description:
          'Cambia profilo, percentuale di qualità o formato di output in qualsiasi momento e rielabora l’intera coda con un clic senza ricaricare.',
      },
      {
        title: 'Scarica singoli file o Scarica tutto (ZIP)',
        description:
          'Salva singole immagini ottimizzate direttamente dalle loro schede oppure clicca su Scarica tutto (ZIP) per scaricare bulk_compressed_compressmypic.zip.',
      },
    ],
    features: [
      {
        title: 'Progressi batch e totali di risparmio',
        description:
          'Mostra progressi live file per file più MB totali e percentuale risparmiata aggregati su tutto il batch.',
      },
      {
        title: 'Profili rapidi di batch in un clic',
        description: 'Applica preset WebP, Email/JPG o Alta Fedeltà su ogni file all’istante.',
      },
      {
        title: 'Modale di confronto per file',
        description: 'Ispeziona qualsiasi singola foto compressa rispetto all’originale prima di scaricare.',
      },
      {
        title: 'Zero limiti di batch',
        description: 'Comprimi quante immagini consente la memoria del dispositivo, senza livelli a pagamento né code sul server.',
      },
    ],
    faqs: [
      {
        question: 'Cosa cambiano i tre profili rapidi di batch sulle mie immagini in coda?',
        answer:
          'Web Veloce passa il formato di output a WebP al 75% di qualità per siti leggeri, Email / Condivisione converte il batch in JPG al 65% per allegati più piccoli, e Alta Fedeltà mantiene i formati originali all’85% di qualità. Cliccare un profilo aggiorna automaticamente le impostazioni e ricomprime i file già caricati.',
      },
      {
        question: 'Posso comprimere immagini in batch su laptop o telefono senza una connessione di caricamento attiva?',
        answer:
          'Una volta che la pagina dello strumento ha finito di caricarsi, tutta la compressione in batch, la decodifica e la creazione dello ZIP avvengono in locale nel tuo browser usando HTML5 Canvas e WebAssembly. Le tue foto non entrano mai in una coda di elaborazione remota né lasciano il tuo dispositivo.',
      },
      {
        question: 'Come riporta il riepilogo aggregato del batch i risparmi totali?',
        answer:
          'Man mano che i file finiscono l’elaborazione, la barra di riepilogo somma la dimensione originale in byte di ogni elemento rispetto al risultato compresso, mostrando i megabyte aggregati risparmiati e la percentuale di riduzione complessiva. Se un singolo file è finito più grande, puoi cliccare su Mantieni originale su quella scheda prima di esportare lo ZIP.',
      },
      {
        question: 'Cosa succede quando mescolo screenshot PNG, HEIC di iPhone e foto JPG in un unico batch?',
        answer:
          'Con il formato di output impostato su Originale, ogni immagine viene codificata nel suo formato web corrispondente (decodificando HEIC in JPG/PNG in modo pulito tramite WebAssembly). In alternativa, scegliere WebP o JPG unifica l’intera cartella mista in un’unica estensione di output uniforme.',
      },
      {
        question: 'Qual è la dimensione massima consentita per file nel compressore di immagini in lote?',
        answer:
          'Sono supportati singoli file fino a 25 MB nei formati JPG, PNG, WebP, HEIC/HEIF, GIF, BMP e SVG. Non c’è un limite fisso di numero: solo la memoria disponibile del browser del tuo dispositivo.',
      },
      {
        question: 'Perché lo strumento elabora i batch con una barra di avanzamento live invece di bloccare la scheda?',
        answer:
          'I file vengono eseguiti in passaggi controllati del browser con aggiornamenti di avanzamento (X / Y) mostrati in tempo reale. Questo mantiene la pagina reattiva così puoi monitorare chiaramente il completamento anche su batch di 30 o 50 foto ad alta risoluzione.',
      },
      {
        question: 'Come si chiama lo ZIP esportato quando clicco su Scarica tutto (ZIP)?',
        answer:
          'Cliccando su Scarica tutto (ZIP) impacchetta ogni output finito in modo pulito dentro bulk_compressed_compressmypic.zip. L’intero archivio ZIP viene creato direttamente nella memoria del browser senza passare da un server di archiviazione cloud.',
      },
      {
        question: 'Posso aggiungere altre foto alla coda dopo che il primo batch ha già finito di comprimere?',
        answer:
          'Sì. Trascinare altre immagini le aggiunge in modo pulito alla tua lista di batch esistente, così puoi raggruppare file vecchi e appena trascinati insieme in un unico ZIP finale.',
      },
      {
        question: 'Qual è la differenza tra i preset Bilanciato, File più piccolo e Alta qualità dentro i Controlli di compressione?',
        answer:
          'I profili rapidi di batch configurano scorciatoie di formato e qualità per obiettivi comuni come velocità web o allegati email. Intanto, le pillole Bilanciato, File più piccolo, Alta qualità e il cursore di qualità 10%–100% dentro i Controlli di compressione ti permettono di regolare con precisione la forza lossy esatta prima di cliccare su Ricomprimi tutto.',
      },
      {
        question: 'Se converto icone PNG trasparenti in JPG in batch, come vengono colorati i loro sfondi?',
        answer:
          'Ogni volta che il formato di output è JPG (incluso tramite il profilo Email / Condivisione), il selettore Colore di sfondo opaco compare automaticamente. Riempie i canali alfa trasparenti in modo pulito su bianco puro (#ffffff) o qualsiasi tonalità esadecimale personalizzata che scegli, così le icone non diventano mai nere.',
      },
      {
        question: 'Il compressore di immagini in lote ridimensiona le dimensioni in pixel o mantiene larghezza e altezza originali?',
        answer:
          'Il compressore di immagini in lote mantiene ogni file al 100% di larghezza e altezza originali in pixel riducendo la dimensione in byte tramite codifica di qualità. Se devi anche ridurre le dimensioni su decine di foto, abbinalo al Ridimensionatore di immagini in lote.',
      },
      {
        question: 'Perché un PNG già compresso nel mio batch ha mostrato un avviso «Ricodifica aumentata»?',
        answer:
          'I file PNG esportati da strumenti che usano una quantizzazione aggressiva della palette possono espandersi leggermente quando vengono risalvati come PNG senza perdita a 24 bit su HTML5 Canvas. Cliccando su Mantieni originale su quella scheda conservi l’originale più piccolo dentro lo ZIP del batch, oppure passare il formato a WebP/JPG lo riduce ulteriormente.',
      },
      {
        question: 'Posso ricomprimere solo una singola immagine ostinata invece di rieseguire l’intera cartella?',
        answer:
          'Sì. Ogni scheda di risultato finita include i propri pulsanti Ricomprimi e Rimuovi insieme a Confronta e Scarica, così puoi regolare o scartare gli outlier in modo pulito.',
      },
      {
        question: 'La compressione in batch rimuove automaticamente coordinate GPS e tag EXIF della fotocamera dagli album di viaggio?',
        answer:
          'Sì. Poiché ogni immagine viene renderizzata su HTML5 Canvas durante la compressione, tag EXIF incorporati, numeri di serie della fotocamera e posizioni GPS vengono rimossi in modo pulito da ogni file nello ZIP.',
      },
      {
        question: 'Quando dovrei scegliere il compressore di immagini in lote rispetto a Dimensione file obiettivo o Ottimizzatore immagini web?',
        answer:
          'Usa il compressore di immagini in lote quando vuoi risparmi rapidi e uniformi basati sulla qualità a dimensioni complete in pixel su decine di foto. Scegli Dimensione file obiettivo quando ti serve che ogni file stia sotto un limite rigoroso in KB, oppure Ottimizzatore immagini web per limiti predefiniti di pixel web più tag HTML reattivi.',
      },
      {
        question: 'Posso controllare la qualità visiva su singoli elementi del batch prima di scaricare l’intero ZIP?',
        answer:
          'Sì. Cliccando su Confronta su qualsiasi scheda si apre il cursore diviso fianco a fianco che confronta le versioni originale e compressa in pieno dettaglio.',
      },
      {
        question: 'Come si comporta il punto di partenza predefinito di qualità al 70% sulle librerie di foto generiche?',
        answer:
          'La qualità lossy al 70% offre in genere riduzioni sostanziali di byte del 50%–75% su JPEG ad alta risoluzione, restando visivamente pulita su schermi web tipici e condivisione via email. Alzala verso l’85% in Alta Fedeltà per lavori di portfolio critici.',
      },
      {
        question: 'Cosa succede se carico un’enorme cartella di 100 foto su un telefono con poca RAM?',
        answer:
          'Poiché decodifica e buffer Canvas risiedono nella memoria del dispositivo, le schede mobile possono rallentare su code singole estreme. Elaborare da 15 a 30 foto ad alta risoluzione per batch — e svuotare le liste finite tra un set e l’altro — mantiene fluidi i browser degli smartphone.',
      },
      {
        question: 'Filigrane, limiti giornalieri di file o richieste di upgrade a pagamento vengono mai applicati alle esportazioni ZIP in batch?',
        answer:
          'Mai. Sia i download di singoli file sia i bundle Scarica tutto (ZIP) vengono esportati in modo pulito senza filigrane, registrazioni di account o paywall sul numero di file.',
      },
      {
        question: 'Posso inserire GIF animate in un batch di compressione in lote?',
        answer:
          'Gli input GIF animati estraggono e comprimono solo il loro fotogramma iniziale come file statico qui. Se devi ridurre GIF animate con più fotogrammi mantenendo il movimento intatto, usa il nostro strumento dedicato Compressore di GIF.',
      },
    ],
    relatedSlugs: [
      '/bulk-image-resizer',
      '/bulk-image-converter',
      '/web-image-optimizer',
      '/',
    ],
  },
  {
    slug: '/target-file-size-compressor',
    name: 'Compressore di immagini a dimensione desiderata',
    shortDescription: 'Comprimi qualsiasi immagine fino al tuo limite esatto in KB o MB.',
    category: 'compress',
    seoTitle: 'Comprimi immagini a dimensione esatta gratis',
    seoDescription:
      'Raggiungi i limiti di caricamento esatti con il compressore a dimensione desiderata nel browser. Digita un limite in KB o MB e comprimi tutto in locale.',
    h1: 'Compressore di immagini a dimensione desiderata',
    subtitle:
      'Inserisci un limite di caricamento esatto in KB o MB — per esempio 35 KB per un badge, 150 KB per un banner del sito o 2 MB per un allegato — con il nostro compressore a dimensione desiderata, che funziona direttamente nel browser. Pensato per designer, sviluppatori e candidati alle prese con regole di portali non standard, abbina la ricerca binaria della qualità al ridimensionamento opzionale dei pixel su file fino a 25 MB, tutto sul tuo dispositivo.',
    howToSteps: [
      {
        title: 'Inserisci il tuo limite personalizzato in KB o MB',
        description:
          'Digita un numero qualsiasi da 1 KB a 10.240 KB (oppure passa a MB, fino a 20 MB), oppure tocca una scorciatoia rapida come 20 KB, 50 KB, 100 KB, 200 KB, 500 KB o 1 MB.',
      },
      {
        title: 'Trascina una o più immagini fino a 25 MB',
        description:
          'Carica file JPG, PNG, WebP, HEIC, GIF, BMP o SVG nella zona di caricamento: l’ottimizzazione automatica verso il tuo obiettivo parte subito.',
      },
      {
        title: 'Scegli il formato di uscita e i controlli di sicurezza',
        description:
          'Seleziona Originale, JPG, WebP o PNG, lascia attivo il ridimensionamento intelligente delle dimensioni se i file ad alta risoluzione devono perdere pixel e attiva la conversione automatica dei PNG per la grafica pesante.',
      },
      {
        title: 'Leggi la diagnosi dell’obiettivo e confronta la qualità',
        description:
          'Controlla il Riepilogo della compressione mirata per vedere i file che hanno raggiunto l’obiettivo e quelli che non ce l’hanno fatta, ispeziona la nitidezza affiancata con Confronta oppure clicca Mantieni originale se un piccolo file è cresciuto.',
      },
      {
        title: 'Regola l’obiettivo quando vuoi o scarica lo ZIP',
        description:
          'Modifica la tua soglia personalizzata e clicca Comprimi a [obiettivo] per elaborare di nuovo la coda, poi salva i singoli file o clicca Scarica tutto (ZIP).',
      },
    ],
    features: [
      {
        title: 'Obiettivi personalizzati in KB e MB',
        description: 'Imposta qualsiasi dimensione desiderata, da avatar minuscoli da 10 KB fino a caricamenti di più megabyte per la stampa.',
      },
      {
        title: 'Motore in due fasi: qualità e scala',
        description: 'Prova prima i livelli di qualità a risoluzione piena, poi riduce le dimensioni passo dopo passo solo quando serve.',
      },
      {
        title: 'Diagnosi onesta degli obiettivi mancati',
        description: 'Spiega con chiarezza quando un PNG senza perdita o il ridimensionamento disattivato impedisce di raggiungere un limite rigido di dimensione.',
      },
      {
        title: 'Supporto a lotti e ZIP',
        description: 'Comprimi più file fino allo stesso obiettivo in KB e scaricali tutti in un unico ZIP.',
      },
    ],
    faqs: [
      {
        question: 'Quale intervallo di KB e MB posso digitare in questo compressore a dimensione desiderata?',
        answer:
          'In modalità KB puoi inserire qualsiasi numero intero da 1 KB fino a 10.240 KB (10 MB), con 150 KB come valore predefinito all’apertura della pagina. Passando all’unità MB puoi puntare a qualsiasi valore da 1 MB fino a 20 MB, con scorciatoie rapide per 20 KB, 50 KB, 100 KB, 200 KB, 500 KB e 1 MB.',
      },
      {
        question: 'Come ricalcola il mio numero il passaggio tra KB e MB?',
        answer:
          'Cliccando MB, il tuo obiettivo attuale in KB viene diviso per 1.024 e arrotondato ad almeno 1 MB, così non scendi mai per sbaglio da kilobyte a un limite minuscolo in byte. Tornando a KB, il valore viene moltiplicato per 1.024 fino al limite di 10.240 KB.',
      },
      {
        question: 'Perché l’ottimizzatore prova prima la ricerca binaria della qualità al 100% della risoluzione, prima di ridurre le dimensioni?',
        answer:
          'Molte immagini con limiti moderati come 150 KB, 300 KB o 1,5 MB possono raggiungere l’obiettivo solo riducendo il peso della compressione JPEG o WebP, senza scartare pixel. Verificare prima la qualità dal 35% al 94% a dimensioni piene garantisce che larghezza e altezza dei pixel restino intatte quando possibile.',
      },
      {
        question: 'Quando interviene automaticamente il ridimensionamento intelligente delle dimensioni?',
        answer:
          'Se nemmeno la qualità con perdita al 35% a larghezza piena riesce a portare l’immagine sotto la tua soglia in byte e la casella Consenti ridimensionamento intelligente delle dimensioni è spuntata, il motore scende per fattori di scala progressivi dall’82% verso il 10%. A ogni passo esegue una nuova ricerca della qualità e sceglie la risoluzione più alta che rispetta il tuo limite esatto.',
      },
      {
        question: 'Cosa succede quando un portale richiede sia un limite in KB strettissimo sia nessuna modifica delle dimensioni?',
        answer:
          'Deseleziona Consenti ridimensionamento intelligente delle dimensioni per bloccare larghezza e altezza al 100%. Il compressore spinge quindi la qualità JPG o WebP con perdita fino al 5% a dimensioni piene e ti dice onestamente se la complessità dell’immagine non può stare fisicamente dentro i KB richiesti.',
      },
      {
        question: 'Perché limiti impossibili come 2 KB o 3 KB attivano un avviso onesto di obiettivo mancato?',
        answer:
          'Ogni file JPEG, WebP o PNG valido contiene intestazioni obbligatorie, tabelle di Huffman e blocchi di quantizzazione del colore che occupano diverse centinaia di byte anche su una griglia minuscola. Anziché bloccarsi o inventare numeri, la scheda mostra la dimensione codificata reale più piccola raggiungibile, con suggerimenti concreti.',
      },
      {
        question: 'Cosa fa l’interruttore di conversione automatica dei PNG grandi quando il formato resta su Originale?',
        answer:
          'I file PNG senza perdita ignorano i cursori della qualità e si riducono solo con il ridimensionamento, che può sfocare screenshot o grafica di prodotto se forzato sotto un limite stretto in KB. Con la conversione automatica attiva, i PNG opachi troppo grandi passano a JPG, mentre quelli trasparenti passano a WebP quando il PNG da solo non raggiunge l’obiettivo o scende sotto il 65% di scala.',
      },
      {
        question: 'Posso comprimere in lotto foto miste fino allo stesso limite personalizzato in KB in una volta sola?',
        answer:
          'Sì. Trascina nella coda qualsiasi mix di immagini JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 25 MB ciascuna: ogni file viene ottimizzato in modo indipendente rispetto al tuo obiettivo attivo in KB o MB.',
      },
      {
        question: 'Come tiene traccia il Riepilogo della compressione mirata del successo parziale di un lotto?',
        answer:
          'Quando comprimi un lotto di più file con un limite personalizzato rigido, il banner scuro di riepilogo conta esattamente quanti file hanno superato il tuo obiettivo e quanti non sono riusciti a entrarci onestamente, oltre al totale dei byte risparmiati. Ogni singola scheda spiega la sua percentuale finale di qualità e il rapporto di scala esatto.',
      },
      {
        question: 'Quale nome ricevono i download singoli e gli ZIP del compressore a dimensione desiderata?',
        answer:
          'I download singoli aggiungono l’etichetta in kilobyte del tuo obiettivo — con nomi come brochure_150kb.jpg — mentre le esportazioni ZIP di più file vengono salvate come compressmypic_<valore><unità>.zip. I tuoi originali intatti restano separati e al sicuro sul disco.',
      },
      {
        question: 'Come gestisce lo strumento gli sfondi trasparenti se scelgo JPG per un limite rigido in KB?',
        answer:
          'Scegliendo JPG compare il selettore del colore opaco per PNG trasparenti (bianco puro #ffffff per impostazione predefinita). Qualsiasi area trasparente viene riempita con il colore di sfondo scelto prima che parta la compressione JPEG, evitando bordi neri pieni.',
      },
      {
        question: 'Perché un file più piccolo del mio obiettivo ha mostrato un avviso di crescita?',
        answer:
          'Se chiedi un limite di 300 KB per un’immagine già compressa a 180 KB, decodificarla su Canvas HTML5 e salvarla di nuovo ad alta qualità può farla crescere fino a 240 KB. Clicca Mantieni originale su quella scheda per conservare il file sorgente più leggero da 180 KB.',
      },
      {
        question: 'La compressione a obiettivo personalizzato rimuove i metadati EXIF sensibili da documenti o foto?',
        answer:
          'Sì. Il passaggio dei pixel attraverso Canvas HTML5 rimuove automaticamente le anteprime della fotocamera incorporate, i metadati di scatto e le coordinate GPS, mantenendo privati i file personali e dedicando ogni kilobyte alla chiarezza visiva.',
      },
      {
        question: 'Posso cambiare il mio valore in KB dopo che le immagini hanno finito, senza ricaricarle?',
        answer:
          'Sì. Modifica il numero dell’obiettivo o tocca un’altra scorciatoia in qualsiasi momento e clicca il pulsante Comprimi a [obiettivo] per riottimizzare subito l’intero elenco caricato, in memoria.',
      },
      {
        question: 'Quanto è preciso il conteggio finale dei byte rispetto ai limiti binari in kilobyte?',
        answer:
          'Il motore converte i KB in byte binari esatti (KB × 1024) e tratta il valore inserito come un limite superiore rigido, che non viene mai superato a meno che non sia fisicamente impossibile con i vincoli bloccati. La sua ricerca binaria di solito si ferma tra il 96% e il 100% di quel limite per preservare il massimo dettaglio.',
      },
      {
        question: 'Le bozze private dei clienti, i contratti o le scansioni mediche vengono caricati durante il calcolo dell’obiettivo?',
        answer:
          'No. Le iterazioni della ricerca binaria, il ridimensionamento delle immagini, la decodifica HEIC in WebAssembly e la creazione degli ZIP avvengono rigorosamente dentro la sessione del tuo browser, senza alcun trasferimento di rete esterno.',
      },
      {
        question: 'Posso vedere in anteprima il testo fine o i dettagli al mio limite in KB prima di salvare?',
        answer:
          'Sì. Clicca Confronta su qualsiasi scheda di risultato completata per aprire una tendina interattiva prima/dopo e ispezionare i bordi netti direttamente rispetto al caricamento originale.',
      },
      {
        question: 'Quando conviene scegliere uno strumento fisso come 50 KB o 100 KB invece di questo strumento personalizzato?',
        answer:
          'Usa le pagine fisse quando il tuo flusso di lavoro punta sempre a parametri standard dei portali, come passaporti da 50 KB o caricamenti Shopify da 200 KB. Apri questo compressore a dimensione desiderata quando i moduli chiedono limiti insoliti come 30 KB, 75 KB, 250 KB o 1,5 MB.',
      },
      {
        question: 'Cosa succede se carico una GIF animata e punto a 400 KB qui?',
        answer:
          'Poiché la mira in KB basata su Canvas elabora fotogrammi raster statici, le GIF animate caricate vengono ottimizzate ed esportate come immagine fissa del primo fotogramma. Usa il nostro Compressore GIF dedicato se devi ridurre animazioni in loop con più fotogrammi in modo pulito.',
      },
      {
        question: 'Cosa succede se imposto un obiettivo alto in MB, come 5 MB, su un’immagine da 1 MB?',
        answer:
          'Qualsiasi immagine già sotto il tuo limite personalizzato in MB lo supera subito al primo passaggio di qualità massima a dimensioni piene. Se la ricodifica gonfia inutilmente il peso in byte, puoi cliccare Mantieni originale direttamente sulla scheda per conservare il file sorgente più leggero.',
      },
    ],
    relatedSlugs: [
      '/compress-image-to-50kb',
      '/compress-image-to-100kb',
      '/compress-image-to-200kb',
      '/compress-image-to-500kb',
    ],
  },
  {
    slug: '/bulk-image-resizer',
    name: 'Ridimensiona immagini in lotto',
    shortDescription: 'Ridimensiona decine di immagini per dimensioni massime, larghezza o % + ZIP.',
    category: 'resize',
    seoTitle: 'Ridimensiona immagini in lotto gratis online – ZIP',
    seoDescription:
      'Ridimensiona decine di foto con il nostro ridimensionatore in lotto gratis nel browser. Scegli Adatta a LxA max, Larghezza uniforme o %, poi scarica uno ZIP.',
    h1: 'Ridimensiona immagini in lotto gratis online',
    subtitle:
      'Uniforma le dimensioni in pixel di interi servizi di prodotto, cartelle di blog e album fotografici con il nostro ridimensionatore di immagini in lotto gratuito, che funziona in locale nel browser. Pensato per venditori e-commerce, team di contenuti e fotografi, gestisce lotti misti di ritratti e paesaggi con Adatta a L × A max, Larghezza uniforme, L × A esatto o scala in percentuale fino a 25 MB per file, con esportazione ZIP immediata.',
    howToSteps: [
      {
        title: 'Trascina più immagini nella coda del lotto',
        description:
          'Carica qualsiasi mix di file JPG, PNG, WebP, HEIC, GIF, BMP o SVG fino a 25 MB ciascuno dal tuo computer o telefono.',
      },
      {
        title: 'Scegli una strategia di ridimensionamento in lotto',
        description:
          'Scegli Adatta a L × A max per orientamenti misti, Larghezza uniforme per layout a colonna fissa, L × A esatto per griglie rigide o Percentuale (%) per scalare in modo uniforme.',
      },
      {
        title: 'Imposta le dimensioni desiderate o le scorciatoie rapide',
        description:
          'Inserisci pixel da 1 a 12.000 px (oppure clicca Full HD 1920px, Blog 1200px, E-commerce 1000×1000 o Miniatura 600px) oppure fai scorrere la scala dal 10% al 200%.',
      },
      {
        title: 'Configura la protezione anti-ingrandimento e il comportamento di adattamento',
        description:
          'Lascia spuntato Non ingrandire le immagini più piccole per proteggere le icone minuscole, oppure scegli Contieni, Copri o Allunga quando è selezionato L × A esatto.',
      },
      {
        title: 'Scegli formato di uscita, qualità e sfondo opaco',
        description:
          'Mantieni Originale oppure converti le uscite in JPG, PNG o WebP, con un cursore di qualità dal 10% al 100% e un colore di sfondo opaco personalizzato per il JPG.',
      },
      {
        title: 'Esegui Ridimensiona in lotto e Scarica tutto (ZIP)',
        description:
          'Controlla le dimensioni in pixel vecchie e nuove di ogni scheda e clicca Scarica tutto (ZIP) per salvare bulk_resized_compressmypic.zip in locale.',
      },
    ],
    features: [
      {
        title: 'Modalità Adatta a riquadro max',
        description:
          'Riduce in sicurezza sia paesaggi larghi sia ritratti alti dentro, per esempio, 1200×1200 px, senza ritagli o distorsioni.',
      },
      {
        title: 'Protezione anti-ingrandimento',
        description: 'Lascia spuntato «Non ingrandire le immagini più piccole» così i piccoli asset restano nitidi invece di stirarsi.',
      },
      {
        title: 'Controlli di formato e qualità',
        description: 'Se vuoi, converti le uscite ridimensionate in WebP o JPG nello stesso passaggio.',
      },
      {
        title: 'Pacchetto ZIP in un clic',
        description: 'Scarica decine di immagini ridimensionate con nomi puliti dentro un unico file ZIP.',
      },
    ],
    faqs: [
      {
        question: 'Come gestisce Adatta a L × A max una cartella che mescola paesaggi orizzontali e ritratti verticali?',
        answer:
          'Adatta a L × A max tratta i valori di larghezza e altezza inseriti (predefiniti 1200×1200 px) come un riquadro invisibile, preservando le proporzioni naturali di ogni foto. Un paesaggio 4000×2000 diventa 1200×600, mentre un ritratto 2000×4000 diventa 600×1200 — senza ritagli né stiramenti.',
      },
      {
        question: 'Quando è meglio Larghezza uniforme rispetto ad Adatta a L × A max?',
        answer:
          'Scegli Larghezza uniforme quando costruisci newsletter verticali, colonne di articoli CMS o gallerie responsive in cui ogni immagine deve condividere la stessa larghezza orizzontale esatta. Ogni foto scala l’altezza in proporzione, così nulla si stira o si ritaglia.',
      },
      {
        question: 'Cosa fanno Contieni, Copri e Allunga in modalità L × A esatto?',
        answer:
          'Contieni adatta l’intera immagine dentro il tuo riquadro esatto in pixel con margini puliti, mentre Copri riempie ogni pixel fino al bordo ritagliando al centro i lati in eccesso. Allunga forza le proporzioni non corrispondenti ad adattarsi direttamente ai pixel desiderati esatti.',
      },
      {
        question: 'Come funziona il ridimensionamento in lotto in Percentuale (%)?',
        answer:
          'La modalità Percentuale moltiplica la larghezza e l’altezza originali di ogni immagine caricata per il fattore scelto con il cursore (dal 10% al 200%, con pulsanti rapidi 25%, 50%, 75%, 100% e 150%). Scegliendo il 50%, una foto 4000×3000 diventa 2000×1500 e un’icona 1000×800 diventa 500×400 nello stesso passaggio.',
      },
      {
        question: 'Perché dovrei lasciare attiva l’opzione Non ingrandire le immagini più piccole nei lotti misti?',
        answer:
          'Se una cartella contiene sia scatti DSLR da 4000 px sia badge da 400 px, forzare un piccolo badge fino a 1200 px stira i pixel e introduce sfocatura. Lasciando spuntato Non ingrandire, le foto grandi si riducono in modo pulito mentre i file più piccoli restano alle loro dimensioni originali nitide.',
      },
      {
        question: 'Cosa impostano i quattro pulsanti rapidi di pixel?',
        answer:
          'Toccando Full HD 1920px si impostano 1920×1080, Blog 1200px imposta 1200×1200, E-commerce 1000×1000 imposta 1000×1000 e Miniatura 600px imposta 600×600. Puoi comunque regolare manualmente ciascun campo di pixel fino a 12.000 px dopo.',
      },
      {
        question: 'Posso convertire un’intera cartella in WebP o JPG mentre ridimensiono in lotto?',
        answer:
          'Sì. Passa il Formato di uscita da Originale a WebP, JPG o PNG prima di cliccare Ridimensiona in lotto (N): ridimensionerai i pixel e modernizzerai i formati in un unico passaggio su canvas.',
      },
      {
        question: 'Cosa succede ai loghi PNG trasparenti se li ridimensiono con il Formato di uscita impostato su JPG?',
        answer:
          'Scegliendo JPG compare il selettore del colore Sfondo opaco (bianco #ffffff per impostazione predefinita). Qualsiasi sfondo trasparente o ombra morbida viene reso in modo pulito sul colore opaco scelto prima della codifica JPEG.',
      },
      {
        question: 'Mantenere il Formato di uscita su PNG preserva la trasparenza alfa durante il ridimensionamento in lotto?',
        answer:
          'Sì, esportare come PNG mantiene intatti gli sfondi trasparenti e i bordi alfa morbidi su ogni elemento ridimensionato. Anche mantenere il Formato di uscita su Originale preserva la trasparenza per i caricamenti PNG e WebP.',
      },
      {
        question: 'Come posso verificare che le foto ridimensionate restino nitide prima di scaricare lo ZIP?',
        answer:
          'Clicca su una scheda in miniatura o sul pulsante Confronta di un elemento completato per aprire il visualizzatore interattivo prima/dopo. Puoi trascinare il divisore affiancato per verificare i bordi nitidi prima di esportare il lotto.',
      },
      {
        question: 'Qual è la dimensione massima del file e il limite di pixel per immagine nel Ridimensiona immagini in lotto?',
        answer:
          'Ogni immagine caricata può essere fino a 25 MB e gli input in pixel vanno da 1 px fino a 12.000 px per lato. Ricorda che esportare canvas enormi da oltre 10.000 px su decine di immagini dipende dalla RAM disponibile del tuo browser.',
      },
      {
        question: 'Le foto HEIC di iPhone e i file SVG vettoriali sono supportati nella stessa coda di ridimensionamento?',
        answer:
          'Sì. Le foto HEIC/HEIF vengono decodificate in locale tramite WebAssembly lato client e la grafica SVG viene rasterizzata senza problemi su Canvas HTML5 prima di scalare insieme ai caricamenti standard JPG, PNG, WebP, GIF e BMP.',
      },
      {
        question: 'Posso modificare le impostazioni e ridimensionare di nuovo l’intero lotto senza ricaricare i file?',
        answer:
          'Sì. Regola strategia, limiti in pixel, formato o cursore di qualità dal 10% al 100% in qualsiasi momento e clicca Ridimensiona in lotto (N) per rielaborare subito tutte le immagini in coda nella memoria del browser.',
      },
      {
        question: 'Il contatore live di avanzamento mostra a che punto sono le cartelle grandi?',
        answer:
          'Sì. Mentre l’elaborazione è in corso, il pulsante di azione mostra Ridimensionamento (X/Y)... con le miniature che girano, così conosci sempre l’avanzamento esatto del lotto.',
      },
      {
        question: 'I cataloghi riservati dei clienti o gli album di famiglia vengono inviati a server cloud per il ridimensionamento?',
        answer:
          'Mai. Ogni calcolo di ridimensionamento, passaggio di disegno su Canvas e pacchetto ZIP viene eseguito in locale sul tuo dispositivo, mantenendo fotografie private e merce non ancora pubblicata al 100% sul dispositivo.',
      },
      {
        question: 'Il Ridimensiona immagini in lotto rimuove i dettagli EXIF della fotocamera e le coordinate GPS?',
        answer:
          'Sì. Poiché Canvas HTML5 ridisegna i dati dei pixel alle dimensioni desiderate senza copiare le intestazioni EXIF grezze, i tag di posizione e i numeri di serie della fotocamera vengono rimossi automaticamente.',
      },
      {
        question: 'Come si chiama l’archivio ZIP scaricato?',
        answer:
          'Cliccando Scarica tutto (ZIP) viene generato bulk_resized_compressmypic.zip in locale nel tuo browser. Raccoglie in un unico archivio ogni file ridimensionato con successo della tua coda, con nomi puliti.',
      },
      {
        question: 'Posso rimuovere un file sbagliato da un lotto di 20 immagini prima di esportare lo ZIP?',
        answer:
          'Sì. Clicca l’icona del cestino su qualsiasi scheda per eliminare solo quell’immagine, senza interrompere le altre 19 immagini ridimensionate.',
      },
      {
        question: 'In cosa differisce il Ridimensiona immagini in lotto dal Comprimi immagini in lotto?',
        answer:
          'Il Comprimi immagini in lotto mantiene intatte larghezza e altezza originali in pixel riducendo la dimensione del file tramite compressione con perdita. Questo ridimensionatore in lotto, invece, cambia attivamente le dimensioni in pixel e i riquadri in lotto, oltre a impostazioni opzionali di formato e qualità.',
      },
      {
        question: 'Posso aggiungere altre foto a un lotto di ridimensionamento già completato?',
        answer:
          'Sì. Trascina altri file sulla zona di caricamento in qualsiasi momento: vengono elaborati automaticamente con la tua strategia di ridimensionamento attiva e si uniscono al riepilogo finale di Scarica tutto (ZIP).',
      },
    ],
    relatedSlugs: [
      '/image-resizer',
      '/bulk-image-compressor',
      '/bulk-image-converter',
      '/web-image-optimizer',
    ],
  },
  {
    slug: '/bulk-image-converter',
    name: 'Converti immagini in lotto',
    shortDescription: 'Converti più file JPG, PNG, HEIC, SVG e BMP in una volta + ZIP.',
    category: 'convert',
    seoTitle: 'Converti immagini in lotto gratis online – ZIP',
    seoDescription:
      'Converti cartelle miste con il nostro convertitore in lotto gratis nel browser. Trasforma lotti HEIC, PNG, SVG, AVIF e BMP in WebP, JPG o PNG con ZIP.',
    h1: 'Converti immagini in lotto gratis',
    subtitle:
      'Unifica in un unico passaggio cartelle miste di scatti HEIC Apple, download AVIF, icone SVG, PNG trasparenti e bitmap BMP legacy con il nostro convertitore di immagini in lotto gratuito. Pensato per sviluppatori, content manager e utenti comuni che standardizzano intere librerie di asset, converte lotti fino a 25 MB per file in WebP, JPG o PNG in locale, con suffissi di nome file opzionali e download in un unico ZIP.',
    howToSteps: [
      {
        title: 'Trascina un lotto di immagini in formati misti',
        description:
          'Carica qualsiasi combinazione di file JPG, PNG, WebP, HEIC, SVG, BMP, GIF o AVIF fino a 25 MB ciascuno nella zona di caricamento.',
      },
      {
        title: 'Scegli il formato di destinazione: WebP, JPG o PNG',
        description:
          'Scegli WebP (il più leggero per il web) per la velocità del sito, JPG (universale) per la condivisione ampia o PNG (senza perdita e con trasparenza) per la grafica nitida.',
      },
      {
        title: 'Suffisso di nome file opzionale e Riempimento trasparente',
        description:
          'Inserisci un suffisso di nome file opzionale come _web (oppure lascialo vuoto) e seleziona un colore opaco per il Riempimento trasparente se converti immagini con trasparenza in JPG.',
      },
      {
        title: 'Imposta la percentuale di qualità di uscita',
        description:
          'Regola il cursore di qualità dal 10% al 100% per le esportazioni WebP o JPG (disattivato automaticamente quando è attivo il PNG senza perdita).',
      },
      {
        title: 'Controlla i totali del lotto e i confronti visivi',
        description:
          'Ispeziona le variazioni in byte per file e il banner Riepilogo della conversione in lotto, e apri Confronta sugli elementi di esempio per verificare la nitidezza.',
      },
      {
        title: 'Salva i singoli file o Scarica tutto (ZIP)',
        description:
          'Clicca Scarica sulle singole schede oppure Scarica tutto (ZIP) per esportare bulk_converted_webp.zip, bulk_converted_jpg.zip o bulk_converted_png.zip.',
      },
    ],
    features: [
      {
        title: 'Pipeline in lotto con input misti',
        description: 'Trascina insieme HEIC, PNG, SVG e JPEG in un unico lotto e unificali in un solo formato.',
      },
      {
        title: 'Opzioni di sfondo opaco e suffisso',
        description: 'Personalizza sfondi opachi JPG bianchi o colorati e aggiungi suffissi di nome file opzionali in modo pulito.',
      },
      {
        title: 'Riepilogo delle dimensioni del lotto',
        description: 'Vedi la dimensione originale complessiva rispetto a quella convertita su tutto il lotto.',
      },
      {
        title: 'WebAssembly e Canvas 100% in locale',
        description: 'Nessun file viene mai caricato — nemmeno la conversione HEIC di iPhone avviene sul tuo dispositivo.',
      },
    ],
    faqs: [
      {
        question: 'Posso mescolare tipi di file diversi nella stessa coda del Converti immagini in lotto?',
        answer:
          'Sì. Puoi trascinare file HEIC Apple, AVIF moderni, PNG trasparenti, SVG vettoriali, BMP legacy, GIF, WebP e JPG nello stesso passaggio di caricamento ed esportare l’intera collezione in un unico formato uniforme.',
      },
      {
        question: 'Perché il Suffisso di nome file opzionale aiuta quando converto lotti?',
        answer:
          'Digitare un’etichetta come _web o _v2 aggiunge quel suffisso subito prima della nuova estensione, producendo nomi puliti come hero_web.webp. Questo evita che gli asset appena convertiti entrino in conflitto con file sorgente dal nome simile in cartelle di progetto condivise.',
      },
      {
        question: 'Come calcola il Riepilogo della conversione in lotto l’impatto totale del lotto?',
        answer:
          'Una volta che i file finiscono l’elaborazione, il banner scuro di riepilogo somma i byte originali di ogni file convertito e mostra accanto il totale dei byte convertiti. Così controlli subito la variazione di spazio o banda su un’intera cartella.',
      },
      {
        question: 'Cosa succede se unifico PNG trasparenti e SVG in formato JPG?',
        answer:
          'Selezionando JPG (universale) compare il selettore del colore Riempimento trasparente (bianco #ffffff per impostazione predefinita). Qualsiasi area con trasparenza alfa nei tuoi PNG o SVG si fonde dolcemente sulla tonalità di sfondo scelta invece di diventare nera piena.',
      },
      {
        question: 'Perché il cursore Qualità è disattivato quando è selezionato PNG (senza perdita e con trasparenza)?',
        answer:
          'Il PNG usa la codifica senza perdita DEFLATE, che preserva ogni pixel decodificato in modo identico senza livelli di qualità con perdita. Quando scegli WebP o JPG, il cursore di qualità dal 10% al 100% si sblocca subito.',
      },
      {
        question: 'Posso convertire una cartella di foto miste due volte — una in WebP e una in JPG — senza ricaricarla?',
        answer:
          'Sì. Passa Converti lotto nel formato da WebP a JPG in qualsiasi momento, aggiorna se vuoi il Suffisso di nome file e clicca Converti tutto (N) per rielaborare i file in cache in memoria e prendere un secondo ZIP.',
      },
      {
        question: 'Come fa il nome dello ZIP a identificare il formato di destinazione che ho esportato?',
        answer:
          'Cliccando Scarica tutto (ZIP) vengono creati bulk_converted_webp.zip, bulk_converted_jpg.zip o bulk_converted_png.zip direttamente nel tuo browser. Avere il formato nel nome del file rende facile distinguere più esportazioni in formati diversi nella cartella Download.',
      },
      {
        question: 'Unificare tutto in WebP mantiene la trasparenza alfa sui loghi PNG e sulle icone SVG?',
        answer:
          'Sì. Sia WebP (il più leggero per il web) sia PNG (senza perdita e con trasparenza) conservano la trasparenza completa a 8 bit da PNG trasparenti, WebP e file SVG autonomi in modo pulito.',
      },
      {
        question: 'Cosa succede se un browser vecchio non riesce a decodificare un file AVIF misto dentro il mio lotto?',
        answer:
          'Se un file usa un codec che il tuo browser non supporta, come AVIF su un browser datato, solo quella scheda mostra un avviso di errore esplicito. Tutti gli altri elementi JPG, PNG o HEIC dello stesso lotto finiscono normalmente.',
      },
      {
        question: 'I lotti HEIC di iPhone vengono convertiti su un server cloud remoto?',
        answer:
          'No. Anche la decodifica HEIC e HEIF di Apple avviene in locale dentro la scheda del tuo browser tramite WebAssembly lato client, prima che Canvas HTML5 codifichi il formato di uscita scelto.',
      },
      {
        question: 'Quanto possono essere grandi i singoli file dentro il Converti immagini in lotto?',
        answer:
          'Ogni singola immagine nella coda del lotto può essere fino a 25 MB. Questo margine copre agevolmente scatti di fotocamera ad alta risoluzione, esportazioni PNG a livelli e archivi BMP non compressi.',
      },
      {
        question: 'Cosa succede quando le GIF animate sono incluse in una cartella di conversione in lotto?',
        answer:
          'Canvas HTML5 rasterizza il fotogramma iniziale di qualsiasi .gif caricato in un file WebP, JPG o PNG statico e nitido, mantenendo larghezza e altezza piene. Usa il nostro Compressore GIF se vuoi mantenere intatta l’animazione in loop con più fotogrammi.',
      },
      {
        question: 'La conversione in lotto del formato cambia la larghezza e l’altezza originali delle immagini?',
        answer:
          'No, ogni uscita mantiene il 100% della larghezza e dell’altezza originali in pixel intatte. Usa invece il Ridimensiona immagini in lotto quando devi ridimensionare o limitare le dimensioni delle immagini nello stesso momento.',
      },
      {
        question: 'Perché convertire JPEG compressi in PNG può far sembrare più grande il totale del riepilogo del lotto?',
        answer:
          'Il PNG senza perdita memorizza molti più dati per pixel fotografico rispetto al JPEG con perdita. A meno che un flusso di lavoro non richieda strettamente il .png, convertire lotti web misti in WebP all’85% di solito fa risparmiare molto spazio mantenendo una qualità nitida.',
      },
      {
        question: 'I tag EXIF incorporati della fotocamera vengono conservati dopo aver convertito una cartella mista?',
        answer:
          'No. Il passaggio delle immagini attraverso Canvas HTML5 rimuove i blocchi di metadati EXIF, i numeri di serie della fotocamera e i tag GPS su ogni file convertito, in modo pulito.',
      },
      {
        question: 'Posso confrontare pixel originali e convertiti sulle singole schede prima di esportare lo ZIP?',
        answer:
          'Sì. Clicca Confronta su qualsiasi scheda di file completata per ispezionare bordi fini e colori affiancati nel visualizzatore di confronto diviso.',
      },
      {
        question: 'Cosa succede se aggiungo altri file dopo aver convertito il mio primo lotto?',
        answer:
          'I file appena trascinati vengono convertiti automaticamente con il formato di destinazione, la qualità, il suffisso e il riempimento opaco attualmente selezionati. Poi si uniscono in modo pulito alla coda attiva e al riepilogo ZIP condiviso.',
      },
      {
        question: 'I font web esterni o le immagini remote collegate dentro i file SVG sono inclusi durante la conversione in lotto?',
        answer:
          'Per la sicurezza del browser, Canvas HTML5 isola gli SVG autonomi e blocca il recupero di URL remoti o font web esterni. Gli SVG autonomi con tracciati, gradienti e CSS in linea vengono convertiti in modo pulito.',
      },
      {
        question: 'Posso rimuovere una singola immagine fallita o indesiderata dall’elenco convertito?',
        answer:
          'Sì. Clicca il pulsante del cestino su qualsiasi scheda per escluderla dall’elenco e ricostruire il riepilogo e il download ZIP dai file rimanenti.',
      },
      {
        question: 'Quando dovrei scegliere questo convertitore in lotto rispetto ai convertitori a coppia singola come HEIC in JPG?',
        answer:
          'Gli strumenti a coppia singola preconfigurano filtri di file rigidi e impostazioni predefinite per un percorso di migrazione specifico. Apri questo convertitore di immagini in lotto quando una cartella contiene diverse estensioni che devono diventare tutte WebP, JPG o PNG in una volta sola.',
      },
    ],
    relatedSlugs: [
      '/image-converter',
      '/bulk-image-compressor',
      '/bulk-image-resizer',
      '/web-image-optimizer',
    ],
  },
  {
    slug: '/web-image-optimizer',
    name: 'Ottimizza immagini per il web',
    shortDescription: 'Ottimizza immagini hero, prodotto e schede per la velocità dei Core Web Vitals.',
    category: 'compress',
    seoTitle: 'Ottimizza immagini per il web gratis online',
    seoDescription:
      'Alleggerisci gli asset pesanti delle pagine con il nostro ottimizzatore per il web gratis nel browser. Scegli preset WebP, rimuovi i tag EXIF e copia i tag img.',
    h1: 'Ottimizza immagini per il web (pronto per i Core Web Vitals)',
    subtitle:
      'Prepara grafica per siti web a caricamento rapido, progettata per i Core Web Vitals (LCP e CLS), con il nostro ottimizzatore gratuito per immagini web direttamente nel browser. Pensato per sviluppatori front-end, commercianti Shopify e SEO tecnici, abbina preset WebP e JPG collaudati per slot fino a 25 MB per file alla rimozione automatica dei metadati EXIF, ai tag HTML <img> copiabili e ai download in un unico ZIP.',
    howToSteps: [
      {
        title: 'Seleziona uno dei 5 preset di prestazioni web',
        description:
          'Scegli Hero / Banner (1600px WebP 80%), Prodotto e-commerce (1200px WebP 82%), Scheda / Miniatura (640px WebP 75%), Social OG / Email (1200px JPG 82%) o Grafica Retina 2× (1920px WebP 88%).',
      },
      {
        title: 'Personalizza formato web, dimensione massima o qualità',
        description:
          'Passa tra WebP, JPG o PNG, regola la Dimensione massima (lato lungo) da 640 px a 1920 px (oppure Mantieni dimensioni originali) e calibra la Qualità dal 20% al 95%.',
      },
      {
        title: 'Trascina gli asset grezzi del sito nella zona di caricamento',
        description:
          'Carica immagini JPG, PNG, WebP, HEIC, SVG, BMP, GIF o AVIF fino a 25 MB ciascuna con Riduci solo le immagini più grandi spuntato, per non gonfiare le piccole icone.',
      },
      {
        title: 'Controlla il risparmio di peso della pagina e confronta la qualità',
        description:
          'Controlla il Riepilogo delle prestazioni web per il peso totale risparmiato della pagina, verifica i badge Pronto per il web per scheda e ispeziona i bordi affiancati con Confronta.',
      },
      {
        title: 'Copia gli snippet HTML <img> responsive',
        description:
          'Clicca Copia <img> su qualsiasi scheda completata per ottenere il markup pronto da incollare con larghezza, altezza, loading="lazy" e decoding="async".',
      },
      {
        title: 'Scarica singoli asset -web o il pacchetto ZIP',
        description:
          'Salva singoli file <nome>-web oppure clicca Scarica tutto (ZIP) per scaricare web_optimized_compressmypic.zip in modo pulito.',
      },
    ],
    features: [
      {
        title: 'Preset pronti per il web',
        description:
          'Limiti di dimensione e punti ideali di qualità WebP/JPG preconfigurati, pensati per LCP e PageSpeed Insights.',
      },
      {
        title: 'Snippet HTML <img> copiabile',
        description:
          'Genera gli attributi responsive `larghezza`, `altezza`, `loading="lazy"` e `decoding="async"` per prevenire lo spostamento del layout (CLS).',
      },
      {
        title: 'Rimozione automatica EXIF e protezione anti-ingrandimento',
        description: 'Rimuove i metadati ingombranti della fotocamera ed evita di ingrandire inutilmente le icone più piccole.',
      },
      {
        title: 'Ispettore interattivo prima/dopo',
        description: 'Verifica la chiarezza visiva affiancata prima di pubblicare gli asset in produzione.',
      },
    ],
    faqs: [
      {
        question: 'Come si collegano i cinque preset di prestazioni web agli slot reali del sito?',
        answer:
          'Hero / Banner limita a 1600 px WebP (80%), Prodotto e-commerce limita a 1200 px WebP (82%), Scheda / Miniatura limita a 640 px WebP (75%), Social OG / Email produce 1200 px JPG (82%) per la compatibilità con gli scraper e Grafica Retina 2× conserva fino a 1920 px WebP (88%). Cliccare un preset riottimizza automaticamente anche i file già caricati.',
      },
      {
        question: 'Come aiuta il pulsante Copia <img> a migliorare i punteggi dei Core Web Vitals?',
        answer:
          'Cliccando Copia <img> copi un tag HTML semantico con gli attributi esatti di larghezza e altezza di uscita più loading="lazy" e decoding="async". Le dimensioni esplicite permettono ai browser di riservare lo spazio esatto durante il layout della pagina, eliminando lo spostamento cumulativo del layout (CLS).',
      },
      {
        question: 'Dovrei mantenere loading="lazy" sull’immagine Hero above-the-fold dopo aver copiato il tag HTML?',
        answer:
          'Per le schede e le immagini below-the-fold, loading="lazy" è ideale. Per la singola immagine Hero / Banner LCP subito visibile al caricamento, rimuovi loading="lazy" (oppure imposta fetchpriority="high") nel tuo codice, così il browser la scarica subito.',
      },
      {
        question: 'Perché Social OG / Email passa il formato web da WebP a JPG?',
        answer:
          'Alcuni scraper di link social, versioni vecchie di Slack/Outlook e piattaforme di newsletter rifiutano ancora o non riescono a mostrare in modo affidabile le anteprime OpenGraph in WebP. Scegliere JPG a 1200 px all’82% offre caricamento rapido e anteprime solide ovunque.',
      },
      {
        question: 'Perché Riduci solo le immagini più grandi protegge le icone dell’interfaccia e le piccole miniature?',
        answer:
          'Con quella casella attiva, caricare un avatar autore da 400×400 px mentre è selezionato Prodotto e-commerce (max 1200px) lascia l’avatar a 400×400 px invece di sfocarlo verso l’alto a 1200 px. Deselezionandola, gli asset più piccoli vengono scalati fino al lato lungo scelto se strettamente necessario.',
      },
      {
        question: 'Come fa la rimozione dei metadati EXIF e GPS a ridurre il peso extra della pagina web?',
        answer:
          'Le esportazioni delle fotocamere incorporano spesso da 30 KB a 150 KB di anteprime in miniatura, cronologie di modifiche di Lightroom e coordinate GPS dentro i blocchi EXIF. La ricodifica su Canvas HTML5 rimuove tutto il peso non legato ai pixel in modo pulito prima della pubblicazione.',
      },
      {
        question: 'Perché i file scaricati finiscono automaticamente con -web nel nome?',
        answer:
          'Ogni uscita aggiunge -web prima dell’estensione, producendo nomi puliti come sneaker-web.webp. Questo permette agli sviluppatori di inserire gli asset di produzione nelle cartelle pubbliche senza sovrascrivere i master grezzi ad alta risoluzione.',
      },
      {
        question: 'Come viene generato l’attributo alt dentro Copia <img>?',
        answer:
          'Lo snippet rimuove automaticamente l’estensione del file e converte trattini e trattini bassi del nome originale in spazi leggibili dentro alt="...". Assicurati di rifinirlo in una frase umana descrittiva quando lo incolli nell’HTML di produzione.',
      },
      {
        question: 'Perché l’Ottimizza immagini per il web usa come predefinito Prodotto e-commerce (max 1200px · WebP 82%)?',
        answer:
          '1200 px di larghezza all’82% WebP offre una qualità di zoom nitida dei prodotti sia sui telefoni Retina sia sui laptop standard, riducendo file DSLR di più megabyte dell’80%–95%. Evita sia ritagli troppo morbidi da 640 px sia originali gonfi da 4000 px.',
      },
      {
        question: 'Perché un piccolo PNG già compresso può diventare rosso con un avviso di crescita quando il formato web è PNG?',
        answer:
          'Ricodificare un piccolo PNG a tavolozza indicizzata attraverso Canvas HTML5 a colori pieni senza cambiare le dimensioni può produrre un PNG senza perdita leggermente più pesante. Passa il Formato web a WebP per mantenere la trasparenza a una frazione del peso in byte.',
      },
      {
        question: 'Posso ottimizzare in lotto 30 immagini grezze di un blog per la velocità di Lighthouse in un clic?',
        answer:
          'Sì. Trascina fino a 25 MB per file su tutto il set multimediale del blog, controlla il Riepilogo delle prestazioni web che mostra il peso totale risparmiato della pagina e prendi web_optimized_compressmypic.zip quando 2 o più file finiscono.',
      },
      {
        question: 'Perché il cursore Qualità è limitato dal 20% al 95% invece che al 100% qui?',
        answer:
          'Salvare WebP o JPG al 100% di qualità fa esplodere il peso in byte in modo esponenziale con quasi zero differenza visibile sugli schermi web, danneggiando il Largest Contentful Paint (LCP). Il limite al 95% mantiene la grafica Retina 2× nitidissima senza carichi accidentali da 10 MB.',
      },
      {
        question: 'L’uscita WebP mantiene gli sfondi trasparenti dei PNG e degli SVG caricati?',
        answer:
          'Sì. Quando il Formato web è impostato su WEBP o PNG, la trasparenza alfa completa resta del tutto intatta, mentre selezionando JPG le aree trasparenti vengono unite su bianco pulito (#ffffff).',
      },
      {
        question: 'Gli screenshot del sito di staging o i lanci di prodotto non ancora pubblicati vengono caricati su server esterni?',
        answer:
          'No. Ridimensionamento con preset, codifica WebP, rimozione EXIF e generazione dei tag HTML avvengono rigorosamente dentro la scheda del tuo browser, mantenendo privata la grafica di marketing riservata.',
      },
      {
        question: 'Posso personalizzare un mix di impostazioni dopo aver cliccato un preset di prestazioni web?',
        answer:
          'Sì. Cambiare manualmente Formato web, Dimensione massima o Qualità fa passare l’indicatore del preset attivo in modo pulito a personalizzato, così puoi cliccare Ottimizza per il web (N) con la tua ricetta esatta su misura.',
      },
      {
        question: 'Cosa succede se carico direttamente per il mio blog uno scatto HEIC di iPhone Apple?',
        answer:
          'WebAssembly lato client decodifica foto HEIC e HEIF fino a 25 MB in modo nativo dentro la scheda del tuo browser. Il browser poi le ridimensiona alla Dimensione massima scelta e codifica asset WebP o JPG leggeri pronti da pubblicare.',
      },
      {
        question: 'Come si confronta il preset Scheda / Miniatura con Grafica Retina 2×?',
        answer:
          'Scheda / Miniatura limita i lati lunghi a 640 px con WebP al 75% per mantenere ultra-leggere le griglie di archivio con molte schede. Grafica Retina 2×, invece, consente fino a 1920 px all’88% WebP, così gli screenshot in vetrina ad alta densità di pixel restano nitidissimi.',
      },
      {
        question: 'Mantieni dimensioni originali comprime comunque e rimuove i metadati EXIF?',
        answer:
          'Sì. Selezionare Mantieni dimensioni originali lascia intatte larghezza e altezza in pixel, convertendo comunque al Formato web scelto, applicando il cursore di qualità e rimuovendo i tag EXIF nascosti.',
      },
      {
        question: 'Posso verificare visivamente il testo nitido dell’interfaccia negli screenshot prima di pubblicarli nella mia documentazione?',
        answer:
          'Sì. Cliccando Confronta su qualsiasi scheda apri il visualizzatore di confronto affiancato per ispezionare la chiarezza del testo prima della pubblicazione.',
      },
      {
        question: 'Quando dovrei usare questo ottimizzatore per immagini web invece del Comprimi immagini in lotto?',
        answer:
          'Usa il Comprimi immagini in lotto quando vuoi mantenere le dimensioni originali su archivi misti. Scegli questo ottimizzatore per immagini web quando costruisci pagine web di produzione che beneficiano di limiti di dimensione responsive, preset WebP, rimozione EXIF e tag HTML <img> copiabili.',
      },
    ],
    relatedSlugs: [
      '/bulk-image-compressor',
      '/compress-image-to-100kb',
      '/image-resizer',
      '/image-converter',
    ],
  },
  {
    slug: '/gif-compressor',
    name: 'Comprimi GIF',
    shortDescription: 'Comprimi GIF animate riducendo i colori della tavolozza, la scala e i fotogrammi.',
    category: 'compress',
    seoTitle: 'Comprimi GIF animate gratis online – Riduci peso',
    seoDescription:
      'Riduci le animazioni in loop con il nostro compressore GIF gratis nel browser. Abbassa i colori della tavolozza, scala le dimensioni o salta fotogrammi.',
    h1: 'Comprimi GIF animate gratis online',
    subtitle:
      'Riduci le animazioni pesanti in loop GIF87a e GIF89a in modo pulito direttamente nel browser con il nostro compressore gratuito di GIF animate, senza trasformarle in immagini fisse. Pensato per Slack, Discord, email marketer e autori di documentazione che gestiscono file fino a 30 MB, abbina tre leve reali di compressione — Limite dei colori della tavolozza, Scala di uscita e Ottimizzazione della frequenza dei fotogrammi — alla riproduzione animata live affiancata.',
    howToSteps: [
      {
        title: 'Trascina una GIF animata o statica fino a 30 MB',
        description:
          'Carica qualsiasi file .gif (fino a 30 MB) nella zona di caricamento per decodificare fotogrammi, dimensioni, metodi di smaltimento e ritardi temporali in locale.',
      },
      {
        title: 'Scegli un preset rapido o regola le impostazioni personalizzate',
        description:
          'Clicca Leggero (192 colori, 100%), Bilanciato (96 colori, 85%) o Riduzione massima (64 colori, 75%, salta ogni 2° fotogramma), oppure regola ogni leva manualmente.',
      },
      {
        title: 'Abbassa il Limite dei colori della tavolozza (16–256 colori)',
        description:
          'Trascina il cursore del Limite dei colori della tavolozza da 256 verso 32 o 16 colori (oppure clicca i pulsanti rapidi 256, 128, 64, 32) per ridurre le tabelle dei colori LZW.',
      },
      {
        title: 'Regola la Scala di uscita e l’Ottimizzazione della frequenza dei fotogrammi',
        description:
          'Scegli un preset di Scala di uscita (100%, 85%, 75%, 50% o 25%) e, se vuoi, salta ogni 2° fotogramma o 2 fotogrammi su 3, preservando automaticamente la velocità reale di riproduzione.',
      },
      {
        title: 'Esegui Comprimi GIF e confronta le animazioni live',
        description:
          'Guarda le anteprime animate live Originale e Compressa affiancate e controlla byte esatti, numero di fotogrammi e percentuale di risparmio.',
      },
      {
        title: 'Scarica la GIF compressa',
        description:
          'Clicca Scarica GIF compressa per salvare <nomefile>_compressed.gif in locale, senza passaggi su server né filigrane.',
      },
    ],
    features: [
      {
        title: 'Ricodifica GIF vera lato client',
        description:
          'Decodifica fotogrammi GIF, metodi di smaltimento e conteggi di loop in locale, poi ricodifica con quantizzazione dei colori caricata alla bisogna — zero caricamenti su server.',
      },
      {
        title: '3 leve di compressione',
        description:
          'Riduci la dimensione con la riduzione dei colori della tavolozza (da 256 a 32 colori), il ridimensionamento (dal 100% al 25%) e il salto intelligente dei fotogrammi.',
      },
      {
        title: 'Salto dei fotogrammi che preserva la temporizzazione',
        description:
          'Quando salti ogni 2° o 3° fotogramma, i ritardi dei fotogrammi mantenuti si combinano automaticamente, così la velocità di riproduzione resta naturale.',
      },
      {
        title: 'Confronto onesto in byte',
        description:
          'Mostra la dimensione esatta del file prima/dopo e il numero di fotogrammi — e ti dice chiaramente quando serve una riduzione più forte di tavolozza o scala.',
      },
    ],
    faqs: [
      {
        question: 'Questo compressore GIF preserva la temporizzazione completa dell’animazione, i conteggi di loop e il movimento?',
        answer:
          'Sì. Decodifica ogni singolo fotogramma GIF, il ritardo in millisecondi per fotogramma, il metodo di smaltimento e i metadati di loop in locale, poi ricodifica un vero file GIF89a animato invece di appiattirlo in un’immagine fissa.',
      },
      {
        question: 'Come fa il salto dei fotogrammi a mantenere naturale la velocità dell’animazione invece di farla andare in avanti veloce?',
        answer:
          'Quando scegli Salta ogni 2° fotogramma o Mantieni 1 fotogramma ogni 3, il compressore somma le durate in millisecondi dei fotogrammi saltati in quelli mantenuti. La durata totale del loop resta precisa mentre i dati totali dei fotogrammi si riducono da metà a due terzi.',
      },
      {
        question: 'Quali impostazioni esatte applicano Leggero, Bilanciato e Riduzione massima?',
        answer:
          'Leggero imposta 192 colori di tavolozza al 100% di scala mantenendo tutti i fotogrammi, mentre Bilanciato scende a 96 colori e scala all’85% mantenendo tutti i fotogrammi. Riduzione massima combina 64 colori, scala al 75% e Salta ogni 2° fotogramma per i limiti di file aggressivi di Discord o Slack.',
      },
      {
        question: 'Perché la mia prima compressione Bilanciata o a 128 colori è risultata leggermente più grande di una piccola GIF esistente?',
        answer:
          'Le GIF ben ottimizzate create da strumenti desktop spesso si basano su minuscole patch rettangolari «sporche» tra fotogrammi, mentre la ricodifica su Canvas costruisce fotogrammi interi quantizzati e puliti. Se compare l’avviso ambra, abbassa il Limite dei colori della tavolozza a 64 o 32 colori, riduci la Scala di uscita al 75% o al 50%, oppure salta ogni 2° fotogramma.',
      },
      {
        question: 'Quale leva riduce più velocemente la dimensione di una GIF animata senza rovinare le registrazioni dello schermo?',
        answer:
          'Abbassare la Scala di uscita dal 100% al 75% o al 50% riduce l’area in pixel dal 44% al 75% subito, mantenendo leggibile il testo dell’interfaccia. Abbinare la scala al 75% con 64–96 colori di tavolozza funziona particolarmente bene per gli screencast di documentazione.',
      },
      {
        question: 'Perché i pulsanti di Ottimizzazione della frequenza dei fotogrammi sono disattivati su una GIF da 1 o 2 fotogrammi?',
        answer:
          'Saltare ogni secondo o terzo fotogramma su un file da 1 o 2 fotogrammi non lascerebbe alcun movimento. Quei pulsanti di salto dei fotogrammi si bloccano automaticamente quando una GIF decodificata ha 2 o meno fotogrammi.',
      },
      {
        question: 'Qual è la dimensione massima di file GIF animato supportata dal Compressore GIF?',
        answer:
          'Puoi caricare animazioni GIF87a o GIF89a fino a 30 MB per file. L’avanzamento viene mostrato in modo pulito come Compressione GIF (X%)... mentre il tuo browser quantizza e ricodifica ogni fotogramma mantenuto.',
      },
      {
        question: 'Ridurre il Limite dei colori della tavolozza sotto i 64 colori influisce diversamente sulle GIF di reazione fotografiche rispetto agli screencast dell’interfaccia?',
        answer:
          'Sì. Le animazioni piatte dell’interfaccia software con pochi colori di marca restano nitide anche a 32 o 64 colori, mentre i video live-action con gradienti di pelle mostrano posterizzazione con tavolozze molto basse — quindi abbassare leggermente la scala o la frequenza dei fotogrammi è spesso più pulito per i clip di film.',
      },
      {
        question: 'Posso vedere in anteprima le animazioni originale e compressa affiancate prima di scaricare?',
        answer:
          'Sì. Subito sotto la barra scura di riepilogo in byte, due lettori animati live mostrano contemporaneamente le GIF Originale e Compressa con dimensioni esatte in pixel e dimensioni dei file, così puoi notare subito scatti o banding.',
      },
      {
        question: 'Qual è la risoluzione minima di uscita scegliendo Scala di uscita al 25% su piccole GIF adesive?',
        answer:
          'Le dimensioni di uscita sono limitate in sicurezza a un minimo di 16×16 pixel per lato. Questo impedisce alle piccole GIF di reazione di collassare in file invalidi da zero pixel anche con l’opzione di scala al 25%.',
      },
      {
        question: 'Posso eseguire più test di compressione sulla stessa GIF caricata senza aggiornare la pagina?',
        answer:
          'Sì. Il buffer dei fotogrammi decodificati resta in cache in memoria, così puoi regolare liberamente il Limite dei colori della tavolozza (16–256), la Scala di uscita o l’Ottimizzazione della frequenza dei fotogrammi e cliccare di nuovo Comprimi GIF in pochi secondi.',
      },
      {
        question: 'Come funziona il compressore GIF nel mio browser senza caricare grandi animazioni su un server?',
        answer:
          'Decodifica i fotogrammi direttamente dall’ArrayBuffer caricato in JavaScript e carica alla bisogna un leggero codificatore GIF LZW e un quantizzatore di colori. Screencast privati di Slack, segnalazioni di bug e demo di prodotto non lasciano mai il tuo dispositivo.',
      },
      {
        question: 'Perché le GIF si comprimono molto meno dei video MP4 dello stesso clip?',
        answer:
          'La GIF è un formato a fotogrammi con compressione LZW senza perdita a 256 colori del 1989, senza la moderna compensazione del movimento temporale tra fotogrammi. Combinare un ridimensionamento moderato (75%–50%), tavolozze più basse (64–96 colori) e il salto dei fotogrammi 2× offre il miglior risparmio possibile in byte dentro la specifica standard .gif.',
      },
      {
        question: 'Comprimere una GIF animata con pixel trasparenti preserva la trasparenza dello sfondo?',
        answer:
          'Sì. Gli indici di trasparenza e i metodi di smaltimento dei fotogrammi decodificati dalla GIF sorgente vengono tenuti traccia tra i fotogrammi durante la ricodifica nel browser.',
      },
      {
        question: 'Quale nome di file viene usato per salvare l’animazione ottimizzata?',
        answer:
          'Cliccando Scarica GIF compressa viene esportato un nome di file ripulito che termina in _compressed.gif, come demo_walkthrough_compressed.gif. La tua animazione master originale resta completamente intatta sul disco.',
      },
      {
        question: 'Posso ridurre una GIF per rispettare i limiti di caricamento di Discord 8 MB/10 MB o Slack?',
        answer:
          'Sì. Trascina qualsiasi animazione fino a 30 MB, prova Bilanciato o Riduzione massima, controlla la lettura live della dimensione Compressa proprio in cima alla scheda di riepilogo e regola la Scala di uscita al 50% se ti serve un’ulteriore riduzione di peso.',
      },
      {
        question: 'Il pulsante Reimposta cancella in modo pulito tutta la memoria dei fotogrammi in cache?',
        answer:
          'Sì. Cliccando Reimposta vengono revocati gli URL blob attivi e svuotati i buffer dei fotogrammi decodificati dalla memoria del browser, così puoi caricare un’altra GIF pesante senza problemi.',
      },
      {
        question: 'In cosa differisce il Compressore GIF dal Creatore GIF?',
        answer:
          'Il Creatore GIF costruisce animazioni nuove di zecca da singole immagini fisse JPG, PNG o WebP. Questo compressore GIF, invece, prende un’animazione .gif pesante esistente e ne riduce la dimensione del file tramite tavolozza, scala e riduzione dei fotogrammi.',
      },
      {
        question: 'Posso caricare anche file .gif statici a fotogramma singolo?',
        answer:
          'Sì. Le GIF statiche a fotogramma singolo vengono caricate come file da 1 fotogramma, in cui puoi ridurre le dimensioni con la Scala di uscita e abbassare il Limite dei colori della tavolozza fino a 16 colori in modo pulito.',
      },
      {
        question: 'Alle GIF compresse vengono applicate filigrane, limiti di fotogrammi o code di server?',
        answer:
          'No. La compressione viene eseguita in locale alla piena velocità del browser, senza filigrane, senza registrazioni e con ripetizioni illimitate.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/bulk-image-compressor', '/image-resizer', '/'],
  },
  {
    slug: '/heic-to-jpg',
    name: 'HEIC in JPG',
    shortDescription: 'Converti le foto HEIC/HEIF di iPhone Apple in JPG universale nel browser.',
    category: 'convert',
    seoTitle: 'Converti HEIC in JPG gratis – Foto iPhone',
    seoDescription:
      'Trasforma le foto Apple in file universali con il nostro convertitore HEIC in JPG gratis. La decodifica WebAssembly in locale avviene in privato nel browser.',
    h1: 'Converti HEIC in JPG gratis online',
    subtitle:
      'Trasforma gli scatti HEIC o HEIF del rullino di iPhone e iPad Apple in file .jpg leggibili ovunque con il nostro convertitore gratuito HEIC in JPG, che funziona in locale nel browser. Ideale per utenti Windows, candidati e laboratori fotografici che rifiutano il formato ad alta efficienza di Apple: decodifica fino a 25 MB per file tramite WebAssembly lato client, con qualità regolabile e download in lotto in un unico ZIP.',
    howToSteps: [
      {
        title: 'Trascina foto HEIC o HEIF di Apple',
        description:
          'Seleziona o trascina una o più immagini .heic o .heif (fino a 25 MB ciascuna) direttamente dal tuo iPhone, Mac, backup cloud o cartella Windows.',
      },
      {
        title: 'Attendi brevemente la decodifica WebAssembly in locale',
        description:
          'La pagina carica WebAssembly lato client (heic2any) direttamente nella scheda del tuo browser per decodificare in privato il contenitore di immagini HEVC di Apple.',
      },
      {
        title: 'Regola la qualità di uscita JPG (20%–100%)',
        description:
          'Mantieni il 90% predefinito quasi senza perdita per ritratti di famiglia e stampe, oppure scivola verso il 75%–85% per allegati email più leggeri, poi clicca Riconverti tutto.',
      },
      {
        title: 'Controlla le dimensioni in pixel e il confronto delle dimensioni',
        description:
          'Controlla su ogni scheda il conteggio in byte HEIC originale rispetto al JPG di uscita e avvia il cursore Confronta per verificare i dettagli nitidi.',
      },
      {
        title: 'Scarica i file JPG o Scarica tutto (ZIP)',
        description:
          'Salva direttamente le singole foto .jpg oppure clicca Scarica tutto (ZIP) per scaricare compressmypic_heic_to_jpg.zip in un clic.',
      },
    ],
    features: [
      {
        title: 'Decodifica HEIC WebAssembly lato client',
        description: 'Usa heic2any dentro la scheda del tuo browser, così le foto private del rullino non vengono mai caricate su server esterni.',
      },
      {
        title: 'Conversione in lotto + esportazione ZIP',
        description: 'Converti intere cartelle di scatti HEIC di iPhone in JPG in un’unica coda e prendi tutto in un unico ZIP.',
      },
      {
        title: 'Cursore personalizzato di qualità JPG',
        description: 'Regola con precisione la compressione di uscita dal 20% al 100% a seconda che tu dia priorità ai dettagli o a file minuscoli.',
      },
      {
        title: 'Privacy EXIF rimossa da Canvas',
        description: 'La ricodifica su Canvas rimuove naturalmente le coordinate GPS nascoste e i metadati di serie della fotocamera.',
      },
    ],
    faqs: [
      {
        question: 'Perché PC Windows, software vecchi e moduli di caricamento rifiutano le foto .heic degli iPhone?',
        answer:
          'Apple ha adottato il contenitore HEIC (basato sulla compressione video HEVC) a partire da iOS 11 per risparmiare spazio su iPhone e iPad. Poiché molte installazioni Windows, portali governativi, backend CMS ed editor desktop non hanno codec HEVC con licenza, convertire HEIC in JPG standard rende le tue foto apribili ovunque all’istante.',
      },
      {
        question: 'Come decodifica questo convertitore HEIC in JPG i file Apple dentro un browser web standard?',
        answer:
          'La maggior parte dei browser non può mostrare nativamente i pixel HEIC nei tag immagine standard su Windows o Linux. Questo strumento esegue il decodificatore WebAssembly heic2any lato client direttamente nella tua scheda, così il tuo browser traduce i flussi HEIC in pixel RGB in modo pulito senza server cloud remoti.',
      },
      {
        question: 'Gli scatti personali del rullino, i selfie per documenti o le vacanze in famiglia vengono caricati da qualche parte durante la conversione?',
        answer:
          'Mai. Sia il passaggio di decodifica HEIC in WebAssembly sia il passaggio di codifica JPEG su Canvas HTML5 avvengono in locale nella memoria del tuo browser, quindi le foto personali non lasciano mai il tuo computer o telefono.',
      },
      {
        question: 'Qual è la differenza tra i file .heic e .heif qui?',
        answer:
          'HEIF è lo standard sottostante High Efficiency Image File, mentre HEIC è l’estensione di nome file di Apple per i contenitori HEIF codificati in HEVC. Entrambe le estensioni .heic e .heif (e i tipi MIME corrispondenti) sono accettate e decodificate senza problemi in .jpg.',
      },
      {
        question: 'Perché il file JPG convertito spesso risulta più grande in megabyte dell’HEIC originale?',
        answer:
          'La codifica HEVC di Apple impacchetta i dati delle immagini circa il doppio più strettamente del JPEG classico a qualità visiva simile. Espandere un HEIC da 1,8 MB in un JPG al 90% ad alto dettaglio produce comunemente un file da 2,5 MB–3,5 MB — e abbassare la qualità di uscita JPG verso l’80% aiuta a ridurre di nuovo la dimensione se serve.',
      },
      {
        question: 'Perché il 90% è impostato come qualità di uscita JPG predefinita per le foto di iPhone?',
        answer:
          'Al 90%, il JPEG standard conserva la texture fine della pelle, i dettagli dei capelli e lo sfondo sfocato della modalità ritratto senza blocchi di compressione evidenti. Puoi scorrere ovunque tra il 20% e il 100% e cliccare Riconverti tutto in qualsiasi momento.',
      },
      {
        question: 'Convertire Live Photo di iPhone (.heic) mantiene il movimento video o esporta un JPG fisso?',
        answer:
          'Quando carichi il componente fisso .heic da una Live Photo di iPhone, il decodificatore estrae quel fotogramma ad alta risoluzione e lo esporta come fotografia .jpg universale. Le tracce video di movimento dentro i clip MOV abbinati non vengono incluse nel JPEG statico.',
      },
      {
        question: 'Posso trascinare un intero album di vacanze di file HEIC e scaricare un unico ZIP?',
        answer:
          'Sì. Seleziona decine di file .heic o .heif (fino a 25 MB per file) in un unico passaggio, attendi mentre il tuo browser decodifica ogni foto in locale e clicca Scarica tutto (ZIP) per salvare compressmypic_heic_to_jpg.zip.',
      },
      {
        question: 'Le coordinate GPS e i tag di posizione di iPhone Apple vengono conservati nel JPG esportato?',
        answer:
          'No. La codifica tramite Canvas HTML5 rimuove automaticamente le posizioni GPS EXIF incorporate, i numeri di serie della fotocamera e i timestamp — dandoti più privacy prima di pubblicare online i JPG convertiti.',
      },
      {
        question: 'Perché la decodifica di una foto iPhone ProRAW/HEIC da 12 o 48 megapixel può richiedere un secondo o due per file?',
        answer:
          'La decompressione HEVC in WebAssembly richiede calcoli CPU più pesanti della decodifica JPEG standard, soprattutto sulle foto iPhone Pro da 24 MP o 48 MP. Elaborare i lotti in locale significa che la velocità di conversione dipende senza problemi dal processore del tuo dispositivo anziché dalla banda di caricamento.',
      },
      {
        question: 'Cosa succede all’orientamento verticale o orizzontale della fotocamera di iPhone durante la conversione da HEIC a JPG?',
        answer:
          'I browser moderni leggono i flag di orientamento incorporati quando decodificano l’immagine su Canvas. Questo garantisce che selfie verticali e scatti orizzontali vengano esportati dritti, senza rotazioni laterali.',
      },
      {
        question: 'Perché un file chiamato image.heic non è riuscito con un avviso di errore HEIC non valido?',
        answer:
          'A volte app di messaggistica di terze parti salvano contenitori danneggiati o file con etichette sbagliate con estensione .heic, oppure superano il limite di 25 MB. Provare una copia originale esportata tramite AirDrop, Foto di iCloud o File Apple risolve le intestazioni del contenitore danneggiate.',
      },
      {
        question: 'Qual è la dimensione massima per foto HEIC o HEIF accettata qui?',
        answer:
          'Sono supportati singoli file fino a 25 MB nella coda. Questo limite copre agevolmente gli scatti standard della fotocamera HEIC di iPhone da 12 MP, 24 MP e 48 MP.',
      },
      {
        question: 'Posso confrontare visivamente il JPG decodificato con l’anteprima HEIC originale prima di salvare?',
        answer:
          'Sì. Clicca su qualsiasi miniatura di risultato o sul pulsante Confronta per verificare la nitidezza affiancata dentro il modale di confronto interattivo.',
      },
      {
        question: 'I colori ad ampia gamma Display P3 di iPhone sembreranno accurati dopo la conversione in JPG?',
        answer:
          'Durante il rendering su Canvas nel browser, i colori ad ampia gamma vengono mappati in modo pulito nello spazio JPEG sRGB standard. Di conseguenza, i colori vengono resi in modo coerente su monitor Windows, browser web e chioschi di stampa fotografica senza sbiadimenti.',
      },
      {
        question: 'Come posso impedire che le future foto di iPhone vengano salvate come HEIC invece che JPG?',
        answer:
          'Sul tuo iPhone puoi aprire Impostazioni, andare su Fotocamera, toccare Formati e scegliere Massima compatibilità per i nuovi scatti. Tuttavia, mantenere Alta efficienza fa risparmiare circa metà dello spazio del telefono — e puoi convertire specifici lotti HEIC in JPG in qualsiasi momento proprio qui.',
      },
      {
        question: 'Perdo risoluzione in pixel trasformando un HEIC 4032×3024 in JPG?',
        answer:
          'No. I JPG di uscita mantengono il 100% della larghezza e dell’altezza in pixel decodificate intatte, a meno che tu non scelga di ridimensionarle separatamente dopo.',
      },
      {
        question: 'Posso incollare o convertire file HEIC da browser Android, Chromebook, Linux o Windows?',
        answer:
          'Sì. Poiché heic2any WebAssembly funziona dentro Chrome, Firefox, Edge e Safari indipendentemente dal sistema operativo, puoi aprire e convertire allegati .heic di iPhone in modo pulito anche su macchine Linux o Windows senza installare estensioni.',
      },
      {
        question: 'Cosa dovrei fare se devo ridurre il JPG appena convertito sotto i 100 KB per un portale di lavoro?',
        answer:
          'Abbassa la qualità di uscita JPG proprio qui e clicca Riconverti tutto per ridurre rapidamente la dimensione del file. Se ti serve ancora una mira precisa a livello di byte, passa direttamente a Comprimi immagine a 100KB tramite i nostri strumenti collegati.',
      },
      {
        question: 'Questo convertitore accetta anche file JPG o PNG, o rigorosamente HEIC e HEIF?',
        answer:
          'Questa pagina filtra intenzionalmente solo input .heic e .heif, così i lotti di foto Apple restano puliti. Usa il nostro Converti immagini in lotto se la tua cartella mescola HEIC con PNG, WebP e file BMP.',
      },
    ],
    relatedSlugs: ['/image-converter', '/bulk-image-converter', '/jpg-to-webp', '/remove-image-metadata'],
  },
  {
    slug: '/jpg-to-png',
    name: 'JPG in PNG',
    shortDescription: 'Converti foto JPG/JPEG in immagini PNG senza perdita nel tuo browser.',
    category: 'convert',
    seoTitle: 'Converti JPG in PNG gratis – Senza perdita',
    seoDescription:
      'Trasforma foto JPEG in file senza perdita con il nostro convertitore JPG in PNG gratis. Converti singole o in lotto nel browser con fedeltà dei pixel e ZIP.',
    h1: 'Converti JPG in PNG gratis online',
    subtitle:
      'Converti fotografie standard .jpg e .jpeg in modo pulito in file .png senza perdita con il nostro convertitore gratuito JPG in PNG, che funziona direttamente dentro il tuo browser. Pensato per tipografie, editor grafici e moduli web che richiedono rigorosamente caricamenti PNG, blocca i pixel esistenti senza ulteriori danni da compressione con perdita, su lotti fino a 25 MB per immagine con esportazione ZIP immediata.',
    howToSteps: [
      {
        title: 'Trascina foto JPG o JPEG fino a 25 MB ciascuna',
        description:
          'Carica una o più immagini .jpg o .jpeg dal tuo computer, telefono o scheda della fotocamera nella zona di caricamento.',
      },
      {
        title: 'Conferma la modalità di codifica PNG senza perdita',
        description:
          'Nota che il cursore di qualità si nasconde automaticamente e viene mostrato il pannello Codifica PNG senza perdita, poiché il PNG non introduce mai artefatti di compressione con perdita.',
      },
      {
        title: 'Ispeziona le dimensioni JPG originali e PNG convertite',
        description:
          'Controlla dimensioni in pixel e conteggi in byte per scheda di file e apri Confronta per verificare la fedeltà dei pixel affiancata.',
      },
      {
        title: 'Aggiungi altri file JPEG in qualsiasi momento o rimuovi gli outlier',
        description:
          'Trascina altri file .jpg nella sessione attiva oppure rimuovi singole schede con il pulsante del cestino prima di raggrupparli.',
      },
      {
        title: 'Scarica singoli PNG o Scarica tutto (ZIP)',
        description:
          'Clicca Scarica PNG su qualsiasi scheda di risultato oppure Scarica tutto (ZIP) per salvare compressmypic_jpg_to_png.zip in locale.',
      },
    ],
    features: [
      {
        title: 'Uscita PNG davvero senza perdita',
        description: 'Previene ulteriori danni da generazione con perdita quando prepari immagini per ulteriori modifiche o archiviazione.',
      },
      {
        title: 'Coda in lotto e pacchetto ZIP',
        description: 'Converti più JPEG in PNG contemporaneamente ed esportali in un unico ZIP organizzato.',
      },
      {
        title: 'Zero filigrane o registrazioni',
        description: 'Conversioni illimitate direttamente in Chrome, Firefox, Safari o Edge senza creare un account.',
      },
      {
        title: 'Elaborazione 100% in locale',
        description: 'Le immagini restano dentro la scheda del tuo browser — nulla tocca un server remoto.',
      },
    ],
    faqs: [
      {
        question: 'Perché il cursore di qualità scompare su questo convertitore JPG in PNG?',
        answer:
          'A differenza di JPEG o WebP, il PNG usa la compressione senza perdita DEFLATE, in cui ogni pixel viene codificato in modo identico senza un compromesso percentuale di qualità. Sostituire il cursore con la scheda Codifica PNG senza perdita evita supposizioni fuorvianti.',
      },
      {
        question: 'Se convertire JPG in PNG è senza perdita, perché non può cancellare i blocchi JPEG sfocati preesistenti?',
        answer:
          'Il PNG senza perdita congela i pixel esatti attualmente memorizzati nel tuo JPEG, così non avviene ulteriore perdita di generazione quando modifichi, ritagli o risalvi il file in seguito. Tuttavia, non può ricostruire magicamente le texture fini già scartate quando la foto originale della fotocamera è stata salvata come JPG.',
      },
      {
        question: 'Perché un JPG da 300 KB spesso si espande in un PNG da 1,5 MB–3 MB dopo la conversione?',
        answer:
          'Il JPEG scarta sottili variazioni di colore su blocchi di pixel 8×8 per restare piccolo, mentre il PNG registra dati esatti di pixel RGB senza perdita su tutto il fotogramma. Le fotografie a toni continui richiedono naturalmente molti più byte in PNG senza perdita che in JPG compresso.',
      },
      {
        question: 'Quando è davvero utile convertire JPG in PNG nonostante la dimensione maggiore del file?',
        answer:
          'Convertire in PNG è essenziale quando fornitori di stampa, importatori di interfacce software, portali di badge o editor di pixel art richiedono rigorosamente file .png. Protegge anche le immagini quando prevedi di sovrapporre testo nitido e modificare ripetutamente senza accumulare artefatti di ricompressione JPEG.',
      },
      {
        question: 'Convertire un JPG con sfondo bianco pieno in PNG rende trasparente quello sfondo?',
        answer:
          'No. I file JPEG standard non memorizzano alcuna informazione di trasparenza alfa, quindi convertire JPG in PNG produce un’immagine .png completamente opaca che preserva lo sfondo bianco. Abbinalo dopo al nostro Rimuovi sfondo se ti serve un ritaglio con trasparenza.',
      },
      {
        question: 'Perché non dovresti semplicemente rinominare l’estensione di un file .jpg in .png manualmente?',
        answer:
          'Cambiare solo il suffisso del nome file lascia byte binari JPEG grezzi dentro, facendo sì che validatori di caricamento rigorosi, caricatori di canvas HTML e software di stampa rifiutino il file o non riescano ad aprirlo. Eseguire una vera decodifica su Canvas e una ricodifica PNG scrive chunk e intestazioni PNG validi.',
      },
      {
        question: 'I file PNG convertiti mantengono larghezza e altezza esatte in pixel dei miei JPEG originali?',
        answer:
          'Sì. Ogni .png esportato mantiene il 100% della larghezza e dell’altezza naturali del JPG sorgente, senza ritagli né ridimensionamenti automatici.',
      },
      {
        question: 'Posso convertire in lotto 20 scansioni JPG in file PNG e salvare un unico ZIP?',
        answer:
          'Sì. Trascina più file .jpg o .jpeg (fino a 25 MB ciascuno) insieme, attendi brevemente mentre il tuo browser codifica ogni PNG in locale e clicca Scarica tutto (ZIP) per scaricare compressmypic_jpg_to_png.zip.',
      },
      {
        question: 'Convertire JPG in PNG rimuove i tag EXIF nascosti della fotocamera e i metadati GPS?',
        answer:
          'Sì. Decodificare un JPEG su Canvas HTML5 e scrivere un PNG nuovo scarta automaticamente le intestazioni EXIF JPEG, i modelli di fotocamera e le coordinate GPS.',
      },
      {
        question: 'Documenti di identità scansionati, ricevute o ritratti personali vengono inviati a server esterni durante la conversione PNG?',
        answer:
          'Mai. Decodifica JPEG, rendering su Canvas, codifica PNG DEFLATE e archiviazione ZIP avvengono rigorosamente nella memoria locale del browser sul tuo computer o telefono.',
      },
      {
        question: 'Cosa succede se il mio input è un JPEG salvato con colori di stampa CMYK invece che RGB?',
        answer:
          'I browser moderni convertono i flussi di pixel JPEG nello spazio colore standard RGBA sRGB a 8 bit quando disegnano su Canvas HTML5. Questo garantisce che il tuo .png di uscita venga reso con precisione su browser web, slide e schermi mobili.',
      },
      {
        question: 'Come mostra la colonna Variazione la crescita della dimensione del file in modo pulito?',
        answer:
          'Trasformare JPG compressi in PNG senza perdita aumenta quasi sempre la dimensione in byte. Per questo, la cella Variazione di ogni scheda riporta onestamente la differenza positiva esatta +X% accanto alle dimensioni in byte del JPG originale e del PNG finale.',
      },
      {
        question: 'Posso usare il visualizzatore Confronta per confermare zero spostamenti di colore tra JPG e PNG?',
        answer:
          'Sì. Clicca su qualsiasi miniatura di scheda o sul pulsante Confronta per ispezionare i pixel affiancati nella tendina interattiva divisa prima di scaricare.',
      },
      {
        question: 'Perché il PNG convertito aiuta prima di eseguire più giri di annotazioni o sovrapposizioni di testo?',
        answer:
          'Risalvare ripetutamente un JPEG degrada leggermente i bordi ogni volta che la quantizzazione con perdita viene eseguita di nuovo. Convertire un asset sorgente in PNG una volta crea un master intermedio senza perdita che resiste a modifiche grafiche ripetute in modo pulito.',
      },
      {
        question: 'Entrambe le estensioni .jpg e .jpeg sono accettate senza problemi?',
        answer:
          'Sì. La zona di caricamento accetta entrambe le estensioni .jpg e .jpeg e produce file .png standardizzati mantenendo il nome base originale ripulito.',
      },
      {
        question: 'Posso convertire anche immagini PNG, WebP o HEIC in questa pagina specifica?',
        answer:
          'Questa pagina accetta intenzionalmente solo input JPG/JPEG per una conversione pulita in un unico passaggio a PNG. Usa il nostro Convertitore di immagini o il Converti immagini in lotto se la tua cartella sorgente include altri formati di file.',
      },
      {
        question: 'Qual è la dimensione massima consentita per JPEG caricato?',
        answer:
          'Ogni singolo file .jpg o .jpeg può essere fino a 25 MB. Questo limite generoso copre agevolmente esportazioni di fotocamere ad alta risoluzione, fotografie DSLR e grafica digitale ampia.',
      },
      {
        question: 'Perché una foto ritratto memorizzata come .jpg può essere esportata dritta anche se scattata di lato con una fotocamera?',
        answer:
          'I browser moderni leggono automaticamente i tag di orientamento EXIF incorporati mentre dipingono il JPEG decodificato su Canvas HTML5. Questo incorpora l’orientamento dritto in modo permanente nei nuovi pixel PNG, così viene mostrato dritto in ogni app.',
      },
      {
        question: 'I PNG esportati si apriranno in Photoshop, Illustrator, Figma, Canva e PowerPoint?',
        answer:
          'Sì. I file .png RGBA standard a 8 bit creati da Canvas HTML5 sono universalmente compatibili con ogni app di design desktop, suite per ufficio, browser e sistema operativo mobile.',
      },
      {
        question: 'Quanto è veloce la conversione JPG in PNG nel browser rispetto ai convertitori cloud?',
        answer:
          'Poiché non c’è alcun tempo di attesa di caricamento o download per foto di più megabyte, la conversione locale su Canvas si completa in millisecondi per file direttamente sulla tua CPU. I lotti finiscono rapidamente senza attese nelle code di server remoti.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/jpg-to-webp', '/image-converter', '/add-background-to-image'],
  },
  {
    slug: '/png-to-jpg',
    name: 'PNG in JPG',
    shortDescription: 'Converti PNG pesanti in JPG leggeri con sfondo opaco personalizzato.',
    category: 'convert',
    seoTitle: 'Converti PNG in JPG gratis – Riduci peso',
    seoDescription:
      'Trasforma file PNG pesanti in foto leggere con il nostro convertitore PNG in JPG gratis. Scegli un colore opaco per le aree trasparenti e salva in ZIP.',
    h1: 'Converti PNG in JPG gratis online',
    subtitle:
      'Riduci screenshot PNG ingombranti, acquisizioni Retina ed esportazioni grafiche in file .jpg veloci e leggeri con il nostro convertitore gratuito PNG in JPG nel browser. Pensato per blogger, marketer e mittenti email alle prese con allegati PNG troppo grandi fino a 25 MB ciascuno, abbina un cursore di qualità a un selettore di Colore opaco per sfondo trasparente personalizzato, così le aree con trasparenza non diventano mai nere piene.',
    howToSteps: [
      {
        title: 'Trascina immagini PNG fino a 25 MB ciascuna',
        description:
          'Carica uno o più screenshot .png, rendering di prodotto o ritagli trasparenti nella zona di caricamento.',
      },
      {
        title: 'Scegli un Colore opaco per sfondo trasparente',
        description:
          'Clicca Bianco (#ffffff), Nero (#000000), Grigio chiaro (#f8fafc) o il selettore di colore nativo per controllare come i pixel trasparenti si appiattiscono dietro i soggetti opachi.',
      },
      {
        title: 'Imposta la qualità di uscita JPG (20%–100%)',
        description:
          'Mantieni il nitido 88% predefinito oppure trascina tra il 20% (file minuscolo) e il 100% (massimo dettaglio), poi clicca Riconverti tutto.',
      },
      {
        title: 'Verifica il risparmio in byte e i bordi nitidi con Confronta',
        description:
          'Controlla la percentuale risparmiata per scheda e ispeziona testo o bordi di prodotto nel visualizzatore interattivo di confronto prima/dopo.',
      },
      {
        title: 'Scarica i file JPG o Scarica tutto (ZIP)',
        description:
          'Salva subito le singole foto .jpg convertite oppure raggruppa i lotti in compressmypic_png_to_jpg.zip.',
      },
    ],
    features: [
      {
        title: 'Riempimento opaco personalizzato per la trasparenza',
        description: 'Le aree trasparenti dei PNG si fondono in modo pulito su bianco, nero o qualsiasi colore di sfondo personalizzato invece di diventare nere piene.',
      },
      {
        title: 'Riduzione massiccia della dimensione del file',
        description: 'Convertire PNG fotografici in JPG all’85% spesso riduce il peso del file del 60–85% all’istante.',
      },
      {
        title: 'Ispettore visivo prima/dopo',
        description: 'Verifica la nitidezza affiancata prima di scaricare, così testo e bordi restano nitidi.',
      },
      {
        title: 'Esecuzione privata nel browser',
        description: 'Screenshot riservati e documenti restano al sicuro sul tuo computer.',
      },
    ],
    faqs: [
      {
        question: 'Perché gli screenshot di macOS e Windows vengono salvati come PNG da più megabyte che si riducono drasticamente come JPG?',
        answer:
          'I sistemi operativi desktop usano per impostazione predefinita il PNG senza perdita per gli screenshot, che memorizza fedelmente milioni di pixel Retina non compressi — spesso oltre 3 MB–8 MB per acquisizione. Convertire PNG fotografici o di interfacce ricche in JPG all’85%–90% riduce tipicamente il peso del file del 60%–85% per condivisioni rapide via email e Slack.',
      },
      {
        question: 'Come impedisce il selettore Colore opaco per sfondo trasparente i brutti riquadri neri?',
        answer:
          'Poiché la specifica JPEG non ha un canale di trasparenza alfa, i convertitori ingenui spesso impostano di default i pixel alfa vuoti su nero #000000, rovinando loghi scuri o ritagli con ombre. Dipingere prima il colore opaco selezionato (bianco per impostazione predefinita, più nero, grigio chiaro o qualsiasi esadecimale personalizzato) sulla canvas fonde i bordi semitrasparenti in modo pulito.',
      },
      {
        question: 'Posso scegliere un antracite scuro o un colore di marca specifico del sito dietro un logo PNG trasparente prima di salvare il JPG?',
        answer:
          'Sì. Clicca il quadrato di input del colore accanto ai pulsanti rapidi Bianco, Nero e Grigio chiaro sotto Colore opaco per sfondo trasparente per scegliere qualsiasi valore esadecimale esatto, poi clicca Riconverti tutto per vedere in anteprima ed esportare.',
      },
      {
        question: 'Quale percentuale di qualità di uscita JPG mantiene nitida la tipografia degli screenshot senza file gonfi?',
        answer:
          'Mantenere la qualità di uscita JPG intorno all’88% (predefinito) fino al 95% mantiene puliti i bordi nitidi intorno al testo dell’interfaccia software e ai grafici. Scendere sotto il 70% può introdurre un leggero rumore «zanzara» intorno a lettere rosse o blu ad alto contrasto a causa del sottocampionamento cromatico JPEG.',
      },
      {
        question: 'Perché una minuscola icona PNG monocromatica piatta da 20 KB può crescere leggermente quando convertita in JPG all’88%?',
        answer:
          'Il PNG a tavolozza indicizzata eccelle nella grafica piatta bicolore con aree piene nette, mentre i blocchi coseno 8×8 del JPEG aggiungono peso sulle piccole icone. Controlla sempre la colonna Variazione — per le icone piatte trasparenti destinate ai siti web, WebP o mantenere il PNG è di solito più piccolo del JPG.',
      },
      {
        question: 'Come dovrei decidere tra PNG in JPG e PNG in WebP?',
        answer:
          'Scegli PNG in JPG quando gli allegati devono aprirsi in Microsoft Word, costruttori di PDF, programmi email legacy, laboratori di stampa o portali che rifiutano WebP, oppure quando ti serve intenzionalmente uno sfondo bianco pieno. Scegli PNG in WebP quando pubblichi asset su siti web in cui preservare la trasparenza e la massima velocità conta.',
      },
      {
        question: 'Convertire ritagli di prodotto trasparenti su uno sfondo opaco bianco #ffffff aiuta nelle inserzioni dei marketplace?',
        answer:
          'Sì. Marketplace come Amazon ed eBay preferiscono comunemente JPG nitidi con sfondo bianco opaco per le miniature principali dei prodotti piuttosto che PNG con trasparenza, e il bianco si comprime molto efficientemente dentro il JPEG.',
      },
      {
        question: 'Posso convertire un intero lotto di 25 screenshot PNG Retina in JPG in una volta sola?',
        answer:
          'Sì. Trascina più file .png fino a 25 MB ciascuno nella coda, scegli qualità e colore di riempimento opaco e scarica tutto insieme in compressmypic_png_to_jpg.zip.',
      },
      {
        question: 'Cosa succede alle ombre morbide intorno a un’acquisizione di finestra PNG trasparente quando viene appiattita in JPG?',
        answer:
          'Le ombre con trasparenza alfa si compongono naturalmente sul Colore opaco scelto invece di tagliarsi in contorni frastagliati duri. Questo produce ombreggiature morbide e pulite su sfondi bianchi o colorati, pronte per slide e articoli.',
      },
      {
        question: 'Dashboard riservate, ricevute o mockup di design vengono caricati su un’API cloud?',
        answer:
          'No. Composizione opaca su Canvas, compressione JPEG e generazione ZIP vengono eseguite in locale dentro la scheda del tuo browser, così le acquisizioni sensibili non lasciano mai il tuo computer.',
      },
      {
        question: 'La conversione da PNG a JPG cambia la larghezza o l’altezza in pixel?',
        answer:
          'No. Ogni .jpg convertito conserva il 100% della larghezza e dell’altezza esatte del tuo PNG originale. Usa Ridimensiona immagini o Ridimensiona immagini in lotto se vuoi anche ridurre le acquisizioni Retina a dimensioni 1×.',
      },
      {
        question: 'Perché il cursore di qualità va dal 20% al 100%?',
        answer:
          'Trascinare verso il 20% mostra quanto la compressione aggressiva riduce la dimensione quando sono obbligatori file ultra-minuscoli, mentre l’85%–90% raggiunge il punto ideale visivo per foto e slide nitide. Scegliere il 100% offre il massimo dettaglio JPEG quando il peso in byte è secondario.',
      },
      {
        question: 'Posso cambiare Colore opaco o Qualità dopo aver visto i primi risultati di conversione?',
        answer:
          'Sì. Scegli un diverso campione opaco o sposta il cursore in qualsiasi momento e clicca Riconverti tutto per rigenerare ogni file caricato senza ricaricare.',
      },
      {
        question: 'Convertire PNG in JPG rimuove i chunk di testo PNG incorporati come software di creazione o commenti?',
        answer:
          'Sì. Disegnare i pixel su Canvas HTML5 rimuove i blocchi tEXt, iTXt e i profili ICC incorporati, mantenendo i JPG di uscita snelli e puliti.',
      },
      {
        question: 'Posso verificare la nitidezza dei bordi prima/dopo sugli screenshot dell’interfaccia convertiti prima di scaricare?',
        answer:
          'Sì. Clicca Confronta su qualsiasi scheda per trascinare il visualizzatore diviso su etichette di testo e icone rispetto all’originale PNG senza perdita.',
      },
      {
        question: 'Quali tipi di file accetta questa pagina dedicata PNG in JPG?',
        answer:
          'Filtra in modo pulito i file .png fino a 25 MB per file, così non appiattisci per sbaglio input non PNG. Per lotti misti contenenti file WebP o BMP, prova il Converti immagini in lotto.',
      },
      {
        question: 'Il convertitore supporta PNG trasparenti interlacciati (Adam7)?',
        answer:
          'Sì. Il decodificatore di immagini nativo del tuo browser legge in modo pulito sia i flussi PNG standard sia quelli interlacciati prima di dipingerli sullo sfondo opaco di Canvas.',
      },
      {
        question: 'Foto di Windows, Anteprima di macOS, WhatsApp e stampanti vecchie apriranno il JPG esportato?',
        answer:
          'Sì. Gli output .jpg RGB di base standard hanno la compatibilità più ampia di qualsiasi formato di immagine digitale su telefoni, browser, suite per ufficio e chioschi di stampa.',
      },
      {
        question: 'Qual è il nome del singolo file scaricato rispetto al nome del file ZIP del lotto?',
        answer:
          'I download singoli mantengono il nome file originale ripulito con estensione .jpg. I lotti di 2 o più file vengono esportati raggruppati ordinatamente dentro compressmypic_png_to_jpg.zip.',
      },
      {
        question: 'Posso convertire screenshot PNG da browser mobili iOS o Android in modo pulito?',
        answer:
          'Sì. I campioni opachi, il cursore di qualità, l’ispettore visivo di confronto e l’esportazione ZIP funzionano direttamente in Safari su iOS e Chrome su Android senza bisogno di scaricare app.',
      },
    ],
    relatedSlugs: ['/jpg-to-png', '/png-to-webp', '/compress-image-to-100kb', '/image-converter'],
  },
  {
    slug: '/jpg-to-webp',
    name: 'Convertitore da JPG a WebP',
    shortDescription: 'Converti foto JPG in WebP moderno per siti più veloci e una SEO migliore.',
    category: 'convert',
    seoTitle: 'Convertitore JPG in WebP gratis online – File più leggeri',
    seoDescription:
      'Converti foto JPG in WebP moderno gratis online nel browser. File più piccoli, pagine più veloci e Core Web Vitals migliori, con cursore di qualità e ZIP.',
    h1: 'Convertitore gratuito online da JPG a WebP',
    subtitle:
      'Trasforma le foto JPG di tutti i giorni in immagini WebP moderne e leggere con il nostro convertitore gratuito da JPG a WebP, che funziona interamente nel tuo browser. Pensato per blogger, proprietari di negozi e sviluppatori che vogliono pagine più veloci e Core Web Vitals migliori, converte file JPG fino a 25 MB ciascuno con la qualità che scegli — 82% di default — con elaborazione in batch e download ZIP in un clic, senza caricare mai nulla.',
    howToSteps: [
      {
        title: 'Trascina foto JPG fino a 25 MB ciascuna',
        description:
          'Carica una o più foto .jpg o .jpeg dal tuo blog, dal tuo negozio o dal rullino nella zona di caricamento.',
      },
      {
        title: 'Imposta la qualità di uscita WebP (20%–100%)',
        description:
          'Tieni il nitido 82% di default per le foto, oppure sposta il cursore verso il 20% per file minuscoli e verso il 100% per il massimo dettaglio, poi clicca Riconverti tutto.',
      },
      {
        title: 'Controlla il risparmio di spazio su ogni scheda',
        description:
          'Ogni risultato mostra la dimensione JPG originale, la dimensione WebP convertita e la percentuale risparmiata, così vedi subito il guadagno.',
      },
      {
        title: 'Confronta la nitidezza fianco a fianco',
        description:
          'Clicca Confronta su una scheda per aprire il visualizzatore a metà e verificare che testo, volti e bordi restino nitidi con la qualità scelta.',
      },
      {
        title: 'Scarica i file WebP o Scarica tutto (ZIP)',
        description:
          'Salva i singoli file .webp oppure raggruppa l’intero batch in compressmypic_jpg_to_webp.zip in un clic.',
      },
    ],
    features: [
      {
        title: 'PageSpeed e LCP più veloci',
        description: 'WebP è il formato web di nuova generazione consigliato da Lighthouse e dai browser moderni.',
      },
      {
        title: 'Controllo della qualità regolabile',
        description: 'Regola la compressione dal 20% al 100% e vedi subito i risultati.',
      },
      {
        title: 'Esportazione in batch in ZIP',
        description: 'Ottimizza intere cartelle di immagini di blog o e-commerce in locale in pochi secondi.',
      },
      {
        title: 'Zero passaggi dal server',
        description: 'Usa l’encoder WebP integrato nel tuo browser: veloce, funziona anche offline ed è privato.',
      },
    ],
    faqs: [
      {
        question: 'Quanto è più piccolo un file WebP rispetto alla stessa foto salvata in JPG?',
        answer:
          'A parità di qualità visiva, i file WebP sono in genere dal 25% al 35% più piccoli della stessa foto salvata in JPG, perché la compressione WebP prevede i pixel in modo più efficiente. Il risparmio esatto dipende dalla foto: i paesaggi dettagliati risparmiano meno, mentre i cieli uniformi e le foto in studio risparmiano di più.',
      },
      {
        question: 'Perché Google consiglia WebP per siti più veloci e Core Web Vitals migliori?',
        answer:
          'Lighthouse e PageSpeed di Google indicano le immagini pesanti come una delle cause principali di un Largest Contentful Paint (LCP) lento. Servire la stessa foto come un WebP più leggero riduce il tempo di download sulle connessioni lente, migliorando direttamente l’LCP e il punteggio di esperienza che Google usa come segnale di ranking.',
      },
      {
        question: 'Quali browser aprono un file WebP senza installare nulla?',
        answer:
          'Tutti i browser moderni aprono WebP in modo nativo: Chrome, Edge, Firefox e Safari su desktop, oltre a Chrome su Android e Safari su iOS. Non servono plugin né app di visualizzazione, quindi le immagini WebP si vedono direttamente sulle pagine web, nelle chat e nella maggior parte dei visualizzatori moderni.',
      },
      {
        question: 'Quale qualità dovrei usare per le foto da JPG a WebP su un sito web?',
        answer:
          'Per le foto di un sito, dall’80% all’85% è il punto ideale: le immagini sembrano praticamente identiche all’originale JPG pur restando molto più piccole. Lo strumento usa l’82% come default proprio per questo motivo, e puoi salire verso il 90% o oltre per le immagini principali, dove ogni dettaglio conta.',
      },
      {
        question: 'Convertire un JPG in WebP cambia le dimensioni della foto?',
        answer:
          'No. La conversione cambia solo il contenitore del file e la compressione, quindi il WebP esportato mantiene il 100% della larghezza e dell’altezza in pixel del JPG originale. Se vuoi anche dimensioni più piccole, usa dopo il Ridimensionatore di immagini per misure esatte in pixel.',
      },
      {
        question: 'Una foto JPG può mantenere la trasparenza quando diventa WebP?',
        answer:
          'No, perché i file JPG standard non hanno un canale di trasparenza da preservare: ogni pixel di un JPG è completamente opaco. Se la tua grafica ha uno sfondo trasparente, parti invece da un PNG e usa il nostro convertitore da PNG a WebP, che preserva l’intero canale alfa.',
      },
      {
        question: 'Le mie foto JPG vengono caricate su un server durante la conversione?',
        answer:
          'Mai. La conversione avviene su HTML5 Canvas dentro la tua scheda del browser, quindi le tue foto vengono codificate in locale e non lasciano mai il tuo computer o telefono. Chiudendo la scheda vengono rimosse dalla memoria del browser.',
      },
      {
        question: 'Posso convertire un’intera cartella di immagini JPG di un blog in WebP in una volta?',
        answer:
          'Sì. Trascina più file .jpg o .jpeg fino a 25 MB ciascuno nella coda, scegli un’unica qualità per l’intero batch e scarica tutto insieme in compressmypic_jpg_to_webp.zip. Ogni file viene convertito separatamente, quindi un file difettoso non blocca mai gli altri.',
      },
      {
        question: 'Cosa succede ai dati EXIF e ai tag GPS di un JPG quando diventa WebP?',
        answer:
          'Disegnare i pixel su HTML5 Canvas rimuove i dati EXIF incorporati, incluse coordinate GPS, modello della fotocamera e date. In questo modo i file WebP risultanti restano leggeri e proteggono la tua privacy prima che tu pubblichi le foto online.',
      },
      {
        question: 'Perché il WebP convertito a volte è più grande del JPG originale?',
        answer:
          'I JPG molto piccoli o già molto compressi possono crescere leggermente quando vengono ricodificati, soprattutto con qualità al 100%, perché WebP aggiunge il peso del suo contenitore. Se un file cresce, abbassa la qualità verso l’80% oppure tieni il JPG originale: la colonna Variazione di ogni scheda mostra il risultato con onestà.',
      },
      {
        question: 'Posso usare i file WebP convertiti in WordPress, Shopify o Wix?',
        answer:
          'Sì. WordPress, Shopify, Wix, Squarespace e la maggior parte dei costruttori di siti moderni accettano direttamente i caricamenti WebP, e i browser li servono senza configurazioni extra. Per temi o plugin molto vecchi che rifiutano WebP, riconverti con il nostro strumento da WebP a JPG.',
      },
      {
        question: 'Qual è la dimensione massima di file JPG accettata?',
        answer:
          'Ogni file JPG o JPEG può arrivare fino a 25 MB, il che copre foto di fotocamere ad alta risoluzione e screenshot grandi. Poiché la conversione avviene sul tuo dispositivo, i file grandi vengono elaborati alla velocità della CPU locale, senza attese di caricamento.',
      },
      {
        question: 'La conversione in WebP funziona nel browser del telefono?',
        answer:
          'Sì. Il cursore di qualità, la coda in batch, il visualizzatore di confronto e il download ZIP funzionano in Safari su iOS e in Chrome su Android, senza installare app. Sul telefono, i batch molto grandi richiedono solo un po’ più di tempo perché il lavoro gira sul processore del telefono.',
      },
      {
        question: 'Come verifico che il WebP convertito resti nitido prima di scaricarlo?',
        answer:
          'Clicca Confronta su una scheda di risultato per aprire il visualizzatore a metà e trascina sulla foto per ispezionare volti, testo e bordi rispetto al JPG originale. Se qualcosa sembra morbido, alza il cursore di qualità e clicca Riconverti tutto.',
      },
      {
        question: 'Posso cambiare la qualità dopo la prima conversione senza ricaricare i file?',
        answer:
          'Sì. Sposta il cursore di qualità su un nuovo valore in qualsiasi momento e clicca Riconverti tutto per rigenerare ogni file caricato con la nuova impostazione. I file caricati restano nella coda, quindi non devi trascinarli di nuovo.',
      },
      {
        question: 'WebP è meglio del JPG per le foto di prodotto di un negozio online?',
        answer:
          'Per le foto di prodotto mostrate su un sito web, sì: WebP all’80%–85% sembra uguale al JPG ma si carica molto più velocemente, il che aiuta sia gli acquirenti sia il posizionamento nei motori di ricerca. Tieni il JPG solo quando un marketplace, un laboratorio di stampa o un acquirente lo richiede esplicitamente.',
      },
      {
        question: 'Quale nome di file mantengono i file WebP scaricati?',
        answer:
          'I download singoli mantengono il nome originale del file, ripulito, con estensione .webp, quindi foto_01.jpg diventa foto_01.webp. I batch di due o più file vengono esportati insieme dentro compressmypic_jpg_to_webp.zip.',
      },
      {
        question: 'Posso convertire screenshot JPG con testo in WebP senza lettere sfocate?',
        answer:
          'Sì, con qualità dall’85% al 90% il testo degli screenshot resta nitido perché WebP preserva bene i bordi netti ad alto contrasto. Sotto il 70% le lettere piccole possono ammorbidirsi, quindi controlla nel visualizzatore Confronta e alza la qualità se il testo sembra sfocato.',
      },
      {
        question: 'Questo convertitore funziona offline dopo che la pagina è stata caricata?',
        answer:
          'Sì. Una volta caricata la pagina nel browser, la conversione avviene interamente in JavaScript locale e HTML5 Canvas, senza chiamate al server. Ti serve di nuovo internet solo per caricare la pagina stessa o per scaricare i file finiti.',
      },
      {
        question: 'Quando dovrei tenere il JPG invece di convertirlo in WebP?',
        answer:
          'Tieni il JPG quando il file deve aprirsi in software datati, allegati e-mail, laboratori di stampa o portali di caricamento che rifiutano ancora WebP. Per qualsiasi cosa pubblicata su un sito moderno, WebP è la scelta migliore — e puoi sempre riconvertire con WebP in JPG.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/web-image-optimizer', '/bulk-image-converter'],
  },
  {
    slug: '/webp-to-jpg',
    name: 'Convertitore da WebP a JPG',
    shortDescription: 'Converti i download WebP in file JPG accettati ovunque.',
    category: 'convert',
    seoTitle: 'Convertitore WebP in JPG gratis – Apri WebP ovunque',
    seoDescription:
      'Converti immagini WebP in JPG universale gratis online nel browser. Scegli il colore di fondo per le aree trasparenti, regola la qualità e scarica in ZIP.',
    h1: 'Convertitore gratuito online da WebP a JPG',
    subtitle:
      'Trasforma le immagini .webp scaricate in classici file .jpg che si aprono in qualsiasi app, portale o stampante con il nostro convertitore gratuito da WebP a JPG nel browser. Pensato per chi riceve un file WebP da un sito o da una chat e il suo editor, la suite office o il modulo di caricamento lo rifiuta, converte file WebP fino a 25 MB ciascuno con qualità all’88% di default, con selettore di colore di fondo per le aree trasparenti ed export ZIP in batch.',
    howToSteps: [
      {
        title: 'Trascina immagini WebP fino a 25 MB ciascuna',
        description:
          'Carica uno o più file .webp salvati da siti web, chat o download nella zona di caricamento.',
      },
      {
        title: 'Scegli un colore di fondo per le aree trasparenti',
        description:
          'Scegli Bianco (#ffffff), Nero (#000000), Grigio chiaro (#f8fafc) o un qualsiasi colore esadecimale personalizzato, perché il JPG non può memorizzare la trasparenza.',
      },
      {
        title: 'Imposta la qualità di uscita JPG (20%–100%)',
        description:
          'Tieni il nitido 88% di default oppure sposta il cursore verso il 20% per file minuscoli e verso il 100% per il massimo dettaglio, poi clicca Riconverti tutto.',
      },
      {
        title: 'Confronta il JPG con il WebP originale',
        description:
          'Clicca Confronta su una scheda per ispezionare bordi e testo nel visualizzatore a metà prima di salvare.',
      },
      {
        title: 'Scarica i file JPG o Scarica tutto (ZIP)',
        description:
          'Salva i singoli file .jpg oppure raggruppa l’intero batch in compressmypic_webp_to_jpg.zip in un clic.',
      },
    ],
    features: [
      {
        title: 'Risolve i rifiuti del software datato',
        description: 'Converti facilmente le immagini WebP per portali, stampanti o app datate che accettano solo JPG.',
      },
      {
        title: 'Riempimento di fondo sicuro per la trasparenza',
        description: 'I WebP trasparenti vengono appiattiti senza problemi su bianco, nero o qualsiasi colore esadecimale.',
      },
      {
        title: 'Ricodifica di alta qualità',
        description: 'La qualità di default all’88% mantiene i dettagli nitidi con un aumento minimo delle dimensioni del file.',
      },
      {
        title: 'Privacy 100% nel browser',
        description: 'Nessuna coda cloud né caricamenti sul server: funziona subito sul tuo dispositivo.',
      },
    ],
    faqs: [
      {
        question: 'Perché alcune app, stampanti e moduli di caricamento rifiutano i file .webp?',
        answer:
          'WebP è un formato più recente e molti programmi desktop datati, chioschi di stampa, versioni di Microsoft Office e moduli ufficiali di caricamento sono stati creati prima che esistesse, quindi riconoscono solo JPG e PNG. Convertire WebP in JPG rende subito l’immagine apribile ovunque senza chiedere a nessuno di installare nulla.',
      },
      {
        question: 'Cosa succede alle parti trasparenti di un WebP quando diventa JPG?',
        answer:
          'Il JPG non ha un canale alfa di trasparenza, quindi i pixel trasparenti devono essere riempiti con un colore solido durante la conversione. Questo strumento li riempie con il colore di fondo che scegli — bianco di default — così loghi e adesivi ottengono uno sfondo solido e pulito invece di un riquadro nero.',
      },
      {
        question: 'Posso scegliere il colore di sfondo dietro un adesivo WebP trasparente?',
        answer:
          'Sì. Sotto Colore di fondo per la trasparenza, scegli Bianco, Nero o Grigio chiaro, oppure clicca sul campione di colore per inserire un qualsiasi valore esadecimale personalizzato. La scelta vale quando clicchi Riconverti tutto, quindi puoi provare sfondi diversi prima di scaricare.',
      },
      {
        question: 'Convertire WebP in JPG perde qualità?',
        answer:
          'Una certa perdita è inevitabile perché il JPG ricodifica i pixel con compressione con perdita, ma con l’88% di default la differenza è praticamente invisibile per foto e screenshot. Se il WebP originale era già di bassa qualità, la conversione non può ripristinare dettagli che non c’erano mai.',
      },
      {
        question: 'Il JPG manterrà le stesse dimensioni in pixel del WebP?',
        answer:
          'Sì. Ogni .jpg convertito mantiene il 100% della larghezza e dell’altezza esatte in pixel del WebP originale, quindi nulla viene ritagliato o ridimensionato. Usa dopo il Ridimensionatore di immagini se ti servono anche dimensioni più piccole.',
      },
      {
        question: 'Cosa dovrei fare con un file WebP animato qui?',
        answer:
          'Un WebP animato viene esportato come un JPG fermo, perché il formato JPG non può memorizzare il movimento. Ottieni un singolo fotogramma nitido dell’animazione, utile per miniature e documenti — per la versione in movimento, tieni il file WebP originale.',
      },
      {
        question: 'I miei file WebP vengono caricati da qualche parte durante la conversione?',
        answer:
          'No. L’intera conversione avviene su HTML5 Canvas dentro la tua scheda del browser, quindi le tue immagini non vengono mai inviate a un server, memorizzate o viste da altri. Chiudendo la scheda vengono rimosse dalla memoria del browser.',
      },
      {
        question: 'Posso convertire molti download WebP in JPG in un unico batch?',
        answer:
          'Sì. Trascina più file .webp fino a 25 MB ciascuno nella coda, scegli un unico colore di fondo e un’unica qualità per l’intero batch e scarica tutto insieme in compressmypic_webp_to_jpg.zip. Ogni file viene convertito separatamente.',
      },
      {
        question: 'Qual è il file WebP più grande che accetta questo convertitore?',
        answer:
          'Ogni file WebP può arrivare fino a 25 MB, il che copre download ad alta risoluzione e screenshot grandi. La conversione avviene sul tuo dispositivo, quindi i file grandi vengono elaborati alla velocità della CPU locale, senza attese di caricamento.',
      },
      {
        question: 'Come ottengo uno sfondo bianco puro invece di un riquadro nero dietro un logo?',
        answer:
          'Scegli Bianco (#ffffff) sotto Colore di fondo per la trasparenza prima di convertire: il bianco è il default, quindi la maggior parte dei loghi esce già pulita. Se un file è stato convertito con il colore sbagliato, cambia il campione e clicca Riconverti tutto per rigenerarlo.',
      },
      {
        question: 'Perché il file JPG a volte è più grande del WebP originale?',
        answer:
          'WebP comprime in modo più efficiente del JPG, quindi un piccolo WebP ricodificato come JPG all’88% può finire più grande della fonte. È normale: stai scambiando un po’ di dimensione del file con la compatibilità universale. Abbassare la qualità verso il 75% di solito riporta il JPG sotto la dimensione originale.',
      },
      {
        question: 'Posso aprire il JPG convertito in Microsoft Word, PowerPoint o Photoshop?',
        answer:
          'Sì. I file .jpg RGB standard di base si aprono in praticamente tutte le suite office, gli editor, i browser e i flussi di stampa, comprese le versioni datate che non hanno mai imparato WebP. Questo supporto universale è il motivo principale per convertire.',
      },
      {
        question: 'Il convertitore rimuove i metadati dai file WebP?',
        answer:
          'Sì. Disegnare i pixel su HTML5 Canvas rimuove i dati EXIF, XMP e i profili ICC incorporati, quindi i JPG risultanti sono leggeri e privi di dettagli nascosti di posizione o fotocamera.',
      },
      {
        question: 'Come posso verificare che il JPG sia venuto bene prima di scaricarlo?',
        answer:
          'Clicca Confronta su una scheda di risultato per aprire il visualizzatore a metà e trascina sull’immagine per ispezionare bordi, testo e colori rispetto al WebP originale. Ogni scheda mostra anche le dimensioni originale e convertita, quindi le sorprese si vedono prima di salvare.',
      },
      {
        question: 'Posso cambiare il colore di fondo o la qualità dopo la conversione?',
        answer:
          'Sì. Scegli un altro campione di fondo oppure sposta il cursore di qualità in qualsiasi momento e clicca Riconverti tutto per rigenerare ogni file caricato senza ricaricare. I tuoi file WebP originali restano nella coda finché non li rimuovi.',
      },
      {
        question: 'Quale nome di file manterrà il JPG scaricato?',
        answer:
          'I download singoli mantengono il nome originale del file, ripulito, con estensione .jpg, quindi banner.webp diventa banner.jpg. I batch di due o più file vengono esportati insieme dentro compressmypic_webp_to_jpg.zip.',
      },
      {
        question: 'La conversione da WebP a JPG funziona nei browser di iPhone e Android?',
        answer:
          'Sì. Il selettore di colore di fondo, il cursore di qualità, il visualizzatore di confronto e il download ZIP funzionano in Safari su iOS e in Chrome su Android senza installare app. I batch grandi richiedono solo un po’ più di tempo sui processori dei telefoni.',
      },
      {
        question: 'Quando è meglio convertire WebP in JPG invece che WebP in PNG?',
        answer:
          'Scegli JPG quando ti serve il file più piccolo e ampiamente compatibile: allegati e-mail, documenti Office, portali di caricamento e stampanti. Scegli PNG invece quando devi mantenere la trasparenza o ti serve una qualità senza perdita e perfetta in pixel per modificare.',
      },
      {
        question: 'Perché uno screenshot WebP con testo nitido sembra più morbido dopo la conversione?',
        answer:
          'JPEG usa il sottocampionamento della crominanza, che ammorbidisce leggermente i bordi ad alto contrasto come le lettere rosse o blu su bianco. Alzare la qualità al 92% o al 95% mantiene nitido il testo degli screenshot, e il visualizzatore Confronta ti permette di verificarlo prima di scaricare.',
      },
      {
        question: 'Posso convertire un’immagine WebP che un sito ha salvato senza estensione di file?',
        answer:
          'Non direttamente: questa pagina filtra gli input in base all’estensione .webp e al tipo MIME WebP, quindi rinomina prima il file in modo che termini con .webp. Se il file è in realtà un JPG o un PNG etichettato male dal sito, usa invece il convertitore corrispondente.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/png-to-jpg', '/image-converter'],
  },
  {
    slug: '/png-to-webp',
    name: 'Convertitore da PNG a WebP',
    shortDescription: 'Converti grafiche PNG trasparenti in WebP compatto e trasparente.',
    category: 'convert',
    seoTitle: 'Convertitore PNG in WebP gratis – Loghi trasparenti',
    seoDescription:
      'Converti PNG in WebP gratis online mantenendo la trasparenza completa. Riduci loghi, icone e screenshot nel browser con cursore di qualità ed export ZIP.',
    h1: 'Convertitore gratuito online da PNG a WebP',
    subtitle:
      'Riduci loghi PNG trasparenti pesanti, icone e screenshot in file WebP compatti con il nostro convertitore gratuito da PNG a WebP, direttamente nel tuo browser. Pensato per sviluppatori web e designer che vogliono grafiche trasparenti a caricamento rapido, converte file PNG fino a 25 MB ciascuno con qualità all’85% di default preservando l’intero canale alfa, con elaborazione in batch e download ZIP.',
    howToSteps: [
      {
        title: 'Trascina grafiche PNG fino a 25 MB ciascuna',
        description:
          'Carica loghi .png trasparenti, icone, screenshot o ritagli di prodotto nella zona di caricamento.',
      },
      {
        title: 'Imposta la qualità di uscita WebP (20%–100%)',
        description:
          'Tieni l’85% di default per grafiche trasparenti nitide, oppure sposta il cursore verso il 20% per file minuscoli e verso il 100% per il massimo dettaglio, poi clicca Riconverti tutto.',
      },
      {
        title: 'Controlla trasparenza e risparmio di spazio',
        description:
          'Ogni scheda mostra la dimensione PNG originale, la nuova dimensione WebP e la percentuale risparmiata, con la trasparenza visibile in un’anteprima a scacchiera.',
      },
      {
        title: 'Confronta bordi e ombre fianco a fianco',
        description:
          'Clicca Confronta su una scheda per ispezionare bordi semitrasparenti, gradienti e ombre nel visualizzatore a metà.',
      },
      {
        title: 'Scarica i file WebP o Scarica tutto (ZIP)',
        description:
          'Salva i singoli file .webp oppure raggruppa il batch in compressmypic_png_to_webp.zip in un clic.',
      },
    ],
    features: [
      {
        title: 'Trasparenza alfa completa preservata',
        description: 'A differenza del JPG, WebP mantiene bordi semitrasparenti puliti e ombre dei tuoi PNG.',
      },
      {
        title: 'Risorse fino al 70% più piccole',
        description: 'Sostituisci immagini principali PNG di diversi megabyte e ritagli con file WebP eleganti per siti più veloci.',
      },
      {
        title: 'Vista a metà prima/dopo',
        description: 'Ispeziona bordi smussati e gradienti fianco a fianco prima di scaricare.',
      },
      {
        title: 'Elaborazione in batch + ZIP',
        description: 'Converti interi set di icone e prodotti in locale senza limiti di caricamento.',
      },
    ],
    faqs: [
      {
        question: 'La conversione da PNG a WebP mantiene davvero gli sfondi trasparenti?',
        answer:
          'Sì. La codifica WebP su HTML5 Canvas preserva l’intero canale alfa a 8 bit, quindi i pixel completamente trasparenti restano trasparenti e i bordi semitrasparenti, le ombre morbide e le curve smussate mantengono la loro fusione delicata. L’anteprima del risultato mostra la trasparenza su una scacchiera, così puoi verificarla subito.',
      },
      {
        question: 'Quanto è più piccolo WebP rispetto a PNG per la stessa immagine?',
        answer:
          'A seconda della complessità visiva, convertire un PNG in WebP all’85% riduce in genere le dimensioni del file dal 50% all’80%. I PNG fotografici e gli screenshot grandi risparmiano di più, mentre le piccole icone piatte con pochi colori possono risparmiare meno: la colonna Variazione di ogni scheda mostra il risultato esatto.',
      },
      {
        question: 'Le ombre semitrasparenti e i bordi morbidi sopravvivono alla conversione?',
        answer:
          'Sì. WebP memorizza gli stessi valori alfa a 8 bit del PNG, quindi ombre, bagliori e bordi sfumati si compongono esattamente come nell’originale. Usa il visualizzatore Confronta per ingrandire i bordi e confermare che la morbidezza sembri identica prima di scaricare.',
      },
      {
        question: 'Quale qualità funziona meglio per i loghi PNG trasparenti?',
        answer:
          'L’85% di default è ideale per la maggior parte dei loghi e delle icone: i bordi restano nitidi mentre i file si riducono drasticamente. Per lavori di qualità da stampa o disegni con linee molto sottili, alza la qualità al 90% o al 95%; scendere sotto il 70% può rendere ruvide le linee sottili e il testo piccolo.',
      },
      {
        question: 'Come converto un intero set di icone da PNG a WebP in una volta?',
        answer:
          'Trascina più file .png fino a 25 MB ciascuno nella coda, scegli un’unica qualità per l’intero batch e scarica tutto insieme in compressmypic_png_to_webp.zip. Ogni icona viene convertita separatamente, quindi un file difettoso non blocca mai gli altri.',
      },
      {
        question: 'I file PNG vengono caricati su un server quando li converto in WebP?',
        answer:
          'No. La conversione avviene su HTML5 Canvas dentro la tua scheda del browser, quindi i tuoi loghi, screenshot e risorse di design non lasciano mai il tuo computer. Chiudendo la scheda vengono rimossi dalla memoria del browser.',
      },
      {
        question: 'Convertire PNG in WebP cambia le dimensioni dell’immagine?',
        answer:
          'No. Il WebP esportato mantiene il 100% della larghezza e dell’altezza in pixel del PNG originale: cambiano solo il formato del file e la compressione. Usa dopo il Ridimensionatore di immagini se ti servono anche dimensioni più piccole per il web.',
      },
      {
        question: 'Qual è la dimensione massima di PNG accettata?',
        answer:
          'Ogni file PNG può arrivare fino a 25 MB, il che copre screenshot grandi, acquisizioni Retina e rendering di prodotto ad alta risoluzione. Poiché la conversione avviene sul tuo dispositivo, i file grandi vengono elaborati alla velocità della CPU locale, senza attese di caricamento.',
      },
      {
        question: 'Perché il mio WebP convertito è più grande del PNG originale?',
        answer:
          'I piccoli PNG piatti con pochi colori — come un’icona a due colori — sono già estremamente efficienti, e la codifica WebP con perdita può aggiungere peso su di essi. Se un file cresce, controlla la colonna Variazione e tieni il PNG originale per quella risorsa; WebP vince sulle grafiche fotografiche e complesse.',
      },
      {
        question: 'I siti web possono usare direttamente i file WebP convertiti?',
        answer:
          'Sì. Tutti i browser moderni mostrano WebP in modo nativo, e WordPress, Shopify, Wix e la maggior parte dei costruttori di siti accettano caricamenti WebP. I loghi WebP trasparenti funzionano esattamente come i PNG trasparenti in intestazioni, pulsanti e gallerie di prodotto.',
      },
      {
        question: 'Cosa succede ai metadati e ai blocchi di testo PNG durante la conversione?',
        answer:
          'Disegnare i pixel su HTML5 Canvas rimuove i blocchi di testo PNG incorporati, le note del software di creazione e i profili ICC. I file WebP risultanti restano leggeri e privi di metadati nascosti, il che è ideale per pubblicare risorse online.',
      },
      {
        question: 'Come verifico che la trasparenza sia stata preservata prima di scaricare?',
        answer:
          'La miniatura del risultato mostra le aree trasparenti su uno sfondo a scacchiera, e il pulsante Confronta apre un visualizzatore a metà dove puoi trascinare sull’immagine per confermare che i bordi si fondano con delicatezza. Se lo sfondo sembra solido invece che a scacchiera, il PNG originale non aveva trasparenza.',
      },
      {
        question: 'Posso cambiare la qualità dopo la conversione senza ricaricare i file?',
        answer:
          'Sì. Sposta il cursore di qualità su un nuovo valore in qualsiasi momento e clicca Riconverti tutto per rigenerare ogni file caricato con la nuova impostazione. I tuoi PNG caricati restano nella coda, quindi non devi trascinarli di nuovo.',
      },
      {
        question: 'WebP è meglio del PNG per le immagini principali di un sito?',
        answer:
          'Per immagini principali fotografiche o complesse, sì: WebP all’85% sembra uguale al PNG ma si carica molto più velocemente. Il PNG resta migliore per piccole icone piatte, pixel art o qualsiasi risorsa in cui la qualità matematicamente senza perdita sia un requisito rigido.',
      },
      {
        question: 'La conversione da PNG a WebP funziona nei browser mobili?',
        answer:
          'Sì. Il cursore di qualità, la coda in batch, il visualizzatore di confronto e il download ZIP funzionano in Safari su iOS e in Chrome su Android senza installare app. I batch grandi richiedono solo un po’ più di tempo sui processori dei telefoni.',
      },
      {
        question: 'Quale nome di file ottengono i file WebP convertiti?',
        answer:
          'I download singoli mantengono il nome originale del file, ripulito, con estensione .webp, quindi logo.png diventa logo.webp. I batch di due o più file vengono esportati insieme dentro compressmypic_png_to_webp.zip.',
      },
      {
        question: 'Posso convertire uno screenshot PNG con testo in WebP senza lettere sfocate?',
        answer:
          'Sì, con qualità dall’85% al 90% il testo degli screenshot resta nitido perché WebP preserva bene i bordi ad alto contrasto. Sotto il 70% le lettere piccole possono ammorbidirsi, quindi controlla nel visualizzatore Confronta e alza la qualità se il testo sembra sfocato.',
      },
      {
        question: 'Questo strumento mantiene il profilo colore ICC del PNG nel WebP?',
        answer:
          'No. La ricodifica su Canvas rimuove il profilo ICC incorporato e rappresenta i colori in sRGB standard, che è ciò che i browser usano per la visualizzazione web. Per la maggior parte delle grafiche a schermo la differenza visibile è trascurabile, ma il lavoro cromatico critico per la stampa dovrebbe restare nel formato originale.',
      },
      {
        question: 'Quando dovrei scegliere PNG in WebP invece di PNG in JPG?',
        answer:
          'Scegli WebP ogni volta che l’immagine deve restare trasparente o caricarsi velocemente su un sito web. Scegli JPG solo quando la destinazione — un client e-mail, un documento Office o un vecchio portale di caricamento — non può aprire WebP e sei disposto a rinunciare alla trasparenza per uno sfondo solido.',
      },
      {
        question: 'Un PNG interlacciato può essere convertito in WebP qui?',
        answer:
          'Sì. Il decodificatore di immagini nativo del tuo browser legge in modo pulito sia i flussi PNG standard sia quelli interlacciati (Adam7) prima di disegnarli su Canvas, quindi i file interlacciati vengono convertiti esattamente come i PNG normali.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/web-image-optimizer', '/image-converter'],
  },
  {
    slug: '/webp-to-png',
    name: 'Convertitore da WebP a PNG',
    shortDescription: 'Converti immagini WebP in PNG senza perdita con la trasparenza intatta.',
    category: 'convert',
    seoTitle: 'Convertitore WebP in PNG gratis – Senza perdita, trasparente',
    seoDescription:
      'Converti WebP in PNG senza perdita gratis online nel browser. La trasparenza resta intatta, le dimensioni non cambiano e i batch si esportano in un unico ZIP.',
    h1: 'Convertitore gratuito online da WebP a PNG',
    subtitle:
      'Trasforma i download WebP in file PNG universali senza perdita con il nostro convertitore gratuito da WebP a PNG, interamente nel tuo browser. Pensato per designer, editor e chiunque abbia un’app o una tipografia che rifiuta WebP, converte file WebP fino a 25 MB ciascuno senza alcuna perdita di qualità e con trasparenza alfa completa, oltre a elaborazione in batch e download ZIP.',
    howToSteps: [
      {
        title: 'Trascina file WebP fino a 25 MB ciascuno',
        description:
          'Carica una o più immagini .webp da download, chat o siti web nella zona di caricamento.',
      },
      {
        title: 'Attendi la conversione PNG senza perdita',
        description:
          'Ogni WebP viene disegnato su una tela trasparente ed esportato come PNG senza perdita automaticamente: non c’è un cursore di qualità perché il PNG è senza perdita.',
      },
      {
        title: 'Controlla la trasparenza nell’anteprima',
        description:
          'Le aree trasparenti si vedono su uno sfondo a scacchiera, e ogni scheda elenca le dimensioni del file originale e convertito.',
      },
      {
        title: 'Confronta il PNG con il WebP originale',
        description:
          'Clicca Confronta su una scheda per ispezionare bordi, testo e trasparenza nel visualizzatore a metà.',
      },
      {
        title: 'Scarica i file PNG o Scarica tutto (ZIP)',
        description:
          'Salva i singoli file .png oppure raggruppa il batch in compressmypic_webp_to_png.zip in un clic.',
      },
    ],
    features: [
      {
        title: 'Mantiene intatta la trasparenza alfa',
        description: 'I loghi e gli adesivi WebP trasparenti restano trasparenti nel PNG risultante.',
      },
      {
        title: 'Supporto universale degli editor',
        description: 'Apri i PNG convertiti in qualsiasi strumento di design, presentazione o portale di caricamento senza problemi di compatibilità WebP.',
      },
      {
        title: 'Supporto coda in batch',
        description: 'Converti più download WebP in PNG in un clic ed esporta un unico ZIP.',
      },
      {
        title: 'Elaborazione privata sul dispositivo',
        description: 'I file non lasciano mai il tuo dispositivo: la conversione avviene nella memoria locale del browser.',
      },
    ],
    faqs: [
      {
        question: 'Convertire WebP in PNG è davvero senza perdita?',
        answer:
          'Sì. Il PNG memorizza ogni pixel decodificato esattamente come il browser lo ha letto dal WebP, senza ulteriore perdita da compressione. L’unico limite di qualità è la compressione che lo stesso WebP originale aveva già applicato: questo strumento non aggiunge mai un secondo giro di danno con perdita.',
      },
      {
        question: 'Un logo WebP trasparente resterà trasparente come PNG?',
        answer:
          'Sì. L’intero canale alfa viene trasferito, quindi i pixel trasparenti restano trasparenti e i bordi semitrasparenti mantengono la loro fusione delicata. La miniatura del risultato mostra la trasparenza su uno sfondo a scacchiera, così puoi confermarla prima di scaricare.',
      },
      {
        question: 'Perché il PNG risultante è più grande del WebP che ho caricato?',
        answer:
          'Il PNG usa la compressione DEFLATE senza perdita, mentre WebP usa una compressione moderna molto più aggressiva, quindi gli stessi pixel richiedono semplicemente più byte come PNG. Il file più grande è il prezzo onesto della compatibilità universale e di zero ulteriore perdita di qualità.',
      },
      {
        question: 'Posso convertire un WebP animato in PNG qui?',
        answer:
          'Un WebP animato viene esportato come un PNG fermo del suo primo fotogramma, perché il PNG non può memorizzare il movimento. Quel fotogramma fermo va bene per miniature, documenti e adesivi; per la versione in movimento, tieni il file WebP originale.',
      },
      {
        question: 'Il PNG manterrà la stessa larghezza e altezza del WebP?',
        answer:
          'Sì. Ogni .png convertito mantiene il 100% delle dimensioni esatte in pixel del WebP originale, quindi nulla viene ritagliato o ridimensionato. Usa dopo il Ridimensionatore di immagini se ti servono anche dimensioni più piccole.',
      },
      {
        question: 'I file WebP vengono caricati su un server durante la conversione?',
        answer:
          'No. La conversione avviene su HTML5 Canvas dentro la tua scheda del browser, quindi le tue immagini non vengono mai inviate a un server, memorizzate o viste da altri. Chiudendo la scheda vengono rimosse dalla memoria del browser.',
      },
      {
        question: 'Posso convertire un batch di immagini WebP in PNG in una volta?',
        answer:
          'Sì. Trascina più file .webp fino a 25 MB ciascuno nella coda e scarica tutto insieme in compressmypic_webp_to_png.zip. Ogni file viene convertito separatamente, quindi un file difettoso non blocca mai gli altri.',
      },
      {
        question: 'Quanto può essere grande un singolo file WebP qui?',
        answer:
          'Ogni file WebP può arrivare fino a 25 MB, il che copre download ad alta risoluzione e screenshot grandi. Poiché la conversione avviene sul tuo dispositivo, i file grandi vengono elaborati alla velocità della CPU locale, senza attese di caricamento.',
      },
      {
        question: 'C’è un cursore di qualità per WebP in PNG?',
        answer:
          'No, e non serve: il PNG è un formato senza perdita, quindi non c’è un compromesso qualità-dimensioni da regolare. Lo strumento mostra invece una nota di Codifica PNG senza perdita, e ogni pixel viene preservato esattamente.',
      },
      {
        question: 'Dove posso usare i file PNG convertiti?',
        answer:
          'Ovunque sia accettato il PNG: Photoshop, Figma, Canva, PowerPoint, Word, tipografie e portali di caricamento che rifiutano WebP. Il PNG è il formato raster più universalmente modificabile, ed è esattamente il motivo per cui esiste questa conversione.',
      },
      {
        question: 'Il convertitore mantiene i metadati WebP come EXIF?',
        answer:
          'No. Disegnare i pixel su HTML5 Canvas rimuove i dati EXIF, XMP e i profili ICC incorporati, quindi i PNG risultanti sono leggeri e privi di dettagli nascosti di posizione o fotocamera.',
      },
      {
        question: 'Come confermo che la trasparenza è sopravvissuta prima di scaricare?',
        answer:
          'La miniatura del risultato mostra le aree trasparenti su uno sfondo a scacchiera, e il pulsante Confronta apre un visualizzatore a metà dove puoi trascinare sull’immagine per confermare che i bordi si fondano con delicatezza. Se lo sfondo sembra solido, il WebP originale non aveva trasparenza.',
      },
      {
        question: 'Posso convertire screenshot WebP con testo in PNG senza perdita di qualità?',
        answer:
          'Sì. Poiché il PNG è senza perdita, il testo degli screenshot, le etichette dell’interfaccia e le linee sottili restano perfetti in pixel, più nitidi di qualsiasi ricodifica JPG. Questo lo rende la scelta giusta quando uno screenshot deve essere modificato o stampato in seguito.',
      },
      {
        question: 'Quale nome di file manterrà il download PNG?',
        answer:
          'I download singoli mantengono il nome originale del file, ripulito, con estensione .png, quindi sticker.webp diventa sticker.png. I batch di due o più file vengono esportati insieme dentro compressmypic_webp_to_png.zip.',
      },
      {
        question: 'La conversione da WebP a PNG funziona sui telefoni?',
        answer:
          'Sì. La zona di caricamento, la coda in batch, il visualizzatore di confronto e il download ZIP funzionano in Safari su iOS e in Chrome su Android senza installare app. I batch grandi richiedono solo un po’ più di tempo sui processori dei telefoni.',
      },
      {
        question: 'Quando dovrei scegliere WebP in PNG invece di WebP in JPG?',
        answer:
          'Scegli PNG quando devi mantenere la trasparenza o ti serve una qualità senza perdita e perfetta in pixel per modificare, disegnare o stampare. Scegli JPG quando ti serve il file più piccolo e ampiamente compatibile e puoi vivere con uno sfondo solido e una leggera perdita da compressione.',
      },
      {
        question: 'Un file WebP senza estensione può essere convertito?',
        answer:
          'Non direttamente: questa pagina filtra gli input in base all’estensione .webp e al tipo MIME WebP, quindi rinomina prima il file in modo che termini con .webp. Se il file è in realtà un JPG o un PNG etichettato male dal sito, usa invece il convertitore corrispondente.',
      },
      {
        question: 'Perché un designer avrebbe bisogno di PNG invece di WebP?',
        answer:
          'Gli strumenti di design, gli editor a livelli e i flussi di stampa spesso hanno bisogno del PNG per maschere, selezioni e sovrapposizioni trasparenti che WebP non può offrire nelle loro pipeline. Il PNG garantisce anche che ogni modifica futura parta da pixel esatti, non da una decodifica con perdita.',
      },
      {
        question: 'Lo strumento supporta file WebP con codifica senza perdita?',
        answer:
          'Sì. I file WebP senza perdita vengono decodificati in modo pulito nel browser e ricodificati come PNG senza perdita con ogni pixel preservato. Che il WebP originale fosse con o senza perdita, il PNG risultante non aggiunge ulteriore perdita di qualità.',
      },
      {
        question: 'Cosa succede se un file WebP è danneggiato o non è un vero WebP?',
        answer:
          'Quel file mostra un chiaro messaggio di errore per file che spiega che non è stato possibile decodificarlo, mentre gli altri file del batch continuano a convertirsi normalmente. Scaricare di nuovo il WebP originale dalla sua fonte di solito risolve un file troncato o etichettato male.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/jpg-to-png', '/image-converter'],
  },
  {
    slug: '/svg-to-png',
    name: 'Convertitore da SVG a PNG',
    shortDescription: 'Converti grafiche vettoriali SVG in PNG trasparenti e nitidi da 1× a 4×.',
    category: 'convert',
    seoTitle: 'Convertitore SVG in PNG gratis – Esporta 1x–4x nitidi',
    seoDescription:
      'Converti vettori SVG in PNG trasparente gratis online nel browser. Esporta PNG nitidi 1x, 2x, 3x o 4x in alta risoluzione, con limiti sulle risorse esterne.',
    h1: 'Convertitore gratuito online da SVG a PNG',
    subtitle:
      'Converti loghi, icone e illustrazioni SVG in PNG trasparenti e nitidi con il nostro convertitore gratuito da SVG a PNG, interamente nel tuo browser. Pensato per designer e sviluppatori che vogliono esportazioni ad alta risoluzione per slide, documenti e app store, rende gli SVG autonomi in scala 1×, 2×, 3× o 4× (fino a 8000px) con elaborazione in batch e download ZIP.',
    howToSteps: [
      {
        title: 'Trascina file SVG fino a 25 MB ciascuno',
        description:
          'Carica uno o più file vettoriali .svg con forme, tracciati, gradienti o stili incorporati.',
      },
      {
        title: 'Scegli una scala di export raster (1×–4×)',
        description:
          'Scegli 1× per la dimensione intrinseca dell’SVG, oppure 2×–4× per esportazioni PNG nitide Retina e ad alta risoluzione.',
      },
      {
        title: 'Clicca Riconverti tutto dopo aver cambiato scala',
        description:
          'Le modifiche alla scala valgono quando riconverti, così anteprima e download corrispondono alla dimensione scelta.',
      },
      {
        title: 'Leggi la nota sulle risorse esterne',
        description:
          'Immagini esterne, fogli di stile e webfont dentro un SVG sono bloccati dalla sicurezza del canvas del browser e non appariranno nel PNG.',
      },
      {
        title: 'Confronta il PNG rasterizzato',
        description:
          'Clicca Confronta su una scheda per ispezionare bordi nitidi e trasparenza nel visualizzatore a metà.',
      },
      {
        title: 'Scarica i file PNG o Scarica tutto (ZIP)',
        description:
          'Salva i singoli file .png oppure raggruppa il batch in compressmypic_svg_to_png.zip in un clic.',
      },
    ],
    features: [
      {
        title: 'Export ad alta risoluzione 1×, 2×, 3× e 4×',
        description: 'Scala piccole icone da 24px o loghi da 100px in modo pulito fino a 4× di risoluzione prima della rasterizzazione.',
      },
      {
        title: 'Sfondo trasparente preservato',
        description: 'Esporta PNG nitidi con canale alfa, pronti per slide, intestazioni web e presentazioni di design.',
      },
      {
        title: 'Ambito onesto del canvas autonomo',
        description: 'Documenta chiaramente che le forme e gli stili vettoriali SVG incorporati vengono renderizzati in modo pulito, mentre gli URL di immagini esterne o i webfont esterni dentro gli SVG possono essere bloccati dal sandbox del Canvas del browser.',
      },
      {
        title: 'Rasterizzazione SVG in batch',
        description: 'Converti interi pacchetti di icone in PNG in un’unica passata e scarica uno ZIP.',
      },
    ],
    faqs: [
      {
        question: 'Il mio SVG usa una foto collegata: perché manca nel PNG?',
        answer:
          'Per sicurezza, i browser isolano i file SVG disegnati su HTML5 Canvas e bloccano il recupero di URL <image> esterni, quindi nessuna foto collegata dal web può caricarsi durante la rasterizzazione. Incorpora l’immagine direttamente nel file SVG oppure sostituiscila con forme vettoriali incorporate, e il PNG verrà renderizzato completamente.',
      },
      {
        question: 'Posso usare un webfont dentro un SVG per l’export PNG?',
        answer:
          'I webfont esterni referenziati tramite URL sono bloccati dallo stesso sandbox del canvas, quindi il testo impostato in un font remoto torna a un font di sistema o sparisce. Usa font di sistema, converti il testo in tracciati nel tuo editor oppure incorpora i dati del font direttamente nel file SVG.',
      },
      {
        question: 'Quale scala dovrei scegliere per trasformare un’icona da 24px in un PNG nitido da 96px?',
        answer:
          'Scegli 4× sotto Scala di export raster e clicca Riconverti tutto: un’icona da 24px diventa un PNG nitido da 96px perché i vettori vengono renderizzati di nuovo alla dimensione maggiore invece di stirare i pixel. Usa 2× per un export da 48px e ricorda che l’output è limitato a 8000px sul lato più lungo.',
      },
      {
        question: 'Qual è il PNG più grande che un SVG può produrre qui?',
        answer:
          'La scala di export è limitata a 8000px sul lato più lungo, quindi un SVG molto grande a 4× si ferma a quel tetto. Per la maggior parte delle icone e dei loghi il limite non conta mai: un logo da 100px a 4× è solo 400px, molto al di sotto del limite.',
      },
      {
        question: 'La conversione da SVG a PNG mantiene lo sfondo trasparente?',
        answer:
          'Sì. A meno che l’SVG stesso non disegni un rettangolo di sfondo, il PNG esportato mantiene uno sfondo trasparente con canale alfa pulito, pronto per slide, intestazioni e presentazioni di design. L’anteprima mostra la trasparenza su uno sfondo a scacchiera.',
      },
      {
        question: 'I file SVG vengono caricati su un server?',
        answer:
          'No. La rasterizzazione avviene su HTML5 Canvas dentro la tua scheda del browser, quindi i tuoi file vettoriali non lasciano mai il tuo computer. Chiudendo la scheda vengono rimossi dalla memoria del browser.',
      },
      {
        question: 'Posso convertire un intero pacchetto di icone SVG in una volta?',
        answer:
          'Sì. Trascina più file .svg fino a 25 MB ciascuno nella coda, scegli un’unica scala per l’intero batch e scarica tutto insieme in compressmypic_svg_to_png.zip. Ogni icona viene rasterizzata separatamente.',
      },
      {
        question: 'Cosa fa fallire la rasterizzazione di un SVG con un errore?',
        answer:
          'La causa più comune è XML non valido: tag non chiusi, attributi malformati o un file che non è davvero markup SVG. Apri il file in un editor di testo o in un editor vettoriale, correggi l’errore di sintassi e riprova: il messaggio di errore appare per singolo file, quindi gli altri SVG continuano a convertirsi.',
      },
      {
        question: 'Gradienti e opacità dentro un SVG vengono renderizzati correttamente?',
        answer:
          'Sì. Gradienti lineari e radiali incorporati, attributi di opacità e riempimenti in stile fusione definiti dentro l’SVG vengono renderizzati in modo pulito su Canvas. Solo le risorse recuperate dall’esterno del file — immagini esterne, fogli di stile e font — sono bloccate.',
      },
      {
        question: 'Il testo dentro il mio SVG verrà esportato come testo PNG nitido?',
        answer:
          'Sì, quando il testo usa font di sistema installati sul tuo dispositivo, viene rasterizzato in modo nitido a qualsiasi scala. Il testo in un webfont esterno torna a un font predefinito, quindi converti il testo in tracciati in Illustrator, Figma o Inkscape per risultati garantiti.',
      },
      {
        question: 'Posso convertire un SVG che fa riferimento a un file CSS esterno?',
        answer:
          'No. I fogli di stile esterni sono bloccati dalla sicurezza del canvas del browser, quindi le classi definite in un file .css collegato non verranno applicate e le forme potrebbero risultare senza stile. Sposta gli stili in linea con attributi style o un blocco <style> dentro l’SVG stesso.',
      },
      {
        question: 'Il PNG risultante è senza perdita?',
        answer:
          'Sì. I pixel rasterizzati vengono salvati come PNG senza perdita, quindi bordi, testo e colori piatti restano perfetti in pixel alla dimensione esportata. Riesporta a una scala maggiore se ti serve più dettaglio: non c’è un cursore di qualità perché il PNG non ha passaggi con perdita.',
      },
      {
        question: 'Qual è la dimensione del PNG in scala 1×?',
        answer:
          'A 1×, il PNG corrisponde alle dimensioni intrinseche dell’SVG date dai suoi attributi width e height o dal viewBox. Un’icona 24×24 viene esportata come 24×24 pixel, mentre un SVG senza dimensione intrinseca usa le dimensioni del viewBox.',
      },
      {
        question: 'Posso convertire file SVG sul mio telefono?',
        answer:
          'Sì. La zona di caricamento, il selettore di scala, il visualizzatore di confronto e il download ZIP funzionano in Safari su iOS e in Chrome su Android senza installare app. I pacchetti di icone grandi richiedono solo un po’ più di tempo sui processori dei telefoni.',
      },
      {
        question: 'Quale nome di file manterrà il PNG esportato?',
        answer:
          'I download singoli mantengono il nome originale del file, ripulito, con estensione .png, quindi logo.svg diventa logo.png. I batch di due o più file vengono esportati insieme dentro compressmypic_svg_to_png.zip.',
      },
      {
        question: 'Il convertitore supporta animazioni SVG (SMIL/CSS)?',
        answer:
          'No. La rasterizzazione cattura un singolo fotogramma statico dell’SVG, quindi le animazioni SMIL e CSS non passano nel PNG. Per un risultato animato, esporta l’animazione come video o GIF dal tuo strumento di design.',
      },
      {
        question: 'Posso rasterizzare un SVG con un’immagine incorporata come data URI?',
        answer:
          'Di solito sì. Le immagini incorporate direttamente nel file come data URI base64 fanno parte dell’SVG stesso, quindi nulla viene recuperato dall’esterno e in genere vengono renderizzate. Le immagini collegate con URL http sono quelle bloccate dalla sicurezza del canvas.',
      },
      {
        question: 'Quando dovrei usare SVG in PNG invece di tenere l’SVG?',
        answer:
          'Usa il PNG quando la destinazione ha bisogno di un’immagine raster: PowerPoint, Word, post social, screenshot di app store o qualsiasi strumento che non può aprire SVG. Tieni l’SVG quando la grafica deve restare infinitamente scalabile su un sito web.',
      },
      {
        question: 'Convertire SVG in PNG cambia i colori?',
        answer:
          'I colori vengono renderizzati come definiti nell’SVG e l’output è un PNG sRGB standard. Canvas rimuove i profili ICC incorporati, quindi la corrispondenza cromatica critica per la stampa dovrebbe restare nel file vettoriale originale; per gli schermi, la differenza visibile è trascurabile.',
      },
      {
        question: 'Qual è la dimensione massima di file SVG accettata?',
        answer:
          'Ogni file SVG può arrivare fino a 25 MB, il che copre anche file illustrati enormi con migliaia di tracciati. Gli SVG molto complessi richiedono solo un secondo o due in più per essere rasterizzati sul tuo dispositivo.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/png-to-webp', '/image-resizer', '/image-converter'],
  },
  {
    slug: '/avif-to-jpg',
    name: 'Convertitore da AVIF a JPG',
    shortDescription: 'Converti immagini AVIF in JPG universale tramite il decodificatore del browser.',
    category: 'convert',
    seoTitle: 'Convertitore AVIF in JPG gratis – Apri AVIF ovunque',
    seoDescription:
      'Converti immagini AVIF in JPG universale gratis online nel browser. Decodifica AVIF nativa, scelta del colore di fondo per la trasparenza e export ZIP.',
    h1: 'Convertitore gratuito online da AVIF a JPG',
    subtitle:
      'Trasforma le moderne immagini .avif in file .jpg supportati ovunque con il nostro convertitore gratuito da AVIF a JPG, usando il decodificatore AVIF integrato del tuo browser. Pensato per chi ha scaricato un file AVIF che il suo editor, la sua app office o il suo modulo di caricamento non può aprire, converte file AVIF fino a 25 MB ciascuno con qualità all’88% di default, con selettore di colore di fondo ed export ZIP in batch — senza caricare mai nulla.',
    howToSteps: [
      {
        title: 'Trascina immagini AVIF fino a 25 MB ciascuna',
        description:
          'Carica file .avif in un browser moderno con decodifica AVIF nativa: Chrome, Edge, Firefox o Safari.',
      },
      {
        title: 'Scegli un colore di fondo per le aree trasparenti',
        description:
          'Scegli Bianco (#ffffff), Nero (#000000), Grigio chiaro (#f8fafc) o un qualsiasi colore esadecimale personalizzato, perché il JPG non può memorizzare la trasparenza.',
      },
      {
        title: 'Imposta la qualità di uscita JPG (20%–100%)',
        description:
          'Tieni il nitido 88% di default oppure sposta il cursore verso il 20% per file minuscoli e verso il 100% per il massimo dettaglio, poi clicca Riconverti tutto.',
      },
      {
        title: 'Confronta il JPG con l’AVIF originale',
        description:
          'Clicca Confronta su una scheda per verificare dettaglio, colore e bordi nel visualizzatore a metà prima di salvare.',
      },
      {
        title: 'Scarica i file JPG o Scarica tutto (ZIP)',
        description:
          'Salva i singoli file .jpg oppure raggruppa l’intero batch in compressmypic_avif_to_jpg.zip in un clic.',
      },
    ],
    features: [
      {
        title: 'Decodifica AVIF nativa del browser',
        description: 'Sfrutta il decodificatore AVIF hardware/software del tuo browser moderno in locale, senza passaggi dal server.',
      },
      {
        title: 'Compatibilità di formato onesta',
        description: 'Pensato rigorosamente per decodificare AVIF in JPG universale (oppure usa gli strumenti JPG/PNG/WebP per altri formati: l’output AVIF non è offerto).',
      },
      {
        title: 'Selettore di colore di fondo per la trasparenza',
        description: 'Le aree AVIF trasparenti si fondono in modo pulito su bianco o sul tuo colore esadecimale personalizzato.',
      },
      {
        title: 'Export ZIP in batch',
        description: 'Converti più download AVIF in JPG in un’unica sessione del browser.',
      },
    ],
    faqs: [
      {
        question: 'Cos’è AVIF e perché alcune app non riescono ad aprirlo?',
        answer:
          'AVIF è un formato di immagine moderno basato sulla compressione video AV1 che memorizza le foto in dimensioni molto più piccole del JPG. Poiché è più recente, molti editor datati, suite office, stampanti e portali di caricamento non hanno mai aggiunto un decodificatore AVIF, quindi convertire in JPG è il modo più veloce per rendere l’immagine utilizzabile ovunque.',
      },
      {
        question: 'Quali browser possono decodificare AVIF per la conversione qui?',
        answer:
          'Chrome, Edge, Firefox e Safari moderni decodificano tutti AVIF in modo nativo nel browser, ed è ciò che usa questo strumento. Se apri la pagina in un browser molto datato, ogni file mostra un chiaro errore invece di convertirsi: aggiornare il browser risolve il problema.',
      },
      {
        question: 'Cosa succede se il mio browser non riesce a decodificare un file AVIF?',
        answer:
          'Il file mostra un esplicito messaggio di errore per file che spiega che il tuo browser non è riuscito a decodificarlo, mentre gli altri file del batch continuano a convertirsi normalmente. Passare a una versione attuale di Chrome, Firefox, Edge o Safari risolve il problema in quasi tutti i casi.',
      },
      {
        question: 'Convertire AVIF in JPG perde qualità?',
        answer:
          'Una certa perdita è inevitabile perché il JPG ricodifica i pixel con compressione con perdita, mentre AVIF è molto più efficiente alla stessa qualità. Con l’88% di default, la differenza è praticamente invisibile per le foto; solo un esame estremo dei pixel sulle texture fini rivela un ammorbidimento.',
      },
      {
        question: 'Le aree AVIF trasparenti diventeranno nere nel JPG?',
        answer:
          'No. Le aree trasparenti vengono riempite con il colore di fondo scelto — bianco di default — così loghi e ritagli ottengono uno sfondo solido e pulito invece di un riquadro nero. Scegli Nero, Grigio chiaro o un qualsiasi colore esadecimale personalizzato prima di convertire.',
      },
      {
        question: 'Posso convertire immagini AVIF con trasparenza in JPG in modo pulito?',
        answer:
          'Sì. Il selettore di colore di fondo fonde i bordi semitrasparenti in modo delicato sullo sfondo scelto, così ombre morbide e curve smussate sembrano naturali invece di tagliarsi in contorni rigidi. Controlla il visualizzatore Confronta per confermare la fusione.',
      },
      {
        question: 'I file AVIF vengono caricati su un server?',
        answer:
          'No. Decodifica e ricodifica avvengono entrambe in locale usando il decodificatore AVIF nativo del tuo browser e HTML5 Canvas, quindi le tue immagini non lasciano mai il tuo dispositivo. Chiudendo la scheda vengono rimosse dalla memoria del browser.',
      },
      {
        question: 'Come converto diversi download AVIF in una volta?',
        answer:
          'Trascina più file .avif fino a 25 MB ciascuno nella coda, scegli un unico colore di fondo e un’unica qualità per l’intero batch e scarica tutto insieme in compressmypic_avif_to_jpg.zip. Ogni file viene convertito separatamente.',
      },
      {
        question: 'Qual è il file AVIF più grande accettato?',
        answer:
          'Ogni file AVIF può arrivare fino a 25 MB, il che copre download ad alta risoluzione e acquisizioni di fotocamere. Poiché la decodifica avviene sul tuo dispositivo, i file grandi vengono elaborati alla velocità della CPU locale, senza attese di caricamento.',
      },
      {
        question: 'C’è un modo per trasformare un JPG in AVIF qui?',
        answer:
          'No. HTML5 Canvas non può codificare universalmente AVIF in tutti i browser, quindi questo sito decodifica AVIF solo in output affidabili JPG, PNG e WebP. Per l’output AVIF ti servirebbe un encoder desktop dedicato.',
      },
      {
        question: 'Il JPG mantiene le stesse dimensioni in pixel dell’AVIF?',
        answer:
          'Sì. Ogni .jpg convertito mantiene il 100% della larghezza e dell’altezza esatte in pixel dell’AVIF originale, quindi nulla viene ritagliato o ridimensionato. Usa dopo il Ridimensionatore di immagini se ti servono anche dimensioni più piccole.',
      },
      {
        question: 'Quale percentuale di qualità si adatta meglio alle foto AVIF?',
        answer:
          'L’88% di default è ideale per la maggior parte delle foto: i dettagli restano nitidi mentre i file restano piccoli. Per scatti molto dettagliati o immagini che vuoi modificare ulteriormente, alza la qualità al 92% o al 95%; per condivisioni rapide, l’80% di solito basta.',
      },
      {
        question: 'Come appaiono le foto AVIF HDR o a gamma cromatica ampia dopo la conversione?',
        answer:
          'Vengono esportate come un JPG sRGB standard, quindi le luci HDR estreme vengono mappate nella gamma normale di visualizzazione e i colori molto saturi a gamma ampia si spostano leggermente verso sRGB. Per le foto di tutti i giorni il risultato sembra naturale; per lavori cromatici critici, tieni l’AVIF originale.',
      },
      {
        question: 'Posso controllare il JPG convertito prima di scaricarlo?',
        answer:
          'Sì. Clicca Confronta su una scheda di risultato per aprire il visualizzatore a metà e trascina sull’immagine per ispezionare dettaglio, colore e bordi rispetto all’AVIF originale. Ogni scheda mostra anche le dimensioni originale e convertita.',
      },
      {
        question: 'Se il primo risultato sembra sbagliato, posso modificare le impostazioni e riprovare?',
        answer:
          'Sì. Scegli un altro campione di fondo oppure sposta il cursore di qualità in qualsiasi momento e clicca Riconverti tutto per rigenerare ogni file caricato senza ricaricare. I tuoi file AVIF originali restano nella coda finché non li rimuovi.',
      },
      {
        question: 'Quale nome di file manterrà il download JPG?',
        answer:
          'I download singoli mantengono il nome originale del file, ripulito, con estensione .jpg, quindi foto.avif diventa foto.jpg. I batch di due o più file vengono esportati insieme dentro compressmypic_avif_to_jpg.zip.',
      },
      {
        question: 'La conversione da AVIF a JPG funziona nei browser mobili?',
        answer:
          'Sì, nei browser mobili moderni con decodifica AVIF nativa, come Chrome attuale su Android e Safari su iOS. Il selettore di fondo, il cursore di qualità e il download ZIP funzionano senza installare app.',
      },
      {
        question: 'Quando dovrei convertire AVIF in JPG invece che AVIF in PNG?',
        answer:
          'Scegli JPG quando ti serve un file piccolo e universalmente compatibile per e-mail, Office o portali di caricamento. Scegli PNG quando devi mantenere la trasparenza o ti serve una qualità senza perdita e perfetta in pixel per modificare, tenendo presente che i file PNG saranno molto più grandi.',
      },
      {
        question: 'Perché il JPG a volte è più grande dell’AVIF?',
        answer:
          'AVIF comprime molto più efficientemente del JPG, quindi un piccolo AVIF ricodificato come JPG all’88% può facilmente finire più grande della fonte. È normale: stai scambiando la dimensione del file con la compatibilità universale. Abbassare la qualità verso il 75% di solito riduce di nuovo il JPG.',
      },
      {
        question: 'Il convertitore rimuove i metadati AVIF?',
        answer:
          'Sì. Disegnare i pixel su HTML5 Canvas rimuove i dati EXIF, XMP e i profili ICC incorporati, quindi i JPG risultanti sono leggeri e privi di dettagli nascosti di posizione o fotocamera.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/heic-to-jpg', '/jpg-to-webp', '/image-converter'],
  },
  {
    slug: '/bmp-to-jpg',
    name: 'Convertitore da BMP a JPG',
    shortDescription: 'Converti enormi bitmap BMP non compressi in file JPG compatti.',
    category: 'convert',
    seoTitle: 'Convertitore BMP in JPG gratis – Riduci bitmap enormi',
    seoDescription:
      'Converti bitmap BMP non compressi in JPG compatti gratis online nel browser. Riduci le dimensioni dell’85–95% in privato, con cursore di qualità e download ZIP.',
    h1: 'Convertitore gratuito online da BMP a JPG',
    subtitle:
      'Trasforma enormi bitmap BMP di Windows non compressi in file JPG leggeri e condivisibili con il nostro convertitore gratuito da BMP a JPG, direttamente nel tuo browser. Pensato per chi sta svuotando cartelle di screenshot .bmp legacy, scansioni o export di Paint, converte file BMP fino a 25 MB ciascuno con qualità all’88% di default — riducendoli in genere dell’85–95% — con elaborazione in batch e download ZIP.',
    howToSteps: [
      {
        title: 'Trascina bitmap BMP fino a 25 MB ciascuna',
        description:
          'Carica uno o più file .bmp da screenshot Windows, scansioni o cartelle legacy nella zona di caricamento.',
      },
      {
        title: 'Imposta la qualità di uscita JPG (20%–100%)',
        description:
          'Tieni il nitido 88% di default oppure sposta il cursore verso il 20% per file minuscoli e verso il 100% per il massimo dettaglio, poi clicca Riconverti tutto.',
      },
      {
        title: 'Controlla il risparmio di spazio su ogni scheda',
        description:
          'Ogni risultato mostra l’enorme dimensione BMP originale, la dimensione JPG compatta e la percentuale risparmiata.',
      },
      {
        title: 'Confronta il JPG con il BMP originale',
        description:
          'Clicca Confronta su una scheda per verificare che testo e dettagli siano rimasti nitidi nel visualizzatore a metà.',
      },
      {
        title: 'Scarica i file JPG o Scarica tutto (ZIP)',
        description:
          'Salva i singoli file .jpg oppure raggruppa il batch in compressmypic_bmp_to_jpg.zip in un clic.',
      },
    ],
    features: [
      {
        title: 'Riduzione tipica oltre il 90%',
        description: 'Le bitmap BMP non compresse memorizzano pixel grezzi; la compressione JPG le riduce drasticamente per e-mail e web.',
      },
      {
        title: 'Preserva le dimensioni in pixel',
        description: 'Mantiene larghezza e altezza originali esatte modernizzando il formato del contenitore.',
      },
      {
        title: 'Coda in batch + download ZIP',
        description: 'Ripulisci cartelle di screenshot o scansioni .bmp legacy in un’unica passata veloce.',
      },
      {
        title: 'Privacy 100% lato client',
        description: 'Zero caricamenti: la conversione avviene in locale sul tuo computer.',
      },
    ],
    faqs: [
      {
        question: 'Perché i file BMP sono così enormi rispetto al JPG?',
        answer:
          'BMP è un formato non compresso: memorizza quasi ogni pixel come dati di colore grezzi con quasi nessuna compressione, quindi un singolo screenshot può pesare decine di megabyte. Il JPG usa una compressione con perdita intelligente che scarta dati che i tuoi occhi notano a malapena, ed è per questo che la stessa immagine si riduce drasticamente.',
      },
      {
        question: 'Quanto spazio posso aspettarmi di risparmiare convertendo BMP in JPG?',
        answer:
          'Poiché i file BMP sono in genere non compressi, convertire in JPG all’88% riduce di routine le dimensioni del file dall’85% al 95%: una bitmap da 10 MB diventa spesso un JPG da 500 KB a 1,5 MB. Le scansioni fotografiche risparmiano di più, mentre le grafiche piatte a colore unico risparmiano un po’ meno.',
      },
      {
        question: 'Convertire BMP in JPG cambia le dimensioni dell’immagine?',
        answer:
          'No. Ogni .jpg convertito mantiene il 100% della larghezza e dell’altezza esatte in pixel del BMP originale, quindi nulla viene ritagliato o ridimensionato. Usa dopo il Ridimensionatore di immagini se ti servono anche dimensioni più piccole.',
      },
      {
        question: 'Quale qualità mantiene leggibili gli screenshot BMP?',
        answer:
          'L’88% di default mantiene nitidi testo e dettagli dell’interfaccia degli screenshot rimuovendo la maggior parte del peso della bitmap. Per scansioni con caratteri fini o font piccoli, alza la qualità al 92% o al 95%; per condivisioni rapide, l’80% di solito basta.',
      },
      {
        question: 'I file BMP vengono caricati su un server?',
        answer:
          'No. La conversione avviene su HTML5 Canvas dentro la tua scheda del browser, quindi i tuoi screenshot e le tue scansioni non lasciano mai il tuo computer. Chiudendo la scheda vengono rimossi dalla memoria del browser.',
      },
      {
        question: 'Come converto in batch una cartella piena di scansioni BMP?',
        answer:
          'Trascina più file .bmp fino a 25 MB ciascuno nella coda, scegli un’unica qualità per l’intero batch e scarica tutto insieme in compressmypic_bmp_to_jpg.zip. Ogni file viene convertito separatamente.',
      },
      {
        question: 'Qual è il file BMP più grande accettato?',
        answer:
          'Ogni file BMP può arrivare fino a 25 MB, il che copre screenshot grandi e scansioni ad alta risoluzione. Poiché la conversione avviene sul tuo dispositivo, i file grandi vengono elaborati alla velocità della CPU locale, senza attese di caricamento.',
      },
      {
        question: 'Posso convertire file BMP senza connessione internet una volta aperta la pagina?',
        answer:
          'Sì. Una volta caricata la pagina nel browser, la conversione avviene interamente in JavaScript locale e HTML5 Canvas, senza chiamate al server. Ti serve di nuovo internet solo per caricare la pagina stessa o per scaricare i file finiti.',
      },
      {
        question: 'Il JPG si aprirà in qualsiasi programma?',
        answer:
          'Sì. I file .jpg RGB standard di base si aprono in praticamente ogni visualizzatore, editor, browser, client e-mail e stampante: molto più ampiamente del BMP, che molte app e siti moderni non accettano più.',
      },
      {
        question: 'Il convertitore mantiene la trasparenza BMP?',
        answer:
          'I file BMP raramente portano un canale alfa utilizzabile, e il JPG non supporta affatto la trasparenza, quindi i JPG risultanti sono sempre opachi. Se la tua grafica ha bisogno di trasparenza, converti invece in PNG o WebP, che preservano l’alfa.',
      },
      {
        question: 'Cosa succede alla profondità di colore BMP durante la conversione?',
        answer:
          'Il browser decodifica il BMP e lo rappresenta attraverso il percorso colore standard del canvas, esportando un normale JPG sRGB. I BMP ad alta profondità di colore mantengono i loro colori visibili; solo varianti indicizzate o a 1 bit esotiche potrebbero dover essere risalvate prima in un editor.',
      },
      {
        question: 'Posso controllare la qualità prima di scaricare?',
        answer:
          'Sì. Clicca Confronta su una scheda di risultato per aprire il visualizzatore a metà e trascina sull’immagine per ispezionare testo, linee e dettagli rispetto al BMP originale. Ogni scheda mostra anche lo spazio esatto risparmiato.',
      },
      {
        question: 'È possibile regolare il cursore di qualità dopo la prima conversione?',
        answer:
          'Sì. Sposta il cursore di qualità su un nuovo valore in qualsiasi momento e clicca Riconverti tutto per rigenerare ogni file caricato senza ricaricare. I tuoi file BMP originali restano nella coda finché non li rimuovi.',
      },
      {
        question: 'Quale nome di file manterrà il JPG?',
        answer:
          'I download singoli mantengono il nome originale del file, ripulito, con estensione .jpg, quindi scan.bmp diventa scan.jpg. I batch di due o più file vengono esportati insieme dentro compressmypic_bmp_to_jpg.zip.',
      },
      {
        question: 'La conversione da BMP a JPG funziona nei browser mobili?',
        answer:
          'Sì. La zona di caricamento, il cursore di qualità, il visualizzatore di confronto e il download ZIP funzionano in Safari su iOS e in Chrome su Android senza installare app. I batch grandi richiedono solo un po’ più di tempo sui processori dei telefoni.',
      },
      {
        question: 'Quando è meglio BMP in JPG rispetto a BMP in PNG?',
        answer:
          'Scegli JPG quando ti serve il file condivisibile più piccolo per e-mail, web o messaggistica. Scegli PNG quando ti serve una qualità d’archivio senza perdita o prevedi di modificare ulteriormente l’immagine, tenendo presente che i file PNG resteranno molto più grandi del JPG.',
      },
      {
        question: 'I vecchi file BMP a 1 bit o 8 bit possono essere convertiti?',
        answer:
          'La maggior parte dei file BMP standard a 1 bit, 8 bit, 24 bit e 32 bit viene decodificata in modo pulito nei browser moderni. Varianti molto insolite, come i BMP compressi RLE o in formato OS/2, potrebbero mostrare un errore per file: risalvarli come BMP a 24 bit in Paint o in un editor risolve il problema.',
      },
      {
        question: 'Perché i file BMP scansionati si comprimono così bene come JPG?',
        answer:
          'Le scansioni contengono gradienti morbidi, texture della carta e dettagli fotografici che la compressione coseno di JPEG gestisce in modo molto efficiente. Le aree piatte a colore unico si comprimono ancora meglio, ed è per questo che una scansione da 10 MB può scendere sotto 1 MB con qualità all’88%.',
      },
      {
        question: 'Convertire BMP in JPG rimuove eventuali metadati?',
        answer:
          'Sì. Disegnare i pixel su HTML5 Canvas rimuove qualsiasi blocco di metadati incorporato, quindi i JPG risultanti sono leggeri e privi di dettagli nascosti. I file BMP, in primo luogo, portano raramente molti metadati.',
      },
      {
        question: 'Posso convertire file BMP direttamente da una fotocamera digitale o da uno scanner?',
        answer:
          'Sì, se il file è salvato come .bmp: la maggior parte degli scanner e delle fotocamere datate offre BMP come opzione di export. Le fotocamere moderne di solito salvano già in JPG, quindi controlla prima l’estensione del file e usa il convertitore corrispondente se non è una bitmap.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/image-converter', '/bulk-image-converter', '/compress-image-to-100kb'],
  },
  {
    slug: '/remove-background',
    name: 'Rimuovi Sfondo',
    shortDescription: 'Rimuovi lo sfondo delle immagini con l’IA nel browser ed esporta PNG trasparenti.',
    category: 'ai-tools',
    seoTitle: 'Rimuovi sfondo gratis – Ritagli AI, senza registrazione',
    seoDescription:
      'Rimuovi lo sfondo delle foto gratis con l’IA nel browser. Scarica un PNG trasparente o aggiungi uno sfondo bianco, nero o personalizzato — privato, senza login.',
    h1: 'Rimuovi sfondo AI gratuito online',
    subtitle:
      'Rimuovi lo sfondo da ritratti, foto di prodotto, animali e loghi con il nostro rimuovi sfondo AI gratuito, che funziona interamente nel tuo browser. Pensato per venditori, creator e designer che vogliono ritagli puliti in fretta, carica un modello AI compatto una sola volta (circa 35 MB, poi memorizzato nella cache), elabora una foto alla volta fino a 20 MB ed esporta un PNG trasparente — oppure posiziona il ritaglio su uno sfondo bianco, nero o personalizzato.',
    howToSteps: [
      {
        title: 'Attendi il caricamento del modello AI',
        description:
          'Al primo utilizzo la pagina scarica il modello compatto isnet_quint8 (circa 35 MB) una sola volta e lo memorizza nella cache del browser; le visite successive partono subito.',
      },
      {
        title: 'Trascina una foto fino a 20 MB',
        description:
          'Carica una singola foto JPG, PNG, WebP, HEIC, BMP o AVIF — un file alla volta — nella zona di caricamento.',
      },
      {
        title: 'Lascia che l’IA ritagli il soggetto',
        description:
          'Il modello isola il soggetto in locale nel tuo browser e mostra l’originale accanto al ritaglio trasparente.',
      },
      {
        title: 'Confronta il ritaglio con l’originale',
        description:
          'Clicca Confronto a metà per trascinare sulla vista prima/dopo e controllare i bordi intorno a capelli, peli e dettagli fini.',
      },
      {
        title: 'Scegli trasparente, bianco, nero o personalizzato',
        description:
          'Tieni il PNG trasparente, oppure passa a uno sfondo bianco, nero o di colore personalizzato prima di scaricare.',
      },
      {
        title: 'Scarica il tuo ritaglio',
        description:
          'Salva il PNG trasparente (con il nome della tua foto più _no_bg) o la versione con sfondo solido, poi clicca Nuova immagine per la foto successiva.',
      },
    ],
    features: [
      {
        title: 'Segmentazione AI 100% lato client',
        description: 'Basato sul modello ONNX leggero isnet_quint8 che gira in locale nel tuo browser: le tue foto non vengono mai caricate su alcun server.',
      },
      {
        title: 'Export istantaneo di PNG trasparente',
        description: 'Scarica ritagli PNG nitidi con trasparenza alfa, pronti per annunci e-commerce, miniature, slide e lavori di design.',
      },
      {
        title: 'Selettore di sfondo solido integrato',
        description: 'Visualizza in anteprima ed esporta il ritaglio su bianco puro, nero intenso o qualsiasi colore esadecimale personalizzato senza aprire un’altra app.',
      },
      {
        title: 'Gratis, senza registrazione e senza filigrana',
        description: 'Ritagli a piena risoluzione senza limiti giornalieri, senza account e senza filigrane.',
      },
    ],
    faqs: [
      {
        question: 'La rimozione dello sfondo invia la mia foto a un server?',
        answer:
          'No. Il modello AI viene scaricato nel tuo browser una sola volta ed esegue l’inferenza interamente sul tuo dispositivo, quindi la tua foto non viene mai caricata, memorizzata o vista da altri. Chiudendo la scheda, tutto viene rimosso dalla memoria del browser.',
      },
      {
        question: 'Perché il primo ritaglio è più lento di quelli successivi?',
        answer:
          'Alla prima visita, il browser scarica il modello compatto isnet_quint8 (circa 35 MB) e inizializza il runtime AI WebAssembly, il che richiede qualche secondo in più. Dopo di che il modello è nella cache, quindi le foto successive vengono elaborate molto più velocemente.',
      },
      {
        question: 'Quanto è grande il modello AI che scarica il mio browser?',
        answer:
          'Circa 35 MB, scaricati una sola volta al primo utilizzo e poi memorizzati nella cache dal browser. Il piccolo modello quantizzato isnet_quint8 è ciò che rende possibile la rimozione nel browser senza server: modelli cloud più grandi richiederebbero un caricamento e un’API a pagamento.',
      },
      {
        question: 'Posso usare il rimuovi sfondo senza internet dopo il primo caricamento?',
        answer:
          'Per lo più sì: una volta che il modello è nella cache, la rimozione vera e propria avviene completamente offline nel tuo browser. Ti serve ancora internet per caricare la pagina stessa la prima volta, e il modello in cache può essere cancellato se il browser pulisce i dati del sito.',
      },
      {
        question: 'Quali tipi di foto producono i bordi più puliti?',
        answer:
          'Le foto con un soggetto chiaro e un buon contrasto con lo sfondo funzionano meglio: ritratti, foto di prodotto, animali, auto e loghi con contorni netti. Un’illuminazione uniforme e uno sfondo semplice danno al modello il compito più facile.',
      },
      {
        question: 'Posso rimuovere lo sfondo da una foto con uno scenario disordinato o affollato?',
        answer:
          'Sì, ma aspettati bordi più morbidi: quando il soggetto si confonde con uno sfondo disordinato, il piccolo modello sul dispositivo deve indovinare dove finisce il soggetto. Uno sfondo più pulito, una luce migliore o un ritaglio più ravvicinato prima del caricamento danno un ritaglio visibilmente migliore.',
      },
      {
        question: 'Cosa succede ai capelli fini, al pelo o ai bordi trasparenti?',
        answer:
          'I fili sottili e il pelo vaporoso sono il caso più difficile per un modello quantizzato compatto, quindi i bordi lì possono sembrare leggermente morbidi o perdere qualche capello. Controlla la vista Confronto a metà: per la maggior parte dei ritratti e delle foto di prodotto il risultato è pulito, ma la mascheratura dei capelli perfetta in pixel è un limite noto.',
      },
      {
        question: 'Come metto il mio ritaglio su uno sfondo bianco puro per Amazon o eBay?',
        answer:
          'Dopo che il ritaglio è pronto, scegli Bianco sotto Opzione di riempimento sfondo e clicca Scarica con sfondo bianco. I marketplace preferiscono JPG e PNG nitidi con sfondo bianco opaco per le miniature principali dei prodotti, e questo esporta esattamente quello.',
      },
      {
        question: 'Quali formati di file posso caricare?',
        answer:
          'JPG, PNG, WebP, HEIC, BMP e AVIF: lo strumento accetta lo stesso set esteso di immagini del resto del sito. Le foto HEIC degli iPhone vengono convertite automaticamente in un’immagine decodificabile prima che il modello venga eseguito.',
      },
      {
        question: 'Qual è la dimensione massima della foto?',
        answer:
          'Ogni foto può arrivare fino a 20 MB, e lo strumento elabora una foto alla volta. Questo copre scatti ad alta risoluzione di telefoni e fotocamere; i file molto grandi richiedono solo un po’ più di tempo perché il modello gira sul tuo dispositivo.',
      },
      {
        question: 'Posso rimuovere lo sfondo da diverse foto in una volta?',
        answer:
          'No, questo strumento gestisce una foto alla volta così il modello AI può concentrare tutta la memoria del dispositivo su un singolo ritaglio pulito. Clicca Nuova immagine dopo ogni download per elaborare la foto successiva: non c’è un limite giornaliero.',
      },
      {
        question: 'Il ritaglio mantiene la risoluzione della foto originale?',
        answer:
          'Sì. Il PNG trasparente esportato mantiene il 100% della larghezza e dell’altezza in pixel della foto originale, quindi una foto di prodotto da 4000px resta 4000px. Usa dopo il Ridimensionatore di immagini se ti serve una versione più piccola per il web.',
      },
      {
        question: 'Perché il mio PNG trasparente è più grande della foto originale?',
        answer:
          'Il PNG memorizza ogni pixel del ritaglio senza perdita, mentre il tuo JPG originale era molto compresso: quindi un ritaglio grande e dettagliato può facilmente pesare più di una piccola fonte JPG. È normale: stai scambiando la dimensione del file con trasparenza e bordi perfetti in pixel.',
      },
      {
        question: 'Posso rieseguire la rimozione sulla stessa foto?',
        answer:
          'Sì. Clicca Riesegui rimozione per elaborare di nuovo la stessa foto: utile se il primo passaggio ha preso un’ombra come parte del soggetto o se vuoi confrontare i risultati. Il modello è deterministico, quindi il risultato è in genere identico a meno che l’input non sia cambiato.',
      },
      {
        question: 'Cosa dovrei fare se parte del soggetto manca nel ritaglio?',
        answer:
          'Prima controlla la vista Confronto a metà per vedere esattamente cosa è stato tagliato. I soggetti che si confondono con lo sfondo — abbigliamento dello stesso colore, vetro o mimetismo — confondono il modello; prova una foto con un contrasto soggetto-sfondo più forte oppure ritaglia più vicino al soggetto prima di caricare.',
      },
      {
        question: 'C’è una filigrana sul PNG scaricato?',
        answer:
          'No. I download sono ritagli a piena risoluzione senza filigrana, senza logo e senza branding aggiunto. Inoltre non c’è registrazione, non c’è account e non c’è limite giornaliero su quante foto puoi rimuovere lo sfondo.',
      },
      {
        question: 'La rimozione dello sfondo funziona nei browser mobili?',
        answer:
          'Sì. Il modello viene scaricato ed eseguito in Safari su iOS e in Chrome su Android, con gli stessi controlli di caricamento, confronto e download. Sui telefoni, le foto grandi richiedono più tempo perché l’IA gira sul processore del telefono: il Wi-Fi aiuta per il primo download del modello.',
      },
      {
        question: 'In cosa è diverso da strumenti a pagamento come remove.bg?',
        answer:
          'Questo strumento è gratuito, privato e gira interamente nel tuo browser senza caricamento e senza account, mentre gli strumenti cloud a pagamento elaborano la tua foto sui loro server. Il compromesso è la qualità sui bordi difficili: il piccolo modello sul dispositivo è eccellente per soggetti chiari ma non può eguagliare i grandi modelli cloud su capelli fini o scene affollate.',
      },
      {
        question: 'Posso usare il ritaglio in Canva, Photoshop o PowerPoint?',
        answer:
          'Sì. Il PNG trasparente esportato si apre direttamente in Canva, Photoshop, Figma, PowerPoint e Google Slides, dove puoi posizionarlo su qualsiasi sfondo, slide o design. Il download con sfondo solido funziona allo stesso modo per le app che hanno bisogno di un’immagine opaca.',
      },
      {
        question: 'Cosa succede alla mia foto dopo che chiudo la scheda?',
        answer:
          'Non viene memorizzato nulla da nessuna parte: l’elaborazione avviene nella memoria del browser, la foto non viene mai caricata e chiudere la scheda cancella l’immagine e il ritaglio. Solo il modello AI in cache resta nel browser per un uso futuro più veloce.',
      },
    ],
    relatedSlugs: ['/add-background-to-image', '/image-resizer', '/png-to-webp'],
  },
];


export const TOOL_BY_SLUG_IT: Record<string, ToolDefinition> = Object.fromEntries(
  TOOLS_REGISTRY_IT.map((t) => [t.slug, t])
);
