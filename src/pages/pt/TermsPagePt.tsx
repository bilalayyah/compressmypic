import React, { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsPagePtProps {
  onNavigate: (path: string) => void;
}

export const TermsPagePt: React.FC<TermsPagePtProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Termos de Serviço - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/pt/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao compressor de imagens</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <FileText className="w-6 h-6 text-[#7c3aed] dark:text-[#a78bfa]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Termos de Serviço
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            Última atualização: 14 de novembro de 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. Aceitação dos termos
            </h2>
            <p>
              Ao acessar e usar o CompressMyPic, você concorda em cumprir estes Termos de Serviço e fica sujeito a eles. Se você não concordar com alguma parte destes termos, pare de usar o serviço.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. Uso permitido
            </h2>
            <p>
              Você pode usar o CompressMyPic para otimizar imagens tanto para fins pessoais quanto comerciais. Você concorda em não usar o serviço para nenhuma atividade ilegal nem de nenhuma maneira que possa prejudicar o funcionamento, a segurança ou a disponibilidade do site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Direitos de propriedade intelectual
            </h2>
            <p>
              Você mantém 100% dos direitos autorais, da propriedade e dos direitos de propriedade intelectual sobre todas as imagens, fotos e gráficos que comprimir com nossa ferramenta. O CompressMyPic não reivindica nenhuma propriedade, licença nem direito sobre suas obras criativas. Todo o processamento é feito localmente no seu equipamento.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Isenção de garantias
            </h2>
            <p>
              O CompressMyPic é oferecido "como está" e "conforme a disponibilidade", sem garantias de nenhum tipo, expressas ou implícitas. Embora nos esforcemos para alcançar a máxima compatibilidade e o melhor desempenho em todos os navegadores, não garantimos que o serviço seja ininterrupto, esteja livre de erros ou atenda a requisitos técnicos específicos.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. Disponibilidade e alterações do serviço
            </h2>
            <p>
              O CompressMyPic é um serviço gratuito e não garantimos que ele estará disponível o tempo todo. Podemos alterar, suspender ou interromper qualquer ferramenta, recurso ou o site inteiro a qualquer momento, com ou sem aviso — por exemplo, para corrigir um erro, substituir uma tecnologia que não funciona mais nos navegadores modernos ou manter o serviço gratuito. Também podemos estabelecer limites razoáveis, como um tamanho máximo de arquivo por imagem (atualmente 20 MB para o compressor principal e 25 MB para os conversores de formato), e podemos alterar esses limites à medida que os navegadores e dispositivos melhoram. Como todo o processamento acontece no seu navegador, uma interrupção do site nunca coloca as suas imagens originais em risco: os seus arquivos permanecem no seu dispositivo.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Uso aceitável
            </h2>
            <p>
              Você concorda em usar o CompressMyPic apenas para fins lícitos e de uma forma que não prejudique o serviço nem outras pessoas. Em particular, você não deve tentar sobrecarregar, danificar ou fazer engenharia reversa do site, sondar suas vulnerabilidades de segurança, usar scripts automatizados para enviar um grande número de solicitações, nem usar o serviço para processar imagens que infrinjam os direitos autorais de outra pessoa, contenham material ilegal ou se destinem a enganar ou assediar. Você é responsável por garantir que tem o direito de usar cada imagem que processa e por manter uma cópia de segurança de qualquer imagem importante antes de comprimi-la ou convertê-la.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. Limitação de responsabilidade
            </h2>
            <p>
              Na máxima medida permitida por lei, o CompressMyPic e o seu proprietário não serão responsáveis por nenhuma perda indireta, incidental ou consequente decorrente do seu uso do serviço — incluindo, entre outras, perda de dados, perda de lucros ou o custo de recriar uma imagem. Como o serviço é gratuito, a nossa responsabilidade total por qualquer reclamação relacionada com o serviço limita-se ao valor que você pagou para usá-lo, que é zero. Isso não limita nenhuma responsabilidade que não possa ser limitada por lei, como a responsabilidade por fraude ou por morte ou lesão corporal causada por negligência.
            </p>
            <p>
              A compressão é, por natureza, um processo com perdas: reduzir o tamanho de um arquivo pode reduzir a sua qualidade, e alguns formatos, como o JPEG, não conseguem preservar a transparência. Você é responsável por verificar o resultado comprimido antes de excluir ou substituir um arquivo original, e não somos responsáveis pela perda de qualidade, pela falta de transparência ou por qualquer outra alteração que a compressão faça em uma imagem que você escolheu processar.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. Serviços de terceiros
            </h2>
            <p>
              O site usa serviços de terceiros para funcionar, incluindo hospedagem e entrega de conteúdo pela Cloudflare e entrega de mensagens pelo FormSubmit. Esses serviços têm os seus próprios termos e políticas de privacidade, e o seu uso deles é regido por esses documentos, além destes termos. Não somos responsáveis pela disponibilidade, pelo conteúdo ou pelas práticas de sites ou serviços de terceiros com links a partir do CompressMyPic.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. Lei aplicável
            </h2>
            <p>
              Estes termos são regidos pelas leis dos Emirados Árabes Unidos, de onde o site é operado, sem levar em conta as suas regras de conflito de leis. Qualquer disputa decorrente destes termos ou do seu uso do serviço, ou relacionada a eles, será resolvida pelos tribunais dos Emiratos Árabes Unidos. Se alguma parte destes termos for considerada inexequível, as demais partes continuarão a se aplicar integralmente.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. Alterações a estes termos
            </h2>
            <p>
              Podemos atualizar estes termos quando o serviço mudar — por exemplo, quando adicionarmos ferramentas novas, alterarmos os limites de tamanho de arquivo ou começarmos a usar um novo serviço de terceiros. Quando isso acontecer, atualizaremos a data de «Última atualização» no topo desta página. Se você continuar a usar o CompressMyPic depois que os termos mudarem, você aceita os termos atualizados. Se não concordar com uma alteração, pare de usar o serviço.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. Contato
            </h2>
            <p>
              Se você tiver alguma pergunta sobre estes termos, escreva para{' '}
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
