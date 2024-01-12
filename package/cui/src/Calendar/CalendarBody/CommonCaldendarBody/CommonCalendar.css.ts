import { style } from "@vanilla-extract/css";

export const calendarCellWrapperStyle = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});

export const calendarWeekStyle = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const commonCalendarDaySpan = style({
  margin: '4px 0 0 4px',
});

export const commonCalendarDayStyle = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  width: "13.5%",
  height: "93%",
  alignItems: "flex-start",
  border: "none",
  borderRadius: 3,
  fontSize: 13,
  transform: "scale(1.02)",

  selectors: {
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.01)",
      border: "none",
    },
  },
});
