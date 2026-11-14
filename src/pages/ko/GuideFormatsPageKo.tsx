import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, FileImage, Camera, Layers, Globe, CheckCircle2, Scale } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface GuideFormatsPageKoProps {
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const STEPS: { title: string; text: string }[] = [
  {
    title: 'CompressMyPic 열기',
    text: '브라우저에서 compressmypic.online에 접속하세요. 설치할 것도, 계정을 만들 필요도 없으며, 파일이 서버에 업로드되는 일도 없습니다.',
  },
  {
    title: '이미지 업로드하기',
    text: '이미지를 드래그 앤 드롭하거나 "파일 찾아보기"를 눌러 선택하세요. JPG, PNG, WebP 파일을 모두 지원하며 이미지당 최대 20MB까지 가능합니다.',
  },
  {
    title: '결정하기: 형식 유지 또는 변환',
    text: '"원본"을 선택해 이미지가 이미 가진 형식을 유지하거나, 출력 형식으로 JPG, PNG, WebP 중 하나를 선택하세요. 아래 가이드를 참고해 결정하세요. 사진에는 JPG, 투명도가 필요하면 PNG, 웹사이트용으로 가장 작은 파일이 필요하면 WebP를 사용하세요.',
  },
  {
    title: '화질 프리셋 선택하기',
    text: '균형 프리셋(약 70%)으로 시작하세요. 완벽하게 보이길 원하는 사진은 높음 프리셋이나 85~90% 화질을 사용하세요. 작은 웹 이미지에는 더 낮은 설정도 괜찮습니다.',
  },
  {
    title: '실시간 크기를 확인하고 비교하기',
    text: '모든 이미지에 원래 크기와 압축 후 새 크기가 표시됩니다. 전후 비교를 열고 확대해 보세요. 차이를 볼 수 없다면 설정이 맞는 것입니다. 출력 형식을 WebP로 전환해 파일이 얼마나 작아지는지 확인해 보세요.',
  },
  {
    title: '이미지 다운로드하기',
    text: '단일 이미지를 다운로드하거나, 여러 이미지를 한 번에 변환했다면 "모두 다운로드(ZIP)"를 사용하세요. 원본 파일은 절대 변경되지 않습니다. 새롭고 작은 복사본을 받게 됩니다.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'fmt-faq-1',
    question: 'JPG와 PNG의 차이점은 무엇인가요?',
    answer: 'JPG는 사진을 위한 손실 압축 형식입니다. 일부 세부 묘사를 버려 훨씬 작은 파일을 만들며 투명도를 지원하지 않습니다. PNG는 무손실 형식으로 투명도를 지원하므로 로고와 그래픽에 완벽합니다. 하지만 PNG 사진은 같은 사진을 JPG로 저장한 것보다 몇 배 더 큽니다.',
  },
  {
    id: 'fmt-faq-2',
    question: 'WebP가 JPG보다 더 좋나요?',
    answer: '파일 크기 면에서는 네. WebP는 비슷한 화질에서 JPG보다 보통 25~35% 작고 투명도도 지원합니다. WebP보다 JPG를 선택해야 하는 유일한 이유는 호환성입니다. 일부 오래된 소프트웨어와 앱은 여전히 JPG를 더 잘 처리하며, WhatsApp은 JPG 사진을 더 안정적으로 미리 봅니다.',
  },
  {
    id: 'fmt-faq-3',
    question: 'WebP가 PNG보다 더 좋나요?',
    answer: '보통은 네. WebP는 PNG처럼 투명도를 지원하면서도 훨씬 작은 파일을 만들며, JPG처럼 손실 압축도 할 수 있습니다. PNG는 나중에 다시 편집할 로고나 그래픽처럼 완벽한 무손실 화질이 필요할 때 여전히 더 안전한 선택입니다.',
  },
  {
    id: 'fmt-faq-4',
    question: 'PNG는 투명도를 지원하고 JPG는 지원하지 않나요?',
    answer: '맞습니다. PNG는 투명한 배경(알파 채널)을 지원하므로 로고와 아이콘은 보통 PNG입니다. JPG는 투명도가 전혀 없습니다. JPG에서 투명한 영역은 단색, 보통 흰색이 되므로 투명한 배경이 있는 로고를 JPG로 저장하면 안 됩니다.',
  },
  {
    id: 'fmt-faq-5',
    question: 'PNG 파일이 JPG보다 훨씬 큰 이유는 무엇인가요?',
    answer: 'PNG가 무손실이기 때문입니다. 모든 픽셀의 세부 묘사를 정확히 그대로 유지하는 반면, JPG는 눈이 거의 알아차리지 못하는 세부 묘사를 버립니다. 카메라 사진을 PNG로 저장하면 JPG와 같은 사진보다 5~10배 커질 수 있습니다. 그래서 사진은 거의 절대 PNG로 저장하면 안 됩니다.',
  },
  {
    id: 'fmt-faq-6',
    question: 'WebP 대신 JPG를 사용해야 할 때는 언제인가요?',
    answer: '이미지를 오래된 소프트웨어에서 열거나, WhatsApp이나 이메일로 보내 미리 보기를 확실히 하고 싶거나, 인쇄할 때 JPG를 사용하세요. WebP는 웹사이트에 더 좋지만, 누군가와 사진을 공유할 때는 JPG가 여전히 가장 보편적인 형식입니다.',
  },
  {
    id: 'fmt-faq-7',
    question: 'PNG를 JPG로 변환할 수 있나요?',
    answer: '네. PNG를 CompressMyPic에 업로드하고 출력 형식으로 JPG를 선택한 뒤 다운로드하세요. 다만 JPG에는 투명도가 없다는 점을 기억하세요. PNG에 투명한 배경이 있다면 먼저 배경색을 선택하세요. 그렇지 않으면 투명한 영역이 단색 흰색이 됩니다.',
  },
  {
    id: 'fmt-faq-8',
    question: 'JPG를 WebP로 변환할 수 있나요?',
    answer: '네. JPG를 업로드하고 출력 형식으로 WebP를 선택한 뒤 다운로드하세요. 같은 눈에 보이는 화질에서 파일이 보통 25~35% 작아집니다. 여러 장의 JPG를 한 번에 WebP로 변환하고 모두 ZIP으로 다운로드할 수 있습니다.',
  },
  {
    id: 'fmt-faq-9',
    question: 'JPG를 PNG로 변환하면 화질이 좋아지나요?',
    answer: '아니요. JPG를 PNG로 변환해도 JPG 압축으로 이미 버려진 세부 묘사를 되찾을 수 없습니다. 파일만 훨씬 커질 뿐입니다. JPG를 PNG로 변환하는 유일한 좋은 이유는 더 이상 화질을 잃지 않고 이미지를 다시 편집해야 할 때입니다.',
  },
  {
    id: 'fmt-faq-10',
    question: '웹사이트에는 어떤 형식을 사용해야 하나요?',
    answer: 'WebP를 먼저, JPG를 대체 형식으로 사용하세요. WebP는 가장 작은 파일을 제공해 페이지를 더 빠르게 로드합니다. 페이지 속도는 방문자와 Google 모두에게 중요합니다. 투명도가 필요한 이미지(예: 로고)에만 PNG를 사용하고, WebP를 사용할 수 없다면 사진에는 JPG를 사용하세요.',
  },
  {
    id: 'fmt-faq-11',
    question: '로고에 가장 좋은 형식은 무엇인가요?',
    answer: '로고에 투명한 배경이 필요하다면 PNG를 사용하세요. JPG는 투명도를 지원하지 않기 때문입니다. WebP도 투명도를 지원하고 더 작은 파일을 만들므로 웹사이트의 로고에 좋은 선택입니다. 배경이 투명하게 유지되어야 한다면 로고를 JPG로 저장하면 안 됩니다.',
  },
  {
    id: 'fmt-faq-12',
    question: '스크린샷에 가장 좋은 형식은 무엇인가요?',
    answer: 'PNG 또는 WebP입니다. 스크린샷은 날카로운 모서리와 평평한 색상을 가지고 있어 PNG와 WebP가 잘 처리합니다. JPG는 날카로운 글자 모서리를 흐릿하게 만듭니다. 가장 작은 스크린샷 파일을 원한다면 CompressMyPic에서 WebP 출력을 사용해 보세요. 보통 PNG보다 훨씬 작으면서 눈에 보이는 차이는 없습니다.',
  },
  {
    id: 'fmt-faq-13',
    question: '모든 브라우저가 이제 WebP를 지원하나요?',
    answer: '네, 사실상 모두 지원합니다. Chrome, Edge, Firefox, Safari와 모든 최신 모바일 브라우저가 수년 전부터 WebP를 지원해 왔습니다. 아주 오래된 브라우저와 일부 오래된 앱만 WebP를 열 수 없으며, 그것이 JPG가 여전히 유용한 유일한 이유입니다.',
  },
  {
    id: 'fmt-faq-14',
    question: 'WhatsApp이나 Instagram에서 WebP를 받나요?',
    answer: 'WhatsApp은 WebP 파일을 받을 수 있지만 일반 사진처럼 미리 보기가 되지 않을 수 있으므로, 사진을 공유할 때는 JPG가 더 안전합니다. Instagram은 게시물에 JPG와 PNG를 받으며 업로드를 자체적으로 변환합니다. 소셜 미디어 공유에는 사진에 JPG를 사용하세요.',
  },
  {
    id: 'fmt-faq-15',
    question: '사진을 WebP로 변환하면 화질이 떨어지나요?',
    answer: '사용자가 선택한 만큼만 떨어집니다. WebP는 JPG와 같은 원리를 사용합니다. 약간의 세부 묘사를 희생해 더 작은 파일을 만드는 화질 설정입니다. 80~90% 화질에서는 WebP 사진이 원본 JPG와 동일하게 보이며 파일은 약 3분의 1 작아집니다.',
  },
  {
    id: 'fmt-faq-16',
    question: 'JPG와 JPEG의 차이점은 무엇인가요?',
    answer: '차이가 없습니다. JPG와 JPEG는 같은 형식입니다. JPEG는 정식 명칭(Joint Photographic Experts Group)이고 JPG는 짧은 파일 확장자입니다. photo.jpg라는 파일과 photo.jpeg라는 파일은 같은 종류의 이미지입니다.',
  },
  {
    id: 'fmt-faq-17',
    question: '원본 형식을 유지해야 하나요, 아니면 변환해야 하나요?',
    answer: '크기에 만족한다면 원본을 유지하세요. 가장 간단한 선택이며 손실이 없습니다. 이유가 있을 때 변환하세요. 웹사이트 사진을 줄이려면 JPG에서 WebP로, 투명도가 필요 없는 사진을 줄이려면 PNG에서 JPG로, 로고를 줄이려면 PNG에서 WebP로 변환하세요.',
  },
  {
    id: 'fmt-faq-18',
    question: '어떤 형식이 가장 작은 파일 크기를 제공하나요?',
    answer: '거의 모든 경우에 WebP입니다. 사진의 경우 WebP는 같은 눈에 보이는 화질에서 JPG보다 보통 25~35% 작습니다. 투명도가 있는 그래픽의 경우 WebP는 보통 PNG보다 훨씬 작습니다. 그래서 WebP가 웹사이트에 가장 좋은 형식입니다.',
  },
  {
    id: 'fmt-faq-19',
    question: 'CompressMyPic으로 JPG, PNG, WebP 사이에서 변환할 수 있나요?',
    answer: '네. JPG, PNG, WebP 이미지를 업로드하고 원하는 출력 형식(원본, JPG, PNG, WebP)을 선택한 뒤 변환된 파일을 다운로드하세요. 여러 이미지를 같은 설정으로 한 번에 변환하고 모두 ZIP으로 다운로드할 수 있습니다.',
  },
  {
    id: 'fmt-faq-20',
    question: 'PNG를 JPG로 변환하면 투명도는 어떻게 되나요?',
    answer: '사라집니다. JPG는 투명도를 저장할 수 없으므로 PNG의 투명한 부분은 단색이 됩니다. CompressMyPic에서는 해당 영역을 채울 배경색을 선택할 수 있으므로 이미지가 사용될 위치에 맞는 색을 고르세요. 보통 흰색이 일반적인 선택입니다.',
  },
];

export const GuideFormatsPageKo: React.FC<GuideFormatsPageKoProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['fmt-faq-1', 'fmt-faq-10']));

  useEffect(() => {
    document.title = 'JPG vs PNG vs WebP: 어떤 형식을 사용해야 할까요?';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'JPG vs PNG vs WebP를 간단히 설명합니다. 파일 크기, 화질, 투명도를 비교해 사진, 로고, 웹사이트에 맞는 형식을 선택하세요.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/ko/gaideu/jpg-vs-png-vs-webp';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: 'JPG, PNG, WebP 중 선택하고 이미지를 변환하는 방법',
          description: 'JPG, PNG, WebP를 비교한 뒤 CompressMyPic으로 이미지를 압축하거나 변환하세요.',
          step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text })),
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQ_DATA.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'guide-formats-ko-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-formats-ko-jsonld');
      if (existing) existing.remove();
    };
  }, []);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="bg-[var(--bg)] py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/ko/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] dark:hover:text-[#ddd6fe] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이미지 압축기로 돌아가기</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-[-0.025em] leading-[1.15]">
            JPG vs PNG vs WebP — 어떤 형식을 사용해야 할까요?
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            잘못된 형식을 선택하면 이미지가 필요한 것보다 10배 커지거나 투명한 로고가 망가질 수 있습니다. 간단하고 정직한 비교와 몇 초 만에 형식을 변환하는 방법을 소개합니다.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Scale className="w-4 h-4" />
              </span>
              <span>짧은 답변</span>
            </h2>
            <p>
              한 가지만 기억한다면 이것을 기억하세요. 사진에는 JPG, 로고와 투명도가 필요한 모든 것에는 PNG, 가장 작은 파일이 필요할 때는 WebP를 사용하세요. 특히 웹사이트에서요. 아래 표가 그 이유를 보여줍니다.
            </p>
            <div className="overflow-x-auto pt-1">
              <table className="w-full text-sm border border-[var(--line)] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-[var(--shadow)]">
                <thead>
                  <tr className="bg-[var(--bg-soft)] text-[var(--ink-navy)] text-left border-b border-[var(--line)]">
                    <th className="px-4 py-3 font-semibold">형식</th>
                    <th className="px-4 py-3 font-semibold">파일 크기</th>
                    <th className="px-4 py-3 font-semibold">투명도</th>
                    <th className="px-4 py-3 font-semibold">가장 적합한 용도</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)]">
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#7c3aed] dark:text-[#c4b5fd]">JPG</td>
                    <td className="px-4 py-3">작음</td>
                    <td className="px-4 py-3">아니요</td>
                    <td className="px-4 py-3">사진, 공유, 인쇄</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#7c3aed] dark:text-[#c4b5fd]">PNG</td>
                    <td className="px-4 py-3">큼</td>
                    <td className="px-4 py-3">예</td>
                    <td className="px-4 py-3">로고, 아이콘, 스크린샷</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-[#7c3aed] dark:text-[#c4b5fd]">WebP</td>
                    <td className="px-4 py-3">가장 작음</td>
                    <td className="px-4 py-3">예</td>
                    <td className="px-4 py-3">웹사이트, 웹 사진</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-2">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Camera className="w-4 h-4" />
              </span>
              <span>JPG: 사진에 가장 적합</span>
            </h2>
            <p className="text-sm sm:text-base">
              JPG(JPEG라고도 표기)는 고전적인 사진 형식입니다. 손실 압축을 사용합니다. 눈이 거의 알아차리지 못하는 미세한 세부 묘사를 버려 파일을 극적으로 작게 만듭니다. 5MB 카메라 사진이 JPG로 500KB가 되면서도 여전히 훌륭하게 보일 수 있습니다. JPG는 투명도를 지원하지 않으므로 로고에는 잘못된 선택이지만, 일반적인 사진에는 모든 기기와 앱에서 열 수 있는 안전하고 보편적인 기본 형식입니다.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-6">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(6)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>PNG: 로고와 투명도에 가장 적합</span>
            </h2>
            <p className="text-sm sm:text-base">
              PNG는 무손실 형식입니다. 모든 픽셀을 정확히 유지하고 투명한 배경을 지원합니다. 그래서 로고, 아이콘, 글자가 있는 그래픽에 적합한 형식입니다. 대가는 파일 크기입니다. 사진으로 저장한 PNG는 같은 사진을 JPG로 저장한 것보다 5~10배 커질 수 있습니다. 특별한 이유가 없다면 카메라 사진을 PNG로 저장하지 마세요.
            </p>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-0">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Globe className="w-4 h-4" />
              </span>
              <span>WebP: 웹사이트에 가장 적합</span>
            </h2>
            <p className="text-sm sm:text-base">
              WebP는 Google이 만든 최신 형식입니다. 모든 것을 해냅니다. JPG 같은 손실 압축, PNG 같은 투명도, 그리고 같은 눈에 보이는 화질에서 JPG보다 보통 25~35% 작은 파일입니다. 모든 최신 브라우저가 지원하므로 웹사이트 이미지에 가장 좋은 형식입니다. 유일한 약점은 오래된 소프트웨어와의 호환성과 WhatsApp 미리 보기입니다. 그곳에서는 JPG가 여전히 더 안전합니다.
            </p>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-1.png"
              alt="같은 사진을 JPG, PNG, WebP로 저장하고 파일 크기를 비교한 스크린샷"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              같은 사진을 세 가지 형식으로: WebP가 가장 작고, PNG가 가장 크며, JPG가 그 중간입니다.
            </figcaption>
          </figure>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(4)} flex items-center justify-center shrink-0`}>
                <FileImage className="w-4 h-4" />
              </span>
              <span>단계별 가이드: 이미지 압축 또는 변환하기</span>
            </h2>
            <ol className="space-y-3">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className={`flex gap-3.5 p-4 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(i * 2)}`}
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg btn-purple-grad text-sm font-mono font-bold flex items-center justify-center mt-0.5 shadow-xs">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-sans font-bold text-[var(--ink-navy)] text-sm sm:text-base">{step.title}</div>
                    <p className="text-sm sm:text-base text-[var(--ink-2)] mt-0.5">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>작업별 형식 선택</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">카메라 사진 — JPG 또는 WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  공유와 인쇄에는 JPG, 웹사이트에는 WebP를 사용하세요. 두 형식 모두 원본 크기의 일부만으로 사진을 훌륭하게 유지합니다.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(3)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">로고와 아이콘 — PNG 또는 WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  투명도가 필요하므로 JPG는 제외됩니다. PNG는 안전한 고전 형식이고, WebP는 더 작으며 최신 환경 어디에서나 작동합니다.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(6)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">스크린샷 — WebP 또는 PNG</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  날카로운 글자와 평평한 색상은 WebP와 PNG에 잘 맞습니다. JPG는 글자 모서리를 흐릿하게 하므로 스크린샷에는 피하세요.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(9)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">웹사이트 이미지 — WebP</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  가장 작은 파일은 더 빠른 페이지를 의미합니다. 웹사이트 사진을 WebP로 변환하고 아주 오래된 브라우저를 위해 JPG를 대체 형식으로 유지하세요.
                </p>
              </div>
            </div>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/jpg-vs-png-vs-webp-2.png"
              alt="CompressMyPic에서 출력 형식 JPG, PNG, WebP를 선택하는 스크린샷"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              CompressMyPic에서 출력 형식을 선택하세요. 원본을 유지하거나 JPG, PNG, WebP로 변환하세요.
            </figcaption>
          </figure>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Layers className="w-4 h-4" />
              </span>
              <span>자주 묻는 질문</span>
            </h2>
            <div className="space-y-3">
              {FAQ_DATA.map((item, idx) => {
                const isOpen = openIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    className={`border rounded-2xl overflow-hidden shadow-[var(--shadow)] transition-shadow hover:shadow-[var(--shadow-lg)] ${getPastelCardClass(idx)}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left transition-colors cursor-pointer hover:bg-white/30 dark:hover:bg-white/5"
                    >
                      <span className="text-sm sm:text-base font-bold text-[var(--ink-navy)]">{item.question}</span>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#7c3aed] dark:text-[#c4b5fd]' : 'text-[var(--ink-3)]'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 py-4 text-sm sm:text-base text-[var(--ink-2)] leading-relaxed border-t border-black/5 dark:border-white/10 bg-white/55 dark:bg-slate-900/35">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Related guides */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">관련 가이드</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/ko/gaideu/watsae-yong-imiji-apchuk')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">화질 저하 없이 WhatsApp용 이미지를 압축하는 방법</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">먼저 직접 사진을 축소한 뒤 문서로 보내 WhatsApp이 사진을 흐릿하게 만들지 못하게 하세요.</p>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/ko/gaideu/imiji-keugi-reul-100kb-ro-juligi')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(2)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">웹사이트와 이메일용 이미지 크기를 100KB로 줄이는 방법</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">사진을 망치지 않고 100KB에 도달하는 단계별 가이드입니다.</p>
              </button>
            </div>
          </section>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/ko/')}
              className="flex-1 px-5 py-3 rounded-[12px] btn-purple-grad text-sm font-semibold shadow-sm transition-all cursor-pointer"
            >
              이미지 무료 압축하기
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/ko/gaideu/watsae-yong-imiji-apchuk')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#7c3aed]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              WhatsApp용으로 압축하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
