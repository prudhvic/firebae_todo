import React, { useEffect, useState } from "react";
import { useAuthProvider } from "../../context/AuthContext";
import { useTodoProvider } from "../../context/TodoContext";
import TodoForm from "./TodoForm";
import styles from "./Home.module.css";
const Home = () => {
  let { user } = useAuthProvider();
  let { docs, deleteTodo, updateTodo, ToggleComplete } = useTodoProvider();
  let [editTodo, setEditTodo] = useState("");
  let [editBtnActive, setEditBtnActive] = useState("");
  let EditTodo = (e, id) => {
    e.preventDefault();
    updateTodo(id, editTodo);
    setEditBtnActive(null);
  };
  return (
    <div className={styles.container}>
      <TodoForm />
      <div className={styles.todos}>
        {!docs && <div>Loading...</div>}
        {docs &&
          docs.map((todo) => (
            <div key={todo.id}>
              <div className={styles.flex}>
                {editBtnActive === todo.id ? (
                  <div>
                    <form
                      className={styles.form_s}
                      onSubmit={(e) => EditTodo(e, todo.id)}
                    >
                      <input
                        type="text"
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                      />
                    </form>
                  </div>
                ) : (
                  <p onClick={() => ToggleComplete(todo.id, todo)}>
                    {todo.todo}
                  </p>
                )}
                <p>
                  {new Date(
                    todo?.createdAt?.seconds * 1000
                  ).toLocaleTimeString()}
                </p>
              </div>

              <div className={styles.btns}>
                <button onClick={() => deleteTodo(todo.id)}>delete</button>
                <button
                  onClick={() => {
                    setEditBtnActive(todo.id);
                    setEditTodo(todo.todo);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
