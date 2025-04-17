import { ReactNode } from "react";
import * as Styled from "./styled";

export type LayoutProps = {
  children: ReactNode;
  $margin?: string;
  isFooter?: boolean;
};

export const Layout = ({ children, $margin = "0rem", isFooter = false }: LayoutProps) => {
  return (
    <Styled.Layout $margin={$margin} isFooter={isFooter}>
      {children}
    </Styled.Layout>
  );
};
