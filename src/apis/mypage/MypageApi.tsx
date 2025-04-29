import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export type MyReviewListAPI = {
  id: number;
  image_urls?: string[];
  title: string;
  mountain_name: string;
  course_name: string;
  level: string;
  liked_by_current_user?: boolean;
  is_writer: boolean;
  like_count?: number;
};

export type LikedReviewListAPI = {
  id: number;
  image_urls?: string[];
  title: string;
  mountain_name: string;
  course_name: string;
  level: string;
  liked_by_current_user?: boolean;
  is_writer: boolean;
  like_count?: number;
};

export type UserInfo = {
  userId: string;
  nickname: string;
};

export type MyStampAPI = {
  mountain_name: string;
  stamp_id: number;
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

export const mypageApi = {
  getUserInfo: async () => {
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/api/profile`, { headers });
      // console.log("유저 정보 데이터:", response.data);

      if (response.data.result) {
        return [response.data.result];
      }
      return [];
    } catch (error) {
      console.error("유저 정보 받아오기 실패:", error);
      return [];
    }
  },

  getMyStamp: async () => {
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/api/stamp/mine`, { headers });
      // console.log("내 스탬프 조회 데이터:", response.data);

      if (response.data) {
        return response.data.map((item: MyStampAPI) => ({
          id: item.stamp_id,
          mountain_name: item.mountain_name,
        }));
      }
      return [];
    } catch (error) {
      console.error("내 스탬프 조회 실패:", error);
      return [];
    }
  },

  getMyReviewList: async (filter: string) => {
    const sortType = filter === "최신순" ? "latest" : "likes";
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/api/review/mine?sortType=${sortType}`, { headers });
      // console.log("내가 쓴 리뷰 글 목록 데이터:", response.data.result);

      if (response.data) {
        return response.data.result.map((item: MyReviewListAPI) => ({
          id: item.id,
          title: item.title,
          image_urls: item.image_urls,
          is_writer: item.is_writer,
          like_count: item.like_count,
          liked_by_current_user: item.liked_by_current_user,
          level: item.level,
          mountain_name: item.mountain_name,
          course_name: item.course_name,
        }));
      }
      return [];
    } catch (error) {
      console.error("내가 쓴 리뷰 글 목록 가져오기 실패:", error);
      return [];
    }
  },

  getLikedReviewList: async (filter: string) => {
    const sortType = filter === "최신순" ? "latest" : "likes";
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/api/review/liked?sortType=${sortType}`, { headers });
      // console.log("좋아요한 리뷰 글 목록 데이터:", response.data);

      if (response.data) {
        return response.data.result.map((item: LikedReviewListAPI) => ({
          id: item.id,
          title: item.title,
          image_urls: item.image_urls,
          is_writer: item.is_writer,
          like_count: item.like_count,
          liked_by_current_user: item.liked_by_current_user,
          level: item.level,
          mountain_name: item.mountain_name,
          course_name: item.course_name,
        }));
      }
      return [];
    } catch (error) {
      console.error("좋아요한 리뷰 글 목록 가져오기 실패:", error);
      return [];
    }
  },
};
