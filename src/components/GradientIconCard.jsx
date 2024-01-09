import React from "react";
import ImageComp from "./helperComponents/image/imageComp";
import { H4 } from "./helperComponents/heading/heading";
import { P6 } from "./helperComponents/paragraph/paragraph";

const GradientIconCard = ({ heading, details, icon }) => {
  return (
    <div className="flex-col gradientIconCard gap-10">
      <ImageComp
        src={icon}
        width={"60px"}
        height={"60px"}
        imageStyle={{ width: "100%" }}
        style={{
          background: "var(--gradient-primary)",
          borderRadius: "10px",
          padding: "12px",
        }}
      />
      <H4>{heading}</H4>
      <P6 color={"text-light"}>{details}</P6>
    </div>
  );
};

export default GradientIconCard;
