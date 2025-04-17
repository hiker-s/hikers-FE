import styled, { css } from "styled-components";

export const CardContainer = styled.div<{ $imgUrl?: string }>`
  width: 10.625rem;
  height: 13.125rem;
  border-radius: 0.625rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  ${({ $imgUrl }) =>
    $imgUrl
      ? css`
          background-image: url(${$imgUrl});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
          }
        `
      : css`
          background-color: #eee;
        `}
`;

export const CardContent = styled.div<{ $hasImage?: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem;
  color: ${({ $hasImage }) => ($hasImage ? "white" : "#333")};
  z-index: 1;
`;

export const CardTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: inherit;
`;

export const CardDescription = styled.p<{ $hasImage?: boolean }>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: ${({ $hasImage }) => ($hasImage ? "#fff" : "#666")};
  font-family: "Pretendard";
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.4;
  word-break: keep-all;
  text-overflow: ellipsis;
`;

export const CardBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  margin-left: -0.7rem;
  width: 100%;
`;

export const LikeButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const CardIsLike = styled.img`
  width: 2.75rem;
  height: 2.75rem;
`;

export const DetailButton = styled.button<{ $hasImage?: boolean }>`
  background: ${({ $hasImage }) => ($hasImage ? "rgba(255, 255, 255, 0.2)" : "#65A69E")};
  border: none;
  border-radius: 0.625rem;
  padding: 0.5rem 1rem;
  color: ${({ $hasImage }) => ($hasImage ? "white" : "#FFF")};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ $hasImage }) => ($hasImage ? "rgba(255, 255, 255, 0.3)" : "#558B84")};
  }
`;

/* CardList.tsx */
export const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  padding: 0 1.25rem;
  margin: 3.94rem 0 3.75rem 0;
  position: relative;
  width: 100%;
`;

export const CardListTopWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const CardListTitle = styled.h2`
  color: #3b3b3b;
  font-family: "Pretendard";
  font-size: 1.25rem;
  font-weight: 700;
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: none;
  touch-action: pan-x;
  padding: 0.5rem;
  margin: 0 -1.25rem;
  padding-left: 1.25rem;
  flex-wrap: nowrap;

  /* 카드 크기 고정 */
  & > * {
    flex: 0 0 10.625rem;
  }

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  /* 모바일 터치 최적화 */
  @media (hover: none) {
    scroll-snap-type: x mandatory;

    & > * {
      scroll-snap-align: start;
    }
  }
`;

export const CardListBottomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0.5rem;
  width: 100%;
`;
