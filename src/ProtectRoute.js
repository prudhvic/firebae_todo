import React from "react";
import { useAuthProvider } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
const ProtectRoute = ({ children }) => {
  let { user } = useAuthProvider();
  return user ? children : <Navigate to="/login" />;
};

export default ProtectRoute;
