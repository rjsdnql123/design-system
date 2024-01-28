import { ChangeEvent } from 'react';
import { CommonDayjsType } from '../../shared/types/common.type';

export interface CalendarGroupContextTyped {
  currentMonth: CommonDayjsType;
  onChange: (day: CommonDayjsType) => void;
}
