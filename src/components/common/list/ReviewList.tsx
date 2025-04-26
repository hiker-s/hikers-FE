import * as Styled from "./ReviewList.styled";
import ReviewItem from "../item/ReviewItem";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Filter } from "../filter/Filter";
import { useNavigate } from "react-router-dom";

type ReviewItemDataProps = {
  id: number;
  image_urls?: string[];
  title: string;
  mountain_name: string;
  course_name: string;
  level: string;
  liked_by_current_user?: boolean;
  writer: boolean;
  like_count?: number;
};

type ReviewListProps = {
  title: string;
  review_data: ReviewItemDataProps[];
};

export default function ReviewList({ title, review_data }: ReviewListProps) {
  const navigate = useNavigate();
  const [reviewData, setReviewData] = useState<ReviewItemDataProps[]>(review_data);

  const onReviewItemClick = (itemId: number) => {
    navigate(`review/${itemId}`);
  };

  const onLikeClick = (itemId: number, e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    console.log(`${itemId} 좋아요 클릭`);
    const updatedLike = reviewData.map((item) =>
      item.id === itemId ? { ...item, liked_by_current_user: !item.liked_by_current_user } : item
    );
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
              image_urls={item.image_urls}
              title={item.title}
              mountain_name={item.mountain_name}
              course_name={item.course_name}
              level={item.level}
              liked_by_current_user={item.liked_by_current_user}
              writer={item.writer}
              like_count={item.like_count}
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
