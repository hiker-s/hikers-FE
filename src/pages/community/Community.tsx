import * as Styled from "./Community.styled";

import { GreenBtn } from "../../components/common/button/GreenBtn";
import { Header } from "../../components/common/header/Header";
import { Layout } from "../../components/common/layout/Layout";
import CrewList from "../../components/crew/CrewList";
import ReviewList from "../../components/review/ReviewList";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/program/Carousel";

export default function Community() {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(-1);
  };

  const categories = [
    { text: "프로그램", keyword: "프로그램" },
    { text: "리뷰", keyword: "리뷰" },
    { text: "크루", keyword: "크루" },
  ];

  const handleCategoryClick = (keyword: string) => {
    const element = document.getElementById(keyword);
    if (element) {
      const headerHeight = 9 * 16;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Layout $margin="9rem 0 4.87rem 0" isFooter={true}>
        <Header onClick={handleBackBtn} isCategory={true} onCategoryClick={handleCategoryClick} categories={categories}>
          커뮤니티
        </Header>
        <Styled.Wrapper>
          <Styled.CarouselWrapper id="프로그램">
            <Carousel />
          </Styled.CarouselWrapper>
          <Styled.ListCompWrapper id="리뷰">
            <ReviewList title="리뷰" />
            <GreenBtn
              onClick={() => console.log("리뷰 작성 버튼 클릭")}
              padding="0.38rem 1rem"
              bgColor="#349989"
              color="white"
              fontSize="0.875rem"
              width="6.75rem"
            >
              리뷰 작성하기
            </GreenBtn>
          </Styled.ListCompWrapper>
          <Styled.ListCompWrapper id="크루">
            <CrewList />
            <GreenBtn
              onClick={() => console.log("모집글 작성 버튼 클릭")}
              padding="0.38rem 1rem"
              bgColor="#349989"
              color="white"
              fontSize="0.875rem"
              width="6.75rem"
            >
              모집글 작성하기
            </GreenBtn>
          </Styled.ListCompWrapper>
        </Styled.Wrapper>
      </Layout>
    </>
  );
}
