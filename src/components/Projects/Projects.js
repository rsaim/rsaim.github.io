import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "./Projects.css";

// Project data organized by sections
const projectData = {
  liveramp: {
    title: "LiveRamp Holdings - GenAI & Infrastructure",
    projects: [
      {
        imgPath:
          "https://liveramp.com/wp-content/uploads/2022/02/Blog-post-header_LiveRamps-Brand-Identity_488x436.jpg",
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
        imgPath:
          "https://docs.liveramp.com/connect/en/image/uuid-652d9f1b-51a5-b014-0db2-33f4c429995f.png",
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
        imgPath:
          "https://files.realpython.com/media/Object-Serialization-With-the-Python-Pickle-Module_Watermarked.8e4667c2f71f.jpg",
        isBlog: false,
        title: "High-Performance Serialization Library",
        description:
          "Engineered a cutting-edge Python serialization library for 'exotic' objects like lambdas and user-defined classes at DE Shaw. Achieved 100x performance advantage over open-source counterparts like dill and cloudpickle.",
        technologies: ["Python", "C++", "Serialization", "Performance", "HPC"],
        link: "https://www.youtube.com/watch?v=u3QyAGVE2n4&ab_channel=PythonIndia",
      },
      {
        imgPath:
          "https://files.realpython.com/media/How-to-Profile-the-Performance-of-Your-Python-Code_Watermarked.d85e91e64471.jpg",
        isBlog: false,
        title: "Performance Monitoring Framework",
        description:
          "Architected a holistic framework for performance monitoring and regression detection of APIs and libraries at DE Shaw. Integrated real-time analytics with Grafana, InfluxDB, and automated anomaly detection.",
        technologies: ["Python", "Grafana", "InfluxDB", "DevOps", "Monitoring"],
        link: "#",
      },
      {
        imgPath:
          "https://www.softwebsolutions.com/wp-content/uploads/2022/10/Python-blog.jpg",
        isBlog: false,
        title: "Python 2 to 3 Migration",
        description:
          "Led a team of 4 developers in migrating ~30 repositories containing ~2.5 million lines of code from Python 2 to Python 3.8 at DE Shaw. Implemented CI/CD pipelines and optimized legacy codebase with modern Python features.",
        technologies: ["Python", "CI/CD", "Leadership", "Migration", "DevOps"],
        link: "#",
      },
      {
        imgPath:
          "https://opengraph.githubassets.com/9b005a19198ae1733234f7a734bb6cd840b1645b43d82d2af0f7a02f052755a9/deshaw/pyflyby",
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
        imgPath:
          "https://media.licdn.com/dms/image/v2/D5610AQHIjSgb2DgLhg/image-shrink_800/image-shrink_800/0/1733421089914?e=2147483647&v=beta&t=XSr9OdpRL_PphU_NZggXyjWW2NolQFodK4rbUgYwqAM",
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
        imgPath:
          "https://ars.els-cdn.com/content/image/1-s2.0-S0957417417X00067-cov200h.gif",
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
        imgPath:
          "https://kinsta.com/wp-content/uploads/2023/02/what-is-a-proxy.jpg",
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
        imgPath: "https://i.ytimg.com/vi/u3QyAGVE2n4/sddefault.jpg",
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
        imgPath:
          "https://github.com/rsaim/instasanity/raw/main/image/README/1751515431775.png",
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
        imgPath:
          "https://miro.medium.com/v2/resize:fit:1200/1*J7CqaSkb9X1l-TmGH5fdBQ.png",
        isBlog: false,
        title: "Chrome Extension - Educative",
        description:
          "Chrome extension built with JavaScript to make the text content of Educative.io courses wider for better readability. Enhances the learning experience by optimizing page layout and content presentation.",
        technologies: ["JavaScript", "Chrome APIs", "CSS", "Web Extension"],
        link: "https://github.com/rsaim/chrome-extension-educative",
      },
      {
        imgPath: "https://i.ytimg.com/vi/okUIQB4HeIU/maxresdefault.jpg",
        isBlog: false,
        title: "DNS Server Application",
        description:
          "Simplified Authoritative DNS Server implemented in Python. A lightweight DNS server that handles domain name resolution with custom configurations and logging capabilities for educational and testing purposes.",
        technologies: ["Python", "Networking", "DNS", "System Programming"],
        link: "https://github.com/rsaim/dns_app",
      },
      {
        imgPath: "https://i.ytimg.com/vi/GJi8yVRMLys/mqdefault.jpg",
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
