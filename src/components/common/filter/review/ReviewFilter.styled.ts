import styled from "styled-components";

export const Filter = styled.div`
  display: flex;
  width: 12.8125rem;
  padding: 0.3125rem 0.9375rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.625rem;
  border: 1px solid #c8c8c8;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1) inset;
  color: #3b3b3b;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Input = styled.input`
  color: #3b3b3b;
  font-family: Pretendard;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 9.6875rem;
  &::placeholder {
    color: #c4c4c4;
    font-family: "Pretendard";
  }
  &:focus {
    outline: none;
  }
`;

export const SearchImg = styled.img`
  width: 0.7rem;
  height: 0.7rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

export const DropdownWrapper = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: -10rem;
  /* right: calc(-1rem); */
  right: 0;
  display: flex;
  padding: 0.3125rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.625rem;
  background: green;
  box-shadow: 0px 0px 10px 0px rgba(59, 59, 59, 0.2);
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  z-index: 2;
  min-width: 7rem;
`;

export const DropdownItem = styled.div`
  display: flex;
  padding: 0.4rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  color: "#65A69E";
  font-family: "Pretendard";
  font-size: 0.875rem;
  font-weight: "600";
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
