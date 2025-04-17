import styled, { css } from "styled-components";
import { LevelCompProps } from "./Level";

export const ItemWrapper = styled.div`
  width: 21.875rem;
  height: 4.9375rem;
  display: flex;
  align-items: center;
  gap: 0.87rem;
  cursor: pointer;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.25rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.62rem;
`;

export const TitleText = styled.div`
  overflow: hidden;
  color: #3b3b3b;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const ContentText = styled.div`
  color: #a4a4a4;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 14.75rem;
`;

export const CrewContentText = styled.div`
  color: #a4a4a4;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 14.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const Level = styled.div<LevelCompProps>`
  border-radius: ${({ $iscard }) => ($iscard ? "0.5rem" : "0.3125rem")};
  display: flex;
  width: ${({ $iscard }) => ($iscard ? "1.5625rem" : "1.25rem")};
  height: ${({ $iscard }) => ($iscard ? "1.5625rem" : "1.25rem")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-size: ${({ $iscard }) => ($iscard ? "0.875rem" : "0.75rem")};
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  ${({ $level }) => {
    if ($level === "상") {
      return css`
        background-color: #e6cdcd;
        color: #e77575;
      `;
    }
    if ($level === "중") {
      return css`
        background-color: #f2dabd;
        color: #f1870d;
      `;
    }
    if ($level === "하") {
      return css`
        background-color: #b8dbd9;
        color: #349989;
      `;
    }
    return css``;
  }}
`;

export const BooleanWrapper = styled.div`
  cursor: pointer;
`;
