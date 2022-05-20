import React from "react";
import { Link } from "react-router-dom";
import { useAuthProvider } from "../context/AuthContext";
import "./Navbar.css";
const Navbar = () => {
  let { logout, user } = useAuthProvider();
  return (
    <header>
      <h1>Todo tracker</h1>
      <nav>
        <ul>
          {user && (
            <li>
              <Link to="/">Home</Link>
            </li>
          )}
          {!user && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
            </>
          )}
          <li>{user && <button onClick={logout}>Logout</button>}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
