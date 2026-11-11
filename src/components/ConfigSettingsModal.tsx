import React, { useState } from 'react';
import { X, Sliders, DollarSign, BarChart3, Search, Check, Save } from 'lucide-react';
import { CompressionSettings } from '../types';

interface ConfigSettingsModalProps {
  settings: CompressionSettings;
  onUpdateSettings: (newSettings: Partial<CompressionSettings>) => void;
  onClose: () => void;
}

export const ConfigSettingsModal: React.FC<ConfigSettingsModalProps> = ({
  settings,
  onUpdateSettings,
  onClose,
}) => {
  const [fileLimit, setFileLimit] = useState(settings.maxFileSizeMB);
  const [ga4Id, setGa4Id] = useState('G-XXXXXXXXXX');
  const [adsenseId, setAdsenseId] = useState('ca-pub-XXXXXXXXXXXXXXXX');
  const [searchConsoleVerification, setSearchConsoleVerification] = useState('google-site-verification=XXXXXXXXXXXXXXXXXXXX');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSettings({ maxFileSizeMB: fileLimit });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-blue-600" />
            <h2 className="text-base font-bold text-slate-900">
              Platform Configuration &amp; Monetization Settings
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600">
          {/* File Size Limit Setting */}
          <div>
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
              Maximum File Size Limit
            </label>
            <p className="text-xs text-slate-500 mb-3">
              Configure maximum allowed upload size per single image.
            </p>
            <div className="grid grid-cols-3 gap-2.5">
              {[10, 20, 50].map((mb) => (
                <button
                  key={mb}
                  type="button"
                  onClick={() => setFileLimit(mb)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    fileLimit === mb
                      ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  {mb} MB per file
                </button>
              ))}
            </div>
          </div>

          {/* Google AdSense Readiness */}
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Google AdSense Publisher ID
              </label>
            </div>
            <p className="text-xs text-slate-500 mb-2">
              Reserved ad containers are integrated in the layout. When your AdSense account is approved, add your publisher client ID below or directly in <code>index.html</code>.
            </p>
            <input
              type="text"
              value={adsenseId}
              onChange={(e) => setAdsenseId(e.target.value)}
              placeholder="ca-pub-1234567890123456"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Google Analytics 4 */}
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-1">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Google Analytics 4 (GA4) Tracking ID
              </label>
            </div>
            <p className="text-xs text-slate-500 mb-2">
              Optional measurement ID for visitor analytics.
            </p>
            <input
              type="text"
              value={ga4Id}
              onChange={(e) => setGa4Id(e.target.value)}
              placeholder="G-ABC123XYZ"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Search Console Verification */}
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-1">
              <Search className="w-4 h-4 text-indigo-600" />
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Google Search Console Meta Tag
              </label>
            </div>
            <p className="text-xs text-slate-500 mb-2">
              HTML verification token for Google Search Console domain ownership.
            </p>
            <input
              type="text"
              value={searchConsoleVerification}
              onChange={(e) => setSearchConsoleVerification(e.target.value)}
              placeholder="google-site-verification=..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {savedSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Settings updated successfully!</span>
            </div>
          )}

          <div className="pt-4 border-t border-slate-200 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Save Configuration</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
