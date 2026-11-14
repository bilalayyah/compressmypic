import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronDown, MessageCircle, Send, Smartphone, CheckCircle2, FileWarning, Layers } from 'lucide-react';
import { getPastelCardClass, getPastelTileClass } from '../../utils/pastel';

interface GuideWhatsAppPageKoProps {
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
    text: '휴대폰이나 컴퓨터 브라우저에서 compressmypic.online에 접속하세요. 설치할 것도, 계정을 만들 필요도 없습니다. 도구가 바로 열립니다.',
  },
  {
    title: '사진 업로드하기',
    text: '"파일 찾아보기"를 눌러 갤러리에서 사진을 선택하거나 페이지로 드래그 앤 드롭하세요. 여러 장의 사진을 한 번에 업로드할 수 있습니다. 이미지당 최대 20MB까지 가능합니다.',
  },
  {
    title: '균형 프리셋으로 시작하기',
    text: '균형 프리셋(약 70% 화질)은 WhatsApp 사진에 좋은 시작점입니다. 파일 크기를 크게 줄이면서도 휴대폰 화면에서는 사진이 여전히 선명하게 보입니다.',
  },
  {
    title: '실시간 전후 크기 확인하기',
    text: '모든 사진마다 원래 크기와 압축 후 새 크기가 나란히 표시됩니다. 파일이 원하는 것보다 여전히 크다면 화질 슬라이더를 조금 낮추고 크기가 즉시 업데이트되는 것을 확인하세요.',
  },
  {
    title: '사진은 JPG 유지하기',
    text: '일반 사진은 출력 형식을 JPG로 유지하세요. WhatsApp이 가장 잘 처리하는 형식이며 사진에 가장 작은 파일을 제공합니다. 로고처럼 투명도가 필요한 이미지에만 PNG를 사용하세요.',
  },
  {
    title: '전후 비교하기',
    text: '전후 비교를 열어 사진이 여전히 좋아 보이는지 확인하세요. 얼굴과 글자를 확대해 보세요. 실제 차이를 볼 수 없다면 화질 설정이 맞는 것입니다.',
  },
  {
    title: '작아진 사진 다운로드하기',
    text: '사진의 다운로드 버튼을 누르거나, 여러 장을 한 번에 압축했다면 "모두 다운로드(ZIP)"를 사용하세요. 작아진 파일이 기기에 저장됩니다. 원본 사진은 절대 변경되지 않습니다.',
  },
  {
    title: 'WhatsApp으로 똑똑하게 보내기',
    text: '최상의 화질을 원한다면 압축한 사진을 문서로 보내세요. WhatsApp에서 첨부를 누른 뒤 문서를 선택하고 파일을 고르세요. WhatsApp은 문서를 손대지 않고 그대로 보내므로 사진이 압축한 그대로 도착합니다. 사진으로 보내면 WhatsApp이 두 번째로 압축합니다.',
  },
];

const FAQ_DATA: FaqItem[] = [
  {
    id: 'wa-faq-1',
    question: 'WhatsApp은 왜 사진 화질을 떨어뜨리나요?',
    answer: '사진을 일반 방식으로 보내면 WhatsApp이 데이터와 저장 공간을 절약하기 위해 사진을 다시 압축합니다. 종종 훨씬 작은 크기와 낮은 화질로 축소됩니다. 그래서 선명한 카메라 사진이 전송 후 흐릿하거나 부드럽게 보일 수 있습니다.',
  },
  {
    id: 'wa-faq-2',
    question: 'WhatsApp은 문서로 보낸 이미지를 압축하나요?',
    answer: '아니요. 이미지를 문서로 보내면(첨부, 문서 선택) WhatsApp은 파일을 있는 그대로, 추가 압축 없이 보냅니다. 사진을 최고 화질로 공유하는 가장 좋은 방법입니다.',
  },
  {
    id: 'wa-faq-3',
    question: 'WhatsApp으로 보낼 수 있는 최대 이미지 크기는 얼마인가요?',
    answer: 'WhatsApp은 최대 2GB까지의 문서를 허용하므로, 수백 KB로 압축한 사진은 전혀 문제가 되지 않습니다. 일반 방식으로 보내는 사진은 WhatsApp 자체가 다시 압축하므로, 실제로 중요한 것은 크기가 아니라 화질입니다.',
  },
  {
    id: 'wa-faq-4',
    question: 'WhatsApp으로 전체 화질의 사진을 보내려면 어떻게 해야 하나요?',
    answer: '먼저 CompressMyPic으로 사진을 압축해 적당한 크기로 만든 뒤, WhatsApp에서 사진이 아닌 문서로 보내세요. 첨부를 누르고 문서를 선택한 뒤 파일을 고르세요. WhatsApp이 다시 압축하지 않고 그대로 도착합니다.',
  },
  {
    id: 'wa-faq-5',
    question: '보내기 전에 압축해야 하나요, 아니면 WhatsApp이 알아서 하게 두어야 하나요?',
    answer: '먼저 직접 압축하세요. WhatsApp은 강하게 압축하며 사용자가 조절할 수 없습니다. CompressMyPic으로 먼저 압축하면 화질을 직접 선택하고 결과를 확인한 뒤 문서로 보내 WhatsApp이 다시 손대지 않게 할 수 있습니다.',
  },
  {
    id: 'wa-faq-6',
    question: 'WhatsApp 사진에는 어떤 화질 설정을 사용해야 하나요?',
    answer: '약 70%의 균형 프리셋으로 시작하세요. 중요한 사진은 80~85%를 사용하고 전후 비교를 확인하세요. 속도가 중요한 일상적인 사진은 50~60%도 휴대폰 화면에서는 괜찮아 보이며 파일이 훨씬 작아집니다.',
  },
  {
    id: 'wa-faq-7',
    question: '두 번 압축하면 사진이 더 나빠지나요?',
    answer: '네. JPEG 압축을 한 번 거칠 때마다 세부 묘사가 조금씩 사라집니다. 그래서 CompressMyPic으로 한 번만 압축한 뒤 문서로 보내야 합니다. 이미 압축한 사진을 WhatsApp이 두 번째로 압축하게 두면 안 됩니다.',
  },
  {
    id: 'wa-faq-8',
    question: '휴대폰에서 WhatsApp 사진을 압축할 수 있나요?',
    answer: '네. CompressMyPic은 Android와 iPhone 브라우저에서 작동합니다. 사이트를 열고 카메라 롤에서 사진을 선택하고 압축한 뒤 작은 파일을 다운로드한 다음 WhatsApp에서 공유하세요. 설치할 앱이 없습니다.',
  },
  {
    id: 'wa-faq-9',
    question: '압축한 사진도 WhatsApp 상태에서 좋아 보이나요?',
    answer: '과하게 압축하지 않는다면 네. WhatsApp 상태는 적당한 해상도로 사진을 표시하므로 약 70%의 균형 프리셋으로 압축한 사진은 휴대폰 화면에서 원본과 똑같이 보입니다. 얼굴이나 글자가 있는 상태 사진은 50% 아래로 내리지 마세요.',
  },
  {
    id: 'wa-faq-10',
    question: 'WhatsApp에서 이미지가 너무 크다고 나옵니다. 어떻게 해야 하나요?',
    answer: '이미지를 CompressMyPic에 업로드하고 화질 슬라이더를 낮춰 파일이 수백 KB가 될 때까지 줄인 뒤 다운로드하고 다시 보내세요. 사진으로 보내도 안 된다면 훨씬 큰 파일을 허용하는 문서로 보내세요.',
  },
  {
    id: 'wa-faq-11',
    question: 'WhatsApp에는 JPG와 PNG 중 무엇을 사용해야 하나요?',
    answer: '사진에는 JPG를 사용하세요. JPG는 카메라 사진에 훨씬 작은 파일을 만들며 WhatsApp이 가장 잘 처리합니다. PNG는 로고처럼 투명도가 필요한 이미지에만 사용하세요. PNG 파일이 훨씬 크기 때문입니다.',
  },
  {
    id: 'wa-faq-12',
    question: 'WhatsApp에서 WebP 이미지를 보낼 수 있나요?',
    answer: 'WhatsApp은 WebP 파일을 받을 수 있지만, 일반 사진처럼 미리 보기가 되지 않을 수 있고 일부 휴대폰에서는 이상하게 처리될 수 있습니다. 사람들이 인라인으로 볼 사진에는 JPG가 더 안전한 선택입니다. WebP는 WhatsApp보다 웹사이트에 더 적합합니다.',
  },
  {
    id: 'wa-faq-13',
    question: '여러 장의 WhatsApp 사진을 한 번에 압축하려면 어떻게 해야 하나요?',
    answer: '모든 사진을 한 번에 CompressMyPic에 업로드하고 같은 프리셋을 모두에 적용한 뒤 "모두 다운로드(ZIP)" 버튼으로 함께 다운로드하세요. 그런 다음 WhatsApp에서 파일을 하나씩 또는 문서로 보내세요.',
  },
  {
    id: 'wa-faq-14',
    question: 'WhatsApp은 동영상도 같은 방식으로 압축하나요?',
    answer: '네. WhatsApp은 일반 방식으로 보낸 동영상도 압축하며, 많이 줄일 수 있습니다. CompressMyPic은 이미지(JPG, PNG, WebP)만 지원하고 동영상은 지원하지 않습니다. 동영상은 원본 화질을 유지하려면 문서로 보내세요.',
  },
  {
    id: 'wa-faq-15',
    question: '사진을 압축하면 휴대폰에서 원본이 삭제되나요?',
    answer: '아니요. CompressMyPic은 새롭고 작은 복사본을 만들어 기기에 다운로드합니다. 원본 사진은 갤러리에 그대로, 손대지 않은 상태로 남아 있습니다.',
  },
  {
    id: 'wa-faq-16',
    question: '압축할 때 사진이 서버에 업로드되나요?',
    answer: '아니요. 모든 압축은 사용자의 기기에서 브라우저 안에서 이루어지므로 사진이 업로드되거나 저장되거나 다른 사람에게 보이는 일이 없습니다. 사진은 브라우저 메모리에 머물다가 탭을 닫거나 새로고침하면 삭제됩니다.',
  },
  {
    id: 'wa-faq-17',
    question: 'WhatsApp용 사진은 얼마나 작아야 하나요?',
    answer: '일상적인 공유에는 사진당 100~300KB가 좋은 목표입니다. 빠르게 전송되고 모바일 데이터를 적게 사용하면서도 휴대폰에서 여전히 선명하게 보입니다. 인쇄하거나 보관하고 싶은 사진은 더 높은 화질 설정으로 500KB~1MB에 가깝게 유지하세요.',
  },
  {
    id: 'wa-faq-18',
    question: '보낸 후 WhatsApp 사진이 흐릿하게 보이는 이유는 무엇인가요?',
    answer: '사진으로 보낼 때 WhatsApp이 다시 압축했기 때문입니다. 해결책은 먼저 직접 원하는 화질로 사진을 압축한 뒤 문서로 보내 WhatsApp이 다시 압축하지 않게 하는 것입니다.',
  },
  {
    id: 'wa-faq-19',
    question: 'WhatsApp용 스크린샷을 압축할 수 있나요?',
    answer: '네. 스크린샷도 사진과 같은 방식으로 CompressMyPic에 업로드하세요. 스크린샷은 평평한 색상의 넓은 영역이 있어 매우 잘 압축됩니다. 먼저 균형 프리셋을 사용해 보고, 가장 작은 파일을 원하면 WebP 출력으로 전환하세요.',
  },
  {
    id: 'wa-faq-20',
    question: 'WhatsApp 사진 압축에 CompressMyPic은 무료인가요?',
    answer: '네, 완전히 무료입니다. 가입, 워터마크, 압축할 수 있는 사진 수 제한이 없으며 계정도 필요 없습니다. 사이트를 열고 압축한 뒤 다운로드하기만 하면 됩니다.',
  },
];

export const GuideWhatsAppPageKo: React.FC<GuideWhatsAppPageKoProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['wa-faq-1', 'wa-faq-4']));

  useEffect(() => {
    document.title = '화질 저하 없이 WhatsApp용 이미지를 압축하는 방법';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', '화질 저하 없이 WhatsApp용 이미지를 압축하는 방법을 알아보세요. 무료, 개인정보 보호, 가입 불필요 — 보내기 전에 사진을 줄여 선명하게 유지하고 빠르게 전송하세요.');
    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = 'https://compressmypic.online/ko/gaideu/watsae-yong-imiji-apchuk';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'HowTo',
          name: '화질 저하 없이 WhatsApp용 이미지를 압축하는 방법',
          description: 'CompressMyPic으로 사진을 압축하고 WhatsApp에서 문서로 보내 선명하게 유지하세요.',
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
    script.id = 'guide-whatsapp-ko-jsonld';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById('guide-whatsapp-ko-jsonld');
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
            화질 저하 없이 WhatsApp용 이미지를 압축하는 방법
          </h1>
          <p className="mt-3 text-lg font-medium text-[var(--ink-2)] leading-relaxed">
            WhatsApp은 보내는 모든 사진을 축소합니다. 종종 필요한 것보다 훨씬 더 많이요. 사진을 먼저 직접 압축한 뒤 올바른 방법으로 보내면 사진이 선명하게 도착하고, 빠르게 전송되며, 모바일 데이터도 적게 사용합니다.
          </p>
        </div>

        {/* Core Content */}
        <div className="space-y-8 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <MessageCircle className="w-4 h-4" />
              </span>
              <span>WhatsApp이 사진을 흐릿하게 만드는 이유</span>
            </h2>
            <p>
              WhatsApp에서 사진을 일반 방식으로 보내면 WhatsApp이 전달 전에 사진을 다시 압축합니다. 3MB 카메라 사진이 부드러운 세부 묘사와 뭉개진 색상으로 100KB 파일로 도착할 수 있습니다. WhatsApp은 데이터와 저장 공간을 절약하기 위해 이렇게 하지만, 얼마나 화질이 손실되는지 사용자는 정할 수 없습니다.
            </p>
            <p>
              대부분의 사람들이 한 번도 사용하지 않는 두 번째 전송 방법이 있습니다. 바로 문서로 사진을 보내는 것입니다. 문서는 추가 압축 없이 있는 그대로 전달됩니다. 요령은 사진을 먼저 직접 축소하는 것입니다. 사용자가 조절하는 화질 설정으로 말이죠. 그런 다음 문서로 보내세요. 작은 파일과 선명한 사진을 동시에 얻을 수 있습니다.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(0)} flex items-center justify-center shrink-0`}>
                <Send className="w-4 h-4" />
              </span>
              <span>단계별 가이드: WhatsApp용 사진 압축하기</span>
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

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-1.png"
              alt="WhatsApp으로 보내기 전에 CompressMyPic에 사진을 업로드하는 스크린샷"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              사진을 CompressMyPic에 업로드하세요. 드래그 앤 드롭하거나 갤러리에서 선택하세요.
            </figcaption>
          </figure>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(2)} flex items-center justify-center shrink-0`}>
                <Smartphone className="w-4 h-4" />
              </span>
              <span>어떤 화질 설정을 사용해야 하나요?</span>
            </h2>
            <p>
              모든 사진에 맞는 완벽한 숫자는 없습니다. 사진과 용도에 따라 다릅니다. 아래를 시작점으로 삼고 매번 전후 비교를 확인하세요.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(0)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">일상 사진: 70%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  균형 프리셋입니다. 크기를 크게 절약하면서도 모든 휴대폰 화면에서 사진이 여전히 선명하게 보입니다. WhatsApp에 가장 좋은 기본 설정입니다.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(4)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">중요한 사진: 80~85%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  가족 사진, 여행 사진, 보관하고 싶은 모든 사진. 파일이 더 크지만 얼굴과 풍경의 세밀한 디테일이 살아남습니다.
                </p>
              </div>
              <div className={`p-5 rounded-2xl border shadow-[var(--shadow)] ${getPastelCardClass(8)}`}>
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm mb-1.5">빠른 공유: 50~60%</div>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">
                  밈, 빠른 업데이트, 느린 모바일 데이터로 보내는 사진. 휴대폰 화면 크기에서는 여전히 괜찮아 보이면서 파일이 훨씬 작아집니다.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-7">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(7)} flex items-center justify-center shrink-0`}>
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span>최상의 결과를 위한 팁</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>한 번만, 단 한 번만 압축하세요. 이미 압축한 사진을 두 번째로 압축하면 거의 절약되지 않으면서 세부 묘사만 사라집니다.</li>
              <li>화질이 중요하다면 압축한 파일을 항상 문서로 보내세요. WhatsApp이 다시 압축하지 못하게 하는 유일한 방법입니다.</li>
              <li>여러 장의 사진을 같은 설정으로 한 번에 압축하고 모두 다운로드(ZIP) 버튼으로 함께 다운로드하세요.</li>
              <li>글자가 있는 스크린샷과 그래픽에는 WebP 출력을 사용해 보세요. 날카로운 모서리를 유지하고 JPG보다 작은 파일을 만듭니다.</li>
              <li>원본 사진은 절대 변경되지 않습니다. CompressMyPic은 새롭고 작은 복사본을 저장하므로 언제든 돌아가 다른 화질을 시도할 수 있습니다.</li>
            </ul>
          </section>

          <figure className="space-y-2">
            <img
              src="/guides/compress-images-for-whatsapp-2.png"
              alt="CompressMyPic에서 화질 슬라이더와 실시간 전후 파일 크기를 보여주는 스크린샷"
              className="w-full rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] bg-[var(--surface)]"
              loading="lazy"
            />
            <figcaption className="text-xs text-[var(--ink-3)] text-center">
              화질 슬라이더를 움직이면 파일이 원하는 크기가 될 때까지 전후 크기가 실시간으로 업데이트됩니다.
            </figcaption>
          </figure>

          <section className="space-y-3 rounded-2xl border p-5 sm:p-6 shadow-[var(--shadow)] pastel-card-10">
            <h2 className="text-xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight flex items-center gap-2.5">
              <span className={`w-8 h-8 rounded-lg ${getPastelTileClass(10)} flex items-center justify-center shrink-0`}>
                <FileWarning className="w-4 h-4" />
              </span>
              <span>피해야 할 흔한 실수</span>
            </h2>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base">
              <li>압축한 뒤 사진을 사진으로 보내기 — WhatsApp이 두 번째로 압축해 작업이 무용지물이 됩니다.</li>
              <li>얼굴이 있는 사진의 화질을 40% 아래로 낮추기 — 낮은 화질에서는 피부와 세밀한 디테일이 금방 뭉개집니다.</li>
              <li>카메라 사진에 PNG 사용하기 — PNG 파일은 사진에 JPG보다 훨씬 크며 WhatsApp에서 얻는 것이 없습니다.</li>
              <li>결과 확인을 잊기 — 특히 글자가 있는 사진은 보내기 전에 항상 전후 비교를 확인하세요.</li>
            </ul>
          </section>

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
                onClick={() => onNavigate('/ko/gaideu/jpg-vs-png-vs-webp')}
                className={`text-left p-5 rounded-2xl border shadow-[var(--shadow)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] transition-all cursor-pointer ${getPastelCardClass(0)}`}
              >
                <div className="font-sans font-bold text-[var(--ink-navy)] text-sm">JPG vs PNG vs WebP — 어떤 형식을 사용해야 할까요?</div>
                <p className="text-xs text-[var(--ink-2)] mt-1.5 leading-relaxed">파일 크기, 화질, 투명도를 비교해 매번 올바른 형식을 선택하세요.</p>
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
              onClick={() => onNavigate('/ko/gaideu/imiji-keugi-reul-100kb-ro-juligi')}
              className="flex-1 px-5 py-3 rounded-[12px] bg-[var(--surface)] text-[var(--ink-navy)] text-sm font-semibold border border-[var(--line-strong)] shadow-xs hover:border-[#7c3aed]/40 hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
            >
              이미지를 100KB로 줄이기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
