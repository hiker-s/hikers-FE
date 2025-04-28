import * as Styled from "./CommunityReview.styled";
import ReviewList from "../common/list/ReviewList";
import { GreenBtn } from "../common/button/GreenBtn";
import { useEffect, useState } from "react";
import { reviewApi, ReviewListAPI } from "../../apis/community/ReviewApi";

export default function CommunityReview() {
  const [reviewData, setReviewData] = useState<ReviewListAPI[]>([]);

  useEffect(() => {
    const fetchCrewList = async () => {
      try {
        const crew = await reviewApi.getReviewList();
        setReviewData(crew);
      } catch (error) {
        console.error("리뷰 글 목록 데이터 가져오기 실패:", error);
      }
    };

    fetchCrewList();
  }, []);

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
      console.error("좋아요 토글 실패:", error);
    }
  };

  return (
    <Styled.Wrapper>
      <ReviewList title="리뷰" review_data={reviewData} onLikeToggle={handleLikeToggle} />
      <Styled.ButtonWrapper>
        <GreenBtn onClick={() => console.log("리뷰 작성 버튼 클릭")}>리뷰 작성하기</GreenBtn>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
}
