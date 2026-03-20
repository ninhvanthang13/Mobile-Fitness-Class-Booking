export type Language = "vi" | "en";

const heroTitleLines: Record<Language, [string, string]> = {
  vi: ["LỊCH TẬP CÁC", "LỚP"],
  en: ["SCHEDULE", "CLASSES"],
};

export const languageToggleLabels: Record<Language, string> = {
  en: "en.",
  vi: "vi.",
};

export const filterViewLabels: Record<
  Language,
  { my: string; all: string }
> = {
  vi: { my: "Lớp của tôi", all: "Tất cả lớp" },
  en: { my: "My Class", all: "All Classes" },
};

export const filterByLabels: Record<Language, string> = {
  vi: "Lọc theo",
  en: "Filter by",
};

const viCategoryLabels: Record<string, string> = {
  All: "All",
  Cardio: "Cardio",
  "Mind & Body": "Mind & Body",
  Reformer: "Reformer",
  Yoga: "Yoga",
  Meditation: "Mats",
};

export function getCategoryLabel(language: Language, category: string) {
  if (language === "en") return category;
  return viCategoryLabels[category] ?? category;
}

const viDayShortMap: Record<string, string> = {
  Sun: "CN",
  Mon: "T2",
  Tue: "T3",
  Wed: "T4",
  Thu: "T5",
  Fri: "T6",
  Sat: "T7",
};

export function getDayShortLabel(language: Language, day: string) {
  if (language === "en") return day;
  return viDayShortMap[day] ?? day;
}

export function getBookingButtonLabel(language: Language, isBooked: boolean) {
  if (language === "vi") return isBooked ? "Đã đăng ký" : "Chưa đăng ký";
  return isBooked ? "Booked" : "Book";
}

export function getNoClassesForDayMessage(
  language: Language,
  selectedView: "my" | "all",
) {
  if (selectedView === "my") {
    return language === "vi"
      ? "Không tìm thấy lớp đã đăng ký"
      : "No booked classes found";
  }

  return language === "vi" ? "Không có lớp cho ngày này" : "No classes on this day";
}

export function getHeroTitleLines(language: Language) {
  return heroTitleLines[language];
}

