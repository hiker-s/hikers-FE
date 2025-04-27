import { useState } from "react";
import { Modal } from "../../common/modal/Modal";
import { GreenBtn } from "../../common/button/GreenBtn";
import { LevelComp } from "../../common/item/Level";
import * as Styled from "./CourseData.styled";
import mntData from "../../../data/mnt/가리산/가리산_1.json";
import useKakaoShare from "../../../hooks/useKakaoShare";

// 타입 가드 함수 - json 형식
function isMountainData(data: unknown): data is typeof mntData {
  const d = data as typeof mntData;
  return (
    d !== null &&
    typeof d === "object" &&
    typeof d.course_name === "string" &&
    typeof d.mnt_name === "string" &&
    typeof d.total_length_km === "string" &&
    typeof d.max_ele === "number" &&
    typeof d.total_time === "string" &&
    typeof d.start_name === "string" &&
    typeof d.end_name === "string" &&
    typeof d.level === "string"
  );
}

const CourseData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { shareCourse } = useKakaoShare();

  // 타입 검사
  if (!isMountainData(mntData)) {
    console.error("Invalid mountain data structure:", mntData);
    return <div>데이터 형식이 올바르지 않습니다.</div>;
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
