import * as Styled from "./Stamp.styled";
import stampMap from "../../assets/images/stampMap.svg";
import { GreenBtn } from "../common/button/GreenBtn";

export default function Stamp() {
  const handleStamp = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      alert("lat: " + latitude + ", lng:" + longitude);
    });
  };
  const MOCK_STAMP_DATA = [];

  // const [stampData] = useState(MOCK_STAMP_DATA);
  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Title>스탬프</Styled.Title>
        <Styled.StampCount>
          # <span>{MOCK_STAMP_DATA.length}</span>
        </Styled.StampCount>
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
