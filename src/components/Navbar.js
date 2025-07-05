import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const scrollToAbout = () => {
    const aboutSection = document.querySelector(".about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
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
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={scrollToAbout} style={{ cursor: "pointer" }}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
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
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* Divider */}
            <Nav.Item className="nav-divider">
              <span className="divider-line"></span>
            </Nav.Item>

            {/* Social Links */}
            <Nav.Item className="social-links">
              <Nav.Link
                href="https://github.com/rsaim"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title="GitHub"
              >
                <AiFillGithub />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="social-links">
              <Nav.Link
                href="https://www.linkedin.com/in/raza-saim/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="social-links">
              <Nav.Link
                href="https://stackoverflow.com/users/rsaim"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title="Stack Overflow"
              >
                <FaStackOverflow />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="social-links">
              <Nav.Link
                href="https://www.instagram.com/rsa.im/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title="Instagram"
              >
                <AiFillInstagram />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/rsaim"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
