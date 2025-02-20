import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "./Firebase.config";

const auth = getAuth(app);

export const authHelper = () => {
  const signUp = ({ password, email }) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  const signIn = ({ password, email }) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return {
    signUp,
    logout,
    signIn,
  };
};
