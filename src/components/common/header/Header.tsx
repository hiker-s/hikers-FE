import { ReactNode } from "react";
import * as Styled from "./styled";
import backBtn from "../../../assets/backBtn.svg";
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
}: HeaderProps) => {
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
              <Styled.CategoryItem onClick={() => onCategoryClick?.(category.keyword)}>
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
