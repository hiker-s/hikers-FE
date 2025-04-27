import * as Styled from "./Stamp.styled";
import stampMap from "../../assets/images/stampMap.svg";

export default function Stamp() {
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
      <div>
        <img src={stampMap} alt="스탬프 판" />
      </div>
    </Styled.Wrapper>
  );
}
