import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, AlertCircle, Mail, RotateCcw, Clock, ShieldCheck, Github, MessageSquare, Lightbulb, Bug } from 'lucide-react';

interface ContactPageKoProps {
  onNavigate: (path: string) => void;
}

export const ContactPageKo: React.FC<ContactPageKoProps> = ({ onNavigate }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = '문의하기 - CompressMyPic';
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
        throw new Error(data?.message || '메시지를 보낼 수 없습니다. 다시 시도해 주세요.');
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : '네트워크 오류입니다. bilalayyah@gmail.com으로 직접 보내 주세요.'
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
            onClick={() => onNavigate('/ko/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이미지 압축기로 돌아가기</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            문의하기
          </h1>
          <p className="mt-3 text-base text-[var(--ink-2)] leading-relaxed">
            질문, 피드백이 있거나 도움이 필요하신가요? 아래 양식을 이용해 팀에 연락하거나 이메일로 직접 문의해 주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="space-y-6 md:col-span-1">
            <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Mail className="w-4 h-4 text-[#dc2626] dark:text-[#f87171]" />
                <span>직접 문의</span>
              </div>
              <p className="text-xs text-[var(--ink-2)] font-mono break-all select-all">
                bilalayyah@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Clock className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />
                <span>응답 시간</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                보통 영업일 기준 24~48시간 이내에 답변드립니다.
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />
                <span>개인정보 보호 약속</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                이메일과 메시지 내용은 문의에 답변하는 용도로만 사용되며 절대 공유되지 않습니다.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {isSubmitted ? (
              <div className="p-8 pastel-card-6 border rounded-2xl text-center space-y-3 shadow-[var(--shadow)]">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] dark:text-[#4ade80] mx-auto" />
                <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)]">메시지가 성공적으로 전달되었습니다</h2>
                <p className="text-sm text-[var(--ink-2)] max-w-md mx-auto">
                  연락해 주셔서 감사합니다! 메시지가 FormSubmit을 통해 bilalayyah@gmail.com으로 전송되었습니다. 곧 답변드리겠습니다.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                  >
                    다른 메시지 보내기
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
                      이름 <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="홍길동"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      이메일 주소 <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="hong@example.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    제목 <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <input
                      id="contact-subject"
                      name="subject"
                    type="text"
                    required
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="피드백, 버그 신고 또는 일반 문의"
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    메시지 <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <textarea
                      id="contact-message"
                      name="message"
                    rows={5}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="어떤 도움이 필요하신가요? 문제나 제안을 자세히 설명해 주세요..."
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
                      <span>메시지 전송 중...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>메시지 보내기</span>
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
              <span>CompressMyPic 운영자</span>
            </h2>
            <p>
              CompressMyPic은 개인정보를 존중하는 진정으로 무료인 이미지 압축기를 만들고 싶었던 독립 크리에이터 Bilal이 만들고 운영하고 있습니다. 대부분의 온라인 도구와 달리 CompressMyPic은 사용자의 사진을 서버에 업로드하지 않습니다. 모든 이미지는 사용자의 브라우저 안에서 직접 압축됩니다. Bilal은 모든 메시지를 직접 읽고, 여러분의 피드백을 바탕으로 버그를 수정하고 품질을 개선하며 다음에 만들 도구를 결정합니다.
            </p>
            <p>
              이곳은 대기업이 아닌 작은 독립 프로젝트이기 때문에, 특정 기능을 아직 만들 수 없다는 답변일 때에도 항상 직접적이고 솔직한 답변을 받으실 수 있습니다. 여러분과 도구를 만든 사람 사이에 지원 대기열이나 자동 챗봇은 없습니다.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>어떤 내용으로 문의할 수 있나요?</span>
            </h2>
            <p>
              가장 빨리 도움을 받는 방법은 정확히 무슨 일이 일어났는지 알려주는 것입니다. 버그를 신고할 때는 사용하던 도구의 이름, 브라우저, 이미지 파일 형식을 알려주세요. 예를 들어 iPhone의 HEIC 사진이나 투명 PNG 같은 것입니다. 기능을 요청할 때는 무엇을 하려고 했는지, 그리고 현재 도구로는 왜 부족한지 설명해 주세요. 압축된 이미지가 예상보다 나쁘게 보이는 등 잘못된 결과에 대한 신고나 가이드 및 번역 페이지에 대한 수정 제안도 환영합니다.
            </p>
            <p>
              파트너십, 언론 문의, 새 도구에 대한 제안에 대해서도 문의하실 수 있습니다. 웹사이트, 블로그, 교실을 운영하면서 독자나 학생에게 CompressMyPic을 추천하고 싶으시다면ぜひ 연락해 주세요. 위 양식을 사용하고 명확한 제목을 적어 주시면 메시지가 빠르게 올바른 곳에 도착합니다.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Github className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>Bilal에게 연락하는 다른 방법</span>
            </h2>
            <p>
              공개 채널을 선호하신다면 웹에서 Bilal과 CompressMyPic 프로젝트를 찾으실 수 있습니다. 소스 코드는 GitHub에 있으며, 기술적인 문제를 신고하고 개발 과정을 지켜볼 수도 있습니다. 이미지 압축에 대한 자세한 가이드는 Dev.to에 게시되며, 제품은 Indie Hackers에 등록되어 있어 진행 상황을 확인하고 피드백을 남길 수 있습니다.
            </p>
            <ul className="list-disc ps-6 space-y-1.5">
              <li>
                <a href="https://github.com/bilalayyah/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">GitHub — github.com/bilalayyah/compressmypic</a>
                {' '}— 소스 코드, 버그 신고, 개발 소식.
              </li>
              <li>
                <a href="https://dev.to/bilalayyah" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Dev.to — dev.to/bilalayyah</a>
                {' '}— JPG, PNG, WebP 압축 가이드.
              </li>
              <li>
                <a href="https://www.indiehackers.com/product/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Indie Hackers — indiehackers.com/product/compressmypic</a>
                {' '}— 제품 페이지, 주요 성과, 커뮤니티 피드백.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>문의하기 전에</span>
            </h2>
            <p>
              몇 가지 빠른 확인만으로 대부분의 문제를 답변을 기다리지 않고 해결할 수 있습니다. 기본 압축기는 이미지 한 장당 최대 20MB까지, 형식 변환기는 파일당 최대 25MB까지 지원합니다. 그보다 큰 파일은 시작 전에 거부됩니다. 매우 오래된 브라우저는 AVIF나 HEIC 같은 최신 형식을 지원하지 않을 수 있으므로, 최신 버전의 Chrome, Edge, Firefox 또는 Safari를 사용해 보면 고장난 것처럼 보이던 도구가 해결되는 경우가 많습니다. 또한 이미지가 사용자의 기기를 절대 떠나지 않으므로, 특정 사진에만 문제가 있다면 원인은 웹사이트가 아니라 파일 자체에 있는 경우가 대부분입니다.
            </p>
            <p>
              문의하실 때는 브라우저 이름과 버전, 사용하던 도구, 이미지의 크기와 형식을 알려주세요. 영어로 답변드리며 보통 24~48 업무 시간 이내에 회신합니다. 데이터 처리 방법에 대한 질문이 있으시다면 먼저 
              <button
                type="button"
                onClick={() => onNavigate('/ko/gaein-jeongbo')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                개인정보처리방침
              </button>
              을 읽어보세요. 이미지가 절대 업로드되거나 저장되지 않는다고 쉬운 말로 설명되어 있습니다.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Bug className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>문제 신고하기</span>
            </h2>
            <p>
              고장난 부분을 발견하셨나요? 어느 페이지에서 발생했는지, 무엇을 클릭했는지, 대신 무엇을 보기를 기대했는지 알려주세요. 스크린샷이 큰 도움이 되며, 특정 이미지와 관련된 문제라면 형식과 크기를 알려주세요. 단, 사적인 사진이나 민감한 사진은 절대 보내지 마세요. 신고된 버그는 최대한 빨리 수정하고, 수정이 적용되면 이메일로 알려드리겠습니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
