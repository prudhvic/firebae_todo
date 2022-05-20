import { useState } from "react";
import { useTodoProvider } from "../../context/TodoContext";
import styles from "./Home.module.css";
const TodoForm = () => {
  let [todo, setTodo] = useState("");

  let { AddTodo } = useTodoProvider();
  return (
    <div className={styles.form}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          if (todo) {
            AddTodo(todo);
            setTodo("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
