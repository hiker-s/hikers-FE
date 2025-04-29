import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

type MountainRankItem = {
  id: number;
  mnt_name: string;
  // mnt_rank: number;
  // mnt_status: string;
  view_count: number;
};

export const famousMountainApi = {
  getMountainRank: async (): Promise<MountainRankItem[]> => {
    const response = await axios.get(`${baseURL}/api/mountain/rank`);
    console.log("인기 산 조회 결과:", response.data);
    return response.data.result;
  },
};
