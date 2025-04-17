import { useState } from "react";
import { Modal } from "../../common/modal/Modal";
import { GreenBtn } from "../../common/button/GreenBtn";
import { LevelComp } from "../../common/item/Level";
import * as Styled from "./CourseData.styled";

interface KakaoShareButton {
  title: string;
  link: {
    mobileWebUrl: string;
    webUrl: string;
  };
}

interface KakaoShareContent {
  title: string;
  description: string;
  imageUrl: string;
  link: {
    mobileWebUrl: string;
    webUrl: string;
  };
}

interface KakaoShareParams {
  objectType: string;
  content: KakaoShareContent;
  buttons: KakaoShareButton[];
}

interface KakaoShare {
  sendDefault: (params: KakaoShareParams) => void;
}

interface KakaoSDK {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Share: KakaoShare;
}

declare global {
  interface Window {
    Kakao: KakaoSDK;
  }
}

const CourseData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dummyCourse = {
    mountainName: "인왕산",
    sections: [
      {
        id: 1,
        name: "돈의문터 - 창의문",
        startName: "돈의문터",
        endName: "창의문",
        level: "중",
        coordinates: [
          { lat: 37.571, lng: 126.969 },
          { lat: 37.577, lng: 126.974 },
        ],
        distance: 1.8, // km
        elevation: 328, // m
        duration: 110, // minutes
      },
    ],
  };

  const formatTime = (minutes: number) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h > 0 ? `${h}시간 ` : ""}${m}분`;
  };

  const totalDistance = dummyCourse.sections.reduce((acc, cur) => acc + cur.distance, 0);
  const totalElevation = dummyCourse.sections.reduce((acc, cur) => acc + cur.elevation, 0);
  const totalDuration = dummyCourse.sections.reduce((acc, cur) => acc + cur.duration, 0);

  const firstSection = dummyCourse.sections[0];
  const lastSection = dummyCourse.sections[dummyCourse.sections.length - 1];
  const courseName = `${firstSection.startName} ⟷ ${lastSection.endName}`;
  const courseTitle = `${dummyCourse.mountainName} ${dummyCourse.sections[0].name}`;
  const courseLevel = dummyCourse.sections[0].level;

  const handleKakaoShare = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: `${courseTitle} `,
          description: `난이도: ${courseLevel} 소요시간: ${formatTime(totalDuration)}\n코스길이: ${totalDistance.toFixed(1)}km\n고도: ${totalElevation}m`,
          imageUrl: "./assets/logo.svg",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "코스 자세히 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
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
          <Styled.StartToEnd>{courseName}</Styled.StartToEnd>
          <Styled.CourseStats>
            <Styled.CourseStatsItem>
              <span style={{ color: "#A4A4A4" }}>소요시간</span> {formatTime(totalDuration)}
            </Styled.CourseStatsItem>
            <Styled.CourseStatsItem>
              <span style={{ color: "#A4A4A4" }}>코스길이</span> {totalDistance.toFixed(1)}km
            </Styled.CourseStatsItem>
            <Styled.CourseStatsItem>
              <span style={{ color: "#A4A4A4" }}>고도</span> {totalElevation}m
            </Styled.CourseStatsItem>
          </Styled.CourseStats>
        </Styled.CourseMeta>
      </Styled.Wrapper>
    </>
  );
};

export default CourseData;
