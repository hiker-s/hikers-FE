import * as Styled from "./Community.styled";
import { Header } from "../../components/common/header/Header";
import { Layout } from "../../components/common/layout/Layout";
import { useNavigate } from "react-router-dom";
import ProgramCarousel from "../../components/community/ProgramCarousel";
import { useEffect, useState, useMemo } from "react";
import CommunityReview from "../../components/community/CommunityReview";
import CommunityCrew from "../../components/community/CommunityCrew";

export default function Community() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("프로그램");

  const handleBackBtn = () => {
    navigate(-1);
  };

  const categories = useMemo(
    () => [
      { text: "프로그램", keyword: "프로그램" },
      { text: "리뷰", keyword: "리뷰" },
      { text: "크루", keyword: "크루" },
    ],
    []
  );

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

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 9.5 * 16;
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
    <>
      <Layout $margin="10rem 0 4.87rem 0" isFooter={true}>
        <Header
          onClick={handleBackBtn}
          isCategory={true}
          onCategoryClick={handleCategoryClick}
          categories={categories}
          activeCategory={activeCategory}
        >
          커뮤니티
        </Header>
        <Styled.Wrapper>
          <div id="프로그램">
            <ProgramCarousel />
          </div>
          <div id="리뷰">
            <CommunityReview />
          </div>
          <div id="크루">
            <CommunityCrew />
          </div>
        </Styled.Wrapper>
      </Layout>
    </>
  );
}
