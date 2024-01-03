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
      className={`imageComp ${className}`}
    >
      <img
        style={{
          ...imageStyle,
        }}
        src={src}
        alt={alt ? alt : `${src}`}
        className="image"
       
      />
    </div>
  );
};

export default ImageComp;
