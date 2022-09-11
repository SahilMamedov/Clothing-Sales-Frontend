import React, { Component } from "react";
import Slider from "react-slick";
import { CustomerFeedBack } from "../../CustomerFeedBack";

export const CustomerFeedbackSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <CustomerFeedBack imgUrl="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR-320-80.jpg" />
        </div>
        <div>
          <CustomerFeedBack imgUrl="https://i.pinimg.com/550x/31/23/2f/31232fe4b51b47763282524f008d9081.jpg" />
        </div>
        <div>
          <CustomerFeedBack imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxlNeyGrGZxjytvexnR2xi77-zBBxRr_U3Q&usqp=CAU" />
        </div>
        <div>
          <CustomerFeedBack imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mnuGvb2xMWSG1QaGoPf2mACF3p7A1aEKBQ&usqp=CAU" />
        </div>
      </Slider>
    </div>
  );
};
