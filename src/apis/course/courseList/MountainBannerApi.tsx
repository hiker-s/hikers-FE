import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export type MntBannerItem = {
  id: number;
  mnt_name: string;
  mnt_info: string;
  view_count: number;
};

export const mntBannerApi = {
  getMntBanner: async (mnt_id: number): Promise<MntBannerItem> => {
    const response = await axios.get(`${baseURL}/api/mountain/${mnt_id}`);
    // console.log("산 배너 조회 결과:", response.data);
    return response.data.result;
  },
};
