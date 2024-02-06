import type { Meta, StoryObj } from '@storybook/react';
import { CommonCalendarBody } from './CommonCalendarBody';

const meta: Meta<typeof CommonCalendarBody> = {
  title: 'CommonCalendarBody',
  component: CommonCalendarBody,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof CommonCalendarBody>;

export const Primary: Story = {
  args: {},
};
