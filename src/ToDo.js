import React from "react";
import { useState } from "react";

const Todo = () => {
  //States
  const [todos, setTodos] = useState([
    {
      TodoItem: "Buy groceries for next week",
      status: "In progress",
      id: 1,
    },

    {
      TodoItem: "Renew car insurance",
      status: "In progress",
      id: 2,
    },
    {
      TodoItem: "Sign up for online course",
      status: "In progress",
      id: 3,
    },
  ]);

  const [newText, setNewText] = useState("");

  //Handler
  const addtoDoHandler = (event) => {
    setNewText(event.target.value);
  };

  const toDoSaveHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        TodoItem: newText,
        id: new Date().getUTCMilliseconds(),
        status: "In progress",
      },
    ]);
    setNewText("");
  };

  function deleteHandler(event, filterId) {
    event.preventDefault();
    setTodos(todos.filter((item) => item.id !== filterId));
  }

  function finishdeHandler(event, finishedId) {
    event.preventDefault();
    const newTodoNode = todos.map((item) => {
      if (item.id === finishedId) {
        return {
          ...item,
          status: "done",
        };
      }

      return item;
    });

    setTodos(newTodoNode);
  }

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <h4 className="text-center my-3 pb-3">To Do App</h4>

                  <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                    <div className="col-12">
                      <div className="form-outline">
                        <input
                          onChange={addtoDoHandler}
                          value={newText}
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
                          onClick={(event) => toDoSaveHandler(event)}
                          disabled={newText.length >= 5 ? false : true}
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

                  <table className="table mb-4">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Todo item</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {todos.map((item) => {
                        return (
                          <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td
                              className={
                                item.status == "In progress"
                                  ? ""
                                  : "text-decoration-line-through"
                              }
                            >
                              {item.TodoItem}
                            </td>
                            <td>{item.id}</td>
                            <td>
                              <button
                                type="submit"
                                className="btn btn-danger"
                                onClick={(event) =>
                                  deleteHandler(event, item.id)
                                }
                              >
                                Delete
                              </button>
                              <button
                                type="submit"
                                className={
                                  item.status == "In progress"
                                    ? `btn btn-secondary ms-1`
                                    : `btn btn-success ms-1`
                                }
                                onClick={(event) =>
                                  finishdeHandler(event, item.id)
                                }
                              >
                                Finished
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Todo;
