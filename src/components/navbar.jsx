import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RoundedButtonComp from "./helperComponents/button/RoundedButton";
import { P4, P5, P6 } from "./helperComponents/paragraph/paragraph";
import CompleteLogo from "./logo/CompleteLogo";
import ImageComp from "./helperComponents/image/imageComp";
import { logo, menu } from "../assets/asset";
import { Dropdown } from "antd";
import "../styles/component.css";

const Navbar = ({ home = true }) => {
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
          onClick={(e) => {
            scrollToSection(e, `${nav.id}`);
          }}
        >
          <Link to={`${index === 0 ? "/" : ""}`}>
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
    e.preventDefault();
    setActiveSection(id);
    const element = document.querySelector(`#${id}`);
    element?.scrollIntoView({ behavior: "smooth" });
    if (element && id !== "home") {
      let offset = 50;
      if (isScrolled === false) {
        offset = 120;
      }
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  }
  const updateCurrentSection = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    for (const section of navs) {
      const element = document.getElementById(section.id);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();

        if (
          top <= 500 &&
          (bottom >= 300 || (top <= windowHeight && bottom >= windowHeight))
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  };
  const [activeSection, setActiveSection] = useState(home ? "home" : "about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    scrollToTop();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", updateCurrentSection);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateCurrentSection);
    };
  }, []);
  return (
    <nav
      style={{
        paddingTop: "15px",
        paddingBottom: "15px",
      }}
      className={`container navbar ${isScrolled ? "sticky1" : ""}`}
    >
      <CompleteLogo />
      <ul
        className="flex hide-laptop nav_items_list"
        style={{
          color: "white",
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

                background:
                  activeSection === nav?.id ? "var(--text-blue)" : null,
              }}
              className={"nav_item"}
              onClick={(e) => {
                scrollToSection(e, `${nav.id}`);
              }}
            >
              <Link to={`${index === 0 ? "/" : ""}`}>
                <P5 color={activeSection === nav?.id ? "text-white" : null}>
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
