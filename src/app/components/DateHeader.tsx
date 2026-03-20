import React from "react";
import { getDayShortLabel, type Language } from "../i18n/i18n";

interface DateHeaderProps {
  day: string;
  date: string;
  isToday?: boolean;
  fullDate?: Date;
  language: Language;
}

export function DateHeader({
  day,
  date,
  isToday = false,
  fullDate,
  language,
}: DateHeaderProps) {
  const dayLabel = getDayShortLabel(language, day);
  const dateLabel =
    language === "vi" && fullDate
      ? new Intl.DateTimeFormat("vi-VN", {
          day: "2-digit",
          // month: "short",
        }).format(fullDate)
      : date;

  return (
    <div className="bg-[#faf9f7] px-4 py-3 border-b border-[#e8e6e1]">
      <div className="flex items-center gap-3">
        <div
          className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl ${
            isToday
              ? "bg-[#2a2420] text-white"
              : "bg-white border border-[#e8e6e1] text-[#6b6560]"
          }`}>
          <span className="text-xs opacity-70">{dayLabel}</span>
          <span className="mt-0.5">{dateLabel}</span>
        </div>
        <div>
          {/* <h2 className="text-[#2a2420]">{isToday ? "Today" : day}</h2> */}
          {/* <p className="text-sm text-[#6b6560]">{date}</p>s */}
        </div>
      </div>
    </div>
  );
}
