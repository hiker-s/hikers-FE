import styled from "styled-components";
import ReviewList from "../common/list/ReviewList";
import { useEffect, useState } from "react";
import { mypageApi, LikedReviewListAPI } from "../../apis/mypage/MypageApi";
import { reviewApi } from "../../apis/community/ReviewApi";

export default function LikedList() {
  const [filter, setFilter] = useState<string>("최신순");
  const [reviewData, setReviewData] = useState<LikedReviewListAPI[]>([]);

  const fetchReviewList = async (filter: string) => {
    try {
      const review = await mypageApi.getLikedReviewList(filter);
      setReviewData(review);
    } catch (error) {
      console.error("좋아요한 리뷰 글 목록 데이터 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchReviewList(filter);
  }, [filter]);

  const handleLikeToggle = async (itemId: number) => {
    setReviewData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, liked_by_current_user: !item.liked_by_current_user } : item
      )
    );
    const currentItem = reviewData.find((item) => item.id === itemId);

    if (!currentItem) return;

    try {
      if (currentItem.liked_by_current_user) {
        await reviewApi.deleteReviewHeart(itemId);
      } else {
        await reviewApi.postReviewHeart(itemId);
      }
    } catch (error) {
      console.error("좋아요 실패:", error);
    }
  };

  return (
    <Wrapper>
      <ReviewList
        title="좋아요한 리뷰"
        review_data={reviewData}
        onLikeToggle={handleLikeToggle}
        filter={filter}
        onFilterChange={setFilter}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3125rem;
  width: 350px;
`;
