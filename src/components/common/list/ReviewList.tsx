import * as Styled from "./ReviewList.styled";
import ReviewItem from "../item/ReviewItem";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Filter } from "../filter/Filter";
import { useNavigate } from "react-router-dom";

type ReviewItemDataProps = {
  review_id: number;
  images?: string;
  title: string;
  mnt_name: string;
  course_name: string;
  level: string;
  is_liked?: boolean;
  is_writer: boolean;
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
    console.log(`${itemId} 아이템 조회로 이동`);
  };

  const onLikeClick = (itemId: number, e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    console.log(`${itemId} 좋아요 클릭`);
    const updatedLike = reviewData.map((item) =>
      item.review_id === itemId ? { ...item, is_liked: !item.is_liked } : item
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
              review_id={item.review_id}
              key={item.review_id}
              images={item.images}
              title={item.title}
              mnt_name={item.mnt_name}
              course_name={item.course_name}
              level={item.level}
              is_liked={item.is_liked}
              is_writer={item.is_writer}
              like_count={item.like_count}
              onReviewItemClick={() => onReviewItemClick(item.review_id)}
              onLikeClick={(e) => onLikeClick(item.review_id, e)}
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
