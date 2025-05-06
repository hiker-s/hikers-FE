import { useNavigate } from "react-router-dom";
import { Header } from "../../components/common/header/Header";
import styled from "styled-components";

import SketchMap from "../../components/course/courseInfo/SketchMap";
import CourseReview from "../../components/course/courseInfo/CourseReview";
import { Layout } from "../../components/common/layout/Layout";
import { useEffect, useMemo, useState } from "react";
import DetailCourseList from "../../components/course/courseInfo/DetailCourseList";

const CourseInfo = () => {
  const navigate = useNavigate();
  const handleBackBtn = () => navigate(-1);
  const [activeCategory, setActiveCategory] = useState("약도");

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
    <Layout $margin="17rem 0 3rem 0" $isFooter={true}>
      <Wrapper>
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
        <ListCompWrapper id="약도">
          <SketchMap />
        </ListCompWrapper>
        <ListCompWrapper id="상세 코스">
          <DetailCourseList />
        </ListCompWrapper>
        <ListCompWrapper id="리뷰">
          <CourseReview />
        </ListCompWrapper>
      </Wrapper>
    </Layout>
  );
};

export default CourseInfo;

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
`;

const ListCompWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
