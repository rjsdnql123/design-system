import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import RadioGroupContext from "./RadioGroupContext";
import { RadioGroupProps } from "./RadioGroup.type";
import { radioGroupRootStyle, radioGroupRowStyle } from "./RadioGroup.css";

const RadioGroup = (props: React.PropsWithChildren<RadioGroupProps>) => {
  const {
    value,
    name,
    initialValue,
    disabled,
    onChange,
    className,
    useRow,
    children,
  } = props;

  const [radioSelfValue, setRadioSelfValue] = useState<
    string | number | undefined
  >(initialValue);

  const updateState = (event: ChangeEvent<HTMLInputElement>) => {
    setRadioSelfValue(event.target.value);
    onChange && onChange(event);
  };

  const contextValue = useMemo(
    () => ({
      name: name,
      onChange: updateState,
      value: radioSelfValue,
      disabled: disabled,
    }),
    [name, radioSelfValue, disabled]
  );

  useEffect(() => {
    if (value === undefined) return;
    setRadioSelfValue(value);
  }, [value]);

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div className={`${radioGroupRootStyle} ${useRow && radioGroupRowStyle} ${className}`}>
        {children}
        </div>
    </RadioGroupContext.Provider>
  );
};

export { RadioGroup };
