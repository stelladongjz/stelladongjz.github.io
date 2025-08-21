import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">UX/UI & Research </strong>Projects
        </h1>
        <p style={{ color: "white" }}>
          A collection of my design work, research projects, and academic contributions in Human-Computer Interaction.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Healthcare UX Design System"
              description="Comprehensive design system for healthcare applications, focusing on accessibility and user-centered design. Includes component library, design tokens, and usability guidelines for medical professionals and patients."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Voice Interface Research"
              description="Research project exploring natural language processing in voice-controlled interfaces. Conducted user studies on voice interaction patterns and designed conversational UI flows for improved user experience."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Accessibility Design Audit"
              description="Comprehensive accessibility audit and redesign of educational platform. Implemented WCAG 2.1 guidelines, conducted user testing with assistive technology users, and improved overall usability scores by 40%."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Mobile App Redesign"
              description="Complete redesign of mobile banking application focusing on user experience and visual hierarchy. Conducted user research, created wireframes, and implemented modern design patterns resulting in 25% increase in user engagement."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Design Thinking Workshop"
              description="Led design thinking workshops for cross-functional teams, teaching human-centered design methodologies. Created frameworks for ideation, prototyping, and user testing that have been adopted across multiple organizations."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="User Research Portfolio"
              description="Collection of user research methodologies including surveys, interviews, usability testing, and ethnographic studies. Applied research findings to inform design decisions and improve product development processes."
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
