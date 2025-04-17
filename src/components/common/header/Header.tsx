import { ReactNode } from "react";
import * as Styled from "./styled";
import backBtn from "../../../assets/backBtn.svg";
import React from "react";

type HeaderProps = {
  children?: ReactNode;
  onClick?: () => void;
  isOnboarding?: boolean;
  isCategory?: boolean;
  onCategoryClick?: (keyword: string) => void;
};

export const Header = ({
  onClick,
  children,
  isOnboarding = false,
  isCategory = false,
  onCategoryClick,
}: HeaderProps) => {
  const categories = [
    { text: "프로그램", keyword: "프로그램" },
    { text: "리뷰", keyword: "리뷰" },
    { text: "크루", keyword: "크루" },
  ];

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
