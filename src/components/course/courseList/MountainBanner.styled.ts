import styled, { css } from "styled-components";

export const MountainBannerWrapper = styled.div`
  width: 100%;
  height: 11.875rem;
  flex-shrink: 0;
  margin-bottom: 1.2rem;
`;

export const BackgroundImage = styled.div<{ $image: string }>`
  width: 100%;
  height: 11.875rem;
  position: relative;
  ${({ $image }) =>
    $image &&
    css`
      background-image: url(${$image});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #ffffffb2 70%;
      }
    `}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3.13rem 0 1.25rem 1.25rem;
  position: absolute;
  top: 0;
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
