import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 999; // sketchmap 때문에 999로 설정
`;

export const ModalContent = styled.div`
  position: fixed;
  bottom: 0;
  width: 390px;
  border-radius: 1.875rem 1.875rem 0rem 0rem;
  background: #ffffff;
  padding: 1.875rem 1.25rem 2.5rem 1.25rem;
  animation: ${slideUp} 0.3s ease-out;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ModalTitle = styled.h2`
  color: #349989;
  font-family: "Pretendard";
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CloseButton = styled.button`
  display: flex;
  width: 3rem;
  height: 3rem;
  padding: 0.6875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  background: none;
  border: none;
  font-size: 2rem;
  color: #3b3b3b;
  cursor: pointer;
  padding: 0;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const ShareText = styled.p`
  color: #3b3b3b;
  font-family: "Pretendard";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 100% */
`;

export const Bold = styled.span`
  font-weight: 700;
`;

export const ShareButtonsWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1.88rem 0;
  margin-top: 1rem;
`;
