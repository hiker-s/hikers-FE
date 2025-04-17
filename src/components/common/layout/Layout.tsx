import { ReactNode, useEffect } from "react";
import * as Styled from "./styled";
import { Footer } from "../footer/Footer";

export type LayoutProps = {
  children: ReactNode;
  $margin?: string;
  isFooter?: boolean;
};

export const Layout = ({ children, $margin = "0rem", isFooter = false }: LayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Styled.Layout $margin={$margin} isFooter={isFooter}>
      {children}
      {isFooter && <Footer />}
    </Styled.Layout>
  );
};
