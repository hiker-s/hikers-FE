import { useEffect, useState } from "react";
import CourseList from "../common/list/CourseList";
import styled from "styled-components";
import { mypageApi, ScrapedCourseListAPI } from "../../apis/mypage/MypageApi";
import { courseListApi } from "../../apis/course/courseList/CourseListApi";

export default function ScrapedList() {
  const [filter, setFilter] = useState<string>("가나다순");
  const [courseData, setCourseData] = useState<ScrapedCourseListAPI[]>([]);

  const fetchScrappedList = async (filter: string) => {
    try {
      const course = await mypageApi.getScrapedCourseList(filter);
      setCourseData(course);
    } catch (error) {
      console.error("스크랩한 코스 목록 데이터 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchScrappedList(filter);
  }, [filter]);

  const handleScrapToggle = async (itemId: number) => {
    setCourseData((prevData) =>
      prevData.map((item) => (item.course.id === itemId ? { ...item, is_scrapped: !item.is_scrapped } : item))
    );
    const currentItem = courseData.find((item) => item.course.id === itemId);
    if (!currentItem) return;
    try {
      if (currentItem.is_scrapped) {
        await courseListApi.deleteCourseScrap(itemId);
        fetchScrappedList(filter);
      }
    } catch (error) {
      console.error("스크랩 실패:", error);
    }
  };

  return (
    <Wrapper>
      <CourseList
        title="스크랩한 코스"
        course_data={courseData}
        onScrapToggle={handleScrapToggle}
        filter={filter}
        onFilterChange={setFilter}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
