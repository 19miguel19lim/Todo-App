import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import EditTodo from "./EditTodo";
import Title from "./Title";

uuidv4();
function TodoLayout() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  function addTodo(task) {
    setTodos([
      ...todos,
      { task: task, completed: false, isEditing: false, id: uuidv4() },
    ]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((curr) =>
        curr.id === id ? { ...curr, completed: !curr.completed } : curr
      )
    );
  }

  function hanldeDelete(id) {
    setTodos(todos.filter((curr) => curr.id !== id));
  }

  function editTodos(id) {
    setTodos(
      todos.map((curr) =>
        curr.id === id ? { ...curr, isEditing: !curr.isEditing } : curr
      )
    );
  }

  function editTask(id, task) {
    setTodos(
      todos.map((curr) =>
        curr.id === id
          ? { ...curr, task: task, isEditing: !curr.isEditing }
          : curr
      )
    );
  }

  return (
    <div className="container mt-5">
      <Title todos={todos} />
      <div className="list-group">
        <TodoForm
          className="todoList"
          addTodo={addTodo}
          value={value}
          setValue={setValue}
        />

        {todos.map((curr, index) =>
          curr.isEditing ? (
            <EditTodo
              editTask={editTask}
              curr={curr}
              value={value}
              setValue={setValue}
              key={index}
            />
          ) : (
            <Todo
              curr={curr}
              key={index}
              hanldeDelete={hanldeDelete}
              toggleComplete={toggleComplete}
              editTodos={editTodos}
            />
          )
        )}
      </div>
      <Footer todos={todos} />
    </div>
  );
}

export default TodoLayout;
