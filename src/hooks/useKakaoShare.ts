import { KakaoShareParams, KakaoShareContent, KakaoShareButton } from "../types/KakaoInterface";
interface CourseInfo {
  title: string;
  level: string;
  duration: string;
  distance: string;
  elevation: string;
}

const useKakaoShare = () => {
  const shareCourse = (courseInfo: CourseInfo) => {
    if (!window.Kakao) {
      console.error("Kakao SDK가 로드되지 않았습니다.");
      return;
    }

    const shareContent: KakaoShareContent = {
      title: `${courseInfo.title}`,
      description: `난이도: ${courseInfo.level} 소요시간: ${courseInfo.duration}\n코스길이: ${courseInfo.distance}\n고도: ${courseInfo.elevation}`,
      imageUrl: "./assets/logo.svg",
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href,
      },
    };

    const shareButton: KakaoShareButton = {
      title: "코스 자세히 보기",
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href,
      },
    };

    const shareParams: KakaoShareParams = {
      objectType: "feed",
      content: shareContent,
      buttons: [shareButton],
    };

    window.Kakao.Share.sendDefault(shareParams);
  };

  return { shareCourse };
};

export default useKakaoShare;
