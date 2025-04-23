import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import * as Styled from "./styled";

type PostCreateInfoProps = {
  review_id?: number;
  is_review: boolean;
  created_at: string;
  writer: string;
  is_writer: boolean;
  like_count?: number;
  is_liked?: boolean;
};

function PostCreateInfo({
  review_id,
  is_review,
  created_at,
  writer,
  is_writer,
  like_count = 0,
  is_liked = false,
}: PostCreateInfoProps) {
  const [liked, setLiked] = useState(is_liked);
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
        <div style={{ fontWeight: 700 }}>{writer}</div>
      </Styled.WriteInfo>

      {is_review && (
        <Styled.HeartWrapper
          onClick={!is_writer ? handleHeartClick : undefined}
          style={{ cursor: is_writer ? "default" : "pointer" }}
        >
          <IoMdHeart size="24" color={heartColor} />
          <Styled.HeartCount>{likeCount}</Styled.HeartCount>
        </Styled.HeartWrapper>
      )}
    </Styled.CreateInfoWrapper>
  );
}

export default PostCreateInfo;
