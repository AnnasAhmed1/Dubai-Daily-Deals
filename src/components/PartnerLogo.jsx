import React from "react";
import ImageComp from "./helperComponents/image/imageComp";

const PartnerLogo = ({ src }) => {
  return (
    <ImageComp
      src={src}
      className={"partnerLogo"}
      imageStyle={{
        objectFit: "cover",
      }}
    />
  );
};

export default PartnerLogo;
