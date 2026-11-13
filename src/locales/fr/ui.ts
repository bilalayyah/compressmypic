// French (fr) UI strings for CompressMyPic — natural international French, vous form.
// Source: ~/workspace/compressmypic/spanish/i18n-es.ts (structure mirror),
// ~/workspace/compressmypic/pt-fr/slug-map-fr.ts (FR slugs), /tmp/cmpic-ptfr
// (English sources: Hero, FaqSection, EducationalContent, ToolsDirectorySection,
// ShareSection, Header, Footer, ToolPageLayout, UploadZone, ComparisonModal,
// home-entry.txt, index.html, App.tsx guides section, tools.ts categories).
// Brand name CompressMyPic is never translated. URLs, bilalayyah@gmail.com and format
// names (JPG/PNG/WebP/HEIC/JPEG/SVG/AVIF/BMP/GIF/PDF) stay as-is. "ZIP" is kept as a
// file-format term. "online" stays "online" in brand/search contexts (seoTitle).
// French typographic apostrophe (’) is used inside single-quoted strings.
// Placeholders: {name} = tool/file name, {max} = max size in MB,
// {year} = current year, {count} = number of extra errors, {current} = current
// theme, {progress} = ZIP progress %, {bytes} = byte size, {formats} = formats list.
// Note on uploadZone: hint and errorTooBig interpolate the max size — kept as {max}.

export const FR = {
  header: {
    home: 'Accueil',
    tools: 'Outils',
    howItWorks: 'Comment ça marche',
    faq: 'Questions fréquentes',
    about: 'À propos',
    contact: 'Contact',
    compressImages: 'Compresser des images',
    themeLight: 'Mode clair',
    themeDark: 'Mode sombre',
    themeSystem: 'Thème du système',
    languageLabel: 'Langue',
    homeAriaLabel: 'CompressMyPic – Compresseur d’images gratuit en ligne',
    themeLightShort: 'Clair', // 'Light'
    themeDarkShort: 'Sombre', // 'Dark'
    themeSystemShort: 'Système', // 'System'
    themeHeading: 'Thème', // 'Theme' (mobile drawer heading + theme menu aria-label)
    menuAriaLabel: 'Afficher ou masquer le menu de navigation', // 'Toggle navigation menu'
    themeAriaLabel: 'Changer le thème de couleur (actuel : {current})', // 'Change color theme (Current: {current})'
    themeTitle: 'Thème : {current}', // 'Theme: {current}'
    aboutUs: 'À propos', // 'About Us' (mobile drawer)
    contactUs: 'Contact', // 'Contact Us' (mobile drawer)
  },
  footer: {
    blurb:
      'Compression d’images rapide, sûre et privée, directement dans votre navigateur. Optimisez vos images JPG, PNG et WebP sans envoyer vos données vers un serveur externe.',
    privacyNote: '100 % de confidentialité sur votre appareil',
    toolsHeading: 'Outils d’images',
    legalHeading: 'Confiance et légal',
    guidesHeading: 'Guides',
    moreHeading: 'Plus d’utilitaires',
    directoryHeading: 'Outils avancés de compression, d’édition et de développement',
    processedLocally: 'Traitement local avec HTML5 Canvas',
    bottomRights:
      '© {year} CompressMyPic. Tous droits réservés. Utilitaire gratuit de compression d’images dans le navigateur.',
    contactLabel: 'Contact : bilalayyah@gmail.com',
    toolsLinks: [
      { slug: '/', label: 'Compresser des images' },
      { slug: '/image-resizer', label: 'Redimensionner une image' },
      { slug: '/image-converter', label: 'Convertisseur d’images' },
      { slug: '/rotate-flip-image', label: 'Pivoter et retourner une image' },
      { slug: '/image-to-pdf', label: 'Image en PDF' },
      { slug: '/remove-image-metadata', label: 'Supprimer les métadonnées' },
      { slug: '/remove-background', label: 'Supprimer l’arrière-plan' },
    ],
    legalLinks: [
      { slug: '/privacy', label: 'Politique de confidentialité' },
      { slug: '/terms', label: 'Conditions d’utilisation' },
      { slug: '/about', label: 'À propos' },
      { slug: '/contact', label: 'Contacter l’assistance' },
    ],
    guidesLinks: [
      {
        slug: '/guides/compress-images-for-whatsapp',
        label: 'Comment compresser des images pour WhatsApp sans perdre en qualité',
      },
      {
        slug: '/guides/jpg-vs-png-vs-webp',
        label: 'JPG vs PNG vs WebP : quel format utiliser ?',
      },
      {
        slug: '/guides/reduce-image-size-to-100kb',
        label: 'Comment réduire une image à 100 Ko pour le web et l’e-mail',
      },
    ],
    moreLinks: [
      { slug: '/image-metadata-viewer', label: 'Visionneuse de métadonnées et EXIF' },
      { slug: '/favicon-generator', label: 'Générateur de favicon' },
      { slug: '/image-color-picker', label: 'Sélecteur de couleurs d’image' },
      { slug: '/image-dimensions-checker', label: 'Vérificateur de dimensions' },
    ],
    directoryLinks: [
      { slug: '/compress-image-to-50kb', label: 'Compresser à 50 Ko' },
      { slug: '/compress-image-to-100kb', label: 'Compresser à 100 Ko' },
      { slug: '/compress-image-to-200kb', label: 'Compresser à 200 Ko' },
      { slug: '/compress-image-to-500kb', label: 'Compresser à 500 Ko' },
      { slug: '/target-file-size-compressor', label: 'Compresseur par taille de fichier' },
      { slug: '/bulk-image-compressor', label: 'Compresseur d’images en lot' },
      { slug: '/bulk-image-resizer', label: 'Redimensionneur d’images en lot' },
      { slug: '/bulk-image-converter', label: 'Convertisseur d’images en lot' },
      { slug: '/web-image-optimizer', label: 'Optimiseur d’images pour le web' },
      { slug: '/gif-compressor', label: 'Compresseur de GIF' },
      { slug: '/image-cropper', label: 'Recadreur d’images' },
      { slug: '/image-watermark', label: 'Filigrane sur image' },
      { slug: '/blur-pixelate-image', label: 'Flouter et pixelliser' },
      { slug: '/add-text-to-image', label: 'Ajouter du texte à une image' },
      { slug: '/image-border-generator', label: 'Générateur de bordures' },
      { slug: '/round-image-corners', label: 'Arrondir les coins' },
      { slug: '/image-brightness-editor', label: 'Éditeur de luminosité' },
      { slug: '/image-contrast-editor', label: 'Éditeur de contraste' },
      { slug: '/image-saturation-editor', label: 'Éditeur de saturation' },
      { slug: '/image-filters', label: 'Filtres d’image' },
      { slug: '/add-background-to-image', label: 'Ajouter un arrière-plan' },
      { slug: '/image-splitter', label: 'Diviseur d’images' },
      { slug: '/image-dpi-changer', label: 'Changer le DPI' },
      { slug: '/image-to-base64', label: 'Image en Base64' },
      { slug: '/base64-to-image', label: 'Base64 en image' },
      { slug: '/image-color-palette-extractor', label: 'Extracteur de palette de couleurs' },
      { slug: '/gif-maker', label: 'Créateur de GIF' },
      { slug: '/image-collage-maker', label: 'Créateur de collages' },
      { slug: '/heic-to-jpg', label: 'HEIC en JPG' },
      { slug: '/jpg-to-png', label: 'JPG en PNG' },
      { slug: '/png-to-jpg', label: 'PNG en JPG' },
      { slug: '/jpg-to-webp', label: 'JPG en WebP' },
      { slug: '/webp-to-jpg', label: 'WebP en JPG' },
      { slug: '/png-to-webp', label: 'PNG en WebP' },
      { slug: '/webp-to-png', label: 'WebP en PNG' },
      { slug: '/svg-to-png', label: 'SVG en PNG' },
      { slug: '/avif-to-jpg', label: 'AVIF en JPG' },
      { slug: '/bmp-to-jpg', label: 'BMP en JPG' },
    ],
  },
  hero: {
    pill: 'Compression 100 % privée sur votre appareil · Aucun envoi vers des serveurs',
    h1: 'Compresseur d’images gratuit – Compressez vos images en ligne et réduisez leur taille sans perdre en qualité',
    sub: 'Réduisez la taille de vos fichiers image sans sacrifier la qualité visible. Compressez vos images en ligne gratuitement avec notre compresseur d’images et de photos : un optimiseur d’images en ligne pour JPG, PNG, WebP et HEIC. Rapide, sûr, sans inscription, sans filigrane et avec une compression simple, directement dans votre navigateur.',
    badge1: 'Vos images ne quittent jamais votre appareil',
    badge2: 'Traitement instantané dans le navigateur',
    badge3: 'Compatible JPG, PNG, WebP et HEIC',
  },
  toolsDirectory: {
    heading: 'Plus d’outils gratuits pour traiter vos images',
    subheading:
      'Chaque outil fonctionne à 100 % dans votre navigateur : aucun envoi vers des serveurs, aucune inscription et aucun filigrane.',
    eyebrow: 'Tous les outils dans votre navigateur', // 'All Browser-Native Tools'
    allTools: 'Tous les outils', // 'All Tools'
    openTool: 'Ouvrir l’outil', // 'Open tool'
  },
  educational: {
    sections: [
      {
        heading: 'Qu’est-ce que la compression d’images ?',
        body: 'La compression d’images consiste à réduire la taille en octets d’un fichier graphique sans dégrader la qualité visuelle de l’image au-delà d’un seuil acceptable. Lorsqu’un appareil photo ou un téléphone enregistre une photo, il stocke une énorme quantité de données, et une grande partie de ces informations est imperceptible à l’œil nu lorsqu’elle est supprimée ou simplifiée. CompressMyPic est un optimiseur d’images en ligne gratuit et un réducteur de taille d’image qui fonctionne comme compresseur de photos et réducteur de taille de photo pour les fichiers JPG, PNG et WebP.\n\nEn analysant ces motifs, les algorithmes de compression d’images réorganisent ou écartent de manière sélective les informations redondantes. Le fichier obtenu nécessite beaucoup moins d’espace de stockage et se transfère beaucoup plus vite sur internet. Ce guide vous montre comment compresser une image sans perdre en qualité, grâce au curseur de qualité, aux préréglages et au choix du format de CompressMyPic.',
      },
      {
        heading: 'Pourquoi compresser vos images ?',
        body: 'Les images non optimisées sont l’un des plus grands freins à la performance d’un site web, à l’espace de stockage et à la consommation de données mobiles. Compresser vos images apporte des avantages immédiats et concrets :',
        bullets: [
          'Chargement plus rapide du site web : les pages avec des images compressées se chargent jusqu’à 70 % plus vite, ce qui améliore vos Core Web Vitals (Largest Contentful Paint) et votre référencement. Quand vous réduisez la taille des images de votre site, les visiteurs restent plus longtemps et quittent moins souvent la page.',
          'Moins d’espace de stockage : réduisez les coûts d’hébergement cloud, de disque serveur et de sauvegardes en conservant des fichiers image optimisés au lieu des originaux lourds.',
          'Partager des images devient plus facile : fini les limites strictes des pièces jointes des e-mails et les quotas d’envoi des messages. Les photos compressées se joignent et s’envoient instantanément, même avec une connexion mobile lente ou un forfait de données limité.',
          'Moins de consommation de bande passante : faites économiser de l’argent à vos utilisateurs sur leurs forfaits mobiles et évitez que les visiteurs quittent votre site. Les fichiers plus petits se téléchargent plus vite, surtout sur les connexions mobiles lentes.',
        ],
      },
      {
        heading: 'Comment ça marche',
        body: 'Compresser vos photos ne prend que quelques secondes : sans compte, sans logiciel et sans envoi. Voici comment compresser une image sans perdre en qualité en trois étapes simples.',
        bullets: [
          'Étape 1 — Importez vos images : glissez-déposez vos images JPG, PNG, WebP ou HEIC dans la zone d’import, cliquez sur « Parcourir les fichiers » pour les choisir, ou collez une image avec Ctrl+V. Vous pouvez importer plusieurs images à la fois, jusqu’à 20 Mo par image.',
          'Étape 2 — Ajustez la qualité et choisissez votre format : choisissez un préréglage Faible, Équilibré ou Élevé, ou déplacez le curseur de qualité de 10 % à 100 %, puis décidez si vous conservez le format d’origine ou si vous convertissez en JPG, PNG ou WebP. Observez la taille avant et après en direct pour chaque image et utilisez le curseur de comparaison interactif pour vérifier le résultat visuel.',
          'Étape 3 — Téléchargez vos images compressées : téléchargez chaque image compressée séparément ou cliquez sur « Tout télécharger (ZIP) » pour récupérer tout le lot dans un seul fichier. Vos images sont compressées directement dans votre navigateur, donc rien à attendre et rien à envoyer.',
        ],
      },
      {
        heading: 'Pourquoi utiliser ce compresseur d’images gratuit ?',
        body: 'CompressMyPic est un compresseur d’images gratuit, sans inscription et sans filigrane, conçu pour les photos du quotidien, les images de sites web et les publications sur les réseaux sociaux.',
        bullets: [
          'Compressez JPG, PNG, WebP et HEIC : un seul compresseur d’images pour les formats que vous utilisez vraiment. Compressez des photos JPG et JPEG, compressez des graphiques PNG en conservant la transparence et compressez des images WebP pour obtenir les fichiers les plus petits.',
          'Réduisez la taille de l’image sans perdre en qualité : la compression intelligente supprime les données redondantes et les métadonnées, et l’image reste pratiquement identique à l’originale. Le préréglage Équilibré est le meilleur point de départ, et la comparaison avant/après vous permet de vérifier la qualité par vous-même.',
          'Compresseur d’images en lot : compressez plusieurs images à la fois : ce compresseur d’images en lot vous permet de compresser plusieurs images à la fois avec les mêmes réglages et de les télécharger toutes ensemble avec le bouton « Tout télécharger (ZIP) », au lieu d’enregistrer les fichiers un par un.',
          'Compressez des images pour WhatsApp, Instagram et Facebook : réduisez la taille des photos pour qu’elles s’envoient vite sur WhatsApp et se publient sans problème sur Instagram et Facebook. Les fichiers plus petits consomment moins de données mobiles et risquent beaucoup moins d’être rejetés parce qu’ils sont trop gros.',
          'Réduisez la taille de l’image à 20 Ko, 50 Ko, 100 Ko ou 200 Ko : descendez le curseur de qualité pas à pas et observez la taille avant et après en direct jusqu’à atteindre votre objectif : 200 Ko, 100 Ko, 50 Ko ou même 20 Ko. Changer le format de sortie en WebP vous aide généralement à y arriver avec moins de perte visible de qualité.',
        ],
      },
      {
        heading: 'Compresser JPG, PNG et WebP : quel format choisir ?',
        body: 'JPG, PNG et WebP ont des rôles différents. Connaître leurs atouts vous aide à choisir la meilleure option pour votre projet.\n\nComparez la différence visuelle : vous ne savez pas quelle compression est acceptable ? Utilisez l’option de comparaison avant/après de l’outil. Notre curseur interactif vous permet de voir l’image originale et la version compressée côte à côte pour repérer les artefacts visuels ou la perte de qualité avant de télécharger.',
        bullets: [
          'Compresseur JPG — Compressez des JPG en ligne gratuitement : idéal pour les photographies de votre site web, de votre blog ou de votre portfolio. Compressez des JPG en ligne gratuitement et compressez un JPEG à 100 Ko en baissant le curseur de qualité tout en observant la taille en direct. La compression JPEG est avec perte : elle supprime définitivement certaines données visuelles que l’œil humain perçoit à peine. C’est pourquoi elle peut réduire une photo de plusieurs mégaoctets à quelques kilooctets sans perte visible de qualité.',
          'Compresseur PNG — Compressez des PNG en ligne gratuitement : idéal pour les graphiques, les captures d’écran, les logos et les images qui ont besoin de transparence, comme les logos, les icônes ou les illustrations. Compressez des PNG en ligne gratuitement ici en conservant toute la transparence, pour des graphiques nets et parfaits au pixel près. Convertir un PNG en WebP le rend souvent beaucoup plus petit.',
          'Compressez des images WebP — Le format moderne : idéal pour l’optimisation web. WebP offre une excellente compression avec et sans perte, souvent de 25 % à 35 % plus petite que JPEG ou PNG. Compressez des fichiers image WebP pour obtenir la plus petite taille avec une qualité similaire, et utilisez WebP quand vous voulez optimiser des images pour des pages web sans perte visible de qualité. C’est le meilleur choix pour la plupart des sites web.',
        ],
      },
      {
        heading: 'À quoi peut servir ce compresseur d’images ?',
        body: 'Un seul compresseur d’images gratuit couvre les raisons les plus courantes pour lesquelles on a besoin de réduire la taille d’une image.',
        bullets: [
          'Optimisez des images pour le web : optimisez les images de vos pages web pour qu’elles se chargent plus vite, améliorent les Core Web Vitals et se positionnent mieux. Des images plus petites signifient des pages plus rapides, des visiteurs plus satisfaits et moins de bande passante d’hébergement.',
          'Compressez des images à joindre par e-mail : compressez des images à joindre par e-mail en les réduisant avec le curseur de qualité jusqu’à ce que chaque fichier soit assez petit pour la limite de pièces jointes de votre fournisseur de messagerie, puis joignez les fichiers téléchargés à votre message au lieu des originaux lourds.',
          'Compressez une photo pour votre site web : compressez une photo pour votre site web, votre blog, votre portfolio ou votre boutique en ligne avant de la publier. Les photos de produits, les bannières et les images de blog restent nettes et occupent beaucoup moins de place sur votre serveur.',
          'Réduisez la taille d’un fichier photo : réduisez la taille d’une photo de votre téléphone ou de votre appareil photo avant de la partager, de l’enregistrer ou de l’imprimer. Les grosses photos s’envoient vite, s’enregistrent facilement et se gèrent sans complication.',
        ],
      },
      {
        heading: 'Pourquoi la taille de l’image compte',
        body: 'Les fichiers image volumineux et haute résolution sont le résultat des progrès rapides de la technologie des appareils photo : les images sont désormais 2 à 3 fois plus grandes qu’il y a seulement quelques années. Quand vous réduisez la taille des images de vos pages web et optimisez les images pour le web, votre site se charge plus vite, consomme moins de bande passante et se positionne mieux dans les résultats de recherche.\n\nQuand vous cherchez un bon compresseur, vérifiez qu’il : 1) ne sacrifie pas la qualité, 2) garde vos données privées (traitement sur votre appareil) et 3) traite les images vite sans envoyer vos fichiers vers un serveur distant. C’est exactement ce pour quoi CompressMyPic est conçu.',
      },
      {
        heading: 'Conseils d’optimisation : réduisez la taille de l’image sans perdre en qualité',
        body: '',
        bullets: [
          'Commencez avec le préréglage Équilibré : le préréglage Équilibré (70 % de qualité) offre le meilleur équilibre pour la plupart des images : des fichiers beaucoup plus petits et une grande ressemblance visuelle avec l’original.',
          'Choisissez le bon format : pour les photographies, JPG ou WebP vous donneront toujours des fichiers plus petits que PNG. Pour les logos et les graphiques au trait avec transparence, utilisez PNG.',
          'Visez une taille cible : pour une utilisation sur le web, visez des images de moins de 200 Ko. Pour les e-mails et les messages, restez en dessous de 1 Mo pour qu’elles se livrent vite. Utilisez le curseur de qualité et la taille en direct pour atteindre votre taille cible.',
          'Trouvez le point idéal : mettez le curseur de qualité à 85–90 % pour les images principales, où la qualité compte ; 70–80 % est souvent l’équilibre idéal pour un usage général sur le web ; 50–60 % est préférable pour les miniatures ou quand la taille est la priorité.',
          'Essayez WebP pour les fichiers les plus petits : changer le format de sortie en WebP réduit souvent un JPG ou un PNG de 25 % à 35 % supplémentaires avec une qualité similaire : un moyen simple de réduire la taille de l’image sans perdre en qualité.',
        ],
      },
    ],
  },
  faqSection: {
    heading: 'Questions fréquentes',
    subheading:
      'Tout ce que vous devez savoir pour compresser des images en ligne gratuitement avec CompressMyPic.',
    faqs: [
      {
        id: 'faq-1',
        question: 'Qu’est-ce que CompressMyPic ?',
        answer:
          'CompressMyPic est un outil gratuit en ligne qui réduit la taille de vos images JPG, PNG, WebP et HEIC sans perte visible de qualité. Il fonctionne entièrement dans votre navigateur : aucun logiciel à installer, aucune inscription et aucun envoi de vos fichiers vers un serveur.',
      },
      {
        id: 'faq-2',
        question: 'Comment compresser une image gratuitement en ligne ?',
        answer:
          'Glissez-déposez vos fichiers image dans la zone d’import ou cliquez sur « Parcourir les fichiers ». Choisissez un préréglage (Faible, Équilibré ou Élevé) ou réglez le curseur de qualité, puis téléchargez vos images optimisées immédiatement. C’est gratuit et sans inscription.',
      },
      {
        id: 'faq-3',
        question: 'Mes images sont-elles envoyées vers un serveur ?',
        answer:
          'Non. Toute la compression se fait sur votre propre appareil, dans votre navigateur. Vos images ne sont jamais envoyées vers un serveur, ni stockées ni vues par qui que ce soit. Elles restent dans la mémoire de votre navigateur et disparaissent quand vous actualisez ou fermez l’onglet.',
      },
      {
        id: 'faq-4',
        question: 'CompressMyPic est-il vraiment gratuit ?',
        answer:
          'Oui, CompressMyPic est entièrement gratuit. Aucun frais, aucun abonnement, aucun crédit et aucune limite sur le nombre d’images que vous pouvez compresser.',
      },
      {
        id: 'faq-5',
        question: 'Dois-je créer un compte pour utiliser CompressMyPic ?',
        answer:
          'Non. Il n’y a aucune inscription : ni compte, ni adresse e-mail, ni mot de passe. Ouvrez simplement le site et commencez à compresser.',
      },
      {
        id: 'faq-6',
        question: 'Quels formats d’image sont pris en charge ?',
        answer:
          'CompressMyPic prend en charge JPG (JPEG), PNG, WebP et HEIC, y compris les photos prises avec un iPhone, qui sont enregistrées en HEIC par défaut. Vous pouvez conserver le format d’origine ou convertir d’un format à l’autre, par exemple convertir un PNG en WebP pour obtenir un fichier beaucoup plus petit.',
      },
      {
        id: 'faq-7',
        question: 'Y a-t-il une limite de taille de fichier ?',
        answer:
          'Oui, la limite est de 20 Mo par image, ce qui couvre les photos haute résolution d’appareil photo et les grandes captures d’écran. Comme le traitement se fait sur votre appareil, la compression reste rapide même avec des fichiers volumineux.',
      },
      {
        id: 'faq-8',
        question: 'Puis-je compresser plusieurs images à la fois ?',
        answer:
          'Oui. Vous pouvez importer des dizaines d’images en une seule fois, les compresser toutes avec les mêmes réglages, puis les télécharger ensemble avec le bouton « Tout télécharger (ZIP) » ou les télécharger une par une.',
      },
      {
        id: 'faq-9',
        question: 'Comment réduire une image à 100 Ko ?',
        answer:
          'Importez votre image, puis baissez le curseur de qualité pas à pas en observant la taille avant et après affichée en direct pour chaque image. Quand la taille compressée approche 100 Ko, téléchargez-la. Passer le format de sortie en WebP vous aide souvent à atteindre 100 Ko avec moins de perte visible.',
      },
      {
        id: 'faq-10',
        question: 'Comment réduire une image sans perdre en qualité ?',
        answer:
          'Choisissez le préréglage Équilibré (environ 70 % de qualité) ou une qualité élevée de 85 à 90 % : la compression supprime les données redondantes et les métadonnées, et l’image reste pratiquement identique à l’originale. Utilisez la comparaison avant/après pour vérifier le résultat avant de télécharger.',
      },
      {
        id: 'faq-11',
        question: 'La compression modifie-t-elle les dimensions de mon image ?',
        answer:
          'Non. CompressMyPic conserve les dimensions de votre image : seule la taille du fichier diminue. Votre photo garde la même largeur, la même hauteur et les mêmes proportions que l’originale. Si vous voulez changer les dimensions, utilisez l’outil Redimensionner une image.',
      },
      {
        id: 'faq-12',
        question: 'CompressMyPic ajoute-t-il un filigrane ?',
        answer:
          'Non. Vos images compressées restent propres : aucun logo, aucun texte et aucun filigrane n’est ajouté.',
      },
      {
        id: 'faq-13',
        question: 'Puis-je compresser des images sur mon téléphone ?',
        answer:
          'Oui. CompressMyPic fonctionne dans les navigateurs mobiles sur iOS et Android : choisissez une photo dans votre galerie ou prenez-en une nouvelle, puis importez-la ici pour la compresser.',
      },
      {
        id: 'faq-14',
        question: 'Comment fonctionne le curseur de qualité ?',
        answer:
          'Le curseur de qualité vous permet de régler la compression de 10 % à 100 %. Les valeurs élevées conservent plus de détails et produisent des fichiers plus gros, tandis que les valeurs faibles rendent les fichiers beaucoup plus petits. Les préréglages Faible, Équilibré et Élevé règlent le curseur à votre place, et la taille avant/après en direct montre le résultat de chaque changement.',
      },
      {
        id: 'faq-15',
        question: 'Quel format de sortie dois-je choisir ?',
        answer:
          'Après avoir importé une image, choisissez de conserver le format d’origine ou de convertir en JPG, PNG ou WebP. WebP est généralement le meilleur choix pour le web, car il est de 25 % à 35 % plus petit que JPEG avec une qualité similaire, tandis que PNG est préférable quand vous avez besoin de transparence.',
      },
      {
        id: 'faq-16',
        question: 'Comment compresser une image pour WhatsApp ?',
        answer:
          'Importez votre photo, choisissez un préréglage de qualité inférieure ou une sortie en WebP, puis téléchargez le fichier plus petit avant de le partager sur WhatsApp. Les photos plus petites s’envoient plus vite, consomment moins de données mobiles et risquent moins d’être rejetées parce qu’elles sont trop grosses.',
      },
      {
        id: 'faq-17',
        question: 'Puis-je compresser des images pour Instagram ou Facebook ?',
        answer:
          'Oui. Importez votre photo, choisissez le préréglage Équilibré et téléchargez le fichier JPG ou WebP plus petit. Le fichier réduit se publie plus vite et garde assez de qualité pour les publications, les stories et les photos de profil.',
      },
      {
        id: 'faq-18',
        question: 'Puis-je compresser des images à joindre par e-mail ?',
        answer:
          'Oui. Réduisez vos images avec le curseur de qualité jusqu’à ce que chaque fichier soit assez petit pour la limite de pièces jointes de votre fournisseur de messagerie, puis joignez les fichiers téléchargés à votre message au lieu des originaux lourds.',
      },
      {
        id: 'faq-19',
        question: 'Pourquoi mon PNG compressé est-il parfois plus gros que l’original ?',
        answer:
          'PNG est un format sans perte qui ignore le curseur de qualité : réencoder un PNG peut parfois donner un fichier de taille égale ou supérieure à l’original. Dans ce cas, CompressMyPic conserve l’original. Pour les PNG qui ressemblent à des photos, convertir en WebP ou en JPG donne généralement des fichiers de 50 % à 80 % plus petits.',
      },
      {
        id: 'faq-20',
        question: 'CompressMyPic fonctionne-t-il hors ligne ?',
        answer:
          'Une fois la page chargée, la compression elle-même se fait entièrement dans votre navigateur, sans envoi vers un serveur. Vous devez toutefois être en ligne pour charger le site la première fois.',
      },
    ],
  },
  guidesSection: {
    heading: 'Guides',
    subheading:
      'Des guides pas à pas pour obtenir des fichiers plus petits sans perte visible de qualité.',
    cards: [
      {
        title: 'Comment compresser des images pour WhatsApp sans perdre en qualité',
        desc: 'Réduisez la taille des photos avant de les envoyer pour qu’elles restent nettes et s’envoient vite.',
        cta: 'Lire le guide →',
      },
      {
        title: 'JPG vs PNG vs WebP : quel format utiliser ?',
        desc: 'Taille de fichier, qualité et transparence comparées, pour choisir le bon format.',
        cta: 'Lire le guide →',
      },
      {
        title: 'Comment réduire une image à 100 Ko pour le web et l’e-mail',
        desc: 'Étape par étape : atteignez 100 Ko sans perte visible de qualité.',
        cta: 'Lire le guide →',
      },
    ],
  },
  shareSection: {
    heading: 'Partagez CompressMyPic avec vos amis',
    text: 'Cet outil vous a été utile ? Aidez un ami à compresser ses images aussi : cela ne prend qu’un clic.',
    shareText:
      'Compressez des images en ligne gratuitement — sans inscription, sans filigrane. Essayez CompressMyPic :',
    siteUrl: 'https://compressmypic.online/',
    shareOn: 'Partager sur {name}',
    copyLink: 'Copier le lien',
    copied: 'Copié !',
    share: 'Partager',
    emailSubject: 'Compresseur d’images gratuit – CompressMyPic', // 'Free Image Compressor – CompressMyPic'
    nativeShareTitle: 'CompressMyPic – Compresseur d’images gratuit', // 'CompressMyPic – Free Image Compressor'
  },
  toolPageLayout: {
    home: 'Accueil',
    privacyPill: 'Traitement 100 % privé dans le navigateur · Les fichiers ne quittent jamais votre appareil',
    noUploads: 'Aucun envoi vers des serveurs',
    freeNote: 'Gratuit · Sans inscription · Sans filigrane',
    howToTitle: 'Comment utiliser {name}',
    howToIntro:
      'Suivez ces étapes simples pour accomplir votre tâche, directement dans votre navigateur.',
    featuresTitle: 'Pourquoi utiliser {name} de CompressMyPic ?',
    faqTitle: '{name} — Questions fréquentes',
    relatedTitle: 'Outils d’images gratuits associés',
  },
  uploadZone: {
    dropText: 'Glissez-déposez vos images ici',
    browseButton: 'parcourir les fichiers',
    browsePrefix: 'ou',
    browseSuffix: 'depuis votre ordinateur ou votre téléphone',
    orPaste: 'Coller (Ctrl+V) pris en charge',
    hint: 'Max. {max} Mo par image',
    errorTooBig: '« {name} » dépasse la limite maximale de {max} Mo.',
    errorBadType: '« {name} » n’est pas dans un format pris en charge ({formats}).',
    errorUnreadable: '« {name} » est un fichier vide (0 octet).',
    errorMore: '(+{count} erreurs supplémentaires)',
    formatsLabel: 'JPG, PNG, WebP, HEIC',
    ariaLabel:
      'Zone d’import d’images. Glissez-déposez ou cliquez pour parcourir les fichiers.', // 'Upload images area. Drag and drop or click to browse files.'
    errorLoadFailed: 'Fichier endommagé ou illisible.', // App.tsx handleFilesSelected catch: 'Corrupted or unreadable image file.'
  },
  comparisonModal: {
    titlePrefix: 'Comparaison visuelle de la qualité',
    beforeLabel: 'Originale (avant)',
    afterLabel: 'Compressée (après)',
    closeLabel: 'Fermer la vue de comparaison',
    instruction: 'Faites glisser le curseur vers la gauche ou vers la droite pour vérifier la qualité de chaque pixel.',
    sliderLabel: 'Curseur',
    sideBySideLabel: 'Côte à côte',
    zoomInLabel: 'Zoom avant',
    zoomOutLabel: 'Zoom arrière',
    originalLabel: 'Originale :',
    outputLabel: 'Résultat :',
    reductionLabel: 'Réduction :',
    sizeChangeLabel: 'Changement de taille :',
    qualityLabel: 'Réglage de qualité :',
    formatLabel: 'Format :',
    modalAriaLabel: 'Fenêtre de comparaison d’images', // 'Image comparison modal'
    altCompressed: 'Version compressée de {name}', // 'Compressed version of {name}'
    altOriginal: 'Version originale de {name}', // 'Original version of {name}'
    altProcessed: 'Version traitée de {name}', // 'Processed version of {name}'
  },
  homeMeta: {
    seoTitle: 'Compresseur d’images gratuit online – Réduire à 100 Ko',
    seoDescription:
      'Compressez des images en ligne gratuitement : réduisez leur taille sans perdre en qualité. JPG, PNG et WebP, sans inscription ni filigrane, sur votre appareil.',
    h1: 'Compresseur d’images gratuit',
    subtitle: 'Réduisez la taille des fichiers JPG, PNG, WebP et HEIC directement dans votre navigateur.',
  },
  categories: {
    compress: 'Compresser',
    resize: 'Redimensionner',
    convert: 'Convertir',
    'crop-edit': 'Recadrer et modifier',
    'ai-tools': 'Outils IA',
    create: 'Créer',
    privacy: 'Outils de confidentialité',
    developer: 'Outils développeur',
  },
  compressionControls: {
    modeLabel: 'Mode de compression', // 'Compression Mode'
    presetLow: 'Compression faible (85 %)', // 'Low Compression (85%)'
    presetBalanced: 'Équilibrée (70 %)', // 'Balanced (70%)'
    presetHigh: 'Compression élevée (50 %)', // 'High Compression (50%)'
    presetCustom: 'Personnalisée', // 'Custom'
    formatLabel: 'Format de sortie', // 'Output Format'
    formatOriginal: 'Original', // 'Original'
    qualityLabel: 'Qualité souhaitée :', // 'Quality Target:'
    qualityHigh: 'Haute fidélité', // 'High Fidelity' (quality >= 80)
    qualityOptimal: 'Équilibre idéal pour le web', // 'Optimal Web Balance' (60–79)
    qualityMax: 'Économie d’espace maximale', // 'Max Space Savings' (< 60)
    qualityAriaLabel: 'Curseur de qualité de 10 à 100 pour cent', // 'Quality slider from 10 to 100 percent'
    compressAll: 'Tout recompresser', // 'Re-compress All'
    compressing: 'Compression…', // 'Compressing...'
    clearAll: 'Tout effacer', // 'Clear All'
    clearAllTitle: 'Effacer toutes les images', // 'Clear all images'
    transparencyTitle: 'Avis de transparence pour la conversion en JPEG', // 'Transparency Notice for JPEG Conversion'
    transparencyBody:
      'Le format JPEG ne prend pas en charge la transparence (canaux alpha). Les arrière-plans transparents seront remplacés par un fond uni (blanc par défaut). Choisissez PNG ou WebP si vous souhaitez conserver les arrière-plans transparents.',
    pngTip:
      'PNG est un format sans perte qui ignore le curseur de qualité, donc réencoder un PNG peut parfois donner un fichier de taille égale ou supérieure à l’original. Pour les PNG qui ressemblent à des photos, choisir WebP ou JPG donne généralement des fichiers de 50 % à 80 % plus petits.',
  },
  resultsList: {
    summary: 'Résumé de la compression', // 'Compression Summary'
    image: 'Image', // 'Image' (count === 1)
    images: 'Images', // 'Images' (count !== 1)
    totalOriginal: 'Total d’origine :', // 'Total Original:'
    totalCompressed: 'Total compressé :', // 'Total Compressed:'
    totalSaved: 'Total économisé :', // 'Total Saved:'
    processing: 'Traitement…', // 'Processing...'
    grewBy: '(a augmenté de {bytes})', // '(grew by {bytes})'
    reduction: 'Réduction :', // 'Reduction:'
    sizeChange: 'Changement de taille :', // 'Size Change:'
    downloadAll: 'Tout télécharger (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Création du ZIP ({progress} %)…', // 'Creating ZIP ({progress}%)...'
    compare: 'Comparer', // 'Compare'
    compareTitle: 'Cliquez pour voir la comparaison visuelle de la qualité', // 'Click to inspect visual quality comparison'
    compareActionTitle: 'Comparer l’avant et l’après', // 'Compare visual before/after'
    download: 'Télécharger', // 'Download'
    retry: 'Réessayer', // 'Retry'
    removeTitle: 'Retirer l’image', // 'Remove image'
    removeAriaLabel: 'Retirer {name}', // 'Remove {name}'
    keptOriginal: 'Original conservé (le réencodage était plus gros)', // 'Kept original (re-encode was larger)'
    grewByStatus: 'A augmenté de {bytes} : le réencodage est plus gros que l’original', // 'Grew by {bytes} — re-encode is larger than the original'
    compressedOk: 'Compressé avec succès', // 'Compressed successfully'
    optimizing: 'Optimisation des pixels…', // 'Optimizing pixels...'
    compressionError: 'Erreur de compression', // 'Compression error'
    original: 'Original', // 'Original' (metric label)
    compressed: 'Compressé', // 'Compressed' (metric label)
    output: 'Sortie', // 'Output' (metric label when original kept)
    spaceSaved: 'Espace économisé', // 'Space Saved'
    formatLabel: 'Format :', // 'Format:' (in "{w}×{h}px · Format: {fmt}")
    alpha: 'Alpha', // 'Alpha' badge
    largerTitle: 'La sortie est de {bytes} plus grosse que l’originale.', // 'Output is {bytes} larger than the original.'
    largerPngNote:
      'Le réencodage PNG sans perte ignore le curseur de qualité ; WebP ou JPG est généralement beaucoup plus petit pour les PNG qui ressemblent à des photos.',
    largerNote:
      'Cette image était déjà très compressée pour la qualité sélectionnée.',
    keepOriginal: 'Conserver l’original', // 'Keep original'
  },
} as const;

// ---------------------------------------------------------------------------
// HOME registry entry (FR) — for the merge into src/data/tools.fr.ts.
// slug '/', name, shortDescription, category, seoTitle + seoDescription
// IDENTICAL to homeMeta above, h1, subtitle, howToSteps [], features [],
// faqs [], relatedSlugs as listed. (Format mirrors spanish/source/home-entry.txt.)
// ---------------------------------------------------------------------------
export const HOME_FR = {
  slug: '/',
  name: 'Compresseur d’images',
  shortDescription: 'Compressez des images JPG, PNG, WebP et HEIC sans perdre en qualité.',
  category: 'compress',
  seoTitle: 'Compresseur d’images gratuit online – Réduire à 100 Ko',
  seoDescription:
    'Compressez des images en ligne gratuitement : réduisez leur taille sans perdre en qualité. JPG, PNG et WebP, sans inscription ni filigrane, sur votre appareil.',
  h1: 'Compresseur d’images gratuit',
  subtitle: 'Réduisez la taille des fichiers JPG, PNG, WebP et HEIC directement dans votre navigateur.',
  howToSteps: [],
  features: [],
  faqs: [],
  relatedSlugs: ['/image-resizer', '/image-converter', '/remove-image-metadata'],
} as const;

// Per-tool workspace UI strings in French (fr) — COMPLETE (all 48 tools).
// Assembled from tool-ui-fr-batch1.ts … tool-ui-fr-batch6.ts (coordinator merge).
// Target: merged into src/locales/fr/ui.ts as the TOOL_UI_FR export.
// French (fr), vous form. Keyed by English slug.
// English source is in a comment on each line. Placeholders in braces
// are filled at runtime and must be kept as-is.

export const TOOL_UI_FR = {

  "/image-resizer": {
    comparisonTitlePrefix: "Comparaison de redimensionnement", // 'Resize Comparison'
    comparisonAfterLabel: "Redimensionnée (après)", // 'Resized (After)'
    presetInstagramPost: "Publication Instagram (1080×1080)", // 'Instagram Post (1080×1080)'
    presetInstagramStory: "Story Instagram (1080×1920)", // 'Instagram Story (1080×1920)'
    presetYouTubeThumb: "Miniature YouTube (1280×720)", // 'YouTube Thumb (1280×720)'
    presetFacebookCover: "Couverture Facebook (851×315)", // 'Facebook Cover (851×315)'
    presetXHeader: "Bannière X (1500×500)", // 'X Header (1500×500)'
    presetFullHd: "Full HD (1920×1080)", // 'Full HD (1920×1080)' — unchanged
    errorResizeFailed: "Échec du redimensionnement de l'image.", // 'Resize failed.'
    errorCorruptedFile: "Fichier image corrompu ou illisible.", // 'Corrupted or unreadable image file.'
    resizeMode: "Mode de redimensionnement", // 'Resize Mode'
    modeByPixels: "En pixels (L × H)", // 'By Pixels (W × H)'
    modeByPercentage: "En pourcentage (%)", // 'By Percentage (%)'
    outputFormat: "Format de sortie", // 'Output Format'
    formatOriginal: "Original", // 'Original' — same in French
    formatJpg: "JPG", // 'JPG' — unchanged
    widthLabel: "Largeur (px)", // 'Width (px)'
    heightLabel: "Hauteur (px)", // 'Height (px)'
    placeholderAuto: "Auto", // placeholder 'Auto'
    aspectRatioLocked: "Rapport d'aspect verrouillé", // 'Aspect Ratio Locked'
    aspectRatioUnlocked: "Déverrouillé (personnalisé)", // 'Unlocked (Custom)'
    fitModeLabel: "Mode d'ajustement :", // 'Fit Mode:'
    fitContain: "Contenir (sans recadrage)", // 'Contain (No Crop)'
    fitCover: "Couvrir (recadrage centré)", // 'Cover (Center Crop)'
    fitStretchExact: "Étirer à la taille exacte", // 'Stretch Exact'
    quickPresets: "Préréglages rapides pour réseaux sociaux et web", // 'Quick Social & Web Presets'
    scalePercentage: "Pourcentage d'échelle :", // 'Scale Percentage:'
    outputQuality: "Qualité de sortie :", // 'Output Quality:'
    matteBg: "Fond mate :", // 'Matte BG:'
    resizing: "Redimensionnement…", // 'Resizing...'
    resizeAll: "Redimensionner tout ({count})", // 'Resize All ({count})'
    clear: "Effacer", // 'Clear'
    batchReady: "Lot prêt", // 'Batch Ready'
    batchReadySingular: "{count} image redimensionnée prête à télécharger", // '{count} resized image ready to download'
    batchReadyPlural: "{count} images redimensionnées prêtes à télécharger", // '{count} resized images ready to download'
    creatingZip: "Création du ZIP…", // 'Creating ZIP...'
    downloadAllZip: "Tout télécharger (ZIP)", // 'Download All (ZIP)'
    resizedStatus: "Redimensionnée ({original} → {converted})", // 'Resized ({original} → {converted})'
    compare: "Comparer", // 'Compare'
    download: "Télécharger", // 'Download'
    removeImage: "Supprimer {name}", // aria-label `Remove ${item.name}`
  },
  "/image-converter": {
    comparisonTitlePrefix: "Comparaison de conversion de format", // 'Format Conversion Comparison'
    comparisonAfterLabel: "Convertie (après)", // 'Converted (After)'
    errorConversionFailed: "Échec de la conversion de l'image.", // 'Conversion failed.'
    errorUnsupportedFile: "Fichier image non pris en charge ou corrompu.", // 'Unsupported or corrupted image file.'
    convertToFormat: "Convertir au format", // 'Convert To Format'
    formatWebp: "WebP (le plus léger pour le web)", // 'WebP (Smallest Web)'
    formatJpg: "JPG (universel)", // 'JPG (Universal)'
    formatPng: "PNG (sans perte et avec transparence)", // 'PNG (Lossless Alpha)'
    transparencyFillColor: "Couleur de remplissage de la transparence", // 'Transparency Fill Color'
    quality: "Qualité", // 'Quality'
    qualityLosslessPng: "PNG sans perte", // 'Lossless PNG'
    converting: "Conversion…", // 'Converting...'
    convertAll: "Tout convertir ({count})", // 'Convert All ({count})'
    clear: "Effacer", // 'Clear'
    conversionComplete: "Conversion terminée", // 'Conversion Complete'
    filesConverted: "{count} fichiers convertis en {format}", // '{count} files converted to {format}'
    creatingZip: "Création du ZIP…", // 'Creating ZIP...'
    downloadAllZip: "Tout télécharger (ZIP)", // 'Download All (ZIP)'
    convertedStatus: "Converti en {ext}", // 'Converted to {ext}'
    compare: "Comparer", // 'Compare'
    download: "Télécharger", // 'Download'
    removeImage: "Supprimer {name}", // aria-label `Remove ${item.name}`
  },
  "/rotate-flip-image": {
    quickRotateFlip: "Pivoter et retourner rapidement", // 'Quick Rotate & Flip'
    rotate90Left: "Pivoter de 90° à gauche", // 'Rotate 90° Left'
    rotate90Right: "Pivoter de 90° à droite", // 'Rotate 90° Right'
    rotate180: "180°", // '180°'
    flipHorizontal: "Retourner horizontalement", // 'Flip Horizontal'
    flipVertical: "Retourner verticalement", // 'Flip Vertical'
    outputFormat: "Format de sortie", // 'Output Format'
    formatOriginal: "Original", // 'Original'
    formatJpg: "JPG", // 'JPG'
    rotationAngle: "Angle de rotation :", // 'Rotation Angle:'
    resetTo0: "Réinitialiser à 0°", // 'Reset to 0°'
    applyAngle: "Appliquer l'angle", // 'Apply Angle'
    clear: "Effacer", // 'Clear'
    batchReady: "Lot prêt", // 'Batch Ready'
    transformedImagesReady: "{count} images transformées prêtes", // '{count} transformed images ready'
    creatingZip: "Création du ZIP…", // 'Creating ZIP...'
    downloadAllZip: "Tout télécharger (ZIP)", // 'Download All (ZIP)'
    rotatedBadge: "Pivotée de {angle}°", // 'Rotated {angle}°'
    flippedH: " · Retournée H", // ' · Flipped H'
    flippedV: " · Retournée V", // ' · Flipped V'
    compare: "Comparer", // 'Compare'
    download: "Télécharger", // 'Download'
    removeItem: "Supprimer {name}", // 'Remove {name}' (aria-label)
    transformFailed: "Échec de la transformation de l'image.", // 'Transform failed.'
    corruptedImage: "Image corrompue ou illisible.", // 'Corrupted or unreadable image.'
    comparisonTitlePrefix: "Comparaison de pivotement et retournement", // 'Rotate & Flip Comparison'
    comparisonAfterLabel: "Modifiée (après)", // 'Edited (After)'
  },
  "/image-to-pdf": {
    uploadTitle: "Déposez des images à combiner en PDF", // 'Drop images to combine into PDF'
    couldNotRead: "Impossible de lire « {filename} ». Assurez-vous qu'il s'agit d'une image valide.", // 'Could not read "{filename}". Please ensure it is a valid image.'
    pdfGenerationFailed: "Échec de la génération du PDF.", // 'PDF generation failed.'
    encodingPage: "Encodage de la page {current} sur {total}…", // 'Encoding page {current} of {total}...'
    generatingPdf: "Génération du PDF…", // 'Generating PDF...'
    pageSize: "Taille de page", // 'Page Size'
    pageSizeA4: "A4 (210 × 297 mm)", // 'A4 (210 × 297 mm)'
    pageSizeLetter: "Lettre US (8,5 × 11 po)", // 'US Letter (8.5 × 11 in)'
    pageSizeFit: "Ajuster à la taille de l'image", // 'Fit to Image Size'
    orientation: "Orientation", // 'Orientation'
    orientationAuto: "Automatique (selon la photo)", // 'Auto (Match Photo)'
    orientationPortrait: "Portrait", // 'Portrait'
    orientationLandscape: "Paysage", // 'Landscape'
    margin: "Marge", // 'Margin'
    marginNone: "Sans marge (à fond perdu)", // 'No Margin (Full Bleed)'
    marginSmall: "Petite marge", // 'Small Margin'
    marginMedium: "Marge moyenne", // 'Medium Margin'
    imagePlacement: "Placement de l'image", // 'Image Placement'
    placementContain: "Contenir (image entière)", // 'Contain (Full Image)'
    placementCover: "Couvrir (remplir la page)", // 'Cover (Fill Page)'
    pdfFilename: "Nom de fichier PDF", // 'PDF Filename'
    pdfImageQuality: "Qualité d'image du PDF :", // 'PDF Image Quality:'
    createDownloadPdf: "Créer et télécharger le PDF ({count} p.)", // 'Create & Download PDF ({count}p)'
    clear: "Effacer", // 'Clear'
    pdfReady: "PDF prêt ({count} {pages} · {size})", // 'PDF ready ({count} {pages} · {size})'
    pageSingular: "page", // 'page'
    pagePlural: "pages", // 'pages'
    downloadPdfAgain: "Télécharger le PDF à nouveau", // 'Download PDF Again'
    pageOrder: "Ordre des pages ({count} {pages})", // 'Page Order ({count} {pages})'
    pageOrderSingular: "Page", // 'Page' (in Page Order heading)
    pageOrderPlural: "Pages", // 'Pages' (in Page Order heading)
    movePageUp: "Monter la page", // 'Move page up' (title)
    movePageDown: "Descendre la page", // 'Move page down' (title)
    removePage: "Supprimer la page", // 'Remove page' (title)
  },
  "/image-metadata-viewer": {
    uploadTitle: "Déposez une image pour inspecter EXIF et métadonnées", // 'Drop an image to inspect EXIF & metadata'
    unableToParse: "Impossible d'analyser les métadonnées de l'image.", // 'Unable to parse image metadata.'
    embeddedMetadataFound: "Métadonnées intégrées trouvées ({count} types de balises)", // 'Embedded metadata found ({count} tag types)'
    noTagsDetected: "Aucune balise EXIF, GPS ou d'appareil photo cachée détectée", // 'No EXIF, GPS, or hidden camera tags detected'
    stripMetadata: "Supprimer les métadonnées", // 'Strip Metadata'
    copyJson: "Copier le JSON", // 'Copy JSON'
    copiedJson: "JSON copié", // 'Copied JSON'
    exportJson: "Exporter le JSON", // 'Export JSON'
    clear: "Effacer", // 'Clear' (title)
    gpsDetected: "Coordonnées de position GPS détectées", // 'GPS Location Coordinates Detected'
    latitude: "Latitude :", // 'Latitude:'
    longitude: "Longitude :", // 'Longitude:'
    gpsWarning:
      "Partager cette image telle quelle peut révéler où la photo a été prise. Utilisez Supprimer les métadonnées d'image avant de la publier en ligne.", // 'Sharing this image as-is can reveal where the photo was taken. Use Remove Image Metadata before posting online.'
    extractedMetadata: "Métadonnées extraites ({count} propriétés)", // 'Extracted Metadata ({count} properties)'
    privacyTag: "Balise de confidentialité", // 'Privacy Tag'
    gpsWarningLink: "Supprimer les métadonnées d'image", // 'Remove Image Metadata'
  },
  "/remove-image-metadata": {
    uploadTitle: "Déposez des photos pour supprimer EXIF, GPS et métadonnées", // 'Drop photos to strip EXIF, GPS & metadata'
    failedToStrip: "Échec de la suppression des métadonnées.", // 'Failed to strip metadata.'
    strippingMethod: "Méthode de suppression", // 'Stripping Method'
    losslessStrip: "Suppression binaire sans perte (JPG/PNG)", // 'Lossless Binary Strip (JPG/PNG)'
    fullCanvasReencode: "Réencodage complet avec Canvas", // 'Full Canvas Re-encode'
    outputFormat: "Format de sortie", // 'Output Format'
    formatOriginal: "Original", // 'Original'
    formatJpg: "JPG", // 'JPG'
    reencodeQuality: "Qualité de réencodage (utilisée pour WebP/HEIC ou réencodage complet) :", // 'Re-encode Quality (used for WebP/HEIC or Full Re-encode):'
    cleaning: "Nettoyage…", // 'Cleaning...'
    recleanAll: "Tout nettoyer à nouveau", // 'Re-clean All'
    clear: "Effacer", // 'Clear'
    privacyVerified: "Confidentialité vérifiée", // 'Privacy Verified'
    cleanImagesReady: "{count} images propres prêtes, métadonnées supprimées", // '{count} clean images ready with metadata stripped'
    creatingZip: "Création du ZIP…", // 'Creating ZIP...'
    downloadAllCleanZip: "Tout télécharger propre (ZIP)", // 'Download All Clean (ZIP)'
    strippedTags: "{before} balises de métadonnées supprimées → {after} restante(s)", // 'Stripped {before} metadata tags → {after} remaining'
    verifiedClean: "Propre vérifié (0 balise EXIF/GPS)", // 'Verified clean (0 EXIF/GPS tags)'
    losslessBinaryStrip: "Suppression binaire sans perte", // 'Lossless binary strip'
    cleanCanvasExport: "Export propre avec Canvas", // 'Clean Canvas export'
    scrubbing: "Suppression des en-têtes EXIF et GPS…", // 'Scrubbing EXIF & GPS headers...'
    downloadClean: "Télécharger propre", // 'Download Clean'
    removeItem: "Supprimer {name}", // 'Remove {name}' (aria-label)
  },
  "/favicon-generator": {
    uploadTitle: "Déposez votre logo ou icône ici", // 'Drop your logo or icon here'
    uploadSubtitlePrefix: "PNG ou SVG carré recommandé · ", // 'Square PNG or SVG recommended · '
    uploadBrowseFile: "parcourir un fichier", // 'browse file'
    errorGenerateFailed: "Échec de la génération du pack de favicon.", // 'Failed to generate favicon package.'
    backgroundFill: "Remplissage d'arrière-plan", // 'Background Fill'
    transparent: "Transparent", // 'Transparent'
    padding: "Remplissage", // 'Padding'
    cornerRadius: "Rayon des coins", // 'Corner Radius'
    tabPreviewAlt: "Aperçu d'onglet", // alt 'Tab preview'
    myWebsite: "Mon site web", // 'My Website'
    darkTabPreviewAlt: "Aperçu d'onglet sombre", // alt 'Dark tab preview'
    darkModeTab: "Onglet en mode sombre", // 'Dark Mode Tab'
    packingZip: "Empaquetage du ZIP…", // 'Packing ZIP...'
    downloadAllZip: "Tout télécharger (ZIP)", // 'Download All (ZIP)'
    clear: "Effacer", // title 'Clear'
    downloadFaviconIco: "Télécharger favicon.ico", // title 'Download favicon.ico'
    downloadFile: "Télécharger {filename}", // title `Download ${asset.filename}`
    htmlHeadSnippet: "Extrait HTML <head>", // 'HTML <head> Snippet'
    copied: "Copié !", // 'Copied!'
    copyHtml: "Copier le HTML", // 'Copy HTML'
  },
  "/image-color-picker": {
    uploadTitle: "Déposez une image ou collez une capture (Ctrl+V)", // 'Drop an image or paste screenshot (Ctrl+V)'
    errorUnableToLoadImage: "Impossible de charger l'image.", // 'Unable to load image.'
    clickAnywhereToPin: "Cliquez n'importe où pour épingler une couleur", // 'Click anywhere to pin a color'
    newImage: "Nouvelle image", // 'New Image'
    pixelInspector: "Inspecteur de pixels", // 'Pixel Inspector'
    copyLabel: "Copier {label}", // title `Copy ${row.label}`
    pickedSwatches: "Échantillons choisis ({count})", // 'Picked Swatches ({count})'
    exportCss: "Exporter le CSS", // 'Export CSS'
    clickPixelsHint: "Cliquez sur les pixels de l'image pour enregistrer des couleurs dans votre palette.", // 'Click pixels on the image to save colors to your palette.'
    clickToSelectCopy: "Cliquer pour sélectionner et copier {hex}", // title `Click to select & copy ${c.hex}`
  },
  '/image-dimensions-checker': {
    uploadTitle: "Déposez des images pour inspecter les dimensions et ratios exacts", // 'Drop images to inspect exact dimensions & ratios'
    minWidthCheck: "Largeur minimale (px)", // 'Min Width Check (px)'
    minHeightCheck: "Hauteur minimale (px)", // 'Min Height Check (px)'
    placeholderMinWidth: "p. ex. 1200", // placeholder 'e.g. 1200'
    placeholderMinHeight: "p. ex. 630", // placeholder 'e.g. 630'
    exportCsv: "Exporter CSV", // 'Export CSV'
    exportJson: "Exporter JSON", // 'Export JSON'
    clear: "Effacer", // 'Clear'
    headerImage: "Image", // table header 'Image'
    headerDimensions: "Dimensions", // table header 'Dimensions'
    headerAspectRatio: "Ratio", // table header 'Aspect Ratio'
    headerOrientation: "Orientation", // table header 'Orientation'
    headerSizeFormat: "Taille / Format", // table header 'Size / Format'
    headerPrint300Dpi: "Impression à 300 DPI", // table header 'Print @300 DPI'
    headerSpecCheck: "Vérification des spécifications", // table header 'Spec Check'
    orientationLandscape: "Paysage", // 'Landscape'
    orientationPortrait: "Portrait", // 'Portrait'
    orientationSquare: "Carré", // 'Square'
    alphaTag: " · Alpha", // ' · Alpha'
    specPass: "Réussi", // 'Pass'
    specBelowMin: "Sous le minimum", // 'Below Min'
    csvYes: "Oui", // CSV value 'Yes'
    csvNo: "Non", // CSV value 'No'
  },
  '/image-cropper': {
    uploadTitle: "Déposez une image à recadrer de façon interactive", // 'Drop an image to crop interactively'
    errorUnableToLoadImage: "Impossible de charger l'image.", // 'Unable to load image.'
    errorCanvasContext: "Impossible d'initialiser le contexte du canevas.", // 'Unable to initialize canvas context.'
    errorCropExportFailed: "Échec de l'export du recadrage.", // 'Crop export failed.'
    aspectFree: "Libre", // aspect preset 'Free'
    selection: "Sélection :", // 'Selection:'
    zoomOut: "Zoom arrière", // aria-label 'Zoom out'
    zoomIn: "Zoom avant", // aria-label 'Zoom in'
    removeImage: "Supprimer l'image", // aria-label 'Remove image'
    cropSourceAlt: "Image source à recadrer", // alt 'Crop source'
    originalLabel: "Original :", // 'Original:'
    cropOptions: "Options de recadrage", // 'Crop Options'
    selectFull: "Tout sélectionner", // 'Select Full'
    aspectRatioPreset: "Ratio prédéfini", // 'Aspect Ratio Preset'
    cropWidth: "Largeur de recadrage", // 'Crop Width'
    cropHeight: "Hauteur de recadrage", // 'Crop Height'
    outputFormat: "Format de sortie", // 'Output Format'
    formatOriginal: "Original", // 'Original' — same in French
    formatJpg: "JPG", // 'JPG' — unchanged
    quality: "Qualité", // 'Quality'
    cropping: "Recadrage…", // 'Cropping...'
    cropAndDownload: "Recadrer et télécharger", // 'Crop & Download'
  },
  '/image-watermark': {
    uploadTitle: "Déposez une image pour ajouter un filigrane texte ou logo", // 'Drop an image to add a text or logo watermark'
    errorUnableToLoadImage: "Impossible de charger l'image.", // 'Unable to load image.'
    errorUnableToLoadLogo: "Impossible de charger l'image du logo.", // 'Unable to load logo image.'
    errorWatermarkExportFailed: "Échec de l'export de l'image avec filigrane.", // 'Watermark export failed.'
    fallbackWatermarkText: "Filigrane", // canvas fallback text 'Watermark'
    tiledPreview: "Aperçu en mosaïque", // 'Tiled Preview'
    dragToPosition: "Faites glisser sur l'image pour positionner", // 'Drag on Image to Position'
    changeImage: "Changer d'image", // 'Change Image'
    watermarkType: "Type de filigrane", // 'Watermark Type'
    modeText: "Filigrane texte", // 'Text Watermark'
    modeLogo: "Image de logo", // 'Logo Image'
    watermarkTextLabel: "Texte du filigrane", // 'Watermark Text'
    placeholderBrand: "© Votre marque", // placeholder '© Your Brand'
    textColor: "Couleur du texte", // 'Text Color'
    size: "Taille", // 'Size'
    uploadLogo: "Importer un logo (PNG / SVG)", // 'Upload Logo (PNG / SVG)'
    changeLogo: "Changer l'image de logo", // 'Change Logo Image'
    logoWidth: "Largeur du logo", // 'Logo Width'
    opacity: "Opacité", // 'Opacity'
    rotation: "Rotation", // 'Rotation'
    tiledRepeatPattern: "Motif répété en mosaïque", // 'Tiled Repeat Pattern'
    tileSpacing: "Espacement des tuiles", // 'Tile Spacing'
    anchorPresets: "Ancrages prédéfinis (ou glisser sur l'image)", // 'Anchor Presets (or drag on image)'
    formatOrig: "Orig", // 'Orig' — same abbreviation in French
    formatJpg: "JPG", // 'JPG' — unchanged
    quality: "Qualité", // 'Quality'
    exporting: "Export…", // 'Exporting...'
    downloadWatermarked: "Télécharger l'image avec filigrane", // 'Download Watermarked Image'
  },
  '/blur-pixelate-image': {
    uploadTitle: "Déposez une image à flouter ou à pixeliser", // 'Drop an image to blur or pixelate areas'
    errorUnableToLoadImage: "Impossible de charger l'image.", // 'Unable to load image.'
    errorExportFailed: "Échec de l'export.", // 'Export failed.'
    paintOverAreasBlur: "Peignez les zones à flouter", // 'Paint Over Areas to Blur'
    paintOverAreasPixelate: "Peignez les zones à pixeliser", // 'Paint Over Areas to Pixelate'
    wholeImagePreview: "Aperçu de l'image entière", // 'Whole-Image Preview'
    undo: "Annuler", // 'Undo'
    resetBrush: "Réinitialiser le pinceau", // 'Reset Brush'
    removeImage: "Supprimer l'image", // aria-label 'Remove image'
    targetArea: "Zone cible", // 'Target Area'
    brushArea: "Zone au pinceau", // 'Brush Area'
    wholeImage: "Image entière", // 'Whole Image'
    effectStyle: "Style d'effet", // 'Effect Style'
    pixelateMosaic: "Mosaïque pixelisée", // 'Pixelate Mosaic'
    smoothBlur: "Flou doux", // 'Smooth Blur'
    blurRadius: "Rayon de flou", // 'Blur Radius'
    mosaicBlockSize: "Taille de bloc de mosaïque", // 'Mosaic Block Size'
    brushSize: "Taille du pinceau", // 'Brush Size'
    brushHint: "Cliquez et faites glisser directement sur la photo pour masquer visages, texte ou plaques.", // 'Click and drag directly on the photo to hide faces, text, or license plates.'
    formatOrig: "Orig", // 'Orig' — same abbreviation in French
    formatJpg: "JPG", // 'JPG' — unchanged
    quality: "Qualité", // 'Quality'
    exporting: "Export…", // 'Exporting...'
    downloadImage: "Télécharger l'image", // 'Download Image'
  },
  '/add-text-to-image': {
    uploadTitle: "Déposez une image pour ajouter des textes personnalisés", // 'Drop an image to add custom text overlays'
    errorUnableToLoadImage: "Impossible de charger l'image.", // 'Unable to load image.'
    errorExportFailed: "Échec de l'export.", // 'Export failed.'
    dragAnyText: "Faites glisser n'importe quel texte directement sur l'image", // 'Drag Any Text Directly on Image'
    changeImage: "Changer d'image", // 'Change Image'
    textLayer: "Texte {index}", // tab `Text ${idx + 1}`
    add: "Ajouter", // 'Add'
    deleteActiveTextLayer: "Supprimer le calque de texte actif", // aria-label 'Delete active text layer'
    textContent: "Contenu du texte (multiligne pris en charge)", // 'Text Content (multi-line supported)'
    font: "Police", // 'Font'
    fontInter: "Inter / Sans propre", // font option 'Inter / Clean Sans'
    fontImpact: "Impact / Affichage mème", // font option 'Impact / Meme Display'
    fontGeorgia: "Georgia / Serif classique", // font option 'Georgia / Classic Serif'
    fontCourier: "Courier / Monospace", // font option 'Courier / Monospace'
    fontTrebuchet: "Trebuchet / Sans arrondie", // font option 'Trebuchet / Rounded Sans'
    fill: "Remplissage", // 'Fill'
    toggleBold: "Activer/désactiver le gras", // aria-label 'Toggle Bold'
    toggleItalic: "Activer/désactiver l'italique", // aria-label 'Toggle Italic'
    size: "Taille", // 'Size'
    rotation: "Rotation", // 'Rotation'
    textOutline: "Contour du texte", // 'Text Outline'
    dropShadow: "Ombre portée", // 'Drop Shadow'
    defaultLayerText: "Double-cliquez ou modifiez le texte", // default layer text 'Double-tap or edit text'
    defaultCaption: "Légende {index}", // default layer text `Caption ${index + 1}`
    formatOrig: "Orig", // 'Orig' — same abbreviation in French
    formatJpg: "JPG", // 'JPG' — unchanged
    quality: "Qualité", // 'Quality'
    exporting: "Export…", // 'Exporting...'
    downloadImageWithText: "Télécharger l'image avec texte", // 'Download Image with Text'
  },
  '/image-border-generator': {
    uploadTitle: "Déposez une image pour ajouter une bordure ou un cadre personnalisé", // 'Drop an image to add a custom border or frame'
    errorUnableToLoadImage: "Impossible de charger l'image.", // 'Unable to load image.'
    errorExportFailed: "Échec de l'export.", // 'Export failed.'
    framedPreview: "Aperçu encadré", // 'Framed Preview'
    changeImage: "Changer d'image", // 'Change Image'
    quickFramePresets: "Préréglages de cadre rapides", // 'Quick Frame Presets'
    presetClassicWhite: "Blanc classique", // preset 'Classic White'
    presetPolaroidFrame: "Cadre Polaroid", // preset 'Polaroid Frame'
    presetDarkStudio: "Studio sombre", // preset 'Dark Studio'
    presetGradientGlow: "Éclat dégradé", // preset 'Gradient Glow'
    borderStyle: "Style de bordure", // 'Border Style'
    borderStyleSolid: "Uni", // border type 'solid' (rendered capitalized)
    borderStyleGradient: "Dégradé", // border type 'gradient' (rendered capitalized)
    borderStylePolaroid: "Polaroid", // border type 'polaroid' (rendered capitalized)
    borderColor: "Couleur de bordure", // 'Border Color'
    startColor: "Couleur de départ", // 'Start Color'
    endColor: "Couleur de fin", // 'End Color'
    gradientAngle: "Angle du dégradé", // 'Gradient Angle'
    borderSize: "Taille de bordure", // 'Border Size'
    frameRadius: "Rayon du cadre", // 'Frame Radius'
    photoRadius: "Rayon de la photo", // 'Photo Radius'
    dropShadow: "Ombre portée", // 'Drop Shadow'
    shadowNone: "aucune", // shadow level 'none' (rendered capitalized)
    shadowSoft: "douce", // shadow level 'soft' (rendered capitalized)
    shadowMedium: "moyenne", // shadow level 'medium' (rendered capitalized)
    shadowDeep: "profonde", // shadow level 'deep' (rendered capitalized)
    exporting: "Export…", // 'Exporting...'
    downloadFramedImage: "Télécharger l'image encadrée", // 'Download Framed Image'
  },
  '/round-image-corners': {
    uploadTitle: "Déposez une image pour arrondir ses coins", // 'Drop an image to round its corners'
    errorUnableToLoadImage: "Impossible de charger l'image.", // 'Unable to load image.'
    errorExportFailed: "Échec de l'export de l'image arrondie.", // 'Failed to export rounded image.'
    liveCornerPreview: "Aperçu des coins en direct", // 'Live Corner Preview'
    changeImage: "Changer d'image", // 'Change Image'
    cornerSettings: "Réglages des coins", // 'Corner Settings'
    fullCirclePill: "Cercle complet / Pilule", // 'Full Circle / Pill'
    individualPerCorner: "Contrôle individuel par coin", // 'Individual Per-Corner Control'
    allCornersRadius: "Rayon de tous les coins", // 'All Corners Radius'
    cornerTopLeft: "Supérieur gauche", // per-corner label 'Top Left'
    cornerTopRight: "Supérieur droit", // per-corner label 'Top Right'
    cornerBottomLeft: "Inférieur gauche", // per-corner label 'Bottom Left'
    cornerBottomRight: "Inférieur droit", // per-corner label 'Bottom Right'
    outerCornerFill: "Remplissage des coins extérieurs", // 'Outer Corner Fill'
    transparentPngWebp: "Transparent (PNG/WebP)", // 'Transparent (PNG/WebP)'
    solidColor: "Couleur unie", // 'Solid Color'
    outputFormat: "Format de sortie", // 'Output Format'
    exporting: "Export…", // 'Exporting...'
    downloadRoundedImage: "Télécharger l'image arrondie", // 'Download Rounded Image'
  },
  '/image-brightness-editor': {
    uploadTitle: "Déposez une image pour ajuster la luminosité", // ToneEditorTool title `Drop an image to adjust ${cfg.label.toLowerCase()}` (mode 'brightness')
    errorUnableToLoadImage: "Impossible de charger l'image.", // 'Unable to load image.'
    errorExportFailed: "Échec de l'export de l'image modifiée.", // 'Failed to export adjusted image.'
    viewAfter: "Après", // view tab 'after' (rendered capitalized)
    viewBefore: "Avant", // view tab 'before' (rendered capitalized)
    viewSplitCompare: "Comparaison divisée", // view tab 'Split Compare'
    fullscreenCompare: "Comparaison en plein écran", // 'Fullscreen Compare'
    removeImage: "Supprimer l'image", // title/aria-label 'Remove image'
    beforeLabel: "Avant", // split slider label 'Before'
    afterLabel: "Après", // split slider label 'After'
    originalPreviewAlt: "Aperçu original", // alt 'Original preview'
    originalComparisonAlt: "Comparaison originale", // alt 'Original comparison'
    brightnessControls: "Réglages de luminosité", // 'Brightness Controls'
    reset: "Réinitialiser", // 'Reset'
    brightnessLevel: "Niveau de luminosité", // 'Brightness Level'
    minLabel: "-100 % Plus sombre", // min label '-100% Darker'
    maxLabel: "+100 % Plus clair", // max label '+100% Brighter'
    quickPresets: "Préréglages rapides", // 'Quick Presets'
    presetDark: "Sombre (-30 %)", // preset 'Dark (-30%)'
    presetDim: "Faible (-15 %)", // preset 'Dim (-15%)'
    presetOriginal: "Original (0 %)", // preset 'Original (0%)'
    presetBright: "Lumineux (+15 %)", // preset 'Bright (+15%)'
    presetVibrant: "Éclatant (+30 %)", // preset 'Vibrant (+30%)'
    presetHighKey: "Haute clé (+50 %)", // preset 'High Key (+50%)'
    outputFormat: "Format de sortie", // 'Output Format'
    formatOriginal: "Original", // 'Original' — same in French
    formatJpg: "JPG", // 'JPG' — unchanged
    quality: "Qualité", // 'Quality'
    exporting: "Export…", // 'Exporting...'
    downloadEditedImage: "Télécharger l'image modifiée", // 'Download Edited Image'
    comparisonTitlePrefix: "Comparaison de luminosité", // ComparisonModal titlePrefix `Brightness Comparison`
    comparisonAfterLabel: "Modifiée (après)", // ComparisonModal afterLabel 'Edited (After)'
  },
  '/image-contrast-editor': {
    uploadTitle: 'Déposez une image pour ajuster le contraste', // 'Drop an image to adjust contrast'
    comparisonTitlePrefix: 'Comparaison de contraste', // 'Contrast Comparison'
    comparisonAfterLabel: 'Modifiée (après)', // 'Edited (After)'
    errorUnableToLoadImage: 'Impossible de charger l\'image.', // 'Unable to load image.'
    errorExportFailed: 'Impossible d\'exporter l\'image modifiée.', // 'Failed to export adjusted image.'
    tabAfter: 'Après', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Avant', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'Comparaison divisée', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'Comparer en plein écran', // 'Fullscreen Compare'
    removeImage: 'Supprimer l\'image', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Aperçu original', // alt 'Original preview'
    originalComparisonAlt: 'Comparaison originale', // alt 'Original comparison'
    splitBeforeLabel: 'Avant', // split slider left label 'Before'
    splitAfterLabel: 'Après', // split slider right label 'After'
    controlsHeading: 'Réglages du contraste', // '{label} Controls' (contrast mode)
    reset: 'Réinitialiser', // 'Reset'
    levelLabel: 'Niveau de contraste', // '{label} Level' (contrast mode)
    minLabel: '-100 % Plat', // minLabel '-100% Flat'
    maxLabel: '+100 % Contraste élevé', // maxLabel '+100% High Contrast'
    quickPresets: 'Préréglages rapides', // 'Quick Presets'
    presetSoft: 'Doux (-25 %)', // 'Soft (-25%)'
    presetMuted: 'Atténué (-10 %)', // 'Muted (-10%)'
    presetOriginal: 'Original (0 %)', // 'Original (0%)'
    presetCrisp: 'Net (+20 %)', // 'Crisp (+20%)'
    presetPunchy: 'Intense (+40 %)', // 'Punchy (+40%)'
    presetDramatic: 'Dramatique (+70 %)', // 'Dramatic (+70%)'
    outputFormat: 'Format de sortie', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in French
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualité', // 'Quality'
    exporting: 'Exportation…', // 'Exporting...'
    downloadEditedImage: 'Télécharger l\'image modifiée', // 'Download Edited Image'
  },
  '/image-saturation-editor': {
    uploadTitle: 'Déposez une image pour ajuster la saturation', // 'Drop an image to adjust saturation'
    comparisonTitlePrefix: 'Comparaison de saturation', // 'Saturation Comparison'
    comparisonAfterLabel: 'Modifiée (après)', // 'Edited (After)'
    errorUnableToLoadImage: 'Impossible de charger l\'image.', // 'Unable to load image.'
    errorExportFailed: 'Impossible d\'exporter l\'image modifiée.', // 'Failed to export adjusted image.'
    tabAfter: 'Après', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Avant', // tab 'before' (CSS-capitalized in code)
    tabSplitCompare: 'Comparaison divisée', // tab 'split' renders 'Split Compare'
    fullscreenCompare: 'Comparer en plein écran', // 'Fullscreen Compare'
    removeImage: 'Supprimer l\'image', // title + aria-label 'Remove image'
    originalPreviewAlt: 'Aperçu original', // alt 'Original preview'
    originalComparisonAlt: 'Comparaison originale', // alt 'Original comparison'
    splitBeforeLabel: 'Avant', // split slider left label 'Before'
    splitAfterLabel: 'Après', // split slider right label 'After'
    controlsHeading: 'Réglages de saturation', // '{label} Controls' (saturation mode)
    reset: 'Réinitialiser', // 'Reset'
    levelLabel: 'Niveau de saturation', // '{label} Level' (saturation mode)
    minLabel: '-100 % Niveaux de gris', // minLabel '-100% Grayscale'
    maxLabel: '+100 % Vif', // maxLabel '+100% Vivid'
    quickPresets: 'Préréglages rapides', // 'Quick Presets'
    presetGrayscale: 'Niveaux de gris (-100 %)', // 'Grayscale (-100%)'
    presetMuted: 'Atténué (-40 %)', // 'Muted (-40%)'
    presetOriginal: 'Original (0 %)', // 'Original (0%)'
    presetRich: 'Riche (+30 %)', // 'Rich (+30%)'
    presetVivid: 'Vif (+60 %)', // 'Vivid (+60%)'
    presetHyper: 'Hyper (+90 %)', // 'Hyper (+90%)'
    outputFormat: 'Format de sortie', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in French
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualité', // 'Quality'
    exporting: 'Exportation…', // 'Exporting...'
    downloadEditedImage: 'Télécharger l\'image modifiée', // 'Download Edited Image'
  },
  '/image-filters': {
    uploadTitle: 'Déposez une image pour appliquer des filtres', // 'Drop an image to apply filters'
    comparisonTitlePrefix: 'Comparaison de filtres', // 'Filter Comparison'
    comparisonAfterLabel: 'Filtrée', // 'Filtered'
    errorUnableToLoadImage: 'Impossible de charger l\'image.', // 'Unable to load image.'
    errorExportFailed: 'Échec de l\'exportation.', // 'Export failed.'
    filterPreview: 'Aperçu du filtre', // 'Filter Preview'
    holdToViewOriginal: 'Maintenir pour voir l\'original', // 'Hold to View Original'
    compare: 'Comparer', // 'Compare'
    removeImage: 'Supprimer l\'image', // aria-label 'Remove image'
    originalBadge: 'Original', // 'Original' badge — same in French
    filterPresets: 'Préréglages de filtres', // 'Filter Presets'
    reset: 'Réinitialiser', // 'Reset'
    presetOriginal: 'Original', // preset 'Original' — same in French
    presetGrayscale: 'Niveaux de gris', // preset 'Grayscale'
    presetSepia: 'Sépia', // preset 'Sepia'
    presetVintage: 'Vintage', // preset 'Vintage' — same in French
    presetWarm: 'Chaud', // preset 'Warm'
    presetCool: 'Froid', // preset 'Cool'
    presetHighContrast: 'Contraste élevé', // preset 'High Contrast'
    presetMatteFade: 'Fondu mat', // preset 'Matte Fade'
    presetDramatic: 'Dramatique', // preset 'Dramatic'
    presetNoir: 'Noir et blanc', // preset 'B&W Noir'
    presetGoldenHour: 'Heure dorée', // preset 'Golden Hour'
    presetInvert: 'Inverser', // preset 'Invert'
    filterIntensity: 'Intensité du filtre', // 'Filter Intensity'
    outputFormat: 'Format de sortie', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in French
    formatJpg: 'JPG', // 'JPG' — unchanged
    quality: 'Qualité', // 'Quality'
    rendering: 'Rendu…', // 'Rendering...'
    downloadFilteredImage: 'Télécharger l\'image filtrée', // 'Download Filtered Image'
    downloadEditedImage: 'Télécharger l\'image modifiée', // 'Download Edited Image'
    exporting: 'Exportation…', // 'Exporting...'
    fullscreenCompare: 'Comparer en plein écran', // 'Fullscreen Compare'
    originalComparisonAlt: 'Comparaison originale', // alt 'Original comparison'
    originalPreviewAlt: 'Aperçu original', // alt 'Original preview'
    quickPresets: 'Préréglages rapides', // 'Quick Presets'
    tabSplitCompare: 'Comparaison divisée', // tab 'split' renders 'Split Compare'
    tabAfter: 'Après', // tab 'after' (CSS-capitalized in code)
    tabBefore: 'Avant', // tab 'before' (CSS-capitalized in code)
    splitBeforeLabel: 'Avant', // split slider left label 'Before'
    splitAfterLabel: 'Après', // split slider right label 'After'
    controlsHeading: 'Réglages des filtres', // 'Filters Controls'
    levelLabel: 'Niveau des filtres', // 'Filters Level'
  },
  '/add-background-to-image': {
    uploadTitle: 'Déposez une image ou un PNG transparent pour ajouter un arrière-plan', // 'Drop an image or transparent PNG to add a backdrop'
    errorUnableToLoadImage: 'Impossible de charger l\'image.', // 'Unable to load image.'
    errorExportFailed: 'Échec de l\'exportation.', // 'Export failed.'
    backgroundPreview: 'Aperçu de l\'arrière-plan', // 'Background Preview'
    changeImage: 'Changer d\'image', // 'Change Image'
    outputDimensionsPrefix: 'Sortie :', // 'Output:' (before '{w}×{h}px')
    backgroundType: 'Type d\'arrière-plan', // 'Background Type'
    modeSolidColor: 'Couleur unie', // 'Solid Color'
    modeGradient: 'Dégradé', // 'Gradient'
    modeBlurredPhoto: 'Photo floue', // 'Blurred Photo'
    selectColor: 'Sélectionner la couleur {color}', // aria-label `Select color ${c}`
    color1: 'Couleur 1', // 'Color 1'
    color2: 'Couleur 2', // 'Color 2'
    angle: 'Angle', // 'Angle' — same in French
    backdropBlurRadius: 'Rayon de flou de l\'arrière-plan', // 'Backdrop Blur Radius'
    canvasAspectRatio: 'Format du canevas', // 'Canvas Aspect Ratio'
    aspectOriginal: 'Orig', // 'Orig' — same abbreviation in French
    imageScale: 'Échelle de l\'image', // 'Image Scale'
    roundness: 'Arrondi', // 'Roundness'
    dropShadowBehindImage: 'Ombre portée derrière l\'image', // 'Drop Shadow Behind Image'
    formatPng: 'PNG', // 'PNG' — unchanged
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WEBP', // 'WEBP' — unchanged
    exporting: 'Exportation…', // 'Exporting...'
    downloadImage: 'Télécharger l\'image', // 'Download Image'
  },
  '/image-splitter': {
    uploadTitle: 'Déposez une image à diviser en tuiles de grille ou en bandes', // 'Drop an image to split into grid tiles or strips'
    errorUnableToLoadImage: 'Impossible de charger l\'image.', // 'Unable to load image.'
    errorSplitFailed: 'Impossible de diviser l\'image.', // 'Failed to split image.'
    errorCanvasContext: 'Impossible d\'initialiser le contexte du canevas.', // 'Unable to initialize canvas context.'
    cutLinePreview: 'Aperçu des lignes de coupe ({rows} × {cols} = {tiles} tuiles)', // 'Cut-Line Preview ({rows} × {cols} = {tiles} tiles)'
    changeImage: 'Changer d\'image', // 'Change Image'
    splitGuideAlt: 'Guide de division', // alt 'Split guide'
    splitLayout: 'Mise en page de division', // 'Split Layout'
    modeGrid: 'Grille (N×M)', // 'Grid (N×M)'
    modeHorizontalStrips: 'Bandes horiz.', // 'Horiz. Strips'
    modeVerticalStrips: 'Bandes vert.', // 'Vert. Strips'
    rowsLabel: 'Lignes (coupes horizontales)', // 'Rows (Horizontal Cuts)'
    columnsLabel: 'Colonnes (coupes verticales)', // 'Columns (Vertical Cuts)'
    preset2x2: '2×2', // preset '2×2' — unchanged
    preset3x3Instagram: '3×3 Instagram', // preset '3×3 Instagram' — unchanged
    preset1x3Carousel: '1×3 Carrousel', // preset '1×3 Carousel'
    preset4x1Strips: '4×1 Bandes', // preset '4×1 Strips'
    formatOriginal: 'Orig', // 'Orig' — same abbreviation in French
    formatJpg: 'JPG', // 'JPG' — unchanged
    tileQuality: 'Qualité des tuiles', // 'Tile Quality'
    splittingImage: 'Division de l\'image…', // 'Splitting Image...'
    splitIntoTiles: 'Diviser en {count} tuiles', // 'Split into {count} Tiles'
    splitComplete: 'Division terminée', // 'Split Complete'
    tilesGenerated: '{count} tuiles d\'image générées à pleine résolution', // '{count} image tiles generated at full resolution'
    packagingZip: 'Emballage du ZIP…', // 'Packaging ZIP...'
    downloadAllTilesZip: 'Télécharger toutes les tuiles (ZIP)', // 'Download All Tiles (ZIP)'
    download: 'Télécharger', // 'Download'
  },
  '/image-dpi-changer': {
    uploadTitle: 'Déposez des images JPG ou PNG pour mettre à jour les métadonnées DPI', // 'Drop JPG or PNG images to update DPI metadata'
    errorUpdateDpiFailed: 'Impossible de mettre à jour le DPI.', // 'Failed to update DPI.'
    targetDpiPresets: 'Préréglages de DPI cible', // 'Target DPI Presets'
    preset72Screen: '72 DPI (Écran)', // '72 DPI (Screen)'
    preset96Windows: '96 DPI (Windows)', // '96 DPI (Windows)' — unchanged
    preset150DraftPrint: '150 DPI (Impression brouillon)', // '150 DPI (Draft Print)'
    preset300HighPrint: '300 DPI (Impression haute qualité)', // '300 DPI (High Print)'
    preset600Archival: '600 DPI (Archive)', // '600 DPI (Archival)'
    customDpi: 'DPI personnalisé', // 'Custom DPI'
    applyDpi: 'Appliquer {dpi} DPI', // 'Apply {dpi} DPI'
    clear: 'Effacer', // 'Clear'
    batchReady: 'Lot prêt', // 'Batch Ready'
    filesUpdatedToDpi: '{count} fichiers mis à jour à {dpi} DPI', // '{count} files updated to {dpi} DPI'
    creatingZip: 'Création du ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tout télécharger (ZIP)', // 'Download All (ZIP)'
    beforeDpi: 'Avant : {dpi} DPI', // 'Before: {dpi} DPI'
    beforeNotSet: 'Avant : non défini', // 'Before: Not set'
    verifiedDpi: 'Vérifié : {dpi} DPI', // 'Verified: {dpi} DPI'
    methodLosslessJpeg: 'Mise à jour sans perte de l\'en-tête JPEG', // 'Lossless JPEG Header Update'
    methodLosslessPng: 'Mise à jour sans perte du bloc pHYs PNG', // 'Lossless PNG pHYs Update'
    methodConvertedPng: 'Converti en PNG avec DPI pHYs', // 'Converted to PNG with pHYs DPI'
    download: 'Télécharger', // 'Download'
    removeImage: 'Supprimer {name}', // aria-label `Remove ${item.file.name}`
  },
  '/image-to-base64': {
    uploadTitle: 'Déposez une image à encoder en Base64', // 'Drop an image to encode as Base64'
    errorCouldNotEncode: 'Impossible d\'encoder le fichier.', // 'Could not encode file.'
    errorFailedToRead: 'Impossible de lire le fichier image.', // 'Failed to read image file.'
    errorClipboardWriteFailed: 'Échec de la copie dans le presse-papiers — sélectionnez et copiez depuis la zone de texte.', // 'Clipboard write failed — please select and copy from the text box.'
    fileLabel: 'Fichier :', // 'File:' (summary card)
    outputLabel: 'Sortie :', // 'Output:' (summary card)
    charsLabel: 'caractères', // 'chars' (summary card)
    encodeAnother: 'Encoder une autre', // 'Encode Another'
    tabDataUrl: 'URL de données', // tab 'Data URL'
    tabRawBase64: 'Base64 brut', // tab 'Raw Base64'
    tabHtmlImg: 'HTML <img>', // tab 'HTML <img>' — unchanged
    tabCssUrl: 'CSS url()', // tab 'CSS url()' — unchanged
    copied: 'Copié !', // 'Copied!'
    copyOutput: 'Copier la sortie', // 'Copy Output'
    saveTxt: 'Enregistrer .TXT', // 'Save .TXT'
  },
  '/base64-to-image': {
    pasteLabel: 'Coller une chaîne Base64 ou une URL de données', // 'Paste Base64 String or Data URL'
    clear: 'Effacer', // 'Clear'
    inputPlaceholder: 'Collez data:image/png;base64,iVBORw0KGgo... ou des octets Base64 bruts ici', // placeholder 'Paste data:image/png;base64,iVBORw0KGgo... or raw Base64 bytes here'
    supportsNote: 'Prend en charge les données Base64 PNG, JPG, WebP, GIF, SVG, BMP et ICO', // 'Supports PNG, JPG, WebP, GIF, SVG, BMP, and ICO Base64 payloads'
    decoding: 'Décodage…', // 'Decoding...'
    decodeImage: 'Décoder l\'image', // 'Decode Image'
    decodingBytes: 'Décodage des octets Base64…', // 'Decoding Base64 bytes...'
    errorUnsupportedDataUri: 'Encodage d\'URI de données non pris en charge. Charge Base64 attendue (`;base64,`).', // 'Unsupported data URI encoding. Expected base64 payload (`;base64,`).'
    errorInvalidBase64: 'L\'entrée contient des caractères Base64 non valides.', // 'Input contains invalid Base64 characters.'
    errorNotValidImage: 'Les octets décodés ne forment pas une image valide lisible par le navigateur.', // 'Decoded bytes do not form a valid browser-readable image.'
    errorUnableToDecode: 'Impossible de décoder la chaîne Base64.', // 'Unable to decode Base64 string.'
    decodedPreviewAlt: 'Aperçu Base64 décodé', // alt 'Decoded Base64 preview'
    validImageDecoded: 'Image valide décodée', // 'Valid Image Decoded'
    detectedFormat: 'Format détecté', // 'Detected Format'
    binarySize: 'Taille binaire', // 'Binary Size'
    dimensions: 'Dimensions', // 'Dimensions' — same in French
    downloadFormat: 'Format de téléchargement', // 'Download Format'
    formatOriginal: 'Original', // 'Original' — same in French
    formatJpg: 'JPG', // 'JPG' — unchanged
    downloadImageFile: 'Télécharger le fichier image', // 'Download Image File'
  },
  '/image-color-palette-extractor': {
    uploadTitle: 'Déposez une image pour extraire sa palette de couleurs dominantes', // 'Drop an image to extract its dominant color palette'
    errorUnableToLoadImage: 'Impossible de charger l’image.', // 'Unable to load image.'
    errorClipboardDenied: 'Autorisation du presse-papiers refusée.', // 'Clipboard permission denied.'
    extractedPalette: 'Palette extraite ({count} couleurs)', // 'Extracted Palette ({count} Colors)'
    sourceAlt: 'Source', // alt 'Source'
    changeImage: 'Changer', // 'Change'
    numberOfColors: 'Nombre de couleurs', // 'Number of Colors'
    colorsCount: '{count} couleurs', // '{count} colors'
    copyCssVariables: 'Copier les variables CSS', // 'Copy CSS Variables'
    copiedCss: 'CSS copié !', // 'Copied CSS!'
    copyJson: 'Copier le JSON', // 'Copy JSON'
    copiedJson: 'JSON copié !', // 'Copied JSON!'
    downloadPalettePng: 'Télécharger la palette PNG', // 'Download Palette PNG'
  },
  '/gif-maker': {
    uploadTitle: 'Déposez au moins 2 images pour créer un GIF animé', // 'Drop 2 or more images to create an animated GIF'
    errorEncodeFailed: 'Échec de l’encodage du GIF animé.', // 'Failed to encode animated GIF.'
    skippedFile: '« {name} » ignoré : {error}', // 'Skipped "{name}": {error}'
    skippedFileNoError: '« {name} » ignoré.', // 'Skipped "{name}".'
    generatedGif: 'GIF généré ({width}×{height} px · {size})', // 'Generated GIF ({width}×{height}px · {size})'
    liveTimingPreview: 'Aperçu en direct · Image {current}/{total}', // 'Live Timing Preview · Frame {current}/{total}'
    generatedGifAlt: 'GIF animé généré', // alt 'Generated animated GIF'
    pause: 'Pause', // 'Pause'
    play: 'Lecture', // 'Play'
    backToFrameEditor: 'Retour à l’éditeur d’images', // 'Back to Frame Editor'
    clearAllFrames: 'Effacer toutes les images', // aria-label 'Clear all frames'
    largeGifWarning: 'Avertissement de GIF volumineux ({size})', // 'Large GIF Warning ({size})'
    largeGifWarningBody:
      'Les GIF de plus de 5 à 15 Mo peuvent se téléverser lentement dans les applications de messagerie ou ne pas respecter les limites strictes des plateformes. Essayez de réduire la largeur/hauteur de sortie (p. ex. 480 px), de baisser la qualité ou de retirer des images.', // 'GIFs above 5–15 MB may upload slowly on messaging apps or fail strict platform limits. Try reducing output width/height (e.g. 480px), lowering Quality, or removing frames.'
    downloadAnimatedGif: 'Télécharger le GIF animé ({size})', // 'Download Animated GIF ({size})'
    animationSettings: 'Réglages de l’animation', // 'Animation Settings'
    defaultFrameDuration: 'Durée par défaut des images', // 'Default Frame Duration'
    frameDurationValue: '{ms} ms ({fps} IPS)', // '{ms} ms ({fps} FPS)'
    fpsPreset1: '1 IPS (1000 ms)', // '1 FPS (1000ms)'
    fpsPreset2: '2 IPS (500 ms)', // '2 FPS (500ms)'
    fpsPreset5: '5 IPS (200 ms)', // '5 FPS (200ms)'
    fpsPreset10: '10 IPS (100 ms)', // '10 FPS (100ms)'
    loopBehavior: 'Comportement de boucle', // 'Loop Behavior'
    loopForever: 'Toujours', // 'Forever'
    loopSetLoops: 'Définir les boucles', // 'Set Loops'
    loopPlayOnce: 'Lire une fois', // 'Play Once'
    totalPlays: 'Lectures totales', // 'Total Plays'
    outputDimensions: 'Dimensions de sortie (px)', // 'Output Dimensions (px)'
    ratioLocked: 'Ratio verrouillé', // 'Ratio Locked'
    ratioUnlocked: 'Déverrouillé', // 'Unlocked'
    widthLabel: 'Largeur', // 'Width'
    heightLabel: 'Hauteur', // 'Height'
    sizePreset480: '480 px', // '480px'
    sizePreset640: '640 px', // '640px'
    sizePreset800: '800 px', // '800px'
    sizePresetOriginal: 'Original', // 'Original' — same in French
    frameFit: 'Ajustement des images', // 'Frame Fit'
    fitContain: 'Contenir', // 'contain'
    fitCover: 'Couvrir', // 'cover'
    backgroundMatte: 'Fond mate', // 'Background Matte'
    colorPaletteQuality: 'Qualité de la palette de couleurs', // 'Color Palette Quality'
    encodingGif: 'Encodage du GIF ({progress} %)…', // 'Encoding GIF ({progress}%)...'
    generateAnimatedGif: 'Générer le GIF animé', // 'Generate Animated GIF'
    reEncodeAnimatedGif: 'Réencoder le GIF animé', // 'Re-Encode Animated GIF'
    framesHeading: 'Images ({count}) — Faites glisser ou utilisez les flèches pour réorganiser', // 'Frames ({count}) — Drag or use arrows to reorder'
    perFrameDelayHint:
      'Laissez la durée par image vide pour hériter de la durée globale de {ms} ms.', // 'Leave per-frame delay blank to inherit the {ms}ms global frame duration.'
    addFrames: 'Ajouter des images', // 'Add Frames'
    delayMsLabel: 'Durée (ms) :', // 'Delay (ms):'
    moveEarlier: 'Déplacer plus tôt', // title 'Move earlier'
    moveLater: 'Déplacer plus tard', // title 'Move later'
    duplicateFrame: 'Dupliquer l’image', // title 'Duplicate frame'
    removeFrame: 'Retirer l’image', // title 'Remove frame'
    moveFrameEarlierAria: 'Déplacer l’image {n} plus tôt', // aria-label `Move frame ${n} earlier`
    moveFrameLaterAria: 'Déplacer l’image {n} plus tard', // aria-label `Move frame ${n} later`
    duplicateFrameAria: 'Dupliquer l’image {n}', // aria-label `Duplicate frame ${n}`
    removeFrameAria: 'Retirer l’image {n}', // aria-label `Remove frame ${n}`
  },
  '/image-collage-maker': {
    uploadTitle: 'Déposez 2 à 9 images pour créer un collage de photos', // 'Drop 2 to 9 images to create a photo collage'
    errorExportFailed: 'Échec de l’export du collage.', // 'Failed to export collage.'
    couldNotLoadFile: 'Impossible de charger « {name} » : {error}', // 'Could not load "{name}": {error}'
    couldNotLoadFileNoError: 'Impossible de charger « {name} ».', // 'Could not load "{name}".'
    collagePreview: 'Aperçu du collage ({width}×{height} px)', // 'Collage Preview ({width}×{height}px)'
    clearAll: 'Tout effacer', // 'Clear All'
    rearrangeCells: 'Réorganiser les cellules (faites glisser ou touchez deux cellules pour échanger)', // 'Rearrange Cells (Drag or Tap Two Cells to Swap)'
    rearrangeCellsHint:
      'Faites glisser n’importe quelle carte de cellule sur un autre emplacement pour réorganiser les photos instantanément.', // 'Drag any cell card onto another slot to reorder photos instantly.'
    addPhotos: 'Ajouter des photos', // 'Add Photos'
    cellLabel: 'Cellule {n}', // 'Cell {n}'
    slotLabel: 'Emplacement {n}', // canvas-drawn 'Slot {n}'
    moveCellBackAria: 'Déplacer la cellule {n} en arrière', // aria-label `Move cell ${n} back`
    moveCellForwardAria: 'Déplacer la cellule {n} en avant', // aria-label `Move cell ${n} forward`
    clearCellAria: 'Effacer la cellule {n}', // aria-label `Clear cell ${n}`
    addPhoto: 'Ajouter une photo', // 'Add Photo'
    collageLayout: 'Mise en page du collage', // 'Collage Layout'
    layout2x2: 'Grille 2×2', // '2×2 Grid'
    layout3x3: 'Grille 3×3', // '3×3 Grid'
    layoutVertical: 'Bande verticale', // 'Vertical Strip'
    layoutHorizontal: 'Bande horizontale', // 'Horizontal Strip'
    cellProportionsSpacing: 'Proportions et espacement des cellules', // 'Cell Proportions & Spacing'
    equalCells: 'Cellules égales', // 'Equal Cells'
    colSplit: 'Division des colonnes', // 'Col Split'
    centerCol: 'Colonne centrale', // 'Center Col'
    rowSplit: 'Division des lignes', // 'Row Split'
    centerRow: 'Ligne centrale', // 'Center Row'
    leadCellEmphasis: 'Importance de la cellule principale', // 'Lead Cell Emphasis'
    gapSpacing: 'Espacement', // 'Gap Spacing'
    cellRadius: 'Rayon des cellules', // 'Cell Radius'
    backgroundColor: 'Couleur de fond', // 'Background Color'
    backgroundSwatchAria: 'Fond {color}', // aria-label `Background ${c}`
    imageFit: 'Ajustement d’image', // 'Image Fit'
    fitCover: 'Couvrir', // 'cover'
    fitContain: 'Contenir', // 'contain'
    outputSize: 'Taille de sortie (px)', // 'Output Size (px)'
    widthLabel: 'Largeur', // 'Width'
    heightLabel: 'Hauteur', // 'Height'
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatPngLossless: 'PNG (sans perte)', // 'PNG (Lossless)'
    jpgQuality: 'Qualité JPG', // 'JPG Quality'
    exportingCollage: 'Export du collage…', // 'Exporting Collage...'
    downloadCollage: 'Télécharger le collage ({format})', // 'Download Collage ({format})'
  },
  '/compress-image-to-50kb': {
    uploadTitle: 'Déposez des images à compresser sous {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Échec de la compression vers la taille cible.', // 'Target compression failed.'
    errorCorruptedFile: 'Fichier image corrompu ou illisible.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Taille maximale de fichier cible', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} max)', // '({bytes} max)'
    targetNumberAria: 'Nombre de taille de fichier cible', // 'Target file size number'
    maxSuffix: '({size})', // '({size})'
    preset20kb: '20 Ko', // '20 KB'
    preset50kb: '50 Ko', // '50 KB'
    preset100kb: '100 Ko', // '100 KB'
    preset200kb: '200 Ko', // '200 KB'
    preset500kb: '500 Ko', // '500 KB'
    preset1mb: '1 Mo', // '1 MB'
    needDifferentTarget: 'Besoin d’un objectif différent en Ko ?', // 'Need a different target KB?'
    outputFormat: 'Format de sortie', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in French
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // component fallback 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Autoriser la mise à l’échelle intelligente des dimensions si la réduction de qualité seule ne tient pas sous {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Convertir automatiquement les PNG volumineux en WebP/JPG quand le PNG sans perte ne peut pas atteindre {target} proprement', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Couleur mate pour PNG transparent :', // 'Transparent PNG matte color:'
    compressToTarget: 'Compresser à {target}', // 'Compress to {target}'
    optimizing: 'Optimisation…', // 'Optimizing...'
    clear: 'Effacer', // 'Clear'
    losslessPngTitle: 'PNG sans perte sélectionné :', // 'Lossless PNG selected:' (component primary key)
    losslessPngSelected: 'PNG sans perte sélectionné :', // 'Lossless PNG selected:' (fallback key)
    losslessPngWarning:
      'Le PNG ignore les curseurs de qualité, donc réduire la taille repose strictement sur la réduction des dimensions en pixels. Pour les grandes photos, choisissez JPG ou WebP pour atteindre des limites strictes en Ko tout en restant net.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Résumé de la compression cible · Objectif ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} sur {total} {images} ont atteint l’objectif de {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'image', // 'image'
    imagePlural: 'images', // 'images'
    summaryMissed: ' · {missed} n’ont pas pu tenir honnêtement (détails ci-dessous)', // '{missed} could not honestly fit (details below)' — FR keeps the leading ' · ' (component strips it, Spanish pattern)
    totalSaved: 'Total économisé : {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total économisé : {bytes} (a augmenté de {grew})', // composed EN 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(a augmenté de {grew})', // '(grew by {grew})'
    downloadAllZip: 'Télécharger tout (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Création du ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Sortie', // 'Output' (metric label)
    metricSpaceSaved: 'Espace économisé', // 'Space Saved' (metric label)
    metricReduction: 'Réduction', // 'Reduction' (metric label)
    metricSizeChange: 'Changement de taille', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (column fallback key)
    columnOutput: 'Sortie', // 'Output' (column fallback key)
    columnSpaceSaved: 'Espace économisé', // 'Space Saved' (column fallback key)
    columnReduction: 'Réduction', // 'Reduction' (column fallback key)
    columnSizeChange: 'Changement de taille', // 'Size Change' (column fallback key)
    underTarget: 'Moins de {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Objectif manqué — {bytes}', // 'Target missed — {bytes}'
    compare: 'Comparer', // 'Compare'
    download: 'Télécharger', // 'Download'
    removeImage: 'Retirer {name}', // aria-label `Remove ${item.name}`
    grewBy: 'A augmenté de {bytes} — le réencodage est plus grand que l’original.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngHint: 'WebP ou JPG est généralement plus petit pour les PNG d’aspect photo.', // 'WebP or JPG is usually smaller for photo-like PNGs.' (component primary key)
    grewPngNote: 'WebP ou JPG est généralement plus petit pour les PNG d’aspect photo.', // 'WebP or JPG is usually smaller for photo-like PNGs.' (fallback key)
    keepOriginal: 'Conserver l’original', // 'Keep original'
    keptOriginalNote: 'Le fichier original a été conservé parce que le réencodage l’a rendu plus grand.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Le PNG sans perte a été converti automatiquement en {format} pour conserver une résolution plus élevée sous {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'Le PNG sans perte a été converti automatiquement en {format} pour conserver une résolution plus élevée sous {target}.', // Batch 5 primary-key alias of autoConvertedPng
    formatWebpTransparency: 'WebP (transparence conservée)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Le fichier original était déjà sous {target}, et le réencodage l’a augmenté de {bytes}. Utilisez « Conserver l’original » ou passez à WebP/JPG pour une sortie plus petite.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnder:
      'Le fichier original était déjà sous {target} ; il a été exporté proprement avec une qualité de {quality} %.', // Batch 5 primary-key alias of statusAlreadyUnderClean
    statusAlreadyUnderClean:
      'Le fichier original était déjà sous {target} ; il a été exporté proprement avec une qualité de {quality} %.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Objectif atteint en pleine résolution de {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Objectif atteint en mettant à l’échelle à {width}×{height} px ({percent} %) avec {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG sans perte', // 'lossless PNG'
    qualityPercent: 'qualité de {quality} %', // '{quality}% quality'
    statusCannotPng:
      'Impossible d’atteindre {target} avec un PNG sans perte (minimum atteignable : {bytes} à {width}×{height} px). Changez le format de sortie en JPG ou WebP pour atteindre des tailles plus petites.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Impossible d’atteindre {target} avec les dimensions complètes de {width}×{height} px (la taille minimale de qualité est de {bytes}). Activez « Autoriser la mise à l’échelle des dimensions » pour réduire davantage les dimensions.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotCleanly:
      'L’objectif demandé de {target} n’a pas pu être atteint proprement. La plus petite sortie encodée honnête est de {bytes} ({width}×{height} px, qualité de {quality} %). Essayez une taille cible plus grande.', // Batch 5 primary-key alias of statusCannotClean
    statusCannotClean:
      'L’objectif demandé de {target} n’a pas pu être atteint proprement. La plus petite sortie encodée honnête est de {bytes} ({width}×{height} px, qualité de {quality} %). Essayez une taille cible plus grande.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compression cible ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Compressée ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-100kb': {
    uploadTitle: 'Déposez des images à compresser sous {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Échec de la compression vers la taille cible.', // 'Target compression failed.'
    errorCorruptedFile: 'Fichier image corrompu ou illisible.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Taille maximale de fichier cible', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} max)', // '({bytes} max)'
    targetNumberAria: 'Nombre de taille de fichier cible', // 'Target file size number'
    maxSuffix: '({size})', // '({size})'
    preset20kb: '20 Ko', // '20 KB'
    preset50kb: '50 Ko', // '50 KB'
    preset100kb: '100 Ko', // '100 KB'
    preset200kb: '200 Ko', // '200 KB'
    preset500kb: '500 Ko', // '500 KB'
    preset1mb: '1 Mo', // '1 MB'
    needDifferentTarget: 'Besoin d’un objectif différent en Ko ?', // 'Need a different target KB?'
    outputFormat: 'Format de sortie', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in French
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // component fallback 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Autoriser la mise à l’échelle intelligente des dimensions si la réduction de qualité seule ne tient pas sous {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Convertir automatiquement les PNG volumineux en WebP/JPG quand le PNG sans perte ne peut pas atteindre {target} proprement', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Couleur mate pour PNG transparent :', // 'Transparent PNG matte color:'
    compressToTarget: 'Compresser à {target}', // 'Compress to {target}'
    optimizing: 'Optimisation…', // 'Optimizing...'
    clear: 'Effacer', // 'Clear'
    losslessPngTitle: 'PNG sans perte sélectionné :', // 'Lossless PNG selected:' (component primary key)
    losslessPngSelected: 'PNG sans perte sélectionné :', // 'Lossless PNG selected:' (fallback key)
    losslessPngWarning:
      'Le PNG ignore les curseurs de qualité, donc réduire la taille repose strictement sur la réduction des dimensions en pixels. Pour les grandes photos, choisissez JPG ou WebP pour atteindre des limites strictes en Ko tout en restant net.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Résumé de la compression cible · Objectif ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} sur {total} {images} ont atteint l’objectif de {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'image', // 'image'
    imagePlural: 'images', // 'images'
    summaryMissed: ' · {missed} n’ont pas pu tenir honnêtement (détails ci-dessous)', // '{missed} could not honestly fit (details below)' — FR keeps the leading ' · ' (component strips it, Spanish pattern)
    totalSaved: 'Total économisé : {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total économisé : {bytes} (a augmenté de {grew})', // composed EN 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(a augmenté de {grew})', // '(grew by {grew})'
    downloadAllZip: 'Télécharger tout (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Création du ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Sortie', // 'Output' (metric label)
    metricSpaceSaved: 'Espace économisé', // 'Space Saved' (metric label)
    metricReduction: 'Réduction', // 'Reduction' (metric label)
    metricSizeChange: 'Changement de taille', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (column fallback key)
    columnOutput: 'Sortie', // 'Output' (column fallback key)
    columnSpaceSaved: 'Espace économisé', // 'Space Saved' (column fallback key)
    columnReduction: 'Réduction', // 'Reduction' (column fallback key)
    columnSizeChange: 'Changement de taille', // 'Size Change' (column fallback key)
    underTarget: 'Moins de {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Objectif manqué — {bytes}', // 'Target missed — {bytes}'
    compare: 'Comparer', // 'Compare'
    download: 'Télécharger', // 'Download'
    removeImage: 'Retirer {name}', // aria-label `Remove ${item.name}`
    grewBy: 'A augmenté de {bytes} — le réencodage est plus grand que l’original.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngHint: 'WebP ou JPG est généralement plus petit pour les PNG d’aspect photo.', // 'WebP or JPG is usually smaller for photo-like PNGs.' (component primary key)
    grewPngNote: 'WebP ou JPG est généralement plus petit pour les PNG d’aspect photo.', // 'WebP or JPG is usually smaller for photo-like PNGs.' (fallback key)
    keepOriginal: 'Conserver l’original', // 'Keep original'
    keptOriginalNote: 'Le fichier original a été conservé parce que le réencodage l’a rendu plus grand.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Le PNG sans perte a été converti automatiquement en {format} pour conserver une résolution plus élevée sous {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'Le PNG sans perte a été converti automatiquement en {format} pour conserver une résolution plus élevée sous {target}.', // Batch 5 primary-key alias of autoConvertedPng
    formatWebpTransparency: 'WebP (transparence conservée)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Le fichier original était déjà sous {target}, et le réencodage l’a augmenté de {bytes}. Utilisez « Conserver l’original » ou passez à WebP/JPG pour une sortie plus petite.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnder:
      'Le fichier original était déjà sous {target} ; il a été exporté proprement avec une qualité de {quality} %.', // Batch 5 primary-key alias of statusAlreadyUnderClean
    statusAlreadyUnderClean:
      'Le fichier original était déjà sous {target} ; il a été exporté proprement avec une qualité de {quality} %.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Objectif atteint en pleine résolution de {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Objectif atteint en mettant à l’échelle à {width}×{height} px ({percent} %) avec {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG sans perte', // 'lossless PNG'
    qualityPercent: 'qualité de {quality} %', // '{quality}% quality'
    statusCannotPng:
      'Impossible d’atteindre {target} avec un PNG sans perte (minimum atteignable : {bytes} à {width}×{height} px). Changez le format de sortie en JPG ou WebP pour atteindre des tailles plus petites.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Impossible d’atteindre {target} avec les dimensions complètes de {width}×{height} px (la taille minimale de qualité est de {bytes}). Activez « Autoriser la mise à l’échelle des dimensions » pour réduire davantage les dimensions.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotCleanly:
      'L’objectif demandé de {target} n’a pas pu être atteint proprement. La plus petite sortie encodée honnête est de {bytes} ({width}×{height} px, qualité de {quality} %). Essayez une taille cible plus grande.', // Batch 5 primary-key alias of statusCannotClean
    statusCannotClean:
      'L’objectif demandé de {target} n’a pas pu être atteint proprement. La plus petite sortie encodée honnête est de {bytes} ({width}×{height} px, qualité de {quality} %). Essayez une taille cible plus grande.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compression cible ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Compressée ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-200kb': {
    uploadTitle: 'Déposez des images à compresser sous {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Échec de la compression vers la taille cible.', // 'Target compression failed.'
    errorCorruptedFile: 'Fichier image corrompu ou illisible.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Taille maximale de fichier cible', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} max)', // '({bytes} max)'
    targetNumberAria: 'Nombre de taille de fichier cible', // 'Target file size number'
    maxSuffix: '({size})', // '({size})'
    preset20kb: '20 Ko', // '20 KB'
    preset50kb: '50 Ko', // '50 KB'
    preset100kb: '100 Ko', // '100 KB'
    preset200kb: '200 Ko', // '200 KB'
    preset500kb: '500 Ko', // '500 KB'
    preset1mb: '1 Mo', // '1 MB'
    needDifferentTarget: 'Besoin d’un objectif différent en Ko ?', // 'Need a different target KB?'
    outputFormat: 'Format de sortie', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in French
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // component fallback 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Autoriser la mise à l’échelle intelligente des dimensions si la réduction de qualité seule ne tient pas sous {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Convertir automatiquement les PNG volumineux en WebP/JPG quand le PNG sans perte ne peut pas atteindre {target} proprement', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Couleur mate pour PNG transparent :', // 'Transparent PNG matte color:'
    compressToTarget: 'Compresser à {target}', // 'Compress to {target}'
    optimizing: 'Optimisation…', // 'Optimizing...'
    clear: 'Effacer', // 'Clear'
    losslessPngTitle: 'PNG sans perte sélectionné :', // 'Lossless PNG selected:' (component primary key)
    losslessPngSelected: 'PNG sans perte sélectionné :', // 'Lossless PNG selected:' (fallback key)
    losslessPngWarning:
      'Le PNG ignore les curseurs de qualité, donc réduire la taille repose strictement sur la réduction des dimensions en pixels. Pour les grandes photos, choisissez JPG ou WebP pour atteindre des limites strictes en Ko tout en restant net.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Résumé de la compression cible · Objectif ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} sur {total} {images} ont atteint l’objectif de {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'image', // 'image'
    imagePlural: 'images', // 'images'
    summaryMissed: ' · {missed} n’ont pas pu tenir honnêtement (détails ci-dessous)', // '{missed} could not honestly fit (details below)' — FR keeps the leading ' · ' (component strips it, Spanish pattern)
    totalSaved: 'Total économisé : {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total économisé : {bytes} (a augmenté de {grew})', // composed EN 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(a augmenté de {grew})', // '(grew by {grew})'
    downloadAllZip: 'Télécharger tout (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Création du ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Sortie', // 'Output' (metric label)
    metricSpaceSaved: 'Espace économisé', // 'Space Saved' (metric label)
    metricReduction: 'Réduction', // 'Reduction' (metric label)
    metricSizeChange: 'Changement de taille', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (column fallback key)
    columnOutput: 'Sortie', // 'Output' (column fallback key)
    columnSpaceSaved: 'Espace économisé', // 'Space Saved' (column fallback key)
    columnReduction: 'Réduction', // 'Reduction' (column fallback key)
    columnSizeChange: 'Changement de taille', // 'Size Change' (column fallback key)
    underTarget: 'Moins de {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Objectif manqué — {bytes}', // 'Target missed — {bytes}'
    compare: 'Comparer', // 'Compare'
    download: 'Télécharger', // 'Download'
    removeImage: 'Retirer {name}', // aria-label `Remove ${item.name}`
    grewBy: 'A augmenté de {bytes} — le réencodage est plus grand que l’original.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngHint: 'WebP ou JPG est généralement plus petit pour les PNG d’aspect photo.', // 'WebP or JPG is usually smaller for photo-like PNGs.' (component primary key)
    grewPngNote: 'WebP ou JPG est généralement plus petit pour les PNG d’aspect photo.', // 'WebP or JPG is usually smaller for photo-like PNGs.' (fallback key)
    keepOriginal: 'Conserver l’original', // 'Keep original'
    keptOriginalNote: 'Le fichier original a été conservé parce que le réencodage l’a rendu plus grand.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Le PNG sans perte a été converti automatiquement en {format} pour conserver une résolution plus élevée sous {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'Le PNG sans perte a été converti automatiquement en {format} pour conserver une résolution plus élevée sous {target}.', // Batch 5 primary-key alias of autoConvertedPng
    formatWebpTransparency: 'WebP (transparence conservée)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Le fichier original était déjà sous {target}, et le réencodage l’a augmenté de {bytes}. Utilisez « Conserver l’original » ou passez à WebP/JPG pour une sortie plus petite.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnder:
      'Le fichier original était déjà sous {target} ; il a été exporté proprement avec une qualité de {quality} %.', // Batch 5 primary-key alias of statusAlreadyUnderClean
    statusAlreadyUnderClean:
      'Le fichier original était déjà sous {target} ; il a été exporté proprement avec une qualité de {quality} %.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Objectif atteint en pleine résolution de {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Objectif atteint en mettant à l’échelle à {width}×{height} px ({percent} %) avec {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG sans perte', // 'lossless PNG'
    qualityPercent: 'qualité de {quality} %', // '{quality}% quality'
    statusCannotPng:
      'Impossible d’atteindre {target} avec un PNG sans perte (minimum atteignable : {bytes} à {width}×{height} px). Changez le format de sortie en JPG ou WebP pour atteindre des tailles plus petites.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Impossible d’atteindre {target} avec les dimensions complètes de {width}×{height} px (la taille minimale de qualité est de {bytes}). Activez « Autoriser la mise à l’échelle des dimensions » pour réduire davantage les dimensions.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotCleanly:
      'L’objectif demandé de {target} n’a pas pu être atteint proprement. La plus petite sortie encodée honnête est de {bytes} ({width}×{height} px, qualité de {quality} %). Essayez une taille cible plus grande.', // Batch 5 primary-key alias of statusCannotClean
    statusCannotClean:
      'L’objectif demandé de {target} n’a pas pu être atteint proprement. La plus petite sortie encodée honnête est de {bytes} ({width}×{height} px, qualité de {quality} %). Essayez une taille cible plus grande.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compression cible ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Compressée ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/compress-image-to-500kb': {
    uploadTitle: 'Déposez des images à compresser sous {target}', // 'Drop images to compress under {target}'
    errorTargetFailed: 'Échec de la compression vers la taille cible.', // 'Target compression failed.'
    errorCorruptedFile: 'Fichier image corrompu ou illisible.', // 'Corrupted or unreadable image file.'
    targetMaxFileSize: 'Taille maximale de fichier cible', // 'Target Maximum File Size'
    targetMaxSuffix: '({bytes} max)', // '({bytes} max)'
    targetNumberAria: 'Nombre de taille de fichier cible', // 'Target file size number'
    maxSuffix: '({size})', // '({size})'
    preset20kb: '20 Ko', // '20 KB'
    preset50kb: '50 Ko', // '50 KB'
    preset100kb: '100 Ko', // '100 KB'
    preset200kb: '200 Ko', // '200 KB'
    preset500kb: '500 Ko', // '500 KB'
    preset1mb: '1 Mo', // '1 MB'
    needDifferentTarget: 'Besoin d’un objectif différent en Ko ?', // 'Need a different target KB?'
    outputFormat: 'Format de sortie', // 'Output Format'
    formatOriginal: 'Original', // 'Original' — same in French
    formatJpg: 'JPG', // 'JPG' — unchanged
    formatWebp: 'WebP', // component fallback 'WEBP'
    formatPng: 'PNG', // 'PNG' — unchanged
    allowDownscale:
      'Autoriser la mise à l’échelle intelligente des dimensions si la réduction de qualité seule ne tient pas sous {target}', // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoConvertPng:
      'Convertir automatiquement les PNG volumineux en WebP/JPG quand le PNG sans perte ne peut pas atteindre {target} proprement', // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatte: 'Couleur mate pour PNG transparent :', // 'Transparent PNG matte color:'
    compressToTarget: 'Compresser à {target}', // 'Compress to {target}'
    optimizing: 'Optimisation…', // 'Optimizing...'
    clear: 'Effacer', // 'Clear'
    losslessPngTitle: 'PNG sans perte sélectionné :', // 'Lossless PNG selected:' (component primary key)
    losslessPngSelected: 'PNG sans perte sélectionné :', // 'Lossless PNG selected:' (fallback key)
    losslessPngWarning:
      'Le PNG ignore les curseurs de qualité, donc réduire la taille repose strictement sur la réduction des dimensions en pixels. Pour les grandes photos, choisissez JPG ou WebP pour atteindre des limites strictes en Ko tout en restant net.', // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    targetSummary: 'Résumé de la compression cible · Objectif ≤ {target}', // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: '{achieved} sur {total} {images} ont atteint l’objectif de {target}', // '{achieved} of {total} {images} met the {target} target'
    imageSingular: 'image', // 'image'
    imagePlural: 'images', // 'images'
    summaryMissed: ' · {missed} n’ont pas pu tenir honnêtement (détails ci-dessous)', // '{missed} could not honestly fit (details below)' — FR keeps the leading ' · ' (component strips it, Spanish pattern)
    totalSaved: 'Total économisé : {bytes}', // 'Total Saved: {bytes}'
    totalSavedGrew: 'Total économisé : {bytes} (a augmenté de {grew})', // composed EN 'Total Saved: {bytes} (grew by {grew})'
    totalGrew: '(a augmenté de {grew})', // '(grew by {grew})'
    downloadAllZip: 'Télécharger tout (ZIP)', // 'Download All (ZIP)'
    creatingZip: 'Création du ZIP…', // 'Creating ZIP...'
    metricOriginal: 'Original', // 'Original' (metric label)
    metricOutput: 'Sortie', // 'Output' (metric label)
    metricSpaceSaved: 'Espace économisé', // 'Space Saved' (metric label)
    metricReduction: 'Réduction', // 'Reduction' (metric label)
    metricSizeChange: 'Changement de taille', // 'Size Change' (metric label)
    columnOriginal: 'Original', // 'Original' (column fallback key)
    columnOutput: 'Sortie', // 'Output' (column fallback key)
    columnSpaceSaved: 'Espace économisé', // 'Space Saved' (column fallback key)
    columnReduction: 'Réduction', // 'Reduction' (column fallback key)
    columnSizeChange: 'Changement de taille', // 'Size Change' (column fallback key)
    underTarget: 'Moins de {target} ({bytes})', // 'Under {target} ({bytes})'
    targetMissed: 'Objectif manqué — {bytes}', // 'Target missed — {bytes}'
    compare: 'Comparer', // 'Compare'
    download: 'Télécharger', // 'Download'
    removeImage: 'Retirer {name}', // aria-label `Remove ${item.name}`
    grewBy: 'A augmenté de {bytes} — le réencodage est plus grand que l’original.', // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngHint: 'WebP ou JPG est généralement plus petit pour les PNG d’aspect photo.', // 'WebP or JPG is usually smaller for photo-like PNGs.' (component primary key)
    grewPngNote: 'WebP ou JPG est généralement plus petit pour les PNG d’aspect photo.', // 'WebP or JPG is usually smaller for photo-like PNGs.' (fallback key)
    keepOriginal: 'Conserver l’original', // 'Keep original'
    keptOriginalNote: 'Le fichier original a été conservé parce que le réencodage l’a rendu plus grand.', // 'Kept original file because re-encoding made it larger.'
    autoConvertedPng:
      'Le PNG sans perte a été converti automatiquement en {format} pour conserver une résolution plus élevée sous {target}.', // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    switchedFormatNote:
      'Le PNG sans perte a été converti automatiquement en {format} pour conserver une résolution plus élevée sous {target}.', // Batch 5 primary-key alias of autoConvertedPng
    formatWebpTransparency: 'WebP (transparence conservée)', // 'WebP (transparency preserved)'
    statusAlreadyUnderGrew:
      'Le fichier original était déjà sous {target}, et le réencodage l’a augmenté de {bytes}. Utilisez « Conserver l’original » ou passez à WebP/JPG pour une sortie plus petite.', // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnder:
      'Le fichier original était déjà sous {target} ; il a été exporté proprement avec une qualité de {quality} %.', // Batch 5 primary-key alias of statusAlreadyUnderClean
    statusAlreadyUnderClean:
      'Le fichier original était déjà sous {target} ; il a été exporté proprement avec une qualité de {quality} %.', // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull:
      'Objectif atteint en pleine résolution de {width}×{height} px ({qualityLabel}).', // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled:
      'Objectif atteint en mettant à l’échelle à {width}×{height} px ({percent} %) avec {qualityLabel}.', // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    qualityLosslessPng: 'PNG sans perte', // 'lossless PNG'
    qualityPercent: 'qualité de {quality} %', // '{quality}% quality'
    statusCannotPng:
      'Impossible d’atteindre {target} avec un PNG sans perte (minimum atteignable : {bytes} à {width}×{height} px). Changez le format de sortie en JPG ou WebP pour atteindre des tailles plus petites.', // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull:
      'Impossible d’atteindre {target} avec les dimensions complètes de {width}×{height} px (la taille minimale de qualité est de {bytes}). Activez « Autoriser la mise à l’échelle des dimensions » pour réduire davantage les dimensions.', // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotCleanly:
      'L’objectif demandé de {target} n’a pas pu être atteint proprement. La plus petite sortie encodée honnête est de {bytes} ({width}×{height} px, qualité de {quality} %). Essayez une taille cible plus grande.', // Batch 5 primary-key alias of statusCannotClean
    statusCannotClean:
      'L’objectif demandé de {target} n’a pas pu être atteint proprement. La plus petite sortie encodée honnête est de {bytes} ({width}×{height} px, qualité de {quality} %). Essayez une taille cible plus grande.', // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    comparisonTitlePrefix: 'Compression cible ({target})', // titlePrefix `Target Compression ({target})`
    comparisonAfterLabel: 'Compressée ({bytes})', // afterLabel `Compressed ({bytes})`
  },
  '/bulk-image-compressor': {
    uploadTitle: 'Déposez des dizaines d’images pour la compression en lot', // 'Drop dozens of images for bulk compression'
    errorCompressionFailed: 'Échec de la compression.', // 'Compression failed.'
    errorCorruptedFile: 'Fichier image corrompu ou illisible.', // 'Corrupted or unreadable image file.'
    quickBatchProfiles: 'Profils rapides de lot :', // 'Quick Batch Profiles:'
    profileWebFast: 'Web Rapide (WebP 75 %)', // 'Web Fast (WebP 75%)'
    profileEmailSharing: 'E-mail / Partage (JPG 65 %)', // 'Email / Sharing (JPG 65%)'
    profileHighFidelity: 'Haute fidélité (85 %)', // 'High Fidelity (85%)'
    compressingBatch: 'Compression du lot en local…', // 'Compressing batch locally...'
    // Strings rendered by CompressionControls, ResultsList and ComparisonModal
    // come from the shared i18n-fr.ts dictionary sections (compressionControls,
    // resultsList, comparisonModal) — already translated in FR Batch 1
    // (i18n-fr.ts). If a section is missing there, the merge must add it;
    // do not invent translations inline.
  },
  "/target-file-size-compressor": {
    uploadTitleTemplate: "Déposez des images à compresser sous {target}", // 'Drop images to compress under {target}'
    targetMaxFileSize: "Taille de fichier cible maximale", // 'Target Maximum File Size'
    targetNumberAria: "Nombre de la taille de fichier cible", // 'Target file size number'
    maxSuffix: "({size})", // '({size})'
    needDifferentTarget: "Besoin d'une autre taille cible en Ko ?", // 'Need a different target KB?'
    preset20kb: "20 KB", // '20 KB' — unchanged
    preset50kb: "50 KB", // '50 KB' — unchanged
    preset100kb: "100 KB", // '100 KB' — unchanged
    preset200kb: "200 KB", // '200 KB' — unchanged
    preset500kb: "500 KB", // '500 KB' — unchanged
    preset1mb: "1 MB", // '1 MB' — unchanged
    outputFormat: "Format de sortie", // 'Output Format'
    formatOriginal: "Original", // 'Original' — same in French
    formatJpg: "JPG", // 'JPG' — unchanged
    formatWebp: "WEBP", // 'WEBP' — unchanged (format name)
    formatPng: "PNG", // 'PNG' — unchanged (format name)
    allowDownscale: "Autoriser la mise à l'échelle intelligente des dimensions si la réduction de qualité ne suffit pas à passer sous {target}", // 'Allow intelligent dimension scaling if quality reduction alone cannot fit under {target}'
    autoSwitchPng: "Convertir automatiquement les gros PNG en WebP/JPG quand le PNG sans perte ne peut pas atteindre {target} proprement", // 'Auto-convert large PNGs to WebP/JPG when lossless PNG cannot reach {target} cleanly'
    transparentPngMatteColor: "Couleur d'arrière-plan pour PNG transparent :", // 'Transparent PNG matte color:'
    losslessPngTitle: "PNG sans perte sélectionné :", // 'Lossless PNG selected:'
    losslessPngNote: "Le PNG ignore les curseurs de qualité : réduire la taille passe donc uniquement par la réduction des dimensions en pixels. Pour les grandes photos, choisissez JPG ou WebP pour atteindre des limites strictes en Ko tout en restant net.", // 'PNG ignores quality sliders, so reducing size relies strictly on shrinking pixel dimensions. For large photos, choose JPG or WebP to hit strict KB limits while staying sharp.'
    compressToTarget: "Compresser à {target}", // 'Compress to {target}'
    optimizing: "Optimisation…", // 'Optimizing...'
    clear: "Effacer", // 'Clear'
    targetSummary: "Résumé de la compression cible · Objectif ≤ {target}", // 'Target Compression Summary · Goal ≤ {target}'
    summaryMet: "{achieved} sur {total} {images} ont atteint l'objectif de {target}", // '{achieved} of {total} {images} met the {target} target'
    imageSingular: "image", // 'image'
    imagePlural: "images", // 'images'
    summaryMissed: "· {missed} n'ont pas pu tenir honnêtement (détails ci-dessous)", // '{missed} could not honestly fit (details below)'
    totalSaved: "Total économisé : {bytes}", // 'Total Saved: {bytes}'
    totalGrew: "(a grossi de {grew})", // '(grew by {grew})'
    creatingZip: "Création du ZIP…", // 'Creating ZIP...'
    downloadAllZip: "Télécharger tout (ZIP)", // 'Download All (ZIP)'
    underTarget: "Sous {target} ({bytes})", // 'Under {target} ({bytes})'
    targetMissed: "Objectif manqué — {bytes}", // 'Target missed — {bytes}'
    columnOriginal: "Original", // 'Original'
    columnOutput: "Sortie", // 'Output'
    columnSpaceSaved: "Espace économisé", // 'Space Saved'
    columnReduction: "Réduction", // 'Reduction'
    columnSizeChange: "Changement de taille", // 'Size Change'
    grewBy: "A grossi de {bytes} : le réencodage est plus lourd que l'original.", // 'Grew by {bytes} — re-encode is larger than the original.'
    grewPngHint: "WebP ou JPG est généralement plus léger pour les PNG photographiques.", // 'WebP or JPG is usually smaller for photo-like PNGs.'
    keepOriginal: "Garder l'original", // 'Keep original'
    keptOriginalNote: "Fichier original conservé, car le réencodage l'avait alourdi.", // 'Kept original file because re-encoding made it larger.'
    statusAlreadyUnderGrew: "Le fichier original était déjà sous {target}, et le réencodage l'a alourdi de {bytes}. Utilisez « Garder l'original » ou passez à WebP/JPG pour un fichier plus léger.", // 'Original file was already under {target}, and re-encoding grew it by {bytes}. Use "Keep original" or switch to WebP/JPG for smaller output.'
    statusAlreadyUnder: "Le fichier original était déjà sous {target} ; exporté proprement avec une qualité de {quality} %.", // 'Original file was already under {target}; exported cleanly at {quality}% quality.'
    statusMetFull: "Objectif atteint en pleine résolution {width}×{height} px ({qualityLabel}).", // 'Target met at full {width}×{height}px resolution ({qualityLabel}).'
    statusMetScaled: "Objectif atteint en réduisant à {width}×{height} px ({percent} %) avec {qualityLabel}.", // 'Target met by scaling to {width}×{height}px ({percent}%) at {qualityLabel}.'
    statusCannotPng: "Impossible d'atteindre {target} avec un PNG sans perte (minimum possible : {bytes} à {width}×{height} px). Passez le format de sortie à JPG ou WebP pour des tailles plus petites.", // 'Cannot reach {target} with lossless PNG (smallest achievable: {bytes} at {width}×{height}px). Switch output format to JPG or WebP to hit smaller sizes.'
    statusCannotFull: "Impossible d'atteindre {target} en dimensions complètes de {width}×{height} px (la taille minimale en qualité est de {bytes}). Activez « Autoriser la mise à l'échelle des dimensions » pour réduire davantage les dimensions.", // 'Cannot reach {target} at full {width}×{height}px dimensions (minimum quality size is {bytes}). Enable "Allow Dimension Scaling" to shrink dimensions further.'
    statusCannotCleanly: "L'objectif demandé de {target} n'a pas pu être atteint proprement. La plus petite sortie encodée honnête est de {bytes} ({width}×{height} px, qualité de {quality} %). Essayez un objectif plus grand.", // 'Requested {target} could not be reached cleanly. Smallest honest encoded output is {bytes} ({width}×{height}px, {quality}% quality). Try a larger target size.'
    switchedFormatNote: "PNG sans perte converti automatiquement en {format} pour conserver une meilleure résolution sous {target}.", // 'Auto-converted lossless PNG to {format} to preserve higher resolution under {target}.'
    formatWebpTransparency: "WebP (transparence préservée)", // 'WebP (transparency preserved)'
    qualityLosslessPng: "PNG sans perte", // 'lossless PNG'
    qualityPercent: "qualité de {quality} %", // '{quality}% quality'
    errorTargetFailed: "Échec de la compression cible.", // 'Target compression failed.'
    errorCorruptedFile: "Fichier image corrompu ou illisible.", // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: "Compression cible ({target})", // 'Target Compression ({target})'
    comparisonAfterLabel: "Compressée ({bytes})", // 'Compressed ({bytes})'
    compare: "Comparer", // 'Compare'
    download: "Télécharger", // 'Download'
    removeImage: "Supprimer {name}", // 'Remove {name}'
    grewPngNote: "WebP ou JPG est généralement plus petit pour les PNG d’aspect photo.", // 'WebP or JPG is usually smaller for photo-like PNGs.' (fallback key)
    losslessPngSelected: "PNG sans perte sélectionné :", // 'Lossless PNG selected:' (fallback key)
    metricOriginal: "Original", // 'Original' (metric label)
    metricOutput: "Sortie", // 'Output' (metric label)
    metricReduction: "Réduction", // 'Reduction' (metric label)
    metricSizeChange: "Changement de taille", // 'Size Change' (metric label)
    metricSpaceSaved: "Espace économisé", // 'Space Saved' (metric label)
    targetMaxSuffix: "({bytes} max)", // '({bytes} max)'
    transparentPngMatte: "Couleur mate pour PNG transparent :", // 'Transparent PNG matte color:'
    uploadTitle: "Déposez des images à compresser sous {target}", // 'Drop images to compress under {target}'
  },
  "/bulk-image-resizer": {
    uploadTitle: "Déposez plusieurs images à redimensionner en lot", // 'Drop multiple images to bulk resize'
    batchResizeStrategy: "Stratégie de redimensionnement en lot", // 'Batch Resize Strategy'
    strategyBounding: "Ajustement max L × H", // 'Fit Max W × H'
    strategyWidth: "Largeur uniforme", // 'Uniform Width'
    strategyExact: "L × H exactes", // 'Exact W × H'
    strategyPercentage: "Pourcentage (%)", // 'Percentage (%)'
    outputFormat: "Format de sortie", // 'Output Format'
    formatOriginal: "Original", // 'Original' — same in French
    formatJpg: "JPG", // 'JPG' — unchanged
    scaleAllImages: "Mettre toutes les images à l'échelle :", // 'Scale All Images:'
    maxWidth: "Largeur max. (px)", // 'Max Width (px)'
    targetWidth: "Largeur cible (px)", // 'Target Width (px)'
    exactWidth: "Largeur exacte (px)", // 'Exact Width (px)'
    maxHeight: "Hauteur max. (px)", // 'Max Height (px)'
    exactHeight: "Hauteur exacte (px)", // 'Exact Height (px)'
    doNotEnlarge: "Ne pas agrandir les images plus petites", // 'Do not enlarge smaller images'
    fitMode: "Mode d'ajustement", // 'Fit Mode'
    fitContain: "Contenir", // 'Contain'
    fitCover: "Couvrir", // 'Cover'
    fitStretch: "Étirer", // 'Stretch'
    presetFullHd: "Full HD 1920px", // 'Full HD 1920px' — unchanged
    presetBlog: "Blog 1200px", // 'Blog 1200px' — unchanged
    presetEcommerce: "E-commerce 1000×1000", // 'E-commerce 1000×1000'
    presetThumbnail: "Miniature 600px", // 'Thumbnail 600px'
    quality: "Qualité :", // 'Quality:'
    matteBg: "Arrière-plan :", // 'Matte BG:'
    resizingProgress: "Redimensionnement ({processed}/{total})…", // 'Resizing ({processed}/{total})...'
    bulkResize: "Redimensionner en lot ({count})", // 'Bulk Resize ({count})'
    clear: "Effacer", // 'Clear'
    bulkResizeComplete: "Redimensionnement en lot terminé", // 'Bulk Resize Complete'
    imagesResizedReadySingular: "{count} image redimensionnée et prête", // '{count} image resized and ready'
    imagesResizedReadyPlural: "{count} images redimensionnées et prêtes", // '{count} images resized and ready'
    creatingZip: "Création du ZIP…", // 'Creating ZIP...'
    downloadAllZip: "Télécharger tout (ZIP)", // 'Download All (ZIP)'
    errorResizeFailed: "Échec du redimensionnement en lot.", // 'Batch resize failed.'
    errorCorruptedFile: "Fichier image corrompu ou illisible.", // 'Corrupted or unreadable image file.'
    comparisonTitlePrefix: "Comparaison de redimensionnement en lot", // 'Bulk Resize Comparison'
    comparisonAfterLabel: "Redimensionnée (après)", // 'Resized (After)'
    compare: "Comparer", // 'Compare'
    download: "Télécharger", // 'Download'
    removeImage: "Supprimer {name}", // 'Remove {name}'
  },
  "/bulk-image-converter": {
    uploadTitle: "Déposez plusieurs images à convertir en lot", // 'Drop multiple images to bulk convert formats'
    convertBatchToFormat: "Convertir le lot au format", // 'Convert Batch To Format'
    formatWebp: "WebP (le plus léger pour le web)", // 'WebP (Smallest Web)'
    formatJpg: "JPG (universel)", // 'JPG (Universal)'
    formatPng: "PNG (sans perte, avec transparence)", // 'PNG (Lossless Alpha)'
    optionalFilenameSuffix: "Suffixe de nom de fichier facultatif", // 'Optional Filename Suffix'
    placeholderSuffix: "p. ex. _web", // 'e.g. _web'
    transparentFill: "Remplissage transparent", // 'Transparent Fill'
    qualityLosslessPng: "Qualité (PNG sans perte)", // 'Quality (Lossless PNG)'
    qualityPercent: "Qualité ({quality} %)", // 'Quality ({quality}%)'
    convertingProgress: "Conversion ({processed}/{total})…", // 'Converting ({processed}/{total})...'
    convertAll: "Tout convertir ({count})", // 'Convert All ({count})'
    clear: "Effacer", // 'Clear'
    bulkConversionSummary: "Résumé de la conversion en lot", // 'Bulk Conversion Summary'
    filesConvertedSummary: "{count} fichiers convertis en {format} · {original} → {converted}", // '{count} files converted to {format} · {original} → {converted}'
    creatingZip: "Création du ZIP…", // 'Creating ZIP...'
    downloadAllZip: "Télécharger tout (ZIP)", // 'Download All (ZIP)'
    convertedTo: "Converti en {ext}", // 'Converted to {ext}'
    errorConversionFailed: "Échec de la conversion en lot.", // 'Batch conversion failed.'
    errorUnsupportedFile: "Fichier image non pris en charge ou corrompu.", // 'Unsupported or corrupted image file.'
    comparisonTitlePrefix: "Conversion de format en lot", // 'Bulk Format Conversion'
    comparisonAfterLabel: "Convertie (après)", // 'Converted (After)'
    compare: "Comparer", // 'Compare'
    download: "Télécharger", // 'Download'
    removeImage: "Supprimer {name}", // 'Remove {name}'
  },
  "/web-image-optimizer": {
    uploadTitle: "Déposez des ressources web à optimiser pour les Core Web Vitals", // 'Drop website assets to optimize for Core Web Vitals'
    webPerformancePresets: "Préréglages de performance web", // 'Web Performance Presets'
    presetHero: "Hero / Bannière", // 'Hero / Banner'
    presetHeroDesc: "Max 1600 px · WebP 80 %", // 'Max 1600px · WebP 80%'
    presetProduct: "Produit e-commerce", // 'E-Commerce Product'
    presetProductDesc: "Max 1200 px · WebP 82 %", // 'Max 1200px · WebP 82%'
    presetThumb: "Carte / Miniature", // 'Card / Thumbnail'
    presetThumbDesc: "Max 640 px · WebP 75 %", // 'Max 640px · WebP 75%'
    presetOg: "OG social / E-mail", // 'Social OG / Email'
    presetOgDesc: "Max 1200 px · JPG 82 %", // 'Max 1200px · JPG 82%'
    presetRetina: "Graphique Retina 2×", // 'Retina 2× Graphic'
    presetRetinaDesc: "Max 1920 px · WebP 88 %", // 'Max 1920px · WebP 88%'
    webFormat: "Format web", // 'Web Format'
    maxDimension: "Dimension maximale (bord long)", // 'Max Dimension (Long Edge)'
    keepOriginalDimensions: "Conserver les dimensions d'origine", // 'Keep Original Dimensions'
    max1920: "Max 1920 px (Retina / Full HD)", // 'Max 1920px (Retina / Full HD)'
    max1600: "Max 1600 px (Hero / Bannière)", // 'Max 1600px (Hero / Banner)'
    max1200: "Max 1200 px (Blog / Produit)", // 'Max 1200px (Blog / Product)'
    max800: "Max 800 px (dans le contenu)", // 'Max 800px (In-Content)'
    max640: "Max 640 px (miniatures)", // 'Max 640px (Thumbnails)'
    quality: "Qualité :", // 'Quality:'
    onlyDownscale: "Réduire uniquement les images plus grandes (les métadonnées EXIF et GPS sont supprimées automatiquement)", // 'Only downscale larger images (EXIF & GPS metadata automatically stripped)'
    optimizing: "Optimisation…", // 'Optimizing...'
    optimizeForWeb: "Optimiser pour le web ({count})", // 'Optimize for Web ({count})'
    clear: "Effacer", // 'Clear'
    webPerformanceSummary: "Résumé des performances web", // 'Web Performance Summary'
    pageWeightSaved: "({percent} % plus léger · {saved} de poids de page économisés)", // '({percent}% lighter · {saved} page weight saved)'
    pageWeightGrew: "(+{percent} % · a grossi de {amount})", // '(+{percent}% · grew by {amount})'
    creatingZip: "Création du ZIP…", // 'Creating ZIP...'
    downloadAllZip: "Télécharger tout (ZIP)", // 'Download All (ZIP)'
    webReady: "Prêt pour le web ({percent})", // 'Web-Ready ({percent})'
    grewBy: "A grossi de {amount} ({percent})", // 'Grew by {amount} ({percent})'
    copyImg: "Copier <img>", // 'Copy <img>'
    copiedHtml: "HTML copié", // 'Copied HTML'
    copyImgTitle: "Copier la balise HTML img responsive avec largeur et hauteur explicites", // 'Copy responsive HTML img tag with explicit width and height'
    errorOptimizationFailed: "Échec de l'optimisation web.", // 'Web optimization failed.'
    errorCorruptedFile: "Image corrompue ou non prise en charge.", // 'Corrupted or unsupported image.'
    comparisonTitlePrefix: "Comparaison d'optimisation web", // 'Web Optimization Comparison'
    comparisonAfterLabel: "Prête pour le web (après)", // 'Web-Ready (After)'
    compare: "Comparer", // 'Compare'
    download: "Télécharger", // 'Download'
    removeImage: "Supprimer {name}", // 'Remove {name}'
  },
  "/gif-compressor": {
    uploadTitle: "Déposez un GIF animé à compresser", // 'Drop an animated GIF to compress'
    decodingGif: "Décodage des images du GIF animé localement dans votre navigateur…", // 'Decoding animated GIF frames locally in your browser...'
    frameSingular: "image", // 'frame'
    framePlural: "images", // 'frames'
    presetLight: "Léger", // 'Light'
    presetBalanced: "Équilibré", // 'Balanced'
    presetMaxShrink: "Réduction maximale", // 'Max Shrink'
    colorPaletteLimit: "Limite de couleurs de la palette", // 'Color Palette Limit'
    colorsCount: "{count} couleurs", // '{count} colors'
    outputScale: "Échelle de sortie", // 'Output Scale'
    scaleWithDims: "{percent} % ({width}×{height})", // '{percent}% ({width}×{height})'
    frameRateOptimization: "Optimisation de la fréquence d'images", // 'Frame Rate Optimization'
    keepAllFrames: "Conserver toutes les images", // 'Keep All Frames'
    dropEvery2nd: "Supprimer une image sur deux (~50 % plus petit)", // 'Drop Every 2nd Frame (~50% smaller)'
    keep1of3: "Conserver 1 image sur 3", // 'Keep 1 of Every 3 Frames'
    compressingGif: "Compression du GIF ({progress} %)…", // 'Compressing GIF ({progress}%)...'
    compressGif: "Compresser le GIF", // 'Compress GIF'
    reset: "Réinitialiser", // 'Reset'
    originalGif: "GIF original", // 'Original GIF'
    compressedGif: "GIF compressé", // 'Compressed GIF'
    sizeChange: "Changement de taille", // 'Size Change'
    sizeAndFrames: "{size} · {frames} images", // '{size} · {frames}f'
    downloadCompressedGif: "Télécharger le GIF compressé", // 'Download Compressed GIF'
    notSmallerNotice: "Ce GIF source était déjà fortement optimisé ou utilise une palette plein cadre plus lourde que l'entrée. Pour le réduire sous {size}, baissez la palette à 32–64 couleurs, réduisez l'échelle de sortie à 75 % ou 50 %, ou supprimez une image sur deux.", // 'This source GIF was already heavily optimized or uses a full-frame palette larger than the input. To shrink it below {size}, reduce Color Palette to 32–64 colors, lower Output Scale to 75% or 50%, or drop every 2nd frame.'
    compressedByNotice: "Compressé de {percent} % ({saved} économisés) proprement dans votre navigateur.", // 'Compressed by {percent}% ({saved} saved) cleanly in your browser.'
    originalLabel: "Original ({width}×{height} px)", // 'Original ({width}×{height}px)'
    compressedLabel: "Compressé ({width}×{height} px)", // 'Compressed ({width}×{height}px)'
    altOriginalGif: "GIF original", // 'Original GIF'
    altCompressedGif: "GIF compressé", // 'Compressed GIF'
    errorGifFailed: "Échec de la compression du GIF.", // 'GIF compression failed.'
    errorDecodeFrames: "Impossible de décoder les images du GIF.", // 'Could not decode GIF frames.'
    errorTooSmall: "Le fichier est trop petit pour être un GIF valide.", // 'File is too small to be a valid GIF.'
    errorNotValidGif: "Le fichier sélectionné n'est pas une animation GIF87a ou GIF89a valide.", // 'Selected file is not a valid GIF87a or GIF89a animation.'
    errorInvalidDims: "Le GIF a des dimensions de canevas 0×0 non valides.", // 'GIF has invalid 0x0 canvas dimensions.'
    errorTruncatedColorTable: "Table de couleurs globale du GIF tronquée.", // 'Truncated GIF Global Color Table.'
    errorNoFrames: "Impossible de décoder une image de ce fichier GIF.", // 'Could not decode any image frames from this GIF file.'
    errorCanvasContext: "Impossible d'initialiser le contexte de canevas 2D.", // 'Unable to initialize 2D canvas context.'
  },
  "/heic-to-jpg": {
    uploadTitle: "Déposez des photos HEIC ou HEIF d'iPhone à convertir en JPG", // 'Drop iPhone HEIC or HEIF photos to convert to JPG'
    notice: "Décode les photos HEIC et HEIF d'Apple localement dans votre navigateur grâce à WebAssembly côté client (heic2any) : vos photos ne quittent jamais votre appareil.", // 'Decodes Apple HEIC and HEIF photos locally inside your browser using client-side WebAssembly (heic2any) — your photos never leave your device.'
    conversionPipeline: "Chaîne de conversion :", // 'Conversion Pipeline:'
    outputQuality: "Qualité de sortie JPG", // '`${targetLabel} Output Quality`'
    smallerFile: "Fichier plus petit (20 %)", // 'Smaller file (20%)'
    balanced: "Équilibré (85 %)", // 'Balanced (85%)'
    maxDetail: "Détail maximal (100 %)", // 'Max detail (100%)'
    qualityAriaLabel: "Qualité de sortie JPG", // '`${targetLabel} output quality`'
    reconvertAll: "Tout reconvertir", // 'Re-convert All'
    converting: "Conversion…", // 'Converting...'
    clear: "Effacer", // 'Clear'
    batchSummary: "Résumé du lot HEIC → JPG", // '`${sourceLabel} → ${targetLabel} Batch Summary`'
    filesConverted: "{count} {files} convertis · {original} → {converted}", // '{count} {file/files} converted · {original} → {converted}'
    fileSingular: "fichier", // 'file'
    filePlural: "fichiers", // 'files'
    creatingZip: "Création du ZIP…", // 'Creating ZIP...'
    downloadAllZip: "Télécharger tout (ZIP)", // 'Download All (ZIP)'
    columnChange: "Changement", // 'Change'
    compare: "Comparer", // 'Compare'
    downloadTarget: "Télécharger JPG", // 'Download ${targetLabel}'
    removeImage: "Supprimer {name}", // 'Remove {name}'
    errorDecodeHint: "Impossible de décoder ce fichier HEIC/HEIF. Assurez-vous qu'il s'agit bien d'une photo HEIC valide d'iPhone ou d'Apple.", // 'Could not decode this HEIC/HEIF file. Ensure it is a valid iPhone/Apple HEIC photo.'
    errorDecodeFile: "Impossible de décoder « {filename} ». Vérifiez qu'il s'agit bien d'une image HEIC valide.", // 'Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.'
    errorConvertFailed: "Échec de la conversion de {name} en JPG.", // 'Failed to convert {name} to ${targetLabel}.'
    comparisonTitlePrefix: "HEIC → JPG", // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: "JPG ({size})", // '`${targetLabel} ({size})`'
  },
  "/jpg-to-png": {
    uploadTitle: "Déposez des images JPG ou JPEG à convertir en PNG sans perte", // 'Drop JPG or JPEG images to convert to lossless PNG'
    conversionPipeline: "Chaîne de conversion :", // 'Conversion Pipeline:'
    losslessPngOutput: "Sortie PNG sans perte", // 'Lossless PNG Output'
    losslessPngEncoding: "Encodage PNG sans perte", // 'Lossless PNG Encoding'
    losslessPngNote: "Le PNG préserve les bords nets, le texte et la transparence alpha, sans aucun artefact de compression avec perte.", // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    reconvertAll: "Tout reconvertir", // 'Re-convert All'
    converting: "Conversion…", // 'Converting...'
    clear: "Effacer", // 'Clear'
    batchSummary: "Résumé du lot JPG → PNG", // '`${sourceLabel} → ${targetLabel} Batch Summary`'
    filesConverted: "{count} {files} convertis · {original} → {converted}", // '{count} {file/files} converted · {original} → {converted}'
    fileSingular: "fichier", // 'file'
    filePlural: "fichiers", // 'files'
    creatingZip: "Création du ZIP…", // 'Creating ZIP...'
    downloadAllZip: "Télécharger tout (ZIP)", // 'Download All (ZIP)'
    columnChange: "Changement", // 'Change'
    compare: "Comparer", // 'Compare'
    downloadTarget: "Télécharger PNG", // 'Download ${targetLabel}'
    removeImage: "Supprimer {name}", // 'Remove {name}'
    errorDecodeFile: "Impossible de décoder « {filename} ». Vérifiez qu'il s'agit bien d'une image JPG valide.", // 'Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.'
    errorConvertFailed: "Échec de la conversion de {name} en PNG.", // 'Failed to convert {name} to ${targetLabel}.'
    comparisonTitlePrefix: "JPG → PNG", // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: "PNG ({size})", // '`${targetLabel} ({size})`'
  },
  "/png-to-jpg": {
    uploadTitle: "Déposez des fichiers PNG à convertir en JPG plus légers", // 'Drop PNG files to convert to smaller JPG'
    conversionPipeline: "Chaîne de conversion :", // 'Conversion Pipeline:'
    outputQuality: "Qualité de sortie JPG", // '`${targetLabel} Output Quality`'
    smallerFile: "Fichier plus petit (20 %)", // 'Smaller file (20%)'
    balanced: "Équilibré (85 %)", // 'Balanced (85%)'
    maxDetail: "Détail maximal (100 %)", // 'Max detail (100%)'
    qualityAriaLabel: "Qualité de sortie JPG", // '`${targetLabel} output quality`'
    transparentMatteColor: "Couleur d'arrière-plan mate pour la transparence", // 'Transparent Background Matte Color'
    matteWhite: "Blanc", // 'White'
    matteBlack: "Noir", // 'Black'
    matteLightGray: "Gris clair", // 'Light Gray'
    matteAriaLabel: "Couleur d'arrière-plan mate", // 'Matte background color'
    matteNote: "Le JPG ne prend pas en charge la transparence ; les zones transparentes sont remplies proprement avec cette couleur.", // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    reconvertAll: "Tout reconvertir", // 'Re-convert All'
    converting: "Conversion…", // 'Converting...'
    clear: "Effacer", // 'Clear'
    batchSummary: "Résumé du lot PNG → JPG", // '`${sourceLabel} → ${targetLabel} Batch Summary`'
    filesConverted: "{count} {files} convertis · {original} → {converted}", // '{count} {file/files} converted · {original} → {converted}'
    fileSingular: "fichier", // 'file'
    filePlural: "fichiers", // 'files'
    creatingZip: "Création du ZIP…", // 'Creating ZIP...'
    downloadAllZip: "Télécharger tout (ZIP)", // 'Download All (ZIP)'
    columnChange: "Changement", // 'Change'
    compare: "Comparer", // 'Compare'
    downloadTarget: "Télécharger JPG", // 'Download ${targetLabel}'
    removeImage: "Supprimer {name}", // 'Remove {name}'
    errorDecodeFile: "Impossible de décoder « {filename} ». Vérifiez qu'il s'agit bien d'une image PNG valide.", // 'Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.'
    errorConvertFailed: "Échec de la conversion de {name} en JPG.", // 'Failed to convert {name} to ${targetLabel}.'
    comparisonTitlePrefix: "PNG → JPG", // `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: "JPG ({size})", // '`${targetLabel} ({size})`'
  },
  '/jpg-to-webp': {
    uploadTitle: 'Déposez des images JPG à convertir en WebP léger', // 'Drop JPG images to convert to lightweight WebP'
    conversionPipeline: 'Pipeline de conversion :', // 'Conversion Pipeline:'
    outputQualityLabel: 'Qualité de sortie WebP', // 'WebP Output Quality'
    qualityAriaLabel: 'qualité de sortie WebP', // aria-label 'WebP output quality'
    smallerFile: 'Fichier plus petit (20 %)', // 'Smaller file (20%)'
    balanced: 'Équilibré (85 %)', // 'Balanced (85%)'
    maxDetail: 'Détail maximal (100 %)', // 'Max detail (100%)'
    batchSummary: 'Résumé du lot {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'fichier', // 'file'
    filePlural: 'fichiers', // 'files'
    filesConvertedSuffix: 'convertis', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Création du ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tout télécharger (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Variation', // 'Change'
    compare: 'Comparer', // 'Compare'
    downloadTarget: 'Télécharger WebP', // 'Download WebP'
    removeImage: 'Supprimer {name}', // aria-label `Remove ${item.name}`
    converting: 'Conversion…', // 'Converting...'
    reconvertAll: 'Tout reconvertir', // 'Re-convert All'
    clear: 'Effacer', // 'Clear'
    comparisonTitlePrefix: 'JPG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Impossible de convertir {name} en WebP.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Impossible de décoder « {name} ». Vérifiez qu’il s’agit d’une image JPG valide.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-jpg': {
    uploadTitle: 'Déposez des images WebP à convertir en JPG universel', // 'Drop WebP images to convert to universal JPG'
    conversionPipeline: 'Pipeline de conversion :', // 'Conversion Pipeline:'
    outputQualityLabel: 'Qualité de sortie JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'qualité de sortie JPG', // aria-label 'JPG output quality'
    smallerFile: 'Fichier plus petit (20 %)', // 'Smaller file (20%)'
    balanced: 'Équilibré (85 %)', // 'Balanced (85%)'
    maxDetail: 'Détail maximal (100 %)', // 'Max detail (100%)'
    matteColorLabel: 'Couleur de fond pour la transparence', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Couleur de fond', // aria-label 'Matte background color'
    matteWhite: 'Blanc', // 'White'
    matteBlack: 'Noir', // 'Black'
    matteLightGray: 'Gris clair', // 'Light Gray'
    matteHint: 'JPG ne prend pas en charge la transparence ; les zones transparentes sont remplies proprement avec cette couleur.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'Résumé du lot {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'fichier', // 'file'
    filePlural: 'fichiers', // 'files'
    filesConvertedSuffix: 'convertis', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Création du ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tout télécharger (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Variation', // 'Change'
    compare: 'Comparer', // 'Compare'
    downloadTarget: 'Télécharger JPG', // 'Download JPG'
    removeImage: 'Supprimer {name}', // aria-label `Remove ${item.name}`
    converting: 'Conversion…', // 'Converting...'
    reconvertAll: 'Tout reconvertir', // 'Re-convert All'
    clear: 'Effacer', // 'Clear'
    comparisonTitlePrefix: 'WebP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Impossible de convertir {name} en JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Impossible de décoder « {name} ». Vérifiez qu’il s’agit d’une image WebP valide.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
    matteNote: 'Le JPG ne prend pas en charge la transparence ; les zones transparentes sont remplies proprement avec cette couleur.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
  },
  '/png-to-webp': {
    uploadTitle: 'Déposez des fichiers PNG à convertir en WebP transparent', // 'Drop PNG files to convert to transparent WebP'
    conversionPipeline: 'Pipeline de conversion :', // 'Conversion Pipeline:'
    outputQualityLabel: 'Qualité de sortie WebP', // 'WebP Output Quality'
    qualityAriaLabel: 'qualité de sortie WebP', // aria-label 'WebP output quality'
    smallerFile: 'Fichier plus petit (20 %)', // 'Smaller file (20%)'
    balanced: 'Équilibré (85 %)', // 'Balanced (85%)'
    maxDetail: 'Détail maximal (100 %)', // 'Max detail (100%)'
    batchSummary: 'Résumé du lot {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'fichier', // 'file'
    filePlural: 'fichiers', // 'files'
    filesConvertedSuffix: 'convertis', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Création du ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tout télécharger (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Variation', // 'Change'
    compare: 'Comparer', // 'Compare'
    downloadTarget: 'Télécharger WebP', // 'Download WebP'
    removeImage: 'Supprimer {name}', // aria-label `Remove ${item.name}`
    converting: 'Conversion…', // 'Converting...'
    reconvertAll: 'Tout reconvertir', // 'Re-convert All'
    clear: 'Effacer', // 'Clear'
    comparisonTitlePrefix: 'PNG → WebP', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'WebP ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Impossible de convertir {name} en WebP.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Impossible de décoder « {name} ». Vérifiez qu’il s’agit d’une image PNG valide.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/webp-to-png': {
    uploadTitle: 'Déposez des fichiers WebP à convertir en PNG sans perte', // 'Drop WebP files to convert to lossless PNG'
    conversionPipeline: 'Pipeline de conversion :', // 'Conversion Pipeline:'
    losslessPngOutput: 'Sortie PNG sans perte', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Encodage PNG sans perte', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG conserve les contours nets, le texte et la transparence alpha sans aucun artefact de compression avec perte.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    batchSummary: 'Résumé du lot {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'fichier', // 'file'
    filePlural: 'fichiers', // 'files'
    filesConvertedSuffix: 'convertis', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Création du ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tout télécharger (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Variation', // 'Change'
    compare: 'Comparer', // 'Compare'
    downloadTarget: 'Télécharger PNG', // 'Download PNG'
    removeImage: 'Supprimer {name}', // aria-label `Remove ${item.name}`
    converting: 'Conversion…', // 'Converting...'
    reconvertAll: 'Tout reconvertir', // 'Re-convert All'
    clear: 'Effacer', // 'Clear'
    comparisonTitlePrefix: 'WebP → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Impossible de convertir {name} en PNG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Impossible de décoder « {name} ». Vérifiez qu’il s’agit d’une image WebP valide.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
    losslessPngEncoding: 'Encodage PNG sans perte', // 'Lossless PNG Encoding'
    losslessPngNote: 'Le PNG préserve les bords nets, le texte et la transparence alpha, sans aucun artefact de compression avec perte.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
  },
  '/svg-to-png': {
    uploadTitle: 'Déposez des fichiers vectoriels SVG à rastériser en PNG', // 'Drop SVG vector files to rasterize to PNG'
    notice:
      'Rastérise les visuels SVG intégrés localement via HTML5 Canvas en conservant les fonds transparents. Limite : les URL <image> externes, les feuilles de style CSS externes / polices web, ou les scripts référencés dans un SVG peuvent ne pas se rendre dans l’export Canvas autonome.', // 'Rasterizes inline SVG graphics locally via HTML5 Canvas with transparent backgrounds preserved. Limitation: external <image> URLs, external CSS stylesheets/webfonts, or scripts referenced inside an SVG may not render in standalone Canvas export.'
    conversionPipeline: 'Pipeline de conversion :', // 'Conversion Pipeline:'
    losslessPngOutput: 'Sortie PNG sans perte', // 'Lossless PNG Output'
    losslessPngEncodingTitle: 'Encodage PNG sans perte', // 'Lossless PNG Encoding'
    losslessPngEncodingDesc: 'PNG conserve les contours nets, le texte et la transparence alpha sans aucun artefact de compression avec perte.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
    rasterExportScale: 'Échelle d’export de rastérisation', // 'Raster Export Scale'
    rasterExportScaleHint: 'Multiplicateur appliqué aux dimensions intrinsèques du SVG (plafonné à 8000 px). Cliquez sur Tout reconvertir après avoir changé d’échelle.', // 'Multiplier applied to the SVG's intrinsic dimensions (capped at 8000px). Click Re-convert All after changing scale.'
    batchSummary: 'Résumé du lot {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'fichier', // 'file'
    filePlural: 'fichiers', // 'files'
    filesConvertedSuffix: 'convertis', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Création du ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tout télécharger (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Variation', // 'Change'
    compare: 'Comparer', // 'Compare'
    downloadTarget: 'Télécharger PNG', // 'Download PNG'
    removeImage: 'Supprimer {name}', // aria-label `Remove ${item.name}`
    converting: 'Conversion…', // 'Converting...'
    reconvertAll: 'Tout reconvertir', // 'Re-convert All'
    clear: 'Effacer', // 'Clear'
    comparisonTitlePrefix: 'SVG → PNG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'PNG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Impossible de convertir {name} en PNG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Impossible de rastériser ce SVG. Assurez-vous que le fichier est un balisage SVG XML valide, sans erreur de syntaxe.', // decodeErrorHint 'Could not rasterize this SVG. Ensure the file is valid XML SVG markup without malformed syntax.'
    losslessPngEncoding: 'Encodage PNG sans perte', // 'Lossless PNG Encoding'
    losslessPngNote: 'Le PNG préserve les bords nets, le texte et la transparence alpha, sans aucun artefact de compression avec perte.', // 'PNG preserves sharp edges, text, and alpha transparency with zero lossy compression artifacts.'
  },
  '/avif-to-jpg': {
    uploadTitle: 'Déposez des images AVIF à convertir en JPG universel', // 'Drop AVIF images to convert to universal JPG'
    notice:
      'Décode les images AVIF localement avec le décodeur AVIF natif de votre navigateur (pris en charge dans Chrome, Edge, Firefox et Safari modernes) et exporte des fichiers JPG standard.', // 'Decodes AVIF images locally using your browser’s native AVIF decoder (supported in modern Chrome, Edge, Firefox, and Safari) and exports standard JPG files.'
    conversionPipeline: 'Pipeline de conversion :', // 'Conversion Pipeline:'
    outputQualityLabel: 'Qualité de sortie JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'qualité de sortie JPG', // aria-label 'JPG output quality'
    smallerFile: 'Fichier plus petit (20 %)', // 'Smaller file (20%)'
    balanced: 'Équilibré (85 %)', // 'Balanced (85%)'
    maxDetail: 'Détail maximal (100 %)', // 'Max detail (100%)'
    matteColorLabel: 'Couleur de fond pour la transparence', // 'Transparent Background Matte Color'
    matteAriaLabel: 'Couleur de fond', // aria-label 'Matte background color'
    matteWhite: 'Blanc', // 'White'
    matteBlack: 'Noir', // 'Black'
    matteLightGray: 'Gris clair', // 'Light Gray'
    matteHint: 'JPG ne prend pas en charge la transparence ; les zones transparentes sont remplies proprement avec cette couleur.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
    batchSummary: 'Résumé du lot {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'fichier', // 'file'
    filePlural: 'fichiers', // 'files'
    filesConvertedSuffix: 'convertis', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Création du ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tout télécharger (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Variation', // 'Change'
    compare: 'Comparer', // 'Compare'
    downloadTarget: 'Télécharger JPG', // 'Download JPG'
    removeImage: 'Supprimer {name}', // aria-label `Remove ${item.name}`
    converting: 'Conversion…', // 'Converting...'
    reconvertAll: 'Tout reconvertir', // 'Re-convert All'
    clear: 'Effacer', // 'Clear'
    comparisonTitlePrefix: 'AVIF → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Impossible de convertir {name} en JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Votre navigateur n’a pas pu décoder cette image AVIF. Vérifiez que le fichier est une image .avif valide et essayez un navigateur moderne Chrome, Firefox, Edge ou Safari.', // decodeErrorHint 'Your browser could not decode this AVIF image. Verify the file is a valid .avif image and try a modern Chrome, Firefox, Edge, or Safari browser.'
    matteNote: 'Le JPG ne prend pas en charge la transparence ; les zones transparentes sont remplies proprement avec cette couleur.', // 'JPG does not support transparency; transparent areas fill cleanly with this color.'
  },
  '/bmp-to-jpg': {
    uploadTitle: 'Déposez des bitmaps BMP non compressés à convertir en JPG compact', // 'Drop uncompressed BMP bitmaps to convert to compact JPG'
    conversionPipeline: 'Pipeline de conversion :', // 'Conversion Pipeline:'
    outputQualityLabel: 'Qualité de sortie JPG', // 'JPG Output Quality'
    qualityAriaLabel: 'qualité de sortie JPG', // aria-label 'JPG output quality'
    smallerFile: 'Fichier plus petit (20 %)', // 'Smaller file (20%)'
    balanced: 'Équilibré (85 %)', // 'Balanced (85%)'
    maxDetail: 'Détail maximal (100 %)', // 'Max detail (100%)'
    batchSummary: 'Résumé du lot {source} → {target}', // '{source} → {target} Batch Summary'
    fileSingular: 'fichier', // 'file'
    filePlural: 'fichiers', // 'files'
    filesConvertedSuffix: 'convertis', // 'converted' (in '{count} file(s) converted')
    creatingZip: 'Création du ZIP…', // 'Creating ZIP...'
    downloadAllZip: 'Tout télécharger (ZIP)', // 'Download All (ZIP)'
    changeLabel: 'Variation', // 'Change'
    compare: 'Comparer', // 'Compare'
    downloadTarget: 'Télécharger JPG', // 'Download JPG'
    removeImage: 'Supprimer {name}', // aria-label `Remove ${item.name}`
    converting: 'Conversion…', // 'Converting...'
    reconvertAll: 'Tout reconvertir', // 'Re-convert All'
    clear: 'Effacer', // 'Clear'
    comparisonTitlePrefix: 'BMP → JPG', // titlePrefix `${sourceLabel} → ${targetLabel}`
    comparisonAfterLabel: 'JPG ({size})', // afterLabel `${targetLabel} (${formatBytes(...)})`
    errorConvertFailed: 'Impossible de convertir {name} en JPG.', // `Failed to convert ${item.name} to ${targetLabel}.`
    errorCouldNotDecode: 'Impossible de décoder « {name} ». Vérifiez qu’il s’agit d’une image BMP valide.', // `Could not decode "${file.name}". Verify it is a valid ${sourceLabel} image.`
  },
  '/remove-background': {
    uploadTitle: 'Déposez une photo pour supprimer son arrière-plan avec l’IA', // 'Drop a photo to remove its background with AI'
    modelLoadingTitle: 'Chargement du modèle IA dans le navigateur (isnet_quint8)', // 'Loading in-browser AI model (isnet_quint8)'
    modelCache: 'Cache du modèle', // 'Model Cache'
    progressWasm: 'Chargement du moteur IA WebAssembly…', // 'Loading WebAssembly AI runtime...'
    progressModel: 'Téléchargement du modèle IA de suppression d’arrière-plan (~35 Mo, mis en cache pour une utilisation future)…', // 'Downloading AI background removal model (~35 MB, cached for future use)...'
    progressCompute: 'Suppression de l’arrière-plan localement dans votre navigateur…', // 'Removing background locally in your browser...'
    progressPreparing: 'Préparation du modèle IA dans le navigateur…', // 'Preparing in-browser AI model...'
    progressInitLibrary: 'Chargement de la bibliothèque IA de suppression d’arrière-plan…', // 'Loading AI background removal library...'
    progressInitModule: 'Initialisation du module IA de suppression d’arrière-plan…', // 'Initializing AI background removal module...'
    errorModelInit: 'Impossible d’initialiser le modèle IA d’arrière-plan : {message}', // `Could not initialize the AI background model: ${err.message}`
    errorModelInitGeneric: 'Impossible d’initialiser le modèle IA d’arrière-plan dans ce navigateur.', // 'Could not initialize the AI background model in this browser.'
    errorDecodeOutput: 'Impossible de décoder la sortie PNG transparente.', // 'Failed to decode transparent PNG output.'
    errorRemovalFailed: 'La suppression d’arrière-plan a échoué dans ce navigateur. Essayez une autre image ou rechargez la page.', // 'Background removal failed in this browser. Try another image or reload.'
    beforeAfterPreview: 'Aperçu avant/après', // 'Before & After Preview'
    splitCompare: 'Comparaison partagée', // 'Split Compare'
    newImage: 'Nouvelle image', // 'New Image'
    originalLabel: 'Original', // 'Original'
    transparentCutout: 'Découpe transparente (PNG)', // 'Transparent Cutout (PNG)'
    solidBackgroundPreview: 'Aperçu à fond uni', // 'Solid Background Preview'
    waitingForResult: 'En attente du résultat…', // 'Waiting for result...'
    processingLocally: 'Traitement local…', // 'Processing locally...'
    cutoutStatus: 'État de la découpe', // 'Cutout Status'
    ready: 'Prêt', // 'Ready'
    backgroundFillOption: 'Option de remplissage d’arrière-plan', // 'Background Fill Option'
    bgTransparent: 'Transparent', // 'Transparent'
    bgWhite: 'Blanc', // 'White'
    bgBlack: 'Noir', // 'Black'
    bgCustom: 'Personnalisé', // 'Custom'
    customBackgroundColor: 'Couleur d’arrière-plan personnalisée', // 'Custom Background Color'
    downloadTransparentPng: 'Télécharger le PNG transparent', // 'Download Transparent PNG'
    downloadWithWhite: 'Télécharger avec fond blanc', // 'Download with White Background'
    downloadWithBlack: 'Télécharger avec fond noir', // 'Download with Black Background'
    downloadWithCustom: 'Télécharger avec fond {color}', // 'Download with {color} Background'
    rerunRemoval: 'Relancer la suppression', // 'Re-run Removal'
    comparisonTitlePrefix: 'Comparaison de suppression d’arrière-plan', // 'Background Removal Comparison'
    comparisonAfterTransparent: 'Découpe (PNG transparent)', // 'Cutout (Transparent PNG)'
    comparisonAfterSolid: 'Découpe (fond uni)', // 'Cutout (Solid BG)'
    altOriginal: 'Original {name}', // alt `Original ${sourceFile.name}`
    altCutout: 'Arrière-plan supprimé {name}', // alt `Background removed ${sourceFile.name}`
  },
};
