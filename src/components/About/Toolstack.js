import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiTerraform,
  SiGrafana,
  SiPrometheus,
  SiDatadog,
  SiElasticsearch,
  SiJenkins,
  SiAnsible,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiJupyter,
  SiApachekafka,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux style={{ color: "#FCC624" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ color: "#007ACC" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker style={{ color: "#2496ED" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes style={{ color: "#326CE5" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform style={{ color: "#7B42BC" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible style={{ color: "#EE0000" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana style={{ color: "#F46800" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus style={{ color: "#E6522C" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDatadog style={{ color: "#632CA6" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch style={{ color: "#005571" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins style={{ color: "#D24939" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit style={{ color: "#F05032" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{ color: "#FF6C37" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter style={{ color: "#F37626" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka style={{ color: "#231F20" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel style={{ color: "#000000" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku style={{ color: "#430098" }} />
      </Col>
    </Row>
  );
}

export default Toolstack;
