import React from "react";
import { P5, P6 } from "../paragraph/paragraph";

const RoundedButtonComp = ({
  children,
  onClick = () => {},
  style = {},
  color = "blue-primary",
  className,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: `var(--${color})`,
        ...style,
      }}
      className={`rounded-buttonComp  ${className}`}
    >
      <P5 color={"text-white"}>{children}</P5>
    </button>
  );
};

export default RoundedButtonComp;
