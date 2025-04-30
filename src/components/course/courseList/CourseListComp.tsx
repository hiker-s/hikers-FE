import * as Styled from "./CourseListComp.styled";
import CourseList from "../../common/list/CourseList";
import { useState } from "react";
import { courseListApi } from "../../../apis/course/courseList/CourseListApi";

export default function CourseListComp() {
  const MOCK_COURSE = [
    {
      scrap_id: 1,
      is_scrapped: true,
      course: {
        id: 7,
        course_file_path: "가야산/가야산_5.json",
        course_name: "가파른산길 코스",
        start_name: "가야산성",
        end_name: "가야산 역사신화 공원",
        level: "상",
        time: "1시간 6분",
        mountain_id: 3,
      },
    },
    {
      scrap_id: 2,
      is_scrapped: false,
      course: {
        id: 8,
        course_file_path: "가야산/가야산_1.json",
        course_name: "거친산길 코스",
        start_name: "해인사주차장",
        end_name: "해인사관광안내소",
        level: "상",
        time: "1시간 38분",
        mountain_id: 3,
      },
    },
    {
      scrap_id: 3,
      is_scrapped: false,
      course: {
        id: 5,
        course_file_path: "가야산/가야산_3.json",
        course_name: "꾸준오름 코스",
        start_name: "백운동주차장",
        end_name: "성주가든",
        level: "중",
        time: "1시간 2분",
        mountain_id: 3,
      },
    },
    {
      scrap_id: 4,
      is_scrapped: true,
      course: {
        id: 6,
        course_file_path: "가야산/가야산_4.json",
        course_name: "산중길 코스",
        start_name: "돼지골탐방지원센터주차장",
        end_name: "정상부",
        level: "중",
        time: "0시간 27분",
        mountain_id: 3,
      },
    },
    {
      scrap_id: 5,
      is_scrapped: true,
      course: {
        id: 4,
        course_file_path: "가야산/가야산_2.json",
        course_name: "중턱오름 코스",
        start_name: "청량동탐방안내소",
        end_name: "청량사",
        level: "중",
        time: "0시간 42분",
        mountain_id: 3,
      },
    },
  ];

  const [filter, setFilter] = useState<string>("가나다순");
  const [courseData, setCourseData] = useState(MOCK_COURSE);

  const handleScrapToggle = async (itemId: number) => {
    setCourseData((prevData) =>
      prevData.map((item) => (item.course.id === itemId ? { ...item, is_scrapped: !item.is_scrapped } : item))
    );
    const currentItem = courseData.find((item) => item.course.id === itemId);
    if (!currentItem) return;
    try {
      if (currentItem.is_scrapped) {
        await courseListApi.deleteCourseScrap(itemId);
      } else {
        await courseListApi.postCourseScrap(itemId);
      }
    } catch (error) {
      console.error("스크랩 실패:", error);
    }
  };

  return (
    <Styled.Wrapper>
      <CourseList
        title="코스"
        course_data={MOCK_COURSE}
        filter={filter}
        onScrapToggle={handleScrapToggle}
        onTypeChange={setFilter}
      />
    </Styled.Wrapper>
  );
}
