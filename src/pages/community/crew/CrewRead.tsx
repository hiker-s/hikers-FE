import styled from "styled-components";
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
      author_name: "하이커스",
      is_writer: true,
      content: "크루 모집 내용입니다.",
      image_urls: [
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjBfMjky%2FMDAxNzI5NDA1OTcwNzEz.vgbx7hvDEulsx48OE4T8wwTH_bnAX5CNBU_Y2WiEkfgg.D3M27ocuqJld1BaoXaurFg8JuoC3F1vD9o2vxjY6w0sg.JPEG%2FKakaoTalk_20241020_151047702_15.jpg&type=sc960_832",
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130916_18%2Fjisan80_137929009080279rQi_JPEG%2F1-%25BA%25D2%25BE%25CF2-1300.jpg&type=sc960_832",
      ],
    },
  ];
  const [crewDetailData] = useState(MOCK_CREW_DETAIL);

  return (
    <Layout $margin="6.81rem 0 0 0" $isFooter={true}>
      <Header onClick={handleBackBtn}>크루</Header>
      <Wrapper>
        <PostTitle title={crewDetailData[0].title} />
        <PostCreateInfo
          is_review={false}
          created_at={crewDetailData[0].created_at}
          author_name={crewDetailData[0].author_name}
          is_writer={crewDetailData[0].is_writer}
        />
        <PostContent content={crewDetailData[0].content} image_urls={crewDetailData[0].image_urls} />
      </Wrapper>
      {crewDetailData[0].is_writer && (
        <ButtonWrapper>
          <ButtonGroup mode="crew" id={post_id} />
        </ButtonWrapper>
      )}
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
