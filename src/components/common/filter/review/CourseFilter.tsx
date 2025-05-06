import { useState, useEffect } from "react";
import * as Styled from "./ReviewFilter.styled";
import search from "@/assets//icons/search.svg";
import { Course } from "../../../../apis/community/ReviewSearchApi";

type CourseFilterProps = {
  courses: Course[];
  initialCourseName?: string;
  onSelectCourse: (courseId: number) => void;
};

export const CourseFilter = ({ courses, initialCourseName, onSelectCourse }: CourseFilterProps) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!courses || courses.length === 0) return;

    // 이름으로 초기 코스 찾기
    const targetCourse = courses.find(
      (c) =>
        c.course_name === initialCourseName && (!selectedCourse || selectedCourse.course_name! == initialCourseName)
    );

    if (targetCourse) {
      setSelectedCourse(targetCourse);
      setSearchTerm(targetCourse.course_name);
      onSelectCourse(targetCourse.id);
    }
  }, [courses, initialCourseName, onSelectCourse, selectedCourse]);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsOpen(true);
    if (selectedCourse) setSelectedCourse(null);
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    setSearchTerm(course.course_name);
    setIsOpen(false);
    onSelectCourse(course.id);
  };

  const filteredCourses = courses.filter((course) =>
    course.course_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Styled.Filter>
      <Styled.Input
        placeholder="등반한 코스 이름을 입력해주세요"
        value={searchTerm}
        onChange={handleChangeSearch}
        onFocus={() => setIsOpen(true)}
      />
      <Styled.SearchImg src={search} alt="search" />

      <Styled.DropdownWrapper $isOpen={isOpen} $isMountain={false}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Styled.DropdownItem
              key={course.id}
              onClick={() => handleSelectCourse(course)}
              // $selected={course.id === selectedCourse?.id}
            >
              {course.course_name}
            </Styled.DropdownItem>
          ))
        ) : (
          <Styled.DropdownItem>검색 결과가 없습니다</Styled.DropdownItem>
        )}
      </Styled.DropdownWrapper>
    </Styled.Filter>
  );
};
