import React from "react";
import { H1 } from "./helperComponents/heading/heading";
import { P5 } from "./helperComponents/paragraph/paragraph";
import TestimonialSlider from "./TestimonialSlider";

const TestimonialSection = ({ heading, text }) => {
  return (
    <section className="main-section-b flex-col gap-40" id="reviews">
      <div className="container">
        <H1 textAlign={"center"}>{heading}</H1>
        <P5 color={"text-light"} textAlign={"center"}>
          {text}
        </P5>
      </div>
      <TestimonialSlider />
    </section>
  );
};

export default TestimonialSection;
