import React from "react";
import ImageComp from "../helperComponents/image/imageComp";
import { complete_logo } from "../../assets/asset";
import { useNavigate } from "react-router-dom";

const CompleteLogo = () => {
  const navigate = useNavigate();
  return (
    <ImageComp
      src={complete_logo}
      className={"logo_image pointer"}
      imageStyle={{
        width: "100%",
      }}
      onClick={()=>navigate("/")}
    />
    // <div
    //   style={{
    //     display: "flex",
    //     gap: "5px",
    //   }}
    // >
    //   <ImageComp
    //     src={logo}
    //     className={"logo_image"}
    //     imageStyle={{
    //       width: "100%",
    //     }}
    //   />
    //   <div style={{}}>
    //     <h1
    //       style={{
    //         fontFamily: "Futura",
    //         fontSize: "45.06px",
    //         lineHeight: "45.83px",
    //         color: "var(--text-white)",
    //       }}
    //     >
    //       DUBAI
    //     </h1>
    //     <p
    //       style={{
    //         fontFamily: "Futura",
    //         fontSize: "22.3px",
    //         lineHeight: "15.61px",
    //         color: "var(--text-white)",
    //       }}
    //     >
    //       daily deals
    //     </p>
    //   </div>
    // </div>
  );
};

export default CompleteLogo;
