import Slider from "react-slick";

import { FC } from "react";
import { IGoods } from "types";
import { Goods } from "../../ProductCard";
import { StyledContainer,StyledBox } from "../TrendingSlider/styles";
import { StyledNavlink } from "Views/Category/styles";

interface Props {
  data?: IGoods[];
}
export const NewArrivalGoods: FC<Props> = ({ data }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    rows: 2,
    
  };
  return (
    <StyledContainer>
      <Slider {...settings}>
        {data?.map((item) => (
        <StyledBox key={item.id}>
        <StyledNavlink  to={`/productdetail/${item.id}`}>
            <Goods {...item} />
        </StyledNavlink>
        </StyledBox>
        ))}
      </Slider>
    </StyledContainer>
  );
};
