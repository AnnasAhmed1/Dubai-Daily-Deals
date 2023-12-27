import React from "react";
import { P6 } from "../paragraph/paragraph";

const ButtonComp = ({
  children,
  onClick = () => {},
  style = {},
  className,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        ...style,
      }}
      className={`buttonComp  ${className}`}
    >
      <P6 color={"text-white"}>{children}</P6>
    </button>
  );
};

export default ButtonComp;
