import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../../common/modal/ShareModal";
import { GreenBtn } from "../../common/button/GreenBtn";
import { LevelComp } from "../../common/item/Level";
import * as Styled from "./CourseData.styled";
import useKakaoShare from "../../../hooks/useKakaoShare";
import course_ids from "../../../data/course_ids.json"; // 1. course_ids, MountainData import 해주기
import { MountainData } from "../../../types/mountainData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

const CourseData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseData, setCourseData] = useState<MountainData | null>(null); // 2. 여기에도 MountainData useState로 설정해줘야 돼요
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { shareCourse } = useKakaoShare();

  // 3. 여기서부터 course_id로 course_ids.json에서 코스 데이터 경로 가져오기 시작
  const { course_id } = useParams();
  const id = parseInt(course_id ?? "", 10);

  useEffect(() => {
    const loadMountainData = async () => {
      try {
        setLoading(true);

        // 3-1) course_ids에서 코스 데이터 경로 찾기
        const mnt_course = course_ids.find((item) => Number(item.course_id) === id);

        // 유효한 코스를 찾았는지 확인
        if (!mnt_course?.courseFilePath) {
          setError("코스 정보를 찾을 수 없습니다.");
          setLoading(false);
          return;
        }

        // console.log("Found course path:", mnt_course.courseFilePath);

        // 3-2-1) 직접적인 동적 import 방식
        try {
          const dataModule = await import(/* @vite-ignore */ `../../../data/mnt/${mnt_course.courseFilePath}`);
          setCourseData(dataModule.default);
          setLoading(false);
        } catch (importError) {
          console.error("파일 불러오기 실패:", importError);

          // 3-2-1) 대체 방법: glob 방식 사용
          const modules: Record<string, { default: MountainData }> = import.meta.glob("../../../data/mnt/**/*.json", {
            eager: true,
          });
          // console.log("Available modules:", Object.keys(modules));

          // 3-3) 코스.json 경로지정해서 불러오기
          const targetPath = `../../../data/mnt/${mnt_course.courseFilePath}`;
          const data = modules[targetPath];

          if (data) {
            setCourseData(data.default);
            setLoading(false);
          } else {
            setError(`코스 데이터를 찾을 수 없습니다: ${mnt_course.courseFilePath}`);
            setLoading(false);
          }
        }
      } catch (err) {
        console.error("데이터 로딩 오류:", err);
        setError("코스 데이터를 불러오는 중 오류가 발생했습니다.");
        setLoading(false);
      }
    };

    loadMountainData();
  }, [id]);

  // 4. courseData 불러오기 전에 return 될 내용 - 매번 되기 때문에 loading과 같은 스켈레톤으로 구상
  if (error || !courseData || loading) {
    return (
      <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
        <Styled.Wrapper>
          <Styled.CourseTitleWrapper>
            <div style={{ width: "70%", height: "25px" }}>
              <Skeleton height={25} />
            </div>
            <Styled.GreenBtnWrapper>
              <Skeleton height={25} width={120} />
            </Styled.GreenBtnWrapper>
          </Styled.CourseTitleWrapper>

          <Styled.CourseMeta>
            <Styled.StartToEnd>
              <Skeleton height={20} width="110px" />
            </Styled.StartToEnd>

            <Styled.CourseStats
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "25px" }}
            >
              <Styled.CourseStatsItem>
                <Skeleton height={16} width={100} />
              </Styled.CourseStatsItem>

              <Styled.CourseStatsItem>
                <Skeleton height={16} width={100} />
              </Styled.CourseStatsItem>

              <Styled.CourseStatsItem>
                <Skeleton height={16} width={100} />
              </Styled.CourseStatsItem>
            </Styled.CourseStats>
          </Styled.CourseMeta>
        </Styled.Wrapper>
      </SkeletonTheme>
    );
  }
  // 여기까지 .. if (!courseData) {} 확인한 후에 courseData 확인하기 ⬇️ 아래가 5. courseData 객체 사용하기

  const totalDistance = courseData.total_length_km;
  const totalElevation = `${courseData.max_ele}m`;
  const totalDuration = courseData.total_time;
  const courseName = courseData.course_name;
  const courseStartEnd = `${courseData.start_name} ⟷ ${courseData.end_name}`;
  const courseTitle = `${courseData.mnt_name} ${courseName}`;
  const courseLevel = courseData.level;

  const handleKakaoShare = () => {
    shareCourse({
      title: courseTitle,
      level: courseLevel,
      duration: totalDuration,
      distance: totalDistance,
      elevation: totalElevation,
    });
  };

  const handleLinkShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("링크가 복사되었습니다.");
    } catch (err) {
      console.error("링크 복사 실패:", err);
    }
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          title={courseTitle}
          onClose={() => setIsModalOpen(false)}
          onKakaoShare={handleKakaoShare}
          onLinkShare={handleLinkShare}
        />
      )}

      <Styled.Wrapper>
        <Styled.CourseTitleWrapper>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Styled.CourseTitle>{courseTitle}</Styled.CourseTitle>
            <LevelComp $level={courseLevel}>{courseLevel}</LevelComp>
          </div>
          <Styled.GreenBtnWrapper>
            <GreenBtn onClick={() => setIsModalOpen(true)}>코스 공유하기</GreenBtn>
          </Styled.GreenBtnWrapper>
        </Styled.CourseTitleWrapper>
        <Styled.CourseMeta>
          <Styled.StartToEnd>{courseStartEnd}</Styled.StartToEnd>
          <Styled.CourseStats>
            <Styled.CourseStatsItem>
              <span style={{ color: "#A4A4A4" }}>소요시간</span> {totalDuration}
            </Styled.CourseStatsItem>
            <Styled.CourseStatsItem>
              <span style={{ color: "#A4A4A4" }}>코스길이</span> {totalDistance}
            </Styled.CourseStatsItem>
            <Styled.CourseStatsItem>
              <span style={{ color: "#A4A4A4" }}>고도</span> {totalElevation}
            </Styled.CourseStatsItem>
          </Styled.CourseStats>
        </Styled.CourseMeta>
      </Styled.Wrapper>
    </>
  );
};

export default CourseData;
