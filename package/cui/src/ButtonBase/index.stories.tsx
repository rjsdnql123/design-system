// index.stories.tsx
import React from "react";
import {Button, ButtonProp} from'./ButtonBase'


export default {
  title: "버튼",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '버튼 내부 컨텐츠를 나타냅니다.',
    },
  },
  parameters: {
    componentSubtitle: "Button 컴포넌트",
  },
};

export const defaultButton = (props:ButtonProp) => {
  return <Button {...props} >{props.children}</Button>;
};
