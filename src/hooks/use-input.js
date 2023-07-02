import { useState } from "react";

const useInput = (validation) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValidValue = validation(enteredValue);
  const isError = !isValidValue && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    if (event) {
      setIsTouched(true);
    }
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isError,
    valueChangeHandler,
    valueBlurHandler,
    isValid: isValidValue,
    reset
  };
};
export default useInput;
