import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

type postValue = {
  title: string;
  content: string;
  images: File[];
};

export type CrewList = {
  id: number;
  title: string;
  content: string;
  image_urls: string[];
};

export type CrewDetail = {
  id: number;
  title: string;
  content: string;
  author_name: string;
  created_at: string;
  image_urls: string[];
  is_writer: boolean;
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

  getCrewList: async () => {
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/api/crewpost`, { headers });
      console.log("크루 글 목록 데이터:", response.data);

      if (response.data) {
        return response.data.map((item: CrewList) => ({
          id: item.id,
          title: item.title,
          content: item.content,
          image_urls: item.image_urls,
        }));
      }
      return [];
    } catch (error) {
      console.error("크루 글 목록 가져오기 실패:", error);
      return [];
    }
  },

  getCrewDetail: async (id: number) => {
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/api/crewpost/${id}`, { headers });
      // console.log("크루 글 상세 데이터:", response.data);

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
        };
      }
      return undefined;
    } catch (error) {
      console.error("크루 글 상세 데이터 가져오기 실패:", error);
      return undefined;
    }
  },
};
