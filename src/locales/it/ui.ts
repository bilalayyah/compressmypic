// Italian UI strings — assembled for src/locales/it/ui.ts
// = i18n-it.ts (export IT) + tool-ui-it.ts (export TOOL_UI_IT).
// Neither source has imports. HOME_ENTRY_IT from i18n-it.ts is NOT
// included here: it is already merged as TOOLS_REGISTRY_IT[0] in
// src/locales/it/tools.ts, mirroring the PT ui.ts (PT + TOOL_UI_PT only).

// Italian (it) UI strings for CompressMyPic — natural standard Italian,
// tu form (standard for Italian web tools). Mirrors
// ~/workspace/compressmypic/pt-fr/i18n-pt.ts exactly: same 15 sections,
// same keys within each section, same export shape.
// Source: English originals in /tmp/cmpic-deit (Hero, FaqSection,
// EducationalContent, ToolsDirectorySection, ShareSection, Header, Footer,
// ToolPageLayout, UploadZone, ComparisonModal, CompressionControls,
// ResultsList, home entry in tools.ts, App.tsx guides section).
// The PT file was used as a structural template only — no PT text was copied.
// Brand name CompressMyPic is never translated. URLs, bilalayyah@gmail.com and format
// names (JPG/PNG/WebP/HEIC/JPEG/SVG/AVIF/BMP/GIF/PDF) stay as-is. "ZIP" is kept as a
// file-format term. "online" stays "online". Placeholders: {name} = tool/file name,
// {max} = max size in MB, {year} = current year, {count} = number of extra errors,
// {current} = current theme, {progress} = ZIP progress %, {bytes} = byte size,
// {formats} = supported format list.
// NOTE on footer links: like ES/PT, this dictionary keeps ENGLISH slugs in the
// footer (legal links /privacy, /terms, /about, /contact; directory links use
// English tool slugs); the app maps them to the current language via
// toLocalizedPath at render. Never put IT slugs in the dict.
// NOTE on guidesSection cards: like ES/PT, cards carry NO `link` key — the guide
// hrefs live in App.tsx.
// NOTE on header: the 11 language-switcher native names (English, Español,
// Português, Deutsch, Français, 日本語, Bahasa Indonesia, Italiano, Русский,
// 한국어, 简体中文) live in the app's SUPPORTED_LANGUAGES config, not in this
// dictionary — same as ES/PT.

export const IT = {
  header: {
    home: 'Home',
    tools: 'Strumenti',
    howItWorks: 'Come funziona',
    faq: 'Domande frequenti',
    about: 'Chi siamo',
    contact: 'Contatti',
    compressImages: 'Comprimi immagini',
    themeLight: 'Modalità chiara',
    themeDark: 'Modalità scura',
    themeSystem: 'Impostazione di sistema',
    languageLabel: 'Lingua',
    homeAriaLabel: 'CompressMyPic – Compressore di immagini gratuito online',
    themeLightShort: 'Chiara', // 'Light'
    themeDarkShort: 'Scura', // 'Dark'
    themeSystemShort: 'Sistema', // 'System'
    themeHeading: 'Tema', // 'Theme' (mobile drawer heading + theme menu aria-label)
    menuAriaLabel: 'Mostra o nascondi il menu di navigazione', // 'Toggle navigation menu'
    themeAriaLabel: 'Cambia il tema dei colori (attuale: {current})', // 'Change color theme (Current: {current})'
    themeTitle: 'Tema: {current}', // 'Theme: {current}'
    aboutUs: 'Chi siamo', // 'About Us' (mobile drawer)
    contactUs: 'Contattaci', // 'Contact Us' (mobile drawer)
  },
  footer: {
    blurb:
      'Compressione di immagini veloce, sicura e privata, direttamente nel browser. Ottimizza le immagini JPG, PNG e WebP senza caricare i tuoi dati su server esterni.',
    privacyNote: 'Privacy 100% sul dispositivo',
    toolsHeading: 'Strumenti per immagini',
    legalHeading: 'Fiducia e note legali',
    guidesHeading: 'Guide',
    moreHeading: 'Altre utilità',
    directoryHeading: 'Strumenti avanzati di compressione, modifica e sviluppo',
    processedLocally: 'Elaborato localmente con HTML5 Canvas',
    bottomRights:
      '© {year} CompressMyPic. Tutti i diritti riservati. Utilità gratuita di compressione immagini nel browser.',
    contactLabel: 'Contatto: bilalayyah@gmail.com',
    toolsLinks: [
      { slug: '/', label: 'Comprimi immagini' },
      { slug: '/image-resizer', label: 'Ridimensiona immagine' },
      { slug: '/image-converter', label: 'Convertitore di immagini' },
      { slug: '/rotate-flip-image', label: 'Ruota e specchia immagine' },
      { slug: '/image-to-pdf', label: 'Immagine in PDF' },
      { slug: '/remove-image-metadata', label: 'Rimuovi metadati' },
      { slug: '/remove-background', label: 'Rimuovi sfondo' },
    ],
    legalLinks: [
      { slug: '/privacy', label: 'Informativa sulla privacy' },
      { slug: '/terms', label: 'Termini di servizio' },
      { slug: '/about', label: 'Chi siamo' },
      { slug: '/contact', label: 'Contatta il supporto' },
    ],
    guidesLinks: [
      {
        slug: '/guides/compress-images-for-whatsapp',
        label: 'Come comprimere le immagini per WhatsApp senza perdere qualità',
      },
      {
        slug: '/guides/jpg-vs-png-vs-webp',
        label: 'JPG vs PNG vs WebP: quale formato dovresti usare?',
      },
      {
        slug: '/guides/reduce-image-size-to-100kb',
        label: 'Come ridurre le dimensioni di un’immagine a 100 KB per web ed email',
      },
    ],
    moreLinks: [
      { slug: '/image-metadata-viewer', label: 'Visualizzatore di metadati ed EXIF' },
      { slug: '/favicon-generator', label: 'Generatore di favicon' },
      { slug: '/image-color-picker', label: 'Selettore di colori da immagine' },
      { slug: '/image-dimensions-checker', label: 'Verifica dimensioni immagine' },
    ],
    directoryLinks: [
      { slug: '/compress-image-to-50kb', label: 'Comprimi a 50 KB' },
      { slug: '/compress-image-to-100kb', label: 'Comprimi a 100 KB' },
      { slug: '/compress-image-to-200kb', label: 'Comprimi a 200 KB' },
      { slug: '/compress-image-to-500kb', label: 'Comprimi a 500 KB' },
      { slug: '/target-file-size-compressor', label: 'Compressore per dimensione file di destinazione' },
      { slug: '/bulk-image-compressor', label: 'Compressore di immagini in blocco' },
      { slug: '/bulk-image-resizer', label: 'Ridimensionatore di immagini in blocco' },
      { slug: '/bulk-image-converter', label: 'Convertitore di immagini in blocco' },
      { slug: '/web-image-optimizer', label: 'Ottimizzatore di immagini per il web' },
      { slug: '/gif-compressor', label: 'Compressore GIF' },
      { slug: '/image-cropper', label: 'Ritaglio immagini' },
      { slug: '/image-watermark', label: 'Filigrana su immagine' },
      { slug: '/blur-pixelate-image', label: 'Sfoca e pixela' },
      { slug: '/add-text-to-image', label: 'Aggiungi testo all’immagine' },
      { slug: '/image-border-generator', label: 'Generatore di bordi' },
      { slug: '/round-image-corners', label: 'Arrotonda angoli' },
      { slug: '/image-brightness-editor', label: 'Editor di luminosità' },
      { slug: '/image-contrast-editor', label: 'Editor di contrasto' },
      { slug: '/image-saturation-editor', label: 'Editor di saturazione' },
      { slug: '/image-filters', label: 'Filtri immagine' },
      { slug: '/add-background-to-image', label: 'Aggiungi sfondo' },
      { slug: '/image-splitter', label: 'Divisore di immagini' },
      { slug: '/image-dpi-changer', label: 'Cambia DPI' },
      { slug: '/image-to-base64', label: 'Immagine in Base64' },
      { slug: '/base64-to-image', label: 'Base64 in immagine' },
      { slug: '/image-color-palette-extractor', label: 'Estrattore di palette di colori' },
      { slug: '/gif-maker', label: 'Creatore di GIF' },
      { slug: '/image-collage-maker', label: 'Creatore di collage' },
      { slug: '/heic-to-jpg', label: 'HEIC in JPG' },
      { slug: '/jpg-to-png', label: 'JPG in PNG' },
      { slug: '/png-to-jpg', label: 'PNG in JPG' },
      { slug: '/jpg-to-webp', label: 'JPG in WebP' },
      { slug: '/webp-to-jpg', label: 'WebP in JPG' },
      { slug: '/png-to-webp', label: 'PNG in WebP' },
      { slug: '/webp-to-png', label: 'WebP in PNG' },
      { slug: '/svg-to-png', label: 'SVG in PNG' },
      { slug: '/avif-to-jpg', label: 'AVIF in JPG' },
      { slug: '/bmp-to-jpg', label: 'BMP in JPG' },
    ],
  },
  hero: {
    pill: 'Compressione 100% privata sul dispositivo · Nessun caricamento sui server',
    h1: 'Compressore di immagini gratuito – Comprimi immagini online e riduci le dimensioni senza perdere qualità',
    sub: 'Riduci le dimensioni dei file immagine senza sacrificare la qualità visibile. Comprimi immagini online gratis con il nostro compressore di immagini e foto gratuito: un ottimizzatore di immagini online per JPG, PNG, WebP e HEIC. Veloce, sicuro, senza registrazione, senza filigrana e con una compressione facile direttamente nel browser.',
    badge1: 'Le tue immagini non lasciano mai il tuo dispositivo',
    badge2: 'Elaborazione istantanea nel browser',
    badge3: 'JPG, PNG, WebP e HEIC supportati',
  },
  toolsDirectory: {
    heading: 'Altri strumenti gratuiti per elaborare le immagini',
    subheading:
      'Ogni strumento funziona al 100% nel tuo browser: nessun caricamento sui server, nessuna registrazione e nessuna filigrana.',
    eyebrow: 'Tutti gli strumenti nel browser', // 'All Browser-Native Tools'
    allTools: 'Tutti gli strumenti', // 'All Tools'
    openTool: 'Apri strumento', // 'Open tool'
  },
  educational: {
    sections: [
      {
        heading: 'Cos’è la compressione delle immagini?',
        body: 'La compressione delle immagini è il processo di riduzione delle dimensioni in byte di un file grafico senza degradare la qualità visiva dell’immagine oltre una soglia accettabile. Quando una fotocamera o uno smartphone salva una foto, memorizza un’enorme quantità di dati, gran parte dei quali l’occhio umano non riesce a distinguere facilmente quando vengono rimossi o semplificati. CompressMyPic è un ottimizzatore di immagini online gratuito e un riduttore di dimensioni delle immagini che funziona come compressore di foto e riduttore di dimensioni delle foto per file JPG, PNG e WebP.\n\nAnalizzando questi schemi, gli algoritmi di compressione delle immagini riorganizzano o scartano selettivamente le informazioni ridondanti. Il file risultante richiede molto meno spazio di archiviazione e si trasferisce molto più velocemente su internet. Questa guida ti mostra come comprimere un’immagine senza perdere qualità, usando il cursore della qualità, le preimpostazioni e la scelta del formato di CompressMyPic.',
      },
      {
        heading: 'Perché dovresti comprimere le immagini?',
        body: 'Le immagini non ottimizzate rappresentano uno dei maggiori ostacoli per le prestazioni di un sito web, lo spazio di archiviazione e il consumo di dati mobili. Comprimere le tue immagini offre vantaggi immediati e concreti:',
        bullets: [
          'Caricamento più veloce del sito: le pagine con immagini compresse si caricano fino al 70% più velocemente, migliorando i tuoi Core Web Vitals (Largest Contentful Paint) e il posizionamento nei motori di ricerca. Quando riduci le dimensioni delle immagini del sito, i visitatori restano più a lungo e abbandonano meno la pagina.',
          'Meno spazio di archiviazione: riduci i costi di hosting cloud, disco del server e backup conservando file immagine ottimizzati invece degli originali pesanti.',
          'Condivisione delle immagini più facile: non ti bloccherai più per i limiti rigidi degli allegati email o le quote di caricamento dei messaggi. Le foto compresse si allegano e si inviano all’istante, anche con connessioni mobili lente o piani dati limitati.',
          'Meno consumo di banda: fai risparmiare denaro ai tuoi utenti sui piani dati mobili ed evita che i visitatori abbandonino il tuo sito. I file più piccoli si scaricano più velocemente, soprattutto con connessioni mobili lente.',
        ],
      },
      {
        heading: 'Come funziona',
        body: 'Comprimere le tue foto richiede pochi secondi: nessun account, nessun software, nessun caricamento. Ecco come comprimere un’immagine senza perdere qualità in tre semplici passaggi.',
        bullets: [
          'Passo 1 — Carica le tue immagini: trascina e rilascia le tue immagini JPG, PNG, WebP o HEIC nell’area di caricamento, fai clic su "Sfoglia file" per selezionarle oppure incolla un’immagine con Ctrl+V. Puoi caricare più immagini alla volta, fino a 20 MB per immagine.',
          'Passo 2 — Regola la qualità e scegli il formato: scegli una preimpostazione Bassa, Equilibrata o Alta, oppure sposta il cursore della qualità dal 10% al 100%, e scegli se mantenere il formato originale o convertire in JPG, PNG o WebP. Guarda le dimensioni prima e dopo in tempo reale per ogni immagine e usa il cursore di confronto interattivo per verificare il risultato visivo.',
          'Passo 3 — Scarica le tue immagini compresse: scarica ogni immagine compressa singolarmente oppure fai clic su "Scarica tutto (ZIP)" per scaricare l’intero batch in un solo file. Le tue immagini vengono compresse direttamente nel browser, quindi non c’è niente da aspettare e niente da caricare.',
        ],
      },
      {
        heading: 'Perché usare questo compressore di immagini gratuito?',
        body: 'CompressMyPic è un compressore di immagini gratuito, senza registrazione e senza filigrana, creato per le foto di tutti i giorni, le immagini dei siti web e i post sui social media.',
        bullets: [
          'Comprimi JPG, PNG, WebP e HEIC: un unico compressore di immagini per i formati che usi davvero. Comprimi foto JPG e JPEG, comprimi grafiche PNG mantenendo la trasparenza e comprimi immagini WebP per ottenere i file più piccoli.',
          'Riduci le dimensioni senza perdere qualità: la compressione intelligente rimuove i dati ridondanti e i metadati, mentre l’immagine resta praticamente identica all’originale. La preimpostazione Equilibrata è il miglior punto di partenza e il confronto prima/dopo ti permette di verificare la qualità da solo.',
          'Compressore di immagini in blocco – Comprimi più immagini alla volta: questo compressore di immagini in blocco ti permette di comprimere più immagini alla volta con le stesse impostazioni, per poi scaricarle tutte insieme con il pulsante "Scarica tutto (ZIP)" invece di salvare i file uno per uno.',
          'Comprimi immagini per WhatsApp, Instagram e Facebook: riduci le foto in modo che si inviino velocemente su WhatsApp e si carichino senza problemi su Instagram e Facebook. I file più piccoli consumano meno dati mobili e hanno molte meno probabilità di essere rifiutati perché troppo grandi.',
          'Riduci le dimensioni a 20 KB, 50 KB, 100 KB o 200 KB: abbassa il cursore della qualità passo dopo passo e osserva le dimensioni prima e dopo in tempo reale fino a raggiungere il tuo obiettivo: 200 KB, 100 KB, 50 KB o persino 20 KB. Passare al formato di output WebP di solito ti aiuta ad arrivarci con una minore perdita visiva di qualità.',
        ],
      },
      {
        heading: 'Comprimi JPG, PNG e WebP: quale formato dovresti scegliere?',
        body: 'JPG, PNG e WebP hanno ciascuno uno scopo diverso. Conoscere i loro punti di forza ti aiuta a scegliere l’opzione migliore per il tuo progetto.\n\nConfronta la differenza visiva: non sai quanta compressione sia accettabile? Usa l’opzione di confronto prima/dopo dello strumento. Il nostro cursore interattivo ti permette di vedere l’immagine originale e la versione compressa fianco a fianco per individuare artefatti visivi o perdite di qualità prima di scaricare.',
        bullets: [
          'Compressore JPG — Comprimi JPG online gratis: ideale per le fotografie del tuo sito, blog o portfolio. Comprimi JPG online gratis e comprimi JPEG a 100 KB abbassando il cursore della qualità mentre osservi le dimensioni in tempo reale. La compressione JPEG è con perdita: rimuove in modo permanente alcuni dati visivi che l’occhio umano fatica a percepire. Di conseguenza puoi ridurre una foto da megabyte a kilobyte senza quasi nessuna perdita visiva di qualità.',
          'Compressore PNG — Comprimi PNG online gratis: ideale per grafiche, screenshot, loghi e immagini che richiedono trasparenza, come loghi, icone o illustrazioni. Comprimi PNG online gratis qui mantenendo la piena trasparenza, per grafiche nitide e perfette in ogni pixel. Convertire un PNG in WebP spesso lo rende molto più piccolo.',
          'Comprimi immagini WebP — Il formato moderno: ideale per l’ottimizzazione web. WebP offre un’eccellente compressione con e senza perdita, in genere dal 25% al 35% più piccola di JPEG o PNG. Comprimi i file immagine WebP per ottenere le dimensioni più piccole con una qualità simile e usa WebP quando vuoi ottimizzare le immagini per le pagine web senza perdita visiva di qualità. È la scelta migliore per la maggior parte dei siti web.',
        ],
      },
      {
        heading: 'Per cosa puoi usare questo compressore di immagini?',
        body: 'Un unico compressore di immagini gratuito copre i motivi più comuni per cui le persone devono ridurre le dimensioni di un’immagine.',
        bullets: [
          'Ottimizza le immagini per il web: ottimizza le immagini delle pagine web per caricarle più velocemente, migliorare i Core Web Vitals e posizionarti meglio. Immagini più piccole significano pagine più veloci, visitatori più soddisfatti e meno banda di hosting.',
          'Comprimi immagini per allegati email: comprimi le immagini per un allegato email riducendole con il cursore della qualità finché ogni file non rientra nel limite di allegati del tuo provider email, poi allega i file scaricati al tuo messaggio invece degli originali grandi.',
          'Comprimi una foto per il sito web: comprimi una foto per il tuo sito web, blog, portfolio o negozio online prima di pubblicarla. Le foto dei prodotti, i banner e le immagini del blog restano nitide e occupano molto meno spazio sul server.',
          'Riduci le dimensioni di una foto: riduci le dimensioni di una foto dal telefono o dalla fotocamera prima di condividerla, salvarla o stamparla. Le foto grandi diventano veloci da inviare, facili da archiviare e semplici da gestire.',
        ],
      },
      {
        heading: 'Perché le dimensioni delle immagini contano',
        body: 'I file immagine grandi e ad alta risoluzione sono il risultato del rapido progresso della tecnologia delle fotocamere: le immagini oggi sono da 2 a 3 volte più grandi rispetto a pochi anni fa. Quando riduci le dimensioni delle immagini delle pagine web e ottimizzi le immagini per il web, il tuo sito si carica più velocemente, consuma meno banda e si posiziona meglio nei risultati di ricerca.\n\nQuando cerchi un buon compressore, verifica che: 1) non sacrifichi la qualità, 2) mantenga i tuoi dati privati (elaborazione sul dispositivo) e 3) elabori le immagini velocemente senza far passare i tuoi file attraverso un server lontano. È esattamente ciò per cui è stato creato CompressMyPic.',
      },
      {
        heading: 'Consigli di ottimizzazione: riduci le dimensioni senza perdere qualità',
        body: '',
        bullets: [
          'Inizia con la preimpostazione Equilibrata: la preimpostazione Equilibrata (qualità 70%) offre il miglior equilibrio per la maggior parte delle immagini: file molto più piccoli e una grande somiglianza visiva con l’originale.',
          'Scegli il formato giusto: per le fotografie, JPG o WebP genereranno sempre file più piccoli di PNG. Per loghi e grafiche con trasparenza, usa PNG.',
          'Punta a una dimensione obiettivo: per l’uso sul web, punta a immagini sotto i 200 KB. Per email e messaggi, resta sotto 1 MB per una consegna veloce. Usa il cursore della qualità e le dimensioni in tempo reale per raggiungere la dimensione obiettivo.',
          'Trova il punto ideale: imposta il cursore della qualità all’85–90% per le immagini principali, dove la qualità conta; il 70–80% è in genere il miglior equilibrio per l’uso generale sul web; il 50–60% è meglio per le miniature o quando le dimensioni sono la priorità assoluta.',
          'Prova WebP per i file più piccoli: passare al formato di output WebP di solito riduce un JPG o un PNG di un ulteriore 25–35% con una qualità simile: un modo semplice per ridurre le dimensioni senza perdere qualità.',
        ],
      },
    ],
  },
  faqSection: {
    heading: 'Domande frequenti',
    subheading:
      'Tutto quello che devi sapere su come comprimere immagini online gratis con CompressMyPic.',
    faqs: [
      {
        id: 'faq-1',
        question: 'Come posso comprimere un’immagine online gratis?',
        answer:
          'Trascina e rilascia i file immagine su CompressMyPic oppure fai clic su "Sfoglia file". Scegli una preimpostazione di compressione (Bassa, Equilibrata o Alta) oppure regola il cursore della qualità, poi scarica subito le immagini ottimizzate. Lo strumento è gratis al 100%, senza registrazione e senza installare software.',
      },
      {
        id: 'faq-2',
        question: 'Come faccio a comprimere un’immagine a 100 KB?',
        answer:
          'CompressMyPic non ha una casella di input per una dimensione esatta in KB, quindi non puoi digitare direttamente 100 KB. Carica invece l’immagine, scegli una preimpostazione o abbassa il cursore della qualità e osserva le dimensioni prima e dopo mostrate in tempo reale per ogni immagine. Regola la qualità o passa al formato di output WebP finché la dimensione compressa non si avvicina a 100 KB, poi scaricala.',
      },
      {
        id: 'faq-3',
        question: 'Come posso ridurre le dimensioni di un’immagine senza perdere qualità?',
        answer:
          'Scegli la preimpostazione Equilibrata (qualità intorno al 70%) o un’impostazione di qualità alta dell’85–90%, che rimuove i dati ridondanti e i metadati mantenendo l’immagine praticamente identica all’originale. Usa il confronto interattivo prima/dopo per verificare il risultato e mantieni il formato originale oppure scegli WebP per il miglior equilibrio tra qualità e dimensioni.',
      },
      {
        id: 'faq-4',
        question: 'Come faccio a comprimere un JPEG a 100 KB?',
        answer:
          'Per ridurre le dimensioni di un file JPEG, carica il JPEG, scegli JPEG come formato di output, poi abbassa il cursore della qualità passo dopo passo osservando le dimensioni compresse in tempo reale. Poiché non c’è una casella per una dimensione esatta in KB, usa la visualizzazione delle dimensioni prima e dopo per fermarti quando il file si avvicina a 100 KB.',
      },
      {
        id: 'faq-5',
        question: 'Come faccio a ridurre le dimensioni di un’immagine a 20 KB, 50 KB o 200 KB?',
        answer:
          'Carica l’immagine e abbassa gradualmente il cursore della qualità, controllando le dimensioni prima e dopo in tempo reale dopo ogni modifica, finché non raggiungi il tuo obiettivo: 200 KB, 50 KB o 20 KB. Obiettivi più piccoli come 20 KB di solito richiedono un’impostazione di qualità più bassa e l’output WebP. Lo stesso metodo funziona per qualsiasi obiettivo, incluso 500 KB, e le dimensioni sono sempre mostrate in KB così puoi vedere esattamente di quanto hai ridotto le dimensioni dell’immagine in KB.',
      },
      {
        id: 'faq-6',
        question: 'Come faccio a comprimere un PNG online gratis?',
        answer:
          'Carica il tuo PNG su CompressMyPic e scegli una preimpostazione o regola il cursore della qualità: comprimere un PNG online qui è gratis, senza registrazione. La trasparenza viene preservata per gli output PNG e WebP, e convertire un PNG in WebP spesso lo rende molto più piccolo.',
      },
      {
        id: 'faq-7',
        question: 'Quali formati di immagine sono supportati?',
        answer:
          'CompressMyPic supporta JPG (JPEG), PNG, WebP e HEIC, incluse le foto scattate con iPhone, che vengono salvate in HEIC per impostazione predefinita. Puoi mantenere il formato originale o convertire tra di essi: ad esempio, comprimere file JPG come JPEG, comprimere file PNG mantenendo la trasparenza o convertire in WebP per i file più piccoli.',
      },
      {
        id: 'faq-8',
        question: 'Posso comprimere più immagini alla volta?',
        answer:
          'Sì. Questo compressore di immagini in blocco ti permette di caricare decine di immagini alla volta, comprimere più immagini alla volta con le stesse impostazioni e scaricarle tutte insieme con il pulsante "Scarica tutto (ZIP)", oppure scaricare ciascuna singolarmente.',
      },
      {
        id: 'faq-9',
        question: 'Come faccio a comprimere un’immagine per WhatsApp?',
        answer:
          'Carica la tua foto, scegli una preimpostazione di qualità più bassa o l’output WebP e scarica il file più piccolo prima di condividerlo su WhatsApp. Le foto più piccole si inviano più velocemente, consumano meno dati mobili e hanno meno probabilità di essere rifiutate perché troppo grandi.',
      },
      {
        id: 'faq-10',
        question: 'Come faccio a comprimere un’immagine per Instagram o Facebook?',
        answer:
          'Comprimi la tua foto per Instagram o Facebook caricandola qui, scegliendo la preimpostazione Equilibrata e scaricando il file JPG o WebP più piccolo. Il file ridotto si carica più velocemente e mantiene una qualità sufficiente per feed, storie e foto profilo.',
      },
      {
        id: 'faq-11',
        question: 'Posso comprimere le immagini per un allegato email?',
        answer:
          'Sì. Comprimi le immagini per un allegato email riducendole con il cursore della qualità finché ogni file non è abbastanza piccolo per il limite di allegati del tuo provider email, poi allega i file scaricati al tuo messaggio invece degli originali grandi.',
      },
      {
        id: 'faq-12',
        question: 'CompressMyPic è davvero gratis?',
        answer:
          'Sì, CompressMyPic è completamente gratis. Non ci sono costi, piani a pagamento, crediti e limiti al numero di immagini che puoi comprimere.',
      },
      {
        id: 'faq-13',
        question: 'CompressMyPic aggiunge una filigrana?',
        answer:
          'No. CompressMyPic è un compressore di immagini gratuito senza filigrana: le tue immagini compresse sono pulite, senza logo, testo o marchi aggiunti.',
      },
      {
        id: 'faq-14',
        question: 'Devo registrarmi per usare CompressMyPic?',
        answer:
          'No. Questo è un compressore di immagini gratuito senza registrazione: non servono account, indirizzo email o password. Apri il sito e inizia a comprimere.',
      },
      {
        id: 'faq-15',
        question: 'Le mie immagini vengono caricate su un server?',
        answer:
          'No. Tutta la compressione avviene interamente sul tuo dispositivo, all’interno del browser, quindi le tue immagini non vengono mai caricate su un server, archiviate o viste da altri. Restano nella memoria del browser e vengono eliminate quando aggiorni o chiudi la scheda.',
      },
      {
        id: 'faq-16',
        question: 'C’è un limite di dimensione del file?',
        answer:
          'Sì, il limite è di 20 MB per immagine, che copre foto di fotocamere ad alta risoluzione e screenshot di grandi dimensioni. Poiché l’elaborazione avviene sul tuo dispositivo, la compressione resta veloce anche per file grandi.',
      },
      {
        id: 'faq-17',
        question: 'Comprimere un’immagine cambia le sue dimensioni?',
        answer:
          'No. CompressMyPic mantiene invariate le dimensioni dell’immagine: viene ridotta solo la dimensione del file. La tua foto mantiene la stessa larghezza, altezza e proporzioni dell’originale.',
      },
      {
        id: 'faq-18',
        question: 'Posso comprimere le immagini da cellulare?',
        answer:
          'Sì. CompressMyPic funziona nei browser mobili su iOS e Android, quindi puoi comprimere una foto dal telefono scegliendola dal rullino fotografico o scattando una nuova foto e caricandola qui.',
      },
      {
        id: 'faq-19',
        question: 'Come funziona il cursore della qualità?',
        answer:
          'Il cursore della qualità ti permette di impostare la qualità di compressione dal 10% al 100%. Valori più alti mantengono più dettagli e producono file più grandi, mentre valori più bassi rendono i file molto più piccoli. Le preimpostazioni Bassa, Equilibrata e Alta impostano il cursore al posto tuo e le dimensioni prima e dopo in tempo reale mostrano il risultato di ogni modifica.',
      },
      {
        id: 'faq-20',
        question: 'Come scelgo il formato di output?',
        answer:
          'Dopo aver caricato un’immagine, scegli se mantenere il formato originale o convertire in JPG, PNG o WebP. WebP è di solito la scelta migliore per ottimizzare le immagini per le pagine web perché è dal 25% al 35% più piccolo di JPEG con una qualità simile, mentre PNG è il migliore quando serve la trasparenza.',
      },
    ],
  },
  guidesSection: {
    heading: 'Guide',
    subheading:
      'Guide passo passo per ottenere file più piccoli senza perdere qualità visibile.',
    cards: [
      {
        title: 'Come comprimere le immagini per WhatsApp senza perdere qualità',
        desc: 'Riduci le foto prima di inviarle in modo che restino nitide e si inviino velocemente.',
        cta: 'Leggi la guida →',
      },
      {
        title: 'JPG vs PNG vs WebP: quale formato dovresti usare?',
        desc: 'Dimensioni dei file, qualità e trasparenza a confronto, per scegliere il formato giusto.',
        cta: 'Leggi la guida →',
      },
      {
        title: 'Come ridurre le dimensioni di un’immagine a 100 KB per web ed email',
        desc: 'Passo dopo passo: arriva a 100 KB senza perdere qualità visibile.',
        cta: 'Leggi la guida →',
      },
    ],
  },
  shareSection: {
    heading: 'Condividi CompressMyPic con i tuoi amici',
    text: 'Questo strumento ti è stato utile? Aiuta un amico a comprimere anche le sue immagini: basta un tocco.',
    shareText:
      'Comprimi immagini online gratis — senza registrazione, senza filigrana. Prova CompressMyPic:',
    siteUrl: 'https://compressmypic.online/',
    shareOn: 'Condividi su {name}',
    copyLink: 'Copia link',
    copied: 'Copiato!',
    share: 'Condividi',
    emailSubject: 'Compressore di immagini gratuito – CompressMyPic', // 'Free Image Compressor – CompressMyPic'
    nativeShareTitle: 'CompressMyPic – Compressore di immagini gratuito', // 'CompressMyPic – Free Image Compressor'
  },
  toolPageLayout: {
    home: 'Home',
    privacyPill: 'Elaborazione 100% privata nel browser · I file non lasciano mai il tuo dispositivo',
    noUploads: 'Nessun caricamento sui server',
    freeNote: 'Gratis · Senza registrazione · Senza filigrana',
    howToTitle: 'Come usare {name}',
    howToIntro:
      'Segui questi semplici passaggi per completare la tua attività, direttamente nel browser.',
    featuresTitle: 'Perché usare {name} di CompressMyPic?',
    faqTitle: '{name} — Domande frequenti',
    relatedTitle: 'Strumenti gratuiti per immagini correlati',
    commentsTitle: 'Commenti',
    commentsNote: 'Condividi la tua opinione su questo strumento: scrivi solo il tuo nome e pubblica. Nessun account necessario.',
    commentsNamePlaceholder: 'Il tuo nome',
    commentsTextPlaceholder: 'Scrivi il tuo commento…',
    commentsSubmit: 'Pubblica il commento',
    commentsPosting: 'Pubblicazione…',
    commentsEmpty: 'Sii il primo a commentare.',
    commentsPosted: 'Grazie! Il tuo commento è online.',
    commentsLoadError: 'Impossibile caricare i commenti. Riprova.',
    commentsPostError: 'Impossibile pubblicare il tuo commento. Riprova.',
    commentsRetry: 'Riprova',
    commentsLoading: 'Caricamento commenti…',
  },
  uploadZone: {
    dropText: 'Trascina e rilascia le immagini qui',
    browseButton: 'sfoglia file',
    browsePrefix: 'oppure',
    browseSuffix: 'dal tuo computer o telefono',
    orPaste: 'Incolla (Ctrl+V) supportato',
    hint: 'Max {max} MB per immagine',
    errorTooBig: '"{name}" supera il limite massimo di {max} MB.',
    errorBadType: '"{name}" non è in un formato supportato ({formats}).',
    errorUnreadable: '"{name}" è un file vuoto (0 byte).',
    errorMore: '(+{count} altri errori)',
    formatsLabel: 'JPG, PNG, WebP, HEIC',
    ariaLabel:
      'Area di caricamento immagini. Trascina e rilascia o fai clic per sfogliare i file.', // 'Upload images area. Drag and drop or click to browse files.'
    errorLoadFailed: 'File danneggiato o illeggibile.', // App.tsx handleFilesSelected catch: 'Corrupted or unreadable image file.'
  },
  comparisonModal: {
    titlePrefix: 'Confronto visivo della qualità',
    beforeLabel: 'Originale (prima)',
    afterLabel: 'Compressa (dopo)',
    closeLabel: 'Chiudi la vista di confronto',
    instruction: 'Trascina il cursore a sinistra o a destra per controllare la qualità di ogni pixel.',
    sliderLabel: 'Cursore',
    sideBySideLabel: 'Fianco a fianco',
    zoomInLabel: 'Ingrandisci',
    zoomOutLabel: 'Riduci',
    originalLabel: 'Originale:',
    outputLabel: 'Risultato:',
    reductionLabel: 'Riduzione:',
    sizeChangeLabel: 'Variazione di dimensione:',
    qualityLabel: 'Impostazione di qualità:',
    formatLabel: 'Formato:',
    modalAriaLabel: 'Finestra di confronto immagini', // 'Image comparison modal'
    altCompressed: 'Versione compressa di {name}', // 'Compressed version of {name}'
    altOriginal: 'Versione originale di {name}', // 'Original version of {name}'
    altProcessed: 'Versione elaborata di {name}', // 'Processed version of {name}'
  },
  homeMeta: {
    seoTitle: 'Compressore immagini gratis online – Riduci a 100 KB',
    seoDescription:
      'Comprimi immagini gratis: riduci le dimensioni senza perdere qualità. Comprimi JPG, PNG e WebP senza registrazione né filigrana, direttamente nel browser.',
    h1: 'Compressore di immagini gratuito online',
    subtitle: 'Riduci le dimensioni dei file JPG, PNG, WebP e HEIC direttamente nel browser.',
  },
  categories: {
    compress: 'Comprimi',
    resize: 'Ridimensiona',
    convert: 'Converti',
    'crop-edit': 'Ritaglia e modifica',
    'ai-tools': 'Strumenti IA',
    create: 'Crea',
    privacy: 'Strumenti privacy',
    developer: 'Strumenti per sviluppatori',
  },
  compressionControls: {
    modeLabel: 'Modalità di compressione', // 'Compression Mode'
    presetLow: 'Compressione bassa (85%)', // 'Low Compression (85%)'
    presetBalanced: 'Equilibrata (70%)', // 'Balanced (70%)'
    presetHigh: 'Compressione alta (50%)', // 'High Compression (50%)'
    presetCustom: 'Personalizzata', // 'Custom'
    formatLabel: 'Formato di output', // 'Output Format'
    formatOriginal: 'Originale', // 'Original'
    qualityLabel: 'Qualità desiderata:', // 'Quality Target:'
    qualityHigh: 'Alta fedeltà', // 'High Fidelity' (quality >= 80)
    qualityOptimal: 'Equilibrio ideale per il web', // 'Optimal Web Balance' (60–79)
    qualityMax: 'Massimo risparmio di spazio', // 'Max Space Savings' (< 60)
    qualityAriaLabel: 'Cursore della qualità dal 10 al 100 percento', // 'Quality slider from 10 to 100 percent'
    compressAll: 'Comprimi tutto di nuovo', // 'Re-compress All'
    compressing: 'Compressione in corso…', // 'Compressing...'
    clearAll: 'Cancella tutto', // 'Clear All'
    clearAllTitle: 'Cancella tutte le immagini', // 'Clear all images'
    transparencyTitle: 'Avviso sulla trasparenza per la conversione in JPEG', // 'Transparency Notice for JPEG Conversion'
    transparencyBody:
      'Il formato JPEG non supporta la trasparenza (canali alfa). Gli sfondi trasparenti verranno sostituiti con uno sfondo solido (bianco per impostazione predefinita). Seleziona PNG o WebP se vuoi mantenere gli sfondi trasparenti.',
    pngTip:
      'Il PNG è un formato senza perdita e ignora il cursore della qualità, quindi ricodificare un PNG a volte può eguagliare o superare le dimensioni originali. Per i PNG dall’aspetto fotografico, scegliere WebP o JPG di solito genera file dal 50% all’80% più piccoli.',
  },
  resultsList: {
    summary: 'Riepilogo della compressione', // 'Compression Summary'
    image: 'Immagine', // 'Image' (count === 1)
    images: 'Immagini', // 'Images' (count !== 1)
    totalOriginal: 'Totale originale:', // 'Total Original:'
    totalCompressed: 'Totale compresso:', // 'Total Compressed:'
    totalSaved: 'Totale risparmiato:', // 'Total Saved:'
    processing: 'Elaborazione in corso…', // 'Processing...'
    grewBy: '(aumentato di {bytes})', // '(grew by {bytes})'
    reduction: 'Riduzione:', // 'Reduction:'
    sizeChange: 'Variazione di dimensione:', // 'Size Change:'
    downloadAll: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Creazione ZIP ({progress}%)…', // 'Creating ZIP ({progress}%)...'
    compare: 'Confronta', // 'Compare'
    compareTitle: 'Fai clic per vedere il confronto visivo della qualità', // 'Click to inspect visual quality comparison'
    compareActionTitle: 'Confronta il prima e il dopo visivo', // 'Compare visual before/after'
    download: 'Scarica', // 'Download'
    retry: 'Riprova', // 'Retry'
    removeTitle: 'Rimuovi immagine', // 'Remove image'
    removeAriaLabel: 'Rimuovi {name}', // 'Remove {name}'
    keptOriginal: 'L’originale è stato mantenuto (la ricodifica era più grande)', // 'Kept original (re-encode was larger)'
    grewByStatus: 'Aumentato di {bytes}: la ricodifica è più grande dell’originale', // 'Grew by {bytes} — re-encode is larger than the original'
    compressedOk: 'Compresso con successo', // 'Compressed successfully'
    optimizing: 'Ottimizzazione dei pixel…', // 'Optimizing pixels...'
    compressionError: 'Errore di compressione', // 'Compression error'
    original: 'Originale', // 'Original' (metric label)
    compressed: 'Compresso', // 'Compressed' (metric label)
    output: 'Risultato', // 'Output' (metric label when original kept)
    spaceSaved: 'Spazio risparmiato', // 'Space Saved'
    formatLabel: 'Formato:', // 'Format:' (in "{w}×{h}px · Format: {fmt}")
    alpha: 'Alfa', // 'Alpha' badge
    largerTitle: 'L’output è {bytes} più grande dell’originale.', // 'Output is {bytes} larger than the original.'
    largerPngNote:
      'La ricodifica PNG senza perdita ignora il cursore della qualità; WebP o JPG di solito sono molto più piccoli per i PNG dall’aspetto fotografico.',
    largerNote:
      'Questa immagine era già molto compressa per la qualità selezionata.',
    keepOriginal: 'Mantieni originale', // 'Keep original'
  },
} as const;

// ---------------------------------------------------------------------------
// HOME REGISTRY ENTRY — for the merge into src/locales/it/tools.ts
// (mirrors the PT home entry in pt-fr/i18n-pt.ts: HOME_ENTRY_PT).
// seoTitle + seoDescription are IDENTICAL to IT.homeMeta above. relatedSlugs
// stay in English, exactly as in the EN/PT registries. The merge should add
// the ToolDefinition type import and place this entry first in
// TOOLS_REGISTRY_IT. The IT home slug is '/it/' (slug-map-it.ts); the registry
// entry keeps slug '/' per the ES/PT pattern (the app maps '/' -> '/it/').
// ---------------------------------------------------------------------------

// Per-tool workspace UI strings in Italian (Standard Italian) — COMPLETE (all 48 tools).
// Assembled from tool-ui-it-batch1.ts … tool-ui-it-batch6.ts (coordinator merge).
// Target: merged into src/locales/it/ui.ts as the TOOL_UI_IT export.
// Italian (Standard Italian), tu forms. Keyed by English slug.
// English source is in a comment on each line. Placeholders in braces
// are filled at runtime and must be kept as-is.
// NOTE: the '/image-metadata-viewer' gpsWarning string is split across JSX
// lines in the page file with an inline link button; gpsWarningLink
// carries that link's text. The '/target-file-size-compressor' table
// uses the EN runtime placeholder names {bytes}/{qualityLabel}/{percent}
// (maxSuffix keeps {size}: the component replaces only {size} there).
// fileSingular/filePlural are both 'file' — Italian has no distinct
// singular/plural for it. Do not 'fix'.

export const TOOL_UI_IT = {

  '/image-resizer': {
    comparisonTitlePrefix: 'Confronto ridimensionamento', // 'Resize Comparison'
    comparisonAfterLabel: 'Ridimensionata (dopo)', // 'Resized (After)'
    presetInstagramPost: 'Post di Instagram (1080×1080)', // 'Instagram Post (1080×1080)'
    presetInstagramStory: 'Storia di Instagram (1080×1920)', // 'Instagram Story (1080×1920)'
    presetYouTubeThumb: 'Miniatura di YouTube (1280×720)', // 'YouTube Thumb (1280×720)'
    presetFacebookCover: 'Copertina di Facebook (851×315)', // 'Facebook Cover (851×315)'
    presetXHeader: 'Intestazione di X (1500×500)', // 'X Header (1500×500)'
    presetFullHd: 'Full HD (1920×1080)', // 'Full HD (1920×1080)' — unchanged
    errorResizeFailed: 'Ridimensionamento non riuscito.', // 'Resize failed.'
    errorCorruptedFile: 'File immagine danneggiato o illeggibile.', // 'Corrupted or unreadable image file.'
    resizeMode: 'Modalità di ridimensionamento', // 'Resize Mode'
    modeByPixels: 'Per pixel (L × A)', // 'By Pixels (W × H)'
    modeByPercentage: 'Per percentuale (%)', // 'By Percentage (%)'
    outputFormat: 'Formato di output', // 'Output Format'
    formatOriginal: 'Originale', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    widthLabel: 'Larghezza (px)', // 'Width (px)'
    heightLabel: 'Altezza (px)', // 'Height (px)'
    placeholderAuto: 'Auto', // placeholder 'Auto' — same in Italian
    aspectRatioLocked: 'Rapporto di aspetto bloccato', // 'Aspect Ratio Locked'
    aspectRatioUnlocked: 'Sbloccato (personalizzato)', // 'Unlocked (Custom)'
    fitModeLabel: 'Modalità di adattamento:', // 'Fit Mode:'
    fitContain: 'Contieni (senza ritaglio)', // 'Contain (No Crop)'
    fitCover: 'Copri (ritaglio centrale)', // 'Cover (Center Crop)'
    fitStretchExact: 'Allunga esatto', // 'Stretch Exact'
    quickPresets: 'Modelli rapidi social e web', // 'Quick Social & Web Presets'
    scalePercentage: 'Percentuale di scala:', // 'Scale Percentage:'
    outputQuality: 'Qualità di output:', // 'Output Quality:'
    matteBg: 'Sfondo opaco:', // 'Matte BG:'
    resizing: 'Ridimensionamento…', // 'Resizing...'
    resizeAll: 'Ridimensiona tutto ({count})', // 'Resize All ({count})'
    clear: 'Pulisci', // 'Clear'
    batchReady: 'Lotto pronto', // 'Batch Ready'
    batchReadySingular: '{count} immagine ridimensionata pronta da scaricare', // '{count} resized image ready to download'
    batchReadyPlural: '{count} immagini ridimensionate pronte da scaricare', // '{count} resized images ready to download'
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    resizedStatus: 'Ridimensionata ({original} → {converted})', // 'Resized ({original} → {converted})'
    compare: 'Confronta', // 'Compare'
    download: 'Scarica', // 'Download'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
  },
  '/image-converter': {
    comparisonTitlePrefix: 'Confronto conversione di formato', // 'Format Conversion Comparison'
    comparisonAfterLabel: 'Convertita (dopo)', // 'Converted (After)'
    errorConversionFailed: 'Conversione non riuscita.', // 'Conversion failed.'
    errorUnsupportedFile: 'File immagine non supportato o danneggiato.', // 'Unsupported or corrupted image file.'
    convertToFormat: 'Converti nel formato', // 'Convert To Format'
    formatWebp: 'WebP (il più leggero per il web)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (universale)', // 'JPG (Universal)'
    formatPng: 'PNG (senza perdita e con trasparenza)', // 'PNG (Lossless Alpha)'
    transparencyFillColor: 'Colore di riempimento trasparenza', // 'Transparency Fill Color'
    quality: 'Qualità', // 'Quality'
    qualityLosslessPng: 'PNG senza perdita', // 'Lossless PNG'
    converting: 'Conversione…', // 'Converting...'
    convertAll: 'Converti tutto ({count})', // 'Convert All ({count})'
    clear: 'Pulisci', // 'Clear'
    conversionComplete: 'Conversione completata', // 'Conversion Complete'
    filesConverted: '{count} file convertiti in {format}', // '{count} files converted to {format}'
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    convertedStatus: 'Convertito in {ext}', // 'Converted to {ext}'
    compare: 'Confronta', // 'Compare'
    download: 'Scarica', // 'Download'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
  },
  '/rotate-flip-image': {
    quickRotateFlip: 'Rotazione rapida', // 'Quick Rotate & Flip'
    rotate90Left: 'Ruota 90° a sinistra', // 'Rotate 90° Left'
    rotate90Right: 'Ruota 90° a destra', // 'Rotate 90° Right'
    rotate180: '180°', // '180°'
    flipHorizontal: 'Specchia orizzontale', // 'Flip Horizontal'
    flipVertical: 'Specchia verticale', // 'Flip Vertical'
    outputFormat: 'Formato di output', // 'Output Format'
    formatOriginal: 'Originale', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    rotationAngle: 'Angolo di rotazione:', // 'Rotation Angle:'
    resetTo0: 'Reimposta a 0°', // 'Reset to 0°'
    applyAngle: 'Applica angolo', // 'Apply Angle'
    clear: 'Pulisci', // 'Clear'
    batchReady: 'Lotto pronto', // 'Batch Ready'
    transformedImagesReady: '{count} immagini trasformate pronte', // '{count} transformed images ready'
    creatingZip: 'Creazione ZIP...', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    rotatedBadge: 'Ruotata {angle}°', // 'Rotated {angle}°'
    flippedH: ' · Specchiata O', // ' · Flipped H'
    flippedV: ' · Specchiata V', // ' · Flipped V'
    compare: 'Confronta', // 'Compare'
    download: 'Scarica', // 'Download'
    removeItem: 'Rimuovi {name}', // 'Remove {name}' (aria-label)
    transformFailed: 'Trasformazione non riuscita.', // 'Transform failed.'
    corruptedImage: 'Immagine danneggiata o illeggibile.', // 'Corrupted or unreadable image.'
    comparisonTitlePrefix: 'Confronto ruota e specchia', // 'Rotate & Flip Comparison'
    comparisonAfterLabel: 'Modificata (dopo)', // 'Edited (After)'
  },
  '/image-to-pdf': {
    uploadTitle: 'Trascina immagini per unirle in PDF', // 'Drop images to combine into PDF'
    couldNotRead: 'Impossibile leggere "{filename}". Assicurati che sia un\'immagine valida.', // 'Could not read "{filename}". Please ensure it is a valid image.'
    pdfGenerationFailed: 'Generazione del PDF non riuscita.', // 'PDF generation failed.'
    encodingPage: 'Codifica pagina {current} di {total}...', // 'Encoding page {current} of {total}...'
    generatingPdf: 'Generazione PDF...', // 'Generating PDF...'
    pageSize: 'Dimensione pagina', // 'Page Size'
    pageSizeA4: 'A4 (210 × 297 mm)', // 'A4 (210 × 297 mm)'
    pageSizeLetter: 'Letter USA (8,5 × 11 pollici)', // 'US Letter (8.5 × 11 in)'
    pageSizeFit: 'Adatta alla dimensione dell\'immagine', // 'Fit to Image Size'
    orientation: 'Orientamento', // 'Orientation'
    orientationAuto: 'Auto (corrisponde alla foto)', // 'Auto (Match Photo)'
    orientationPortrait: 'Verticale', // 'Portrait'
    orientationLandscape: 'Orizzontale', // 'Landscape'
    margin: 'Margine', // 'Margin'
    marginNone: 'Nessun margine (sanguinatura)', // 'No Margin (Full Bleed)'
    marginSmall: 'Margine piccolo', // 'Small Margin'
    marginMedium: 'Margine medio', // 'Medium Margin'
    imagePlacement: 'Posizionamento immagine', // 'Image Placement'
    placementContain: 'Contieni (immagine intera)', // 'Contain (Full Image)'
    placementCover: 'Copri (riempi pagina)', // 'Cover (Fill Page)'
    pdfFilename: 'Nome file PDF', // 'PDF Filename'
    pdfImageQuality: 'Qualità immagine PDF:', // 'PDF Image Quality:'
    createDownloadPdf: 'Crea e scarica PDF ({count} pag.)', // 'Create & Download PDF ({count}p)'
    clear: 'Pulisci', // 'Clear'
    pdfReady: 'PDF pronto ({count} {pages} · {size})', // 'PDF ready ({count} {pages} · {size})'
    pageSingular: 'pagina', // 'page'
    pagePlural: 'pagine', // 'pages'
    downloadPdfAgain: 'Scarica di nuovo il PDF', // 'Download PDF Again'
    pageOrder: 'Ordine pagine ({count} {pages})', // 'Page Order ({count} {pages})'
    pageOrderSingular: 'Pagina', // 'Page' (in Page Order heading)
    pageOrderPlural: 'Pagine', // 'Pages' (in Page Order heading)
    movePageUp: 'Sposta pagina su', // 'Move page up' (title)
    movePageDown: 'Sposta pagina giù', // 'Move page down' (title)
    removePage: 'Rimuovi pagina', // 'Remove page' (title)
  },
  '/image-metadata-viewer': {
    uploadTitle: 'Trascina un\'immagine per ispezionare EXIF e metadati', // 'Drop an image to inspect EXIF & metadata'
    unableToParse: 'Impossibile analizzare i metadati dell\'immagine.', // 'Unable to parse image metadata.'
    embeddedMetadataFound: 'Metadati incorporati trovati ({count} tipi di tag)', // 'Embedded metadata found ({count} tag types)'
    noTagsDetected: 'Nessun tag EXIF, GPS o nascosto della fotocamera rilevato', // 'No EXIF, GPS, or hidden camera tags detected'
    stripMetadata: 'Rimuovi metadati', // 'Strip Metadata'
    copyJson: 'Copia JSON', // 'Copy JSON'
    copiedJson: 'JSON copiato', // 'Copied JSON'
    exportJson: 'Esporta JSON', // 'Export JSON'
    clear: 'Pulisci', // 'Clear' (title)
    gpsDetected: 'Coordinate di posizione GPS rilevate', // 'GPS Location Coordinates Detected'
    latitude: 'Latitudine:', // 'Latitude:'
    longitude: 'Longitudine:', // 'Longitude:'
    gpsWarning:
      'Condividere questa immagine così com\'è può rivelare dove è stata scattata la foto. Usa Rimuovi metadati immagine prima di pubblicare online.', // 'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.' — split across JSX lines in the page, with an inline link button
    gpsWarningLink: 'Rimuovi metadati immagine', // inline link text inside the GPS warning: 'Remove Image Metadata' — extra key, not in the Spanish table
    extractedMetadata: 'Metadati estratti ({count} proprietà)', // 'Extracted Metadata ({count} properties)'
    privacyTag: 'Tag privacy', // 'Privacy Tag'
  },
  '/remove-image-metadata': {
    uploadTitle: 'Trascina foto per rimuovere EXIF, GPS e metadati', // 'Drop photos to strip EXIF, GPS & metadata'
    failedToStrip: 'Rimozione dei metadati non riuscita.', // 'Failed to strip metadata.'
    strippingMethod: 'Metodo di rimozione', // 'Stripping Method'
    losslessStrip: 'Rimozione binaria senza perdita (JPG/PNG)', // 'Lossless Binary Strip (JPG/PNG)'
    fullCanvasReencode: 'Ricodifica completa su canvas', // 'Full Canvas Re-encode'
    outputFormat: 'Formato di output', // 'Output Format'
    formatOriginal: 'Originale', // 'Original'
    formatJpg: 'JPG', // 'JPG'
    reencodeQuality: 'Qualità di ricodifica (usata per WebP/HEIC o ricodifica completa):', // 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):'
    cleaning: 'Pulizia...', // 'Cleaning...'
    recleanAll: 'Ripulisci tutto di nuovo', // 'Re-clean All'
    clear: 'Pulisci', // 'Clear'
    privacyVerified: 'Privacy verificata', // 'Privacy Verified'
    cleanImagesReady: '{count} immagini pulite pronte, con metadati rimossi', // '{count} clean images ready with metadata stripped'
    creatingZip: 'Creazione ZIP...', // 'Creating ZIP...'
    downloadAllCleanZip: 'Scarica tutte pulite (ZIP)', // 'Download All Clean (ZIP)'
    strippedTags: 'Rimossi {before} tag di metadati → {after} rimanenti', // 'Stripped {before} metadata tags → {after} remaining'
    verifiedClean: 'Pulito verificato (0 tag EXIF/GPS)', // 'Verified clean (0 EXIF/GPS tags)'
    losslessBinaryStrip: 'Rimozione binaria senza perdita', // 'Lossless binary strip'
    cleanCanvasExport: 'Export pulito su canvas', // 'Clean Canvas export'
    scrubbing: 'Rimozione intestazioni EXIF e GPS...', // 'Scrubbing EXIF & GPS headers...'
    downloadClean: 'Scarica pulita', // 'Download Clean'
    removeItem: 'Rimuovi {name}', // 'Remove {name}' (aria-label)
  },
  '/favicon-generator': {
    uploadTitle: 'Trascina qui il tuo logo o icona', // 'Drop your logo or icon here'
    uploadSubtitlePrefix: 'PNG o SVG quadrati consigliati · ', // 'Square PNG or SVG recommended · '
    uploadBrowseFile: 'sfoglia file', // 'browse file'
    errorGenerateFailed: 'Generazione del pacchetto favicon non riuscita.', // 'Failed to generate favicon package.'
    backgroundFill: 'Riempimento di sfondo', // 'Background Fill'
    transparent: 'Trasparente', // 'Transparent'
    padding: 'Padding', // 'Padding'
    cornerRadius: 'Raggio angoli', // 'Corner Radius'
    tabPreviewAlt: 'Anteprima scheda', // alt 'Tab preview'
    myWebsite: 'Il mio sito', // 'My Website'
    darkTabPreviewAlt: 'Anteprima scheda scura', // alt 'Dark tab preview'
    darkModeTab: 'Scheda in modalità scura', // 'Dark Mode Tab'
    packingZip: 'Impacchettamento ZIP…', // 'Packing ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    clear: 'Pulisci', // title 'Clear'
    downloadFaviconIco: 'Scarica favicon.ico', // title 'Download favicon.ico'
    downloadFile: 'Scarica {filename}', // title `Download ${asset.filename}`
    htmlHeadSnippet: 'Snippet HTML <head>', // 'HTML <head> Snippet'
    copied: 'Copiato!', // 'Copied!'
    copyHtml: 'Copia HTML', // 'Copy HTML'
  },
  '/image-color-picker': {
    uploadTitle: 'Trascina un\'immagine o incolla uno screenshot (Ctrl+V)', // 'Drop an image or paste screenshot (Ctrl+V)'
    errorUnableToLoadImage: 'Impossibile caricare l\'immagine.', // 'Unable to load image.'
    clickAnywhereToPin: 'Clicca ovunque per fissare un colore', // 'Click anywhere to pin a color'
    newImage: 'Nuova immagine', // 'New Image'
    pixelInspector: 'Ispettore di pixel', // 'Pixel Inspector'
    copyLabel: 'Copia {label}', // title `Copy ${row.label}`
    pickedSwatches: 'Campioni scelti ({count})', // 'Picked Swatches ({count})'
    exportCss: 'Esporta CSS', // 'Export CSS'
    clickPixelsHint: 'Clicca i pixel dell\'immagine per salvare i colori nella tua palette.', // 'Click pixels on the image to save colors to your palette.'
    clickToSelectCopy: 'Clicca per selezionare e copiare {hex}', // title `Click to select & copy ${c.hex}`
  },
  '/image-dimensions-checker': {
    uploadTitle: 'Trascina immagini per ispezionare dimensioni e proporzioni esatte', // 'Drop images to inspect exact dimensions & ratios'
    minWidthCheck: 'Larghezza minima (px)', // 'Min Width Check (px)'
    minHeightCheck: 'Altezza minima (px)', // 'Min Height Check (px)'
    placeholderMinWidth: 'es.: 1200', // placeholder 'e.g. 1200'
    placeholderMinHeight: 'es.: 630', // placeholder 'e.g. 630'
    exportCsv: 'Esporta CSV', // 'Export CSV'
    exportJson: 'Esporta JSON', // 'Export JSON'
    clear: 'Cancella', // 'Clear'
    headerImage: 'Immagine', // table header 'Image'
    headerDimensions: 'Dimensioni', // table header 'Dimensions'
    headerAspectRatio: 'Proporzioni', // table header 'Aspect Ratio'
    headerOrientation: 'Orientamento', // table header 'Orientation'
    headerSizeFormat: 'Dimensioni / Formato', // table header 'Size / Format'
    headerPrint300Dpi: 'Stampa a 300 DPI', // table header 'Print @300 DPI'
    headerSpecCheck: 'Controllo specifiche', // table header 'Spec Check'
    orientationLandscape: 'Orizzontale', // 'Landscape'
    orientationPortrait: 'Verticale', // 'Portrait'
    orientationSquare: 'Quadrata', // 'Square'
    alphaTag: ' · Alfa', // ' · Alpha'
    specPass: 'Superato', // 'Pass'
    specBelowMin: 'Sotto il minimo', // 'Below Min'
    csvYes: 'Sì', // CSV value 'Yes'
    csvNo: 'No', // CSV value 'No'
  },
  '/image-cropper': {
    uploadTitle: 'Trascina un\'immagine per ritagliarla in modo interattivo', // 'Drop an image to crop interactively'
    errorUnableToLoadImage: 'Impossibile caricare l\'immagine.', // 'Unable to load image.'
    errorCanvasContext: 'Impossibile inizializzare il contesto del canvas.', // 'Unable to initialize canvas context.'
    errorCropExportFailed: 'Esportazione del ritaglio non riuscita.', // 'Crop export failed.'
    aspectFree: 'Libera', // aspect preset 'Free'
    selection: 'Selezione:', // 'Selection:'
    zoomOut: 'Riduci zoom', // aria-label 'Zoom out'
    zoomIn: 'Ingrandisci', // aria-label 'Zoom in'
    removeImage: 'Rimuovi immagine', // aria-label 'Remove image'
    cropSourceAlt: 'Immagine di origine per il ritaglio', // alt 'Crop source'
    originalLabel: 'Originale:', // 'Original:'
    cropOptions: 'Opzioni di ritaglio', // 'Crop Options'
    selectFull: 'Seleziona tutto', // 'Select Full'
    aspectRatioPreset: 'Preimpostazioni proporzioni', // 'Aspect Ratio Preset'
    cropWidth: 'Larghezza ritaglio', // 'Crop Width'
    cropHeight: 'Altezza ritaglio', // 'Crop Height'
    outputFormat: 'Formato di output', // 'Output Format'
    formatOriginal: 'Originale', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualità', // 'Quality'
    cropping: 'Ritaglio in corso…', // 'Cropping...'
    cropAndDownload: 'Ritaglia e scarica', // 'Crop & Download'
  },
  '/image-watermark': {
    uploadTitle: 'Trascina un\'immagine per aggiungere una filigrana di testo o logo', // 'Drop an image to add a text or logo watermark'
    errorUnableToLoadImage: 'Impossibile caricare l\'immagine.', // 'Unable to load image.'
    errorUnableToLoadLogo: 'Impossibile caricare l\'immagine del logo.', // 'Unable to load logo image.'
    errorWatermarkExportFailed: 'Esportazione dell\'immagine con filigrana non riuscita.', // 'Watermark export failed.'
    fallbackWatermarkText: 'Filigrana', // canvas fallback text 'Watermark'
    tiledPreview: 'Anteprima a mosaico', // 'Tiled Preview'
    dragToPosition: 'Trascina sull\'immagine per posizionare', // 'Drag on Image to Position'
    changeImage: 'Cambia immagine', // 'Change Image'
    watermarkType: 'Tipo di filigrana', // 'Watermark Type'
    modeText: 'Filigrana di testo', // 'Text Watermark'
    modeLogo: 'Immagine logo', // 'Logo Image'
    watermarkTextLabel: 'Testo della filigrana', // 'Watermark Text'
    placeholderBrand: '© Il tuo marchio', // placeholder '© Your Brand'
    textColor: 'Colore testo', // 'Text Color'
    size: 'Dimensione', // 'Size'
    uploadLogo: 'Carica logo (PNG / SVG)', // 'Upload Logo (PNG / SVG)'
    changeLogo: 'Cambia immagine logo', // 'Change Logo Image'
    logoWidth: 'Larghezza logo', // 'Logo Width'
    opacity: 'Opacità', // 'Opacity'
    rotation: 'Rotazione', // 'Rotation'
    tiledRepeatPattern: 'Motivo ripetuto a mosaico', // 'Tiled Repeat Pattern'
    tileSpacing: 'Spaziatura mosaico', // 'Tile Spacing'
    anchorPresets: 'Preimpostazioni di ancoraggio (o trascina sull\'immagine)', // 'Anchor Presets (or drag on image)'
    formatOrig: 'Orig', // 'Orig' — same abbreviation in Italian
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualità', // 'Quality'
    exporting: 'Esportazione in corso…', // 'Exporting...'
    downloadWatermarked: 'Scarica immagine con filigrana', // 'Download Watermarked Image'
  },
  '/blur-pixelate-image': {
    uploadTitle: 'Trascina un\'immagine per sfocare o pixelizzare aree', // 'Drop an image to blur or pixelate areas'
    errorUnableToLoadImage: 'Impossibile caricare l\'immagine.', // 'Unable to load image.'
    errorExportFailed: 'Esportazione non riuscita.', // 'Export failed.'
    paintOverAreasBlur: 'Dipingi le aree da sfocare', // 'Paint Over Areas to Blur'
    paintOverAreasPixelate: 'Dipingi le aree da pixelizzare', // 'Paint Over Areas to Pixelate'
    wholeImagePreview: 'Anteprima immagine intera', // 'Whole-Image Preview'
    undo: 'Annulla', // 'Undo'
    resetBrush: 'Reimposta pennello', // 'Reset Brush'
    removeImage: 'Rimuovi immagine', // aria-label 'Remove image'
    targetArea: 'Area di destinazione', // 'Target Area'
    brushArea: 'Area pennello', // 'Brush Area'
    wholeImage: 'Immagine intera', // 'Whole Image'
    effectStyle: 'Stile effetto', // 'Effect Style'
    pixelateMosaic: 'Mosaico pixelizzato', // 'Pixelate Mosaic'
    smoothBlur: 'Sfocatura fluida', // 'Smooth Blur'
    blurRadius: 'Raggio di sfocatura', // 'Blur Radius'
    mosaicBlockSize: 'Dimensione blocco mosaico', // 'Mosaic Block Size'
    brushSize: 'Dimensione pennello', // 'Brush Size'
    brushHint: 'Clicca e trascina direttamente sulla foto per nascondere volti, testi o targhe.', // 'Click and drag directly on the photo to hide faces, text, or license plates.'
    formatOrig: 'Orig', // 'Orig' — same abbreviation in Italian
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualità', // 'Quality'
    exporting: 'Esportazione in corso…', // 'Exporting...'
    downloadImage: 'Scarica immagine', // 'Download Image'
  },
  '/add-text-to-image': {
    uploadTitle: 'Trascina un\'immagine per aggiungere testi personalizzati', // 'Drop an image to add custom text overlays'
    errorUnableToLoadImage: 'Impossibile caricare l\'immagine.', // 'Unable to load image.'
    errorExportFailed: 'Esportazione non riuscita.', // 'Export failed.'
    dragAnyText: 'Trascina qualsiasi testo direttamente sull\'immagine', // 'Drag Any Text Directly on Image'
    changeImage: 'Cambia immagine', // 'Change Image'
    textLayer: 'Testo {index}', // tab `Text ${idx + 1}`
    add: 'Aggiungi', // 'Add'
    deleteActiveTextLayer: 'Elimina livello di testo attivo', // aria-label 'Delete active text layer'
    textContent: 'Contenuto del testo (supporta multilinea)', // 'Text Content (multi-line supported)'
    font: 'Carattere', // 'Font'
    fontInter: 'Inter / Sans pulita', // font option 'Inter / Clean Sans'
    fontImpact: 'Impact / Display per meme', // font option 'Impact / Meme Display'
    fontGeorgia: 'Georgia / Serif classico', // font option 'Georgia / Classic Serif'
    fontCourier: 'Courier / Monospaziato', // font option 'Courier / Monospace'
    fontTrebuchet: 'Trebuchet / Sans arrotondata', // font option 'Trebuchet / Rounded Sans'
    fill: 'Riempimento', // 'Fill'
    toggleBold: 'Attiva/disattiva grassetto', // aria-label 'Toggle Bold'
    toggleItalic: 'Attiva/disattiva corsivo', // aria-label 'Toggle Italic'
    size: 'Dimensione', // 'Size'
    rotation: 'Rotazione', // 'Rotation'
    textOutline: 'Contorno del testo', // 'Text Outline'
    dropShadow: 'Ombra', // 'Drop Shadow'
    defaultLayerText: 'Tocca due volte o modifica il testo', // default layer text 'Double-tap or edit text'
    defaultCaption: 'Didascalia {index}', // default layer text `Caption ${index + 1}`
    formatOrig: 'Orig', // 'Orig' — same abbreviation in Italian
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualità', // 'Quality'
    exporting: 'Esportazione in corso…', // 'Exporting...'
    downloadImageWithText: 'Scarica immagine con testo', // 'Download Image with Text'
  },
  '/image-border-generator': {
    uploadTitle: 'Trascina un\'immagine per aggiungere un bordo o una cornice personalizzata', // 'Drop an image to add a custom border or frame'
    errorUnableToLoadImage: 'Impossibile caricare l\'immagine.', // 'Unable to load image.'
    errorExportFailed: 'Esportazione non riuscita.', // 'Export failed.'
    framedPreview: 'Anteprima incorniciata', // 'Framed Preview'
    changeImage: 'Cambia immagine', // 'Change Image'
    quickFramePresets: 'Preimpostazioni rapide di cornice', // 'Quick Frame Presets'
    presetClassicWhite: 'Bianco classico', // preset 'Classic White'
    presetPolaroidFrame: 'Cornice Polaroid', // preset 'Polaroid Frame'
    presetDarkStudio: 'Studio scuro', // preset 'Dark Studio'
    presetGradientGlow: 'Bagliore sfumato', // preset 'Gradient Glow'
    borderStyle: 'Stile bordo', // 'Border Style'
    borderStyleSolid: 'Solido', // border type 'solid' (rendered capitalized)
    borderStyleGradient: 'Sfumato', // border type 'gradient' (rendered capitalized)
    borderStylePolaroid: 'Polaroid', // border type 'polaroid' (rendered capitalized)
    borderColor: 'Colore bordo', // 'Border Color'
    startColor: 'Colore iniziale', // 'Start Color'
    endColor: 'Colore finale', // 'End Color'
    gradientAngle: 'Angolo sfumatura', // 'Gradient Angle'
    borderSize: 'Dimensione bordo', // 'Border Size'
    frameRadius: 'Raggio cornice', // 'Frame Radius'
    photoRadius: 'Raggio foto', // 'Photo Radius'
    dropShadow: 'Ombra', // 'Drop Shadow'
    shadowNone: 'nessuna', // shadow level 'none' (rendered capitalized)
    shadowSoft: 'morbida', // shadow level 'soft' (rendered capitalized)
    shadowMedium: 'media', // shadow level 'medium' (rendered capitalized)
    shadowDeep: 'profonda', // shadow level 'deep' (rendered capitalized)
    exporting: 'Esportazione in corso…', // 'Exporting...'
    downloadFramedImage: 'Scarica immagine incorniciata', // 'Download Framed Image'
  },
  '/round-image-corners': {
    uploadTitle: 'Trascina un\'immagine per arrotondarne gli angoli', // 'Drop an image to round its corners'
    errorUnableToLoadImage: 'Impossibile caricare l\'immagine.', // 'Unable to load image.'
    errorExportFailed: 'Esportazione dell\'immagine arrotondata non riuscita.', // 'Failed to export rounded image.'
    liveCornerPreview: 'Anteprima live degli angoli', // 'Live Corner Preview'
    changeImage: 'Cambia immagine', // 'Change Image'
    cornerSettings: 'Impostazioni angoli', // 'Corner Settings'
    fullCirclePill: 'Cerchio completo / Pillola', // 'Full Circle / Pill'
    individualPerCorner: 'Controllo individuale per singolo angolo', // 'Individual Per-Corner Control'
    allCornersRadius: 'Raggio di tutti gli angoli', // 'All Corners Radius'
    cornerTopLeft: 'In alto a sinistra', // per-corner label 'Top Left'
    cornerTopRight: 'In alto a destra', // per-corner label 'Top Right'
    cornerBottomLeft: 'In basso a sinistra', // per-corner label 'Bottom Left'
    cornerBottomRight: 'In basso a destra', // per-corner label 'Bottom Right'
    outerCornerFill: 'Riempimento angoli esterni', // 'Outer Corner Fill'
    transparentPngWebp: 'Trasparente (PNG/WebP)', // 'Transparent (PNG/WebP)'
    solidColor: 'Colore pieno', // 'Solid Color'
    outputFormat: 'Formato di output', // 'Output Format'
    exporting: 'Esportazione in corso…', // 'Exporting...'
    downloadRoundedImage: 'Scarica immagine arrotondata', // 'Download Rounded Image'
  },
  '/image-brightness-editor': {
    uploadTitle: 'Trascina un\'immagine per regolare la luminosità', // ToneEditorTool title `Drop an image to adjust ${cfg.label.toLowerCase()}` (mode 'brightness')
    errorUnableToLoadImage: 'Impossibile caricare l\'immagine.', // 'Unable to load image.'
    errorExportFailed: 'Esportazione dell\'immagine modificata non riuscita.', // 'Failed to export adjusted image.'
    viewAfter: 'Dopo', // view tab 'after' (rendered capitalized)
    viewBefore: 'Prima', // view tab 'before' (rendered capitalized)
    viewSplitCompare: 'Confronto diviso', // view tab 'Split Compare'
    fullscreenCompare: 'Confronto a schermo intero', // 'Fullscreen Compare'
    removeImage: 'Rimuovi immagine', // title/aria-label 'Remove image'
    beforeLabel: 'Prima', // split slider label 'Before'
    afterLabel: 'Dopo', // split slider label 'After'
    originalPreviewAlt: 'Anteprima originale', // alt 'Original preview'
    originalComparisonAlt: 'Confronto originale', // alt 'Original comparison'
    brightnessControls: 'Controlli di luminosità', // 'Brightness Controls'
    reset: 'Reimposta', // 'Reset'
    brightnessLevel: 'Livello di luminosità', // 'Brightness Level'
    minLabel: '-100% Più scuro', // min label '-100% Darker'
    maxLabel: '+100% Più chiaro', // max label '+100% Brighter'
    quickPresets: 'Preimpostazioni rapide', // 'Quick Presets'
    presetDark: 'Scuro (-30%)', // preset 'Dark (-30%)'
    presetDim: 'Fioco (-15%)', // preset 'Dim (-15%)'
    presetOriginal: 'Originale (0%)', // preset 'Original (0%)'
    presetBright: 'Chiaro (+15%)', // preset 'Bright (+15%)'
    presetVibrant: 'Vivido (+30%)', // preset 'Vibrant (+30%)'
    presetHighKey: 'Chiave alta (+50%)', // preset 'High Key (+50%)'
    outputFormat: 'Formato di output', // 'Output Format'
    formatOriginal: 'Originale', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualità', // 'Quality'
    exporting: 'Esportazione in corso…', // 'Exporting...'
    downloadEditedImage: 'Scarica immagine modificata', // 'Download Edited Image'
    comparisonTitlePrefix: 'Confronto luminosità', // ComparisonModal titlePrefix `Brightness Comparison`
    comparisonAfterLabel: 'Modificata (dopo)', // ComparisonModal afterLabel 'Edited (After)'
  },
  '/image-contrast-editor': {
    uploadTitle: 'Trascina un\'immagine per regolare il contrasto', // 'Drop an image to adjust contrast'
    comparisonTitlePrefix: 'Confronto contrasto', // 'Contrast Comparison'
    comparisonAfterLabel: 'Modificata (dopo)', // 'Edited (After)'
    errorUnableToLoadImage: 'Impossibile caricare l\'immagine.', // 'Unable to load image.'
    errorExportFailed: 'Esportazione dell\'immagine modificata non riuscita.', // 'Failed to export adjusted image.'
    tabAfter: 'Dopo', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Prima', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'Confronto diviso', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'Confronto a schermo intero', // 'Fullscreen Compare'
    removeImage: 'Rimuovi immagine', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Anteprima originale', // alt 'Original preview'
    originalComparisonAlt: 'Confronto originale', // alt 'Original comparison'
    splitBeforeLabel: 'Prima', // split slider left label 'Before'
    splitAfterLabel: 'Dopo', // split slider right label 'After'
    controlsHeading: 'Controlli contrasto', // '{label} Controls' (contrast mode)
    reset: 'Reimposta', // 'Reset'
    levelLabel: 'Livello di contrasto', // '{label} Level' (contrast mode)
    minLabel: '-100% Piatto', // minLabel '-100% Flat'
    maxLabel: '+100% Alto contrasto', // maxLabel '+100% High Contrast'
    quickPresets: 'Preimpostazioni rapide', // 'Quick Presets'
    presetSoft: 'Morbido (-25%)', // 'Soft (-25%)'
    presetMuted: 'Attenuato (-10%)', // 'Muted (-10%)'
    presetOriginal: 'Originale (0%)', // 'Original (0%)'
    presetCrisp: 'Nitido (+20%)', // 'Crisp (+20%)'
    presetPunchy: 'Deciso (+40%)', // 'Punchy (+40%)'
    presetDramatic: 'Drammatico (+70%)', // 'Dramatic (+70%)'
    outputFormat: 'Formato di uscita', // 'Output Format'
    formatOriginal: 'Originale', // 'Original' — same in Italian
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualità', // 'Quality'
    exporting: 'Esportazione…', // 'Exporting...'
    downloadEditedImage: 'Scarica immagine modificata', // 'Download Edited Image'
  },
  '/image-saturation-editor': {
    uploadTitle: 'Trascina un\'immagine per regolare la saturazione', // 'Drop an image to adjust saturation'
    comparisonTitlePrefix: 'Confronto saturazione', // 'Saturation Comparison'
    comparisonAfterLabel: 'Modificata (dopo)', // 'Edited (After)'
    errorUnableToLoadImage: 'Impossibile caricare l\'immagine.', // 'Unable to load image.'
    errorExportFailed: 'Esportazione dell\'immagine modificata non riuscita.', // 'Failed to export adjusted image.'
    tabAfter: 'Dopo', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Prima', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'Confronto diviso', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'Confronto a schermo intero', // 'Fullscreen Compare'
    removeImage: 'Rimuovi immagine', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Anteprima originale', // alt 'Original preview'
    originalComparisonAlt: 'Confronto originale', // alt 'Original comparison'
    splitBeforeLabel: 'Prima', // split slider left label 'Before'
    splitAfterLabel: 'Dopo', // split slider right label 'After'
    controlsHeading: 'Controlli saturazione', // '{label} Controls' (saturation mode)
    reset: 'Reimposta', // 'Reset'
    levelLabel: 'Livello di saturazione', // '{label} Level' (saturation mode)
    minLabel: '-100% Scala di grigi', // minLabel '-100% Grayscale'
    maxLabel: '+100% Vivido', // maxLabel '+100% Vivid'
    quickPresets: 'Preimpostazioni rapide', // 'Quick Presets'
    presetGrayscale: 'Scala di grigi (-100%)', // 'Grayscale (-100%)'
    presetMuted: 'Attenuato (-40%)', // 'Muted (-40%)'
    presetOriginal: 'Originale (0%)', // 'Original (0%)'
    presetRich: 'Ricco (+30%)', // 'Rich (+30%)'
    presetVivid: 'Vivido (+60%)', // 'Vivid (+60%)'
    presetHyper: 'Iper (+90%)', // 'Hyper (+90%)'
    outputFormat: 'Formato di uscita', // 'Output Format'
    formatOriginal: 'Originale', // 'Original' — same in Italian
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualità', // 'Quality'
    exporting: 'Esportazione…', // 'Exporting...'
    downloadEditedImage: 'Scarica immagine modificata', // 'Download Edited Image'
  },
  '/image-filters': {
    uploadTitle: 'Trascina un\'immagine per applicare filtri', // 'Drop an image to apply filters'
    comparisonTitlePrefix: 'Confronto filtri', // 'Filter Comparison'
    comparisonAfterLabel: 'Filtrata', // 'Filtered'
    errorUnableToLoadImage: 'Impossibile caricare l\'immagine.', // 'Unable to load image.'
    errorExportFailed: 'Esportazione non riuscita.', // 'Export failed.'
    filterPreview: 'Anteprima filtro', // 'Filter Preview'
    holdToViewOriginal: 'Tieni premuto per vedere l\'originale', // 'Hold to View Original'
    compare: 'Confronta', // 'Compare'
    removeImage: 'Rimuovi immagine', // aria-label 'Remove image'
    originalBadge: 'Originale', // 'Original' badge — same in Italian
    filterPresets: 'Preimpostazioni filtro', // 'Filter Presets'
    reset: 'Reimposta', // 'Reset'
    presetOriginal: 'Originale', // preset 'Original' — same in Italian
    presetGrayscale: 'Scala di grigi', // preset 'Grayscale'
    presetSepia: 'Seppia', // preset 'Sepia'
    presetVintage: 'Vintage', // preset 'Vintage' — same in Italian
    presetWarm: 'Caldo', // preset 'Warm'
    presetCool: 'Freddo', // preset 'Cool'
    presetHighContrast: 'Alto contrasto', // preset 'High Contrast'
    presetMatteFade: 'Matte Fade', // preset 'Matte Fade' — kept as in the registry
    presetDramatic: 'Drammatico', // preset 'Dramatic'
    presetNoir: 'Noir B/N', // preset 'B&W Noir'
    presetGoldenHour: 'Golden Hour', // preset 'Golden Hour' — kept as in the registry
    presetInvert: 'Inverti', // preset 'Invert'
    filterIntensity: 'Intensità filtro', // 'Filter Intensity'
    outputFormat: 'Formato di uscita', // 'Output Format'
    formatOriginal: 'Originale', // 'Original' — same in Italian
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualità', // 'Quality'
    rendering: 'Rendering…', // 'Rendering...'
    downloadFilteredImage: 'Scarica immagine filtrata', // 'Download Filtered Image'
  },
  '/add-background-to-image': {
    uploadTitle: 'Trascina un\'immagine o un PNG trasparente per aggiungere uno sfondo', // 'Drop an image or transparent PNG to add a backdrop'
    errorUnableToLoadImage: 'Impossibile caricare l\'immagine.', // 'Unable to load image.'
    errorExportFailed: 'Esportazione non riuscita.', // 'Export failed.'
    backgroundPreview: 'Anteprima sfondo', // 'Background Preview'
    changeImage: 'Cambia immagine', // 'Change Image'
    outputDimensionsPrefix: 'Uscita:', // 'Output:' (before '{w}×{h}px')
    backgroundType: 'Tipo di sfondo', // 'Background Type'
    modeSolidColor: 'Colore pieno', // 'Solid Color'
    modeGradient: 'Gradiente', // 'Gradient'
    modeBlurredPhoto: 'Foto sfocata', // 'Blurred Photo'
    selectColor: 'Seleziona colore {color}', // aria-label `Select color ${c}`
    color1: 'Colore 1', // 'Color 1' — same in Italian
    color2: 'Colore 2', // 'Color 2' — same in Italian
    angle: 'Angolo', // 'Angle'
    backdropBlurRadius: 'Raggio di sfocatura sfondo', // 'Backdrop Blur Radius'
    canvasAspectRatio: 'Rapporto di aspetto del canvas', // 'Canvas Aspect Ratio'
    aspectOriginal: 'Orig', // 'Orig' — same abbreviation in Italian
    imageScale: 'Scala immagine', // 'Image Scale'
    roundness: 'Arrotondamento', // 'Roundness'
    dropShadowBehindImage: 'Ombra dietro l\'immagine', // 'Drop Shadow Behind Image'
    formatPng: 'PNG', // 'PNG' — unchanged
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged
    exporting: 'Esportazione…', // 'Exporting...'
    downloadImage: 'Scarica immagine', // 'Download Image'
  },
  '/image-splitter': {
    uploadTitle: 'Trascina un\'immagine per dividerla in tessere di griglia o strisce', // 'Drop an image to split into grid tiles or strips'
    errorUnableToLoadImage: 'Impossibile caricare l\'immagine.', // 'Unable to load image.'
    errorSplitFailed: 'Divisione dell\'immagine non riuscita.', // 'Failed to split image.'
    errorCanvasContext: 'Impossibile inizializzare il contesto del canvas.', // 'Unable to initialize canvas context.'
    cutLinePreview: 'Anteprima linee di taglio ({rows} × {cols} = {tiles} tessere)', // 'Cut-Line Preview ({rows} × {cols} = {n} tiles)'
    changeImage: 'Cambia immagine', // 'Change Image'
    splitGuideAlt: 'Guida di divisione', // alt 'Split guide'
    splitLayout: 'Layout di divisione', // 'Split Layout'
    modeGrid: 'Griglia (N×M)', // 'Grid (N×M)'
    modeHorizontalStrips: 'Strisce orizz.', // 'Horiz. Strips'
    modeVerticalStrips: 'Strisce vert.', // 'Vert. Strips'
    rowsLabel: 'Righe (tagli orizzontali)', // 'Rows (Horizontal Cuts)'
    columnsLabel: 'Colonne (tagli verticali)', // 'Columns (Vertical Cuts)'
    preset2x2: '2×2', // preset '2×2' — unchanged
    preset3x3Instagram: '3×3 Instagram', // preset '3×3 Instagram' — unchanged
    preset1x3Carousel: '1×3 Carosello', // preset '1×3 Carousel'
    preset4x1Strips: '4×1 Strisce', // preset '4×1 Strips'
    formatOriginal: 'Orig', // 'Orig' — same abbreviation in Italian
    formatJpg: 'JPG', // 'JPG' — unchanged
    tileQuality: 'Qualità tessera', // 'Tile Quality'
    splittingImage: 'Divisione immagine…', // 'Splitting Image...'
    splitIntoTiles: 'Dividi in {count} tessere', // `Split into ${n} Tiles`
    splitComplete: 'Divisione completata', // 'Split Complete'
    tilesGenerated: '{count} tessere di immagine generate a piena risoluzione', // '{n} image tiles generated at full resolution'
    packagingZip: 'Impacchettamento ZIP…', // 'Packaging ZIP...'
    downloadAllTilesZip: 'Scarica tutte le tessere (ZIP)', // 'Download All Tiles (ZIP)'
    download: 'Scarica', // 'Download'
  },
  '/image-dpi-changer': {
    uploadTitle: 'Trascina immagini JPG o PNG per aggiornare i metadati DPI', // 'Drop JPG or PNG images to update DPI metadata'
    errorUpdateDpiFailed: 'Aggiornamento del DPI non riuscito.', // 'Failed to update DPI.'
    targetDpiPresets: 'Preimpostazioni DPI di destinazione', // 'Target DPI Presets'
    preset72Screen: '72 DPI (Schermo)', // '72 DPI (Screen)'
    preset96Windows: '96 DPI (Windows)', // '96 DPI (Windows)' — unchanged
    preset150DraftPrint: '150 DPI (Bozza di stampa)', // '150 DPI (Draft Print)'
    preset300HighPrint: '300 DPI (Stampa alta qualità)', // '300 DPI (High Print)'
    preset600Archival: '600 DPI (Archivio)', // '600 DPI (Archival)'
    customDpi: 'DPI personalizzato', // 'Custom DPI'
    applyDpi: 'Applica {dpi} DPI', // 'Apply {dpi} DPI'
    clear: 'Cancella', // 'Clear'
    batchReady: 'Batch pronto', // 'Batch Ready'
    filesUpdatedToDpi: '{count} file aggiornati a {dpi} DPI', // '{n} files updated to {dpi} DPI'
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    beforeDpi: 'Prima: {dpi} DPI', // 'Before: {dpi} DPI'
    beforeNotSet: 'Prima: Non impostato', // 'Before: Not set'
    verifiedDpi: 'Verificato: {dpi} DPI', // 'Verified: {dpi} DPI'
    methodLosslessJpeg: 'Aggiornamento intestazione JPEG senza perdita', // 'Lossless JPEG Header Update'
    methodLosslessPng: 'Aggiornamento pHYs PNG senza perdita', // 'Lossless PNG pHYs Update'
    methodConvertedPng: 'Convertito in PNG con DPI pHYs', // 'Converted to PNG with pHYs DPI'
    download: 'Scarica', // 'Download'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.file.name}`
  },
  '/image-to-base64': {
    uploadTitle: 'Trascina un\'immagine per codificarla come Base64', // 'Drop an image to encode as Base64'
    errorCouldNotEncode: 'Impossibile codificare il file.', // 'Could not encode file.'
    errorFailedToRead: 'Lettura del file immagine non riuscita.', // 'Failed to read image file.'
    errorClipboardWriteFailed: 'Scrittura negli appunti non riuscita: seleziona e copia dal riquadro di testo.', // 'Clipboard write failed — please select and copy from the text box.'
    fileLabel: 'File:', // 'File:' (summary card)
    outputLabel: 'Uscita:', // 'Output:' (summary card)
    charsLabel: 'caratteri', // 'chars' (summary card)
    encodeAnother: 'Codifica un\'altra', // 'Encode Another'
    tabDataUrl: 'Data URL', // tab 'Data URL'
    tabRawBase64: 'Base64 puro', // tab 'Raw Base64'
    tabHtmlImg: 'HTML <img>', // tab 'HTML <img>' — unchanged
    tabCssUrl: 'CSS url()', // tab 'CSS url()' — unchanged
    copied: 'Copiato!', // 'Copied!'
    copyOutput: 'Copia uscita', // 'Copy Output'
    saveTxt: 'Salva .TXT', // 'Save .TXT' — unchanged
  },
  '/base64-to-image': {
    pasteLabel: 'Incolla una stringa Base64 o Data URL', // 'Paste Base64 String or Data URL'
    clear: 'Cancella', // 'Clear'
    inputPlaceholder: 'Incolla data:image/png;base64,iVBORw0KGgo... o byte Base64 puri qui', // placeholder 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here'
    supportsNote: 'Supporta payload Base64 di PNG, JPG, WebP, GIF, SVG, BMP e ICO', // 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads'
    decoding: 'Decodifica…', // 'Decoding...'
    decodeImage: 'Decodifica immagine', // 'Decode Image'
    decodingBytes: 'Decodifica byte Base64…', // 'Decoding Base64 bytes...'
    errorUnsupportedDataUri: 'Codifica Data URI non supportata. Era atteso un payload Base64 (`;base64,`).', // 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'
    errorInvalidBase64: 'L\'input contiene caratteri Base64 non validi.', // 'Input contains invalid Base64 characters.'
    errorNotValidImage: 'I byte decodificati non formano un\'immagine valida leggibile dal browser.', // 'Decoded bytes do not form a valid browser-readable image.'
    errorUnableToDecode: 'Impossibile decodificare la stringa Base64.', // 'Unable to decode Base64 string.'
    decodedPreviewAlt: 'Anteprima Base64 decodificato', // alt 'Decoded Base64 preview'
    validImageDecoded: 'Immagine valida decodificata', // 'Valid Image Decoded'
    detectedFormat: 'Formato rilevato', // 'Detected Format'
    binarySize: 'Dimensione binaria', // 'Binary Size'
    dimensions: 'Dimensioni', // 'Dimensions'
    downloadFormat: 'Formato di download', // 'Download Format'
    formatOriginal: 'Originale', // 'Original' — same in Italian
    formatJpg: 'JPG', // 'JPG' — unchanged
    downloadImageFile: 'Scarica file immagine', // 'Download Image File'
  },
  '/image-color-palette-extractor': {
    uploadTitle: 'Trascina un’immagine per estrarre la sua palette di colori dominanti', // 'Drop an image to extract its dominant color palette'
    errorUnableToLoadImage: 'Impossibile caricare l’immagine.', // 'Unable to load image.'
    errorClipboardDenied: 'Autorizzazione appunti negata.', // 'Clipboard permission denied.'
    extractedPalette: 'Palette estratta ({count} colori)', // 'Extracted Palette ({count} Colors)'
    sourceAlt: 'Origine', // alt 'Source'
    changeImage: 'Cambia', // 'Change'
    numberOfColors: 'Numero di colori', // 'Number of Colors'
    colorsCount: '{count} colori', // '{count} colors'
    copyCssVariables: 'Copia variabili CSS', // 'Copy CSS Variables'
    copiedCss: 'CSS copiato!', // 'Copied CSS!'
    copyJson: 'Copia JSON', // 'Copy JSON'
    copiedJson: 'JSON copiato!', // 'Copied JSON!'
    downloadPalettePng: 'Scarica palette PNG', // 'Download Palette PNG'
  },
  '/gif-maker': {
    uploadTitle: 'Trascina 2 o più immagini per creare una GIF animata', // 'Drop 2 or more images to create an animated GIF'
    errorEncodeFailed: 'Impossibile codificare la GIF animata.', // 'Failed to encode animated GIF.'
    skippedFile: 'Saltato "{name}": {error}', // 'Skipped "{name}": {error}'
    skippedFileNoError: 'Saltato "{name}".', // 'Skipped "{name}".'
    generatedGif: 'GIF generata ({width}×{height} px · {size})', // 'Generated GIF ({width}×{height}px · {size})'
    liveTimingPreview: 'Anteprima live · Fotogramma {current}/{total}', // 'Live Timing Preview · Frame {current}/{total}'
    generatedGifAlt: 'GIF animata generata', // alt 'Generated animated GIF'
    pause: 'Pausa', // 'Pause'
    play: 'Riproduci', // 'Play'
    backToFrameEditor: 'Torna all’editor dei fotogrammi', // 'Back to Frame Editor'
    clearAllFrames: 'Cancella tutti i fotogrammi', // aria-label 'Clear all frames'
    largeGifWarning: 'Avviso GIF grande ({size})', // 'Large GIF Warning ({size})'
    largeGifWarningBody: 'Le GIF sopra i 5–15 MB possono caricarsi lentamente nelle app di messaggistica o non rispettare limiti rigorosi di piattaforma. Prova a ridurre larghezza/altezza di output (ad es. 480 px), abbassare la qualità o rimuovere fotogrammi.', // 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.'
    downloadAnimatedGif: 'Scarica GIF animata ({size})', // 'Download Animated GIF ({size})'
    animationSettings: 'Impostazioni di animazione', // 'Animation Settings'
    defaultFrameDuration: 'Durata predefinita fotogramma', // 'Default Frame Duration'
    frameDurationValue: '{ms} ms ({fps} FPS)', // '{ms} ms ({fps} FPS)'
    fpsPreset1: '1 FPS (1000 ms)', // '1 FPS (1000ms)'
    fpsPreset2: '2 FPS (500 ms)', // '2 FPS (500ms)'
    fpsPreset5: '5 FPS (200 ms)', // '5 FPS (200ms)'
    fpsPreset10: '10 FPS (100 ms)', // '10 FPS (100ms)'
    loopBehavior: 'Comportamento di ripetizione', // 'Loop Behavior'
    loopForever: 'Per sempre', // 'Forever'
    loopSetLoops: 'Imposta ripetizioni', // 'Set Loops'
    loopPlayOnce: 'Riproduci una volta', // 'Play Once'
    totalPlays: 'Riproduzioni totali', // 'Total Plays'
    outputDimensions: 'Dimensioni di output (px)', // 'Output Dimensions (px)'
    ratioLocked: 'Rapporto bloccato', // 'Ratio Locked'
    ratioUnlocked: 'Sbloccato', // 'Unlocked'
    widthLabel: 'Larghezza', // 'Width'
    heightLabel: 'Altezza', // 'Height'
    sizePreset480: '480 px', // '480px'
    sizePreset640: '640 px', // '640px'
    sizePreset800: '800 px', // '800px'
    sizePresetOriginal: 'Originale', // 'Original' — same in Portuguese
    frameFit: 'Adattamento fotogrammi', // 'Frame Fit'
    fitContain: 'Contieni', // 'contain'
    fitCover: 'Copri', // 'cover'
    backgroundMatte: 'Sfondo opaco', // 'Background Matte'
    colorPaletteQuality: 'Qualità della palette di colori', // 'Color Palette Quality'
    encodingGif: 'Codifica GIF ({progress}%)…', // 'Encoding GIF ({progress}%)...'
    generateAnimatedGif: 'Genera GIF animata', // 'Generate Animated GIF'
    reEncodeAnimatedGif: 'Ricodifica GIF animata', // 'Re-Encode Animated GIF'
    framesHeading: 'Fotogrammi ({count}) — Trascina o usa le frecce per riordinare', // 'Frames ({count}) — Drag or use arrows to reorder'
    perFrameDelayHint: 'Lascia vuota la durata per fotogramma per ereditare la durata globale di {ms} ms.', // 'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
    addFrames: 'Aggiungi fotogrammi', // 'Add Frames'
    delayMsLabel: 'Durata (ms):', // 'Delay (ms):'
    moveEarlier: 'Sposta prima', // title 'Move earlier'
    moveLater: 'Sposta dopo', // title 'Move later'
    duplicateFrame: 'Duplica fotogramma', // title 'Duplicate frame'
    removeFrame: 'Rimuovi fotogramma', // title 'Remove frame'
    moveFrameEarlierAria: 'Sposta il fotogramma {n} prima', // aria-label `Move frame ${n} earlier`
    moveFrameLaterAria: 'Sposta il fotogramma {n} dopo', // aria-label `Move frame ${n} later`
    duplicateFrameAria: 'Duplica il fotogramma {n}', // aria-label `Duplicate frame ${n}`
    removeFrameAria: 'Rimuovi il fotogramma {n}', // aria-label `Remove frame ${n}`
  },
  '/image-collage-maker': {
    uploadTitle: 'Trascina da 2 a 9 immagini per creare un collage di foto', // 'Drop 2 to 9 images to create a photo collage'
    errorExportFailed: 'Impossibile esportare il collage.', // 'Failed to export collage.'
    couldNotLoadFile: 'Impossibile caricare "{name}": {error}', // 'Could not load "{name}": {error}'
    couldNotLoadFileNoError: 'Impossibile caricare "{name}".', // 'Could not load "{name}".'
    collagePreview: 'Anteprima collage ({width}×{height} px)', // 'Collage Preview ({width}×{height}px)'
    clearAll: 'Cancella tutto', // 'Clear All'
    rearrangeCells: 'Riordina celle (trascina o tocca due celle per scambiare)', // 'Rearrange Cells (Drag or Tap Two Cells to Swap)'
    rearrangeCellsHint: 'Trascina qualsiasi scheda cella su un altro slot per riordinare subito le foto.', // 'Drag any cell card onto another slot to reorder photos instantly.'
    addPhotos: 'Aggiungi foto', // 'Add Photos'
    cellLabel: 'Cella {n}', // 'Cell {n}'
    slotLabel: 'Slot {n}', // canvas-drawn 'Slot {n}'
    moveCellBackAria: 'Sposta la cella {n} indietro', // aria-label `Move cell ${n} back`
    moveCellForwardAria: 'Sposta la cella {n} avanti', // aria-label `Move cell ${n} forward`
    clearCellAria: 'Cancella la cella {n}', // aria-label `Clear cell ${n}`
    addPhoto: 'Aggiungi foto', // 'Add Photo'
    collageLayout: 'Layout del collage', // 'Collage Layout'
    layout2x2: 'Griglia 2×2', // '2×2 Grid'
    layout3x3: 'Griglia 3×3', // '3×3 Grid'
    layoutVertical: 'Striscia verticale', // 'Vertical Strip'
    layoutHorizontal: 'Striscia orizzontale', // 'Horizontal Strip'
    cellProportionsSpacing: 'Proporzioni e spaziatura delle celle', // 'Cell Proportions & Spacing'
    equalCells: 'Celle uguali', // 'Equal Cells'
    colSplit: 'Divisione colonne', // 'Col Split'
    centerCol: 'Colonna centrale', // 'Center Col'
    rowSplit: 'Divisione righe', // 'Row Split'
    centerRow: 'Riga centrale', // 'Center Row'
    leadCellEmphasis: 'Enfasi cella principale', // 'Lead Cell Emphasis'
    gapSpacing: 'Spaziatura', // 'Gap Spacing'
    cellRadius: 'Raggio cella', // 'Cell Radius'
    backgroundColor: 'Colore di sfondo', // 'Background Color'
    backgroundSwatchAria: 'Sfondo {color}', // aria-label `Background ${c}`
    imageFit: 'Adattamento immagine', // 'Image Fit'
    fitCover: 'Copri', // 'cover'
    fitContain: 'Contieni', // 'contain'
    outputSize: 'Dimensioni di output (px)', // 'Output Size (px)'
    widthLabel: 'Larghezza', // 'Width'
    heightLabel: 'Altezza', // 'Height'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatPngLossless: 'PNG (senza perdita)', // 'PNG (Lossless)'
    jpgQuality: 'Qualità JPG', // 'JPG Quality'
    exportingCollage: 'Esportazione collage…', // 'Exporting Collage...'
    downloadCollage: 'Scarica collage ({format})', // 'Download Collage ({format})'
  },
  '/compress-image-to-50kb': {
    uploadTitle: 'Trascina le immagini per comprimerle sotto {target}', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Trascina le immagini per comprimerle sotto {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Compressione verso la dimensione obiettivo non riuscita.', // 'Target compression failed.'
    errorCorruptedFile: 'File immagine danneggiato o illeggibile.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Dimensione massima di file obiettivo', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} max)', // '({bytes} max)'
    needDifferentTarget: 'Ti serve un obiettivo diverso in KB?', // 'Need a different target KB?'
    outputFormat: 'Formato di output', // 'Output Format'
    formatOriginal: 'Originale', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale: 'Consenti il ridimensionamento intelligente delle dimensioni se la sola riduzione della qualità non può stare sotto {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng: 'Converti automaticamente i PNG grandi in WebP/JPG quando il PNG senza perdita non può raggiungere {target} in modo pulito', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng: 'Converti automaticamente i PNG grandi in WebP/JPG quando il PNG senza perdita non può raggiungere {target} in modo pulito', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Colore opaco per PNG trasparente:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Colore opaco per PNG trasparente:', // 'Transparent PNG matte color:'
    compressToTarget: 'Comprimi a {target}', // 'Compress to {target}'
    optimizing: 'Ottimizzazione…', // 'Optimizing...'
    clear: 'Cancella', // 'Clear'
    losslessPngSelected: 'PNG senza perdita selezionato:', // 'Lossless PNG selected:'
    losslessPngTitle: 'PNG senza perdita selezionato:', // 'Lossless PNG selected:'
    losslessPngWarning: 'Il PNG ignora i cursori di qualità, quindi ridurre le dimensioni dipende rigorosamente dalla riduzione delle dimensioni in pixel. Per foto grandi, scegli JPG o WebP per raggiungere limiti rigorosi in KB restando nitido.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote: 'Il PNG ignora i cursori di qualità, quindi ridurre le dimensioni dipende rigorosamente dalla riduzione delle dimensioni in pixel. Per foto grandi, scegli JPG o WebP per raggiungere limiti rigorosi in KB restando nitido.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Riepilogo compressione obiettivo · Obiettivo ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} di {total} {images} hanno raggiunto l’obiettivo di {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'immagine', // 'image'
    imagePlural: 'immagini', // 'images'
    summaryMissed: ' · {missed} non sono potute stare onestamente (dettagli sotto)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Totale risparmiato: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Totale risparmiato: {bytes} (aumentato di {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(aumentato di {grew})', // '(grew by {grew})'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Originale', // 'Original' (metric label)
    metricOutput: 'Output', // 'Output' (metric label)
    metricSpaceSaved: 'Spazio risparmiato', // 'Space Saved' (metric label)
    metricReduction: 'Riduzione', // 'Reduction' (metric label)
    metricSizeChange: 'Variazione dimensioni', // 'Size Change' (metric label)
    columnOriginal: 'Originale', // 'Original' (metric label)
    columnOutput: 'Output', // 'Output' (metric label)
    columnSpaceSaved: 'Spazio risparmiato', // 'Space Saved' (metric label)
    columnReduction: 'Riduzione', // 'Reduction' (metric label)
    columnSizeChange: 'Variazione dimensioni', // 'Size Change' (metric label)
    underTarget: 'Sotto {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Obiettivo mancato — {bytes}', // 'Target missed — {bytes}'
    compare: 'Confronta', // 'Compare'
    download: 'Scarica', // 'Download'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Aumentato di {bytes}: la ricodifica è più grande dell’originale', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP o JPG di solito sono più piccoli per PNG dall’aspetto fotografico.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP o JPG di solito sono più piccoli per PNG dall’aspetto fotografico.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Mantieni originale', // 'Keep original'
    keptOriginalNote: 'Il file originale è stato mantenuto perché la ricodifica lo ha reso più grande.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng: 'Il PNG senza perdita è stato convertito automaticamente in {format} per conservare una risoluzione maggiore sotto {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote: 'Il PNG senza perdita è stato convertito automaticamente in {format} per conservare una risoluzione maggiore sotto {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (trasparenza conservata)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew: 'Il file originale era già sotto {target} e la ricodifica lo ha aumentato di {bytes}. Usa "Mantieni originale" oppure passa a WebP/JPG per un output più piccolo.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean: 'Il file originale era già sotto {target}; è stato esportato in modo pulito con qualità {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder: 'Il file originale era già sotto {target}; è stato esportato in modo pulito con qualità {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull: 'Obiettivo raggiunto a piena risoluzione {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled: 'Obiettivo raggiunto ridimensionando a {width}×{height} px ({percent}%) con {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG senza perdita', // 'lossless PNG'
    qualityPercent: 'qualità {quality}%', // '{quality}% quality'
    statusCannotPng: 'Impossibile raggiungere {target} con PNG senza perdita (minimo raggiungibile: {bytes} a {width}×{height} px). Cambia il formato di output in JPG o WebP per raggiungere dimensioni più piccole.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull: 'Impossibile raggiungere {target} a dimensioni complete {width}×{height} px (la dimensione minima di qualità è {bytes}). Attiva "Consenti ridimensionamento dimensioni" per ridurre ulteriormente le dimensioni.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean: 'L’obiettivo richiesto di {target} non è stato raggiunto in modo pulito. Il più piccolo output codificato onesto è {bytes} ({width}×{height} px, qualità {quality}%). Prova una dimensione obiettivo più grande.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly: 'L’obiettivo richiesto di {target} non è stato raggiunto in modo pulito. Il più piccolo output codificato onesto è {bytes} ({width}×{height} px, qualità {quality}%). Prova una dimensione obiettivo più grande.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compressione obiettivo ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Compressa ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-100kb': {
    uploadTitle: 'Trascina le immagini per comprimerle sotto {target}', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Trascina le immagini per comprimerle sotto {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Compressione verso la dimensione obiettivo non riuscita.', // 'Target compression failed.'
    errorCorruptedFile: 'File immagine danneggiato o illeggibile.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Dimensione massima di file obiettivo', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} max)', // '({bytes} max)'
    needDifferentTarget: 'Ti serve un obiettivo diverso in KB?', // 'Need a different target KB?'
    outputFormat: 'Formato di output', // 'Output Format'
    formatOriginal: 'Originale', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale: 'Consenti il ridimensionamento intelligente delle dimensioni se la sola riduzione della qualità non può stare sotto {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng: 'Converti automaticamente i PNG grandi in WebP/JPG quando il PNG senza perdita non può raggiungere {target} in modo pulito', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng: 'Converti automaticamente i PNG grandi in WebP/JPG quando il PNG senza perdita non può raggiungere {target} in modo pulito', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Colore opaco per PNG trasparente:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Colore opaco per PNG trasparente:', // 'Transparent PNG matte color:'
    compressToTarget: 'Comprimi a {target}', // 'Compress to {target}'
    optimizing: 'Ottimizzazione…', // 'Optimizing...'
    clear: 'Cancella', // 'Clear'
    losslessPngSelected: 'PNG senza perdita selezionato:', // 'Lossless PNG selected:'
    losslessPngTitle: 'PNG senza perdita selezionato:', // 'Lossless PNG selected:'
    losslessPngWarning: 'Il PNG ignora i cursori di qualità, quindi ridurre le dimensioni dipende rigorosamente dalla riduzione delle dimensioni in pixel. Per foto grandi, scegli JPG o WebP per raggiungere limiti rigorosi in KB restando nitido.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote: 'Il PNG ignora i cursori di qualità, quindi ridurre le dimensioni dipende rigorosamente dalla riduzione delle dimensioni in pixel. Per foto grandi, scegli JPG o WebP per raggiungere limiti rigorosi in KB restando nitido.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Riepilogo compressione obiettivo · Obiettivo ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} di {total} {images} hanno raggiunto l’obiettivo di {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'immagine', // 'image'
    imagePlural: 'immagini', // 'images'
    summaryMissed: ' · {missed} non sono potute stare onestamente (dettagli sotto)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Totale risparmiato: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Totale risparmiato: {bytes} (aumentato di {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(aumentato di {grew})', // '(grew by {grew})'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Originale', // 'Original' (metric label)
    metricOutput: 'Output', // 'Output' (metric label)
    metricSpaceSaved: 'Spazio risparmiato', // 'Space Saved' (metric label)
    metricReduction: 'Riduzione', // 'Reduction' (metric label)
    metricSizeChange: 'Variazione dimensioni', // 'Size Change' (metric label)
    columnOriginal: 'Originale', // 'Original' (metric label)
    columnOutput: 'Output', // 'Output' (metric label)
    columnSpaceSaved: 'Spazio risparmiato', // 'Space Saved' (metric label)
    columnReduction: 'Riduzione', // 'Reduction' (metric label)
    columnSizeChange: 'Variazione dimensioni', // 'Size Change' (metric label)
    underTarget: 'Sotto {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Obiettivo mancato — {bytes}', // 'Target missed — {bytes}'
    compare: 'Confronta', // 'Compare'
    download: 'Scarica', // 'Download'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Aumentato di {bytes}: la ricodifica è più grande dell’originale', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP o JPG di solito sono più piccoli per PNG dall’aspetto fotografico.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP o JPG di solito sono più piccoli per PNG dall’aspetto fotografico.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Mantieni originale', // 'Keep original'
    keptOriginalNote: 'Il file originale è stato mantenuto perché la ricodifica lo ha reso più grande.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng: 'Il PNG senza perdita è stato convertito automaticamente in {format} per conservare una risoluzione maggiore sotto {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote: 'Il PNG senza perdita è stato convertito automaticamente in {format} per conservare una risoluzione maggiore sotto {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (trasparenza conservata)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew: 'Il file originale era già sotto {target} e la ricodifica lo ha aumentato di {bytes}. Usa "Mantieni originale" oppure passa a WebP/JPG per un output più piccolo.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean: 'Il file originale era già sotto {target}; è stato esportato in modo pulito con qualità {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder: 'Il file originale era già sotto {target}; è stato esportato in modo pulito con qualità {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull: 'Obiettivo raggiunto a piena risoluzione {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled: 'Obiettivo raggiunto ridimensionando a {width}×{height} px ({percent}%) con {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG senza perdita', // 'lossless PNG'
    qualityPercent: 'qualità {quality}%', // '{quality}% quality'
    statusCannotPng: 'Impossibile raggiungere {target} con PNG senza perdita (minimo raggiungibile: {bytes} a {width}×{height} px). Cambia il formato di output in JPG o WebP per raggiungere dimensioni più piccole.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull: 'Impossibile raggiungere {target} a dimensioni complete {width}×{height} px (la dimensione minima di qualità è {bytes}). Attiva "Consenti ridimensionamento dimensioni" per ridurre ulteriormente le dimensioni.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean: 'L’obiettivo richiesto di {target} non è stato raggiunto in modo pulito. Il più piccolo output codificato onesto è {bytes} ({width}×{height} px, qualità {quality}%). Prova una dimensione obiettivo più grande.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly: 'L’obiettivo richiesto di {target} non è stato raggiunto in modo pulito. Il più piccolo output codificato onesto è {bytes} ({width}×{height} px, qualità {quality}%). Prova una dimensione obiettivo più grande.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compressione obiettivo ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Compressa ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-200kb': {
    uploadTitle: 'Trascina le immagini per comprimerle sotto {target}', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Trascina le immagini per comprimerle sotto {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Compressione verso la dimensione obiettivo non riuscita.', // 'Target compression failed.'
    errorCorruptedFile: 'File immagine danneggiato o illeggibile.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Dimensione massima di file obiettivo', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} max)', // '({bytes} max)'
    needDifferentTarget: 'Ti serve un obiettivo diverso in KB?', // 'Need a different target KB?'
    outputFormat: 'Formato di output', // 'Output Format'
    formatOriginal: 'Originale', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale: 'Consenti il ridimensionamento intelligente delle dimensioni se la sola riduzione della qualità non può stare sotto {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng: 'Converti automaticamente i PNG grandi in WebP/JPG quando il PNG senza perdita non può raggiungere {target} in modo pulito', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng: 'Converti automaticamente i PNG grandi in WebP/JPG quando il PNG senza perdita non può raggiungere {target} in modo pulito', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Colore opaco per PNG trasparente:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Colore opaco per PNG trasparente:', // 'Transparent PNG matte color:'
    compressToTarget: 'Comprimi a {target}', // 'Compress to {target}'
    optimizing: 'Ottimizzazione…', // 'Optimizing...'
    clear: 'Cancella', // 'Clear'
    losslessPngSelected: 'PNG senza perdita selezionato:', // 'Lossless PNG selected:'
    losslessPngTitle: 'PNG senza perdita selezionato:', // 'Lossless PNG selected:'
    losslessPngWarning: 'Il PNG ignora i cursori di qualità, quindi ridurre le dimensioni dipende rigorosamente dalla riduzione delle dimensioni in pixel. Per foto grandi, scegli JPG o WebP per raggiungere limiti rigorosi in KB restando nitido.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote: 'Il PNG ignora i cursori di qualità, quindi ridurre le dimensioni dipende rigorosamente dalla riduzione delle dimensioni in pixel. Per foto grandi, scegli JPG o WebP per raggiungere limiti rigorosi in KB restando nitido.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Riepilogo compressione obiettivo · Obiettivo ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} di {total} {images} hanno raggiunto l’obiettivo di {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'immagine', // 'image'
    imagePlural: 'immagini', // 'images'
    summaryMissed: ' · {missed} non sono potute stare onestamente (dettagli sotto)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Totale risparmiato: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Totale risparmiato: {bytes} (aumentato di {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(aumentato di {grew})', // '(grew by {grew})'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Originale', // 'Original' (metric label)
    metricOutput: 'Output', // 'Output' (metric label)
    metricSpaceSaved: 'Spazio risparmiato', // 'Space Saved' (metric label)
    metricReduction: 'Riduzione', // 'Reduction' (metric label)
    metricSizeChange: 'Variazione dimensioni', // 'Size Change' (metric label)
    columnOriginal: 'Originale', // 'Original' (metric label)
    columnOutput: 'Output', // 'Output' (metric label)
    columnSpaceSaved: 'Spazio risparmiato', // 'Space Saved' (metric label)
    columnReduction: 'Riduzione', // 'Reduction' (metric label)
    columnSizeChange: 'Variazione dimensioni', // 'Size Change' (metric label)
    underTarget: 'Sotto {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Obiettivo mancato — {bytes}', // 'Target missed — {bytes}'
    compare: 'Confronta', // 'Compare'
    download: 'Scarica', // 'Download'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Aumentato di {bytes}: la ricodifica è più grande dell’originale', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP o JPG di solito sono più piccoli per PNG dall’aspetto fotografico.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP o JPG di solito sono più piccoli per PNG dall’aspetto fotografico.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Mantieni originale', // 'Keep original'
    keptOriginalNote: 'Il file originale è stato mantenuto perché la ricodifica lo ha reso più grande.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng: 'Il PNG senza perdita è stato convertito automaticamente in {format} per conservare una risoluzione maggiore sotto {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote: 'Il PNG senza perdita è stato convertito automaticamente in {format} per conservare una risoluzione maggiore sotto {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (trasparenza conservata)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew: 'Il file originale era già sotto {target} e la ricodifica lo ha aumentato di {bytes}. Usa "Mantieni originale" oppure passa a WebP/JPG per un output più piccolo.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean: 'Il file originale era già sotto {target}; è stato esportato in modo pulito con qualità {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder: 'Il file originale era già sotto {target}; è stato esportato in modo pulito con qualità {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull: 'Obiettivo raggiunto a piena risoluzione {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled: 'Obiettivo raggiunto ridimensionando a {width}×{height} px ({percent}%) con {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG senza perdita', // 'lossless PNG'
    qualityPercent: 'qualità {quality}%', // '{quality}% quality'
    statusCannotPng: 'Impossibile raggiungere {target} con PNG senza perdita (minimo raggiungibile: {bytes} a {width}×{height} px). Cambia il formato di output in JPG o WebP per raggiungere dimensioni più piccole.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull: 'Impossibile raggiungere {target} a dimensioni complete {width}×{height} px (la dimensione minima di qualità è {bytes}). Attiva "Consenti ridimensionamento dimensioni" per ridurre ulteriormente le dimensioni.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean: 'L’obiettivo richiesto di {target} non è stato raggiunto in modo pulito. Il più piccolo output codificato onesto è {bytes} ({width}×{height} px, qualità {quality}%). Prova una dimensione obiettivo più grande.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly: 'L’obiettivo richiesto di {target} non è stato raggiunto in modo pulito. Il più piccolo output codificato onesto è {bytes} ({width}×{height} px, qualità {quality}%). Prova una dimensione obiettivo più grande.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compressione obiettivo ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Compressa ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-500kb': {
    uploadTitle: 'Trascina le immagini per comprimerle sotto {target}', // 'Drop images to compress under {target}'
    uploadTitleTemplate: 'Trascina le immagini per comprimerle sotto {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Compressione verso la dimensione obiettivo non riuscita.', // 'Target compression failed.'
    errorCorruptedFile: 'File immagine danneggiato o illeggibile.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Dimensione massima di file obiettivo', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} max)', // '({bytes} max)'
    needDifferentTarget: 'Ti serve un obiettivo diverso in KB?', // 'Need a different target KB?'
    outputFormat: 'Formato di output', // 'Output Format'
    formatOriginal: 'Originale', // 'Original' — same in Portuguese
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale: 'Consenti il ridimensionamento intelligente delle dimensioni se la sola riduzione della qualità non può stare sotto {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng: 'Converti automaticamente i PNG grandi in WebP/JPG quando il PNG senza perdita non può raggiungere {target} in modo pulito', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    autoSwitchPng: 'Converti automaticamente i PNG grandi in WebP/JPG quando il PNG senza perdita non può raggiungere {target} in modo pulito', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Colore opaco per PNG trasparente:', // 'Transparent PNG matte color:'
    transparentPngMatteColor: 'Colore opaco per PNG trasparente:', // 'Transparent PNG matte color:'
    compressToTarget: 'Comprimi a {target}', // 'Compress to {target}'
    optimizing: 'Ottimizzazione…', // 'Optimizing...'
    clear: 'Cancella', // 'Clear'
    losslessPngSelected: 'PNG senza perdita selezionato:', // 'Lossless PNG selected:'
    losslessPngTitle: 'PNG senza perdita selezionato:', // 'Lossless PNG selected:'
    losslessPngWarning: 'Il PNG ignora i cursori di qualità, quindi ridurre le dimensioni dipende rigorosamente dalla riduzione delle dimensioni in pixel. Per foto grandi, scegli JPG o WebP per raggiungere limiti rigorosi in KB restando nitido.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    losslessPngNote: 'Il PNG ignora i cursori di qualità, quindi ridurre le dimensioni dipende rigorosamente dalla riduzione delle dimensioni in pixel. Per foto grandi, scegli JPG o WebP per raggiungere limiti rigorosi in KB restando nitido.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Riepilogo compressione obiettivo · Obiettivo ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} di {total} {images} hanno raggiunto l’obiettivo di {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'immagine', // 'image'
    imagePlural: 'immagini', // 'images'
    summaryMissed: ' · {missed} non sono potute stare onestamente (dettagli sotto)', // ' · {missed} could not honestly fit (details below)'
    totalSaved: 'Totale risparmiato: {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Totale risparmiato: {bytes} (aumentato di {grew})', // 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(aumentato di {grew})', // '(grew by {grew})'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Originale', // 'Original' (metric label)
    metricOutput: 'Output', // 'Output' (metric label)
    metricSpaceSaved: 'Spazio risparmiato', // 'Space Saved' (metric label)
    metricReduction: 'Riduzione', // 'Reduction' (metric label)
    metricSizeChange: 'Variazione dimensioni', // 'Size Change' (metric label)
    columnOriginal: 'Originale', // 'Original' (metric label)
    columnOutput: 'Output', // 'Output' (metric label)
    columnSpaceSaved: 'Spazio risparmiato', // 'Space Saved' (metric label)
    columnReduction: 'Riduzione', // 'Reduction' (metric label)
    columnSizeChange: 'Variazione dimensioni', // 'Size Change' (metric label)
    underTarget: 'Sotto {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Obiettivo mancato — {bytes}', // 'Target missed — {bytes}'
    compare: 'Confronta', // 'Compare'
    download: 'Scarica', // 'Download'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
    grewBy: 'Aumentato di {bytes}: la ricodifica è più grande dell’originale', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngNote: 'WebP o JPG di solito sono più piccoli per PNG dall’aspetto fotografico.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngHint: 'WebP o JPG di solito sono più piccoli per PNG dall’aspetto fotografico.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: 'Mantieni originale', // 'Keep original'
    keptOriginalNote: 'Il file originale è stato mantenuto perché la ricodifica lo ha reso più grande.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng: 'Il PNG senza perdita è stato convertito automaticamente in {format} per conservare una risoluzione maggiore sotto {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote: 'Il PNG senza perdita è stato convertito automaticamente in {format} per conservare una risoluzione maggiore sotto {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: 'WebP (trasparenza conservata)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew: 'Il file originale era già sotto {target} e la ricodifica lo ha aumentato di {bytes}. Usa "Mantieni originale" oppure passa a WebP/JPG per un output più piccolo.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnderClean: 'Il file originale era già sotto {target}; è stato esportato in modo pulito con qualità {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnder: 'Il file originale era già sotto {target}; è stato esportato in modo pulito con qualità {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull: 'Obiettivo raggiunto a piena risoluzione {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled: 'Obiettivo raggiunto ridimensionando a {width}×{height} px ({percent}%) con {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG senza perdita', // 'lossless PNG'
    qualityPercent: 'qualità {quality}%', // '{quality}% quality'
    statusCannotPng: 'Impossibile raggiungere {target} con PNG senza perdita (minimo raggiungibile: {bytes} a {width}×{height} px). Cambia il formato di output in JPG o WebP per raggiungere dimensioni più piccole.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull: 'Impossibile raggiungere {target} a dimensioni complete {width}×{height} px (la dimensione minima di qualità è {bytes}). Attiva "Consenti ridimensionamento dimensioni" per ridurre ulteriormente le dimensioni.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotClean: 'L’obiettivo richiesto di {target} non è stato raggiunto in modo pulito. Il più piccolo output codificato onesto è {bytes} ({width}×{height} px, qualità {quality}%). Prova una dimensione obiettivo più grande.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    statusCannotCleanly: 'L’obiettivo richiesto di {target} non è stato raggiunto in modo pulito. Il più piccolo output codificato onesto è {bytes} ({width}×{height} px, qualità {quality}%). Prova una dimensione obiettivo più grande.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compressione obiettivo ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Compressa ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/bulk-image-compressor': {
    uploadTitle: 'Trascina decine di immagini per la compressione in lote', // 'Drop dozens of images for bulk compression'
    errorCompressionFailed: 'Compressione non riuscita.', // 'Compression failed.'
    errorCorruptedFile: 'File immagine danneggiato o illeggibile.', // 'Corrupted or unreadable image file.'
    quickBatchProfiles: 'Profili rapidi di batch:', // 'Quick Batch Profiles:'
    profileWebFast: 'Web Veloce (WebP 75%)', // 'Web Fast (WebP 75%)'
    profileEmailSharing: 'Email / Condivisione (JPG 65%)', // 'Email / Sharing (JPG 65%)'
    profileHighFidelity: 'Alta Fedeltà (85%)', // 'High Fidelity (85%)'
    compressingBatch: 'Compressione batch in locale…', // 'Compressing batch locally...'
    // Strings rendered by CompressionControls, ResultsList and ComparisonModal
    // come from the shared i18n-it.ts dictionary sections (compressionControls,
    // resultsList, comparisonModal) — already translated in Batch 1.
  },
  '/target-file-size-compressor': {
    uploadTitleTemplate: 'Trascina immagini da comprimere sotto {target}', // `Drop images to compress under ${targetLabel}`
    uploadTitle: 'Trascina immagini da comprimere sotto {target}', // 'Drop images to compress under {target}' — fallback key in TargetSizeCompressorTool
    targetMaxFileSize: 'Dimensione massima di file desiderata', // 'Target Maximum File Size'
    targetNumberAria: 'Numero della dimensione di file desiderata', // aria-label 'Target file size number'
    maxSuffix: '({size} max)', // '({formatBytes(effectiveTargetBytes)} max)' — component replaces only {size} here
    targetMaxSuffix: '({bytes} max)', // '({bytes} max)' — fallback key in TargetSizeCompressorTool
    needDifferentTarget: 'Ti serve un altro obiettivo in KB?', // 'Need a different target KB?'
    preset20kb: '20 KB', // '20 KB' — unchanged
    preset50kb: '50 KB', // '50 KB' — unchanged
    preset100kb: '100 KB', // '100 KB' — unchanged
    preset200kb: '200 KB', // '200 KB' — unchanged
    preset500kb: '500 KB', // '500 KB' — unchanged
    preset1mb: '1 MB', // '1 MB' — unchanged
    outputFormat: 'Formato di uscita', // 'Output Format'
    formatOriginal: 'Originale', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged (format name)
    formatPng: 'PNG', // 'PNG' — unchanged (format name)
    allowDownscale: 'Consenti il ridimensionamento intelligente delle dimensioni se la sola riduzione della qualità non basta a stare sotto {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {targetLabel}'
    autoSwitchPng: 'Converti automaticamente i PNG grandi in WebP/JPG quando il PNG senza perdita non riesce a raggiungere {target} in modo pulito', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {targetLabel} cleanly'
    transparentPngMatteColor: 'Colore opaco per PNG trasparente:', // 'Transparent PNG matte color:'
    transparentPngMatte: 'Colore opaco per PNG trasparente:', // 'Transparent PNG matte color:' — fallback key in TargetSizeCompressorTool
    losslessPngTitle: 'PNG senza perdita selezionato:', // 'Lossless PNG selected:'
    losslessPngSelected: 'PNG senza perdita selezionato:', // 'Lossless PNG selected:' — fallback key in TargetSizeCompressorTool
    losslessPngNote: 'Il PNG ignora i cursori della qualità, quindi ridurre la dimensione dipende rigorosamente dalla riduzione delle dimensioni in pixel. Per foto grandi, scegli JPG o WebP per raggiungere limiti rigidi in KB restando nitido.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    compressToTarget: 'Comprimi a {target}', // 'Compress to {targetLabel}'
    optimizing: 'Ottimizzazione…', // 'Optimizing...'
    clear: 'Cancella', // 'Clear'
    targetSummary: 'Riepilogo della compressione mirata · Obiettivo ≤ {target}', // 'Target Compression Summary · Goal ≤ {targetLabel}'
    summaryMet: '{achieved} di {total} {images} hanno raggiunto l’obiettivo di {target}', // '{achievedCount} of {doneItems.length} {image/images} met the {targetLabel} target'
    imageSingular: 'immagine', // 'image'
    imagePlural: 'immagini', // 'images'
    summaryMissed: '· {missed} non sono riusciti a entrarci onestamente (dettagli sotto)', // '{missed} could not honestly fit (details below)'
    totalSaved: 'Totale risparmiato: {bytes}', // 'Total Saved: {formatBytes(totalSaved)}'
    totalGrew: '(cresciuto di {grew})', // '(grew by {formatBytes(Math.abs(totalSaved))})'
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    underTarget: 'Sotto {target} ({bytes})', // 'Under {targetLabel} ({formatBytes(compressedSize)})'
    targetMissed: 'Obiettivo mancato — {bytes}', // 'Target missed — {formatBytes(compressedSize)}'
    columnOriginal: 'Originale', // 'Original'
    columnOutput: 'Uscita', // 'Output'
    columnSpaceSaved: 'Spazio risparmiato', // 'Space Saved'
    columnReduction: 'Riduzione', // 'Reduction'
    columnSizeChange: 'Variazione di dimensione', // 'Size Change'
    metricOriginal: 'Originale', // 'Original' — fallback key in TargetSizeCompressorTool
    metricOutput: 'Uscita', // 'Output' — fallback key in TargetSizeCompressorTool
    metricSpaceSaved: 'Spazio risparmiato', // 'Space Saved' — fallback key in TargetSizeCompressorTool
    metricReduction: 'Riduzione', // 'Reduction' — fallback key in TargetSizeCompressorTool
    metricSizeChange: 'Variazione di dimensione', // 'Size Change' — fallback key in TargetSizeCompressorTool
    grewBy: 'Cresciuto di {bytes}: la ricodifica è più grande dell’originale.', // 'Grew by {amount} — re-encode is larger than the original.'
    grewPngHint: 'WebP o JPG di solito è più piccolo per i PNG fotografici.', // 'WebP or JPG is usually smaller for photo-like PNGs.'
    grewPngNote: 'WebP o JPG di solito è più piccolo per i PNG fotografici.', // 'WebP or JPG is usually smaller for photo-like PNGs.' — fallback key in TargetSizeCompressorTool
    keepOriginal: 'Mantieni originale', // 'Keep original'
    keptOriginalNote: 'Il file originale è stato mantenuto perché la ricodifica lo ha reso più grande.', // 'Kept original file because re-encoding made it larger.'
    statusAlreadyUnder: 'Il file originale era già sotto {target}; esportato in modo pulito con qualità del {quality}%.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusAlreadyUnderGrew: 'Il file originale era già sotto {target}, e la ricodifica lo ha fatto crescere di {bytes}. Usa «Mantieni originale» o passa a WebP/JPG per un’uscita più piccola.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusMetFull: 'Obiettivo raggiunto a risoluzione piena di {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled: 'Obiettivo raggiunto ridimensionando a {width}×{height} px (scala del {percent}%) con {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG senza perdita', // 'lossless PNG' — qualityLabel in src/utils/targetCompression.ts for PNG outputs (key ES/PT lack; prevents an English leak)
    statusCannotPng: 'Impossibile raggiungere {target} con PNG senza perdita (minimo raggiungibile: {bytes} a {width}×{height} px). Passa il formato di uscita a JPG o WebP per raggiungere dimensioni più piccole.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull: 'Impossibile raggiungere {target} con dimensioni piene di {width}×{height} px (la dimensione minima con qualità è {bytes}). Attiva «Consenti ridimensionamento delle dimensioni» per ridurre ulteriormente le dimensioni.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotCleanly: 'L’obiettivo richiesto di {target} non ha potuto essere raggiunto in modo pulito. L’uscita codificata onesta più piccola è {bytes} ({width}×{height} px, qualità del {quality}%). Prova un obiettivo più grande.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    switchedFormatNote: 'PNG senza perdita convertito automaticamente in {format} per preservare una risoluzione maggiore sotto {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    errorTargetFailed: 'Compressione mirata non riuscita.', // 'Target compression failed.'
    errorCorruptedFile: 'File immagine danneggiato o illeggibile.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'Compressione mirata ({target})', // `Target Compression (${targetLabel})`
    comparisonAfterLabel: 'Compressa ({bytes})', // `Compressed (${formatBytes(compressedSize)})`
    compare: 'Confronta', // 'Compare'
    download: 'Scarica', // 'Download'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-resizer': {
    uploadTitle: 'Trascina più immagini da ridimensionare in lotto', // 'Drop multiple images to bulk resize'
    batchResizeStrategy: 'Strategia di ridimensionamento in lotto', // 'Batch Resize Strategy'
    strategyBounding: 'Adatta a L × A max', // 'Fit Max W × H'
    strategyWidth: 'Larghezza uniforme', // 'Uniform Width'
    strategyExact: 'L × A esatto', // 'Exact W × H'
    strategyPercentage: 'Percentuale (%)', // 'Percentage (%)'
    outputFormat: 'Formato di uscita', // 'Output Format'
    formatOriginal: 'Originale', // 'Original'
    formatJpg: 'JPG', // 'JPG' — unchanged
    scaleAllImages: 'Ridimensiona tutte le immagini:', // 'Scale All Images:'
    maxWidth: 'Larghezza max (px)', // 'Max Width (px)'
    targetWidth: 'Larghezza desiderata (px)', // 'Target Width (px)'
    exactWidth: 'Larghezza esatta (px)', // 'Exact Width (px)'
    maxHeight: 'Altezza max (px)', // 'Max Height (px)'
    exactHeight: 'Altezza esatta (px)', // 'Exact Height (px)'
    doNotEnlarge: 'Non ingrandire le immagini più piccole', // 'Do not enlarge smaller images'
    fitMode: 'Modalità di adattamento', // 'Fit Mode'
    fitContain: 'Contieni', // 'Contain'
    fitCover: 'Copri', // 'Cover'
    fitStretch: 'Allunga', // 'Stretch'
    presetFullHd: 'Full HD 1920px', // 'Full HD 1920px' — unchanged
    presetBlog: 'Blog 1200px', // 'Blog 1200px' — unchanged
    presetEcommerce: 'E-commerce 1000×1000', // 'E-commerce 1000×1000'
    presetThumbnail: 'Miniatura 600px', // 'Thumbnail 600px'
    quality: 'Qualità:', // 'Quality:'
    matteBg: 'Sfondo opaco:', // 'Matte BG:'
    resizingProgress: 'Ridimensionamento ({processed}/{total})…', // 'Resizing ({processedCount}/{totalCount})...'
    bulkResize: 'Ridimensiona in lotto ({count})', // 'Bulk Resize ({items.length})'
    clear: 'Cancella', // 'Clear'
    bulkResizeComplete: 'Ridimensionamento in lotto completato', // 'Bulk Resize Complete'
    imagesResizedReadySingular: '{count} immagine ridimensionata e pronta', // '{count} image resized and ready'
    imagesResizedReadyPlural: '{count} immagini ridimensionate e pronte', // '{count} images resized and ready'
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    errorResizeFailed: 'Ridimensionamento in lotto non riuscito.', // 'Batch resize failed.'
    errorCorruptedFile: 'File immagine danneggiato o illeggibile.', // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: 'Confronto di ridimensionamento in lotto', // 'Bulk Resize Comparison'
    comparisonAfterLabel: 'Ridimensionata (dopo)', // 'Resized (After)'
    compare: 'Confronta', // 'Compare'
    download: 'Scarica', // 'Download'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
  },
  '/bulk-image-converter': {
    uploadTitle: 'Trascina più immagini da convertire in lotto', // 'Drop multiple images to bulk convert formats'
    convertBatchToFormat: 'Converti lotto nel formato', // 'Convert Batch To Format'
    formatWebp: 'WebP (il più leggero per il web)', // 'WebP (Smallest Web)'
    formatJpg: 'JPG (universale)', // 'JPG (Universal)'
    formatPng: 'PNG (senza perdita e con trasparenza)', // 'PNG (Lossless Alpha)'
    optionalFilenameSuffix: 'Suffisso di nome file opzionale', // 'Optional Filename Suffix'
    placeholderSuffix: 'es. _web', // placeholder 'e.g. _web'
    transparentFill: 'Riempimento trasparente', // 'Transparent Fill'
    qualityLosslessPng: 'Qualità (PNG senza perdita)', // 'Quality (Lossless PNG)'
    qualityPercent: 'Qualità ({quality}%)', // 'Quality ({quality}%)'
    convertingProgress: 'Conversione ({processed}/{total})…', // 'Converting ({processedCount}/{totalCount})...'
    convertAll: 'Converti tutto ({count})', // 'Convert All ({items.length})'
    clear: 'Cancella', // 'Clear'
    bulkConversionSummary: 'Riepilogo della conversione in lotto', // 'Bulk Conversion Summary'
    filesConvertedSummary: '{count} file convertiti in {format} · {original} → {converted}', // '{count} files converted to {format} · {totalOrig} → {totalOut}'
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    convertedTo: 'Convertito in {ext}', // 'Converted to {ext}'
    errorConversionFailed: 'Conversione in lotto non riuscita.', // 'Batch conversion failed.'
    errorUnsupportedFile: 'File immagine non supportato o danneggiato.', // 'Unsupported or corrupted image file.'
    comparisonTitlePrefix: 'Conversione di formato in lotto', // 'Bulk Format Conversion'
    comparisonAfterLabel: 'Convertita (dopo)', // 'Converted (After)'
    compare: 'Confronta', // 'Compare'
    download: 'Scarica', // 'Download'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
  },
  '/web-image-optimizer': {
    uploadTitle: 'Trascina asset web da ottimizzare per i Core Web Vitals', // 'Drop website assets to optimize for Core Web Vitals'
    webPerformancePresets: 'Preset di prestazioni web', // 'Web Performance Presets'
    presetHero: 'Hero / Banner', // 'Hero / Banner'
    presetHeroDesc: 'Max 1600 px · WebP 80%', // 'Max 1600px · WebP 80%'
    presetProduct: 'Prodotto e-commerce', // 'E-Commerce Product'
    presetProductDesc: 'Max 1200 px · WebP 82%', // 'Max 1200px · WebP 82%'
    presetThumb: 'Scheda / Miniatura', // 'Card / Thumbnail'
    presetThumbDesc: 'Max 640 px · WebP 75%', // 'Max 640px · WebP 75%'
    presetOg: 'Social OG / Email', // 'Social OG / Email'
    presetOgDesc: 'Max 1200 px · JPG 82%', // 'Max 1200px · JPG 82%'
    presetRetina: 'Grafica Retina 2×', // 'Retina 2× Graphic'
    presetRetinaDesc: 'Max 1920 px · WebP 88%', // 'Max 1920px · WebP 88%'
    webFormat: 'Formato web', // 'Web Format'
    maxDimension: 'Dimensione massima (lato lungo)', // 'Max Dimension (Long Edge)'
    keepOriginalDimensions: 'Mantieni dimensioni originali', // 'Keep Original Dimensions'
    max1920: 'Max 1920 px (Retina / Full HD)', // 'Max 1920px (Retina / Full HD)'
    max1600: 'Max 1600 px (Hero / Banner)', // 'Max 1600px (Hero / Banner)'
    max1200: 'Max 1200 px (Blog / Prodotto)', // 'Max 1200px (Blog / Product)'
    max800: 'Max 800 px (nel contenuto)', // 'Max 800px (In-Content)'
    max640: 'Max 640 px (miniature)', // 'Max 640px (Thumbnails)'
    quality: 'Qualità:', // 'Quality:'
    onlyDownscale: 'Riduci solo le immagini più grandi (i metadati EXIF e GPS vengono rimossi automaticamente)', // 'Only downscale larger images (EXIF & GPS metadata automatically stripped)'
    optimizing: 'Ottimizzazione…', // 'Optimizing...'
    optimizeForWeb: 'Ottimizza per il web ({count})', // 'Optimize for Web ({items.length})'
    clear: 'Cancella', // 'Clear'
    webPerformanceSummary: 'Riepilogo delle prestazioni web', // 'Web Performance Summary'
    pageWeightSaved: '({percent}% più leggero · {saved} di peso di pagina risparmiato)', // '({totalPct}% lighter · {formatBytes(totalSaved)} page weight saved)'
    pageWeightGrew: '(+{percent}% · cresciuto di {amount})', // '(+{totalPct}% · grew by {formatBytes})'
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    webReady: 'Pronto per il web ({percent})', // 'Web-Ready ({formatPercent})'
    grewBy: 'Cresciuto di {amount} ({percent})', // 'Grew by {amount} ({percent})'
    copyImg: 'Copia <img>', // 'Copy <img>'
    copiedHtml: 'HTML copiato', // 'Copied HTML'
    copyImgTitle: 'Copia il tag HTML img responsive con larghezza e altezza esplicite', // title 'Copy responsive HTML img tag with explicit width and height'
    errorOptimizationFailed: 'Ottimizzazione web non riuscita.', // 'Web optimization failed.'
    errorCorruptedFile: 'Immagine danneggiata o non supportata.', // 'Corrupted or unsupported image.'
    comparisonTitlePrefix: 'Confronto di ottimizzazione web', // 'Web Optimization Comparison'
    comparisonAfterLabel: 'Pronta per il web (dopo)', // 'Web-Ready (After)'
    compare: 'Confronta', // 'Compare'
    download: 'Scarica', // 'Download'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
  },
  '/gif-compressor': {
    uploadTitle: 'Trascina una GIF animata da comprimere', // 'Drop an animated GIF to compress'
    decodingGif: 'Decodifica dei fotogrammi GIF animati in locale nel tuo browser…', // 'Decoding animated GIF frames locally in your browser...'
    frameSingular: 'fotogramma', // 'frame'
    framePlural: 'fotogrammi', // 'frames'
    presetLight: 'Leggero', // 'Light'
    presetBalanced: 'Bilanciato', // 'Balanced'
    presetMaxShrink: 'Riduzione massima', // 'Max Shrink'
    colorPaletteLimit: 'Limite dei colori della tavolozza', // 'Color Palette Limit'
    colorsCount: '{count} colori', // '{maxColors} colors'
    outputScale: 'Scala di uscita', // 'Output Scale'
    scaleWithDims: '{percent}% ({width}×{height})', // '{scalePercent}% ({targetOutW}×{targetOutH})'
    frameRateOptimization: 'Ottimizzazione della frequenza dei fotogrammi', // 'Frame Rate Optimization'
    keepAllFrames: 'Mantieni tutti i fotogrammi', // 'Keep All Frames'
    dropEvery2nd: 'Salta ogni 2° fotogramma (~50% più piccola)', // 'Drop Every 2nd Frame (~50% smaller)'
    keep1of3: 'Mantieni 1 fotogramma ogni 3', // 'Keep 1 of Every 3 Frames'
    compressingGif: 'Compressione GIF ({progress}%)…', // 'Compressing GIF ({encodeProgress}%)...'
    compressGif: 'Comprimi GIF', // 'Compress GIF'
    reset: 'Reimposta', // 'Reset'
    originalGif: 'GIF originale', // 'Original GIF'
    compressedGif: 'GIF compressa', // 'Compressed GIF'
    sizeChange: 'Variazione di dimensione', // 'Size Change'
    sizeAndFrames: '{size} · {frames}f', // '{formatBytes(size)} · {frames}f'
    downloadCompressedGif: 'Scarica GIF compressa', // 'Download Compressed GIF'
    notSmallerNotice: 'Questa GIF sorgente era già molto ottimizzata o usa una tavolozza a fotogramma intero più grande dell’input. Per ridurla sotto {size}, abbassa il colore della tavolozza a 32–64 colori, riduci la Scala di uscita al 75% o al 50%, oppure salta ogni 2° fotogramma.', // 'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
    compressedByNotice: 'Compressa del {percent}% ({saved} risparmiati) in modo pulito nel tuo browser.', // 'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
    originalLabel: 'Originale ({width}×{height} px)', // 'Original ({width}×{height}px)'
    compressedLabel: 'Compressa ({width}×{height} px)', // 'Compressed ({width}×{height}px)'
    altOriginalGif: 'GIF originale', // alt 'Original GIF'
    altCompressedGif: 'GIF compressa', // alt 'Compressed GIF'
    errorGifFailed: 'Compressione GIF non riuscita.', // 'GIF compression failed.'
    errorDecodeFrames: 'Impossibile decodificare i fotogrammi della GIF.', // 'Could not decode GIF frames.'
    errorTooSmall: 'Il file è troppo piccolo per essere una GIF valida.', // 'File is too small to be a valid GIF.'
    errorNotValidGif: 'Il file selezionato non è un’animazione GIF87a o GIF89a valida.', // 'Selected file is not a valid GIF87a or GIF89a animation.'
    errorInvalidDims: 'La GIF ha dimensioni di canvas 0×0 non valide.', // 'GIF has invalid 0x0 canvas dimensions.'
    errorTruncatedColorTable: 'Tabella dei colori globale della GIF troncata.', // 'Truncated GIF Global Color Table.'
    errorNoFrames: 'Impossibile decodificare alcun fotogramma di immagine da questo file GIF.', // 'Could not decode any image frames from this GIF file.'
    errorCanvasContext: 'Impossibile inizializzare il contesto canvas 2D.', // 'Unable to initialize 2D canvas context.'
  },
  '/heic-to-jpg': {
    uploadTitle: 'Trascina foto HEIC o HEIF di iPhone da convertire in JPG', // 'Drop iPhone HEIC or HEIF photos to convert to JPG'
    notice: 'Decodifica le foto HEIC e HEIF di Apple in locale dentro il tuo browser con WebAssembly lato client (heic2any): le tue foto non lasciano mai il tuo dispositivo.', // 'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
    conversionPipeline: 'Flusso di conversione:', // 'Conversion Pipeline:'
    outputQuality: 'Qualità di uscita JPG', // 'JPG Output Quality'
    outputQualityLabel: 'Qualità di uscita JPG', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'qualità di uscita JPG', // `${targetLabel} output quality`
    smallerFile: 'File più piccolo (20%)', // 'Smaller file (20%)'
    balanced: 'Bilanciato (85%)', // 'Balanced (85%)'
    maxDetail: 'Massimo dettaglio (100%)', // 'Max detail (100%)'
    losslessPngOutput: 'Uscita PNG senza perdita', // 'Lossless PNG Output'
    losslessPngEncoding: 'Codifica PNG senza perdita', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: 'Codifica PNG senza perdita', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'Il PNG preserva bordi nitidi, testo e trasparenza alfa senza artefatti di compressione con perdita.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'Il PNG preserva bordi nitidi, testo e trasparenza alfa senza artefatti di compressione con perdita.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: 'Colore opaco per sfondo trasparente', // 'Transparent Background Matte Color'
    matteColorLabel: 'Colore opaco per sfondo trasparente', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: 'Colore di sfondo opaco', // 'Matte background color'
    matteWhite: 'Bianco', // 'White'
    matteBlack: 'Nero', // 'Black'
    matteLightGray: 'Grigio chiaro', // 'Light Gray'
    rasterExportScale: 'Scala di esportazione raster', // 'Raster Export Scale'
    rasterExportScaleHint: 'Moltiplicatore applicato alle dimensioni intrinseche dell’SVG (limitato a 8000px). Clicca Riconverti tutto dopo aver cambiato la scala.', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: 'Riconverti tutto', // 'Re-convert All'
    converting: 'Conversione…', // 'Converting...'
    clear: 'Cancella', // 'Clear'
    batchSummary: 'Riepilogo lotto HEIC → JPG', // 'HEIC → JPG Batch Summary'
    filesConverted: '{count} {files} convertiti · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Variazione', // 'Change'
    changeLabel: 'Variazione', // 'Change' — primary key in FormatConverterTool
    compare: 'Confronta', // 'Compare'
    downloadTarget: 'Scarica JPG', // 'Download JPG'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
    errorDecodeHint: 'Impossibile decodificare questo file HEIC/HEIF. Assicurati che sia una foto HEIC valida di iPhone o Apple.', // 'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
    errorDecodeFile: 'Impossibile decodificare «{filename}». Verifica che sia un’immagine HEIC valida.', // 'Could not decode "{filename}". Verify it is a valid HEIC image.'
    errorConvertFailed: 'Impossibile convertire {name} in JPG.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'HEIC → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-png': {
    uploadTitle: 'Trascina immagini JPG o JPEG da convertire in PNG senza perdita', // 'Drop JPG or JPEG images to convert to lossless PNG'
    conversionPipeline: 'Flusso di conversione:', // 'Conversion Pipeline:'
    outputQuality: 'Qualità di uscita PNG', // 'PNG Output Quality'
    outputQualityLabel: 'Qualità di uscita PNG', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'qualità di uscita PNG', // `${targetLabel} output quality`
    smallerFile: 'File più piccolo (20%)', // 'Smaller file (20%)'
    balanced: 'Bilanciato (85%)', // 'Balanced (85%)'
    maxDetail: 'Massimo dettaglio (100%)', // 'Max detail (100%)'
    losslessPngOutput: 'Uscita PNG senza perdita', // 'Lossless PNG Output'
    losslessPngEncoding: 'Codifica PNG senza perdita', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: 'Codifica PNG senza perdita', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'Il PNG preserva bordi nitidi, testo e trasparenza alfa senza artefatti di compressione con perdita.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'Il PNG preserva bordi nitidi, testo e trasparenza alfa senza artefatti di compressione con perdita.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: 'Colore opaco per sfondo trasparente', // 'Transparent Background Matte Color'
    matteColorLabel: 'Colore opaco per sfondo trasparente', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: 'Colore di sfondo opaco', // 'Matte background color'
    matteWhite: 'Bianco', // 'White'
    matteBlack: 'Nero', // 'Black'
    matteLightGray: 'Grigio chiaro', // 'Light Gray'
    rasterExportScale: 'Scala di esportazione raster', // 'Raster Export Scale'
    rasterExportScaleHint: 'Moltiplicatore applicato alle dimensioni intrinseche dell’SVG (limitato a 8000px). Clicca Riconverti tutto dopo aver cambiato la scala.', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: 'Riconverti tutto', // 'Re-convert All'
    converting: 'Conversione…', // 'Converting...'
    clear: 'Cancella', // 'Clear'
    batchSummary: 'Riepilogo lotto JPG → PNG', // 'JPG → PNG Batch Summary'
    filesConverted: '{count} {files} convertiti · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Variazione', // 'Change'
    changeLabel: 'Variazione', // 'Change' — primary key in FormatConverterTool
    compare: 'Confronta', // 'Compare'
    downloadTarget: 'Scarica PNG', // 'Download PNG'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
    errorDecodeFile: 'Impossibile decodificare «{filename}». Verifica che sia un’immagine JPG valida.', // 'Could not decode "{filename}". Verify it is a valid JPG image.'
    errorConvertFailed: 'Impossibile convertire {name} in PNG.', // `Failed to convert ${item.name} to PNG.`
    comparisonTitlePrefix: 'JPG → PNG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/png-to-jpg': {
    uploadTitle: 'Trascina file PNG da convertire in JPG più piccoli', // 'Drop PNG files to convert to smaller JPG'
    conversionPipeline: 'Flusso di conversione:', // 'Conversion Pipeline:'
    outputQuality: 'Qualità di uscita JPG', // 'JPG Output Quality'
    outputQualityLabel: 'Qualità di uscita JPG', // `${targetLabel} Output Quality`
    qualityAriaLabel: 'qualità di uscita JPG', // `${targetLabel} output quality`
    smallerFile: 'File più piccolo (20%)', // 'Smaller file (20%)'
    balanced: 'Bilanciato (85%)', // 'Balanced (85%)'
    maxDetail: 'Massimo dettaglio (100%)', // 'Max detail (100%)'
    losslessPngOutput: 'Uscita PNG senza perdita', // 'Lossless PNG Output'
    losslessPngEncoding: 'Codifica PNG senza perdita', // 'Lossless PNG Encoding'
    losslessPngEncodingTitle: 'Codifica PNG senza perdita', // 'Lossless PNG Encoding' — primary key in FormatConverterTool
    losslessPngNote: 'Il PNG preserva bordi nitidi, testo e trasparenza alfa senza artefatti di compressione con perdita.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    losslessPngEncodingDesc: 'Il PNG preserva bordi nitidi, testo e trasparenza alfa senza artefatti di compressione con perdita.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.' — via losslessPngNote fallback
    transparentMatteColor: 'Colore opaco per sfondo trasparente', // 'Transparent Background Matte Color'
    matteColorLabel: 'Colore opaco per sfondo trasparente', // 'Transparent Background Matte Color' — primary key in FormatConverterTool
    matteAriaLabel: 'Colore di sfondo opaco', // 'Matte background color'
    matteWhite: 'Bianco', // 'White'
    matteBlack: 'Nero', // 'Black'
    matteLightGray: 'Grigio chiaro', // 'Light Gray'
    matteNote: 'Il JPG non supporta la trasparenza; le aree trasparenti vengono riempite in modo pulito con questo colore.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    rasterExportScale: 'Scala di esportazione raster', // 'Raster Export Scale'
    rasterExportScaleHint: 'Moltiplicatore applicato alle dimensioni intrinseche dell’SVG (limitato a 8000px). Clicca Riconverti tutto dopo aver cambiato la scala.', // "Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale."
    reconvertAll: 'Riconverti tutto', // 'Re-convert All'
    converting: 'Conversione…', // 'Converting...'
    clear: 'Cancella', // 'Clear'
    batchSummary: 'Riepilogo lotto PNG → JPG', // 'PNG → JPG Batch Summary'
    filesConverted: '{count} {files} convertiti · {original} → {converted}', // '{count} {file/files} converted · {totalOrig} → {totalOut}'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    columnChange: 'Variazione', // 'Change'
    changeLabel: 'Variazione', // 'Change' — primary key in FormatConverterTool
    compare: 'Confronta', // 'Compare'
    downloadTarget: 'Scarica JPG', // 'Download JPG'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
    errorDecodeFile: 'Impossibile decodificare «{filename}». Verifica che sia un’immagine PNG valida.', // 'Could not decode "{filename}". Verify it is a valid PNG image.'
    errorConvertFailed: 'Impossibile convertire {name} in JPG.', // `Failed to convert ${item.name} to JPG.`
    comparisonTitlePrefix: 'PNG → JPG', // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // `${targetLabel} (${formatBytes(compressedSize)})`
  },
  '/jpg-to-webp': {
    uploadTitle: 'Trascina immagini JPG da convertire in WebP leggero', // 'Drop JPG images to convert to lightweight WebP'
    conversionPipeline: 'Flusso di conversione:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Qualità di uscita WebP', // 'WebP Output Quality'
    qualityAriaLabel: 'qualità di uscita WebP', // aria-label 'WebP output quality'
    smallerFile: 'File più piccolo (20%)', // 'Smaller file (20%)'
    balanced: 'Bilanciato (85%)', // 'Balanced (85%)'
    maxDetail: 'Massimo dettaglio (100%)', // 'Max detail (100%)'
    batchSummary: 'Riepilogo batch {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    filesConvertedSuffix: 'convertiti', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Variazione', // 'Change'
    compare: 'Confronta', // 'Compare'
    downloadTarget: 'Scarica WebP', // 'Download WebP'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
    converting: 'Conversione…', // 'Converting...'
    reconvertAll: 'Riconverti tutto', // 'Re-convert All'
    clear: 'Pulisci', // 'Clear'
    comparisonTitlePrefix: 'JPG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Impossibile convertire {name} in WebP.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Impossibile decodificare "{name}". Verifica che sia un’immagine JPG valida.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-jpg': {
    uploadTitle: 'Trascina immagini WebP da convertire in JPG universale', // 'Drop WebP images to convert to universal JPG'
    conversionPipeline: 'Flusso di conversione:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Qualità di uscita JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'qualità di uscita JPG', // aria-label 'JPG output quality'
    smallerFile: 'File più piccolo (20%)', // 'Smaller file (20%)'
    balanced: 'Bilanciato (85%)', // 'Balanced (85%)'
    maxDetail: 'Massimo dettaglio (100%)', // 'Max detail (100%)'
    matteColorLabel: 'Colore di fondo per la trasparenza', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Colore di fondo', // aria-label 'Matte background color'
    matteWhite: 'Bianco', // 'White'
    matteBlack: 'Nero', // 'Black'
    matteLightGray: 'Grigio chiaro', // 'Light Gray'
    matteHint: 'Il JPG non supporta la trasparenza; le aree trasparenti vengono riempite in modo pulito con questo colore.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'Riepilogo batch {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    filesConvertedSuffix: 'convertiti', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Variazione', // 'Change'
    compare: 'Confronta', // 'Compare'
    downloadTarget: 'Scarica JPG', // 'Download JPG'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
    converting: 'Conversione…', // 'Converting...'
    reconvertAll: 'Riconverti tutto', // 'Re-convert All'
    clear: 'Pulisci', // 'Clear'
    comparisonTitlePrefix: 'WebP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Impossibile convertire {name} in JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Impossibile decodificare "{name}". Verifica che sia un’immagine WebP valida.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/png-to-webp': {
    uploadTitle: 'Trascina file PNG da convertire in WebP trasparente', // 'Drop PNG files to convert to transparent WebP'
    conversionPipeline: 'Flusso di conversione:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Qualità di uscita WebP', // 'WebP Output Quality'
    qualityAriaLabel: 'qualità di uscita WebP', // aria-label 'WebP output quality'
    smallerFile: 'File più piccolo (20%)', // 'Smaller file (20%)'
    balanced: 'Bilanciato (85%)', // 'Balanced (85%)'
    maxDetail: 'Massimo dettaglio (100%)', // 'Max detail (100%)'
    batchSummary: 'Riepilogo batch {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    filesConvertedSuffix: 'convertiti', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Variazione', // 'Change'
    compare: 'Confronta', // 'Compare'
    downloadTarget: 'Scarica WebP', // 'Download WebP'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
    converting: 'Conversione…', // 'Converting...'
    reconvertAll: 'Riconverti tutto', // 'Re-convert All'
    clear: 'Pulisci', // 'Clear'
    comparisonTitlePrefix: 'PNG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Impossibile convertire {name} in WebP.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Impossibile decodificare "{name}". Verifica che sia un’immagine PNG valida.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-png': {
    uploadTitle: 'Trascina file WebP da convertire in PNG senza perdita', // 'Drop WebP files to convert to lossless PNG'
    conversionPipeline: 'Flusso di conversione:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Output PNG senza perdita', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Codifica PNG senza perdita', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'Il PNG preserva bordi nitidi, testo e trasparenza alfa senza artefatti da compressione con perdita.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    batchSummary: 'Riepilogo batch {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    filesConvertedSuffix: 'convertiti', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Variazione', // 'Change'
    compare: 'Confronta', // 'Compare'
    downloadTarget: 'Scarica PNG', // 'Download PNG'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
    converting: 'Conversione…', // 'Converting...'
    reconvertAll: 'Riconverti tutto', // 'Re-convert All'
    clear: 'Pulisci', // 'Clear'
    comparisonTitlePrefix: 'WebP → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Impossibile convertire {name} in PNG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Impossibile decodificare "{name}". Verifica che sia un’immagine WebP valida.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/svg-to-png': {
    uploadTitle: 'Trascina file vettoriali SVG da rasterizzare in PNG', // 'Drop SVG vector files to rasterize to PNG'
    notice:
      'Rasterizza grafiche SVG incorporate in locale tramite HTML5 Canvas e preserva gli sfondi trasparenti. Limitazione: gli URL <image> esterni, i fogli di stile CSS esterni/i webfont o gli script referenziati dentro un SVG potrebbero non essere renderizzati nell’export autonomo del Canvas.', // 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.'
    conversionPipeline: 'Flusso di conversione:', // 'Conversion Pipeline:'
    losslessPngOutput: 'Output PNG senza perdita', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Codifica PNG senza perdita', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'Il PNG preserva bordi nitidi, testo e trasparenza alfa senza artefatti da compressione con perdita.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    rasterExportScale: 'Scala di export raster', // 'Raster Export Scale'
    rasterExportScaleHint: 'Moltiplicatore applicato alle dimensioni intrinseche dell’SVG (limite di 8000 px). Clicca Riconverti tutto dopo aver cambiato scala.', // 'Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale.'
    batchSummary: 'Riepilogo batch {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    filesConvertedSuffix: 'convertiti', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Variazione', // 'Change'
    compare: 'Confronta', // 'Compare'
    downloadTarget: 'Scarica PNG', // 'Download PNG'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
    converting: 'Conversione…', // 'Converting...'
    reconvertAll: 'Riconverti tutto', // 'Re-convert All'
    clear: 'Pulisci', // 'Clear'
    comparisonTitlePrefix: 'SVG → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Impossibile convertire {name} in PNG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Impossibile rasterizzare questo SVG. Verifica che il file sia markup SVG XML valido, senza errori di sintassi.', // decodeErrorHint 'Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax.'
  },
  '/avif-to-jpg': {
    uploadTitle: 'Trascina immagini AVIF da convertire in JPG universale', // 'Drop AVIF images to convert to universal JPG'
    notice:
      'Decodifica immagini AVIF in locale usando il decodificatore AVIF nativo del tuo browser (supportato in Chrome, Edge, Firefox e Safari moderni) ed esporta file JPG standard.', // 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.'
    conversionPipeline: 'Flusso di conversione:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Qualità di uscita JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'qualità di uscita JPG', // aria-label 'JPG output quality'
    smallerFile: 'File più piccolo (20%)', // 'Smaller file (20%)'
    balanced: 'Bilanciato (85%)', // 'Balanced (85%)'
    maxDetail: 'Massimo dettaglio (100%)', // 'Max detail (100%)'
    matteColorLabel: 'Colore di fondo per la trasparenza', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Colore di fondo', // aria-label 'Matte background color'
    matteWhite: 'Bianco', // 'White'
    matteBlack: 'Nero', // 'Black'
    matteLightGray: 'Grigio chiaro', // 'Light Gray'
    matteHint: 'Il JPG non supporta la trasparenza; le aree trasparenti vengono riempite in modo pulito con questo colore.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'Riepilogo batch {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    filesConvertedSuffix: 'convertiti', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Variazione', // 'Change'
    compare: 'Confronta', // 'Compare'
    downloadTarget: 'Scarica JPG', // 'Download JPG'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
    converting: 'Conversione…', // 'Converting...'
    reconvertAll: 'Riconverti tutto', // 'Re-convert All'
    clear: 'Pulisci', // 'Clear'
    comparisonTitlePrefix: 'AVIF → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Impossibile convertire {name} in JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Il tuo browser non è riuscito a decodificare questa immagine AVIF. Verifica che il file sia un’immagine .avif valida e prova un browser moderno Chrome, Firefox, Edge o Safari.', // decodeErrorHint 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.'
  },
  '/bmp-to-jpg': {
    uploadTitle: 'Trascina bitmap BMP non compresse da convertire in JPG compatto', // 'Drop uncompressed BMP bitmaps to convert to compact JPG'
    conversionPipeline: 'Flusso di conversione:', // 'Conversion Pipeline:'
    outputQualityLabel: 'Qualità di uscita JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'qualità di uscita JPG', // aria-label 'JPG output quality'
    smallerFile: 'File più piccolo (20%)', // 'Smaller file (20%)'
    balanced: 'Bilanciato (85%)', // 'Balanced (85%)'
    maxDetail: 'Massimo dettaglio (100%)', // 'Max detail (100%)'
    batchSummary: 'Riepilogo batch {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'file', // 'file'
    filePlural: 'file', // 'files'
    filesConvertedSuffix: 'convertiti', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Creazione ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Scarica tutto (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Variazione', // 'Change'
    compare: 'Confronta', // 'Compare'
    downloadTarget: 'Scarica JPG', // 'Download JPG'
    removeImage: 'Rimuovi {name}', // aria-label `Remove ${item.name}`
    converting: 'Conversione…', // 'Converting...'
    reconvertAll: 'Riconverti tutto', // 'Re-convert All'
    clear: 'Pulisci', // 'Clear'
    comparisonTitlePrefix: 'BMP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Impossibile convertire {name} in JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Impossibile decodificare "{name}". Verifica che sia un’immagine BMP valida.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/remove-background': {
    uploadTitle: 'Trascina una foto per rimuovere lo sfondo con l’IA', // 'Drop a photo to remove its background with AI'
    modelLoadingTitle: 'Caricamento del modello AI nel browser (isnet_quint8)', // 'Loading in-browser AI model (isnet_quint8)'
    modelCache: 'Cache del modello', // 'Model Cache'
    progressWasm: 'Caricamento del runtime AI WebAssembly…', // 'Loading WebAssembly AI runtime...'
    progressModel: 'Download del modello AI di rimozione sfondo (~35 MB, memorizzato nella cache per usi futuri)…', // 'Downloading AI background removal model (~35 MB, cached for future use)...'
    progressCompute: 'Rimozione dello sfondo in locale nel tuo browser…', // 'Removing background locally in your browser...'
    progressPreparing: 'Preparazione del modello AI nel browser…', // 'Preparing in-browser AI model...'
    progressInitLibrary: 'Caricamento della libreria AI di rimozione sfondo…', // 'Loading AI background removal library...'
    progressInitModule: 'Inizializzazione del modulo AI di rimozione sfondo…', // 'Initializing AI background removal module...'
    errorModelInit: 'Impossibile inizializzare il modello AI di sfondo: {message}', // `Could not initialize the AI background model: ${err.message}`
    errorModelInitGeneric: 'Impossibile inizializzare il modello AI di sfondo in questo browser.', // 'Could not initialize the AI background model in this browser.'
    errorDecodeOutput: 'Impossibile decodificare l’output PNG trasparente.', // 'Failed to decode transparent PNG output.'
    errorRemovalFailed: 'La rimozione dello sfondo non è riuscita in questo browser. Prova un’altra immagine o ricarica la pagina.', // 'Background removal failed in this browser. Try another image or reload.'
    beforeAfterPreview: 'Anteprima prima e dopo', // 'Before & After Preview'
    splitCompare: 'Confronto a metà', // 'Split Compare'
    newImage: 'Nuova immagine', // 'New Image'
    originalLabel: 'Originale', // 'Original'
    transparentCutout: 'Ritaglio trasparente (PNG)', // 'Transparent Cutout (PNG)'
    solidBackgroundPreview: 'Anteprima sfondo solido', // 'Solid Background Preview'
    waitingForResult: 'In attesa del risultato…', // 'Waiting for result...'
    processingLocally: 'Elaborazione in locale…', // 'Processing locally...'
    cutoutStatus: 'Stato del ritaglio', // 'Cutout Status'
    ready: 'Pronto', // 'Ready'
    backgroundFillOption: 'Opzione di riempimento sfondo', // 'Background Fill Option'
    bgTransparent: 'Trasparente', // 'Transparent'
    bgWhite: 'Bianco', // 'White'
    bgBlack: 'Nero', // 'Black'
    bgCustom: 'Personalizzato', // 'Custom'
    customBackgroundColor: 'Colore di sfondo personalizzato', // 'Custom Background Color'
    downloadTransparentPng: 'Scarica PNG trasparente', // 'Download Transparent PNG'
    downloadWithWhite: 'Scarica con sfondo bianco', // 'Download with White Background'
    downloadWithBlack: 'Scarica con sfondo nero', // 'Download with Black Background'
    downloadWithCustom: 'Scarica con sfondo {color}', // 'Download with {color} Background'
    rerunRemoval: 'Riesegui rimozione', // 'Re-run Removal'
    comparisonTitlePrefix: 'Confronto rimozione sfondo', // 'Background Removal Comparison'
    comparisonAfterTransparent: 'Ritaglio (PNG trasparente)', // 'Cutout (Transparent PNG)'
    comparisonAfterSolid: 'Ritaglio (sfondo solido)', // 'Cutout (Solid BG)'
    altOriginal: 'Originale {name}', // alt `Original ${sourceFile.name}`
    altCutout: 'Sfondo rimosso {name}', // alt `Background removed ${sourceFile.name}`
  },
};
