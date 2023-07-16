import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    isError: firstNameInputIsError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    isError: lastNameInputIsError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    isError: emailInputIsError,
    valueChangeHandler: emailNameChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@") && value.includes("."));

  const inputClass = (bool) => {
    return bool ? "form-control invalid" : "form-control";
  };

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(enteredFirstName, enteredLastName, enteredEmail);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="control-group">
        <div className={inputClass(firstNameInputIsError)}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Insert your first name here.."
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputIsError && (
            <p className="error-text">Please dont leave first name empty!</p>
          )}
        </div>
        <div className={inputClass(lastNameInputIsError)}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Insert your last name here.."
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputIsError && (
            <p className="error-text">Please dont leave last name empty!</p>
          )}
        </div>
      </div>
      <div className={inputClass(emailInputIsError)}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          placeholder="Insert your email here.."
          onChange={emailNameChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsError && (
          <p className="error-text">Please dont leave email empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
