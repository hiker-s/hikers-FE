import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/common/header/Header";
import { Layout } from "../../components/common/layout/Layout";
import Top3 from "../../components/rank/Top3";
import RankList from "../../components/rank/RankList";

const Rank = () => {
  const navigate = useNavigate();
  const handleBackBtn = () => navigate(-1);

  return (
    <Layout $margin="6.25rem 0 0 0" isFooter={true}>
      <Styled.Wrapper>
        <Header isOnboarding={true} onClick={handleBackBtn}>
          랭킹
        </Header>
        <Top3 />
        <RankList />
      </Styled.Wrapper>
    </Layout>
  );
};

export default Rank;
