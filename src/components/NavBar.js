import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import InfoIcon from '@material-ui/icons/Info';
import RecentActorsSharpIcon from '@material-ui/icons/RecentActorsSharp';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';
import AndroidSharpIcon from '@material-ui/icons/AndroidSharp';
import logo from "../images/loubana.png"

const useStyles = makeStyles({
  root: {
    width: "100%",
    background:'#000'
  },
  nav: {
    color:"white"
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
        <NavLink to="/" exact  activeStyle={activeSt}>
          <BottomNavigationAction  label="About" value="about" icon={<InfoIcon />} className={classes.nav} />
        </NavLink>
        <NavLink to="/resume" exact  activeStyle={activeSt}> 
          <BottomNavigationAction label="resume" value="resume" icon={<AndroidSharpIcon />} className={classes.nav}/>
        </NavLink>
        {/* <NavLink to="/" exact ><img src={logo} alt="" className={classes.imgSt}/>
          <BottomNavigationAction  />
        </NavLink> */}
        <NavLink to="/" exact ><img src={logo} alt="" className={classes.imgSt}/>
        </NavLink>
        <NavLink to="/Portfolio" exact  activeStyle={activeSt}> 
          <BottomNavigationAction label="Portfolio" value="portfolio" icon={<AssignmentTurnedInSharpIcon />} className={classes.nav}/>
        </NavLink>
        <NavLink to="/Contact" exact  activeStyle={activeSt}> 
          <BottomNavigationAction label="Contact" value="contact" icon={<RecentActorsSharpIcon />} className={classes.nav} />
        </NavLink>
      </BottomNavigation>
      </Container>
      </div>
    )
}
 
export default NavBar;
