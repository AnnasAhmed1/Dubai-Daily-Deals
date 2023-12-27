import React from "react";

const ImageComp = ({
  src,
  alt,
  width,
  height,
  style,
  imageStyle,
  className,
}) => {
  return (
    <div
      style={{
        width,
        height,
        ...style,
      }}
      className={`${className}`}
    >
      <img
        style={{
          // objectFit: "contain",
          ...imageStyle,
        }}
        src={src}
        alt={alt ? alt : `${src}`}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default ImageComp;
