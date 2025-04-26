import styled from "styled-components";
import ReviewList from "../common/list/ReviewList";

export default function LikedList() {
  const MOCK_MYPAGE_REVIEW = [
    {
      review_id: 1,
      title: "인왕산 껌이네",
      mnt_name: "인왕산",
      course_name: "인왕산1코스인왕산1코스인왕산1코스",
      level: "상",
      is_liked: true,
      is_writer: false,
    },
    {
      review_id: 2,
      title: "북한산 껌이네",
      mnt_name: "북한산",
      course_name: "북한산3코스",
      level: "중",
      is_liked: true,
      is_writer: false,
    },
    {
      review_id: 3,
      title: "관악산 껌이네",
      mnt_name: "관악산",
      course_name: "관악산5코스",
      level: "하",
      is_liked: true,
      is_writer: false,
    },
  ];

  return (
    <Wrapper>
      <ReviewList title="좋아요한 리뷰" review_data={MOCK_MYPAGE_REVIEW} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3125rem;
`;
