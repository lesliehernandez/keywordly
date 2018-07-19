import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import AuthService from './Components/Auth/AuthService';
import withAuth from './Components/Auth/withAuth';
import Dashboard from './Pages/Dashboard'




class App extends Component {




  render() {
    return (
      <div>
        {this.props.history.location.pathname === '/' ? <Redirect to='/dashboard' /> : null}
      </div>
    );
  }
}

export default withAuth(App);
