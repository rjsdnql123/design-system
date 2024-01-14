import { calendarHeaderWrapperStyle } from "./CalendalHeader.css";
import { CalendalHeaderProps } from "./CalendalHeader.type";
import React from "react";
import dayjs from "dayjs";

const CalendarHeader = React.memo(
  ({
    currentMonth = dayjs(),
    nextIcon,
    prevIcon,
    prevMonth,
    nextMonth,
  }: CalendalHeaderProps) => {
    return (
      <div className={calendarHeaderWrapperStyle}>
        <div className="date-controler">
          {/* {prevMonth && <ArrowLeftIcon onClick={prevMonth} />} */}
          <div className="selected-date">
            {currentMonth.format("YY")}년 {currentMonth.format("M")}월
          </div>
          {/* {nextMonth && <ArrowRightIcon onClick={nextMonth} />} */}
        </div>
      </div>
    );
  }
);

export { CalendarHeader };
