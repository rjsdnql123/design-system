export interface RadioGroupContextValue {
  name: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  value: any;
}

