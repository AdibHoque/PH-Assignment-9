import {createContext, useState} from "react";
import app from "../firebase.config";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {user, createUser};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
