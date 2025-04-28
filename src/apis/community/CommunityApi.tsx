import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

type postValue = {
  title: string;
  content: string;
  images: File[];
};

export type CrewPost = {
  id: number;
  title: string;
  content: string;
  author_name: string;
  created_at: string;
  image_urls: string[];
};

// 토큰 가져오기
const getToken = () => {
  const token = localStorage.getItem("token");
  console.log("가져온 토큰:", token);
  return token;
};

// 토큰을 헤더에 추가
const getAuthHeader = () => {
  const token = getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  console.log("생성된 헤더:", headers);
  return headers;
};

export const communityApi = {
  postCrew: async (postValue: postValue) => {
    try {
      const formData = new FormData();
      formData.append("title", postValue.title);
      formData.append("content", postValue.content);

      postValue.images.forEach((image) => {
        formData.append("images", image);
      });

      const headers = {
        ...getAuthHeader(),
        "Content-Type": "multipart/form-data",
      };

      const response = await axios.post(`${baseURL}/api/crewpost`, formData, { headers });
      console.log("크루 게시글 post 성공:", response);
      return response;
    } catch (error) {
      console.error("크루 게시글 post 실패:", error);
      throw error;
    }
  },
};
