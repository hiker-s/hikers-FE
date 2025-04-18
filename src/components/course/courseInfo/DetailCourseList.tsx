import { useState } from "react";
import * as Styled from "./DetailCourseList.styled";
import RoadView from "./RoadView";

export default function DetailCourseList() {
  const MOCK_DETAILCOURSE = [
    {
      id: 1,
      distance: "0.2km",
      duration: "5분",
      lat: 37.546475,
      lng: 126.9646916,
    },
    {
      id: 2,
      distance: "0.2km",
      duration: "5분",
      lat: 37.546475,
      lng: 126.9646916,
    },
    {
      id: 3,
      distance: "0.2km",
      duration: "5분",
      lat: 37.546475,
      lng: 126.9646916,
    },
  ];
  const [courses] = useState(MOCK_DETAILCOURSE);
  const COLORS = ["#3D8B7D", "#E69B4C", "#D97575"];
  return (
    <Styled.Wrapper>
      <Styled.Title>상세 코스</Styled.Title>

      <Styled.CourseContainer>
        {courses.map((course, index) => {
          const colorIndex = index % COLORS.length;
          const color = COLORS[colorIndex];
          const isLast = index === courses.length - 1;

          return (
            <Styled.CourseItem key={course.id}>
              <Styled.Left>
                <Styled.Circle color={color}>{course.id}</Styled.Circle>
                {!isLast && <Styled.Line color={color} />}
              </Styled.Left>
              <Styled.Right>
                <Styled.InfoRow>
                  <Styled.DetailTitle>{isLast ? "완등" : "다음 지점까지"}</Styled.DetailTitle>
                  {!isLast && (
                    <Styled.DetailContext>
                      <Styled.DetailInfo>{course.distance}</Styled.DetailInfo>
                      <Styled.DivideLine></Styled.DivideLine>
                      <Styled.DetailInfo>{course.duration}</Styled.DetailInfo>
                    </Styled.DetailContext>
                  )}
                </Styled.InfoRow>
                {!isLast && (
                  <Styled.RoadViewWrapper>
                    <RoadView lat={course.lat} lng={course.lng} />
                  </Styled.RoadViewWrapper>
                )}
              </Styled.Right>
            </Styled.CourseItem>
          );
        })}
      </Styled.CourseContainer>
    </Styled.Wrapper>
  );
}
