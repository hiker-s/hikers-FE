import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

export type CourseListAPI = {
  is_scrapped: boolean;
  course: {
    id: number;
    course_file_path: string;
    course_name: string;
    start_name: string;
    end_name: string;
    level: string;
    time: string;
    mountain_id: number;
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

export const courseListApi = {
  getCourseList: async (mnt_id: number, filter: string) => {
    const sortMap: Record<string, string> = {
      가나다순: "abc",
      난이도순: "level",
      인기순: "review",
      스크랩순: "scrap",
    };
    const sortType = sortMap[filter] || "NAME";
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/api/course/${mnt_id}?sortType=${sortType}`, { headers });
      // console.log("코스 목록 데이터:", response.data.result);

      return response.data.result.map((item: CourseListAPI) => ({
        is_scrapped: item.is_scrapped,
        course: {
          id: item.course.id,
          course_file_path: item.course.course_file_path,
          course_name: item.course.course_name,
          start_name: item.course.start_name,
          end_name: item.course.end_name,
          level: item.course.level,
          time: item.course.time,
          mountain_id: item.course.mountain_id,
        },
      }));
    } catch (error) {
      console.error("코스 목록 가져오기 실패:", error);
      return [];
    }
  },

  postCourseScrap: async (id: number) => {
    const headers = getAuthHeader();
    const response = await axios.post(`${baseURL}/api/scrap?course_id=${id}`, {}, { headers });
    // console.log(response);
    alert(response.data.message);
  },

  deleteCourseScrap: async (id: number) => {
    const headers = getAuthHeader();
    const response = await axios.delete(`${baseURL}/api/scrap?course_id=${id}`, { headers });
    // console.log(response);
    alert(response.data.message);
  },
};
