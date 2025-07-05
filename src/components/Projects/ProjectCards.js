import React from "react";
import { FaGithub, FaBlog, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <div
      className="project-list-item"
      role="article"
      aria-label={`Project: ${props.title}`}
    >
      <div className="project-list-image">
        <img
          src={props.imgPath}
          alt={`${props.title} preview`}
          className="project-list-img"
        />
        <div className="project-list-overlay">
          <div className="project-type-badge">
            {props.isBlog ? (
              <>
                <FaBlog size={12} /> Blog Post
              </>
            ) : (
              <>
                <FaGithub size={12} /> Project
              </>
            )}
          </div>
        </div>
      </div>

      <div className="project-list-content">
        <h3 className="project-list-title">{props.title}</h3>
        <p className="project-list-description">{props.description}</p>

        <div className="project-list-footer">
          {props.technologies && (
            <div className="project-list-tech-stack">
              {props.technologies.map((tech, index) => (
                <span key={index} className="tech-tag-list">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {props.link !== "#" && (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-list-btn"
              aria-label={`${
                props.isBlog ? "View blog post" : "View project"
              }: ${props.title}`}
            >
              <FaExternalLinkAlt size={14} />
              <span className="btn-text">
                {props.isBlog ? "Read Article" : "View Project"}
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
