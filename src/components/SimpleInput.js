import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // Accessing data using useRef in form
  const nameRef = useRef();

  // Accessing data using useState in form
  // variable to store entered name and state update
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);

  // Invalid form gatekeeping logic using React method
  // const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   if (name.trim() === "" && err) {
  //     return setFormIsValid(false);
  //   }

  //   return setFormIsValid(true);
  // }, [err]);

  // Invalid form gatekeeping using JS method
  let formIsValid = false;

  if (
    name.trim() !== "" &&
    email.includes("@") &&
    email.includes(".") &&
    !err
  ) {
    formIsValid = true;
  }

  // name input watcher function
  const getName = (event) => {
    if (event.target.value.trim() === "") {
      setErr(true);
    }

    setName(event.target.value);

    setErr(false);
  };

  // email input watcher function
  const getEmail = (event) => {
    if (
      event.target.value.trim() === "" ||
      (!event.target.value.includes("@") && !event.target.value.includes("."))
    ) {
      setErr(true);
    }

    setEmail(event.target.value);

    setErr(false);
  };

  // Input blur handler
  const onInputBlur = (event) => {
    if (event.target.value.trim() === "") {
      return setErr(true);
    }

    setErr(false);
  };

  // Form submission handler
  const formSubmit = (event) => {
    event.preventDefault();

    if (
      name.trim() !== "" &&
      email.includes("@") &&
      email.includes(".") &&
      !err
    ) {
      return setErr(true);
    }

    const nameValue = nameRef.current.value;

    console.log("Get name using useRef method: ", nameValue);
    console.log("Get name using useState method: ", name);
    console.log("Get email using useState method: ", email);

    // Resetting name value
    nameRef.current.value = "";
    setErr(false);
    setEmail("");
    return setName("");
  };

  const nameInputIsValid = err && name.trim() === "";
  const emailInputIsValid =
    err && email.trim() === "" && !email.includes("@") && !email.includes(".");

  const nameInputClass = nameInputIsValid
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmit}>
      <div className={nameInputClass}>
        <input
          ref={nameRef}
          type="text"
          id="name"
          placeholder="Insert your name here.."
          onChange={getName}
          onBlur={onInputBlur}
          value={name}
        />
      </div>
      <div className={emailInputClass}>
        <input
          type="email"
          id="email"
          placeholder="Insert your email here.."
          onChange={getEmail}
          onBlur={onInputBlur}
          value={email}
        />
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
      {err && name.trim() === "" && (
        <p className="error-text">Please fill up the name...</p>
      )}
      {err && email.trim() === "" && (!email.includes("@") || !email.includes(".")) && (
        <p className="error-text">Please fill up proper the email...</p>
      )}
    </form>
  );
};

export default SimpleInput;
