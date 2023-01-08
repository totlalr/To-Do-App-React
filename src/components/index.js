import React from "react";
import { useState, useEffect } from "react";
import ConditionTask from "./todo/taskBase/components";
import TaskBase from "./todo/taskBase";
import Form from "./todo/components/Form";
import MianTable from "./todo/components/MianTable";

const Todo = () => {
  //States
  const [done, setDone] = useState(0);
  const [inprogress, setInProgress] = useState(0);
  const [newText, setNewText] = useState("");
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
    {
      TodoItem: "Sign up for online course",
      status: "done",
      id: 4,
    },
  ]);

  //Watcher

  useEffect(() => {
    setDone(todos.filter((item) => item.status == "done").length);
  }, [todos]);

  //Handler
  const addtoDoHandler = (event) => {
    event.preventDefault();
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
            <ConditionTask done={done} inProgress={todos.length - done} />
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <h4 className="text-center my-3 pb-3">To Do App</h4>
                  <Form
                    addtoDoHandler={addtoDoHandler}
                    newText={newText}
                    toDoSaveHandler={toDoSaveHandler}
                  />
                  <MianTable
                    todos={todos}
                    deleteHandler={deleteHandler}
                    finishdeHandler={finishdeHandler}
                  />
                </div>
                <TaskBase todos={todos} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Todo;
