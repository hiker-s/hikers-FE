import { CardList } from "../../common/card/CardList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { mntReviewApi, MntReviewItem } from "../../../apis/course/courseList/MountainReviewApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
        <Skeleton width={"100%"} height={"11.100%"} />
      ) : (
        <CardList items={mntReview} type={type} onTypeChange={setType} />
      )}
    </>
  );
};

export default CourseReview;
