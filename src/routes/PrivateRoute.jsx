import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContextProvider";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  const { pathname } = useLocation();
  const { user } = useContext(AuthContext);

  if (user.email) {
    return children;
  }
  return <Navigate to={"/login"} replace state={{ path: pathname }} />;
}
