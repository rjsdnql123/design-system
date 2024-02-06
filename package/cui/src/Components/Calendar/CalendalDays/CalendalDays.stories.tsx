import type { Meta, StoryObj } from '@storybook/react';
import { CalendalDays } from '.';

const meta: Meta<typeof CalendalDays> = {
  title: 'CalendalDays',
  component: CalendalDays,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof CalendalDays>;

export const Primary: Story = {
  args: {},
};
