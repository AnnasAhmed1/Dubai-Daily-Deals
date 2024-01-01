import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RoundedButtonComp from "./helperComponents/button/RoundedButton";
import { P5 } from "./helperComponents/paragraph/paragraph";
import CompleteLogo from "./logo/CompleteLogo";

const Navbar = () => {
  const navs = [
    { title: "Home", active: false },
    { title: "About App", active: false },
    { title: "Features", active: false },
    { title: "How it Works", active: false },
    { title: "Reviews", active: false },
    { title: "Contact", active: false },
  ];
  const navigate = useNavigate();
  const location = useLocation();
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
          gap: "10px",
          fontSize: "18px",
          alignItems: "center",
        }}
      >
        {navs?.map((nav, index) => {
          return (
            <li
              key={index}
              style={{
                cursor: "pointer",
                borderRadius: "50px",
                padding: "5px 15px",
                background:
                  location.pathname === "/" && index === 0
                    ? "var(--text-white)"
                    : null,
              }}
            >
              <Link to={"/"}>
                <P5
                  color={
                    location.pathname === "/" && index === 0
                      ? "text-blue"
                      : "text-white"
                  }
                >
                  {nav.title}
                </P5>
              </Link>
            </li>
          );
        })}
        <RoundedButtonComp
          onClick={() => {
            navigate("/member");
          }}
        >
          Become a Partner
        </RoundedButtonComp>
      </ul>
    </nav>
  );
};

export default Navbar;
