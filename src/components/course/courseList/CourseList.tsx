import { useState } from "react";
import CourseItem from "../../common/item/CourseItem";
import * as Styled from "./CourseList.styled";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Filter } from "../../common/filter/Filter";

type CourseListProps = {
  title: string;
};

export default function CourseList({ title }: CourseListProps) {
  const MOCK_COURSE = [
    {
      id: 1,
      courseName: "인왕산1코스",
      courseRoute: "돈의문터 - 창의문",
      totalDuration: "1시간 50분",
      level: "하",
      isScraped: true,
    },
    {
      id: 2,
      courseName: "인왕산1코스",
      courseRoute: "돈의문터 - 창의문",
      totalDuration: "1시간 50분",
      level: "상",
      isScraped: false,
    },
    {
      id: 3,
      courseName: "인왕산1코스",
      courseRoute: "돈의문터 - 창의문",
      totalDuration: "1시간 50분",
      level: "중",
      isScraped: true,
    },
    {
      id: 4,
      courseName: "인왕산1코스",
      courseRoute: "돈의문터 - 창의문",
      totalDuration: "1시간 50분",
      level: "상",
      isScraped: false,
    },
    {
      id: 5,
      courseName: "인왕산1코스",
      courseRoute: "돈의문터 - 창의문",
      totalDuration: "1시간 50분",
      level: "중",
      isScraped: true,
    },
    {
      id: 6,
      courseName: "인왕산1코스",
      courseRoute: "돈의문터 - 창의문",
      totalDuration: "1시간 50분",
      level: "상",
      isScraped: false,
    },
    {
      id: 7,
      courseName: "인왕산1코스",
      courseRoute: "돈의문터 - 창의문",
      totalDuration: "1시간 50분",
      level: "중",
      isScraped: true,
    },
  ];

  const [courseData, setCourseData] = useState(MOCK_COURSE);

  const onCourseItemClock = (itemId: number) => {
    console.log(`${itemId} 아이템 조회로 이동`);
  };

  const onScrapClick = (itemId: number) => {
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
              onScrapClick={() => onScrapClick(item.id)}
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
