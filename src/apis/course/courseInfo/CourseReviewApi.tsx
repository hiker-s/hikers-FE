import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export type CourseReviewItem = {
  id: number;
  title: string;
  level: string;
  description: string;
  imgUrl: string;
  isLiked: boolean;
};

// 토큰 가져오기
const getToken = () => {
  const token = localStorage.getItem("token");
  //   console.log("가져온 토큰:", token);
  return token;
};

// 토큰을 헤더에 추가
const getAuthHeader = () => {
  const token = getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  //   console.log("생성된 헤더:", headers);
  return headers;
};

// filter 값 한글 → 영문 매핑 로직
const sortTypeMap: Record<string, "latest" | "likes"> = {
  최신순: "latest",
  인기순: "likes",
};

export const courseReviewApi = {
  getCourseReview: async (course_id: number, type: string): Promise<CourseReviewItem[]> => {
    const apiSortType = sortTypeMap[type];
    const headers = getAuthHeader();
    const response = await axios.get(`${baseURL}/api/course/review/${course_id}?sortType=${apiSortType}`, { headers });
    console.log("코스 리뷰 조회 결과:", response.data);
    return response.data.result;
  },
};
