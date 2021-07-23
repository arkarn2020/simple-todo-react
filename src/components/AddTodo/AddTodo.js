import React from "react";
import TodoListContext from "../../contexts/todoList/context";

const AddTodo = () => {
  const [inputValue, setInputValue] = React.useState("");
  const { addTodoItem } = React.useContext(TodoListContext);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodoItem(inputValue);
          setInputValue("");
        }}
      >
        <input
          autoFocus
          type="text"
          value={inputValue}
          placeholder={"add todo item"}
          onChange={(e) => setInputValue(e.target.value)}
        />&nbsp;
        <button type="submit">Add</button>
      </form>
      <hr/>
    </>
  );
};

export default AddTodo;
