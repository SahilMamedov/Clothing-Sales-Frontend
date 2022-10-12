import Slider from "react-slick";
import { Blogs } from "../../Blogs";
import { FC } from "react";
import { useFetchBlogsQuery } from "services/blogServices";

export const BlogsSlider: FC = () => {
  const { data} = useFetchBlogsQuery();
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
          <Blogs key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
};
