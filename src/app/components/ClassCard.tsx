import { getBookingButtonLabel, type Language } from "../i18n/i18n";

interface ClassCardProps {
  name: string;
  instructor: string;
  duration: string;
  time: string;
  level: string[];
  isBooked?: boolean;
  onAction: () => void;
  language: Language;
}

export function ClassCard({
  name,
  instructor,
  duration,
  time,
  level,
  isBooked = false,
  onAction,
  language,
}: ClassCardProps) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#f0eee9]">
      <div className="mb-3">
        <h3 className="text-[#2a2420] mb-1">{name}</h3>
        <p className="text-sm">
          <span className="text-[#2a2420]">{time}</span>
          <span className="text-[#6b6560]"> - {duration}</span>
        </p>
        <p className="text-sm text-[#6b6560]">{instructor}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {level.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#f5f3f0] text-[#6b6560] text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={onAction}
          className={`px-6 h-9 rounded-full transition-all flex items-center justify-center ${
            isBooked
              ? "bg-[#ede9e4] text-[#2a2420] hover:bg-[#e4dfd8]"
              : "bg-[#2a2420] text-white hover:bg-[#3a3430]"
          }`}>
          {getBookingButtonLabel(language, isBooked)}
        </button>
      </div>
    </div>
  );
}
