import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useAuthProvider } from "./context/AuthContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ProtectRoute from "./ProtectRoute";
import ProtectRoute2 from "./ProtectRoute2";

function App() {
  let { isAuthReady, user } = useAuthProvider();
  return (
    <div>
      <Navbar />
      <div className="App">
      {isAuthReady && (
        <Routes>
          <Route
            path="/"
            element={
              <ProtectRoute>
                <Home />
              </ProtectRoute>
            }
          />
          (
          <>
            <Route
              path="/login"
              element={
                <ProtectRoute2>
                  <Login />
                </ProtectRoute2>
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectRoute2>
                  <SignUp />
                </ProtectRoute2>
              }
            />
          </>
        </Routes>
      )}
      </div>
    </div>
  );
}

export default App;
