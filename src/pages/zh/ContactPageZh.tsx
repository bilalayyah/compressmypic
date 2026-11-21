// Simplified Chinese (zh) Contact page — /zh/lianxi-women.
// Translated from the ENGLISH original only (src/pages/ContactPage.tsx,
// repo HEAD cf50185). Same sections, same component shape, same props
// (onNavigate), same FormSubmit endpoint (formsubmit.co/ajax/bilalayyah@gmail.com).
// Back-link points at the Chinese home /zh/.

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, AlertCircle, Mail, RotateCcw, Clock, ShieldCheck, Github, MessageSquare, Lightbulb, Bug } from 'lucide-react';

interface ContactPageZhProps {
  onNavigate: (path: string) => void;
}

export const ContactPageZh: React.FC<ContactPageZhProps> = ({ onNavigate }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title = '联系我们 - CompressMyPic';
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
          subject: contactSubject || 'CompressMyPic 联系咨询',
          message: contactMessage,
          _subject: `来自 ${contactName} 的新咨询：${contactSubject || 'CompressMyPic'}`,
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
        throw new Error(data?.message || '无法发送消息，请重试。');
      }
    } catch (err) {
      console.error('FormSubmit error:', err);
      setErrorMessage(
        err instanceof Error ? err.message : '网络错误，请直接发送邮件至 bilalayyah@gmail.com。'
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
            onClick={() => onNavigate('/zh/')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dc2626] dark:text-[#fca5a5] hover:text-[#b91c1c] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回图片压缩器</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-[var(--ink-navy)] tracking-tight">
            联系我们
          </h1>
          <p className="mt-3 text-base text-[var(--ink-2)] leading-relaxed">
            有问题、反馈或需要帮助？请使用下面的表格联系我们的团队，或直接通过邮箱联系我们。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="space-y-6 md:col-span-1">
            <div className="p-4 rounded-2xl border pastel-card-0 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Mail className="w-4 h-4 text-[#dc2626] dark:text-[#f87171]" />
                <span>直接联系</span>
              </div>
              <p className="text-xs text-[var(--ink-2)] font-mono break-all select-all">
                bilalayyah@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-2 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <Clock className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa]" />
                <span>回复时间</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                我们通常会在 24–48 个工作小时内回复。
              </p>
            </div>

            <div className="p-4 rounded-2xl border pastel-card-6 shadow-[var(--shadow)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--ink-navy)] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80]" />
                <span>隐私承诺</span>
              </div>
              <p className="text-xs text-[var(--ink-2)]">
                您的邮箱和消息内容仅用于回复您的咨询，绝不会分享给他人。
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            {isSubmitted ? (
              <div className="p-8 pastel-card-6 border rounded-2xl text-center space-y-3 shadow-[var(--shadow)]">
                <CheckCircle2 className="w-12 h-12 text-[#16a34a] dark:text-[#4ade80] mx-auto" />
                <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)]">消息发送成功</h2>
                <p className="text-sm text-[var(--ink-2)] max-w-md mx-auto">
                  感谢您的来信！您的消息已发送至 bilalayyah@gmail.com，我们会尽快回复您。
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                  >
                    再发一条消息
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
                      您的姓名 <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="张小明"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                      电子邮箱 <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="zhangxiaoming@example.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    主题 <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <input
                      id="contact-subject"
                      name="subject"
                    type="text"
                    required
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    placeholder="反馈、错误报告或一般问题"
                    className="w-full px-3.5 py-2.5 bg-[var(--surface-2)] text-[var(--ink)] border border-[var(--line-strong)] rounded-[11px] text-sm focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--ink-2)] mb-1">
                    消息 <span className="text-[#dc2626] dark:text-[#fca5a5]">*</span>
                  </label>
                  <textarea
                      id="contact-message"
                      name="message"
                    rows={5}
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="我们能帮您什么？请详细描述您的问题或建议……"
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
                      <span>正在发送……</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>发送消息</span>
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
              <span>谁在运营 CompressMyPic</span>
            </h2>
            <p>
              CompressMyPic 由独立开发者 Bilal 创建并维护，他希望打造一款真正免费且尊重用户隐私的图片压缩器。与大多数在线工具不同，CompressMyPic 绝不会把你的照片上传到服务器：每张图片都在你自己的浏览器中直接压缩。Bilal 会亲自阅读每一条消息，并利用你的反馈修复错误、提升质量，决定接下来开发哪些新工具。
            </p>
            <p>
              这是一个小型的独立项目，而不是一家大公司，因此你总能得到直接而坦诚的答复——即使答案是某个功能暂时还无法实现。在你和工具的制作者之间，没有客服排队，也没有自动聊天机器人。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>你可以就哪些事情联系我们？</span>
            </h2>
            <p>
              获得帮助最快的方法是准确告诉我们发生了什么。报告错误时，请注明你使用的工具名称、浏览器以及图片文件类型——例如 iPhone 的 HEIC 照片或透明 PNG 图片。请求新功能时，请描述你想完成什么，以及现有工具为什么不够用。我们也欢迎关于错误结果的报告，例如压缩后的图片看起来比预期的差，以及对我们的指南或任何翻译页面的更正。
            </p>
            <p>
              你也可以就合作、媒体采访和新工具建议与我们联系。如果你运营网站、博客或课堂，并想向读者或学生推荐 CompressMyPic，我们很乐意听到你的消息——只需使用上方的表格，并写一个清晰的主题，这样你的消息就能快速送达正确的地方。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Github className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>联系 Bilal 的其他方式</span>
            </h2>
            <p>
              如果你更喜欢公开渠道，可以在网上找到 Bilal 和 CompressMyPic 项目。源代码托管在 GitHub，你也可以在那里报告技术问题并关注开发进展。关于图片压缩的详细指南发布在 Dev.to 上，产品也已在 Indie Hackers 上线，你可以在那里关注进展并留下反馈。
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                <a href="https://github.com/bilalayyah/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">GitHub — github.com/bilalayyah/compressmypic</a>
                {' '}— 源代码、错误报告和开发动态。
              </li>
              <li>
                <a href="https://dev.to/bilalayyah" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Dev.to — dev.to/bilalayyah</a>
                {' '}— JPG、PNG 与 WebP 压缩指南。
              </li>
              <li>
                <a href="https://www.indiehackers.com/product/compressmypic" target="_blank" rel="noopener noreferrer" className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold">Indie Hackers — indiehackers.com/product/compressmypic</a>
                {' '}— 产品页面、里程碑和社区反馈。
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>写信之前</span>
            </h2>
            <p>
              几个快速检查就能解决大多数问题，无需等待回复。主压缩器每张图片最大支持 20 MB，格式转换器每个文件最大支持 25 MB——更大的文件会在开始前被拒绝。非常旧的浏览器可能不支持 AVIF 或 HEIC 等新格式，因此尝试最新版 Chrome、Edge、Firefox 或 Safari 通常就能修复看似损坏的工具。而且，由于你的图片从不离开你的设备，某一张照片出现问题通常是文件本身造成的，而不是网站的问题。
            </p>
            <p>
              写信时，请注明你的浏览器名称和版本、使用的工具，以及图片的大小和格式。我们用英语回复，通常在 24–48 个工作小时内答复。如果你的问题是关于我们如何处理你的数据，也可以先阅读我们的
              <button
                type="button"
                onClick={() => onNavigate('/zh/yinsi-zhengce')}
                className="text-[#dc2626] dark:text-[#fca5a5] hover:underline font-semibold cursor-pointer"
              >
                隐私政策
              </button>
              ——里面用通俗的语言说明，你的图片绝不会被上传或存储。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-sans font-bold text-[var(--ink-navy)] flex items-center gap-2">
              <Bug className="w-5 h-5 text-[#dc2626] dark:text-[#f87171]" />
              <span>报告问题</span>
            </h2>
            <p>
              发现了损坏的内容？请告诉我们它发生在哪个页面、你点击了什么，以及你原本期望看到什么。截图非常有帮助，如果问题涉及某张特定图片，请告诉我们它的格式和大小——但请不要向我们发送私人或敏感照片。我们会尽快修复报告的错误，并在修复上线后通过电子邮件通知你。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
