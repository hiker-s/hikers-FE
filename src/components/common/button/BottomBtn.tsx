import * as Styled from "./styled";
import { ReactNode } from "react";

type BottomBtnProps = {
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export const BottomBtn = ({ disabled, onClick, children }: BottomBtnProps) => {
  return (
    <Styled.BottomBtn disabled={disabled} onClick={onClick}>
      {children}
    </Styled.BottomBtn>
  );
};
