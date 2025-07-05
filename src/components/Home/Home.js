import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import myImg from "../../Assets/saim-avatar.png";
import laptopImg from "../../Assets/about.png";
import Particle from "../Particle";
import Type from "./Type";
import Projects from "../Projects/Projects";
import Github from "../About/Github";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import Timeline from "../Projects/Timeline";

function Home() {
  return (
    <section>
      {/* Professional Timeline */}
      <Timeline />
      {/* Header Section with Social Links */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SAIM RAZA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={myImg}
                alt="home pic"
                className="img-fluid Avatar"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Combined Introduction Section */}
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple">Senior Software Engineer</span> |{" "}
                <span className="purple">GenAI Systems</span> |{" "}
                <span className="purple">Scalable Infrastructure</span>
              </h1>
              <p className="home-about-body">
                I'm a Senior Software Engineer at{" "}
                <b className="purple">
                  <a
                    href="https://liveramp.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    LiveRamp Holdings, Inc.
                  </a>
                </b>
                , building agentic AI systems, retrieval-augmented generation
                (RAG) pipelines, and scalable backend infrastructure on the
                Identity Engineering team.
                <br />
                <br />
                With deep roots in{" "}
                <b className="purple">
                  Core Python (Expert), Golang, JavaScript/TypeScript,
                </b>{" "}
                and experience across{" "}
                <b className="purple">
                  C/C++, Java, and cloud-native development
                </b>
                , I focus on translating cutting-edge research into real-world,
                production-grade systems.
                <br />
                <br />
                My background blends{" "}
                <b className="purple">
                  Generative AI & ML, cloud architecture, and DevOps
                </b>
                , enabling me to build systems that are not only intelligent—but
                also reliable at scale.
                <br />
                <br />
                🔧 <b className="purple">Previously:</b>
                <br />
                Tech Lead @{" "}
                <b className="purple">
                  <a
                    href="https://www.deshaw.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    D. E. Shaw & Co.
                  </a>
                </b>{" "}
                – Engineered ultra-low-latency trading infrastructure for global
                markets.
                <br />
                <br />
                Built & shipped products at{" "}
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
                </b>
                , and{" "}
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
                <br />
                🎓 <b className="purple">Education:</b>
                <br />
                M.S. in Computer Science,{" "}
                <b className="purple">
                  <a
                    href="https://en.wikipedia.org/wiki/Courant_Institute_of_Mathematical_Sciences"
                    rel="noreferrer"
                    target="_blank"
                  >
                    New York University – Courant
                  </a>
                </b>{" "}
                (2023)
                <br />
                <br />
                B.Tech in Mathematics & Computing,{" "}
                <b className="purple">Delhi Technological University (DTU)</b>,
                2016
                <br />
                <br />
                🥋 <b className="purple">Outside of work:</b>
                <br />
                Black Belt in <b className="purple">Taekwondo</b> (Kukkiwon,
                South Korea)
                <br />
                <br />
                Long drives, high-revving engines, and a good docuseries keep me
                going.
              </p>
            </Col>
            <Col md={4}>
              <img
                src={homeLogo}
                className="img-fluid Avatar"
                alt="avatar"
                style={{ paddingTop: "20px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Projects Section */}
      <Projects />

      {/* Combined Technical Skills Section */}
      <Container fluid className="about-section" id="skills">
        <Container>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset & Tools</strong>
          </h1>
          <p
            style={{
              color: "white",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            Technologies, frameworks, and tools I work with professionally
          </p>

          <Techstack />
          <Toolstack />
          <Github />
        </Container>
      </Container>
    </section>
  );
}

export default Home;
