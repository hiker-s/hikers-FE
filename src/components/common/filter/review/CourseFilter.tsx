import { useState } from "react";
import * as Styled from "./ReviewFilter.styled";
import search from "../../../../assets/icons/search.svg";
import { Course } from "../../../../apis/community/ReviewSearchApi";

interface CourseFilterProps {
  courses: Course[];
  onSelectCourse: (courseId: number) => void;
}

export const CourseFilter = ({ courses, onSelectCourse }: CourseFilterProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = courses.filter((course) =>
    course.course_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    onSelectCourse(course.id);
    setIsOpen(false);
  };

  return (
    <Styled.Filter>
      <Styled.Input
        placeholder="등반한 코스 이름을 입력해주세요"
        value={selectedCourse ? selectedCourse.course_name : searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsOpen(true);
        }}
        onClick={() => setIsOpen(!isOpen)}
      />
      <Styled.SearchImg src={search} alt="search" />
      <Styled.DropdownWrapper $isOpen={isOpen}>
        {filteredCourses.map((course) => (
          <Styled.DropdownItem key={course.id} onClick={() => handleSelectCourse(course)}>
            {course.course_name}
          </Styled.DropdownItem>
        ))}
      </Styled.DropdownWrapper>
    </Styled.Filter>
  );
};
