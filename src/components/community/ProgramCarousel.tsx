import * as Styled from "./ProgramCarousel.styled";
import programDatas from "../../data/program-dummy.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

export default function ProgramCarousel() {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: programDatas.programDatas.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const onClick = (programId: number) => {
    navigate(`program/${programId}`);
  };

  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>프로그램</Styled.TitleWrapper>
      <Styled.CarouselWrapper>
        <Slider {...settings}>
          {programDatas.programDatas.map((program) => (
            <div key={program.id}>
              <Styled.PosterImg
                src={program.thumbnail}
                alt={`${program.title} 포스터`}
                onClick={() => onClick(program.id)}
              />
            </div>
          ))}
        </Slider>
      </Styled.CarouselWrapper>
    </Styled.Wrapper>
  );
}
