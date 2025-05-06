import { useEffect, useState } from "react";
import * as Styled from "./Stamp.styled";
import stampMap from "../../assets/images/stampMap.svg";
import stampDatas from "../../data/stamp.json";
import { mypageApi, MyStampAPI } from "../../apis/mypage/MypageApi";

type StampData = {
  mountain_name: string;
  stampImg: string;
};

const STAMP_POSITIONS = [
  { x: 45, y: 49 },
  { x: 154, y: 35 },
  { x: 256, y: 57 },
  { x: 187, y: 122 },
  { x: 73, y: 128 },
  { x: 97, y: 208 },
  { x: 202, y: 210 },
  { x: 298, y: 190 },
];

export default function Stamp() {
  const [stamps, setStamps] = useState<StampData[]>([]);
  const [myStampData, setMyStampData] = useState<MyStampAPI[]>([]);

  useEffect(() => {
    const fetchMyStamp = async () => {
      const review = await mypageApi.getMyStamp();
      setMyStampData(review);
    };
    fetchMyStamp();
  }, []);

  useEffect(() => {
    const matchedStamps = myStampData
      .map((my) => {
        const foundStamp = stampDatas.stamps.find((stamp) => stamp.mountain_name === my.mountain_name);
        if (foundStamp) {
          return {
            mountain_name: foundStamp.mountain_name,
            stampImg: foundStamp.stampImg,
          };
        }
        return null;
      })
      .filter((stamp): stamp is StampData => stamp !== null);

    // console.log("Matched stamps:", matchedStamps);
    setStamps(matchedStamps);
  }, [myStampData]);

  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Title>스탬프</Styled.Title>
        <Styled.StampCount>
          # <span>{stamps.length}</span>
        </Styled.StampCount>
      </Styled.TitleWrapper>
      <Styled.StampContainer>
        <Styled.StampMap src={stampMap} alt="스탬프 판" />
        <Styled.StampsWrapper>
          {stamps.map((stamp, index) => (
            <Styled.StampImage
              key={index}
              src={stamp.stampImg}
              alt={`${stamp.mountain_name} 스탬프`}
              style={{
                position: "absolute",
                left: `${STAMP_POSITIONS[index]?.x}px`,
                top: `${STAMP_POSITIONS[index]?.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </Styled.StampsWrapper>
      </Styled.StampContainer>
    </Styled.Wrapper>
  );
}
