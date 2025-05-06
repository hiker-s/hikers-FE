import styled, { css } from "styled-components";

export const MountainBannerWrapper = styled.div<{ $image?: string }>`
  width: 100%;
  /* min-height: 11.875rem; */
  flex-shrink: 0;
  margin-bottom: 1.81rem;

  ${({ $image }) =>
    $image &&
    css`
      background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${$image});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `}

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 4rem 0 1.62rem 1.25rem;
  box-sizing: border-box;
  background-color: #ffffffb2;
  gap: 1rem;
`;

export const Title = styled.h1`
  color: #3b3b3b;
  font-family: "Pretendard";
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Content = styled.p`
  color: #3b3b3b;
  font-family: "Pretendard";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 18.4375rem;
`;
