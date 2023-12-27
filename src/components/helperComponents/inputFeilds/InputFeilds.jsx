import React from "react";
import { P5, P6 } from "../paragraph/paragraph";

const InputFeilds = ({
  type = "text",
  placeholder = "",
  label,
  required = true,
  className,
}) => {
  return (
    <div className={`inputfield ${className}`}>
      {label && (
        <label
          className="pl-1 text-sm font-medium text-primaryColor cursor-pointer"
          htmlFor={label}
        >
          <P6 color={"text-light"}>
            {label}
            <span
              style={{
                color: "#EA4B36",
              }}
            >
              *
            </span>
          </P6>
        </label>
      )}
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputFeilds;
