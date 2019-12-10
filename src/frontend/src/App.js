import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {AuthContext} from './context/auth';




/* Scenes */
import Home from './scenes/Home.js';

/* Components */

/* Misc */
import './App.css';

/* Assets */

function App(props) {
    
    
  return (
    <AuthContext.Provider value={false}>
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path = "/" component={Home}/>
          </Switch>
        </Router>
      </React.Fragment>
    </AuthContext.Provider>
  );
}

export default App;
