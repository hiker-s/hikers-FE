import * as Styled from "./ReviewList.styled";
import ReviewItem from "../common/item/ReviewItem";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

type ReviewListProps = {
  title: string;
};

export default function ReviewList({ title }: ReviewListProps) {
  const MOCK_REVIEW = [
    {
      id: 1,
      title: "인왕산 껌이네",
      mountainName: "인왕산",
      courseName: "인왕산1코스인왕산1코스인왕산1코스",
      level: "상",
      isLiked: true,
      isWriter: false,
    },
    {
      id: 2,
      title: "북한산 껌이네",
      mountainName: "북한산",
      courseName: "북한산3코스",
      level: "중",
      isLiked: false,
      isWriter: true,
    },
    {
      id: 3,
      title: "관악산 껌이네",
      mountainName: "관악산",
      courseName: "관악산5코스",
      level: "하",
      isLiked: true,
      isWriter: true,
    },
  ];

  const [reviewData, setReviewData] = useState(MOCK_REVIEW);

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
        <div> 정렬컴포넌트 넣기</div>
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
