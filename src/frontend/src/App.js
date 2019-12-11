import React, {Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {AuthContext} from './context/auth';

/* Scenes */
import Home from './scenes/Home.js';

/* Components */

/* Misc */
import './App.css';

/* Assets */

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "false",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

   

   }
    componentDidMount() {
      this.checkLoginStatus();
    };

    checkLoginStatus() {
      console.log("checking login status");
    };

  render () {
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
}
export default App;
