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
import {
  listIcon_white,
  matrix,
  punctualityIcon,
  stopwatch,
  two_mobiles,
} from "../../assets/asset";
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
import HeaderSectionLayout from "../../components/headerSection";
import TestimonialSection from "../../components/testimonialSection";

const Home = () => {
  const iconCardsData = [
    {
      heading: "Seamless Exploration",
      details:
        "Discover Dubai's vibrant culinary scene, from breakfast to brunch, and uncover enticing happy hours and ladies' nights. Our app lets you effortlessly search and filter lifestyle activities and in-house F&B offerings.",
    },
    {
      heading: "Diverse Lifestyle Choices",
      details:
        "Immerse yourself in a world of cool lifestyle options, ranging from pool days, spa experiences, and gym sessions to salon pampering, engaging activities, and luxurious staycations. Dubai Daily Deals caters to every taste and preference.",
    },
    {
      heading: "Savings and Exclusive Experiences",
      details:
        "Designed for both tourists and residents, our app not only enhances your Dubai experience but also offers significant savings. Indulge in the finest restaurants, trendiest bars, and exclusive beach clubs, all while enjoying exclusive deals. Stay tuned for our upcoming expansion, covering the entire UAE!",
    },
  ];
  const gradientCardsData = [
    {
      icon: punctualityIcon,
      heading: "Designed for You",
      details:
        "Crafted by Dubai residents with a passion for the city, Dubai Daily Deals is meticulously designed to enhance your experience and unlock the best the city has to offer.",
    },
    {
      icon: stopwatch,
      heading: "Cross-Platform Compatibility",
      details:
        "Whether you're an iPhone user or on Android, our 100% FREE app is available on both platforms. Enjoy the convenience of seamless navigation and explore the vibrant offerings of Dubai effortlessly.",
    },
    {
      icon: listIcon_white,
      heading: "Your Ultimate Companion",
      details:
        "Dubai Daily Deals is not just an app; it's your ultimate companion for living and saving in Dubai. Download it now to access exclusive deals and dive into the heart of the city's diverse and dynamic experiences.",
    },
    {
      icon: matrix,
      heading: "Live, Save, Enjoy",
      details:
        "Start living your best life and saving simultaneously with Dubai Daily Deals. From dining to entertainment, this app has got you covered, ensuring you make the most of your time in Dubai.",
    },
  ];
  return (
    <main>
      <Navbar />
      <HeaderSectionLayout>
        <div className="container flex-responsive gap-10">
          <div
            className="flex-1 flex-col gap-20"
            style={{
              paddingTop: "10px",
            }}
          >
            <H1 color={"text-white"}>
              Tried, Tested and Trusted deals across Dubai
            </H1>
            <P5 color={"text-white"}>
              Dubai Daily Deals: Your one-stop app for finding the best
              lifestyle activities and in-house F&B deals in Dubai, soon
              expanding to the entire UAE!
            </P5>
            <DownloadAppButton />
          </div>
          <ImageComp src={headerImage} className={"flex-1 home-head-image"} />
        </div>
      </HeaderSectionLayout>
      <div className="container">
        <section className="main-section list-section flex-col gap-40" id="">
          <H2>Dubai Daily Deals: Your Ultimate Lifestyle Companion</H2>
          <div className="list-section-cards gap-20">
            {iconCardsData?.map((data, index) => {
              return (
                <IconCard
                  key={index}
                  heading={data.heading}
                  text={data.details}
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
            <H2>Your Essential Lifestyle App</H2>
            <div className="qualities-section-cards gap-30">
              {gradientCardsData?.map((data, index) => {
                return (
                  <GradientIconCard
                    heading={data.heading}
                    key={index}
                    details={data.details}
                    icon={data.icon}
                  />
                );
              })}
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
            <H2>About Us</H2>
            <P6 color={"text-light"}>
              Dubai Daily Deals has its roots in the passion of its founder,
              expat Sarah Jackson. Initially starting as a social media platform
              on Instagram, Sarah shared her personal treasure trove of tried
              and tested deals across Dubai. As a self-proclaimed aficionado of
              a good deal and armed with over 16 years of firsthand Dubai
              experience, Sarah's mission evolved into something bigger – she
              wanted to make these incredible discoveries accessible to
              everyone.
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
          }}
        >
          <div
            className="app-screeshot-section-text gap-20 flex-1/"
            style={{
              height: "fit-content",
              margin: "auto",
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
            }}
          />
        </div>
        <div className="app-screenshots-images-slider">
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
      <TestimonialSection
        heading="Love of Our People"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
               minim veniam, quis nostrud exercitation ullamco laboris nisi ut
               aliquip ex ea commodo consequat."
      />
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
