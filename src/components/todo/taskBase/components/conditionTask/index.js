import React from "react";
import { useEffect, useState } from "react";

/*
const data ={
    all : 1,
    done : 2 ,
    InProgress : 3,
}
*/

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
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Todo item</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {dataTable.map((item) => {
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
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ConditionTaskTable;
