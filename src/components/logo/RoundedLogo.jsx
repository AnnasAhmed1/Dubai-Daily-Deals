import React from "react";
import ImageComp from "../helperComponents/image/imageComp";
import logo from "../../assets/icons/logo.svg";

const RoundedLogo = ({ width, height, borderRadius, padding }) => {
  return (
    <ImageComp
      src={logo}
      style={{
        background: "var(--gradient-primary)",
        padding: padding ? padding : "15px",
        borderRadius: borderRadius ? borderRadius : "60px",
        width: width ? width : "80px",
        height: height ? height : "80px",
      }}
      imageStyle={{
        width: "100%",
      }}
    />
  );
};

export default RoundedLogo;
