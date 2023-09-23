const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export const getWeekDay = (date: Date) => {
  return dayNames[date.getDay()];
};
