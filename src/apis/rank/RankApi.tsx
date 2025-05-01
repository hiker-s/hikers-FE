import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export type Rankers = {
  stats: number;
  message: string;
  result: {
    myRank: {
      stamp: number;
      name: string;
      rank: number;
      id: number;
    };
    ranker: Array<{
      stampCount: number;
      name: string;
      totalStampScore: number;
      rank: number;
      id: number;
    }>;
  };
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

export const rankApi = {
  getRankers: async (): Promise<Rankers["result"]> => {
    const headers = getAuthHeader();
    const response = await axios.get(`${baseURL}/api/rank`, { headers });
    console.log("랭킹 조회 결과:", response.data);
    return response.data.result;
  },
};
