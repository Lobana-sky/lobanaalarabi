import React from 'react'
import contact from "../images/contactme.png"
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import Card from 'react-bootstrap/Card'
import CallIcon from '@material-ui/icons/Call';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "../App.css"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SendIcon from '@material-ui/icons/Send';

export default function Contact() {
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
          <div>
            <div>
              <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <Paper elevation={1} className="paper">
                <div className="d-flex justify-content-center">
                <img src={contact} alt="contact" height="70%" width="60%" />
                </div>
                <div className="bounceInDown" >
                <List className="text-center">
               <Row className="App-logo" style={{opacity:"0",animationFillMode: "both"}}> 
               <Col xs={12} md={4} id="iconHover">
                 <ListItem >
                <ListItemAvatar>
                    <LocationOnIcon fontSize="large"/>
                </ListItemAvatar>
                <ListItemText primary="Location"  secondary="Istanbul-Turkey" className="colorChange"/>
              </ListItem>
              </Col>

      <Col xs={12} md={4}  id="iconHover">
        <ListItem  >
        <ListItemAvatar>
            <CallIcon fontSize="large"/>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary="+90-531-687-09-54"className="colorChange" />
      </ListItem></Col>


     <Col xs={12} md={4} id="iconHover">
       <ListItem >
        <ListItemAvatar>
            <EmailIcon fontSize="large"/>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="loubanaeng@gmail.com" className="colorChange" />
      </ListItem></Col> </Row>


     <Row className="App-logo1" style={{opacity:"0",animationFillMode: "both"}}>
       <Col xs={12} md={4} id="iconHover">
        <ListItem >
        <ListItemAvatar>
            <GitHubIcon fontSize="large"/>
        </ListItemAvatar>
        <ListItemText primary="github" className="colorChange" secondary={<a href="https://github.com/Lobana-sky" 
        style={{textDecoration:"none",color:"#424242"}}>Follow Me</a>} />
      </ListItem></Col> 



     <Col xs={12} md={4} id="iconHover"> 
     <ListItem >
        <ListItemAvatar>
            <LinkedInIcon fontSize="large"/>
        </ListItemAvatar>
        <ListItemText primary="LinkedIn" className="colorChange"
        secondary={<a href="https://www.linkedin.com/in/lobana-alarabi-38470b199/" 
        style={{textDecoration:"none",color:"#424242"}}>Follow Me</a>} />
      </ListItem></Col> 

     <Col xs={12} md={4} id="iconHover"> 
     <ListItem>
        <ListItemAvatar>
          <SendIcon fontSize="large"/>
        </ListItemAvatar>
        <ListItemText className="colorChange" primary="Send Message" 
        secondary={<div><Button onClick={handleClickOpen} style={{textShadow: "2px 2px black"}}>
       By clicking here
    </Button>
    <div>
    
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
    </Dialog></div></div>} />
      </ListItem>
      </Col>
      </Row>



    </List>
    </div>
    <Card.Footer className="text-muted text-center">
      <span className="colorChange glow">Very Welcome <span className=" glow">&hearts;</span></span>
                     </Card.Footer>
                </Paper>
              </Slide>
            </div>
          </div>
          </Col>
  </Row>
</Container>
          )}




