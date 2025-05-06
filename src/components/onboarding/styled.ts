import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6875rem;
`;

export const line = styled.div`
  flex-grow: 1;
  height: 0.03125rem;
  padding: 0 1.5625rem;
  background-color: #349989;
`;

export const LinkWrapper = styled(Link)`
  display: flex;
  gap: 0.3125rem;
  text-decoration: none;
  cursor: pointer;
  color: #349989;
  font-family: "Pretendard";
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  & span {
    font-weight: 700;
  }
`;
