import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "./Projects.css";
import profile from "../../config/profile.json";
import assetMap from "../../config/assetMap";

const projectData = profile.projects;

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
                <ProjectCard
                  key={index}
                  {...project}
                  imgPath={assetMap.projects[project.imgKey]}
                />
              ))}
            </div>
          </div>
        ))}
      </Container>
    </Container>
  );
}

export default Projects;
