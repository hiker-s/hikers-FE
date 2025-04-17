import { useNavigate } from "react-router-dom";
import { Header } from "../../components/common/header/Header";
import * as Styled from "./CourseInfo.styled";
import CourseData from "../../components/course/courseInfo/CourseData";
import SketchMap from "../../components/course/courseInfo/SketchMap";
import CourseReview from "../../components/course/courseInfo/CourseReview";
import { Layout } from "../../components/common/layout/Layout";

const CourseInfo = () => {
  const navigate = useNavigate();
  const handleBackBtn = () => navigate("/courseList");

  const sections = [
    {
      path: [
        { lat: 37.5821, lng: 126.9851 },
        { lat: 37.5827, lng: 126.986 },
      ],
      color: "#8e44ad",
    },
    {
      path: [
        { lat: 37.5827, lng: 126.986 },
        { lat: 37.5835, lng: 126.9875 },
      ],
      color: "#27ae60",
    },
  ];

  return (
    <Layout $margin="6.25rem 0 0 0">
      <Styled.Wrapper>
        <Header isOnboarding={true} onClick={handleBackBtn}>
          코스
        </Header>
        <CourseData />
        <SketchMap sections={sections} />
        <CourseReview />
      </Styled.Wrapper>
    </Layout>
  );
};

export default CourseInfo;
