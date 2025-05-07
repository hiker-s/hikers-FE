import { useEffect, useState } from "react";
import * as Styled from "./DetailCourseList.styled";
import RoadView from "./RoadView";
import { GreenBtn } from "../../common/button/GreenBtn";
import courseIds from "../../../data/course_ids.json";
import { useParams } from "react-router-dom";
import { MountainData } from "../../../types/mountainData";
import { stampApi, StampAuthParams } from "../../../apis/course/courseInfo/StampAuthenticateApi";

// course_ids.json의 데이터 구조를 명확히 정의하기 위한 타입
interface CourseIdItem {
  course_id: number;
  courseFilePath: string;
}

export default function DetailCourseList() {
  const { course_id } = useParams();
  const id = parseInt(course_id ?? "", 10);
  const [courseData, setCourseData] = useState<MountainData | null>(null);

  useEffect(() => {
    const loadMountainData = async () => {
      setCourseData(null); // 데이터 로딩 시작 시 이전 데이터 초기화

      try {
        // 3-1) course_ids에서 코스 데이터 경로 찾기
        const mnt_course = courseIds.find((item) => Number(item.course_id) === id) as CourseIdItem | undefined;

        // 유효한 코스를 찾았는지 확인
        if (!mnt_course?.courseFilePath) {
          console.log("코스 정보를 찾을 수 없습니다.");
          return;
        }

        // const filePath = `../../../data/mnt/${mntCourse.courseFilePath}`;

        // 3-2-1) 직접적인 동적 import 방식
        try {
          // const dataModule = await import(/* @vite-ignore */ `../../../data/mnt/${mnt_course.courseFilePath}`);
          // setCourseData(dataModule.default);
          // setLoading(false);
          // ----
          // + 3-2-2) JSON 파일 fetch 로 불러오기
          // const response = await fetch(`/data/mnt/${mnt_course.courseFilePath}`);
          // const data = await response.json();
          // setCourseData(data);
          // setLoading(false);
          // ---
          // + 3-2-3) Vite의 import.meta.glob 활용하기
          const files = import.meta.glob("/src/data/mnt/**/*.json");
          const module = await files[`/src/data/mnt/${mnt_course.courseFilePath}`]();
          setCourseData((module as { default: MountainData }).default);
          // setLoading(false);
        } catch (importError) {
          console.error("파일 불러오기 실패:", importError);

          // 3-2-4) 대체 방법: glob 방식 사용
          // const modules: Record<string, { default: MountainData }> = import.meta.glob("../../../data/mnt/**/*.json", {
          //   eager: true,
          // });
          // console.log("Available modules:", Object.keys(modules));

          // 3-3) 코스.json 경로지정해서 불러오기
          // const targetPath = `../../../data/mnt/${mnt_course.courseFilePath}`;
          // const data = modules[targetPath];

          // if (data) {
          //   setCourseData(data.default);
          //   setLoading(false);
          // } else {
          //   setError(`코스 데이터를 찾을 수 없습니다: ${mnt_course.courseFilePath}`);
          //   setLoading(false);
          // }
        }
      } catch (err) {
        console.error("데이터 로딩 오류:", err);
        // setError("코스 데이터를 불러오는 중 오류가 발생했습니다.");
        // setLoading(false);
      }
    };

    loadMountainData();
  }, [id]);

  const COLORS = ["#3D8B7D", "#E69B4C", "#D97575"];

  const handleStamp = () => {
    if (!id) return;

    navigator.geolocation.getCurrentPosition(
      async function (pos) {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;

        await stampApi.postStampAuth({
          courseId: id,
          latitude: latitude,
          longitude: longitude,
        } as StampAuthParams);
      },
      function (err) {
        console.error("위치 정보 가져오기 실패:", err);
        alert("위치 권한을 허용해주세요.");
      }
    );
  };

  if (!courseData) {
    return <></>;
  }

  return (
    <Styled.Wrapper>
      <Styled.Title>상세 코스</Styled.Title>

      <Styled.CourseContainer>
        {courseData.track.map((trackItem, index) => {
          const colorIndex = index % COLORS.length;
          const color = COLORS[colorIndex];
          const isLast = index === courseData.track.length - 1;
          // console.log("로드뷰 위치:", trackItem.path[0]);
          // console.log("trackItem.path.length", trackItem.path.length);

          return (
            <Styled.CourseItem key={trackItem.path_id}>
              <Styled.Left>
                <Styled.Circle color={color}>{index + 1}</Styled.Circle>
                {!isLast && <Styled.Line color={color} />}
              </Styled.Left>
              <Styled.Right>
                <Styled.InfoRow>
                  <Styled.DetailTitle>{isLast ? "완등" : "다음 지점까지"}</Styled.DetailTitle>
                  {!isLast && (
                    <Styled.DetailContext>
                      <Styled.DetailInfo>{trackItem.length_meter}m</Styled.DetailInfo>
                      <Styled.DivideLine></Styled.DivideLine>
                      <Styled.DetailInfo>{trackItem.time_minute}분</Styled.DetailInfo>
                    </Styled.DetailContext>
                  )}
                </Styled.InfoRow>
                {!isLast && trackItem.path.length > 0 && (
                  <Styled.RoadViewWrapper>
                    <RoadView
                      key={`roadview-${trackItem.path_id}`}
                      lat={trackItem.path[0].lat} // 첫 번째 좌표를 기준으로 로드뷰 표시
                      lng={trackItem.path[0].lng}
                    />
                  </Styled.RoadViewWrapper>
                )}
              </Styled.Right>
            </Styled.CourseItem>
          );
        })}
      </Styled.CourseContainer>
      <Styled.BtnWrapper>
        <GreenBtn onClick={handleStamp}>완등 스탬프 받기</GreenBtn>
      </Styled.BtnWrapper>
    </Styled.Wrapper>
  );
}
