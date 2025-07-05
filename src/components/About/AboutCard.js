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
            <span className="purple">LiveRamp Holdings, Inc</span> on the
            Identity Engineering team. My work focuses on architecting{" "}
            <span className="purple">
              GenAI middleware platforms, developing RAG pipelines, and building
              agentic AI systems
            </span>{" "}
            for real-time identity resolution. I also work on{" "}
            <span className="purple">
              agentic AI for OnCall triage, Kubernetes agents, and SQL
              optimization in SingleStore and PostgreSQL
            </span>{" "}
            for high-performance distributed systems.
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
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
