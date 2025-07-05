import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/saim-avatar.png";
import Particle from "../Particle";
import TypewriterIntro from "./Type";
import Projects from "../Projects/Projects";
import Github from "../About/Github";
import Timeline from "../Projects/Timeline";
import TechStack from "../About/Techstack";

function Home() {
  return (
    <section>
      {/* Side by Side Layout: Header Section (Left) and Introduction Section (Right) */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            {/* Header Section with Social Links - Left Side */}
            <Col md={4} className="home-header">
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

              <div
                style={{
                  padding: 20,
                  textAlign: "left",
                  fontSize: ".7em",
                  height: "60px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 20,
                    right: 20,
                    zIndex: 10,
                  }}
                >
                  <TypewriterIntro />
                </div>
              </div>

              <div
                style={{
                  paddingTop: 20,
                  textAlign: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={myImg}
                  alt="home pic"
                  className="img-fluid Avatar"
                  style={{ maxHeight: "200px" }}
                />
              </div>
            </Col>

            {/* Combined Introduction Section - Right Side */}
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.2em", marginBottom: "20px" }}>
                <span className="purple">
                  A Backend & GenAI-focused Software Engineer
                </span>
              </h1>
              <p
                className="home-about-body"
                style={{ fontSize: "1.1em", lineHeight: "1.6" }}
              >
                👨‍💻 I specialize in building large-scale, production-grade
                software — from ⚙️ scalable backend systems and 🌐 full-stack
                apps to 🧠 agentic GenAI workflows.
                <br />
                <br />
                🧰 My stack includes expert-level{" "}
                <b className="purple">Core Python 🐍</b>,{" "}
                <b className="purple">Golang 🦫</b>,{" "}
                <b className="purple">JavaScript/TypeScript ⚡</b>,{" "}
                <b className="purple">C/C++ 🚀</b>,{" "}
                <b className="purple">Java ☕</b>, and{" "}
                <b className="purple">cloud-native development ☁️</b>.
                <br />
                <br />
                🤖 My work blends{" "}
                <b className="purple">
                  Generative AI, ML, cloud architecture, and DevOps
                </b>{" "}
                — crafting systems that are not only intelligent, but also
                resilient, reliable, and scalable at scale 📈.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      <div style={{ marginTop: "-30px" }}>
        <Timeline />
        <Projects />
        <TechStack />
        <Github />
      </div>
    </section>
  );
}

export default Home;
