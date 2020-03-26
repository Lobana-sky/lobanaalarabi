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
import Avatar from '@material-ui/core/Avatar';
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
        <Col >
          <div>
            <div>
              <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <Paper elevation={1} className="paper">
                <div className="d-flex justify-content-center">
          <img src={contact} alt="contact" height="70%" width="60%" />
          </div>
                <List className={"text-center"}>
               <Row> <Col xs={12} md={4}><ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocationOnIcon color='error' fontSize="large"/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Location" secondary="Istanbul-Turkey" />
              </ListItem></Col>

      <Col xs={12} md={4}><ListItem>
        <ListItemAvatar>
          <Avatar>
            <CallIcon color='error' fontSize="large"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary="+90-531-687-09-54" />
      </ListItem></Col>


     <Col xs={12} md={4}><ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon color='error' fontSize="large"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="loubanaeng@gmail.com" />
      </ListItem></Col> </Row>


     <Row><Col xs={12} md={4}> <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GitHubIcon color='error' fontSize="large"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="github" secondary={<a href="https://github.com/Lobana-sky" style={{textDecoration:"none",color:"darkgrey"}}>Follow Me</a>} />
      </ListItem></Col> 



     <Col xs={12} md={4}> <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LinkedInIcon color='error' fontSize="large"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="LinkedIn" 
        secondary={<a href="https://www.linkedin.com/in/lobana-alarabi-38470b199/" style={{textDecoration:"none",color:"darkgrey"}}>Follow Me</a>} />
      </ListItem></Col> 



     <Col xs={12} md={4}> <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SendIcon color='error' fontSize="large"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Send Message" 
        secondary={<div><Button color="secondary" onClick={handleClickOpen}>
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
      </ListItem></Col></Row>



    </List>
    <Card.Footer className="text-muted text-center"><span style={{fontSize:"100%",color:"red"}}>Very Welcome &hearts;</span>
                     </Card.Footer>
                </Paper>
              </Slide>
            </div>
          </div>
          </Col>
  </Row>
</Container>
          )}




