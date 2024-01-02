import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import banner1Image from "../../assets/banner1_img.png";
import featureBannerImage from "../../assets/feature_banner_img.png";
import clipboardIcon from "../../assets/icons/clipboard.svg";
import messagesIcon from "../../assets/icons/messages.svg";
import securityIcon from "../../assets/icons/security.svg";
import h25 from "../../assets/partners/25h.svg";
import pedal_7 from "../../assets/partners/7_pedal.svg";
import barasti from "../../assets/partners/barasti.svg";
import candy_pants from "../../assets/partners/candy_pants.svg";
import desert_barbell from "../../assets/partners/desert_barbell.svg";
import hilton from "../../assets/partners/hilton.svg";
import hospitality from "../../assets/partners/hospitality.svg";
import jones from "../../assets/partners/jones.svg";
import lock_stock from "../../assets/partners/lock_stock.svg";
import mariott from "../../assets/partners/mariott.svg";
import meridien from "../../assets/partners/meridien.svg";
import nikki_beach from "../../assets/partners/nikki_beach.svg";
import pizza_express from "../../assets/partners/pizza_express.svg";
import rebel from "../../assets/partners/rebel.svg";
import revl from "../../assets/partners/revl.svg";
import sls from "../../assets/partners/sls.svg";
import solutions from "../../assets/partners/solutions.svg";
import stregis from "../../assets/partners/stregis.svg";
import warehouse from "../../assets/partners/warehouse.svg";
import westin from "../../assets/partners/westin.svg";
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

const Member = () => {
  const partners = [
    { icon: barasti },
    { icon: pedal_7 },
    { icon: h25 },
    { icon: candy_pants },
    { icon: desert_barbell },
    { icon: hilton },
    { icon: hospitality },
    { icon: jones },
    { icon: lock_stock },
    { icon: mariott },
    { icon: meridien },
    { icon: nikki_beach },
    { icon: pizza_express },
    { icon: rebel },
    { icon: sls },
    { icon: revl },
    { icon: solutions },
    { icon: stregis },
    { icon: warehouse },
    { icon: westin },
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
              paddingTop: "100px",
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
      </section>
      <div className="container">
        <section className="main-section qualities-section flex-responsive">
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
        <section className="main-section features-section flex-responsive-reverse">
          <ImageComp
            src={featureBannerImage}
            style={{
              flex: "1.3",
            }}
          />
          <div className="features-section-text flex-col gap-30 flex-1">
            <H2>FAQs</H2>
            {faqs?.map((faq, index) => {
              return <Faq faq={faq} index={index} />;
            })}
          </div>
        </section>
        <section className="main-section sharing-section flex-responsive">
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
        <section className="main-section partners-section flex-col gap-50">
          <H2 textAlign={"center"}>Our Partners</H2>
          <div className="partners-cards gap-30">
            {partners?.map((partner, index) => {
              return <PartnerLogo key={index} src={partner.icon} />;
            })}
          </div>
        </section>
      </div>

      <section className="main-section">
        <div className="container">
          <H1 textAlign={"center"}>Hear from our partners</H1>
          <P5 color={"text-light"} textAlign={"center"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </P5>
        </div>
        <TestimonialSlider />
      </section>
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
