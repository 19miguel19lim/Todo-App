import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function TodoForm({ addTodo, value, setValue }) {
  function hanldeSubmit(e) {
    e.preventDefault();

    if (value) {
      addTodo(value);
      setValue("");
    } else {
      return;
    }
  }

  return (
    <form onSubmit={hanldeSubmit}>
      <div className="input-group mb-3">
        <input
          className="form-control bg-transparent"
          type="text"
          placeholder="Add Task"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <div className="input-group-append">
          <Button className=" btn btn-success" type="submit">
            Add Task
          </Button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
