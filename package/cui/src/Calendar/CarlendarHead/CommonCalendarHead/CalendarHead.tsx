import { calendarHeaderWrapperStyle } from "./CalendalHeader.css";
import { CalendalHeaderProps } from "./CalendalHeader.type";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import useCalendarGroupContext from "../../CalendarGroup/useCalendarGroupHooks";

const CalendarHeader = React.memo(
  ({
    currentMonth = dayjs(),
    nextIcon,
    prevIcon,
    prevMonth,
    nextMonth,
  }: CalendalHeaderProps) => {
    const { currentMonth: groupMonth, onChange: CalendarOnChange } =
      useCalendarGroupContext();

    const [curr, setCurr] = useState(currentMonth || groupMonth);
    
    const prev = () => {
      CalendarOnChange(curr.subtract(1, "month"));
      setCurr(curr.subtract(1, "month"))
      prevMonth && prevMonth();
    };

    const next = () => {
      CalendarOnChange(curr.add(1, "month"));
      setCurr(curr.add(1, "month"))
      nextMonth && nextMonth();
    };

    return (
        <div className={calendarHeaderWrapperStyle}>
          {prev && <div onClick={prev}>이전</div>}
          <div className="selected-date">
            {curr.format("YY")}년 {curr.format("M")}월
          </div>
          {next && <div onClick={next}>다음</div>}
        </div>
    );
  }
);

export { CalendarHeader };


