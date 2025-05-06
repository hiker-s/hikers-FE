import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

type postValue = {
  title: string;
  content: string;
  level: string;
  courseId: number;
  images: File[];
};

type putValue = {
  title: string;
  content: string;
  level: string;
  courseId: number;
  images: (string | File)[];
};

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
  postReview: async (postValue: postValue) => {
    try {
      const formData = new FormData();
      formData.append("title", postValue.title);
      formData.append("content", postValue.content);
      formData.append("level", postValue.level);
      formData.append("courseId", postValue.courseId.toString());

      postValue.images.forEach((image) => {
        formData.append("images", image);
      });

      const headers = {
        ...getAuthHeader(),
        "Content-Type": "multipart/form-data",
      };

      const response = await axios.post(`${baseURL}/api/review`, formData, { headers });
      // console.log("리뷰 게시글 post 성공:", response);
      return response;
    } catch (error) {
      console.error("리뷰 게시글 post 실패:", error);
      throw error;
    }
  },

  putReview: async (id: number, putValue: putValue) => {
    try {
      const formData = new FormData();
      formData.append("title", putValue.title);
      formData.append("content", putValue.content);
      formData.append("level", putValue.level);
      formData.append("courseId", putValue.courseId.toString());

      // 이미지 URL을 File로 변환하여 추가하는 부분
      const imagePromises = putValue.images.map(async (image) => {
        if (typeof image === "string") {
          // URL을 통해 Blob 객체를 가져옴
          const response = await fetch(`${image}?not-from-cache-please`);
          const blob = await response.blob();
          // Blob을 File 객체로 변환
          const file = new File([blob], "image.jpg", { type: blob.type });
          return file;
        } else {
          // 이미 File 객체인 경우 그대로 사용
          return image;
        }
      });

      // 이미지 변환이 완료된 후 FormData에 추가
      const imageFiles = await Promise.all(imagePromises);
      imageFiles.forEach((file) => {
        formData.append("images", file); // File 객체를 FormData에 추가
      });

      // FormData 내용 확인: entries() 메서드를 사용하여 출력
      // for (const pair of formData.entries()) {
      //   console.log(pair[0] + ": " + pair[1]);
      // }

      const headers = {
        ...getAuthHeader(),
        "Content-Type": "multipart/form-data",
      };
      const response = await axios.put(`${baseURL}/api/review/${id}`, formData, { headers });
      // console.log("리뷰 게시글 put 성공:", response);
      return response;
    } catch (error) {
      console.error("리뷰 게시글 put 실패:", error);
      throw error;
    }
  },

  getReviewList: async (filter: string) => {
    const sortType = filter === "최신순" ? "latest" : "likes";
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/api/review?sortType=${sortType}`, { headers });
      //   console.log("리뷰 글 목록 데이터:", response.data);

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
    // console.log(response);
    alert(response.data.message);
  },
};
