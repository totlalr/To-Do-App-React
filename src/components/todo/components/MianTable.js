import React from "react";

const MianTable = (props) => {
  return (
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
        {props.todos.map((item) => {
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
                  onClick={(event) => props.deleteHandler(event, item.id)}
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
                  onClick={(event) => props.finishdeHandler(event, item.id)}
                >
                  Finished
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MianTable;
