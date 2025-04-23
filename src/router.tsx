import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Onboarding from "./pages/onboarding/Onboarding";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Success from "./pages/signup/Success";
import Community from "./pages/community/Community";
import CourseList from "./pages/course/CourseList";
import CourseInfo from "./pages/course/CourseInfo";
import Rank from "./pages/rank/Rank";
import Program from "./pages/community/program/Program";
import Mypage from "./pages/mypage/Mypage";
import CrewWrite from "./pages/community/crew/CrewWrite";
import CrewRead from "./pages/community/crew/CrewRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Onboarding /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "signup/success", element: <Success /> },
      { path: "/courseList", element: <CourseList /> },
      { path: "/courseInfo", element: <CourseInfo /> },
      { path: "community", element: <Community /> },
      { path: "community/program/:programId", element: <Program /> },
      { path: "community/crew/write", element: <CrewWrite /> },
      { path: "community/crew/:crew_id", element: <CrewRead /> },
      { path: "/rank", element: <Rank /> },
      { path: "/mypage/:nickname", element: <Mypage /> },
    ],
  },
]);
export default router;
