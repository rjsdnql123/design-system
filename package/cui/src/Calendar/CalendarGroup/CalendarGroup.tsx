import React, { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import CalendarGroupContext from './CalendarGroupContext';
import { CommonDayjsType } from '../../shared/types/common.type';

const CalendarGroup = ({ currentMonth = dayjs(), onChange, children }: any) => {
  const [radioSelfValue, setRadioSelfValue] = useState<CommonDayjsType>(currentMonth);

  const updateState = (day: CommonDayjsType) => {
    setRadioSelfValue(day);
    onChange && onChange(day);
  };

  const contextValue = useMemo(
    () => ({
      currentMonth: radioSelfValue,
      onChange: updateState,
    }),
    [currentMonth],
  );

  return <CalendarGroupContext.Provider value={contextValue}>{children}</CalendarGroupContext.Provider>;
};

export { CalendarGroup };
