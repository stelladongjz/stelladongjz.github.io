import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Stella Dong</span>
            from <span className="purple"> [Your Location].</span>
            <br />
            I am currently pursuing my PhD in Human-Computer Interaction, focusing on user experience design and accessibility research.
            <br />
            I have completed my Master's degree in [Your Field] and have extensive experience in UX/UI design and user research.
            <br />
            <br />
            Apart from research and design, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Conducting User Research
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Design Systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Academic Writing & Publishing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Design with empathy, research with rigor, and create experiences that truly matter!"{" "}
          </p>
          <footer className="blockquote-footer">Stella Dong</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
