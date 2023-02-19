import React from "react";

const Form = (props) => {
  return (
    <>
      {props.isEditing ? (
        <form
          onSubmit={props.handleEditFormSubmit}
          className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
        >
          <div className="col-12">
            <div className="form-outline">
              <input
                onChange={props.handleEditInputChange}
                value={props.currentTodo.TodoItem}
                placeholder="Edit todo"
                type="text"
                name="editTodo"
                className="form-control"
              />

              <label className="form-label" htmlFor="form1">
                Enter a edit todo here
              </label>
            </div>

            <div className="form-outline">
              <input
                onChange={props.handleEditInputDescriptionChange}
                value={props.currentTodo.description}
                placeholder="Edit description"
                type="text"
                name="editDescription"
                className="form-control"
              />

              <label className="form-label" htmlFor="form1">
                Enter a description todo here
              </label>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <button className="btn btn-warning">update</button>
              <button
                className="btn btn-danger"
                onClick={(event) => {
                  event.preventDefault();
                  props.setIsEditing(false);
                }}
              >
                cancel
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
          <div className="col-12">
            <div className="form-outline">
              <input
                onChange={props.addtoDoHandler}
                value={props.newText}
                type="text"
                name="taskTitle"
                className="form-control"
              />

              <label className="form-label" htmlFor="form1">
                Enter a task here
              </label>
            </div>
            <div className="form-outline">
              <input
                onChange={props.addDescriptionHandler}
                value={props.description}
                type="text"
                name="description"
                className="form-control"
              />
              <label className="form-label" htmlFor="form1">
                Enter a description here
              </label>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-between">
            <div>
              <button
                className="btn btn-primary  "
                onClick={(event) => props.toDoSaveHandler(event)}
                disabled={props.newText.length >= 5 ? false : true}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
