import { getDayShortLabel, type Language } from "../i18n/i18n";

interface DateItem {
  day: string;
  date: string;
  fullDate: Date;
}

interface WeekSelectorProps {
  dates: DateItem[];
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  language: Language;
}

export function WeekSelector({
  dates,
  selectedDate,
  onDateSelect,
  language,
}: WeekSelectorProps) {
  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  return (
    <div className="bg-[#faf9f7] px-4 py-4">
      <div
        className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}>
        {dates.map((dateItem, index) => {
          const isSelected = isSameDay(dateItem.fullDate, selectedDate);
          const dayLabel = getDayShortLabel(language, dateItem.day);
          const displayDate = new Intl.DateTimeFormat("vi-VN", {
            day: "2-digit",
            month: "2-digit",
          }).format(dateItem.fullDate);
          return (
            <button
              key={index}
              onClick={() => onDateSelect(dateItem.fullDate)}
              className={`flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all ${
                isSelected
                  ? "bg-[#2a2420] text-white"
                  : "bg-white text-[#6b6560] border border-[#e8e6e1]"
              }`}>
              <span className="text-xs opacity-70">{dayLabel}</span>
              <span className="mt-1 text-sm font-semibold">{displayDate}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
