import React from "react";
import facebook from "../assets/icons/facebook.svg";
import google from "../assets/icons/google.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import ButtonComp from "./helperComponents/button/ButtonComp";
import FormComp from "./helperComponents/form/FormComp";
import ImageComp from "./helperComponents/image/imageComp";
import { P6, P7 } from "./helperComponents/paragraph/paragraph";
import RoundedLogo from "./logo/RoundedLogo";

const FooterComp = () => {
  return (
    <footer className="main-section footer-section">
      <div
        className="container flex items-center gap-20"
        style={{
          justifyContent: "space-between",
        }}
      >
        <div className="flex flex-1/ items-center gap-10">
          <RoundedLogo
            borderRadius={"10px"}
            width={"50px"}
            height={"50px"}
            padding={"7px"}
          />
          <P6 color={"text-white"}>
            Copyright &copy; 2023 Dubai Daily Deals
            <br />
            All rights reserved.
          </P6>
        </div>
        <div className="flex-col gap-10 flex-1/ items-center justify-center">
          <P6 color={"text-white"} weight="700">
            STAY IN TOUCH WITH US
          </P6>
          <FormComp
            style={{
              display: "flex",
              background: "var(--text-white)",
              padding: "5px",
              borderRadius: "40px",
              justifyContent: "space-between",
            }}
          >
            <input
              type="text"
              placeholder="Weekly Newsletter"
              style={{
                borderRadius: "40px",
                paddingLeft: "20px",
              }}
            />
            <ButtonComp
              style={{
                width: "fit-content",
                height: "fit-content",
                borderRadius: "40px",
                padding: "10px 20px",
              }}
            >
              <P7 weight={"500"} color={"text-white"}>
                SUBSCRIBE
              </P7>
            </ButtonComp>
          </FormComp>
        </div>
        <div
          className="flex flex-1/ items-center gap-10"
          style={{
            justifyContent: "flex-end",
          }}
        >
          {[
            { icon: facebook },
            { icon: twitter },
            { icon: google },
            { icon: instagram },
          ]?.map((social, index) => {
            return (
              <ImageComp
                src={social.icon}
                key={index}
                width={"40px"}
                height={"40px"}
                style={{
                  border: "2px solid var(--text-white)",
                  borderRadius: "40px",
                  padding: "7px",
                  cursor:"pointer"
                }}
              />
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
