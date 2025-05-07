import * as Styled from "./styled";
import logo from "@/assets/images/logo.svg";

const Logo = () => {
  return (
    <Styled.LogoWrapper>
      <img src={logo} />
    </Styled.LogoWrapper>
  );
};

export default Logo;
