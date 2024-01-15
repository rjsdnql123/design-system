import React from "react";
import { CalendarGroupContextTyped } from "./CalendarGroupContext.type";
import dayjs from "dayjs";

const defaultContext = {
    currentMonth: dayjs(),
    onChange: () => {}
};

const RadioGroupContext =
  React.createContext<CalendarGroupContextTyped>(defaultContext);

export default RadioGroupContext;
