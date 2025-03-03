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
import NotPermitted from "../components/auth/NotPermitted";
import ForInstructorRoute from "./ForInstructorRoute";
import ForAdminRoute from "./ForAdminRoute";
import PrivateRoute from "./PrivateRoute";
import QuestionList from "../pages/Admin/Question/QuestionList";
import QuestionCreate from "../pages/Admin/Question/QuestionCreate";
import AddMcq from "../pages/Admin/Question/AddMcq";
import AllProjects from "../components/Header/AllProjects";

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
        path: "/all-project",
        element: <AllProjects />,
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
    element: (
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <ForInstructorRoute>
            <Dashboard />
          </ForInstructorRoute>
        ),
      },

      {
        path: "create-instructor",
        element: (
          <ForAdminRoute>
            <CreateInstructor />
          </ForAdminRoute>
        ),
      },

      //course related all routes
      {
        path: "course",
        element: (
          <ForInstructorRoute>
            <CourseList />
          </ForInstructorRoute>
        ),
      },
      {
        path: "course/:id",
        element: (
          <ForInstructorRoute>
            <CourseDetailsForAdmin />
          </ForInstructorRoute>
        ),
      },
      {
        path: "course/:id/update",
        element: (
          <ForInstructorRoute>
            <UpdateCourse />
          </ForInstructorRoute>
        ),
      },
      {
        path: "course-create",
        element: (
          <ForAdminRoute>
            <CreateCourse />
          </ForAdminRoute>
        ),
      },
      {
        path: "assign-course",
        element: (
          <ForAdminRoute>
            <AssignCourse />
          </ForAdminRoute>
        ),
      },
      //milestone related all routes
      {
        path: "milestone",
        element: (
          <ForInstructorRoute>
            <MilestoneList />
          </ForInstructorRoute>
        ),
      },
      {
        path: "milestone-create",
        element: (
          <ForInstructorRoute>
            <CreateMilestone />
          </ForInstructorRoute>
        ),
      },
      {
        path: "milestone/:id/update",
        element: (
          <ForInstructorRoute>
            <UpdateMilestone />
          </ForInstructorRoute>
        ),
      },
      {
        path: "milestone/:id",
        element: (
          <ForInstructorRoute>
            <MilestoneDetails />
          </ForInstructorRoute>
        ),
      },
      //module related all routes
      {
        path: "module",
        element: (
          <ForInstructorRoute>
            <ModuleList />
          </ForInstructorRoute>
        ),
      },
      {
        path: "module-create",
        element: (
          <ForInstructorRoute>
            <ModuleCreate />
          </ForInstructorRoute>
        ),
      },
      {
        path: "module/:id/update",
        element: (
          <ForInstructorRoute>
            <ModuleUpdate />
          </ForInstructorRoute>
        ),
      },
      {
        path: "module/:id",
        element: (
          <ForInstructorRoute>
            <ModuleDetails />
          </ForInstructorRoute>
        ),
      },
      //video related all routes
      {
        path: "video",
        element: (
          <ForInstructorRoute>
            <VideoList />
          </ForInstructorRoute>
        ),
      },
      {
        path: "video-create",
        element: (
          <ForInstructorRoute>
            <VideoCreate />
          </ForInstructorRoute>
        ),
      },
      {
        path: "video/:id/update",
        element: (
          <ForInstructorRoute>
            <VideoUpdate />
          </ForInstructorRoute>
        ),
      },
      {
        path: "video/:id",
        element: (
          <ForInstructorRoute>
            <VideoDetails />
          </ForInstructorRoute>
        ),
      },
      //question related all routes
      {
        path: "question",
        element: (
          <ForInstructorRoute>
            <QuestionList />
          </ForInstructorRoute>
        ),
      },
      {
        path: "question-create",
        element: (
          <ForInstructorRoute>
            <QuestionCreate />
          </ForInstructorRoute>
        ),
      },
      {
        path: "add-mcq",
        element: (
          <ForInstructorRoute>
            <AddMcq />
          </ForInstructorRoute>
        ),
      },
      {
        path: "not-permitted",
        element: <NotPermitted />,
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
