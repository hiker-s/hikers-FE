import styled from "styled-components";
import { LayoutProps } from "./Layout";

export const Layout = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(var(—vh, 1vh) * 100);
  margin: ${({ $margin }) => $margin};
`;
