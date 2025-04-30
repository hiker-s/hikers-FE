import * as Styled from "./CourseListComp.styled";
import CourseList from "../../common/list/CourseList";
import { useCallback, useEffect, useState } from "react";
import { CourseListAPI, courseListApi } from "../../../apis/course/courseList/CourseListApi";
import { useParams } from "react-router-dom";

export default function CourseListComp() {
  const { mnt_id } = useParams();
  const id = parseInt(mnt_id ?? "", 10);
  const [filter, setFilter] = useState<string>("가나다순");
  const [courseData, setCourseData] = useState<CourseListAPI[]>([]);

  const fetchCourseList = useCallback(
    async (filter: string) => {
      try {
        const course = await courseListApi.getCourseList(id, filter);
        setCourseData(course);
      } catch (error) {
        console.error("스크랩한 코스 목록 가져오기 실패:", error);
      }
    },
    [id]
  );

  useEffect(() => {
    fetchCourseList(filter);
  }, [filter, fetchCourseList]);

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
        course_data={courseData}
        filter={filter}
        onScrapToggle={handleScrapToggle}
        onTypeChange={setFilter}
      />
    </Styled.Wrapper>
  );
}
