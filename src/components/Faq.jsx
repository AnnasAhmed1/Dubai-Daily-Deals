import React, { useState } from "react";
import { P5, P6 } from "./helperComponents/paragraph/paragraph";
import ImageComp from "./helperComponents/image/imageComp";
import { down_arrow, up_arrow } from "../assets/asset";

export const Faq = ({ faq, index, active, handleActive }) => {
  return (
    <li key={index} className={`${active === index ? "faq-active" : null}`}>
      <P5
        className="faq-question flex items-center"
        style={{
          justifyContent: "space-between",
        }}
        weight={"700"}
        onClick={() => {
          handleActive(index);
        }}
      >
        {faq.question}
        {index === active ? (
          <ImageComp
            src={up_arrow}
            imageStyle={{ width: "100%" }}
            width={"25px"}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          />
        ) : (
          <ImageComp
            src={down_arrow}
            imageStyle={{ width: "100%" }}
            width={"25px"}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          />
        )}
      </P5>
      <P5
        color={"text-light"}
        className={`faq-answer ${active === index ? "faq-active" : null}`}
      >
        {faq.answer}
      </P5>
    </li>
  );
};
