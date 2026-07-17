import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi,
            <br />
            <br />I am <span className="purple">Saim Raza </span> from{" "}
            <span className="purple"> New York City</span>
            <br />
            <br />I graduated with B. Tech. in Mathematics and Computing from{" "}
            <span className="purple">
              Delhi Technological University (DTU)
            </span>{" "}
            in 2016
            <br />
            <br />I completed my MS in Computer Science at{" "}
            <span className="purple">New York University (NYU) Courant</span> in
            August 2023
            <br />
            <br />
            Currently, I'm working as a Senior Software Engineer at{" "}
            <span className="purple">StubHub Holdings, Inc</span> on the GenAI
            Infra / Marketplace Operations team. My work focuses on architecting{" "}
            <span className="purple">
              multi-agent LLM systems, MCP-based tooling, and agentic pipelines
              with LangGraph and Claude Code
            </span>{" "}
            — shipping platforms like{" "}
            <span className="purple">
              BDD-AI (Gherkin-native test-generation), TRE-AI (agentic
              ticket-resolution engine), and VOX-AI (real-time voice agent)
            </span>{" "}
            with hybrid RAG (BM25 + dense + cross-encoder reranking) and
            LLM-as-judge evaluation across a marketplace spanning 100+
            countries.
            <br />
            <br />
            Apart from coding, some following are some of activities that I love
            to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Taekwondo (Black belt from Kukkiwon, South Korea)
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Docuseries
            </li>
            <li className="about-activity">
              <ImPointRight /> Driving cars and bikes
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
