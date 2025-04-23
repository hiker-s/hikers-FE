import * as Styled from "./styled";

type PostContentProps = {
  content: string;
  images: string[];
};

export default function PostContent({ content, images }: PostContentProps) {
  return (
    <Styled.ContentWrapper>
      {images.length > 0 && (
        <Styled.ImageWrapper>
          {images.map((image, index) => (
            <Styled.ImageContent key={index}>
              <img src={image} alt={`이미지 ${index + 1} 장`} />
            </Styled.ImageContent>
          ))}
        </Styled.ImageWrapper>
      )}
      <Styled.Content>{content}</Styled.Content>
    </Styled.ContentWrapper>
  );
}
