import { ChevronDown, Menu, X, User, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import {
  authActionLabels,
  getHeroTitleLines,
  menuActionLabels,
  type Language,
} from "../i18n/i18n";

export function ScheduleHero({
  language,
  onLanguageChange,
  isLoggedIn,
  onAuthAction,
}: {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isLoggedIn: boolean;
  onAuthAction: () => void;
}) {
  const [titleLine1, titleLine2] = getHeroTitleLines(language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 pt-4 pb-2">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white border border-[#e8e6e1] flex items-center justify-center text-[#6b6560] font-semibold">
            3
          </div>
          <div className="leading-tight">
            <div className="text-[#2a2420] font-semibold tracking-wide">MOON</div>
            <div className="text-[#2a2420] font-semibold tracking-wide">STONE</div>
          </div>
        </div>

        <div className="flex items-center gap-2 static">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="w-9 h-9 rounded-full border border-[#e8e6e1] bg-white flex items-center justify-center p-0 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <Menu className="w-5 h-5 text-[#2a2420]" />
          </button>

          {isMenuOpen && (
            <div className="fixed inset-0 z-[100] flex justify-end">
              <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              />
              <div className="w-[85%] max-w-[340px] bg-[#faf9f7] h-full relative flex flex-col animate-in slide-in-from-right duration-300 shadow-2xl overflow-hidden cursor-default">
                {/* Header inside sidebar */}
                <div className="flex items-center justify-between p-5 mt-2">
                  <div className="flex items-center gap-3 opacity-20 relative -left-8">
                    <div className="text-[#2a2420] font-sans text-4xl leading-none tracking-widest font-light">
                      MOON<br />STONE
                    </div>
                  </div>
                  <button onClick={() => setIsMenuOpen(false)} className="p-2 cursor-pointer rounded-full hover:bg-black/5">
                    <X className="w-6 h-6 text-[#8b8580]" strokeWidth={1.5} />
                  </button>
                </div>

                {/* Sidebar Main Content */}
                <div className="flex flex-col flex-1 px-6 py-4 pb-10">
                  {/* Mock Hero for Menu (as seen in image) */}
                  <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-[#ebe6df] to-[#f4f2ef] h-[180px] flex items-center justify-center mb-10 shadow-sm border border-[#e8e6e1]">
                    <div className="absolute top-5 text-[#2a2420] font-medium text-[16px]">Trang chủ</div>
                    <div className="absolute top-5 right-5 text-[#8b8580] text-[10px] tracking-widest text-right font-medium">THE<br />GRAND 22</div>
                    <div className="text-[#a8a19b] flex items-center gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-[10px] h-[10px] rounded-full border-[1.5px] border-current -mb-[1px]"></div>
                        <div className="w-[16px] h-[16px] rounded-full border-[2px] border-current -mb-[2px]"></div>
                        <div className="w-[24px] h-[24px] rounded-full border-[2px] border-current"></div>
                      </div>
                      <div className="text-[20px] font-light tracking-[0.15em] leading-[1.05]">MOON<br />STONE</div>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col gap-6">

                    {/* Language Select */}
                    <div className="relative flex items-center justify-between group cursor-pointer w-full">
                      <span className="text-[#2a2420] font-semibold text-[16px]">
                        {language === 'vi' ? 'Tiếng Việt' : 'English (US)'}
                      </span>
                      <select
                        value={language}
                        onChange={(e) => onLanguageChange(e.target.value as Language)}
                        className="absolute inset-0 w-full h-full opacity-0 outline-none cursor-pointer"
                      >
                        <option value="vi">Tiếng Việt</option>
                        <option value="en">English (US)</option>
                      </select>
                      <ChevronUp className="w-5 h-5 text-[#2a2420]" strokeWidth={2.5} />
                    </div>

                    {/* Login/Account */}
                    {isLoggedIn ? (
                      <div className="flex justify-between items-center cursor-pointer w-full" onClick={() => { setIsMenuOpen(false); onAuthAction(); }}>
                        <div className="flex items-center gap-3">
                          <User className="w-[18px] h-[18px] text-[#2a2420]" strokeWidth={2.5} />
                          <span className="text-[#2a2420] font-semibold text-[16px] truncate max-w-[190px]">FPT- Stefan Fadel Ada C...</span>
                        </div>
                        <ChevronUp className="w-5 h-5 text-[#2a2420]" strokeWidth={2.5} />
                      </div>
                    ) : (
                      <div className="flex justify-between items-center cursor-pointer w-full" onClick={() => { setIsMenuOpen(false); onAuthAction(); }}>
                        <div className="flex items-center gap-3">
                          <User className="w-[18px] h-[18px] text-[#2a2420]" strokeWidth={2.5} />
                          <span className="text-[#2a2420] font-semibold text-[16px]">{authActionLabels[language].login}</span>
                        </div>
                        <ChevronUp className="w-5 h-5 text-[#2a2420]" strokeWidth={2.5} />
                      </div>
                    )}

                    {/* Contact Us */}
                    <a href="mailto:support@moonstone.vn" className="bg-[#3f3833] text-white rounded-[24px] py-4 text-center font-semibold text-[15px] mt-2 shadow-[0_4px_12px_rgba(42,36,32,0.15)] hover:bg-[#2a2420] transition-colors cursor-pointer w-full block">
                      Liên hệ với chúng tôi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="relative rounded-3xl overflow-hidden h-52 bg-gradient-to-br from-[#2f5a3e] to-[#0f1b16] border border-[#e8e6e1] shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_55%)]" />

        <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-2xl backdrop-blur">
          <div className="text-xs opacity-90 tracking-widest">THE</div>
          <div className="text-2xl font-semibold leading-none">GRAND 22</div>
        </div>

        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/90">
          <div className="text-7xl font-semibold leading-none opacity-80">3</div>
          <div className="text-sm font-semibold tracking-widest">
            MOON
            <br />
            STONE
          </div>
        </div>
      </div>

      <h1 className="mt-6 text-center font-semibold text-[#2a2420] text-4xl leading-tight">
        <span className="block">{titleLine1}</span>
        <span className="block">{titleLine2}</span>
      </h1>
    </div>
  );
}

