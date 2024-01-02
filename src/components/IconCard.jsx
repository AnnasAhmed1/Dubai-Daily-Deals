import React from "react";
import ImageComp from "./helperComponents/image/imageComp";
import { H4 } from "./helperComponents/heading/heading";
import { P6 } from "./helperComponents/paragraph/paragraph";
import "../styles/component.css";

const IconCard = ({ icon, iconwidth, heading, text, className }) => {
  return (
    <div className={`flex-col iconCard ${className}`}>
      <ImageComp
        src={icon}
        width={iconwidth ? iconwidth : null}
        imageStyle={{ width: "100%" }}
        className={"iconCard-icon"}
      />
      <H4>{heading}</H4>
      <P6 color={"text-light"}>{text}</P6>
    </div>
  );
};

export default IconCard;
