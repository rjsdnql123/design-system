import React, { ChangeEvent, useEffect, useState } from "react";
import RadioGroupContext from "./RadioGroupContext";
import { RadioGroupProps } from "./RadioGroup.type";

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

  const contextValue = React.useMemo(
    () => ({
      name: name,
      onChange: updateState,
      value: radioSelfValue,
      disabled: disabled,
    }),
    [name, radioSelfValue]
  );

  useEffect(() => {
    if (value === undefined) return;
    setRadioSelfValue(value);
  }, [value]);

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div>{children}</div>
    </RadioGroupContext.Provider>
  );
};

export { RadioGroup };
