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
import "../App.css"

export default function Project() {
  
    return (
   
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

      
)}