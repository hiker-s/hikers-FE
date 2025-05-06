import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import * as Styled from "./styled";
import { reviewApi } from "../../../apis/community/ReviewApi";

type PostCreateInfoProps = {
  review_id?: number;
  is_review: boolean;
  created_at: string;
  author_name: string;
  is_writer: boolean;
  like_count?: number;
  liked_by_current_user?: boolean;
};

function PostCreateInfo({
  review_id,
  is_review,
  created_at,
  author_name,
  is_writer,
  like_count = 0,
  liked_by_current_user = false,
}: PostCreateInfoProps) {
  const [liked, setLiked] = useState(liked_by_current_user);
  const [likeCount, setLikeCount] = useState(like_count);

  const handleHeartClick = async () => {
    if (!review_id) {
      console.error("review_id가 없습니다.");
      return;
    }
    // console.log(`${review_id} 좋아요 클릭`);

    if (liked) {
      try {
        await reviewApi.deleteReviewHeart(review_id);
        setLikeCount((prev) => prev - 1);
        setLiked(false);
      } catch (error) {
        console.error("좋아요 실패", error);
      }
    } else {
      try {
        await reviewApi.postReviewHeart(review_id);
        setLikeCount((prev) => prev + 1);
        setLiked(true);
      } catch (error) {
        console.error("좋아요 실패", error);
      }
    }
  };

  const heartColor = is_writer ? "#3b3b3b" : liked ? "#349989" : "#C8C8C8";

  return (
    <Styled.CreateInfoWrapper>
      <Styled.WriteInfo>
        <div style={{ fontWeight: 400 }}>{created_at}</div>
        <div style={{ fontWeight: 700 }}>{author_name}</div>
      </Styled.WriteInfo>

      {is_review && (
        <Styled.HeartWrapper
          onClick={!is_writer ? handleHeartClick : undefined}
          style={{ cursor: is_writer ? "default" : "pointer" }}
        >
          <IoMdHeart size="24" color={heartColor} />
          {is_writer && <Styled.HeartCount>{likeCount}</Styled.HeartCount>}
        </Styled.HeartWrapper>
      )}
    </Styled.CreateInfoWrapper>
  );
}

export default PostCreateInfo;
