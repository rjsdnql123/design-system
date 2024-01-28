import React from 'react';
import { useCalendalHeaderHooks } from './CalendalHeader.hooks';
import { calendarDaysWrapperStyle, col } from './CalendalHeader.css';

const CalendalDays = React.memo(() => {
  const { dayList } = useCalendalHeaderHooks();

  return (
    <div className={calendarDaysWrapperStyle}>
      {dayList.map((day) => {
        return (
          <div className={col} key={day}>
            {day}
          </div>
        );
      })}
    </div>
  );
});

export { CalendalDays };
