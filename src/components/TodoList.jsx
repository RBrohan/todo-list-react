import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const todoChange = (event) => {
    setTodo(event.target.value);
  };

  const addTodo = () => {
    const todoObject = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      todoName: todo,
      completed: false,
    };
    setTodoList([...todoList, todoObject]);
    setTodo("");
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todos) => todos.id !== id));
  };

  const completeTodo = (id) => {
    setTodoList(
      todoList.map((todos) => {
        if (todos.id === id) {
          return { ...todos, completed: true };
        } else {
          return todos;
        }
      })
    );
  };

  return (
    <>
      <div className="add-todo-container">
        <header className="header">To-do List App</header>
        <div className="add-todo">
          <input
            className="todo-input"
            type="text"
            value={todo}
            onChange={todoChange}
          />
          <button className="add-todo-button" onClick={addTodo}>
            Add task
          </button>
        </div>
      </div>
      <div className="rendered-list">
        {todoList.map((todos, index) => {
          return (
            <Todo
              id={todos.id}
              todoName={todos.todoName}
              completed={todos.completed}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};
export default TodoList;
