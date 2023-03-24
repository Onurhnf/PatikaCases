import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import FilterButtons from "./FilterButtons";

function TodoList() {
  // Define state for the list of todos and the filter
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn JavaScript", completed: true },
    { id: 2, text: "Learn React", completed: false },
    { id: 3, text: "Have a life!", completed: false },
  ]);
  const [filter, setFilter] = useState("all");

  // Function to add a new todo to the list
  const handleNewTodo = (newTodo) => {
    // todos.length - 1 to find last todo and then +1 to give its id
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodoItem = { id: newId, text: newTodo, completed: false };
    setTodos([...todos, newTodoItem]);
  };

  // Function to toggle the completed status of a todo
  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to delete a todo from the list
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Function to clear all completed todos from the list
  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const handleEdit = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to toggle all todos
  const handleToggleAll = () => {
    const allToggled = todos.every((todo) => todo.completed);

    setTodos(
      todos.map((todo) => ({
        ...todo,
        completed: !allToggled,
      }))
    );
  };

  // Function to set the filter for the list of todos
  const handleFilter = (filter) => {
    setFilter(filter);
  };

  // Filter the todos based on the current filter
  const filteredTodos =
    filter === "completed"
      ? todos.filter((todo) => todo.completed)
      : filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : todos;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoForm addTodo={handleNewTodo} />
      </header>

      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={todos.every((todo) => todo.completed)}
          onChange={handleToggleAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            // Render each todo item with the appropriate props
            <TodoItem
              key={todo.id}
              todo={todo}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </ul>
      </section>

      {todos.length !== 0 && (
        //The footer will not be rendered if there are no todos
        <footer className="footer">
          <span className="todo-count">
            <strong>{todos.filter((todo) => !todo.completed).length}</strong>{" "}
            {todos.filter((todo) => !todo.completed).length === 1
              ? "item left"
              : "items left"}
          </span>

          <FilterButtons filter={filter} handleFilter={handleFilter} />
          {/*Hide "Clear completed" text if there is no any complated todo */}
          {todos.some((todo) => todo.completed) && (
            <button className="clear-completed" onClick={handleClearCompleted}>
              Clear completed
            </button>
          )}
        </footer>
      )}
    </section>
  );
}

export default TodoList;
