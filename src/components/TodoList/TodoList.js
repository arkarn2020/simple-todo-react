import React from "react";
import TodoListContext from "../../contexts/todoList/context";
import './styles.css';

const TodoList = () => {
  const { todoList, removeTodoItem, markAsCompleted } = React.useContext(
    TodoListContext
  );
  return (
    <ul>
      {todoList.map((todoItem) => (
        <li
          className={`todoItem ${todoItem.completed ? "completed" : "incomplete"}`}
          key={todoItem.id}
          onClick={() => markAsCompleted(todoItem.id)}
        >
          {todoItem.label}
          <span
            className="delete"
            onClick={() => removeTodoItem(todoItem.id)}
          >
            remove
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
