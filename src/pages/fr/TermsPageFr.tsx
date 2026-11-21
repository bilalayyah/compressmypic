import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPageFrProps {
  onNavigate: (path: string) => void;
}

export const TermsPageFr: React.FC<TermsPageFrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Conditions d’utilisation - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/fr/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au compresseur d’images</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-[#dc2626] dark:text-[#f87171]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Conditions d’utilisation
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Dernière mise à jour : 14 novembre 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Acceptation des conditions
            </h2>
            <p>
              En accédant à CompressMyPic et en l’utilisant, vous acceptez de respecter les présentes Conditions d’utilisation et d’y être lié. Si vous n’êtes pas d’accord avec une partie de ces conditions, cessez d’utiliser le service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Utilisation autorisée
            </h2>
            <p>
              Vous pouvez utiliser CompressMyPic pour optimiser des images à des fins personnelles comme commerciales. Vous acceptez de ne pas utiliser le service pour une activité illégale ni d’une manière qui pourrait nuire au fonctionnement, à la sécurité ou à la disponibilité du site web.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Droits de propriété intellectuelle
            </h2>
            <p>
              Vous conservez 100 % des droits d’auteur, de la propriété et des droits de propriété intellectuelle sur toutes les images, photos et graphiques que vous compressez avec notre outil. CompressMyPic ne revendique aucune propriété, licence ni aucun droit sur vos œuvres créatives. Tout le traitement s’effectue localement sur votre appareil.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Exclusion de garanties
            </h2>
            <p>
              CompressMyPic est fourni « tel quel » et « selon disponibilité », sans garantie d’aucune sorte, expresse ou implicite. Bien que nous nous efforcions d’obtenir une compatibilité et des performances maximales dans tous les navigateurs, nous ne garantissons pas que le service soit ininterrompu, exempt d’erreurs ou conforme à des exigences techniques spécifiques.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Disponibilité et modifications du service
            </h2>
            <p>
              CompressMyPic est un service gratuit et nous ne garantissons pas qu'il sera disponible à tout moment. Nous pouvons modifier, suspendre ou interrompre tout outil, toute fonction ou l'intégralité du site web à tout moment, avec ou sans préavis — par exemple pour corriger un bug, remplacer une technologie qui ne fonctionne plus dans les navigateurs modernes, ou maintenir la gratuité du service. Nous pouvons aussi fixer des limites raisonnables, comme une taille de fichier maximale par image (actuellement 20 Mo pour le compresseur principal et 25 Mo pour les convertisseurs de format), et nous pouvons modifier ces limites à mesure que les navigateurs et les appareils s'améliorent. Comme tout le traitement a lieu dans votre navigateur, une interruption du site web ne met jamais vos images originales en danger : vos fichiers restent sur votre appareil.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Utilisation acceptable
            </h2>
            <p>
              Vous acceptez d'utiliser CompressMyPic uniquement à des fins légales et d'une manière qui ne nuit ni au service ni à autrui. En particulier, vous ne devez pas tenter de surcharger, d'endommager ou de rétroconcevoir le site web, de sonder ses failles de sécurité, d'utiliser des scripts automatisés pour envoyer un grand nombre de requêtes, ni d'utiliser le service pour traiter des images qui violent le droit d'auteur d'autrui, contiennent du contenu illégal ou sont destinées à tromper ou à harceler. Vous êtes responsable de vous assurer que vous avez le droit d'utiliser chaque image que vous traitez, et de conserver une copie de sauvegarde de toute image importante avant de la compresser ou de la convertir.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Limitation de responsabilité
            </h2>
            <p>
              Dans toute la mesure permise par la loi, CompressMyPic et son propriétaire ne seront pas responsables des pertes indirectes, accessoires ou consécutives découlant de votre utilisation du service — y compris, sans s'y limiter, la perte de données, la perte de profits ou le coût de recréation d'une image. Le service étant gratuit, notre responsabilité totale pour toute réclamation liée au service est limitée au montant que vous avez payé pour l'utiliser, soit zéro. Cela ne limite aucune responsabilité qui ne peut pas être limitée par la loi, comme la responsabilité pour fraude ou pour décès ou blessure corporelle causés par négligence.
            </p>
            <p>
              La compression est par nature un processus avec perte : réduire la taille d'un fichier peut réduire sa qualité, et certains formats, comme JPEG, ne peuvent pas préserver la transparence. Vous êtes responsable de vérifier le résultat compressé avant de supprimer ou d'écraser un fichier original, et nous ne sommes pas responsables de la perte de qualité, de l'absence de transparence ou de tout autre changement que la compression apporte à une image que vous avez choisi de traiter.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Services tiers
            </h2>
            <p>
              Le site utilise des services tiers pour fonctionner, notamment l'hébergement et la diffusion de contenu via Cloudflare et l'envoi de messages via FormSubmit. Ces services ont leurs propres conditions et politiques de confidentialité, et votre utilisation de ces services est régie par ces documents ainsi que par les présentes conditions. Nous ne sommes pas responsables de la disponibilité, du contenu ou des pratiques des sites web ou services tiers liés depuis CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Droit applicable
            </h2>
            <p>
              Les présentes conditions sont régies par les lois des Émirats arabes unis, d'où le site est exploité, sans égard à leurs règles de conflit de lois. Tout litige découlant des présentes conditions ou de votre utilisation du service, ou lié à celles-ci, sera résolu par les tribunaux des Émirats arabes unis. Si une partie des présentes conditions est jugée inapplicable, les autres parties continueront de s'appliquer intégralement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Modifications des présentes conditions
            </h2>
            <p>
              Nous pouvons mettre à jour les présentes conditions lorsque le service change — par exemple, lorsque nous ajoutons de nouveaux outils, modifions les limites de taille de fichier ou commençons à utiliser un nouveau service tiers. Dans ce cas, nous mettrons à jour la date de « Dernière mise à jour » en haut de cette page. Si vous continuez à utiliser CompressMyPic après la modification des conditions, vous acceptez les conditions mises à jour. Si vous n'êtes pas d'accord avec une modification, veuillez cesser d'utiliser le service.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Contact
            </h2>
            <p>
              Si vous avez des questions sur ces conditions, écrivez-nous à{' '}
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
