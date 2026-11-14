import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, AlertCircle, Mail, RotateCcw, Clock, ShieldCheck } from 'lucide-react';

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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
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
                <Mail className="w-4 h-4 text-[#7c3aed] dark:text-[#a78bfa]" />
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
                    <label className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      이름 <span className="text-[#7c3aed] dark:text-[#c4b5fd]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="홍길동"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      이메일 주소 <span className="text-[#7c3aed] dark:text-[#c4b5fd]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="hong@example.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    제목 <span className="text-[#7c3aed] dark:text-[#c4b5fd]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="피드백, 버그 신고 또는 일반 문의"
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    메시지 <span className="text-[#7c3aed] dark:text-[#c4b5fd]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="어떤 도움이 필요하신가요? 문제나 제안을 자세히 설명해 주세요..."
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
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
      </div>
    </div>
  );
};
