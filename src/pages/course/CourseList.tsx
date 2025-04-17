import { useNavigate } from "react-router-dom";
import { Header } from "../../components/common/header/Header";
import MountainBanner from "../../components/course/courseList/MountainBanner";
import CourseListComp from "../../components/course/courseList/CourseList";
import CourseReview from "../../components/course/courseList/CourseReview";
import { Layout } from "../../components/common/layout/Layout";
import * as Styled from "./CourseList.styled";

const CourseList = () => {
  const navigate = useNavigate();
  const handleBackBtn = () => navigate("/home");

  return (
    <Layout $margin="6.25rem 0 0 0">
      <Styled.Wrapper>
        <Header isOnboarding={true} onClick={handleBackBtn}>
          코스
        </Header>
        <MountainBanner />
        <CourseListComp title="코스" />
        <CourseReview />
      </Styled.Wrapper>
    </Layout>
  );
};

export default CourseList;
