import React, { ChangeEvent } from "react";
import { RadioProps } from "./types";
import { inputStyle, radioLabelStyle } from "./Radio.css";

const Radio = ({
  className,
  checked,
  onChange,
  disabled,
  children,
  name,
  id,
  ...props
}: React.PropsWithChildren<RadioProps>) => {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange && onChange(event);
  };

  return (
    <label htmlFor={id} className={radioLabelStyle}>
      <input
        className={inputStyle}
        id={id}
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={changeHandler}
      />
      {children}
    </label>
  );
};

export { Radio };
