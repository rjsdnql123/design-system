import { createVar, style } from "@vanilla-extract/css";

const inputDisabled = createVar();

const inputInner = style({
  width: "100%",
  border: "none",
  display: "block",
  ":focus": {
    outline: "none",
  },
  ":disabled": {
    backgroundColor: "unset",
  },
});

const inputContainer = style({
  display: "flex",
  alignItems: "center",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#A6D9F7",
  borderRadius: "4px",
  padding: "5px 0",
  backgroundColor: inputDisabled,
});

export { inputInner, inputContainer, inputDisabled };
