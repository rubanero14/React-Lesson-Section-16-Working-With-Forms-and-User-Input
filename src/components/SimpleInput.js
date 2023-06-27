import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    isError: nameInputIsError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    isError: emailInputIsError,
    valueChangeHandler: emailNameChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput((value) => value.includes("@") && value.includes("."));
  
  const nameInputClass = !enteredNameIsValid
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = !enteredEmailIsValid
    ? "form-control invalid"
    : "form-control";
  
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmit = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) return;

    console.log(formIsValid);

    console.log(enteredName, enteredEmail);

    resetNameInput();
    resetEmailInput(); 
  };

  return (
    <form onSubmit={formSubmit}>
      <div className={nameInputClass}>
        <input
          type="text"
          id="name"
          placeholder="Insert your name here.."
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      <div className={emailInputClass}>
        <input
          type="email"
          id="email"
          placeholder="Insert your email here.."
          onChange={emailNameChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
      {nameInputIsError && (
        <p className="error-text">Please fill up the name...</p>
      )}
      {emailInputIsError && (
        <p className="error-text">Please fill up proper the email...</p>
      )}
    </form>
  );
};

export default SimpleInput;
