import React, { ChangeEvent } from "react";
import RadioGroupContext from "./RadioGroupContext";

interface RadioGroupProps {
  value?: string | number;
  initialValue?: string | number;
  disabled?: boolean;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  useRow?: boolean;
  name: string;
}

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
    ...other
  } = props;
  // const onChange = () => {

  // }

  const contextValue = React.useMemo(
    () => ({
      name: name,
      onChange(event: ChangeEvent<HTMLInputElement>) {
        // setValueState(event.target.value);

        if (onChange) {
          onChange(event);
        }
      },
      value: value,
    }),
    [
      name,
      onChange,
      ,
      // setValueState
      value,
    ]
  );

  return (
    <RadioGroupContext.Provider value={contextValue}>
      {children}
    </RadioGroupContext.Provider>
  );
};

export { RadioGroup };
