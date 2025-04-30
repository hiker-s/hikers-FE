import { useState } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../../common/modal/Modal";
import { GreenBtn } from "../../common/button/GreenBtn";
import { LevelComp } from "../../common/item/Level";
import * as Styled from "./CourseData.styled";
import useKakaoShare from "../../../hooks/useKakaoShare";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import course_ids from "../../../data/course_ids.json";
import { MountainData } from "../../../types/mountainData";

const CourseData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { shareCourse } = useKakaoShare();

  const { course_id } = useParams();
  const id = parseInt(course_id ?? "", 10);

  const mnt_courseId = course_ids.find((item) => Number(item.course_id) === id);

  const mntData = import.meta.glob<MountainData>(`/src/data/mnt/${mnt_courseId?.courseFilePath}`, {
    eager: true,
  });

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
