import * as Styled from "./CommunityReview.styled";
import ReviewList from "../common/list/ReviewList";
import { GreenBtn } from "../common/button/GreenBtn";

export default function CommunityReview() {
  const MOCK_COMMUNITY_REVIEW = [
    {
      id: 1,
      title: "인왕산 껌이네",
      mountain_name: "인왕산",
      course_name: "인왕산1코스인왕산1코스인왕산1코스",
      level: "상",
      liked_by_current_user: true,
      is_writer: false,
      like_count: 23,
    },
    {
      id: 2,
      title: "북한산 껌이네",
      mountain_name: "북한산",
      course_name: "북한산3코스",
      level: "중",
      liked_by_current_user: false,
      is_writer: true,
      like_count: 23,
    },
    {
      id: 3,
      title: "관악산 껌이네",
      mountain_name: "관악산",
      course_name: "관악산5코스",
      level: "하",
      liked_by_current_user: true,
      is_writer: true,
      like_count: 23,
    },
  ];

  return (
    <Styled.Wrapper>
      <ReviewList title="리뷰" review_data={MOCK_COMMUNITY_REVIEW} />
      <Styled.ButtonWrapper>
        <GreenBtn onClick={() => console.log("리뷰 작성 버튼 클릭")}>리뷰 작성하기</GreenBtn>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
}
