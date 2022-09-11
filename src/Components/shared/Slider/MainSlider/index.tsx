import Slider from "react-slick";
import { HomeSliderImg, HomeSliderImg2, prada, zara, zaralogo } from "Assets";
import {
  Arrow,
  StyledDisplayFlex,
  StyledPercentOff,
  StyledPosition,
  StyledSliderButton,
  StyledSliderContent,
  StyledSliderImg,
  StyledSliderTitle,
  StyledZaraLogo,
} from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        <StyledDisplayFlex>
          <StyledSliderImg src={HomeSliderImg} />
          <StyledPosition>
            <StyledSliderImg src={HomeSliderImg2} />
            <StyledSliderContent>
              <img src={prada} />
              <StyledSliderTitle>Big Fashion Festival</StyledSliderTitle>
              <StyledPercentOff>50% - 80% off</StyledPercentOff>
              <StyledSliderButton variant={"outlined"}>
                Explore
              </StyledSliderButton>
            </StyledSliderContent>
          </StyledPosition>
        </StyledDisplayFlex>

        <StyledDisplayFlex>
          <StyledSliderImg src={zara} />
          <StyledPosition>
            <StyledSliderImg src={HomeSliderImg2} />
            <StyledSliderContent>
              <StyledZaraLogo src={zaralogo} />
              <StyledSliderTitle>Big Fashion Festival</StyledSliderTitle>
              <StyledPercentOff>40% - 70% off</StyledPercentOff>
              <StyledSliderButton variant={"outlined"}>
                Explore
              </StyledSliderButton>
            </StyledSliderContent>
          </StyledPosition>
        </StyledDisplayFlex>
      </Slider>
    </div>
  );
};
