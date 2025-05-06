import * as Styled from "./styled";

type PostContentProps = {
  content: string;
  image_urls: string[];
};

export default function PostContent({ content, image_urls }: PostContentProps) {
  return (
    <div>
      <Styled.ContentWrapper>
        {image_urls.length > 0 && (
          <Styled.ImageWrapper>
            {image_urls.map((image, index) => (
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
