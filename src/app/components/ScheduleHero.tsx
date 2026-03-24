import { ChevronDown, Menu } from "lucide-react";
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

        <div className="flex items-center gap-2 relative">
          {!isLoggedIn && (
            <button
              type="button"
              onClick={onAuthAction}
              className="h-9 px-4 rounded-full border border-[#b7b0a8] text-[#2a2420] text-sm bg-white"
            >
              {authActionLabels[language].login}
            </button>
          )}

          <div className="relative">
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="h-9 pl-3 pr-8 rounded-full border border-[#e8e6e1] text-[#2a2420] text-sm bg-white appearance-none"
            >
              <option value="vi">vi.</option>
              <option value="en">en.</option>
            </select>
            <ChevronDown className="w-4 h-4 text-[#6b6560] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="w-9 h-9 rounded-full border border-[#e8e6e1] bg-white flex items-center justify-center"
          >
            <Menu className="w-5 h-5 text-[#2a2420]" />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 top-11 w-44 rounded-2xl border border-[#e8e6e1] bg-white shadow-md p-2 z-50">
              <a
                href="mailto:support@moonstone.vn"
                className="w-full block px-3 py-2 rounded-xl text-sm text-[#2a2420] hover:bg-[#f5f3f0]"
              >
                {menuActionLabels[language].contactUs}
              </a>
              {isLoggedIn && (
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onAuthAction();
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl text-sm text-[#2a2420] hover:bg-[#f5f3f0]"
                >
                  {authActionLabels[language].logout}
                </button>
              )}
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

