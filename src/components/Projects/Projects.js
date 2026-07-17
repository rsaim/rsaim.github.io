import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "./Projects.css";
import bddAiLogo from "../../Assets/Projects/bdd-ai.png";
import treAiLogo from "../../Assets/Projects/tre-ai.jpg";
import voxAiLogo from "../../Assets/Projects/vox-ai.jpg";
import liverampBlog from "../../Assets/Projects/liveramp-blog.jpg";
import liverampCtv from "../../Assets/Projects/liveramp-ctv.png";
import pickleImg from "../../Assets/Projects/pickle.jpg";
import profileImg from "../../Assets/Projects/profile.jpg";
import py2to3Img from "../../Assets/Projects/py2to3.jpg";
import pyflybyImg from "../../Assets/Projects/pyflyby.png";
import citiImg from "../../Assets/Projects/citi.jpg";
import drdoCvImg from "../../Assets/Projects/drdo-cv.gif";
import proxyImg from "../../Assets/Projects/proxy.jpg";
import pyconImg from "../../Assets/Projects/pycon.jpg";
import instasanityImg from "../../Assets/Projects/instasanity.png";
import chromeExtImg from "../../Assets/Projects/chrome-ext.png";
import dnsImg from "../../Assets/Projects/dns.jpg";
import jeevanstambhImg from "../../Assets/Projects/jeevanstambh.jpg";

// Project data organized by sections
const projectData = {
  stubhub: {
    title: "StubHub Holdings - GenAI Infra / Marketplace Operations",
    projects: [
      {
        imgPath: bddAiLogo,
        isBlog: false,
        title: "BDD-AI: Gherkin Native Integration Testing Suite",
        description:
          "Gherkin-native test-generation platform. Multi-agent codegen pipeline (planner / writer / critic) with Claude Code as the codegen agent, coordinated via Model Context Protocol (MCP) for live codebase context. Self-correcting reflection loops and JSON-schema-validated outputs.",
        technologies: [
          "Claude Code",
          "MCP",
          "Multi-agent",
          "Reflection Loops",
          "JSON-schema",
          "Gherkin/BDD",
          "C#/.NET 8",
        ],
        link: "https://cucumber.io/docs/gherkin/",
      },
      {
        imgPath: treAiLogo,
        isBlog: false,
        title: "TRE-AI — Agentic Ticket-Resolution Engine",
        description:
          "Agentic ticket-resolution engine on declarative DAGs (JSON Decision Model + Windmill OpenFlow Spec). Routing → specialist → validator → audit multi-agent supervisor with confidence-thresholded human-in-the-loop, structured tool calling, and LLM-as-judge for continuous quality eval, prompt versioning, and drift detection.",
        technologies: [
          "LangGraph",
          "LangSmith",
          "Windmill/OpenFlow",
          "Multi-agent Supervisor",
          "LLM-as-judge",
          "Human-in-the-loop",
          "Tool Use",
          "C#/.NET 8",
        ],
        link: "https://www.windmill.dev/",
      },
      {
        imgPath: voxAiLogo,
        isBlog: false,
        title: "VOX-AI — Real-Time Conversational Voice Agent",
        description:
          "Real-time voice agent for internal operations: streaming STT → LangGraph multi-agent reasoner (retrieval / Claude Sonnet 4.6 extended thinking / safety & guardrails) → low-latency TTS over WebRTC. Hybrid retrieval (BM25 + dense + cross-encoder reranking), barge-in / interruption handling, and voice-activity-aware turn-taking.",
        technologies: [
          "Voice Agents",
          "WebRTC",
          "Streaming STT/TTS",
          "LangGraph",
          "Claude Sonnet 4.6",
          "Hybrid RAG",
          "BM25 + Dense + Reranking",
          "VAD / Barge-in",
          "LangSmith",
        ],
        link: "https://claude.com/customers/stubhub",
      },
    ],
  },
  liveramp: {
    title: "LiveRamp Holdings - GenAI & Infrastructure",
    projects: [
      {
        imgPath: liverampBlog,
        isBlog: false,
        title: "GenAI & Infrastructure Projects",
        description: "Details not disclosed",
        technologies: [
          "Python",
          "Golang",
          "GCP",
          "Kubernetes",
          "SingleStore",
          "Claude AI",
          "LLaMA",
          "RAG",
          "AI/ML",
          "System Design",
        ],
        link: "#",
      },
      {
        imgPath: liverampCtv,
        isBlog: false,
        title: "Real-time Identity Resolution & CTV Platform",
        description: "Details not disclosed",
        technologies: [
          "Java",
          "Golang",
          "AWS",
          "GCP",
          "Kubernetes",
          "Redis",
          "Kafka",
          "Aerospike",
          "DV360",
          "CTV",
          "High-Scale Systems",
          "Real-time Processing",
        ],
        link: "https://docs.liveramp.com/safe-haven/en/platform-guide-to-connected-tv-targeting-and-measurement.html",
      },
    ],
  },
  deshaw: {
    title: "D. E. Shaw & Co. - Trading & Infrastructure",
    projects: [
      {
        imgPath: pickleImg,
        isBlog: false,
        title: "High-Performance Serialization Library",
        description:
          "Engineered a cutting-edge Python serialization library for 'exotic' objects like lambdas and user-defined classes at DE Shaw. Achieved 100x performance advantage over open-source counterparts like dill and cloudpickle.",
        technologies: ["Python", "C++", "Serialization", "Performance", "HPC"],
        link: "https://www.youtube.com/watch?v=u3QyAGVE2n4&ab_channel=PythonIndia",
      },
      {
        imgPath: profileImg,
        isBlog: false,
        title: "Performance Monitoring Framework",
        description:
          "Architected a holistic framework for performance monitoring and regression detection of APIs and libraries at DE Shaw. Integrated real-time analytics with Grafana, InfluxDB, and automated anomaly detection.",
        technologies: ["Python", "Grafana", "InfluxDB", "DevOps", "Monitoring"],
        link: "#",
      },
      {
        imgPath: py2to3Img,
        isBlog: false,
        title: "Python 2 to 3 Migration",
        description:
          "Led a team of 4 developers in migrating ~30 repositories containing ~2.5 million lines of code from Python 2 to Python 3.8 at DE Shaw. Implemented CI/CD pipelines and optimized legacy codebase with modern Python features.",
        technologies: ["Python", "CI/CD", "Leadership", "Migration", "DevOps"],
        link: "#",
      },
      {
        imgPath: pyflybyImg,
        isBlog: false,
        title: "Pyflyby - Open Source Contribution",
        description:
          "A set of productivity tools for Python. Actively contributed to development, maintenance, improvements, and production releases to PyPI. Forked from DE Shaw's open source project to enhance Python developer productivity.",
        technologies: ["Python", "Open Source", "DevTools", "PyPI"],
        link: "https://github.com/deshaw/pyflyby",
      },
    ],
  },
  professional: {
    title: "Other Professional Work",
    projects: [
      {
        imgPath: citiImg,
        isBlog: false,
        title: "Robothon Trading Platform - Citi",
        description:
          "Developed a Global Markets Trading Competition platform for fixed income market making at Citi. Built with Java, Spring Boot, Python, Kafka, Redis, and integrated SWIG for low-latency communication between languages.",
        technologies: [
          "Java",
          "Spring Boot",
          "Python",
          "Kafka",
          "Redis",
          "SWIG",
        ],
        link: "#",
      },
      {
        imgPath: drdoCvImg,
        isBlog: false,
        title: "Advanced Object Tracking Algorithm - DRDO",
        description:
          "Spearheaded a novel computer vision algorithm for precise object tracking in video sequences at DRDO. Achieved remarkable accuracy with mean-center location error of 6.791 and F-measure of 0.78, published in Expert Systems with Applications journal.",
        technologies: [
          "Python",
          "Computer Vision",
          "ML/AI",
          "OpenCV",
          "Research",
        ],
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0957417417301628",
      },
    ],
  },
  blogs: {
    title: "Technical Blogs & Talks",
    projects: [
      {
        imgPath: proxyImg,
        isBlog: true,
        title: "Create Your Own HTTP Proxy Using Google Cloud Compute Engine",
        description:
          "A comprehensive guide on setting up a personal HTTP proxy server using Google Cloud Platform's Compute Engine, perfect for bypassing geo-restrictions and enhancing online privacy.",
        technologies: [
          "GCP",
          "Networking",
          "Cloud Computing",
          "Security",
          "Technical Writing",
        ],
        link: "https://medium.com/@rsaim/create-your-own-http-proxy-using-google-cloud-compute-engine-791f82db547a",
      },
      {
        imgPath: pyconImg,
        isBlog: true,
        title: "PyCon India 2020 Talk",
        description:
          "Delivered a technical talk on Parallel Computing (Concurrency vs Parallelism) and Serialization/Pickling at PyCon India 2020. Showcased real-world benchmarks, comparative studies, and hands-on demos of in-house solutions at DE Shaw.",
        technologies: ["Python", "Public Speaking", "HPC", "Teaching"],
        link: "https://www.youtube.com/watch?v=example",
      },
    ],
  },
  personal: {
    title: "Personal & Open Source Projects",
    projects: [
      {
        imgPath: instasanityImg,
        isBlog: false,
        title: "Instasanity - AI Instagram Cleanup",
        description:
          "AI-Powered Instagram Cleanup tool built with Python. Automates the process of cleaning up Instagram content using machine learning algorithms to identify and categorize posts for better content management.",
        technologies: [
          "GenAI",
          "Ollama",
          "Python",
          "AI/ML",
          "Instagram API",
          "Data Science",
        ],
        link: "https://github.com/rsaim/instasanity",
      },
      {
        imgPath: chromeExtImg,
        isBlog: false,
        title: "Chrome Extension - Educative",
        description:
          "Chrome extension built with JavaScript to make the text content of Educative.io courses wider for better readability. Enhances the learning experience by optimizing page layout and content presentation.",
        technologies: ["JavaScript", "Chrome APIs", "CSS", "Web Extension"],
        link: "https://github.com/rsaim/chrome-extension-educative",
      },
      {
        imgPath: dnsImg,
        isBlog: false,
        title: "DNS Server Application",
        description:
          "Simplified Authoritative DNS Server implemented in Python. A lightweight DNS server that handles domain name resolution with custom configurations and logging capabilities for educational and testing purposes.",
        technologies: ["Python", "Networking", "DNS", "System Programming"],
        link: "https://github.com/rsaim/dns_app",
      },
      {
        imgPath: jeevanstambhImg,
        isBlog: false,
        title: "Jeevanstambh Foundation Website",
        description:
          "Developed and maintained the website for Jeevanstambh Foundation, an NGO working in various areas of relief management. Built with HTML/CSS/JavaScript to support their social impact initiatives and community outreach programs.",
        technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
        link: "https://jeevanstambh.in/",
      },
    ],
  },
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">Projects</h1>
        <p style={{ color: "white" }}>
          Professional projects and open-source contributions organized by
          company and technology stack.
        </p>

        {/* Render each section */}
        {Object.entries(projectData).map(([sectionId, section]) => (
          <div id={sectionId} key={sectionId}>
            <h2
              className="project-heading"
              style={{ fontSize: "2.1em", paddingTop: "30px" }}
            >
              <strong className="purple">
                {section.title.split(" - ")[0]}
              </strong>
              {section.title.includes(" - ") &&
                ` - ${section.title.split(" - ")[1]}`}
            </h2>
            <div className="project-list-container">
              {section.projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        ))}
      </Container>
    </Container>
  );
}

export default Projects;
