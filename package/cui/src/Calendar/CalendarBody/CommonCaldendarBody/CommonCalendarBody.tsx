import React from "react";
import { useCalendar } from "../useCalendarHoos";
import { calendarCellWrapperStyle, calendarWeekStyle, commonCalendarDaySpan, commonCalendarDayStyle } from "./CommonCalendar.css";
import { CommonCalendarProps } from "./CommonCalendar.type";
import useCalendarGroupContext from "../../CalendarGroup/useCalendarGroupHooks";

const CommonCalendarBody = ({ currentMonth, className }: CommonCalendarProps) => {
  const { currentMonth: groupMonth, onChange: CalendarOnChange } =
  useCalendarGroupContext();
  
  const { calendarWeek } = useCalendar({
    currentMonth: groupMonth,
  });

  

  return (
    <div className={`${calendarCellWrapperStyle} ${className}`}>
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
