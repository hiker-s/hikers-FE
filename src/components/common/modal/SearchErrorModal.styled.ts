import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
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
  z-index: 1000; // sketchmap 때문에 999로 설정
`;

export const SearchErrorModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  width: 21.875rem;
  height: 20.625rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(59, 59, 59, 0.2);

  user-select: none;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
  width: 3rem;
  height: 3rem;
  padding: 0.6875rem;
  flex-shrink: 0;
  background: none;
  border: none;
  font-size: 2rem;
  color: #3b3b3b;
  cursor: pointer;
  padding: 0;
`;

export const ModalText = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #3b3b3b;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5625rem; /* 156.25% */

  span {
    font-size: 1.875rem;
    font-weight: 700;
  }
`;

export const ModalButton = styled.button`
  margin-top: 3rem;
  width: 19.375rem;
  height: 3.125rem;
  padding: 0.625rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 1px solid #349989;
  background: #349989;
  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;
`;
