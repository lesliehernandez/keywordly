import React from 'react';
import {Redirect} from "react-router-dom";

function App(props){
    return (
      <div>
        {props.history.location.pathname === '/' ? <Redirect to='/dashboard' /> : null}
      </div>
    );
}

export default App;
