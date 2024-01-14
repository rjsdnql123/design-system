import type { Meta, StoryObj } from "@storybook/react";
import { CalendarHeader } from "./CalendarHead";

const meta: Meta<typeof CalendarHeader> = {
  title: "CalendarHeader",
  component: CalendarHeader,
  tags: ["autodocs"],
  args: {
  }
};

export default meta;
type Story = StoryObj<typeof CalendarHeader>;

export const Primary: Story = {
  args: {
  }
};
