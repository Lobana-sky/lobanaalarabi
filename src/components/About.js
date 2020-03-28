import React from 'react';
import aboutme from "../images/aboutme.png"
import Ben from "../images/benn.png"
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Tooltip from '@material-ui/core/Tooltip';
import "../App.css"

const About = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
      <Container fluid="md">
      <Row>
        <Col>
    <div >
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Paper elevation={100} className="paper" >
          <div className="d-flex justify-content-center">
          <img src={aboutme} alt="aboutme" height="70%" width="60%" />
          </div>
          <div id="benImage"  className="App-logo1">
          <Button style={{color:"#424242"}} onClick={handleClickOpen}>
          <Tooltip title="It is My pleasure to visit my website for any additional info please get in touch with me you are very Welcome" 
          placement="top-start">
          <img id="imgHI" src={Ben} alt="Ben" height="30%" width="100%"/></Tooltip>
      </Button>
          </div>
          <div style={{marginTop:"1em"}} className="App-logo" >
          <p className="colorChange">Hello, my name is Lobana Alarabi.A Web Designer Junior.
          I was born in Aleppo Syria,and now living in Turkey.
          I studied computer engineering in Aleppo Unevirsity specialize in artificial intelligence.
          Programing is my life,keeping learning more and more,
          If you have a project or creative need that I can help with 
          </p>
      <div>
      <Button style={{color:"#424242"}} onClick={handleClickOpen}>
          please get in touch.<span>&#9997;</span>
      </Button>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Your Request</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            color="secondary"
          />
          <TextField
            required
            color="secondary"
            rows="4"
            margin="dense"
            id="message"
            label="Message"
            fullWidth
            placeholder="Your Message"
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="secondary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
          </div>
        </Paper>
      </Slide>
    </div>
 
    </Col>
  </Row>
</Container>
    )
};

export default About;