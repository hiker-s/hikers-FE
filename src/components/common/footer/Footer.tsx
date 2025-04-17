import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";
import Home from "../../../assets/icons/Home.svg";
import Community from "../../../assets/icons/Community.svg";
import Rank from "../../../assets/icons/Rank.svg";
import My from "../../../assets/icons/My.svg";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <Styled.FooterWrapper>
      <Styled.NavContainer>
        <Styled.HomeImg src={Home} onClick={() => navigate("/home")} />
        <span>홈</span>
      </Styled.NavContainer>
      <Styled.NavContainer>
        <Styled.CommunityImg src={Community} onClick={() => navigate("/community")} />
        <span>커뮤니티</span>
      </Styled.NavContainer>
      <Styled.NavContainer>
        <Styled.RankImg src={Rank} onClick={() => navigate("/rank")} />
        <span>랭킹</span>
      </Styled.NavContainer>
      <Styled.NavContainer>
        <Styled.MyImg src={My} onClick={() => navigate("/my")} />
        <span>마이</span>
      </Styled.NavContainer>
    </Styled.FooterWrapper>
  );
};
