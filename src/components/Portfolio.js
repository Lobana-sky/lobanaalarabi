import Container from '@material-ui/core/Container';
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

const useStyles = makeStyles(theme => ({
  root: {
    height: 180,
  },
  paper: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing(2),
    // background: 'linear-gradient(90deg, rgba(247,230,238,1) 0%, rgba(206,226,250,1) 100%)',
    background: 'rgba(206,226,250,0.30)',
    padding:"1em",
        marginBottom:"5em"
  },
}));

export default function Portfolio() {
    const classes = useStyles();
    return (
    <Container maxWidth="md">
      <div >
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Paper elevation={1} className={classes.paper}>
        <div style={{padding:"0 10em"}}>
          <img src={portfolio} alt="portfolio" height="70%" width="100%" />
          </div>
        <div style={{margin:" 1em 4em"}} >
        <Container maxWidth="sm">
        <ControlledCarousel />
        </Container>
        </div>
        </Paper>
      </Slide>
      </div>
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
            <h6 >MentorShip</h6>
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
  
          <Carousel.Caption style={urlLinks}>
          <h3>Abbuloka</h3>
            <pre><a href="https://github.com/Lobana-sky/abbulokapremium"><GitHubIcon /></a>  <a href="https://abbuloka.netlify.com"><HttpIcon /></a></pre>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movie} height="100%" width="100%"
            alt="Third slide"
          />
  
          <Carousel.Caption style={urlLinks}>
          <h3>Movie</h3>
            <pre><a href="https://github.com/Lobana-sky/movie-explorer/tree/team"><GitHubIcon /></a>  <a href="#"><HttpIcon /></a></pre>
          
            {/* https://lobana-sky.github.io/movie-explorer */}
          </Carousel.Caption>
        </Carousel.Item> 
      </Carousel>
    );
  }
  
