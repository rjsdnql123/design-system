import type { Meta, StoryObj } from "@storybook/react";
import { CalendarHeader } from "./CarlendarHead/CommonCalendarHead/CalendarHead";
import { CalendalDays } from "./CalendalDays";
import { CommonCalendarBody } from "./CalendarBody/CommonCaldendarBody/CommonCalendarBody";
import React from "react";
import { RadioGroup } from "./CalendarGroup/CalendarGroup";

export const CalendarComb = () => (
  <RadioGroup>
    <CalendarHeader />
    <CalendalDays />
    <CommonCalendarBody />
  </RadioGroup>
);

const meta: Meta<typeof CalendarComb> = {
  title: "CalendarComb",
  component: CalendarComb,
  tags: ["autodocs"],
  args: {},
};

export default meta;
