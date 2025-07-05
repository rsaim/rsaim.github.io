import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Timeline.css";

function Timeline() {
  const [visibleItems, setVisibleItems] = useState([]);

  const timelineData = [
    {
      id: 1,
      year: "2024 - Present",
      type: "work",
      title: "Senior Software Engineer",
      company: "LiveRamp Holdings, Inc.",
      location: "New York, NY",
      description: "Backend and GenAI",
      skills: [
        "GenAI",
        "RAG",
        "Kubernetes",
        "GCP",
        "SingleStore",
        "Python",
        "Golang",
      ],
      icon: "🚀",
      color: "#a855f7",
    },
    {
      id: 1,
      year: "2024",
      type: "work",
      title: "Senior Software Engineer",
      company: "BloomBerg LP",
      location: "New York, NY",
      description: "Trading Infra and Market Data",
      skills: ["Kubernetes", "Python", "C/C++", "React"],
      icon: "🚀",
      color: "#a855f7",
    },
    {
      id: 2,
      year: "2023",
      type: "education",
      title: "M.S. in Computer Science",
      company: "New York University (Courant)",
      location: "New York, NY",
      description: "ML/AI",
      skills: ["Algorithms", "Distributed Systems", "ML", "AI", "DL"],
      icon: "🎓",
      color: "#d946ef",
    },
    {
      id: 8,
      year: "2023",
      type: "work",
      title: "Founding Engineer",
      company: "skillet.ai",
      location: "San Francisco, CA",
      description: "DeFi and NFT Marketplace",
      skills: ["Etherium", "Smart Contracts", "Decentralized Finance"],
      icon: "🧠",
      color: "#d946ef",
    },
    {
      id: 6,
      year: "2022",
      type: "work",
      title: "Research Intern",
      company: "NASA",
      location: "California, USA",
      description: "Peta-Byte scale Data Engineering using Zarr and Dask",
      skills: [
        "Research",
        "Algorithms",
        "Space Systems",
        "Data Engineering",
        "AWS",
      ],
      icon: "🛰️",
      color: "#d946ef",
    },
    {
      id: 3,
      year: "2016 - 2021",
      type: "work",
      title: "Tech Lead",
      company: "D. E. Shaw & Co.",
      location: "New York, NY",
      description: "Trading Infrastructure",
      skills: ["Python", "Trading Systems", "Leadership", "Serialization"],
      icon: "📈",
      color: "#a855f7",
    },
    {
      id: 4,
      year: "2020",
      type: "achievement",
      title: "PyCon India 2020 Speaker",
      company: "Python Community",
      location: "Virtual",
      description: "National Talk on HPC in Python/C++",
      skills: ["Public Speaking", "Python", "Parallel Computing", "Community"],
      icon: "🎤",
      color: "#d946ef",
    },
    {
      id: 9,
      year: "2016 - 2017",
      type: "work",
      title: "Research Associate",
      company: "DRDO (Defence Research and Development Organisation)",
      location: "New Delhi, India",
      description: "Object Tracking and Computer Vision Research",
      skills: ["ML", "AI", "CV", "Research", "Publications"],
      icon: "🔬",
      color: "#a855f7",
    },
    {
      id: 10,
      year: "2016",
      type: "education",
      title: "Bachelor of Technology",
      company: "Delhi Technological University (DTU)",
      location: "New Delhi, India",
      description: "CS and Applied Mathematics",
      skills: ["CS", "Applied Mathematics", "Algorithms"],
      icon: "🎓",
      color: "#d946ef",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setVisibleItems((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getTypeIcon = (type) => {
    switch (type) {
      case "work":
        return "💼";
      case "education":
        return "🎓";
      case "achievement":
        return "🏆";
      default:
        return "📍";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "work":
        return "#a855f7";
      case "education":
        return "#d946ef";
      case "achievement":
        return "#f59e0b";
      default:
        return "#6b7280";
    }
  };

  return (
    <Container fluid className="timeline-section" id="timeline">
      <Container>
        <div className="timeline-header">
          <h2 className="timeline-title">
            Professional <strong className="purple">Journey</strong>
          </h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-grid">
            {timelineData.map((item, index) => (
              <div key={item.id} className="timeline-wrapper">
                <div
                  className={`timeline-item ${
                    visibleItems.includes(item.id) ? "visible" : ""
                  }`}
                  data-id={item.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="timeline-content">
                    <div
                      className="timeline-icon"
                      style={{ backgroundColor: getTypeColor(item.type) }}
                    >
                      {item.icon}
                    </div>

                    <div className="timeline-card">
                      <div className="timeline-header-card">
                        <div className="timeline-year">{item.year}</div>
                        <div className="timeline-type">
                          {getTypeIcon(item.type)}{" "}
                          {item.type.charAt(0).toUpperCase() +
                            item.type.slice(1)}
                        </div>
                      </div>

                      <h3 className="timeline-card-title">{item.title}</h3>
                      <h4 className="timeline-company">{item.company}</h4>
                      <p className="timeline-location">📍 {item.location}</p>

                      <p className="timeline-description">{item.description}</p>

                      <div className="timeline-skills">
                        {item.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="timeline-skill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow connectors */}
                {index < timelineData.length - 1 && (
                  <div className="timeline-arrow horizontal">
                    <div className="arrow-line"></div>
                    <div className="arrow-head">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Timeline;
