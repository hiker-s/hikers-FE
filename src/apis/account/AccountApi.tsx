import axios, { AxiosError } from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export type formValue = {
  user_id: string;
  passwd: string;
  nickname?: string;
  email?: string;
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
  // console.log("생성된 헤더:", headers);
  return headers;
};

export const accountApi = {
  postLogin: async (formValue: formValue) => {
    try {
      const response = await axios.post(`${baseURL}/api/login`, formValue);
      // console.log(response);
      localStorage.clear();
      const token = response.data["token"];
      if (token) {
        localStorage.setItem("token", token);
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      const message = axiosError.response?.data?.message ?? "아이디 또는 비밀번호를 확인해주세요.";
      alert(message);
      throw error;
    }
  },

  postSignup: async (formValue: formValue) => {
    await axios.post(`${baseURL}/api/signup`, formValue);
  },

  postLogout: async () => {
    await axios.post(`${baseURL}/api/logout`);
    localStorage.clear();
  },
  postDeleteUser: async () => {
    const headers = getAuthHeader();
    await axios.delete(`${baseURL}/api/user`, { headers });
    localStorage.clear();
  },
};
