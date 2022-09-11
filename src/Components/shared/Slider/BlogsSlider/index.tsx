import Slider from "react-slick";
import { useFetchBlogsQuery } from "services/goodsServices";
import { Blogs } from "../../Blogs";
import { FC } from "react";

export const BlogsSlider: FC = () => {
  const { data, isLoading, isError } = useFetchBlogsQuery();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <Slider {...settings}>
        {data?.map((item) => (
          <Blogs {...item} />
        ))}
      </Slider>
    </div>
  );
};
