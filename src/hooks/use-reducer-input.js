import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "VALUE":
      return {
        value: action.value,
        isTouched: state.isTouched,
      };

    case "TOUCHED":
      return {
        value: state.value,
        isTouched: true,
      };

    case "RESET":
    default:
      return {
        value: "",
        isTouched: false,
      };
  }
};

const useReducerInput = (validation) => {
  const [inputState, dispatchInputState] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const isValidValue = validation(inputState.value);
  const isError = !isValidValue && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatchInputState({
      type: "VALUE",
      value: event.target.value,
    });
  };

  const valueBlurHandler = (event) => {
    if (event) {
      dispatchInputState({ type: "TOUCHED" });
    }
  };

  const reset = () => {
    dispatchInputState({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isError,
    valueChangeHandler,
    valueBlurHandler,
    isValid: isValidValue,
    reset,
  };
};
export default useReducerInput;
