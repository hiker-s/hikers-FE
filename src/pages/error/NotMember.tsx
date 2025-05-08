import styled from "styled-components";
import greyBackground from "../../assets/images/greyBackground.svg";
import { Header } from "../../components/common/header/Header";
import { BottomBtn } from "../../components/common/button/BottomBtn";
import { useNavigate } from "react-router-dom";

export default function NotMember() {
  const navigate = useNavigate();

  const handleBackBtn = () => {
    navigate(-1);
  };

  const handleGoLogin = () => {
    navigate("/login");
  };
  return (
    <Wrapper>
      <Header isOnboarding={true} onClick={handleBackBtn} />
      <TextWrapper>
        <TitleText>죄송합니다</TitleText>
        <SubTitle>해당 기능은 로그인 이후 사용가능합니다.</SubTitle>
      </TextWrapper>
      <BottomBtn onClick={handleGoLogin}>로그인</BottomBtn>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${greyBackground}) no-repeat center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 29rem;
  padding: 9rem 0 3.75rem 0;
`;

export const TextWrapper = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
`;

export const TitleText = styled.div`
  text-align: left;
  color: #3b3b3b;
  font-family: "Pretendard";
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SubTitle = styled.div`
  color: #349989;
  font-family: "Pretendard";
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
