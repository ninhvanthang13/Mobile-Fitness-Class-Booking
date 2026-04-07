
import React, { useEffect, useState, useMemo } from 'react';
import { FilterHeader } from './components/FilterHeader';
import { FilterTags } from './components/FilterTags';
import { DateHeader } from './components/DateHeader';
import { ClassCard } from './components/ClassCard';
import { ScheduleHero } from './components/ScheduleHero';
import { WeekSelector } from './components/WeekSelector';
import { Footer } from './components/Footer';
import { generateClasses, generateWeekDates, categories } from './data/classesData';
import { getNoClassesForDayMessage, guestPromptTitle, type Language } from "./i18n/i18n";

export default function App() {
  const [selectedView, setSelectedView] = useState<'my' | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [timeFilter, setTimeFilter] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('vi');
  const [selectedDate, setSelectedDate] = useState<Date>(() => new Date('2026-03-20'));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const classes = useMemo(() => generateClasses(), []);
  const weekDates = useMemo(() => generateWeekDates(), []);
  const currentDate = useMemo(() => new Date('2026-03-20'), []);

  const filterTags = timeFilter 
    ? [{ id: 'time', label: timeFilter }] 
    : [];

  const handleRemoveTag = (id: string) => {
    if (id === 'time') {
      setTimeFilter(null);
    }
  };

  const handleBookClass = (classId: string) => {
    console.log('Booking class:', classId);
  };

  const handleAuthAction = () => {
    setIsLoggedIn((prev) => {
      const next = !prev;
      if (!next) {
        setSelectedView("all");
      }
      return next;
    });
  };

  // Group classes by date
  const groupedClasses = useMemo(() => {
    const groups: { [key: string]: typeof classes } = {};
    
    let filtered = classes;

    // Filter by view (My Class vs All Classes)
    if (selectedView === 'my') {
      filtered = filtered.filter(c => c.isBooked);
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(c => c.category === selectedCategory);
    }

    // Group by date
    filtered.forEach(classItem => {
      const dateKey = `${classItem.date.getFullYear()}-${classItem.date.getMonth()}-${classItem.date.getDate()}`;
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(classItem);
    });

    return groups;
  }, [classes, selectedView, selectedCategory]);

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const toDateKey = (date: Date) =>
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  const selectedDateKey = toDateKey(selectedDate);

  useEffect(() => {
    const el = document.getElementById(`date-section-${selectedDateKey}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [selectedDateKey]);

  return (
    <div className="min-h-screen bg-[#faf9f7] max-w-[375px] mx-auto">
      <ScheduleHero
        language={language}
        onLanguageChange={setLanguage}
        isLoggedIn={isLoggedIn}
        onAuthAction={handleAuthAction}
      />
      <div className="sticky top-0 z-40 bg-[#faf9f7] border-b border-[#e8e6e1]">
        <FilterHeader
          selectedView={selectedView}
          onViewChange={setSelectedView}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
          language={language}
          isLoggedIn={isLoggedIn}
          onRequireLogin={() => {
            setIsLoggedIn(true);
            setSelectedView("my");
          }}
        />

        <WeekSelector
          dates={weekDates}
          selectedDate={selectedDate}
          onDateSelect={(d) => setSelectedDate(d)}
          language={language}
        />
      </div>

      <FilterTags tags={filterTags} onRemoveTag={handleRemoveTag} />

      {!isLoggedIn && (
        <div className="px-4 pt-4 pb-2">
          <button
            type="button"
            onClick={() => setIsLoggedIn(true)}
            className="w-full text-left rounded-2xl bg-[#ebe6df] text-[#2a2420] px-5 py-5"
          >
            <span className="text-[31px] leading-none align-middle mr-2">›</span>
            <span className="text-[17px]">{guestPromptTitle[language]}</span>
          </button>
        </div>
      )}

      {isLoggedIn && (
      <div className="pb-20">
        {weekDates.map((dateItem, index) => {
          const dateKey = toDateKey(dateItem.fullDate);
          const classesForDate = groupedClasses[dateKey] || [];
          const isToday = isSameDay(dateItem.fullDate, currentDate);
          const isSelected = isSameDay(dateItem.fullDate, selectedDate);

          // Skip dates with no classes (except the selected one)
          if (classesForDate.length === 0 && !isSelected) return null;

          return (
            <div
              key={index}
              id={`date-section-${dateKey}`}
              className="scroll-mt-[220px]"
            >
              <DateHeader
                day={dateItem.day}
                date={dateItem.date}
                isToday={isToday}
                fullDate={dateItem.fullDate}
                language={language}
              />

              <div className="px-4 py-4 space-y-3">
                {classesForDate.length > 0 ? (
                  classesForDate.map((classItem) => (
                    <ClassCard
                      key={classItem.id}
                      name={classItem.name}
                      instructor={classItem.instructor}
                      duration={classItem.duration}
                      time={classItem.time}
                      level={classItem.level}
                      isBooked={classItem.isBooked}
                      language={language}
                      onAction={() => handleBookClass(classItem.id)}
                    />
                  ))
                ) : (
                  <div className="text-center py-6 px-2">
                    <p className="text-[#6b6560]">
                      {getNoClassesForDayMessage(language, selectedView)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      )}
      <Footer language={language} onLanguageChange={setLanguage} />
    </div>
  );
}