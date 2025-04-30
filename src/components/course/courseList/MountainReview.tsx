import { CardList } from "../../common/card/CardList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { mntReviewApi, MntReviewItem } from "../../../apis/course/courseList/MountainReviewApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const CourseReview = () => {
  const [mntReview, setMntReview] = useState<MntReviewItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("최신순");

  const { mnt_id } = useParams();
  const id = parseInt(mnt_id ?? "", 10);

  useEffect(() => {
    if (isNaN(id)) return;

    const fetchMntReview = async () => {
      try {
        setIsLoading(true);
        const data = await mntReviewApi.getMntReview(id, type);
        setMntReview(data);
      } catch (error) {
        console.error("산 리뷰 가져오기 실패:", error);
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
      ) : mntReview.length > 0 ? (
        <CardList items={mntReview} type={type} onTypeChange={setType} />
      ) : (
        <NoneData>{"아직 산의 리뷰가 없습니다."}</NoneData>
      )}
    </>
  );
};

export default CourseReview;

const NoneData = styled.div`
  width: 21.875rem;
  height: 26rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  color: #3b3b3b;
`;
