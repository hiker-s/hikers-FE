import * as Styled from "./Top3.styled";
import top3Background from "../../assets/images/top3Background.svg";
import top3Default from "../../assets/images/top3Default.svg";
import crown from "../../assets/images/crown.svg";

const Top3 = () => {
  const dummyRank = {
    myRank: { id: 23, rank: 23, name: "하이커스", img: "", stamp: 11, status: "same" },
    ranker: [
      { id: 1, rank: 1, name: "하이하이", img: "", stamp: 10, status: "same" },
      { id: 2, rank: 2, name: "안녕", img: "https://picsum.photos/200/300", stamp: 42, status: "down" },
      { id: 3, rank: 3, name: "하이커", img: "", stamp: 38, status: "same" },
      { id: 4, rank: 4, name: "이커스", img: "https://picsum.photos/200/300", stamp: 35, status: "up" },
      { id: 5, rank: 5, name: "하아이", img: "https://picsum.photos/200/300", stamp: 32, status: "down" },
      { id: 6, rank: 6, name: "커어스", img: "", stamp: 31, status: "up" },
      { id: 7, rank: 7, name: "커어스", img: "https://picsum.photos/200/300", stamp: 31, status: "up" },
      { id: 8, rank: 8, name: "커어스", img: "https://picsum.photos/200/300", stamp: 31, status: "up" },
      { id: 9, rank: 9, name: "커어스", img: "https://picsum.photos/200/300", stamp: 31, status: "same" },
      { id: 10, rank: 10, name: "커어스", img: "https://picsum.photos/200/300", stamp: 31, status: "down" },
    ],
  };

  const top3Rankers = dummyRank.ranker.slice(0, 3);

  const getContainerComponent = (index: number) => {
    const containers = {
      0: Styled.Top2Container,
      1: Styled.Top1Container,
      2: Styled.Top3Container,
    };
    return containers[index as keyof typeof containers];
  };

  // 원하는 순서로 배열을 재정렬
  const orderedRanks = [top3Rankers[1], top3Rankers[0], top3Rankers[2]];

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
