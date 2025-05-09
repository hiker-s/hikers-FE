import styled from "styled-components";
import greyBackground from "../../assets/images/greyBackground.svg";

export const SuccessWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url(${greyBackground}) no-repeat center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28rem;
  padding: 9rem 0 3.75rem 0;
  flex-grow: 1;
`;

export const TextWrapper = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
`;

export const SuccessText = styled.div`
  text-align: left;
  color: #3b3b3b;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const WelcomeText = styled.div`
  color: #349989;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
