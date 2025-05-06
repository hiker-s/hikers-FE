import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 3.75rem;
`;

export const TitleWrapper = styled.div`
  width: 330px;
  padding: 1.25rem 0 5.06rem 0;
`;

export const Title = styled.div`
  display: flex;
  color: #349989;
  font-family: "Pretendard";
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.25rem;
`;

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.88rem;
`;

export const Line = styled.hr`
  width: 20rem;
  height: 0.0625rem;
  background: #c8c8c8;
  margin: 0;
  border: none;
`;

export const ButtonWrapper = styled.div`
  padding-top: 2.25rem;
`;
