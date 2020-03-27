import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import InfoIcon from '@material-ui/icons/Info';
import RecentActorsSharpIcon from '@material-ui/icons/RecentActorsSharp';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';
import logo from "../images/loubana.png"
import FaceIcon from '@material-ui/icons/Face';
import "../App.css"
import { cyan } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';
function NavBar() {
  const [value, setValue] = React.useState("about");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const activeSt={
    background: cyan[900],
    }
    return (
      <div className="link">
      <Container maxWidth="sm" id="navbar">
      <BottomNavigation value={value} onChange={handleChange} className="root">
        <NavLink to="/lobanaalarabi" exact
        activeStyle={activeSt} 
         >
          <Tooltip title="about" placement="top-start"><BottomNavigationAction icon={<InfoIcon  style={{ color: cyan[300] }} />} className="nav " /></Tooltip>
        </NavLink>
        <NavLink to="/resume" exact 
        activeStyle={activeSt}
         > 
          <Tooltip title="resume" placement="top-start"><BottomNavigationAction icon={<FaceIcon style={{ color: cyan[300] }}/>} className="nav"/></Tooltip>
        </NavLink>
        <NavLink to="/lobanaalarabi" exact
         ><img src={logo} alt="" id="loubanaImg" height="100%" width="100%"/>
        </NavLink>
        <NavLink to="/Portfolio" exact
        activeStyle={activeSt}
          > 
          <Tooltip title="portfolio" placement="top-start"><BottomNavigationAction icon={<AssignmentTurnedInSharpIcon style={{ color: cyan[300]  }}/>} className="nav"/></Tooltip>
        </NavLink>
        <NavLink to="/Contact" exact  
        activeStyle={activeSt}
        > 
          <Tooltip title="contact" placement="top-start"><BottomNavigationAction icon={<RecentActorsSharpIcon style={{ color: cyan[300] }}/>} className="nav"/></Tooltip>
        </NavLink>
      </BottomNavigation>
      </Container>
      </div>
    )
}
 
export default NavBar;
