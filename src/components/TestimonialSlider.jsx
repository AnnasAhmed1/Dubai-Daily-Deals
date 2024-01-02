import React from "react";
import Slider from "react-slick";
import { P2, P5 } from "./helperComponents/paragraph/paragraph";
import ImageComp from "./helperComponents/image/imageComp";
import testimonialImage from "../assets/testimonial_img1.png";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          centerPadding: "10%",
          dots: false,
        },
      },
    ],
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={"arrows next-arrow"}
        style={{ ...style }}
        onClick={onClick}
      ></div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={"arrows prev-arrow"}
        style={{ ...style }}
        onClick={onClick}
      ></div>
    );
  }

  const slidesData = [
    {
      text: "I thought this app was one of the most valuable apps I've ever tried in my life. Loved it!",
    },
    {
      text: "This app - you've gotta try it. I will praise Tastebook again and again.",
    },
    {
      text: "I've used many apps in my life but this has saved me the most time.",
    },
    {
      text: "I thought this app was one of the most valuable apps I've ever tried in my life. Loved it!",
    },
    {
      text: "This app - you've gotta try it. I will praise Tastebook again and again.",
    },
    {
      text: "I've used many apps in my life but this has saved me the most time.",
    },
  ];
  return (
    <Slider {...settings} className="testimonial-slider">
      {slidesData?.map((data, index) => {
        return (
          <div
            key={index}
            className="flex-col slide"
            style={{
              margin: "0 10px",
            }}
          >
            <P2 textAlign={"center"} key={index}>
              {data.text}
            </P2>
            <div
              className="flex"
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <ImageComp src={testimonialImage} />
              <P5 color={"text-light"}>Todd Quinto, works at Google</P5>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default TestimonialSlider;
