import { ChevronDown, Menu, User, X } from "lucide-react";
import { useState } from "react";
import {
  authActionLabels,
  getHeroTitleLines,
  type Language,
} from "../i18n/i18n";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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

  // NEW STATE
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const BRAND_IMAGE_URL =
    "https://uat-moonstone.xdp.vn/web/image/1460-b2b3f746/Moon%20Stone00245%20Banner.jpg";

  return (
    <div className="px-4 pt-4 pb-2">
      {/* HEADER */}
      <div className="mb-4 rounded-[28px] border border-[#e8e6e1] bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl border border-[#dad7d3] bg-[#f5f1ed] text-[#221f1b]">
              <svg
                viewBox="0 0 72 72"
                className="h-8 w-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="36" cy="18" r="12" stroke="currentColor" strokeWidth="4" />
                <circle cx="36" cy="36" r="12" stroke="currentColor" strokeWidth="4" />
                <circle cx="36" cy="54" r="12" stroke="currentColor" strokeWidth="4" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.3em] text-[#6b6560]">
                Moon Stone
              </p>
              <p className="text-lg font-semibold leading-none text-[#221f1b]">
                Fitness Class
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="w-11 h-11 rounded-2xl border border-[#e8e6e1] bg-white shadow-sm flex items-center justify-center"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* BRAND IMAGE CARD */}
      <div className="mb-4 overflow-hidden rounded-[28px] bg-white shadow-sm">
        <div className="relative h-[220px] sm:h-[240px]">
          <ImageWithFallback
            src={BRAND_IMAGE_URL}
            alt="Brand layout image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* SIDEBAR */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="w-full sm:w-[85%] sm:max-w-[340px] bg-[#faf9f7] h-full p-6 flex flex-col overflow-y-auto">

            {/* CLOSE */}
            <div className="flex justify-end mb-6">
              <X onClick={() => setIsMenuOpen(false)} className="cursor-pointer" />
            </div>

            <div className="mt-auto flex flex-col gap-6">

              {/* ===== LANGUAGE ===== */}
              <div className="relative">
                <div
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <span className="font-semibold">
                    {language === "vi" ? "Tiếng Việt" : "English (US)"}
                  </span>
                  <ChevronDown />
                </div>

                {isLangOpen && (
                  <div className="mt-2 bg-white border rounded-xl shadow">
                    <div
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        onLanguageChange("vi");
                        setIsLangOpen(false);
                      }}
                    >
                      Tiếng Việt
                    </div>
                    <div
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        onLanguageChange("en");
                        setIsLangOpen(false);
                      }}
                    >
                      English (US)
                    </div>
                  </div>
                )}
              </div>

              {/* ===== ACCOUNT ===== */}
              <div className="relative">
                <div
                  onClick={() => {
                    if (!isLoggedIn) {
                      onAuthAction();
                      setIsMenuOpen(false);
                    } else {
                      setIsAccountOpen(!isAccountOpen);
                    }
                  }}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <User className="w-[18px] h-[18px]" />
                    <span className="font-semibold">
                      {isLoggedIn
                        ? "FPT - User Name"
                        : authActionLabels[language].login}
                    </span>
                  </div>
                  {isLoggedIn && <ChevronDown />}
                </div>

                {/* DROPDOWN */}
                {isLoggedIn && isAccountOpen && (
                  <div className="mt-2 bg-white border rounded-xl shadow">
                    <div
                      className="p-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        console.log("Go to profile");
                        setIsMenuOpen(false);
                      }}
                    >
                      Thông tin chi tiết
                    </div>
                    <div
                      className="p-3 hover:bg-gray-100 text-red-500 cursor-pointer"
                      onClick={() => {
                        console.log("Logout");
                        setIsMenuOpen(false);
                      }}
                    >
                      Đăng xuất
                    </div>
                  </div>
                )}
              </div>

              {/* CONTACT */}
              <a
                href="tel:+84913209595"
                className="bg-black text-white rounded-xl py-3 text-center font-semibold"
                aria-label="Gọi đến số 0913209595"
              >
                Liên hệ với chúng tôi
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}