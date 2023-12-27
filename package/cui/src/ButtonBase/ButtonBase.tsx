import React from "react";
import { ForwardRefRenderFunction, forwardRef } from "react";
import { container } from "./ButtonBase.css";

// interface Props {
//   // type?: ButtonTypes
//   ghost?: boolean;
//   loading?: boolean;
//   shadow?: boolean;
//   auto?: boolean;
//   effect?: boolean;
//   disabled?: boolean;
//   htmlType?: React.ButtonHTMLAttributes<any>["type"];
//   icon?: React.ReactNode;
//   iconRight?: React.ReactNode;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
//   className?: string;
// }
interface ButtonStyleProps {
  $color?: string;
}

export interface ButtonProp extends React.HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  color?: string;
  buttonType?: ButtonType;
}

type ButtonType = "button" | "submit" | "reset";

const _ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProp> = (
  props,
  ref
) => {
  const { children, isLoading, buttonType = "button", color, ...other } = props;
  return (
    <button
      className={container}
      type={buttonType} ref={ref} {...props}
    >
       {isLoading ? <div>loading</div> : children}
    </button>
  );
};

export const Button = forwardRef(_ButtonBase);
