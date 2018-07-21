import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import withAuth from './Components/Auth/withAuth';

function App(props){
    return (
      <div>
        {props.history.location.pathname === '/' ? <Redirect to='/dashboard' /> : null}
      </div>
    );
}

export default withAuth(App);
