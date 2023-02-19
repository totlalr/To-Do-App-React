import React from "react";

//Hooks
import { useState, useEffect } from "react";

//Components
import ConditionTask from "./todo/taskBase/components";
import TaskBase from "./todo/taskBase";
import Form from "./todo/components/Form";
import MianTable from "./todo/components/MianTable";

//Utilities
import currentDateAndTiem from "../utilities/current-date-time.util";

const Todo = () => {
  //States
  const [done, setDone] = useState(0);
  const [inprogress, setInProgress] = useState(0);
  const [newText, setNewText] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  //Watchers

  useEffect(() => {
    setDone(todos.filter((item) => item.status == "done").length);
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //Handler
  const addtoDoHandler = (event) => {
    event.preventDefault();
    setNewText(event.target.value);
  };

  const addDescriptionHandler = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  //Save To Do

  const toDoSaveHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        TodoItem: newText,
        description: description,
        id: new Date().getUTCMilliseconds(),
        status: "In progress",
        time: currentDateAndTiem(),
      },
    ]);
    setNewText("");
    setDescription("");
  };

  //Delete To DO

  function deleteHandler(event, filterId) {
    event.preventDefault();
    setTodos(todos.filter((item) => item.id !== filterId));
  }

  // Finish Handler

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

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, TodoItem: e.target.value });
  }

  function handleEditInputDescriptionChange(e) {
    setCurrentTodo({ ...currentTodo, description: e.target.value });
  }

  //Edit Handler

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  //Update Handler

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  // Form Submit Handler
  function handleEditFormSubmit(e) {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <ConditionTask done={done} inProgress={todos.length - done} />
            <div className="col col-lg-9 col-xl-7" style={{ width: "70%" }}>
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <h4 className="text-center my-3 pb-3">To Do App</h4>
                  <Form
                    addtoDoHandler={addtoDoHandler}
                    newText={newText}
                    description={description}
                    toDoSaveHandler={toDoSaveHandler}
                    addDescriptionHandler={addDescriptionHandler}
                    isEditing={isEditing}
                    currentTodo={currentTodo}
                    handleEditInputChange={handleEditInputChange}
                    setIsEditing={setIsEditing}
                    handleEditFormSubmit={handleEditFormSubmit}
                    handleEditInputDescriptionChange={
                      handleEditInputDescriptionChange
                    }
                  />
                  <MianTable
                    todos={todos}
                    deleteHandler={deleteHandler}
                    finishdeHandler={finishdeHandler}
                    handleEditClick={handleEditClick}
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
