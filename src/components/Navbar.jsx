import React from "react";
import CompleteLogo from "./logo/CompleteLogo";
import { P5 } from "./helperComponents/paragraph/paragraph";

const Navbar = () => {
  const navs = [
    { title: "Home", active: false },
    { title: "About App", active: false },
    { title: "Features", active: false },
    { title: "How it Works", active: false },
    { title: "Reviews", active: false },
    { title: "Contact", active: false },
  ];
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
      className="container"
    >
      <CompleteLogo />
      <ul
        className="flex"
        style={{
          color: "white",
          gap: "30px",
          fontSize: "18px",
        }}
      >
        {navs?.map((nav, index) => {
          return (
            <li key={index}>
              <P5 color={"text-white"}>{nav.title}</P5>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
