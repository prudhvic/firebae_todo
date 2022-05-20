import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthProvider } from "./context/AuthContext";

const ProtectRoute2 = ({ children }) => {
  let { user } = useAuthProvider();
  return !user ? children : <Navigate to="/" />;
};

export default ProtectRoute2;
