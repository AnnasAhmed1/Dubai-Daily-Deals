import React from "react";

const FormComp = ({ children, onSubmit = () => {}, className, style = {} }) => {
  return (
    <form
      className={`${className}`}
      style={{
        width: "100%",
        ...style,
      }}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
};

export default FormComp;
