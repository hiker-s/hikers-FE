import styled from "styled-components";

export const BottomBtn = styled.button`
  display: flex;
  width: 20.625rem;
  height: 3.125rem;
  padding: 0.625rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Pretendard";
  background-color: ${({ disabled }) => (disabled ? "#A4A4A4" : "#349989")};
  color: #ffffff;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

interface GreenBtnProps {
  $padding?: string;
  $bgColor?: string;
  $color?: string;
  $fontSize?: string;
  $isHover?: boolean;
  $width?: string;
}

export const GreenBtn = styled.button<GreenBtnProps>`
  display: inline-flex;
  width: ${({ $width }) => $width || "auto"};
  padding: ${({ $padding }) => $padding || "0.375rem 1rem"};
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  background: ${({ $bgColor }) => $bgColor || "#349989"};
  color: ${({ $color }) => $color || "#FFF"};
  border: none;
  font-family: "Pretendard";
  font-size: ${({ $fontSize }) => $fontSize || "0.875rem"};
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: ${({ $isHover }) => ($isHover ? "#558B84" : "##349989")};
  }
`;
