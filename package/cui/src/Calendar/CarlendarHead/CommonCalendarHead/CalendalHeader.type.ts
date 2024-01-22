import { CommonDayjsType } from "../../../shared/types/common.type";

interface CalendalHeaderProps {
  currentMonth?: CommonDayjsType;
  prevIcon?: React.ReactNode
  nextIcon?: React.ReactNode
  prevMonth?: () => void;
  nextMonth?: () => void;
};

export type { CalendalHeaderProps };
