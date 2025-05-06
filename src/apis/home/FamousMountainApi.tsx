import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export type MountainRankItem = {
  id: number;
  rank: number;
  mountain_name: string;
  // mnt_status: string; // 백엔드 기능 구현 X
  view_count: number;
};

export const famousMountainApi = {
  getMountainRank: async (): Promise<MountainRankItem[]> => {
    const response = await axios.get(`${baseURL}/api/mountain/rank`);
    // console.log("인기 산 조회 결과:", response.data);
    return response.data.result;
  },
};
