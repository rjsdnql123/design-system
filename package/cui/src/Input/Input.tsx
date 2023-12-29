import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useMemo,
  useState,
} from "react";
import InputIcon from "./InputIcon";
import { inputContainer, inputDisabled, inputInner } from "./Input.css";
import InputLabel from "./InputLabel";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export type InputProps = {
  value?: string;
  initialValue?: string;
  placeholder?: string;
  type?: string;
  htmlType?: string;
  readOnly?: boolean;
  disabled?: boolean;
  label?: string;
  labelRight?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconClickable?: boolean;
  className?: string;
  clearable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onIconClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  autoComplete?: string;
};

const _Input: ForwardRefRenderFunction<
  HTMLInputElement,
  React.PropsWithChildren<InputProps>
> = (
  {
    label,
    labelRight,
    type,
    htmlType,
    icon,
    iconRight,
    iconClickable,
    onIconClick,
    initialValue,
    onChange,
    readOnly,
    value,
    onClearClick,
    clearable,
    className,
    onBlur,
    onFocus,
    autoComplete,
    placeholder,
    children,
    disabled,
    ...props
  }: React.PropsWithChildren<InputProps>,
  ref
) => {
  const [selfValue, setSelfValue] = useState<string>(initialValue || "");

  const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(e);
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(e);
  };

  const iconClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onIconClick && onIconClick(e);
  };

  const iconProps = useMemo(
    () => ({
      clickable: iconClickable,
      onClick: iconClickHandler,
    }),
    [iconClickable, iconClickHandler]
  );

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;
    setSelfValue(event.target.value);
    onChange && onChange(event);
  };

  return (
    <div>
      {label && <InputLabel>{label}</InputLabel>}
      <div className={inputContainer}
      style={assignInlineVars({
        [inputDisabled]: disabled ? 'lightgray' : null
      })}
      >
        {icon && <InputIcon icon={icon} {...iconProps}></InputIcon>}
        <input
          className={inputInner}
          type={htmlType}
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          onFocus={focusHandler}
          onBlur={blurHandler}
          onChange={changeHandler}
          value={selfValue}
          autoComplete={autoComplete}
          {...props}
        />
        {iconRight && <InputIcon icon={iconRight} {...iconProps}></InputIcon>}
      </div>
      {labelRight && <InputLabel isRight={true}>{labelRight}</InputLabel>}
    </div>
  );
};

export const Input = forwardRef(_Input);
