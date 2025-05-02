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
  }
  &:focus {
    outline: none;
  }
`;

export const MntCourseLevelWrapper = styled.div`
  margin-top: 1.25rem;
  display: flex;
  width: 12.8125rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9375rem;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.1875rem;
  align-self: stretch;

  position: relative;
`;
export const Label = styled.label`
  color: #3b3b3b;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;
export const MntInput = styled.input``;
export const CourseInput = styled.input``;

export const RadioItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1875rem;
  cursor: "pointer";
`;

export const LevelRadio = styled.input.attrs({ type: "radio" })`
  /* 기본 라디오 버튼 숨기기 */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* 커스텀 디자인 */
  width: 0.625rem;
  height: 0.625rem;
  aspect-ratio: 1/1;
  border-radius: 0.625rem;
  border: 1px solid #c8c8c8;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1) inset;
  margin-right: 8px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;

  /* 체크된 상태 */
  &:checked {
    border-color: #4caf50;
    background-color: #4caf50;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      background: white;
      border-radius: 50%;
    }
  }

  /* 호버 효과 */
  &:hover {
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }

  /* 포커스 효과 */
  &:focus {
    outline: 2px solid #4caf50;
    outline-offset: 2px;
  }
`;

// 레이블 스타일 추가
export const RadioLabel = styled.label`
  color: #3b3b3b;
  font-family: Pretendard;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
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
  font-family: "Pretendard";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  resize: none;
  border: none;
  &::placeholder {
    color: #a4a4a4;
    font-family: "Pretendard";
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
