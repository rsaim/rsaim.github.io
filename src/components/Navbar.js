import React, { useState } from "react";
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
  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId.replace("#", "")}`;
      return;
    }

    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    updateExpanded(false);
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                onClick={() => scrollToSection("#home")}
                style={{ cursor: "pointer" }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => scrollToSection("#timeline")}
                style={{ cursor: "pointer" }}
              >
                <BsBriefcase style={{ marginBottom: "2px" }} /> Timeline
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => scrollToSection("#blogs")}
                style={{ cursor: "pointer" }}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs & Talks
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => scrollToSection("#personal")}
                style={{ cursor: "pointer" }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Personal Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => scrollToSection("#skills")}
                style={{ cursor: "pointer" }}
              >
                <BiCodeAlt style={{ marginBottom: "2px" }} /> TechStack
              </Nav.Link>
            </Nav.Item>

            {/* Divider */}
            <Nav.Item className="nav-divider">
              <span className="divider-line"></span>
            </Nav.Item>

            {/* Social Links */}
            <div className="social-links">
              <a
                href="https://github.com/rsaim"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/raza-saim/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://stackoverflow.com/users/rsaim"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaStackOverflow />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:saimorsaim[at]gmail[dot]com"
                    .replace("[at]", "@")
                    .replace("[dot]", ".");
                }}
                className="social-link"
                title="saimorsaim[at]gmail[dot]com"
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
