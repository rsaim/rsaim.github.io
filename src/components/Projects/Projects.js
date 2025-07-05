import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "./Projects.css";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Professional projects and open-source contributions organized by
          company and technology stack.
        </p>

        {/* LiveRamp - GenAI & Infrastructure */}
        <div id="liveramp">
          <h2
            className="project-heading"
            style={{ fontSize: "2.1em", paddingTop: "30px" }}
          >
            <strong className="purple">LiveRamp Holdings</strong> - GenAI &
            Infrastructure
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="GenAI Middleware Platform"
                description="Architected comprehensive GenAI middleware platform using Claude, LLaMA (Vertex AI), GCP, K8s, SingleStore. Built RAG pipelines, agentic AI systems for OnCall triage, Kubernetes agents, and optimized SQL queries in SingleStore/PostgreSQL. Achieved 18-25% ROAS gains with sub-50ms identity graph lookups at 600K+ RPS."
                link="#"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={plant}
                isBlog={false}
                title="Agentic AI & RAG Systems"
                description="Designed and implemented agentic AI orchestration systems for dynamic bid/content optimization and OnCall triage automation. Built RAG (Retrieval-Augmented Generation) pipelines for real-time data insights and deployed Kubernetes agents for autonomous system management, achieving 2X CTR improvement across marketing channels."
                link="#"
              />
            </Col>
          </Row>
        </div>

        {/* D. E. Shaw - Trading & Infrastructure */}
        <div id="deshaw">
          <h2
            className="project-heading"
            style={{ fontSize: "2.1em", paddingTop: "30px" }}
          >
            <strong className="purple">D. E. Shaw & Co.</strong> - Trading &
            Infrastructure
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={algo}
                isBlog={false}
                title="High-Performance Serialization Library"
                description="Engineered a cutting-edge Python serialization library for 'exotic' objects like lambdas and user-defined classes at DE Shaw. Achieved 100x performance advantage over open-source counterparts like dill and cloudpickle."
                link="#"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={plant}
                isBlog={false}
                title="Performance Monitoring Framework"
                description="Architected a holistic framework for performance monitoring and regression detection of APIs and libraries at DE Shaw. Integrated real-time analytics with Grafana, InfluxDB, and automated anomaly detection."
                link="#"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={editor}
                isBlog={false}
                title="Python 2 to 3 Migration"
                description="Led a team of 4 developers in migrating ~30 repositories containing ~2.5 million lines of code from Python 2 to Python 3.8 at DE Shaw. Implemented CI/CD pipelines and optimized legacy codebase with modern Python features."
                link="#"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bitsOfCode}
                isBlog={false}
                title="Pyflyby - Open Source Contribution"
                description="A set of productivity tools for Python. Actively contributed to development, maintenance, improvements, and production releases to PyPI. Forked from DE Shaw's open source project to enhance Python developer productivity."
                link="https://github.com/rsaim/pyflyby"
              />
            </Col>
          </Row>
        </div>

        {/* Other Professional Work */}
        <div id="professional">
          <h2
            className="project-heading"
            style={{ fontSize: "2.1em", paddingTop: "30px" }}
          >
            <strong className="purple">Other Professional Work</strong>
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={algo}
                isBlog={false}
                title="Robothon Trading Platform - Citi"
                description="Developed a Global Markets Trading Competition platform for fixed income market making at Citi. Built with Java, Spring Boot, Python, Kafka, Redis, and integrated SWIG for low-latency communication between languages."
                link="#"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={emotion}
                isBlog={false}
                title="Advanced Object Tracking Algorithm - DRDO"
                description="Spearheaded a novel computer vision algorithm for precise object tracking in video sequences at DRDO. Achieved remarkable accuracy with mean-center location error of 6.791 and F-measure of 0.78, published in Expert Systems with Applications journal."
                link="https://www.sciencedirect.com/science/article/abs/pii/S0957417417301628"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={algo}
                isBlog={true}
                title="PyCon India 2020 Talk"
                description="Delivered a technical talk on Parallel Computing (Concurrency vs Parallelism) and Serialization/Pickling at PyCon India 2020. Showcased real-world benchmarks, comparative studies, and hands-on demos of in-house solutions at DE Shaw."
                link="https://www.youtube.com/watch?v=example"
              />
            </Col>
          </Row>
        </div>

        {/* Personal & Open Source Projects */}
        <div id="personal">
          <h2
            className="project-heading"
            style={{ fontSize: "2.1em", paddingTop: "30px" }}
          >
            <strong className="purple">Personal & Open Source</strong> Projects
          </h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Instasanity - AI Instagram Cleanup"
                description="AI-Powered Instagram Cleanup tool built with Python. Automates the process of cleaning up Instagram content using machine learning algorithms to identify and categorize posts for better content management."
                link="https://github.com/rsaim/instasanity"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={editor}
                isBlog={false}
                title="Chrome Extension - Educative"
                description="Chrome extension built with JavaScript to make the text content of Educative.io courses wider for better readability. Enhances the learning experience by optimizing page layout and content presentation."
                link="https://github.com/rsaim/chrome-extension-educative"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={leaf}
                isBlog={false}
                title="DNS Server Application"
                description="Simplified Authoritative DNS Server implemented in Python. A lightweight DNS server that handles domain name resolution with custom configurations and logging capabilities for educational and testing purposes."
                link="https://github.com/rsaim/dns_app"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bitsOfCode}
                isBlog={false}
                title="Flask Microservice on IBM Cloud"
                description="A simple Flask application deployed on IBM Kubernetes instance via Docker containerization. Demonstrates cloud-native deployment practices with proper containerization and orchestration using Docker and Kubernetes."
                link="https://github.com/rsaim/time_app"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={algo}
                isBlog={false}
                title="DTU Student Results Portal"
                description="Portal to analyze and visualize results of Delhi Technological University students. Built with Python, provides comprehensive analytics and visualization tools for academic performance tracking and insights."
                link="https://github.com/rsaim/supplementary"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={suicide}
                isBlog={false}
                title="Jeevanstambh Foundation Website"
                description="Developed and maintained the website for Jeevanstambh Foundation, an NGO working in various areas of relief management. Built with HTML/CSS/JavaScript to support their social impact initiatives and community outreach programs."
                link="https://github.com/rsaim/jsf"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={editor}
                isBlog={false}
                title="Bash Customization Setup"
                description="Shell setup scripts to customize Bash environment with productivity enhancements. Includes custom prompts, aliases, functions, and configuration files to improve developer workflow and terminal experience."
                link="https://github.com/rsaim/bash_setup"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
