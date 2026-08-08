import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import profile from "../../config/profile.json";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1
        className="project-heading"
        style={{ paddingBottom: "20px", textAlign: "center", width: "100%" }}
      >
        Days I <strong className="purple">Code</strong>
      </h1>
      {/* The calendar renders at a fixed pixel width (one column per week of
          the year) wider than most phone screens; without this wrapper it
          overflows and forces the whole page to scroll horizontally. */}
      <div style={{ maxWidth: "100%", overflowX: "auto" }}>
        <GitHubCalendar
          username={profile.socials.github.username}
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </div>
    </Row>
  );
}

export default Github;
