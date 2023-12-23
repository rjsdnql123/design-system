import React from "react";
import { ForwardRefRenderFunction, forwardRef } from "react"

const _ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, any> = (props, ref) => {
    const { 
        action,
        children,
        className,
        component = 'button',
        disabled = false,
        LinkComponent = 'a',
        onBlur,
        onClick,
        onFocus,
        onFocusVisible,
        onKeyDown,
        onKeyUp,
        onMouseDown,
        onMouseLeave,
        onMouseUp,
        onTouchEnd,
        onTouchMove,
        onTouchStart,
        tabIndex = 0,
        type,
        ...other
    } = props
    return <button
    tabIndex={disabled ? -1 : tabIndex}
    // className={clsx(classes.root, className)}
    onClick={onClick}
    ref={ref}
    ></button>
}

export const Button = forwardRef(_ButtonBase);
