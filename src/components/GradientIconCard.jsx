import React from "react";
import ImageComp from "./helperComponents/image/imageComp";
import { H4 } from "./helperComponents/heading/heading";
import { P6 } from "./helperComponents/paragraph/paragraph";

import punctualityIcon from "../assets/icons/punctuality.svg";

const GradientIconCard = () => {
  return (
    <div className="flex-col gradientIconCard gap-10">
      <ImageComp
        src={punctualityIcon}
        width={"60px"}
        height={"60px"}
        imageStyle={{ width: "100%" }}
        style={{
          background: "var(--gradient-primary)",
          borderRadius: "10px",
          padding: "12px",
        }}
      />
      <H4>Lorem ipsum dolor</H4>
      <P6 color={"text-light"}>
        Lorem Ipsum is simply dummy text of the printing It is a long
        established fact that will be distracted by the readable content.
      </P6>
    </div>
  );
};

export default GradientIconCard;
