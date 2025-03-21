import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContextProvider";
import { useContext } from "react";
import Cookies from "js-cookie";
// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  const { pathname } = useLocation();
  const { user } = useContext(AuthContext);
  const token = Cookies.get("user");
  if (token) {
    return children;
  }
  return <Navigate to={"/login"} replace state={{ path: pathname }} />;
}
