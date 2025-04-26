import { LevelComp } from "../../common/item/Level";
import * as Styled from "./styled";

type PostReviewInfoProps = {
  mountain_name: string;
  course_name: string;
  level: string;
};
export default function PostReviewInfo({ mountain_name, course_name, level }: PostReviewInfoProps) {
  return (
    <div>
      <Styled.ReviewInfo>
        <Styled.MountainName>{mountain_name}</Styled.MountainName>
        <Styled.CourseName>{course_name}</Styled.CourseName>
        <LevelComp $level={level} $iscard={true}>
          {level}
        </LevelComp>
      </Styled.ReviewInfo>
    </div>
  );
}
