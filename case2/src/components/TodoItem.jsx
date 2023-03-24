import { useState } from "react";

function TodoItem({ todo, handleToggle, handleDelete, handleEdit }) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // Saves the edited todo and sets editing to false.
  const handleSave = () => {
    handleEdit(todo.id, editText);
    setEditing(false);
  };

  // Updates the editText state with the new value from the input.
  const handleEditChange = (event) => {
    setEditText(event.target.value);
  };

  // Listens for key presses while editing a todo, saves changes on Enter key and cancels on Escape key.
  const handleEditKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSave();
    } else if (event.key === "Escape") {
      setEditText(todo.text);
      setEditing(false);
    }
  };

  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleToggle(todo.id)}
        />
        {editing ? (
          <input
            className="edit-todo"
            value={editText}
            autoFocus={true}
            onBlur={handleSave}
            onChange={handleEditChange}
            onKeyDown={handleEditKeyDown}
          />
        ) : (
          <label onClick={() => setEditing(true)}>{todo.text}</label>
        )}
        <button
          className="destroy"
          onClick={() => handleDelete(todo.id)}
        ></button>
      </div>
    </li>
  );
}

export default TodoItem;
