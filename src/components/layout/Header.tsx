"use client";
import React, { useState } from "react";
import { Button } from "antd";

interface Props {
  scrollToWorkPress?: () => void;
  scrollToExperiencePress?: () => void;
  scrollToContactPress?: () => void;
}

export function Header({
  scrollToWorkPress,
  scrollToExperiencePress,
  scrollToContactPress,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState("© Code by M-E");
  const hoverText = "Munkh-Erdene T.";

  const handleMouseEnter1 = () => {
    setIsHovered(true);
    setDisplayText(hoverText);
  };

  const handleMouseLeave1 = () => {
    setIsHovered(false);
    setDisplayText("© Code by M-E");
  };

  return (
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
            onClick={scrollToWorkPress}
          >
            Work
          </Button>
          <Button
            type="text"
            shape="round"
            className="menu-item"
            onClick={scrollToExperiencePress}
          >
            Experience
          </Button>
          <Button
            type="text"
            shape="round"
            className="menu-item"
            onClick={scrollToContactPress}
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
  );
}
