import { useState } from "react";
import * as Styled from "./styled";
import { Card } from "./Card";
import { GreenBtn } from "../button/GreenBtn";
import { Filter } from "../filter/Filter";

interface CourseItem {
  id: number;
  title: string;
  level: string;
  description: string;
  imgUrl: string;
  isLiked: boolean;
}

interface CardListProps {
  items: CourseItem[];
  onItemClick?: (id: number) => void;
}

export const CardList = ({ items, onItemClick }: CardListProps) => {
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
    // 리뷰 작성 페이지로 이동
  };

  return (
    <Styled.CardListWrapper>
      <Styled.CardListTopWrapper>
        <Styled.CardListTitle>리뷰</Styled.CardListTitle>
        <Filter
          filter="최신순"
          isReview={true}
          onFilterChange={(newFilter) => {
            console.log("Selected filter:", newFilter);
            // 필터 값 업데이트 로직
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
