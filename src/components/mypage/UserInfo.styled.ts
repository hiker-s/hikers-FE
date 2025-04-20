import styled from "styled-components";

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

export const Name = styled.div`
  color: #3b3b3b;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Username = styled.div`
  color: #a4a4a4;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
