import styled from "styled-components";

export const inputField = styled.div`
  display: flex;
  width: 330px;
  height: 77px;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
`;

export const textTitle = styled.div`
  display: flex;
  width: 100%;
  height: 1.875rem;
  flex-direction: column;
  justify-content: center;
  color: #3b3b3b;
  font-family: "Pretendard";
  font-size: 1rem;
  font-weight: 600;
`;

export const InputBox = styled.input`
  display: flex;
  width: 330px;
  height: 48px;
  padding: 0.8125rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.9375rem;
  border: 1px solid #c8c8c8;
  outline: #349989;
  background: #fff;
  box-shadow: 0 0 0.3125rem 0 rgba(0, 0, 0, 0.2) inset;

  &::placeholder {
    color: #c8c8c8;
  }

  &:focus {
    border-radius: 0.9375rem;
    border: 1px solid #349989;
    background: #fff;
    box-shadow: 0 0 0.3125rem 0 rgba(52, 153, 137, 0.6) inset;
  }
`;
