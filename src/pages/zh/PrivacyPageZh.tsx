// Simplified Chinese (zh) Privacy Policy page — /zh/yinsi-zhengce.
// Translated from the ENGLISH original only (src/pages/PrivacyPage.tsx,
// repo HEAD cf50185). Same sections, same component shape, same props
// (onNavigate). Legal meaning preserved. Section 3 states that the site
// currently shows no advertisements. Back-link points at /zh/.

import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageZhProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPageZh: React.FC<PrivacyPageZhProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = '隐私政策 - CompressMyPic';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/zh/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回图片压缩器</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              隐私政策
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            最后更新：2026年11月15日
          </p>
        </div>

        {/* 隐私政策正文 */}
        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. 本地图片处理
            </h2>
            <p>
              CompressMyPic 是一款免费在线图片压缩器。图片使用 HTML5 Canvas 在您的浏览器本地处理——图片绝不会上传到我们的服务器，我们也不会收集、存储或分享您的图片。关闭或刷新浏览器标签页后，所有临时的内存对象都会被清除。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. 不收集个人数据
            </h2>
            <p>
              使用压缩工具无需注册账号、密码、邮箱地址或电话号码。您通过联系表格自愿提交的任何联系信息，仅用于回复您的具体咨询。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. 广告
            </h2>
            <p>
              CompressMyPic 目前不展示任何广告。本网站不设置广告 Cookie。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. 数据分析
            </h2>
            <p>
              我们使用 Google Analytics 4（GA4）以汇总形式了解网站的使用情况——例如，哪些工具最受欢迎、哪些页面被访问。GA4 会收集匿名使用数据，例如您访问的页面、停留时间以及关于您的设备和浏览器的一般信息。GA4 可能会在您的设备上设置 Cookie（例如 _ga），以区分不同的访问。我们不会使用 GA4 来识别您的个人身份。您可以随时通过安装 Google Analytics（分析）停用插件（https://tools.google.com/dlpage/gaoptout）或在浏览器设置中禁用 Cookie 来退出 Google Analytics。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. 第三方链接
            </h2>
            <p>
              我们的网站可能包含指向外部网站的链接。对于第三方平台的隐私做法或内容，我们不承担责任。
            </p>
          </section>

                    <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. Cookie 与同意
            </h2>
            <p>
              CompressMyPic 本身不会为其图片工具设置任何 Cookie：压缩完全在你的浏览器中进行，不需要我们这边保存任何 Cookie、帐户或偏好设置。本网站的 Cookie 来自第三方服务。例如，Google Analytics 可能会为使用情况统计设置 Cookie。你的浏览器会把这些 Cookie 保存在你的设备上，你可以随时通过浏览器设置将其删除。
            </p>
            <p>
              CompressMyPic 目前不展示广告，因此不会向任何地区的访客征求广告同意。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. 你在 GDPR 下的权利
            </h2>
            <p>
              如果你位于欧洲经济区或英国，《通用数据保护条例》（GDPR）赋予你对个人数据的权利。你可以要求我们提供一份我们所持有的关于你的个人数据的副本，要求我们在数据有误时予以更正，要求我们删除数据，要求我们限制其使用，并反对我们对其进行处理。如果处理基于你的同意，你可以随时撤回同意，撤回不影响我们此前合法进行的处理。
            </p>
            <p>
              由于我们的工具在本地处理图片，且我们没有用户帐户，因此我们通常持有的唯一个人数据，就是你通过联系表格发送的姓名、电子邮箱地址和消息。要行使上述任何权利，请发送电子邮件至<a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>，我们将在 30 天内回复。如果你认为我们不公平地处理了你的数据，你也有权向当地的数据保护机构投诉。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. 数据保留
            </h2>
            <p>
              我们仅在实现收集目的所需的时间内保留个人数据。联系表格的消息仅保留到你的询问得到答复、对话结束为止，之后还会短暂保留一段时间以备后续问题；它们绝不会用于营销，也绝不会与第三方分享。你的图片则完全不会被保留：它们仅在你使用工具期间存在于你的浏览器内存中，一旦关闭或刷新标签页即被清除。汇总的分析数据不包含任何个人信息，仅以摘要形式保存。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. 安全与 reCAPTCHA
            </h2>
            <p>
              本站通过 HTTPS 提供服务，因此你的浏览器与本站之间的连接是加密的。我们的联系表格通过 FormSubmit 提供，它会把你的消息转发到我们的电子邮箱；表格受 Google reCAPTCHA 保护，以阻止垃圾信息和自动化滥用。提交表格时，reCAPTCHA 可能会收集硬件和软件信息，例如你的浏览器和设备详情，以区分真人与机器人；这受 Google 的<a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                隐私政策
              </a>和<a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline"
              >
                使用条款
              </a>约束。我们绝不会要求你通过联系表格发送密码、支付信息或敏感的个人文件，你也不应在消息中包含这些内容。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. 儿童隐私
            </h2>
            <p>
              CompressMyPic 是面向普通公众的工具，并非针对 13 岁以下儿童。我们不会有意收集儿童的个人信息。如果你是家长或监护人，并且认为你的孩子通过联系表格向我们发送了个人信息，请发送电子邮件给我们，我们会立即删除。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              11. 本政策的变更
            </h2>
            <p>
              当网站发生变化时，我们可能会更新本政策——例如新增分析服务、新的广告合作伙伴或新的联系方式。届时，我们会更改本页面顶部的「最后更新」日期，并在此用通俗的语言说明重大变更。在变更后继续使用本站，即表示你接受更新后的政策。
            </p>
          </section>

<section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              12. 联系方式
            </h2>
            <p>
              如果您对本政策有任何疑问，请通过以下邮箱联系我们：{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold"
              >
                bilalayyah@gmail.com
              </a>
              。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
