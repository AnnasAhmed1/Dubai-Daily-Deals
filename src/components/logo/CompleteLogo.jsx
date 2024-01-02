import React from "react";
import ImageComp from "../helperComponents/image/imageComp";
import logo from "../../assets/icons/logo.svg";

const CompleteLogo = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "5px",
      }}
    >
      <ImageComp
        src={logo}
        className={"logo_image"}
        imageStyle={{
          width: "100%",
        }}
      />
      <div style={{}}>
        <h1
          style={{
            fontFamily: "Futura",
            fontSize: "45.06px",
            lineHeight: "45.83px",
            color: "var(--text-white)",
          }}
        >
          DUBAI
        </h1>
        <p
          style={{
            fontFamily: "Futura",
            fontSize: "22.3px",
            lineHeight: "15.61px",
            color: "var(--text-white)",
          }}
        >
          daily deals
        </p>
      </div>
    </div>
  );
};

export default CompleteLogo;
