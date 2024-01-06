import React, { ChangeEvent, useMemo } from "react";
import { RadioProps } from "./types";
import { inputStyle, radioLabelStyle } from "./Radio.css";
import useRadioGroup from "../RadioGroup/useRadioHooks";

function areEqualValues(a: any, b: any) {
  if (typeof b === "object" && b !== null) {
    return a === b;
  }

  return String(a) === String(b);
}

const Radio = ({
  className,
  checked: radioCehcekd,
  onChange,
  disabled,
  children,
  name: nameProps,
  id,
  value: radioValue,
  ...other
}: React.PropsWithChildren<RadioProps>) => {
  const {name: groupName, value: groupValue, onChange: grouponChange, disabled: disabledAll } = useRadioGroup();

  let name = nameProps;
  let checked = radioCehcekd

  if (groupValue || groupName) {
    if (typeof checked === 'undefined') {
      checked = areEqualValues(groupValue, radioValue);
    }
    if (typeof name === 'undefined') {
      name = groupName;
    }
  }

  const isDisabled = useMemo(() => disabled || disabledAll, [disabled, disabledAll])

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;
    grouponChange && grouponChange(event)
    onChange && onChange(event);
  };

  

  return (
    <label htmlFor={id} className={`${radioLabelStyle} ${className}`}>
      <input
        className={inputStyle}
        id={id}
        type="radio"
        value={radioValue}
        name={name}
        checked={checked}
        disabled={isDisabled}
        onChange={changeHandler}
        {...other}
      />
      {children}
    </label>
  );
};

export { Radio };
