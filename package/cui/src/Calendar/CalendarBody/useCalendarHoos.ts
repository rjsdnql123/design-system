import dayjs from 'dayjs';
import { UseCalendarHooksProps } from './Calendar.type';

const useCalendar = ({ currentMonth = dayjs() }: UseCalendarHooksProps) => {
  const monthStart = currentMonth.startOf('month');
  const monthEnd = currentMonth.endOf('month');
  const startDate = monthStart.startOf('week');
  const endDate = monthEnd.endOf('week');
  const calendarWeek = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      days.push({
        date: day.format('D'),
        day: day.clone(),
        disabled: !day.isSame(monthStart, 'month'),
        notValid: currentMonth.format('M') !== day.format('M'),
        key: day.format('YYYY-MM-DD'),
      });
      day = day.add(1, 'day');
    }
    calendarWeek.push(days);
    days = [];
  }
  return {
    calendarWeek,
  };
};

export { useCalendar };
