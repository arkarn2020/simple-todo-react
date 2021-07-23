import React from 'react';

// contexts
import TodoListContextProvider from './contexts/todoList/provider';

// components
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

// styles
import "./styles.css";


export default function App() {
  return(
    <TodoListContextProvider>
      <AddTodo/>
      <TodoList/>
    </TodoListContextProvider>
  );
}

