import styled, { css } from "styled-components";

export const Filter = styled.div`
  position: relative;
  display: flex;
  width: 12.8125rem;
  height: 1.5rem;
  padding: 0.3125rem 0.9375rem;
  justify-content: space-between;
  /* align-items: center; */
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
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  min-width: 9.6875rem;
  &::placeholder {
    color: #c4c4c4;
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

export const DropdownWrapper = styled.div<{ $isOpen: boolean; $isMountain: boolean }>`
  position: absolute;
  top: 1.5rem;
  right: 0;
  display: flex;
  width: 12.8125rem;
  padding: 0.3125rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 0.625rem;
  border: 1px solid #c8c8c8;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1) inset;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  min-width: 7rem;
  z-index: 100;

  ${({ $isMountain }) =>
    $isMountain &&
    css`
      max-height: 8rem;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      z-index: 101;

      &::-webkit-scrollbar {
        display: none;
      }
    `}
`;

export const DropdownItem = styled.div`
  display: flex;
  padding: 0.3125rem 0rem 0.3125rem 0.625rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 1.25rem;
  color: #3b3b3b;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    /* border-radius: 0.4375rem; */
    background: #c8c8c8;
  }
`;
