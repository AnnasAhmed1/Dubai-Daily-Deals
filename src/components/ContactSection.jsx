import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import call from "../assets/icons/call.svg";
import email from "../assets/icons/email.svg";
import web from "../assets/icons/website.svg";
import ButtonComp from "./helperComponents/button/ButtonComp";
import { H1, H5 } from "./helperComponents/heading/heading";
import ImageComp from "./helperComponents/image/imageComp";
import { P4, P5 } from "./helperComponents/paragraph/paragraph";

import FormComp from "./helperComponents/form/FormComp";
import InputFeilds from "./helperComponents/inputFeilds/InputFeilds";
const ContactSection = () => {
  return (
    <div className="container">
      <section className="main-section flex-responsive gap-50">
        <div className="flex-1 flex-col gap-30">
          <H1>Get in Touch</H1>
          <P4 color={"text-light"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </P4>
          <H5>Send us message</H5>
          <FormComp className="contact-form">
            <InputFeilds label={"First Name"} />
            <InputFeilds label={"Last Name"} />
            <InputFeilds label={"Location"} />
            <InputFeilds label={"Phone No"} />
            <InputFeilds label={"Your Message"} className={"grid-span2"} />
            <ButtonComp>Send Message</ButtonComp>
          </FormComp>
        </div>
        <div className="flex-1 flex-col gap-30">
          <H1>Contact Information</H1>
          <P4 color={"text-light"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </P4>
          <H5>Get Our Info</H5>
          <ul className="flex-col gap-10">
            {[
              {
                icon: call,
                value: "+971 (04) 1234 567",
              },
              {
                icon: email,
                value: "info@timeandremind.com",
              },
              {
                icon: web,
                value: "www.dubaidailydeals.ae",
              },
            ]?.map((data, index) => {
              return (
                <li key={index} className="flex items-center gap-20">
                  <ImageComp src={data.icon} width={"25px"} />
                  <P5 color={"text-light"}> {data.value}</P5>
                </li>
              );
            })}
          </ul>
          <div className="flex-col gap-10">
            <P5 color={"text-light"}>
              Call us for immediate support on this number
            </P5>
            <H5
              style={{
                color: "#0695FE",
              }}
            >
              880 876 65 455
            </H5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
