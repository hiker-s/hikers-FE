import { useState, useEffect } from "react";
import * as Styled from "./ReviewFilter.styled";
import search from "../../../../assets/icons/search.svg";
import { Course } from "../../../../apis/community/ReviewSearchApi";

type CourseFilterProps = {
  courses: Course[]; // ReviewForm에서 내려주는 필터된 코스 리스트
  onSelectCourse: (courseId: number) => void;
};

export const CourseFilter = ({ courses, onSelectCourse }: CourseFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // courses가 바뀌면 선택된 코스를 초기화 (산이 바뀌었을 때)
  useEffect(() => {
    setSelectedCourse(null);
    setSearchTerm(""); // 검색창도 초기화
  }, [courses]);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsOpen(true);
    setSelectedCourse(null); // 검색 중일 때 선택 상태 제거
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    setSearchTerm(""); // 검색어 초기화 (선택한 이름이 표시되므로)
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
        value={selectedCourse ? selectedCourse.course_name : searchTerm}
        onChange={handleChangeSearch}
        onFocus={() => setIsOpen(true)}
      />
      <Styled.SearchImg src={search} alt="search" />

      <Styled.DropdownWrapper $isOpen={isOpen}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Styled.DropdownItem key={course.id} onClick={() => handleSelectCourse(course)}>
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
