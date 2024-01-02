import React from "react";
import { Link } from "react-router-dom";

const LinkComp = ({
  children,
  to,
  target = "_self",
  className,
  style = {},
}) => {
  return (
    <Link
      to={to}
      target={target}
      style={{
        ...style,
      }}
      className={`${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkComp;
