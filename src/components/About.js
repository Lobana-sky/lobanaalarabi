import React from 'react';
import Container from '@material-ui/core/Container';
import aboutme from "../images/aboutme.png"
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  paper: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing(2),
    background: 'rgba(206,226,250,0.30)',
    padding:"1em",
    marginBottom:"15em"
  },
}));
const About = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <Container maxWidth="md" >
    <div className={classes.wrapper}>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Paper elevation={100} className={classes.paper} >
          <div style={{padding:"0 10em"}}>
          <img src={aboutme} alt="aboutme" height="70%" width="100%" />
          </div>
          <div style={{marginTop:"1em"}}>
          <p>Hello, my name is Lobana Alarabi.A Web Designer Junior.I was born in Aleppo Syria,
          and now living in Turkey.I studied computer engineering in Aleppo Unevirsity specialize in artificial intelligence.
          Programing is my life,keeping learning more and more,
          If you have a project or creative need that I can help with,
          <Button color="secondary" onClick={handleClickOpen}>
          please get in touch
      </Button>.</p>
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
            autoFocus
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
 
        </Container>
    )
};

export default About;