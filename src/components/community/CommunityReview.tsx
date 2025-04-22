import * as Styled from "./CommunityReview.styled";
import { GreenBtn } from "../common/button/styled";
import ReviewList from "../common/list/ReviewList";

export default function CommunityReview() {
  const MOCK_COMMUNITY_REVIEW = [
    {
      review_id: 1,
      title: "인왕산 껌이네",
      mnt_name: "인왕산",
      course_name: "인왕산1코스인왕산1코스인왕산1코스",
      level: "상",
      is_liked: true,
      is_writer: false,
      like_count: 23,
    },
    {
      review_id: 2,
      title: "북한산 껌이네",
      mnt_name: "북한산",
      course_name: "북한산3코스",
      level: "중",
      is_liked: false,
      is_writer: true,
      like_count: 23,
    },
    {
      review_id: 3,
      title: "관악산 껌이네",
      mnt_name: "관악산",
      course_name: "관악산5코스",
      level: "하",
      is_liked: true,
      is_writer: true,
      like_count: 23,
    },
  ];

  return (
    <Styled.Wrapper>
      <ReviewList title="리뷰" review_data={MOCK_COMMUNITY_REVIEW} />
      <Styled.ButtonWrapper>
        <GreenBtn
          onClick={() => console.log("리뷰 작성 버튼 클릭")}
          $padding="0.38rem 1rem"
          $bgColor="#349989"
          color="white"
          $fontSize="0.875rem"
          $width="6.75rem"
        >
          리뷰 작성하기
        </GreenBtn>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
}
