import React from "react";
import { RadioGroupContextValue } from "./RadioGroup.type";
import RadioGroupContext from "./RadioGroupContext";

const useRadioGroup = (): RadioGroupContextValue => {
  return React.useContext(RadioGroupContext);
};

// function useRadioGroup(): RadioGroupContextValue | undefined {
//     return
//   }
export default useRadioGroup;
