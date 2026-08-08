import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../config/profile.json";
import socialLinks from "./socialLinks";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <h3>
            Copyright © {year} {profile.identity.initials}
          </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialLinks.map(({ key, href, label, Icon }) => (
              <li className="social-icons" key={key}>
                <a
                  href={href}
                  style={{ color: "white" }}
                  target={key === "email" ? undefined : "_blank"}
                  rel={key === "email" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
