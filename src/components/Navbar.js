import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { BsBriefcase } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    };

    const handleScroll = () => {
      // Get all sections
      const sections = ["home", "timeline", "blogs", "personal", "skills"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    // Close mobile menu when clicking on a link
    updateExpanded(false);

    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId.replace("#", "")}`;
      return;
    }

    const section = document.querySelector(sectionId);
    if (section) {
      const navbarHeight = 80; // Account for fixed navbar
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavLinkClick = (e) => {
    // Close mobile menu when clicking outside
    if (expand) {
      updateExpanded(false);
    }
  };

  const handleToggle = () => {
    updateExpanded(!expand);
  };

  const isActiveLink = (sectionId) => {
    const cleanSectionId = sectionId.replace("#", "");
    return activeSection === cleanSectionId;
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`custom-navbar ${navColour ? "navbar-scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <span className="brand-text">RS</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
          className="custom-toggler"
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto navbar-nav-custom"
            onClick={handleNavLinkClick}
          >
            <Nav.Item>
              <Nav.Link
                onClick={() => scrollToSection("#home")}
                className={`nav-link-custom ${
                  isActiveLink("#home") ? "active" : ""
                }`}
                role="button"
                tabIndex={0}
              >
                <AiOutlineHome className="nav-icon" />
                <span className="nav-text">Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => scrollToSection("#timeline")}
                className={`nav-link-custom ${
                  isActiveLink("#timeline") ? "active" : ""
                }`}
                role="button"
                tabIndex={0}
              >
                <BsBriefcase className="nav-icon" />
                <span className="nav-text">Timeline</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                className="nav-link-custom"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen className="nav-icon" />
                <span className="nav-text">Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => scrollToSection("#blogs")}
                className={`nav-link-custom ${
                  isActiveLink("#blogs") ? "active" : ""
                }`}
                role="button"
                tabIndex={0}
              >
                <ImBlog className="nav-icon" />
                <span className="nav-text">Blogs & Talks</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => scrollToSection("#personal")}
                className={`nav-link-custom ${
                  isActiveLink("#personal") ? "active" : ""
                }`}
                role="button"
                tabIndex={0}
              >
                <AiOutlineFundProjectionScreen className="nav-icon" />
                <span className="nav-text">Personal</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => scrollToSection("#skills")}
                className={`nav-link-custom ${
                  isActiveLink("#skills") ? "active" : ""
                }`}
                role="button"
                tabIndex={0}
              >
                <BiCodeAlt className="nav-icon" />
                <span className="nav-text">Skills</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                className="nav-link-custom"
                onClick={() => updateExpanded(false)}
              >
                <MdEmail className="nav-icon" />
                <span className="nav-text">Contact</span>
              </Nav.Link>
            </Nav.Item>

            {/* Divider */}
            <div className="nav-divider">
              <span className="divider-line"></span>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a
                href="https://github.com/rsaim"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/raza-saim/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://stackoverflow.com/users/rsaim"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Stack Overflow Profile"
              >
                <FaStackOverflow />
              </a>
              <a
                href="mailto:saimorsaim@gmail.com"
                className="social-link"
                aria-label="Email Contact"
              >
                <MdEmail />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
