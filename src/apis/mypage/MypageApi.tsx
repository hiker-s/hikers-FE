import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export type UserInfo = {
  userId: string;
  nickname: string;
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
      console.log("유저 정보 데이터:", response.data);

      if (response.data.result) {
        return [response.data.result];
      }
      return [];
    } catch (error) {
      console.error("유저 정보 받아오기 실패:", error);
      return [];
    }
  },
};
