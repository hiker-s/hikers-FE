import * as Styled from "./ReviewRead.styled";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../../components/common/header/Header";
import { Layout } from "../../../components/common/layout/Layout";
import PostContent from "../../../components/community/read/PostContent";
import PostCreateInfo from "../../../components/community/read/PostCreateInfo";
import PostTitle from "../../../components/community/read/PostTitle";
import PostReviewInfo from "../../../components/community/read/PostReviewInfo";
import { useState } from "react";
import ButtonGroup from "../../../components/community/read/ButtonGroup";

export default function ReviewRead() {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate("/community");
  };

  const { review_id } = useParams();
  const post_id = parseInt(review_id ?? "", 10);

  const MOCK_REVIEW_DETAIL = [
    {
      title: "리뷰 모집 제목입니다.",
      mnt_name: "인왕산",
      course_name: "인왕산 1코스",
      level: "중",
      created_at: "2025.04.01",
      writer: "하이커스",
      is_writer: true,
      is_liked: false,
      like_count: 100,
      content: "리뷰 모집 내용입니다.",
      images: [],
    },
  ];
  const [reviewDetailData] = useState(MOCK_REVIEW_DETAIL);

  return (
    <Layout $margin="6.81rem 0 0 0" $isFooter={true}>
      <Header onClick={handleBackBtn}>리뷰</Header>
      <Styled.Wrapper>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.31rem" }}>
          <PostTitle title={reviewDetailData[0].title} />
          <PostReviewInfo
            mnt_name={reviewDetailData[0].mnt_name}
            course_name={reviewDetailData[0].course_name}
            level={reviewDetailData[0].level}
          />
        </div>
        <PostCreateInfo
          review_id={post_id}
          is_review={true}
          created_at={reviewDetailData[0].created_at}
          writer={reviewDetailData[0].writer}
          is_writer={reviewDetailData[0].is_writer}
          is_liked={reviewDetailData[0].is_liked}
          like_count={reviewDetailData[0].like_count}
        />
        <PostContent content={reviewDetailData[0].content} images={reviewDetailData[0].images} />
      </Styled.Wrapper>
      {reviewDetailData[0].is_writer && (
        <Styled.ButtonWrapper>
          <ButtonGroup mode="review" id={post_id} />
        </Styled.ButtonWrapper>
      )}
    </Layout>
  );
}
