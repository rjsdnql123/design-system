import React from "react";
import { useCalendar } from "../useCalendarHoos";
import { calendarCellWrapperStyle, calendarWeekStyle, commonCalendarDaySpan, commonCalendarDayStyle } from "./CommonCalendar.css";

const CommonCalendarBody = ({ currentMonth }: any) => {
  const { calendarWeek } = useCalendar({
    currentMonth,
  });

  return (
    <div className={calendarCellWrapperStyle}>
      {calendarWeek.map((week, index) => {
        return (
          <div className={calendarWeekStyle} key={index}>
            {week.map((day) => {
              return (
                <div key={day.key} className={`${commonCalendarDayStyle}`}>
                  <span className={commonCalendarDaySpan}>{day.date}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export { CommonCalendarBody };
