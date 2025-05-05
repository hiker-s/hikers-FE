import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export interface Course {
  id: number;
  mountain_id: number;
  course_file_path: string;
  course_name: string;
}

export interface Mountain {
  id: number;
  mnt_name: string;
  view_count: number;
  courses: Course[];
}

export interface MntCourseResponse {
  stats: number;
  message: string;
  result: Mountain[];
}

export const reviewSearchApi = {
  getMnt_course: async (): Promise<MntCourseResponse> => {
    const response = await axios.get(`${baseURL}/api/mountain/list`);
    //  console.log("산/코스 전체 조회 결과:", response.data);
    return response.data;
  },
};
