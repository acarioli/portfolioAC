import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import avatar from "../../Assets/avatar.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a marketing and international business specialist with a
              strong background in Data Science, process automation, and web
              development. 💻
              <br />
              <br />
              Proficient in
              <i>
                <b className="purple"> JavaScript, HTML, CSS.</b>
              </i>
              <br />
              <br />I have knowledge working with databases such as
              <i>
                <b className="purple"> MongoDB, MySQL, and PostgreSQL.</b>
              </i>
              <br />
              <br />I specialize in
              <i>
                <b className="purple"> Node.js, React.js, and Next.js</b>
              </i>
              <br />
              <br />
              I'm deeply passionate about&nbsp;
              <i>
                <b className="purple">data analysis </b> and crafting
                technologies to streamline processes and drive business growth
                across <b className="purple">digital platforms</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/acarioli"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aldanacarioli/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://api.whatsapp.com/send?phone=541144397214&text=%C2%A1Hola!%20He%20revisado%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20ponerme%20en%20contacto%20contigo."
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
