import { style } from "@vanilla-extract/css";

export const radioLabelStyle = style({
    display: 'flex',
    alignItems: 'center',
    padding:'2px'
});

export const inputStyle = style({
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none",
  width: 18,
  height: 18,
  border: `2px solid #ccc`,
  borderRadius: "50%",
  outline: "none",
  cursor: "pointer",
  margin: 0,
  marginRight: '5px',
  selectors: {
    "&:checked": {
      backgroundColor: "#22d3ee",
      border: `3px solid white`,
      boxShadow: `0 0 0 1.6px #22d3ee`,
    },
    "&:disabled": {
      cursor: "not-allowed",
    },
  },
});
