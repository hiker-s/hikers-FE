import { CardList } from "../../common/card/CardList";

const CourseReview = () => {
  const dummyCourseReview = [
    {
      id: 1,
      title: "나들이로 딱 !",
      level: "중",
      description: "쉬운 난이도였지만 운동 안해서 등산이라 힘들었다",
      imgUrl: "https://picsum.photos/200/300",
      isLiked: false,
    },
    {
      id: 2,
      title: "나들이로 딱 !",
      level: "하",
      description: "아주아주 쉬웠어 최고 짱짱이야 ~~ 추천 합니다",
      imgUrl: "",
      isLiked: true,
    },
    {
      id: 3,
      title: "나들이로 딱 !",
      level: "상",
      description: "쉬운 난이도였지만 운동 안해서 등산이라 힘들었다",
      imgUrl: "",
      isLiked: true,
    },
  ];

  return (
    <>
      <CardList items={dummyCourseReview} />
    </>
  );
};

export default CourseReview;
