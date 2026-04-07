import React from 'react';
import { Linkedin, Instagram, ChevronUp } from 'lucide-react';
import { type Language } from '../i18n/i18n';

interface FooterProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Footer({ language, onLanguageChange }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#2c2d30] text-white px-6 py-10 flex flex-col font-sans mt-8 rounded-t-3xl sm:rounded-t-none">
      {/* Hotline & Email */}
      <div className="mb-6">
        <p className="text-sm text-gray-300 font-semibold mb-3">Hotline MoonStone Phone</p>
        <div className="bg-white text-gray-800 rounded-full px-5 py-1.5 inline-flex items-center justify-center text-sm font-serif tracking-wider shadow-sm">
          0913.209.595
        </div>
      </div>
      
      <div className="mb-8">
        <p className="text-sm text-gray-300 font-semibold mb-2">Contact Email</p>
        <p className="text-[17px] text-gray-100 font-serif tracking-wide">moonstone_mrhn@masterisegroup.com</p>
      </div>

      {/* Socials */}
      <div className="flex justify-end gap-3 mb-6 pr-2">
        <Linkedin className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
        <Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
      </div>

      {/* Separator - Double line effect like in the image */}
      <div className="relative mb-8 h-[2px]">
        <div className="absolute top-0 w-full h-[1px] bg-gray-500/60"></div>
        <div className="absolute top-[2px] w-full h-[1px] bg-gray-600/30"></div>
      </div>

      {/* Logo */}
      <div className="flex items-center gap-5 mb-8 pl-1">
        <div className="flex flex-col items-center">
          <div className="w-[18px] h-[18px] rounded-full border-[2px] border-gray-200 -mb-[2px] z-20 bg-[#2c2d30]"></div>
          <div className="w-[28px] h-[28px] rounded-full border-[2.5px] border-gray-200 -mb-[3px] z-10 bg-[#2c2d30]"></div>
          <div className="w-[44px] h-[44px] rounded-full border-[3px] border-gray-200 z-0 bg-[#2c2d30]"></div>
        </div>
        <div className="flex flex-col text-gray-100 text-[38px] font-sans font-light tracking-[0.15em] leading-[0.95]">
          <span>MOON</span>
          <span>STONE</span>
        </div>
      </div>

      {/* Links */}
      <div className="flex justify-center flex-wrap gap-x-3 gap-y-2 text-[13px] text-gray-200 font-medium mb-6">
        <span className="cursor-pointer hover:text-white">Home</span>
        <span className="text-gray-400">•</span>
        <span className="cursor-pointer hover:text-white">About Us</span>
        <span className="text-gray-400">•</span>
        <span className="cursor-pointer hover:text-white">Product</span>
        <span className="text-gray-400">•</span>
        <span className="cursor-pointer hover:text-white">Terms of Service</span>
      </div>

      {/* Scroll up */}
      <div className="flex justify-center mb-6">
        <button onClick={scrollToTop} className="p-1 cursor-pointer text-gray-300 hover:text-white">
          <ChevronUp className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Copyright */}
      <div className="text-center text-[12px] text-gray-300 leading-relaxed mb-4 font-light">
        <p>Copyright © CÔNG TY TNHH MỘT THÀNH VIÊN</p>
        <p>MASTERISE RETAIL HÀ NỘI</p>
      </div>

      {/* Languages */}
      <div className="flex justify-center items-center gap-3 text-[13px] text-gray-400 mb-2">
        <button 
          onClick={() => onLanguageChange('en')}
          className={`${language === 'en' ? 'text-white' : 'hover:text-gray-200'}`}
        >
          English (US)
        </button>
        <span className="text-gray-500">|</span>
        <button 
          onClick={() => onLanguageChange('vi')}
          className={`${language === 'vi' ? 'text-white' : 'hover:text-gray-200'}`}
        >
          Tiếng Việt
        </button>
      </div>
    </div>
  );
}
