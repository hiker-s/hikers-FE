import { CardList } from "../../common/card/CardList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { courseReviewApi, CourseReviewItem } from "../../../apis/course/courseInfo/CourseReviewApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const CourseReview = () => {
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

  return (
    <>
      {isLoading ? (
        <Skeleton width={"100%"} height={"100%"} />
      ) : courseReview.length > 0 ? (
        <CardList items={courseReview} type={type} onTypeChange={setType} />
      ) : (
        <NoneData>{"아직 코스의 리뷰가 없습니다."}</NoneData>
      )}
    </>
  );
};

export default CourseReview;

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
