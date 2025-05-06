import { BottomBtn } from "../../components/common/button/BottomBtn";
import Logo from "../../components/common/logo/Logo";
import MountainLogo from "../../components/common/logo/MountainLogo";
import { NotMemberYet } from "../../components/onboarding/NotMemberYet";
import * as Styled from "./styled";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  const handleGoLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <Styled.Wrapper>
        <Styled.LogoWrapper>
          <Logo />
          <Styled.ButtonWrapper>
            <MountainLogo />
            <BottomBtn onClick={handleGoLogin} disabled={false}>
              로그인
            </BottomBtn>
            <NotMemberYet />
          </Styled.ButtonWrapper>
        </Styled.LogoWrapper>
      </Styled.Wrapper>
    </>
  );
};

export default Onboarding;
