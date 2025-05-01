import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";
import { Card } from "./Card";
import { GreenBtn } from "../button/GreenBtn";
import { Filter } from "../filter/Filter";

interface CourseItem {
  id: number;
  title: string;
  level: string;
  description: string;
  imgUrl?: string;
  isLiked: boolean;
}

interface CardListProps {
  items: CourseItem[];
  type: string;
  onTypeChange?: (type: string) => void;
  onItemClick?: (id: number) => void;
}

export const CardList = ({ items, type, onItemClick, onTypeChange }: CardListProps) => {
  const navigate = useNavigate();
  const [likedItems, setLikedItems] = useState<Set<number>>(
    new Set(items.filter((item) => item.isLiked).map((item) => item.id))
  );

  const handleLikeClick = (id: number) => {
    setLikedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleReviewClick = () => {
    navigate("/community/review/write");
  };

  return (
    <Styled.CardListWrapper>
      <Styled.CardListTopWrapper>
        <Styled.CardListTitle>리뷰</Styled.CardListTitle>
        <Filter
          filter={type}
          isReview={true}
          onTypeChange={(newType) => {
            // console.log("Selected Type:", newType);
            onTypeChange?.(newType); // 상위로 전달
          }}
        />
      </Styled.CardListTopWrapper>

      <Styled.CardsWrapper>
        {items.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            level={item.level}
            description={item.description}
            imgUrl={item.imgUrl}
            isLiked={likedItems.has(item.id)}
            onLikeClick={() => handleLikeClick(item.id)}
            onDetailClick={() => onItemClick?.(item.id)}
          />
        ))}
      </Styled.CardsWrapper>
      <Styled.CardListBottomWrapper>
        <GreenBtn onClick={handleReviewClick}>리뷰 작성하기</GreenBtn>
      </Styled.CardListBottomWrapper>
    </Styled.CardListWrapper>
  );
};
