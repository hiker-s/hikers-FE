import * as Styled from "./CourseList.styled";
import { useState } from "react";
import CourseItem from "../item/CourseItem";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Filter } from "../filter/Filter";
import { useNavigate } from "react-router-dom";

type CourseItemDataProps = {
  scrap_id?: number;
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

type CourseListProps = {
  title: string;
  course_data: CourseItemDataProps[];
  filter: string;
  onTypeChange: (newFilter: string) => void;
  onScrapToggle: (itemId: number) => void;
};

export default function CourseList({ title, course_data, onScrapToggle, filter, onTypeChange }: CourseListProps) {
  const navigate = useNavigate();
  const onCourseItemClock = (itemId: number) => {
    // console.log(`${itemId} 아이템 조회로 이동`);
    navigate(`/courseInfo/${itemId}`);
  };

  const onScrapClick = (itemId: number, e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    onScrapToggle(itemId);
  };

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * itemsPerPage;
  const currentItems = course_data.slice(offset, offset + itemsPerPage);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === Math.ceil(course_data.length / itemsPerPage) - 1;

  return (
    <Styled.ListWrapper>
      <Styled.TitleWrapper>
        <Styled.Title>{title}</Styled.Title>
        <Filter isReview={false} filter={filter} onTypeChange={onTypeChange} />
      </Styled.TitleWrapper>
      {currentItems.length > 0 ? (
        <div>
          <Styled.CourseWrapper>
            {currentItems.map((item) => {
              if (!item.course) return null;
              return (
                <CourseItem
                  key={item.course.id}
                  course_id={item.course.id}
                  course_name={item.course.course_name}
                  start_name={item.course.start_name}
                  end_name={item.course.end_name}
                  time={item.course.time}
                  level={item.course.level}
                  is_scrapped={item.is_scrapped}
                  onCourseItemClock={() => onCourseItemClock(item.course.id)}
                  onScrapClick={(e) => onScrapClick(item.course.id, e)}
                />
              );
            })}
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
                setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(course_data.length / itemsPerPage) - 1))
              }
              disabled={isLastPage}
            >
              <IoIosArrowForward size="100%" />
            </Styled.PagingBtn>
          </Styled.PaginationWrapper>
        </div>
      ) : (
        <Styled.NoneData>
          {title === "스크랩한 코스" ? "아직 스크랩한 코스가 없습니다." : "아직 등록된 코스가 없습니다."}
        </Styled.NoneData>
      )}
    </Styled.ListWrapper>
  );
}
