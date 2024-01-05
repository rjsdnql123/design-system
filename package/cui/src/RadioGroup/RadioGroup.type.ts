import { ChangeEvent } from "react";

export interface RadioGroupProps {
  value?: string | number;
  initialValue?: string | number;
  disabled?: boolean;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  useRow?: boolean;
  name: string;
}
// export interface RadioGroupContextValue {
//   name: string | undefined;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   value: any;
// }

export type RadioGroupContextValue = Pick<
  RadioGroupProps,
  "name" | "onChange" | "value" | "disabled"
>;
