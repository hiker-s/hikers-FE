import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import * as Styled from "./styled";

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

  const handleHeartClick = () => {
    console.log(` ${review_id} 좋아요 클릭`);
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
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
