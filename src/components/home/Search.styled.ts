import styled from "styled-components";

export const SearchFormWrapper = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 17.5625rem;
  height: 2.5rem;
  padding: 0.5rem 0rem 0.5rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem 0rem 0rem 0.625rem;
  border: 1px solid #349989;
  background: #fff;
`;

export const SearchIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

export const SearchInput = styled.input`
  color: #3b3b3b;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
  box-shadow: none;
  width: calc(100% - 1.5rem);

  ::placeholder {
    color: #a4a4a4;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  height: 2.5rem;
  padding: 0.5625rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0rem 0.625rem 0.625rem 0rem;
  background: #349989;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;
`;
