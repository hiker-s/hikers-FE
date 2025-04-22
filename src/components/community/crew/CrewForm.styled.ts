import styled from "styled-components";

export const Wrapper = styled.div`
  width: 21.875rem;
`;

export const TitleInput = styled.input`
  width: 100%;
  color: #3b3b3b;
  font-family: "Pretendard";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 1.875rem */
  border: none;
  &::placeholder {
    color: #a4a4a4;
    font-family: "Pretendard";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 1.875rem */
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export const WriteInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #3b3b3b;
  font-size: 0.75rem;
  font-style: normal;
  line-height: 130%; /* 0.975rem */
`;

export const ImgInput = styled.div`
  cursor: pointer;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0.625rem;
`;

export const ImgInputWrapper = styled.div`
  padding: 0.4rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c8c8c8;
`;

export const ContentWrapper = styled.div`
  padding: 1.37rem 0;
`;

export const ContentInput = styled.textarea`
  white-space: pre-line;
  width: 100%;
  min-height: 26rem;
  max-height: 28rem;
  color: #3b3b3b;
  font-family: "Pretendard";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 1.4rem */
  resize: none;
  &::placeholder {
    color: #a4a4a4;
    font-family: "Pretendard";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 1.4rem */
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
