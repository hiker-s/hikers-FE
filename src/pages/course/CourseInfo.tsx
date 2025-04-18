import { useNavigate } from "react-router-dom";
import { Header } from "../../components/common/header/Header";
import * as Styled from "./CourseInfo.styled";

import SketchMap from "../../components/course/courseInfo/SketchMap";
import CourseReview from "../../components/course/courseInfo/CourseReview";
import { Layout } from "../../components/common/layout/Layout";
import { useEffect, useMemo, useState } from "react";
import DetailCourseList from "../../components/course/courseInfo/DetailCourseList";

const CourseInfo = () => {
  const navigate = useNavigate();
  const handleBackBtn = () => navigate("/courseList");
  const [activeCategory, setActiveCategory] = useState("약도");

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

  const categories = useMemo(
    () => [
      { text: "약도", keyword: "약도" },
      { text: "상세 코스", keyword: "상세 코스" },
      { text: "리뷰", keyword: "리뷰" },
    ],
    []
  );

  const handleCategoryClick = (keyword: string) => {
    const element = document.getElementById(keyword);
    if (element) {
      const headerHeight = 17 * 16;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 17.5 * 16;
      const scrollPosition = window.scrollY + headerHeight;
      for (const category of categories) {
        const element = document.getElementById(category.keyword);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveCategory(category.keyword);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  return (
    <Layout $margin="17rem 0 3rem 0" isFooter={true}>
      <Styled.Wrapper>
        <Header
          onClick={handleBackBtn}
          isCourse={true}
          isCategory={true}
          onCategoryClick={handleCategoryClick}
          categories={categories}
          activeCategory={activeCategory}
        >
          코스
        </Header>
        <Styled.ListCompWrapper id="약도">
          <SketchMap sections={sections} />
        </Styled.ListCompWrapper>
        <Styled.ListCompWrapper id="상세 코스">
          <DetailCourseList />
        </Styled.ListCompWrapper>
        <Styled.ListCompWrapper id="리뷰">
          <CourseReview />
        </Styled.ListCompWrapper>
      </Styled.Wrapper>
    </Layout>
  );
};

export default CourseInfo;
