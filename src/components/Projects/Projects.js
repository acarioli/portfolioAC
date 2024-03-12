import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/blog.png";
import almacafe from "../../Assets/Projects/almacafe.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
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
              imgPath={bitsOfCode}
              isBlog={false}
              title="Web Scrapping System"
              description="
              A system for popular streamer information, includes filters, a search bar, column sorting, and CSV data download."              
              ghLink="/"
              demoLink="/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
