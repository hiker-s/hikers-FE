import * as Styled from "./styled";
import squareBaseImg from "../../../assets/images/squareBaseImg.svg";
import { LevelComp } from "./Level";
import { IoMdHeart } from "react-icons/io";

type ReviewItemProps = {
  id: number;
  image_urls?: string[] | undefined;
  title: string;
  level: string;
  $iscard?: boolean;
  mountain_name: string;
  course_name: string;
  liked_by_current_user?: boolean;
  writer: boolean;
  like_count: number | undefined;
  onReviewItemClick: (id: number) => void;
  onLikeClick: (e: React.MouseEvent<SVGElement>) => void;
};

export default function ReviewItem({
  id,
  image_urls,
  title,
  level,
  $iscard = false,
  mountain_name,
  course_name,
  liked_by_current_user,
  writer,
  like_count,
  onReviewItemClick,
  onLikeClick,
}: ReviewItemProps) {
  return (
    <Styled.ItemWrapper onClick={() => onReviewItemClick(id)}>
      <Styled.ThumbnailImg src={image_urls?.[0] || squareBaseImg} alt="squareBaseImg" />
      <Styled.InfoWrapper>
        <Styled.TitleWrapper>
          <Styled.TitleText>{title}</Styled.TitleText>
          <LevelComp $level={level} $iscard={$iscard}>
            {level}
          </LevelComp>
        </Styled.TitleWrapper>
        <Styled.ContentText>{mountain_name}</Styled.ContentText>
        <Styled.ContentText>{course_name}</Styled.ContentText>
      </Styled.InfoWrapper>
      {!writer ? (
        <Styled.BooleanWrapper>
          <IoMdHeart
            size="24"
            color={liked_by_current_user ? "#349989" : "#C8C8C8"}
            onClick={onLikeClick}
            style={{ cursor: "pointer" }}
          />
        </Styled.BooleanWrapper>
      ) : (
        <Styled.ReviewBoolWrapper>
          <IoMdHeart size="24" color="#3B3B3B" style={{ cursor: "disabled" }} />
          <Styled.Count>{like_count}</Styled.Count>
        </Styled.ReviewBoolWrapper>
      )}
    </Styled.ItemWrapper>
  );
}
