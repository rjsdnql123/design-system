// index.stories.tsx
import React from "react";
import {Button} from'./ButtonBase'


export default {
  title: "버튼",
  component: Button,
  parameters: {
    componentSubtitle: "Button 컴포넌트",
  },
};

export const defaultButton = () => {
  return <Button>default 버튼</Button>;
};

export const primaryButton = () => {
  return <Button>primary 버튼</Button>;
};
export const secondaryButton = () => {
  return <Button>secondary 버튼</Button>;
};