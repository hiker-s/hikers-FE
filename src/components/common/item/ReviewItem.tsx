import * as Styled from "./styled";
import squareBaseImg from "../../../assets/images/squareBaseImg.svg";
import { LevelComp } from "./Level";
import { IoMdHeart } from "react-icons/io";

type ReviewItemProps = {
  review_id: number;
  images?: string;
  title: string;
  level: string;
  $iscard?: boolean;
  mnt_name: string;
  course_name: string;
  is_liked?: boolean;
  is_writer: boolean;
  like_count: number | undefined;
  onReviewItemClick: (review_id: number) => void;
  onLikeClick: (e: React.MouseEvent<SVGElement>) => void;
};

export default function ReviewItem({
  review_id,
  images,
  title,
  level,
  $iscard = false,
  mnt_name,
  course_name,
  is_liked,
  is_writer,
  like_count,
  onReviewItemClick,
  onLikeClick,
}: ReviewItemProps) {
  return (
    <Styled.ItemWrapper onClick={() => onReviewItemClick(review_id)}>
      <Styled.ThumbnailImg src={images || squareBaseImg} alt="squareBaseImg" />
      <Styled.InfoWrapper>
        <Styled.TitleWrapper>
          <Styled.TitleText>{title}</Styled.TitleText>
          <LevelComp $level={level} $iscard={$iscard}>
            {level}
          </LevelComp>
        </Styled.TitleWrapper>
        <Styled.ContentText>{mnt_name}</Styled.ContentText>
        <Styled.ContentText>{course_name}</Styled.ContentText>
      </Styled.InfoWrapper>
      {!is_writer ? (
        <Styled.BooleanWrapper>
          <IoMdHeart
            size="24"
            color={is_liked ? "#349989" : "#C8C8C8"}
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
