import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../../common/modal/Modal";
import { GreenBtn } from "../../common/button/GreenBtn";
import { LevelComp } from "../../common/item/Level";
import * as Styled from "./CourseData.styled";
import useKakaoShare from "../../../hooks/useKakaoShare";
import course_ids from "../../../data/course_ids.json";
import { MountainData } from "../../../types/mountainData";
import Skeleton from "react-loading-skeleton";

const CourseData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mntData, setMntData] = useState<MountainData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { shareCourse } = useKakaoShare();
  const { course_id } = useParams();
  const id = parseInt(course_id ?? "", 10);

  useEffect(() => {
    const loadMountainData = async () => {
      try {
        setLoading(true);

        // course_ids에서 코스 데이터 경로 찾기
        const mnt_course = course_ids.find((item) => Number(item.course_id) === id);

        // 유효한 코스를 찾았는지 확인
        if (!mnt_course?.courseFilePath) {
          setError("코스 정보를 찾을 수 없습니다.");
          setLoading(false);
          return;
        }

        // console.log("Found course path:", mnt_course.courseFilePath);

        // 직접적인 동적 import 방식
        try {
          const dataModule = await import(`../../../data/mnt/${mnt_course.courseFilePath}`);
          setMntData(dataModule.default);
          setLoading(false);
        } catch (importError) {
          console.error("파일 불러오기 실패:", importError);

          // 대체 방법: glob 방식 사용
          const modules: Record<string, { default: MountainData }> = import.meta.glob("../../../data/mnt/**/*.json", {
            eager: true,
          });
          // console.log("Available modules:", Object.keys(modules));

          const targetPath = `../../../data/mnt/${mnt_course.courseFilePath}`;
          const data = modules[targetPath];

          if (data) {
            setMntData(data.default);
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

  if (error || !mntData) {
    // mntData 불러오기 전에 return 될 내용 - 매번 되기 때문에 loading과 같은 스켈레톤으로 구상
    return (
      <Styled.Wrapper>
        <Styled.CourseTitleWrapper>
          <Skeleton width={"100%"} height={"100%"} />
          <Styled.GreenBtnWrapper>
            <GreenBtn onClick={() => setIsModalOpen(true)}>코스 공유하기</GreenBtn>
          </Styled.GreenBtnWrapper>
        </Styled.CourseTitleWrapper>
        <Styled.CourseMeta>
          <Styled.StartToEnd>
            <Skeleton width={"100%"} height={"100%"} />
          </Styled.StartToEnd>
          <Styled.CourseStats>
            <Styled.CourseStatsItem>
              <Skeleton width={"100%"} height={"100%"} />
            </Styled.CourseStatsItem>
            <Styled.CourseStatsItem>
              <Skeleton width={"100%"} height={"100%"} />
            </Styled.CourseStatsItem>
            <Styled.CourseStatsItem>
              <Skeleton width={"100%"} height={"100%"} />
            </Styled.CourseStatsItem>
          </Styled.CourseStats>
        </Styled.CourseMeta>
      </Styled.Wrapper>
    );
  }

  const totalDistance = mntData.total_length_km;
  const totalElevation = `${mntData.max_ele}m`;
  const totalDuration = mntData.total_time;
  const courseName = mntData.course_name;
  const courseStartEnd = `${mntData.start_name} ⟷ ${mntData.end_name}`;
  const courseTitle = `${mntData.mnt_name} ${courseName}`;
  const courseLevel = mntData.level;

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
      {loading ? (
        <Styled.Wrapper>
          <Styled.CourseTitleWrapper>
            <Skeleton width={"100%"} height={"100%"} />
            <Styled.GreenBtnWrapper>
              <GreenBtn onClick={() => setIsModalOpen(true)}>코스 공유하기</GreenBtn>
            </Styled.GreenBtnWrapper>
          </Styled.CourseTitleWrapper>
          <Styled.CourseMeta>
            <Styled.StartToEnd>
              <Skeleton width={"100%"} height={"100%"} />
            </Styled.StartToEnd>
            <Styled.CourseStats>
              <Styled.CourseStatsItem>
                <Skeleton width={"100%"} height={"100%"} />
              </Styled.CourseStatsItem>
              <Styled.CourseStatsItem>
                <Skeleton width={"100%"} height={"100%"} />
              </Styled.CourseStatsItem>
              <Styled.CourseStatsItem>
                <Skeleton width={"100%"} height={"100%"} />
              </Styled.CourseStatsItem>
            </Styled.CourseStats>
          </Styled.CourseMeta>
        </Styled.Wrapper>
      ) : (
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
      )}
    </>
  );
};

export default CourseData;
