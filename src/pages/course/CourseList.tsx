import { useNavigate } from "react-router-dom";
import { Header } from "../../components/common/header/Header";
import MountainBanner from "../../components/course/courseList/MountainBanner";
import CourseListComp from "../../components/course/courseList/CourseListComp";
import MountainReview from "../../components/course/courseList/MountainReview";
import { Layout } from "../../components/common/layout/Layout";
import styled from "styled-components";

const CourseList = () => {
  const navigate = useNavigate();
  const handleBackBtn = () => navigate("/home");

  return (
    <Layout $margin="6.25rem 0 1.87rem 0" $isFooter={true}>
      <Wrapper>
        <Header onClick={handleBackBtn}>코스</Header>
        <MountainBanner />
        <CourseListComp />
        <MountainReview />
      </Wrapper>
    </Layout>
  );
};

export default CourseList;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
