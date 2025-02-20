import { createContext } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { app } from "../firebase/Firebase.config";
import LoaderScreen from "../others/LoadingScreen";
import { AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import useAxiosSecure from "./useAxios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const Axios = useAxiosSecure();
  const [user, setUser] = useState(null);
  const [loginChecking, setLoginChecking] = useState(true);
  const token = Cookies.get("user");

  useEffect(() => {
    const checkUserAuthentication = async () => {
      try {
        const response = await Axios.get("/auth/", {
          headers: {
            Authorization: token,
          },
        });
        if (response.status === 200 && response.data.success) {
          setUser(response.data.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking user authentication:", error);
        setUser(null);
      } finally {
        setLoginChecking(false);
      }
    };
    if (token) {
      checkUserAuthentication();
    } else {
      setLoginChecking(false);
    }
  }, [token, Axios]);

  const customSignIn = async (email, password) => {
    try {
      const response = await Axios.post("/auth/login", {
        email,
        password,
      });
      if (!response.status) {
        throw response;
      }
      console.log(response);
      return response;
    } catch (error) {
      console.error("An error occurred during sign-in:", error);
      throw error;
    }
  };

  const customSignUp = async (email, password, displayName, imageUrl) => {
    console.log(imageUrl);
    try {
      const response = await Axios.post("/users", {
        name: displayName,
        email,
        password,
        imageUrl,
      });
      if (!response.status) {
        throw response;
      }
      return response;
    } catch (error) {
      console.error("An error occurred during sign-in:", error);
      throw error;
    }
  };
  const signUp = async (email, password, displayName, imageUrl) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await customSignUp(email, password, displayName, imageUrl);
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };
  const signIn = async (email, password) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await customSignIn(email, password);
      console.log(result);

      return result;
    } catch (error) {
      throw error;
    }
  };
  const googleSignIn = () => {
    setLoginChecking(false);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignIn = () => {
    setLoginChecking(false);
    return signInWithPopup(auth, githubProvider);
  };

  const customLogout = async () => {
    Cookies.remove("user");
    setUser(null);

    return null;
  };
  const logout = () => {
    setLoginChecking(false);
    return customLogout();
  };

  const authInfo = {
    googleSignIn,
    user,
    setUser,
    githubSignIn,
    signUp,
    signIn,
    logout,
    loginChecking,
    setLoginChecking,
  };
  if (loginChecking) {
    return (
      <AnimatePresence>
        <LoaderScreen key={loginChecking} />
      </AnimatePresence>
    );
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;