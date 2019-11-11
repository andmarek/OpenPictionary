import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Scenes */
import { Home } from './scenes/Home.js';

/* Components */
import { Navbar } from './components/navbar.js';

/* Misc */
import './App.css';

/* Assets */
import logo from './logo.svg';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Switch>
         <Route exact path = "/" component={Home}/>
       </Switch>
      </Router>
    </React.Fragment> 
  );
}

export default App;
