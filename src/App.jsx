import React from "react";
import CompleteLogo from "./components/logo/CompleteLogo";
import "../src/styles/global.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/navbar";
import { H1, H2, H3, H5 } from "./components/helperComponents/heading/heading";
import {
  P2,
  P3,
  P4,
  P5,
  P6,
} from "./components/helperComponents/paragraph/paragraph";
import ImageComp from "./components/helperComponents/image/imageComp";
import headerImage from "./assets/heading_banner_img.png";
import banner1Image from "./assets/banner1_img.png";
import featureBannerImage from "./assets/feature_banner_img.png";
import IconCard from "./components/IconCard";
import GradientIconCard from "./components/GradientIconCard";
import RoundedLogo from "./components/logo/RoundedLogo";
import ButtonComp from "./components/helperComponents/button/ButtonComp";
import listIcon from "./assets/icons/todo_list_icon.svg";
import securityIcon from "./assets/icons/security.svg";
import clipboardIcon from "./assets/icons/clipboard.svg";
import messagesIcon from "./assets/icons/messages.svg";
import iphoneMobile from "./assets/iphone_mobile.png";
import mobileDisplay from "./assets/mobile_display1.png";
import iphoneMobileDisplay from "./assets/iphone_mobile_display.png";
import call from "./assets/icons/call.svg";
import email from "./assets/icons/email.svg";
import web from "./assets/icons/website.svg";

import introVideo from "./assets/videos/intro_video.png";
import TestimonialSlider from "./components/TestimonialSlider";
import FormComp from "./components/helperComponents/form/FormComp";
import InputFeilds from "./components/helperComponents/inputFeilds/InputFeilds";
import FooterComp from "./components/FooterComp";
import DownloadAppButton from "./components/helperComponents/button/DownloadAppButton";

const App = () => {
  return (
    <main>
      <section
        className="header-section"
        style={{
          paddingBottom: "60px",
        }}
      >
        <Navbar />
        <div
          style={{
            gap: "10px",
            // alignItems: "center",
          }}
          className="container flex"
        >
          <div
            className="flex-1 flex-col gap-20"
            style={{
              paddingTop: "40px",
            }}
          >
            <H1 color={"text-white"}>The standard Lorem Ipsum passage</H1>
            <P5 color={"text-white"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </P5>
            <DownloadAppButton />
          </div>
          <ImageComp
            src={headerImage}
            className={"flex-1 absolute/"}
            style={{
              marginRight: "-80px",
            }}
          />
        </div>
      </section>
      <div className="container">
        <section className="main-section list-section">
          <H2 textAlign={"center"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum
            dolor sit amet,
          </H2>
          <div className="flex list-section-cards">
            \
            {[1, 2, 3].map((data, index) => {
              return (
                <IconCard
                  key={index}
                  heading={"Lorem ipsum dolorsit amet, consectetur"}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                  }
                  icon={listIcon}
                />
              );
            })}
          </div>
        </section>
        <section className="main-section qualities-section flex">
          <div
            style={{
              flex: "1.5",
            }}
          >
            <H2>The standard Lorem Ipsum passage, used since the 1500s</H2>
            <div className="qualities-section-cards">
              <GradientIconCard />
              <GradientIconCard />
              <GradientIconCard />
              <GradientIconCard />
            </div>
          </div>
          <ImageComp
            src={banner1Image}
            style={{
              flex: "1",
            }}
          />
        </section>
        <section className="main-section features-section flex">
          <ImageComp
            src={featureBannerImage}
            style={{
              flex: "1.3",
              paddingRight: "30px",
            }}
          />
          <div className="features-section-text flex-col flex-1">
            <RoundedLogo />
            <H2>Features that aren't so commonplace.</H2>
            <P6 color={"text-light"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </P6>
            <ButtonComp>Download App</ButtonComp>
          </div>
        </section>
        <section className="main-section sharing-section flex">
          <div className="flex-1 flex-col sharing-section-text">
            <H2>Sharing Cool Stuff with Your community</H2>
            <P6 color={"text-light"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </P6>
            <P6 color={"text-light"}>
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </P6>
          </div>
          <div className="flex-1 sharing-section-cards"
          style={{
            alignItems:'center'
          }}
          >
            {[
              { icon: securityIcon },
              { icon: clipboardIcon, span: 2 },
              { icon: messagesIcon },
            ].map((data, index) => {
              return (
                <IconCard
                  key={index}
                  heading={"Lorem ipsum dolor"}
                  text={
                    "It is a long established fact that a reader will be distracted by the readable content."
                  }
                  className={data.span ? "grid-row-span2" : null}
                  icon={data.icon}
                />
              );
            })}
          </div>
        </section>
      </div>
      <section className="main-section app-screeshot-section flex">
        <div
          className="app-screeshot-section-text flex-1"
          style={{
            flex: "2",
          }}
        >
          <H3
            color={"text-white"}
            style={
              {
                // width: "30%",
              }
            }
          >
            App Screenshots
          </H3>
          <P5
            color={"text-white"}
            style={
              {
                // width: "30%",
              }
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </P5>
        </div>
        <div
          className="flex/ absolute/"
          style={{
            flex: "4",
            // marginLeft: "-20px",
            display: "flex",
            gridTemplateColumns: "repeat(4,1fr)",
            // alignItems: "center",
          }}
        >
          <ImageComp
            src={iphoneMobile}
            className={"flex-1"}
            width={"200px"}
            imageStyle={{
              objectFit: "cover",
            }}
          />
          <div
            className="flex absolute/"
            style={{
              flex: "3",
              padding: "20px 0",
            }}
          >
            <ImageComp
              src={mobileDisplay}
              className={"flex-1"}
              imageStyle={{
                objectFit: "cover",
                // height:"110%"
              }}
            />
            <ImageComp
              src={mobileDisplay}
              className={"flex-1"}
              imageStyle={{
                objectFit: "cover",
              }}
            />
            <ImageComp
              src={mobileDisplay}
              className={"flex-1"}
              imageStyle={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
      <div className="container ">
        <section className="main-section video-section flex-col">
          <H1 textAlign={"center"}>
            If you're in doubt, Why Choose Dubai Daily Deals
          </H1>
          <ImageComp
            src={introVideo}
            className={"relative video-section-video"}
            imageStyle={
              {
                // objectFit: "cover",
                // borderRadius: "30px",
              }
            }
            style={{
              height: "550px",
              // borderRadius: "30px",
            }}
          />
        </section>
      </div>
      <section className="main-section">
        <H1 textAlign={"center"}>Love of Our People</H1>
        <P5 color={"text-light"} textAlign={"center"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </P5>
        <TestimonialSlider />
      </section>
      <section className="main-section get-app-section">
        <div
          className="container flex"
          style={{
            alignItems: "center",
            gap: "100px",
          }}
        >
          <div
            className="flex-1 flex-col"
            style={{
              gap: "20px",
            }}
          >
            <H1 color={"text-white"}>Get The App Free From Here</H1>
            <P4 color={"text-white"}>
              We strive to embody the excitement and joy that define the
              equestrian lifestyle as we create innovative tools and resources
              designed.
            </P4>
            <DownloadAppButton />
          </div>
          <div
            className="flex-1 flex"
            style={{
              alignItems: "center",
            }}
          >
            <ImageComp
              src={iphoneMobile}
              style={{
                marginRight: "-40px",
                zIndex: "2",
              }}
            />
            <ImageComp src={iphoneMobileDisplay} />
          </div>
        </div>
      </section>
      <div className="container">
        <section
          className="main-section flex "
          style={{
            gap: "50px",
          }}
        >
          <div
            className="flex-1 flex-col"
            style={{
              gap: "30px",
            }}
          >
            <H1>Get in Touch</H1>
            <P4 color={"text-light"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </P4>
            <H5>Send us message</H5>
            <FormComp
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                columnGap: "50px",
                rowGap: "30px",
              }}
            >
              <InputFeilds label={"First Name"} />
              <InputFeilds label={"Last Name"} />
              <InputFeilds label={"Location"} />
              <InputFeilds label={"Phone No"} />
              <InputFeilds label={"Your Message"} className={"grid-span2"} />
              <ButtonComp>Send Message</ButtonComp>
            </FormComp>
          </div>
          <div
            className="flex-1 flex-col"
            style={{
              gap: "30px",
            }}
          >
            <H1>Contact Information</H1>
            <P4 color={"text-light"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </P4>
            <H5>Get Our Info</H5>
            <ul className="flex-col gap-20">
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
                    <ImageComp src={data.icon} width={"30px"} />
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
      <FooterComp />
    </main>
  );
};

export default App;
