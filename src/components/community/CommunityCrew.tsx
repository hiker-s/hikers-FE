import * as Styled from "./CommunityCrew.styled";
import { GreenBtn } from "../common/button/styled";
import CrewList from "../crew/CrewList";

export default function CommunityCrew() {
  return (
    <Styled.Wrapper>
      <CrewList />
      <Styled.ButtonWrapper>
        <GreenBtn
          onClick={() => console.log("모집글 작성 버튼 클릭")}
          $padding="0.38rem 1rem"
          $bgColor="#349989"
          color="white"
          $fontSize="0.875rem"
          $width="6.75rem"
        >
          모집글 작성하기
        </GreenBtn>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  );
}
