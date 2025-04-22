import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
`;

export const TitleWrapper = styled.div`
  margin: 0 0.3rem;

  color: #3b3b3b;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CarouselWrapper = styled.div`
  max-width: 22.5375rem;
  width: 100%;
  position: relative;

  .slick-dots {
    display: flex !important;
    justify-content: center;
    bottom: 0.81rem;
  }

  .slick-dots li {
    margin: 0;
  }

  .slick-dots li button:before {
    color: white;
    opacity: 1;
    font-size: 8px;
  }

  .slick-dots li.slick-active button::before {
    color: #349989;
    opacity: 1;
    font-size: 8px;
  }
`;

export const PosterImg = styled.img`
  margin: 0 0.3rem;
  width: 21.9375rem;
  height: 11.1875rem;
  display: block;
  border-radius: 0.625rem;
  cursor: pointer;
`;
