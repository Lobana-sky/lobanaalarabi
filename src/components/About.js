import React from 'react';
import Container from '@material-ui/core/Container';
import aboutme from "../images/aboutme.png"
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing(2),
    background: 'rgba(206,226,250,0.30)'
  },
}));
const About = () => {
  const classes = useStyles();
    return (
        <Container maxWidth="sm">
        <div >
    <div className={classes.wrapper}>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Paper elevation={100} className={classes.paper} >
          <img src={aboutme} alt="" height="50%" width="100%" style={{margin:'0 auto'}}/>
          <div style={{marginTop:"1em"}}>
          <p>Hello, my name is Lobana Alarabi.A Web Designer Junior.I was born in Aleppo Syria,
          and now living in Turkey.I studied computer engineering in Aleppo Unevirsity specialize in artificial intelligence.
          Programing is my life,keeping learning more and more,
          If you have a project or creative need that I can help with,
          <a href="#">please get in touch</a>.</p>
          </div>
        </Paper>
      </Slide>
    </div>
  </div>
        </Container>
    )
};

export default About;


