import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RoundedButtonComp from "./helperComponents/button/RoundedButton";
import { P5 } from "./helperComponents/paragraph/paragraph";
import CompleteLogo from "./logo/CompleteLogo";
import ImageComp from "./helperComponents/image/imageComp";
import { logo, menu } from "../assets/asset";
import { Dropdown } from "antd";

const Navbar = () => {
  const navs = [
    { title: "Home", active: false, id: "home" },
    { title: "About App", active: false, id: "about" },
    { title: "Features", active: false, id: "features" },
    { title: "How it Works", active: false, id: "how_it_works" },
    { title: "Reviews", active: false, id: "reviews" },
    { title: "Contact", active: false, id: "contact" },
  ];
  let items = navs?.map((nav, index) => {
    return {
      key: index,
      label: (
        <li
          style={{
            cursor: "pointer",
            borderRadius: "50px",
            padding: "0px 10px",
          }}
          className={"nav_item/"}
        >
          <Link to={"/"}>
            <P5 color={"text-dark"}>{nav.title}</P5>
          </Link>
        </li>
      ),
    };
  });

  items = [
    ...items,
    {
      key: "-1",
      label: (
        <RoundedButtonComp
          onClick={() => {
            navigate("/member");
          }}
        >
          Become a Partner
        </RoundedButtonComp>
      ),
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  function scrollToSection(e, id) {
    console.log(id);
    e.preventDefault();
    const element = document.querySelector(`#${id}`);
    element?.scrollIntoView({ behavior: "smooth" });
    if (element && id !== "home") {
      const offset = -1;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  }
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
        className="flex hide-laptop"
        style={{
          color: "white",
          gap: "5px",
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
                padding: "0px 10px",
                background:
                  location.pathname === "/" && index === 0
                    ? "var(--text-white)"
                    : null,
              }}
              className={"nav_item"}
              onClick={(e) => {
                scrollToSection(e, `${nav.id}`);
                console.log(nav.id);
              }}
            >
              <Link to={`${index === 0 ? "/" : ""}`}>
                <P5
                  color={
                    location.pathname === "/" && index === 0
                      ? "text-blue"
                      : null
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
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        className="show-laptop"
      >
        <button
          style={{
            background: "none",
          }}
        >
          <ImageComp
            src={menu}
            imageStyle={{ width: "100%" }}
            className={"pointer"}
          />
        </button>
      </Dropdown>
    </nav>
  );
};

export default Navbar;
