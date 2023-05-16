const SimpleInput = (props) => {
  return (
    <form>
      <div className="form-control">
        <input type="text" id="name" placeholder="Insert your name here.." />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
