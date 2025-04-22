import * as Styled from "./UserInfo.styled";
import otherRankDefault from "../../assets/images/otherRankDefault.svg";
import { useState } from "react";

export default function UserInfo() {
  const MOCK_USERINFO = [
    {
      nickname: "하이커스",
      username: "hikers123",
      image: otherRankDefault,
    },
  ];

  const [userInfo] = useState(MOCK_USERINFO);
  return (
    <Styled.Wrapper>
      <div>
        <Styled.ProfileImg src={userInfo[0].image} alt={`${userInfo[0].nickname} 프로필 사진`} />
      </div>
      <Styled.NameWrapper>
        <Styled.Name>{userInfo[0].nickname}</Styled.Name>
        <Styled.Username>{userInfo[0].username}</Styled.Username>
      </Styled.NameWrapper>
    </Styled.Wrapper>
  );
}
