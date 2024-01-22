import { Col, Row } from "antd";
import Image from "next/image";

export function Interest() {
  return (
    <div className="interest">
      <div className="interest-container">
        <Row gutter={[42, 32]}>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <div className="title">
              <h1>Interests</h1>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <Row gutter={[12, 8]}>
              <Col xs={12} sm={8} md={8} lg={6} xl={6}>
                <Image
                  height={300}
                  width={300}
                  alt="interest"
                  src="/assets/images/int1.jpg"
                />
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6}>
                <Image
                  height={300}
                  width={300}
                  alt="interest"
                  src="/assets/images/int2.jpg"
                />
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6}>
                <Image
                  height={300}
                  width={300}
                  alt="interest"
                  src="/assets/images/int3.jpg"
                />
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6}>
                <Image
                  height={300}
                  width={300}
                  alt="interest"
                  src="/assets/images/int4.jpg"
                />
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6}>
                <Image
                  height={300}
                  width={300}
                  alt="interest"
                  src="/assets/images/int5.jpg"
                />
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6}>
                <Image
                  height={300}
                  width={300}
                  alt="interest"
                  src="/assets/images/int6.jpg"
                />
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6}>
                <Image
                  height={300}
                  width={300}
                  alt="interest"
                  src="/assets/images/int7.JPG"
                />
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6}>
                <Image
                  height={300}
                  width={300}
                  alt="interest"
                  src="/assets/images/int8.jpg"
                />
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6}>
                <Image
                  height={300}
                  width={300}
                  alt="interest"
                  src="/assets/images/int9.jpg"
                />
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6}>
                <Image
                  height={300}
                  width={300}
                  alt="interest"
                  src="/assets/images/int10.jpg"
                />
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6}>
                <Image
                  height={300}
                  width={300}
                  alt="interest"
                  src="/assets/images/int11.jpg"
                />
              </Col>
              <Col xs={12} sm={8} md={8} lg={6} xl={6}>
                <Image
                  height={300}
                  width={300}
                  alt="interest"
                  src="/assets/images/int12.jpg"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
