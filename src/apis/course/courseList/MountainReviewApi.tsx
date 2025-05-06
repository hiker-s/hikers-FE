import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export type MntReviewItem = {
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

export const mntReviewApi = {
  getMntReview: async (mnt_id: number, type: string): Promise<MntReviewItem[]> => {
    const apiSortType = sortTypeMap[type];
    const headers = getAuthHeader();
    const response = await axios.get(`${baseURL}/api/mountain/review/${mnt_id}?sortType=${apiSortType}`, { headers });
    // console.log("산 리뷰 조회 결과:", response.data);
    return response.data.result;
  },
};
