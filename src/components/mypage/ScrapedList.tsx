import CourseList from "../common/list/CourseList";
import * as Styled from "./ScrapedList.styled";

export default function ScrapedList() {
  const MOCK_MYPAGE_COURSE = [
    {
      id: 1,
      courseName: "인왕산1코스",
      courseRoute: "돈의문터 - 창의문",
      totalDuration: "1시간 50분",
      level: "하",
      isScraped: true,
    },
    {
      id: 2,
      courseName: "인왕산1코스",
      courseRoute: "돈의문터 - 창의문",
      totalDuration: "1시간 50분",
      level: "상",
      isScraped: false,
    },
    {
      id: 3,
      courseName: "인왕산1코스",
      courseRoute: "돈의문터 - 창의문",
      totalDuration: "1시간 50분",
      level: "중",
      isScraped: true,
    },
    {
      id: 4,
      courseName: "인왕산1코스",
      courseRoute: "돈의문터 - 창의문",
      totalDuration: "1시간 50분",
      level: "상",
      isScraped: false,
    },
    {
      id: 5,
      courseName: "인왕산1코스",
      courseRoute: "돈의문터 - 창의문",
      totalDuration: "1시간 50분",
      level: "중",
      isScraped: true,
    },
    {
      id: 6,
      courseName: "인왕산1코스",
      courseRoute: "돈의문터 - 창의문",
      totalDuration: "1시간 50분",
      level: "상",
      isScraped: false,
    },
    {
      id: 7,
      courseName: "인왕산1코스",
      courseRoute: "돈의문터 - 창의문",
      totalDuration: "1시간 50분",
      level: "중",
      isScraped: true,
    },
  ];
  return (
    <Styled.Wrapper>
      <CourseList title="스크랩한 코스" data={MOCK_MYPAGE_COURSE} />
    </Styled.Wrapper>
  );
}
