import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button, ButtonProp } from "./ButtonBase";

const meta: Meta<typeof Button> = {
  title: "버튼",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: '버튼'
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: '버튼'
  }
};
