// import * as Styled from "./Community.styled";

import { Header } from "../../components/common/header/Header";
import { Layout } from "../../components/common/layout/Layout";
import CrewList from "../../components/crew/CrewList";
import ReviewList from "../../components/review/ReviewList";
import { useNavigate } from "react-router-dom";

export default function Community() {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(-1);
  };
  return (
    <>
      <Layout $margin="9rem 0 0 0">
        <Header onClick={handleBackBtn} isCategory={true}>
          커뮤니티
        </Header>
        <ReviewList title="리뷰" />
        <CrewList />
      </Layout>
    </>
  );
}
