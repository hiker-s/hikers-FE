import * as Styled from "./Stamp.styled";
import stampMap from "../../assets/images/stampMap.svg";
import { GreenBtn } from "../common/button/GreenBtn";

export default function Stamp() {
  const handleStamp = () => {
    console.log("스탬프 받기 클릭");
  };
  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Title>스탬프</Styled.Title>
        <Styled.StampCount>#1</Styled.StampCount>
      </Styled.TitleWrapper>
      <Styled.StampWrapper>
        <img src={stampMap} alt="스탬프 판" />
      </Styled.StampWrapper>
      <Styled.BtnWrapper>
        <GreenBtn onClick={handleStamp} padding="0.375rem 1rem" width="6rem">
          스탬프 받기
        </GreenBtn>
      </Styled.BtnWrapper>
    </Styled.Wrapper>
  );
}
