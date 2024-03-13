import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import almacafe from "../../Assets/Projects/almacafe.png";
import webscraping from "../../Assets/Projects/webscraping.png";

function Projects() {
  return (
    <Container fluid className="project-section" style={{ minHeight: "100vh" }}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card aspect-ratio-box">
            <ProjectCard
              imgPath={almacafe}
              isBlog={false}
              title="Alma Café"
              description="Informative website about a Buenos Aires café featuring different locations, menus, and contact and franchisee forms."
              ghLink="https://github.com/acarioli/almacafe"
              demoLink="https://almacafe.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webscraping}
              isBlog={false}
              title="Web Scraping System"
              description="
              A system for popular streamer information, includes filters, a search bar, column sorting, and CSV data download."              
              ghLink="/"
              demoLink="https://ws-streamers-frontend-krjzqq3ih-aldanas-projects-24d1fdff.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
