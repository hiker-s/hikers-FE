import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../../components/common/header/Header";
import { Layout } from "../../../components/common/layout/Layout";
import PostContent from "../../../components/community/read/PostContent";
import PostCreateInfo from "../../../components/community/read/PostCreateInfo";
import PostTitle from "../../../components/community/read/PostTitle";
import { useEffect, useState } from "react";
import ButtonGroup from "../../../components/community/read/ButtonGroup";
import { crewApi, CrewDetail } from "../../../apis/community/CrewApi";

export default function CrewRead() {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(-1);
  };

  const { crew_id } = useParams();
  const id = parseInt(crew_id ?? "", 10);

  const [crewDetailData, setCrewDetailData] = useState<CrewDetail>();

  useEffect(() => {
    const fetchCrewDetail = async (id: number) => {
      try {
        const crew = await crewApi.getCrewDetail(id);
        setCrewDetailData(crew);
      } catch (error) {
        console.error("크루 글 상세 데이터 가져오기 실패:", error);
      }
    };

    if (!isNaN(id)) {
      fetchCrewDetail(id);
    }
  }, [id]);

  return (
    <Layout $margin="6.81rem 0 0 0" $isFooter={true}>
      <Header onClick={handleBackBtn}>크루</Header>
      <Wrapper>
        {crewDetailData && (
          <>
            <PostTitle title={crewDetailData.title} />
            <PostCreateInfo
              is_review={false}
              created_at={crewDetailData.created_at}
              author_name={crewDetailData.author_name}
              is_writer={crewDetailData.is_writer}
            />
            <div style={{ whiteSpace: "pre-line" }}>
              <PostContent content={crewDetailData.content} image_urls={crewDetailData.image_urls} />
            </div>
            {crewDetailData.is_writer && (
              <ButtonWrapper>
                <ButtonGroup mode="crew" id={id} />
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
