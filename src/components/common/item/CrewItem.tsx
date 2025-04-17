import * as Styled from "./styled";
import squareBaseImg from "../../../assets/images/squareBaseImg.svg";

type CrewItemProps = {
  id: number;
  title: string;
  content: string;
  onCrewItemClick: (id: number) => void;
};

export default function CrewItem({ id, title, content, onCrewItemClick }: CrewItemProps) {
  return (
    <Styled.ItemWrapper onClick={() => onCrewItemClick(id)}>
      <img src={squareBaseImg} alt="squareBaseImg" />
      <Styled.InfoWrapper>
        <Styled.TitleWrapper>
          <Styled.TitleText>{title}</Styled.TitleText>
        </Styled.TitleWrapper>
        <Styled.CrewContentText>{content}</Styled.CrewContentText>
      </Styled.InfoWrapper>
    </Styled.ItemWrapper>
  );
}
