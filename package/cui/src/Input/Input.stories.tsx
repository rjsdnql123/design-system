import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  args: {
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
  }
};
