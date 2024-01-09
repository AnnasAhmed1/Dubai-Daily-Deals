import React from "react";
import ImageComp from "./helperComponents/image/imageComp";

const PartnerLogo = ({ src }) => {
  return (
    <ImageComp
      src={src}
      className={"partnerLogo"}
      imageStyle={{
        objectFit: "contain",
      }}
    />
  );
};

export default PartnerLogo;
