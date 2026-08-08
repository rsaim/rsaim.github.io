import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import TypewriterIntro from "./Type";
import Projects from "../Projects/Projects";
import Github from "../About/Github";
import Timeline from "../Projects/Timeline";
import TechStack from "../About/Techstack";
import profile from "../../config/profile.json";
import assetMap from "../../config/assetMap";

// Bold-wraps any of `terms` found in `text` (used to highlight company names
// in the bio without needing a markdown parser).
function renderWithHighlights(text, terms) {
  if (!terms || terms.length === 0) return text;
  const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");
  return text.split(pattern).map((part, i) =>
    terms.includes(part) ? (
      <b key={i} className="purple">
        {part}
      </b>
    ) : (
      part
    )
  );
}

function Home() {
  const { identity, home } = profile;
  const avatarSrc = identity.avatarKey ? assetMap.avatar : undefined;

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
                <strong className="main-name"> {identity.name.toUpperCase()}</strong>
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

              {avatarSrc && (
                <div
                  style={{
                    paddingTop: 20,
                    textAlign: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={avatarSrc}
                    alt="home pic"
                    className="img-fluid Avatar"
                    style={{ maxHeight: "200px" }}
                  />
                </div>
              )}
            </Col>

            {/* Combined Introduction Section - Right Side */}
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.2em", marginBottom: "20px" }}>
                <span className="purple">{home.headline}</span>
              </h1>
              <p
                className="home-about-body"
                style={{ fontSize: "1.1em", lineHeight: "1.6" }}
              >
                {home.bioParagraphs.map((paragraph, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                    {renderWithHighlights(paragraph, home.highlightTerms)}
                  </React.Fragment>
                ))}
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
