"use client";
import Image from "next/image";
import { Col, Row } from "antd";

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <h1>
          Hey there <span className="wave">👋</span>,
          <br />
          I’m <strong>Munkh-Erdene</strong>
        </h1>
        <Row gutter={[{ xs: 24, sm: 32, md: 92 }, 32]}>
          <Col
            xs={{ order: 2, span: 24 }}
            sm={{ order: 2, span: 24 }}
            md={{ order: 1, span: 12 }}
            lg={{ order: 1, span: 13 }}
            xl={{ order: 1, span: 13 }}
            className="info"
          >
            <h3>
              Simply said, I love <br />
              design and code.
            </h3>
            <div className="info">
              <p>
                I’m Munkh-Erdene — a digital product designer and frontend
                developer with over 7 years of experience. I care a lot about
                using design for positive impact. Currently based in
                Ulaanbaatar, Mongolia.
              </p>
              <h4>
                I push my work to new horizons, always putting quality first.
              </h4>
              <p>
                My methodology is anchored in research-based principles, and I
                firmly hold that effective collaboration and collective effort
                are pivotal in crafting impactful products.
              </p>
            </div>
          </Col>
          <Col
            xs={{ order: 1, span: 24 }}
            sm={{ order: 1, span: 24 }}
            md={{ order: 2, span: 12 }}
            lg={{ order: 2, span: 11 }}
            xl={{ order: 2, span: 11 }}
          >
            <Image
              height={640}
              width={560}
              alt="avatar"
              src="/assets/images/muugii_back.png"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
