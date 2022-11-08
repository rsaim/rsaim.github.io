import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone,
            <br />
            <br />
            I am <span className="purple">Saim Raza </span> from <span className="purple"> New York City, US.</span>
            <br />
            <br />I graduared with B. Tech. in Mathematics and Computing from <span className="purple">Delhi Technological University (DTU)</span> in 2016.
            <br />
            <br />Currently, I'm studying MS in Computer Science at <span className="purple">New York University (NYU) Courant</span>. I'll graduate in May 2023.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Taekwondo (Black belt from Kukkiwon, South Korea)
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Docuseries
            </li>
            <li className="about-activity">
              <ImPointRight /> Driving cars and bikes
            </li>
          </ul>
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
