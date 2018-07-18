import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Landing from './Pages/Landing'
import Dashboard from './Pages/Dashboard'
import Nav from './Components/Nav'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
