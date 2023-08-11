import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function EditTodo({ editTask, curr }) {
  const [value, setValue] = useState(curr.task);
  function hanldeSubmit(e) {
    e.preventDefault();

    if (value) {
      editTask(curr.id, value);
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
          type="textbox"
          placeholder="Add Task"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <div className="input-group-append">
          <Button className=" btn btn-primary" type="submit button">
            Edit Task
          </Button>
        </div>
      </div>
    </form>
  );
}

export default EditTodo;
