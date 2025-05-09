import styled from "styled-components";

export const Wrapper = styled.div`
  width: 21.875rem;
`;

export const TitleInput = styled.input`
  width: 100%;
  color: #3b3b3b;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 1.875rem */
  border: none;
  &::placeholder {
    color: #a4a4a4;
  }
  &:focus {
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

export const ContentInput = styled.textarea<{ $hasImages: boolean }>`
  white-space: pre-line;
  width: 100%;
  min-height: ${({ $hasImages }) => ($hasImages ? "calc(100vh - 32rem)" : "calc(100vh - 24rem)")};
  color: #3b3b3b;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  resize: none;
  border: none;
  &::placeholder {
    color: #a4a4a4;
  }
  &:focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImagePreviewWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  overflow-x: auto;
  padding: 0.5rem 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImagePreview = styled.div`
  position: relative;
  width: 6.25rem;
  height: 6.25rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.62rem;
  }
`;

export const RemoveImageButton = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;
