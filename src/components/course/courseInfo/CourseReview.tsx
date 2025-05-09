import { CardList } from "../../common/card/CardList";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { courseReviewApi, CourseReviewItem } from "../../../apis/course/courseInfo/CourseReviewApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";
import { GreenBtn } from "../../common/button/GreenBtn";

const CourseReview = () => {
  const navigate = useNavigate();
  const [courseReview, setCourseReview] = useState<CourseReviewItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("최신순");

  const { course_id } = useParams();
  const id = parseInt(course_id ?? "", 10);

  useEffect(() => {
    if (isNaN(id)) return;

    const fetchMntReview = async () => {
      try {
        setIsLoading(true);
        const data = await courseReviewApi.getCourseReview(id, type);
        setCourseReview(data);
      } catch (error) {
        console.error("코스 리뷰 가져오기 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMntReview();
  }, [id, type]);

  const handleReviewClick = () => {
    navigate("/community/review/write");
  };

  return (
    <>
      {isLoading ? (
        <Skeleton width={"100%"} height={"100%"} />
      ) : courseReview.length > 0 ? (
        <CardListWrapper>
          <CardList items={courseReview} type={type} onTypeChange={setType} />
          <CardListBottomWrapper>
            <GreenBtn onClick={handleReviewClick}>리뷰 작성하기</GreenBtn>
          </CardListBottomWrapper>
        </CardListWrapper>
      ) : (
        <>
          <NoneData>{"아직 코스의 리뷰가 없습니다."}</NoneData>
          <CardListBottomWrapper>
            <GreenBtn onClick={handleReviewClick}>리뷰 작성하기</GreenBtn>
          </CardListBottomWrapper>
        </>
      )}
    </>
  );
};

export default CourseReview;

const CardListWrapper = styled.div`
  margin: 6.13rem 0;
`;

const NoneData = styled.div`
  width: 100%;
  height: 26rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  color: #3b3b3b;
`;

const CardListBottomWrapper = styled.div`
  padding: 0 1.25rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1.06rem;
  width: 100%;
`;
