import React from "react";

const Todo = ({ todoName, id, completed, removeTodo, completeTodo }) => {
  return (
    <div className={`rendered-todo ${completed ? "current-completed" : ""}`}>
      <h1>{todoName}</h1>
      <button className="complete-btn" onClick={() => completeTodo(id)}>
        Complete
      </button>
      <button className="remove-btn" onClick={() => removeTodo(id)}>
        Remove
      </button>
    </div>
  );
};

export default Todo;
