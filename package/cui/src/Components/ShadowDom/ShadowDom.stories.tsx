import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import ShadowDom from './ShadowDom';
import './test.css'




const CustomShadowDom: React.FC = () => {

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
  title: 'CustomShadowDom',
  component: CustomShadowDom,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof ShadowDom>;

export const Primary: Story = {
  args: {},
};
