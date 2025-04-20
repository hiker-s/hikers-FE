import * as Styled from "./ReviewList.styled";
import ReviewItem from "../item/ReviewItem";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Filter } from "../filter/Filter";

type ReviewItem = {
  id: number;
  title: string;
  mountainName: string;
  courseName: string;
  level: string;
  isLiked: boolean;
  isWriter: boolean;
};

type ReviewListProps = {
  title: string;
  data: ReviewItem[];
};

export default function ReviewList({ title, data }: ReviewListProps) {
  const [reviewData, setReviewData] = useState(data);

  const onReviewItemClick = (itemId: number) => {
    console.log(`${itemId} 아이템 조회로 이동`);
  };

  const onLikeClick = (itemId: number, e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    console.log(`${itemId} 좋아요 클릭`);
    const updatedLike = reviewData.map((item) => (item.id === itemId ? { ...item, isLiked: !item.isLiked } : item));
    setReviewData(updatedLike);
  };

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * itemsPerPage;
  const currentItems = reviewData.slice(offset, offset + itemsPerPage);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === Math.ceil(reviewData.length / itemsPerPage) - 1;

  return (
    <Styled.ListWrapper>
      <Styled.TitleWrapper>
        <Styled.Title>{title}</Styled.Title>
        <Filter isReview={true} filter={"최신순"} onFilterChange={() => {}} />
      </Styled.TitleWrapper>
      <div>
        <Styled.ReviewWrapper>
          {currentItems.map((item) => (
            <ReviewItem
              id={item.id}
              key={item.id}
              title={item.title}
              mountainName={item.mountainName}
              courseName={item.courseName}
              level={item.level}
              isLiked={item.isLiked}
              isWriter={item.isWriter}
              onReviewItemClick={() => onReviewItemClick(item.id)}
              onLikeClick={(e) => onLikeClick(item.id, e)}
            />
          ))}
        </Styled.ReviewWrapper>
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
              setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(reviewData.length / itemsPerPage) - 1))
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
