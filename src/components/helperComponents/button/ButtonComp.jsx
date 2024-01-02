import React from "react";
import { P6 } from "../paragraph/paragraph";

const ButtonComp = ({
  children,
  onClick = () => {},
  style = {},
  color = "gradient-secondary",
  className,
  weight,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: `var(--${color})`,
        ...style,
      }}
      className={`buttonComp  ${className}`}
    >
      <P6 color={"text-white"} weight={weight}>
        {children}
      </P6>
    </button>
  );
};

export default ButtonComp;
