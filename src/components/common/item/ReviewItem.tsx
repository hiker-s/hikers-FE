import * as Styled from "./styled";
import squareBaseImg from "../../../assets/images/squareBaseImg.svg";
import { LevelComp } from "./Level";
import { IoMdHeart } from "react-icons/io";

type ReviewItemProps = {
  id: number;
  title: string;
  level: string;
  $iscard?: boolean;
  mountainName: string;
  courseName: string;
  isLiked: boolean;
  isWriter: boolean;
  onReviewItemClick: (id: number) => void;
  onLikeClick: (e: React.MouseEvent<SVGElement>) => void;
};

export default function ReviewItem({
  id,
  title,
  level,
  $iscard = false,
  mountainName,
  courseName,
  isLiked,
  isWriter,
  onReviewItemClick,
  onLikeClick,
}: ReviewItemProps) {
  return (
    <Styled.ItemWrapper onClick={() => onReviewItemClick(id)}>
      <img src={squareBaseImg} alt="squareBaseImg" />
      <Styled.InfoWrapper>
        <Styled.TitleWrapper>
          <Styled.TitleText>{title}</Styled.TitleText>
          <LevelComp $level={level} $iscard={$iscard}>
            {level}
          </LevelComp>
        </Styled.TitleWrapper>
        <Styled.ContentText>{mountainName}</Styled.ContentText>
        <Styled.ContentText>{courseName}</Styled.ContentText>
      </Styled.InfoWrapper>
      {isWriter && (
        <Styled.BooleanWrapper>
          <IoMdHeart
            size="24"
            color={isLiked ? "#349989" : "#C8C8C8"}
            onClick={onLikeClick}
            style={{ cursor: "pointer" }}
          />
        </Styled.BooleanWrapper>
      )}
    </Styled.ItemWrapper>
  );
}
