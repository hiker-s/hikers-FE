import * as Styled from "./CrewRead.styled";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../../components/common/header/Header";
import { Layout } from "../../../components/common/layout/Layout";
import PostContent from "../../../components/community/read/PostContent";
import PostCreateInfo from "../../../components/community/read/PostCreateInfo";
import PostTitle from "../../../components/community/read/PostTitle";
import { useState } from "react";
import ButtonGroup from "../../../components/community/read/ButtonGroup";

export default function CrewRead() {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate("/community");
  };

  const { crew_id } = useParams();
  const post_id = parseInt(crew_id ?? "", 10);

  const MOCK_CREW_DETAIL = [
    {
      title: "크루 모집 제목입니다.",
      created_at: "2025.04.01",
      writer: "하이커스",
      is_writer: false,
      content: "크루 모집 내용입니다.",
      images: [],
    },
  ];
  const [crewDetailData] = useState(MOCK_CREW_DETAIL);

  return (
    <Layout $margin="6.81rem 0 0 0" $isFooter={true}>
      <Header onClick={handleBackBtn}>크루</Header>
      <Styled.Wrapper>
        <PostTitle title={crewDetailData[0].title} />
        <PostCreateInfo
          is_review={false}
          created_at={crewDetailData[0].created_at}
          writer={crewDetailData[0].writer}
          is_writer={crewDetailData[0].is_writer}
        />
        <PostContent content={crewDetailData[0].content} images={crewDetailData[0].images} />
      </Styled.Wrapper>
      {crewDetailData[0].is_writer && (
        <Styled.ButtonWrapper>
          <ButtonGroup mode="crew" id={post_id} />
        </Styled.ButtonWrapper>
      )}
    </Layout>
  );
}
