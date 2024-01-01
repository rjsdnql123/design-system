import React, { ChangeEvent } from "react";
import { RadioProps } from "./types";

const Radio = ({
  className,
  checked,
  onChange,
  disabled,
  children,
  id,
  ...props
}: React.PropsWithChildren<RadioProps>) => {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange && onChange(event);
  };

  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={changeHandler}
      />
      {children}
    </label>
  );
};

export { Radio };
