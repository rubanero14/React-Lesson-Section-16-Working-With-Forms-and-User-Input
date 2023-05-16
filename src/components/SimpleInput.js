import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // Accessing data using useRef in form
  const nameRef = useRef();

  // Accessing data using useState in form
  // variable to store entered name and state update
  const [name, setName] = useState("");

  // name input watcher function
  const getName = (event) => {
    return setName(event.target.value);
  };

  // Form submission handler
  const formSubmit = (event) => {
    event.preventDefault();
    const nameValue = nameRef.current.value;
    console.log("Get name using useRef method: ", nameValue);
    console.log("Get name using useState method: ", name);

    // Resetting name value
    nameRef.current.value = "";
    return setName("");
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="form-control">
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
    </form>
  );
};

export default SimpleInput;
