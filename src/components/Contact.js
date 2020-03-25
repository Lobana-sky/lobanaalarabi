import React from 'react'
import Container from '@material-ui/core/Container';
import contact from "../images/contactme.png"
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles(theme => ({
  paper: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing(2),
    background: 'rgba(206,226,250,0.50)'
  },
}));
export default function Contact() {
    const classes = useStyles();
   
    return (
        <Container maxWidth="sm">
          <div>
            <div className={classes.wrapper}>
              <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <Paper elevation={1} className={classes.paper}>
                <img src={contact} alt="" height="50%" width="100%"/>
                <List className={"text-center"}>

                <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationOnIcon color='error' fontSize="large"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Location" secondary="Istanbul-Turkey" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CallIcon color='error' fontSize="large"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary="+90-531-687-09-54" />
      </ListItem>


      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon color='error' fontSize="large"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="loubanaeng@gmail.com" />
      </ListItem>


      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GitHubIcon color='error' fontSize="large"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="github" secondary={<a href="https://github.com/Lobana-sky" style={{textDecoration:"none",color:"darkgrey"}}>Follow Me</a>} />
      </ListItem>



      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LinkedInIcon color='error' fontSize="large"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="LinkedIn" 
        secondary={<a href="https://www.linkedin.com/in/lobana-alarabi-38470b199/" style={{textDecoration:"none",color:"darkgrey"}}>Follow Me</a>} />
      </ListItem>


      


    </List>
    <Card.Footer className="text-muted text-center"><span style={{fontSize:"100%",color:"red"}}>Very Welcome &hearts;</span>
                     </Card.Footer>

{/* 
                <Card className="text-center m-2">
                        <Card.Header >Contact Lobana</Card.Header>
                        <Card.Body>
                          <Card.Text style={{color:"black",fontSize:"10px"}}>
                          <List>


                <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationOnIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Location" secondary="Istanbul-Turkey" />
      </ListItem>



      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CallIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary="+90-531-687-09-54" />
      </ListItem>


      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary="loubanaeng@gmail.com" />
      </ListItem>


      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GitHubIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="github" secondary={<a href="https://github.com/Lobana-sky">github</a>} />
      </ListItem>



      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LinkedInIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="LinkedIn" secondary={<a href="https://www.linkedin.com/in/lobana-alarabi-38470b199/">LinkedIn</a>} />
      </ListItem>


      


    </List>
                      </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">Very Welcome<span style={{fontSize:"100%",color:"red"}}>&hearts;</span>
                     </Card.Footer>
                      </Card> */}
                </Paper>
              </Slide>
            </div>
          </div>
        </Container>
          )}




