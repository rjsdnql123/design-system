import { createVar, style } from "@vanilla-extract/css";

const addonBase = style({
  display: "inline-flex",
  width: "initial",
  height: "100%",
  alignItems: "center",
  pointerEvents: "none",
  margin: 0,
  fontSize: "inherit",
  lineHeight: 1,
});

const addonRight = style({});

export { addonRight, addonBase };
