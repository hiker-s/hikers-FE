import styled from "styled-components";

interface ContainerProps {
  $isActive: boolean;
}

export const FooterWrapper = styled.section`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 390px;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-top: 0.5px solid #c8c8c8;
  justify-content: space-around;
  align-items: center;

  z-index: 100;

  @media (max-height: 800px) {
    width: 75%;
  }

  span {
    font-family: "Pretendard";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 0.875rem; /* 100% */
  }
`;

export const HomeContainer = styled.div<ContainerProps>`
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: center;
  gap: 0.4375rem;
  flex-shrink: 0;
  cursor: pointer;
  fill: ${(props) => (props.$isActive ? "#349989" : "#a4a4a4")};

  span {
    color: ${(props) => (props.$isActive ? "#349989" : "#a4a4a4")};
  }

  @media (max-height: 800px) {
    width: 15%;
  }
`;

export const CommunityContainer = styled.div<ContainerProps>`
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: center;
  gap: 0.4375rem;
  flex-shrink: 0;
  cursor: pointer;
  stroke: ${(props) => (props.$isActive ? "#349989" : "#a4a4a4")};

  span {
    color: ${(props) => (props.$isActive ? "#349989" : "#a4a4a4")};
  }

  @media (max-height: 800px) {
    width: 15%;
  }
`;

export const RankContainer = styled.div<ContainerProps>`
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: center;
  gap: 0.4375rem;
  flex-shrink: 0;
  cursor: pointer;
  color: ${(props) => (props.$isActive ? "#349989" : "#a4a4a4")};

  span {
    color: ${(props) => (props.$isActive ? "#349989" : "#a4a4a4")};
  }

  @media (max-height: 800px) {
    width: 15%;
  }
`;

export const MyContainer = styled.div<ContainerProps>`
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: center;
  gap: 0.4375rem;
  flex-shrink: 0;
  cursor: pointer;
  color: ${(props) => (props.$isActive ? "#349989" : "#a4a4a4")};

  span {
    color: ${(props) => (props.$isActive ? "#349989" : "#a4a4a4")};
  }

  @media (max-height: 800px) {
    width: 15%;
  }
`;

export const HomeImg = styled.img<ContainerProps>`
  width: 1.375rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 11/12;
  filter: ${(props) =>
    props.$isActive
      ? "brightness(0) saturate(100%) invert(42%) sepia(82%) saturate(385%) hue-rotate(127deg) brightness(95%) contrast(89%)"
      : "brightness(0) saturate(100%) invert(65%) sepia(0%) saturate(1%) hue-rotate(251deg) brightness(92%) contrast(89%)"};
`;

export const CommunityImg = styled.img<ContainerProps>`
  width: 1.5625rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 25/24;
  stroke: ${(props) =>
    props.$isActive
      ? "invert(48%) sepia(79%) saturate(2476%) hue-rotate(130deg) brightness(118%) contrast(119%)"
      : "invert(72%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(90%)"};
`;

export const RankImg = styled.img<ContainerProps>`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  filter: ${(props) =>
    props.$isActive
      ? "brightness(0) saturate(100%) invert(42%) sepia(82%) saturate(385%) hue-rotate(127deg) brightness(95%) contrast(89%)"
      : "brightness(0) saturate(100%) invert(65%) sepia(0%) saturate(1%) hue-rotate(251deg) brightness(92%) contrast(89%)"};
`;

export const MyImg = styled.img<ContainerProps>`
  width: 1.6rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 25.6/24;
  filter: ${(props) =>
    props.$isActive
      ? "brightness(0) saturate(100%) invert(42%) sepia(82%) saturate(385%) hue-rotate(127deg) brightness(95%) contrast(89%)"
      : "brightness(0) saturate(100%) invert(65%) sepia(0%) saturate(1%) hue-rotate(251deg) brightness(92%) contrast(89%)"};
`;
