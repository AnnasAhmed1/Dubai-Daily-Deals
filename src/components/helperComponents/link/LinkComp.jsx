import React from "react";
import { Link } from "react-router-dom";

const LinkComp = ({ children, to, target = "_self", className }) => {
  return (
    <Link to={to} target={target} className={`${className}`}>
      {children}
    </Link>
  );
};

export default LinkComp;
