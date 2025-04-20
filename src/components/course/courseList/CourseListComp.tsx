import * as Styled from "./CourseListComp.styled";
import CourseList from "../../common/list/CourseList";

export default function CourseListComp() {
  const MOCK_COURSE = [
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
      <CourseList title="코스" data={MOCK_COURSE} />
    </Styled.Wrapper>
  );
}
