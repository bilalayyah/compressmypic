// French (fr) tool registry — COMPLETE (home + all 48 tools).
// Assembled from tools-fr-batch1.ts … tools-fr-batch6.ts (coordinator merge).
// Target path in the repo: src/locales/fr/tools.ts
// French (fr), vous form. Slugs, category ids and
// relatedSlugs are unchanged from the English registry (src/data/tools.ts).
// Batch 1: 8 tools; Batches 2–6: 8 tools each (40 tools); home entry from
// i18n-fr.ts (HOME_FR). Translated from English — never from
// Spanish; Spanish files were used only as structural templates.

import type { ToolDefinition, ToolCategoryMeta } from '../../data/tools';

export const TOOL_CATEGORIES_FR: ToolCategoryMeta[] = [
  { id: "compress", label: "Compresser", description: "Réduisez la taille des fichiers image sans perte visible de qualité" },
  { id: "resize", label: "Redimensionner", description: "Modifiez les dimensions en pixels ou redimensionnez des images en lot" },
  { id: "convert", label: "Convertir", description: "Convertissez entre formats d'image et générez des PDF" },
  { id: "crop-edit", label: "Recadrer et modifier", description: "Pivotez, retournez, recadrez et ajustez vos photos" },
  { id: "ai-tools", label: "Outils IA", description: "Traitement intelligent des images dans le navigateur" },
  { id: "create", label: "Créer", description: "Créez des favicons, des collages et des ressources web" },
  { id: "privacy", label: "Outils de confidentialité", description: "Inspectez et supprimez les métadonnées EXIF, GPS et cachées" },
  { id: "developer", label: "Outils développeur", description: "Choisissez des couleurs, inspectez les dimensions et générez des ressources web" },
];

export const TOOLS_REGISTRY_FR: ToolDefinition[] = [
  {
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
},
  {
    slug: "/image-resizer",
    name: "Redimensionneur d'image",
    shortDescription: "Redimensionnez vos images en pixels exacts, en pourcentage ou avec des préréglages pour les réseaux sociaux.",
    category: "resize",
    seoTitle: "Redimensionneur d'image gratuit online – En pixels ou %",
    seoDescription:
      "Redimensionnez vos images gratuitement en ligne par pixels exacts, pourcentage ou préréglages pour les réseaux sociaux. Lots dans le navigateur, export ZIP.",
    h1: "Redimensionneur d'image gratuit online",
    subtitle:
      "Notre redimensionneur d'image dans le navigateur permet aux webdesigners, aux vendeurs en ligne, aux blogueurs et aux utilisateurs de tous les jours d'ajuster leurs photos à des dimensions exactes en pixels ou à des proportions en pourcentage en quelques secondes. Verrouillez le rapport d'aspect pour éviter toute distorsion, appliquez des préréglages pour les réseaux sociaux en un clic, ou traitez un dossier entier localement, sans aucun envoi vers un serveur.",
    howToSteps: [
      {
        title: "Importez une ou plusieurs images",
        description:
          "Glissez-déposez des fichiers JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de 20 Mo maximum chacun dans la zone d'import, parcourez les fichiers de votre appareil ou collez-les directement avec Ctrl+V.",
      },
      {
        title: "Choisissez le mode En pixels ou En pourcentage",
        description:
          "Basculez entre En pixels (L × H) pour saisir des dimensions exactes jusqu'à 12 000 px, ou En pourcentage (%) pour redimensionner entre 10 % et 200 % avec le curseur ou les boutons rapides.",
      },
      {
        title: "Réglez le verrouillage du rapport, le mode d'ajustement ou les préréglages",
        description:
          "Gardez le rapport d'aspect verrouillé pour un redimensionnement proportionnel, ou déverrouillez-le pour choisir Contenir, Couvrir ou Étirer à la taille exacte — ou cliquez sur un préréglage comme Publication Instagram, Miniature YouTube ou Full HD.",
      },
      {
        title: "Choisissez le format de sortie et la qualité",
        description:
          "Sélectionnez le format de sortie Original, JPG, PNG ou WebP, ajustez le curseur de qualité de sortie de 10 % à 100 % et choisissez une couleur de fond mate si vous exportez en JPG.",
      },
      {
        title: "Appliquez les réglages et comparez visuellement",
        description:
          "Cliquez sur Redimensionner tout pour traiter votre lot, puis ouvrez la vue Comparer sur n'importe quelle carte pour vérifier la netteté et l'économie en octets avant et après, côte à côte.",
      },
      {
        title: "Téléchargez les fichiers un par un ou en archive ZIP",
        description:
          "Enregistrez chaque image redimensionnée avec son bouton Télécharger, ou cliquez sur Tout télécharger (ZIP) lorsque vous redimensionnez au moins deux fichiers à la fois.",
      },
    ],
    features: [
      {
        title: "Pixels exacts et redimensionnement en pourcentage",
        description:
          "Redimensionnez à une largeur et une hauteur exactes en pixels ou redimensionnez proprement de 10 % à 200 %, tout en conservant automatiquement le rapport d'aspect quand il est verrouillé.",
      },
      {
        title: "Modes d'ajustement intelligents (Exact, Contenir, Couvrir)",
        description:
          "Choisissez comment les images s'adaptent aux dimensions fixes des préréglages — étirer à la taille exacte, s'insérer sans recadrage ou recadrer au centre pour remplir.",
      },
      {
        title: "Redimensionnement par lots et téléchargement ZIP",
        description:
          "Traitez des dizaines de photos de produits ou de miniatures de blog en un seul lot et téléchargez-les toutes dans un seul fichier ZIP.",
      },
      {
        title: "Traitement 100 % local dans le navigateur",
        description:
          "Vos photos sont redimensionnées avec HTML5 Canvas sur votre propre appareil et ne sont jamais envoyées vers un serveur externe.",
      },
    ],
    faqs: [
      {
        question: "Quelle est la différence entre En pixels et En pourcentage dans le redimensionneur d'image ?",
        answer:
          "Le mode En pixels vous permet de saisir une largeur et une hauteur exactes en pixels (jusqu'à 12 000 px) ou d'appliquer directement des préréglages pour les réseaux sociaux. Le mode En pourcentage redimensionne chaque image importée proportionnellement entre 10 % et 200 %, avec le curseur ou les boutons rapides 25 %, 50 %, 75 %, 150 % et 200 %.",
      },
      {
        question: "Que se passe-t-il quand le rapport d'aspect est verrouillé ou déverrouillé ?",
        answer:
          "Quand le rapport d'aspect est verrouillé, saisir une nouvelle largeur met à jour la hauteur automatiquement, en proportion exacte de votre première photo importée (et inversement). En le déverrouillant, vous pouvez saisir des valeurs de largeur et de hauteur indépendantes, et les options d'ajustement Contenir, Couvrir et Étirer à la taille exacte apparaissent.",
      },
      {
        question: "Quand choisir Contenir, Couvrir ou Étirer à la taille exacte ?",
        answer:
          "Choisissez Contenir (sans recadrage) quand vous voulez conserver tout le sujet dans le cadre sans couper aucun bord. Choisissez Couvrir (recadrage centré) pour remplir des dimensions exactes en coupant le surplus, ou Étirer à la taille exacte si le respect des limites en pixels compte plus que la conservation des proportions.",
      },
      {
        question: "Quels préréglages pour les réseaux sociaux et les écrans sont intégrés ?",
        answer:
          "Vous disposez de préréglages en un clic pour Publication Instagram (1080×1080), Story Instagram (1080×1920), Miniature YouTube (1280×720), Couverture Facebook (851×315), Bannière X (1500×500) et Full HD (1920×1080). Cliquer sur un préréglage bascule en mode En pixels et remplit ces dimensions exactes.",
      },
      {
        question: "Puis-je agrandir une petite image au-delà de sa résolution d'origine ?",
        answer:
          "Oui, vous pouvez saisir des valeurs en pixels plus grandes ou redimensionner jusqu'à 200 % en mode En pourcentage grâce à l'interpolation de HTML5 Canvas. Gardez à l'esprit qu'agrandir fortement des graphiques basse résolution rend les bords plus flous, car Canvas étire les pixels existants au lieu d'inventer de nouveaux détails.",
      },
      {
        question: "Quelles sont les dimensions maximales en pixels et la taille de fichier autorisée pour le redimensionnement ?",
        answer:
          "Chaque image importée peut peser jusqu'à 20 Mo, et les champs de pixels acceptent des largeurs et des hauteurs jusqu'à 12 000 px. Les très grands canevas peuvent consommer beaucoup de mémoire vive sur mobile, donc rester entre 4 000 et 6 000 px garde le traitement rapide.",
      },
      {
        question: "Quels formats d'entrée fonctionnent dans ce redimensionneur d'image ?",
        answer:
          "Vous pouvez importer des fichiers JPG, PNG, WebP, HEIC/HEIF d'iPhone, GIF, BMP et SVG. Les images HEIC sont décodées localement dans votre navigateur avant le redimensionnement avec Canvas, et vous pouvez exporter les résultats en format Original, JPG, PNG ou WebP.",
      },
      {
        question: "Le redimensionnement préserve-t-il les arrière-plans transparents des PNG et WebP ?",
        answer:
          "Oui, la transparence est conservée chaque fois que vous gardez le format Original (pour PNG/WebP) ou que vous sélectionnez explicitement une sortie PNG ou WebP. Si vous choisissez le format de sortie JPG, les zones transparentes sont remplies avec la couleur de fond mate choisie (blanc par défaut).",
      },
      {
        question: "Comment le redimensionnement par lots gère-t-il les photos paysage et portrait mélangées ?",
        answer:
          "Quand vous importez un lot en mode En pixels avec le rapport d'aspect verrouillé, chaque photo conserve ses propres proportions naturelles en utilisant la limite de largeur, sans déformer les portraits en cadres paysage. Si vous voulez des dimensions fixes identiques pour tout le lot, déverrouillez le rapport d'aspect et choisissez Contenir ou Couvrir.",
      },
      {
        question: "Pourquoi le premier import remplit-il automatiquement la largeur et la hauteur ?",
        answer:
          "Quand vous déposez votre première photo dans une file vide, le redimensionneur définit la largeur à 1 200 px maximum et calcule la hauteur correspondante de façon proportionnelle. Vous pouvez modifier ces chiffres immédiatement et cliquer sur Redimensionner tout pour relancer le traitement de toutes les images de la liste.",
      },
      {
        question: "Comment vérifier la netteté après avoir réduit une photo ?",
        answer:
          "Cliquez sur Comparer sur n'importe quelle carte de résultat ou cliquez sur sa miniature pour ouvrir la fenêtre de comparaison avant/après. Elle affiche les dimensions d'origine et redimensionnées, l'économie en octets et un curseur de comparaison pour vérifier les détails avant le téléchargement.",
      },
      {
        question: "Puis-je changer de format de sortie et redimensionner en même temps ?",
        answer:
          "Oui, vous pouvez choisir JPG, PNG ou WebP dans le sélecteur de format de sortie et ajuster le curseur de qualité de sortie (de 10 % à 100 %) avant de cliquer sur Redimensionner tout. Cela permet de réduire les dimensions et de convertir vers un format web léger en une seule passe.",
      },
      {
        question: "Les GIF animés restent-ils animés après le redimensionnement ici ?",
        answer:
          "Non, HTML5 Canvas ne restitue que la première image d'un GIF lors du redimensionnement vers des dimensions statiques et exporte une image d'une seule image. Si vous voulez conserver l'animation tout en réduisant le poids du fichier, utilisez plutôt notre outil dédié Compresseur de GIF.",
      },
      {
        question: "Mes photos sont-elles envoyées vers un serveur externe pendant le redimensionnement ?",
        answer:
          "Non, tout le redimensionnement se fait dans votre onglet de navigateur avec la mémoire locale de HTML5 Canvas et JavaScript. Vos images d'origine et redimensionnées ne traversent aucun réseau et ne touchent aucun stockage distant.",
      },
      {
        question: "Comment télécharger des dizaines d'images redimensionnées sans cliquer une par une ?",
        answer:
          "Dès que deux images ou plus ont terminé leur redimensionnement, une barre Lot prêt apparaît au-dessus de la liste avec un bouton Tout télécharger (ZIP). En cliquant dessus, toutes les images redimensionnées sont regroupées dans un seul téléchargement resized_images_compressmypic.zip.",
      },
      {
        question: "Puis-je coller une capture d'écran depuis mon presse-papiers pour la redimensionner ?",
        answer:
          "Oui, appuyez sur Ctrl+V (ou Cmd+V sur Mac) sur la page pour déposer une capture d'écran copiée directement dans la file d'import. Elle charge immédiatement ses dimensions et se redimensionne selon vos réglages actuels de largeur, de hauteur ou de pourcentage.",
      },
      {
        question: "Pourquoi mon PNG redimensionné est-il devenu plus lourd en octets malgré des pixels plus petits ?",
        answer:
          "Si vous convertissez un JPG compressé en PNG sans perte tout en redimensionnant, le PNG conserve un encodage de pixels brut sans perte et peut peser plus que le JPEG source. Choisissez le format de sortie WebP ou JPG à 80 %–85 % de qualité pour des fichiers web beaucoup plus légers.",
      },
      {
        question: "Quel réglage de qualité est le meilleur pour exporter des images JPG ou WebP redimensionnées ?",
        answer:
          "Le réglage par défaut de 85 % équilibre des bords nets, des dégradés propres et des fichiers de petite taille pour les sites web, les blogs et les places de marché. Descendez vers 65 %–75 % si vous avez besoin d'économies de kilo-octets plus strictes, ou montez à 95 %–100 % pour la préparation d'impression.",
      },
      {
        question: "Puis-je redimensionner proprement des graphiques vectoriels SVG vers des PNG haute résolution ?",
        answer:
          "Oui, importer un SVG en ligne vous permet de saisir des dimensions cibles plus grandes avant de le convertir en image sur Canvas. Les SVG autonomes avec des formes et des dégradés en ligne redimensionnent nettement, même si les polices ou images externes dans les SVG sont bloquées par la sécurité du navigateur.",
      },
      {
        question: "Ce redimensionneur d'image fonctionne-t-il hors ligne ou sur téléphone mobile ?",
        answer:
          "Oui, il fonctionne parfaitement sur Safari iOS, Chrome Android et les navigateurs de bureau, avec des curseurs et des préréglages adaptés au tactile. Comme les calculs s'exécutent localement dans votre navigateur une fois la page chargée, rien n'est limité par la vitesse d'envoi.",
      },
    ],
    relatedSlugs: ["/", "/image-converter", "/rotate-flip-image", "/image-dimensions-checker"],
  },
  {
    slug: "/image-converter",
    name: "Convertisseur d'image",
    shortDescription: "Convertissez JPG, PNG, WebP, HEIC, BMP, GIF et SVG dans votre navigateur.",
    category: "convert",
    seoTitle: "Convertisseur d'image gratuit online – JPG, PNG, WebP",
    seoDescription:
      "Convertissez JPG, PNG, WebP, HEIC, SVG, BMP, GIF et AVIF dans votre navigateur. Convertissez vos lots en privé, avec contrôle de la qualité et export ZIP.",
    h1: "Convertisseur d'image gratuit online",
    subtitle:
      "Conçu pour les photographes iPhone, les développeurs web, les spécialistes du marketing et les équipes de bureau, ce convertisseur d'image dans le navigateur passe facilement entre JPG, PNG, WebP, HEIC, SVG, BMP, GIF et AVIF. Ajustez la qualité de sortie, choisissez un fond mat pour les découpes transparentes et convertissez des lots entiers localement sans envoyer de fichiers.",
    howToSteps: [
      {
        title: "Ajoutez un ou plusieurs fichiers image",
        description:
          "Déposez des images JPG, PNG, WebP, HEIC, SVG, BMP, GIF ou AVIF (20 Mo maximum chacune) dans la zone d'import, sélectionnez des fichiers sur le disque ou collez-les avec Ctrl+V.",
      },
      {
        title: "Choisissez votre format de sortie",
        description:
          "Sélectionnez WebP (le plus léger pour le web), JPG (universel) ou PNG (sans perte et avec transparence) sous Convertir au format.",
      },
      {
        title: "Définissez la couleur de remplissage de la transparence pour la sortie JPG",
        description:
          "Quand vous convertissez des graphiques transparents PNG, WebP ou SVG en JPG, cliquez sur l'échantillon de couleur de remplissage de la transparence pour choisir un fond blanc, noir ou n'importe quelle couleur hexadécimale.",
      },
      {
        title: "Ajustez le curseur de qualité si nécessaire",
        description:
          "Faites glisser le curseur de qualité entre 10 % et 100 % pour les sorties WebP ou JPG (le curseur se désactive automatiquement pour le PNG sans perte).",
      },
      {
        title: "Convertissez et vérifiez les résultats",
        description:
          "Cliquez sur Tout convertir pour réencoder votre file avec les réglages mis à jour, puis cliquez sur Comparer sur n'importe quel élément pour vérifier la fidélité visuelle et la variation en octets.",
      },
      {
        title: "Téléchargez les fichiers un par un ou en ZIP",
        description:
          "Enregistrez chaque fichier converti avec son bouton Télécharger, ou cliquez sur Tout télécharger (ZIP) pour télécharger tout le lot ensemble.",
      },
    ],
    features: [
      {
        title: "Large prise en charge des formats d'entrée",
        description:
          "Convertit les photos HEIC/HEIF d'iPhone, les graphiques vectoriels SVG nets, les anciens fichiers BMP, les images WebP, PNG et JPEG directement dans votre navigateur.",
      },
      {
        title: "Conversion respectueuse de la transparence",
        description:
          "Préserve la transparence alpha lors de la conversion en PNG ou WebP, et vous permet de personnaliser la couleur de fond mate lors de la conversion en JPG.",
      },
      {
        title: "Conversion par lots et export ZIP",
        description:
          "Convertissez des dossiers entiers d'images en une fois avec des réglages de qualité cohérents et téléchargez-les en un clic.",
      },
      {
        title: "Moteur privé côté client",
        description:
          "Même le décodage HEIC s'exécute localement via WebAssembly dans votre navigateur — aucun envoi vers un serveur et aucun filigrane.",
      },
    ],
    faqs: [
      {
        question: "Quels formats d'entrée et de sortie ce convertisseur d'image prend-il en charge ?",
        answer:
          "Vous pouvez importer des fichiers JPG, PNG, WebP, HEIC/HEIF d'iPhone, SVG, BMP, GIF et AVIF décodés par le navigateur, jusqu'à 20 Mo par image. Les sorties s'exportent proprement en WebP (le plus léger pour le web), JPG (universel) ou PNG (sans perte et avec transparence).",
      },
      {
        question: "Comment les photos HEIC et HEIF d'iPhone Apple sont-elles converties sans serveur ?",
        answer:
          "Notre convertisseur charge un décodeur HEIC WebAssembly côté client directement dans votre onglet de navigateur. Il décode le conteneur HEIC localement sur votre processeur et restitue la photo sur HTML5 Canvas pour exporter des fichiers JPG, PNG ou WebP standard.",
      },
      {
        question: "Pourquoi le curseur de qualité est-il désactivé quand le PNG est sélectionné ?",
        answer:
          "Le PNG utilise une compression DEFLATE sans perte, ce qui signifie qu'il encode chaque pixel avec précision sans jeter de détails visuels selon un niveau de qualité en pourcentage. Le curseur redevient actif dès que vous passez au WebP ou au JPG.",
      },
      {
        question: "Qu'advient-il des zones transparentes lors de la conversion de PNG ou WebP en JPG ?",
        answer:
          "Comme le JPG ne prend pas en charge le canal de transparence alpha, les pixels transparents doivent être aplatis sur un fond uni. Utilisez le sélecteur de couleur de remplissage de la transparence (blanc par défaut) pour fondre proprement les bords transparents sur n'importe quelle couleur.",
      },
      {
        question: "Puis-je convertir des images AVIF enregistrées depuis des sites web modernes en JPG ou PNG ?",
        answer:
          "Oui, les versions modernes de Chrome, Edge, Firefox et Safari décodent les fichiers AVIF nativement dans votre navigateur. Une fois décodés, l'outil les exporte en JPG, PNG ou WebP universels sans aucun service cloud externe.",
      },
      {
        question: "Les logos vectoriels SVG sont-ils bien conservés lors de la conversion en PNG ou WebP ?",
        answer:
          "Oui, les fichiers SVG autonomes avec des chemins, des remplissages et des dégradés en ligne se convertissent proprement à leurs dimensions intrinsèques, avec les arrière-plans transparents préservés. Notez que les SVG qui dépendent de polices web externes ou d'URL d'images distantes sont limités par la sécurité de Canvas dans le navigateur.",
      },
      {
        question: "La conversion d'un JPG avec perte en PNG restaure-t-elle les détails manquants de la photo ?",
        answer:
          "Non, réenregistrer un JPG déjà compressé en PNG ne peut pas récupérer les détails supprimés lors de l'encodage JPEG d'origine, et cela augmente généralement la taille du fichier de façon significative. Choisissez le PNG uniquement si vous avez besoin d'un stockage sans perte avant d'autres modifications.",
      },
      {
        question: "Puis-je mélanger différents formats dans une seule conversion par lots ?",
        answer:
          "Oui, vous pouvez déposer ensemble dans la même file des photos HEIC, des captures BMP, des logos PNG et des téléchargements AVIF. Chaque fichier valide est converti vers le format cible sélectionné et se télécharge proprement dans une seule archive ZIP.",
      },
      {
        question: "Que se passe-t-il si j'importe un GIF animé dans le convertisseur général ?",
        answer:
          "Canvas dessine l'image initiale du GIF et convertit cette image en un fichier WebP, JPG ou PNG statique. Si vous voulez réduire un GIF animé tout en conservant le mouvement, passez à notre outil Compresseur de GIF.",
      },
      {
        question: "Pourquoi la sortie WebP a-t-elle réduit si fortement la taille de ma capture PNG ?",
        answer:
          "Contrairement au PNG sans perte, le WebP à 85 % de qualité combine une compression prédictive moderne avec une prise en charge complète de la transparence alpha. Cela réduit souvent fortement les grandes captures d'interface et les découpes de produits tout en gardant une lisibilité nette et des bords lisses.",
      },
      {
        question: "Comment vérifier la qualité avant/après avant d'enregistrer les images converties ?",
        answer:
          "Cliquez sur Comparer sur n'importe quelle carte convertie (ou cliquez sur sa miniature) pour ouvrir la fenêtre de comparaison interactive. Vous pouvez comparer les tailles en octets d'origine et convertie et faire glisser la poignée de séparation sur les bords et le texte.",
      },
      {
        question: "Mes photos ou captures sensibles sont-elles envoyées sur Internet ?",
        answer:
          "Jamais — tout le décodage, l'aplatissement des couleurs et le réencodage se font strictement dans la mémoire locale de votre navigateur. Rien n'est importé, stocké sur des serveurs ou partagé avec des tiers.",
      },
      {
        question: "Quel réglage de qualité est recommandé pour convertir des photos en WebP ou JPG ?",
        answer:
          "La valeur par défaut de 85 % fonctionne de façon fiable pour les ressources web WebP comme pour le partage JPG universel, sans blocage de compression visible. Vous pouvez la monter à 92 %–95 % pour les photos de portfolio ou la descendre à 70 %–75 % pour des limites de bande passante serrées.",
      },
      {
        question: "Comment les noms de fichiers de sortie sont-ils générés après la conversion ?",
        answer:
          "Chaque fichier converti conserve votre nom de fichier de base nettoyé et remplace l'extension par .webp, .jpg ou .png automatiquement. Vous pouvez voir le nom de fichier de sortie exact et la taille en octets convertie sur chaque carte avant le téléchargement.",
      },
      {
        question: "Puis-je convertir des bitmaps BMP d'anciens logiciels Windows en WebP ou JPG ?",
        answer:
          "Oui, les fichiers .bmp non compressés se décodent nativement dans le navigateur et se convertissent immédiatement en fichiers JPG ou WebP compacts. Éliminer les en-têtes de bitmap non compressés réduit couramment le poids de stockage de façon spectaculaire.",
      },
      {
        question: "Que se passe-t-il si un fichier de mon lot est corrompu ou illisible ?",
        answer:
          "Chaque image est traitée indépendamment, donc un seul fichier corrompu ou non pris en charge affiche un badge d'erreur en ligne sans interrompre le reste de votre file. Toutes les images valides sont quand même converties et regroupées dans votre téléchargement ZIP.",
      },
      {
        question: "La conversion via HTML5 Canvas supprime-t-elle les métadonnées EXIF cachées de l'appareil photo ?",
        answer:
          "Oui, dessiner une image sur Canvas et encoder un nouveau fichier JPG, PNG ou WebP produit une image nette sans balises GPS EXIF ni métadonnées de numéro de série de l'appareil. Cela protège votre vie privée quand vous partagez des fichiers convertis en ligne.",
      },
      {
        question: "Puis-je convertir des images collées directement depuis mon presse-papiers ?",
        answer:
          "Oui, copier une image ou prendre une capture d'écran puis appuyer sur Ctrl+V n'importe où sur la page l'ajoute directement à la file du convertisseur. Elle est immédiatement encodée vers votre format cible actif.",
      },
      {
        question: "Y a-t-il une limite quotidienne ou un nombre de fichiers limité pour les conversions par lots ?",
        answer:
          "Non, il n'y a ni compte, ni filigrane, ni quota quotidien de conversion. Vous êtes seulement limité par le contrôle de 20 Mo par fichier et par la mémoire vive disponible de votre appareil dans le navigateur.",
      },
      {
        question: "Quand choisir Tout télécharger (ZIP) plutôt que le téléchargement d'un seul fichier ?",
        answer:
          "Utilisez le bouton Télécharger de chaque carte quand vous enregistrez rapidement une seule photo convertie. Dès que deux images ou plus ont terminé leur conversion, cliquez sur Tout télécharger (ZIP) dans la barre de résumé du lot pour les regrouper dans converted_images_compressmypic.zip.",
      },
    ],
    relatedSlugs: ["/", "/image-resizer", "/image-to-pdf", "/favicon-generator"],
  },
  {
    slug: "/rotate-flip-image",
    name: "Pivoter et retourner une image",
    shortDescription: "Pivotez de 90°, 180°, selon un angle personnalisé, et retournez vos images horizontalement ou verticalement.",
    category: "crop-edit",
    seoTitle: "Pivoter une image gratuitement – 90°, retournement",
    seoDescription:
      "Pivotez vos images de 90° ou 180°, selon un angle personnalisé, et retournez-les horizontalement ou verticalement. Traitement par lots avec export ZIP.",
    h1: "Pivoter et retourner une image en ligne",
    subtitle:
      "Corrigez les photos d'appareil prises de travers, inversez les selfies à l'envers et redressez les horizons inclinés quand vous pivotez vos fichiers image directement dans votre navigateur. Idéal pour les photographes, les étudiants qui numérisent des documents et les créateurs de contenu, tout se transforme localement en pleine résolution avec export ZIP par lots.",
    howToSteps: [
      {
        title: "Importez une ou plusieurs images",
        description:
          "Glissez-déposez des fichiers JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de 20 Mo maximum chacun dans la zone de dépôt, ou collez-les directement avec Ctrl+V.",
      },
      {
        title: "Utilisez les rotations rapides de 90° et 180°",
        description:
          "Cliquez sur Pivoter de 90° à gauche, Pivoter de 90° à droite ou 180° sous Pivoter et retourner rapidement pour faire tourner immédiatement toutes les images de la file.",
      },
      {
        title: "Retournez horizontalement ou verticalement",
        description:
          "Activez Retourner horizontalement pour inverser de gauche à droite ou Retourner verticalement pour inverser de haut en bas — combinez l'un ou l'autre avec n'importe quel angle de rotation.",
      },
      {
        title: "Ajustez finement les angles personnalisés (de -180° à +180°)",
        description:
          "Faites glisser le curseur d'angle de rotation pour redresser les photos penchées au degré près, puis cliquez sur Appliquer l'angle (ou Réinitialiser à 0° à tout moment).",
      },
      {
        title: "Choisissez votre format de sortie",
        description:
          "Sélectionnez Original, JPG, PNG ou WebP pour correspondre à votre flux de travail ; les changements sont réappliqués immédiatement sur vos images.",
      },
      {
        title: "Comparez visuellement et téléchargez",
        description:
          "Cliquez sur Comparer sur n'importe quelle carte pour vérifier l'orientation avant et après, puis cliquez sur Télécharger ou Tout télécharger (ZIP) pour les lots.",
      },
    ],
    features: [
      {
        title: "Rotation rapide de 90° et angle personnalisé",
        description:
          "Pivotez proprement par pas de 90° ou réglez n'importe quel angle exact au degré près, avec un calcul automatique des limites du canevas pour que les coins ne soient jamais coupés.",
      },
      {
        title: "Retournement et miroir instantanés",
        description:
          "Retournez les images horizontalement (selfie en miroir) ou verticalement (reflet à l'envers) en un seul clic.",
      },
      {
        title: "Transformation par lots",
        description:
          "Appliquez la même rotation ou le même retournement sur plusieurs photos importées simultanément et exportez-les toutes en ZIP.",
      },
      {
        title: "Sortie avec perte minimisée",
        description:
          "Choisissez le format Original, le PNG pour une conservation sans perte, ou le WebP/JPG avec une qualité réglable.",
      },
    ],
    faqs: [
      {
        question: "La rotation d'une photo selon un angle personnalisé comme 15° coupe-t-elle les coins ?",
        answer:
          "Non, l'outil calcule automatiquement la largeur et la hauteur du cadre élargi par trigonométrie pour les angles autres que 90°. Cela agrandit le canevas juste assez pour que chaque pixel de vos coins d'origine reste dans le cadre.",
      },
      {
        question: "Qu'est-ce qui remplit les coins triangulaires créés par un angle d'inclinaison personnalisé ?",
        answer:
          "Si vous gardez le format Original sur un PNG/WebP ou choisissez une sortie PNG/WebP, ces coins extérieurs supplémentaires restent complètement transparents. Si votre sortie est en JPG, qui ne prend pas en charge l'alpha, les coins sont remplis d'un blanc uni propre.",
      },
      {
        question: "Puis-je pivoter de 90° et retourner horizontalement en même temps ?",
        answer:
          "Oui, Retourner horizontalement et Retourner verticalement agissent comme des interrupteurs indépendants à côté de n'importe quel angle de rotation. Le badge de chaque carte de résultat affiche votre état combiné exact, par exemple Pivotée de 90° · Retournée H.",
      },
      {
        question: "Pourquoi la rotation de 90° ou 270° échange-t-elle la largeur et la hauteur en pixels ?",
        answer:
          "Tourner une image paysage de 1920×1080 de 90° fait pivoter ses axes pour qu'elle devienne une image portrait de 1080×1920. Conserver des limites exactes échangées évite d'étirer ou de recadrer n'importe quel côté de votre photo.",
      },
      {
        question: "Comment corriger un selfie inversé avec du texte en miroir ?",
        answer:
          "Importez la photo, cliquez sur Réinitialiser à 0° si vous ne voulez pas de rotation de 90° (l'outil démarre à 90° par défaut au chargement), puis activez Retourner horizontalement. Le texte sur les t-shirts ou les panneaux redevient immédiatement lisible dans le bon sens.",
      },
      {
        question: "Pourquoi les images pivotent-elles de 90° automatiquement juste après l'import ?",
        answer:
          "L'état de rotation rapide par défaut démarre à 90° pour que les photos courantes prises de travers se redressent dès leur dépôt. Vous pouvez ajuster avec Pivoter de 90° à gauche, 180°, le curseur d'angle, ou cliquer sur Réinitialiser à 0° quand vous voulez seulement retourner.",
      },
      {
        question: "Quels formats d'image puis-je pivoter et retourner ici ?",
        answer:
          "Importez des fichiers JPG, PNG, WebP, HEIC/HEIF, GIF, BMP ou SVG jusqu'à 20 Mo chacun. Les options d'export couvrent Original, JPG, PNG et WebP via le rendu local de HTML5 Canvas.",
      },
      {
        question: "Puis-je pivoter par lots un dossier de photos de téléphone prises de travers ?",
        answer:
          "Oui, déposez autant de photos que votre navigateur gère proprement, cliquez une fois sur le bouton de rotation ou de retournement souhaité, et chaque élément se met à jour ensemble. Quand plusieurs fichiers sont terminés, Tout télécharger (ZIP) exporte rotated_images_compressmypic.zip.",
      },
      {
        question: "La rotation d'un PNG transparent conserve-t-elle son arrière-plan transparent ?",
        answer:
          "Oui, les zones transparentes restent transparentes quand le format Original (depuis PNG/WebP), PNG ou WebP est sélectionné. Cela fonctionne aussi bien pour les rotations nettes de 90° que pour le redressement d'inclinaison arbitraire.",
      },
      {
        question: "Comment annuler plusieurs rotations sans recharger la page ?",
        answer:
          "Cliquez sur Réinitialiser à 0° juste au-dessus du curseur d'angle de rotation à tout moment. Cela ramène immédiatement la rotation à 0° et désactive les retournements horizontal et vertical sur toute la file.",
      },
      {
        question: "Pourquoi la taille de mon fichier peut-elle changer légèrement après la rotation d'un JPEG ?",
        answer:
          "La rotation des pixels dans HTML5 Canvas réencode le JPEG à 90 % de qualité plutôt que de modifier les blocs DCT sans perte. Choisir une sortie PNG préserve les pixels sans perte si vous voulez zéro artefact de compression.",
      },
      {
        question: "Y a-t-il un moyen simple de vérifier avant et après le redressement ?",
        answer:
          "Cliquez sur Comparer sur n'importe quelle carte (ou cliquez sur son aperçu miniature) pour ouvrir la fenêtre de comparaison Pivoter et retourner. Vous pouvez vérifier les bords alignés avec le curseur interactif avant/après avant d'enregistrer.",
      },
      {
        question: "Cet outil respecte-t-il correctement l'orientation des photos iPhone ?",
        answer:
          "Oui, les navigateurs modernes et notre chargeur HEIC normalisent l'orientation EXIF lors du décodage dans Canvas avant d'appliquer l'angle sélectionné. Ce que vous voyez sur la miniature de la carte correspond aux pixels du fichier téléchargé.",
      },
      {
        question: "Puis-je redresser une numérisation de document inclinée par petits pas de 1° ?",
        answer:
          "Oui, faites glisser le curseur d'angle de rotation entre -180° et +180° (pas de 1°) et relâchez pour prévisualiser le document redressé. Cliquez sur Appliquer l'angle si vous l'ajustez avec les flèches du clavier pour l'appliquer sur tous les fichiers de la file.",
      },
      {
        question: "Mes documents ou photos personnelles sont-ils envoyés vers un serveur ?",
        answer:
          "Non, la rotation et le retournement s'exécutent à 100 % localement dans votre navigateur web via les transformations Canvas 2D. Vos images ne quittent jamais votre ordinateur ou votre smartphone.",
      },
      {
        question: "Que se passe-t-il si je pivote un GIF animé ?",
        answer:
          "La rotation d'un GIF extrait et transforme la première image en une image statique. La rotation animée multi-images n'est pas prise en charge directement dans cet outil.",
      },
      {
        question: "Puis-je retourner ou pivoter des captures d'écran collées directement depuis mon presse-papiers ?",
        answer:
          "Oui, appuyez sur Ctrl+V (ou Cmd+V) n'importe où sur la page après avoir copié une image ou une capture d'écran. Elle rejoint la file par lots et applique immédiatement vos réglages actifs de rotation et de retournement.",
      },
      {
        question: "Y a-t-il une limite de taille de fichier ou de nombre de rotations ?",
        answer:
          "Les imports individuels peuvent peser jusqu'à 20 Mo par fichier pour que votre navigateur reste réactif. Dans cette limite, vous pouvez pivoter, retourner, réinitialiser et réexporter autant de photos que nécessaire, sans compte, sans limite quotidienne ni filigrane.",
      },
      {
        question: "Puis-je passer au format de sortie WebP tout en pivotant un lot de PNG ?",
        answer:
          "Oui, cliquer sur WebP sous Format de sortie transforme et exporte immédiatement votre lot en images WebP pivotées et légères. Vous pouvez changer de format librement sans réimporter.",
      },
      {
        question: "Pivoter et retourner fonctionne-t-il proprement sur les téléphones et tablettes tactiles ?",
        answer:
          "Oui, tous les boutons de rotation, les interrupteurs de retournement et le curseur d'angle tactile fonctionnent dans Safari mobile et Chrome Android. Vous pouvez aussi télécharger des photos individuelles directement dans la pellicule ou le dossier Téléchargements de votre appareil.",
      },
    ],
    relatedSlugs: ["/image-resizer", "/", "/image-converter", "/remove-image-metadata"],
  },
  {
    slug: "/image-to-pdf",
    name: "Image en PDF",
    shortDescription: "Combinez vos images JPG, PNG, WebP et HEIC en un PDF de plusieurs pages.",
    category: "convert",
    seoTitle: "Image en PDF gratuit online – Fusionner des photos",
    seoDescription:
      "Transformez des photos en un seul PDF dans votre navigateur. Réorganisez les pages, choisissez A4 ou Lettre US, réglez les marges et enregistrez hors ligne.",
    h1: "Convertisseur d'image en PDF",
    subtitle:
      "Idéal pour les étudiants, les freelances, les comptables et tous ceux qui envoient des pièces d'identité ou des reçus, ce convertisseur privé d'image en PDF fusionne plusieurs photos en un seul PDF net de plusieurs pages. Réorganisez les pages librement, choisissez les dimensions A4, Lettre US ou Ajuster à l'image, ajustez les marges et la qualité, et construisez votre document localement sans aucun envoi vers un serveur.",
    howToSteps: [
      {
        title: "Déposez les images à inclure dans votre PDF",
        description:
          "Importez une ou plusieurs images JPG, PNG, WebP, HEIC, GIF, BMP ou SVG de 20 Mo maximum chacune (ou collez-les avec Ctrl+V). Chaque image devient une page.",
      },
      {
        title: "Organisez l'ordre des pages",
        description:
          "Consultez la liste Ordre des pages sous les réglages et utilisez les boutons Monter, Descendre ou Supprimer pour ordonner précisément reçus, diapositives ou numérisations.",
      },
      {
        title: "Sélectionnez la taille et l'orientation des pages",
        description:
          "Choisissez A4 (210 × 297 mm), Lettre US (8,5 × 11 po) ou Ajuster à la taille de l'image, puis l'orientation Automatique (selon la photo), Portrait ou Paysage.",
      },
      {
        title: "Ajustez les marges et le placement des images",
        description:
          "Choisissez Sans marge (à fond perdu), Petite marge ou Marge moyenne, et sélectionnez Contenir (image entière) ou Couvrir (remplir la page).",
      },
      {
        title: "Définissez le nom du fichier et la qualité d'image du PDF",
        description:
          "Personnalisez le nom de fichier PDF (se terminant par .pdf) et faites glisser la qualité d'image du PDF entre 40 % et 98 % pour équilibrer la netteté et la taille totale du document.",
      },
      {
        title: "Créez et téléchargez votre PDF",
        description:
          "Cliquez sur Créer et télécharger le PDF pour générer le fichier localement ; une bannière de confirmation émeraude vous permet aussi de cliquer sur Télécharger le PDF à nouveau.",
      },
    ],
    features: [
      {
        title: "Ordre des pages multiples",
        description:
          "Réorganisez facilement les images importées avant de générer votre PDF pour que reçus, numérisations et diapositives apparaissent dans l'ordre exact souhaité.",
      },
      {
        title: "Tailles de page flexibles et orientation automatique",
        description:
          "Exportez en A4 ou Lettre US standard avec une orientation Portrait/Paysage automatique par page, ou choisissez Ajuster à l'image pour correspondre au rapport d'aspect exact de chaque photo.",
      },
      {
        title: "Marges réglables et qualité du PDF",
        description:
          "Choisissez des marges Aucune, Petite ou Moyenne et contrôlez la qualité des images intégrées pour garder votre PDF léger pour l'e-mail.",
      },
      {
        title: "Zéro envoi vers un serveur",
        description:
          "Les pièces d'identité, contrats et documents numérisés sensibles ne touchent jamais un serveur externe — le binaire PDF est construit localement dans la mémoire du navigateur.",
      },
    ],
    faqs: [
      {
        question: "Ce convertisseur d'image en PDF est-il sûr pour les passeports, les pièces d'identité et les reçus fiscaux ?",
        answer:
          "Oui, vos documents ne sont jamais envoyés vers un serveur distant ou une file cloud. Notre générateur PDF JavaScript encode chaque page dans la mémoire vive locale de votre navigateur et écrit le fichier .pdf terminé directement sur votre appareil.",
      },
      {
        question: "Quels choix de taille de page sont pris en charge ?",
        answer:
          "Vous pouvez standardiser chaque page en A4 (210 × 297 mm) ou en Lettre US (8,5 × 11 po) pour une impression et un classement cohérents. Vous pouvez aussi choisir Ajuster à la taille de l'image pour que chaque page PDF corresponde aux dimensions natives et au rapport d'aspect de sa photo.",
      },
      {
        question: "Comment fonctionne l'orientation automatique avec des photos horizontales et verticales mélangées ?",
        answer:
          "Quand l'orientation est réglée sur Automatique (selon la photo), les images paysage reçoivent automatiquement des pages paysage tandis que les images portrait reçoivent des pages portrait. Vous pouvez verrouiller chaque page en Portrait ou Paysage quand une mise en page uniforme est nécessaire pour l'impression.",
      },
      {
        question: "Quelle est la différence entre le placement Contenir et Couvrir ?",
        answer:
          "Contenir (image entière) redimensionne chaque photo proportionnellement pour que l'image entière tienne dans vos marges choisies sans rien couper. Couvrir (remplir la page) agrandit la photo pour remplir toute la zone imprimable bord à bord, en coupant le surplus.",
      },
      {
        question: "Pourquoi la liste d'orientation est-elle désactivée quand Ajuster à la taille de l'image est choisi ?",
        answer:
          "Ajuster à la taille de l'image dimensionne chaque page PDF individuellement selon le rapport d'aspect exact de sa photo, donc le choix portrait/paysage ne s'applique pas. Passez la taille de page à A4 ou Lettre US si vous voulez un contrôle manuel Portrait/Paysage.",
      },
      {
        question: "Puis-je réorganiser les pages après avoir importé plusieurs fichiers à la fois ?",
        answer:
          "Oui, faites défiler jusqu'à la section Ordre des pages où chaque page affiche un badge numéroté, une miniature, les dimensions en pixels et la taille du fichier. Utilisez les boutons fléchés Monter et Descendre sur n'importe quelle ligne pour réorganiser les pages avant de cliquer sur Créer et télécharger le PDF.",
      },
      {
        question: "Comment le curseur de qualité d'image du PDF affecte-t-il la taille du fichier ?",
        answer:
          "Baisser la qualité d'image du PDF vers 60 %–75 % compresse les flux JPEG intégrés dans le PDF, ce qui garde les numérisations de plusieurs pages compactes pour les limites strictes d'e-mail ou de portail. Monter vers 90 %–98 % préserve un texte plus net sur les documents denses.",
      },
      {
        question: "Quels formats de fichiers image puis-je combiner dans un PDF ?",
        answer:
          "Vous pouvez mélanger des images JPG, PNG, WebP, HEIC/HEIF d'iPhone, GIF, BMP et SVG (jusqu'à 20 Mo par fichier) dans un seul document PDF. Elles sont décodées localement dans le navigateur et normalisées en douceur sur les pages PDF.",
      },
      {
        question: "Qu'advient-il des images PNG ou WebP transparentes dans un PDF ?",
        answer:
          "Comme les pages PDF standard ont un fond de papier blanc, les arrière-plans transparents se composent proprement sur du blanc uni avant l'intégration. Cela évite les artefacts sombres inattendus derrière les logos ou les signatures numérisées.",
      },
      {
        question: "Puis-je personnaliser le nom du fichier de sortie avant l'enregistrement ?",
        answer:
          "Oui, saisissez n'importe quel titre de document dans le champ Nom de fichier PDF (par défaut compressmypic-document.pdf). Si vous omettez le suffixe .pdf, l'exportateur ajoute .pdf automatiquement lors du téléchargement.",
      },
      {
        question: "Combien de pages puis-je fusionner dans un seul document PDF ?",
        answer:
          "Il n'y a pas de limite artificielle de nombre de pages — vous pouvez combiner des dizaines de photos ou de reçus en un seul PDF de plusieurs pages. La capacité pratique dépend uniquement de la mémoire disponible de votre appareil dans le navigateur et de la résolution en pixels de chaque image.",
      },
      {
        question: "En quoi Sans marge, Petite marge et Marge moyenne diffèrent-elles ?",
        answer:
          "Sans marge (à fond perdu) étend le placement jusqu'aux bords du papier, idéal pour les œuvres sans bordure ou les exports Ajuster à l'image. Petite marge et Marge moyenne ajoutent des bordures blanches propres autour de chaque page pour l'impression standard et la lisibilité.",
      },
      {
        question: "Puis-je ajouter d'autres photos après avoir déjà consulté la liste Ordre des pages ?",
        answer:
          "Oui, déposez ou parcourez simplement d'autres fichiers dans la zone d'import en haut et ils s'ajoutent à la fin de votre liste Ordre des pages. Vous pouvez ensuite réorganiser ou supprimer des pages individuelles avant de générer le PDF mis à jour.",
      },
      {
        question: "L'outil ajoute-t-il un logo de pied de page, un tampon ou un filigrane à mon PDF ?",
        answer:
          "Non, CompressMyPic produit des pages PDF complètement propres contenant uniquement vos images dans vos marges sélectionnées. Aucune marque, aucun en-tête ni filigrane n'est jamais ajouté.",
      },
      {
        question: "Pourquoi un message de progression affiche-t-il Encodage de la page X sur Y ?",
        answer:
          "Les PDF de plusieurs pages encodent chaque image séquentiellement dans la mémoire du navigateur pour éviter de figer votre onglet ou de faire grimper la mémoire vive. Une fois la dernière page encodée, la barre de confirmation verte affiche le nombre total de pages et la taille exacte du PDF en octets.",
      },
      {
        question: "Que faire si je perds ou ferme la boîte de dialogue de téléchargement automatique du navigateur ?",
        answer:
          "Gardez l'onglet ouvert — la carte de confirmation émeraude reste visible avec un bouton Télécharger le PDF à nouveau. En cliquant dessus, vous relancez l'enregistrement du Blob généré exact instantanément, sans réencodage.",
      },
      {
        question: "Puis-je coller des captures d'écran directement dans le générateur de PDF ?",
        answer:
          "Oui, appuyez sur Ctrl+V (ou Cmd+V sur Mac) pour ajouter une capture d'écran du presse-papiers directement dans votre file Ordre des pages. Cela rend rapide le regroupement de plusieurs captures de bugs ou de reçus de discussion dans un seul PDF.",
      },
      {
        question: "La génération d'un PDF envoie-t-elle des métadonnées comme les balises GPS EXIF ?",
        answer:
          "Non, chaque image de page est décodée et dessinée sur HTML5 Canvas avant d'être intégrée dans le flux d'octets du PDF. En conséquence, les en-têtes EXIF d'origine de l'appareil photo et les coordonnées GPS sont exclus automatiquement pendant la conversion.",
      },
      {
        question: "Puis-je convertir des photos HEIC d'iPhone directement en PDF sans les convertir d'abord en JPG ?",
        answer:
          "Oui, déposez des photos .heic ou .heif directement dans la zone d'import et le navigateur les décode localement à la volée. Elles apparaissent directement dans votre liste Ordre des pages, prêtes à être combinées en PDF A4 ou Lettre.",
      },
      {
        question: "L'outil Image en PDF fonctionne-t-il sur smartphones et Chromebooks ?",
        answer:
          "Oui, tout fonctionne en JavaScript standard de navigateur sur iOS, Android, Windows, macOS et ChromeOS. Vous n'avez besoin ni d'Adobe Acrobat, ni d'extensions de navigateur, ni de logiciel PDF de bureau.",
      },
    ],
    relatedSlugs: ["/image-converter", "/", "/remove-image-metadata", "/image-resizer"],
  },
  {
    slug: "/image-metadata-viewer",
    name: "Visionneuse de métadonnées d'image",
    shortDescription: "Inspectez les réglages EXIF de l'appareil photo, les coordonnées GPS et les données PNG/WebP.",
    category: "privacy",
    seoTitle: "Visionneuse de métadonnées – Inspecter EXIF et GPS",
    seoDescription:
      "Inspectez les balises EXIF, les coordonnées GPS et les blocs PNG ou WebP avec notre visionneuse privée. Copiez ou exportez le JSON des métadonnées localement.",
    h1: "Visionneuse de métadonnées et EXIF d'image",
    subtitle:
      "Conçue pour les photographes qui vérifient les réglages de l'objectif, les développeurs qui déboguent les en-têtes et tous ceux qui vérifient leur vie privée avant de publier, notre visionneuse de métadonnées d'image dans le navigateur inspecte les octets bruts du fichier localement. Révélez les balises EXIF cachées, les coordonnées GPS, les horodatages et les blocs PNG ou WebP sans importer un seul pixel.",
    howToSteps: [
      {
        title: "Déposez ou sélectionnez une image à inspecter",
        description:
          "Importez une image JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu'à 20 Mo (ou collez-la avec Ctrl+V). Les en-têtes binaires bruts sont analysés immédiatement sur votre appareil.",
      },
      {
        title: "Consultez la bannière Résumé et risque de confidentialité",
        description:
          "Voyez le format de conteneur détecté, les dimensions, la taille du fichier et si des types de balises de métadonnées intégrées sensibles ont été trouvés.",
      },
      {
        title: "Vérifiez toute alerte de position GPS",
        description:
          "Si des balises GPSIFD existent, une boîte d'avertissement met en évidence la latitude et la longitude exactes décodées et propose un accès en un clic à Supprimer les métadonnées d'image.",
      },
      {
        title: "Parcourez le tableau des métadonnées extraites",
        description:
          "Faites défiler les entrées groupées (Appareil photo, EXIF, GPS, blocs PNG/WebP, infos de fichier) avec des étiquettes orange Balise de confidentialité marquant les champs sensibles.",
      },
      {
        title: "Copiez ou exportez le JSON, ou supprimez les balises",
        description:
          "Cliquez sur Copier le JSON pour copier le rapport complet, sur Exporter le JSON pour enregistrer un fichier .json, ou cliquez sur Supprimer les métadonnées pour nettoyer proprement les balises privées.",
      },
    ],
    features: [
      {
        title: "Détection approfondie EXIF et GPS",
        description:
          "Analyse les tables binaires TIFF IFD0, ExifIFD et GPSIFD en JPEG, eXIf PNG et blocs EXIF WebP pour découvrir les balises cachées de position et d'appareil.",
      },
      {
        title: "Mise en évidence des risques de confidentialité",
        description:
          "Signale automatiquement les champs sensibles comme la latitude/longitude GPS, les numéros de série de l'appareil photo, les noms d'artistes et les horodatages de capture.",
      },
      {
        title: "Inspection des blocs PNG et WebP",
        description:
          "Lit la profondeur de couleur IHDR PNG, le DPI physique pHYs, les blocs tEXt/iTXt/tIME et les indicateurs d'alpha/animation VP8X WebP.",
      },
      {
        title: "Export du rapport JSON",
        description:
          "Copiez tous les champs de métadonnées analysés dans votre presse-papiers ou téléchargez un rapport JSON propre en un clic.",
      },
    ],
    faqs: [
      {
        question: "Quel type d'informations cachées cette visionneuse de métadonnées d'image peut-elle découvrir ?",
        answer:
          "Selon le format de conteneur, notre analyseur extrait localement les champs TIFF IFD0, ExifIFD et GPSIFD des en-têtes de votre image. Cela révèle des détails comme la marque et le modèle de l'appareil photo, les caractéristiques de l'objectif, la vitesse d'obturation, l'ISO, l'ouverture, les horodatages, le logiciel de retouche, les mentions de copyright et les coordonnées GPS décimales.",
      },
      {
        question: "Inspecte-t-elle aussi les en-têtes techniques PNG et WebP, en plus de l'EXIF JPEG ?",
        answer:
          "Oui, au-delà des segments EXIF JPEG standard, la visionneuse lit les blocs techniques intégrés dans les fichiers PNG et WebP. Vous pouvez voir la profondeur de bits IHDR PNG, la densité DPI physique pHYs, les blocs de texte tEXt/iTXt/tIME, les blocs eXIf PNG et les indicateurs d'alpha ou d'animation VP8X WebP.",
      },
      {
        question: "Pourquoi une photo téléchargée depuis WhatsApp ou Instagram n'affiche-t-elle aucune balise EXIF ?",
        answer:
          "Les réseaux sociaux et les applications de messagerie suppriment automatiquement les en-têtes EXIF, d'appareil photo et GPS quand vous importez des photos via leurs serveurs. Les fichiers d'origine directement depuis la pellicule de votre téléphone ou votre reflex conservent toutes les métadonnées.",
      },
      {
        question: "Comment l'outil détecte-t-il si une photo révèle ma position ?",
        answer:
          "Quand des balises rationnelles GPSIFD existent dans l'en-tête de l'image, la visionneuse convertit automatiquement les degrés, minutes et secondes en latitude et longitude décimales. Toute coordonnée détectée déclenche une bannière orange Coordonnées de position GPS détectées juste au-dessus du tableau des propriétés.",
      },
      {
        question: "Que signifient les étiquettes orange Balise de confidentialité dans le tableau des métadonnées ?",
        answer:
          "Les entrées marquées d'un badge orange Balise de confidentialité contiennent des informations personnelles ou identifiant l'appareil. Les exemples typiques incluent les coordonnées GPS, les horodatages exacts de capture, les noms de photographes/artistes, les numéros de série de l'appareil photo et les chaînes de modèle d'appareil.",
      },
      {
        question: "Puis-je supprimer les métadonnées sensibles juste après avoir inspecté une image ?",
        answer:
          "Oui, chaque fois que des balises sensibles sont détectées, un bouton orange Supprimer les métadonnées apparaît dans la barre de résumé (ainsi qu'un lien dans la boîte d'avertissement GPS). En cliquant dessus, vous accédez directement à notre outil Supprimer les métadonnées d'image.",
      },
      {
        question: "Comment fonctionne l'export JSON pour les développeurs ou la documentation ?",
        answer:
          "Cliquez sur Copier le JSON dans la barre de résumé pour placer le rapport structuré ImageMetadataReport dans votre presse-papiers immédiatement. Si vous avez besoin d'un fichier pour des audits ou des rapports de bugs, cliquez sur Exporter le JSON pour télécharger <nomdufichier>_metadata.json localement.",
      },
      {
        question: "Pourquoi les blocs EXIF binaires complets ne sont-ils pas extraits pour certains fichiers HEIC ou GIF ?",
        answer:
          "Notre analyseur binaire approfondi de blocs cible nativement les conteneurs JPEG, PNG et WebP en JavaScript. Pour les fichiers HEIC, GIF, BMP et SVG, la visionneuse rapporte avec précision les infos de conteneur, la taille du fichier et les dimensions en pixels.",
      },
      {
        question: "Les photos privées avec position GPS sont-elles envoyées quand je les inspecte ?",
        answer:
          "Non, l'inspection binaire s'exécute à 100 % localement dans votre navigateur avec l'analyse des octets File ArrayBuffer. Envoyer des photos privées non nettoyées sur Internet irait contre la vie privée, donc zéro octet ne quitte votre ordinateur ou votre téléphone.",
      },
      {
        question: "La consultation des métadonnées modifie-t-elle, compresse-t-elle ou supprime-t-elle quoi que ce soit dans mon fichier ?",
        answer:
          "Non, la visionneuse de métadonnées d'image est strictement en lecture seule. Elle lit les en-têtes depuis la mémoire du navigateur pour vous montrer ce qu'il y a à l'intérieur sans modifier votre fichier d'origine.",
      },
      {
        question: "Puis-je inspecter plusieurs fichiers d'affilée sans actualiser ?",
        answer:
          "Oui, cliquez sur l'icône de corbeille rouge (Effacer) dans la barre de résumé pour revenir à la zone d'import à tout moment. Vous pouvez ensuite déposer ou coller votre image suivante pour générer un nouveau rapport de métadonnées.",
      },
      {
        question: "Pourquoi le collage d'une capture d'écran avec Ctrl+V n'affiche-t-il généralement aucune balise d'appareil photo ?",
        answer:
          "Les presse-papiers du système d'exploitation transmettent des bitmaps bruts plutôt que les fichiers JPEG d'origine de l'appareil photo. Comme les images du presse-papiers n'ont pas d'en-têtes d'appareil photo, les captures collées montrent les dimensions du conteneur et les infos de format sans blocs EXIF ou GPS.",
      },
      {
        question: "Quelle est la taille maximale de fichier prise en charge pour l'inspection des métadonnées ?",
        answer:
          "Vous pouvez inspecter des images individuelles jusqu'à 20 Mo directement dans votre navigateur. Ce plafond couvre facilement les JPEG de reflex en pleine résolution, les exports PNG détaillés et les fichiers BMP non compressés.",
      },
      {
        question: "Comment vérifier qu'un autre outil a bien supprimé toutes les balises EXIF d'une photo ?",
        answer:
          "Déposez le fichier nettoyé dans cette visionneuse de métadonnées d'image pour inspecter ses octets bruts. Si le nettoyage a réussi, la bannière de statut verte confirme Aucune balise EXIF, GPS ou d'appareil photo cachée détectée et aucune alerte GPS n'apparaît.",
      },
      {
        question: "La visionneuse détecte-t-elle les commentaires XMP d'Adobe ou les commentaires texte PNG ?",
        answer:
          "Oui, les blocs de texte clé-valeur PNG tEXt et iTXt — comme Logiciel, Auteur, Commentaire ou Heure de création — sont extraits proprement dans le tableau des métadonnées. Tous les blocs eXIf PNG intégrés et les blocs EXIF WebP sont décodés en même temps.",
      },
      {
        question: "Que signifie le bloc pHYs sur les captures PNG ?",
        answer:
          "Le bloc pHYs PNG stocke la densité physique de pixels (DPI / pixels par mètre) destinée à la mise en page ou à l'impression. Notre visionneuse lit et convertit ces valeurs pour que vous puissiez voir si une image spécifie 72 DPI, 96 DPI ou 300 DPI.",
      },
      {
        question: "Pourquoi l'extension du nom de fichier diffère-t-elle parfois de containerFormat ?",
        answer:
          "Parfois un fichier PNG ou WebP est renommé avec une extension .jpg (ou inversement). Comme notre visionneuse inspecte les octets magiques binaires réels plutôt que de se fier au seul nom de fichier, elle rapporte le vrai format de conteneur sous-jacent.",
      },
      {
        question: "Puis-je vérifier les métadonnées d'image sur les navigateurs mobiles iPhone ou Android ?",
        answer:
          "Oui, ouvrez la page dans Safari mobile ou Chrome et choisissez une photo directement depuis votre pellicule. Vous pouvez vérifier les coordonnées GPS cachées et les détails de l'appareil photo sur votre téléphone avant de publier des images en ligne.",
      },
      {
        question: "Pourquoi ma photo de reflex a-t-elle affiché la distance focale et la vitesse d'obturation ?",
        answer:
          "Les appareils photo numériques enregistrent la télémétrie d'exposition dans le répertoire binaire ExifIFD au moment où vous appuyez sur le déclencheur. Des champs comme ISO, Nombre F, Temps d'exposition, Distance focale, Flash et Mode de mesure sont décodés localement pour que vous puissiez les lire.",
      },
      {
        question: "Y a-t-il des frais ou une inscription pour inspecter un nombre illimité de photos ?",
        answer:
          "Non, inspecter les métadonnées d'image et exporter des rapports JSON est entièrement gratuit, sans compte ni mur payant. Vous pouvez vérifier autant de photos jusqu'à 20 Mo que nécessaire, sans filigrane ni plafond quotidien.",
      },
    ],
    relatedSlugs: ["/remove-image-metadata", "/image-dimensions-checker", "/", "/image-converter"],
  },
  {
    slug: "/remove-image-metadata",
    name: "Supprimer les métadonnées d'image",
    shortDescription: "Supprimez les données EXIF, la position GPS, les infos de l'appareil et les commentaires, en privé.",
    category: "privacy",
    seoTitle: "Supprimer les métadonnées d'image – EXIF et GPS",
    seoDescription:
      "Supprimez les métadonnées d'image, dont les détails EXIF et la position GPS, dans votre navigateur. Suppression binaire sans perte pour JPG et PNG, export ZIP.",
    h1: "Supprimer les métadonnées d'image en ligne",
    subtitle:
      "Conçu pour les vendeurs de places de marché, les journalistes, les parents et les utilisateurs soucieux de leur vie privée, cet outil vous permet de supprimer définitivement les métadonnées d'image avant de partager des photos en ligne. Supprimez les modèles d'appareil photo EXIF, les coordonnées GPS, les horodatages de capture et les blocs de texte cachés localement dans votre navigateur, par suppression binaire sans perte ou par réencodage propre avec Canvas.",
    howToSteps: [
      {
        title: "Déposez les photos à nettoyer",
        description:
          "Importez une ou plusieurs images JPG, PNG, WebP ou HEIC (20 Mo maximum chacune) dans la zone d'import, ou collez-les avec Ctrl+V.",
      },
      {
        title: "Vérifiez la suppression automatique et les badges de vérification",
        description:
          "Les fichiers sont nettoyés immédiatement dès l'import et analysés à nouveau automatiquement, en affichant combien de balises de métadonnées ont été supprimées (par exemple → 0 restante).",
      },
      {
        title: "Choisissez la méthode de suppression si vous ajustez les réglages",
        description:
          "Gardez Suppression binaire sans perte (JPG/PNG) pour un réencodage de pixels nul sur les JPEG et PNG, ou choisissez Réencodage complet avec Canvas pour aplatir les pixels proprement.",
      },
      {
        title: "Définissez éventuellement le format de sortie et la qualité",
        description:
          "Sélectionnez le format de sortie Original, JPG, PNG ou WebP, ajustez la qualité de réencodage (50 %–100 %) pour le réencodage WebP/HEIC/Canvas, et cliquez sur Tout nettoyer à nouveau.",
      },
      {
        title: "Téléchargez les fichiers propres ou une archive ZIP par lots",
        description:
          "Cliquez sur Télécharger propre sur les cartes individuelles vérifiées ou cliquez sur Tout télécharger propre (ZIP) pour enregistrer clean_images_no_metadata.zip.",
      },
    ],
    features: [
      {
        title: "Vraie suppression sans perte JPEG et PNG",
        description:
          "Supprime les segments EXIF, XMP, IPTC, commentaires et blocs PNG tEXt/eXIf au niveau binaire, sans réencodage d'aucun pixel.",
      },
      {
        title: "Sortie propre vérifiée",
        description:
          "Chaque fichier de sortie est automatiquement analysé à nouveau par notre analyseur de métadonnées pour vérifier que 0 balise EXIF/GPS sensible subsiste.",
      },
      {
        title: "Nettoyage par lots et export ZIP",
        description:
          "Nettoyez tout un lot de photos avant de les publier sur des places de marché, des forums ou des annonces, et téléchargez-les ensemble en ZIP.",
      },
      {
        title: "Confidentialité 100 % sur l'appareil",
        description:
          "Les outils de confidentialité doivent être privés — vos photos d'origine avec données GPS ne quittent jamais votre navigateur.",
      },
    ],
    faqs: [
      {
        question: "Comment fonctionne la suppression binaire sans perte sans nuire à la qualité de la photo ?",
        answer:
          "Sur les fichiers JPEG et PNG conservés dans leur format d'origine, notre nettoyeur binaire analyse directement la structure du conteneur. Il supprime les segments de métadonnées (JPEG APP1–APP15/COM et PNG eXIf/tEXt/iTXt/tIME) sans décoder ni recompresser un seul pixel.",
      },
      {
        question: "Que se passe-t-il quand j'importe des fichiers WebP ou HEIC pour supprimer les métadonnées ?",
        answer:
          "La suppression binaire sans perte de segments s'applique aux entrées JPG et PNG. Pour les entrées HEIC ou WebP — ou chaque fois que vous changez de format de sortie ou choisissez Réencodage complet avec Canvas — l'outil dessine les pixels sur un nouveau HTML5 Canvas pour garantir que tous les en-têtes de métadonnées sont supprimés.",
      },
      {
        question: "Comment savoir avec certitude que la position GPS et les balises EXIF ont été supprimées ?",
        answer:
          "Après le nettoyage de chaque image, notre outil exécute une deuxième fois notre analyseur de métadonnées sur le Blob de sortie et affiche un badge émeraude (par exemple, X balises de métadonnées supprimées → 0 restante ou Propre vérifié). Rien n'est deviné.",
      },
      {
        question: "Quels types de métadonnées sont ciblés lors du nettoyage des photos ?",
        answer:
          "Le nettoyeur supprime la marque, le modèle, les détails de l'objectif, les numéros de série, les réglages d'obturation et les horodatages de capture EXIF de l'appareil photo. Il supprime aussi les balises GPS de latitude/longitude/altitude, les paquets XMP d'Adobe, les champs IPTC, les commentaires JPEG et les blocs de texte ou d'heure PNG.",
      },
      {
        question: "Quand choisir Réencodage complet avec Canvas plutôt que Suppression binaire sans perte ?",
        answer:
          "Choisissez Réencodage complet avec Canvas quand vous voulez une toute nouvelle image compressée avec zéro segment binaire hérité. Il est aussi utilisé automatiquement chaque fois que vous changez de format de sortie ou importez des photos WebP et HEIC.",
      },
      {
        question: "Quels formats d'import sont acceptés par Supprimer les métadonnées d'image ?",
        answer:
          "La zone de dépôt accepte les fichiers JPG (JPEG), PNG, WebP et HEIC/HEIF d'iPhone jusqu'à 20 Mo par fichier. De là, vous pouvez exporter des fichiers propres en format Original, JPG, PNG ou WebP.",
      },
      {
        question: "Le curseur de qualité de réencodage affecte-t-il les fichiers en suppression binaire sans perte ?",
        answer:
          "Non, la suppression binaire sans perte ignore complètement le réencodage des pixels, donc vos bits visuels JPEG/PNG restent intacts quel que soit le curseur. Le curseur de qualité de réencodage (50 %–100 %) s'applique uniquement aux entrées WebP/HEIC ou aux exports en réencodage complet avec Canvas.",
      },
      {
        question: "Puis-je supprimer les métadonnées d'un dossier entier de photos d'annonces à la fois ?",
        answer:
          "Oui, déposez plusieurs photos ensemble et attendez un instant que les badges de vérification automatique deviennent verts sur toutes les cartes. Cliquez ensuite sur Tout télécharger propre (ZIP) pour télécharger clean_images_no_metadata.zip.",
      },
      {
        question: "Mes photos non nettoyées avec coordonnées GPS sont-elles envoyées quelque part ?",
        answer:
          "Jamais — nettoyer les en-têtes sensibles GPS et d'appareil ne protège la vie privée que si cela se fait localement. Tout le découpage d'octets binaires et l'export Canvas ont lieu dans la mémoire de votre propre navigateur.",
      },
      {
        question: "Pourquoi une photo a-t-elle affiché Propre vérifié (0 balise EXIF/GPS) juste après l'import ?",
        answer:
          "Cela signifie que le fichier source ne contenait déjà aucun bloc de métadonnées EXIF, GPS ou texte (courant pour les captures d'écran ou les images téléchargées depuis des applications de messagerie). Notre nettoyeur vérifie quand même proprement la sortie.",
      },
      {
        question: "La suppression des métadonnées réduit-elle aussi la taille du fichier ?",
        answer:
          "Oui, les photos d'appareil photo contiennent souvent des miniatures d'aperçu EXIF intégrées, des blocs XML XMP d'Adobe et des segments de couleur ou de commentaire. Supprimer ceux-ci en mode Suppression binaire sans perte réduit fréquemment des dizaines de kilo-octets sans aucun changement de netteté de l'image.",
      },
      {
        question: "La suppression binaire sans perte préserve-t-elle les arrière-plans PNG transparents ?",
        answer:
          "Oui, les blocs de données d'image PNG (IDAT) et la transparence alpha restent intacts octet pour octet. Seuls les blocs de texte, EXIF et d'horodatage secondaires sont retirés du fichier.",
      },
      {
        question: "Que se passe-t-il si une photo iPhone a été pivotée via une balise d'orientation EXIF ?",
        answer:
          "Supprimer le bloc APP1 brut sans perte efface l'indicateur d'orientation, tandis que le réencodage complet avec Canvas ou le décodage HEIC intègre directement l'orientation des pixels droits dans le canevas exporté. Si un JPEG vertical semble de travers après une suppression sans perte, passez au réencodage complet avec Canvas et cliquez sur Tout nettoyer à nouveau.",
      },
      {
        question: "Puis-je convertir un PNG propre directement en WebP ou JPG tout en supprimant les métadonnées ?",
        answer:
          "Oui, choisissez JPG ou WebP sous Format de sortie, définissez la qualité de réencodage et cliquez sur Tout nettoyer à nouveau. Chaque fichier se réencode proprement via Canvas avec toutes les métadonnées supprimées et le format choisi appliqué.",
      },
      {
        question: "Mes fichiers d'origine sur le disque sont-ils modifiés ou écrasés ?",
        answer:
          "Non, les navigateurs web ne peuvent pas écraser directement les fichiers de vos dossiers locaux. Cliquer sur Télécharger propre enregistre une copie nettoyée séparée tout en laissant vos originaux intacts.",
      },
      {
        question: "Puis-je revérifier la sortie nettoyée dans un inspecteur indépendant ?",
        answer:
          "Oui, déposez n'importe quel fichier téléchargé dans notre visionneuse de métadonnées d'image juste après l'enregistrement. Elle analyse les en-têtes binaires bruts indépendamment pour que vous puissiez confirmer qu'il ne reste aucune coordonnée GPS ni balise d'appareil photo.",
      },
      {
        question: "Le nettoyeur fonctionne-t-il sur téléphone mobile avant de publier sur des places de marché ?",
        answer:
          "Oui, ouvrez la page dans Safari iOS ou Chrome Android et choisissez des photos directement depuis la pellicule de votre téléphone. Une fois les badges vérifiés verts affichés, vous pouvez télécharger les copies propres directement sur votre appareil.",
      },
      {
        question: "Puis-je coller une image du presse-papiers dans Supprimer les métadonnées d'image ?",
        answer:
          "Oui, appuyez sur Ctrl+V (ou Cmd+V sur Mac) pour déposer une image copiée ou une capture d'écran directement dans la file d'import. Elle nettoie automatiquement les blocs résiduels et prépare le téléchargement propre.",
      },
      {
        question: "Pourquoi le bouton Tout nettoyer à nouveau existe-t-il si le nettoyage démarre automatiquement ?",
        answer:
          "Les fichiers sont nettoyés immédiatement dès leur dépôt avec vos réglages actifs. Si vous changez ensuite de méthode de suppression, de format de sortie ou de qualité de réencodage, cliquer sur Tout nettoyer à nouveau applique ces options mises à jour sur tout le lot.",
      },
      {
        question: "Y a-t-il une limite de nombre de fichiers ou de coût pour supprimer les données EXIF ?",
        answer:
          "Chaque fichier importé peut peser jusqu'à 20 Mo pour que la mémoire de votre navigateur reste fluide. Au-delà de ce plafond par fichier, vous pouvez supprimer les métadonnées d'image d'un nombre illimité de photos, sans filigrane, sans inscription ni frais.",
      },
    ],
    relatedSlugs: ["/image-metadata-viewer", "/", "/image-converter", "/image-to-pdf"],
  },
  {
    slug: "/favicon-generator",
    name: "Générateur de favicon",
    shortDescription: "Générez favicon.ico, l'icône Apple Touch, les icônes Android et les fichiers manifest.",
    category: "create",
    seoTitle: "Générateur de favicon gratuit – favicon.ico et icônes",
    seoDescription:
      "Créez gratuitement un favicon.ico multi-tailles, une icône Apple Touch, des icônes Android et un site.webmanifest, avec extrait HTML, dans votre navigateur.",
    h1: "Générateur de favicon gratuit online",
    subtitle:
      "Conçu pour les développeurs web, les fondateurs de startups, les blogueurs et les créateurs indépendants, ce générateur de favicon gratuit transforme n'importe quel logo ou graphique en un pack d'icônes prêt à déployer pour navigateur et mobile. Prévisualisez votre icône sur des onglets clairs et sombres, ajustez le remplissage, le rayon des coins et le fond, et téléchargez tout localement sans aucun envoi vers un serveur.",
    howToSteps: [
      {
        title: "Importez votre logo ou graphique d'icône",
        description:
          "Déposez une image PNG, SVG, JPG, WebP ou HEIC jusqu'à 20 Mo (un PNG ou SVG carré fonctionne le mieux) ou collez-la depuis votre presse-papiers avec Ctrl+V.",
      },
      {
        title: "Choisissez le remplissage d'arrière-plan",
        description:
          "Gardez la case Transparent cochée pour des icônes découpées propres, ou décochez-la pour choisir une couleur d'arrière-plan unie hexadécimale.",
      },
      {
        title: "Ajustez le remplissage et le rayon des coins",
        description:
          "Faites glisser Remplissage entre 0 % et 25 % pour donner de l'air et déplacez Rayon des coins de 0 % à 50 % pour des carrés arrondis ou des badges circulaires.",
      },
      {
        title: "Vérifiez les aperçus d'onglet de navigateur",
        description:
          "Consultez les aperçus en direct à l'échelle 16×16 rendus dans l'onglet clair Mon site web et dans la maquette d'onglet en mode sombre.",
      },
      {
        title: "Téléchargez les fichiers individuels ou le ZIP complet",
        description:
          "Enregistrez les tailles d'icônes individuelles depuis les cartes générées ou cliquez sur Tout télécharger (ZIP) pour télécharger favicon_package_compressmypic.zip.",
      },
      {
        title: "Copiez l'extrait HTML head",
        description:
          "Cliquez sur Copier le HTML dans le panneau sombre Extrait HTML <head> et collez les balises <link> directement dans le modèle de votre site web.",
      },
    ],
    features: [
      {
        title: "Vrai favicon.ico multi-tailles",
        description:
          "Construit un véritable fichier binaire .ico intégrant des cadres nets de 16×16, 32×32 et 48×48 — pas un PNG renommé.",
      },
      {
        title: "Jeu complet d'icônes web et mobiles",
        description:
          "Génère les icônes 16×16, 32×32, 48×48, 180×180 (Apple Touch), 192×192 et 512×512 (Android/PWA) plus site.webmanifest.",
      },
      {
        title: "Aperçu d'onglet de navigateur en direct",
        description:
          "Prévisualisez l'apparence de votre icône à l'échelle réelle d'un onglet de navigateur sur des arrière-plans clairs et sombres avant le téléchargement.",
      },
      {
        title: "Extrait HTML prêt à coller",
        description:
          "Copiez les balises HTML <link> propres directement dans votre <head> en un clic.",
      },
    ],
    faqs: [
      {
        question: "Quelles tailles d'icônes et quels fichiers exacts sont regroupés dans le ZIP du favicon ?",
        answer:
          "Le téléchargement du ZIP regroupe un favicon.ico multi-cadres (16×16, 32×32 et 48×48), les fichiers séparés favicon-16x16.png, favicon-32x32.png et favicon-48x48.png, apple-touch-icon.png (180×180), android-chrome-192x192.png et android-chrome-512x512.png. Il génère aussi un fichier JSON site.webmanifest prêt à importer.",
      },
      {
        question: "Le favicon.ico est-il un vrai binaire ICO multi-cadres ou un PNG renommé ?",
        answer:
          "Notre générateur de favicon écrit un vrai conteneur binaire Windows ICONDIR avec des entrées de répertoire PNG RVBA 32 bits séparées pour les cadres 16×16, 32×32 et 48×48. Les anciens navigateurs de bureau et les raccourcis Windows choisissent automatiquement le cadre le plus net sans artefacts de rendu.",
      },
      {
        question: "Quelles dimensions et quel format source fonctionnent le mieux pour des icônes d'onglet nettes ?",
        answer:
          "Commencez avec un PNG ou un SVG autonome carré de 512×512 pixels ou plus pour que la réduction produise des bords nets à la fois en 16×16 et en 512×512. Les petites sources basse résolution étirées jusqu'aux icônes d'écran de démarrage PWA 512×512 peuvent paraître floues.",
      },
      {
        question: "Que se passe-t-il si j'importe un logo rectangulaire au lieu d'un logo carré ?",
        answer:
          "Les graphiques rectangulaires sont centrés proportionnellement dans chaque canevas d'icône carré sans étirer ni écraser votre marque. L'espace vide en haut/bas ou à gauche/droite est rempli par la transparence ou par la couleur d'arrière-plan sélectionnée.",
      },
      {
        question: "Pourquoi le générateur affiche-t-il des aperçus d'onglet clairs et sombres ?",
        answer:
          "Les icônes sombres peuvent disparaître sur les onglets de navigateur en mode sombre, tandis que les logos blancs disparaissent sur les thèmes clairs. Voir côte à côte l'onglet clair Mon site web et l'onglet en mode sombre vous permet d'ajouter du remplissage ou un fond uni avant le déploiement.",
      },
      {
        question: "Comment le remplissage et le rayon des coins fonctionnent-ils ensemble sur une icône d'application ?",
        answer:
          "Le remplissage (0 % à 25 %) réduit légèrement votre logo vers l'intérieur depuis la limite du carré pour que les coins arrondis ne coupent pas les bords du graphique. Monter le rayon des coins vers 20 % crée des squircles façon iOS, tandis que 50 % découpe toute l'icône en un cercle complet.",
      },
      {
        question: "Les icônes Apple Touch doivent-elles utiliser un arrière-plan uni plutôt que transparent ?",
        answer:
          "Safari iOS compose souvent les zones transparentes d'apple-touch-icon.png sur du noir quand les utilisateurs épinglent un site sur leur écran d'accueil. Si votre logo utilise des formes sombres, décochez Transparent sous Remplissage d'arrière-plan et choisissez du blanc ou la couleur de votre marque.",
      },
      {
        question: "Qu'est-ce qui est inclus dans le fichier site.webmanifest généré ?",
        answer:
          "Le JSON du manifest déclare les chemins vers /android-chrome-192x192.png et /android-chrome-512x512.png, définit display sur standalone et synchronise theme_color et background_color avec votre remplissage d'arrière-plan choisi. Vous pouvez l'ouvrir dans n'importe quel éditeur de texte pour personnaliser le nom de votre site.",
      },
      {
        question: "Où dois-je importer les fichiers favicon générés sur mon site web ?",
        answer:
          "Placez favicon.ico, toutes les icônes PNG générées et site.webmanifest dans le répertoire public racine de votre site pour que des URL comme /favicon.ico et /apple-touch-icon.png se résolvent proprement. Collez ensuite l'extrait HTML <head> copié dans la section <head> principale de votre HTML.",
      },
      {
        question: "Puis-je télécharger uniquement favicon.ico ou apple-touch-icon.png sans le ZIP ?",
        answer:
          "Oui, chaque taille d'icône apparaît comme sa propre carte d'aperçu affichant les dimensions exactes et la taille en octets, avec un bouton Télécharger dédié. Vous pouvez récupérer des ressources individuelles ou cliquer sur Tout télécharger (ZIP) pour le pack complet.",
      },
      {
        question: "L'import d'un logo SVG crée-t-il des icônes 16×16 nettes ?",
        answer:
          "Oui, les vecteurs SVG en ligne se convertissent directement dans le navigateur sur chaque grille de pixels cible de 16×16 à 512×512. Assurez-vous simplement que votre SVG utilise des formes et des couleurs intégrées plutôt que des images liées externes ou des polices web distantes.",
      },
      {
        question: "Puis-je convertir une photo HEIC d'iPhone ou un graphique WebP en favicon de site ?",
        answer:
          "Oui, la zone de dépôt accepte les fichiers PNG, SVG, JPG, WebP, GIF, BMP et HEIC/HEIF d'iPhone jusqu'à 20 Mo. Les images HEIC se décodent localement dans votre navigateur avant la construction du pack d'icônes.",
      },
      {
        question: "Les logos de marque ou les icônes d'application non publiées sont-ils envoyés vers des serveurs externes ?",
        answer:
          "Non, le redimensionnement Canvas, l'emballage binaire ICO, la génération du manifest et l'archivage ZIP s'exécutent strictement dans votre propre onglet de navigateur. Vos marques non publiées ne traversent aucun réseau.",
      },
      {
        question: "Pourquoi mon ancien favicon apparaissait-il toujours dans Chrome après l'import des nouveaux fichiers ?",
        answer:
          "Les navigateurs mettent en cache les favicons de façon agressive pendant des jours, même après le remplacement des fichiers sur votre serveur. Une actualisation forcée avec Ctrl+Maj+R (ou l'ouverture d'une fenêtre de navigation privée) oblige votre navigateur à récupérer le nouveau favicon.ico et les nouvelles icônes PNG.",
      },
      {
        question: "Les changements de remplissage, de rayon des coins ou de fond mettent-ils à jour toutes les tailles à la fois ?",
        answer:
          "Oui, déplacer n'importe quel curseur ou basculer le remplissage d'arrière-plan reconstruit immédiatement favicon.ico, les six dimensions d'icônes PNG, les aperçus d'onglet clair/sombre et site.webmanifest ensemble. Vous n'avez jamais besoin de réimporter votre logo entre les ajustements.",
      },
      {
        question: "L'extrait HTML <head> fonctionne-t-il avec React, Next.js ou les sites HTML simples ?",
        answer:
          "Oui, les balises standard <link rel=\"icon\">, <link rel=\"apple-touch-icon\"> et <link rel=\"manifest\"> fonctionnent sur les sites HTML statiques, les en-têtes WordPress, index.html de Vite/React et les modèles serveur. Collez-les simplement dans <head> et placez les fichiers à la racine de votre site.",
      },
      {
        question: "Puis-je créer un favicon circulaire à partir d'un avatar ou d'un badge carré ?",
        answer:
          "Oui, gardez Transparent coché sous Remplissage d'arrière-plan et faites glisser Rayon des coins jusqu'à 50 %. Toutes les icônes PNG et les cadres favicon.ico intégrés se découpent proprement en un cercle lisse anticrénelé.",
      },
      {
        question: "Pourquoi 192×192 et 512×512 sont-ils requis en plus de favicon.ico ?",
        answer:
          "Chrome Android moderne et les invites d'installation des Progressive Web Apps recherchent des icônes d'écran d'accueil 192×192 et des icônes d'écran de démarrage 512×512 déclarées dans site.webmanifest. Inclure les deux garantit que les raccourcis mobiles sont nets aux côtés des onglets de navigateur de bureau classiques.",
      },
      {
        question: "Puis-je coller un graphique de logo directement depuis mon presse-papiers dans l'outil favicon ?",
        answer:
          "Oui, copiez une image ou une capture d'écran dans votre presse-papiers et appuyez sur Ctrl+V (ou Cmd+V sur Mac) sur la page. Elle alimente immédiatement le générateur et restitue le jeu complet d'icônes.",
      },
      {
        question: "Y a-t-il un filigrane, une exigence de compte ou un coût pour générer des packs de favicon ?",
        answer:
          "Non, le générateur de favicon est 100 % gratuit pour les sites web personnels et commerciaux, sans filigrane, sans compte ni limite quotidienne de génération. Seul un plafond de fichier source de 20 Mo s'applique pour que la mémoire du navigateur reste rapide.",
      },
    ],
    relatedSlugs: ["/image-resizer", "/image-converter", "/image-color-picker", "/"],
  },
  {
    slug: "/image-color-picker",
    name: "Sélecteur de couleurs d'image",
    shortDescription: "Prélevez les couleurs exactes de chaque pixel d'une image en HEX, RGB, HSL et CMYK.",
    category: "developer",
    seoTitle: "Sélecteur de couleurs d'image – Codes HEX, RGB, HSL",
    seoDescription:
      "Prélevez les couleurs exactes des pixels avec notre sélecteur de couleurs en ligne. Valeurs HEX, RGB, HSL et CMYK, loupe en direct et export des variables CSS.",
    h1: "Sélecteur de couleurs d'image gratuit online",
    subtitle:
      "Conçu pour les webdesigners, les développeurs frontend, les stylistes de marque et les illustrateurs, notre sélecteur de couleurs d'image dans le navigateur échantillonne les pixels RVBA exacts de n'importe quelle photo, logo ou capture d'écran. Survolez pour inspecter une loupe agrandie 11×11 avec lecture HEX en direct, cliquez sur les pixels pour enregistrer des échantillons et exportez les propriétés personnalisées CSS sans importer vos fichiers.",
    howToSteps: [
      {
        title: "Importez une image ou collez une capture d'écran",
        description:
          "Déposez un fichier JPG, PNG, WebP, HEIC, SVG, BMP ou GIF jusqu'à 20 Mo, ou appuyez sur Ctrl+V pour coller une capture d'écran directement depuis votre presse-papiers.",
      },
      {
        title: "Survolez avec la loupe en direct Inspecteur de pixels",
        description:
          "Déplacez votre curseur sur le canevas de l'image pour voir les coordonnées exactes (x, y) des pixels et une grille de zoom 11×11 avec réticule qui met à jour l'échantillon en temps réel.",
      },
      {
        title: "Cliquez sur les pixels pour épingler et créer des échantillons",
        description:
          "Cliquez sur n'importe quel point du canevas pour verrouiller sa couleur dans l'Inspecteur de pixels et l'ajouter aux Échantillons choisis (jusqu'à 24 couleurs uniques).",
      },
      {
        title: "Copiez les valeurs HEX, RGB, HSL ou CMYK",
        description:
          "Cliquez sur l'icône de copie à côté de HEX, RGB, HSL ou CMYK dans l'Inspecteur de pixels — ou cliquez sur n'importe quelle pastille d'échantillon enregistrée — pour copier immédiatement le code.",
      },
      {
        title: "Exportez votre palette en variables CSS",
        description:
          "Cliquez sur Exporter le CSS dans la carte Échantillons choisis pour télécharger picked-colors.css avec des propriétés personnalisées :root propres, prêtes pour votre feuille de style.",
      },
    ],
    features: [
      {
        title: "Loupe de pixels agrandie en direct",
        description:
          "La grille de zoom avec réticule vous permet de cibler des pixels exacts avec précision, aussi bien avec une souris de bureau que sur écran tactile mobile.",
      },
      {
        title: "4 formats de couleur instantanément",
        description:
          "Affiche simultanément les représentations HEX, RGB, HSL et CMYK pour les développeurs web et les graphistes.",
      },
      {
        title: "Historique des échantillons enregistrés et export",
        description:
          "Cliquez sur plusieurs zones de votre image pour créer une liste d'échantillons personnalisée et copiez-la en propriétés personnalisées CSS ou en JSON.",
      },
      {
        title: "Échantillonnage 100 % local avec Canvas",
        description:
          "Les valeurs de pixels sont lues localement via HTML5 Canvas getImageData — vos designs et captures d'écran restent complètement privés.",
      },
    ],
    faqs: [
      {
        question: "Ce sélecteur de couleurs d'image échantillonne-t-il à partir du fichier en pleine résolution ou d'un aperçu réduit ?",
        answer:
          "Chaque survol et chaque clic mappe les coordonnées du pointeur proportionnellement sur un Canvas HTML5 hors écran en pleine résolution correspondant aux vraies naturalWidth × naturalHeight de votre image. Même si une grande photo 4K est réduite visuellement pour tenir sur votre écran, getImageData lit le pixel sous-jacent exact.",
      },
      {
        question: "Comment la loupe agrandie 11×11 aide-t-elle à cibler les lignes fines ou les petites icônes ?",
        answer:
          "En vous déplaçant sur le canevas, une loupe zoomée 88×88 en plus proche voisin affiche une grille de pixels 11×11 autour de votre curseur avec un réticule à double contour sur le pixel actif exact. Cela évite d'échantillonner accidentellement des pixels de bord anticrénelés à côté des bords nets.",
      },
      {
        question: "Quels formats de codes couleur sont calculés automatiquement pour chaque pixel prélevé ?",
        answer:
          "L'Inspecteur de pixels convertit simultanément le triplet RGB échantillonné en HEX majuscule (#RRGGBB), en rgb(r, g, b) CSS, en hsl(h, s%, l%) CSS et en valeurs CMYK en pourcentage. Chaque ligne a son propre bouton de copie en un clic.",
      },
      {
        question: "Combien de couleurs puis-je collecter dans Échantillons choisis à la fois ?",
        answer:
          "Cliquer sur différentes parties de votre photo stocke jusqu'à 24 échantillons HEX uniques par ordre chronologique (en ignorant automatiquement les doublons). Cliquer sur n'importe quelle pastille d'échantillon enregistrée la restaure dans l'inspecteur et copie son code HEX directement dans votre presse-papiers.",
      },
      {
        question: "Que télécharge le bouton Exporter le CSS ?",
        answer:
          "Cliquer sur Exporter le CSS génère une feuille de style picked-colors.css contenant un bloc :root avec des propriétés personnalisées numérotées (--color-1, --color-2, etc.) et des commentaires RGB en ligne pour chaque couleur des Échantillons choisis. Si vous n'avez pas encore cliqué sur plusieurs pixels, il exporte votre pixel actuellement sélectionné.",
      },
      {
        question: "Pourquoi une couleur est-elle déjà affichée dès le chargement d'une image ?",
        answer:
          "Au chargement initial, l'inspecteur échantillonne automatiquement le pixel central exact de votre image importée pour que vous voyiez immédiatement les lectures HEX, RGB, HSL et CMYK en direct avant de bouger la souris. Bouger ou cliquer n'importe où met à jour ces lectures instantanément.",
      },
      {
        question: "Puis-je coller une capture d'écran directement avec Ctrl+V pour échantillonner les couleurs de l'interface ?",
        answer:
          "Oui, copiez un extrait de page web, une interface d'application ou une maquette de design dans votre presse-papiers et appuyez sur Ctrl+V (ou Cmd+V sur Mac) pendant que la zone d'import est ouverte. Elle se charge directement sur le canevas d'échantillonnage sans enregistrer d'abord un fichier temporaire.",
      },
      {
        question: "Quels types de fichiers puis-je inspecter avec l'outil pipette ?",
        answer:
          "Vous pouvez charger des images JPG, PNG, WebP, HEIC/HEIF d'iPhone, SVG, BMP et GIF jusqu'à 20 Mo chacune. Les SVG vectoriels se convertissent proprement sur Canvas pour que vous puissiez échantillonner les couleurs de remplissage rendues exactes directement.",
      },
      {
        question: "Quelle est la précision des valeurs CMYK affichées dans l'Inspecteur de pixels ?",
        answer:
          "Les pourcentages CMYK sont calculés mathématiquement à partir des valeurs de pixels sRGB en utilisant des formules standard de conversion RGB vers CMYK. Pour l'impression offset commerciale nécessitant des profils ICC stricts, considérez-les comme des approximations de départ utiles plutôt que comme des épreuves d'encre calibrées.",
      },
      {
        question: "Que se passe-t-il si j'échantillonne une zone transparente sur un logo PNG ?",
        answer:
          "HTML5 Canvas lit les canaux rouge, vert et bleu à cette coordonnée — les pixels Canvas entièrement transparents valent par défaut 0, 0, 0 (#000000) quand les canaux RGB sont vides. Échantillonnez directement sur des traits ou des formes opaques pour inspecter les vraies couleurs de votre œuvre.",
      },
      {
        question: "Les maquettes d'interface privées ou les ressources de marque des clients sont-elles envoyées vers un serveur ?",
        answer:
          "Non, la lecture des pixels via Canvas getImageData s'exécute strictement dans la mémoire locale de votre navigateur. Les designs non publiés, les captures confidentielles et les photos personnelles ne quittent jamais votre ordinateur ou votre téléphone.",
      },
      {
        question: "Le sélecteur de couleurs fonctionne-t-il sur Chrome, Safari et Firefox sans extension de navigateur ?",
        answer:
          "Oui, contrairement à l'API EyeDropper expérimentale du navigateur qui ne fonctionne que sur Chromium de bureau, notre échantillonneur HTML5 Canvas fonctionne sur Firefox, Safari, Edge et Chrome. Aucune extension de navigateur, aucune autorisation spéciale ni aucun plugin n'est requis.",
      },
      {
        question: "Comment passer à une autre photo après avoir choisi des échantillons ?",
        answer:
          "Cliquez sur le bouton Nouvelle image dans le coin supérieur droit de l'en-tête du canevas à tout moment. Cela efface l'image active, réinitialise proprement la liste des Échantillons choisis et vous ramène à la zone d'import.",
      },
      {
        question: "Puis-je inspecter les coordonnées exactes des pixels en même temps que la valeur de couleur ?",
        answer:
          "Oui, l'en-tête de l'Inspecteur de pixels affiche les coordonnées x et y en direct (par exemple, x:412, y:198) en police monospace quand vous survolez le canevas. Cela aide à faire correspondre des pixels précis de façon cohérente sur de grands fichiers.",
      },
      {
        question: "Pourquoi cliquer sur une couleur dans une photo JPEG varie-t-il légèrement entre pixels adjacents ?",
        answer:
          "La compression JPEG utilise le sous-échantillonnage de chrominance et des transformations par blocs qui introduisent de légères variations de pixel à pixel sur les surfaces planes. Utiliser la loupe 11×11 vous permet de choisir un pixel représentatif propre, loin des bords compressés.",
      },
      {
        question: "Puis-je toucher les couleurs avec précision sur un iPad ou un smartphone tactile ?",
        answer:
          "Oui, toucher n'importe quelle zone du canevas sur mobile déclenche l'échantillonneur à l'endroit touché, épingle l'échantillon, met à jour les quatre formats de couleur et ajoute le code HEX aux Échantillons choisis. Vous pouvez aussi toucher n'importe quelle pastille d'échantillon enregistrée pour la copier.",
      },
      {
        question: "Cet outil remplace-t-il mes échantillons enregistrés si je clique deux fois sur la même couleur hex ?",
        answer:
          "Non, Échantillons choisis vérifie automatiquement les chaînes HEX correspondantes et ignore les doublons. Cela garde votre palette collectée bien rangée même si vous échantillonnez plusieurs fois le même arrière-plan ou la même couleur de marque.",
      },
      {
        question: "Pourquoi utiliser HSL en plus de HEX et RGB pour styliser les sites web ?",
        answer:
          "HSL (teinte, saturation, luminosité) permet aux développeurs CSS de dériver facilement des états de survol plus clairs ou des bordures plus sombres en ajustant uniquement le pourcentage de luminosité tout en gardant la teinte constante. Avoir à la fois HEX et HSL côte à côte évite la conversion manuelle.",
      },
      {
        question: "Quelle est la taille maximale de fichier image autorisée dans le sélecteur de couleurs ?",
        answer:
          "Les images individuelles importées peuvent peser jusqu'à 20 Mo. Ce plafond gère facilement les photos d'appareil photo à plusieurs mégapixels, les grands exports PNG Figma et les captures d'écran de page entière.",
      },
      {
        question: "Y a-t-il un coût, un compte ou une limite sur le nombre de couleurs que je peux échantillonner ?",
        answer:
          "Non, le sélecteur de couleurs d'image est entièrement gratuit, sans compte ni mur payant. Vous pouvez importer un nombre illimité d'images et exporter des palettes de couleurs CSS sans filigrane.",
      },
    ],
    relatedSlugs: ["/favicon-generator", "/image-dimensions-checker", "/image-resizer", "/"],
  },
  {
    slug: "/image-dimensions-checker",
    name: "Vérificateur de dimensions d'image",
    shortDescription: "Vérifiez la largeur, la hauteur, le ratio, les mégapixels et la taille d'impression.",
    category: "developer",
    seoTitle: "Vérificateur de dimensions d'image gratuit en ligne",
    seoDescription:
      "Vérifiez gratuitement les dimensions d'une image en ligne : largeur, hauteur, ratio, mégapixels, transparence et taille d'impression à 300 DPI, par lots.",
    h1: "Vérificateur de dimensions d'image et de ratio",
    subtitle:
      "Idéal pour les responsables e-commerce, les acheteurs publicitaires, les développeurs d'interfaces et les graphistes print, notre vérificateur de dimensions d'image lit la largeur et la hauteur en pixels, le ratio, les mégapixels et la taille d'impression à 300 DPI en quelques secondes. Déposez des lots entiers d'images, validez les exigences minimales en pixels et exportez des rapports CSV ou JSON propres, en privé, sur votre appareil.",
    howToSteps: [
      {
        title: "Déposez ou sélectionnez une ou plusieurs images",
        description:
          "Importez des fichiers JPG, PNG, WebP, HEIC, SVG, BMP, GIF ou AVIF jusqu'à 20 Mo chacun dans la zone de dépôt, ou collez-les avec Ctrl+V.",
      },
      {
        title: "Inspectez les dimensions en pixels et les ratios",
        description:
          "Consultez la largeur × hauteur exacte (px), les mégapixels, l'orientation (Paysage, Portrait, Carré) et le ratio simplifié ou décimal dans le tableau.",
      },
      {
        title: "Vérifiez le poids, le format et le canal Alpha",
        description:
          "Consultez les valeurs de la colonne Taille / Format pour repérer le vrai type de conteneur détecté, le nombre d'octets et la présence éventuelle de pixels Alpha transparents.",
      },
      {
        title: "Consultez la taille d'impression estimée à 300 DPI",
        description:
          "Regardez la colonne Impression à 300 DPI pour connaître les dimensions physiques maximales nettes en pouces (L × H) avant d'envoyer vos fichiers à un imprimeur.",
      },
      {
        title: "Lancez les vérifications minimales et exportez en CSV ou JSON",
        description:
          "Saisissez des règles facultatives de largeur minimale (px) et de hauteur minimale (px) pour signaler Réussi ou Sous le minimum, puis cliquez sur Exporter CSV ou Exporter JSON.",
      },
    ],
    features: [
      {
        title: "Inspection de dimensions par lots",
        description:
          "Vérifiez des dizaines d'images à la fois — idéal pour contrôler les photos produits d'une boutique, les visuels publicitaires ou les captures d'écran d'une application.",
      },
      {
        title: "Ratios exacts et courants",
        description:
          "Calcule à la fois le ratio simplifié mathématiquement et les standards courants comme 16:9, 4:3, 1:1 et 4:5.",
      },
      {
        title: "Validateur min/max personnalisé",
        description:
          "Définissez des règles facultatives de largeur et de hauteur minimales ou maximales pour mettre en évidence les images conformes ou non à vos spécifications.",
      },
      {
        title: "Export CSV et JSON",
        description:
          "Téléchargez un tableur CSV propre ou un résumé JSON de toutes les dimensions d'image inspectées.",
      },
    ],
    faqs: [
      {
        question: "L'utilisation de ce vérificateur de dimensions modifie-t-elle ou réenregistre-t-elle mes images ?",
        answer:
          "Non, le vérificateur lit uniquement les dimensions naturelles en pixels, le poids du fichier et les propriétés du conteneur dans la mémoire du navigateur. Rien n'est compressé, recadré, écrasé ni envoyé vers des serveurs externes.",
      },
      {
        question: "Quels formats de fichier puis-je inspecter par lots ?",
        answer:
          "Vous pouvez déposer des images JPG, PNG, WebP, HEIC/HEIF d'iPhone, SVG, BMP, GIF et AVIF pris en charge par le navigateur, jusqu'à 20 Mo par fichier. Des formats différents peuvent être déposés ensemble dans le même tableau.",
      },
      {
        question: "Comment fonctionnent les vérifications de largeur minimale et de hauteur minimale ?",
        answer:
          "Saisir un seuil en pixels dans Largeur minimale (px) ou Hauteur minimale (px) ajoute une colonne Vérification des spécifications en direct au tableau. Chaque ligne affiche immédiatement un badge vert Réussi ou une alerte orange Sous le minimum, pour repérer vite les visuels trop petits.",
      },
      {
        question: "Comment les ratios courants comme 16:9 ou 4:5 sont-ils reconnus par rapport aux ratios exacts ?",
        answer:
          "Le calculateur commence par réduire mathématiquement le ratio largeur:hauteur grâce au plus grand commun diviseur, avec le ratio décimal (par exemple 1,78:1). Quand une image correspond ou s'approche d'un format standard comme 16:9, 4:3, 3:2, 1:1, 4:5 ou 9:16, il affiche directement cette étiquette reconnaissable.",
      },
      {
        question: "Comment la dimension d'impression à 300 DPI est-elle calculée à partir des pixels ?",
        answer:
          "La largeur et la hauteur d'impression en pouces se calculent en divisant la largeur et la hauteur en pixels par 300 pixels par pouce (par exemple, 3000 × 2400 px donnent 10 × 8 pouces à 300 DPI). Le JSON exporté conserve aussi les équivalents d'impression à 72 DPI pour l'écran.",
      },
      {
        question: "Quelles colonnes sont incluses quand je clique sur Exporter CSV ?",
        answer:
          "Cliquer sur Exporter CSV télécharge image-dimensions-report.csv avec dix colonnes structurées : Nom du fichier, Largeur (px), Hauteur (px), Orientation, Ratio, Mégapixels, Taille du fichier (octets), Format, Transparence et Taille d'impression à 300 DPI. Les noms de fichier contenant des virgules ou des guillemets sont correctement échappés pour le CSV.",
      },
      {
        question: "Que sauvegarde l'export JSON par rapport au CSV ?",
        answer:
          "Exporter JSON écrit un tableau formaté image-dimensions-report.json contenant des objets de métadonnées propres pour chaque ligne inspectée (sans les URL d'aperçu internes ni les identifiants temporaires de ligne). Les développeurs et les scripts de contrôle qualité peuvent l'utiliser directement dans des vérifications automatisées.",
      },
      {
        question: "Comment le vérificateur détecte-t-il si un PNG ou un WebP possède vraiment une transparence Alpha ?",
        answer:
          "Au lieu de se fier à l'extension du fichier, le chargeur analyse les octets alpha des pixels sur le canevas pour vérifier si un pixel a une opacité inférieure à 255. Les images avec de vraies zones transparentes affichent une étiquette Alpha juste sous leur format.",
      },
      {
        question: "Puis-je ajouter d'autres dossiers ou lots à un tableau de dimensions existant ?",
        answer:
          "Oui, déposer ou parcourir d'autres images ajoute de nouvelles lignes en bas de votre tableau existant sans effacer les entrées précédentes. Cliquez sur Effacer quand vous voulez réinitialiser le tableau pour un nouveau projet.",
      },
      {
        question: "Pourquoi les photos d'iPhone affichent-elles correctement Paysage ou Portrait ici ?",
        answer:
          "Les navigateurs modernes normalisent automatiquement la rotation EXIF de l'appareil photo quand ils décodent les images JPEG et HEIC en dimensions naturelles. Une photo verticale prise avec un smartphone est donc bien signalée comme Portrait, avec les bonnes limites en pixels.",
      },
      {
        question: "Comment les mégapixels (MP) sont-ils calculés pour mes images ?",
        answer:
          "Les mégapixels correspondent à (Largeur × Hauteur) divisé par 1 000 000, arrondi à deux décimales (par exemple, 1920 × 1080 = 2,07 MP). Cela correspond à la façon standard de présenter les capteurs d'appareils photo et les places de marché d'impression.",
      },
      {
        question: "Que se passe-t-il si j'importe un fichier avec une extension trompeuse, comme un WebP nommé .jpg ?",
        answer:
          "Notre inspecteur lit le type binaire réel résolu pendant le décodage plutôt que de se fier aveuglément au suffixe du nom de fichier. Vous verrez le vrai format détecté ainsi que le poids exact en octets dans la colonne Taille / Format.",
      },
      {
        question: "Puis-je aussi vérifier les dimensions intrinsèques des graphiques SVG ?",
        answer:
          "Oui, les fichiers SVG autonomes avec des attributs width/height ou un viewBox se décodent nativement dans le navigateur. Le tableau des dimensions lit proprement leur largeur et leur hauteur en pixels rendus, ainsi que leur ratio.",
      },
      {
        question: "Les visuels publicitaires non publiés ou les photos produits confidentielles sont-ils envoyés en ligne ?",
        answer:
          "Jamais — tout le décodage des images, la détection de transparence, la vérification des spécifications et la génération CSV/JSON s'exécutent dans votre propre onglet de navigateur. Aucun octet ne quitte votre appareil.",
      },
      {
        question: "Puis-je coller directement une image du presse-papiers pour vérifier sa résolution en pixels ?",
        answer:
          "Oui, appuyez sur Ctrl+V (ou Cmd+V sur Mac) pour ajouter une capture d'écran ou un visuel copié directement dans le tableau des dimensions. Vous pouvez lire immédiatement sa taille exacte en pixels, son nombre de mégapixels et son ratio.",
      },
      {
        question: "Pourquoi une image produit Amazon, Etsy ou Shopify peut-elle échouer à la vérification de largeur minimale ?",
        answer:
          "De nombreuses places de marché exigent au moins 1000 ou 1200 px sur le côté le plus court ou le plus long pour activer l'aperçu zoomé. Saisir 1200 dans Largeur minimale vous permet d'auditer tout un catalogue de produits avant l'envoi.",
      },
      {
        question: "Que se passe-t-il si un fichier illisible est mélangé à un gros lot déposé ?",
        answer:
          "Si un fichier dépasse la limite de 20 Mo ou ne peut pas être décodé par le navigateur, la zone d'import signale ou ignore cet élément invalide sans bloquer le reste. Chaque image valide du même dépôt s'affiche normalement dans votre tableau des dimensions.",
      },
      {
        question: "Puis-je utiliser ce vérificateur de dimensions sur un téléphone ou une tablette ?",
        answer:
          "Oui, ouvrez l'outil dans Safari sur iOS ou Chrome sur Android, choisissez des photos dans votre galerie et inspectez les dimensions exactes en pixels et les mégapixels en déplacement. Le tableau défile horizontalement sur les écrans étroits pour qu'aucune colonne ne soit coupée.",
      },
      {
        question: "Comment corriger une image qui échoue à ma vérification minimale ou qui a un mauvais ratio ?",
        answer:
          "Cliquez sur les cartes liées Redimensionneur d'image ou Recadreur d'image dans Outils d'image gratuits associés sous le guide. Vous pouvez recadrer à un ratio exact de 16:9, 4:5 ou 1:1, ou ajuster les dimensions directement dans votre navigateur.",
      },
      {
        question: "Y a-t-il une limite quotidienne ou des frais pour les rapports de dimensions par lots ?",
        answer:
          "Non, inspecter un nombre illimité de lots d'images jusqu'à 20 Mo par fichier est entièrement gratuit. Vous pouvez télécharger des rapports CSV et JSON aussi souvent que nécessaire, sans compte ni filigrane.",
      },
    ],
    relatedSlugs: ["/image-resizer", "/image-metadata-viewer", "/image-color-picker", "/"],
  },
  {
    slug: "/image-cropper",
    name: "Recadreur d'image",
    shortDescription: "Recadrez des photos avec des poignées, des ratios et un zoom interactifs.",
    category: "crop-edit",
    seoTitle: "Recadrer une image en ligne gratuit – Ratios et zoom",
    seoDescription:
      "Recadrez une image en ligne gratuitement : poignées interactives, ratios de 1:1 à 16:9 et zoom jusqu'à 300 %. JPG, PNG, WebP et HEIC, en local, sans envoi.",
    h1: "Recadreur d'image en ligne gratuit",
    subtitle:
      "Conçu pour les créateurs de contenu, les designers, les étudiants et les vendeurs e-commerce, notre recadreur d'image interactif vous permet de cadrer et de rogner vos photos avec précision directement dans votre navigateur. Verrouillez les ratios populaires de 1:1 à 16:9, zoomez jusqu'à 300 % pour des bords nets, et exportez des recadrages propres en local, sans aucun envoi.",
    howToSteps: [
      {
        title: "Importez une image à recadrer",
        description:
          "Déposez une image JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu'à 20 Mo dans la zone de dépôt, parcourez votre appareil ou collez-la avec Ctrl+V.",
      },
      {
        title: "Choisissez un ratio prédéfini",
        description:
          "Gardez Libre pour un rognage sans contrainte, ou cliquez sur 1:1, 4:3, 16:9, 3:2, 4:5 ou 9:16 sous Ratio prédéfini pour verrouiller le cadrage.",
      },
      {
        title: "Faites glisser le cadre et les poignées de redimensionnement",
        description:
          "Déplacez le cadre de recadrage sur votre sujet à l'aide de la grille des tiers et tirez l'une des 8 poignées de bord ou de coin tout en suivant la largeur et la hauteur du recadrage en direct.",
      },
      {
        title: "Zoomez ou réinitialisez le canevas complet",
        description:
          "Utilisez les boutons de zoom (de 100 % à 300 % par pas de 25 %) pour un alignement précis des bords, ou cliquez sur Tout sélectionner pour revenir à l'image entière.",
      },
      {
        title: "Choisissez le format de sortie et la qualité",
        description:
          "Choisissez le format Original, JPG, PNG ou WebP, et ajustez le curseur Qualité (de 10 % à 100 %) quand vous enregistrez dans un format avec perte.",
      },
      {
        title: "Recadrez et téléchargez votre fichier",
        description:
          "Cliquez sur Recadrer et télécharger pour générer le rectangle sélectionné à la pleine résolution source et l'enregistrer avec ses dimensions dans le nom de fichier.",
      },
    ],
    features: [
      {
        title: "Poignées de déplacement et de redimensionnement interactives",
        description:
          "Des poignées fluides à la souris et au tactile vous permettent de recadrer n'importe quelle zone jusqu'au pixel exact.",
      },
      {
        title: "Ratios prédéfinis",
        description:
          "Basculez entre Libre, 1:1 Carré, 4:3, 16:9, 3:2, 4:5 Instagram et 9:16 Story.",
      },
      {
        title: "Zoom et lecture des dimensions en direct",
        description:
          "Zoomez pour un cadrage serré et voyez la largeur × hauteur exacte de sortie en temps réel.",
      },
      {
        title: "Traitement 100 % privé et local",
        description:
          "Vos photos sont recadrées sur votre appareil via le canevas HTML5, sans aucun envoi vers un serveur.",
      },
    ],
    faqs: [
      {
        question: "Le recadrage réduit-il la qualité à l'intérieur du rectangle sélectionné ?",
        answer:
          "Non, le recadreur extrait les coordonnées sélectionnées directement à partir de la pleine résolution d'origine stockée dans la mémoire du navigateur, et non à partir de l'aperçu réduit. En enregistrant en PNG sans perte, les pixels à l'intérieur de votre recadrage restent identiques à la source.",
      },
      {
        question: "Quels ratios prédéfinis sont intégrés aux options de recadrage ?",
        answer:
          "Vous pouvez basculer entre Libre (n'importe quel rectangle), 1:1 (avatars carrés), 4:3, 16:9 (grand écran/YouTube), 3:2 (standard reflex), 4:5 (portrait Instagram) et 9:16 (Stories/Reels). Cliquer sur un préréglage centre automatiquement un cadre correspondant.",
      },
      {
        question: "Comment les 8 poignées de redimensionnement se comportent-elles quand un ratio prédéfini est actif ?",
        answer:
          "Les quatre poignées de coin et les poignées de bord conservent automatiquement la proportion sélectionnée tout en restant bien à l'intérieur des bords de l'image. Pour ajuster à nouveau la largeur et la hauteur indépendamment, cliquez simplement sur le préréglage Libre.",
      },
      {
        question: "À quoi sert la grille des tiers à l'intérieur du cadre de sélection ?",
        answer:
          "La grille discrète 3×3 divise votre cadre de recadrage en tiers pour vous aider à aligner horizons, yeux ou centres de produits avec précision pendant le déplacement. C'est uniquement un guide visuel à l'écran, qui n'apparaît jamais dans votre image exportée.",
      },
      {
        question: "Jusqu'où puis-je zoomer pour un cadrage détaillé ?",
        answer:
          "Utilisez les boutons Zoom avant (+) et Zoom arrière (-) dans la barre de la zone d'affichage pour zoomer en douceur de 100 % à 300 % par pas de 25 %. Au-delà de 100 %, faites défiler l'intérieur de l'aperçu pour rogner les bords fins.",
      },
      {
        question: "Que fait le bouton Tout sélectionner dans les options de recadrage ?",
        answer:
          "Cliquer sur Tout sélectionner remet le ratio sur Libre, étend le cadre de recadrage pour couvrir 100 % de la largeur et de la hauteur de votre image, et réinitialise le zoom à 100 %. Vous repartez ainsi d'une base propre sans réimporter.",
      },
      {
        question: "Puis-je voir les dimensions exactes en pixels avant de télécharger ?",
        answer:
          "Oui, l'indication Sélection au-dessus de la zone d'affichage et les cartes Largeur de recadrage / Hauteur de recadrage dans les options se mettent à jour en direct en pixels pendant que vous faites glisser. Le nom du fichier exporté inclut aussi ces dimensions exactes (par exemple, photo_1080x1080_cropped.jpg).",
      },
      {
        question: "Le recadrage fonctionne-t-il avec les gestes tactiles sur téléphone et tablette ?",
        answer:
          "Oui, le cadre de recadrage et les poignées utilisent des événements Pointer compatibles avec le tactile, conçus à la fois pour la souris et les écrans tactiles mobiles. Vous pouvez déplacer le cadre et tirer les poignées confortablement sur iOS et Android.",
      },
      {
        question: "Le recadrage préserve-t-il les arrière-plans transparents des PNG et des WebP ?",
        answer:
          "Oui, garder le format Original (depuis PNG/WebP) ou choisir PNG ou WebP conserve toute la transparence alpha à l'intérieur de la zone recadrée. Choisir JPG aplatit les pixels transparents sur un blanc uni.",
      },
      {
        question: "Pourquoi le curseur Qualité disparaît-il quand PNG est sélectionné ?",
        answer:
          "Le PNG utilise une compression sans perte, donc un réglage de qualité en pourcentage ne s'applique pas. Basculez le format de sortie sur Original (pour les JPEG), JPG ou WebP pour faire apparaître le curseur Qualité de 10 % à 100 %.",
      },
      {
        question: "Puis-je recadrer plusieurs images différentes à la fois ?",
        answer:
          "Ce recadreur interactif traite une image à la fois pour que vous puissiez inspecter et cadrer chaque sujet individuellement avec les poignées et le zoom. Une fois téléchargée, cliquez sur l'icône corbeille pour charger immédiatement votre prochaine photo.",
      },
      {
        question: "Quels formats de fichier peuvent être importés dans le recadreur ?",
        answer:
          "Vous pouvez recadrer des images JPG, PNG, WebP, HEIC/HEIF d'iPhone, GIF, BMP et SVG jusqu'à 20 Mo par fichier. Notez que les GIF animés recadrent leur première image en sortie statique.",
      },
      {
        question: "Les portraits privés ou les pièces d'identité sont-ils envoyés vers un serveur quand ils sont recadrés ?",
        answer:
          "Non, tout le dessin sur canevas et l'encodage du fichier s'exécutent localement dans votre navigateur web. Rien n'est transmis sur le réseau ni enregistré ailleurs.",
      },
      {
        question: "Puis-je coller une capture d'écran directement depuis mon presse-papiers pour la rogner ?",
        answer:
          "Oui, faites une capture d'écran et appuyez sur Ctrl+V (ou Cmd+V sur Mac) sur la page quand aucune image n'est chargée. Elle s'ouvre directement dans la zone de recadrage, prête à être cadrée.",
      },
      {
        question: "Comment recadrer une photo rectangulaire en avatar carré propre pour un profil ?",
        answer:
          "Cliquez sur le bouton 1:1 sous Ratio prédéfini, faites glisser le carré blanc sur le visage ou le logo, et ajustez les poignées de coin jusqu'à satisfaction. Cliquez ensuite sur Recadrer et télécharger pour enregistrer une image exactement carrée.",
      },
      {
        question: "Quel réglage de qualité est appliqué par défaut quand j'exporte des recadrages JPG ou WebP ?",
        answer:
          "La qualité est de 92 % par défaut, pour que les JPEG et WebP recadrés conservent une texture photographique nette sans poids de fichier excessif. Descendez vers 75 %–85 % si vous voulez aussi un fichier plus léger à envoyer.",
      },
      {
        question: "Le recadrage supprime-t-il aussi les données de géolocalisation GPS EXIF intégrées ?",
        answer:
          "Oui, exporter la zone recadrée via un nouveau canevas HTML5 crée une image propre sans les balises EXIF ou GPS du JPEG d'origine. Cela aide à protéger votre position et votre vie privée quand vous partagez des photos rognées.",
      },
      {
        question: "Pourquoi la zone d'affichage assombrit-elle tout ce qui est en dehors de mon cadre de sélection ?",
        answer:
          "Le voile sombre semi-transparent atténue les zones qui seront rognées. Ce contraste visuel vous aide à juger la composition et l'équilibre des tiers avant de cliquer sur Recadrer et télécharger.",
      },
      {
        question: "Puis-je remplacer rapidement la photo actuelle après avoir téléchargé un recadrage ?",
        answer:
          "Oui, cliquez sur l'icône corbeille rouge dans le coin supérieur droit de l'en-tête de la zone de recadrage à tout moment. Cela efface la photo active et revient proprement à la zone d'import pour votre prochaine image.",
      },
      {
        question: "Y a-t-il un coût, une inscription ou un filigrane sur les exports recadrés ?",
        answer:
          "Non, le recadreur d'image est entièrement gratuit, sans compte ni abonnement. Chaque photo recadrée s'exporte proprement à pleine résolution, sans aucun filigrane ajouté.",
      },
    ],
    relatedSlugs: ["/image-resizer", "/rotate-flip-image", "/round-image-corners", "/"],
  },
  {
    slug: "/image-watermark",
    name: "Filigrane d'image",
    shortDescription: "Ajoutez un filigrane texte ou logo, déplacez-le ou répétez-le en mosaïque sur vos photos.",
    category: "crop-edit",
    seoTitle: "Ajouter un filigrane à une image gratuit en ligne",
    seoDescription:
      "Protégez vos photos avec un filigrane d'image dans votre navigateur : texte personnalisé ou logo PNG/SVG transparent, placé librement ou répété en diagonale.",
    h1: "Outil de filigrane d'image en ligne gratuit",
    subtitle:
      "Conçu pour les photographes, les illustrateurs, les vendeurs Etsy et les agences numériques, cet outil privé pour navigateur ajoute un filigrane texte ou logo net, sans envoi vers un serveur. Faites glisser votre marque librement sur le canevas, fixez-la sur l'un des 9 points d'ancrage, ou répétez un motif incliné sur toute la photo.",
    howToSteps: [
      {
        title: "Importez votre photo de base",
        description:
          "Déposez une image JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu'à 20 Mo dans la zone de dépôt, parcourez votre disque ou collez-la avec Ctrl+V.",
      },
      {
        title: "Choisissez Filigrane texte ou Image de logo",
        description:
          "Choisissez Filigrane texte pour saisir un texte de marque personnalisé, choisir la couleur et ajuster la taille (de 2 % à 20 %), ou choisissez Image de logo pour importer un logo PNG ou SVG transparent (de 5 % à 60 % de largeur).",
      },
      {
        title: "Ajustez l'opacité et la rotation",
        description:
          "Réglez l'opacité, du subtil 5 % jusqu'au plein 100 %, et inclinez la rotation de -180° à +180° en temps réel.",
      },
      {
        title: "Positionnez librement ou activez le motif répété en mosaïque",
        description:
          "Faites glisser votre filigrane directement sur l'image d'aperçu, cliquez sur un préréglage d'ancrage à 9 points (de haut-gauche à bas-droite), ou activez le motif répété en mosaïque et ajustez l'espacement des tuiles (de 15 % à 60 %).",
      },
      {
        title: "Sélectionnez le format de sortie et la qualité",
        description:
          "Choisissez le format Orig, JPG, PNG ou WebP, et réglez la qualité (de 10 % à 100 %) quand vous enregistrez dans un format avec perte.",
      },
      {
        title: "Téléchargez votre image avec filigrane",
        description:
          "Cliquez sur Télécharger l'image avec filigrane pour composer la superposition à la pleine résolution de l'image d'origine et enregistrer <nom>_watermarked.",
      },
    ],
    features: [
      {
        title: "Filigranes texte et logo",
        description:
          "Utilisez une typographie personnalisée nette ou importez votre logo de marque PNG/SVG transparent.",
      },
      {
        title: "Positionnement par glisser-déposer et 9 ancrages prédéfinis",
        description:
          "Placez votre marque dans n'importe quel coin, au centre exact, ou faites-la glisser librement sur le canevas.",
      },
      {
        title: "Protection en mosaïque diagonale",
        description:
          "Activez le filigrane en mosaïque pour répéter votre texte ou votre logo sur toute la photo, avec un espacement réglable.",
      },
      {
        title: "Confidentialité côté client",
        description:
          "Filigranez vos épreuves et vos photos de portfolio en local, sans envoyer les originaux vers des serveurs externes.",
      },
    ],
    faqs: [
      {
        question: "Puis-je utiliser à la fois un texte personnalisé et mon propre logo transparent comme filigrane d'image ?",
        answer:
          "Oui, basculez entre Filigrane texte et Image de logo en haut du panneau de réglages. Le mode texte prend en charge un libellé personnalisé, une couleur hexadécimale et une mise à l'échelle de la taille, tandis que le mode logo accepte un logo PNG, SVG ou tout autre fichier de logo pris en charge.",
      },
      {
        question: "En quoi le motif répété en mosaïque protège-t-il mieux les épreuves clients qu'un simple tampon en coin ?",
        answer:
          "Un tampon unique en coin peut facilement être rogné, alors qu'activer le motif répété en mosaïque tamponne votre texte ou votre logo tourné dans une grille décalée sur tout le cadre. Utilisez le curseur Espacement des tuiles (de 15 % à 60 %) pour contrôler la densité de la grille.",
      },
      {
        question: "Pourquoi les préréglages d'ancrage sont-ils masqués quand le motif répété en mosaïque est activé ?",
        answer:
          "Les préréglages d'ancrage et le positionnement par glisser-déposer servent à placer un seul filigrane à des coordonnées précises (HG, HC, HD, MG, C, MD, BG, BC, BD). Désactivez le motif répété en mosaïque quand vous voulez faire glisser ou fixer un tampon unique.",
      },
      {
        question: "Comment la taille du texte est-elle calculée entre les petites miniatures et les énormes photos d'appareil ?",
        answer:
          "La taille de police (de 2 % à 20 %) et la largeur du logo (de 5 % à 60 %) sont proportionnelles à la largeur de votre image. Votre filigrane a donc le même aspect sur une miniature produit de 800 px et sur une épreuve haute résolution de 4000 px.",
      },
      {
        question: "Le canevas d'aperçu réduit-il la qualité de mon fichier téléchargé ?",
        answer:
          "Non, l'aperçu interactif s'adapte jusqu'à 900 px de large uniquement pour un déplacement confortable sur votre écran. Quand vous cliquez sur Télécharger l'image avec filigrane, l'exportateur construit un canevas en pleine résolution correspondant aux dimensions exactes en pixels de votre photo d'origine.",
      },
      {
        question: "Puis-je rendre un texte de filigrane blanc lisible sur des arrière-plans clairs ?",
        answer:
          "Oui, le filigrane texte rend automatiquement une ombre portée sombre et subtile derrière vos lettres. Cela garde les filigranes blancs ou de couleur claire nets et lisibles sur les ciels lumineux, les fonds produits blancs et les zones claires.",
      },
      {
        question: "Quelles plages d'opacité et de rotation conviennent le mieux à une protection d'épreuve discrète ?",
        answer:
          "Pour un marquage discret en coin, essayez une opacité de 40 % à 65 % avec une rotation de 0° ancrée en bas à droite (BD). Pour une forte protection d'épreuve de stock, utilisez le motif répété en mosaïque avec une opacité de 25 % à 40 % et un angle diagonal de -25° ou -35°.",
      },
      {
        question: "Comment faire glisser un filigrane unique vers un emplacement personnalisé exact ?",
        answer:
          "Avec le motif répété en mosaïque décoché, cliquez ou appuyez directement n'importe où sur le canevas d'aperçu et faites glisser votre pointeur. Le filigrane suit en douceur et reste légèrement à l'intérieur des bords pour ne jamais être coupé.",
      },
      {
        question: "Quels formats d'image sont pris en charge pour les photos de base et les logos importés ?",
        answer:
          "La photo principale et l'import du logo prennent en charge les fichiers JPG, PNG, WebP, HEIC/HEIF d'iPhone, GIF, BMP et SVG jusqu'à 20 Mo. Notez que les GIF animés s'affichent comme une seule image statique avec filigrane.",
      },
      {
        question: "L'export préserve-t-il la transparence si mon image de base est un PNG transparent ?",
        answer:
          "Oui, sélectionner Orig (depuis PNG/WebP), PNG ou WebP préserve la transparence alpha complète en dehors de votre visuel tout en composant le filigrane par-dessus. Sélectionner JPG remplit les zones transparentes avec du blanc uni.",
      },
      {
        question: "Les épreuves originales sans filigrane sont-elles envoyées vers des serveurs externes ?",
        answer:
          "Non, garder les épreuves clients sans filigrane privées est essentiel. Chaque composition sur canevas, chaque passe en mosaïque et chaque export d'image final s'exécutent strictement dans la mémoire locale de votre navigateur, sans aucun envoi réseau.",
      },
      {
        question: "Puis-je importer une nouvelle photo de base sans perdre mon texte, mon opacité ou mon angle ?",
        answer:
          "Oui, cliquez sur Changer d'image dans l'en-tête de l'aperçu quand vous voulez tamponner une autre photo. Votre texte de filigrane actuel, votre logo importé, votre opacité, votre angle de rotation et votre mise en page en mosaïque restent configurés automatiquement.",
      },
      {
        question: "Puis-je remplacer le logo de marque importé plus tard sans recharger l'outil ?",
        answer:
          "Oui, tant que le mode Image de logo est sélectionné, cliquez sur Changer l'image de logo pour choisir un autre fichier PNG ou SVG à tout moment. Votre photo de base existante se met à jour immédiatement.",
      },
      {
        question: "Pourquoi la qualité disparaît-elle quand la sortie PNG est sélectionnée ?",
        answer:
          "Les sorties PNG sont des images sans perte, donc un pourcentage de qualité de compression ne s'applique pas. Basculez sur Orig (pour les sources JPEG), JPG ou WebP pour ajuster le curseur Qualité entre 10 % et 100 %.",
      },
      {
        question: "Puis-je coller une photo directement depuis mon presse-papiers pour la filigraner ?",
        answer:
          "Oui, copiez une image ou une capture d'écran et appuyez sur Ctrl+V (ou Cmd+V sur Mac) quand la zone d'import est ouverte. Elle se charge directement dans l'éditeur de filigrane.",
      },
      {
        question: "Le filigrane est-il définitivement fusionné dans le fichier téléchargé ?",
        answer:
          "Oui, le filigrane est peint directement sur l'image de sortie et enregistré comme un JPG, PNG ou WebP aplati (<nom>_watermarked). Il ne reste aucun calque modifiable dans l'image exportée.",
      },
      {
        question: "Que se passe-t-il si je laisse le champ Texte du filigrane vide ?",
        answer:
          "Si vous effacez complètement le champ Texte du filigrane, le moteur affiche temporairement « Filigrane » sur le canevas d'aperçu. Cela évite une sélection vide et invisible pendant que vous tapez un nouveau libellé.",
      },
      {
        question: "Puis-je positionner et exporter des photos avec filigrane sur un smartphone ou un iPad ?",
        answer:
          "Oui, le déplacement sur le canevas d'aperçu utilise des événements Pointer adaptés au tactile, ainsi que des curseurs réactifs. Vous pouvez facilement tamponner des photos de portfolio ou des épreuves directement dans Safari ou Chrome sur mobile.",
      },
      {
        question: "Le filigranage supprime-t-il les balises GPS EXIF de l'appareil photo à l'export ?",
        answer:
          "Oui, le rendu sur un nouveau canevas HTML5 crée un fichier de sortie propre sans recopier les en-têtes EXIF de l'appareil. Votre position GPS et les métadonnées de l'appareil restent exclues de l'épreuve téléchargée.",
      },
      {
        question: "CompressMyPic ajoute-t-il un badge supplémentaire à côté de mon propre filigrane ?",
        answer:
          "Non, seul le texte ou le logo exact que vous configurez est dessiné sur votre photo. Nous n'ajoutons jamais de marque externe, de badge en coin ni de filigrane du site à vos exports.",
      },
    ],
    relatedSlugs: ["/add-text-to-image", "/image-border-generator", "/remove-image-metadata", "/"],
  },
  {
    slug: "/blur-pixelate-image",
    name: "Flouter et pixeliser une image",
    shortDescription: "Floutez ou pixelisez toute la photo ou seulement les zones sensibles, au pinceau.",
    category: "crop-edit",
    seoTitle: "Flouter et pixeliser une image gratuit en ligne",
    seoDescription:
      "Floutez ou pixelisez une image en ligne : pinceau de censure fluide ou mode plein cadre. Masquez visages, plaques et textes privés, dans votre navigateur.",
    h1: "Flouter et pixeliser une image en ligne",
    subtitle:
      "Conçu pour les journalistes, les enseignants, les vendeurs de places de marché et tous les utilisateurs soucieux de leur vie privée, cet outil pour navigateur vous permet de flouter ou de pixeliser définitivement les détails d'une image avant de la partager en ligne. Peignez sélectivement sur les visages, les plaques d'immatriculation ou les adresses avec le pinceau de censure interactif, ou appliquez un flou doux et une pixellisation sur tout le cadre, en local.",
    howToSteps: [
      {
        title: "Importez une photo ou une capture d'écran",
        description:
          "Déposez n'importe quelle image JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu'à 20 Mo dans la zone de dépôt, ou collez-la directement avec Ctrl+V.",
      },
      {
        title: "Choisissez Zone au pinceau ou Image entière",
        description:
          "Gardez Zone au pinceau sélectionné pour censurer uniquement les zones peintes comme les visages et les numéros, ou basculez sur Image entière pour flouter ou pixeliser tout le cadre.",
      },
      {
        title: "Choisissez Mosaïque pixelisée ou Flou doux",
        description:
          "Basculez entre les tuiles de Mosaïque pixelisée ou le Flou doux selon le style souhaité.",
      },
      {
        title: "Réglez la force et la taille du pinceau",
        description:
          "Ajustez la taille de bloc de mosaïque (de 4 à 60 px) ou le rayon de flou (de 2 à 50 px), et réglez la taille du pinceau (de 2 % à 20 %) quand vous peignez sélectivement.",
      },
      {
        title: "Peignez sur les détails sensibles",
        description:
          "Cliquez et faites glisser directement sur les visages, les plaques d'immatriculation ou les textes privés sur le canevas d'aperçu ; cliquez sur Annuler ou Réinitialiser le pinceau à tout moment.",
      },
      {
        title: "Choisissez le format et téléchargez",
        description:
          "Choisissez le format de sortie Orig, JPG, PNG ou WebP, réglez la qualité (de 10 % à 100 %) pour les formats avec perte, et cliquez sur Télécharger l'image pour enregistrer en local.",
      },
    ],
    features: [
      {
        title: "Pinceau de censure interactif",
        description:
          "Peignez sur les visages, les adresses ou les plaques d'immatriculation avec une taille de pinceau réglable et l'annulation des traits.",
      },
      {
        title: "Flou et mosaïque sur toute l'image",
        description:
          "Floutez rapidement des arrière-plans ou créez des effets de mosaïque rétro façon pixel art sur tout le cadre.",
      },
      {
        title: "Aucun envoi vers un serveur",
        description:
          "Parce que vous masquez des détails sensibles, rien ne quitte jamais votre appareil.",
      },
      {
        title: "Export en pleine résolution",
        description:
          "Les coordonnées du pinceau correspondent précisément aux pixels de l'image d'origine en pleine résolution pour des exports nets.",
      },
    ],
    faqs: [
      {
        question: "Les zones floutées ou pixelisées peuvent-elles être défloutées ou inversées à partir du fichier téléchargé ?",
        answer:
          "Non, l'export fusionne vos traits directement dans une seule image aplatie (JPG, PNG ou WebP), sans calque caché ni historique d'annulation dans l'image. Une fois téléchargée, les pixels nets d'origine derrière le masque censuré ont définitivement disparu.",
      },
      {
        question: "Pourquoi la mosaïque pixelisée est-elle souvent plus sûre qu'un léger flou doux pour masquer du texte ?",
        answer:
          "Une taille de bloc de mosaïque agressive (de 20 à 60 px) fusionne les caractères en grands carrés de couleur unie, détruisant complètement les contours fins des lettres. De très petits rayons de flou peuvent parfois laisser deviner de faibles formes de mots, donc un rayon de flou plus élevé ou la mosaïque pixelisée offrent une censure plus forte.",
      },
      {
        question: "Comment le mode Zone au pinceau garde-t-il nettes les zones nettes en dehors de mes traits ?",
        answer:
          "En mode Zone au pinceau, votre image de base s'affiche en pleine netteté, tandis que chaque trait peint agit comme un masque alpha hors écran qui compose uniquement la zone floutée ou pixelisée par-dessus. Les parties non peintes de la photo restent parfaitement nettes.",
      },
      {
        question: "Puis-je mélanger des traits pixelisés et des traits floutés sur la même image ?",
        answer:
          "Oui, chaque trait enregistre le style d'effet (Mosaïque pixelisée ou Flou doux), la force et le rayon du pinceau actifs au moment où vous l'avez peint. Vous pouvez pixeliser d'abord une plaque d'immatriculation, passer au Flou doux, puis peindre le visage en arrière-plan sur la même photo.",
      },
      {
        question: "La peinture sur l'aperçu réduit correspond-elle précisément aux énormes photos d'appareil ?",
        answer:
          "Oui, toutes les coordonnées du pointeur sont enregistrées en ratios normalisés de 0 à 1, avec une mise à l'échelle proportionnelle du pinceau et de l'effet. Quand vous cliquez sur Télécharger l'image, la composition se dessine sur un canevas en pleine résolution correspondant aux dimensions de votre source.",
      },
      {
        question: "Comment corriger un raté en peignant sur un visage ou une adresse ?",
        answer:
          "Cliquez sur le bouton Annuler au-dessus du canevas d'aperçu pour supprimer uniquement votre trait le plus récent sans effacer les censures précédentes. Si vous voulez repartir de zéro, cliquez sur Réinitialiser le pinceau pour effacer tous les traits immédiatement.",
      },
      {
        question: "Que fait le passage de la zone cible à Image entière ?",
        answer:
          "Image entière applique votre rayon de flou doux ou votre taille de bloc de mosaïque pixelisée actif uniformément sur chaque pixel, d'un bord à l'autre. C'est pratique pour créer des arrière-plans oniriques, des fonds de bannière ou des textures rétro façon pixel art sans peindre.",
      },
      {
        question: "Les photos non censurées avec des visages, des pièces d'identité ou des adresses privées sont-elles envoyées vers un serveur ?",
        answer:
          "Jamais — envoyer des images sensibles non censurées vers un serveur distant compromettrait la vie privée avant même de masquer quoi que ce soit. Chaque masque sur canevas, chaque passe de flou et chaque téléchargement final s'exécutent strictement dans votre navigateur.",
      },
      {
        question: "Quelle taille de pinceau et quelle taille de bloc de mosaïque choisir pour les petites captures d'écran ?",
        answer:
          "Pour les captures de conversations ou de mobiles, une taille de pinceau de 4 % à 8 % cible proprement une seule ligne de texte ou un nom d'utilisateur sans déborder sur les messages voisins. Une taille de bloc de mosaïque d'environ 12 à 24 px masque généralement bien les petits textes.",
      },
      {
        question: "Quels formats de fichier puis-je flouter ou pixeliser ici ?",
        answer:
          "Vous pouvez importer des images JPG, PNG, WebP, HEIC/HEIF d'iPhone, GIF, BMP et SVG jusqu'à 20 Mo par fichier. Notez que les GIF animés à plusieurs images censurent et exportent leur première image en fichier statique.",
      },
      {
        question: "Puis-je censurer des parties sensibles d'une capture d'écran collée avec Ctrl+V ?",
        answer:
          "Oui, faites une capture d'écran vers votre presse-papiers et appuyez sur Ctrl+V (ou Cmd+V sur Mac) pendant que la zone de dépôt d'import est visible. Elle s'ouvre directement en mode Zone au pinceau, prête à être censurée et enregistrée.",
      },
      {
        question: "L'export préserve-t-il les arrière-plans transparents des graphiques PNG ou WebP ?",
        answer:
          "Oui, garder Orig (pour PNG/WebP) ou choisir PNG ou WebP conserve la transparence alpha autour des autocollants non rectangulaires ou des découpes d'interface. Choisir JPG exporte une image JPEG opaque.",
      },
      {
        question: "Pourquoi les boutons Annuler et Réinitialiser le pinceau ne sont-ils visibles qu'en mode Zone au pinceau ?",
        answer:
          "Ces boutons gèrent les traits de pinceau peints individuellement, donc ils se masquent automatiquement quand vous basculez en mode Image entière. Revenir en mode Zone au pinceau restaure vos traits enregistrés là où vous les aviez laissés.",
      },
      {
        question: "Puis-je utiliser mon doigt ou un stylet sur un téléphone ou une tablette pour peindre des traits de censure ?",
        answer:
          "Oui, le canevas utilise des événements Pointer tactiles spécialement conçus pour les écrans tactiles mobiles et les stylets. Vous pouvez faire glisser des traits de censure sur des visages ou du texte en douceur sans faire défiler la page par accident.",
      },
      {
        question: "La censure et l'export suppriment-ils aussi les balises GPS EXIF de l'appareil photo ?",
        answer:
          "Oui, le rendu de la composition censurée via un nouveau canevas HTML5 omet automatiquement les en-têtes EXIF JPEG d'origine et les coordonnées GPS. Cela protège à la fois les détails visuels et les métadonnées cachées du fichier.",
      },
      {
        question: "Pourquoi la qualité se masque-t-elle quand je choisis la sortie PNG ?",
        answer:
          "Le PNG utilise une compression de pixels sans perte, donc les pourcentages de qualité avec perte ne s'appliquent pas. Sélectionnez Orig (quand vous modifiez un JPEG), JPG ou WebP si vous voulez régler le curseur Qualité de 10 % à 100 %.",
      },
      {
        question: "Quel nom de fichier est utilisé quand j'enregistre ma photo floutée ou pixelisée ?",
        answer:
          "Le téléchargeur conserve votre nom de fichier de base nettoyé et ajoute _blur ou _pixelate selon votre style d'effet actif. Cela permet de garder vos exports censurés (comme recu_pixelate.png) bien organisés à côté des originaux.",
      },
      {
        question: "Et si je veux flouter proprement tout l'arrière-plan d'un portrait sans peindre ?",
        answer:
          "Utilisez le mode Image entière quand vous voulez un adoucissement uniforme de l'arrière-plan derrière des graphiques ou des cartes d'interface. Pour isoler un sujet sur un fond propre, associez-le à notre outil Supprimer l'arrière-plan.",
      },
      {
        question: "Jusqu'où peuvent aller le flou doux et la mosaïque pixelisée ?",
        answer:
          "Le rayon de flou va d'un léger lissage de 2 px jusqu'à un fort flou de type gaussien de 50 px. La taille de bloc de mosaïque s'étend de fines tuiles de 4 px jusqu'à de gros blocs de 60 px, mis à l'échelle proportionnellement à la résolution de votre source.",
      },
      {
        question: "Y a-t-il des filigranes, des limites quotidiennes ou des inscriptions pour censurer des photos ?",
        answer:
          "Non, vous pouvez flouter ou pixeliser des photos jusqu'à 20 Mo par fichier, sans filigrane ni inscription. Tout le traitement local reste entièrement gratuit, avec des exports illimités.",
      },
    ],
    relatedSlugs: ["/remove-image-metadata", "/image-cropper", "/image-filters", "/"],
  },
  {
    slug: "/add-text-to-image",
    name: "Ajouter du texte à une image",
    shortDescription: "Ajoutez des textes déplaçables avec polices, contour et ombre.",
    category: "crop-edit",
    seoTitle: "Ajouter du texte à une image gratuit en ligne",
    seoDescription:
      "Ajoutez du texte à une image gratuitement dans votre navigateur : calques déplaçables, 5 polices, gras, italique, contours, ombres et rotation, sans filigrane.",
    h1: "Ajouter du texte à une image en ligne",
    subtitle:
      "Conçu pour les créateurs de contenu, les community managers, les enseignants et les créateurs de mèmes, cet outil privé facilite l'ajout de texte à une image sans application de design lourde. Superposez plusieurs titres ou légendes multilignes, personnalisez les polices, les contours, les ombres et la rotation, et exportez proprement, sans filigrane.",
    howToSteps: [
      {
        title: "Importez une image ou collez-la depuis le presse-papiers",
        description:
          "Déposez une photo JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu'à 20 Mo dans la zone de dépôt, ou collez-la directement avec Ctrl+V.",
      },
      {
        title: "Saisissez du texte multiligne et gérez les calques",
        description:
          "Modifiez votre texte dans Contenu du texte (Entrée ajoute des sauts de ligne) et cliquez sur Ajouter pour empiler des calques supplémentaires comme Texte 1, Texte 2, ou supprimer ceux dont vous n'avez plus besoin.",
      },
      {
        title: "Choisissez la police, la couleur de remplissage, le gras et l'italique",
        description:
          "Choisissez parmi Inter, Impact, Georgia, Courier ou Trebuchet, définissez la couleur de remplissage de votre texte et activez le gras ou l'italique.",
      },
      {
        title: "Ajustez la taille, la rotation, le contour et l'ombre",
        description:
          "Faites glisser Taille (de 2 % à 22 %) et Rotation (de -180° à +180°), puis personnalisez la couleur et l'épaisseur du contour du texte (de 1 à 10) ainsi que l'ombre portée facultative.",
      },
      {
        title: "Faites glisser les calques directement sur l'image",
        description:
          "Cliquez et faites glisser n'importe quel bloc de texte directement sur le canevas d'aperçu pour positionner précisément titres, légendes de mème ou annotations de capture d'écran.",
      },
      {
        title: "Choisissez le format de sortie et téléchargez",
        description:
          "Sélectionnez le format de sortie Orig, JPG, PNG ou WebP, réglez la qualité (de 10 % à 100 %) pour les fichiers avec perte, et cliquez sur Télécharger l'image avec texte.",
      },
    ],
    features: [
      {
        title: "Plusieurs calques de texte déplaçables",
        description:
          "Ajoutez des titres, des légendes et des annotations, et faites glisser chacun indépendamment sur le canevas.",
      },
      {
        title: "Réglages typographiques riches",
        description:
          "Choisissez les polices, les tailles, les graisses gras et italique, les couleurs, les contours et les ombres portées.",
      },
      {
        title: "Contrôle de l'angle et de l'alignement",
        description:
          "Faites pivoter n'importe quel calque de texte en douceur de -180° à +180°.",
      },
      {
        title: "Export propre en pleine résolution",
        description:
          "Aucun filigrane ajouté — téléchargez directement en JPG, PNG ou WebP.",
      },
    ],
    faqs: [
      {
        question: "Puis-je ajouter plusieurs titres séparés ou des légendes de mème en haut et en bas ?",
        answer:
          "Oui, cliquez sur le bouton Ajouter à côté de l'onglet Texte 1 pour créer Texte 2, Texte 3, et autant de calques de texte indépendants que nécessaire. Chaque calque conserve sa propre police, sa couleur, sa taille, sa rotation, son contour et sa position par glisser-déposer sur l'image.",
      },
      {
        question: "Quelles polices sont intégrées à l'éditeur Ajouter du texte à une image ?",
        answer:
          "Vous pouvez basculer instantanément entre cinq familles fiables assorties au système : Inter / Sans propre, Impact / Affichage mème, Georgia / Serif classique, Courier / Monospace et Trebuchet / Sans arrondie. Les cinq fonctionnent de manière fiable hors ligne, sans attendre de téléchargement de police externe.",
      },
      {
        question: "Comment créer le texte de mème blanc classique avec une épaisse bordure sombre ?",
        answer:
          "Sélectionnez Impact / Affichage mème, laissez le gras actif et le remplissage en blanc (#ffffff), et gardez le contour du texte activé avec une couleur de contour sombre comme #0f172a ou le noir. Faites glisser le curseur d'épaisseur du contour vers 6–10 pour un contraste sans équivoque.",
      },
      {
        question: "Appuyer sur Entrée dans Contenu du texte crée-t-il des légendes multilignes ?",
        answer:
          "Oui, Contenu du texte prend en charge les sauts de ligne complets, centrés proprement avec un interligne de 1,22. Cela facilite l'empilement de citations multilignes, d'annotations de tutoriel ou de longues légendes sans créer de calque séparé par ligne.",
      },
      {
        question: "Comment sélectionner et déplacer un calque précis quand j'en ai plusieurs sur la photo ?",
        answer:
          "Cliquez sur un onglet de calque (Texte 1, Texte 2, etc.) dans le panneau de droite pour changer les réglages typographiques actifs. Vous pouvez aussi cliquer directement près d'un bloc de texte sur le canevas — l'éditeur saisit le calque le plus proche de votre pointeur.",
      },
      {
        question: "Puis-je incliner le texte en diagonale à des angles personnalisés ?",
        answer:
          "Oui, faites glisser le curseur Rotation n'importe où entre -180° et +180° pour chaque calque de texte actif. Chaque bloc pivote en douceur autour de ses coordonnées centrales pour des tampons inclinés, des annotations ou des légendes ludiques.",
      },
      {
        question: "Comment la taille du texte (de 2 % à 22 %) s'adapte-t-elle aux petites photos et aux photos 4K ?",
        answer:
          "La taille de police est proportionnelle à la largeur de votre image de sortie (avec un plancher minimum de 12 px). Cela garde les proportions cohérentes entre l'aperçu à l'écran et les fichiers exportés en pleine résolution.",
      },
      {
        question: "Les captures d'écran ou les photos de famille sont-elles envoyées quelque part quand j'ajoute des légendes ?",
        answer:
          "Non, la composition sur canevas rend chaque glyphe de police, chaque trait, chaque ombre et chaque rotation localement dans votre onglet de navigateur. Vos images de base et vos visuels terminés ne quittent jamais votre appareil.",
      },
      {
        question: "Qu'advient-il des autocollants PNG transparents si j'exporte avec du texte ajouté ?",
        answer:
          "Choisir Orig (depuis PNG/WebP), PNG ou WebP préserve proprement les zones transparentes autour de votre visuel. Si vous choisissez la sortie JPG, les zones transparentes s'aplatissent en douceur sur un fond blanc uni.",
      },
      {
        question: "Comment supprimer un calque de texte supplémentaire sans effacer toute l'image ?",
        answer:
          "Sélectionnez l'onglet du calque à supprimer et cliquez sur l'icône corbeille à côté du bouton Ajouter. Quand il ne reste qu'un seul calque, vider sa zone de texte le masque temporairement sans perdre l'éditeur.",
      },
      {
        question: "Puis-je changer la photo d'arrière-plan sans perdre mes calques de texte stylisés ?",
        answer:
          "Cliquez sur Changer d'image dans l'en-tête de l'aperçu pour revenir à la zone de dépôt et charger un autre fichier. Vos calques de texte et votre mise en forme restent prêts pour réutiliser la même configuration de légende sur plusieurs photos.",
      },
      {
        question: "Quels formats de fichier puis-je ouvrir pour ajouter du texte ?",
        answer:
          "L'éditeur ouvre les fichiers JPG, PNG, WebP, HEIC/HEIF d'iPhone, GIF, BMP et SVG jusqu'à 20 Mo chacun. Les GIF animés s'exportent en un seul cadre statique avec légende.",
      },
      {
        question: "Puis-je faire glisser des calques de texte avec l'écran tactile d'un smartphone ?",
        answer:
          "Oui, le déplacement sur canevas repose sur des événements Pointer tactiles conçus pour les doigts et les stylets. Vous pouvez repositionner proprement les légendes dans Safari sur iOS et Chrome sur Android sans faire défiler la page.",
      },
      {
        question: "Comment l'ombre portée améliore-t-elle la lisibilité en plus du contour du texte ?",
        answer:
          "L'ombre portée projette un flou sombre et doux, proportionnel à la taille de votre police, sous les lettres. Activer l'ombre portée sans contour crée des sous-titres éditoriaux propres, tandis que combiner les deux maximise la lisibilité sur les textures chargées.",
      },
      {
        question: "Puis-je coller une capture d'écran via Ctrl+V pour l'annoter rapidement ?",
        answer:
          "Oui, copiez n'importe quelle capture d'écran ou diapositive et appuyez sur Ctrl+V (ou Cmd+V sur Mac) sur la page avant de charger un fichier. Elle se charge directement dans le canevas, prête pour les annotations et un export propre.",
      },
      {
        question: "Pourquoi le curseur Qualité disparaît-il quand PNG est choisi ?",
        answer:
          "Le PNG encode les images sans perte, sans curseur de pourcentage de qualité de compression. Choisissez Orig (pour les JPEG), JPG ou WebP si vous voulez ajuster la qualité d'export de 10 % à 100 %.",
      },
      {
        question: "L'ajout de texte via le canevas supprime-t-il les balises GPS EXIF cachées de l'appareil photo ?",
        answer:
          "Oui, dessiner sur un nouveau canevas HTML5 crée une image toute neuve sans recopier les en-têtes EXIF. Votre position GPS et les métadonnées de l'appareil restent supprimées de l'export enregistré.",
      },
      {
        question: "Quel nom de fichier est enregistré quand je télécharge une photo annotée ?",
        answer:
          "Les fichiers téléchargés conservent votre nom de fichier de base nettoyé et ajoutent _text plus l'extension choisie (comme meme_text.jpg). Cela évite d'écraser votre image d'origine sans annotation.",
      },
      {
        question: "En quoi est-ce différent de l'outil Filigrane d'image ?",
        answer:
          "Filigrane d'image se concentre sur les tampons de marque uniques ou en mosaïque diagonale et sur les logos PNG/SVG importés. Ajouter du texte à une image offre plutôt plusieurs calques de texte indépendants et déplaçables, 5 polices, des contrôles gras/italique et des contours épais façon mème.",
      },
      {
        question: "CompressMyPic place-t-il un logo ou un filigrane sur les images exportées ici ?",
        answer:
          "Non, vos fichiers téléchargés contiennent uniquement votre image et les calques de texte exacts que vous avez créés. Tout fonctionne gratuitement dans votre navigateur, sans filigrane et sans inscription.",
      },
    ],
    relatedSlugs: ["/image-watermark", "/image-border-generator", "/image-filters", "/"],
  },
  {
    slug: "/image-border-generator",
    name: "Générateur de bordure d'image",
    shortDescription: "Ajoutez des bordures unies ou en dégradé, des cadres, des coins arrondis et des ombres.",
    category: "crop-edit",
    seoTitle: "Générateur de bordure d'image gratuit en ligne",
    seoDescription:
      "Encadrez vos photos rapidement avec notre générateur de bordure gratuit : cadres unis, en dégradé linéaire ou Polaroid, coins arrondis et ombres, en local.",
    h1: "Générateur de bordure d'image gratuit",
    subtitle:
      "Conçu pour les photographes, les propriétaires de boutiques Etsy, les designers de portfolio et les créateurs de contenu, notre générateur de bordure d'image gratuit habille n'importe quelle photo de passe-partout de galerie nets, de dégradés à deux couleurs ou de cadres Polaroid classiques. Réglez l'épaisseur de la bordure, les rayons de coin intérieurs et extérieurs et les ombres d'élévation directement dans votre navigateur avant d'exporter.",
    howToSteps: [
      {
        title: "Déposez ou sélectionnez une image à encadrer",
        description:
          "Importez n'importe quelle photo JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu'à 20 Mo, ou collez-la via Ctrl+V.",
      },
      {
        title: "Choisissez un préréglage de cadre rapide ou un style de bordure",
        description:
          "Cliquez sur les préréglages Blanc classique, Cadre Polaroid, Studio sombre ou Éclat dégradé, ou basculez manuellement entre les styles Uni, Dégradé et Polaroid.",
      },
      {
        title: "Personnalisez les couleurs du cadre et l'angle du dégradé",
        description:
          "Définissez la couleur de bordure en mode Uni/Polaroid, ou choisissez la couleur de départ, la couleur de fin et l'angle du dégradé (de 0° à 360°) pour les cadres en dégradé linéaire.",
      },
      {
        title: "Ajustez la taille de bordure et les rayons de coin",
        description:
          "Faites glisser Taille de bordure (de 1 % à 25 %) ainsi que les curseurs indépendants Rayon du cadre (de 0 % à 30 %) et Rayon de la photo (de 0 % à 30 %).",
      },
      {
        title: "Choisissez l'ombre portée et le format d'aperçu",
        description:
          "Sélectionnez l'ombre portée aucune, douce, moyenne ou profonde, et choisissez la sortie PNG, JPG ou WEBP tout en vérifiant l'aperçu en damier.",
      },
      {
        title: "Téléchargez votre image encadrée",
        description:
          "Cliquez sur Télécharger l'image encadrée pour générer la bordure et l'ombre à la pleine résolution source et enregistrer <nom>_framed.",
      },
    ],
    features: [
      {
        title: "Bordures unies et en dégradé",
        description:
          "Créez des passe-partout de galerie propres ou des cadres vibrants en dégradé linéaire à deux couleurs.",
      },
      {
        title: "Styles de cadre prédéfinis",
        description:
          "Appliquez instantanément les looks Polaroid, Blanc galerie, Studio sombre ou Dégradé coucher de soleil.",
      },
      {
        title: "Rayon de coin et ombre portée",
        description:
          "Arrondissez les coins intérieurs de la photo ou extérieurs du cadre et ajoutez des ombres d'élévation réalistes.",
      },
      {
        title: "Prise en charge du PNG sans perte",
        description:
          "Exportez en PNG pour préserver les coins extérieurs transparents autour des ombres et des cadres arrondis.",
      },
    ],
    faqs: [
      {
        question: "En quoi le style de bordure Polaroid diffère-t-il d'une bordure unie standard ?",
        answer:
          "Les bordures unies enveloppent un rembourrage uniforme autour des quatre bords de votre photo, alors que Polaroid ajoute 3,2 fois plus de hauteur de cadre blanc le long du bord inférieur pour reproduire les tirages classiques de film instantané. Cliquer sur le préréglage Cadre Polaroid configure des proportions propres en un clic.",
      },
      {
        question: "Pourquoi les ombres portées disparaissent-elles quand je passe au format de sortie JPG ?",
        answer:
          "Les fichiers JPG ne prennent pas en charge le canal alpha de transparence permettant aux ombres d'élévation douces et semi-transparentes de s'estomper proprement sur les arrière-plans de page. Notre moteur préserve le rembourrage d'ombre portée dans les exports PNG et WebP transparents tout en gardant des bords de bordure nets sur les JPG à fond blanc uni.",
      },
      {
        question: "Quelle est la différence entre Rayon du cadre et Rayon de la photo ?",
        answer:
          "Rayon du cadre (de 0 % à 30 %) arrondit les coins extérieurs de la bordure colorée elle-même, tandis que Rayon de la photo (de 0 % à 30 %) arrondit les coins intérieurs de votre photographie à l'intérieur de ce passe-partout. Les assortir ou les contraster permet de créer des cartes d'interface élégantes ou des passe-partout de galerie nets.",
      },
      {
        question: "Comment le cadre Éclat dégradé calcule-t-il l'angle et les couleurs ?",
        answer:
          "Sélectionner le style Dégradé révèle la couleur de départ, la couleur de fin et un curseur d'angle de dégradé de 0° à 360° qui dessine un dégradé linéaire directionnel ou diagonal complet derrière votre photo. Vous pouvez cliquer sur Éclat dégradé sous Préréglages de cadre rapides pour un style de carte instantané du bleu au vert émeraude.",
      },
      {
        question: "L'ajout d'une bordure rogne-t-il un bord de ma photo d'origine ?",
        answer:
          "Non, le générateur de bordure d'image étend le canevas vers l'extérieur autour de la largeur et de la hauteur complètes de votre image d'origine plutôt que de recouvrir vos pixels. Seul le réglage du rayon de la photo au-dessus de 0 % arrondit doucement les quatre coins intérieurs de l'image.",
      },
      {
        question: "Comment la taille de bordure (de 1 % à 25 %) est-elle calculée sur les photos hautes et larges ?",
        answer:
          "L'épaisseur de la bordure se calcule en pourcentage de la plus petite dimension de votre image — min(largeur, hauteur). Cela garde les marges supérieures, inférieures et latérales équilibrées à la fois sur les bannières 16:9 et les portraits 4:5.",
      },
      {
        question: "Que configurent automatiquement les quatre préréglages de cadre rapides ?",
        answer:
          "Blanc classique définit un passe-partout de galerie blanc de 10 % avec une ombre douce, tandis que Cadre Polaroid ajoute une marge inférieure façon tirage instantané. Studio sombre applique un cadre ardoise, et Éclat dégradé crée une bordure en dégradé bleu vers émeraude à 135°.",
      },
      {
        question: "Pourquoi l'aperçu affiche-t-il un damier gris et blanc autour de mon cadre ?",
        answer:
          "Ce damier visualise les vrais pixels transparents en dehors des coins arrondis du cadre et à l'intérieur des ombres portées douces. Quand vous exportez en PNG ou WebP, ces zones en damier restent complètement transparentes sur n'importe quel site web ou diapositive de présentation.",
      },
      {
        question: "L'encadrement s'exécute-t-il en local sans envoyer mes photos ?",
        answer:
          "Oui, la peinture du dégradé, le découpage des coins, le rendu de l'ombre et l'export du fichier s'effectuent strictement dans le canevas HTML5 de votre appareil. Rien n'est jamais envoyé vers des serveurs externes.",
      },
      {
        question: "Quels formats de fichier peuvent être chargés dans le générateur de bordure ?",
        answer:
          "Vous pouvez déposer des images JPG, PNG, WebP, HEIC/HEIF d'iPhone, GIF, BMP et SVG jusqu'à 20 Mo chacune. Les GIF animés s'exportent en un premier cadre statique encadré.",
      },
      {
        question: "Puis-je changer la couleur du cadre d'un préréglage de cadre rapide après avoir cliqué dessus ?",
        answer:
          "Oui, les préréglages remplissent simplement pour vous les réglages de style de bordure, de couleur, de rayon et d'ombre. Vous pouvez ensuite modifier la couleur de bordure, redimensionner les marges ou changer l'ombre portée immédiatement.",
      },
      {
        question: "Comment créer un cadre de galerie charbon sombre ou pastel sans aucune ombre ?",
        answer:
          "Choisissez le style Uni, cliquez sur Couleur de bordure pour sélectionner n'importe quelle teinte hexadécimale personnalisée, et faites glisser les rayons du cadre et de la photo à 0 %. Cliquez ensuite sur aucune sous Ombre portée pour des bordures plates et nettes.",
      },
      {
        question: "Mon image encadrée téléchargée sera-t-elle en pleine résolution ?",
        answer:
          "Oui, l'aperçu à l'écran est réduit uniquement pour s'adapter confortablement à votre mise en page. Cliquer sur Télécharger l'image encadrée construit un tout nouveau canevas à la résolution exacte en pixels de votre photo d'origine, plus le cadre et l'ombre mis à l'échelle.",
      },
      {
        question: "Dois-je exporter en PNG ou en WebP pour garder les coins arrondis transparents du cadre ?",
        answer:
          "Choisissez PNG quand vous voulez une netteté sans perte autour des bordures fines et des visuels d'impression. Choisissez WebP pour des cartes de site web rapides et légères qui préservent tout de même les coins extérieurs transparents et les ombres d'élévation.",
      },
      {
        question: "Puis-je coller une capture d'écran directement depuis mon presse-papiers pour l'envelopper dans un cadre de carte ?",
        answer:
          "Oui, appuyez sur Ctrl+V (ou Cmd+V sur Mac) sur la zone d'import juste après avoir fait une capture d'écran. Associer une bordure arrondie, un cadre en dégradé et une ombre portée moyenne transforme les captures brutes en visuels de présentation soignés.",
      },
      {
        question: "L'ajout d'une bordure supprime-t-il les données GPS EXIF cachées de l'appareil photo ?",
        answer:
          "Oui, la composition sur le canevas HTML5 crée une image encadrée propre. Les en-têtes EXIF de l'appareil source et les coordonnées GPS sont automatiquement exclus de vos PNG, JPG ou WebP téléchargés.",
      },
      {
        question: "Comment charger une deuxième photo en testant les cadres ?",
        answer:
          "Cliquez sur Changer d'image dans le coin supérieur droit du panneau d'aperçu pour choisir une autre photo. Tous vos choix actifs de couleurs de bordure, d'angles de dégradé, de rayons de coin et d'ombres restent intacts.",
      },
      {
        question: "Sous quel nom de fichier l'image encadrée est-elle enregistrée ?",
        answer:
          "Les exports conservent votre nom de fichier d'origine nettoyé avec _framed ajouté avant .png, .jpg ou .webp. Par exemple, un fichier nommé portrait.jpg s'enregistre proprement sous portrait_framed.png.",
      },
      {
        question: "Le générateur de bordure fonctionne-t-il bien sur les navigateurs mobiles ?",
        answer:
          "Oui, chaque carte de préréglage, chaque curseur et chaque sélecteur de couleur fonctionne proprement dans Safari sur iOS et Chrome sur Android. Vous pouvez encadrer des Polaroids ou des photos produits directement depuis la galerie de votre smartphone.",
      },
      {
        question: "Y a-t-il des filigranes, des abonnements ou des limites d'inscription sur les photos encadrées ?",
        answer:
          "Non, chaque photo encadrée se télécharge entièrement sans filigrane et gratuitement. Seule la vérification standard de 20 Mo par fichier s'applique pour garder la mémoire locale du navigateur fluide.",
      },
    ],
    relatedSlugs: ["/round-image-corners", "/add-background-to-image", "/image-filters", "/"],
  },
  {
    slug: "/round-image-corners",
    name: "Arrondir les coins d'une image",
    shortDescription: "Arrondissez les coins uniformément ou un par un, avec export PNG transparent.",
    category: "crop-edit",
    seoTitle: "Arrondir les coins d'une image gratuit en ligne",
    seoDescription:
      "Arrondissez les coins d'une image en ligne gratuitement : curseurs uniformes ou par coin, préréglage cercle pour avatar, et export PNG ou WebP transparent.",
    h1: "Arrondir les coins d'une image en ligne",
    subtitle:
      "Conçu pour les designers d'interfaces, les auteurs de newsletters, les blogueurs et les utilisateurs de réseaux sociaux qui créent des cartes élégantes ou des avatars, cet outil pour navigateur vous permet d'arrondir proprement les coins d'une image à pleine résolution. Arrondissez les quatre coins uniformément, activez les curseurs individuels par coin, ou passez au cercle complet avec une sortie PNG/WebP transparente.",
    howToSteps: [
      {
        title: "Déposez ou choisissez votre image",
        description:
          "Importez une photo JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu'à 20 Mo dans la zone de dépôt, ou collez-la via Ctrl+V.",
      },
      {
        title: "Ajustez le rayon de tous les coins ou cliquez sur Cercle complet / Pilule",
        description:
          "Faites glisser le curseur Rayon de tous les coins (de 0 % à 100 %, avec la courbure exacte en pixels affichée) ou cliquez sur Cercle complet / Pilule pour passer à 100 %.",
      },
      {
        title: "Activez éventuellement le contrôle individuel par coin",
        description:
          "Activez le contrôle individuel par coin pour styliser indépendamment les coins supérieur gauche, supérieur droit, inférieur gauche et inférieur droit.",
      },
      {
        title: "Choisissez le remplissage extérieur transparent ou de couleur unie",
        description:
          "Gardez Transparent (PNG/WebP) actif pour des coins arrondis transparents, ou basculez sur Couleur unie et choisissez n'importe quel fond hexadécimal.",
      },
      {
        title: "Sélectionnez le format de sortie (PNG, WebP ou JPG)",
        description:
          "Choisissez PNG pour des bords alpha sans perte, WebP pour des visuels web transparents plus légers, ou JPG pour des arrière-plans opaques à coins unis.",
      },
      {
        title: "Téléchargez votre image arrondie",
        description:
          "Inspectez l'aperçu en damier et cliquez sur Télécharger l'image arrondie pour exporter <nom>_rounded aux dimensions d'origine complètes.",
      },
    ],
    features: [
      {
        title: "Rayon uniforme et par coin",
        description:
          "Arrondissez tous les coins uniformément jusqu'à la pilule ou au cercle, ou stylisez chaque coin indépendamment.",
      },
      {
        title: "Vrais coins transparents",
        description:
          "Exportez en PNG ou WebP avec une transparence alpha nette et anticrénelée en dehors du masque arrondi.",
      },
      {
        title: "Arrière-plan uni facultatif",
        description:
          "Remplissez les coins extérieurs avec n'importe quelle couleur hexadécimale personnalisée si vous exportez en JPG.",
      },
      {
        title: "Sortie en pleine résolution",
        description:
          "Conserve vos dimensions exactes en pixels d'origine tout en découpant proprement les coins.",
      },
    ],
    faqs: [
      {
        question: "Pourquoi dois-je utiliser PNG ou WebP pour garder les coins arrondis transparents ?",
        answer:
          "Le format JPEG ne prend pas en charge le canal alpha de transparence, donc les coins en dehors d'un masque arrondi deviendraient toujours blancs unis ou opaques. PNG et WebP préservent une transparence lisse anticrénelée sur 8 bits, pour que votre carte arrondie ou votre avatar se fonde parfaitement sur n'importe quelle couleur de page web ou de diapositive.",
      },
      {
        question: "Comment le raccourci Cercle complet / Pilule fonctionne-t-il sur les photos carrées et rectangulaires ?",
        answer:
          "Cliquer sur Cercle complet / Pilule définit le rayon de tous les coins à 100 % de la moitié du côté le plus court — min(largeur, hauteur) / 2. Sur une image carrée 1:1, cela découpe un cercle parfait ; sur une bannière plus large, cela forme une forme de pilule lisse.",
      },
      {
        question: "Que se passe-t-il si je veux seulement les deux coins supérieurs arrondis pour une carte de blog ?",
        answer:
          "Cochez Contrôle individuel par coin pour débloquer quatre curseurs séparés pour Supérieur gauche, Supérieur droit, Inférieur gauche et Inférieur droit (chacun de 0 % à 100 %). Mettez Inférieur gauche et Inférieur droit à 0 % tout en arrondissant uniquement les coins supérieurs.",
      },
      {
        question: "Comment rendre d'abord une photo carrée si ma photo est rectangulaire ?",
        answer:
          "Ouvrez notre outil Recadreur d'image (lié dans Outils d'image gratuits associés ci-dessous), sélectionnez le ratio prédéfini 1:1 et téléchargez votre recadrage carré. Déposez ensuite ce fichier carré ici et cliquez sur Cercle complet / Pilule pour un avatar circulaire net.",
      },
      {
        question: "Que signifie l'indication en pixels en direct à côté de Rayon de tous les coins ?",
        answer:
          "En plus du curseur de 0 % à 100 %, l'étiquette calcule la courbure exacte du coin en vrais pixels de sortie (par exemple, 120 px (24 %)) par rapport aux dimensions de votre image d'origine. Cela facilite la correspondance avec les valeurs CSS border-radius.",
      },
      {
        question: "Quand dois-je choisir Couleur unie sous Remplissage des coins extérieurs plutôt que Transparent ?",
        answer:
          "Choisissez Couleur unie quand vous prévoyez d'exporter un JPG léger, d'assortir un arrière-plan de carte en mode sombre précis, ou d'envoyer vers une application qui remplace la transparence alpha des PNG par du noir. Vous pouvez choisir le blanc ou n'importe quel code hexadécimal exact avec l'échantillon de couleur.",
      },
      {
        question: "Que se passe-t-il automatiquement si je clique sur Transparent (PNG/WebP) pendant que JPG est sélectionné ?",
        answer:
          "Les fichiers JPG ne peuvent pas stocker la transparence alpha dans les coins extérieurs. Cliquer sur Transparent (PNG/WebP) bascule donc automatiquement le format de sortie sur PNG pour que vos coins arrondis restent transparents.",
      },
      {
        question: "L'arrondi des coins réduit-il la largeur et la hauteur de ma photo ?",
        answer:
          "Non, l'image exportée conserve exactement votre largeur et votre hauteur d'origine en pixels. Seules les zones des coins extérieurs sont découpées en douceur à l'aide de courbes de coin quadratiques.",
      },
      {
        question: "Pourquoi les bords courbes sont-ils lisses plutôt que dentelés ?",
        answer:
          "Le canevas HTML5 découpe le long de chemins de Bézier quadratiques vectoriels avec un lissage de haute qualité activé. Cela crée un anticrénelage doux au sous-pixel le long des courbes, qui se fond naturellement sur les arrière-plans de page sombres ou clairs.",
      },
      {
        question: "Les portraits ou les avatars de profil sont-ils envoyés vers un serveur pendant le découpage des coins ?",
        answer:
          "Non, le découpage du chemin et l'encodage PNG/WebP s'exécutent strictement dans votre onglet de navigateur via le canevas HTML5. Les photos personnelles et les logos de marque ne quittent jamais votre appareil.",
      },
      {
        question: "Quels formats d'entrée peuvent être arrondis dans cet outil ?",
        answer:
          "Déposez des fichiers JPG, PNG, WebP, HEIC/HEIF d'iPhone, GIF, BMP ou SVG jusqu'à 20 Mo chacun. Les GIF animés exportent un premier cadre statique arrondi.",
      },
      {
        question: "Puis-je coller directement une capture d'écran du presse-papiers pour arrondir ses coins ?",
        answer:
          "Oui, faites une capture d'écran et appuyez sur Ctrl+V (ou Cmd+V sur Mac) quand la zone d'import est active. Elle s'ouvre directement dans l'aperçu en damier, prête pour l'arrondi des coins.",
      },
      {
        question: "Qu'advient-il de mes valeurs individuelles par coin si je décoche le mode par coin ?",
        answer:
          "Décocher le contrôle individuel par coin ramène le canevas au curseur unique Rayon de tous les coins, pour que les quatre coins restent uniformes. Le recocher initialise proprement les quatre curseurs de coin à partir de votre rayon uniforme actuel.",
      },
      {
        question: "L'arrondi des coins supprime-t-il aussi les balises GPS EXIF intégrées ?",
        answer:
          "Oui, le rendu des pixels via un découpage propre sur canevas supprime automatiquement les en-têtes EXIF JPEG et GPS d'origine. Cela protège votre vie privée chaque fois que vous partagez des avatars arrondis ou des miniatures de produits en ligne.",
      },
      {
        question: "Comment remplacer l'image actuelle tout en gardant ma configuration de rayon de coin ?",
        answer:
          "Cliquez sur Changer d'image au-dessus de la zone d'aperçu pour importer une nouvelle photo. Votre rayon uniforme, vos valeurs par coin, votre mode de remplissage et votre format de sortie restent actifs pour des exports répétés rapides.",
      },
      {
        question: "Quel nom de fichier est attribué aux images arrondies téléchargées ?",
        answer:
          "Le téléchargeur conserve votre nom de fichier d'origine nettoyé et ajoute _rounded avant .png, .webp ou .jpg. Par exemple, avatar.jpg se télécharge proprement sous avatar_rounded.png.",
      },
      {
        question: "Dois-je choisir PNG ou WebP quand j'exporte des visuels web arrondis ?",
        answer:
          "Choisissez PNG pour une compatibilité maximale avec les applications plus anciennes et une netteté des bords sans perte. Choisissez WebP quand vous voulez des visuels de site web nettement plus petits qui conservent tout de même la transparence alpha complète des coins.",
      },
      {
        question: "Puis-je utiliser Arrondir les coins d'une image sur les navigateurs mobiles iOS ou Android ?",
        answer:
          "Oui, tous les curseurs, cases à cocher et bascules de format s'adaptent en douceur aux écrans mobiles dans Safari et Chrome. Vous pouvez arrondir les coins de portraits directement depuis la galerie de votre téléphone.",
      },
      {
        question: "En quoi cet outil diffère-t-il du Générateur de bordure d'image ?",
        answer:
          "Arrondir les coins d'une image découpe proprement votre photo à ses dimensions d'origine sans ajouter de rembourrage extérieur. Le Générateur de bordure d'image enveloppe plutôt votre image de passe-partout colorés, de dégradés ou de cadres Polaroid.",
      },
      {
        question: "Y a-t-il des filigranes, des frais ou des limites quotidiennes sur les exports arrondis ?",
        answer:
          "Non, vous pouvez arrondir les coins d'un nombre illimité de photos jusqu'à 20 Mo par fichier, entièrement gratuitement. Aucun filigrane, compte ou abonnement n'apparaît jamais sur les téléchargements.",
      },
    ],
    relatedSlugs: ["/image-border-generator", "/image-cropper", "/add-background-to-image", "/"],
  },
  {
    slug: "/image-brightness-editor",
    name: "Éditeur de luminosité d'image",
    shortDescription: "Éclaircissez ou assombrissez vos photos avec un aperçu avant/après en direct.",
    category: "crop-edit",
    seoTitle: "Éditeur de luminosité d'image gratuit en ligne",
    seoDescription:
      "Ajustez la lumière d'une photo avec notre éditeur de luminosité gratuit : glissez de -100 % à +100 %, testez les préréglages, comparez avant et après, en privé.",
    h1: "Éditeur de luminosité d'image en ligne gratuit",
    subtitle:
      "Conçu pour les photographes qui corrigent des prises sous-exposées, les agents immobiliers qui éclaircissent des pièces et les vendeurs qui soignent leurs photos produits, notre éditeur de luminosité d'image pour navigateur ajuste l'éclairage en douceur sans envoyer les originaux. Réglez le curseur de -100 % à +100 %, testez les préréglages d'éclairage instantanés et inspectez les résultats avec la comparaison en direct.",
    howToSteps: [
      {
        title: "Déposez ou sélectionnez une photo à éclaircir ou à assombrir",
        description:
          "Importez n'importe quelle image JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu'à 20 Mo dans la zone de dépôt, ou collez-la via Ctrl+V.",
      },
      {
        title: "Ajustez le curseur Niveau de luminosité ou les préréglages rapides",
        description:
          "Déplacez le niveau de luminosité de -100 % Plus sombre à +100 % Plus clair, ou cliquez sur Sombre (-30 %), Faible (-15 %), Original (0 %), Lumineux (+15 %), Éclatant (+30 %) ou Haute clé (+50 %).",
      },
      {
        title: "Comparez les vues Après, Avant et Comparaison divisée",
        description:
          "Basculez entre les onglets Après, Avant et Comparaison divisée — ou lancez la comparaison en plein écran — pour vérifier les détails des ombres et des hautes lumières.",
      },
      {
        title: "Sélectionnez le format de sortie et la qualité",
        description:
          "Choisissez le format de sortie Original, JPG, PNG ou WEBP et ajustez le curseur Qualité (de 10 % à 100 %) quand vous enregistrez dans un format avec perte.",
      },
      {
        title: "Téléchargez votre image modifiée",
        description:
          "Cliquez sur Télécharger l'image modifiée pour traiter la courbe de luminosité à la pleine résolution d'origine et enregistrer <nom>_brightness en local.",
      },
    ],
    features: [
      {
        title: "Ajustement des pixels en temps réel",
        description:
          "Aperçu instantané sur les navigateurs de bureau et mobiles, sans aller-retour vers un serveur.",
      },
      {
        title: "Préréglages d'exposition rapides",
        description:
          "Testez les préréglages Sombre, Faible, Lumineux, Éclatant et Haute clé en un clic.",
      },
      {
        title: "Inspection avant et après",
        description:
          "Comparez la photo modifiée côte à côte ou avec le curseur de comparaison interactif.",
      },
      {
        title: "Traitement privé côté client",
        description:
          "Vos photos personnelles restent strictement dans votre navigateur.",
      },
    ],
    faqs: [
      {
        question: "Comment le curseur Niveau de luminosité modifie-t-il les pixels sans décolorer immédiatement les couleurs ?",
        answer:
          "Déplacer le niveau de luminosité entre -100 % Plus sombre et +100 % Plus clair ajuste la luminance en douceur sur tout le cadre en temps réel dans le canevas HTML5. Vérifier la comparaison divisée ou la comparaison en plein écran vous permet d'éclaircir les ombres sombres sans écrêter les blancs lumineux.",
      },
      {
        question: "Pourquoi ma photo s'affiche-t-elle automatiquement à +15 % juste après l'import ?",
        answer:
          "L'éditeur démarre à Lumineux (+15 %) pour que vous voyiez immédiatement une légère hausse d'exposition au chargement. Cliquez sur Original (0 %) ou sur Réinitialiser dans les réglages de luminosité à tout moment pour comparer à partir de la base neutre.",
      },
      {
        question: "Quels préréglages rapides sont inclus pour tester l'exposition en un clic ?",
        answer:
          "Six préréglages couvrent les réglages courants : Sombre (-30 %), Faible (-15 %), Original (0 %), Lumineux (+15 %), Éclatant (+30 %) et Haute clé (+50 %). Cliquer sur une carte applique immédiatement le curseur tout en vous laissant affiner par pas de 1 %.",
      },
      {
        question: "En quoi Après, Avant, Comparaison divisée et Comparaison en plein écran diffèrent-ils ?",
        answer:
          "Après affiche votre canevas modifié, Avant révèle l'image d'origine intacte, et Comparaison divisée ajoute un curseur interactif Avant/Après directement dans la zone d'affichage. Cliquer sur Comparaison en plein écran génère un fichier en pleine résolution et ouvre la fenêtre de comparaison détaillée.",
      },
      {
        question: "Éclaircir une photo réduit-il sa résolution ou ses dimensions en pixels ?",
        answer:
          "Non, l'aperçu en direct est mis à l'échelle jusqu'à 1000 px uniquement pour une réponse fluide du curseur interactif. Cliquer sur Télécharger l'image modifiée génère un canevas en pleine résolution qui préserve la largeur et la hauteur exactes d'origine de votre image.",
      },
      {
        question: "Quand dois-je assombrir une photo avec des valeurs négatives comme -15 % ou -30 % ?",
        answer:
          "Les valeurs négatives de luminosité atténuent proprement les photos de téléphone surexposées et les reflets durs des fenêtres. Assombrir une photo principale lumineuse crée aussi un meilleur contraste derrière les titres blancs en surimpression.",
      },
      {
        question: "L'éditeur de luminosité d'image préserve-t-il les arrière-plans transparents des PNG ?",
        answer:
          "Oui, garder Original (pour PNG/WebP) ou choisir PNG ou WebP préserve proprement les zones transparentes contre la zone d'affichage en damier. Si vous choisissez la sortie JPG, les zones transparentes s'aplatissent en douceur sur du blanc uni.",
      },
      {
        question: "Les photos de famille personnelles ou les épreuves clients sont-elles envoyées vers des serveurs externes ?",
        answer:
          "Non, les transformations de luminosité des pixels et l'encodage des formats s'exécutent localement dans votre navigateur à l'aide du canevas HTML5. Vos images ne quittent jamais votre ordinateur ou votre smartphone.",
      },
      {
        question: "Quels formats de fichier puis-je éclaircir ou assombrir ici ?",
        answer:
          "Vous pouvez ouvrir des fichiers JPG, PNG, WebP, HEIC/HEIF d'iPhone, GIF, BMP et SVG jusqu'à 20 Mo chacun. Les GIF animés exportent leur première image éclaircie en image statique.",
      },
      {
        question: "Puis-je coller directement une capture d'écran sombre depuis mon presse-papiers pour l'éclaircir ?",
        answer:
          "Oui, appuyez sur Ctrl+V (ou Cmd+V sur Mac) sur la zone d'import après avoir copié une capture d'écran ou une diapositive sombre. Elle se charge directement dans la zone d'affichage, prête à être ajustée et exportée.",
      },
      {
        question: "Que se passe-t-il si je pousse la luminosité jusqu'à +100 % ?",
        answer:
          "Les réglages positifs extrêmes éclaircissent fortement les tons moyens et poussent les hautes lumières vers le blanc pur, ce qui convient aux visuels stylisés en haute clé mais peut écrêter les textures des hautes lumières dans les portraits. Visez +10 % à +35 % pour une récupération d'exposition naturelle.",
      },
      {
        question: "Puis-je ajuster le contraste ou la vivacité des couleurs après avoir éclairci une image ?",
        answer:
          "Oui, téléchargez d'abord votre photo éclaircie, puis cliquez sur Éditeur de contraste d'image ou Éditeur de saturation d'image dans Outils d'image gratuits associés ci-dessous. Répartir les réglages entre des outils dédiés vous permet d'affiner précisément le contraste ou la richesse des couleurs.",
      },
      {
        question: "Pourquoi la qualité disparaît-elle quand je sélectionne PNG sous Format de sortie ?",
        answer:
          "Le PNG utilise une compression sans perte, sans niveau de qualité variable en pourcentage. Basculez sur Original (pour les JPEG), JPG ou WebP pour révéler et ajuster le curseur Qualité de 10 % à 100 % (90 % par défaut).",
      },
      {
        question: "Comment annuler rapidement toutes les modifications de luminosité ?",
        answer:
          "Cliquez sur le bouton bleu Réinitialiser dans le coin supérieur droit des réglages de luminosité à tout moment. Vous pouvez aussi cliquer sur la carte de préréglage Original (0 %) pour revenir directement à zéro réglage.",
      },
      {
        question: "L'export d'une photo modifiée supprime-t-il les balises de géolocalisation GPS EXIF de l'appareil ?",
        answer:
          "Oui, dessiner sur un nouveau canevas HTML5 construit une image de sortie propre sans recopier les données EXIF de l'appareil. Les coordonnées GPS ou les numéros de série de l'appareil sont automatiquement supprimés.",
      },
      {
        question: "Puis-je charger une autre photo juste après l'export sans actualiser la page ?",
        answer:
          "Oui, cliquez sur l'icône corbeille rouge (Supprimer l'image) dans la barre d'outils de l'aperçu à tout moment. Cela efface proprement la photo active et vous ramène directement à la zone de dépôt d'import.",
      },
      {
        question: "Quel nom de fichier est utilisé quand je clique sur Télécharger l'image modifiée ?",
        answer:
          "L'exportateur conserve votre nom de fichier d'origine nettoyé et ajoute _brightness plus l'extension de format sélectionnée. Par exemple, cuisine.jpg s'enregistre proprement sous cuisine_brightness.jpg.",
      },
      {
        question: "L'éditeur fonctionne-t-il de manière fiable sur Safari iPhone et Chrome Android ?",
        answer:
          "Oui, chaque carte de préréglage, chaque curseur et chaque vue de comparaison divisée fonctionne en douceur sur les écrans tactiles mobiles. Vous pouvez éclaircir les photos sombres de votre galerie directement dans Safari ou Chrome sur votre téléphone.",
      },
      {
        question: "Pourquoi un JPEG sombre et compressé peut-il montrer un léger bruit de bloc quand il est fortement éclairci ?",
        answer:
          "Les ombres des JPEG fortement compressés contiennent souvent des artefacts de quantification cachés dans l'obscurité ; augmenter la luminosité de +40 % ou plus rend visible le bruit d'ombre existant. Garder des réglages modérés (+15 % à +30 %) maintient des tons plus propres.",
      },
      {
        question: "Y a-t-il un filigrane, une inscription de compte ou une limite pour éclaircir des photos ?",
        answer:
          "Non, l'éditeur de luminosité d'image est entièrement gratuit, sans filigrane ni inscription. Vous pouvez éclaircir ou assombrir un nombre illimité de photos jusqu'à 20 Mo par fichier.",
      },
    ],
    relatedSlugs: ["/image-contrast-editor", "/image-saturation-editor", "/image-filters", "/"],
  },
  {
    slug: '/image-contrast-editor',
    name: 'Éditeur de contraste d\'image',
    shortDescription: 'Augmentez ou adoucissez le contraste de vos images avec une comparaison avant/après en direct.',
    category: 'crop-edit',
    seoTitle: 'Éditeur de contraste d\'image gratuit en ligne',
    seoDescription:
      'Ajustez le contraste de vos photos en ligne : de -100 % à +100 %, avec 6 préréglages et une comparaison avant/après dans votre navigateur, sans inscription.',
    h1: 'Éditeur de contraste d\'image gratuit en ligne',
    subtitle:
      'Conçu pour les photographes, les vendeurs en ligne et les designers qui corrigent les photos ternes ou brumeuses, cet éditeur de contraste dans le navigateur vous permet d\'approfondir les ombres et d\'accentuer la séparation tonale en quelques secondes. Choisissez des préréglages en un clic, inspectez des aperçus en écran partagé et exportez localement sans rien téléverser sur un serveur.',
    howToSteps: [
      {
        title: 'Déposez ou sélectionnez une image',
        description:
          'Téléversez une photo JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu\'à 20 Mo dans la zone de dépôt de l\'éditeur, parcourez votre disque ou collez-la directement avec Ctrl+V.',
      },
      {
        title: 'Examinez l\'aperçu en direct du canevas',
        description:
          'Votre photo se charge dans un aperçu de canevas adaptable qui démarre à +20 % de contraste, pour que vous voyiez immédiatement comment une touche subtile affecte la séparation tonale.',
      },
      {
        title: 'Ajustez le curseur de niveau de contraste ou les préréglages',
        description:
          'Faites glisser le curseur de niveau de contraste de -100 % Plat à +100 % Contraste élevé, ou cliquez sur Doux (-25 %), Atténué (-10 %), Original (0 %), Net (+20 %), Intense (+40 %) ou Dramatique (+70 %).',
      },
      {
        title: 'Vérifiez les détails avec les outils de comparaison',
        description:
          'Basculez entre Après, Avant et Comparaison divisée (avec le curseur de séparation vertical), ou cliquez sur Comparer en plein écran pour inspecter les ombres et les hautes lumières de près.',
      },
      {
        title: 'Choisissez le format, la qualité et téléchargez',
        description:
          'Sélectionnez Original, JPG, PNG ou WebP sous Format de sortie, réglez la qualité (10 %–100 %) pour les formats avec perte et cliquez sur Télécharger l\'image modifiée.',
      },
    ],
    features: [
      {
        title: 'Courbe de contraste précise',
        description: 'Étend ou comprime en douceur la plage tonale sans changements brusques de couleur.',
      },
      {
        title: 'Préréglages en un clic',
        description: 'Essayez immédiatement les préréglages Doux, Atténué, Net, Intense ou Dramatique.',
      },
      {
        title: 'Fenêtre interactive avant/après',
        description: 'Inspectez les détails fins des ombres et des hautes lumières avant de télécharger.',
      },
      {
        title: '100 % côté navigateur',
        description: 'Traitement rapide dans le navigateur, sans téléversement ni filigrane.',
      },
    ],
    faqs: [
      {
        question: 'Quel effet visuel produit le déplacement du curseur de contraste vers des valeurs positives ou négatives ?',
        answer:
          'En déplaçant le curseur au-dessus de 0 %, les tons sombres s\'assombrissent et les tons clairs s\'éclaircissent autour du point médian, ce qui fait ressortir le sujet sur les arrière-plans brumeux. En le déplaçant en dessous de 0 %, les hautes lumières et les ombres se resserrent vers un gris moyen neutre, pour une esthétique mate plus douce.',
      },
      {
        question: 'Quels préréglages rapides sont inclus dans le panneau de réglage du contraste ?',
        answer:
          'Six préréglages en un clic sont intégrés : Doux (-25 %), Atténué (-10 %), Original (0 %), Net (+20 %), Intense (+40 %) et Dramatique (+70 %). Cliquer sur un préréglage règle immédiatement le curseur de niveau de contraste et met à jour l\'aperçu en direct du canevas.',
      },
      {
        question: 'Pourquoi l\'éditeur de contraste démarre-t-il à +20 % juste après le téléversement d\'une photo ?',
        answer:
          'L\'éditeur s\'initialise à Net (+20 %) pour que vous voyiez tout de suite une amélioration tonale active plutôt qu\'une image inchangée. Cliquez sur Original (0 %) ou sur Réinitialiser en haut des réglages du contraste à tout moment pour revenir à zéro.',
      },
      {
        question: 'Comment l\'éditeur de contraste d\'image calcule-t-il les changements de pixels ?',
        answer:
          'Il applique une courbe de contraste linéaire standard pixel par pixel sur les canaux RVB dans HTML5 Canvas, sans toucher le canal alpha. En effectuant les calculs directement dans ImageData, il évite les écarts des filtres CSS du navigateur sur Safari iOS et les navigateurs mobiles.',
      },
      {
        question: 'Comment vérifier les ombres avant et après sans deviner ?',
        answer:
          'Utilisez les onglets Après, Avant et Comparaison divisée juste au-dessus de l\'aperçu pour faire glisser une ligne de séparation en direct de 0 % à 100 % sur votre image. Pour une inspection plus rapprochée des pixels, cliquez sur Comparer en plein écran pour ouvrir la fenêtre de comparaison côte à côte.',
      },
      {
        question: 'Est-ce qu\'augmenter le contraste écrête les nuages lumineux ou bouche les ombres noires ?',
        answer:
          'En poussant le contraste agressivement vers +70 % à +100 %, les hautes lumières presque blanches tendent vers le 255 pur et les ombres profondes vers le 0. Utilisez la comparaison divisée pour surveiller la texture subtile des chemises claires ou des cheveux sombres, et redescendez vers +15 % à +40 % si un écrêtage apparaît.',
      },
      {
        question: 'Quels types de fichiers image puis-je ouvrir dans l\'éditeur de contraste ?',
        answer:
          'Vous pouvez téléverser des fichiers JPG, PNG, WebP, HEIC/HEIF d\'iPhone, GIF, BMP et SVG jusqu\'à 20 Mo par fichier. Les photos HEIC sont décodées automatiquement dans votre navigateur avant d\'être affichées sur le canevas d\'édition.',
      },
      {
        question: 'Puis-je enregistrer des logos PNG au contraste modifié en conservant leurs arrière-plans transparents ?',
        answer:
          'Oui, en conservant le format Original sur un PNG transparent ou en sélectionnant PNG ou WebP en sortie, la transparence alpha est entièrement préservée. Ce n\'est qu\'en basculant le format de sortie sur JPG que les zones transparentes sont remplies sur un fond blanc uni.',
      },
      {
        question: 'L\'aperçu réduit-il la résolution finale du téléchargement ?',
        answer:
          'Non, l\'aperçu à l\'écran limite l\'échelle d\'affichage à 1 000 px sur le côté le plus long pour que le glisser du curseur reste instantané. Lorsque vous cliquez sur Télécharger l\'image modifiée, la même formule de contraste est appliquée sur 100 % des dimensions en pixels d\'origine.',
      },
      {
        question: 'Puis-je coller une capture d\'écran depuis mon presse-papiers pour corriger des captures ternes ?',
        answer:
          'Oui, appuyez sur Ctrl+V (ou Cmd+V sur Mac) n\'importe où sur l\'écran de téléversement pour charger une image du presse-papiers directement dans l\'éditeur. Ajuster le contraste de +20 % à +35 % est idéal pour rendre plus nettes les lignes de graphique pâles ou le texte d\'interface gris.',
      },
      {
        question: 'Est-ce que régler le contraste convertit les photos couleur en noir et blanc ?',
        answer:
          'Non, le contraste modifie la distance de luminance sur les canaux rouge, vert et bleu proportionnellement, sans supprimer les informations de teinte. Notez qu\'un contraste positif fort augmente naturellement la vivacité perçue des couleurs, tandis qu\'un contraste négatif les atténue.',
      },
      {
        question: 'Quel réglage de qualité choisir lors de l\'exportation en JPG ou WebP ?',
        answer:
          'Le curseur de qualité est réglé par défaut sur 90 %, ce qui garde les dégradés tonaux lisses et sans bandes tout en maintenant des fichiers de poids modéré. Descendez vers 75 %–80 % pour des téléversements web plus légers, ou passez au PNG pour une sortie entièrement sans perte.',
      },
      {
        question: 'Comment le fichier téléchargé est-il nommé après la modification du contraste ?',
        answer:
          'Votre fichier enregistré ajoute _contrast au nom de base d\'origine nettoyé, suivi de l\'extension du format choisi, par exemple portrait_contrast.jpg. Votre fichier d\'origine sur le disque n\'est jamais modifié ni écrasé.',
      },
      {
        question: 'Cet outil peut-il rendre nettes des photos floues ou hors de mise au point ?',
        answer:
          'Augmenter le contraste accroît la séparation des contours entre les zones claires et sombres, ce qui peut rendre les photos brumeuses nettement plus claires. Toutefois, il ajuste les courbes tonales plutôt que d\'appliquer un renforcement des contours par convolution, donc un flou de bougé important ne peut pas être corrigé.',
      },
      {
        question: 'Des photos sont-elles téléversées vers des serveurs externes pour le traitement du contraste ?',
        answer:
          'Non, chaque calcul de pixel se fait dans l\'onglet de votre navigateur local avec HTML5 Canvas et JavaScript. Les portraits personnels, les pièces d\'identité numérisées et les photos de produits inédites ne quittent jamais votre ordinateur ou votre téléphone.',
      },
      {
        question: 'Que se passe-t-il lorsque je téléverse un GIF animé pour ajuster le contraste ?',
        answer:
          'HTML5 Canvas affiche et ajuste la première image du GIF, en exportant une seule image statique dans le format sélectionné. Les ajustements de contraste sur les GIF animés à plusieurs images ne sont pas pris en charge ici.',
      },
      {
        question: 'En quoi le réglage du contraste diffère-t-il du réglage de la luminosité ?',
        answer:
          'La luminosité déplace tous les pixels ensemble vers plus clair ou plus sombre de façon uniforme, tandis que le contraste élargit ou réduit l\'écart entre les ombres sombres et les hautes lumières autour du point de gris moyen. Si une photo sombre paraît délavée après l\'avoir éclaircie, poursuivez avec notre outil de contraste.',
      },
      {
        question: 'Puis-je utiliser un contraste négatif pour adoucir les ombres dures de midi sur les portraits ?',
        answer:
          'Oui, choisir Doux (-25 %) ou Atténué (-10 %) réduit les transitions brutales entre la peau éclairée par le soleil et les ombres sombres. Pour un éblouissement extrême ou une ambiance éditoriale mate, faites glisser le curseur entre -30 % et -50 %.',
      },
      {
        question: 'Comment charger une nouvelle photo sans actualiser l\'onglet du navigateur ?',
        answer:
          'Cliquez sur l\'icône de corbeille dans le coin supérieur droit du panneau d\'aperçu pour effacer l\'image actuelle et revenir à la zone de téléversement. Cela libère la mémoire temporaire du navigateur et prépare le canevas pour votre prochain fichier.',
      },
      {
        question: 'L\'éditeur de contraste fonctionne-t-il de façon fiable sur Safari iOS et Chrome Android ?',
        answer:
          'Oui, les calculs tonaux s\'exécutent explicitement dans des tableaux de pixels ImageData JavaScript plutôt que de dépendre des filtres CSS du canevas, qui se comportent de façon incohérente sur les navigateurs mobiles. Cela garde les aperçus de contraste et les téléchargements finaux uniformes sur iPhone, Android, macOS et Windows.',
      },
    ],
    relatedSlugs: ['/image-brightness-editor', '/image-saturation-editor', '/image-filters', '/'],
  },
  {
    slug: '/image-saturation-editor',
    name: 'Éditeur de saturation d\'image',
    shortDescription: 'Augmentez l\'intensité des couleurs ou convertissez des photos en noir et blanc, le tout dans votre navigateur.',
    category: 'crop-edit',
    seoTitle: 'Éditeur de saturation d\'image gratuit en ligne',
    seoDescription:
      'Augmentez ou réduisez la saturation de photos gratuitement en ligne : de -100 % (noir et blanc) à +100 % (couleurs vives), avec 6 préréglages et vue divisée.',
    h1: 'Éditeur de saturation d\'image gratuit en ligne',
    subtitle:
      'Créé pour les photographes, les créateurs de réseaux sociaux et les éditeurs e-commerce qui équilibrent l\'intensité des couleurs, cet éditeur de saturation dans le navigateur ajuste l\'intensité des couleurs selon la luminosité perçue. Passez en douceur d\'un gris net à -100 % à des tons vifs à +100 %, avec comparaison divisée et exportation locale.',
    howToSteps: [
      {
        title: 'Chargez une photo dans l\'éditeur',
        description:
          'Glissez-déposez n\'importe quelle image JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu\'à 20 Mo, choisissez un fichier sur votre appareil ou collez-la avec Ctrl+V.',
      },
      {
        title: 'Voyez l\'augmentation initiale des couleurs',
        description:
          'L\'éditeur se charge avec le niveau de saturation à +25 %, pour que vous voyiez immédiatement comment un chroma plus riche rehausse les couleurs ternes sur l\'aperçu en direct.',
      },
      {
        title: 'Ajustez le niveau de saturation ou cliquez sur un préréglage',
        description:
          'Faites glisser le curseur de -100 % Niveaux de gris à +100 % Vif, ou choisissez Niveaux de gris (-100 %), Atténué (-40 %), Original (0 %), Riche (+30 %), Vif (+60 %) ou Hyper (+90 %).',
      },
      {
        title: 'Inspectez les tons de peau avec la comparaison divisée',
        description:
          'Basculez entre Après, Avant ou Comparaison divisée avec le curseur de balayage, ou cliquez sur Comparer en plein écran, pour vous assurer que les rouges et les tons de peau paraissent équilibrés et non sursaturés.',
      },
      {
        title: 'Choisissez le format de sortie et enregistrez localement',
        description:
          'Sélectionnez Original, JPG, PNG ou WebP, ajustez la qualité (10 %–100 %) si ce n\'est pas du PNG et cliquez sur Télécharger l\'image modifiée.',
      },
    ],
    features: [
      {
        title: 'Saturation qui préserve la luminosité',
        description: 'Ajuste l\'intensité des couleurs selon la luminosité perçue pour que les tons restent naturels.',
      },
      {
        title: 'Des niveaux de gris à l\'hyper-vif',
        description: 'Glissez à -100 % pour un noir et blanc instantané ou montez en positif pour des couleurs riches et vibrantes.',
      },
      {
        title: 'Aperçu en direct avant/après',
        description: 'Basculez ou faites glisser la vue de comparaison pour ne pas sursaturer les tons de peau.',
      },
      {
        title: 'Privé et gratuit',
        description: 'Sans téléversement, sans compte et sans filigrane.',
      },
    ],
    faqs: [
      {
        question: 'Comment cet éditeur de saturation d\'image préserve-t-il la luminosité perçue de la photo ?',
        answer:
          'Chaque pixel calcule la luminance perçue avec les poids ITU-R BT.709 (0,2126 R + 0,7152 G + 0,0722 B) et interpole les canaux RVB vers ce point de gris neutre ou en s\'en éloignant. Ainsi, les rouges et les verts colorés ne deviennent pas trop lumineux ni boueux lors de la désaturation.',
      },
      {
        question: 'Quels préréglages en un clic sont intégrés aux réglages de saturation ?',
        answer:
          'Vous disposez de six préréglages : Niveaux de gris (-100 %), Atténué (-40 %), Original (0 %), Riche (+30 %), Vif (+60 %) et Hyper (+90 %). Cliquer sur un bouton met à jour l\'aperçu immédiatement, et vous pouvez ensuite affiner avec le curseur.',
      },
      {
        question: 'Puis-je transformer un portrait couleur en niveaux de gris nets en un clic ?',
        answer:
          'Oui, cliquez sur le préréglage Niveaux de gris (-100 %) ou faites glisser le niveau de saturation tout à gauche jusqu\'à -100 %. Comme il utilise la pondération standard de la luminance, les tons de peau et la végétation se convertissent en valeurs monochromes d\'aspect naturel plutôt qu\'en moyennes plates.',
      },
      {
        question: 'Pourquoi le niveau de saturation est-il par défaut à +25 % au premier chargement d\'un fichier ?',
        answer:
          'Démarrer à +25 % montre immédiatement une légère augmentation de la vivacité dès l\'apparition de votre photo. Cliquez sur Original (0 %) ou sur le lien Réinitialiser à tout moment si vous préférez ajuster vers le haut ou vers le bas à partir du point neutre.',
      },
      {
        question: 'Comment éviter que les portraits paraissent orange ou néon quand j\'augmente les couleurs ?',
        answer:
          'Restez dans la plage de +15 % à +35 % pour les personnes et passez à l\'onglet Comparaison divisée pour balayer entre vos tons de peau d\'origine et le canevas renforcé. Comparer en plein écran permet aussi d\'inspecter de près les joues, les lèvres et les étiquettes de produits avant l\'exportation.',
      },
      {
        question: 'Que se passe-t-il si j\'augmente la saturation d\'une photo déjà monochrome ou grise ?',
        answer:
          'Les pixels dont les valeurs rouge, vert et bleu sont égales se trouvent juste sur l\'axe de luminance, donc augmenter la saturation ne peut pas inventer une couleur qui n\'existe pas. Sur les images sépia ou en noir et blanc à teinte chaude, en revanche, la saturation positive accentue la dominante de couleur sous-jacente.',
      },
      {
        question: 'L\'éditeur de saturation prend-il en charge les icônes PNG transparentes et les autocollants WebP ?',
        answer:
          'Oui, les ajustements de pixels modifient l\'intensité des couleurs RVB sans toucher le canal alpha de transparence. Conservez le format Original ou sélectionnez PNG ou WebP sous Format de sortie pour conserver les arrière-plans transparents proprement.',
      },
      {
        question: 'Que devient la transparence si j\'exporte un autocollant désaturé en JPG ?',
        answer:
          'Comme le JPG ne prend pas en charge la transparence alpha, les pixels transparents sont aplatis automatiquement sur un canevas blanc uni (#FFFFFF) avant l\'encodage JPEG. Choisissez PNG ou WebP chaque fois que vous devez préserver la transparence.',
      },
      {
        question: 'Quels formats de téléversement et quelle taille maximale de fichier sont acceptés ?',
        answer:
          'Vous pouvez déposer des images JPG, PNG, WebP, HEIC/HEIF, GIF, BMP et SVG jusqu\'à 20 Mo chacune. Les GIF animés chargent leur première image sur le canevas pour l\'édition et s\'exportent comme une image statique.',
      },
      {
        question: 'Y a-t-il une différence entre la netteté de l\'aperçu et la résolution du fichier téléchargé ?',
        answer:
          'Le canevas interactif affiche l\'aperçu jusqu\'à 1 000 px sur la dimension la plus longue pour que les ajustements du curseur restent fluides et sans délai. Lors de l\'exportation, une passe de canevas à pleine résolution est exécutée avec la largeur et la hauteur d\'origine de votre fichier.',
      },
      {
        question: 'Quand dois-je utiliser Atténué (-40 %) plutôt que Niveaux de gris (-100 %) ?',
        answer:
          'Atténué (-40 %) calme les enseignes au néon trop lumineuses, les arrière-plans de pièces chargés ou l\'éclairage de produit dur, tout en conservant des nuances de couleur subtiles. Il convient bien aux photos principales de blog calmes ou aux arrière-plans derrière du texte.',
      },
      {
        question: 'Puis-je coller des images directement depuis mon presse-papiers dans l\'outil de saturation ?',
        answer:
          'Oui, copiez n\'importe quelle image ou capture d\'écran dans votre presse-papiers et appuyez sur Ctrl+V (ou Cmd+V) sur l\'invite de téléversement. Elle s\'ouvre immédiatement dans l\'éditeur, prête pour le réglage des couleurs.',
      },
      {
        question: 'Comment le nom de fichier exporté distingue-t-il les photos modifiées en saturation ?',
        answer:
          'Les exportations ajoutent automatiquement _saturation au nom de fichier d\'origine nettoyé (par exemple, sunset_saturation.jpg). Votre image source reste intacte sur votre appareil.',
      },
      {
        question: 'Quel réglage de qualité s\'applique lors de l\'enregistrement en Original, JPG ou WebP ?',
        answer:
          'Les exportations JPG et WebP sont par défaut à 90 % de qualité, que vous pouvez régler entre 10 % et 100 % avant de télécharger. Lorsque le PNG est sélectionné, le curseur de qualité se masque car le PNG s\'exporte toujours sans perte.',
      },
      {
        question: 'Les photos téléversées sont-elles transmises à des GPU dans le cloud ou à des serveurs tiers ?',
        answer:
          'Jamais — chaque calcul de pixel s\'exécute dans l\'onglet de votre navigateur local, sur le matériel de votre propre appareil. Aucune donnée d\'image, aucun préréglage ni aucun nom de fichier n\'est envoyé sur le réseau.',
      },
      {
        question: 'La modification de la saturation supprime-t-elle les métadonnées EXIF ou GPS de l\'appareil photo ?',
        answer:
          'Oui, dessiner sur HTML5 Canvas et écrire un nouveau blob d\'image omet les en-têtes EXIF d\'origine, comme les numéros de série de l\'appareil photo et les balises de localisation GPS. Cela aide à garder les photos sociales partagées propres sur le plan de la confidentialité.',
      },
      {
        question: 'Comment réinitialiser uniquement le curseur de saturation sans recharger ma photo ?',
        answer:
          'Cliquez sur le bouton Réinitialiser dans le coin supérieur droit des réglages de saturation pour ramener immédiatement le curseur à 0 %. Vous pouvez aussi cliquer sur le bouton de préréglage rapide Original (0 %) juste sous le curseur, sans téléverser à nouveau votre fichier.',
      },
      {
        question: 'Puis-je rehausser le feuillage et les ciels d\'un paysage avec Hyper (+90 %) proprement ?',
        answer:
          'Hyper (+90 %) double en douceur les différences de chroma jusqu\'aux limites des canaux RVB (0–255), produisant des affiches de voyage spectaculaires et des produits qui attirent l\'œil. Surveillez les rouges et les bleus vifs dans la comparaison divisée pour vous assurer que les textures fines des pétales ou des tissus ne s\'écrêtent pas.',
      },
      {
        question: 'Puis-je convertir un graphique PNG coloré en WebP plus léger tout en atténuant ses couleurs ?',
        answer:
          'Oui, réglez le niveau de saturation souhaité, sélectionnez WEBP sous Format de sortie et ajustez la qualité à 80 %–90 %. En cliquant sur Télécharger l\'image modifiée, vous obtenez un WebP compact aux couleurs équilibrées en une seule étape.',
      },
      {
        question: 'L\'outil fonctionne-t-il hors ligne une fois chargé et sur les écrans tactiles mobiles ?',
        answer:
          'Oui, les curseurs, les boutons de préréglages et le curseur de comparaison en vue divisée répondent en douceur aux gestes tactiles sur Safari iOS et Chrome Android. Comme le traitement ne nécessite aucun appel au serveur, les modifications fonctionnent même avec des connexions mobiles lentes.',
      },
    ],
    relatedSlugs: ['/image-filters', '/image-brightness-editor', '/image-contrast-editor', '/'],
  },
  {
    slug: '/image-filters',
    name: 'Filtres d\'image',
    shortDescription: 'Appliquez des filtres niveaux de gris, sépia, vintage, chaud, froid et noir avec une intensité réglable.',
    category: 'crop-edit',
    seoTitle: 'Filtres d\'image gratuits en ligne – Vintage et sépia',
    seoDescription:
      'Appliquez des filtres d\'image en ligne : vintage, sépia, noir et blanc, chaud, froid et plus. Ajustez l\'intensité du filtre de 0 % à 100 % sans inscription.',
    h1: 'Filtres d\'image gratuits en ligne',
    subtitle:
      'Idéals pour les créateurs, les blogueurs et tous ceux qui veulent donner à leurs photos quotidiennes une esthétique cohérente, ces filtres d\'image gratuits en ligne offrent 11 tons de couleur sélectionnés avec des miniatures en direct. Mélangez n\'importe quel filtre en douceur avec le curseur d\'intensité et enregistrez des copies à pleine résolution dans votre navigateur.',
    howToSteps: [
      {
        title: 'Déposez ou choisissez une image',
        description:
          'Téléversez n\'importe quelle photo JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu\'à 20 Mo, choisissez un fichier sur le disque ou collez-la directement avec Ctrl+V.',
      },
      {
        title: 'Parcourez les miniatures de filtres en direct',
        description:
          'Examinez la grille de 12 cartes de préréglages de filtres, avec de vraies miniatures d\'aperçu d\'Original plus 11 tons stylisés générés à partir de votre image téléversée.',
      },
      {
        title: 'Sélectionnez un style prédéfini',
        description:
          'Cliquez sur Niveaux de gris, Sépia, Vintage, Chaud, Froid, Contraste élevé, Fondu mat, Dramatique, Noir et blanc, Heure dorée ou Inverser pour l\'appliquer au canevas principal.',
      },
      {
        title: 'Mélangez la force avec l\'intensité du filtre',
        description:
          'Faites glisser le curseur d\'intensité du filtre entre 0 % et 100 % pour adoucir les tons forts en lavis de couleur subtils (ou cliquez sur Réinitialiser pour revenir à Original).',
      },
      {
        title: 'Maintenez l\'original ou ouvrez la fenêtre Comparer',
        description:
          'Maintenez enfoncé Maintenir pour voir l\'original pour des vérifications A/B instantanées, ou cliquez sur Comparer pour ouvrir la fenêtre interactive d\'inspection avec curseur divisé.',
      },
      {
        title: 'Choisissez le format de sortie et téléchargez',
        description:
          'Sélectionnez Original, JPG, PNG ou WebP, ajustez la qualité (10 %–100 %) si nécessaire et cliquez sur Télécharger l\'image filtrée.',
      },
    ],
    features: [
      {
        title: 'Plus de 11 préréglages de filtres sélectionnés',
        description: 'Comprend Niveaux de gris, Sépia, Vintage, Chaud, Froid, Contraste élevé, Fondu mat, Dramatique, Noir et blanc, Heure dorée et Inverser.',
      },
      {
        title: 'Curseur d\'intensité fluide',
        description: 'Mélangez n\'importe quel filtre en douceur entre 0 % et 100 %, au lieu de rester avec des valeurs par défaut brutales.',
      },
      {
        title: 'Bande de miniatures en direct',
        description: 'Voyez à quoi ressemble chaque filtre sur votre vraie photo avant d\'en choisir un.',
      },
      {
        title: 'Canevas 100 % dans le navigateur',
        description: 'Fonctionne prêt à l\'emploi hors ligne dans votre navigateur, sans téléversement vers des serveurs.',
      },
    ],
    faqs: [
      {
        question: 'Quels 11 styles de filtres puis-je voir dans la grille des filtres d\'image ?',
        answer:
          'À côté d\'Original, la grille génère des miniatures en direct de Niveaux de gris, Sépia, Vintage, Chaud, Froid, Contraste élevé, Fondu mat, Dramatique, Noir et blanc, Heure dorée et Inverser. Chaque miniature est affichée directement à partir de votre photo téléversée, et non avec des icônes d\'exemple génériques.',
      },
      {
        question: 'Comment fonctionne le curseur d\'intensité du filtre entre 0 % et 100 % ?',
        answer:
          'En réglant l\'intensité du filtre en dessous de 100 %, les valeurs de pixels RVB filtrés sont mélangées linéairement vers vos pixels d\'origine. Par exemple, régler Vintage ou Heure dorée à 45 % applique un lavis de film doux sans dominer les tons naturels de la peau.',
      },
      {
        question: 'Pourquoi l\'outil de filtres sélectionne-t-il Vintage à 100 % quand je dépose une photo ?',
        answer:
          'Il démarre avec Vintage à intensité maximale pour que vous voyiez un effet terminé sur le canevas principal dès le téléversement de la photo. Cliquez simplement sur une autre carte de préréglage ou sur Réinitialiser pour revenir à Original.',
      },
      {
        question: 'En quoi les filtres Niveaux de gris et Noir et blanc diffèrent-ils ?',
        answer:
          'Niveaux de gris convertit les couleurs en tons de noir et blanc équilibrés avec des poids naturels de luminance, sans modifier le contraste. Noir et blanc ajoute une forte augmentation de contraste de 1,65× par-dessus la conversion en niveaux de gris, avec des ombres sombres intenses et des hautes lumières cinématographiques lumineuses.',
      },
      {
        question: 'Comment Sépia, Vintage, Fondu mat et Heure dorée diffèrent-ils visuellement ?',
        answer:
          'Sépia déplace toute l\'image vers des tons bruns monochromes classiques, tandis que Vintage mélange le sépia chaud aux couleurs d\'origine avec une chaleur ténue et estompée. Fondu mat élève les noirs sombres vers des gris ardoise doux, et Heure dorée intensifie les rouges et les jaunes chauds tout en refroidissant les bleus des ombres.',
      },
      {
        question: 'Comment le bouton Maintenir pour voir l\'original accélère-t-il l\'édition ?',
        answer:
          'En maintenant enfoncé Maintenir pour voir l\'original avec la souris ou le doigt, le canevas revient temporairement à votre photo non modifiée et affiche un badge Original. En le relâchant, l\'aperçu filtré se restaure instantanément, pour que vous puissiez comparer A/B en quelques millisecondes.',
      },
      {
        question: 'Puis-je aussi inspecter des divisions côte à côte avant d\'enregistrer un filtre ?',
        answer:
          'Oui, cliquez sur le bouton Comparer à côté de Maintenir pour voir l\'original pour ouvrir la fenêtre complète de comparaison des filtres. Elle montre les tailles en octets d\'origine et filtrée, ainsi qu\'un curseur interactif de balayage divisé.',
      },
      {
        question: 'Les images téléchargées sont-elles traitées à la même petite taille que les miniatures de préréglages ?',
        answer:
          'Non, la grille de préréglages utilise de minuscules miniatures de 120 px pour des aperçus instantanés et l\'espace de travail principal est plafonné à 1 000 px pour plus de fluidité. En cliquant sur Télécharger l\'image filtrée, la résolution complète en pixels d\'origine est traitée sur HTML5 Canvas.',
      },
      {
        question: 'Quels formats de fichiers et quelle taille maximale fonctionnent avec ces filtres photo ?',
        answer:
          'Vous pouvez déposer des fichiers JPG, PNG, WebP, HEIC/HEIF d\'iPhone, GIF, BMP et SVG jusqu\'à 20 Mo par téléversement. Les formats de sortie pris en charge sont Original, JPG, PNG et WebP.',
      },
      {
        question: 'Qu\'advient-il des zones transparentes des logos PNG lors de l\'application de Chaud, Froid ou Inverser ?',
        answer:
          'Tous les calculs de pixels des filtres modifient uniquement les canaux rouge, vert et bleu, sans toucher la transparence alpha. Conservez la sortie Original, PNG ou WebP pour préserver les arrière-plans transparents ; en choisissant JPG, les zones transparentes sont remplies de blanc uni.',
      },
      {
        question: 'À quoi le filtre Inverser est-il le plus utile ?',
        answer:
          'Inverser soustrait chaque canal RVB de 255 pour produire un négatif de couleur exact de votre image. Les développeurs l\'utilisent pour inverser les diagrammes en mode sombre pour des documents blancs, et les photographes pour prévisualiser des négatifs de film numérisés.',
      },
      {
        question: 'Les effets de filtre sont-ils cohérents sur Chrome, Firefox et Safari iPhone ?',
        answer:
          'Oui, les 11 préréglages sont calculés directement dans des boucles de pixels ImageData JavaScript, au lieu de dépendre des chaînes CSS ctx.filter. Cela garantit des couleurs identiques sur Safari iOS, Chrome Android et les navigateurs de bureau.',
      },
      {
        question: 'Puis-je combiner deux filtres, comme Froid plus Fondu mat, sur la même image ?',
        answer:
          'Chaque préréglage est calculé directement à partir de votre image d\'origine propre en une seule passe, donc cliquer sur une nouvelle tuile change de préréglage proprement sans dégrader la qualité. Pour combiner deux tons, téléchargez votre premier PNG filtré et déposez-le à nouveau pour une deuxième passe.',
      },
      {
        question: 'Comment les noms de fichiers de sortie sont-ils étiquetés pour que je me souvienne du filtre exporté ?',
        answer:
          'L\'exportateur ajoute l\'ID du préréglage à votre nom de fichier de base nettoyé, comme photo_golden-hour.jpg ou photo_noir.webp. Cela facilite la distinction de deux ou trois aspects d\'essai exportés dans un même dossier.',
      },
      {
        question: 'Le téléversement d\'une photo pour appliquer des filtres l\'envoie-t-il à un serveur externe ?',
        answer:
          'Non, les miniatures, les aperçus en direct du canevas et les exportations finales s\'exécutent entièrement dans la mémoire de l\'onglet de votre navigateur. Aucune photo n\'est transférée vers des serveurs distants ni stockée dans des journaux cloud.',
      },
      {
        question: 'Puis-je utiliser les filtres Froid ou Contraste élevé sur des captures collées depuis le presse-papiers ?',
        answer:
          'Oui, appuyez sur Ctrl+V (ou Cmd+V) sur la zone de téléversement pour charger immédiatement toute capture copiée. Contraste élevé et Noir et blanc sont particulièrement efficaces pour éclaircir le texte pâle des scans de documents.',
      },
      {
        question: 'Que se passe-t-il si je téléverse un GIF animé dans l\'outil de filtres d\'image ?',
        answer:
          'HTML5 Canvas extrait la première image du GIF pour les miniatures d\'aperçu et exporte une image filtrée statique. Le filtrage des GIF animés à plusieurs images n\'est pas effectué par cet outil.',
      },
      {
        question: 'Comment régler la qualité lors de l\'exportation de fichiers WebP ou JPG avec filtre ?',
        answer:
          'Le réglage par défaut de 90 % préserve proprement le grain de film subtil et les ombres mates sans fichiers volumineux. Si vous avez besoin d\'une conservation sans perte pour continuer l\'édition, choisissez PNG sous Format de sortie.',
      },
      {
        question: 'L\'application d\'un filtre supprime-t-elle les balises EXIF et GPS sensibles de l\'appareil photo ?',
        answer:
          'Oui, dessiner les pixels filtrés sur un nouveau canevas HTML5 Canvas crée un fichier image propre sans en-têtes EXIF. Les balises de modèle d\'appareil photo, les horodatages et les coordonnées GPS intégrées sont exclus automatiquement lors du téléchargement.',
      },
      {
        question: 'Comment passer rapidement à une autre photo après avoir téléchargé une image filtrée ?',
        answer:
          'Cliquez sur l\'icône de corbeille dans le coin supérieur droit du panneau Aperçu du filtre pour effacer votre image actuelle et revenir à la zone de dépôt. Toute la mémoire d\'aperçu est libérée immédiatement pour votre prochaine photo.',
      },
    ],
    relatedSlugs: ['/image-saturation-editor', '/image-brightness-editor', '/image-border-generator', '/'],
  },
  {
    slug: '/add-background-to-image',
    name: 'Ajouter un arrière-plan à une image',
    shortDescription: 'Placez des images transparentes ou encadrées sur des arrière-plans unis, en dégradé ou flous.',
    category: 'create',
    seoTitle: 'Ajouter un arrière-plan à une image en ligne',
    seoDescription:
      'Ajoutez un arrière-plan à vos images en ligne : couleurs unies, dégradés bicolores ou photo floue. Exportez en 1:1, 16:9 ou 4:5, le tout dans votre navigateur.',
    h1: 'Ajouter un arrière-plan à une image en ligne',
    subtitle:
      'Conçu pour les vendeurs e-commerce, les designers de logos et les éditeurs de réseaux sociaux, cet outil facilite l\'ajout d\'un arrière-plan aux images téléversées ou aux découpes PNG transparentes. Choisissez des échantillons de couleur unie, des dégradés bicolores en angle ou des arrière-plans flous dimensionnés pour les publications carrées, d\'histoire ou panoramiques.',
    howToSteps: [
      {
        title: 'Téléversez une photo ou un PNG transparent',
        description:
          'Déposez n\'importe quelle image JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu\'à 20 Mo dans la zone de téléversement, sélectionnez-la sur le disque ou collez-la avec Ctrl+V.',
      },
      {
        title: 'Choisissez Couleur unie, Dégradé ou Photo floue',
        description:
          'Choisissez Couleur unie avec le sélecteur de couleur et 6 échantillons rapides, Dégradé avec deux couleurs et un curseur d\'angle de 0° à 360°, ou Photo floue avec un rayon de flou de 4 à 50 px.',
      },
      {
        title: 'Sélectionnez un format de canevas',
        description:
          'Cliquez sur Orig, carré 1:1, panoramique 16:9, histoire verticale 9:16 ou portrait social 4:5 sous Format du canevas.',
      },
      {
        title: 'Ajustez l\'échelle, l\'arrondi et l\'ombre portée',
        description:
          'Faites glisser Échelle de l\'image (40 %–100 %) pour contrôler le remplissage autour de votre sujet, Arrondi (0 %–30 %) pour des coins doux, et activez Ombre portée derrière l\'image.',
      },
      {
        title: 'Choisissez le format de sortie et téléchargez',
        description:
          'Vérifiez les dimensions exactes en pixels de sortie sous l\'aperçu, choisissez PNG, JPG ou WEBP et cliquez sur Télécharger l\'image.',
      },
    ],
    features: [
      {
        title: '3 modes d\'arrière-plan',
        description: 'Choisissez Couleur unie, Dégradé bicolore ou Arrière-plan de photo floue pour les photos verticales ou horizontales à bandes.',
      },
      {
        title: 'Formats sociaux et web',
        description: 'Ajustez n\'importe quelle photo dans des cadres Original, Carré 1:1, Panoramique 16:9, Histoire 9:16 ou Portrait 4:5.',
      },
      {
        title: 'Échelle, rayon et ombre au premier plan',
        description: 'Ajoutez de l\'espace, des coins arrondis et des ombres portées douces autour de votre image principale.',
      },
      {
        title: 'Zéro téléversement',
        description: 'S\'affiche localement avec HTML5 Canvas et téléchargement instantané.',
      },
    ],
    faqs: [
      {
        question: 'Quand dois-je utiliser le mode Photo floue pour ajouter un arrière-plan à une image ?',
        answer:
          'Le mode Photo floue remplit les marges vides du canevas autour d\'une photo verticale de téléphone avec une copie agrandie et floue de votre propre image, plus une légère teinte ardoise de 12 %. Il permet de placer des photos verticales 9:16 dans des bannières 16:9 de YouTube ou des carrés 1:1 sans barres noires disgracieuses ni recadrage.',
      },
      {
        question: 'Comment ajouter un arrière-plan de studio blanc propre derrière une découpe PNG transparente ?',
        answer:
          'Sélectionnez Couleur unie sous Type d\'arrière-plan, cliquez sur l\'échantillon blanc #ffffff (ou saisissez n\'importe quelle couleur hexadécimale) et ajustez l\'échelle de l\'image si vous voulez de l\'espace autour du produit. Exportez en JPG pour des téléversements légers vers les boutiques en ligne ou en PNG pour des bords nets.',
      },
      {
        question: 'Puis-je personnaliser des dégradés linéaires à plusieurs angles derrière des logos ou des captures d\'application ?',
        answer:
          'Oui, passez le type d\'arrière-plan sur Dégradé pour choisir la Couleur 1 et la Couleur 2 avec les sélecteurs de couleur, puis faites glisser le curseur d\'angle entre 0° et 360°. C\'est idéal pour transformer de simples captures de logiciel en cartes principales soignées pour les pages d\'accueil.',
      },
      {
        question: 'Quels préréglages de format de canevas sont disponibles pour les publications sociales ?',
        answer:
          'Vous pouvez basculer instantanément entre Orig (correspond aux dimensions de votre photo), 1:1 (publications carrées et cartes de produit) et 16:9 (miniatures et bannières YouTube). Des préréglages verticaux pour 9:16 (Stories et Reels) et 4:5 (portraits de fil Instagram) sont aussi intégrés.',
      },
      {
        question: 'Comment les dimensions finales en pixels sont-elles déterminées lors du changement de format du canevas ?',
        answer:
          'L\'exportateur fixe le côté le plus long du canevas de sortie à la dimension d\'origine la plus longue de votre photo, ou au moins à 1 200 px, puis calcule le côté le plus court proprement à partir du format choisi. Par exemple, choisir 1:1 sur une icône de 800×600 produit un graphique net de 1200×1200.',
      },
      {
        question: 'Comment l\'échelle de l\'image affecte-t-elle les marges autour de ma photo principale ?',
        answer:
          'L\'échelle de l\'image (40 % à 100 %, par défaut à 85 %) définit le pourcentage maximal de boîte dans le canevas d\'arrière-plan que votre photo principale peut occuper sans perdre ses proportions. Régler à 100 % remplit de bord à bord sur des formats correspondants, tandis que 60 %–80 % montre un cadre généreux d\'arrière-plan.',
      },
      {
        question: 'L\'arrondi adoucit-il les coins des PNG transparents ou seulement des photos rectangulaires ?',
        answer:
          'L\'arrondi (0 %–30 %) découpe la zone rectangulaire de placement au premier plan avec des courbes de coin quadratiques, ce qui arrondit proprement les captures et les photos rectangulaires. Sur les découpes transparentes dont le sujet reste bien à l\'intérieur des bords de l\'image, augmenter l\'arrondi laisse la découpe intérieure intacte tout en arrondissant sa boîte d\'ombre portée.',
      },
      {
        question: 'Comment l\'ombre portée se comporte-t-elle avec les logos transparents par rapport aux photos pleines ?',
        answer:
          'Pour les photos ou captures pleines, elle projette une ombre d\'élévation douce et subtile, proportionnelle à la taille du canevas, derrière la carte arrondie au premier plan. Sur les images à transparence alpha, elle utilise un léger remplissage d\'arrière-plan de 1 % dans la boîte découpée pour que le premier plan se détache proprement des arrière-plans lumineux ou en dégradé.',
      },
      {
        question: 'Quels types de fichiers image puis-je importer pour ajouter un arrière-plan ?',
        answer:
          'Vous pouvez téléverser des images JPG, PNG, WebP, HEIC/HEIF d\'iPhone, GIF, BMP et SVG jusqu\'à 20 Mo. Les GIF animés dessinent leur première image comme couche principale.',
      },
      {
        question: 'Cet outil supprime-t-il automatiquement l\'arrière-plan existant d\'une photo ?',
        answer:
          'Non, cet éditeur place votre image téléversée (découpe transparente, logo ou photo complète) sur un nouveau canevas d\'arrière-plan, au lieu d\'exécuter une segmentation de découpe par IA. Si vous avez une photo avec une scène chargée à effacer d\'abord, passez-la par notre outil Supprimer l\'arrière-plan puis déposez le PNG transparent ici.',
      },
      {
        question: 'Quels formats de sortie sont pris en charge pour l\'ajout d\'arrière-plan et avec quelle qualité de compression ?',
        answer:
          'Vous pouvez exporter des compositions terminées en PNG, JPG ou WEBP avec une qualité d\'exportation de canevas de 92 % (encodage sans perte pour le PNG). Les dimensions exactes en pixels de sortie apparaissent juste sous le canevas d\'aperçu avant le téléchargement.',
      },
      {
        question: 'Quels échantillons de couleur rapides sont intégrés au mode couleur unie ?',
        answer:
          'À côté du sélecteur de couleur natif complet, six échantillons cliquables sont prêts à tester en un seul toucher : blanc pur (#ffffff), ardoise foncé (#0f172a), bleu de marque (#2563eb), émeraude (#10b981), crème chaud (#fef3c7) et gris doux (#f1f5f9). Vous pouvez toucher n\'importe quel échantillon pour le voir instantanément, puis l\'affiner avec le sélecteur de couleur.',
      },
      {
        question: 'À quel point le contrôle du rayon de flou de l\'arrière-plan est-il fluide en mode Photo floue ?',
        answer:
          'Vous pouvez régler le rayon de flou de l\'arrière-plan de 4 px (texture d\'arrière-plan légèrement adoucie) jusqu\'à 50 px (couleur ambiante crémeuse et floue). Le rayon de flou s\'adapte dynamiquement pour correspondre à vos dimensions d\'exportation à pleine résolution.',
      },
      {
        question: 'Puis-je coller des captures directement depuis le presse-papiers pour les encadrer sur un dégradé ?',
        answer:
          'Oui, copiez une capture ou un graphique et appuyez sur Ctrl+V (ou Cmd+V) sur la zone de téléversement pour le charger directement dans le canevas d\'arrière-plan. Combiner un arrière-plan en dégradé avec une échelle de 85 %, un léger arrondi et une ombre portée fait ressortir les captures de documentation.',
      },
      {
        question: 'Les logos, maquettes ou portraits téléversés sont-ils envoyés à un serveur lors de l\'ajout d\'arrière-plan ?',
        answer:
          'Non, la génération d\'arrière-plan, le filtrage de flou, les ombres et l\'encodage des fichiers s\'exécutent localement dans votre navigateur avec HTML5 Canvas. Rien n\'est transmis sur Internet ni conservé à distance.',
      },
      {
        question: 'Comment les fichiers téléchargés avec arrière-plan ajouté sont-ils nommés ?',
        answer:
          'Les fichiers exportés conservent votre nom de base nettoyé et ajoutent _background avec l\'extension du format choisi, comme product-cutout_background.png ou banner_background.webp. Votre image source sur le disque reste intacte.',
      },
      {
        question: 'L\'exportation avec arrière-plan supprime-t-elle les métadonnées EXIF de localisation des photos d\'appareil photo ?',
        answer:
          'Oui, composer des couches sur un nouveau canevas HTML5 Canvas et encoder une nouvelle image exclut automatiquement les en-têtes EXIF d\'origine. Les coordonnées GPS, les numéros de série de l\'appareil photo et les horodatages ne sont jamais transférés dans le fichier téléchargé.',
      },
      {
        question: 'Puis-je prévisualiser le mode Photo floue sur de petites icônes ou des graphiques SVG ?',
        answer:
          'Oui, les logos SVG autonomes ou les petits graphiques PNG s\'adaptent sur l\'arrière-plan de couverture et reçoivent un flou gaussien doux derrière le premier plan vectoriel net. Choisissez un rayon de flou de 25–45 px pour adoucir les bords vectoriels nets en un halo ambiant doux.',
      },
      {
        question: 'Pourquoi le mode Photo floue ajoute-t-il une teinte subtile sur l\'arrière-plan flou ?',
        answer:
          'Un voile ardoise sombre doux à 12 % d\'opacité est peint directement sur la couche d\'arrière-plan floue, avant de dessiner le sujet au premier plan. Ce voile de contraste subtil aide les bords clairs, les étiquettes blanches et les découpes transparentes à rester lisibles sur des ciels lumineux ou des motifs chargés.',
      },
      {
        question: 'Comment remplacer la photo principale sans perdre mon flux de travail préféré ?',
        answer:
          'Cliquez sur Changer d\'image dans le coin supérieur droit du panneau Aperçu de l\'arrière-plan pour effacer le canevas actuel et téléverser une autre ressource. Comme l\'outil fonctionne nativement dans les navigateurs de bureau et mobiles, changer d\'image ne prend qu\'un instant.',
      },
    ],
    relatedSlugs: ['/round-image-corners', '/image-border-generator', '/image-resizer', '/'],
  },
  {
    slug: '/image-splitter',
    name: 'Diviseur d\'image',
    shortDescription: 'Divisez des images en tuiles de grille N×M ou en bandes et téléchargez-les dans un fichier ZIP.',
    category: 'create',
    seoTitle: 'Diviser une image en ligne gratuit – Grille et ZIP',
    seoDescription:
      'Divisez des images en ligne en grilles N×M ou en bandes pour Instagram et carrousels. Voyez les lignes de coupe et téléchargez les pièces dans un fichier ZIP.',
    h1: 'Diviseur d\'image en ligne',
    subtitle:
      'Créé pour les planificateurs de grilles Instagram, les designers d\'interfaces et les créateurs d\'imprimés, ce diviseur d\'images dans le navigateur divise les panoramas larges ou les photos carrées en jusqu\'à 100 pièces exactes de 10×10 ou en bandes. Inspectez les lignes de coupe numérotées en direct et enregistrez chaque découpe à pleine résolution séparément ou dans un téléchargement ZIP.',
    howToSteps: [
      {
        title: 'Déposez une image à découper',
        description:
          'Téléversez n\'importe quelle photo JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu\'à 20 Mo (ou collez-la avec Ctrl+V). Les pièces initiales de division 3×3 se génèrent automatiquement lors du téléversement.',
      },
      {
        title: 'Inspectez l\'aperçu des lignes de coupe numérotées',
        description:
          'Examinez la grille superposée avec des lignes en pointillés sur votre photo à gauche, qui montre les limites exactes des pièces numérotées (de 1 à N) avant de découper les exportations finales.',
      },
      {
        title: 'Choisissez la mise en page de division ou les réglages rapides',
        description:
          'Sélectionnez Grille (N×M), Bandes horiz. ou Bandes vert., saisissez Lignes et Colonnes de 1 à 10, ou cliquez sur 2×2, 3×3 Instagram, 1×3 Carrousel ou 4×1 Bandes.',
      },
      {
        title: 'Choisissez le format de sortie et la qualité des tuiles',
        description:
          'Sélectionnez Orig, JPG, PNG ou WEBP et ajustez la qualité des tuiles (10 %–100 %, 92 % par défaut) pour les sorties autres que PNG.',
      },
      {
        title: 'Générez des découpes à pleine résolution',
        description:
          'Cliquez sur Diviser en N tuiles chaque fois que vous mettez à jour Lignes, Colonnes ou le format pour redécouper toutes les pièces à des limites exactes de pixels à pleine résolution.',
      },
      {
        title: 'Enregistrez les pièces individuellement ou l\'archive ZIP',
        description:
          'Utilisez Télécharger sur n\'importe quelle carte de pièce numérotée L·C ci-dessous, ou cliquez sur Télécharger toutes les tuiles (ZIP) pour télécharger toute la grille numérotée ensemble.',
      },
    ],
    features: [
      {
        title: 'Modes flexibles de grille et de bandes',
        description: 'Divisez en grilles personnalisées de Lignes × Colonnes, en lignes horizontales ou en découpes verticales.',
      },
      {
        title: 'Aperçu des lignes de coupe en direct',
        description: 'Voyez les limites des pièces numérotées superposées sur votre image avant de diviser.',
      },
      {
        title: 'Aperçus instantanés des tuiles et ZIP',
        description: 'Inspectez chaque pièce générée et téléchargez toutes les pièces avec des noms propres (ligne_colonne) dans un seul ZIP.',
      },
      {
        title: 'Découpe à pleine résolution',
        description: 'Chaque pièce est découpée proprement à partir du canevas d\'origine à pleine résolution.',
      },
    ],
    faqs: [
      {
        question: 'Comment le diviseur d\'images construit-il une grille 3×3 propre pour Instagram ?',
        answer:
          'Cliquez sur le bouton de préréglage 3×3 Instagram (ou réglez le mode Grille avec 3 lignes et 3 colonnes) et cliquez sur Diviser en 9 tuiles. Chaque pièce s\'exporte numérotée en séquence de la ligne 1 colonne 1 en haut à gauche jusqu\'à la ligne 3 colonne 3 en bas à droite, donc en les téléversant dans l\'ordre inverse vous construisez une mosaïque de profil sans couture.',
      },
      {
        question: 'Quelle est la taille maximale de grille que je peux découper en une seule exécution avec le diviseur ?',
        answer:
          'Les Lignes (coupes horizontales) comme les Colonnes (coupes verticales) acceptent des valeurs de 1 à 10, ce qui permet de 2 découpes jusqu\'à une grille de 10×10 avec un total de 100 pièces individuelles. Comme chaque découpe utilise des limites de pixels arrondies sur votre image d\'origine, les pièces voisines s\'alignent de bord à bord sans pixels manquants.',
      },
      {
        question: 'En quoi les bandes horizontales et verticales diffèrent-elles du mode Grille (N×M) ?',
        answer:
          'Les bandes horizontales fixent les colonnes à 1 et découpent des bannières horizontales de pleine largeur empilées de haut en bas, utile pour les longues captures de pages web ou les sections d\'infographies hautes. Les bandes verticales fixent les lignes à 1 et divisent les panoramas larges côte à côte en diapositives de carrousel balayables d\'Instagram ou de LinkedIn.',
      },
      {
        question: 'Quels préréglages de division en un clic le diviseur inclut-il ?',
        answer:
          'Quatre boutons de préréglage se trouvent juste sous les champs numériques : 2×2 (4 quadrants), 3×3 Instagram (9 carrés de grille), 1×3 Carrousel (3 bandes verticales balayables) et 4×1 Bandes (4 bandes horizontales). Cliquer sur n\'importe quel préréglage met à jour immédiatement l\'aperçu des lignes de coupe en direct.',
      },
      {
        question: 'Les pièces générées sont-elles réduites ou recadrées aux dimensions d\'origine en pixels ?',
        answer:
          'Chaque pièce est découpée directement à partir de la largeur et de la hauteur complètes en pixels de votre image source sur HTML5 Canvas, sans changer sa taille. Par exemple, diviser un panorama de 3000×1000 en bandes de carrousel 1×3 produit trois pièces nettes de 1000×1000.',
      },
      {
        question: 'Que se passe-t-il si la largeur ou la hauteur de mon image ne se divise pas en parties égales ?',
        answer:
          'Les coordonnées de coupe sont calculées proportionnellement avec Math.round sur toute la largeur et la hauteur, pour que les découpes voisines partagent des bords exacts de pixels entiers sans trous ni chevauchements. Certaines pièces peuvent différer de 1 pixel lors de la division de nombres impairs (comme 1000 px en 3 colonnes : 333, 334, 333).',
      },
      {
        question: 'Dois-je me souvenir de quelle pièce va où après avoir téléchargé le ZIP du diviseur ?',
        answer:
          'Non, chaque découpe montre son badge de ligne et de colonne (comme L1·C2) et ses dimensions exactes en pixels sous sa carte d\'aperçu. Dans l\'archive ZIP, les noms suivent <base>_r<ligne>_c<colonne>.<ext> (par exemple, panorama_r1_c1.jpg, panorama_r1_c2.jpg) dans l\'ordre de lecture.',
      },
      {
        question: 'Les changements de lignes, de colonnes ou de format mettent-ils à jour les pièces générées automatiquement ?',
        answer:
          'Lors du premier téléversement d\'un fichier, les pièces se génèrent automatiquement avec les réglages actifs de mise en page. Après avoir modifié Lignes, Colonnes ou Format de sortie, l\'aperçu des lignes de coupe se met à jour immédiatement et cliquer sur Diviser en N tuiles régénère les cartes de pièces téléchargeables et le ZIP.',
      },
      {
        question: 'Quels formats d\'entrée fonctionnent dans le diviseur d\'images ?',
        answer:
          'Téléversez des images JPG, PNG, WebP, HEIC/HEIF d\'iPhone, GIF, BMP et SVG jusqu\'à 20 Mo chacune. En sélectionnant Orig sous Format de sortie, le format source est conservé (ou HEIC/SVG/BMP est converti proprement en PNG/JPG standard).',
      },
      {
        question: 'La division d\'une feuille de sprites PNG transparente préserve-t-elle les arrière-plans transparents ?',
        answer:
          'Oui, découper des ressources PNG ou WebP transparentes maintient la transparence alpha complète lorsque le format de sortie est Orig, PNG ou WEBP. Si vous basculez explicitement le format de sortie sur JPG, les canevas de pièces remplissent la transparence de blanc uni (#FFFFFF).',
      },
      {
        question: 'Puis-je coller une longue capture depuis le presse-papiers et la découper en sections imprimables ?',
        answer:
          'Oui, appuyez sur Ctrl+V (ou Cmd+V) sur la zone de téléversement pour déposer une capture du presse-papiers directement dans le diviseur. Choisissez Bandes horiz. et réglez 3–6 lignes pour diviser les journaux de discussion hauts ou les captures web en pages gérables.',
      },
      {
        question: 'Le curseur de qualité des tuiles apparaît-il pour les tuiles PNG du diviseur ?',
        answer:
          'Non, les tuiles PNG s\'encodent toujours sans perte, donc la qualité des tuiles (10 %–100 %, avec 92 % par défaut) s\'affiche automatiquement seulement lorsque votre format résolu est JPG ou WebP. Cela garantit des bords nets sur les sprites, les maquettes d\'interface et les divisions de texte.',
      },
      {
        question: 'Comment le téléchargement ZIP groupé du diviseur d\'images est-il nommé ?',
        answer:
          'En cliquant sur Télécharger toutes les tuiles (ZIP), toutes les pièces générées sont empaquetées dans une seule archive nommée <base>_<lignes>x<colonnes>_tiles.zip, comme hero_3x3_tiles.zip. Vous pouvez aussi télécharger des pièces individuelles avec le bouton Télécharger de chaque carte.',
      },
      {
        question: 'Les photos sont-elles téléversées vers des serveurs externes pendant la découpe en grille ?',
        answer:
          'Non, les calculs de découpe, la découpe sur canevas, les aperçus de tuiles et la compression ZIP se produisent dans la mémoire locale du navigateur. Vos œuvres privées, diagrammes et photos personnelles ne quittent jamais votre appareil.',
      },
      {
        question: 'La division supprime-t-elle les balises EXIF de l\'appareil photo et les métadonnées GPS de localisation ?',
        answer:
          'Oui, découper des sous-régions rectangulaires en nouvelles tuiles HTML5 Canvas génère des blobs d\'image propres sans en-têtes EXIF. Par conséquent, les détails de l\'appareil photo et les coordonnées GPS de la photo d\'origine ne sont jamais copiés dans les pièces individuelles.',
      },
      {
        question: 'Que se passe-t-il avec un GIF animé lors de la division en tuiles de grille ?',
        answer:
          'HTML5 Canvas extrait et découpe la première image du GIF en tuiles statiques avec le format de sortie choisi. Diviser des GIF animés à plusieurs images en conservant l\'animation n\'est pas pris en charge ici.',
      },
      {
        question: 'Pourquoi mes tuiles 3×3 peuvent-elles différer légèrement en proportions si ma photo source n\'est pas carrée ?',
        answer:
          'Le diviseur divise votre image source proportionnellement le long de sa largeur et de sa hauteur existantes, sans distordre ni recadrer les bords. Si vous voulez des tuiles carrées 1:1 pour une grille Instagram, recadrez d\'abord votre image à 1:1 dans notre outil Recadreur d\'images avant de diviser en 3×3.',
      },
      {
        question: 'Comment remplacer l\'image après avoir téléchargé une grille divisée ?',
        answer:
          'Cliquez sur Changer d\'image dans le coin supérieur droit de la carte Aperçu des lignes de coupe pour libérer les URL de tuiles existantes de la mémoire et charger une nouvelle image. Aucun rechargement de page n\'est nécessaire.',
      },
      {
        question: 'Les développeurs de jeux peuvent-ils utiliser cet outil pour découper des feuilles d\'icônes ?',
        answer:
          'Oui, les feuilles de sprites disposées en lignes et colonnes uniformes se découpent avec précision lorsque vous réglez des nombres de Lignes × Colonnes correspondants et conservez la sortie PNG. Chaque icône s\'enregistre proprement par sa coordonnée de ligne et de colonne dans le ZIP.',
      },
      {
        question: 'Le diviseur d\'images fonctionne-t-il de façon fiable sur iPhone, iPad et téléphones Android ?',
        answer:
          'Oui, les grilles adaptables, les champs numériques de lignes et de colonnes et l\'empaquetage ZIP côté navigateur fonctionnent directement dans Safari iOS et Chrome Android. Les divisions importantes de 10×10 sur des photos de plusieurs mégapixels sont plus rapides sur ordinateur ou dans les navigateurs mobiles modernes.',
      },
    ],
    relatedSlugs: ['/image-cropper', '/image-resizer', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-dpi-changer',
    name: 'Changeur de DPI d\'image',
    shortDescription: 'Changez les métadonnées DPI des JPEG et PNG (72, 150, 300 ou personnalisé) sans perte de qualité.',
    category: 'developer',
    seoTitle: 'Changer le DPI d\'une image gratuitement en ligne',
    seoDescription:
      'Changez le DPI des images JPG et PNG en ligne à 72, 150, 300 ou 600 DPI sans perte de qualité. Métadonnées vérifiées et traitement par lots dans le navigateur.',
    h1: 'Changeur de DPI d\'image gratuit',
    subtitle:
      'Créé pour les designers, les imprimeries, les auteurs et les étudiants qui préparent des fichiers pour les portails d\'impression, ce changeur de DPI d\'image sans perte met à jour les en-têtes de résolution des JPEG et PNG sans toucher les données de pixels. Passez à 72, 96, 150, 300 ou 600 DPI, ou à un DPI personnalisé, par lots avec lecture vérifiée.',
    howToSteps: [
      {
        title: 'Choisissez ou ajustez d\'abord votre DPI cible (ou à tout moment)',
        description:
          'Cliquez sur un préréglage : 72 DPI (Écran), 96 DPI (Windows), 150 DPI (Impression brouillon), 300 DPI (Impression haute qualité) ou 600 DPI (Archive), ou saisissez n\'importe quel DPI personnalisé de 1 à 2 400.',
      },
      {
        title: 'Téléversez une ou plusieurs images',
        description:
          'Déposez des fichiers JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu\'à 20 Mo chacun dans la zone de téléversement (ou collez-les avec Ctrl+V). Les fichiers sont traités immédiatement au DPI choisi.',
      },
      {
        title: 'Examinez Avant, DPI vérifié et la méthode de traitement',
        description:
          'Chaque carte montre le DPI d\'origine par rapport au DPI de sortie vérifié, avec un badge confirmant Mise à jour sans perte de l\'en-tête JPEG, Mise à jour sans perte du bloc pHYs PNG ou Converti en PNG avec DPI pHYs.',
      },
      {
        title: 'Changez le DPI dynamiquement sur les fichiers en file d\'attente si nécessaire',
        description:
          'Cliquez sur un autre préréglage de DPI ou saisissez un nouveau DPI personnalisé et appuyez sur Appliquer [X] DPI pour retraiter automatiquement chaque fichier de votre file d\'attente.',
      },
      {
        title: 'Téléchargez des fichiers individuels ou un ZIP par lots',
        description:
          'Cliquez sur Télécharger sur les cartes de résultats individuelles (nommées <base>_<dpi>dpi.<ext>), ou sur Tout télécharger (ZIP) lorsque deux fichiers ou plus sont prêts.',
      },
    ],
    features: [
      {
        title: 'Modification réelle d\'en-tête JPEG et PNG sans perte',
        description: 'Met à jour la densité JFIF APP0/EXIF dans les JPEG et les blocs pHYs (avec CRC32 valide) dans les PNG sans toucher les pixels de l\'image.',
      },
      {
        title: 'Lecture vérifiée avant et après',
        description: 'Réanalyse automatiquement le fichier de sortie pour que vous voyiez le DPI vérifié exact enregistré dans le fichier.',
      },
      {
        title: 'Traitement de DPI par lots',
        description: 'Mettez à jour des dizaines de graphiques prêts à imprimer à la fois et exportez-les dans une archive ZIP.',
      },
      {
        title: 'Solution de secours WebP/HEIC',
        description: 'Les formats sans DPI peuvent être convertis proprement en PNG sans perte avec le bloc pHYs DPI exact intégré.',
      },
    ],
    faqs: [
      {
        question: 'Comment le changeur de DPI modifie-t-il les fichiers JPEG et PNG sans perte de qualité ?',
        answer:
          'Au lieu de décoder et de recompresser les pixels sur le canevas, il corrige directement les segments binaires de métadonnées : il met à jour ou insère les balises de résolution JFIF APP0 et EXIF IFD0 dans les JPEG, et écrit un bloc pHYs valide avec somme de contrôle CRC32 dans les PNG. Chaque pixel visuel et chaque bloc de compression restent 100 % intacts.',
      },
      {
        question: 'Le changement de DPI modifie-t-il la largeur et la hauteur en pixels ou la taille physique d\'impression ?',
        answer:
          'Changer le DPI maintient les dimensions en pixels complètement identiques : par exemple, une photo de 3000×2400 reste de 3000×2400 px. Ce qui change, c\'est l\'en-tête de densité d\'impression qui indique aux applications de publication comme Photoshop, InDesign ou aux portails d\'impression de l\'interpréter à 10×8 pouces à 300 DPI, au lieu de 41,6×33,3 pouces à 72 DPI.',
      },
      {
        question: 'Pourquoi les photos d\'appareil photo ou les captures téléversées affichent-elles souvent Avant : non défini en DPI ?',
        answer:
          'De nombreuses exportations de téléphone, captures et optimiseurs web suppriment les champs de résolution JFIF/EXIF ou omettent le bloc pHYs optionnel du PNG, laissant les visionneuses supposer une valeur de 72 ou 96 DPI. Notre outil insère un en-tête standard pour que les validateurs d\'impression détectent 300 DPI de façon fiable.',
      },
      {
        question: 'Comment le badge de DPI vérifié confirme-t-il que la mise à jour a fonctionné ?',
        answer:
          'Après avoir construit le blob binaire mis à jour, l\'outil exécute à nouveau son analyseur d\'en-tête binaire sur le fichier de sortie depuis zéro pour lire la densité X/Y nouvellement intégrée. Cela garantit que le fichier téléchargé passe les vérifications automatisées des portails d\'impression et des inspecteurs de bureau.',
      },
      {
        question: 'Que se passe-t-il lorsque je téléverse des fichiers WebP, HEIC, BMP, GIF ou SVG ?',
        answer:
          'Les formats qui manquent d\'en-têtes DPI standard entre programmes (comme WebP ou BMP) sont décodés localement et convertis proprement en PNG sans perte avec le bloc pHYs DPI exact intégré. Vous verrez un badge Converti en PNG avec DPI pHYs sur ces cartes.',
      },
      {
        question: 'Quels préréglages de DPI sont disponibles et quelle plage le DPI personnalisé accepte-t-il ?',
        answer:
          'Cinq préréglages rapides couvrent les standards courants : 72 DPI (Écran), 96 DPI (Windows), 150 DPI (Impression brouillon), 300 DPI (Impression haute qualité) et 600 DPI (Archive). Le DPI personnalisé permet de saisir n\'importe quel nombre entier entre 1 et 2 400 DPI.',
      },
      {
        question: 'La mise à jour du DPI JPEG préserve-t-elle les balises EXIF existantes et le profil ICC de mon appareil photo ?',
        answer:
          'Oui, notre copieur de segments JPEG sans perte laisse intacts votre profil de couleur, les balises de l\'appareil photo et les données de balayage d\'image, tout en mettant à jour la densité JFIF APP0 et XResolution/YResolution/ResolutionUnit d\'EXIF si un segment EXIF APP1 existe. S\'il n\'y avait pas d\'en-tête JFIF, il insère un segment JFIF APP0 propre de 18 octets juste après SOI.',
      },
      {
        question: 'Pourquoi le DPI du PNG se lit-il parfois comme 299 ou 300 DPI après la conversion ?',
        answer:
          'La spécification officielle pHYs du PNG enregistre la résolution en pixels par mètre plutôt qu\'en points par pouce, convertissant 300 DPI en 11 811 pixels par mètre. Arrondir les pixels par mètre en pouces produit un 300 DPI exact et propre pour presque toutes les valeurs prédéfinies.',
      },
      {
        question: 'Changer une miniature web de 400×400 à 300 DPI la rendra-t-elle nette pour l\'impression ?',
        answer:
          'Non, mettre à jour le DPI modifie uniquement les instructions de métadonnées, pas le nombre de pixels : un fichier de 400×400 pixels à 300 DPI s\'imprime avec netteté seulement à 1,33×1,33 pouces. Pour couvrir des formats de papier plus grands proprement à 300 DPI, vous avez besoin de dimensions en pixels plus grandes dans l\'œuvre source.',
      },
      {
        question: 'Puis-je mettre à jour plusieurs ressources d\'impression à 300 DPI par lots et exporter un ZIP ?',
        answer:
          'Oui, déposez n\'importe quel nombre de fichiers JPG ou PNG jusqu\'à 20 Mo chacun et ils sont tous traités au DPI choisi en séquence. Lorsque deux fichiers ou plus se terminent, une barre Lot prêt apparaît avec un bouton Tout télécharger (ZIP) qui produit images_<dpi>dpi_compressmypic.zip.',
      },
      {
        question: 'Puis-je changer d\'avis et appliquer 600 DPI après un traitement à 300 DPI ?',
        answer:
          'Oui, cliquer sur un autre bouton de préréglage de DPI cible met à jour et retraite immédiatement tous les fichiers de votre file d\'attente à partir des fichiers d\'origine téléversés, sans accumuler les modifications. Si vous saisissez un nombre dans DPI personnalisé, cliquez sur Appliquer DPI pour actualiser tous les éléments à cette densité personnalisée.',
      },
      {
        question: 'Définir 300 DPI augmente-t-il beaucoup la taille de fichier des JPEG ou PNG ?',
        answer:
          'Non, ajouter ou corriger un en-tête JFIF APP0 (18 octets) ou un bloc pHYs PNG (21 octets) change le poids total du fichier d\'au plus quelques dizaines d\'octets pour les JPEG et PNG natifs. Seuls les formats sans DPI convertis en PNG sans perte changent de taille.',
      },
      {
        question: 'Les épreuves confidentielles, couvertures de livres ou scans d\'identité sont-ils envoyés à un serveur externe ?',
        answer:
          'Non, l\'analyse binaire des octets, le calcul de somme de contrôle CRC32 et la correction des en-têtes s\'exécutent localement dans les ArrayBuffers du navigateur. Vos fichiers ne quittent jamais votre ordinateur ou votre téléphone.',
      },
      {
        question: 'Pourquoi des plateformes comme Amazon KDP ou les revues académiques rejettent-elles les fichiers à 72 DPI ?',
        answer:
          'De nombreux portails automatisés de prépresse inspectent la balise de résolution JFIF ou pHYs PNG de l\'image et rejettent les soumissions en dessous de 300 DPI, même lorsque les dimensions en pixels sont amples. Mettre à jour la balise d\'en-tête à 300 DPI satisfait ces vérifications de prépresse sans recompresser l\'œuvre.',
      },
      {
        question: 'Comment les fichiers de sortie sont-ils nommés lors de l\'enregistrement individuel ou en ZIP ?',
        answer:
          'Chaque fichier mis à jour conserve son nom de base nettoyé et ajoute _<cible>dpi plus son extension, comme poster_300dpi.jpg ou diagram_600dpi.png. Cela évite d\'écraser vos fichiers d\'origine sur le disque.',
      },
      {
        question: 'Le changeur de DPI fonctionne-t-il sur les JPEG qui utilisaient à l\'origine des points par cm au lieu de points par pouce ?',
        answer:
          'Oui, le lecteur reconnaît à la fois l\'unité=1 (points par pouce) et l\'unité=2 (points par cm, multipliés par 2,54) dans les balises JFIF et EXIF lors de l\'affichage du DPI Avant. Lors de l\'écriture des en-têtes de sortie, il standardise proprement la densité en pouces (DPI) pour une compatibilité universelle.',
      },
      {
        question: 'Puis-je supprimer ou retirer les balises DPI au lieu de les changer ?',
        answer:
          'Cet outil intègre ou met toujours à jour l\'en-tête DPI cible choisi pour respecter les standards d\'impression ou d\'affichage. Si vous voulez effacer toutes les métadonnées JFIF, EXIF et de blocs PNG pour la confidentialité, passez vos fichiers par notre outil Supprimer les métadonnées d\'image.',
      },
      {
        question: 'Que se passe-t-il si je téléverse un JPEG endommagé ou un format non pris en charge dans le changeur de DPI ?',
        answer:
          'Chaque fichier en file d\'attente s\'exécute indépendamment dans son propre gestionnaire d\'erreurs, donc une seule image illisible n\'arrête jamais le reste de votre lot. Les éléments échoués affichent une alerte rouge claire en ligne, tandis que les fichiers valides se terminent et s\'empaquettent normalement dans votre téléchargement ZIP.',
      },
      {
        question: 'Puis-je coller une capture du presse-papiers et la tamponner immédiatement à 300 DPI ?',
        answer:
          'Oui, appuyez sur Ctrl+V (ou Cmd+V) sur la zone de téléversement pour passer une capture PNG du presse-papiers directement dans le processeur. Il écrit un bloc pHYs valide de 300 DPI sans perte en un instant.',
      },
      {
        question: 'Cet éditeur de DPI sans perte fonctionne-t-il sur Windows, Mac, Linux et les navigateurs mobiles ?',
        answer:
          'Oui, les API standard ArrayBuffer et DataView du navigateur fonctionnent proprement sur Chrome, Firefox, Edge et Safari de bureau, ainsi que sur les navigateurs mobiles. Aucun logiciel de bureau, plugin ni téléversement vers des serveurs n\'est jamais nécessaire.',
      },
    ],
    relatedSlugs: ['/image-metadata-viewer', '/image-dimensions-checker', '/remove-image-metadata', '/'],
  },
  {
    slug: '/image-to-base64',
    name: 'Image en Base64',
    shortDescription: 'Encodez n\'importe quelle image en URL de données Base64, balise HTML img ou extrait CSS.',
    category: 'developer',
    seoTitle: 'Image en Base64 gratuit en ligne – URL de données',
    seoDescription:
      'Convertissez des images en Base64 en ligne : générez des URL de données, du Base64 brut, des balises HTML <img> et des règles CSS url(). Copiez en un clic.',
    h1: 'Convertisseur d\'image en Base64',
    subtitle:
      'Créé pour les développeurs frontend, les programmeurs de modèles d\'e-mail et les rédacteurs techniques, ce convertisseur local d\'image en Base64 transforme les ressources d\'image binaires en chaînes de texte prêtes à copier en une seule étape. Basculez instantanément entre les onglets URL de données, Base64 brut, HTML img et CSS url() sans téléverser vos icônes.',
    howToSteps: [
      {
        title: 'Déposez, sélectionnez ou collez une image',
        description:
          'Téléversez n\'importe quel fichier JPG, PNG, WebP, SVG, GIF, BMP, ICO ou AVIF jusqu\'à 15 Mo dans la zone de dépôt, ou collez une image du presse-papiers avec Ctrl+V.',
      },
      {
        title: 'Examinez la taille de fichier et le surcoût de caractères',
        description:
          'Inspectez la carte de résumé supérieure avec la miniature de votre image, la taille d\'origine en octets, les dimensions naturelles (le cas échéant), le nombre exact de caractères de sortie et le pourcentage de surcoût Base64.',
      },
      {
        title: 'Basculez entre les 4 onglets de sortie pour développeurs',
        description:
          'Cliquez sur URL de données, Base64 brut, HTML <img> ou CSS url() pour formater la chaîne encodée pour les charges JSON, les images intégrées en HTML ou les feuilles de style.',
      },
      {
        title: 'Copiez dans le presse-papiers ou enregistrez comme fichier .txt',
        description:
          'Cliquez sur Copier la sortie (ou cliquez dans la zone de code pour tout sélectionner) pour copier la chaîne, ou cliquez sur Enregistrer .TXT pour télécharger <nom-de-fichier>_<onglet>.txt.',
      },
      {
        title: 'Cliquez sur Encoder une autre pour changer de fichier',
        description:
          'Lorsque vous êtes prêt à encoder l\'icône ou le sprite suivant, cliquez sur Encoder une autre pour effacer la sortie et libérer la mémoire locale des objets.',
      },
    ],
    features: [
      {
        title: '4 formats de sortie pour développeurs',
        description: 'Générez automatiquement des extraits d\'URL de données, de Base64 brut, de HTML <img> et de CSS background-image.',
      },
      {
        title: 'Mesures exactes d\'octets et de caractères',
        description: 'Comparez immédiatement la taille de fichier binaire d\'origine avec la longueur de la chaîne Base64 encodée.',
      },
      {
        title: 'Copie en un clic et téléchargement TXT',
        description: 'Copiez les énormes chaînes Base64 de façon fiable dans le presse-papiers ou enregistrez-les comme fichier texte simple.',
      },
      {
        title: 'Encodage 100 % local avec FileReader',
        description: 'Sans téléversement : l\'encodage se fait nativement dans l\'onglet de votre navigateur.',
      },
    ],
    faqs: [
      {
        question: 'Pourquoi le convertisseur d\'image en Base64 ajoute-t-il environ 33 % à la taille de sortie ?',
        answer:
          'Base64 représente chaque groupe de 3 octets binaires (24 bits) avec 4 caractères ASCII imprimables (6 bits chacun), plus jusqu\'à deux signes égal de remplissage à la fin. C\'est pourquoi une image de 30 Ko s\'encode toujours en environ 40 Ko de texte Base64, que la barre de résumé enregistre automatiquement.',
      },
      {
        question: 'Quels quatre formats de sortie puis-je générer après avoir encodé une image en Base64 ?',
        answer:
          'Quatre onglets se trouvent juste au-dessus de la zone de code : URL de données (URI complète data:image/...;base64,...), Base64 brut (charge sans préfixe), HTML <img> (balise prête avec alt nettoyé et attributs de largeur et de hauteur) et CSS url() (règle background-image: url("...");).',
      },
      {
        question: 'L\'encodage modifie-t-il la qualité de l\'image, supprime-t-il le code SVG ou aplatit-il les GIF animés ?',
        answer:
          'Non, l\'encodeur lit le fichier binaire brut directement avec FileReader.readAsDataURL du navigateur, sans dessiner sur le canevas. Chaque octet d\'origine, chaque élément XML de SVG vectoriel, chaque image ICO et chaque image d\'animation GIF reste 100 % identique bit à bit.',
      },
      {
        question: 'Quels formats de fichiers image et quelle taille maximale de téléversement sont pris en charge pour l\'encodage en Base64 ?',
        answer:
          'Vous pouvez encoder des images JPG, PNG, WebP, SVG, GIF, BMP, ICO de favicons et AVIF jusqu\'à 15 Mo par fichier. Maintenir les entrées Base64 avec un plafond de 15 Mo évite que les chaînes de texte de plusieurs mégaoctets figent le rendu du presse-papiers ou de la zone de texte.',
      },
      {
        question: 'Quand dois-je intégrer des URL de données Base64 plutôt que de référencer des fichiers d\'image normaux ?',
        answer:
          'Intégrer de petites icônes d\'interface, des spinners, des favicons ou des badges de signature d\'e-mail de quelques kilo-octets élimine des allers-retours HTTP supplémentaires et fonctionne proprement dans des documents HTML autonomes. Pour les grandes photos principales, les URL d\'image WebP ou JPG normales restent plus petites et bénéficient de la mise en cache HTTP du navigateur.',
      },
      {
        question: 'Pourquoi l\'onglet HTML <img> inclut-il automatiquement des attributs de largeur et de hauteur ?',
        answer:
          'Une fois que votre navigateur charge l\'aperçu temporaire d\'objet et lit naturalWidth et naturalHeight, ces dimensions en pixels remplissent l\'extrait HTML avec une balise alt dérivée de votre nom de fichier de base. Inclure les dimensions aide à prévenir le décalage cumulatif de mise en page (CLS) sur les pages web.',
      },
      {
        question: 'Puis-je télécharger la sortie Base64 longue quand copier de grandes chaînes est peu pratique ?',
        answer:
          'Oui, cliquez sur Enregistrer .TXT à côté de Copier la sortie pour télécharger le texte exact affiché dans votre onglet actif (URL de données, Base64 brut, HTML ou CSS) sous <base>_<onglet>.txt. Cela facilite l\'ouverture de charges très longues proprement dans VS Code ou des scripts de terminal.',
      },
      {
        question: 'Que se passe-t-il si mon navigateur bloque les autorisations du presse-papiers en cliquant sur Copier la sortie ?',
        answer:
          'Si navigator.clipboard.writeText est bloqué par les paramètres de confidentialité du navigateur, un message en ligne vous invite à copier directement depuis la zone de code. En cliquant ou en tabulant dans la zone de texte monospace sombre, toute la chaîne est automatiquement mise en surbrillance pour que Ctrl+C / Cmd+C copie tout proprement.',
      },
      {
        question: 'En quoi le Base64 brut diffère-t-il de l\'URL de données lors de l\'envoi de charges JSON d\'API ?',
        answer:
          'L\'URL de données ajoute data:<mime>;base64, pour que les navigateurs puissent l\'afficher directement dans les attributs src ou les règles CSS url(). Les API, les bases de données mobiles et les encodeurs de serveur attendent souvent uniquement le Base64 brut : en basculant vers l\'onglet Base64 brut, l\'en-tête est supprimé automatiquement.',
      },
      {
        question: 'Les icônes d\'interface propriétaires, les diagrammes confidentiels ou les ressources de clients sont-ils téléversés quelque part lors de l\'encodage ?',
        answer:
          'Jamais : FileReader lit les octets strictement dans la mémoire locale du navigateur côté client. Aucun fichier image ni aucune chaîne Base64 n\'est jamais transmis à des serveurs distants.',
      },
      {
        question: 'Puis-je encoder un logo SVG ou un fichier favicon.ico sans problème ?',
        answer:
          'Oui, les extensions .svg et .ico sont toutes deux explicitement prises en charge dans le filtre de téléversement et s\'encodent avec leur préfixe MIME approprié data:image/svg+xml ou image/x-icon. Vous pouvez aussi déposer des fichiers dans le convertisseur puis les vérifier aller-retour avec notre décodeur Base64 en image.',
      },
      {
        question: 'Pourquoi le pourcentage de surcoût est-il un peu plus élevé sur les onglets HTML <img> et CSS url() ?',
        answer:
          'En plus de l\'expansion d\'encodage Base64 de 33 % et de l\'en-tête MIME de l\'URL de données, les onglets HTML et CSS enveloppent des caractères supplémentaires de balisage comme <img src="..." alt="..." />. Le compteur de résumé recalcule les caractères en direct chaque fois que vous changez d\'onglet.',
      },
      {
        question: 'Puis-je coller une capture directement depuis le presse-papiers pour obtenir une URL de données rapide ?',
        answer:
          'Oui, appuyez sur Ctrl+V (ou Cmd+V sur Mac) n\'importe où sur l\'écran de téléversement pour capturer une image copiée du presse-papiers directement. L\'outil l\'encode instantanément aux formats URL de données, Base64 brut, HTML et CSS, prêts à copier en un clic.',
      },
      {
        question: 'Le Base64 brut préserve-t-il les caractères standard + et / avec le remplissage = ?',
        answer:
          'Oui, FileReader du navigateur produit des chaînes Base64 standard RFC 4648 avec +, / et des caractères = de remplissage à la fin, au lieu de substitutions base64url sûres pour les URL. Cela garantit une compatibilité directe avec les URI de données HTML, les charges MIME d\'e-mail et les décodeurs de serveur standard.',
      },
      {
        question: 'Pourquoi certains clients de messagerie bloquent-ils les images Base64 intégrées ?',
        answer:
          'Certains fournisseurs de messagerie web et filtres de spam d\'entreprise suppriment les URI data:image dans les newsletters HTML pour des raisons de sécurité, bien que les navigateurs les affichent bien. Base64 fonctionne mieux dans les applications web, les documents HTML d\'un seul fichier, les paquets React/CSS et les modèles JSON/SVG.',
      },
      {
        question: 'Comment conserver les métadonnées d\'origine de l\'appareil photo ou les supprimer avant d\'encoder en Base64 ?',
        answer:
          'Comme cet outil encode les octets bruts exacts, toutes les métadonnées EXIF existantes dans un JPEG restent encodées dans la chaîne Base64. Si vous voulez des chaînes Base64 plus petites et sans métadonnées, passez votre photo par notre outil Supprimer les métadonnées d\'image avant l\'encodage.',
      },
      {
        question: 'Dois-je réduire les grands PNG ou JPG avant de les convertir en Base64 ?',
        answer:
          'Oui : comme Base64 gonfle la taille d\'environ 33 %, compresser d\'abord un PNG de 300 Ko en un WebP de 40 Ko économise environ 350 Ko de surcharge de texte Base64 dans votre feuille de style ou votre paquet. Utilisez d\'abord notre Compresseur d\'images ou notre Optimiseur d\'images web pour de grandes économies.',
      },
      {
        question: 'Pourquoi les dimensions sont-elles omises sur certains fichiers ICO peu courants ou endommagés ?',
        answer:
          'Si un navigateur ne peut pas décoder un ICO inhabituel à plusieurs images ou un en-tête exotique dans un aperçu HTMLImageElement, les dimensions sont omises proprement tandis que l\'encodage Base64 brut fonctionne toujours. Les fichiers standard PNG, JPG, WebP, GIF, SVG, BMP et AVIF montrent des comptes exacts de pixels L×H.',
      },
      {
        question: 'Comment encoder une autre image après avoir copié le premier extrait ?',
        answer:
          'Cliquez sur Encoder une autre dans le coin supérieur droit de la carte de résumé pour réinitialiser les onglets de sortie et effacer la zone de texte. Elle libère immédiatement la mémoire temporaire d\'aperçu et restaure la zone de dépôt pour votre prochaine ressource.',
      },
      {
        question: 'L\'encodeur Base64 fonctionne-t-il sur Safari mobile et les navigateurs Chrome ?',
        answer:
          'Oui, les API intégrées HTML5 FileReader et du presse-papiers fonctionnent de façon fiable sur Safari iOS, Chrome Android, Windows, macOS et Linux. Comme l\'encodage s\'exécute localement dans la mémoire du navigateur, il n\'y a aucun délai de serveur même avec des données cellulaires.',
      },
    ],
    relatedSlugs: ['/base64-to-image', '/favicon-generator', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/base64-to-image',
    name: 'Base64 en image',
    shortDescription: 'Décodez une URL de données Base64 ou une chaîne Base64 brute et reconvertissez-la en image.',
    category: 'developer',
    seoTitle: 'Base64 en image gratuit en ligne – Décodeur',
    seoDescription:
      'Décodez Base64 en image en ligne : collez une URL de données ou du Base64 brut et voyez l\'image. Détecte PNG, JPG, WebP, GIF et SVG dans votre navigateur.',
    h1: 'Décodeur de Base64 en image',
    subtitle:
      'Conçu pour les ingénieurs web qui déboguent des charges d\'API, les spécialistes de l\'e-mail qui vérifient les icônes intégrées et les testeurs qualité, ce décodeur de Base64 en image dans le navigateur reconstruit les URL de données et les chaînes Base64 brutes en fichiers téléchargeables. Inspectez le format MIME détecté, les dimensions en pixels et la taille en octets en privé, sur votre appareil.',
    howToSteps: [
      {
        title: 'Collez votre chaîne Base64 ou votre URL de données',
        description:
          'Collez une chaîne complète data:image/...;base64,... ou des caractères Base64 bruts dans la zone Coller une chaîne Base64 ou une URL de données.',
      },
      {
        title: 'Attendez le décodage automatique (ou cliquez sur Décoder l\'image)',
        description:
          'Le décodeur analyse les espaces, les caractères sûrs pour les URL et les octets d\'en-tête magique immédiatement lors du collage (ou en cliquant sur Décoder l\'image) pour valider l\'image.',
      },
      {
        title: 'Inspectez l\'aperçu, le format, la taille et les dimensions',
        description:
          'Voyez le graphique décodé sur un damier de transparence avec le badge Image valide décodée, le format détecté, la taille binaire et la largeur × hauteur en pixels.',
      },
      {
        title: 'Sélectionnez votre format de téléchargement',
        description:
          'Choisissez Original pour enregistrer le fichier binaire décodé exact sans le toucher, ou choisissez PNG, JPG ou WEBP pour convertir l\'image lors de l\'exportation.',
      },
      {
        title: 'Téléchargez votre fichier image décodé',
        description:
          'Cliquez sur Télécharger le fichier image pour enregistrer decoded_image.<ext> directement sur votre appareil, ou cliquez sur Effacer au-dessus de la zone de saisie pour tester une autre charge.',
      },
    ],
    features: [
      {
        title: 'Détecte automatiquement le préfixe d\'URL de données manquant',
        description: 'Identifie automatiquement les en-têtes magiques PNG, JPEG, GIF, WebP, BMP et SVG même à partir de Base64 brut.',
      },
      {
        title: 'Validation instantanée et messages d\'erreur',
        description: 'Détecte clairement les caractères Base64 non valides ou les en-têtes endommagés.',
      },
      {
        title: 'Conversion de format optionnelle',
        description: 'Téléchargez le binaire décodé exact ou réexportez-le en PNG, JPG ou WebP.',
      },
      {
        title: 'Décodage privé dans le navigateur',
        description: 'Sûr pour les jetons internes, les ressources d\'e-mail et les icônes d\'interface propriétaires.',
      },
    ],
    faqs: [
      {
        question: 'Ce décodeur de Base64 en image peut-il lire des chaînes sans le préfixe data:image/ ?',
        answer:
          'Oui, si vous collez du Base64 brut sans en-tête d\'URL de données, le décodeur inspecte les octets de signature magique décodés au début du flux binaire. Il détecte automatiquement PNG, JPEG, GIF, WebP, BMP, ICO et le balisage XML/SVG intégré.',
      },
      {
        question: 'Le décodeur gère-t-il les variantes Base64 sûres pour les URL et les sauts de ligne accidentels ?',
        answer:
          'Oui, avant d\'appeler atob(), le décodeur supprime automatiquement les espaces, les blancs et les sauts de ligne, et convertit les caractères sûrs pour les URL - et _ en + et / standard. Cela fait que le collage de chaînes enveloppées depuis des journaux JSON, des sorties de terminal ou des charges JWT fonctionne proprement.',
      },
      {
        question: 'Que se passe-t-il si je colle une charge Base64 endommagée ou qui n\'est pas une image ?',
        answer:
          'Les caractères Base64 non valides déclenchent un message de validation immédiat, tandis que les octets Base64 valides qui ne forment pas une image lisible par le navigateur affichent une erreur explicite expliquant que les octets n\'ont pas pu s\'afficher. Rien ne se casse ni ne se bloque sur la page.',
      },
      {
        question: 'Quelles options de format de téléchargement le décodeur offre-t-il une fois la chaîne décodée ?',
        answer:
          'Vous pouvez sélectionner Original, PNG, JPG ou WEBP avant d\'enregistrer. En choisissant Original, les octets binaires bruts exacts sont enregistrés sans être touchés sous decoded_image.<ext>, tandis que PNG, JPG ou WEBP réaffiche le graphique décodé sur HTML5 Canvas.',
      },
      {
        question: 'Qu\'advient-il des zones transparentes si je réexporte un PNG ou SVG décodé en JPG ?',
        answer:
          'En sélectionnant JPG dans Format de téléchargement, le canevas est automatiquement rempli d\'un arrière-plan blanc uni propre (#FFFFFF) avant l\'encodage à 92 % de qualité. Conserver Original, PNG ou WEBP préserve la transparence complète sur l\'aperçu en damier.',
      },
      {
        question: 'Le décodeur préserve-t-il les GIF animés et les SVG vectoriels lorsqu\'il est réglé sur Original ?',
        answer:
          'Oui, choisir Original télécharge le blob exact construit directement à partir de votre tableau d\'octets décodés, en conservant intacts les chemins vectoriels SVG et les animations GIF à plusieurs images. Notez que passer le format de téléchargement à PNG, JPG ou WEBP rastérise les SVG ou la première image des GIF via le canevas.',
      },
      {
        question: 'Quelles mesures apparaissent à côté de l\'aperçu de l\'image décodée ?',
        answer:
          'Une fois validée, le panneau de résumé de droite affiche un badge de statut vert Image valide décodée avec le format détecté (comme PNG, JPEG ou SVG+XML). Juste en dessous, vous pouvez inspecter la taille binaire décodée exacte en Ko/Mo et les dimensions naturelles en pixels.',
      },
      {
        question: 'Pourquoi une chaîne data:image/svg+xml sans ;base64, montre-t-elle une erreur d\'encodage ?',
        answer:
          'Les URI de données qui ne sont pas en Base64 (comme les chaînes SVG encodées en pourcentage, par exemple data:image/svg+xml,%3Csvg...) sont du texte simple plutôt que des charges Base64. Cet outil valide explicitement les charges Base64 standard ou les URI de données avec ;base64, pour que les entrées non valides échouent clairement.',
      },
      {
        question: 'Y a-t-il un risque à décoder ici des réponses d\'API internes, des jetons QR ou des icônes privées ?',
        answer:
          'Non, tout le nettoyage de chaînes, le décodage d\'octets avec atob(), la détection de signature MIME et le rendu d\'images s\'exécutent strictement dans la mémoire de l\'onglet de votre navigateur. Les chaînes encodées ne voyagent jamais sur le réseau ni ne touchent les journaux distants.',
      },
      {
        question: 'Comment l\'aperçu en damier aide-t-il à inspecter les icônes décodées ?',
        answer:
          'Un motif de damier gris clair subtil est affiché derrière le cadre d\'aperçu pour que les découpes transparentes, les icônes d\'interface blanches et les ombres douces ressortent immédiatement. Sans damier, les logos blancs transparents se fondraient invisiblement dans un panneau blanc vide.',
      },
      {
        question: 'Pourquoi le fichier binaire décodé pèse-t-il moins que le texte Base64 que j\'ai collé ?',
        answer:
          'Le texte Base64 étend les données binaires d\'environ 33 % avec 6 bits par caractère ASCII. En le reconvertissant en octets d\'image bruts, la taille compacte d\'origine du fichier binaire est restaurée.',
      },
      {
        question: 'Puis-je envelopper des guillemets HTML ou CSS url("...") autour de ma chaîne avant de la coller ?',
        answer:
          'Pour une validation propre, collez uniquement l\'URL de données (data:image/...;base64,...) ou les caractères Base64 eux-mêmes, sans balises HTML ni guillemets CSS autour. Retirer les guillemets environnants garantit que le validateur lit du Base64 pur.',
      },
      {
        question: 'Comment convertir une chaîne Base64 d\'un favicon BMP ou ICO ancien en WebP moderne ?',
        answer:
          'Collez le Base64 brut ou l\'URL de données, confirmez que l\'aperçu s\'affiche proprement, cliquez sur WEBP dans le sélecteur de format de téléchargement et appuyez sur Télécharger le fichier image. L\'exportateur de canevas produit immédiatement une image WebP compressée.',
      },
      {
        question: 'À quelle vitesse le décodage fonctionne-t-il pour les chaînes Base64 de plusieurs mégaoctets ?',
        answer:
          'Le décodage se produit en millisecondes localement en JavaScript pour les petites icônes et les photos web typiques de moins de plusieurs mégaoctets. Les très grandes chaînes collées (des dizaines de mégaoctets de texte) dépendent surtout de la vitesse de collage de la zone de texte de votre navigateur.',
      },
      {
        question: 'Puis-je décoder des chaînes Base64 SVG+XML en fichiers PNG rastérisés nets ?',
        answer:
          'Oui, collez une URL de données SVG encodée en Base64 ou du balisage Base64 SVG brut, que le décodeur identifie via les en-têtes <svg ou <?xml automatiquement. Puis passez le format de téléchargement d\'Original à PNG pour rastériser le graphique vectoriel sur le canevas à sa taille naturelle.',
      },
      {
        question: 'Pourquoi le fichier de sortie se télécharge-t-il toujours sous decoded_image.<ext> ?',
        answer:
          'Les chaînes Base64 standard et les URL de données encodent des octets d\'image bruts et des types MIME sans porter de nom de fichier d\'origine. Pour garder les téléchargements prévisibles pour toutes les entrées, l\'exportateur nomme le fichier enregistré decoded_image suivi de l\'extension de format détectée ou sélectionnée.',
      },
      {
        question: 'Quelle est la façon la plus rapide d\'effacer une énorme chaîne Base64 et d\'inspecter la suivante ?',
        answer:
          'Cliquez sur Effacer dans le coin supérieur droit de la carte Coller une chaîne Base64 pour effacer la zone de texte en un toucher. Cela supprime immédiatement le panneau d\'aperçu et révoque les URL d\'objet temporaires de la mémoire du navigateur.',
      },
      {
        question: 'Coller une chaîne Base64 se décode-t-il automatiquement sans cliquer sur Décoder l\'image ?',
        answer:
          'Oui, le décodage se déclenche automatiquement dès que le texte entre ou change dans la zone de saisie, pour que les charges valides s\'affichent en quelques millisecondes. Le bouton Décoder l\'image reste prêt chaque fois que vous voulez réexécuter la validation manuellement.',
      },
      {
        question: 'Comment encoder une image téléchargée à nouveau en URL de données HTML ou CSS plus tard ?',
        answer:
          'Faites défiler jusqu\'à la section Outils associés ci-dessous et ouvrez Image en Base64 pour changer de direction proprement. Il reconvertit n\'importe quelle image JPG, PNG, WebP, SVG, GIF, BMP ou ICO en extraits d\'URL de données, de Base64 brut, de HTML <img> ou de CSS url().',
      },
      {
        question: 'Le décodeur de Base64 en image fonctionne-t-il hors ligne ou sur les smartphones ?',
        answer:
          'Oui, chaque vérification de chaîne, chaque décodage d\'octets et chaque conversion de format sur canevas s\'exécute dans les API intégrées du navigateur, sans appels réseau. Il fonctionne en douceur sur Safari iOS, Chrome Android, Windows, macOS et Linux une fois la page chargée.',
      },
    ],
    relatedSlugs: ['/image-to-base64', '/image-converter', '/image-dimensions-checker', '/'],
  },
  {
    slug: '/image-color-palette-extractor',
    name: 'Extracteur de palette de couleurs',
    shortDescription: 'Extrayez les couleurs dominantes de n’importe quelle photo avec les codes HEX, RVB, TSL et l’export.',
    category: 'developer',
    seoTitle: 'Extracteur de palette de couleurs gratuit en ligne',
    seoDescription:
      'Extrayez gratuitement en ligne les couleurs dominantes d’une photo : 3 à 12 échantillons avec codes HEX, RVB et TSL, variables CSS, JSON et carte PNG.',
    h1: 'Extracteur de palette de couleurs gratuit en ligne',
    subtitle:
      'Découvrez la gamme de couleurs principale de n’importe quelle photographie, illustration ou capture d’interface grâce à notre extracteur de palette de couleurs intégré au navigateur, basé sur la quantification Median-Cut. Pensé pour les designers d’interface, les stratèges de marque et les développeurs front-end, il génère 3 à 12 échantillons équilibrés avec leurs pourcentages de présence, la copie en un clic des codes HEX, RVB et TSL, des propriétés personnalisées CSS, des données JSON et des cartes PNG de palette partageables, le tout en local sur votre appareil.',
    howToSteps: [
      {
        title: 'Importez votre image source',
        description:
          'Déposez ou sélectionnez n’importe quel fichier JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu’à 20 Mo dans la zone d’import (ou collez-le depuis le presse-papiers).',
      },
      {
        title: 'Définissez le nombre de couleurs (3 à 12)',
        description:
          'Faites glisser le curseur Nombre de couleurs entre 3 tons d’accent minimalistes et 12 échantillons détaillés pour recalculer la palette immédiatement.',
      },
      {
        title: 'Consultez la bande proportionnelle de couleurs',
        description:
          'Examinez la bande proportionnelle de couleurs horizontale au-dessus des cartes d’échantillons pour voir à quel point chaque teinte domine dans l’image.',
      },
      {
        title: 'Copiez les codes HEX, RVB ou TSL des échantillons',
        description:
          'Cliquez sur n’importe quelle pastille HEX, RVB ou TSL dans une carte d’échantillon pour copier cette valeur de couleur exacte directement dans le presse-papiers.',
      },
      {
        title: 'Exportez les variables CSS ou le JSON',
        description:
          'Utilisez Copier les variables CSS pour obtenir un bloc :root prêt à coller, ou Copier le JSON pour récupérer les codes d’échantillons structurés, les pourcentages et les dimensions source.',
      },
      {
        title: 'Téléchargez une carte PNG de la palette',
        description:
          'Cliquez sur Télécharger la palette PNG pour enregistrer une carte de présentation blanche et épurée qui associe votre photo d’aperçu aux blocs de couleur extraits.',
      },
    ],
    features: [
      { title: 'Quantification de couleur Median-Cut', description: 'Regroupe des millions de pixels d’image en échantillons dominants équilibrés et représentatifs en quelques millisecondes.' },
      { title: 'HEX, RVB, TSL et % de dominance', description: 'Chaque échantillon affiche les codes de couleur exacts et la part de l’image qu’il occupe.' },
      { title: 'Exports pour développeurs + carte PNG', description: 'Exportez en propriétés personnalisées CSS, JSON, extrait Tailwind ou carte PNG de palette partageable.' },
      { title: '100 % natif du navigateur', description: 'Analyse les pixels en local sur un canvas HTML5 sans importer vos images.' },
    ],
    faqs: [
      {
        question: 'Comment la quantification Median-Cut construit-elle une palette à partir de ma photo ?',
        answer:
          'Median-Cut regroupe les pixels échantillonnés dans des cubes de couleur RVB en trois dimensions et divise à plusieurs reprises le canal de couleur le plus large à sa médiane jusqu’à obtenir le nombre de cubes demandé. Chaque cube est moyenné en un échantillon représentatif pondéré par le nombre de pixels qu’il contient, ce qui produit des couleurs dominantes harmonieuses plutôt que des pixels aberrants.',
      },
      {
        question: 'Combien d’échantillons de couleur puis-je générer avec cet extracteur de palette de couleurs ?',
        answer:
          'Vous pouvez extraire de 3 à 12 couleurs dominantes à l’aide du curseur Nombre de couleurs. Choisir 3 à 5 couleurs convient bien aux thèmes de marque minimalistes, tandis que 8 à 12 révèlent des tons d’ombre subtils et des nuances d’accent secondaires.',
      },
      {
        question: 'Que représente le pourcentage affiché sur chaque carte de couleur de l’extracteur de palette ?',
        answer:
          'Chaque pourcentage indique la part des pixels échantillonnés non transparents attribués à cet échantillon pendant la quantification. La bande proportionnelle de couleurs met directement à l’échelle chaque segment de couleur pour correspondre à ces pourcentages exacts.',
      },
      {
        question: 'Puis-je copier tous les échantillons extraits en variables CSS d’un seul coup ?',
        answer:
          'Oui. En cliquant sur Copier les variables CSS, vous copiez un bloc :root complet qui liste --palette-1 jusqu’à --palette-N avec chaque couleur hexadécimale prête pour votre feuille de style. Vous pouvez renommer les variables ensuite pour qu’elles correspondent à vos jetons de design.',
      },
      {
        question: 'Quelles données l’option Copier le JSON de l’extracteur de palette inclut-elle ?',
        answer:
          'Copier le JSON écrit un tableau d’objets contenant l’index de chaque échantillon, son code hexadécimal, ses valeurs RVB et TSL ainsi que son pourcentage de dominance. Les développeurs peuvent insérer cette charge directement dans des fichiers de configuration de thème, de la documentation de design ou des scripts de style automatisés.',
      },
      {
        question: 'Que génère l’option Télécharger la palette PNG de l’extracteur de couleurs ?',
        answer:
          'Télécharger la palette PNG crée une carte de présentation blanche et épurée de 1000 pixels de large qui affiche votre image source centrée en haut, au-dessus de blocs de couleur arrondis étiquetés avec leurs codes hexadécimaux et leurs pourcentages de présence. Elle se télécharge en local sous le nom <nom>_palette.png, sans filigrane.',
      },
      {
        question: 'Pourquoi l’extracteur de palette donne-t-il des résultats différents de ceux d’une pipette ?',
        answer:
          'Une pipette prélève un seul pixel sous votre curseur, tandis que l’extraction de palette regroupe toute l’image en familles de couleurs dominantes globales. Cela la rend plus rapide pour construire des gammes de couleurs cohérentes que pour faire correspondre un minuscule point.',
      },
      {
        question: 'Comment les arrière-plans transparents sont-ils traités lors de l’extraction de couleurs à partir de fichiers PNG ?',
        answer:
          'Les pixels dont la transparence alpha est inférieure à 50 % sont ignorés avant que la quantification ne s’exécute. Cela évite que l’espace vide du canevas transparent autour des logos ou des détournages de produits ne fausse la palette vers le blanc ou le noir.',
      },
      {
        question: 'L’extracteur inspecte-t-il chaque pixel d’une photo géante de 20 Mo ?',
        answer:
          'Pour que l’extraction reste rapide dans votre navigateur, l’image est temporairement mise à l’échelle sur un canevas hors écran jusqu’à 140 pixels sur son côté le plus long avant l’exécution de Median-Cut. Comme les proportions de couleurs dominantes restent pratiquement identiques à cette échelle, les palettes se calculent presque instantanément sans figer votre onglet.',
      },
      {
        question: 'Quels formats de fichier et quelles tailles l’extracteur de palette de couleurs accepte-t-il ?',
        answer:
          'Vous pouvez importer des fichiers JPG, PNG, WebP, HEIC/HEIF d’iPhone, GIF, BMP et SVG jusqu’à 20 Mo par image. Les GIF animés à plusieurs images extraient les couleurs de leur première image sans problème.',
      },
      {
        question: 'Pourquoi deux tons semblables sont-ils apparus dans ma palette de 12 couleurs ?',
        answer:
          'Les photos avec de grands dégradés, comme les couchers de soleil, les tons de peau ou les arrière-plans de studio, contiennent des millions de pixels regroupés dans une seule région de l’espace colorimétrique. Avec un nombre élevé d’échantillons, comme 10 ou 12, Median-Cut subdivise naturellement cette région dense en lumières et demi-tons étroitement liés.',
      },
      {
        question: 'Mes concepts de marque ou mes captures d’écran sont-ils envoyés vers un serveur ?',
        answer:
          'Non. L’échantillonnage des pixels, le regroupement des couleurs, le formatage du code et la création de la carte PNG se déroulent exclusivement dans la mémoire locale du canvas HTML5. Vos ressources créatives restent strictement sur votre propre appareil.',
      },
      {
        question: 'Puis-je modifier le nombre d’échantillons après avoir copié le CSS sans réimporter l’image ?',
        answer:
          'Oui. En déplaçant le curseur Nombre de couleurs, les données d’image mises en cache sont regroupées à nouveau instantanément en mémoire, ce qui vous permet de comparer 4, 6 ou 10 couleurs côte à côte avant d’exporter.',
      },
      {
        question: 'Pourquoi un petit accent néon n’apparaît-il pas dans une palette de 4 couleurs ?',
        answer:
          'Comme Median-Cut privilégie les régions de couleur qui contiennent les plus grandes zones de pixels, un petit bouton d’accent de 1 % dans une énorme capture sombre peut fusionner dans un cube plus large quand le nombre d’échantillons est faible. En augmentant le nombre de couleurs vers 10 ou 12, les accents plus petits apparaissent généralement.',
      },
      {
        question: 'Les étiquettes de texte des échantillons restent-elles lisibles sur des couleurs très sombres ou très claires ?',
        answer:
          'Oui. Tant sur les cartes de la page que sur la carte PNG de palette exportée, l’encre blanche ou sombre est calculée automatiquement à partir de la luminance perçue de chaque couleur, de sorte que les codes hexadécimaux restent lisibles.',
      },
      {
        question: 'Puis-je coller une capture d’écran directement depuis le presse-papiers dans l’extracteur de palette ?',
        answer:
          'Oui. Appuyez sur Ctrl+V sous Windows/Linux ou Cmd+V sous macOS n’importe où sur la page pour charger une capture copiée ou une maquette de design directement dans l’analyseur de couleurs.',
      },
      {
        question: 'Quelle est la précision des valeurs TSL et RVB de l’extracteur par rapport aux standards CSS ?',
        answer:
          'Chaque échantillon génère une notation standard valide en CSS rgb(r, g, b) et hsl(h, s%, l%) ainsi que des codes hexadécimaux #RRGGBB à six chiffres en majuscules. Vous pouvez coller n’importe quelle valeur copiée directement dans du CSS, Figma ou les outils de développement du navigateur.',
      },
      {
        question: 'Puis-je extraire une palette à partir d’un logo vectoriel SVG ?',
        answer:
          'Oui. Quand vous déposez un fichier SVG jusqu’à 20 Mo, votre navigateur le rastérise proprement sur le canvas avant de compter les couleurs, ce qui vous donne des échantillons et des pourcentages instantanés à partir de l’illustration vectorielle.',
      },
      {
        question: 'L’import d’une nouvelle image efface-t-il automatiquement les anciens échantillons de l’extracteur ?',
        answer:
          'Oui, déposer une image de remplacement ou cliquer sur Changer efface proprement l’état de la palette précédente et exécute une nouvelle quantification sur le nouveau visuel. Vous n’avez jamais besoin d’actualiser la page entre deux photos.',
      },
      {
        question: 'Puis-je utiliser cet extracteur de palette sur iOS, Android et les navigateurs de bureau ?',
        answer:
          'Oui. La grille d’échantillons réactive, le curseur et les boutons de copie fonctionnent sans problème dans Safari sur iOS, Chrome sur Android et les navigateurs de bureau modernes, sans inscription ni installation.',
      },
    ],
    relatedSlugs: ['/image-color-picker', '/favicon-generator', '/add-background-to-image', '/'],
  },
  {
    slug: '/gif-maker',
    name: 'Créateur de GIF',
    shortDescription: 'Créez des GIF animés à partir de JPG, PNG et WebP avec la durée par image et le contrôle des boucles.',
    category: 'create',
    seoTitle: 'Créateur de GIF animés gratuit en ligne – Photos en GIF',
    seoDescription:
      'Créez des GIF animés gratuitement en ligne : combinez JPG, PNG, WebP et HEIC, réglez la durée de chaque image et choisissez les boucles. Sans filigrane.',
    h1: 'Créateur de GIF animés gratuit',
    subtitle:
      'Transformez des photos, des angles de produit et des images de démonstration d’interface en animations en boucle grâce à notre créateur de GIF animés gratuit qui fonctionne proprement dans votre navigateur. Idéal pour les créateurs sociaux, les auteurs de tutoriels et les professionnels du marketing : réorganisez, dupliquez et chronométrez les images une par une, choisissez le nombre de boucles, personnalisez l’ajustement et les dimensions des images, et encodez des fichiers GIF89a sans filigrane et en privé.',
    howToSteps: [
      {
        title: 'Importez au moins deux images',
        description:
          'Déposez des fichiers JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu’à 20 Mo chacun dans la zone des images (ou utilisez Ajouter des images ensuite pour en ajouter d’autres).',
      },
      {
        title: 'Réorganisez, dupliquez ou supprimez des images',
        description:
          'Faites glisser les cartes d’images par leurs poignées ou utilisez les boutons fléchés pour fixer l’ordre de la séquence, dupliquer les images clés ou retirer les prises indésirables.',
      },
      {
        title: 'Définissez la vitesse globale et les durées par image',
        description:
          'Choisissez un curseur de Durée par défaut (50 à 3000 ms) ou un préréglage rapide de 1 à 10 IPS, et saisissez des durées personnalisées sur des images individuelles si nécessaire.',
      },
      {
        title: 'Configurez le comportement de boucle et l’ajustement des images',
        description:
          'Sélectionnez Toujours, Définir les boucles (2 à 50 lectures) ou Lire une fois, puis choisissez l’ajustement Contenir ou Couvrir avec une couleur de fond mate.',
      },
      {
        title: 'Ajustez les dimensions de sortie et la qualité de la palette',
        description:
          'Choisissez un préréglage rapide de 480 px, 640 px, 800 px ou Original (ou saisissez une largeur et une hauteur de 16 à 2000 px) et définissez la qualité de la palette de couleurs de 10 % à 100 %.',
      },
      {
        title: 'Générez et téléchargez votre GIF animé',
        description:
          'Cliquez sur Générer le GIF animé pour voir la lecture en direct avec les durées ou pour encoder en local et enregistrer animated_compressmypic.gif.',
      },
    ],
    features: [
      {
        title: 'Véritable encodage GIF89a côté client',
        description:
          'Utilise un quantificateur de couleur rapide dans le navigateur et un encodeur GIF LZW (chargé à la demande) — zéro appel d’API externe ni import vers un serveur.',
      },
      {
        title: 'Durées globales et par image',
        description:
          'Définissez une vitesse d’images uniforme en millisecondes ou avec des préréglages IPS, et modifiez éventuellement la durée sur des images clés individuelles.',
      },
      {
        title: 'Contrôles flexibles de boucle et d’ajustement',
        description:
          'Choisissez la boucle infinie, la lecture unique ou un nombre exact de lectures, ainsi que l’ajustement d’image Contenir ou Couvrir.',
      },
      {
        title: 'Avertissement de taille de fichier importante',
        description:
          'Vous avertit automatiquement quand un GIF encodé devient lourd (plus de 5 à 15 Mo) pour que vous puissiez optimiser les dimensions ou la qualité pour les applications de messagerie.',
      },
    ],
    faqs: [
      {
        question: 'Comment le navigateur encode-t-il mes photos en GIF animé sans les importer ?',
        answer:
          'Quand vous cliquez sur Générer le GIF animé, la page charge à la demande un encodeur GIF89a JavaScript local et un quantificateur de couleur directement dans l’onglet de votre navigateur. Chaque image est dessinée sur un canevas hors écran aux dimensions choisies et compressée avec LZW en local.',
      },
      {
        question: 'Quelle est la différence entre l’aperçu en direct et le GIF généré ?',
        answer:
          'Avant l’encodage, le canevas d’aperçu de gauche lit vos images importées en temps réel avec vos durées actuelles en millisecondes et vos réglages de cadrage, pour que vous puissiez vérifier le rythme immédiatement. Générer le GIF fige ces choix dans un vrai fichier .gif quantifié à 256 couleurs.',
      },
      {
        question: 'Puis-je marquer une pause plus longue sur une diapositive de titre ou sur l’image finale du GIF ?',
        answer:
          'Oui. Tandis que la Durée par défaut définit la vitesse de base (50 ms à 3000 ms) de toute la séquence, chaque carte d’image possède un champ Durée (ms) facultatif qui accepte de 20 ms à 10 000 ms pour retenir des diapositives précises plus longtemps.',
      },
      {
        question: 'À quoi correspondent les préréglages rapides de 1, 2, 5 et 10 IPS du créateur de GIF ?',
        answer:
          'Ces boutons convertissent les images par seconde en intervalles exacts en millisecondes : 1000 ms pour 1 IPS, 500 ms pour 2 IPS, 200 ms pour 5 IPS et 100 ms pour 10 IPS. Vous pouvez ensuite ajuster le curseur par pas de 25 ms.',
      },
      {
        question: 'Quelles options de boucle le GIF terminé propose-t-il ?',
        answer:
          'Sous Comportement de boucle, vous pouvez choisir Toujours pour une lecture infinie, Définir les boucles pour préciser un nombre exact entre 2 et 50 lectures, ou Lire une fois pour que l’animation s’arrête proprement sur l’image finale. Les octets d’extension Netscape sont écrits automatiquement selon votre choix.',
      },
      {
        question: 'Comment choisir entre Contenir et Couvrir pour l’ajustement des images du GIF ?',
        answer:
          'Contenir met chaque image à l’échelle pour qu’elle tienne entièrement dans le cadre du GIF, en remplissant les bandes restantes avec votre couleur de fond mate. Couvrir agrandit légèrement chaque photo pour remplir tout le canevas bord à bord sans bandes, en rognant les bords qui dépassent.',
      },
      {
        question: 'Comment gérer des images aux proportions différentes dans une même animation GIF ?',
        answer:
          'Choisissez Contenir si vous ne voulez jamais rogner des logos ou des photos verticales, et faites correspondre l’échantillon de fond mate à votre site web ou à votre arrière-plan en mode sombre. Choisissez Couvrir quand vous combinez des photos variées en un diaporama uniforme plein cadre.',
      },
      {
        question: 'Quelles sont les dimensions minimales et maximales en pixels d’un GIF généré ?',
        answer:
          'La largeur et la hauteur de sortie acceptent des valeurs de 16 px à 2000 px, avec des boutons rapides pour 480 px, 640 px, 800 px et Original. Gardez le verrouillage du ratio activé quand vous mettez une dimension à l’échelle proportionnellement.',
      },
      {
        question: 'Pourquoi l’outil affiche-t-il un avertissement de GIF volumineux au-dessus de 5 Mo ou 15 Mo ?',
        answer:
          'Comme le GIF enregistre des images rastérisées complètes avec une limite de 256 couleurs au lieu de la compression moderne entre images de la vidéo, les animations larges en haute résolution grossissent vite. Passer la largeur à 480 px ou 640 px, ou baisser la qualité de la palette de couleurs, réduit beaucoup le poids du fichier pour les applications de messagerie et de courrier.',
      },
      {
        question: 'Que contrôle le curseur de qualité de la palette de couleurs du GIF ?',
        answer:
          'La qualité de la palette de couleurs (de 10 % à 100 %, 80 % par défaut) ajuste la finesse avec laquelle le quantificateur échantillonne les pixels des images quand il construit chaque palette de 256 couleurs. Les valeurs élevées conservent des dégradés de couleur plus doux, tandis que les valeurs faibles accélèrent l’encodage et réduisent souvent la taille en octets.',
      },
      {
        question: 'Combien d’images source dois-je combiner dans un GIF créé dans le navigateur ?',
        answer:
          'La file d’images n’a pas de limite fixe de nombre de fichiers, même si combiner 2 à 40 images de 480 px à 800 px de large fonctionne généralement sans problème dans la mémoire typique des navigateurs de bureau et de mobile. Des piles plus grandes d’images 4K peuvent être ajoutées par lots jusqu’à 20 Mo par fichier d’entrée.',
      },
      {
        question: 'Puis-je répéter une image sans importer deux fois le même fichier dans le créateur de GIF ?',
        answer:
          'Oui. Cliquez sur l’icône de duplication de n’importe quelle carte d’image pour cloner cette diapositive avec sa durée personnalisée juste à côté de l’originale, puis faites-la glisser ou déplacez-la avec les flèches n’importe où dans la chronologie.',
      },
      {
        question: 'Dois-je tout importer d’un coup ou puis-je ajouter d’autres images ensuite dans le créateur de GIF ?',
        answer:
          'Vous pouvez ajouter d’autres images à tout moment avec le bouton Ajouter des images dans l’en-tête Images. Votre ordre actuel des images, vos durées personnalisées et vos dimensions de sortie restent intacts quand de nouvelles images s’ajoutent.',
      },
      {
        question: 'Les exports HEIC ou les rafales de Live Photo d’iPhone fonctionnent-ils dans ce créateur de GIF ?',
        answer:
          'Oui. Si vous sélectionnez plusieurs images .heic ou .heif jusqu’à 20 Mo chacune, la page les décode en local dans votre navigateur via WebAssembly avant d’assembler votre animation.',
      },
      {
        question: 'Que se passe-t-il si je modifie les réglages après avoir déjà généré un GIF ?',
        answer:
          'Cliquez sur Retour à l’éditeur d’images sous l’aperçu du GIF terminé pour déverrouiller votre chronologie et vos contrôles. Ajustez librement les durées, les boucles, les dimensions ou l’ordre des images, puis générez un nouveau fichier immédiatement.',
      },
      {
        question: 'Le GIF généré conserve-t-il proprement les arrière-plans transparents ?',
        answer:
          'Avant l’exécution de la quantification LZW, chaque image est composée proprement sur la couleur de fond mate sélectionnée (blanc par défaut). Cela évite les bords noirs dentelés et rugueux autour des bords adoucis des PNG ou SVG.',
      },
      {
        question: 'Puis-je extraire une seule image d’un GIF existant si j’importe un fichier .gif ?',
        answer:
          'Quand vous déposez une image .gif comme image source, le canvas HTML5 charge sa première image dans la séquence comme n’importe quelle photo fixe. Utilisez les outils Diviseur d’images ou Compresseur de GIF si vous devez réencoder des GIF animés existants.',
      },
      {
        question: 'Des filigranes ou des cartes de fin promotionnelles sont-ils ajoutés à mon GIF téléchargé ?',
        answer:
          'Jamais. Chaque GIF animé encodé contient uniquement vos images et réglages choisis, sans marque, sans filigrane ni limite d’utilisation.',
      },
      {
        question: 'Pourquoi mon ratio est-il resté fixe quand j’ai modifié la largeur de sortie du GIF ?',
        answer:
          'Le verrouillage du ratio est activé par défaut pour éviter des images étirées ou écrasées selon les dimensions de votre première diapositive. Cliquez sur l’interrupteur de verrouillage pour saisir une largeur et une hauteur personnalisées indépendantes si nécessaire.',
      },
      {
        question: 'Le fichier animated_compressmypic.gif fonctionnera-t-il sur Slack, Discord et les sites web ?',
        answer:
          'Oui. L’encodeur génère des fichiers binaires standard GIF89a avec des extensions de boucle Netscape, ce qui garantit une large compatibilité de lecture dans les navigateurs, les applications de messagerie, les blogs et les outils de présentation.',
      },
    ],
    relatedSlugs: ['/image-collage-maker', '/image-splitter', '/image-resizer', '/'],
  },
  {
    slug: '/image-collage-maker',
    name: 'Créateur de collages d’images',
    shortDescription: 'Organisez vos photos en grilles 2×2, 3×3 ou en bandes, avec échange par glisser-déposer et export.',
    category: 'create',
    seoTitle: 'Créateur de collages de photos gratuit en ligne',
    seoDescription:
      'Créez des collages gratuitement en ligne : grilles 2×2 et 3×3 ou bandes, échangez les cellules par glisser-déposer et exportez en JPG ou PNG jusqu’à 4000 px.',
    h1: 'Créateur de collages d’images gratuit en ligne',
    subtitle:
      'Assemblez des grilles de photos épurées, des bandes avant/après et des mises en page de stories sociales grâce à notre créateur de collages d’images gratuit, directement dans votre navigateur. Créé pour les créateurs de contenu, les vendeurs en ligne et les familles, il prend en charge les grilles 2×2 et 3×3 ainsi que les bandes verticales et horizontales, avec échange de cellules par glisser-déposer, divisions ajustables, coins arrondis, espaces personnalisés et export JPG ou PNG sans filigrane jusqu’à 4000 px.',
    howToSteps: [
      {
        title: 'Importez des photos dans le studio de collage',
        description:
          'Déposez des images JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu’à 20 Mo chacune ; déposer 5 images ou plus choisit automatiquement la grille 3×3, tandis que 4 images ou moins sélectionnent la grille 2×2.',
      },
      {
        title: 'Choisissez une mise en page en grille ou en bande',
        description:
          'Basculez librement entre la grille 2×2 (4 cellules), la grille 3×3 (9 cellules), la bande verticale ou la bande horizontale dans le panneau de mise en page du collage.',
      },
      {
        title: 'Réorganisez ou remplissez les emplacements du collage',
        description:
          'Faites glisser n’importe quelle cellule sur une autre pour échanger les positions, touchez deux emplacements successivement sur les écrans tactiles, utilisez les flèches gauche/droite ou cliquez sur Ajouter des photos pour remplir les emplacements ouverts.',
      },
      {
        title: 'Ajustez les proportions, les espaces et les coins des cellules',
        description:
          'Ajustez la division des colonnes, la division des lignes ou l’importance de la cellule principale (ou cliquez sur Cellules égales), puis définissez l’espacement (0 à 80 px) et le rayon des cellules (0 à 60 px).',
      },
      {
        title: 'Choisissez la couleur de fond, l’ajustement d’image et la taille de sortie',
        description:
          'Choisissez le cadrage Couvrir ou Contenir, sélectionnez un échantillon de couleur de fond ou un code hexadécimal, et saisissez des dimensions de 200 à 4000 px (ou cliquez sur les préréglages 1200×1200, 1920×1080 ou 1080×1920).',
      },
      {
        title: 'Exportez votre collage terminé',
        description:
          'Choisissez JPG (avec un curseur de qualité de 10 à 100 %) ou PNG (sans perte) et cliquez sur Télécharger le collage pour enregistrer votre mise en page en pleine résolution en local.',
      },
    ],
    features: [
      {
        title: '4 mises en page de collage épurées',
        description:
          'Créez des carrés équilibrés 2×2, des grilles de photos 3×3, des stories verticales pour mobile ou de larges bandes horizontales de comparaison.',
      },
      {
        title: 'Réorganisation des cellules par glisser-déposer',
        description:
          'Faites glisser n’importe quelle cellule de photo sur un autre emplacement pour échanger les positions immédiatement, ou touchez deux cellules sur mobile.',
      },
      {
        title: 'Proportions et espaces de cellules personnalisés',
        description:
          'Ajustez avec précision les divisions de colonnes, les divisions de lignes, l’importance de la cellule principale, l’espacement, l’arrondi des coins et la couleur de fond.',
      },
      {
        title: 'Export JPG et PNG haute résolution',
        description:
          'Rendez des collages en pleine résolution jusqu’à 4000 px directement sur un canvas HTML5, sans filigrane.',
      },
    ],
    faqs: [
      {
        question: 'Quelles mises en page ce créateur de collages d’images inclut-il ?',
        answer:
          'Vous pouvez basculer instantanément entre la grille 2×2 (4 cellules), la grille 3×3 (9 cellules), la bande verticale (colonne de haut en bas) et la bande horizontale (ligne côte à côte). Sélectionner la bande verticale ou horizontale définit automatiquement des dimensions par défaut pratiques (1080×1920 ou 1920×720), que vous pouvez ensuite ajuster librement.',
      },
      {
        question: 'Comment fonctionne l’échange par toucher si je crée un collage sur un téléphone ou une tablette ?',
        answer:
          'Sur les écrans tactiles où le glisser-déposer est difficile, touchez simplement la première tuile de cellule sous Réorganiser les cellules pour la mettre en surbrillance, puis touchez un deuxième emplacement pour échanger leurs photos immédiatement. Des boutons fléchés gauche et droite sont aussi disponibles sous chaque emplacement.',
      },
      {
        question: 'Que se passe-t-il si j’importe moins de photos que le nombre de cellules d’une grille 3×3 ?',
        answer:
          'Les cellules non remplies apparaissent comme des emplacements « Emplacement N » en pointillés et épurés dans l’aperçu en direct, pour que vous puissiez inspecter la mise en page tout en ajoutant les images restantes. Vous pouvez cliquer sur le bouton + directement sur une tuile vide ou passer à une mise en page 2×2 ou en bande pour correspondre à votre nombre exact d’images.',
      },
      {
        question: 'Puis-je rendre une photo vedette plus grande que les autres dans une grille ou une bande ?',
        answer:
          'Oui. Dans la grille 2×2, vous pouvez faire glisser la division des colonnes et la division des lignes de 20 % à 80 %, dans la grille 3×3 vous pouvez redimensionner la colonne centrale et la ligne centrale, et dans les bandes verticales ou horizontales vous pouvez augmenter l’importance de la cellule principale jusqu’à +100 %.',
      },
      {
        question: 'Comment revenir à une grille uniforme après avoir déplacé les curseurs de cellules inégales ?',
        answer:
          'Cliquez sur le bouton Cellules égales dans la section Proportions et espacement des cellules. Il réinitialise la division des colonnes, la division des lignes et l’importance principale à des divisions équilibrées et égales en un clic.',
      },
      {
        question: 'Puis-je créer un collage sans bordure, sans aucun espace entre les photos ?',
        answer:
          'Oui. Faites glisser l’espacement et le rayon des cellules jusqu’à 0 px pour que les photos adjacentes se rejoignent bord à bord proprement, sans lignes de joint visibles ni coins arrondis.',
      },
      {
        question: 'Quand dois-je passer l’ajustement d’image de Couvrir à Contenir dans le collage ?',
        answer:
          'Couvrir remplit chaque cellule rectangulaire bord à bord en rognant les bords subtils qui dépassent du ratio de la cellule — idéal pour les grilles uniformes de style de vie. Contenir réduit chaque image jusqu’à ce que tout le sujet tienne dans sa cellule sans être touché, en affichant votre couleur de fond derrière toute marge ouverte.',
      },
      {
        question: 'Puis-je ajuster l’espacement des cellules et le rayon des coins arrondis séparément ?',
        answer:
          'Oui. L’espacement ajuste les marges extérieures et les largeurs des joints de 0 px à 80 px, tandis que le rayon des cellules arrondit doucement chaque coin de la boîte photo de 0 px à 60 px.',
      },
      {
        question: 'Quelles dimensions rapides de canevas et quels ratios prédéfinis le collage prend-il en charge ?',
        answer:
          'Vous pouvez saisir n’importe quelle taille de sortie personnalisée entre 200 px et 4000 px de chaque côté pour des cartes d’impression ou sociales personnalisées. Des boutons rapides sont aussi intégrés pour 1200×1200 Carré, 1920×1080 Paysage et 1080×1920 Story.',
      },
      {
        question: 'Quels préréglages de couleur de fond apparaissent par défaut dans le collage ?',
        answer:
          'Vous disposez d’échantillons en un clic pour le blanc pur (#ffffff), l’ardoise profonde (#0f172a) et le gris neutre doux (#f1f5f9). Un sélecteur de couleur natif complet se trouve à côté dès que vous avez besoin d’une valeur hexadécimale exacte de marque.',
      },
      {
        question: 'Importer un mélange de photos HEIC d’iPhone, PNG et JPG dans un même collage fonctionne-t-il ?',
        answer:
          'Oui. Chaque fichier importé, y compris JPG, PNG, WebP, HEIC/HEIF, GIF, BMP et SVG jusqu’à 20 Mo, est décodé en privé dans votre navigateur et dessiné sur un seul canvas HTML5 unifié.',
      },
      {
        question: 'Si je place des autocollants PNG transparents dans les cellules, que voit-on derrière eux ?',
        answer:
          'Chaque cellule est rendue sur la couleur de fond sélectionnée avant de composer l’image au premier plan. Cela garde les logos PNG transparents et les détournages épurés sur blanc, ardoise sombre ou tons personnalisés.',
      },
      {
        question: 'Dois-je enregistrer mon collage terminé en JPG ou en PNG (sans perte) ?',
        answer:
          'Choisissez JPG avec une qualité de 85 % à 95 % pour des grilles de photographie légères destinées à Instagram, WhatsApp ou au courrier. Choisissez PNG (sans perte) quand vous combinez des captures d’interface nettes, des diagrammes ou des graphiques de texte où les halos de compression JPEG seraient gênants.',
      },
      {
        question: 'Comment le nom de fichier exporté indique-t-il les réglages de collage utilisés ?',
        answer:
          'Chaque export téléchargé intègre automatiquement la mise en page et les dimensions en pixels, produisant des noms comme collage_2x2_1200x1200.jpg. Ce modèle de nom vous aide à trier plusieurs variantes de ratio sans renommer les fichiers manuellement.',
      },
      {
        question: 'Mes photos de famille privées ou mes photos avant/après sont-elles importées quelque part ?',
        answer:
          'Non. Le décodage des images, la composition de la mise en page en grille et l’export du canvas en haute résolution se déroulent strictement dans l’onglet de votre navigateur, donc aucune photo ne quitte votre téléphone ou votre ordinateur.',
      },
      {
        question: 'L’aperçu du collage correspond-il à l’export exact en pixels à 4000 px ?',
        answer:
          'Oui. La scène en direct et l’export final partagent exactement les mêmes mathématiques de proportion et de coins, en mettant à l’échelle l’espacement et le rayon des cellules doucement par rapport à la taille de sortie choisie, pour que les joints exportés correspondent à ce que vous voyez.',
      },
      {
        question: 'Combien de photos une bande verticale ou horizontale peut-elle contenir à la fois ?',
        answer:
          'Les bandes verticales et horizontales prennent en charge entre 2 et 6 emplacements dynamiques selon le nombre d’images que vous chargez. Cela facilite la création de comparaisons à deux panneaux ou de bandes de story à plusieurs images.',
      },
      {
        question: 'Puis-je retirer une seule photo d’un collage sans recommencer ?',
        answer:
          'Oui. Cliquez sur le bouton corbeille de n’importe quelle carte d’emplacement sous Réorganiser les cellules pour retirer cette photo tout en gardant intactes toutes vos autres images importées, vos réglages de mise en page et vos divisions personnalisées.',
      },
      {
        question: 'Quelle est la résolution maximale à laquelle je peux exporter pour imprimer un collage de photos ?',
        answer:
          'La largeur et la hauteur de sortie montent toutes deux jusqu’à 4000×4000 pixels, offrant 16 mégapixels de détail net. Cette résolution gère proprement les impressions de photos de table, les lookbooks et les diapositives haute densité de pixels.',
      },
      {
        question: 'Y a-t-il une limite au nombre de collages que je peux créer ou exporter ?',
        answer:
          'Non. Vous pouvez changer de mise en page, ajuster les couleurs et exporter des collages illimités gratuitement, sans compte, sans filigrane ni plafond d’export quotidien.',
      },
    ],
    relatedSlugs: ['/gif-maker', '/image-splitter', '/image-border-generator', '/'],
  },
  {
    slug: '/compress-image-to-50kb',
    name: 'Compresser une image à 50 Ko',
    shortDescription: 'Réduisez vos photos JPG, PNG et WebP à moins de 50 Ko stricts pour les formulaires.',
    category: 'compress',
    seoTitle: 'Compresser une image à 50 Ko gratuit en ligne',
    seoDescription:
      'Compressez une image à 50 Ko gratuitement en ligne pour passeports, visas et avatars. Recherche binaire de qualité et mise à l’échelle intelligente, en local.',
    h1: 'Compresser une image à 50 Ko en ligne',
    subtitle:
      'Préparez des photos de passeport, des scans de visa, des signatures manuscrites et des avatars de profil compacts pour les limites strictes des portails quand vous devez compresser une image à 50 Ko de façon fiable. Fonctionnant à 100 % en local dans votre navigateur sur des fichiers jusqu’à 25 Mo, il combine la recherche binaire de qualité avec une mise à l’échelle facultative des pixels pour que les documents sensibles ne touchent jamais des serveurs externes.',
    howToSteps: [
      {
        title: 'Déposez votre image ou votre scan de document',
        description:
          'Importez un ou plusieurs fichiers JPG, PNG, WebP ou HEIC jusqu’à 25 Mo (ou collez des photos copiées avec Ctrl+V).',
      },
      {
        title: 'Sélectionnez le format de sortie (Original, JPG, WebP ou PNG)',
        description:
          'Choisissez JPG ou WebP pour les limites strictes de photos à 50 Ko, ou gardez Original avec la conversion automatique des PNG activée pour les captures lourdes.',
      },
      {
        title: 'Vérifiez les interrupteurs de mise à l’échelle et de conversion automatique',
        description:
          'Gardez la mise à l’échelle intelligente des dimensions activée pour les photos de plusieurs mégapixels, ou désactivez-la pour conserver les dimensions exactes en pixels quand un portail l’exige.',
      },
      {
        title: 'Inspectez les badges d’octets vérifiés et la vue de comparaison',
        description:
          'Vérifiez sur chaque carte le badge vert « Moins de 50 Ko » et ouvrez la vue Comparer pour vérifier que les traits du visage ou les lignes de signature restent lisibles.',
      },
      {
        title: 'Téléchargez des fichiers individuels ou Télécharger tout (ZIP)',
        description:
          'Enregistrez chaque fichier <nom>_50kb individuellement, utilisez Conserver l’original si le fichier était déjà plus petit, ou regroupez les lots dans compressmypic_50kb.zip.',
      },
    ],
    features: [
      {
        title: 'Recherche binaire de qualité + mise à l’échelle des dimensions',
        description:
          'Trouve d’abord la plus haute qualité visuelle sous 50 Ko avec les pixels d’origine, puis met la résolution à l’échelle doucement si nécessaire.',
      },
      {
        title: 'Rapport de résultats honnête',
        description:
          'Ne simule jamais la taille de sortie : si un PNG sans perte ou une résolution verrouillée ne peut pas tenir sous 50 Ko, il l’explique clairement.',
      },
      {
        title: 'Bascule intelligente de PNG vers WebP/JPG',
        description:
          'Convertit éventuellement les PNG lourds sans perte en WebP ou JPG pour que les photos restent nettes en atteignant 50 Ko.',
      },
      {
        title: 'Traitement privé dans le navigateur',
        description: 'Passeports, photos d’identité et formulaires personnels ne quittent jamais votre appareil.',
      },
    ],
    faqs: [
      {
        question: 'Quels portails courants exigent l’import d’une image de strictement moins de 50 Ko ?',
        answer:
          'Les demandes de visa gouvernementales, les renouvellements de passeport, les inscriptions aux examens de la fonction publique, les formulaires d’admission universitaire et les champs de scan de signature imposent fréquemment des plafonds d’import stricts de 20 Ko à 50 Ko. Garder votre fichier confortablement sous 50 Ko évite les délais d’envoi de formulaires et les erreurs de rejet d’import.',
      },
      {
        question: 'Pourquoi les photos de passeport et les scans d’identité peuvent-ils être réduits à 50 Ko ici en sécurité ?',
        answer:
          'Chaque opération sur les pixels, du décodage HEIC à la recherche binaire de compression et au regroupement ZIP, s’exécute en local dans votre propre onglet de navigateur. Les photos d’identité sensibles, les signatures et les dossiers personnels ne sont jamais importés sur internet.',
      },
      {
        question: 'Pourquoi atteindre 50 Ko sur une photo de smartphone de 12 mégapixels exige-t-il généralement une mise à l’échelle des dimensions ?',
        answer:
          'Une photo complète de 4000×3000 pixels contient 12 millions de pixels dont les données Huffman JPEG de base dépassent généralement 200 Ko même avec une forte compression. Avec la mise à l’échelle intelligente des dimensions activée, l’optimiseur réduit les dimensions doucement jusqu’à ce que le détail net du visage tienne proprement sous 50 Ko.',
      },
      {
        question: 'Dois-je choisir JPG ou WebP quand j’envoie une image de moins de 50 Ko à un portail d’examens ou gouvernemental ?',
        answer:
          'Choisissez toujours JPG pour les formulaires anciens de gouvernement, passeport, bourses ou banques, car de nombreux scripts de validation rejettent les imports .webp même quand ils sont plus petits. Choisissez WebP pour les avatars web modernes ou les sites personnels où la netteté maximale à 50 Ko compte.',
      },
      {
        question: 'Comment l’outil optimise-t-il les signatures manuscrites ou les documents scannés sous 50 Ko ?',
        answer:
          'Les scans d’encre noire sur papier blanc lumineux se compressent agressivement en JPG ou WebP une fois la résolution excédentaire rognée proprement. Vérifier le modal Comparer garantit que les traits d’encre restent épurés sans blocs de compression flous autour des bords du texte.',
      },
      {
        question: 'Pourquoi un avis rouge « A augmenté » est-il apparu quand mon fichier pesait déjà 32 Ko ?',
        answer:
          'Si un JPG ou PNG déjà léger est réencodé avec une haute qualité sur le canvas, le nouveau flux d’octets peut parfois atteindre 40 Ko au lieu de se réduire davantage. Cliquez simplement sur Conserver l’original sur cette carte pour garder votre fichier source exact de 32 Ko.',
      },
      {
        question: 'Puis-je conserver les dimensions exactes de 600×600 px si mon portail de visa exige des pixels fixes et un maximum de 50 Ko ?',
        answer:
          'Oui. Décochez « Autoriser la mise à l’échelle intelligente des dimensions » pour que les dimensions en pixels restent verrouillées à 100 %, en laissant la recherche binaire tester la qualité JPEG ou WebP jusqu’à 5 % avec vos dimensions exactes. Si un portrait 600×600 est raisonnablement épuré, il tient facilement sous 50 Ko sans changer de taille.',
      },
      {
        question: 'Pourquoi verrouiller le format de sortie sur PNG déclenche-t-il souvent un avertissement d’objectif manqué à 50 Ko ?',
        answer:
          'Comme le PNG utilise une compression DEFLATE sans perte qui ignore les curseurs de qualité, seuls les icônes plates ou les minuscules vignettes se compressent sous 50 Ko en PNG. Laissez le format sur Original avec la conversion automatique activée, ou passez directement à JPG, pour que les images photographiques atteignent 50 Ko proprement.',
      },
      {
        question: 'Que se passe-t-il si j’importe un PNG de signature transparent et que je le convertis en JPG pour tenir sous 50 Ko ?',
        answer:
          'Sélectionner JPG fait apparaître l’échantillon de couleur mate pour PNG transparent (blanc pur #ffffff par défaut). Toutes les régions d’arrière-plan transparentes se remplissent proprement sur du blanc uni avant l’encodage JPEG, pour que l’encre noire reste nette au lieu de devenir noire unie.',
      },
      {
        question: 'Puis-je déposer directement un selfie HEIC de 15 Mo d’iPhone pour le réduire à moins de 50 Ko ?',
        answer:
          'Oui. Les fichiers jusqu’à 25 Mo sont acceptés, y compris les photos HEIC/HEIF d’Apple, qui sont décodées automatiquement dans le navigateur via WebAssembly et compressées vers 50 Ko en une seule passe fluide.',
      },
      {
        question: 'Quelles étapes d’échelle l’optimiseur teste-t-il quand les dimensions à 100 % dépassent 50 Ko ?',
        answer:
          'Quand les dimensions complètes ne peuvent pas passer sous 50 Ko avec une qualité acceptable, le moteur teste des facteurs de réduction progressifs qui commencent à 82 % et descendent vers 10 % (avec un minimum de 16 px). À chaque étape, il exécute une nouvelle recherche binaire de qualité et s’arrête aux plus grandes dimensions lisibles sous 50 Ko.',
      },
      {
        question: 'Compresser un portrait sur fond sombre à moins de 50 Ko causera-t-il des bandes de couleur visibles ?',
        answer:
          'Les ombres sombres douces avec des objectifs agressifs de 50 Ko peuvent montrer un léger blocage si les dimensions restent énormes. En autorisant la mise à l’échelle des dimensions, l’outil encode des dimensions un peu plus petites avec un facteur de qualité plus élevé de 70 % à 85 %, produisant des dégradés plus doux que des dimensions énormes à 10 % de qualité.',
      },
      {
        question: 'Le compresseur à 50 Ko supprime-t-il les étiquettes cachées de position GPS de ma photo d’identité ?',
        answer:
          'Oui. Dessiner votre image sur un canvas HTML5 supprime les métadonnées EXIF comme les numéros de série d’appareil, les vignettes et les coordonnées GPS, protégeant votre vie privée et libérant des kilo-octets supplémentaires pour le détail visible de l’image.',
      },
      {
        question: 'Comment l’outil détermine-t-il s’il affiche le badge « Moins de 50 Ko » ?',
        answer:
          'Après avoir encodé le Blob final, il vérifie la taille exacte en octets par rapport à 51 200 octets (50 × 1024). Seuls les fichiers strictement égaux ou inférieurs à ce plafond exact en octets reçoivent le badge vert de confirmation « Moins de 50 Ko ».',
      },
      {
        question: 'Puis-je traiter ensemble un portrait et un scan de signature à moins de 50 Ko ?',
        answer:
          'Oui. Déposez plusieurs images jusqu’à 25 Mo chacune dans la file, ajustez votre préférence de format et téléchargez chaque fichier individuellement ou regroupez-les dans compressmypic_50kb.zip.',
      },
      {
        question: 'Que faire si un portail exige en réalité 20 Ko ou 30 Ko au lieu de 50 Ko ?',
        answer:
          'Cliquez sur le lien « Besoin d’un objectif différent en Ko ? » juste dans l’en-tête de l’objectif pour passer directement au compresseur de taille de fichier cible personnalisé, où vous pouvez saisir n’importe quelle limite personnalisée comme 20 Ko ou 30 Ko.',
      },
      {
        question: 'Quelle est la taille maximale de fichier acceptée par le compresseur à 50 Ko ?',
        answer:
          'Les fichiers d’entrée individuels jusqu’à 25 Mo sont acceptés aux formats JPG, PNG, WebP, HEIC/HEIF, GIF, BMP et SVG. Les entrées GIF animées exportent une image statique optimisée sous 50 Ko.',
      },
      {
        question: 'Pourquoi l’outil vise-t-il juste un peu sous 50 Ko (environ 48 à 49,9 Ko) au lieu de s’arrêter à 25 Ko ?',
        answer:
          'Sa recherche binaire optimise jusqu’à 7 itérations pour se placer dans les 96 % à 100 % du plafond de 50 Ko quand c’est possible. Cela maximise la netteté visuelle en utilisant presque chaque kilo-octet disponible sous le plafond.',
      },
      {
        question: 'Les noms de fichiers téléchargés sont-ils clairement marqués pour ne pas les confondre avec mes fichiers originaux haute résolution ?',
        answer:
          'Oui. Chaque fichier de sortie ajoute automatiquement _50kb avant l’extension, comme portrait_50kb.jpg, en laissant votre fichier original en sécurité sans être touché sur votre appareil.',
      },
      {
        question: 'Puis-je vérifier la netteté sur mobile avant de l’importer sur un portail de formulaires ?',
        answer:
          'Oui. L’interface complète, y compris la visionneuse interactive Comparer, fonctionne sans problème dans Safari sur iOS et Chrome sur Android, rendant les envois de formulaires en déplacement rapides et fiables.',
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
    name: 'Compresser une image à 100 Ko',
    shortDescription: 'Réduisez la taille de vos images à moins de 100 Ko proprement, sans flou visible.',
    category: 'compress',
    seoTitle: 'Compresser une image à 100 Ko gratuit en ligne',
    seoDescription:
      'Compressez une image à 100 Ko gratuitement en ligne pour l’emploi, les CV et le web. Détails nets grâce à la recherche intelligente de qualité et au ZIP.',
    h1: 'Compresser une image à 100 Ko en ligne',
    subtitle:
      'Atteignez le point idéal éprouvé pour le web et les portails quand vous compressez une image à 100 Ko sans sacrifier la netteté. Créé pour les candidats qui joignent des photos de portfolio, les blogueurs qui préparent des vignettes d’articles rapides et les portails RH aux plafonds de pièces jointes serrés, cet outil local teste les réglages de qualité et la mise à l’échelle facultative dans votre navigateur sur des entrées jusqu’à 25 Mo.',
    howToSteps: [
      {
        title: 'Ajoutez votre photo ou votre visuel d’article',
        description:
          'Faites glisser et déposez une ou plusieurs images JPG, PNG, WebP ou HEIC jusqu’à 25 Mo chacune dans l’espace de travail.',
      },
      {
        title: 'Confirmez le format de sortie et le comportement de repli',
        description:
          'Gardez Original (avec repli automatique vers WebP/JPG pour les PNG trop grands) ou ciblez explicitement JPG ou WebP pour une sortie cohérente.',
      },
      {
        title: 'Choisissez si la réduction des pixels est autorisée',
        description:
          'Laissez la mise à l’échelle intelligente des dimensions activée pour des résultats nets de 800 px à 1400 px, ou décochez-la pour conserver 100 % de la largeur et de la hauteur d’origine en pixels.',
      },
      {
        title: 'Comparez la netteté visuelle avec l’original',
        description:
          'Examinez le pourcentage économisé et le badge exact de Ko de sortie, puis ouvrez Comparer sur n’importe quelle carte pour vérifier la netteté des bords côte à côte.',
      },
      {
        title: 'Téléchargez des fichiers individuels ou un ZIP par lots',
        description:
          'Enregistrez des fichiers individuels <nom>_100kb immédiatement ou cliquez sur Télécharger tout (ZIP) pour télécharger compressmypic_100kb.zip en un clic.',
      },
    ],
    features: [
      {
        title: 'Qualité maximale sous 100 Ko',
        description:
          'Au lieu d’utiliser un curseur de qualité basse arbitraire, la recherche binaire fixe la plus haute qualité sous 100 Ko.',
      },
      {
        title: 'Conserve la résolution quand c’est possible',
        description:
          'Maintient 100 % de la largeur et de la hauteur d’origine en pixels dès que l’ajustement de qualité seul respecte le plafond de 100 Ko.',
      },
      {
        title: 'Alertes transparentes de limitation',
        description:
          'Vous avertit clairement si un PNG verrouillé ou des réglages 4K sans mise à l’échelle empêchent d’atteindre 100 Ko.',
      },
      {
        title: 'Confidentialité 100 % locale',
        description: 'Aucun import, aucun filigrane et aucune inscription requise.',
      },
    ],
    faqs: [
      {
        question: 'Pourquoi 100 Ko est-il considéré comme le point idéal pour les CV, les portails d’emploi et les sites web ?',
        answer:
          'Avec environ 100 Ko, une photo typique de 1000 px à 1400 px se charge rapidement même sur les réseaux mobiles 3G, tout en gardant intacts les détails fins du visage, la typographie nette et la profondeur naturelle des couleurs. La plupart des systèmes de recrutement et des créateurs de CV en PDF acceptent confortablement les ressources de moins de 100 Ko sans recadrage ni blocage.',
      },
      {
        question: 'Une bannière web Full HD de 1920×1080 peut-elle garder ses dimensions complètes en se réduisant à 100 Ko ?',
        answer:
          'Oui, dans de nombreux cas — en particulier les prises de produit épurées, les illustrations d’interface ou les arrière-plans à flou doux compressés en WebP ou JPG. Si une scène de paysage chargée dépasse encore 100 Ko à 35 % de qualité, la mise à l’échelle facultative réduit doucement la largeur (comme 82 % ou 68 %) pour protéger la netteté.',
      },
      {
        question: 'Comment la recherche binaire automatique de qualité garde-t-elle mon fichier de 100 Ko aussi net que possible ?',
        answer:
          'Au lieu de deviner un niveau de compression statique bas comme 40 %, le moteur teste les bornes de qualité supérieure et inférieure sur jusqu’à 7 étapes binaires. Il s’arrête juste dans la plage de 96 % à 100 % sous 102 400 octets, maximisant la fidélité des pixels pour le budget exact de taille de fichier.',
      },
      {
        question: 'Quand dois-je décocher la conversion automatique des PNG volumineux quand je vise 100 Ko ?',
        answer:
          'Si une infographie plate, une icône d’interface ou un diagramme bicolore doit rester strictement en PNG sans perte et tient déjà proprement sous 100 Ko, laisser Original ou choisir PNG fonctionne très bien. Cependant, pour les PNG photographiques, garder la conversion automatique activée fait passer les prises opaques en JPG ou les transparentes en WebP pour que vous conserviez des pixels nets sous 100 Ko.',
      },
      {
        question: 'Les logos PNG transparents perdent-ils leur transparence s’ils sont convertis automatiquement sous 100 Ko ?',
        answer:
          'Non. Avant de basculer depuis un PNG trop grand en mode Original, le compresseur détecte la transparence alpha de votre fichier et choisit automatiquement WebP (en conservant toute la transparence) plutôt que JPG dès qu’il existe des pixels alpha.',
      },
      {
        question: 'Comment la compression à 100 Ko affecte-t-elle les Core Web Vitals et le poids de la page ?',
        answer:
          'Réduire des vignettes héros de 2 Mo ou des en-têtes d’article de 800 Ko à 95 Ko diminue radicalement la charge de la page sans dégrader visuellement les cartes de mise en page. Des images plus légères améliorent directement le Largest Contentful Paint (LCP) chez les visiteurs mobiles comme de bureau.',
      },
      {
        question: 'Puis-je réduire les visuels de newsletters par courriel à moins de 100 Ko pour un rendu plus rapide dans la boîte de réception ?',
        answer:
          'Oui. Choisir la sortie JPG maintient une large prise en charge des clients de messagerie dans Outlook, Apple Mail et Gmail, garantissant que les newsletters à plusieurs images restent rapides et légères sous les seuils de poids des filtres antispam.',
      },
      {
        question: 'Que se passe-t-il quand un fichier que j’importe pèse déjà 65 Ko ?',
        answer:
          'Le compresseur remarque que votre fichier est déjà sous 100 Ko et produit un export épuré en pleine résolution. Si le réencodage sur le canvas HTML5 crée un fichier légèrement plus grand que 65 Ko, un avis rouge vous permet de cliquer immédiatement sur Conserver l’original.',
      },
      {
        question: 'Pourquoi le modal Comparer aide-t-il quand on ajuste des images à 100 Ko ?',
        answer:
          'Voir un rideau divisé avant/après vous permet de vérifier si les cheveux fins, le tissage textile ou le minuscule texte de captures sont restés épurés après la compression. Si des artefacts apparaissent avec la résolution verrouillée, passer de JPG à WebP les résout souvent dans le même budget de 100 Ko.',
      },
      {
        question: 'Ce réducteur à 100 Ko supprime-t-il automatiquement les étiquettes EXIF de l’appareil photo ?',
        answer:
          'Oui. Dessiner sur un canvas HTML5 supprime les vignettes d’appareil intégrées, les blocs XMP de Lightroom et les coordonnées GPS, ce qui économise souvent 20 Ko à 60 Ko à lui seul avant même que la compression visuelle ne commence.',
      },
      {
        question: 'Puis-je faire glisser tout un dossier de vignettes de blog pour les compresser toutes à 100 Ko ?',
        answer:
          'Oui. Importez plusieurs fichiers jusqu’à 25 Mo chacun dans une file, attendez quelques secondes pendant que chaque image s’exécute séquentiellement dans votre navigateur, et enregistrez tout dans compressmypic_100kb.zip.',
      },
      {
        question: 'Que faire si un portail de CV accepte les JPG jusqu’à 100 Ko mais rejette les fichiers WebP ?',
        answer:
          'Sélectionnez JPG sous Format de sortie au lieu de le laisser sur Original avant ou après l’import. Le compresseur réexécutera chaque image strictement en .jpg standard sous 100 Ko et appliquera votre couleur mate sélectionnée à toute zone transparente.',
      },
      {
        question: 'Pourquoi ma capture PNG de 3000×2000 s’est-elle réduite proprement une fois mise à l’échelle à 68 % à 100 Ko ?',
        answer:
          'La taille de fichier PNG sans perte est étroitement liée au nombre total de pixels et à l’entropie. Mettre à l’échelle une énorme capture modestement et l’associer à WebP ou JPG fait passer le poids en octets de plusieurs mégaoctets à moins de 100 Ko tandis que le texte reste confortablement lisible.',
      },
      {
        question: 'Des CV confidentiels, des aperçus d’architecture ou des maquettes sous NDA sont-ils importés quelque part ?',
        answer:
          'Jamais. Toutes les étapes de compression, les itérations binaires et la génération d’archives ZIP s’exécutent strictement en JavaScript et canvas locaux dans l’onglet de votre navigateur.',
      },
      {
        question: 'Quels types de fichiers puis-je charger dans le compresseur à 100 Ko ?',
        answer:
          'Vous pouvez déposer des fichiers JPG, PNG, WebP, HEIC/HEIF d’iPhone, GIF, BMP et SVG jusqu’à 25 Mo par fichier. Notez que les entrées GIF animées compressent leur première image comme sortie statique.',
      },
      {
        question: 'Puis-je choisir un objectif personnalisé comme 80 Ko ou 120 Ko depuis cette page ?',
        answer:
          'Oui — touchez le lien « Besoin d’un objectif différent en Ko ? » dans le panneau de taille cible pour passer directement à notre compresseur flexible de taille de fichier cible avec n’importe quelle entrée personnalisée en Ko ou Mo.',
      },
      {
        question: 'Pourquoi un objectif PNG verrouillé peut-il échouer à 100 Ko même en réduisant l’échelle ?',
        answer:
          'Quand le PNG est explicitement forcé et que la mise à l’échelle est désactivée, une photographie bruyante conserve des millions de couleurs uniques qui ne peuvent pas tenir dans 100 Ko sans perte. Réactiver la mise à l’échelle des dimensions ou passer à WebP résout cela immédiatement.',
      },
      {
        question: 'Changer les réglages après la fin de mon lot recompresse-t-il automatiquement mes fichiers à 100 Ko ?',
        answer:
          'Oui. Basculer le format de sortie, la mise à l’échelle des dimensions, la conversion automatique des PNG ou la couleur mate JPG retraite automatiquement vos éléments en file vers 100 Ko pour que vous puissiez comparer les résultats sans effort.',
      },
      {
        question: 'Windows, macOS et iOS ouvrent-ils nativement les fichiers _100kb.jpg et _100kb.webp téléchargés ?',
        answer:
          'Oui. Le JPEG standard s’ouvre universellement partout, et le WebP moderne s’ouvre nativement dans tous les navigateurs de bureau actuels, Aperçu de macOS, Photos de Windows, Android et iOS.',
      },
      {
        question: 'Y a-t-il un quota quotidien ou une restriction de nombre de fichiers sur l’outil à 100 Ko ?',
        answer:
          'Non. Compressez autant d’images à moins de 100 Ko que la mémoire de votre navigateur le gère, sans filigrane, sans invite de compte ni mur de paiement.',
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
    name: 'Compresser une image à 200 Ko',
    shortDescription: 'Optimisez vos photos à moins de 200 Ko pour les blogs, les CMS et les portails.',
    category: 'compress',
    seoTitle: 'Compresser une image à 200 Ko gratuit en ligne',
    seoDescription:
      'Compressez une image à 200 Ko gratuitement en ligne pour WordPress, Shopify et les blogs. Détails nets en local, recherche binaire de qualité et export ZIP.',
    h1: 'Compresser une image à 200 Ko en ligne',
    subtitle:
      'Préparez une photographie de produit de boutique nette, des en-têtes vedettes de blog et des fiches d’entreprise quand vous compressez une image à 200 Ko sans surcharge. Conçu pour les éditeurs WordPress, les marchands Shopify et les professionnels du marketing numérique, il privilégie d’abord 100 % des dimensions d’origine et fonctionne complètement en local sur des fichiers jusqu’à 25 Mo, sans aucun transfert vers un serveur.',
    howToSteps: [
      {
        title: 'Importez des images de boutique ou de blog',
        description:
          'Déposez des fichiers individuels ou des lots entiers d’images JPG, PNG, WebP ou HEIC jusqu’à 25 Mo chacune dans l’espace de travail.',
      },
      {
        title: 'Choisissez la sortie WebP, JPG, Original ou PNG',
        description:
          'Choisissez WebP pour la vitesse moderne des CMS, JPG pour la compatibilité universelle des places de marché, ou Original pour convertir automatiquement uniquement les PNG lourds.',
      },
      {
        title: 'Activez la mise à l’échelle complète ou de repli',
        description:
          'Gardez la mise à l’échelle intelligente activée pour les photos d’appareil de 24 MP, ou désactivez-la quand les modèles de produit exigent strictement les dimensions d’origine en pixels.',
      },
      {
        title: 'Vérifiez l’économie et le détail côte à côte',
        description:
          'Vérifiez l’indicateur vert « Moins de 200 Ko » et faites glisser le curseur Comparer sur les étiquettes, le grain du tissu ou les bords fins d’interface.',
      },
      {
        title: 'Enregistrez des ressources individuelles ou Télécharger tout (ZIP)',
        description:
          'Téléchargez des images individuelles <nom>_200kb directement ou regroupez votre catalogue de boutique dans compressmypic_200kb.zip.',
      },
    ],
    features: [
      {
        title: 'Prêt pour CMS et places de marché',
        description: 'Idéal pour les imports Shopify, WooCommerce, WordPress et Profil d’entreprise Google.',
      },
      {
        title: 'Mise à l’échelle de repli intelligente',
        description:
          'Si une photo d’appareil de 24 MP ne peut pas tenir sous 200 Ko en taille réelle, la mise à l’échelle des dimensions intervient proprement.',
      },
      {
        title: 'Vérification exacte des Ko',
        description: 'Affiche les octets de sortie vérifiés avec les octets d’origine et le % de réduction.',
      },
      {
        title: 'Zéro import vers un serveur',
        description: 'Traitement rapide sur canvas HTML5 directement sur votre ordinateur ou votre téléphone.',
      },
    ],
    faqs: [
      {
        question: 'Pourquoi les agences WordPress et les boutiques Shopify standardisent-elles les photos de produit autour de 200 Ko ?',
        answer:
          'Un plafond de 200 Ko laisse suffisamment de débit pour des coutures nettes, un éclat métallique et des étiquettes de produit lisibles, tout en gardant les grilles de collection rapides pour les acheteurs mobiles. Rester sous 200 Ko satisfait aussi les limites strictes de CMS et d’annuaires comme le Profil d’entreprise Google ou les règles de médias WooCommerce.',
      },
      {
        question: 'Une photo d’appareil de 12 ou 24 mégapixels peut-elle atteindre 200 Ko proprement ?',
        answer:
          'Oui. Si les dimensions complètes de 4000×3000 px dépassent 200 Ko même à 35 % de qualité, la mise à l’échelle intelligente des dimensions descend proportionnellement — s’installant souvent autour de 2200 px ou 1800 px de large avec une qualité nette de 75 % à 85 %.',
      },
      {
        question: 'Quand dois-je verrouiller les dimensions en décochant la mise à l’échelle intelligente des dimensions à 200 Ko ?',
        answer:
          'Décochez la mise à l’échelle dès qu’une place de marché ou un portail d’impression impose des largeurs exactes en pixels (comme des emplacements de produit carrés de 1600×1600 px). L’optimiseur abaissera la qualité avec perte jusqu’à 5 % aux dimensions complètes et signalera honnêtement si 200 Ko est inaccessible sans redimensionnement.',
      },
      {
        question: 'Comment WebP se compare-t-il à JPG avec un objectif de 200 Ko pour les photos de commerce électronique ?',
        answer:
          'Dans le même budget de 200 Ko, WebP offre généralement des ombres de studio nettement plus épurées et un petit texte d’emballage plus net que JPG — équivalant généralement à un facteur de qualité de 10 % à 15 % supérieur. Choisissez JPG uniquement si un ancien back-end de place de marché rejette encore les imports .webp.',
      },
      {
        question: 'Que se passe-t-il si j’importe un détourage de produit PNG de studio avec un arrière-plan transparent ?',
        answer:
          'Avec le format laissé sur Original et la conversion automatique activée, tout PNG transparent trop grand bascule proprement vers WebP transparent quand le PNG seul ne peut pas atteindre 200 Ko proprement. Si vous choisissez explicitement JPG, les régions transparentes se fondent sur la couleur mate pour PNG transparent choisie.',
      },
      {
        question: 'Pourquoi l’optimiseur préfère-t-il conserver 100 % de la résolution avant de réduire les dimensions en pixels ?',
        answer:
          'Réduire les dimensions élimine définitivement le détail de la grille de pixels, tandis que l’ajustement modéré de la qualité avec perte conserve des bords nets à pleine largeur. Tester d’abord une qualité de 35 % à 94 % aux dimensions complètes garantit que les visuels héros de bureau restent en taille réelle quand c’est possible.',
      },
      {
        question: 'Puis-je optimiser par lots tout un catalogue de saison à moins de 200 Ko d’un coup ?',
        answer:
          'Oui. Déposez des dizaines de photos de produit jusqu’à 25 Mo chacune dans la file, laissez l’outil inspecter chaque image en local et récupérez chaque ressource optimisée dans compressmypic_200kb.zip.',
      },
      {
        question: 'Convertir les arrière-plans transparents en JPG avec fond blanc mate aide-t-il à respecter 200 Ko sur Amazon ou Etsy ?',
        answer:
          'Oui. Les arrière-plans blancs purs (#ffffff) se compressent extrêmement bien en JPEG tout en respectant les directives de fond blanc des places de marché, libérant des octets supplémentaires dans les 200 Ko pour le produit réel au centre.',
      },
      {
        question: 'Pourquoi mon import WebP de 140 Ko a-t-il affiché une alerte « A augmenté » après un nouveau traitement ?',
        answer:
          'Si un fichier déjà bien optimisé sous 200 Ko est réencodé avec la haute qualité par défaut du canvas, il peut atteindre près de 165 Ko au lieu de se réduire. Cliquer sur Conserver l’original restaure immédiatement le fichier source intact de 140 Ko.',
      },
      {
        question: 'Des prototypes de produit non publiés ou des bannières de campagne de clients sont-ils stockés sur des serveurs externes ?',
        answer:
          'Non. Chaque décodage de pixels, chaque passe de mise à l’échelle et chaque création de ZIP se déroulent en privé dans votre session locale de navigateur, ce qui le rend sûr pour les lancements sous embargo et le travail client sous NDA.',
      },
      {
        question: 'Le compresseur à 200 Ko prend-il en charge les photos HEIC/HEIF d’Apple prises avec des iPhones récents ?',
        answer:
          'Oui. WebAssembly côté client décode les fichiers HEIC d’iPhone directement dans l’onglet de votre navigateur, donc vous n’avez pas besoin de les convertir au préalable.',
      },
      {
        question: 'Pourquoi 200 Ko est-il souvent meilleur que 50 Ko pour les infographies détaillées ou les tableaux de menu ?',
        answer:
          'La petite typographie dans les menus de restaurant, les plans d’étage immobiliers ou les captures d’interface logicielle devient floue rapidement si elle est entassée sous 50 Ko. Un objectif de 200 Ko donne à WebP et JPG quatre fois plus de marge en octets pour que les étiquettes fines restent nettes.',
      },
      {
        question: 'À quel point la recherche binaire de qualité s’approche-t-elle généralement de 200 Ko ?',
        answer:
          'Une fois qu’une plage de qualité viable est trouvée à une échelle donnée, jusqu’à 7 itérations de recherche binaire visent 96 % à 100 % de 204 800 octets. Les fichiers s’installent couramment entre 192 Ko et 199 Ko pour que vous obteniez la netteté maximale dans la limite.',
      },
      {
        question: 'Les profils de couleur des reflex et les étiquettes GPS de l’appareil sont-ils supprimés pendant la compression à 200 Ko ?',
        answer:
          'Oui. Écrire des images via un canvas HTML5 supprime les blocs de métadonnées EXIF et les vignettes d’aperçu intégrées, améliorant la confidentialité et éliminant les kilo-octets gaspillés sur WordPress et les serveurs CDN.',
      },
      {
        question: 'Que se passe-t-il si un PNG sans perte trop grand ne descend qu’à 35 % d’échelle pour rester PNG sous 200 Ko ?',
        answer:
          'Avec le format défini sur Original et la conversion automatique des PNG activée, tout PNG sans perte forcé sous 65 % d’échelle bascule automatiquement vers WebP ou JPG. Cela vous permet de garder des dimensions en pixels beaucoup plus nettes tout en dépassant confortablement la limite de 200 Ko.',
      },
      {
        question: 'Puis-je prévisualiser les détails fins de tissu ou de bijoux avant de télécharger le fichier de 200 Ko ?',
        answer:
          'Oui. Cliquer sur Comparer sur n’importe quelle carte de résultat terminée ouvre un curseur interactif en écran partagé qui compare vos pixels originaux non compressés directement avec la sortie compressée.',
      },
      {
        question: 'Que se passe-t-il si je dépose une bannière vectorielle SVG dans le compresseur à 200 Ko ?',
        answer:
          'Votre navigateur rastérise le SVG sur le canvas et l’optimise en PNG, WebP ou JPG de moins de 200 Ko selon votre choix de format. C’est pratique dès que les places de marché ou les portails CMS rejettent les imports .svg bruts.',
      },
      {
        question: 'Quelle est la taille maximale de fichier source acceptée par image ici ?',
        answer:
          'Chaque JPG, PNG, WebP, HEIC, GIF, BMP ou SVG importé peut atteindre 25 Mo. Cette marge gère les exports d’appareil lourds directement depuis Lightroom ou les téléphones modernes sans pré-réduction.',
      },
      {
        question: 'Comment les fichiers de sortie sont-ils nommés pour rester séparés de mon dossier maître de produits ?',
        answer:
          'Chaque copie enregistrée conserve votre nom de fichier de base nettoyé et ajoute _200kb avant l’extension, produisant des noms clairs comme sneaker_side_200kb.webp. Votre maître haute résolution d’origine reste complètement intact sur le disque.',
      },
      {
        question: 'Puis-je passer à un autre seuil exact comme 150 Ko ou 300 Ko si un portail change ses règles ?',
        answer:
          'Oui. Utilisez le lien « Besoin d’un objectif différent en Ko ? » en haut des contrôles pour ouvrir le compresseur de taille de fichier cible personnalisé et saisir n’importe quel chiffre exact en Ko ou Mo.',
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
    name: 'Compresser une image à 500 Ko',
    shortDescription: 'Réduisez vos photos de plusieurs mégaoctets à moins de 500 Ko en très haute qualité.',
    category: 'compress',
    seoTitle: 'Compresser une image à 500 Ko gratuit en ligne',
    seoDescription:
      'Compressez une image à 500 Ko gratuitement en ligne sans perdre la clarté haute résolution. Transformez vos JPG, PNG, WebP et HEIC en ressources de portfolio.',
    h1: 'Compresser une image à 500 Ko en ligne',
    subtitle:
      'Transformez des images volumineuses de reflex de 5 Mo à 18 Mo, des exports RAW de smartphone et des captures haute résolution en ressources nettes quand vous compressez une image à 500 Ko en local dans votre navigateur. Idéal pour les photographes qui livrent des épreuves à leurs clients, les fondateurs qui créent des présentations légères et les agences qui soumettent des galeries de portfolio, il conserve les dimensions complètes en pixels haute résolution partout où c’est possible, jusqu’à 25 Mo par fichier.',
    howToSteps: [
      {
        title: 'Déposez des fichiers d’appareil ou de design en pleine résolution',
        description:
          'Importez une ou plusieurs images JPG, PNG, WebP ou HEIC jusqu’à 25 Mo chacune sans les redimensionner au préalable.',
      },
      {
        title: 'Choisissez le format de sortie pour une livraison haute résolution',
        description:
          'Gardez Original pour une gestion fluide, choisissez JPG pour les présentations clients et les épreuves d’impression, ou sélectionnez WebP pour des galeries de portfolio ultra nettes.',
      },
      {
        title: 'Vérifiez les préférences de mise à l’échelle et de repli PNG',
        description:
          'Laissez la mise à l’échelle intelligente des dimensions activée pour les photos de 40 MP ou plus, ou désactivez-la pour conserver des dimensions strictes de 4K ou plus avec une qualité optimisée.',
      },
      {
        title: 'Inspectez le détail côte à côte en mode Comparer',
        description:
          'Vérifiez chaque badge de confirmation « Moins de 500 Ko » et inspectez le feuillage, la texture de la peau ou la typographie dans la visionneuse divisée avant/après.',
      },
      {
        title: 'Téléchargez des fichiers individuels ou regroupez un ZIP',
        description:
          'Enregistrez chaque sortie <nom>_500kb immédiatement ou exportez de grands ensembles de photos proprement dans compressmypic_500kb.zip.',
      },
    ],
    features: [
      {
        title: 'Compression quasi sans perte à 500 Ko',
        description:
          '500 Ko offrent beaucoup de marge pour garder les grandes images de 1920 px à 4000 px visuellement indiscernables de l’original.',
      },
      {
        title: 'Décodage automatique HEIC',
        description: 'Prend en charge les photos HEIC/HEIF d’iPhone en local via WebAssembly côté client.',
      },
      {
        title: 'Aucune devinette sur la qualité',
        description: 'Arrêtez de déplacer les pourcentages manuellement : laissez la recherche binaire maximiser la qualité sous 500 Ko.',
      },
      {
        title: 'Confidentialité 100 % dans le navigateur',
        description: 'Rien n’est importé vers des serveurs distants.',
      },
    ],
    faqs: [
      {
        question: 'Pourquoi 500 Ko préserve-t-il une qualité visuelle quasi originale sur les photos 4K et 12 MP ?',
        answer:
          'Un demi-mégaoctet (512 000 octets) offre un large espace pour le micro-contraste fin, le grain de film subtil et les dégradés de ciel doux sur des photographies complètes de 1920 px à 4000 px. La plupart des images atteignent 500 Ko proprement avec une haute qualité de 75 % à 92 % sans réduire du tout les dimensions.',
      },
      {
        question: 'Quelle est l’efficacité pour les pièces jointes de présentations Pitch Deck, Keynote et PowerPoint ?',
        answer:
          'Réduire les captures et les maquettes de studio de PNG de 6 Mo à des JPG ou WebP de moins de 500 Ko diminue radicalement la surcharge globale de la présentation. Une présentation de 30 diapositives reste rapide à envoyer par courriel et à synchroniser dans le cloud tout en paraissant nette sur les projecteurs de conférence.',
      },
      {
        question: 'Puis-je conserver la résolution d’origine à 100 % sur une photo de reflex de 24 MP en compressant à 500 Ko ?',
        answer:
          'Décochez « Autoriser la mise à l’échelle intelligente des dimensions » pour forcer 100 % des dimensions d’origine en pixels, en permettant à la recherche binaire de qualité de descendre jusqu’à 5 % si nécessaire. Pour la plupart des JPEG d’appareil de 6000×4000 px, une qualité JPG autour de 40 % à 65 % dépasse déjà 500 Ko sans réduire un seul pixel.',
      },
      {
        question: 'Pourquoi un portrait HEIC de 15 Mo d’iPhone peut-il rester en pleine résolution sous 500 Ko quand il est exporté en JPG ou WebP ?',
        answer:
          'Les photos HEIC des téléphones modernes portent des données de couleur profondes et un nombre élevé de mégapixels, mais se réencodent efficacement en JPG ou WebP avec une qualité de 80 % ou plus autour de 450 à 495 Ko. Le bokeh de portrait et les dégradés de peau subtils restent doux sur tout le canevas de l’image.',
      },
      {
        question: 'Que se passe-t-il si j’importe une maquette de tableau de bord logiciel en PNG sans perte de 10 Mo ?',
        answer:
          'Un PNG rétina plein écran tient rarement dans 500 Ko sans perte sans une forte réduction des pixels. Laisser le format sur Original avec la conversion automatique des PNG activée le fait basculer automatiquement vers un WebP de haute qualité quasi sans perte ou un JPG net pour que le texte de l’interface reste lisible en taille plein écran.',
      },
      {
        question: 'Pourquoi 500 Ko est-il populaire pour les soumissions de portfolio sur Behance, Dribbble et les agences ?',
        answer:
          'Les plateformes de portfolio et les portails de fournisseurs d’appels d’offres plafonnent fréquemment les médias d’études de cas à 500 Ko par image pour garder les pages multi-projets rapides. Compresser juste sous 500 Ko satisfait les validateurs d’import sans déclencher une recompression dure côté serveur.',
      },
      {
        question: 'Comment l’outil se comporte-t-il si un fichier de mon lot pèse déjà 320 Ko ?',
        answer:
          'Le compresseur détecte que 320 Ko respecte déjà l’exigence de 500 Ko et traite une copie épurée en pleine résolution. Si le réencodage produit un fichier légèrement plus lourd, l’avertissement « A augmenté » apparaît pour que vous puissiez cliquer sur Conserver l’original et garder les 320 Ko d’origine.',
      },
      {
        question: 'Les photographes perdent-ils le contrôle de leur propriété intellectuelle ou laissent-ils fuiter des séances de clients ici ?',
        answer:
          'Jamais. Que ce soit pour préparer des aperçus de mariage, des prises d’architecture commerciale ou des prototypes non publiés, chaque image est décodée et compressée dans votre onglet local de navigateur sans aucune transmission vers un serveur.',
      },
      {
        question: 'Quel format conserve une typographie plus nette et des lignes vectorielles fines à 500 Ko ?',
        answer:
          'WebP surpasse JPG pour la typographie nette sombre sur blanc, les graphiques et les schémas dans un plafond de 500 Ko. Son encodage prédictif par blocs minimise les halos bruyants autour des interfaces et des diagrammes à fort contraste.',
      },
      {
        question: 'Puis-je aplatir un PNG de produit transparent sur du charbon sombre au lieu du blanc quand je cible un JPG de 500 Ko ?',
        answer:
          'Oui. Sélectionner JPG expose le sélecteur de couleur mate pour PNG transparent, vous permettant de saisir du blanc, de l’ardoise sombre ou n’importe quelle couleur hexadécimale de marque personnalisée pour une fusion fluide des bords transparents.',
      },
      {
        question: 'La compression sur canvas conserve-t-elle le modèle d’objectif de l’appareil, la vitesse d’obturation et les coordonnées GPS ?',
        answer:
          'Non — le canvas HTML5 supprime automatiquement les métadonnées EXIF, ce qui élimine les vignettes d’appareil intégrées et les données de position. Cela garde les épreuves de clients privées et alloue chaque kilo-octet aux pixels visibles.',
      },
      {
        question: 'Quel plafond exact en octets déclenche le badge de confirmation « Moins de 500 Ko » ?',
        answer:
          'L’outil vérifie le fichier encodé final par rapport à 512 000 octets (500 × 1024). Les fichiers strictement égaux ou inférieurs à 512 000 octets affichent le badge vert de statut « Moins de 500 Ko » et l’espace exact économisé.',
      },
      {
        question: 'Puis-je réduire par lots vingt photos de 10 Mo à 500 Ko en une seule passe ?',
        answer:
          'Oui. Déposez les vingt images (jusqu’à 25 Mo par fichier) dans la file, laissez le navigateur parcourir chaque photo séquentiellement et exportez tout ensemble dans compressmypic_500kb.zip.',
      },
      {
        question: 'Pourquoi un PNG sans perte forcé avec la mise à l’échelle désactivée a-t-il affiché « Objectif manqué » à 500 Ko ?',
        answer:
          'La compression PNG sans perte ignore les curseurs de qualité, ce qui signifie qu’une scène complexe haute résolution avec à la fois le format PNG et les dimensions complètes verrouillés ne peut pas descendre sous son plancher DEFLATE brut. Activez la mise à l’échelle des dimensions ou choisissez WebP/JPG pour dépasser 500 Ko proprement.',
      },
      {
        question: 'Puis-je zoomer et déplacer, ou comparer l’original avec la version à 500 Ko côte à côte avant d’enregistrer ?',
        answer:
          'Oui. Cliquer sur Comparer sur n’importe quelle carte terminée ouvre le rideau divisé avant/après en pleine largeur pour que vous puissiez inspecter les yeux, les mèches de cheveux ou les petites étiquettes directement par rapport au fichier original.',
      },
      {
        question: 'Si une image exige une légère mise à l’échelle des dimensions pour atteindre 500 Ko, à quel point le redimensionnement est-il radical ?',
        answer:
          'Le redimensionneur commence à 82 % des dimensions d’origine avant d’essayer des étapes plus prononcées. Comme 500 Ko est généreux, les exports géants de studio de 50 MP dépassent généralement l’objectif proprement dès l’étape de 82 % ou 68 % tout en conservant une netteté d’impression haute définition.',
      },
      {
        question: 'L’outil prend-il en charge les bitmaps BMP anciens ou les diagrammes SVG jusqu’à 25 Mo ?',
        answer:
          'Oui. Les archives BMP non compressées et les illustrations vectorielles SVG jusqu’à 25 Mo se chargent directement sur le canvas et s’exportent proprement sous 500 Ko dans votre format raster sélectionné.',
      },
      {
        question: 'Comment le nom de fichier change-t-il quand je télécharge des copies compressées à 500 Ko ?',
        answer:
          'Chaque image traitée ajoute automatiquement _500kb avant son extension, produisant des noms clairs comme architectural_proof_500kb.jpg. Garder l’étiquette dans le nom du fichier exporté garantit que vos livrables compressés n’écrasent jamais les originaux maîtres.',
      },
      {
        question: 'Que dois-je faire si un portail de place de marché fixe une limite de 1 Mo ou 250 Ko à la place ?',
        answer:
          'Cliquez sur le raccourci « Besoin d’un objectif différent en Ko ? » au-dessus des boutons de format pour ouvrir le compresseur de taille de fichier cible personnalisé et saisir n’importe quel seuil personnalisé en Ko ou Mo.',
      },
      {
        question: 'Puis-je compresser des ressources à 500 Ko directement depuis un iPad ou une tablette Android ?',
        answer:
          'Oui. Les contrôles de format tactiles, le curseur de comparaison et l’export ZIP fonctionnent proprement dans les navigateurs modernes de tablette et de mobile sans logiciel de bureau.',
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
    name: 'Compresseur d’images en lot',
    shortDescription: 'Compressez des dizaines d’images par lots en une seule fois et exportez un seul ZIP.',
    category: 'compress',
    seoTitle: 'Compresseur d’images en lot gratuit en ligne – ZIP',
    seoDescription:
      'Réduisez des dizaines de fichiers avec le compresseur d’images en lot : profils Web Rapide, E-mail ou Haute fidélité, Mo économisés et export en un ZIP.',
    h1: 'Compresseur d’images en lot gratuit',
    subtitle:
      'Réduisez des dossiers entiers de photos de produit, de sauvegardes de pellicule et de ressources de sites web simultanément grâce à notre compresseur d’images en lot gratuit, directement dans votre navigateur. Créé pour les équipes de commerce électronique, les photographes et les développeurs qui gèrent de grands lots, il combine des profils rapides de lot en un clic et des curseurs de qualité personnalisés avec un suivi de progression en direct, des comparaisons visuelles par fichier et des téléchargements instantanés en un seul ZIP.',
    howToSteps: [
      {
        title: 'Déposez tout votre lot d’images',
        description:
          'Sélectionnez ou faites glisser plusieurs images JPG, PNG, WebP ou HEIC jusqu’à 25 Mo chacune dans la zone de lot (d’autres peuvent être ajoutées à tout moment).',
      },
      {
        title: 'Cliquez sur un profil rapide de lot ou personnalisez les réglages',
        description:
          'Choisissez Web Rapide (WebP 75 %), E-mail / Partage (JPG 65 %) ou Haute fidélité (85 %), ou ajustez le curseur de qualité, le format de sortie et la couleur mate.',
      },
      {
        title: 'Surveillez la progression en direct de la compression par lots',
        description:
          'Observez comment la barre de progression en direct se termine fichier par fichier et examinez la bannière de résumé qui montre le nombre total de fichiers, les Mo économisés et le pourcentage global de réduction.',
      },
      {
        title: 'Inspectez les cartes individuelles et la qualité avant/après',
        description:
          'Ouvrez le modal Comparer sur des fichiers d’exemple, cliquez sur Conserver l’original si une ressource déjà minuscule a augmenté, ou réexécutez des fichiers individuels avec des réglages modifiés.',
      },
      {
        title: 'Ajustez et recompressez tout si nécessaire',
        description:
          'Modifiez votre profil, votre pourcentage de qualité ou votre format cible à tout moment et retraitez toute la file en un clic sans réimporter.',
      },
      {
        title: 'Téléchargez des fichiers individuels ou Télécharger tout (ZIP)',
        description:
          'Enregistrez des images optimisées individuelles directement depuis leurs cartes ou cliquez sur Télécharger tout (ZIP) pour télécharger bulk_compressed_compressmypic.zip.',
      },
    ],
    features: [
      {
        title: 'Progression par lots et totaux d’économie',
        description:
          'Affiche la progression en direct fichier par fichier, ainsi que les Mo totaux cumulés et le pourcentage économisé sur tout votre lot.',
      },
      {
        title: 'Profils rapides de lot en un clic',
        description: 'Appliquez des préréglages WebP, E-mail/JPG ou Haute fidélité sur chaque fichier instantanément.',
      },
      {
        title: 'Modal de comparaison par fichier',
        description: 'Inspectez n’importe quelle photo compressée individuelle par rapport à son original avant de télécharger.',
      },
      {
        title: 'Zéro limite de lot',
        description: 'Compressez autant d’images que la mémoire de votre appareil le permet, sans niveau payant ni file de serveur.',
      },
    ],
    faqs: [
      {
        question: 'Que changent les trois profils rapides de lot sur mes images en file ?',
        answer:
          'Web Rapide change le format de sortie en WebP avec une qualité de 75 % pour les sites web légers, E-mail / Partage convertit le lot en JPG à 65 % pour des pièces jointes plus petites, et Haute fidélité conserve les formats d’origine avec une qualité de 85 %. Cliquer sur n’importe quel profil met automatiquement à jour les réglages et recompresse les fichiers déjà chargés.',
      },
      {
        question: 'Puis-je compresser des images par lots sur un ordinateur portable ou un téléphone sans connexion active d’import ?',
        answer:
          'Une fois que la page de l’outil a fini de charger, toute la compression par lots, le décodage et la création de ZIP se déroulent en local dans votre navigateur avec le canvas HTML5 et WebAssembly. Vos photos n’entrent jamais dans une file de traitement distante et ne quittent pas votre appareil.',
      },
      {
        question: 'Comment le résumé cumulé du lot signale-t-il l’économie totale ?',
        answer:
          'Au fur et à mesure que les fichiers terminent leur traitement, la barre de résumé totalise la taille d’origine en octets de chaque élément par rapport au résultat compressé, affichant les mégaoctets cumulés économisés et le pourcentage global de réduction. Si un fichier individuel a fini plus grand, vous pouvez cliquer sur Conserver l’original sur cette carte avant d’exporter le ZIP.',
      },
      {
        question: 'Que se passe-t-il quand je mélange des captures PNG, des HEIC d’iPhone et des photos JPG dans un même lot ?',
        answer:
          'Avec le format de sortie défini sur Original, chaque image s’encode dans son format web correspondant (en décodant HEIC en JPG/PNG proprement via WebAssembly). Sinon, choisir WebP ou JPG unifie tout le dossier mixte en une seule extension de sortie uniforme.',
      },
      {
        question: 'Quelle est la taille maximale autorisée par fichier dans le compresseur d’images en lot ?',
        answer:
          'Les fichiers individuels jusqu’à 25 Mo sont acceptés pour les entrées JPG, PNG, WebP, HEIC/HEIF, GIF, BMP et SVG. Il n’y a pas de limite fixe de nombre — seulement la mémoire disponible du navigateur de votre appareil.',
      },
      {
        question: 'Pourquoi l’outil traite-t-il les lots avec une barre de progression en direct au lieu de figer mon onglet ?',
        answer:
          'Les fichiers s’exécutent en passes contrôlées du navigateur avec des mises à jour de progression (« X / Y ») affichées en temps réel. Cela garde la page réactive pour que vous puissiez surveiller clairement l’achèvement même sur des lots de 30 ou 50 photos haute résolution.',
      },
      {
        question: 'Comment le fichier ZIP exporté s’appelle-t-il quand je clique sur Télécharger tout (ZIP) ?',
        answer:
          'Cliquer sur Télécharger tout (ZIP) regroupe proprement toutes les sorties terminées dans bulk_compressed_compressmypic.zip. Toute l’archive ZIP est construite directement dans la mémoire de votre navigateur sans passer par un serveur de stockage cloud.',
      },
      {
        question: 'Puis-je ajouter d’autres photos à la file après que mon premier lot a déjà fini de se compresser ?',
        answer:
          'Oui. Déposer d’autres images les ajoute proprement à votre liste de lot existante pour que vous puissiez regrouper les fichiers anciens et nouvellement déposés ensemble dans un seul ZIP final.',
      },
      {
        question: 'Quelle est la différence entre les préréglages Équilibré, Fichier plus petit et Haute qualité dans les contrôles de compression ?',
        answer:
          'Les profils rapides de lot configurent des raccourcis de format et de qualité pour des objectifs courants comme la vitesse web ou les pièces jointes de courriel. Pendant ce temps, les pastilles Équilibré, Fichier plus petit et Haute qualité ainsi que le curseur de qualité de 10 % à 100 % dans les contrôles de compression vous permettent d’ajuster avec précision la force exacte avec perte avant de cliquer sur Recompresser tout.',
      },
      {
        question: 'Si je convertis des icônes PNG transparentes en JPG en lot, comment leurs arrière-plans sont-ils colorés ?',
        answer:
          'Dès que le format de sortie est JPG (y compris via le profil E-mail / Partage), le sélecteur de couleur de fond mate apparaît automatiquement. Il remplit les canaux alpha transparents proprement sur du blanc pur (#ffffff) ou n’importe quelle teinte hexadécimale personnalisée que vous choisissez, pour que les icônes ne deviennent jamais noires.',
      },
      {
        question: 'Le compresseur d’images en lot redimensionne-t-il les dimensions en pixels ou conserve-t-il la largeur et la hauteur d’origine ?',
        answer:
          'Le compresseur d’images en lot conserve chaque fichier à 100 % de sa largeur et de sa hauteur d’origine en pixels tout en réduisant la taille en octets via l’encodage de qualité. Si vous devez aussi réduire les dimensions sur des dizaines de photos, associez-le au redimensionneur d’images en lot.',
      },
      {
        question: 'Pourquoi un PNG déjà compressé dans mon lot a-t-il affiché un avertissement « Le réencodage a augmenté » ?',
        answer:
          'Les fichiers PNG exportés par des outils utilisant une quantification de palette agressive peuvent s’étendre légèrement quand ils sont réenregistrés en PNG complet 24 bits sans perte sur le canvas HTML5. Cliquer sur Conserver l’original sur cette carte conserve l’original plus petit dans votre ZIP de lot, ou changer le format vers WebP/JPG le réduit davantage.',
      },
      {
        question: 'Puis-je recompresser une seule image difficile au lieu de retraiter tout le dossier ?',
        answer:
          'Oui. Chaque carte de résultat terminée inclut ses propres boutons Recompresser et Retirer ainsi que Comparer et Télécharger pour que vous puissiez ajuster ou écarter proprement les valeurs aberrantes.',
      },
      {
        question: 'La compression en lot supprime-t-elle automatiquement les coordonnées GPS de l’appareil et les étiquettes EXIF des albums de voyage ?',
        answer:
          'Oui. Comme chaque image est dessinée sur un canvas HTML5 pendant la compression, les étiquettes EXIF intégrées, les numéros de série d’appareil et les positions GPS sont supprimés proprement de chaque fichier du ZIP.',
      },
      {
        question: 'Quand dois-je choisir le compresseur d’images en lot plutôt que le compresseur de taille cible ou l’optimiseur d’images web ?',
        answer:
          'Utilisez le compresseur d’images en lot quand vous voulez des économies rapides et uniformes basées sur la qualité, aux dimensions complètes en pixels, sur des dizaines de photos. Choisissez le compresseur de taille cible quand vous avez besoin que chaque fichier soit sous un plafond strict en Ko, ou l’optimiseur d’images web pour des plafonds prédéfinis de pixels web et des balises HTML réactives.',
      },
      {
        question: 'Puis-je inspecter la qualité visuelle d’éléments individuels du lot avant de télécharger le ZIP complet ?',
        answer:
          'Oui. Cliquer sur Comparer sur n’importe quelle carte ouvre le curseur divisé côte à côte qui compare les versions originale et compressée avec tout le détail.',
      },
      {
        question: 'Comment le point de départ par défaut de qualité de 70 % se comporte-t-il sur les bibliothèques de photos générales ?',
        answer:
          'La qualité avec perte de 70 % offre généralement des réductions substantielles d’octets de 50 % à 75 % sur les JPEG haute résolution tout en restant visuellement épurée sur les écrans web typiques et lors du partage par courriel. Montez-la vers 85 % avec Haute fidélité pour le travail critique de portfolio.',
      },
      {
        question: 'Que se passe-t-il si j’importe un énorme dossier de 100 photos sur un téléphone avec peu de mémoire vive ?',
        answer:
          'Comme le décodage et les tampons du canvas résident dans la mémoire de l’appareil, les onglets mobiles peuvent ralentir avec des files uniques extrêmes. Traiter 15 à 30 photos de plusieurs mégapixels par lot, et vider les listes terminées entre les ensembles, garde les navigateurs de smartphone fluides.',
      },
      {
        question: 'Des filigranes, des plafonds quotidiens de fichiers ou des invites de mise à niveau payante sont-ils appliqués aux exports ZIP en lot ?',
        answer:
          'Jamais. Les téléchargements individuels comme les paquets Télécharger tout (ZIP) s’exportent proprement sans filigrane, sans inscription de compte ni mur de paiement par nombre de fichiers.',
      },
      {
        question: 'Puis-je déposer des GIF animés dans un lot de compression massive ?',
        answer:
          'Les entrées GIF animées extraient et compressent uniquement leur première image comme fichier statique ici. Si vous devez réduire des GIF animés à plusieurs images en gardant le mouvement intact, utilisez notre outil dédié Compresseur de GIF.',
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
    slug: "/target-file-size-compressor",
    name: "Compresseur de taille de fichier cible",
    shortDescription: "Compressez n'importe quelle image jusqu'à votre limite exacte en Ko ou Mo.",
    category: "compress",
    seoTitle: "Compresseur de taille exacte gratuit en ligne – Ko ou Mo",
    seoDescription:
      "Compressez des images en ligne jusqu'à une limite exacte en Ko ou Mo, avec recherche binaire de qualité et mise à l'échelle intelligente, dans votre navigateur.",
    h1: "Compresseur d'images à taille de fichier cible",
    subtitle:
      "Saisissez n'importe quelle limite exacte de téléversement en Ko ou Mo — par exemple 35 Ko pour un badge, 150 Ko pour une bannière web ou 2 Mo pour une pièce jointe — avec notre compresseur de taille de fichier cible, qui fonctionne directement dans votre navigateur. Conçu pour les designers, les développeurs et les candidats confrontés aux règles inhabituelles des portails, il associe la recherche binaire de qualité à une mise à l'échelle facultative des pixels sur des fichiers jusqu'à 25 Mo, le tout sur votre propre appareil.",
    howToSteps: [
      {
        title: "Saisissez votre limite personnalisée en Ko ou Mo",
        description:
          "Tapez n'importe quel objectif de 1 Ko à 10 240 Ko (ou passez aux Mo jusqu'à 20 Mo), ou touchez un raccourci comme 20 Ko, 50 Ko, 100 Ko, 200 Ko, 500 Ko ou 1 Mo.",
      },
      {
        title: "Déposez une ou plusieurs images jusqu'à 25 Mo",
        description:
          "Téléversez des fichiers JPG, PNG, WebP, HEIC, GIF, BMP ou SVG dans la zone de dépôt pour lancer immédiatement l'optimisation automatique vers votre objectif.",
      },
      {
        title: "Choisissez le format de sortie et les contrôles de secours",
        description:
          "Sélectionnez Original, JPG, WebP ou PNG, gardez la mise à l'échelle intelligente des dimensions active si les fichiers haute résolution doivent perdre des pixels, et activez la conversion automatique des PNG pour les graphiques lourds.",
      },
      {
        title: "Lisez le diagnostic de l'objectif et comparez la qualité",
        description:
          "Consultez le résumé de compression cible pour voir les fichiers qui ont atteint l'objectif et ceux qui ne l'ont pas atteint, inspectez la netteté côte à côte avec Comparer, ou cliquez sur Garder l'original si une petite entrée a grossi.",
      },
      {
        title: "Ajustez l'objectif quand vous voulez ou téléchargez le ZIP",
        description:
          "Modifiez votre seuil personnalisé et cliquez sur Compresser à [objectif] pour retraiter la file d'attente, puis enregistrez des fichiers un par un ou cliquez sur Télécharger tout (ZIP).",
      },
    ],
    features: [
      {
        title: "Objectifs personnalisés en Ko et Mo",
        description: "Réglez n'importe quelle taille cible, des petits avatars de 10 Ko aux téléversements de plusieurs mégaoctets pour l'impression.",
      },
      {
        title: "Moteur en deux étapes : qualité puis échelle",
        description: "Teste d'abord les niveaux de qualité en pleine résolution, puis réduit les dimensions étape par étape seulement quand c'est nécessaire.",
      },
      {
        title: "Diagnostic honnête des objectifs manqués",
        description: "Explique clairement quand un PNG sans perte ou une mise à l'échelle désactivée empêche d'atteindre une limite stricte de taille.",
      },
      {
        title: "Prise en charge des lots et du ZIP",
        description: "Compressez plusieurs fichiers vers le même objectif en Ko et téléchargez-les tous dans un seul ZIP.",
      },
    ],
    faqs: [
      {
        question: "Quelle plage de Ko et de Mo puis-je saisir dans ce compresseur de taille de fichier cible ?",
        answer:
          "En mode Ko, vous pouvez saisir n'importe quel entier de 1 Ko à 10 240 Ko (10 Mo), avec 150 Ko comme valeur par défaut à l'ouverture de la page. En basculant la pastille d'unité sur Mo, vous pouvez viser de 1 Mo à 20 Mo, avec des raccourcis instantanés pour 20 Ko, 50 Ko, 100 Ko, 200 Ko, 500 Ko et 1 Mo.",
      },
      {
        question: "Comment le compresseur recalcule-t-il mon nombre quand je passe des Ko aux Mo ?",
        answer:
          "En cliquant sur Mo, votre objectif actuel en Ko est divisé par 1 024 et arrondi à 1 Mo minimum, pour ne jamais passer accidentellement des kilooctets à une minuscule limite en octets. En revenant aux Ko, la valeur est multipliée par 1 024 sans problème jusqu'à la limite de 10 240 Ko.",
      },
      {
        question: "Pourquoi l'optimiseur teste-t-il d'abord la qualité par recherche binaire en pleine résolution ?",
        answer:
          "Beaucoup d'images sous des limites modérées, comme 150 Ko, 300 Ko ou 1,5 Mo, peuvent atteindre l'objectif en réduisant seulement la compression JPEG ou WebP, sans supprimer de pixels. En vérifiant d'abord la qualité de 35 % à 94 % en dimensions complètes, la largeur et la hauteur en pixels restent intactes chaque fois que c'est possible.",
      },
      {
        question: "Quand la mise à l'échelle intelligente des dimensions entre-t-elle en jeu ?",
        answer:
          "Si même une qualité avec perte de 35 % en pleine largeur ne parvient pas à faire passer l'image sous votre seuil en octets et que la case Autoriser la mise à l'échelle intelligente des dimensions est cochée, le moteur descend par des facteurs d'échelle progressifs de 82 % vers 10 %. À chaque étape, il lance une nouvelle recherche de qualité et choisit la résolution la plus élevée qui respecte votre limite exacte.",
      },
      {
        question: "Que se passe-t-il si un portail exige une limite très stricte en Ko sans changer la taille ?",
        answer:
          "Décochez Autoriser la mise à l'échelle intelligente des dimensions pour verrouiller votre largeur et votre hauteur à 100 %. Le compresseur descend alors la qualité JPG ou WebP avec perte jusqu'à 5 % en dimensions complètes et vous indique honnêtement si la complexité de l'image ne peut pas tenir physiquement dans les Ko demandés.",
      },
      {
        question: "Pourquoi des limites impossibles comme 2 Ko ou 3 Ko affichent-elles un avis honnête d'objectif manqué ?",
        answer:
          "Tout fichier JPEG, WebP ou PNG valide contient des en-têtes obligatoires, des tables de Huffman et des blocs de quantification des couleurs qui occupent plusieurs centaines d'octets, même sur une minuscule grille. Plutôt que de planter ou d'inventer des chiffres, la carte affiche la plus petite taille encodée réellement possible, avec des suggestions utiles.",
      },
      {
        question: "Que fait l'interrupteur de conversion automatique des gros PNG ?",
        answer:
          "Les fichiers PNG sans perte ignorent les curseurs de qualité et ne rétrécissent que par la réduction d'échelle, ce qui peut flouter les captures ou les graphiques de produit si on les force sous une limite stricte en Ko. Avec la conversion automatique activée, les PNG opaques trop lourds passent en JPG, tandis que les PNG transparents passent en WebP quand le PNG seul manque l'objectif ou descend sous 65 % d'échelle.",
      },
      {
        question: "Puis-je compresser en lot des photos mélangées vers le même seuil personnalisé en Ko ?",
        answer:
          "Oui. Déposez n'importe quel mélange d'images JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu'à 25 Mo chacune dans la file d'attente, et chaque fichier est optimisé indépendamment par rapport à votre objectif actif en Ko ou Mo.",
      },
      {
        question: "Comment le résumé de compression cible suit-il la réussite partielle d'un lot ?",
        answer:
          "Quand vous compressez un lot de plusieurs fichiers contre une limite personnalisée stricte, la bannière sombre de résumé compte exactement combien de fichiers ont atteint votre objectif et combien n'ont pas pu tenir honnêtement, ainsi que le total d'octets économisés. Chaque carte individuelle explique son pourcentage final de qualité et son facteur d'échelle exacts.",
      },
      {
        question: "Quel nom reçoivent les téléchargements individuels et les ZIP du compresseur de taille cible ?",
        answer:
          "Les téléchargements individuels ajoutent l'étiquette en kilooctets de votre objectif — avec des noms comme brochure_150kb.jpg — tandis que les exports ZIP de plusieurs fichiers sont enregistrés sous compressmypic_<valeur><unité>.zip. Vos originaux intacts restent séparés et en sécurité sur le disque.",
      },
      {
        question: "Comment l'outil gère-t-il les arrière-plans transparents si je choisis JPG avec une limite stricte ?",
        answer:
          "En choisissant JPG, la palette de couleur d'arrière-plan pour PNG transparent apparaît (blanc pur #ffffff par défaut). Toute zone transparente avec canal alpha est remplie proprement avec la couleur d'arrière-plan choisie avant que la compression JPEG ne démarre, ce qui évite les bordures noires pleines.",
      },
      {
        question: "Pourquoi un fichier plus petit que mon objectif a-t-il affiché un avertissement de croissance ?",
        answer:
          "Si vous demandez une limite de 300 Ko pour une image déjà compressée à 180 Ko, la décoder sur HTML5 Canvas puis la réenregistrer en haute qualité peut l'étendre à 240 Ko. Cliquez sur Garder l'original sur cette carte pour conserver votre fichier source plus léger de 180 Ko.",
      },
      {
        question: "La compression à taille cible supprime-t-elle les métadonnées EXIF sensibles des documents ou des photos ?",
        answer:
          "Oui. En dessinant les pixels sur HTML5 Canvas, les aperçus de caméra intégrés, les métadonnées de l'obturateur et les coordonnées GPS sont supprimés automatiquement, ce qui garde vos fichiers personnels privés et consacre chaque kilooctet à la clarté visuelle.",
      },
      {
        question: "Puis-je changer ma valeur personnalisée en Ko après avoir terminé les images, sans les retéléverser ?",
        answer:
          "Oui. Modifiez l'objectif numérique ou touchez un autre raccourci à tout moment, puis cliquez sur le bouton Compresser à [objectif] pour réoptimiser immédiatement toute votre liste chargée en mémoire.",
      },
      {
        question: "Quelle est la précision du nombre final d'octets par rapport aux limites binaires en kilooctets ?",
        answer:
          "Le moteur convertit les Ko en octets binaires exacts (Ko × 1024) et traite votre saisie comme une limite supérieure stricte, sans jamais la dépasser sauf si c'est physiquement impossible sous des contraintes verrouillées. Sa recherche binaire s'arrête généralement entre 96 % et 100 % de cette limite pour préserver un maximum de détails.",
      },
      {
        question: "Des épreuves privées de clients, des contrats ou des scans médicaux sont-ils téléversés pendant le calcul de l'objectif ?",
        answer:
          "Non. Les itérations de recherche binaire, la mise à l'échelle des images, le décodage HEIC en WebAssembly et l'empaquetage ZIP s'exécutent strictement dans votre session de navigateur, sans aucun transfert externe sur le réseau.",
      },
      {
        question: "Puis-je voir le texte fin ou les détails à ma limite personnalisée en Ko avant d'enregistrer ?",
        answer:
          "Oui. Cliquez sur Comparer sur n'importe quelle carte de résultat terminée pour ouvrir un rideau interactif avant/après et inspecter les bords nets directement par rapport au téléversement original.",
      },
      {
        question: "Quand vaut-il mieux choisir un outil fixe de 50 Ko ou 100 Ko plutôt que le compresseur de taille cible ?",
        answer:
          "Utilisez les pages fixes quand votre flux de travail vise toujours des références standard de portails, comme les passeports de 50 Ko ou les téléversements de 200 Ko pour Shopify. Ouvrez ce compresseur de taille de fichier cible quand les formulaires demandent des limites inhabituelles comme 30 Ko, 75 Ko, 250 Ko ou 1,5 Mo.",
      },
      {
        question: "Que se passe-t-il si je téléverse un GIF animé et que je vise 400 Ko dans le compresseur de taille cible ?",
        answer:
          "Comme le ciblage en Ko basé sur Canvas traite des images raster statiques, les GIF animés téléversés sont optimisés et exportés avec leur image d'ouverture comme image fixe. Utilisez notre compresseur de GIF dédié si vous devez réduire des animations en boucle à plusieurs images sans perdre le mouvement.",
      },
      {
        question: "Que se passe-t-il si je fixe un objectif élevé en Mo, comme 5 Mo, pour une image de 1 Mo ?",
        answer:
          "Toute image déjà sous votre limite personnalisée en Mo est validée immédiatement lors du passage en qualité maximale en dimensions complètes. Si le réencodage gonfle inutilement le poids en octets, vous pouvez cliquer sur Garder l'original directement sur la carte pour conserver votre fichier source plus léger.",
      },
    ],
    relatedSlugs: ["/compress-image-to-50kb", "/compress-image-to-100kb", "/compress-image-to-200kb", "/compress-image-to-500kb"],
  },
  {
    slug: "/bulk-image-resizer",
    name: "Redimensionneur d'images en lot",
    shortDescription: "Redimensionnez des dizaines d'images par dimensions max, largeur ou %, avec ZIP.",
    category: "resize",
    seoTitle: "Redimensionneur d'images en lot gratuit en ligne – ZIP",
    seoDescription:
      "Redimensionnez des dizaines de photos en ligne avec le redimensionneur en lot, dans votre navigateur. Ajustement max, Largeur uniforme, Exact ou %, puis un ZIP.",
    h1: "Redimensionneur d'images en lot gratuit en ligne",
    subtitle:
      "Standardisez les dimensions en pixels de séances produit entières, de dossiers de blog et d'albums photo avec notre redimensionneur d'images en lot gratuit, qui fonctionne localement dans votre navigateur. Conçu pour les vendeurs e-commerce, les équipes de contenu et les photographes, il gère les lots mixtes de portraits et de paysages avec Ajustement max L × H, Largeur uniforme, L × H exactes ou mise à l'échelle en pourcentage, jusqu'à 25 Mo par fichier, avec export instantané en ZIP.",
    howToSteps: [
      {
        title: "Déposez plusieurs images dans la file d'attente",
        description:
          "Téléversez n'importe quel mélange de fichiers JPG, PNG, WebP, HEIC, GIF, BMP ou SVG jusqu'à 25 Mo chacun depuis votre ordinateur ou votre téléphone.",
      },
      {
        title: "Choisissez une stratégie de redimensionnement en lot",
        description:
          "Choisissez Ajustement max L × H pour les orientations mixtes, Largeur uniforme pour les mises en page à colonne fixe, L × H exactes pour les grilles strictes, ou Pourcentage (%) pour une mise à l'échelle uniforme.",
      },
      {
        title: "Définissez les dimensions cibles ou les raccourcis de taille",
        description:
          "Saisissez des pixels de 1 à 12 000 px (ou cliquez sur Full HD 1920px, Blog 1200px, E-commerce 1000×1000 ou Miniature 600px), ou faites glisser l'échelle de 10 % à 200 %.",
      },
      {
        title: "Configurez la protection contre l'agrandissement et le comportement d'ajustement",
        description:
          "Gardez cochée l'option Ne pas agrandir les images plus petites pour protéger les petites icônes, ou choisissez Contenir, Couvrir ou Étirer quand L × H exactes est sélectionné.",
      },
      {
        title: "Choisissez le format de sortie, la qualité et l'arrière-plan",
        description:
          "Conservez Original ou convertissez les sorties en JPG, PNG ou WebP avec un curseur de qualité de 10 % à 100 % et une couleur d'arrière-plan personnalisée pour le JPG.",
      },
      {
        title: "Lancez le redimensionnement en lot et téléchargez tout en ZIP",
        description:
          "Vérifiez les dimensions anciennes et nouvelles en pixels de chaque carte, puis cliquez sur Télécharger tout (ZIP) pour enregistrer bulk_resized_compressmypic.zip localement.",
      },
    ],
    features: [
      {
        title: "Mode cadre englobant Ajustement max",
        description: "Réduit en toute sécurité les paysages larges et les portraits hauts dans, par exemple, 1200×1200 px, sans recadrage ni distorsion.",
      },
      {
        title: "Protection contre l'agrandissement",
        description: "Gardez cochée l'option « Ne pas agrandir les images plus petites » pour que les petites ressources restent nettes au lieu d'être étirées.",
      },
      {
        title: "Contrôles de format et de qualité",
        description: "Convertissez éventuellement les sorties redimensionnées en WebP ou JPG en même temps.",
      },
      {
        title: "Emballage ZIP en un clic",
        description: "Téléchargez des dizaines d'images redimensionnées proprement nommées dans un seul fichier ZIP.",
      },
    ],
    faqs: [
      {
        question: "Comment Ajustement max L × H gère-t-il un dossier qui mélange des paysages horizontaux et des portraits verticaux ?",
        answer:
          "Ajustement max L × H traite vos saisies de largeur et de hauteur (1 200×1 200 px par défaut) comme un cadre englobant invisible, tout en préservant le ratio naturel de chaque photo. Un paysage de 4 000×2 000 devient 1 200×600, tandis qu'un portrait de 2 000×4 000 devient 600×1 200, sans recadrage ni étirement.",
      },
      {
        question: "Quand Largeur uniforme est-elle meilleure qu'Ajustement max L × H ?",
        answer:
          "Choisissez Largeur uniforme quand vous construisez des newsletters verticales, des colonnes d'articles de CMS ou des galeries responsives où chaque image doit partager exactement la même largeur horizontale. Chaque photo met sa hauteur à l'échelle proportionnellement, donc rien n'est étiré ni recadré.",
      },
      {
        question: "Que font Contenir, Couvrir et Étirer en mode L × H exactes ?",
        answer:
          "Contenir insère l'image entière dans votre cadre exact en pixels avec des marges de remplissage propres, tandis que Couvrir remplit chaque bord en pixels en recadrant les côtés en trop depuis le centre. Étirer force les ratios qui ne correspondent pas à s'adapter directement aux pixels cibles exacts.",
      },
      {
        question: "Comment fonctionne la mise à l'échelle en pourcentage (%) pour les lots ?",
        answer:
          "Le mode Pourcentage multiplie la largeur et la hauteur d'origine de chaque image téléversée par le facteur choisi sur le curseur (de 10 % à 200 %, avec des boutons rapides 25 %, 50 %, 75 %, 100 % et 150 %). Choisir 50 % transforme une photo de 4 000×3 000 en 2 000×1 500 et une icône de 1 000×800 en 500×400 dans le même passage.",
      },
      {
        question: "Pourquoi devrais-je laisser activée l'option Ne pas agrandir les images plus petites dans les lots mixtes ?",
        answer:
          "Si un dossier contient à la fois des photos reflex de 4 000 px et des badges de 400 px, forcer un petit badge jusqu'à 1 200 px étire les pixels et crée du flou. En laissant l'option Ne pas agrandir cochée, les grandes photos sont réduites proprement tandis que les petits fichiers conservent leurs dimensions d'origine nettes.",
      },
      {
        question: "Que définissent les quatre boutons rapides de pixels du redimensionneur en lot ?",
        answer:
          "Toucher Full HD 1920px remplit 1 920×1 080, Blog 1200px fixe 1 200×1 200, E-commerce 1000×1000 fixe 1 000×1 000 et Miniature 600px fixe 600×600. Vous pouvez ensuite ajuster l'un ou l'autre champ de pixels manuellement jusqu'à 12 000 px.",
      },
      {
        question: "Puis-je convertir un dossier entier en WebP ou JPG tout en le redimensionnant en lot ?",
        answer:
          "Oui. Basculez le format de sortie d'Original vers WebP, JPG ou PNG avant de cliquer sur Redimensionner en lot (N) pour changer à la fois les dimensions en pixels et moderniser les formats de fichier en un seul passage Canvas.",
      },
      {
        question: "Qu'arrive-t-il aux logos PNG transparents si je les redimensionne en lot avec le format de sortie JPG ?",
        answer:
          "En choisissant JPG, le sélecteur de couleur d'arrière-plan (#ffffff blanc par défaut) apparaît. Tout arrière-plan transparent ou ombre douce est rendu proprement sur la couleur mate choisie avant l'encodage JPEG.",
      },
      {
        question: "Conserver le format de sortie en PNG préserve-t-il la transparence alpha pendant le redimensionnement en lot ?",
        answer:
          "Oui, exporter en PNG garde les arrière-plans transparents et les bords alpha doux parfaitement intacts sur chaque élément redimensionné. Garder le format de sortie sur Original préserve aussi la transparence pour les téléversements PNG et WebP.",
      },
      {
        question: "Comment vérifier que les photos redimensionnées restent nettes avant de télécharger le ZIP ?",
        answer:
          "Cliquez sur n'importe quelle carte miniature ou sur le bouton Comparer d'un élément terminé pour ouvrir le visualiseur interactif de comparaison avant/après. Vous pouvez glisser le séparateur côte à côte pour vérifier les bords nets avant d'exporter le lot.",
      },
      {
        question: "Quelles sont les limites de mégaoctets et de pixels par fichier dans le redimensionneur d'images en lot ?",
        answer:
          "Chaque image téléversée peut peser jusqu'à 25 Mo, et les saisies de pixels vont de 1 px à 12 000 px par côté. Notez que l'export de canevas énormes de plus de 10 000 px sur des dizaines d'images dépend de la mémoire vive disponible du navigateur de votre appareil.",
      },
      {
        question: "Les photos HEIC d'iPhone et les fichiers vectoriels SVG sont-ils pris en charge dans la même file d'attente ?",
        answer:
          "Oui. Les photos HEIC/HEIF sont décodées localement via WebAssembly côté client et les graphiques SVG sont rastérisés sans problème sur HTML5 Canvas avant d'être mis à l'échelle avec les téléversements standard JPG, PNG, WebP, GIF et BMP.",
      },
      {
        question: "Puis-je ajuster les réglages et redimensionner tout le lot à nouveau sans redéposer les fichiers ?",
        answer:
          "Oui. Ajustez la stratégie, les limites de pixels, le format ou le curseur de qualité de 10 % à 100 % à tout moment, puis cliquez sur Redimensionner en lot (N) pour retraiter toutes les images en file d'attente immédiatement dans la mémoire du navigateur.",
      },
      {
        question: "Le compteur de progression en direct montre-t-il l'avancement des grands dossiers ?",
        answer:
          "Oui. Pendant le traitement, le bouton d'action affiche Redimensionnement (X/Y)… avec des miniatures tournantes, pour que vous connaissiez toujours la progression exacte du lot.",
      },
      {
        question: "Les catalogues confidentiels de clients ou les albums de famille sont-ils envoyés à des serveurs cloud pour le redimensionnement ?",
        answer:
          "Jamais. Chaque calcul de redimensionnement, chaque étape de dessin Canvas et chaque paquet ZIP s'exécutent localement sur votre appareil, ce qui garde la photographie privée et les marchandises inédites à 100 % sur l'appareil.",
      },
      {
        question: "Le redimensionneur d'images en lot supprime-t-il les détails EXIF de l'appareil photo et les coordonnées GPS ?",
        answer:
          "Oui. Comme HTML5 Canvas redessine les données de pixels aux dimensions cibles sans copier les en-têtes EXIF d'origine, les étiquettes de localisation et les numéros de série de l'appareil photo sont supprimés automatiquement.",
      },
      {
        question: "Quel nom reçoit l'archive ZIP téléchargée du redimensionneur en lot ?",
        answer:
          "En cliquant sur Télécharger tout (ZIP), bulk_resized_compressmypic.zip est généré localement dans votre navigateur. Il regroupe proprement chaque fichier redimensionné avec succès de votre file d'attente dans une seule archive.",
      },
      {
        question: "Puis-je supprimer un fichier accidentel d'un lot de 20 images avant d'exporter le ZIP ?",
        answer:
          "Oui. Cliquez sur l'icône de corbeille de n'importe quelle carte individuelle pour supprimer seulement cette image sans interrompre les 19 autres résultats redimensionnés.",
      },
      {
        question: "En quoi le redimensionneur en lot diffère-t-il du compresseur d'images en lot ?",
        answer:
          "Le compresseur d'images en lot garde les largeurs et hauteurs d'origine en pixels intactes tout en réduisant la taille du fichier par compression avec perte. Ce redimensionneur en lot, lui, change activement les dimensions en pixels et les cadres englobants en lot, avec des réglages facultatifs de format et de qualité.",
      },
      {
        question: "Puis-je ajouter des photos supplémentaires à un lot de redimensionnement déjà terminé ?",
        answer:
          "Oui. Glissez des fichiers supplémentaires sur la zone de dépôt à tout moment : ils sont traités automatiquement avec votre stratégie active de redimensionnement et rejoignent le résumé final de Télécharger tout (ZIP).",
      },
    ],
    relatedSlugs: ["/image-resizer", "/bulk-image-compressor", "/bulk-image-converter", "/web-image-optimizer"],
  },
  {
    slug: "/bulk-image-converter",
    name: "Convertisseur d'images en lot",
    shortDescription: "Convertissez plusieurs fichiers JPG, PNG, HEIC, SVG et BMP à la fois, avec ZIP.",
    category: "convert",
    seoTitle: "Convertisseur d'images en lot gratuit – Changez de format",
    seoDescription:
      "Convertissez des dossiers mélangés en ligne avec le convertisseur en lot, dans votre navigateur. HEIC, PNG, SVG, AVIF et BMP en WebP, JPG ou PNG, avec ZIP.",
    h1: "Convertisseur d'images en lot gratuit",
    subtitle:
      "Unifiez en un seul passage des dossiers mélangés de photos HEIC d'Apple, de téléchargements AVIF, d'icônes SVG, de PNG transparents et de bitmaps BMP anciens avec notre convertisseur d'images en lot gratuit. Conçu pour les développeurs, les gestionnaires de contenu et les utilisateurs ordinaires qui standardisent des bibliothèques entières de ressources, il convertit des lots jusqu'à 25 Mo par fichier proprement en WebP, JPG ou PNG localement, avec des suffixes de nom facultatifs et un téléchargement en un seul ZIP.",
    howToSteps: [
      {
        title: "Déposez un lot d'images aux formats mélangés",
        description:
          "Téléversez n'importe quelle combinaison de fichiers JPG, PNG, WebP, HEIC, SVG, BMP, GIF ou AVIF jusqu'à 25 Mo chacun dans la zone de dépôt.",
      },
      {
        title: "Choisissez le format cible : WebP, JPG ou PNG",
        description:
          "Choisissez WebP (le plus léger pour le web) pour la vitesse du site, JPG (universel) pour un partage large, ou PNG (sans perte, avec transparence) pour des graphiques nets.",
      },
      {
        title: "Suffixe de nom facultatif et remplissage transparent",
        description:
          "Saisissez un suffixe de nom facultatif comme _web (ou laissez vide) et sélectionnez une couleur mate de remplissage transparent si vous convertissez des images avec alpha en JPG.",
      },
      {
        title: "Définissez le pourcentage de qualité de sortie",
        description:
          "Ajustez le curseur de qualité de 10 % à 100 % pour les exports WebP ou JPG (désactivé automatiquement quand le PNG sans perte est actif).",
      },
      {
        title: "Vérifiez les totaux du lot et les comparaisons visuelles",
        description:
          "Inspectez les changements d'octets par fichier et la bannière de résumé de conversion en lot, et ouvrez Comparer sur des éléments d'échantillon pour vérifier la netteté.",
      },
      {
        title: "Enregistrez des fichiers individuels ou Télécharger tout (ZIP)",
        description:
          "Cliquez sur Télécharger sur des cartes individuelles ou sur Télécharger tout (ZIP) pour exporter bulk_converted_webp.zip, bulk_converted_jpg.zip ou bulk_converted_png.zip.",
      },
    ],
    features: [
      {
        title: "Flux de lot avec entrées mélangées",
        description: "Déposez des HEIC, PNG, SVG et JPEG ensemble dans un lot et unifiez-les en un seul format.",
      },
      {
        title: "Options de remplissage transparent et de suffixe",
        description: "Personnalisez les arrière-plans mates blancs ou colorés pour le JPG et ajoutez proprement des suffixes de nom facultatifs.",
      },
      {
        title: "Résumé de taille du lot",
        description: "Voyez la taille d'origine totale par rapport à la taille convertie totale de tout le lot.",
      },
      {
        title: "WebAssembly et Canvas 100 % locaux",
        description: "Aucun fichier n'est jamais téléversé : même la conversion HEIC d'iPhone fonctionne sur votre appareil.",
      },
    ],
    faqs: [
      {
        question: "Puis-je mélanger différents types de fichiers dans la même file d'attente du convertisseur d'images en lot ?",
        answer:
          "Oui. Vous pouvez déposer des photos HEIC d'Apple, des AVIF modernes, des PNG transparents, des SVG vectoriels, des BMP anciens, des GIF, des WebP et des JPG dans le même passage de téléversement et exporter toute la collection dans un format uniforme.",
      },
      {
        question: "Pourquoi le suffixe de nom de fichier facultatif aide-t-il lors de la conversion de lots ?",
        answer:
          "Saisir une étiquette comme _web ou _v2 ajoute ce suffixe juste avant la nouvelle extension, ce qui produit des noms propres comme hero_web.webp. Cela évite que les ressources nouvellement converties entrent en conflit avec des fichiers sources de nom similaire dans des dossiers de projet partagés.",
      },
      {
        question: "Comment le résumé de conversion en lot calcule-t-il l'impact total du lot ?",
        answer:
          "Une fois les fichiers traités, la bannière sombre de résumé additionne les octets d'origine de chaque fichier converti et affiche à côté le total d'octets convertis. Vous pouvez ainsi vérifier immédiatement les changements de stockage ou de bande passante sur un dossier entier.",
      },
      {
        question: "Que se passe-t-il si j'unifie des PNG et des SVG transparents au format JPG ?",
        answer:
          "En sélectionnant JPG (universel), le sélecteur de couleur de remplissage transparent apparaît (#ffffff blanc par défaut). Toute zone transparente avec alpha dans vos PNG ou SVG se fond doucement sur la teinte d'arrière-plan choisie au lieu de devenir noire pleine.",
      },
      {
        question: "Pourquoi le curseur de qualité est-il désactivé quand le PNG (sans perte, avec transparence) est sélectionné ?",
        answer:
          "Le PNG utilise un encodage DEFLATE sans perte qui préserve chaque pixel décodé à l'identique, sans niveaux de qualité avec perte. Dès que vous choisissez WebP ou JPG, le curseur de qualité de 10 % à 100 % se débloque immédiatement.",
      },
      {
        question: "Puis-je convertir un dossier de photos mélangées deux fois — une fois en WebP et une fois en JPG — sans les retéléverser ?",
        answer:
          "Oui. Basculez Convertir le lot au format de WebP à JPG à tout moment, mettez éventuellement à jour votre suffixe de nom de fichier, puis cliquez sur Tout convertir (N) pour retraiter les fichiers mis en cache en mémoire et obtenir un deuxième ZIP.",
      },
      {
        question: "Comment le nom du ZIP identifie-t-il le format cible que j'ai exporté ?",
        answer:
          "En cliquant sur Télécharger tout (ZIP), bulk_converted_webp.zip, bulk_converted_jpg.zip ou bulk_converted_png.zip est créé directement dans votre navigateur. Avoir le format dans le nom du fichier facilite la distinction entre plusieurs exports de format dans votre dossier Téléchargements.",
      },
      {
        question: "Unifier tout en WebP conserve-t-il la transparence alpha sur les logos PNG et les icônes SVG ?",
        answer:
          "Oui. WebP (le plus léger pour le web) comme PNG (sans perte, avec transparence) conservent la transparence complète de 8 bits des PNG transparents, des WebP et des fichiers SVG autonomes, proprement.",
      },
      {
        question: "Que se passe-t-il si un ancien navigateur ne peut pas décoder un fichier AVIF mélangé dans mon lot ?",
        answer:
          "Si un fichier utilise un codec que votre navigateur ne prend pas en charge, comme AVIF sur un navigateur obsolète, seule cette carte précise affiche un avis d'erreur explicite. Tous les autres éléments JPG, PNG ou HEIC du même lot se terminent normalement.",
      },
      {
        question: "Les lots HEIC d'iPhone sont-ils convertis sur un serveur cloud distant ?",
        answer:
          "Non. Même le décodage HEIC et HEIF d'Apple s'exécute localement dans l'onglet de votre navigateur via WebAssembly côté client, avant que HTML5 Canvas n'encode le format de sortie choisi.",
      },
      {
        question: "Quelle taille peuvent avoir les fichiers individuels dans le convertisseur d'images en lot ?",
        answer:
          "Chaque image individuelle de votre file d'attente peut peser jusqu'à 25 Mo. Cette marge couvre facilement les photos d'appareil photo de plusieurs mégapixels, les exports PNG en couches et les archives BMP non compressées.",
      },
      {
        question: "Que se passe-t-il quand des GIF animés sont inclus dans un dossier de conversion en lot ?",
        answer:
          "HTML5 Canvas rastérise l'image d'ouverture de n'importe quel .gif téléversé en un fichier WebP, JPG ou PNG statique et net, en conservant la largeur et la hauteur complètes. Utilisez notre compresseur de GIF si vous voulez garder l'animation en boucle intacte.",
      },
      {
        question: "La conversion de format en lot change-t-elle la largeur et la hauteur d'origine de l'image ?",
        answer:
          "Non, chaque sortie conserve 100 % de sa largeur et de sa hauteur d'origine en pixels, sans les toucher. Utilisez le redimensionneur d'images en lot quand vous devez aussi redimensionner ou limiter les dimensions de l'image.",
      },
      {
        question: "Pourquoi convertir des JPEG compressés en PNG peut-il faire paraître le total du résumé du lot plus grand ?",
        answer:
          "Le PNG sans perte stocke beaucoup plus de données par pixel photographique que le JPEG avec perte. À moins qu'un flux de travail n'exige strictement le .png, convertir des lots web mélangés en WebP à 85 % économise généralement beaucoup d'espace tout en gardant une qualité nette.",
      },
      {
        question: "Les étiquettes EXIF de l'appareil photo sont-elles conservées après la conversion d'un dossier mélangé ?",
        answer:
          "Non. En dessinant les images sur HTML5 Canvas, les blocs de métadonnées EXIF, les numéros de série de l'appareil photo et les étiquettes GPS sont supprimés sur chaque fichier converti, proprement.",
      },
      {
        question: "Puis-je comparer les pixels d'origine et convertis sur des cartes individuelles avant d'exporter le ZIP ?",
        answer:
          "Oui. Cliquez sur Comparer sur n'importe quelle carte de fichier terminée pour inspecter les bords fins et les couleurs côte à côte dans le visualiseur de comparaison divisée.",
      },
      {
        question: "Que se passe-t-il si j'ajoute d'autres fichiers après avoir converti mon premier lot ?",
        answer:
          "Les fichiers nouvellement déposés sont convertis automatiquement avec le format cible, la qualité, le suffixe et le remplissage mate actuellement sélectionnés. Ils fusionnent ensuite proprement dans votre file d'attente active et dans le résumé ZIP partagé.",
      },
      {
        question: "Les polices web externes ou les images distantes liées dans les fichiers SVG sont-elles incluses pendant la conversion en lot ?",
        answer:
          "Pour la sécurité du navigateur, HTML5 Canvas isole les SVG autonomes et bloque la récupération d'URL distantes ou de polices web externes. Les SVG autonomes avec chemins, dégradés et CSS intégré sont convertis proprement.",
      },
      {
        question: "Puis-je supprimer une seule image en échec ou indésirable de la liste convertie en lot ?",
        answer:
          "Oui. Cliquez sur le bouton de corbeille de n'importe quelle carte pour l'exclure de la liste et reconstruire le résumé et le téléchargement ZIP avec les fichiers restants.",
      },
      {
        question: "Quand devrais-je choisir ce convertisseur en lot plutôt que des convertisseurs à paire unique comme HEIC vers JPG ?",
        answer:
          "Les outils à paire unique préconfigurent des filtres de fichiers stricts et des valeurs par défaut pour un seul chemin de migration précis. Ouvrez ce convertisseur d'images en lot quand un dossier contient plusieurs extensions différentes qui doivent toutes devenir WebP, JPG ou PNG à la fois.",
      },
    ],
    relatedSlugs: ["/image-converter", "/bulk-image-compressor", "/bulk-image-resizer", "/web-image-optimizer"],
  },
  {
    slug: "/web-image-optimizer",
    name: "Optimiseur d'images pour le web",
    shortDescription: "Optimisez les images de bannière, de produit et de carte pour la vitesse des Core Web Vitals.",
    category: "compress",
    seoTitle: "Optimiseur d'images web gratuit – Accélérez Core Web Vitals",
    seoDescription:
      "Allégez les ressources lourdes en ligne avec l'optimiseur web, dans votre navigateur. Préréglages WebP, suppression des EXIF et balises HTML img prêtes.",
    h1: "Optimiseur d'images pour le web (prêt pour les Core Web Vitals)",
    subtitle:
      "Préparez des graphiques web à chargement rapide conçus pour les Core Web Vitals (LCP et CLS) avec notre optimiseur d'images pour le web gratuit, directement dans votre navigateur. Conçu pour les développeurs front-end, les marchands Shopify et les SEO techniques, il associe des préréglages éprouvés WebP et JPG pour les emplacements web, jusqu'à 25 Mo par fichier, avec suppression automatique des EXIF, balises HTML <img> copiables et téléchargements en un seul ZIP.",
    howToSteps: [
      {
        title: "Sélectionnez l'un des 5 préréglages de performance web",
        description:
          "Choisissez Hero / Bannière (1 600 px WebP 80 %), Produit e-commerce (1 200 px WebP 82 %), Carte / Miniature (640 px WebP 75 %), OG social / E-mail (1 200 px JPG 82 %) ou Graphique Retina 2× (1 920 px WebP 88 %).",
      },
      {
        title: "Personnalisez le format web, la dimension maximale ou la qualité",
        description:
          "Basculez entre WebP, JPG ou PNG, ajustez la dimension maximale (bord long) de 640 px à 1 920 px (ou Conserver les dimensions d'origine) et affinez la qualité de 20 % à 95 %.",
      },
      {
        title: "Déposez les ressources web brutes dans la zone de dépôt",
        description:
          "Téléversez des images JPG, PNG, WebP, HEIC, SVG, BMP, GIF ou AVIF jusqu'à 25 Mo chacune, avec l'option Réduire uniquement les images plus grandes cochée pour éviter de gonfler les petites icônes.",
      },
      {
        title: "Vérifiez le gain de poids de page et comparez la qualité",
        description:
          "Consultez le résumé des performances web pour voir le poids total de page économisé, vérifiez les badges Prêt pour le web par carte et inspectez les bords côte à côte via Comparer.",
      },
      {
        title: "Copiez des extraits HTML <img> responsifs",
        description:
          "Cliquez sur Copier <img> sur n'importe quelle carte terminée pour obtenir le balisage prêt à coller, avec largeur, hauteur, loading=\"lazy\" et decoding=\"async\".",
      },
      {
        title: "Téléchargez des ressources -web individuelles ou le paquet ZIP",
        description:
          "Enregistrez des fichiers individuels <nom>-web ou cliquez sur Télécharger tout (ZIP) pour télécharger web_optimized_compressmypic.zip proprement.",
      },
    ],
    features: [
      {
        title: "Préréglages prêts pour le web",
        description: "Limites de dimension préconfigurées et points idéaux de qualité WebP/JPG pensés pour le LCP et PageSpeed Insights.",
      },
      {
        title: "Extrait HTML <img> copiable",
        description: "Génère des attributs responsifs de largeur, hauteur, loading=\"lazy\" et decoding=\"async\" pour éviter le décalage de mise en page (CLS).",
      },
      {
        title: "Suppression automatique des EXIF et protection contre l'agrandissement",
        description: "Supprime les métadonnées gonflées de l'appareil photo et évite d'agrandir inutilement les icônes plus petites.",
      },
      {
        title: "Inspecteur interactif avant/après",
        description: "Vérifiez la clarté visuelle côte à côte avant de déployer les ressources en production.",
      },
    ],
    faqs: [
      {
        question: "Comment les cinq préréglages de performance web correspondent-ils aux emplacements réels du site ?",
        answer:
          "Hero / Bannière limite à 1 600 px WebP (80 %), Produit e-commerce limite à 1 200 px WebP (82 %), Carte / Miniature limite à 640 px WebP (75 %), OG social / E-mail génère du JPG de 1 200 px (82 %) pour la compatibilité avec les robots, et Graphique Retina 2× conserve jusqu'à 1 920 px WebP (88 %). Cliquer sur n'importe quel préréglage réoptimise aussi automatiquement les fichiers chargés.",
      },
      {
        question: "Comment le bouton Copier <img> aide-t-il à améliorer les scores des Core Web Vitals ?",
        answer:
          "Cliquer sur Copier <img> copie une balise HTML sémantique contenant les attributs exacts de largeur et de hauteur de sortie, plus loading=\"lazy\" et decoding=\"async\". Les dimensions explicites permettent aux navigateurs de réserver l'espace exact pendant la mise en page pour éliminer le décalage cumulatif de mise en page (CLS).",
      },
      {
        question: "Dois-je garder loading=\"lazy\" sur mon image principale Hero après avoir copié la balise HTML ?",
        answer:
          "Pour les cartes et les images sous la ligne de flottaison, loading=\"lazy\" est idéal. Pour votre unique image principale Hero / Bannière LCP visible immédiatement au chargement, retirez loading=\"lazy\" (ou mettez fetchpriority=\"high\") dans votre code pour que le navigateur la télécharge immédiatement.",
      },
      {
        question: "Pourquoi OG social / E-mail change-t-il le format web de WebP à JPG ?",
        answer:
          "Certains robots de liens sociaux, d'anciennes versions de Slack/Outlook et des plateformes de newsletters rejettent encore les aperçus OpenGraph en WebP ou ne les affichent pas de façon fiable. Choisir du JPG de 1 200 px à 82 % offre un chargement rapide avec des cartes d'aperçu solides partout.",
      },
      {
        question: "Pourquoi l'option Réduire uniquement les images plus grandes protège-t-elle les icônes d'interface et les petites miniatures ?",
        answer:
          "Avec cette case activée, téléverser un avatar d'auteur de 400×400 px alors que Produit e-commerce (max 1 200 px) est sélectionné laisse l'avatar à 400×400 px au lieu de le flouter vers 1 200 px. En la décochant, les ressources plus petites sont agrandies jusqu'au bord long choisi si c'est strictement nécessaire.",
      },
      {
        question: "Comment la suppression des métadonnées EXIF et GPS réduit-elle le poids supplémentaire de la page web ?",
        answer:
          "Les exports d'appareil photo intègrent souvent de 30 Ko à 150 Ko d'aperçus miniatures, d'historiques d'édition Lightroom et de coordonnées GPS dans les blocs EXIF. Le réencodage sur HTML5 Canvas supprime tout ce surplus non pixel proprement avant le déploiement.",
      },
      {
        question: "Pourquoi les fichiers téléchargés se terminent-ils automatiquement par -web dans leur nom ?",
        answer:
          "Chaque sortie ajoute -web avant son extension, ce qui produit des noms propres comme sneaker-web.webp. Cela permet aux développeurs de déposer des ressources de production dans des dossiers publics sans écraser les originaux maîtres haute résolution.",
      },
      {
        question: "Comment l'attribut alt est-il généré dans Copier <img> ?",
        answer:
          "L'extrait supprime automatiquement l'extension du nom de fichier et convertit les tirets et les traits de soulignement de votre nom d'origine en espaces lisibles dans alt=\"...\". Pensez à le peaufiner en une phrase humaine descriptive quand vous le collez dans le HTML de production.",
      },
      {
        question: "Pourquoi l'optimiseur d'images pour le web utilise-t-il par défaut Produit e-commerce (max 1 200 px · WebP 82 %) ?",
        answer:
          "1 200 px de large en WebP à 82 % offre une qualité de zoom produit nette aussi bien sur les téléphones Retina que sur les ordinateurs portables standard, tout en réduisant les fichiers reflex de plusieurs mégaoctets de 80 % à 95 %. Il évite à la fois les recadrages trop doux de 640 px et les originaux gonflés de 4 000 px.",
      },
      {
        question: "Pourquoi un petit PNG déjà compressé peut-il devenir rouge avec un avertissement de croissance quand le format web est PNG ?",
        answer:
          "Réencoder un minuscule PNG à palette indexée via HTML5 Canvas en pleine couleur, sans changer les dimensions, peut produire un PNG sans perte un peu plus lourd. Basculez le format web sur WebP pour conserver la transparence à une fraction du poids en octets.",
      },
      {
        question: "Puis-je optimiser en lot 30 images brutes d'un blog pour la vitesse Lighthouse en un clic ?",
        answer:
          "Oui. Déposez jusqu'à 25 Mo par fichier sur tout votre ensemble de médias du blog, consultez le résumé des performances web qui montre le poids total de page économisé, et prenez web_optimized_compressmypic.zip quand 2 fichiers ou plus sont terminés.",
      },
      {
        question: "Pourquoi la qualité de l'optimiseur web est-elle limitée à une plage de 20 % à 95 % ?",
        answer:
          "Enregistrer du WebP ou du JPG à 100 % de qualité fait exploser le poids en octets de façon exponentielle, avec une différence visible pratiquement nulle sur les écrans web, ce qui nuit au Largest Contentful Paint (LCP). La limiter à 95 % garde les graphiques Retina 2× très nets sans chargements accidentels de 10 Mo.",
      },
      {
        question: "La sortie WebP conserve-t-elle les arrière-plans transparents des PNG et SVG téléversés ?",
        answer:
          "Oui. Quand le format web est sur WEBP ou PNG, la transparence alpha complète reste parfaitement intacte, tandis qu'en sélectionnant JPG, les zones transparentes sont composées sur du blanc propre (#ffffff).",
      },
      {
        question: "Les captures du site en test ou les lancements de produit inédits sont-ils téléversés vers des serveurs externes ?",
        answer:
          "Non. Le redimensionnement par préréglage, l'encodage WebP, la suppression des EXIF et la génération de balises HTML s'exécutent strictement dans l'onglet de votre navigateur, ce qui garde privés les graphiques marketing sous embargo.",
      },
      {
        question: "Puis-je personnaliser un mélange de réglages après avoir cliqué sur un préréglage de performance web ?",
        answer:
          "Oui. En changeant manuellement le format web, la dimension maximale ou la qualité, l'indicateur de préréglage actif passe proprement à personnalisé, pour que vous puissiez cliquer sur Optimiser pour le web (N) avec votre recette exacte sur mesure.",
      },
      {
        question: "Que se passe-t-il si je téléverse une photo HEIC d'iPhone directement pour mon blog ?",
        answer:
          "WebAssembly côté client décode les photos HEIC et HEIF jusqu'à 25 Mo nativement dans l'onglet de votre navigateur. Votre navigateur les redimensionne ensuite à la dimension maximale choisie et encode des ressources WebP ou JPG légères prêtes à publier.",
      },
      {
        question: "Comment le préréglage Carte / Miniature se compare-t-il à Graphique Retina 2× ?",
        answer:
          "Carte / Miniature limite les bords longs à 640 px avec du WebP à 75 % pour garder ultra légères les grilles d'archives à plusieurs cartes. Graphique Retina 2×, lui, permet jusqu'à 1 920 px avec du WebP à 88 %, pour que les captures d'exposition haute densité de pixels restent très nettes.",
      },
      {
        question: "Conserver les dimensions d'origine compresse-t-il toujours et supprime-t-il les métadonnées EXIF ?",
        answer:
          "Oui. En sélectionnant Conserver les dimensions d'origine, la largeur et la hauteur en pixels restent intactes, tandis que la conversion vers le format web choisi s'applique, le curseur de qualité est appliqué et les étiquettes EXIF cachées sont supprimées.",
      },
      {
        question: "Puis-je vérifier visuellement le texte net de l'interface dans les captures avant de les publier dans ma documentation ?",
        answer:
          "Oui. En cliquant sur Comparer sur n'importe quelle carte, le visualiseur de comparaison côte à côte s'ouvre, pour que vous puissiez vérifier la clarté du texte avant le déploiement.",
      },
      {
        question: "Quand devrais-je utiliser cet optimiseur d'images pour le web plutôt que le compresseur d'images en lot ?",
        answer:
          "Utilisez le compresseur d'images en lot quand vous voulez conserver les dimensions d'origine sur des archives mélangées. Choisissez cet optimiseur d'images pour le web quand vous construisez des pages web de production qui bénéficient de limites de dimension responsives, de préréglages WebP, de la suppression des EXIF et de balises HTML <img> copiables.",
      },
    ],
    relatedSlugs: ["/bulk-image-compressor", "/compress-image-to-100kb", "/image-resizer", "/image-converter"],
  },
  {
    slug: "/gif-compressor",
    name: "Compresseur de GIF",
    shortDescription: "Compressez les GIF animés en réduisant les couleurs de la palette, l'échelle et les images.",
    category: "compress",
    seoTitle: "Compresseur de GIF gratuit en ligne – Réduisez vos GIF",
    seoDescription:
      "Réduisez les animations en boucle en ligne avec le compresseur de GIF, dans votre navigateur. Baissez la palette, réduisez l'échelle ou la fréquence d'images.",
    h1: "Compresseur de GIF animés gratuit en ligne",
    subtitle:
      "Réduisez proprement les lourdes animations GIF87a et GIF89a en boucle directement dans votre navigateur avec notre compresseur de GIF animés gratuit, sans les transformer en images fixes. Conçu pour Slack, Discord, les spécialistes de l'e-mail et les auteurs de documentation qui gèrent des fichiers jusqu'à 30 Mo, il associe trois vrais leviers de compression — limite de couleurs de la palette, échelle de sortie et optimisation de la fréquence d'images — à une lecture animée en direct côte à côte.",
    howToSteps: [
      {
        title: "Déposez un GIF animé ou statique jusqu'à 30 Mo",
        description:
          "Téléversez n'importe quel fichier .gif (jusqu'à 30 Mo) dans la zone de dépôt pour décoder ses images, ses dimensions, ses méthodes d'élimination et ses délais localement.",
      },
      {
        title: "Choisissez un préréglage rapide ou réglez les valeurs manuellement",
        description:
          "Cliquez sur Léger (192 couleurs, 100 %), Équilibré (96 couleurs, 85 %) ou Réduction maximale (64 couleurs, 75 %, supprimer une image sur deux), ou ajustez chaque levier manuellement.",
      },
      {
        title: "Baissez la limite de couleurs de la palette (16–256 couleurs)",
        description:
          "Glissez le curseur de limite de couleurs de la palette de 256 vers 32 ou 16 couleurs (ou cliquez sur les boutons rapides 256, 128, 64, 32) pour réduire les tables de couleurs LZW.",
      },
      {
        title: "Ajustez l'échelle de sortie et l'optimisation de la fréquence d'images",
        description:
          "Choisissez un préréglage d'échelle de sortie (100 %, 85 %, 75 %, 50 % ou 25 %) et supprimez éventuellement une image sur deux ou 2 images sur 3, en conservant automatiquement la vitesse réelle de lecture.",
      },
      {
        title: "Lancez Compresser le GIF et comparez les animations en direct",
        description:
          "Regardez les aperçus animés en direct Original et Compressé côte à côte et vérifiez les octets exacts, le nombre d'images et le pourcentage d'économie.",
      },
      {
        title: "Téléchargez le GIF compressé",
        description:
          "Cliquez sur Télécharger le GIF compressé pour enregistrer <nom>_compressed.gif localement, sans aller-retour serveur ni filigrane.",
      },
    ],
    features: [
      {
        title: "Vrai réencodage GIF côté client",
        description: "Décode les images, les méthodes d'élimination et les nombres de boucles localement, puis réencode avec une quantification de couleur chargée à la demande, sans téléversement serveur.",
      },
      {
        title: "Trois leviers de compression",
        description: "Réduisez la taille par la réduction des couleurs de la palette (256 → 32 couleurs), la mise à l'échelle des dimensions (100 % → 25 %) et le saut intelligent d'images.",
      },
      {
        title: "Saut d'images qui préserve le minutage",
        description: "En supprimant une image sur deux ou sur trois, les délais des images conservées se combinent automatiquement pour que la vitesse de lecture reste naturelle.",
      },
      {
        title: "Comparaison honnête des octets",
        description: "Affiche la taille exacte de fichier avant et après et le nombre d'images, et vous dit clairement quand une réduction plus forte de palette ou d'échelle est nécessaire.",
      },
    ],
    faqs: [
      {
        question: "Le compresseur de GIF conserve-t-il le minutage complet de l'animation, les nombres de boucles et le mouvement ?",
        answer:
          "Oui. Il décode chaque image individuelle du GIF, son délai en millisecondes par image, sa méthode d'élimination et ses métadonnées de boucle localement, puis réencode un vrai fichier GIF89a animé, au lieu de l'aplatir en une image fixe.",
      },
      {
        question: "Comment la suppression d'images garde-t-elle la vitesse d'animation naturelle au lieu de la faire jouer en accéléré ?",
        answer:
          "Quand vous choisissez Supprimer une image sur deux ou Conserver 1 image sur 3, le compresseur additionne les durées en millisecondes des images supprimées aux images conservées restantes. La durée totale de la boucle reste précise tandis que les données totales d'images se réduisent de moitié ou des deux tiers.",
      },
      {
        question: "Quels réglages exacts appliquent Léger, Équilibré et Réduction maximale ?",
        answer:
          "Léger fixe 192 couleurs de palette à 100 % d'échelle en conservant toutes les images, tandis qu'Équilibré descend à 96 couleurs et 85 % d'échelle en conservant toutes les images. Réduction maximale combine 64 couleurs, 75 % d'échelle et Supprimer une image sur deux pour les limites agressives de fichiers Discord ou Slack.",
      },
      {
        question: "Pourquoi ma première compression Équilibré ou à 128 couleurs est-elle sortie un peu plus lourde qu'un petit GIF existant ?",
        answer:
          "Les GIF bien optimisés créés par des outils de bureau reposent souvent sur de petits correctifs de rectangle sale entre les images, tandis que le réencodage Canvas construit des images complètes quantifiées et propres. Si l'avis ambre apparaît, baissez la limite de couleurs de la palette à 64 ou 32 couleurs, réduisez l'échelle de sortie à 75 % ou 50 %, ou supprimez une image sur deux.",
      },
      {
        question: "Quel levier réduit le plus vite la taille d'un GIF animé sans ruiner les enregistrements d'écran ?",
        answer:
          "Baisser l'échelle de sortie de 100 % à 75 % ou 50 % réduit la surface de pixels de 44 % à 75 % immédiatement, tout en gardant le texte de l'interface lisible. Combiner l'échelle de 75 % avec 64–96 couleurs de palette fonctionne particulièrement bien pour les screencasts de documentation.",
      },
      {
        question: "Pourquoi les boutons d'optimisation de la fréquence d'images sont-ils désactivés sur un GIF de 1 ou 2 images ?",
        answer:
          "Supprimer une image sur deux ou sur trois sur un fichier de 1 ou 2 images ne laisserait plus aucun mouvement. Ces boutons de saut d'images se verrouillent automatiquement quand un GIF décodé a 2 images ou moins.",
      },
      {
        question: "Quelle est la taille maximale de fichier GIF animé prise en charge par le compresseur de GIF ?",
        answer:
          "Vous pouvez téléverser des animations GIF87a ou GIF89a jusqu'à 30 Mo par fichier. La progression s'affiche proprement comme Compression du GIF (X %)… pendant que votre navigateur quantifie et réencode chaque image conservée.",
      },
      {
        question: "Réduire la limite de couleurs de la palette sous 64 couleurs affecte-t-elle différemment les GIF photographiques et les screencasts d'interface ?",
        answer:
          "Oui. Les animations plates d'interface logicielle avec peu de couleurs de marque restent nettes à 32 ou 64 couleurs, tandis que les clips vidéo d'action réelle avec des dégradés de peau montrent de la postérisation avec des palettes très basses ; baisser un peu l'échelle ou la fréquence d'images est donc souvent plus propre pour les clips de film.",
      },
      {
        question: "Puis-je prévisualiser les animations d'origine et compressée côte à côte avant de télécharger ?",
        answer:
          "Oui. Juste sous la barre sombre de résumé des octets, deux lecteurs animés en direct affichent les GIF Original et Compressé en même temps, avec les dimensions exactes en pixels et les tailles de fichier, pour que vous puissiez repérer immédiatement toute saccade ou bande.",
      },
      {
        question: "Quelle est la résolution minimale de sortie quand je choisis 25 % d'échelle de sortie sur de petits GIF d'autocollants ?",
        answer:
          "Les dimensions de sortie sont limitées en sécurité à un minimum de 16×16 pixels par côté. Cela évite que les minuscules GIF de réaction s'effondrent en fichiers invalides de zéro pixel, même avec l'option d'échelle de 25 %.",
      },
      {
        question: "Puis-je lancer plusieurs tests de compression sur le même GIF téléversé sans actualiser la page ?",
        answer:
          "Oui. Le tampon d'images décodées reste mis en cache en mémoire, donc vous pouvez ajuster librement la limite de couleurs de la palette (16–256), l'échelle de sortie ou l'optimisation de la fréquence d'images et cliquer à nouveau sur Compresser le GIF en quelques secondes.",
      },
      {
        question: "Comment le compresseur de GIF fonctionne-t-il dans mon navigateur sans téléverser de grosses animations vers un serveur ?",
        answer:
          "Il décode les images directement depuis l'ArrayBuffer téléversé en JavaScript et charge à la demande un encodeur GIF LZW léger et un quantificateur de couleur. Les screencasts privés de Slack, les rapports de bogues et les démonstrations de produit ne quittent jamais votre appareil.",
      },
      {
        question: "Pourquoi les GIF se compressent-ils moins que les vidéos MP4 du même clip ?",
        answer:
          "Le GIF est un format d'images à 256 couleurs avec compression LZW sans perte de 1989, sans la compensation moderne de mouvement temporel entre les images. Combiner une réduction modérée (75 %–50 %), des palettes plus basses (64–96 couleurs) et le saut d'images 2× offre la meilleure économie d'octets possible dans la spécification standard .gif.",
      },
      {
        question: "Compresser un GIF animé avec des pixels transparents conserve-t-il la transparence de l'arrière-plan ?",
        answer:
          "Oui. Les indices de transparence et les méthodes d'élimination d'images décodés de votre GIF source sont suivis entre les images pendant le réencodage dans le navigateur.",
      },
      {
        question: "Quel nom de fichier est utilisé pour enregistrer l'animation optimisée du compresseur de GIF ?",
        answer:
          "En cliquant sur Télécharger le GIF compressé, un nom assaini se terminant par _compressed.gif est exporté, comme demo_walkthrough_compressed.gif. Votre animation maîtresse d'origine reste complètement intacte sur le disque.",
      },
      {
        question: "Puis-je réduire un GIF pour respecter les limites de téléversement de Discord de 8 Mo/10 Mo ou de Slack ?",
        answer:
          "Oui. Déposez n'importe quelle animation jusqu'à 30 Mo, essayez Équilibré ou Réduction maximale, vérifiez la lecture en direct de la taille Compressé juste en haut de la carte de résumé, et ajustez l'échelle de sortie à 50 % si vous avez besoin d'une réduction de poids supplémentaire.",
      },
      {
        question: "Réinitialiser efface-t-il complètement la mémoire d'images mise en cache du compresseur de GIF ?",
        answer:
          "Oui. En cliquant sur Réinitialiser, les URL de blob actives sont révoquées et les tampons d'images décodées sont effacés de la mémoire du navigateur, pour que vous puissiez charger un autre GIF lourd sans problème.",
      },
      {
        question: "En quoi le compresseur de GIF diffère-t-il du créateur de GIF ?",
        answer:
          "Le créateur de GIF construit de nouvelles animations à partir d'images fixes séparées en JPG, PNG ou WebP. Ce compresseur de GIF, lui, prend une animation .gif lourde existante et réduit sa taille de fichier par la réduction de palette, d'échelle et d'images.",
      },
      {
        question: "Puis-je aussi téléverser des fichiers .gif statiques à une seule image dans le compresseur de GIF ?",
        answer:
          "Oui. Les GIF statiques à une seule image se chargent comme des fichiers à 1 image, où vous pouvez réduire les dimensions avec l'échelle de sortie et baisser la limite de couleurs de la palette jusqu'à 16 couleurs, proprement.",
      },
      {
        question: "Des filigranes, des limites d'images ou des files d'attente de serveur s'appliquent-ils aux GIF compressés ?",
        answer:
          "Non. La compression s'exécute localement à pleine vitesse du navigateur, sans filigrane, sans inscription et avec des répétitions illimitées.",
      },
    ],
    relatedSlugs: ["/gif-maker", "/bulk-image-compressor", "/image-resizer", "/"],
  },
  {
    slug: "/heic-to-jpg",
    name: "HEIC vers JPG",
    shortDescription: "Convertissez les photos HEIC/HEIF d'iPhone d'Apple en JPG universel dans le navigateur.",
    category: "convert",
    seoTitle: "Convertisseur HEIC vers JPG gratuit – Photos iPhone",
    seoDescription:
      "Convertissez les photos Apple en fichiers universels en ligne avec le convertisseur HEIC vers JPG. Décodage local en WebAssembly, en privé, avec export ZIP.",
    h1: "Convertisseur HEIC vers JPG gratuit en ligne",
    subtitle:
      "Transformez les photos HEIC ou HEIF de l'appareil photo de votre iPhone ou iPad d'Apple en fichiers .jpg lisibles partout avec notre convertisseur HEIC vers JPG gratuit, qui fonctionne localement dans votre navigateur. Idéal pour les utilisateurs Windows, les candidats et les laboratoires photo qui rejettent le format haute efficacité d'Apple, il décode jusqu'à 25 Mo par fichier avec WebAssembly côté client, avec une qualité réglable et des téléchargements en lot dans un seul ZIP. Note honnête : le JPG obtenu peut être aussi lourd, voire plus lourd, que le HEIC d'origine — le gain est la compatibilité, pas un fichier plus petit.",
    howToSteps: [
      {
        title: "Déposez des photos HEIC ou HEIF d'Apple",
        description:
          "Sélectionnez ou glissez une ou plusieurs images .heic ou .heif (jusqu'à 25 Mo chacune) directement depuis votre iPhone, votre Mac, votre sauvegarde cloud ou votre dossier Windows.",
      },
      {
        title: "Attendez brièvement le décodage local en WebAssembly",
        description:
          "La page charge WebAssembly côté client (heic2any) directement dans l'onglet de votre navigateur pour décoder en privé le conteneur d'images HEVC d'Apple.",
      },
      {
        title: "Ajustez la qualité de sortie JPG (20 %–100 %)",
        description:
          "Gardez les 90 % par défaut, presque sans perte, pour les portraits de famille et les impressions, ou glissez vers 75 %–85 % pour des pièces jointes plus légères, puis cliquez sur Tout reconvertir.",
      },
      {
        title: "Vérifiez les dimensions en pixels et la comparaison de taille",
        description:
          "Vérifiez les nombres d'octets du HEIC d'origine par rapport au JPG de sortie sur chaque carte et ouvrez le curseur Comparer pour vérifier le détail net.",
      },
      {
        title: "Téléchargez des fichiers JPG ou Télécharger tout (ZIP)",
        description:
          "Enregistrez des photos .jpg individuelles directement ou cliquez sur Télécharger tout (ZIP) pour télécharger compressmypic_heic_to_jpg.zip en un clic.",
      },
    ],
    features: [
      {
        title: "Décodage HEIC en WebAssembly côté client",
        description: "Utilise heic2any dans l'onglet de votre navigateur, pour que les photos privées de votre appareil photo ne soient jamais téléversées vers des serveurs externes.",
      },
      {
        title: "Conversion en lot et export ZIP",
        description: "Convertissez des dossiers entiers de photos HEIC d'iPhone en JPG dans une seule file d'attente et prenez tout dans un ZIP.",
      },
      {
        title: "Curseur de qualité JPG personnalisé",
        description: "Ajustez la compression de sortie de 20 % à 100 % selon que vous privilégiez le détail ou la taille minuscule du fichier.",
      },
      {
        title: "Confidentialité EXIF supprimée par Canvas",
        description: "Le réencodage Canvas supprime naturellement les coordonnées GPS cachées et les métadonnées de série de l'appareil photo.",
      },
    ],
    faqs: [
      {
        question: "Pourquoi les PC Windows, les logiciels anciens et les formulaires de téléversement rejettent-ils les photos .heic d'iPhone ?",
        answer:
          "Apple a adopté le conteneur HEIC (basé sur la compression vidéo HEVC) à partir d'iOS 11 pour économiser l'espace de stockage des iPhones et iPads. Comme beaucoup d'installations Windows, de portails gouvernementaux, de systèmes CMS et d'éditeurs de bureau n'ont pas de codecs HEVC sous licence, convertir HEIC en JPG standard fait que vos photos s'ouvrent partout instantanément.",
      },
      {
        question: "Comment ce convertisseur HEIC vers JPG décode-t-il les fichiers Apple dans un navigateur web standard ?",
        answer:
          "La plupart des navigateurs ne peuvent pas afficher nativement les pixels HEIC dans des balises d'image standard sur Windows ou Linux. Cet outil exécute le décodeur WebAssembly heic2any côté client directement dans votre propre onglet, pour que votre navigateur traduise les flux HEIC en pixels RVB proprement, sans serveurs distants dans le cloud.",
      },
      {
        question: "Les photos personnelles de l'appareil photo, les selfies d'identité ou les vacances en famille sont-elles téléversées quelque part pendant la conversion ?",
        answer:
          "Jamais. L'étape de décodage HEIC en WebAssembly comme l'étape d'encodage JPEG sur HTML5 Canvas ont lieu localement dans la mémoire de votre navigateur, donc les photos personnelles ne quittent jamais votre ordinateur ou votre téléphone.",
      },
      {
        question: "Quelle est la différence entre les fichiers .heic et .heif dans le convertisseur HEIC vers JPG ?",
        answer:
          "HEIF est la norme sous-jacente de fichiers d'images haute efficacité, tandis que HEIC est l'extension de nom de fichier d'Apple pour les conteneurs HEIF encodés en HEVC. Les deux extensions .heic et .heif (et leurs types MIME correspondants) sont acceptées et décodées sans problème en .jpg.",
      },
      {
        question: "Pourquoi le fichier JPG converti sort-il souvent plus lourd en mégaoctets que le HEIC d'origine ?",
        answer:
          "L'encodage HEVC d'Apple compresse les données d'image environ deux fois plus densément que le JPEG classique à qualité visuelle similaire. Développer un HEIC de 1,8 Mo en un JPG de haute qualité à 90 % produit généralement un fichier de 2,5 Mo à 3,5 Mo — et baisser la qualité de sortie JPG vers 80 % aide à réduire cette taille si nécessaire. Le gain de la conversion est la compatibilité universelle, pas un fichier plus petit.",
      },
      {
        question: "Pourquoi 90 % est-il la qualité de sortie JPG par défaut pour les photos d'iPhone ?",
        answer:
          "À 90 %, le JPEG standard conserve la texture fine de la peau, le détail des cheveux et le flou d'arrière-plan du mode portrait sans blocs de compression perceptibles. Vous pouvez glisser entre 20 % et 100 % et cliquer sur Tout reconvertir à tout moment.",
      },
      {
        question: "Convertir des Live Photos d'iPhone (.heic) conserve-t-il le mouvement vidéo ou exporte-t-il un JPG fixe ?",
        answer:
          "Quand vous téléversez le composant fixe .heic d'une Live Photo d'iPhone, le décodeur extrait cette image haute résolution et l'exporte comme une photographie .jpg universelle. Les pistes vidéo de mouvement dans les clips MOV associés ne sont pas incluses dans le JPEG statique.",
      },
      {
        question: "Puis-je déposer un album de vacances entier en HEIC et télécharger un seul ZIP ?",
        answer:
          "Oui. Sélectionnez des dizaines de fichiers .heic ou .heif (jusqu'à 25 Mo par fichier) en un seul passage, attendez pendant que votre navigateur décode chaque photo localement, puis cliquez sur Télécharger tout (ZIP) pour enregistrer compressmypic_heic_to_jpg.zip.",
      },
      {
        question: "Les coordonnées GPS d'iPhone et les étiquettes de localisation sont-elles conservées dans le JPG exporté ?",
        answer:
          "Non. L'encodage via HTML5 Canvas supprime automatiquement les emplacements GPS EXIF intégrés, les numéros de série de l'appareil photo et les horodatages, ce qui vous donne une confidentialité supplémentaire avant de publier les JPG convertis en ligne.",
      },
      {
        question: "Pourquoi décoder une photo d'iPhone de 12 ou 48 mégapixels peut-il prendre une ou deux secondes par fichier ?",
        answer:
          "La décompression HEVC en WebAssembly exige des calculs CPU plus lourds que le décodage JPEG standard, surtout sur les photos Pro d'iPhone de 24 MP ou 48 MP. En traitant les lots localement, la vitesse de conversion dépend sans problème du processeur de votre appareil, et non de la bande passante de téléversement.",
      },
      {
        question: "Qu'arrive-t-il à l'orientation verticale ou horizontale de l'appareil photo d'iPhone pendant la conversion HEIC vers JPG ?",
        answer:
          "Les navigateurs modernes lisent les drapeaux d'orientation intégrés quand ils décodent l'image sur Canvas. Cela garantit que les selfies verticaux et les photos de paysage sont exportés droits, sans rotation latérale.",
      },
      {
        question: "Pourquoi un fichier nommé image.heic a-t-il échoué avec un avis d'erreur HEIC non valide ?",
        answer:
          "Parfois, les applications de messagerie tierces enregistrent des conteneurs corrompus ou des fichiers mal étiquetés avec une extension .heic, ou dépassent la limite de 25 Mo. Essayer une copie d'origine exportée avec AirDrop, Photos iCloud ou Fichiers Apple résout les en-têtes d'enveloppe endommagés.",
      },
      {
        question: "Quelle est la taille maximale par photo HEIC ou HEIF acceptée par le convertisseur HEIC vers JPG ?",
        answer:
          "Des fichiers individuels jusqu'à 25 Mo sont pris en charge dans la file d'attente. Ce plafond couvre facilement les captures HEIC standard d'appareil photo d'iPhone de 12 MP, 24 MP et 48 MP.",
      },
      {
        question: "Puis-je comparer visuellement le JPG décodé avec l'aperçu HEIC d'origine avant d'enregistrer ?",
        answer:
          "Oui. Cliquez sur n'importe quelle miniature de résultat ou sur le bouton Comparer pour vérifier la netteté côte à côte dans la modale interactive de comparaison.",
      },
      {
        question: "Les couleurs à large gamme Display P3 d'iPhone seront-elles précises après la conversion en JPG ?",
        answer:
          "Pendant le rendu Canvas du navigateur, les couleurs à large gamme sont mappées proprement dans l'espace JPEG standard sRGB. Par conséquent, les couleurs s'affichent de façon cohérente sur les moniteurs Windows, les navigateurs web et les bornes d'impression photo, sans décalages délavés.",
      },
      {
        question: "Comment puis-je empêcher que mes futures photos d'iPhone soient enregistrées en HEIC plutôt qu'en JPG ?",
        answer:
          "Sur votre iPhone, vous pouvez ouvrir Réglages, aller dans Appareil photo, toucher Formats et choisir Le plus compatible pour les nouvelles photos. Cependant, garder Haute efficacité économise environ la moitié du stockage de votre téléphone, et vous pouvez convertir des lots spécifiques de HEIC en JPG à tout moment ici même.",
      },
      {
        question: "Est-ce que je perds de la résolution en pixels en convertissant un HEIC de 4032×3024 en JPG ?",
        answer:
          "Non. Les JPG de sortie conservent 100 % de la largeur et de la hauteur en pixels décodés, sans les toucher, à moins que vous ne choisissiez de les redimensionner séparément ensuite.",
      },
      {
        question: "Puis-je coller ou convertir des fichiers HEIC depuis des navigateurs Android, Chromebook, Linux ou Windows ?",
        answer:
          "Oui. Comme heic2any WebAssembly fonctionne dans Chrome, Firefox, Edge et Safari quel que soit le système d'exploitation, vous pouvez ouvrir et convertir des pièces jointes .heic d'iPhone proprement, même sur des machines Linux ou Windows, sans installer d'extensions.",
      },
      {
        question: "Que dois-je faire si je dois réduire le JPG nouvellement converti à moins de 100 Ko pour un portail d'emploi ?",
        answer:
          "Baissez la qualité de sortie JPG ici même et cliquez sur Tout reconvertir pour réduire rapidement la taille du fichier. Si vous avez toujours besoin d'un ciblage strict en octets, passez directement à Compresser une image à 100 Ko via nos outils liés.",
      },
      {
        question: "Ce convertisseur accepte-t-il aussi les fichiers JPG ou PNG, ou seulement strictement HEIC et HEIF ?",
        answer:
          "Cette page filtre intentionnellement seulement les entrées .heic et .heif pour que les lots de photos Apple restent propres. Utilisez notre convertisseur d'images en lot si votre dossier mélange HEIC avec des fichiers PNG, WebP et BMP.",
      },
    ],
    relatedSlugs: ["/image-converter", "/bulk-image-converter", "/jpg-to-webp", "/remove-image-metadata"],
  },
  {
    slug: "/jpg-to-png",
    name: "JPG vers PNG",
    shortDescription: "Convertissez des photos JPG/JPEG en images PNG sans perte dans votre navigateur.",
    category: "convert",
    seoTitle: "Convertisseur JPG vers PNG gratuit – Conversion sans perte",
    seoDescription:
      "Transformez des photos JPEG en fichiers sans perte en ligne avec le convertisseur JPG vers PNG, dans votre navigateur. Images seules ou en lot, avec ZIP.",
    h1: "Convertisseur JPG vers PNG gratuit en ligne",
    subtitle:
      "Convertissez proprement des photographies standard .jpg et .jpeg en fichiers .png sans perte avec notre convertisseur JPG vers PNG gratuit, qui fonctionne directement dans votre navigateur. Conçu pour les imprimeries, les éditeurs graphiques et les formulaires web qui exigent strictement des téléversements PNG, il fige les pixels existants sans dommage supplémentaire de compression avec perte, en lots jusqu'à 25 Mo par image, avec export instantané en ZIP.",
    howToSteps: [
      {
        title: "Déposez des photos JPG ou JPEG jusqu'à 25 Mo chacune",
        description:
          "Téléversez une ou plusieurs images .jpg ou .jpeg depuis votre ordinateur, votre téléphone ou votre carte d'appareil photo dans la zone de dépôt.",
      },
      {
        title: "Confirmez le mode d'encodage PNG sans perte",
        description:
          "Notez que le curseur de qualité se masque automatiquement et que le panneau d'encodage PNG sans perte apparaît, puisque le PNG n'introduit jamais d'artefacts de compression avec perte.",
      },
      {
        title: "Vérifiez les tailles du JPG d'origine par rapport au PNG converti",
        description:
          "Vérifiez les dimensions en pixels et les nombres d'octets par carte de fichier, et ouvrez Comparer pour vérifier la fidélité des pixels côte à côte.",
      },
      {
        title: "Ajoutez d'autres fichiers JPEG à tout moment ou supprimez les cas particuliers",
        description:
          "Déposez d'autres fichiers .jpg dans la session active ou supprimez des cartes individuelles avec le bouton de corbeille avant l'empaquetage.",
      },
      {
        title: "Téléchargez des PNG individuels ou Télécharger tout (ZIP)",
        description:
          "Cliquez sur Télécharger PNG sur n'importe quelle carte de résultat ou sur Télécharger tout (ZIP) pour enregistrer compressmypic_jpg_to_png.zip localement.",
      },
    ],
    features: [
      {
        title: "Vraie sortie PNG sans perte",
        description: "Évite tout dommage supplémentaire de génération avec perte quand vous préparez des images pour d'autres modifications ou pour l'archivage.",
      },
      {
        title: "File d'attente en lot et empaquetage ZIP",
        description: "Convertissez plusieurs JPEG en PNG simultanément et exportez-les dans un seul ZIP organisé.",
      },
      {
        title: "Zéro filigrane ou inscription",
        description: "Conversions illimitées directement dans Chrome, Firefox, Safari ou Edge, sans créer de compte.",
      },
      {
        title: "Traitement 100 % local",
        description: "Les images restent dans l'onglet de votre navigateur : rien ne touche un serveur distant.",
      },
    ],
    faqs: [
      {
        question: "Pourquoi aucun contrôle de qualité n'apparaît-il dans le convertisseur JPG vers PNG ?",
        answer:
          "Contrairement au JPEG ou au WebP, le PNG utilise une compression DEFLATE sans perte, où chaque pixel est encodé à l'identique sans compromis de pourcentage de qualité. Remplacer le curseur par la carte d'encodage PNG sans perte évite les conjectures trompeuses.",
      },
      {
        question: "Si convertir JPG en PNG est sans perte, pourquoi cela ne peut-il pas effacer les blocs JPEG flous préexistants ?",
        answer:
          "Le PNG sans perte fige les pixels exacts actuellement stockés dans votre JPEG, pour qu'aucune perte supplémentaire de génération ne se produise quand vous modifiez, recadrez ou réenregistrez le fichier ensuite. Cependant, il ne peut pas reconstruire par magie les textures fines déjà écartées quand la photo d'origine a été enregistrée en JPG.",
      },
      {
        question: "Pourquoi un JPG de 300 Ko s'étend-il souvent en un PNG de 1,5 Mo–3 Mo après la conversion ?",
        answer:
          "Le JPEG écarte les variations subtiles de couleur sur des blocs de 8×8 pixels pour rester petit, tandis que le PNG enregistre des données exactes de pixels RVB sans perte sur tout le cadre. Les photographies à tons continus nécessitent naturellement beaucoup plus d'octets en PNG sans perte qu'en JPG compressé.",
      },
      {
        question: "Quand convertir JPG en PNG est-il vraiment utile malgré la taille de fichier plus grande ?",
        answer:
          "Convertir en PNG est essentiel quand les fournisseurs d'impression, les importateurs d'interface logicielle, les portails de badges ou les éditeurs de pixel art exigent strictement des fichiers .png. Cela protège aussi les images quand vous prévoyez de superposer du texte net et de modifier à répétition sans accumuler d'artefacts de recompression JPEG.",
      },
      {
        question: "Convertir un JPG avec un arrière-plan blanc uni en PNG rend-il cet arrière-plan transparent ?",
        answer:
          "Non. Les fichiers JPEG standard ne stockent aucune information de transparence alpha, donc convertir JPG en PNG produit une image .png entièrement opaque qui préserve l'arrière-plan blanc. Associez-le ensuite à notre suppresseur d'arrière-plan si vous avez besoin d'une découpe alpha.",
      },
      {
        question: "Pourquoi ne pas simplement renommer manuellement une extension de fichier .jpg en .png ?",
        answer:
          "Changer seulement le suffixe du nom laisse les octets binaires JPEG d'origine à l'intérieur, ce qui fait que les validateurs stricts de téléversement, les chargeurs Canvas HTML et les logiciels d'impression rejettent le fichier ou ne peuvent pas l'ouvrir. Exécuter un vrai décodage Canvas et un réencodage PNG écrit des fragments et des en-têtes PNG valides.",
      },
      {
        question: "Les fichiers PNG convertis conservent-ils la largeur et la hauteur exactes en pixels de mes JPEG d'origine ?",
        answer:
          "Oui. Chaque .png exporté maintient 100 % de la largeur et de la hauteur naturelles du JPG source, sans recadrage ni redimensionnement automatique.",
      },
      {
        question: "Puis-je convertir en lot 20 scans JPG en fichiers PNG et enregistrer un seul ZIP ?",
        answer:
          "Oui. Déposez plusieurs fichiers .jpg ou .jpeg (jusqu'à 25 Mo chacun) ensemble, attendez brièvement pendant que votre navigateur encode chaque PNG localement, puis cliquez sur Télécharger tout (ZIP) pour télécharger compressmypic_jpg_to_png.zip.",
      },
      {
        question: "Convertir JPG en PNG supprime-t-il les étiquettes EXIF cachées de l'appareil photo et les métadonnées GPS ?",
        answer:
          "Oui. Décoder un JPEG sur HTML5 Canvas et écrire un nouveau PNG écarte automatiquement les en-têtes EXIF de JPEG, les modèles d'appareil photo et les coordonnées GPS.",
      },
      {
        question: "Les documents scannés, les reçus ou les portraits personnels sont-ils envoyés à des serveurs externes pendant la conversion en PNG ?",
        answer:
          "Jamais. Le décodage JPEG, le rendu Canvas, l'encodage PNG DEFLATE et l'archivage ZIP s'exécutent strictement dans la mémoire locale du navigateur sur votre ordinateur ou votre téléphone.",
      },
      {
        question: "Que se passe-t-il si mon entrée est un JPEG enregistré avec des couleurs d'impression CMJN au lieu de RVB ?",
        answer:
          "Les navigateurs modernes convertissent les flux de pixels JPEG vers l'espace de couleur RVBA sRGB standard de 8 bits quand ils dessinent sur HTML5 Canvas. Cela garantit que votre .png de sortie s'affiche avec précision dans les navigateurs web, les diapositives et les écrans mobiles.",
      },
      {
        question: "Comment la colonne Changement affiche-t-elle proprement la croissance de taille de fichier dans le convertisseur JPG vers PNG ?",
        answer:
          "Transformer des JPG compressés en PNG sans perte augmente presque toujours la taille en octets. C'est pourquoi la cellule Changement de chaque carte rapporte honnêtement la différence positive exacte +X % avec les tailles en octets du JPG d'origine et du PNG final.",
      },
      {
        question: "Puis-je utiliser le visualiseur Comparer pour confirmer qu'il n'y a aucun changement de couleur entre le JPG et le PNG ?",
        answer:
          "Oui. Cliquez sur n'importe quelle miniature de carte ou sur le bouton Comparer pour vérifier les pixels côte à côte dans le rideau divisé interactif avant de télécharger.",
      },
      {
        question: "Pourquoi le PNG converti aide-t-il avant plusieurs rondes d'annotations ou de superpositions de texte ?",
        answer:
          "Réenregistrer un JPEG à répétition dégrade légèrement les bords chaque fois que la quantification avec perte s'exécute à nouveau. Convertir une ressource source en PNG une fois crée un maître intermédiaire sans perte qui résiste proprement aux modifications graphiques répétées.",
      },
      {
        question: "Les deux extensions .jpg et .jpeg sont-elles acceptées sans problème ?",
        answer:
          "Oui. La zone de dépôt accepte les deux extensions .jpg et .jpeg et génère des fichiers .png standardisés, en conservant le nom de base d'origine assaini.",
      },
      {
        question: "Puis-je aussi convertir des images PNG, WebP ou HEIC sur cette page spécifique JPG vers PNG ?",
        answer:
          "Cette page accepte intentionnellement seulement les entrées JPG/JPEG pour une conversion propre en une étape vers PNG. Utilisez notre convertisseur d'images ou notre convertisseur d'images en lot si votre dossier source inclut d'autres formats de fichier.",
      },
      {
        question: "Quelle est la taille maximale autorisée par JPEG téléversé dans le convertisseur JPG vers PNG ?",
        answer:
          "Chaque fichier .jpg ou .jpeg individuel peut peser jusqu'à 25 Mo. Ce plafond généreux couvre facilement les exports d'appareil photo haute résolution, les photographies reflex et les œuvres numériques larges.",
      },
      {
        question: "Pourquoi une photo de portrait enregistrée en .jpg peut-elle s'exporter droite même si elle a été prise de côté avec l'appareil photo ?",
        answer:
          "Les navigateurs modernes lisent automatiquement les étiquettes d'orientation EXIF intégrées pendant qu'ils peignent le JPEG décodé sur HTML5 Canvas. Cela fixe l'orientation droite de façon permanente dans les nouveaux pixels PNG, pour qu'elle s'affiche droite dans chaque application.",
      },
      {
        question: "Les PNG exportés s'ouvriront-ils dans Photoshop, Illustrator, Figma, Canva et PowerPoint ?",
        answer:
          "Oui. Les fichiers .png RVBA standard de 8 bits créés par HTML5 Canvas sont universellement compatibles avec chaque application de design de bureau, suite bureautique, navigateur et système d'exploitation mobile.",
      },
      {
        question: "Quelle est la vitesse de la conversion JPG vers PNG dans le navigateur comparée aux convertisseurs cloud ?",
        answer:
          "Comme il n'y a aucun temps d'attente de téléversement ou de téléchargement de fichiers pour les photos de plusieurs mégaoctets, la conversion locale Canvas se termine en millisecondes par fichier directement sur votre propre CPU. Les lots se terminent rapidement sans attendre dans des files de serveurs distants.",
      },
    ],
    relatedSlugs: ["/png-to-jpg", "/jpg-to-webp", "/image-converter", "/add-background-to-image"],
  },
  {
    slug: "/png-to-jpg",
    name: "PNG vers JPG",
    shortDescription: "Convertissez les PNG lourds en JPG légers avec un arrière-plan mate personnalisé.",
    category: "convert",
    seoTitle: "Convertisseur PNG vers JPG gratuit – Réduisez vos PNG",
    seoDescription:
      "Convertissez les PNG en photos légères en ligne avec le convertisseur PNG vers JPG. Choisissez une couleur mate pour la transparence et réglez la qualité.",
    h1: "Convertisseur PNG vers JPG gratuit en ligne",
    subtitle:
      "Réduisez les volumineuses captures PNG, captures Retina et exports graphiques en fichiers .jpg rapides et légers avec notre convertisseur PNG vers JPG gratuit dans votre navigateur. Conçu pour les blogueurs, les spécialistes du marketing et les expéditeurs d'e-mails qui gèrent des pièces jointes PNG trop lourdes, jusqu'à 25 Mo chacune, il associe un curseur de qualité à un sélecteur de couleur mate pour arrière-plan transparent, pour que les zones alpha ne deviennent jamais noires pleines.",
    howToSteps: [
      {
        title: "Déposez des images PNG jusqu'à 25 Mo chacune",
        description:
          "Téléversez une ou plusieurs captures .png, rendus de produit ou découpes transparentes dans la zone de dépôt.",
      },
      {
        title: "Choisissez une couleur mate pour l'arrière-plan transparent",
        description:
          "Cliquez sur Blanc (#ffffff), Noir (#000000), Gris clair (#f8fafc) ou la palette de couleur native pour contrôler comment les pixels transparents s'aplatissent derrière les sujets opaques.",
      },
      {
        title: "Définissez la qualité de sortie JPG (20 %–100 %)",
        description:
          "Gardez les 88 % par défaut, nets, ou glissez entre 20 % (fichier minuscule) et 100 % (détail maximal), puis cliquez sur Tout reconvertir.",
      },
      {
        title: "Vérifiez l'économie d'octets et les bords nets via Comparer",
        description:
          "Vérifiez le pourcentage économisé par carte et inspectez le texte ou les bords de produit dans le visualiseur interactif de comparaison avant/après.",
      },
      {
        title: "Téléchargez des fichiers JPG ou Télécharger tout (ZIP)",
        description:
          "Enregistrez des photos .jpg converties individuelles immédiatement ou regroupez les lots dans compressmypic_png_to_jpg.zip.",
      },
    ],
    features: [
      {
        title: "Remplissage mate de transparence personnalisé",
        description: "Les zones transparentes de PNG se fondent proprement sur du blanc, du noir ou n'importe quelle couleur d'arrière-plan personnalisée, au lieu de devenir noires pleines.",
      },
      {
        title: "Réduction massive de la taille de fichier",
        description: "Convertir des PNG photographiques en JPG à 85 % réduit souvent le poids du fichier de 60 à 85 % instantanément.",
      },
      {
        title: "Inspecteur visuel avant/après",
        description: "Vérifiez la netteté côte à côte avant de télécharger, pour que le texte et les bords restent nets.",
      },
      {
        title: "Exécution privée dans le navigateur",
        description: "Les captures confidentielles et les documents restent en sécurité sur votre propre ordinateur.",
      },
    ],
    faqs: [
      {
        question: "Pourquoi les captures de macOS et de Windows s'enregistrent-elles en PNG de plusieurs mégaoctets qui rétrécissent énormément en JPG ?",
        answer:
          "Les systèmes d'exploitation de bureau utilisent par défaut le PNG sans perte pour les captures, qui enregistre fidèlement des millions de pixels d'écran Retina non compressés, dépassant souvent 3 Mo à 8 Mo par capture. Convertir des PNG photographiques ou d'interface riche en JPG à 85 %–90 % réduit généralement de 60 % à 85 % le poids du fichier pour un partage rapide par e-mail et Slack.",
      },
      {
        question: "Comment le sélecteur de couleur mate pour arrière-plan transparent évite-t-il les boîtes noires laides ?",
        answer:
          "Comme la spécification JPEG n'a pas de canal de transparence alpha, les convertisseurs naïfs mettent souvent par défaut les pixels alpha vides en noir #000000, ce qui ruine les logos sombres ou les découpes avec ombre. Peindre d'abord la couleur mate sélectionnée (blanc par défaut, plus noir, gris clair ou n'importe quel hexadécimal personnalisé) sur le canevas fond proprement les bords semi-transparents.",
      },
      {
        question: "Puis-je choisir un charbon sombre ou une couleur de marque spécifique d'un site web derrière un logo PNG transparent avant d'enregistrer le JPG ?",
        answer:
          "Oui. Cliquez sur le carré d'entrée de couleur à côté des boutons rapides Blanc, Noir et Gris clair, sous Couleur d'arrière-plan mate pour la transparence, pour choisir n'importe quelle valeur hexadécimale exacte, puis cliquez sur Tout reconvertir pour prévisualiser et exporter.",
      },
      {
        question: "Quel pourcentage de qualité de sortie JPG garde la typographie des captures nette sans fichiers gonflés ?",
        answer:
          "Garder la qualité de sortie JPG autour de 88 % (la valeur par défaut) à 95 % maintient propres les bords nets du texte d'interface logicielle et des graphiques. Descendre sous 70 % peut introduire un léger bruit de moustique autour des lettres rouges ou bleues à fort contraste, à cause du sous-échantillonnage de chrominance JPEG.",
      },
      {
        question: "Pourquoi une minuscule icône PNG monochrome plate de 20 Ko peut-elle grossir un peu en la convertissant en JPG à 88 % ?",
        answer:
          "Le PNG à palette indexée excelle pour les graphiques plats de deux couleurs avec des zones pleines nettes, tandis que les blocs cosinus 8×8 du JPEG ajoutent une surcharge sur les minuscules logos. Vérifiez toujours la colonne Changement : pour les icônes plates transparentes destinées aux sites web, WebP ou conserver PNG est généralement plus petit que JPG.",
      },
      {
        question: "Comment décider entre PNG vers JPG et PNG vers WebP dans le convertisseur ?",
        answer:
          "Choisissez PNG vers JPG quand les pièces jointes doivent s'ouvrir dans Microsoft Word, des constructeurs de PDF, d'anciens programmes de messagerie, des laboratoires d'impression ou des portails qui rejettent WebP, ou quand vous avez intentionnellement besoin d'un arrière-plan blanc uni. Choisissez PNG vers WebP quand vous déployez des ressources sur des sites web où préserver la transparence et la vitesse maximale comptent.",
      },
      {
        question: "Convertir des découpes de produit transparentes sur un fond blanc #ffffff aide-t-il dans les annonces de marketplaces ?",
        answer:
          "Oui. Des marketplaces comme Amazon et eBay préfèrent généralement des JPG nets à fond blanc opaque pour les miniatures principales de produit, plutôt que des PNG alpha, et le blanc se compresse très efficacement dans le JPEG.",
      },
      {
        question: "Puis-je convertir un lot entier de 25 captures PNG Retina en JPG à la fois ?",
        answer:
          "Oui. Déposez plusieurs fichiers .png jusqu'à 25 Mo chacun dans la file d'attente, choisissez votre qualité et votre couleur de remplissage mate, puis téléchargez tout ensemble dans compressmypic_png_to_jpg.zip.",
      },
      {
        question: "Qu'arrive-t-il aux ombres douces autour d'une capture de fenêtre PNG transparente quand elle est aplatie en JPG ?",
        answer:
          "Les ombres à mélange alpha se composent naturellement sur la couleur mate choisie, au lieu d'être coupées en contours dentelés et durs. Cela produit un ombrage doux et propre sur des arrière-plans blancs ou teintés, prêt pour les diapositives et les articles.",
      },
      {
        question: "Les tableaux de bord confidentiels, les reçus ou les maquettes de design sont-ils téléversés vers une API cloud ?",
        answer:
          "Non. La composition mate sur Canvas, la compression JPEG et la génération ZIP s'exécutent localement dans l'onglet de votre navigateur, donc les captures sensibles ne quittent jamais votre ordinateur.",
      },
      {
        question: "La conversion PNG vers JPG change-t-elle la largeur ou la hauteur en pixels ?",
        answer:
          "Non. Chaque .jpg converti conserve 100 % de la largeur et de la hauteur exactes de votre PNG d'origine. Utilisez le redimensionneur d'images ou le redimensionneur d'images en lot si vous voulez aussi réduire les captures Retina à des dimensions 1×.",
      },
      {
        question: "Pourquoi le curseur de qualité couvre-t-il une plage de 20 % à 100 % ?",
        answer:
          "Glisser vers 20 % montre comment la compression agressive réduit la taille quand des fichiers ultra minuscules sont obligatoires, tandis que 85 %–90 % atteint le point idéal visuel pour des photos nettes et des diapositives. Choisir 100 % offre le détail JPEG maximal quand le poids en octets est secondaire.",
      },
      {
        question: "Puis-je changer la couleur mate ou la qualité après avoir vu les premiers résultats de conversion ?",
        answer:
          "Oui. Choisissez une autre pastille mate ou déplacez le curseur à tout moment, puis cliquez sur Tout reconvertir pour régénérer chaque fichier chargé sans les retéléverser.",
      },
      {
        question: "Convertir PNG en JPG supprime-t-il les fragments de texte PNG intégrés, comme le logiciel de création ou les commentaires ?",
        answer:
          "Oui. En dessinant les pixels sur HTML5 Canvas, les blocs tEXt, iTXt et de profil ICC intégrés sont supprimés, ce qui garde les JPG de sortie légers et propres.",
      },
      {
        question: "Puis-je vérifier la netteté des bords avant/après sur des captures d'interface converties avant de télécharger ?",
        answer:
          "Oui. Cliquez sur Comparer sur n'importe quelle carte pour glisser le visualiseur divisé sur les étiquettes de texte et les icônes par rapport au PNG d'origine sans perte.",
      },
      {
        question: "Quels types de fichiers cette page dédiée PNG vers JPG accepte-t-elle ?",
        answer:
          "Elle filtre proprement les fichiers .png jusqu'à 25 Mo par fichier, pour que vous n'aplatissiez pas accidentellement des entrées non PNG. Pour les lots mélangés avec des fichiers WebP ou BMP, essayez le convertisseur d'images en lot.",
      },
      {
        question: "Le convertisseur prend-il en charge les PNG transparents entrelacés (Adam7) ?",
        answer:
          "Oui. Le décodeur d'images natif de votre navigateur lit proprement les flux PNG standard et entrelacés avant de les peindre sur l'arrière-plan mate de Canvas.",
      },
      {
        question: "Windows Photos, Aperçu de macOS, WhatsApp et les anciennes imprimantes ouvriront-ils le JPG exporté ?",
        answer:
          "Oui. Les sorties .jpg RVB de base standard ont la compatibilité la plus large de tous les formats d'image numérique sur les téléphones, les navigateurs, les suites bureautiques et les bornes d'impression.",
      },
      {
        question: "Quel est le nom de fichier individuel par rapport au nom du ZIP en lot de PNG vers JPG ?",
        answer:
          "Les téléchargements individuels conservent votre nom de fichier d'origine assaini avec une extension .jpg. Les lots de 2 ou plus sont exportés proprement regroupés dans compressmypic_png_to_jpg.zip.",
      },
      {
        question: "Puis-je convertir des captures PNG depuis des navigateurs mobiles iOS ou Android proprement ?",
        answer:
          "Oui. Les pastilles mates, le curseur de qualité, l'inspecteur visuel de comparaison et l'export ZIP fonctionnent directement dans Safari sur iOS et Chrome sur Android, sans télécharger aucune application.",
      },
    ],
    relatedSlugs: ["/jpg-to-png", "/png-to-webp", "/compress-image-to-100kb", "/image-converter"],
  },
  {
    slug: '/jpg-to-webp',
    name: 'Convertisseur JPG en WebP',
    shortDescription: 'Convertissez vos photos JPG en WebP moderne pour des sites plus rapides et un meilleur SEO.',
    category: 'convert',
    seoTitle: 'Convertisseur JPG en WebP gratuit en ligne – Plus léger',
    seoDescription:
      'Convertissez vos photos JPG en WebP gratuitement en ligne. Des fichiers plus légers, des pages plus rapides et un meilleur SEO, avec qualité et export ZIP.',
    h1: 'Convertisseur JPG en WebP gratuit en ligne',
    subtitle:
      'Transformez vos photos JPG du quotidien en images WebP modernes et légères grâce à notre convertisseur JPG en WebP gratuit, qui fonctionne entièrement dans votre navigateur. Conçu pour les blogueurs, les propriétaires de boutiques et les développeurs qui veulent des pages plus rapides et de meilleurs Core Web Vitals, il convertit des fichiers JPG jusqu’à 25 Mo chacun, avec la qualité de votre choix — 82 % par défaut —, le traitement par lots et le téléchargement ZIP en un clic, sans rien envoyer en ligne.',
    howToSteps: [
      {
        title: 'Déposez des photos JPG jusqu’à 25 Mo chacune',
        description:
          'Importez une ou plusieurs photos .jpg ou .jpeg de votre blog, de votre boutique ou de votre pellicule dans la zone de dépôt.',
      },
      {
        title: 'Réglez la qualité de sortie WebP (20 %–100 %)',
        description:
          'Gardez les 82 % par défaut, nets pour les photos, ou déplacez le curseur vers 20 % pour des fichiers minuscules et vers 100 % pour un maximum de détail, puis cliquez sur Tout reconvertir.',
      },
      {
        title: 'Vérifiez le gain de taille sur chaque carte',
        description:
          'Chaque résultat affiche la taille JPG d’origine, la taille WebP convertie et le pourcentage économisé, pour voir le gain immédiatement.',
      },
      {
        title: 'Comparez la netteté côte à côte',
        description:
          'Cliquez sur Comparer sur n’importe quelle carte pour ouvrir la visionneuse partagée et vérifier que le texte, les visages et les contours restent nets avec la qualité choisie.',
      },
      {
        title: 'Téléchargez les fichiers WebP ou Tout télécharger (ZIP)',
        description:
          'Enregistrez des fichiers .webp individuels ou regroupez tout le lot dans compressmypic_jpg_to_webp.zip en un clic.',
      },
    ],
    features: [
      {
        title: 'Des scores PageSpeed et LCP plus rapides',
        description:
          'WebP est le format web nouvelle génération recommandé par Lighthouse et les navigateurs modernes.',
      },
      {
        title: 'Contrôle de qualité réglable',
        description:
          'Ajustez la compression de 20 % à 100 % et voyez les résultats immédiatement.',
      },
      {
        title: 'Export par lots en ZIP',
        description:
          'Optimisez des dossiers entiers d’images de blog ou de e-commerce localement en quelques secondes.',
      },
      {
        title: 'Aucun aller-retour serveur',
        description:
          'Utilise l’encodeur WebP intégré à votre navigateur : rapide, utilisable hors ligne et privé.',
      },
    ],
    faqs: [
      {
        question: 'De combien un fichier WebP est-il plus léger que la même photo enregistrée en JPG ?',
        answer:
          'À qualité visuelle comparable, les fichiers WebP pèsent généralement de 25 % à 35 % de moins que la même photo enregistrée en JPG, car la compression WebP prédit les pixels plus efficacement. Le gain exact dépend de la photo : les paysages détaillés gagnent moins, tandis que les ciels uniformes et les photos de studio gagnent davantage.',
      },
      {
        question: 'Pourquoi Google recommande-t-il WebP pour des sites plus rapides et de meilleurs Core Web Vitals ?',
        answer:
          'Les outils Lighthouse et PageSpeed de Google signalent les images lourdes comme l’une des principales causes d’un Largest Contentful Paint (LCP) lent. Servir la même photo en WebP plus léger réduit le temps de téléchargement sur les connexions lentes, ce qui améliore directement le LCP et le score d’expérience que Google utilise comme signal de classement.',
      },
      {
        question: 'Quels navigateurs ouvrent un fichier WebP sans rien installer ?',
        answer:
          'Tous les navigateurs modernes ouvrent WebP nativement : Chrome, Edge, Firefox et Safari sur ordinateur, ainsi que Chrome sur Android et Safari sur iOS. Aucune extension ni application de visualisation n’est nécessaire : les images WebP s’affichent directement sur les pages web, dans les messageries et dans la plupart des visionneuses modernes.',
      },
      {
        question: 'Quelle qualité choisir pour des photos JPG en WebP sur un site web ?',
        answer:
          'Pour les photos de site web, 80 % à 85 % est le bon équilibre : les images semblent pratiquement identiques à l’original JPG tout en restant bien plus légères. L’outil utilise 82 % par défaut pour cette raison, et vous pouvez monter vers 90 % ou plus pour les images principales où chaque détail compte.',
      },
      {
        question: 'La conversion JPG en WebP change-t-elle les dimensions de la photo ?',
        answer:
          'Non. La conversion ne change que le conteneur du fichier et la compression : le WebP exporté conserve 100 % de la largeur et de la hauteur en pixels du JPG d’origine. Si vous voulez aussi des dimensions plus petites, utilisez ensuite le redimensionneur d’images pour des tailles exactes en pixels.',
      },
      {
        question: 'Une photo JPG peut-elle conserver sa transparence en devenant WebP ?',
        answer:
          'Non, car les fichiers JPG classiques n’ont pas de canal de transparence à conserver : chaque pixel d’un JPG est totalement opaque. Si votre visuel d’origine a un fond transparent, partez d’un PNG et utilisez notre convertisseur PNG en WebP, qui conserve tout le canal alpha.',
      },
      {
        question: 'Mes photos JPG sont-elles envoyées sur un serveur pendant la conversion en WebP ?',
        answer:
          'Jamais. La conversion s’exécute sur HTML5 Canvas dans votre propre onglet de navigateur : vos photos sont encodées localement et ne quittent jamais votre ordinateur ou votre téléphone. Fermer l’onglet les efface de la mémoire du navigateur.',
      },
      {
        question: 'Puis-je convertir tout un dossier d’images JPG de blog en WebP en une fois ?',
        answer:
          'Oui. Déposez plusieurs fichiers .jpg ou .jpeg jusqu’à 25 Mo chacun dans la file, choisissez un seul réglage de qualité pour tout le lot et téléchargez le tout dans compressmypic_jpg_to_webp.zip. Chaque fichier est converti séparément : un fichier endommagé ne bloque jamais les autres.',
      },
      {
        question: 'Que deviennent les données EXIF et les balises GPS d’un JPG converti en WebP ?',
        answer:
          'Dessiner les pixels sur HTML5 Canvas supprime les données EXIF intégrées, y compris les coordonnées GPS, le modèle d’appareil et les horodatages. Les fichiers WebP obtenus restent donc légers et protègent votre vie privée avant de publier des photos en ligne.',
      },
      {
        question: 'Pourquoi le WebP converti pèse-t-il parfois plus que le JPG d’origine ?',
        answer:
          'Les JPG très petits ou déjà très compressés peuvent grossir légèrement lors du réencodage, surtout à 100 % de qualité, car WebP ajoute son propre poids de conteneur. Si un fichier grossit, baissez la qualité vers 80 % ou gardez le JPG d’origine : la colonne Variation de chaque carte montre le résultat honnêtement.',
      },
      {
        question: 'Puis-je utiliser les fichiers WebP convertis dans WordPress, Shopify ou Wix ?',
        answer:
          'Oui. WordPress, Shopify, Wix, Squarespace et la plupart des créateurs de sites modernes acceptent directement les envois WebP, et les navigateurs les servent sans configuration supplémentaire. Pour les thèmes ou extensions très anciens qui refusent WebP, reconvertissez avec notre outil WebP en JPG.',
      },
      {
        question: 'Quelle est la taille maximale de fichier JPG acceptée par le convertisseur WebP ?',
        answer:
          'Chaque fichier JPG ou JPEG peut peser jusqu’à 25 Mo, ce qui couvre les photos d’appareil haute résolution et les grandes captures d’écran. Comme la conversion a lieu sur votre appareil, les gros fichiers sont traités à la vitesse de votre processeur local, sans temps d’attente d’envoi.',
      },
      {
        question: 'La conversion JPG en WebP fonctionne-t-elle dans le navigateur d’un téléphone ?',
        answer:
          'Oui. Le curseur de qualité, la file par lots, la visionneuse de comparaison et le téléchargement ZIP fonctionnent dans Safari sur iOS et Chrome sur Android, sans installer d’application. Sur téléphone, les très gros lots prennent simplement un peu plus de temps, car le travail tourne sur le processeur du téléphone.',
      },
      {
        question: 'Comment vérifier que le WebP converti reste net avant de le télécharger ?',
        answer:
          'Cliquez sur Comparer sur n’importe quelle carte de résultat pour ouvrir la visionneuse partagée et glissez sur la photo pour inspecter les visages, le texte et les contours par rapport au JPG d’origine. Si quelque chose semble flou, augmentez le curseur de qualité et cliquez sur Tout reconvertir.',
      },
      {
        question: 'Puis-je changer la qualité après la première conversion JPG en WebP sans réimporter ?',
        answer:
          'Oui. Déplacez le curseur de qualité vers une nouvelle valeur à tout moment et cliquez sur Tout reconvertir pour régénérer chaque fichier chargé avec le nouveau réglage. Vos fichiers importés restent dans la file : inutile de les glisser à nouveau.',
      },
      {
        question: 'WebP est-il meilleur que JPG pour les photos produit d’une boutique en ligne ?',
        answer:
          'Pour les photos produit affichées sur un site web, oui : WebP à 80 %–85 % a le même rendu que JPG et se charge nettement plus vite, ce qui aide autant les acheteurs que le référencement. Gardez JPG uniquement quand une place de marché, un laboratoire d’impression ou un acheteur l’exige explicitement.',
      },
      {
        question: 'Quel nom de fichier les fichiers WebP téléchargés conservent-ils ?',
        answer:
          'Les téléchargements individuels conservent votre nom de fichier d’origine nettoyé avec l’extension .webp : photo_01.jpg devient photo_01.webp. Les lots de deux fichiers ou plus sont exportés regroupés dans compressmypic_jpg_to_webp.zip.',
      },
      {
        question: 'Puis-je convertir des captures d’écran JPG avec du texte en WebP sans lettres floues ?',
        answer:
          'Oui : à 85 %–90 % de qualité, le texte des captures reste net, car WebP conserve bien les contours nets à fort contraste. Descendre sous 70 % peut adoucir les petites lettres : vérifiez dans la visionneuse Comparer et augmentez la qualité si le texte semble flou.',
      },
      {
        question: 'Ce convertisseur fonctionne-t-il hors ligne une fois la page chargée ?',
        answer:
          'Oui. Une fois la page chargée dans votre navigateur, la conversion s’exécute entièrement en JavaScript local et HTML5 Canvas, sans appel serveur. Vous n’aurez besoin d’Internet à nouveau que pour charger la page elle-même ou télécharger les fichiers terminés.',
      },
      {
        question: 'Quand vaut-il mieux garder le JPG plutôt que convertir en WebP ?',
        answer:
          'Gardez le JPG quand le fichier doit s’ouvrir dans un logiciel ancien, des pièces jointes d’e-mail, des laboratoires d’impression ou des portails d’envoi qui refusent encore WebP. Pour tout ce qui est publié sur un site web moderne, WebP est le meilleur choix — et vous pouvez toujours reconvertir avec WebP en JPG.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/web-image-optimizer', '/bulk-image-converter'],
  },
  {
    slug: '/webp-to-jpg',
    name: 'Convertisseur WebP en JPG',
    shortDescription: 'Convertissez vos téléchargements WebP en fichiers JPG acceptés partout.',
    category: 'convert',
    seoTitle: 'Convertisseur WebP en JPG gratuit en ligne – Universel',
    seoDescription:
      'Convertissez vos images WebP en JPG universel gratuitement en ligne. Choisissez la couleur de fond des transparences, réglez la qualité et téléchargez en ZIP.',
    h1: 'Convertisseur WebP en JPG gratuit en ligne',
    subtitle:
      'Transformez les images .webp téléchargées en fichiers .jpg classiques qui s’ouvrent dans n’importe quelle application, portail ou imprimante, grâce à notre convertisseur WebP en JPG gratuit dans votre navigateur. Conçu pour celles et ceux qui reçoivent un fichier WebP d’un site web ou d’une messagerie et dont l’éditeur, la suite bureautique ou le formulaire d’envoi le refuse, il convertit des fichiers WebP jusqu’à 25 Mo chacun avec 88 % de qualité par défaut, un sélecteur de couleur de fond pour les zones transparentes et l’export ZIP par lots.',
    howToSteps: [
      {
        title: 'Déposez des images WebP jusqu’à 25 Mo chacune',
        description:
          'Importez un ou plusieurs fichiers .webp enregistrés depuis des sites web, des messageries ou des téléchargements dans la zone de dépôt.',
      },
      {
        title: 'Choisissez une couleur de fond pour les zones transparentes',
        description:
          'Choisissez Blanc (#ffffff), Noir (#000000), Gris clair (#f8fafc) ou n’importe quelle couleur hexadécimale personnalisée, car JPG ne peut pas stocker la transparence.',
      },
      {
        title: 'Réglez la qualité de sortie JPG (20 %–100 %)',
        description:
          'Gardez les 88 % par défaut, nets, ou déplacez le curseur vers 20 % pour des fichiers minuscules et vers 100 % pour un maximum de détail, puis cliquez sur Tout reconvertir.',
      },
      {
        title: 'Comparez le JPG avec le WebP d’origine',
        description:
          'Cliquez sur Comparer sur n’importe quelle carte pour inspecter les contours et le texte dans la visionneuse partagée avant d’enregistrer quoi que ce soit.',
      },
      {
        title: 'Téléchargez les fichiers JPG ou Tout télécharger (ZIP)',
        description:
          'Enregistrez des fichiers .jpg individuels ou regroupez tout le lot dans compressmypic_webp_to_jpg.zip en un clic.',
      },
    ],
    features: [
      {
        title: 'Résout les refus des logiciels anciens',
        description:
          'Convertissez facilement des images WebP pour les portails, les imprimantes ou les applications anciennes qui n’acceptent que JPG.',
      },
      {
        title: 'Remplissage de fond sûr pour la transparence',
        description:
          'Les WebP transparents sont aplatis en douceur sur fond blanc, noir ou n’importe quelle couleur hexadécimale.',
      },
      {
        title: 'Réencodage haute qualité',
        description:
          'La qualité par défaut de 88 % garde les détails nets avec une augmentation minimale de la taille du fichier.',
      },
      {
        title: 'Confidentialité 100 % dans le navigateur',
        description:
          'Aucune file d’attente cloud ni envoi serveur : tout fonctionne instantanément sur votre appareil.',
      },
    ],
    faqs: [
      {
        question: 'Pourquoi certaines applications, imprimantes et formulaires refusent-ils les fichiers WebP ?',
        answer:
          'WebP est un format plus récent, et beaucoup de programmes de bureau anciens, de bornes d’impression, de versions de Microsoft Office et de formulaires d’envoi officiels ont été créés avant son existence : ils ne reconnaissent que JPG et PNG. Convertir WebP en JPG rend l’image ouvrable partout immédiatement, sans demander à personne d’installer quoi que ce soit.',
      },
      {
        question: 'Que deviennent les parties transparentes d’un WebP converti en JPG ?',
        answer:
          'JPG n’a pas de canal alpha de transparence : les pixels transparents doivent donc être remplis d’une couleur unie pendant la conversion. Cet outil les remplit avec la couleur de fond que vous choisissez — blanc par défaut — pour que les logos et autocollants obtiennent un fond uni propre au lieu d’un cadre noir.',
      },
      {
        question: 'Puis-je choisir la couleur d’arrière-plan derrière un autocollant WebP transparent ?',
        answer:
          'Oui. Sous Couleur de fond pour la transparence, choisissez Blanc, Noir ou Gris clair, ou cliquez sur l’échantillon de couleur pour saisir n’importe quelle valeur hexadécimale personnalisée. Le choix s’applique quand vous cliquez sur Tout reconvertir : vous pouvez donc essayer différents fonds avant de télécharger.',
      },
      {
        question: 'La conversion WebP en JPG fait-elle perdre de la qualité ?',
        answer:
          'Une certaine perte est inévitable, car JPG réencode les pixels avec une compression avec perte ; mais avec les 88 % par défaut, la différence est pratiquement invisible pour les photos et les captures d’écran. Si le WebP d’origine était déjà de faible qualité, la conversion ne peut pas restaurer un détail qui n’y était pas.',
      },
      {
        question: 'Le JPG conserve-t-il les mêmes dimensions en pixels que le WebP d’origine ?',
        answer:
          'Oui. Chaque .jpg converti conserve 100 % de la largeur et de la hauteur exactes en pixels du WebP d’origine : rien n’est rogné ni redimensionné. Utilisez ensuite le redimensionneur d’images si vous avez aussi besoin de dimensions plus petites.',
      },
      {
        question: 'Que faire d’un fichier WebP animé dans ce convertisseur ?',
        answer:
          'Un WebP animé est exporté en JPG fixe, car le format JPG ne peut pas stocker le mouvement. Vous obtenez une seule image nette de l’animation, utile pour les miniatures et les documents ; pour la version animée, conservez le fichier WebP d’origine.',
      },
      {
        question: 'Mes fichiers WebP sont-ils envoyés sur un serveur pendant la conversion en JPG ?',
        answer:
          'Non. Toute la conversion s’exécute sur HTML5 Canvas dans votre propre onglet de navigateur : vos images ne sont jamais envoyées à un serveur, ni stockées, ni vues par qui que ce soit d’autre. Fermer l’onglet les efface de la mémoire du navigateur.',
      },
      {
        question: 'Puis-je convertir beaucoup de téléchargements WebP en JPG en un seul lot ?',
        answer:
          'Oui. Déposez plusieurs fichiers .webp jusqu’à 25 Mo chacun dans la file, choisissez une seule couleur de fond et une seule qualité pour tout le lot, puis téléchargez le tout dans compressmypic_webp_to_jpg.zip. Chaque fichier est converti séparément.',
      },
      {
        question: 'Quel est le plus gros fichier WebP accepté par le convertisseur JPG ?',
        answer:
          'Chaque fichier WebP peut peser jusqu’à 25 Mo, ce qui couvre les téléchargements haute résolution et les grandes captures d’écran. La conversion s’exécute sur votre appareil : les gros fichiers sont traités à la vitesse de votre processeur local, sans temps d’attente d’envoi.',
      },
      {
        question: 'Comment obtenir un fond blanc pur au lieu d’un cadre noir derrière un logo ?',
        answer:
          'Choisissez Blanc (#ffffff) sous Couleur de fond pour la transparence avant de convertir : le blanc est la valeur par défaut, donc la plupart des logos ressortent déjà propres. Si un fichier a été converti avec la mauvaise couleur, changez simplement l’échantillon et cliquez sur Tout reconvertir pour le régénérer.',
      },
      {
        question: 'Pourquoi le fichier JPG pèse-t-il parfois plus que le WebP d’origine ?',
        answer:
          'WebP compresse plus efficacement que JPG : un petit WebP réencodé en JPG à 88 % peut donc finir plus lourd que la source. C’est normal : vous échangez un peu de taille de fichier contre une compatibilité universelle. Baisser la qualité vers 75 % ramène généralement le JPG sous la taille d’origine.',
      },
      {
        question: 'Puis-je ouvrir le JPG converti dans Microsoft Word, PowerPoint ou Photoshop ?',
        answer:
          'Oui. Les fichiers .jpg RVB de base standard s’ouvrent dans pratiquement toutes les suites bureautiques, éditeurs, navigateurs et flux d’impression, y compris les anciennes versions qui n’ont jamais appris WebP. Cette compatibilité universelle est la raison principale de convertir.',
      },
      {
        question: 'Le convertisseur WebP en JPG supprime-t-il les métadonnées des fichiers WebP ?',
        answer:
          'Oui. Dessiner les pixels sur HTML5 Canvas supprime les données EXIF, XMP et de profil ICC intégrées : les JPG obtenus sont légers et sans données cachées de localisation ou d’appareil photo.',
      },
      {
        question: 'Comment vérifier que le JPG a bonne apparence avant de le télécharger ?',
        answer:
          'Cliquez sur Comparer sur n’importe quelle carte de résultat pour ouvrir la visionneuse partagée et glissez sur l’image pour inspecter les contours, le texte et les couleurs par rapport au WebP d’origine. Chaque carte affiche aussi les tailles d’origine et convertie : les surprises sont visibles avant l’enregistrement.',
      },
      {
        question: 'Puis-je changer la couleur de fond ou la qualité après avoir converti WebP en JPG ?',
        answer:
          'Oui. Choisissez un autre échantillon de fond ou déplacez le curseur de qualité à tout moment, puis cliquez sur Tout reconvertir pour régénérer chaque fichier chargé sans réimporter. Vos fichiers WebP d’origine restent dans la file jusqu’à ce que vous les effaciez.',
      },
      {
        question: 'Quel nom de fichier le JPG téléchargé conservera-t-il ?',
        answer:
          'Les téléchargements individuels conservent votre nom de fichier d’origine nettoyé avec l’extension .jpg : bannière.webp devient bannière.jpg. Les lots de deux fichiers ou plus sont exportés regroupés dans compressmypic_webp_to_jpg.zip.',
      },
      {
        question: 'Le convertisseur WebP en JPG fonctionne-t-il dans les navigateurs iPhone et Android ?',
        answer:
          'Oui. Le sélecteur de couleur de fond, le curseur de qualité, la visionneuse de comparaison et le téléchargement ZIP fonctionnent dans Safari sur iOS et Chrome sur Android, sans installer d’application. Les gros lots prennent simplement un peu plus de temps sur les processeurs de téléphone.',
      },
      {
        question: 'Quand choisir WebP en JPG plutôt que WebP en PNG ?',
        answer:
          'Choisissez JPG quand vous avez besoin du fichier le plus petit et compatible partout : pièces jointes d’e-mail, documents Office, portails d’envoi et imprimantes. Choisissez PNG quand vous devez conserver la transparence ou avez besoin d’une qualité sans perte et parfaite au pixel près pour l’édition.',
      },
      {
        question: 'Pourquoi une capture d’écran WebP au texte net semble-t-elle plus douce après conversion en JPG ?',
        answer:
          'JPEG utilise le sous-échantillonnage de chrominance, qui adoucit légèrement les contours à fort contraste, comme les lettres rouges ou bleues sur blanc. Monter la qualité à 92 % ou 95 % garde le texte des captures net, et la visionneuse Comparer permet de le vérifier avant de télécharger.',
      },
      {
        question: 'Puis-je convertir une image WebP qu’un site web a enregistrée sans extension de fichier ?',
        answer:
          'Pas directement : cette page filtre les entrées par l’extension .webp et le type MIME WebP ; renommez d’abord le fichier pour qu’il se termine par .webp. Si le fichier est en réalité un JPG ou un PNG mal étiqueté par le site, utilisez le convertisseur correspondant.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/png-to-jpg', '/image-converter'],
  },
  {
    slug: '/png-to-webp',
    name: 'Convertisseur PNG en WebP',
    shortDescription: 'Convertissez vos visuels PNG transparents en WebP compact et transparent.',
    category: 'convert',
    seoTitle: 'Convertisseur PNG en WebP gratuit en ligne – Transparent',
    seoDescription:
      'Convertissez vos PNG en WebP gratuitement en ligne, transparence conservée. Réduisez logos, icônes et captures dans votre navigateur, avec qualité et ZIP.',
    h1: 'Convertisseur PNG en WebP gratuit en ligne',
    subtitle:
      'Réduisez les logos PNG transparents lourds, les icônes et les captures d’écran en fichiers WebP compacts grâce à notre convertisseur PNG en WebP gratuit, directement dans votre navigateur. Conçu pour les développeurs web et les designers qui ont besoin de visuels transparents à chargement rapide, il convertit des fichiers PNG jusqu’à 25 Mo chacun avec 85 % de qualité par défaut et conserve tout le canal alpha, avec traitement par lots et téléchargements ZIP.',
    howToSteps: [
      {
        title: 'Déposez des visuels PNG jusqu’à 25 Mo chacun',
        description:
          'Importez des logos .png transparents, des icônes, des captures d’écran ou des découpes de produit dans la zone de dépôt.',
      },
      {
        title: 'Réglez la qualité de sortie WebP (20 %–100 %)',
        description:
          'Gardez les 85 % par défaut pour des visuels transparents nets, ou déplacez le curseur vers 20 % pour des fichiers minuscules et vers 100 % pour un maximum de détail, puis cliquez sur Tout reconvertir.',
      },
      {
        title: 'Vérifiez la transparence et le gain de taille',
        description:
          'Chaque carte affiche la taille PNG d’origine, la nouvelle taille WebP et le pourcentage économisé, avec la transparence visible sur un aperçu en damier.',
      },
      {
        title: 'Comparez les contours et les ombres côte à côte',
        description:
          'Cliquez sur Comparer sur n’importe quelle carte pour inspecter les contours semi-transparents, les dégradés et les ombres portées dans la visionneuse partagée.',
      },
      {
        title: 'Téléchargez les fichiers WebP ou Tout télécharger (ZIP)',
        description:
          'Enregistrez des fichiers .webp individuels ou regroupez le lot dans compressmypic_png_to_webp.zip en un clic.',
      },
    ],
    features: [
      {
        title: 'Transparence alpha complète conservée',
        description:
          'Contrairement à JPG, WebP conserve des contours semi-transparents propres et les ombres de vos PNG.',
      },
      {
        title: 'Des ressources jusqu’à 70 % plus légères',
        description:
          'Remplacez les images principales PNG de plusieurs mégaoctets et les découpes par des fichiers WebP élégants pour des sites plus rapides.',
      },
      {
        title: 'Vue partagée avant/après',
        description:
          'Inspectez les contours anticrénelés et les dégradés côte à côte avant de télécharger.',
      },
      {
        title: 'Traitement par lots et ZIP',
        description:
          'Convertissez des ensembles entiers d’icônes et de produits localement, sans limite d’envoi.',
      },
    ],
    faqs: [
      {
        question: 'Le convertisseur PNG en WebP conserve-t-il vraiment les fonds transparents ?',
        answer:
          'Oui. L’encodage WebP sur HTML5 Canvas conserve tout le canal alpha 8 bits : les pixels totalement transparents restent transparents et les contours semi-transparents, les ombres douces et les courbes anticrénelées gardent leur fondu délicat. L’aperçu du résultat montre la transparence sur un damier pour que vous le vérifiiez instantanément.',
      },
      {
        question: 'De combien WebP est-il plus léger que PNG pour la même image ?',
        answer:
          'Selon la complexité visuelle, convertir un PNG en WebP à 85 % réduit généralement la taille du fichier de 50 % à 80 %. Les PNG photographiques et les grandes captures d’écran gagnent le plus, tandis que les petites icônes plates à peu de couleurs peuvent gagner moins : la colonne Variation de chaque carte montre le résultat exact.',
      },
      {
        question: 'Les ombres semi-transparentes et les contours doux survivent-ils à la conversion PNG en WebP ?',
        answer:
          'Oui. WebP stocke les mêmes valeurs alpha 8 bits que PNG : les ombres portées, les halos et les contours adoucis se composent exactement comme dans l’original. Utilisez la visionneuse Comparer pour zoomer sur les contours et confirmer que la douceur semble identique avant de télécharger.',
      },
      {
        question: 'Quelle qualité convient le mieux aux logos PNG transparents convertis en WebP ?',
        answer:
          'Les 85 % par défaut sont idéaux pour la plupart des logos et icônes : les contours restent nets tandis que les fichiers se réduisent drastiquement. Pour un travail de qualité impression ou un art de ligne très fin, montez la qualité à 90 % ou 95 % ; descendre sous 70 % peut durcir les lignes fines et le petit texte.',
      },
      {
        question: 'Comment convertir tout un ensemble d’icônes de PNG en WebP en une fois ?',
        answer:
          'Déposez plusieurs fichiers .png jusqu’à 25 Mo chacun dans la file, choisissez une seule qualité pour tout le lot et téléchargez le tout dans compressmypic_png_to_webp.zip. Chaque icône est convertie séparément : un fichier endommagé ne bloque jamais les autres.',
      },
      {
        question: 'Les fichiers PNG sont-ils envoyés sur un serveur lors de la conversion en WebP ?',
        answer:
          'Non. La conversion s’exécute sur HTML5 Canvas dans votre propre onglet de navigateur : vos logos, captures d’écran et ressources de design ne quittent jamais votre ordinateur. Fermer l’onglet les efface de la mémoire du navigateur.',
      },
      {
        question: 'La conversion PNG en WebP change-t-elle les dimensions de l’image ?',
        answer:
          'Non. Le WebP exporté conserve 100 % de la largeur et de la hauteur en pixels du PNG d’origine : seuls le format du fichier et la compression changent. Utilisez ensuite le redimensionneur d’images si vous avez aussi besoin de dimensions plus petites pour le web.',
      },
      {
        question: 'Quelle est la taille maximale de PNG acceptée par le convertisseur WebP ?',
        answer:
          'Chaque fichier PNG peut peser jusqu’à 25 Mo, ce qui couvre les grandes captures d’écran, les captures Retina et les rendus de produit haute résolution. Comme la conversion s’exécute sur votre appareil, les gros fichiers sont traités à la vitesse de votre processeur local, sans temps d’attente d’envoi.',
      },
      {
        question: 'Pourquoi mon WebP converti pèse-t-il plus que le PNG d’origine ?',
        answer:
          'Les petits PNG plats à peu de couleurs — comme une icône à deux couleurs — sont déjà extrêmement efficaces, et l’encodage WebP avec perte peut ajouter du poids par-dessus. Si un fichier grossit, vérifiez la colonne Variation et conservez le PNG d’origine pour cette ressource ; WebP gagne sur les visuels photographiques et complexes.',
      },
      {
        question: 'Les sites web peuvent-ils utiliser directement les fichiers WebP convertis depuis PNG ?',
        answer:
          'Oui. Tous les navigateurs modernes affichent WebP nativement, et WordPress, Shopify, Wix et la plupart des créateurs de sites acceptent les envois WebP. Les logos WebP transparents fonctionnent exactement comme les PNG transparents dans les en-têtes, les boutons et les galeries de produits.',
      },
      {
        question: 'Que deviennent les métadonnées et les morceaux de texte d’un PNG pendant la conversion en WebP ?',
        answer:
          'Dessiner les pixels sur HTML5 Canvas supprime les morceaux de texte PNG intégrés, les notes de logiciel de création et les profils ICC. Les fichiers WebP obtenus restent légers et sans métadonnées cachées, ce qui est idéal pour publier des ressources en ligne.',
      },
      {
        question: 'Comment vérifier que la transparence a été conservée avant de télécharger le WebP ?',
        answer:
          'La miniature du résultat montre les zones transparentes sur un motif en damier, et le bouton Comparer ouvre une visionneuse partagée où vous pouvez glisser sur l’image pour confirmer que les contours se fondent en douceur. Si le fond semble uni au lieu d’être en damier, le PNG d’origine n’avait pas de transparence.',
      },
      {
        question: 'Peut-on ajuster la qualité après avoir converti PNG en WebP sans réimporter ?',
        answer:
          'Oui. Déplacez le curseur de qualité vers une nouvelle valeur à tout moment et cliquez sur Tout reconvertir pour régénérer chaque fichier chargé avec le nouveau réglage. Vos PNG importés restent dans la file : inutile de les glisser à nouveau.',
      },
      {
        question: 'WebP est-il meilleur que PNG pour les images principales d’un site web ?',
        answer:
          'Pour les images principales photographiques ou complexes, oui : WebP à 85 % a le même rendu que PNG et se charge bien plus vite. PNG reste gagnant pour les petites icônes plates, le pixel art ou toute ressource où la qualité mathématiquement sans perte est une exigence stricte.',
      },
      {
        question: 'Le convertisseur PNG en WebP fonctionne-t-il dans le navigateur de votre téléphone ?',
        answer:
          'Oui. Le curseur de qualité, la file par lots, la visionneuse de comparaison et le téléchargement ZIP fonctionnent dans Safari sur iOS et Chrome sur Android, sans installer d’application. Les gros lots prennent simplement un peu plus de temps sur les processeurs de téléphone.',
      },
      {
        question: 'Quel nom de fichier les fichiers WebP convertis depuis PNG reçoivent-ils ?',
        answer:
          'Les téléchargements individuels conservent votre nom de fichier d’origine nettoyé avec l’extension .webp : logo.png devient logo.webp. Les lots de deux fichiers ou plus sont exportés regroupés dans compressmypic_png_to_webp.zip.',
      },
      {
        question: 'Puis-je convertir une capture d’écran PNG avec du texte en WebP sans lettres floues ?',
        answer:
          'Oui : à 85 %–90 % de qualité, le texte des captures reste net, car WebP conserve bien les contours à fort contraste. Descendre sous 70 % peut adoucir les petites lettres : vérifiez dans la visionneuse Comparer et augmentez la qualité si le texte semble flou.',
      },
      {
        question: 'Cet outil conserve-t-il le profil de couleur ICC du PNG dans le WebP ?',
        answer:
          'Non. Le réencodage sur Canvas supprime le profil ICC intégré et rend les couleurs en sRGB standard, ce que les navigateurs utilisent pour l’affichage web. Pour la plupart des visuels d’écran, la différence visible est négligeable, mais le travail de couleur critique pour l’impression doit rester dans son format d’origine.',
      },
      {
        question: 'Quand choisir PNG en WebP plutôt que PNG en JPG ?',
        answer:
          'Choisissez WebP chaque fois que l’image doit rester transparente ou se charger vite sur un site web. Choisissez JPG uniquement quand la destination — un client e-mail, un document Office ou un ancien portail d’envoi — ne peut pas ouvrir WebP et que vous êtes prêt à renoncer à la transparence pour un fond uni.',
      },
      {
        question: 'Un PNG entrelacé peut-il être converti en WebP ici ?',
        answer:
          'Oui. Le décodeur d’images natif de votre navigateur lit proprement les flux PNG standard et entrelacés (Adam7) avant de les peindre sur Canvas : les fichiers entrelacés se convertissent exactement comme les PNG normaux.',
      },
    ],
    relatedSlugs: ['/webp-to-png', '/jpg-to-webp', '/web-image-optimizer', '/image-converter'],
  },
  {
    slug: '/webp-to-png',
    name: 'Convertisseur WebP en PNG',
    shortDescription: 'Convertissez vos images WebP en PNG sans perte avec la transparence intacte.',
    category: 'convert',
    seoTitle: 'Convertisseur WebP en PNG gratuit en ligne – Sans perte',
    seoDescription:
      'Convertissez vos WebP en PNG sans perte gratuitement en ligne. La transparence est conservée, les dimensions ne changent pas et les lots s’exportent en ZIP.',
    h1: 'Convertisseur WebP en PNG gratuit en ligne',
    subtitle:
      'Convertissez les téléchargements WebP en fichiers PNG universels sans perte grâce à notre convertisseur WebP en PNG gratuit, entièrement dans votre navigateur. Conçu pour les designers, les éditeurs et toute personne dont l’application ou l’imprimerie refuse WebP, il convertit des fichiers WebP jusqu’à 25 Mo chacun sans aucune perte de qualité et avec une transparence alpha complète, en plus du traitement par lots et des téléchargements ZIP.',
    howToSteps: [
      {
        title: 'Déposez des fichiers WebP jusqu’à 25 Mo chacun',
        description:
          'Importez une ou plusieurs images .webp issues de téléchargements, de messageries ou de sites web dans la zone de dépôt.',
      },
      {
        title: 'Attendez la conversion PNG sans perte',
        description:
          'Chaque WebP est rendu sur un canevas transparent et exporté automatiquement en PNG sans perte : il n’y a pas de curseur de qualité, car PNG est sans perte.',
      },
      {
        title: 'Vérifiez la transparence sur l’aperçu',
        description:
          'Les zones transparentes s’affichent sur un fond en damier, et chaque carte indique les tailles de fichier d’origine et convertie.',
      },
      {
        title: 'Comparez le PNG avec le WebP d’origine',
        description:
          'Cliquez sur Comparer sur n’importe quelle carte pour inspecter les contours, le texte et la transparence dans la visionneuse partagée.',
      },
      {
        title: 'Téléchargez les fichiers PNG ou Tout télécharger (ZIP)',
        description:
          'Enregistrez des fichiers .png individuels ou regroupez le lot dans compressmypic_webp_to_png.zip en un clic.',
      },
    ],
    features: [
      {
        title: 'Conserve la transparence alpha intacte',
        description:
          'Les logos et autocollants WebP transparents restent proprement transparents dans le PNG obtenu.',
      },
      {
        title: 'Compatibilité universelle avec les éditeurs',
        description:
          'Ouvrez les PNG convertis dans n’importe quel outil de design, présentation ou portail d’envoi, sans problème de compatibilité WebP.',
      },
      {
        title: 'Prise en charge de la file par lots',
        description:
          'Convertissez plusieurs téléchargements WebP en PNG en un clic et exportez un seul ZIP.',
      },
      {
        title: 'Traitement privé sur l’appareil',
        description:
          'Les fichiers ne quittent jamais votre appareil : la conversion a lieu dans la mémoire locale du navigateur.',
      },
    ],
    faqs: [
      {
        question: 'La conversion WebP en PNG est-elle vraiment sans perte ?',
        answer:
          'Oui. PNG stocke chaque pixel décodé exactement comme le navigateur l’a lu depuis le WebP, sans autre perte de compression. La seule limite de qualité est la compression que le WebP d’origine avait déjà appliquée : cet outil n’ajoute jamais une deuxième série de dommages avec perte.',
      },
      {
        question: 'Un logo WebP transparent restera-t-il transparent en PNG ?',
        answer:
          'Oui. Tout le canal alpha est transféré : les pixels transparents restent transparents et les contours semi-transparents conservent leur fondu délicat. La miniature du résultat montre la transparence sur un motif en damier pour que vous le confirmiez avant de télécharger.',
      },
      {
        question: 'Pourquoi le PNG obtenu pèse-t-il plus que le WebP importé ?',
        answer:
          'PNG utilise la compression DEFLATE sans perte, tandis que WebP utilise une compression moderne bien plus agressive : les mêmes pixels ont donc simplement besoin de plus d’octets en PNG. Le fichier plus gros est le prix honnête de la compatibilité universelle et de zéro perte de qualité supplémentaire.',
      },
      {
        question: 'Puis-je convertir un WebP animé en PNG ici ?',
        answer:
          'Un WebP animé est exporté en PNG fixe de sa première image, car PNG ne peut pas stocker le mouvement. Cette image fixe convient bien aux miniatures, aux documents et aux autocollants ; pour la version animée, conservez le fichier WebP d’origine.',
      },
      {
        question: 'Le PNG conserve-t-il la même largeur et hauteur que le WebP ?',
        answer:
          'Oui. Chaque .png converti conserve 100 % des dimensions exactes en pixels du WebP d’origine : rien n’est rogné ni redimensionné. Utilisez ensuite le redimensionneur d’images si vous avez aussi besoin de dimensions plus petites.',
      },
      {
        question: 'Les fichiers WebP sont-ils envoyés sur un serveur pendant la conversion en PNG ?',
        answer:
          'Non. La conversion s’exécute sur HTML5 Canvas dans votre propre onglet de navigateur : vos images ne sont jamais envoyées à un serveur, ni stockées, ni vues par qui que ce soit d’autre. Fermer l’onglet les efface de la mémoire du navigateur.',
      },
      {
        question: 'Puis-je convertir un lot d’images WebP en PNG en une fois ?',
        answer:
          'Oui. Déposez plusieurs fichiers .webp jusqu’à 25 Mo chacun dans la file et téléchargez le tout dans compressmypic_webp_to_png.zip. Chaque fichier est converti séparément : un fichier endommagé ne bloque jamais les autres.',
      },
      {
        question: 'Quelle taille peut atteindre un seul fichier WebP dans le convertisseur PNG ?',
        answer:
          'Chaque fichier WebP peut peser jusqu’à 25 Mo, ce qui couvre les téléchargements haute résolution et les grandes captures d’écran. Comme la conversion s’exécute sur votre appareil, les gros fichiers sont traités à la vitesse de votre processeur local, sans temps d’attente d’envoi.',
      },
      {
        question: 'Y a-t-il un curseur de qualité pour WebP en PNG ?',
        answer:
          'Non, et ce n’est pas nécessaire : PNG est un format sans perte, donc il n’y a aucun compromis qualité-taille à ajuster. L’outil affiche une note Encodage PNG sans perte au lieu d’un curseur, et chaque pixel est conservé avec exactitude.',
      },
      {
        question: 'Où puis-je utiliser les fichiers PNG convertis depuis WebP ?',
        answer:
          'Partout où PNG est accepté : Photoshop, Figma, Canva, PowerPoint, Word, imprimeries et portails d’envoi qui refusent WebP. PNG est le format d’image matricielle le plus universellement éditable, et c’est exactement la raison de cette conversion.',
      },
      {
        question: 'Le convertisseur WebP en PNG conserve-t-il les métadonnées comme EXIF ?',
        answer:
          'Non. Dessiner les pixels sur HTML5 Canvas supprime les données EXIF, XMP et de profil ICC intégrées : les PNG obtenus sont légers et sans données cachées de localisation ou d’appareil photo.',
      },
      {
        question: 'Comment confirmer que la transparence a survécu avant de télécharger le PNG ?',
        answer:
          'La miniature du résultat montre les zones transparentes sur un fond en damier, et le bouton Comparer ouvre une visionneuse partagée où vous pouvez glisser sur l’image pour confirmer que les contours se fondent en douceur. Si le fond semble uni, le WebP d’origine n’avait pas de transparence.',
      },
      {
        question: 'Puis-je convertir des captures d’écran WebP avec du texte en PNG sans perte de qualité ?',
        answer:
          'Oui. Comme PNG est sans perte, le texte des captures, les étiquettes d’interface et les lignes fines restent parfaits au pixel près — plus nets que n’importe quel réencodage JPG. C’est donc le bon choix quand une capture doit être éditée ou imprimée ensuite.',
      },
      {
        question: 'Quel nom de fichier le téléchargement PNG conservera-t-il ?',
        answer:
          'Les téléchargements individuels conservent votre nom de fichier d’origine nettoyé avec l’extension .png : autocollant.webp devient autocollant.png. Les lots de deux fichiers ou plus sont exportés regroupés dans compressmypic_webp_to_png.zip.',
      },
      {
        question: 'Puis-je convertir WebP en PNG depuis mon téléphone ?',
        answer:
          'Oui. La zone d’import, la file par lots, la visionneuse de comparaison et le téléchargement ZIP fonctionnent dans Safari sur iOS et Chrome sur Android, sans installer d’application. Les gros lots prennent simplement un peu plus de temps sur les processeurs de téléphone.',
      },
      {
        question: 'Quand choisir WebP en PNG plutôt que WebP en JPG ?',
        answer:
          'Choisissez PNG quand vous devez conserver la transparence ou avez besoin d’une qualité sans perte et parfaite au pixel près pour l’édition, le design ou l’impression. Choisissez JPG quand vous avez besoin du fichier le plus petit et largement compatible et que vous pouvez vivre avec un fond uni et une légère perte de compression.',
      },
      {
        question: 'Un fichier WebP sans extension peut-il être converti ?',
        answer:
          'Pas directement : cette page filtre les entrées par l’extension .webp et le type MIME WebP ; renommez d’abord le fichier pour qu’il se termine par .webp. Si le fichier est en réalité un JPG ou un PNG mal étiqueté par le site, utilisez le convertisseur correspondant.',
      },
      {
        question: 'Pourquoi un designer aurait-il besoin de PNG plutôt que de WebP ?',
        answer:
          'Les outils de design, les éditeurs par calques et les flux d’impression ont souvent besoin de PNG pour les masques, les sélections et les superpositions transparentes que WebP ne peut pas offrir dans leurs processus. PNG garantit aussi que chaque édition future part de pixels exacts, et non d’un décodage avec perte.',
      },
      {
        question: 'L’outil accepte-t-il les fichiers WebP à encodage sans perte ?',
        answer:
          'Oui. Les fichiers WebP sans perte se décodent proprement dans le navigateur et se réencodent en PNG sans perte avec chaque pixel conservé. Que le WebP d’origine ait été avec ou sans perte, la sortie PNG n’ajoute aucune perte de qualité supplémentaire.',
      },
      {
        question: 'Que se passe-t-il si un fichier WebP est endommagé ou n’est pas un vrai WebP ?',
        answer:
          'Ce fichier affiche un message d’erreur clair par fichier expliquant qu’il n’a pas pu être décodé, tandis que les autres fichiers de votre lot se convertissent normalement. Retélécharger le WebP d’origine depuis sa source résout généralement un fichier tronqué ou mal étiqueté.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/png-to-webp', '/jpg-to-png', '/image-converter'],
  },
  {
    slug: '/svg-to-png',
    name: 'Convertisseur SVG en PNG',
    shortDescription: 'Rastérisez vos visuels vectoriels SVG en PNG nets 1× à 4× avec transparence.',
    category: 'convert',
    seoTitle: 'Convertisseur SVG en PNG gratuit en ligne – 1x à 4x',
    seoDescription:
      'Convertissez vos vecteurs SVG en PNG transparent gratuitement en ligne. Exportez des PNG nets 1x, 2x, 3x ou 4x, avec des limites sur les ressources externes.',
    h1: 'Convertisseur SVG en PNG gratuit en ligne',
    subtitle:
      'Rastérisez les logos, icônes et illustrations SVG en PNG transparents et nets grâce à notre convertisseur SVG en PNG gratuit, entièrement dans votre navigateur. Conçu pour les designers et développeurs qui ont besoin d’exports haute résolution pour les diapositives, les documents et les boutiques d’applications, il rend les SVG autonomes à l’échelle 1×, 2×, 3× ou 4× (jusqu’à 8000 px) avec traitement par lots et téléchargements ZIP.',
    howToSteps: [
      {
        title: 'Déposez des fichiers SVG jusqu’à 25 Mo chacun',
        description:
          'Importez un ou plusieurs fichiers vectoriels .svg avec des formes, des chemins, des dégradés ou des styles intégrés.',
      },
      {
        title: 'Choisissez une échelle d’export de rastérisation (1×–4×)',
        description:
          'Choisissez 1× pour la taille intrinsèque du SVG, ou 2×–4× pour des exports PNG nets Retina et haute résolution.',
      },
      {
        title: 'Cliquez sur Tout reconvertir après avoir changé d’échelle',
        description:
          'Les changements d’échelle s’appliquent lors de la reconversion, pour que l’aperçu et le téléchargement correspondent à la taille choisie.',
      },
      {
        title: 'Vérifiez la note sur les ressources externes',
        description:
          'Les images externes, les feuilles de style et les polices web à l’intérieur d’un SVG sont bloquées par la sécurité du canevas du navigateur et n’apparaîtront pas dans le PNG.',
      },
      {
        title: 'Comparez le PNG rastérisé',
        description:
          'Cliquez sur Comparer sur n’importe quelle carte pour inspecter les contours nets et la transparence dans la visionneuse partagée.',
      },
      {
        title: 'Téléchargez les fichiers PNG ou Tout télécharger (ZIP)',
        description:
          'Enregistrez des fichiers .png individuels ou regroupez le lot dans compressmypic_svg_to_png.zip en un clic.',
      },
    ],
    features: [
      {
        title: 'Export haute résolution 1×, 2×, 3× et 4×',
        description:
          'Mettez à l’échelle proprement de petites icônes de 24 px ou des logos de 100 px jusqu’à 4× de résolution avant la rastérisation.',
      },
      {
        title: 'Fond transparent conservé',
        description:
          'Exporte des PNG nets avec canal alpha, prêts pour les présentations, les en-têtes web et les portfolios de design.',
      },
      {
        title: 'Portée honnête du canevas autonome',
        description:
          'Documente clairement que les formes et styles vectoriels SVG intégrés se rendent proprement, tandis que les URL d’images externes ou les polices web externes à l’intérieur des SVG peuvent être bloquées par l’environnement isolé de Canvas du navigateur.',
      },
      {
        title: 'Rastérisation SVG par lots',
        description:
          'Convertissez des packs entiers d’icônes en PNG en une seule passe et téléchargez un ZIP.',
      },
    ],
    faqs: [
      {
        question: 'Mon SVG utilise une photo liée : pourquoi est-elle absente du PNG ?',
        answer:
          'Pour des raisons de sécurité, les navigateurs isolent les fichiers SVG rendus sur HTML5 Canvas et bloquent la récupération des URL <image> externes : aucune photo liée depuis le web ne peut donc se charger pendant la rastérisation. Intégrez l’image directement dans le fichier SVG ou remplacez-la par des formes vectorielles intégrées, et le PNG se rendra complet.',
      },
      {
        question: 'Puis-je utiliser une police web à l’intérieur d’un SVG pour l’export PNG ?',
        answer:
          'Les polices web externes référencées par URL sont bloquées par le même environnement isolé de Canvas : le texte défini dans une police distante revient à une police système ou disparaît. Utilisez des polices système, convertissez le texte en contours dans votre éditeur ou intégrez les données de police directement dans le fichier SVG.',
      },
      {
        question: 'Quelle échelle choisir pour transformer une icône de 24 px en PNG net de 96 px ?',
        answer:
          'Choisissez 4× sous Échelle d’export de rastérisation et cliquez sur Tout reconvertir : une icône de 24 px devient un PNG net de 96 px, car les vecteurs sont rendus à nouveau à la taille plus grande au lieu d’étirer des pixels. Utilisez 2× pour un export de 48 px, et rappelez-vous que la sortie est limitée à 8000 px sur le côté le plus long.',
      },
      {
        question: 'Quel est le plus grand PNG qu’un SVG peut produire ici ?',
        answer:
          'L’échelle d’export est limitée à 8000 px sur le côté le plus long : un très grand SVG à 4× s’arrête donc à ce plafond. Pour la plupart des icônes et logos, la limite n’a jamais d’importance : un logo de 100 px à 4× ne fait que 400 px, très en dessous de la limite.',
      },
      {
        question: 'Le convertisseur SVG en PNG conserve-t-il le fond transparent ?',
        answer:
          'Oui. Sauf si le SVG lui-même peint un rectangle de fond, le PNG exporté conserve un fond propre avec transparence alpha, prêt pour les présentations, les en-têtes et les portfolios de design. L’aperçu montre la transparence sur un motif en damier.',
      },
      {
        question: 'Les fichiers SVG sont-ils envoyés sur un serveur ?',
        answer:
          'Non. La rastérisation s’exécute sur HTML5 Canvas dans votre propre onglet de navigateur : vos fichiers vectoriels ne quittent jamais votre ordinateur. Fermer l’onglet les efface de la mémoire du navigateur.',
      },
      {
        question: 'Puis-je convertir tout un pack d’icônes SVG en une fois ?',
        answer:
          'Oui. Déposez plusieurs fichiers .svg jusqu’à 25 Mo chacun dans la file, choisissez une seule échelle pour tout le lot et téléchargez le tout dans compressmypic_svg_to_png.zip. Chaque icône est rastérisée séparément.',
      },
      {
        question: 'Qu’est-ce qui fait qu’un SVG ne peut pas être rastérisé et donne une erreur ?',
        answer:
          'La cause la plus fréquente est un XML invalide : des balises non fermées, des attributs mal formés ou un fichier qui n’est pas vraiment du balisage SVG. Ouvrez le fichier dans un éditeur de texte ou un éditeur vectoriel, corrigez l’erreur de syntaxe et réessayez : le message d’erreur apparaît par fichier, donc les autres SVG se convertissent quand même.',
      },
      {
        question: 'Les dégradés et l’opacité à l’intérieur d’un SVG se rendent-ils correctement ?',
        answer:
          'Oui. Les dégradés linéaires et radiaux intégrés, les attributs d’opacité et les remplissages avec style définis à l’intérieur du SVG se rendent proprement sur Canvas. Seules les ressources récupérées hors du fichier — images externes, feuilles de style et polices — sont bloquées.',
      },
      {
        question: 'Le texte à l’intérieur de mon SVG sera-t-il exporté en texte PNG net ?',
        answer:
          'Oui, quand le texte utilise des polices système installées sur votre appareil, il est rastérisé avec netteté à n’importe quelle échelle. Le texte dans une police web externe revient à une police par défaut : convertissez le texte en contours dans Illustrator, Figma ou Inkscape pour des résultats garantis.',
      },
      {
        question: 'Puis-je convertir un SVG qui fait référence à un fichier CSS externe ?',
        answer:
          'Non. Les feuilles de style externes sont bloquées par la sécurité du canevas du navigateur : les classes définies dans un fichier .css lié ne s’appliqueront pas et les formes peuvent se rendre sans style. Déplacez les styles en ligne avec des attributs de style ou un bloc <style> à l’intérieur du SVG lui-même.',
      },
      {
        question: 'La sortie PNG du convertisseur SVG est-elle sans perte ?',
        answer:
          'Oui. Les pixels rastérisés sont enregistrés en PNG sans perte : les contours, le texte et les couleurs plates restent parfaits au pixel près à la taille exportée. Réexportez à une échelle plus grande si vous avez besoin de plus de détail : il n’y a pas de curseur de qualité, car PNG n’a pas d’étape avec perte.',
      },
      {
        question: 'Quelle taille fait le PNG à l’échelle 1× ?',
        answer:
          'À 1×, le PNG correspond aux dimensions intrinsèques du SVG selon ses attributs de largeur et de hauteur ou sa viewBox. Une icône 24×24 s’exporte en 24×24 pixels, tandis qu’un SVG sans taille intrinsèque utilise les dimensions de sa viewBox.',
      },
      {
        question: 'Puis-je convertir des fichiers SVG sur mon téléphone ?',
        answer:
          'Oui. La zone d’import, le sélecteur d’échelle, la visionneuse de comparaison et le téléchargement ZIP fonctionnent dans Safari sur iOS et Chrome sur Android, sans installer d’application. Les gros packs d’icônes prennent simplement un peu plus de temps sur les processeurs de téléphone.',
      },
      {
        question: 'Avec quel nom de fichier le PNG exporté depuis SVG est-il téléchargé ?',
        answer:
          'Les téléchargements individuels conservent votre nom de fichier d’origine nettoyé avec l’extension .png : logo.svg devient logo.png. Les lots de deux fichiers ou plus sont exportés regroupés dans compressmypic_svg_to_png.zip.',
      },
      {
        question: 'Le convertisseur accepte-t-il les animations SVG (SMIL ou CSS) ?',
        answer:
          'Non. La rastérisation capture une seule image statique du SVG : les animations SMIL et CSS ne passent pas dans le PNG. Pour un résultat animé, exportez l’animation en vidéo ou en GIF depuis votre outil de design.',
      },
      {
        question: 'Puis-je rastériser un SVG avec une image intégrée en data URI ?',
        answer:
          'En général, oui. Les images intégrées directement dans le fichier en data URI base64 font partie du SVG lui-même : rien n’est récupéré depuis l’extérieur et elles se rendent généralement. Les images liées avec des URL http sont celles qui sont bloquées par la sécurité de Canvas.',
      },
      {
        question: 'Quand utiliser SVG en PNG plutôt que conserver le SVG ?',
        answer:
          'Utilisez PNG quand la destination a besoin d’une image matricielle : PowerPoint, Word, publications sociales, captures de boutiques d’applications ou tout outil qui ne peut pas ouvrir SVG. Conservez le SVG quand le visuel doit rester infiniment évolutif sur un site web.',
      },
      {
        question: 'La conversion SVG en PNG change-t-elle les couleurs ?',
        answer:
          'Les couleurs se rendent comme définies dans le SVG, et la sortie est un PNG sRGB standard. Canvas supprime les profils ICC intégrés : la correspondance de couleur critique pour l’impression doit donc rester dans le fichier vectoriel d’origine ; pour les écrans, la différence visible est négligeable.',
      },
      {
        question: 'Quelle est la taille maximale de fichier SVG acceptée ?',
        answer:
          'Chaque fichier SVG peut peser jusqu’à 25 Mo, ce qui couvre même les fichiers illustrés énormes avec des milliers de chemins. Les SVG très complexes prennent simplement une ou deux secondes de plus à rastériser sur votre appareil.',
      },
    ],
    relatedSlugs: ['/favicon-generator', '/png-to-webp', '/image-resizer', '/image-converter'],
  },
  {
    slug: '/avif-to-jpg',
    name: 'Convertisseur AVIF en JPG',
    shortDescription: 'Convertissez vos images AVIF en JPG universel via le décodeur de votre navigateur.',
    category: 'convert',
    seoTitle: 'Convertisseur AVIF en JPG gratuit en ligne – Universel',
    seoDescription:
      'Convertissez vos images AVIF en JPG universel gratuitement en ligne. Décodage AVIF natif, couleur de fond pour la transparence, qualité réglable et export ZIP.',
    h1: 'Convertisseur AVIF en JPG gratuit en ligne',
    subtitle:
      'Transformez les images .avif modernes en fichiers .jpg compatibles partout grâce à notre convertisseur AVIF en JPG gratuit, qui utilise le décodeur AVIF intégré à votre navigateur. Conçu pour toute personne qui télécharge un fichier AVIF que son éditeur, son application bureautique ou son formulaire d’envoi ne peut pas ouvrir, il convertit des fichiers AVIF jusqu’à 25 Mo chacun avec 88 % de qualité par défaut, un sélecteur de couleur de fond et l’export ZIP par lots — sans rien envoyer en ligne.',
    howToSteps: [
      {
        title: 'Déposez des images AVIF jusqu’à 25 Mo chacune',
        description:
          'Importez des fichiers .avif dans un navigateur moderne avec décodage AVIF natif : Chrome, Edge, Firefox ou Safari.',
      },
      {
        title: 'Choisissez une couleur de fond pour les zones transparentes',
        description:
          'Choisissez Blanc (#ffffff), Noir (#000000), Gris clair (#f8fafc) ou n’importe quelle couleur hexadécimale personnalisée, car JPG ne peut pas stocker la transparence.',
      },
      {
        title: 'Réglez la qualité de sortie JPG (20 %–100 %)',
        description:
          'Gardez les 88 % par défaut, nets, ou déplacez le curseur vers 20 % pour des fichiers minuscules et vers 100 % pour un maximum de détail, puis cliquez sur Tout reconvertir.',
      },
      {
        title: 'Comparez le JPG avec l’AVIF d’origine',
        description:
          'Cliquez sur Comparer sur n’importe quelle carte pour vérifier le détail, la couleur et les contours dans la visionneuse partagée avant d’enregistrer.',
      },
      {
        title: 'Téléchargez les fichiers JPG ou Tout télécharger (ZIP)',
        description:
          'Enregistrez des fichiers .jpg individuels ou regroupez le lot dans compressmypic_avif_to_jpg.zip en un clic.',
      },
    ],
    features: [
      {
        title: 'Décodage AVIF natif du navigateur',
        description:
          'Exploite le décodeur AVIF matériel ou logiciel de votre navigateur moderne localement, sans aller-retour serveur.',
      },
      {
        title: 'Compatibilité de format honnête',
        description:
          'Conçu strictement pour décoder AVIF en JPG universel (ou utilisez les outils JPG, PNG et WebP pour d’autres formats — l’encodage ou la sortie AVIF ne sont pas proposés).',
      },
      {
        title: 'Sélecteur de couleur de fond pour la transparence',
        description:
          'Les zones AVIF transparentes se fondent proprement sur fond blanc ou sur la couleur hexadécimale personnalisée de votre choix.',
      },
      {
        title: 'Export ZIP par lots',
        description:
          'Convertissez plusieurs téléchargements AVIF en JPG en une seule session de navigateur.',
      },
    ],
    faqs: [
      {
        question: 'Qu’est-ce qu’AVIF et pourquoi certaines applications ne l’ouvrent-elles pas ?',
        answer:
          'AVIF est un format d’image moderne basé sur la compression vidéo AV1, qui enregistre les photos à des tailles bien plus petites que JPG. Comme il est plus récent, beaucoup d’éditeurs anciens, de suites bureautiques, d’imprimantes et de portails d’envoi n’ont jamais ajouté de décodeur AVIF : convertir en JPG est donc le moyen le plus rapide de rendre l’image utilisable partout.',
      },
      {
        question: 'Quels navigateurs peuvent décoder AVIF pour la conversion en JPG ?',
        answer:
          'Chrome, Edge, Firefox et Safari modernes décodent AVIF nativement dans le navigateur, et c’est ce qu’utilise cet outil. Si vous ouvrez la page dans un navigateur très ancien, chaque fichier affiche une erreur claire au lieu de se convertir : mettre à jour le navigateur résout le problème.',
      },
      {
        question: 'Que se passe-t-il si mon navigateur ne peut pas décoder un fichier AVIF ?',
        answer:
          'Le fichier affiche un message d’erreur explicite par fichier expliquant que votre navigateur n’a pas pu le décoder, tandis que les autres fichiers de votre lot se convertissent normalement. Passer à une version actuelle de Chrome, Firefox, Edge ou Safari résout le problème dans presque tous les cas.',
      },
      {
        question: 'La conversion AVIF en JPG fait-elle perdre de la qualité ?',
        answer:
          'Une certaine perte est inévitable, car JPG réencode les pixels avec une compression avec perte, alors qu’AVIF est bien plus efficace à qualité égale. Avec les 88 % par défaut, la différence est pratiquement invisible pour les photos ; seul un examen extrême des textures fines révèle un léger adoucissement.',
      },
      {
        question: 'Les zones transparentes d’un AVIF deviendront-elles noires dans le JPG ?',
        answer:
          'Non. Les zones transparentes sont remplies avec la couleur de fond que vous choisissez — blanc par défaut — pour que les logos et découpes obtiennent un fond uni propre au lieu d’un cadre noir. Choisissez Noir, Gris clair ou n’importe quelle couleur hexadécimale personnalisée avant de convertir.',
      },
      {
        question: 'Puis-je convertir proprement des images AVIF avec transparence en JPG ?',
        answer:
          'Oui. Le sélecteur de couleur de fond fond les contours semi-transparents en douceur sur le fond choisi : les ombres douces et les courbes anticrénelées semblent naturelles au lieu de se découper en contours durs. Vérifiez dans la visionneuse Comparer pour confirmer le fondu.',
      },
      {
        question: 'Les fichiers AVIF sont-ils envoyés sur un serveur ?',
        answer:
          'Non. Le décodage et le réencodage ont lieu localement avec le décodeur AVIF natif de votre navigateur et HTML5 Canvas : vos images ne quittent jamais votre appareil. Fermer l’onglet les efface de la mémoire du navigateur.',
      },
      {
        question: 'Comment convertir plusieurs téléchargements AVIF en JPG en une fois ?',
        answer:
          'Déposez plusieurs fichiers .avif jusqu’à 25 Mo chacun dans la file, choisissez une seule couleur de fond et une seule qualité pour tout le lot, puis téléchargez le tout dans compressmypic_avif_to_jpg.zip. Chaque fichier est converti séparément.',
      },
      {
        question: 'Quel est le plus gros fichier AVIF accepté ?',
        answer:
          'Chaque fichier AVIF peut peser jusqu’à 25 Mo, ce qui couvre les téléchargements haute résolution et les captures d’appareil photo. Comme le décodage s’exécute sur votre appareil, les gros fichiers sont traités à la vitesse de votre processeur local, sans temps d’attente d’envoi.',
      },
      {
        question: 'Existe-t-il un moyen de transformer un JPG en AVIF ici ?',
        answer:
          'Non. HTML5 Canvas ne peut pas encoder AVIF universellement dans tous les navigateurs : ce site ne fait donc que décoder AVIF vers des sorties JPG, PNG et WebP fiables. Pour une sortie AVIF, il vous faudrait un encodeur de bureau dédié.',
      },
      {
        question: 'Le JPG conserve-t-il les mêmes dimensions en pixels que l’AVIF ?',
        answer:
          'Oui. Chaque .jpg converti conserve 100 % de la largeur et de la hauteur exactes en pixels de l’AVIF d’origine : rien n’est rogné ni redimensionné. Utilisez ensuite le redimensionneur d’images si vous avez aussi besoin de dimensions plus petites.',
      },
      {
        question: 'Quel pourcentage de qualité convient le mieux aux photos AVIF ?',
        answer:
          'Les 88 % par défaut sont idéaux pour la plupart des photos : le détail reste net tandis que les fichiers restent petits. Pour les prises très détaillées ou les images que vous prévoyez d’éditer ensuite, montez la qualité à 92 % ou 95 % ; pour un partage rapide, 80 % suffit généralement.',
      },
      {
        question: 'Quel rendu ont les photos AVIF HDR ou à large gamme après conversion en JPG ?',
        answer:
          'Elles sont exportées en JPG sRGB standard : les hautes lumières HDR extrêmes sont donc ramenées dans la plage d’affichage normale et les couleurs très saturées à large gamme se décalent légèrement vers sRGB. Pour les photos quotidiennes, le résultat semble naturel ; pour le travail de couleur critique, conservez l’AVIF d’origine.',
      },
      {
        question: 'Puis-je vérifier le JPG converti avant de le télécharger ?',
        answer:
          'Oui. Cliquez sur Comparer sur n’importe quelle carte de résultat pour ouvrir la visionneuse partagée et glissez sur l’image pour inspecter le détail, la couleur et les contours par rapport à l’AVIF d’origine. Chaque carte affiche aussi les tailles d’origine et convertie.',
      },
      {
        question: 'Si le premier résultat semble mauvais, puis-je ajuster les réglages et réessayer ?',
        answer:
          'Oui. Choisissez un autre échantillon de fond ou déplacez le curseur de qualité à tout moment, puis cliquez sur Tout reconvertir pour régénérer chaque fichier chargé sans réimporter. Vos fichiers AVIF d’origine restent dans la file jusqu’à ce que vous les effaciez.',
      },
      {
        question: 'Avec quel nom le JPG téléchargé est-il enregistré ?',
        answer:
          'Les téléchargements individuels conservent votre nom de fichier d’origine nettoyé avec l’extension .jpg : photo.avif devient photo.jpg. Les lots de deux fichiers ou plus sont exportés regroupés dans compressmypic_avif_to_jpg.zip.',
      },
      {
        question: 'Le convertisseur AVIF en JPG fonctionne-t-il dans le navigateur de votre téléphone ?',
        answer:
          'Oui, dans les navigateurs de téléphone modernes avec décodage AVIF natif, comme Chrome actuel sur Android et Safari sur iOS. Le sélecteur de couleur de fond, le curseur de qualité et le téléchargement ZIP fonctionnent sans installer d’application.',
      },
      {
        question: 'Quand convertir AVIF en JPG plutôt qu’AVIF en PNG ?',
        answer:
          'Choisissez JPG quand vous avez besoin d’un fichier petit et universellement compatible pour l’e-mail, Office ou les portails d’envoi. Choisissez PNG quand vous devez conserver la transparence ou avez besoin d’une qualité sans perte et parfaite au pixel près pour l’édition — en sachant que les fichiers PNG seront bien plus gros.',
      },
      {
        question: 'Pourquoi le JPG pèse-t-il parfois plus que l’AVIF ?',
        answer:
          'AVIF compresse bien plus efficacement que JPG : un petit AVIF réencodé en JPG à 88 % peut donc facilement finir plus lourd que la source. C’est normal : vous échangez de la taille de fichier contre une compatibilité universelle. Baisser la qualité vers 75 % réduit généralement le JPG à nouveau.',
      },
      {
        question: 'Le convertisseur supprime-t-il les métadonnées des fichiers AVIF ?',
        answer:
          'Oui. Dessiner les pixels sur HTML5 Canvas supprime les données EXIF, XMP et de profil ICC intégrées : les JPG obtenus sont légers et sans données cachées de localisation ou d’appareil photo.',
      },
    ],
    relatedSlugs: ['/webp-to-jpg', '/heic-to-jpg', '/jpg-to-webp', '/image-converter'],
  },
  {
    slug: '/bmp-to-jpg',
    name: 'Convertisseur BMP en JPG',
    shortDescription: 'Convertissez vos énormes bitmaps BMP non compressés en fichiers JPG compacts.',
    category: 'convert',
    seoTitle: 'Convertisseur BMP en JPG gratuit en ligne – Plus léger',
    seoDescription:
      'Convertissez vos bitmaps BMP non compressés en JPG compact gratuitement en ligne. Réduisez la taille de 85 à 95 % en privé, avec qualité réglable et ZIP.',
    h1: 'Convertisseur BMP en JPG gratuit en ligne',
    subtitle:
      'Transformez les énormes bitmaps BMP Windows non compressés en fichiers JPG légers et faciles à partager grâce à notre convertisseur BMP en JPG gratuit, directement dans votre navigateur. Conçu pour celles et ceux qui nettoient des dossiers de captures .bmp, de scans ou d’exports Paint, il convertit des fichiers BMP jusqu’à 25 Mo chacun avec 88 % de qualité par défaut — et les réduit généralement de 85 % à 95 % — avec traitement par lots et téléchargements ZIP.',
    howToSteps: [
      {
        title: 'Déposez des bitmaps BMP jusqu’à 25 Mo chacun',
        description:
          'Importez un ou plusieurs fichiers .bmp issus de captures d’écran Windows, de scans ou de dossiers anciens dans la zone de dépôt.',
      },
      {
        title: 'Réglez la qualité de sortie JPG (20 %–100 %)',
        description:
          'Gardez les 88 % par défaut, nets, ou déplacez le curseur vers 20 % pour des fichiers minuscules et vers 100 % pour un maximum de détail, puis cliquez sur Tout reconvertir.',
      },
      {
        title: 'Vérifiez le gain de taille sur chaque carte',
        description:
          'Chaque résultat affiche l’énorme taille BMP d’origine, la taille JPG compacte et le pourcentage économisé.',
      },
      {
        title: 'Comparez le JPG avec le BMP d’origine',
        description:
          'Cliquez sur Comparer sur n’importe quelle carte pour vérifier que le texte et le détail sont restés nets dans la visionneuse partagée.',
      },
      {
        title: 'Téléchargez les fichiers JPG ou Tout télécharger (ZIP)',
        description:
          'Enregistrez des fichiers .jpg individuels ou regroupez le lot dans compressmypic_bmp_to_jpg.zip en un clic.',
      },
    ],
    features: [
      {
        title: 'Réduction de taille typique de 90 % ou plus',
        description:
          'Les bitmaps BMP non compressés stockent des pixels bruts ; la compression JPG les réduit drastiquement pour l’e-mail et le web.',
      },
      {
        title: 'Conserve les dimensions en pixels',
        description:
          'Maintient la largeur et la hauteur exactes de l’original tout en modernisant le format du fichier.',
      },
      {
        title: 'File par lots et téléchargement ZIP',
        description:
          'Nettoyez des dossiers de captures .bmp ou de scans anciens en une seule passe rapide.',
      },
      {
        title: 'Confidentialité 100 % sur l’appareil',
        description:
          'Aucun envoi : la conversion a lieu localement sur votre ordinateur.',
      },
    ],
    faqs: [
      {
        question: 'Pourquoi les fichiers BMP sont-ils si énormes comparés à JPG ?',
        answer:
          'BMP est un format non compressé : il stocke presque chaque pixel sous forme de données de couleur brutes avec presque aucune compression, donc une seule capture d’écran peut peser des dizaines de mégaoctets. JPG utilise une compression intelligente avec perte qui écarte les données que vos yeux remarquent à peine, et c’est pourquoi la même image se réduit drastiquement.',
      },
      {
        question: 'Combien de taille de fichier puis-je économiser en convertissant BMP en JPG ?',
        answer:
          'Comme les fichiers BMP sont généralement non compressés, convertir en JPG à 88 % réduit couramment la taille du fichier de 85 % à 95 % : un bitmap de 10 Mo devient souvent un JPG de 500 Ko à 1,5 Mo. Les scans photographiques gagnent le plus, tandis que les visuels plats d’une seule couleur gagnent un peu moins.',
      },
      {
        question: 'La conversion BMP en JPG change-t-elle les dimensions de l’image ?',
        answer:
          'Non. Chaque .jpg converti conserve 100 % de la largeur et de la hauteur exactes en pixels du BMP d’origine : rien n’est rogné ni redimensionné. Utilisez ensuite le redimensionneur d’images si vous avez aussi besoin de dimensions plus petites.',
      },
      {
        question: 'Quelle qualité garde les captures d’écran BMP lisibles ?',
        answer:
          'Les 88 % par défaut gardent nets le texte et les détails d’interface des captures et éliminent la majeure partie du poids du bitmap. Pour les scans avec de petits caractères ou de petites polices, montez la qualité à 92 % ou 95 % ; pour un partage rapide, 80 % suffit généralement.',
      },
      {
        question: 'Les fichiers BMP sont-ils envoyés sur un serveur ?',
        answer:
          'Non. La conversion s’exécute sur HTML5 Canvas dans votre propre onglet de navigateur : vos captures d’écran et scans ne quittent jamais votre ordinateur. Fermer l’onglet les efface de la mémoire du navigateur.',
      },
      {
        question: 'Comment convertir par lots un dossier plein de scans BMP ?',
        answer:
          'Déposez plusieurs fichiers .bmp jusqu’à 25 Mo chacun dans la file, choisissez une seule qualité pour tout le lot et téléchargez le tout dans compressmypic_bmp_to_jpg.zip. Chaque fichier est converti séparément.',
      },
      {
        question: 'Quel est le plus gros fichier BMP accepté ?',
        answer:
          'Chaque fichier BMP peut peser jusqu’à 25 Mo, ce qui couvre les grandes captures d’écran et les scans haute résolution. Comme la conversion s’exécute sur votre appareil, les gros fichiers sont traités à la vitesse de votre processeur local, sans temps d’attente d’envoi.',
      },
      {
        question: 'Puis-je convertir des fichiers BMP sans connexion Internet une fois la page ouverte ?',
        answer:
          'Oui. Une fois la page chargée dans votre navigateur, la conversion s’exécute entièrement en JavaScript local et HTML5 Canvas, sans appel serveur. Vous n’aurez besoin d’Internet à nouveau que pour charger la page elle-même ou télécharger les fichiers terminés.',
      },
      {
        question: 'Le JPG s’ouvrira-t-il dans n’importe quel programme ?',
        answer:
          'Oui. Les fichiers .jpg RVB de base standard s’ouvrent dans pratiquement toutes les visionneuses, éditeurs, navigateurs, clients e-mail et imprimantes — bien plus largement que BMP, que beaucoup d’applications et de sites web modernes n’acceptent plus.',
      },
      {
        question: 'Le convertisseur conserve-t-il la transparence des BMP ?',
        answer:
          'Les fichiers BMP portent rarement un canal alpha utilisable, et JPG n’a aucun support de transparence : les JPG obtenus sont donc toujours opaques. Si votre visuel a besoin de transparence, convertissez en PNG ou WebP, qui conservent l’alpha.',
      },
      {
        question: 'Que devient la profondeur de couleur d’un BMP pendant la conversion en JPG ?',
        answer:
          'Le navigateur décode le BMP et le rend via le chemin de couleur standard de Canvas, en exportant un JPG sRGB normal. Les BMP à haute profondeur de couleur conservent leurs couleurs visibles ; seules les variantes indexées ou 1 bit très exotiques peuvent nécessiter un nouvel enregistrement dans un éditeur d’abord.',
      },
      {
        question: 'Puis-je vérifier la qualité avant de télécharger le JPG ?',
        answer:
          'Oui. Cliquez sur Comparer sur n’importe quelle carte de résultat pour ouvrir la visionneuse partagée et glissez sur l’image pour inspecter le texte, les lignes et le détail par rapport au BMP d’origine. Chaque carte affiche aussi la taille exacte économisée.',
      },
      {
        question: 'Est-il possible d’ajuster le curseur de qualité après la première conversion BMP en JPG ?',
        answer:
          'Oui. Déplacez le curseur de qualité vers une nouvelle valeur à tout moment et cliquez sur Tout reconvertir pour régénérer chaque fichier chargé sans réimporter. Vos fichiers BMP d’origine restent dans la file jusqu’à ce que vous les effaciez.',
      },
      {
        question: 'Quel nom le JPG téléchargé reçoit-il ?',
        answer:
          'Les téléchargements individuels conservent votre nom de fichier d’origine nettoyé avec l’extension .jpg : scan.bmp devient scan.jpg. Les lots de deux fichiers ou plus sont exportés regroupés dans compressmypic_bmp_to_jpg.zip.',
      },
      {
        question: 'Le convertisseur BMP en JPG fonctionne-t-il dans le navigateur de votre téléphone ?',
        answer:
          'Oui. La zone d’import, le curseur de qualité, la visionneuse de comparaison et le téléchargement ZIP fonctionnent dans Safari sur iOS et Chrome sur Android, sans installer d’application. Les gros lots prennent simplement un peu plus de temps sur les processeurs de téléphone.',
      },
      {
        question: 'Quand BMP en JPG est-il meilleur que BMP en PNG ?',
        answer:
          'Choisissez JPG quand vous avez besoin du fichier le plus petit et le plus facile à partager pour l’e-mail, le web ou la messagerie. Choisissez PNG quand vous avez besoin d’une qualité d’archive sans perte ou prévoyez d’éditer l’image ensuite, en sachant que les fichiers PNG resteront bien plus gros que JPG.',
      },
      {
        question: 'Les anciens fichiers BMP 1 bit ou 8 bits peuvent-ils être convertis ?',
        answer:
          'La plupart des fichiers BMP standard 1 bit, 8 bits, 24 bits et 32 bits se décodent proprement dans les navigateurs modernes. Les variantes très inhabituelles, comme les BMP à compression RLE ou au format OS/2, peuvent afficher une erreur par fichier : les réenregistrer en BMP 24 bits dans Paint ou un éditeur résout le problème.',
      },
      {
        question: 'Pourquoi les fichiers BMP scannés se compressent-ils si bien en JPG ?',
        answer:
          'Les scans contiennent des dégradés doux, une texture de papier et un détail photographique que la compression cosinus de JPEG gère très efficacement. Les zones plates d’une seule couleur se compressent encore mieux : c’est pourquoi un scan de 10 Mo peut descendre sous 1 Mo à 88 % de qualité.',
      },
      {
        question: 'La conversion BMP en JPG supprime-t-elle les métadonnées ?',
        answer:
          'Oui. Dessiner les pixels sur HTML5 Canvas supprime les blocs de métadonnées intégrés : les JPG obtenus sont légers et sans détails cachés. Les fichiers BMP portent rarement beaucoup de métadonnées de toute façon.',
      },
      {
        question: 'Puis-je convertir directement des fichiers BMP d’un appareil photo numérique ou d’un scanner ?',
        answer:
          'Oui, si le fichier est enregistré en .bmp : la plupart des scanners et des anciens appareils photo proposent BMP comme option d’export. Les appareils modernes enregistrent généralement déjà en JPG : vérifiez d’abord l’extension du fichier et utilisez le convertisseur correspondant si ce n’est pas un bitmap.',
      },
    ],
    relatedSlugs: ['/png-to-jpg', '/image-converter', '/bulk-image-converter', '/compress-image-to-100kb'],
  },
  {
    slug: '/remove-background',
    name: 'Suppression d’arrière-plan par IA',
    shortDescription: 'Supprimez l’arrière-plan de vos images avec l’IA dans le navigateur et exportez des PNG transparents.',
    category: 'ai-tools',
    seoTitle: 'Suppression d’arrière-plan gratuite en ligne – IA',
    seoDescription:
      'Supprimez l’arrière-plan de vos images gratuitement avec l’IA, sans inscription. Téléchargez un PNG transparent ou un fond blanc, noir ou personnalisé.',
    h1: 'Suppresseur d’arrière-plan IA gratuit en ligne',
    subtitle:
      'Supprimez l’arrière-plan des portraits, des photos de produit, des animaux et des logos grâce à notre suppresseur d’arrière-plan IA gratuit, qui fonctionne entièrement dans votre navigateur. Conçu pour les vendeurs, les créateurs et les designers qui ont besoin de découpes propres rapidement, il charge un modèle IA compact une seule fois (environ 35 Mo, mis en cache ensuite), traite une photo à la fois jusqu’à 20 Mo et exporte un PNG transparent — ou place votre découpe sur un fond blanc, noir ou personnalisé.',
    howToSteps: [
      {
        title: 'Attendez le chargement du modèle IA',
        description:
          'Lors de la première utilisation, la page télécharge le modèle compact isnet_quint8 (environ 35 Mo) une seule fois et le met en cache dans votre navigateur ; les visites suivantes démarrent instantanément.',
      },
      {
        title: 'Déposez une photo jusqu’à 20 Mo',
        description:
          'Importez une seule photo JPG, PNG, WebP, HEIC, BMP ou AVIF — un fichier à la fois — dans la zone de dépôt.',
      },
      {
        title: 'Laissez l’IA découper votre sujet',
        description:
          'Le modèle isole votre sujet localement dans votre navigateur et affiche l’original à côté de la découpe transparente.',
      },
      {
        title: 'Comparez la découpe avec l’original',
        description:
          'Cliquez sur Comparaison partagée pour glisser sur la vue avant/après et vérifier les contours autour des cheveux, de la fourrure et des détails fins.',
      },
      {
        title: 'Choisissez transparent, blanc, noir ou personnalisé',
        description:
          'Gardez le PNG transparent, ou passez à un fond blanc, noir ou de couleur personnalisée avant de télécharger.',
      },
      {
        title: 'Téléchargez votre découpe',
        description:
          'Enregistrez le PNG transparent (nommé d’après votre photo avec _no_bg ajouté) ou la version à fond uni, puis cliquez sur Nouvelle image pour la photo suivante.',
      },
    ],
    features: [
      {
        title: 'Segmentation IA 100 % sur l’appareil',
        description:
          'Propulsé par le modèle ONNX léger isnet_quint8 qui s’exécute localement dans votre navigateur : vos photos ne sont jamais envoyées sur un serveur.',
      },
      {
        title: 'Export instantané de PNG transparent',
        description:
          'Téléchargez des découpes PNG nettes avec transparence alpha, prêtes pour les annonces e-commerce, les miniatures, les présentations et le travail de design.',
      },
      {
        title: 'Changeur de fond uni intégré',
        description:
          'Prévisualisez votre découpe et exportez-la sur fond blanc pur, noir intense ou n’importe quelle couleur hexadécimale personnalisée sans ouvrir une autre application.',
      },
      {
        title: 'Gratuit, sans inscription et sans filigrane',
        description:
          'Des découpes en pleine résolution sans limite quotidienne, sans compte et sans filigrane.',
      },
    ],
    faqs: [
      {
        question: 'La suppression d’arrière-plan envoie-t-elle ma photo sur un serveur ?',
        answer:
          'Non. Le modèle IA se télécharge une seule fois dans votre navigateur et exécute l’inférence entièrement sur votre appareil : votre photo n’est jamais envoyée, ni stockée, ni vue par qui que ce soit d’autre. Fermer l’onglet efface tout de la mémoire du navigateur.',
      },
      {
        question: 'Pourquoi la première découpe est-elle plus lente que les suivantes ?',
        answer:
          'Lors de la première visite, votre navigateur télécharge le modèle compact isnet_quint8 (environ 35 Mo) et initialise le moteur IA WebAssembly, ce qui prend quelques secondes supplémentaires. Ensuite, le modèle est mis en cache : les photos suivantes se traitent donc bien plus vite.',
      },
      {
        question: 'Quelle est la taille du modèle IA que mon navigateur télécharge ?',
        answer:
          'Environ 35 Mo, téléchargés une seule fois lors de la première utilisation puis mis en cache par votre navigateur. Le petit modèle quantifié isnet_quint8 est ce qui rend la suppression dans le navigateur possible sans serveur : les modèles cloud plus gros nécessiteraient un envoi et une API payante.',
      },
      {
        question: 'Puis-je utiliser le suppresseur d’arrière-plan sans Internet après le premier chargement ?',
        answer:
          'En grande partie, oui : une fois le modèle mis en cache, la suppression réelle s’exécute entièrement hors ligne dans votre navigateur. Vous avez toujours besoin d’Internet pour charger la page elle-même la première fois, et le modèle en cache peut être effacé si le navigateur nettoie les données du site.',
      },
      {
        question: 'Quels types de photos produisent les contours les plus propres ?',
        answer:
          'Les photos avec un sujet clair et un bon contraste avec l’arrière-plan fonctionnent le mieux : portraits, photos de produit, animaux, voitures et logos aux contours nets. Un éclairage uniforme et un décor simple donnent au modèle le travail le plus facile.',
      },
      {
        question: 'Puis-je supprimer l’arrière-plan d’une photo avec un paysage désordonné ou très chargé ?',
        answer:
          'Oui, mais attendez-vous à des contours plus doux : quand le sujet se fond dans un arrière-plan chargé, le petit modèle sur l’appareil doit deviner où le sujet se termine. Un décor plus propre, un meilleur éclairage ou un recadrage plus serré avant l’import donnent une découpe visiblement meilleure.',
      },
      {
        question: 'Que deviennent les cheveux fins, la fourrure ou les contours transparents ?',
        answer:
          'Les mèches fines et la fourrure vaporeuse sont le cas le plus difficile pour un modèle compact quantifié : les contours peuvent donc sembler légèrement doux ou perdre quelques cheveux. Vérifiez la vue Comparaison partagée : pour la plupart des portraits et des photos de produit, le résultat est propre, mais le masquage de cheveux parfait au pixel près est une limite connue.',
      },
      {
        question: 'Comment placer ma découpe sur un fond blanc pur pour Amazon ou eBay ?',
        answer:
          'Une fois la découpe prête, choisissez Blanc sous Option de remplissage d’arrière-plan et cliquez sur Télécharger avec fond blanc. Les places de marché préfèrent les JPG et PNG nets à fond blanc opaque pour les miniatures principales de produit, et c’est exactement ce que cela exporte.',
      },
      {
        question: 'Quels formats de fichier puis-je importer ?',
        answer:
          'JPG, PNG, WebP, HEIC, BMP et AVIF : l’outil accepte le même ensemble étendu d’images que le reste du site. Les photos HEIC d’iPhone sont converties automatiquement en une image décodable avant que le modèle ne s’exécute.',
      },
      {
        question: 'Quelle est la taille maximale de photo acceptée ?',
        answer:
          'Chaque photo peut peser jusqu’à 20 Mo, et l’outil traite une photo à la fois. Cela couvre les photos haute résolution de téléphone et d’appareil photo ; les très gros fichiers prennent simplement un peu plus de temps, car le modèle s’exécute sur votre appareil.',
      },
      {
        question: 'Puis-je supprimer les arrière-plans de plusieurs photos en une fois ?',
        answer:
          'Non, cet outil gère une photo à la fois pour que le modèle IA puisse concentrer toute la mémoire de l’appareil sur une seule découpe propre. Cliquez sur Nouvelle image après chaque téléchargement pour traiter la photo suivante : il n’y a pas de limite quotidienne.',
      },
      {
        question: 'La découpe conserve-t-elle la résolution de la photo d’origine ?',
        answer:
          'Oui. Le PNG transparent exporté conserve 100 % de la largeur et de la hauteur en pixels de la photo d’origine : une photo de produit de 4000 px reste donc de 4000 px. Utilisez ensuite le redimensionneur d’images si vous avez besoin d’une version plus petite pour le web.',
      },
      {
        question: 'Pourquoi mon PNG transparent pèse-t-il plus que la photo d’origine ?',
        answer:
          'PNG stocke chaque pixel de la découpe sans perte, tandis que votre JPG d’origine était fortement compressé : une grande découpe détaillée peut donc facilement peser plus qu’une petite source JPG. C’est normal : vous échangez de la taille de fichier contre de la transparence et des contours parfaits au pixel près.',
      },
      {
        question: 'Puis-je relancer la suppression sur la même photo ?',
        answer:
          'Oui. Cliquez sur Relancer la suppression pour traiter à nouveau la même photo : utile si le premier passage a pris une ombre pour une partie du sujet ou si vous voulez comparer les résultats. Le modèle est déterministe : le résultat est donc généralement identique, sauf si l’entrée a changé.',
      },
      {
        question: 'Que faire si une partie du sujet manque dans la découpe ?',
        answer:
          'Vérifiez d’abord la vue Comparaison partagée pour voir exactement ce qui a été découpé. Les sujets qui se fondent dans l’arrière-plan — vêtements de même couleur, verre ou camouflage — trompent le modèle ; essayez une photo avec un contraste sujet-arrière-plan plus fort ou recadrez plus près du sujet avant d’importer.',
      },
      {
        question: 'Y a-t-il un filigrane sur le PNG téléchargé ?',
        answer:
          'Non. Les téléchargements sont des découpes en pleine résolution sans filigrane, sans logo et sans marque ajoutée. Il n’y a pas non plus d’inscription, de compte ni de limite quotidienne sur le nombre de photos dont vous pouvez supprimer l’arrière-plan.',
      },
      {
        question: 'La suppression d’arrière-plan fonctionne-t-elle dans le navigateur de votre téléphone ?',
        answer:
          'Oui. Le modèle se télécharge et s’exécute dans Safari sur iOS et Chrome sur Android, avec les mêmes contrôles d’import, de comparaison et de téléchargement. Sur téléphone, les grosses photos prennent plus de temps, car l’IA s’exécute sur le processeur du téléphone : le Wi-Fi aide pour le premier téléchargement du modèle.',
      },
      {
        question: 'En quoi cet outil diffère-t-il des outils payants comme remove.bg ?',
        answer:
          'Cet outil est gratuit, privé et s’exécute entièrement dans votre navigateur sans envoi ni compte, tandis que les outils cloud payants traitent votre photo sur leurs serveurs. Le compromis est la qualité sur les contours délicats : le petit modèle sur l’appareil est excellent pour les sujets clairs, mais ne peut pas égaler les grands modèles cloud sur les cheveux fins ou les scènes chargées.',
      },
      {
        question: 'Puis-je utiliser la découpe dans Canva, Photoshop ou PowerPoint ?',
        answer:
          'Oui. Le PNG transparent exporté s’ouvre directement dans Canva, Photoshop, Figma, PowerPoint et Google Slides, où vous pouvez le placer sur n’importe quel arrière-plan, diapositive ou design. Le téléchargement à fond uni fonctionne de la même façon pour les applications qui ont besoin d’une image opaque.',
      },
      {
        question: 'Que devient ma photo après avoir fermé l’onglet du suppresseur d’arrière-plan ?',
        answer:
          'Rien n’est stocké nulle part : le traitement a lieu dans la mémoire du navigateur, la photo n’est jamais envoyée et fermer l’onglet efface l’image et la découpe. Seul le modèle IA mis en cache reste dans le navigateur pour une utilisation future plus rapide.',
      },
    ],
    relatedSlugs: ['/add-background-to-image', '/image-resizer', '/png-to-webp'],
  },
];

export const TOOL_BY_SLUG_FR: Record<string, ToolDefinition> = Object.fromEntries(
  TOOLS_REGISTRY_FR.map((t) => [t.slug, t])
);
