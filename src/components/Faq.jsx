import React, { useState } from "react";
import { P5, P6 } from "./helperComponents/paragraph/paragraph";

export const Faq = ({ faq, index }) => {
  const [active, setActive] = useState(null);
  const handleActive = (index) => {
    if (index === active) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <li key={index} className={`${active === index ? "faq-active" : null}`}>
      <P5
        className="faq-question"
        weight={"700"}
        onClick={() => {
          handleActive(index);
        }}
      >
        {faq.question}
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
