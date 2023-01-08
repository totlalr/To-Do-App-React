import React from "react";

const Form = (props) => {
  return (
    <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
      <div className="col-12">
        <div className="form-outline">
          <input
            onChange={props.addtoDoHandler}
            value={props.newText}
            type="text"
            id="form1"
            className="form-control"
          />
          <label className="form-label" htmlFor="form1">
            Enter a task here
          </label>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-between">
        <div>
          <button
            className="btn btn-primary"
            onClick={(event) => props.toDoSaveHandler(event)}
            disabled={props.newText.length >= 5 ? false : true}
          >
            Save
          </button>
        </div>

        <div>
          <button type="submit" className="btn btn-warning">
            Get tasks
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
