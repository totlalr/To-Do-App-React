import React from "react";

//Styles
const trFontSize = {
  fontSize: "0.8rem",
};

const MianTable = (props) => {
  return (
    <table className="table mb-4">
      <thead>
        <tr className="text-center">
          <th scope="col">No.</th>
          <th scope="col">Todo item</th>
          <th scope="col">Description </th>
          <th scope="col">Date</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((item) => {
          return (
            <tr className="text-center" key={item.id} style={trFontSize}>
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
              <td>
                <button
                  type="submit"
                  className="btn btn-danger btn-sm"
                  onClick={(event) => props.deleteHandler(event, item.id)}
                >
                  Delete
                </button>
                <button
                  type="submit"
                  className={
                    item.status == "In progress"
                      ? `btn btn-secondary ms-1 btn-sm`
                      : `btn btn-success ms-1 btn-sm`
                  }
                  onClick={(event) => props.finishdeHandler(event, item.id)}
                >
                  Finished
                </button>

                <button
                  type="submit"
                  className="btn btn-warning  ms-1 btn-sm "
                  onClick={(event) => props.handleEditClick(item)}
                >
                  Edit
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
