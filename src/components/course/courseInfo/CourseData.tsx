import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../../common/modal/ShareModal";
import { GreenBtn } from "../../common/button/GreenBtn";
import { LevelComp } from "../../common/item/Level";
import * as Styled from "./CourseData.styled";
import useKakaoShare from "../../../hooks/useKakaoShare";
import course_ids from "../../../data/course_ids.json";
import { MountainData } from "../../../types/mountainData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

const CourseData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseData, setCourseData] = useState<MountainData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { shareCourse } = useKakaoShare();
  const { course_id } = useParams();
  const id = parseInt(course_id ?? "", 10);

  useEffect(() => {
    let isMounted = true;

    const loadMountainData = async () => {
      try {
        setLoading(true);
        const mnt_course = course_ids.find((item) => Number(item.course_id) === id);

        if (!mnt_course?.courseFilePath) {
          if (isMounted) {
            setError("코스 정보를 찾을 수 없습니다.");
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
