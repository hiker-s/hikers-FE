import * as Styled from "./RankList.styled";
import Ranker from "./Ranker";
import { rankApi, Rankers } from "../../apis/rank/RankApi";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RankList = () => {
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

  const otherRankers = rankers?.ranker.slice(3) ?? [];

  return (
    <>
      {isLoading ? (
        <>
          <Styled.Wrapper>
            <Styled.MyRankContainer>
              <Skeleton width={"100%"} height={"100%"} />
            </Styled.MyRankContainer>
            <Styled.RankerListContainer>
              <Skeleton width={"100%"} height={"100%"} />
            </Styled.RankerListContainer>
          </Styled.Wrapper>
        </>
      ) : (
        <Styled.Wrapper>
          <Styled.MyRankContainer>
            <Ranker
              $isMe={true}
              rank={rankers?.myRank.rank}
              name={rankers?.myRank.name}
              stamp={rankers?.myRank.stamp}
              // status={rankers?.myRank.status as "same" | "down" | "up"}
            />
          </Styled.MyRankContainer>
          <Styled.RankerListContainer>
            {otherRankers.map((ranker) => (
              <Ranker
                key={ranker.id}
                rank={ranker.rank}
                name={ranker.name}
                stamp={ranker.stampCount}
                // status={ranker.status as "same" | "down" | "up"}
              />
            ))}
          </Styled.RankerListContainer>
        </Styled.Wrapper>
      )}
    </>
  );
};

export default RankList;
