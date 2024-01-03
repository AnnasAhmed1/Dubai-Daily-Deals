import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import banner1Image from "../../assets/banner1_img.png";
import featureBannerImage from "../../assets/feature_banner_img.png";
import headerImage from "../../assets/heading_banner_img.png";
import clipboardIcon from "../../assets/icons/clipboard.svg";
import messagesIcon from "../../assets/icons/messages.svg";
import securityIcon from "../../assets/icons/security.svg";
import listIcon from "../../assets/icons/todo_list_icon.svg";
import iphoneMobile from "../../assets/iphone_mobile.png";
import mobileDisplay from "../../assets/mobile_display1.png";
import introVideo from "../../assets/videos/intro_video.png";
import GradientIconCard from "../../components/GradientIconCard";
import IconCard from "../../components/IconCard";
import ButtonComp from "../../components/helperComponents/button/ButtonComp";
import { H1, H2, H3 } from "../../components/helperComponents/heading/heading";
import ImageComp from "../../components/helperComponents/image/imageComp";
import { two_mobiles } from "../../assets/asset";
import {
  P4,
  P5,
  P6,
} from "../../components/helperComponents/paragraph/paragraph";
import RoundedLogo from "../../components/logo/RoundedLogo";
import Navbar from "../../components/navbar";

import ContactSection from "../../components/ContactSection";
import FooterComp from "../../components/FooterComp";
import TestimonialSlider from "../../components/TestimonialSlider";
import DownloadAppButton from "../../components/helperComponents/button/DownloadAppButton";

import "../../styles/pages/home.css";
import AppScreenshotSlider from "../../components/AppScreenshotSlider";
import VideoComp from "../../components/video";

const Home = () => {
  return (
    <main>
      <section
        className="header-section"
        id="home"
        style={{
          paddingBottom: "60px",
        }}
      >
        <Navbar />
        <div className="container flex-responsive gap-10">
          <div
            className="flex-1 flex-col gap-20"
            style={{
              paddingTop: "10px",
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
          <ImageComp src={headerImage} className={"flex-1 home-head-image"} />
        </div>
      </section>
      <div className="container">
        <section className="main-section list-section flex-col gap-40" id="">
          <H2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum
            dolor sit amet,
          </H2>
          <div className="list-section-cards gap-20">
            {[1, 2, 3].map((_, index) => {
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
        <section
          className="main-section qualities-section flex-responsive gap-30"
          id="about"
        >
          <div
            style={{
              flex: "1.75",
            }}
            className="flex-col gap-40"
          >
            <H2>The standard Lorem Ipsum passage, used since the 1500s</H2>
            <div className="qualities-section-cards gap-30">
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
        <section
          className="main-section features-section flex-responsive-reverse"
          id="features"
        >
          <ImageComp
            src={featureBannerImage}
            style={{
              flex: "1.3",
              // paddingRight: "30px",
            }}
          />
          <div className="features-section-text flex-col flex-1 gap-30">
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
        <section className="main-section sharing-section flex-responsive">
          <div className="flex-1 flex-col sharing-section-text gap-20">
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
          <div
            className="flex-1 sharing-section-cards gap-30"
            style={{
              alignItems: "center",
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
      <section
        className="main-section app-screeshot-section flex-responsive"
        id="how_it_works"
      >
        <div
          className="app-screeshot-section-static"
          style={{
            display: "flex",
            // width:"50%",
            // paddingRight:"5%"
            // alignItems: "center",
          }}
        >
          <div
            className="app-screeshot-section-text gap-20 flex-1/"
            style={{
              height: "fit-content",
              margin: "auto",
              // width: "100%",
              // flex: 1,
            }}
          >
            <H3 color={"text-white"}>App Screenshots</H3>
            <P5 color={"text-white"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </P5>
          </div>
          <ImageComp
            src={iphoneMobile}
            className={"app-screenshot-iphonemobile"}
            width={"130%"}
            style={{
              marginLeft: "-20px",
              // marginRight: "30px",
            }}
            imageStyle={
              {
                // width: "80%",
                // marginRight: "auto",
                // marginLeft: "0px",
              }
            }
          />
        </div>
        <div
          style={
            {
              // flex: "4",
              // marginLeft:"-5%"
              // display: "flex",
            }
          }
          className="app-screenshots-images-slider"
        >
          <AppScreenshotSlider />
        </div>
      </section>
      <div className="container ">
        <section className="main-section video-section flex-col gap-40">
          <H1 textAlign={"center"}>
            If you're in doubt, Why Choose Dubai Daily Deals
          </H1>
          <VideoComp />
        </section>
      </div>
      <section className="main-section-b flex-col gap-40" id="reviews">
        <div className="container">
          <H1 textAlign={"center"}>Love of Our People</H1>
          <P5 color={"text-light"} textAlign={"center"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </P5>
        </div>
        <TestimonialSlider />
      </section>
      <section className="main-section get-app-section">
        <div
          className="container flex-responsive gap-50"
          style={{
            alignItems: "center",
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
          <div className="flex-1">
            <ImageComp src={two_mobiles} />
          </div>
        </div>
      </section>
      <ContactSection />
      <FooterComp />
    </main>
  );
};

export default Home;
