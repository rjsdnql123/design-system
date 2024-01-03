import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "../Radio/Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    name:'hi',
    children: <>
      <Radio >라면</Radio>
      <Radio>짜장면</Radio>
      <Radio>볶음밥</Radio>
      <Radio>짬뽕</Radio>
    </>
  }
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
  args: {

  }
};
