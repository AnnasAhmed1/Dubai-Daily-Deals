import React from "react";
import Slider from "react-slick";
import { P2, P3, P5 } from "./helperComponents/paragraph/paragraph";
import ImageComp from "./helperComponents/image/imageComp";
import testimonialImage from "../assets/testimonial_img1.png";
import { iphoneMobile, mobileDisplay } from "../assets/asset";

const AppScreenshotSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // arrows: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const slidesData = [
    // { image: iphoneMobile },
    { image: mobileDisplay },
    { image: mobileDisplay },
    { image: mobileDisplay },
    { image: mobileDisplay },
    { image: mobileDisplay },
  ];
  return (
    <Slider {...settings} className="appscreenshot-slider">
      {slidesData?.map((data, index) => {
        return (
          <ImageComp
            key={index}
            src={data.image}
            height={"100%"}
            imageStyle={{
              objectFit: "cover",
              width: "105%",
            }}
          />
        );
      })}
    </Slider>
  );
};

export default AppScreenshotSlider;
