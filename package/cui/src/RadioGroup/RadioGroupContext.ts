import React from "react";
import { RadioGroupContextValue } from "./RadioGroup.type";

const defaultContext = {
  name: "",
  onChange: () => {},
  value: "",
  disabled: false
};

const RadioGroupContext =
  React.createContext<RadioGroupContextValue>(defaultContext);

export default RadioGroupContext;
