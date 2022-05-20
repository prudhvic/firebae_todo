import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
console.log(process.env.API_KEY);
const firebaseConfig = {
  apiKey: "AIzaSyACfgihry43iP5VYgvriT5_glvSq7CDGrA",
  authDomain: "todotrcker.firebaseapp.com",
  projectId: "todotrcker",
  storageBucket: "todotrcker.appspot.com",
  messagingSenderId: "894879154170",
  appId: "1:894879154170:web:2ba017c854935b867a2e43",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
