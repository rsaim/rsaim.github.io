import React, { useState } from "react";
import { FaGithub, FaBlog, FaExternalLinkAlt } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

function ProjectCards(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="project-list-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
        <div className="project-list-header">
          <h3 className="project-list-title">{props.title}</h3>
          <div className="project-list-icon">
            <BsArrowUpRight
              size={18}
              className={isHovered ? "icon-hover" : ""}
            />
          </div>
        </div>

        <p className="project-list-description">{props.description}</p>

        <div className="project-list-footer">
          {props.technologies && (
            <div className="project-list-tech-stack">
              {props.technologies.slice(0, 4).map((tech, index) => (
                <span key={index} className="tech-tag-list">
                  {tech}
                </span>
              ))}
              {props.technologies.length > 4 && (
                <span className="tech-tag-list tech-more">
                  +{props.technologies.length - 4}
                </span>
              )}
            </div>
          )}

          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-list-btn"
            aria-label={`${props.isBlog ? "View blog post" : "View project"}: ${
              props.title
            }`}
          >
            <FaExternalLinkAlt size={14} />
            <span className="btn-text">
              {props.isBlog ? "Read Article" : "View Project"}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
