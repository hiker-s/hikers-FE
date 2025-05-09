import { useEffect, useState } from "react";
import * as Styled from "./DetailCourseList.styled";
import RoadView from "./RoadView";
import { GreenBtn } from "../../common/button/GreenBtn";
import courseIds from "../../../data/course_ids.json";
import { useParams } from "react-router-dom";
import { MountainData } from "../../../types/mountainData";
import { stampApi, StampAuthParams } from "../../../apis/course/courseInfo/StampAuthenticateApi";

interface CourseIdItem {
  course_id: number;
  courseFilePath: string;
}

export default function DetailCourseList() {
  const { course_id } = useParams();
  const id = parseInt(course_id ?? "", 10);
  const [courseData, setCourseData] = useState<MountainData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadMountainData = async () => {
      if (isMounted) {
        setCourseData(null);
        setLoading(true);
      }

      try {
        const mnt_course = courseIds.find((item) => Number(item.course_id) === id) as CourseIdItem | undefined;

        if (!mnt_course?.courseFilePath) {
          if (isMounted) {
            console.log("코스 정보를 찾을 수 없습니다.");
            setLoading(false);
          }
          return;
        }

        try {
          const modules = import.meta.glob("/src/data/mnt/**/*.json", { eager: true });
          const targetPath = `/src/data/mnt/${mnt_course.courseFilePath}`;
          const data = modules[targetPath];

          if (data && isMounted) {
            setCourseData((data as { default: MountainData }).default);
            setLoading(false);
          } else {
            throw new Error("코스 데이터를 찾을 수 없습니다.");
          }
        } catch (importError) {
          console.error("파일 불러오기 실패:", importError);
          if (isMounted) {
            setError("코스 데이터를 불러오는 중 오류가 발생했습니다.");
            setLoading(false);
          }
        }
      } catch (err) {
        console.error("데이터 로딩 오류:", err);
        if (isMounted) {
          setError("코스 데이터를 불러오는 중 오류가 발생했습니다.");
          setLoading(false);
        }
      }
    };

    loadMountainData();

    return () => {
      isMounted = false;
    };
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

  if (!courseData || loading) {
    return (
      <Styled.Wrapper>
        <></>
      </Styled.Wrapper>
    );
  }

  if (error) {
    return <Styled.Wrapper>{error}</Styled.Wrapper>;
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
