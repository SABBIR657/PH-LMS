import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { AuthContext } from "../hooks/AuthContextProvider";
import { useContext } from "react";
// eslint-disable-next-line react/prop-types

export default function ForInstructorRoute({ children }) {
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();
  const token = Cookies.get("user");
  const role = Cookies.get("userRole");
  if (role == "admin" || role == "instructer") {
    return children;
  }
  return (
    <Navigate to={"/admin/not-permitted"} replace state={{ path: pathname }} />
  );
}
