import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthProvider } from "../context/AuthContext";
import { db } from "../firebase/config";

const useFireStore = (c) => {
  let [docs, setDocs] = useState([]);
  let { user } = useAuthProvider();
  console.log(user);
  useEffect(() => {
    let ref = collection(db, c);
    if (user && user.uid) {
      ref = query(ref, where("uid", "==", user?.uid));
    }
    let unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocs(results);
    });
    return () => unsub();
  }, [c, user]);
  async function deleteTodo(id) {
    await deleteDoc(doc(db, "Todos", id));
  }
  async function AddTodo(todo) {
    await addDoc(collection(db, "Todos"), {
      todo,
      completed: false,
      createdAt: serverTimestamp(),
      uid: user.uid,
    });
  }
  async function updateTodo(id, todo) {
    await updateDoc(doc(db, "Todos", id), { todo: todo });
  }
  async function ToggleComplete(id, todo) {
    console.log("Hi");
    await updateDoc(doc(db, "Todos", id), { completed: !todo.completed });
  }
  return { docs, deleteTodo, AddTodo, updateTodo, ToggleComplete };
};

export default useFireStore;
