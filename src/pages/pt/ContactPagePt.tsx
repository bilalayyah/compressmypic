import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, AlertCircle, Mail, RotateCcw, Clock, ShieldCheck, Github, MessageSquare, Lightbulb, Bug } from 'lucide-react';

interface ContactPagePtProps {
  onNavigate: (path: string) => void;
}

export const ContactPagePt: React.FC<ContactPagePtProps> = ({ onNavigate }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Fale conosco - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/bilalayyah@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          subject: contactSubject || 'CompressMyPic Contact Inquiry',
          message: contactMessage,
          _subject: `New inquiry from ${contactName}: ${contactSubject || 'CompressMyPic'}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setContactName('');
        setContactEmail('');
        setContactSubject('');
        setContactMessage('');
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || 'Não foi possível enviar a mensagem. Tente novamente.');
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : 'Erro de rede. Tente enviar diretamente para bilalayyah@gmail.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/pt/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao compressor de imagens</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            Fale conosco
          </h1>
          <p className="mt-3 text-base text-[var(--ink-2)] leading-relaxed">
            Tem perguntas, comentários ou precisa de ajuda? Escreva para nossa equipe com o formulário abaixo ou fale conosco diretamente por e-mail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="space-y-6 md:col-span-1">
            <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Mail className="w-4 h-4 text-[#dc2626] dark:text-[#f87171]" />
                <span>Contato direto</span>
              </div>
              <p className="text-xs text-[var(--ink-2)] font-mono break-all select-all">
                bilalayyah@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Clock className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />
                <span>Tempo de resposta</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                Normalmente respondemos em 24 a 48 horas úteis.
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />
                <span>Compromisso de privacidade</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                Seu e-mail e os dados da sua mensagem só são usados para responder à sua pergunta e nunca são compartilhados.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {isSubmitted ? (
              <div className="p-8 pastel-card-6 border rounded-2xl text-center space-y-3 shadow-[var(--shadow)]">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] dark:text-[#4ade80] mx-auto" />
                <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)]">Mensagem enviada com sucesso</h2>
                <p className="text-sm text-[var(--ink-2)] max-w-md mx-auto">
                  Obrigado por escrever! Sua mensagem foi enviada pelo FormSubmit para bilalayyah@gmail.com. Responderemos em breve.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 bg-[var(--surface)] p-6 rounded-2xl border border-[var(--line)] shadow-[var(--shadow)]">
                {errorMessage && (
                  <div className="p-3 pastel-card-14 border text-[#b91c1c] dark:text-[#fca5a5] text-xs rounded-[11px] flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      Seu nome <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Maria Silva"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      E-mail <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="maria@exemplo.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    Assunto <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <input
                      id="contact-subject"
                      name="subject"
                    type="text"
                    required
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="Comentários, relato de erro ou pergunta geral"
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    Mensagem <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <textarea
                      id="contact-message"
                      name="message"
                    rows={5}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Como podemos ajudar você? Descreva seu problema ou sugestão em detalhes..."
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 btn-purple-pill disabled:opacity-50 font-semibold text-sm cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <RotateCcw className="w-4 h-4 animate-spin" />
                      <span>Enviando mensagem...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar mensagem</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Extra Information Sections */}
        <div className="mt-12 space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Quem administra o CompressMyPic</span>
            </h2>
            <p>
              O CompressMyPic é criado e mantido por Bilal, um criador independente que queria um compressor de imagens realmente gratuito e que respeitasse a sua privacidade. Ao contrário da maioria das ferramentas online, o CompressMyPic nunca envia as suas fotos para um servidor: cada imagem é comprimida diretamente no seu próprio navegador. Bilal lê cada mensagem pessoalmente e usa o seu feedback para corrigir erros, melhorar a qualidade e decidir quais ferramentas novas criar.
            </p>
            <p>
              Como este é um projeto pequeno e independente, e não uma grande empresa, você sempre receberá uma resposta direta e honesta — mesmo quando a resposta for que um determinado recurso ainda não é possível. Não há fila de suporte nem chatbot automático entre você e a pessoa que criou a ferramenta.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Sobre o que você pode nos escrever?</span>
            </h2>
            <p>
              A maneira mais rápida de receber ajuda é nos dizer exatamente o que aconteceu. Para relatar um erro, inclua o nome da ferramenta que você estava usando, o seu navegador e o tipo de arquivo de imagem — por exemplo, uma foto HEIC de um iPhone ou um PNG transparente. Para sugerir um recurso, descreva o que você estava tentando fazer e por que as ferramentas atuais não são suficientes. Também agradecemos relatos de resultados incorretos, como uma imagem comprimida que ficou pior do que o esperado, e correções aos nossos guias ou a qualquer página traduzida.
            </p>
            <p>
              Você também pode escrever sobre parcerias, consultas de imprensa e sugestões de ferramentas novas. Se você administra um site, um blog ou uma sala de aula e quer recomendar o CompressMyPic aos seus leitores ou alunos, adoraríamos saber — basta usar o formulário acima e escolher uma linha de assunto clara para que a sua mensagem chegue rapidamente ao lugar certo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Github className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Outras formas de falar com o Bilal</span>
            </h2>
            <p>
              Se você prefere um canal público, pode encontrar o Bilal e o projeto CompressMyPic na web. O código-fonte está no GitHub, onde você também pode relatar problemas técnicos e acompanhar o desenvolvimento. Guias longos sobre compressão de imagens são publicados no Dev.to, e o produto está listado no Indie Hackers, onde você pode acompanhar o progresso e deixar comentários.
            </p>
            <ul className="list-disc ps-6 space-y-1.5">
              <li>
                <a href="https://github.com/bilalayyah/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">GitHub — github.com/bilalayyah/compressmypic</a>
                {' '}— código-fonte, relatórios de erros e novidades do desenvolvimento.
              </li>
              <li>
                <a href="https://dev.to/bilalayyah" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Dev.to — dev.to/bilalayyah</a>
                {' '}— guias sobre compressão de JPG, PNG e WebP.
              </li>
              <li>
                <a href="https://www.indiehackers.com/product/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Indie Hackers — indiehackers.com/product/compressmypic</a>
                {' '}— página do produto, marcos e comentários da comunidade.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Antes de escrever</span>
            </h2>
            <p>
              Algumas verificações rápidas resolvem a maioria dos problemas sem esperar por uma resposta. O compressor principal aceita imagens de até 20 MB cada, enquanto os conversores de formato aceitam até 25 MB por arquivo — um arquivo maior será rejeitado antes mesmo de começar. Navegadores muito antigos podem não suportar formatos mais novos, como AVIF ou HEIC, então tentar uma versão recente do Chrome, Edge, Firefox ou Safari geralmente conserta uma ferramenta que parece quebrada. E como as suas imagens nunca saem do seu dispositivo, um problema com uma foto específica geralmente é causado pelo próprio arquivo, não pelo site.
            </p>
            <p>
              Quando nos escrever, inclua o nome e a versão do seu navegador, a ferramenta que você estava usando e o tamanho e o formato da imagem. Respondemos em inglês, geralmente em 24 a 48 horas úteis. Se a sua pergunta for sobre como os seus dados são tratados, você também pode ler primeiro a nossa 
              <button
                type="button"
                onClick={() => onNavigate('/pt/privacidade')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                Política de Privacidade
              </button>
               — lá está explicado em linguagem simples que as suas imagens nunca são enviadas nem armazenadas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Bug className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Relatar um problema</span>
            </h2>
            <p>
              Encontrou algo quebrado? Diga-nos em qual página aconteceu, no que você clicou e o que esperava ver. Capturas de tela ajudam muito e, se o problema envolver uma imagem específica, informe o formato e o tamanho — mas nunca nos envie fotos privadas ou sensíveis. Corrigimos os erros relatados o mais rápido possível e avisaremos por e-mail quando a correção estiver no ar.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
