import { ReactNode } from "react";
import * as Styled from "./styled";
import backBtn from "../../../assets/icons/backBtn.svg";
import React from "react";

type Category = {
  text: string;
  keyword: string;
};

type HeaderProps = {
  children?: ReactNode;
  onClick?: () => void;
  isOnboarding?: boolean;
  isCategory?: boolean;
  onCategoryClick?: (keyword: string) => void;
  categories?: Category[];
  activeCategory?: string;
};

export const Header = ({
  onClick,
  children,
  isOnboarding = false,
  isCategory = false,
  onCategoryClick,
  categories = [
    { text: "약도", keyword: "약도" },
    { text: "상세 코스", keyword: "상세 코스" },
    { text: "리뷰", keyword: "리뷰" },
  ],
  activeCategory,
}: HeaderProps) => {
  const handleCategoryClick = (keyword: string) => {
    onCategoryClick?.(keyword);
  };

  return (
    <Styled.Container>
      <Styled.HeaderBox $isOnboarding={isOnboarding}>
        <Styled.BackBtnWrapper onClick={onClick}>
          <img src={backBtn} />
        </Styled.BackBtnWrapper>
        <Styled.TextWrapper>
          <Styled.HeaderText>{children}</Styled.HeaderText>
        </Styled.TextWrapper>
      </Styled.HeaderBox>
      {isCategory && (
        <Styled.CategoryBox>
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <Styled.CategoryItem
                onClick={() => handleCategoryClick(category.keyword)}
                $isActive={activeCategory === category.keyword}
              >
                {category.text}
              </Styled.CategoryItem>
              {index !== categories.length - 1 && <Styled.Line />}
            </React.Fragment>
          ))}
        </Styled.CategoryBox>
      )}
    </Styled.Container>
  );
};
