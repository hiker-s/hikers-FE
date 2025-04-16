import { IoMdBookmark } from "react-icons/io";
import * as Styled from "./styled";
import squareBaseImg from "../../../assets/squareBaseImg.svg";
import { LevelComp } from "./Level";

type CourseItemProps = {
  id: number;
  courseName: string;
  level: string;
  $iscard?: boolean;
  courseRoute: string;
  totalDuration: string;
  isScraped: boolean;
  onCourseItemClock: (e: number) => void;
  onScrapClick: (e: React.MouseEvent<SVGElement>) => void;
};

export default function CourseItem({
  id,
  courseName,
  level,
  $iscard = false,
  courseRoute,
  totalDuration,
  isScraped,
  onCourseItemClock,
  onScrapClick,
}: CourseItemProps) {
  return (
    <Styled.ItemWrapper onClick={() => onCourseItemClock(id)}>
      <img src={squareBaseImg} alt="squareBaseImg" />
      <Styled.InfoWrapper>
        <Styled.TitleWrapper>
          <Styled.TitleText>{courseName}</Styled.TitleText>
          <LevelComp $level={level} $iscard={$iscard}>
            {level}
          </LevelComp>
        </Styled.TitleWrapper>
        <Styled.ContentText>{courseRoute}</Styled.ContentText>
        <Styled.ContentText>{totalDuration}</Styled.ContentText>
      </Styled.InfoWrapper>
      <Styled.BooleanWrapper>
        <IoMdBookmark
          size="24"
          color={isScraped ? "#349989" : "#C8C8C8"}
          onClick={onScrapClick}
          style={{ cursor: "pointer" }}
        />
      </Styled.BooleanWrapper>
    </Styled.ItemWrapper>
  );
}
