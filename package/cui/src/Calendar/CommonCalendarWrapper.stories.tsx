import type { Meta, StoryObj } from '@storybook/react';
import { CalendarHeader } from './CarlendarHead/CommonCalendarHead/CalendarHead';
import { CalendalDays } from './CalendalDays';
import { CommonCalendarBody } from './CalendarBody/CommonCaldendarBody/CommonCalendarBody';
import React from 'react';
import { CalendarGroup } from './CalendarGroup/CalendarGroup';
import { commonCalendarWrapperStyle } from './CommonCalendarWrapper.css';

export const CalendarComb = () => (
  <CalendarGroup>
    <div className={commonCalendarWrapperStyle}>
      <CalendarHeader />
      <CalendalDays />
      <CommonCalendarBody />
    </div>
  </CalendarGroup>
);

const meta: Meta<typeof CalendarComb> = {
  title: 'CalendarComb',
  component: CalendarComb,
  tags: ['autodocs'],
  args: {},
};

export default meta;
