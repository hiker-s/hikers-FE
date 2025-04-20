import * as Styled from "./CommunityReview.styled";
import { GreenBtn } from "../common/button/styled";
import ReviewList from "../review/ReviewList";

export default function CommunityReview() {
  const MOCK_COMMUNITY_REVIEW = [
    {
      id: 1,
      title: "인왕산 껌이네",
      mountainName: "인왕산",
      courseName: "인왕산1코스인왕산1코스인왕산1코스",
      level: "상",
      isLiked: true,
      isWriter: false,
    },
    {
      id: 2,
      title: "북한산 껌이네",
      mountainName: "북한산",
      courseName: "북한산3코스",
      level: "중",
      isLiked: false,
      isWriter: true,
    },
    {
      id: 3,
      title: "관악산 껌이네",
      mountainName: "관악산",
      courseName: "관악산5코스",
      level: "하",
      isLiked: true,
      isWriter: true,
    },
  ];

  return (
    <Styled.Wrapper>
      <ReviewList title="리뷰" data={MOCK_COMMUNITY_REVIEW} />
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
