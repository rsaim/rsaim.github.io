import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/home-main.svg";

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
              Currently, I'm working as a Senior Software Engineer at{" "}
              <b className="purple">
                <a
                  href="https://liveramp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  LiveRamp Holdings, Inc
                </a>
              </b>{" "}
              on the Identity Engineering team, where I architect and build{" "}
              <b className="purple">
                GenAI middleware platforms, RAG pipelines, and agentic AI
                systems
              </b>{" "}
              for real-time identity resolution. My work includes developing{" "}
              <b className="purple">
                agentic AI for OnCall triage, Kubernetes agents, and optimizing
                SQL queries in SingleStore and PostgreSQL
              </b>{" "}
              for high-throughput distributed systems.
              <br />
              <br />I graduated with MS in Computer Science from{" "}
              <b className="purple">
                <a
                  href="https://en.wikipedia.org/wiki/Courant_Institute_of_Mathematical_Sciences"
                  rel="noreferrer"
                  target="_blank"
                >
                  New York University (Courant)
                </a>
              </b>{" "}
              in August 2023.
              <br />
              <br />
              Previously, I spent over 5 years as a Tech Lead at{" "}
              <b className="purple">
                <a
                  href="https://www.deshaw.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  D. E. Shaw & Co.
                </a>
              </b>{" "}
              building algorithmic trading infrastructure. I have also worked at{" "}
              <b className="purple">
                <a
                  href="https://www.bloomberg.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Bloomberg LP
                </a>
                ,{" "}
                <a
                  href="https://www.nasa.gov/"
                  rel="noreferrer"
                  target="_blank"
                >
                  NASA
                </a>
                ,{" "}
                <a
                  href="https://www.citi.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Citi
                </a>
                ,{" "}
                <a
                  href="https://www.skillet.ai/"
                  rel="noreferrer"
                  target="_blank"
                >
                  skillet.ai
                </a>
              </b>{" "}
              and{" "}
              <b>
                <a
                  href="https://www.drdo.gov.in/"
                  rel="noreferrer"
                  target="_blank"
                >
                  DRDO
                </a>
              </b>
              .
              <br />
              <br />I am highly proficient in{" "}
              <b className="purple">
                Core Python (Expert), JAVA, JavaScript, TypeScript, C++
              </b>{" "}
              and have extensive experience with{" "}
              <b className="purple">
                GenAI & ML, Cloud Technologies, and DevOps
              </b>
              <br />
              <br />I specialize in building{" "}
              <b className="purple">
                high-performance distributed systems, GenAI platforms, and
                scalable backend architectures
              </b>{" "}
              that power real-world applications at scale
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
                  href="https://stackoverflow.com/users/rsaim"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaStackOverflow />
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
