// French (fr) overrides for CompressMyPic blog articles.
// Keys are article ids; values override the English version (no `slug` —
// the localized slug lives in ./slugs.ts). Empty until Batch 4 localizes
// articles. Natural international French.
import type { BlogArticleLocaleOverride } from '../../types/blog';

export const FR_BLOG_OVERRIDES: Record<string, BlogArticleLocaleOverride> = {
  "compress-image-to-50kb-guide": {
    title: "Compresser une image à 50 Ko : guide complet",
    description: "Apprenez à compresser n’importe quelle image à 50 Ko sans la ruiner. Formats, qualité, portails, et un outil gratuit dans le navigateur qui atteint la cible.",
    readingMinutes: 13,
  },
  "how-to-compress-image-to-50kb": {
    title: "Comment compresser une image à 50 Ko",
    description: "Un guide pratique, étape par étape, pour réduire n’importe quelle photo sous 50 Ko : choisir le bon fichier, choisir le format.",
    readingMinutes: 12,
  },
  "image-size-50kb-vs-100kb-vs-200kb": {
    title: "50, 100 ou 200 Ko : quelle taille ?",
    description: "Comparez les images de 50 Ko, 100 Ko et 200 Ko : différences de qualité, meilleurs cas d’usage, et une règle simple pour choisir la bonne taille.",
    readingMinutes: 12,
  },
  "compress-image-to-100kb-guide": {
    title: "Compresser une image à 100 Ko",
    description: "Tout sur la compression des images à 100 Ko : pourquoi c’est le juste milieu idéal, comment la qualité se maintient, les formats.",
    readingMinutes: 12,
  },
  "how-to-reduce-image-to-100kb": {
    title: "Comment réduire une image à 100 Ko",
    description: "Étape par étape : réduisez n’importe quelle photo à 100 Ko pour les CV, les portails, les blogs et les e-mails. Choix de format et conseils de lot inclus.",
    readingMinutes: 12,
  },
  "100kb-image-quality-formats": {
    title: "JPG, PNG ou WebP : quel format ?",
    description: "Quel format rend le mieux à 100 Ko ? Comparez le JPG, le PNG et le WebP : qualité, texte, transparence, et le bon choix pour les photos.",
    readingMinutes: 13,
  },
  "compress-image-to-200kb-guide": {
    title: "Compresser une image à 200 Ko",
    description: "Le guide complet pour compresser les images à 200 Ko : qualité, formats, usage e-commerce, blogs, et l’outil gratuit dans le navigateur qui atteint la cible.",
    readingMinutes: 12,
  },
  "how-to-compress-image-to-200kb": {
    title: "Comment compresser une image à 200 Ko",
    description: "Étape par étape : compressez n’importe quelle photo à 200 Ko pour les blogs, les boutiques et les portails. Choix de format et conseils de lot inclus.",
    readingMinutes: 12,
  },
  "200kb-image-job-portal-settings": {
    title: "Image de 200 Ko pour un site d’emploi",
    description: "Préparez des images de 200 Ko pour les sites d’emploi, les candidatures et les formulaires : règles de photo, scans de documents, formats.",
    readingMinutes: 12,
  },
  "compress-image-to-500kb-guide": {
    title: "Compresser une image à 500 Ko",
    description: "Le guide complet pour compresser les images à 500 Ko : qualité presque originale, portfolios, présentations, et l’outil gratuit dans le navigateur.",
    readingMinutes: 13,
  },
  "how-to-compress-image-to-500kb": {
    title: "Comment compresser une image à 500 Ko",
    description: "Compressez n’importe quelle photo à 500 Ko pour portfolios, présentations et galeries. Choix de format, conseils de lot et solutions pour les cibles manquées.",
    readingMinutes: 12,
  },
  "500kb-vs-1mb-image-quality": {
    title: "500 Ko ou 1 Mo : qualité d’image",
    description: "Comparez les images de 500 Ko et de 1 Mo : différences de qualité visibles, vitesse de chargement, quand chaque taille gagne.",
    readingMinutes: 12,
  },
  "bulk-image-compressor-guide": {
    title: "Compresseur d’images en lot : guide complet",
    description: "Le guide complet de la compression d’images en lot : préréglages de lot, export ZIP, réglages de qualité, et comment compresser des dizaines d’images.",
    readingMinutes: 12,
  },
  "how-to-compress-multiple-images-at-once": {
    title: "Comment compresser plusieurs images",
    description: "Étape par étape : compressez des dizaines d’images en une fois avec des préréglages, une barre de progression et un seul téléchargement ZIP.",
    readingMinutes: 11,
  },
  "batch-image-compression-best-practices": {
    title: "Compression d’images par lots : export ZIP",
    description: "Les bonnes pratiques pour la compression d’images par lots : préréglages, contrôles de qualité, organisation ZIP, nommage.",
    readingMinutes: 12,
  },
  "target-file-size-compressor-guide": {
    title: "Taille de fichier cible : le guide complet",
    description: "Le guide complet pour compresser les images à une taille exacte en Ko ou en Mo : cibles personnalisées, recherche binaire, mise à l’échelle.",
    readingMinutes: 12,
  },
  "how-to-compress-image-to-exact-kb": {
    title: "Compresser une image au Ko près, pas à pas",
    description: "Étape par étape : compressez n’importe quelle image à une taille exacte en Ko pour les plafonds de portail inhabituels, sans deviner le réglage.",
    readingMinutes: 11,
  },
  "exact-kb-target-binary-quality-search": {
    title: "Taille exacte en Ko : la meilleure qualité",
    description: "Comment l’outil trouve l’image la plus nette à n’importe quelle taille exacte en Ko : la recherche binaire expliquée simplement, ses étapes.",
    readingMinutes: 12,
  },
  "web-image-optimizer-guide": {
    title: "Optimiser les images pour le web",
    description: "Le guide complet pour optimiser les images de votre site : préréglages pour les images principales, de produits et de cartes, Core Web Vitals.",
    readingMinutes: 12,
  },
  "how-to-optimize-images-for-website-speed": {
    title: "Comment optimiser les images",
    description: "Étape par étape : optimisez les images pour la vitesse d’un site web avec des préréglages, des dimensions correctes, le chargement différé.",
    readingMinutes: 12,
  },
  "image-optimization-core-web-vitals": {
    title: "Optimisation des images : Core Web Vitals",
    description: "Comment l’optimisation des images améliore les Core Web Vitals : LCP, CLS et INP expliqués, avec des solutions pratiques pour les pages lentes.",
    readingMinutes: 12,
  },
  "gif-compressor-guide": {
    title: "Compresseur GIF : guide complet",
    description: "Le guide complet pour compresser les GIF animés : préréglages, palettes, fréquences d’images, mise à l’échelle, et comment réduire les GIF sans les ruiner.",
    readingMinutes: 12,
  },
  "how-to-compress-gif": {
    title: "Comment compresser un GIF",
    description: "Étape par étape : compressez n’importe quel GIF animé pour Discord, Slack, les sites web et la messagerie. Préréglages, palette et échelle inclus.",
    readingMinutes: 11,
  },
  "gif-vs-webp-vs-mp4-animated": {
    title: "GIF, WebP ou MP4 : les images animées",
    description: "Comparez le GIF animé, le WebP et le MP4 : taille de fichier, qualité, compatibilité, et quand utiliser chaque format pour les animations sur le web.",
    readingMinutes: 12,
  },
  "image-converter-guide": {
    title: "Convertisseur d’images : le guide complet",
    description: "Convertissez vos images entre JPG, PNG, WebP, HEIC, SVG, BMP, GIF et AVIF, directement dans le navigateur. Formats, qualité et transparence expliqués.",
    readingMinutes: 13,
  },
  "how-to-convert-image-format": {
    title: "Comment changer le format d’une image",
    description: "Changer le format d’une image, c’est simple quand on connaît les bons réglages. JPG, PNG ou WebP : lequel choisir, et comment convertir sans perdre en qualité.",
    readingMinutes: 12,
  },
  "image-format-conversion-quality-loss": {
    title: "Convertir une image sans perte de qualité",
    description: "Peut-on convertir une image sans perdre en qualité ? Tout dépend du format de départ et d’arrivée. Voici comment éviter la perte de qualité à chaque conversion.",
    readingMinutes: 13,
  },
  "image-to-pdf-guide": {
    title: "Convertir une image en PDF",
    description: "Convertir une image en PDF, c’est simple : photos, scans, plusieurs pages dans un seul document. Tailles de page, marges et orientation expliquées.",
    readingMinutes: 13,
  },
  "how-to-convert-image-to-pdf": {
    title: "Comment convertir une image en PDF",
    description: "Transformez une photo ou tout un ensemble en PDF en quelques minutes. Téléversez, ordonnez les pages, choisissez un format et téléchargez votre document.",
    readingMinutes: 12,
  },
  "jpg-to-pdf-vs-png-to-pdf": {
    title: "JPG ou PNG en PDF : les meilleurs réglages",
    description: "Votre PDF doit-il utiliser des images JPG ou PNG ? Taille de fichier, netteté du texte, transparence et meilleurs réglages pour chaque type de document.",
    readingMinutes: 13,
  },
  "bulk-image-converter-guide": {
    title: "Convertir des images en lot",
    description: "Convertir des images en lot, c’est convertir un dossier entier en une seule fois. Entrées mélangées, réglages de lot, export ZIP et nommage — le guide complet.",
    readingMinutes: 12,
  },
  "how-to-convert-multiple-images": {
    title: "Comment convertir plusieurs images à la fois",
    description: "Convertissez tout un dossier d’images en JPG, PNG ou WebP en un seul passage. Téléversez, choisissez un format, réglez la qualité et téléchargez un seul ZIP.",
    readingMinutes: 13,
  },
  "batch-image-conversion-workflow": {
    title: "Convertir des images par lot sans s’emmêler",
    description: "Convertir des images par lot sans s’emmêler : organisation des dossiers, règles de nommage, contrôles de qualité et archivage.",
    readingMinutes: 13,
  },
  "heic-to-jpg-guide": {
    title: "Convertir HEIC en JPG : le guide complet",
    description: "Convertissez les photos HEIC d’iPhone en JPG dans votre navigateur. Pourquoi le HEIC existe, comment fonctionne le décodage, la qualité.",
    readingMinutes: 12,
  },
  "how-to-convert-heic-to-jpg": {
    title: "Comment convertir HEIC en JPG",
    description: "Convertissez les photos HEIC d’iPhone en JPG en quelques gestes. Téléversez, vérifiez l’aperçu et téléchargez — sur n’importe quel appareil.",
    readingMinutes: 12,
  },
  "heic-vs-jpg": {
    title: "HEIC ou JPG : lequel choisir ?",
    description: "HEIC ou JPG, comparés honnêtement : taille de fichier, qualité d’image, compatibilité, et quel format utiliser pour les photos, les formulaires et le web.",
    readingMinutes: 13,
  },
  "jpg-to-png-guide": {
    title: "JPG en PNG : transparence et retouche",
    description: "Convertissez les photos JPG en PNG de la bonne façon. Quand cela aide, pourquoi les fichiers grossissent, et comment utiliser le PNG pour la retouche.",
    readingMinutes: 13,
  },
  "how-to-convert-jpg-to-png": {
    title: "Convertir JPG en PNG en quelques secondes",
    description: "Convertissez les images JPG en PNG en quelques secondes, un fichier ou un lot de vingt. Téléversez, convertissez, comparez et téléchargez.",
    readingMinutes: 12,
  },
  "jpg-vs-png-transparency": {
    title: "JPG ou PNG : quand la transparence compte",
    description: "JPG ou PNG comparés : transparence, taille de fichier, netteté du texte et photos. Apprenez quand chaque format l’emporte et pourquoi la conversion ne peut.",
    readingMinutes: 13,
  },
  "png-to-jpg-guide": {
    title: "PNG en JPG : alléger vos captures d’écran",
    description: "Convertissez les captures d’écran et les photos PNG en JPG et réduisez-les spectaculairement. Couleurs de fond, qualité et lots expliqués.",
    readingMinutes: 13,
  },
  "how-to-convert-png-to-jpg": {
    title: "Convertir PNG en JPG : fond et qualité",
    description: "Convertissez les captures d’écran et les images PNG en JPG en six étapes. Choisissez une couleur de fond, réglez la qualité, prévisualisez et téléchargez.",
    readingMinutes: 12,
  },
  "png-to-jpg-file-size-quality": {
    title: "PNG en JPG : gains de taille et compromis",
    description: "De combien PNG en JPG réduit-il vraiment ? Gains réels par type d’image, réglages de qualité qui protègent le texte, et quand le compromis ne vaut pas la peine.",
    readingMinutes: 13,
  },
  "jpg-to-webp-guide": {
    title: "Convertir JPG en WebP : le guide complet",
    description: "Convertissez vos photos JPG en WebP pour des sites plus rapides. De combien les fichiers réduisent, quelle qualité choisir, la compatibilité des navigateurs.",
    readingMinutes: 13,
  },
  "how-to-convert-jpg-to-webp": {
    title: "Convertir JPG en WebP pour un site rapide",
    description: "Convertissez vos photos JPG en WebP en quelques étapes. Téléversez, réglez la qualité, prévisualisez les gains, et téléchargez — une photo ou tout un dossier.",
    readingMinutes: 12,
  },
  "jpg-vs-webp": {
    title: "JPG ou WebP : taille, qualité",
    description: "JPG ou WebP, comparés directement : gains de taille, qualité d’image, transparence, compatibilité des navigateurs, et quel format utiliser où.",
    readingMinutes: 14,
  },
  "webp-to-jpg-guide": {
    title: "WebP en JPG : guide complet",
    description: "Convertissez vos images WebP en JPG pour assurer la compatibilité. Couleurs de fond, réglages de qualité, conversion par lots.",
    readingMinutes: 13,
  },
  "how-to-convert-webp-to-jpg": {
    title: "Convertir WebP en JPG pour ouvrir partout",
    description: "Convertissez vos images WebP en JPG en quelques étapes. Téléversez, choisissez une couleur de fond, réglez la qualité et téléchargez.",
    readingMinutes: 12,
  },
  "webp-to-jpg-compatibility": {
    title: "WebP en JPG : quand convertir ?",
    description: "Le WebP est plus léger, mais le JPG s’ouvre partout. Quand la compatibilité compte plus que la taille — formulaires, imprimantes, courriels et vieux logiciels.",
    readingMinutes: 13,
  },
  "png-to-webp-guide": {
    title: "PNG en WebP : logos légers et transparents",
    description: "Convertissez vos images PNG en WebP pour des fichiers plus légers avec la transparence préservée. Logos, icônes et captures d’écran inclus.",
    readingMinutes: 13,
  },
  "how-to-convert-png-to-webp": {
    title: "Convertir PNG en WebP : transparence gardée",
    description: "Convertissez vos images PNG en WebP en quelques étapes. Téléversez, réglez la qualité, vérifiez la transparence et téléchargez.",
    readingMinutes: 13,
  },
  "png-vs-webp": {
    title: "PNG ou WebP : lequel choisir ?",
    description: "PNG vs WebP : transparence, taille de fichier, netteté du texte, prise en charge par les navigateurs, et quel format utiliser pour les logos.",
    readingMinutes: 14,
  },
  "webp-to-png-guide": {
    title: "WebP en PNG pour retoucher et imprimer",
    description: "Convertissez vos images WebP en PNG sans perdre de qualité. Transparence, retouche, compatibilité, et quand le PNG est la bonne cible.",
    readingMinutes: 12,
  },
  "how-to-convert-webp-to-png": {
    title: "Convertir WebP en PNG pour la retouche",
    description: "Convertissez vos images WebP en PNG en quelques étapes. Téléversez, convertissez, vérifiez la transparence et téléchargez — un seul fichier ou tout un lot.",
    readingMinutes: 12,
  },
  "webp-to-png-editing-compatibility": {
    title: "WebP en PNG : retouche et compatibilité",
    description: "Pourquoi les designers convertissent le WebP en PNG : flux de retouche, transparence et compatibilité avec Photoshop, Figma, Office et l’impression.",
    readingMinutes: 13,
  },
  "svg-to-png-guide": {
    title: "SVG en PNG : guide complet",
    description: "Convertissez vos logos et icônes SVG en PNG à n’importe quelle taille. Échelle, transparence, polices, dégradés et limites — tout est expliqué.",
    readingMinutes: 12,
  },
  "how-to-convert-svg-to-png": {
    title: "Comment convertir SVG en PNG",
    description: "Convertissez vos logos et icônes SVG en PNG à la taille dont vous avez besoin. Téléversez, choisissez une échelle, vérifiez le résultat et téléchargez.",
    readingMinutes: 12,
  },
  "svg-vs-png-vector-raster": {
    title: "SVG ou PNG : vectoriel ou matriciel ?",
    description: "SVG vs PNG : vectoriel ou matriciel ? Mise à l’échelle, taille de fichier, transparence, prise en charge par les navigateurs, et quand utiliser chaque format.",
    readingMinutes: 13,
  },
  "avif-to-jpg-guide": {
    title: "AVIF en JPG : guide complet",
    description: "Convertissez vos images AVIF des sites web modernes en JPG. Ce qu’est l’AVIF, pourquoi les applications le refusent. La conversion prend quelques secondes.",
    readingMinutes: 13,
  },
  "how-to-convert-avif-to-jpg": {
    title: "Comment convertir AVIF en JPG",
    description: "Convertissez vos images AVIF en JPG en quelques étapes. Téléversez, réglez la qualité, gérez la transparence et téléchargez — un seul fichier ou tout un lot.",
    readingMinutes: 12,
  },
  "avif-vs-jpg": {
    title: "AVIF ou JPG : lequel choisir ?",
    description: "AVIF vs JPG : taille de fichier, qualité d’image, HDR, transparence, prise en charge par les navigateurs, et quel format utiliser pour le web et au-delà.",
    readingMinutes: 13,
  },
  "bmp-to-jpg-guide": {
    title: "BMP en JPG : guide complet",
    description: "Convertissez vos bitmaps BMP en JPG et réduisez-les de 90 % ou plus. Pourquoi les fichiers BMP sont énormes, les réglages de qualité, les scans et les lots.",
    readingMinutes: 12,
  },
  "how-to-convert-bmp-to-jpg": {
    title: "Comment convertir BMP en JPG",
    description: "Convertissez vos bitmaps BMP en JPG en quelques étapes. Téléversez, réglez la qualité, prévisualisez les économies et téléchargez.",
    readingMinutes: 12,
  },
  "bmp-vs-jpg-file-size": {
    title: "BMP vs JPG : pourquoi les BMP sont lourds ?",
    description: "BMP vs JPG : pourquoi les fichiers BMP sont si lourds, combien le JPG fait économiser, la qualité, la profondeur de couleur.",
    readingMinutes: 13,
  },
  "rotate-flip-image-guide": {
    title: "Pivoter et retourner des images",
    description: "Apprenez à pivoter et à retourner des images en ligne : rotations de 90 et 180 degrés, angles personnalisés, selfies inversés et correction de l’orientation.",
    readingMinutes: 12,
  },
  "how-to-rotate-flip-image": {
    title: "Comment pivoter ou retourner une image",
    description: "Pivotez ou retournez n’importe quelle image en quelques secondes : téléversez, choisissez 90 ou 180 degrés ou un angle personnalisé.",
    readingMinutes: 12,
  },
  "image-orientation-exif-rotation": {
    title: "Photo à l’envers : corriger l’orientation",
    description: "Pourquoi la même photo est-elle droite sur votre téléphone et de travers partout ailleurs ? L’orientation EXIF expliquée, et comment la corriger pour de bon.",
    readingMinutes: 13,
  },
  "image-cropper-guide": {
    title: "Recadrer des images : guide complet",
    description: "Apprenez à recadrer des images en ligne : ratios, règle des tiers, zoom, réglages de qualité, et comment recadrer pour les profils.",
    readingMinutes: 12,
  },
  "how-to-crop-image": {
    title: "Comment recadrer une image",
    description: "Recadrez n’importe quelle image en ligne en quelques secondes : téléversez, faites glisser le cadre de sélection, choisissez un ratio.",
    readingMinutes: 11,
  },
  "image-crop-ratios-explained": {
    title: "Ratios d’image : 1:1, 4:3, 16:9 expliqués",
    description: "Que veulent dire les ratios de recadrage, et lequel choisir ? Les ratios 1:1, 4:3, 3:2, 16:9 et sur mesure expliqués pour les profils.",
    readingMinutes: 12,
  },
  "image-watermark-guide": {
    title: "Mettre un filigrane sur une photo",
    description: "Apprenez à ajouter un filigrane à vos images en ligne : filigranes texte et logo, motifs répétés en mosaïque, opacité, placement.",
    readingMinutes: 12,
  },
  "how-to-add-watermark-to-image": {
    title: "Comment mettre un filigrane sur une photo",
    description: "Mettez un filigrane sur n’importe quelle photo en quelques minutes : texte ou logo, placement, opacité, taille et motifs répétés.",
    readingMinutes: 11,
  },
  "watermark-best-practices": {
    title: "Filigrane sur une photo : bonnes pratiques",
    description: "Comment bien filigraner ses photos : règles de placement, plages d’opacité, taille, couleur, motifs répétés et image de marque qui protège sans gâcher l’image.",
    readingMinutes: 11,
  },
  "blur-pixelate-image-guide": {
    title: "Flouter et pixeliser des images",
    description: "Apprenez à flouter et à pixeliser des images en ligne : cachez des visages, du texte et des détails avec un flou doux ou une pixelisation en mosaïque.",
    readingMinutes: 11,
  },
  "how-to-blur-pixelate-image": {
    title: "Comment flouter ou pixeliser une image",
    description: "Floutez ou pixelisez n’importe quelle image en quelques minutes : peignez sur les visages et le texte avec un pinceau, ou floutez toute l’image.",
    readingMinutes: 11,
  },
  "blur-vs-pixelate-image": {
    title: "Flouter ou pixeliser : cacher des visages",
    description: "Flouter ou pixeliser ? Comment chaque méthode cache les visages, le texte et les chiffres, laquelle est plus sûre. Un visage flouté peut rester reconnaissable.",
    readingMinutes: 11,
  },
  "add-text-to-image-guide": {
    title: "Ajouter du texte sur une photo",
    description: "Apprenez à ajouter du texte sur vos photos en ligne : légendes, titres, mèmes, citations et annotations avec des polices, des couleurs.",
    readingMinutes: 11,
  },
  "how-to-add-text-to-image": {
    title: "Comment ajouter du texte sur une photo",
    description: "Ajoutez du texte sur n’importe quelle photo en quelques minutes : téléversez, tapez votre légende, choisissez une police et une taille.",
    readingMinutes: 12,
  },
  "text-on-images-readability-tips": {
    title: "Texte sur photo : comment le rendre lisible",
    description: "Comment rendre le texte sur les images lisible : choix de polices, règles de taille, contraste, contours, ombres, fonds semi-transparents.",
    readingMinutes: 12,
  },
  "image-border-generator-guide": {
    title: "Ajouter une bordure à une photo",
    description: "Apprenez à ajouter des bordures à vos images en ligne : cadres unis, Polaroid et dégradés lumineux, taille de bordure, rayon des coins, ombres et couleurs.",
    readingMinutes: 11,
  },
  "how-to-add-border-to-image": {
    title: "Comment ajouter une bordure à une image",
    description: "Ajoutez une bordure à n’importe quelle image en quelques minutes : téléversez, choisissez un style, réglez la taille et la couleur, ajoutez une ombre.",
    readingMinutes: 12,
  },
  "image-frames-borders-styles": {
    title: "Cadres photo : quel style choisir ?",
    description: "Quel style de cadre convient à votre photo ? Cadres minimalistes, Polaroid, galerie, dégradés lumineux et rétro comparés pour les réseaux sociaux.",
    readingMinutes: 12,
  },
  "round-image-corners-guide": {
    title: "Arrondir les coins d’une image",
    description: "Apprenez à arrondir les coins d’une image en ligne : rayon des coins, réglage coin par coin, formes cercle et pilule, coins transparents ou pleins.",
    readingMinutes: 12,
  },
  "how-to-round-image-corners": {
    title: "Comment arrondir les coins d’une image",
    description: "Arrondissez les coins d’une image en quelques minutes : importez, réglez le rayon, utilisez le réglage coin par coin ou le raccourci cercle.",
    readingMinutes: 12,
  },
  "rounded-corners-vs-circle-crop": {
    title: "Coins arrondis ou photo ronde ?",
    description: "Coins arrondis ou photo ronde ? Comment chaque forme fonctionne pour les avatars, les cartes et les photos de profil, et quand utiliser l’une, l’autre.",
    readingMinutes: 12,
  },
  "image-brightness-editor-guide": {
    title: "Éclaircir une photo sombre : guide complet",
    description: "Comment éclaircir une photo sombre en ligne : curseur de luminosité, préréglages rapides, comparaison avant/après. Sans décolorer les zones claires.",
    readingMinutes: 12,
  },
  "how-to-adjust-image-brightness": {
    title: "Comment éclaircir une photo",
    description: "Éclaircissez une photo en quelques minutes : importez-la, faites glisser le curseur de luminosité, essayez un préréglage, comparez avant et après.",
    readingMinutes: 12,
  },
  "brightness-vs-exposure-vs-contrast": {
    title: "Luminosité, exposition et contraste",
    description: "Luminosité, exposition et contraste expliqués : ce que chacun fait à une photo, comment ils interagissent, et quel réglage choisir dans chaque situation.",
    readingMinutes: 12,
  },
  "image-contrast-editor-guide": {
    title: "Augmenter le contraste d’une photo",
    description: "Comment augmenter le contraste d’une photo en ligne : curseur de contraste, préréglages rapides, comparaison avant/après.",
    readingMinutes: 12,
  },
  "how-to-adjust-image-contrast": {
    title: "Comment augmenter le contraste d’une photo",
    description: "Augmentez le contraste d’une photo en quelques minutes : importez-la, faites glisser le curseur, essayez un préréglage. Pour paysages plats et portraits durs.",
    readingMinutes: 12,
  },
  "contrast-readability-text-over-photos": {
    title: "Comment rendre un texte lisible",
    description: "Texte illisible sur une photo ? Assombrissement, voile, panneau et choix des couleurs : comment rendre vos titres et légendes lisibles, même sur petit écran.",
    readingMinutes: 11,
  },
  "image-saturation-editor-guide": {
    title: "Augmenter la saturation d’une photo",
    description: "Comment donner des couleurs vives à une photo terne : curseur de saturation, préréglages, rendus atténués et noir et blanc, tons de peau.",
    readingMinutes: 12,
  },
  "how-to-adjust-image-saturation": {
    title: "Comment augmenter la saturation d’une photo",
    description: "Donnez des couleurs vives à une photo en quelques minutes : importez-la, faites glisser le curseur de saturation, essayez un préréglage.",
    readingMinutes: 12,
  },
  "saturation-vs-vibrance": {
    title: "Saturation ou vibrance : que choisir ?",
    description: "Saturation ou vibrance ? Comment chaque réglage traite les couleurs, lequel protège les tons de peau, et comment obtenir des couleurs naturelles et vives.",
    readingMinutes: 12,
  },
  "image-filters-guide": {
    title: "Filtres photo : guide complet",
    description: "Apprenez à utiliser les filtres photo en ligne : Vintage, Sepia, Noir et blanc, Chaud, Froid et 6 autres styles, le réglage de l’intensité.",
    readingMinutes: 12,
  },
  "how-to-apply-photo-filters": {
    title: "Comment appliquer des filtres photo",
    description: "Appliquez des filtres photo en quelques minutes : importez, parcourez les 11 styles, réglez l’intensité, comparez avec l’original.",
    readingMinutes: 12,
  },
  "photo-filters-compared": {
    title: "Filtres photo : lequel choisir ?",
    description: "Vintage ou Sepia, noir et blanc ou noir, chaud ou froid : comparatif des 11 filtres photo, et quel style choisir pour un portrait, un paysage.",
    readingMinutes: 11,
  },
  "image-color-picker-guide": {
    title: "Sélecteur de couleurs d’image",
    description: "Prélevez n’importe quelle couleur sur n’importe quelle image grâce à la pipette. Découvrez les codes HEX, RGB, HSL et CMYK, la loupe grossissante.",
    readingMinutes: 12,
  },
  "how-to-pick-color-from-image": {
    title: "Comment choisir une couleur sur une image",
    description: "Prélevez une couleur exacte sur n’importe quelle photo, logo ou capture d’écran en quatre étapes. Loupe, nuances et export CSS inclus.",
    readingMinutes: 11,
  },
  "hex-vs-rgb-vs-hsl": {
    title: "HEX, RGB et HSL : les codes couleur",
    description: "HEX, RGB, HSL et CMYK décrivent la même couleur de manières différentes. Découvrez ce que signifie chaque format, quand l’utiliser.",
    readingMinutes: 12,
  },
  "image-dimensions-checker-guide": {
    title: "Connaître les dimensions d’une image",
    description: "Vérifiez les dimensions d’images en lot : largeur, hauteur, rapport d’aspect, mégapixels, taille d’impression et transparence.",
    readingMinutes: 11,
  },
  "how-to-check-image-dimensions": {
    title: "Comment vérifier les dimensions d’une image",
    description: "Vérifiez la largeur, la hauteur, le rapport d’aspect et la taille d’impression de n’importe quelle image — un seul fichier ou tout un lot.",
    readingMinutes: 12,
  },
  "image-dimensions-vs-resolution-vs-file-size": {
    title: "Dimensions, résolution, taille : différences",
    description: "Les dimensions, la résolution et la taille de fichier sont trois nombres différents. Découvrez ce que chacun signifie, comment ils sont liés.",
    readingMinutes: 12,
  },
  "image-dpi-changer-guide": {
    title: "Changer le DPI d’une image : guide complet",
    description: "Changez le DPI d’une image sans perdre en qualité. Préréglages de 72 à 600 DPI, valeurs personnalisées jusqu’à 2400, export ZIP en lot.",
    readingMinutes: 11,
  },
  "how-to-change-image-dpi": {
    title: "Comment changer le DPI d’une image",
    description: "Changez le DPI d’une image à 72, 150, 300 ou 600 en quatre étapes — ou n’importe quelle valeur personnalisée jusqu’à 2400.",
    readingMinutes: 11,
  },
  "dpi-vs-ppi-print-web": {
    title: "DPI ou PPP : ce qui compte",
    description: "Le DPI et le PPP se ressemblent mais mesurent des choses différentes. Découvrez lequel compte pour l’impression, lequel compte pour les écrans.",
    readingMinutes: 11,
  },
  "image-to-base64-guide": {
    title: "Convertir une image en Base64",
    description: "Convertissez n’importe quelle image en Base64 : URL de données, chaînes brutes, extraits d’images HTML et sorties CSS url().",
    readingMinutes: 12,
  },
  "how-to-convert-image-to-base64": {
    title: "Comment convertir une image en Base64",
    description: "Convertissez une image en Base64 en quatre étapes : envoyez, choisissez la sortie URL de données, brute, HTML ou CSS, puis copiez ou téléchargez.",
    readingMinutes: 11,
  },
  "base64-images-when-to-embed": {
    title: "Images Base64 : quand les intégrer ?",
    description: "Intégrer des images Base64 économise des requêtes mais coûte 33 % d’octets en plus et supprime la mise en cache. Seuils de taille et calcul du cache inclus.",
    readingMinutes: 12,
  },
  "base64-to-image-guide": {
    title: "Convertir Base64 en image : guide complet",
    description: "Décodez n’importe quelle chaîne Base64 en image. Décodage automatique au collage, variantes compatibles URL, aperçu de transparence, et téléchargement en PNG.",
    readingMinutes: 12,
  },
  "how-to-convert-base64-to-image": {
    title: "Comment convertir Base64 en image",
    description: "Convertissez une chaîne Base64 en image en quatre étapes : collez, prévisualisez, choisissez Original, PNG, JPG ou WebP, et téléchargez.",
    readingMinutes: 11,
  },
  "base64-vs-image-files": {
    title: "Base64 ou fichiers image : que choisir ?",
    description: "Les chaînes Base64 et les fichiers image portent la même image de manières différentes. Comparez la taille, la vitesse, la mise en cache et la modification.",
    readingMinutes: 12,
  },
  "image-color-palette-extractor-guide": {
    title: "Extraire une palette de couleurs d’une image",
    description: "Extrayez une palette de couleurs de n’importe quelle photo : 3 à 12 nuances, classées par couverture, avec HEX, RGB, HSL, export CSS, JSON.",
    readingMinutes: 12,
  },
  "how-to-extract-color-palette-from-image": {
    title: "Comment extraire une palette de couleurs ?",
    description: "Extrayez une palette de couleurs de n’importe quelle photo en cinq étapes : envoyez, choisissez 3 à 12 nuances, lisez les pourcentages.",
    readingMinutes: 11,
  },
  "color-palettes-from-photos-design": {
    title: "Palettes de couleurs : conseils de design",
    description: "Transformez des photos en palettes de design qui fonctionnent vraiment : la règle 60-30-10, dominante contre accent, contraste, usage de marque.",
    readingMinutes: 12,
  },
  "favicon-generator-guide": {
    title: "Générateur de favicon : guide complet",
    description: "Tout savoir sur les favicons : ce que c’est, les fichiers d’un pack complet, comment créer le vôtre à partir de votre logo et comment l’installer.",
    readingMinutes: 12,
  },
  "how-to-create-favicon": {
    title: "Comment créer un favicon",
    description: "Créez un favicon à partir de votre logo en quelques minutes : préparez l’image source, réglez la marge et le fond. Puis téléchargez le pack de fichiers.",
    readingMinutes: 11,
  },
  "favicon-sizes-explained": {
    title: "Quelle taille pour un favicon ?",
    description: "Quelle taille de favicon pour chaque usage ? Onglet 16×16, Retina 32×32, Apple 180×180, Android 192×192 et 512×512. Évitez l’icône floue et l’icône pixelisée.",
    readingMinutes: 12,
  },
  "add-background-to-image-guide": {
    title: "Ajouter un fond à une image : guide complet",
    description: "Mettez n’importe quelle photo ou découpe transparente sur un fond uni, dégradé ou flouté : comment l’outil fonctionne. Transformez une découpe en image finie.",
    readingMinutes: 13,
  },
  "how-to-add-background-to-image": {
    title: "Comment ajouter un arrière-plan à une image",
    description: "Ajoutez un arrière-plan à n’importe quelle photo ou découpe transparente en quelques minutes : choisissez un fond uni, dégradé ou flouté.",
    readingMinutes: 12,
  },
  "product-photo-backgrounds": {
    title: "Fond photo produit : blanc ou couleur ?",
    description: "Quel fond choisir pour vos photos de produits ? Fond blanc, couleur de marque, décor de style de vie, règles des places de marché et la constance qui donne.",
    readingMinutes: 14,
  },
  "image-splitter-guide": {
    title: "Diviser une image : guide complet",
    description: "Divisez n’importe quelle image en tuiles ou en bandes : comment fonctionnent les modes grille, horizontal et vertical, les préréglages.",
    readingMinutes: 13,
  },
  "how-to-split-image": {
    title: "Comment diviser une image",
    description: "Divisez n’importe quelle image en tuiles de grille ou en bandes en quelques minutes : importez, choisissez un mode, définissez les lignes et les colonnes.",
    readingMinutes: 13,
  },
  "split-images-instagram-grid": {
    title: "Grille Instagram 3×3 : diviser une photo",
    description: "Transformez une photo en grille Instagram 3×3 : préparer une source carrée, diviser en 9 tuiles, publier dans le bon ordre et garder une belle grille.",
    readingMinutes: 13,
  },
  "gif-maker-guide": {
    title: "Créer un GIF : guide complet",
    description: "Créez un GIF animé à partir de vos photos : comment créer un GIF, choisir les images, régler le minutage et les boucles, ajuster les cadres.",
    readingMinutes: 14,
  },
  "how-to-make-gif-from-images": {
    title: "Comment créer un GIF à partir d’images",
    description: "Transformez vos photos en GIF animé en quelques minutes : rassemblez les images, importez-les, ordonnez-les et minutez-les, réglez la boucle.",
    readingMinutes: 12,
  },
  "gif-frame-rate-file-size": {
    title: "GIF trop lourd ? Comment l’alléger ?",
    description: "Votre GIF est trop lourd ? Voici comment la fréquence d’images, le nombre d’images, les dimensions et la palette de couleurs décident de la taille du fichier.",
    readingMinutes: 13,
  },
  "image-collage-maker-guide": {
    title: "Créer un collage photo : guide complet",
    description: "Créez un collage photo en quelques minutes : grilles et bandes, glisser-déposer pour échanger, divisions ajustables, espaces, coins arrondis.",
    readingMinutes: 13,
  },
  "how-to-make-photo-collage": {
    title: "Comment créer un collage de photos",
    description: "Créez un collage de photos en quelques minutes : choisissez vos photos, choisissez une mise en page en grille ou en bande, arrangez-les.",
    readingMinutes: 13,
  },
  "collage-layouts-grids-mood-boards": {
    title: "Idées de mise en page pour un collage photo",
    description: "Quelle mise en page pour votre collage photo ? Grilles 2×2 et 3×3, bandes verticales et horizontales, mood board, mise en page story.",
    readingMinutes: 13,
  },
  "image-resizer-guide": {
    title: "Redimensionner une image : guide complet",
    description: "Apprenez à redimensionner une image en ligne : changer la taille en pixels ou en pourcentage, garder les proportions, choisir le bon format pour le web.",
    readingMinutes: 14,
  },
  "how-to-resize-image": {
    title: "Comment redimensionner une image en ligne",
    description: "Redimensionnez une image en ligne en quelques minutes : importez-la, choisissez les pixels ou le pourcentage, verrouillez le rapport hauteur/largeur.",
    readingMinutes: 13,
  },
  "resize-vs-compress-image": {
    title: "Redimensionner ou compresser ?",
    description: "Faut-il redimensionner ou compresser une image pour l’alléger ? Découvrez ce que fait chaque méthode, quand utiliser l’une ou l’autre.",
    readingMinutes: 14,
  },
  "bulk-image-resizer-guide": {
    title: "Redimensionner plusieurs images à la fois",
    description: "Redimensionnez des dizaines d’images en une seule fois : choisissez la bonne taille pour chaque image, protégez les petites photos contre l’agrandissement.",
    readingMinutes: 14,
  },
  "how-to-resize-multiple-images": {
    title: "Comment redimensionner plusieurs images",
    description: "Redimensionnez plusieurs images à la fois : déposez un lot, choisissez Ajustement max, Largeur uniforme, Dimensions exactes ou Pourcentage.",
    readingMinutes: 14,
  },
  "bulk-resize-presets-social-ecommerce-print": {
    title: "Tailles d’images pour Instagram et boutiques",
    description: "Quelle taille choisir pour une photo Instagram, une fiche produit ou une impression ? Les bonnes dimensions et quand saisir une taille sur mesure.",
    readingMinutes: 14,
  },
  "image-metadata-viewer-guide": {
    title: "Métadonnées d'une photo : guide complet",
    description: "Découvrez ce qu'un outil pour voir les métadonnées révèle : réglages EXIF, position GPS, blocs PNG et WebP — et comment inspecter une photo en privé.",
    readingMinutes: 12,
  },
  "how-to-view-image-metadata": {
    title: "Comment voir les métadonnées d'une photo",
    description: "Guide pas à pas pour voir les métadonnées d'une photo : ouvrez-la dans l'outil, lisez les champs EXIF et GPS, exportez un rapport JSON et vérifiez qu'un.",
    readingMinutes: 12,
  },
  "exif-data-explained": {
    title: "Données EXIF : ce que vos photos révèlent",
    description: "Tout comprendre aux données EXIF : comment votre téléphone les écrit, ce qu'elles révèlent de votre position et de vos habitudes.",
    readingMinutes: 12,
  },
  "remove-image-metadata-guide": {
    title: "Supprimer les métadonnées en toute sécurité",
    description: "Apprenez à supprimer les métadonnées d'une photo en sécurité : ce qui disparaît vraiment, suppression sans perte ou réencodage, nettoyage par lot.",
    readingMinutes: 12,
  },
  "how-to-remove-metadata-from-image": {
    title: "Supprimer les métadonnées EXIF et GPS",
    description: "Guide pas à pas pour supprimer les métadonnées d'une photo : déposez le fichier, effacez l'EXIF et le GPS, choisissez la bonne méthode.",
    readingMinutes: 12,
  },
  "photo-privacy-gps-exif-risks": {
    title: "Métadonnées photo et vie privée",
    description: "Ce que la position GPS, les données EXIF et les métadonnées cachées de vos photos révèlent — et les gestes simples qui les empêchent de dévoiler votre adresse.",
    readingMinutes: 12,
  },
};
