import styled from "styled-components";

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  position: relative;
  color: #666666;
  font-family: "Pretendard";
  font-size: 0.875rem;
  font-weight: 400;
`;

export const DropdownWrapper = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: calc(-1rem);
  display: flex;
  padding: 0.3125rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(59, 59, 59, 0.2);
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  z-index: 2;
  min-width: 7rem;
`;

export const DropdownItem = styled.div<{ $isSelected: boolean }>`
  display: flex;
  padding: 0.4rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  color: ${({ $isSelected }) => ($isSelected ? "#65A69E" : "#3B3B3B")};
  font-family: "Pretendard";
  font-size: 0.875rem;
  font-weight: ${({ $isSelected }) => ($isSelected ? "600" : "400")};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:hover {
    padding: 0.4rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.5rem;
    background: #349989;
    color: #fff;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
