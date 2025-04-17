import { ReactNode } from "react";
import * as Styled from "./styled";
import backBtn from "../../../assets/icons/backBtn.svg";

type HeaderProps = {
  children?: ReactNode;
  onClick?: () => void;
  isOnboarding?: boolean;
};

export const Header = ({ onClick, children, isOnboarding = false }: HeaderProps) => {
  return (
    <Styled.Container>
      <Styled.HeaderBox $isOnboarding={isOnboarding}>
        <Styled.BackBtnWrapper onClick={onClick}>
          <img src={backBtn} />
        </Styled.BackBtnWrapper>
        <Styled.TextWrapper>
          <Styled.HeaderText>{children}</Styled.HeaderText>
        </Styled.TextWrapper>
      </Styled.HeaderBox>
    </Styled.Container>
  );
};
