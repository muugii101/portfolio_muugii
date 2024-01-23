import { Button, Col, Row, message } from "antd";
import Image from "next/image";

export function Footer() {
  const email = "me.tuul21@gmail.com";

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

  return (
    <div className="layout-footer">
      <div className="layout-footer-container">
        <Row gutter={[42, 42]}>
          <Col xs={24} sm={24} md={14} lg={17}>
            <div className="name">
              <div className="name-info">
                <h1>
                  I’m <strong>Munkh-Erdene</strong>
                </h1>
                <p>a digital product designer based in Ulaanbaatar, MGL.</p>
              </div>
              <div className="name-actions">
                <Button
                  type="primary"
                  size="large"
                  href="mailto:me.tuul21@gmail.com"
                >
                  Email me
                  <Image
                    height={22}
                    width={22}
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
                  height={22}
                  width={22}
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
                  height={22}
                  width={22}
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
                Behance
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
        <div className="copyright">
          <span>Made by ❤️ ・ Munkh-Erdene T.</span>
          <span>©2024.</span>
        </div>
      </div>
    </div>
  );
}
