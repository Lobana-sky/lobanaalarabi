import portfolio from "../media/portfolio.png"
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import React from 'react';
import movie from "../media/movie.png";
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import mentor from "../media/mentor.PNG";
import abbuloka from "../media/abbuloka.png";
import natakallam from "../media/natakallam.png"
import yemek from "../media/yemek.png";
import eyelash from "../media/eyelash.png";
import spaceGroup from "../media/spaceGroup.png"
import {Row,Col,Container} from 'react-bootstrap';
import Project from './Project'
import "../App.css"

export default function Portfolio() {
  
    return (
      <Container fluid="md">
      <Row>
        <Col>
      <div >
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Paper elevation={1} className="paper">
        <div className="d-flex justify-content-center">
          <img src={portfolio} alt="portfolio" height="70%" width="60%" />
          </div>
          <div className="Portfolio" >
        <Project/>
        </div>
        </Paper>
      </Slide>
      </div>
      </Col>
  </Row>
</Container>
)}