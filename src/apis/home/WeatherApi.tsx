import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export type WeatherData = {
  TEMP: string; // 기온
  SENSIBLE_TEMP: string; // 체감온도
  MAX_TEMP: string; // 최고온도
  MIN_TEMP: string; // 최저온도
  PM10_INDEX: string; // 미세먼지지표
  PM10: string; // 미세먼지농도
  PM25_INDEX: string; // 초미세먼지지표
  PM25: string; // 초미세먼지농도
  UV_INDEX: string; // 자외선지수
  RAIN_CHANCE: string; // 강수확률
};

export const weatherApi = {
  getWeather: async (): Promise<WeatherData> => {
    const response = await axios.get(`${baseURL}/api/weather`);
    // console.log("날씨 조회 결과:", response.data);
    return response.data;
  },
};
