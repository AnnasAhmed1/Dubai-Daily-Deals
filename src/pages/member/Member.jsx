import React, { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../styles/pages/member.css";
import banner1Image from "../../assets/banner1_img.png";
import featureBannerImage from "../../assets/feature_banner_img.png";
import clipboardIcon from "../../assets/icons/clipboard.svg";
import messagesIcon from "../../assets/icons/messages.svg";
import securityIcon from "../../assets/icons/security.svg";

import GradientIconCard from "../../components/GradientIconCard";
import IconCard from "../../components/IconCard";
import ButtonComp from "../../components/helperComponents/button/ButtonComp";
import { H1, H2 } from "../../components/helperComponents/heading/heading";
import ImageComp from "../../components/helperComponents/image/imageComp";
import {
  P3,
  P5,
  P6,
} from "../../components/helperComponents/paragraph/paragraph";
import Navbar from "../../components/navbar";

import ContactSection from "../../components/ContactSection";
import { Faq } from "../../components/Faq";
import FooterComp from "../../components/FooterComp";
import PartnerLogo from "../../components/PartnerLogo";
import TestimonialSlider from "../../components/TestimonialSlider";
import new_img from "../../assets/partners/new_img.png";
import {
  vero,
  fixe,
  green_groom,
  hilton,
  jumeirah,
  karma_kafe,
  lock_stock,
  logs_embers,
  london_project,
  mccafertty,
  mecgatticans,
  media_hotel,
  movenpick,
  myagi,
  peaches_cream,
  phileas_fogg,
  pure,
  qwerty,
  revier,
  sals,
  sucre,
  taj,
  talk_restaurant,
  think_luxe,
  tidal_titans,
  trader_vics,
  TT,
} from "../../assets/asset";
import HeaderSectionLayout from "../../components/headerSection";
import TestimonialSection from "../../components/testimonialSection";

const Member = () => {
  const partners = [
    // {
    vero,
    fixe,
    green_groom,
    hilton,
    jumeirah,
    karma_kafe,
    lock_stock,
    logs_embers,
    london_project,
    mccafertty,
    mecgatticans,
    media_hotel,
    movenpick,
    myagi,
    peaches_cream,
    phileas_fogg,
    pure,
    qwerty,
    revier,
    sals,
    sucre,
    taj,
    talk_restaurant,
    think_luxe,
    tidal_titans,
    trader_vics,
    TT,
    // }
    // { icon: new_img },
    // { icon: pedal_7 },
    // { icon: h25 },
    // { icon: candy_pants },
    // { icon: desert_barbell },
    // { icon: hilton },
    // { icon: hospitality },
    // { icon: jones },
    // { icon: lock_stock },
    // { icon: mariott },
    // { icon: meridien },
    // { icon: nikki_beach },
    // { icon: pizza_express },
    // { icon: rebel },
    // { icon: sls },
    // { icon: revl },
    // { icon: solutions },
    // { icon: stregis },
    // { icon: warehouse },
    // { icon: westin },
  ];

  const faqs = [
    {
      question: "How do I list my business?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      question: "How does the pricing work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      question: "How do I cancel my Subscription?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];
  const [active, setActive] = useState(0);
  const handleActive = (index) => {
    if (index === active) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <main>
      <Navbar home={false} />
      <HeaderSectionLayout id="about">
        <div className="container flex gap-0">
          <div
            className="flex-1 flex-col gap-20"
            style={{
              paddingTop: "10px",
            }}
          >
            <H1 color={"text-white"}>The Ultimate Marketing Tool</H1>
            <P5 color={"text-white"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </P5>
          </div>
        </div>
      </HeaderSectionLayout>
      <div className="container">
        <section
          className="main-section qualities-section flex-responsive"
          id="about"
        >
          <div
            style={{
              flex: "1.5",
            }}
            className="flex-col gap-40"
          >
            <H2>
              Enhance online visibility and drive targeted customers to your
              venue.
            </H2>
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
          className="main-section sharing-section flex-responsive"
          id="features"
        >
          <div className="flex-1 flex-col sharing-section-text">
            <H2>What makes us different?</H2>
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
        <section
          className="main-section features-section flex-responsive-reverse"
          id="how_it_works"
        >
          <ImageComp
            src={featureBannerImage}
            style={{
              flex: "1.3",
            }}
          />
          <div className="features-section-text flex-col gap-30 flex-1">
            <H2>FAQs</H2>
            {faqs?.map((faq, index) => {
              return (
                <Faq
                  faq={faq}
                  index={index}
                  handleActive={handleActive}
                  active={active}
                />
              );
            })}
          </div>
        </section>
        <section className="main-section partners-section flex-col gap-50">
          <H2 textAlign={"center"}>Our Partners</H2>
          <div className="partners-cards gap-20">
            {partners?.map((partner, index) => {
              return <PartnerLogo key={index} src={partner} />;
            })}
          </div>
        </section>
      </div>

      <TestimonialSection
        heading="Hear from our partners"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat."
      />
      <section
        className="main-section "
        style={{
          background: "var(--blue-primary)",
        }}
      >
        <div className="container flex-col gap-40 items-center">
          <P3 color={"text-white"}>Get Free Trial</P3>
          <H1 color={"text-white"} textAlign={"center"}>
            Become a Dubai Daily Deals' Partner Today!
          </H1>
          <ButtonComp color={"pink-primary"}>Send Message</ButtonComp>
        </div>
      </section>
      <ContactSection />
      <FooterComp />
    </main>
  );
};

export default Member;
