import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../../components/common/header/Header";
import { Layout } from "../../../components/common/layout/Layout";
import PostContent from "../../../components/community/read/PostContent";
import PostCreateInfo from "../../../components/community/read/PostCreateInfo";
import PostTitle from "../../../components/community/read/PostTitle";
import PostReviewInfo from "../../../components/community/read/PostReviewInfo";
import { useEffect, useState } from "react";
import ButtonGroup from "../../../components/community/read/ButtonGroup";
import { reviewApi, ReviewDetail } from "../../../apis/community/ReviewApi";

export default function ReviewRead() {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(-1);
  };

  const { review_id } = useParams();
  const id = parseInt(review_id ?? "", 10);

  const [reviewDetailData, setReviewDetailData] = useState<ReviewDetail>();

  useEffect(() => {
    const fetchCrewDetail = async (id: number) => {
      try {
        const review = await reviewApi.getReviewDetail(id);
        setReviewDetailData(review);
      } catch (error) {
        console.error("크루 글 상세 데이터 가져오기 실패:", error);
      }
    };

    if (!isNaN(id)) {
      fetchCrewDetail(id);
    }
  }, [id]);

  return (
    <Layout $margin="6.81rem 0 3rem 0" $isFooter={true}>
      <Header onClick={handleBackBtn}>리뷰</Header>
      <Wrapper>
        {reviewDetailData && (
          <>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.31rem" }}>
              <PostTitle title={reviewDetailData.title} />
              <PostReviewInfo
                mountain_name={reviewDetailData.mountain_name}
                course_name={reviewDetailData.course_name}
                level={reviewDetailData.level}
              />
            </div>
            <PostCreateInfo
              review_id={id}
              is_review={true}
              created_at={reviewDetailData.created_at}
              author_name={reviewDetailData.author_name}
              is_writer={reviewDetailData.is_writer}
              liked_by_current_user={reviewDetailData.liked_by_current_user}
              like_count={reviewDetailData.like_count}
            />
            <PostContent content={reviewDetailData.content} image_urls={reviewDetailData.image_urls} />
            {reviewDetailData.is_writer && (
              <ButtonWrapper>
                <ButtonGroup mode="review" id={id} />
              </ButtonWrapper>
            )}
          </>
        )}
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: calc(100vh - 18%);
`;
