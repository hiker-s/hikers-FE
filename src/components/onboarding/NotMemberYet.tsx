import * as Styled from "./styled";

export const NotMemberYet = () => {
  return (
    <Styled.Wrapper>
      <Styled.line></Styled.line>
      <Styled.LinkWrapper to="/signup">
        하이커스 회원이 아니신가요? <span>회원가입</span>
      </Styled.LinkWrapper>
      <Styled.line></Styled.line>
    </Styled.Wrapper>
  );
};
