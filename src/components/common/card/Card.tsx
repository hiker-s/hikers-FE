import WhiteHeart from "../../../assets/WhiteHeart.svg";
import greenHeart from "../../../assets/greenHeart.svg";
import * as Styled from "./styled";
import { LevelComp } from "../item/Level";
import { GreenBtn } from "../button/GreenBtn";

interface CardProps {
  title: string;
  level: string;
  description: string;
  imgUrl?: string;
  isLiked: boolean;
  onLikeClick: () => void;
  onDetailClick: () => void;
}

export const Card = ({ title, level, description, imgUrl, isLiked, onLikeClick, onDetailClick }: CardProps) => {
  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onLikeClick();
  };

  const handleDetailClick = () => {
    onDetailClick();
  };

  const hasImage = !!imgUrl;

  return (
    <Styled.CardContainer $imgUrl={imgUrl}>
      <Styled.CardContent $hasImage={hasImage}>
        <Styled.CardTopWrapper>
          <Styled.CardTitle>{title}</Styled.CardTitle>
          <LevelComp $level={level}>{level}</LevelComp>
        </Styled.CardTopWrapper>
        <Styled.CardDescription $hasImage={hasImage}>{description}</Styled.CardDescription>
        <Styled.CardBottomWrapper>
          <Styled.LikeButton onClick={handleLikeClick}>
            <Styled.CardIsLike src={isLiked ? greenHeart : WhiteHeart} alt={isLiked ? "좋아요 취소" : "좋아요"} />
          </Styled.LikeButton>
          <GreenBtn bgColor="#A4A4A4" onClick={handleDetailClick}>
            자세히 보기
          </GreenBtn>
        </Styled.CardBottomWrapper>
      </Styled.CardContent>
    </Styled.CardContainer>
  );
};
