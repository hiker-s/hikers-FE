import { IoMdBookmark } from "react-icons/io";
import * as Styled from "./styled";
import { LevelComp } from "./Level";

type CourseItemProps = {
  course_id: number;
  images?: string;
  course_name: string;
  level: string;
  $iscard?: boolean;
  start_name: string;
  end_name: string;
  time: string;
  is_scrapped: boolean;
  onCourseItemClock: (e: number) => void;
  onScrapClick: (e: React.MouseEvent<SVGElement>) => void;
};

export default function CourseItem({
  course_id,
  course_name,
  end_name,
  level,
  $iscard = false,
  start_name,
  time,
  is_scrapped,
  onCourseItemClock,
  onScrapClick,
}: CourseItemProps) {
  return (
    <Styled.ItemWrapper onClick={() => onCourseItemClock(course_id)}>
      <Styled.InfoWrapper>
        <Styled.TitleWrapper>
          <Styled.TitleText>{course_name}</Styled.TitleText>
          <LevelComp $level={level} $iscard={$iscard}>
            {level}
          </LevelComp>
        </Styled.TitleWrapper>
        <Styled.ContentText>
          {start_name} ⟷ {end_name}
        </Styled.ContentText>
        <Styled.ContentText>{time}</Styled.ContentText>
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
