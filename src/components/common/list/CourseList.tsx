import * as Styled from "./CourseList.styled";
import { useState } from "react";
import CourseItem from "../item/CourseItem";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Filter } from "../filter/Filter";

type CourseItemDataProps = {
  course_id: number;
  images?: string;
  course_name: string;
  course_len: string;
  course_time: string;
  level: string;
  is_scrapped: boolean;
};

type CourseListProps = {
  title: string;
  course_data: CourseItemDataProps[];
};

export default function CourseList({ title, course_data }: CourseListProps) {
  const [courseData, setCourseData] = useState<CourseItemDataProps[]>(course_data);

  const onCourseItemClock = (itemId: number) => {
    console.log(`${itemId} 아이템 조회로 이동`);
  };

  const onScrapClick = (itemId: number, e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    console.log(`${itemId} 스크랩 클릭`);
    const updatedScrap = courseData.map((item) =>
      item.course_id === itemId ? { ...item, is_scrapped: !item.is_scrapped } : item
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
              course_id={item.course_id}
              key={item.course_id}
              images={item.images}
              course_name={item.course_name}
              course_len={item.course_len}
              course_time={item.course_time}
              level={item.level}
              is_scrapped={item.is_scrapped}
              onCourseItemClock={() => onCourseItemClock(item.course_id)}
              onScrapClick={(e) => onScrapClick(item.course_id, e)}
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
