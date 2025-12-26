import React from "react";

function TodoEmpty() {
  const todos = [];

  return (
    <>
      {todos.length === 0 ? (
        <p>No Todos yet</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.task}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoEmpty;