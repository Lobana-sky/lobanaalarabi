import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import InfoIcon from '@material-ui/icons/Info';
import RecentActorsSharpIcon from '@material-ui/icons/RecentActorsSharp';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';
import logo from "../images/loubana.png"
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles({
  root: {
    width: "100%",
    background:'#000'
  },
  nav: {
    color:"white",
    margin:"0px",
    padding:"0px"
   },
   link: {
    padding: '12px',
    background:'#000'
  },
  imgSt:{
    width:"100%",
    height:"100%",
    padding:"0.40em"
  }
});
const activeSt={
  background: 'rgba(206,226,250,0.5)'
}
function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState("about");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
      <div className={classes.link}>
      <Container maxWidth="sm" >
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <NavLink to="/lobanaalarabi" exact
        activeStyle={activeSt} 
         >
          <BottomNavigationAction  label="About" value="about" icon={<InfoIcon />} className={classes.nav} />
        </NavLink>
        <NavLink to="/resume" exact 
        activeStyle={activeSt}
         > 
          <BottomNavigationAction label="resume" value="resume" icon={<FaceIcon />} className={classes.nav}/>
        </NavLink>
        <NavLink to="/lobanaalarabi" exact
        // activeStyle={activeSt}
         ><img src={logo} alt="" className={classes.imgSt}/>
        </NavLink>
        <NavLink to="/Portfolio" exact
        activeStyle={activeSt}
          > 
          <BottomNavigationAction label="Portfolio" value="portfolio" icon={<AssignmentTurnedInSharpIcon />} className={classes.nav}/>
        </NavLink>
        <NavLink to="/Contact" exact  
        activeStyle={activeSt}
        > 
          <BottomNavigationAction label="Contact" value="contact" icon={<RecentActorsSharpIcon />} className={classes.nav} />
        </NavLink>
      </BottomNavigation>
      </Container>
      </div>
    )
}
 
export default NavBar;
