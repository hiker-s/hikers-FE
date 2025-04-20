import * as Styled from "./CommunityReview.styled";
import { GreenBtn } from "../common/button/styled";
import ReviewList from "../review/ReviewList";

export default function CommunityReview() {
  return (
    <Styled.Wrapper>
      <ReviewList title="리뷰" />
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
