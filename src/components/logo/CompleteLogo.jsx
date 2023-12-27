import React from "react";
import ImageComp from "../helperComponents/image/imageComp";
import logo from "../../assets/icons/logo.svg";

const CompleteLogo = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
      }}
    >
      <ImageComp src={logo} />
      <div style={{}}>
        <h1
          style={{
            fontFamily: "Futura",
            fontSize: "48.06px",
            lineHeight: "48.83px",
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
