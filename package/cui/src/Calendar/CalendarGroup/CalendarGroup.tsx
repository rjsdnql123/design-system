import React, { useMemo, useState } from "react";
import dayjs from "dayjs";
import RadioGroupContext from "./CalendarGroupContext";
import { CommonDayjsType } from "../../shared/types/common.type";

const RadioGroup = ({ currentMonth = dayjs(), onChange, children }: any) => {
  const [radioSelfValue, setRadioSelfValue] =
    useState<CommonDayjsType>(currentMonth);

  const updateState = (day: CommonDayjsType) => {
    setRadioSelfValue(day);
    onChange && onChange(day);
  };

  const contextValue = useMemo(
    () => ({
      currentMonth: radioSelfValue,
      onChange: updateState,
    }),
    [currentMonth]
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      {children}
    </RadioGroupContext.Provider>
  );
};

export { RadioGroup };
