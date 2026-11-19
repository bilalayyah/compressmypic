import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageKoProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageKo: React.FC<PrivacyPageKoProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = '개인정보처리방침 - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              개인정보처리방침
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            최종 업데이트: 2026년 11월 15일
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. 클라이언트 측 이미지 처리
            </h2>
            <p>
              CompressMyPic은 무료 온라인 이미지 압축기입니다. 이미지는 HTML5 Canvas를 이용해 사용자의 브라우저에서 로컬로 처리됩니다. 이미지는 절대 저희 서버에 업로드되지 않으며, 저희는 사용자의 이미지를 수집, 저장, 공유하지 않습니다. 브라우저 탭을 닫거나 새로고침하면 모든 임시 메모리 내 객체가 삭제됩니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. 개인정보 수집 없음
            </h2>
            <p>
              압축 도구를 사용하는 데 계정, 비밀번호, 이메일 주소, 전화번호가 필요하지 않습니다. 문의 양식을 통해 자발적으로 제출한 연락처 정보는 해당 문의에 답변하는 용도로만 사용됩니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. 광고
            </h2>
            <p>
              CompressMyPic은 현재 광고를 표시하지 않습니다. 이 사이트는 광고 쿠키를 설정하지 않습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. 분석
            </h2>
            <p>
              저희는 사이트가 어떻게 사용되는지 종합적으로 파악하기 위해 Google Analytics 4(GA4)를 사용합니다. 예를 들어 어떤 도구가 인기 있는지, 어떤 페이지를 방문하는지 등입니다. GA4는 방문한 페이지, 체류 시간, 기기 및 브라우저에 대한 일반적인 정보 등 익명화된 사용 데이터를 수집합니다. GA4는 방문을 구분하기 위해 기기에 쿠키(_ga 등)를 설정할 수 있습니다. 저희는 개인을 식별하기 위해 GA4를 사용하지 않습니다. Google Analytics 차단 부가기능(https://tools.google.com/dlpage/gaoptout)을 설치하거나 브라우저 설정에서 쿠키를 비활성화하여 언제든지 Google Analytics를 거부할 수 있습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. 제3자 링크
            </h2>
            <p>
              본 웹사이트에는 외부 사이트로 연결되는 링크가 포함될 수 있습니다. 저희는 제3자 플랫폼의 개인정보 처리 관행이나 콘텐츠에 대해 책임지지 않습니다.
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. 쿠키 및 동의
            </h2>
            <p>
              CompressMyPic 자체는 이미지 도구에 대해 어떠한 쿠키도 설정하지 않습니다. 압축은 전적으로 사용자의 브라우저 안에서 이루어지며, 저희 측의 쿠키, 계정, 저장된 설정이 필요하지 않습니다. 이 사이트의 쿠키는 제3자 서비스에서 제공됩니다. 예를 들어 Google 애널리틱스는 사용 통계 목적으로 쿠키를 설정할 수 있습니다. 이러한 쿠키는 사용자의 브라우저에 의해 기기에 저장되며, 브라우저 설정에서 언제든지 삭제할 수 있습니다.
            </p>
            <p>
              CompressMyPic은 현재 광고를 표시하지 않으므로, 어느 지역의 방문자에게도 광고 동의를 요청하지 않습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. GDPR에 따른 권리
            </h2>
            <p>
              유럽경제지역 또는 영국에 거주하시는 경우, 일반 데이터 보호 규정(GDPR)에 따라 개인 데이터에 대한 권리가 있습니다. 저희가 보유한 사용자 개인 데이터의 사본을 요청하거나, 잘못된 경우 정정을 요청하거나, 삭제를 요청하거나, 사용 제한을 요청하거나, 처리에 이의를 제기할 수 있습니다. 처리가 사용자의 동의에 근거한 경우 언제든지 동의를 철회할 수 있으며, 철회는 그 전에 적법하게 수행된 내용에 영향을 주지 않습니다.
            </p>
            <p>
              저희 도구는 이미지를 로컬에서 처리하고 사용자 계정이 없으므로, 저희가 일반적으로 보유하는 개인 데이터는 문의 양식을 통해 보내주신 이름, 이메일 주소, 메시지뿐입니다. 이러한 권리를 행사하시려면 <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>로 이메일을 보내주세요. 30일 이내에 답변드리겠습니다. 또한 저희가 데이터를 부당하게 처리했다고 생각되시면 현지 데이터 보호 기관에 불만을 제기할 권리도 있습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. 데이터 보존
            </h2>
            <p>
              저희는 개인 데이터를 수집한 목적에 필요한 기간 동안만 보관합니다. 문의 양식 메시지는 문의에 답변이 완료되고 대화가 끝날 때까지, 그리고 후속 질문에 대비해 그 후 짧은 기간 동안만 보관됩니다. 마케팅에 사용되거나 제3자와 공유되는 일은 결코 없습니다. 사용자의 이미지는 전혀 보관되지 않습니다. 도구를 사용하는 동안 사용자의 브라우저 메모리에만 존재하며, 탭을 닫거나 새로고침하는 순간 삭제됩니다. 집계된 분석 데이터에는 개인 정보가 포함되지 않으며 요약 형태로만 보관됩니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. 보안 및 reCAPTCHA
            </h2>
            <p>
              이 사이트는 HTTPS로 제공되므로 사용자의 브라우저와 사이트 간의 연결이 암호화됩니다. 저희 문의 양식은 FormSubmit을 통해 제공되며, 사용자의 메시지를 저희 이메일 주소로 전달하고, 양식은 스팸 및 자동화된 악용을 차단하기 위해 Google reCAPTCHA로 보호됩니다. 양식을 제출하면 reCAPTCHA는 사람과 봇을 구별하기 위해 브라우저 및 기기 세부 정보와 같은 하드웨어 및 소프트웨어 정보를 수집할 수 있으며, 이는 Google의 <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                개인정보처리방침
              </a> 및 <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline"
              >
                이용약관
              </a>의 적용을 받습니다. 저희는 문의 양식을 통해 비밀번호, 결제 정보, 민감한 개인 문서를 보내달라고 요청하지 않으며, 메시지에도 포함하지 마세요.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. 어린이 개인정보 보호
            </h2>
            <p>
              CompressMyPic은 일반 대중을 위한 도구이며 13세 미만 어린이를 대상으로 하지 않습니다. 저희는 어린이의 개인 정보를 고의로 수집하지 않습니다. 부모님이나 보호자로서 자녀가 문의 양식을 통해 개인 정보를 보냈다고 생각되시면 이메일로 연락해 주세요. 즉시 삭제하겠습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. 본 방침의 변경
            </h2>
            <p>
              저희는 사이트가 변경될 때 본 방침을 업데이트할 수 있습니다. 예를 들어 새로운 분석 서비스, 새로운 광고 파트너, 새로운 연락 방법을 추가하는 경우가 그렇습니다. 그럴 경우 이 페이지 상단의 ‘최종 업데이트’ 날짜를 변경하고, 중요한 변경 사항은 이곳에서 쉬운 말로 설명합니다. 변경 후에도 사이트를 계속 사용하면 업데이트된 방침에 동의한 것으로 간주됩니다.
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. 문의
            </h2>
            <p>
              이 방침에 대해 질문이 있으시면{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              으로 연락해 주세요.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
