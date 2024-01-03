import React, { ChangeEvent } from "react";
import { RadioProps } from "./types";
import { inputStyle, radioLabelStyle } from "./Radio.css";
import useRadioGroup from "../RadioGroup/useRadioHooks";

const Radio = ({
  className,
  checked,
  onChange,
  disabled,
  children,
  name: nameProps,
  id,
  ...props
}: React.PropsWithChildren<RadioProps>) => {
  const radioGroup = useRadioGroup();

  let name = nameProps;

  if (radioGroup) {
    if (!name) {
      name = radioGroup.name;
    }
  }
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange && onChange(event);
  };
  console.log(name);
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
