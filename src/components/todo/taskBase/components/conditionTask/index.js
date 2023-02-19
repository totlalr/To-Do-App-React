import React from "react";

//Hooks
import { useEffect, useState } from "react";

const tableStyle = {
  fontSize: "0.8rem",
};

const ConditionTaskTable = (props) => {
  //States
  const [dataTable, setDataTable] = useState(props.todos);

  //Watcher
  useEffect(() => {
    if (props.value == "2") {
      setDataTable(props.todos.filter((item) => item.status == "done"));
    } else if (props.value == "3") {
      setDataTable(props.todos.filter((item) => item.status == "In progress"));
    } else {
      setDataTable(props.todos);
    }
  }, [props.todos]);

  return (
    <table className="table mb-4">
      <thead>
        <tr className="text-center">
          <th scope="col">No.</th>
          <th scope="col">Todo item</th>
          <th scope="col">Description</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {dataTable.map((item) => {
          return (
            <tr key={item.id} className="text-center" style={tableStyle}>
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
              <td>{item.description}</td>
              <td>{item.time}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ConditionTaskTable;
