import "bootstrap/dist/css/bootstrap.min.css";

function Todo({ curr, hanldeDelete, toggleComplete, editTodos }) {
  return (
    <div className="list-group-item mb-3 mt-4 d-flex justify-content-between align-items-center bg-transparent border-top rounded">
      <div onClick={() => toggleComplete(curr.id)}>
        <p className={curr.completed ? "completed" : ""}>{curr.task}</p>
      </div>
      <div className="d-flex justfiy-content-between buttons">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => editTodos(curr.id)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => hanldeDelete(curr.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
