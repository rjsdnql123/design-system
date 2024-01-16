import type { Meta, StoryObj } from "@storybook/react";
import { CalendarHeader } from "./CarlendarHead/CommonCalendarHead/CalendarHead";
import { CalendalDays } from "./CalendalDays";
import { CommonCalendarBody } from "./CalendarBody/CommonCaldendarBody/CommonCalendarBody";
import React from "react";
import { RadioGroup } from "./CalendarGroup/CalendarGroup";
import { commonCalendarWrapperStyle } from "./CommonCalendarWrapper.css";

export const CalendarComb = () => (
  <RadioGroup>
    <div className={commonCalendarWrapperStyle}>
      <CalendarHeader />
      <CalendalDays />
      <CommonCalendarBody />
    </div>
  </RadioGroup>
);

const meta: Meta<typeof CalendarComb> = {
  title: "CalendarComb",
  component: CalendarComb,
  tags: ["autodocs"],
  args: {},
};

export default meta;
