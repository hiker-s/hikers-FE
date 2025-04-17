import * as Styled from "./Carousel.styled";
import programDatas from "../../dummy/carousel.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
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
    console.log(`${programId}로 이동`);
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
