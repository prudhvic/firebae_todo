import { createContext, useContext, useState } from "react";
import useFireStore from "../hooks/useFireStore";
let TodoContext = createContext();
export default function TodoProvider({ children }) {
  let { docs, deleteTodo, AddTodo, updateTodo, ToggleComplete } =
    useFireStore("Todos");
  console.log(docs);

  return (
    <TodoContext.Provider
      value={{ docs, updateTodo, ToggleComplete, deleteTodo, AddTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
export let useTodoProvider = () => useContext(TodoContext);
