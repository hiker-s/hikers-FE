import { useNavigate } from "react-router-dom";
import { BottomBtn } from "../../components/common/button/BottomBtn";
import * as Styled from "./Success.styled";

export default function Success() {
  const navigate = useNavigate();

  const handleGoLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <Styled.SuccessWrapper>
        <Styled.TextWrapper>
          <Styled.SuccessText>
            회원가입이 <br />
            완료되었습니다
          </Styled.SuccessText>
          <Styled.WelcomeText>하이커스에 오신 것을 환영합니다 !</Styled.WelcomeText>
        </Styled.TextWrapper>
        <BottomBtn onClick={handleGoLogin}>로그인</BottomBtn>
      </Styled.SuccessWrapper>
    </div>
  );
}
