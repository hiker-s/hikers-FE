import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const imgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4.06rem 0 6.25rem 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 6.875rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.25rem;
`;

export const GoSignUpBtn = styled.button`
  display: flex;
  width: 20.625rem;
  height: 3.125rem;
  padding: 0.625rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.9375rem;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: "Pretendard";
  border: 1px solid #eee;
  background-color: #eee;
  color: #3b3b3b;
  cursor: pointer;

  & span {
    color: #349989;
    font-size: 1rem;
    font-weight: 700;
  }
`;
