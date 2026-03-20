import { Menu } from "lucide-react";
import React from "react";
import { getHeroTitleLines, languageToggleLabels, type Language } from "../i18n/i18n";

export function ScheduleHero({
  language,
  onLanguageChange,
}: {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}) {
  const [titleLine1, titleLine2] = getHeroTitleLines(language);

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

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onLanguageChange("en")}
            className={`w-[44px] h-9 rounded-full text-sm transition-all border ${
              language === "en"
                ? "bg-[#2a2420] text-white border-[#2a2420]"
                : "bg-white text-[#6b6560] border-[#e8e6e1]"
            }`}
          >
            {languageToggleLabels.en}
          </button>
          <button
            type="button"
            onClick={() => onLanguageChange("vi")}
            className={`w-[44px] h-9 rounded-full text-sm transition-all border ${
              language === "vi"
                ? "bg-[#2a2420] text-white border-[#2a2420]"
                : "bg-white text-[#6b6560] border-[#e8e6e1]"
            }`}
          >
            {languageToggleLabels.vi}
          </button>

          <Menu className="w-6 h-6 text-[#2a2420]" />
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

