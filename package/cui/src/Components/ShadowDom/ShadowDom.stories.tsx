import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Radio } from '../Radio/Radio';
import ShadowDom from './ShadowDom';
import './test.css'
const CountShadowDom: React.FC = () => {
  const [count, setCount] = useState<number>(0);
 
  const onclick = () => {
    setCount(count + 1);
  };
 
  return (
    <div>
      <div>
        쉐도우 돔이 아닙니다.
      </div>
      <ShadowDom css='div {color: blue;} * {background: red;};'>
        쉐도우 돔 안에 있는 children
        <span>dd</span>
      </ShadowDom>
    </div>
  );
 };

const meta: Meta<typeof ShadowDom> = {
  title: 'CountShadowDom',
  component: CountShadowDom,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof ShadowDom>;

export const Primary: Story = {
  args: {},
};
