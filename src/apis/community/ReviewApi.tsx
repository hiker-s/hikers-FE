import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export type ReviewListAPI = {
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

export type ReviewDetail = {
  id: number;
  title: string;
  content: string;
  author_name: string;
  created_at: string;
  image_urls: string[];
  is_writer: boolean;
  like_count: number;
  liked_by_current_user: boolean;
  level: string;
  course_name: string;
  mountain_name: string;
};

// 토큰 가져오기
const getToken = () => {
  const token = localStorage.getItem("token");
  // console.log("가져온 토큰:", token);
  return token;
};

// 토큰을 헤더에 추가
const getAuthHeader = () => {
  const token = getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  // console.log("생성된 헤더:", headers);
  return headers;
};

export const reviewApi = {
  getReviewList: async () => {
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/api/review?sortType=latest`, { headers });
      console.log("리뷰 글 목록 데이터:", response.data);

      if (response.data) {
        return response.data.map((item: ReviewListAPI) => ({
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
      console.error("리뷰 글 목록 가져오기 실패:", error);
      return [];
    }
  },

  getReviewDetail: async (id: number) => {
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/api/review/${id}`, { headers });
      // console.log("리뷰 글 상세 데이터:", response.data);

      if (response.data) {
        const item = response.data;
        return {
          id: item.id,
          title: item.title,
          content: item.content,
          image_urls: item.image_urls,
          created_at: item.created_at,
          author_name: item.author_name,
          is_writer: item.is_writer,
          like_count: item.like_count,
          liked_by_current_user: item.liked_by_current_user,
          level: item.level,
          course_name: item.course_name,
          mountain_name: item.mountain_name,
        };
      }
      return undefined;
    } catch (error) {
      console.error("리뷰 글 상세 데이터 가져오기 실패:", error);
      return undefined;
    }
  },

  postReviewHeart: async (id: number) => {
    const headers = getAuthHeader();
    const response = await axios.post(`${baseURL}/api/review/${id}/like`, {}, { headers });
    // console.log(response);
    alert(response.data.message);
  },

  deleteReviewHeart: async (id: number) => {
    const headers = getAuthHeader();
    const response = await axios.delete(`${baseURL}/api/review/${id}/like`, { headers });
    // console.log(response);
    alert(response.data.message);
  },

  deleteReview: async (id: number) => {
    const headers = getAuthHeader();
    const response = await axios.delete(`${baseURL}/api/review/${id}`, { headers });
    console.log(response);
  },
};
