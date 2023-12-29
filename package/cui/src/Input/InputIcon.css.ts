import { style } from "@vanilla-extract/css";

const inputIcon = style({
  boxSizing: "border-box",
  display: "inline-flex",
  //   width: `calc(${vars.inputHeight} - 2px)`,
  flexShrink: 0,
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  padding: 0,
  lineHeight: 1,
  position: "relative",
  //   cursor: clickable ? 'pointer' : 'default',
  //   pointerEvents: clickable ? 'auto' : 'none',
});

const inputIconSvg = style({
  selectors: {
    [`${inputIcon} :global(svg)`]: {
      //   width: `calc(${vars.inputHeight} - 2px)`,
      //   height: `calc(${vars.inputHeight} - 2px)`,
      transform: "scale(0.44)",
    },
  },
});

const inputInner = style({
//   width: "100%",
//   padding: `110`,
//   border: "none",
//   ":focus": {
//     outline: "none",
//   },
  // selectors: {
  //   ':focus': {
  //     outline: 'none',
  //   },
  //   ':disabled': {
  //     backgroundColor: 'unset',
  //   },
  // },
});
export { inputIcon };
