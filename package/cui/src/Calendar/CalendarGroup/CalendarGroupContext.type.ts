import { ChangeEvent } from "react";
import { CommonDayjsType } from "src/shared/types/common.type";

export interface CalendarGroupContextTyped {
    currentMonth: CommonDayjsType;
    onChange: (day: CommonDayjsType) => void
}