import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../../components/common/header/Header";
import { Layout } from "../../../components/common/layout/Layout";
import { useEffect, useState } from "react";
import { mypageApi } from "../../../apis/mypage/MypageApi";
import { reviewApi, ReviewDetail } from "../../../apis/community/ReviewApi";
import { Mountain, reviewSearchApi } from "../../../apis/community/ReviewSearchApi";
import ReviewEditForm from "../../../components/community/review/ReviewEditForm";
import axios from "axios";

export default function ReviewEdit() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<{ nickname: string }[]>([]);

  const { review_id } = useParams();
  const id = parseInt(review_id ?? "", 10);

  const handleBackBtn = () => {
    navigate(-1);
  };

  const today = new Date();
  const date_info = `${today.getFullYear()}.${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${today.getDate().toString().padStart(2, "0")}`;

  const [initialData, setInitialData] = useState<ReviewDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // 산 데이터를 가져오는 로직 추가
  const [mountains, setMountains] = useState<Mountain[]>([]);

  // 서버에서 산 데이터 가져오기
  useEffect(() => {
    const fetchMountains = async () => {
      try {
        const response = await reviewSearchApi.getMnt_course();
        if (response?.result) setMountains(response.result);
      } catch (error) {
        console.error("산 데이터 로딩 실패:", error);
      }
    };
    fetchMountains();
  }, []);

  // 데이터 변환 함수 개선
  const transformToEditData = (data: ReviewDetail) => {
    const targetMountain = mountains.find((m) => m.mnt_name.toLowerCase() === data.mountain_name?.toLowerCase());

    const targetCourse = targetMountain?.courses.find((c) => c.course_name === data.course_name);

    return {
      title: data.title,
      content: data.content,
      level: data.level,
      courseId: targetCourse?.id || 0,
      image_urls: data.image_urls || [],
      mountain_name: data.mountain_name,
      course_name: data.course_name,
    };
  };

  const handleSubmit = async (putValue: {
    title: string;
    content: string;
    level: string;
    courseId: number;
    images: (string | File)[];
    deletedImages?: string[];
  }) => {
    try {
      // console.log("수정할 리뷰 데이터:", putValue);

      await reviewApi.putReview(id, putValue);

      // alert("리뷰가 성공적으로 수정되었습니다.");
      navigate(`/community/review/${id}`); // 상세 페이지로 이동
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 413) {
          alert("사진 업로드 용량이 너무 큽니다. 파일을 줄여주세요.");
        } else {
          console.error("Axios 에러:", error.message);
        }
      } else {
        console.error("리뷰 게시글 수정 실패", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // 리뷰 상세 정보 가져오기
        if (!isNaN(id)) {
          const reviewData = await reviewApi.getReviewDetail(id);
          if (reviewData) {
            setInitialData(reviewData);
          } else {
            alert("해당 리뷰를 찾을 수 없습니다.");
            return;
          }
        }

        // 사용자 정보 가져오기
        const user = await mypageApi.getUserInfo();
        setUserInfo(user);
      } catch (error) {
        console.error("데이터 로딩 실패:", error);
        alert("데이터를 불러오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, navigate]);

  if (isLoading) {
    return (
      <Layout $margin="6.81rem 0 1rem 0" $isFooter={true}>
        <Header onClick={handleBackBtn}>리뷰</Header>
      </Layout>
    );
  }

  return (
    <Layout $margin="6.81rem 0 1rem 0" $isFooter={true}>
      <Header onClick={handleBackBtn}>리뷰</Header>
      {initialData ? (
        <ReviewEditForm
          date_info={date_info}
          nickname={userInfo[0]?.nickname || "Unknown"}
          initialData={transformToEditData(initialData)}
          onSubmit={handleSubmit}
        />
      ) : (
        <div style={{ textAlign: "center", padding: "2rem" }}>리뷰 정보를 불러올 수 없습니다.</div>
      )}
    </Layout>
  );
}
