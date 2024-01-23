"use client";
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import Image from "next/image";

interface Props {
  workSectionActive?: boolean;
  expSectionActive?: boolean;
  scrollToWorkPress?: () => void;
  scrollToExperiencePress?: () => void;
  scrollToContactPress?: () => void;
}

export function Menu({
  workSectionActive,
  expSectionActive,
  scrollToWorkPress,
  scrollToExperiencePress,
  scrollToContactPress,
}: Props) {
  const [onScrolled, setOnScrolled] = useState<boolean>(false);

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

  const toTopPress = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`layout-menu  ${onScrolled ? "visible" : ""}`}>
      <div className="layout-menu-container">
        <div className="menus">
          <Button
            className={` ${workSectionActive ? "active" : ""}`}
            type="primary"
            shape="round"
            onClick={scrollToWorkPress}
          >
            Work
          </Button>
          <Button
            className={` ${expSectionActive ? "active" : ""}`}
            type="primary"
            shape="round"
            onClick={scrollToExperiencePress}
          >
            Experience
          </Button>
          <Button type="primary" shape="round" onClick={scrollToContactPress}>
            Contact
          </Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="38"
            viewBox="0 0 14 38"
            fill="none"
            className="svg"
          >
            <path
              d="M13.5 0V18V20V38C10 34 4 34 0.5 38V20V18V0C4 4 10 4 13.5 0Z"
              fill="#302e30"
            />
          </svg>
        </div>
        <Button
          className="top"
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
  );
}
