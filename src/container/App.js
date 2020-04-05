import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import About from '../components/About';
import Divider from '@material-ui/core/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
  return (
    <div >
    <Router >
      <NavBar />
      <Divider light />
      <Route exact path="/lobanaalarabi" component={About} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/Portfolio" component={Portfolio} />
      <Route exact path="/Contact" component={Contact} />
      <Divider light />
    </Router>
    </div>
  );
};

export default App


