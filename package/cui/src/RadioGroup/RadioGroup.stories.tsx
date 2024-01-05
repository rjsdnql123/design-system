import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "../Radio/Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    name:'food',
    initialValue: 2,
    children: <>
      <Radio value={1} >라면</Radio>
      <Radio value={2} >짜장면</Radio>
      <Radio value={3}>볶음밥</Radio>
      <Radio value={4}>짬뽕</Radio>
    </>
  }
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
  args: {

  }
};
