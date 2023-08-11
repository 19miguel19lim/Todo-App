function Title({ todos }) {
  return (
    <header className="d-flex justify-content-between align-items-center title mb-3">
      <h1>Todo Application</h1>

      {todos.length ? (
        <small className="nums bg-primary text-light">{todos.length}</small>
      ) : (
        ""
      )}
    </header>
  );
}

export default Title;
