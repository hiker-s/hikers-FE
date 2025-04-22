import { IoMdBookmark } from "react-icons/io";
import * as Styled from "./styled";
import squareBaseImg from "../../../assets/images/squareBaseImg.svg";
import { LevelComp } from "./Level";

type CourseItemProps = {
  course_id: number;
  images?: string;
  course_name: string;
  level: string;
  $iscard?: boolean;
  course_len: string;
  course_time: string;
  is_scrapped: boolean;
  onCourseItemClock: (e: number) => void;
  onScrapClick: (e: React.MouseEvent<SVGElement>) => void;
};

export default function CourseItem({
  course_id,
  images,
  course_name,
  level,
  $iscard = false,
  course_len,
  course_time,
  is_scrapped,
  onCourseItemClock,
  onScrapClick,
}: CourseItemProps) {
  return (
    <Styled.ItemWrapper onClick={() => onCourseItemClock(course_id)}>
      <Styled.ThumbnailImg src={images || squareBaseImg} alt="squareBaseImg" />
      <Styled.InfoWrapper>
        <Styled.TitleWrapper>
          <Styled.TitleText>{course_name}</Styled.TitleText>
          <LevelComp $level={level} $iscard={$iscard}>
            {level}
          </LevelComp>
        </Styled.TitleWrapper>
        <Styled.ContentText>{course_len}</Styled.ContentText>
        <Styled.ContentText>{course_time}</Styled.ContentText>
      </Styled.InfoWrapper>
      <Styled.BooleanWrapper>
        <IoMdBookmark
          size="24"
          color={is_scrapped ? "#349989" : "#C8C8C8"}
          onClick={onScrapClick}
          style={{ cursor: "pointer" }}
        />
      </Styled.BooleanWrapper>
    </Styled.ItemWrapper>
  );
}
