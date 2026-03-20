

export interface FitnessClass {
  id: string;
  name: string;
  instructor: string;
  duration: string;
  time: string;
  category: string;
  level: string[];
  date: Date;
  isBooked?: boolean;
}

export interface DateItem {
  day: string;
  date: string;
  fullDate: Date;
}

export const categories = ['All', 'Cardio', 'Mind & Body', 'Reformer', 'Yoga', 'Meditation'];

// March 20, 2026 is the current date
export const generateClasses = (): FitnessClass[] => {
  const classes: FitnessClass[] = [];
  const currentDate = new Date('2026-03-20');

  // Generate classes for the next 7 days
  for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
    const classDate = new Date(currentDate);
    classDate.setDate(currentDate.getDate() + dayOffset);

    // Morning classes (6:00 - 11:59)
    classes.push({
      id: `class-${dayOffset}-1`,
      name: 'Power Yoga Flow',
      instructor: 'Emma Thompson',
      duration: '60 min',
      time: '07:00',
      category: 'Yoga',
      level: ['Intermediate'],
      date: classDate,
      isBooked: dayOffset === 0
    });

    classes.push({
      id: `class-${dayOffset}-2`,
      name: 'HIIT Cardio Blast',
      instructor: 'Marcus Chen',
      duration: '45 min',
      time: '08:30',
      category: 'Cardio',
      level: ['Advanced'],
      date: classDate,
      isBooked: dayOffset === 1
    });

    classes.push({
      id: `class-${dayOffset}-3`,
      name: 'Pilates Reformer',
      instructor: 'Sofia Martinez',
      duration: '50 min',
      time: '10:00',
      category: 'Reformer',
      level: ['Beginner', 'Intermediate'],
      date: classDate
    });

    // Afternoon classes (12:00 - 17:59)
    classes.push({
      id: `class-${dayOffset}-4`,
      name: 'Mindful Meditation',
      instructor: 'James Wilson',
      duration: '30 min',
      time: '12:30',
      category: 'Meditation',
      level: ['All Levels'],
      date: classDate,
      isBooked: dayOffset === 0
    });

    classes.push({
      id: `class-${dayOffset}-5`,
      name: 'Vinyasa Flow',
      instructor: 'Aria Patel',
      duration: '60 min',
      time: '14:00',
      category: 'Yoga',
      level: ['Intermediate'],
      date: classDate
    });

    classes.push({
      id: `class-${dayOffset}-6`,
      name: 'Core Reformer',
      instructor: 'Sofia Martinez',
      duration: '45 min',
      time: '16:30',
      category: 'Reformer',
      level: ['Advanced'],
      date: classDate
    });

    // Evening classes (18:00 - 21:00)
    classes.push({
      id: `class-${dayOffset}-7`,
      name: 'Spin & Burn',
      instructor: 'Marcus Chen',
      duration: '45 min',
      time: '18:00',
      category: 'Cardio',
      level: ['Intermediate'],
      date: classDate,
      isBooked: dayOffset === 2
    });

    classes.push({
      id: `class-${dayOffset}-8`,
      name: 'Yin Yoga',
      instructor: 'Emma Thompson',
      duration: '75 min',
      time: '19:00',
      category: 'Mind & Body',
      level: ['All Levels'],
      date: classDate
    });

    classes.push({
      id: `class-${dayOffset}-9`,
      name: 'Evening Meditation',
      instructor: 'James Wilson',
      duration: '20 min',
      time: '20:00',
      category: 'Meditation',
      level: ['All Levels'],
      date: classDate
    });
  }

  return classes;
};

export const generateWeekDates = () => {
  const dates: DateItem[] = []; // Xác định rõ đây là mảng chứa các DateItem
  const startDate = new Date('2026-03-20');

  for (let i = 0; i < 7; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);

    dates.push({
      day: d.toLocaleDateString('en-US', { weekday: 'short' }),
      date: d.getDate().toString(), // Sửa lỗi "12 Mar" bằng cách chỉ lấy số ở đây
      fullDate: d
    });
  }
  return dates;
};
