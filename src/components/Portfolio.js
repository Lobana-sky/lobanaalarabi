import portfolio from "../media/portfolio.png"
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import React from 'react';
import movie from "../media/movie.png";
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import mentor from "../media/mentor.PNG";
import abbuloka from "../media/abbuloka.png";
import natakallam from "../media/ee.jpg"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
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
          <div className="card" >
            <div className="image">
              <img src={mentor} alt="MentorShip"/>
              </div>
              <div className="details">
              <div className="center">
                <h1 id="h1description">Mentorship</h1>
                <span className="colorChange hid">Team Project</span>
                <p id="pDescription" className="colorChange">Website where Mentor/Mentee all over the world can find each others.</p>
                <ul>
                  <li><a href="https://github.com/Lobana-sky/mentorship">
                  <GitHubIcon /></a></li>
                  <li><a href="https://osamaakb.github.io/mentorship/"><HttpIcon /></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src={abbuloka} alt="abbuloka" />
            </div>
            <div className="details">
              <div className="center">
                <h1 id="h1description" className="colorChange">ABBULOKA</h1>
                <span className="colorChange hid">Team Project</span>
                <p id="pDescription" className="colorChange">First Project with fellow Re:Coded using HTML CSS BOOTSTRAP.</p>
                <ul>
                  <li><a href="https://github.com/Lobana-sky/abbulokapremium"><GitHubIcon /></a></li>
                  <li><a href="https://abbuloka.netlify.com/"><HttpIcon /></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src={movie} alt="movie" />
            </div>
            <div className="details">
              <div className="center">
                <h1 id="h1description">MOVIE</h1>
                <span className="colorChange hid">In class</span>
                <p id="pDescription" className="colorChange">By visiting this website you will show all the popular move search your film etc.</p>
                <ul>
                  <li><a href="https://github.com/Lobana-sky/movie-explorer/tree/team"><GitHubIcon /></a></li>
                  <li><a href="https://github.com/Lobana-sky/movie-explorer/tree/team"><HttpIcon /></a></li>
                </ul>
              </div>
            </div>
          </div>  

          <div className="card">
            <div className="image">
              <img src={natakallam} alt="namakallam" />
            </div>
            <div className="details">
              <div className="center">
                <h1 id="h1description">Natakallam</h1>
                <span className="colorChange hid">Client Project</span>
                <p id="pDescription" className="colorChange">real project to comunicate speaker native with learner.</p>
                <ul>
                  <li><a href="https://github.com/Lobana-sky/movie-explorer/tree/team"><GitHubIcon /></a></li>
                  <li><a href="https://ntk.netlify.app/"><HttpIcon /></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        </Paper>
      </Slide>
      </div>
      </Col>
  </Row>
</Container>
)}