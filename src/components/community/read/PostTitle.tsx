import * as Styled from "./styled";

type PostTitleProps = {
  title: string;
};

export default function PostTitle({ title }: PostTitleProps) {
  return (
    <Styled.TitleWrapper>
      <Styled.Title>{title}</Styled.Title>
    </Styled.TitleWrapper>
  );
}
