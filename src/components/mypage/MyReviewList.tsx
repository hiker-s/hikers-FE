import ReviewList from "../common/list/ReviewList";
import { styled } from "styled-components";

export default function MyReviewList() {
  const MOCK_MYPAGE_MYREVIEW = [
    {
      id: 1,
      title: "인왕산 껌이네",
      mountain_name: "인왕산",
      course_name: "인왕산1코스인왕산1코스인왕산1코스",
      level: "상",
      writer: true,
      like_count: 23,
    },
    {
      id: 2,
      title: "북한산 껌이네",
      mountain_name: "북한산",
      course_name: "북한산3코스",
      level: "중",
      writer: true,
      like_count: 23,
    },
    {
      id: 3,
      title: "관악산 껌이네",
      mountain_name: "관악산",
      course_name: "관악산5코스",
      level: "하",
      writer: true,
      like_count: 23,
    },
    {
      id: 4,
      title: "북한산 껌이네",
      mountain_name: "북한산",
      course_name: "북한산3코스",
      level: "중",
      writer: true,
      like_count: 23,
    },
    {
      id: 5,
      title: "관악산 껌이네",
      mountain_name: "관악산",
      course_name: "관악산5코스",
      level: "하",
      writer: true,
      like_count: 23,
    },
  ];

  return (
    <Wrapper>
      <ReviewList title="내가 쓴 리뷰" review_data={MOCK_MYPAGE_MYREVIEW} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3125rem;
`;
