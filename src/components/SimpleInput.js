import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // Accessing data using useRef in form
  const nameRef = useRef();

  // Accessing data using useState in form
  // variable to store entered name and state update
  const [name, setName] = useState("");
  const [err, setErr] = useState(false);

  // name input watcher function
  const getName = (event) => {
    return setName(event.target.value);
  };

  // Form submission handler
  const formSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      return setErr(true);
    }

    const nameValue = nameRef.current.value;
    console.log("Get name using useRef method: ", nameValue);
    console.log("Get name using useState method: ", name);

    // Resetting name value
    nameRef.current.value = "";
    setErr(false);
    return setName("");
  };

  const nameInputClass = err ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmit}>
      <div className={nameInputClass}>
        <input
          ref={nameRef}
          type="text"
          id="name"
          placeholder="Insert your name here.."
          onChange={getName}
          value={name}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
      {err && <p className="error-text">Please fill up the name...</p>}
    </form>
  );
};

export default SimpleInput;
