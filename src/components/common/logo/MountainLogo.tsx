import * as Styled from "./styled";
import mountainLogo from "../../../assets/images/mountainLogo.svg";

const MountainLogo = () => {
  return (
    <Styled.LogoWrapper>
      <img src={mountainLogo} />
    </Styled.LogoWrapper>
  );
};

export default MountainLogo;
