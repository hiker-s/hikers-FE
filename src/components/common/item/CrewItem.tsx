import * as Styled from "./styled";
import squareBaseImg from "../../../assets/images/squareBaseImg.svg";

type CrewItemProps = {
  id: number;
  image_urls?: string[];
  title: string;
  content: string;
  onCrewItemClick: (id: number) => void;
};

export default function CrewItem({ id, image_urls, title, content, onCrewItemClick }: CrewItemProps) {
  const thumbnail = image_urls && image_urls.length > 0 ? image_urls[0] : squareBaseImg;
  return (
    <Styled.CrewItemWrapper onClick={() => onCrewItemClick(id)}>
      <Styled.ThumbnailImg src={thumbnail} alt="squareBaseImg" />
      <Styled.InfoWrapper>
        <Styled.TitleWrapper>
          <Styled.TitleText>{title}</Styled.TitleText>
        </Styled.TitleWrapper>
        <Styled.CrewContentText>{content}</Styled.CrewContentText>
      </Styled.InfoWrapper>
    </Styled.CrewItemWrapper>
  );
}
