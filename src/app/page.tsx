"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import {
  Experience,
  Footer,
  Header,
  Hero,
  Interest,
  Loading,
  Menu,
  Shots,
  Work,
} from "@/components";
import throttle from "lodash/throttle";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [workSectionActive, setWorkSectionActive] = useState(false);
  const [expSectionActive, setExpSectionActive] = useState(false);

  const toWorkRef = useRef<HTMLDivElement>(null);
  const toExperienceRef = useRef<HTMLDivElement>(null);
  const toContactRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(() => {
    return ["sectionWork", "sectionExperience"];
  }, []);

  const throttledHandleScroll = useMemo(
    () =>
      throttle(() => {
        const currentScrollPosition =
          window.scrollY || document.documentElement.scrollTop;

        let isWorkSectionActive = false;
        let isExpSectionActive = false;

        sections.forEach((sectionId) => {
          const section = document.getElementById(sectionId);
          if (section) {
            const sectionTop =
              section.getBoundingClientRect().top + currentScrollPosition;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (
              sectionTop <= currentScrollPosition + window.innerHeight / 6 &&
              sectionBottom > currentScrollPosition
            ) {
              if (sectionId === "sectionWork") {
                isWorkSectionActive = true;
                isExpSectionActive = false;
              } else if (sectionId === "sectionExperience") {
                isExpSectionActive = true;
                isWorkSectionActive = false;
              }
            }
          }
        });

        setWorkSectionActive(isWorkSectionActive);
        setExpSectionActive(isExpSectionActive);
      }, 100),
    [sections]
  );

  const handleScroll = useCallback(throttledHandleScroll, [
    throttledHandleScroll,
  ]);

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
    window.addEventListener("scroll", handleScroll);

    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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

  return (
    <>
      {showLoading ? <Loading end={loading} /> : null}
      {loading ? (
        <>
          <Header
            scrollToWorkPress={scrollToWork}
            scrollToExperiencePress={scrollToExperience}
            scrollToContactPress={scrollToContact}
          />
          <Hero />
          <section id="sectionWork" ref={toWorkRef}>
            <Work />
          </section>
          <section id="sectionExperience" ref={toExperienceRef}>
            <Experience />
          </section>
          <Interest />
          <Shots />
          <div ref={toContactRef} />
          <Menu
            workSectionActive={workSectionActive}
            expSectionActive={expSectionActive}
            scrollToWorkPress={scrollToWork}
            scrollToExperiencePress={scrollToExperience}
            scrollToContactPress={scrollToContact}
          />
          <Footer />
        </>
      ) : null}
    </>
  );
}
