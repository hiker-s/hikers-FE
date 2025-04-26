import * as Styled from "./styled";
import squareBaseImg from "../../../assets/images/squareBaseImg.svg";

type CrewItemProps = {
  crew_id: number;
  images?: string;
  title: string;
  content: string;
  onCrewItemClick: (crew_id: number) => void;
};

export default function CrewItem({ crew_id, images, title, content, onCrewItemClick }: CrewItemProps) {
  return (
    <Styled.CrewItemWrapper onClick={() => onCrewItemClick(crew_id)}>
      <Styled.ThumbnailImg src={images || squareBaseImg} alt="squareBaseImg" />
      <Styled.InfoWrapper>
        <Styled.TitleWrapper>
          <Styled.TitleText>{title}</Styled.TitleText>
        </Styled.TitleWrapper>
        <Styled.CrewContentText>{content}</Styled.CrewContentText>
      </Styled.InfoWrapper>
    </Styled.CrewItemWrapper>
  );
}
