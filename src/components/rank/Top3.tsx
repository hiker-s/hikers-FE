import * as Styled from "./Top3.styled";
import top3Background from "../../assets/images/top3Background.svg";
import top3Default from "../../assets/images/top3Default.svg";
import crown from "../../assets/images/crown.svg";
import { rankApi, Rankers } from "../../apis/rank/RankApi";
import { useState, useEffect } from "react";

const Top3 = () => {
  const [rankers, setRankers] = useState<Rankers["result"] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRankers = async () => {
      try {
        setIsLoading(true);
        const data = await rankApi.getRankers();
        setRankers(data);

        console.log(data);
      } catch (error) {
        console.error("랭킹 가져오기 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRankers();
  }, []);

  const top3Rankers = rankers?.ranker.slice(0, 3) ?? [];

  const getContainerComponent = (index: number) => {
    const containers = {
      0: Styled.Top2Container,
      1: Styled.Top1Container,
      2: Styled.Top3Container,
    };
    return containers[index as keyof typeof containers];
  };

  // 원하는 순서로 배열을 재정렬
  const orderedRanks = top3Rankers.length === 3 ? [top3Rankers[1], top3Rankers[0], top3Rankers[2]] : top3Rankers;

  return (
    <>
      {isLoading ? (
        <>
          <Styled.Wrapper $backgroundImage={top3Background}></Styled.Wrapper>
        </>
      ) : (
        <Styled.Wrapper $backgroundImage={top3Background}>
          <Styled.TopContainer>
            {orderedRanks.map((rank, index) => {
              const Container = getContainerComponent(index);
              return (
                <Container key={rank.id}>
                  {index === 1 && <Styled.CrownImg src={crown} />}
                  <Styled.TopImg src={top3Default} />
                  <Styled.TopTextContainer>
                    <Styled.TopName>{rank.name}</Styled.TopName>
                    <Styled.TopStamp>
                      <span style={{ fontWeight: "700" }}>{rank.stampCount}</span> stamps
                    </Styled.TopStamp>
                  </Styled.TopTextContainer>
                </Container>
              );
            })}
          </Styled.TopContainer>
        </Styled.Wrapper>
      )}
    </>
  );
};

export default Top3;
