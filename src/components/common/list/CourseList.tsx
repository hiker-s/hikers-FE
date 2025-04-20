import * as Styled from "./CourseList.styled";
import { useState } from "react";
import CourseItem from "../item/CourseItem";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Filter } from "../filter/Filter";

type CourseItem = {
  id: number;
  courseName: string;
  courseRoute: string;
  totalDuration: string;
  level: string;
  isScraped: boolean;
};

type CourseListProps = {
  title: string;
  data: CourseItem[];
};

export default function CourseList({ title, data }: CourseListProps) {
  const [courseData, setCourseData] = useState(data);

  const onCourseItemClock = (itemId: number) => {
    console.log(`${itemId} 아이템 조회로 이동`);
  };

  const onScrapClick = (itemId: number, e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    console.log(`${itemId} 스크랩 클릭`);
    const updatedScrap = courseData.map((item) =>
      item.id === itemId ? { ...item, isScraped: !item.isScraped } : item
    );
    setCourseData(updatedScrap);
  };

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * itemsPerPage;
  const currentItems = courseData.slice(offset, offset + itemsPerPage);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === Math.ceil(courseData.length / itemsPerPage) - 1;

  return (
    <Styled.ListWrapper>
      <Styled.TitleWrapper>
        <Styled.Title>{title}</Styled.Title>
        <Filter isReview={false} filter={"가나다순"} onFilterChange={() => {}} />
      </Styled.TitleWrapper>
      <div>
        <Styled.CourseWrapper>
          {currentItems.map((item) => (
            <CourseItem
              id={item.id}
              key={item.id}
              courseName={item.courseName}
              courseRoute={item.courseRoute}
              totalDuration={item.totalDuration}
              level={item.level}
              isScraped={item.isScraped}
              onCourseItemClock={() => onCourseItemClock(item.id)}
              onScrapClick={(e) => onScrapClick(item.id, e)}
            />
          ))}
        </Styled.CourseWrapper>
        <Styled.PaginationWrapper>
          <Styled.PagingBtn
            onClick={() => !isFirstPage && setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={isFirstPage}
          >
            <IoIosArrowBack size="100%" />
          </Styled.PagingBtn>
          <Styled.PageNumber>{currentPage + 1}</Styled.PageNumber>
          <Styled.PagingBtn
            onClick={() =>
              !isLastPage &&
              setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(courseData.length / itemsPerPage) - 1))
            }
            disabled={isLastPage}
          >
            <IoIosArrowForward size="100%" />
          </Styled.PagingBtn>
        </Styled.PaginationWrapper>
      </div>
    </Styled.ListWrapper>
  );
}
