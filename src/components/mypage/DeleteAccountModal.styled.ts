import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  width: 21.875rem;
  height: 20.625rem;
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(59, 59, 59, 0.2);
`;

export const CloseButton = styled.button`
  position: relative;
  left: 87%;
  display: flex;
  width: 3rem;
  height: 3rem;
  padding: 0.6875rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.62rem;
  margin: 2rem 0 3.69rem 0;
`;

export const TitleText = styled.div`
  color: #3b3b3b;
  text-align: center;
  font-family: "Pretendard";
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SubTitle = styled.div`
  color: #a4a4a4;
  font-size: 1rem;
  font-weight: 600;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 0 1.13rem;
`;

export const LeftBtn = styled.div`
  display: flex;
  width: 9.25rem;
  height: 3.125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem;
  border: 1px solid #a4a4a4;
  background: #a4a4a4;
  color: #fff;
  font-family: "Pretendard";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const RightBtn = styled.div`
  display: flex;
  width: 9.25rem;
  height: 3.125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem;
  border: 1px solid #e77575;
  background: #e77575;
  color: #fff;
  font-family: "Pretendard";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
