/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useRef, useEffect } from "react";
import { Button, Col, Row, Image } from "antd";

export function Shots() {
  const element: HTMLElement | null = document.querySelector("#containers");

  if (element) {
    element.addEventListener("wheel", (event: WheelEvent) => {
      event.preventDefault();

      if (element.scrollBy) {
        element.scrollBy({
          left: event.deltaY < 0 ? -1.5 : 1.5,
        });
      }
    });
  }
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
        <div className="shots-image" id="containers">
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
