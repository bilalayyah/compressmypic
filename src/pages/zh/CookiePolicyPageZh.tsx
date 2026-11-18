import React, { useEffect } from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyPageZhProps {
  onNavigate: (path: string) => void;
}

export const CookiePolicyPageZh: React.FC<CookiePolicyPageZhProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Cookie 政策 | CompressMyPic – Cookie 的使用方式';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 py-2 text-xs font-semibold text-[#7c3aed] dark:text-[#c4b5fd] hover:text-[#6d28d9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回图片压缩器</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Cookie className="w-6 h-6 text-[#16a34a] dark:text-[#4ade80]" />
            <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
              Cookie 政策
            </h1>
          </div>
          <p className="text-xs text-[var(--ink-3)] font-medium">
            最后更新：2026年11月18日
          </p>
        </div>

        <div className="space-y-6 text-base text-[var(--ink-2)] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              1. 什么是 Cookie？
            </h2>
            <p>
              Cookie 是网站要求您的浏览器保存在您设备上的小型文本文件。它们可以记住有关您访问的信息——例如您是否之前看过某条消息——以便网站或服务在您下次访问时识别您的浏览器。本政策说明 CompressMyPic 使用哪些 Cookie、为什么使用它们，以及您如何管理它们。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              2. 我们不设置的 Cookie
            </h2>
            <p>
              CompressMyPic 本身不设置任何 Cookie。我们的图片工具完全在您的浏览器中运行：压缩不需要帐户、登录或 Cookie。我们不会设置 Cookie 来记住您、跟踪您或保存您的偏好。您的图片永远不会离开浏览器，也不会有任何与图片有关的信息存储在 Cookie 中。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              3. Google AdSense 广告 Cookie
            </h2>
            <p>
              我们使用 Google AdSense 在本网站展示广告。AdSense 及其合作伙伴可能会在您的设备上设置 Cookie，以便根据您之前访问本网站或其他网站的情况投放广告。Google 使用广告 Cookie，可让 Google 及其合作伙伴根据您访问本网站和/或互联网上其他网站的情况向您投放广告，并衡量广告的展示频率。本网站的广告位是手动选择的；我们不使用自动广告插入。您可以访问 Google 广告设置（
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">https://adssettings.google.com</a>
              ）或 
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">https://www.aboutads.info/choices/</a>
              ，选择不接收个性化广告。选择非个性化广告并不会完全停止广告，但意味着广告将不再基于您的浏览记录。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              4. Google Analytics 4 Cookie
            </h2>
            <p>
              我们使用 Google Analytics 4（GA4）来汇总了解网站的使用方式——例如哪些工具受欢迎、哪些页面被访问。GA4 可能会在您的设备上设置 Cookie，例如 _ga，以区分不同的访问。数据经过匿名化处理，仅以汇总形式使用；我们不会使用 GA4 来识别您的个人身份。您可以随时安装 Google Analytics 停用浏览器插件（https://tools.google.com/dlpage/gaoptout）或在浏览器设置中禁用 Cookie，以选择不使用 Google Analytics。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              5. 同意（欧洲经济区、英国和瑞士）
            </h2>
            <p>
              如果您从欧洲经济区、英国或瑞士访问，Google 会根据《通用数据保护条例》（GDPR）和 Google 的欧盟用户同意政策，在展示个性化广告之前向您显示同意消息。您可以随时使用本网站页脚中的“隐私和 Cookie 设置”链接更改或撤回同意，该链接会重新打开同意消息；也可以通过清除浏览器 Cookie 来撤回。撤回同意不影响撤回之前合法进行的一切事项。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              6. 其他第三方服务
            </h2>
            <p>
              本网站上的少数其他服务也可能使用其自己的 Cookie 或类似存储。用于保护我们联系表单免受垃圾信息侵害的 Google reCAPTCHA 可能会设置 Cookie，以区分人类和机器人；其使用受 Google 的 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Google 隐私权政策</a>
              和 
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline">Google 服务条款</a>
              约束。托管本网站的 Cloudflare 可能会设置安全 Cookie，以保护网站免受滥用。我们工具下方的匿名评论仅要求提供姓名，该姓名由评论服务存储——而不是存储在本网站的 Cookie 中。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              7. 不是 Cookie 的浏览器存储
            </h2>
            <p>
              您的浏览器还会存储少量并非 Cookie 的本地信息。如果您发表评论，浏览器可能会记住您输入的姓名，这样您下次就不必重新输入；如果您切换网站语言，浏览器可能会记住该选择，以便下次访问时使用。这些信息仅保留在您自己的设备上，绝不会发送到我们的服务器，您可以随时通过清除浏览器中的网站数据将其删除。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              8. 如何管理 Cookie
            </h2>
            <p>
              您可以通过浏览器设置删除设备上已存储的 Cookie，并阻止将来设置 Cookie——所有主流浏览器（Chrome、Firefox、Safari、Edge）都在其隐私或安全设置中提供此选项。阻止所有 Cookie 不会破坏我们的图片工具，因为它们不依赖 Cookie，但可能会影响广告和分析等第三方服务的功能。您也可以使用浏览器的隐私或无痕模式，关闭窗口时即会删除 Cookie。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              9. 本政策的变更
            </h2>
            <p>
              当网站发生变化时——例如我们新增广告合作伙伴或分析服务——我们可能会更新本政策。届时，我们将更改本页面顶部的“最后更新”日期。在变更后继续使用本网站，即表示您接受更新后的政策。
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-[var(--line)]">
            <h2 className="text-lg font-sans font-bold text-[var(--ink-navy)]">
              10. 联系我们
            </h2>
            <p>
              如果您对本政策有任何疑问，请通过 
              <a href="mailto:bilalayyah@gmail.com" className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">bilalayyah@gmail.com</a>
               联系我们，或阅读我们的
              <a href="/zh/yinsi-zhengce" onClick={(e) => { e.preventDefault(); onNavigate('/zh/yinsi-zhengce'); }} className="text-[#7c3aed] dark:text-[#c4b5fd] hover:underline font-semibold">隐私政策</a>
              。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
