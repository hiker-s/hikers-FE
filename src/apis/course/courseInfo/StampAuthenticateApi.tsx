import axios, { AxiosError } from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export interface StampAuthParams {
  courseId: number;
  latitude: number;
  longitude: number;
}

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

export const stampApi = {
  postStampAuth: async ({
    courseId,
    latitude,
    longitude,
  }: {
    courseId: number;
    latitude: number;
    longitude: number;
  }) => {
    try {
      const headers = getAuthHeader();
      const response = await axios.post(
        `${baseURL}/api/stamp/authenticate`,
        {
          courseId,
          latitude,
          longitude,
        },
        { headers }
      );
      alert(response.data.message);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      const message = axiosError.response?.data?.message ?? "스탬프 인증에 실패했습니다. 다시 시도해주세요.";

      alert(message);
    }
  },
};
