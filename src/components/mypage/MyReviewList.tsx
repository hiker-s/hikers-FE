import * as Styled from "./MyReviewList.styled";
import ReviewList from "../common/list/ReviewList";

export default function MyReviewList() {
  const MOCK_MYPAGE_MYREVIEW = [
    {
      review_id: 1,
      title: "인왕산 껌이네",
      mnt_name: "인왕산",
      course_name: "인왕산1코스인왕산1코스인왕산1코스",
      level: "상",
      is_writer: true,
      like_count: 23,
    },
    {
      review_id: 2,
      title: "북한산 껌이네",
      mnt_name: "북한산",
      course_name: "북한산3코스",
      level: "중",
      is_writer: true,
      like_count: 23,
    },
    {
      review_id: 3,
      title: "관악산 껌이네",
      mnt_name: "관악산",
      course_name: "관악산5코스",
      level: "하",
      is_writer: true,
      like_count: 23,
    },
    {
      review_id: 4,
      title: "북한산 껌이네",
      mnt_name: "북한산",
      course_name: "북한산3코스",
      level: "중",
      is_writer: true,
      like_count: 23,
    },
    {
      review_id: 5,
      title: "관악산 껌이네",
      mnt_name: "관악산",
      course_name: "관악산5코스",
      level: "하",
      is_writer: true,
      like_count: 23,
    },
  ];

  return (
    <Styled.Wrapper>
      <ReviewList title="내가 쓴 리뷰" review_data={MOCK_MYPAGE_MYREVIEW} />
    </Styled.Wrapper>
  );
}
