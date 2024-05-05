import { Col, Row } from "antd";

export function Experience() {
  return (
    <a
      href="https://drive.google.com/file/d/158skDWwf7XKy2Dqkabsz_HioEXGLatGt/view?usp=sharing"
      target="_blank"
    >
      <div className="experience">
        <div className="experience-container">
          <Row gutter={[42, 32]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="title">
                <h1>My experience</h1>
                <p>
                  I have over 7 years of experience as a front-end developer and
                  UI/UX designer. My enthusiasm for integrating contemporary
                  technology with culture is the driving force behind my
                  endeavors.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="position start">
                <p>M Bank</p>
                <div className="position-container">
                  <span className="title">Product designer</span>
                  <span>2024</span>
                </div>
              </div>
              <div className="position start">
                <p>Tab Solution</p>
                <div className="position-container">
                  <span className="title">Senior designer</span>
                  <span>2020~2024</span>
                </div>
              </div>
              <div className="position">
                <p>Tab Solution</p>
                <div className="position-container">
                  <span className="title">UI/UX designer</span>
                  <span>2017~2020</span>
                </div>
              </div>
              <div className="position end">
                <p>Tab Solution</p>
                <div className="position-container">
                  <span className="title">Frontend developer</span>
                  <span>2016~2017</span>
                </div>
              </div>
            </Col>
          </Row>
          <div className="divider" />
          <Row gutter={[42, 32]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="title">
                <h1>My skill</h1>
                {/* <p>
                I have introduced all foreign and domestic projects to the
                market using various technologies and tools including Figma,
                Adobe XD, React native, ReactJS, and NextJS.
              </p> */}
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="skill-container">
                <p>Design skills</p>
                <div className="skill-container-section">
                  <div className="position start">
                    <div className="position-container">
                      <span className="title">Figma</span>
                      <span>Good</span>
                    </div>
                  </div>
                  <div className="position">
                    <div className="position-container">
                      <span className="title">Adobe XD</span>
                      <span>Good</span>
                    </div>
                  </div>
                  <div className="position ">
                    <div className="position-container">
                      <span className="title">Adobe illustrator</span>
                      <span>Good</span>
                    </div>
                  </div>
                  <div className="position ">
                    <div className="position-container">
                      <span className="title">Adobe Photoshop</span>
                      <span>Good</span>
                    </div>
                  </div>
                </div>
                <p>Development skills</p>
                <div className="skill-container-section">
                  <div className="position start">
                    <div className="position-container">
                      <span className="title">React</span>
                      <span>Good</span>
                    </div>
                  </div>
                  <div className="position">
                    <div className="position-container">
                      <span className="title">React native</span>
                      <span>Good</span>
                    </div>
                  </div>
                  <div className="position ">
                    <div className="position-container">
                      <span className="title">NextJS</span>
                      <span>Good</span>
                    </div>
                  </div>
                  <div className="position end">
                    <div className="position-container">
                      <span className="title">Javascript & HTML & CSS</span>
                      <span>Good</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </a>
  );
}
