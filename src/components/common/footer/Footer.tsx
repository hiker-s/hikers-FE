import { useNavigate, useLocation } from "react-router-dom";
import * as Styled from "./styled";
import Home from "../../../assets/icons/Home.svg";
import { CommunityIcon } from "../../../assets/icons/CommunityIcon";
import Rank from "../../../assets/icons/Rank.svg";
import My from "../../../assets/icons/My.svg";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname.startsWith(path);

  const handleClick = (path: string) => {
    navigate(path, { replace: true });
  };

  return (
    <Styled.FooterWrapper>
      <Styled.HomeContainer $isActive={isActive("/courseInfo")} onClick={() => handleClick("/courseInfo")}>
        <Styled.HomeImg src={Home} $isActive={isActive("/courseInfo")} />
        <span>홈</span>
      </Styled.HomeContainer>
      <Styled.CommunityContainer $isActive={isActive("/community")} onClick={() => handleClick("/community")}>
        <CommunityIcon $isActive={isActive("/community")} />
        <span>커뮤니티</span>
      </Styled.CommunityContainer>
      <Styled.RankContainer $isActive={isActive("/rank")} onClick={() => handleClick("/rank")}>
        <Styled.RankImg src={Rank} $isActive={isActive("/rank")} />
        <span>랭킹</span>
      </Styled.RankContainer>
      <Styled.MyContainer $isActive={isActive("/mypage")} onClick={() => handleClick("/mypage/:nickname")}>
        <Styled.MyImg src={My} $isActive={isActive("/mypage")} />
        <span>마이</span>
      </Styled.MyContainer>
    </Styled.FooterWrapper>
  );
};
