// Simplified Chinese (zh) Privacy Policy page — /zh/yinsi-zhengce.
// Translated from the ENGLISH original only (src/pages/PrivacyPage.tsx,
// repo HEAD cf50185). Same sections, same component shape, same props
// (onNavigate). Legal meaning preserved, including the Google AdSense
// disclosure (section 3) and opt-out links. Back-link points at /zh/.

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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回图片压缩器</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <Shield className="w-6 h-6 text-emerald-600" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              隐私政策
            </h1>
          </div>
          <p className="text-xs text-slate-500 font-medium">
            最后更新：2026年11月12日
          </p>
        </div>

        {/* 隐私政策正文 */}
        <div className="space-y-6 text-base text-slate-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              1. 本地图片处理
            </h2>
            <p>
              CompressMyPic 是一款免费在线图片压缩器。图片使用 HTML5 Canvas 在您的浏览器本地处理——图片绝不会上传到我们的服务器，我们也不会收集、存储或分享您的图片。关闭或刷新浏览器标签页后，所有临时的内存对象都会被清除。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              2. 不收集个人数据
            </h2>
            <p>
              使用压缩工具无需注册账号、密码、邮箱地址或电话号码。您通过联系表格自愿提交的任何联系信息，仅用于回复您的具体咨询。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              3. 广告（Google AdSense）
            </h2>
            <p>
              我们使用 Google AdSense 在启用后展示广告。包括 Google 在内的第三方供应商会使用 Cookie，根据用户之前访问本网站或其他网站的情况投放广告。Google 使用广告 Cookie，使其及其合作伙伴能够根据您访问本网站和/或其他网站的情况向您投放广告。您可以访问 Google 广告设置（
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://adssettings.google.com
              </a>
              ）或{' '}
              <a
                href="http://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                http://www.aboutads.info/choices/
              </a>
              {' '}选择退出个性化广告。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              4. 数据分析
            </h2>
            <p>
              我们目前不使用数据分析 Cookie。如果情况发生变化，本政策将会更新。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">
              5. 第三方链接
            </h2>
            <p>
              我们的网站可能包含指向外部网站的链接。对于第三方平台的隐私做法或内容，我们不承担责任。
            </p>
          </section>

          <section className="space-y-2 pt-2 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">
              6. 联系方式
            </h2>
            <p>
              如果您对本政策有任何疑问，请通过以下邮箱联系我们：{' '}
              <a
                href="mailto:bilalayyah@gmail.com"
                className="text-blue-600 hover:underline font-semibold"
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
