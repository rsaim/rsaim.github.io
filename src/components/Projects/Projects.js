import React from "react";
import { Container } from "react-bootstrap";
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
          <div className="project-list-container">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GenAI Middleware Platform"
              description="Architected comprehensive GenAI middleware platform using Claude, LLaMA (Vertex AI), GCP, K8s, SingleStore. Built RAG pipelines, agentic AI systems for OnCall triage, Kubernetes agents, and optimized SQL queries in SingleStore/PostgreSQL. Achieved 18-25% ROAS gains with sub-50ms identity graph lookups at 600K+ RPS."
              technologies={[
                "Python",
                "Golang",
                "GCP",
                "Kubernetes",
                "SingleStore",
                "Claude AI",
                "LLaMA",
              ]}
              link="#"
            />

            <ProjectCard
              imgPath={plant}
              isBlog={false}
              title="Agentic AI & RAG Systems"
              description="Designed and implemented agentic AI orchestration systems for dynamic bid/content optimization and OnCall triage automation. Built RAG (Retrieval-Augmented Generation) pipelines for real-time data insights and deployed Kubernetes agents for autonomous system management, achieving 2X CTR improvement across marketing channels."
              technologies={[
                "Python",
                "RAG",
                "Kubernetes",
                "AI/ML",
                "System Design",
              ]}
              link="#"
            />
          </div>
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
          <div className="project-list-container">
            <ProjectCard
              imgPath={algo}
              isBlog={false}
              title="High-Performance Serialization Library"
              description="Engineered a cutting-edge Python serialization library for 'exotic' objects like lambdas and user-defined classes at DE Shaw. Achieved 100x performance advantage over open-source counterparts like dill and cloudpickle."
              technologies={[
                "Python",
                "C++",
                "Serialization",
                "Performance",
                "HPC",
              ]}
              link="#"
            />

            <ProjectCard
              imgPath={plant}
              isBlog={false}
              title="Performance Monitoring Framework"
              description="Architected a holistic framework for performance monitoring and regression detection of APIs and libraries at DE Shaw. Integrated real-time analytics with Grafana, InfluxDB, and automated anomaly detection."
              technologies={[
                "Python",
                "Grafana",
                "InfluxDB",
                "DevOps",
                "Monitoring",
              ]}
              link="#"
            />

            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Python 2 to 3 Migration"
              description="Led a team of 4 developers in migrating ~30 repositories containing ~2.5 million lines of code from Python 2 to Python 3.8 at DE Shaw. Implemented CI/CD pipelines and optimized legacy codebase with modern Python features."
              technologies={[
                "Python",
                "CI/CD",
                "Leadership",
                "Migration",
                "DevOps",
              ]}
              link="#"
            />

            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pyflyby - Open Source Contribution"
              description="A set of productivity tools for Python. Actively contributed to development, maintenance, improvements, and production releases to PyPI. Forked from DE Shaw's open source project to enhance Python developer productivity."
              technologies={["Python", "Open Source", "DevTools", "PyPI"]}
              link="https://github.com/rsaim/pyflyby"
            />
          </div>
        </div>

        {/* Other Professional Work */}
        <div id="professional">
          <h2
            className="project-heading"
            style={{ fontSize: "2.1em", paddingTop: "30px" }}
          >
            <strong className="purple">Other Professional Work</strong>
          </h2>
          <div className="project-list-container">
            <ProjectCard
              imgPath={algo}
              isBlog={false}
              title="Robothon Trading Platform - Citi"
              description="Developed a Global Markets Trading Competition platform for fixed income market making at Citi. Built with Java, Spring Boot, Python, Kafka, Redis, and integrated SWIG for low-latency communication between languages."
              technologies={[
                "Java",
                "Spring Boot",
                "Python",
                "Kafka",
                "Redis",
                "SWIG",
              ]}
              link="#"
            />

            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Advanced Object Tracking Algorithm - DRDO"
              description="Spearheaded a novel computer vision algorithm for precise object tracking in video sequences at DRDO. Achieved remarkable accuracy with mean-center location error of 6.791 and F-measure of 0.78, published in Expert Systems with Applications journal."
              technologies={[
                "Python",
                "Computer Vision",
                "ML/AI",
                "OpenCV",
                "Research",
              ]}
              link="https://www.sciencedirect.com/science/article/abs/pii/S0957417417301628"
            />

            <ProjectCard
              imgPath={algo}
              isBlog={true}
              title="PyCon India 2020 Talk"
              description="Delivered a technical talk on Parallel Computing (Concurrency vs Parallelism) and Serialization/Pickling at PyCon India 2020. Showcased real-world benchmarks, comparative studies, and hands-on demos of in-house solutions at DE Shaw."
              technologies={["Python", "Public Speaking", "HPC", "Teaching"]}
              link="https://www.youtube.com/watch?v=example"
            />
          </div>
        </div>

        {/* Personal & Open Source Projects */}
        <div id="personal">
          <h2
            className="project-heading"
            style={{ fontSize: "2.1em", paddingTop: "30px" }}
          >
            <strong className="purple">Personal & Open Source</strong> Projects
          </h2>
          <div className="project-list-container">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Instasanity - AI Instagram Cleanup"
              description="AI-Powered Instagram Cleanup tool built with Python. Automates the process of cleaning up Instagram content using machine learning algorithms to identify and categorize posts for better content management."
              technologies={[
                "Python",
                "AI/ML",
                "Instagram API",
                "Data Science",
              ]}
              link="https://github.com/rsaim/instasanity"
            />

            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Chrome Extension - Educative"
              description="Chrome extension built with JavaScript to make the text content of Educative.io courses wider for better readability. Enhances the learning experience by optimizing page layout and content presentation."
              technologies={[
                "JavaScript",
                "Chrome APIs",
                "CSS",
                "Web Extension",
              ]}
              link="https://github.com/rsaim/chrome-extension-educative"
            />

            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="DNS Server Application"
              description="Simplified Authoritative DNS Server implemented in Python. A lightweight DNS server that handles domain name resolution with custom configurations and logging capabilities for educational and testing purposes."
              technologies={[
                "Python",
                "Networking",
                "DNS",
                "System Programming",
              ]}
              link="https://github.com/rsaim/dns_app"
            />

            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Flask Microservice on IBM Cloud"
              description="A simple Flask application deployed on IBM Kubernetes instance via Docker containerization. Demonstrates cloud-native deployment practices with proper containerization and orchestration using Docker and Kubernetes."
              technologies={[
                "Python",
                "Flask",
                "Docker",
                "Kubernetes",
                "IBM Cloud",
              ]}
              link="https://github.com/rsaim/time_app"
            />

            <ProjectCard
              imgPath={algo}
              isBlog={false}
              title="DTU Student Results Portal"
              description="Portal to analyze and visualize results of Delhi Technological University students. Built with Python, provides comprehensive analytics and visualization tools for academic performance tracking and insights."
              technologies={[
                "Python",
                "Data Analytics",
                "Visualization",
                "Web Scraping",
              ]}
              link="https://github.com/rsaim/supplementary"
            />

            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Jeevanstambh Foundation Website"
              description="Developed and maintained the website for Jeevanstambh Foundation, an NGO working in various areas of relief management. Built with HTML/CSS/JavaScript to support their social impact initiatives and community outreach programs."
              technologies={["HTML", "CSS", "JavaScript", "Web Development"]}
              link="https://github.com/rsaim/jsf"
            />

            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bash Customization Setup"
              description="Shell setup scripts to customize Bash environment with productivity enhancements. Includes custom prompts, aliases, functions, and configuration files to improve developer workflow and terminal experience."
              technologies={[
                "Bash",
                "Shell Scripting",
                "DevTools",
                "Automation",
              ]}
              link="https://github.com/rsaim/bash_setup"
            />
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
