"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Button, Col, Row, message } from "antd";
import { Experience, Hero, Interest, Loading, Shots, Work } from "@/components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState("© Code by M-E");
  const hoverText = "Munkh-Erdene T.";

  const [onScrolled, setOnScrolled] = useState<boolean>(false);

  const toWorkRef = useRef<HTMLDivElement>(null);
  const toExperienceRef = useRef<HTMLDivElement>(null);
  const toContactRef = useRef<HTMLDivElement>(null);

  const email = "me.tuul21@gmail.com";

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoading(true);
    }, 3500);

    const timer2 = setTimeout(() => {
      setShowLoading(false);
    }, 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 300) {
        setOnScrolled(true);
      } else {
        setOnScrolled(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleMouseEnter1 = () => {
    setIsHovered(true);
    setDisplayText(hoverText);
  };

  const handleMouseLeave1 = () => {
    setIsHovered(false);
    setDisplayText("© Code by M-E");
  };

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        message.open({
          type: "success",
          content: "Email copied!",
        });
      })
      .catch((err) => {
        message.open({
          type: "error",
          content: `Failed to copy email: ${err}`,
        });
      });
  };

  const scrollToWork = () => {
    if (toWorkRef.current) {
      toWorkRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = () => {
    if (toExperienceRef.current) {
      toExperienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    toContactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toTopPress = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {showLoading ? <Loading end={loading} /> : null}
      {loading ? (
        <>
          <div className="layout-header">
            <div className="layout-header-container">
              <div
                className="home"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                <a>{displayText}</a>
              </div>
              <div className="menu">
                <Button
                  type="text"
                  shape="round"
                  className="menu-item"
                  onClick={scrollToWork}
                >
                  Work
                </Button>
                <Button
                  type="text"
                  shape="round"
                  className="menu-item"
                  onClick={scrollToExperience}
                >
                  Experience
                </Button>
                <Button
                  type="text"
                  shape="round"
                  className="menu-item"
                  onClick={scrollToContact}
                >
                  Contact
                </Button>
                <Button
                  type="primary"
                  shape="round"
                  className="menu-item-contact"
                  href="mailto:me.tuul21@gmail.com"
                >
                  Email me
                </Button>
              </div>
            </div>
          </div>
          <Hero />
          <section ref={toWorkRef}>
            <Work />
          </section>
          <section ref={toExperienceRef}>
            <Experience />
          </section>
          <Interest />
          <Shots />
          <div ref={toContactRef} />
          <div className={`layout-menu  ${onScrolled ? "visible" : ""}`}>
            <div className="layout-menu-container">
              <div className="menus">
                <Button type="primary" shape="round" onClick={scrollToWork}>
                  Work
                </Button>
                <Button
                  type="primary"
                  shape="round"
                  onClick={scrollToExperience}
                >
                  Experience
                </Button>
                <Button type="primary" shape="round" onClick={scrollToContact}>
                  Contact
                </Button>
                <Button
                  className="home"
                  type="primary"
                  shape="circle"
                  onClick={toTopPress}
                  icon={
                    <Image
                      height={24}
                      width={24}
                      alt="icon"
                      src="/assets/images/icons/top.svg"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="layout-footer">
            <div className="layout-footer-container">
              <Row gutter={[42, 42]}>
                <Col xs={24} sm={24} md={14} lg={17}>
                  <div className="name">
                    <div className="name-info">
                      <h1>I’m Munkh-Erdene</h1>
                      <p>
                        a digital product designer based in Ulaanbaatar, MGL.
                      </p>
                    </div>
                    <div className="name-actions">
                      <Button
                        type="primary"
                        size="large"
                        href="mailto:me.tuul21@gmail.com"
                      >
                        Email me
                        <Image
                          height={24}
                          width={24}
                          alt="icon"
                          src="/assets/images/icons/arrow.svg"
                        />
                      </Button>
                      <Button size="large" onClick={handleCopyEmail}>
                        Copy email
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={10} lg={7}>
                  <div className="social">
                    <Button
                      type="text"
                      href="https://www.linkedin.com/in/munkh-erdene-tuul-21b26418b/"
                      target="_blank"
                    >
                      Linkedin
                      <Image
                        height={24}
                        width={24}
                        alt="icon"
                        src="/assets/images/icons/arrow.svg"
                      />
                    </Button>
                    <div className="divider" />
                    <Button
                      type="text"
                      href="https://www.instagram.com/_dayswithcoffee_/"
                      target="_blank"
                    >
                      Instagram
                      <Image
                        height={24}
                        width={24}
                        alt="icon"
                        src="/assets/images/icons/arrow.svg"
                      />
                    </Button>
                    <div className="divider" />
                    <Button
                      type="text"
                      href="https://dribbble.com/muugii101"
                      target="_blank"
                    >
                      Dribbble
                      <Image
                        height={24}
                        width={24}
                        alt="icon"
                        src="/assets/images/icons/arrow.svg"
                      />
                    </Button>
                    <div className="divider" />
                    <Button
                      type="text"
                      href="https://www.behance.net/muugii101"
                      target="_blank"
                    >
                      Behance
                      <Image
                        height={24}
                        width={24}
                        alt="icon"
                        src="/assets/images/icons/arrow.svg"
                      />
                    </Button>
                  </div>
                </Col>
              </Row>
              <div className="copyright">
                <span>Made by ❤️ ・ Munkh-Erdene T.</span>
                <span>©2024.</span>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
