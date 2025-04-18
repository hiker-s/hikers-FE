import * as Styled from "./Top3.styled";
import top3Background from "../../assets/images/top3Background.svg";
import top3Default from "../../assets/images/top3Default.svg";
import crown from "../../assets/images/crown.svg";

const Top3 = () => {
  const dummyRank = {
    top3: [
      {
        id: 1,
        name: "하이커스",
        img: "https://picsum.photos/200/300",
        stamp: 20,
      },
      {
        id: 2,
        name: "나는2등이야",
        img: "",
        stamp: 15,
      },
      {
        id: 3,
        name: "삼등이",
        img: "https://picsum.photos/200/300",
        stamp: 10,
      },
    ],
  };

  const getContainerComponent = (index: number) => {
    const containers = {
      0: Styled.Top2Container,
      1: Styled.Top1Container,
      2: Styled.Top3Container,
    };
    return containers[index as keyof typeof containers];
  };

  // 원하는 순서로 배열을 재정렬
  const orderedRanks = [dummyRank.top3[1], dummyRank.top3[0], dummyRank.top3[2]];

  return (
    <Styled.Wrapper $backgroundImage={top3Background}>
      <Styled.TopContainer>
        {orderedRanks.map((rank, index) => {
          const Container = getContainerComponent(index);
          return (
            <Container key={rank.id}>
              {rank.id === 1 && <Styled.CrownImg src={crown} />}
              <Styled.TopImg src={rank.img || top3Default} />
              <Styled.TopTextContainer>
                <Styled.TopName>{rank.name}</Styled.TopName>
                <Styled.TopStamp>
                  <span style={{ fontWeight: "700" }}>{rank.stamp}</span> stamps
                </Styled.TopStamp>
              </Styled.TopTextContainer>
            </Container>
          );
        })}
      </Styled.TopContainer>
    </Styled.Wrapper>
  );
};

export default Top3;
