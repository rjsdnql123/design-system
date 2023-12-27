import React from "react";
import { ForwardRefRenderFunction, forwardRef } from "react";
import { container } from "./ButtonBase.css";
import { ButtonTypes } from "src/utils/propsType";

export interface ButtonProp {
  buttonType?: ButtonTypes;
  isLoading?: boolean;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const _ButtonBase: ForwardRefRenderFunction<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProp>
> = (props: React.PropsWithChildren<ButtonProp>, ref) => {
  const {
    children,
    isLoading,
    buttonType = "button",
    color,
    className,
    ...other
  } = props;

  return (
    <button
      className={className || container}
      type={buttonType}
      ref={ref}
      {...other}
    >
      {isLoading ? <div>loading</div> : children}
    </button>
  );
};

export const Button = forwardRef(_ButtonBase);
