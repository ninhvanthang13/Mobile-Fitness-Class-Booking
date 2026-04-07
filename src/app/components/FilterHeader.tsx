import React, { useState } from "react";

import { Lock, SlidersHorizontal } from "lucide-react";
import {
  filterByLabels,
  filterViewLabels,
  getCategoryLabel,
  // myClassLockedLabel,
  type Language,
} from "../i18n/i18n";

interface FilterHeaderProps {
  selectedView: 'my' | 'all';
  onViewChange: (view: 'my' | 'all') => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
  language: Language;
  isLoggedIn: boolean;
  onRequireLogin: () => void;
}

export function FilterHeader({
  selectedView,
  onViewChange,
  selectedCategory,
  onCategoryChange,
  categories,
  language,
  isLoggedIn,
  onRequireLogin,
}: FilterHeaderProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  return (
    <div className="bg-[#faf9f7] border-b border-[#e8e6e1]">
      {/* Toggle Buttons */}
      <div className="flex gap-2 px-4 pt-4 pb-3">
        <button
          onClick={() => {
            if (!isLoggedIn) {
              onRequireLogin();
              return;
            }
            onViewChange("my");
          }}
          className={`flex-1 h-11 rounded-full transition-all ${
            selectedView === 'my'
              ? "bg-[#2a2420] text-white"
              : "bg-white text-[#6b6560] border border-[#e8e6e1]"
          }`}
        >
          <span className="inline-flex items-center gap-1.5">
            {filterViewLabels[language].my}
            {!isLoggedIn && <Lock className="w-3.5 h-3.5" />}
          </span>
        </button>
        <button
          onClick={() => onViewChange('all')}
          className={`flex-1 h-11 rounded-full transition-all ${
            selectedView === 'all'
              ? 'bg-[#2a2420] text-white'
              : 'bg-white text-[#6b6560] border border-[#e8e6e1]'
          }`}
        >
          {filterViewLabels[language].all}
        </button>
      </div>

      {/* Category Filter */}
      <div className="px-4 pb-3">
        <button
          type="button"
          onClick={() => setIsFilterOpen((v) => !v)}
          className="flex items-center gap-2 mb-3 text-left"
        >
          <SlidersHorizontal
            className={`w-4 h-4 text-[#6b6560] transition-transform ${
              isFilterOpen ? "rotate-0" : "-rotate-90"
            }`}
          />
          <span className="text-sm text-[#6b6560]">{filterByLabels[language]}</span>
        </button>

        {isFilterOpen && (
          <div
            className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`flex-shrink-0 px-5 h-10 rounded-full transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-[#2a2420] text-white"
                    : "bg-white text-[#6b6560] border border-[#e8e6e1]"
                }`}
              >
                {getCategoryLabel(language, category)}
              </button>
            ))}
          </div>
        )}
        {!isLoggedIn && (
          <></>
          // <p className="text-xs text-[#8b857f] mt-2">
          //   {/* {myClassLockedLabel[language]} */}
          // </p>
        )}
      </div>
    </div>
  );
}
