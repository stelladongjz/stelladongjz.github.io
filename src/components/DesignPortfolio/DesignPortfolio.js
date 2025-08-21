import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Particle from "../Particle";
import "./DesignPortfolio.css";
import { 
  SiFigma, 
  SiAdobecreativecloud, 
  SiSketch, 
  SiInvision,
  SiZeplin,
  SiMiro,
  SiNotion
} from "react-icons/si";

function DesignPortfolio() {
  const designProjects = [
    {
      title: "Healthcare Design System",
      category: "Design System",
      description: "Comprehensive design system for healthcare applications with accessibility focus",
      tools: ["Figma", "Sketch", "InVision"],
      image: "healthcare-design.jpg",
      details: "Created a scalable design system with 50+ components, accessibility guidelines, and design tokens for medical applications."
    },
    {
      title: "Voice Interface Research",
      category: "Research",
      description: "User research on voice-controlled interfaces and conversational UI design",
      tools: ["User Research", "Prototyping", "Usability Testing"],
      image: "voice-interface.jpg",
      details: "Conducted ethnographic studies with 30+ participants, designed conversational flows, and improved user satisfaction by 35%."
    },
    {
      title: "Mobile Banking Redesign",
      category: "UX/UI Design",
      description: "Complete redesign focusing on user experience and visual hierarchy",
      tools: ["Figma", "Sketch", "User Testing"],
      image: "mobile-banking.jpg",
      details: "Redesigned mobile banking app resulting in 25% increase in user engagement and 40% reduction in support tickets."
    },
    {
      title: "Accessibility Audit",
      category: "Research & Design",
      description: "Comprehensive accessibility audit and redesign of educational platform",
      tools: ["WCAG Guidelines", "User Testing", "Figma"],
      image: "accessibility.jpg",
      details: "Implemented WCAG 2.1 guidelines, conducted testing with assistive technology users, improved usability scores by 40%."
    },
    {
      title: "Design Thinking Workshops",
      category: "Education",
      description: "Led workshops teaching human-centered design methodologies",
      tools: ["Miro", "Workshop Facilitation", "Design Methods"],
      image: "workshops.jpg",
      details: "Created frameworks for ideation, prototyping, and user testing adopted across multiple organizations."
    },
    {
      title: "User Research Portfolio",
      category: "Research",
      description: "Collection of user research methodologies and findings",
      tools: ["Surveys", "Interviews", "Usability Testing"],
      image: "research.jpg",
      details: "Applied research findings to inform design decisions and improve product development processes."
    }
  ];

  const researchAreas = [
    "Human-Computer Interaction",
    "User Experience Design",
    "Accessibility & Inclusive Design",
    "Design Systems",
    "User Research Methodologies",
    "Voice & Conversational Interfaces",
    "Healthcare Technology Design",
    "Mobile & Responsive Design"
  ];

  return (
    <Container fluid className="design-portfolio-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Design Portfolio</strong> & Research
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "50px" }}>
          A showcase of my UX/UI design work, research projects, and academic contributions in Human-Computer Interaction
        </p>

        {/* Research Areas */}
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8}>
            <h3 style={{ color: "white", textAlign: "center", marginBottom: "30px" }}>
              Research Areas
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
              {researchAreas.map((area, index) => (
                <Badge 
                  key={index} 
                  bg="purple" 
                  style={{ 
                    fontSize: "14px", 
                    padding: "8px 16px", 
                    margin: "5px",
                    borderRadius: "20px"
                  }}
                >
                  {area}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>

        {/* Design Projects Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {designProjects.map((project, index) => (
            <Col md={6} lg={4} className="project-card" key={index}>
              <Card className="design-card">
                <Card.Body>
                  <div style={{ marginBottom: "15px" }}>
                    <Badge bg="secondary" style={{ marginRight: "5px" }}>
                      {project.category}
                    </Badge>
                  </div>
                  <Card.Title style={{ color: "white", fontSize: "1.2em", marginBottom: "15px" }}>
                    {project.title}
                  </Card.Title>
                  <Card.Text style={{ color: "lightgray", marginBottom: "20px" }}>
                    {project.description}
                  </Card.Text>
                  <div style={{ marginBottom: "15px" }}>
                    <strong style={{ color: "white" }}>Tools & Methods:</strong>
                    <div style={{ marginTop: "8px" }}>
                      {project.tools.map((tool, toolIndex) => (
                        <Badge 
                          key={toolIndex} 
                          bg="purple" 
                          style={{ 
                            fontSize: "12px", 
                            padding: "5px 10px", 
                            margin: "2px",
                            borderRadius: "15px"
                          }}
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Card.Text style={{ color: "lightgray", fontSize: "0.9em" }}>
                    {project.details}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Design Tools */}
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8}>
            <h3 style={{ color: "white", textAlign: "center", marginBottom: "30px" }}>
              Design & Research Tools
            </h3>
            <Row style={{ justifyContent: "center" }}>
              <Col xs={4} md={2} className="tech-icons">
                <SiFigma />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiAdobecreativecloud />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiSketch />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiInvision />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiZeplin />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiMiro />
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <SiNotion />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default DesignPortfolio;
