import styled from "styled-components";

export const Wrapper = styled.div<{ $backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-shrink: 0;

  border-radius: 0rem 0rem 2.5rem 2.5rem;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CrownImg = styled.img`
  position: relative;
  top: 2rem;
  left: 1.7rem;
  z-index: 1;
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 1.44rem;
`;

export const Top1Container = styled.div`
  display: flex;
  width: 6.25rem;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  padding-bottom: 12rem;
`;

export const Top2Container = styled.div`
  display: flex;
  width: 6.25rem;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  padding-bottom: 6.3rem;
`;

export const Top3Container = styled.div`
  display: flex;
  width: 6.25rem;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  padding-bottom: 3.7rem;
`;

export const TopImg = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  aspect-ratio: 1/1;
  border-radius: 100%;
`;

export const TopTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
`;

export const TopName = styled.div`
  color: #fff;
  text-align: center;
  font-family: "Pretendard";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TopStamp = styled.div`
  color: #a9d4cd;
  font-family: "Pretendard";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
