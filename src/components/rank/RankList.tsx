import * as Styled from "./RankList.styled";
import Ranker from "./Ranker";

const RankList = () => {
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

  const otherRankers = dummyRank.ranker.slice(3);

  return (
    <Styled.Wrapper>
      <Styled.MyRankContainer>
        <Ranker
          $isMe={true}
          rank={dummyRank.myRank.rank}
          name={dummyRank.myRank.name}
          img={dummyRank.myRank.img}
          stamp={dummyRank.myRank.stamp}
          status={dummyRank.myRank.status as "same" | "down" | "up"}
        />
      </Styled.MyRankContainer>
      <Styled.RankerListContainer>
        {otherRankers.map((ranker) => (
          <Ranker
            key={ranker.id}
            rank={ranker.rank}
            name={ranker.name}
            img={ranker.img}
            stamp={ranker.stamp}
            status={ranker.status as "same" | "down" | "up"}
          />
        ))}
      </Styled.RankerListContainer>
    </Styled.Wrapper>
  );
};

export default RankList;
