import styled from "styled-components";
import otherRankDefault from "../../assets/images/otherRankDefault.svg";
import { useState } from "react";

export default function UserInfo() {
  const MOCK_USERINFO = [
    {
      nickname: "하이커스",
      user_id: "hikers123",
    },
  ];

  const [userInfo] = useState(MOCK_USERINFO);
  return (
    <Wrapper>
      <div>
        <ProfileImg src={otherRankDefault} alt={`${userInfo[0].nickname} 프로필 사진`} />
      </div>
      <NameWrapper>
        <Nickname>{userInfo[0].nickname}</Nickname>
        <UserId>{userInfo[0].user_id}</UserId>
      </NameWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.81rem;
  width: 350px;
  margin: 0.75rem 0;
`;

export const ProfileImg = styled.img`
  width: 3.75rem;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 00.31rem;
`;

export const Nickname = styled.div`
  color: #3b3b3b;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const UserId = styled.div`
  color: #a4a4a4;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
