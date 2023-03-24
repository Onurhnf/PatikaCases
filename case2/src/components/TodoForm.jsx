import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  // Updates the state of newTodo with the new value of the input field.
  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  // Adds a new todo to the list when the enter key is pressed and the input field is not empty, and resets the value of the input field.
  const handleNewTodoKeyDown = (event) => {
    if (event.key === "Enter" && newTodo) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={newTodo}
        onChange={handleNewTodoChange}
        onKeyDown={handleNewTodoKeyDown}
      />
    </form>
  );
}

export default TodoForm;
