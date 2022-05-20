import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase/config";
import reducer from "../reducers/AuthReducer";
let initialState = {
  user: {},
  isAuthReady: false,
};
let AuthContext = createContext({
  login: (email, password) => {},
  signup: (email, password, displayName) => {},
  updatePassword: (password) => {},
  logout: () => {},
});
let AuthProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, initialState);

  let login = async (email, password) => {
    try {
      let res = await signInWithEmailAndPassword(auth, email, password);
      if (!res.user) {
        throw new Error("error in somewhere we fill fix it sonn");
      }
      console.log(res.user);
      dispatch({ type: "login", payload: res.user });
    } catch (err) {
      console.log(err.message);
    }
  };
  let signup = async (email, password, displayName) => {
    try {
      let res = await createUserWithEmailAndPassword(auth, email, password);
      if (!res.user) {
        throw new Error("error in somewhere we fill fix it sonn");
      }
      await updateProfile(res.user, { displayName });
      console.log(res.user);
      dispatch({ type: "login", payload: res.user });
    } catch (err) {
      console.log(err.message);
    }
  };
  let logout = () => {
    signOut(auth).then(() => {
      dispatch({ type: "logout" });
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      dispatch({ type: "AuthState", payload: user });
    });
  }, []);
  return (
    <AuthContext.Provider value={{ login, signup, logout, ...state }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
export let useAuthProvider = () => useContext(AuthContext);
