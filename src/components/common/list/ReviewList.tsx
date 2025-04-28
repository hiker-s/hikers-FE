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
  is_writer: boolean;
  like_count?: number;
};

type ReviewListProps = {
  title: string;
  review_data: ReviewItemDataProps[];
  onLikeToggle: (itemId: number) => void;
  filter: string;
  onFilterChange: (newFilter: string) => void;
};

export default function ReviewList({ title, review_data, onLikeToggle, filter, onFilterChange }: ReviewListProps) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const onReviewItemClick = (itemId: number) => {
    navigate(`/community/review/${itemId}`);
  };

  const onLikeClick = (itemId: number, e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    onLikeToggle(itemId);
  };

  const itemsPerPage = 5;
  const offset = currentPage * itemsPerPage;
  const currentItems = review_data.slice(offset, offset + itemsPerPage);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === Math.ceil(review_data.length / itemsPerPage) - 1;

  return (
    <Styled.ListWrapper>
      <Styled.TitleWrapper>
        <Styled.Title>{title}</Styled.Title>
        <Filter isReview={true} filter={filter} onFilterChange={onFilterChange} />
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
              is_writer={item.is_writer}
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
              setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(review_data.length / itemsPerPage) - 1))
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
