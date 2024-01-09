import React from "react";

const HeaderSectionLayout = ({ children, id = "home" }) => {
  return (
    <section className="header-section main-section" id={id}>
      {children}
    </section>
  );
};

export default HeaderSectionLayout;
