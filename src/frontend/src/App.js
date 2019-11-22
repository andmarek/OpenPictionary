import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Scenes */
import Home from './scenes/Home.js';

/* Components */

/* Misc */
import './App.css';

/* Assets */

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
         <Route exact path = "/" component={Home}/>
       </Switch>
      </Router>
    </React.Fragment> 
  );
}

export default App;