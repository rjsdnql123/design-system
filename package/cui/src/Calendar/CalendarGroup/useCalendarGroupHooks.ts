import React from "react";
import { CalendarGroupContextTyped } from "./CalendarGroupContext.type";
import RadioGroupContext from "./CalendarGroupContext";

const useCalendarGroupContext = (): CalendarGroupContextTyped => {
  return React.useContext(RadioGroupContext);
};

export default useCalendarGroupContext;
