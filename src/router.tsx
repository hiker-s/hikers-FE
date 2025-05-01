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
import ReviewRead from "./pages/community/review/ReviewRead";
import Home from "./pages/home/Home";
import CrewEdit from "./pages/community/crew/CrewEdit";
import Loading from "./pages/loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Onboarding /> },
      { path: "home", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "signup/success", element: <Success /> },
      { path: "/courseList/:mnt_id", element: <CourseList /> },
      { path: "/courseInfo/:course_id", element: <CourseInfo /> },
      { path: "community", element: <Community /> },
      { path: "community/program/:programId", element: <Program /> },
      { path: "community/crew/write", element: <CrewWrite /> },
      { path: "community/crew/:crew_id/edit", element: <CrewEdit /> },
      { path: "community/crew/:crew_id", element: <CrewRead /> },
      { path: "community/review/:review_id", element: <ReviewRead /> },
      { path: "/rank", element: <Rank /> },
      { path: "/mypage", element: <Mypage /> },
      { path: "/loading", element: <Loading /> },
    ],
  },
]);
export default router;
