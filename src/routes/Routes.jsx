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
import CreateCourse from "../pages/Admin/course/CreateCourse";
import AdminLayout from "../pages/Admin/AdminLayout";
import Milestone from "../pages/Instructor/Milestone";
import Module from "../pages/Instructor/Module";
import Video from "../pages/Instructor/Video";
import Question from "../pages/Instructor/Question";
import InstructorLayout from "../pages/Instructor/InstructorLayout";
import HelpDesk from "../pages/HelpDesk/HelpDesk";
import HelpDeskHome from "../pages/HelpDesk/HelpDeskHome";
import AssignCourse from "../pages/Admin/course/AssignCourse";
import CreateInstructor from "../pages/Admin/instructor/CreateInstructor";
import CourseList from "../pages/Admin/course/CourseList";
import CourseDetailsForAdmin from "../pages/Admin/course/CourseDetailsForAdmin";
import UpdateCourse from "../pages/Admin/course/UpdateCourse";
import MilestoneList from "../pages/Admin/milestone/MilestoneList";
import CreateMilestone from "../pages/Admin/milestone/CreateMilestone";
import UpdateMilestone from "../pages/Admin/milestone/UpdateMilestone";
import MilestoneDetails from "../pages/Admin/milestone/MilestoneDetails";
import ModuleList from "../pages/Admin/module/ModuleList";
import ModuleCreate from "../pages/Admin/module/ModuleCreate";
import ModuleUpdate from "../pages/Admin/module/ModuleUpdate";
import ModuleDetails from "../pages/Admin/module/ModuleDetails";
import VideoList from "../pages/Admin/video/VideoList";
import VideoCreate from "../pages/Admin/video/VideoCreate";
import VideoUpdate from "../pages/Admin/video/VideoUpdate";
import VideoDetails from "../pages/Admin/video/VideoDetails";
import NewClass from "../pages/Class";

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
        path: "/class/:courseId",
        element: <NewClass />,
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

      //course related all routes
      {
        path: "course",
        element: <CourseList />,
      },
      {
        path: "course/:id",
        element: <CourseDetailsForAdmin />,
      },
      {
        path: "course/:id/update",
        element: <UpdateCourse />,
      },
      {
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        path: "assign-course",
        element: <AssignCourse />,
      },
      //milestone related all routes
      {
        path: "milestone",
        element: <MilestoneList />,
      },
      {
        path: "milestone-cretae",
        element: <CreateMilestone />,
      },
      {
        path: "milestone/:id/update",
        element: <UpdateMilestone />,
      },
      {
        path: "milestone/:id",
        element: <MilestoneDetails />,
      },
      //module related all routes
      {
        path: "module",
        element: <ModuleList />,
      },
      {
        path: "module-cretae",
        element: <ModuleCreate />,
      },
      {
        path: "module/:id/update",
        element: <ModuleUpdate />,
      },
      {
        path: "milestone/:id",
        element: <ModuleDetails />,
      },
      //video related all routes
      {
        path: "video",
        element: <VideoList />,
      },
      {
        path: "video-cretae",
        element: <VideoCreate />,
      },
      {
        path: "video/:id/update",
        element: <VideoUpdate />,
      },
      {
        path: "video/:id",
        element: <VideoDetails />,
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
