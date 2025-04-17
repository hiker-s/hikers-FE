import styled from "styled-components";

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
    color: #a4a4a4;
    font-family: "Pretendard";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 0.875rem; /* 100% */
  }
`;

export const NavContainer = styled.div`
  display: flex;
  width: 3.125rem;
  height: 3.125rem;
  flex-direction: column;
  align-items: center;
  gap: 0.4375rem;
  flex-shrink: 0;

  @media (max-height: 800px) {
    width: 15%;
  }
`;

export const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 80px;
  width: 20%;

  @media (max-height: 800px) {
    width: 15%;
  }
`;

export const RankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 80px;
  width: 20%;

  @media (max-height: 800px) {
    width: 15%;
  }
`;

export const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 80px;
  width: 20%;

  @media (max-height: 800px) {
    width: 15%;
  }
`;

export const HomeImg = styled.img`
  width: 1.375rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 11/12;
`;

export const CommunityImg = styled.img`
  width: 1.5625rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 25/24;
`;

export const RankImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

export const MyImg = styled.img`
  width: 1.6rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 25.6/24;
`;
