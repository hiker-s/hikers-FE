import * as Styled from "./likedList.styled";
import ReviewList from "../common/list/ReviewList";

export default function LikedList() {
  const MOCK_MYPAGE_REVIEW = [
    {
      id: 1,
      title: "인왕산 껌이네",
      mountainName: "인왕산",
      courseName: "인왕산1코스인왕산1코스인왕산1코스",
      level: "상",
      isLiked: true,
      isWriter: false,
    },
    {
      id: 2,
      title: "북한산 껌이네",
      mountainName: "북한산",
      courseName: "북한산3코스",
      level: "중",
      isLiked: false,
      isWriter: true,
    },
    {
      id: 3,
      title: "관악산 껌이네",
      mountainName: "관악산",
      courseName: "관악산5코스",
      level: "하",
      isLiked: true,
      isWriter: true,
    },
  ];

  return (
    <Styled.Wrapper>
      <ReviewList title="좋아요한 리뷰" data={MOCK_MYPAGE_REVIEW} />
    </Styled.Wrapper>
  );
}
