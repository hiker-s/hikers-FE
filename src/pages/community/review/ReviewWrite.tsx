import { useNavigate } from "react-router-dom";
import { Header } from "../../../components/common/header/Header";
import { Layout } from "../../../components/common/layout/Layout";
import ReviewForm from "../../../components/community/review/ReviewForm";
import { reviewApi } from "../../../apis/community/ReviewApi";
import { useEffect, useState } from "react";
import { mypageApi } from "../../../apis/mypage/MypageApi";

export default function ReviewWrite() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<{ nickname: string }[]>([]);

  const handleBackBtn = () => {
    navigate("/community");
  };

  const today = new Date();
  const date_info = `${today.getFullYear()}.${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${today.getDate().toString().padStart(2, "0")}`;

  const handleSubmit = async (postValue: {
    title: string;
    content: string;
    level: string;
    courseId: number;
    images: File[];
  }) => {
    try {
      await reviewApi.postReview(postValue);
      //   console.log("postValue:", postValue);
      navigate("/community");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = await mypageApi.getUserInfo();
        setUserInfo(user);
      } catch (error) {
        console.error("유저 정보 받아오기 실패:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <Layout $margin="6.81rem 0 1rem 0" $isFooter={true}>
      <Header onClick={handleBackBtn}>리뷰</Header>
      <ReviewForm date_info={date_info} nickname={userInfo[0]?.nickname} onSubmit={handleSubmit} />
    </Layout>
  );
}
