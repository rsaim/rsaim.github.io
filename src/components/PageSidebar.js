import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import "./PageSidebar.css";

function PageSidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    {
      id: "home",
      title: "Home",
      subtitle: "Welcome",
      icon: "🏠",
      level: 1,
    },
    {
      id: "about",
      title: "About Me",
      subtitle: "Professional Background",
      icon: "👨‍💻",
      level: 1,
    },
    {
      id: "liveramp",
      title: "LiveRamp Holdings",
      subtitle: "GenAI & Infrastructure",
      icon: "🚀",
      level: 2,
    },
    {
      id: "deshaw",
      title: "D. E. Shaw & Co.",
      subtitle: "Trading & Infrastructure",
      icon: "📈",
      level: 2,
    },
    {
      id: "professional",
      title: "Other Professional",
      subtitle: "Citi, DRDO, Talks",
      icon: "💼",
      level: 2,
    },
    {
      id: "personal",
      title: "Personal Projects",
      subtitle: "Open Source",
      icon: "🔧",
      level: 2,
    },
    {
      id: "timeline",
      title: "Career Timeline",
      subtitle: "Professional Journey",
      icon: "📅",
      level: 2,
    },
    {
      id: "skills",
      title: "Technical Skills",
      subtitle: "Skillset & Tools",
      icon: "⚡",
      level: 1,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      // Always show sidebar
      setIsVisible(true);

      // Find active section
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const getProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    return (scrollTop / docHeight) * 100;
  };

  return (
    <div className={`page-sidebar ${isVisible ? "visible" : ""}`}>
      <div className="sidebar-progress">
        <div
          className="progress-bar"
          style={{ height: `${getProgress()}%` }}
        ></div>
      </div>

      <div className="sidebar-header-main">
        <h4>Page Navigation</h4>
        <div className="sidebar-line-main"></div>
      </div>

      <Nav className="flex-column sidebar-nav-main">
        {sections.map((section, index) => (
          <div key={section.id} className="sidebar-item-wrapper-main">
            <Nav.Link
              className={`sidebar-item-main level-${section.level} ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => scrollToSection(section.id)}
            >
              <div className="sidebar-icon-main">{section.icon}</div>
              <div className="sidebar-content-main">
                <div className="sidebar-title-main">{section.title}</div>
                <div className="sidebar-subtitle-main">{section.subtitle}</div>
              </div>
              <div className="sidebar-arrow-main">→</div>
            </Nav.Link>
            {index < sections.length - 1 && section.level === 1 && (
              <div className="section-separator"></div>
            )}
          </div>
        ))}
      </Nav>

      <div className="sidebar-footer-main">
        <div className="scroll-progress">
          <span>Page Progress</span>
          <div className="progress-circle">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="8"
                fill="none"
                stroke="rgba(168, 85, 247, 0.3)"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="8"
                fill="none"
                stroke="#a855f7"
                strokeWidth="2"
                strokeDasharray={`${2 * Math.PI * 8}`}
                strokeDashoffset={`${
                  2 * Math.PI * 8 * (1 - getProgress() / 100)
                }`}
                transform="rotate(-90 12 12)"
              />
            </svg>
            <span className="progress-text">{Math.round(getProgress())}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSidebar;
