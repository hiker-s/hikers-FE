import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Onboarding from "./pages/onboarding/Onboarding";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Success from "./pages/signup/Success";
import Community from "./pages/community/Community";
import CourseList from "./pages/course/CourseList";
import CourseInfo from "./pages/course/CourseInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Onboarding /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "signup/success", element: <Success /> },
      { path: "community", element: <Community /> },
      {
        path: "/",
        element: <Onboarding />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/courseList", element: <CourseList /> },
      {
        path: "/courseInfo",
        element: <CourseInfo />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <Onboarding />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/courseList", element: <CourseList /> },
      {
        path: "/courseInfo",
        element: <CourseInfo />,
      },
      { path: "/courseList", element: <CourseList /> },
      {
        path: "/courseInfo",
        element: <CourseInfo />,
      },
    ],
  },
]);
export default router;
