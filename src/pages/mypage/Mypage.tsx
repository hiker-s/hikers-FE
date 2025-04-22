import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/common/header/Header";
import { Layout } from "../../components/common/layout/Layout";
import UserInfo from "../../components/mypage/UserInfo";
import Stamp from "../../components/mypage/Stamp";
import ScrapedList from "../../components/mypage/ScrapedList";
import LikedList from "../../components/mypage/likedList";
import MyReviewList from "../../components/mypage/MyReviewList";

export default function Mypage() {
  const navigate = useNavigate();

  const handleBackBtn = () => {
    navigate(-1);
  };
  return (
    <div>
      <Layout $margin="6.25rem 0 1rem 0" isFooter={true}>
        <Header onClick={handleBackBtn}>마이페이지</Header>
        <UserInfo />
        <Stamp />
        <Styled.ListWrapper>
          <ScrapedList />
          <MyReviewList />
          <LikedList />
        </Styled.ListWrapper>
      </Layout>
    </div>
  );
}
