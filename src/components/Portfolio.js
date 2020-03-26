// import Container from '@material-ui/core/Container';
import portfolio from "../images/portfolio.png"
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from 'react-bootstrap/Carousel';
import React, {useState} from 'react';
import movie from "../images/movie.png";
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import mentor from "../images/mentor.PNG";
import abbuloka from "../images/abbuloka.png"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "../App.css"

const useStyles = makeStyles(theme => ({
  paper: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing(2),
    background: 'rgba(206,226,250,0.30)',
    padding:"1em",
    marginBottom:"5em"
  },
}));

export default function Portfolio() {
    const classes = useStyles();
    return (
      <Container fluid="md">
      <Row>
        <Col>
      <div >
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Paper elevation={1} className={classes.paper}>
        <div className="d-flex justify-content-center">
          <img src={portfolio} alt="portfolio" height="70%" width="60%" />
          </div>
        <div style={{margin:" 1em 4em"}} >
        <ControlledCarousel />
        </div>
        </Paper>
      </Slide>
      </div>
      </Col>
  </Row>
</Container>
)}
const urlLinks={
  background:"rgba(206,226,250,0.90)",
  color:"#000",
  borderRadius: "2em",
 }
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mentor} 
            alt="First slide"
          />
          <Carousel.Caption >
            <div id="sliderText" style={urlLinks}>
            <h3 >MentorShip</h3>
            <pre><a href="https://github.com/Lobana-sky/mentorship"><GitHubIcon /></a>  <a href="https://osamaakb.github.io/mentorship/"><HttpIcon /></a></pre>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={abbuloka} 
            alt="Second slide"
          />
  
          <Carousel.Caption >
          <div id="sliderText" style={urlLinks}>
          <h3>Abbuloka</h3>
            <pre><a href="https://github.com/Lobana-sky/abbulokapremium"><GitHubIcon /></a>  <a href="https://abbuloka.netlify.com"><HttpIcon /></a></pre>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movie} height="100%" width="100%"
            alt="Third slide"
          />
  
          <Carousel.Caption >
          <div id="sliderText" style={urlLinks}>
          <h3>Movie</h3>
            <pre><a href="https://github.com/Lobana-sky/movie-explorer/tree/team"><GitHubIcon /></a>  <a href="https://github.com/Lobana-sky/movie-explorer/tree/team"><HttpIcon /></a></pre>
            </div>
          </Carousel.Caption>
        </Carousel.Item> 
      </Carousel>
    );
  }
  
