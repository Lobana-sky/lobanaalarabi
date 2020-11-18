import React from 'react';
import portfolio from "../media/portfolio.png";
import {Row,Col,Container} from 'react-bootstrap';
import {Paper,Slide} from "@material-ui/core";
import Project from './Project';
import projectData from './projectData';
import "../App.css";
export default function Portfolio() {
    return (
      <Container fluid="md">
          <Row>
            <Col>
              <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <Paper elevation={1} className="paper">
                  <div className="d-flex justify-content-center">
                    <img src={portfolio} alt="portfolio" height="70%" width="60%" />
                  </div>
                  <Container className="Portfolio">
                    <Row>
                    {projectData.map((project)=>
                    {
                    return(
                    <Project
                        key={project.id}
                        src={project.src}
                        alt={project.alt}
                        projectName={project.projectName}
                        type={project.type}
                        description={project.description}
                        githubLink={project.githubLink}
                        demoLink={project.demoLink}
                    />);
                    }
                    )}
                    </Row>
                  </Container>
                </Paper>
              </Slide>
            </Col>
          </Row>
      </Container>
)}