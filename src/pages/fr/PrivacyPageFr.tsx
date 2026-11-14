import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageFrProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageFr: React.FC<PrivacyPageFrProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Politique de confidentialité - CompressMyPic';
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au compresseur d’images</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Politique de confidentialité
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Dernière mise à jour : 14 novembre 2026
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Traitement des images dans votre navigateur
            </h2>
            <p>
              CompressMyPic est un compresseur d’images online gratuit. Les images sont traitées localement dans votre navigateur avec HTML5 Canvas : elles ne sont jamais envoyées vers nos serveurs et nous ne collectons, ne stockons ni ne partageons vos images. Lorsque vous fermez ou actualisez l’onglet du navigateur, tous les objets temporaires en mémoire sont supprimés.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Nous ne collectons aucune donnée personnelle
            </h2>
            <p>
              Nous ne demandons ni compte, ni mot de passe, ni adresse e-mail, ni numéro de téléphone pour utiliser l’outil de compression. Toute coordonnée que vous envoyez volontairement via notre formulaire de contact sert uniquement à répondre à votre demande précise.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Publicité (Google AdSense)
            </h2>
            <p>
              Nous utilisons Google AdSense pour afficher des publicités une fois activé. Des fournisseurs tiers, dont Google, utilisent des cookies pour diffuser des annonces en fonction de vos visites précédentes sur ce site web ou sur d’autres sites web. L’utilisation par Google des cookies publicitaires permet à Google et à ses partenaires de vous diffuser des annonces en fonction de votre visite sur ce site et/ou sur d’autres sites Internet. Vous pouvez désactiver la publicité personnalisée en consultant les Paramètres des annonces Google (
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                https://adssettings.google.com
              </a>
              ) ou{' '}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                https://www.aboutads.info/choices/
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Analytique
            </h2>
            <p>
              Nous utilisons Cloudflare Web Analytics pour comprendre, de façon agrégée, comment le site est utilisé — par exemple, quels outils sont populaires et quelles pages sont visitées. Cloudflare Web Analytics est respectueux de la vie privée : il n'utilise pas de cookies, ne suit pas les visiteurs individuellement d'un site à l'autre et ne collecte aucun identifiant personnel. Il enregistre uniquement des statistiques d'usage anonymisées et agrégées, qui ne peuvent pas servir à vous identifier. Nous n'utilisons ni Google Analytics ni aucun autre service d'analyse qui installe des cookies de suivi.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Liens tiers
            </h2>
            <p>
              Notre site web peut contenir des liens vers des sites externes. Nous ne sommes pas responsables des pratiques de confidentialité ni du contenu des plateformes tierces.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Cookies et consentement
            </h2>
            <p>
              CompressMyPic n'installe lui-même aucun cookie pour ses outils d'image : la compression s'effectue entièrement dans votre navigateur et ne nécessite ni cookie, ni compte, ni préférence enregistrée de notre part. Les cookies de ce site proviennent de services tiers. Google AdSense et ses partenaires peuvent installer des cookies publicitaires pour vous montrer des annonces pertinentes et mesurer la fréquence d'affichage d'une annonce. Votre navigateur stocke ces cookies sur votre appareil et vous pouvez les supprimer à tout moment dans les paramètres de votre navigateur.
            </p>
            <p>
              Si vous visitez le site depuis l'Espace économique européen ou le Royaume-Uni, nous vous demandons votre consentement avant d'afficher de la publicité personnalisée, conformément au RGPD et à la politique de consentement des utilisateurs de l'UE de Google. Vous pouvez retirer ce consentement à tout moment en effaçant les cookies de votre navigateur ou en modifiant le choix de consentement proposé sur le site. Choisir des annonces non personnalisées n'arrête pas complètement la publicité, mais cela signifie que les annonces ne sont plus basées sur votre historique de navigation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Vos droits en vertu du RGPD
            </h2>
            <p>
              Si vous vous trouvez dans l'Espace économique européen ou au Royaume-Uni, le Règlement général sur la protection des données (RGPD) vous donne des droits sur vos données personnelles. Vous pouvez nous demander une copie des données personnelles que nous détenons sur vous, nous demander de les corriger si elles sont inexactes, de les supprimer, de limiter leur utilisation et de vous opposer à leur traitement. Lorsque le traitement repose sur votre consentement, vous pouvez le retirer à tout moment ; ce retrait n'affecte pas ce que nous avons fait légalement auparavant.
            </p>
            <p>
              Parce que nos outils traitent les images localement et que nous n'avons pas de comptes utilisateurs, les seules données personnelles que nous détenons normalement sont le nom, l'adresse e-mail et le message que vous envoyez via le formulaire de contact. Pour exercer l'un de ces droits, écrivez-nous à <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a> et nous répondrons sous 30 jours. Vous avez également le droit de déposer une plainte auprès de votre autorité locale de protection des données si vous pensez que nous avons traité vos données de manière injuste.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Conservation des données
            </h2>
            <p>
              Nous conservons les données personnelles uniquement le temps nécessaire à la finalité pour laquelle elles ont été collectées. Les messages du formulaire de contact sont conservés seulement jusqu'à ce que votre demande ait reçu une réponse et que la conversation soit terminée, puis pendant une courte période ensuite en cas de questions de suivi ; ils ne sont jamais utilisés à des fins de marketing ni partagés avec des tiers. Vos images ne sont jamais conservées du tout : elles n'existent que dans la mémoire de votre navigateur pendant que vous utilisez un outil et sont effacées dès que vous fermez ou actualisez l'onglet. Les données analytiques agrégées ne contiennent aucune information personnelle et ne sont conservées que sous forme résumée.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Sécurité et reCAPTCHA
            </h2>
            <p>
              Le site est servi en HTTPS, de sorte que la connexion entre votre navigateur et le site est chiffrée. Notre formulaire de contact est fourni via FormSubmit, qui transmet votre message à notre adresse e-mail, et le formulaire est protégé par Google reCAPTCHA pour bloquer le spam et les abus automatisés. Lorsque vous envoyez le formulaire, reCAPTCHA peut collecter des informations matérielles et logicielles, telles que les détails de votre navigateur et de votre appareil, pour distinguer les humains des robots ; ceci est régi par la <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                Politique de confidentialité
              </a> et les <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                Conditions d'utilisation
              </a> de Google. Nous ne vous demandons jamais d'envoyer des mots de passe, des informations de paiement ou des documents personnels sensibles via le formulaire de contact, et vous ne devriez jamais les inclure dans un message.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Confidentialité des enfants
            </h2>
            <p>
              CompressMyPic est un outil destiné au grand public et ne s'adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles d'enfants. Si vous êtes parent ou tuteur et pensez que votre enfant nous a envoyé des informations personnelles via le formulaire de contact, écrivez-nous par e-mail et nous les supprimerons rapidement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Modifications de cette politique
            </h2>
            <p>
              Nous pouvons mettre à jour cette politique lorsque le site change — par exemple, si nous ajoutons un nouveau service d'analyse, un nouveau partenaire publicitaire ou un nouveau moyen de nous contacter. Dans ce cas, nous modifierons la date de « Dernière mise à jour » en haut de cette page, et les changements importants seront décrits ici en langage simple. Continuer à utiliser le site après une modification signifie que vous acceptez la politique mise à jour.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. Contact
            </h2>
            <p>
              Si vous avez des questions sur cette politique, écrivez-nous à{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
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
