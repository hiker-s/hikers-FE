import { useState } from "react";
import * as Styled from "./styled";
import { Card } from "./Card";
import { Filter } from "../filter/Filter";
import { reviewApi } from "../../../apis/community/ReviewApi";

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
  onItemClick: (id: number) => void;
}

export const CardList = ({ items, type, onItemClick, onTypeChange }: CardListProps) => {
  const [likedItems, setLikedItems] = useState<Set<number>>(
    new Set(items.filter((item) => item.isLiked).map((item) => item.id))
  );

  const handleHeartClick = async (id: number) => {
    if (!id) {
      console.error("review_id가 없습니다.");
      return;
    }

    const isAlreadyLiked = likedItems.has(id);
    // console.log(`${id} 좋아요 ${isAlreadyLiked ? "취소" : "추가"} 클릭`);

    try {
      if (isAlreadyLiked) {
        await reviewApi.deleteReviewHeart(id);
        setLikedItems((prev) => {
          const newSet = new Set(prev);
          newSet.delete(id);
          return newSet;
        });
      } else {
        await reviewApi.postReviewHeart(id);
        setLikedItems((prev) => new Set(prev).add(id));
      }
    } catch (error) {
      console.error("좋아요 처리 실패", error);
    }
  };

  return (
    <Styled.CardListWrapper>
      <Styled.CardListTopWrapper>
        <Styled.CardListTitle>리뷰</Styled.CardListTitle>
        <Filter
          filter={type}
          isReview={true}
          onTypeChange={(newType) => {
            onTypeChange?.(newType);
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
            onLikeClick={() => handleHeartClick(item.id)}
            onDetailClick={() => onItemClick(item.id)}
          />
        ))}
      </Styled.CardsWrapper>
    </Styled.CardListWrapper>
  );
};
