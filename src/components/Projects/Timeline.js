import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Timeline.css";

function Timeline() {
  const [visibleItems, setVisibleItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const timelineRef = useRef(null);

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
      icon: "https://cdn.brandfetch.io/arbor.io/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed",
      color: "#a855f7",
    },
    {
      id: 2,
      year: "2024",
      type: "work",
      title: "Senior Software Engineer",
      company: "BloomBerg LP",
      location: "New York, NY",
      description: "Trading Infra and Market Data",
      skills: ["Kubernetes", "Python", "C/C++", "React"],
      icon: "https://data.bloomberglp.com/company/sites/51/2019/08/og-image-generic-lp.png",
      color: "#a855f7",
    },
    {
      id: 3,
      year: "2023",
      type: "education",
      title: "M.S. in Computer Science",
      company: "New York University (Courant)",
      location: "New York, NY",
      description: "ML/AI",
      skills: ["Algorithms", "Distributed Systems", "ML", "AI", "DL"],
      icon: "https://yt3.ggpht.com/-RZYi5isxH_M/AAAAAAAAAAI/AAAAAAAAAAA/rmWpoe2qZzI/s900-c-k-no/photo.jpg",
      color: "#d946ef",
    },
    {
      id: 4,
      year: "2023",
      type: "work",
      title: "Founding Engineer",
      company: "skillet.ai",
      location: "San Francisco, CA",
      description: "DeFi and NFT Marketplace",
      skills: ["Ethereum", "Smart Contracts", "Decentralized Finance"],
      icon: "https://uploads-ssl.webflow.com/63823d9415bbb64cd877f3ce/63d18fbc316c63162855c2d0_Frame%201.png",
      color: "#d946ef",
    },
    {
      id: 5,
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
      icon: "https://e7.pngegg.com/pngimages/28/842/png-clipart-logo-nasa-insignia-design-brand-nasa-miscellaneous-blue.png",
      color: "#d946ef",
    },
    {
      id: 6,
      year: "2016 - 2021",
      type: "work",
      title: "Tech Lead",
      company: "D. E. Shaw & Co.",
      location: "New York, NY",
      description: "Trading Infrastructure",
      skills: ["Python", "Trading Systems", "Leadership", "Serialization"],
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/60/D._E._Shaw_%26_Co._logo.png",
      color: "#a855f7",
    },
    {
      id: 7,
      year: "2020",
      type: "achievement",
      title: "PyCon India 2020 Speaker",
      company: "Python Community",
      location: "Virtual",
      description: "National Talk on HPC in Python/C++",
      skills: ["Public Speaking", "Python", "Parallel Computing", "Community"],
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgY4Wfy9hXIn-GOD3xvwiisF8GM97MiktoA&s",
      color: "#d946ef",
    },
    {
      id: 8,
      year: "2015 - 2016",
      type: "work",
      title: "Research Associate",
      company: "DRDO (Defence Research and Development Organisation)",
      location: "New Delhi, India",
      description: "Object Tracking and Computer Vision Research",
      skills: ["ML", "AI", "CV", "Research", "Publications"],
      icon: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Defence_Research_and_Development_Organisation.svg/1200px-Defence_Research_and_Development_Organisation.svg.png",
      color: "#a855f7",
    },
    {
      id: 9,
      year: "2012 - 2016",
      type: "education",
      title: "Bachelor of Technology",
      company: "Delhi Technological University (DTU)",
      location: "New Delhi, India",
      description: "CS and Applied Mathematics",
      skills: ["CS", "Applied Mathematics", "Algorithms"],
      icon: "https://upload.wikimedia.org/wikipedia/en/b/b5/DTU%2C_Delhi_official_logo.png",
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
      {
        threshold: 0.2,
        rootMargin: "50px 0px -100px 0px",
      }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedItem) {
        setSelectedItem(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // Add haptic feedback on supported devices
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleItemKeyDown = (e, item) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleItemClick(item);
    }
  };

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
    <Container
      fluid
      className="timeline-section"
      id="timeline"
      ref={timelineRef}
    >
      <div className="timeline-header">
        <h2 className="timeline-title">
          Professional <strong className="purple">Journey</strong>
        </h2>
        <p className="timeline-subtitle">
          A comprehensive overview of my career milestones and achievements
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-grid">
          {timelineData.map((item, index) => (
            <div key={item.id} className="timeline-wrapper">
              <div
                className={`timeline-item ${
                  visibleItems.includes(item.id) ? "visible" : ""
                } ${selectedItem?.id === item.id ? "selected" : ""}`}
                data-id={item.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleItemClick(item)}
                onKeyDown={(e) => handleItemKeyDown(e, item)}
                tabIndex={0}
                role="button"
                aria-label={`${item.title} at ${item.company}`}
                aria-expanded={selectedItem?.id === item.id}
              >
                <div className="timeline-content">
                  <div
                    className="timeline-icon"
                    style={{ backgroundColor: getTypeColor(item.type) }}
                    aria-hidden="true"
                  >
                    {item.icon.startsWith("http") ? (
                      <img
                        src={item.icon}
                        alt="Timeline icon"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      item.icon
                    )}
                  </div>

                  <div className="timeline-card">
                    <div className="timeline-header-card">
                      <div
                        className="timeline-year"
                        aria-label={`Year: ${item.year}`}
                      >
                        {item.year}
                      </div>
                      <div
                        className="timeline-type"
                        aria-label={`Type: ${item.type}`}
                      >
                        {getTypeIcon(item.type)}{" "}
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </div>
                    </div>

                    <h3 className="timeline-card-title">{item.title}</h3>
                    <h4 className="timeline-company">{item.company}</h4>
                    <p className="timeline-location">📍 {item.location}</p>

                    <p className="timeline-description">{item.description}</p>

                    <div
                      className="timeline-skills"
                      role="list"
                      aria-label="Skills"
                    >
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="timeline-skill"
                          role="listitem"
                          aria-label={`Skill: ${skill}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow connectors */}
              {index < timelineData.length - 1 && (
                <div className="timeline-arrow horizontal" aria-hidden="true">
                  <div className="arrow-line"></div>
                  <div className="arrow-head">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced click indicator */}
      <div className="timeline-interaction-hint" aria-hidden="true">
        <p>Click on any tile to explore details</p>
      </div>
    </Container>
  );
}

export default Timeline;
