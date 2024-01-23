/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useRef, useEffect } from "react";
import { Button, Col, Row, Image } from "antd";

export function Shots() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollSpeedMultiplier = 5;
  const scrollHorizontally = (e: WheelEvent) => {
    const delta = e.deltaY;

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (delta > 0) {
        if (container.scrollLeft < maxScrollLeft) {
          const newScrollPosition =
            container.scrollLeft + delta * scrollSpeedMultiplier;
          container.scrollTo({
            left: newScrollPosition,
            behavior: "smooth",
          });
          e.preventDefault();
        }
      } else if (delta < 0) {
        if (container.scrollLeft > 0) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          e.preventDefault();
        }
      }
    }
  };

  const bindHorizontalMouseWheel = (element: HTMLDivElement) => {
    if (element.addEventListener) {
      element.addEventListener("wheel", scrollHorizontally, false);
    } else if ((element as any).attachEvent) {
      (element as any).attachEvent("onwheel", scrollHorizontally);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      bindHorizontalMouseWheel(scrollContainer);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", scrollHorizontally);
      }
    };
  }, []);

  return (
    <div className="shots">
      <div className="shots-container">
        <div className="title">
          <div className="title-body">
            <Row
              gutter={[{ xs: 0, sm: 0, md: 0, lg: 42, xl: 42 }, 32]}
              style={{ width: "100%" }}
            >
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={8}
                xl={8}
                className="text-container"
              >
                <h1>Some shots</h1>
                <div className="buttons">
                  <Button
                    type="text"
                    href="https://dribbble.com/muugii101"
                    target="_blank"
                  >
                    Visit my DRIBBBLE
                    <Image
                      height={22}
                      width={22}
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
                    Visit my BEHANCE
                    <Image
                      height={22}
                      width={22}
                      alt="icon"
                      src="/assets/images/icons/arrow.svg"
                    />
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="shots-image" ref={scrollContainerRef}>
          <div className="shots-image-body">
            <Row gutter={[42, 32]}>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}></Col>
              <Col xs={24} sm={24} md={24} lg={16} xl={16} className="images">
                <div className="row">
                  <div className="image">
                    <Image
                      height={400}
                      width={400}
                      alt="interest"
                      src="/assets/images/dribbble1.png"
                    />
                  </div>
                  <div className="image">
                    <Image
                      height={400}
                      width={400}
                      alt="interest"
                      src="/assets/images/dribbble3.png"
                    />
                  </div>
                  <div className="image">
                    <Image
                      height={400}
                      width={400}
                      alt="interest"
                      src="/assets/images/dribbble5.png"
                    />
                  </div>
                  <div className="image">
                    <Image
                      height={400}
                      width={400}
                      alt="interest"
                      src="/assets/images/dribbble7.png"
                    />
                  </div>
                  <div className="image">
                    <Image
                      height={400}
                      width={400}
                      alt="interest"
                      src="/assets/images/dribbble9.png"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="image">
                    <Image
                      height={400}
                      width={400}
                      alt="interest"
                      src="/assets/images/dribbble2.png"
                    />
                  </div>
                  <div className="image">
                    <Image
                      height={400}
                      width={400}
                      alt="interest"
                      src="/assets/images/dribbble4.png"
                    />
                  </div>
                  <div className="image">
                    <Image
                      height={400}
                      width={400}
                      alt="interest"
                      src="/assets/images/dribbble6.png"
                    />
                  </div>
                  <div className="image">
                    <Image
                      height={400}
                      width={400}
                      alt="interest"
                      src="/assets/images/dribbble8.png"
                    />
                  </div>
                  <div className="image">
                    <Image
                      height={400}
                      width={400}
                      alt="interest"
                      src="/assets/images/dribbble10.png"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
