import * as Styled from "./styled";

type PostContentProps = {
  content: string;
  images_url: string[];
};

export default function PostContent({ content, images_url }: PostContentProps) {
  return (
    <div>
      <Styled.ContentWrapper>
        {images_url.length > 0 && (
          <Styled.ImageWrapper>
            {images_url.map((image, index) => (
              <Styled.ImageContent key={index}>
                <img src={image} alt={`이미지 ${index + 1} 장`} />
              </Styled.ImageContent>
            ))}
          </Styled.ImageWrapper>
        )}
        <Styled.Content>{content}</Styled.Content>
      </Styled.ContentWrapper>
    </div>
  );
}
