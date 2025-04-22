import CourseList from "../common/list/CourseList";
import * as Styled from "./ScrapedList.styled";

export default function ScrapedList() {
  const MOCK_MYPAGE_COURSE = [
    {
      course_id: 1,
      course_name: "인왕산1코스",
      course_len: "돈의문터 - 창의문",
      course_time: "1시간 50분",
      level: "하",
      is_scrapped: true,
    },
    {
      course_id: 2,
      course_name: "인왕산1코스",
      course_len: "돈의문터 - 창의문",
      course_time: "1시간 50분",
      level: "상",
      is_scrapped: true,
    },
    {
      course_id: 3,
      course_name: "인왕산1코스",
      course_len: "돈의문터 - 창의문",
      course_time: "1시간 50분",
      level: "중",
      is_scrapped: true,
    },
    {
      course_id: 4,
      course_name: "인왕산1코스",
      course_len: "돈의문터 - 창의문",
      course_time: "1시간 50분",
      level: "상",
      is_scrapped: true,
    },
    {
      course_id: 5,
      course_name: "인왕산1코스",
      course_len: "돈의문터 - 창의문",
      course_time: "1시간 50분",
      level: "중",
      is_scrapped: true,
    },
    {
      course_id: 6,
      course_name: "인왕산1코스",
      course_len: "돈의문터 - 창의문",
      course_time: "1시간 50분",
      level: "상",
      is_scrapped: false,
    },
    {
      course_id: 7,
      course_name: "인왕산1코스",
      course_len: "돈의문터 - 창의문",
      course_time: "1시간 50분",
      level: "중",
      is_scrapped: true,
    },
  ];
  return (
    <Styled.Wrapper>
      <CourseList title="스크랩한 코스" course_data={MOCK_MYPAGE_COURSE} />
    </Styled.Wrapper>
  );
}
