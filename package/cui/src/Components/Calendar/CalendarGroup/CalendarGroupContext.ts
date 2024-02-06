'use client';
import React from 'react';
import { CalendarGroupContextTyped } from './CalendarGroupContext.type';
import dayjs from 'dayjs';

const defaultContext = {
  currentMonth: dayjs(),
  onChange: () => {},
};

const CalendarGroupContext = React.createContext<CalendarGroupContextTyped>(defaultContext);

export default CalendarGroupContext;
