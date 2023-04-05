import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              Currently, I'm interning at <b className="purple">
                <a href="https://www.skillet.ai/" rel="noreferrer" target="_blank"> skillet.ai </a>
              </b>
              and pursuing Master in Computer Science @ <b className="purple">
                <a href="https://en.wikipedia.org/wiki/Courant_Institute_of_Mathematical_Sciences" rel="noreferrer" target="_blank"> New York University (Courant)  </a>
              </b>
              <br />
              <br />
              Previously, I spent over half-a-decade crunching code for Wall Street @ <b className="purple">
                <a href="https://www.deshaw.com/" rel="noreferrer" target="_blank">D. E. Shaw & Co. </a>
              </b>I have also worked at <b className="purple">
                <a href="https://www.nasa.gov/" rel="noreferrer" target="_blank"> NASA </a>,
                <a href="https://liveramp.com/" rel="noreferrer" target="_blank"> LiveRamp, </a>
                </b>
                 and
                <b>
                <a href="https://www.drdo.gov.in/" rel="noreferrer" target="_blank"> DRDO. </a>
              </b>
              <br />
              <br />
              I am highly profiencient in core Python and classics like <b className="purple"> Javascript, C++, and JAVA </b>
              <br />
              <br />
              I'm interested in building new &nbsp; <b className="purple">Software Technologies and Products </b> to be used at large-scale
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homeLogo} className="img-fluid Avatar" alt="avatar" />
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
                  href="https://github.com/rsaim"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/raza-saim/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rsa.im/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
