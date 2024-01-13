import { style } from "@vanilla-extract/css";

export const calendarDaysWrapperStyle = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontWeight: 600,
  fontSize: 11,
  padding: "2px",
});

export const col = style({
  width: "13.5%",
  height: "100%",
});
