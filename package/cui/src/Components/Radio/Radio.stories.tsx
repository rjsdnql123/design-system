import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Radio',
  component: Radio,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  args: {
    children: '',
  },
};
