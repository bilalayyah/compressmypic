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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이미지 압축기로 돌아가기</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-emerald-600" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              개인정보처리방침
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            최종 업데이트: 2026년 11월 12일
          </p>
        </div>

        {/* Exact Privacy Policy Text */}
        <div className="space-y-6 text-base text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              1. 클라이언트 측 이미지 처리
            </h2>
            <p>
              CompressMyPic은 무료 온라인 이미지 압축기입니다. 이미지는 HTML5 Canvas를 이용해 사용자의 브라우저에서 로컬로 처리됩니다. 이미지는 절대 저희 서버에 업로드되지 않으며, 저희는 사용자의 이미지를 수집, 저장, 공유하지 않습니다. 브라우저 탭을 닫거나 새로고침하면 모든 임시 메모리 내 객체가 삭제됩니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              2. 개인정보 수집 없음
            </h2>
            <p>
              압축 도구를 사용하는 데 계정, 비밀번호, 이메일 주소, 전화번호가 필요하지 않습니다. 문의 양식을 통해 자발적으로 제출한 연락처 정보는 해당 문의에 답변하는 용도로만 사용됩니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              3. 광고 (Google AdSense)
            </h2>
            <p>
              저희는 광고를 표시하기 위해 Google AdSense를 사용합니다(활성화 시). Google을 포함한 제3자 업체는 쿠키를 사용하여 사용자의 이 웹사이트 또는 다른 웹사이트에 대한 이전 방문 기록을 바탕으로 광고를 게재합니다. Google의 광고 쿠키 사용을 통해 Google과 그 파트너는 사용자의 이 사이트 및/또는 인터넷상의 다른 사이트 방문을 바탕으로 광고를 게재할 수 있습니다. Google 광고 설정(
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://adssettings.google.com
              </a>
              ) 또는{' '}
              <a
                href="http://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                http://www.aboutads.info/choices/
              </a>
              에서 맞춤 광고를 거부할 수 있습니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              4. 분석
            </h2>
            <p>
              현재 분석 쿠키를 사용하지 않습니다. 변경되는 경우 이 방침이 업데이트됩니다.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              5. 제3자 링크
            </h2>
            <p>
              본 웹사이트에는 외부 사이트로 연결되는 링크가 포함될 수 있습니다. 저희는 제3자 플랫폼의 개인정보 처리 관행이나 콘텐츠에 대해 책임지지 않습니다.
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              6. 문의
            </h2>
            <p>
              이 방침에 대해 질문이 있으시면{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-blue-600 hover:underline font-semibold"
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
