import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import CourseDetails from "../pages/CourseDetails";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Success from "../pages/Success";
import Support from "../pages/Support";
import MyClass from "../pages/MyClass";
import Profile from "../pages/Profile";
import Class from "../pages/Class";
import Dashboard from "../pages/Admin/Dashboard";
import CreateInstructor from "../pages/Admin/CreateInstructor";
import CreateCourse from "../pages/Admin/CreateCourse";
import AdminLayout from "../pages/Admin/AdminLayout";
import Milestone from "../pages/Instructor/Milestone";
import Module from "../pages/Instructor/Module";
import Video from "../pages/Instructor/Video";
import Question from "../pages/Instructor/Question";
import InstructorLayout from "../pages/Instructor/InstructorLayout";
import HelpDesk from "../pages/HelpDesk/HelpDesk";
import HelpDeskHome from "../pages/HelpDesk/HelpDeskHome";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/course-details",
        element: <CourseDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/my-class",
        element: <MyClass />,
      },
      {
        path: "/class",
        element: <Class />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "create-instructor",
        element: <CreateInstructor />,
      },
      {
        path: "create-course",
        element: <CreateCourse />,
      },
    ],
  },
  {
    path: "/instructor",
    element: <InstructorLayout />,
    children: [
      {
        path: "milestone",
        element: <Milestone />,
      },
      {
        path: "module",
        element: <Module />,
      },
      {
        path: "video",
        element: <Video />,
      },
      {
        path: "question",
        element: <Question />,
      },
    ],
  },
  {
    path: "/help-desk",
    element: <HelpDesk />,
    children: [
      {
        path: "",
        element: <HelpDeskHome />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
