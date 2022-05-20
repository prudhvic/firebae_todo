export default function reducer(state, action) {
  if (action.type === "login") {
    return { ...state, user: action.payload };
  }
  if (action.type === "logout") {
    return { ...state, user: null };
  }
  if (action.type === "AuthState") {
    return { ...state, isAuthReady: true, user: action.payload };
  }
  return { ...state };
}
